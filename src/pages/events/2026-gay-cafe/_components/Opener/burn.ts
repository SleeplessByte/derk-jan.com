import type { Point, Rgb } from "./paint-study";
import { blankLike, type Layer } from "./sky";

/** Cells along the screen's long side. */
const CELLS = 240;
/** Time that may pass burning the card */
const BURN_MS = 1300;
/** Where the burn starts, in the measure of cell values */
const START = 0.15;
/** The width of the glowing rim, as a share of the range of cell values. */
const RIM = 0.09;
/** The width of the soft edge of what has burned. */
const SOFT = 0.03;
/** How ragged the edge is; the rest of a cell's value is its distance from the card. */
const NOISE_SHARE = 0.3;
/** Lattice sizes and weights of the two layers of noise. */
const OCTAVES: readonly [number, number][] = [
  [10, 0.7],
  [24, 0.3],
];
/** Cells are ordered in this many buckets. */
const BUCKETS = 1024;
/** Cells per step of the preparation. */
const CHUNK = 4096;

export interface Burn {
  /** Burns up to the time. Returns true when the whole sky has burned. */
  step(time: number): boolean;
}

/**
 * Prepares the sky's burn from the card outward, behind a glowing gold rim.
 *
 * A small grid of cells decides what has burned, and the canvas scales it up,
 * which softens the edge automatically. Yields between small steps, so that
 * the caller can spread the work over frames.
 */
export function* burnSky(
  sky: Layer,
  from: Point,
  gold: Rgb,
  light: Rgb,
): Generator<void, Burn> {
  const { width, height } = sky;
  const cell = Math.max(width, height) / CELLS;
  const columns = Math.ceil(width / cell);
  const rows = Math.ceil(height / cell);
  const farthest = Math.max(
    ...[
      [0, 0],
      [width, 0],
      [0, height],
      [width, height],
    ].map(([x, y]) => Math.hypot(x - from[0], y - from[1])),
  );

  const values = yield* valueNoise(columns, rows);

  for (let row = 0; row < rows; row++) {
    const y = (row + 0.5) * cell - from[1];
    for (let column = 0; column < columns; column++) {
      const index = row * columns + column;
      const x = (column + 0.5) * cell - from[0];
      const distance = Math.hypot(x, y) / farthest;
      values[index] =
        distance * (1 - NOISE_SHARE) + values[index] * NOISE_SHARE;
    }

    yield;
  }

  // The cells in the order they burn, so that each frame visits only the
  // band around the edge.
  const order = yield* orderByValue(values);
  let burned = 0;

  const holes = cellLayer(columns, rows);
  const rim = cellLayer(columns, rows);
  yield;
  const whole = blankLike(sky);
  whole.context.drawImage(sky.context.canvas, 0, 0, width, height);

  return {
    step(time) {
      const t = Math.min(1, time / BURN_MS);
      // Fast at first, so the invitation shows right behind the bursting card.
      const level = START + (1 - (1 - t) ** 2) * (1 + RIM - START);

      while (burned < order.length && values[order[burned]] < level - SOFT) {
        const index = order[burned++];
        holes.data[index * 4 + 3] = 255;
        rim.data[index * 4 + 3] = 0;
      }

      for (let next = burned; next < order.length; next++) {
        const index = order[next];
        const above = values[index] - level;
        if (above >= RIM) {
          break;
        }

        // The rim also fades into what has burned
        const glow = Math.max(
          0,
          above >= 0 ? 1 - above / RIM : 1 + above / SOFT,
        );
        holes.data[index * 4 + 3] =
          Math.min(1, Math.max(0, -above / SOFT)) * 255;
        for (let channel = 0; channel < 3; channel++) {
          rim.data[index * 4 + channel] =
            gold[channel] + (light[channel] - gold[channel]) * glow;
        }
        rim.data[index * 4 + 3] = glow * 255;
      }

      holes.flush();
      rim.flush();

      // Each frame restarts with the full sky so that the soft edge does not get softer over time.
      const { context } = sky;
      context.save();
      context.globalCompositeOperation = "copy";
      context.drawImage(whole.context.canvas, 0, 0, width, height);
      context.globalCompositeOperation = "destination-out";
      context.drawImage(holes.canvas, 0, 0, width, height);
      context.globalCompositeOperation = "source-over";
      context.drawImage(rim.canvas, 0, 0, width, height);
      context.restore();

      return t >= 1;
    },
  };
}

function cellLayer(columns: number, rows: number) {
  const canvas = document.createElement("canvas");
  canvas.width = columns;
  canvas.height = rows;
  const context = canvas.getContext("2d")!;
  const image = context.createImageData(columns, rows);
  return {
    canvas,
    data: image.data,
    flush: () => context.putImageData(image, 0, 0),
  };
}

/** Smooth random values from 0 to 1 */
function* valueNoise(columns: number, rows: number) {
  const values = new Float32Array(columns * rows);
  for (const [size, weight] of OCTAVES) {
    const spacing = CELLS / size;
    const latticeColumns = Math.ceil(columns / spacing) + 2;
    const lattice = Float32Array.from(
      { length: latticeColumns * (Math.ceil(rows / spacing) + 2) },
      Math.random,
    );

    for (let row = 0; row < rows; row++) {
      const v = row / spacing;
      const top = Math.floor(v) * latticeColumns;
      const below = top + latticeColumns;
      const t = smooth(v - Math.floor(v));
      for (let column = 0; column < columns; column++) {
        const u = column / spacing;
        const left = Math.floor(u);
        const s = smooth(u - left);
        const upper =
          lattice[top + left] * (1 - s) + lattice[top + left + 1] * s;
        const lower =
          lattice[below + left] * (1 - s) + lattice[below + left + 1] * s;
        values[row * columns + column] +=
          weight * (upper * (1 - t) + lower * t);
      }

      yield;
    }
  }

  return values;
}

function* orderByValue(values: Float32Array) {
  const bucketOf = (value: number) =>
    Math.min(BUCKETS - 1, Math.max(0, Math.floor(value * BUCKETS)));
  const starts = new Uint32Array(BUCKETS + 1);

  for (let index = 0; index < values.length; index++) {
    starts[bucketOf(values[index]) + 1]++;
    if (index % CHUNK === 0) {
      yield;
    }
  }

  for (let bucket = 0; bucket < BUCKETS; bucket++) {
    starts[bucket + 1] += starts[bucket];
  }

  const order = new Uint32Array(values.length);
  for (let index = 0; index < values.length; index++) {
    order[starts[bucketOf(values[index])]++] = index;
    if (index % CHUNK === 0) {
      yield;
    }
  }

  return order;
}

function smooth(t: number) {
  return t * t * (3 - 2 * t);
}
