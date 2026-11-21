import type { APIRoute } from "astro";

import { eventFor, toIcs, utcStamp } from "./_components/AddToCalendar/event";

const ics = toIcs(eventFor(null), utcStamp(new Date()));

export const GET: APIRoute = () =>
  new Response(ics, {
    headers: { "Content-Type": "text/calendar; charset=utf-8" },
  });
