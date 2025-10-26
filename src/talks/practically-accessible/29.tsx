import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 29: </span>
            <span>How do I know what I am doing is right?</span>
          </h2>
        </header>

        <ul className="list-disc list-inside" style={{ paddingLeft: 0 }}>
          <li>Test with real users (manual)</li>
          <li>Automated tests</li>
          <li>Developer tools</li>
          <li>Follow WCAG: Web Content Accessibility Guidelines</li>
        </ul>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/30"
        nextCount={30}
        nextLabel={"this is not the talk"}
      />
    </div>
  );
}
