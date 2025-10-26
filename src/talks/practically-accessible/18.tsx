import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 18: </span>
            <span>
              <code>alt, aria-label(ledby)</code>
            </span>
          </h2>
        </header>

        <ToggleAriaLabel />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/19"
        nextCount={19}
        nextLabel={"current indicator"}
      />
    </div>
  );
}

function ToggleAriaLabel() {
  return (
    <Toggle id="toggle-sr-aria-label-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<img
  src={logoSrc}

/>`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<img
  src={logoSrc}
  alt="A11y.lowlands"
/>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
