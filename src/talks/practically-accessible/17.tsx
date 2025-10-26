import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 17: </span>
            <span>Screen Reader-hidden content</span>
          </h2>
        </header>

        <ToggleAriaHidden />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/18"
        nextCount={18}
        nextLabel={"labelling"}
      />
    </div>
  );
}

function ToggleAriaHidden() {
  return (
    <Toggle id="toggle-sr-aria-hidden-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<!-- "Contact"                             -->
Contact &rarr;`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<!-- "Contact"                             -->
Contact <span aria-hidden="true">&rarr;</span>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
