import { playSong } from "./play";

const LEAD_IN_S = 0.3;

/**
 * Turns the lines of the written lyrics into buttons that play the song from
 * that line. Without JavaScript, the lyrics remains plain text.
 */
export function setupTranscript() {
  const root = document.querySelector<HTMLElement>(
    '[data-component="lyrics-transcript"]',
  );
  // Astro has client side nav, so needs to not run this on other pages.
  if (!root) {
    return;
  }

  const song = document.querySelector<HTMLAudioElement>(
    '[data-target="song"]',
  )!;
  const hint = root.querySelector<HTMLElement>(".hint")!;

  for (const line of root.querySelectorAll<HTMLElement>("span.line")) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "line";
    button.dataset.start = line.dataset.start;
    button.setAttribute("aria-describedby", hint.id);
    button.textContent = line.textContent;
    line.replaceWith(button);
  }
  hint.hidden = false;

  root.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLElement>(
      "button.line",
    );
    if (!button) {
      return;
    }
    song.currentTime = Math.max(0, Number(button.dataset.start) - LEAD_IN_S);
    playSong(song);
  });
}
