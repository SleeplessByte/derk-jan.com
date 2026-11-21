/** This file is largely AI generated */

export type Rgb = readonly [number, number, number];
/** A position on the card, from 0 to 1 on both axes. */
export type Point = readonly [number, number];

/** The largest copy of the image; it is fine enough to find outlines in. */
const LARGEST = 128;
/** Where colours are grouped; shapes need no detail. */
const PALETTE_RESOLUTION = 32;
const PALETTE_SIZE = 8;
/** Colours this close to the bare paper need no paint (squared RGB distance). */
const BARE = 50 ** 2;
/** The share of pixels that count as an edge when outlines are traced. */
const EDGE_SHARE = 0.14;
/** Most outline points that are kept, so the sketch stays loose. */
const SKETCH_POINTS = 1400;
/** Smaller patches of one colour are not worth a stroke of their own. */
const MIN_SHAPE_CELLS = 8;

/** An area of one colour that a painter would fill in one go, in card units. */
export interface Shape {
  cells: number;
  center: Point;
  /** The direction in which the shape is longest. */
  angle: number;
  /** How far the shape reaches along that direction and across it, from the center. */
  along: readonly [number, number];
  across: readonly [number, number];
}

/**
 * What a painter looks at before painting: the bare paper, the darkest
 * colour, the outlines of the objects, and the shapes of one colour.
 */
export function studyImage(image: HTMLImageElement) {
  const copies = createCopies(image);

  const pixel = (resolution: number, x: number, y: number): Rgb => {
    const data = copies.get(resolution)!;
    const column = Math.min(resolution - 1, Math.max(0, Math.floor(x)));
    const row = Math.min(resolution - 1, Math.max(0, Math.floor(y)));
    const index = (row * resolution + column) * 4;
    return [data[index], data[index + 1], data[index + 2]];
  };

  const corners = [0.02, 0.98].flatMap((u) =>
    [0.02, 0.98].map((v) => pixel(LARGEST, u * LARGEST, v * LARGEST)),
  );
  const paper = mix(
    mix(corners[0], corners[1], 0.5),
    mix(corners[2], corners[3], 0.5),
    0.5,
  );
  const palette = createPalette(copies.get(PALETTE_RESOLUTION)!, paper);

  return {
    /** The bare card, before any paint. */
    paper,
    darkest: palette.colors.reduce((a, b) =>
      luminance(a) < luminance(b) ? a : b,
    ),
    outlines: traceOutlines(lightnessOf(copies.get(LARGEST)!)),
    shapes: findShapes(palette.groups, palette.bare),
  };
}

export type Study = ReturnType<typeof studyImage>;

/**
 * Each copy halves the one before, so every pixel averages the pixels it
 * replaces. The copies are read back, so they live in memory rather than on
 * the GPU: reading pixels back from the GPU stalls the page.
 */
function createCopies(image: HTMLImageElement) {
  const copies = new Map<number, Uint8ClampedArray>();
  let source: CanvasImageSource = image;
  for (
    let resolution = LARGEST;
    resolution >= PALETTE_RESOLUTION;
    resolution /= 2
  ) {
    const canvas = document.createElement("canvas");
    canvas.width = resolution;
    canvas.height = resolution;
    const context = canvas.getContext("2d", { willReadFrequently: true })!;
    context.drawImage(source, 0, 0, resolution, resolution);
    copies.set(
      resolution,
      context.getImageData(0, 0, resolution, resolution).data,
    );
    source = canvas;
  }
  return copies;
}

/**
 * Groups the colours of the image into a few base colours (k-means). Groups
 * close to the bare paper are marked, because they need no paint.
 */
function createPalette(data: Uint8ClampedArray, paper: Rgb) {
  const pixels: Rgb[] = [];
  for (let index = 0; index < data.length; index += 4) {
    pixels.push([data[index], data[index + 1], data[index + 2]]);
  }

  // Start from colours spread from dark to light, so each tone gets a group.
  const byLightness = [...pixels].sort((a, b) => luminance(a) - luminance(b));
  let colors = Array.from(
    { length: PALETTE_SIZE },
    (_, index) =>
      byLightness[
        Math.floor(((index + 0.5) / PALETTE_SIZE) * byLightness.length)
      ],
  );
  let groups = new Uint8Array(pixels.length);

  for (let round = 0; round < 8; round++) {
    groups = Uint8Array.from(pixels, (color) => nearest(colors, color));
    colors = colors.map((color, group): Rgb => {
      const members = pixels.filter((_, index) => groups[index] === group);
      if (members.length === 0) {
        return color;
      }
      const average = (channel: 0 | 1 | 2) =>
        Math.round(
          members.reduce((sum, member) => sum + member[channel], 0) /
            members.length,
        );
      return [average(0), average(1), average(2)];
    });
  }

  return {
    colors,
    groups,
    bare: colors.map((color) => distance(color, paper) < BARE),
  };
}

/**
 * Joins neighbouring cells of one base colour into shapes, largest first.
 * Colours close to the bare paper make no shapes.
 */
function findShapes(groups: Uint8Array, bare: boolean[]): Shape[] {
  const n = PALETTE_RESOLUTION;
  const seen = new Uint8Array(n * n);
  const shapes: Shape[] = [];

  for (let start = 0; start < n * n; start++) {
    if (seen[start] || bare[groups[start]]) {
      continue;
    }
    seen[start] = 1;
    const cells: Point[] = [];
    const queue = [start];
    while (queue.length > 0) {
      const index = queue.pop()!;
      const x = index % n;
      const y = Math.floor(index / n);
      cells.push([(x + 0.5) / n, (y + 0.5) / n]);
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const [nx, ny] = [x + dx, y + dy];
        const next = ny * n + nx;
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
          continue;
        }
        if (seen[next] || groups[next] !== groups[start]) {
          continue;
        }
        seen[next] = 1;
        queue.push(next);
      }
    }
    if (cells.length < MIN_SHAPE_CELLS) {
      continue;
    }
    const cx = cells.reduce((sum, [x]) => sum + x, 0) / cells.length;
    const cy = cells.reduce((sum, [, y]) => sum + y, 0) / cells.length;
    let xx = 0;
    let yy = 0;
    let xy = 0;
    for (const [x, y] of cells) {
      xx += (x - cx) ** 2;
      yy += (y - cy) ** 2;
      xy += (x - cx) * (y - cy);
    }
    // The main axis of the spread of cells (principal component).
    const angle = 0.5 * Math.atan2(2 * xy, xx - yy);
    const axis: Point = [Math.cos(angle), Math.sin(angle)];
    const along = cells.map(
      ([x, y]) => (x - cx) * axis[0] + (y - cy) * axis[1],
    );
    const across = cells.map(
      ([x, y]) => (y - cy) * axis[0] - (x - cx) * axis[1],
    );
    const half = 0.5 / n;

    shapes.push({
      cells: cells.length,
      center: [cx, cy],
      angle,
      along: [Math.min(...along) - half, Math.max(...along) + half],
      across: [Math.min(...across) - half, Math.max(...across) + half],
    });
  }

  return shapes.sort((a, b) => b.cells - a.cells);
}

/** The lightness of every pixel, worked out once instead of per lookup. */
function lightnessOf(data: Uint8ClampedArray) {
  const lightness = new Float32Array(data.length / 4);
  for (let index = 0; index < lightness.length; index++) {
    lightness[index] =
      0.299 * data[index * 4] +
      0.587 * data[index * 4 + 1] +
      0.114 * data[index * 4 + 2];
  }
  return lightness;
}

/**
 * Finds the strongest edges, thins them to one pixel, and follows them into
 * lines, longest first.
 */
function traceOutlines(pixels: Float32Array): Point[][] {
  const n = LARGEST;
  const lightness = (x: number, y: number) => pixels[y * n + x];
  const gx = new Float32Array(n * n);
  const gy = new Float32Array(n * n);
  const strength = new Float32Array(n * n);

  for (let y = 1; y < n - 1; y++) {
    for (let x = 1; x < n - 1; x++) {
      const index = y * n + x;
      gx[index] =
        lightness(x + 1, y - 1) +
        2 * lightness(x + 1, y) +
        lightness(x + 1, y + 1) -
        lightness(x - 1, y - 1) -
        2 * lightness(x - 1, y) -
        lightness(x - 1, y + 1);
      gy[index] =
        lightness(x - 1, y + 1) +
        2 * lightness(x, y + 1) +
        lightness(x + 1, y + 1) -
        lightness(x - 1, y - 1) -
        2 * lightness(x, y - 1) -
        lightness(x + 1, y - 1);
      strength[index] = Math.hypot(gx[index], gy[index]);
    }
  }

  const threshold =
    Float32Array.from(strength).sort()[Math.floor(n * n * (1 - EDGE_SHARE))];

  // Keep only the crest of each edge, so lines are one pixel wide.
  const edge = new Uint8Array(n * n);
  for (let index = 0; index < n * n; index++) {
    if (strength[index] <= threshold) {
      continue;
    }
    const step =
      Math.round(gy[index] / strength[index]) * n +
      Math.round(gx[index] / strength[index]);
    if (
      strength[index] >= strength[index + step] &&
      strength[index] >= strength[index - step]
    ) {
      edge[index] = 1;
    }
  }

  const visited = new Uint8Array(n * n);
  const tangent = (index: number): Point => [
    -gy[index] / strength[index],
    gx[index] / strength[index],
  ];

  const follow = (start: number, sign: 1 | -1) => {
    const points: Point[] = [];
    let index = start;
    const [startX, startY] = tangent(start);
    let direction: Point = [startX * sign, startY * sign];
    for (let steps = 0; steps < 80; steps++) {
      let best = -1;
      let bestScore = 0;
      let bestStep: Point = [0, 0];
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const next = index + dy * n + dx;
          if ((dx === 0 && dy === 0) || !edge[next] || visited[next]) {
            continue;
          }
          const length = Math.hypot(dx, dy);
          const alignment = (dx * direction[0] + dy * direction[1]) / length;
          if (alignment < 0.35) {
            continue;
          }
          const score = alignment * strength[next];
          if (score > bestScore) {
            best = next;
            bestScore = score;
            bestStep = [dx / length, dy / length];
          }
        }
      }
      if (best < 0) {
        break;
      }
      visited[best] = 1;
      index = best;
      // Turn with the edge, but keep heading the same way along it.
      const along = tangent(best);
      const sameWay =
        along[0] * bestStep[0] + along[1] * bestStep[1] >= 0 ? 1 : -1;
      direction = [along[0] * sameWay, along[1] * sameWay];
      points.push([index % n, Math.floor(index / n)]);
    }
    return points;
  };

  const seeds: number[] = [];
  for (let index = 0; index < n * n; index++) {
    if (edge[index]) {
      seeds.push(index);
    }
  }
  seeds.sort((a, b) => strength[b] - strength[a]);

  const lines: Point[][] = [];
  for (const seed of seeds) {
    if (visited[seed]) {
      continue;
    }
    visited[seed] = 1;
    const line = [
      ...follow(seed, -1).reverse(),
      [seed % n, Math.floor(seed / n)] as Point,
      ...follow(seed, 1),
    ];
    if (line.length >= 6) {
      lines.push(line);
    }
  }

  lines.sort((a, b) => b.length - a.length);
  const kept: Point[][] = [];
  let points = 0;
  for (const line of lines) {
    if (points + line.length > SKETCH_POINTS) {
      break;
    }
    points += line.length;
    kept.push(
      smooth(line).map(([x, y]) => [(x + 0.5) / n, (y + 0.5) / n] as const),
    );
  }
  return kept;
}

/** Averages each point with its neighbours, so traced pixels become a line. */
function smooth(line: Point[]): Point[] {
  return line.map((point, index) => {
    if (index === 0 || index === line.length - 1) {
      return point;
    }
    const [a, b] = [line[index - 1], line[index + 1]];
    return [(a[0] + 2 * point[0] + b[0]) / 4, (a[1] + 2 * point[1] + b[1]) / 4];
  });
}

export function mix(a: Rgb, b: Rgb, amount: number): Rgb {
  return [
    Math.round(a[0] + (b[0] - a[0]) * amount),
    Math.round(a[1] + (b[1] - a[1]) * amount),
    Math.round(a[2] + (b[2] - a[2]) * amount),
  ];
}

function luminance([r, g, b]: Rgb) {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function distance(a: Rgb, b: Rgb) {
  return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
}

function nearest(colors: Rgb[], color: Rgb) {
  let best = 0;
  for (let index = 1; index < colors.length; index++) {
    if (distance(colors[index], color) < distance(colors[best], color)) {
      best = index;
    }
  }
  return best;
}
