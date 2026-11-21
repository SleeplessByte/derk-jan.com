// A row changes a little early, so the eye is there when the line starts.
const ROW_LEAD_S = 0.15;
export const PAUSE_S = 3;
export const LINGER_S = 0.5;

interface Row {
  start: number;
  element: HTMLElement;
  words: { start: number; element: HTMLElement }[];
}

/**
 * Shows the lyrics over a poster, audio, or video while the song plays.
 *
 * Follows the song across pages when its player persists.
 */
export function setupLyrics() {
  const root = document.querySelector<HTMLElement>('[data-component="lyrics"]');
  // Astro has client side nav, so needs to not run this on other pages.
  if (!root) {
    return;
  }

  const song = document.querySelector<HTMLAudioElement>(
    '[data-target="song"]',
  )!;
  const list = root.querySelector<HTMLElement>(".rows")!;
  const video = root.parentElement!.querySelector("video");
  const controller = new AbortController();
  const { signal } = controller;

  document.addEventListener("astro:before-swap", () => controller.abort(), {
    once: true,
    signal,
  });

  const rows: Row[] = [...list.children].map((element) => {
    const row = element as HTMLElement;
    return {
      start: Number(row.dataset.start),
      element: row,
      words: [...row.querySelectorAll<HTMLElement>("[data-start]")].map(
        (word) => ({ start: Number(word.dataset.start), element: word }),
      ),
    };
  });

  let frame = 0;
  let shown = -1;

  const centre = (row: Row) => {
    const middle = row.element.offsetTop + row.element.offsetHeight / 2;
    list.style.setProperty("--offset", `${middle}px`);
  };

  const update = () => {
    const time = song.currentTime;
    // The first row starts at 0, so there is always a current row.
    let index = 0;
    for (const [position, row] of rows.entries()) {
      if (row.start > time + ROW_LEAD_S) {
        break;
      }
      index = position;
    }

    const current = rows[index];
    if (index !== shown) {
      // Only the current row and its neighbours show.
      for (const [position, row] of rows.entries()) {
        row.element.classList.toggle("--previous", position === index - 1);
        row.element.classList.toggle("--current", position === index);
        row.element.classList.toggle("--next", position === index + 1);
      }
      centre(current);
      shown = index;
    }

    for (const word of current.words) {
      word.element.classList.toggle("--sung", word.start <= time);
    }
  };

  const loop = () => {
    update();
    frame = requestAnimationFrame(loop);
  };

  const sync = () => {
    const singing = !song.paused && !song.ended;
    const watching = video !== null && !video.paused && !video.ended;
    root.classList.toggle("--playing", singing && !watching);
    cancelAnimationFrame(frame);

    if (singing) {
      loop();
    } else {
      update();
    }
  };

  for (const media of video ? [song, video] : [song]) {
    for (const type of ["play", "pause", "ended", "seeked"]) {
      media.addEventListener(type, sync, { signal });
    }
  }
  window.addEventListener("resize", () => centre(rows[shown]), { signal });
  signal.addEventListener("abort", () => cancelAnimationFrame(frame), {
    once: true,
  });

  // The song may already be playing when this page arrives.
  sync();
}
