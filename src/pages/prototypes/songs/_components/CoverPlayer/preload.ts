// Long enough to see the full bar before it goes.
const FADE_DELAY_MS = 300;
const FADE_MS = 400;

/**
 * Downloads the whole song once the page has loaded, with the progress as a
 * bar over the cover. The `preload` attribute is not enough, because iOS loads
 * nothing before the first tap. A play before the download is done streams the
 * song as before, and stops the download.
 */
export function preloadSong(root: HTMLElement, song: HTMLAudioElement) {
  const loading = root.querySelector<HTMLElement>(".loading")!;
  const progress = loading.querySelector("progress")!;
  const controller = new AbortController();
  const { signal } = controller;

  const show = (ratio: number) => {
    progress.value = ratio;
    loading.style.setProperty("--loaded", String(ratio));
  };

  const finish = async () => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    await loading.animate(
      { opacity: [1, 0] },
      {
        duration: reduce ? 0 : FADE_MS,
        delay: FADE_DELAY_MS,
        fill: "forwards",
      },
    ).finished;
    loading.hidden = true;
  };

  const start = async () => {
    loading.hidden = false;
    const blob = await download(song.src, signal, show);
    // paused turns false at play(), a moment before the play event aborts.
    if (signal.aborted || !song.paused) {
      loading.hidden = true;
      return;
    }
    const url = URL.createObjectURL(blob);
    song.src = url;
    document.addEventListener(
      "astro:before-swap",
      () => URL.revokeObjectURL(url),
      { once: true },
    );
    await finish();
  };

  const begin = () => {
    // Without the download, the song still streams from its own address.
    start().catch(() => {
      loading.hidden = true;
    });
  };

  song.addEventListener("play", () => controller.abort(), {
    once: true,
    signal,
  });
  document.addEventListener("astro:before-swap", () => controller.abort(), {
    once: true,
    signal,
  });

  // The cover comes first.
  if (document.readyState === "complete") {
    begin();
  } else {
    window.addEventListener("load", begin, { once: true, signal });
  }
}

async function download(
  url: string,
  signal: AbortSignal,
  onProgress: (ratio: number) => void,
) {
  const response = await fetch(url, { signal });
  // A server error page must not replace the song.
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const total = Number(response.headers.get("Content-Length"));
  const reader = response.body!.getReader();
  const chunks: BlobPart[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(value);
    received += value.byteLength;
    onProgress(received / total);
  }

  // Safari chooses the decoder for a blob by its type.
  return new Blob(chunks, { type: response.headers.get("Content-Type")! });
}
