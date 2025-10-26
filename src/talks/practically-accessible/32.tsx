import { SlideFooter } from "../../components/Slide/SlideFooter";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 32: Developer tools</span>
          </h2>
        </header>

        <p>
          Use a special browser such as{" "}
          <a href="https://polypane.app/" target="_blank" data-astro-prefetch>
            Polypane
          </a>
        </p>

        <figure>
          <img
            src="https://polypane.app/blogs/a11y/image12.gif"
            alt="CSS color contrast debug tool editing colors"
          />
          <figcaption>
            Polypane has at least 80 built-in tools and checks
          </figcaption>
        </figure>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/33"
        nextCount={33}
        nextLabel={"guides"}
      />
    </div>
  );
}
