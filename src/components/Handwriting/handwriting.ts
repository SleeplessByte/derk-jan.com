/*
  Lays out text in EMS Allure, a single-stroke script font (see OFL.txt), as
  one SVG path per glyph. A page can then write the text stroke by stroke,
  and the browser never loads the font as this runs while the page is built.
*/
import font from "./EMSAllure.svg?raw";

interface Glyph {
  d: string;
  advance: number;
}

export interface Writing {
  viewBox: string;
  /** One path per visible glyph, in reading order. */
  glyphs: string[];
}

const attribute = (tag: string, name: string) =>
  tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];

const glyphs = readGlyphs(font);

/**
 * Scales the text to `width` user units. `pen` is the stroke width the page
 * draws with, so the view box leaves room for the stroke around the glyphs.
 */
export function handwriting(
  text: string,
  { width = 280, pen = 2.4 } = {},
): Writing {
  const scale = width / advanceOf(text);
  const paths = layout(text, scale);

  const points = paths.flatMap((d) =>
    [...d.matchAll(/(-?\d*\.?\d+)[ ,](-?\d*\.?\d+)/g)].map(([, x, y]) => [
      Number(x),
      Number(y),
    ]),
  );
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const pad = pen * 2;
  const minX = Math.floor(Math.min(...xs) - pad);
  const minY = Math.floor(Math.min(...ys) - pad);
  const boxWidth = Math.ceil(Math.max(...xs) + pad) - minX;
  const boxHeight = Math.ceil(Math.max(...ys) + pad) - minY;

  return { viewBox: `${minX} ${minY} ${boxWidth} ${boxHeight}`, glyphs: paths };
}

function readGlyphs(svg: string) {
  const fontTag = svg.match(/<font\s[^>]*>/)![0];
  const defaultAdvance = Number(attribute(fontTag, "horiz-adv-x"));
  const map = new Map<string, Glyph>();
  for (const [tag] of svg.matchAll(/<glyph\s[^>]*\/>/g)) {
    const unicode = attribute(tag, "unicode");
    if (unicode === undefined) {
      continue;
    }
    const character = unicode
      .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
        String.fromCodePoint(parseInt(hex, 16)),
      )
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<");
    map.set(character, {
      d: attribute(tag, "d") ?? "",
      advance: Number(attribute(tag, "horiz-adv-x") ?? defaultAdvance),
    });
  }
  return map;
}

function glyphOf(character: string) {
  const glyph = glyphs.get(character);
  if (!glyph) {
    // Fails the build, so a translation never writes a gap.
    throw new Error(`EMS Allure has no glyph for "${character}"`);
  }
  return glyph;
}

function advanceOf(text: string) {
  return [...text].reduce(
    (sum, character) => sum + glyphOf(character).advance,
    0,
  );
}

/** Moves each glyph to its place on the line and flips y, as SVG fonts point y up. */
function layout(text: string, scale: number) {
  let x = 0;
  const paths: string[] = [];
  for (const character of text) {
    const glyph = glyphOf(character);
    if (glyph.d.trim()) {
      const offset = x;
      paths.push(
        glyph.d
          .trim()
          .replace(/\s+/g, " ")
          .replace(
            /(-?\d*\.?\d+(?:e-?\d+)?) (-?\d*\.?\d+(?:e-?\d+)?)/g,
            (_, a, b) =>
              `${round((Number(a) + offset) * scale)} ${round(-Number(b) * scale)}`,
          )
          .replace(/ ?([ML]) ?/g, "$1"),
      );
    }
    x += glyph.advance;
  }
  return paths;
}

function round(value: number) {
  return Math.round(value * 10) / 10;
}
