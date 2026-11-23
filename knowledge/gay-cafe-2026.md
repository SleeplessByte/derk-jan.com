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
- **Reveal** (`Opener/reveal.ts`): how the opener goes away after the click, chosen at the click. `?reveal=dust`, `split` or `fade` overrides `DEFAULT_CHOICE`, to try them out on a phone.
  - Reduced motion gets a fade, also with `?reveal=`.
  - Gold dust (`dust.ts`), for capable devices: a gold flash, then the card bursts from the middle into 40×40 grains, which fly out fast, slow down and fall. They turn gold within 150 ms: with their own colours, the first grains looked like a broken picture. The grains are round, with some four-point sparkles in the shape of the label's sparkles (read from the page); square grains looked too blocky.
  - The sky burns away behind a gold rim (`burn.ts`, a grid of about 240 noise cells scaled up). It starts at once, with a hole already under the card, so the invitation shows right behind the burst. The rim also fades into what has burned: a hard stop there showed the cells as steps.
    - A CSS background can only be masked as a whole, so the dust first copies the sky to the `.sky` canvas (`sky.ts`). The colours come from the computed style, so dark mode works.
    - Every frame redraws the whole sky minus the burned cells (`eraseFrom`), so a soft edge does not build up.
    - Slow frames add up as in `paint.ts` (see the speed checks below); past 400 ms the effect skips to its final fade.
    - Speed (measured with CPU throttling at 4× and 6× and CPU profiles, November 2026):
      - `prepareReveal` starts at the tap and prepares the dust while the label fades (300 ms). Done in the reveal's first frame, it stalled that frame for 120 to 165 ms (6×); done in three big steps, it made four frames of 100 to 125 ms during the fade. Now the preparation is a generator of small steps, and `runInSlices` runs as many as fit in 6 ms per frame. Even at 6× it is done before the label is gone.
      - The card's place is measured at the tap, on `.lift` (without the tilt). Measured when the reveal starts, `getBoundingClientRect` laid out the whole page behind the opener in that frame.
      - The burn orders its cells once, with a counting sort into 1024 buckets that can stop between chunks, and visits only the band around the edge each frame. The sky canvas has half the resolution, and the rim is drawn on it.
      - Each grain is one `drawImage` per frame, which is most of a frame's cost. Hence 32×32 grains, and no drawing off the screen. Drawing them in a worker (`OffscreenCanvas`) is the next step, if needed.
      - Canvases that are read back (`getImageData`) get `willReadFrequently`: a GPU readback waits for all queued GPU work.
  - Split (`split.ts`), for weak devices (`data-quality="low"`): the screen splits down the middle and its halves slide apart, with gold light in the gap. It waits until the card's painting has faded (`drawn` in `opener.ts`), because the halves copy the finished picture; the label already hides at the tap. The halves copy the sky (`--opener-sky`) and the card in CSS, and only `translate` and `opacity` change. Their markup is in `Component.astro`, because Astro's scoped styles do not reach elements made in JavaScript.
  - The opener hides the page's scrollbar with `overflow: hidden` on `html`, and keeps its space with `scrollbar-gutter: stable`, so the page does not shift on Windows when the opener goes. The gutter shows the root's background, so the gold and the sky's colours (`--opener-sky`) are set on `html` while the opener is there.
    - `scrollbar-gutter` is Baseline only since December 2024 (Safari 18.2). Without it, the old shift returns; Safari on Apple devices has overlay scrollbars anyway.
    - While the opener is there, the body covers the whole page. `HtmlLayout` makes it one screen tall, and below that the page's content has no background of its own. On a page that was scrolled down (Android Chrome restores the scroll position of a reloaded tab), the reveal showed the page on the sky, and the sky's glow vanished at once when the opener went.
    - The reveal starts at the top of the page: `open()` scrolls there just before it. Not earlier, because on a reload the browser restores the old position while the page loads (Astro's router hands that to the browser). A tap before the page has loaded can still end up scrolled, which the body rule above covers.
  - Speed checks (`frames.ts`): the snow, the painting and the dust each add up slow frames, and a slow device gets `data-quality="low"` for good. Frames do not count while the page is hidden, or for 1 s after it shows again: the browser then redraws and decodes what it dropped, and visitors who came back to the tab always got the split. Measured in headless Chrome: after 5 s in a background tab, the first frames took 146 and 63 ms; after 0.6 s, the first frame took 639 ms, which alone lowered the quality.
  - Tried and dropped: a full-screen brush with `createMaskStroke` (it did not look good), and the card opening like a greeting card.
- **Snow** (`Opener/snow.ts`): one simulation on two canvases. The nearest flakes fall in front of the card, with a soft shadow sprite.
  - Under load, the quality steps lower the pixel ratio first, then drop the front layer, then halve the flakes.
  - Weak devices (4 cores or fewer) and reduced motion get no front layer.
- **Handover** (`_components/Handover/`): shown only on devices without hover. It is a `mailto:` link that opens the share sheet instead when `navigator.share` exists.
- **Lyrics**: the shared `src/components/Lyrics/` (see [Songs](songs.md)). Both pages set its colours on the column wrapper.
- **Song**: a native `<audio controls>` with `transition:persist`, so it keeps playing from the invitation to the success page. Both pages list the same sources: AAC first, then the MP3, because an iPhone refused an MP3 song (see [Songs](songs.md)).
- **Success video**: it has a magic sound effect, so it has a caption track per language next to the video.
- **Order ticket** (`_components/OrderTicket/`):
  - It reads its labels from the form, so it follows the page's language.
  - On the success page it prints when it scrolls into view, using a `rootMargin` rather than `threshold: 1` (see [Astro and CSS](astro-and-css.md)).
