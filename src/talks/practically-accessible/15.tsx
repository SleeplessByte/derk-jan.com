import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 15: </span>
            <span>Headings</span>
          </h2>
        </header>

        {/**
         * Screenreaders allow you to navigate using headings.
         *
         * It is important that the heading hierarchy is valid. If you were to
         * generate a table of contents, it should look correct. And in fact,
         * most screenreaders can do exactly that.
         */}

        <ToggleHeadings />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/16"
        nextCount={16}
        nextLabel={"using screen-reader only content"}
      />
    </div>
  );
}

function ToggleHeadings() {
  return (
    <Toggle id="toggle-headings-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<h3>
  Welcome to A11y.lowlands' status page
</h3>`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<h1> <!-- first heading of the page -->
  Welcome to A11y.lowlands' status page
</h1>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
