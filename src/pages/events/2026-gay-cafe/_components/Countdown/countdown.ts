import { CLOSES_AT, OPENS_AT } from "../AddToCalendar/event";

const DAY_MS = 24 * 60 * 60 * 1000;
const cafeDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Amsterdam",
});

export function setupCountdown() {
  // Absent on pages without a countdown.
  const root = document.querySelector<HTMLElement>(
    '[data-component="countdown"]',
  );

  if (!root) {
    return;
  }

  const now = new Date();

  if (now >= CLOSES_AT) {
    return;
  }

  root.hidden = false;

  if (now >= OPENS_AT) {
    root.querySelector<HTMLElement>(".soon")!.hidden = true;
    root.querySelector<HTMLElement>(".now")!.hidden = false;
  } else {
    // en-CA formats as YYYY-MM-DD, which Date.parse reads as midnight UTC.
    const days = Math.round(
      (Date.parse(cafeDate.format(OPENS_AT)) -
        Date.parse(cafeDate.format(now))) /
        DAY_MS,
    );

    const relativeDate = new Intl.RelativeTimeFormat(
      document.documentElement.lang,
      { numeric: "auto" },
    );

    root.querySelector(".when")!.textContent = relativeDate.format(days, "day");
  }
}
