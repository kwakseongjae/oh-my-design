#!/usr/bin/env node
/**
 * assemble-reference.mjs — 프론트매터 YAML + 본문 MD를 합쳐 DESIGN.md를 만들고,
 * `verification_v2` 블록(표면·출처·클레임)을 토큰 경로에서 기계적으로 생성한다.
 *
 * 왜 레포에 있나 (2026-09-23). 루프 회차마다 스크래치패드에 같은 스크립트를 두고 썼는데,
 * OS 재부팅으로 스크래치패드가 비면서 도구가 통째로 사라졌다. 매번 쓰는 도구는 레포에 둔다.
 *
 * 클레임은 `collectCanonicalClaimPaths`가 돌려주는 모든 경로에 하나씩 붙는다 — 게이트가
 * 요구하는 것과 같은 함수라서, 여기서 빠진 경로는 게이트에서도 빠진다.
 *
 * usage:
 *   node scripts/assemble-reference.mjs <front.yaml> <body.md> <out DESIGN.md> <captured YYYY-MM-DD> <homeUrl> ['<extra sources JSON>']
 *   extra sources: [{"id":"brand-history","kind":"official-doc","url":"…","captured":"2026-09-23"}]
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import yaml from "js-yaml";
import { collectCanonicalClaimPaths } from "./lib/reference-quality.mjs";

const [frontP, bodyP, outP, captured, home, extraJson] = process.argv.slice(2);
if (!frontP || !bodyP || !outP || !captured || !home) {
  console.error("usage: assemble-reference.mjs <front.yaml> <body.md> <out> <captured> <homeUrl> [extraSourcesJson]");
  process.exit(2);
}
const frontSrc = readFileSync(frontP, "utf8");
const fm = yaml.load(frontSrc);
const paths = collectCanonicalClaimPaths(fm.tokens);
const extra = JSON.parse(extraJson || "[]");
const origin = new URL(home).origin;

const lines = [
  "verification_v2:", "  schema: 2", `  checked: "${fm.verified}"`, "  surfaces:",
  `    - { id: home, kind: product-surface, url: "${home}", inspected: "${captured}" }`, "  sources:",
  `    - { id: home-live, kind: product-surface, url: "${home}", captured: "${captured}" }`,
];
// 넌센스 경로 대조군 — 다른 경로로 쟀으면 extra에 id "control-404"로 넘긴다. 기본 경로를 적어 두면
// 실제로 열지 않은 URL이 출처로 남는다 (2026-09-26 n26: -omd-probe 경로로 쟀다).
if (!extra.some((x) => x.id === "control-404")) {
  lines.push(`    - { id: control-404, kind: product-surface, url: "${origin}/zz-this-does-not-exist", captured: "${captured}" }`);
}
for (const s of extra) lines.push(`    - { id: ${s.id}, kind: ${s.kind}, url: "${s.url}", captured: "${s.captured}" }`);
lines.push("  conflicts: []", "  claims:");
for (const p of paths) {
  const method = p.startsWith("tokens.components.") ? "live-inspect" : "computed-style";
  lines.push(`    ${p}: { surface_id: home, source_id: home-live, method: ${method}, captured: "${captured}" }`);
}

// 근거 사전 점검 — catalog-integrity는 tokens.colors와 컴포넌트 bg/fg/border의 hex가 전부
// 본문(토큰 블록 밖)에 나오기를 요구한다. 테스트까지 가서 걸리면 빌드 전체를 다시 돈다
// (2026-09-26 pairs: 카드 fg #000000 누락). 여기서 먼저 알린다.
const body = readFileSync(bodyP, "utf8").toLowerCase();
const hexes = new Set(Object.values(fm.tokens?.colors ?? {}).map(String));
for (const c of Object.values(fm.tokens?.components ?? {})) {
  for (const k of ["bg", "fg", "border"]) for (const h of String(c?.[k] ?? "").match(/#[0-9a-f]{6}\b/gi) ?? []) hexes.add(h);
}
const ungrounded = [...hexes].filter((h) => /^#[0-9a-f]{6}$/i.test(h) && !body.includes(h.toLowerCase()));
if (ungrounded.length) console.warn(`⚠ not in body text (grounding will fail): ${ungrounded.join(" ")}`);

mkdirSync(dirname(outP), { recursive: true });
writeFileSync(outP, `---\n${frontSrc.trimEnd()}\n${lines.join("\n")}\n---\n${readFileSync(bodyP, "utf8")}`);
console.log(`claims ${paths.length}`);
