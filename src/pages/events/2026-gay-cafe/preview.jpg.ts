import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;
const CARD = 500;
const RADIUS = 8;

/** The opener's dusk sky in sRGB, because an SVG for sharp cannot use oklch. */
const SKY = { top: "#27324b", bottom: "#6b5266", gold: "#f2cc7a" };

// Astro bundles this route into another folder, so the path is relative to
// the project root, where Astro runs.
const picture = await readFile("src/assets/gay-cafe-2026-invite.jpg");

/**
 * Draw the link preview: the invitation card on the opener's sky.
 *
 * Slack crops a preview to a square thumbnail from the middle, so the card
 * stays inside the middle square.
 *
 * @returns the preview, as a JPEG
 */
export const GET: APIRoute = async () => {
  const x = (WIDTH - CARD) / 2;
  const y = (HEIGHT - CARD) / 2;

  const sky = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
    <defs>
      <linearGradient id="fall" x2="0" y2="1">
        <stop offset="0" stop-color="${SKY.top}" />
        <stop offset="1" stop-color="${SKY.bottom}" />
      </linearGradient>
      <radialGradient id="glow" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1"
        gradientTransform="translate(${WIDTH * 0.5} ${HEIGHT * 0.45}) scale(${WIDTH * 0.6} ${HEIGHT * 0.5})">
        <stop offset="0" stop-color="${SKY.gold}" stop-opacity="0.22" />
        <stop offset="1" stop-color="${SKY.gold}" stop-opacity="0" />
      </radialGradient>
      <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="12" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#fall)" />
    <rect width="100%" height="100%" fill="url(#glow)" />
    <rect x="${x + 12}" y="${y + 24}" width="${CARD - 24}" height="${CARD - 12}"
      rx="${RADIUS}" opacity="0.6" filter="url(#soft)" />
  </svg>`;

  const corners = `<svg xmlns="http://www.w3.org/2000/svg" width="${CARD}" height="${CARD}">
    <rect width="100%" height="100%" rx="${RADIUS}" />
  </svg>`;

  const card = await sharp(picture)
    .resize(CARD, CARD)
    .composite([{ input: Buffer.from(corners), blend: "dest-in" }])
    .png()
    .toBuffer();

  const preview = await sharp(Buffer.from(sky))
    .composite([{ input: card, left: x, top: y }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(preview), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
