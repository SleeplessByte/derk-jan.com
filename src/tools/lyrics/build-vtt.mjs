// Writes a WebVTT file from lyrics.json: one cue per line, with inline word timestamps.
import { readFileSync, writeFileSync } from "node:fs";

const [source, out] = process.argv.slice(2);
const lyrics = JSON.parse(readFileSync(source, "utf8"));

const stamp = (seconds) => {
  const ms = Math.round(seconds * 1000);
  const h = String(Math.floor(ms / 3_600_000)).padStart(2, "0");
  const m = String(Math.floor((ms % 3_600_000) / 60_000)).padStart(2, "0");
  const s = String(Math.floor((ms % 60_000) / 1000)).padStart(2, "0");
  return `${h}:${m}:${s}.${String(ms % 1000).padStart(3, "0")}`;
};

const cues = lyrics.stanzas.flat().map((line, index) => {
  let previous = line.start;
  const text = line.words
    .map(([word, start], position) => {
      // Inline timestamps must increase; a word sung at the same moment gets none.
      if (position === 0 || start <= previous) {
        return word;
      }
      previous = start;
      return `<${stamp(start)}>${word}`;
    })
    .join(" ");
  return `${index + 1}\n${stamp(line.start)} --> ${stamp(line.end)}\n${text}`;
});

const vtt = [
  "WEBVTT",
  "NOTE\nFruity Xmas: lyrics with word timings. Transcribed with Whisper large-v3\nand corrected by hand. Generated from\nsrc/assets/audio/2026-fruity-xmas.lyrics.json.",
  ...cues,
].join("\n\n");

writeFileSync(out, vtt + "\n");
console.log(`${cues.length} cues written to ${out}`);
