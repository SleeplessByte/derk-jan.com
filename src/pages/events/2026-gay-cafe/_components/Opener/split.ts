const SPLIT_MS = 1000;

/**
 * The whole screen splits down the middle.
 *
 * Its halves slide apart and show the invitation from the middle out, with gold
 * light in the gap. The halves copy the sky and the card in CSS, and only
 * `translate` and `opacity` change, so the compositor does the work on weaker
 * devices.
 */
export async function splitScreen(
  root: HTMLElement,
  veil: HTMLElement,
  drawn: Promise<void>,
) {
  // The halves copy the finished picture. This waits for that.
  await drawn;

  const split = root.querySelector<HTMLElement>(".split")!;
  const picture = root.querySelector<HTMLImageElement>(".picture")!;
  const rect = root.querySelector(".card")!.getBoundingClientRect();

  split.style.setProperty("--picture", `url("${picture.currentSrc}")`);
  split.style.setProperty("--card-x", `${rect.x}px`);
  split.style.setProperty("--card-y", `${rect.y}px`);
  split.style.setProperty("--card-width", `${rect.width}px`);
  split.hidden = false;

  root.classList.add("--split");

  const [left, right] = split.querySelectorAll<HTMLElement>(".half");
  const slide: KeyframeAnimationOptions = {
    duration: SPLIT_MS,
    easing: "cubic-bezier(0.65, 0, 0.35, 1)",
    fill: "forwards",
  };

  left.animate({ translate: ["0 0", "-100% 0"] }, slide);
  right.animate({ translate: ["0 0", "100% 0"] }, slide);
  split.querySelector(".seam")!.animate(
    [
      { opacity: 0, scale: "0.2 1" },
      { opacity: 1, scale: "1 1", offset: 0.3 },
      { opacity: 0, scale: "4 1" },
    ],
    { duration: SPLIT_MS, easing: "ease-out", fill: "forwards" },
  );

  // Only the snow is left on the veil which keeps falling over the halves,
  // and then fades.
  await veil.animate(
    { opacity: [1, 0] },
    { duration: SPLIT_MS, fill: "forwards" },
  ).finished;
}
