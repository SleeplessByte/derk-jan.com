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

An iPhone user reported that the cover's play button did nothing (November 2026). The phone was an iPhone 16 or 17 Pro Max with iOS 27.2. Its Safari says `iPhone OS 18_7` and `Version/27.2` in the user agent, so read the iOS version from `Version/`. The problem report showed that Safari refused the Rijndam Racers MP3 with `MEDIA_ERR_SRC_NOT_SUPPORTED` (4) three times: streamed, downloaded as a blob, and downloaded without its ID3 tag. `canPlayType("audio/mpeg")` said `maybe`, which is normal.

The cause is not confirmed (2026-11-23). There are two candidates, and the site now avoids both: the AAC is the first source, and the song tracks have `srclang="und"`.

1. An iOS 27.2 bug with English tracks. A media element fails at once with error 4 when, at the start of its load, it has a `<track>` of kind `captions`, `subtitles` or `descriptions` with an English `srclang` (`en`, `en-GB`, `eng`). This is reported for iPhone 16 and 17, in Safari and in Chrome for iOS, for progressive MP4 and HLS; not every phone has it. One user's phone played again after they removed languages from Settings > General > Language & Region. Sources: [a reproduction](https://github.com/t-kigi/video-issue-for-new-iphone-and-iOS27) and [video.js issue #9648](https://github.com/videojs/video.js/issues/9648) (October 2026, open, no WebKit bug linked).
   - Our `<audio>` elements had exactly that: `<track kind="captions" srclang="en">`. That would explain why every MP3 variant failed, and the AAC would fail in the same way.
   - The workaround is `srclang="und"`. According to the reproduction, these also play: another language, no `srclang`, `kind="metadata"`, or a track added after `loadedmetadata`.
   - The reproduction has a live test page, linked from its README, that shows whether a phone has this bug.
   - The success video of [Gay Café 2026](gay-cafe-2026.md) still has a caption track with `srclang={lang}`. On an affected phone, its English version would fail in the same way.
2. An MP3 problem in iOS 27.2. The iOS 27.2 Simulator (runtime 24B8117, iPhone 17 Pro Max, languages `nl-NL` and `en-US`) did not play the Rijndam MP3. The element fired `loadedmetadata`, `canplay` and `playing` without an error, but `currentTime` stayed at 0. This happened with no track, an `en` track, a `und` track, and a track without `srclang`. The AAC played in all four cases, also with `srclang="en"`, so the Simulator does not have the track bug. The symptom differs from the phone's error 4, and the iOS 26.5 Simulator was not tried as a control, so this may be a Simulator problem.
   - The test used muted `play()` without a tap.

Tested on macOS 27.2.1 with the system WebKit (Safari 27.2), in a WKWebView. Every MP3 and AAC variant played, streamed and as a blob: the original, without ID3, without the Xing frame, an MP3 from Apple, and an AAC from `afconvert`. The Rijndam MP3 and AAC also played with an English track, a `und` track, a track without `srclang`, and no track: the Mac does not have the bug. `WKWebpagePreferences.isLockdownModeEnabled` turns Lockdown Mode on for one web view, without the system switch and its restart. In Lockdown Mode, MP3 and AAC still play. Lockdown Mode blocks WAV (without an error event) and Web Audio (no `AudioContext`), and `canPlayType('audio/mpeg; codecs="mp3"')` becomes empty.

These are ruled out:

- The server: Netlify (behind Cloudflare) answers `Range: bytes=0-1` on `/_astro/*.mp3` with `206` and `audio/mpeg`. iOS needs byte ranges for media.
- The file: MP3, 48 kHz, stereo, ID3v2.4 with a small cover image. The Fruity Xmas song has the same format. The audio is ordinary ffmpeg (Lavf) output: a Xing frame, then VBR joint-stereo frames, with no junk bytes and no ID3v1 or APE tag.
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
