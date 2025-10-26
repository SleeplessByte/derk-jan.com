import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 38:</span>
            <span>I need more convincing</span>
          </h2>
        </header>
        <p>
          <a
            href="https://ec.europa.eu/social/main.jsp?catId=1202"
            target="_blank"
            data-astro-prefetch
          >
            2025: European Accessibility Act
          </a>
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/40"
        nextCount={40}
        nextLabel={"losing in court"}
      />
    </div>
  );
}
