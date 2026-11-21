import type { APIRoute } from "astro";

import { eventFor, toIcs, utcStamp } from "../_components/AddToCalendar/event";
import { localeList, messagesFor } from "../_i18n";

export function getStaticPaths() {
  return localeList.map((lang) => ({ params: { lang } }));
}

// The general event, for guests whose answers the success page does not know.
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
