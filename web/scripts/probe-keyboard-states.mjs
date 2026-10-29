#!/usr/bin/env node
/**
 * probe-keyboard-states.mjs — several controls, ONE page load: identity + real hover + pressed + real keyboard focus.
 *
 * WHY (2026-09-29). probe-component-states.mjs reads one control per run, loads the page four times and forces focus
 * with `.focus()` after one Tab. A KR pilot (karrot) showed what a sweep actually needs: hover painted by a ::before
 * overlay whose bg never changes, a focus ring that lives on the input's WRAPPER, and three of six controls with no
 * authored focus style at all. This script measures up to ~6 controls in one load with the method that worked.
 *
 * USAGE
 *   node scripts/probe-keyboard-states.mjs <url> --text "<label>" [--tag a|button|input] [--landmark header|footer|nav|main]
 *                                          [--nth N] [--exact] [--key name]  --selector "<css>" [--nth N] ...
 *     Controls are collected in the order given; --tag/--landmark/--nth/--exact/--key/--label/--min-height/--href bind to the
 *     --text/--selector before them. --text matches visible text, aria-label, placeholder, value and title (substring,
 *     case-insensitive, or the whole string with --exact). Open shadow roots are searched; iframes are not.
 *     On the CLI every --text/--selector starts a NEW control (the two cannot be combined for one control); a --cfg `find` object can carry both.
 *   node scripts/probe-keyboard-states.mjs <url> --cfg controls.json
 *     {"controls":[{"key","label","find":{"tag","text","exact","landmark","selector","minH","nth","href"},"declared"}]}
 *     (the shape of docs/research/2026-09-29-growth/raw/karrot-cfg.json; `declared` is copied to the output)
 *   node scripts/probe-keyboard-states.mjs <url> --survey --out survey.json     list interactive elements to choose from
 *   options  --locale ko-KR (default) · --wait 6000 (ms after load) · --settle 900 (ms after each state change, floor 800; stretched
 *            to the longest transition-duration + transition-delay found on the control, its descendants, their ::before/::after
 *            and the compared ancestors, plus 150 ms, capped at 6000; then running transitions are awaited)
 *            --max-tabs 500 · --tab-settle 300 (ms after EVERY Tab press before the focused element is read) · --cycle-after 6
 *            (consecutive Tab landings on already-visited elements that count as a focus loop) · --max-kids 150 (descendants
 *            compared per control, breadth-first) · --up N (ancestor levels compared; default 3; a cfg control may carry "up")
 *            --out file.json [--quiet: JSON only to the file] · --summary (a readable verdict per state on stderr, also with --quiet)
 *            --hide-overlays · --no-focus · --no-mouse
 *            --browser headless|worker (default headless; worker opens headed Chrome with its own UA and a fresh temporary
 *            profile, never the owner's profile; locale, viewport, Accept-Language and launch args stay the same)
 *            --shots dir (opt-in PNG crops: <key>-rest/hover/pressed/focus.png, 12px padding clamped to the viewport;
 *            no scrolling for a crop; each read state gets shot or shotError, unmeasured states have no crop)
 *            --visual dir (opt-in viewport.png + full.png, height capped at 12000px, then scroll.webm in a separate context;
 *            120px every 60ms, up to 12000px; failures/budget skips in visual.errors never fail the probe)
 *            Evidence paths are relative to --out's directory (otherwise cwd); unsafe key filename characters are percent-encoded.
 *            Any of these three flags records boot.browser; without them the existing output is unchanged.
 *            --census (with --survey: also records PROBE_BRIEF items 1–3 in result.census — every custom property on
 *            :root (computed) and every one declared in a stylesheet, open shadow roots and adopted sheets included, with
 *            its first selector; the top-15 rendered bg / text / border colours and the text colour inside <p>; the font
 *            family on body / h1 / button, the loaded faces and the @font-face sources; cross-origin sheets it could not read)
 *            --retries 3 --retry-wait 60000 (block/403 policy) · --budget 420000 · --close-timeout 5000 · --help
 *   exit     0 ok · 1 error · 2 usage · 3 budget/signal, partial JSON · 4 blocked or unreachable after the retries (boot.block)
 *
 * METHOD (one load; the order matters)
 *   load "load"+wait → dismiss consent (reject/necessary-only buttons only — never Accept) → tag controls → identity + REST
 *   → KEYBOARD walk FIRST, on the pristine page: real `Tab` presses from the page start. After every press the script waits
 *     --tab-settle, reads the deep `document.activeElement` (shadow roots pierced) and, if that is body or an element already
 *     visited, waits once more before believing it (the page may still be moving focus). Every landing is recorded in `walk`
 *     and matched to the controls by ELEMENT IDENTITY (tabIndex is not consulted). On a control: wait (see --settle), read,
 *     require `:focus-visible`; press Tab once more and re-read the control's rest (restAfterBlur; whatever stays changed is
 *     listed in persistsAfterBlur and flagged `alsoPersists` on the focus change). Focus changes are measured against the
 *     pristine page-top rest. The walk stops only on: all controls reached, a real cycle (back on its first element after >= 2
 *     distinct stops, or --cycle-after repeats in a row, iframe-internal presses excepted), 3 body landings in a row, or
 *     --max-tabs; `walkStop` says which. (Once a mouse has pressed something, Tab resumes from that spot — hence keyboard first.)
 *   → MOUSE pass: per control (inputs last) scroll to centre, park the pointer, read rest, move onto it (hit-tested with
 *     elementFromPoint: control or descendant), read HOVER, mouse-down, read PRESSED, release IN PLACE with click/mouseup/
 *     pointerup/submit swallowed at window capture — nothing is ever clicked, no link is followed, no form is sent.
 *   Every read compares, on the control: bg, fg, border, radius, box-shadow, outline (drawn only), transform, opacity, filter,
 *   background-image (whole value) + background-position/-size/-repeat, text-decoration, backdrop-filter/clip-path/mask (image,
 *   position, size), ::before/::after (the same list, incl. background-position and content), size/padding/font, the label child
 *   and, on an <img>/<input type=image> control, currentSrc/src/srcset; on EVERY descendant (empty layers included, open shadow
 *   roots pierced, up to --max-kids, keyed by child-index path): colour, bg, opacity, transform, filter, text-decoration,
 *   box-shadow, drawn outline, border, background-image + position/size/repeat, display/visibility, layout size, backdrop-filter/
 *   clip-path/mask, its own ::before/::after, <img>/<source> currentSrc/src/srcset, and on SVG elements: computed fill/stroke, the
 *   fill/stroke ATTRIBUTES, fill/stroke opacity + stroke width/dash, <path> `d` (attribute and computed), polygon/polyline points,
 *   getBBox, <use>/<image> href/xlink:href (+ a hash of the node it points at when it resolves in this document), <stop> colours,
 *   and the stops of any gradient (or a hash of the pattern/filter markup) that a url(#id) fill/stroke/filter points at, wherever
 *   it is defined; on --up ancestors: bg, border, box-shadow, outline, transform, opacity, filter, background-image + position/
 *   size/repeat, backdrop-filter/clip-path/mask, ::before/::after. Long values are kept as a prefix plus an FNV-1a hash of the
 *   WHOLE string (`…#1a2b3c4d/523` = hash/length), so a difference past the prefix still counts.
 *   Values that are still moving between two reads are listed in `unstableProps`, not as changes.
 *
 * FIXES 2026-09-30 (docs/research/2026-09-29-growth/probe-tool-fix.md) — each produced a wrong "no change" or "focus absent":
 *   (a) every descendant is compared, EMPTY ones included, with its ::before/::after (Wanted paints hover/press as the opacity of
 *       an empty child div); ancestors default to 3 levels (hyundaicard lifts the parent li by translateY(-12px)).
 *   (b) descendants carry outline, box-shadow, border and background, so a focus ring on a label span is seen (Wanted nav link);
 *       focus `indication.descendantIndication` lists them.
 *   (c) the walk no longer skips tabIndex < 0 controls (Toss Bank's Radix tab reads tabIndex -1 and Tab reaches it); a landing
 *       inside or around an unreached control is named in its UNMEASURED reason.
 *   (d) `disabled`/`:disabled`, aria-disabled="true" (self or ancestor), pointer-events:none and inert → hover/pressed are
 *       "disabled — not measured (<kind>)", never "no change" (Socar search button). A focus read on an aria-disabled or
 *       pointer-events:none control that Tab reaches carries `disabled`. (The walk filter on native disabled/inert added here
 *       was removed by (j): every control is walked and its status is re-checked live.)
 *   (e) --tab-settle after every Tab plus one re-read on a body/repeat landing; stop rules above (hyundaicard's walk ended at Tab #2).
 *   (f) every measured state carries `compared` (the element set diffed, with counts) and `verdict`; each change names its `set`
 *       (self, self-pseudo, label, descendant, descendant-pseudo, ancestor, ancestor-pseudo). Nothing changed = "NO CHANGE across
 *       <scope>"; values still moving = "NO SETTLED CHANGE …", never plain "NO CHANGE".
 *
 * FIXES 2026-09-30 (2) (docs/research/2026-09-29-growth/probe-tool-fix-2.md) — each was a wrong "no change" or a wrong "disabled":
 *   (g) background-position/-size/-repeat and the WHOLE background-image value (was cut at 60/80/120 characters) on self,
 *       descendants, their ::before/::after and ancestors; mask position/size likewise. naver's 뉴스 shortcut hovers only by
 *       moving its sprite tile (`span.service_icon::before` -156px -144px -> -104px -144px); the first fix read "no change".
 *   (h) <img>/<source> currentSrc, src and srcset (a src swap by script leaves every computed style unchanged).
 *   (i) SVG internals: <use>/<image> href, <path> d, polygon points, bbox, fill/stroke attributes, <stop> colours, and the stops of
 *       a gradient that a url(#id) paint points at even when it is defined outside the control.
 *   (j) disabled / aria-disabled / pointer-events:none / inert is re-checked LIVE: at the Tab landing (`focus.disabledAtLanding`;
 *       the page-top value stays in `identity.disabledKinds` and `focus.disabledAtPageTop`), after the walk for controls it never
 *       reached (`disabledAtWalkEnd`), and in the mouse pass after the control is scrolled into view. Every found control is walked;
 *       the walk stops early only when every control still pending is natively disabled at that moment. (socar's '맨 위로' is
 *       inert at page top; Tab #18 reached it on /guide, yet the first fix read its focus "disabled — not measured".)
 *   A pseudo-element change carries `delta`, a field-level diff (`::before.pos: -156px -144px / … -> -104px -144px / …`). --summary
 *   prints it, and for long values it prints the differing tail instead of two identical-looking prefixes. Each `compared` scope
 *   now counts the SVG and <img>/<source> descendants and lists the properties compared.
 *
 * BLIND SPOTS THAT REMAIN (the probe reads computed style and DOM attributes, not pixels): anything painted inside <canvas>/WebGL/
 *   video; SMIL animation (not verified either way); the inside of an external sprite (`sprite.svg#id` is compared as a string);
 *   a <symbol>/<filter>/<pattern> change reached by any path other than the refs above; cross-origin iframes; closed shadow roots;
 *   descendants past --max-kids; a layer that is a sibling or cousin of the control rather than its descendant or one of its --up
 *   ancestors.
 *
 * HONESTY RULES
 *   - hover/pressed/focus is `measured:false` + a reason — UNMEASURED, never "no change" — unless `:hover` / `:active` /
 *     `:focus-visible` really matched the control. A cover (banner, fixed header) is named; --hide-overlays hides fixed/sticky
 *     overlays for that control only (display:none, never a click) and records it (report it).
 *   - `outline-style: auto` is the browser's default ring, not brand (`indication.browserDefaultRing`).
 *   - It never signs in, types, or submits. Do not use it on a host that looks internal. Never a real/owner browser.
 *   - Prints JSON BEFORE closing, races every close, exits explicitly (see probe-component-states.mjs for the 2026-09-29 hang).
 */
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

// ───────────────────────────── arguments ─────────────────────────────
const argv = process.argv.slice(2);
const url = argv.find((a) => /^https?:\/\//.test(a));
const VALUE_FLAGS = new Set(["text", "selector", "cfg", "config", "locale", "wait", "settle", "max-tabs", "out", "retries", "retry-wait", "close-timeout", "budget", "survey-limit", "up", "nth", "tag", "landmark", "min-height", "key", "label", "href", "tab-settle", "cycle-after", "max-kids", "browser", "shots", "visual"]);
const PER_CONTROL = new Set(["nth", "tag", "landmark", "min-height", "exact", "key", "label", "href"]);
const g = {};
const cli = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith("--")) continue;
  const name = a.slice(2);
  const val = VALUE_FLAGS.has(name) ? argv[++i] : true;
  if (name === "text" || name === "selector") { cli.push({ key: `c${cli.length + 1}`, label: `${name} ${val}`, find: { [name]: val } }); continue; }
  if (PER_CONTROL.has(name)) {
    const last = cli[cli.length - 1];
    if (!last) { console.error(`--${name} must come after the --text/--selector it belongs to`); process.exit(2); }
    if (name === "key") last.key = val;
    else if (name === "label") last.label = val;
    else if (name === "min-height") last.find.minH = Number(val);
    else if (name === "nth") last.find.nth = Number(val);
    else last.find[name] = val;
    continue;
  }
  g[name] = val;
}
if (g.help) { const src = fs.readFileSync(new URL(import.meta.url), "utf8"); console.log(src.slice(src.indexOf("/**"), src.indexOf("*/") + 2)); process.exit(0); }
for (const name of ["browser", "shots", "visual"]) {
  if (Object.hasOwn(g, name) && (typeof g[name] !== "string" || !g[name].trim() || g[name].startsWith("--"))) {
    console.error(`--${name} requires a value — see --help`); process.exit(2);
  }
}
const BROWSER = g.browser ?? "headless";
if (BROWSER !== "headless" && BROWSER !== "worker") { console.error('--browser must be "headless" or "worker"'); process.exit(2); }
const SHOTS = g.shots ?? null;
const VISUAL = g.visual ?? null;
const EVIDENCE = g.browser !== undefined || SHOTS !== null || VISUAL !== null;
let cfgControls = [];
const cfgPath = g.cfg ?? g.config;
if (cfgPath) {
  try { cfgControls = JSON.parse(fs.readFileSync(cfgPath, "utf8")).controls ?? []; }
  catch (e) { console.error(`cannot read --cfg ${cfgPath}: ${e.message}`); process.exit(2); }
}
const controls = [...cfgControls, ...cli].map((c, n) => ({ ...c, i: n + 1 }));
{ const used = new Set(); for (const c of controls) { c.key = String(c.key ?? `c${c.i}`); while (used.has(c.key)) c.key += "_"; used.add(c.key); } }
if (!url || (!controls.length && !g.survey)) {
  console.error('usage: probe-keyboard-states.mjs <url> (--text "<label>" | --selector "<css>")... [--cfg file.json] [--survey] [--out file.json] [--locale ko-KR] — see --help');
  process.exit(2);
}

const num = (v, d) => (v !== undefined && v !== true && Number.isFinite(Number(v)) ? Number(v) : d);
const LOCALE = g.locale ?? "ko-KR";
const LANG_BASE = LOCALE.split("-")[0];
const WAIT = Number(g.wait ?? 6000);
const SETTLE_MIN = Math.max(800, Number(g.settle ?? 900));
const SETTLE_CAP = 6000;
const MAX_TABS = Number(g["max-tabs"] ?? 500);
const TAB_SETTLE = Math.max(0, num(g["tab-settle"], 300));
const CYCLE_AFTER = Math.max(2, num(g["cycle-after"], 6));
const MAX_KIDS = Math.max(0, num(g["max-kids"], 150));
const UP_DEFAULT = 3;
const RETRIES = Number(g.retries ?? 3);
const RETRY_WAIT = Number(g["retry-wait"] ?? 60000);
const CLOSE_TIMEOUT = Number(g["close-timeout"] ?? 5000);
const BUDGET = Number(g.budget ?? 420000);
const OUT = g.out ?? null;
const QUIET = !!g.quiet;
const SUMMARY = !!g.summary;
// Headless keeps the existing plain desktop UA. Worker uses the headed Chrome's actual UA.
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";
const CONTEXT = { viewport: { width: 1440, height: 1000 }, ...(BROWSER === "headless" ? { userAgent: REAL_UA } : {}), locale: LOCALE, extraHTTPHeaders: { "Accept-Language": `${LOCALE},${LANG_BASE};q=0.9,en;q=0.8` } };

// --census (2026-10-29): PROBE_BRIEF items 1–3 in one evaluation, so a sandboxed worker gets them through the capture
// MCP tool instead of writing its own browser script. Open shadow roots are walked (SBB's Lyne renders in them).
function censusFn() {
  const out = { computedVars: {}, declaredVars: {}, unreadableSheets: [], fontFaces: [], census: {}, fonts: {} };
  const root = getComputedStyle(document.documentElement);
  for (let i = 0; i < root.length; i++) { const n = root[i]; if (n.startsWith("--")) out.computedVars[n] = root.getPropertyValue(n).trim(); }
  const seenFace = new Set();
  const walk = (rules, ctx) => {
    for (const r of rules) {
      try {
        if (r.constructor?.name === "CSSFontFaceRule" || r.type === 5) {
          const fam = r.style.getPropertyValue("font-family").replace(/["']/g, "").trim(), src = r.style.getPropertyValue("src").slice(0, 300);
          const k = fam + "|" + r.style.getPropertyValue("font-weight") + "|" + r.style.getPropertyValue("font-style");
          if (!seenFace.has(k)) { seenFace.add(k); out.fontFaces.push({ family: fam, weight: r.style.getPropertyValue("font-weight"), style: r.style.getPropertyValue("font-style"), src }); }
        } else if (r.style) {
          for (let i = 0; i < r.style.length; i++) {
            const n = r.style[i];
            if (n.startsWith("--") && !(n in out.declaredVars)) out.declaredVars[n] = { value: r.style.getPropertyValue(n).trim(), selector: String(r.selectorText ?? ctx ?? "").slice(0, 100) };
          }
        }
        if (r.cssRules?.length) walk(r.cssRules, r.conditionText ?? r.name ?? r.selectorText ?? ctx);
      } catch {}
    }
  };
  const sheetsOf = (scope) => [...(scope.styleSheets ?? []), ...(scope.adoptedStyleSheets ?? [])];
  const scopes = [document];
  const elements = [];
  const visit = (node) => { for (const el of node.querySelectorAll("*")) { elements.push(el); if (el.shadowRoot) { scopes.push(el.shadowRoot); visit(el.shadowRoot); } } };
  visit(document);
  for (const scope of scopes) for (const sh of sheetsOf(scope)) {
    let rules = null;
    try { rules = sh.cssRules; } catch { out.unreadableSheets.push(sh.href ?? "(inline)"); continue; }
    if (rules) walk(rules, "");
  }
  const bg = new Map(), fg = new Map(), bd = new Map(), ink = new Map();
  const add = (m, k) => m.set(k, (m.get(k) ?? 0) + 1);
  for (const el of elements) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") continue;
    if (cs.backgroundColor && cs.backgroundColor !== "rgba(0, 0, 0, 0)" && cs.backgroundColor !== "transparent") add(bg, cs.backgroundColor);
    if ([...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) { add(fg, cs.color); if (el.closest("p") || el.tagName === "P") add(ink, cs.color); }
    if (cs.borderTopStyle !== "none" && parseFloat(cs.borderTopWidth) > 0) add(bd, cs.borderTopColor);
  }
  const top = (m, n = 15) => [...m].sort((a, b) => b[1] - a[1]).slice(0, n).map(([color, count]) => ({ color, count }));
  out.census = { elements: elements.length, shadowRoots: scopes.length - 1, bg: top(bg), text: top(fg), border: top(bd), paragraphInk: top(ink, 3) };
  const fam = (sel) => { const el = document.querySelector(sel); return el ? getComputedStyle(el).fontFamily : null; };
  out.fonts = { body: fam("body"), h1: fam("h1"), button: fam("button"), loaded: [...new Set([...document.fonts].filter((f) => f.status === "loaded").map((f) => `${f.family.replace(/["']/g, "")} ${f.weight} ${f.style}`))] };
  return out;
}

// ───────────────────────────── shared state + shutdown ─────────────────────────────
const T0 = Date.now();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const raceClose = (p) => Promise.race([Promise.resolve(p).catch(() => {}), sleep(CLOSE_TIMEOUT)]);
const result = {
  tool: "probe-keyboard-states.mjs",
  boot: { url, locale: LOCALE, viewport: "1440x1000", loads: 0, startedAt: new Date(T0).toISOString(), settleMinMs: SETTLE_MIN, settleCapMs: SETTLE_CAP, maxTabs: MAX_TABS, tabSettleMs: TAB_SETTLE, cycleAfter: CYCLE_AFTER, maxKids: MAX_KIDS, upDefault: g.up ? Number(g.up) : UP_DEFAULT },
  controls: {}, walk: [], notes: [],
};
if (EVIDENCE) result.boot.browser = BROWSER;
let browser = null;
let TABLE = null;
let emitted = false;
async function emitAndExit(code) {
  if (emitted) return;
  emitted = true;
  clearTimeout(watchdog);
  for (const R of Object.values(result.controls)) {
    if (!R.found) continue;
    for (const s of ["hover", "pressed", "focus"]) {
      if (!R[s]) R[s] = { measured: false, unmeasured: result.boot.watchdog ? `not reached before the run ended early (${result.boot.watchdog})` : `phase skipped (${s === "focus" ? "--no-focus" : "--no-mouse"})` };
    }
  }
  result.boot.elapsedMs = Date.now() - T0;
  const json = JSON.stringify(result, null, 2) + "\n";
  if (OUT) { try { fs.mkdirSync(path.dirname(path.resolve(OUT)), { recursive: true }); fs.writeFileSync(OUT, json); } catch (e) { console.error(`--out write failed: ${e.message}`); } }
  // Print BEFORE closing: a hung close() must never swallow a finished measurement.
  if (!QUIET) await Promise.race([new Promise((r) => process.stdout.write(TABLE ?? json, r)), sleep(5000)]);
  if (SUMMARY && !TABLE) { let txt; try { txt = summaryText(); } catch (e) { txt = `summary failed: ${e.message}\n`; } await Promise.race([new Promise((r) => process.stderr.write(txt, r)), sleep(5000)]); }
  await Promise.race([new Promise((r) => process.stderr.write("", r)), sleep(1000)]);
  if (browser) await raceClose(browser.close());
  process.exit(code);
}
const watchdog = setTimeout(() => { result.boot.watchdog = `budget ${BUDGET}ms exhausted; partial result`; emitAndExit(3); }, BUDGET);
process.on("SIGINT", () => { result.boot.watchdog = "SIGINT"; emitAndExit(130); });
process.on("SIGTERM", () => { result.boot.watchdog = "SIGTERM"; emitAndExit(143); });

// ───────────────────────────── in-page code (serialised into the page) ─────────────────────────────
function inPage(opts) {
  if (window.__omdKb) return;
  const KB = (window.__omdKb = {});
  const MAXK = opts && Number.isFinite(opts.maxKids) ? opts.maxKids : 150;
  // The release of a press must never act on the page. Off by default; switched on only around mouse.up().
  window.__omdKbBlock = false;
  for (const t of ["click", "auxclick", "dblclick", "mouseup", "pointerup", "submit"]) {
    window.addEventListener(t, (e) => { if (window.__omdKbBlock) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  }
  const norm = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
  const round1 = (n) => Math.round(n * 10) / 10;
  const roots = () => { const out = [document]; const walk = (r) => { for (const el of r.querySelectorAll("*")) if (el.shadowRoot) { out.push(el.shadowRoot); walk(el.shadowRoot); } }; walk(document); return out; };
  const q = (sel) => roots().flatMap((r) => [...r.querySelectorAll(sel)]);
  const parentOf = (n) => n.parentElement || (n.getRootNode && n.getRootNode().host) || null;
  const deepActive = () => { let a = document.activeElement; while (a && a.shadowRoot && a.shadowRoot.activeElement) a = a.shadowRoot.activeElement; return a; };
  const deepContains = (anc, n) => { for (let x = n; x; x = parentOf(x)) if (x === anc) return true; return false; };
  const cls = (el) => (typeof el.className === "string" ? el.className.trim().split(/\s+/).filter(Boolean).slice(0, 2).join(".") : "");
  const short = (el) => {
    if (!el) return "null";
    if (el === document.body) return "body";
    if (el === document.documentElement) return "html";
    const lab = norm(el.getAttribute("aria-label") || (el.textContent || "").slice(0, 120) || el.value || el.getAttribute("title") || el.getAttribute("alt") || "");
    return `${el.tagName.toLowerCase()}${el.id ? "#" + el.id.slice(0, 20) : ""}${cls(el) ? "." + cls(el) : ""}[${lab.slice(0, 24)}]`;
  };
  const cssPath = (el) => { const parts = []; for (let n = el, d = 0; n && n.nodeType === 1 && d < 3; n = parentOf(n), d++) { parts.unshift(`${n.tagName.toLowerCase()}${n.id ? "#" + n.id.slice(0, 20) : ""}${cls(n) ? "." + cls(n) : ""}`); } return parts.join(" > "); };
  const LM = { header: "header,[role=banner]", footer: "footer,[role=contentinfo]", nav: "nav,[role=navigation]", main: "main,[role=main]" };
  const landmark = (el) => Object.keys(LM).find((k) => el.closest && el.closest(LM[k])) || "-";
  const visible = (el, minH) => {
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < minH) return false;
    if (r.right <= 0 || r.bottom + scrollY <= 0) return false;
    const s = getComputedStyle(el);
    return s.visibility !== "hidden" && s.display !== "none" && parseFloat(s.opacity) > 0.01;
  };
  const INTERACTIVE = "a,button,[role=button],[role=tab],[role=link],[role=menuitem],[role=combobox],[role=searchbox],[role=textbox],input:not([type=hidden]),select,textarea,summary,label,[tabindex]:not([tabindex='-1'])";

  KB.find = (cfg) => {
    let pool = cfg.selector ? q(cfg.selector) : q(INTERACTIVE);
    pool = pool.filter((el) => visible(el, cfg.minH ?? 8));
    if (cfg.tag) pool = pool.filter((el) => el.tagName.toLowerCase() === String(cfg.tag).toLowerCase());
    if (cfg.landmark) pool = pool.filter((el) => LM[cfg.landmark] && el.closest(LM[cfg.landmark]));
    if (cfg.href) pool = pool.filter((el) => (el.getAttribute("href") || "").includes(cfg.href));
    if (cfg.text) {
      const needle = norm(cfg.text).toLowerCase();
      pool = pool.filter((el) => {
        const labs = [el.textContent, el.getAttribute("aria-label"), el.getAttribute("placeholder"), el.value, el.getAttribute("title")].map(norm).filter(Boolean).map((s) => s.toLowerCase());
        return cfg.exact ? labs.some((l) => l === needle) : labs.some((l) => l.includes(needle));
      });
    }
    return pool;
  };
  // A control is marked with data-omd-kb="<index>" (space separated when two controls resolve to the same element).
  KB.get = (i) => document.querySelector(`[data-omd-kb~="${i}"]`) || q(`[data-omd-kb~="${i}"]`)[0] || null;
  KB.tag = (i, cfg) => {
    for (const old of q(`[data-omd-kb~="${i}"]`)) {
      const rest = old.getAttribute("data-omd-kb").split(" ").filter((t) => t !== String(i)).join(" ");
      if (rest) old.setAttribute("data-omd-kb", rest); else old.removeAttribute("data-omd-kb");
    }
    let pool;
    try { pool = KB.find(cfg); } catch (e) { return { found: false, candidates: 0, error: String(e.message || e) }; }
    const el = pool[cfg.nth || 0];
    if (!el) return { found: false, candidates: pool.length };
    el.setAttribute("data-omd-kb", ((el.getAttribute("data-omd-kb") || "") + " " + i).trim());
    return { found: true, candidates: pool.length };
  };

  const alpha = (c) => {
    c = String(c);
    if (c === "transparent") return 0;
    let m = c.match(/^rgba?\(([^)]*)\)$/);
    if (m) { const p = m[1].split(/[\s,\/]+/).filter(Boolean); return p.length > 3 ? parseFloat(p[3]) * (p[3].endsWith("%") ? 0.01 : 1) : 1; }
    m = c.match(/\/\s*([\d.]+%?)\s*\)$/);
    if (m) return m[1].endsWith("%") ? parseFloat(m[1]) / 100 : parseFloat(m[1]);
    return 1;
  };
  const border = (s) => {
    const sides = ["Top", "Right", "Bottom", "Left"].map((d) => { const w = s["border" + d + "Width"], st = s["border" + d + "Style"], c = s["border" + d + "Color"]; return st === "none" || st === "hidden" || parseFloat(w) === 0 ? "none" : `${w} ${st} ${c}`; });
    return sides.every((x) => x === sides[0]) ? sides[0] : sides.join(" | ");
  };
  const paintsBorder = (s) => ["Top", "Right", "Bottom", "Left"].some((d) => { const st = s["border" + d + "Style"]; return st !== "none" && st !== "hidden" && parseFloat(s["border" + d + "Width"]) > 0 && alpha(s["border" + d + "Color"]) > 0; });
  const drawnOutline = (s) => (s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0 && alpha(s.outlineColor) > 0 ? `${s.outlineColor} ${s.outlineStyle} ${s.outlineWidth} off ${s.outlineOffset}` : "none");
  const behind = (el) => { for (let n = el; n; n = parentOf(n)) { const c = getComputedStyle(n).backgroundColor; if (alpha(c) > 0) return c; } return "none(canvas)"; };
  // (g) A long value is kept as a prefix plus an FNV-1a hash of the WHOLE string (`…#hash/length`), so a URL or data: URI that
  // differs past the prefix still differs. The first fix cut background-image at 60/80/120 characters.
  const hash = (str) => { let h = 0x811c9dc5; for (let n = 0; n < str.length; n++) { h ^= str.charCodeAt(n); h = Math.imul(h, 0x01000193); } return (h >>> 0).toString(16).padStart(8, "0"); };
  const full = (v, n) => { v = String(v ?? ""); return v.length <= n ? v : `${v.slice(0, n)}…#${hash(v)}/${v.length}`; };
  // background-position / -size / -repeat, only when an image is painted: a sprite hover moves nothing else (naver 뉴스, 2026-09-29).
  const bgLayout = (s) => (s.backgroundImage && s.backgroundImage !== "none" ? `${s.backgroundPosition} / ${s.backgroundSize} / ${s.backgroundRepeat}` : "");
  // backdrop-filter, clip-path and mask (image + position + size: an icon drawn through a mask sprite moves by mask-position).
  const extras = (s) => {
    const x = [];
    if (s.backdropFilter && s.backdropFilter !== "none") x.push(`backdrop:${s.backdropFilter}`);
    if (s.clipPath && s.clipPath !== "none") x.push(`clip:${full(s.clipPath, 60)}`);
    const std = !!(s.maskImage && s.maskImage !== "none");
    const m = std ? s.maskImage : s.webkitMaskImage && s.webkitMaskImage !== "none" ? s.webkitMaskImage : "";
    if (m) x.push(`mask:${full(m, 60)} @ ${std ? s.maskPosition : s.webkitMaskPosition} / ${std ? s.maskSize : s.webkitMaskSize}`);
    return x.join(";");
  };
  // ::before/::after only when something is painted (transparent empty boxes are not a state change). Any border side counts
  // (an underline bar is usually border-bottom), and so do a drawn outline, a glyph and backdrop/clip/mask.
  const pseudo = (el, ps) => {
    const c = getComputedStyle(el, ps);
    if (c.content === "none" || c.content === "normal" || c.display === "none") return "";
    const glyph = c.content !== '""' && c.content !== "''";
    const bd = paintsBorder(c), ol = drawnOutline(c), ex = extras(c);
    const paints = alpha(c.backgroundColor) > 0 || c.backgroundImage !== "none" || c.boxShadow !== "none" || bd || ol !== "none" || glyph || ex !== "";
    if (!paints) return "";
    const lay = bgLayout(c);
    return `${ps}{content:${full(c.content, 40)};bg:${c.backgroundColor};img:${full(c.backgroundImage, 60)}${lay ? `;pos:${lay}` : ""};color:${glyph ? c.color : "-"};op:${c.opacity};tf:${c.transform};bs:${c.boxShadow};size:${c.width}x${c.height}${bd ? `;bd:${border(c)}` : ""}${ol !== "none" ? `;ol:${ol}` : ""}${c.visibility !== "visible" ? `;vis:${c.visibility}` : ""}${ex ? `;${ex}` : ""}}`;
  };
  const dec = (s) => (s.textDecorationLine === "none" ? "none" : `${s.textDecorationLine} ${s.textDecorationStyle} ${s.textDecorationColor}`);
  const hasOwnText = (n) => [...n.childNodes].some((x) => x.nodeType === 3 && x.textContent.trim());
  // EVERY element descendant, breadth-first, empty layers included, open shadow roots pierced; keyed by child-index path
  // (".sN" = child N of a shadow root) so a node keeps its key between reads. Wanted's hover layer is an empty child div (2026-09-29).
  const SKIP = /^(script|style|template|noscript|link|meta|slot)$/i;
  const descendants = (el) => {
    const list = [], queue = [];
    const push = (parent, p) => {
      [...(parent.children || [])].forEach((k, n) => { if (!SKIP.test(k.tagName)) queue.push([k, p ? `${p}.${n}` : `${n}`]); });
      if (parent.shadowRoot) [...parent.shadowRoot.children].forEach((k, n) => { if (!SKIP.test(k.tagName)) queue.push([k, p ? `${p}.s${n}` : `s${n}`]); });
    };
    push(el, "");
    for (let h = 0; h < queue.length && h < 5000; h++) { const [k, p] = queue[h]; if (list.length < MAXK) list.push([k, p]); push(k, p); }
    return { list, total: queue.length };
  };
  // Defaults are omitted from a descendant record (the Node side restores them), which keeps 150-node snapshots small.
  const KDEF = { bg: "rgba(0, 0, 0, 0)", op: "1", tf: "none", filter: "none", deco: "none", shadow: "none", outline: "none", border: "none", img: "none", vis: "visible", fill: "", pseudo: "", ex: "", bgpos: "", src: "", href: "", geo: "", fa: "", paint: "", grad: "", stop: "" };
  // (h) image sources: currentSrc (what is shown), the src attribute when it differs, and a hash of srcset. <source> by its srcset.
  const srcOf = (k, tag) => {
    if (tag === "img" || (tag === "input" && k.type === "image")) {
      const a = k.getAttribute("src") || "", cur = k.currentSrc || k.src || "", set = k.getAttribute("srcset");
      return `cur=${full(cur, 80)}${a && a !== cur ? ` src=${full(a, 80)}` : ""}${set ? ` set=#${hash(set)}` : ""}`;
    }
    if (tag === "source") return `set=#${hash(k.getAttribute("srcset") || k.getAttribute("src") || "")}${k.getAttribute("media") ? ` media=${k.getAttribute("media")}` : ""}`;
    return "";
  };
  // (i) SVG internals. A reference resolves only when it points into this document (`#id`, or this page's URL + #id); an external
  // sprite (`icons.svg#x`) is compared as a string. One gradient href hop is followed to find inherited stops.
  const XL = "http://www.w3.org/1999/xlink";
  const hrefOf = (k) => k.getAttribute("href") ?? k.getAttributeNS(XL, "href") ?? k.getAttribute("xlink:href");
  const localId = (ref) => { const s = String(ref || ""), n = s.indexOf("#"); if (n < 0) return null; const pre = s.slice(0, n); if (pre && pre !== location.href.split("#")[0]) return null; try { return decodeURIComponent(s.slice(n + 1)); } catch { return s.slice(n + 1); } };
  const byId = (k, id) => { const r = k.getRootNode && k.getRootNode(); return (r && r !== document && r.getElementById ? r.getElementById(id) : null) || document.getElementById(id); };
  const stopsOf = (g) => {
    for (let hop = 0, x = g; x && hop < 3; hop++) {
      const st = [...x.children].filter((c) => c.tagName.toLowerCase() === "stop");
      if (st.length) return st.map((c) => { const cs = getComputedStyle(c); return `${c.getAttribute("offset") ?? "0"}:${cs.stopColor}@${cs.stopOpacity}`; }).join(",");
      const id = localId(hrefOf(x)); x = id ? byId(x, id) : null;
    }
    return "";
  };
  const paintRef = (k, v, which) => {
    const m = String(v || "").match(/url\(\s*["']?([^"')]*)["']?\s*\)/);
    if (!m) return "";
    const id = localId(m[1]), t = id ? byId(k, id) : null;
    if (!t) return `${which}→${full(m[1], 40)} (unresolved)`;
    const tag = t.tagName.toLowerCase();
    return `${which}→#${id} ${tag}[${/gradient$/.test(tag) ? stopsOf(t) : "#" + hash(t.outerHTML.slice(0, 4000))}]`;
  };
  const svgHref = (k, tag) => {
    if (!/^(use|image|feimage|textpath|mpath)$/.test(tag)) return "";
    const h = hrefOf(k);
    if (h == null) return "";
    const id = localId(h), t = id ? byId(k, id) : null;
    return `${full(h, 80)}${t ? ` →${t.tagName.toLowerCase()}#${hash(t.outerHTML.slice(0, 4000))}` : id ? " →(unresolved)" : ""}`;
  };
  const svgGeo = (k, tag, s) => {
    const out = [];
    if (tag === "path") { out.push(`d=${full(k.getAttribute("d") || "", 48)}`); if (s.d && s.d !== "none") out.push(`css=#${hash(s.d)}`); }
    if (tag === "polygon" || tag === "polyline") out.push(`pts=${full(k.getAttribute("points") || "", 48)}`);
    if (tag !== "svg" && typeof SVGGraphicsElement !== "undefined" && k instanceof SVGGraphicsElement) { try { const b = k.getBBox(); out.push(`box=${round1(b.x)},${round1(b.y)} ${round1(b.width)}x${round1(b.height)}`); } catch {} }
    return out.join(" ");
  };
  const kidRec = (k, p) => {
    const s = getComputedStyle(k), tag = k.tagName.toLowerCase(), isSvg = typeof SVGElement !== "undefined" && k instanceof SVGElement;
    // layout size, not getBoundingClientRect: a scale on the control would otherwise "change" every descendant
    const o = { k: `${tag}@${p}`, d: short(k).slice(0, 48), fg: s.color, sz: k.offsetWidth !== undefined ? `${k.offsetWidth}x${k.offsetHeight}` : `${s.width}x${s.height}` };
    const put = (n, v) => { if (v !== KDEF[n]) o[n] = v; };
    put("bg", s.backgroundColor); put("op", s.opacity); put("tf", s.transform); put("filter", s.filter); put("deco", dec(s));
    put("shadow", s.boxShadow); put("outline", drawnOutline(s)); put("border", border(s));
    put("img", s.backgroundImage === "none" ? "none" : full(s.backgroundImage, 80));
    put("bgpos", bgLayout(s));
    put("vis", s.display === "none" ? "display:none" : s.visibility !== "visible" ? `visibility:${s.visibility}` : "visible");
    put("fill", isSvg ? `${s.fill}|${s.stroke}` : "");
    put("pseudo", pseudo(k, "::before") + pseudo(k, "::after"));
    put("ex", extras(s));
    put("src", srcOf(k, tag));
    if (isSvg) {
      const f = k.getAttribute("fill"), st = k.getAttribute("stroke");
      put("fa", f == null && st == null ? "" : `fill=${f ?? "-"} stroke=${st ?? "-"}`);
      put("paint", `fo=${s.fillOpacity} so=${s.strokeOpacity} sw=${s.strokeWidth} dash=${s.strokeDasharray} off=${s.strokeDashoffset}`);
      put("geo", svgGeo(k, tag, s));
      put("href", svgHref(k, tag));
      put("grad", [paintRef(k, s.fill, "fill"), paintRef(k, s.stroke, "stroke"), paintRef(k, s.filter, "filter")].filter(Boolean).join("; "));
      if (tag === "stop") put("stop", `${s.stopColor}@${s.stopOpacity} off=${k.getAttribute("offset") ?? ""}`);
    }
    if (!k.children.length && !hasOwnText(k) && !isSvg && !/^(img|picture|video|canvas|input|textarea|select|iframe|object|embed)$/.test(tag)) o.empty = 1;
    return o;
  };
  const upRec = (n, lvl) => {
    const s = getComputedStyle(n);
    return { k: `up${lvl}:${short(n).slice(0, 40)}`, bg: s.backgroundColor, border: border(s), shadow: s.boxShadow, outline: drawnOutline(s), tf: s.transform, op: s.opacity, filter: s.filter, img: s.backgroundImage === "none" ? "" : full(s.backgroundImage, 60), bgpos: bgLayout(s), pseudo: pseudo(n, "::before") + pseudo(n, "::after"), ex: extras(s), focusWithin: n.matches(":focus-within") };
  };
  const labelEl = (el) => (hasOwnText(el) ? el : [...el.querySelectorAll("*")].find((k) => hasOwnText(k) && !k.closest("svg")) || el);
  const ancestors = (el, upLevels) => { const out = []; for (let l = 1, p = parentOf(el); l <= upLevels && p && p !== document.body && p !== document.documentElement; l++, p = parentOf(p)) out.push(p); return out; };

  KB.snap = (i, upLevels) => {
    const el = KB.get(i);
    if (!el) return null;
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    const lab = labelEl(el), ls = getComputedStyle(lab);
    const D = descendants(el);
    const kids = D.list.map(([k, p]) => kidRec(k, p));
    // (f)+(i) what the scope string counts: SVG descendants by tag, and <img>/<source> descendants
    const svgN = {};
    let imgN = 0;
    for (const [k] of D.list) { const t = k.tagName.toLowerCase(); if (typeof SVGElement !== "undefined" && k instanceof SVGElement) svgN[t] = (svgN[t] || 0) + 1; else if (t === "img" || t === "source" || (t === "input" && k.type === "image")) imgN++; }
    return {
      bg: s.backgroundColor, behind: behind(el), fg: s.color,
      border: border(s), radius: s.borderRadius, shadow: s.boxShadow, outline: drawnOutline(s), outlineStyle: s.outlineStyle,
      transform: s.transform, opacity: s.opacity, filter: s.filter, bgImage: s.backgroundImage === "none" ? "none" : full(s.backgroundImage, 120),
      bgPos: bgLayout(s), src: srcOf(el, el.tagName.toLowerCase()), kidsSvg: Object.entries(svgN).map(([t, n]) => `${t} ${n}`).join(", "), kidsImg: imgN,
      deco: dec(s), extra: extras(s),
      before: pseudo(el, "::before"), after: pseudo(el, "::after"),
      size: `${round1(r.width)}x${round1(r.height)}`, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`,
      label: { k: short(lab).slice(0, 40), fg: ls.color, font: `${ls.fontSize}/${ls.fontWeight}`, deco: dec(ls), op: ls.opacity, tf: ls.transform },
      kids, kidsTotal: D.total, kidsEmpty: kids.filter((k) => k.empty).length,
      ups: ancestors(el, upLevels).map((p, n) => upRec(p, n + 1)),
      is: { hover: el.matches(":hover"), active: el.matches(":active"), focus: el.matches(":focus"), focusVisible: el.matches(":focus-visible"), focusWithin: el.matches(":focus-within") },
    };
  };
  // Why a control has no interactive state to read: native disabled (incl. a disabled fieldset), aria-disabled on it or an
  // ancestor, pointer-events:none (inherited, so the computed value covers ancestors), or inside an inert subtree.
  const disabledKinds = (el) => {
    const k = [];
    try { if (el.disabled === true || el.matches(":disabled")) k.push("disabled"); } catch {}
    if (el.closest && el.closest('[aria-disabled="true"]')) k.push("aria-disabled");
    if (getComputedStyle(el).pointerEvents === "none") k.push("pointer-events:none");
    if (el.closest && el.closest("[inert]")) k.push("inert");
    return k;
  };
  KB.disabled = (i) => { const el = KB.get(i); return el ? disabledKinds(el) : null; };
  KB.identity = (i) => {
    const el = KB.get(i);
    if (!el) return null;
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    const kinds = disabledKinds(el);
    return {
      tag: el.tagName.toLowerCase(), role: el.getAttribute("role"), type: el.getAttribute("type"),
      href: el.getAttribute("href") ? el.getAttribute("href").slice(0, 140) : null,
      text: norm(el.textContent).slice(0, 80), aria: el.getAttribute("aria-label"), placeholder: el.getAttribute("placeholder"), title: el.getAttribute("title"),
      landmark: landmark(el), path: cssPath(el),
      rect: { x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: round1(r.width), h: round1(r.height) },
      radius: s.borderRadius, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`, lineHeight: s.lineHeight,
      family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(), letterSpacing: s.letterSpacing, cursor: s.cursor,
      transition: `${s.transitionProperty} ${s.transitionDuration} ${s.transitionTimingFunction} ${s.transitionDelay}`,
      tabIndex: el.tabIndex, disabled: kinds.length > 0, disabledKinds: kinds, pointerEvents: s.pointerEvents,
      ariaSelected: el.getAttribute("aria-selected"), ariaCurrent: el.getAttribute("aria-current"), ariaExpanded: el.getAttribute("aria-expanded"),
    };
  };
  // Longest transition (duration + delay; the delay list cycles) on the control, its compared descendants and their
  // ::before/::after, and the compared ancestors. The Node side waits past it before reading (kakaobank 0.4s, 2026-09-29).
  const msList = (v) => String(v).split(",").map((x) => { x = x.trim(); const n = x.endsWith("ms") ? parseFloat(x) : parseFloat(x) * 1000; return Number.isFinite(n) ? n : 0; });
  KB.longest = (i, upLevels) => {
    const el = KB.get(i);
    if (!el) return 0;
    const nodes = [el, ...descendants(el).list.map((x) => x[0]), ...ancestors(el, upLevels)];
    let max = 0;
    for (const n of nodes) for (const ps of [null, "::before", "::after"]) {
      const s = getComputedStyle(n, ps);
      if (ps && (s.content === "none" || s.content === "normal")) continue;
      const d = msList(s.transitionDuration), dl = msList(s.transitionDelay);
      d.forEach((x, j) => { const t = x + (dl[j % dl.length] || 0); if (x > 0 && t > max) max = t; });
    }
    return Math.round(max);
  };
  // True while a finite transition/animation is still running on the control, its subtree or 3 ancestors.
  KB.busy = (i) => {
    const el = KB.get(i);
    if (!el) return 0;
    const nodes = [el];
    for (let l = 0, p = parentOf(el); l < 3 && p && p !== document.body; l++, p = parentOf(p)) nodes.push(p);
    let n = 0;
    for (const node of nodes) {
      const list = node.getAnimations ? node.getAnimations({ subtree: node === el }) : [];
      for (const a of list) if ((a.playState === "running" || a.playState === "pending") && a.effect && a.effect.getComputedTiming().iterations !== Infinity) n++;
    }
    return n;
  };
  const deepAt = (x, y) => { let e = document.elementFromPoint(x, y); while (e && e.shadowRoot) { const inner = e.shadowRoot.elementFromPoint(x, y); if (!inner || inner === e) break; e = inner; } return e; };
  const within = (el, e) => { for (let n = e; n; n = parentOf(n)) if (n === el) return true; return false; };
  // Scrolls the control to the middle of the viewport and finds a point where the control (or a descendant) is what the pointer would hit.
  KB.hit = (i) => {
    const el = KB.get(i);
    if (!el) return null;
    el.scrollIntoView({ block: "center", inline: "nearest" });
    const r = el.getBoundingClientRect();
    let cover = null;
    for (const [fx, fy] of [[.5, .5], [.25, .5], [.75, .5], [.5, .25], [.5, .75], [.15, .15], [.85, .85]]) {
      const x = r.left + r.width * fx, y = r.top + r.height * fy;
      if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) continue;
      const e = deepAt(x, y);
      if (e && within(el, e)) return { x, y, hitEl: short(e) };
      if (e && !cover) {
        let f = e;
        for (let n = e; n; n = parentOf(n)) { const p = getComputedStyle(n).position; if (p === "fixed" || p === "sticky") { f = n; break; } }
        const fr = f.getBoundingClientRect();
        cover = `${short(e)} (fixed/sticky ancestor: ${f === e ? "itself" : short(f)} ${Math.round(fr.width)}x${Math.round(fr.height)} pos=${getComputedStyle(f).position})`;
      }
    }
    return { x: null, y: null, cover: cover || "no point of the control lies inside the viewport", rect: { x: Math.round(r.left), y: Math.round(r.top), w: round1(r.width), h: round1(r.height) } };
  };
  KB.hideOverlays = (i) => {
    const target = KB.get(i);
    const anc = new Set();
    for (let n = target; n; n = parentOf(n)) anc.add(n);
    const hidden = [];
    KB.hidden = KB.hidden || [];
    for (const el of document.querySelectorAll("body *")) {
      if (anc.has(el) || el.contains(target)) continue;
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40 || s.display === "none") continue;
      el.__omdPrev = [el.style.getPropertyValue("display"), el.style.getPropertyPriority("display")];
      el.style.setProperty("display", "none", "important");
      KB.hidden.push(el);
      hidden.push(`${short(el)} ${Math.round(r.width)}x${Math.round(r.height)} pos=${s.position}`);
    }
    return hidden;
  };
  KB.restoreOverlays = () => { for (const el of KB.hidden || []) { const [v, pr] = el.__omdPrev || ["", ""]; if (v) el.style.setProperty("display", v, pr); else el.style.removeProperty("display"); } KB.hidden = []; };
  KB.fixedInventory = () => {
    const out = [];
    for (const el of document.querySelectorAll("body *")) {
      const s = getComputedStyle(el);
      if (s.position !== "fixed" && s.position !== "sticky") continue;
      const r = el.getBoundingClientRect();
      if (r.width < 40 || r.height < 40) continue;
      out.push(`${short(el)} ${Math.round(r.width)}x${Math.round(r.height)} pos=${s.position} z=${s.zIndex}`);
    }
    return out.slice(0, 20);
  };
  // The Tab walk. `active(false)` only looks; `active(true)` also records the landing (seen / first). Identity, not tabIndex,
  // decides which control was reached; `inside`/`wraps` name controls the landing sits in or contains.
  KB.seen = new Set();
  KB.first = null;
  KB.active = (commit) => {
    const a = deepActive();
    const isBody = !a || a === document.body || a === document.documentElement;
    const attr = !isBody && a.getAttribute ? a.getAttribute("data-omd-kb") : null;
    const isFrame = !isBody && /^(iframe|frame)$/i.test(a.tagName);   // Tab presses inside a (cross-origin) frame leave document.activeElement on the frame element
    const repeat = !isBody && KB.seen.has(a);
    const first = !isBody && KB.first === a;
    const inside = [], wraps = [];
    if (!isBody) for (const t of q("[data-omd-kb]")) {
      if (t === a) continue;
      const ids = t.getAttribute("data-omd-kb").split(" ").map(Number);
      if (deepContains(t, a)) inside.push(...ids); else if (deepContains(a, t)) wraps.push(...ids);
    }
    if (commit && !isBody) { KB.seen.add(a); if (!KB.first) KB.first = a; }
    return { idxs: attr ? attr.split(" ").map(Number) : [], isBody, isFrame, repeat, first, distinct: KB.seen.size, inside, wraps, desc: short(a) };
  };
  // After an autofocus or a synthetic click the next Tab would resume from that spot; a span inserted at the start and removed again collapses the starting point to the top.
  KB.resetFocusToStart = () => {
    const a = document.activeElement;
    if (a && a.blur) a.blur();
    const s = document.createElement("span");
    s.tabIndex = -1;
    document.body.insertBefore(s, document.body.firstChild);
    s.focus();
    s.remove();
    scrollTo(0, 0);
  };
  KB.survey = (limit, minH) => {
    const rows = [], seen = new Set();
    for (const el of q(INTERACTIVE)) {
      if (!visible(el, minH)) continue;
      const s = getComputedStyle(el), r = el.getBoundingClientRect();
      const text = norm(el.textContent).slice(0, 60), aria = el.getAttribute("aria-label"), ph = el.getAttribute("placeholder");
      const key = `${el.tagName}|${text}|${aria}|${el.getAttribute("href")}|${Math.round(r.left)}|${Math.round(r.top + scrollY)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const tag = el.tagName.toLowerCase(), role = el.getAttribute("role"), b = border(s);
      rows.push({
        tag, role, type: el.getAttribute("type"), href: el.getAttribute("href") ? el.getAttribute("href").slice(0, 90) : null, text, aria, ph,
        x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w: round1(r.width), h: round1(r.height),
        radius: s.borderRadius, padding: s.padding, font: `${s.fontSize}/${s.fontWeight}`, family: s.fontFamily.split(",")[0].replace(/["']/g, "").trim(), lineHeight: s.lineHeight,
        bg: s.backgroundColor, fg: s.color, border: b, cursor: s.cursor, tabIndex: el.tabIndex, landmark: landmark(el), cls: cls(el),
        buttonLike: /^(button|input|select|summary)$/.test(tag) || /^(button|tab|menuitem|combobox|searchbox)$/.test(role || "") || alpha(s.backgroundColor) > 0 || (b !== "none" && parseFloat(s.borderRadius) > 0),
      });
      if (rows.length >= limit) break;
    }
    return { rows, fixed: KB.fixedInventory() };
  };
}

// The consent step: only reject / necessary-only buttons are ever pressed (same lists as probe-component-states.mjs).
function consentFn() {
  const REJECT = ["#onetrust-reject-all-handler", "#reject-all", "#CybotCookiebotDialogBodyButtonDecline", "button[data-testid='uc-deny-all-button']", ".didomi-continue-without-agreeing", "#didomi-notice-disagree-button", "#cm [data-role=\"necessary\"]", "#c-s-bn", "button.cc-btn[data-role=necessary]"];
  const roots = [document];
  const walk = (r) => { for (const h of r.querySelectorAll("*")) if (h.shadowRoot) { roots.push(h.shadowRoot); walk(h.shadowRoot); } };
  walk(document);
  for (const root of roots) for (const sel of REJECT) { const b = root.querySelector(sel); if (b && b.getClientRects().length) { b.click(); return sel; } }
  const WORDS = /^(reject all|reject|decline all|decline|only necessary|necessary only|use necessary only|essential only|only essential|alle ablehnen|ablehnen|nur erforderliche( verwenden)?|nur notwendige|tout refuser|refuser|continuer sans accepter|rechazar todo|rifiuta tutto|refuză toate|refuz toate|refuză|respinge tot|odmítnout vše|odmítnout|avvisa alla|neka alla|endast nödvändiga cookies|endast nödvändiga|reject non-essential|refuse|deny all|deny|alles weigeren|weigeren|weiger|alleen noodzakelijke cookies|alleen noodzakelijk|weiger alle|拒否する|すべて拒否|모두 거부|거부|필수(만| 항목만| 쿠키만) (허용|동의)(하기)?)$/i;
  for (const root of roots) for (const b of root.querySelectorAll("button, [role=button], a")) {
    if (b.getClientRects().length && WORDS.test((b.textContent || "").trim())) { b.click(); return "text:" + b.textContent.trim(); }
  }
  return null;
}

// ───────────────────────────── diffing (Node side) ─────────────────────────────
// Defaults omitted from descendant records in the page (see kidRec).
const KDEF = { bg: "rgba(0, 0, 0, 0)", op: "1", tf: "none", filter: "none", deco: "none", shadow: "none", outline: "none", border: "none", img: "none", vis: "visible", fill: "", pseudo: "", ex: "", bgpos: "", src: "", href: "", geo: "", fa: "", paint: "", grad: "", stop: "" };
const SELF_PROPS = ["bg", "fg", "border", "radius", "shadow", "outline", "transform", "opacity", "filter", "bgImage", "bgPos", "src", "deco", "extra", "size", "padding", "font"];
const KID_PROPS = ["fg", "bg", "op", "tf", "filter", "deco", "shadow", "outline", "border", "img", "bgpos", "vis", "fill", "fa", "paint", "geo", "href", "grad", "stop", "src", "sz", "ex", "pseudo"];
const UP_PROPS = ["bg", "border", "shadow", "outline", "tf", "op", "filter", "img", "bgpos", "ex"];
// A pseudo record is one string (`::before{content:…;bg:…;img:…;pos:…;…}`); `delta` names the fields that differ, so a sprite shift
// reads `::before.pos: -156px -144px / … -> -104px -144px / …` instead of two long strings that look alike.
const PSEUDO_KEYS = "content|bg|img|pos|color|op|tf|bs|size|bd|ol|vis|backdrop|clip|mask";
function pseudoFields(str) {
  const out = {};
  for (const seg of String(str ?? "").split(/(?=::(?:before|after)\{)/)) {
    const m = seg.match(/^(::(?:before|after))\{([\s\S]*)\}$/);
    if (!m) continue;
    out[m[1]] = seg;
    const re = new RegExp(`(^|;)(${PSEUDO_KEYS}):`, "g"), hits = [];
    for (let x; (x = re.exec(m[2])); ) hits.push({ k: x[2], start: x.index + x[1].length, v: re.lastIndex });
    hits.forEach((h, j) => { out[`${m[1]}.${h.k}`] = m[2].slice(h.v, j + 1 < hits.length ? hits[j + 1].start - 1 : m[2].length); });
  }
  return out;
}
function pseudoDelta(a, b) {
  const A = pseudoFields(a), B = pseudoFields(b), d = [];
  for (const ps of ["::before", "::after"]) {
    if (!A[ps] && !B[ps]) continue;
    if (!A[ps] || !B[ps]) { d.push(`${ps}: ${A[ps] ? "painted" : "not painted"} -> ${B[ps] ? `painted ${B[ps]}` : "not painted"}`); continue; }
    for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) if (k.startsWith(`${ps}.`) && A[k] !== B[k]) d.push(`${k}: ${A[k] ?? "-"} -> ${B[k] ?? "-"}`);
  }
  return d.join("; ");
}
// Each change names the element set it was found in: self, self-pseudo, label, descendant, descendant-pseudo, ancestor, ancestor-pseudo.
function diffSnap(a, b) {
  const out = [];
  const cmp = (set, prop, x, y, el) => {
    if (x === y) return;
    const delta = /pseudo$/.test(set) ? pseudoDelta(x, y) : "";
    out.push({ set, prop, from: x, to: y, ...(el ? { el } : {}), ...(delta ? { delta } : {}) });
  };
  for (const p of SELF_PROPS) cmp("self", p, a[p] ?? "", b[p] ?? "");
  cmp("self-pseudo", "before", a.before ?? "", b.before ?? "");
  cmp("self-pseudo", "after", a.after ?? "", b.after ?? "");
  for (const p of ["fg", "font", "deco", "op", "tf"]) cmp("label", `label.${p}`, a.label?.[p], b.label?.[p], a.label?.k);
  // descendants by child-index path; a path whose tag differs between the reads is a DOM change, not N property changes
  const keyOf = (k) => k.k.slice(k.k.indexOf("@") + 1);
  const am = new Map((a.kids ?? []).map((k) => [keyOf(k), k])), bm = new Map((b.kids ?? []).map((k) => [keyOf(k), k]));
  let added = 0, removed = 0, retagged = 0;
  for (const [p, y] of bm) {
    const x = am.get(p);
    if (!x) { added++; continue; }
    if (x.k !== y.k) { retagged++; continue; }
    for (const q of KID_PROPS) cmp(q === "pseudo" ? "descendant-pseudo" : "descendant", `${y.k}.${q}`, x[q] ?? KDEF[q] ?? "", y[q] ?? KDEF[q] ?? "", y.d);
  }
  for (const p of am.keys()) if (!bm.has(p)) removed++;
  const capped = (a.kidsTotal ?? 0) > (a.kids?.length ?? 0) || (b.kidsTotal ?? 0) > (b.kids?.length ?? 0);
  if (retagged || (a.kidsTotal ?? 0) !== (b.kidsTotal ?? 0) || (!capped && (added || removed))) {
    out.push({ set: "descendant", prop: "dom", from: `${a.kidsTotal ?? 0} descendants`, to: `${b.kidsTotal ?? 0} descendants (+${added} -${removed}${retagged ? `, ${retagged} replaced by another tag` : ""} among the compared)` });
  }
  for (let j = 0; j < Math.min(a.ups?.length ?? 0, b.ups?.length ?? 0); j++) {
    for (const p of UP_PROPS) cmp("ancestor", `up${j + 1}.${p}`, a.ups[j][p] ?? "", b.ups[j][p] ?? "", a.ups[j].k);
    cmp("ancestor-pseudo", `up${j + 1}.pseudo`, a.ups[j].pseudo ?? "", b.ups[j].pseudo ?? "", a.ups[j].k);
  }
  return out;
}
// (f) the element set a verdict covers, so a "no change" carries its own scope.
// (g)(h)(i) the property list, so a "no change" names what was compared (SVG attributes included when SVG is in scope).
const PROPS_SCOPE = "props: colour, bg, border, drawn outline, shadow, opacity, transform, filter, visibility, size, text-decoration, background-image (whole value) + background-position/-size/-repeat, mask image/position/size, clip-path, backdrop-filter, <img>/<source> currentSrc/src/srcset, SVG fill/stroke (computed and attributes), fill/stroke opacity, stroke width/dash, <path> d, points, bbox, <use>/<image> href (+ target hash), <stop> colours and url(#id) gradient stops";
const scopeOf = (s) => {
  const n = s.kids?.length ?? 0, tot = s.kidsTotal ?? n, u = s.ups?.length ?? 0;
  const svg = s.kidsSvg ? `SVG in scope: ${s.kidsSvg}` : "no SVG";
  return `self + its ::before/::after · ${n} descendant${n === 1 ? "" : "s"}${tot > n ? ` (first ${n} of ${tot}, breadth-first; raise --max-kids)` : ""}, ${s.kidsEmpty ?? 0} of them empty, ${svg}, ${s.kidsImg ?? 0} <img>/<source>, each with its ::before/::after · ${u} ancestor level${u === 1 ? "" : "s"} with their ::before/::after · ${PROPS_SCOPE}`;
};
const stateDiff = (rest, s) => {
  const unstable = s.unstable ?? [];
  const changed = diffSnap(rest, s).filter((x) => !unstable.includes(x.prop));
  const by = {};
  for (const x of changed) by[x.set] = (by[x.set] ?? 0) + 1;
  const compared = scopeOf(s);
  const verdict = changed.length ? `CHANGED (${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(", ")}) — compared ${compared}`
    : unstable.length ? `NO SETTLED CHANGE across ${compared}; still moving between reads: ${unstable.join(", ")}`
    : `NO CHANGE across ${compared}`;
  return { changed, compared, verdict, ...(unstable.length ? { unstableProps: unstable } : {}) };
};

// ───────────────────────────── main ─────────────────────────────
let page = null;
const C = [];   // resolved controls

// Evidence is optional and must finish before the measurement watchdog. Leave time to emit the result.
const evidenceRemaining = () => BUDGET - (Date.now() - T0) - 1000;
const evidenceError = (e) => String(e?.message ?? e).split("\n")[0].slice(0, 240);
const evidencePath = (file) => path.relative(OUT ? path.dirname(path.resolve(OUT)) : process.cwd(), file).split(path.sep).join("/");
async function evidenceStep(label, run, cap = 5000, reserve = 0) {
  const available = evidenceRemaining() - reserve;
  const timeout = Math.floor(Math.min(cap, available));
  if (timeout <= 0) throw new Error(`${label} skipped: insufficient --budget ${BUDGET}ms (${Math.max(0, Math.floor(evidenceRemaining()))}ms left for evidence; ${reserve}ms reserved)`);
  let timer;
  try {
    return await Promise.race([
      Promise.resolve().then(() => run(timeout)),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`${label} timed out after ${timeout}ms${available <= cap ? " (remaining --budget)" : ""}`)), timeout); }),
    ]);
  } finally { clearTimeout(timer); }
}

// CSS viewport coordinates, rounded outwards so fractional edges retain all the padded pixels.
function paddedViewportClip(rect, viewport, padding = 12) {
  if (!rect || !viewport || ![rect.x, rect.y, rect.width, rect.height, viewport.width, viewport.height, padding].every(Number.isFinite)) throw new Error("invalid control/viewport bounds");
  if (rect.width <= 0 || rect.height <= 0 || viewport.width <= 0 || viewport.height <= 0 || padding < 0) throw new Error("empty control/viewport bounds");
  if (rect.x + rect.width <= 0 || rect.y + rect.height <= 0 || rect.x >= viewport.width || rect.y >= viewport.height) throw new Error("control is outside the viewport; crop skipped without scrolling");
  const x = Math.max(0, Math.floor(rect.x - padding)), y = Math.max(0, Math.floor(rect.y - padding));
  const right = Math.min(viewport.width, Math.ceil(rect.x + rect.width + padding));
  const bottom = Math.min(viewport.height, Math.ceil(rect.y + rect.height + padding));
  return { x, y, width: right - x, height: bottom - y };
}

let shotsReady = false;
async function stateShot(c, name, state) {
  try {
    const dir = path.resolve(SHOTS);
    if (!shotsReady) { await evidenceStep("--shots directory", () => fs.promises.mkdir(dir, { recursive: true })); shotsReady = true; }
    const selector = { hover: ":hover", pressed: ":active", focus: ":focus-visible" }[name] ?? null;
    const bounds = await evidenceStep(`${name} crop bounds`, () => page.evaluate(([i, sel]) => {
      const el = window.__omdKb.get(i);
      if (!el) throw new Error("control vanished before its crop");
      if (sel && !el.matches(sel)) throw new Error(`${sel} no longer matches; crop skipped`);
      const r = el.getBoundingClientRect();
      return { rect: { x: r.x, y: r.y, width: r.width, height: r.height }, viewport: { width: innerWidth, height: innerHeight } };
    }, [c.i, selector]));
    const clip = paddedViewportClip(bounds.rect, bounds.viewport);
    const file = path.join(dir, `${encodeURIComponent(c.key)}-${name}.png`);
    // Page clips never scroll a control into view or release the pointer/focus. Keep the real caret, too.
    await evidenceStep(`${name} crop`, (timeout) => page.screenshot({ path: file, type: "png", clip, caret: "initial", timeout }));
    if (selector) {
      const matches = await evidenceStep(`${name} crop state check`, () => page.evaluate(([i, sel]) => window.__omdKb.get(i)?.matches(sel) ?? false, [c.i, selector]));
      if (!matches) throw new Error(`${selector} stopped matching during the crop`);
    }
    state.shot = evidencePath(file);
  } catch (e) { state.shotError = evidenceError(e); }
}

// Match Playwright's full-page dimensions; these are separate from all measured snapshots.
function visualPageSize() {
  const nodes = [document.body, document.documentElement].filter(Boolean);
  return {
    width: Math.max(innerWidth, ...nodes.flatMap((n) => [n.scrollWidth, n.offsetWidth, n.clientWidth])),
    height: Math.max(innerHeight, ...nodes.flatMap((n) => [n.scrollHeight, n.offsetHeight, n.clientHeight])),
  };
}

async function scrollVideo(dir, visual) {
  const finishReserve = CLOSE_TIMEOUT + 1000;
  const scrollReserve = Math.ceil(12000 / 120) * 60 + 500 + finishReserve;
  const consentReserve = 1500 + Math.max(0, Math.min(WAIT, 4000)) + scrollReserve;
  const loadReserve = Math.max(0, WAIT) + consentReserve;
  if (evidenceRemaining() < loadReserve + 1000) {
    visual.errors.push(`scroll video skipped: insufficient --budget ${BUDGET}ms (${Math.max(0, Math.floor(evidenceRemaining()))}ms left; at least ${loadReserve + 1000}ms needed for load wait, consent, scroll and close)`);
    return;
  }
  let context = null, video = null, scroll = null;
  try {
    context = await evidenceStep("scroll context", () => browser.newContext({ ...CONTEXT, recordVideo: { dir, size: { width: 1440, height: 900 } } }), 5000, loadReserve);
    const pg = await evidenceStep("scroll page", () => context.newPage(), 5000, loadReserve);
    context.on("page", (p) => { if (p !== pg) p.close().catch(() => {}); });
    video = pg.video();
    if (!video) throw new Error("scroll video recorder unavailable");
    await evidenceStep("scroll load", (timeout) => pg.goto(url, { waitUntil: "load", timeout }), 45000, loadReserve);
    await evidenceStep("scroll load wait", () => sleep(WAIT), Math.max(0, WAIT) + 1000, consentReserve);
    const consent = await evidenceStep("scroll consent", () => pg.evaluate(consentFn), 5000, consentReserve);
    if (consent) {
      await evidenceStep("scroll consent settle", () => sleep(1500), 2500, Math.max(0, Math.min(WAIT, 4000)) + scrollReserve);
      await evidenceStep("scroll consent load", (timeout) => pg.waitForLoadState("load", { timeout }), 30000, Math.max(0, Math.min(WAIT, 4000)) + scrollReserve);
      await evidenceStep("scroll consent wait", () => sleep(Math.min(WAIT, 4000)), Math.max(0, Math.min(WAIT, 4000)) + 1000, scrollReserve);
    }
    scroll = await evidenceStep("scroll recording", () => pg.evaluate(async () => {
      const height = () => Math.max(innerHeight, ...[document.body, document.documentElement].filter(Boolean).flatMap((n) => [n.scrollHeight, n.offsetHeight, n.clientHeight]));
      scrollTo({ left: 0, top: 0, behavior: "instant" });
      let y = 0;
      while (true) {
        const bottom = Math.max(0, Math.min(height(), 12000) - innerHeight);
        if (y >= bottom) break;
        y = Math.min(y + 120, bottom);
        scrollTo({ left: 0, top: y, behavior: "instant" });
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      return { scrollY, pageHeight: height(), capped: height() > 12000 };
    }), Math.ceil(12000 / 120) * 60 + 1500, finishReserve);
  } catch (e) { visual.errors.push(evidenceError(e)); }
  finally {
    if (context) {
      try {
        // Closing finalizes the recording. A failed/unfinished recording is still useful, but explicitly marked.
        await evidenceStep("scroll close", () => context.close(), CLOSE_TIMEOUT, 1000);
        if (video) {
          const source = await evidenceStep("scroll video path", () => video.path());
          const file = path.join(dir, "scroll.webm");
          await evidenceStep("scroll video rename", () => fs.promises.rename(source, file));
          visual.scroll = { path: evidencePath(file), width: 1440, height: 900, completed: !!scroll, ...(scroll ?? {}) };
        }
      } catch (e) { visual.errors.push(evidenceError(e)); }
    }
  }
}

async function captureVisual() {
  const visual = (result.visual = { errors: [] });
  try {
    const dir = path.resolve(VISUAL);
    await evidenceStep("--visual directory", () => fs.promises.mkdir(dir, { recursive: true }));
    try {
      const size = await evidenceStep("viewport setup", () => page.evaluate(() => {
        scrollTo({ left: 0, top: 0, behavior: "instant" });
        return { width: innerWidth, height: innerHeight };
      }));
      const file = path.join(dir, "viewport.png");
      await evidenceStep("viewport screenshot", (timeout) => page.screenshot({ path: file, type: "png", caret: "initial", timeout }));
      visual.viewport = { path: evidencePath(file), ...size };
    } catch (e) { visual.errors.push(evidenceError(e)); }
    try {
      const size = await evidenceStep("full-page dimensions", () => page.evaluate(visualPageSize));
      const clip = { x: 0, y: 0, width: size.width, height: Math.min(size.height, 12000) };
      const file = path.join(dir, "full.png");
      // Always constrain the clip: lazy content can grow between the size read and the screenshot.
      await evidenceStep("full-page screenshot", (timeout) => page.screenshot({ path: file, type: "png", fullPage: true, clip, caret: "initial", timeout }));
      visual.full = { path: evidencePath(file), width: clip.width, height: clip.height, pageHeight: size.height, capped: size.height > 12000 };
    } catch (e) { visual.errors.push(evidenceError(e)); }
    await scrollVideo(dir, visual);
  } catch (e) { visual.errors.push(evidenceError(e)); }
}

async function snapOf(c) {
  const read = () => page.evaluate(([i, u]) => window.__omdKb.snap(i, u), [c.i, c.up]).catch(() => null);
  let s = await read();
  if (!s) { await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [c.i, c.find]).catch(() => {}); s = await read(); }   // the site re-rendered: find it again once
  return s;
}
// Two reads 200ms apart; if they differ, a third after 600ms. Whatever still moves is reported as unstable, not as a state change.
async function readStable(c) {
  const a = await snapOf(c);
  if (!a) return null;
  await sleep(200);
  const b = (await snapOf(c)) ?? a;
  if (!diffSnap(a, b).length) return b;
  await sleep(600);
  const d = (await snapOf(c)) ?? b;
  d.unstable = [...new Set(diffSnap(b, d).map((x) => x.prop))];
  return d;
}
async function quiesce(cs) {
  const t0 = Date.now();
  while (Date.now() - t0 < 3000) {
    let busy = 0;
    for (const c of cs) if (c) busy += await page.evaluate((i) => window.__omdKb.busy(i), c.i).catch(() => 0);
    if (!busy) return;
    await sleep(150);
  }
}
// Wait past the longest transition in the compared set (>= --settle, <= SETTLE_CAP), then until running transitions end.
async function settleFor(cs) {
  let longest = 0;
  for (const c of cs) if (c) longest = Math.max(longest, await page.evaluate(([i, u]) => window.__omdKb.longest(i, u), [c.i, c.up]).catch(() => 0));
  const waitedMs = Math.min(SETTLE_CAP, Math.max(SETTLE_MIN, longest + 150));
  await sleep(waitedMs);
  await quiesce(cs);
  return { waitedMs, longestTransitionMs: longest };
}

async function loadWithRetries() {
  const attempts = [];
  const blockRe = /access denied|forbidden|just a moment|attention required|captcha|are you (a )?robot|unusual traffic|request blocked|request unsuccessful|비정상적인 접근|접근이 거부|접근 제한/i;
  for (let n = 0; n <= RETRIES; n++) {
    if (n > 0) { result.notes.push(`retry ${n}/${RETRIES} after ${RETRY_WAIT}ms`); await sleep(RETRY_WAIT); }
    const context = await browser.newContext(CONTEXT);
    await context.addInitScript(inPage, { maxKids: MAX_KIDS });
    const pg = await context.newPage();
    result.boot.loads++;
    let resp = null, gotoError = null;
    try { resp = await pg.goto(url, { waitUntil: "load", timeout: 45000 }); } catch (e) { gotoError = String(e.message || e).split("\n")[0].slice(0, 140); }
    await sleep(WAIT);
    const info = await pg.evaluate(() => ({ title: document.title, lang: document.documentElement.lang, href: location.href, text: (document.body?.innerText || "").slice(0, 400), len: (document.body?.innerText || "").length })).catch(() => null);
    const status = resp ? resp.status() : null;
    const chain = [];
    for (let r = resp?.request().redirectedFrom(); r; r = r.redirectedFrom()) chain.unshift(r.url());
    const blocked = !info || (status !== null && status >= 400) || blockRe.test(info.title) || (info.len < 800 && blockRe.test(info.text));
    attempts.push({ status, title: info?.title ?? null, gotoError, blocked });
    if (!blocked) {
      Object.assign(result.boot, { status, finalUrl: info.href, title: info.title, htmlLang: info.lang, contentLanguage: resp?.headers()["content-language"] ?? null, redirectChain: chain, attempts });
      context.on("page", (p) => { if (p !== pg) { result.notes.push(`extra page opened: ${p.url()}`); p.close().catch(() => {}); } });
      return pg;
    }
    await raceClose(context.close());
  }
  const last = attempts[attempts.length - 1];
  result.boot.block = { status: last.status, title: last.title, attempts };
  await emitAndExit(4);
}

async function park(c) {
  for (const [x, y] of [[3, 500], [1436, 500], [720, 998]]) {
    await page.mouse.move(x, y);
    await sleep(80);
    const h = await page.evaluate((i) => { const el = window.__omdKb.get(i); return el ? el.matches(":hover") : false; }, c.i).catch(() => false);
    if (!h) return true;
  }
  return false;
}

function finishFocus(c) {
  const R = result.controls[c.key], F = R.focus;
  // `changed` is measured against the PRISTINE page-top rest. The rest re-read after focus moved on is a second reading, not the
  // baseline: some sites leave a control in its focused look after blur (Kakao "소개" stays #f3f3f3, Samsung's GNB stays blue), and
  // using that read as the baseline hid the focus effect on 2026-09-29.
  F.baseline = "page-top rest read before any interaction";
  Object.assign(F, stateDiff(R.rest, F.snap));
  if (F.restAfterBlur) {
    F.changedVsAfterBlur = diffSnap(F.restAfterBlur, F.snap).filter((x) => !(F.snap.unstable ?? []).includes(x.prop));
    F.persistsAfterBlur = diffSnap(R.rest, F.restAfterBlur);   // what did not return to page-top rest once focus moved on
    // Tab scrolls the page: a sticky ancestor or a lazy image can differ from the page-top rest for reasons that are not focus.
    // A focus change whose value is still there after blur is flagged, and not counted as focus-only.
    const persist = new Map(F.persistsAfterBlur.map((x) => [x.prop, x.to]));
    let only = 0;
    for (const x of F.changed) { if (persist.has(x.prop) && persist.get(x.prop) === x.to) x.alsoPersists = true; else only++; }
    F.focusOnlyCount = only;
    if (F.changed.length && !only) F.verdict += " — every one of these is still present after focus moved on (restAfterBlur): a scroll/sticky/lazy-load effect or styling that outlives the blur; see changedVsAfterBlur";
  }
  const ring = F.changed.filter((x) => x.set === "descendant" && /\.(outline|shadow|border|bg)$/.test(x.prop));
  F.indication = {
    browserDefaultRing: F.snap.outline !== "none" && F.snap.outlineStyle === "auto",
    authoredOutline: F.snap.outline !== "none" && F.snap.outlineStyle !== "auto",
    descendantIndication: ring.map((x) => `${x.prop} <${x.el}>: ${x.from} -> ${x.to}`),
    changedProps: F.changed.map((x) => x.prop),
  };
}

async function keyboardPhase() {
  const rec = (c) => result.controls[c.key];
  const liveKinds = async (c) => (await page.evaluate((i) => window.__omdKb.disabled(i), c.i).catch(() => null)) ?? c.identity.disabledKinds ?? [];
  // (j) EVERY found control is walked. tabIndex is NOT consulted (Toss Bank's Radix tab reads -1), and the page-top disabled/inert
  // status is NOT trusted: socar's '맨 위로' is inert until the page scrolls, and Tab #18 reached it. The status is re-checked live.
  const walkable = C.filter((x) => x.found);
  if (!walkable.length) return;
  const byI = new Map(walkable.map((c) => [c.i, c]));
  const init = await page.evaluate(() => window.__omdKb.active(false));
  result.initialActive = init.desc;
  if (!init.isBody) await page.evaluate(() => window.__omdKb.resetFocusToStart());
  await page.evaluate(() => { window.__omdKb.seen.clear(); window.__omdKb.first = null; });
  const pending = new Set(walkable.map((c) => c.i));
  const near = {};
  let prevC = null, bodyRun = 0, repeatRun = 0, presses = 0, reReads = 0, stop = null;
  while (presses < MAX_TABS) {
    await page.keyboard.press("Tab");
    presses++;
    if (TAB_SETTLE) await sleep(TAB_SETTLE);
    // A page that reacts to focus can still be moving it when we look (hyundaicard, 2026-09-29): if the landing is body or an
    // element already visited, give it one more settle before believing it.
    const peek = await page.evaluate(() => window.__omdKb.active(false));
    if (TAB_SETTLE && (peek.isBody || (peek.repeat && !peek.isFrame))) { await sleep(TAB_SETTLE); reReads++; }
    const info = await page.evaluate(() => window.__omdKb.active(true));
    const hitC = walkable.find((c) => info.idxs.includes(c.i) && pending.has(c.i)) ?? null;
    const hitKinds = hitC ? await liveKinds(hitC) : null;   // (j) live, at the moment the landing matched the control
    for (const i of info.inside) if (pending.has(i) && !near[i]) near[i] = `Tab #${presses} focused ${info.desc}, which is INSIDE this control (the control was :focus-within, not focused itself)`;
    for (const i of info.wraps) if (pending.has(i) && !near[i]) near[i] = `Tab #${presses} focused ${info.desc}, which CONTAINS this control`;
    result.walk.push(`${presses}: ${info.desc}${info.repeat ? " (again)" : ""}${hitC ? ` <== ${hitC.key}` : ""}`);
    if (prevC || hitC) {
      const st = await settleFor([prevC, hitC]);
      if (prevC) { rec(prevC).focus.restAfterBlur = await readStable(prevC); if (rec(prevC).focus.restAfterBlur) finishFocus(prevC); prevC = null; }
      if (hitC) {
        const snap = await readStable(hitC);
        pending.delete(hitC.i);
        const dk0 = hitC.identity.disabledKinds ?? [], dk = hitKinds ?? dk0;
        const live = { disabledAtLanding: dk, ...(dk0.length ? { disabledAtPageTop: dk0 } : {}), ...(dk0.join() !== dk.join() ? { liveRecheck: `page top: ${dk0.join(", ") || "not disabled"}; at this Tab landing (live re-check): ${dk.join(", ") || "not disabled"}` } : {}) };
        if (!snap) rec(hitC).focus = { measured: false, unmeasured: `reached at Tab #${presses} but the element vanished before it could be read`, ...live };
        else if (!snap.is.focusVisible) rec(hitC).focus = { measured: false, unmeasured: `reached at Tab #${presses} but :focus-visible did not match`, is: snap.is, ...live };
        else {
          rec(hitC).focus = { measured: true, tabPress: presses, is: snap.is, snap, settle: st, ...live, ...(dk.length ? { disabled: dk, note: `the control is ${dk.join(", ")} (live, at the landing) but keyboard focus still reaches it, so focus is measured` } : {}) };
          prevC = hitC;
          if (SHOTS) await stateShot(hitC, "focus", rec(hitC).focus);
        }
      }
    }
    repeatRun = info.repeat && !info.isFrame ? repeatRun + 1 : 0;   // the same frame again is only Tab moving inside it
    bodyRun = info.isBody ? bodyRun + 1 : 0;
    if (!pending.size && !prevC) { stop = "all walkable controls reached"; break; }
    if (info.first && info.distinct >= 2) { stop = `cycle: Tab #${presses} wrapped back to the walk's first element ${info.desc}`; break; }
    if (repeatRun >= CYCLE_AFTER) { stop = `cycle: ${repeatRun} Tab presses in a row landed only on elements already visited (a focus loop; --cycle-after ${CYCLE_AFTER})`; break; }
    if (bodyRun >= 3) { stop = "focus left the document (3 presses in a row landed on body)"; break; }
    // (j) walking on for controls that cannot take focus only costs time: stop when every control still pending is natively
    // disabled right now. Inert / pointer-events / aria-disabled controls keep the walk going (they can become reachable).
    if (pending.size && !prevC && [...pending].every((i) => (byI.get(i).identity.disabledKinds ?? []).includes("disabled"))) {
      let still = 0;
      for (const i of pending) if ((await liveKinds(byI.get(i))).includes("disabled")) still++;
      if (still === pending.size) { stop = `every control still pending is natively disabled (live re-check at Tab #${presses}): ${[...pending].map((i) => byI.get(i).key).join(", ")}`; break; }
    }
  }
  if (!stop) stop = `cap --max-tabs ${MAX_TABS}`;
  if (prevC) {   // the last target: no later Tab moved the focus on, so blur it explicitly
    await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); });
    await settleFor([prevC]);
    rec(prevC).focus.restAfterBlur = await readStable(prevC);
    finishFocus(prevC);
  }
  for (const c of walkable) {   // (j) never reached: re-check live, on the page as the walk left it (scrolled, layers open)
    if (rec(c).focus) continue;
    const dk0 = c.identity.disabledKinds ?? [], dk = await liveKinds(c);
    const base = `not reached by Tab within ${presses} presses (walk stopped: ${stop})${near[c.i] ? `; ${near[c.i]}` : ""}`;
    const live = { disabledAtWalkEnd: dk, ...(dk0.length ? { disabledAtPageTop: dk0 } : {}) };
    if (dk.includes("disabled") || dk.includes("inert")) rec(c).focus = { measured: false, disabled: dk, ...live, unmeasured: `disabled — not measured (${dk.join(", ")}; live re-check after the walk${dk0.length ? `; page top: ${dk0.join(", ")}` : ""}): a natively disabled or inert control cannot take keyboard focus; ${base}` };
    else rec(c).focus = { measured: false, ...live, unmeasured: `${base}${dk0.length || dk.length ? `; disabled status — page top: ${dk0.join(", ") || "none"}, after the walk: ${dk.join(", ") || "none"}` : ""}` };
  }
  result.tabsPressed = presses;
  result.walkStop = stop;
  result.wrapped = stop.startsWith("cycle");
  result.tabReReads = reReads;
  await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); scrollTo(0, 0); }).catch(() => {});
}

async function mousePhase() {
  const baseUrl = page.url();
  await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); scrollTo(0, 0); }).catch(() => {});
  const order = C.filter((c) => c.found).sort((a, b) => Number(a.inputLike) - Number(b.inputLike));   // inputs last: focusing one opens layers
  for (const c of order) {
    const R = result.controls[c.key];
    const fail = (why) => { R.hover ??= { measured: false, unmeasured: why }; R.pressed ??= { measured: false, unmeasured: why }; };
    let isDown = false, hidden = [];
    try {
      const h0 = await page.evaluate((i) => window.__omdKb.hit(i), c.i);     // also scrolls the control to the middle of the viewport
      if (!h0) { fail("control vanished from the DOM"); continue; }
      await sleep(450);
      // (d)(j) a disabled control has no hover/pressed state. Re-checked live AFTER the scroll above: a page can enable or disable
      // after load, and a fixed control can stay inert until the page scrolls (socar '맨 위로').
      const kinds = (await page.evaluate((i) => window.__omdKb.disabled(i), c.i).catch(() => null)) ?? c.identity.disabledKinds ?? [];
      if (kinds.length) {
        const sy = await page.evaluate(() => Math.round(scrollY)).catch(() => "?");
        const why = `disabled — not measured (${kinds.join(", ")}; live re-check at scrollY=${sy}, after scrolling the control into view): a disabled control has no hover or pressed state to read`;
        R.hover = { measured: false, disabled: kinds, unmeasured: why };
        R.pressed = { measured: false, disabled: kinds, unmeasured: why };
        continue;
      }
      await park(c);
      await settleFor([c]);
      const rest = await readStable(c);
      if (!rest) { fail("control vanished from the DOM"); continue; }
      R.restParked = rest;                                                    // baseline for hover/pressed: same scroll position, pointer away
      if (rest.is.hover) (R.notes ??= []).push("the parked pointer still matched :hover at rest (no free parking spot)");
      let hit = await page.evaluate((i) => window.__omdKb.hit(i), c.i);
      if (hit.x == null && g["hide-overlays"]) {
        hidden = await page.evaluate((i) => window.__omdKb.hideOverlays(i), c.i);
        await sleep(300);
        hit = await page.evaluate((i) => window.__omdKb.hit(i), c.i);
      }
      if (hit.x == null) { fail(`pointer target covered by ${hit.cover}${g["hide-overlays"] ? " (still covered after --hide-overlays)" : "; re-run with --hide-overlays to hide fixed/sticky overlays for this control, and say so in the report"}`); continue; }
      await page.mouse.move(hit.x, hit.y, { steps: 6 });
      const stH = await settleFor([c]);
      const hov = await readStable(c);
      if (!hov || !hov.is.hover) { fail(`:hover did not match after moving the pointer onto it (elementFromPoint = ${hit.hitEl})`); continue; }
      R.hover = { measured: true, hitEl: hit.hitEl, snap: hov, settle: stH, ...stateDiff(rest, hov), ...(hidden.length ? { overlaysHiddenForThisControl: hidden } : {}) };
      if (SHOTS) await stateShot(c, "hover", R.hover);
      await page.mouse.down();
      isDown = true;
      const stP = await settleFor([c]);
      const prs = await readStable(c);
      if (!prs || !prs.is.active) R.pressed = { measured: false, unmeasured: ":active did not match while the mouse button was down", is: prs?.is };
      else {
        R.pressed = { measured: true, hitEl: hit.hitEl, snap: prs, settle: stP, ...stateDiff(rest, prs), changedVsHover: diffSnap(hov, prs).filter((x) => !(prs.unstable ?? []).includes(x.prop)), ...(hidden.length ? { overlaysHiddenForThisControl: hidden } : {}) };
        if (SHOTS) await stateShot(c, "pressed", R.pressed);
      }
    } catch (e) {
      fail(`error: ${String(e.message || e).split("\n")[0].slice(0, 120)}`);
    } finally {
      if (isDown) {   // release in place, with the release swallowed so nothing is activated
        await page.evaluate(() => { window.__omdKbBlock = true; }).catch(() => {});
        await page.mouse.up().catch(() => {});
        await sleep(150);
        await page.evaluate(() => { window.__omdKbBlock = false; }).catch(() => {});
      }
      if (hidden.length) await page.evaluate(() => window.__omdKb.restoreOverlays()).catch(() => {});
      await page.evaluate(() => { const a = document.activeElement; if (a && a.blur) a.blur(); }).catch(() => {});
      if (c.inputLike) await page.keyboard.press("Escape").catch(() => {});
      if (page.url() !== baseUrl) {
        result.notes.push(`${c.key}: the URL changed to ${page.url()} during the press; went back`);
        await page.goBack({ timeout: 15000 }).catch(() => {});
        await sleep(Math.min(WAIT, 3000));
        for (const k of C) if (k.found) await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [k.i, k.find]).catch(() => {});
      }
      await page.mouse.move(3, 500).catch(() => {});
    }
  }
}

const hexOf = (c) => {
  const m = String(c).match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
  if (!m) return String(c);
  if (m[4] !== undefined && Number(m[4]) === 0) return "-";
  const h = "#" + [m[1], m[2], m[3]].map((n) => Number(n).toString(16).padStart(2, "0")).join("");
  return m[4] !== undefined && Number(m[4]) < 1 ? `${h}@${m[4]}` : h;
};

// Two long values that differ only past the first 110 characters would print as twins; show them from just before the difference.
function pairText(a, b, n = 110) {
  a = String(a); b = String(b);
  if (a.length <= n && b.length <= n) return `${a} -> ${b}`;
  let p = 0;
  while (p < a.length && p < b.length && a[p] === b[p]) p++;
  const from = p > 40 ? p - 30 : 0;
  const cut = (s) => `${from ? "…" : ""}${s.slice(from, from + n)}${s.length > from + n ? "…" : ""}`;
  return `${cut(a)} -> ${cut(b)}`;
}
// --summary: one readable block per control on stderr (stdout stays the JSON contract).
function summaryText() {
  const b = result.boot;
  const L = [`# ${result.tool} ${url} -> ${b.finalUrl ?? "?"} status=${b.status ?? "?"} tabs=${result.tabsPressed ?? "-"} walkStop=${result.walkStop ?? "-"} reReads=${result.tabReReads ?? "-"} elapsed=${b.elapsedMs}ms${b.watchdog ? ` WATCHDOG=${b.watchdog}` : ""}${b.block ? " BLOCKED" : ""}`];
  if (b.consent?.rejectedVia) L.push(`# consent rejected via ${b.consent.rejectedVia}`);
  for (const [k, R] of Object.entries(result.controls)) {
    if (!R.found) { L.push(`${k}: NOT FOUND — ${R.hover?.unmeasured ?? ""}`); continue; }
    const id = R.identity ?? {};
    L.push(`${k}: <${id.tag}${id.role ? ` role=${id.role}` : ""}> ${id.rect?.w}x${id.rect?.h} "${String(id.text || id.aria || id.placeholder || "").slice(0, 32)}" tabIndex=${id.tabIndex} disabled=${(id.disabledKinds ?? []).join("+") || "no"} rest bg=${hexOf(R.rest?.bg)} fg=${hexOf(R.rest?.fg)} transition=${id.transition}`);
    for (const s of ["hover", "pressed", "focus"]) {
      const S = R[s];
      if (!S) continue;
      if (!S.measured) { L.push(`  ${s.padEnd(7)} UNMEASURED — ${S.unmeasured}`); continue; }
      L.push(`  ${s.padEnd(7)}${S.tabPress ? ` (Tab #${S.tabPress})` : ""}${S.settle ? ` [waited ${S.settle.waitedMs}ms; longest transition ${S.settle.longestTransitionMs}ms]` : ""} ${S.verdict}`);
      for (const x of S.changed.slice(0, 12)) L.push(`      [${x.set}] ${x.prop}${x.el ? ` <${x.el}>` : ""}: ${x.delta ? `Δ ${x.delta.slice(0, 300)}` : pairText(x.from, x.to)}${x.alsoPersists ? "  (still present after blur)" : ""}`);
      if (S.changed.length > 12) L.push(`      ... ${S.changed.length - 12} more in the JSON`);
    }
  }
  return L.join("\n") + "\n";
}

async function main() {
  // chromium.launch owns a fresh temporary profile in both modes; never supply a userDataDir.
  browser = await chromium.launch({ headless: BROWSER === "headless", ...(process.env.OMD_CHROME_PATH ? { executablePath: process.env.OMD_CHROME_PATH } : { channel: "chrome" }), args: ["--disable-blink-features=AutomationControlled"] });
  page = await loadWithRetries();
  const consent = await page.evaluate(consentFn).catch(() => null);
  if (consent) { await sleep(1500); await page.waitForLoadState("load").catch(() => {}); await sleep(Math.min(WAIT, 4000)); }
  result.boot.consent = { rejectedVia: consent, fixedElementsAfter: await page.evaluate(() => window.__omdKb?.fixedInventory?.() ?? []).catch(() => []) };

  if (g.survey) {
    if (g.census) result.census = await page.evaluate(censusFn).catch((e) => ({ error: String(e?.message ?? e).split("\n")[0].slice(0, 200) }));
    const s = await page.evaluate(([lim, mh]) => window.__omdKb.survey(lim, mh), [Number(g["survey-limit"] ?? 400), 8]);
    result.rows = s.rows;
    result.fixed = s.fixed;
    const line = (r, n) => `${String(n).padStart(3)} ${(r.tag + (r.role ? "/" + r.role : "")).padEnd(14)} ${r.landmark.padEnd(6)} ${String(r.x).padStart(4)},${String(r.y).padEnd(5)} ${(r.w + "x" + r.h).padEnd(11)} bg=${hexOf(r.bg).padEnd(9)} fg=${hexOf(r.fg).padEnd(9)} r=${r.radius.slice(0, 12).padEnd(12)} ${r.font.padEnd(10)} ${(r.text || r.aria || r.ph || "").slice(0, 34).padEnd(34)} ${(r.href || "").slice(0, 40)}${r.cls ? " ." + r.cls.slice(0, 26) : ""}`;
    const idx = new Map(s.rows.map((r, n) => [r, n]));
    const like = s.rows.filter((r) => r.buttonLike).slice(0, 110);
    const plain = s.rows.filter((r) => !r.buttonLike && r.y < 3200).slice(0, 60);
    TABLE = [`# survey ${url} -> ${result.boot.finalUrl} status=${result.boot.status} lang=${result.boot.htmlLang} title=${JSON.stringify(result.boot.title)} redirects=${JSON.stringify(result.boot.redirectChain)} rows=${s.rows.length}`, `# fixed/sticky: ${JSON.stringify(s.fixed)}`, `# button-like (${like.length}):`, ...like.map((r) => line(r, idx.get(r))), `# plain links/other, first ${plain.length} above y=3200:`, ...plain.map((r) => line(r, idx.get(r)))].join("\n") + "\n";
    if (VISUAL) await captureVisual();
    await emitAndExit(0);
    return;
  }

  // Tag every control, then read identity + page-top rest.
  for (const spec of controls) {
    const R = (result.controls[spec.key] = { label: spec.label ?? null, declared: spec.declared ?? null, find: spec.find });
    const r = await page.evaluate(([i, f]) => window.__omdKb.tag(i, f), [spec.i, spec.find]);
    Object.assign(R, { found: r.found, candidates: r.candidates, ...(r.error ? { findError: r.error } : {}) });
    if (!r.found) {
      const why = r.error ? `bad selector: ${r.error}` : `control not found on this load (matches=${r.candidates})`;
      for (const s of ["hover", "pressed", "focus"]) R[s] = { measured: false, unmeasured: why };
      continue;
    }
    const c = { ...spec, found: true };
    c.identity = await page.evaluate((i) => window.__omdKb.identity(i), c.i);
    c.inputLike = /^(input|select|textarea)$/.test(c.identity.tag) || /^(combobox|searchbox|textbox)$/.test(c.identity.role ?? "");
    c.up = spec.up != null && Number.isFinite(Number(spec.up)) ? Number(spec.up) : g.up ? Number(g.up) : UP_DEFAULT;
    R.identity = c.identity;
    C.push(c);
  }
  for (const c of C) {
    const R = result.controls[c.key];
    R.rest = await readStable(c);
    if (SHOTS && R.rest) await stateShot(c, "rest", R.rest);
  }
  if (!g["no-focus"]) await keyboardPhase();
  if (!g["no-mouse"]) await mousePhase();
  if (VISUAL) await captureVisual();
  await emitAndExit(0);
}
main().catch(async (e) => { result.error = String(e?.stack ?? e).split("\n").slice(0, 4).join(" | "); await emitAndExit(1); });
