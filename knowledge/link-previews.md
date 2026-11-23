# Link previews

- [`LinkPreview.astro`](../src/components/LinkPreview.astro) writes the Open Graph and Twitter Card tags.
  - A wide `og:image` (1200×630) is for the apps that show a large preview: Facebook, LinkedIn, WhatsApp, iMessage.
  - The optional `thumbnail` is a square `twitter:image` with a `summary` card, which X and Discord show small, next to the text. Without one, a square image gives `summary` and a wide one `summary_large_image`.
- Slack shows the image of an ordinary page as a square thumbnail, cropped from the middle, even with `summary_large_image` and a 1200×630 image (seen with a recipe, November 2026). The site does not optimise for Slack: only the Gay Café's preview happens to fit.
- Slack caches previews. To see a change, share the link with a new query string, such as `?v=2`.
- The images are routes next to their pages: the recipe card ([Recipes](recipes.md#the-preview-card)), the Gay Café's `preview.jpg.ts` ([Gay Café 2026](gay-cafe-2026.md)), and the song's `rijndam-racers.jpg.ts`, which puts the title on a sticker in the theme's green.
- A route reads its files with paths from the project root, because Astro bundles the route into another folder.

## Fonts in satori

Satori ignores the weight axis of a variable font and draws its default instance: Light for Alan Sans. For heavier text, `src/assets/fonts/` has static instances (Medium, SemiBold), registered at their weight.

Windows Python has no fonttools, so make an instance in a Docker container with Python: `pip install fonttools`, then `fonttools varLib.instancer AlanSans-VariableFont_wght.ttf wght=600 --static --update-name-table -o AlanSans-SemiBold.ttf`. In Git Bash, set `MSYS_NO_PATHCONV=1`, or it rewrites the container paths of `-v`.
