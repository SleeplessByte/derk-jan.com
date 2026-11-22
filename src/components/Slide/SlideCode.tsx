import { useEffect, useId, useRef, useState } from "react";

import { codeToHtml } from "shiki";

function overflows(pre: HTMLPreElement) {
  return (
    pre.scrollHeight > pre.clientHeight || pre.scrollWidth > pre.clientWidth
  );
}

export function Code({
  language,
  children,
  caption,
}: {
  language: string;
  children: string;
  caption: string;
}) {
  const captionId = useId();
  const preRef = useRef<HTMLPreElement | null>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  const [code, setCode] = useState("");

  useEffect(() => {
    /*
    return hljs.highlight(children.trim(), {
      language: language,
    }).value;*/

    let isMounted = true;

    new Promise<string>(async (resolve) => {
      const html = await codeToHtml(children.trim(), {
        lang: language,
        theme: "github-dark",
        // The outer <pre> scrolls, so only that one may need focus.
        tabindex: false,
      });

      resolve(html);
    }).then((html) => {
      if (isMounted) {
        setCode(html);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [children, language]);

  useEffect(() => {
    if (!preRef.current) {
      return;
    }

    let raf: undefined | number;

    function resized() {
      raf = undefined;

      if (preRef.current) {
        setHasOverflow(overflows(preRef.current));
      }
    }

    function onResize() {
      if (raf) {
        return;
      }

      raf = requestAnimationFrame(resized);
    }

    setHasOverflow(overflows(preRef.current));
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
    // The highlighted code arrives after the first render, so measure again then.
  }, [code]);

  return (
    <figure className="max-w-full w-auto max-h-full prose-2xl">
      <figcaption
        id={captionId}
        className="font-semibold"
        style={{ marginTop: 0, marginBottom: "-2rem" }}
      >
        {caption}
      </figcaption>
      {/* Code that scrolls must be reachable by keyboard, and not every browser
          makes a scroll container focusable by itself. The region names the
          focus stop. */}
      <pre
        className="border dark:border-0 bg-zinc-900 text-zinc-50 dark:bg-black/30 shadow-sm leading-6 sm:leading-6 md:leading-7 overflow-auto max-w-full max-h-[80%]"
        tabIndex={hasOverflow ? 0 : undefined}
        role={hasOverflow ? "region" : undefined}
        aria-labelledby={hasOverflow ? captionId : undefined}
        ref={preRef}
      >
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </pre>
    </figure>
  );
}
