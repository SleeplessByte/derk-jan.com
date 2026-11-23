import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";
import SongPreview from "./_components/Preview/Component";

const SIZE = 1200;

/** The theme's `--lyrics-accent` (oklch(44% 0.13 150)) in sRGB, for satori. */
const COLORS = { sticker: "#006527", text: "#ffffff" };

// Astro bundles this route into another folder, so the paths are relative to
// the project root, where Astro runs.
const cover = await readFile("src/assets/2026-rijndam-racers-cover.jpeg");
const font = await readFile("src/assets/fonts/AlanSans-SemiBold.ttf");

/**
 * Draw the link preview of the song: its cover with its title on a sticker.
 *
 * The cover is cropped to a square, so that every link preview shows the same
 * part of it.
 *
 * @returns the preview, as a JPEG
 */
export const GET: APIRoute = async () => {
  const square = await sharp(cover).resize(SIZE, SIZE).jpeg().toBuffer();
  const svg = await satori(
    SongPreview({
      cover: `data:image/jpeg;base64,${square.toString("base64")}`,
      title: "Rijndam Racers",
      colors: COLORS,
      size: SIZE,
    }),
    {
      width: SIZE,
      height: SIZE,
      fonts: [{ name: "Alan Sans", data: font, weight: 600 }],
    },
  );
  const preview = await sharp(Buffer.from(svg))
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();

  return new Response(new Uint8Array(preview), {
    headers: { "Content-Type": "image/jpeg" },
  });
};
