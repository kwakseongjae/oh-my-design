#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { collectTextGeometryInPage } from "./evaluate-run.mjs";
import { repoRoot } from "./_lib.mjs";

const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require("playwright-core");
} catch {
  playwright = createRequire(`${repoRoot}/web/package.json`)("playwright-core");
}
const { chromium } = playwright;

function chromeExecutable() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  for (const candidate of candidates) if (existsSync(candidate)) return candidate;
  for (const command of ["google-chrome", "chromium", "chromium-browser"]) {
    try { return execFileSync("which", [command], { encoding: "utf8" }).trim(); } catch { /* continue */ }
  }
  throw new Error("Chrome/Chromium executable not found; set CHROME_PATH");
}

const browser = await chromium.launch({
  executablePath: chromeExecutable(),
  headless: true,
  args: ["--disable-background-networking", "--disable-component-update", "--no-first-run"],
});

try {
  const page = await browser.newPage({ viewport: { width: 320, height: 720 } });
  await page.setContent(`<!doctype html>
    <html><head><style>
      .context { width: 280px; }
      h1 { width: 260px; font: 400 34px/38px Georgia, serif; }
      .atomic, .compact-copy { display: block; width: 112px; font: 700 16px/20px Arial, sans-serif; }
      .atomic { overflow-x: auto; }
    </style></head><body>
      <article class="context">
        <h1>Route supplied field samples for review.</h1>
        <p class="atomic">3 supplied samples</p>
        <span class="compact-copy">Preserve source context</span>
      </article>
    </body></html>`);

  const scoped = await page.evaluate(collectTextGeometryInPage, {
    scope_selectors: [".context"],
    atomic_scope_selectors: [".atomic"],
    compact_copy_selectors: [".compact-copy"],
    max_short_text_chars: 40,
    max_short_text_lines: 1,
  });
  const scopedTexts = scoped.short_atomic_text_wraps.map((item) => item.text);
  assert(scopedTexts.includes("3 supplied samples"));
  assert(scopedTexts.includes("Preserve source context"));
  assert(!scopedTexts.includes("Route supplied field samples for review."));
  assert.deepEqual(scoped.missing_scope_selectors, []);
  assert.deepEqual(scoped.passive_text_scrollers, [{
    tag: "P",
    text: "3 supplied samples",
    overflow_x: "auto",
    overflow_y: "auto",
  }]);

  const legacy = await page.evaluate(collectTextGeometryInPage, {
    scope_selectors: [".context"],
    max_short_text_chars: 40,
    max_short_text_lines: 1,
  });
  assert(legacy.short_atomic_text_wraps.some((item) =>
    item.text === "Route supplied field samples for review."));

  const missing = await page.evaluate(collectTextGeometryInPage, {
    scope_selectors: [".context"],
    atomic_scope_selectors: [".missing-atomic"],
    max_short_text_chars: 40,
    max_short_text_lines: 1,
  });
  assert.deepEqual(missing.missing_scope_selectors, [".missing-atomic"]);

  console.log(JSON.stringify({
    event: "text-geometry-scope-check",
    status: "pass",
    assertions: 7,
  }));
} finally {
  await browser.close();
}
