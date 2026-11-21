import type { Messages } from "../../_i18n";
import type { Order } from "../OrderTicket/order";

// Hardcoded data for now
const UID = "gay-cafe-2026@derk-jan.com";
const TITLE = "Gay Café 2026";
const PAGE_URL = "https://derk-jan.com/events/2026-gay-cafe/";
const CONTACT = "derk-jan@karrenbeld.info";
const DATE = "20261227";

// Minutes after midnight
const OPENS = 12 * 60;
const CLOSES = 17 * 60 + 28;
const UTC_OFFSET = 60;

export const OPENS_AT = new Date(Date.UTC(2026, 11, 27, 0, OPENS - UTC_OFFSET));
export const CLOSES_AT = new Date(
  Date.UTC(2026, 11, 27, 0, CLOSES - UTC_OFFSET),
);

export interface CalendarEvent {
  start: string;
  end: string;
  description: string;
}

function utc(minutes: number) {
  const time = minutes - UTC_OFFSET;
  const hours = String(Math.floor(time / 60)).padStart(2, "0");
  const rest = String(time % 60).padStart(2, "0");
  return `${DATE}T${hours}${rest}00Z`;
}

function minutesOf(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function eventFor(
  order: Order | null,
  text: Messages["calendar"],
): CalendarEvent {
  const start = order?.arrival ? minutesOf(order.arrival.value) : OPENS;
  const stay = order?.stay;
  const end =
    stay && !stay.untilClosing
      ? Math.min(start + Number(stay.value), CLOSES)
      : CLOSES;

  const lines = [text.about];

  if (order) {
    const name = [order.firstName, order.lastName].filter(Boolean).join(" ");
    const answers = [
      [text.name, name],
      [text.guests, order.rsvp],
      [text.arrival, order.arrival?.text],
      [text.stay, stay?.untilClosing ? text.untilClosing : stay?.text],
      [text.drinks, order.drinks.map((drink) => drink.text).join(", ")],
      [
        text.allergies,
        order.allergies.map((allergy) => allergy.text).join(", "),
      ],
    ].filter(([, answer]) => answer);

    lines.push(
      "",
      text.yourRsvp,
      ...answers.map(([question, answer]) => `${question}: ${answer}`),
    );
  }

  lines.push(
    "",
    text.changeOrCancel.replace("{contact}", CONTACT),
    "",
    PAGE_URL,
  );

  return { start: utc(start), end: utc(end), description: lines.join("\n") };
}

export function googleCalendarUrl(event: CalendarEvent) {
  const query = new URLSearchParams({
    action: "TEMPLATE",
    text: TITLE,
    dates: `${event.start}/${event.end}`,
    details: event.description,
  });

  return `https://calendar.google.com/calendar/render?${query}`;
}

function escapeText(value: string) {
  // Required escapes (RFC 5545, section 3.3.11)
  return value
    .replace(/[\\;,]/g, (character) => `\\${character}`)
    .replace(/\n/g, "\\n");
}

/**
 * Lines limit is 75 characters
 *
 * @param line the input line
 * @returns folded line (based on limit)
 */
function fold(line: string) {
  const encoder = new TextEncoder();
  const parts: string[] = [];
  let part = "";
  let bytes = 0;

  for (const character of line) {
    const size = encoder.encode(character).length;
    const limit = parts.length === 0 ? 75 : 74;

    if (bytes + size > limit) {
      parts.push(part);
      part = "";
      bytes = 0;
    }

    part += character;
    bytes += size;
  }

  parts.push(part);
  return parts.join("\r\n ");
}

/**
 * Generate calendar file
 * @param event
 * @param stamp moment of creation (UTC date-time)
 * @returns
 */
export function toIcs(event: CalendarEvent, stamp: string) {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//derk-jan.com//${TITLE}//EN`,
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    // Ensures a calendar updates the event instead of adding it twice.
    `UID:${UID}`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${event.start}`,
    `DTEND:${event.end}`,
    `SUMMARY:${escapeText(TITLE)}`,
    `DESCRIPTION:${escapeText(event.description)}`,
    `URL:${PAGE_URL}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.map(fold).join("\r\n") + "\r\n";
}

export function utcStamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
}
