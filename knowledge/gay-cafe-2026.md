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
- **Snow** (`Opener/snow.ts`): one simulation on two canvases. The nearest flakes fall in front of the card, with a soft shadow sprite.
  - Under load, the quality steps lower the pixel ratio first, then drop the front layer, then halve the flakes.
  - Weak devices (4 cores or fewer) and reduced motion get no front layer.
- **Handover** (`_components/Handover/`): shown only on devices without hover. It is a `mailto:` link that opens the share sheet instead when `navigator.share` exists.
- **Lyrics** (`_components/Lyrics/`): the song's lyrics and word timings are in `src/assets/audio/2026-fruity-xmas.lyrics.json` and `.vtt`. They were made with the scripts in [`src/tools/lyrics/`](../src/tools/lyrics/), in a scratch folder:
  1. Cut the first verse out of the song: `ffmpeg -ss 8 -to 32 -i src/assets/audio/2026-fruity-xmas.mp3 intro.wav`.
  2. Transcribe both with Whisper `large-v3` on the GPU. The run used the existing `don-whisper` Docker image, which has faster-whisper; the mounted Hugging Face cache keeps the model between runs:
     `docker run --rm --gpus all -v ~/.cache/huggingface:/models -v <scratch>:/work -v <repo>/src/tools/lyrics:/tools:ro -v <repo>/src/assets/audio:/audio:ro don-whisper python3 /tools/transcribe.py /audio/2026-fruity-xmas.mp3 /work/song.json large-v3`.
     For the intro, transcribe `/work/intro.wav` to `/work/intro.json`, with the written first verse as the fourth argument (the prompt): without it, Whisper missed that verse.
  3. `node src/tools/lyrics/build-lyrics.mjs <scratch>/intro.json <scratch>/song.json src/assets/audio/2026-fruity-xmas.lyrics.json`, then format the file with Prettier. The written lines and the time range of each line are in this script; correct them there.
  4. `node src/tools/lyrics/build-vtt.mjs src/assets/audio/2026-fruity-xmas.lyrics.json src/assets/audio/2026-fruity-xmas.vtt`.
- **Order ticket** (`_components/OrderTicket/`):
  - It reads its labels from the form, so it follows the page's language.
  - On the success page it prints when it scrolls into view, using a `rootMargin` rather than `threshold: 1` (see [Astro and CSS](astro-and-css.md)).
