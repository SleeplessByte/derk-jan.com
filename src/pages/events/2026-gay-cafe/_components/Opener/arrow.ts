type Point = readonly [number, number];

interface ArrowOptions {
  dashes?: number;
  /** Share of each dash slot that is ink; the rest is the gap. */
  ink?: number;
  /** Length of each side of the arrowhead. */
  head?: number;
}

/**
 * Split a quadratic Bézier curve into separate dashes, with an arrowhead.
 *
 * A dashed stroke cannot also be drawn in with `stroke-dashoffset`, but
 * separate dashes can, one after the other.
 *
 * @param start where the curve starts
 * @param control the control point of the curve
 * @param tip where the curve and the arrowhead end
 * @param options the number of dashes, their share of ink, and the size of the head
 * @returns the path of each dash, and the path of the arrowhead
 */
export function dashedArrow(
  start: Point,
  control: Point,
  tip: Point,
  { dashes = 7, ink = 0.62, head = 12 }: ArrowOptions = {},
) {
  const at = (t: number): Point => [
    (1 - t) ** 2 * start[0] + 2 * (1 - t) * t * control[0] + t ** 2 * tip[0],
    (1 - t) ** 2 * start[1] + 2 * (1 - t) * t * control[1] + t ** 2 * tip[1],
  ];

  /**
   * Find the control point of the part of the curve between t0 and t1.
   *
   * @param t0 where the part starts, from 0 to 1
   * @param t1 where the part ends, from 0 to 1
   * @returns the control point of that part
   */
  const controlBetween = (t0: number, t1: number): Point => {
    const a = (1 - t0) * (1 - t1);
    const b = (1 - t0) * t1 + t0 * (1 - t1);
    const c = t0 * t1;
    return [
      a * start[0] + b * control[0] + c * tip[0],
      a * start[1] + b * control[1] + c * tip[1],
    ];
  };

  // The last dash ends on the tip and the arrowhead connects to it.
  const strokes = Array.from({ length: dashes }, (_, index) => {
    const t0 = (index + 1 - ink) / dashes;
    const t1 = (index + 1) / dashes;
    return `M${format(at(t0))}Q${format(controlBetween(t0, t1))} ${format(at(t1))}`;
  });

  const angle = Math.atan2(tip[1] - control[1], tip[0] - control[0]);
  const wing = (spread: number): Point => [
    tip[0] - head * Math.cos(angle + spread),
    tip[1] - head * Math.sin(angle + spread),
  ];

  return {
    dashes: strokes,
    head: `M${format(wing(0.5))}L${format(tip)}L${format(wing(-0.5))}`,
  };
}

function format([x, y]: Point) {
  return `${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}`;
}
