// Builds the lyrics of 2026-fruity-xmas.mp3: the written lines, timed with Whisper's word timestamps.
// Usage: node build-lyrics.mjs <intro.json> <song.json> <lyrics.json>
import { readFileSync, writeFileSync } from "node:fs";

const [introPath, songPath, out] = process.argv.slice(2);
const intro = JSON.parse(readFileSync(introPath, "utf8"));
const song = JSON.parse(readFileSync(songPath, "utf8"));

// The intro clip starts 8 s into the song; the run on the whole song missed the first verse.
const INTRO_OFFSET_S = 8;
const words = [
  ...intro.segments.flatMap((segment) =>
    segment.words.map((word) => ({
      ...word,
      start: word.start + INTRO_OFFSET_S,
      end: word.end + INTRO_OFFSET_S,
    })),
  ),
  ...song.segments
    .filter((segment) => segment.start >= 33)
    .flatMap((segment) => segment.words),
].map((word) => ({ start: word.start, end: word.end }));

// Each chorus is sung at its own pace, so each gets the line starts Whisper heard.
const chorus = ([a, b, c, d]) => [
  ["Hey, hey, share some treats at the gay café", a, b],
  ["Let's have cake, let the cold wait outside today", b, c],
  ["First coffee, then the world can spin its way", c, d],
];

const stanzas = [
  [
    ["Frost on the window, cups in a row", 12, 16.4],
    ["You save me a seat where the warm lights glow", 16.4, 20.6],
    ["A little cinnamon, a little time", 20.6, 24.4],
    ["Your laugh makes December feel just fine", 24.4, 29.2],
    ["Hang a coat up, stay a while", 29.2, 32.5],
    ["There's room for every kind of smile", 33, 37.5],
  ],
  [
    ...chorus([38.2, 42.35, 47.05, 51.2]),
    ["Hey, hey, there's a place for us at the gay café", 51.2, 56],
  ],
  [
    ["Red paper garlands loop over the door", 59, 63.2],
    ["Someone's humming softly by the pastry store", 63.2, 68],
    ["We pass the sugar, trade stories and cheer", 68, 71.6],
    ["The best little holiday starts right here", 71.6, 76],
    ["Hang a coat up, stay a while", 76, 79],
    ["There's room for every kind of smile", 79, 84],
  ],
  [
    ...chorus([84.8, 89.45, 93.95, 98.2]),
    ["Hey, hey, there's a place for us at the gay café", 98.2, 103],
  ],
  [
    ["No grand plans, no perfect scene", 106, 110.1],
    ["Just your hand waving me in", 110.1, 114],
    ["One more slice, one more hello", 114.5, 118.5],
    ["A small warm room in the falling snow", 118.5, 122.7],
  ],
  [
    ...chorus([122.7, 127.6, 132.3, 136.6]),
    ["Hey, hey, there's a place for us at the gay café", 136.6, 141.5],
  ],
  [
    ["There's a place for us at the gay café", 141.5, 146],
    ["First coffee, then the world, then the world", 149, 152.9],
    ["First coffee, then the world", 152.9, 158],
  ],
];

const round = (n) => Math.round(n * 100) / 100;

const result = {
  stanzas: stanzas.map((lines) =>
    lines.map(([text, from, to]) => {
      const heard = words.filter(
        (word) => word.start >= from && word.start < to,
      );
      if (heard.length === 0) {
        throw new Error(`No words for "${text}"`);
      }
      const written = text.split(" ");
      // Spread the written words over the heard words, so corrections keep the rhythm.
      const timed = written.map((word, index) => {
        const source =
          heard[
            Math.round(
              (index * (heard.length - 1)) / Math.max(1, written.length - 1),
            )
          ];
        return [word, round(source.start)];
      });
      return { start: timed[0][1], end: round(heard.at(-1).end), words: timed };
    }),
  ),
};

writeFileSync(out, JSON.stringify(result));
const lines = result.stanzas.flat();
console.log(
  `${result.stanzas.length} stanzas, ${lines.length} lines, first at ${lines[0].start} s, last ends at ${lines.at(-1).end} s`,
);
