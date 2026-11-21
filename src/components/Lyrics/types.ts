/**
 * The lyrics of a song with word timings, as `src/tools/lyrics/` writes them.
 * A word is `[text, start]`; TypeScript infers `(string | number)[]` for it from
 * the JSON, so this type accepts the JSON import as it is.
 */
export interface Lyrics {
  stanzas: { start: number; end: number; words: (string | number)[][] }[][];
}
