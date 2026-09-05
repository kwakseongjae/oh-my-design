/**
 * 스크롤 질감 계측 — "딱딱하다"를 숫자로.
 *
 * 사용자 지적(r4 65점): "스크롤 기반의 움직임이 딱딱하다."
 * 원인 가설(docs/reviews/scroll-stiffness-diagnosis-2026-09-05.md): 우리 스크럽은 상태가 없다 —
 * 감쇠(lerp)·상시 rAF·속도 항·스무스 스크롤이 없어 위치의 함수로만 움직인다.
 *
 * 재는 것
 *   1) 스무스 스크롤 시정수 τ  — 휠 한 번을 주고 스크롤/시각 위치가 목표에 수렴하는 데 걸리는 시간
 *   2) 스크럽 감쇠            — 스크롤을 한 프레임에 크게 옮기고 애니메이션 값이 따라오는 프레임 수
 *   3) 속도 결합             — 같은 위치를 느리게/빠르게 지나갈 때 그림이 달라지는가
 *   4) 이징 인벤토리          — 실제로 쓰이는 transition/animation 곡선 상위 목록
 *   5) 프레임 지터            — 등속 스크롤 중 프레임 간 이동량의 변동계수
 *
 *   node scroll-feel.mjs --local            # 우리 r2·r3·r4
 *   node scroll-feel.mjs --site lusion,affinity
 *   node scroll-feel.mjs --all
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");

const HERE = dirname(fileURLToPath(import.meta.url));
const RUN = join(HERE, "..", "content-runs", "aphrodite");
const OUTDIR = join(RUN, "higgsgen", "research", "r5");
const VIEWPORT = { width: 1440, height: 900 };

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };
const has = (n) => process.argv.includes(`--${n}`);

const LOCAL = [
  { id: "r4", url: "file://" + join(RUN, "higgsgen", "render-r4.html"), note: "65점 — 자작 핀, 감쇠 없음" },
  { id: "r3", url: "file://" + join(RUN, "higgsgen", "render-r3.html"), note: "60점" },
  { id: "r2", url: "file://" + join(RUN, "higgsgen", "render-r2.html"), note: "70점 — GSAP scrub" },
];
const REMOTE = [
  { id: "lusion", url: "https://lusion.co/" }, { id: "igloo", url: "https://igloo.inc/" },
  { id: "cosmos", url: "https://www.cosmos.so/" }, { id: "tasteskill", url: "https://www.tasteskill.dev/" },
  { id: "affinity", url: "https://www.affinity.studio/" }, { id: "higgsfield", url: "https://higgsfield.ai/" },
  { id: "luma", url: "https://lumalabs.ai/" }, { id: "basement", url: "https://basement.studio/" },
  { id: "locomotive", url: "https://www.locomotive.ca/en" }, { id: "runway", url: "https://runwayml.com/" },
  { id: "apple-iphone", url: "https://www.apple.com/kr/iphone/" },
];

const DISMISS = ['button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("동의")', 'button:has-text("모두 동의")', 'button:has-text("Got it")', '[id*="cookie"] button', '[class*="cookie"] button'];

/* ── 페이지 안에서 프레임마다 표본을 모으는 레코더 ── */
const RECORDER = () => {
  const W = (window.__sf = {
    frames: [], on: false,
    pick: null, pickName: null,
    start() { this.frames = []; this.on = true; loop(); },
    stop() { this.on = false; return this.frames; },
  });
  /* 추적 대상: 화면 중앙에 걸린 가장 큰 요소(스크롤로 위치가 바뀌는 것) */
  W.choose = () => {
    let best = null, bestA = 0;
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width < 200 || r.height < 120) continue;
      if (r.bottom < 0 || r.top > innerHeight) continue;
      const a = r.width * r.height;
      if (a > bestA) { bestA = a; best = el; }
    }
    W.pick = best;
    W.pickName = best ? best.tagName.toLowerCase() + (typeof best.className === "string" && best.className.trim() ? "." + best.className.trim().split(/\s+/)[0] : "") : null;
    return W.pickName;
  };
  /* 스크럽 값 후보: --e 류 커스텀 프로퍼티, 아니면 추적 요소의 transform 행렬 */
  W.readScrub = () => {
    const t = document.querySelector("[style*='--e'], .pin-track, [data-scroll-progress]");
    if (t) { const v = parseFloat(getComputedStyle(t).getPropertyValue("--e")); if (!Number.isNaN(v)) return v; }
    if (!W.pick) return null;
    const m = getComputedStyle(W.pick).transform;
    if (!m || m === "none") return null;
    const n = m.match(/-?[\d.]+/g);
    return n ? +n[n.length - 1] : null; // translateY 성분
  };
  function loop() {
    if (!W.on) return;
    const r = W.pick ? W.pick.getBoundingClientRect() : null;
    W.frames.push({
      t: performance.now(),
      y: window.scrollY || document.documentElement.scrollTop || 0,
      vy: r ? +r.top.toFixed(2) : null,      // 시각 위치(스무스 스크롤이면 y 보다 늦게 따라온다)
      scrub: W.readScrub(),
    });
    requestAnimationFrame(loop);
  }
};

/** 지수 수렴 시정수 τ(ms) 를 프레임 표본에서 추정한다. */
function tau(samples, key) {
  const v = samples.map((s) => s[key]).filter((x) => x !== null && x !== undefined);
  if (v.length < 6) return null;
  const start = v[0], end = v[v.length - 1], span = end - start;
  if (Math.abs(span) < 2) return 0;
  const t0 = samples[0].t;
  for (let i = 0; i < v.length; i++) {
    const done = (v[i] - start) / span;
    if (done >= 0.632) return Math.round(samples[i].t - t0); // 1 - 1/e
  }
  return Math.round(samples[samples.length - 1].t - t0);
}

/** 목표의 99% 에 도달하기까지의 프레임 수 */
function settleFrames(samples, key) {
  const v = samples.map((s) => s[key]).filter((x) => x !== null);
  if (v.length < 4) return null;
  const start = v[0], end = v[v.length - 1], span = end - start;
  if (Math.abs(span) < 1) return 0;
  for (let i = 0; i < v.length; i++) if (Math.abs((v[i] - end) / span) < 0.01) return i;
  return v.length;
}

async function measure(target, browser) {
  const out = { id: target.id, url: target.url, note: target.note || null, errors: [] };
  const ctx = await browser.newContext({ viewport: VIEWPORT, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36" });
  const page = await ctx.newPage();
  await page.addInitScript(RECORDER);
  try { await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 45000 }); }
  catch (e) { out.errors.push("goto: " + String(e).split("\n")[0]); await ctx.close(); return out; }
  try { await page.waitForLoadState("networkidle", { timeout: 10000 }); } catch { /* */ }
  for (const sel of DISMISS) { try { const el = await page.$(sel); if (el && await el.isVisible()) { await el.click({ timeout: 800 }); break; } } catch { /* */ } }
  await page.waitForTimeout(2500);

  out.docVh = +((await page.evaluate(() => document.documentElement.scrollHeight)) / VIEWPORT.height).toFixed(2);

  /* 본문으로 조금 내려가 추적 대상을 고른다 */
  await page.mouse.move(720, 450);
  await page.mouse.wheel(0, 1400);
  await page.waitForTimeout(1500);
  out.tracked = await page.evaluate(() => window.__sf.choose());

  /* ── 1) 휠 한 번 → 수렴 ── */
  await page.evaluate(() => window.__sf.start());
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(1600);
  const impulse = await page.evaluate(() => window.__sf.stop());
  out.impulse = {
    frames: impulse.length,
    scrollTau: tau(impulse, "y"),
    visualTau: tau(impulse, "vy"),
    visualSettleFrames: settleFrames(impulse, "vy"),
    scrubTau: tau(impulse, "scrub"),
    /* 프레임당 보간 계수 α = 1 - e^(-16.7/τ) */
    alpha: null,
  };
  if (out.impulse.visualTau && out.impulse.visualTau > 0) out.impulse.alpha = +(1 - Math.exp(-16.7 / out.impulse.visualTau)).toFixed(3);
  else if (out.impulse.visualTau === 0) out.impulse.alpha = 1;

  /* ── 2) 큰 점프 → 스크럽 따라오기 ── */
  await page.evaluate(() => window.__sf.start());
  await page.mouse.wheel(0, 1800);
  await page.waitForTimeout(1800);
  const jump = await page.evaluate(() => window.__sf.stop());
  out.jump = { frames: jump.length, catchUpFrames: settleFrames(jump, "vy"), scrubCatchUp: settleFrames(jump, "scrub") };

  /* ── 3) 속도 결합: 느리게 vs 빠르게 같은 거리 ── */
  const sampleAt = async (steps, delay) => {
    await page.evaluate(() => scrollTo(0, 0)).catch(() => {});
    await page.mouse.wheel(0, -20000).catch(() => {});
    await page.waitForTimeout(900);
    for (let i = 0; i < steps; i++) { await page.mouse.wheel(0, Math.round(2400 / steps)); await page.waitForTimeout(delay); }
    await page.waitForTimeout(60);
    return page.evaluate(() => {
      const els = [...document.querySelectorAll("body *")].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 120 && r.height > 80 && r.bottom > 0 && r.top < innerHeight; }).slice(0, 40);
      return els.map((e) => { const cs = getComputedStyle(e); return { n: e.tagName.toLowerCase() + "." + (typeof e.className === "string" ? e.className.trim().split(/\s+/)[0] : ""), tr: cs.transform, f: cs.filter, o: cs.opacity, y: Math.round(e.getBoundingClientRect().top) }; });
    });
  };
  try {
    const slow = await sampleAt(12, 90), fast = await sampleAt(3, 20);
    const diffs = [];
    for (const a of slow) {
      const b = fast.find((x) => x.n === a.n);
      if (!b) continue;
      if (Math.abs(a.y - b.y) > 40) continue;              // 같은 위치에 있는 것만 비교
      if (a.tr !== b.tr || a.f !== b.f || Math.abs(+a.o - +b.o) > 0.05) diffs.push({ el: a.n, slow: { tr: a.tr.slice(0, 40), f: a.f, o: a.o }, fast: { tr: b.tr.slice(0, 40), f: b.f, o: b.o } });
    }
    out.velocityCoupled = { count: diffs.length, sample: diffs.slice(0, 5) };
  } catch (e) { out.errors.push("velocity: " + String(e).split("\n")[0]); }

  /* ── 4) 이징 인벤토리 ── */
  out.easing = await page.evaluate(() => {
    const t = {}, a = {};
    for (const el of [...document.querySelectorAll("body *")].slice(0, 4000)) {
      const cs = getComputedStyle(el);
      if (cs.transitionDuration && cs.transitionDuration !== "0s") { const k = `${cs.transitionDuration} ${cs.transitionTimingFunction}`; t[k] = (t[k] || 0) + 1; }
      if (cs.animationName && cs.animationName !== "none") { const k = `${cs.animationDuration} ${cs.animationTimingFunction}`; a[k] = (a[k] || 0) + 1; }
    }
    const top = (o) => Object.entries(o).sort((x, y) => y[1] - x[1]).slice(0, 6);
    return { transitions: top(t), animations: top(a), springs: top(t).concat(top(a)).filter(([k]) => /linear\(/.test(k)).length };
  });

  /* ── 5) 등속 스크롤 지터 ── */
  await page.evaluate(() => window.__sf.start());
  for (let i = 0; i < 14; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(55); }
  await page.waitForTimeout(400);
  const steady = await page.evaluate(() => window.__sf.stop());
  const vys = steady.map((s) => s.vy).filter((x) => x !== null);
  const deltas = [];
  for (let i = 1; i < vys.length; i++) deltas.push(Math.abs(vys[i] - vys[i - 1]));
  const mean = deltas.reduce((a, b) => a + b, 0) / Math.max(deltas.length, 1);
  const sd = Math.sqrt(deltas.reduce((a, b) => a + (b - mean) ** 2, 0) / Math.max(deltas.length, 1));
  const gaps = [];
  for (let i = 1; i < steady.length; i++) gaps.push(steady[i].t - steady[i - 1].t);
  out.steady = {
    frames: steady.length, meanDelta: +mean.toFixed(2), jitter: mean ? +(sd / mean).toFixed(2) : null,
    zeroFrames: deltas.filter((d) => d < 0.5).length,             // 스크롤 중인데 안 움직인 프레임 = 계단
    droppedFrames: gaps.filter((g) => g > 32).length,
  };

  await ctx.close();
  return out;
}

const targets = has("all") ? [...LOCAL, ...REMOTE]
  : has("local") ? LOCAL
  : arg("site") ? [...LOCAL, ...REMOTE].filter((t) => arg("site").split(",").includes(t.id))
  : arg("url") ? [{ id: arg("id") || "custom", url: arg("url") }]
  : LOCAL;

mkdirSync(OUTDIR, { recursive: true });
const browser = await chromium.launch();
const results = [];
for (const t of targets) {
  process.stdout.write(`… ${t.id}`);
  let r;
  try { r = await measure(t, browser); } catch (e) { r = { id: t.id, url: t.url, errors: ["fatal: " + String(e).split("\n")[0]] }; }
  results.push(r);
  const i = r.impulse || {}, s = r.steady || {};
  console.log(` τ시각 ${i.visualTau ?? "?"}ms · α ${i.alpha ?? "?"} · 정착 ${i.visualSettleFrames ?? "?"}f · 따라오기 ${r.jump?.catchUpFrames ?? "?"}f · 속도결합 ${r.velocityCoupled?.count ?? "?"} · 지터 ${s.jitter ?? "?"} · 멈춘프레임 ${s.zeroFrames ?? "?"} ${r.errors?.length ? "· ERR " + r.errors.length : ""}`);
}
await browser.close();
const path = join(OUTDIR, "scroll-feel.json");
const prev = existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : [];
const merged = [...prev.filter((p) => !results.some((r) => r.id === p.id)), ...results];
writeFileSync(path, JSON.stringify(merged, null, 2));
console.log(`SCROLL_FEEL_DONE n=${results.length} → ${path}`);
