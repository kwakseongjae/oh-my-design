/**
 * 레퍼런스 사이트 해부 캡처 (replica-lab 입력).
 *
 * 한 사이트마다 원본 HTML · 렌더된 DOM · 읽을 수 있는 CSS 전부 · 스크립트 목록과 라이브러리 판별 ·
 * 실제 요청된 에셋 · 무입력 런타임 지문(키프레임·WAAPI·rAF·캔버스·스크롤 방식)을 남긴다.
 *
 * 캡처는 **학습용**이다. 여기 저장된 남의 CSS/JS/에셋은 우리 산출물에 실리지 않는다
 * (docs/design-excellence/replica-lab.md §1).
 *
 *   node site-teardown.mjs --site affinity
 *   node site-teardown.mjs --all
 *   node site-teardown.mjs --url https://example.com --id example
 */
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, "..", "content-runs", "aphrodite", "reference-corpus");
const VIEWPORT = { width: 1440, height: 900 };
const SETTLE = 3000;

const SITES = [
  { id: "tasteskill",  url: "https://www.tasteskill.dev/",     why: "사용자 지정 레퍼런스 — 타이포·구도" },
  { id: "open-design", url: "https://open-design.ai/ko/",      why: "사용자 지정 레퍼런스 — 밀도형" },
  { id: "affinity",    url: "https://www.affinity.studio/",    why: "사용자 지정 레퍼런스 — 이미지 주도 원페이저" },
  { id: "higgsfield",  url: "https://higgsfield.ai/",          why: "AI 이미지·영상 제품, 유휴 스펙터클(CSS 키프레임 17개 실측)" },
  { id: "lusion",      url: "https://lusion.co/",              why: "스크롤 질감의 기준점 — 커스텀 스크롤러" },
  { id: "igloo",       url: "https://igloo.inc/",              why: "WebGL 스크롤 월드" },
  { id: "cosmos",      url: "https://www.cosmos.so/",          why: "이미지 격자가 살아 있는 화면" },
  { id: "luma",        url: "https://lumalabs.ai/",            why: "폴드 커버리지 96% 실측 — 이미지 지배" },
  { id: "midjourney",  url: "https://www.midjourney.com/",     why: "생성 이미지 제품, 간결한 폴드" },
  { id: "runway",      url: "https://runwayml.com/",           why: "AI 영상 제품 랜딩" },
  { id: "framer",      url: "https://www.framer.com/",         why: "모션 툴 자신의 랜딩" },
  { id: "linear",      url: "https://linear.app/",             why: "정보형 대조군 — 지배도 11.0" },
  { id: "basement",    url: "https://basement.studio/",        why: "에이전시 — 스크롤 연출" },
  { id: "locomotive",  url: "https://www.locomotive.ca/en",    why: "locomotive-scroll 원작자" },
  { id: "activetheory",url: "https://activetheory.net/",       why: "에이전시 — 인터랙티브 연출" },
  { id: "apple-iphone",url: "https://www.apple.com/kr/iphone/",why: "핀 스크롤 스토리텔링의 표준" },
];

const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };
const has = (n) => process.argv.includes(`--${n}`);

const DISMISS = [
  'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("동의")',
  'button:has-text("모두 동의")', 'button:has-text("Got it")', 'button:has-text("OK")',
  '[id*="cookie"] button', '[class*="cookie"] button', 'button[aria-label*="close" i]',
];

/* ── 페이지 컨텍스트 훅: rAF · 이벤트 리스너 · IntersectionObserver · 캔버스 드로 카운트 ── */
const INIT = () => {
  const S = (window.__omd = { raf: new Set(), rafCalls: 0, listeners: {}, io: 0, draws: 0 });
  const rf = window.requestAnimationFrame;
  window.requestAnimationFrame = function (cb) { S.rafCalls++; S.raf.add(cb); return rf.call(window, cb); };
  const ael = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, ...rest) {
    if (/^(scroll|wheel|touchmove|pointermove|mousemove)$/.test(String(type))) {
      S.listeners[type] = (S.listeners[type] || 0) + 1;
    }
    return ael.call(this, type, ...rest);
  };
  const IO = window.IntersectionObserver;
  if (IO) {
    window.IntersectionObserver = function (...a) { S.io++; return new IO(...a); };
    window.IntersectionObserver.prototype = IO.prototype;
  }
  for (const [proto, m] of [
    [window.WebGLRenderingContext, "drawArrays"], [window.WebGLRenderingContext, "drawElements"],
    [window.WebGL2RenderingContext, "drawArrays"], [window.WebGL2RenderingContext, "drawElements"],
    [window.CanvasRenderingContext2D, "drawImage"], [window.CanvasRenderingContext2D, "fillRect"],
  ]) {
    if (!proto || !proto.prototype || !proto.prototype[m]) continue;
    const orig = proto.prototype[m];
    proto.prototype[m] = function (...a) { S.draws++; return orig.apply(this, a); };
  }
};

/* ── 라이브러리 판별: 전역 + 스크립트 URL ── */
const GLOBALS = () => {
  const w = window, hit = [];
  const probe = {
    gsap: () => !!w.gsap, ScrollTrigger: () => !!(w.ScrollTrigger || (w.gsap && w.gsap.plugins && w.gsap.plugins.ScrollTrigger)),
    ScrollSmoother: () => !!w.ScrollSmoother, Lenis: () => !!(w.Lenis || w.lenis),
    LocomotiveScroll: () => !!w.LocomotiveScroll, three: () => !!w.THREE, ogl: () => !!w.ogl,
    pixi: () => !!w.PIXI, curtains: () => !!w.Curtains, motion: () => !!(w.Motion || w.motion),
    barba: () => !!w.barba, swup: () => !!w.Swup, Splitting: () => !!w.Splitting, SplitType: () => !!w.SplitType,
    lottie: () => !!(w.lottie || w.bodymovin), rive: () => !!w.rive, matter: () => !!w.Matter, p5: () => !!w.p5,
    Swiper: () => !!w.Swiper, EmblaCarousel: () => !!w.EmblaCarousel, scrollama: () => !!w.scrollama,
    tempus: () => !!w.Tempus, React: () => !!(w.React || document.querySelector("#__next,[data-reactroot]")),
    Next: () => !!w.__NEXT_DATA__, Nuxt: () => !!(w.__NUXT__ || w.$nuxt), Svelte: () => !!w.__svelte,
    Vue: () => !!w.__VUE__, Webflow: () => !!w.Webflow, jQuery: () => !!w.jQuery,
  };
  for (const [k, f] of Object.entries(probe)) { try { if (f()) hit.push(k); } catch { /* 접근 불가 */ } }
  const ver = {};
  try { if (w.gsap && w.gsap.version) ver.gsap = w.gsap.version; } catch { /* */ }
  try { if (w.THREE && w.THREE.REVISION) ver.three = w.THREE.REVISION; } catch { /* */ }
  return { globals: hit, versions: ver };
};

const RUNTIME = () => {
  const d = document, w = window;
  const kf = [];
  for (const sh of d.styleSheets) {
    let rules; try { rules = sh.cssRules; } catch { continue; }
    for (const r of rules || []) if (r.type === 7 /* KEYFRAMES */) kf.push({ name: r.name, steps: r.cssRules.length });
  }
  const anims = d.getAnimations().map((a) => {
    const t = a.effect && a.effect.getTiming ? a.effect.getTiming() : {};
    const el = a.effect && a.effect.target;
    return {
      name: a.animationName || a.transitionProperty || a.id || "?",
      state: a.playState, dur: t.duration, iter: t.iterations === Infinity ? "inf" : t.iterations,
      ease: t.easing, delay: t.delay,
      target: el ? el.tagName.toLowerCase() + (typeof el.className === "string" && el.className.trim() ? "." + el.className.trim().split(/\s+/)[0] : "") : null,
    };
  });
  const trans = {};
  for (const el of [...d.querySelectorAll("body *")].slice(0, 4000)) {
    const cs = getComputedStyle(el);
    if (cs.transitionDuration && cs.transitionDuration !== "0s") {
      const k = `${cs.transitionDuration} ${cs.transitionTimingFunction}`;
      trans[k] = (trans[k] || 0) + 1;
    }
  }
  const canvases = [...d.querySelectorAll("canvas")].map((c) => ({ w: c.width, h: c.height, cssW: Math.round(c.getBoundingClientRect().width), cssH: Math.round(c.getBoundingClientRect().height) }));
  const html = getComputedStyle(d.documentElement), body = getComputedStyle(d.body);
  let scrollMode = "native";
  const hiddenOverflow = html.overflow === "hidden" || body.overflow === "hidden" || body.position === "fixed";
  const transformed = [...d.querySelectorAll("body > *, body > * > *")].slice(0, 12)
    .filter((e) => { const t = getComputedStyle(e).transform; return t && t !== "none" && /matrix/.test(t); }).length;
  if (hiddenOverflow && transformed) scrollMode = "transform-container";
  else if (hiddenOverflow) scrollMode = "custom-wheel";
  const S = w.__omd || {};
  return {
    keyframes: kf, keyframeCount: kf.length,
    animations: anims, animationCount: anims.length,
    runningAnimations: anims.filter((a) => a.state === "running").length,
    infiniteAnimations: anims.filter((a) => a.iter === "inf").length,
    transitions: Object.entries(trans).sort((a, b) => b[1] - a[1]).slice(0, 12),
    canvases, canvasCount: canvases.length,
    rafCallbacks: S.raf ? S.raf.size : null, rafCalls: S.rafCalls ?? null,
    scrollListeners: S.listeners || {}, intersectionObservers: S.io ?? null, canvasDraws: S.draws ?? null,
    scrollMode, docHeightPx: d.documentElement.scrollHeight,
    videos: [...d.querySelectorAll("video")].map((v) => ({
      src: (v.currentSrc || v.src || "").slice(0, 200), loop: v.loop, muted: v.muted, autoplay: v.autoplay,
      paused: v.paused, readyState: v.readyState, dur: v.duration, w: v.videoWidth, h: v.videoHeight,
    })),
  };
};

const LIB_FROM_URL = (u) => {
  const m = [
    [/gsap|scrolltrigger|scrollsmoother/i, "gsap"], [/lenis/i, "lenis"], [/locomotive/i, "locomotive-scroll"],
    [/three(\.min)?\.js|three\.module/i, "three"], [/ogl/i, "ogl"], [/pixi/i, "pixi"], [/curtains/i, "curtains"],
    [/framer-motion|\bmotion\b/i, "motion"], [/lottie|bodymovin/i, "lottie"], [/rive/i, "rive"],
    [/swiper/i, "swiper"], [/embla/i, "embla"], [/splitting|split-type/i, "split-text"],
    [/barba|swup/i, "page-transition"], [/matter/i, "matter"], [/scrollama/i, "scrollama"],
    [/_next\/static/i, "next"], [/nuxt/i, "nuxt"], [/webflow/i, "webflow"], [/jquery/i, "jquery"],
  ];
  for (const [re, name] of m) if (re.test(u)) return name;
  return null;
};

async function capture(site, browser) {
  const dir = join(OUT, site.id);
  mkdirSync(join(dir, "styles"), { recursive: true });
  const meta = { id: site.id, url: site.url, why: site.why, capturedAt: new Date().toISOString(), viewport: VIEWPORT, errors: [] };
  const scripts = [], assets = [];
  const ctx = await browser.newContext({ viewport: VIEWPORT, userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36", locale: "en-US" });
  const page = await ctx.newPage();
  await page.addInitScript(INIT);
  page.on("pageerror", (e) => meta.errors.push("pageerror: " + String(e).slice(0, 160)));

  page.on("response", async (res) => {
    try {
      const req = res.request(), type = req.resourceType(), url = req.url();
      if (url.startsWith("data:")) return;
      const len = +(res.headers()["content-length"] || 0);
      if (type === "script") scripts.push({ url, bytes: len, status: res.status(), library: LIB_FROM_URL(url) });
      else if (["image", "media", "font"].includes(type)) {
        assets.push({ url: url.slice(0, 300), type, bytes: len, mime: res.headers()["content-type"] || null, status: res.status() });
      }
    } catch { /* 응답 소멸 */ }
  });

  let resp = null;
  try {
    resp = await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    meta.httpStatus = resp ? resp.status() : null;
    try { writeFileSync(join(dir, "source.html"), await resp.text()); } catch (e) { meta.errors.push("source.html: " + String(e).slice(0, 80)); }
  } catch (e) {
    meta.errors.push("goto: " + String(e).split("\n")[0]);
    writeFileSync(join(dir, "meta.json"), JSON.stringify(meta, null, 2));
    await ctx.close();
    return meta;
  }
  try { await page.waitForLoadState("networkidle", { timeout: 12000 }); } catch { /* 계속 로드하는 사이트 */ }
  for (const sel of DISMISS) { try { const el = await page.$(sel); if (el && await el.isVisible()) { await el.click({ timeout: 900 }); break; } } catch { /* 없음 */ } }
  await page.waitForTimeout(SETTLE);

  /* CSS */
  const css = await page.evaluate(() => {
    const out = [], failed = [];
    for (const sh of document.styleSheets) {
      const href = sh.href || "(inline)";
      let rules; try { rules = sh.cssRules; } catch (e) { failed.push({ href, why: "CORS" }); continue; }
      let text = ""; for (const r of rules || []) text += r.cssText + "\n";
      out.push({ href, bytes: text.length, text });
    }
    return { out, failed };
  });
  let all = "";
  for (const s of css.out) all += `/* === ${s.href} (${s.bytes}B) === */\n${s.text}\n`;
  writeFileSync(join(dir, "styles", "all.css"), all);
  meta.cssSheets = css.out.length; meta.cssBytes = all.length; meta.cssUnreadable = css.failed;

  writeFileSync(join(dir, "dom.html"), await page.content());

  const libs = await page.evaluate(GLOBALS);
  const inline = await page.evaluate(() => [...document.querySelectorAll("script:not([src])")].map((s) => ({ bytes: s.textContent.length, head: s.textContent.slice(0, 200).replace(/\s+/g, " ") })).filter((s) => s.bytes > 40));
  writeFileSync(join(dir, "scripts.json"), JSON.stringify({ globals: libs.globals, versions: libs.versions, external: scripts, inline }, null, 2));

  const imgInfo = await page.evaluate(() => [...document.images].slice(0, 200).map((i) => ({ src: (i.currentSrc || i.src || "").slice(0, 300), natural: [i.naturalWidth, i.naturalHeight], shown: [Math.round(i.getBoundingClientRect().width), Math.round(i.getBoundingClientRect().height)] })));
  const fonts = await page.evaluate(() => { const f = []; try { document.fonts.forEach((x) => f.push({ family: x.family, weight: x.weight, style: x.style, status: x.status })); } catch { /* */ } return f; });
  writeFileSync(join(dir, "assets.json"), JSON.stringify({ network: assets, images: imgInfo, fonts }, null, 2));

  const runtime = await page.evaluate(RUNTIME);
  writeFileSync(join(dir, "runtime.json"), JSON.stringify(runtime, null, 2));
  meta.scrollMode = runtime.scrollMode; meta.docHeightPx = runtime.docHeightPx;

  await page.screenshot({ path: join(dir, "fold.jpg"), type: "jpeg", quality: 68 });
  try {
    if (runtime.scrollMode === "native") await page.evaluate(() => scrollTo(0, Math.round(document.documentElement.scrollHeight * 0.35)));
    else await page.mouse.wheel(0, Math.round(VIEWPORT.height * 3));
    await page.waitForTimeout(1600);
    await page.screenshot({ path: join(dir, "mid.jpg"), type: "jpeg", quality: 68 });
  } catch (e) { meta.errors.push("mid shot: " + String(e).split("\n")[0]); }

  const byType = {};
  for (const a of assets) { const k = a.type; byType[k] = byType[k] || { n: 0, bytes: 0 }; byType[k].n++; byType[k].bytes += a.bytes || 0; }
  meta.assetsByType = byType;
  meta.libraries = libs.globals;
  meta.scriptBytes = scripts.reduce((s, x) => s + (x.bytes || 0), 0);
  writeFileSync(join(dir, "meta.json"), JSON.stringify(meta, null, 2));
  await ctx.close();
  return meta;
}

const targets = has("all") ? SITES
  : arg("url") ? [{ id: arg("id") || "custom", url: arg("url"), why: "ad hoc" }]
  : arg("site") ? SITES.filter((s) => arg("site").split(",").includes(s.id))
  : SITES;

mkdirSync(OUT, { recursive: true });
if (!existsSync(join(OUT, "README.md"))) {
  writeFileSync(join(OUT, "README.md"),
`# 레퍼런스 코퍼스 (학습 전용)

여기 저장된 남의 HTML·CSS·JS·에셋은 **기법과 수치를 배우기 위한 참고 자료**다.
우리 산출물에는 우리가 쓴 코드와 우리 에셋만 들어간다 — \`docs/design-excellence/replica-lab.md\` §1.
공개 배포하지 않는다. 캡처 도구: \`test-v2/tools/site-teardown.mjs\`.
`);
}

const browser = await chromium.launch();
const rows = [];
for (const s of targets) {
  const t0 = Date.now();
  process.stdout.write(`… ${s.id}`);
  let m;
  try { m = await capture(s, browser); }
  catch (e) { m = { id: s.id, url: s.url, errors: ["fatal: " + String(e).split("\n")[0]] }; }
  rows.push(m);
  console.log(` ${m.errors && m.errors.length ? "ERR " + m.errors.length : "ok"} · ${((Date.now() - t0) / 1000).toFixed(0)}s · css ${m.cssBytes || 0}B · libs ${(m.libraries || []).join(",") || "-"} · ${m.scrollMode || "?"}`);
}
await browser.close();
writeFileSync(join(OUT, "capture-log.json"), JSON.stringify(rows, null, 2));
console.log(`TEARDOWN_DONE sites=${rows.length} ok=${rows.filter((r) => !r.errors || !r.errors.length).length}`);
