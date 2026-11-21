/** The intro's own sound fades out over its last seconds; the song fades in below it. */
const SONG_LEAD_S = 2.5;
const SONG_FADE_MS = 3000;

interface SideMediaElements {
  intro: HTMLVideoElement;
  loop: HTMLVideoElement;
  toggle: HTMLButtonElement;
  song: HTMLAudioElement;
}

interface SideMediaOptions {
  signal: AbortSignal;
  onProgress: (fraction: number | undefined) => void;
}

export function createSideMedia(
  { intro, loop, toggle, song }: SideMediaElements,
  { signal, onProgress }: SideMediaOptions,
) {
  const objectUrls: string[] = [];
  let introReady: Promise<boolean> | undefined;
  let loopReady: Promise<boolean> | undefined;
  let current: HTMLVideoElement | undefined;
  let songCued = false;

  const pauseIcon = toggle.querySelector<SVGElement>('[data-icon="pause"]')!;
  const playIcon = toggle.querySelector<SVGElement>('[data-icon="play"]')!;

  signal.addEventListener(
    "abort",
    () => objectUrls.forEach((url) => URL.revokeObjectURL(url)),
    { once: true },
  );

  async function load(
    video: HTMLVideoElement,
    progress?: SideMediaOptions["onProgress"],
  ) {
    try {
      const url = await fetchObjectUrl(video.dataset.src!, signal, progress);
      objectUrls.push(url);
      video.src = url;
      return true;
    } catch (error) {
      if (!signal.aborted) {
        console.error(error);
      }
      return false;
    }
  }

  function syncToggle() {
    const paused = current!.paused;
    pauseIcon.classList.toggle("hidden", paused);
    playIcon.classList.toggle("hidden", !paused);
  }

  function setCurrent(video: HTMLVideoElement | undefined) {
    current = video;
    toggle.hidden = !video;
    if (video) {
      syncToggle();
    }
  }

  for (const video of [intro, loop]) {
    for (const type of ["play", "pause"]) {
      video.addEventListener(
        type,
        () => {
          if (video === current) {
            syncToggle();
          }
        },
        { signal },
      );
    }
  }

  toggle.addEventListener(
    "click",
    () => {
      if (current!.paused) {
        void current!.play();
      } else {
        current!.pause();
      }
    },
    { signal },
  );

  /**
   * Downloads the intro first, then the loop, so the intro gets all the
   * bandwidth. Resolves with whether the intro can play.
   */
  function preload() {
    if (!introReady) {
      introReady = load(intro, onProgress);
      loopReady = introReady.then(() => load(loop));
    }
    return introReady;
  }

  /**
   * Must run inside the click handler. WebKit only lets an element play
   * with sound later when it was started inside a user gesture.
   */
  function unlock() {
    for (const media of [intro, song]) {
      if (!media.paused) {
        continue;
      }
      media.muted = false;
      media.play().catch(() => {});
      media.pause();
    }
  }

  /** Starts the song from silence, unless the guest already started or paused it. */
  function cueSong() {
    if (songCued) {
      return;
    }
    songCued = true;
    if (!song.paused || song.currentTime > 0) {
      return;
    }

    song.volume = 0;
    song.play().then(
      () => fadeIn(song, SONG_FADE_MS),
      // A guest who presses play later must not hear silence.
      () => (song.volume = 1),
    );
  }

  async function play() {
    if ((await preload()) && (await start(intro, { sound: true }))) {
      intro.classList.remove("opacity-0");
      setCurrent(intro);
      intro.addEventListener(
        "timeupdate",
        () => {
          if (intro.duration - intro.currentTime <= SONG_LEAD_S) {
            cueSong();
          }
        },
        { signal },
      );
      await once(intro, "ended", signal);
    }

    const reducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (
      !reducedMotion &&
      (await loopReady) &&
      (await start(loop, { sound: false }))
    ) {
      loop.classList.remove("opacity-0");
      setCurrent(loop);
    } else {
      setCurrent(undefined);
    }
    intro.classList.add("opacity-0");

    cueSong();
  }

  return { preload, unlock, play };
}

/** Starts playback, falling back to muted when the browser blocks sound. */
async function start(video: HTMLVideoElement, { sound }: { sound: boolean }) {
  video.currentTime = 0;
  video.muted = !sound;
  try {
    await video.play();
    return true;
  } catch (error) {
    if (!sound || (error as DOMException).name !== "NotAllowedError") {
      return false;
    }
    video.muted = true;
    return video.play().then(
      () => true,
      () => false,
    );
  }
}

/** Downloads the whole file, so playback never waits for the network. */
async function fetchObjectUrl(
  url: string,
  signal: AbortSignal,
  onProgress?: (fraction: number | undefined) => void,
) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`Could not load ${url}: HTTP ${response.status}`);
  }

  const total = Number(response.headers.get("Content-Length")) || undefined;
  // A successful GET always has a body.
  const reader = response.body!.getReader();
  const chunks: Uint8Array<ArrayBuffer>[] = [];
  let received = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
    received += value.length;
    onProgress?.(total ? received / total : undefined);
  }

  const type = response.headers.get("Content-Type") ?? "video/mp4";
  return URL.createObjectURL(new Blob(chunks, { type }));
}

/**
 * Raises the volume from silence; squared, because loudness is not linear.
 * Timers keep running in a background tab, where animation frames stop.
 * iOS ignores `volume`, so there the song starts at full volume.
 */
function fadeIn(media: HTMLMediaElement, duration: number) {
  const start = performance.now();
  const timer = setInterval(() => {
    const progress = Math.min(1, (performance.now() - start) / duration);
    media.volume = progress ** 2;
    if (progress === 1) {
      clearInterval(timer);
    }
  }, 50);
}

function once(target: EventTarget, type: string, signal: AbortSignal) {
  return new Promise<void>((resolve) =>
    target.addEventListener(type, () => resolve(), { once: true, signal }),
  );
}
