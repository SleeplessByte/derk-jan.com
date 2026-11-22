import { playSong } from "../../../../../components/Lyrics/play";

const FADE_DELAY_MS = 300;
const FADE_MS = 400;

export const DOWNLOAD_PROGRESS = "cover-player:download-progress";

declare global {
  interface HTMLMediaElementEventMap {
    [DOWNLOAD_PROGRESS]: Event;
  }
}

/**
 * Downloads the song's first playable source when it is first played, with the
 * progress as a bar over the cover, and then plays it.
 */
export function downloadOnPlay(root: HTMLElement, song: HTMLAudioElement) {
  const loading = root.querySelector<HTMLElement>(".loading")!;
  const progress = loading.querySelector("progress")!;
  const sources = [...song.querySelectorAll("source")];
  const preferred = sources.find(
    (source) => song.canPlayType(source.type) !== "",
  )!;
  const controller = new AbortController();
  const { signal } = controller;

  // Without a source, the play() of a tap waits for one, and Safari keeps the
  // tap's permission to play on this element.
  for (const source of sources) {
    source.remove();
  }
  song.load();

  const show = (ratio: number) => {
    progress.value = ratio;
    loading.style.setProperty("--loaded", String(ratio));
    song.dispatchEvent(new Event(DOWNLOAD_PROGRESS));
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

  // The audio element tries its sources in order
  const use = (...sources: HTMLSourceElement[]) => {
    // A pause during the download means the listener changed their mind.
    const wanted = !song.paused;
    song.prepend(...sources);
    if (wanted) {
      playSong(song);
    }
  };

  const start = async () => {
    loading.hidden = false;
    let blob: Blob;
    try {
      blob = await withoutTag(
        await download(preferred.src, preferred.type, signal, show),
      );
    } catch {
      loading.hidden = true;
      // Aborted means the page is being left.
      if (!signal.aborted) {
        use(...sources);
      }
      return;
    }

    const url = URL.createObjectURL(blob);
    document.addEventListener(
      "astro:before-swap",
      () => URL.revokeObjectURL(url),
      { once: true },
    );

    const downloaded = document.createElement("source");
    downloaded.src = url;
    downloaded.type = blob.type;

    use(downloaded, ...sources);

    await finish();
  };

  song.addEventListener("play", () => void start(), { once: true, signal });
  document.addEventListener("astro:before-swap", () => controller.abort(), {
    once: true,
    signal,
  });
}

async function download(
  url: string,
  type: string,
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
  return new Blob(chunks, { type });
}

/**
 * The ID3 tag contains the lyrics, the cover and optionally a C2PA manifest,
 * which the page does not need.
 */
async function withoutTag(song: Blob) {
  const header = new Uint8Array(await song.slice(0, 10).arrayBuffer());
  if (new TextDecoder().decode(header.subarray(0, 3)) !== "ID3") {
    return song;
  }

  // The size does not include the 10 header bytes.
  const size =
    (header[6] << 21) | (header[7] << 14) | (header[8] << 7) | header[9];
  return song.slice(10 + size, song.size, song.type);
}
