// Times the written lines of a song with the word timestamps that Whisper heard.
// These are rough: align.py refines them afterwards with the sung vocals.

const round = (n) => Math.round(n * 100) / 100;

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
        return {
          start: timed[0][1],
          end: round(heard.at(-1).end),
          words: timed,
        };
      }),
    ),
  };
}

export function summary(result) {
  const lines = result.stanzas.flat();
  return `${result.stanzas.length} stanzas, ${lines.length} lines, first at ${lines[0].start} s, last ends at ${lines.at(-1).end} s`;
}
