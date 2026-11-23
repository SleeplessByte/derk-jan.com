// Satori draws this to an image, so it takes inline styles only, and every
// element with more than one child needs display: flex.

const COLORS = {
  ground: "#252A34",
  title: "#fafafa",
  details: "#d4d4d8",
  accent: "#ff8904",
};

interface Props {
  label: string;
  title: string;
  details: string;
  /** A data URL. */
  graphic: string;
}

/**
 * Draw the link preview of a recipe, at 1200×630.
 *
 * @param props the label, the title, the details and the graphic of the recipe
 * @returns the card, for satori to draw
 */
export default function PreviewCard({ label, title, details, graphic }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 40,
        // Satori adds the padding to the size otherwise.
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        padding: "64px 56px 64px 80px",
        backgroundColor: COLORS.ground,
        fontFamily: "Alan Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minWidth: 0,
          gap: 28,
        }}
      >
        <div style={{ fontSize: 32, color: COLORS.accent }}>{label}</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            color: COLORS.title,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 36, color: COLORS.details }}>{details}</div>
      </div>
      <img
        src={graphic}
        alt=""
        width={400}
        height={400}
        style={{ flexShrink: 0 }}
      />
    </div>
  );
}
