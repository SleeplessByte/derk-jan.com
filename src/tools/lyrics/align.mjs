// Times the written lines of a song with the word timestamps that Whisper heard.

const round = (n) => Math.round(n * 100) / 100;

// Whisper gives the first word of a line the silence before it: in both songs,
// it lasts 0.9 s on average, while the other words last 0.4 s.
const FIRST_WORD_S = 0.45;

/**
 * Starts the first word of a line at most FIRST_WORD_S before the second word,
 * so that it does not light up while the singer is still silent.
 * @param {[word: string, start: number][]} words
 */
export function delayFirstWord(words) {
  if (words.length < 2) {
    return words;
  }
  const [[word, start], [, next], ...rest] = words;
  return [
    [word, Math.max(start, round(next - FIRST_WORD_S))],
    words[1],
    ...rest,
  ];
}

/**
 * @param {{ start: number, end: number }[]} words The heard words, in seconds.
 * @param {[text: string, from: number, to: number][][]} stanzas The written
 *   lines. A line is timed with the heard words that start in [from, to).
 */
export function timeStanzas(words, stanzas) {
  return {
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
        // The line still starts with the silence, so that it shows in time to read.
        return {
          start: round(heard[0].start),
          end: round(heard.at(-1).end),
          words: delayFirstWord(timed),
        };
      }),
    ),
  };
}

export function summary(result) {
  const lines = result.stanzas.flat();
  return `${result.stanzas.length} stanzas, ${lines.length} lines, first at ${lines[0].start} s, last ends at ${lines.at(-1).end} s`;
}
