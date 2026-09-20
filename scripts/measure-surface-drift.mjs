#!/usr/bin/env node
/**
 * measure-surface-drift — has the observed surface actually changed since July?
 *
 * `SOURCE_TTLS` in web/scripts/lib/reference-quality.mjs expires an observation
 * on a date: 180 days for a product surface, 365 for a published document. Its
 * own comment says the calibration "is currently a judgement, not a measurement"
 * and names the way to settle it — recapture against the frozen July bundles.
 * A five-reference pilot on 2026-09-20 found four of five pixel-identical after
 * 69 days and the fifth rebuilt from scratch, which is not what a decay clock
 * predicts. This runs that comparison across every bundle that can support one.
 *
 * ## What is compared, and why only this
 *
 * The `body` element of the `home` surface, and only it. 169 of the 177 bundles
 * record its computed style; every other selector they carry is either
 * tag-level (`home::li` — matches hundreds) or a framework-generated class that
 * changes on every build regardless of design intent. `body` is the one probe
 * that is present, unambiguous, and stable enough to mean something.
 *
 * It is a floor, not a ceiling: a component can change while the base palette
 * holds. A surface this probe calls unchanged has not been redesigned; it has
 * not been proven identical in every component.
 *
 * ## Matching the July capture
 *
 * The bundles were captured by playwright at 1440x900 and record the viewport,
 * but not the colour scheme. July's values are light-mode (patternfly's body
 * came back `rgb(21,21,21)`), so this forces light and the recorded viewport.
 *
 * That detail is not incidental. The pilot's first reading of patternfly was a
 * complete light-to-dark inversion, and the cause was the operator's own browser
 * sitting in dark mode while patternfly honoured `prefers-color-scheme`. A
 * theme-responsive page measured under the wrong scheme reports a redesign that
 * never happened, so each page is asked whether it responds to the scheme, and
 * the answer travels with the row.
 *
 * Reports. Writes nothing to any reference, and never touches
 * `artifacts/reference-evidence-2026-07/`, which is read-only and unbacked.
 *
 * usage:
 *   node scripts/measure-surface-drift.mjs [--limit N] [--concurrency N] [--json <out>]
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

const BUNDLES = "artifacts/reference-evidence-2026-07";
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
  + "(KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

const argv = process.argv.slice(2);
const flag = (name, fallback) => (argv.indexOf(name) >= 0 ? argv[argv.indexOf(name) + 1] : fallback);
const limit = Number(flag("--limit", "0"));
const concurrency = Number(flag("--concurrency", "6"));
const jsonAt = flag("--json", null);

/**
 * Every `verification_v2` source that has a July baseline at its own URL.
 *
 * The first pass compared one `home` surface per reference, which answered "was
 * this site redesigned" but renewed nothing: only 16% of sources sit at the home
 * URL, and renewing a source from a probe of a different page is the unearned
 * promotion this catalogue exists to avoid. The bundles record several surfaces
 * each, so matching source URL to surface URL raises real coverage to 400 of 895
 * sources across 132 references — each one then carries its own evidence.
 *
 * A source with no July baseline is not probed. It has no "before", so a reading
 * today is a new baseline and not a change detection, and the two must not be
 * confused.
 */
function baseline() {
  const norm = (url) => String(url ?? "").replace(/\/+$/, "").toLowerCase();
  const out = [];
  for (const file of readdirSync(BUNDLES).sort()) {
    if (!file.endsWith(".json")) continue;
    const id = file.replace(/\.json$/, "");
    const designPath = join("web", "references", id, "DESIGN.md");
    if (!existsSync(designPath)) continue;
    let bundle;
    try { bundle = JSON.parse(readFileSync(join(BUNDLES, file), "utf8")); } catch { continue; }

    const surfaces = new Map();
    for (const surface of bundle.surfaces ?? []) {
      const body = (surface.elements ?? []).find((element) => /::body$/.test(element.selector));
      if (!surface.url || !body?.style) continue;
      const [width, height] = String(surface.viewport ?? "1440x900").split("x").map(Number);
      surfaces.set(norm(surface.url), {
        surfaceId: surface.id,
        viewport: { width: width || 1440, height: height || 900 },
        july: {
          color: body.style.color, background: body.style.backgroundColor,
          font: (body.style.fontFamily ?? "").split(",")[0].replace(/["']/g, "").trim(),
          size: body.style.fontSize,
        },
      });
    }
    if (surfaces.size === 0) continue;

    const markdown = readFileSync(designPath, "utf8");
    const sources = markdown.matchAll(
      /- \{ id: ([A-Za-z0-9._-]+), kind: ([a-z-]+), url: "([^"]+)", captured: "([^"]+)" \}/g,
    );
    for (const [, sourceId, kind, url, captured] of sources) {
      const match = surfaces.get(norm(url));
      if (!match) continue;
      out.push({
        id, sourceId, kind, url, captured,
        capturedAt: String(bundle.capturedAt ?? "").slice(0, 10),
        surfaceId: match.surfaceId, viewport: match.viewport, july: match.july,
      });
    }
  }
  return out;
}

const PROBE = () => {
  const cs = getComputedStyle(document.body);
  let themeResponsive = false;
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.conditionText && /prefers-color-scheme/.test(rule.conditionText)) { themeResponsive = true; break; }
      }
    } catch { /* cross-origin sheet; unreadable, not evidence either way */ }
    if (themeResponsive) break;
  }
  return {
    color: cs.color, background: cs.backgroundColor,
    font: (cs.fontFamily || "").split(",")[0].replace(/["']/g, "").trim(),
    size: cs.fontSize,
    themeResponsive,
    elements: document.querySelectorAll("*").length,
    textLength: (document.body.innerText || "").length,
  };
};

async function measure(browser, row) {
  const context = await browser.newContext({
    viewport: row.viewport, colorScheme: "light", userAgent: UA,
  });
  try {
    const page = await context.newPage();
    const response = await page.goto(row.url, { waitUntil: "domcontentloaded", timeout: 25_000 });
    await page.waitForTimeout(3500);
    const now = await page.evaluate(PROBE);
    const status = response?.status() ?? 0;
    const fields = ["color", "background", "font", "size"];
    const changed = fields.filter((field) => row.july[field] !== now[field]);
    return {
      ...row, now, httpStatus: status,
      // A theme-responsive page compared under a scheme July did not record is
      // not a measurement; say so rather than counting it either way.
      verdict: status >= 400 ? "unreachable"
        : now.themeResponsive && changed.some((f) => f === "color" || f === "background") ? "not-comparable"
          : changed.length === 0 ? "unchanged" : "changed",
      changed,
    };
  } catch (error) {
    return { ...row, verdict: "unreachable", error: String(error).split("\n")[0].slice(0, 120) };
  } finally {
    await context.close();
  }
}

const rows = limit > 0 ? baseline().slice(0, limit) : baseline();
console.log(`[drift] ${rows.length} source(s) with a July baseline across ${new Set(rows.map((r) => r.id)).size} reference(s), concurrency ${concurrency}`);

const browser = await chromium.launch({ headless: true, channel: "chrome" }).catch(() => chromium.launch({ headless: true }));
const results = [];
let cursor = 0;
await Promise.all(Array.from({ length: Math.min(concurrency, rows.length) }, async () => {
  while (cursor < rows.length) {
    const index = cursor++;
    const result = await measure(browser, rows[index]);
    results[index] = result;
    const mark = { unchanged: "  ok    ", changed: "  CHANGED", "not-comparable": "  theme ", unreachable: "  gone  " }[result.verdict];
    console.log(`${mark} ${`${result.id}/${result.sourceId}`.padEnd(38)} ${result.changed?.join(",") || result.error || ""}`.slice(0, 130));
  }
}));
await browser.close();

const tally = {};
for (const r of results) tally[r.verdict] = (tally[r.verdict] ?? 0) + 1;
const comparable = (tally.unchanged ?? 0) + (tally.changed ?? 0);
console.log(`\n[drift] ${JSON.stringify(tally)}`);
if (comparable) {
  console.log(`[drift] of ${comparable} comparable sources, ${tally.unchanged ?? 0} unchanged `
    + `(${Math.round(100 * (tally.unchanged ?? 0) / comparable)}%) after ~${Math.round(
      (Date.now() - new Date(rows[0].capturedAt).getTime()) / 864e5)} days`);
  const refs = new Set(results.filter((r) => r.verdict === "unchanged").map((r) => r.id));
  console.log(`[drift] ${refs.size} reference(s) have at least one confirmed-unchanged source`);
}
if (jsonAt) { writeFileSync(jsonAt, `${JSON.stringify(results, null, 1)}\n`); console.log(`[drift] wrote ${jsonAt}`); }
