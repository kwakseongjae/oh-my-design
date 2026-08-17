#!/usr/bin/env node
/**
 * multipage-audit.mjs — cross-page consistency audit for multi-page tasks.
 *
 * The single-page uniform audit measures hygiene; THIS audit measures what a
 * design system is for: N pages that look like one product. Deterministic
 * checks, uniform across arms:
 *
 * per page:
 *   - structure (1 main, 1 h1), horizontal overflow 320/1440, axe s+c count
 * cross-page:
 *   - shared-element computed-style identity: nav background/font, body
 *     font-family/size, h1 font-family/weight, primary-action background/
 *     radius/font — every page must render these identically
 *   - nav consistency: same internal link set on every page; current page
 *     marked (aria-current or equivalent class)
 *   - link integrity: every internal href resolves to an existing file
 *   - token architecture: :root custom properties defined once in a shared
 *     stylesheet (not re-declared with different values per page)
 *
 * Usage: multipage-audit.mjs --workspace <dir> --pages "index.html,programs.html,..." --out <dir>
 */

import { createRequire } from "node:module";
import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const require = createRequire(import.meta.url);
const webRequire = createRequire(resolve("web/package.json"));
let playwright;
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
if (!args.has("workspace") || !args.has("pages") || !args.has("out")) {
  console.error('usage: multipage-audit.mjs --workspace <dir> --pages "a.html,b.html" --out <dir>'); process.exit(1);
}
const workspace = resolve(args.get("workspace"));
const pages = args.get("pages").split(",").map((page) => page.trim()).filter(Boolean);
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
    response.writeHead(200, { "content-type": MIME[extname(file)] ?? "application/octet-stream" });
    response.end(readFileSync(file));
  } catch { response.writeHead(500); response.end(); }
});
await new Promise((ready) => server.listen(0, "127.0.0.1", ready));
const origin = `http://127.0.0.1:${server.address().port}`;

const executablePath = chromePath();
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage();

const SIGNATURE_SCRIPT = () => {
  const pick = (el, props) => { if (!el) return null; const cs = getComputedStyle(el); return Object.fromEntries(props.map((p) => [p, cs[p]])); };
  const nav = document.querySelector("nav, [role='navigation']");
  const primary = document.querySelector("[data-cta='primary'], .btn-primary, .primary, button[type='submit'], a.cta, button");
  const links = nav ? [...nav.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")).filter((h) => h && !h.startsWith("http") && !h.startsWith("#")) : [];
  const current = nav ? [...nav.querySelectorAll("[aria-current], .active, .current")].length : 0;
  const rootVars = [];
  for (const sheet of document.styleSheets) {
    try { for (const rule of sheet.cssRules) if (rule.selectorText === ":root") for (const name of rule.style) if (name.startsWith("--")) rootVars.push(`${name}:${rule.style.getPropertyValue(name).trim()}`); } catch {}
  }
  const allLinks = [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")).filter((h) => h && !h.startsWith("http") && !h.startsWith("#") && !h.startsWith("mailto"));
  return {
    body: pick(document.body, ["fontFamily", "fontSize", "backgroundColor", "color"]),
    h1: pick(document.querySelector("h1"), ["fontFamily", "fontWeight", "letterSpacing"]),
    nav_style: pick(nav, ["backgroundColor", "fontFamily"]),
    primary_style: pick(primary, ["backgroundColor", "borderRadius", "fontFamily", "color"]),
    nav_links: links.sort(), nav_current_marked: current > 0,
    root_vars: rootVars.sort(), all_internal_links: [...new Set(allLinks)],
    main_count: document.querySelectorAll("main").length, h1_count: document.querySelectorAll("h1").length,
    overflow_px: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
  };
};

const perPage = {};
for (const target of pages) {
  const record = { exists: existsSync(join(workspace, target)) };
  if (record.exists) {
    for (const viewport of [{ id: "mobile-320", width: 320, height: 720 }, { id: "desktop-1440", width: 1440, height: 900 }]) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(`${origin}/${target}`, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(400);
      const sig = await page.evaluate(SIGNATURE_SCRIPT);
      if (viewport.id === "desktop-1440") {
        record.signature = sig;
        await page.addScriptTag({ path: axePath });
        record.axe = await page.evaluate(async () => {
          const result = await window.axe.run(document, { resultTypes: ["violations"] });
          return result.violations.filter((v) => ["serious", "critical"].includes(v.impact)).reduce((t, v) => t + v.nodes.length, 0);
        });
        await page.screenshot({ path: join(outDir, `${target.replace(/[\\/]/g, "_")}--desktop.png`), fullPage: false });
      } else record.overflow_320 = sig.overflow_px;
    }
  }
  perPage[target] = record;
}
await browser.close(); server.close();

const present = pages.filter((p) => perPage[p].exists);
const sigs = present.map((p) => perPage[p].signature);
const identical = (key) => {
  const values = sigs.map((s) => JSON.stringify(s[key] ?? null));
  return values.every((v) => v === values[0]);
};
const navSets = sigs.map((s) => JSON.stringify(s.nav_links));
const brokenLinks = [];
for (const p of present) for (const href of perPage[p].signature.all_internal_links) {
  const clean = href.split("?")[0].split("#")[0];
  if (clean && !existsSync(join(workspace, clean))) brokenLinks.push(`${p} -> ${href}`);
}
const rootVarSets = sigs.map((s) => s.root_vars);
const varConflicts = [];
const varMap = new Map();
for (const [i, vars] of rootVarSets.entries()) for (const decl of vars) {
  const [name] = decl.split(":");
  if (varMap.has(name) && varMap.get(name).value !== decl) varConflicts.push(`${name}: ${present[varMap.get(name).page]} vs ${present[i]}`);
  else varMap.set(name, { value: decl, page: i });
}
const audit = {
  schema_version: "0.1", kind: "multipage-consistency-audit",
  pages_expected: pages.length, pages_present: present.length,
  per_page: Object.fromEntries(pages.map((p) => [p, { exists: perPage[p].exists, main_count: perPage[p].signature?.main_count, h1_count: perPage[p].signature?.h1_count, overflow_320: perPage[p].overflow_320, axe: perPage[p].axe }])),
  consistency: {
    body_style_identical: identical("body"), h1_style_identical: identical("h1"),
    nav_style_identical: identical("nav_style"), primary_style_identical: identical("primary_style"),
    nav_link_set_identical: navSets.every((v) => v === navSets[0]),
    nav_current_marked_everywhere: sigs.every((s) => s.nav_current_marked),
    root_var_conflicts: varConflicts.slice(0, 10),
    broken_internal_links: brokenLinks.slice(0, 10),
  },
  consistency_pass: present.length === pages.length
    && identical("body") && identical("h1") && identical("nav_style") && identical("primary_style")
    && navSets.every((v) => v === navSets[0]) && varConflicts.length === 0 && brokenLinks.length === 0,
  generated_at: new Date().toISOString(),
};
writeFileSync(join(outDir, "multipage-audit.json"), `${JSON.stringify(audit, null, 2)}\n`);
console.log(JSON.stringify({ pages: `${present.length}/${pages.length}`, consistency_pass: audit.consistency_pass, conflicts: varConflicts.length, broken_links: brokenLinks.length }));
