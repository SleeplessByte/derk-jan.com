import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div id="my-work">
      <header>
        <h2 className="font-semibold">
          <span className="sr-only">Slide 12: the work done</span>
        </h2>
      </header>

      <div className="relative top-[-10%]">
        <ul className="list-disc list-inside">
          <li>Landmarks</li>
          <li>Headings</li>
          <li>Skip link</li>
          <li>
            Labels for visual cues (
            <small>
              using <code>.sr-only</code> and <code>alt</code>
            </small>
            )
          </li>
          <li>
            Hiding irrelevant content (
            <small>
              using <code>aria-hidden</code>
            </small>
            )
          </li>
          <li>
            <code>aria-label</code>
          </li>
          <li>
            <code>aria-current</code>
          </li>
        </ul>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/13"
        nextCount={13}
        nextLabel={"important note"}
      />
    </div>
  );
}
