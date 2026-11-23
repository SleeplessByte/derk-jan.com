import type { TransitionBeforeSwapEvent } from "astro:transitions/client";

import { paintCard } from "./paint";
import { prepareReveal } from "./reveal";
import { createSideMedia } from "./side-media";
import { startSnow } from "./snow";

const LABEL_EXIT_MS = 300;
const TILT_DEG = 8;

export function setupOpener() {
  const root = document.querySelector<HTMLElement>(
    '[data-component="invite-opener"]',
  );
  if (!root) {
    // Astro has client side nav, so needs to not run this on other pages.
    return;
  }

  const controller = new AbortController();
  const { signal } = controller;

  document.addEventListener("astro:before-swap", () => controller.abort(), {
    once: true,
    signal,
  });

  const content = find<HTMLElement>('[data-target="content"]');
  const heading = find<HTMLElement>('[data-target="heading"]');
  const veil = find<HTMLElement>(".veil", root);
  const lift = find<HTMLElement>(".lift", root);
  const card = find<HTMLButtonElement>(".card", root);
  const progress = find<HTMLElement>(".progress", root);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Few cores means a weak device
  const lowPower = navigator.hardwareConcurrency <= 4;
  root.dataset.quality = lowPower ? "low" : "high";

  const media = createSideMedia(
    {
      intro: find<HTMLVideoElement>('[data-target="side-intro"]'),
      loop: find<HTMLVideoElement>('[data-target="side-loop"]'),
      toggle: find<HTMLButtonElement>('[data-target="side-toggle"]'),
      song: find<HTMLAudioElement>('[data-target="song"]'),
    },
    {
      signal,
      onProgress(fraction) {
        progress.classList.toggle("--indeterminate", fraction === undefined);
        if (fraction === undefined) {
          return;
        }
        progress.style.setProperty("--progress", String(fraction));
        progress.setAttribute(
          "aria-valuenow",
          String(Math.round(fraction * 100)),
        );
      },
    },
  );

  if ("skipped" in root.dataset) {
    root.remove();
    void media.resume();
    heading.focus({ preventScroll: true });
    return;
  }

  content.inert = true;

  const snow = {
    back: find<HTMLCanvasElement>(".snow.--back", root),
    front: find<HTMLCanvasElement>(".snow.--front", root),
  };
  startSnow(snow, {
    signal,
    still: reducedMotion,
    lowPower,
    onSlow() {
      root.dataset.quality = "low";
    },
  });

  if (!reducedMotion) {
    followPointer(root, lift, signal);
  }

  const paint = find<HTMLCanvasElement>(".paint", root);
  /** Resolves when the painting has faded and the card shows its picture. */
  const drawn = paintCard(find<HTMLImageElement>(".picture", root), paint, {
    signal,
    still: reducedMotion,
    lowPower,
    onSlow() {
      root.dataset.quality = "low";
    },
  })
    .catch((error) => console.error(error))
    .then(
      () =>
        new Promise<void>((resolve) => {
          if (signal.aborted) {
            return;
          }
          paint.addEventListener(
            "transitionend",
            () => {
              paint.remove();
              resolve();
            },
            { once: true },
          );
          paint.classList.add("--done");
          root.dataset.painted = "";
        }),
    );

  if (document.readyState === "complete") {
    media.preload();
  } else {
    window.addEventListener("load", () => media.preload(), {
      once: true,
      signal,
    });
  }

  const open = async () => {
    media.unlock();

    let ready = false;
    const playable = media.preload().then(() => (ready = true));

    card.setAttribute("aria-disabled", "true");
    root.classList.add("--opening");

    // The reveal prepares while the label fades out, in order to reduce
    // processing power required.
    const reveal = prepareReveal(root, veil, { reducedMotion, signal, drawn });
    await wait(LABEL_EXIT_MS);

    if (!ready) {
      progress.hidden = false;
      root.classList.add("--loading");
      await playable;
    }

    // Browsers may restore scroll, but the invitation starts at the top.
    scrollTo({ top: 0, behavior: "instant" });

    root.classList.add("--revealing");
    void media.play();
    await reveal();

    root.remove();
    content.inert = false;
    heading.focus({ preventScroll: true });
  };

  if ("queued" in root.dataset) {
    void open();
  } else {
    card.addEventListener("click", open, { once: true, signal });
  }

  root.dataset.ready = "";
}

/**
 * A language link leads to the same invitation, which the guest has already
 * opened.
 */
export function skipOpenerAfterLanguageSwitch(
  event: TransitionBeforeSwapEvent,
) {
  if (!event.sourceElement?.hasAttribute("data-skip-opener")) {
    return;
  }
  event.newDocument.querySelector<HTMLElement>(
    '[data-component="invite-opener"]',
  )!.dataset.skipped = "";
}

/**
 * Tilts the card toward the pointer and moves the light across its paper.
 */
function followPointer(
  root: HTMLElement,
  lift: HTMLElement,
  signal: AbortSignal,
) {
  const rest = {
    "--tilt-x": 0,
    "--tilt-y": 0,
    "--light-x": 30,
    "--light-y": 20,
  };
  const target = { ...rest };
  const current = { ...rest };
  const keys = Object.keys(rest) as (keyof typeof rest)[];

  let rect = lift.getBoundingClientRect();
  let frame = 0;
  let previous = 0;

  function render(now: number) {
    const elapsed = previous ? (now - previous) / 1000 : 0;
    previous = now;
    const ease = 1 - Math.exp(-elapsed * 8);

    let moving = false;
    for (const key of keys) {
      current[key] += (target[key] - current[key]) * ease;
      if (Math.abs(target[key] - current[key]) > 0.01) {
        moving = true;
      }
      root.style.setProperty(key, current[key].toFixed(2));
    }

    if (moving) {
      frame = requestAnimationFrame(render);
    } else {
      frame = 0;
      previous = 0;
    }
  }

  function aim(values: typeof rest) {
    Object.assign(target, values);
    if (!frame) {
      frame = requestAnimationFrame(render);
    }
  }

  window.addEventListener(
    "resize",
    () => (rect = lift.getBoundingClientRect()),
    {
      signal,
    },
  );

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType === "touch") {
        return;
      }
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = clamp(
        (event.clientX - centerX) / (innerWidth / 2),
        -1,
        1,
      );
      const offsetY = clamp(
        (event.clientY - centerY) / (innerHeight / 2),
        -1,
        1,
      );

      aim({
        "--tilt-x": -offsetY * TILT_DEG,
        "--tilt-y": offsetX * TILT_DEG,
        "--light-x": clamp(
          ((event.clientX - rect.left) / rect.width) * 100,
          -20,
          120,
        ),
        "--light-y": clamp(
          ((event.clientY - rect.top) / rect.height) * 100,
          -20,
          120,
        ),
      });
    },
    { signal, passive: true },
  );

  document.addEventListener(
    "pointerout",
    (event) => {
      if (!event.relatedTarget) {
        aim(rest);
      }
    },
    { signal },
  );

  signal.addEventListener("abort", () => cancelAnimationFrame(frame), {
    once: true,
  });
}

function find<T extends Element>(
  selector: string,
  scope: ParentNode = document,
) {
  const element = scope.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Expected the invitation page to have ${selector}`);
  }
  return element;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
