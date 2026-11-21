/**
 * Turns the cover into the song's play button: it plays, pauses, and plays
 * again after the end. Without JavaScript, the audio keeps its native controls.
 */
export function setupCoverPlayer() {
  const root = document.querySelector<HTMLElement>(
    '[data-component="cover-player"]',
  );

  // Astro has client side nav, so needs to not run this on other pages.
  if (!root) {
    return;
  }

  const song = root.querySelector<HTMLAudioElement>('[data-target="song"]')!;
  const control = root.querySelector<HTMLButtonElement>(".control")!;

  const sync = () => {
    root.classList.toggle("--playing", !song.paused);
    root.classList.toggle("--ended", song.ended);
  };

  for (const type of ["play", "pause", "ended"]) {
    song.addEventListener(type, sync);
  }

  control.addEventListener("click", () => {
    // After the end, play() starts the song from the beginning.
    if (song.paused) {
      void song.play();
    } else {
      song.pause();
    }
  });

  song.controls = false;
  control.hidden = false;
  sync();
}
