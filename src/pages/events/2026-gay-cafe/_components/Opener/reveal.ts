import { burnSky, type Burn } from "./burn";
import { readColor } from "./colors";
import { prepareDust, type Dust } from "./dust";
import { framesThatCount } from "./frames";
import type { Point } from "./paint-study";
import { DUST_RATIO, paintSky, viewportLayer, type Layer } from "./sky";
import { splitScreen } from "./split";

type Choice = "dust" | "split" | "fade";

const DEFAULT_CHOICE: Choice = "dust";
const FADE_MS = 400;
const END_MS = 300;
const CAST_FADE_MS = 300;

/** Preparation per frame */
const SLICE_MS = 6;

/** Frames slower than this add up; past `GIVE_UP_MS` the effect skips to its end. */
const SLOW_FRAME_MS = 50;
const GIVE_UP_MS = 400;

interface RevealOptions {
  reducedMotion: boolean;
  signal: AbortSignal;
  /** Resolves when the card's painting is gone. */
  drawn: Promise<void>;
}

interface Explosion {
  burn: Burn;
  overlay: Layer;
  dust: Dust;
}

/**
 * Chooses how the opener transitions.
 *
 * Users on reduced motion see a fade, weak devices see the screen split, and
 * the rest see the card burst into gold dust.
 */
export function prepareReveal(
  root: HTMLElement,
  veil: HTMLElement,
  { reducedMotion, signal, drawn }: RevealOptions,
): () => Promise<void> {
  const choice = chosen();
  if (reducedMotion || choice === "fade") {
    return async () => {
      await veil.animate(
        { opacity: [1, 0] },
        { duration: FADE_MS, fill: "forwards" },
      ).finished;
    };
  }

  if (choice === "split" || root.dataset.quality === "low") {
    return () => splitScreen(root, veil, drawn);
  }

  const prepared = runInSlices(prepareExplosion(root, veil));
  return async () => explode(root, veil, await prepared, signal);
}

function chosen(): Choice {
  const value = new URLSearchParams(location.search).get("reveal");
  if (value === "dust" || value === "split" || value === "fade") {
    return value;
  }

  return DEFAULT_CHOICE;
}

/**
 * Breaks the work to burn the sky and explode the dust into smaller steps.
 */
function* prepareExplosion(
  root: HTMLElement,
  veil: HTMLElement,
): Generator<void, Explosion> {
  const card = root.querySelector<HTMLElement>(".card")!;
  const rect = root.querySelector(".lift")!.getBoundingClientRect();
  const center: Point = [rect.x + rect.width / 2, rect.y + rect.height / 2];
  const gold = readColor(root, "var(--opener-gold)");
  const light = readColor(root, "var(--opener-gold-light)");

  yield;

  const sky = paintSky(veil, root.querySelector<HTMLCanvasElement>(".sky")!);
  yield;

  const burn = yield* burnSky(sky, center, gold.rgb, light.rgb);
  const overlay = viewportLayer(
    root.querySelector<HTMLCanvasElement>(".dust")!,
    DUST_RATIO,
  );

  yield;

  const dust = yield* prepareDust(
    overlay,
    {
      image: root.querySelector<HTMLImageElement>(".picture")!,
      width: rect.width,
      height: rect.height,
      radius: parseFloat(getComputedStyle(card).borderTopLeftRadius),
    },
    [rect.x, rect.y],
    { gold, light },
    // The sparkles of the card's label.
    new Path2D(root.querySelector(".sparkle path")!.getAttribute("d")!),
  );

  return { burn, overlay, dust };
}

/** The card bursts into gold dust and the sky burns away behind it. */
function explode(
  root: HTMLElement,
  veil: HTMLElement,
  { burn, overlay, dust }: Explosion,
  signal: AbortSignal,
) {
  root.classList.add("--dust");
  root
    .querySelector(".cast")!
    .animate({ opacity: 0 }, { duration: CAST_FADE_MS, fill: "forwards" });

  return new Promise<void>((resolve) => {
    const counts = framesThatCount(signal);

    let start = 0;
    let previous = 0;
    let slowTime = 0;
    let ending = false;
    let frame = 0;

    const end = async () => {
      ending = true;
      await veil.animate(
        { opacity: [1, 0] },
        { duration: END_MS, fill: "forwards" },
      ).finished;
      cancelAnimationFrame(frame);
      resolve();
    };

    function step(now: number) {
      start ||= now;
      const elapsed = previous ? now - previous : 0;
      previous = now;
      if (elapsed > SLOW_FRAME_MS && counts(now, elapsed)) {
        slowTime += elapsed;
      }

      const time = now - start;
      if (!ending && (burn.step(time) || slowTime > GIVE_UP_MS)) {
        void end();
      }

      overlay.context.clearRect(0, 0, overlay.width, overlay.height);
      dust.step(time, elapsed / 1000);
      dust.draw(overlay.context, time);
      frame = requestAnimationFrame(step);
    }

    frame = requestAnimationFrame(step);
    signal.addEventListener("abort", () => cancelAnimationFrame(frame), {
      once: true,
    });
  });
}

/** Runs the work a slice per frame with as many steps as fit in `SLICE_MS`. */
function runInSlices<T>(work: Generator<void, T>) {
  return new Promise<T>((resolve) => {
    const slice = () => {
      const end = performance.now() + SLICE_MS;

      do {
        const step = work.next();
        if (step.done) {
          resolve(step.value);
          return;
        }
      } while (performance.now() < end);

      requestAnimationFrame(slice);
    };

    requestAnimationFrame(slice);
  });
}
