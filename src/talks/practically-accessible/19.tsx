import { Code } from "../../components/Slide/SlideCode";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Toggle } from "../../components/Toggle";

export default function Page() {
  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 19: </span>
            <span>
              What is <code>current</code>?
            </span>
          </h2>
        </header>

        <ToggleAriaCurrent />
      </div>

      <SlideFooter
        next="/talks/practically-accessible/20"
        nextCount={20}
        nextLabel={"results"}
      />
    </div>
  );
}

function ToggleAriaCurrent() {
  return (
    <Toggle id="toggle-sr-aria-current-code">
      <Toggle.Off>
        <Code language="html" caption="Before">
          {`
<a
  href="#content"

>
  Status
</a>
`}
        </Code>
      </Toggle.Off>
      <Toggle.On>
        <Code language="html" caption="After">
          {`
<a
  href="#content"
  aria-current="page"
>
  Status
</a>`}
        </Code>
      </Toggle.On>
    </Toggle>
  );
}
