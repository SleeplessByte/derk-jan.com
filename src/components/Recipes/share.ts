export function setupShare() {
  const button = document.querySelector<HTMLButtonElement>(
    '[data-component="share"]',
  );

  if (!button || !("share" in navigator)) {
    return;
  }

  button.hidden = false;
  button.addEventListener("click", () => {
    const { title, text } = button.dataset;

    // The current URL, so that the number of people goes along.
    navigator
      .share({ title, text, url: location.href })
      .catch((error: unknown) => {
        // Closing the share sheet means the user changed their mind.
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        throw error;
      });
  });
}
