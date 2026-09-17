#!/usr/bin/env node
/**
 * match-tokens-to-bundle.mjs — 토큰 값이 **캡쳐 번들에 실제로 있는지** 대조한다.
 *
 * 왜 (2026-09-17). `verification_v2`가 없는 299개 중 21개는 번들을 갖고 있어 "가장 싼
 * 묶음"처럼 보인다. 그런데 21개 전부 `tokens.source: prose-derived`다 — **값이 번들
 * 관측이 아니라 산문에서 전사됐다**는 뜻이다. 번들을 출처로 그냥 붙이면 클레임 수는
 * 늘지만 근거를 지어내는 것이고, 그건 7월 배치가 한 일과 같은 종류다.
 *
 * 그래서 leaf마다 묻는다: **이 값이 번들 어딘가에 실제로 나타나는가.**
 *   matched   — 번들 원소의 계산 스타일에 같은 값이 있다 → 그 표면을 근거로 클레임 가능
 *   absent    — 번들에 없다 → 클레임하지 않는다. 산문에만 있는 값으로 남는다
 *
 * 색은 rgb/hex를 정규화해 비교하고, 치수는 px 숫자로 비교한다. 폰트 패밀리는 부분일치를
 * 허용한다(번들은 폴백까지 담은 전체 스택을 담는다).
 *
 * **쓰지 않는다. 분류만 한다.**
 *
 * usage: node scripts/match-tokens-to-bundle.mjs <id> [--verbose]
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";
import { collectCanonicalClaimPaths } from "./lib/reference-quality.mjs";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ROOT = resolve(WEB, "..");

const hex = (v) => {
  const s = String(v).trim().toLowerCase();
  const m = s.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)\s*(?:[,/]\s*([\d.]+)\s*)?\)$/);
  if (m && (m[4] === undefined || Number(m[4]) === 1))
    return "#" + [m[1], m[2], m[3]].map((n) => Math.round(Number(n)).toString(16).padStart(2, "0")).join("");
  if (/^#[0-9a-f]{3}$/.test(s)) return "#" + s.slice(1).split("").map((c) => c + c).join("");
  return s;
};
const num = (v) => { const m = String(v ?? "").match(/(-?[\d.]+)/); return m ? Number(m[1]) : null; };

const id = process.argv[2];
if (!id) { console.error("usage: match-tokens-to-bundle.mjs <id>"); process.exit(2); }
const design = join(WEB, "references", id, "DESIGN.md");
const bundlePath = join(ROOT, "artifacts", "reference-evidence", `${id}.json`);
if (!existsSync(design) || !existsSync(bundlePath)) { console.error("레퍼런스 또는 번들 없음"); process.exit(1); }

const front = yaml.load(readFileSync(design, "utf8").match(/^---\n([\s\S]*?)\n---/)[1], { schema: yaml.JSON_SCHEMA });
const bundle = JSON.parse(readFileSync(bundlePath, "utf8"));

/** 번들이 관측한 값 전부를 표면별로 색인한다. */
const seen = new Map();          // 정규화된 값 -> Set(surfaceId)
const fonts = new Map();
for (const surface of bundle.surfaces ?? []) {
  const sid = surface.id ?? "?";
  for (const el of surface.elements ?? []) {
    for (const [prop, raw] of Object.entries(el.style ?? {})) {
      if (raw == null || raw === "") continue;
      if (prop === "fontFamily") { for (const f of String(raw).split(",")) {
        const k = f.trim().replace(/^["']|["']$/g, "").toLowerCase();
        if (k) { if (!fonts.has(k)) fonts.set(k, new Set()); fonts.get(k).add(sid); } } continue; }
      const key = hex(raw);
      if (!seen.has(key)) seen.set(key, new Set());
      seen.get(key).add(sid);
      const n = num(raw);
      if (n !== null && /radius|width|size|height|spacing|padding|margin|gap/i.test(prop)) {
        const nk = `${n}px`;
        if (!seen.has(nk)) seen.set(nk, new Set());
        seen.get(nk).add(sid);
      }
    }
  }
}

function leaf(tokens, path) {
  return path.split(".").slice(1).reduce((n, k) => (n == null ? n : n[k]), tokens);
}

/**
 * 계산 스타일에 나타날 수 없는 leaf. `type: card`나 `use: "Primary action…"`은 사람이
 * 쓴 서술이지 픽셀이 아니다 — 번들에 있을 리가 없고, 없다고 해서 근거 없는 값도 아니다.
 * 첫 판에서 이걸 분모에 넣어 `note`의 매칭률이 56%로 나왔는데, 실패 22건 중 12건이
 * 이 부류였다. 클레임은 여전히 필요하지만 method가 computed-style이 아니라 official-doc
 * 이나 편집 판단이다. 매칭률은 **스타일을 담는 leaf에 대해서만** 말이 된다.
 */
const DESCRIPTIVE = /\.(?:type|use|note|states|source|extracted|components_harvested)$/;

const paths = collectCanonicalClaimPaths(front?.tokens) ?? [];
const matched = [], absent = [], descriptive = [];
for (const p of paths) {
  const v = leaf(front.tokens, p);
  if (DESCRIPTIVE.test(p)) { descriptive.push({ p, v }); continue; }
  if (v === undefined || v === null || typeof v === "object") { absent.push({ p, v, why: "값 아님" }); continue; }
  const s = String(v).trim();
  /**
   * 색값에는 숫자 폴백을 쓰지 않는다. `num("#000000")`은 `000000`을 0으로 파싱하고,
   * 번들에는 `padding: 0px`가 널려 있어서 **없는 색이 매칭됐다고 나온다.** 실제로
   * `note`에서 그랬다 — 번들 어느 속성에도 `#000000`이 없는데 matched로 셌다.
   */
  const isColour = /^#[0-9a-f]{3,8}$/i.test(s) || /^(?:rgb|hsl|oklch|oklab|color)\(/i.test(s);
  let where = seen.get(hex(s));
  if (!where && !isColour) { const n = num(s); if (n !== null) where = seen.get(`${n}px`); }
  if (!where && /font|family/i.test(p)) {
    for (const [f, sids] of fonts) if (s.toLowerCase().includes(f) || f.includes(s.toLowerCase())) { where = sids; break; }
  }
  if (where) matched.push({ p, v: s, surfaces: [...where] });
  else absent.push({ p, v: s });
}

console.log(`\n${id} — 번들 대조 (캡쳐 ${bundle.capturedAt?.slice(0,10) ?? "?"}, 표면 ${(bundle.surfaces??[]).length}개)`);
const styleBearing = matched.length + absent.length;
const pct = (n) => styleBearing ? `${(100 * n / styleBearing).toFixed(0)}%` : "-";
console.log(`  canonical 경로 ${paths.length}개 = 스타일 ${styleBearing} + 서술 ${descriptive.length}`);
console.log(`  matched  ${String(matched.length).padStart(4)}  (스타일의 ${pct(matched.length)})  → 번들을 근거로 클레임 가능`);
console.log(`  absent   ${String(absent.length).padStart(4)}  (스타일의 ${pct(absent.length)})  → 번들에 없다`);
console.log(`  서술     ${String(descriptive.length).padStart(4)}  → type/use 등, 픽셀 근거가 아니다`);
if (process.argv.includes("--verbose")) {
  console.log("\n  matched:");
  for (const m of matched.slice(0, 40)) console.log(`    ${m.p.padEnd(46)} ${String(m.v).slice(0,22).padEnd(22)} ${m.surfaces.join(",")}`);
  console.log("\n  absent:");
  for (const a of absent.slice(0, 30)) console.log(`    ${a.p.padEnd(46)} ${String(a.v).slice(0,30)}`);
}
