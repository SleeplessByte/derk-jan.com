import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Practically Accessible: Talk, on Code in Bits and Pieces",
});

export default function Page() {
  return (
    <>
      <h2 className="sr-only">Front page and slide of the talk</h2>
      <section className="slide">
        <header className="-mt-12">
          <h3 className="font-semibold text-center" id="title-slide-1">
            Practically Accessible
          </h3>
          <p className="text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-7 sm:leading-7 md:leading-8">
            Prefer <em className="not-italic font-semibold">reduced motion</em>{" "}
            or a <em className="not-italic font-semibold">light background</em>?
            Go to <a href="https://talks.derk-jan.com">talks.derk-jan.com</a> to
            follow along on your device.
          </p>
        </header>

        <div className="text-center max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-7 sm:leading-7 md:leading-8 space-y-4">
          <p>
            Looking for the{" "}
            <Link to="/talks/practically-accessible-amsrb">
              Amsterdam.rb, The Amsterdam Ruby meetup group version
            </Link>
            ?
          </p>
        </div>

        <footer className="absolute left-0 bottom-0 w-full flex items-center">
          <Link
            to="/talks/practically-accessible/01"
            className="mx-auto prose-lg p-4 transition rounded-md focus:outline-none focus:ring-2 focus:ring-current mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 motion-safe:animate-bounce relative top-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Goto slide 1: introduction</span>
          </Link>
        </footer>
      </section>
    </>
  );
}
