# Gay Café 2026

The RSVP invitation lives in `src/pages/events/2026-gay-cafe/`.

## Structure

- `[lang]/` holds `index.astro`, `success.astro` and `calendar.ics.ts`. Their `getStaticPaths` builds each page once per language.
- `/events/2026-gay-cafe/` has no page of its own: Netlify redirects it to `/en/` or `/nl/` by the browser's language (see [Netlify](netlify.md)). `/cafe` is a short link to it.
- `_i18n/`:
  - `en.json` is the source, and `nl.json` must have the same keys. `index.ts` checks this with `const nl: Messages = nlJson`, so a missing key fails the build.
  - Components call `messagesFor(Astro.params.lang)`. `pageUrl(lang, page)` builds the addresses.
- `_components/<Feature>/` holds one folder per feature.

## Translation rules

- Messages with markup use only `<em>`, `<strong>`, `<span lang>` and `<a href="#…">`, and are rendered with `set:html`. Colours go on the parent (`[&_strong]:text-…`), so translators never see classes.
- Each sentence that changes after the event has a `future` and a `past` version, because word order differs between languages.
- Placeholders such as `{when}`, `{url}`, `{time}` and `{contact}` are split or replaced in the component.
- The song and its lyrics stay English and are marked `lang="en"`.
- Form field names and values are language-neutral. Both languages post to the same Netlify form, with a hidden `language` field.
- `src/components/Handwriting/` writes the handwritten hint at build time from the message `opener.hint`. Every character must exist in the EMS Allure font, or the build fails.

## Features and their decisions

- **Opener** (`_components/Opener/`):
  - The card is painted in with one pencil and then one brush through masks (`paint.ts`: `sketch` and `bringIn`; `paint-study.ts`). This is the reference implementation for paint-in reveals.
  - On touch devices, the "Open your invitation" label waits until the painting is done.
  - The language link has `data-skip-opener`. An `astro:before-swap` listener marks the next page's opener as skipped, and the side video starts at its loop.
  - While the opener is there, `html` has `overflow: hidden` and `scrollbar-gutter: stable`, so the page does not shift on Windows when the opener goes. The gutter shows the root's background, so the sky (`--opener-sky`) is set on `html`. `scrollbar-gutter` is Baseline only since December 2024 (Safari 18.2); without it, the old shift returns.
  - The body covers the whole page while the opener is there, and `open()` scrolls to the top just before the reveal. `HtmlLayout` makes the body one screen tall, so on a scrolled page (Android Chrome restores the scroll position of a reloaded tab), the reveal showed the page on the sky, and the glow vanished at once. The scroll waits for the tap, because the browser restores the position while the page loads.
  - Speed checks (`frames.ts`): the snow, the painting and the dust each add up slow frames, and a slow device gets `data-quality="low"` for good. Frames do not count while the page is hidden, or for 1 s after it shows again, because the browser then catches up on what it dropped: a visitor who came back to the tab always got the split.
- **Reveal** (`Opener/reveal.ts`): how the opener goes away after the tap, chosen at the tap. `?reveal=dust`, `split` or `fade` overrides `DEFAULT_CHOICE`, to try them on a phone. Reduced motion always gets the fade.
  - Gold dust (`particles-dust.ts`), for capable devices: a gold flash, then the card bursts from the middle into grains that fly out, slow down and fall. They turn gold within 150 ms, because with their own colours the first grains looked like a broken picture. They are round, with some sparkles in the shape of the label's; square grains looked blocky.
  - The sky burns away behind a gold rim (`reveal-burn.ts`, a coarse noise grid scaled up). It starts with a hole under the card, so the invitation shows right behind the burst. The rim fades into what has burned, because a hard stop showed the cells as steps.
    - A CSS background can only be masked as a whole, so the dust first copies the sky to the `.sky` canvas (`sky.ts`). The colours come from the computed style, so dark mode works.
    - Every frame redraws the sky minus the burned cells, so a soft edge does not build up.
    - Past 400 ms of slow frames, the effect skips to its final fade.
  - Speed (measured with 4× and 6× CPU throttling, November 2026):
    - The preparation runs in small steps (`runInSlices`, 6 ms per frame) while the label fades. In the reveal's first frame, it stalled that frame for up to 165 ms.
    - The card is measured at the tap, on `.lift` (without the tilt). Measured when the reveal starts, `getBoundingClientRect` laid out the whole page behind the opener.
    - Each grain is one `drawImage` per frame, which is most of a frame's cost. Drawing them in a worker (`OffscreenCanvas`) is the next step, if needed.
    - Canvases that are read back (`getImageData`) get `willReadFrequently`: a GPU readback waits for all queued GPU work.
  - Split (`reveal-split.ts`), for weak devices (`data-quality="low"`): the screen splits down the middle, and the halves slide apart with gold light in the gap. It waits until the painting has faded (`drawn`), because the halves copy the finished picture in CSS. Their markup is in `Component.astro`, because Astro's scoped styles do not reach elements made in JavaScript.
  - Tried and dropped: a full-screen brush with `createMaskStroke` (it did not look good), and the card opening like a greeting card.
- **Snow** (`Opener/particles-snow.ts`): one simulation on two canvases. The nearest flakes fall in front of the card, with a soft shadow sprite.
  - Under load, the quality steps lower the pixel ratio first, then drop the front layer, then halve the flakes.
  - Weak devices (4 cores or fewer) and reduced motion get no front layer.
- **Handover** (`_components/Handover/`): shown only on devices without hover. It is a `mailto:` link that opens the share sheet instead when `navigator.share` exists.
- **Lyrics**: the shared `src/components/Lyrics/` (see [Songs](songs.md)). Both pages set its colours on the column wrapper.
- **Song**: a native `<audio controls>` with `transition:persist`, so it keeps playing from the invitation to the success page. Both pages list the same sources: the AAC first, then the MP3. An iPhone was unable to play the MP3 song (see [Songs](songs.md)).
- **Success video**: it has a magic sound effect, so it has a caption track per language next to the video. That track has `srclang={lang}`, so on an iPhone with the track bug of iOS 27.2 (see [Songs](songs.md)), the English video may not play.
- **Order ticket** (`_components/OrderTicket/`):
  - It reads its labels from the form, so it follows the page's language.
  - On the success page it prints when it scrolls into view, using a `rootMargin` rather than `threshold: 1` (see [Astro and CSS](astro-and-css.md)).
