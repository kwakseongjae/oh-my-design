/**
 * Conformance suite for the in-page collectors.
 *
 * Every defect this suite encodes was found by looking at a number that seemed
 * wrong, days after the capture that produced it. That is not a test strategy —
 * it is luck, and it does not scale to hundreds of brands. Each fixture is one
 * site archetype that actually broke something, reduced to the smallest page
 * that reproduces it.
 *
 * The fixtures are local files. Live sites cannot be a regression suite: they
 * change under you, so a red run would never distinguish "the collector broke"
 * from "the campaign ended".
 *
 *   node conformance.mjs
 *   node conformance.mjs --only mobile-narrow
 */

import { chromium } from "playwright-core";
import { readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pathToFileURL } from "node:url";
import { attritionOf, COLLECT_CHROME, COLLECT_IMAGERY, REFIND_BOX, SCROLL_TO } from "./collectors.mjs";
import { palette, renderedCanvas, toRgb } from "./analysis.mjs";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";

const HERE = dirname(fileURLToPath(import.meta.url));
const FIXTURES = resolve(HERE, "fixtures");

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

/**
 * Each case names the defect it guards, so a failure reads as "this specific
 * thing regressed" rather than "assertion 3 failed".
 */
const CASES = [
  {
    fixture: "full-bleed-hero.html",
    guards: "a hero wider than the viewport was read as a parked carousel slide; Apple returned zero samples",
    viewport: DESKTOP,
    expect: ({ imagery }) => imagery.candidates.length >= 1 || "full-bleed hero was rejected",
  },
  {
    fixture: "srcset-swap.html",
    guards: "re-identification by currentSrc; a responsive swap after scrolling lost most of Figma's and Baemin's samples",
    viewport: DESKTOP,
    afterScroll: true,
    expect: ({ refound }) => (refound.length && refound.every((b) => b)) || "candidate was lost after its src changed",
  },
  {
    fixture: "video-canvas-hero.html",
    guards: "only <img> was enumerated; Toss's hero is a video and a canvas",
    viewport: DESKTOP,
    expect: ({ imagery }) => {
      const kinds = new Set(imagery.candidates.map((c) => c.kind));
      return (kinds.has("video") && kinds.has("canvas")) || `saw kinds ${[...kinds].join(",") || "none"}`;
    },
  },
  {
    fixture: "no-landmarks.html",
    guards: "header detection required semantic landmarks; Coupang has none and came back null",
    viewport: DESKTOP,
    expect: ({ chrome }) => chrome.header !== null || "header not found on a landmark-free page",
  },
  {
    fixture: "promo-cta.html",
    guards: "a campaign CTA was collected as brand chrome; Musinsa's primary button came back #5ccca8",
    viewport: DESKTOP,
    expect: ({ chrome }) =>
      (chrome.primaryButton && chrome.primaryButton.background === "#000000") ||
      `primary button is ${chrome.primaryButton?.background ?? "null"}, expected the repeated #000000 control`,
  },
  {
    fixture: "transparent-body.html",
    guards: "transparent computed backgrounds were converted to #000000",
    viewport: DESKTOP,
    expect: ({ chrome }) =>
      chrome.pageBackgroundComputed !== "#000000" ||
      "a transparent page background was reported as black",
  },
  {
    fixture: "grid-thumbnails.html",
    guards: "the attrition gate fired on every commerce grid, because filtering out thumbnails looks like losing samples",
    viewport: DESKTOP,
    expect: ({ imagery }) => {
      const f = { ...imagery.funnel, kept: imagery.candidates.length, framed: imagery.candidates.length, cropped: imagery.candidates.length, analysed: imagery.candidates.length };
      const a = attritionOf(f);
      return !a.suspect || `gate fired on a normal grid: ${a.reasons.join("; ")}`;
    },
  },
  {
    fixture: "more-than-cap.html",
    guards: "the sample cap was counted as attrition; Coupang qualifies 65 images, keeps the 12 asked for, and was flagged for an 82% loss",
    viewport: DESKTOP,
    expect: ({ imagery }) => {
      const n = imagery.candidates.length;
      const f = { ...imagery.funnel, kept: n, framed: n, cropped: n, analysed: n };
      const a = attritionOf(f);
      return !a.suspect || `gate fired on a capped capture: ${a.reasons.join("; ")}`;
    },
  },
  {
    fixture: "mobile-narrow.html",
    guards: "a 160px absolute size floor is 11% of a desktop frame and 41% of a phone one; mobile returned nothing",
    viewport: MOBILE,
    expect: ({ imagery }) => imagery.candidates.length >= 2 || `phone layout yielded ${imagery.candidates.length} samples`,
  },
  {
    fixture: "fullbleed-brand-hero.html",
    guards: "a full-bleed brand-coloured hero was reported as the page canvas; Baemin's phone layout came back #0cefd3 at 82% coverage while CSS said #f6f6f6",
    viewport: MOBILE,
    needsCanvas: true,
    expect: ({ canvas }) =>
      canvas?.resolved === false || `canvas resolved to ${canvas?.hex}, but the frame is a hero over a #f6f6f6 page`,
  },
  {
    fixture: "parked-slide.html",
    guards: "the centre test that keeps full-bleed heroes must still reject slides parked off-frame",
    viewport: DESKTOP,
    expect: ({ imagery }) =>
      imagery.candidates.length === 1 || `kept ${imagery.candidates.length} slides, expected only the active one`,
  },
];

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function runCase(browser, c) {
  const context = await browser.newContext({ viewport: c.viewport, colorScheme: "light", locale: "ko-KR" });
  const page = await context.newPage();
  try {
    await page.goto(pathToFileURL(join(FIXTURES, c.fixture)).href, { waitUntil: "load" });
    await page.waitForTimeout(300);

    const chrome = await page.evaluate(`${COLLECT_CHROME}()`);
    const imagery = await page.evaluate(`${COLLECT_IMAGERY}(12)`);

    let canvas = null;
    if (c.needsCanvas) {
      const dir = mkdtempSync(join(tmpdir(), "omd-conf-"));
      const shot = join(dir, "viewport.png");
      writeFileSync(shot, await page.screenshot());
      canvas = renderedCanvas(palette(await toRgb(shot, 200))[0], chrome.pageBackgroundComputed);
      rmSync(dir, { recursive: true, force: true });
    }

    const refound = [];
    if (c.afterScroll) {
      for (const cand of imagery.candidates) {
        const want = { ...cand.docBox, tag: cand.tag };
        await page.evaluate(`${SCROLL_TO}(${JSON.stringify(want)})`);
        await page.waitForTimeout(250);
        refound.push(await page.evaluate(`${REFIND_BOX}(${JSON.stringify(want)})`));
      }
    }

    const verdict = c.expect({ chrome, imagery, refound, canvas });
    return verdict === true
      ? { fixture: c.fixture, pass: true, guards: c.guards }
      : { fixture: c.fixture, pass: false, guards: c.guards, detail: verdict };
  } catch (e) {
    return { fixture: c.fixture, pass: false, guards: c.guards, detail: `threw: ${String(e).split("\n")[0]}` };
  } finally {
    await context.close();
  }
}

const only = arg("only");
const selected = only ? CASES.filter((c) => c.fixture.startsWith(only)) : CASES;

const known = new Set(CASES.map((c) => c.fixture));
const orphans = readdirSync(FIXTURES).filter((f) => f.endsWith(".html") && !known.has(f));

const browser = await chromium.launch({ channel: "chrome" });
const results = [];
for (const c of selected) results.push(await runCase(browser, c));
await browser.close();

const failed = results.filter((r) => !r.pass);
console.log(JSON.stringify({
  ran: results.length,
  passed: results.length - failed.length,
  failed: failed.length,
  // A fixture nobody asserts against is a page sitting in a directory.
  fixturesWithoutACase: orphans,
  results,
}, null, 1));
process.exit(failed.length ? 1 : 0);
