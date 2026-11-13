#!/usr/bin/env node
/**
 * text-census — the type a page sets its headings and running text in.
 *
 * probe-keyboard-states.mjs --survey records font size and weight for interactive elements only (links, buttons,
 * fields). A reference's heading and body sizes were therefore never in the capture, and a writer either left them
 * out or carried over an old value nobody had re-measured (jobplanet, 2026-11-13: four published type tokens came
 * back "not captured"). This reads every visible element that directly holds text and counts, per role, how many
 * characters are set in each size and weight.
 *
 *   node scripts/text-census.mjs <url> --out <file.json> [--locale ko-KR]
 *
 * One headless page load (Chrome, 1440x1000, the probe's desktop user agent), no clicks, no scrolling.
 * Roles: `heading` (inside h1–h3 or role=heading), `paragraph` (inside <p>), `interactive` (inside a link, button
 * or field), `other`. Output: { url, finalUrl, status, viewport, roles: { <role>: [{ size, weight, lineHeight,
 * family, chars, elements, tags }] } }, each list sorted by characters, at most 12 entries.
 * compile-evidence.mjs reads the file as `text-census.json` in a capture folder.
 */
import { writeFileSync } from "node:fs";
import { chromium } from "playwright-core";

const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(name); return i === -1 ? fallback : args.splice(i, 2)[1]; };
const out = opt("--out"), locale = opt("--locale", "ko-KR");
const url = args[0];
if (!url || !out) { console.error("usage: text-census.mjs <url> --out <file.json> [--locale ko-KR]"); process.exit(2); }
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36";

/** Runs in the page: one record per element that directly holds visible text. */
function readText() {
  const perElement = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const count = n.nodeValue.replace(/\s+/g, "").length;
    if (count && n.parentElement) perElement.set(n.parentElement, (perElement.get(n.parentElement) ?? 0) + count);
  }
  const rows = [];
  for (const [el, chars] of perElement) {
    if (el.closest("script, style, noscript, template, [hidden], [aria-hidden='true']")) continue;
    const rect = el.getBoundingClientRect(), cs = getComputedStyle(el);
    if (!rect.width || !rect.height || cs.visibility === "hidden" || cs.display === "none" || Number(cs.opacity) === 0) continue;
    const size = parseFloat(cs.fontSize);
    if (!size) continue;
    const heading = el.closest("h1, h2, h3, [role='heading']");
    const role = heading ? "heading" : el.closest("a, button, input, select, textarea, [role='button'], [role='tab'], [role='link']") ? "interactive" : el.closest("p") ? "paragraph" : "other";
    rows.push({ role, tag: heading ? heading.tagName.toLowerCase() : el.tagName.toLowerCase(), chars, size, weight: Number(cs.fontWeight) || cs.fontWeight,
      lineHeight: cs.lineHeight, family: cs.fontFamily.split(",")[0].trim().replace(/^["']|["']$/g, "") });
  }
  return rows;
}

/** Fold element records into per-role size lists (exported for the test). */
export function foldText(rows, limit = 12) {
  const roles = {};
  for (const r of rows) {
    const list = (roles[r.role] ??= new Map());
    const key = `${r.size}/${r.weight}`;
    const e = list.get(key) ?? list.set(key, { size: r.size, weight: r.weight, chars: 0, elements: 0, lineHeights: new Map(), families: new Map(), tags: new Map() }).get(key);
    e.chars += r.chars; e.elements += 1;
    for (const [map, v] of [[e.lineHeights, r.lineHeight], [e.families, r.family], [e.tags, r.tag]]) map.set(v, (map.get(v) ?? 0) + r.chars);
  }
  const top = (map) => [...map.entries()].sort((a, z) => z[1] - a[1] || String(a[0]).localeCompare(String(z[0])))[0]?.[0] ?? null;
  return Object.fromEntries(Object.entries(roles).map(([role, list]) => [role, [...list.values()]
    .sort((a, z) => z.chars - a.chars || z.size - a.size || String(z.weight).localeCompare(String(a.weight)))
    .slice(0, limit)
    .map(({ lineHeights, families, tags, ...e }) => ({ ...e, lineHeight: top(lineHeights), family: top(families), tags: [...tags.keys()].sort() }))]));
}

async function main() {
  const browser = await chromium.launch({ headless: true, ...(process.env.OMD_CHROME_PATH ? { executablePath: process.env.OMD_CHROME_PATH } : { channel: "chrome" }), args: ["--disable-blink-features=AutomationControlled"] });
  const rec = { tool: "text-census.mjs", url, locale, viewport: "1440x1000", measuredAt: new Date().toISOString() };
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, userAgent: UA, locale, extraHTTPHeaders: { "Accept-Language": `${locale},${locale.split("-")[0]};q=0.9,en;q=0.8` } });
    const page = await context.newPage();
    const res = await page.goto(url, { waitUntil: "load", timeout: 45000 });
    rec.status = res?.status() ?? null; rec.finalUrl = page.url();
    await page.waitForTimeout(4000);
    const rows = await page.evaluate(readText);
    rec.elements = rows.length; rec.chars = rows.reduce((a, r) => a + r.chars, 0);
    rec.roles = foldText(rows);
  } catch (e) {
    rec.error = String(e.message ?? e).split("\n")[0];
  }
  await browser.close();
  writeFileSync(out, JSON.stringify(rec, null, 1) + "\n");
  console.log(rec.error ? `text census failed: ${rec.error}` : `text census: status ${rec.status}, ${rec.elements} elements, ${rec.chars} characters, ${Object.entries(rec.roles).map(([k, v]) => `${k} ${v.length}`).join(", ")} size(s) → ${out}`);
  process.exit(rec.error ? 1 : 0);
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
