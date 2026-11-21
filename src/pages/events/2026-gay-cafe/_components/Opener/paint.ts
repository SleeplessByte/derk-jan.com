/** This file is largely AI generated */

import {
  mix,
  studyImage,
  type Point,
  type Rgb,
  type Shape,
  type Study,
} from "./paint-study";

const SKETCH_MS = 1500;
/** How fast the pencil and the brush move, in card widths per second. */
const PEN_SPEED = 3.2;
const BRUSH_SPEED = 2.8;
/** The pause while the pencil or brush lifts and moves to its next line. */
const LIFT_MS = 70;
/** Most time the brush spends on single shapes, before its last broad sweeps. */
const SHAPES_MS = 1500;
/** Broad sweeps over the painted circle on the card, to bring in what is left. */
const LAST_SWEEPS: [Point, Point][] = [
  [
    [0.2, 0.24],
    [0.8, 0.3],
  ],
  [
    [0.82, 0.5],
    [0.18, 0.55],
  ],
  [
    [0.22, 0.74],
    [0.78, 0.7],
  ],
];

/** A study slower than this predicts a painting that stutters. */
const STUDY_BUDGET_MS = 150;
/** Frames slower than this add up; past `GIVE_UP_MS` the painting stops. */
const SLOW_FRAME_MS = 50;
const GIVE_UP_MS = 400;
/** A longer gap is a pause, such as a hidden tab, not a slow device. */
const PAUSE_MS = 1000;

type Bounds = [number, number, number, number];

interface PaintOptions {
  signal: AbortSignal;
  /** Only waits for the image, for visitors who prefer reduced motion. */
  still: boolean;
  /** Paints at one canvas pixel per CSS pixel. */
  lowPower: boolean;
  /** Called when the device is too slow, before the painting gives up. */
  onSlow: () => void;
}

/** One touch of the pencil or brush, `at` ms after the painting starts. */
interface Mark {
  at: number;
  draw: () => void;
}

/**
 * Paints the image in like a person would: a pencil sketch of the outlines,
 * one line at a time, then one brush that brings the real image in, shape by
 * shape. Resolves when the painting is done, or when the device turns out
 * too slow for it: then the caller shows the card without the painting.
 */
export async function paintCard(
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  { signal, still, lowPower, onSlow }: PaintOptions,
) {
  // Component.astro puts a small copy of the card on the canvas, for the study.
  const studyCopy = new Image();
  studyCopy.src = canvas.dataset.study!;
  await Promise.all([image.decode(), studyCopy.decode()]);
  if (still) {
    return;
  }

  const studying = performance.now();
  const study = studyImage(studyCopy);
  if (performance.now() - studying > STUDY_BUDGET_MS) {
    onSlow();
    return;
  }

  const ratio = lowPower ? 1 : Math.min(devicePixelRatio, 2);
  const size = canvas.clientWidth * ratio;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d")!;
  context.fillStyle = rgb(study.paper);
  context.fillRect(0, 0, size, size);

  const sketched = sketch(study, context, size);
  const brushed = bringIn(study, image, canvas, sketched.at(-1)!.at + LIFT_MS);

  return play(
    [...sketched, ...brushed.marks].sort((a, b) => a.at - b.at),
    brushed.render,
    { signal, onSlow },
  );
}

/**
 * Draws each mark when its time comes, and renders once per frame that drew
 * any. Gives up when frames stay too slow: a stuttering painting is worse
 * than none.
 */
function play(
  marks: Mark[],
  render: () => void,
  { signal, onSlow }: Pick<PaintOptions, "signal" | "onSlow">,
) {
  return new Promise<void>((resolve) => {
    let start = 0;
    let previous = 0;
    let slowTime = 0;
    let next = 0;
    let frame = 0;

    function step(now: number) {
      start ||= now;
      const elapsed = previous ? now - previous : 0;
      previous = now;
      if (elapsed > SLOW_FRAME_MS && elapsed < PAUSE_MS) {
        slowTime += elapsed;
      }
      if (slowTime > GIVE_UP_MS) {
        onSlow();
        resolve();
        return;
      }

      const drawn = next;
      while (next < marks.length && marks[next].at <= now - start) {
        marks[next++].draw();
      }
      if (next > drawn) {
        render();
      }
      if (next < marks.length) {
        frame = requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    frame = requestAnimationFrame(step);
    signal.addEventListener("abort", () => cancelAnimationFrame(frame), {
      once: true,
    });
  });
}

/**
 * One pencil draws the outlines, one line at a time: the longest lines that
 * fit the time, each next line the one closest to where the pencil is. The
 * pencil speeds up and slows down along a line, and presses lighter where it
 * lands and lifts.
 */
function sketch(
  study: Study,
  context: CanvasRenderingContext2D,
  size: number,
): Mark[] {
  // A warm, soft brown from the image's darkest colour.
  const pencil = rgb(
    mix(mix(study.darkest, [62, 40, 28], 0.5), study.paper, 0.35),
  );
  const marks: Mark[] = [];
  let time = 0;
  let pen: Point | undefined;

  for (const line of planSketch(study.outlines)) {
    // The hand moves faster in the air than on the paper.
    if (pen) {
      time += LIFT_MS + (distance(pen, line[0]) / (PEN_SPEED * 3)) * 1000;
    }
    const lengths = cumulativeLengths(line);
    const total = lengths.at(-1)!;
    const duration = (total / PEN_SPEED) * 1000;

    for (let index = 1; index < line.length; index++) {
      const progress = lengths[index] / total;
      const [from, to] = [line[index - 1], line[index]];
      const width = 0.0034 * (0.55 + 0.6 * Math.sin(Math.PI * progress));
      marks.push({
        at: time + ease(progress) * duration,
        draw: () => {
          context.strokeStyle = pencil;
          context.lineCap = "round";
          context.lineWidth = width * size;
          context.beginPath();
          context.moveTo(from[0] * size, from[1] * size);
          context.lineTo(to[0] * size, to[1] * size);
          context.stroke();
        },
      });
    }

    time += duration;
    pen = line.at(-1);
  }

  return marks;
}

function planSketch(outlines: Point[][]) {
  const chosen: Point[][] = [];
  let time = 0;
  for (const line of outlines) {
    const cost = (pathLength(line) / PEN_SPEED) * 1000 + LIFT_MS;
    if (time + cost > SKETCH_MS) {
      continue;
    }
    time += cost;
    // A hand never follows the edge exactly.
    chosen.push(
      line.map(([x, y]): Point => [
        x + between(-0.002, 0.002),
        y + between(-0.002, 0.002),
      ]),
    );
  }

  const ordered = [chosen.shift()!];
  while (chosen.length > 0) {
    const pen = ordered.at(-1)!.at(-1)!;
    let best = 0;
    let reverse = false;
    let closest = Infinity;
    chosen.forEach((line, index) => {
      for (const [end, backwards] of [
        [line[0], false],
        [line.at(-1)!, true],
      ] as const) {
        if (distance(pen, end) < closest) {
          closest = distance(pen, end);
          best = index;
          reverse = backwards;
        }
      }
    });
    const [line] = chosen.splice(best, 1);
    ordered.push(reverse ? [...line].reverse() : line);
  }
  return ordered;
}

/**
 * One brush fills the shapes, largest first, sweeping back and forth along
 * each shape. Every sweep paints a mask, and the real card shows through the
 * mask over the sketch. A few broad sweeps bring in the rest.
 */
function bringIn(
  study: Study,
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  start: number,
) {
  const size = canvas.width;
  const context = canvas.getContext("2d")!;
  const sketched = createLayer(size);
  const card = createLayer(size);
  card.context.drawImage(image, 0, 0, size, size);
  const mask = createLayer(size);
  const revealed = createLayer(size);
  mask.context.lineCap = "round";
  mask.context.strokeStyle = "white";

  const marks: Mark[] = [
    { at: start, draw: () => sketched.context.drawImage(canvas, 0, 0) },
  ];
  let time = start;
  // Only the part the brush touched since the last frame is composited again.
  let dirty: Bounds | undefined;

  const sweep = (from: Point, to: Point, width: number) => {
    const stroke = createMaskStroke(from, to, width);
    const duration = Math.max(90, (distance(from, to) / BRUSH_SPEED) * 1000);
    const steps = Math.ceil(duration / 16);
    for (let step = 0; step < steps; step++) {
      // The brush speeds up and slows down along the sweep.
      const [t0, t1] = [ease(step / steps), ease((step + 1) / steps)];
      marks.push({
        at: time + ((step + 1) / steps) * duration,
        draw: () => {
          const touched = stroke.paint(mask.context, size, t0, t1);
          dirty = dirty ? union(dirty, touched) : touched;
        },
      });
    }
    time += duration + LIFT_MS;
  };

  for (const shape of study.shapes) {
    if (time - start > SHAPES_MS) {
      break;
    }
    for (const [from, to, width] of sweepsAcross(shape)) {
      sweep(from, to, width);
    }
  }
  for (const [from, to] of LAST_SWEEPS) {
    sweep(from, to, 0.24);
  }

  return {
    marks,
    render() {
      if (!dirty) {
        return;
      }
      const x = Math.max(0, Math.floor(dirty[0]));
      const y = Math.max(0, Math.floor(dirty[1]));
      const width = Math.min(size, Math.ceil(dirty[2])) - x;
      const height = Math.min(size, Math.ceil(dirty[3])) - y;
      dirty = undefined;
      if (width <= 0 || height <= 0) {
        return;
      }

      const area = [x, y, width, height, x, y, width, height] as const;
      revealed.context.globalCompositeOperation = "copy";
      revealed.context.drawImage(card.canvas, ...area);
      revealed.context.globalCompositeOperation = "destination-in";
      revealed.context.drawImage(mask.canvas, ...area);
      context.drawImage(sketched.canvas, ...area);
      context.drawImage(revealed.canvas, ...area);
    },
  };
}

/** Parallel sweeps along a shape, back and forth, that together cover it. */
function sweepsAcross(shape: Shape): [Point, Point, number][] {
  const axis: Point = [Math.cos(shape.angle), Math.sin(shape.angle)];
  const normal: Point = [-axis[1], axis[0]];
  const span = shape.across[1] - shape.across[0];
  const passes = Math.min(4, Math.max(1, Math.round(span / 0.07)));
  const width = (span / passes) * 1.4 + 0.015;
  const at = (along: number, across: number): Point => [
    shape.center[0] + axis[0] * along + normal[0] * across,
    shape.center[1] + axis[1] * along + normal[1] * across,
  ];

  return Array.from({ length: passes }, (_, pass) => {
    const across = shape.across[0] + ((pass + 0.5) / passes) * span;
    const ends = [at(shape.along[0], across), at(shape.along[1], across)];
    return pass % 2 === 0
      ? [ends[0], ends[1], width]
      : [ends[1], ends[0], width];
  });
}

/** A wide brush with ragged bristles, painted a part at a time as it moves. */
function createMaskStroke(from: Point, to: Point, width: number) {
  const count = 9;
  const bristles = Array.from({ length: count }, (_, index) => ({
    offset: (index + 0.5) / count - 0.5,
    start: between(0, 0.1),
    end: between(0.88, 1),
    // The outer bristles carry less paint, which softens the edge.
    alpha: index === 0 || index === count - 1 ? 0.45 : between(0.85, 1),
  }));
  const bend = between(-0.12, 0.12);
  const length = distance(from, to);
  const normal: Point = [
    (from[1] - to[1]) / length,
    (to[0] - from[0]) / length,
  ];

  return {
    /** Paints the stroke between `t0` and `t1`, and returns the area it touched. */
    paint(
      context: CanvasRenderingContext2D,
      size: number,
      t0: number,
      t1: number,
    ): Bounds {
      context.lineWidth = (width / count) * 1.9 * size;
      const reach = context.lineWidth / 2 + 1;
      const touched: Bounds = [Infinity, Infinity, -Infinity, -Infinity];
      for (const bristle of bristles) {
        const a = Math.max(t0, bristle.start);
        const b = Math.min(t1, bristle.end);
        if (a >= b) {
          continue;
        }
        const point = (t: number) => {
          const sideways =
            bristle.offset * width + (1 - (2 * t - 1) ** 2) * bend * length;
          return [
            (from[0] + (to[0] - from[0]) * t + normal[0] * sideways) * size,
            (from[1] + (to[1] - from[1]) * t + normal[1] * sideways) * size,
          ] as const;
        };

        const points = [point(a), point((a + b) / 2), point(b)];
        context.globalAlpha = bristle.alpha;
        context.beginPath();
        context.moveTo(...points[0]);
        context.lineTo(...points[1]);
        context.lineTo(...points[2]);
        context.stroke();

        for (const [px, py] of points) {
          touched[0] = Math.min(touched[0], px - reach);
          touched[1] = Math.min(touched[1], py - reach);
          touched[2] = Math.max(touched[2], px + reach);
          touched[3] = Math.max(touched[3], py + reach);
        }
      }
      return touched;
    },
  };
}

function union(a: Bounds, b: Bounds): Bounds {
  return [
    Math.min(a[0], b[0]),
    Math.min(a[1], b[1]),
    Math.max(a[2], b[2]),
    Math.max(a[3], b[3]),
  ];
}

function createLayer(size: number) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  return { canvas, context: canvas.getContext("2d")! };
}

function cumulativeLengths(line: readonly Point[]) {
  const lengths = [0];
  for (let index = 1; index < line.length; index++) {
    lengths.push(lengths[index - 1] + distance(line[index - 1], line[index]));
  }
  return lengths;
}

function pathLength(line: readonly Point[]) {
  return cumulativeLengths(line).at(-1)!;
}

function distance(a: Point, b: Point) {
  return Math.hypot(a[0] - b[0], a[1] - b[1]);
}

/** Slow at the start and the end, like a hand. */
function ease(t: number) {
  return (1 - Math.cos(Math.PI * t)) / 2;
}

function rgb([r, g, b]: Rgb) {
  return `rgb(${r} ${g} ${b})`;
}

function between(min: number, max: number) {
  return min + Math.random() * (max - min);
}
