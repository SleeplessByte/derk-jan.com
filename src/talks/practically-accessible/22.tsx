import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 22: </span>
            <span>A 30-second fix</span>
          </h2>
        </header>

        <ToggleKeyboardFocusIndicator />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/23"
        nextCount={23}
        nextLabel={"a longer fix"}
      />
    </div>
  );
}

function ToggleKeyboardFocusIndicator() {
  return (
    <Toggle id="toggle-sr-aria-keyboard-indicator-code">
      <Toggle.Off>
        <Code language="css" caption="Before">
          {`
a, button, input[type!="hidden"] {
  outline: none;
}
`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="css" caption="After">
          {`
a, button, input[type!="hidden"] {
  /* please just don't */
}`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
