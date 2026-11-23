// Satori draws this to an image, so it takes inline styles only, and every
// element with more than one child needs display: flex.

interface Props {
  /** The square cover, as a data URL. */
  cover: string;
  title: string;
  /** The sticker's colours, from the song's theme. */
  colors: { sticker: string; text: string };
  size: number;
}

/**
 * Draw the link preview of a song: its cover, with its title on a sticker.
 *
 * @param props the cover, the title, the sticker's colours and the size of the
 *   square
 * @returns the preview, for satori to draw
 */
export default function SongPreview({ cover, title, colors, size }: Props) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <img src={cover} alt="" width={size} height={size} />
      <div
        style={{
          position: "absolute",
          left: 72,
          bottom: 88,
          padding: "14px 44px 20px",
          borderRadius: 999,
          backgroundColor: colors.sticker,
          color: colors.text,
          fontFamily: "Alan Sans",
          fontWeight: 600,
          fontSize: 76,
          transform: "rotate(-4deg)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
        }}
      >
        {title}
      </div>
    </div>
  );
}
