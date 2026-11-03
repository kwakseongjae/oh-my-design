#!/usr/bin/env node
/**
 * state-reel.mjs — a 9:16 reel and 4:5 carousel stills of one control's measured states, from a probe JSON.
 *
 * USAGE
 *   node scripts/content/state-reel.mjs <probe-out.json> --control <key> --name "<brand display name>" --id <reference id>
 *                                       --out <dir> [--fps 30] [--keep-frames]
 *   <probe-out.json> is the --out of web/scripts/probe-keyboard-states.mjs run with --shots (and --dpr 3 or 4 for a large,
 *   sharp crop). Crop paths in it are resolved against the JSON's own directory.
 *
 * OUTPUT (in --out)
 *   reel.mp4      1080x1920 H.264 (yuv420p, 30 fps), 8–12 s: rest → hover → pressed → focus.
 *   still-N.png   1080x1350, one per state shown.
 *   Rendered by headless Chrome (playwright-core, already a dependency) from an HTML template, one screenshot per frame,
 *   encoded by ffmpeg (must be on PATH; there is no webm fallback).
 *
 * WHAT IS SHOWN, AND WHAT IS NOT
 *   - A state appears only if the probe MEASURED it and kept its crop (`measured: true` + `shot`; rest needs `shot`).
 *     An unmeasured state, or one whose crop failed its state check, is skipped — never drawn, never interpolated.
 *   - The brand's look comes only from the crops. Every overlay word is set in oh-my-design's own faces (Wanted Sans
 *     Variable from web/public/fonts, Geist Mono as bundled with next), never the brand's face.
 *   - Values are the probe's `changed[]` strings, verbatim except `rgb(r, g, b)` written as #rrggbb. Changes the probe
 *     marks `alsoPersists` (still present after blur) are not focus indication and are left out. Property names are
 *     the CSS names of the probe's keys (bg → background, shadow → box-shadow …).
 *   - The crop swap from rest to hover and hover to pressed takes the control's measured transition-duration (longest
 *     duration in `identity.transition`, with its first timing function); `0s` is a hard cut. Focus always cuts.
 *   - A browser-default focus ring (outline-style: auto, nothing authored) is labelled as such.
 *   - Overlays the probe hid for a crop (--hide-overlays) are noted under the crop.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const argv = process.argv.slice(2);
const opt = {};
const pos = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === "--keep-frames") opt.keepFrames = true;
  else if (a.startsWith("--")) opt[a.slice(2)] = argv[++i];
  else pos.push(a);
}
const usage = 'usage: state-reel.mjs <probe-out.json> --control <key> --name "<brand>" --id <reference id> --out <dir> [--fps 30] [--keep-frames]';
if (!pos[0] || !opt.control || !opt.name || !opt.id || !opt.out) { console.error(usage); process.exit(2); }
const FPS = Number(opt.fps ?? 30);
const jsonPath = path.resolve(pos[0]);
const probe = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const R = probe.controls?.[opt.control];
if (!R || !R.found) { console.error(`control "${opt.control}" is not in ${jsonPath} or was not found on the page`); process.exit(2); }
const outDir = path.resolve(opt.out);
fs.mkdirSync(outDir, { recursive: true });
const ffmpeg = (() => { try { return execFileSync("which", ["ffmpeg"]).toString().trim(); } catch { return null; } })();
if (!ffmpeg) { console.error("ffmpeg is not on PATH; this renderer encodes with ffmpeg and has no other path"); process.exit(2); }

// ───────────────────────── data: only measured states that kept a crop ─────────────────────────
const hex = (s) => String(s).replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g, (_, r, g, b) => "#" + [r, g, b].map((n) => Number(n).toString(16).padStart(2, "0")).join(""));
const CSS = { bg: "background", behind: "background behind", fg: "color", border: "border", radius: "border-radius", shadow: "box-shadow", outline: "outline", outlineStyle: "outline-style", transform: "transform", tf: "transform", opacity: "opacity", op: "opacity", filter: "filter", bgImage: "background-image", bgPos: "background-position", src: "src", deco: "text-decoration", size: "size", padding: "padding", font: "font", before: "::before", after: "::after" };
const SET = { self: "", "self-pseudo": "", label: "label ", descendant: "child ", "descendant-pseudo": "child ", ancestor: "parent ", "ancestor-pseudo": "parent " };
const propName = (x) => {
  const key = String(x.prop).split(".").pop();
  return `${SET[x.set] ?? ""}${CSS[key] ?? key}`;
};
const COLOR_PROPS = /^(background|color|border|outline|label color|child color|child background|parent background)$/;
const firstColor = (v) => (String(v).match(/#[0-9a-f]{6}\b|rgba\([^)]*\)/i) ?? [null])[0];
const row = (prop, from, to) => {
  const f = from == null ? null : hex(from), t = hex(to);
  const color = COLOR_PROPS.test(prop);
  return { prop, from: f, to: t, fromSwatch: color && f ? firstColor(f) : null, toSwatch: color ? firstColor(t) : null };
};
function changeRows(S, name) {
  let ch = (S.changed ?? []).filter((x) => !x.alsoPersists && x.prop !== "dom");
  const selfPairs = new Set(ch.filter((x) => x.set === "self").map((x) => `${x.from}→${x.to}`));
  ch = ch.filter((x) => x.set === "self" || !selfPairs.has(`${x.from}→${x.to}`));   // a label/child echo of a self change
  const seen = new Set(), rows = [];
  for (const x of ch) {
    const k = `${propName(x)}|${x.from}|${x.to}`;
    if (seen.has(k) || (x.prop === "behind" && ch.some((y) => y.prop === "bg" && y.from === x.from && y.to === x.to))) continue;
    seen.add(k);
    rows.push(row(propName(x), x.from, x.to));
  }
  const max = name === "focus" ? 3 : 4;
  return { rows: rows.slice(0, max), more: Math.max(0, rows.length - max) };
}
function restRows(rest) {
  const rows = [row("background", null, rest.bg), row("color", null, rest.fg), row("border-radius", null, rest.radius)];
  if (rest.border && rest.border !== "none") rows.push(row("border", null, rest.border));
  else if (rest.padding) rows.push(row("padding", null, rest.padding));
  return { rows, more: 0 };
}
const shotOf = (S) => (S?.shot ? path.resolve(path.dirname(jsonPath), S.shot) : null);
const STATES = [];
if (shotOf(R.rest) && fs.existsSync(shotOf(R.rest))) STATES.push({ name: "rest", label: "Rest", file: shotOf(R.rest), ...restRows(R.rest), S: R.rest });
for (const [name, label] of [["hover", "Hover"], ["pressed", "Pressed"], ["focus", "Focus"]]) {
  const S = R[name];
  if (!S?.measured) { console.error(`skip ${name}: not measured (${S?.unmeasured ?? "absent"})`); continue; }
  const f = shotOf(S);
  if (!f || !fs.existsSync(f)) { console.error(`skip ${name}: measured but no crop kept (${S.shotError ?? "no shot"})`); continue; }
  STATES.push({ name, label, file: f, ...changeRows(S, name), S });
}
if (!STATES.length) { console.error("nothing to render: no measured state with a kept crop"); process.exit(1); }
for (const st of STATES) {
  const notes = [];
  if (st.name === "focus") {
    const ind = st.S.indication ?? {};
    if (ind.browserDefaultRing && !ind.authoredOutline && !(ind.descendantIndication ?? []).length) notes.push("The browser’s default focus ring (outline-style: auto). No authored focus style was measured on this control.");
    if (st.S.tabPress) notes.push(`Reached with the Tab key: press ${st.S.tabPress} from the top of the page.`);
  }
  if (st.S.overlaysHiddenForThisControl?.length) notes.push(`${st.S.overlaysHiddenForThisControl.length} fixed page overlay(s) hidden for this crop.`);
  if (st.more) notes.push(`+${st.more} more changed propert${st.more === 1 ? "y" : "ies"} in the probe JSON.`);
  st.notes = notes;
  delete st.S;
}

// The control's measured transition: longest duration, first timing function. Used only for the crop swap.
const transition = R.identity?.transition ?? "";
const times = [...transition.matchAll(/(-?\d*\.?\d+)(ms|s)\b/g)].map((m) => Number(m[1]) * (m[2] === "s" ? 1000 : 1));
const durations = times.slice(0, Math.ceil(times.length / 2));
const swapMs = durations.length ? Math.max(...durations) : 0;
const easing = (transition.match(/cubic-bezier\([^)]*\)|ease-in-out|ease-in|ease-out|ease|linear|steps\([^)]*\)|step-start|step-end/) ?? ["ease"])[0];

const pngSize = (f) => { const b = fs.readFileSync(f); return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }; };
const sizes = STATES.map((s) => pngSize(s.file));
const cropW = Math.max(...sizes.map((s) => s.w)), cropH = Math.max(...sizes.map((s) => s.h));
const dpr = probe.boot?.deviceScaleFactor ?? 1;
if (cropW < 400) console.error(`note: the crop is ${cropW}px wide; it is shown up to 2x enlarged. Re-run the probe with --dpr 4 for a large, sharp crop.`);
const id = R.identity ?? {};
const DATA = {
  name: opt.name,
  control: `“${String(id.text || id.aria || R.label || opt.control).trim().slice(0, 40)}” · ${id.tag ?? "control"}${id.landmark ? ` in the ${id.landmark}` : ""}`,
  source: `oh-my-design.kr/design-systems/${opt.id}`,
  // The run's date in Korea time: worker batches run overnight KST, when the UTC date is still the day before.
  measured: probe.boot?.startedAt ? `measured ${new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date(probe.boot.startedAt))}` : "",
  transition: transition ? `transition: ${transition}` : "",
  cropCaption: `Live crop · ${dpr}× device pixels`,
  crop: { w: cropW, h: cropH },
  swapMs, easing,
  states: STATES.map((s, i) => ({ ...s, file: undefined, src: `crop/${i}.png` })),
};
const n = STATES.length;
const SEG = n >= 4 ? 2.6 : n === 3 ? 3.2 : n === 2 ? 4.2 : 8;   // 10.4 / 9.6 / 8.4 / 8 s
const DURATION = n * SEG;

// ───────────────────────── template ─────────────────────────
const fontCss = ["wanted-sans-latin.css", "wanted-sans-cjk.css"].map((f) => fs.readFileSync(path.join(REPO, "web/src/styles", f), "utf8")).join("\n");
const MONO_DIR = path.join(REPO, "web/node_modules/next/dist/next-devtools/server/font");
if (!fs.existsSync(path.join(MONO_DIR, "geist-mono-latin.woff2"))) { console.error(`Geist Mono not found at ${MONO_DIR}; run npm install in web/`); process.exit(2); }

const html = (mode) => `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>
${fontCss}
@font-face { font-family: "Geist Mono"; font-weight: 100 900; src: url("/mono/geist-mono-latin.woff2") format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Geist Mono"; font-weight: 100 900; src: url("/mono/geist-mono-latin-ext.woff2") format("woff2"); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
:root { --paper:#ffffff; --band:#f6f6f9; --ink:#13131a; --ink2:#5a5a63; --ink3:#797981; --guide:#d3d3db; --hair:#e5e6eb; --iris:#6749e2;
  --sans:"Wanted Sans Variable", sans-serif; --mono:"Geist Mono", "Wanted Sans Variable", monospace; }
* { box-sizing:border-box; margin:0; padding:0; }
html, body { background:var(--paper); }
body { width:var(--W); height:var(--H); overflow:hidden; color:var(--ink); font-family:var(--sans); -webkit-font-smoothing:antialiased; font-feature-settings:"tnum" 1; }
.frame { position:relative; width:100%; height:100%; padding:var(--top) var(--mx) 0; display:flex; flex-direction:column; }
.mast { display:flex; justify-content:space-between; align-items:baseline; font-family:var(--mono); font-size:var(--fs-kick); letter-spacing:.14em; text-transform:uppercase; color:var(--ink2); }
.mast b { color:var(--ink); font-weight:500; }
.progress { display:flex; gap:10px; margin-top:var(--gap-prog); }
.progress i { flex:1; height:3px; background:var(--hair); position:relative; overflow:hidden; border-radius:2px; }
.progress i u { position:absolute; inset:0 auto 0 0; width:0; background:var(--ink); }
.progress i.now u { background:var(--iris); }
.title { margin-top:var(--gap-title); }
.title h1 { font-weight:640; font-size:var(--fs-h1); line-height:1.02; letter-spacing:-0.025em; }
.title p { margin-top:var(--gap-sub); font-size:var(--fs-sub); color:var(--ink2); letter-spacing:-0.005em; font-weight:450; }
.plate { margin:var(--gap-plate) calc(-1 * var(--mx)) 0; height:var(--plate-h); background:var(--band); border-top:1px solid var(--hair); border-bottom:1px solid var(--hair); position:relative; display:flex; align-items:center; justify-content:center; }
.specimen { position:relative; width:var(--cw); height:var(--ch); }
.specimen img { position:absolute; inset:0; width:100%; height:100%; opacity:0; image-rendering:auto; outline:1px solid rgba(19,19,26,.07); }
.mark { position:absolute; width:26px; height:26px; border-color:var(--ink3); border-style:solid; border-width:0; }
.mark.tl { left:-20px; top:-20px; border-left-width:1.5px; border-top-width:1.5px; }
.mark.tr { right:-20px; top:-20px; border-right-width:1.5px; border-top-width:1.5px; }
.mark.bl { left:-20px; bottom:-20px; border-left-width:1.5px; border-bottom-width:1.5px; }
.mark.br { right:-20px; bottom:-20px; border-right-width:1.5px; border-bottom-width:1.5px; }
.plate figcaption { position:absolute; right:var(--mx); bottom:22px; font-family:var(--mono); font-size:var(--fs-cap); color:var(--ink3); letter-spacing:.04em; }
.states { position:relative; margin-top:var(--gap-state); flex:0 0 var(--states-h); }
.st { position:absolute; inset:0; opacity:0; }
.st-head { display:flex; align-items:baseline; gap:22px; }
.st-head .no { font-family:var(--mono); font-size:var(--fs-no); color:var(--iris); letter-spacing:.06em; }
.st-head h2 { font-weight:560; font-size:var(--fs-h2); letter-spacing:-0.02em; line-height:1; }
.rows { margin-top:var(--gap-rows); display:flex; flex-direction:column; gap:var(--gap-row); }
.row { display:grid; grid-template-columns:var(--prop-w) 1fr; column-gap:24px; align-items:baseline; padding-top:var(--row-pad); border-top:1px solid var(--hair); }
.row dt { font-family:var(--mono); font-size:var(--fs-prop); color:var(--ink2); letter-spacing:.01em; }
.row dd { font-family:var(--mono); font-size:var(--fs-val); line-height:1.32; color:var(--ink); letter-spacing:-0.01em; overflow-wrap:break-word; }
.row dd .from { color:var(--ink3); }
.row dd .arrow { color:var(--ink3); padding-right:.35em; font-family:var(--sans); }
.sw { display:inline-block; width:.78em; height:.78em; border-radius:3px; margin-right:.38em; vertical-align:-.06em; box-shadow:inset 0 0 0 1px rgba(19,19,26,.16); }
.note { margin-top:var(--gap-note); font-size:var(--fs-note); line-height:1.45; color:var(--ink2); max-width:30em; }
.src { margin-top:auto; padding:22px 0 var(--bottom); border-top:1px solid var(--hair); display:flex; flex-wrap:wrap; justify-content:space-between; row-gap:8px; font-family:var(--mono); font-size:var(--fs-src); color:var(--ink2); letter-spacing:.01em; }
.src .tr { width:100%; color:var(--ink3); }
body.reel { --W:1080px; --H:1920px; --top:140px; --mx:96px; --bottom:250px; --fs-kick:22px; --gap-prog:24px; --gap-title:64px; --fs-h1:104px; --gap-sub:18px; --fs-sub:36px;
  --gap-plate:56px; --plate-h:520px; --fs-cap:20px; --gap-state:56px; --states-h:520px; --fs-no:26px; --fs-h2:84px; --gap-rows:36px; --gap-row:18px; --row-pad:16px;
  --prop-w:250px; --fs-prop:24px; --fs-val:31px; --gap-note:24px; --fs-note:27px; --fs-src:22px; }
body.still { --W:1080px; --H:1350px; --top:80px; --mx:88px; --bottom:44px; --fs-kick:20px; --gap-prog:20px; --gap-title:40px; --fs-h1:84px; --gap-sub:12px; --fs-sub:30px;
  --gap-plate:36px; --plate-h:400px; --fs-cap:18px; --gap-state:36px; --states-h:380px; --fs-no:22px; --fs-h2:66px; --gap-rows:24px; --gap-row:12px; --row-pad:12px;
  --prop-w:230px; --fs-prop:22px; --fs-val:28px; --gap-note:18px; --fs-note:24px; --fs-src:20px; }
</style></head><body class="${mode}"><main class="frame">
<header class="mast"><span>oh-my-design · state study</span><span><b id="idx">01</b> / ${String(n).padStart(2, "0")}</span></header>
<div class="progress">${STATES.map(() => "<i><u></u></i>").join("")}</div>
<section class="title"><h1 id="name"></h1><p id="control"></p></section>
<figure class="plate"><div class="specimen" id="spec">${DATA.states.map((s) => `<img src="${s.src}" alt="">`).join("")}<i class="mark tl"></i><i class="mark tr"></i><i class="mark bl"></i><i class="mark br"></i></div><figcaption id="cap"></figcaption></figure>
<section class="states" id="states"></section>
<footer class="src"><span id="source"></span><span id="measured"></span><span class="tr" id="transition"></span></footer>
</main><script>
const D = ${JSON.stringify(DATA)};
const SEG = ${SEG}, MODE = ${JSON.stringify(mode)};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
document.getElementById("name").textContent = D.name;
document.getElementById("control").textContent = D.control;
document.getElementById("source").textContent = D.source;
document.getElementById("measured").textContent = D.measured;
document.getElementById("transition").textContent = D.transition;
document.getElementById("cap").textContent = D.cropCaption;
const sw = (c) => c ? '<span class="sw" style="background:' + esc(c) + '"></span>' : "";
document.getElementById("states").innerHTML = D.states.map((s, i) => '<div class="st"><div class="st-head"><span class="no">' + String(i + 1).padStart(2, "0") + '</span><h2>' + esc(s.label) + '</h2></div><dl class="rows">' +
  s.rows.map((r) => '<div class="row"><dt>' + esc(r.prop) + '</dt><dd>' + (r.from != null ? '<span class="from">' + sw(r.fromSwatch) + esc(r.from) + '</span> <span class="arrow">→</span>' : "") + '<span class="to">' + sw(r.toSwatch) + esc(r.to) + '</span></dd></div>').join("") +
  '</dl>' + s.notes.map((t) => '<p class="note">' + esc(t) + '</p>').join("") + '</div>').join("");
// A value pair too long for one line breaks before the arrow, and the new value stays whole when it fits a line.
for (const dd of document.querySelectorAll(".row dd")) {
  const to = dd.querySelector(".to"), arrow = dd.querySelector(".arrow");
  if (arrow && dd.offsetHeight > parseFloat(getComputedStyle(dd).lineHeight) * 1.5) {
    if (arrow.previousSibling?.nodeType === 3) arrow.previousSibling.remove();
    arrow.before(document.createElement("br"));
  }
  to.style.whiteSpace = "nowrap";
  if (to.getBoundingClientRect().right > dd.getBoundingClientRect().right + 1) to.style.whiteSpace = "";
}
// Crop size: 1 image pixel = 1 frame pixel when it fits; a low-resolution crop is enlarged at most 2x.
{
  const plate = document.querySelector(".plate").getBoundingClientRect();
  const maxW = plate.width - 2 * 150, maxH = plate.height - 2 * 70;
  const k = Math.min(maxW / D.crop.w, maxH / D.crop.h, Math.max(1, Math.min(2, 520 / D.crop.w)));
  document.documentElement.style.setProperty("--cw", Math.round(D.crop.w * k) + "px");
  document.documentElement.style.setProperty("--ch", Math.round(D.crop.h * k) + "px");
}
const bez = (x1, y1, x2, y2) => (x) => { if (x <= 0) return 0; if (x >= 1) return 1; let lo = 0, hi = 1, t = x; for (let k = 0; k < 40; k++) { t = (lo + hi) / 2; const cx = 3 * (1 - t) * (1 - t) * t * x1 + 3 * (1 - t) * t * t * x2 + t * t * t; if (cx < x) lo = t; else hi = t; } return 3 * (1 - t) * (1 - t) * t * y1 + 3 * (1 - t) * t * t * y2 + t * t * t; };
const EASE = { ease: bez(.25, .1, .25, 1), "ease-in": bez(.42, 0, 1, 1), "ease-out": bez(0, 0, .58, 1), "ease-in-out": bez(.42, 0, .58, 1), linear: (x) => x };
const swapEase = (() => { const m = D.easing.match(/cubic-bezier\\(([^)]*)\\)/); if (m) { const p = m[1].split(",").map(Number); return bez(...p); } if (/^step/.test(D.easing)) return (x) => (x >= 1 ? 1 : 0); return EASE[D.easing] ?? EASE.ease; })();
const outEase = bez(.2, .7, .2, 1);   // oh-my-design's own entrance curve for the overlay text
const clamp = (x) => Math.max(0, Math.min(1, x));
const imgs = [...document.querySelectorAll(".specimen img")], blocks = [...document.querySelectorAll(".st")], bars = [...document.querySelectorAll(".progress i")];
window.renderAt = (t) => {
  const n = D.states.length, cur = Math.min(n - 1, Math.floor(t / SEG)), u = t - cur * SEG;
  document.getElementById("idx").textContent = String(cur + 1).padStart(2, "0");
  bars.forEach((b, i) => { b.classList.toggle("now", i === cur); b.firstChild.style.width = (i < cur ? 100 : i > cur ? 0 : MODE === "still" ? 100 : clamp(u / SEG) * 100) + "%"; });
  imgs.forEach((im, i) => {
    let o = 0;
    if (i < cur) o = 1;
    else if (i === cur) {
      const swap = i === 0 || D.states[i].name === "focus" ? 0 : D.swapMs / 1000;
      o = swap > 0 ? swapEase(clamp(u / swap)) : 1;
    }
    im.style.opacity = o;
  });
  blocks.forEach((b, i) => {
    if (i !== cur) { b.style.opacity = 0; return; }
    const first = i === 0 || MODE === "still";
    const head = first ? 1 : outEase(clamp((u - 0.06) / 0.42));
    const leave = MODE === "reel" && i < n - 1 ? clamp((u - (SEG - 0.24)) / 0.22) : 0;
    b.style.opacity = 1 - leave;
    b.style.transform = "translateY(" + (-10 * leave) + "px)";
    const h = b.querySelector(".st-head");
    h.style.opacity = head; h.style.transform = "translateY(" + (16 * (1 - head)) + "px)";
    [...b.querySelectorAll(".row, .note")].forEach((r, k) => {
      const e = first ? 1 : outEase(clamp((u - 0.2 - k * 0.09) / 0.46));
      r.style.opacity = e; r.style.transform = "translateY(" + (12 * (1 - e)) + "px)";
    });
  });
};
renderAt(0);
</script></body></html>`;

// ───────────────────────── render ─────────────────────────
const browser = await chromium.launch({ headless: true, ...(process.env.OMD_CHROME_PATH ? { executablePath: process.env.OMD_CHROME_PATH } : { channel: "chrome" }) });
const routeTo = (page, mode) => page.route("https://reel.local/**", (route) => {
  const p = decodeURIComponent(new URL(route.request().url()).pathname);
  if (p === "/") return route.fulfill({ contentType: "text/html; charset=utf-8", body: html(mode) });
  const m = p.match(/^\/crop\/(\d+)\.png$/);
  if (m && STATES[Number(m[1])]) return route.fulfill({ contentType: "image/png", body: fs.readFileSync(STATES[Number(m[1])].file) });
  const fontFile = p.startsWith("/fonts/wanted-sans/") ? path.join(REPO, "web/public", p) : p.startsWith("/mono/") ? path.join(MONO_DIR, path.basename(p)) : null;
  if (fontFile && fs.existsSync(fontFile)) return route.fulfill({ contentType: "font/woff2", body: fs.readFileSync(fontFile) });
  return route.fulfill({ status: 404, body: "" });
});
async function openPage(mode, width, height) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await routeTo(page, mode);
  await page.goto("https://reel.local/", { waitUntil: "load" });
  // Every character must have a LOADED face of its family whose unicode-range covers it. (document.fonts.check is
  // stricter than rendering: it fails while a second, overlapping slice is unloaded — wanted-sans-cjk.css slice 5
  // declares U+d3fd-d600, which overlaps slices 0–4 and 88.)
  const sansText = `${DATA.name}${DATA.control}${STATES.map((s) => s.label).join("")}${STATES.flatMap((s) => s.notes).join("")}`;
  const monoText = `${DATA.source}${DATA.measured}${DATA.transition}${DATA.cropCaption}${STATES.flatMap((s) => s.rows.map((r) => r.prop + (r.from ?? "") + r.to)).join("")}`.replace(/[→·×]/g, "");
  const fonts = await page.evaluate(async ([sans, mono]) => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((im) => im.decode().catch(() => null)));
    const covers = (range, cp) => range.split(",").some((r) => { const [a, b] = r.trim().replace(/U\+/gi, "").split("-").map((x) => parseInt(x, 16)); return cp >= a && cp <= (Number.isNaN(b) || b === undefined ? a : b); });
    const missing = (family, text) => [...new Set(text.replace(/\s/g, ""))].filter((ch) => ![...document.fonts].some((f) => f.family.replace(/"/g, "") === family && f.status === "loaded" && covers(f.unicodeRange, ch.codePointAt(0))));
    return { sansMissing: missing("Wanted Sans Variable", sans), monoMissing: missing("Geist Mono", mono), images: [...document.images].every((im) => im.naturalWidth > 0) };
  }, [sansText, monoText]);
  if (fonts.sansMissing.length || fonts.monoMissing.length || !fonts.images) throw new Error(`assets did not load (${JSON.stringify(fonts)}); refusing to render with fallback faces`);
  return { ctx, page };
}

try {
  // stills, 1080x1350: each state fully entered
  {
    const { ctx, page } = await openPage("still", 1080, 1350);
    for (let i = 0; i < n; i++) {
      await page.evaluate((t) => window.renderAt(t), i * SEG + SEG / 2);
      await page.screenshot({ path: path.join(outDir, `still-${i + 1}.png`), type: "png" });
    }
    await ctx.close();
  }
  // reel, 1080x1920: one screenshot per frame, then ffmpeg
  const frames = fs.mkdtempSync(path.join(os.tmpdir(), "state-reel-"));
  const { ctx, page } = await openPage("reel", 1080, 1920);
  const total = Math.round(DURATION * FPS);
  for (let f = 0; f < total; f++) {
    await page.evaluate((t) => window.renderAt(t), f / FPS);
    await page.screenshot({ path: path.join(frames, `${String(f).padStart(5, "0")}.png`), type: "png" });
  }
  await ctx.close();
  const reel = path.join(outDir, "reel.mp4");
  const enc = spawnSync(ffmpeg, ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", path.join(frames, "%05d.png"), "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-pix_fmt", "yuv420p", "-movflags", "+faststart", reel], { stdio: "inherit" });
  if (enc.status !== 0) throw new Error(`ffmpeg exited ${enc.status}`);
  if (opt.keepFrames) console.error(`frames kept in ${frames}`);
  else fs.rmSync(frames, { recursive: true, force: true });
  console.log(JSON.stringify({ reel, seconds: DURATION, fps: FPS, frames: total, size: "1080x1920", stills: STATES.map((_, i) => path.join(outDir, `still-${i + 1}.png`)), states: STATES.map((s) => s.name), swapMs, easing, crop: `${cropW}x${cropH} @${dpr}x` }, null, 2));
} finally {
  await browser.close().catch(() => {});
}
