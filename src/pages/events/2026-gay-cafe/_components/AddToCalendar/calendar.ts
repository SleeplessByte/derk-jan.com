import type { Messages } from "../../_i18n";
import { recallOrder } from "../OrderTicket/order";
import { eventFor, googleCalendarUrl, toIcs, utcStamp } from "./event";

/** Puts the guest's own answers and times in both calendar links. */
export function setupCalendar() {
  const root = document.querySelector<HTMLElement>(
    '[data-component="add-to-calendar"]',
  );
  if (!root) {
    return;
  }

  const order = recallOrder();
  if (!order) {
    return;
  }

  const text: Messages["calendar"] = JSON.parse(root.dataset.messages!);
  const event = eventFor(order, text);
  const ics = root.querySelector<HTMLAnchorElement>('[data-target="ics"]')!;
  const google = root.querySelector<HTMLAnchorElement>(
    '[data-target="google"]',
  )!;

  const file = new Blob([toIcs(event, utcStamp(new Date()))], {
    type: "text/calendar",
  });
  ics.href = URL.createObjectURL(file);
  ics.download = "gay-cafe-2026.ics";

  google.href = googleCalendarUrl(event);
}
