#!/usr/bin/env node
/**
 * capture-cells.mjs — T3-3 레인 A 산출 칸의 「첫 캡처」 두 장 (RUBRIC §4.1: 1440×1000 · 390×844).
 *
 * 왜 따로 있나: 채점 축 1(첫 렌더 결함)은 DOM도 소스도 보지 않고 두 첫 캡처 위에서만
 * 결함을 표시한다. 그 캡처는 봉인 칸(03-runs)을 읽기만 하고, 산출은 90-comparison/captures/
 * 아래 별도 트리에 SHA 매니페스트와 함께 둔다 — 03-runs는 절대 건드리지 않는다.
 *
 * 런 계약상 첫 렌더 = 제출된 render.html이다 (run.json `outputs.firstRender`). 라이브 하네스가
 * 최초 load 직후를 잡은 것이 아니므로, 레인 A 리포트 조건부에 이 편차를 적는다.
 *
 * 결정론: 폰트·애니메이션 안정화 대기 800ms, 스크롤 0, 뷰포트 캡처(full page 아님),
 * deviceScaleFactor 1. 같은 render.html은 같은 바이트를 내야 한다 — 매니페스트가 그 증거다.
 *
 * usage: node capture-cells.mjs [--brand b1,b2] [--force] [--json]
 */
import { chromium } from "playwright-core";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const RUNS = join(ROOT, "test-v2/03-runs/lane-a");
const OUT = join(ROOT, "test-v2/90-comparison/captures/lane-a");
const VIEWPORTS = { "desktop-1440": { width: 1440, height: 1000 }, "mobile-390": { width: 390, height: 844 } };

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : undefined; };
const brandsFilter = opt("brand")?.split(",").map((s) => s.trim()).filter(Boolean);
const force = argv.includes("--force");
const asJson = argv.includes("--json");
const sha = (buf) => "sha256:" + createHash("sha256").update(buf).digest("hex");

const cells = [];
for (const brand of readdirSync(RUNS).sort()) {
  if (brandsFilter && !brandsFilter.includes(brand)) continue;
  for (const arm of ["omd", "hallmark", "uiuxpromax"]) {
    for (let rep = 1; rep <= 4; rep++) {
      const html = join(RUNS, brand, arm, `rep-${rep}`, "render.html");
      if (existsSync(html)) cells.push({ brand, arm, rep, html });
    }
  }
}

const browser = await chromium.launch({ headless: true });
const results = [];
for (const c of cells) {
  const dir = join(OUT, c.brand, c.arm, `rep-${c.rep}`);
  const manifestPath = join(dir, "manifest.json");
  const sourceSha = sha(readFileSync(c.html));
  if (!force && existsSync(manifestPath)) {
    const m = JSON.parse(readFileSync(manifestPath, "utf8"));
    if (m.sourceSha === sourceSha) { results.push({ ...c, html: undefined, status: "kept", manifest: m }); continue; }
  }
  mkdirSync(dir, { recursive: true });
  const files = {};
  const errors = [];
  for (const [name, vp] of Object.entries(VIEWPORTS)) {
    const context = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: "no-preference" });
    const page = await context.newPage();
    page.on("pageerror", (e) => errors.push(`${name}: ${String(e).slice(0, 120)}`));
    try {
      await page.goto("file://" + c.html, { waitUntil: "load", timeout: 20000 });
      await page.waitForTimeout(800);
      await page.evaluate(() => window.scrollTo(0, 0));
      const buf = await page.screenshot({ fullPage: false, type: "png" });
      const p = join(dir, `${name}.png`);
      writeFileSync(p, buf);
      files[name] = { file: `${name}.png`, sha: sha(buf), bytes: buf.length, viewport: vp };
    } catch (e) {
      errors.push(`${name}: ${String(e).split("\n")[0]}`);
    } finally {
      await context.close();
    }
  }
  const manifest = {
    lane: "A", brand: c.brand, arm: c.arm, rep: c.rep,
    source: `test-v2/03-runs/lane-a/${c.brand}/${c.arm}/rep-${c.rep}/render.html`, sourceSha,
    capturedAt: new Date().toISOString(), rule: "RUBRIC §4.1 — viewport capture, scroll 0, 800ms settle, dpr 1",
    files, errors,
  };
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + "\n");
  results.push({ ...c, html: undefined, status: Object.keys(files).length === 2 ? "captured" : "partial", manifest });
}
await browser.close();

if (asJson) console.log(JSON.stringify(results, null, 1));
else {
  for (const r of results)
    console.log(`${r.brand}/${r.arm}/rep-${r.rep}`.padEnd(28) + r.status.padEnd(9) + (r.manifest.errors?.length ? " ⚠ " + r.manifest.errors.join(" · ") : ""));
  const n = (s) => results.filter((r) => r.status === s).length;
  console.log(`CAPTURE_DONE cells=${results.length} captured=${n("captured")} kept=${n("kept")} partial=${n("partial")}`);
}
