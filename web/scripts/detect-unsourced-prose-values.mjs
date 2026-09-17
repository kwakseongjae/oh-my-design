#!/usr/bin/env node
/**
 * detect-unsourced-prose-values.mjs — **토큰 블록 밖 산문**에 적힌 수치 주장 중
 * 근거가 없는 것을 찾는다.
 *
 * 왜 있나 (2026-09-17). 품질 평가기는 `tokens.*`의 leaf만 검사한다. 클레임 경로가
 * `tokens.colors.primary` 같은 형태라서, **본문 산문에만 있는 값은 검사 대상이 아니다.**
 * 그래서 증거 없는 수치가 토큰 층 밖에 있으면 현재 어떤 게이트도 통과한다.
 *
 * 그 구멍으로 무엇이 들어왔는지 실측: 캡쳐 하네스는 모션 속성을 **하나도** 수집하지 않는데
 * (번들 `elements[].style`에 transition/animation 키가 없다) 254개 레퍼런스가
 * `motion-instant/fast/standard/slow/page` 스케일을 사실로 싣고 있다.
 * `motion-fast 120ms`가 147개 브랜드에 동일하게 나온다 — 147개가 독립적으로 같은 값을
 * 고르지 않는다. 관측이 아니라 템플릿이다.
 *
 * 프로젝트는 이미 올바른 처리를 세 번 보여줬다:
 *   toss      — `.verification.md`: "motion values were removed from the canonical token block"
 *   banksalad — 관측 1건만 본문에 두고 나머지는 <details> 안에 synthetic으로 격리
 *   ridi      — (반례) `.verification.md`가 §15를 "written with ... tone"이라고 적었다.
 *               톤에 맞춰 작성했다는 뜻이고, 그게 본문에는 사실로 실려 있다.
 *
 * 이 스크립트는 **지우지 않는다.** 브랜드 공식 문서가 모션 토큰을 실제로 발행한 경우가
 * 있어서, Tier-1 대조 없이 일괄 삭제하면 그것도 삭제다. 분류만 한다.
 *
 * 신뢰도 등급:
 *   template  — 값 서명이 다른 레퍼런스와 겹친다. 생성된 것이 거의 확실하다.
 *   unsourced — 값이 고유하지만 토큰에도 없고 `.verification.md`도 근거를 대지 않는다.
 *   grounded  — 토큰에 있거나 검증 파일이 관측을 기록했다.
 *   declared-absent — 값을 싣지 않고 부재를 명시했다. 올바른 상태.
 *
 * usage:
 *   node scripts/detect-unsourced-prose-values.mjs            # 요약
 *   node scripts/detect-unsourced-prose-values.mjs --list <등급>
 *   node scripts/detect-unsourced-prose-values.mjs --json
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const WEB = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REFS = join(WEB, "references");

/** 조사할 산문 영역. 섹션 제목으로 찾는다 — 번호는 레퍼런스마다 다르다. */
const DOMAINS = [
  { key: "motion", heading: /^##\s*\d*\.?\s*Motion/i,
    value: /\b\d{2,4}\s?ms\b|cubic-bezier\([^)]*\)/g,
    tokenPaths: ["motion", "transition", "easing", "duration"] },
  { key: "elevation", heading: /^##\s*\d*\.?\s*(?:Depth|Elevation)/i,
    value: /\b\d+px\s+\d+px[^,\n|]*rgba?\([^)]*\)|\b\d+px\s+\d+px\s+\d+px/g,
    tokenPaths: ["shadow", "elevation"] },
];

/** 부재를 명시했는가. 이게 우리 규칙이 요구하는 상태다. */
const DECLARES_ABSENCE = /no canonical|not promoted|was not verified|no broader|unresolved|not established|없(?:다|음)|미확인/i;
/** 생성물임을 스스로 표시했는가 (banksalad 방식). */
const SELF_QUARANTINED = /synthetic|not verified product facts|superseded|<details>/i;

function section(body, heading) {
  const parts = body.split(/^(##\s.+)$/m);
  for (let i = 1; i < parts.length; i += 2) if (heading.test(parts[i])) return parts[i + 1];
  return null;
}

function flatten(node, out = []) {
  if (node == null) return out;
  if (typeof node !== "object") { out.push(String(node)); return out; }
  for (const v of Object.values(node)) flatten(v, out);
  return out;
}

const records = [];
for (const id of readdirSync(REFS).sort()) {
  const design = join(REFS, id, "DESIGN.md");
  if (!existsSync(design)) continue;
  const raw = readFileSync(design, "utf8");
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) continue;
  let front; try { front = yaml.load(fmMatch[1], { schema: yaml.JSON_SCHEMA }); } catch { continue; }
  const body = raw.slice(fmMatch[0].length);
  const verificationPath = join(REFS, id, ".verification.md");
  const verification = existsSync(verificationPath) ? readFileSync(verificationPath, "utf8") : "";
  const tokenText = flatten(front?.tokens).join(" ");

  for (const domain of DOMAINS) {
    const seg = section(body, domain.heading);
    if (seg == null) continue;
    const values = [...new Set((seg.match(domain.value) ?? []).map((v) => v.replace(/\s+/g, " ").trim()))];
    if (values.length === 0) {
      records.push({ id, domain: domain.key, grade: DECLARES_ABSENCE.test(seg) ? "declared-absent" : "no-values", values: [], bytes: seg.length });
      continue;
    }
    // 토큰 블록이 같은 값을 갖고 있으면 클레임 경로가 있다 — 평가기가 이미 본다.
    const inTokens = values.filter((v) => tokenText.includes(v)).length;
    // 검증 파일이 그 값을 적었으면 누군가 관측했다는 기록이다.
    const inVerification = values.filter((v) => verification.includes(v)).length;
    const grade = SELF_QUARANTINED.test(seg) ? "self-quarantined"
      : (inTokens > 0 || inVerification > 0) ? "grounded"
      : "unsourced";
    records.push({ id, domain: domain.key, grade, values, inTokens, inVerification, bytes: seg.length });
  }
}

/**
 * 표준 이징 곡선은 겹쳐도 템플릿 증거가 아니다.
 * `cubic-bezier(0.25, 0.1, 0.25, 1)`은 CSS `ease`의 정의 그 자체이고,
 * `(0.4, 0, 1, 1)`·`(0, 0, 0.2, 1)`·`(0.4, 0, 0.2, 1)`은 Material의 표준 곡선이다.
 * 서로 무관한 브랜드가 같은 값을 갖는 이유가 "베껴서"가 아니라 "표준이라서"일 수 있다.
 * 과잉 고발을 막으려고 공유 신호에서 뺀다.
 */
const STANDARD_CURVE = new Set([
  "cubic-bezier(0.25, 0.1, 0.25, 1)",  // CSS ease
  "cubic-bezier(0, 0, 1, 1)",          // CSS linear
  "cubic-bezier(0.42, 0, 1, 1)",       // CSS ease-in
  "cubic-bezier(0, 0, 0.58, 1)",       // CSS ease-out
  "cubic-bezier(0.42, 0, 0.58, 1)",    // CSS ease-in-out
  "cubic-bezier(0.4, 0, 1, 1)",        // Material accelerate
  "cubic-bezier(0.4, 0.0, 1, 1)",
  "cubic-bezier(0, 0, 0.2, 1)",        // Material decelerate
  "cubic-bezier(0.0, 0, 0.2, 1)",
  "cubic-bezier(0.4, 0, 0.2, 1)",      // Material standard
  "cubic-bezier(0.4, 0.0, 0.2, 1)",
]);

/** 값 서명이 다른 레퍼런스와 겹치면 템플릿이다. 서로 무관한 브랜드가 같은 숫자를 쓰지 않는다. */
const signatureOwners = new Map();
for (const r of records) {
  if (r.grade !== "unsourced") continue;
  const sig = `${r.domain}|${[...r.values].sort().join(",")}`;
  if (!signatureOwners.has(sig)) signatureOwners.set(sig, []);
  signatureOwners.get(sig).push(r.id);
}
const valueOwners = new Map();
for (const r of records) {
  if (r.grade !== "unsourced") continue;
  for (const v of r.values) {
    if (STANDARD_CURVE.has(v)) continue;          // 표준 곡선은 공유돼도 증거가 아니다
    const k = `${r.domain}|${v}`;
    if (!valueOwners.has(k)) valueOwners.set(k, new Set());
    valueOwners.get(k).add(r.id);
  }
}
for (const r of records) {
  if (r.grade !== "unsourced") continue;
  const judged = r.values.filter((v) => !STANDARD_CURVE.has(v));
  const shared = judged.filter((v) => (valueOwners.get(`${r.domain}|${v}`)?.size ?? 0) >= 10).length;
  // 표준 곡선을 뺀 나머지의 과반이 10개 이상 레퍼런스와 겹치면 고유 관측으로 보기 어렵다.
  if (judged.length > 0 && shared / judged.length >= 0.5) r.grade = "template";
  r.sharedValues = shared;
  r.judgedValues = judged.length;
}

const argv = process.argv.slice(2);
if (argv.includes("--json")) { console.log(JSON.stringify(records, null, 2)); process.exit(0); }
const listIdx = argv.indexOf("--list");
if (listIdx >= 0) {
  const want = argv[listIdx + 1];
  for (const r of records.filter((x) => x.grade === want)) {
    console.log(`${r.id.padEnd(20)} ${r.domain.padEnd(10)} ${String(r.sharedValues ?? 0).padStart(2)}/${String(r.values.length).padStart(2)} shared  ${r.values.slice(0, 6).join(" ")}`);
  }
  process.exit(0);
}

for (const domain of DOMAINS) {
  const rows = records.filter((r) => r.domain === domain.key);
  if (rows.length === 0) continue;
  const by = {};
  for (const r of rows) by[r.grade] = (by[r.grade] ?? 0) + 1;
  console.log(`\n[${domain.key}] ${rows.length} references carry this section`);
  for (const [grade, n] of Object.entries(by).sort((a, b) => b[1] - a[1])) {
    const bytes = rows.filter((r) => r.grade === grade).reduce((s, r) => s + r.bytes, 0);
    console.log(`  ${String(n).padStart(4)}  ${grade.padEnd(17)} ${(bytes / 1024).toFixed(0).padStart(4)} KB`);
  }
}
console.log("\n같은 값을 공유하는 레퍼런스 수 — 상위 (고유 관측이라면 이 숫자가 1이어야 한다):");
for (const [k, owners] of [...valueOwners].sort((a, b) => b[1].size - a[1].size).slice(0, 8)) {
  console.log(`  ${String(owners.size).padStart(4)}개  ${k.replace("|", "  ")}`);
}
