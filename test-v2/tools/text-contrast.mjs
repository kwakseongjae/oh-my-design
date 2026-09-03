#!/usr/bin/env node
/**
 * text-contrast.mjs — 렌더 파일의 첫 뷰포트에서 **사진·그라디언트 위 텍스트**의 실제 대비를 잰다 (이슈 #86, LI-24~26 후보).
 *
 * 왜 CSS 색만 보면 안 되나: 첫 toss·stripe 랜딩 런은 토큰 색을 정확히 썼는데도 히어로 사진 위에서 nav 1.05:1·wordmark 1.07:1이었다.
 * 배경이 이미지면 "배경색"이 없다 — 글자 뒤 픽셀을 봐야 한다.
 *
 * 방법(디자이너 리뷰 round-1과 동형, 오케스트레이터가 round-2에서 검증한 형태):
 *   1. 텍스트 요소를 찾아 두 번 캡처한다 — 그대로 / `color: transparent`(버튼 채움·보더는 남는다).
 *   2. 두 캡처의 diff 픽셀 = 글리프 픽셀. 각 글리프 픽셀에 대해 **요소의 명목 글자색 vs 그 자리의 배경 픽셀**로 WCAG 대비를 센다.
 *      (안티앨리어스 픽셀 자체의 색을 쓰면 소형 글자가 과소평가된다 — 첫 시도의 오류, 2026-09-02.)
 *   3. 요소마다 min·avg·"임계 미만 글리프 픽셀 %"를 낸다. 임계: 일반 텍스트 4.5:1, 큰 텍스트(≥24px 또는 ≥18.66px bold) 3:1.
 *   4. 포커스 링: 포커스 전/후 diff에서 링 색 우세 픽셀만 취해 3:1(WCAG 1.4.11).
 *   5. no-JS: javaScriptEnabled:false 로 열어 opacity<0.1 인 큰 요소 수.
 *
 * FAIL 규칙: 어느 텍스트 요소든 임계 미만 글리프 픽셀이 5%를 넘으면 FAIL(안티앨리어스·서브픽셀 잡음 여유), 포커스 링도 5%, no-JS hidden>0 이면 FAIL.
 *
 * usage: node text-contrast.mjs <render.html...> [--viewport 1440x900,390x844] [--json] [--out <dir>]
 */
import { chromiumRuntime } from "./lib/browser.mjs";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf("--" + n); return i >= 0 ? argv[i + 1] : d; };
const asJson = argv.includes("--json");
const OUT = opt("out", null) ? resolve(opt("out")) : null;
const VPS = String(opt("viewport", "1440x900,390x844")).split(",").map((s) => { const [w, h] = s.split("x").map(Number); return { width: w, height: h }; });
const files = argv.filter((a, i) => !a.startsWith("--") && !(i > 0 && /^--(viewport|out)$/.test(argv[i - 1])));
if (!files.length) { console.error("usage: text-contrast.mjs <render.html...> [--viewport 1440x900,390x844] [--json] [--out <dir>]"); process.exit(2); }
const THRESH_PCT = 5;
const dbg = (m) => process.env.TC_DEBUG && process.stderr.write(`[tc ${new Date().toTimeString().slice(0,8)}] ${m}\n`);

const MEASURE = `async ({ a, bb, targets }) => {
  const load = async (x) => { const im = new Image(); im.src = 'data:image/png;base64,' + x; await im.decode(); const c = document.createElement('canvas'); c.width = im.width; c.height = im.height; const g = c.getContext('2d'); g.drawImage(im, 0, 0); return g; };
  const ga = await load(a), gb = await load(bb);
  const s = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const L = (r, g, bl) => 0.2126 * s(r) + 0.7152 * s(g) + 0.0722 * s(bl);
  const o = [];
  for (const t of targets) {
    const x0 = Math.max(0, Math.round(t.rect.x)), y0 = Math.max(0, Math.round(t.rect.y)); const w = Math.max(1, Math.round(t.rect.w)), h = Math.max(1, Math.round(t.rect.h));
    const da = ga.getImageData(x0, y0, w, h).data, db = gb.getImageData(x0, y0, w, h).data;
    const lf = L(t.color[0], t.color[1], t.color[2]);
    let n = 0, below = 0, min = 99, sum = 0;
    for (let i = 0; i < da.length; i += 4) {
      const d = Math.abs(da[i] - db[i]) + Math.abs(da[i+1] - db[i+1]) + Math.abs(da[i+2] - db[i+2]); if (d < 40) continue;
      if (t.ring && !(da[i+2] > da[i] + 20 && da[i+2] > da[i+1] + 20) && !(da[i] > da[i+2] + 20 && da[i] > da[i+1] + 20)) continue;
      const lb = L(db[i], db[i+1], db[i+2]); const cr = (Math.max(lf, lb) + 0.05) / (Math.min(lf, lb) + 0.05);
      n++; sum += cr; if (cr < min) min = cr; if (cr < t.floor) below++;
    }
    o.push({ ...t, rect: undefined, color: undefined, glyphPx: n, min: n ? +min.toFixed(2) : null, avg: n ? +(sum / n).toFixed(2) : null, pctBelow: n ? +(100 * below / n).toFixed(1) : null });
  }
  return o;
}`;

const { chromium, launchOptions } = chromiumRuntime();
const browser = await chromium.launch({ headless: true, ...launchOptions });
const results = [];
let anyFail = false;
for (const f of files) {
  const abs = resolve(f);
  if (!existsSync(abs)) { results.push({ file: f, fatal: "missing" }); anyFail = true; continue; }
  const r = { file: f, viewports: {}, fails: [] };
  for (const vp of VPS) {
    const tag = `${vp.width}x${vp.height}`;
    dbg(`${basename(dirname(abs))} ${tag} text…`);
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, colorScheme: "light" });
    const page = await ctx.newPage();
    try {
      await page.goto("file://" + abs, { waitUntil: "load", timeout: 20000 });
      // lazy 이미지는 스크롤 전엔 절대 로드되지 않아 decode()가 영원히 대기한다(2026-09-02 toss/autopilot에서 50분 정지) — 1.5초 상한.
      await page.evaluate(() => Promise.race([Promise.all([...document.images].map((i) => (i.complete ? 1 : i.decode().catch(() => 1)))), new Promise((r) => setTimeout(r, 1500))]));
      await page.waitForTimeout(800);
      const targets = await page.evaluate(() => {
        const vh = innerHeight; const out = []; let k = 0;
        for (const el of document.querySelectorAll("body *")) {
          const direct = [...el.childNodes].some((n) => n.nodeType === 3 && n.nodeValue.trim().length > 1); if (!direct) continue;
          const cs = getComputedStyle(el); if (cs.display === "none" || cs.visibility === "hidden" || +cs.opacity < 0.1) continue;
          const rr = el.getBoundingClientRect(); if (rr.bottom <= 0 || rr.top >= vh || rr.width < 4 || rr.height < 4) continue;
          const fs = parseFloat(cs.fontSize), fw = parseInt(cs.fontWeight) || 400; const large = fs >= 24 || (fs >= 18.66 && fw >= 700);
          const color = (cs.color.match(/[\d.]+/g) || [0, 0, 0]).slice(0, 3).map(Number);
          el.setAttribute("data-tc", String(k));
          out.push({ id: k++, el: `${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? "." + el.className.split(/\s+/)[0] : ""}`, text: el.textContent.trim().slice(0, 28), fontSize: fs, large, floor: large ? 3 : 4.5, color, rect: { x: rr.x, y: rr.y, w: rr.width, h: Math.min(rr.height, vh - rr.y) } });
        }
        return out;
      });
      const withText = await page.screenshot({ clip: { x: 0, y: 0, ...vp } });
      await page.addStyleTag({ content: "[data-tc]{color:transparent !important;text-shadow:none !important}" }); await page.waitForTimeout(200);
      const bg = await page.screenshot({ clip: { x: 0, y: 0, ...vp } });
      if (OUT) { mkdirSync(OUT, { recursive: true }); writeFileSync(join(OUT, `${basename(dirname(abs))}-${tag}.png`), withText); }
      const text = (await page.evaluate(eval(MEASURE), { a: withText.toString("base64"), bb: bg.toString("base64"), targets })).filter((t) => t.glyphPx >= 20);
      await ctx.close();
      // 포커스 링
      const ctx2 = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, colorScheme: "light" }); const p2 = await ctx2.newPage();
      await p2.goto("file://" + abs, { waitUntil: "load", timeout: 20000 }); await p2.waitForTimeout(800);
      const focusables = await p2.evaluate(() => { const vh = innerHeight; const els = [...document.querySelectorAll('a[href],button,[tabindex]:not([tabindex="-1"]),input,select,textarea')].filter((e) => { const rr = e.getBoundingClientRect(); return rr.top >= 0 && rr.bottom <= vh && rr.width > 0; }); els.forEach((e, i) => e.setAttribute("data-fx", String(i))); return els.slice(0, 10).map((e, i) => ({ i, text: e.textContent.trim().slice(0, 20) || e.tagName.toLowerCase() })); });
      const rings = [];
      dbg(`${basename(dirname(abs))} ${tag} focus ×${focusables.length}`);
      for (const fx of focusables) {
        dbg(`  focus ${fx.i} ${fx.text}`);
        // 진입 애니메이션(히어로 settle 등)이 아직 돌면 before/after 차이에 사진 픽셀이 섞여 링이 아닌 것을 링으로 잰다
        // (2026-09-03 ninefold: 첫 버튼만 30% 미달로 반복 실패). 돌고 있는 애니메이션이 끝날 때까지(최대 2.5초) 기다린다.
        await p2.evaluate(() => Promise.race([Promise.all(document.getAnimations().map((a) => a.finished.catch(() => {}))), new Promise((r) => setTimeout(r, 2500))]));
        const before = await p2.screenshot({ clip: { x: 0, y: 0, ...vp } });
        await p2.evaluate((i) => document.querySelector(`[data-fx="${i}"]`).focus({ focusVisible: true }), fx.i); await p2.keyboard.press("Shift"); await p2.waitForTimeout(120);
        const after = await p2.screenshot({ clip: { x: 0, y: 0, ...vp } });
        // 링 색 = outline·box-shadow 색들 중 채도(max−min 채널)가 가장 큰 것. halo(흰색)가 먼저 나열되면 그걸 링으로 잡던 버그(2026-09-02 toss) 수정.
        const ringColor = await p2.evaluate((i) => { const el = document.querySelector(`[data-fx="${i}"]`); const cs = getComputedStyle(el); const cols = []; for (const src of [cs.outlineColor, cs.boxShadow, cs.borderColor]) for (const m of (src || "").matchAll(/rgba?\(([^)]+)\)/g)) { const v = m[1].split(",").map(Number); if (v.length >= 3 && (v[3] === undefined || v[3] > 0.2)) cols.push(v.slice(0, 3)); } cols.sort((a, b) => (Math.max(...b) - Math.min(...b)) - (Math.max(...a) - Math.min(...a))); return cols[0] || [0, 0, 255]; }, fx.i);
        const m = await p2.evaluate(eval(MEASURE), { a: after.toString("base64"), bb: before.toString("base64"), targets: [{ id: fx.i, ring: true, el: "focus", text: fx.text, floor: 3, large: true, color: ringColor, rect: { x: 0, y: 0, w: vp.width, h: vp.height } }] });
        if (m[0].glyphPx >= 20) rings.push(m[0]);
        await p2.evaluate((i) => document.querySelector(`[data-fx="${i}"]`).blur(), fx.i);
      }
      await ctx2.close();
      r.viewports[tag] = { text, rings };
      for (const t of text) if (t.pctBelow > THRESH_PCT) r.fails.push(`${tag} ${t.el} "${t.text}" ${t.pctBelow}% of glyph px < ${t.floor}:1 (min ${t.min})`);
      for (const t of rings) if (t.pctBelow > THRESH_PCT) r.fails.push(`${tag} focus "${t.text}" ${t.pctBelow}% of ring px < 3:1 (min ${t.min})`);
    } catch (e) { r.fails.push(`${tag} FATAL ${String(e).split("\n")[0]}`); await ctx.close().catch(() => {}); }
  }
  dbg(`${basename(dirname(abs))} nojs`);
  // no-JS
  const ctxN = await browser.newContext({ viewport: VPS[0], javaScriptEnabled: false }); const pn = await ctxN.newPage();
  try { await pn.goto("file://" + abs, { waitUntil: "load", timeout: 20000 }); await pn.waitForTimeout(500); r.nojs = await pn.evaluate(() => [...document.querySelectorAll("body *")].filter((e) => { const cs = getComputedStyle(e); return +cs.opacity < 0.1 && e.getBoundingClientRect().height > 100; }).length); if (r.nojs > 0) r.fails.push(`no-JS: ${r.nojs} large element(s) hidden (opacity<0.1) without script`); } catch (e) { r.fails.push(`nojs FATAL ${String(e).split("\n")[0]}`); }
  await ctxN.close();
  if (r.fails.length) anyFail = true;
  results.push(r);
}
await browser.close();
if (asJson) console.log(JSON.stringify(results, null, 1));
else for (const r of results) {
  console.log(`\n${r.file}${r.fatal ? `  FATAL ${r.fatal}` : `  ${r.fails.length ? "FAIL " + r.fails.length : "PASS"} · no-JS hidden ${r.nojs}`}`);
  for (const [tag, v] of Object.entries(r.viewports || {})) {
    for (const t of v.text) console.log(`  ${tag.padEnd(9)} ${t.pctBelow > THRESH_PCT ? "FAIL" : "ok  "} ${t.el.padEnd(16)} ${String(t.fontSize).padStart(4)}px ${t.large ? "L" : " "} min ${String(t.min).padStart(5)} avg ${String(t.avg).padStart(5)} <${t.floor}: ${String(t.pctBelow).padStart(5)}%  "${t.text}"`);
    for (const t of v.rings) console.log(`  ${tag.padEnd(9)} ${t.pctBelow > THRESH_PCT ? "FAIL" : "ok  "} focus            ring  min ${String(t.min).padStart(5)} avg ${String(t.avg).padStart(5)} <3:   ${String(t.pctBelow).padStart(5)}%  "${t.text}"`);
  }
}
(asJson ? console.error : console.log)(`\nTEXT_CONTRAST_DONE files=${results.length} fail=${results.filter((r) => r.fatal || r.fails?.length).length}`);
process.exit(anyFail ? 1 : 0);
