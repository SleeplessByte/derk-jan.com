"""Transcribes a song with word timestamps.

Usage: python3 transcribe.py <audio> <output.json> [model] [prompt]
"""
import json
import sys
import time

from faster_whisper import WhisperModel

audio, output = sys.argv[1], sys.argv[2]
model_id = sys.argv[3] if len(sys.argv) > 3 else "large-v3"

started = time.time()
model = WhisperModel(model_id, device="cuda", compute_type="float16")
loaded = time.time()

prompt = sys.argv[4] if len(sys.argv) > 4 else None
segments, info = model.transcribe(
    audio,
    beam_size=5,
    initial_prompt=prompt,
    word_timestamps=True,
    # Music is not speech; voice activity detection would cut sung parts.
    vad_filter=False,
    # Without this, Whisper tends to repeat a line over instrumental parts.
    condition_on_previous_text=False,
)

result = {
    "model": model_id,
    "language": info.language,
    "language_probability": info.language_probability,
    "duration": info.duration,
    "segments": [],
}
for segment in segments:
    result["segments"].append(
        {
            "start": segment.start,
            "end": segment.end,
            "text": segment.text,
            "no_speech_prob": segment.no_speech_prob,
            "words": [
                {
                    "word": word.word,
                    "start": word.start,
                    "end": word.end,
                    "probability": word.probability,
                }
                for word in segment.words or []
            ],
        }
    )

with open(output, "w", encoding="utf-8") as file:
    json.dump(result, file, ensure_ascii=False, indent=1)

print(
    f"model {model_id}: loaded in {loaded - started:.1f}s, "
    f"transcribed in {time.time() - loaded:.1f}s, "
    f"language {info.language} ({info.language_probability:.2f}), "
    f"{len(result['segments'])} segments"
)
