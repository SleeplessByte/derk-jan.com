# Songs

Song pages live in `src/pages/prototypes/songs/`. They are shared by link only: `noindex`, and `astro.config.mjs` leaves `/prototypes/` out of the sitemap. The link preview is a square `getImage` crop of the cover.

## Components

- `src/components/Lyrics/`, shared with [Gay Café 2026](gay-cafe-2026.md). It finds the audio by `data-target="song"`, so a page has one song.
  - `Overlay.astro` is an `aria-hidden` visual copy. The current line is centred at 50%.
  - `karaoke.ts` changes rows 0.15 s early, so there is time to read, and lights up words exactly at their time.
  - `Transcript.astro` is the text alternative (WCAG 1.2.1); its lines become buttons that play from that line.
  - The page sets the colours: `--lyrics-accent`, `--lyrics-ring` and `--lyrics-scrim`. Keep the scrim at 17% lightness or darker, so the dim rows keep 4.5:1 over a white photo.
  - The `.vtt` file is the audio's `<track kind="captions">`. Browsers do not show it for audio, but it satisfies `media-has-caption`. Its `srclang` is `und`, not `en`; see [When the song does not play](#when-the-song-does-not-play).
  - `types.ts`: the `Lyrics` type matches the type inferred from the JSON, so a page needs no cast.
  - `play.ts`: call `playSong(song)`, not `song.play()`. Only the caller of `play()` gets its error, so `playSong` sends the error on as the event `lyrics:play-failed`, together with `navigator.userActivation.isActive` at the moment of the call.
- `_components/CoverPlayer/`: the cover is one button, and its name is the action it performs (Play, Pause, Play again). There is no visible pause icon. Without JavaScript, the native controls remain. The class is `.control`, because the global CSS already has `.toggle`.
  - `problem-report.ts` shows a panel with the device details and a copy button when the song does not start: the promise of `play()` rejects, the audio element reports an error, or 10 s pass with no sound and no download progress. The native controls then come back as a second way to play. A slow start that recovers hides the panel again.
  - The page passes the song as `sources`, in order of preference: the AAC (`audio/mp4; codecs="mp4a.40.2"`), then the original MP3. The `<audio>` gets one `<source>` per file. With the codec in the type, `canPlayType` answers `probably` instead of `maybe`.
  - `download.ts` downloads the first source that `canPlayType` does not rule out (`""`) with `fetch()` at the first `play`, shows the progress over the cover, and then puts a `<source>` with its `blob:` URL before the page's sources. A visit without play costs no bytes of the song; the cost is that the song starts after the whole download.
    - The tap must still call `play()` itself, because Safari lifts its tap requirement only for the element that `play()` was called on. So the `<audio>` has `preload="none"`, and the script removes the `<source>` children and calls `load()`. A `play()` without a source waits for one.
    - `canPlayType` cannot promise playback: the iPhone said `maybe` for the MP3 and then could not play it.
    - The blob is a `<source>`, not `src`: a WebKit engineer gave that as the workaround for a blob that fails in `src` (iOS 17.4.1). When the element cannot play a source, it tries the next one by itself, so the song then streams.
    - When the element cannot play a `<source>`, the error fires on that `<source>` and does not bubble. The media element gets no `error`, and its `play()` stays pending, so the report catches these errors with a capturing listener.
    - After it adds the sources, the script calls `play()` again, unless the listener paused during the download: a proposed spec change (whatwg/html#869) would make the new load pause the song.
    - Chrome keeps `currentSrc` after its source is removed, so the report looks for the `<source>` whose `src` matches.
    - The blob gets the `type` of its `<source>`, so Safari can choose a decoder.
  - The loading bar is a comet, because the team goes fast. Without a picture of a bike, on purpose. Its tail, glow and sparks all derive from `--player-progress`. With reduced motion, the comet stands still and has no sparks.
    - The comet must stay inside the card and appear only with progress. `.loading` covers the card with `overflow: hidden`, the flame is never longer than the bar, and the comet fades in over the first 4%. Do not clip `.stage` instead: that would cut off the focus outline of the play button.
- A song's theme is a global style block on the body, `.song-page.--<song>`, which sets `--song-ground`, the lyrics colours and `--player-progress`.

## When the song does not play

An iPhone with iOS 27.2 could not play the MP3, with media error 4 (November 2026). After two changes it plays, but it is not known which change fixed it, so keep both:

- The AAC is the first source. The iOS 27.2 Simulator did not play the MP3 either.
- The song tracks have `srclang="und"`. On some iPhone 16 and 17 models with iOS 27.2, a media element fails with error 4 when it starts to load with a `captions`, `subtitles` or `descriptions` track whose `srclang` is English ([reproduction](https://github.com/t-kigi/video-issue-for-new-iphone-and-iOS27), [video.js issue #9648](https://github.com/videojs/video.js/issues/9648)). Another language, no `srclang`, `kind="metadata"`, or a track added after `loadedmetadata` also works.

The problem report lists the device and each source that failed. Read the iOS version from `Version/` in the user agent: `iPhone OS 18_7` was iOS 27.2. If the report never appears, the tap did not reach the button at all.

## Making the AAC version

The project's Docker images have no ffmpeg, but Windows has it (through scoop), with ffmpeg's own `aac` encoder:

```sh
ffmpeg -i <song>.mp3 -vn -c:a aac -b:a 160k -movflags +faststart <song>.m4a
```

- `-vn` leaves out the cover image, which would otherwise become a video stream.
- `+faststart` puts the index at the start of the file, so a stream can start at once.
- The MP3's ID3 tag holds Suno's C2PA manifest, which does not come along. Keep the MP3 with its tag: do not strip the tag without asking.
- Import it with `?url`: Astro's `client.d.ts` declares `*.mp3` and `*.aac`, but not `*.m4a`.
- Check that the lyrics still fit: decode both files with ffmpeg and compare the waveforms. So far the AAC was never shifted against the MP3.
- A plain `<audio controls>`, as on the Gay Café pages, needs no script: with the AAC and MP3 as `<source>` children, the browser plays the first one it can, and moves on to the next when it cannot play a file.

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
