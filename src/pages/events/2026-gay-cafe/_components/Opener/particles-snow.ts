import { framesThatCount } from "./frames";

interface Crystal {
  design: number;
  angle: number;
  spin: number;
  tumble: number;
  tumbleRate: number;
}

interface Flake {
  x: number;
  y: number;
  depth: number;
  size: number;
  speed: number;
  sway: number;
  swayRate: number;
  phase: number;
  alpha: number;
  appear: number;
  crystal?: Crystal;
}

interface SnowLayers {
  back: HTMLCanvasElement;
  front: HTMLCanvasElement;
}

interface SnowOptions {
  signal: AbortSignal;
  still: boolean;
  lowPower: boolean;
  onSlow: () => void;
}

const AREA_PER_FLAKE = 11_000;
const MAX_FLAKES = 170;
const CRYSTAL_DEPTH = 0.92;
const CRYSTAL_DESIGNS = 3;
const DOT_SPRITE = 32;
const CRYSTAL_SPRITE = 64;
const FRONT_DEPTH = 0.9;
const SHADOW_SPRITE = 32;
const SHADOW_SCALE = 1.8;
const SHADOW_ALPHA = 0.15;
const SHADOW_OFFSET = 6;
const SLOW_FRAME_MS = 24;
const SLOW_FOR_MS = 500;
const GRACE_MS = 1000;
const APPEAR_S = 1.6;
const FADE_S = 0.9;

// The front layer goes before the flakes do: it costs a second full-screen canvas.
const LEVELS = [
  { ratio: 2, share: 1, moving: true, front: true },
  { ratio: 1, share: 1, moving: true, front: true },
  { ratio: 1, share: 1, moving: true, front: false },
  { ratio: 1, share: 0.5, moving: false, front: false },
] as const;

/**
 * Let snow fall on the canvases until the signal aborts.
 *
 * Soft dots far away and crystals close by, all carried by a slow, gusty wind.
 * When frames remain slow, the snow lowers its quality step by step until it
 * finally stands still.
 *
 * @param layers the canvases behind and in front of the card
 * @param options when to stop, whether the snow stands still, whether the
 *   device is weak, and what to do when it is too slow
 */
export function startSnow(
  { back, front }: SnowLayers,
  { signal, still, lowPower, onSlow }: SnowOptions,
) {
  const backContext = back.getContext("2d")!;
  const frontContext = front.getContext("2d")!;
  const color = getComputedStyle(back).getPropertyValue("--opener-snow");
  const dot = createDot(color);
  const shadow = createShadow(getComputedStyle(front).color);
  const crystals = Array.from({ length: CRYSTAL_DESIGNS }, () =>
    createCrystal(color),
  );

  // A weak device starts without the front layer.
  let level = lowPower ? 2 : 0;
  const counts = framesThatCount(signal);

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
   * Create a flake, anywhere on the screen or just above it.
   *
   * A flake placed `anywhere` fades in after a random delay, most of them
   * early. A flake that falls in from the top needs no fade.
   *
   * @param anywhere whether the flake starts anywhere on the screen
   * @returns the flake
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
    width = back.clientWidth;
    height = back.clientHeight;

    front.hidden = still || !settings.front;

    for (const canvas of [back, front]) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }

    const count = Math.round(
      Math.min(MAX_FLAKES, (width * height) / AREA_PER_FLAKE) * settings.share,
    );
    flakes = Array.from(
      { length: count },
      (_, index) => flakes[index] ?? createFlake(true),
    );
  }

  /**
   * Work out the wind, which changes slowly, with the odd gust.
   *
   * @param seconds the time since the snow started
   * @returns the sideways speed of the wind
   */
  function wind(seconds: number) {
    return 14 * Math.sin(seconds * 0.21) + 7 * Math.sin(seconds * 0.53 + 1.3);
  }

  function draw(seconds: number) {
    const layered = !front.hidden;
    for (const context of layered
      ? [backContext, frontContext]
      : [backContext]) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, back.width, back.height);
    }

    for (const flake of flakes) {
      const shown = smoothstep((seconds - flake.appear) / FADE_S);
      if (shown <= 0) {
        continue;
      }

      // While it fades in, the flake also grows a little, like it comes closer.
      const size = flake.size * (0.6 + 0.4 * shown);
      const x =
        flake.x + Math.sin(seconds * flake.swayRate + flake.phase) * flake.sway;
      const inFront = layered && flake.depth > FRONT_DEPTH;
      const context = inFront ? frontContext : backContext;

      if (inFront) {
        const spread = size * SHADOW_SCALE;
        const offset = SHADOW_OFFSET * flake.depth;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.globalAlpha = SHADOW_ALPHA * shown;
        context.drawImage(
          shadow,
          x + offset - spread / 2,
          flake.y + offset - spread / 2,
          spread,
          spread,
        );
      }

      context.globalAlpha = flake.alpha * shown;

      if (flake.crystal) {
        const { angle, tumble, design } = flake.crystal;
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

    if (time - started > GRACE_MS && counts(time, elapsed)) {
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

/**
 * Ease from 0 to 1, slow at both ends.
 *
 * @param value the progress; values outside 0 to 1 are clamped
 * @returns the eased progress
 */
function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value));
  return t * t * (3 - 2 * t);
}

/**
 * Draw one soft flake once, to stamp it for every far flake.
 *
 * @param color the colour of the snow
 * @returns the sprite
 */
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
 * Draw a round, very soft shadow once, to stamp it under every flake in front
 * of the card.
 *
 * On the dark sky it disappears, so it needs no clipping.
 *
 * @param color the colour of the shadow
 * @returns the sprite
 */
function createShadow(color: string) {
  const sprite = document.createElement("canvas");
  sprite.width = SHADOW_SPRITE;
  sprite.height = SHADOW_SPRITE;

  const context = sprite.getContext("2d")!;
  const middle = SHADOW_SPRITE / 2;
  const gradient = context.createRadialGradient(
    middle,
    middle,
    0,
    middle,
    middle,
    middle,
  );
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, "transparent");
  context.fillStyle = gradient;
  context.fillRect(0, 0, SHADOW_SPRITE, SHADOW_SPRITE);

  return sprite;
}

/**
 * Draw a six-armed crystal with side branches.
 *
 * Every design branches at its own places, so no two designs look the same.
 * The soft glow keeps it slightly out of focus, as close flakes are.
 *
 * @param color the colour of the snow
 * @returns the sprite
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
