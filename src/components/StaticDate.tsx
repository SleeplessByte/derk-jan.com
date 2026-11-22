import { useMemo } from "react";

export default function StaticDate({
  date,
  prefix,
}: {
  date: string | Date | number;
  /** Read before the date by screen readers only; sighted readers get it from the layout. */
  prefix: string;
}) {
  const time = useMemo(() => {
    if (typeof date === "string" || typeof date === "number") {
      return new Date(date);
    }

    return date;
  }, [date]);

  return (
    <time
      dateTime={time.toISOString().split("T").shift()}
      suppressHydrationWarning
    >
      <span className="sr-only">{prefix} </span>
      {time.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
