// A small headless Chrome driver over the DevTools Protocol, for screenshots and browser checks.
// Needs Node 22 or later (global fetch and WebSocket). Set CHROME_PATH when Chrome is elsewhere.
//
//   import { launch, sleep } from "./src/tools/cdp.mjs";
//   const browser = await launch({ width: 390, height: 844, scale: 2, touch: true });
//   await browser.goto("http://localhost:4321/events/2026-gay-cafe/nl/");
//   await browser.shot("C:/…/scratchpad/opener.png");
//   await browser.close();
import { spawn } from "node:child_process";
import { once } from "node:events";
import {
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CHROME =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";

// One folder for every profile, named after the Node process that made it, so the
// next run can remove what a crashed run left behind.
const PROFILES = join(tmpdir(), "derk-jan-com-cdp");

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function launch({
  width = 1440,
  height = 900,
  scale = 1,
  touch = false,
  /** Shows classic scrollbars, as Windows has them, for checks on layout shifts. */
  scrollbars = false,
  args = [],
} = {}) {
  mkdirSync(PROFILES, { recursive: true });
  removeStaleProfiles();
  const profile = mkdtempSync(join(PROFILES, `${process.pid}-`));
  const port = 9300 + Math.floor(Math.random() * 500);
  const chrome = spawn(
    CHROME,
    [
      "--headless=new",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profile}`,
      `--window-size=${width},${height}`,
      ...(scrollbars ? [] : ["--hide-scrollbars"]),
      "--no-first-run",
      "--autoplay-policy=no-user-gesture-required",
      "--mute-audio",
      ...args,
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  // A crashed script must not leave its browser running.
  const killChrome = () => chrome.kill();
  process.once("exit", killChrome);

  const page = await findPage(port);
  const socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve) =>
    socket.addEventListener("open", resolve, { once: true }),
  );

  let lastId = 0;
  const pending = new Map();
  const listeners = [];

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        reject(new Error(message.error.message));
      } else {
        resolve(message.result);
      }
      return;
    }
    if (message.method) {
      for (const listener of [...listeners]) {
        listener(message);
      }
    }
  });

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      lastId += 1;
      pending.set(lastId, { resolve, reject });
      socket.send(JSON.stringify({ id: lastId, method, params }));
    });

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: scale,
    mobile: touch,
  });
  if (touch) {
    // Makes (hover: none) and (pointer: coarse) match, as on a phone.
    await send("Emulation.setTouchEmulationEnabled", {
      enabled: true,
      maxTouchPoints: 5,
    });
    await send("Emulation.setEmitTouchEventsForMouse", {
      enabled: true,
      configuration: "mobile",
    });
  }

  /** Screencast frames while a recording runs. */
  let recording;
  listeners.push((message) => {
    if (message.method === "Page.screencastFrame" && recording) {
      recording.push({
        data: message.params.data,
        timestamp: message.params.metadata.timestamp,
      });
      // Chrome sends the next frame only after this.
      void send("Page.screencastFrameAck", {
        sessionId: message.params.sessionId,
      });
    }
  });

  const logs = [];
  listeners.push((message) => {
    if (message.method === "Runtime.consoleAPICalled") {
      const text = message.params.args
        .map((arg) => arg.value ?? arg.description)
        .join(" ");
      logs.push(`[${message.params.type}] ${text}`);
    }
    if (message.method === "Runtime.exceptionThrown") {
      const details = message.params.exceptionDetails;
      logs.push(
        `[exception] ${details.exception?.description ?? details.text}`,
      );
    }
  });

  return {
    send,
    logs,
    on(listener) {
      listeners.push(listener);
    },
    /** For example `{ "prefers-color-scheme": "dark", "prefers-reduced-motion": "reduce" }`. */
    media(features) {
      return send("Emulation.setEmulatedMedia", {
        features: Object.entries(features).map(([name, value]) => ({
          name,
          value,
        })),
      });
    },
    async goto(url) {
      const loaded = new Promise((resolve) => {
        const listener = (message) => {
          if (message.method === "Page.loadEventFired") {
            listeners.splice(listeners.indexOf(listener), 1);
            resolve();
          }
        };
        listeners.push(listener);
      });
      await send("Page.navigate", { url });
      await loaded;
    },
    /** With `userGesture`, the expression may start media or open a share sheet. */
    async eval(expression, { userGesture = true } = {}) {
      const response = await send("Runtime.evaluate", {
        expression,
        awaitPromise: true,
        returnByValue: true,
        userGesture,
      });
      if (response.exceptionDetails) {
        throw new Error(response.exceptionDetails.exception?.description);
      }
      return response.result.value;
    },
    async mouse(type, x, y) {
      const moving = type === "mouseMoved";
      await send("Input.dispatchMouseEvent", {
        type,
        x,
        y,
        button: moving ? "none" : "left",
        clickCount: moving ? 0 : 1,
      });
    },
    async click(x, y) {
      await this.mouse("mouseMoved", x, y);
      await this.mouse("mousePressed", x, y);
      await this.mouse("mouseReleased", x, y);
    },
    async key(key, code = key, keyCode = 0) {
      for (const type of ["keyDown", "keyUp"]) {
        await send("Input.dispatchKeyEvent", {
          type,
          key,
          code,
          windowsVirtualKeyCode: keyCode,
        });
      }
    },
    /** Starts recording the viewport, for motion that screenshots cannot show. */
    async startRecording() {
      recording = [];
      await send("Page.startScreencast", { format: "jpeg", quality: 85 });
    },
    /**
     * Stops recording and writes an MP4 that keeps each frame's real
     * duration, so stutter shows. Needs ffmpeg on the PATH. Returns the path.
     */
    async stopRecording(path) {
      await send("Page.stopScreencast");
      const frames = recording;
      recording = undefined;
      const folder = mkdtempSync(join(tmpdir(), "derk-jan-com-video-"));
      const file = (index) =>
        join(folder, `${index}.jpg`).replaceAll("\\", "/");
      const list = frames.flatMap(({ data, timestamp }, index) => {
        writeFileSync(file(index), Buffer.from(data, "base64"));
        const next = frames[index + 1]?.timestamp ?? timestamp + 1 / 30;
        return [`file '${file(index)}'`, `duration ${next - timestamp}`];
      });
      // The concat demuxer drops the last duration unless its file repeats.
      list.push(`file '${file(frames.length - 1)}'`);
      writeFileSync(join(folder, "frames.txt"), list.join("\n"));

      const ffmpeg = spawn(
        "ffmpeg",
        [
          ...["-v", "error", "-y", "-f", "concat", "-safe", "0"],
          ...["-i", join(folder, "frames.txt")],
          // H.264 needs even dimensions.
          ...["-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2"],
          ...["-pix_fmt", "yuv420p", "-c:v", "libx264", "-r", "60", path],
        ],
        { stdio: "inherit" },
      );
      const [code] = await once(ffmpeg, "exit");
      rmSync(folder, { recursive: true, force: true });
      if (code !== 0) {
        throw new Error(`ffmpeg stopped with code ${code}`);
      }
      return path;
    },
    /** Saves a PNG of the viewport, or of `clip` in CSS pixels, and returns the path. */
    async shot(path, clip) {
      const options = { format: "png" };
      if (clip) {
        options.clip = { ...clip, scale: 1 };
      }
      const { data } = await send("Page.captureScreenshot", options);
      writeFileSync(path, Buffer.from(data, "base64"));
      return path;
    },
    async close() {
      socket.close();
      process.off("exit", killChrome);
      chrome.kill();
      if (chrome.exitCode === null && chrome.signalCode === null) {
        await once(chrome, "exit");
      }
      // Chrome's helper processes hold the profile for a moment after it exits.
      await rm(profile, {
        recursive: true,
        force: true,
        maxRetries: 10,
        retryDelay: 200,
      });
    },
  };
}

function removeStaleProfiles() {
  for (const name of readdirSync(PROFILES)) {
    if (isRunning(Number.parseInt(name, 10))) {
      continue;
    }
    try {
      rmSync(join(PROFILES, name), { recursive: true, force: true });
    } catch {
      // A browser from that run is still shutting down; the next run tries again.
    }
  }
}

function isRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    // EPERM: the process exists, but belongs to someone else.
    return error.code === "EPERM";
  }
}

async function findPage(port) {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json`);
      const page = (await response.json()).find(
        (target) => target.type === "page",
      );
      if (page) {
        return page;
      }
    } catch {
      // Chrome is not listening yet.
    }
    await sleep(200);
  }
  throw new Error(`Chrome did not open a page on port ${port}`);
}
