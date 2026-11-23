import type { Color } from "./colors";
import { mix, type Point, type Rgb } from "./paint-study";
import { drawCard, type CardArea, type Layer } from "./sky";

/** The card breaks into this many grains per side; each one is a draw call per frame. */
const GRID = 32;
/** The burst runs from the middle of the card to its corners in this time. */
const BURST_MS = 90;
/** Quick, so that the grains read as gold dust, not as broken pieces of picture. */
const GILD_MS = 150;
/** A gold flash over the card hides the moment it turns into grains. */
const FLASH_MS = 350;
const LIFE_MS: readonly [number, number] = [1100, 1900];
/** Grain speeds, as shares of the screen's long side per second. */
const SPEED: readonly [number, number] = [0.35, 1.2];
const GRAVITY = 160;
/** Air takes this share of a grain's speed per second, so the burst slows quickly. */
const DRAG = 2.4;
const STAR_SHARE = 0.08;
const GLINT_SHARE = 0.12;
const SPRITE = 48;
/** Slow, and only on small grains, so that it never counts as flashing. */
const TWINKLE_HZ = 2.5;

interface Grain {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: Rgb;
  release: number;
  life: number;
  look: "dot" | "glint" | "star";
  phase: number;
  /** Where the grain sat in the card. */
  cell: Point;
  loose: boolean;
}

export interface Dust {
  step(time: number, seconds: number): void;
  draw(context: CanvasRenderingContext2D, time: number): void;
}

/**
 * Prepare the card's burst into gold dust.
 *
 * Round grains and a few sparkles fly out from the middle, the outer ones
 * fastest, then slow down, twinkle, and fall. Yields between steps, so that
 * the caller can spread the work over frames.
 *
 * @param layer the canvas that the dust is drawn on
 * @param card the picture on the card, with its size and its rounded corners
 * @param at where the card is on the screen
 * @param colors the gold and the light gold that the grains turn
 * @param sparkle the shape of the label's sparkles
 * @returns the dust, to step and draw once per frame
 */
export function* prepareDust(
  layer: Layer,
  card: CardArea,
  at: Point,
  { gold, light }: { gold: Color; light: Color },
  sparkle: Path2D,
): Generator<void, Dust> {
  const { width, height } = card;
  // The part that has not burst yet stays a sharp picture.
  const whole = document.createElement("canvas");
  whole.width = Math.round(width * layer.ratio);
  whole.height = Math.round(height * layer.ratio);

  const wholeContext = whole.getContext("2d")!;
  wholeContext.scale(layer.ratio, layer.ratio);
  drawCard(wholeContext, card, [0, 0]);

  yield;

  const [cellWidth, cellHeight] = [width / GRID, height / GRID];
  const [centerX, centerY] = [width / 2, height / 2];
  const reach = Math.hypot(width, height) / 2;
  const long = Math.max(layer.width, layer.height);

  const colors = sampleColors(card);
  yield;

  const grains: Grain[] = colors.flatMap((color, index) => {
    if (!color) {
      return [];
    }

    const [column, row] = [index % GRID, Math.floor(index / GRID)];
    const x = (column + 0.5) * cellWidth;
    const y = (row + 0.5) * cellHeight;
    const out = Math.hypot(x - centerX, y - centerY) / reach;
    const away = Math.atan2(y - centerY, x - centerX) + between(-0.5, 0.5);
    const speed = between(...SPEED) * long * (0.5 + out);

    return {
      x: at[0] + x,
      y: at[1] + y,
      vx: Math.cos(away) * speed,
      vy: Math.sin(away) * speed,
      size: Math.max(cellWidth, cellHeight) * between(0.6, 1.6),
      color,
      release: out * BURST_MS,
      life: between(...LIFE_MS),
      look: pickLook(),
      phase: between(0, Math.PI * 2),
      cell: [column * cellWidth, row * cellHeight] as const,
      loose: false,
    };
  });
  yield;

  const sprites = {
    dot: createSprite((context) => {
      const middle = SPRITE / 2;
      const fill = context.createRadialGradient(
        middle,
        middle,
        0,
        middle,
        middle,
        middle,
      );
      fill.addColorStop(0, gold.css());
      fill.addColorStop(0.55, gold.css());
      fill.addColorStop(1, gold.css(0));

      context.fillStyle = fill;
      context.fillRect(0, 0, SPRITE, SPRITE);
    }),
    glint: createSprite((context) => {
      const middle = SPRITE / 2;
      const spark = context.createRadialGradient(
        middle,
        middle,
        0,
        middle,
        middle,
        middle,
      );
      spark.addColorStop(0, "white");
      spark.addColorStop(0.2, light.css());
      spark.addColorStop(1, light.css(0));

      context.fillStyle = spark;
      context.fillRect(0, 0, SPRITE, SPRITE);
    }),
    star: createSprite((context) => {
      // The sparkle path is 24 units wide; the margin leaves room for its glow.
      context.translate(SPRITE * 0.15, SPRITE * 0.15);
      context.scale((SPRITE * 0.7) / 24, (SPRITE * 0.7) / 24);
      context.shadowColor = gold.css();
      context.shadowBlur = 6;
      context.fillStyle = light.css();
      context.fill(sparkle);
    }),
  };

  yield;

  // Sprites reach this far beyond a grain's middle, as a share of its size.
  const extent = 2;
  const visible = (x: number, y: number, size: number) =>
    x > -size * extent &&
    y > -size * extent &&
    x < layer.width + size * extent &&
    y < layer.height + size * extent;

  return {
    step(time, seconds) {
      const slowing = Math.exp(-DRAG * seconds);
      for (const grain of grains) {
        if (!grain.loose) {
          if (time < grain.release) {
            continue;
          }

          grain.loose = true;

          // A little wider than the cell, so no seam of picture stays behind.
          wholeContext.clearRect(
            grain.cell[0] - 0.5,
            grain.cell[1] - 0.5,
            cellWidth + 1,
            cellHeight + 1,
          );
        }

        grain.vy += GRAVITY * seconds;
        grain.vx *= slowing;
        grain.vy *= slowing;
        grain.x += grain.vx * seconds;
        grain.y += grain.vy * seconds;
      }
    },

    draw(context, time) {
      // After the burst, nothing of the picture is left to draw.
      if (time <= BURST_MS) {
        context.drawImage(whole, at[0], at[1], width, height);
      }

      const flash = 1 - time / FLASH_MS;
      if (flash > 0) {
        const size = reach * (2 + 1.5 * (1 - flash));
        context.globalAlpha = flash * flash;
        stamp(context, sprites.glint, at[0] + centerX, at[1] + centerY, size);
      }

      for (const grain of grains) {
        const since = time - grain.release;
        const age = since / grain.life;
        if (!grain.loose || age >= 1) {
          continue;
        }

        const size = grain.size * (1 - 0.7 * age);
        // Many grains fly off the screen; drawing them would cost as much.
        if (!visible(grain.x, grain.y, size)) {
          continue;
        }
        context.globalAlpha = 1 - age * age;

        if (since < GILD_MS) {
          const [r, g, b] = mix(grain.color, gold.rgb, since / GILD_MS);
          context.fillStyle = `rgb(${r} ${g} ${b})`;
          context.beginPath();
          context.arc(grain.x, grain.y, size / 2, 0, Math.PI * 2);
          context.fill();
          continue;
        }

        const twinkle =
          0.5 +
          0.5 *
            Math.sin((time / 1000) * TWINKLE_HZ * 2 * Math.PI + grain.phase);
        if (grain.look === "star") {
          stamp(
            context,
            sprites.star,
            grain.x,
            grain.y,
            size * 2.5 * (0.6 + 0.4 * twinkle),
          );
          continue;
        }
        stamp(context, sprites.dot, grain.x, grain.y, size * 1.4);
        if (grain.look === "glint") {
          context.globalAlpha *= twinkle;
          stamp(context, sprites.glint, grain.x, grain.y, size * 4);
        }
      }

      context.globalAlpha = 1;
    },
  };
}

/**
 * Sample one colour per grain, by drawing the card as small as the grid.
 *
 * @param card the picture on the card, with its size and its rounded corners
 * @returns the colour of each cell, if the cell is part of the card
 */
function sampleColors(card: CardArea) {
  const canvas = document.createElement("canvas");
  canvas.width = GRID;
  canvas.height = GRID;

  const context = canvas.getContext("2d", { willReadFrequently: true })!;
  const radius = (card.radius * GRID) / card.width;
  drawCard(context, { ...card, width: GRID, height: GRID, radius }, [0, 0]);

  const { data } = context.getImageData(0, 0, GRID, GRID);

  // The rounded corners cut some cells off: those give no grain.
  return Array.from({ length: GRID * GRID }, (_, index): Rgb | undefined =>
    data[index * 4 + 3] < 128
      ? undefined
      : [data[index * 4], data[index * 4 + 1], data[index * 4 + 2]],
  );
}

function pickLook(): Grain["look"] {
  const chance = Math.random();
  if (chance < STAR_SHARE) {
    return "star";
  }

  if (chance < STAR_SHARE + GLINT_SHARE) {
    return "glint";
  }

  return "dot";
}

/**
 * Draw a sprite once, to stamp it for every grain that looks like it.
 *
 * @param draw draws the look on the sprite's canvas
 * @returns the sprite
 */
function createSprite(draw: (context: CanvasRenderingContext2D) => void) {
  const sprite = document.createElement("canvas");
  sprite.width = SPRITE;
  sprite.height = SPRITE;

  draw(sprite.getContext("2d")!);

  return sprite;
}

function stamp(
  context: CanvasRenderingContext2D,
  sprite: HTMLCanvasElement,
  x: number,
  y: number,
  size: number,
) {
  context.drawImage(sprite, x - size / 2, y - size / 2, size, size);
}

function between(min: number, max: number) {
  return min + Math.random() * (max - min);
}
