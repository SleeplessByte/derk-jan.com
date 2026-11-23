import type { Rgb } from "./paint-study";

/**
 * Resolve a CSS colour to plain sRGB, for a canvas.
 *
 * The colour resolves in the opener's scope, so that its custom properties
 * and color-mix() work. A canvas reads it back as sRGB bytes, because canvas
 * gradients and pixels need plain colours.
 *
 * @param scope the element whose custom properties apply
 * @param value the CSS colour
 * @returns the colour as RGB bytes, and as CSS with an optional alpha
 */
export function readColor(scope: Element, value: string) {
  const probe = document.createElement("span");
  probe.style.color = value;
  scope.append(probe);
  const resolved = getComputedStyle(probe).color;
  probe.remove();

  const pixel = document.createElement("canvas");
  pixel.width = 1;
  pixel.height = 1;

  // On the CPU. Reading a pixel back from the GPU waits for all its work.
  const context = pixel.getContext("2d", { willReadFrequently: true })!;
  context.fillStyle = resolved;
  context.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = context.getImageData(0, 0, 1, 1).data;

  return {
    rgb: [r, g, b] as Rgb,
    css: (alpha = a / 255) => `rgb(${r} ${g} ${b} / ${alpha})`,
  };
}

export type Color = ReturnType<typeof readColor>;
