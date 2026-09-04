// build-r3.mjs — Higgsgen render-r3.html 을 runs/template-r3.html + set.json + fonts/*.css +
// fx-library/scroll-gsap/lib/*.js 에서 생성한다.  실행:
//   node test-v2/content-runs/aphrodite/higgsgen/runs/build-r3.mjs
//
// r2(build-r2.mjs)와 다른 점
//  - 정착 타이밍(LC-48): 스티키 트랙의 `end` 를 `"+=" + travel*k` 로 발행한다. 트랙 길이와 k 를
//    이 파일 상단 한 곳(TRACK/K)에서 관리한다 — 검사기(LI-33)와 예산(≤14.5vh)을 같이 만족시켜야 해서
//    스토리보드 명목치보다 짧다. 근거와 계산은 trace-r3.md.
//  - 유휴/호버 층: fx-library 의 ambient-fold · drift-collage · poster-cylinder · stack-fan-hover ·
//    hover-cross-open · flip-expand-card · entry-curtain-count · magnetic-cursor 를 이식했다.
//  - S5 카드 원근은 카드마다 다른 from/to 를 data 속성으로 발행한다(r2 결함 #3: 동일 트윈이 덮었다).
//  - S3 토큰은 프레임 표(FRAMES)를 캡션과 공유해 1:1 인과를 구조로 보장한다(r2 결함 #2).
//
// 재사용: 폰트 인라인 · alt 생성(프롬프트 첫 문장, 3단어 바닥, 고유화) 로직은 r2 빌더에서 가져왔다.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const D = join(HERE, "..");
const REPO = join(HERE, "..", "..", "..", "..", "..");
const LIB = join(REPO, "docs/design-excellence/fx-library/scroll-gsap/lib");

// ── 트랙 길이(vh×100)와 정착 계수 k ──────────────────────────────────────
//   pinLeadVh = (h-1)(1-k) ≥ 0.6 · settle% = (1+(h-1)k)/(h+1) ∈ 45~75 · 총합 ≤ 14.5vh
const TRACK = { s1: 210, s3: 235, s5: 265, s8: 220 };            // 핀 4개
const MINH = { s2: 62, s4: 85, s5b: 66, s6: 85, s7: 58, s9: 58 }; // 비핀 섹션 바닥 높이
const K = { s1: 0.38, s3: 0.50, s5: 0.55, s8: 0.42 };

const set = JSON.parse(readFileSync(join(D, "set.json"), "utf8"));
const byId = Object.fromEntries(set.items.map((i) => [i.id, i]));

// ── alt: 프롬프트 첫 문장, 중복이면 다음 문장. 3단어 미만 금지(LI-32/IL-5), 최종 문자열도 고유화.
const usedSent = new Set(), usedFinal = new Set();
const ALT = {};
for (const it of set.items) {
  const sentences = it.prompt.split(/(?<=\.)\s+/).map((s) => s.trim()).filter(Boolean);
  let pick = sentences[0];
  if (usedSent.has(pick.toLowerCase())) {
    const extra = sentences.slice(1).find((s) => !usedSent.has(s.toLowerCase()));
    if (extra) pick = extra;
  }
  usedSent.add(pick.toLowerCase());
  let fin = pick.replace(/\.$/, "").replace(/"/g, "&quot;").slice(0, 190);
  if (usedFinal.has(fin)) fin = (fin.slice(0, 170) + " — " + it.id).trim();
  if (fin.split(/\s+/).length < 3) fin = (sentences[0].replace(/\.$/, "").replace(/"/g, "&quot;").slice(0, 160) + " (" + it.id + ")");
  usedFinal.add(fin);
  ALT[it.id] = fin;
}
const alt = (id) => ALT[id] || id;
const dim = (id) => byId[id].size.split("x");
const img = (id, cls = "shot", eager = false) =>
  `<img class="${cls}" src="assets/${id}.png" alt="${alt(id)}" width="${dim(id)[0]}" height="${dim(id)[1]}"` +
  `${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
// 장식 레이어(광원 복제 · 콜라주 타일). role=presentation 이라 alt 집계에서 빠진다.
const deco = (id, cls) =>
  `<img class="${cls}" src="assets/${id}.png" alt="" role="presentation" aria-hidden="true" loading="lazy" decoding="async">`;
const lc = (id) => deco(id, "lc");

// ── S1 · Hero (hero-01 → hero-02 매치컷) + drift-collage 7타일 ────────────
const HERO_LC = `${lc("hero-01")}${lc("hero-02")}`;
const HERO_A = img("hero-01", "shot cut-a", true);
const HERO_B = img("hero-02", "shot cut-b", true);

// 타일 좌표는 히어로 카피(좌측 절반)를 피해 우측·하단에 흩는다. 레이어 2겹 = 무한 애니 3개.
const tile = ([id, x, y, w, h, rot]) =>
  `<figure class="fx-drift__tile" style="--x:${x};--y:${y};--w:${w};--h:${h};--rot:${rot}deg">${deco(id, "")}</figure>`;
const DRIFT_A = [
  ["grid-03", "58vw", "9vh", "17vw", "23vh", -2.4],
  ["grid-07", "79vw", "31vh", "14vw", "19vh", 1.8],
  ["grid-10", "62vw", "58vh", "15vw", "21vh", 3.1],
  ["grid-05", "40vw", "72vh", "13vw", "17vh", -1.6],
].map(tile).join("");
const DRIFT_B = [
  ["grid-12", "84vw", "62vh", "13vw", "18vh", 2.6],
  ["grid-01", "44vw", "18vh", "11vw", "15vh", -3.2],
  ["grid-09", "72vw", "83vh", "12vw", "15vh", 1.2],
].map(tile).join("");

// ── S2 · Range — 장르 스택 4개 × 3장 = grid-01…12. 호버에 팟(stack-fan-hover) ─
const STACKS = [
  ["Interiors", [["grid-05", 0], ["grid-11", -1], ["grid-02", 1]], 148, 202],
  ["Landscape", [["grid-03", 0], ["grid-09", -1], ["grid-10", 1]], 160, 214],
  ["Industry", [["grid-01", 0], ["grid-07", -1], ["grid-12", 1]], 140, 196],
  ["Objects", [["grid-04", 0], ["grid-06", -1], ["grid-08", 1]], 154, 208],
];
const FAN = STACKS.map(([name, cards, w, h]) => `
        <div class="fan-cell rv">
          <div class="fx-fan" style="--fx-fan-w:${w}px;--fx-fan-h:${h}px" tabindex="0" role="group" aria-label="${name} stack, three frames">
            ${cards.map(([id, i]) => `<figure class="fx-fan__card" style="--i:${i};--a:${Math.abs(i)}">${img(id)}</figure>`).join("")}
          </div>
          <span class="cap">${name}</span>
        </div>`).join("");

// ── S3 · Control — 같은 공방 8프레임. 프레임 표 하나가 캡션과 토큰을 같이 만든다.
const SEQ = ["seq-01", "seq-02", "seq-03", "seq-04", "seq-05", "seq-06", "seq-07", "seq-08"];
const FRAMES = [
  { height: "eye level", hour: "morning", lens: "35mm", changed: "height" },
  { height: "eye level", hour: "morning", lens: "85mm", changed: "lens" },
  { height: "bench height", hour: "morning", lens: "85mm", changed: "height" },
  { height: "bench height", hour: "midday", lens: "85mm", changed: "hour" },
  { height: "bench height", hour: "midday", lens: "35mm", changed: "lens" },
  { height: "high angle", hour: "midday", lens: "35mm", changed: "height" },
  { height: "high angle", hour: "dusk", lens: "35mm", changed: "hour" },
  { height: "high angle", hour: "dusk", lens: "50mm", changed: "lens" },
];
const SEQ_HTML = SEQ.map((id) => `
          <figure>${img(id)}<span class="scrim scrim--soft"></span></figure>`).join("");
const TICKS = SEQ.map(() => `<li></li>`).join("");
const TOKENS_HTML = [
  `<span class="tok">a narrow ceramics workshop</span>`,
  `<span class="tok">long birch bench</span>`,
  `<span class="tok">white plastered wall</span>`,
  `<span class="tok">one unglazed vessel</span>`,
  `<span class="tok tok--slot" id="slotHeight" data-live>eye level</span>`,
  `<span class="tok tok--slot" id="slotHour">morning</span>`,
  `<span class="tok tok--slot" id="slotLens">35mm</span>`,
].join("");

// ── S4 · Compare — 4쌍 슬라이더. 비율을 전부 다르게 둔다.
const BA = {
  "ba-01": ["ballpoint", "café counter", "16/10"],
  "ba-02": ["pencil", "hiking boot", "3/2"],
  "ba-03": ["marker", "stair core", "4/3"],
  "ba-04": ["crayon", "broth bowl", "5/4"],
};
const BA_ROW = Object.keys(BA).map((base) => {
  const [medium, subject, ar] = BA[base];
  return `
        <div class="ba" style="--p:52%">
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
}).join("");

// ── S5 · Gallery — 가로 트랙 11장. 카드마다 폭·높이·원근 from/to 를 다르게 발행한다.
const GAL = [
  ["mat-01", 26, 62, -40, 3, -96, 34, "porcelain, thumb pressed"],
  ["prod-01", 32, 48, 30, -2, -54, 62, "desk speaker"],
  ["mat-02", 20, 66, -70, 4, -124, 12, "brushed titanium"],
  ["prod-02", 24, 54, 10, -3, -78, 46, "vacuum flask"],
  ["mat-03", 29, 44, -20, 2, -88, 28, "linen at the seam"],
  ["prod-03", 34, 58, 40, -4, -46, 70, "notebook on linen"],
  ["mat-04", 22, 50, -55, 3, -110, 18, "oak end-grain"],
  ["prod-04", 27, 64, 20, -2, -66, 54, "hung headphones"],
  ["mat-05", 31, 46, -35, 4, -100, 24, "bubble in blown glass"],
  ["prod-05", 23, 60, 5, -3, -72, 50, "pour-over mid-fall"],
  ["mat-06", 35, 52, -15, 2, -84, 40, "rust at the weld"],
].map(([id, w, h, pz, py, pzA, pzB, capText], i) => `
          <li class="gal-card" style="--w:${w}vw;--h:${h}vh;--pz:${pz}px;--py:${py}deg"
              data-pz-from="${pzA}px" data-pz-to="${pzB}px">
            <figure class="frame">${lc(id)}${img(id)}<span class="scrim scrim--soft"></span></figure>
            <span class="cap">${String(i + 1).padStart(2, "0")} · ${capText}</span>
          </li>`).join("");

// ── S5b · Cylinder — 12장(공간 4 · 인물 4 · 추상 4). 스크롤 동사 0.
const CYL = ["arch-01", "fig-01", "abs-01", "arch-02", "fig-02", "abs-02",
             "arch-03", "fig-03", "abs-03", "arch-04", "fig-04", "abs-04"]
  .map((id, i) => `
        <figure class="fx-cyl__face" style="--i:${i}">${img(id)}</figure>`).join("");

// ── S6 · Feature — 4장 클릭 확장(flip-expand-card). 이름·메모는 프롬프트에서 나온 것만.
const WORK = [
  ["arch-02", "Attic", "rafters, one trapezoid of light", 34, 300],
  ["arch-01", "Corridor", "one unbroken clerestory band", 26, 250],
  ["arch-03", "Changing hall", "benches, tile, no people", 20, 214],
  ["arch-04", "Stairwell", "looking straight up the core", 16, 186],
].map(([id, name, note, w, h]) => `
        <div class="fx-flip__card" style="--w:calc(${w}% - 12px);--h:${h}px">
          <span class="fx-flip__inner">${img(id)}</span>
          <span class="scrim scrim--b"></span>
          <span class="fx-flip__body"><b>${name}</b><span>${note}</span></span>
        </div>`).join("");

// ── S7 · Grounds — 6장 틸트 카드.
const PRESETS = [
  ["abs-01", "Plume", "ink dropped into glycerine", 18, 196],
  ["abs-02", "Field", "iron filings, one hard key", 14, 168],
  ["abs-03", "Shaft", "smoke crossing one beam", 20, 208],
  ["abs-04", "Plate", "dry mud, grazing light", 15, 176],
  ["abs-05", "Film", "soap interference banding", 17, 190],
  ["abs-06", "Ribbon", "long exposure over stone", 13, 160],
].map(([id, name, note, w, h], i) => `
      <button type="button" class="preset fx-tilt fx-spot" aria-pressed="${i === 0 ? "true" : "false"}"
        style="--w:calc(${w}% - 14px);--h:${h}px">
        <span class="frame">${img(id)}<span class="scrim scrim--b"></span></span>
        <span class="preset-meta"><span class="pname">${name}</span><span class="cap">${note}</span></span>
      </button>`).join("");

// ── S8 · Delivery — 고해상 한 장(mat-03) + 주변 4장 십자 프리뷰(hover-cross-open)
const DELIVER = img("mat-03");
const DELIVER_LC = lc("mat-03");
const CROSS = [
  ["fig-01", "bench, from behind"],
  ["fig-02", "doorway silhouette"],
  ["fig-03", "hands on stone"],
  ["fig-04", "walking away"],
].map(([id, label]) => `
          <figure class="fx-cross__cell" data-fx-label="${label}">${img(id)}</figure>`).join("");

// ── S10 · Footer — 텍스트 마스크(mat-01/02) + amb-01 배경 + 칩 5장
const OUT_BLEED = `${img("amb-01")}`;
const FOOT_CHIPS = [
  ["hero-03", 200, 114, "drained swimming hall"],
  ["hero-04", 154, 108, "greenhouse at night"],
  ["hero-05", 186, 104, "salt flat, blue hour"],
  ["amb-02", 170, 96, "night highway"],
  ["amb-03", 136, 92, "window, city glow"],
].map(([id, w, h, capText]) => `
          <li class="foot-chip" style="--w:${w}px;--h:${h}px">
            <figure class="frame">${img(id)}<span class="scrim scrim--b"></span></figure>
            <span class="cap">${capText}</span>
          </li>`).join("");

// ── 조립
let html = readFileSync(join(D, "runs", "template-r3.html"), "utf8");
const repl = {
  __FONT_SYNE__: readFileSync(join(D, "fonts/syne.css"), "utf8").trim(),
  __FONT_GEIST__: readFileSync(join(D, "fonts/geist.css"), "utf8").trim(),
  __FONT_MONO__: readFileSync(join(D, "fonts/geist-mono.css"), "utf8").trim(),
  __GSAP__: readFileSync(join(LIB, "gsap315.min.js"), "utf8").trim(),
  __SCROLLTRIGGER__: readFileSync(join(LIB, "ScrollTrigger315.min.js"), "utf8").trim(),
  __T_S1__: String(TRACK.s1), __T_S3__: String(TRACK.s3), __T_S5__: String(TRACK.s5), __T_S8__: String(TRACK.s8),
  __H_S2__: String(MINH.s2), __H_S4__: String(MINH.s4), __H_S5B__: String(MINH.s5b),
  __H_S6__: String(MINH.s6), __H_S7__: String(MINH.s7), __H_S9__: String(MINH.s9),
  __KS__: JSON.stringify(K),
  __FRAMES__: JSON.stringify(FRAMES),
  __HERO_LC__: HERO_LC,
  __HERO_A__: HERO_A,
  __HERO_B__: HERO_B,
  __DRIFT_A__: DRIFT_A,
  __DRIFT_B__: DRIFT_B,
  __FAN__: FAN,
  __TOKENS__: TOKENS_HTML,
  __SEQ__: SEQ_HTML,
  __TICKS__: TICKS,
  __BA_ROW__: BA_ROW,
  __GAL__: GAL,
  __CYL__: CYL,
  __WORK__: WORK,
  __PRESETS__: PRESETS,
  __DELIVER__: DELIVER,
  __DELIVER_LC__: DELIVER_LC,
  __CROSS__: CROSS,
  __OUT_BLEED__: OUT_BLEED,
  __FOOT_CHIPS__: FOOT_CHIPS,
};
for (const [k, v] of Object.entries(repl)) {
  if (!html.includes(k)) { console.warn("WARN unused slot", k); continue; }
  html = html.split(k).join(v);
}
const leftovers = html.match(/__[A-Z0-9_]+__/g);
if (leftovers) throw new Error("unfilled slots: " + [...new Set(leftovers)].join(", "));

mkdirSync(join(D, "assets"), { recursive: true });
writeFileSync(join(D, "render-r3.html"), html);

// ── 자체 점검: 정착 예상치 · 토큰 밖 hex · 자산 커버리지
const vh = 900;
const settle = (h, k) => {
  const H = (h / 100) * vh, travel = H - vh, end = Math.round(travel * k);
  return { trackVh: h / 100, k, pinLeadVh: +((travel - end) / vh).toFixed(3),
    settlePct: +(((vh + end) / (H + vh)) * 100).toFixed(1), leadVh: +((H - end) / vh).toFixed(2) };
};
for (const s of ["s1", "s3", "s5", "s8"]) {
  const r = settle(TRACK[s], K[s]);
  console.log(`  #${s} track ${r.trackVh}vh k=${r.k} → settle ${r.settlePct}% · pinLead ${r.pinLeadVh}vh · lead ${r.leadVh}vh`);
}
const body = html.slice(html.indexOf("<style>\n/* ────"));
const hexes = [...body.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase());
const TOKENS_OK = new Set(["#0B0C0E", "#121316", "#F2F2F0", "#9A9B9E", "#D1FE17", "#F3F3F1", "#FFFFFF", "#000"]);
const offToken = [...new Set(hexes.filter((h) => !TOKENS_OK.has(h)))];
const imgs = (html.match(/<img /g) || []).length;
const uniq = new Set([...html.matchAll(/src="assets\/([a-z0-9-]+)\.png"/g)].map((m) => m[1]));
const totalVh = (TRACK.s1 + TRACK.s3 + TRACK.s5 + TRACK.s8 +
  MINH.s2 + MINH.s4 + MINH.s5b + MINH.s6 + MINH.s7 + MINH.s9) / 100;
console.log(`  off-token hex ${offToken.length}${offToken.length ? " → " + offToken.join(",") : ""}`);
console.log(`  declared vh (S10 제외) ${totalVh.toFixed(2)}`);
console.log(`BUILD_DONE ${Math.round(html.length / 1024)}KB · img ${imgs} · unique assets ${uniq.size}/${set.items.length}`);
