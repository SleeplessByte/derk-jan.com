# Songs

Song pages live in `src/pages/prototypes/songs/`. They are shared by link only: `noindex`, and `astro.config.mjs` leaves `/prototypes/` out of the sitemap. The link preview is a square `getImage` crop of the cover.

## Components

- `src/components/Lyrics/`, shared with [Gay Café 2026](gay-cafe-2026.md). It finds the audio by `data-target="song"`, so a page has one song.
  - `Overlay.astro` is an `aria-hidden` visual copy. The current line is centred at 50%.
  - `karaoke.ts` changes rows 0.15 s early, so there is time to read, and lights up words exactly at their time.
  - `Transcript.astro` is the text alternative (WCAG 1.2.1); its lines become buttons that play from that line.
  - The page sets the colours: `--lyrics-accent`, `--lyrics-ring` and `--lyrics-scrim`. Keep the scrim at 17% lightness or darker, so the dim rows keep 4.5:1 over a white photo.
  - The `.vtt` file is the audio's `<track kind="captions">`. Browsers do not show it for audio, but it satisfies `media-has-caption`.
  - `types.ts`: the `Lyrics` type matches the type inferred from the JSON, so a page needs no cast.
  - `play.ts`: call `playSong(song)`, not `song.play()`. Only the caller of `play()` sees a refusal, so `playSong` sends it on as the event `lyrics:play-refused`, together with `navigator.userActivation.isActive` at the moment of the call.
- `_components/CoverPlayer/`: the cover is one button, and its name is the action it performs (Play, Pause, Play again). There is no visible pause icon. Without JavaScript, the native controls remain. The class is `.control`, because the global CSS already has `.toggle`.
  - `problem-report.ts` shows a panel with the device details and a copy button when the song does not start: `play()` is refused, the audio element fails, or 10 s pass with no sound and no download progress. The native controls then come back as a second way to play. A slow start that recovers hides the panel again.
  - `download.ts` downloads the whole song with `fetch()` at the first `play`, shows the progress as a bar over the cover, and then gives the audio element a `blob:` URL. A visit without play costs no bytes of the song (4.3 MB for Rijndam Racers). The cost: the song starts after the whole download, not after its first seconds.
    - The tap must still call `play()` itself. So the script removes the `src` and calls `load()`, and the `<audio>` has `preload="none"`, so nothing loads before the script runs. A `play()` without a source sets `paused` to false and waits for a source. Safari lifts its tap requirement for this one element at that call. Chrome and Firefox only need an earlier activation of the page.
    - After it sets the blob, the script calls `play()` again, unless the listener paused during the download. Today the song would also start without that call, but a proposed spec change (whatwg/html#869) would make the new load pause it.
    - When the download fails, the song streams from its own URL.
    - Chrome keeps `currentSrc` after the `src` attribute is removed, so check the attribute to know whether the song has a source.
    - The blob keeps the response's `Content-Type`, so Safari can choose a decoder. The report says whether the song was `downloaded` or `streamed`, or has no source yet with the download percentage.
    - Tested in Chrome with a strict autoplay policy, a touch tap, a slow, failed or hanging download, a pause during the download, and a lyrics line tapped first. Not tested on a real iPhone.
  - The loading bar is a comet, because the team goes fast. Without a picture of a bike, on purpose. Its tail, glow and sparks all derive from `--player-progress`. With reduced motion, the comet stands still and has no sparks.
    - The comet must stay inside the card and appear only with progress. `.loading` covers the card with `overflow: hidden`, the flame is never longer than the bar, and the comet fades in over the first 4%. Do not clip `.stage` instead: that would cut off the focus outline of the play button.
- A song's theme is a global style block on the body, `.song-page.--<song>`, which sets `--song-ground`, the lyrics colours and `--player-progress`.

## When the song does not play

An iPhone user reported that the cover's play button did nothing (November 2026). The cause was not found; the problem report exists to find it. These are ruled out:

- The server: Netlify (behind Cloudflare) answers `Range: bytes=0-1` on `/_astro/*.mp3` with `206` and `audio/mpeg`. iOS needs byte ranges for media.
- The file: MP3, 48 kHz, stereo, ID3v2.4 with a small cover image. The Fruity Xmas song has the same format.
- The captions: the `.vtt` is served as `text/vtt`. This matters because a browser that turns captions on (for example with the iOS caption setting) waits for the track before it plays.
- The user activation: `play()` runs synchronously in the click handler. In Chrome, a touch tap starts the song under a strict autoplay policy.

If the report never appears, the tap did not reach the button at all.

## Making the lyrics

The scripts and [`compose.yaml`](../src/tools/lyrics/compose.yaml) (project `derk-jan-com`) are in [`src/tools/lyrics/`](../src/tools/lyrics/). Run Docker from WSL in that folder, with `LYRICS_WORK=<scratch folder, WSL path>`. The prompts and clips of each song are in its build script.

1. Get the written lyrics. Suno puts them in the ID3 tag: `ffprobe -v error -show_entries format_tags=lyrics-eng -of default=nw=1 <song>.mp3`.
2. Rough timing with Whisper: `docker compose run --rm whisper python3 /tools/transcribe.py /audio/<song>.mp3 /work/song.json large-v3 "<prompt>"`.
   - Whisper often misses the first line or verse. Transcribe that part as a clip, with its written lines as the prompt.
   - The prompt is limited to about 223 tokens, and the result depends on its exact wording.
3. `build-<song>.mjs <clip.json> <song.json> <lyrics.json>` holds the written lines, each with the `[from, to)` range of its heard words.
   - Follow what is sung, including repeats.
   - A heard word with a probability near 0 is an artefact.
4. Exact timing: Whisper's word starts are about 0.3 s early, because it adds the silence before a word to that word. [`align.py`](../src/tools/lyrics/align.py) separates the vocals with Demucs and aligns the words to them with wav2vec2. It changes `lyrics.json` in place.
   - Input is a 44.1 kHz stereo WAV: `ffmpeg -i <song>.mp3 -ar 44100 -ac 2 <scratch>/song.wav`.
   - `docker compose run --rm align python3 /tools/align.py /work/song.wav /audio/<song>.lyrics.json`.
   - The window of a line must end shortly after the line, or its last word drifts into the next line.
5. Format the JSON with Prettier, then run `node src/tools/lyrics/build-vtt.mjs <song>.lyrics.json <song>.vtt "<title>"`.
6. Clean up with `docker compose down`. While songs are being made, keep the images (`don-whisper`, and `derk-jan-com-align` at 8.8 GB) and the model caches (`.cache/huggingface` and `.cache/torch` in the Windows user folder).

Lyrics text: words are split on spaces, so never join two words with punctuation alone. No em dashes: use a comma, a hyphen, or nothing.
