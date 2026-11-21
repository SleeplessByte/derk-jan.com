interface Crystal {
  design: number;
  angle: number;
  spin: number;
  /** Turns the flake around its own axis, so it shows its edge now and then. */
  tumble: number;
  tumbleRate: number;
}

interface Flake {
  x: number;
  y: number;
  /** From 0, far away, to 1, close by. */
  depth: number;
  size: number;
  speed: number;
  sway: number;
  swayRate: number;
  phase: number;
  alpha: number;
  /** When the flake starts to fade in, in seconds on the animation clock. */
  appear: number;
  crystal?: Crystal;
}

interface SnowOptions {
  signal: AbortSignal;
  /** Draws one frame and stops, for visitors who prefer reduced motion. */
  still: boolean;
  /** Starts at a lower quality level, for weak devices. */
  lowPower: boolean;
  /** Called each time slow frames lower the quality. */
  onSlow: () => void;
}

const AREA_PER_FLAKE = 11_000;
const MAX_FLAKES = 170;
/** The nearest flakes are crystals; the rest are soft dots. */
const CRYSTAL_DEPTH = 0.92;
const CRYSTAL_DESIGNS = 3;
const DOT_SPRITE = 32;
const CRYSTAL_SPRITE = 64;
/** Frames slower than this lower the quality one level once they add up to `SLOW_FOR_MS`. */
const SLOW_FRAME_MS = 24;
const SLOW_FOR_MS = 500;
/** A longer gap is a pause, such as a hidden tab, not a slow device. */
const PAUSE_MS = 1000;
/** Loading is often slow; it should not count against the device. */
const GRACE_MS = 1000;
/**
 * The first flakes fade in one by one over this time, so a hiccup while the
 * page loads goes unnoticed and the snow builds up instead of popping in.
 */
const APPEAR_S = 1.6;
const FADE_S = 0.9;

/** From best to cheapest; below the last level, the snow stands still. */
const LEVELS = [
  { ratio: 2, share: 1, moving: true },
  { ratio: 1, share: 1, moving: true },
  { ratio: 1, share: 0.5, moving: false },
] as const;

/**
 * Lets snow fall on the canvas until the signal aborts: soft dots far away
 * and crystals close by, all carried by a slow, gusty wind. When frames stay
 * slow, the snow lowers its quality step by step and finally stands still.
 */
export function startSnow(
  canvas: HTMLCanvasElement,
  { signal, still, lowPower, onSlow }: SnowOptions,
) {
  const context = canvas.getContext("2d")!;
  const color = getComputedStyle(canvas).getPropertyValue("--opener-snow");
  const dot = createDot(color);
  const crystals = Array.from({ length: CRYSTAL_DESIGNS }, () =>
    createCrystal(color),
  );

  let level = lowPower ? 1 : 0;
  let flakes: Flake[] = [];
  let width = 0;
  let height = 0;
  let ratio = 1;
  let frame = 0;
  let started = 0;
  let previous = 0;
  let slowTime = 0;
  let stopped = still;

  /**
   * A flake placed `anywhere` fades in after a random delay, most of them
   * early. A flake that falls in from the top needs no fade.
   */
  function createFlake(anywhere: boolean): Flake {
    const depth = Math.random();
    const crystal = depth > CRYSTAL_DEPTH;
    const size = crystal ? 14 + Math.random() * 12 : 2 + depth * 10;
    return {
      x: Math.random() * width,
      y: anywhere ? Math.random() * height : -size,
      depth,
      size,
      speed: 10 + depth * 48,
      sway: 4 + depth * 16,
      swayRate: 0.5 + Math.random() * 0.6,
      phase: Math.random() * Math.PI * 2,
      // Far flakes are dim, as if seen through falling snow.
      alpha: crystal ? 0.9 : 0.25 + depth * 0.6,
      appear:
        anywhere && !still
          ? performance.now() / 1000 + 0.15 + Math.random() ** 1.5 * APPEAR_S
          : -Infinity,
      crystal: crystal
        ? {
            design: Math.floor(Math.random() * CRYSTAL_DESIGNS),
            angle: Math.random() * Math.PI,
            spin: (Math.random() - 0.5) * 0.8,
            tumble: Math.random() * Math.PI * 2,
            tumbleRate: 0.6 + Math.random() * 0.8,
          }
        : undefined,
    };
  }

  function resize() {
    const settings = LEVELS[Math.min(level, LEVELS.length - 1)];
    ratio = Math.min(devicePixelRatio, settings.ratio);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);

    const count = Math.round(
      Math.min(MAX_FLAKES, (width * height) / AREA_PER_FLAKE) * settings.share,
    );
    flakes = Array.from(
      { length: count },
      (_, index) => flakes[index] ?? createFlake(true),
    );
  }

  /** The wind changes slowly, with the odd gust. */
  function wind(seconds: number) {
    return 14 * Math.sin(seconds * 0.21) + 7 * Math.sin(seconds * 0.53 + 1.3);
  }

  function draw(seconds: number) {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const flake of flakes) {
      const shown = smoothstep((seconds - flake.appear) / FADE_S);
      if (shown <= 0) {
        continue;
      }
      // While it fades in, the flake also grows a little, like it comes closer.
      const size = flake.size * (0.6 + 0.4 * shown);
      const x =
        flake.x + Math.sin(seconds * flake.swayRate + flake.phase) * flake.sway;
      context.globalAlpha = flake.alpha * shown;

      if (flake.crystal) {
        const { angle, tumble, design } = flake.crystal;
        // A turned crystal shows its edge, but never disappears.
        const turned = Math.max(0.25, Math.abs(Math.cos(tumble)));
        const cos = Math.cos(angle) * ratio;
        const sin = Math.sin(angle) * ratio;
        context.setTransform(
          cos * turned,
          sin * turned,
          -sin,
          cos,
          x * ratio,
          flake.y * ratio,
        );
        context.drawImage(crystals[design], -size / 2, -size / 2, size, size);
      } else {
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.drawImage(dot, x - size / 2, flake.y - size / 2, size, size);
      }
    }
  }

  function move(elapsed: number, seconds: number) {
    const gust = wind(seconds);
    for (const flake of flakes) {
      flake.y += flake.speed * elapsed;
      // Near flakes catch more of the wind than far ones.
      flake.x += gust * (0.3 + flake.depth * 0.7) * elapsed;
      if (flake.crystal && LEVELS[level].moving) {
        flake.crystal.angle += flake.crystal.spin * elapsed;
        flake.crystal.tumble += flake.crystal.tumbleRate * elapsed;
      }

      if (flake.y - flake.size > height) {
        Object.assign(flake, createFlake(false));
      } else if (flake.x < -flake.size) {
        flake.x += width + flake.size * 2;
      } else if (flake.x > width + flake.size) {
        flake.x -= width + flake.size * 2;
      }
    }
  }

  function lowerQuality(time: number) {
    level += 1;
    slowTime = 0;
    onSlow();
    if (level >= LEVELS.length) {
      stopped = true;
      draw(time / 1000);
      return false;
    }
    resize();
    return true;
  }

  function tick(time: number) {
    started ||= time;
    const elapsed = previous ? time - previous : 0;
    previous = time;

    if (time - started > GRACE_MS && elapsed < PAUSE_MS) {
      slowTime =
        elapsed > SLOW_FRAME_MS
          ? slowTime + elapsed
          : Math.max(0, slowTime - elapsed);
    }
    if (slowTime >= SLOW_FOR_MS) {
      const moving = lowerQuality(time);
      if (!moving) {
        return;
      }
    }

    // A long pause, such as a hidden tab, must not make the snow jump.
    move(Math.min(elapsed, 50) / 1000, time / 1000);
    draw(time / 1000);
    frame = requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener(
    "resize",
    () => {
      resize();
      if (stopped) {
        draw(performance.now() / 1000);
      }
    },
    { signal },
  );

  if (still) {
    draw(0);
    return;
  }

  frame = requestAnimationFrame(tick);
  signal.addEventListener("abort", () => cancelAnimationFrame(frame), {
    once: true,
  });
}

/** Eases from 0 to 1, slow at both ends; values outside 0 to 1 are clamped. */
function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

/** One soft flake, drawn once and then stamped for every flake. */
function createDot(color: string) {
  const sprite = document.createElement("canvas");
  sprite.width = DOT_SPRITE;
  sprite.height = DOT_SPRITE;

  const context = sprite.getContext("2d")!;
  context.fillStyle = color;
  context.shadowColor = color;
  context.shadowBlur = DOT_SPRITE * 0.2;
  context.beginPath();
  context.arc(
    DOT_SPRITE / 2,
    DOT_SPRITE / 2,
    DOT_SPRITE * 0.19,
    0,
    Math.PI * 2,
  );
  context.fill();

  return sprite;
}

/**
 * A six-armed crystal with side branches. Every design branches at its own
 * places, so no two designs look the same. The soft glow keeps it slightly
 * out of focus, as close flakes are.
 */
function createCrystal(color: string) {
  const sprite = document.createElement("canvas");
  sprite.width = CRYSTAL_SPRITE;
  sprite.height = CRYSTAL_SPRITE;
  const reach = CRYSTAL_SPRITE * 0.42;
  const branches = Array.from({ length: 3 }, (_, index) => ({
    at: 0.3 + index * 0.22 + (Math.random() - 0.5) * 0.08,
    length: (0.38 - index * 0.1) * (0.8 + Math.random() * 0.4),
  }));

  const context = sprite.getContext("2d")!;
  context.translate(CRYSTAL_SPRITE / 2, CRYSTAL_SPRITE / 2);
  context.strokeStyle = color;
  context.lineCap = "round";
  context.lineWidth = CRYSTAL_SPRITE * 0.035;
  context.shadowColor = color;
  context.shadowBlur = CRYSTAL_SPRITE * 0.06;

  for (let arm = 0; arm < 6; arm++) {
    context.save();
    context.rotate((arm * Math.PI) / 3);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -reach);
    for (const branch of branches) {
      const y = -reach * branch.at;
      const length = reach * branch.length;
      // Side branches grow outward at 60 degrees, like real ice.
      for (const side of [-1, 1]) {
        context.moveTo(0, y);
        context.lineTo(side * length * 0.87, y - length * 0.5);
      }
    }
    context.stroke();
    context.restore();
  }

  return sprite;
}
