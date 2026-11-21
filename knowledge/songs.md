# Songs

Song pages with a karaoke player live in `src/pages/prototypes/songs/`, for example `/prototypes/songs/rijndam-racers`.

- They are shared by link only: each page has `<meta name="robots" content="noindex">`, and `astro.config.mjs` leaves `/prototypes/` out of the sitemap.
- Each page has a link preview (Open Graph) with a square crop of the cover, made with `getImage`.

## Components

- `src/components/Lyrics/` is shared with the Gay Café invitation ([Gay Café 2026](gay-cafe-2026.md)).
  - `Overlay.astro` shows the current line over the cover or video while the song plays. It is `aria-hidden`, because it is only a visual copy.
    - `karaoke.ts` changes the row 0.15 s early, so the eye is there when the line starts, but lights up each word exactly at its time. Earlier, words lit up 0.15 s early too, and the user found them too early.
  - `Transcript.astro` is the text alternative (WCAG 1.2.1): a `<details>` whose lines become buttons that play the song from that line.
  - Both find the audio by `data-target="song"`, so a page has one song.
  - The page sets `--lyrics-accent`, `--lyrics-ring` and `--lyrics-scrim` on an ancestor. The components define no colours of their own, so a song page can follow its own theme. Rijndam Racers sets them, with its background `--song-ground`, in one global style block on the body (`.song-page.--rijndam-racers`).
  - Keep the scrim at a lightness of about 17%: the dim rows of the overlay then keep 4.5:1, even over a white photo.
  - The `.vtt` file is the `<track kind="captions">` of the audio. Browsers do not show it for audio, and load it only when the track is switched on, but it satisfies the linter's `media-has-caption` rule truthfully.
  - The `Lyrics` type in `types.ts` matches the type that TypeScript infers from the JSON, so a page passes the JSON import without a cast.
- `prototypes/songs/_components/CoverPlayer/` makes the cover the play button.
  - Without JavaScript, the audio keeps its native controls. The script removes `controls` and shows the button.
  - There is no visible pause button: while the song plays, a click on the cover pauses it. The button's name is always the action it performs ("Play", "Pause", "Play again"); the CSS shows one label per state.
  - The global stylesheet already has a `.toggle` class, so the button is called `.control`.

## Making the lyrics

Each song has `<song>.lyrics.json` and `<song>.vtt` next to its MP3 in `src/assets/audio/`. The scripts are in [`src/tools/lyrics/`](../src/tools/lyrics/). Work in a scratch folder.

1. Get the written lyrics. MP3s from Suno have them in the ID3 tag:
   `ffprobe -v error -show_entries format_tags=lyrics-eng -of default=nw=1 <song>.mp3`.
2. Transcribe the song with Whisper `large-v3` on the GPU. Use the existing `don-whisper` Docker image (faster-whisper, with `HF_HOME=/models`). The model is in the Hugging Face cache on the Windows side. Run Docker from WSL with a compose file in the scratch folder, so that the container belongs to the project `derk-jan-com`:

   ```yaml
   name: derk-jan-com
   services:
     whisper:
       image: don-whisper
       volumes:
         - /mnt/c/Users/Derk-Jan/.cache/huggingface:/models
         - <scratch folder>:/work
         - <repo>/src/tools/lyrics:/tools:ro
         - <repo>/src/assets/audio:/audio:ro
       deploy:
         resources:
           reservations:
             devices: [{ driver: nvidia, count: all, capabilities: [gpu] }]
   ```

   `docker compose run --rm whisper python3 /tools/transcribe.py /audio/<song>.mp3 /work/song.json large-v3 "<prompt>"`.
   The model loads in 10–20 s and transcribes a three-minute song in about 5 s.

3. Whisper tends to miss the first sung line or verse. Cut that part out (`ffmpeg -ss <from> -to <to> -i <song>.mp3 intro.wav`) and transcribe the clip with its written lines as the prompt.
   - Faster-whisper keeps only about 223 tokens of the prompt, so a whole song does not fit.
   - The result depends on the exact prompt. A later run of the Fruity Xmas intro, with a slightly different prompt, missed its first two lines.
4. Compare what Whisper heard with the written lines.
   - Singers repeat lines that are written once. The lyrics follow what is sung.
   - A word with a probability near 0 is often an artefact, such as a second "History" in the Rijndam Racers choruses.
5. Each song has a build script, `build-<song>.mjs <intro.json> <song.json> <lyrics.json>`. It holds the written lines, each with the time range `[from, to)` of the heard words that belong to it. `align.mjs` spreads the written words over those heard words. Correct the lines and ranges in the script, then format the JSON with Prettier.
   - Words are split on spaces, and the karaoke times each word. Two words joined by punctuation without a space light up as one.
   - The lyrics use no em dashes (the user's choice): use a comma, a hyphen, or nothing.
   - Whisper gives the first word of a line the silence before it: on average, that word lasted 0.9 s, the other words 0.4 s. So `align.mjs` starts the first word at most 0.45 s before the second word. The line keeps Whisper's start, so the overlay shows it in time to read.
   - The Whisper output of Fruity Xmas was lost, so this rule was applied afterwards to its JSON, with the same function (`delayFirstWord`).
6. `node src/tools/lyrics/build-vtt.mjs <song>.lyrics.json <song>.vtt "<title>"`.
7. Clean up with `docker compose -p derk-jan-com down`. Keep the image and the model cache.

| Song           | Script                     | First run (whole song)                           | Clip                                                                                  |
| -------------- | -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Fruity Xmas    | `build-fruity-xmas.mjs`    | no prompt; the script uses segments from 33 s    | 8–32 s, prompt: the first verse                                                       |
| Rijndam Racers | `build-rijndam-racers.mjs` | prompt: the intro and verse 1; heard from 21.8 s | 0–22 s, prompt: "Rijndam Racers, here we go! Hands on the crank, whilst laying down." |
