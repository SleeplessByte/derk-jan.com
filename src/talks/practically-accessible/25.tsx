import { useEffect, useReducer } from "react";
import { SlideFooter } from "../../components/Slide/SlideFooter";

const FILTERS = {
  none: undefined,
  protanopia: "url(#protanopiaColourMatrix)",
  protanomaly: "url(#protanomalyColourMatrix)",
  deuteranopia: "url(#deuteranopiaColourMatrix)",
  deutranomaly: "url(#deutranomalyColourMatrix)",
  tritanopia: "url(#tritanopiaColourMatrix)",
  tritanomaly: "url(#tritanomalyColourMatrix)",
  achromatopsia: "url(#achromatopsiaColourMatrix)",
  achromatomaly: "url(#achromatomalyColourMatrix)",
};

export default function Page() {
  const [currentFilter, nextFilter] = useReducer(
    (prev) => (prev + 1) % Object.keys(FILTERS).length,
    0,
  );

  useEffect(() => {
    const interval = setInterval(nextFilter, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const filterName = Object.keys(FILTERS)[currentFilter];

  return (
    <div>
      <div className="relative top-[-10%]">
        <header>
          <h2 className="font-semibold">
            <span className="sr-only">Slide 25: colour deficiency</span>
          </h2>
        </header>
        <svg height="0">
          <filter id="protanopiaColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".56667 .43333 0      0 0
            .55833 .44167 0      0 0
            0      .24167 .75833 0 0
            0      0      0      1 0"
            ></feColorMatrix>
          </filter>

          <filter id="protanomalyColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".81667 .18333 0    0 0
            .33333 .66667 0    0 0
            0      .125   .875 0 0
            0      0      0    1 0"
            ></feColorMatrix>
          </filter>

          <filter id="deuteranopiaColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".625 .375 0  0 0
            .7   .3   0  0 0
            0    .3   .7 0 0
            0    0    0  1 0"
            ></feColorMatrix>
          </filter>

          <filter id="deutranomalyColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".8     .2     0      0 0
            .25833 .74167 0      0 0
            0      .14167 .85833 0 0
            0      0      0      1 0"
            ></feColorMatrix>
          </filter>

          <filter id="tritanopiaColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".95 .5     0      0 0
            0   .43333 .56667 0 0
            0   .475   .525   0 0
            0   0      0      1 0"
            ></feColorMatrix>
          </filter>

          <filter id="tritanomalyColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".96667 .3333  0      0 0
            0      .73333 .26667 0 0
            0      .18333 .81667 0 0
            0      0      0      1 0"
            ></feColorMatrix>
          </filter>

          <filter id="achromatopsiaColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".299 .587 .114 0 0
            .299 .587 .114 0 0
            .299 .587 .114 0 0
            0    0    0    1 0"
            ></feColorMatrix>
          </filter>

          <filter id="achromatomalyColourMatrix">
            <feColorMatrix
              type="matrix"
              values=".618 .32  .62  0 0
            .163 .775 .62  0 0
            .163 .320 .516 0 0
            0    0    0    1 0"
            ></feColorMatrix>
          </filter>
        </svg>

        <figure>
          <div className="flex flex-row gap-6 justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new"
              viewBox="0 0 289.73199 289.62201"
              style={{
                width: 289,
                height: 289,
                maxWidth: "40vw",
                maxHeight: "40vh",
              }}
            >
              <defs>
                <linearGradient
                  id="B"
                  x1="38.737301"
                  x2="39.487301"
                  y1="46.373001"
                  y2="38.790001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#333" />
                  <stop offset=".431" />
                  <stop offset="1" stopColor="#2e2e2e" />
                </linearGradient>
                <linearGradient
                  id="A"
                  x1="-153.1255"
                  x2="-154.15421"
                  y1="97.627899"
                  y2="104.4332"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#969696" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="z"
                  x1="-158.4185"
                  x2="-126.5454"
                  y1="107.8965"
                  y2="107.8965"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#525252" />
                  <stop offset=".1856" stopColor="#333" />
                  <stop offset=".354" stopColor="#aeaeae" />
                  <stop offset=".4199" stopColor="#adadad" />
                  <stop offset=".4276" stopColor="#9d9d9d" />
                  <stop offset=".4433" stopColor="#818181" />
                  <stop offset=".4611" stopColor="#6a6a6a" />
                  <stop offset=".4814" stopColor="#585858" />
                  <stop offset=".506" stopColor="#4c4c4c" />
                  <stop offset=".539" stopColor="#444" />
                  <stop offset=".6166" stopColor="#424242" />
                  <stop offset=".6684" stopColor="#454545" />
                  <stop offset="1" stopColor="#bdbdbd" />
                </linearGradient>
                <linearGradient
                  id="y"
                  x1="-158.8101"
                  x2="-126.4229"
                  y1="107.0898"
                  y2="107.0898"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#696969" />
                  <stop offset=".3702" stopColor="#2e2e2e" />
                  <stop offset=".4554" stopColor="#424242" />
                  <stop offset=".6014" stopColor="#303030" />
                  <stop offset=".6947" stopColor="#4a4a4a" />
                  <stop offset="1" stopColor="#666" />
                </linearGradient>
                <linearGradient
                  id="x"
                  x1="22.5742"
                  x2="111.5455"
                  y1="49.7188"
                  y2="29.204"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".6538" stopColor="#fff" />
                  <stop offset="1" stopColor="#cbccce" />
                </linearGradient>
                <linearGradient
                  id="w"
                  x1="23.471201"
                  x2="27.9561"
                  y1="30.732401"
                  y2="30.732401"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#e2e3e4" />
                  <stop offset=".5055" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                  id="v"
                  x1="21.2129"
                  x2="117.1948"
                  y1="71.326698"
                  y2="51.952599"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ededee" />
                  <stop offset=".4176" stopColor="#fff" />
                  <stop offset=".6264" stopColor="#f8f9f9" />
                  <stop offset="1" stopColor="#bfc0c2" />
                </linearGradient>
                <linearGradient
                  id="u"
                  x1="-176.1851"
                  x2="-52.131699"
                  y1="78.4795"
                  y2="92.223099"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="t"
                  x1="-175.7173"
                  x2="-67.153198"
                  y1="78.449203"
                  y2="90.476799"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="s"
                  x1="-172.3853"
                  x2="-172.3853"
                  y1="78.209"
                  y2="78.209"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="r"
                  x1="-175.14211"
                  x2="-83.541"
                  y1="104.0801"
                  y2="104.0801"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#a0a0a0" />
                  <stop offset=".0769" stopColor="#656767" />
                  <stop offset="1" stopColor="#717375" />
                </linearGradient>
                <linearGradient
                  id="q"
                  x1="-175.4424"
                  x2="-75.6362"
                  y1="83.6045"
                  y2="83.6045"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#555" />
                  <stop offset="1" stopColor="#231f20" />
                </linearGradient>
                <linearGradient
                  id="p"
                  x1="-115.3716"
                  x2="-134.7878"
                  y1="119.1758"
                  y2="24.695299"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="o"
                  x1="-118.4946"
                  x2="-138.85201"
                  y1="124.0039"
                  y2="24.9438"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="n"
                  x1="-127.4014"
                  x2="-146.8837"
                  y1="121.9365"
                  y2="27.1346"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="m"
                  x1="-135.58591"
                  x2="-155.006"
                  y1="123.3525"
                  y2="28.8524"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="l"
                  x1="-121.1382"
                  x2="-140.54491"
                  y1="120.3223"
                  y2="25.888"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="k"
                  x1="-130.1348"
                  x2="-130.14281"
                  y1="35.625"
                  y2="35.585701"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="j"
                  x1="-152.6201"
                  x2="-171.9462"
                  y1="126.8398"
                  y2="32.797901"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="i"
                  x1="32.519001"
                  x2="37.2481"
                  y1="33.077099"
                  y2="92.496101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".2198" stopColor="#989a9c" />
                  <stop offset=".2527" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                  id="h"
                  x1="-115.3369"
                  x2="-134.85719"
                  y1="119.6328"
                  y2="24.6462"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="54.653301"
                  x2="79.683601"
                  y1="25.2764"
                  y2="106.3903"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".7473" stopColor="#f9f9f9" />
                  <stop offset="1" stopColor="#d5d7d8" />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="-117.166"
                  x2="-87.569702"
                  y1="122.1328"
                  y2="31.998501"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="70.421898"
                  x2="119.5471"
                  y1="26.876499"
                  y2="87.626701"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#eff0f0" />
                  <stop offset=".5914" stopColor="#f0f1f2" />
                  <stop offset=".599" stopColor="#787878" />
                  <stop offset=".6456" stopColor="#eeeff0" />
                  <stop offset="1" stopColor="#d8d9db" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="-123.5898"
                  x2="-94.069099"
                  y1="119.8076"
                  y2="29.9035"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".0094" stopColor="#fcfcfc" />
                  <stop offset=".0655" stopColor="#eee" />
                  <stop offset=".1342" stopColor="#e5e5e5" />
                  <stop offset=".2515" stopColor="#e3e3e3" />
                  <stop offset=".3357" stopColor="#8a8a8a" />
                  <stop offset=".4422" stopColor="#b8b8b8" />
                  <stop offset="1" stopColor="#3b3b3b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="54.715801"
                  x2="83.798798"
                  y1="65.136703"
                  y2="65.136703"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#231f20" />
                  <stop offset="1" stopColor="#474747" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="66.232399"
                  x2="112.7331"
                  y1="24.481001"
                  y2="97.232101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#8a8a8a" />
                  <stop offset=".5687" stopColor="#606060" />
                  <stop offset=".5914" stopColor="#fff" />
                  <stop offset=".6116" stopColor="#585858" />
                  <stop offset="1" stopColor="#303030" />
                </linearGradient>
                <filter id="E" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="multiply" />
                </filter>
                <filter id="F" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="multiply" />
                </filter>
                <filter id="D" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="lighten" />
                </filter>
                <radialGradient
                  id="C"
                  cx="-138.2334"
                  cy="106.5996"
                  r="72.751701"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopOpacity="0" />
                  <stop offset=".80220002" stopOpacity=".08" />
                  <stop offset="1" stopOpacity=".3882353" />
                </radialGradient>
                <radialGradient
                  id="a"
                  cx="-145.4702"
                  cy="87.823196"
                  r="68.686401"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".4835" stopColor="#eaeaeb" />
                  <stop offset=".9451" stopColor="#a9abae" />
                  <stop offset="1" stopColor="#999b9e" />
                </radialGradient>
              </defs>
              <path
                fill="red"
                d="M82.117 209.208c0 2.37-1.921 4.29-4.291 4.29-2.369 0-4.29-1.92-4.29-4.29 0-2.369 1.921-4.289 4.29-4.289 2.37 0 4.291 1.92 4.291 4.289zM80.834 200.49c0 1.67-1.353 3.023-3.021 3.023-1.67 0-3.023-1.354-3.023-3.023s1.354-3.023 3.023-3.023 3.021 1.353 3.021 3.023zM91.118 87.517c0 3.054-2.475 5.527-5.527 5.527s-5.528-2.474-5.528-5.527 2.476-5.526 5.528-5.526c3.052 0 5.527 2.474 5.527 5.526zM80.937 77.568c0 1.867-1.513 3.38-3.378 3.38-1.868 0-3.382-1.513-3.382-3.38 0-1.866 1.514-3.38 3.382-3.38 1.865 0 3.378 1.514 3.378 3.38zM79.864 67.999c0 2.951-2.394 5.343-5.345 5.343-2.951 0-5.344-2.392-5.344-5.343s2.393-5.345 5.344-5.345c2.951 0 5.345 2.394 5.345 5.345zM93.494 205.263c0 2.959-2.398 5.357-5.356 5.357-2.959 0-5.357-2.398-5.357-5.357s2.398-5.357 5.357-5.357c2.958 0 5.356 2.398 5.356 5.357z"
              />
              <path
                fill="#00b800"
                d="M104.131 177.191c0 4.165-3.376 7.541-7.54 7.541-4.165 0-7.541-3.376-7.541-7.541 0-4.164 3.376-7.539 7.541-7.539 4.164 0 7.54 3.375 7.54 7.539z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M89.192 77.141c0 1.901-1.542 3.443-3.443 3.443-1.9 0-3.441-1.542-3.441-3.443 0-1.9 1.541-3.441 3.441-3.441 1.901 0 3.443 1.541 3.443 3.441zM92.67 66.373c0 3.202-2.596 5.797-5.798 5.797s-5.796-2.595-5.796-5.797c0-3.201 2.594-5.797 5.796-5.797 3.202 0 5.798 2.596 5.798 5.797z"
              />
              <path
                fill="#00b800"
                d="M105.832 209.006c0 2.09-1.691 3.78-3.78 3.78-2.087 0-3.779-1.69-3.779-3.78 0-2.087 1.692-3.78 3.779-3.78 2.089 0 3.78 1.693 3.78 3.78zM116.963 201.101c0 3.574-2.896 6.47-6.468 6.47s-6.468-2.896-6.468-6.47c0-3.571 2.896-6.466 6.468-6.466 3.571 0 6.468 2.894 6.468 6.466z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M113.606 164.219c0 2.892-2.346 5.236-5.238 5.236-2.892 0-5.236-2.345-5.236-5.236 0-2.893 2.345-5.238 5.236-5.238 2.892 0 5.238 2.346 5.238 5.238zM103.532 75.817c0 3.618-2.934 6.551-6.551 6.551s-6.549-2.933-6.549-6.551c0-3.618 2.932-6.55 6.549-6.55 3.617 0 6.551 2.932 6.551 6.55zM107.068 60.923c0 3.898-3.16 7.06-7.06 7.06-3.9 0-7.06-3.161-7.06-7.06 0-3.9 3.159-7.062 7.06-7.062 3.9 0 7.06 3.161 7.06 7.062zM98.259 51.222c0 1.115-.904 2.021-2.021 2.021-1.115 0-2.02-.905-2.02-2.021 0-1.116.904-2.02 2.02-2.02 1.117.001 2.021.905 2.021 2.02zM111.818 48.807c0 2.951-2.394 5.345-5.345 5.345-2.953 0-5.346-2.394-5.346-5.345 0-2.953 2.393-5.345 5.346-5.345 2.952.001 5.345 2.392 5.345 5.345z"
              />
              <path
                fill="#00b800"
                d="M119.24 214.768c0 3.351-2.718 6.067-6.069 6.067-3.353 0-6.07-2.717-6.07-6.067 0-3.354 2.718-6.07 6.07-6.07 3.351-.001 6.069 2.716 6.069 6.07z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M122.79 200.534c0 2.301-1.865 4.166-4.166 4.166s-4.167-1.865-4.167-4.166 1.866-4.166 4.167-4.166c2.301 0 4.166 1.865 4.166 4.166zM117.205 186.415c0 2.519-2.04 4.56-4.557 4.56-2.519 0-4.559-2.041-4.559-4.56 0-2.517 2.04-4.558 4.559-4.558 2.517 0 4.557 2.041 4.557 4.558zM117.743 155.423c0 2.12-1.718 3.839-3.838 3.839s-3.84-1.719-3.84-3.839c0-2.119 1.72-3.838 3.84-3.838s3.838 1.718 3.838 3.838zM116.833 71.246c0 3.464-2.807 6.271-6.271 6.271s-6.271-2.808-6.271-6.271 2.807-6.271 6.271-6.271 6.271 2.807 6.271 6.271zM120.229 58.476c0 3.184-2.581 5.764-5.764 5.764-3.185 0-5.766-2.58-5.766-5.764 0-3.183 2.581-5.764 5.766-5.764 3.183.001 5.764 2.582 5.764 5.764z"
              />
              <path
                fill="#00b800"
                d="M135.036 215.369c0 2.771-2.247 5.019-5.021 5.019-2.771 0-5.02-2.247-5.02-5.019 0-2.773 2.248-5.02 5.02-5.02 2.774.001 5.021 2.247 5.021 5.02zM136.394 204.816c0 2.422-1.963 4.385-4.385 4.385-2.422 0-4.384-1.963-4.384-4.385 0-2.424 1.962-4.385 4.384-4.385 2.422 0 4.385 1.962 4.385 4.385z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M126.823 190.956c0 2.576-2.087 4.663-4.663 4.663-2.577 0-4.665-2.087-4.665-4.663 0-2.575 2.088-4.665 4.665-4.665 2.576 0 4.663 2.09 4.663 4.665zM127.598 180.2c0 2.648-2.146 4.794-4.794 4.794-2.648 0-4.794-2.146-4.794-4.794 0-2.646 2.146-4.792 4.794-4.792 2.647 0 4.794 2.145 4.794 4.792zM131.223 66.552c0 3.397-2.753 6.151-6.149 6.151-3.398 0-6.152-2.754-6.152-6.151 0-3.396 2.754-6.151 6.152-6.151 3.396 0 6.149 2.755 6.149 6.151zM126.962 51.344c0 2.213-1.794 4.008-4.007 4.008-2.213 0-4.007-1.795-4.007-4.008s1.794-4.006 4.007-4.006c2.213 0 4.007 1.794 4.007 4.006zM133.409 43.478c0 2.497-2.025 4.522-4.522 4.522-2.499 0-4.524-2.025-4.524-4.522 0-2.498 2.025-4.523 4.524-4.523 2.497 0 4.522 2.025 4.522 4.523zM137.613 211.205c0 1.305-1.058 2.362-2.363 2.362s-2.362-1.058-2.362-2.362 1.058-2.362 2.362-2.362c1.306 0 2.363 1.057 2.363 2.362zM146.124 196.27c0 3.579-2.899 6.479-6.479 6.479-3.578 0-6.479-2.9-6.479-6.479 0-3.58 2.901-6.479 6.479-6.479 3.58 0 6.479 2.899 6.479 6.479zM136.333 173.643c0 2.441-1.979 4.42-4.42 4.42-2.439 0-4.419-1.979-4.419-4.42 0-2.44 1.979-4.419 4.419-4.419 2.442 0 4.42 1.979 4.42 4.419z"
              />
              <path
                fill="#00b800"
                d="M147.053 167.533c0 3.061-2.48 5.542-5.543 5.542-3.06 0-5.541-2.481-5.541-5.542s2.481-5.541 5.541-5.541c3.062 0 5.543 2.481 5.543 5.541zM144.783 156.992c0 2.038-1.652 3.689-3.69 3.689-2.038 0-3.689-1.651-3.689-3.689 0-2.039 1.651-3.691 3.689-3.691 2.038 0 3.69 1.652 3.69 3.691zM140.697 148.31c0 3-2.431 5.43-5.43 5.43-2.999 0-5.43-2.43-5.43-5.43 0-2.999 2.431-5.429 5.43-5.429 2.999 0 5.43 2.43 5.43 5.429z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M139.18 60.37c0 2.322-1.882 4.205-4.205 4.205-2.323 0-4.204-1.883-4.204-4.205 0-2.323 1.881-4.205 4.204-4.205 2.323 0 4.205 1.882 4.205 4.205zM136.795 51.587c0 1.863-1.51 3.373-3.373 3.373-1.863 0-3.374-1.51-3.374-3.373 0-1.863 1.511-3.374 3.374-3.374 1.863 0 3.373 1.51 3.373 3.374zM150.775 214.283c0 2.997-2.431 5.429-5.43 5.429-2.999 0-5.431-2.432-5.431-5.429 0-3.001 2.432-5.43 5.431-5.43s5.43 2.429 5.43 5.43zM142.37 206.754c0 1.456-1.181 2.637-2.638 2.637-1.456 0-2.636-1.181-2.636-2.637 0-1.457 1.18-2.638 2.636-2.638 1.458 0 2.638 1.181 2.638 2.638z"
              />
              <path
                fill="#00b800"
                d="M157.413 153.805c0 3.244-2.628 5.874-5.872 5.874-3.244 0-5.873-2.63-5.873-5.874 0-3.243 2.629-5.872 5.873-5.872s5.872 2.629 5.872 5.872zM151.492 142.598c0 2.748-2.229 4.977-4.977 4.977s-4.977-2.229-4.977-4.977 2.229-4.977 4.977-4.977 4.977 2.229 4.977 4.977z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M153.418 125.92c0 3.985-3.232 7.218-7.218 7.218-3.986 0-7.217-3.232-7.217-7.218 0-3.986 3.23-7.217 7.217-7.217 3.985 0 7.218 3.23 7.218 7.217zM150.693 62.602c0 2.832-2.296 5.127-5.129 5.127-2.832 0-5.128-2.295-5.128-5.127 0-2.833 2.296-5.128 5.128-5.128 2.833 0 5.129 2.295 5.129 5.128zM160.618 49.496c0 4.547-3.688 8.234-8.234 8.234-4.549 0-8.235-3.688-8.235-8.234 0-4.548 3.686-8.234 8.235-8.234 4.546-.001 8.234 3.686 8.234 8.234zM144.092 43.641c0 2.572-2.084 4.658-4.657 4.658s-4.658-2.086-4.658-4.658c0-2.573 2.085-4.658 4.658-4.658 2.573 0 4.657 2.085 4.657 4.658z"
              />
              <path
                fill="#00b800"
                d="M172.673 213.203c0 2.606-2.112 4.719-4.718 4.719s-4.72-2.112-4.72-4.719 2.113-4.72 4.72-4.72c2.606 0 4.718 2.114 4.718 4.72z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M160.253 202.95c0 3.878-3.145 7.022-7.022 7.022-3.88 0-7.023-3.145-7.023-7.022 0-3.877 3.143-7.022 7.023-7.022 3.877-.001 7.022 3.144 7.022 7.022zM160.367 68.053c0 2.678-2.171 4.849-4.848 4.849-2.678 0-4.85-2.171-4.85-4.849 0-2.677 2.172-4.848 4.85-4.848 2.677.001 4.848 2.172 4.848 4.848zM167.472 58.205c0 2.38-1.929 4.309-4.308 4.309-2.38 0-4.31-1.929-4.31-4.309 0-2.379 1.93-4.308 4.31-4.308s4.308 1.929 4.308 4.308zM181.8 193.403c0 4.315-3.498 7.812-7.812 7.812-4.315 0-7.812-3.497-7.812-7.812s3.497-7.812 7.812-7.812c4.314.001 7.812 3.497 7.812 7.812z"
              />
              <path
                fill="#00b800"
                d="M168.326 197.99c0 1.904-1.542 3.448-3.445 3.448-1.904 0-3.446-1.544-3.446-3.448 0-1.902 1.542-3.445 3.446-3.445 1.903 0 3.445 1.543 3.445 3.445z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M177.305 87.56c0 3.173-2.571 5.743-5.744 5.743-3.173 0-5.743-2.57-5.743-5.743 0-3.172 2.57-5.743 5.743-5.743 3.173 0 5.744 2.571 5.744 5.743zM172.287 77.366c0 1.937-1.569 3.505-3.504 3.505-1.936 0-3.505-1.568-3.505-3.505 0-1.935 1.569-3.503 3.505-3.503 1.934 0 3.504 1.568 3.504 3.503zM171.348 68.009c0 2.628-2.131 4.758-4.759 4.758-2.629 0-4.759-2.13-4.759-4.758s2.13-4.759 4.759-4.759c2.628 0 4.759 2.131 4.759 4.759zM176.723 60.471c0 2.089-1.693 3.782-3.781 3.782s-3.781-1.693-3.781-3.782c0-2.088 1.693-3.781 3.781-3.781s3.781 1.694 3.781 3.781z"
              />
              <path
                fill="red"
                d="M189.22 212.328c0 3.389-2.748 6.135-6.137 6.135-3.389 0-6.136-2.746-6.136-6.135s2.747-6.138 6.136-6.138c3.389 0 6.137 2.749 6.137 6.138z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="#00b800"
                d="M176.682 207.933c0 1.238-1.002 2.241-2.239 2.241-1.238 0-2.241-1.003-2.241-2.241 0-1.234 1.003-2.238 2.241-2.238 1.237-.001 2.239 1.003 2.239 2.238z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M183.192 92.088c0 1.555-1.261 2.815-2.814 2.815-1.556 0-2.816-1.261-2.816-2.815 0-1.556 1.261-2.814 2.816-2.814 1.553-.001 2.814 1.258 2.814 2.814zM187.59 77.155c0 3.739-3.031 6.771-6.771 6.771-3.74 0-6.769-3.031-6.769-6.771 0-3.737 3.029-6.769 6.769-6.769s6.771 3.032 6.771 6.769zM180.714 66.63c0 1.552-1.259 2.809-2.811 2.809-1.551 0-2.81-1.257-2.81-2.809 0-1.552 1.259-2.81 2.81-2.81 1.553 0 2.811 1.258 2.811 2.81z"
              />
              <path
                fill="#00b800"
                d="M204.076 214.127c0 3.77-3.055 6.826-6.825 6.826-3.771 0-6.827-3.057-6.827-6.826 0-3.771 3.056-6.827 6.827-6.827 3.77 0 6.825 3.056 6.825 6.827z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M196.842 201.742c0 3.062-2.483 5.545-5.544 5.545-3.062 0-5.544-2.483-5.544-5.545s2.481-5.543 5.544-5.543c3.061 0 5.544 2.481 5.544 5.543z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="#00b800"
                d="M204.775 194.228c0 2.453-1.988 4.439-4.44 4.439-2.452 0-4.441-1.986-4.441-4.439 0-2.454 1.989-4.441 4.441-4.441s4.44 1.986 4.44 4.441z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M209.757 202.714c0 2.861-2.318 5.183-5.181 5.183s-5.181-2.321-5.181-5.183c0-2.862 2.318-5.181 5.181-5.181s5.181 2.319 5.181 5.181zM211.874 191.887c0 2.568-2.081 4.647-4.646 4.647-2.566 0-4.646-2.079-4.646-4.647 0-2.565 2.08-4.645 4.646-4.645 2.565.001 4.646 2.08 4.646 4.645zM220.109 183.01c0 3.054-2.477 5.529-5.532 5.529s-5.53-2.476-5.53-5.529c0-3.055 2.476-5.531 5.53-5.531 3.055 0 5.532 2.477 5.532 5.531zM83.124 194.185c0 1.405-1.14 2.545-2.545 2.545-1.406 0-2.545-1.14-2.545-2.545 0-1.404 1.139-2.545 2.545-2.545 1.405 0 2.545 1.141 2.545 2.545z"
              />
              <path
                fill="#00b800"
                d="M124.478 211.669c0 1.184-.96 2.144-2.145 2.144s-2.145-.96-2.145-2.144c0-1.184.96-2.144 2.145-2.144s2.145.96 2.145 2.144z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M130.066 57.12c0 1.233-1.001 2.234-2.234 2.234s-2.233-1.001-2.233-2.234 1-2.233 2.233-2.233 2.234.999 2.234 2.233zM143.675 54.076c0 1.647-1.336 2.981-2.982 2.981-1.646 0-2.979-1.334-2.979-2.981 0-1.646 1.334-2.98 2.979-2.98 1.646-.001 2.982 1.334 2.982 2.98z"
              />
              <path
                fill="#00b800"
                d="M171.103 204.549c0 1.454-1.179 2.633-2.633 2.633-1.455 0-2.635-1.179-2.635-2.633 0-1.456 1.18-2.635 2.635-2.635 1.454 0 2.633 1.179 2.633 2.635zM202.56 202.136c0 1.188-.964 2.151-2.151 2.151-1.188 0-2.151-.963-2.151-2.151 0-1.189.963-2.151 2.151-2.151 1.187-.001 2.151.961 2.151 2.151z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M21.91 143.383c0 3.29-2.667 5.956-5.956 5.956-3.288 0-5.954-2.666-5.954-5.956 0-3.289 2.666-5.954 5.954-5.954 3.29-.001 5.956 2.664 5.956 5.954zM36.734 194.593c0 4.547-3.685 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.55 3.688-8.234 8.234-8.234 4.55-.001 8.234 3.684 8.234 8.234zM21.186 156.029c0 2.923-2.371 5.291-5.292 5.291-2.923 0-5.293-2.368-5.293-5.291 0-2.924 2.37-5.294 5.293-5.294 2.921 0 5.292 2.37 5.292 5.294zM22.83 130.201c0 3.282-2.66 5.943-5.942 5.943-3.283 0-5.943-2.661-5.943-5.943 0-3.28 2.661-5.941 5.943-5.941 3.282 0 5.942 2.661 5.942 5.941zM33.513 121.681c0 3.425-2.776 6.202-6.201 6.202-3.427 0-6.204-2.777-6.204-6.202s2.777-6.203 6.204-6.203c3.424 0 6.201 2.779 6.201 6.203zM26.565 110.051c0 3.231-2.619 5.852-5.852 5.852-3.232 0-5.852-2.62-5.852-5.852s2.62-5.854 5.852-5.854 5.852 2.621 5.852 5.854zM25.634 99.147c0 2.05-1.66 3.711-3.71 3.711s-3.71-1.661-3.71-3.711c0-2.049 1.661-3.71 3.71-3.71s3.71 1.661 3.71 3.71zM43.101 214.296c0 3.502-2.839 6.34-6.341 6.34-3.501 0-6.339-2.838-6.339-6.34s2.838-6.341 6.339-6.341c3.502 0 6.341 2.839 6.341 6.341zM31.732 207.191c0 1.675-1.358 3.036-3.033 3.036-1.677 0-3.035-1.361-3.035-3.036 0-1.676 1.358-3.034 3.035-3.034 1.674 0 3.033 1.358 3.033 3.034zM46.073 182.022c0 3.823-3.099 6.922-6.923 6.922-3.823 0-6.922-3.099-6.922-6.922 0-3.822 3.099-6.922 6.922-6.922 3.825 0 6.923 3.1 6.923 6.922zM46.392 120.2c0 3.213-2.604 5.815-5.815 5.815-3.212 0-5.815-2.603-5.815-5.815 0-3.211 2.604-5.815 5.815-5.815 3.21 0 5.815 2.604 5.815 5.815z"
              />
              <path
                fill="#00b800"
                d="M41.101 96.916c0 3.392-2.751 6.142-6.143 6.142s-6.14-2.75-6.14-6.142c0-3.392 2.748-6.141 6.14-6.141 3.392 0 6.143 2.749 6.143 6.141z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M32.824 82.508c0 1.96-1.589 3.55-3.55 3.55-1.961 0-3.551-1.59-3.551-3.55 0-1.961 1.59-3.551 3.551-3.551s3.55 1.59 3.55 3.551zM41.587 79.905c0 2.151-1.744 3.894-3.895 3.894-2.149 0-3.893-1.742-3.893-3.894 0-2.15 1.743-3.894 3.893-3.894 2.151 0 3.895 1.744 3.895 3.894zM48.826 225.206c0 2.877-2.334 5.211-5.214 5.211-2.878 0-5.212-2.334-5.212-5.211 0-2.879 2.334-5.213 5.212-5.213 2.88 0 5.214 2.334 5.214 5.213zM52.086 204.695c0 3.224-2.614 5.838-5.839 5.838-3.224 0-5.838-2.614-5.838-5.838 0-3.225 2.614-5.839 5.838-5.839 3.225 0 5.839 2.614 5.839 5.839zM47.866 193.586c0 2.309-1.872 4.18-4.181 4.18-2.31 0-4.18-1.871-4.18-4.18 0-2.311 1.87-4.181 4.18-4.181 2.309 0 4.181 1.87 4.181 4.181zM47.171 164.779c0 2.936-2.379 5.314-5.313 5.314-2.936 0-5.316-2.379-5.316-5.314s2.381-5.315 5.316-5.315c2.934 0 5.313 2.38 5.313 5.315zM49.929 152.879c0 3.058-2.479 5.535-5.536 5.535-3.058 0-5.535-2.478-5.535-5.535s2.478-5.536 5.535-5.536c3.056 0 5.536 2.479 5.536 5.536zM48.517 137.89c0 2.377-1.927 4.305-4.305 4.305-2.378 0-4.305-1.928-4.305-4.305 0-2.378 1.927-4.306 4.305-4.306 2.378 0 4.305 1.928 4.305 4.306zM51.597 107.937c0 2.583-2.092 4.676-4.675 4.676-2.581 0-4.676-2.093-4.676-4.676s2.095-4.677 4.676-4.677c2.583 0 4.675 2.094 4.675 4.677z"
              />
              <path
                fill="#00b800"
                d="M56.015 93.819c0 2.825-2.29 5.115-5.115 5.115-2.826 0-5.116-2.29-5.116-5.115s2.29-5.115 5.116-5.115c2.825 0 5.115 2.29 5.115 5.115z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M46.533 71.117c0 2.502-2.026 4.528-4.526 4.528-2.501 0-4.527-2.026-4.527-4.528 0-2.499 2.026-4.527 4.527-4.527 2.5 0 4.526 2.028 4.526 4.527zM48.078 61.399c0 2.217-1.797 4.015-4.016 4.015-2.217 0-4.014-1.798-4.014-4.015 0-2.218 1.797-4.015 4.014-4.015 2.219.001 4.016 1.797 4.016 4.015zM57.258 234.068c0 3.039-2.464 5.504-5.504 5.504-3.04 0-5.504-2.465-5.504-5.504 0-3.039 2.464-5.504 5.504-5.504 3.04 0 5.504 2.465 5.504 5.504zM67.761 229.022c0 2.822-2.287 5.11-5.11 5.11-2.823 0-5.111-2.288-5.111-5.11 0-2.823 2.288-5.113 5.111-5.113s5.11 2.29 5.11 5.113zM60.231 216.405c0 3.678-2.979 6.657-6.657 6.657-3.676 0-6.657-2.979-6.657-6.657 0-3.677 2.981-6.656 6.657-6.656 3.677 0 6.657 2.979 6.657 6.656zM61.156 195.588c0 3.152-2.555 5.708-5.707 5.708-3.152 0-5.706-2.556-5.706-5.708 0-3.149 2.554-5.704 5.706-5.704 3.152 0 5.707 2.554 5.707 5.704zM64.265 185.825c0 2.156-1.747 3.906-3.903 3.906-2.156 0-3.903-1.75-3.903-3.906s1.747-3.903 3.903-3.903c2.156 0 3.903 1.747 3.903 3.903zM55.061 185.346c0 2.244-1.819 4.063-4.063 4.063-2.243 0-4.062-1.819-4.062-4.063 0-2.246 1.819-4.065 4.062-4.065 2.243 0 4.063 1.819 4.063 4.065zM61.012 147.301c0 3.062-2.483 5.545-5.546 5.545s-5.547-2.482-5.547-5.545c0-3.063 2.483-5.547 5.547-5.547 3.062.001 5.546 2.484 5.546 5.547zM61.889 133.266c0 3.581-2.903 6.485-6.485 6.485-3.582 0-6.486-2.904-6.486-6.485 0-3.584 2.904-6.487 6.486-6.487s6.485 2.903 6.485 6.487z"
              />
              <path
                fill="#00b800"
                d="M64.396 109.311c0 1.614-1.309 2.924-2.925 2.924-1.614 0-2.924-1.31-2.924-2.924 0-1.616 1.31-2.925 2.924-2.925 1.616 0 2.925 1.308 2.925 2.925zM60.314 102.841c0 2.235-1.812 4.048-4.049 4.048-2.235 0-4.048-1.812-4.048-4.048 0-2.236 1.812-4.047 4.048-4.047 2.237 0 4.049 1.811 4.049 4.047zM67.436 94.395c0 2.795-2.266 5.061-5.06 5.061-2.794 0-5.06-2.266-5.06-5.061s2.266-5.059 5.06-5.059c2.794 0 5.06 2.264 5.06 5.059z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M61.357 78.536c0 3.595-2.914 6.509-6.509 6.509s-6.509-2.914-6.509-6.509 2.914-6.508 6.509-6.508 6.509 2.913 6.509 6.508zM65.164 61.912c0 3.574-2.897 6.472-6.47 6.472-3.574 0-6.472-2.897-6.472-6.472 0-3.575 2.897-6.471 6.472-6.471 3.573 0 6.47 2.897 6.47 6.471zM51.431 54.641c0 1.555-1.259 2.816-2.814 2.816-1.555 0-2.816-1.262-2.816-2.816 0-1.554 1.261-2.815 2.816-2.815s2.814 1.261 2.814 2.815zM60.177 50.109c0 2.407-1.951 4.359-4.359 4.359-2.407 0-4.359-1.952-4.359-4.359s1.952-4.358 4.359-4.358c2.408 0 4.359 1.951 4.359 4.358zM71.197 247.57c0 2.931-2.378 5.309-5.31 5.309-2.933 0-5.31-2.378-5.31-5.309 0-2.934 2.377-5.312 5.31-5.312 2.932.001 5.31 2.378 5.31 5.312zM78.251 229.449c0 2.367-1.92 4.284-4.287 4.284-2.366 0-4.285-1.917-4.285-4.284s1.919-4.284 4.285-4.284c2.367 0 4.287 1.917 4.287 4.284zM69.474 218.724c0 2.251-1.824 4.075-4.076 4.075-2.249 0-4.073-1.824-4.073-4.075 0-2.249 1.824-4.074 4.073-4.074 2.251 0 4.076 1.825 4.076 4.074zM71.496 206.365c0 3.821-3.099 6.922-6.92 6.922-3.822 0-6.92-3.101-6.92-6.922 0-3.821 3.098-6.92 6.92-6.92s6.92 3.099 6.92 6.92zM76.841 192.58c0 3.662-2.97 6.631-6.632 6.631-3.661 0-6.631-2.969-6.631-6.631 0-3.661 2.97-6.629 6.631-6.629 3.662 0 6.632 2.968 6.632 6.629zM75.026 166.293c0 1.789-1.449 3.239-3.237 3.239s-3.237-1.45-3.237-3.239c0-1.787 1.449-3.236 3.237-3.236s3.237 1.449 3.237 3.236zM70.034 153.719c0 1.593-1.292 2.883-2.885 2.883-1.593 0-2.882-1.29-2.882-2.883s1.289-2.884 2.882-2.884c1.593 0 2.885 1.292 2.885 2.884z"
              />
              <path
                fill="#00b800"
                d="M73.266 149.334c0 2.085-1.69 3.773-3.775 3.773-2.084 0-3.774-1.688-3.774-3.773s1.69-3.774 3.774-3.774 3.775 1.689 3.775 3.774zM70.181 109.857c0 1.197-.971 2.169-2.17 2.169-1.199 0-2.169-.972-2.169-2.169 0-1.198.97-2.17 2.169-2.17s2.17.972 2.17 2.17z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M76.185 85.424c0 3.333-2.702 6.035-6.036 6.035-3.333 0-6.035-2.702-6.035-6.035 0-3.334 2.702-6.037 6.035-6.037 3.334-.001 6.036 2.703 6.036 6.037zM68.684 72.101c0 2.181-1.769 3.949-3.947 3.949-2.183 0-3.95-1.769-3.95-3.949 0-2.18 1.768-3.948 3.95-3.948 2.178 0 3.947 1.768 3.947 3.948zM73.98 51.331c0 3.377-2.738 6.115-6.117 6.115-3.376 0-6.113-2.738-6.113-6.115 0-3.379 2.737-6.115 6.113-6.115 3.378 0 6.117 2.736 6.117 6.115zM64.433 43.031c0 1.744-1.413 3.157-3.157 3.157s-3.157-1.413-3.157-3.157 1.413-3.157 3.157-3.157 3.157 1.413 3.157 3.157zM89.526 255.847c0 4.043-3.275 7.318-7.315 7.318-4.041 0-7.315-3.275-7.315-7.318 0-4.04 3.274-7.315 7.315-7.315 4.04 0 7.315 3.275 7.315 7.315zM79.225 245.552c0 1.909-1.548 3.456-3.457 3.456-1.909 0-3.456-1.547-3.456-3.456s1.547-3.456 3.456-3.456 3.457 1.547 3.457 3.456zM72.669 237.424c0 2.161-1.752 3.914-3.915 3.914-2.163 0-3.915-1.753-3.915-3.914 0-2.161 1.752-3.917 3.915-3.917 2.163 0 3.915 1.755 3.915 3.917zM80.191 219.254c0 2.6-2.107 4.704-4.706 4.704s-4.706-2.104-4.706-4.704c0-2.602 2.107-4.706 4.706-4.706s4.706 2.104 4.706 4.706z"
              />
              <path
                fill="#00b800"
                d="M87.405 178.717c0 2.436-1.974 4.409-4.41 4.409-2.435 0-4.409-1.974-4.409-4.409 0-2.435 1.975-4.411 4.409-4.411 2.437 0 4.41 1.975 4.41 4.411zM87.558 169.086c0 2.151-1.745 3.895-3.895 3.895s-3.896-1.743-3.896-3.895c0-2.149 1.745-3.893 3.896-3.893 2.149 0 3.895 1.744 3.895 3.893zM82.884 160.979c0 2.439-1.978 4.418-4.418 4.418-2.439 0-4.418-1.979-4.418-4.418 0-2.44 1.979-4.42 4.418-4.42 2.44.001 4.418 1.98 4.418 4.42zM91.161 150.529c0 3.258-2.641 5.898-5.898 5.898-3.257 0-5.898-2.641-5.898-5.898 0-3.257 2.642-5.897 5.898-5.897 3.258 0 5.898 2.639 5.898 5.897z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M87.833 118.702c0 3.364-2.728 6.092-6.092 6.092-3.364 0-6.091-2.728-6.091-6.092 0-3.363 2.727-6.092 6.091-6.092 3.364 0 6.092 2.729 6.092 6.092z"
              />
              <path
                fill="#00b800"
                d="M78.003 124.191c0 1.013-.822 1.835-1.835 1.835-1.014 0-1.835-.822-1.835-1.835 0-1.014.821-1.835 1.835-1.835 1.013 0 1.835.822 1.835 1.835z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M82.8 57.343c0 2.52-2.04 4.562-4.56 4.562-2.52 0-4.561-2.042-4.561-4.562 0-2.518 2.041-4.56 4.561-4.56s4.56 2.042 4.56 4.56zM86.673 42.071c0 3.988-3.232 7.222-7.222 7.222-3.988 0-7.222-3.233-7.222-7.222 0-3.99 3.233-7.224 7.222-7.224 3.99 0 7.222 3.234 7.222 7.224zM86.009 29.893c0 2.165-1.755 3.92-3.92 3.92-2.166 0-3.921-1.755-3.921-3.92 0-2.164 1.755-3.919 3.921-3.919 2.165 0 3.92 1.755 3.92 3.919zM99.584 260.457c0 2.64-2.14 4.778-4.777 4.778-2.64 0-4.778-2.139-4.778-4.778 0-2.641 2.139-4.778 4.778-4.778 2.637-.001 4.777 2.137 4.777 4.778zM98.013 241.79c0 4.079-3.307 7.389-7.388 7.389-4.08 0-7.388-3.31-7.388-7.389 0-4.081 3.308-7.388 7.388-7.388 4.081 0 7.388 3.307 7.388 7.388zM91.44 227.987c0 3.305-2.679 5.983-5.982 5.983-3.303 0-5.981-2.679-5.981-5.983s2.678-5.982 5.981-5.982 5.982 2.678 5.982 5.982zM102.134 217.193c0 3.921-3.179 7.1-7.101 7.1s-7.1-3.179-7.1-7.1c0-3.922 3.178-7.103 7.1-7.103 3.922 0 7.101 3.181 7.101 7.103z"
              />
              <path
                fill="#00b800"
                d="M95.842 165.341c0 2.131-1.728 3.857-3.858 3.857s-3.857-1.727-3.857-3.857c0-2.132 1.727-3.858 3.857-3.858s3.858 1.726 3.858 3.858z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M97.594 152.375c0 2.711-2.198 4.909-4.908 4.909-2.711 0-4.909-2.198-4.909-4.909s2.198-4.908 4.909-4.908c2.71 0 4.908 2.197 4.908 4.908zM96.824 127.356c0 2.999-2.432 5.43-5.43 5.43-2.999 0-5.43-2.431-5.43-5.43 0-2.999 2.431-5.43 5.43-5.43 2.999.001 5.43 2.431 5.43 5.43zM100.145 109.086c0 3.628-2.94 6.569-6.569 6.569-3.628 0-6.569-2.941-6.569-6.569 0-3.629 2.941-6.57 6.569-6.57 3.628-.001 6.569 2.941 6.569 6.57zM92.664 52.485c0 2.665-2.16 4.827-4.825 4.827-2.666 0-4.828-2.162-4.828-4.827 0-2.666 2.162-4.828 4.828-4.828 2.665 0 4.825 2.162 4.825 4.828zM102.421 40.699c0 3.998-3.242 7.239-7.24 7.239-3.997 0-7.239-3.241-7.239-7.239 0-3.998 3.242-7.239 7.239-7.239 3.998 0 7.24 3.241 7.24 7.239zM91.316 31.725c0 1.151-.933 2.084-2.085 2.084-1.151 0-2.085-.933-2.085-2.084s.934-2.085 2.085-2.085c1.153 0 2.085.934 2.085 2.085zM97.27 24.978c0 2.366-1.919 4.285-4.286 4.285-2.366 0-4.285-1.919-4.285-4.285 0-2.367 1.919-4.286 4.285-4.286 2.367 0 4.286 1.919 4.286 4.286zM105.025 251.44c0 2.432-1.972 4.4-4.4 4.4-2.431 0-4.4-1.969-4.4-4.4 0-2.43 1.97-4.4 4.4-4.4 2.429 0 4.4 1.97 4.4 4.4zM109.255 241.494c0 2.7-2.187 4.885-4.884 4.885-2.699 0-4.885-2.185-4.885-4.885 0-2.696 2.186-4.884 4.885-4.884 2.697 0 4.884 2.188 4.884 4.884zM104.637 230.491c0 3.016-2.447 5.463-5.463 5.463-3.018 0-5.463-2.447-5.463-5.463 0-3.019 2.445-5.463 5.463-5.463 3.016 0 5.463 2.444 5.463 5.463zM102.128 161.512c0 2.326-1.888 4.213-4.215 4.213-2.328 0-4.214-1.887-4.214-4.213 0-2.328 1.886-4.215 4.214-4.215 2.327.001 4.215 1.887 4.215 4.215zM104.973 133.449c0 2.365-1.919 4.284-4.286 4.284-2.366 0-4.284-1.919-4.284-4.284 0-2.368 1.918-4.286 4.284-4.286 2.367 0 4.286 1.918 4.286 4.286zM104.577 123.79c0 1.944-1.574 3.52-3.518 3.52-1.944 0-3.521-1.575-3.521-3.52s1.576-3.519 3.521-3.519c1.944 0 3.518 1.574 3.518 3.519zM109.238 110.559c0 2.168-1.757 3.926-3.925 3.926s-3.926-1.758-3.926-3.926 1.758-3.925 3.926-3.925 3.925 1.757 3.925 3.925zM109.118 87.075c0 2.36-1.914 4.273-4.272 4.273-2.359 0-4.272-1.913-4.272-4.273 0-2.358 1.913-4.271 4.272-4.271 2.358-.001 4.272 1.913 4.272 4.271zM110.187 29.59c0 3.227-2.615 5.844-5.844 5.844-3.227 0-5.844-2.617-5.844-5.844 0-3.229 2.617-5.844 5.844-5.844 3.228 0 5.844 2.615 5.844 5.844zM103.021 20.522c0 1.546-1.252 2.798-2.797 2.798-1.544 0-2.797-1.252-2.797-2.798 0-1.544 1.253-2.795 2.797-2.795 1.545 0 2.797 1.251 2.797 2.795zM121.241 269.038c0 3.857-3.126 6.984-6.983 6.984-3.857 0-6.983-3.127-6.983-6.984s3.126-6.983 6.983-6.983c3.857 0 6.983 3.125 6.983 6.983zM115.324 256.214c0 2.75-2.229 4.979-4.978 4.979-2.748 0-4.977-2.229-4.977-4.979 0-2.749 2.229-4.977 4.977-4.977 2.75 0 4.978 2.228 4.978 4.977zM119.407 244.667c0 2.571-2.084 4.655-4.654 4.655s-4.653-2.084-4.653-4.655c0-2.57 2.083-4.652 4.653-4.652 2.57 0 4.654 2.081 4.654 4.652z"
              />
              <path
                fill="#00b800"
                d="M119.609 235.649c0 2.849-2.311 5.156-5.158 5.156-2.849 0-5.158-2.308-5.158-5.156s2.31-5.157 5.158-5.157c2.848 0 5.158 2.309 5.158 5.157zM127.95 225.289c0 3.415-2.768 6.184-6.181 6.184-3.413 0-6.183-2.769-6.183-6.184 0-3.412 2.77-6.181 6.183-6.181s6.181 2.769 6.181 6.181z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M117.042 133.693c0 2.932-2.376 5.309-5.309 5.309-2.931 0-5.308-2.377-5.308-5.309 0-2.933 2.377-5.309 5.308-5.309 2.933.001 5.309 2.376 5.309 5.309zM114.036 123.114c0 2.256-1.828 4.084-4.083 4.084s-4.083-1.828-4.083-4.084c0-2.255 1.828-4.082 4.083-4.082s4.083 1.827 4.083 4.082zM116.721 113.708c0 1.855-1.506 3.361-3.361 3.361-1.855 0-3.36-1.506-3.36-3.361 0-1.856 1.505-3.36 3.36-3.36s3.361 1.503 3.361 3.36z"
              />
              <path
                fill="#00b800"
                d="M122.406 92.924c0 2.395-1.941 4.336-4.336 4.336-2.396 0-4.336-1.941-4.336-4.336 0-2.395 1.94-4.336 4.336-4.336 2.395 0 4.336 1.941 4.336 4.336z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M123.3 41.001c0 3.512-2.847 6.358-6.358 6.358-3.511 0-6.358-2.847-6.358-6.358 0-3.511 2.848-6.357 6.358-6.357 3.511-.001 6.358 2.845 6.358 6.357zM119.911 24.4c0 2.564-2.079 4.643-4.644 4.643s-4.644-2.078-4.644-4.643 2.079-4.643 4.644-4.643 4.644 2.078 4.644 4.643zM111.134 18.757c0 1.903-1.544 3.447-3.448 3.447s-3.448-1.544-3.448-3.447c0-1.904 1.544-3.448 3.448-3.448s3.448 1.543 3.448 3.448zM133.612 263.153c0 3.363-2.727 6.088-6.09 6.088s-6.088-2.725-6.088-6.088 2.725-6.088 6.088-6.088 6.09 2.725 6.09 6.088zM126.425 252.588c0 2.537-2.057 4.593-4.594 4.593-2.537 0-4.594-2.056-4.594-4.593s2.057-4.594 4.594-4.594c2.537 0 4.594 2.057 4.594 4.594zM133.199 241.649c0 3.401-2.756 6.157-6.156 6.157s-6.156-2.756-6.156-6.157c0-3.399 2.756-6.155 6.156-6.155s6.156 2.756 6.156 6.155zM123.023 233.96c0 1.557-1.263 2.818-2.82 2.818s-2.819-1.262-2.819-2.818c0-1.56 1.263-2.82 2.819-2.82 1.557-.001 2.82 1.26 2.82 2.82zM131.841 229.446c0 2.419-1.961 4.38-4.38 4.38-2.419 0-4.38-1.961-4.38-4.38 0-2.418 1.961-4.379 4.38-4.379 2.419 0 4.38 1.961 4.38 4.379zM127.129 130.639c0 2.536-2.056 4.593-4.592 4.593-2.536 0-4.592-2.057-4.592-4.593 0-2.535 2.056-4.592 4.592-4.592 2.536 0 4.592 2.057 4.592 4.592z"
              />
              <path
                fill="#00b800"
                d="M129.454 123.306c0 2.791-2.262 5.052-5.051 5.052s-5.052-2.261-5.052-5.052c0-2.789 2.263-5.051 5.052-5.051 2.789 0 5.051 2.262 5.051 5.051zM134.84 103.728c0 2.523-2.046 4.567-4.568 4.567-2.523 0-4.569-2.044-4.569-4.567 0-2.522 2.046-4.568 4.569-4.568 2.522-.001 4.568 2.045 4.568 4.568zM136.366 92.922c0 2.667-2.162 4.828-4.827 4.828-2.667 0-4.829-2.161-4.829-4.828 0-2.666 2.162-4.828 4.829-4.828 2.665 0 4.827 2.162 4.827 4.828z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M127.162 79.423c0 3.252-2.635 5.889-5.888 5.889-3.251 0-5.887-2.637-5.887-5.889 0-3.251 2.636-5.888 5.887-5.888 3.253 0 5.888 2.637 5.888 5.888zM125.152 31.253c0 1.8-1.459 3.26-3.257 3.26-1.802 0-3.261-1.46-3.261-3.26 0-1.8 1.459-3.259 3.261-3.259 1.798 0 3.257 1.459 3.257 3.259zM121.002 15.865c0 1.657-1.342 2.999-2.998 2.999-1.657 0-3-1.342-3-2.999 0-1.655 1.343-2.999 3-2.999 1.656 0 2.998 1.344 2.998 2.999zM131.545 15.953c0 2.547-2.066 4.612-4.614 4.612-2.546 0-4.611-2.065-4.611-4.612 0-2.548 2.065-4.612 4.611-4.612 2.548 0 4.614 2.064 4.614 4.612zM148.827 271.509c0 4.482-3.633 8.113-8.114 8.113-4.479 0-8.112-3.631-8.112-8.113 0-4.48 3.633-8.111 8.112-8.111 4.48-.001 8.114 3.63 8.114 8.111zM141.388 253.46c0 2.99-2.423 5.412-5.412 5.412-2.987 0-5.411-2.422-5.411-5.412 0-2.987 2.424-5.409 5.411-5.409 2.989 0 5.412 2.421 5.412 5.409zM143.255 243.527c0 2.046-1.659 3.705-3.705 3.705-2.046 0-3.705-1.659-3.705-3.705 0-2.046 1.659-3.705 3.705-3.705 2.046 0 3.705 1.659 3.705 3.705zM141.402 234.227c0 2.6-2.107 4.704-4.705 4.704s-4.705-2.104-4.705-4.704c0-2.596 2.107-4.703 4.705-4.703s4.705 2.108 4.705 4.703zM142.113 222.743c0 2.864-2.324 5.188-5.189 5.188s-5.188-2.323-5.188-5.188c0-2.866 2.323-5.189 5.188-5.189 2.865 0 5.189 2.323 5.189 5.189z"
              />
              <path
                fill="#00b800"
                d="M144.083 187.496c0 2.867-2.321 5.188-5.187 5.188s-5.186-2.32-5.186-5.188c0-2.863 2.32-5.185 5.186-5.185s5.187 2.322 5.187 5.185zM141.996 136.47c0 2.855-2.314 5.171-5.169 5.171-2.856 0-5.171-2.315-5.171-5.171 0-2.856 2.314-5.17 5.171-5.17 2.855 0 5.169 2.314 5.169 5.17z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M147.198 107.568c0 4.549-3.686 8.234-8.235 8.234-4.547 0-8.234-3.686-8.234-8.234 0-4.547 3.688-8.234 8.234-8.234 4.549 0 8.235 3.687 8.235 8.234z"
              />
              <path
                fill="#00b800"
                d="M141.597 99.066c0 1.701-1.379 3.079-3.079 3.079-1.701 0-3.079-1.378-3.079-3.079 0-1.7 1.378-3.079 3.079-3.079 1.7 0 3.079 1.379 3.079 3.079z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M146.318 86.538c0 3.299-2.675 5.974-5.974 5.974-3.3 0-5.974-2.675-5.974-5.974 0-3.299 2.674-5.975 5.974-5.975 3.299 0 5.974 2.676 5.974 5.975zM136.892 75.962c0 2.462-1.995 4.458-4.457 4.458-2.462 0-4.459-1.996-4.459-4.458s1.997-4.458 4.459-4.458c2.462 0 4.457 1.996 4.457 4.458zM141.754 31.1c0 4.201-3.405 7.608-7.607 7.608-4.204 0-7.609-3.407-7.609-7.608 0-4.202 3.405-7.608 7.609-7.608 4.202 0 7.607 3.406 7.607 7.608zM141.267 14.394c0 2.334-1.895 4.227-4.229 4.227s-4.227-1.893-4.227-4.227c0-2.335 1.893-4.227 4.227-4.227 2.334 0 4.229 1.892 4.229 4.227zM154.588 261.303c0 2.457-1.991 4.451-4.452 4.451-2.457 0-4.452-1.994-4.452-4.451 0-2.46 1.995-4.452 4.452-4.452 2.461 0 4.452 1.992 4.452 4.452zM148.96 253.718c0 1.541-1.249 2.792-2.792 2.792-1.541 0-2.792-1.251-2.792-2.792 0-1.542 1.251-2.792 2.792-2.792 1.543 0 2.792 1.25 2.792 2.792zM151.063 246.296c0 1.879-1.521 3.399-3.399 3.399-1.876 0-3.398-1.521-3.398-3.399 0-1.876 1.521-3.398 3.398-3.398 1.879-.001 3.399 1.522 3.399 3.398zM152.085 236.701c0 2.65-2.148 4.799-4.799 4.799-2.65 0-4.798-2.148-4.798-4.799 0-2.648 2.148-4.797 4.798-4.797s4.799 2.148 4.799 4.797zM151.051 226.374c0 2.283-1.849 4.13-4.131 4.13-2.281 0-4.13-1.847-4.13-4.13 0-2.279 1.85-4.13 4.13-4.13 2.283 0 4.131 1.85 4.131 4.13z"
              />
              <path
                fill="#00b800"
                d="M150.62 178.334c0 2.634-2.135 4.769-4.769 4.769-2.633 0-4.768-2.135-4.768-4.769 0-2.633 2.135-4.768 4.768-4.768s4.769 2.135 4.769 4.768z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M156.03 114.055c0 2.475-2.005 4.48-4.479 4.48s-4.479-2.006-4.479-4.48c0-2.474 2.005-4.479 4.479-4.479 2.474.001 4.479 2.005 4.479 4.479zM153.665 98.733c0 2.311-1.873 4.185-4.185 4.185-2.311 0-4.184-1.874-4.184-4.185 0-2.31 1.874-4.183 4.184-4.183 2.312.001 4.185 1.874 4.185 4.183zM151.485 90.766c0 1.328-1.077 2.405-2.404 2.405-1.329 0-2.405-1.077-2.405-2.405 0-1.328 1.076-2.404 2.405-2.404 1.327 0 2.404 1.076 2.404 2.404zM148.855 74.249c0 2.977-2.413 5.389-5.388 5.389-2.978 0-5.389-2.412-5.389-5.389 0-2.976 2.411-5.388 5.389-5.388 2.975 0 5.388 2.412 5.388 5.388zM151.942 27.748c0 2.566-2.079 4.646-4.646 4.646-2.566 0-4.645-2.08-4.645-4.646 0-2.565 2.079-4.645 4.645-4.645 2.567 0 4.646 2.079 4.646 4.645zM145.953 20.047c0 1.528-1.238 2.768-2.768 2.768-1.528 0-2.768-1.239-2.768-2.768 0-1.529 1.239-2.769 2.768-2.769 1.53 0 2.768 1.24 2.768 2.769zM152.429 13.965c0 2.191-1.775 3.967-3.967 3.967-2.19 0-3.966-1.775-3.966-3.967 0-2.189 1.776-3.965 3.966-3.965 2.192 0 3.967 1.775 3.967 3.965zM159.041 274.812c0 2.524-2.046 4.567-4.568 4.567s-4.567-2.043-4.567-4.567c0-2.521 2.045-4.567 4.567-4.567 2.522 0 4.568 2.046 4.568 4.567zM163.425 265.935c0 2.243-1.819 4.062-4.063 4.062-2.244 0-4.063-1.819-4.063-4.062 0-2.244 1.819-4.063 4.063-4.063 2.244 0 4.063 1.819 4.063 4.063zM160.837 256.2c0 1.799-1.458 3.258-3.255 3.258-1.798 0-3.257-1.459-3.257-3.258 0-1.796 1.459-3.255 3.257-3.255 1.797 0 3.255 1.459 3.255 3.255zM161.212 247.202c0 2.452-1.986 4.438-4.438 4.438-2.449 0-4.438-1.986-4.438-4.438s1.988-4.438 4.438-4.438c2.451-.001 4.438 1.986 4.438 4.438zM166.358 232.913c0 3.733-3.028 6.763-6.764 6.763-3.734 0-6.762-3.029-6.762-6.763 0-3.736 3.027-6.763 6.762-6.763 3.736 0 6.764 3.027 6.764 6.763zM160.599 220.366c0 2.794-2.264 5.062-5.059 5.062-2.795 0-5.059-2.268-5.059-5.062 0-2.792 2.264-5.06 5.059-5.06 2.795 0 5.059 2.268 5.059 5.06z"
              />
              <path
                fill="#00b800"
                d="M166.668 98.136c0 2.504-2.03 4.533-4.533 4.533-2.504 0-4.532-2.029-4.532-4.533 0-2.502 2.028-4.532 4.532-4.532 2.503 0 4.533 2.03 4.533 4.532z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M159.006 85.294c0 2.319-1.88 4.199-4.199 4.199s-4.199-1.88-4.199-4.199c0-2.32 1.88-4.201 4.199-4.201s4.199 1.88 4.199 4.201zM163.837 77.316c0 2.177-1.765 3.942-3.943 3.942s-3.943-1.766-3.943-3.942c0-2.178 1.765-3.943 3.943-3.943s3.943 1.765 3.943 3.943zM167.217 38.514c0 2.102-1.702 3.805-3.803 3.805-2.1 0-3.804-1.703-3.804-3.805 0-2.1 1.704-3.803 3.804-3.803 2.101.001 3.803 1.704 3.803 3.803zM158.791 35.471c0 2.458-1.992 4.448-4.448 4.448-2.456 0-4.447-1.99-4.447-4.448 0-2.456 1.991-4.447 4.447-4.447s4.448 1.991 4.448 4.447zM165.02 21.206c0 3.747-3.037 6.784-6.784 6.784-3.746 0-6.783-3.037-6.783-6.784 0-3.745 3.037-6.783 6.783-6.783 3.747 0 6.784 3.038 6.784 6.783zM173.823 272.134c0 3.026-2.452 5.479-5.477 5.479-3.025 0-5.478-2.452-5.478-5.479s2.452-5.479 5.478-5.479c3.025 0 5.477 2.452 5.477 5.479zM170.012 258.946c0 2.293-1.857 4.15-4.15 4.15-2.292 0-4.15-1.857-4.15-4.15s1.858-4.15 4.15-4.15c2.293 0 4.15 1.857 4.15 4.15zM171.422 249.129c0 2.439-1.978 4.416-4.416 4.416-2.439 0-4.415-1.977-4.415-4.416 0-2.438 1.976-4.415 4.415-4.415s4.416 1.976 4.416 4.415zM175.241 239.377c0 2.553-2.069 4.621-4.622 4.621-2.555 0-4.623-2.068-4.623-4.621 0-2.556 2.068-4.624 4.623-4.624 2.552 0 4.622 2.068 4.622 4.624z"
              />
              <path
                fill="#00b800"
                d="M180.899 231.787c0 2.877-2.333 5.208-5.208 5.208-2.877 0-5.21-2.331-5.21-5.208 0-2.877 2.333-5.209 5.21-5.209 2.875 0 5.208 2.332 5.208 5.209zM173.592 223.182c0 2.236-1.813 4.048-4.049 4.048-2.236 0-4.049-1.812-4.049-4.048 0-2.236 1.812-4.05 4.049-4.05 2.236 0 4.049 1.813 4.049 4.05z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M171.658 48.094c0 2.705-2.191 4.896-4.896 4.896s-4.896-2.19-4.896-4.896c0-2.703 2.192-4.896 4.896-4.896 2.704 0 4.896 2.193 4.896 4.896zM168.286 30.344c0 1.775-1.438 3.216-3.217 3.216-1.775 0-3.215-1.44-3.215-3.216 0-1.776 1.439-3.217 3.215-3.217 1.778.001 3.217 1.441 3.217 3.217zM174.296 16.704c0 2.403-1.947 4.351-4.349 4.351-2.403 0-4.352-1.947-4.352-4.351 0-2.402 1.948-4.349 4.352-4.349 2.402 0 4.349 1.946 4.349 4.349zM192.447 264.511c0 4.547-3.686 8.234-8.234 8.234s-8.234-3.688-8.234-8.234c0-4.546 3.687-8.234 8.234-8.234 4.548 0 8.234 3.688 8.234 8.234zM177.688 256.056c0 1.889-1.531 3.42-3.42 3.42s-3.42-1.531-3.42-3.42 1.531-3.42 3.42-3.42 3.42 1.532 3.42 3.42zM181.703 247.341c0 2.45-1.986 4.437-4.437 4.437-2.449 0-4.437-1.986-4.437-4.437 0-2.449 1.987-4.437 4.437-4.437s4.437 1.987 4.437 4.437z"
              />
              <path
                fill="#00b800"
                d="M193.85 240.595c0 3.574-2.899 6.475-6.475 6.475-3.577 0-6.474-2.9-6.474-6.475 0-3.577 2.896-6.474 6.474-6.474 3.576 0 6.475 2.897 6.475 6.474zM187.094 223.962c0 2.267-1.839 4.106-4.106 4.106s-4.105-1.84-4.105-4.106c0-2.268 1.839-4.104 4.105-4.104 2.267-.001 4.106 1.836 4.106 4.104z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M192.263 185.743c0 3.119-2.527 5.643-5.644 5.643s-5.643-2.523-5.643-5.643c0-3.116 2.525-5.644 5.643-5.644 3.117 0 5.644 2.528 5.644 5.644zM187.747 173.198c0 3.187-2.582 5.77-5.769 5.77-3.186 0-5.77-2.583-5.77-5.77 0-3.187 2.584-5.77 5.77-5.77 3.187 0 5.769 2.583 5.769 5.77zM181.201 51.77c0 2.422-1.961 4.383-4.382 4.383-2.419 0-4.383-1.961-4.383-4.383 0-2.42 1.964-4.382 4.383-4.382 2.421 0 4.382 1.962 4.382 4.382zM188.584 42.869c0 2.926-2.37 5.297-5.296 5.297s-5.297-2.371-5.297-5.297c0-2.925 2.371-5.296 5.297-5.296 2.926 0 5.296 2.371 5.296 5.296zM184.685 30.604c0 3.744-3.037 6.779-6.781 6.779-3.743 0-6.777-3.035-6.777-6.779 0-3.744 3.034-6.779 6.777-6.779 3.744 0 6.781 3.035 6.781 6.779zM183.859 18.673c0 2.202-1.785 3.987-3.986 3.987-2.202 0-3.985-1.785-3.985-3.987 0-2.201 1.783-3.986 3.985-3.986 2.201-.001 3.986 1.784 3.986 3.986zM195.149 252.336c0 2.38-1.93 4.31-4.312 4.31-2.38 0-4.311-1.93-4.311-4.31 0-2.381 1.931-4.311 4.311-4.311 2.382 0 4.312 1.93 4.312 4.311zM187.389 246.944c0 1.177-.952 2.129-2.128 2.129-1.175 0-2.128-.952-2.128-2.129 0-1.173.953-2.128 2.128-2.128 1.176 0 2.128.955 2.128 2.128z"
              />
              <path
                fill="#00b800"
                d="M200.172 228.143c0 3.461-2.807 6.269-6.268 6.269-3.462 0-6.267-2.808-6.267-6.269 0-3.461 2.805-6.266 6.267-6.266s6.268 2.805 6.268 6.266z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M198.342 176.012c0 2.654-2.152 4.806-4.809 4.806-2.654 0-4.807-2.151-4.807-4.806 0-2.656 2.152-4.809 4.807-4.809 2.657.001 4.809 2.153 4.809 4.809zM198.602 164.763c0 2.27-1.839 4.108-4.108 4.108-2.269 0-4.109-1.839-4.109-4.108 0-2.269 1.84-4.108 4.109-4.108s4.108 1.839 4.108 4.108zM194.305 156.16c0 2.331-1.891 4.22-4.221 4.22s-4.22-1.889-4.22-4.22c0-2.331 1.89-4.22 4.22-4.22s4.221 1.889 4.221 4.22zM195.912 88.046c0 3.344-2.709 6.055-6.055 6.055-3.343 0-6.054-2.711-6.054-6.055s2.711-6.054 6.054-6.054c3.346 0 6.055 2.71 6.055 6.054zM196.537 72.635c0 2.317-1.879 4.195-4.196 4.195-2.318 0-4.197-1.878-4.197-4.195 0-2.318 1.879-4.197 4.197-4.197 2.317-.001 4.196 1.878 4.196 4.197zM191.599 63.845c0 2.74-2.222 4.963-4.964 4.963-2.74 0-4.963-2.223-4.963-4.963 0-2.742 2.223-4.964 4.963-4.964 2.743.001 4.964 2.222 4.964 4.964zM195.137 52.824c0 2.883-2.337 5.219-5.219 5.219s-5.218-2.336-5.218-5.219c0-2.883 2.336-5.22 5.218-5.22s5.219 2.337 5.219 5.22zM199.36 41.903c0 2.623-2.126 4.749-4.748 4.749-2.622 0-4.748-2.126-4.748-4.749 0-2.622 2.126-4.748 4.748-4.748 2.622 0 4.748 2.126 4.748 4.748zM198.505 31.312c0 2.382-1.93 4.312-4.31 4.312-2.382 0-4.313-1.93-4.313-4.312 0-2.38 1.932-4.312 4.313-4.312 2.381.001 4.31 1.932 4.31 4.312zM192.123 23.667c0 2.276-1.845 4.121-4.121 4.121-2.275 0-4.121-1.845-4.121-4.121 0-2.275 1.846-4.121 4.121-4.121 2.276 0 4.121 1.845 4.121 4.121zM205.808 261.375c0 3.402-2.756 6.158-6.157 6.158-3.399 0-6.156-2.756-6.156-6.158 0-3.398 2.757-6.157 6.156-6.157 3.401 0 6.157 2.758 6.157 6.157zM207.482 247.109c0 3.373-2.735 6.108-6.109 6.108s-6.109-2.735-6.109-6.108c0-3.376 2.735-6.111 6.109-6.111s6.109 2.735 6.109 6.111zM206.865 235.184c0 2.504-2.03 4.534-4.535 4.534-2.504 0-4.534-2.03-4.534-4.534 0-2.506 2.03-4.536 4.534-4.536 2.505 0 4.535 2.03 4.535 4.536zM207.853 224.403c0 2.71-2.197 4.909-4.911 4.909-2.711 0-4.91-2.199-4.91-4.909 0-2.712 2.199-4.912 4.91-4.912 2.714 0 4.911 2.2 4.911 4.912zM212.24 213.879c0 2.753-2.23 4.984-4.984 4.984-2.752 0-4.982-2.231-4.982-4.984 0-2.751 2.23-4.981 4.982-4.981 2.753-.001 4.984 2.23 4.984 4.981z"
              />
              <path
                fill="#00b800"
                d="M207.079 185.96c0 1.773-1.438 3.212-3.21 3.212-1.773 0-3.21-1.438-3.21-3.212 0-1.772 1.437-3.207 3.21-3.207 1.771 0 3.21 1.435 3.21 3.207zM210.677 173.977c0 2.511-2.035 4.546-4.547 4.546-2.51 0-4.547-2.035-4.547-4.546 0-2.512 2.037-4.547 4.547-4.547 2.512 0 4.547 2.035 4.547 4.547z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M210.83 106.936c0 4.23-3.429 7.661-7.659 7.661-4.229 0-7.66-3.431-7.66-7.661 0-4.23 3.431-7.66 7.66-7.66 4.23 0 7.659 3.43 7.659 7.66z"
              />
              <path
                fill="#00b800"
                d="M207.601 97.461c0 2.354-1.908 4.262-4.263 4.262s-4.263-1.907-4.263-4.262c0-2.355 1.908-4.263 4.263-4.263s4.263 1.908 4.263 4.263z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M207.156 80.42c0 3.392-2.751 6.141-6.143 6.141s-6.141-2.749-6.141-6.141c0-3.393 2.749-6.143 6.141-6.143s6.143 2.75 6.143 6.143zM210.118 61.514c0 4.548-3.687 8.234-8.233 8.234-4.55 0-8.234-3.687-8.234-8.234 0-4.549 3.685-8.234 8.234-8.234 4.546 0 8.233 3.686 8.233 8.234zM203.632 48.871c0 1.703-1.382 3.085-3.086 3.085s-3.086-1.382-3.086-3.085c0-1.705 1.382-3.087 3.086-3.087s3.086 1.382 3.086 3.087zM212.497 40.342c0 3.291-2.668 5.957-5.957 5.957-3.29 0-5.957-2.666-5.957-5.957 0-3.29 2.667-5.957 5.957-5.957 3.289 0 5.957 2.666 5.957 5.957zM203.66 25.403c0 1.675-1.358 3.033-3.034 3.033-1.675 0-3.033-1.358-3.033-3.033 0-1.676 1.358-3.034 3.033-3.034 1.675 0 3.034 1.358 3.034 3.034zM215.161 257.556c0 2.394-1.94 4.333-4.333 4.333-2.394 0-4.334-1.939-4.334-4.333s1.94-4.333 4.334-4.333c2.392 0 4.333 1.94 4.333 4.333zM216.25 248.303c0 2.071-1.681 3.751-3.752 3.751-2.073 0-3.753-1.68-3.753-3.751 0-2.074 1.68-3.752 3.753-3.752 2.071 0 3.752 1.678 3.752 3.752zM216.906 238.344c0 2.543-2.062 4.604-4.606 4.604-2.542 0-4.604-2.061-4.604-4.604 0-2.545 2.062-4.605 4.604-4.605 2.543 0 4.606 2.061 4.606 4.605zM220.129 223.186c0 3.044-2.468 5.509-5.512 5.509-3.044 0-5.511-2.465-5.511-5.509 0-3.045 2.467-5.513 5.511-5.513s5.512 2.468 5.512 5.513zM220.274 206.134c0 2.686-2.177 4.86-4.863 4.86-2.686 0-4.861-2.175-4.861-4.86 0-2.687 2.176-4.864 4.861-4.864 2.686-.001 4.863 2.177 4.863 4.864zM222.276 197.209c0 1.846-1.495 3.341-3.342 3.341-1.846 0-3.341-1.495-3.341-3.341 0-1.847 1.495-3.342 3.341-3.342 1.847 0 3.342 1.495 3.342 3.342z"
              />
              <path
                fill="#00b800"
                d="M212.458 181.753c0 1.495-1.213 2.707-2.707 2.707-1.494 0-2.706-1.212-2.706-2.707 0-1.494 1.212-2.706 2.706-2.706s2.707 1.212 2.707 2.706z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M217.83 126.216c0 1.833-1.487 3.32-3.32 3.32-1.834 0-3.32-1.487-3.32-3.32 0-1.834 1.486-3.319 3.32-3.319 1.832-.001 3.32 1.485 3.32 3.319zM225.006 115.617c0 3.642-2.952 6.592-6.593 6.592-3.64 0-6.59-2.95-6.59-6.592 0-3.64 2.95-6.591 6.59-6.591 3.641 0 6.593 2.951 6.593 6.591zM224.414 100.2c0 3.754-3.044 6.797-6.798 6.797-3.755 0-6.797-3.043-6.797-6.797 0-3.753 3.042-6.797 6.797-6.797 3.754 0 6.798 3.044 6.798 6.797zM215.784 88.841c0 2.899-2.353 5.251-5.252 5.251-2.9 0-5.25-2.352-5.25-5.251 0-2.9 2.35-5.251 5.25-5.251 2.899 0 5.252 2.35 5.252 5.251zM222.744 78.338c0 3.145-2.55 5.693-5.694 5.693s-5.694-2.549-5.694-5.693c0-3.146 2.55-5.694 5.694-5.694s5.694 2.548 5.694 5.694zM211.705 72.627c0 1.816-1.472 3.288-3.288 3.288-1.817 0-3.29-1.472-3.29-3.288 0-1.816 1.473-3.29 3.29-3.29 1.816 0 3.288 1.473 3.288 3.29zM211.867 51.206c0 1.61-1.306 2.917-2.916 2.917-1.61 0-2.916-1.307-2.916-2.917 0-1.611 1.306-2.916 2.916-2.916 1.61 0 2.916 1.304 2.916 2.916zM220.113 46.708c0 2.276-1.846 4.121-4.121 4.121-2.277 0-4.122-1.845-4.122-4.121 0-2.276 1.845-4.121 4.122-4.121 2.275 0 4.121 1.844 4.121 4.121zM211.116 29.478c0 2.005-1.624 3.63-3.628 3.63-2.005 0-3.63-1.625-3.63-3.63 0-2.004 1.625-3.629 3.63-3.629 2.004 0 3.628 1.625 3.628 3.629zM227.304 244.086c0 2.936-2.381 5.313-5.316 5.313-2.937 0-5.315-2.378-5.315-5.313 0-2.937 2.379-5.316 5.315-5.316 2.935-.001 5.316 2.379 5.316 5.316zM227.374 232.346c0 2.82-2.288 5.108-5.108 5.108-2.818 0-5.105-2.288-5.105-5.108s2.287-5.105 5.105-5.105c2.82 0 5.108 2.285 5.108 5.105zM229.202 222.47c0 2.115-1.714 3.829-3.828 3.829-2.115 0-3.829-1.714-3.829-3.829s1.714-3.829 3.829-3.829c2.114 0 3.828 1.714 3.828 3.829zM233.348 208.418c0 3.281-2.658 5.939-5.938 5.939-3.281 0-5.939-2.658-5.939-5.939 0-3.28 2.658-5.941 5.939-5.941 3.28-.001 5.938 2.66 5.938 5.941zM233.542 193.913c0 2.866-2.324 5.19-5.19 5.19-2.866 0-5.19-2.324-5.19-5.19 0-2.866 2.324-5.19 5.19-5.19 2.866 0 5.19 2.324 5.19 5.19zM222.646 190.222c0 1.303-1.055 2.357-2.355 2.357s-2.354-1.055-2.354-2.357c0-1.299 1.054-2.354 2.354-2.354s2.355 1.056 2.355 2.354z"
              />
              <path
                fill="#00b800"
                d="M224.941 135.778c0 1.394-1.129 2.521-2.521 2.521s-2.522-1.128-2.522-2.521c0-1.392 1.13-2.521 2.522-2.521s2.521 1.13 2.521 2.521zM241.057 124.011c0 3.358-2.722 6.079-6.079 6.079-3.357 0-6.08-2.721-6.08-6.079 0-3.357 2.723-6.079 6.08-6.079s6.079 2.721 6.079 6.079zM232.98 111.145c0 1.81-1.467 3.277-3.276 3.277-1.809 0-3.278-1.468-3.278-3.277 0-1.809 1.469-3.276 3.278-3.276s3.276 1.466 3.276 3.276zM239.129 96.273c0 2.624-2.128 4.754-4.755 4.754-2.625 0-4.753-2.13-4.753-4.754 0-2.626 2.128-4.756 4.753-4.756 2.627.001 4.755 2.13 4.755 4.756zM229.071 92.134c0 2.265-1.837 4.102-4.102 4.102-2.268 0-4.102-1.837-4.102-4.102 0-2.266 1.834-4.102 4.102-4.102 2.265 0 4.102 1.836 4.102 4.102z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M230.52 76.579c0 1.826-1.479 3.305-3.305 3.305s-3.306-1.479-3.306-3.305c0-1.825 1.479-3.305 3.306-3.305 1.826 0 3.305 1.48 3.305 3.305zM228.024 66.799c0 3.114-2.524 5.64-5.64 5.64-3.116 0-5.641-2.525-5.641-5.64 0-3.115 2.525-5.641 5.641-5.641s5.64 2.525 5.64 5.641zM226.239 55.198c0 2.58-2.09 4.671-4.671 4.671-2.578 0-4.67-2.091-4.67-4.671 0-2.579 2.092-4.67 4.67-4.67 2.581 0 4.671 2.091 4.671 4.67zM232.741 45.055c0 3.087-2.501 5.59-5.589 5.59-3.088 0-5.589-2.503-5.589-5.59 0-3.086 2.501-5.589 5.589-5.589 3.088 0 5.589 2.503 5.589 5.589zM239.879 238.005c0 3.459-2.803 6.261-6.261 6.261-3.459 0-6.261-2.802-6.261-6.261 0-3.455 2.802-6.26 6.261-6.26s6.261 2.805 6.261 6.26zM237.182 226.765c0 2.022-1.639 3.661-3.661 3.661-2.022 0-3.662-1.639-3.662-3.661 0-2.022 1.64-3.662 3.662-3.662 2.022 0 3.661 1.64 3.661 3.662zM238.668 217.494c0 2.331-1.892 4.223-4.226 4.223-2.333 0-4.224-1.892-4.224-4.223 0-2.334 1.891-4.226 4.224-4.226 2.334 0 4.226 1.892 4.226 4.226zM244.015 201.195c0 3.186-2.582 5.767-5.768 5.767s-5.767-2.581-5.767-5.767c0-3.186 2.581-5.77 5.767-5.77 3.186 0 5.768 2.585 5.768 5.77zM244.752 189.629c0 2.558-2.072 4.632-4.631 4.632-2.558 0-4.63-2.074-4.63-4.632 0-2.556 2.072-4.63 4.63-4.63s4.631 2.074 4.631 4.63zM241.237 82.094c0 3.025-2.451 5.477-5.477 5.477-3.024 0-5.474-2.451-5.474-5.477 0-3.023 2.449-5.475 5.474-5.475 3.026.001 5.477 2.452 5.477 5.475zM240.911 69.414c0 3.265-2.646 5.911-5.91 5.911-3.266 0-5.912-2.646-5.912-5.911 0-3.266 2.646-5.912 5.912-5.912 3.263 0 5.91 2.646 5.91 5.912zM242.509 55.442c0 3.673-2.977 6.648-6.646 6.648-3.673 0-6.649-2.976-6.649-6.648 0-3.672 2.977-6.647 6.649-6.647 3.67 0 6.646 2.975 6.646 6.647zM250.949 226.035c0 3.442-2.792 6.234-6.234 6.234-3.445 0-6.237-2.792-6.237-6.234 0-3.446 2.792-6.238 6.237-6.238 3.442 0 6.234 2.792 6.234 6.238zM250.582 212.541c0 3.229-2.62 5.849-5.85 5.849-3.23 0-5.846-2.619-5.846-5.849s2.616-5.847 5.846-5.847 5.85 2.617 5.85 5.847zM252.655 201.725c0 2.018-1.636 3.654-3.653 3.654-2.021 0-3.655-1.637-3.655-3.654 0-2.021 1.635-3.654 3.655-3.654 2.017 0 3.653 1.634 3.653 3.654zM257.257 191.412c0 3.126-2.536 5.661-5.662 5.661-3.128 0-5.664-2.535-5.664-5.661 0-3.129 2.536-5.664 5.664-5.664 3.126 0 5.662 2.535 5.662 5.664z"
              />
              <path
                fill="#00b800"
                d="M256.308 100.137c0 3.1-2.511 5.612-5.612 5.612-3.099 0-5.612-2.513-5.612-5.612s2.514-5.612 5.612-5.612c3.101-.001 5.612 2.512 5.612 5.612z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M253.829 84.841c0 2.74-2.222 4.962-4.963 4.962-2.74 0-4.962-2.222-4.962-4.962 0-2.74 2.222-4.961 4.962-4.961 2.741 0 4.963 2.22 4.963 4.961zM252.207 73.398c0 2.925-2.372 5.296-5.296 5.296-2.925 0-5.296-2.371-5.296-5.296 0-2.924 2.371-5.294 5.296-5.294 2.924 0 5.296 2.37 5.296 5.294zM250.329 62.35c0 2.383-1.933 4.314-4.315 4.314-2.382 0-4.313-1.932-4.313-4.314s1.931-4.315 4.313-4.315c2.382 0 4.315 1.933 4.315 4.315zM258.806 216.017c0 2.065-1.674 3.738-3.738 3.738-2.065 0-3.739-1.673-3.739-3.738 0-2.064 1.674-3.739 3.739-3.739 2.064 0 3.738 1.675 3.738 3.739zM260.148 207.026c0 2.18-1.765 3.947-3.944 3.947-2.179 0-3.946-1.768-3.946-3.947 0-2.179 1.767-3.945 3.946-3.945 2.179 0 3.944 1.765 3.944 3.945zM266.789 187.734c0 2.425-1.963 4.388-4.386 4.388s-4.387-1.963-4.387-4.388c0-2.421 1.964-4.385 4.387-4.385 2.423 0 4.386 1.964 4.386 4.385z"
              />
              <path
                fill="#00b800"
                d="M270.214 91.99c0 3.357-2.723 6.08-6.081 6.08-3.357 0-6.08-2.723-6.08-6.08 0-3.358 2.723-6.081 6.08-6.081 3.359 0 6.081 2.723 6.081 6.081z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M261.127 77.482c0 2.306-1.868 4.175-4.174 4.175s-4.174-1.869-4.174-4.175c0-2.305 1.868-4.174 4.174-4.174s4.174 1.869 4.174 4.174zM254.35 66.602c0 1.1-.892 1.99-1.991 1.99-1.099 0-1.99-.891-1.99-1.99s.892-1.99 1.99-1.99c1.1 0 1.991.892 1.991 1.99zM267.462 198.676c0 2.803-2.271 5.075-5.074 5.075-2.804 0-5.075-2.272-5.075-5.075 0-2.802 2.271-5.074 5.075-5.074 2.803-.001 5.074 2.272 5.074 5.074zM275.959 175.413c0 3.484-2.825 6.309-6.31 6.309-3.483 0-6.308-2.824-6.308-6.309 0-3.485 2.824-6.309 6.308-6.309s6.31 2.824 6.31 6.309zM272.523 161.944c0 2.726-2.209 4.935-4.934 4.935-2.726 0-4.935-2.209-4.935-4.935 0-2.725 2.209-4.934 4.935-4.934 2.725 0 4.934 2.209 4.934 4.934zM276.661 151.342c0 2.719-2.204 4.923-4.923 4.923-2.718 0-4.922-2.204-4.922-4.923s2.204-4.921 4.922-4.921c2.719 0 4.923 2.202 4.923 4.921zM271.761 141.6c0 2.468-1.999 4.468-4.467 4.468-2.468 0-4.469-2-4.469-4.468s2.001-4.468 4.469-4.468c2.468 0 4.467 2.001 4.467 4.468zM277.88 122.623c0 3.533-2.864 6.396-6.396 6.396s-6.396-2.862-6.396-6.396c0-3.531 2.863-6.395 6.396-6.395 3.532 0 6.396 2.864 6.396 6.395zM275.041 109.938c0 2.72-2.203 4.924-4.924 4.924-2.72 0-4.925-2.204-4.925-4.924s2.205-4.925 4.925-4.925c2.72 0 4.924 2.205 4.924 4.925zM278.009 166.62c0 1.499-1.215 2.714-2.714 2.714-1.499 0-2.713-1.215-2.713-2.714 0-1.497 1.214-2.712 2.713-2.712s2.714 1.215 2.714 2.712zM279.732 142.97c0 1.844-1.495 3.339-3.339 3.339-1.845 0-3.339-1.495-3.339-3.339 0-1.844 1.494-3.339 3.339-3.339 1.844.001 3.339 1.496 3.339 3.339zM278.95 134.2c0 2.366-1.917 4.283-4.282 4.283s-4.283-1.917-4.283-4.283c0-2.365 1.918-4.282 4.283-4.282s4.282 1.917 4.282 4.282zM19.295 119.567c0 1.891-1.533 3.424-3.423 3.424-1.891 0-3.424-1.533-3.424-3.424 0-1.892 1.533-3.424 3.424-3.424 1.89 0 3.423 1.533 3.423 3.424zM36.402 73.121c0 1.447-1.174 2.619-2.62 2.619-1.445 0-2.619-1.172-2.619-2.619 0-1.446 1.174-2.62 2.619-2.62 1.447 0 2.62 1.174 2.62 2.62zM39.112 203.841c0 1.464-1.187 2.652-2.65 2.652-1.465 0-2.652-1.188-2.652-2.652 0-1.465 1.188-2.65 2.652-2.65 1.464-.001 2.65 1.185 2.65 2.65zM41.557 87.213c0 1.255-1.017 2.27-2.27 2.27-1.253 0-2.27-1.015-2.27-2.27 0-1.253 1.017-2.269 2.27-2.269 1.253 0 2.27 1.016 2.27 2.269zM48.383 129.198c0 1.682-1.363 3.045-3.046 3.045-1.682 0-3.046-1.363-3.046-3.045 0-1.684 1.364-3.047 3.046-3.047 1.683 0 3.046 1.363 3.046 3.047zM47.509 81.777c0 1.335-1.084 2.417-2.419 2.417-1.336 0-2.418-1.082-2.418-2.417 0-1.336 1.082-2.418 2.418-2.418 1.335 0 2.419 1.082 2.419 2.418zM52.114 116.178c0 1.456-1.181 2.636-2.636 2.636-1.456 0-2.637-1.18-2.637-2.636 0-1.455 1.181-2.635 2.637-2.635 1.456.001 2.636 1.18 2.636 2.635zM53.345 123.529c0 1.71-1.386 3.096-3.096 3.096-1.71 0-3.096-1.386-3.096-3.096 0-1.71 1.386-3.097 3.096-3.097 1.71 0 3.096 1.387 3.096 3.097zM53.28 68.765c0 1.589-1.287 2.877-2.876 2.877s-2.875-1.288-2.875-2.877c0-1.588 1.286-2.876 2.875-2.876s2.876 1.288 2.876 2.876zM60.483 242.776c0 1.865-1.513 3.381-3.381 3.381-1.866 0-3.38-1.516-3.38-3.381 0-1.868 1.514-3.382 3.38-3.382 1.868 0 3.381 1.514 3.381 3.382z"
              />
              <path
                fill="#00b800"
                d="M72.303 102.563c0 2.111-1.711 3.821-3.821 3.821-2.111 0-3.82-1.71-3.82-3.821 0-2.11 1.709-3.821 3.82-3.821 2.11 0 3.821 1.711 3.821 3.821z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M71.483 38.403c0 1.936-1.57 3.506-3.505 3.506-1.936 0-3.505-1.57-3.505-3.506 0-1.936 1.569-3.505 3.505-3.505 1.935 0 3.505 1.57 3.505 3.505zM71.262 60.983c0 1.254-1.017 2.271-2.27 2.271-1.255 0-2.271-1.017-2.271-2.271s1.016-2.27 2.271-2.27c1.253.001 2.27 1.016 2.27 2.27zM73.624 254.821c0 1.312-1.062 2.373-2.371 2.373-1.312 0-2.373-1.061-2.373-2.373 0-1.31 1.062-2.372 2.373-2.372 1.31 0 2.371 1.062 2.371 2.372z"
              />
              <path
                fill="#00b800"
                d="M76.927 98.545c0 1.242-1.006 2.248-2.248 2.248-1.241 0-2.247-1.006-2.247-2.248 0-1.241 1.006-2.247 2.247-2.247 1.242 0 2.248 1.006 2.248 2.247zM78.424 153.195c0 1.337-1.085 2.42-2.421 2.42-1.338 0-2.421-1.083-2.421-2.42s1.083-2.422 2.421-2.422c1.336 0 2.421 1.085 2.421 2.422z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M77.208 32.182c0 1.255-1.016 2.273-2.271 2.273s-2.273-1.019-2.273-2.273c0-1.254 1.018-2.272 2.273-2.272 1.255 0 2.271 1.017 2.271 2.272zM82.677 237.509c0 2.107-1.709 3.816-3.817 3.816-2.107 0-3.817-1.709-3.817-3.816 0-2.107 1.71-3.818 3.817-3.818 2.108-.001 3.817 1.71 3.817 3.818zM82.685 128.815c0 1.597-1.295 2.892-2.892 2.892s-2.891-1.295-2.891-2.892 1.294-2.891 2.891-2.891 2.892 1.294 2.892 2.891zM86.676 215.538c0 1.649-1.336 2.985-2.985 2.985-1.646 0-2.982-1.336-2.982-2.985 0-1.646 1.336-2.982 2.982-2.982 1.649-.001 2.985 1.335 2.985 2.982z"
              />
              <path
                fill="#00b800"
                d="M88.978 160.039c0 1.317-1.066 2.384-2.383 2.384s-2.386-1.066-2.386-2.384c0-1.318 1.068-2.385 2.386-2.385 1.316 0 2.383 1.068 2.383 2.385z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M94.822 252.469c0 1.196-.97 2.166-2.165 2.166-1.197 0-2.166-.97-2.166-2.166 0-1.197.969-2.167 2.166-2.167 1.196 0 2.165.97 2.165 2.167zM96.853 85.839c0 1.264-1.023 2.286-2.285 2.286-1.264 0-2.287-1.022-2.287-2.286s1.023-2.286 2.287-2.286c1.261-.001 2.285 1.022 2.285 2.286zM105.258 269.121c0 1.873-1.519 3.392-3.392 3.392s-3.392-1.519-3.392-3.392c0-1.874 1.519-3.392 3.392-3.392s3.392 1.518 3.392 3.392zM97.533 119.141c0 1.272-1.03 2.303-2.305 2.303-1.271 0-2.303-1.03-2.303-2.303s1.032-2.305 2.303-2.305c1.275.001 2.305 1.033 2.305 2.305zM107.827 153.782c0 2.27-1.84 4.111-4.11 4.111-2.271 0-4.111-1.842-4.111-4.111 0-2.271 1.84-4.11 4.111-4.11 2.27 0 4.11 1.839 4.11 4.11zM103.09 116.617c0 1.293-1.047 2.342-2.342 2.342-1.292 0-2.34-1.049-2.34-2.342 0-1.293 1.048-2.34 2.34-2.34 1.295 0 2.342 1.047 2.342 2.34zM106.032 261.812c0 1.444-1.169 2.612-2.61 2.612-1.441 0-2.609-1.168-2.609-2.612 0-1.44 1.168-2.609 2.609-2.609s2.61 1.169 2.61 2.609z"
              />
              <path
                fill="#00b800"
                d="M114.268 225.922c0 2.316-1.876 4.192-4.19 4.192-2.315 0-4.191-1.876-4.191-4.192 0-2.312 1.876-4.188 4.191-4.188 2.314-.001 4.19 1.875 4.19 4.188zM112.203 98.488c0 1.35-1.093 2.445-2.444 2.445s-2.444-1.096-2.444-2.445c0-1.351 1.094-2.445 2.444-2.445 1.351 0 2.444 1.095 2.444 2.445z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M109.242 39.324c0 1.543-1.25 2.793-2.794 2.793s-2.795-1.25-2.795-2.793c0-1.544 1.251-2.795 2.795-2.795s2.794 1.251 2.794 2.795zM114.119 81.6c0 1.543-1.251 2.794-2.792 2.794-1.544 0-2.795-1.251-2.795-2.794 0-1.542 1.251-2.793 2.795-2.793 1.541 0 2.792 1.251 2.792 2.793z"
              />
              <path
                fill="#00b800"
                d="M126.733 97.7c0 1.271-1.031 2.302-2.302 2.302-1.271 0-2.301-1.031-2.301-2.302 0-1.271 1.029-2.302 2.301-2.302 1.271 0 2.302 1.031 2.302 2.302z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M131.398 274.609c0 2.192-1.777 3.971-3.972 3.971-2.193 0-3.972-1.778-3.972-3.971 0-2.195 1.778-3.973 3.972-3.973s3.972 1.778 3.972 3.973zM127.227 24.357c0 1.533-1.243 2.777-2.777 2.777-1.535 0-2.778-1.244-2.778-2.777 0-1.535 1.243-2.778 2.778-2.778 1.533 0 2.777 1.243 2.777 2.778zM130.72 220.44c0 1.336-1.083 2.419-2.419 2.419-1.337 0-2.42-1.083-2.42-2.419 0-1.335 1.083-2.419 2.42-2.419 1.336 0 2.419 1.084 2.419 2.419z"
              />
              <path
                fill="#00b800"
                d="M136.397 195.188c0 1.331-1.081 2.411-2.414 2.411-1.333 0-2.414-1.08-2.414-2.411 0-1.333 1.081-2.413 2.414-2.413 1.333 0 2.414 1.079 2.414 2.413z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M138.683 68.445c0 1.428-1.158 2.586-2.586 2.586s-2.586-1.158-2.586-2.586c0-1.427 1.158-2.585 2.586-2.585s2.586 1.158 2.586 2.585zM144.488 259.924c0 1.23-.996 2.226-2.227 2.226-1.229 0-2.225-.995-2.225-2.226 0-1.228.996-2.226 2.225-2.226 1.231 0 2.227.998 2.227 2.226z"
              />
              <path
                fill="#00b800"
                d="M147.907 99.562c0 1.302-1.058 2.358-2.359 2.358-1.303 0-2.36-1.057-2.36-2.358 0-1.304 1.058-2.359 2.36-2.359 1.302-.001 2.359 1.055 2.359 2.359z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M148.675 36.793c0 1.748-1.417 3.165-3.166 3.165-1.747 0-3.165-1.417-3.165-3.165s1.418-3.165 3.165-3.165c1.749 0 3.166 1.417 3.166 3.165zM154.551 77.746c0 1.395-1.131 2.525-2.526 2.525-1.395 0-2.523-1.131-2.523-2.525s1.129-2.524 2.523-2.524c1.395-.001 2.526 1.13 2.526 2.524z"
              />
              <path
                fill="#00b800"
                d="M159.654 195.826c0 1.273-1.033 2.306-2.308 2.306-1.273 0-2.306-1.032-2.306-2.306s1.032-2.309 2.306-2.309c1.275.001 2.308 1.035 2.308 2.309z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M158.912 212.303c0 .988-.802 1.791-1.791 1.791-.988 0-1.791-.803-1.791-1.791 0-.988.803-1.791 1.791-1.791.989 0 1.791.803 1.791 1.791zM165.015 242.454c0 1.127-.915 2.043-2.043 2.043-1.127 0-2.042-.916-2.042-2.043 0-1.127.915-2.043 2.042-2.043 1.128 0 2.043.916 2.043 2.043zM165.041 84.424c0 1.281-1.039 2.321-2.32 2.321-1.282 0-2.321-1.04-2.321-2.321 0-1.281 1.039-2.321 2.321-2.321 1.281-.001 2.32 1.039 2.32 2.321zM171.495 24.811c0 1.293-1.05 2.341-2.343 2.341s-2.342-1.048-2.342-2.341c0-1.295 1.049-2.344 2.342-2.344 1.293 0 2.343 1.049 2.343 2.344zM174.69 263.683c0 1.335-1.083 2.419-2.418 2.419-1.336 0-2.419-1.084-2.419-2.419 0-1.336 1.083-2.419 2.419-2.419 1.335 0 2.418 1.083 2.418 2.419zM176.788 41.165c0 1.868-1.516 3.383-3.384 3.383-1.868 0-3.383-1.515-3.383-3.383s1.515-3.382 3.383-3.382 3.384 1.514 3.384 3.382z"
              />
              <path
                fill="#00b800"
                d="M178.756 219.557c0 1.312-1.062 2.375-2.374 2.375-1.311 0-2.373-1.063-2.373-2.375 0-1.311 1.062-2.373 2.373-2.373 1.312 0 2.374 1.062 2.374 2.373z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M181.962 58.938c0 1.115-.905 2.021-2.021 2.021-1.117 0-2.021-.906-2.021-2.021 0-1.117.904-2.022 2.021-2.022 1.115 0 2.021.905 2.021 2.022zM185.184 252.879c0 1.181-.959 2.141-2.141 2.141s-2.139-.96-2.139-2.141c0-1.182.957-2.139 2.139-2.139s2.141.957 2.141 2.139zM188.978 165.022c0 1.254-1.017 2.271-2.271 2.271-1.253 0-2.27-1.017-2.27-2.271 0-1.255 1.017-2.271 2.27-2.271 1.255 0 2.271 1.016 2.271 2.271zM189.492 35.104c0 1.185-.963 2.146-2.148 2.146s-2.146-.962-2.146-2.146c0-1.187.961-2.147 2.146-2.147s2.148.961 2.148 2.147zM194.472 243.826c0 1.446-1.172 2.619-2.618 2.619-1.447 0-2.62-1.173-2.62-2.619 0-1.446 1.173-2.62 2.62-2.62 1.446 0 2.618 1.174 2.618 2.62zM196.467 234.225c0 1.425-1.152 2.578-2.578 2.578-1.424 0-2.578-1.153-2.578-2.578 0-1.423 1.154-2.579 2.578-2.579 1.426 0 2.578 1.156 2.578 2.579zM197.337 21.891c0 1.091-.884 1.977-1.977 1.977-1.091 0-1.975-.886-1.975-1.977 0-1.091.884-1.975 1.975-1.975 1.094.001 1.977.885 1.977 1.975zM209.824 97.002c0 1.101-.893 1.995-1.997 1.995-1.101 0-1.994-.895-1.994-1.995 0-1.103.894-1.997 1.994-1.997 1.104 0 1.997.894 1.997 1.997zM211.417 230.543c0 1.292-1.046 2.339-2.336 2.339-1.292 0-2.34-1.047-2.34-2.339s1.048-2.339 2.34-2.339c1.29 0 2.336 1.047 2.336 2.339zM214.353 198.4c0 1.215-.986 2.2-2.2 2.2-1.216 0-2.201-.985-2.201-2.2 0-1.214.985-2.199 2.201-2.199 1.214 0 2.2.985 2.2 2.199zM215.356 66.934c0 1.419-1.149 2.569-2.57 2.569-1.418 0-2.568-1.15-2.568-2.569s1.15-2.57 2.568-2.57c1.421 0 2.57 1.151 2.57 2.57zM217.207 60.378c0 1.576-1.277 2.854-2.854 2.854-1.577 0-2.854-1.278-2.854-2.854s1.277-2.854 2.854-2.854c1.577 0 2.854 1.277 2.854 2.854zM222.484 36.841c0 2.496-2.023 4.52-4.52 4.52-2.497 0-4.52-2.023-4.52-4.52 0-2.497 2.023-4.52 4.52-4.52 2.497 0 4.52 2.023 4.52 4.52zM222.265 253.642c0 1.817-1.472 3.289-3.287 3.289s-3.286-1.472-3.286-3.289c0-1.813 1.471-3.286 3.286-3.286s3.287 1.473 3.287 3.286zM222.106 214.437c0 1.621-1.315 2.934-2.937 2.934-1.622 0-2.934-1.312-2.934-2.934s1.312-2.937 2.934-2.937 2.937 1.316 2.937 2.937z"
              />
              <path
                fill="#00b800"
                d="M229.096 129.526c0 1.785-1.446 3.232-3.23 3.232s-3.23-1.447-3.23-3.232c0-1.784 1.446-3.23 3.23-3.23s3.23 1.446 3.23 3.23z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M228.942 83.305c0 1.163-.943 2.104-2.105 2.104-1.161 0-2.104-.941-2.104-2.104 0-1.162.943-2.104 2.104-2.104 1.162 0 2.105.942 2.105 2.104z"
              />
              <path
                fill="#00b800"
                d="M236.078 104.948c0 1.448-1.172 2.62-2.619 2.62-1.447 0-2.621-1.172-2.621-2.62 0-1.447 1.174-2.62 2.621-2.62s2.619 1.173 2.619 2.62zM245.694 94.375c0 1.462-1.187 2.648-2.647 2.648-1.462 0-2.648-1.187-2.648-2.648 0-1.463 1.187-2.647 2.648-2.647 1.46 0 2.647 1.184 2.647 2.647z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M270.864 192.69c0 1.24-1.007 2.247-2.247 2.247s-2.245-1.007-2.245-2.247 1.005-2.243 2.245-2.243c1.24 0 2.247 1.003 2.247 2.243zM273.259 185.704c0 1.493-1.21 2.702-2.701 2.702s-2.7-1.209-2.7-2.702c0-1.489 1.209-2.699 2.7-2.699s2.701 1.21 2.701 2.699zM278.881 159.289c0 1.504-1.22 2.722-2.723 2.722s-2.72-1.218-2.72-2.722c0-1.503 1.217-2.721 2.72-2.721 1.503 0 2.723 1.218 2.723 2.721zM63.415 237.457c0 1.155-.938 2.092-2.094 2.092s-2.092-.937-2.092-2.092c0-1.158.937-2.095 2.092-2.095s2.094.937 2.094 2.095zM73.027 76.084c0 1.103-.894 1.995-1.997 1.995-1.102 0-1.997-.893-1.997-1.995 0-1.104.896-1.997 1.997-1.997 1.104 0 1.997.893 1.997 1.997zM90.133 265.021c0 1.073-.87 1.943-1.944 1.943-1.073 0-1.943-.87-1.943-1.943s.87-1.942 1.943-1.942c1.074 0 1.944.869 1.944 1.942z"
              />
              <path
                fill="#00b800"
                d="M216.781 178.211c0 1.143-.928 2.07-2.071 2.07-1.143 0-2.068-.928-2.068-2.07 0-1.144.926-2.07 2.068-2.07 1.143 0 2.071.926 2.071 2.07z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M216.862 191.821c0 .932-.757 1.688-1.688 1.688-.934 0-1.689-.756-1.689-1.688 0-.935.756-1.69 1.689-1.69.931 0 1.688.755 1.688 1.69zM161.148 105.228c0 2.381-1.931 4.312-4.313 4.312-2.38 0-4.31-1.932-4.31-4.312 0-2.38 1.93-4.312 4.31-4.312 2.382.001 4.313 1.931 4.313 4.312zM23.791 168.169c0 3.161-2.562 5.725-5.723 5.725s-5.723-2.563-5.723-5.725c0-3.162 2.562-5.724 5.723-5.724s5.723 2.563 5.723 5.724zM56.28 173.785c0 3.193-2.589 5.782-5.782 5.782s-5.781-2.589-5.781-5.782 2.588-5.782 5.781-5.782c3.193 0 5.782 2.589 5.782 5.782zM51.942 160.376c0 1.234-1 2.234-2.234 2.234-1.232 0-2.23-1-2.23-2.234 0-1.232.998-2.232 2.23-2.232 1.234-.001 2.234.999 2.234 2.232zM85.49 185.568c0 2.602-2.108 4.709-4.71 4.709-2.601 0-4.709-2.107-4.709-4.709 0-2.602 2.108-4.709 4.709-4.709 2.602 0 4.71 2.108 4.71 4.709z"
              />
              <path
                fill="#00b800"
                d="M100.199 196.217c0 3.384-2.743 6.127-6.127 6.127s-6.127-2.743-6.127-6.127 2.743-6.127 6.127-6.127 6.127 2.743 6.127 6.127zM110.091 189.885c0 2.369-1.92 4.292-4.289 4.292-2.37 0-4.291-1.923-4.291-4.292 0-2.37 1.921-4.29 4.291-4.29 2.369 0 4.289 1.92 4.289 4.29zM100.451 187.924c0 1.078-.874 1.953-1.955 1.953-1.078 0-1.954-.875-1.954-1.953 0-1.081.876-1.956 1.954-1.956 1.081 0 1.955.875 1.955 1.956z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M111.551 176.746c0 2.721-2.208 4.926-4.929 4.926-2.722 0-4.93-2.205-4.93-4.926 0-2.723 2.208-4.93 4.93-4.93 2.721 0 4.929 2.207 4.929 4.93zM120.633 171.905c0 2.431-1.97 4.402-4.401 4.402s-4.401-1.972-4.401-4.402 1.97-4.401 4.401-4.401 4.401 1.971 4.401 4.401zM131.193 164.013c0 3.322-2.692 6.015-6.015 6.015-3.323 0-6.017-2.692-6.017-6.015 0-3.323 2.693-6.017 6.017-6.017 3.323.001 6.015 2.695 6.015 6.017zM127.425 152.469c0 2.438-1.974 4.412-4.41 4.412-2.438 0-4.411-1.975-4.411-4.412 0-2.436 1.974-4.41 4.411-4.41 2.436 0 4.41 1.975 4.41 4.41z"
              />
              <path
                fill="#00b800"
                d="M93.88 186.945c0 1.078-.874 1.953-1.953 1.953-1.078 0-1.953-.875-1.953-1.953s.875-1.953 1.953-1.953c1.079 0 1.953.875 1.953 1.953z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M133.004 155.804c0 1.331-1.078 2.409-2.409 2.409-1.33 0-2.408-1.078-2.408-2.409 0-1.33 1.078-2.408 2.408-2.408 1.331 0 2.409 1.078 2.409 2.408zM116.062 179.101c0 .911-.738 1.649-1.649 1.649s-1.649-.738-1.649-1.649c0-.912.738-1.65 1.649-1.65s1.649.738 1.649 1.65zM67.683 163.057c0 4.074-3.305 7.377-7.379 7.377-4.075 0-7.379-3.303-7.379-7.377s3.304-7.379 7.379-7.379c4.074 0 7.379 3.305 7.379 7.379z"
              />
              <path
                fill="#00b800"
                d="M73.273 121.304c0 4.547-3.687 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.548 3.688-8.234 8.234-8.234 4.548-.001 8.234 3.686 8.234 8.234z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M73.887 176.531c0 3.551-2.879 6.428-6.429 6.428-3.551 0-6.428-2.877-6.428-6.428 0-3.55 2.877-6.427 6.428-6.427 3.55 0 6.429 2.877 6.429 6.427z"
              />
              <path
                fill="#00b800"
                d="M74.149 140.26c0 2.195-1.779 3.975-3.975 3.975-2.194 0-3.975-1.779-3.975-3.975s1.78-3.975 3.975-3.975c2.196 0 3.975 1.779 3.975 3.975zM78.971 131.588c0 2.442-1.979 4.421-4.421 4.421s-4.421-1.979-4.421-4.421c0-2.44 1.979-4.42 4.421-4.42 2.441 0 4.421 1.979 4.421 4.42z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M78.006 108.496c0 2.809-2.277 5.086-5.086 5.086-2.81 0-5.087-2.277-5.087-5.086 0-2.81 2.277-5.087 5.087-5.087 2.809 0 5.086 2.277 5.086 5.087z"
              />
              <path
                fill="#00b800"
                d="M84.294 140.255c0 2.407-1.95 4.357-4.357 4.357s-4.357-1.95-4.357-4.357 1.95-4.358 4.357-4.358 4.357 1.951 4.357 4.358zM88.722 101.947c0 3.064-2.483 5.548-5.547 5.548-3.064 0-5.548-2.483-5.548-5.548 0-3.063 2.483-5.548 5.548-5.548 3.063 0 5.547 2.485 5.547 5.548z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M94.506 140.055c0 2.186-1.773 3.959-3.959 3.959-2.187 0-3.959-1.773-3.959-3.959 0-2.187 1.772-3.959 3.959-3.959 2.186 0 3.959 1.773 3.959 3.959zM87.628 134.321c0 1.592-1.292 2.882-2.883 2.882-1.593 0-2.882-1.29-2.882-2.882s1.289-2.882 2.882-2.882c1.591 0 2.883 1.29 2.883 2.882zM85.732 108.11c0 1.771-1.437 3.207-3.207 3.207-1.772 0-3.209-1.436-3.209-3.207s1.437-3.208 3.209-3.208c1.77 0 3.207 1.437 3.207 3.208zM104.848 143.919c0 2.702-2.191 4.894-4.895 4.894-2.702 0-4.893-2.191-4.893-4.894 0-2.703 2.19-4.894 4.893-4.894s4.895 2.191 4.895 4.894z"
              />
              <path
                fill="#00b800"
                d="M105.945 98.843c0 3.352-2.717 6.067-6.069 6.067s-6.068-2.716-6.068-6.067 2.717-6.068 6.068-6.068c3.353-.001 6.069 2.716 6.069 6.068z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M114.74 146.524c0 2.43-1.97 4.397-4.399 4.397-2.429 0-4.397-1.968-4.397-4.397 0-2.429 1.969-4.398 4.397-4.398 2.43 0 4.399 1.969 4.399 4.398z"
              />
              <path
                fill="#00b800"
                d="M124.371 105.656c0 3.769-3.055 6.823-6.823 6.823-3.767 0-6.822-3.055-6.822-6.823 0-3.768 3.056-6.823 6.822-6.823 3.768 0 6.823 3.055 6.823 6.823z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M125.42 141.911c0 2.867-2.326 5.192-5.192 5.192-2.869 0-5.192-2.325-5.192-5.192 0-2.868 2.323-5.191 5.192-5.191 2.866-.001 5.192 2.323 5.192 5.191z"
              />
              <path
                fill="#00b800"
                d="M127.782 114.008c0 1.624-1.318 2.939-2.941 2.939-1.624 0-2.938-1.315-2.938-2.939s1.314-2.94 2.938-2.94c1.623-.001 2.941 1.316 2.941 2.94zM141.751 124.722c0 2.907-2.358 5.266-5.267 5.266-2.907 0-5.266-2.358-5.266-5.266 0-2.909 2.358-5.267 5.266-5.267 2.909 0 5.267 2.357 5.267 5.267z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M90.437 100.51c0 1.131-.918 2.048-2.049 2.048-1.131 0-2.048-.917-2.048-2.048 0-1.132.917-2.049 2.048-2.049s2.049.918 2.049 2.049zM105.885 102.843c0 1.499-1.215 2.714-2.713 2.714-1.499 0-2.714-1.215-2.714-2.714 0-1.499 1.215-2.713 2.714-2.713 1.498 0 2.713 1.213 2.713 2.713z"
              />
              <path
                fill="#00b800"
                d="M134.147 116.799c0 1.553-1.258 2.811-2.811 2.811s-2.812-1.258-2.812-2.811c0-1.554 1.259-2.812 2.812-2.812s2.811 1.258 2.811 2.812z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M25.634 180.439c0 2.941-2.386 5.327-5.328 5.327-2.943 0-5.329-2.386-5.329-5.327 0-2.942 2.386-5.327 5.329-5.327 2.942 0 5.328 2.385 5.328 5.327zM28.996 152.409c0 1.955-1.583 3.54-3.538 3.54-1.955 0-3.539-1.585-3.539-3.54 0-1.954 1.584-3.539 3.539-3.539s3.538 1.585 3.538 3.539zM36.558 170.66c0 3.214-2.605 5.819-5.819 5.819s-5.817-2.605-5.817-5.819 2.604-5.819 5.817-5.819 5.819 2.605 5.819 5.819zM40.448 144.334c0 3.479-2.821 6.302-6.3 6.302-3.48 0-6.302-2.822-6.302-6.302 0-3.48 2.821-6.301 6.302-6.301 3.479 0 6.3 2.821 6.3 6.301zM40.573 131.401c0 2.828-2.293 5.121-5.12 5.121-2.828 0-5.122-2.293-5.122-5.121 0-2.829 2.294-5.121 5.122-5.121 2.827 0 5.12 2.292 5.12 5.121zM40.811 107.244c0 3.649-2.96 6.607-6.608 6.607-3.648 0-6.608-2.958-6.608-6.607s2.96-6.607 6.608-6.607c3.648 0 6.608 2.957 6.608 6.607zM28.536 160.694c0 1.828-1.482 3.309-3.31 3.309s-3.309-1.48-3.309-3.309c0-1.827 1.481-3.309 3.309-3.309s3.31 1.482 3.31 3.309zM30.097 135.979c0 2.087-1.692 3.777-3.779 3.777-2.087 0-3.777-1.69-3.777-3.777s1.69-3.778 3.777-3.778 3.779 1.691 3.779 3.778zM26.638 145.759c0 1.007-.815 1.822-1.821 1.822s-1.822-.815-1.822-1.822c0-1.006.816-1.821 1.822-1.821 1.006 0 1.821.815 1.821 1.821zM30.949 182.93c0 1.166-.946 2.112-2.113 2.112s-2.114-.946-2.114-2.112c0-1.168.947-2.115 2.114-2.115 1.167 0 2.113.947 2.113 2.115zM38.271 157.1c0 2.524-2.046 4.57-4.57 4.57-2.524 0-4.57-2.046-4.57-4.57 0-2.524 2.046-4.57 4.57-4.57 2.524 0 4.57 2.046 4.57 4.57z"
              />
              <path
                fill="#00b800"
                d="M49.599 102.671c0 2.018-1.636 3.653-3.653 3.653-2.017 0-3.653-1.636-3.653-3.653 0-2.017 1.636-3.653 3.653-3.653 2.017 0 3.653 1.636 3.653 3.653zM164.917 142.757c0 2.065-1.674 3.739-3.739 3.739-2.063 0-3.738-1.674-3.738-3.739 0-2.064 1.675-3.738 3.738-3.738 2.065 0 3.739 1.673 3.739 3.738zM156.476 144.96c0 1.094-.888 1.981-1.981 1.981s-1.981-.888-1.981-1.981.888-1.98 1.981-1.98 1.981.886 1.981 1.98zM168.637 125.611c0 3.023-2.452 5.475-5.476 5.475s-5.474-2.451-5.474-5.475c0-3.024 2.45-5.475 5.474-5.475s5.476 2.452 5.476 5.475z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M176.688 136.92c0 3.339-2.706 6.044-6.045 6.044s-6.044-2.705-6.044-6.044c0-3.339 2.705-6.045 6.044-6.045 3.339 0 6.045 2.706 6.045 6.045z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M179.885 120.581c0 3.722-3.016 6.737-6.735 6.737-3.721 0-6.736-3.016-6.736-6.737 0-3.719 3.016-6.736 6.736-6.736 3.72-.001 6.735 3.017 6.735 6.736z"
              />
              <path
                fill="#00b800"
                d="M173.542 114.046c0 2.515-2.037 4.554-4.553 4.554s-4.554-2.039-4.554-4.554 2.038-4.553 4.554-4.553c2.516 0 4.553 2.038 4.553 4.553zM177.714 103.242c0 2.986-2.421 5.406-5.407 5.406s-5.408-2.42-5.408-5.406c0-2.987 2.422-5.407 5.408-5.407s5.407 2.42 5.407 5.407zM182.245 112.306c0 2.083-1.689 3.771-3.772 3.771-2.082 0-3.771-1.688-3.771-3.771s1.689-3.771 3.771-3.771c2.082-.001 3.772 1.688 3.772 3.771zM188.032 104.204c0 2.471-2.003 4.476-4.475 4.476-2.473 0-4.478-2.005-4.478-4.476 0-2.474 2.005-4.477 4.478-4.477 2.472.001 4.475 2.003 4.475 4.477zM162.776 134.858c0 1.634-1.323 2.958-2.957 2.958s-2.959-1.324-2.959-2.958c0-1.634 1.325-2.958 2.959-2.958 1.634 0 2.957 1.325 2.957 2.958z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M153.328 135.699c0 1.288-1.045 2.332-2.334 2.332-1.288 0-2.333-1.044-2.333-2.332 0-1.289 1.045-2.334 2.333-2.334 1.289 0 2.334 1.045 2.334 2.334zM153.299 185.383c0 3.145-2.548 5.692-5.69 5.692-3.144 0-5.692-2.548-5.692-5.692 0-3.142 2.548-5.689 5.692-5.689 3.143-.001 5.69 2.547 5.69 5.689z"
              />
              <path
                fill="#00b800"
                d="M159.284 166.283c0 3.031-2.457 5.488-5.488 5.488-3.031 0-5.49-2.457-5.49-5.488 0-3.031 2.458-5.489 5.49-5.489s5.488 2.458 5.488 5.489zM165.448 189.979c0 2.041-1.654 3.695-3.696 3.695-2.041 0-3.695-1.654-3.695-3.695 0-2.04 1.654-3.695 3.695-3.695s3.696 1.655 3.696 3.695zM163.383 180.559c0 2.46-1.993 4.455-4.453 4.455-2.459 0-4.453-1.995-4.453-4.455 0-2.458 1.994-4.452 4.453-4.452 2.46-.001 4.453 1.994 4.453 4.452z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M165.778 167.599c0 2.673-2.167 4.84-4.839 4.84-2.674 0-4.84-2.167-4.84-4.84s2.166-4.839 4.84-4.839c2.672 0 4.839 2.167 4.839 4.839zM165.543 149.129c0 2.808-2.274 5.083-5.082 5.083s-5.085-2.275-5.085-5.083c0-2.808 2.277-5.084 5.085-5.084s5.082 2.276 5.082 5.084zM173.075 179.851c0 3.267-2.648 5.917-5.916 5.917-3.269 0-5.917-2.65-5.917-5.917 0-3.268 2.648-5.916 5.917-5.916 3.267 0 5.916 2.649 5.916 5.916zM175.491 169.113c0 2.35-1.904 4.254-4.254 4.254-2.349 0-4.253-1.904-4.253-4.254 0-2.349 1.904-4.253 4.253-4.253 2.35 0 4.254 1.904 4.254 4.253zM172.845 157.911c0 2.765-2.24 5.006-5.005 5.006-2.764 0-5.005-2.241-5.005-5.006s2.241-5.005 5.005-5.005c2.765 0 5.005 2.24 5.005 5.005zM177.112 147.219c0 2.838-2.301 5.14-5.139 5.14-2.84 0-5.142-2.302-5.142-5.14 0-2.84 2.302-5.141 5.142-5.141 2.838.001 5.139 2.302 5.139 5.141zM183.908 161.396c0 2.842-2.302 5.144-5.144 5.144-2.841 0-5.143-2.302-5.143-5.144 0-2.841 2.302-5.143 5.143-5.143 2.842.001 5.144 2.302 5.144 5.143zM185.486 152.183c0 1.85-1.498 3.35-3.35 3.35-1.851 0-3.35-1.5-3.35-3.35 0-1.851 1.499-3.351 3.35-3.351 1.852.001 3.35 1.501 3.35 3.351zM188.491 142.343c0 2.837-2.301 5.137-5.138 5.137-2.837 0-5.138-2.3-5.138-5.137 0-2.838 2.301-5.137 5.138-5.137 2.837 0 5.138 2.299 5.138 5.137zM183.007 132.68c0 2.342-1.898 4.24-4.239 4.24-2.342 0-4.24-1.898-4.24-4.24 0-2.342 1.898-4.239 4.24-4.239 2.341 0 4.239 1.898 4.239 4.239zM193.878 114.567c0 3.848-3.118 6.966-6.965 6.966-3.848 0-6.966-3.118-6.966-6.966 0-3.847 3.118-6.965 6.966-6.965 3.847 0 6.965 3.118 6.965 6.965zM197.893 146.835c0 2.411-1.954 4.365-4.365 4.365-2.411 0-4.365-1.954-4.365-4.365 0-2.411 1.954-4.365 4.365-4.365 2.411 0 4.365 1.954 4.365 4.365zM196.648 131.968c0 3.392-2.748 6.142-6.14 6.142-3.392 0-6.142-2.75-6.142-6.142 0-3.391 2.75-6.14 6.142-6.14 3.392 0 6.14 2.75 6.14 6.14zM200.101 122.323c0 2.095-1.698 3.793-3.793 3.793s-3.793-1.698-3.793-3.793 1.698-3.791 3.793-3.791 3.793 1.696 3.793 3.791z"
              />
              <path
                fill="#00b800"
                d="M199.306 103.866c0 2.713-2.198 4.91-4.911 4.91-2.711 0-4.909-2.197-4.909-4.91 0-2.712 2.198-4.909 4.909-4.909 2.713 0 4.911 2.197 4.911 4.909z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M209.196 155.479c0 3.725-3.019 6.743-6.743 6.743s-6.741-3.019-6.741-6.743 3.018-6.742 6.741-6.742c3.724 0 6.743 3.019 6.743 6.742zM209.991 142.093c0 3.028-2.454 5.483-5.483 5.483-3.027 0-5.482-2.455-5.482-5.483 0-3.027 2.455-5.482 5.482-5.482 3.029 0 5.483 2.455 5.483 5.482zM198.083 139.553c0 1.09-.883 1.973-1.973 1.973-1.089 0-1.971-.883-1.971-1.973 0-1.089.882-1.971 1.971-1.971 1.09.001 1.973.883 1.973 1.971zM211.55 120.741c0 2.833-2.295 5.128-5.127 5.128-2.833 0-5.129-2.295-5.129-5.128 0-2.832 2.296-5.127 5.129-5.127 2.832 0 5.127 2.295 5.127 5.127z"
              />
              <path
                fill="#00b800"
                d="M222.591 169.254c0 3.202-2.597 5.799-5.797 5.799-3.203 0-5.798-2.597-5.798-5.799 0-3.201 2.595-5.798 5.798-5.798 3.201 0 5.797 2.597 5.797 5.798zM225.854 156.478c0 3.323-2.694 6.019-6.019 6.019s-6.019-2.695-6.019-6.019c0-3.325 2.694-6.019 6.019-6.019s6.019 2.693 6.019 6.019zM224.049 145.204c0 2.123-1.721 3.845-3.845 3.845-2.123 0-3.844-1.722-3.844-3.845s1.721-3.845 3.844-3.845c2.125 0 3.845 1.722 3.845 3.845z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M215.377 134.208c0 2.09-1.695 3.784-3.785 3.784-2.091 0-3.785-1.694-3.785-3.784 0-2.091 1.694-3.785 3.785-3.785 2.089 0 3.785 1.694 3.785 3.785zM225.718 174.157c0 2.39-1.935 4.325-4.324 4.325s-4.324-1.936-4.324-4.325c0-2.388 1.936-4.324 4.324-4.324 2.39 0 4.324 1.936 4.324 4.324zM237.324 157.341c0 3.945-3.198 7.143-7.142 7.143-3.945 0-7.143-3.197-7.143-7.143 0-3.944 3.197-7.142 7.143-7.142 3.944 0 7.142 3.197 7.142 7.142zM236.797 138.009c0 4.26-3.452 7.713-7.712 7.713s-7.713-3.453-7.713-7.713c0-4.259 3.453-7.712 7.713-7.712s7.712 3.453 7.712 7.712zM237.519 181.193c0 3.513-2.846 6.356-6.355 6.356-3.509 0-6.355-2.844-6.355-6.356 0-3.508 2.846-6.354 6.355-6.354 3.509 0 6.355 2.846 6.355 6.354zM238.912 169.497c0 2.45-1.984 4.434-4.434 4.434-2.448 0-4.434-1.983-4.434-4.434 0-2.448 1.985-4.434 4.434-4.434s4.434 1.986 4.434 4.434zM238.36 147.642c0 1.438-1.167 2.604-2.605 2.604s-2.604-1.166-2.604-2.604c0-1.438 1.166-2.604 2.604-2.604 1.438 0 2.605 1.166 2.605 2.604zM242.302 129.217c0 2.089-1.693 3.781-3.782 3.781s-3.781-1.692-3.781-3.781c0-2.088 1.692-3.781 3.781-3.781 2.089 0 3.782 1.693 3.782 3.781z"
              />
              <path
                fill="#00b800"
                d="M245.105 111.916c0 2.988-2.423 5.411-5.412 5.411-2.99 0-5.411-2.423-5.411-5.411 0-2.989 2.421-5.412 5.411-5.412 2.989 0 5.412 2.423 5.412 5.412zM243.817 102.297c0 1.576-1.278 2.855-2.855 2.855-1.576 0-2.854-1.279-2.854-2.855 0-1.577 1.277-2.854 2.854-2.854 1.577-.001 2.855 1.277 2.855 2.854z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M250.392 178.368c0 3.273-2.653 5.926-5.926 5.926s-5.925-2.652-5.925-5.926 2.652-5.926 5.925-5.926c3.273 0 5.926 2.652 5.926 5.926zM249.639 165.964c0 2.72-2.205 4.927-4.928 4.927-2.72 0-4.925-2.207-4.925-4.927 0-2.721 2.205-4.928 4.925-4.928 2.723 0 4.928 2.207 4.928 4.928zM254.481 153.15c0 3.779-3.063 6.844-6.844 6.844-3.777 0-6.842-3.064-6.842-6.844 0-3.778 3.064-6.842 6.842-6.842 3.781 0 6.844 3.064 6.844 6.842zM245.837 142.36c0 2.251-1.826 4.075-4.077 4.075-2.252 0-4.076-1.824-4.076-4.075 0-2.252 1.824-4.078 4.076-4.078 2.251 0 4.077 1.826 4.077 4.078zM251.988 126.551c0 2.4-1.945 4.346-4.346 4.346s-4.346-1.945-4.346-4.346 1.945-4.346 4.346-4.346 4.346 1.946 4.346 4.346zM254.482 114.359c0 3.571-2.896 6.468-6.468 6.468s-6.468-2.896-6.468-6.468 2.896-6.467 6.468-6.467 6.468 2.896 6.468 6.467zM262.315 178.184c0 2.886-2.339 5.225-5.226 5.225-2.888 0-5.229-2.339-5.229-5.225 0-2.888 2.341-5.228 5.229-5.228 2.887.001 5.226 2.341 5.226 5.228zM261.582 164.318c0 2.967-2.403 5.372-5.37 5.372s-5.372-2.405-5.372-5.372 2.405-5.371 5.372-5.371 5.37 2.404 5.37 5.371zM265.479 150.089c0 2.739-2.221 4.96-4.96 4.96-2.74 0-4.961-2.221-4.961-4.96s2.221-4.96 4.961-4.96c2.739 0 4.96 2.22 4.96 4.96zM258.767 140.855c0 2.984-2.419 5.403-5.403 5.403-2.983 0-5.402-2.419-5.402-5.403 0-2.983 2.419-5.402 5.402-5.402 2.984 0 5.403 2.419 5.403 5.402zM259.325 130.922c0 1.94-1.572 3.511-3.513 3.511-1.938 0-3.511-1.57-3.511-3.511 0-1.938 1.572-3.511 3.511-3.511 1.941 0 3.513 1.572 3.513 3.511zM263.737 121.52c0 2.769-2.245 5.013-5.014 5.013-2.768 0-5.013-2.244-5.013-5.013 0-2.768 2.245-5.013 5.013-5.013 2.769.001 5.014 2.246 5.014 5.013zM255.492 104.775c0 1.565-1.27 2.836-2.835 2.836-1.566 0-2.836-1.271-2.836-2.836s1.27-2.836 2.836-2.836c1.565 0 2.835 1.271 2.835 2.836zM263.81 100.053c0 2.335-1.894 4.228-4.228 4.228-2.337 0-4.229-1.893-4.229-4.228s1.893-4.229 4.229-4.229c2.335 0 4.228 1.894 4.228 4.229zM268.556 132.214c0 2.204-1.787 3.989-3.989 3.989-2.204 0-3.99-1.785-3.99-3.989 0-2.204 1.786-3.99 3.99-3.99 2.202-.001 3.989 1.786 3.989 3.99zM263.8 110.043c0 2.428-1.969 4.395-4.396 4.395-2.429 0-4.396-1.967-4.396-4.395 0-2.428 1.968-4.396 4.396-4.396 2.428-.001 4.396 1.968 4.396 4.396z"
              />
              <path
                fill="#00b800"
                d="M155.263 175.078c0 1.107-.896 2.006-2.005 2.006-1.107 0-2.004-.898-2.004-2.006 0-1.106.896-2.005 2.004-2.005 1.109 0 2.005.899 2.005 2.005z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M161.47 158.221c0 1.513-1.226 2.738-2.739 2.738s-2.739-1.226-2.739-2.738c0-1.514 1.227-2.739 2.739-2.739 1.514 0 2.739 1.226 2.739 2.739zM176.702 139.156c0 1.128-.914 2.042-2.042 2.042-1.127 0-2.041-.914-2.041-2.042 0-1.127.914-2.041 2.041-2.041 1.128 0 2.042.914 2.042 2.041zM179.863 181.791c0 1.559-1.267 2.822-2.825 2.822-1.56 0-2.826-1.264-2.826-2.822 0-1.562 1.267-2.826 2.826-2.826 1.558 0 2.825 1.263 2.825 2.826zM185.832 124.964c0 1.521-1.234 2.754-2.755 2.754s-2.755-1.233-2.755-2.754c0-1.522 1.234-2.755 2.755-2.755s2.755 1.232 2.755 2.755zM206.966 130.968c0 2.494-2.021 4.514-4.514 4.514-2.493 0-4.514-2.02-4.514-4.514 0-2.492 2.021-4.512 4.514-4.512 2.493 0 4.514 2.019 4.514 4.512zM226.004 166.093c0 1.45-1.176 2.626-2.627 2.626-1.449 0-2.625-1.176-2.625-2.626s1.176-2.626 2.625-2.626c1.452 0 2.627 1.175 2.627 2.626zM226.656 148.228c0 1.163-.943 2.107-2.107 2.107-1.164 0-2.106-.944-2.106-2.107 0-1.165.942-2.107 2.106-2.107s2.107.942 2.107 2.107zM243.518 121.831c0 1.294-1.049 2.343-2.344 2.343-1.294 0-2.343-1.049-2.343-2.343 0-1.295 1.049-2.345 2.343-2.345 1.295 0 2.344 1.05 2.344 2.345zM248.318 134.827c0 1.605-1.301 2.907-2.906 2.907-1.605 0-2.908-1.302-2.908-2.907 0-1.606 1.303-2.907 2.908-2.907s2.906 1.3 2.906 2.907zM246.546 105.177c0 1.131-.916 2.047-2.046 2.047-1.132 0-2.048-.916-2.048-2.047 0-1.131.916-2.047 2.048-2.047 1.13 0 2.046.916 2.046 2.047zM253.417 171.707c0 1.211-.98 2.191-2.189 2.191-1.211 0-2.191-.98-2.191-2.191 0-1.209.98-2.19 2.191-2.19 1.208-.001 2.189.981 2.189 2.19zM271.93 100.395c0 1.881-1.524 3.404-3.404 3.404s-3.404-1.523-3.404-3.404c0-1.88 1.524-3.404 3.404-3.404s3.404 1.524 3.404 3.404zM266.144 115.713c0 .978-.793 1.771-1.771 1.771-.979 0-1.771-.794-1.771-1.771 0-.979.792-1.771 1.771-1.771.978-.001 1.771.791 1.771 1.771z"
              />
              <g
                filter="url(#F)"
                opacity=".45033115"
                transform="translate(10 10)"
              >
                <path
                  fill="#e0e0e0"
                  d="M72.117 199.208c0 2.37-1.921 4.29-4.291 4.29-2.369 0-4.29-1.92-4.29-4.29 0-2.369 1.921-4.289 4.29-4.289 2.37 0 4.291 1.92 4.291 4.289z"
                />
                <path
                  fill="#444"
                  d="M70.834 190.49c0 1.67-1.353 3.023-3.021 3.023-1.67 0-3.023-1.354-3.023-3.023s1.354-3.023 3.023-3.023 3.021 1.353 3.021 3.023z"
                />
                <path
                  fill="#929292"
                  d="M81.118 77.517c0 3.054-2.475 5.527-5.527 5.527s-5.528-2.474-5.528-5.527 2.476-5.526 5.528-5.526c3.052 0 5.527 2.474 5.527 5.526z"
                />
                <path
                  fill="#9a9a9a"
                  d="M70.937 67.568c0 1.867-1.513 3.38-3.378 3.38-1.868 0-3.382-1.513-3.382-3.38 0-1.866 1.514-3.38 3.382-3.38 1.865 0 3.378 1.514 3.378 3.38z"
                />
                <path
                  fill="#747474"
                  d="M69.864 57.999c0 2.951-2.394 5.343-5.345 5.343-2.951 0-5.344-2.392-5.344-5.343s2.393-5.345 5.344-5.345c2.951 0 5.345 2.394 5.345 5.345z"
                />
                <path
                  fill="#d9d9d9"
                  d="M83.494 195.263c0 2.959-2.398 5.357-5.356 5.357-2.959 0-5.357-2.398-5.357-5.357s2.398-5.357 5.357-5.357c2.958 0 5.356 2.398 5.356 5.357z"
                />
                <path
                  fill="#eee"
                  d="M90.676 163.68c0 4.165-3.376 7.541-7.54 7.541-4.165 0-7.541-3.376-7.541-7.541 0-4.164 3.376-7.539 7.541-7.539 4.164 0 7.54 3.375 7.54 7.539z"
                />
                <path
                  fill="#ebebeb"
                  d="M79.192 67.141c0 1.901-1.542 3.443-3.443 3.443-1.9 0-3.441-1.542-3.441-3.443 0-1.9 1.541-3.441 3.441-3.441 1.901 0 3.443 1.541 3.443 3.441z"
                />
                <path
                  fill="#d4d4d4"
                  d="M82.67 56.373c0 3.202-2.596 5.797-5.798 5.797s-5.796-2.595-5.796-5.797c0-3.201 2.594-5.797 5.796-5.797 3.202 0 5.798 2.596 5.798 5.797z"
                />
                <path
                  fill="#e8e8e8"
                  d="M92.377 195.495c0 2.09-1.691 3.78-3.78 3.78-2.087 0-3.779-1.69-3.779-3.78 0-2.087 1.692-3.78 3.779-3.78 2.089 0 3.78 1.693 3.78 3.78z"
                />
                <path
                  fill="#717171"
                  d="M103.508 187.59c0 3.574-2.896 6.47-6.468 6.47s-6.468-2.896-6.468-6.47c0-3.571 2.896-6.466 6.468-6.466 3.571 0 6.468 2.894 6.468 6.466z"
                />
                <path
                  fill="#1d1d1d"
                  d="M103.606 154.219c0 2.892-2.346 5.236-5.238 5.236-2.892 0-5.236-2.345-5.236-5.236 0-2.893 2.345-5.238 5.236-5.238 2.892 0 5.238 2.346 5.238 5.238z"
                />
                <path
                  fill="#020202"
                  d="M93.532 65.817c0 3.618-2.934 6.551-6.551 6.551s-6.549-2.933-6.549-6.551c0-3.618 2.932-6.55 6.549-6.55 3.617 0 6.551 2.932 6.551 6.55z"
                />
                <path
                  fill="#080808"
                  d="M97.068 50.923c0 3.898-3.16 7.06-7.06 7.06-3.9 0-7.06-3.161-7.06-7.06 0-3.9 3.159-7.062 7.06-7.062 3.9 0 7.06 3.161 7.06 7.062z"
                />
                <path
                  fill="#aaa"
                  d="M88.259 41.222c0 1.115-.904 2.021-2.021 2.021-1.115 0-2.02-.905-2.02-2.021 0-1.116.904-2.02 2.02-2.02 1.117.001 2.021.905 2.021 2.02z"
                />
                <path
                  fill="#7f7f7f"
                  d="M101.818 38.807c0 2.951-2.394 5.345-5.345 5.345-2.953 0-5.346-2.394-5.346-5.345 0-2.953 2.393-5.345 5.346-5.345 2.952.001 5.345 2.392 5.345 5.345z"
                />
                <path
                  fill="#0b0b0b"
                  d="M105.785 201.257c0 3.351-2.718 6.067-6.069 6.067-3.353 0-6.07-2.717-6.07-6.067 0-3.354 2.718-6.07 6.07-6.07 3.351-.001 6.069 2.716 6.069 6.07z"
                />
                <path
                  fill="#616161"
                  d="M112.79 190.534c0 2.301-1.865 4.166-4.166 4.166s-4.167-1.865-4.167-4.166 1.866-4.166 4.167-4.166c2.301 0 4.166 1.865 4.166 4.166z"
                />
                <path
                  fill="#f7f7f7"
                  d="M107.205 176.415c0 2.519-2.04 4.56-4.557 4.56-2.519 0-4.559-2.041-4.559-4.56 0-2.517 2.04-4.558 4.559-4.558 2.517 0 4.557 2.041 4.557 4.558z"
                />
                <path
                  fill="#ededed"
                  d="M107.743 145.423c0 2.12-1.718 3.839-3.838 3.839s-3.84-1.719-3.84-3.839c0-2.119 1.72-3.838 3.84-3.838s3.838 1.718 3.838 3.838z"
                />
                <path
                  fill="#d9d9d9"
                  d="M106.833 61.246c0 3.464-2.807 6.271-6.271 6.271s-6.271-2.808-6.271-6.271 2.807-6.271 6.271-6.271 6.271 2.807 6.271 6.271z"
                />
                <path
                  fill="#c5c5c5"
                  d="M110.229 48.476c0 3.184-2.581 5.764-5.764 5.764-3.185 0-5.766-2.58-5.766-5.764 0-3.183 2.581-5.764 5.766-5.764 3.183.001 5.764 2.582 5.764 5.764z"
                />
                <path
                  fill="#040404"
                  d="M121.581 201.858c0 2.771-2.247 5.019-5.021 5.019-2.771 0-5.02-2.247-5.02-5.019 0-2.773 2.248-5.02 5.02-5.02 2.774.001 5.021 2.247 5.021 5.02z"
                />
                <path
                  fill="#f5f5f5"
                  d="M122.939 191.305c0 2.422-1.963 4.385-4.385 4.385-2.422 0-4.384-1.963-4.384-4.385 0-2.424 1.962-4.385 4.384-4.385 2.422 0 4.385 1.962 4.385 4.385z"
                />
                <path
                  fill="#1d1d1d"
                  d="M116.823 180.956c0 2.576-2.087 4.663-4.663 4.663-2.577 0-4.665-2.087-4.665-4.663 0-2.575 2.088-4.665 4.665-4.665 2.576 0 4.663 2.09 4.663 4.665z"
                />
                <path
                  fill="#434343"
                  d="M117.598 170.2c0 2.648-2.146 4.794-4.794 4.794-2.648 0-4.794-2.146-4.794-4.794 0-2.646 2.146-4.792 4.794-4.792 2.647 0 4.794 2.145 4.794 4.792z"
                />
                <path
                  fill="#999"
                  d="M121.223 56.552c0 3.397-2.753 6.151-6.149 6.151-3.398 0-6.152-2.754-6.152-6.151 0-3.396 2.754-6.151 6.152-6.151 3.396 0 6.149 2.755 6.149 6.151z"
                />
                <path
                  fill="#454545"
                  d="M116.962 41.344c0 2.213-1.794 4.008-4.007 4.008-2.213 0-4.007-1.795-4.007-4.008s1.794-4.006 4.007-4.006c2.213 0 4.007 1.794 4.007 4.006z"
                />
                <path
                  fill="#161616"
                  d="M123.409 33.478c0 2.497-2.025 4.522-4.522 4.522-2.499 0-4.524-2.025-4.524-4.522 0-2.498 2.025-4.523 4.524-4.523 2.497 0 4.522 2.025 4.522 4.523z"
                />
                <path
                  fill="#494949"
                  d="M127.613 201.205c0 1.305-1.058 2.362-2.363 2.362s-2.362-1.058-2.362-2.362 1.058-2.362 2.362-2.362c1.306 0 2.363 1.057 2.363 2.362z"
                />
                <path
                  fill="#313131"
                  d="M136.124 186.27c0 3.579-2.899 6.479-6.479 6.479-3.578 0-6.479-2.9-6.479-6.479 0-3.58 2.901-6.479 6.479-6.479 3.58 0 6.479 2.899 6.479 6.479z"
                />
                <path
                  fill="#b4b4b4"
                  d="M126.333 163.643c0 2.441-1.979 4.42-4.42 4.42-2.439 0-4.419-1.979-4.419-4.42 0-2.44 1.979-4.419 4.419-4.419 2.442 0 4.42 1.979 4.42 4.419z"
                />
                <path
                  fill="#dbdbdb"
                  d="M133.598 154.022c0 3.061-2.48 5.542-5.543 5.542-3.06 0-5.541-2.481-5.541-5.542s2.481-5.541 5.541-5.541c3.062 0 5.543 2.481 5.543 5.541z"
                />
                <path
                  fill="#686868"
                  d="M131.328 143.481c0 2.038-1.652 3.689-3.69 3.689-2.038 0-3.689-1.651-3.689-3.689 0-2.039 1.651-3.691 3.689-3.691 2.038 0 3.69 1.652 3.69 3.691z"
                />
                <path
                  fill="#424242"
                  d="M127.242 134.799c0 3-2.431 5.43-5.43 5.43-2.999 0-5.43-2.43-5.43-5.43 0-2.999 2.431-5.429 5.43-5.429 2.999 0 5.43 2.43 5.43 5.429z"
                />
                <path
                  fill="#666"
                  d="M129.18 50.37c0 2.322-1.882 4.205-4.205 4.205-2.323 0-4.204-1.883-4.204-4.205 0-2.323 1.881-4.205 4.204-4.205 2.323 0 4.205 1.882 4.205 4.205z"
                />
                <path
                  fill="#777"
                  d="M126.795 41.587c0 1.863-1.51 3.373-3.373 3.373-1.863 0-3.374-1.51-3.374-3.373 0-1.863 1.511-3.374 3.374-3.374 1.863 0 3.373 1.51 3.373 3.374z"
                />
                <path
                  fill="#6d6d6d"
                  d="M140.775 204.283c0 2.997-2.431 5.429-5.43 5.429-2.999 0-5.431-2.432-5.431-5.429 0-3.001 2.432-5.43 5.431-5.43s5.43 2.429 5.43 5.43z"
                />
                <path
                  fill="#909090"
                  d="M132.37 196.754c0 1.456-1.181 2.637-2.638 2.637-1.456 0-2.636-1.181-2.636-2.637 0-1.457 1.18-2.638 2.636-2.638 1.458 0 2.638 1.181 2.638 2.638z"
                />
                <path
                  fill="#878787"
                  d="M143.958 140.294c0 3.244-2.628 5.874-5.872 5.874-3.244 0-5.873-2.63-5.873-5.874 0-3.243 2.629-5.872 5.873-5.872s5.872 2.629 5.872 5.872z"
                />
                <path
                  fill="#fdfdfd"
                  d="M138.037 129.087c0 2.748-2.229 4.977-4.977 4.977s-4.977-2.229-4.977-4.977 2.229-4.977 4.977-4.977 4.977 2.229 4.977 4.977z"
                />
                <path
                  fill="#686868"
                  d="M143.418 115.92c0 3.985-3.232 7.218-7.218 7.218-3.986 0-7.217-3.232-7.217-7.218 0-3.986 3.23-7.217 7.217-7.217 3.985 0 7.218 3.23 7.218 7.217z"
                />
                <path
                  fill="#989898"
                  d="M140.693 52.602c0 2.832-2.296 5.127-5.129 5.127-2.832 0-5.128-2.295-5.128-5.127 0-2.833 2.296-5.128 5.128-5.128 2.833 0 5.129 2.295 5.129 5.128z"
                />
                <path
                  fill="#cecece"
                  d="M150.618 39.496c0 4.547-3.688 8.234-8.234 8.234-4.549 0-8.235-3.688-8.235-8.234 0-4.548 3.686-8.234 8.235-8.234 4.546-.001 8.234 3.686 8.234 8.234z"
                />
                <path
                  fill="#525252"
                  d="M134.092 33.641c0 2.572-2.084 4.658-4.657 4.658s-4.658-2.086-4.658-4.658c0-2.573 2.085-4.658 4.658-4.658 2.573 0 4.657 2.085 4.657 4.658z"
                />
                <path
                  fill="#d4d4d4"
                  d="M159.218 199.692c0 2.606-2.112 4.719-4.718 4.719s-4.72-2.112-4.72-4.719 2.113-4.72 4.72-4.72c2.606 0 4.718 2.114 4.718 4.72z"
                />
                <path
                  fill="#5e5e5e"
                  d="M150.253 192.95c0 3.878-3.145 7.022-7.022 7.022-3.88 0-7.023-3.145-7.023-7.022 0-3.877 3.143-7.022 7.023-7.022 3.877-.001 7.022 3.144 7.022 7.022z"
                />
                <path
                  fill="#121212"
                  d="M150.367 58.053c0 2.678-2.171 4.849-4.848 4.849-2.678 0-4.85-2.171-4.85-4.849 0-2.677 2.172-4.848 4.85-4.848 2.677.001 4.848 2.172 4.848 4.848z"
                />
                <path
                  fill="#cfcfcf"
                  d="M157.472 48.205c0 2.38-1.929 4.309-4.308 4.309-2.38 0-4.31-1.929-4.31-4.309 0-2.379 1.93-4.308 4.31-4.308s4.308 1.929 4.308 4.308z"
                />
                <path
                  fill="#dadada"
                  d="M171.8 183.403c0 4.315-3.498 7.812-7.812 7.812-4.315 0-7.812-3.497-7.812-7.812s3.497-7.812 7.812-7.812c4.314.001 7.812 3.497 7.812 7.812z"
                />
                <path
                  fill="#3a3a3a"
                  d="M154.871 184.479c0 1.904-1.542 3.448-3.445 3.448-1.904 0-3.446-1.544-3.446-3.448 0-1.902 1.542-3.445 3.446-3.445 1.903 0 3.445 1.543 3.445 3.445z"
                />
                <path
                  fill="#3b3b3b"
                  d="M167.305 77.56c0 3.173-2.571 5.743-5.744 5.743-3.173 0-5.743-2.57-5.743-5.743 0-3.172 2.57-5.743 5.743-5.743 3.173 0 5.744 2.571 5.744 5.743z"
                />
                <path
                  fill="#696969"
                  d="M162.287 67.366c0 1.937-1.569 3.505-3.504 3.505-1.936 0-3.505-1.568-3.505-3.505 0-1.935 1.569-3.503 3.505-3.503 1.934 0 3.504 1.568 3.504 3.503z"
                />
                <path
                  fill="#3b3b3b"
                  d="M161.348 58.009c0 2.628-2.131 4.758-4.759 4.758-2.629 0-4.759-2.13-4.759-4.758s2.13-4.759 4.759-4.759c2.628 0 4.759 2.131 4.759 4.759z"
                />
                <path
                  fill="#020202"
                  d="M166.723 50.471c0 2.089-1.693 3.782-3.781 3.782s-3.781-1.693-3.781-3.782c0-2.088 1.693-3.781 3.781-3.781s3.781 1.694 3.781 3.781z"
                />
                <path
                  fill="#c9c9c9"
                  d="M175.765 198.817c0 3.389-2.748 6.135-6.137 6.135-3.389 0-6.136-2.746-6.136-6.135s2.747-6.138 6.136-6.138c3.389 0 6.137 2.749 6.137 6.138z"
                />
                <path
                  fill="#eaeaea"
                  d="M163.227 194.422c0 1.238-1.002 2.241-2.239 2.241-1.238 0-2.241-1.003-2.241-2.241 0-1.234 1.003-2.238 2.241-2.238 1.237-.001 2.239 1.003 2.239 2.238z"
                />
                <path
                  fill="#383838"
                  d="M173.192 82.088c0 1.555-1.261 2.815-2.814 2.815-1.556 0-2.816-1.261-2.816-2.815 0-1.556 1.261-2.814 2.816-2.814 1.553-.001 2.814 1.258 2.814 2.814z"
                />
                <path
                  fill="#c4c4c4"
                  d="M177.59 67.155c0 3.739-3.031 6.771-6.771 6.771-3.74 0-6.769-3.031-6.769-6.771 0-3.737 3.029-6.769 6.769-6.769s6.771 3.032 6.771 6.769z"
                />
                <path
                  fill="#898989"
                  d="M170.714 56.63c0 1.552-1.259 2.809-2.811 2.809-1.551 0-2.81-1.257-2.81-2.809 0-1.552 1.259-2.81 2.81-2.81 1.553 0 2.811 1.258 2.811 2.81z"
                />
                <path
                  fill="#e4e4e4"
                  d="M190.621 200.616c0 3.77-3.055 6.826-6.825 6.826-3.771 0-6.827-3.057-6.827-6.826 0-3.771 3.056-6.827 6.827-6.827 3.77 0 6.825 3.056 6.825 6.827z"
                />
                <path
                  fill="#2e2e2e"
                  d="M183.387 188.231c0 3.062-2.483 5.545-5.544 5.545-3.062 0-5.544-2.483-5.544-5.545s2.481-5.543 5.544-5.543c3.061 0 5.544 2.481 5.544 5.543z"
                />
                <path
                  fill="#191919"
                  d="M191.32 180.717c0 2.453-1.988 4.439-4.44 4.439-2.452 0-4.441-1.986-4.441-4.439 0-2.454 1.989-4.441 4.441-4.441s4.44 1.986 4.44 4.441z"
                />
                <path
                  fill="#262626"
                  d="M199.757 192.714c0 2.861-2.318 5.183-5.181 5.183s-5.181-2.321-5.181-5.183c0-2.862 2.318-5.181 5.181-5.181s5.181 2.319 5.181 5.181z"
                />
                <path
                  fill="#5c5c5c"
                  d="M201.874 181.887c0 2.568-2.081 4.647-4.646 4.647-2.566 0-4.646-2.079-4.646-4.647 0-2.565 2.08-4.645 4.646-4.645 2.565.001 4.646 2.08 4.646 4.645z"
                />
                <path
                  fill="#7d7d7d"
                  d="M210.109 173.01c0 3.054-2.477 5.529-5.532 5.529s-5.53-2.476-5.53-5.529c0-3.055 2.476-5.531 5.53-5.531 3.055 0 5.532 2.477 5.532 5.531z"
                />
                <path
                  fill="#1e1e1e"
                  d="M73.124 184.185c0 1.405-1.14 2.545-2.545 2.545-1.406 0-2.545-1.14-2.545-2.545 0-1.404 1.139-2.545 2.545-2.545 1.405 0 2.545 1.141 2.545 2.545z"
                />
                <path
                  fill="#999"
                  d="M111.023 198.158c0 1.184-.96 2.144-2.145 2.144s-2.145-.96-2.145-2.144c0-1.184.96-2.144 2.145-2.144s2.145.96 2.145 2.144z"
                />
                <path
                  fill="#040404"
                  d="M120.066 47.12c0 1.233-1.001 2.234-2.234 2.234s-2.233-1.001-2.233-2.234 1-2.233 2.233-2.233 2.234.999 2.234 2.233z"
                />
                <path
                  fill="#757575"
                  d="M133.675 44.076c0 1.647-1.336 2.981-2.982 2.981-1.646 0-2.979-1.334-2.979-2.981 0-1.646 1.334-2.98 2.979-2.98 1.646-.001 2.982 1.334 2.982 2.98z"
                />
                <path
                  fill="#626262"
                  d="M157.648 191.038c0 1.454-1.179 2.633-2.633 2.633-1.455 0-2.635-1.179-2.635-2.633 0-1.456 1.18-2.635 2.635-2.635 1.454 0 2.633 1.179 2.633 2.635z"
                />
                <path
                  fill="#e9e9e9"
                  d="M189.105 188.625c0 1.188-.964 2.151-2.151 2.151-1.188 0-2.151-.963-2.151-2.151 0-1.189.963-2.151 2.151-2.151 1.187-.001 2.151.961 2.151 2.151z"
                />
                <path
                  fill="#070707"
                  d="M11.91 133.383c0 3.29-2.667 5.956-5.956 5.956-3.288 0-5.954-2.666-5.954-5.956 0-3.289 2.666-5.954 5.954-5.954 3.29-.001 5.956 2.664 5.956 5.954z"
                />
                <path
                  fill="#c1c1c1"
                  d="M26.734 184.593c0 4.547-3.685 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.55 3.688-8.234 8.234-8.234 4.55-.001 8.234 3.684 8.234 8.234z"
                />
                <path
                  fill="#939393"
                  d="M11.186 146.029c0 2.923-2.371 5.291-5.292 5.291-2.923 0-5.293-2.368-5.293-5.291 0-2.924 2.37-5.294 5.293-5.294 2.921 0 5.292 2.37 5.292 5.294z"
                />
                <path
                  fill="#010101"
                  d="M12.83 120.201c0 3.282-2.66 5.943-5.942 5.943-3.283 0-5.943-2.661-5.943-5.943 0-3.28 2.661-5.941 5.943-5.941 3.282 0 5.942 2.661 5.942 5.941z"
                />
                <path
                  fill="#4f4f4f"
                  d="M23.513 111.681c0 3.425-2.776 6.202-6.201 6.202-3.427 0-6.204-2.777-6.204-6.202s2.777-6.203 6.204-6.203c3.424 0 6.201 2.779 6.201 6.203z"
                />
                <path
                  fill="#181818"
                  d="M16.565 100.051c0 3.231-2.619 5.852-5.852 5.852-3.232 0-5.852-2.62-5.852-5.852s2.62-5.854 5.852-5.854 5.852 2.621 5.852 5.854z"
                />
                <path
                  fill="#474747"
                  d="M15.634 89.147c0 2.05-1.66 3.711-3.71 3.711s-3.71-1.661-3.71-3.711c0-2.049 1.661-3.71 3.71-3.71s3.71 1.661 3.71 3.71z"
                />
                <path
                  fill="#b9b9b9"
                  d="M33.101 204.296c0 3.502-2.839 6.34-6.341 6.34-3.501 0-6.339-2.838-6.339-6.34s2.838-6.341 6.339-6.341c3.502 0 6.341 2.839 6.341 6.341z"
                />
                <path
                  fill="#a4a4a4"
                  d="M21.732 197.191c0 1.675-1.358 3.036-3.033 3.036-1.677 0-3.035-1.361-3.035-3.036 0-1.676 1.358-3.034 3.035-3.034 1.674 0 3.033 1.358 3.033 3.034z"
                />
                <path
                  fill="#cfcfcf"
                  d="M36.073 172.022c0 3.823-3.099 6.922-6.923 6.922-3.823 0-6.922-3.099-6.922-6.922 0-3.822 3.099-6.922 6.922-6.922 3.825 0 6.923 3.1 6.923 6.922z"
                />
                <path
                  fill="#d7d7d7"
                  d="M36.392 110.2c0 3.213-2.604 5.815-5.815 5.815-3.212 0-5.815-2.603-5.815-5.815 0-3.211 2.604-5.815 5.815-5.815 3.21 0 5.815 2.604 5.815 5.815z"
                />
                <path
                  fill="#979797"
                  d="M27.646 83.405c0 3.392-2.751 6.142-6.143 6.142s-6.14-2.75-6.14-6.142c0-3.392 2.748-6.141 6.14-6.141 3.392 0 6.143 2.749 6.143 6.141z"
                />
                <path
                  fill="#e0e0e0"
                  d="M22.824 72.508c0 1.96-1.589 3.55-3.55 3.55-1.961 0-3.551-1.59-3.551-3.55 0-1.961 1.59-3.551 3.551-3.551s3.55 1.59 3.55 3.551z"
                />
                <path
                  fill="#191919"
                  d="M31.587 69.905c0 2.151-1.744 3.894-3.895 3.894-2.149 0-3.893-1.742-3.893-3.894 0-2.15 1.743-3.894 3.893-3.894 2.151 0 3.895 1.744 3.895 3.894z"
                />
                <path
                  fill="#727272"
                  d="M38.826 215.206c0 2.877-2.334 5.211-5.214 5.211-2.878 0-5.212-2.334-5.212-5.211 0-2.879 2.334-5.213 5.212-5.213 2.88 0 5.214 2.334 5.214 5.213z"
                />
                <path
                  fill="#262626"
                  d="M42.086 194.695c0 3.224-2.614 5.838-5.839 5.838-3.224 0-5.838-2.614-5.838-5.838 0-3.225 2.614-5.839 5.838-5.839 3.225 0 5.839 2.614 5.839 5.839z"
                />
                <path
                  fill="#636363"
                  d="M37.866 183.586c0 2.309-1.872 4.18-4.181 4.18-2.31 0-4.18-1.871-4.18-4.18 0-2.311 1.87-4.181 4.18-4.181 2.309 0 4.181 1.87 4.181 4.181z"
                />
                <path
                  fill="#262626"
                  d="M37.171 154.779c0 2.936-2.379 5.314-5.313 5.314-2.936 0-5.316-2.379-5.316-5.314s2.381-5.315 5.316-5.315c2.934 0 5.313 2.38 5.313 5.315z"
                />
                <path
                  fill="#1f1f1f"
                  d="M39.929 142.879c0 3.058-2.479 5.535-5.536 5.535-3.058 0-5.535-2.478-5.535-5.535s2.478-5.536 5.535-5.536c3.056 0 5.536 2.479 5.536 5.536z"
                />
                <path
                  fill="#ebebeb"
                  d="M38.517 127.89c0 2.377-1.927 4.305-4.305 4.305-2.378 0-4.305-1.928-4.305-4.305 0-2.378 1.927-4.306 4.305-4.306 2.378 0 4.305 1.928 4.305 4.306z"
                />
                <path
                  fill="#262626"
                  d="M41.597 97.937c0 2.583-2.092 4.676-4.675 4.676-2.581 0-4.676-2.093-4.676-4.676s2.095-4.677 4.676-4.677c2.583 0 4.675 2.094 4.675 4.677z"
                />
                <path
                  fill="#bababa"
                  d="M36.144 89.16c0 2.018-1.636 3.653-3.653 3.653-2.017 0-3.653-1.636-3.653-3.653 0-2.017 1.636-3.653 3.653-3.653 2.017 0 3.653 1.636 3.653 3.653z"
                />
                <path
                  fill="#c2c2c2"
                  d="M42.56 80.308c0 2.825-2.29 5.115-5.115 5.115-2.826 0-5.116-2.29-5.116-5.115s2.29-5.115 5.116-5.115c2.825 0 5.115 2.29 5.115 5.115z"
                />
                <path
                  fill="#4c4c4c"
                  d="M36.533 61.117c0 2.502-2.026 4.528-4.526 4.528-2.501 0-4.527-2.026-4.527-4.528 0-2.499 2.026-4.527 4.527-4.527 2.5 0 4.526 2.028 4.526 4.527z"
                />
                <path
                  fill="#373737"
                  d="M38.078 51.399c0 2.217-1.797 4.015-4.016 4.015-2.217 0-4.014-1.798-4.014-4.015 0-2.218 1.797-4.015 4.014-4.015 2.219.001 4.016 1.797 4.016 4.015z"
                />
                <path
                  fill="#efefef"
                  d="M47.258 224.068c0 3.039-2.464 5.504-5.504 5.504-3.04 0-5.504-2.465-5.504-5.504 0-3.039 2.464-5.504 5.504-5.504 3.04 0 5.504 2.465 5.504 5.504z"
                />
                <path
                  fill="#b3b3b3"
                  d="M57.761 219.022c0 2.822-2.287 5.11-5.11 5.11-2.823 0-5.111-2.288-5.111-5.11 0-2.823 2.288-5.113 5.111-5.113s5.11 2.29 5.11 5.113z"
                />
                <path
                  fill="#272727"
                  d="M50.231 206.405c0 3.678-2.979 6.657-6.657 6.657-3.676 0-6.657-2.979-6.657-6.657 0-3.677 2.981-6.656 6.657-6.656 3.677 0 6.657 2.979 6.657 6.656z"
                />
                <path
                  fill="#d1d1d1"
                  d="M51.156 185.588c0 3.152-2.555 5.708-5.707 5.708-3.152 0-5.706-2.556-5.706-5.708 0-3.149 2.554-5.704 5.706-5.704 3.152 0 5.707 2.554 5.707 5.704z"
                />
                <path
                  fill="#d5d5d5"
                  d="M54.265 175.825c0 2.156-1.747 3.906-3.903 3.906-2.156 0-3.903-1.75-3.903-3.906s1.747-3.903 3.903-3.903c2.156 0 3.903 1.747 3.903 3.903z"
                />
                <path
                  fill="#e8e8e8"
                  d="M45.061 175.346c0 2.244-1.819 4.063-4.063 4.063-2.243 0-4.062-1.819-4.062-4.063 0-2.246 1.819-4.065 4.062-4.065 2.243 0 4.063 1.819 4.063 4.065z"
                />
                <path
                  fill="#323232"
                  d="M51.012 137.301c0 3.062-2.483 5.545-5.546 5.545s-5.547-2.482-5.547-5.545c0-3.063 2.483-5.547 5.547-5.547 3.062.001 5.546 2.484 5.546 5.547z"
                />
                <path
                  fill="#979797"
                  d="M51.889 123.266c0 3.581-2.903 6.485-6.485 6.485-3.582 0-6.486-2.904-6.486-6.485 0-3.584 2.904-6.487 6.486-6.487s6.485 2.903 6.485 6.487z"
                />
                <path
                  fill="#3e3e3e"
                  d="M50.941 95.8c0 1.614-1.309 2.924-2.925 2.924-1.614 0-2.924-1.31-2.924-2.924 0-1.616 1.31-2.925 2.924-2.925 1.616 0 2.925 1.308 2.925 2.925z"
                />
                <path
                  fill="#a6a6a6"
                  d="M46.859 89.33c0 2.235-1.812 4.048-4.049 4.048-2.235 0-4.048-1.812-4.048-4.048 0-2.236 1.812-4.047 4.048-4.047 2.237 0 4.049 1.811 4.049 4.047z"
                />
                <path
                  fill="#828282"
                  d="M53.981 80.884c0 2.795-2.266 5.061-5.06 5.061-2.794 0-5.06-2.266-5.06-5.061s2.266-5.059 5.06-5.059c2.794 0 5.06 2.264 5.06 5.059z"
                />
                <path
                  fill="#3c3c3c"
                  d="M51.357 68.536c0 3.595-2.914 6.509-6.509 6.509s-6.509-2.914-6.509-6.509 2.914-6.508 6.509-6.508 6.509 2.913 6.509 6.508z"
                />
                <path
                  fill="#9c9c9c"
                  d="M55.164 51.912c0 3.574-2.897 6.472-6.47 6.472-3.574 0-6.472-2.897-6.472-6.472 0-3.575 2.897-6.471 6.472-6.471 3.573 0 6.47 2.897 6.47 6.471z"
                />
                <path
                  fill="#6b6b6b"
                  d="M41.431 44.641c0 1.555-1.259 2.816-2.814 2.816-1.555 0-2.816-1.262-2.816-2.816 0-1.554 1.261-2.815 2.816-2.815s2.814 1.261 2.814 2.815z"
                />
                <path
                  fill="#fafafa"
                  d="M50.177 40.109c0 2.407-1.951 4.359-4.359 4.359-2.407 0-4.359-1.952-4.359-4.359s1.952-4.358 4.359-4.358c2.408 0 4.359 1.951 4.359 4.358z"
                />
                <path
                  fill="#1b1b1b"
                  d="M61.197 237.57c0 2.931-2.378 5.309-5.31 5.309-2.933 0-5.31-2.378-5.31-5.309 0-2.934 2.377-5.312 5.31-5.312 2.932.001 5.31 2.378 5.31 5.312z"
                />
                <path
                  fill="#e7e7e7"
                  d="M68.251 219.449c0 2.367-1.92 4.284-4.287 4.284-2.366 0-4.285-1.917-4.285-4.284s1.919-4.284 4.285-4.284c2.367 0 4.287 1.917 4.287 4.284z"
                />
                <path
                  fill="#fbfbfb"
                  d="M59.474 208.724c0 2.251-1.824 4.075-4.076 4.075-2.249 0-4.073-1.824-4.073-4.075 0-2.249 1.824-4.074 4.073-4.074 2.251 0 4.076 1.825 4.076 4.074z"
                />
                <path
                  fill="#bdbdbd"
                  d="M61.496 196.365c0 3.821-3.099 6.922-6.92 6.922-3.822 0-6.92-3.101-6.92-6.922 0-3.821 3.098-6.92 6.92-6.92s6.92 3.099 6.92 6.92z"
                />
                <path
                  fill="#d9d9d9"
                  d="M66.841 182.58c0 3.662-2.97 6.631-6.632 6.631-3.661 0-6.631-2.969-6.631-6.631 0-3.661 2.97-6.629 6.631-6.629 3.662 0 6.632 2.968 6.632 6.629z"
                />
                <path
                  fill="#131313"
                  d="M65.026 156.293c0 1.789-1.449 3.239-3.237 3.239s-3.237-1.45-3.237-3.239c0-1.787 1.449-3.236 3.237-3.236s3.237 1.449 3.237 3.236z"
                />
                <path
                  fill="#070707"
                  d="M60.034 143.719c0 1.593-1.292 2.883-2.885 2.883-1.593 0-2.882-1.29-2.882-2.883s1.289-2.884 2.882-2.884c1.593 0 2.885 1.292 2.885 2.884z"
                />
                <path
                  fill="#525252"
                  d="M59.811 135.823c0 2.085-1.69 3.773-3.775 3.773-2.084 0-3.774-1.688-3.774-3.773s1.69-3.774 3.774-3.774 3.775 1.689 3.775 3.774z"
                />
                <path
                  fill="#4e4e4e"
                  d="M56.726 96.346c0 1.197-.971 2.169-2.17 2.169-1.199 0-2.169-.972-2.169-2.169 0-1.198.97-2.17 2.169-2.17s2.17.972 2.17 2.17z"
                />
                <path
                  fill="#ededed"
                  d="M66.185 75.424c0 3.333-2.702 6.035-6.036 6.035-3.333 0-6.035-2.702-6.035-6.035 0-3.334 2.702-6.037 6.035-6.037 3.334-.001 6.036 2.703 6.036 6.037z"
                />
                <path
                  fill="#ccc"
                  d="M58.684 62.101c0 2.181-1.769 3.949-3.947 3.949-2.183 0-3.95-1.769-3.95-3.949 0-2.18 1.768-3.948 3.95-3.948 2.178 0 3.947 1.768 3.947 3.948z"
                />
                <path
                  fill="#333"
                  d="M63.98 41.331c0 3.377-2.738 6.115-6.117 6.115-3.376 0-6.113-2.738-6.113-6.115 0-3.379 2.737-6.115 6.113-6.115 3.378 0 6.117 2.736 6.117 6.115z"
                />
                <path
                  fill="#1d1d1d"
                  d="M54.433 33.031c0 1.744-1.413 3.157-3.157 3.157s-3.157-1.413-3.157-3.157 1.413-3.157 3.157-3.157 3.157 1.413 3.157 3.157z"
                />
                <path
                  fill="#171717"
                  d="M79.526 245.847c0 4.043-3.275 7.318-7.315 7.318-4.041 0-7.315-3.275-7.315-7.318 0-4.04 3.274-7.315 7.315-7.315 4.04 0 7.315 3.275 7.315 7.315z"
                />
                <path
                  fill="#4b4b4b"
                  d="M69.225 235.552c0 1.909-1.548 3.456-3.457 3.456-1.909 0-3.456-1.547-3.456-3.456s1.547-3.456 3.456-3.456 3.457 1.547 3.457 3.456zM62.669 227.424c0 2.161-1.752 3.914-3.915 3.914-2.163 0-3.915-1.753-3.915-3.914 0-2.161 1.752-3.917 3.915-3.917 2.163 0 3.915 1.755 3.915 3.917z"
                />
                <path
                  fill="#7a7a7a"
                  d="M70.191 209.254c0 2.6-2.107 4.704-4.706 4.704s-4.706-2.104-4.706-4.704c0-2.602 2.107-4.706 4.706-4.706s4.706 2.104 4.706 4.706z"
                />
                <path
                  fill="#e0e0e0"
                  d="M73.95 165.206c0 2.436-1.974 4.409-4.41 4.409-2.435 0-4.409-1.974-4.409-4.409 0-2.435 1.975-4.411 4.409-4.411 2.437 0 4.41 1.975 4.41 4.411z"
                />
                <path
                  fill="#5b5b5b"
                  d="M74.103 155.575c0 2.151-1.745 3.895-3.895 3.895s-3.896-1.743-3.896-3.895c0-2.149 1.745-3.893 3.896-3.893 2.149 0 3.895 1.744 3.895 3.893z"
                />
                <path
                  fill="#d1d1d1"
                  d="M69.429 147.468c0 2.439-1.978 4.418-4.418 4.418-2.439 0-4.418-1.979-4.418-4.418 0-2.44 1.979-4.42 4.418-4.42 2.44.001 4.418 1.98 4.418 4.42z"
                />
                <path
                  fill="#a0a0a0"
                  d="M77.706 137.018c0 3.258-2.641 5.898-5.898 5.898-3.257 0-5.898-2.641-5.898-5.898 0-3.257 2.642-5.897 5.898-5.897 3.258 0 5.898 2.639 5.898 5.897z"
                />
                <path
                  fill="#efefef"
                  d="M77.833 108.702c0 3.364-2.728 6.092-6.092 6.092-3.364 0-6.091-2.728-6.091-6.092 0-3.363 2.727-6.092 6.091-6.092 3.364 0 6.092 2.729 6.092 6.092z"
                />
                <path
                  fill="#6e6e6e"
                  d="M64.548 110.68c0 1.013-.822 1.835-1.835 1.835-1.014 0-1.835-.822-1.835-1.835 0-1.014.821-1.835 1.835-1.835 1.013 0 1.835.822 1.835 1.835z"
                />
                <path d="M72.8 47.343c0 2.52-2.04 4.562-4.56 4.562-2.52 0-4.561-2.042-4.561-4.562 0-2.518 2.041-4.56 4.561-4.56s4.56 2.042 4.56 4.56z" />
                <path
                  fill="#1e1e1e"
                  d="M76.673 32.071c0 3.988-3.232 7.222-7.222 7.222-3.988 0-7.222-3.233-7.222-7.222 0-3.99 3.233-7.224 7.222-7.224 3.99 0 7.222 3.234 7.222 7.224z"
                />
                <path
                  fill="#cdcdcd"
                  d="M76.009 19.893c0 2.165-1.755 3.92-3.92 3.92-2.166 0-3.921-1.755-3.921-3.92 0-2.164 1.755-3.919 3.921-3.919 2.165 0 3.92 1.755 3.92 3.919z"
                />
                <path
                  fill="#505050"
                  d="M89.584 250.457c0 2.64-2.14 4.778-4.777 4.778-2.64 0-4.778-2.139-4.778-4.778 0-2.641 2.139-4.778 4.778-4.778 2.637-.001 4.777 2.137 4.777 4.778z"
                />
                <path
                  fill="#f9f9f9"
                  d="M88.013 231.79c0 4.079-3.307 7.389-7.388 7.389-4.08 0-7.388-3.31-7.388-7.389 0-4.081 3.308-7.388 7.388-7.388 4.081 0 7.388 3.307 7.388 7.388z"
                />
                <path
                  fill="#5e5e5e"
                  d="M81.44 217.987c0 3.305-2.679 5.983-5.982 5.983-3.303 0-5.981-2.679-5.981-5.983s2.678-5.982 5.981-5.982 5.982 2.678 5.982 5.982z"
                />
                <path
                  fill="#c3c3c3"
                  d="M92.134 207.193c0 3.921-3.179 7.1-7.101 7.1s-7.1-3.179-7.1-7.1c0-3.922 3.178-7.103 7.1-7.103 3.922 0 7.101 3.181 7.101 7.103z"
                />
                <path
                  fill="#303030"
                  d="M82.387 151.83c0 2.131-1.728 3.857-3.858 3.857s-3.857-1.727-3.857-3.857c0-2.132 1.727-3.858 3.857-3.858s3.858 1.726 3.858 3.858z"
                />
                <path
                  fill="#5a5a5a"
                  d="M87.594 142.375c0 2.711-2.198 4.909-4.908 4.909-2.711 0-4.909-2.198-4.909-4.909s2.198-4.908 4.909-4.908c2.71 0 4.908 2.197 4.908 4.908z"
                />
                <path
                  fill="#b2b2b2"
                  d="M86.824 117.356c0 2.999-2.432 5.43-5.43 5.43-2.999 0-5.43-2.431-5.43-5.43 0-2.999 2.431-5.43 5.43-5.43 2.999.001 5.43 2.431 5.43 5.43z"
                />
                <path
                  fill="#bcbcbc"
                  d="M90.145 99.086c0 3.628-2.94 6.569-6.569 6.569-3.628 0-6.569-2.941-6.569-6.569 0-3.629 2.941-6.57 6.569-6.57 3.628-.001 6.569 2.941 6.569 6.57z"
                />
                <path
                  fill="#acacac"
                  d="M82.664 42.485c0 2.665-2.16 4.827-4.825 4.827-2.666 0-4.828-2.162-4.828-4.827 0-2.666 2.162-4.828 4.828-4.828 2.665 0 4.825 2.162 4.825 4.828z"
                />
                <path
                  fill="#4c4c4c"
                  d="M92.421 30.699c0 3.998-3.242 7.239-7.24 7.239-3.997 0-7.239-3.241-7.239-7.239 0-3.998 3.242-7.239 7.239-7.239 3.998 0 7.24 3.241 7.24 7.239z"
                />
                <path
                  fill="#d5d5d5"
                  d="M81.316 21.725c0 1.151-.933 2.084-2.085 2.084-1.151 0-2.085-.933-2.085-2.084s.934-2.085 2.085-2.085c1.153 0 2.085.934 2.085 2.085z"
                />
                <path
                  fill="#e6e6e6"
                  d="M87.27 14.978c0 2.366-1.919 4.285-4.286 4.285-2.366 0-4.285-1.919-4.285-4.285 0-2.367 1.919-4.286 4.285-4.286 2.367 0 4.286 1.919 4.286 4.286z"
                />
                <path
                  fill="#1c1c1c"
                  d="M95.025 241.44c0 2.432-1.972 4.4-4.4 4.4-2.431 0-4.4-1.969-4.4-4.4 0-2.43 1.97-4.4 4.4-4.4 2.429 0 4.4 1.97 4.4 4.4z"
                />
                <path
                  fill="#666"
                  d="M99.255 231.494c0 2.7-2.187 4.885-4.884 4.885-2.699 0-4.885-2.185-4.885-4.885 0-2.696 2.186-4.884 4.885-4.884 2.697 0 4.884 2.188 4.884 4.884z"
                />
                <path
                  fill="#0c0c0c"
                  d="M94.637 220.491c0 3.016-2.447 5.463-5.463 5.463-3.018 0-5.463-2.447-5.463-5.463 0-3.019 2.445-5.463 5.463-5.463 3.016 0 5.463 2.444 5.463 5.463z"
                />
                <path
                  fill="#616161"
                  d="M92.128 151.512c0 2.326-1.888 4.213-4.215 4.213-2.328 0-4.214-1.887-4.214-4.213 0-2.328 1.886-4.215 4.214-4.215 2.327.001 4.215 1.887 4.215 4.215z"
                />
                <path
                  fill="#939393"
                  d="M94.973 123.449c0 2.365-1.919 4.284-4.286 4.284-2.366 0-4.284-1.919-4.284-4.284 0-2.368 1.918-4.286 4.284-4.286 2.367 0 4.286 1.918 4.286 4.286z"
                />
                <path
                  fill="#c8c8c8"
                  d="M94.577 113.79c0 1.944-1.574 3.52-3.518 3.52-1.944 0-3.521-1.575-3.521-3.52s1.576-3.519 3.521-3.519c1.944 0 3.518 1.574 3.518 3.519z"
                />
                <path
                  fill="#676767"
                  d="M99.238 100.559c0 2.168-1.757 3.926-3.925 3.926s-3.926-1.758-3.926-3.926 1.758-3.925 3.926-3.925 3.925 1.757 3.925 3.925z"
                />
                <path
                  fill="#444"
                  d="M99.118 77.075c0 2.36-1.914 4.273-4.272 4.273-2.359 0-4.272-1.913-4.272-4.273 0-2.358 1.913-4.271 4.272-4.271 2.358-.001 4.272 1.913 4.272 4.271z"
                />
                <path
                  fill="#4d4d4d"
                  d="M100.187 19.59c0 3.227-2.615 5.844-5.844 5.844-3.227 0-5.844-2.617-5.844-5.844 0-3.229 2.617-5.844 5.844-5.844 3.228 0 5.844 2.615 5.844 5.844z"
                />
                <path
                  fill="#222"
                  d="M93.021 10.522c0 1.546-1.252 2.798-2.797 2.798-1.544 0-2.797-1.252-2.797-2.798 0-1.544 1.253-2.795 2.797-2.795 1.545 0 2.797 1.251 2.797 2.795z"
                />
                <path
                  fill="#dbdbdb"
                  d="M111.241 259.038c0 3.857-3.126 6.984-6.983 6.984-3.857 0-6.983-3.127-6.983-6.984s3.126-6.983 6.983-6.983c3.857 0 6.983 3.125 6.983 6.983z"
                />
                <path
                  fill="#484848"
                  d="M105.324 246.214c0 2.75-2.229 4.979-4.978 4.979-2.748 0-4.977-2.229-4.977-4.979 0-2.749 2.229-4.977 4.977-4.977 2.75 0 4.978 2.228 4.978 4.977z"
                />
                <path
                  fill="#cfcfcf"
                  d="M109.407 234.667c0 2.571-2.084 4.655-4.654 4.655s-4.653-2.084-4.653-4.655c0-2.57 2.083-4.652 4.653-4.652 2.57 0 4.654 2.081 4.654 4.652z"
                />
                <path
                  fill="#383838"
                  d="M106.154 222.138c0 2.849-2.311 5.156-5.158 5.156-2.849 0-5.158-2.308-5.158-5.156s2.31-5.157 5.158-5.157c2.848 0 5.158 2.309 5.158 5.157z"
                />
                <path
                  fill="#bebebe"
                  d="M114.495 211.778c0 3.415-2.768 6.184-6.181 6.184-3.413 0-6.183-2.769-6.183-6.184 0-3.412 2.77-6.181 6.183-6.181s6.181 2.769 6.181 6.181z"
                />
                <path
                  fill="#8d8d8d"
                  d="M107.042 123.693c0 2.932-2.376 5.309-5.309 5.309-2.931 0-5.308-2.377-5.308-5.309 0-2.933 2.377-5.309 5.308-5.309 2.933.001 5.309 2.376 5.309 5.309z"
                />
                <path
                  fill="#1a1a1a"
                  d="M104.036 113.114c0 2.256-1.828 4.084-4.083 4.084s-4.083-1.828-4.083-4.084c0-2.255 1.828-4.082 4.083-4.082s4.083 1.827 4.083 4.082z"
                />
                <path
                  fill="#5e5e5e"
                  d="M106.721 103.708c0 1.855-1.506 3.361-3.361 3.361-1.855 0-3.36-1.506-3.36-3.361 0-1.856 1.505-3.36 3.36-3.36s3.361 1.503 3.361 3.36z"
                />
                <path
                  fill="#9b9b9b"
                  d="M108.951 79.413c0 2.395-1.941 4.336-4.336 4.336-2.396 0-4.336-1.941-4.336-4.336 0-2.395 1.94-4.336 4.336-4.336 2.395 0 4.336 1.941 4.336 4.336z"
                />
                <path
                  fill="#353535"
                  d="M113.3 31.001c0 3.512-2.847 6.358-6.358 6.358-3.511 0-6.358-2.847-6.358-6.358 0-3.511 2.848-6.357 6.358-6.357 3.511-.001 6.358 2.845 6.358 6.357z"
                />
                <path
                  fill="#8a8a8a"
                  d="M109.911 14.4c0 2.564-2.079 4.643-4.644 4.643s-4.644-2.078-4.644-4.643 2.079-4.643 4.644-4.643 4.644 2.078 4.644 4.643z"
                />
                <path
                  fill="gray"
                  d="M101.134 8.757c0 1.903-1.544 3.447-3.448 3.447s-3.448-1.544-3.448-3.447c0-1.904 1.544-3.448 3.448-3.448s3.448 1.543 3.448 3.448z"
                />
                <path
                  fill="#a5a5a5"
                  d="M123.612 253.153c0 3.363-2.727 6.088-6.09 6.088s-6.088-2.725-6.088-6.088 2.725-6.088 6.088-6.088 6.09 2.725 6.09 6.088z"
                />
                <path
                  fill="#919191"
                  d="M116.425 242.588c0 2.537-2.057 4.593-4.594 4.593-2.537 0-4.594-2.056-4.594-4.593s2.057-4.594 4.594-4.594c2.537 0 4.594 2.057 4.594 4.594z"
                />
                <path
                  fill="#adadad"
                  d="M123.199 231.649c0 3.401-2.756 6.157-6.156 6.157s-6.156-2.756-6.156-6.157c0-3.399 2.756-6.155 6.156-6.155s6.156 2.756 6.156 6.155z"
                />
                <path
                  fill="#646464"
                  d="M113.023 223.96c0 1.557-1.263 2.818-2.82 2.818s-2.819-1.262-2.819-2.818c0-1.56 1.263-2.82 2.819-2.82 1.557-.001 2.82 1.26 2.82 2.82z"
                />
                <path
                  fill="#d9d9d9"
                  d="M121.841 219.446c0 2.419-1.961 4.38-4.38 4.38-2.419 0-4.38-1.961-4.38-4.38 0-2.418 1.961-4.379 4.38-4.379 2.419 0 4.38 1.961 4.38 4.379z"
                />
                <path
                  fill="#898989"
                  d="M117.129 120.639c0 2.536-2.056 4.593-4.592 4.593-2.536 0-4.592-2.057-4.592-4.593 0-2.535 2.056-4.592 4.592-4.592 2.536 0 4.592 2.057 4.592 4.592z"
                />
                <path
                  fill="#6e6e6e"
                  d="M115.999 109.795c0 2.791-2.262 5.052-5.051 5.052s-5.052-2.261-5.052-5.052c0-2.789 2.263-5.051 5.052-5.051 2.789 0 5.051 2.262 5.051 5.051z"
                />
                <path
                  fill="#f5f5f5"
                  d="M121.385 90.217c0 2.523-2.046 4.567-4.568 4.567-2.523 0-4.569-2.044-4.569-4.567 0-2.522 2.046-4.568 4.569-4.568 2.522-.001 4.568 2.045 4.568 4.568z"
                />
                <path
                  fill="#5c5c5c"
                  d="M122.911 79.411c0 2.667-2.162 4.828-4.827 4.828-2.667 0-4.829-2.161-4.829-4.828 0-2.666 2.162-4.828 4.829-4.828 2.665 0 4.827 2.162 4.827 4.828z"
                />
                <path
                  fill="#e9e9e9"
                  d="M117.162 69.423c0 3.252-2.635 5.889-5.888 5.889-3.251 0-5.887-2.637-5.887-5.889 0-3.251 2.636-5.888 5.887-5.888 3.253 0 5.888 2.637 5.888 5.888z"
                />
                <path
                  fill="#545454"
                  d="M115.152 21.253c0 1.8-1.459 3.26-3.257 3.26-1.802 0-3.261-1.46-3.261-3.26 0-1.8 1.459-3.259 3.261-3.259 1.798 0 3.257 1.459 3.257 3.259z"
                />
                <path
                  fill="#9a9a9a"
                  d="M111.002 5.865c0 1.657-1.342 2.999-2.998 2.999-1.657 0-3-1.342-3-2.999 0-1.655 1.343-2.999 3-2.999 1.656 0 2.998 1.344 2.998 2.999z"
                />
                <path
                  fill="#eaeaea"
                  d="M121.545 5.953c0 2.547-2.066 4.612-4.614 4.612-2.546 0-4.611-2.065-4.611-4.612 0-2.548 2.065-4.612 4.611-4.612 2.548 0 4.614 2.064 4.614 4.612z"
                />
                <path
                  fill="#e8e8e8"
                  d="M138.827 261.509c0 4.482-3.633 8.113-8.114 8.113-4.479 0-8.112-3.631-8.112-8.113 0-4.48 3.633-8.111 8.112-8.111 4.48-.001 8.114 3.63 8.114 8.111z"
                />
                <path
                  fill="#101010"
                  d="M131.388 243.46c0 2.99-2.423 5.412-5.412 5.412-2.987 0-5.411-2.422-5.411-5.412 0-2.987 2.424-5.409 5.411-5.409 2.989 0 5.412 2.421 5.412 5.409z"
                />
                <path
                  fill="#d0d0d0"
                  d="M133.255 233.527c0 2.046-1.659 3.705-3.705 3.705-2.046 0-3.705-1.659-3.705-3.705 0-2.046 1.659-3.705 3.705-3.705 2.046 0 3.705 1.659 3.705 3.705z"
                />
                <path d="M131.402 224.227c0 2.6-2.107 4.704-4.705 4.704s-4.705-2.104-4.705-4.704c0-2.596 2.107-4.703 4.705-4.703s4.705 2.108 4.705 4.703z" />
                <path
                  fill="#a6a6a6"
                  d="M132.113 212.743c0 2.864-2.324 5.188-5.189 5.188s-5.188-2.323-5.188-5.188c0-2.866 2.323-5.189 5.188-5.189 2.865 0 5.189 2.323 5.189 5.189z"
                />
                <path
                  fill="#0b0b0b"
                  d="M130.628 173.985c0 2.867-2.321 5.188-5.187 5.188s-5.186-2.32-5.186-5.188c0-2.863 2.32-5.185 5.186-5.185s5.187 2.322 5.187 5.185z"
                />
                <path
                  fill="#666"
                  d="M128.541 122.959c0 2.855-2.314 5.171-5.169 5.171-2.856 0-5.171-2.315-5.171-5.171 0-2.856 2.314-5.17 5.171-5.17 2.855 0 5.169 2.314 5.169 5.17z"
                />
                <path
                  fill="#ededed"
                  d="M137.198 97.568c0 4.549-3.686 8.234-8.235 8.234-4.547 0-8.234-3.686-8.234-8.234 0-4.547 3.688-8.234 8.234-8.234 4.549 0 8.235 3.687 8.235 8.234z"
                />
                <path
                  fill="#393939"
                  d="M128.142 85.555c0 1.701-1.379 3.079-3.079 3.079-1.701 0-3.079-1.378-3.079-3.079 0-1.7 1.378-3.079 3.079-3.079 1.7 0 3.079 1.379 3.079 3.079z"
                />
                <path
                  fill="#070707"
                  d="M136.318 76.538c0 3.299-2.675 5.974-5.974 5.974-3.3 0-5.974-2.675-5.974-5.974 0-3.299 2.674-5.975 5.974-5.975 3.299 0 5.974 2.676 5.974 5.975z"
                />
                <path
                  fill="#b8b8b8"
                  d="M126.892 65.962c0 2.462-1.995 4.458-4.457 4.458-2.462 0-4.459-1.996-4.459-4.458s1.997-4.458 4.459-4.458c2.462 0 4.457 1.996 4.457 4.458z"
                />
                <path
                  fill="#8e8e8e"
                  d="M131.754 21.1c0 4.201-3.405 7.608-7.607 7.608-4.204 0-7.609-3.407-7.609-7.608 0-4.202 3.405-7.608 7.609-7.608 4.202 0 7.607 3.406 7.607 7.608z"
                />
                <path
                  fill="#b8b8b8"
                  d="M131.267 4.394c0 2.334-1.895 4.227-4.229 4.227s-4.227-1.893-4.227-4.227c0-2.335 1.893-4.227 4.227-4.227 2.334 0 4.229 1.892 4.229 4.227z"
                />
                <path
                  fill="#171717"
                  d="M144.588 251.303c0 2.457-1.991 4.451-4.452 4.451-2.457 0-4.452-1.994-4.452-4.451 0-2.46 1.995-4.452 4.452-4.452 2.461 0 4.452 1.992 4.452 4.452z"
                />
                <path
                  fill="#3d3d3d"
                  d="M138.96 243.718c0 1.541-1.249 2.792-2.792 2.792-1.541 0-2.792-1.251-2.792-2.792 0-1.542 1.251-2.792 2.792-2.792 1.543 0 2.792 1.25 2.792 2.792z"
                />
                <path
                  fill="#a8a8a8"
                  d="M141.063 236.296c0 1.879-1.521 3.399-3.399 3.399-1.876 0-3.398-1.521-3.398-3.399 0-1.876 1.521-3.398 3.398-3.398 1.879-.001 3.399 1.522 3.399 3.398zM142.085 226.701c0 2.65-2.148 4.799-4.799 4.799-2.65 0-4.798-2.148-4.798-4.799 0-2.648 2.148-4.797 4.798-4.797s4.799 2.148 4.799 4.797z"
                />
                <path
                  fill="#2c2c2c"
                  d="M141.051 216.374c0 2.283-1.849 4.13-4.131 4.13-2.281 0-4.13-1.847-4.13-4.13 0-2.279 1.85-4.13 4.13-4.13 2.283 0 4.131 1.85 4.131 4.13z"
                />
                <path
                  fill="#cfcfcf"
                  d="M137.165 164.823c0 2.634-2.135 4.769-4.769 4.769-2.633 0-4.768-2.135-4.768-4.769 0-2.633 2.135-4.768 4.768-4.768s4.769 2.135 4.769 4.768z"
                />
                <path
                  fill="#d3d3d3"
                  d="M146.03 104.055c0 2.475-2.005 4.48-4.479 4.48s-4.479-2.006-4.479-4.48c0-2.474 2.005-4.479 4.479-4.479 2.474.001 4.479 2.005 4.479 4.479z"
                />
                <path
                  fill="#080808"
                  d="M143.665 88.733c0 2.311-1.873 4.185-4.185 4.185-2.311 0-4.184-1.874-4.184-4.185 0-2.31 1.874-4.183 4.184-4.183 2.312.001 4.185 1.874 4.185 4.183z"
                />
                <path
                  fill="#6b6b6b"
                  d="M141.485 80.766c0 1.328-1.077 2.405-2.404 2.405-1.329 0-2.405-1.077-2.405-2.405 0-1.328 1.076-2.404 2.405-2.404 1.327 0 2.404 1.076 2.404 2.404z"
                />
                <path
                  fill="#666"
                  d="M138.855 64.249c0 2.977-2.413 5.389-5.388 5.389-2.978 0-5.389-2.412-5.389-5.389 0-2.976 2.411-5.388 5.389-5.388 2.975 0 5.388 2.412 5.388 5.388z"
                />
                <path
                  fill="#575757"
                  d="M141.942 17.748c0 2.566-2.079 4.646-4.646 4.646-2.566 0-4.645-2.08-4.645-4.646 0-2.565 2.079-4.645 4.645-4.645 2.567 0 4.646 2.079 4.646 4.645z"
                />
                <path
                  fill="#fafafa"
                  d="M135.953 10.047c0 1.528-1.238 2.768-2.768 2.768-1.528 0-2.768-1.239-2.768-2.768 0-1.529 1.239-2.769 2.768-2.769 1.53 0 2.768 1.24 2.768 2.769z"
                />
                <path
                  fill="#404040"
                  d="M142.429 3.965c0 2.191-1.775 3.967-3.967 3.967-2.19 0-3.966-1.775-3.966-3.967 0-2.189 1.776-3.965 3.966-3.965 2.192 0 3.967 1.775 3.967 3.965z"
                />
                <path
                  fill="#e4e4e4"
                  d="M149.041 264.812c0 2.524-2.046 4.567-4.568 4.567s-4.567-2.043-4.567-4.567c0-2.521 2.045-4.567 4.567-4.567 2.522 0 4.568 2.046 4.568 4.567z"
                />
                <path
                  fill="#bdbdbd"
                  d="M153.425 255.935c0 2.243-1.819 4.062-4.063 4.062-2.244 0-4.063-1.819-4.063-4.062 0-2.244 1.819-4.063 4.063-4.063 2.244 0 4.063 1.819 4.063 4.063z"
                />
                <path
                  fill="#c9c9c9"
                  d="M150.837 246.2c0 1.799-1.458 3.258-3.255 3.258-1.798 0-3.257-1.459-3.257-3.258 0-1.796 1.459-3.255 3.257-3.255 1.797 0 3.255 1.459 3.255 3.255z"
                />
                <path
                  fill="#fafafa"
                  d="M151.212 237.202c0 2.452-1.986 4.438-4.438 4.438-2.449 0-4.438-1.986-4.438-4.438s1.988-4.438 4.438-4.438c2.451-.001 4.438 1.986 4.438 4.438z"
                />
                <path
                  fill="#4c4c4c"
                  d="M156.358 222.913c0 3.733-3.028 6.763-6.764 6.763-3.734 0-6.762-3.029-6.762-6.763 0-3.736 3.027-6.763 6.762-6.763 3.736 0 6.764 3.027 6.764 6.763z"
                />
                <path
                  fill="#cdcdcd"
                  d="M150.599 210.366c0 2.794-2.264 5.062-5.059 5.062-2.795 0-5.059-2.268-5.059-5.062 0-2.792 2.264-5.06 5.059-5.06 2.795 0 5.059 2.268 5.059 5.06z"
                />
                <path
                  fill="#171717"
                  d="M153.213 84.625c0 2.504-2.03 4.533-4.533 4.533-2.504 0-4.532-2.029-4.532-4.533 0-2.502 2.028-4.532 4.532-4.532 2.503 0 4.533 2.03 4.533 4.532z"
                />
                <path
                  fill="#dedede"
                  d="M149.006 75.294c0 2.319-1.88 4.199-4.199 4.199s-4.199-1.88-4.199-4.199c0-2.32 1.88-4.201 4.199-4.201s4.199 1.88 4.199 4.201z"
                />
                <path
                  fill="#2f2f2f"
                  d="M153.837 67.316c0 2.177-1.765 3.942-3.943 3.942s-3.943-1.766-3.943-3.942c0-2.178 1.765-3.943 3.943-3.943s3.943 1.765 3.943 3.943z"
                />
                <path
                  fill="#5d5d5d"
                  d="M157.217 28.514c0 2.102-1.702 3.805-3.803 3.805-2.1 0-3.804-1.703-3.804-3.805 0-2.1 1.704-3.803 3.804-3.803 2.101.001 3.803 1.704 3.803 3.803z"
                />
                <path
                  fill="#393939"
                  d="M148.791 25.471c0 2.458-1.992 4.448-4.448 4.448-2.456 0-4.447-1.99-4.447-4.448 0-2.456 1.991-4.447 4.447-4.447s4.448 1.991 4.448 4.447z"
                />
                <path
                  fill="#2c2c2c"
                  d="M155.02 11.206c0 3.747-3.037 6.784-6.784 6.784-3.746 0-6.783-3.037-6.783-6.784 0-3.745 3.037-6.783 6.783-6.783 3.747 0 6.784 3.038 6.784 6.783z"
                />
                <path
                  fill="#ebebeb"
                  d="M163.823 262.134c0 3.026-2.452 5.479-5.477 5.479-3.025 0-5.478-2.452-5.478-5.479s2.452-5.479 5.478-5.479c3.025 0 5.477 2.452 5.477 5.479z"
                />
                <path
                  fill="#fafafa"
                  d="M160.012 248.946c0 2.293-1.857 4.15-4.15 4.15-2.292 0-4.15-1.857-4.15-4.15s1.858-4.15 4.15-4.15c2.293 0 4.15 1.857 4.15 4.15z"
                />
                <path
                  fill="#0a0a0a"
                  d="M161.422 239.129c0 2.439-1.978 4.416-4.416 4.416-2.439 0-4.415-1.977-4.415-4.416 0-2.438 1.976-4.415 4.415-4.415s4.416 1.976 4.416 4.415z"
                />
                <path
                  fill="#838383"
                  d="M165.241 229.377c0 2.553-2.069 4.621-4.622 4.621-2.555 0-4.623-2.068-4.623-4.621 0-2.556 2.068-4.624 4.623-4.624 2.552 0 4.622 2.068 4.622 4.624z"
                />
                <path
                  fill="#7b7b7b"
                  d="M167.444 218.276c0 2.877-2.333 5.208-5.208 5.208-2.877 0-5.21-2.331-5.21-5.208 0-2.877 2.333-5.209 5.21-5.209 2.875 0 5.208 2.332 5.208 5.209z"
                />
                <path
                  fill="#d1d1d1"
                  d="M160.137 209.671c0 2.236-1.813 4.048-4.049 4.048-2.236 0-4.049-1.812-4.049-4.048 0-2.236 1.812-4.05 4.049-4.05 2.236 0 4.049 1.813 4.049 4.05z"
                />
                <path
                  fill="#616161"
                  d="M161.658 38.094c0 2.705-2.191 4.896-4.896 4.896s-4.896-2.19-4.896-4.896c0-2.703 2.192-4.896 4.896-4.896 2.704 0 4.896 2.193 4.896 4.896z"
                />
                <path
                  fill="#ececec"
                  d="M158.286 20.344c0 1.775-1.438 3.216-3.217 3.216-1.775 0-3.215-1.44-3.215-3.216 0-1.776 1.439-3.217 3.215-3.217 1.778.001 3.217 1.441 3.217 3.217z"
                />
                <path
                  fill="#b1b1b1"
                  d="M164.296 6.704c0 2.403-1.947 4.351-4.349 4.351-2.403 0-4.352-1.947-4.352-4.351 0-2.402 1.948-4.349 4.352-4.349 2.402 0 4.349 1.946 4.349 4.349z"
                />
                <path
                  fill="#616161"
                  d="M182.447 254.511c0 4.547-3.686 8.234-8.234 8.234s-8.234-3.688-8.234-8.234c0-4.546 3.687-8.234 8.234-8.234 4.548 0 8.234 3.688 8.234 8.234z"
                />
                <path
                  fill="#2e2e2e"
                  d="M167.688 246.056c0 1.889-1.531 3.42-3.42 3.42s-3.42-1.531-3.42-3.42 1.531-3.42 3.42-3.42 3.42 1.532 3.42 3.42z"
                />
                <path
                  fill="#505050"
                  d="M171.703 237.341c0 2.45-1.986 4.437-4.437 4.437-2.449 0-4.437-1.986-4.437-4.437 0-2.449 1.987-4.437 4.437-4.437s4.437 1.987 4.437 4.437z"
                />
                <path
                  fill="#262626"
                  d="M180.395 227.084c0 3.574-2.899 6.475-6.475 6.475-3.577 0-6.474-2.9-6.474-6.475 0-3.577 2.896-6.474 6.474-6.474 3.576 0 6.475 2.897 6.475 6.474z"
                />
                <path
                  fill="#dcdcdc"
                  d="M173.639 210.451c0 2.267-1.839 4.106-4.106 4.106s-4.105-1.84-4.105-4.106c0-2.268 1.839-4.104 4.105-4.104 2.267-.001 4.106 1.836 4.106 4.104z"
                />
                <path
                  fill="#7a7a7a"
                  d="M182.263 175.743c0 3.119-2.527 5.643-5.644 5.643s-5.643-2.523-5.643-5.643c0-3.116 2.525-5.644 5.643-5.644 3.117 0 5.644 2.528 5.644 5.644z"
                />
                <path
                  fill="#5e5e5e"
                  d="M177.747 163.198c0 3.187-2.582 5.77-5.769 5.77-3.186 0-5.77-2.583-5.77-5.77 0-3.187 2.584-5.77 5.77-5.77 3.187 0 5.769 2.583 5.769 5.77z"
                />
                <path
                  fill="#868686"
                  d="M171.201 41.77c0 2.422-1.961 4.383-4.382 4.383-2.419 0-4.383-1.961-4.383-4.383 0-2.42 1.964-4.382 4.383-4.382 2.421 0 4.382 1.962 4.382 4.382z"
                />
                <path
                  fill="#909090"
                  d="M178.584 32.869c0 2.926-2.37 5.297-5.296 5.297s-5.297-2.371-5.297-5.297c0-2.925 2.371-5.296 5.297-5.296 2.926 0 5.296 2.371 5.296 5.296z"
                />
                <path
                  fill="#eaeaea"
                  d="M174.685 20.604c0 3.744-3.037 6.779-6.781 6.779-3.743 0-6.777-3.035-6.777-6.779 0-3.744 3.034-6.779 6.777-6.779 3.744 0 6.781 3.035 6.781 6.779z"
                />
                <path
                  fill="#ededed"
                  d="M173.859 8.673c0 2.202-1.785 3.987-3.986 3.987-2.202 0-3.985-1.785-3.985-3.987 0-2.201 1.783-3.986 3.985-3.986 2.201-.001 3.986 1.784 3.986 3.986z"
                />
                <path
                  fill="#a6a6a6"
                  d="M185.149 242.336c0 2.38-1.93 4.31-4.312 4.31-2.38 0-4.311-1.93-4.311-4.31 0-2.381 1.931-4.311 4.311-4.311 2.382 0 4.312 1.93 4.312 4.311z"
                />
                <path
                  fill="#a5a5a5"
                  d="M177.389 236.944c0 1.177-.952 2.129-2.128 2.129-1.175 0-2.128-.952-2.128-2.129 0-1.173.953-2.128 2.128-2.128 1.176 0 2.128.955 2.128 2.128z"
                />
                <path
                  fill="#2e2e2e"
                  d="M186.717 214.632c0 3.461-2.807 6.269-6.268 6.269-3.462 0-6.267-2.808-6.267-6.269 0-3.461 2.805-6.266 6.267-6.266s6.268 2.805 6.268 6.266z"
                />
                <path
                  fill="#3f3f3f"
                  d="M188.342 166.012c0 2.654-2.152 4.806-4.809 4.806-2.654 0-4.807-2.151-4.807-4.806 0-2.656 2.152-4.809 4.807-4.809 2.657.001 4.809 2.153 4.809 4.809z"
                />
                <path
                  fill="#2d2d2d"
                  d="M188.602 154.763c0 2.27-1.839 4.108-4.108 4.108-2.269 0-4.109-1.839-4.109-4.108 0-2.269 1.84-4.108 4.109-4.108s4.108 1.839 4.108 4.108z"
                />
                <path
                  fill="#fbfbfb"
                  d="M184.305 146.16c0 2.331-1.891 4.22-4.221 4.22s-4.22-1.889-4.22-4.22c0-2.331 1.89-4.22 4.22-4.22s4.221 1.889 4.221 4.22z"
                />
                <path
                  fill="#c4c4c4"
                  d="M185.912 78.046c0 3.344-2.709 6.055-6.055 6.055-3.343 0-6.054-2.711-6.054-6.055s2.711-6.054 6.054-6.054c3.346 0 6.055 2.71 6.055 6.054z"
                />
                <path
                  fill="#1a1a1a"
                  d="M186.537 62.635c0 2.317-1.879 4.195-4.196 4.195-2.318 0-4.197-1.878-4.197-4.195 0-2.318 1.879-4.197 4.197-4.197 2.317-.001 4.196 1.878 4.196 4.197z"
                />
                <path
                  fill="#262626"
                  d="M181.599 53.845c0 2.74-2.222 4.963-4.964 4.963-2.74 0-4.963-2.223-4.963-4.963 0-2.742 2.223-4.964 4.963-4.964 2.743.001 4.964 2.222 4.964 4.964z"
                />
                <path
                  fill="#252525"
                  d="M185.137 42.824c0 2.883-2.337 5.219-5.219 5.219s-5.218-2.336-5.218-5.219c0-2.883 2.336-5.22 5.218-5.22s5.219 2.337 5.219 5.22z"
                />
                <path
                  fill="#9d9d9d"
                  d="M189.36 31.903c0 2.623-2.126 4.749-4.748 4.749-2.622 0-4.748-2.126-4.748-4.749 0-2.622 2.126-4.748 4.748-4.748 2.622 0 4.748 2.126 4.748 4.748z"
                />
                <path
                  fill="#666"
                  d="M188.505 21.312c0 2.382-1.93 4.312-4.31 4.312-2.382 0-4.313-1.93-4.313-4.312 0-2.38 1.932-4.312 4.313-4.312 2.381.001 4.31 1.932 4.31 4.312z"
                />
                <path
                  fill="#2f2f2f"
                  d="M182.123 13.667c0 2.276-1.845 4.121-4.121 4.121-2.275 0-4.121-1.845-4.121-4.121 0-2.275 1.846-4.121 4.121-4.121 2.276 0 4.121 1.845 4.121 4.121z"
                />
                <path
                  fill="#585858"
                  d="M195.808 251.375c0 3.402-2.756 6.158-6.157 6.158-3.399 0-6.156-2.756-6.156-6.158 0-3.398 2.757-6.157 6.156-6.157 3.401 0 6.157 2.758 6.157 6.157z"
                />
                <path
                  fill="#a8a8a8"
                  d="M197.482 237.109c0 3.373-2.735 6.108-6.109 6.108s-6.109-2.735-6.109-6.108c0-3.376 2.735-6.111 6.109-6.111s6.109 2.735 6.109 6.111z"
                />
                <path
                  fill="gray"
                  d="M196.865 225.184c0 2.504-2.03 4.534-4.535 4.534-2.504 0-4.534-2.03-4.534-4.534 0-2.506 2.03-4.536 4.534-4.536 2.505 0 4.535 2.03 4.535 4.536z"
                />
                <path
                  fill="#adadad"
                  d="M197.853 214.403c0 2.71-2.197 4.909-4.911 4.909-2.711 0-4.91-2.199-4.91-4.909 0-2.712 2.199-4.912 4.91-4.912 2.714 0 4.911 2.2 4.911 4.912z"
                />
                <path
                  fill="#373737"
                  d="M202.24 203.879c0 2.753-2.23 4.984-4.984 4.984-2.752 0-4.982-2.231-4.982-4.984 0-2.751 2.23-4.981 4.982-4.981 2.753-.001 4.984 2.23 4.984 4.981z"
                />
                <path
                  fill="#b6b6b6"
                  d="M193.624 172.449c0 1.773-1.438 3.212-3.21 3.212-1.773 0-3.21-1.438-3.21-3.212 0-1.772 1.437-3.207 3.21-3.207 1.771 0 3.21 1.435 3.21 3.207z"
                />
                <path
                  fill="#696969"
                  d="M197.222 160.466c0 2.511-2.035 4.546-4.547 4.546-2.51 0-4.547-2.035-4.547-4.546 0-2.512 2.037-4.547 4.547-4.547 2.512 0 4.547 2.035 4.547 4.547z"
                />
                <path
                  fill="#a3a3a3"
                  d="M200.83 96.936c0 4.23-3.429 7.661-7.659 7.661-4.229 0-7.66-3.431-7.66-7.661 0-4.23 3.431-7.66 7.66-7.66 4.23 0 7.659 3.43 7.659 7.66z"
                />
                <path
                  fill="#4f4f4f"
                  d="M194.146 83.95c0 2.354-1.908 4.262-4.263 4.262s-4.263-1.907-4.263-4.262c0-2.355 1.908-4.263 4.263-4.263s4.263 1.908 4.263 4.263z"
                />
                <path
                  fill="#929292"
                  d="M197.156 70.42c0 3.392-2.751 6.141-6.143 6.141s-6.141-2.749-6.141-6.141c0-3.393 2.749-6.143 6.141-6.143s6.143 2.75 6.143 6.143z"
                />
                <path
                  fill="#444"
                  d="M200.118 51.514c0 4.548-3.687 8.234-8.233 8.234-4.55 0-8.234-3.687-8.234-8.234 0-4.549 3.685-8.234 8.234-8.234 4.546 0 8.233 3.686 8.233 8.234z"
                />
                <path
                  fill="#666"
                  d="M193.632 38.871c0 1.703-1.382 3.085-3.086 3.085s-3.086-1.382-3.086-3.085c0-1.705 1.382-3.087 3.086-3.087s3.086 1.382 3.086 3.087z"
                />
                <path
                  fill="#fafafa"
                  d="M202.497 30.342c0 3.291-2.668 5.957-5.957 5.957-3.29 0-5.957-2.666-5.957-5.957 0-3.29 2.667-5.957 5.957-5.957 3.289 0 5.957 2.666 5.957 5.957z"
                />
                <path
                  fill="#1f1f1f"
                  d="M193.66 15.403c0 1.675-1.358 3.033-3.034 3.033-1.675 0-3.033-1.358-3.033-3.033 0-1.676 1.358-3.034 3.033-3.034 1.675 0 3.034 1.358 3.034 3.034z"
                />
                <path
                  fill="#363636"
                  d="M205.161 247.556c0 2.394-1.94 4.333-4.333 4.333-2.394 0-4.334-1.939-4.334-4.333s1.94-4.333 4.334-4.333c2.392 0 4.333 1.94 4.333 4.333z"
                />
                <path
                  fill="#3f3f3f"
                  d="M206.25 238.303c0 2.071-1.681 3.751-3.752 3.751-2.073 0-3.753-1.68-3.753-3.751 0-2.074 1.68-3.752 3.753-3.752 2.071 0 3.752 1.678 3.752 3.752z"
                />
                <path
                  fill="#0d0d0d"
                  d="M206.906 228.344c0 2.543-2.062 4.604-4.606 4.604-2.542 0-4.604-2.061-4.604-4.604 0-2.545 2.062-4.605 4.604-4.605 2.543 0 4.606 2.061 4.606 4.605z"
                />
                <path
                  fill="#1f1f1f"
                  d="M210.129 213.186c0 3.044-2.468 5.509-5.512 5.509-3.044 0-5.511-2.465-5.511-5.509 0-3.045 2.467-5.513 5.511-5.513s5.512 2.468 5.512 5.513z"
                />
                <path
                  fill="#1a1a1a"
                  d="M210.274 196.134c0 2.686-2.177 4.86-4.863 4.86-2.686 0-4.861-2.175-4.861-4.86 0-2.687 2.176-4.864 4.861-4.864 2.686-.001 4.863 2.177 4.863 4.864z"
                />
                <path
                  fill="#979797"
                  d="M212.276 187.209c0 1.846-1.495 3.341-3.342 3.341-1.846 0-3.341-1.495-3.341-3.341 0-1.847 1.495-3.342 3.341-3.342 1.847 0 3.342 1.495 3.342 3.342z"
                />
                <path
                  fill="#f6f6f6"
                  d="M199.003 168.242c0 1.495-1.213 2.707-2.707 2.707-1.494 0-2.706-1.212-2.706-2.707 0-1.494 1.212-2.706 2.706-2.706s2.707 1.212 2.707 2.706z"
                />
                <path
                  fill="#c1c1c1"
                  d="M207.83 116.216c0 1.833-1.487 3.32-3.32 3.32-1.834 0-3.32-1.487-3.32-3.32 0-1.834 1.486-3.319 3.32-3.319 1.832-.001 3.32 1.485 3.32 3.319z"
                />
                <path
                  fill="#5e5e5e"
                  d="M215.006 105.617c0 3.642-2.952 6.592-6.593 6.592-3.64 0-6.59-2.95-6.59-6.592 0-3.64 2.95-6.591 6.59-6.591 3.641 0 6.593 2.951 6.593 6.591z"
                />
                <path
                  fill="#d3d3d3"
                  d="M214.414 90.2c0 3.754-3.044 6.797-6.798 6.797-3.755 0-6.797-3.043-6.797-6.797 0-3.753 3.042-6.797 6.797-6.797 3.754 0 6.798 3.044 6.798 6.797z"
                />
                <path
                  fill="#fafafa"
                  d="M205.784 78.841c0 2.899-2.353 5.251-5.252 5.251-2.9 0-5.25-2.352-5.25-5.251 0-2.9 2.35-5.251 5.25-5.251 2.899 0 5.252 2.35 5.252 5.251z"
                />
                <path
                  fill="#232323"
                  d="M212.744 68.338c0 3.145-2.55 5.693-5.694 5.693s-5.694-2.549-5.694-5.693c0-3.146 2.55-5.694 5.694-5.694s5.694 2.548 5.694 5.694z"
                />
                <path
                  fill="#c2c2c2"
                  d="M201.705 62.627c0 1.816-1.472 3.288-3.288 3.288-1.817 0-3.29-1.472-3.29-3.288 0-1.816 1.473-3.29 3.29-3.29 1.816 0 3.288 1.473 3.288 3.29z"
                />
                <path
                  fill="#737373"
                  d="M201.867 41.206c0 1.61-1.306 2.917-2.916 2.917-1.61 0-2.916-1.307-2.916-2.917 0-1.611 1.306-2.916 2.916-2.916 1.61 0 2.916 1.304 2.916 2.916z"
                />
                <path
                  fill="#e5e5e5"
                  d="M210.113 36.708c0 2.276-1.846 4.121-4.121 4.121-2.277 0-4.122-1.845-4.122-4.121 0-2.276 1.845-4.121 4.122-4.121 2.275 0 4.121 1.844 4.121 4.121z"
                />
                <path
                  fill="#373737"
                  d="M201.116 19.478c0 2.005-1.624 3.63-3.628 3.63-2.005 0-3.63-1.625-3.63-3.63 0-2.004 1.625-3.629 3.63-3.629 2.004 0 3.628 1.625 3.628 3.629z"
                />
                <path
                  fill="#757575"
                  d="M217.304 234.086c0 2.936-2.381 5.313-5.316 5.313-2.937 0-5.315-2.378-5.315-5.313 0-2.937 2.379-5.316 5.315-5.316 2.935-.001 5.316 2.379 5.316 5.316z"
                />
                <path
                  fill="#b3b3b3"
                  d="M217.374 222.346c0 2.82-2.288 5.108-5.108 5.108-2.818 0-5.105-2.288-5.105-5.108s2.287-5.105 5.105-5.105c2.82 0 5.108 2.285 5.108 5.105z"
                />
                <path
                  fill="#555"
                  d="M219.202 212.47c0 2.115-1.714 3.829-3.828 3.829-2.115 0-3.829-1.714-3.829-3.829s1.714-3.829 3.829-3.829c2.114 0 3.828 1.714 3.828 3.829z"
                />
                <path
                  fill="#2d2d2d"
                  d="M223.348 198.418c0 3.281-2.658 5.939-5.938 5.939-3.281 0-5.939-2.658-5.939-5.939 0-3.28 2.658-5.941 5.939-5.941 3.28-.001 5.938 2.66 5.938 5.941z"
                />
                <path
                  fill="#7a7a7a"
                  d="M223.542 183.913c0 2.866-2.324 5.19-5.19 5.19-2.866 0-5.19-2.324-5.19-5.19 0-2.866 2.324-5.19 5.19-5.19 2.866 0 5.19 2.324 5.19 5.19z"
                />
                <path
                  fill="#626262"
                  d="M212.646 180.222c0 1.303-1.055 2.357-2.355 2.357s-2.354-1.055-2.354-2.357c0-1.299 1.054-2.354 2.354-2.354s2.355 1.056 2.355 2.354z"
                />
                <path
                  fill="#212121"
                  d="M211.486 122.267c0 1.394-1.129 2.521-2.521 2.521s-2.522-1.128-2.522-2.521c0-1.392 1.13-2.521 2.522-2.521s2.521 1.13 2.521 2.521z"
                />
                <path
                  fill="#8b8b8b"
                  d="M227.602 110.5c0 3.358-2.722 6.079-6.079 6.079-3.357 0-6.08-2.721-6.08-6.079 0-3.357 2.723-6.079 6.08-6.079s6.079 2.721 6.079 6.079z"
                />
                <path
                  fill="#e1e1e1"
                  d="M219.525 97.634c0 1.81-1.467 3.277-3.276 3.277-1.809 0-3.278-1.468-3.278-3.277 0-1.809 1.469-3.276 3.278-3.276s3.276 1.466 3.276 3.276z"
                />
                <path
                  fill="#545454"
                  d="M225.674 82.762c0 2.624-2.128 4.754-4.755 4.754-2.625 0-4.753-2.13-4.753-4.754 0-2.626 2.128-4.756 4.753-4.756 2.627.001 4.755 2.13 4.755 4.756z"
                />
                <path
                  fill="#010101"
                  d="M215.616 78.623c0 2.265-1.837 4.102-4.102 4.102-2.268 0-4.102-1.837-4.102-4.102 0-2.266 1.834-4.102 4.102-4.102 2.265 0 4.102 1.836 4.102 4.102z"
                />
                <path
                  fill="#686868"
                  d="M220.52 66.579c0 1.826-1.479 3.305-3.305 3.305s-3.306-1.479-3.306-3.305c0-1.825 1.479-3.305 3.306-3.305 1.826 0 3.305 1.48 3.305 3.305z"
                />
                <path
                  fill="#161616"
                  d="M218.024 56.799c0 3.114-2.524 5.64-5.64 5.64-3.116 0-5.641-2.525-5.641-5.64 0-3.115 2.525-5.641 5.641-5.641s5.64 2.525 5.64 5.641z"
                />
                <path
                  fill="#535353"
                  d="M216.239 45.198c0 2.58-2.09 4.671-4.671 4.671-2.578 0-4.67-2.091-4.67-4.671 0-2.579 2.092-4.67 4.67-4.67 2.581 0 4.671 2.091 4.671 4.67z"
                />
                <path
                  fill="#e2e2e2"
                  d="M222.741 35.055c0 3.087-2.501 5.59-5.589 5.59-3.088 0-5.589-2.503-5.589-5.59 0-3.086 2.501-5.589 5.589-5.589 3.088 0 5.589 2.503 5.589 5.589z"
                />
                <path
                  fill="#ababab"
                  d="M229.879 228.005c0 3.459-2.803 6.261-6.261 6.261-3.459 0-6.261-2.802-6.261-6.261 0-3.455 2.802-6.26 6.261-6.26s6.261 2.805 6.261 6.26z"
                />
                <path
                  fill="#676767"
                  d="M227.182 216.765c0 2.022-1.639 3.661-3.661 3.661-2.022 0-3.662-1.639-3.662-3.661 0-2.022 1.64-3.662 3.662-3.662 2.022 0 3.661 1.64 3.661 3.662z"
                />
                <path
                  fill="#757575"
                  d="M228.668 207.494c0 2.331-1.892 4.223-4.226 4.223-2.333 0-4.224-1.892-4.224-4.223 0-2.334 1.891-4.226 4.224-4.226 2.334 0 4.226 1.892 4.226 4.226z"
                />
                <path
                  fill="#343434"
                  d="M234.015 191.195c0 3.186-2.582 5.767-5.768 5.767s-5.767-2.581-5.767-5.767c0-3.186 2.581-5.77 5.767-5.77 3.186 0 5.768 2.585 5.768 5.77z"
                />
                <path
                  fill="#252525"
                  d="M234.752 179.629c0 2.558-2.072 4.632-4.631 4.632-2.558 0-4.63-2.074-4.63-4.632 0-2.556 2.072-4.63 4.63-4.63s4.631 2.074 4.631 4.63z"
                />
                <path
                  fill="#dfdfdf"
                  d="M231.237 72.094c0 3.025-2.451 5.477-5.477 5.477-3.024 0-5.474-2.451-5.474-5.477 0-3.023 2.449-5.475 5.474-5.475 3.026.001 5.477 2.452 5.477 5.475z"
                />
                <path
                  fill="#898989"
                  d="M230.911 59.414c0 3.265-2.646 5.911-5.91 5.911-3.266 0-5.912-2.646-5.912-5.911 0-3.266 2.646-5.912 5.912-5.912 3.263 0 5.91 2.646 5.91 5.912z"
                />
                <path
                  fill="#cacaca"
                  d="M232.509 45.442c0 3.673-2.977 6.648-6.646 6.648-3.673 0-6.649-2.976-6.649-6.648 0-3.672 2.977-6.647 6.649-6.647 3.67 0 6.646 2.975 6.646 6.647z"
                />
                <path
                  fill="#6e6e6e"
                  d="M240.949 216.035c0 3.442-2.792 6.234-6.234 6.234-3.445 0-6.237-2.792-6.237-6.234 0-3.446 2.792-6.238 6.237-6.238 3.442 0 6.234 2.792 6.234 6.238z"
                />
                <path
                  fill="#f6f6f6"
                  d="M240.582 202.541c0 3.229-2.62 5.849-5.85 5.849-3.23 0-5.846-2.619-5.846-5.849s2.616-5.847 5.846-5.847 5.85 2.617 5.85 5.847z"
                />
                <path
                  fill="#575757"
                  d="M242.655 191.725c0 2.018-1.636 3.654-3.653 3.654-2.021 0-3.655-1.637-3.655-3.654 0-2.021 1.635-3.654 3.655-3.654 2.017 0 3.653 1.634 3.653 3.654z"
                />
                <path
                  fill="#dedede"
                  d="M247.257 181.412c0 3.126-2.536 5.661-5.662 5.661-3.128 0-5.664-2.535-5.664-5.661 0-3.129 2.536-5.664 5.664-5.664 3.126 0 5.662 2.535 5.662 5.664z"
                />
                <path
                  fill="#4a4a4a"
                  d="M242.853 86.626c0 3.1-2.511 5.612-5.612 5.612-3.099 0-5.612-2.513-5.612-5.612s2.514-5.612 5.612-5.612c3.101-.001 5.612 2.512 5.612 5.612z"
                />
                <path
                  fill="#d9d9d9"
                  d="M243.829 74.841c0 2.74-2.222 4.962-4.963 4.962-2.74 0-4.962-2.222-4.962-4.962 0-2.74 2.222-4.961 4.962-4.961 2.741 0 4.963 2.22 4.963 4.961z"
                />
                <path
                  fill="#515151"
                  d="M242.207 63.398c0 2.925-2.372 5.296-5.296 5.296-2.925 0-5.296-2.371-5.296-5.296 0-2.924 2.371-5.294 5.296-5.294 2.924 0 5.296 2.37 5.296 5.294z"
                />
                <path
                  fill="#8d8d8d"
                  d="M240.329 52.35c0 2.383-1.933 4.314-4.315 4.314-2.382 0-4.313-1.932-4.313-4.314s1.931-4.315 4.313-4.315c2.382 0 4.315 1.933 4.315 4.315z"
                />
                <path
                  fill="#bfbfbf"
                  d="M248.806 206.017c0 2.065-1.674 3.738-3.738 3.738-2.065 0-3.739-1.673-3.739-3.738 0-2.064 1.674-3.739 3.739-3.739 2.064 0 3.738 1.675 3.738 3.739z"
                />
                <path
                  fill="#e2e2e2"
                  d="M250.148 197.026c0 2.18-1.765 3.947-3.944 3.947-2.179 0-3.946-1.768-3.946-3.947 0-2.179 1.767-3.945 3.946-3.945 2.179 0 3.944 1.765 3.944 3.945z"
                />
                <path
                  fill="#222"
                  d="M256.789 177.734c0 2.425-1.963 4.388-4.386 4.388s-4.387-1.963-4.387-4.388c0-2.421 1.964-4.385 4.387-4.385 2.423 0 4.386 1.964 4.386 4.385z"
                />
                <path
                  fill="#dbdbdb"
                  d="M256.759 78.479c0 3.357-2.723 6.08-6.081 6.08-3.357 0-6.08-2.723-6.08-6.08 0-3.358 2.723-6.081 6.08-6.081 3.359 0 6.081 2.723 6.081 6.081z"
                />
                <path
                  fill="#a7a7a7"
                  d="M251.127 67.482c0 2.306-1.868 4.175-4.174 4.175s-4.174-1.869-4.174-4.175c0-2.305 1.868-4.174 4.174-4.174s4.174 1.869 4.174 4.174z"
                />
                <path
                  fill="#696969"
                  d="M244.35 56.602c0 1.1-.892 1.99-1.991 1.99-1.099 0-1.99-.891-1.99-1.99s.892-1.99 1.99-1.99c1.1 0 1.991.892 1.991 1.99z"
                />
                <path
                  fill="#7a7a7a"
                  d="M257.462 188.676c0 2.803-2.271 5.075-5.074 5.075-2.804 0-5.075-2.272-5.075-5.075 0-2.802 2.271-5.074 5.075-5.074 2.803-.001 5.074 2.272 5.074 5.074z"
                />
                <path
                  fill="#040404"
                  d="M265.959 165.413c0 3.484-2.825 6.309-6.31 6.309-3.483 0-6.308-2.824-6.308-6.309 0-3.485 2.824-6.309 6.308-6.309s6.31 2.824 6.31 6.309z"
                />
                <path
                  fill="#525252"
                  d="M262.523 151.944c0 2.726-2.209 4.935-4.934 4.935-2.726 0-4.935-2.209-4.935-4.935 0-2.725 2.209-4.934 4.935-4.934 2.725 0 4.934 2.209 4.934 4.934z"
                />
                <path
                  fill="#0b0b0b"
                  d="M266.661 141.342c0 2.719-2.204 4.923-4.923 4.923-2.718 0-4.922-2.204-4.922-4.923s2.204-4.921 4.922-4.921c2.719 0 4.923 2.202 4.923 4.921z"
                />
                <path
                  fill="#d5d5d5"
                  d="M261.761 131.6c0 2.468-1.999 4.468-4.467 4.468-2.468 0-4.469-2-4.469-4.468s2.001-4.468 4.469-4.468c2.468 0 4.467 2.001 4.467 4.468z"
                />
                <path
                  fill="#c5c5c5"
                  d="M267.88 112.623c0 3.533-2.864 6.396-6.396 6.396s-6.396-2.862-6.396-6.396c0-3.531 2.863-6.395 6.396-6.395 3.532 0 6.396 2.864 6.396 6.395z"
                />
                <path
                  fill="#282828"
                  d="M265.041 99.938c0 2.72-2.203 4.924-4.924 4.924-2.72 0-4.925-2.204-4.925-4.924s2.205-4.925 4.925-4.925c2.72 0 4.924 2.205 4.924 4.925z"
                />
                <path
                  fill="#333"
                  d="M268.009 156.62c0 1.499-1.215 2.714-2.714 2.714-1.499 0-2.713-1.215-2.713-2.714 0-1.497 1.214-2.712 2.713-2.712s2.714 1.215 2.714 2.712z"
                />
                <path
                  fill="#b8b8b8"
                  d="M269.732 132.97c0 1.844-1.495 3.339-3.339 3.339-1.845 0-3.339-1.495-3.339-3.339 0-1.844 1.494-3.339 3.339-3.339 1.844.001 3.339 1.496 3.339 3.339z"
                />
                <path
                  fill="#383838"
                  d="M268.95 124.2c0 2.366-1.917 4.283-4.282 4.283s-4.283-1.917-4.283-4.283c0-2.365 1.918-4.282 4.283-4.282s4.282 1.917 4.282 4.282z"
                />
                <path
                  fill="#fbfbfb"
                  d="M9.295 109.567c0 1.891-1.533 3.424-3.423 3.424-1.891 0-3.424-1.533-3.424-3.424 0-1.892 1.533-3.424 3.424-3.424 1.89 0 3.423 1.533 3.423 3.424z"
                />
                <path
                  fill="#1f1f1f"
                  d="M26.402 63.121c0 1.447-1.174 2.619-2.62 2.619-1.445 0-2.619-1.172-2.619-2.619 0-1.446 1.174-2.62 2.619-2.62 1.447 0 2.62 1.174 2.62 2.62z"
                />
                <path
                  fill="#1e1e1e"
                  d="M29.112 193.841c0 1.464-1.187 2.652-2.65 2.652-1.465 0-2.652-1.188-2.652-2.652 0-1.465 1.188-2.65 2.652-2.65 1.464-.001 2.65 1.185 2.65 2.65z"
                />
                <path
                  fill="#3f3f3f"
                  d="M31.557 77.213c0 1.255-1.017 2.27-2.27 2.27-1.253 0-2.27-1.015-2.27-2.27 0-1.253 1.017-2.269 2.27-2.269 1.253 0 2.27 1.016 2.27 2.269z"
                />
                <path
                  fill="#d1d1d1"
                  d="M38.383 119.198c0 1.682-1.363 3.045-3.046 3.045-1.682 0-3.046-1.363-3.046-3.045 0-1.684 1.364-3.047 3.046-3.047 1.683 0 3.046 1.363 3.046 3.047z"
                />
                <path
                  fill="#1a1a1a"
                  d="M37.509 71.777c0 1.335-1.084 2.417-2.419 2.417-1.336 0-2.418-1.082-2.418-2.417 0-1.336 1.082-2.418 2.418-2.418 1.335 0 2.419 1.082 2.419 2.418z"
                />
                <path
                  fill="#e1e1e1"
                  d="M42.114 106.178c0 1.456-1.181 2.636-2.636 2.636-1.456 0-2.637-1.18-2.637-2.636 0-1.455 1.181-2.635 2.637-2.635 1.456.001 2.636 1.18 2.636 2.635z"
                />
                <path
                  fill="#3a3a3a"
                  d="M43.345 113.529c0 1.71-1.386 3.096-3.096 3.096-1.71 0-3.096-1.386-3.096-3.096 0-1.71 1.386-3.097 3.096-3.097 1.71 0 3.096 1.387 3.096 3.097z"
                />
                <path
                  fill="#0d0d0d"
                  d="M43.28 58.765c0 1.589-1.287 2.877-2.876 2.877s-2.875-1.288-2.875-2.877c0-1.588 1.286-2.876 2.875-2.876s2.876 1.288 2.876 2.876z"
                />
                <path
                  fill="#4d4d4d"
                  d="M50.483 232.776c0 1.865-1.513 3.381-3.381 3.381-1.866 0-3.38-1.516-3.38-3.381 0-1.868 1.514-3.382 3.38-3.382 1.868 0 3.381 1.514 3.381 3.382z"
                />
                <path
                  fill="#5d5d5d"
                  d="M58.848 89.052c0 2.111-1.711 3.821-3.821 3.821-2.111 0-3.82-1.71-3.82-3.821 0-2.11 1.709-3.821 3.82-3.821 2.11 0 3.821 1.711 3.821 3.821z"
                />
                <path
                  fill="#969696"
                  d="M61.483 28.403c0 1.936-1.57 3.506-3.505 3.506-1.936 0-3.505-1.57-3.505-3.506 0-1.936 1.569-3.505 3.505-3.505 1.935 0 3.505 1.57 3.505 3.505z"
                />
                <path
                  fill="#0f0f0f"
                  d="M61.262 50.983c0 1.254-1.017 2.271-2.27 2.271-1.255 0-2.271-1.017-2.271-2.271s1.016-2.27 2.271-2.27c1.253.001 2.27 1.016 2.27 2.27z"
                />
                <path
                  fill="#050505"
                  d="M63.624 244.821c0 1.312-1.062 2.373-2.371 2.373-1.312 0-2.373-1.061-2.373-2.373 0-1.31 1.062-2.372 2.373-2.372 1.31 0 2.371 1.062 2.371 2.372z"
                />
                <path
                  fill="#d5d5d5"
                  d="M63.472 85.034c0 1.242-1.006 2.248-2.248 2.248-1.241 0-2.247-1.006-2.247-2.248 0-1.241 1.006-2.247 2.247-2.247 1.242 0 2.248 1.006 2.248 2.247z"
                />
                <path
                  fill="#4f4f4f"
                  d="M64.969 139.684c0 1.337-1.085 2.42-2.421 2.42-1.338 0-2.421-1.083-2.421-2.42s1.083-2.422 2.421-2.422c1.336 0 2.421 1.085 2.421 2.422z"
                />
                <path
                  fill="#989898"
                  d="M67.208 22.182c0 1.255-1.016 2.273-2.271 2.273s-2.273-1.019-2.273-2.273c0-1.254 1.018-2.272 2.273-2.272 1.255 0 2.271 1.017 2.271 2.272z"
                />
                <path
                  fill="#767676"
                  d="M72.677 227.509c0 2.107-1.709 3.816-3.817 3.816-2.107 0-3.817-1.709-3.817-3.816 0-2.107 1.71-3.818 3.817-3.818 2.108-.001 3.817 1.71 3.817 3.818z"
                />
                <path
                  fill="#1b1b1b"
                  d="M72.685 118.815c0 1.597-1.295 2.892-2.892 2.892s-2.891-1.295-2.891-2.892 1.294-2.891 2.891-2.891 2.892 1.294 2.892 2.891z"
                />
                <path
                  fill="#282828"
                  d="M76.676 205.538c0 1.649-1.336 2.985-2.985 2.985-1.646 0-2.982-1.336-2.982-2.985 0-1.646 1.336-2.982 2.982-2.982 1.649-.001 2.985 1.335 2.985 2.982z"
                />
                <path
                  fill="#111"
                  d="M75.523 146.528c0 1.317-1.066 2.384-2.383 2.384s-2.386-1.066-2.386-2.384c0-1.318 1.068-2.385 2.386-2.385 1.316 0 2.383 1.068 2.383 2.385z"
                />
                <path
                  fill="#212121"
                  d="M84.822 242.469c0 1.196-.97 2.166-2.165 2.166-1.197 0-2.166-.97-2.166-2.166 0-1.197.969-2.167 2.166-2.167 1.196 0 2.165.97 2.165 2.167z"
                />
                <path
                  fill="#0d0d0d"
                  d="M86.853 75.839c0 1.264-1.023 2.286-2.285 2.286-1.264 0-2.287-1.022-2.287-2.286s1.023-2.286 2.287-2.286c1.261-.001 2.285 1.022 2.285 2.286z"
                />
                <path
                  fill="#595959"
                  d="M95.258 259.121c0 1.873-1.519 3.392-3.392 3.392s-3.392-1.519-3.392-3.392c0-1.874 1.519-3.392 3.392-3.392s3.392 1.518 3.392 3.392z"
                />
                <path
                  fill="#858585"
                  d="M87.533 109.141c0 1.272-1.03 2.303-2.305 2.303-1.271 0-2.303-1.03-2.303-2.303s1.032-2.305 2.303-2.305c1.275.001 2.305 1.033 2.305 2.305z"
                />
                <path
                  fill="#d1d1d1"
                  d="M97.827 143.782c0 2.27-1.84 4.111-4.11 4.111-2.271 0-4.111-1.842-4.111-4.111 0-2.271 1.84-4.11 4.111-4.11 2.27 0 4.11 1.839 4.11 4.11z"
                />
                <path
                  fill="#dcdcdc"
                  d="M93.09 106.617c0 1.293-1.047 2.342-2.342 2.342-1.292 0-2.34-1.049-2.34-2.342 0-1.293 1.048-2.34 2.34-2.34 1.295 0 2.342 1.047 2.342 2.34z"
                />
                <path
                  fill="#bbb"
                  d="M96.032 251.812c0 1.444-1.169 2.612-2.61 2.612-1.441 0-2.609-1.168-2.609-2.612 0-1.44 1.168-2.609 2.609-2.609s2.61 1.169 2.61 2.609z"
                />
                <path
                  fill="#9d9d9d"
                  d="M100.813 212.411c0 2.316-1.876 4.192-4.19 4.192-2.315 0-4.191-1.876-4.191-4.192 0-2.312 1.876-4.188 4.191-4.188 2.314-.001 4.19 1.875 4.19 4.188z"
                />
                <path
                  fill="#a2a2a2"
                  d="M98.748 84.977c0 1.35-1.093 2.445-2.444 2.445s-2.444-1.096-2.444-2.445c0-1.351 1.094-2.445 2.444-2.445 1.351 0 2.444 1.095 2.444 2.445z"
                />
                <path
                  fill="#1e1e1e"
                  d="M99.242 29.324c0 1.543-1.25 2.793-2.794 2.793s-2.795-1.25-2.795-2.793c0-1.544 1.251-2.795 2.795-2.795s2.794 1.251 2.794 2.795z"
                />
                <path
                  fill="#8c8c8c"
                  d="M104.119 71.6c0 1.543-1.251 2.794-2.792 2.794-1.544 0-2.795-1.251-2.795-2.794 0-1.542 1.251-2.793 2.795-2.793 1.541 0 2.792 1.251 2.792 2.793z"
                />
                <path
                  fill="#3f3f3f"
                  d="M113.278 84.189c0 1.271-1.031 2.302-2.302 2.302-1.271 0-2.301-1.031-2.301-2.302 0-1.271 1.029-2.302 2.301-2.302 1.271 0 2.302 1.031 2.302 2.302z"
                />
                <path
                  fill="#4c4c4c"
                  d="M121.398 264.609c0 2.192-1.777 3.971-3.972 3.971-2.193 0-3.972-1.778-3.972-3.971 0-2.195 1.778-3.973 3.972-3.973s3.972 1.778 3.972 3.973z"
                />
                <path
                  fill="#333"
                  d="M117.227 14.357c0 1.533-1.243 2.777-2.777 2.777-1.535 0-2.778-1.244-2.778-2.777 0-1.535 1.243-2.778 2.778-2.778 1.533 0 2.777 1.243 2.777 2.778z"
                />
                <path
                  fill="#4f4f4f"
                  d="M120.72 210.44c0 1.336-1.083 2.419-2.419 2.419-1.337 0-2.42-1.083-2.42-2.419 0-1.335 1.083-2.419 2.42-2.419 1.336 0 2.419 1.084 2.419 2.419z"
                />
                <path
                  fill="#e3e3e3"
                  d="M122.942 181.677c0 1.331-1.081 2.411-2.414 2.411-1.333 0-2.414-1.08-2.414-2.411 0-1.333 1.081-2.413 2.414-2.413 1.333 0 2.414 1.079 2.414 2.413z"
                />
                <path
                  fill="#3b3b3b"
                  d="M128.683 58.445c0 1.428-1.158 2.586-2.586 2.586s-2.586-1.158-2.586-2.586c0-1.427 1.158-2.585 2.586-2.585s2.586 1.158 2.586 2.585z"
                />
                <path
                  fill="#2c2c2c"
                  d="M134.488 249.924c0 1.23-.996 2.226-2.227 2.226-1.229 0-2.225-.995-2.225-2.226 0-1.228.996-2.226 2.225-2.226 1.231 0 2.227.998 2.227 2.226z"
                />
                <path
                  fill="#a3a3a3"
                  d="M134.452 86.051c0 1.302-1.058 2.358-2.359 2.358-1.303 0-2.36-1.057-2.36-2.358 0-1.304 1.058-2.359 2.36-2.359 1.302-.001 2.359 1.055 2.359 2.359z"
                />
                <path
                  fill="#464646"
                  d="M138.675 26.793c0 1.748-1.417 3.165-3.166 3.165-1.747 0-3.165-1.417-3.165-3.165s1.418-3.165 3.165-3.165c1.749 0 3.166 1.417 3.166 3.165z"
                />
                <path
                  fill="#dbdbdb"
                  d="M144.551 67.746c0 1.395-1.131 2.525-2.526 2.525-1.395 0-2.523-1.131-2.523-2.525s1.129-2.524 2.523-2.524c1.395-.001 2.526 1.13 2.526 2.524z"
                />
                <path
                  fill="#222"
                  d="M146.199 182.315c0 1.273-1.033 2.306-2.308 2.306-1.273 0-2.306-1.032-2.306-2.306s1.032-2.309 2.306-2.309c1.275.001 2.308 1.035 2.308 2.309z"
                />
                <path
                  fill="#9a9a9a"
                  d="M148.912 202.303c0 .988-.802 1.791-1.791 1.791-.988 0-1.791-.803-1.791-1.791 0-.988.803-1.791 1.791-1.791.989 0 1.791.803 1.791 1.791z"
                />
                <path
                  fill="#9d9d9d"
                  d="M155.015 232.454c0 1.127-.915 2.043-2.043 2.043-1.127 0-2.042-.916-2.042-2.043 0-1.127.915-2.043 2.042-2.043 1.128 0 2.043.916 2.043 2.043z"
                />
                <path
                  fill="#dcdcdc"
                  d="M155.041 74.424c0 1.281-1.039 2.321-2.32 2.321-1.282 0-2.321-1.04-2.321-2.321 0-1.281 1.039-2.321 2.321-2.321 1.281-.001 2.32 1.039 2.32 2.321z"
                />
                <path
                  fill="#fcfcfc"
                  d="M161.495 14.811c0 1.293-1.05 2.341-2.343 2.341s-2.342-1.048-2.342-2.341c0-1.295 1.049-2.344 2.342-2.344 1.293 0 2.343 1.049 2.343 2.344z"
                />
                <path
                  fill="#9c9c9c"
                  d="M164.69 253.683c0 1.335-1.083 2.419-2.418 2.419-1.336 0-2.419-1.084-2.419-2.419 0-1.336 1.083-2.419 2.419-2.419 1.335 0 2.418 1.083 2.418 2.419z"
                />
                <path
                  fill="#a2a2a2"
                  d="M166.788 31.165c0 1.868-1.516 3.383-3.384 3.383-1.868 0-3.383-1.515-3.383-3.383s1.515-3.382 3.383-3.382 3.384 1.514 3.384 3.382z"
                />
                <path
                  fill="#a4a4a4"
                  d="M165.301 206.046c0 1.312-1.062 2.375-2.374 2.375-1.311 0-2.373-1.063-2.373-2.375 0-1.311 1.062-2.373 2.373-2.373 1.312 0 2.374 1.062 2.374 2.373z"
                />
                <path
                  fill="#a8a8a8"
                  d="M171.962 48.938c0 1.115-.905 2.021-2.021 2.021-1.117 0-2.021-.906-2.021-2.021 0-1.117.904-2.022 2.021-2.022 1.115 0 2.021.905 2.021 2.022z"
                />
                <path
                  fill="#686868"
                  d="M175.184 242.879c0 1.181-.959 2.141-2.141 2.141s-2.139-.96-2.139-2.141c0-1.182.957-2.139 2.139-2.139s2.141.957 2.141 2.139z"
                />
                <path
                  fill="#b2b2b2"
                  d="M178.978 155.022c0 1.254-1.017 2.271-2.271 2.271-1.253 0-2.27-1.017-2.27-2.271 0-1.255 1.017-2.271 2.27-2.271 1.255 0 2.271 1.016 2.271 2.271z"
                />
                <path
                  fill="#151515"
                  d="M179.492 25.104c0 1.185-.963 2.146-2.148 2.146s-2.146-.962-2.146-2.146c0-1.187.961-2.147 2.146-2.147s2.148.961 2.148 2.147z"
                />
                <path
                  fill="#565656"
                  d="M184.472 233.826c0 1.446-1.172 2.619-2.618 2.619-1.447 0-2.62-1.173-2.62-2.619 0-1.446 1.173-2.62 2.62-2.62 1.446 0 2.618 1.174 2.618 2.62z"
                />
                <path
                  fill="#909090"
                  d="M186.467 224.225c0 1.425-1.152 2.578-2.578 2.578-1.424 0-2.578-1.153-2.578-2.578 0-1.423 1.154-2.579 2.578-2.579 1.426 0 2.578 1.156 2.578 2.579z"
                />
                <path
                  fill="#858585"
                  d="M187.337 11.891c0 1.091-.884 1.977-1.977 1.977-1.091 0-1.975-.886-1.975-1.977 0-1.091.884-1.975 1.975-1.975 1.094.001 1.977.885 1.977 1.975z"
                />
                <path
                  fill="#5f5f5f"
                  d="M199.824 87.002c0 1.101-.893 1.995-1.997 1.995-1.101 0-1.994-.895-1.994-1.995 0-1.103.894-1.997 1.994-1.997 1.104 0 1.997.894 1.997 1.997z"
                />
                <path
                  fill="#0d0d0d"
                  d="M201.417 220.543c0 1.292-1.046 2.339-2.336 2.339-1.292 0-2.34-1.047-2.34-2.339s1.048-2.339 2.34-2.339c1.29 0 2.336 1.047 2.336 2.339z"
                />
                <path
                  fill="gray"
                  d="M204.353 188.4c0 1.215-.986 2.2-2.2 2.2-1.216 0-2.201-.985-2.201-2.2 0-1.214.985-2.199 2.201-2.199 1.214 0 2.2.985 2.2 2.199z"
                />
                <path
                  fill="#797979"
                  d="M205.356 56.934c0 1.419-1.149 2.569-2.57 2.569-1.418 0-2.568-1.15-2.568-2.569s1.15-2.57 2.568-2.57c1.421 0 2.57 1.151 2.57 2.57z"
                />
                <path
                  fill="#121212"
                  d="M207.207 50.378c0 1.576-1.277 2.854-2.854 2.854-1.577 0-2.854-1.278-2.854-2.854s1.277-2.854 2.854-2.854c1.577 0 2.854 1.277 2.854 2.854z"
                />
                <path
                  fill="#9b9b9b"
                  d="M212.484 26.841c0 2.496-2.023 4.52-4.52 4.52-2.497 0-4.52-2.023-4.52-4.52 0-2.497 2.023-4.52 4.52-4.52 2.497 0 4.52 2.023 4.52 4.52z"
                />
                <path
                  fill="#0c0c0c"
                  d="M212.265 243.642c0 1.817-1.472 3.289-3.287 3.289s-3.286-1.472-3.286-3.289c0-1.813 1.471-3.286 3.286-3.286s3.287 1.473 3.287 3.286z"
                />
                <path
                  fill="#363636"
                  d="M212.106 204.437c0 1.621-1.315 2.934-2.937 2.934-1.622 0-2.934-1.312-2.934-2.934s1.312-2.937 2.934-2.937 2.937 1.316 2.937 2.937z"
                />
                <path
                  fill="#0f0f0f"
                  d="M215.641 116.015c0 1.785-1.446 3.232-3.23 3.232s-3.23-1.447-3.23-3.232c0-1.784 1.446-3.23 3.23-3.23s3.23 1.446 3.23 3.23z"
                />
                <path
                  fill="#e2e2e2"
                  d="M218.942 73.305c0 1.163-.943 2.104-2.105 2.104-1.161 0-2.104-.941-2.104-2.104 0-1.162.943-2.104 2.104-2.104 1.162 0 2.105.942 2.105 2.104z"
                />
                <path
                  fill="#b6b6b6"
                  d="M222.623 91.437c0 1.448-1.172 2.62-2.619 2.62-1.447 0-2.621-1.172-2.621-2.62 0-1.447 1.174-2.62 2.621-2.62s2.619 1.173 2.619 2.62z"
                />
                <path
                  fill="#dcdcdc"
                  d="M232.239 80.864c0 1.462-1.187 2.648-2.647 2.648-1.462 0-2.648-1.187-2.648-2.648 0-1.463 1.187-2.647 2.648-2.647 1.46 0 2.647 1.184 2.647 2.647z"
                />
                <path
                  fill="#d7d7d7"
                  d="M260.864 182.69c0 1.24-1.007 2.247-2.247 2.247s-2.245-1.007-2.245-2.247 1.005-2.243 2.245-2.243c1.24 0 2.247 1.003 2.247 2.243z"
                />
                <path
                  fill="#efefef"
                  d="M263.259 175.704c0 1.493-1.21 2.702-2.701 2.702s-2.7-1.209-2.7-2.702c0-1.489 1.209-2.699 2.7-2.699s2.701 1.21 2.701 2.699z"
                />
                <path
                  fill="#141414"
                  d="M268.881 149.289c0 1.504-1.22 2.722-2.723 2.722s-2.72-1.218-2.72-2.722c0-1.503 1.217-2.721 2.72-2.721 1.503 0 2.723 1.218 2.723 2.721z"
                />
                <path
                  fill="#131313"
                  d="M53.415 227.457c0 1.155-.938 2.092-2.094 2.092s-2.092-.937-2.092-2.092c0-1.158.937-2.095 2.092-2.095s2.094.937 2.094 2.095z"
                />
                <path
                  fill="#c9c9c9"
                  d="M63.027 66.084c0 1.103-.894 1.995-1.997 1.995-1.102 0-1.997-.893-1.997-1.995 0-1.104.896-1.997 1.997-1.997 1.104 0 1.997.893 1.997 1.997z"
                />
                <path
                  fill="#2f2f2f"
                  d="M80.133 255.021c0 1.073-.87 1.943-1.944 1.943-1.073 0-1.943-.87-1.943-1.943s.87-1.942 1.943-1.942c1.074 0 1.944.869 1.944 1.942z"
                />
                <path
                  fill="#aaa"
                  d="M203.326 164.7c0 1.143-.928 2.07-2.071 2.07-1.143 0-2.068-.928-2.068-2.07 0-1.144.926-2.07 2.068-2.07 1.143 0 2.071.926 2.071 2.07z"
                />
                <path
                  fill="#ccc"
                  d="M206.862 181.821c0 .932-.757 1.688-1.688 1.688-.934 0-1.689-.756-1.689-1.688 0-.935.756-1.69 1.689-1.69.931 0 1.688.755 1.688 1.69z"
                />
                <path
                  fill="#d0d0d0"
                  d="M151.148 95.228c0 2.381-1.931 4.312-4.313 4.312-2.38 0-4.31-1.932-4.31-4.312 0-2.38 1.93-4.312 4.31-4.312 2.382.001 4.313 1.931 4.313 4.312z"
                />
                <path
                  fill="#cacaca"
                  d="M13.791 158.169c0 3.161-2.562 5.725-5.723 5.725s-5.723-2.563-5.723-5.725c0-3.162 2.562-5.724 5.723-5.724s5.723 2.563 5.723 5.724z"
                />
                <path
                  fill="#9b9b9b"
                  d="M75.49 175.568c0 2.602-2.108 4.709-4.71 4.709-2.601 0-4.709-2.107-4.709-4.709 0-2.602 2.108-4.709 4.709-4.709 2.602 0 4.71 2.108 4.71 4.709z"
                />
                <path
                  fill="#707070"
                  d="M86.744 182.706c0 3.384-2.743 6.127-6.127 6.127s-6.127-2.743-6.127-6.127 2.743-6.127 6.127-6.127 6.127 2.743 6.127 6.127z"
                />
                <path
                  fill="#8b8b8b"
                  d="M96.636 176.374c0 2.369-1.92 4.292-4.289 4.292-2.37 0-4.291-1.923-4.291-4.292 0-2.37 1.921-4.29 4.291-4.29 2.369 0 4.289 1.92 4.289 4.29z"
                />
                <path
                  fill="#717171"
                  d="M86.996 174.413c0 1.078-.874 1.953-1.955 1.953-1.078 0-1.954-.875-1.954-1.953 0-1.081.876-1.956 1.954-1.956 1.081 0 1.955.875 1.955 1.956z"
                />
                <path
                  fill="#7b7b7b"
                  d="M101.551 166.746c0 2.721-2.208 4.926-4.929 4.926-2.722 0-4.93-2.205-4.93-4.926 0-2.723 2.208-4.93 4.93-4.93 2.721 0 4.929 2.207 4.929 4.93z"
                />
                <path
                  fill="#aeaeae"
                  d="M110.633 161.905c0 2.431-1.97 4.402-4.401 4.402s-4.401-1.972-4.401-4.402 1.97-4.401 4.401-4.401 4.401 1.971 4.401 4.401z"
                />
                <path
                  fill="#6f6f6f"
                  d="M121.193 154.013c0 3.322-2.692 6.015-6.015 6.015-3.323 0-6.017-2.692-6.017-6.015 0-3.323 2.693-6.017 6.017-6.017 3.323.001 6.015 2.695 6.015 6.017z"
                />
                <path
                  fill="#acacac"
                  d="M117.425 142.469c0 2.438-1.974 4.412-4.41 4.412-2.438 0-4.411-1.975-4.411-4.412 0-2.436 1.974-4.41 4.411-4.41 2.436 0 4.41 1.975 4.41 4.41z"
                />
                <path
                  fill="#c1c1c1"
                  d="M80.425 173.434c0 1.078-.874 1.953-1.953 1.953-1.078 0-1.953-.875-1.953-1.953s.875-1.953 1.953-1.953c1.079 0 1.953.875 1.953 1.953z"
                />
                <path
                  fill="#3a3a3a"
                  d="M123.004 145.804c0 1.331-1.078 2.409-2.409 2.409-1.33 0-2.408-1.078-2.408-2.409 0-1.33 1.078-2.408 2.408-2.408 1.331 0 2.409 1.078 2.409 2.408z"
                />
                <path
                  fill="#525252"
                  d="M106.062 169.101c0 .911-.738 1.649-1.649 1.649s-1.649-.738-1.649-1.649c0-.912.738-1.65 1.649-1.65s1.649.738 1.649 1.65z"
                />
                <path
                  fill="#ababab"
                  d="M46.28 163.785c0 3.193-2.589 5.782-5.782 5.782s-5.781-2.589-5.781-5.782 2.588-5.782 5.781-5.782c3.193 0 5.782 2.589 5.782 5.782z"
                />
                <path
                  fill="#1d1d1d"
                  d="M57.683 153.057c0 4.074-3.305 7.377-7.379 7.377-4.075 0-7.379-3.303-7.379-7.377s3.304-7.379 7.379-7.379c4.074 0 7.379 3.305 7.379 7.379z"
                />
                <path
                  fill="#c7c7c7"
                  d="M41.942 150.376c0 1.234-1 2.234-2.234 2.234-1.232 0-2.23-1-2.23-2.234 0-1.232.998-2.232 2.23-2.232 1.234-.001 2.234.999 2.234 2.232z"
                />
                <path
                  fill="#2e2e2e"
                  d="M59.818 107.793c0 4.547-3.687 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.548 3.688-8.234 8.234-8.234 4.548-.001 8.234 3.686 8.234 8.234z"
                />
                <path
                  fill="#555"
                  d="M63.887 166.531c0 3.551-2.879 6.428-6.429 6.428-3.551 0-6.428-2.877-6.428-6.428 0-3.55 2.877-6.427 6.428-6.427 3.55 0 6.429 2.877 6.429 6.427z"
                />
                <path
                  fill="#4e4e4e"
                  d="M60.694 126.749c0 2.195-1.779 3.975-3.975 3.975-2.194 0-3.975-1.779-3.975-3.975s1.78-3.975 3.975-3.975c2.196 0 3.975 1.779 3.975 3.975z"
                />
                <path
                  fill="#cacaca"
                  d="M65.516 118.077c0 2.442-1.979 4.421-4.421 4.421s-4.421-1.979-4.421-4.421c0-2.44 1.979-4.42 4.421-4.42 2.441 0 4.421 1.979 4.421 4.42z"
                />
                <path
                  fill="#f1f1f1"
                  d="M68.006 98.496c0 2.809-2.277 5.086-5.086 5.086-2.81 0-5.087-2.277-5.087-5.086 0-2.81 2.277-5.087 5.087-5.087 2.809 0 5.086 2.277 5.086 5.087z"
                />
                <path
                  fill="#d9d9d9"
                  d="M70.839 126.744c0 2.407-1.95 4.357-4.357 4.357s-4.357-1.95-4.357-4.357 1.95-4.358 4.357-4.358 4.357 1.951 4.357 4.358z"
                />
                <path
                  fill="#919191"
                  d="M75.267 88.436c0 3.064-2.483 5.548-5.547 5.548-3.064 0-5.548-2.483-5.548-5.548 0-3.063 2.483-5.548 5.548-5.548 3.063 0 5.547 2.485 5.547 5.548z"
                />
                <path
                  fill="#515151"
                  d="M84.506 130.055c0 2.186-1.773 3.959-3.959 3.959-2.187 0-3.959-1.773-3.959-3.959 0-2.187 1.772-3.959 3.959-3.959 2.186 0 3.959 1.773 3.959 3.959z"
                />
                <path
                  fill="#3e3e3e"
                  d="M77.628 124.321c0 1.592-1.292 2.882-2.883 2.882-1.593 0-2.882-1.29-2.882-2.882s1.289-2.882 2.882-2.882c1.591 0 2.883 1.29 2.883 2.882zM75.732 98.11c0 1.771-1.437 3.207-3.207 3.207-1.772 0-3.209-1.436-3.209-3.207s1.437-3.208 3.209-3.208c1.77 0 3.207 1.437 3.207 3.208z"
                />
                <path
                  fill="#e2e2e2"
                  d="M94.848 133.919c0 2.702-2.191 4.894-4.895 4.894-2.702 0-4.893-2.191-4.893-4.894 0-2.703 2.19-4.894 4.893-4.894s4.895 2.191 4.895 4.894z"
                />
                <path
                  fill="#7e7e7e"
                  d="M92.49 85.332c0 3.352-2.717 6.067-6.069 6.067s-6.068-2.716-6.068-6.067 2.717-6.068 6.068-6.068c3.353-.001 6.069 2.716 6.069 6.068z"
                />
                <path
                  fill="#bababa"
                  d="M104.74 136.524c0 2.43-1.97 4.397-4.399 4.397-2.429 0-4.397-1.968-4.397-4.397 0-2.429 1.969-4.398 4.397-4.398 2.43 0 4.399 1.969 4.399 4.398z"
                />
                <path
                  fill="#060606"
                  d="M110.916 92.145c0 3.769-3.055 6.823-6.823 6.823-3.767 0-6.822-3.055-6.822-6.823 0-3.768 3.056-6.823 6.822-6.823 3.768 0 6.823 3.055 6.823 6.823z"
                />
                <path
                  fill="#f4f4f4"
                  d="M115.42 131.911c0 2.867-2.326 5.192-5.192 5.192-2.869 0-5.192-2.325-5.192-5.192 0-2.868 2.323-5.191 5.192-5.191 2.866-.001 5.192 2.323 5.192 5.191z"
                />
                <path
                  fill="#bcbcbc"
                  d="M114.327 100.497c0 1.624-1.318 2.939-2.941 2.939-1.624 0-2.938-1.315-2.938-2.939s1.314-2.94 2.938-2.94c1.623-.001 2.941 1.316 2.941 2.94z"
                />
                <path
                  fill="#242424"
                  d="M128.296 111.211c0 2.907-2.358 5.266-5.267 5.266-2.907 0-5.266-2.358-5.266-5.266 0-2.909 2.358-5.267 5.266-5.267 2.909 0 5.267 2.357 5.267 5.267z"
                />
                <path
                  fill="#030303"
                  d="M80.437 90.51c0 1.131-.918 2.048-2.049 2.048-1.131 0-2.048-.917-2.048-2.048 0-1.132.917-2.049 2.048-2.049s2.049.918 2.049 2.049z"
                />
                <path
                  fill="#f1f1f1"
                  d="M95.885 92.843c0 1.499-1.215 2.714-2.713 2.714-1.499 0-2.714-1.215-2.714-2.714 0-1.499 1.215-2.713 2.714-2.713 1.498 0 2.713 1.213 2.713 2.713z"
                />
                <path d="M120.692 103.288c0 1.553-1.258 2.811-2.811 2.811s-2.812-1.258-2.812-2.811c0-1.554 1.259-2.812 2.812-2.812s2.811 1.258 2.811 2.812z" />
                <path
                  fill="#b0b0b0"
                  d="M15.634 170.439c0 2.941-2.386 5.327-5.328 5.327-2.943 0-5.329-2.386-5.329-5.327 0-2.942 2.386-5.327 5.329-5.327 2.942 0 5.328 2.385 5.328 5.327z"
                />
                <path
                  fill="#2e2e2e"
                  d="M18.996 142.409c0 1.955-1.583 3.54-3.538 3.54-1.955 0-3.539-1.585-3.539-3.54 0-1.954 1.584-3.539 3.539-3.539s3.538 1.585 3.538 3.539z"
                />
                <path
                  fill="#7b7b7b"
                  d="M26.558 160.66c0 3.214-2.605 5.819-5.819 5.819s-5.817-2.605-5.817-5.819 2.604-5.819 5.817-5.819 5.819 2.605 5.819 5.819z"
                />
                <path
                  fill="#8d8d8d"
                  d="M30.448 134.334c0 3.479-2.821 6.302-6.3 6.302-3.48 0-6.302-2.822-6.302-6.302 0-3.48 2.821-6.301 6.302-6.301 3.479 0 6.3 2.821 6.3 6.301z"
                />
                <path
                  fill="#dfdfdf"
                  d="M30.573 121.401c0 2.828-2.293 5.121-5.12 5.121-2.828 0-5.122-2.293-5.122-5.121 0-2.829 2.294-5.121 5.122-5.121 2.827 0 5.12 2.292 5.12 5.121z"
                />
                <path
                  fill="#070707"
                  d="M30.811 97.244c0 3.649-2.96 6.607-6.608 6.607-3.648 0-6.608-2.958-6.608-6.607s2.96-6.607 6.608-6.607c3.648 0 6.608 2.957 6.608 6.607z"
                />
                <path
                  fill="#c4c4c4"
                  d="M18.536 150.694c0 1.828-1.482 3.309-3.31 3.309s-3.309-1.48-3.309-3.309c0-1.827 1.481-3.309 3.309-3.309s3.31 1.482 3.31 3.309z"
                />
                <path
                  fill="#7a7a7a"
                  d="M20.097 125.979c0 2.087-1.692 3.777-3.779 3.777-2.087 0-3.777-1.69-3.777-3.777s1.69-3.778 3.777-3.778 3.779 1.691 3.779 3.778z"
                />
                <path
                  fill="#5b5b5b"
                  d="M16.638 135.759c0 1.007-.815 1.822-1.821 1.822s-1.822-.815-1.822-1.822c0-1.006.816-1.821 1.822-1.821 1.006 0 1.821.815 1.821 1.821z"
                />
                <path
                  fill="#1d1d1d"
                  d="M20.949 172.93c0 1.166-.946 2.112-2.113 2.112s-2.114-.946-2.114-2.112c0-1.168.947-2.115 2.114-2.115 1.167 0 2.113.947 2.113 2.115z"
                />
                <path
                  fill="gray"
                  d="M28.271 147.1c0 2.524-2.046 4.57-4.57 4.57-2.524 0-4.57-2.046-4.57-4.57 0-2.524 2.046-4.57 4.57-4.57 2.524 0 4.57 2.046 4.57 4.57z"
                />
                <path
                  fill="#121212"
                  d="M151.462 129.246c0 2.065-1.674 3.739-3.739 3.739-2.063 0-3.738-1.674-3.738-3.739 0-2.064 1.675-3.738 3.738-3.738 2.065 0 3.739 1.673 3.739 3.738z"
                />
                <path
                  fill="#797979"
                  d="M143.021 131.449c0 1.094-.888 1.981-1.981 1.981s-1.981-.888-1.981-1.981.888-1.98 1.981-1.98 1.981.886 1.981 1.98z"
                />
                <path
                  fill="#b5b5b5"
                  d="M155.182 112.1c0 3.023-2.452 5.475-5.476 5.475s-5.474-2.451-5.474-5.475c0-3.024 2.45-5.475 5.474-5.475s5.476 2.452 5.476 5.475z"
                />
                <path
                  fill="#838383"
                  d="M163.233 123.409c0 3.339-2.706 6.044-6.045 6.044s-6.044-2.705-6.044-6.044c0-3.339 2.705-6.045 6.044-6.045 3.339 0 6.045 2.706 6.045 6.045z"
                />
                <path
                  fill="#686868"
                  d="M169.885 110.581c0 3.722-3.016 6.737-6.735 6.737-3.721 0-6.736-3.016-6.736-6.737 0-3.719 3.016-6.736 6.736-6.736 3.72-.001 6.735 3.017 6.735 6.736z"
                />
                <path
                  fill="#171717"
                  d="M160.087 100.535c0 2.515-2.037 4.554-4.553 4.554s-4.554-2.039-4.554-4.554 2.038-4.553 4.554-4.553c2.516 0 4.553 2.038 4.553 4.553z"
                />
                <path
                  fill="#f5f5f5"
                  d="M164.259 89.731c0 2.986-2.421 5.406-5.407 5.406s-5.408-2.42-5.408-5.406c0-2.987 2.422-5.407 5.408-5.407s5.407 2.42 5.407 5.407z"
                />
                <path
                  fill="#cecece"
                  d="M168.79 98.795c0 2.083-1.689 3.771-3.772 3.771-2.082 0-3.771-1.688-3.771-3.771s1.689-3.771 3.771-3.771c2.082-.001 3.772 1.688 3.772 3.771z"
                />
                <path
                  fill="#424242"
                  d="M174.577 90.693c0 2.471-2.003 4.476-4.475 4.476-2.473 0-4.478-2.005-4.478-4.476 0-2.474 2.005-4.477 4.478-4.477 2.472.001 4.475 2.003 4.475 4.477z"
                />
                <path
                  fill="#cacaca"
                  d="M149.321 121.347c0 1.634-1.323 2.958-2.957 2.958s-2.959-1.324-2.959-2.958c0-1.634 1.325-2.958 2.959-2.958 1.634 0 2.957 1.325 2.957 2.958z"
                />
                <path
                  fill="#d6d6d6"
                  d="M143.328 125.699c0 1.288-1.045 2.332-2.334 2.332-1.288 0-2.333-1.044-2.333-2.332 0-1.289 1.045-2.334 2.333-2.334 1.289 0 2.334 1.045 2.334 2.334z"
                />
                <path
                  fill="#070707"
                  d="M143.299 175.383c0 3.145-2.548 5.692-5.69 5.692-3.144 0-5.692-2.548-5.692-5.692 0-3.142 2.548-5.689 5.692-5.689 3.143-.001 5.69 2.547 5.69 5.689z"
                />
                <path
                  fill="#222"
                  d="M145.829 152.772c0 3.031-2.457 5.488-5.488 5.488-3.031 0-5.49-2.457-5.49-5.488 0-3.031 2.458-5.489 5.49-5.489s5.488 2.458 5.488 5.489z"
                />
                <path
                  fill="#373737"
                  d="M151.993 176.468c0 2.041-1.654 3.695-3.696 3.695-2.041 0-3.695-1.654-3.695-3.695 0-2.04 1.654-3.695 3.695-3.695s3.696 1.655 3.696 3.695z"
                />
                <path
                  fill="#bfbfbf"
                  d="M149.928 167.048c0 2.46-1.993 4.455-4.453 4.455-2.459 0-4.453-1.995-4.453-4.455 0-2.458 1.994-4.452 4.453-4.452 2.46-.001 4.453 1.994 4.453 4.452z"
                />
                <path
                  fill="#090909"
                  d="M155.778 157.599c0 2.673-2.167 4.84-4.839 4.84-2.674 0-4.84-2.167-4.84-4.84s2.166-4.839 4.84-4.839c2.672 0 4.839 2.167 4.839 4.839z"
                />
                <path
                  fill="#323232"
                  d="M155.543 139.129c0 2.808-2.274 5.083-5.082 5.083s-5.085-2.275-5.085-5.083c0-2.808 2.277-5.084 5.085-5.084s5.082 2.276 5.082 5.084z"
                />
                <path
                  fill="#373737"
                  d="M163.075 169.851c0 3.267-2.648 5.917-5.916 5.917-3.269 0-5.917-2.65-5.917-5.917 0-3.268 2.648-5.916 5.917-5.916 3.267 0 5.916 2.649 5.916 5.916z"
                />
                <path
                  fill="#5c5c5c"
                  d="M165.491 159.113c0 2.35-1.904 4.254-4.254 4.254-2.349 0-4.253-1.904-4.253-4.254 0-2.349 1.904-4.253 4.253-4.253 2.35 0 4.254 1.904 4.254 4.253z"
                />
                <path
                  fill="#7b7b7b"
                  d="M162.845 147.911c0 2.765-2.24 5.006-5.005 5.006-2.764 0-5.005-2.241-5.005-5.006s2.241-5.005 5.005-5.005c2.765 0 5.005 2.24 5.005 5.005z"
                />
                <path
                  fill="#646464"
                  d="M167.112 137.219c0 2.838-2.301 5.14-5.139 5.14-2.84 0-5.142-2.302-5.142-5.14 0-2.84 2.302-5.141 5.142-5.141 2.838.001 5.139 2.302 5.139 5.141z"
                />
                <path
                  fill="#292929"
                  d="M173.908 151.396c0 2.842-2.302 5.144-5.144 5.144-2.841 0-5.143-2.302-5.143-5.144 0-2.841 2.302-5.143 5.143-5.143 2.842.001 5.144 2.302 5.144 5.143z"
                />
                <path
                  fill="#969696"
                  d="M175.486 142.183c0 1.85-1.498 3.35-3.35 3.35-1.851 0-3.35-1.5-3.35-3.35 0-1.851 1.499-3.351 3.35-3.351 1.852.001 3.35 1.501 3.35 3.351z"
                />
                <path
                  fill="#fcfcfc"
                  d="M178.491 132.343c0 2.837-2.301 5.137-5.138 5.137-2.837 0-5.138-2.3-5.138-5.137 0-2.838 2.301-5.137 5.138-5.137 2.837 0 5.138 2.299 5.138 5.137z"
                />
                <path
                  fill="#7d7d7d"
                  d="M173.007 122.68c0 2.342-1.898 4.24-4.239 4.24-2.342 0-4.24-1.898-4.24-4.24 0-2.342 1.898-4.239 4.24-4.239 2.341 0 4.239 1.898 4.239 4.239z"
                />
                <path
                  fill="#909090"
                  d="M183.878 104.567c0 3.848-3.118 6.966-6.965 6.966-3.848 0-6.966-3.118-6.966-6.966 0-3.847 3.118-6.965 6.966-6.965 3.847 0 6.965 3.118 6.965 6.965z"
                />
                <path
                  fill="#aaa"
                  d="M187.893 136.835c0 2.411-1.954 4.365-4.365 4.365-2.411 0-4.365-1.954-4.365-4.365 0-2.411 1.954-4.365 4.365-4.365 2.411 0 4.365 1.954 4.365 4.365z"
                />
                <path
                  fill="#fdfdfd"
                  d="M186.648 121.968c0 3.392-2.748 6.142-6.14 6.142-3.392 0-6.142-2.75-6.142-6.142 0-3.391 2.75-6.14 6.142-6.14 3.392 0 6.14 2.75 6.14 6.14z"
                />
                <path d="M190.101 112.323c0 2.095-1.698 3.793-3.793 3.793s-3.793-1.698-3.793-3.793 1.698-3.791 3.793-3.791 3.793 1.696 3.793 3.791z" />
                <path
                  fill="#bdbdbd"
                  d="M185.851 90.355c0 2.713-2.198 4.91-4.911 4.91-2.711 0-4.909-2.197-4.909-4.91 0-2.712 2.198-4.909 4.909-4.909 2.713 0 4.911 2.197 4.911 4.909z"
                />
                <path
                  fill="#959595"
                  d="M199.196 145.479c0 3.725-3.019 6.743-6.743 6.743s-6.741-3.019-6.741-6.743 3.018-6.742 6.741-6.742c3.724 0 6.743 3.019 6.743 6.742z"
                />
                <path
                  fill="#6f6f6f"
                  d="M199.991 132.093c0 3.028-2.454 5.483-5.483 5.483-3.027 0-5.482-2.455-5.482-5.483 0-3.027 2.455-5.482 5.482-5.482 3.029 0 5.483 2.455 5.483 5.482z"
                />
                <path
                  fill="#b5b5b5"
                  d="M188.083 129.553c0 1.09-.883 1.973-1.973 1.973-1.089 0-1.971-.883-1.971-1.973 0-1.089.882-1.971 1.971-1.971 1.09.001 1.973.883 1.973 1.971z"
                />
                <path
                  fill="#434343"
                  d="M201.55 110.741c0 2.833-2.295 5.128-5.127 5.128-2.833 0-5.129-2.295-5.129-5.128 0-2.832 2.296-5.127 5.129-5.127 2.832 0 5.127 2.295 5.127 5.127z"
                />
                <path
                  fill="#7d7d7d"
                  d="M209.136 155.743c0 3.202-2.597 5.799-5.797 5.799-3.203 0-5.798-2.597-5.798-5.799 0-3.201 2.595-5.798 5.798-5.798 3.201 0 5.797 2.597 5.797 5.798z"
                />
                <path
                  fill="#1e1e1e"
                  d="M212.399 142.967c0 3.323-2.694 6.019-6.019 6.019s-6.019-2.695-6.019-6.019c0-3.325 2.694-6.019 6.019-6.019s6.019 2.693 6.019 6.019z"
                />
                <path
                  fill="#9f9f9f"
                  d="M210.594 131.693c0 2.123-1.721 3.845-3.845 3.845-2.123 0-3.844-1.722-3.844-3.845s1.721-3.845 3.844-3.845c2.125 0 3.845 1.722 3.845 3.845z"
                />
                <path
                  fill="#171717"
                  d="M205.377 124.208c0 2.09-1.695 3.784-3.785 3.784-2.091 0-3.785-1.694-3.785-3.784 0-2.091 1.694-3.785 3.785-3.785 2.089 0 3.785 1.694 3.785 3.785z"
                />
                <path
                  fill="#1d1d1d"
                  d="M215.718 164.157c0 2.39-1.935 4.325-4.324 4.325s-4.324-1.936-4.324-4.325c0-2.388 1.936-4.324 4.324-4.324 2.39 0 4.324 1.936 4.324 4.324z"
                />
                <path
                  fill="#9d9d9d"
                  d="M227.324 147.341c0 3.945-3.198 7.143-7.142 7.143-3.945 0-7.143-3.197-7.143-7.143 0-3.944 3.197-7.142 7.143-7.142 3.944 0 7.142 3.197 7.142 7.142z"
                />
                <path
                  fill="#959595"
                  d="M226.797 128.009c0 4.26-3.452 7.713-7.712 7.713s-7.713-3.453-7.713-7.713c0-4.259 3.453-7.712 7.713-7.712s7.712 3.453 7.712 7.712z"
                />
                <path
                  fill="#040404"
                  d="M227.519 171.193c0 3.513-2.846 6.356-6.355 6.356-3.509 0-6.355-2.844-6.355-6.356 0-3.508 2.846-6.354 6.355-6.354 3.509 0 6.355 2.846 6.355 6.354z"
                />
                <path
                  fill="#e8e8e8"
                  d="M228.912 159.497c0 2.45-1.984 4.434-4.434 4.434-2.448 0-4.434-1.983-4.434-4.434 0-2.448 1.985-4.434 4.434-4.434s4.434 1.986 4.434 4.434z"
                />
                <path
                  fill="gray"
                  d="M228.36 137.642c0 1.438-1.167 2.604-2.605 2.604s-2.604-1.166-2.604-2.604c0-1.438 1.166-2.604 2.604-2.604 1.438 0 2.605 1.166 2.605 2.604z"
                />
                <path
                  fill="#757575"
                  d="M232.302 119.217c0 2.089-1.693 3.781-3.782 3.781s-3.781-1.692-3.781-3.781c0-2.088 1.692-3.781 3.781-3.781 2.089 0 3.782 1.693 3.782 3.781z"
                />
                <path
                  fill="#171717"
                  d="M231.65 98.405c0 2.988-2.423 5.411-5.412 5.411-2.99 0-5.411-2.423-5.411-5.411 0-2.989 2.421-5.412 5.411-5.412 2.989 0 5.412 2.423 5.412 5.412z"
                />
                <path
                  fill="#c2c2c2"
                  d="M230.362 88.786c0 1.576-1.278 2.855-2.855 2.855-1.576 0-2.854-1.279-2.854-2.855 0-1.577 1.277-2.854 2.854-2.854 1.577-.001 2.855 1.277 2.855 2.854z"
                />
                <path
                  fill="#838383"
                  d="M240.392 168.368c0 3.273-2.653 5.926-5.926 5.926s-5.925-2.652-5.925-5.926 2.652-5.926 5.925-5.926c3.273 0 5.926 2.652 5.926 5.926z"
                />
                <path
                  fill="#0e0e0e"
                  d="M239.639 155.964c0 2.72-2.205 4.927-4.928 4.927-2.72 0-4.925-2.207-4.925-4.927 0-2.721 2.205-4.928 4.925-4.928 2.723 0 4.928 2.207 4.928 4.928z"
                />
                <path
                  fill="#b9b9b9"
                  d="M244.481 143.15c0 3.779-3.063 6.844-6.844 6.844-3.777 0-6.842-3.064-6.842-6.844 0-3.778 3.064-6.842 6.842-6.842 3.781 0 6.844 3.064 6.844 6.842z"
                />
                <path
                  fill="#989898"
                  d="M235.837 132.36c0 2.251-1.826 4.075-4.077 4.075-2.252 0-4.076-1.824-4.076-4.075 0-2.252 1.824-4.078 4.076-4.078 2.251 0 4.077 1.826 4.077 4.078z"
                />
                <path
                  fill="#2e2e2e"
                  d="M241.988 116.551c0 2.4-1.945 4.346-4.346 4.346s-4.346-1.945-4.346-4.346 1.945-4.346 4.346-4.346 4.346 1.946 4.346 4.346z"
                />
                <path
                  fill="#707070"
                  d="M244.482 104.359c0 3.571-2.896 6.468-6.468 6.468s-6.468-2.896-6.468-6.468 2.896-6.467 6.468-6.467 6.468 2.896 6.468 6.467z"
                />
                <path
                  fill="#767676"
                  d="M252.315 168.184c0 2.886-2.339 5.225-5.226 5.225-2.888 0-5.229-2.339-5.229-5.225 0-2.888 2.341-5.228 5.229-5.228 2.887.001 5.226 2.341 5.226 5.228z"
                />
                <path
                  fill="#8e8e8e"
                  d="M251.582 154.318c0 2.967-2.403 5.372-5.37 5.372s-5.372-2.405-5.372-5.372 2.405-5.371 5.372-5.371 5.37 2.404 5.37 5.371z"
                />
                <path
                  fill="#e4e4e4"
                  d="M255.479 140.089c0 2.739-2.221 4.96-4.96 4.96-2.74 0-4.961-2.221-4.961-4.96s2.221-4.96 4.961-4.96c2.739 0 4.96 2.22 4.96 4.96z"
                />
                <path
                  fill="#555"
                  d="M248.767 130.855c0 2.984-2.419 5.403-5.403 5.403-2.983 0-5.402-2.419-5.402-5.403 0-2.983 2.419-5.402 5.402-5.402 2.984 0 5.403 2.419 5.403 5.402z"
                />
                <path
                  fill="#0a0a0a"
                  d="M249.325 120.922c0 1.94-1.572 3.511-3.513 3.511-1.938 0-3.511-1.57-3.511-3.511 0-1.938 1.572-3.511 3.511-3.511 1.941 0 3.513 1.572 3.513 3.511z"
                />
                <path
                  fill="#8a8a8a"
                  d="M253.737 111.52c0 2.769-2.245 5.013-5.014 5.013-2.768 0-5.013-2.244-5.013-5.013 0-2.768 2.245-5.013 5.013-5.013 2.769.001 5.014 2.246 5.014 5.013z"
                />
                <path
                  fill="#515151"
                  d="M245.492 94.775c0 1.565-1.27 2.836-2.835 2.836-1.566 0-2.836-1.271-2.836-2.836s1.27-2.836 2.836-2.836c1.565 0 2.835 1.271 2.835 2.836z"
                />
                <path
                  fill="#626262"
                  d="M253.81 90.053c0 2.335-1.894 4.228-4.228 4.228-2.337 0-4.229-1.893-4.229-4.228s1.893-4.229 4.229-4.229c2.335 0 4.228 1.894 4.228 4.229z"
                />
                <path
                  fill="#fbfbfb"
                  d="M258.556 122.214c0 2.204-1.787 3.989-3.989 3.989-2.204 0-3.99-1.785-3.99-3.989 0-2.204 1.786-3.99 3.99-3.99 2.202-.001 3.989 1.786 3.989 3.99z"
                />
                <path
                  fill="#f4f4f4"
                  d="M253.8 100.043c0 2.428-1.969 4.395-4.396 4.395-2.429 0-4.396-1.967-4.396-4.395 0-2.428 1.968-4.396 4.396-4.396 2.428-.001 4.396 1.968 4.396 4.396z"
                />
                <path
                  fill="#cdcdcd"
                  d="M141.808 161.567c0 1.107-.896 2.006-2.005 2.006-1.107 0-2.004-.898-2.004-2.006 0-1.106.896-2.005 2.004-2.005 1.109 0 2.005.899 2.005 2.005z"
                />
                <path
                  fill="#bebebe"
                  d="M151.47 148.221c0 1.513-1.226 2.738-2.739 2.738s-2.739-1.226-2.739-2.738c0-1.514 1.227-2.739 2.739-2.739 1.514 0 2.739 1.226 2.739 2.739z"
                />
                <path
                  fill="#a5a5a5"
                  d="M166.702 129.156c0 1.128-.914 2.042-2.042 2.042-1.127 0-2.041-.914-2.041-2.042 0-1.127.914-2.041 2.041-2.041 1.128 0 2.042.914 2.042 2.041z"
                />
                <path
                  fill="#818181"
                  d="M169.863 171.791c0 1.559-1.267 2.822-2.825 2.822-1.56 0-2.826-1.264-2.826-2.822 0-1.562 1.267-2.826 2.826-2.826 1.558 0 2.825 1.263 2.825 2.826z"
                />
                <path
                  fill="#020202"
                  d="M175.832 114.964c0 1.521-1.234 2.754-2.755 2.754s-2.755-1.233-2.755-2.754c0-1.522 1.234-2.755 2.755-2.755s2.755 1.232 2.755 2.755z"
                />
                <path
                  fill="#a5a5a5"
                  d="M196.966 120.968c0 2.494-2.021 4.514-4.514 4.514-2.493 0-4.514-2.02-4.514-4.514 0-2.492 2.021-4.512 4.514-4.512 2.493 0 4.514 2.019 4.514 4.512z"
                />
                <path
                  fill="#0e0e0e"
                  d="M216.004 156.093c0 1.45-1.176 2.626-2.627 2.626-1.449 0-2.625-1.176-2.625-2.626s1.176-2.626 2.625-2.626c1.452 0 2.627 1.175 2.627 2.626z"
                />
                <path
                  fill="#767676"
                  d="M216.656 138.228c0 1.163-.943 2.107-2.107 2.107-1.164 0-2.106-.944-2.106-2.107 0-1.165.942-2.107 2.106-2.107s2.107.942 2.107 2.107z"
                />
                <path
                  fill="#484848"
                  d="M233.518 111.831c0 1.294-1.049 2.343-2.344 2.343-1.294 0-2.343-1.049-2.343-2.343 0-1.295 1.049-2.345 2.343-2.345 1.295 0 2.344 1.05 2.344 2.345z"
                />
                <path
                  fill="#3c3c3c"
                  d="M238.318 124.827c0 1.605-1.301 2.907-2.906 2.907-1.605 0-2.908-1.302-2.908-2.907 0-1.606 1.303-2.907 2.908-2.907s2.906 1.3 2.906 2.907z"
                />
                <path
                  fill="#818181"
                  d="M236.546 95.177c0 1.131-.916 2.047-2.046 2.047-1.132 0-2.048-.916-2.048-2.047 0-1.131.916-2.047 2.048-2.047 1.13 0 2.046.916 2.046 2.047z"
                />
                <path
                  fill="#e9e9e9"
                  d="M243.417 161.707c0 1.211-.98 2.191-2.189 2.191-1.211 0-2.191-.98-2.191-2.191 0-1.209.98-2.19 2.191-2.19 1.208-.001 2.189.981 2.189 2.19z"
                />
                <path
                  fill="#b4b4b4"
                  d="M261.93 90.395c0 1.881-1.524 3.404-3.404 3.404s-3.404-1.523-3.404-3.404c0-1.88 1.524-3.404 3.404-3.404s3.404 1.524 3.404 3.404z"
                />
                <path
                  fill="#272727"
                  d="M256.144 105.713c0 .978-.793 1.771-1.771 1.771-.979 0-1.771-.794-1.771-1.771 0-.979.792-1.771 1.771-1.771.978-.001 1.771.791 1.771 1.771z"
                />
              </g>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new"
              viewBox="0 0 289.73199 289.62201"
              style={{
                filter: FILTERS[filterName as keyof typeof FILTERS],
                width: 289,
                height: 289,
                maxWidth: "40vw",
                maxHeight: "40vh",
              }}
            >
              <defs>
                <linearGradient
                  id="B"
                  x1="38.737301"
                  x2="39.487301"
                  y1="46.373001"
                  y2="38.790001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#333" />
                  <stop offset=".431" />
                  <stop offset="1" stopColor="#2e2e2e" />
                </linearGradient>
                <linearGradient
                  id="A"
                  x1="-153.1255"
                  x2="-154.15421"
                  y1="97.627899"
                  y2="104.4332"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#969696" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="z"
                  x1="-158.4185"
                  x2="-126.5454"
                  y1="107.8965"
                  y2="107.8965"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#525252" />
                  <stop offset=".1856" stopColor="#333" />
                  <stop offset=".354" stopColor="#aeaeae" />
                  <stop offset=".4199" stopColor="#adadad" />
                  <stop offset=".4276" stopColor="#9d9d9d" />
                  <stop offset=".4433" stopColor="#818181" />
                  <stop offset=".4611" stopColor="#6a6a6a" />
                  <stop offset=".4814" stopColor="#585858" />
                  <stop offset=".506" stopColor="#4c4c4c" />
                  <stop offset=".539" stopColor="#444" />
                  <stop offset=".6166" stopColor="#424242" />
                  <stop offset=".6684" stopColor="#454545" />
                  <stop offset="1" stopColor="#bdbdbd" />
                </linearGradient>
                <linearGradient
                  id="y"
                  x1="-158.8101"
                  x2="-126.4229"
                  y1="107.0898"
                  y2="107.0898"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#696969" />
                  <stop offset=".3702" stopColor="#2e2e2e" />
                  <stop offset=".4554" stopColor="#424242" />
                  <stop offset=".6014" stopColor="#303030" />
                  <stop offset=".6947" stopColor="#4a4a4a" />
                  <stop offset="1" stopColor="#666" />
                </linearGradient>
                <linearGradient
                  id="x"
                  x1="22.5742"
                  x2="111.5455"
                  y1="49.7188"
                  y2="29.204"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".6538" stopColor="#fff" />
                  <stop offset="1" stopColor="#cbccce" />
                </linearGradient>
                <linearGradient
                  id="w"
                  x1="23.471201"
                  x2="27.9561"
                  y1="30.732401"
                  y2="30.732401"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#e2e3e4" />
                  <stop offset=".5055" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                  id="v"
                  x1="21.2129"
                  x2="117.1948"
                  y1="71.326698"
                  y2="51.952599"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ededee" />
                  <stop offset=".4176" stopColor="#fff" />
                  <stop offset=".6264" stopColor="#f8f9f9" />
                  <stop offset="1" stopColor="#bfc0c2" />
                </linearGradient>
                <linearGradient
                  id="u"
                  x1="-176.1851"
                  x2="-52.131699"
                  y1="78.4795"
                  y2="92.223099"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="t"
                  x1="-175.7173"
                  x2="-67.153198"
                  y1="78.449203"
                  y2="90.476799"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="s"
                  x1="-172.3853"
                  x2="-172.3853"
                  y1="78.209"
                  y2="78.209"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".078" stopColor="#f4f4f4" />
                  <stop offset=".3807" stopColor="#cecece" />
                  <stop offset=".5396" stopColor="#bfbfbf" />
                  <stop offset=".8357" stopColor="#7c7c7c" />
                  <stop offset=".8996" stopColor="#a8a8a8" />
                  <stop offset=".9093" stopColor="#9a9a9a" />
                  <stop offset=".9327" stopColor="#7d7d7d" />
                  <stop offset=".9558" stopColor="#686868" />
                  <stop offset=".9785" stopColor="#5b5b5b" />
                  <stop offset="1" stopColor="#575757" />
                </linearGradient>
                <linearGradient
                  id="r"
                  x1="-175.14211"
                  x2="-83.541"
                  y1="104.0801"
                  y2="104.0801"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#a0a0a0" />
                  <stop offset=".0769" stopColor="#656767" />
                  <stop offset="1" stopColor="#717375" />
                </linearGradient>
                <linearGradient
                  id="q"
                  x1="-175.4424"
                  x2="-75.6362"
                  y1="83.6045"
                  y2="83.6045"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#555" />
                  <stop offset="1" stopColor="#231f20" />
                </linearGradient>
                <linearGradient
                  id="p"
                  x1="-115.3716"
                  x2="-134.7878"
                  y1="119.1758"
                  y2="24.695299"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="o"
                  x1="-118.4946"
                  x2="-138.85201"
                  y1="124.0039"
                  y2="24.9438"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="n"
                  x1="-127.4014"
                  x2="-146.8837"
                  y1="121.9365"
                  y2="27.1346"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="m"
                  x1="-135.58591"
                  x2="-155.006"
                  y1="123.3525"
                  y2="28.8524"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="l"
                  x1="-121.1382"
                  x2="-140.54491"
                  y1="120.3223"
                  y2="25.888"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="k"
                  x1="-130.1348"
                  x2="-130.14281"
                  y1="35.625"
                  y2="35.585701"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="j"
                  x1="-152.6201"
                  x2="-171.9462"
                  y1="126.8398"
                  y2="32.797901"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="i"
                  x1="32.519001"
                  x2="37.2481"
                  y1="33.077099"
                  y2="92.496101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".2198" stopColor="#989a9c" />
                  <stop offset=".2527" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                  id="h"
                  x1="-115.3369"
                  x2="-134.85719"
                  y1="119.6328"
                  y2="24.6462"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="g"
                  x1="54.653301"
                  x2="79.683601"
                  y1="25.2764"
                  y2="106.3903"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".7473" stopColor="#f9f9f9" />
                  <stop offset="1" stopColor="#d5d7d8" />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="-117.166"
                  x2="-87.569702"
                  y1="122.1328"
                  y2="31.998501"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#e4e5e6" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="70.421898"
                  x2="119.5471"
                  y1="26.876499"
                  y2="87.626701"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#eff0f0" />
                  <stop offset=".5914" stopColor="#f0f1f2" />
                  <stop offset=".599" stopColor="#787878" />
                  <stop offset=".6456" stopColor="#eeeff0" />
                  <stop offset="1" stopColor="#d8d9db" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="-123.5898"
                  x2="-94.069099"
                  y1="119.8076"
                  y2="29.9035"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".0094" stopColor="#fcfcfc" />
                  <stop offset=".0655" stopColor="#eee" />
                  <stop offset=".1342" stopColor="#e5e5e5" />
                  <stop offset=".2515" stopColor="#e3e3e3" />
                  <stop offset=".3357" stopColor="#8a8a8a" />
                  <stop offset=".4422" stopColor="#b8b8b8" />
                  <stop offset="1" stopColor="#3b3b3b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="54.715801"
                  x2="83.798798"
                  y1="65.136703"
                  y2="65.136703"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#231f20" />
                  <stop offset="1" stopColor="#474747" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="66.232399"
                  x2="112.7331"
                  y1="24.481001"
                  y2="97.232101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#8a8a8a" />
                  <stop offset=".5687" stopColor="#606060" />
                  <stop offset=".5914" stopColor="#fff" />
                  <stop offset=".6116" stopColor="#585858" />
                  <stop offset="1" stopColor="#303030" />
                </linearGradient>
                <filter id="E" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="multiply" />
                </filter>
                <filter id="F" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="multiply" />
                </filter>
                <filter id="D" colorInterpolationFilters="sRGB">
                  <feBlend in2="BackgroundImage" mode="lighten" />
                </filter>
                <radialGradient
                  id="C"
                  cx="-138.2334"
                  cy="106.5996"
                  r="72.751701"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopOpacity="0" />
                  <stop offset=".80220002" stopOpacity=".08" />
                  <stop offset="1" stopOpacity=".3882353" />
                </radialGradient>
                <radialGradient
                  id="a"
                  cx="-145.4702"
                  cy="87.823196"
                  r="68.686401"
                  gradientTransform="matrix(1 0 0 -1 192.3999 143.0996)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fff" />
                  <stop offset=".4835" stopColor="#eaeaeb" />
                  <stop offset=".9451" stopColor="#a9abae" />
                  <stop offset="1" stopColor="#999b9e" />
                </radialGradient>
              </defs>
              <path
                fill="red"
                d="M82.117 209.208c0 2.37-1.921 4.29-4.291 4.29-2.369 0-4.29-1.92-4.29-4.29 0-2.369 1.921-4.289 4.29-4.289 2.37 0 4.291 1.92 4.291 4.289zM80.834 200.49c0 1.67-1.353 3.023-3.021 3.023-1.67 0-3.023-1.354-3.023-3.023s1.354-3.023 3.023-3.023 3.021 1.353 3.021 3.023zM91.118 87.517c0 3.054-2.475 5.527-5.527 5.527s-5.528-2.474-5.528-5.527 2.476-5.526 5.528-5.526c3.052 0 5.527 2.474 5.527 5.526zM80.937 77.568c0 1.867-1.513 3.38-3.378 3.38-1.868 0-3.382-1.513-3.382-3.38 0-1.866 1.514-3.38 3.382-3.38 1.865 0 3.378 1.514 3.378 3.38zM79.864 67.999c0 2.951-2.394 5.343-5.345 5.343-2.951 0-5.344-2.392-5.344-5.343s2.393-5.345 5.344-5.345c2.951 0 5.345 2.394 5.345 5.345zM93.494 205.263c0 2.959-2.398 5.357-5.356 5.357-2.959 0-5.357-2.398-5.357-5.357s2.398-5.357 5.357-5.357c2.958 0 5.356 2.398 5.356 5.357z"
              />
              <path
                fill="#00b800"
                d="M104.131 177.191c0 4.165-3.376 7.541-7.54 7.541-4.165 0-7.541-3.376-7.541-7.541 0-4.164 3.376-7.539 7.541-7.539 4.164 0 7.54 3.375 7.54 7.539z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M89.192 77.141c0 1.901-1.542 3.443-3.443 3.443-1.9 0-3.441-1.542-3.441-3.443 0-1.9 1.541-3.441 3.441-3.441 1.901 0 3.443 1.541 3.443 3.441zM92.67 66.373c0 3.202-2.596 5.797-5.798 5.797s-5.796-2.595-5.796-5.797c0-3.201 2.594-5.797 5.796-5.797 3.202 0 5.798 2.596 5.798 5.797z"
              />
              <path
                fill="#00b800"
                d="M105.832 209.006c0 2.09-1.691 3.78-3.78 3.78-2.087 0-3.779-1.69-3.779-3.78 0-2.087 1.692-3.78 3.779-3.78 2.089 0 3.78 1.693 3.78 3.78zM116.963 201.101c0 3.574-2.896 6.47-6.468 6.47s-6.468-2.896-6.468-6.47c0-3.571 2.896-6.466 6.468-6.466 3.571 0 6.468 2.894 6.468 6.466z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M113.606 164.219c0 2.892-2.346 5.236-5.238 5.236-2.892 0-5.236-2.345-5.236-5.236 0-2.893 2.345-5.238 5.236-5.238 2.892 0 5.238 2.346 5.238 5.238zM103.532 75.817c0 3.618-2.934 6.551-6.551 6.551s-6.549-2.933-6.549-6.551c0-3.618 2.932-6.55 6.549-6.55 3.617 0 6.551 2.932 6.551 6.55zM107.068 60.923c0 3.898-3.16 7.06-7.06 7.06-3.9 0-7.06-3.161-7.06-7.06 0-3.9 3.159-7.062 7.06-7.062 3.9 0 7.06 3.161 7.06 7.062zM98.259 51.222c0 1.115-.904 2.021-2.021 2.021-1.115 0-2.02-.905-2.02-2.021 0-1.116.904-2.02 2.02-2.02 1.117.001 2.021.905 2.021 2.02zM111.818 48.807c0 2.951-2.394 5.345-5.345 5.345-2.953 0-5.346-2.394-5.346-5.345 0-2.953 2.393-5.345 5.346-5.345 2.952.001 5.345 2.392 5.345 5.345z"
              />
              <path
                fill="#00b800"
                d="M119.24 214.768c0 3.351-2.718 6.067-6.069 6.067-3.353 0-6.07-2.717-6.07-6.067 0-3.354 2.718-6.07 6.07-6.07 3.351-.001 6.069 2.716 6.069 6.07z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M122.79 200.534c0 2.301-1.865 4.166-4.166 4.166s-4.167-1.865-4.167-4.166 1.866-4.166 4.167-4.166c2.301 0 4.166 1.865 4.166 4.166zM117.205 186.415c0 2.519-2.04 4.56-4.557 4.56-2.519 0-4.559-2.041-4.559-4.56 0-2.517 2.04-4.558 4.559-4.558 2.517 0 4.557 2.041 4.557 4.558zM117.743 155.423c0 2.12-1.718 3.839-3.838 3.839s-3.84-1.719-3.84-3.839c0-2.119 1.72-3.838 3.84-3.838s3.838 1.718 3.838 3.838zM116.833 71.246c0 3.464-2.807 6.271-6.271 6.271s-6.271-2.808-6.271-6.271 2.807-6.271 6.271-6.271 6.271 2.807 6.271 6.271zM120.229 58.476c0 3.184-2.581 5.764-5.764 5.764-3.185 0-5.766-2.58-5.766-5.764 0-3.183 2.581-5.764 5.766-5.764 3.183.001 5.764 2.582 5.764 5.764z"
              />
              <path
                fill="#00b800"
                d="M135.036 215.369c0 2.771-2.247 5.019-5.021 5.019-2.771 0-5.02-2.247-5.02-5.019 0-2.773 2.248-5.02 5.02-5.02 2.774.001 5.021 2.247 5.021 5.02zM136.394 204.816c0 2.422-1.963 4.385-4.385 4.385-2.422 0-4.384-1.963-4.384-4.385 0-2.424 1.962-4.385 4.384-4.385 2.422 0 4.385 1.962 4.385 4.385z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M126.823 190.956c0 2.576-2.087 4.663-4.663 4.663-2.577 0-4.665-2.087-4.665-4.663 0-2.575 2.088-4.665 4.665-4.665 2.576 0 4.663 2.09 4.663 4.665zM127.598 180.2c0 2.648-2.146 4.794-4.794 4.794-2.648 0-4.794-2.146-4.794-4.794 0-2.646 2.146-4.792 4.794-4.792 2.647 0 4.794 2.145 4.794 4.792zM131.223 66.552c0 3.397-2.753 6.151-6.149 6.151-3.398 0-6.152-2.754-6.152-6.151 0-3.396 2.754-6.151 6.152-6.151 3.396 0 6.149 2.755 6.149 6.151zM126.962 51.344c0 2.213-1.794 4.008-4.007 4.008-2.213 0-4.007-1.795-4.007-4.008s1.794-4.006 4.007-4.006c2.213 0 4.007 1.794 4.007 4.006zM133.409 43.478c0 2.497-2.025 4.522-4.522 4.522-2.499 0-4.524-2.025-4.524-4.522 0-2.498 2.025-4.523 4.524-4.523 2.497 0 4.522 2.025 4.522 4.523zM137.613 211.205c0 1.305-1.058 2.362-2.363 2.362s-2.362-1.058-2.362-2.362 1.058-2.362 2.362-2.362c1.306 0 2.363 1.057 2.363 2.362zM146.124 196.27c0 3.579-2.899 6.479-6.479 6.479-3.578 0-6.479-2.9-6.479-6.479 0-3.58 2.901-6.479 6.479-6.479 3.58 0 6.479 2.899 6.479 6.479zM136.333 173.643c0 2.441-1.979 4.42-4.42 4.42-2.439 0-4.419-1.979-4.419-4.42 0-2.44 1.979-4.419 4.419-4.419 2.442 0 4.42 1.979 4.42 4.419z"
              />
              <path
                fill="#00b800"
                d="M147.053 167.533c0 3.061-2.48 5.542-5.543 5.542-3.06 0-5.541-2.481-5.541-5.542s2.481-5.541 5.541-5.541c3.062 0 5.543 2.481 5.543 5.541zM144.783 156.992c0 2.038-1.652 3.689-3.69 3.689-2.038 0-3.689-1.651-3.689-3.689 0-2.039 1.651-3.691 3.689-3.691 2.038 0 3.69 1.652 3.69 3.691zM140.697 148.31c0 3-2.431 5.43-5.43 5.43-2.999 0-5.43-2.43-5.43-5.43 0-2.999 2.431-5.429 5.43-5.429 2.999 0 5.43 2.43 5.43 5.429z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M139.18 60.37c0 2.322-1.882 4.205-4.205 4.205-2.323 0-4.204-1.883-4.204-4.205 0-2.323 1.881-4.205 4.204-4.205 2.323 0 4.205 1.882 4.205 4.205zM136.795 51.587c0 1.863-1.51 3.373-3.373 3.373-1.863 0-3.374-1.51-3.374-3.373 0-1.863 1.511-3.374 3.374-3.374 1.863 0 3.373 1.51 3.373 3.374zM150.775 214.283c0 2.997-2.431 5.429-5.43 5.429-2.999 0-5.431-2.432-5.431-5.429 0-3.001 2.432-5.43 5.431-5.43s5.43 2.429 5.43 5.43zM142.37 206.754c0 1.456-1.181 2.637-2.638 2.637-1.456 0-2.636-1.181-2.636-2.637 0-1.457 1.18-2.638 2.636-2.638 1.458 0 2.638 1.181 2.638 2.638z"
              />
              <path
                fill="#00b800"
                d="M157.413 153.805c0 3.244-2.628 5.874-5.872 5.874-3.244 0-5.873-2.63-5.873-5.874 0-3.243 2.629-5.872 5.873-5.872s5.872 2.629 5.872 5.872zM151.492 142.598c0 2.748-2.229 4.977-4.977 4.977s-4.977-2.229-4.977-4.977 2.229-4.977 4.977-4.977 4.977 2.229 4.977 4.977z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M153.418 125.92c0 3.985-3.232 7.218-7.218 7.218-3.986 0-7.217-3.232-7.217-7.218 0-3.986 3.23-7.217 7.217-7.217 3.985 0 7.218 3.23 7.218 7.217zM150.693 62.602c0 2.832-2.296 5.127-5.129 5.127-2.832 0-5.128-2.295-5.128-5.127 0-2.833 2.296-5.128 5.128-5.128 2.833 0 5.129 2.295 5.129 5.128zM160.618 49.496c0 4.547-3.688 8.234-8.234 8.234-4.549 0-8.235-3.688-8.235-8.234 0-4.548 3.686-8.234 8.235-8.234 4.546-.001 8.234 3.686 8.234 8.234zM144.092 43.641c0 2.572-2.084 4.658-4.657 4.658s-4.658-2.086-4.658-4.658c0-2.573 2.085-4.658 4.658-4.658 2.573 0 4.657 2.085 4.657 4.658z"
              />
              <path
                fill="#00b800"
                d="M172.673 213.203c0 2.606-2.112 4.719-4.718 4.719s-4.72-2.112-4.72-4.719 2.113-4.72 4.72-4.72c2.606 0 4.718 2.114 4.718 4.72z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M160.253 202.95c0 3.878-3.145 7.022-7.022 7.022-3.88 0-7.023-3.145-7.023-7.022 0-3.877 3.143-7.022 7.023-7.022 3.877-.001 7.022 3.144 7.022 7.022zM160.367 68.053c0 2.678-2.171 4.849-4.848 4.849-2.678 0-4.85-2.171-4.85-4.849 0-2.677 2.172-4.848 4.85-4.848 2.677.001 4.848 2.172 4.848 4.848zM167.472 58.205c0 2.38-1.929 4.309-4.308 4.309-2.38 0-4.31-1.929-4.31-4.309 0-2.379 1.93-4.308 4.31-4.308s4.308 1.929 4.308 4.308zM181.8 193.403c0 4.315-3.498 7.812-7.812 7.812-4.315 0-7.812-3.497-7.812-7.812s3.497-7.812 7.812-7.812c4.314.001 7.812 3.497 7.812 7.812z"
              />
              <path
                fill="#00b800"
                d="M168.326 197.99c0 1.904-1.542 3.448-3.445 3.448-1.904 0-3.446-1.544-3.446-3.448 0-1.902 1.542-3.445 3.446-3.445 1.903 0 3.445 1.543 3.445 3.445z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M177.305 87.56c0 3.173-2.571 5.743-5.744 5.743-3.173 0-5.743-2.57-5.743-5.743 0-3.172 2.57-5.743 5.743-5.743 3.173 0 5.744 2.571 5.744 5.743zM172.287 77.366c0 1.937-1.569 3.505-3.504 3.505-1.936 0-3.505-1.568-3.505-3.505 0-1.935 1.569-3.503 3.505-3.503 1.934 0 3.504 1.568 3.504 3.503zM171.348 68.009c0 2.628-2.131 4.758-4.759 4.758-2.629 0-4.759-2.13-4.759-4.758s2.13-4.759 4.759-4.759c2.628 0 4.759 2.131 4.759 4.759zM176.723 60.471c0 2.089-1.693 3.782-3.781 3.782s-3.781-1.693-3.781-3.782c0-2.088 1.693-3.781 3.781-3.781s3.781 1.694 3.781 3.781z"
              />
              <path
                fill="red"
                d="M189.22 212.328c0 3.389-2.748 6.135-6.137 6.135-3.389 0-6.136-2.746-6.136-6.135s2.747-6.138 6.136-6.138c3.389 0 6.137 2.749 6.137 6.138z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="#00b800"
                d="M176.682 207.933c0 1.238-1.002 2.241-2.239 2.241-1.238 0-2.241-1.003-2.241-2.241 0-1.234 1.003-2.238 2.241-2.238 1.237-.001 2.239 1.003 2.239 2.238z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M183.192 92.088c0 1.555-1.261 2.815-2.814 2.815-1.556 0-2.816-1.261-2.816-2.815 0-1.556 1.261-2.814 2.816-2.814 1.553-.001 2.814 1.258 2.814 2.814zM187.59 77.155c0 3.739-3.031 6.771-6.771 6.771-3.74 0-6.769-3.031-6.769-6.771 0-3.737 3.029-6.769 6.769-6.769s6.771 3.032 6.771 6.769zM180.714 66.63c0 1.552-1.259 2.809-2.811 2.809-1.551 0-2.81-1.257-2.81-2.809 0-1.552 1.259-2.81 2.81-2.81 1.553 0 2.811 1.258 2.811 2.81z"
              />
              <path
                fill="#00b800"
                d="M204.076 214.127c0 3.77-3.055 6.826-6.825 6.826-3.771 0-6.827-3.057-6.827-6.826 0-3.771 3.056-6.827 6.827-6.827 3.77 0 6.825 3.056 6.825 6.827z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M196.842 201.742c0 3.062-2.483 5.545-5.544 5.545-3.062 0-5.544-2.483-5.544-5.545s2.481-5.543 5.544-5.543c3.061 0 5.544 2.481 5.544 5.543z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="#00b800"
                d="M204.775 194.228c0 2.453-1.988 4.439-4.44 4.439-2.452 0-4.441-1.986-4.441-4.439 0-2.454 1.989-4.441 4.441-4.441s4.44 1.986 4.44 4.441z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M209.757 202.714c0 2.861-2.318 5.183-5.181 5.183s-5.181-2.321-5.181-5.183c0-2.862 2.318-5.181 5.181-5.181s5.181 2.319 5.181 5.181zM211.874 191.887c0 2.568-2.081 4.647-4.646 4.647-2.566 0-4.646-2.079-4.646-4.647 0-2.565 2.08-4.645 4.646-4.645 2.565.001 4.646 2.08 4.646 4.645zM220.109 183.01c0 3.054-2.477 5.529-5.532 5.529s-5.53-2.476-5.53-5.529c0-3.055 2.476-5.531 5.53-5.531 3.055 0 5.532 2.477 5.532 5.531zM83.124 194.185c0 1.405-1.14 2.545-2.545 2.545-1.406 0-2.545-1.14-2.545-2.545 0-1.404 1.139-2.545 2.545-2.545 1.405 0 2.545 1.141 2.545 2.545z"
              />
              <path
                fill="#00b800"
                d="M124.478 211.669c0 1.184-.96 2.144-2.145 2.144s-2.145-.96-2.145-2.144c0-1.184.96-2.144 2.145-2.144s2.145.96 2.145 2.144z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M130.066 57.12c0 1.233-1.001 2.234-2.234 2.234s-2.233-1.001-2.233-2.234 1-2.233 2.233-2.233 2.234.999 2.234 2.233zM143.675 54.076c0 1.647-1.336 2.981-2.982 2.981-1.646 0-2.979-1.334-2.979-2.981 0-1.646 1.334-2.98 2.979-2.98 1.646-.001 2.982 1.334 2.982 2.98z"
              />
              <path
                fill="#00b800"
                d="M171.103 204.549c0 1.454-1.179 2.633-2.633 2.633-1.455 0-2.635-1.179-2.635-2.633 0-1.456 1.18-2.635 2.635-2.635 1.454 0 2.633 1.179 2.633 2.635zM202.56 202.136c0 1.188-.964 2.151-2.151 2.151-1.188 0-2.151-.963-2.151-2.151 0-1.189.963-2.151 2.151-2.151 1.187-.001 2.151.961 2.151 2.151z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M21.91 143.383c0 3.29-2.667 5.956-5.956 5.956-3.288 0-5.954-2.666-5.954-5.956 0-3.289 2.666-5.954 5.954-5.954 3.29-.001 5.956 2.664 5.956 5.954zM36.734 194.593c0 4.547-3.685 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.55 3.688-8.234 8.234-8.234 4.55-.001 8.234 3.684 8.234 8.234zM21.186 156.029c0 2.923-2.371 5.291-5.292 5.291-2.923 0-5.293-2.368-5.293-5.291 0-2.924 2.37-5.294 5.293-5.294 2.921 0 5.292 2.37 5.292 5.294zM22.83 130.201c0 3.282-2.66 5.943-5.942 5.943-3.283 0-5.943-2.661-5.943-5.943 0-3.28 2.661-5.941 5.943-5.941 3.282 0 5.942 2.661 5.942 5.941zM33.513 121.681c0 3.425-2.776 6.202-6.201 6.202-3.427 0-6.204-2.777-6.204-6.202s2.777-6.203 6.204-6.203c3.424 0 6.201 2.779 6.201 6.203zM26.565 110.051c0 3.231-2.619 5.852-5.852 5.852-3.232 0-5.852-2.62-5.852-5.852s2.62-5.854 5.852-5.854 5.852 2.621 5.852 5.854zM25.634 99.147c0 2.05-1.66 3.711-3.71 3.711s-3.71-1.661-3.71-3.711c0-2.049 1.661-3.71 3.71-3.71s3.71 1.661 3.71 3.71zM43.101 214.296c0 3.502-2.839 6.34-6.341 6.34-3.501 0-6.339-2.838-6.339-6.34s2.838-6.341 6.339-6.341c3.502 0 6.341 2.839 6.341 6.341zM31.732 207.191c0 1.675-1.358 3.036-3.033 3.036-1.677 0-3.035-1.361-3.035-3.036 0-1.676 1.358-3.034 3.035-3.034 1.674 0 3.033 1.358 3.033 3.034zM46.073 182.022c0 3.823-3.099 6.922-6.923 6.922-3.823 0-6.922-3.099-6.922-6.922 0-3.822 3.099-6.922 6.922-6.922 3.825 0 6.923 3.1 6.923 6.922zM46.392 120.2c0 3.213-2.604 5.815-5.815 5.815-3.212 0-5.815-2.603-5.815-5.815 0-3.211 2.604-5.815 5.815-5.815 3.21 0 5.815 2.604 5.815 5.815z"
              />
              <path
                fill="#00b800"
                d="M41.101 96.916c0 3.392-2.751 6.142-6.143 6.142s-6.14-2.75-6.14-6.142c0-3.392 2.748-6.141 6.14-6.141 3.392 0 6.143 2.749 6.143 6.141z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M32.824 82.508c0 1.96-1.589 3.55-3.55 3.55-1.961 0-3.551-1.59-3.551-3.55 0-1.961 1.59-3.551 3.551-3.551s3.55 1.59 3.55 3.551zM41.587 79.905c0 2.151-1.744 3.894-3.895 3.894-2.149 0-3.893-1.742-3.893-3.894 0-2.15 1.743-3.894 3.893-3.894 2.151 0 3.895 1.744 3.895 3.894zM48.826 225.206c0 2.877-2.334 5.211-5.214 5.211-2.878 0-5.212-2.334-5.212-5.211 0-2.879 2.334-5.213 5.212-5.213 2.88 0 5.214 2.334 5.214 5.213zM52.086 204.695c0 3.224-2.614 5.838-5.839 5.838-3.224 0-5.838-2.614-5.838-5.838 0-3.225 2.614-5.839 5.838-5.839 3.225 0 5.839 2.614 5.839 5.839zM47.866 193.586c0 2.309-1.872 4.18-4.181 4.18-2.31 0-4.18-1.871-4.18-4.18 0-2.311 1.87-4.181 4.18-4.181 2.309 0 4.181 1.87 4.181 4.181zM47.171 164.779c0 2.936-2.379 5.314-5.313 5.314-2.936 0-5.316-2.379-5.316-5.314s2.381-5.315 5.316-5.315c2.934 0 5.313 2.38 5.313 5.315zM49.929 152.879c0 3.058-2.479 5.535-5.536 5.535-3.058 0-5.535-2.478-5.535-5.535s2.478-5.536 5.535-5.536c3.056 0 5.536 2.479 5.536 5.536zM48.517 137.89c0 2.377-1.927 4.305-4.305 4.305-2.378 0-4.305-1.928-4.305-4.305 0-2.378 1.927-4.306 4.305-4.306 2.378 0 4.305 1.928 4.305 4.306zM51.597 107.937c0 2.583-2.092 4.676-4.675 4.676-2.581 0-4.676-2.093-4.676-4.676s2.095-4.677 4.676-4.677c2.583 0 4.675 2.094 4.675 4.677z"
              />
              <path
                fill="#00b800"
                d="M56.015 93.819c0 2.825-2.29 5.115-5.115 5.115-2.826 0-5.116-2.29-5.116-5.115s2.29-5.115 5.116-5.115c2.825 0 5.115 2.29 5.115 5.115z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M46.533 71.117c0 2.502-2.026 4.528-4.526 4.528-2.501 0-4.527-2.026-4.527-4.528 0-2.499 2.026-4.527 4.527-4.527 2.5 0 4.526 2.028 4.526 4.527zM48.078 61.399c0 2.217-1.797 4.015-4.016 4.015-2.217 0-4.014-1.798-4.014-4.015 0-2.218 1.797-4.015 4.014-4.015 2.219.001 4.016 1.797 4.016 4.015zM57.258 234.068c0 3.039-2.464 5.504-5.504 5.504-3.04 0-5.504-2.465-5.504-5.504 0-3.039 2.464-5.504 5.504-5.504 3.04 0 5.504 2.465 5.504 5.504zM67.761 229.022c0 2.822-2.287 5.11-5.11 5.11-2.823 0-5.111-2.288-5.111-5.11 0-2.823 2.288-5.113 5.111-5.113s5.11 2.29 5.11 5.113zM60.231 216.405c0 3.678-2.979 6.657-6.657 6.657-3.676 0-6.657-2.979-6.657-6.657 0-3.677 2.981-6.656 6.657-6.656 3.677 0 6.657 2.979 6.657 6.656zM61.156 195.588c0 3.152-2.555 5.708-5.707 5.708-3.152 0-5.706-2.556-5.706-5.708 0-3.149 2.554-5.704 5.706-5.704 3.152 0 5.707 2.554 5.707 5.704zM64.265 185.825c0 2.156-1.747 3.906-3.903 3.906-2.156 0-3.903-1.75-3.903-3.906s1.747-3.903 3.903-3.903c2.156 0 3.903 1.747 3.903 3.903zM55.061 185.346c0 2.244-1.819 4.063-4.063 4.063-2.243 0-4.062-1.819-4.062-4.063 0-2.246 1.819-4.065 4.062-4.065 2.243 0 4.063 1.819 4.063 4.065zM61.012 147.301c0 3.062-2.483 5.545-5.546 5.545s-5.547-2.482-5.547-5.545c0-3.063 2.483-5.547 5.547-5.547 3.062.001 5.546 2.484 5.546 5.547zM61.889 133.266c0 3.581-2.903 6.485-6.485 6.485-3.582 0-6.486-2.904-6.486-6.485 0-3.584 2.904-6.487 6.486-6.487s6.485 2.903 6.485 6.487z"
              />
              <path
                fill="#00b800"
                d="M64.396 109.311c0 1.614-1.309 2.924-2.925 2.924-1.614 0-2.924-1.31-2.924-2.924 0-1.616 1.31-2.925 2.924-2.925 1.616 0 2.925 1.308 2.925 2.925zM60.314 102.841c0 2.235-1.812 4.048-4.049 4.048-2.235 0-4.048-1.812-4.048-4.048 0-2.236 1.812-4.047 4.048-4.047 2.237 0 4.049 1.811 4.049 4.047zM67.436 94.395c0 2.795-2.266 5.061-5.06 5.061-2.794 0-5.06-2.266-5.06-5.061s2.266-5.059 5.06-5.059c2.794 0 5.06 2.264 5.06 5.059z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M61.357 78.536c0 3.595-2.914 6.509-6.509 6.509s-6.509-2.914-6.509-6.509 2.914-6.508 6.509-6.508 6.509 2.913 6.509 6.508zM65.164 61.912c0 3.574-2.897 6.472-6.47 6.472-3.574 0-6.472-2.897-6.472-6.472 0-3.575 2.897-6.471 6.472-6.471 3.573 0 6.47 2.897 6.47 6.471zM51.431 54.641c0 1.555-1.259 2.816-2.814 2.816-1.555 0-2.816-1.262-2.816-2.816 0-1.554 1.261-2.815 2.816-2.815s2.814 1.261 2.814 2.815zM60.177 50.109c0 2.407-1.951 4.359-4.359 4.359-2.407 0-4.359-1.952-4.359-4.359s1.952-4.358 4.359-4.358c2.408 0 4.359 1.951 4.359 4.358zM71.197 247.57c0 2.931-2.378 5.309-5.31 5.309-2.933 0-5.31-2.378-5.31-5.309 0-2.934 2.377-5.312 5.31-5.312 2.932.001 5.31 2.378 5.31 5.312zM78.251 229.449c0 2.367-1.92 4.284-4.287 4.284-2.366 0-4.285-1.917-4.285-4.284s1.919-4.284 4.285-4.284c2.367 0 4.287 1.917 4.287 4.284zM69.474 218.724c0 2.251-1.824 4.075-4.076 4.075-2.249 0-4.073-1.824-4.073-4.075 0-2.249 1.824-4.074 4.073-4.074 2.251 0 4.076 1.825 4.076 4.074zM71.496 206.365c0 3.821-3.099 6.922-6.92 6.922-3.822 0-6.92-3.101-6.92-6.922 0-3.821 3.098-6.92 6.92-6.92s6.92 3.099 6.92 6.92zM76.841 192.58c0 3.662-2.97 6.631-6.632 6.631-3.661 0-6.631-2.969-6.631-6.631 0-3.661 2.97-6.629 6.631-6.629 3.662 0 6.632 2.968 6.632 6.629zM75.026 166.293c0 1.789-1.449 3.239-3.237 3.239s-3.237-1.45-3.237-3.239c0-1.787 1.449-3.236 3.237-3.236s3.237 1.449 3.237 3.236zM70.034 153.719c0 1.593-1.292 2.883-2.885 2.883-1.593 0-2.882-1.29-2.882-2.883s1.289-2.884 2.882-2.884c1.593 0 2.885 1.292 2.885 2.884z"
              />
              <path
                fill="#00b800"
                d="M73.266 149.334c0 2.085-1.69 3.773-3.775 3.773-2.084 0-3.774-1.688-3.774-3.773s1.69-3.774 3.774-3.774 3.775 1.689 3.775 3.774zM70.181 109.857c0 1.197-.971 2.169-2.17 2.169-1.199 0-2.169-.972-2.169-2.169 0-1.198.97-2.17 2.169-2.17s2.17.972 2.17 2.17z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M76.185 85.424c0 3.333-2.702 6.035-6.036 6.035-3.333 0-6.035-2.702-6.035-6.035 0-3.334 2.702-6.037 6.035-6.037 3.334-.001 6.036 2.703 6.036 6.037zM68.684 72.101c0 2.181-1.769 3.949-3.947 3.949-2.183 0-3.95-1.769-3.95-3.949 0-2.18 1.768-3.948 3.95-3.948 2.178 0 3.947 1.768 3.947 3.948zM73.98 51.331c0 3.377-2.738 6.115-6.117 6.115-3.376 0-6.113-2.738-6.113-6.115 0-3.379 2.737-6.115 6.113-6.115 3.378 0 6.117 2.736 6.117 6.115zM64.433 43.031c0 1.744-1.413 3.157-3.157 3.157s-3.157-1.413-3.157-3.157 1.413-3.157 3.157-3.157 3.157 1.413 3.157 3.157zM89.526 255.847c0 4.043-3.275 7.318-7.315 7.318-4.041 0-7.315-3.275-7.315-7.318 0-4.04 3.274-7.315 7.315-7.315 4.04 0 7.315 3.275 7.315 7.315zM79.225 245.552c0 1.909-1.548 3.456-3.457 3.456-1.909 0-3.456-1.547-3.456-3.456s1.547-3.456 3.456-3.456 3.457 1.547 3.457 3.456zM72.669 237.424c0 2.161-1.752 3.914-3.915 3.914-2.163 0-3.915-1.753-3.915-3.914 0-2.161 1.752-3.917 3.915-3.917 2.163 0 3.915 1.755 3.915 3.917zM80.191 219.254c0 2.6-2.107 4.704-4.706 4.704s-4.706-2.104-4.706-4.704c0-2.602 2.107-4.706 4.706-4.706s4.706 2.104 4.706 4.706z"
              />
              <path
                fill="#00b800"
                d="M87.405 178.717c0 2.436-1.974 4.409-4.41 4.409-2.435 0-4.409-1.974-4.409-4.409 0-2.435 1.975-4.411 4.409-4.411 2.437 0 4.41 1.975 4.41 4.411zM87.558 169.086c0 2.151-1.745 3.895-3.895 3.895s-3.896-1.743-3.896-3.895c0-2.149 1.745-3.893 3.896-3.893 2.149 0 3.895 1.744 3.895 3.893zM82.884 160.979c0 2.439-1.978 4.418-4.418 4.418-2.439 0-4.418-1.979-4.418-4.418 0-2.44 1.979-4.42 4.418-4.42 2.44.001 4.418 1.98 4.418 4.42zM91.161 150.529c0 3.258-2.641 5.898-5.898 5.898-3.257 0-5.898-2.641-5.898-5.898 0-3.257 2.642-5.897 5.898-5.897 3.258 0 5.898 2.639 5.898 5.897z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M87.833 118.702c0 3.364-2.728 6.092-6.092 6.092-3.364 0-6.091-2.728-6.091-6.092 0-3.363 2.727-6.092 6.091-6.092 3.364 0 6.092 2.729 6.092 6.092z"
              />
              <path
                fill="#00b800"
                d="M78.003 124.191c0 1.013-.822 1.835-1.835 1.835-1.014 0-1.835-.822-1.835-1.835 0-1.014.821-1.835 1.835-1.835 1.013 0 1.835.822 1.835 1.835z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M82.8 57.343c0 2.52-2.04 4.562-4.56 4.562-2.52 0-4.561-2.042-4.561-4.562 0-2.518 2.041-4.56 4.561-4.56s4.56 2.042 4.56 4.56zM86.673 42.071c0 3.988-3.232 7.222-7.222 7.222-3.988 0-7.222-3.233-7.222-7.222 0-3.99 3.233-7.224 7.222-7.224 3.99 0 7.222 3.234 7.222 7.224zM86.009 29.893c0 2.165-1.755 3.92-3.92 3.92-2.166 0-3.921-1.755-3.921-3.92 0-2.164 1.755-3.919 3.921-3.919 2.165 0 3.92 1.755 3.92 3.919zM99.584 260.457c0 2.64-2.14 4.778-4.777 4.778-2.64 0-4.778-2.139-4.778-4.778 0-2.641 2.139-4.778 4.778-4.778 2.637-.001 4.777 2.137 4.777 4.778zM98.013 241.79c0 4.079-3.307 7.389-7.388 7.389-4.08 0-7.388-3.31-7.388-7.389 0-4.081 3.308-7.388 7.388-7.388 4.081 0 7.388 3.307 7.388 7.388zM91.44 227.987c0 3.305-2.679 5.983-5.982 5.983-3.303 0-5.981-2.679-5.981-5.983s2.678-5.982 5.981-5.982 5.982 2.678 5.982 5.982zM102.134 217.193c0 3.921-3.179 7.1-7.101 7.1s-7.1-3.179-7.1-7.1c0-3.922 3.178-7.103 7.1-7.103 3.922 0 7.101 3.181 7.101 7.103z"
              />
              <path
                fill="#00b800"
                d="M95.842 165.341c0 2.131-1.728 3.857-3.858 3.857s-3.857-1.727-3.857-3.857c0-2.132 1.727-3.858 3.857-3.858s3.858 1.726 3.858 3.858z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M97.594 152.375c0 2.711-2.198 4.909-4.908 4.909-2.711 0-4.909-2.198-4.909-4.909s2.198-4.908 4.909-4.908c2.71 0 4.908 2.197 4.908 4.908zM96.824 127.356c0 2.999-2.432 5.43-5.43 5.43-2.999 0-5.43-2.431-5.43-5.43 0-2.999 2.431-5.43 5.43-5.43 2.999.001 5.43 2.431 5.43 5.43zM100.145 109.086c0 3.628-2.94 6.569-6.569 6.569-3.628 0-6.569-2.941-6.569-6.569 0-3.629 2.941-6.57 6.569-6.57 3.628-.001 6.569 2.941 6.569 6.57zM92.664 52.485c0 2.665-2.16 4.827-4.825 4.827-2.666 0-4.828-2.162-4.828-4.827 0-2.666 2.162-4.828 4.828-4.828 2.665 0 4.825 2.162 4.825 4.828zM102.421 40.699c0 3.998-3.242 7.239-7.24 7.239-3.997 0-7.239-3.241-7.239-7.239 0-3.998 3.242-7.239 7.239-7.239 3.998 0 7.24 3.241 7.24 7.239zM91.316 31.725c0 1.151-.933 2.084-2.085 2.084-1.151 0-2.085-.933-2.085-2.084s.934-2.085 2.085-2.085c1.153 0 2.085.934 2.085 2.085zM97.27 24.978c0 2.366-1.919 4.285-4.286 4.285-2.366 0-4.285-1.919-4.285-4.285 0-2.367 1.919-4.286 4.285-4.286 2.367 0 4.286 1.919 4.286 4.286zM105.025 251.44c0 2.432-1.972 4.4-4.4 4.4-2.431 0-4.4-1.969-4.4-4.4 0-2.43 1.97-4.4 4.4-4.4 2.429 0 4.4 1.97 4.4 4.4zM109.255 241.494c0 2.7-2.187 4.885-4.884 4.885-2.699 0-4.885-2.185-4.885-4.885 0-2.696 2.186-4.884 4.885-4.884 2.697 0 4.884 2.188 4.884 4.884zM104.637 230.491c0 3.016-2.447 5.463-5.463 5.463-3.018 0-5.463-2.447-5.463-5.463 0-3.019 2.445-5.463 5.463-5.463 3.016 0 5.463 2.444 5.463 5.463zM102.128 161.512c0 2.326-1.888 4.213-4.215 4.213-2.328 0-4.214-1.887-4.214-4.213 0-2.328 1.886-4.215 4.214-4.215 2.327.001 4.215 1.887 4.215 4.215zM104.973 133.449c0 2.365-1.919 4.284-4.286 4.284-2.366 0-4.284-1.919-4.284-4.284 0-2.368 1.918-4.286 4.284-4.286 2.367 0 4.286 1.918 4.286 4.286zM104.577 123.79c0 1.944-1.574 3.52-3.518 3.52-1.944 0-3.521-1.575-3.521-3.52s1.576-3.519 3.521-3.519c1.944 0 3.518 1.574 3.518 3.519zM109.238 110.559c0 2.168-1.757 3.926-3.925 3.926s-3.926-1.758-3.926-3.926 1.758-3.925 3.926-3.925 3.925 1.757 3.925 3.925zM109.118 87.075c0 2.36-1.914 4.273-4.272 4.273-2.359 0-4.272-1.913-4.272-4.273 0-2.358 1.913-4.271 4.272-4.271 2.358-.001 4.272 1.913 4.272 4.271zM110.187 29.59c0 3.227-2.615 5.844-5.844 5.844-3.227 0-5.844-2.617-5.844-5.844 0-3.229 2.617-5.844 5.844-5.844 3.228 0 5.844 2.615 5.844 5.844zM103.021 20.522c0 1.546-1.252 2.798-2.797 2.798-1.544 0-2.797-1.252-2.797-2.798 0-1.544 1.253-2.795 2.797-2.795 1.545 0 2.797 1.251 2.797 2.795zM121.241 269.038c0 3.857-3.126 6.984-6.983 6.984-3.857 0-6.983-3.127-6.983-6.984s3.126-6.983 6.983-6.983c3.857 0 6.983 3.125 6.983 6.983zM115.324 256.214c0 2.75-2.229 4.979-4.978 4.979-2.748 0-4.977-2.229-4.977-4.979 0-2.749 2.229-4.977 4.977-4.977 2.75 0 4.978 2.228 4.978 4.977zM119.407 244.667c0 2.571-2.084 4.655-4.654 4.655s-4.653-2.084-4.653-4.655c0-2.57 2.083-4.652 4.653-4.652 2.57 0 4.654 2.081 4.654 4.652z"
              />
              <path
                fill="#00b800"
                d="M119.609 235.649c0 2.849-2.311 5.156-5.158 5.156-2.849 0-5.158-2.308-5.158-5.156s2.31-5.157 5.158-5.157c2.848 0 5.158 2.309 5.158 5.157zM127.95 225.289c0 3.415-2.768 6.184-6.181 6.184-3.413 0-6.183-2.769-6.183-6.184 0-3.412 2.77-6.181 6.183-6.181s6.181 2.769 6.181 6.181z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M117.042 133.693c0 2.932-2.376 5.309-5.309 5.309-2.931 0-5.308-2.377-5.308-5.309 0-2.933 2.377-5.309 5.308-5.309 2.933.001 5.309 2.376 5.309 5.309zM114.036 123.114c0 2.256-1.828 4.084-4.083 4.084s-4.083-1.828-4.083-4.084c0-2.255 1.828-4.082 4.083-4.082s4.083 1.827 4.083 4.082zM116.721 113.708c0 1.855-1.506 3.361-3.361 3.361-1.855 0-3.36-1.506-3.36-3.361 0-1.856 1.505-3.36 3.36-3.36s3.361 1.503 3.361 3.36z"
              />
              <path
                fill="#00b800"
                d="M122.406 92.924c0 2.395-1.941 4.336-4.336 4.336-2.396 0-4.336-1.941-4.336-4.336 0-2.395 1.94-4.336 4.336-4.336 2.395 0 4.336 1.941 4.336 4.336z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M123.3 41.001c0 3.512-2.847 6.358-6.358 6.358-3.511 0-6.358-2.847-6.358-6.358 0-3.511 2.848-6.357 6.358-6.357 3.511-.001 6.358 2.845 6.358 6.357zM119.911 24.4c0 2.564-2.079 4.643-4.644 4.643s-4.644-2.078-4.644-4.643 2.079-4.643 4.644-4.643 4.644 2.078 4.644 4.643zM111.134 18.757c0 1.903-1.544 3.447-3.448 3.447s-3.448-1.544-3.448-3.447c0-1.904 1.544-3.448 3.448-3.448s3.448 1.543 3.448 3.448zM133.612 263.153c0 3.363-2.727 6.088-6.09 6.088s-6.088-2.725-6.088-6.088 2.725-6.088 6.088-6.088 6.09 2.725 6.09 6.088zM126.425 252.588c0 2.537-2.057 4.593-4.594 4.593-2.537 0-4.594-2.056-4.594-4.593s2.057-4.594 4.594-4.594c2.537 0 4.594 2.057 4.594 4.594zM133.199 241.649c0 3.401-2.756 6.157-6.156 6.157s-6.156-2.756-6.156-6.157c0-3.399 2.756-6.155 6.156-6.155s6.156 2.756 6.156 6.155zM123.023 233.96c0 1.557-1.263 2.818-2.82 2.818s-2.819-1.262-2.819-2.818c0-1.56 1.263-2.82 2.819-2.82 1.557-.001 2.82 1.26 2.82 2.82zM131.841 229.446c0 2.419-1.961 4.38-4.38 4.38-2.419 0-4.38-1.961-4.38-4.38 0-2.418 1.961-4.379 4.38-4.379 2.419 0 4.38 1.961 4.38 4.379zM127.129 130.639c0 2.536-2.056 4.593-4.592 4.593-2.536 0-4.592-2.057-4.592-4.593 0-2.535 2.056-4.592 4.592-4.592 2.536 0 4.592 2.057 4.592 4.592z"
              />
              <path
                fill="#00b800"
                d="M129.454 123.306c0 2.791-2.262 5.052-5.051 5.052s-5.052-2.261-5.052-5.052c0-2.789 2.263-5.051 5.052-5.051 2.789 0 5.051 2.262 5.051 5.051zM134.84 103.728c0 2.523-2.046 4.567-4.568 4.567-2.523 0-4.569-2.044-4.569-4.567 0-2.522 2.046-4.568 4.569-4.568 2.522-.001 4.568 2.045 4.568 4.568zM136.366 92.922c0 2.667-2.162 4.828-4.827 4.828-2.667 0-4.829-2.161-4.829-4.828 0-2.666 2.162-4.828 4.829-4.828 2.665 0 4.827 2.162 4.827 4.828z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M127.162 79.423c0 3.252-2.635 5.889-5.888 5.889-3.251 0-5.887-2.637-5.887-5.889 0-3.251 2.636-5.888 5.887-5.888 3.253 0 5.888 2.637 5.888 5.888zM125.152 31.253c0 1.8-1.459 3.26-3.257 3.26-1.802 0-3.261-1.46-3.261-3.26 0-1.8 1.459-3.259 3.261-3.259 1.798 0 3.257 1.459 3.257 3.259zM121.002 15.865c0 1.657-1.342 2.999-2.998 2.999-1.657 0-3-1.342-3-2.999 0-1.655 1.343-2.999 3-2.999 1.656 0 2.998 1.344 2.998 2.999zM131.545 15.953c0 2.547-2.066 4.612-4.614 4.612-2.546 0-4.611-2.065-4.611-4.612 0-2.548 2.065-4.612 4.611-4.612 2.548 0 4.614 2.064 4.614 4.612zM148.827 271.509c0 4.482-3.633 8.113-8.114 8.113-4.479 0-8.112-3.631-8.112-8.113 0-4.48 3.633-8.111 8.112-8.111 4.48-.001 8.114 3.63 8.114 8.111zM141.388 253.46c0 2.99-2.423 5.412-5.412 5.412-2.987 0-5.411-2.422-5.411-5.412 0-2.987 2.424-5.409 5.411-5.409 2.989 0 5.412 2.421 5.412 5.409zM143.255 243.527c0 2.046-1.659 3.705-3.705 3.705-2.046 0-3.705-1.659-3.705-3.705 0-2.046 1.659-3.705 3.705-3.705 2.046 0 3.705 1.659 3.705 3.705zM141.402 234.227c0 2.6-2.107 4.704-4.705 4.704s-4.705-2.104-4.705-4.704c0-2.596 2.107-4.703 4.705-4.703s4.705 2.108 4.705 4.703zM142.113 222.743c0 2.864-2.324 5.188-5.189 5.188s-5.188-2.323-5.188-5.188c0-2.866 2.323-5.189 5.188-5.189 2.865 0 5.189 2.323 5.189 5.189z"
              />
              <path
                fill="#00b800"
                d="M144.083 187.496c0 2.867-2.321 5.188-5.187 5.188s-5.186-2.32-5.186-5.188c0-2.863 2.32-5.185 5.186-5.185s5.187 2.322 5.187 5.185zM141.996 136.47c0 2.855-2.314 5.171-5.169 5.171-2.856 0-5.171-2.315-5.171-5.171 0-2.856 2.314-5.17 5.171-5.17 2.855 0 5.169 2.314 5.169 5.17z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M147.198 107.568c0 4.549-3.686 8.234-8.235 8.234-4.547 0-8.234-3.686-8.234-8.234 0-4.547 3.688-8.234 8.234-8.234 4.549 0 8.235 3.687 8.235 8.234z"
              />
              <path
                fill="#00b800"
                d="M141.597 99.066c0 1.701-1.379 3.079-3.079 3.079-1.701 0-3.079-1.378-3.079-3.079 0-1.7 1.378-3.079 3.079-3.079 1.7 0 3.079 1.379 3.079 3.079z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M146.318 86.538c0 3.299-2.675 5.974-5.974 5.974-3.3 0-5.974-2.675-5.974-5.974 0-3.299 2.674-5.975 5.974-5.975 3.299 0 5.974 2.676 5.974 5.975zM136.892 75.962c0 2.462-1.995 4.458-4.457 4.458-2.462 0-4.459-1.996-4.459-4.458s1.997-4.458 4.459-4.458c2.462 0 4.457 1.996 4.457 4.458zM141.754 31.1c0 4.201-3.405 7.608-7.607 7.608-4.204 0-7.609-3.407-7.609-7.608 0-4.202 3.405-7.608 7.609-7.608 4.202 0 7.607 3.406 7.607 7.608zM141.267 14.394c0 2.334-1.895 4.227-4.229 4.227s-4.227-1.893-4.227-4.227c0-2.335 1.893-4.227 4.227-4.227 2.334 0 4.229 1.892 4.229 4.227zM154.588 261.303c0 2.457-1.991 4.451-4.452 4.451-2.457 0-4.452-1.994-4.452-4.451 0-2.46 1.995-4.452 4.452-4.452 2.461 0 4.452 1.992 4.452 4.452zM148.96 253.718c0 1.541-1.249 2.792-2.792 2.792-1.541 0-2.792-1.251-2.792-2.792 0-1.542 1.251-2.792 2.792-2.792 1.543 0 2.792 1.25 2.792 2.792zM151.063 246.296c0 1.879-1.521 3.399-3.399 3.399-1.876 0-3.398-1.521-3.398-3.399 0-1.876 1.521-3.398 3.398-3.398 1.879-.001 3.399 1.522 3.399 3.398zM152.085 236.701c0 2.65-2.148 4.799-4.799 4.799-2.65 0-4.798-2.148-4.798-4.799 0-2.648 2.148-4.797 4.798-4.797s4.799 2.148 4.799 4.797zM151.051 226.374c0 2.283-1.849 4.13-4.131 4.13-2.281 0-4.13-1.847-4.13-4.13 0-2.279 1.85-4.13 4.13-4.13 2.283 0 4.131 1.85 4.131 4.13z"
              />
              <path
                fill="#00b800"
                d="M150.62 178.334c0 2.634-2.135 4.769-4.769 4.769-2.633 0-4.768-2.135-4.768-4.769 0-2.633 2.135-4.768 4.768-4.768s4.769 2.135 4.769 4.768z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M156.03 114.055c0 2.475-2.005 4.48-4.479 4.48s-4.479-2.006-4.479-4.48c0-2.474 2.005-4.479 4.479-4.479 2.474.001 4.479 2.005 4.479 4.479zM153.665 98.733c0 2.311-1.873 4.185-4.185 4.185-2.311 0-4.184-1.874-4.184-4.185 0-2.31 1.874-4.183 4.184-4.183 2.312.001 4.185 1.874 4.185 4.183zM151.485 90.766c0 1.328-1.077 2.405-2.404 2.405-1.329 0-2.405-1.077-2.405-2.405 0-1.328 1.076-2.404 2.405-2.404 1.327 0 2.404 1.076 2.404 2.404zM148.855 74.249c0 2.977-2.413 5.389-5.388 5.389-2.978 0-5.389-2.412-5.389-5.389 0-2.976 2.411-5.388 5.389-5.388 2.975 0 5.388 2.412 5.388 5.388zM151.942 27.748c0 2.566-2.079 4.646-4.646 4.646-2.566 0-4.645-2.08-4.645-4.646 0-2.565 2.079-4.645 4.645-4.645 2.567 0 4.646 2.079 4.646 4.645zM145.953 20.047c0 1.528-1.238 2.768-2.768 2.768-1.528 0-2.768-1.239-2.768-2.768 0-1.529 1.239-2.769 2.768-2.769 1.53 0 2.768 1.24 2.768 2.769zM152.429 13.965c0 2.191-1.775 3.967-3.967 3.967-2.19 0-3.966-1.775-3.966-3.967 0-2.189 1.776-3.965 3.966-3.965 2.192 0 3.967 1.775 3.967 3.965zM159.041 274.812c0 2.524-2.046 4.567-4.568 4.567s-4.567-2.043-4.567-4.567c0-2.521 2.045-4.567 4.567-4.567 2.522 0 4.568 2.046 4.568 4.567zM163.425 265.935c0 2.243-1.819 4.062-4.063 4.062-2.244 0-4.063-1.819-4.063-4.062 0-2.244 1.819-4.063 4.063-4.063 2.244 0 4.063 1.819 4.063 4.063zM160.837 256.2c0 1.799-1.458 3.258-3.255 3.258-1.798 0-3.257-1.459-3.257-3.258 0-1.796 1.459-3.255 3.257-3.255 1.797 0 3.255 1.459 3.255 3.255zM161.212 247.202c0 2.452-1.986 4.438-4.438 4.438-2.449 0-4.438-1.986-4.438-4.438s1.988-4.438 4.438-4.438c2.451-.001 4.438 1.986 4.438 4.438zM166.358 232.913c0 3.733-3.028 6.763-6.764 6.763-3.734 0-6.762-3.029-6.762-6.763 0-3.736 3.027-6.763 6.762-6.763 3.736 0 6.764 3.027 6.764 6.763zM160.599 220.366c0 2.794-2.264 5.062-5.059 5.062-2.795 0-5.059-2.268-5.059-5.062 0-2.792 2.264-5.06 5.059-5.06 2.795 0 5.059 2.268 5.059 5.06z"
              />
              <path
                fill="#00b800"
                d="M166.668 98.136c0 2.504-2.03 4.533-4.533 4.533-2.504 0-4.532-2.029-4.532-4.533 0-2.502 2.028-4.532 4.532-4.532 2.503 0 4.533 2.03 4.533 4.532z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M159.006 85.294c0 2.319-1.88 4.199-4.199 4.199s-4.199-1.88-4.199-4.199c0-2.32 1.88-4.201 4.199-4.201s4.199 1.88 4.199 4.201zM163.837 77.316c0 2.177-1.765 3.942-3.943 3.942s-3.943-1.766-3.943-3.942c0-2.178 1.765-3.943 3.943-3.943s3.943 1.765 3.943 3.943zM167.217 38.514c0 2.102-1.702 3.805-3.803 3.805-2.1 0-3.804-1.703-3.804-3.805 0-2.1 1.704-3.803 3.804-3.803 2.101.001 3.803 1.704 3.803 3.803zM158.791 35.471c0 2.458-1.992 4.448-4.448 4.448-2.456 0-4.447-1.99-4.447-4.448 0-2.456 1.991-4.447 4.447-4.447s4.448 1.991 4.448 4.447zM165.02 21.206c0 3.747-3.037 6.784-6.784 6.784-3.746 0-6.783-3.037-6.783-6.784 0-3.745 3.037-6.783 6.783-6.783 3.747 0 6.784 3.038 6.784 6.783zM173.823 272.134c0 3.026-2.452 5.479-5.477 5.479-3.025 0-5.478-2.452-5.478-5.479s2.452-5.479 5.478-5.479c3.025 0 5.477 2.452 5.477 5.479zM170.012 258.946c0 2.293-1.857 4.15-4.15 4.15-2.292 0-4.15-1.857-4.15-4.15s1.858-4.15 4.15-4.15c2.293 0 4.15 1.857 4.15 4.15zM171.422 249.129c0 2.439-1.978 4.416-4.416 4.416-2.439 0-4.415-1.977-4.415-4.416 0-2.438 1.976-4.415 4.415-4.415s4.416 1.976 4.416 4.415zM175.241 239.377c0 2.553-2.069 4.621-4.622 4.621-2.555 0-4.623-2.068-4.623-4.621 0-2.556 2.068-4.624 4.623-4.624 2.552 0 4.622 2.068 4.622 4.624z"
              />
              <path
                fill="#00b800"
                d="M180.899 231.787c0 2.877-2.333 5.208-5.208 5.208-2.877 0-5.21-2.331-5.21-5.208 0-2.877 2.333-5.209 5.21-5.209 2.875 0 5.208 2.332 5.208 5.209zM173.592 223.182c0 2.236-1.813 4.048-4.049 4.048-2.236 0-4.049-1.812-4.049-4.048 0-2.236 1.812-4.05 4.049-4.05 2.236 0 4.049 1.813 4.049 4.05z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M171.658 48.094c0 2.705-2.191 4.896-4.896 4.896s-4.896-2.19-4.896-4.896c0-2.703 2.192-4.896 4.896-4.896 2.704 0 4.896 2.193 4.896 4.896zM168.286 30.344c0 1.775-1.438 3.216-3.217 3.216-1.775 0-3.215-1.44-3.215-3.216 0-1.776 1.439-3.217 3.215-3.217 1.778.001 3.217 1.441 3.217 3.217zM174.296 16.704c0 2.403-1.947 4.351-4.349 4.351-2.403 0-4.352-1.947-4.352-4.351 0-2.402 1.948-4.349 4.352-4.349 2.402 0 4.349 1.946 4.349 4.349zM192.447 264.511c0 4.547-3.686 8.234-8.234 8.234s-8.234-3.688-8.234-8.234c0-4.546 3.687-8.234 8.234-8.234 4.548 0 8.234 3.688 8.234 8.234zM177.688 256.056c0 1.889-1.531 3.42-3.42 3.42s-3.42-1.531-3.42-3.42 1.531-3.42 3.42-3.42 3.42 1.532 3.42 3.42zM181.703 247.341c0 2.45-1.986 4.437-4.437 4.437-2.449 0-4.437-1.986-4.437-4.437 0-2.449 1.987-4.437 4.437-4.437s4.437 1.987 4.437 4.437z"
              />
              <path
                fill="#00b800"
                d="M193.85 240.595c0 3.574-2.899 6.475-6.475 6.475-3.577 0-6.474-2.9-6.474-6.475 0-3.577 2.896-6.474 6.474-6.474 3.576 0 6.475 2.897 6.475 6.474zM187.094 223.962c0 2.267-1.839 4.106-4.106 4.106s-4.105-1.84-4.105-4.106c0-2.268 1.839-4.104 4.105-4.104 2.267-.001 4.106 1.836 4.106 4.104z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M192.263 185.743c0 3.119-2.527 5.643-5.644 5.643s-5.643-2.523-5.643-5.643c0-3.116 2.525-5.644 5.643-5.644 3.117 0 5.644 2.528 5.644 5.644zM187.747 173.198c0 3.187-2.582 5.77-5.769 5.77-3.186 0-5.77-2.583-5.77-5.77 0-3.187 2.584-5.77 5.77-5.77 3.187 0 5.769 2.583 5.769 5.77zM181.201 51.77c0 2.422-1.961 4.383-4.382 4.383-2.419 0-4.383-1.961-4.383-4.383 0-2.42 1.964-4.382 4.383-4.382 2.421 0 4.382 1.962 4.382 4.382zM188.584 42.869c0 2.926-2.37 5.297-5.296 5.297s-5.297-2.371-5.297-5.297c0-2.925 2.371-5.296 5.297-5.296 2.926 0 5.296 2.371 5.296 5.296zM184.685 30.604c0 3.744-3.037 6.779-6.781 6.779-3.743 0-6.777-3.035-6.777-6.779 0-3.744 3.034-6.779 6.777-6.779 3.744 0 6.781 3.035 6.781 6.779zM183.859 18.673c0 2.202-1.785 3.987-3.986 3.987-2.202 0-3.985-1.785-3.985-3.987 0-2.201 1.783-3.986 3.985-3.986 2.201-.001 3.986 1.784 3.986 3.986zM195.149 252.336c0 2.38-1.93 4.31-4.312 4.31-2.38 0-4.311-1.93-4.311-4.31 0-2.381 1.931-4.311 4.311-4.311 2.382 0 4.312 1.93 4.312 4.311zM187.389 246.944c0 1.177-.952 2.129-2.128 2.129-1.175 0-2.128-.952-2.128-2.129 0-1.173.953-2.128 2.128-2.128 1.176 0 2.128.955 2.128 2.128z"
              />
              <path
                fill="#00b800"
                d="M200.172 228.143c0 3.461-2.807 6.269-6.268 6.269-3.462 0-6.267-2.808-6.267-6.269 0-3.461 2.805-6.266 6.267-6.266s6.268 2.805 6.268 6.266z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M198.342 176.012c0 2.654-2.152 4.806-4.809 4.806-2.654 0-4.807-2.151-4.807-4.806 0-2.656 2.152-4.809 4.807-4.809 2.657.001 4.809 2.153 4.809 4.809zM198.602 164.763c0 2.27-1.839 4.108-4.108 4.108-2.269 0-4.109-1.839-4.109-4.108 0-2.269 1.84-4.108 4.109-4.108s4.108 1.839 4.108 4.108zM194.305 156.16c0 2.331-1.891 4.22-4.221 4.22s-4.22-1.889-4.22-4.22c0-2.331 1.89-4.22 4.22-4.22s4.221 1.889 4.221 4.22zM195.912 88.046c0 3.344-2.709 6.055-6.055 6.055-3.343 0-6.054-2.711-6.054-6.055s2.711-6.054 6.054-6.054c3.346 0 6.055 2.71 6.055 6.054zM196.537 72.635c0 2.317-1.879 4.195-4.196 4.195-2.318 0-4.197-1.878-4.197-4.195 0-2.318 1.879-4.197 4.197-4.197 2.317-.001 4.196 1.878 4.196 4.197zM191.599 63.845c0 2.74-2.222 4.963-4.964 4.963-2.74 0-4.963-2.223-4.963-4.963 0-2.742 2.223-4.964 4.963-4.964 2.743.001 4.964 2.222 4.964 4.964zM195.137 52.824c0 2.883-2.337 5.219-5.219 5.219s-5.218-2.336-5.218-5.219c0-2.883 2.336-5.22 5.218-5.22s5.219 2.337 5.219 5.22zM199.36 41.903c0 2.623-2.126 4.749-4.748 4.749-2.622 0-4.748-2.126-4.748-4.749 0-2.622 2.126-4.748 4.748-4.748 2.622 0 4.748 2.126 4.748 4.748zM198.505 31.312c0 2.382-1.93 4.312-4.31 4.312-2.382 0-4.313-1.93-4.313-4.312 0-2.38 1.932-4.312 4.313-4.312 2.381.001 4.31 1.932 4.31 4.312zM192.123 23.667c0 2.276-1.845 4.121-4.121 4.121-2.275 0-4.121-1.845-4.121-4.121 0-2.275 1.846-4.121 4.121-4.121 2.276 0 4.121 1.845 4.121 4.121zM205.808 261.375c0 3.402-2.756 6.158-6.157 6.158-3.399 0-6.156-2.756-6.156-6.158 0-3.398 2.757-6.157 6.156-6.157 3.401 0 6.157 2.758 6.157 6.157zM207.482 247.109c0 3.373-2.735 6.108-6.109 6.108s-6.109-2.735-6.109-6.108c0-3.376 2.735-6.111 6.109-6.111s6.109 2.735 6.109 6.111zM206.865 235.184c0 2.504-2.03 4.534-4.535 4.534-2.504 0-4.534-2.03-4.534-4.534 0-2.506 2.03-4.536 4.534-4.536 2.505 0 4.535 2.03 4.535 4.536zM207.853 224.403c0 2.71-2.197 4.909-4.911 4.909-2.711 0-4.91-2.199-4.91-4.909 0-2.712 2.199-4.912 4.91-4.912 2.714 0 4.911 2.2 4.911 4.912zM212.24 213.879c0 2.753-2.23 4.984-4.984 4.984-2.752 0-4.982-2.231-4.982-4.984 0-2.751 2.23-4.981 4.982-4.981 2.753-.001 4.984 2.23 4.984 4.981z"
              />
              <path
                fill="#00b800"
                d="M207.079 185.96c0 1.773-1.438 3.212-3.21 3.212-1.773 0-3.21-1.438-3.21-3.212 0-1.772 1.437-3.207 3.21-3.207 1.771 0 3.21 1.435 3.21 3.207zM210.677 173.977c0 2.511-2.035 4.546-4.547 4.546-2.51 0-4.547-2.035-4.547-4.546 0-2.512 2.037-4.547 4.547-4.547 2.512 0 4.547 2.035 4.547 4.547z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M210.83 106.936c0 4.23-3.429 7.661-7.659 7.661-4.229 0-7.66-3.431-7.66-7.661 0-4.23 3.431-7.66 7.66-7.66 4.23 0 7.659 3.43 7.659 7.66z"
              />
              <path
                fill="#00b800"
                d="M207.601 97.461c0 2.354-1.908 4.262-4.263 4.262s-4.263-1.907-4.263-4.262c0-2.355 1.908-4.263 4.263-4.263s4.263 1.908 4.263 4.263z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M207.156 80.42c0 3.392-2.751 6.141-6.143 6.141s-6.141-2.749-6.141-6.141c0-3.393 2.749-6.143 6.141-6.143s6.143 2.75 6.143 6.143zM210.118 61.514c0 4.548-3.687 8.234-8.233 8.234-4.55 0-8.234-3.687-8.234-8.234 0-4.549 3.685-8.234 8.234-8.234 4.546 0 8.233 3.686 8.233 8.234zM203.632 48.871c0 1.703-1.382 3.085-3.086 3.085s-3.086-1.382-3.086-3.085c0-1.705 1.382-3.087 3.086-3.087s3.086 1.382 3.086 3.087zM212.497 40.342c0 3.291-2.668 5.957-5.957 5.957-3.29 0-5.957-2.666-5.957-5.957 0-3.29 2.667-5.957 5.957-5.957 3.289 0 5.957 2.666 5.957 5.957zM203.66 25.403c0 1.675-1.358 3.033-3.034 3.033-1.675 0-3.033-1.358-3.033-3.033 0-1.676 1.358-3.034 3.033-3.034 1.675 0 3.034 1.358 3.034 3.034zM215.161 257.556c0 2.394-1.94 4.333-4.333 4.333-2.394 0-4.334-1.939-4.334-4.333s1.94-4.333 4.334-4.333c2.392 0 4.333 1.94 4.333 4.333zM216.25 248.303c0 2.071-1.681 3.751-3.752 3.751-2.073 0-3.753-1.68-3.753-3.751 0-2.074 1.68-3.752 3.753-3.752 2.071 0 3.752 1.678 3.752 3.752zM216.906 238.344c0 2.543-2.062 4.604-4.606 4.604-2.542 0-4.604-2.061-4.604-4.604 0-2.545 2.062-4.605 4.604-4.605 2.543 0 4.606 2.061 4.606 4.605zM220.129 223.186c0 3.044-2.468 5.509-5.512 5.509-3.044 0-5.511-2.465-5.511-5.509 0-3.045 2.467-5.513 5.511-5.513s5.512 2.468 5.512 5.513zM220.274 206.134c0 2.686-2.177 4.86-4.863 4.86-2.686 0-4.861-2.175-4.861-4.86 0-2.687 2.176-4.864 4.861-4.864 2.686-.001 4.863 2.177 4.863 4.864zM222.276 197.209c0 1.846-1.495 3.341-3.342 3.341-1.846 0-3.341-1.495-3.341-3.341 0-1.847 1.495-3.342 3.341-3.342 1.847 0 3.342 1.495 3.342 3.342z"
              />
              <path
                fill="#00b800"
                d="M212.458 181.753c0 1.495-1.213 2.707-2.707 2.707-1.494 0-2.706-1.212-2.706-2.707 0-1.494 1.212-2.706 2.706-2.706s2.707 1.212 2.707 2.706z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M217.83 126.216c0 1.833-1.487 3.32-3.32 3.32-1.834 0-3.32-1.487-3.32-3.32 0-1.834 1.486-3.319 3.32-3.319 1.832-.001 3.32 1.485 3.32 3.319zM225.006 115.617c0 3.642-2.952 6.592-6.593 6.592-3.64 0-6.59-2.95-6.59-6.592 0-3.64 2.95-6.591 6.59-6.591 3.641 0 6.593 2.951 6.593 6.591zM224.414 100.2c0 3.754-3.044 6.797-6.798 6.797-3.755 0-6.797-3.043-6.797-6.797 0-3.753 3.042-6.797 6.797-6.797 3.754 0 6.798 3.044 6.798 6.797zM215.784 88.841c0 2.899-2.353 5.251-5.252 5.251-2.9 0-5.25-2.352-5.25-5.251 0-2.9 2.35-5.251 5.25-5.251 2.899 0 5.252 2.35 5.252 5.251zM222.744 78.338c0 3.145-2.55 5.693-5.694 5.693s-5.694-2.549-5.694-5.693c0-3.146 2.55-5.694 5.694-5.694s5.694 2.548 5.694 5.694zM211.705 72.627c0 1.816-1.472 3.288-3.288 3.288-1.817 0-3.29-1.472-3.29-3.288 0-1.816 1.473-3.29 3.29-3.29 1.816 0 3.288 1.473 3.288 3.29zM211.867 51.206c0 1.61-1.306 2.917-2.916 2.917-1.61 0-2.916-1.307-2.916-2.917 0-1.611 1.306-2.916 2.916-2.916 1.61 0 2.916 1.304 2.916 2.916zM220.113 46.708c0 2.276-1.846 4.121-4.121 4.121-2.277 0-4.122-1.845-4.122-4.121 0-2.276 1.845-4.121 4.122-4.121 2.275 0 4.121 1.844 4.121 4.121zM211.116 29.478c0 2.005-1.624 3.63-3.628 3.63-2.005 0-3.63-1.625-3.63-3.63 0-2.004 1.625-3.629 3.63-3.629 2.004 0 3.628 1.625 3.628 3.629zM227.304 244.086c0 2.936-2.381 5.313-5.316 5.313-2.937 0-5.315-2.378-5.315-5.313 0-2.937 2.379-5.316 5.315-5.316 2.935-.001 5.316 2.379 5.316 5.316zM227.374 232.346c0 2.82-2.288 5.108-5.108 5.108-2.818 0-5.105-2.288-5.105-5.108s2.287-5.105 5.105-5.105c2.82 0 5.108 2.285 5.108 5.105zM229.202 222.47c0 2.115-1.714 3.829-3.828 3.829-2.115 0-3.829-1.714-3.829-3.829s1.714-3.829 3.829-3.829c2.114 0 3.828 1.714 3.828 3.829zM233.348 208.418c0 3.281-2.658 5.939-5.938 5.939-3.281 0-5.939-2.658-5.939-5.939 0-3.28 2.658-5.941 5.939-5.941 3.28-.001 5.938 2.66 5.938 5.941zM233.542 193.913c0 2.866-2.324 5.19-5.19 5.19-2.866 0-5.19-2.324-5.19-5.19 0-2.866 2.324-5.19 5.19-5.19 2.866 0 5.19 2.324 5.19 5.19zM222.646 190.222c0 1.303-1.055 2.357-2.355 2.357s-2.354-1.055-2.354-2.357c0-1.299 1.054-2.354 2.354-2.354s2.355 1.056 2.355 2.354z"
              />
              <path
                fill="#00b800"
                d="M224.941 135.778c0 1.394-1.129 2.521-2.521 2.521s-2.522-1.128-2.522-2.521c0-1.392 1.13-2.521 2.522-2.521s2.521 1.13 2.521 2.521zM241.057 124.011c0 3.358-2.722 6.079-6.079 6.079-3.357 0-6.08-2.721-6.08-6.079 0-3.357 2.723-6.079 6.08-6.079s6.079 2.721 6.079 6.079zM232.98 111.145c0 1.81-1.467 3.277-3.276 3.277-1.809 0-3.278-1.468-3.278-3.277 0-1.809 1.469-3.276 3.278-3.276s3.276 1.466 3.276 3.276zM239.129 96.273c0 2.624-2.128 4.754-4.755 4.754-2.625 0-4.753-2.13-4.753-4.754 0-2.626 2.128-4.756 4.753-4.756 2.627.001 4.755 2.13 4.755 4.756zM229.071 92.134c0 2.265-1.837 4.102-4.102 4.102-2.268 0-4.102-1.837-4.102-4.102 0-2.266 1.834-4.102 4.102-4.102 2.265 0 4.102 1.836 4.102 4.102z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M230.52 76.579c0 1.826-1.479 3.305-3.305 3.305s-3.306-1.479-3.306-3.305c0-1.825 1.479-3.305 3.306-3.305 1.826 0 3.305 1.48 3.305 3.305zM228.024 66.799c0 3.114-2.524 5.64-5.64 5.64-3.116 0-5.641-2.525-5.641-5.64 0-3.115 2.525-5.641 5.641-5.641s5.64 2.525 5.64 5.641zM226.239 55.198c0 2.58-2.09 4.671-4.671 4.671-2.578 0-4.67-2.091-4.67-4.671 0-2.579 2.092-4.67 4.67-4.67 2.581 0 4.671 2.091 4.671 4.67zM232.741 45.055c0 3.087-2.501 5.59-5.589 5.59-3.088 0-5.589-2.503-5.589-5.59 0-3.086 2.501-5.589 5.589-5.589 3.088 0 5.589 2.503 5.589 5.589zM239.879 238.005c0 3.459-2.803 6.261-6.261 6.261-3.459 0-6.261-2.802-6.261-6.261 0-3.455 2.802-6.26 6.261-6.26s6.261 2.805 6.261 6.26zM237.182 226.765c0 2.022-1.639 3.661-3.661 3.661-2.022 0-3.662-1.639-3.662-3.661 0-2.022 1.64-3.662 3.662-3.662 2.022 0 3.661 1.64 3.661 3.662zM238.668 217.494c0 2.331-1.892 4.223-4.226 4.223-2.333 0-4.224-1.892-4.224-4.223 0-2.334 1.891-4.226 4.224-4.226 2.334 0 4.226 1.892 4.226 4.226zM244.015 201.195c0 3.186-2.582 5.767-5.768 5.767s-5.767-2.581-5.767-5.767c0-3.186 2.581-5.77 5.767-5.77 3.186 0 5.768 2.585 5.768 5.77zM244.752 189.629c0 2.558-2.072 4.632-4.631 4.632-2.558 0-4.63-2.074-4.63-4.632 0-2.556 2.072-4.63 4.63-4.63s4.631 2.074 4.631 4.63zM241.237 82.094c0 3.025-2.451 5.477-5.477 5.477-3.024 0-5.474-2.451-5.474-5.477 0-3.023 2.449-5.475 5.474-5.475 3.026.001 5.477 2.452 5.477 5.475zM240.911 69.414c0 3.265-2.646 5.911-5.91 5.911-3.266 0-5.912-2.646-5.912-5.911 0-3.266 2.646-5.912 5.912-5.912 3.263 0 5.91 2.646 5.91 5.912zM242.509 55.442c0 3.673-2.977 6.648-6.646 6.648-3.673 0-6.649-2.976-6.649-6.648 0-3.672 2.977-6.647 6.649-6.647 3.67 0 6.646 2.975 6.646 6.647zM250.949 226.035c0 3.442-2.792 6.234-6.234 6.234-3.445 0-6.237-2.792-6.237-6.234 0-3.446 2.792-6.238 6.237-6.238 3.442 0 6.234 2.792 6.234 6.238zM250.582 212.541c0 3.229-2.62 5.849-5.85 5.849-3.23 0-5.846-2.619-5.846-5.849s2.616-5.847 5.846-5.847 5.85 2.617 5.85 5.847zM252.655 201.725c0 2.018-1.636 3.654-3.653 3.654-2.021 0-3.655-1.637-3.655-3.654 0-2.021 1.635-3.654 3.655-3.654 2.017 0 3.653 1.634 3.653 3.654zM257.257 191.412c0 3.126-2.536 5.661-5.662 5.661-3.128 0-5.664-2.535-5.664-5.661 0-3.129 2.536-5.664 5.664-5.664 3.126 0 5.662 2.535 5.662 5.664z"
              />
              <path
                fill="#00b800"
                d="M256.308 100.137c0 3.1-2.511 5.612-5.612 5.612-3.099 0-5.612-2.513-5.612-5.612s2.514-5.612 5.612-5.612c3.101-.001 5.612 2.512 5.612 5.612z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M253.829 84.841c0 2.74-2.222 4.962-4.963 4.962-2.74 0-4.962-2.222-4.962-4.962 0-2.74 2.222-4.961 4.962-4.961 2.741 0 4.963 2.22 4.963 4.961zM252.207 73.398c0 2.925-2.372 5.296-5.296 5.296-2.925 0-5.296-2.371-5.296-5.296 0-2.924 2.371-5.294 5.296-5.294 2.924 0 5.296 2.37 5.296 5.294zM250.329 62.35c0 2.383-1.933 4.314-4.315 4.314-2.382 0-4.313-1.932-4.313-4.314s1.931-4.315 4.313-4.315c2.382 0 4.315 1.933 4.315 4.315zM258.806 216.017c0 2.065-1.674 3.738-3.738 3.738-2.065 0-3.739-1.673-3.739-3.738 0-2.064 1.674-3.739 3.739-3.739 2.064 0 3.738 1.675 3.738 3.739zM260.148 207.026c0 2.18-1.765 3.947-3.944 3.947-2.179 0-3.946-1.768-3.946-3.947 0-2.179 1.767-3.945 3.946-3.945 2.179 0 3.944 1.765 3.944 3.945zM266.789 187.734c0 2.425-1.963 4.388-4.386 4.388s-4.387-1.963-4.387-4.388c0-2.421 1.964-4.385 4.387-4.385 2.423 0 4.386 1.964 4.386 4.385z"
              />
              <path
                fill="#00b800"
                d="M270.214 91.99c0 3.357-2.723 6.08-6.081 6.08-3.357 0-6.08-2.723-6.08-6.08 0-3.358 2.723-6.081 6.08-6.081 3.359 0 6.081 2.723 6.081 6.081z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M261.127 77.482c0 2.306-1.868 4.175-4.174 4.175s-4.174-1.869-4.174-4.175c0-2.305 1.868-4.174 4.174-4.174s4.174 1.869 4.174 4.174zM254.35 66.602c0 1.1-.892 1.99-1.991 1.99-1.099 0-1.99-.891-1.99-1.99s.892-1.99 1.99-1.99c1.1 0 1.991.892 1.991 1.99zM267.462 198.676c0 2.803-2.271 5.075-5.074 5.075-2.804 0-5.075-2.272-5.075-5.075 0-2.802 2.271-5.074 5.075-5.074 2.803-.001 5.074 2.272 5.074 5.074zM275.959 175.413c0 3.484-2.825 6.309-6.31 6.309-3.483 0-6.308-2.824-6.308-6.309 0-3.485 2.824-6.309 6.308-6.309s6.31 2.824 6.31 6.309zM272.523 161.944c0 2.726-2.209 4.935-4.934 4.935-2.726 0-4.935-2.209-4.935-4.935 0-2.725 2.209-4.934 4.935-4.934 2.725 0 4.934 2.209 4.934 4.934zM276.661 151.342c0 2.719-2.204 4.923-4.923 4.923-2.718 0-4.922-2.204-4.922-4.923s2.204-4.921 4.922-4.921c2.719 0 4.923 2.202 4.923 4.921zM271.761 141.6c0 2.468-1.999 4.468-4.467 4.468-2.468 0-4.469-2-4.469-4.468s2.001-4.468 4.469-4.468c2.468 0 4.467 2.001 4.467 4.468zM277.88 122.623c0 3.533-2.864 6.396-6.396 6.396s-6.396-2.862-6.396-6.396c0-3.531 2.863-6.395 6.396-6.395 3.532 0 6.396 2.864 6.396 6.395zM275.041 109.938c0 2.72-2.203 4.924-4.924 4.924-2.72 0-4.925-2.204-4.925-4.924s2.205-4.925 4.925-4.925c2.72 0 4.924 2.205 4.924 4.925zM278.009 166.62c0 1.499-1.215 2.714-2.714 2.714-1.499 0-2.713-1.215-2.713-2.714 0-1.497 1.214-2.712 2.713-2.712s2.714 1.215 2.714 2.712zM279.732 142.97c0 1.844-1.495 3.339-3.339 3.339-1.845 0-3.339-1.495-3.339-3.339 0-1.844 1.494-3.339 3.339-3.339 1.844.001 3.339 1.496 3.339 3.339zM278.95 134.2c0 2.366-1.917 4.283-4.282 4.283s-4.283-1.917-4.283-4.283c0-2.365 1.918-4.282 4.283-4.282s4.282 1.917 4.282 4.282zM19.295 119.567c0 1.891-1.533 3.424-3.423 3.424-1.891 0-3.424-1.533-3.424-3.424 0-1.892 1.533-3.424 3.424-3.424 1.89 0 3.423 1.533 3.423 3.424zM36.402 73.121c0 1.447-1.174 2.619-2.62 2.619-1.445 0-2.619-1.172-2.619-2.619 0-1.446 1.174-2.62 2.619-2.62 1.447 0 2.62 1.174 2.62 2.62zM39.112 203.841c0 1.464-1.187 2.652-2.65 2.652-1.465 0-2.652-1.188-2.652-2.652 0-1.465 1.188-2.65 2.652-2.65 1.464-.001 2.65 1.185 2.65 2.65zM41.557 87.213c0 1.255-1.017 2.27-2.27 2.27-1.253 0-2.27-1.015-2.27-2.27 0-1.253 1.017-2.269 2.27-2.269 1.253 0 2.27 1.016 2.27 2.269zM48.383 129.198c0 1.682-1.363 3.045-3.046 3.045-1.682 0-3.046-1.363-3.046-3.045 0-1.684 1.364-3.047 3.046-3.047 1.683 0 3.046 1.363 3.046 3.047zM47.509 81.777c0 1.335-1.084 2.417-2.419 2.417-1.336 0-2.418-1.082-2.418-2.417 0-1.336 1.082-2.418 2.418-2.418 1.335 0 2.419 1.082 2.419 2.418zM52.114 116.178c0 1.456-1.181 2.636-2.636 2.636-1.456 0-2.637-1.18-2.637-2.636 0-1.455 1.181-2.635 2.637-2.635 1.456.001 2.636 1.18 2.636 2.635zM53.345 123.529c0 1.71-1.386 3.096-3.096 3.096-1.71 0-3.096-1.386-3.096-3.096 0-1.71 1.386-3.097 3.096-3.097 1.71 0 3.096 1.387 3.096 3.097zM53.28 68.765c0 1.589-1.287 2.877-2.876 2.877s-2.875-1.288-2.875-2.877c0-1.588 1.286-2.876 2.875-2.876s2.876 1.288 2.876 2.876zM60.483 242.776c0 1.865-1.513 3.381-3.381 3.381-1.866 0-3.38-1.516-3.38-3.381 0-1.868 1.514-3.382 3.38-3.382 1.868 0 3.381 1.514 3.381 3.382z"
              />
              <path
                fill="#00b800"
                d="M72.303 102.563c0 2.111-1.711 3.821-3.821 3.821-2.111 0-3.82-1.71-3.82-3.821 0-2.11 1.709-3.821 3.82-3.821 2.11 0 3.821 1.711 3.821 3.821z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M71.483 38.403c0 1.936-1.57 3.506-3.505 3.506-1.936 0-3.505-1.57-3.505-3.506 0-1.936 1.569-3.505 3.505-3.505 1.935 0 3.505 1.57 3.505 3.505zM71.262 60.983c0 1.254-1.017 2.271-2.27 2.271-1.255 0-2.271-1.017-2.271-2.271s1.016-2.27 2.271-2.27c1.253.001 2.27 1.016 2.27 2.27zM73.624 254.821c0 1.312-1.062 2.373-2.371 2.373-1.312 0-2.373-1.061-2.373-2.373 0-1.31 1.062-2.372 2.373-2.372 1.31 0 2.371 1.062 2.371 2.372z"
              />
              <path
                fill="#00b800"
                d="M76.927 98.545c0 1.242-1.006 2.248-2.248 2.248-1.241 0-2.247-1.006-2.247-2.248 0-1.241 1.006-2.247 2.247-2.247 1.242 0 2.248 1.006 2.248 2.247zM78.424 153.195c0 1.337-1.085 2.42-2.421 2.42-1.338 0-2.421-1.083-2.421-2.42s1.083-2.422 2.421-2.422c1.336 0 2.421 1.085 2.421 2.422z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M77.208 32.182c0 1.255-1.016 2.273-2.271 2.273s-2.273-1.019-2.273-2.273c0-1.254 1.018-2.272 2.273-2.272 1.255 0 2.271 1.017 2.271 2.272zM82.677 237.509c0 2.107-1.709 3.816-3.817 3.816-2.107 0-3.817-1.709-3.817-3.816 0-2.107 1.71-3.818 3.817-3.818 2.108-.001 3.817 1.71 3.817 3.818zM82.685 128.815c0 1.597-1.295 2.892-2.892 2.892s-2.891-1.295-2.891-2.892 1.294-2.891 2.891-2.891 2.892 1.294 2.892 2.891zM86.676 215.538c0 1.649-1.336 2.985-2.985 2.985-1.646 0-2.982-1.336-2.982-2.985 0-1.646 1.336-2.982 2.982-2.982 1.649-.001 2.985 1.335 2.985 2.982z"
              />
              <path
                fill="#00b800"
                d="M88.978 160.039c0 1.317-1.066 2.384-2.383 2.384s-2.386-1.066-2.386-2.384c0-1.318 1.068-2.385 2.386-2.385 1.316 0 2.383 1.068 2.383 2.385z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M94.822 252.469c0 1.196-.97 2.166-2.165 2.166-1.197 0-2.166-.97-2.166-2.166 0-1.197.969-2.167 2.166-2.167 1.196 0 2.165.97 2.165 2.167zM96.853 85.839c0 1.264-1.023 2.286-2.285 2.286-1.264 0-2.287-1.022-2.287-2.286s1.023-2.286 2.287-2.286c1.261-.001 2.285 1.022 2.285 2.286zM105.258 269.121c0 1.873-1.519 3.392-3.392 3.392s-3.392-1.519-3.392-3.392c0-1.874 1.519-3.392 3.392-3.392s3.392 1.518 3.392 3.392zM97.533 119.141c0 1.272-1.03 2.303-2.305 2.303-1.271 0-2.303-1.03-2.303-2.303s1.032-2.305 2.303-2.305c1.275.001 2.305 1.033 2.305 2.305zM107.827 153.782c0 2.27-1.84 4.111-4.11 4.111-2.271 0-4.111-1.842-4.111-4.111 0-2.271 1.84-4.11 4.111-4.11 2.27 0 4.11 1.839 4.11 4.11zM103.09 116.617c0 1.293-1.047 2.342-2.342 2.342-1.292 0-2.34-1.049-2.34-2.342 0-1.293 1.048-2.34 2.34-2.34 1.295 0 2.342 1.047 2.342 2.34zM106.032 261.812c0 1.444-1.169 2.612-2.61 2.612-1.441 0-2.609-1.168-2.609-2.612 0-1.44 1.168-2.609 2.609-2.609s2.61 1.169 2.61 2.609z"
              />
              <path
                fill="#00b800"
                d="M114.268 225.922c0 2.316-1.876 4.192-4.19 4.192-2.315 0-4.191-1.876-4.191-4.192 0-2.312 1.876-4.188 4.191-4.188 2.314-.001 4.19 1.875 4.19 4.188zM112.203 98.488c0 1.35-1.093 2.445-2.444 2.445s-2.444-1.096-2.444-2.445c0-1.351 1.094-2.445 2.444-2.445 1.351 0 2.444 1.095 2.444 2.445z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M109.242 39.324c0 1.543-1.25 2.793-2.794 2.793s-2.795-1.25-2.795-2.793c0-1.544 1.251-2.795 2.795-2.795s2.794 1.251 2.794 2.795zM114.119 81.6c0 1.543-1.251 2.794-2.792 2.794-1.544 0-2.795-1.251-2.795-2.794 0-1.542 1.251-2.793 2.795-2.793 1.541 0 2.792 1.251 2.792 2.793z"
              />
              <path
                fill="#00b800"
                d="M126.733 97.7c0 1.271-1.031 2.302-2.302 2.302-1.271 0-2.301-1.031-2.301-2.302 0-1.271 1.029-2.302 2.301-2.302 1.271 0 2.302 1.031 2.302 2.302z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M131.398 274.609c0 2.192-1.777 3.971-3.972 3.971-2.193 0-3.972-1.778-3.972-3.971 0-2.195 1.778-3.973 3.972-3.973s3.972 1.778 3.972 3.973zM127.227 24.357c0 1.533-1.243 2.777-2.777 2.777-1.535 0-2.778-1.244-2.778-2.777 0-1.535 1.243-2.778 2.778-2.778 1.533 0 2.777 1.243 2.777 2.778zM130.72 220.44c0 1.336-1.083 2.419-2.419 2.419-1.337 0-2.42-1.083-2.42-2.419 0-1.335 1.083-2.419 2.42-2.419 1.336 0 2.419 1.084 2.419 2.419z"
              />
              <path
                fill="#00b800"
                d="M136.397 195.188c0 1.331-1.081 2.411-2.414 2.411-1.333 0-2.414-1.08-2.414-2.411 0-1.333 1.081-2.413 2.414-2.413 1.333 0 2.414 1.079 2.414 2.413z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M138.683 68.445c0 1.428-1.158 2.586-2.586 2.586s-2.586-1.158-2.586-2.586c0-1.427 1.158-2.585 2.586-2.585s2.586 1.158 2.586 2.585zM144.488 259.924c0 1.23-.996 2.226-2.227 2.226-1.229 0-2.225-.995-2.225-2.226 0-1.228.996-2.226 2.225-2.226 1.231 0 2.227.998 2.227 2.226z"
              />
              <path
                fill="#00b800"
                d="M147.907 99.562c0 1.302-1.058 2.358-2.359 2.358-1.303 0-2.36-1.057-2.36-2.358 0-1.304 1.058-2.359 2.36-2.359 1.302-.001 2.359 1.055 2.359 2.359z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M148.675 36.793c0 1.748-1.417 3.165-3.166 3.165-1.747 0-3.165-1.417-3.165-3.165s1.418-3.165 3.165-3.165c1.749 0 3.166 1.417 3.166 3.165zM154.551 77.746c0 1.395-1.131 2.525-2.526 2.525-1.395 0-2.523-1.131-2.523-2.525s1.129-2.524 2.523-2.524c1.395-.001 2.526 1.13 2.526 2.524z"
              />
              <path
                fill="#00b800"
                d="M159.654 195.826c0 1.273-1.033 2.306-2.308 2.306-1.273 0-2.306-1.032-2.306-2.306s1.032-2.309 2.306-2.309c1.275.001 2.308 1.035 2.308 2.309z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M158.912 212.303c0 .988-.802 1.791-1.791 1.791-.988 0-1.791-.803-1.791-1.791 0-.988.803-1.791 1.791-1.791.989 0 1.791.803 1.791 1.791zM165.015 242.454c0 1.127-.915 2.043-2.043 2.043-1.127 0-2.042-.916-2.042-2.043 0-1.127.915-2.043 2.042-2.043 1.128 0 2.043.916 2.043 2.043zM165.041 84.424c0 1.281-1.039 2.321-2.32 2.321-1.282 0-2.321-1.04-2.321-2.321 0-1.281 1.039-2.321 2.321-2.321 1.281-.001 2.32 1.039 2.32 2.321zM171.495 24.811c0 1.293-1.05 2.341-2.343 2.341s-2.342-1.048-2.342-2.341c0-1.295 1.049-2.344 2.342-2.344 1.293 0 2.343 1.049 2.343 2.344zM174.69 263.683c0 1.335-1.083 2.419-2.418 2.419-1.336 0-2.419-1.084-2.419-2.419 0-1.336 1.083-2.419 2.419-2.419 1.335 0 2.418 1.083 2.418 2.419zM176.788 41.165c0 1.868-1.516 3.383-3.384 3.383-1.868 0-3.383-1.515-3.383-3.383s1.515-3.382 3.383-3.382 3.384 1.514 3.384 3.382z"
              />
              <path
                fill="#00b800"
                d="M178.756 219.557c0 1.312-1.062 2.375-2.374 2.375-1.311 0-2.373-1.063-2.373-2.375 0-1.311 1.062-2.373 2.373-2.373 1.312 0 2.374 1.062 2.374 2.373z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M181.962 58.938c0 1.115-.905 2.021-2.021 2.021-1.117 0-2.021-.906-2.021-2.021 0-1.117.904-2.022 2.021-2.022 1.115 0 2.021.905 2.021 2.022zM185.184 252.879c0 1.181-.959 2.141-2.141 2.141s-2.139-.96-2.139-2.141c0-1.182.957-2.139 2.139-2.139s2.141.957 2.141 2.139zM188.978 165.022c0 1.254-1.017 2.271-2.271 2.271-1.253 0-2.27-1.017-2.27-2.271 0-1.255 1.017-2.271 2.27-2.271 1.255 0 2.271 1.016 2.271 2.271zM189.492 35.104c0 1.185-.963 2.146-2.148 2.146s-2.146-.962-2.146-2.146c0-1.187.961-2.147 2.146-2.147s2.148.961 2.148 2.147zM194.472 243.826c0 1.446-1.172 2.619-2.618 2.619-1.447 0-2.62-1.173-2.62-2.619 0-1.446 1.173-2.62 2.62-2.62 1.446 0 2.618 1.174 2.618 2.62zM196.467 234.225c0 1.425-1.152 2.578-2.578 2.578-1.424 0-2.578-1.153-2.578-2.578 0-1.423 1.154-2.579 2.578-2.579 1.426 0 2.578 1.156 2.578 2.579zM197.337 21.891c0 1.091-.884 1.977-1.977 1.977-1.091 0-1.975-.886-1.975-1.977 0-1.091.884-1.975 1.975-1.975 1.094.001 1.977.885 1.977 1.975zM209.824 97.002c0 1.101-.893 1.995-1.997 1.995-1.101 0-1.994-.895-1.994-1.995 0-1.103.894-1.997 1.994-1.997 1.104 0 1.997.894 1.997 1.997zM211.417 230.543c0 1.292-1.046 2.339-2.336 2.339-1.292 0-2.34-1.047-2.34-2.339s1.048-2.339 2.34-2.339c1.29 0 2.336 1.047 2.336 2.339zM214.353 198.4c0 1.215-.986 2.2-2.2 2.2-1.216 0-2.201-.985-2.201-2.2 0-1.214.985-2.199 2.201-2.199 1.214 0 2.2.985 2.2 2.199zM215.356 66.934c0 1.419-1.149 2.569-2.57 2.569-1.418 0-2.568-1.15-2.568-2.569s1.15-2.57 2.568-2.57c1.421 0 2.57 1.151 2.57 2.57zM217.207 60.378c0 1.576-1.277 2.854-2.854 2.854-1.577 0-2.854-1.278-2.854-2.854s1.277-2.854 2.854-2.854c1.577 0 2.854 1.277 2.854 2.854zM222.484 36.841c0 2.496-2.023 4.52-4.52 4.52-2.497 0-4.52-2.023-4.52-4.52 0-2.497 2.023-4.52 4.52-4.52 2.497 0 4.52 2.023 4.52 4.52zM222.265 253.642c0 1.817-1.472 3.289-3.287 3.289s-3.286-1.472-3.286-3.289c0-1.813 1.471-3.286 3.286-3.286s3.287 1.473 3.287 3.286zM222.106 214.437c0 1.621-1.315 2.934-2.937 2.934-1.622 0-2.934-1.312-2.934-2.934s1.312-2.937 2.934-2.937 2.937 1.316 2.937 2.937z"
              />
              <path
                fill="#00b800"
                d="M229.096 129.526c0 1.785-1.446 3.232-3.23 3.232s-3.23-1.447-3.23-3.232c0-1.784 1.446-3.23 3.23-3.23s3.23 1.446 3.23 3.23z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M228.942 83.305c0 1.163-.943 2.104-2.105 2.104-1.161 0-2.104-.941-2.104-2.104 0-1.162.943-2.104 2.104-2.104 1.162 0 2.105.942 2.105 2.104z"
              />
              <path
                fill="#00b800"
                d="M236.078 104.948c0 1.448-1.172 2.62-2.619 2.62-1.447 0-2.621-1.172-2.621-2.62 0-1.447 1.174-2.62 2.621-2.62s2.619 1.173 2.619 2.62zM245.694 94.375c0 1.462-1.187 2.648-2.647 2.648-1.462 0-2.648-1.187-2.648-2.648 0-1.463 1.187-2.647 2.648-2.647 1.46 0 2.647 1.184 2.647 2.647z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M270.864 192.69c0 1.24-1.007 2.247-2.247 2.247s-2.245-1.007-2.245-2.247 1.005-2.243 2.245-2.243c1.24 0 2.247 1.003 2.247 2.243zM273.259 185.704c0 1.493-1.21 2.702-2.701 2.702s-2.7-1.209-2.7-2.702c0-1.489 1.209-2.699 2.7-2.699s2.701 1.21 2.701 2.699zM278.881 159.289c0 1.504-1.22 2.722-2.723 2.722s-2.72-1.218-2.72-2.722c0-1.503 1.217-2.721 2.72-2.721 1.503 0 2.723 1.218 2.723 2.721zM63.415 237.457c0 1.155-.938 2.092-2.094 2.092s-2.092-.937-2.092-2.092c0-1.158.937-2.095 2.092-2.095s2.094.937 2.094 2.095zM73.027 76.084c0 1.103-.894 1.995-1.997 1.995-1.102 0-1.997-.893-1.997-1.995 0-1.104.896-1.997 1.997-1.997 1.104 0 1.997.893 1.997 1.997zM90.133 265.021c0 1.073-.87 1.943-1.944 1.943-1.073 0-1.943-.87-1.943-1.943s.87-1.942 1.943-1.942c1.074 0 1.944.869 1.944 1.942z"
              />
              <path
                fill="#00b800"
                d="M216.781 178.211c0 1.143-.928 2.07-2.071 2.07-1.143 0-2.068-.928-2.068-2.07 0-1.144.926-2.07 2.068-2.07 1.143 0 2.071.926 2.071 2.07z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M216.862 191.821c0 .932-.757 1.688-1.688 1.688-.934 0-1.689-.756-1.689-1.688 0-.935.756-1.69 1.689-1.69.931 0 1.688.755 1.688 1.69zM161.148 105.228c0 2.381-1.931 4.312-4.313 4.312-2.38 0-4.31-1.932-4.31-4.312 0-2.38 1.93-4.312 4.31-4.312 2.382.001 4.313 1.931 4.313 4.312zM23.791 168.169c0 3.161-2.562 5.725-5.723 5.725s-5.723-2.563-5.723-5.725c0-3.162 2.562-5.724 5.723-5.724s5.723 2.563 5.723 5.724zM56.28 173.785c0 3.193-2.589 5.782-5.782 5.782s-5.781-2.589-5.781-5.782 2.588-5.782 5.781-5.782c3.193 0 5.782 2.589 5.782 5.782zM51.942 160.376c0 1.234-1 2.234-2.234 2.234-1.232 0-2.23-1-2.23-2.234 0-1.232.998-2.232 2.23-2.232 1.234-.001 2.234.999 2.234 2.232zM85.49 185.568c0 2.602-2.108 4.709-4.71 4.709-2.601 0-4.709-2.107-4.709-4.709 0-2.602 2.108-4.709 4.709-4.709 2.602 0 4.71 2.108 4.71 4.709z"
              />
              <path
                fill="#00b800"
                d="M100.199 196.217c0 3.384-2.743 6.127-6.127 6.127s-6.127-2.743-6.127-6.127 2.743-6.127 6.127-6.127 6.127 2.743 6.127 6.127zM110.091 189.885c0 2.369-1.92 4.292-4.289 4.292-2.37 0-4.291-1.923-4.291-4.292 0-2.37 1.921-4.29 4.291-4.29 2.369 0 4.289 1.92 4.289 4.29zM100.451 187.924c0 1.078-.874 1.953-1.955 1.953-1.078 0-1.954-.875-1.954-1.953 0-1.081.876-1.956 1.954-1.956 1.081 0 1.955.875 1.955 1.956z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M111.551 176.746c0 2.721-2.208 4.926-4.929 4.926-2.722 0-4.93-2.205-4.93-4.926 0-2.723 2.208-4.93 4.93-4.93 2.721 0 4.929 2.207 4.929 4.93zM120.633 171.905c0 2.431-1.97 4.402-4.401 4.402s-4.401-1.972-4.401-4.402 1.97-4.401 4.401-4.401 4.401 1.971 4.401 4.401zM131.193 164.013c0 3.322-2.692 6.015-6.015 6.015-3.323 0-6.017-2.692-6.017-6.015 0-3.323 2.693-6.017 6.017-6.017 3.323.001 6.015 2.695 6.015 6.017zM127.425 152.469c0 2.438-1.974 4.412-4.41 4.412-2.438 0-4.411-1.975-4.411-4.412 0-2.436 1.974-4.41 4.411-4.41 2.436 0 4.41 1.975 4.41 4.41z"
              />
              <path
                fill="#00b800"
                d="M93.88 186.945c0 1.078-.874 1.953-1.953 1.953-1.078 0-1.953-.875-1.953-1.953s.875-1.953 1.953-1.953c1.079 0 1.953.875 1.953 1.953z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M133.004 155.804c0 1.331-1.078 2.409-2.409 2.409-1.33 0-2.408-1.078-2.408-2.409 0-1.33 1.078-2.408 2.408-2.408 1.331 0 2.409 1.078 2.409 2.408zM116.062 179.101c0 .911-.738 1.649-1.649 1.649s-1.649-.738-1.649-1.649c0-.912.738-1.65 1.649-1.65s1.649.738 1.649 1.65zM67.683 163.057c0 4.074-3.305 7.377-7.379 7.377-4.075 0-7.379-3.303-7.379-7.377s3.304-7.379 7.379-7.379c4.074 0 7.379 3.305 7.379 7.379z"
              />
              <path
                fill="#00b800"
                d="M73.273 121.304c0 4.547-3.687 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.548 3.688-8.234 8.234-8.234 4.548-.001 8.234 3.686 8.234 8.234z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M73.887 176.531c0 3.551-2.879 6.428-6.429 6.428-3.551 0-6.428-2.877-6.428-6.428 0-3.55 2.877-6.427 6.428-6.427 3.55 0 6.429 2.877 6.429 6.427z"
              />
              <path
                fill="#00b800"
                d="M74.149 140.26c0 2.195-1.779 3.975-3.975 3.975-2.194 0-3.975-1.779-3.975-3.975s1.78-3.975 3.975-3.975c2.196 0 3.975 1.779 3.975 3.975zM78.971 131.588c0 2.442-1.979 4.421-4.421 4.421s-4.421-1.979-4.421-4.421c0-2.44 1.979-4.42 4.421-4.42 2.441 0 4.421 1.979 4.421 4.42z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M78.006 108.496c0 2.809-2.277 5.086-5.086 5.086-2.81 0-5.087-2.277-5.087-5.086 0-2.81 2.277-5.087 5.087-5.087 2.809 0 5.086 2.277 5.086 5.087z"
              />
              <path
                fill="#00b800"
                d="M84.294 140.255c0 2.407-1.95 4.357-4.357 4.357s-4.357-1.95-4.357-4.357 1.95-4.358 4.357-4.358 4.357 1.951 4.357 4.358zM88.722 101.947c0 3.064-2.483 5.548-5.547 5.548-3.064 0-5.548-2.483-5.548-5.548 0-3.063 2.483-5.548 5.548-5.548 3.063 0 5.547 2.485 5.547 5.548z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M94.506 140.055c0 2.186-1.773 3.959-3.959 3.959-2.187 0-3.959-1.773-3.959-3.959 0-2.187 1.772-3.959 3.959-3.959 2.186 0 3.959 1.773 3.959 3.959zM87.628 134.321c0 1.592-1.292 2.882-2.883 2.882-1.593 0-2.882-1.29-2.882-2.882s1.289-2.882 2.882-2.882c1.591 0 2.883 1.29 2.883 2.882zM85.732 108.11c0 1.771-1.437 3.207-3.207 3.207-1.772 0-3.209-1.436-3.209-3.207s1.437-3.208 3.209-3.208c1.77 0 3.207 1.437 3.207 3.208zM104.848 143.919c0 2.702-2.191 4.894-4.895 4.894-2.702 0-4.893-2.191-4.893-4.894 0-2.703 2.19-4.894 4.893-4.894s4.895 2.191 4.895 4.894z"
              />
              <path
                fill="#00b800"
                d="M105.945 98.843c0 3.352-2.717 6.067-6.069 6.067s-6.068-2.716-6.068-6.067 2.717-6.068 6.068-6.068c3.353-.001 6.069 2.716 6.069 6.068z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M114.74 146.524c0 2.43-1.97 4.397-4.399 4.397-2.429 0-4.397-1.968-4.397-4.397 0-2.429 1.969-4.398 4.397-4.398 2.43 0 4.399 1.969 4.399 4.398z"
              />
              <path
                fill="#00b800"
                d="M124.371 105.656c0 3.769-3.055 6.823-6.823 6.823-3.767 0-6.822-3.055-6.822-6.823 0-3.768 3.056-6.823 6.822-6.823 3.768 0 6.823 3.055 6.823 6.823z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M125.42 141.911c0 2.867-2.326 5.192-5.192 5.192-2.869 0-5.192-2.325-5.192-5.192 0-2.868 2.323-5.191 5.192-5.191 2.866-.001 5.192 2.323 5.192 5.191z"
              />
              <path
                fill="#00b800"
                d="M127.782 114.008c0 1.624-1.318 2.939-2.941 2.939-1.624 0-2.938-1.315-2.938-2.939s1.314-2.94 2.938-2.94c1.623-.001 2.941 1.316 2.941 2.94zM141.751 124.722c0 2.907-2.358 5.266-5.267 5.266-2.907 0-5.266-2.358-5.266-5.266 0-2.909 2.358-5.267 5.266-5.267 2.909 0 5.267 2.357 5.267 5.267z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M90.437 100.51c0 1.131-.918 2.048-2.049 2.048-1.131 0-2.048-.917-2.048-2.048 0-1.132.917-2.049 2.048-2.049s2.049.918 2.049 2.049zM105.885 102.843c0 1.499-1.215 2.714-2.713 2.714-1.499 0-2.714-1.215-2.714-2.714 0-1.499 1.215-2.713 2.714-2.713 1.498 0 2.713 1.213 2.713 2.713z"
              />
              <path
                fill="#00b800"
                d="M134.147 116.799c0 1.553-1.258 2.811-2.811 2.811s-2.812-1.258-2.812-2.811c0-1.554 1.259-2.812 2.812-2.812s2.811 1.258 2.811 2.812z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M25.634 180.439c0 2.941-2.386 5.327-5.328 5.327-2.943 0-5.329-2.386-5.329-5.327 0-2.942 2.386-5.327 5.329-5.327 2.942 0 5.328 2.385 5.328 5.327zM28.996 152.409c0 1.955-1.583 3.54-3.538 3.54-1.955 0-3.539-1.585-3.539-3.54 0-1.954 1.584-3.539 3.539-3.539s3.538 1.585 3.538 3.539zM36.558 170.66c0 3.214-2.605 5.819-5.819 5.819s-5.817-2.605-5.817-5.819 2.604-5.819 5.817-5.819 5.819 2.605 5.819 5.819zM40.448 144.334c0 3.479-2.821 6.302-6.3 6.302-3.48 0-6.302-2.822-6.302-6.302 0-3.48 2.821-6.301 6.302-6.301 3.479 0 6.3 2.821 6.3 6.301zM40.573 131.401c0 2.828-2.293 5.121-5.12 5.121-2.828 0-5.122-2.293-5.122-5.121 0-2.829 2.294-5.121 5.122-5.121 2.827 0 5.12 2.292 5.12 5.121zM40.811 107.244c0 3.649-2.96 6.607-6.608 6.607-3.648 0-6.608-2.958-6.608-6.607s2.96-6.607 6.608-6.607c3.648 0 6.608 2.957 6.608 6.607zM28.536 160.694c0 1.828-1.482 3.309-3.31 3.309s-3.309-1.48-3.309-3.309c0-1.827 1.481-3.309 3.309-3.309s3.31 1.482 3.31 3.309zM30.097 135.979c0 2.087-1.692 3.777-3.779 3.777-2.087 0-3.777-1.69-3.777-3.777s1.69-3.778 3.777-3.778 3.779 1.691 3.779 3.778zM26.638 145.759c0 1.007-.815 1.822-1.821 1.822s-1.822-.815-1.822-1.822c0-1.006.816-1.821 1.822-1.821 1.006 0 1.821.815 1.821 1.821zM30.949 182.93c0 1.166-.946 2.112-2.113 2.112s-2.114-.946-2.114-2.112c0-1.168.947-2.115 2.114-2.115 1.167 0 2.113.947 2.113 2.115zM38.271 157.1c0 2.524-2.046 4.57-4.57 4.57-2.524 0-4.57-2.046-4.57-4.57 0-2.524 2.046-4.57 4.57-4.57 2.524 0 4.57 2.046 4.57 4.57z"
              />
              <path
                fill="#00b800"
                d="M49.599 102.671c0 2.018-1.636 3.653-3.653 3.653-2.017 0-3.653-1.636-3.653-3.653 0-2.017 1.636-3.653 3.653-3.653 2.017 0 3.653 1.636 3.653 3.653zM164.917 142.757c0 2.065-1.674 3.739-3.739 3.739-2.063 0-3.738-1.674-3.738-3.739 0-2.064 1.675-3.738 3.738-3.738 2.065 0 3.739 1.673 3.739 3.738zM156.476 144.96c0 1.094-.888 1.981-1.981 1.981s-1.981-.888-1.981-1.981.888-1.98 1.981-1.98 1.981.886 1.981 1.98zM168.637 125.611c0 3.023-2.452 5.475-5.476 5.475s-5.474-2.451-5.474-5.475c0-3.024 2.45-5.475 5.474-5.475s5.476 2.452 5.476 5.475z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M176.688 136.92c0 3.339-2.706 6.044-6.045 6.044s-6.044-2.705-6.044-6.044c0-3.339 2.705-6.045 6.044-6.045 3.339 0 6.045 2.706 6.045 6.045z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M179.885 120.581c0 3.722-3.016 6.737-6.735 6.737-3.721 0-6.736-3.016-6.736-6.737 0-3.719 3.016-6.736 6.736-6.736 3.72-.001 6.735 3.017 6.735 6.736z"
              />
              <path
                fill="#00b800"
                d="M173.542 114.046c0 2.515-2.037 4.554-4.553 4.554s-4.554-2.039-4.554-4.554 2.038-4.553 4.554-4.553c2.516 0 4.553 2.038 4.553 4.553zM177.714 103.242c0 2.986-2.421 5.406-5.407 5.406s-5.408-2.42-5.408-5.406c0-2.987 2.422-5.407 5.408-5.407s5.407 2.42 5.407 5.407zM182.245 112.306c0 2.083-1.689 3.771-3.772 3.771-2.082 0-3.771-1.688-3.771-3.771s1.689-3.771 3.771-3.771c2.082-.001 3.772 1.688 3.772 3.771zM188.032 104.204c0 2.471-2.003 4.476-4.475 4.476-2.473 0-4.478-2.005-4.478-4.476 0-2.474 2.005-4.477 4.478-4.477 2.472.001 4.475 2.003 4.475 4.477zM162.776 134.858c0 1.634-1.323 2.958-2.957 2.958s-2.959-1.324-2.959-2.958c0-1.634 1.325-2.958 2.959-2.958 1.634 0 2.957 1.325 2.957 2.958z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M153.328 135.699c0 1.288-1.045 2.332-2.334 2.332-1.288 0-2.333-1.044-2.333-2.332 0-1.289 1.045-2.334 2.333-2.334 1.289 0 2.334 1.045 2.334 2.334zM153.299 185.383c0 3.145-2.548 5.692-5.69 5.692-3.144 0-5.692-2.548-5.692-5.692 0-3.142 2.548-5.689 5.692-5.689 3.143-.001 5.69 2.547 5.69 5.689z"
              />
              <path
                fill="#00b800"
                d="M159.284 166.283c0 3.031-2.457 5.488-5.488 5.488-3.031 0-5.49-2.457-5.49-5.488 0-3.031 2.458-5.489 5.49-5.489s5.488 2.458 5.488 5.489zM165.448 189.979c0 2.041-1.654 3.695-3.696 3.695-2.041 0-3.695-1.654-3.695-3.695 0-2.04 1.654-3.695 3.695-3.695s3.696 1.655 3.696 3.695zM163.383 180.559c0 2.46-1.993 4.455-4.453 4.455-2.459 0-4.453-1.995-4.453-4.455 0-2.458 1.994-4.452 4.453-4.452 2.46-.001 4.453 1.994 4.453 4.452z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M165.778 167.599c0 2.673-2.167 4.84-4.839 4.84-2.674 0-4.84-2.167-4.84-4.84s2.166-4.839 4.84-4.839c2.672 0 4.839 2.167 4.839 4.839zM165.543 149.129c0 2.808-2.274 5.083-5.082 5.083s-5.085-2.275-5.085-5.083c0-2.808 2.277-5.084 5.085-5.084s5.082 2.276 5.082 5.084zM173.075 179.851c0 3.267-2.648 5.917-5.916 5.917-3.269 0-5.917-2.65-5.917-5.917 0-3.268 2.648-5.916 5.917-5.916 3.267 0 5.916 2.649 5.916 5.916zM175.491 169.113c0 2.35-1.904 4.254-4.254 4.254-2.349 0-4.253-1.904-4.253-4.254 0-2.349 1.904-4.253 4.253-4.253 2.35 0 4.254 1.904 4.254 4.253zM172.845 157.911c0 2.765-2.24 5.006-5.005 5.006-2.764 0-5.005-2.241-5.005-5.006s2.241-5.005 5.005-5.005c2.765 0 5.005 2.24 5.005 5.005zM177.112 147.219c0 2.838-2.301 5.14-5.139 5.14-2.84 0-5.142-2.302-5.142-5.14 0-2.84 2.302-5.141 5.142-5.141 2.838.001 5.139 2.302 5.139 5.141zM183.908 161.396c0 2.842-2.302 5.144-5.144 5.144-2.841 0-5.143-2.302-5.143-5.144 0-2.841 2.302-5.143 5.143-5.143 2.842.001 5.144 2.302 5.144 5.143zM185.486 152.183c0 1.85-1.498 3.35-3.35 3.35-1.851 0-3.35-1.5-3.35-3.35 0-1.851 1.499-3.351 3.35-3.351 1.852.001 3.35 1.501 3.35 3.351zM188.491 142.343c0 2.837-2.301 5.137-5.138 5.137-2.837 0-5.138-2.3-5.138-5.137 0-2.838 2.301-5.137 5.138-5.137 2.837 0 5.138 2.299 5.138 5.137zM183.007 132.68c0 2.342-1.898 4.24-4.239 4.24-2.342 0-4.24-1.898-4.24-4.24 0-2.342 1.898-4.239 4.24-4.239 2.341 0 4.239 1.898 4.239 4.239zM193.878 114.567c0 3.848-3.118 6.966-6.965 6.966-3.848 0-6.966-3.118-6.966-6.966 0-3.847 3.118-6.965 6.966-6.965 3.847 0 6.965 3.118 6.965 6.965zM197.893 146.835c0 2.411-1.954 4.365-4.365 4.365-2.411 0-4.365-1.954-4.365-4.365 0-2.411 1.954-4.365 4.365-4.365 2.411 0 4.365 1.954 4.365 4.365zM196.648 131.968c0 3.392-2.748 6.142-6.14 6.142-3.392 0-6.142-2.75-6.142-6.142 0-3.391 2.75-6.14 6.142-6.14 3.392 0 6.14 2.75 6.14 6.14zM200.101 122.323c0 2.095-1.698 3.793-3.793 3.793s-3.793-1.698-3.793-3.793 1.698-3.791 3.793-3.791 3.793 1.696 3.793 3.791z"
              />
              <path
                fill="#00b800"
                d="M199.306 103.866c0 2.713-2.198 4.91-4.911 4.91-2.711 0-4.909-2.197-4.909-4.91 0-2.712 2.198-4.909 4.909-4.909 2.713 0 4.911 2.197 4.911 4.909z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M209.196 155.479c0 3.725-3.019 6.743-6.743 6.743s-6.741-3.019-6.741-6.743 3.018-6.742 6.741-6.742c3.724 0 6.743 3.019 6.743 6.742zM209.991 142.093c0 3.028-2.454 5.483-5.483 5.483-3.027 0-5.482-2.455-5.482-5.483 0-3.027 2.455-5.482 5.482-5.482 3.029 0 5.483 2.455 5.483 5.482zM198.083 139.553c0 1.09-.883 1.973-1.973 1.973-1.089 0-1.971-.883-1.971-1.973 0-1.089.882-1.971 1.971-1.971 1.09.001 1.973.883 1.973 1.971zM211.55 120.741c0 2.833-2.295 5.128-5.127 5.128-2.833 0-5.129-2.295-5.129-5.128 0-2.832 2.296-5.127 5.129-5.127 2.832 0 5.127 2.295 5.127 5.127z"
              />
              <path
                fill="#00b800"
                d="M222.591 169.254c0 3.202-2.597 5.799-5.797 5.799-3.203 0-5.798-2.597-5.798-5.799 0-3.201 2.595-5.798 5.798-5.798 3.201 0 5.797 2.597 5.797 5.798zM225.854 156.478c0 3.323-2.694 6.019-6.019 6.019s-6.019-2.695-6.019-6.019c0-3.325 2.694-6.019 6.019-6.019s6.019 2.693 6.019 6.019zM224.049 145.204c0 2.123-1.721 3.845-3.845 3.845-2.123 0-3.844-1.722-3.844-3.845s1.721-3.845 3.844-3.845c2.125 0 3.845 1.722 3.845 3.845z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M215.377 134.208c0 2.09-1.695 3.784-3.785 3.784-2.091 0-3.785-1.694-3.785-3.784 0-2.091 1.694-3.785 3.785-3.785 2.089 0 3.785 1.694 3.785 3.785zM225.718 174.157c0 2.39-1.935 4.325-4.324 4.325s-4.324-1.936-4.324-4.325c0-2.388 1.936-4.324 4.324-4.324 2.39 0 4.324 1.936 4.324 4.324zM237.324 157.341c0 3.945-3.198 7.143-7.142 7.143-3.945 0-7.143-3.197-7.143-7.143 0-3.944 3.197-7.142 7.143-7.142 3.944 0 7.142 3.197 7.142 7.142zM236.797 138.009c0 4.26-3.452 7.713-7.712 7.713s-7.713-3.453-7.713-7.713c0-4.259 3.453-7.712 7.713-7.712s7.712 3.453 7.712 7.712zM237.519 181.193c0 3.513-2.846 6.356-6.355 6.356-3.509 0-6.355-2.844-6.355-6.356 0-3.508 2.846-6.354 6.355-6.354 3.509 0 6.355 2.846 6.355 6.354zM238.912 169.497c0 2.45-1.984 4.434-4.434 4.434-2.448 0-4.434-1.983-4.434-4.434 0-2.448 1.985-4.434 4.434-4.434s4.434 1.986 4.434 4.434zM238.36 147.642c0 1.438-1.167 2.604-2.605 2.604s-2.604-1.166-2.604-2.604c0-1.438 1.166-2.604 2.604-2.604 1.438 0 2.605 1.166 2.605 2.604zM242.302 129.217c0 2.089-1.693 3.781-3.782 3.781s-3.781-1.692-3.781-3.781c0-2.088 1.692-3.781 3.781-3.781 2.089 0 3.782 1.693 3.782 3.781z"
              />
              <path
                fill="#00b800"
                d="M245.105 111.916c0 2.988-2.423 5.411-5.412 5.411-2.99 0-5.411-2.423-5.411-5.411 0-2.989 2.421-5.412 5.411-5.412 2.989 0 5.412 2.423 5.412 5.412zM243.817 102.297c0 1.576-1.278 2.855-2.855 2.855-1.576 0-2.854-1.279-2.854-2.855 0-1.577 1.277-2.854 2.854-2.854 1.577-.001 2.855 1.277 2.855 2.854z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M250.392 178.368c0 3.273-2.653 5.926-5.926 5.926s-5.925-2.652-5.925-5.926 2.652-5.926 5.925-5.926c3.273 0 5.926 2.652 5.926 5.926zM249.639 165.964c0 2.72-2.205 4.927-4.928 4.927-2.72 0-4.925-2.207-4.925-4.927 0-2.721 2.205-4.928 4.925-4.928 2.723 0 4.928 2.207 4.928 4.928zM254.481 153.15c0 3.779-3.063 6.844-6.844 6.844-3.777 0-6.842-3.064-6.842-6.844 0-3.778 3.064-6.842 6.842-6.842 3.781 0 6.844 3.064 6.844 6.842zM245.837 142.36c0 2.251-1.826 4.075-4.077 4.075-2.252 0-4.076-1.824-4.076-4.075 0-2.252 1.824-4.078 4.076-4.078 2.251 0 4.077 1.826 4.077 4.078zM251.988 126.551c0 2.4-1.945 4.346-4.346 4.346s-4.346-1.945-4.346-4.346 1.945-4.346 4.346-4.346 4.346 1.946 4.346 4.346zM254.482 114.359c0 3.571-2.896 6.468-6.468 6.468s-6.468-2.896-6.468-6.468 2.896-6.467 6.468-6.467 6.468 2.896 6.468 6.467zM262.315 178.184c0 2.886-2.339 5.225-5.226 5.225-2.888 0-5.229-2.339-5.229-5.225 0-2.888 2.341-5.228 5.229-5.228 2.887.001 5.226 2.341 5.226 5.228zM261.582 164.318c0 2.967-2.403 5.372-5.37 5.372s-5.372-2.405-5.372-5.372 2.405-5.371 5.372-5.371 5.37 2.404 5.37 5.371zM265.479 150.089c0 2.739-2.221 4.96-4.96 4.96-2.74 0-4.961-2.221-4.961-4.96s2.221-4.96 4.961-4.96c2.739 0 4.96 2.22 4.96 4.96zM258.767 140.855c0 2.984-2.419 5.403-5.403 5.403-2.983 0-5.402-2.419-5.402-5.403 0-2.983 2.419-5.402 5.402-5.402 2.984 0 5.403 2.419 5.403 5.402zM259.325 130.922c0 1.94-1.572 3.511-3.513 3.511-1.938 0-3.511-1.57-3.511-3.511 0-1.938 1.572-3.511 3.511-3.511 1.941 0 3.513 1.572 3.513 3.511zM263.737 121.52c0 2.769-2.245 5.013-5.014 5.013-2.768 0-5.013-2.244-5.013-5.013 0-2.768 2.245-5.013 5.013-5.013 2.769.001 5.014 2.246 5.014 5.013zM255.492 104.775c0 1.565-1.27 2.836-2.835 2.836-1.566 0-2.836-1.271-2.836-2.836s1.27-2.836 2.836-2.836c1.565 0 2.835 1.271 2.835 2.836zM263.81 100.053c0 2.335-1.894 4.228-4.228 4.228-2.337 0-4.229-1.893-4.229-4.228s1.893-4.229 4.229-4.229c2.335 0 4.228 1.894 4.228 4.229zM268.556 132.214c0 2.204-1.787 3.989-3.989 3.989-2.204 0-3.99-1.785-3.99-3.989 0-2.204 1.786-3.99 3.99-3.99 2.202-.001 3.989 1.786 3.989 3.99zM263.8 110.043c0 2.428-1.969 4.395-4.396 4.395-2.429 0-4.396-1.967-4.396-4.395 0-2.428 1.968-4.396 4.396-4.396 2.428-.001 4.396 1.968 4.396 4.396z"
              />
              <path
                fill="#00b800"
                d="M155.263 175.078c0 1.107-.896 2.006-2.005 2.006-1.107 0-2.004-.898-2.004-2.006 0-1.106.896-2.005 2.004-2.005 1.109 0 2.005.899 2.005 2.005z"
                color="#000"
                enableBackground="accumulate"
                overflow="visible"
                style={{ marker: "none" }}
                transform="translate(-3.455 -3.511)"
              />
              <path
                fill="red"
                d="M161.47 158.221c0 1.513-1.226 2.738-2.739 2.738s-2.739-1.226-2.739-2.738c0-1.514 1.227-2.739 2.739-2.739 1.514 0 2.739 1.226 2.739 2.739zM176.702 139.156c0 1.128-.914 2.042-2.042 2.042-1.127 0-2.041-.914-2.041-2.042 0-1.127.914-2.041 2.041-2.041 1.128 0 2.042.914 2.042 2.041zM179.863 181.791c0 1.559-1.267 2.822-2.825 2.822-1.56 0-2.826-1.264-2.826-2.822 0-1.562 1.267-2.826 2.826-2.826 1.558 0 2.825 1.263 2.825 2.826zM185.832 124.964c0 1.521-1.234 2.754-2.755 2.754s-2.755-1.233-2.755-2.754c0-1.522 1.234-2.755 2.755-2.755s2.755 1.232 2.755 2.755zM206.966 130.968c0 2.494-2.021 4.514-4.514 4.514-2.493 0-4.514-2.02-4.514-4.514 0-2.492 2.021-4.512 4.514-4.512 2.493 0 4.514 2.019 4.514 4.512zM226.004 166.093c0 1.45-1.176 2.626-2.627 2.626-1.449 0-2.625-1.176-2.625-2.626s1.176-2.626 2.625-2.626c1.452 0 2.627 1.175 2.627 2.626zM226.656 148.228c0 1.163-.943 2.107-2.107 2.107-1.164 0-2.106-.944-2.106-2.107 0-1.165.942-2.107 2.106-2.107s2.107.942 2.107 2.107zM243.518 121.831c0 1.294-1.049 2.343-2.344 2.343-1.294 0-2.343-1.049-2.343-2.343 0-1.295 1.049-2.345 2.343-2.345 1.295 0 2.344 1.05 2.344 2.345zM248.318 134.827c0 1.605-1.301 2.907-2.906 2.907-1.605 0-2.908-1.302-2.908-2.907 0-1.606 1.303-2.907 2.908-2.907s2.906 1.3 2.906 2.907zM246.546 105.177c0 1.131-.916 2.047-2.046 2.047-1.132 0-2.048-.916-2.048-2.047 0-1.131.916-2.047 2.048-2.047 1.13 0 2.046.916 2.046 2.047zM253.417 171.707c0 1.211-.98 2.191-2.189 2.191-1.211 0-2.191-.98-2.191-2.191 0-1.209.98-2.19 2.191-2.19 1.208-.001 2.189.981 2.189 2.19zM271.93 100.395c0 1.881-1.524 3.404-3.404 3.404s-3.404-1.523-3.404-3.404c0-1.88 1.524-3.404 3.404-3.404s3.404 1.524 3.404 3.404zM266.144 115.713c0 .978-.793 1.771-1.771 1.771-.979 0-1.771-.794-1.771-1.771 0-.979.792-1.771 1.771-1.771.978-.001 1.771.791 1.771 1.771z"
              />
              <g
                filter="url(#F)"
                opacity=".45033115"
                transform="translate(10 10)"
              >
                <path
                  fill="#e0e0e0"
                  d="M72.117 199.208c0 2.37-1.921 4.29-4.291 4.29-2.369 0-4.29-1.92-4.29-4.29 0-2.369 1.921-4.289 4.29-4.289 2.37 0 4.291 1.92 4.291 4.289z"
                />
                <path
                  fill="#444"
                  d="M70.834 190.49c0 1.67-1.353 3.023-3.021 3.023-1.67 0-3.023-1.354-3.023-3.023s1.354-3.023 3.023-3.023 3.021 1.353 3.021 3.023z"
                />
                <path
                  fill="#929292"
                  d="M81.118 77.517c0 3.054-2.475 5.527-5.527 5.527s-5.528-2.474-5.528-5.527 2.476-5.526 5.528-5.526c3.052 0 5.527 2.474 5.527 5.526z"
                />
                <path
                  fill="#9a9a9a"
                  d="M70.937 67.568c0 1.867-1.513 3.38-3.378 3.38-1.868 0-3.382-1.513-3.382-3.38 0-1.866 1.514-3.38 3.382-3.38 1.865 0 3.378 1.514 3.378 3.38z"
                />
                <path
                  fill="#747474"
                  d="M69.864 57.999c0 2.951-2.394 5.343-5.345 5.343-2.951 0-5.344-2.392-5.344-5.343s2.393-5.345 5.344-5.345c2.951 0 5.345 2.394 5.345 5.345z"
                />
                <path
                  fill="#d9d9d9"
                  d="M83.494 195.263c0 2.959-2.398 5.357-5.356 5.357-2.959 0-5.357-2.398-5.357-5.357s2.398-5.357 5.357-5.357c2.958 0 5.356 2.398 5.356 5.357z"
                />
                <path
                  fill="#eee"
                  d="M90.676 163.68c0 4.165-3.376 7.541-7.54 7.541-4.165 0-7.541-3.376-7.541-7.541 0-4.164 3.376-7.539 7.541-7.539 4.164 0 7.54 3.375 7.54 7.539z"
                />
                <path
                  fill="#ebebeb"
                  d="M79.192 67.141c0 1.901-1.542 3.443-3.443 3.443-1.9 0-3.441-1.542-3.441-3.443 0-1.9 1.541-3.441 3.441-3.441 1.901 0 3.443 1.541 3.443 3.441z"
                />
                <path
                  fill="#d4d4d4"
                  d="M82.67 56.373c0 3.202-2.596 5.797-5.798 5.797s-5.796-2.595-5.796-5.797c0-3.201 2.594-5.797 5.796-5.797 3.202 0 5.798 2.596 5.798 5.797z"
                />
                <path
                  fill="#e8e8e8"
                  d="M92.377 195.495c0 2.09-1.691 3.78-3.78 3.78-2.087 0-3.779-1.69-3.779-3.78 0-2.087 1.692-3.78 3.779-3.78 2.089 0 3.78 1.693 3.78 3.78z"
                />
                <path
                  fill="#717171"
                  d="M103.508 187.59c0 3.574-2.896 6.47-6.468 6.47s-6.468-2.896-6.468-6.47c0-3.571 2.896-6.466 6.468-6.466 3.571 0 6.468 2.894 6.468 6.466z"
                />
                <path
                  fill="#1d1d1d"
                  d="M103.606 154.219c0 2.892-2.346 5.236-5.238 5.236-2.892 0-5.236-2.345-5.236-5.236 0-2.893 2.345-5.238 5.236-5.238 2.892 0 5.238 2.346 5.238 5.238z"
                />
                <path
                  fill="#020202"
                  d="M93.532 65.817c0 3.618-2.934 6.551-6.551 6.551s-6.549-2.933-6.549-6.551c0-3.618 2.932-6.55 6.549-6.55 3.617 0 6.551 2.932 6.551 6.55z"
                />
                <path
                  fill="#080808"
                  d="M97.068 50.923c0 3.898-3.16 7.06-7.06 7.06-3.9 0-7.06-3.161-7.06-7.06 0-3.9 3.159-7.062 7.06-7.062 3.9 0 7.06 3.161 7.06 7.062z"
                />
                <path
                  fill="#aaa"
                  d="M88.259 41.222c0 1.115-.904 2.021-2.021 2.021-1.115 0-2.02-.905-2.02-2.021 0-1.116.904-2.02 2.02-2.02 1.117.001 2.021.905 2.021 2.02z"
                />
                <path
                  fill="#7f7f7f"
                  d="M101.818 38.807c0 2.951-2.394 5.345-5.345 5.345-2.953 0-5.346-2.394-5.346-5.345 0-2.953 2.393-5.345 5.346-5.345 2.952.001 5.345 2.392 5.345 5.345z"
                />
                <path
                  fill="#0b0b0b"
                  d="M105.785 201.257c0 3.351-2.718 6.067-6.069 6.067-3.353 0-6.07-2.717-6.07-6.067 0-3.354 2.718-6.07 6.07-6.07 3.351-.001 6.069 2.716 6.069 6.07z"
                />
                <path
                  fill="#616161"
                  d="M112.79 190.534c0 2.301-1.865 4.166-4.166 4.166s-4.167-1.865-4.167-4.166 1.866-4.166 4.167-4.166c2.301 0 4.166 1.865 4.166 4.166z"
                />
                <path
                  fill="#f7f7f7"
                  d="M107.205 176.415c0 2.519-2.04 4.56-4.557 4.56-2.519 0-4.559-2.041-4.559-4.56 0-2.517 2.04-4.558 4.559-4.558 2.517 0 4.557 2.041 4.557 4.558z"
                />
                <path
                  fill="#ededed"
                  d="M107.743 145.423c0 2.12-1.718 3.839-3.838 3.839s-3.84-1.719-3.84-3.839c0-2.119 1.72-3.838 3.84-3.838s3.838 1.718 3.838 3.838z"
                />
                <path
                  fill="#d9d9d9"
                  d="M106.833 61.246c0 3.464-2.807 6.271-6.271 6.271s-6.271-2.808-6.271-6.271 2.807-6.271 6.271-6.271 6.271 2.807 6.271 6.271z"
                />
                <path
                  fill="#c5c5c5"
                  d="M110.229 48.476c0 3.184-2.581 5.764-5.764 5.764-3.185 0-5.766-2.58-5.766-5.764 0-3.183 2.581-5.764 5.766-5.764 3.183.001 5.764 2.582 5.764 5.764z"
                />
                <path
                  fill="#040404"
                  d="M121.581 201.858c0 2.771-2.247 5.019-5.021 5.019-2.771 0-5.02-2.247-5.02-5.019 0-2.773 2.248-5.02 5.02-5.02 2.774.001 5.021 2.247 5.021 5.02z"
                />
                <path
                  fill="#f5f5f5"
                  d="M122.939 191.305c0 2.422-1.963 4.385-4.385 4.385-2.422 0-4.384-1.963-4.384-4.385 0-2.424 1.962-4.385 4.384-4.385 2.422 0 4.385 1.962 4.385 4.385z"
                />
                <path
                  fill="#1d1d1d"
                  d="M116.823 180.956c0 2.576-2.087 4.663-4.663 4.663-2.577 0-4.665-2.087-4.665-4.663 0-2.575 2.088-4.665 4.665-4.665 2.576 0 4.663 2.09 4.663 4.665z"
                />
                <path
                  fill="#434343"
                  d="M117.598 170.2c0 2.648-2.146 4.794-4.794 4.794-2.648 0-4.794-2.146-4.794-4.794 0-2.646 2.146-4.792 4.794-4.792 2.647 0 4.794 2.145 4.794 4.792z"
                />
                <path
                  fill="#999"
                  d="M121.223 56.552c0 3.397-2.753 6.151-6.149 6.151-3.398 0-6.152-2.754-6.152-6.151 0-3.396 2.754-6.151 6.152-6.151 3.396 0 6.149 2.755 6.149 6.151z"
                />
                <path
                  fill="#454545"
                  d="M116.962 41.344c0 2.213-1.794 4.008-4.007 4.008-2.213 0-4.007-1.795-4.007-4.008s1.794-4.006 4.007-4.006c2.213 0 4.007 1.794 4.007 4.006z"
                />
                <path
                  fill="#161616"
                  d="M123.409 33.478c0 2.497-2.025 4.522-4.522 4.522-2.499 0-4.524-2.025-4.524-4.522 0-2.498 2.025-4.523 4.524-4.523 2.497 0 4.522 2.025 4.522 4.523z"
                />
                <path
                  fill="#494949"
                  d="M127.613 201.205c0 1.305-1.058 2.362-2.363 2.362s-2.362-1.058-2.362-2.362 1.058-2.362 2.362-2.362c1.306 0 2.363 1.057 2.363 2.362z"
                />
                <path
                  fill="#313131"
                  d="M136.124 186.27c0 3.579-2.899 6.479-6.479 6.479-3.578 0-6.479-2.9-6.479-6.479 0-3.58 2.901-6.479 6.479-6.479 3.58 0 6.479 2.899 6.479 6.479z"
                />
                <path
                  fill="#b4b4b4"
                  d="M126.333 163.643c0 2.441-1.979 4.42-4.42 4.42-2.439 0-4.419-1.979-4.419-4.42 0-2.44 1.979-4.419 4.419-4.419 2.442 0 4.42 1.979 4.42 4.419z"
                />
                <path
                  fill="#dbdbdb"
                  d="M133.598 154.022c0 3.061-2.48 5.542-5.543 5.542-3.06 0-5.541-2.481-5.541-5.542s2.481-5.541 5.541-5.541c3.062 0 5.543 2.481 5.543 5.541z"
                />
                <path
                  fill="#686868"
                  d="M131.328 143.481c0 2.038-1.652 3.689-3.69 3.689-2.038 0-3.689-1.651-3.689-3.689 0-2.039 1.651-3.691 3.689-3.691 2.038 0 3.69 1.652 3.69 3.691z"
                />
                <path
                  fill="#424242"
                  d="M127.242 134.799c0 3-2.431 5.43-5.43 5.43-2.999 0-5.43-2.43-5.43-5.43 0-2.999 2.431-5.429 5.43-5.429 2.999 0 5.43 2.43 5.43 5.429z"
                />
                <path
                  fill="#666"
                  d="M129.18 50.37c0 2.322-1.882 4.205-4.205 4.205-2.323 0-4.204-1.883-4.204-4.205 0-2.323 1.881-4.205 4.204-4.205 2.323 0 4.205 1.882 4.205 4.205z"
                />
                <path
                  fill="#777"
                  d="M126.795 41.587c0 1.863-1.51 3.373-3.373 3.373-1.863 0-3.374-1.51-3.374-3.373 0-1.863 1.511-3.374 3.374-3.374 1.863 0 3.373 1.51 3.373 3.374z"
                />
                <path
                  fill="#6d6d6d"
                  d="M140.775 204.283c0 2.997-2.431 5.429-5.43 5.429-2.999 0-5.431-2.432-5.431-5.429 0-3.001 2.432-5.43 5.431-5.43s5.43 2.429 5.43 5.43z"
                />
                <path
                  fill="#909090"
                  d="M132.37 196.754c0 1.456-1.181 2.637-2.638 2.637-1.456 0-2.636-1.181-2.636-2.637 0-1.457 1.18-2.638 2.636-2.638 1.458 0 2.638 1.181 2.638 2.638z"
                />
                <path
                  fill="#878787"
                  d="M143.958 140.294c0 3.244-2.628 5.874-5.872 5.874-3.244 0-5.873-2.63-5.873-5.874 0-3.243 2.629-5.872 5.873-5.872s5.872 2.629 5.872 5.872z"
                />
                <path
                  fill="#fdfdfd"
                  d="M138.037 129.087c0 2.748-2.229 4.977-4.977 4.977s-4.977-2.229-4.977-4.977 2.229-4.977 4.977-4.977 4.977 2.229 4.977 4.977z"
                />
                <path
                  fill="#686868"
                  d="M143.418 115.92c0 3.985-3.232 7.218-7.218 7.218-3.986 0-7.217-3.232-7.217-7.218 0-3.986 3.23-7.217 7.217-7.217 3.985 0 7.218 3.23 7.218 7.217z"
                />
                <path
                  fill="#989898"
                  d="M140.693 52.602c0 2.832-2.296 5.127-5.129 5.127-2.832 0-5.128-2.295-5.128-5.127 0-2.833 2.296-5.128 5.128-5.128 2.833 0 5.129 2.295 5.129 5.128z"
                />
                <path
                  fill="#cecece"
                  d="M150.618 39.496c0 4.547-3.688 8.234-8.234 8.234-4.549 0-8.235-3.688-8.235-8.234 0-4.548 3.686-8.234 8.235-8.234 4.546-.001 8.234 3.686 8.234 8.234z"
                />
                <path
                  fill="#525252"
                  d="M134.092 33.641c0 2.572-2.084 4.658-4.657 4.658s-4.658-2.086-4.658-4.658c0-2.573 2.085-4.658 4.658-4.658 2.573 0 4.657 2.085 4.657 4.658z"
                />
                <path
                  fill="#d4d4d4"
                  d="M159.218 199.692c0 2.606-2.112 4.719-4.718 4.719s-4.72-2.112-4.72-4.719 2.113-4.72 4.72-4.72c2.606 0 4.718 2.114 4.718 4.72z"
                />
                <path
                  fill="#5e5e5e"
                  d="M150.253 192.95c0 3.878-3.145 7.022-7.022 7.022-3.88 0-7.023-3.145-7.023-7.022 0-3.877 3.143-7.022 7.023-7.022 3.877-.001 7.022 3.144 7.022 7.022z"
                />
                <path
                  fill="#121212"
                  d="M150.367 58.053c0 2.678-2.171 4.849-4.848 4.849-2.678 0-4.85-2.171-4.85-4.849 0-2.677 2.172-4.848 4.85-4.848 2.677.001 4.848 2.172 4.848 4.848z"
                />
                <path
                  fill="#cfcfcf"
                  d="M157.472 48.205c0 2.38-1.929 4.309-4.308 4.309-2.38 0-4.31-1.929-4.31-4.309 0-2.379 1.93-4.308 4.31-4.308s4.308 1.929 4.308 4.308z"
                />
                <path
                  fill="#dadada"
                  d="M171.8 183.403c0 4.315-3.498 7.812-7.812 7.812-4.315 0-7.812-3.497-7.812-7.812s3.497-7.812 7.812-7.812c4.314.001 7.812 3.497 7.812 7.812z"
                />
                <path
                  fill="#3a3a3a"
                  d="M154.871 184.479c0 1.904-1.542 3.448-3.445 3.448-1.904 0-3.446-1.544-3.446-3.448 0-1.902 1.542-3.445 3.446-3.445 1.903 0 3.445 1.543 3.445 3.445z"
                />
                <path
                  fill="#3b3b3b"
                  d="M167.305 77.56c0 3.173-2.571 5.743-5.744 5.743-3.173 0-5.743-2.57-5.743-5.743 0-3.172 2.57-5.743 5.743-5.743 3.173 0 5.744 2.571 5.744 5.743z"
                />
                <path
                  fill="#696969"
                  d="M162.287 67.366c0 1.937-1.569 3.505-3.504 3.505-1.936 0-3.505-1.568-3.505-3.505 0-1.935 1.569-3.503 3.505-3.503 1.934 0 3.504 1.568 3.504 3.503z"
                />
                <path
                  fill="#3b3b3b"
                  d="M161.348 58.009c0 2.628-2.131 4.758-4.759 4.758-2.629 0-4.759-2.13-4.759-4.758s2.13-4.759 4.759-4.759c2.628 0 4.759 2.131 4.759 4.759z"
                />
                <path
                  fill="#020202"
                  d="M166.723 50.471c0 2.089-1.693 3.782-3.781 3.782s-3.781-1.693-3.781-3.782c0-2.088 1.693-3.781 3.781-3.781s3.781 1.694 3.781 3.781z"
                />
                <path
                  fill="#c9c9c9"
                  d="M175.765 198.817c0 3.389-2.748 6.135-6.137 6.135-3.389 0-6.136-2.746-6.136-6.135s2.747-6.138 6.136-6.138c3.389 0 6.137 2.749 6.137 6.138z"
                />
                <path
                  fill="#eaeaea"
                  d="M163.227 194.422c0 1.238-1.002 2.241-2.239 2.241-1.238 0-2.241-1.003-2.241-2.241 0-1.234 1.003-2.238 2.241-2.238 1.237-.001 2.239 1.003 2.239 2.238z"
                />
                <path
                  fill="#383838"
                  d="M173.192 82.088c0 1.555-1.261 2.815-2.814 2.815-1.556 0-2.816-1.261-2.816-2.815 0-1.556 1.261-2.814 2.816-2.814 1.553-.001 2.814 1.258 2.814 2.814z"
                />
                <path
                  fill="#c4c4c4"
                  d="M177.59 67.155c0 3.739-3.031 6.771-6.771 6.771-3.74 0-6.769-3.031-6.769-6.771 0-3.737 3.029-6.769 6.769-6.769s6.771 3.032 6.771 6.769z"
                />
                <path
                  fill="#898989"
                  d="M170.714 56.63c0 1.552-1.259 2.809-2.811 2.809-1.551 0-2.81-1.257-2.81-2.809 0-1.552 1.259-2.81 2.81-2.81 1.553 0 2.811 1.258 2.811 2.81z"
                />
                <path
                  fill="#e4e4e4"
                  d="M190.621 200.616c0 3.77-3.055 6.826-6.825 6.826-3.771 0-6.827-3.057-6.827-6.826 0-3.771 3.056-6.827 6.827-6.827 3.77 0 6.825 3.056 6.825 6.827z"
                />
                <path
                  fill="#2e2e2e"
                  d="M183.387 188.231c0 3.062-2.483 5.545-5.544 5.545-3.062 0-5.544-2.483-5.544-5.545s2.481-5.543 5.544-5.543c3.061 0 5.544 2.481 5.544 5.543z"
                />
                <path
                  fill="#191919"
                  d="M191.32 180.717c0 2.453-1.988 4.439-4.44 4.439-2.452 0-4.441-1.986-4.441-4.439 0-2.454 1.989-4.441 4.441-4.441s4.44 1.986 4.44 4.441z"
                />
                <path
                  fill="#262626"
                  d="M199.757 192.714c0 2.861-2.318 5.183-5.181 5.183s-5.181-2.321-5.181-5.183c0-2.862 2.318-5.181 5.181-5.181s5.181 2.319 5.181 5.181z"
                />
                <path
                  fill="#5c5c5c"
                  d="M201.874 181.887c0 2.568-2.081 4.647-4.646 4.647-2.566 0-4.646-2.079-4.646-4.647 0-2.565 2.08-4.645 4.646-4.645 2.565.001 4.646 2.08 4.646 4.645z"
                />
                <path
                  fill="#7d7d7d"
                  d="M210.109 173.01c0 3.054-2.477 5.529-5.532 5.529s-5.53-2.476-5.53-5.529c0-3.055 2.476-5.531 5.53-5.531 3.055 0 5.532 2.477 5.532 5.531z"
                />
                <path
                  fill="#1e1e1e"
                  d="M73.124 184.185c0 1.405-1.14 2.545-2.545 2.545-1.406 0-2.545-1.14-2.545-2.545 0-1.404 1.139-2.545 2.545-2.545 1.405 0 2.545 1.141 2.545 2.545z"
                />
                <path
                  fill="#999"
                  d="M111.023 198.158c0 1.184-.96 2.144-2.145 2.144s-2.145-.96-2.145-2.144c0-1.184.96-2.144 2.145-2.144s2.145.96 2.145 2.144z"
                />
                <path
                  fill="#040404"
                  d="M120.066 47.12c0 1.233-1.001 2.234-2.234 2.234s-2.233-1.001-2.233-2.234 1-2.233 2.233-2.233 2.234.999 2.234 2.233z"
                />
                <path
                  fill="#757575"
                  d="M133.675 44.076c0 1.647-1.336 2.981-2.982 2.981-1.646 0-2.979-1.334-2.979-2.981 0-1.646 1.334-2.98 2.979-2.98 1.646-.001 2.982 1.334 2.982 2.98z"
                />
                <path
                  fill="#626262"
                  d="M157.648 191.038c0 1.454-1.179 2.633-2.633 2.633-1.455 0-2.635-1.179-2.635-2.633 0-1.456 1.18-2.635 2.635-2.635 1.454 0 2.633 1.179 2.633 2.635z"
                />
                <path
                  fill="#e9e9e9"
                  d="M189.105 188.625c0 1.188-.964 2.151-2.151 2.151-1.188 0-2.151-.963-2.151-2.151 0-1.189.963-2.151 2.151-2.151 1.187-.001 2.151.961 2.151 2.151z"
                />
                <path
                  fill="#070707"
                  d="M11.91 133.383c0 3.29-2.667 5.956-5.956 5.956-3.288 0-5.954-2.666-5.954-5.956 0-3.289 2.666-5.954 5.954-5.954 3.29-.001 5.956 2.664 5.956 5.954z"
                />
                <path
                  fill="#c1c1c1"
                  d="M26.734 184.593c0 4.547-3.685 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.55 3.688-8.234 8.234-8.234 4.55-.001 8.234 3.684 8.234 8.234z"
                />
                <path
                  fill="#939393"
                  d="M11.186 146.029c0 2.923-2.371 5.291-5.292 5.291-2.923 0-5.293-2.368-5.293-5.291 0-2.924 2.37-5.294 5.293-5.294 2.921 0 5.292 2.37 5.292 5.294z"
                />
                <path
                  fill="#010101"
                  d="M12.83 120.201c0 3.282-2.66 5.943-5.942 5.943-3.283 0-5.943-2.661-5.943-5.943 0-3.28 2.661-5.941 5.943-5.941 3.282 0 5.942 2.661 5.942 5.941z"
                />
                <path
                  fill="#4f4f4f"
                  d="M23.513 111.681c0 3.425-2.776 6.202-6.201 6.202-3.427 0-6.204-2.777-6.204-6.202s2.777-6.203 6.204-6.203c3.424 0 6.201 2.779 6.201 6.203z"
                />
                <path
                  fill="#181818"
                  d="M16.565 100.051c0 3.231-2.619 5.852-5.852 5.852-3.232 0-5.852-2.62-5.852-5.852s2.62-5.854 5.852-5.854 5.852 2.621 5.852 5.854z"
                />
                <path
                  fill="#474747"
                  d="M15.634 89.147c0 2.05-1.66 3.711-3.71 3.711s-3.71-1.661-3.71-3.711c0-2.049 1.661-3.71 3.71-3.71s3.71 1.661 3.71 3.71z"
                />
                <path
                  fill="#b9b9b9"
                  d="M33.101 204.296c0 3.502-2.839 6.34-6.341 6.34-3.501 0-6.339-2.838-6.339-6.34s2.838-6.341 6.339-6.341c3.502 0 6.341 2.839 6.341 6.341z"
                />
                <path
                  fill="#a4a4a4"
                  d="M21.732 197.191c0 1.675-1.358 3.036-3.033 3.036-1.677 0-3.035-1.361-3.035-3.036 0-1.676 1.358-3.034 3.035-3.034 1.674 0 3.033 1.358 3.033 3.034z"
                />
                <path
                  fill="#cfcfcf"
                  d="M36.073 172.022c0 3.823-3.099 6.922-6.923 6.922-3.823 0-6.922-3.099-6.922-6.922 0-3.822 3.099-6.922 6.922-6.922 3.825 0 6.923 3.1 6.923 6.922z"
                />
                <path
                  fill="#d7d7d7"
                  d="M36.392 110.2c0 3.213-2.604 5.815-5.815 5.815-3.212 0-5.815-2.603-5.815-5.815 0-3.211 2.604-5.815 5.815-5.815 3.21 0 5.815 2.604 5.815 5.815z"
                />
                <path
                  fill="#979797"
                  d="M27.646 83.405c0 3.392-2.751 6.142-6.143 6.142s-6.14-2.75-6.14-6.142c0-3.392 2.748-6.141 6.14-6.141 3.392 0 6.143 2.749 6.143 6.141z"
                />
                <path
                  fill="#e0e0e0"
                  d="M22.824 72.508c0 1.96-1.589 3.55-3.55 3.55-1.961 0-3.551-1.59-3.551-3.55 0-1.961 1.59-3.551 3.551-3.551s3.55 1.59 3.55 3.551z"
                />
                <path
                  fill="#191919"
                  d="M31.587 69.905c0 2.151-1.744 3.894-3.895 3.894-2.149 0-3.893-1.742-3.893-3.894 0-2.15 1.743-3.894 3.893-3.894 2.151 0 3.895 1.744 3.895 3.894z"
                />
                <path
                  fill="#727272"
                  d="M38.826 215.206c0 2.877-2.334 5.211-5.214 5.211-2.878 0-5.212-2.334-5.212-5.211 0-2.879 2.334-5.213 5.212-5.213 2.88 0 5.214 2.334 5.214 5.213z"
                />
                <path
                  fill="#262626"
                  d="M42.086 194.695c0 3.224-2.614 5.838-5.839 5.838-3.224 0-5.838-2.614-5.838-5.838 0-3.225 2.614-5.839 5.838-5.839 3.225 0 5.839 2.614 5.839 5.839z"
                />
                <path
                  fill="#636363"
                  d="M37.866 183.586c0 2.309-1.872 4.18-4.181 4.18-2.31 0-4.18-1.871-4.18-4.18 0-2.311 1.87-4.181 4.18-4.181 2.309 0 4.181 1.87 4.181 4.181z"
                />
                <path
                  fill="#262626"
                  d="M37.171 154.779c0 2.936-2.379 5.314-5.313 5.314-2.936 0-5.316-2.379-5.316-5.314s2.381-5.315 5.316-5.315c2.934 0 5.313 2.38 5.313 5.315z"
                />
                <path
                  fill="#1f1f1f"
                  d="M39.929 142.879c0 3.058-2.479 5.535-5.536 5.535-3.058 0-5.535-2.478-5.535-5.535s2.478-5.536 5.535-5.536c3.056 0 5.536 2.479 5.536 5.536z"
                />
                <path
                  fill="#ebebeb"
                  d="M38.517 127.89c0 2.377-1.927 4.305-4.305 4.305-2.378 0-4.305-1.928-4.305-4.305 0-2.378 1.927-4.306 4.305-4.306 2.378 0 4.305 1.928 4.305 4.306z"
                />
                <path
                  fill="#262626"
                  d="M41.597 97.937c0 2.583-2.092 4.676-4.675 4.676-2.581 0-4.676-2.093-4.676-4.676s2.095-4.677 4.676-4.677c2.583 0 4.675 2.094 4.675 4.677z"
                />
                <path
                  fill="#bababa"
                  d="M36.144 89.16c0 2.018-1.636 3.653-3.653 3.653-2.017 0-3.653-1.636-3.653-3.653 0-2.017 1.636-3.653 3.653-3.653 2.017 0 3.653 1.636 3.653 3.653z"
                />
                <path
                  fill="#c2c2c2"
                  d="M42.56 80.308c0 2.825-2.29 5.115-5.115 5.115-2.826 0-5.116-2.29-5.116-5.115s2.29-5.115 5.116-5.115c2.825 0 5.115 2.29 5.115 5.115z"
                />
                <path
                  fill="#4c4c4c"
                  d="M36.533 61.117c0 2.502-2.026 4.528-4.526 4.528-2.501 0-4.527-2.026-4.527-4.528 0-2.499 2.026-4.527 4.527-4.527 2.5 0 4.526 2.028 4.526 4.527z"
                />
                <path
                  fill="#373737"
                  d="M38.078 51.399c0 2.217-1.797 4.015-4.016 4.015-2.217 0-4.014-1.798-4.014-4.015 0-2.218 1.797-4.015 4.014-4.015 2.219.001 4.016 1.797 4.016 4.015z"
                />
                <path
                  fill="#efefef"
                  d="M47.258 224.068c0 3.039-2.464 5.504-5.504 5.504-3.04 0-5.504-2.465-5.504-5.504 0-3.039 2.464-5.504 5.504-5.504 3.04 0 5.504 2.465 5.504 5.504z"
                />
                <path
                  fill="#b3b3b3"
                  d="M57.761 219.022c0 2.822-2.287 5.11-5.11 5.11-2.823 0-5.111-2.288-5.111-5.11 0-2.823 2.288-5.113 5.111-5.113s5.11 2.29 5.11 5.113z"
                />
                <path
                  fill="#272727"
                  d="M50.231 206.405c0 3.678-2.979 6.657-6.657 6.657-3.676 0-6.657-2.979-6.657-6.657 0-3.677 2.981-6.656 6.657-6.656 3.677 0 6.657 2.979 6.657 6.656z"
                />
                <path
                  fill="#d1d1d1"
                  d="M51.156 185.588c0 3.152-2.555 5.708-5.707 5.708-3.152 0-5.706-2.556-5.706-5.708 0-3.149 2.554-5.704 5.706-5.704 3.152 0 5.707 2.554 5.707 5.704z"
                />
                <path
                  fill="#d5d5d5"
                  d="M54.265 175.825c0 2.156-1.747 3.906-3.903 3.906-2.156 0-3.903-1.75-3.903-3.906s1.747-3.903 3.903-3.903c2.156 0 3.903 1.747 3.903 3.903z"
                />
                <path
                  fill="#e8e8e8"
                  d="M45.061 175.346c0 2.244-1.819 4.063-4.063 4.063-2.243 0-4.062-1.819-4.062-4.063 0-2.246 1.819-4.065 4.062-4.065 2.243 0 4.063 1.819 4.063 4.065z"
                />
                <path
                  fill="#323232"
                  d="M51.012 137.301c0 3.062-2.483 5.545-5.546 5.545s-5.547-2.482-5.547-5.545c0-3.063 2.483-5.547 5.547-5.547 3.062.001 5.546 2.484 5.546 5.547z"
                />
                <path
                  fill="#979797"
                  d="M51.889 123.266c0 3.581-2.903 6.485-6.485 6.485-3.582 0-6.486-2.904-6.486-6.485 0-3.584 2.904-6.487 6.486-6.487s6.485 2.903 6.485 6.487z"
                />
                <path
                  fill="#3e3e3e"
                  d="M50.941 95.8c0 1.614-1.309 2.924-2.925 2.924-1.614 0-2.924-1.31-2.924-2.924 0-1.616 1.31-2.925 2.924-2.925 1.616 0 2.925 1.308 2.925 2.925z"
                />
                <path
                  fill="#a6a6a6"
                  d="M46.859 89.33c0 2.235-1.812 4.048-4.049 4.048-2.235 0-4.048-1.812-4.048-4.048 0-2.236 1.812-4.047 4.048-4.047 2.237 0 4.049 1.811 4.049 4.047z"
                />
                <path
                  fill="#828282"
                  d="M53.981 80.884c0 2.795-2.266 5.061-5.06 5.061-2.794 0-5.06-2.266-5.06-5.061s2.266-5.059 5.06-5.059c2.794 0 5.06 2.264 5.06 5.059z"
                />
                <path
                  fill="#3c3c3c"
                  d="M51.357 68.536c0 3.595-2.914 6.509-6.509 6.509s-6.509-2.914-6.509-6.509 2.914-6.508 6.509-6.508 6.509 2.913 6.509 6.508z"
                />
                <path
                  fill="#9c9c9c"
                  d="M55.164 51.912c0 3.574-2.897 6.472-6.47 6.472-3.574 0-6.472-2.897-6.472-6.472 0-3.575 2.897-6.471 6.472-6.471 3.573 0 6.47 2.897 6.47 6.471z"
                />
                <path
                  fill="#6b6b6b"
                  d="M41.431 44.641c0 1.555-1.259 2.816-2.814 2.816-1.555 0-2.816-1.262-2.816-2.816 0-1.554 1.261-2.815 2.816-2.815s2.814 1.261 2.814 2.815z"
                />
                <path
                  fill="#fafafa"
                  d="M50.177 40.109c0 2.407-1.951 4.359-4.359 4.359-2.407 0-4.359-1.952-4.359-4.359s1.952-4.358 4.359-4.358c2.408 0 4.359 1.951 4.359 4.358z"
                />
                <path
                  fill="#1b1b1b"
                  d="M61.197 237.57c0 2.931-2.378 5.309-5.31 5.309-2.933 0-5.31-2.378-5.31-5.309 0-2.934 2.377-5.312 5.31-5.312 2.932.001 5.31 2.378 5.31 5.312z"
                />
                <path
                  fill="#e7e7e7"
                  d="M68.251 219.449c0 2.367-1.92 4.284-4.287 4.284-2.366 0-4.285-1.917-4.285-4.284s1.919-4.284 4.285-4.284c2.367 0 4.287 1.917 4.287 4.284z"
                />
                <path
                  fill="#fbfbfb"
                  d="M59.474 208.724c0 2.251-1.824 4.075-4.076 4.075-2.249 0-4.073-1.824-4.073-4.075 0-2.249 1.824-4.074 4.073-4.074 2.251 0 4.076 1.825 4.076 4.074z"
                />
                <path
                  fill="#bdbdbd"
                  d="M61.496 196.365c0 3.821-3.099 6.922-6.92 6.922-3.822 0-6.92-3.101-6.92-6.922 0-3.821 3.098-6.92 6.92-6.92s6.92 3.099 6.92 6.92z"
                />
                <path
                  fill="#d9d9d9"
                  d="M66.841 182.58c0 3.662-2.97 6.631-6.632 6.631-3.661 0-6.631-2.969-6.631-6.631 0-3.661 2.97-6.629 6.631-6.629 3.662 0 6.632 2.968 6.632 6.629z"
                />
                <path
                  fill="#131313"
                  d="M65.026 156.293c0 1.789-1.449 3.239-3.237 3.239s-3.237-1.45-3.237-3.239c0-1.787 1.449-3.236 3.237-3.236s3.237 1.449 3.237 3.236z"
                />
                <path
                  fill="#070707"
                  d="M60.034 143.719c0 1.593-1.292 2.883-2.885 2.883-1.593 0-2.882-1.29-2.882-2.883s1.289-2.884 2.882-2.884c1.593 0 2.885 1.292 2.885 2.884z"
                />
                <path
                  fill="#525252"
                  d="M59.811 135.823c0 2.085-1.69 3.773-3.775 3.773-2.084 0-3.774-1.688-3.774-3.773s1.69-3.774 3.774-3.774 3.775 1.689 3.775 3.774z"
                />
                <path
                  fill="#4e4e4e"
                  d="M56.726 96.346c0 1.197-.971 2.169-2.17 2.169-1.199 0-2.169-.972-2.169-2.169 0-1.198.97-2.17 2.169-2.17s2.17.972 2.17 2.17z"
                />
                <path
                  fill="#ededed"
                  d="M66.185 75.424c0 3.333-2.702 6.035-6.036 6.035-3.333 0-6.035-2.702-6.035-6.035 0-3.334 2.702-6.037 6.035-6.037 3.334-.001 6.036 2.703 6.036 6.037z"
                />
                <path
                  fill="#ccc"
                  d="M58.684 62.101c0 2.181-1.769 3.949-3.947 3.949-2.183 0-3.95-1.769-3.95-3.949 0-2.18 1.768-3.948 3.95-3.948 2.178 0 3.947 1.768 3.947 3.948z"
                />
                <path
                  fill="#333"
                  d="M63.98 41.331c0 3.377-2.738 6.115-6.117 6.115-3.376 0-6.113-2.738-6.113-6.115 0-3.379 2.737-6.115 6.113-6.115 3.378 0 6.117 2.736 6.117 6.115z"
                />
                <path
                  fill="#1d1d1d"
                  d="M54.433 33.031c0 1.744-1.413 3.157-3.157 3.157s-3.157-1.413-3.157-3.157 1.413-3.157 3.157-3.157 3.157 1.413 3.157 3.157z"
                />
                <path
                  fill="#171717"
                  d="M79.526 245.847c0 4.043-3.275 7.318-7.315 7.318-4.041 0-7.315-3.275-7.315-7.318 0-4.04 3.274-7.315 7.315-7.315 4.04 0 7.315 3.275 7.315 7.315z"
                />
                <path
                  fill="#4b4b4b"
                  d="M69.225 235.552c0 1.909-1.548 3.456-3.457 3.456-1.909 0-3.456-1.547-3.456-3.456s1.547-3.456 3.456-3.456 3.457 1.547 3.457 3.456zM62.669 227.424c0 2.161-1.752 3.914-3.915 3.914-2.163 0-3.915-1.753-3.915-3.914 0-2.161 1.752-3.917 3.915-3.917 2.163 0 3.915 1.755 3.915 3.917z"
                />
                <path
                  fill="#7a7a7a"
                  d="M70.191 209.254c0 2.6-2.107 4.704-4.706 4.704s-4.706-2.104-4.706-4.704c0-2.602 2.107-4.706 4.706-4.706s4.706 2.104 4.706 4.706z"
                />
                <path
                  fill="#e0e0e0"
                  d="M73.95 165.206c0 2.436-1.974 4.409-4.41 4.409-2.435 0-4.409-1.974-4.409-4.409 0-2.435 1.975-4.411 4.409-4.411 2.437 0 4.41 1.975 4.41 4.411z"
                />
                <path
                  fill="#5b5b5b"
                  d="M74.103 155.575c0 2.151-1.745 3.895-3.895 3.895s-3.896-1.743-3.896-3.895c0-2.149 1.745-3.893 3.896-3.893 2.149 0 3.895 1.744 3.895 3.893z"
                />
                <path
                  fill="#d1d1d1"
                  d="M69.429 147.468c0 2.439-1.978 4.418-4.418 4.418-2.439 0-4.418-1.979-4.418-4.418 0-2.44 1.979-4.42 4.418-4.42 2.44.001 4.418 1.98 4.418 4.42z"
                />
                <path
                  fill="#a0a0a0"
                  d="M77.706 137.018c0 3.258-2.641 5.898-5.898 5.898-3.257 0-5.898-2.641-5.898-5.898 0-3.257 2.642-5.897 5.898-5.897 3.258 0 5.898 2.639 5.898 5.897z"
                />
                <path
                  fill="#efefef"
                  d="M77.833 108.702c0 3.364-2.728 6.092-6.092 6.092-3.364 0-6.091-2.728-6.091-6.092 0-3.363 2.727-6.092 6.091-6.092 3.364 0 6.092 2.729 6.092 6.092z"
                />
                <path
                  fill="#6e6e6e"
                  d="M64.548 110.68c0 1.013-.822 1.835-1.835 1.835-1.014 0-1.835-.822-1.835-1.835 0-1.014.821-1.835 1.835-1.835 1.013 0 1.835.822 1.835 1.835z"
                />
                <path d="M72.8 47.343c0 2.52-2.04 4.562-4.56 4.562-2.52 0-4.561-2.042-4.561-4.562 0-2.518 2.041-4.56 4.561-4.56s4.56 2.042 4.56 4.56z" />
                <path
                  fill="#1e1e1e"
                  d="M76.673 32.071c0 3.988-3.232 7.222-7.222 7.222-3.988 0-7.222-3.233-7.222-7.222 0-3.99 3.233-7.224 7.222-7.224 3.99 0 7.222 3.234 7.222 7.224z"
                />
                <path
                  fill="#cdcdcd"
                  d="M76.009 19.893c0 2.165-1.755 3.92-3.92 3.92-2.166 0-3.921-1.755-3.921-3.92 0-2.164 1.755-3.919 3.921-3.919 2.165 0 3.92 1.755 3.92 3.919z"
                />
                <path
                  fill="#505050"
                  d="M89.584 250.457c0 2.64-2.14 4.778-4.777 4.778-2.64 0-4.778-2.139-4.778-4.778 0-2.641 2.139-4.778 4.778-4.778 2.637-.001 4.777 2.137 4.777 4.778z"
                />
                <path
                  fill="#f9f9f9"
                  d="M88.013 231.79c0 4.079-3.307 7.389-7.388 7.389-4.08 0-7.388-3.31-7.388-7.389 0-4.081 3.308-7.388 7.388-7.388 4.081 0 7.388 3.307 7.388 7.388z"
                />
                <path
                  fill="#5e5e5e"
                  d="M81.44 217.987c0 3.305-2.679 5.983-5.982 5.983-3.303 0-5.981-2.679-5.981-5.983s2.678-5.982 5.981-5.982 5.982 2.678 5.982 5.982z"
                />
                <path
                  fill="#c3c3c3"
                  d="M92.134 207.193c0 3.921-3.179 7.1-7.101 7.1s-7.1-3.179-7.1-7.1c0-3.922 3.178-7.103 7.1-7.103 3.922 0 7.101 3.181 7.101 7.103z"
                />
                <path
                  fill="#303030"
                  d="M82.387 151.83c0 2.131-1.728 3.857-3.858 3.857s-3.857-1.727-3.857-3.857c0-2.132 1.727-3.858 3.857-3.858s3.858 1.726 3.858 3.858z"
                />
                <path
                  fill="#5a5a5a"
                  d="M87.594 142.375c0 2.711-2.198 4.909-4.908 4.909-2.711 0-4.909-2.198-4.909-4.909s2.198-4.908 4.909-4.908c2.71 0 4.908 2.197 4.908 4.908z"
                />
                <path
                  fill="#b2b2b2"
                  d="M86.824 117.356c0 2.999-2.432 5.43-5.43 5.43-2.999 0-5.43-2.431-5.43-5.43 0-2.999 2.431-5.43 5.43-5.43 2.999.001 5.43 2.431 5.43 5.43z"
                />
                <path
                  fill="#bcbcbc"
                  d="M90.145 99.086c0 3.628-2.94 6.569-6.569 6.569-3.628 0-6.569-2.941-6.569-6.569 0-3.629 2.941-6.57 6.569-6.57 3.628-.001 6.569 2.941 6.569 6.57z"
                />
                <path
                  fill="#acacac"
                  d="M82.664 42.485c0 2.665-2.16 4.827-4.825 4.827-2.666 0-4.828-2.162-4.828-4.827 0-2.666 2.162-4.828 4.828-4.828 2.665 0 4.825 2.162 4.825 4.828z"
                />
                <path
                  fill="#4c4c4c"
                  d="M92.421 30.699c0 3.998-3.242 7.239-7.24 7.239-3.997 0-7.239-3.241-7.239-7.239 0-3.998 3.242-7.239 7.239-7.239 3.998 0 7.24 3.241 7.24 7.239z"
                />
                <path
                  fill="#d5d5d5"
                  d="M81.316 21.725c0 1.151-.933 2.084-2.085 2.084-1.151 0-2.085-.933-2.085-2.084s.934-2.085 2.085-2.085c1.153 0 2.085.934 2.085 2.085z"
                />
                <path
                  fill="#e6e6e6"
                  d="M87.27 14.978c0 2.366-1.919 4.285-4.286 4.285-2.366 0-4.285-1.919-4.285-4.285 0-2.367 1.919-4.286 4.285-4.286 2.367 0 4.286 1.919 4.286 4.286z"
                />
                <path
                  fill="#1c1c1c"
                  d="M95.025 241.44c0 2.432-1.972 4.4-4.4 4.4-2.431 0-4.4-1.969-4.4-4.4 0-2.43 1.97-4.4 4.4-4.4 2.429 0 4.4 1.97 4.4 4.4z"
                />
                <path
                  fill="#666"
                  d="M99.255 231.494c0 2.7-2.187 4.885-4.884 4.885-2.699 0-4.885-2.185-4.885-4.885 0-2.696 2.186-4.884 4.885-4.884 2.697 0 4.884 2.188 4.884 4.884z"
                />
                <path
                  fill="#0c0c0c"
                  d="M94.637 220.491c0 3.016-2.447 5.463-5.463 5.463-3.018 0-5.463-2.447-5.463-5.463 0-3.019 2.445-5.463 5.463-5.463 3.016 0 5.463 2.444 5.463 5.463z"
                />
                <path
                  fill="#616161"
                  d="M92.128 151.512c0 2.326-1.888 4.213-4.215 4.213-2.328 0-4.214-1.887-4.214-4.213 0-2.328 1.886-4.215 4.214-4.215 2.327.001 4.215 1.887 4.215 4.215z"
                />
                <path
                  fill="#939393"
                  d="M94.973 123.449c0 2.365-1.919 4.284-4.286 4.284-2.366 0-4.284-1.919-4.284-4.284 0-2.368 1.918-4.286 4.284-4.286 2.367 0 4.286 1.918 4.286 4.286z"
                />
                <path
                  fill="#c8c8c8"
                  d="M94.577 113.79c0 1.944-1.574 3.52-3.518 3.52-1.944 0-3.521-1.575-3.521-3.52s1.576-3.519 3.521-3.519c1.944 0 3.518 1.574 3.518 3.519z"
                />
                <path
                  fill="#676767"
                  d="M99.238 100.559c0 2.168-1.757 3.926-3.925 3.926s-3.926-1.758-3.926-3.926 1.758-3.925 3.926-3.925 3.925 1.757 3.925 3.925z"
                />
                <path
                  fill="#444"
                  d="M99.118 77.075c0 2.36-1.914 4.273-4.272 4.273-2.359 0-4.272-1.913-4.272-4.273 0-2.358 1.913-4.271 4.272-4.271 2.358-.001 4.272 1.913 4.272 4.271z"
                />
                <path
                  fill="#4d4d4d"
                  d="M100.187 19.59c0 3.227-2.615 5.844-5.844 5.844-3.227 0-5.844-2.617-5.844-5.844 0-3.229 2.617-5.844 5.844-5.844 3.228 0 5.844 2.615 5.844 5.844z"
                />
                <path
                  fill="#222"
                  d="M93.021 10.522c0 1.546-1.252 2.798-2.797 2.798-1.544 0-2.797-1.252-2.797-2.798 0-1.544 1.253-2.795 2.797-2.795 1.545 0 2.797 1.251 2.797 2.795z"
                />
                <path
                  fill="#dbdbdb"
                  d="M111.241 259.038c0 3.857-3.126 6.984-6.983 6.984-3.857 0-6.983-3.127-6.983-6.984s3.126-6.983 6.983-6.983c3.857 0 6.983 3.125 6.983 6.983z"
                />
                <path
                  fill="#484848"
                  d="M105.324 246.214c0 2.75-2.229 4.979-4.978 4.979-2.748 0-4.977-2.229-4.977-4.979 0-2.749 2.229-4.977 4.977-4.977 2.75 0 4.978 2.228 4.978 4.977z"
                />
                <path
                  fill="#cfcfcf"
                  d="M109.407 234.667c0 2.571-2.084 4.655-4.654 4.655s-4.653-2.084-4.653-4.655c0-2.57 2.083-4.652 4.653-4.652 2.57 0 4.654 2.081 4.654 4.652z"
                />
                <path
                  fill="#383838"
                  d="M106.154 222.138c0 2.849-2.311 5.156-5.158 5.156-2.849 0-5.158-2.308-5.158-5.156s2.31-5.157 5.158-5.157c2.848 0 5.158 2.309 5.158 5.157z"
                />
                <path
                  fill="#bebebe"
                  d="M114.495 211.778c0 3.415-2.768 6.184-6.181 6.184-3.413 0-6.183-2.769-6.183-6.184 0-3.412 2.77-6.181 6.183-6.181s6.181 2.769 6.181 6.181z"
                />
                <path
                  fill="#8d8d8d"
                  d="M107.042 123.693c0 2.932-2.376 5.309-5.309 5.309-2.931 0-5.308-2.377-5.308-5.309 0-2.933 2.377-5.309 5.308-5.309 2.933.001 5.309 2.376 5.309 5.309z"
                />
                <path
                  fill="#1a1a1a"
                  d="M104.036 113.114c0 2.256-1.828 4.084-4.083 4.084s-4.083-1.828-4.083-4.084c0-2.255 1.828-4.082 4.083-4.082s4.083 1.827 4.083 4.082z"
                />
                <path
                  fill="#5e5e5e"
                  d="M106.721 103.708c0 1.855-1.506 3.361-3.361 3.361-1.855 0-3.36-1.506-3.36-3.361 0-1.856 1.505-3.36 3.36-3.36s3.361 1.503 3.361 3.36z"
                />
                <path
                  fill="#9b9b9b"
                  d="M108.951 79.413c0 2.395-1.941 4.336-4.336 4.336-2.396 0-4.336-1.941-4.336-4.336 0-2.395 1.94-4.336 4.336-4.336 2.395 0 4.336 1.941 4.336 4.336z"
                />
                <path
                  fill="#353535"
                  d="M113.3 31.001c0 3.512-2.847 6.358-6.358 6.358-3.511 0-6.358-2.847-6.358-6.358 0-3.511 2.848-6.357 6.358-6.357 3.511-.001 6.358 2.845 6.358 6.357z"
                />
                <path
                  fill="#8a8a8a"
                  d="M109.911 14.4c0 2.564-2.079 4.643-4.644 4.643s-4.644-2.078-4.644-4.643 2.079-4.643 4.644-4.643 4.644 2.078 4.644 4.643z"
                />
                <path
                  fill="gray"
                  d="M101.134 8.757c0 1.903-1.544 3.447-3.448 3.447s-3.448-1.544-3.448-3.447c0-1.904 1.544-3.448 3.448-3.448s3.448 1.543 3.448 3.448z"
                />
                <path
                  fill="#a5a5a5"
                  d="M123.612 253.153c0 3.363-2.727 6.088-6.09 6.088s-6.088-2.725-6.088-6.088 2.725-6.088 6.088-6.088 6.09 2.725 6.09 6.088z"
                />
                <path
                  fill="#919191"
                  d="M116.425 242.588c0 2.537-2.057 4.593-4.594 4.593-2.537 0-4.594-2.056-4.594-4.593s2.057-4.594 4.594-4.594c2.537 0 4.594 2.057 4.594 4.594z"
                />
                <path
                  fill="#adadad"
                  d="M123.199 231.649c0 3.401-2.756 6.157-6.156 6.157s-6.156-2.756-6.156-6.157c0-3.399 2.756-6.155 6.156-6.155s6.156 2.756 6.156 6.155z"
                />
                <path
                  fill="#646464"
                  d="M113.023 223.96c0 1.557-1.263 2.818-2.82 2.818s-2.819-1.262-2.819-2.818c0-1.56 1.263-2.82 2.819-2.82 1.557-.001 2.82 1.26 2.82 2.82z"
                />
                <path
                  fill="#d9d9d9"
                  d="M121.841 219.446c0 2.419-1.961 4.38-4.38 4.38-2.419 0-4.38-1.961-4.38-4.38 0-2.418 1.961-4.379 4.38-4.379 2.419 0 4.38 1.961 4.38 4.379z"
                />
                <path
                  fill="#898989"
                  d="M117.129 120.639c0 2.536-2.056 4.593-4.592 4.593-2.536 0-4.592-2.057-4.592-4.593 0-2.535 2.056-4.592 4.592-4.592 2.536 0 4.592 2.057 4.592 4.592z"
                />
                <path
                  fill="#6e6e6e"
                  d="M115.999 109.795c0 2.791-2.262 5.052-5.051 5.052s-5.052-2.261-5.052-5.052c0-2.789 2.263-5.051 5.052-5.051 2.789 0 5.051 2.262 5.051 5.051z"
                />
                <path
                  fill="#f5f5f5"
                  d="M121.385 90.217c0 2.523-2.046 4.567-4.568 4.567-2.523 0-4.569-2.044-4.569-4.567 0-2.522 2.046-4.568 4.569-4.568 2.522-.001 4.568 2.045 4.568 4.568z"
                />
                <path
                  fill="#5c5c5c"
                  d="M122.911 79.411c0 2.667-2.162 4.828-4.827 4.828-2.667 0-4.829-2.161-4.829-4.828 0-2.666 2.162-4.828 4.829-4.828 2.665 0 4.827 2.162 4.827 4.828z"
                />
                <path
                  fill="#e9e9e9"
                  d="M117.162 69.423c0 3.252-2.635 5.889-5.888 5.889-3.251 0-5.887-2.637-5.887-5.889 0-3.251 2.636-5.888 5.887-5.888 3.253 0 5.888 2.637 5.888 5.888z"
                />
                <path
                  fill="#545454"
                  d="M115.152 21.253c0 1.8-1.459 3.26-3.257 3.26-1.802 0-3.261-1.46-3.261-3.26 0-1.8 1.459-3.259 3.261-3.259 1.798 0 3.257 1.459 3.257 3.259z"
                />
                <path
                  fill="#9a9a9a"
                  d="M111.002 5.865c0 1.657-1.342 2.999-2.998 2.999-1.657 0-3-1.342-3-2.999 0-1.655 1.343-2.999 3-2.999 1.656 0 2.998 1.344 2.998 2.999z"
                />
                <path
                  fill="#eaeaea"
                  d="M121.545 5.953c0 2.547-2.066 4.612-4.614 4.612-2.546 0-4.611-2.065-4.611-4.612 0-2.548 2.065-4.612 4.611-4.612 2.548 0 4.614 2.064 4.614 4.612z"
                />
                <path
                  fill="#e8e8e8"
                  d="M138.827 261.509c0 4.482-3.633 8.113-8.114 8.113-4.479 0-8.112-3.631-8.112-8.113 0-4.48 3.633-8.111 8.112-8.111 4.48-.001 8.114 3.63 8.114 8.111z"
                />
                <path
                  fill="#101010"
                  d="M131.388 243.46c0 2.99-2.423 5.412-5.412 5.412-2.987 0-5.411-2.422-5.411-5.412 0-2.987 2.424-5.409 5.411-5.409 2.989 0 5.412 2.421 5.412 5.409z"
                />
                <path
                  fill="#d0d0d0"
                  d="M133.255 233.527c0 2.046-1.659 3.705-3.705 3.705-2.046 0-3.705-1.659-3.705-3.705 0-2.046 1.659-3.705 3.705-3.705 2.046 0 3.705 1.659 3.705 3.705z"
                />
                <path d="M131.402 224.227c0 2.6-2.107 4.704-4.705 4.704s-4.705-2.104-4.705-4.704c0-2.596 2.107-4.703 4.705-4.703s4.705 2.108 4.705 4.703z" />
                <path
                  fill="#a6a6a6"
                  d="M132.113 212.743c0 2.864-2.324 5.188-5.189 5.188s-5.188-2.323-5.188-5.188c0-2.866 2.323-5.189 5.188-5.189 2.865 0 5.189 2.323 5.189 5.189z"
                />
                <path
                  fill="#0b0b0b"
                  d="M130.628 173.985c0 2.867-2.321 5.188-5.187 5.188s-5.186-2.32-5.186-5.188c0-2.863 2.32-5.185 5.186-5.185s5.187 2.322 5.187 5.185z"
                />
                <path
                  fill="#666"
                  d="M128.541 122.959c0 2.855-2.314 5.171-5.169 5.171-2.856 0-5.171-2.315-5.171-5.171 0-2.856 2.314-5.17 5.171-5.17 2.855 0 5.169 2.314 5.169 5.17z"
                />
                <path
                  fill="#ededed"
                  d="M137.198 97.568c0 4.549-3.686 8.234-8.235 8.234-4.547 0-8.234-3.686-8.234-8.234 0-4.547 3.688-8.234 8.234-8.234 4.549 0 8.235 3.687 8.235 8.234z"
                />
                <path
                  fill="#393939"
                  d="M128.142 85.555c0 1.701-1.379 3.079-3.079 3.079-1.701 0-3.079-1.378-3.079-3.079 0-1.7 1.378-3.079 3.079-3.079 1.7 0 3.079 1.379 3.079 3.079z"
                />
                <path
                  fill="#070707"
                  d="M136.318 76.538c0 3.299-2.675 5.974-5.974 5.974-3.3 0-5.974-2.675-5.974-5.974 0-3.299 2.674-5.975 5.974-5.975 3.299 0 5.974 2.676 5.974 5.975z"
                />
                <path
                  fill="#b8b8b8"
                  d="M126.892 65.962c0 2.462-1.995 4.458-4.457 4.458-2.462 0-4.459-1.996-4.459-4.458s1.997-4.458 4.459-4.458c2.462 0 4.457 1.996 4.457 4.458z"
                />
                <path
                  fill="#8e8e8e"
                  d="M131.754 21.1c0 4.201-3.405 7.608-7.607 7.608-4.204 0-7.609-3.407-7.609-7.608 0-4.202 3.405-7.608 7.609-7.608 4.202 0 7.607 3.406 7.607 7.608z"
                />
                <path
                  fill="#b8b8b8"
                  d="M131.267 4.394c0 2.334-1.895 4.227-4.229 4.227s-4.227-1.893-4.227-4.227c0-2.335 1.893-4.227 4.227-4.227 2.334 0 4.229 1.892 4.229 4.227z"
                />
                <path
                  fill="#171717"
                  d="M144.588 251.303c0 2.457-1.991 4.451-4.452 4.451-2.457 0-4.452-1.994-4.452-4.451 0-2.46 1.995-4.452 4.452-4.452 2.461 0 4.452 1.992 4.452 4.452z"
                />
                <path
                  fill="#3d3d3d"
                  d="M138.96 243.718c0 1.541-1.249 2.792-2.792 2.792-1.541 0-2.792-1.251-2.792-2.792 0-1.542 1.251-2.792 2.792-2.792 1.543 0 2.792 1.25 2.792 2.792z"
                />
                <path
                  fill="#a8a8a8"
                  d="M141.063 236.296c0 1.879-1.521 3.399-3.399 3.399-1.876 0-3.398-1.521-3.398-3.399 0-1.876 1.521-3.398 3.398-3.398 1.879-.001 3.399 1.522 3.399 3.398zM142.085 226.701c0 2.65-2.148 4.799-4.799 4.799-2.65 0-4.798-2.148-4.798-4.799 0-2.648 2.148-4.797 4.798-4.797s4.799 2.148 4.799 4.797z"
                />
                <path
                  fill="#2c2c2c"
                  d="M141.051 216.374c0 2.283-1.849 4.13-4.131 4.13-2.281 0-4.13-1.847-4.13-4.13 0-2.279 1.85-4.13 4.13-4.13 2.283 0 4.131 1.85 4.131 4.13z"
                />
                <path
                  fill="#cfcfcf"
                  d="M137.165 164.823c0 2.634-2.135 4.769-4.769 4.769-2.633 0-4.768-2.135-4.768-4.769 0-2.633 2.135-4.768 4.768-4.768s4.769 2.135 4.769 4.768z"
                />
                <path
                  fill="#d3d3d3"
                  d="M146.03 104.055c0 2.475-2.005 4.48-4.479 4.48s-4.479-2.006-4.479-4.48c0-2.474 2.005-4.479 4.479-4.479 2.474.001 4.479 2.005 4.479 4.479z"
                />
                <path
                  fill="#080808"
                  d="M143.665 88.733c0 2.311-1.873 4.185-4.185 4.185-2.311 0-4.184-1.874-4.184-4.185 0-2.31 1.874-4.183 4.184-4.183 2.312.001 4.185 1.874 4.185 4.183z"
                />
                <path
                  fill="#6b6b6b"
                  d="M141.485 80.766c0 1.328-1.077 2.405-2.404 2.405-1.329 0-2.405-1.077-2.405-2.405 0-1.328 1.076-2.404 2.405-2.404 1.327 0 2.404 1.076 2.404 2.404z"
                />
                <path
                  fill="#666"
                  d="M138.855 64.249c0 2.977-2.413 5.389-5.388 5.389-2.978 0-5.389-2.412-5.389-5.389 0-2.976 2.411-5.388 5.389-5.388 2.975 0 5.388 2.412 5.388 5.388z"
                />
                <path
                  fill="#575757"
                  d="M141.942 17.748c0 2.566-2.079 4.646-4.646 4.646-2.566 0-4.645-2.08-4.645-4.646 0-2.565 2.079-4.645 4.645-4.645 2.567 0 4.646 2.079 4.646 4.645z"
                />
                <path
                  fill="#fafafa"
                  d="M135.953 10.047c0 1.528-1.238 2.768-2.768 2.768-1.528 0-2.768-1.239-2.768-2.768 0-1.529 1.239-2.769 2.768-2.769 1.53 0 2.768 1.24 2.768 2.769z"
                />
                <path
                  fill="#404040"
                  d="M142.429 3.965c0 2.191-1.775 3.967-3.967 3.967-2.19 0-3.966-1.775-3.966-3.967 0-2.189 1.776-3.965 3.966-3.965 2.192 0 3.967 1.775 3.967 3.965z"
                />
                <path
                  fill="#e4e4e4"
                  d="M149.041 264.812c0 2.524-2.046 4.567-4.568 4.567s-4.567-2.043-4.567-4.567c0-2.521 2.045-4.567 4.567-4.567 2.522 0 4.568 2.046 4.568 4.567z"
                />
                <path
                  fill="#bdbdbd"
                  d="M153.425 255.935c0 2.243-1.819 4.062-4.063 4.062-2.244 0-4.063-1.819-4.063-4.062 0-2.244 1.819-4.063 4.063-4.063 2.244 0 4.063 1.819 4.063 4.063z"
                />
                <path
                  fill="#c9c9c9"
                  d="M150.837 246.2c0 1.799-1.458 3.258-3.255 3.258-1.798 0-3.257-1.459-3.257-3.258 0-1.796 1.459-3.255 3.257-3.255 1.797 0 3.255 1.459 3.255 3.255z"
                />
                <path
                  fill="#fafafa"
                  d="M151.212 237.202c0 2.452-1.986 4.438-4.438 4.438-2.449 0-4.438-1.986-4.438-4.438s1.988-4.438 4.438-4.438c2.451-.001 4.438 1.986 4.438 4.438z"
                />
                <path
                  fill="#4c4c4c"
                  d="M156.358 222.913c0 3.733-3.028 6.763-6.764 6.763-3.734 0-6.762-3.029-6.762-6.763 0-3.736 3.027-6.763 6.762-6.763 3.736 0 6.764 3.027 6.764 6.763z"
                />
                <path
                  fill="#cdcdcd"
                  d="M150.599 210.366c0 2.794-2.264 5.062-5.059 5.062-2.795 0-5.059-2.268-5.059-5.062 0-2.792 2.264-5.06 5.059-5.06 2.795 0 5.059 2.268 5.059 5.06z"
                />
                <path
                  fill="#171717"
                  d="M153.213 84.625c0 2.504-2.03 4.533-4.533 4.533-2.504 0-4.532-2.029-4.532-4.533 0-2.502 2.028-4.532 4.532-4.532 2.503 0 4.533 2.03 4.533 4.532z"
                />
                <path
                  fill="#dedede"
                  d="M149.006 75.294c0 2.319-1.88 4.199-4.199 4.199s-4.199-1.88-4.199-4.199c0-2.32 1.88-4.201 4.199-4.201s4.199 1.88 4.199 4.201z"
                />
                <path
                  fill="#2f2f2f"
                  d="M153.837 67.316c0 2.177-1.765 3.942-3.943 3.942s-3.943-1.766-3.943-3.942c0-2.178 1.765-3.943 3.943-3.943s3.943 1.765 3.943 3.943z"
                />
                <path
                  fill="#5d5d5d"
                  d="M157.217 28.514c0 2.102-1.702 3.805-3.803 3.805-2.1 0-3.804-1.703-3.804-3.805 0-2.1 1.704-3.803 3.804-3.803 2.101.001 3.803 1.704 3.803 3.803z"
                />
                <path
                  fill="#393939"
                  d="M148.791 25.471c0 2.458-1.992 4.448-4.448 4.448-2.456 0-4.447-1.99-4.447-4.448 0-2.456 1.991-4.447 4.447-4.447s4.448 1.991 4.448 4.447z"
                />
                <path
                  fill="#2c2c2c"
                  d="M155.02 11.206c0 3.747-3.037 6.784-6.784 6.784-3.746 0-6.783-3.037-6.783-6.784 0-3.745 3.037-6.783 6.783-6.783 3.747 0 6.784 3.038 6.784 6.783z"
                />
                <path
                  fill="#ebebeb"
                  d="M163.823 262.134c0 3.026-2.452 5.479-5.477 5.479-3.025 0-5.478-2.452-5.478-5.479s2.452-5.479 5.478-5.479c3.025 0 5.477 2.452 5.477 5.479z"
                />
                <path
                  fill="#fafafa"
                  d="M160.012 248.946c0 2.293-1.857 4.15-4.15 4.15-2.292 0-4.15-1.857-4.15-4.15s1.858-4.15 4.15-4.15c2.293 0 4.15 1.857 4.15 4.15z"
                />
                <path
                  fill="#0a0a0a"
                  d="M161.422 239.129c0 2.439-1.978 4.416-4.416 4.416-2.439 0-4.415-1.977-4.415-4.416 0-2.438 1.976-4.415 4.415-4.415s4.416 1.976 4.416 4.415z"
                />
                <path
                  fill="#838383"
                  d="M165.241 229.377c0 2.553-2.069 4.621-4.622 4.621-2.555 0-4.623-2.068-4.623-4.621 0-2.556 2.068-4.624 4.623-4.624 2.552 0 4.622 2.068 4.622 4.624z"
                />
                <path
                  fill="#7b7b7b"
                  d="M167.444 218.276c0 2.877-2.333 5.208-5.208 5.208-2.877 0-5.21-2.331-5.21-5.208 0-2.877 2.333-5.209 5.21-5.209 2.875 0 5.208 2.332 5.208 5.209z"
                />
                <path
                  fill="#d1d1d1"
                  d="M160.137 209.671c0 2.236-1.813 4.048-4.049 4.048-2.236 0-4.049-1.812-4.049-4.048 0-2.236 1.812-4.05 4.049-4.05 2.236 0 4.049 1.813 4.049 4.05z"
                />
                <path
                  fill="#616161"
                  d="M161.658 38.094c0 2.705-2.191 4.896-4.896 4.896s-4.896-2.19-4.896-4.896c0-2.703 2.192-4.896 4.896-4.896 2.704 0 4.896 2.193 4.896 4.896z"
                />
                <path
                  fill="#ececec"
                  d="M158.286 20.344c0 1.775-1.438 3.216-3.217 3.216-1.775 0-3.215-1.44-3.215-3.216 0-1.776 1.439-3.217 3.215-3.217 1.778.001 3.217 1.441 3.217 3.217z"
                />
                <path
                  fill="#b1b1b1"
                  d="M164.296 6.704c0 2.403-1.947 4.351-4.349 4.351-2.403 0-4.352-1.947-4.352-4.351 0-2.402 1.948-4.349 4.352-4.349 2.402 0 4.349 1.946 4.349 4.349z"
                />
                <path
                  fill="#616161"
                  d="M182.447 254.511c0 4.547-3.686 8.234-8.234 8.234s-8.234-3.688-8.234-8.234c0-4.546 3.687-8.234 8.234-8.234 4.548 0 8.234 3.688 8.234 8.234z"
                />
                <path
                  fill="#2e2e2e"
                  d="M167.688 246.056c0 1.889-1.531 3.42-3.42 3.42s-3.42-1.531-3.42-3.42 1.531-3.42 3.42-3.42 3.42 1.532 3.42 3.42z"
                />
                <path
                  fill="#505050"
                  d="M171.703 237.341c0 2.45-1.986 4.437-4.437 4.437-2.449 0-4.437-1.986-4.437-4.437 0-2.449 1.987-4.437 4.437-4.437s4.437 1.987 4.437 4.437z"
                />
                <path
                  fill="#262626"
                  d="M180.395 227.084c0 3.574-2.899 6.475-6.475 6.475-3.577 0-6.474-2.9-6.474-6.475 0-3.577 2.896-6.474 6.474-6.474 3.576 0 6.475 2.897 6.475 6.474z"
                />
                <path
                  fill="#dcdcdc"
                  d="M173.639 210.451c0 2.267-1.839 4.106-4.106 4.106s-4.105-1.84-4.105-4.106c0-2.268 1.839-4.104 4.105-4.104 2.267-.001 4.106 1.836 4.106 4.104z"
                />
                <path
                  fill="#7a7a7a"
                  d="M182.263 175.743c0 3.119-2.527 5.643-5.644 5.643s-5.643-2.523-5.643-5.643c0-3.116 2.525-5.644 5.643-5.644 3.117 0 5.644 2.528 5.644 5.644z"
                />
                <path
                  fill="#5e5e5e"
                  d="M177.747 163.198c0 3.187-2.582 5.77-5.769 5.77-3.186 0-5.77-2.583-5.77-5.77 0-3.187 2.584-5.77 5.77-5.77 3.187 0 5.769 2.583 5.769 5.77z"
                />
                <path
                  fill="#868686"
                  d="M171.201 41.77c0 2.422-1.961 4.383-4.382 4.383-2.419 0-4.383-1.961-4.383-4.383 0-2.42 1.964-4.382 4.383-4.382 2.421 0 4.382 1.962 4.382 4.382z"
                />
                <path
                  fill="#909090"
                  d="M178.584 32.869c0 2.926-2.37 5.297-5.296 5.297s-5.297-2.371-5.297-5.297c0-2.925 2.371-5.296 5.297-5.296 2.926 0 5.296 2.371 5.296 5.296z"
                />
                <path
                  fill="#eaeaea"
                  d="M174.685 20.604c0 3.744-3.037 6.779-6.781 6.779-3.743 0-6.777-3.035-6.777-6.779 0-3.744 3.034-6.779 6.777-6.779 3.744 0 6.781 3.035 6.781 6.779z"
                />
                <path
                  fill="#ededed"
                  d="M173.859 8.673c0 2.202-1.785 3.987-3.986 3.987-2.202 0-3.985-1.785-3.985-3.987 0-2.201 1.783-3.986 3.985-3.986 2.201-.001 3.986 1.784 3.986 3.986z"
                />
                <path
                  fill="#a6a6a6"
                  d="M185.149 242.336c0 2.38-1.93 4.31-4.312 4.31-2.38 0-4.311-1.93-4.311-4.31 0-2.381 1.931-4.311 4.311-4.311 2.382 0 4.312 1.93 4.312 4.311z"
                />
                <path
                  fill="#a5a5a5"
                  d="M177.389 236.944c0 1.177-.952 2.129-2.128 2.129-1.175 0-2.128-.952-2.128-2.129 0-1.173.953-2.128 2.128-2.128 1.176 0 2.128.955 2.128 2.128z"
                />
                <path
                  fill="#2e2e2e"
                  d="M186.717 214.632c0 3.461-2.807 6.269-6.268 6.269-3.462 0-6.267-2.808-6.267-6.269 0-3.461 2.805-6.266 6.267-6.266s6.268 2.805 6.268 6.266z"
                />
                <path
                  fill="#3f3f3f"
                  d="M188.342 166.012c0 2.654-2.152 4.806-4.809 4.806-2.654 0-4.807-2.151-4.807-4.806 0-2.656 2.152-4.809 4.807-4.809 2.657.001 4.809 2.153 4.809 4.809z"
                />
                <path
                  fill="#2d2d2d"
                  d="M188.602 154.763c0 2.27-1.839 4.108-4.108 4.108-2.269 0-4.109-1.839-4.109-4.108 0-2.269 1.84-4.108 4.109-4.108s4.108 1.839 4.108 4.108z"
                />
                <path
                  fill="#fbfbfb"
                  d="M184.305 146.16c0 2.331-1.891 4.22-4.221 4.22s-4.22-1.889-4.22-4.22c0-2.331 1.89-4.22 4.22-4.22s4.221 1.889 4.221 4.22z"
                />
                <path
                  fill="#c4c4c4"
                  d="M185.912 78.046c0 3.344-2.709 6.055-6.055 6.055-3.343 0-6.054-2.711-6.054-6.055s2.711-6.054 6.054-6.054c3.346 0 6.055 2.71 6.055 6.054z"
                />
                <path
                  fill="#1a1a1a"
                  d="M186.537 62.635c0 2.317-1.879 4.195-4.196 4.195-2.318 0-4.197-1.878-4.197-4.195 0-2.318 1.879-4.197 4.197-4.197 2.317-.001 4.196 1.878 4.196 4.197z"
                />
                <path
                  fill="#262626"
                  d="M181.599 53.845c0 2.74-2.222 4.963-4.964 4.963-2.74 0-4.963-2.223-4.963-4.963 0-2.742 2.223-4.964 4.963-4.964 2.743.001 4.964 2.222 4.964 4.964z"
                />
                <path
                  fill="#252525"
                  d="M185.137 42.824c0 2.883-2.337 5.219-5.219 5.219s-5.218-2.336-5.218-5.219c0-2.883 2.336-5.22 5.218-5.22s5.219 2.337 5.219 5.22z"
                />
                <path
                  fill="#9d9d9d"
                  d="M189.36 31.903c0 2.623-2.126 4.749-4.748 4.749-2.622 0-4.748-2.126-4.748-4.749 0-2.622 2.126-4.748 4.748-4.748 2.622 0 4.748 2.126 4.748 4.748z"
                />
                <path
                  fill="#666"
                  d="M188.505 21.312c0 2.382-1.93 4.312-4.31 4.312-2.382 0-4.313-1.93-4.313-4.312 0-2.38 1.932-4.312 4.313-4.312 2.381.001 4.31 1.932 4.31 4.312z"
                />
                <path
                  fill="#2f2f2f"
                  d="M182.123 13.667c0 2.276-1.845 4.121-4.121 4.121-2.275 0-4.121-1.845-4.121-4.121 0-2.275 1.846-4.121 4.121-4.121 2.276 0 4.121 1.845 4.121 4.121z"
                />
                <path
                  fill="#585858"
                  d="M195.808 251.375c0 3.402-2.756 6.158-6.157 6.158-3.399 0-6.156-2.756-6.156-6.158 0-3.398 2.757-6.157 6.156-6.157 3.401 0 6.157 2.758 6.157 6.157z"
                />
                <path
                  fill="#a8a8a8"
                  d="M197.482 237.109c0 3.373-2.735 6.108-6.109 6.108s-6.109-2.735-6.109-6.108c0-3.376 2.735-6.111 6.109-6.111s6.109 2.735 6.109 6.111z"
                />
                <path
                  fill="gray"
                  d="M196.865 225.184c0 2.504-2.03 4.534-4.535 4.534-2.504 0-4.534-2.03-4.534-4.534 0-2.506 2.03-4.536 4.534-4.536 2.505 0 4.535 2.03 4.535 4.536z"
                />
                <path
                  fill="#adadad"
                  d="M197.853 214.403c0 2.71-2.197 4.909-4.911 4.909-2.711 0-4.91-2.199-4.91-4.909 0-2.712 2.199-4.912 4.91-4.912 2.714 0 4.911 2.2 4.911 4.912z"
                />
                <path
                  fill="#373737"
                  d="M202.24 203.879c0 2.753-2.23 4.984-4.984 4.984-2.752 0-4.982-2.231-4.982-4.984 0-2.751 2.23-4.981 4.982-4.981 2.753-.001 4.984 2.23 4.984 4.981z"
                />
                <path
                  fill="#b6b6b6"
                  d="M193.624 172.449c0 1.773-1.438 3.212-3.21 3.212-1.773 0-3.21-1.438-3.21-3.212 0-1.772 1.437-3.207 3.21-3.207 1.771 0 3.21 1.435 3.21 3.207z"
                />
                <path
                  fill="#696969"
                  d="M197.222 160.466c0 2.511-2.035 4.546-4.547 4.546-2.51 0-4.547-2.035-4.547-4.546 0-2.512 2.037-4.547 4.547-4.547 2.512 0 4.547 2.035 4.547 4.547z"
                />
                <path
                  fill="#a3a3a3"
                  d="M200.83 96.936c0 4.23-3.429 7.661-7.659 7.661-4.229 0-7.66-3.431-7.66-7.661 0-4.23 3.431-7.66 7.66-7.66 4.23 0 7.659 3.43 7.659 7.66z"
                />
                <path
                  fill="#4f4f4f"
                  d="M194.146 83.95c0 2.354-1.908 4.262-4.263 4.262s-4.263-1.907-4.263-4.262c0-2.355 1.908-4.263 4.263-4.263s4.263 1.908 4.263 4.263z"
                />
                <path
                  fill="#929292"
                  d="M197.156 70.42c0 3.392-2.751 6.141-6.143 6.141s-6.141-2.749-6.141-6.141c0-3.393 2.749-6.143 6.141-6.143s6.143 2.75 6.143 6.143z"
                />
                <path
                  fill="#444"
                  d="M200.118 51.514c0 4.548-3.687 8.234-8.233 8.234-4.55 0-8.234-3.687-8.234-8.234 0-4.549 3.685-8.234 8.234-8.234 4.546 0 8.233 3.686 8.233 8.234z"
                />
                <path
                  fill="#666"
                  d="M193.632 38.871c0 1.703-1.382 3.085-3.086 3.085s-3.086-1.382-3.086-3.085c0-1.705 1.382-3.087 3.086-3.087s3.086 1.382 3.086 3.087z"
                />
                <path
                  fill="#fafafa"
                  d="M202.497 30.342c0 3.291-2.668 5.957-5.957 5.957-3.29 0-5.957-2.666-5.957-5.957 0-3.29 2.667-5.957 5.957-5.957 3.289 0 5.957 2.666 5.957 5.957z"
                />
                <path
                  fill="#1f1f1f"
                  d="M193.66 15.403c0 1.675-1.358 3.033-3.034 3.033-1.675 0-3.033-1.358-3.033-3.033 0-1.676 1.358-3.034 3.033-3.034 1.675 0 3.034 1.358 3.034 3.034z"
                />
                <path
                  fill="#363636"
                  d="M205.161 247.556c0 2.394-1.94 4.333-4.333 4.333-2.394 0-4.334-1.939-4.334-4.333s1.94-4.333 4.334-4.333c2.392 0 4.333 1.94 4.333 4.333z"
                />
                <path
                  fill="#3f3f3f"
                  d="M206.25 238.303c0 2.071-1.681 3.751-3.752 3.751-2.073 0-3.753-1.68-3.753-3.751 0-2.074 1.68-3.752 3.753-3.752 2.071 0 3.752 1.678 3.752 3.752z"
                />
                <path
                  fill="#0d0d0d"
                  d="M206.906 228.344c0 2.543-2.062 4.604-4.606 4.604-2.542 0-4.604-2.061-4.604-4.604 0-2.545 2.062-4.605 4.604-4.605 2.543 0 4.606 2.061 4.606 4.605z"
                />
                <path
                  fill="#1f1f1f"
                  d="M210.129 213.186c0 3.044-2.468 5.509-5.512 5.509-3.044 0-5.511-2.465-5.511-5.509 0-3.045 2.467-5.513 5.511-5.513s5.512 2.468 5.512 5.513z"
                />
                <path
                  fill="#1a1a1a"
                  d="M210.274 196.134c0 2.686-2.177 4.86-4.863 4.86-2.686 0-4.861-2.175-4.861-4.86 0-2.687 2.176-4.864 4.861-4.864 2.686-.001 4.863 2.177 4.863 4.864z"
                />
                <path
                  fill="#979797"
                  d="M212.276 187.209c0 1.846-1.495 3.341-3.342 3.341-1.846 0-3.341-1.495-3.341-3.341 0-1.847 1.495-3.342 3.341-3.342 1.847 0 3.342 1.495 3.342 3.342z"
                />
                <path
                  fill="#f6f6f6"
                  d="M199.003 168.242c0 1.495-1.213 2.707-2.707 2.707-1.494 0-2.706-1.212-2.706-2.707 0-1.494 1.212-2.706 2.706-2.706s2.707 1.212 2.707 2.706z"
                />
                <path
                  fill="#c1c1c1"
                  d="M207.83 116.216c0 1.833-1.487 3.32-3.32 3.32-1.834 0-3.32-1.487-3.32-3.32 0-1.834 1.486-3.319 3.32-3.319 1.832-.001 3.32 1.485 3.32 3.319z"
                />
                <path
                  fill="#5e5e5e"
                  d="M215.006 105.617c0 3.642-2.952 6.592-6.593 6.592-3.64 0-6.59-2.95-6.59-6.592 0-3.64 2.95-6.591 6.59-6.591 3.641 0 6.593 2.951 6.593 6.591z"
                />
                <path
                  fill="#d3d3d3"
                  d="M214.414 90.2c0 3.754-3.044 6.797-6.798 6.797-3.755 0-6.797-3.043-6.797-6.797 0-3.753 3.042-6.797 6.797-6.797 3.754 0 6.798 3.044 6.798 6.797z"
                />
                <path
                  fill="#fafafa"
                  d="M205.784 78.841c0 2.899-2.353 5.251-5.252 5.251-2.9 0-5.25-2.352-5.25-5.251 0-2.9 2.35-5.251 5.25-5.251 2.899 0 5.252 2.35 5.252 5.251z"
                />
                <path
                  fill="#232323"
                  d="M212.744 68.338c0 3.145-2.55 5.693-5.694 5.693s-5.694-2.549-5.694-5.693c0-3.146 2.55-5.694 5.694-5.694s5.694 2.548 5.694 5.694z"
                />
                <path
                  fill="#c2c2c2"
                  d="M201.705 62.627c0 1.816-1.472 3.288-3.288 3.288-1.817 0-3.29-1.472-3.29-3.288 0-1.816 1.473-3.29 3.29-3.29 1.816 0 3.288 1.473 3.288 3.29z"
                />
                <path
                  fill="#737373"
                  d="M201.867 41.206c0 1.61-1.306 2.917-2.916 2.917-1.61 0-2.916-1.307-2.916-2.917 0-1.611 1.306-2.916 2.916-2.916 1.61 0 2.916 1.304 2.916 2.916z"
                />
                <path
                  fill="#e5e5e5"
                  d="M210.113 36.708c0 2.276-1.846 4.121-4.121 4.121-2.277 0-4.122-1.845-4.122-4.121 0-2.276 1.845-4.121 4.122-4.121 2.275 0 4.121 1.844 4.121 4.121z"
                />
                <path
                  fill="#373737"
                  d="M201.116 19.478c0 2.005-1.624 3.63-3.628 3.63-2.005 0-3.63-1.625-3.63-3.63 0-2.004 1.625-3.629 3.63-3.629 2.004 0 3.628 1.625 3.628 3.629z"
                />
                <path
                  fill="#757575"
                  d="M217.304 234.086c0 2.936-2.381 5.313-5.316 5.313-2.937 0-5.315-2.378-5.315-5.313 0-2.937 2.379-5.316 5.315-5.316 2.935-.001 5.316 2.379 5.316 5.316z"
                />
                <path
                  fill="#b3b3b3"
                  d="M217.374 222.346c0 2.82-2.288 5.108-5.108 5.108-2.818 0-5.105-2.288-5.105-5.108s2.287-5.105 5.105-5.105c2.82 0 5.108 2.285 5.108 5.105z"
                />
                <path
                  fill="#555"
                  d="M219.202 212.47c0 2.115-1.714 3.829-3.828 3.829-2.115 0-3.829-1.714-3.829-3.829s1.714-3.829 3.829-3.829c2.114 0 3.828 1.714 3.828 3.829z"
                />
                <path
                  fill="#2d2d2d"
                  d="M223.348 198.418c0 3.281-2.658 5.939-5.938 5.939-3.281 0-5.939-2.658-5.939-5.939 0-3.28 2.658-5.941 5.939-5.941 3.28-.001 5.938 2.66 5.938 5.941z"
                />
                <path
                  fill="#7a7a7a"
                  d="M223.542 183.913c0 2.866-2.324 5.19-5.19 5.19-2.866 0-5.19-2.324-5.19-5.19 0-2.866 2.324-5.19 5.19-5.19 2.866 0 5.19 2.324 5.19 5.19z"
                />
                <path
                  fill="#626262"
                  d="M212.646 180.222c0 1.303-1.055 2.357-2.355 2.357s-2.354-1.055-2.354-2.357c0-1.299 1.054-2.354 2.354-2.354s2.355 1.056 2.355 2.354z"
                />
                <path
                  fill="#212121"
                  d="M211.486 122.267c0 1.394-1.129 2.521-2.521 2.521s-2.522-1.128-2.522-2.521c0-1.392 1.13-2.521 2.522-2.521s2.521 1.13 2.521 2.521z"
                />
                <path
                  fill="#8b8b8b"
                  d="M227.602 110.5c0 3.358-2.722 6.079-6.079 6.079-3.357 0-6.08-2.721-6.08-6.079 0-3.357 2.723-6.079 6.08-6.079s6.079 2.721 6.079 6.079z"
                />
                <path
                  fill="#e1e1e1"
                  d="M219.525 97.634c0 1.81-1.467 3.277-3.276 3.277-1.809 0-3.278-1.468-3.278-3.277 0-1.809 1.469-3.276 3.278-3.276s3.276 1.466 3.276 3.276z"
                />
                <path
                  fill="#545454"
                  d="M225.674 82.762c0 2.624-2.128 4.754-4.755 4.754-2.625 0-4.753-2.13-4.753-4.754 0-2.626 2.128-4.756 4.753-4.756 2.627.001 4.755 2.13 4.755 4.756z"
                />
                <path
                  fill="#010101"
                  d="M215.616 78.623c0 2.265-1.837 4.102-4.102 4.102-2.268 0-4.102-1.837-4.102-4.102 0-2.266 1.834-4.102 4.102-4.102 2.265 0 4.102 1.836 4.102 4.102z"
                />
                <path
                  fill="#686868"
                  d="M220.52 66.579c0 1.826-1.479 3.305-3.305 3.305s-3.306-1.479-3.306-3.305c0-1.825 1.479-3.305 3.306-3.305 1.826 0 3.305 1.48 3.305 3.305z"
                />
                <path
                  fill="#161616"
                  d="M218.024 56.799c0 3.114-2.524 5.64-5.64 5.64-3.116 0-5.641-2.525-5.641-5.64 0-3.115 2.525-5.641 5.641-5.641s5.64 2.525 5.64 5.641z"
                />
                <path
                  fill="#535353"
                  d="M216.239 45.198c0 2.58-2.09 4.671-4.671 4.671-2.578 0-4.67-2.091-4.67-4.671 0-2.579 2.092-4.67 4.67-4.67 2.581 0 4.671 2.091 4.671 4.67z"
                />
                <path
                  fill="#e2e2e2"
                  d="M222.741 35.055c0 3.087-2.501 5.59-5.589 5.59-3.088 0-5.589-2.503-5.589-5.59 0-3.086 2.501-5.589 5.589-5.589 3.088 0 5.589 2.503 5.589 5.589z"
                />
                <path
                  fill="#ababab"
                  d="M229.879 228.005c0 3.459-2.803 6.261-6.261 6.261-3.459 0-6.261-2.802-6.261-6.261 0-3.455 2.802-6.26 6.261-6.26s6.261 2.805 6.261 6.26z"
                />
                <path
                  fill="#676767"
                  d="M227.182 216.765c0 2.022-1.639 3.661-3.661 3.661-2.022 0-3.662-1.639-3.662-3.661 0-2.022 1.64-3.662 3.662-3.662 2.022 0 3.661 1.64 3.661 3.662z"
                />
                <path
                  fill="#757575"
                  d="M228.668 207.494c0 2.331-1.892 4.223-4.226 4.223-2.333 0-4.224-1.892-4.224-4.223 0-2.334 1.891-4.226 4.224-4.226 2.334 0 4.226 1.892 4.226 4.226z"
                />
                <path
                  fill="#343434"
                  d="M234.015 191.195c0 3.186-2.582 5.767-5.768 5.767s-5.767-2.581-5.767-5.767c0-3.186 2.581-5.77 5.767-5.77 3.186 0 5.768 2.585 5.768 5.77z"
                />
                <path
                  fill="#252525"
                  d="M234.752 179.629c0 2.558-2.072 4.632-4.631 4.632-2.558 0-4.63-2.074-4.63-4.632 0-2.556 2.072-4.63 4.63-4.63s4.631 2.074 4.631 4.63z"
                />
                <path
                  fill="#dfdfdf"
                  d="M231.237 72.094c0 3.025-2.451 5.477-5.477 5.477-3.024 0-5.474-2.451-5.474-5.477 0-3.023 2.449-5.475 5.474-5.475 3.026.001 5.477 2.452 5.477 5.475z"
                />
                <path
                  fill="#898989"
                  d="M230.911 59.414c0 3.265-2.646 5.911-5.91 5.911-3.266 0-5.912-2.646-5.912-5.911 0-3.266 2.646-5.912 5.912-5.912 3.263 0 5.91 2.646 5.91 5.912z"
                />
                <path
                  fill="#cacaca"
                  d="M232.509 45.442c0 3.673-2.977 6.648-6.646 6.648-3.673 0-6.649-2.976-6.649-6.648 0-3.672 2.977-6.647 6.649-6.647 3.67 0 6.646 2.975 6.646 6.647z"
                />
                <path
                  fill="#6e6e6e"
                  d="M240.949 216.035c0 3.442-2.792 6.234-6.234 6.234-3.445 0-6.237-2.792-6.237-6.234 0-3.446 2.792-6.238 6.237-6.238 3.442 0 6.234 2.792 6.234 6.238z"
                />
                <path
                  fill="#f6f6f6"
                  d="M240.582 202.541c0 3.229-2.62 5.849-5.85 5.849-3.23 0-5.846-2.619-5.846-5.849s2.616-5.847 5.846-5.847 5.85 2.617 5.85 5.847z"
                />
                <path
                  fill="#575757"
                  d="M242.655 191.725c0 2.018-1.636 3.654-3.653 3.654-2.021 0-3.655-1.637-3.655-3.654 0-2.021 1.635-3.654 3.655-3.654 2.017 0 3.653 1.634 3.653 3.654z"
                />
                <path
                  fill="#dedede"
                  d="M247.257 181.412c0 3.126-2.536 5.661-5.662 5.661-3.128 0-5.664-2.535-5.664-5.661 0-3.129 2.536-5.664 5.664-5.664 3.126 0 5.662 2.535 5.662 5.664z"
                />
                <path
                  fill="#4a4a4a"
                  d="M242.853 86.626c0 3.1-2.511 5.612-5.612 5.612-3.099 0-5.612-2.513-5.612-5.612s2.514-5.612 5.612-5.612c3.101-.001 5.612 2.512 5.612 5.612z"
                />
                <path
                  fill="#d9d9d9"
                  d="M243.829 74.841c0 2.74-2.222 4.962-4.963 4.962-2.74 0-4.962-2.222-4.962-4.962 0-2.74 2.222-4.961 4.962-4.961 2.741 0 4.963 2.22 4.963 4.961z"
                />
                <path
                  fill="#515151"
                  d="M242.207 63.398c0 2.925-2.372 5.296-5.296 5.296-2.925 0-5.296-2.371-5.296-5.296 0-2.924 2.371-5.294 5.296-5.294 2.924 0 5.296 2.37 5.296 5.294z"
                />
                <path
                  fill="#8d8d8d"
                  d="M240.329 52.35c0 2.383-1.933 4.314-4.315 4.314-2.382 0-4.313-1.932-4.313-4.314s1.931-4.315 4.313-4.315c2.382 0 4.315 1.933 4.315 4.315z"
                />
                <path
                  fill="#bfbfbf"
                  d="M248.806 206.017c0 2.065-1.674 3.738-3.738 3.738-2.065 0-3.739-1.673-3.739-3.738 0-2.064 1.674-3.739 3.739-3.739 2.064 0 3.738 1.675 3.738 3.739z"
                />
                <path
                  fill="#e2e2e2"
                  d="M250.148 197.026c0 2.18-1.765 3.947-3.944 3.947-2.179 0-3.946-1.768-3.946-3.947 0-2.179 1.767-3.945 3.946-3.945 2.179 0 3.944 1.765 3.944 3.945z"
                />
                <path
                  fill="#222"
                  d="M256.789 177.734c0 2.425-1.963 4.388-4.386 4.388s-4.387-1.963-4.387-4.388c0-2.421 1.964-4.385 4.387-4.385 2.423 0 4.386 1.964 4.386 4.385z"
                />
                <path
                  fill="#dbdbdb"
                  d="M256.759 78.479c0 3.357-2.723 6.08-6.081 6.08-3.357 0-6.08-2.723-6.08-6.08 0-3.358 2.723-6.081 6.08-6.081 3.359 0 6.081 2.723 6.081 6.081z"
                />
                <path
                  fill="#a7a7a7"
                  d="M251.127 67.482c0 2.306-1.868 4.175-4.174 4.175s-4.174-1.869-4.174-4.175c0-2.305 1.868-4.174 4.174-4.174s4.174 1.869 4.174 4.174z"
                />
                <path
                  fill="#696969"
                  d="M244.35 56.602c0 1.1-.892 1.99-1.991 1.99-1.099 0-1.99-.891-1.99-1.99s.892-1.99 1.99-1.99c1.1 0 1.991.892 1.991 1.99z"
                />
                <path
                  fill="#7a7a7a"
                  d="M257.462 188.676c0 2.803-2.271 5.075-5.074 5.075-2.804 0-5.075-2.272-5.075-5.075 0-2.802 2.271-5.074 5.075-5.074 2.803-.001 5.074 2.272 5.074 5.074z"
                />
                <path
                  fill="#040404"
                  d="M265.959 165.413c0 3.484-2.825 6.309-6.31 6.309-3.483 0-6.308-2.824-6.308-6.309 0-3.485 2.824-6.309 6.308-6.309s6.31 2.824 6.31 6.309z"
                />
                <path
                  fill="#525252"
                  d="M262.523 151.944c0 2.726-2.209 4.935-4.934 4.935-2.726 0-4.935-2.209-4.935-4.935 0-2.725 2.209-4.934 4.935-4.934 2.725 0 4.934 2.209 4.934 4.934z"
                />
                <path
                  fill="#0b0b0b"
                  d="M266.661 141.342c0 2.719-2.204 4.923-4.923 4.923-2.718 0-4.922-2.204-4.922-4.923s2.204-4.921 4.922-4.921c2.719 0 4.923 2.202 4.923 4.921z"
                />
                <path
                  fill="#d5d5d5"
                  d="M261.761 131.6c0 2.468-1.999 4.468-4.467 4.468-2.468 0-4.469-2-4.469-4.468s2.001-4.468 4.469-4.468c2.468 0 4.467 2.001 4.467 4.468z"
                />
                <path
                  fill="#c5c5c5"
                  d="M267.88 112.623c0 3.533-2.864 6.396-6.396 6.396s-6.396-2.862-6.396-6.396c0-3.531 2.863-6.395 6.396-6.395 3.532 0 6.396 2.864 6.396 6.395z"
                />
                <path
                  fill="#282828"
                  d="M265.041 99.938c0 2.72-2.203 4.924-4.924 4.924-2.72 0-4.925-2.204-4.925-4.924s2.205-4.925 4.925-4.925c2.72 0 4.924 2.205 4.924 4.925z"
                />
                <path
                  fill="#333"
                  d="M268.009 156.62c0 1.499-1.215 2.714-2.714 2.714-1.499 0-2.713-1.215-2.713-2.714 0-1.497 1.214-2.712 2.713-2.712s2.714 1.215 2.714 2.712z"
                />
                <path
                  fill="#b8b8b8"
                  d="M269.732 132.97c0 1.844-1.495 3.339-3.339 3.339-1.845 0-3.339-1.495-3.339-3.339 0-1.844 1.494-3.339 3.339-3.339 1.844.001 3.339 1.496 3.339 3.339z"
                />
                <path
                  fill="#383838"
                  d="M268.95 124.2c0 2.366-1.917 4.283-4.282 4.283s-4.283-1.917-4.283-4.283c0-2.365 1.918-4.282 4.283-4.282s4.282 1.917 4.282 4.282z"
                />
                <path
                  fill="#fbfbfb"
                  d="M9.295 109.567c0 1.891-1.533 3.424-3.423 3.424-1.891 0-3.424-1.533-3.424-3.424 0-1.892 1.533-3.424 3.424-3.424 1.89 0 3.423 1.533 3.423 3.424z"
                />
                <path
                  fill="#1f1f1f"
                  d="M26.402 63.121c0 1.447-1.174 2.619-2.62 2.619-1.445 0-2.619-1.172-2.619-2.619 0-1.446 1.174-2.62 2.619-2.62 1.447 0 2.62 1.174 2.62 2.62z"
                />
                <path
                  fill="#1e1e1e"
                  d="M29.112 193.841c0 1.464-1.187 2.652-2.65 2.652-1.465 0-2.652-1.188-2.652-2.652 0-1.465 1.188-2.65 2.652-2.65 1.464-.001 2.65 1.185 2.65 2.65z"
                />
                <path
                  fill="#3f3f3f"
                  d="M31.557 77.213c0 1.255-1.017 2.27-2.27 2.27-1.253 0-2.27-1.015-2.27-2.27 0-1.253 1.017-2.269 2.27-2.269 1.253 0 2.27 1.016 2.27 2.269z"
                />
                <path
                  fill="#d1d1d1"
                  d="M38.383 119.198c0 1.682-1.363 3.045-3.046 3.045-1.682 0-3.046-1.363-3.046-3.045 0-1.684 1.364-3.047 3.046-3.047 1.683 0 3.046 1.363 3.046 3.047z"
                />
                <path
                  fill="#1a1a1a"
                  d="M37.509 71.777c0 1.335-1.084 2.417-2.419 2.417-1.336 0-2.418-1.082-2.418-2.417 0-1.336 1.082-2.418 2.418-2.418 1.335 0 2.419 1.082 2.419 2.418z"
                />
                <path
                  fill="#e1e1e1"
                  d="M42.114 106.178c0 1.456-1.181 2.636-2.636 2.636-1.456 0-2.637-1.18-2.637-2.636 0-1.455 1.181-2.635 2.637-2.635 1.456.001 2.636 1.18 2.636 2.635z"
                />
                <path
                  fill="#3a3a3a"
                  d="M43.345 113.529c0 1.71-1.386 3.096-3.096 3.096-1.71 0-3.096-1.386-3.096-3.096 0-1.71 1.386-3.097 3.096-3.097 1.71 0 3.096 1.387 3.096 3.097z"
                />
                <path
                  fill="#0d0d0d"
                  d="M43.28 58.765c0 1.589-1.287 2.877-2.876 2.877s-2.875-1.288-2.875-2.877c0-1.588 1.286-2.876 2.875-2.876s2.876 1.288 2.876 2.876z"
                />
                <path
                  fill="#4d4d4d"
                  d="M50.483 232.776c0 1.865-1.513 3.381-3.381 3.381-1.866 0-3.38-1.516-3.38-3.381 0-1.868 1.514-3.382 3.38-3.382 1.868 0 3.381 1.514 3.381 3.382z"
                />
                <path
                  fill="#5d5d5d"
                  d="M58.848 89.052c0 2.111-1.711 3.821-3.821 3.821-2.111 0-3.82-1.71-3.82-3.821 0-2.11 1.709-3.821 3.82-3.821 2.11 0 3.821 1.711 3.821 3.821z"
                />
                <path
                  fill="#969696"
                  d="M61.483 28.403c0 1.936-1.57 3.506-3.505 3.506-1.936 0-3.505-1.57-3.505-3.506 0-1.936 1.569-3.505 3.505-3.505 1.935 0 3.505 1.57 3.505 3.505z"
                />
                <path
                  fill="#0f0f0f"
                  d="M61.262 50.983c0 1.254-1.017 2.271-2.27 2.271-1.255 0-2.271-1.017-2.271-2.271s1.016-2.27 2.271-2.27c1.253.001 2.27 1.016 2.27 2.27z"
                />
                <path
                  fill="#050505"
                  d="M63.624 244.821c0 1.312-1.062 2.373-2.371 2.373-1.312 0-2.373-1.061-2.373-2.373 0-1.31 1.062-2.372 2.373-2.372 1.31 0 2.371 1.062 2.371 2.372z"
                />
                <path
                  fill="#d5d5d5"
                  d="M63.472 85.034c0 1.242-1.006 2.248-2.248 2.248-1.241 0-2.247-1.006-2.247-2.248 0-1.241 1.006-2.247 2.247-2.247 1.242 0 2.248 1.006 2.248 2.247z"
                />
                <path
                  fill="#4f4f4f"
                  d="M64.969 139.684c0 1.337-1.085 2.42-2.421 2.42-1.338 0-2.421-1.083-2.421-2.42s1.083-2.422 2.421-2.422c1.336 0 2.421 1.085 2.421 2.422z"
                />
                <path
                  fill="#989898"
                  d="M67.208 22.182c0 1.255-1.016 2.273-2.271 2.273s-2.273-1.019-2.273-2.273c0-1.254 1.018-2.272 2.273-2.272 1.255 0 2.271 1.017 2.271 2.272z"
                />
                <path
                  fill="#767676"
                  d="M72.677 227.509c0 2.107-1.709 3.816-3.817 3.816-2.107 0-3.817-1.709-3.817-3.816 0-2.107 1.71-3.818 3.817-3.818 2.108-.001 3.817 1.71 3.817 3.818z"
                />
                <path
                  fill="#1b1b1b"
                  d="M72.685 118.815c0 1.597-1.295 2.892-2.892 2.892s-2.891-1.295-2.891-2.892 1.294-2.891 2.891-2.891 2.892 1.294 2.892 2.891z"
                />
                <path
                  fill="#282828"
                  d="M76.676 205.538c0 1.649-1.336 2.985-2.985 2.985-1.646 0-2.982-1.336-2.982-2.985 0-1.646 1.336-2.982 2.982-2.982 1.649-.001 2.985 1.335 2.985 2.982z"
                />
                <path
                  fill="#111"
                  d="M75.523 146.528c0 1.317-1.066 2.384-2.383 2.384s-2.386-1.066-2.386-2.384c0-1.318 1.068-2.385 2.386-2.385 1.316 0 2.383 1.068 2.383 2.385z"
                />
                <path
                  fill="#212121"
                  d="M84.822 242.469c0 1.196-.97 2.166-2.165 2.166-1.197 0-2.166-.97-2.166-2.166 0-1.197.969-2.167 2.166-2.167 1.196 0 2.165.97 2.165 2.167z"
                />
                <path
                  fill="#0d0d0d"
                  d="M86.853 75.839c0 1.264-1.023 2.286-2.285 2.286-1.264 0-2.287-1.022-2.287-2.286s1.023-2.286 2.287-2.286c1.261-.001 2.285 1.022 2.285 2.286z"
                />
                <path
                  fill="#595959"
                  d="M95.258 259.121c0 1.873-1.519 3.392-3.392 3.392s-3.392-1.519-3.392-3.392c0-1.874 1.519-3.392 3.392-3.392s3.392 1.518 3.392 3.392z"
                />
                <path
                  fill="#858585"
                  d="M87.533 109.141c0 1.272-1.03 2.303-2.305 2.303-1.271 0-2.303-1.03-2.303-2.303s1.032-2.305 2.303-2.305c1.275.001 2.305 1.033 2.305 2.305z"
                />
                <path
                  fill="#d1d1d1"
                  d="M97.827 143.782c0 2.27-1.84 4.111-4.11 4.111-2.271 0-4.111-1.842-4.111-4.111 0-2.271 1.84-4.11 4.111-4.11 2.27 0 4.11 1.839 4.11 4.11z"
                />
                <path
                  fill="#dcdcdc"
                  d="M93.09 106.617c0 1.293-1.047 2.342-2.342 2.342-1.292 0-2.34-1.049-2.34-2.342 0-1.293 1.048-2.34 2.34-2.34 1.295 0 2.342 1.047 2.342 2.34z"
                />
                <path
                  fill="#bbb"
                  d="M96.032 251.812c0 1.444-1.169 2.612-2.61 2.612-1.441 0-2.609-1.168-2.609-2.612 0-1.44 1.168-2.609 2.609-2.609s2.61 1.169 2.61 2.609z"
                />
                <path
                  fill="#9d9d9d"
                  d="M100.813 212.411c0 2.316-1.876 4.192-4.19 4.192-2.315 0-4.191-1.876-4.191-4.192 0-2.312 1.876-4.188 4.191-4.188 2.314-.001 4.19 1.875 4.19 4.188z"
                />
                <path
                  fill="#a2a2a2"
                  d="M98.748 84.977c0 1.35-1.093 2.445-2.444 2.445s-2.444-1.096-2.444-2.445c0-1.351 1.094-2.445 2.444-2.445 1.351 0 2.444 1.095 2.444 2.445z"
                />
                <path
                  fill="#1e1e1e"
                  d="M99.242 29.324c0 1.543-1.25 2.793-2.794 2.793s-2.795-1.25-2.795-2.793c0-1.544 1.251-2.795 2.795-2.795s2.794 1.251 2.794 2.795z"
                />
                <path
                  fill="#8c8c8c"
                  d="M104.119 71.6c0 1.543-1.251 2.794-2.792 2.794-1.544 0-2.795-1.251-2.795-2.794 0-1.542 1.251-2.793 2.795-2.793 1.541 0 2.792 1.251 2.792 2.793z"
                />
                <path
                  fill="#3f3f3f"
                  d="M113.278 84.189c0 1.271-1.031 2.302-2.302 2.302-1.271 0-2.301-1.031-2.301-2.302 0-1.271 1.029-2.302 2.301-2.302 1.271 0 2.302 1.031 2.302 2.302z"
                />
                <path
                  fill="#4c4c4c"
                  d="M121.398 264.609c0 2.192-1.777 3.971-3.972 3.971-2.193 0-3.972-1.778-3.972-3.971 0-2.195 1.778-3.973 3.972-3.973s3.972 1.778 3.972 3.973z"
                />
                <path
                  fill="#333"
                  d="M117.227 14.357c0 1.533-1.243 2.777-2.777 2.777-1.535 0-2.778-1.244-2.778-2.777 0-1.535 1.243-2.778 2.778-2.778 1.533 0 2.777 1.243 2.777 2.778z"
                />
                <path
                  fill="#4f4f4f"
                  d="M120.72 210.44c0 1.336-1.083 2.419-2.419 2.419-1.337 0-2.42-1.083-2.42-2.419 0-1.335 1.083-2.419 2.42-2.419 1.336 0 2.419 1.084 2.419 2.419z"
                />
                <path
                  fill="#e3e3e3"
                  d="M122.942 181.677c0 1.331-1.081 2.411-2.414 2.411-1.333 0-2.414-1.08-2.414-2.411 0-1.333 1.081-2.413 2.414-2.413 1.333 0 2.414 1.079 2.414 2.413z"
                />
                <path
                  fill="#3b3b3b"
                  d="M128.683 58.445c0 1.428-1.158 2.586-2.586 2.586s-2.586-1.158-2.586-2.586c0-1.427 1.158-2.585 2.586-2.585s2.586 1.158 2.586 2.585z"
                />
                <path
                  fill="#2c2c2c"
                  d="M134.488 249.924c0 1.23-.996 2.226-2.227 2.226-1.229 0-2.225-.995-2.225-2.226 0-1.228.996-2.226 2.225-2.226 1.231 0 2.227.998 2.227 2.226z"
                />
                <path
                  fill="#a3a3a3"
                  d="M134.452 86.051c0 1.302-1.058 2.358-2.359 2.358-1.303 0-2.36-1.057-2.36-2.358 0-1.304 1.058-2.359 2.36-2.359 1.302-.001 2.359 1.055 2.359 2.359z"
                />
                <path
                  fill="#464646"
                  d="M138.675 26.793c0 1.748-1.417 3.165-3.166 3.165-1.747 0-3.165-1.417-3.165-3.165s1.418-3.165 3.165-3.165c1.749 0 3.166 1.417 3.166 3.165z"
                />
                <path
                  fill="#dbdbdb"
                  d="M144.551 67.746c0 1.395-1.131 2.525-2.526 2.525-1.395 0-2.523-1.131-2.523-2.525s1.129-2.524 2.523-2.524c1.395-.001 2.526 1.13 2.526 2.524z"
                />
                <path
                  fill="#222"
                  d="M146.199 182.315c0 1.273-1.033 2.306-2.308 2.306-1.273 0-2.306-1.032-2.306-2.306s1.032-2.309 2.306-2.309c1.275.001 2.308 1.035 2.308 2.309z"
                />
                <path
                  fill="#9a9a9a"
                  d="M148.912 202.303c0 .988-.802 1.791-1.791 1.791-.988 0-1.791-.803-1.791-1.791 0-.988.803-1.791 1.791-1.791.989 0 1.791.803 1.791 1.791z"
                />
                <path
                  fill="#9d9d9d"
                  d="M155.015 232.454c0 1.127-.915 2.043-2.043 2.043-1.127 0-2.042-.916-2.042-2.043 0-1.127.915-2.043 2.042-2.043 1.128 0 2.043.916 2.043 2.043z"
                />
                <path
                  fill="#dcdcdc"
                  d="M155.041 74.424c0 1.281-1.039 2.321-2.32 2.321-1.282 0-2.321-1.04-2.321-2.321 0-1.281 1.039-2.321 2.321-2.321 1.281-.001 2.32 1.039 2.32 2.321z"
                />
                <path
                  fill="#fcfcfc"
                  d="M161.495 14.811c0 1.293-1.05 2.341-2.343 2.341s-2.342-1.048-2.342-2.341c0-1.295 1.049-2.344 2.342-2.344 1.293 0 2.343 1.049 2.343 2.344z"
                />
                <path
                  fill="#9c9c9c"
                  d="M164.69 253.683c0 1.335-1.083 2.419-2.418 2.419-1.336 0-2.419-1.084-2.419-2.419 0-1.336 1.083-2.419 2.419-2.419 1.335 0 2.418 1.083 2.418 2.419z"
                />
                <path
                  fill="#a2a2a2"
                  d="M166.788 31.165c0 1.868-1.516 3.383-3.384 3.383-1.868 0-3.383-1.515-3.383-3.383s1.515-3.382 3.383-3.382 3.384 1.514 3.384 3.382z"
                />
                <path
                  fill="#a4a4a4"
                  d="M165.301 206.046c0 1.312-1.062 2.375-2.374 2.375-1.311 0-2.373-1.063-2.373-2.375 0-1.311 1.062-2.373 2.373-2.373 1.312 0 2.374 1.062 2.374 2.373z"
                />
                <path
                  fill="#a8a8a8"
                  d="M171.962 48.938c0 1.115-.905 2.021-2.021 2.021-1.117 0-2.021-.906-2.021-2.021 0-1.117.904-2.022 2.021-2.022 1.115 0 2.021.905 2.021 2.022z"
                />
                <path
                  fill="#686868"
                  d="M175.184 242.879c0 1.181-.959 2.141-2.141 2.141s-2.139-.96-2.139-2.141c0-1.182.957-2.139 2.139-2.139s2.141.957 2.141 2.139z"
                />
                <path
                  fill="#b2b2b2"
                  d="M178.978 155.022c0 1.254-1.017 2.271-2.271 2.271-1.253 0-2.27-1.017-2.27-2.271 0-1.255 1.017-2.271 2.27-2.271 1.255 0 2.271 1.016 2.271 2.271z"
                />
                <path
                  fill="#151515"
                  d="M179.492 25.104c0 1.185-.963 2.146-2.148 2.146s-2.146-.962-2.146-2.146c0-1.187.961-2.147 2.146-2.147s2.148.961 2.148 2.147z"
                />
                <path
                  fill="#565656"
                  d="M184.472 233.826c0 1.446-1.172 2.619-2.618 2.619-1.447 0-2.62-1.173-2.62-2.619 0-1.446 1.173-2.62 2.62-2.62 1.446 0 2.618 1.174 2.618 2.62z"
                />
                <path
                  fill="#909090"
                  d="M186.467 224.225c0 1.425-1.152 2.578-2.578 2.578-1.424 0-2.578-1.153-2.578-2.578 0-1.423 1.154-2.579 2.578-2.579 1.426 0 2.578 1.156 2.578 2.579z"
                />
                <path
                  fill="#858585"
                  d="M187.337 11.891c0 1.091-.884 1.977-1.977 1.977-1.091 0-1.975-.886-1.975-1.977 0-1.091.884-1.975 1.975-1.975 1.094.001 1.977.885 1.977 1.975z"
                />
                <path
                  fill="#5f5f5f"
                  d="M199.824 87.002c0 1.101-.893 1.995-1.997 1.995-1.101 0-1.994-.895-1.994-1.995 0-1.103.894-1.997 1.994-1.997 1.104 0 1.997.894 1.997 1.997z"
                />
                <path
                  fill="#0d0d0d"
                  d="M201.417 220.543c0 1.292-1.046 2.339-2.336 2.339-1.292 0-2.34-1.047-2.34-2.339s1.048-2.339 2.34-2.339c1.29 0 2.336 1.047 2.336 2.339z"
                />
                <path
                  fill="gray"
                  d="M204.353 188.4c0 1.215-.986 2.2-2.2 2.2-1.216 0-2.201-.985-2.201-2.2 0-1.214.985-2.199 2.201-2.199 1.214 0 2.2.985 2.2 2.199z"
                />
                <path
                  fill="#797979"
                  d="M205.356 56.934c0 1.419-1.149 2.569-2.57 2.569-1.418 0-2.568-1.15-2.568-2.569s1.15-2.57 2.568-2.57c1.421 0 2.57 1.151 2.57 2.57z"
                />
                <path
                  fill="#121212"
                  d="M207.207 50.378c0 1.576-1.277 2.854-2.854 2.854-1.577 0-2.854-1.278-2.854-2.854s1.277-2.854 2.854-2.854c1.577 0 2.854 1.277 2.854 2.854z"
                />
                <path
                  fill="#9b9b9b"
                  d="M212.484 26.841c0 2.496-2.023 4.52-4.52 4.52-2.497 0-4.52-2.023-4.52-4.52 0-2.497 2.023-4.52 4.52-4.52 2.497 0 4.52 2.023 4.52 4.52z"
                />
                <path
                  fill="#0c0c0c"
                  d="M212.265 243.642c0 1.817-1.472 3.289-3.287 3.289s-3.286-1.472-3.286-3.289c0-1.813 1.471-3.286 3.286-3.286s3.287 1.473 3.287 3.286z"
                />
                <path
                  fill="#363636"
                  d="M212.106 204.437c0 1.621-1.315 2.934-2.937 2.934-1.622 0-2.934-1.312-2.934-2.934s1.312-2.937 2.934-2.937 2.937 1.316 2.937 2.937z"
                />
                <path
                  fill="#0f0f0f"
                  d="M215.641 116.015c0 1.785-1.446 3.232-3.23 3.232s-3.23-1.447-3.23-3.232c0-1.784 1.446-3.23 3.23-3.23s3.23 1.446 3.23 3.23z"
                />
                <path
                  fill="#e2e2e2"
                  d="M218.942 73.305c0 1.163-.943 2.104-2.105 2.104-1.161 0-2.104-.941-2.104-2.104 0-1.162.943-2.104 2.104-2.104 1.162 0 2.105.942 2.105 2.104z"
                />
                <path
                  fill="#b6b6b6"
                  d="M222.623 91.437c0 1.448-1.172 2.62-2.619 2.62-1.447 0-2.621-1.172-2.621-2.62 0-1.447 1.174-2.62 2.621-2.62s2.619 1.173 2.619 2.62z"
                />
                <path
                  fill="#dcdcdc"
                  d="M232.239 80.864c0 1.462-1.187 2.648-2.647 2.648-1.462 0-2.648-1.187-2.648-2.648 0-1.463 1.187-2.647 2.648-2.647 1.46 0 2.647 1.184 2.647 2.647z"
                />
                <path
                  fill="#d7d7d7"
                  d="M260.864 182.69c0 1.24-1.007 2.247-2.247 2.247s-2.245-1.007-2.245-2.247 1.005-2.243 2.245-2.243c1.24 0 2.247 1.003 2.247 2.243z"
                />
                <path
                  fill="#efefef"
                  d="M263.259 175.704c0 1.493-1.21 2.702-2.701 2.702s-2.7-1.209-2.7-2.702c0-1.489 1.209-2.699 2.7-2.699s2.701 1.21 2.701 2.699z"
                />
                <path
                  fill="#141414"
                  d="M268.881 149.289c0 1.504-1.22 2.722-2.723 2.722s-2.72-1.218-2.72-2.722c0-1.503 1.217-2.721 2.72-2.721 1.503 0 2.723 1.218 2.723 2.721z"
                />
                <path
                  fill="#131313"
                  d="M53.415 227.457c0 1.155-.938 2.092-2.094 2.092s-2.092-.937-2.092-2.092c0-1.158.937-2.095 2.092-2.095s2.094.937 2.094 2.095z"
                />
                <path
                  fill="#c9c9c9"
                  d="M63.027 66.084c0 1.103-.894 1.995-1.997 1.995-1.102 0-1.997-.893-1.997-1.995 0-1.104.896-1.997 1.997-1.997 1.104 0 1.997.893 1.997 1.997z"
                />
                <path
                  fill="#2f2f2f"
                  d="M80.133 255.021c0 1.073-.87 1.943-1.944 1.943-1.073 0-1.943-.87-1.943-1.943s.87-1.942 1.943-1.942c1.074 0 1.944.869 1.944 1.942z"
                />
                <path
                  fill="#aaa"
                  d="M203.326 164.7c0 1.143-.928 2.07-2.071 2.07-1.143 0-2.068-.928-2.068-2.07 0-1.144.926-2.07 2.068-2.07 1.143 0 2.071.926 2.071 2.07z"
                />
                <path
                  fill="#ccc"
                  d="M206.862 181.821c0 .932-.757 1.688-1.688 1.688-.934 0-1.689-.756-1.689-1.688 0-.935.756-1.69 1.689-1.69.931 0 1.688.755 1.688 1.69z"
                />
                <path
                  fill="#d0d0d0"
                  d="M151.148 95.228c0 2.381-1.931 4.312-4.313 4.312-2.38 0-4.31-1.932-4.31-4.312 0-2.38 1.93-4.312 4.31-4.312 2.382.001 4.313 1.931 4.313 4.312z"
                />
                <path
                  fill="#cacaca"
                  d="M13.791 158.169c0 3.161-2.562 5.725-5.723 5.725s-5.723-2.563-5.723-5.725c0-3.162 2.562-5.724 5.723-5.724s5.723 2.563 5.723 5.724z"
                />
                <path
                  fill="#9b9b9b"
                  d="M75.49 175.568c0 2.602-2.108 4.709-4.71 4.709-2.601 0-4.709-2.107-4.709-4.709 0-2.602 2.108-4.709 4.709-4.709 2.602 0 4.71 2.108 4.71 4.709z"
                />
                <path
                  fill="#707070"
                  d="M86.744 182.706c0 3.384-2.743 6.127-6.127 6.127s-6.127-2.743-6.127-6.127 2.743-6.127 6.127-6.127 6.127 2.743 6.127 6.127z"
                />
                <path
                  fill="#8b8b8b"
                  d="M96.636 176.374c0 2.369-1.92 4.292-4.289 4.292-2.37 0-4.291-1.923-4.291-4.292 0-2.37 1.921-4.29 4.291-4.29 2.369 0 4.289 1.92 4.289 4.29z"
                />
                <path
                  fill="#717171"
                  d="M86.996 174.413c0 1.078-.874 1.953-1.955 1.953-1.078 0-1.954-.875-1.954-1.953 0-1.081.876-1.956 1.954-1.956 1.081 0 1.955.875 1.955 1.956z"
                />
                <path
                  fill="#7b7b7b"
                  d="M101.551 166.746c0 2.721-2.208 4.926-4.929 4.926-2.722 0-4.93-2.205-4.93-4.926 0-2.723 2.208-4.93 4.93-4.93 2.721 0 4.929 2.207 4.929 4.93z"
                />
                <path
                  fill="#aeaeae"
                  d="M110.633 161.905c0 2.431-1.97 4.402-4.401 4.402s-4.401-1.972-4.401-4.402 1.97-4.401 4.401-4.401 4.401 1.971 4.401 4.401z"
                />
                <path
                  fill="#6f6f6f"
                  d="M121.193 154.013c0 3.322-2.692 6.015-6.015 6.015-3.323 0-6.017-2.692-6.017-6.015 0-3.323 2.693-6.017 6.017-6.017 3.323.001 6.015 2.695 6.015 6.017z"
                />
                <path
                  fill="#acacac"
                  d="M117.425 142.469c0 2.438-1.974 4.412-4.41 4.412-2.438 0-4.411-1.975-4.411-4.412 0-2.436 1.974-4.41 4.411-4.41 2.436 0 4.41 1.975 4.41 4.41z"
                />
                <path
                  fill="#c1c1c1"
                  d="M80.425 173.434c0 1.078-.874 1.953-1.953 1.953-1.078 0-1.953-.875-1.953-1.953s.875-1.953 1.953-1.953c1.079 0 1.953.875 1.953 1.953z"
                />
                <path
                  fill="#3a3a3a"
                  d="M123.004 145.804c0 1.331-1.078 2.409-2.409 2.409-1.33 0-2.408-1.078-2.408-2.409 0-1.33 1.078-2.408 2.408-2.408 1.331 0 2.409 1.078 2.409 2.408z"
                />
                <path
                  fill="#525252"
                  d="M106.062 169.101c0 .911-.738 1.649-1.649 1.649s-1.649-.738-1.649-1.649c0-.912.738-1.65 1.649-1.65s1.649.738 1.649 1.65z"
                />
                <path
                  fill="#ababab"
                  d="M46.28 163.785c0 3.193-2.589 5.782-5.782 5.782s-5.781-2.589-5.781-5.782 2.588-5.782 5.781-5.782c3.193 0 5.782 2.589 5.782 5.782z"
                />
                <path
                  fill="#1d1d1d"
                  d="M57.683 153.057c0 4.074-3.305 7.377-7.379 7.377-4.075 0-7.379-3.303-7.379-7.377s3.304-7.379 7.379-7.379c4.074 0 7.379 3.305 7.379 7.379z"
                />
                <path
                  fill="#c7c7c7"
                  d="M41.942 150.376c0 1.234-1 2.234-2.234 2.234-1.232 0-2.23-1-2.23-2.234 0-1.232.998-2.232 2.23-2.232 1.234-.001 2.234.999 2.234 2.232z"
                />
                <path
                  fill="#2e2e2e"
                  d="M59.818 107.793c0 4.547-3.687 8.234-8.234 8.234-4.547 0-8.234-3.688-8.234-8.234 0-4.548 3.688-8.234 8.234-8.234 4.548-.001 8.234 3.686 8.234 8.234z"
                />
                <path
                  fill="#555"
                  d="M63.887 166.531c0 3.551-2.879 6.428-6.429 6.428-3.551 0-6.428-2.877-6.428-6.428 0-3.55 2.877-6.427 6.428-6.427 3.55 0 6.429 2.877 6.429 6.427z"
                />
                <path
                  fill="#4e4e4e"
                  d="M60.694 126.749c0 2.195-1.779 3.975-3.975 3.975-2.194 0-3.975-1.779-3.975-3.975s1.78-3.975 3.975-3.975c2.196 0 3.975 1.779 3.975 3.975z"
                />
                <path
                  fill="#cacaca"
                  d="M65.516 118.077c0 2.442-1.979 4.421-4.421 4.421s-4.421-1.979-4.421-4.421c0-2.44 1.979-4.42 4.421-4.42 2.441 0 4.421 1.979 4.421 4.42z"
                />
                <path
                  fill="#f1f1f1"
                  d="M68.006 98.496c0 2.809-2.277 5.086-5.086 5.086-2.81 0-5.087-2.277-5.087-5.086 0-2.81 2.277-5.087 5.087-5.087 2.809 0 5.086 2.277 5.086 5.087z"
                />
                <path
                  fill="#d9d9d9"
                  d="M70.839 126.744c0 2.407-1.95 4.357-4.357 4.357s-4.357-1.95-4.357-4.357 1.95-4.358 4.357-4.358 4.357 1.951 4.357 4.358z"
                />
                <path
                  fill="#919191"
                  d="M75.267 88.436c0 3.064-2.483 5.548-5.547 5.548-3.064 0-5.548-2.483-5.548-5.548 0-3.063 2.483-5.548 5.548-5.548 3.063 0 5.547 2.485 5.547 5.548z"
                />
                <path
                  fill="#515151"
                  d="M84.506 130.055c0 2.186-1.773 3.959-3.959 3.959-2.187 0-3.959-1.773-3.959-3.959 0-2.187 1.772-3.959 3.959-3.959 2.186 0 3.959 1.773 3.959 3.959z"
                />
                <path
                  fill="#3e3e3e"
                  d="M77.628 124.321c0 1.592-1.292 2.882-2.883 2.882-1.593 0-2.882-1.29-2.882-2.882s1.289-2.882 2.882-2.882c1.591 0 2.883 1.29 2.883 2.882zM75.732 98.11c0 1.771-1.437 3.207-3.207 3.207-1.772 0-3.209-1.436-3.209-3.207s1.437-3.208 3.209-3.208c1.77 0 3.207 1.437 3.207 3.208z"
                />
                <path
                  fill="#e2e2e2"
                  d="M94.848 133.919c0 2.702-2.191 4.894-4.895 4.894-2.702 0-4.893-2.191-4.893-4.894 0-2.703 2.19-4.894 4.893-4.894s4.895 2.191 4.895 4.894z"
                />
                <path
                  fill="#7e7e7e"
                  d="M92.49 85.332c0 3.352-2.717 6.067-6.069 6.067s-6.068-2.716-6.068-6.067 2.717-6.068 6.068-6.068c3.353-.001 6.069 2.716 6.069 6.068z"
                />
                <path
                  fill="#bababa"
                  d="M104.74 136.524c0 2.43-1.97 4.397-4.399 4.397-2.429 0-4.397-1.968-4.397-4.397 0-2.429 1.969-4.398 4.397-4.398 2.43 0 4.399 1.969 4.399 4.398z"
                />
                <path
                  fill="#060606"
                  d="M110.916 92.145c0 3.769-3.055 6.823-6.823 6.823-3.767 0-6.822-3.055-6.822-6.823 0-3.768 3.056-6.823 6.822-6.823 3.768 0 6.823 3.055 6.823 6.823z"
                />
                <path
                  fill="#f4f4f4"
                  d="M115.42 131.911c0 2.867-2.326 5.192-5.192 5.192-2.869 0-5.192-2.325-5.192-5.192 0-2.868 2.323-5.191 5.192-5.191 2.866-.001 5.192 2.323 5.192 5.191z"
                />
                <path
                  fill="#bcbcbc"
                  d="M114.327 100.497c0 1.624-1.318 2.939-2.941 2.939-1.624 0-2.938-1.315-2.938-2.939s1.314-2.94 2.938-2.94c1.623-.001 2.941 1.316 2.941 2.94z"
                />
                <path
                  fill="#242424"
                  d="M128.296 111.211c0 2.907-2.358 5.266-5.267 5.266-2.907 0-5.266-2.358-5.266-5.266 0-2.909 2.358-5.267 5.266-5.267 2.909 0 5.267 2.357 5.267 5.267z"
                />
                <path
                  fill="#030303"
                  d="M80.437 90.51c0 1.131-.918 2.048-2.049 2.048-1.131 0-2.048-.917-2.048-2.048 0-1.132.917-2.049 2.048-2.049s2.049.918 2.049 2.049z"
                />
                <path
                  fill="#f1f1f1"
                  d="M95.885 92.843c0 1.499-1.215 2.714-2.713 2.714-1.499 0-2.714-1.215-2.714-2.714 0-1.499 1.215-2.713 2.714-2.713 1.498 0 2.713 1.213 2.713 2.713z"
                />
                <path d="M120.692 103.288c0 1.553-1.258 2.811-2.811 2.811s-2.812-1.258-2.812-2.811c0-1.554 1.259-2.812 2.812-2.812s2.811 1.258 2.811 2.812z" />
                <path
                  fill="#b0b0b0"
                  d="M15.634 170.439c0 2.941-2.386 5.327-5.328 5.327-2.943 0-5.329-2.386-5.329-5.327 0-2.942 2.386-5.327 5.329-5.327 2.942 0 5.328 2.385 5.328 5.327z"
                />
                <path
                  fill="#2e2e2e"
                  d="M18.996 142.409c0 1.955-1.583 3.54-3.538 3.54-1.955 0-3.539-1.585-3.539-3.54 0-1.954 1.584-3.539 3.539-3.539s3.538 1.585 3.538 3.539z"
                />
                <path
                  fill="#7b7b7b"
                  d="M26.558 160.66c0 3.214-2.605 5.819-5.819 5.819s-5.817-2.605-5.817-5.819 2.604-5.819 5.817-5.819 5.819 2.605 5.819 5.819z"
                />
                <path
                  fill="#8d8d8d"
                  d="M30.448 134.334c0 3.479-2.821 6.302-6.3 6.302-3.48 0-6.302-2.822-6.302-6.302 0-3.48 2.821-6.301 6.302-6.301 3.479 0 6.3 2.821 6.3 6.301z"
                />
                <path
                  fill="#dfdfdf"
                  d="M30.573 121.401c0 2.828-2.293 5.121-5.12 5.121-2.828 0-5.122-2.293-5.122-5.121 0-2.829 2.294-5.121 5.122-5.121 2.827 0 5.12 2.292 5.12 5.121z"
                />
                <path
                  fill="#070707"
                  d="M30.811 97.244c0 3.649-2.96 6.607-6.608 6.607-3.648 0-6.608-2.958-6.608-6.607s2.96-6.607 6.608-6.607c3.648 0 6.608 2.957 6.608 6.607z"
                />
                <path
                  fill="#c4c4c4"
                  d="M18.536 150.694c0 1.828-1.482 3.309-3.31 3.309s-3.309-1.48-3.309-3.309c0-1.827 1.481-3.309 3.309-3.309s3.31 1.482 3.31 3.309z"
                />
                <path
                  fill="#7a7a7a"
                  d="M20.097 125.979c0 2.087-1.692 3.777-3.779 3.777-2.087 0-3.777-1.69-3.777-3.777s1.69-3.778 3.777-3.778 3.779 1.691 3.779 3.778z"
                />
                <path
                  fill="#5b5b5b"
                  d="M16.638 135.759c0 1.007-.815 1.822-1.821 1.822s-1.822-.815-1.822-1.822c0-1.006.816-1.821 1.822-1.821 1.006 0 1.821.815 1.821 1.821z"
                />
                <path
                  fill="#1d1d1d"
                  d="M20.949 172.93c0 1.166-.946 2.112-2.113 2.112s-2.114-.946-2.114-2.112c0-1.168.947-2.115 2.114-2.115 1.167 0 2.113.947 2.113 2.115z"
                />
                <path
                  fill="gray"
                  d="M28.271 147.1c0 2.524-2.046 4.57-4.57 4.57-2.524 0-4.57-2.046-4.57-4.57 0-2.524 2.046-4.57 4.57-4.57 2.524 0 4.57 2.046 4.57 4.57z"
                />
                <path
                  fill="#121212"
                  d="M151.462 129.246c0 2.065-1.674 3.739-3.739 3.739-2.063 0-3.738-1.674-3.738-3.739 0-2.064 1.675-3.738 3.738-3.738 2.065 0 3.739 1.673 3.739 3.738z"
                />
                <path
                  fill="#797979"
                  d="M143.021 131.449c0 1.094-.888 1.981-1.981 1.981s-1.981-.888-1.981-1.981.888-1.98 1.981-1.98 1.981.886 1.981 1.98z"
                />
                <path
                  fill="#b5b5b5"
                  d="M155.182 112.1c0 3.023-2.452 5.475-5.476 5.475s-5.474-2.451-5.474-5.475c0-3.024 2.45-5.475 5.474-5.475s5.476 2.452 5.476 5.475z"
                />
                <path
                  fill="#838383"
                  d="M163.233 123.409c0 3.339-2.706 6.044-6.045 6.044s-6.044-2.705-6.044-6.044c0-3.339 2.705-6.045 6.044-6.045 3.339 0 6.045 2.706 6.045 6.045z"
                />
                <path
                  fill="#686868"
                  d="M169.885 110.581c0 3.722-3.016 6.737-6.735 6.737-3.721 0-6.736-3.016-6.736-6.737 0-3.719 3.016-6.736 6.736-6.736 3.72-.001 6.735 3.017 6.735 6.736z"
                />
                <path
                  fill="#171717"
                  d="M160.087 100.535c0 2.515-2.037 4.554-4.553 4.554s-4.554-2.039-4.554-4.554 2.038-4.553 4.554-4.553c2.516 0 4.553 2.038 4.553 4.553z"
                />
                <path
                  fill="#f5f5f5"
                  d="M164.259 89.731c0 2.986-2.421 5.406-5.407 5.406s-5.408-2.42-5.408-5.406c0-2.987 2.422-5.407 5.408-5.407s5.407 2.42 5.407 5.407z"
                />
                <path
                  fill="#cecece"
                  d="M168.79 98.795c0 2.083-1.689 3.771-3.772 3.771-2.082 0-3.771-1.688-3.771-3.771s1.689-3.771 3.771-3.771c2.082-.001 3.772 1.688 3.772 3.771z"
                />
                <path
                  fill="#424242"
                  d="M174.577 90.693c0 2.471-2.003 4.476-4.475 4.476-2.473 0-4.478-2.005-4.478-4.476 0-2.474 2.005-4.477 4.478-4.477 2.472.001 4.475 2.003 4.475 4.477z"
                />
                <path
                  fill="#cacaca"
                  d="M149.321 121.347c0 1.634-1.323 2.958-2.957 2.958s-2.959-1.324-2.959-2.958c0-1.634 1.325-2.958 2.959-2.958 1.634 0 2.957 1.325 2.957 2.958z"
                />
                <path
                  fill="#d6d6d6"
                  d="M143.328 125.699c0 1.288-1.045 2.332-2.334 2.332-1.288 0-2.333-1.044-2.333-2.332 0-1.289 1.045-2.334 2.333-2.334 1.289 0 2.334 1.045 2.334 2.334z"
                />
                <path
                  fill="#070707"
                  d="M143.299 175.383c0 3.145-2.548 5.692-5.69 5.692-3.144 0-5.692-2.548-5.692-5.692 0-3.142 2.548-5.689 5.692-5.689 3.143-.001 5.69 2.547 5.69 5.689z"
                />
                <path
                  fill="#222"
                  d="M145.829 152.772c0 3.031-2.457 5.488-5.488 5.488-3.031 0-5.49-2.457-5.49-5.488 0-3.031 2.458-5.489 5.49-5.489s5.488 2.458 5.488 5.489z"
                />
                <path
                  fill="#373737"
                  d="M151.993 176.468c0 2.041-1.654 3.695-3.696 3.695-2.041 0-3.695-1.654-3.695-3.695 0-2.04 1.654-3.695 3.695-3.695s3.696 1.655 3.696 3.695z"
                />
                <path
                  fill="#bfbfbf"
                  d="M149.928 167.048c0 2.46-1.993 4.455-4.453 4.455-2.459 0-4.453-1.995-4.453-4.455 0-2.458 1.994-4.452 4.453-4.452 2.46-.001 4.453 1.994 4.453 4.452z"
                />
                <path
                  fill="#090909"
                  d="M155.778 157.599c0 2.673-2.167 4.84-4.839 4.84-2.674 0-4.84-2.167-4.84-4.84s2.166-4.839 4.84-4.839c2.672 0 4.839 2.167 4.839 4.839z"
                />
                <path
                  fill="#323232"
                  d="M155.543 139.129c0 2.808-2.274 5.083-5.082 5.083s-5.085-2.275-5.085-5.083c0-2.808 2.277-5.084 5.085-5.084s5.082 2.276 5.082 5.084z"
                />
                <path
                  fill="#373737"
                  d="M163.075 169.851c0 3.267-2.648 5.917-5.916 5.917-3.269 0-5.917-2.65-5.917-5.917 0-3.268 2.648-5.916 5.917-5.916 3.267 0 5.916 2.649 5.916 5.916z"
                />
                <path
                  fill="#5c5c5c"
                  d="M165.491 159.113c0 2.35-1.904 4.254-4.254 4.254-2.349 0-4.253-1.904-4.253-4.254 0-2.349 1.904-4.253 4.253-4.253 2.35 0 4.254 1.904 4.254 4.253z"
                />
                <path
                  fill="#7b7b7b"
                  d="M162.845 147.911c0 2.765-2.24 5.006-5.005 5.006-2.764 0-5.005-2.241-5.005-5.006s2.241-5.005 5.005-5.005c2.765 0 5.005 2.24 5.005 5.005z"
                />
                <path
                  fill="#646464"
                  d="M167.112 137.219c0 2.838-2.301 5.14-5.139 5.14-2.84 0-5.142-2.302-5.142-5.14 0-2.84 2.302-5.141 5.142-5.141 2.838.001 5.139 2.302 5.139 5.141z"
                />
                <path
                  fill="#292929"
                  d="M173.908 151.396c0 2.842-2.302 5.144-5.144 5.144-2.841 0-5.143-2.302-5.143-5.144 0-2.841 2.302-5.143 5.143-5.143 2.842.001 5.144 2.302 5.144 5.143z"
                />
                <path
                  fill="#969696"
                  d="M175.486 142.183c0 1.85-1.498 3.35-3.35 3.35-1.851 0-3.35-1.5-3.35-3.35 0-1.851 1.499-3.351 3.35-3.351 1.852.001 3.35 1.501 3.35 3.351z"
                />
                <path
                  fill="#fcfcfc"
                  d="M178.491 132.343c0 2.837-2.301 5.137-5.138 5.137-2.837 0-5.138-2.3-5.138-5.137 0-2.838 2.301-5.137 5.138-5.137 2.837 0 5.138 2.299 5.138 5.137z"
                />
                <path
                  fill="#7d7d7d"
                  d="M173.007 122.68c0 2.342-1.898 4.24-4.239 4.24-2.342 0-4.24-1.898-4.24-4.24 0-2.342 1.898-4.239 4.24-4.239 2.341 0 4.239 1.898 4.239 4.239z"
                />
                <path
                  fill="#909090"
                  d="M183.878 104.567c0 3.848-3.118 6.966-6.965 6.966-3.848 0-6.966-3.118-6.966-6.966 0-3.847 3.118-6.965 6.966-6.965 3.847 0 6.965 3.118 6.965 6.965z"
                />
                <path
                  fill="#aaa"
                  d="M187.893 136.835c0 2.411-1.954 4.365-4.365 4.365-2.411 0-4.365-1.954-4.365-4.365 0-2.411 1.954-4.365 4.365-4.365 2.411 0 4.365 1.954 4.365 4.365z"
                />
                <path
                  fill="#fdfdfd"
                  d="M186.648 121.968c0 3.392-2.748 6.142-6.14 6.142-3.392 0-6.142-2.75-6.142-6.142 0-3.391 2.75-6.14 6.142-6.14 3.392 0 6.14 2.75 6.14 6.14z"
                />
                <path d="M190.101 112.323c0 2.095-1.698 3.793-3.793 3.793s-3.793-1.698-3.793-3.793 1.698-3.791 3.793-3.791 3.793 1.696 3.793 3.791z" />
                <path
                  fill="#bdbdbd"
                  d="M185.851 90.355c0 2.713-2.198 4.91-4.911 4.91-2.711 0-4.909-2.197-4.909-4.91 0-2.712 2.198-4.909 4.909-4.909 2.713 0 4.911 2.197 4.911 4.909z"
                />
                <path
                  fill="#959595"
                  d="M199.196 145.479c0 3.725-3.019 6.743-6.743 6.743s-6.741-3.019-6.741-6.743 3.018-6.742 6.741-6.742c3.724 0 6.743 3.019 6.743 6.742z"
                />
                <path
                  fill="#6f6f6f"
                  d="M199.991 132.093c0 3.028-2.454 5.483-5.483 5.483-3.027 0-5.482-2.455-5.482-5.483 0-3.027 2.455-5.482 5.482-5.482 3.029 0 5.483 2.455 5.483 5.482z"
                />
                <path
                  fill="#b5b5b5"
                  d="M188.083 129.553c0 1.09-.883 1.973-1.973 1.973-1.089 0-1.971-.883-1.971-1.973 0-1.089.882-1.971 1.971-1.971 1.09.001 1.973.883 1.973 1.971z"
                />
                <path
                  fill="#434343"
                  d="M201.55 110.741c0 2.833-2.295 5.128-5.127 5.128-2.833 0-5.129-2.295-5.129-5.128 0-2.832 2.296-5.127 5.129-5.127 2.832 0 5.127 2.295 5.127 5.127z"
                />
                <path
                  fill="#7d7d7d"
                  d="M209.136 155.743c0 3.202-2.597 5.799-5.797 5.799-3.203 0-5.798-2.597-5.798-5.799 0-3.201 2.595-5.798 5.798-5.798 3.201 0 5.797 2.597 5.797 5.798z"
                />
                <path
                  fill="#1e1e1e"
                  d="M212.399 142.967c0 3.323-2.694 6.019-6.019 6.019s-6.019-2.695-6.019-6.019c0-3.325 2.694-6.019 6.019-6.019s6.019 2.693 6.019 6.019z"
                />
                <path
                  fill="#9f9f9f"
                  d="M210.594 131.693c0 2.123-1.721 3.845-3.845 3.845-2.123 0-3.844-1.722-3.844-3.845s1.721-3.845 3.844-3.845c2.125 0 3.845 1.722 3.845 3.845z"
                />
                <path
                  fill="#171717"
                  d="M205.377 124.208c0 2.09-1.695 3.784-3.785 3.784-2.091 0-3.785-1.694-3.785-3.784 0-2.091 1.694-3.785 3.785-3.785 2.089 0 3.785 1.694 3.785 3.785z"
                />
                <path
                  fill="#1d1d1d"
                  d="M215.718 164.157c0 2.39-1.935 4.325-4.324 4.325s-4.324-1.936-4.324-4.325c0-2.388 1.936-4.324 4.324-4.324 2.39 0 4.324 1.936 4.324 4.324z"
                />
                <path
                  fill="#9d9d9d"
                  d="M227.324 147.341c0 3.945-3.198 7.143-7.142 7.143-3.945 0-7.143-3.197-7.143-7.143 0-3.944 3.197-7.142 7.143-7.142 3.944 0 7.142 3.197 7.142 7.142z"
                />
                <path
                  fill="#959595"
                  d="M226.797 128.009c0 4.26-3.452 7.713-7.712 7.713s-7.713-3.453-7.713-7.713c0-4.259 3.453-7.712 7.713-7.712s7.712 3.453 7.712 7.712z"
                />
                <path
                  fill="#040404"
                  d="M227.519 171.193c0 3.513-2.846 6.356-6.355 6.356-3.509 0-6.355-2.844-6.355-6.356 0-3.508 2.846-6.354 6.355-6.354 3.509 0 6.355 2.846 6.355 6.354z"
                />
                <path
                  fill="#e8e8e8"
                  d="M228.912 159.497c0 2.45-1.984 4.434-4.434 4.434-2.448 0-4.434-1.983-4.434-4.434 0-2.448 1.985-4.434 4.434-4.434s4.434 1.986 4.434 4.434z"
                />
                <path
                  fill="gray"
                  d="M228.36 137.642c0 1.438-1.167 2.604-2.605 2.604s-2.604-1.166-2.604-2.604c0-1.438 1.166-2.604 2.604-2.604 1.438 0 2.605 1.166 2.605 2.604z"
                />
                <path
                  fill="#757575"
                  d="M232.302 119.217c0 2.089-1.693 3.781-3.782 3.781s-3.781-1.692-3.781-3.781c0-2.088 1.692-3.781 3.781-3.781 2.089 0 3.782 1.693 3.782 3.781z"
                />
                <path
                  fill="#171717"
                  d="M231.65 98.405c0 2.988-2.423 5.411-5.412 5.411-2.99 0-5.411-2.423-5.411-5.411 0-2.989 2.421-5.412 5.411-5.412 2.989 0 5.412 2.423 5.412 5.412z"
                />
                <path
                  fill="#c2c2c2"
                  d="M230.362 88.786c0 1.576-1.278 2.855-2.855 2.855-1.576 0-2.854-1.279-2.854-2.855 0-1.577 1.277-2.854 2.854-2.854 1.577-.001 2.855 1.277 2.855 2.854z"
                />
                <path
                  fill="#838383"
                  d="M240.392 168.368c0 3.273-2.653 5.926-5.926 5.926s-5.925-2.652-5.925-5.926 2.652-5.926 5.925-5.926c3.273 0 5.926 2.652 5.926 5.926z"
                />
                <path
                  fill="#0e0e0e"
                  d="M239.639 155.964c0 2.72-2.205 4.927-4.928 4.927-2.72 0-4.925-2.207-4.925-4.927 0-2.721 2.205-4.928 4.925-4.928 2.723 0 4.928 2.207 4.928 4.928z"
                />
                <path
                  fill="#b9b9b9"
                  d="M244.481 143.15c0 3.779-3.063 6.844-6.844 6.844-3.777 0-6.842-3.064-6.842-6.844 0-3.778 3.064-6.842 6.842-6.842 3.781 0 6.844 3.064 6.844 6.842z"
                />
                <path
                  fill="#989898"
                  d="M235.837 132.36c0 2.251-1.826 4.075-4.077 4.075-2.252 0-4.076-1.824-4.076-4.075 0-2.252 1.824-4.078 4.076-4.078 2.251 0 4.077 1.826 4.077 4.078z"
                />
                <path
                  fill="#2e2e2e"
                  d="M241.988 116.551c0 2.4-1.945 4.346-4.346 4.346s-4.346-1.945-4.346-4.346 1.945-4.346 4.346-4.346 4.346 1.946 4.346 4.346z"
                />
                <path
                  fill="#707070"
                  d="M244.482 104.359c0 3.571-2.896 6.468-6.468 6.468s-6.468-2.896-6.468-6.468 2.896-6.467 6.468-6.467 6.468 2.896 6.468 6.467z"
                />
                <path
                  fill="#767676"
                  d="M252.315 168.184c0 2.886-2.339 5.225-5.226 5.225-2.888 0-5.229-2.339-5.229-5.225 0-2.888 2.341-5.228 5.229-5.228 2.887.001 5.226 2.341 5.226 5.228z"
                />
                <path
                  fill="#8e8e8e"
                  d="M251.582 154.318c0 2.967-2.403 5.372-5.37 5.372s-5.372-2.405-5.372-5.372 2.405-5.371 5.372-5.371 5.37 2.404 5.37 5.371z"
                />
                <path
                  fill="#e4e4e4"
                  d="M255.479 140.089c0 2.739-2.221 4.96-4.96 4.96-2.74 0-4.961-2.221-4.961-4.96s2.221-4.96 4.961-4.96c2.739 0 4.96 2.22 4.96 4.96z"
                />
                <path
                  fill="#555"
                  d="M248.767 130.855c0 2.984-2.419 5.403-5.403 5.403-2.983 0-5.402-2.419-5.402-5.403 0-2.983 2.419-5.402 5.402-5.402 2.984 0 5.403 2.419 5.403 5.402z"
                />
                <path
                  fill="#0a0a0a"
                  d="M249.325 120.922c0 1.94-1.572 3.511-3.513 3.511-1.938 0-3.511-1.57-3.511-3.511 0-1.938 1.572-3.511 3.511-3.511 1.941 0 3.513 1.572 3.513 3.511z"
                />
                <path
                  fill="#8a8a8a"
                  d="M253.737 111.52c0 2.769-2.245 5.013-5.014 5.013-2.768 0-5.013-2.244-5.013-5.013 0-2.768 2.245-5.013 5.013-5.013 2.769.001 5.014 2.246 5.014 5.013z"
                />
                <path
                  fill="#515151"
                  d="M245.492 94.775c0 1.565-1.27 2.836-2.835 2.836-1.566 0-2.836-1.271-2.836-2.836s1.27-2.836 2.836-2.836c1.565 0 2.835 1.271 2.835 2.836z"
                />
                <path
                  fill="#626262"
                  d="M253.81 90.053c0 2.335-1.894 4.228-4.228 4.228-2.337 0-4.229-1.893-4.229-4.228s1.893-4.229 4.229-4.229c2.335 0 4.228 1.894 4.228 4.229z"
                />
                <path
                  fill="#fbfbfb"
                  d="M258.556 122.214c0 2.204-1.787 3.989-3.989 3.989-2.204 0-3.99-1.785-3.99-3.989 0-2.204 1.786-3.99 3.99-3.99 2.202-.001 3.989 1.786 3.989 3.99z"
                />
                <path
                  fill="#f4f4f4"
                  d="M253.8 100.043c0 2.428-1.969 4.395-4.396 4.395-2.429 0-4.396-1.967-4.396-4.395 0-2.428 1.968-4.396 4.396-4.396 2.428-.001 4.396 1.968 4.396 4.396z"
                />
                <path
                  fill="#cdcdcd"
                  d="M141.808 161.567c0 1.107-.896 2.006-2.005 2.006-1.107 0-2.004-.898-2.004-2.006 0-1.106.896-2.005 2.004-2.005 1.109 0 2.005.899 2.005 2.005z"
                />
                <path
                  fill="#bebebe"
                  d="M151.47 148.221c0 1.513-1.226 2.738-2.739 2.738s-2.739-1.226-2.739-2.738c0-1.514 1.227-2.739 2.739-2.739 1.514 0 2.739 1.226 2.739 2.739z"
                />
                <path
                  fill="#a5a5a5"
                  d="M166.702 129.156c0 1.128-.914 2.042-2.042 2.042-1.127 0-2.041-.914-2.041-2.042 0-1.127.914-2.041 2.041-2.041 1.128 0 2.042.914 2.042 2.041z"
                />
                <path
                  fill="#818181"
                  d="M169.863 171.791c0 1.559-1.267 2.822-2.825 2.822-1.56 0-2.826-1.264-2.826-2.822 0-1.562 1.267-2.826 2.826-2.826 1.558 0 2.825 1.263 2.825 2.826z"
                />
                <path
                  fill="#020202"
                  d="M175.832 114.964c0 1.521-1.234 2.754-2.755 2.754s-2.755-1.233-2.755-2.754c0-1.522 1.234-2.755 2.755-2.755s2.755 1.232 2.755 2.755z"
                />
                <path
                  fill="#a5a5a5"
                  d="M196.966 120.968c0 2.494-2.021 4.514-4.514 4.514-2.493 0-4.514-2.02-4.514-4.514 0-2.492 2.021-4.512 4.514-4.512 2.493 0 4.514 2.019 4.514 4.512z"
                />
                <path
                  fill="#0e0e0e"
                  d="M216.004 156.093c0 1.45-1.176 2.626-2.627 2.626-1.449 0-2.625-1.176-2.625-2.626s1.176-2.626 2.625-2.626c1.452 0 2.627 1.175 2.627 2.626z"
                />
                <path
                  fill="#767676"
                  d="M216.656 138.228c0 1.163-.943 2.107-2.107 2.107-1.164 0-2.106-.944-2.106-2.107 0-1.165.942-2.107 2.106-2.107s2.107.942 2.107 2.107z"
                />
                <path
                  fill="#484848"
                  d="M233.518 111.831c0 1.294-1.049 2.343-2.344 2.343-1.294 0-2.343-1.049-2.343-2.343 0-1.295 1.049-2.345 2.343-2.345 1.295 0 2.344 1.05 2.344 2.345z"
                />
                <path
                  fill="#3c3c3c"
                  d="M238.318 124.827c0 1.605-1.301 2.907-2.906 2.907-1.605 0-2.908-1.302-2.908-2.907 0-1.606 1.303-2.907 2.908-2.907s2.906 1.3 2.906 2.907z"
                />
                <path
                  fill="#818181"
                  d="M236.546 95.177c0 1.131-.916 2.047-2.046 2.047-1.132 0-2.048-.916-2.048-2.047 0-1.131.916-2.047 2.048-2.047 1.13 0 2.046.916 2.046 2.047z"
                />
                <path
                  fill="#e9e9e9"
                  d="M243.417 161.707c0 1.211-.98 2.191-2.189 2.191-1.211 0-2.191-.98-2.191-2.191 0-1.209.98-2.19 2.191-2.19 1.208-.001 2.189.981 2.189 2.19z"
                />
                <path
                  fill="#b4b4b4"
                  d="M261.93 90.395c0 1.881-1.524 3.404-3.404 3.404s-3.404-1.523-3.404-3.404c0-1.88 1.524-3.404 3.404-3.404s3.404 1.524 3.404 3.404z"
                />
                <path
                  fill="#272727"
                  d="M256.144 105.713c0 .978-.793 1.771-1.771 1.771-.979 0-1.771-.794-1.771-1.771 0-.979.792-1.771 1.771-1.771.978-.001 1.771.791 1.771 1.771z"
                />
              </g>
            </svg>
          </div>
          <figcaption className="text-center">{filterName}</figcaption>
        </figure>

        <small className="transition block text-center mx-auto text-sm opacity-70 hover:opacity-100 focus-within:opacity-100">
          Thank you Ashley Sheridan for{" "}
          <a href="https://www.ashleysheridan.co.uk/blog/Testing+Colour+Blindness+Effects+Online+with+SVG+Filters">
            explaining how to write CSS filters
          </a>
          . Graphic CC BY-SA 3.0,{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Ishihara-Test.svg">
            Dan-yel
          </a>
          .
        </small>
      </div>

      <SlideFooter
        next="/talks/practically-accessible/26"
        nextCount={26}
        nextLabel={"Using built-in browser tools"}
      />
    </div>
  );
}
