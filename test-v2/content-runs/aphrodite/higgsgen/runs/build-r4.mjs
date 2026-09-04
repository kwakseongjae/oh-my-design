// build-r4.mjs — render-r4.html 을 runs/template-r4.html + set.json + fonts/*.css + assets/*.png 에서 만든다.
//   node test-v2/content-runs/aphrodite/higgsgen/runs/build-r4.mjs
//
// r3 와 다른 점
//  1) GSAP 제거. 핀 3개(S1·S3·S6)는 fx-library/fullbleed-scale-reveal 의 스티키+`--e` 엔진 하나로 돈다.
//     트랙 길이와 K 를 여기 한 곳(TRACK/K)에서 관리하고, 정착 예상치를 빌드 로그에 찍는다.
//  2) 이미지를 **인라인**한다(webp base64) — 렌더 파일 하나로 완결(네트워크 0). 대신 용도별로
//     예산 ≤1.2MB(2026-09-04 상향: 선명도 > 파일 크기). 풀블리드 1600w(S1·S6·S10) · 1600w(S8) ·
//     시퀀스 1440w · 비교쌍 주 1360w/교체 640w · 드럼 타일 320w(표시 338w = 1:1) ·
//     지속확장 820w · 프리셋 780w · 썸 260w · 광원 복사본 48w.
//  3) 이미지 수를 61 → 32 로 줄였다(스토리보드 r4: 동시 미디어 ≤6, 섹션 10개).
// alt 생성(프롬프트 첫 문장 · 3단어 바닥 · 고유화)은 r2/r3 빌더에서 그대로 가져왔다.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const D = join(HERE, "..");
const REPO = join(HERE, "..", "..", "..", "..", "..");
const require_ = createRequire(join(REPO, "test-v2/tools/package.json"));
const sharp = require_("sharp");

/* ── 트랙(vh×100)과 정착 계수 K ─────────────────────────────────────────────
   travel = (track − 100)vh · end = travel × K · pinLead = travel − end (≥0.6vh)
   settle% = (100 + end) / (track + 100) — scrub-timing-probe 와 같은 좌표계 */
const TRACK = { s1: 220, s3: 300, s6: 240 };
const K = { s1: 0.50, s3: 0.55, s6: 0.55 };
const MINH = { s2: 112, s4: 100, s5: 100, s7: 90, s8: 100, s9: 80, s10: 100 };

const set = JSON.parse(readFileSync(join(D, "set.json"), "utf8"));
const byId = Object.fromEntries(set.items.map((i) => [i.id, i]));

/* ── alt: 프롬프트 첫 문장. 중복이면 다음 문장. 3단어 미만 금지(IL-5/LI-32). ── */
const usedSent = new Set(), usedFinal = new Set(), ALT = {};
for (const it of set.items) {
  const sentences = it.prompt.split(/(?<=\.)\s+/).map((s) => s.trim()).filter(Boolean);
  let pick = sentences[0];
  if (usedSent.has(pick.toLowerCase())) {
    const extra = sentences.slice(1).find((s) => !usedSent.has(s.toLowerCase()));
    if (extra) pick = extra;
  }
  usedSent.add(pick.toLowerCase());
  let fin = pick.replace(/\.$/, "").replace(/"/g, "&quot;").slice(0, 180);
  if (usedFinal.has(fin)) fin = (fin.slice(0, 160) + " — " + it.id).trim();
  if (fin.split(/\s+/).length < 3) fin = sentences[0].replace(/\.$/, "").replace(/"/g, "&quot;").slice(0, 160) + " (" + it.id + ")";
  usedFinal.add(fin);
  ALT[it.id] = fin;
}

/* ── 이미지 인라인: 용도별 폭/품질 사다리 ─────────────────────────────────── */
const bytes = { total: 0, byId: {} };
const cache = new Map();
async function uri(id, w, q, h = null) {
  const key = `${id}@${w}x${h || ""}q${q}`;
  if (cache.has(key)) return cache.get(key);
  let img = sharp(join(D, "assets", `${id}.png`));
  img = h ? img.resize({ width: w, height: h, fit: "cover", position: "attention" }) : img.resize({ width: w });
  const buf = await img.webp({ quality: q, effort: 5 }).toBuffer();
  const out = `data:image/webp;base64,${buf.toString("base64")}`;
  bytes.total += out.length; bytes.byId[key] = Math.round(buf.length / 1024);
  cache.set(key, out);
  return out;
}
const dims = (id) => byId[id].size.split("x").map(Number);
async function img(id, { w, q, h = null, cls = "shot", eager = false, deco = false, extra = "" } = {}) {
  const src = await uri(id, w, q, h);
  const [nw, nh] = dims(id);
  const ratio = h ? [w, h] : [nw, Math.round((nh * w) / nw)];
  const a = deco
    ? ' alt="" role="presentation" aria-hidden="true"'
    : ` alt="${ALT[id]}"`;
  return `<img class="${cls}" src="${src}"${a} width="${ratio[0]}" height="${ratio[1]}"` +
    `${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${extra ? " " + extra : ""}>`;
}

/* ── S1 · Hero: hero-01 → hero-02 (풀블리드 100vw×100vh) ─────────────────── */
const S1_A = await img("hero-01", { w: 1600, q: 72, cls: "shot cut-a", eager: true });

/* ── S2 · Range 띠 12장(2:3) ──────────────────────────────────────────────── */
const DRUM_IDS = ["grid-02", "mat-01", "grid-06", "fig-01", "grid-10", "arch-04",
                  "grid-04", "mat-03", "grid-08", "fig-03", "grid-12", "mat-05"];
const DRUM = (await Promise.all(DRUM_IDS.map(async (id) =>
  `<figure class="fx-drum__tile">${await img(id, { w: 320, h: 480, q: 50 })}</figure>`))).join("");

/* ── S3 · Control 8프레임 + 프레임 표(캡션·토큰의 단일 출처) ─────────────── */
const SEQ_IDS = ["seq-01", "seq-02", "seq-03", "seq-04", "seq-05", "seq-06", "seq-07", "seq-08"];
const FRAMES = [
  { height: "eye level",    hour: "morning", lens: "35mm", changed: "height", caption: "Eye level, morning, 35mm." },
  { height: "eye level",    hour: "morning", lens: "85mm", changed: "lens",   caption: "Same spot, longer lens — 85mm." },
  { height: "bench height", hour: "morning", lens: "85mm", changed: "height", caption: "Camera drops to bench height." },
  { height: "bench height", hour: "midday",  lens: "85mm", changed: "hour",   caption: "Midday light, shadows shorten." },
  { height: "bench height", hour: "midday",  lens: "35mm", changed: "lens",   caption: "Back to 35mm, the wall returns." },
  { height: "high angle",   hour: "midday",  lens: "35mm", changed: "height", caption: "High angle over the bench." },
  { height: "high angle",   hour: "dusk",    lens: "35mm", changed: "hour",   caption: "Dusk, one lamp carries the room." },
  { height: "high angle",   hour: "dusk",    lens: "50mm", changed: "lens",   caption: "High angle, dusk, 50mm." },
];
const SEQ = (await Promise.all(SEQ_IDS.map((id) => img(id, { w: 1440, q: 52 })))).join("");
const TOKENS = [
  ["", "a narrow ceramics workshop ·"],
  ["", "long birch bench ·"],
  ["", "white plastered wall ·"],
  ["", "one unglazed vessel ·"],
  ["slotHeight", "eye level ·"],
  ["slotHour", "morning ·"],
  ["slotLens", "35mm"],
].map(([id, t]) => id
  ? `<span class="tok tok--slot" id="${id}">${t.replace(" ·", "")}</span>`
  : `<span class="tok">${t}</span>`).join("");

/* ── S4 · Compare 4쌍 + 썸 4 (키 1~4 와 1:1) ─────────────────────────────── */
const BA = [
  ["ba-01", "Ballpoint · café counter", 96],
  ["ba-02", "Pencil · hiking boot", 112],
  ["ba-03", "Marker · stair core", 88],
  ["ba-04", "Crayon · broth bowl", 104],
];
const BA_PAIRS = (await Promise.all(BA.map(async ([base, name], i) => {
  const [nw, nh] = dims(base + "-a");
  return `
      <div class="pair${i === 0 ? " is-on" : ""}" data-name="${name}" style="--ar:${(nw / nh).toFixed(4)}">
        ${await img(base + "-b", { w: i === 0 ? 1360 : 640, q: i === 0 ? 50 : 42, cls: "shot bottom" })}
        <span class="top" style="--bgi:url(${await uri(base + "-a", i === 0 ? 1360 : 640, i === 0 ? 50 : 42)})"></span>
      </div>`;
}))).join("");
const BA_THUMBS = (await Promise.all(BA.map(async ([base, name, w], i) => `
      <button type="button" class="thumb" style="width:${w}px" aria-pressed="${i === 0 ? "true" : "false"}"
        aria-label="${name} — comparison ${i + 1} of 4">${await img(base + "-a", { w: 260, h: 174, q: 58, deco: true })}</button>`))).join("");

/* ── S5 · Gallery 지속 확장 4장 ──────────────────────────────────────────── */
const PEX = [
  ["hero-03", "Swimming hall", "Drained basin, clerestory light in hard rectangles."],
  ["arch-01", "Corridor", "One unbroken clerestory band, verticals held true."],
  ["abs-01", "Plume", "Ink dropped into glycerine, lit on a copy stand."],
  ["amb-02", "Night road", "Near-dark frame, one warm source deep in the scene."],
];
const PEX_HTML = (await Promise.all(PEX.map(async ([id, name, note], i) => `
        <button type="button" class="fx-pex__panel${i === 0 ? " is-open" : ""}" aria-expanded="${i === 0}">
          ${await img(id, { w: 820, q: 54 })}
          <span class="scrim scrim--b"></span>
          <span class="fx-pex__spine">${name}</span>
          <span class="fx-pex__body"><span class="card-t">${name}</span><span class="note">${note}</span></span>
        </button>`))).join("");

/* ── S6 · Feature 한 장 ──────────────────────────────────────────────────── */
const S6 = await img("hero-04", { w: 1600, q: 72 });

/* ── S7 · Presets 프리뷰 3 + 광원 복사본(LC-43 색보정 · DESIGN §2 light-copy) ── */
const PRESET = [
  ["prod-01", "Desk speaker", "Softbox left, black flag right."],
  ["prod-03", "Notebook on linen", "One honest specular, contact shadow grounded."],
  ["prod-05", "Pour-over, mid-fall", "Tilt-shift at f/5.6, seam left visible."],
];
const S7_VIEW = (await Promise.all(PRESET.map(async ([id], i) =>
  await img(id, { w: 780, q: 54, cls: `shot${i === 0 ? " is-on" : ""}` })))).join("");
const S7_GLOW = (await Promise.all(PRESET.map(async ([id], i) =>
  await img(id, { w: 48, q: 40, cls: `glow${i === 0 ? " is-on" : ""}`, deco: true })))).join("");
const S7_CHIPS = PRESET.map(([, name, note], i) => `
        <button type="button" class="chip" role="radio" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          <span class="cn">${name}</span><span class="cd">${note}</span>
        </button>`).join("");

/* ── S8 · Delivery / S10 · Footer ────────────────────────────────────────── */
const S8 = await img("arch-02", { w: 1600, q: 56 });
const S10 = await img("amb-01", { w: 1600, q: 76, cls: "shot s10-shot" });

/* ── 조립 ────────────────────────────────────────────────────────────────── */
let html = readFileSync(join(D, "runs", "template-r4.html"), "utf8");
const repl = {
  __FONT_SYNE__: readFileSync(join(D, "fonts/syne.css"), "utf8").trim(),
  __FONT_GEIST__: readFileSync(join(D, "fonts/geist.css"), "utf8").trim(),
  __FONT_MONO__: readFileSync(join(D, "fonts/geist-mono.css"), "utf8").trim(),
  __T_S1__: String(TRACK.s1), __T_S3__: String(TRACK.s3), __T_S6__: String(TRACK.s6),
  __H_S2__: String(MINH.s2), __H_S5__: String(MINH.s5), __H_S7__: String(MINH.s7), __H_S9__: String(MINH.s9),
  __FRAMES__: JSON.stringify(FRAMES),
  __S1_A__: S1_A, __DRUM__: DRUM, __SEQ__: SEQ, __TOKENS__: TOKENS,
  __BA_PAIRS__: BA_PAIRS, __BA_THUMBS__: BA_THUMBS, __PEX__: PEX_HTML, __S6__: S6,
  __S7_VIEW__: S7_VIEW, __S7_GLOW__: S7_GLOW, __S7_CHIPS__: S7_CHIPS, __S8__: S8, __S10__: S10,
};
for (const [k, v] of Object.entries(repl)) {
  if (!html.includes(k)) { console.warn("WARN unused slot", k); continue; }
  html = html.split(k).join(v);
}
const leftovers = html.match(/__[A-Z0-9_]+__/g);
if (leftovers) throw new Error("unfilled slots: " + [...new Set(leftovers)].join(", "));
writeFileSync(join(D, "render-r4.html"), html);

/* ── 자체 점검 ───────────────────────────────────────────────────────────── */
const vh = 900;
for (const s of ["s1", "s3", "s6"]) {
  const H = (TRACK[s] / 100) * vh, travel = H - vh, end = travel * K[s];
  console.log(`  #${s} track ${TRACK[s] / 100}vh k=${K[s]} → settle ${(((vh + end) / (H + vh)) * 100).toFixed(1)}% · ` +
    `pinLead ${((travel - end) / vh).toFixed(2)}vh · lead ${((H - end) / vh).toFixed(2)}vh`);
}
const css = html.slice(html.indexOf("/* ─────"), html.indexOf("</style>\n</head>"));
const TOKENS_OK = new Set(["#0B0C0E", "#121316", "#F2F2F0", "#9A9B9E", "#D1FE17", "#F3F3F1", "#FFF", "#000"]);
const offHex = [...new Set([...css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase()))].filter((h) => !TOKENS_OK.has(h));
const radii = [...new Set([...css.matchAll(/border-radius:\s*([^;}]+)/g)].map((m) => m[1].trim()))];
const offRadius = radii.filter((r) => !/var\(--r-(card|stage|pill)\)|^0$|calc\(var\(--r-stage\)/.test(r));
const imgs = (html.match(/<img /g) || []).length;
const totalVh = (TRACK.s1 + TRACK.s3 + TRACK.s6 + Object.values(MINH).reduce((a, b) => a + b, 0)) / 100;
const heavy = Object.entries(bytes.byId).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => `${k} ${v}KB`);
console.log(`  off-token hex ${offHex.length}${offHex.length ? " → " + offHex.join(",") : ""} · off-token radius ${offRadius.length}${offRadius.length ? " → " + offRadius.join(" | ") : ""}`);
console.log(`  declared page ${totalVh.toFixed(2)}vh · img ${imgs} · heaviest ${heavy.join(", ")}`);
console.log(`BUILD_DONE ${Math.round(html.length / 1024)}KB (images ${Math.round(bytes.total / 1024)}KB inline)`);
