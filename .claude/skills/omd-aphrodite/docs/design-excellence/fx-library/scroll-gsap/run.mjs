#!/usr/bin/env node
/** run.mjs — dist/*.html 를 chromium(file://)으로 열고 끝까지 스크롤하며 콘솔 에러 0 인지 검사 */
import { readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const HERE = dirname(fileURLToPath(import.meta.url));
const { chromiumRuntime } = await import(pathToFileURL(resolve(HERE, "../../../test-v2/tools/lib/browser.mjs")).href);
const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch(launchOptions);
let bad = 0;
for (const f of readdirSync(join(HERE, "dist")).filter((x) => x.endsWith(".html")).sort()) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errs = [];
  page.on("console", (m) => { if (m.type() === "error") errs.push(m.text()); });
  page.on("pageerror", (e) => errs.push("pageerror: " + e.message));
  await page.goto(pathToFileURL(join(HERE, "dist", f)).href, { waitUntil: "load" });
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y <= h; y += 400) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(60); }
  await page.waitForTimeout(200);
  const moved = await page.evaluate(() => ({ st: typeof ScrollTrigger !== "undefined" && ScrollTrigger.getAll().length, gsap: typeof gsap !== "undefined" }));
  if (errs.length) bad++;
  console.log(`${errs.length ? "FAIL" : "ok  "} ${f}  triggers=${moved.st} gsap=${moved.gsap}${errs.length ? "\n     " + errs.slice(0, 3).join("\n     ") : ""}`);
  await page.close();
}
await browser.close();
console.log(bad ? `\n${bad} file(s) with console errors` : "\nall clean — console errors 0");
