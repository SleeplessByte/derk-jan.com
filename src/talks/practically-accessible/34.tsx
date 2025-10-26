import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 34: More guides</span>
          </h2>
        </header>

        <p>
          Follow the{" "}
          <a
            href="https://www.w3.org/WAI/ARIA/apg/"
            target="_blank"
            data-astro-prefetch
          >
            ARIA Authoring Practices Guide (APG)
          </a>
        </p>

        <ul className="list-disc list-inside" style={{ paddingLeft: 0 }}>
          <li>Design Patterns and Examples</li>
          <li>Use ARIA Landmarks</li>
          <li>Providing Accessible Names and Descriptions</li>
          <li>And So Much More...</li>
        </ul>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/35"
        nextCount={35}
        nextLabel={"guidelines"}
      />
    </div>
  );
}
