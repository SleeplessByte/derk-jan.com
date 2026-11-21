"""Aligns the written lyrics of a song to its sung vocals.

Usage: python3 align.py <song.wav> <lyrics.json> [vocals.wav]

Whisper's word times are guesses: it often counts the silence before a word as
part of that word, so the karaoke lit words up too early. This script refines
lyrics.json in place: Demucs separates the vocals from the music, and wav2vec2
forced alignment finds where each written word sounds, within the time of its
line. The song must be a 44.1 kHz stereo WAV, the format Demucs works in.
Pass vocals.wav to keep the separated vocals, for example to listen to them.
"""
import json
import sys
import unicodedata

import soundfile
import torch
import torchaudio
from demucs.apply import apply_model
from demucs.pretrained import get_model

song_path, lyrics_path = sys.argv[1], sys.argv[2]
vocals_path = sys.argv[3] if len(sys.argv) > 3 else None

# Whisper's line start already includes the silence before the line, so the
# window around a line needs little room before it.
BEFORE_S = 0.25
AFTER_S = 0.5
LAST_LINE_S = 2.0
# A word start counts as sung when the vocals are louder than this, relative
# to the loud parts of the song, within VOICED_S after the start.
VOICED_LEVEL = 0.1
VOICED_S = 0.1

device = "cuda"


def separate_vocals(path):
    model = get_model("htdemucs").to(device).eval()
    audio, rate = soundfile.read(path, dtype="float32", always_2d=True)
    if rate != model.samplerate or audio.shape[1] != model.audio_channels:
        sys.exit(f"{path}: expected {model.samplerate} Hz stereo, got {rate} Hz with {audio.shape[1]} channels")
    wav = torch.from_numpy(audio.T).to(device)
    reference = wav.mean(0)
    wav = (wav - reference.mean()) / reference.std()
    with torch.inference_mode():
        sources = apply_model(model, wav[None], device=device, split=True, overlap=0.25, progress=False)[0]
    sources = sources * reference.std() + reference.mean()
    return sources[model.sources.index("vocals")], rate


vocals, rate = separate_vocals(song_path)
if vocals_path:
    soundfile.write(vocals_path, vocals.T.cpu().numpy(), rate)

bundle = torchaudio.pipelines.WAV2VEC2_ASR_LARGE_LV60K_960H
model = bundle.get_model().to(device).eval()
labels = bundle.get_labels()
index = {label: position for position, label in enumerate(labels)}
# In this model, "-" is the CTC blank and "|" separates words.
BLANK, SEPARATOR = index["-"], index["|"]
mono = torchaudio.functional.resample(vocals.mean(0), rate, bundle.sample_rate)


def tokens_of(word):
    plain = unicodedata.normalize("NFKD", word).upper().replace("’", "'")
    return [index[c] for c in plain if c in index and c not in "-|"]


def align_line(words, start_s, end_s):
    """Returns (start, end, score) per word; None for a word without letters."""
    first_sample = int(start_s * bundle.sample_rate)
    samples = mono[first_sample : int(end_s * bundle.sample_rate)]
    with torch.inference_mode():
        emission, _ = model(samples[None])
    emission = torch.log_softmax(emission, dim=-1)

    targets, ranges = [], []
    for word in words:
        tokens = tokens_of(word)
        if targets and tokens:
            targets.append(SEPARATOR)
        ranges.append((len(targets), len(targets) + len(tokens)) if tokens else None)
        targets.extend(tokens)

    alignment, scores = torchaudio.functional.forced_align(
        emission, torch.tensor([targets], dtype=torch.int32, device=device), blank=BLANK
    )
    spans = torchaudio.functional.merge_tokens(alignment[0], scores[0].exp(), blank=BLANK)
    seconds_per_frame = samples.numel() / emission.size(1) / bundle.sample_rate
    timed = []
    for word_range in ranges:
        if word_range is None:
            timed.append(None)
            continue
        first, last = word_range
        word_spans = spans[first:last]
        timed.append(
            (
                first_sample / bundle.sample_rate + word_spans[0].start * seconds_per_frame,
                first_sample / bundle.sample_rate + word_spans[-1].end * seconds_per_frame,
                sum(span.score for span in word_spans) / len(word_spans),
            )
        )
    return timed


# Loudness of the vocals per 10 ms, to check whether a word start falls where someone sings.
hop = bundle.sample_rate // 100
loudness = mono[: mono.numel() // hop * hop].reshape(-1, hop).pow(2).mean(1).sqrt()
threshold = VOICED_LEVEL * torch.quantile(loudness, 0.95)


def voiced(seconds):
    frame = int(seconds * 100)
    return bool((loudness[frame : frame + int(VOICED_S * 100)] > threshold).any())


with open(lyrics_path, encoding="utf-8") as file:
    lyrics = json.load(file)

lines = [line for stanza in lyrics["stanzas"] for line in stanza]
windows = [
    (
        max(0.0, line["start"] - BEFORE_S),
        lines[position + 1]["start"] + AFTER_S if position + 1 < len(lines) else line["end"] + LAST_LINE_S,
    )
    for position, line in enumerate(lines)
]
checked = {"before": 0, "after": 0, "words": 0}
shifts, doubtful = [], []

for line, (start_s, end_s) in zip(lines, windows):
    words = [word for word, _ in line["words"]]
    timed = align_line(words, start_s, end_s)
    # A word without letters takes the time of the word after it, or before it at the end.
    for position in range(len(timed) - 1, -1, -1):
        if timed[position] is None:
            neighbour = timed[position + 1] if position + 1 < len(timed) else timed[position - 1]
            timed[position] = (neighbour[0], neighbour[0], neighbour[2])
    old_starts = [start for _, start in line["words"]]
    for word, old_start, (new_start, _, score) in zip(words, old_starts, timed):
        checked["words"] += 1
        checked["before"] += voiced(old_start)
        checked["after"] += voiced(new_start)
        shifts.append(new_start - old_start)
        if score < 0.2:
            doubtful.append(f"{new_start:7.2f} {word} (score {score:.2f}) in “{' '.join(words)}”")
    line["words"] = [[word, round(new_start, 2)] for word, (new_start, _, _) in zip(words, timed)]
    line["start"] = round(min(line["start"], timed[0][0]), 2)
    line["end"] = round(max(line["end"], timed[-1][1]), 2)

with open(lyrics_path, "w", encoding="utf-8") as file:
    json.dump(lyrics, file, ensure_ascii=False)

shifts.sort()
print(
    f"{checked['words']} words; sung at their start: {checked['before']} before, {checked['after']} after. "
    f"Shift: median {shifts[len(shifts) // 2]:+.2f} s, "
    f"10% {shifts[len(shifts) // 10]:+.2f} s, 90% {shifts[len(shifts) * 9 // 10]:+.2f} s"
)
for line in doubtful:
    print("doubtful:", line)
