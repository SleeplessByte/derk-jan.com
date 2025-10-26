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
        <p>Contrived example?</p>

        {/**
         * 05:28 December 15th 2022
         *
         * status.io [inaccessible buttons, colours, tooltips, status, icons]
         * status.digitalocean.com [inaccessible status icons, colours, alt]
         * status.dropbox.com [inaccessible tooltips, alt]
         * www.intercomstatus.com [inaccessible tooltips, graphs, alt, colours]
         * www.githubstatus.com [inaccessible tooltips, collapsibles]
         * status.slack.com [inaccessible calendar]
         * api.twitterstat.us [inaccessible tooltips]
         * health.aws.amazon.com [inaccessible calendar button]
         * www.apple.com [inaccessible tooltips]
         * status.atlassian.com [inaccessible alt headings]
         * status.cloud.google.com [inacessible status icons]
         * status.stripe.com [inacessible history, tooltips]
         */}
      </div>

      <SlideFooter
        next="/talks/practically-accessible/39"
        nextCount={39}
        nextLabel={"the law"}
      />
    </div>
  );
}
