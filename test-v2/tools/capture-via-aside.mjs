/**
 * Media-evidence capture through Aside Browser, for sites that refuse
 * automated browsers.
 *
 * Coupang answers Playwright-driven Chrome with a 403 "Access Denied" and zero
 * images; it answers Aside with its actual homepage. Aside is a browser a
 * person uses, driven from the terminal, so the request looks like what it is.
 *
 * The line this does not cross: no CAPTCHA solving, no bot-detection evasion.
 * A site that serves a challenge rather than a page is refusing, and the brand
 * comes out of the set.
 *
 * Page code comes from collectors.mjs, the same source the Playwright channel
 * runs. Two copies cost the same bug twice and left this channel without a
 * collection funnel for a whole round of captures.
 *
 * Structural differences that remain, both recorded in the evidence:
 *   - Aside's REPL has no filesystem, so screenshots come back as base64.
 *   - Its CDP Emulation domain is unavailable, so colour scheme cannot be
 *     pinned. Whatever the browser profile is set to is what gets measured.
 *
 *   node capture-via-aside.mjs --brand coupang --url https://www.coupang.com/
 *
 * Requires Aside Browser running with a window open in the target profile:
 *   open -a Aside https://example.com
 */

import { execFile } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import {
  attritionOf, COLLECT_CHROME, COLLECT_IMAGERY, DISMISS_SELECTORS, FIND_VIDEO, REFIND_BOX, SCROLL_TO,
} from "./collectors.mjs";
import {
  aggregateSubject, cropTo, light, median, palette, renderedCanvas, subject, toRgb,
} from "./analysis.mjs";

const execFileAsync = promisify(execFile);
const HERE = dirname(fileURLToPath(import.meta.url));
const EVIDENCE_ROOT = resolve(HERE, "..", "00-evidence");
const ASIDE = join(process.env.HOME ?? "", ".local/bin/aside");

const SURFACES = [
  { id: "desktop-1440", viewport: { width: 1440, height: 900 } },
  { id: "mobile-390", viewport: { width: 390, height: 844 } },
];
const IMAGERY_SAMPLES = 12;

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

/**
 * One REPL script per surface. Everything the page learns leaves through
 * console.log, because the REPL cannot write files.
 */
function replSource(url, surface, samples) {
  const dismiss = JSON.stringify(DISMISS_SELECTORS);
  return `
const p = await openTab(${JSON.stringify(url)});
await new Promise(r => setTimeout(r, 5000));
for (const sel of ${dismiss}) {
  try { const el = await p.$(sel); if (el) await el.click({ timeout: 400 }); } catch {}
}
await new Promise(r => setTimeout(r, 1200));

const chrome = await p.evaluate(${COLLECT_CHROME});
await p.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5));
await new Promise(r => setTimeout(r, 1600));
await p.evaluate(() => window.scrollTo(0, 0));
await new Promise(r => setTimeout(r, 900));

const collected = await p.evaluate(${COLLECT_IMAGERY}, ${samples});
const video = await p.evaluate(${FIND_VIDEO});
const meta = await p.evaluate(() => ({
  title: document.title.slice(0, 120),
  finalUrl: location.href,
  viewport: { w: innerWidth, h: innerHeight, dpr: devicePixelRatio || 1 },
}));

const frames = [];
for (const c of collected.candidates) {
  const want = { ...c.docBox, tag: c.tag };
  await p.evaluate(${SCROLL_TO}, want);
  await new Promise(r => setTimeout(r, 700));
  const box = await p.evaluate(${REFIND_BOX}, want);
  if (!box) { frames.push(null); continue; }
  const shot = await p.screenshot();
  frames.push({ box, b64: shot.toString("base64") });
}
await p.evaluate(() => window.scrollTo(0, 0));
const viewportShot = await p.screenshot();

console.log("META:" + JSON.stringify({ chrome, collected, video, meta }));
console.log("VIEWPORT_B64:" + viewportShot.toString("base64"));
for (const [i, f] of frames.entries()) {
  if (f) console.log("FRAME_" + i + "_B64:" + f.b64);
}
console.log("BOXES:" + JSON.stringify(frames.map(f => f && f.box)));
`;
}

async function captureSurface(url, surface, captureDir) {
  const startedAt = Date.now();
  const { stdout } = await execFileAsync(ASIDE, ["repl", replSource(url, surface, IMAGERY_SAMPLES)], {
    maxBuffer: 512 * 1024 * 1024,
    timeout: 300000,
  });
  const lines = stdout.split("\n");
  const pick = (prefix) => lines.find((l) => l.startsWith(prefix));

  const metaLine = pick("META:");
  if (!metaLine) throw new Error("Aside returned no page data");
  const { chrome, collected, video, meta } = JSON.parse(metaLine.slice("META:".length));
  const boxes = JSON.parse((pick("BOXES:") ?? "BOXES:[]").slice("BOXES:".length));

  const viewportLine = pick("VIEWPORT_B64:");
  const frameShot = join(captureDir, `${surface.id}-viewport.png`);
  if (viewportLine) writeFileSync(frameShot, Buffer.from(viewportLine.slice("VIEWPORT_B64:".length), "base64"));
  chrome.pageBackgroundRendered = viewportLine
    ? renderedCanvas(palette(await toRgb(frameShot, 200))[0], chrome.pageBackgroundComputed)
    : null;

  const funnel = { ...collected.funnel, kept: collected.candidates.length, framed: 0, cropped: 0, analysed: 0 };
  const samples = [];
  for (const [i, candidate] of collected.candidates.entries()) {
    const box = boxes[i];
    const frameLine = pick(`FRAME_${i}_B64:`);
    if (!box || !frameLine) continue;
    funnel.framed++;
    const label = String(i + 1).padStart(2, "0");
    const framePath = join(captureDir, `${surface.id}-frame-${label}.png`);
    const cropPath = join(captureDir, `${surface.id}-imagery-${label}.png`);
    writeFileSync(framePath, Buffer.from(frameLine.slice(`FRAME_${i}_B64:`.length), "base64"));
    try {
      await cropTo(framePath, cropPath, box.pixelBox);
    } catch {
      continue;
    }
    funnel.cropped++;
    const rgb = await toRgb(cropPath);
    funnel.analysed++;
    samples.push({
      ...candidate,
      clipped: box.clipped,
      matchedBy: box.matchedBy,
      file: `capture/${surface.id}-imagery-${label}.png`,
      palette: palette(rgb),
      light: light(rgb),
      subject: subject(rgb),
    });
  }

  const lits = samples.map((s) => s.light);
  const resolved = samples.map((s) => s.subject).filter((s) => s?.resolved);
  return {
    meta,
    viewport: surface.viewport,
    chrome,
    imagery: {
      sampled: samples.length,
      funnel,
      attrition: attritionOf(funnel),
      samples,
      aggregate: {
        meanLuma: median(lits.map((l) => l.meanLuma)),
        dynamicRange: median(lits.map((l) => l.dynamicRange)),
        luminanceGradients: lits.reduce((acc, l) => ({ ...acc, [l.luminanceGradient]: (acc[l.luminanceGradient] ?? 0) + 1 }), {}),
        aspects: median(samples.map((s) => s.aspect)),
        ...aggregateSubject(resolved, samples.length),
      },
    },
    motion: video,
    durationMs: Date.now() - startedAt,
  };
}

/* ----------------------------------------------------------------- main ---- */

const brand = arg("brand");
const url = arg("url");
if (!brand || !url) {
  console.error("usage: capture-via-aside.mjs --brand <id> --url <official url>");
  process.exit(1);
}

const outDir = join(EVIDENCE_ROOT, brand);
const captureDir = join(outDir, "capture");
mkdirSync(captureDir, { recursive: true });

const startedAt = Date.now();
const evidence = {
  brand,
  capturedAt: new Date().toISOString(),
  source: { url },
  method: {
    channel: "aside",
    why: "site refuses automated browsers; Playwright receives 403 Access Denied",
    colorScheme: "browser profile default — not controllable through Aside (CDP Emulation domain unavailable)",
    note: "chrome and imagery are separate evidence domains; imagery is a distribution across samples, never one hero",
    imagerySamplesRequested: IMAGERY_SAMPLES,
    surfaces: SURFACES.map((s) => s.id),
  },
  surfaces: {},
};

try {
  for (const surface of SURFACES) {
    // Aside drives a real browser window whose size we do not control, so a
    // surface here is the window as it stands rather than a set viewport. The
    // measured size is recorded instead of the requested one.
    const captured = await captureSurface(url, surface, captureDir);
    evidence.source.finalUrl = captured.meta.finalUrl;
    evidence.source.title = captured.meta.title;
    captured.viewportMeasured = captured.meta.viewport;
    delete captured.meta;
    evidence.surfaces[surface.id] = captured;
    break; // one pass only until window sizing is controllable
  }
  evidence.method.surfaces = Object.keys(evidence.surfaces);
  evidence.method.surfaceLimit = "Aside cannot resize its window from the REPL; only the window's own viewport is captured";
} catch (error) {
  evidence.error = String(error).split("\n")[0];
}

evidence.method.totalDurationMs = Date.now() - startedAt;
const primary = Object.values(evidence.surfaces)[0];
if (primary) {
  evidence.chrome = primary.chrome;
  evidence.imagery = primary.imagery;
  evidence.motion = primary.motion;
}

writeFileSync(join(outDir, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
console.log(JSON.stringify({
  brand,
  channel: "aside",
  ok: !evidence.error,
  error: evidence.error ?? null,
  seconds: +(evidence.method.totalDurationMs / 1000).toFixed(1),
  surfaces: Object.fromEntries(Object.entries(evidence.surfaces).map(([id, s]) => [id, {
    samples: s.imagery.sampled,
    suspect: s.imagery.attrition.suspect ? s.imagery.attrition.reasons : false,
  }])),
  out: outDir,
}, null, 1));
