/** Amount of time that indicates a pause such as a backgrounded tab. */
const PAUSE_MS = 1000;

/**
 * When a page shows again the browser redraws and decodes what it dropped
 * while the page was hidden, so the first frames are slow on any device.
 */
const SETTLE_MS = 1000;

export function framesThatCount(signal: AbortSignal) {
  let countsFrom = 0;

  document.addEventListener(
    "visibilitychange",
    () => {
      countsFrom = document.hidden ? Infinity : performance.now() + SETTLE_MS;
    },
    { signal },
  );

  return (now: number, elapsed: number) =>
    elapsed < PAUSE_MS && now >= countsFrom;
}
