import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 40:</span>
            <span>I need more convincing</span>
          </h2>
        </header>
        <p>
          <a
            href="https://arstechnica.com/tech-policy/2019/10/accessibility-the-future-and-why-dominos-matters/"
            target="_blank"
            data-astro-prefetch
          >
            ADA precedent: You'll likely lose in court
          </a>
        </p>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/41"
        nextCount={41}
        nextLabel={"one thing to remember"}
      />
    </div>
  );
}
