import { defineMiddleware } from 'astro:middleware';
import { getActionContext } from 'astro:actions';
import { randomUUID } from "node:crypto";
import { getStore } from "@netlify/blobs";

export const onRequest = defineMiddleware(async (context, next) => {
  // Skip requests for prerendered pages
  if (context.isPrerendered) return next();

  const { action, setActionResult, serializeActionResult } =
    getActionContext(context);
  // Create a Blob store to persist action results with Netlify Blob
  const actionStore = getStore("action-session");

  // If an action result was forwarded as a cookie, set the result
  // to be accessible from `Astro.getActionResult()`
  const sessionId = context.cookies.get("action-session-id")?.value;
  const session = sessionId
    ? await actionStore.get(sessionId, {
        type: "json",
      })
    : undefined;

  if (session && sessionId) {
    setActionResult(session.actionName, session.actionResult);

    // Optional: delete the session after the page is rendered.
    // Feel free to implement your own persistence strategy
    await actionStore.delete(sessionId);
    context.cookies.delete("action-session-id");
    return next();
  }

  // If an action was called from an HTML form action,
  // call the action handler and redirect to the destination page
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();

    // Persist the action result using session storage
    const sessionId = randomUUID();
    await actionStore.setJSON(sessionId, {
      actionName: action.name,
      actionResult: serializeActionResult(actionResult),
    });

    // Pass the session ID as a cookie
    // to be retrieved after redirecting to the page
    context.cookies.set("action-session-id", sessionId);

    // Redirect back to the previous page on error
    if (actionResult.error) {
      const referer = context.request.headers.get("Referer");
      if (!referer) {
        throw new Error(
          "Internal: Referer unexpectedly missing from Action POST request.",
        );
      }
      return context.redirect(referer);
    }
    // Redirect to the destination page on success
    return context.redirect(context.originPathname);
  }

  return next();
});