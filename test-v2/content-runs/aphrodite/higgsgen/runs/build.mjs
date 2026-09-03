// build.mjs — Higgsgen render.html 을 runs/template.html + set.json + fonts/*.css 에서 생성한다.
// 실행: node test-v2/content-runs/aphrodite/higgsgen/runs/build.mjs
//
// 규칙
//  - 폰트 3종(Syne / Geist / GeistMono)은 base64 CSS 를 그대로 <style> 에 인라인한다 → 렌더 시 외부 요청 0.
//  - 이미지는 assets/<id>.png 상대경로. 파일이 아직 없어도 레이아웃(aspect-ratio)이 유지되고 --bg-2 가 보인다.
//  - alt 는 프롬프트 첫 문장. 같은 문장이 겹치면(seq-01~08) 다음 문장으로 내려가 서로 다른 alt 를 만든다 (IL-5).
//  - 카드 치수는 여기서 계산한다. 같은 크기의 표면이 한 부모 안에 4개 이상 모이면 landing-integrity LI-21 이
//    "획일 카드 그리드"로 잡는다 — 벽(S2)/마키(S6)는 폭·높이를 전부 다르게 발행한다.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const D = join(dirname(fileURLToPath(import.meta.url)), "..");
const set = JSON.parse(readFileSync(join(D, "set.json"), "utf8"));
const byId = Object.fromEntries(set.items.map((i) => [i.id, i]));

// ── alt: 프롬프트 첫 문장, 중복이면 다음 문장으로 (seq-01~08 은 첫 문장이 동일하다)
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
const AR = { "2048x1152": 16 / 9, "1536x1024": 3 / 2, "1024x1536": 2 / 3, "1152x1536": 3 / 4 };
const ar = (id) => AR[byId[id].size] ?? 3 / 2;
const arCss = (id) => ({ "2048x1152": "16 / 9", "1536x1024": "3 / 2", "1024x1536": "2 / 3", "1152x1536": "3 / 4" }[byId[id].size] || "3 / 2");

// 광원 복제(R12): 프레임된 이미지 뒤에 blur(40px) saturate(1.6) 사본을 깔아 이미지가 페이지를 물들인다.
// role=presentation + 빈 alt → IL-5 집계에서 빠지고, IMG 이므로 LC-43(미디어 색보정) 계측에는 잡힌다.
const lightCopy = (id) => `<img class="lc" src="assets/${id}.png" alt="" role="presentation" aria-hidden="true" loading="lazy" decoding="async">`;
const img = (id, cls = "", eager = false) =>
  `<img class="${cls}" src="assets/${id}.png" alt="${alt(id)}" width="${byId[id].size.split("x")[0]}" height="${byId[id].size.split("x")[1]}"${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;

// ── S1 · 히어로 하단의 네 세계. 폭을 전부 다르게 둔다(획일 그리드 회피 + 별자리처럼 흩뜨리기).
const WORLD_LABELS = { "hero-02": "Shelter", "hero-03": "Pool hall", "hero-04": "Glasshouse", "hero-05": "Salt flat" };
const WORLD_W = { "hero-02": 148, "hero-03": 168, "hero-04": 132, "hero-05": 180 };
const WORLDS = ["hero-02", "hero-03", "hero-04", "hero-05"].map((id, i) => `
      <li class="world" style="--w:${WORLD_W[id]}px;--lift:${[0, 18, 6, 26][i]}px">
        <figure class="frame frame--sm">${lightCopy(id)}${img(id, "shot")}<span class="scrim scrim--b"></span></figure>
        <span class="mono tag">${WORLD_LABELS[id]}</span>
      </li>`).join("");

// ── S2 · 증거의 벽. 12장, 폭 12종 전부 다름(합 1216 + gap 16×3 = 한 줄 4장).
const WALL_IDS = ["grid-01", "grid-02", "grid-03", "grid-04", "grid-05", "grid-06", "grid-07", "grid-08", "grid-09", "grid-10", "grid-11", "grid-12"];
const WALL_W = [372, 236, 396, 212, 268, 404, 244, 300, 356, 252, 380, 228];
const HUE = [28, 214, 196, 42, 66, 12, 232, 18, 188, 250, 84, 206]; // T3 스크림에 카드마다 다른 색을 머금린다
const WALL = WALL_IDS.map((id, i) => {
  const start = 4 + (i % 4) * 5;              // 스크롤 스태거: 열마다 진입 구간을 어긋낸다(80ms 체계의 스크롤 등가)
  return `
      <figure class="tile" style="--w:${WALL_W[i]};--ar:${arCss(id)};--hue:${HUE[i]};animation-range:entry ${start}% entry ${start + 56}%">
        ${img(id, "shot")}<span class="scrim scrim--hue"></span>
      </figure>`;
}).join("");

// ── S3 · 핀 스테이지 1. 같은 공방 8프레임을 스크롤이 끌고 간다.
const SEQ = ["seq-01", "seq-02", "seq-03", "seq-04", "seq-05", "seq-06", "seq-07", "seq-08"];
const SEQ_CAPS = [
  "frame 01 · eye level, morning, lens 35",
  "frame 02 · eye level, morning, lens 85",
  "frame 03 · bench height, morning, lens 35",
  "frame 04 · high angle, morning, lens 50",
  "frame 05 · eye level, midday, lens 35",
  "frame 06 · bench height, midday, lens 85",
  "frame 07 · eye level, dusk, lens 50",
  "frame 08 · high angle, dusk, lens 35",
];
const STRIP = SEQ.map((id, i) => `
        <figure class="cell">${img(id, "shot")}<span class="scrim scrim--soft"></span><span class="mono idx">${String(i + 1).padStart(2, "0")}</span></figure>`).join("");
const CAPS = SEQ_CAPS.map((t, i) => `<p class="cap mono" style="animation-name:cap${i}">${t}</p>`).join("\n        ");
const TICKS = SEQ.map((_, i) => `<li class="tick"${i === 0 ? ' data-first="1"' : ""}></li>`).join("");
// 캡션 8개의 창(window)을 CSS 키프레임으로 발행한다 — 스크롤 진행률 0→1 을 8등분.
const CAP_KEYFRAMES = SEQ.map((_, i) => {
  const a = +(i * 12.5).toFixed(2), b = +(a + 2).toFixed(2), c = +((i + 1) * 12.5 - 2).toFixed(2), d = +((i + 1) * 12.5).toFixed(2);
  if (i === 0) return `@keyframes cap0{0%,${c}%{opacity:1}${d}%,100%{opacity:0}}`;
  if (i === SEQ.length - 1) return `@keyframes cap${i}{0%,${a}%{opacity:0}${b}%,100%{opacity:1}}`;
  return `@keyframes cap${i}{0%,${a}%{opacity:0}${b}%,${c}%{opacity:1}${d}%,100%{opacity:0}}`;
}).join("\n");
const PROMPT = "a narrow ceramics workshop, one unglazed bowl on birch";

// ── S4 · 명암 뒤집기 + before/after. 큰 것 1 + 작은 것 3(4개를 한 부모에 두지 않는다).
const BA_LABEL = { "ba-01": "Café counter", "ba-02": "Hiking boot", "ba-03": "Stair core", "ba-04": "Broth bowl" };
const BA_MEDIUM = { "ba-01": "ballpoint", "ba-02": "pencil", "ba-03": "marker", "ba-04": "crayon" };
const slider = (base, cls) => `
      <div class="ba ${cls}" style="--p:52%">
        <figure class="frame frame--lt">
          ${lightCopy(base + "-b")}
          ${img(base + "-b", "shot")}
          <span class="ba-top">${img(base + "-a", "shot")}</span>
          <span class="ba-bar" aria-hidden="true"></span>
          <input type="range" min="0" max="100" step="2" value="52" aria-label="Compare the ${BA_MEDIUM[base]} drawing with the generated frame — ${BA_LABEL[base]}">
        </figure>
        <div class="ba-meta"><span class="mono tag">${BA_MEDIUM[base]}</span><span class="mono tag tag--dim">${BA_LABEL[base]}</span></div>
      </div>`;
const BA_MAIN = slider("ba-01", "ba--lg");
const BA_ROW = ["ba-02", "ba-03", "ba-04"].map((b) => slider(b, "ba--sm")).join("");

// ── S5 · 깊이 콜라주. 세 장이 서로 다른 속도로 어긋난다.
const COLLAGE = [
  { id: "arch-01", cls: "co co--back", range: "cover 0% cover 100%" },
  { id: "arch-02", cls: "co co--mid", range: "cover 0% cover 100%" },
  { id: "arch-03", cls: "co co--front", range: "cover 0% cover 100%" },
].map(({ id, cls }) => `
        <figure class="frame ${cls}">${lightCopy(id)}${img(id, "shot")}<span class="scrim scrim--soft"></span></figure>`).join("");

// ── S6 · 마키 2줄. 높이를 7종으로 흩어 획일 카드 그룹을 만들지 않는다.
const ROW_A = ["mat-01", "mat-02", "mat-03", "mat-04", "mat-05", "prod-01", "prod-02"];
const ROW_B = ["prod-03", "prod-04", "prod-05", "fig-01", "fig-02", "fig-03", "fig-04"];
const H_A = [168, 224, 196, 252, 182, 238, 210];
const H_B = [238, 182, 252, 196, 224, 168, 210];
const marqRow = (ids, hs) => ids.map((id, i) => `
          <figure class="mq-item" style="--h:${hs[i]}px;aspect-ratio:${arCss(id)}">${img(id, "shot")}<span class="scrim scrim--soft"></span></figure>`).join("");
const MARQ_A = marqRow(ROW_A, H_A) + marqRow(ROW_A, H_A);
const MARQ_B = marqRow(ROW_B, H_B) + marqRow(ROW_B, H_B);

// ── S7 · 3D 틸트 프리셋 8장.
const PRESET = [
  ["abs-01", "Bloom", "ink in glycerine"],
  ["abs-02", "Field", "iron filings, hard key"],
  ["abs-03", "Shaft", "smoke in one beam"],
  ["abs-04", "Plate", "dry mud, grazing light"],
  ["abs-05", "Film", "soap interference"],
  ["abs-06", "Ribbon", "long exposure water"],
  ["arch-04", "Shift", "vertical stack, 24mm"],
  ["amb-01", "After hours", "one lamp, far back"],
];
const PRESETS = PRESET.map(([id, name, note]) => `
        <div class="tilt">
          <article class="tilt-c">
            <figure class="frame frame--flat">${lightCopy(id)}${img(id, "shot")}<span class="scrim scrim--b"></span></figure>
            <div class="preset-meta"><h3>${name}</h3><p class="mono tag tag--dim">${note}</p></div>
            <span class="spot" aria-hidden="true"></span>
          </article>
        </div>`).join("");

// ── S8 · 핀 스테이지 2. 같은 장을 두 벌 깔고 원형 마스크가 열린다.
const DETAIL = `${img("mat-06", "shot base")}
          ${img("mat-06", "shot fine")}`;

// ── S10 · 마지막 풀블리드 + 닫는 한 장.
const FOOTER_MEDIA = img("amb-02", "shot bleed");
const FOOTER_CHIP = `<figure class="frame frame--sm">${lightCopy("amb-03")}${img("amb-03", "shot")}<span class="scrim scrim--b"></span></figure>`;

// ── 조립
let html = readFileSync(join(D, "runs", "template.html"), "utf8");
const repl = {
  __FONT_SYNE__: readFileSync(join(D, "fonts/syne.css"), "utf8").trim(),
  __FONT_GEIST__: readFileSync(join(D, "fonts/geist.css"), "utf8").trim(),
  __FONT_MONO__: readFileSync(join(D, "fonts/geist-mono.css"), "utf8").trim(),
  __CAP_KEYFRAMES__: CAP_KEYFRAMES,
  __HERO__: img("hero-01", "shot hero-img", true),
  __WORLDS__: WORLDS,
  __WALL__: WALL,
  __STRIP__: STRIP,
  __CAPS__: CAPS,
  __TICKS__: TICKS,
  __PROMPT__: PROMPT,
  __PROMPT_CH__: String(PROMPT.length),
  __BA_MAIN__: BA_MAIN,
  __BA_ROW__: BA_ROW,
  __COLLAGE__: COLLAGE,
  __MARQ_A__: MARQ_A,
  __MARQ_B__: MARQ_B,
  __PRESETS__: PRESETS,
  __DETAIL__: DETAIL,
  __FOOTER_MEDIA__: FOOTER_MEDIA,
  __FOOTER_CHIP__: FOOTER_CHIP,
};
for (const [k, v] of Object.entries(repl)) {
  if (!html.includes(k)) { console.warn("WARN unused slot", k); continue; }
  html = html.split(k).join(v);
}
const leftovers = html.match(/__[A-Z_]+__/g);
if (leftovers) throw new Error("unfilled slots: " + [...new Set(leftovers)].join(", "));

mkdirSync(join(D, "assets"), { recursive: true });
writeFileSync(join(D, "render.html"), html);
const imgs = (html.match(/<img /g) || []).length;
console.log(`BUILD_DONE ${Math.round(html.length / 1024)}KB · img ${imgs} · items ${set.items.length}`);
