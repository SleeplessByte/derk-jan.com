// Builds the lyrics of 2027-rijndam-racers-theme.mp3: the written lines, timed with Whisper's word timestamps.
// Usage: node build-rijndam-racers.mjs <intro.json> <song.json> <lyrics.json>
import { readFileSync, writeFileSync } from "node:fs";

import { summary, timeStanzas } from "./align.mjs";

const [introPath, songPath, out] = process.argv.slice(2);
const transcripts = [introPath, songPath].map((path) =>
  JSON.parse(readFileSync(path, "utf8")),
);

// The intro clip covers 0–22 s, where the run on the whole song heard nothing.
const words = transcripts
  .flatMap((transcript) => transcript.segments)
  .flatMap((segment) => segment.words)
  .map((word) => ({ start: word.start, end: word.end }));

// Each chorus is sung at its own pace, so each gets the line starts Whisper heard.
// In the first two, Whisper hears "History" twice, the second time with a probability
// near zero; the line ends before that artefact.
const chorus = ([a, b, c, history, d, e, f, g]) => [
  ["Rijndam Racers, roll on through!", a, b],
  ["There’s a road ahead for me and you.", b, c],
  ["What’s behind us? History!", c, history],
  ["What’s in front? Move out and let us be!", d, e],
  ["Rijndam Racers, hear us shout,", e, f],
  ["Crank it up, we’re rolling out!", f, g],
];

const preChorus = ([a, b, c]) => [
  ["Keep on turning, let’s be strong.", a, b],
  ["We’ve been racing all along!", b, c],
];

// The written line ends each chorus once, but the singer repeats it.
const repeat = (from, to) => ["Crank it up, we’re rolling out!", from, to];

const stanzas = [
  [["Rijndam Racers, here we go!", 8, 14]],
  [
    ["Hands on the crank, whilst laying down,", 21.8, 26.1],
    ["We take the long way through the town.", 26.1, 29.9],
    ["Side by side, increasing the pace,", 29.9, 33.1],
    ["Big grins and wind across our face.", 33.1, 36.7],
  ],
  preChorus([36.7, 40, 44]),
  [...chorus([45, 48.6, 52.3, 55.2, 55.9, 60.5, 63.5, 68]), repeat(69, 73)],
  [
    ["Every turn can change the view,", 74, 78.05],
    ["Every mile, a story new.", 78.05, 81.6],
    ["If the road gets rough or steep,", 81.6, 85.3],
    ["We turn together, our wheels don’t sleep.", 85.3, 89.1],
  ],
  preChorus([89.1, 93, 97]),
  [
    ...chorus([98, 101.85, 105.6, 108.6, 109.3, 113.7, 116.6, 121]),
    repeat(122, 126.5),
  ],
  [
    ["No looking back, the past is past,", 127, 131.2],
    ["We’ve got a road and room to blast.", 131.2, 134.9],
    ["Make way, make way, we’re coming through,", 134.9, 138],
    ["There is nothing we’d rather do!", 138, 143],
  ],
  [
    ...chorus([146, 149.9, 153.1, 157, 157, 161.25, 164, 169]),
    repeat(169, 173.4),
    ["Rijndam Racers, rolling out!", 173.4, 181],
  ],
];

const result = timeStanzas(words, stanzas);
writeFileSync(out, JSON.stringify(result));
console.log(summary(result));
