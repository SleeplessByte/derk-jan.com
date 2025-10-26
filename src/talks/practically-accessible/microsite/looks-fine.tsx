import { useEffect, useRef, useState } from "react";
import logoSrc from "../../../assets/talks/practically-accessible/logo2-bug.png";

const DATA = {
  status: [
    ["Website", "green", "red"],
    ["E-mail", "green", "green"],
    ["Slack", "green", "green"],
    ["YouTube", "green", "red"],
    ["Twitter", "green", "red"],
    ["GitHub", "green", "red"],
    ["Meetup", "green", "green"],
    ["Phone", "red", "red"],
    ["Karaoke", "orange", "green"],
    ["Code of Conduct", "green", "green"],
    ["Sponsoring", "green", "green"],
  ],
};

export default function Page({
  disableBlackout = false,
}: {
  disableBlackout?: boolean;
}) {
  const { status: data } = DATA;

  const [blackout, setBlackout] = useState(false);

  useEffect(() => {
    if (disableBlackout) {
      setBlackout(false);
      return;
    }

    const timer = setTimeout(() => setBlackout(true), 1);
    return () => {
      clearTimeout(timer);
    };
  }, [disableBlackout]);

  const overflowRef = useRef<HTMLDivElement | null>(null);
  const [overflow, setHasOverflow] = useState(() => false);

  useEffect(() => {
    if (!overflowRef.current) {
      return;
    }

    let raf: undefined | number;

    function resized() {
      raf = undefined;

      if (overflowRef.current) {
        setHasOverflow(
          overflowRef.current.scrollHeight !== overflowRef.current.clientHeight,
        );
      }
    }

    function onResize() {
      if (raf) {
        return;
      }

      raf = requestAnimationFrame(resized);
    }

    setHasOverflow(
      overflowRef.current.scrollHeight !== overflowRef.current.clientHeight,
    );
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [overflowRef]);

  return (
    <>
      <div
        id="run"
        ref={overflowRef}
        className={`border-4 rounded-sm min-h-full relative w-full max-w-full ${
          blackout ? "blur-3xl" : "blur-0"
        }`}
        tabIndex={overflow ? 0 : undefined}
      >
        <div className="bg-[lightskyblue] pb-32">
          <div className="max-w-3xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 relative">
            <a href="https://techa11y.dev">
              <img
                src={logoSrc.src}
                width={563}
                height={120}
                className="h-auto max-w-[200px]"
              />
            </a>

            <button
              className="outline-none hover:opacity-50 text-zinc-800"
              onClick={() => open("mailto:amsterdam.rb@example.org")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="max-w-3xl mx-auto items-center py-4 px-4 sm:px-6 lg:px-8 hidden md:block">
            <div className="flex items-center justify-between h-16 border-zinc-800  border rounded-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0"></div>
                <div className="flex items-baseline space-x-4 ml-4">
                  <a
                    href="https://techa11y.dev/"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Home
                  </a>

                  <a
                    href=""
                    className="bg-zinc-900 text-zinc-100 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Status
                  </a>

                  <a
                    href="https://techa11y.dev/code-of-conduct/"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Code of Conduct
                  </a>

                  <a
                    href="https://techa11y.dev/sponsors"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Sponsorships
                  </a>

                  <a
                    href="https://techa11y.dev/jobs"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Jobs
                  </a>

                  <a
                    href="https://techa11y.dev/sessions-2021/"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Give a talk
                  </a>

                  <a
                    href="https://techa11y.dev/about/"
                    className="text-zinc-700 hover:bg-zinc-900/50 hover:text-zinc-900 px-3 py-2 rounded-md text-sm font-medium unstyled-link outline-none"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto items-center py-4 px-4 sm:px-6 lg:px-8 relative min-h-[200px] hidden md:block">
            <h3 className="text-2xl font-bold max-w-sm text-zinc-800">
              Welcome to the A11y.lowlands status page
            </h3>
            <div className="mt-2 text-lg font-normal leading-6 max-w-sm text-zinc-800">
              Below you'll find status information for each of the various
              activities and services this community provides.
            </div>

            <div className="absolute -bottom-12 right-8 max-w-[200px] w-full">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(2,0,0,2,0,0)">
                  <path
                    d="M55.589,85.627c2.173.667,2.013,3.547.271,4.881a.422.422,0,1,1-.541-.648,2.578,2.578,0,0,0,.749-1.978,1.182,1.182,0,0,0-1.145-1.154.6.6,0,0,1-.521-.572l-.125-3.949a.4.4,0,0,1,.333-.435.383.383,0,0,1,.438.327A24.035,24.035,0,0,1,55.589,85.627Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M51.029,91.354c.341,2.549,3.261,3.305,5.5,2.078a.438.438,0,0,0,.208-.56.429.429,0,0,0-.562-.207c-1.542.556-3.795.025-4.414-1.505A.377.377,0,1,0,51.029,91.354Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M56.943,80.356a3.811,3.811,0,0,1,2.207-.975.422.422,0,0,0,.1-.837,3.208,3.208,0,0,0-3.1.941c-.246.271-1.106,1.339-.666,1.675C55.811,81.408,55.922,81.1,56.943,80.356Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M68.584,67.879a2.39,2.39,0,0,0-1.77.049c.358-1.27-.708-2.273-2.562-1.4-.815.4-.452.491-.624-.222A1.743,1.743,0,0,0,60.92,65.4c-.747.406-1.5,1.405-2.374,2.01-3.746,2.568-8.766-2.946-11.87,3.223a8.279,8.279,0,0,0-.624,2.106c-3.08,1.328-3.343,5.647-2.854,8.968a15.351,15.351,0,0,0,.288,1.61,3.477,3.477,0,0,0-.746,4.312,4.956,4.956,0,0,0,2.6,1.851c.122,4.443,1.391,7.684,5.5,9.469l.125,2.606a.422.422,0,0,0,.843-.04V98.609a.5.5,0,0,0-.3-.435,7.593,7.593,0,0,1-3.936-3.657,12.619,12.619,0,0,1-1.02-5.458.571.571,0,0,0-.354-.55c-.522-.209-2.109-.749-2.457-1.4a2.51,2.51,0,0,1,.275-3.024c.471.11.666-.413,1.495-.422,2.272-.027,3.655-2.067,4.208-4.29a4.464,4.464,0,0,1,1.269.229c1.648.616,1.694,1.711,2.249,1.389.656-.38-.454-1.664-1.062-2.116a3.071,3.071,0,0,0-2.248-.6,9.635,9.635,0,0,0,.082-1.114,11.814,11.814,0,0,0,6.935,1.254,13.5,13.5,0,0,0,3.207-.729,12.275,12.275,0,0,0,1.437,4.844c.25.393.578.026,1.437.552.073.045.051.009.1.079a2.866,2.866,0,0,1-1.354,4.283.591.591,0,0,0-.4.6,12.287,12.287,0,0,1-2.353,7.514A5.592,5.592,0,0,1,54.59,97.9a.422.422,0,0,0-.021.843,6.011,6.011,0,0,0,2.4-.375,11.4,11.4,0,0,0,.138,3.155.427.427,0,0,0,.854.021,10.943,10.943,0,0,0,.167-1.939,5.774,5.774,0,0,0-.22-1.682c3.046-1.765,4.735-6.013,4.676-9.534a3.848,3.848,0,0,0,1.243-5.77,8.747,8.747,0,0,0,.861-5.758,6.67,6.67,0,0,0,3.373-2.425,1.6,1.6,0,0,0-.229-2.337C69.88,70.272,69.643,68.363,68.584,67.879Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M56.688 84.031 A1.662 1.158 0 1 0 60.012 84.031 A1.662 1.158 0 1 0 56.688 84.031 Z"
                    fill="#222"
                    transform="translate(-39.41 53.885) rotate(-38.086)"
                  ></path>
                  <path
                    d="M49.294 84.155 A1.158 1.662 0 1 0 51.610 84.155 A1.158 1.662 0 1 0 49.294 84.155 Z"
                    fill="#222"
                    transform="translate(-46.906 71.954) rotate(-51.914)"
                  ></path>
                  <path
                    d="M82.516,171.627c-.4.16,3.994.1-45.232.1a3.759,3.759,0,0,1-3.852-3.531c-2.236-32.9-2.278-31.376-1.9-32.51a3.95,3.95,0,0,1,3.6-2.617c5.852-.131,44.961-.954,49.188-1.039a3.861,3.861,0,0,1,3.915,4.1l-2.207,32.045A3.69,3.69,0,0,1,82.516,171.627Zm-.021-.775a2.893,2.893,0,0,0,2.728-2.724c2.121-35.119,2.057-32.371,1.77-33.184a2.756,2.756,0,0,0-1.541-1.595c-.9-.359,2.212-.23-50.292.943a2.7,2.7,0,0,0-2.624,2.87l2.02,30.964a2.861,2.861,0,0,0,2.728,2.631C86.351,170.757,82.166,170.705,82.5,170.852Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M63.5,152.584a3.658,3.658,0,0,0-3.685-3.547,3.586,3.586,0,0,0-3.666,3.547,3.676,3.676,0,1,0,7.351,0Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M64.288,145.373c-1.591-.346-3.123-.089-3.8,1.39a3.588,3.588,0,0,0-.308,1.4.294.294,0,0,0,.227.288,3.778,3.778,0,0,0,2.624-.375,3.544,3.544,0,0,0,1.566-2.22A.41.41,0,0,0,64.288,145.373Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M169.586,71.178a11.394,11.394,0,0,1,10.645-7.771c8.573-.04,14.173,9.426,10.127,17.335a4.833,4.833,0,0,1,4.655,4.945,4.7,4.7,0,0,1-4.705,4.837H161.645a.5.5,0,0,1,0-.994h28.663a3.811,3.811,0,0,0,3.52-3.843,3.644,3.644,0,0,0-3.52-3.733h-.985a.608.608,0,0,1-.534-.313c-.339-.657.485-.761,1.252-3.4a10.932,10.932,0,0,0-2.52-10.473,10.18,10.18,0,0,0-17.134,4.1.483.483,0,0,1-.55.333,3.539,3.539,0,0,0-4.121,2.645.444.444,0,0,1-.484.335l-.567-.035a5.8,5.8,0,0,0-4.822,2.6.39.39,0,0,1-.651-.43,6.6,6.6,0,0,1,5.756-3.031A4.475,4.475,0,0,1,169.586,71.178Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M65.6,37.61a13.86,13.86,0,0,1,13-9.35c10.866.038,17.071,12.352,11.86,21.365h.47a.42.42,0,0,1,0,.839h-1.2a.427.427,0,0,1-.368-.646c5.458-8.656-.5-20.509-10.758-20.474a12.782,12.782,0,0,0-12.045,9.1.594.594,0,0,1-.674.4A4.3,4.3,0,0,0,60.907,42.1a.6.6,0,0,1-.653.453l-.694-.035a7.323,7.323,0,0,0-7.084,7.522.617.617,0,0,1-.612.607c-4.169,0-5.979,5.106-3.308,8a4.435,4.435,0,0,0,3.185,1.526h39.2c.2,0,.367.274.367.485s-.163.485-.367.485h-39.2a5.413,5.413,0,0,1-4.062-1.687c-3.369-3.615-1.067-9.617,3.592-10.006a8.45,8.45,0,0,1,8.615-8.117A5.454,5.454,0,0,1,65.6,37.61Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M159.318,67.073c-.023-2.645-.157-12.149-.2-15.867a2.693,2.693,0,0,0-1.3-2.3l-5.173-3.185s-5.845-2.958-25.777-3.165c-19.909-.208-26.09,3.348-26.09,3.348s-3.494,1.974-5.532,3.116a2.783,2.783,0,0,0-1.388,2.406c.022,3.809.089,13.255.112,16.066a2.736,2.736,0,0,0,.94,2.031c2.128,1.839,9.115,5.095,31.868,5.095,23.224,0,29.9-3.666,31.8-5.63A2.655,2.655,0,0,0,159.318,67.073Zm-57.1-18.8a41.459,41.459,0,0,0,9.674,1.9,156.845,156.845,0,0,0,29.719-.006c9.6-1,9.677-2.368,10.01-1.747a.264.264,0,0,1-.134.322c-9.35,3.9-40.307,3.806-49.471.029A.27.27,0,0,1,102.223,48.27Zm55.334,3.912c-4.5,2.756-14.4,3.982-19.668,4.417a145.027,145.027,0,0,1-20.548.141c-5.78-.38-16.015-1.507-21.125-4.169a.305.305,0,0,1-.111-.364.272.272,0,0,1,.358-.116c5.03,2.555,15.238,3.558,20.906,3.9a154.423,154.423,0,0,0,20.465-.155c18.574-1.427,19.248-4.78,19.806-3.993A.269.269,0,0,1,157.557,52.182Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M159.271,80.967a2.7,2.7,0,0,0-1.308-2.3c-5.7-3.544-5.21-3.237-6-3.516-11.892,3.325-38.9,3.114-50.38.207-.567.234-.208.047-6.175,3.423a2.708,2.708,0,0,0-1.385,2.4c.019,3.809.077,13.258.115,16.066a2.67,2.67,0,0,0,.924,2.032c2.135,1.839,9.118,5.094,31.875,5.094,23.218,0,29.893-3.665,31.8-5.629a2.724,2.724,0,0,0,.75-1.914C159.444,94.19,159.329,84.685,159.271,80.967Zm-56.882-2.935a41.469,41.469,0,0,0,9.675,1.9,156.73,156.73,0,0,0,29.718-.007c9.6-1,9.677-2.367,10.011-1.746a.266.266,0,0,1-.134.322c-9.38,3.908-40.344,3.792-49.471.029A.27.27,0,0,1,102.389,78.032Zm55.335,3.911c-4.506,2.756-14.4,3.982-19.668,4.417a145.3,145.3,0,0,1-20.548.141c-5.794-.381-16.019-1.509-21.126-4.169a.3.3,0,0,1-.11-.364.274.274,0,0,1,.358-.117c5.03,2.556,15.242,3.559,20.905,3.9A154.234,154.234,0,0,0,138,85.6c18.577-1.426,19.244-4.781,19.805-3.992A.269.269,0,0,1,157.724,81.943Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M159.276,110.441a2.741,2.741,0,0,0-1.312-2.3c-5.752-3.559-5.123-3.211-6-3.517-11.933,3.328-38.868,3.116-50.4.208-.544.236.01-.07-6.164,3.424a2.733,2.733,0,0,0-1.4,2.4c.021,1.9.042,5.181.062,8.355a41.463,41.463,0,0,1,8.476,12.822c4.831,1.118,12.432,2.016,24.386,2.016,23.22,0,29.883-3.665,31.8-5.629a2.825,2.825,0,0,0,.75-1.914C159.442,123.663,159.317,114.161,159.276,110.441Zm-57.223-2.785c.189-.587.893.779,10.011,1.753a156.727,156.727,0,0,0,29.718-.006c9.6-1,9.677-2.368,10.011-1.747a.266.266,0,0,1-.134.322,40.967,40.967,0,0,1-9.787,2.1,137.277,137.277,0,0,1-29.9,0,41.391,41.391,0,0,1-9.786-2.072A.257.257,0,0,1,102.053,107.656Zm55.671,3.762c-4.506,2.756-14.4,3.982-19.668,4.417a145,145,0,0,1-20.548.141c-5.794-.381-16.019-1.509-21.126-4.169a.3.3,0,0,1-.11-.364.272.272,0,0,1,.358-.116c5.03,2.555,15.242,3.558,20.905,3.9A154.4,154.4,0,0,0,138,115.072c18.577-1.426,19.245-4.782,19.805-3.993A.269.269,0,0,1,157.724,111.418Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M159.276,140.2a2.738,2.738,0,0,0-1.312-2.3c-5.741-3.553-5.121-3.21-6-3.517-11.713,3.266-36.8,2.994-48.209.7,2.249,7.016,3.019,16.011-.583,26.654,4.873,1.052,12.328,1.876,23.761,1.876,23.22,0,29.883-3.667,31.8-5.629a2.825,2.825,0,0,0,.75-1.915C159.442,153.426,159.317,143.921,159.276,140.2Zm-52.609-1.494c.085-.568.468.139,8.241.75a162.04,162.04,0,0,0,20.94.163c4.067-.226,11.8-.836,15.609-2.34a.251.251,0,1,1,.2.459c-3.931,1.642-11.534,2.387-15.767,2.654-8.586.543-20.606.285-29.024-1.371A.257.257,0,0,1,106.667,138.708Zm51.057,2.471c-4.514,2.775-14.358,4-19.641,4.424a135.955,135.955,0,0,1-30.2-.968.288.288,0,0,1-.247-.307c.109-.595.633.16,9.682.689A156.333,156.333,0,0,0,138,144.822c18.616-1.454,19.251-4.764,19.805-3.982A.269.269,0,0,1,157.724,141.179Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M39.471,105.56C14.583,116.691,2.116,144.537,7.338,159.871c3.192,9.373,11.621,11.4,21.408,10.2a.422.422,0,1,1,.1.837c-10.288,1.337-19.061-.814-22.512-10.683C1.785,147.2,9.474,130.2,18.479,119.8a57.781,57.781,0,0,1,21.075-15.454.534.534,0,0,1,.708.3c3.089,7.752,3.972,17.338,4.728,25.423a.394.394,0,0,1-.355.42.384.384,0,0,1-.416-.347C43.446,122.277,42.388,113,39.471,105.56Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M66.855,103.294c1.421,9.155,1.416,18.35,1.416,27.577a.385.385,0,0,1-.77.006c-.067-9.121-.338-19.539-1.9-28.266a.568.568,0,0,1,.708-.631c18.8,5.06,31.664,21.821,35.277,40.559,2.692,13.962-.149,26.5-14.431,27a.422.422,0,0,1-.042-.843c13.627-.54,16.006-12.581,13.369-25.944C96.873,124.434,84.39,108.588,66.855,103.294Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M37.7,129.078a41.523,41.523,0,0,0-6.081-1.756.62.62,0,0,1-.458-.779c1.655-5.174,2.332-9.171,4.643-16.408a.391.391,0,0,1,.75.223c-1.53,5.452-2.3,10.484-4.04,15.919a45.742,45.742,0,0,1,6.935,2.317.527.527,0,0,1-.042,1,29.157,29.157,0,0,0-5.706,2.4.42.42,0,0,1-.4-.741A35.742,35.742,0,0,1,37.7,129.078Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M78.871,125.827c-1.407-4.559-4.249-11.61-6.747-17.591a.386.386,0,0,1,.708-.308c1.487,3.338,5.387,11.031,7.372,18.159a.608.608,0,0,1-.063.471c-.242.418-.048.056-5.289,1.553a42.36,42.36,0,0,1,4,1.427.421.421,0,0,1-.312.783,38.235,38.235,0,0,0-5.769-1.695.519.519,0,0,1-.041-1C74.781,127.011,76.665,126.378,78.871,125.827Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M65.148,108.228c-.8-.192-.213.815-2.624,7.174a50.941,50.941,0,0,0-6.451-5.973c1.83-2.493,2.822-3.689,4.972-6.8,1.194.126,2.492.287,3.665.508a.421.421,0,1,0,.167-.825c-1.346-.3-2.623-.5-4-.693a.474.474,0,0,0-.458.2c-1.528,2.07-4.049,5.246-5.353,6.939a48.083,48.083,0,0,0-6.33-6.031c-.3-.216-.484-.173-2.645.494-1.645.512-3.249,1.12-4.894,1.595a.385.385,0,0,0,.188.747c2.289-.534,4.59-1.337,6.851-1.8A65.535,65.535,0,0,1,54.3,109.71c-1.321,1.5-4.08,4.358-5.5,5.9-1.593-3.467-2.678-6.449-4.539-9.883a.388.388,0,0,0-.688.36c1.334,2.544,3.084,7.471,4.519,10.8a.583.583,0,0,0,.958.156c1.765-1.958,3.589-3.664,5.8-6.11-.214,7.936.5,12.66.6,17.937a.427.427,0,0,0,.854,0c.2-7.209-.4-13.033-.6-18.218a61.27,61.27,0,0,1,6.615,6.083.524.524,0,0,0,.874-.173,52.765,52.765,0,0,0,2.291-7.836A.434.434,0,0,0,65.148,108.228Z"
                    fill="#222"
                  ></path>
                  <path
                    d="M189.467,138.442a3.06,3.06,0,0,0-5.214,1.791c-.2-.058-11.48-.212-12.834-.2.175-4.752.244-10.709.182-15.2a27.434,27.434,0,0,0,5.808.006A2.959,2.959,0,0,0,180.4,127.3v-.035A2.977,2.977,0,0,0,182.6,122.2a3.062,3.062,0,0,0-5.207,1.731,27.3,27.3,0,0,0-5.8.009c-.052-3.472-.12-6.375-.143-7.335a4.242,4.242,0,0,0,3.573-4.085,4.3,4.3,0,1,0-8.6,0,4.22,4.22,0,0,0,4.175,4.164c-.281,11.5-.147,18.6.029,23.366-2.116.036-4.865.126-6.474.2a.381.381,0,0,0,0,.762c2.724.129,6.972.244,10.793.218a58.086,58.086,0,0,0,.025,8.818,4.283,4.283,0,0,0-2.572,7.318,4.209,4.209,0,0,0,3,1.172v-.033a4.227,4.227,0,0,0,4.311-4.13,4.283,4.283,0,0,0-3.884-4.329,58.792,58.792,0,0,0,.024-8.823c.1,0,8.326-.166,8.426-.2a2.958,2.958,0,0,0,3,2.521v-.035A2.977,2.977,0,0,0,189.467,138.442Zm-11.024-14.054a1.952,1.952,0,0,1,3.9,0,2.046,2.046,0,0,1-1.944,2.118v-.034A2.022,2.022,0,0,1,178.443,124.388Zm-9.984-14.109a3.194,3.194,0,0,1,4.477.01,3.273,3.273,0,0,1,.084,4.545,3.234,3.234,0,0,1-2,1.018.4.4,0,0,0-.136.023c-.059,0-.117.008-.177.01v-.033A3.269,3.269,0,0,1,168.459,110.279Zm10.121,44.1a3.288,3.288,0,0,1-3.186,3.368v-.034a3.268,3.268,0,0,1-2.249-5.572A3.2,3.2,0,0,1,178.58,154.375ZM188.7,142.064a2.083,2.083,0,0,1-1.43.686v-.035a2.02,2.02,0,0,1-1.957-2.084,1.953,1.953,0,0,1,1.957-1.9A1.993,1.993,0,0,1,188.7,142.064Z"
                    fill="#fd2846"
                  ></path>
                  <path
                    d="M92.084,84.944c-1.022-.071-2.839-.161-4.285-.2a23.413,23.413,0,0,0,0-5.694,2.989,2.989,0,0,0,2.571-2.867,3.147,3.147,0,0,0-6.293,0,2.979,2.979,0,0,0,2.851,2.866,24.677,24.677,0,0,0-.06,5.675c-2.509-.034-6.045.064-8.534.183a2.317,2.317,0,0,0-3.868-1.2,2.127,2.127,0,0,0,1.623,3.664v.035a2.161,2.161,0,0,0,2.216-1.651c1.487.072,3.66.146,5.525.175a25.986,25.986,0,0,0,.01,5.436,3.044,3.044,0,0,0-2.69,3.058,2.988,2.988,0,0,0,3.154,2.867v.034a3.1,3.1,0,0,0,2.146-.771,2.989,2.989,0,0,0-1.683-5.185,25.177,25.177,0,0,0,.012-5.427q3.664.032,7.3-.223A.388.388,0,0,0,92.084,84.944ZM85.2,76.182a2.046,2.046,0,0,1,4.076,0,2.058,2.058,0,0,1-2.045,2.058v.034A2.079,2.079,0,0,1,85.2,76.182Zm-8.237,9.974a1.322,1.322,0,0,1-.874.407V86.6a1.218,1.218,0,0,1-1.162-1.267,1.146,1.146,0,0,1,1.162-1.041A1.108,1.108,0,0,1,76.966,86.156Zm9.386,8.268a2.058,2.058,0,0,1-2.045,2.058v.035a1.988,1.988,0,0,1-1.4-3.423A2.054,2.054,0,0,1,86.352,94.424Z"
                    fill="#fd2846"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="-mt-32 ">
          <div className="max-w-3xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6 relative light">
              <div className="rounded-md bg-blue-100 border border-blue-600 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <div className="text-sm text-blue-700">
                      We zijn een internationale community en al onze services
                      zijn in het engels. Deze status pagina is daarom ook
                      alleen in het Engels beschikbaar. Kom je er niet uit? Neem
                      dan contact met ons op.
                    </div>
                    <div className="mt-3 text-sm md:mt-0 md:ml-6">
                      <a
                        className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600 outline-none unstyled-link"
                        onClick={() => open("mailto:a11y@example.org")}
                      >
                        Contact &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-zinc-600 font-semibold">Legend</div>
              <ul className="flex space-x-4 items-center mt-1">
                <li className="flex items-center space-x-1">
                  <span className="rounded-full w-4 h-4 bg-green-500 block" />
                  <span className="text-zinc-400">Available</span>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="rounded-full w-4 h-4 bg-[#c49b21] block" />
                  <span className="text-zinc-400">Issue</span>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="rounded-full w-4 h-4 bg-[#e66b6b] block" />
                  <span className="text-zinc-400">Outage</span>
                </li>
              </ul>

              <div className="mt-4 text-zinc-600 font-semibold">
                Current status
              </div>
              <div className="shadow-sm rounded-sm ring-1 ring-black ring-opacity-5 max-w-sm mt-1 overflow-auto">
                <table className="min-w-full">
                  <thead className="bg-zinc-100">
                    <tr>
                      <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-900 sm:pl-6"></td>

                      <td className="relative py-3.5 px-3 text-zinc-900 italic">
                        Amsterdam
                      </td>

                      <td className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-zinc-900 italic">
                        Utrecht
                      </td>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {data.map(([key, first, second]) => (
                      <tr key={key}>
                        <th className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-zinc-900 sm:pl-6 text-right">
                          {key}
                        </th>

                        {second !== undefined ? (
                          <td className="relative whitespace-nowrap py-4 px-3 text-center text-sm font-medium">
                            <div className="flex items-center space-x-1">
                              <StatusIndicator value={first} />
                            </div>
                          </td>
                        ) : null}

                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                          <div className="flex items-center space-x-1">
                            <StatusIndicator value={second || first} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {blackout ? (
        <button
          type="button"
          onClick={() => setBlackout(false)}
          className="transition w-full p-4 absolute bottom-0 left-0 text-zinc-900 bg-white/10 hover:bg-white/50 active:bg-white/90"
        >
          Turn on sight
        </button>
      ) : null}
    </>
  );
}

function StatusIndicator({ value }: { value: string }) {
  switch (value) {
    case "green": {
      return <span className="rounded-full w-4 h-4 bg-green-500 block" />;
    }

    case "orange": {
      return <span className="rounded-full w-4 h-4 bg-[#c49b21] block" />;
    }

    case "red": {
      return <span className="rounded-full w-4 h-4 bg-[#e66b6b] block" />;
    }

    default: {
      return null;
    }
  }
}
