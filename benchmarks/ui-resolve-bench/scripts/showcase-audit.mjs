#!/usr/bin/env node
/**
 * showcase-audit.mjs — uniform lightweight audit for Showcase 2.0 cells.
 *
 * Unlike the preregistered gate evaluator, this is NOT task-specific journey
 * scoring: the final judgment belongs to the human reviewer. This audit
 * collects the same deterministic hygiene facts for every arm so the gallery
 * table is comparable:
 *   - structure: exactly one <main>, exactly one <h1>
 *   - responsive: horizontal document overflow at 320 / 390 / 1440
 *   - accessibility: axe serious+critical count (desktop, default state)
 *   - self-containment: external network requests observed (must be 0)
 *   - assets: how many provided asset files the page actually references
 *   - motion: prefers-reduced-motion guard present in any stylesheet
 *   - screenshots: desktop 1440 + mobile 390
 *
 * Usage: showcase-audit.mjs --workspace <cell-workspace> --out <dir>
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const require = createRequire(import.meta.url);
let playwright;
const webRequire = createRequire(resolve("web/package.json"));
try { playwright = require("playwright-core"); } catch { playwright = webRequire("playwright-core"); }
let axePath;
try { axePath = require.resolve("axe-core/axe.min.js"); } catch { axePath = webRequire.resolve("axe-core/axe.min.js"); }
const { chromium } = playwright;

function parseArgs(argv) {
  const map = new Map();
  for (let i = 0; i < argv.length; i += 1) if (argv[i].startsWith("--")) { map.set(argv[i].slice(2), argv[i + 1]); i += 1; }
  return map;
}
const args = parseArgs(process.argv.slice(2));
if (!args.has("workspace") || !args.has("out")) { console.error("usage: showcase-audit.mjs --workspace <dir> --out <dir>"); process.exit(1); }
const workspace = resolve(args.get("workspace"));
const outDir = resolve(args.get("out"));
mkdirSync(outDir, { recursive: true });

const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml" };
function chromePath() {
  for (const item of [process.env.CHROME_PATH, "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium"].filter(Boolean)) if (existsSync(item)) return item;
  return null;
}

const server = createServer((request, response) => {
  try {
    const path = normalize(decodeURIComponent(new URL(request.url, "http://localhost").pathname));
    const file = join(workspace, path === "/" ? "index.html" : path);
    if (!file.startsWith(workspace) || !existsSync(file) || !statSync(file).isFile()) { response.writeHead(404); response.end(); return; }
    const bytes = readFileSync(file);
    response.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    response.end(bytes);
  } catch { response.writeHead(500); response.end(); }
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const origin = `http://127.0.0.1:${server.address().port}`;

const executablePath = chromePath();
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const external = [];
const context = await browser.newContext();
context.on("request", (request) => { if (!request.url().startsWith(origin) && !request.url().startsWith("data:")) external.push(request.url()); });
const page = await context.newPage();

const viewportFacts = [];
for (const viewport of [{ id: "mobile-320", width: 320, height: 720 }, { id: "mobile-390", width: 390, height: 844 }, { id: "desktop-1440", width: 1440, height: 900 }]) {
  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  await page.goto(`${origin}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(600);
  const facts = await page.evaluate(() => ({
    overflow_px: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
    main_count: document.querySelectorAll("main").length,
    h1_count: document.querySelectorAll("h1").length,
    reduced_motion_guard: [...document.styleSheets].some((sheet) => { try { return [...sheet.cssRules].some((rule) => rule.media && /prefers-reduced-motion/.test(rule.media.mediaText)); } catch { return false; } })
      || [...document.querySelectorAll("style")].some((style) => /prefers-reduced-motion/.test(style.textContent || "")),
    asset_refs: [...document.querySelectorAll("img[src], [style*='assets/']")].map((el) => el.getAttribute("src") || "").filter((src) => src.includes("assets/")).length,
    imgs_with_dimensions: [...document.querySelectorAll("img")].filter((img) => img.getAttribute("width") && img.getAttribute("height")).length,
    img_total: document.querySelectorAll("img").length,
  }));
  if (viewport.id !== "mobile-320") await page.screenshot({ path: join(outDir, `${viewport.id}.png`), fullPage: viewport.id === "desktop-1440" });
  viewportFacts.push({ ...viewport, ...facts });
}
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(`${origin}/index.html`, { waitUntil: "networkidle", timeout: 30000 });
await page.addScriptTag({ path: axePath });
const axe = await page.evaluate(async () => {
  const result = await window.axe.run(document, { resultTypes: ["violations"] });
  const serious = result.violations.filter((violation) => ["serious", "critical"].includes(violation.impact));
  return { count: serious.reduce((total, violation) => total + violation.nodes.length, 0), rules: serious.map((violation) => violation.id) };
});
await browser.close();
server.close();

const assetsDir = join(workspace, "assets");
const providedAssets = existsSync(assetsDir) ? readdirSync(assetsDir).filter((name) => /\.(png|jpe?g|webp|svg)$/.test(name)) : [];
const html = readFileSync(join(workspace, "index.html"), "utf8");
const assetsUsed = providedAssets.filter((name) => html.includes(`assets/${name}`)).length;
const desktop = viewportFacts.find((entry) => entry.id === "desktop-1440");
const audit = {
  schema_version: "0.1", kind: "showcase-2.0-uniform-audit",
  workspace_sha256: createHash("sha256").update(html).digest("hex"),
  structure: { main_count: desktop.main_count, h1_count: desktop.h1_count, pass: desktop.main_count === 1 && desktop.h1_count === 1 },
  responsive: Object.fromEntries(viewportFacts.map((entry) => [entry.id, { overflow_px: entry.overflow_px }])),
  responsive_pass: viewportFacts.every((entry) => entry.overflow_px === 0),
  axe_serious_critical: axe,
  external_requests: external.slice(0, 10),
  self_contained: external.length === 0,
  provided_assets: providedAssets.length, assets_used: assetsUsed,
  imgs_with_dimensions: `${desktop.imgs_with_dimensions}/${desktop.img_total}`,
  reduced_motion_guard: viewportFacts.some((entry) => entry.reduced_motion_guard),
  generated_at: new Date().toISOString(),
};
writeFileSync(join(outDir, "audit.json"), `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify({ structure: audit.structure.pass, responsive: audit.responsive_pass, axe: axe.count, self_contained: audit.self_contained, assets_used: `${assetsUsed}/${providedAssets.length}`, reduced_motion: audit.reduced_motion_guard }));
