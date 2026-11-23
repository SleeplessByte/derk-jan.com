import type { APIRoute } from "astro";

import { eventFor, toIcs, utcStamp } from "../_components/AddToCalendar/event";
import { localeList, messagesFor } from "../_i18n";

export function getStaticPaths() {
  return localeList.map((lang) => ({ params: { lang } }));
}

/**
 * Serve the general event as a calendar file.
 *
 * It is for guests whose answers the success page does not know.
 *
 * @param context the request, with the page's language in its params
 * @returns the .ics file
 */
export const GET: APIRoute = ({ params }) =>
  new Response(
    toIcs(
      eventFor(null, messagesFor(params.lang).calendar),
      utcStamp(new Date()),
    ),
    {
      headers: { "Content-Type": "text/calendar; charset=utf-8" },
    },
  );
