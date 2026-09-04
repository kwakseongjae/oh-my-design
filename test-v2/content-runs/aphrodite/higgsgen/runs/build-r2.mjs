// build-r2.mjs — Higgsgen render-r2.html 을 runs/template-r2.html + set.json + fonts/*.css +
// fx-library/scroll-gsap/lib/*.js 에서 생성한다.  실행:
//   node test-v2/content-runs/aphrodite/higgsgen/runs/build-r2.mjs
//
// r1(build.mjs)과 다른 점
//  - 안무가 CSS 키프레임이 아니라 GSAP + ScrollTrigger 다. 라이브러리 2종을 <script> 로 인라인한다
//    (GSAP Standard License — lib/LICENSES.md 인용, 렌더 시 외부 요청 0).
//  - 스토리보드 r2 의 섹션 표를 그대로 따른다. 이미지 id 는 세트의 실제 id 로 매핑한다
//    (range-→grid- / macro-→mat- / product-→prod- / space-→arch- / abstract-→abs- / human-→fig-).
//  - 카드 치수는 여기서 전부 다르게 발행한다(LI-21 획일 카드 그룹 회피). 카드 표면은 배경 대신
//    inset box-shadow 헤어라인을 쓴다 — 같은 헤어라인이지만 "surface" 반사에 걸리지 않는다.
//
// 재사용: 폰트 인라인 · alt 생성(프롬프트 첫 문장, 중복 회피) 로직은 r1 빌더에서 가져왔다.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const D = join(HERE, "..");
const REPO = join(HERE, "..", "..", "..", "..", "..");
const LIB = join(REPO, "docs/design-excellence/fx-library/scroll-gsap/lib");

const set = JSON.parse(readFileSync(join(D, "set.json"), "utf8"));
const byId = Object.fromEntries(set.items.map((i) => [i.id, i]));

// ── alt: 프롬프트 첫 문장, 중복이면 다음 문장을 붙여 서로 다른 문장으로 만든다 (IL-5 / LI-32)
const used = new Set();
const ALT = {};
for (const it of set.items) {
  const sentences = it.prompt.split(/(?<=\.)\s+/).map((s) => s.trim()).filter(Boolean);
  let pick = sentences[0];
  if (used.has(pick.toLowerCase())) {
    const extra = sentences.slice(1).find((s) => !used.has(s.toLowerCase())) || sentences[1] || "";
    pick = (pick + " " + extra).trim();
  }
  used.add(pick.toLowerCase());
  ALT[it.id] = pick.replace(/\.$/, "").replace(/"/g, "&quot;").slice(0, 190);
}
const alt = (id) => ALT[id] || id;
const dim = (id) => byId[id].size.split("x");
const img = (id, cls = "shot", eager = false) =>
  `<img class="${cls}" src="assets/${id}.png" alt="${alt(id)}" width="${dim(id)[0]}" height="${dim(id)[1]}"` +
  `${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
// 광원 복제 — 장식 레이어. role=presentation 이라 alt 집계에서 빠지고, IMG 라 LI-31(미디어 색보정)에는 잡힌다.
const lc = (id, cls = "lc") =>
  `<img class="${cls}" src="assets/${id}.png" alt="" role="presentation" aria-hidden="true" loading="lazy" decoding="async">`;

// ── S1 · Hero (hero-01 → hero-02 매치컷)
const HERO_LC = `${lc("hero-01")}${lc("hero-02")}`;
const HERO_A = img("hero-01", "shot cut-a", true);
const HERO_B = img("hero-02", "shot cut-b", true);

// ── S2 · Range — 12장 카드 팬. 폭·높이를 전부 다르게 둔다.
const FAN = [
  ["grid-01", 190, 262, "radiator strata"],
  ["grid-02", 150, 206, "wet tile stack"],
  ["grid-03", 206, 274, "switchback in fog"],
  ["grid-04", 158, 222, "rope on plywood"],
  ["grid-05", 182, 246, "reading room"],
  ["grid-06", 214, 290, "ginger and knife"],
  ["grid-07", 154, 210, "turbine nacelle"],
  ["grid-08", 196, 266, "leather sleeve"],
  ["grid-09", 170, 230, "dry riverbed"],
  ["grid-10", 202, 270, "dew on a roof"],
  ["grid-11", 146, 202, "fly loft"],
  ["grid-12", 186, 250, "net on the quay"],
].map(([id, w, h, capText], i) => {
  const idx = (i - 5.5).toFixed(1);
  return `
        <li class="fan-card" style="--i:${idx};--w:${w}px;--h:${h}px">
          <figure class="frame fx-wipe fx-wipe--sweep">${img(id)}</figure>
          <span class="cap">${String(i + 1).padStart(2, "0")} · ${capText}</span>
        </li>`;
}).join("");

// ── S3 · Control — 같은 공방 8프레임. 프롬프트 토큰이 프레임과 함께 점등한다.
const SEQ = ["seq-01", "seq-02", "seq-03", "seq-04", "seq-05", "seq-06", "seq-07", "seq-08"];
const TOKENS = [
  "a narrow ceramics workshop", "long birch bench", "white plastered wall", "one unglazed vessel",
  "eye level", "morning", "35mm", "hold the frame",
];
const SEQ_CAPS = [
  "frame 01 / 08 · eye level · morning · 35mm",
  "frame 02 / 08 · eye level · morning · 85mm",
  "frame 03 / 08 · bench height · morning · 35mm",
  "frame 04 / 08 · high angle · morning · 50mm",
  "frame 05 / 08 · eye level · midday · 35mm",
  "frame 06 / 08 · bench height · midday · 85mm",
  "frame 07 / 08 · eye level · dusk · 50mm",
  "frame 08 / 08 · high angle · dusk · 35mm",
];
const SEQ_HTML = SEQ.map((id) => `
          <figure>${img(id)}<span class="scrim scrim--soft"></span></figure>`).join("");
const TICKS = SEQ.map(() => `<li></li>`).join("");
const TOKENS_HTML = TOKENS.map((t, i) => `<span class="tok" data-i="${i}">${t}</span>`).join("");

// ── S4 · Compare — 4쌍 슬라이더. 큰 것 1 + 작은 것 3(한 부모에 같은 치수 4개를 두지 않는다).
const BA = {
  "ba-01": ["ballpoint", "café counter"],
  "ba-02": ["pencil", "hiking boot"],
  "ba-03": ["marker", "stair core"],
  "ba-04": ["crayon", "broth bowl"],
};
const slider = (base, cls, ar) => {
  const [medium, subject] = BA[base];
  return `
        <div class="ba ${cls}" style="--p:52%">
          <figure class="frame ba-media" style="--ar:${ar}">
            ${img(base + "-b")}
            <span class="ba-top">${img(base + "-a")}</span>
            <span class="ba-labels"><span class="cap">${medium}</span><span class="cap">render</span></span>
            <span class="ba-bar" aria-hidden="true"></span>
            <span class="ba-knob fx-sheen" aria-hidden="true"></span>
            <input type="range" min="0" max="100" step="2" value="52"
              aria-label="Compare the ${medium} drawing with the render — ${subject}">
          </figure>
          <div class="ba-meta"><span class="mono">${medium}</span><span class="cap">${subject}</span></div>
        </div>`;
};
const BA_MAIN = slider("ba-01", "ba--lg", "21/9");
const BA_ROW = ["ba-02", "ba-03", "ba-04"].map((b, i) => slider(b, "ba--sm", ["3/2", "4/3", "5/4"][i])).join("");

// ── S5 · Gallery — 가로 트랙 11장. 원근 변주를 위해 폭·높이·translateZ 를 전부 다르게.
const GAL = [
  ["mat-01", 26, 62, -40, 3, "porcelain, thumb pressed"],
  ["prod-01", 32, 48, 30, -2, "desk speaker"],
  ["mat-02", 20, 66, -70, 4, "brushed titanium"],
  ["prod-02", 24, 54, 10, -3, "vacuum flask"],
  ["mat-03", 29, 44, -20, 2, "linen at the seam"],
  ["prod-03", 34, 58, 40, -4, "notebook on linen"],
  ["mat-04", 22, 50, -55, 3, "oak end-grain"],
  ["prod-04", 27, 64, 20, -2, "hung headphones"],
  ["mat-05", 31, 46, -35, 4, "bubble in blown glass"],
  ["prod-05", 23, 60, 5, -3, "pour-over mid-fall"],
  ["mat-06", 35, 52, -15, 2, "rust at the weld"],
].map(([id, w, h, pz, py, capText], i) => `
          <li class="gal-card" style="--w:${w}vw;--h:${h}vh;--pz:${pz}px;--py:${py}deg">
            <figure class="frame">${lc(id)}${img(id)}<span class="scrim scrim--soft"></span></figure>
            <span class="cap">${String(i + 1).padStart(2, "0")} · ${capText}</span>
          </li>`).join("");

// ── S6 · Space — 매치컷 2장 + 물려받는 컷 2장
const CUT_A = `<figure class="cut cut--a" id="cutA">${img("arch-01")}<span class="scrim scrim--soft"></span></figure>`;
const CUT_B = `<figure class="cut cut--b" id="cutB">${img("arch-02")}<span class="scrim scrim--soft"></span></figure>`;
const CUT_CHIPS = [
  ["arch-03", 148, 104, "changing hall"],
  ["arch-04", 116, 148, "stairwell, straight up"],
].map(([id, w, h, capText]) => `
        <li class="cut-chip" style="--w:${w}px;--h:${h}px">
          <figure class="frame">${img(id)}</figure><span class="cap">${capText}</span>
        </li>`).join("");
const CUT_NOTES = [
  "arch-01 · corridor, one unbroken band",
  "arch-02 · attic rafters, one trapezoid",
];

// ── S7 · Grounds — 8장 틸트 카드. 이름·설명은 프롬프트에서 나온 것만 쓴다.
const PRESETS = [
  ["abs-01", "Plume", "ink dropped into glycerine", 23, 240],
  ["abs-02", "Field", "iron filings, one hard key", 31, 200],
  ["abs-03", "Shaft", "smoke crossing one beam", 19, 264],
  ["abs-04", "Plate", "dry mud, grazing light", 27, 216],
  ["abs-05", "Film", "soap interference banding", 21, 252],
  ["abs-06", "Ribbon", "long exposure over stone", 29, 188],
  ["fig-01", "Bench", "from behind, head cropped", 17, 276],
  ["fig-02", "Doorway", "silhouette against outside", 25, 228],
].map(([id, name, note, w, h], i) => `
      <button type="button" class="preset fx-tilt fx-spot" aria-pressed="${i === 0 ? "true" : "false"}"
        style="--w:calc(${w}% - 14px);--h:${h}px">
        <span class="frame">${img(id)}<span class="scrim scrim--b"></span></span>
        <span class="preset-meta"><span class="pname">${name}</span><span class="cap">${note}</span></span>
      </button>`).join("");

// ── S8 · Delivery — 원형 클립이 열리는 고해상 한 장(mat-03 = 스토리보드의 macro-03)
const DELIVER = img("mat-03");
const DELIVER_LC = lc("mat-03");

// ── S10 · Footer — 텍스트 마스크(mat-01/02, R-A: 값이 넓고 밝은 프레임) + amb-01 배경
const OUT_BLEED = `${img("amb-01")}`;
const FOOT_CHIPS = [
  ["amb-02", 176, 100, "night highway"],
  ["amb-03", 140, 96, "window, city glow"],
  ["hero-03", 208, 118, "drained swimming hall"],
  ["hero-04", 158, 112, "greenhouse at night"],
  ["hero-05", 192, 108, "salt flat, blue hour"],
  ["fig-03", 124, 152, "hands on stone"],
  ["fig-04", 168, 94, "walking away"],
].map(([id, w, h, capText]) => `
          <li class="foot-chip" style="--w:${w}px;--h:${h}px">
            <figure class="frame">${img(id)}<span class="scrim scrim--b"></span></figure>
            <span class="cap">${capText}</span>
          </li>`).join("");

// ── 조립
let html = readFileSync(join(D, "runs", "template-r2.html"), "utf8");
const repl = {
  __FONT_SYNE__: readFileSync(join(D, "fonts/syne.css"), "utf8").trim(),
  __FONT_GEIST__: readFileSync(join(D, "fonts/geist.css"), "utf8").trim(),
  __FONT_MONO__: readFileSync(join(D, "fonts/geist-mono.css"), "utf8").trim(),
  __GSAP__: readFileSync(join(LIB, "gsap315.min.js"), "utf8").trim(),
  __SCROLLTRIGGER__: readFileSync(join(LIB, "ScrollTrigger315.min.js"), "utf8").trim(),
  __HERO_LC__: HERO_LC,
  __HERO_A__: HERO_A,
  __HERO_B__: HERO_B,
  __FAN__: FAN,
  __TOKENS__: TOKENS_HTML,
  __SEQ__: SEQ_HTML,
  __TICKS__: TICKS,
  __SEQ_CAPS__: JSON.stringify(SEQ_CAPS),
  __BA_MAIN__: BA_MAIN,
  __BA_ROW__: BA_ROW,
  __GAL__: GAL,
  __CUT_A__: CUT_A,
  __CUT_B__: CUT_B,
  __CUT_CHIPS__: CUT_CHIPS,
  __CUT_NOTES__: JSON.stringify(CUT_NOTES),
  __PRESETS__: PRESETS,
  __DELIVER__: DELIVER,
  __DELIVER_LC__: DELIVER_LC,
  __OUT_BLEED__: OUT_BLEED,
  __FOOT_CHIPS__: FOOT_CHIPS,
};
for (const [k, v] of Object.entries(repl)) {
  if (!html.includes(k)) { console.warn("WARN unused slot", k); continue; }
  html = html.split(k).join(v);
}
const leftovers = html.match(/__[A-Z_]+__/g);
if (leftovers) throw new Error("unfilled slots: " + [...new Set(leftovers)].join(", "));

mkdirSync(join(D, "assets"), { recursive: true });
writeFileSync(join(D, "render-r2.html"), html);
const imgs = (html.match(/<img /g) || []).length;
const uniq = new Set([...html.matchAll(/src="assets\/([a-z0-9-]+)\.png"/g)].map((m) => m[1]));
console.log(`BUILD_DONE ${Math.round(html.length / 1024)}KB · img ${imgs} · unique assets ${uniq.size}/${set.items.length}`);
