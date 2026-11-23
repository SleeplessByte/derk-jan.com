import { readColor } from "./colors";

/** The dust has no detail that needs a sharper canvas. */
export const DUST_RATIO = Math.min(devicePixelRatio, 1.5);

/** The sky is only gradients and a soft edge. */
const SKY_RATIO = 0.5;

/** A canvas over the whole viewport in CSS pixels. */
export interface Layer {
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  ratio: number;
}

/** The card's picture and its box. */
export interface CardArea {
  image: HTMLImageElement;
  width: number;
  height: number;
  radius: number;
}

export function viewportLayer(canvas: HTMLCanvasElement, ratio: number): Layer {
  canvas.width = Math.round(innerWidth * ratio);
  canvas.height = Math.round(innerHeight * ratio);
  canvas.hidden = false;

  const context = canvas.getContext("2d")!;
  context.scale(ratio, ratio);

  return { context, width: innerWidth, height: innerHeight, ratio };
}

/**
 * Make an empty canvas of the same size and scale as the layer.
 *
 * @param layer the layer to copy the size and the scale of
 * @returns the empty layer
 */
export function blankLike(layer: Layer): Layer {
  const canvas = document.createElement("canvas");
  canvas.width = layer.context.canvas.width;
  canvas.height = layer.context.canvas.height;

  const context = canvas.getContext("2d")!;
  context.scale(layer.ratio, layer.ratio);

  return { ...layer, context };
}

/**
 * Copy the sky of the veil to a canvas, so that an effect can erase it bit by
 * bit.
 *
 * @param veil the veil, whose colours the sky uses
 * @param canvas the canvas to paint the sky on
 * @returns the layer with the sky
 */
export function paintSky(veil: HTMLElement, canvas: HTMLCanvasElement) {
  const layer = viewportLayer(canvas, SKY_RATIO);
  const { context, width, height } = layer;

  const fall = context.createLinearGradient(0, 0, 0, height);
  fall.addColorStop(0, readColor(veil, "var(--opener-sky-top)").css());
  fall.addColorStop(1, readColor(veil, "var(--opener-sky-bottom)").css());
  context.fillStyle = fall;
  context.fillRect(0, 0, width, height);

  // Matches `radial-gradient(ellipse 60% 50% at 50% 45%, …)` in Component.astro.
  const glow = readColor(
    veil,
    "color-mix(in oklch, var(--opener-gold) 22%, transparent)",
  );

  const [x, y, rx, ry] = [
    width * 0.5,
    height * 0.45,
    width * 0.6,
    height * 0.5,
  ];

  const light = context.createRadialGradient(0, 0, 0, 0, 0, 1);
  light.addColorStop(0, glow.css());
  light.addColorStop(1, glow.css(0));

  context.save();
  context.translate(x, y);
  context.scale(rx, ry);
  context.fillStyle = light;
  context.fillRect(-x / rx, -y / ry, width / rx, height / ry);
  context.restore();

  return layer;
}

export function drawCard(
  context: CanvasRenderingContext2D,
  { image, width, height, radius }: CardArea,
  at: readonly [number, number],
) {
  const { naturalWidth, naturalHeight } = image;
  const scale = Math.max(width / naturalWidth, height / naturalHeight);
  const [sourceWidth, sourceHeight] = [width / scale, height / scale];

  context.save();
  context.beginPath();
  context.roundRect(at[0], at[1], width, height, radius);
  context.clip();
  context.drawImage(
    image,
    (naturalWidth - sourceWidth) / 2,
    (naturalHeight - sourceHeight) / 2,
    sourceWidth,
    sourceHeight,
    at[0],
    at[1],
    width,
    height,
  );
  context.restore();
}
