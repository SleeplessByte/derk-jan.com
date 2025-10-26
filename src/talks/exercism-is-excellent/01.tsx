import { useEffect, useRef } from "react";

import { AnimatePresence, motion } from "motion/react";
import headlineExercise from "./news-exercise.png";
import headlineExposure from "./news-exposure.png";
import headlineInterference from "./news-interference.png";
import headlineLifetime from "./news-lifetime.png";
import headlinePractice from "./news-practice.png";
import { SlideFooter } from "../../components/Slide/SlideFooter";
import { Image } from "astro:assets";

const HEADLINES = [
  {
    src: headlineExercise,
    alt: "Headline: exercise is good for you",
    url: null,
    caption: "",
    width: 2360,
    height: 1640,
    blur: { top: "2%", bottom: "58%" },
  },
  {
    src: headlinePractice,
    alt: "Headline: Practice makes perfect",
    url: null,
    caption: "",
    width: 2360,
    height: 1640,
    blur: { top: "16%", bottom: "50%" },
  },
  {
    src: headlineLifetime,
    alt: "Headline: Learning a foreign language lasts forever",
    url: null,
    caption: "",
    width: 2360,
    height: 1640,
    blur: { top: "20%", bottom: "58%" },
  },
  {
    src: headlineExposure,
    alt: "Headline: Expose to multiple languages makes it easier to learn one",
    url: null,
    caption: "",
    width: 2360,
    height: 1640,

    blur: { top: "51%", bottom: "24%" },
  },
  {
    src: headlineInterference,
    alt: "Headline: Why is it difficult for developers to learn another programming language?",
    url: null,
    caption: "",
    width: 2360,
    height: 1640,

    blur: { top: "23%", bottom: "60%" },
  },
];

const author = null;

const HEADLINE_INTERVAL = 12 * 1000;
const THIS_SLIDE = "/talks/exercism-is-excellent/01/{{index}}";
const NEXT_SLIDE = "/talks/exercism-is-excellent/02";

function getIndexFromParams(params: URLSearchParams) {
  return Math.max(
    0,
    Math.min(HEADLINES.length - 1, Number(params.get("index") || "0")),
  );
}

function nextSlide(currentIndex: number) {
  window.location.href = THIS_SLIDE.replace(
    "{{index}}",
    String(currentIndex + 1),
  );
}

export default function Page({ currentUrl }: { currentUrl: URL }) {
  const params = new URLSearchParams(currentUrl.search);
  const index = getIndexFromParams(params);
  const headline = HEADLINES[index];
  const progressBar = useRef<HTMLDivElement>(null);
  const isLastRef = useRef(false);
  isLastRef.current = index + 1 === HEADLINES.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLastRef.current) {
        window.location.href = NEXT_SLIDE;
      } else {
        nextSlide(index);
      }
    }, HEADLINE_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isLastRef, index]);

  useEffect(() => {
    const elem = progressBar.current;

    if (!elem) {
      return;
    }

    elem.style.transitionDuration = "0ms";
    elem.style.width = "0%";
    elem.getBoundingClientRect();

    let timer = requestAnimationFrame(() => {
      elem.style.transitionDuration = `${HEADLINE_INTERVAL}ms`;
      elem.getBoundingClientRect();

      timer = requestAnimationFrame(() => {
        elem.style.width = "100%";
        elem.getBoundingClientRect();
      });
    });

    return () => {
      cancelAnimationFrame(timer);
    };
  }, [headline]);

  return (
    <section className={`slide --image`}>
      <figure className="relative">
        <blockquote cite={headline.url || undefined}>
          <img
            src={headline.src.src}
            width={headline.src.width}
            height={headline.src.height}
            alt={headline.alt}
            className={`${"object-cover"}`}
            loading="eager"
          />

          <div
            className="bg-white/70 absolute top-0 left-0 right-0"
            style={{ height: headline.blur.top }}
          ></div>

          <div
            className="bg-white/70 absolute bottom-0 left-0 right-0"
            style={{ height: headline.blur.bottom }}
          ></div>
        </blockquote>
        <figcaption className="">
          <span className="">
            {headline.caption || "Exercise is important"}
            {author ? (
              <span>
                By <cite>{author}</cite>.
              </span>
            ) : null}
          </span>
        </figcaption>

        <div
          ref={progressBar}
          className={"absolute bottom-0 h-1 bg-yellow-600"}
          style={{
            transitionProperty: "width",
            transitionDuration: "0ms",
            transitionTimingFunction: "ease-in-out",
          }}
        ></div>
      </figure>

      <SlideFooter next={NEXT_SLIDE} nextCount={2} nextLabel={"introduction"} />
    </section>
  );
}
