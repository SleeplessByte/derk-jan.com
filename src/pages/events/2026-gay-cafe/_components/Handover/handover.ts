/**
 * Open the share sheet instead of the email link, where the browser has one.
 *
 * On phones, the share sheet reaches more of the guest's own places than email
 * does: AirDrop, chats with themselves, notes, and more.
 */
export function setupHandover() {
  const links = document.querySelectorAll<HTMLAnchorElement>(
    '[data-component="handover"] .send',
  );

  for (const link of links) {
    link.addEventListener("click", (event) => {
      // Web Share is not Baseline as of writing.
      if (!("share" in navigator)) {
        return;
      }
      event.preventDefault();

      const { title, text, url } = link.dataset;
      navigator.share({ title, text, url }).catch((error: unknown) => {
        // Closing the share sheet means the guest changed their mind.
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        location.href = link.href;
      });
    });
  }
}
