// build-r5.mjs — render-r5.html 을 runs/template-r5.html + set.json + fonts/*.css + assets/*.png 에서 만든다.
//   node test-v2/content-runs/aphrodite/higgsgen/runs/build-r5.mjs
//
// r4 와 다른 점
//  1) 디자인 언어 교체(DESIGN-r5.md "Plates on paper"): 밝은 종이 지면 + petrol 반전, Bricolage/Instrument,
//     brass 액센트, 판 반경 0. 니어블랙·애시드·모노·대문자 eyebrow·가운뎃점·화살표는 전부 금지(게이트 F).
//  2) 스크럽 엔진을 fx-library/smooth-scrub-engine 으로 교체 — 상시 rAF 단일 루프, α 0.14, 두 시계(--e/--v),
//     데드밴드, 리듀스드 모션 α=1. 양자화 임계는 없다.
//  3) 섹션 8 · 핀 2 · 선언 길이 11.4vh.
//  4) 이미지 37장 인라인(webp base64). 폭·품질 사다리는 아래 표 한 곳에서 관리한다.
// alt 생성(프롬프트 첫 문장 · 3단어 바닥 · 고유화)은 r2~r4 빌더에서 그대로 가져왔다.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const HERE = dirname(fileURLToPath(import.meta.url));
const D = join(HERE, "..");
const REPO = join(HERE, "..", "..", "..", "..", "..");
const require_ = createRequire(join(REPO, "test-v2/tools/package.json"));
const sharp = require_("sharp");

/* ── 섹션 길이(vh×100)와 정착 계수 K ────────────────────────────────────────
   travel = (track − 100)vh · settleScroll = travel × K · hold = travel − settleScroll (LC-48 ≥0.6vh)
   settle% = (100 + travel×K) / (track + 100) — scrub-timing-probe 와 같은 좌표계 */
const TRACK = { s2: 240, s5: 230 };
const K = { s2: 0.55, s5: 0.53 };
const LEN = { s1: 140, s2: 240, s3: 130, s4: 110, s5: 230, s6: 100, s7: 90, s8: 110 };

/* ── 이미지 사다리 (폭 · 품질 · 필요하면 높이) ───────────────────────────── */
const LAD = {
  heroMain:  { w: 1400, q: 64 },
  sliver:    { w: 48, h: 1300, q: 46 },
  strip:     { w: 480, h: 386, q: 58 },
  seq:       { w: 1150, q: 54 },
  tile:      { w: 340, h: 780, q: 50 },
  pair:      { w: 820,  q: 52 },
  stackTop:  { w: 1500, q: 60 },
  stackBack: { w: 700,  q: 52 },
  preset:    { w: 1000, q: 54 },
  mat:       { w: 560, h: 840, q: 56 },
  bleed:     { w: 1400, q: 52 },
};

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
  let fin = pick.replace(/\.$/, "").replace(/\s+[—–]\s+/g, ", ").replace(/[—–·]/g, ",").replace(/,\s*,/g, ",").replace(/"/g, "&quot;").slice(0, 170);
  if (usedFinal.has(fin)) fin = (fin.slice(0, 150) + ", frame " + it.id).trim();
  if (fin.split(/\s+/).length < 3) fin = sentences[0].replace(/\.$/, "").replace(/\s+[—–]\s+/g, ", ").replace(/[—–·]/g, ",").replace(/"/g, "&quot;").slice(0, 150) + " (" + it.id + ")";
  usedFinal.add(fin);
  ALT[it.id] = fin;
}

/* ── 이미지 인라인 ───────────────────────────────────────────────────────── */
const bytes = { total: 0, byKey: {} };
const cache = new Map();
async function uri(id, w, q, h = null) {
  const key = `${id}@${w}x${h || ""}q${q}`;
  if (cache.has(key)) return cache.get(key);
  let img = sharp(join(D, "assets", `${id}.png`));
  img = h ? img.resize({ width: w, height: h, fit: "cover", position: "attention" }) : img.resize({ width: w });
  const buf = await img.webp({ quality: q, effort: 6 }).toBuffer();
  const out = `data:image/webp;base64,${buf.toString("base64")}`;
  bytes.total += out.length; bytes.byKey[key] = Math.round(buf.length / 1024);
  cache.set(key, out);
  return out;
}
const dims = (id) => byId[id].size.split("x").map(Number);
async function img(id, lad, { cls = "", eager = false, deco = false, extra = "" } = {}) {
  const { w, q, h = null } = lad;
  const src = await uri(id, w, q, h);
  const [nw, nh] = dims(id);
  const [rw, rh] = h ? [w, h] : [w, Math.round((nh * w) / nw)];
  const a = deco ? ' alt="" role="presentation" aria-hidden="true"' : ` alt="${ALT[id]}"`;
  return `<img${cls ? ` class="${cls}"` : ""} src="${src}"${a} width="${rw}" height="${rh}"` +
    `${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${extra ? " " + extra : ""}>`;
}

/* ── S1 ──────────────────────────────────────────────────────────────────── */
const S1_MAIN = await img("hero-04", LAD.heroMain, { eager: true });
const SLIVER_IDS = ["fig-04", "abs-05"];
const S1_SLIVERS = (await Promise.all(SLIVER_IDS.map((id) =>
  img(id, LAD.sliver, { cls: "s1sliver", deco: true })))).join("\n      ");
const STRIP_IDS = ["grid-01", "fig-02", "arch-02"];
const S1_STRIP = (await Promise.all(STRIP_IDS.map((id) => img(id, LAD.strip)))).join("");

/* ── S2 · 8프레임 스크럽 + 프레임 opacity 삼각파 CSS ──────────────────────── */
const SEQ_IDS = ["seq-01", "seq-02", "seq-03", "seq-04", "seq-05", "seq-06", "seq-07", "seq-08"];
const S2_FRAMES = (await Promise.all(SEQ_IDS.map((id, i) =>
  img(id, LAD.seq, { eager: i === 0 })))).join("");
/* x = --e × 7. 프레임 i 는 x=i 에서 1, x=i±1 에서 0 인 삼각파 → 이웃끼리만 크로스페이드한다. */
const S2_FRAME_CSS = SEQ_IDS.map((_, i) => {
  const lo = i - 1, hi = i + 1;
  const a = lo === 0 ? "calc(var(--e,0) * 7)" : lo < 0 ? `calc(var(--e,0) * 7 + ${-lo})` : `calc(var(--e,0) * 7 - ${lo})`;
  const b = `calc(${hi} - var(--e,0) * 7)`;
  return `.s2inner img:nth-child(${i + 1}){opacity:calc(clamp(0,${a},1) * clamp(0,${b},1))}`;
}).join("\n");

/* ── S3 · 12장 띠 ────────────────────────────────────────────────────────── */
const TILE_IDS = ["grid-02", "grid-04", "grid-06", "grid-08", "grid-10", "grid-12",
                  "grid-03", "grid-05", "grid-07", "grid-09", "grid-11", "arch-04"];
const S3_TILES = (await Promise.all(TILE_IDS.map((id) => img(id, LAD.tile)))).join("");

/* ── S4 · 전후 4쌍 ───────────────────────────────────────────────────────── */
const PAIRS = [
  ["ba-01-a", "ba-01-b", "Underpass"],
  ["ba-02-a", "ba-02-b", "Greenhouse"],
  ["ba-03-a", "ba-03-b", "Ferry deck"],
  ["ba-04-a", "ba-04-b", "Quarry road"],
];
const S4_PAIRS = (await Promise.all(PAIRS.map(async ([a, b], i) =>
  `<div data-pair="${i}">${await img(a, LAD.pair, { cls: "before" })}${await img(b, LAD.pair, { cls: "after" })}</div>`))).join("");
const S4_CHIPS = PAIRS.map(([, , name], i) =>
  `<button type="button" class="chip" data-pairbtn role="radio" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${name}</button>`).join("");

/* ── S5 · 4장 스택 ───────────────────────────────────────────────────────── */
const STACK = ["hero-03", "arch-01", "abs-01", "amb-02"];
const S5_PLATES = (await Promise.all(STACK.map(async (id, i) =>
  `<div class="sp sp${i + 1}">${await img(id, i === 0 ? LAD.stackTop : LAD.stackBack, { eager: false })}</div>`))).join("");

/* ── S6 · 프리셋 3 ───────────────────────────────────────────────────────── */
const PRESET = [
  ["prod-01", "Hard key, black flag", "One source left, everything else subtracted."],
  ["prod-03", "Window and bounce", "Daylight from one side, linen fill on the other."],
  ["prod-05", "Tilt shift, f/5.6", "Plane of focus tipped so one seam stays sharp."],
];
const S6_VIEWS = (await Promise.all(PRESET.map(async ([id], i) =>
  await img(id, LAD.preset, { cls: i === 0 ? "on" : "" })))).join("");
const S6_CHIPS = PRESET.map(([, name, note], i) => `
        <button type="button" class="chip" data-preset role="radio" aria-checked="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
          <span class="cn">${name}</span><span class="cd">${note}</span>
        </button>`).join("");

/* ── S7 · 재질 3판 (서로 다른 위상) ──────────────────────────────────────── */
const MAT_IDS = ["mat-01", "mat-03", "mat-05"];
const S7_PLATES = (await Promise.all(MAT_IDS.map((id) => img(id, LAD.mat)))).join("");
const S7_PERIOD = [6.6, 7.0, 7.4];   // 같은 주기로 세 판을 돌리면 한 덩어리로 읽힌다 — 위상과 주기를 함께 어긋낸다
const S7_STAGGER_CSS = MAT_IDS.map((_, i) =>
  `.mats img:nth-child(${i + 1}){animation:breathe7 ${S7_PERIOD[i]}s var(--breathe) infinite alternate;animation-delay:${(-2.33 * i).toFixed(2)}s}`).join("\n");

/* ── S8 ──────────────────────────────────────────────────────────────────── */
const S8_BLEED = await img("amb-01", LAD.bleed, { cls: "s8bleed" });

/* ── 조립 ────────────────────────────────────────────────────────────────── */
let html = readFileSync(join(D, "runs", "template-r5.html"), "utf8");
const repl = {
  __FONT_DISPLAY__: readFileSync(join(D, "fonts/bricolage-grotesque.css"), "utf8").trim(),
  __FONT_BODY__: readFileSync(join(D, "fonts/instrument-sans.css"), "utf8").trim(),
  __S1_MAIN__: S1_MAIN, __S1_SLIVERS__: S1_SLIVERS, __S1_STRIP__: S1_STRIP,
  __S2_FRAMES__: S2_FRAMES, __S2_FRAME_CSS__: S2_FRAME_CSS,
  __S3_TILES__: S3_TILES,
  __S4_PAIRS__: S4_PAIRS, __S4_CHIPS__: S4_CHIPS,
  __S5_PLATES__: S5_PLATES,
  __S6_VIEWS__: S6_VIEWS, __S6_CHIPS__: S6_CHIPS,
  __S7_PLATES__: S7_PLATES, __S7_STAGGER_CSS__: S7_STAGGER_CSS,
  __S8_BLEED__: S8_BLEED,
};
for (const [k, v] of Object.entries(repl)) {
  if (!html.includes(k)) { console.warn("WARN unused slot", k); continue; }
  html = html.split(k).join(v);
}
const leftovers = html.match(/__[A-Z0-9_]+__/g);
if (leftovers) throw new Error("unfilled slots: " + [...new Set(leftovers)].join(", "));
writeFileSync(join(D, "render-r5.html"), html);

/* ── 자체 점검 ───────────────────────────────────────────────────────────── */
const vh = 900;
for (const s of ["s2", "s5"]) {
  const H = (TRACK[s] / 100) * vh, travel = H - vh, end = travel * K[s];
  console.log(`  #${s} track ${TRACK[s] / 100}vh k=${K[s]} → settle ${(((vh + end) / (H + vh)) * 100).toFixed(1)}% · hold ${((travel - end) / vh).toFixed(2)}vh`);
}
const css = html.slice(html.indexOf("/* ─────"), html.indexOf("</style>\n</head>"));
const declared = Object.values(LEN).reduce((a, b) => a + b, 0) / 100;

/* 게이트 F — 금지 목록 자기 검사(본문·CSS 전체) */
const body = html.slice(html.indexOf("<body"));
const F = {
  "near-black grounds": (css.match(/#0[0-9A-Fa-f]{5}\b|#1[01][0-9A-Fa-f]{4}\b|#111\b|#0B0B0B\b/g) || [])
      .filter((h) => !/#123330|#171512|#1a1a18|#0e1f1d/i.test(h)).length,
  "ALL-CAPS tracked eyebrow": (css.match(/text-transform\s*:\s*uppercase/g) || []).length,
  "middle-dot meta": (body.replace(/<style[\s\S]*?<\/style>/g, "").match(/·/g) || []).length,
  "spaced em-dash label": (body.replace(/<style[\s\S]*?<\/style>/g, "").match(/ — /g) || []).length,
  "monospace": (html.match(/monospace|mono['"]|Mono['"]|JetBrains|Geist ?Mono/g) || []).length,
  "arrow in button/link text": (body.match(/>[^<]*→[^<]*</g) || []).length,
  "custom cursor": (css.match(/cursor\s*:\s*url\(|cursor-follow|\.cursor\b/g) || []).length,
  "fake browser/phone chrome": (body.match(/browser-?bar|window-?chrome|phone-?bezel|traffic-?light|url-?bar/gi) || []).length,
  "uniform card grid + one shadow": (css.match(/\.card\b/g) || []).length,
  "cream+serif+terracotta": (css.match(/#F4F1EA|serif;|terracotta|#E2725B/g) || []).filter((s) => s !== "serif;").length,
};
const offHex = [...new Set([...css.matchAll(/#[0-9a-fA-F]{3,8}\b/g)].map((m) => m[0].toUpperCase())) ];
const imgs = (html.match(/<img /g) || []).length;
const heavy = Object.entries(bytes.byKey).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => `${k} ${v}KB`);
console.log("  gate F self-check: " + Object.entries(F).map(([k, v]) => `${k}=${v}`).join(" · "));
console.log(`  hex in css: ${offHex.join(",")}`);
console.log(`  declared page ${declared.toFixed(2)}vh · img ${imgs} · unique sources ${cache.size} · heaviest ${heavy.join(", ")}`);
console.log(`BUILD_DONE ${Math.round(html.length / 1024)}KB (images ${Math.round(bytes.total / 1024)}KB base64)`);
