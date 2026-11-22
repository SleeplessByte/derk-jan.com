import { PLAY_REFUSED } from "../../../../../components/Lyrics/play";
import { DOWNLOAD_PROGRESS } from "./download";

// Long enough for a slow mobile connection to deliver the next part of the song.
const STALL_MS = 10_000;

interface Problem {
  text: string;
  slow: boolean;
}

/**
 * When the song does not start, shows what went wrong with the details of the
 * device, so the listener can send them. The native controls come back as a
 * second way to play.
 */
export function setupProblemReport(root: HTMLElement, song: HTMLAudioElement) {
  const panel = root.querySelector<HTMLElement>(".problem")!;
  const details = panel.querySelector<HTMLElement>(".details")!;
  const copy = panel.querySelector<HTMLButtonElement>(".copy")!;
  const copied = panel.querySelector<HTMLElement>(".status.--copied")!;
  const failed = panel.querySelector<HTMLElement>(".status.--failed")!;
  const download =
    root.querySelector<HTMLProgressElement>(".loading progress")!;

  let problems: Problem[] = [];
  const refused: string[] = [];
  let report = "";
  let stall = 0;

  const add = (text: string, slow = false) => {
    problems.push({ text, slow });
    report = describe(song, download, problems, refused);
    details.textContent = report;
    copied.hidden = true;
    failed.hidden = true;
    panel.hidden = false;
    song.controls = true;
  };

  song.addEventListener(PLAY_REFUSED, ({ detail: { error, activated } }) => {
    const reason =
      error instanceof DOMException
        ? `${error.name}: ${error.message}`
        : String(error);
    add(
      `play() refused (${reason}); user activation at the call: ${activated ?? "unknown"}`,
    );
  });

  song.addEventListener("error", () => add("the audio element failed"));
  song.addEventListener(
    "error",
    ({ target }) => {
      if (target instanceof HTMLSourceElement) {
        refused.push(kindOf(target.src));
      }
    },
    { capture: true },
  );

  const watch = () => {
    window.clearTimeout(stall);
    stall = window.setTimeout(
      () => add(`no sound and no progress for ${STALL_MS / 1000} s`, true),
      STALL_MS,
    );
  };

  song.addEventListener("play", watch);
  song.addEventListener(DOWNLOAD_PROGRESS, () => {
    if (!song.paused) {
      watch();
    }
  });

  for (const type of ["playing", "pause", "error"]) {
    song.addEventListener(type, () => window.clearTimeout(stall));
  }

  song.addEventListener("playing", () => {
    if (problems.every((problem) => problem.slow)) {
      problems = [];
      panel.hidden = true;
      song.controls = false;
    }
  });

  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(report).then(
      () => {
        copied.hidden = false;
        failed.hidden = true;
      },
      () => {
        copied.hidden = true;
        failed.hidden = false;
      },
    );
  });
}

function describe(
  song: HTMLAudioElement,
  download: HTMLProgressElement,
  problems: Problem[],
  refused: string[],
) {
  const track = song.querySelector("track")!;
  const { buffered, error } = song;
  const loaded =
    buffered.length > 0 ? buffered.end(buffered.length - 1).toFixed(1) : "0";

  // Older iPhones lack this, and they are originally the ones this report is for.
  const everActivated =
    "userActivation" in navigator
      ? navigator.userActivation.hasBeenActive
      : "unknown";

  return [
    ...problems.map(({ text }) => `Problem: ${text}`),
    `Page: ${location.href}`,
    `Time: ${new Date().toISOString()}`,
    `Browser: ${navigator.userAgent}`,
    `Screen: ${screen.width}x${screen.height} at ${devicePixelRatio}x, window ${innerWidth}x${innerHeight}, ${navigator.maxTouchPoints} touch points`,
    `Languages: ${navigator.languages.join(", ")}`,
    `Page ever activated: ${everActivated}`,
    `Audio: ready state ${song.readyState}, network state ${song.networkState}, ${song.paused ? "paused" : "not paused"} at ${song.currentTime.toFixed(1)} s, loaded to ${loaded} s, MP3 support "${song.canPlayType("audio/mpeg")}"`,
    `Source: ${sourceOf(song, download)}; refused: ${refused.join(", ") || "none"}`,
    `Media error: ${error ? `${error.code} ${error.message}` : "none"}`,
    `Captions: mode ${track.track.mode}, ready state ${track.readyState}`,
  ].join("\n");
}

function sourceOf(song: HTMLAudioElement, download: HTMLProgressElement) {
  if (!song.querySelector("source")) {
    return `none yet, download at ${Math.round(download.value * 100)}%`;
  }
  return kindOf(song.currentSrc);
}

function kindOf(url: string) {
  return url.startsWith("blob:") ? "downloaded without tag" : "streamed";
}
