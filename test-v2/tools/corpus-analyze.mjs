/**
 * 코퍼스 2차 분석 — 라이브러리 지문과 INDEX.md.
 *
 * 1차 캡처(site-teardown.mjs)의 전역 탐지는 번들러가 전역을 노출하지 않아 전부 빈다.
 * 여기서는 (a) 캡처된 dom.html·all.css 의 **DOM/CSS 지문**과 (b) 번들 본문 문자열 지문으로 다시 판별한다.
 * 번들은 사이트당 상위 N개만, 크기 상한을 두고 받는다. 받은 본문은 저장하지 않는다(지문만 남긴다).
 *
 *   node corpus-analyze.mjs           # 전체
 *   node corpus-analyze.mjs --site lusion,framer --max 12
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(HERE, "..", "content-runs", "aphrodite", "reference-corpus");
const arg = (n) => { const i = process.argv.indexOf(`--${n}`); return i === -1 ? undefined : process.argv[i + 1]; };

/* DOM·CSS 지문 — 네트워크 없이 즉시 판정 가능한 것 */
const DOM_SIGS = [
  [/\bclass="[^"]*\blenis\b|data-lenis|\.lenis-smooth/i, "lenis"],
  [/data-scroll-container|has-scroll-smooth|data-scroll-speed/i, "locomotive-scroll"],
  [/pin-spacer|gsap-marker|_gsap/i, "gsap+ScrollTrigger"],
  [/data-framer-|framer-motion/i, "framer-motion"],
  [/swiper-slide|swiper-wrapper/i, "swiper"],
  [/embla__|data-embla/i, "embla"],
  [/data-barba|data-swup/i, "page-transition"],
  [/lottie|bodymovin/i, "lottie"],
  [/\brive\b|rive-canvas/i, "rive"],
  [/data-splitting|split-type|\bword\b.*\bchar\b/i, "split-text"],
  [/__NEXT_DATA__|_next\/static/i, "next"],
  [/__NUXT__/i, "nuxt"],
  [/data-svelte/i, "svelte"],
  [/w-webflow|webflow\.js/i, "webflow"],
];

/* 번들 본문 지문 — 고유 문자열만 (일반 단어로 오탐 나지 않게) */
const BUNDLE_SIGS = [
  [/gsap\.registerPlugin|ScrollTrigger\.create|"ScrollTrigger"|_gsap:/, "gsap+ScrollTrigger"],
  [/gsap\.to\(|gsap\.timeline\(|\bgsap\b\s*=/, "gsap"],
  [/ScrollSmoother/, "gsap ScrollSmoother(유료 Club)"],
  [/new Lenis\(|lenis\.raf|class Lenis/, "lenis"],
  [/LocomotiveScroll|locomotive-scroll/, "locomotive-scroll"],
  [/THREE\.WebGLRenderer|new WebGLRenderer|REVISION="?1\d\d/, "three"],
  [/new Renderer\(\{.*gl|ogl\/core|from"ogl"/, "ogl"],
  [/PIXI\.Application|new Application\(\{.*resizeTo/, "pixi"],
  [/framer-motion|useMotionValue|motionValue/, "framer-motion"],
  [/SplitText|SplitType|new Splitting/, "split-text"],
  [/lottie\.loadAnimation|bodymovin/, "lottie"],
  [/@rive-app|RiveCanvas/, "rive"],
  [/new Swiper\(/, "swiper"],
  [/EmblaCarousel/, "embla"],
  [/Matter\.Engine/, "matter"],
  [/scrollama\(/, "scrollama"],
  [/Tempus|tempus\.add/, "tempus"],
  [/barba\.init|new Swup/, "page-transition"],
];

const MAX_SCRIPTS = +(arg("max") || 10);
const MAX_BYTES = 2_500_000;

async function grepBundles(scripts) {
  const cands = scripts
    .filter((s) => s.status === 200 && !/analytics|gtag|gtm|segment|hotjar|intercom|sentry|clarity|facebook|linkedin|tiktok/i.test(s.url))
    .sort((a, b) => (b.bytes || 0) - (a.bytes || 0))
    .slice(0, MAX_SCRIPTS);
  const found = new Map();
  for (const s of cands) {
    let text = "";
    try {
      const res = await fetch(s.url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
      if (!res.ok) continue;
      const len = +(res.headers.get("content-length") || 0);
      if (len > MAX_BYTES) continue;
      text = await res.text();
      if (text.length > MAX_BYTES) text = text.slice(0, MAX_BYTES);
    } catch { continue; }
    for (const [re, name] of BUNDLE_SIGS) {
      if (re.test(text)) {
        const prev = found.get(name) || { hits: 0, where: [] };
        prev.hits++; if (prev.where.length < 2) prev.where.push(s.url.split("/").pop().slice(0, 48));
        found.set(name, prev);
      }
    }
    const ver = text.match(/version:"(3\.\d+\.\d+)"/);
    if (ver && found.has("gsap")) found.get("gsap").version = ver[1];
  }
  return Object.fromEntries(found);
}

const ids = (arg("site") ? arg("site").split(",") : readdirSync(CORPUS).filter((f) => statSync(join(CORPUS, f)).isDirectory()));
const rows = [];

for (const id of ids) {
  const dir = join(CORPUS, id);
  if (!existsSync(join(dir, "meta.json"))) continue;
  const meta = JSON.parse(readFileSync(join(dir, "meta.json"), "utf8"));
  const scripts = existsSync(join(dir, "scripts.json")) ? JSON.parse(readFileSync(join(dir, "scripts.json"), "utf8")) : { external: [], inline: [] };
  const runtime = existsSync(join(dir, "runtime.json")) ? JSON.parse(readFileSync(join(dir, "runtime.json"), "utf8")) : {};
  const assets = existsSync(join(dir, "assets.json")) ? JSON.parse(readFileSync(join(dir, "assets.json"), "utf8")) : { network: [], images: [], fonts: [] };
  const dom = existsSync(join(dir, "dom.html")) ? readFileSync(join(dir, "dom.html"), "utf8") : "";
  const css = existsSync(join(dir, "styles", "all.css")) ? readFileSync(join(dir, "styles", "all.css"), "utf8") : "";

  const domHits = [];
  for (const [re, name] of DOM_SIGS) if (re.test(dom) || re.test(css)) domHits.push(name);
  process.stdout.write(`… ${id}`);
  const bundle = await grepBundles(scripts.external || []);
  const libs = [...new Set([...domHits, ...Object.keys(bundle)])];

  const byType = {};
  for (const a of assets.network || []) { const k = a.type; byType[k] = byType[k] || { n: 0, bytes: 0 }; byType[k].n++; byType[k].bytes += a.bytes || 0; }
  const vids = (runtime.videos || []);
  const row = {
    id, url: meta.url, why: meta.why, scrollMode: meta.scrollMode, docVh: meta.docHeightPx ? +(meta.docHeightPx / 900).toFixed(1) : null,
    libs, bundle, domHits,
    cssBytes: meta.cssBytes || 0, scriptBytes: meta.scriptBytes || 0, scriptCount: (scripts.external || []).length,
    assets: byType, images: (assets.images || []).length, fonts: [...new Set((assets.fonts || []).map((f) => f.family))].slice(0, 6),
    keyframes: runtime.keyframeCount ?? null, anims: runtime.animationCount ?? null, running: runtime.runningAnimations ?? null,
    infinite: runtime.infiniteAnimations ?? null, canvases: runtime.canvasCount ?? null, canvasDraws: runtime.canvasDraws ?? null,
    raf: runtime.rafCallbacks ?? null, io: runtime.intersectionObservers ?? null,
    scrollListeners: runtime.scrollListeners || {},
    videos: vids.length, videosPlaying: vids.filter((v) => !v.paused && v.readyState >= 2).length,
    topTransitions: (runtime.transitions || []).slice(0, 3),
    errors: (meta.errors || []).length,
  };
  rows.push(row);
  console.log(` → ${libs.join(", ") || "(없음)"}`);
  writeFileSync(join(dir, "analysis.json"), JSON.stringify(row, null, 2));
}

const kb = (b) => (b / 1024).toFixed(0) + "KB";
const sum = (o) => Object.values(o).reduce((s, x) => s + x.bytes, 0);
let md = `# 레퍼런스 코퍼스 INDEX

> 캡처: \`site-teardown.mjs\` · 2차 분석: \`corpus-analyze.mjs\` (DOM/CSS 지문 + 번들 본문 지문).
> 학습 전용 — 남의 코드·에셋은 산출물에 싣지 않는다(\`docs/design-excellence/replica-lab.md\` §1).
> 생성: ${new Date().toISOString().slice(0, 16).replace("T", " ")}

## 표

| id | 스크롤 | 길이 vh | 라이브러리 | CSS | JS | 이미지 | 영상(재생) | 키프레임 | 무한애니 | 캔버스(드로) | rAF | IO |
|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
`;
for (const r of rows.sort((a, b) => a.id.localeCompare(b.id))) {
  md += `| **${r.id}** | ${r.scrollMode} | ${r.docVh ?? "?"} | ${r.libs.join(" · ") || "—"} | ${kb(r.cssBytes)} | ${kb(r.scriptBytes)} (${r.scriptCount}) | ${r.images} · ${kb(r.assets.image?.bytes || 0)} | ${r.videos}(${r.videosPlaying}) · ${kb(r.assets.media?.bytes || 0)} | ${r.keyframes ?? "?"} | ${r.infinite ?? "?"} | ${r.canvases ?? "?"}(${r.canvasDraws ?? "?"}) | ${r.raf ?? "?"} | ${r.io ?? "?"} |\n`;
}

md += `
## 열 읽는 법
- **스크롤**: \`native\` = 브라우저 기본, \`transform-container\` = 컨테이너를 transform 으로 밀어 스무스 스크롤, \`custom-wheel\` = 휠을 가로채 자체 구현.
- **무한애니**: 무입력 상태에서 \`iterations: Infinity\` 로 도는 WAAPI/CSS 애니메이션 수. "누르지 않아도 살아 있는가"의 1차 지표.
- **캔버스(드로)**: 캔버스 개수와 캡처 구간의 draw 호출 수. 드로가 크면 WebGL/2D 로 매 프레임 그리는 화면이다.
- **rAF**: 등록된 rAF 콜백 수. 상시 루프의 존재 신호.

## 원자료
사이트마다 \`<id>/\` 에 \`source.html\`(원본 응답) · \`dom.html\`(렌더 후) · \`styles/all.css\` · \`scripts.json\` · \`assets.json\` · \`runtime.json\` · \`analysis.json\` · \`fold.jpg\` · \`mid.jpg\`.
`;
writeFileSync(join(CORPUS, "INDEX.md"), md);
console.log(`CORPUS_ANALYZE_DONE sites=${rows.length}`);
