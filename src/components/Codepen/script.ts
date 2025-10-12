// Restored on 2025-10-11 (21:32) from
// - https://public.codepenassets.com/embed/index.js and
// - https://public.codepenassets.com/embed/index.js.map

enum HTTP_HEADERS {
  CUSTOM_CSRF_TOKEN = "x-csrf-token",
  LOGIN_AS_USER_ID = "x-login-as-user-id",
}
const ROUTES = {
  CREATE: "/create",
  FOLLOWING: "/following",
  NEW_EDITOR: "/editor",
  NEW_PEN: "/pen",
  SEARCH: "/search",
  SHARED_WORK: "/shared",
  TRENDING: "/trending",
  YOUR_WORK: "/your-work",
};
enum SHARED_WORK_TABS {
  WITH_YOU = "with-you",
  WITH_OTHERS = "with-others",
  DEPLOYED = "deployed",
  INVITES = "invites",
  ACTIVITY = "activity",
}

const TypesUtil = {
  // IMPORTANT: if this file changes, we need to update the Types Object in extended-base.js.
  //  extended-base cant rely on this file, so we have some duplication
  _HTML_TYPES: [
    "html",
    "xml",
    "haml",
    "markdown",
    "slim",
    "pug",
    "application/x-slim",
  ],
  _CSS_TYPES: [
    "css",
    "less",
    "scss",
    "sass",
    "stylus",
    "postcss",
    "text/css",
    "text/x-sass",
    "text/x-scss",
    "text/x-less",
    "text/x-styl",
  ],
  _JS_TYPES: [
    "js",
    "javascript",
    "coffeescript",
    "livescript",
    "typescript",
    "babel",
    "text/javascript",
    "text/x-coffeescript",
    "text/x-livescript",
    "text/typescript",
  ],
  _CUSTOM_EDITOR_TYPES: {
    vue: "js",
    flutter: "js",
  },
  /*
   * Translate an editor mode (xml, javascript, css) to a valid
   * Data object data type (html, css, js)
   */
  cmModeToType: function (mode: string) {
    const inputMode = this._getSafeInputMode(mode);
    return this._getType(inputMode);
  },
  // NOTE: Be very careful in here. Several bugs came from here.
  // NOTE: mode for HTML is an object. CSS and JS are strings
  // It is not that way for CSS or JS.
  _getSafeInputMode: function (mode: string | { name: string }) {
    let inputMode = "";
    if (typeof mode === "string") {
      inputMode = mode;
    } else if (mode && typeof mode === "object" && "name" in mode) {
      inputMode = mode.name;
    }
    return inputMode.toLowerCase();
  },
  syntaxToType: function (syntax: string) {
    return this._getType(syntax);
  },
  // Match more closely with extended-base.js and drop the underscore.js requirement
  _getType: function (syntax: string) {
    if (this._HTML_TYPES.includes(syntax)) {
      return "html";
    } else if (this._CSS_TYPES.includes(syntax)) {
      return "css";
    } else if (this._JS_TYPES.includes(syntax)) {
      return "js";
    } else if (
      this._CUSTOM_EDITOR_TYPES[
        syntax as keyof typeof this._CUSTOM_EDITOR_TYPES
      ]
    ) {
      return this._CUSTOM_EDITOR_TYPES[
        syntax as keyof typeof this._CUSTOM_EDITOR_TYPES
      ];
    } else {
      return "unknown";
    }
  },
};

enum ParamKeys {
  activeTabColor = "active-tab-color",
  activeLinkColor = "active-link-color",
  animations = "animations",
  border = "border",
  borderColor = "border-color",
  class = "class",
  customCssUrl = "custom-css-url",
  defaultTab = "default-tab",
  editable = "editable",
  file = "file",
  height = "height",
  host = "host",
  href = "href",
  linkLogoColor = "link-logo-color",
  penTitle = "pen-title",
  prefill = "prefill",
  preview = "preview",
  safe = "safe",
  slugHash = "slug-hash",
  tabBarColors = "tab-bar-colors",
  tabLinkColor = "tab-link-color",
  themeId = "theme-id",
  token = "token",
  type = "type",
  user = "user",
  version = "version",
  zoom = "zoom",
}
interface Params {
  // New Public Docs: https://blog.codepen.io/docs/embeds/themes/
  [key: string]: unknown;
  // Required (unless Prefill)
  [ParamKeys.slugHash]?: string;
  [ParamKeys.token]?: string; // If Private
  // Standard Options
  [ParamKeys.height]?: number;
  [ParamKeys.preview]?: string | boolean; // true = "Click to Run" false = Don't show at all.
  [ParamKeys.class]?: string;
  [ParamKeys.zoom]?: number;
  [ParamKeys.themeId]?: number;
  // Types of Embeds
  [ParamKeys.prefill]?: string; // prefill='{"title": "My Pen"}' etc.
  [ParamKeys.editable]?: boolean;
  // Internal usage only
  [ParamKeys.host]?: string; // e.g. data-host="codepen.test" for local testing.
  // New Editor Specific
  [ParamKeys.file]?: string;
  [ParamKeys.version]?: string;
  // Deprecated (but still supported)
  [ParamKeys.defaultTab]?: string; // will become `file` and effect preview visibility
  // Deprecating once New Editor is the Only Editor
  [ParamKeys.animations]?: string; // 'run' : 'stop-after-5' // deprecating
  [ParamKeys.border]?: string;
  [ParamKeys.user]?: string;
  [ParamKeys.borderColor]?: string;
  [ParamKeys.tabBarColors]?: string;
  [ParamKeys.tabLinkColor]?: string;
  [ParamKeys.activeTabColor]?: string;
  [ParamKeys.activeLinkColor]?: string;
  [ParamKeys.linkLogoColor]?: string;
  [ParamKeys.customCssUrl]?: string;
  [ParamKeys.penTitle]?: string;
  // VERY Deprecated
  [ParamKeys.safe]?: boolean | string;
  [ParamKeys.type]?: string;
  [ParamKeys.href]?: string;
}
// Adapted from http://www.dustindiaz.com/smallest-domready-ever
const domReady = (f: (selector?: string | undefined) => void) => {
  if (document.readyState === "loading") {
    setTimeout(() => {
      domReady(f);
    }, 8);
  } else {
    f();
  }
};
declare const __CodePenIFrameAddedToPage: (() => void) | undefined;
const callCallback = () => {
  if (typeof __CodePenIFrameAddedToPage === "function") {
    __CodePenIFrameAddedToPage();
  }
};
const getPrefillData = (el: HTMLParagraphElement) => {
  if (Object.prototype.hasOwnProperty.call(el.dataset, "prefill")) {
    if (el.dataset.prefill === undefined || el.dataset.prefill === "") {
      el.dataset.prefill = "{}";
    }
    const data:
      | (PrefillData & {
          [key: string]: unknown;
        })
      | null = parsePrefillData(el.dataset.prefill);
    // Seek out any data-lang children to fill the html/css/js fields.
    const codeBlocks = el.querySelectorAll("[data-lang]");
    for (const codeBlock of codeBlocks) {
      const lang = (codeBlock as HTMLElement).dataset.lang;
      const autoprefixer = (codeBlock as HTMLElement).dataset
        .optionsAutoprefixer;
      if (autoprefixer && data) {
        data["css_prefix"] = "autoprefixer";
      }
      // Convert preprocessors to the proper type
      const type = TypesUtil.syntaxToType(lang || "");
      if (data) {
        data[type] = (codeBlock as HTMLElement).textContent;
        // Send through a preprocessor if used
        if (lang !== type) {
          data[type + "_pre_processor"] = lang;
        }
      }
      // Send through a version if used (primarily for Vue right now)
      const version = (codeBlock as HTMLElement).dataset.langVersion;
      if (version && data) {
        data[type + "_version"] = version;
      }
    }
    return JSON.stringify(data);
  }
};
enum PrefillDataKeys {
  description = "description",
  head = "head",
  html_classes = "html_classes",
  scripts = "scripts",
  stylesheets = "stylesheets",
  tags = "tags",
  title = "title",
}
type PrefillData = {
  [PrefillDataKeys.description]?: string;
  [PrefillDataKeys.head]?: string;
  [PrefillDataKeys.html_classes]?: string | string[];
  [PrefillDataKeys.scripts]?: string | string[];
  [PrefillDataKeys.stylesheets]?: string | string[];
  [PrefillDataKeys.tags]?: string | string[];
  [PrefillDataKeys.title]?: string;
};
const parsePrefillData = (prefillDataString: string): PrefillData | null => {
  const prefill = JSON.parse(decodeURI(prefillDataString));
  const data: PrefillData = {};
  for (const key of Object.values(PrefillDataKeys)) {
    if (key in prefill) {
      // Type assertion since we know the key exists in prefill
      data[key as keyof PrefillData] = prefill[key];
    }
  }
  return data;
};
const getParamsFromAttributes = (el: Element) => {
  let params: Params = {};
  const attributes = el.attributes;
  for (let i = 0, l = attributes.length; i < l; i++) {
    const name = attributes[i].name;
    const param = name.replace("data-", "");
    if (name.indexOf("data-") === 0 && isValidParam(param)) {
      params[param] = attributes[i].value;
    }
  }
  params = convertOldDataAttributesToNewDataAttributes(params);
  // If the required attributes are not present, return nothing
  if (!paramsHasRequiredAttributes(params)) {
    return null;
  }
  return params;
};
// Ensure we have the required attributes to create the iframe
const paramsHasRequiredAttributes = (params: Params) => {
  // Using "in" for prefill because it still counts if it's an null/empty value.
  return "prefill" in params || params["slug-hash"];
};
/*
 * convert the old data attributes to new better names.
 * - href -> slug-hash
 * - type -> default-tab
 * - safe -> animations
 */
const convertOldDataAttributesToNewDataAttributes = (params: Params) => {
  if (params.href) {
    params["slug-hash"] = params.href;
  }
  if (params.type) {
    params["default-tab"] = params.type;
  }
  if (params.safe) {
    params.animations = params.safe === "true" ? "run" : "stop-after-5";
  }
  return params;
};
/*****************
  Build URL
  ******************/
const buildURL = (params: Params) => {
  const host = getHost(params);
  const embedType =
    params.preview && (params.preview === "true" || params.preview === true)
      ? "embed/preview"
      : "embed";
  const isNewEditor = params["version"] === "2";
  // Using 'in' to support null data-prefill values
  if ("prefill" in params) {
    return [
      host,
      // The "cpe" part of this URL will deprecate when we promote the /embed/prefill URL to be the only way to embed a pen.
      isNewEditor ? "cpe" : "",
      embedType,
      "prefill",
    ].join("/");
  }
  const getParams = getGetParams(params);
  const username = params.user || "anon";
  let hash = params["slug-hash"];
  if (params["token"] !== undefined) {
    hash += "/" + params["token"];
  }
  const url = isNewEditor
    ? [
        host,
        ROUTES.NEW_EDITOR,
        username,
        embedType,
        hash + "?" + getParams,
      ].join("/")
    : [host, username, embedType, hash + "?" + getParams].join("/");
  return url.replace(/\/\//g, "//");
};
const getHost = (params: Params) => {
  return params.host ? getSafeHost(params.host) : "https://codepen.io";
};
const getSafeHost = (host: string): string => {
  return host.match(/^\/\//) || !host.match(/https?:/)
    ? document.location.protocol + "//" + host
    : host;
};
const getGetParams = (params: Params) => {
  let dataValues = "";
  for (const key in params) {
    if (key === "prefill") {
      continue;
    }
    if (dataValues !== "") {
      dataValues += "&";
    }
    const value = params[key];
    let encoded;
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      encoded = encodeURIComponent(value);
    } else {
      throw new TypeError("Invalid parameter type");
    }
    dataValues += key + "=" + encoded;
  }
  return dataValues;
};
/*
 * Get height, defaults to magic 300
 */
const getHeight = (params: Params) => {
  return params.height || 300;
};
const isValidParam = (param: string) => {
  return Object.values(ParamKeys).includes(param as ParamKeys);
};

const buildAndEmbed = (params: Params, el: HTMLParagraphElement) => {
  let form;
  const fragment = document.createDocumentFragment();
  fragment.append(buildIframe(params));
  // If prefill, the form must be built to submit POST data to the iframe.
  // The form has to be submitted when it's in the DOM. To prevent any thrashing, the form is added to the fragment first.
  if ("prefill" in params) {
    form = buildPrefillForm(params, el);
    fragment.append(form);
  }
  addIframeToPage(el, fragment);
  if (form) {
    (form as HTMLFormElement).submit();
  }
};
/*****************
  Create Element shortcut for attributes
  *****************/
interface ElementAttributes {
  [key: string]: string;
}

const createElement = (
  tagName: string,
  attributes: ElementAttributes,
): HTMLElement => {
  const el = document.createElement(tagName);
  for (const key in attributes) {
    if (Object.prototype.hasOwnProperty.call(attributes, key)) {
      el.setAttribute(key, attributes[key]);
    }
  }
  return el;
};

const buildPrefillForm = (params: Params, el: HTMLParagraphElement) => {
  const form = createElement("form", {
    class: "cp_embed_form",
    style: "display: none;",
    method: "post",
    action: buildURL(params),
    target: params.name as string,
  });
  // Translate the prefill data to what the API expects
  params["data"] = getPrefillData(el);
  // Append params as <inputs>
  for (const key in params) {
    if (key === "prefill") continue;
    form.append(
      createElement("input", {
        type: "hidden",
        name: key,
        value: params[key] as string,
      }),
    );
  }
  return form;
};

/*****************
  Build Iframe
  *****************/
const buildIframe = (params: Params) => {
  const url = buildURL(params);
  const title: string =
    typeof params["pen-title"] === "string"
      ? params["pen-title"]
      : "CodePen Embed";
  const attrs: ElementAttributes = {
    allowfullscreen: "true",
    allowpaymentrequest: "true",
    allowTransparency: "true",
    class: "cp_embed_iframe " + (params["class"] || ""),
    frameborder: "0",
    height: getHeight(params).toString(),
    width: "100%",
    name: typeof params.name === "string" ? params.name : "CodePen Embed",
    scrolling: "no",
    src: url,
    style: "width: 100%; overflow:hidden; display:block;",
    title: title,
    // Don't add loading: lazy here, see below...
  };
  /* Don't lazy load prefill embeds. Causes issues with the form submission so the POST data never comes through! */
  if ("prefill" in params === false) {
    attrs.loading = "lazy";
  }
  if (params["slug-hash"]) {
    attrs.id = "cp_embed_" + params["slug-hash"].replace("/", "_");
  }
  return createElement("iframe", attrs);
};

/*
 * Replaces the initial element with the iframe. If the element is not attached in the DOM, it adds the iframe to the element.
 */
const addIframeToPage = (el: Element, iframe: Node) => {
  if (el.parentNode) {
    const iframeSpan = document.createElement("div");
    iframeSpan.className = "cp_embed_wrapper";
    iframeSpan.append(iframe);
    el.parentNode.replaceChild(iframeSpan, el);
    return iframeSpan;
  }
  el.append(iframe);
  return el;
};

let numOfEmbeds = 1;
function CPEmbed(selector: string | undefined) {
  // If we get a string, use that class instead of .codepen
  selector = typeof selector === "string" ? selector : ".codepen";
  const codePenElements = document.querySelectorAll(selector);
  for (let i = 0, len = codePenElements.length; i < len; i++) {
    const el = codePenElements[i];
    const params = getParamsFromAttributes(el);
    // This will filter out other elements with the class "codepen" ... that are not meant to be embeds.
    if (!params) {
      continue;
    }
    params.name = "cp_embed_" + numOfEmbeds++;
    buildAndEmbed(params, el as HTMLParagraphElement);
  }
  callCallback();
}
// @ts-ignore
window.__cp_domReady = domReady;
// @ts-ignore
window.__CPEmbed = CPEmbed;
domReady(CPEmbed);
