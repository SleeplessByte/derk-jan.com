import type { APIRoute } from "astro";
import sharp from "sharp";
import graphic from "../../assets/source/Leisure-Food-Cooking-For-Family-Friends-Guests_1--Streamline-Bruxelles-color.svg?raw";
import { COLORS } from "../../components/Recipes/PreviewCard";

const SIZE = 600;
const GRAPHIC = 480;

/**
 * Draw the square link preview of every recipe: the card's illustration on its
 * ground.
 *
 * @returns the preview, as a PNG
 */
export const GET: APIRoute = async () => {
  const drawing = await sharp(Buffer.from(graphic))
    .resize(GRAPHIC, GRAPHIC)
    .png()
    .toBuffer();
  const margin = (SIZE - GRAPHIC) / 2;

  const thumbnail = await sharp({
    create: {
      width: SIZE,
      height: SIZE,
      channels: 3,
      background: COLORS.ground,
    },
  })
    .composite([{ input: drawing, left: margin, top: margin }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(thumbnail), {
    headers: { "Content-Type": "image/png" },
  });
};
