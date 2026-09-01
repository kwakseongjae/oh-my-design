#!/usr/bin/env node
/**
 * B2a 1:1 불변식 검사 — 본문 완전형 한정 수 == provenance 파생-편집 원장 데이터행 수.
 *
 * 매 웨이브 손으로 grep 정규식을 다시 짜다 오탐이 세 번 났다. 세 번 다 같은 원인이었다:
 * 표기가 브랜드마다 갈리는데 고정 패턴으로 셌다.
 *
 *   - 본문 한정의 브랜드 토큰에 공백이 들어간다 (`not Kyobo Book Centre-authored`).
 *     `[A-Za-z0-9]+-authored`로 세면 그 브랜드가 통째로 0이 된다.
 *   - 원장 절 제목이 최소 네 가지다 — `Derived editorial inventory`,
 *     `Derived-editorial inventory (...)`, `Portable derived-editorial scope`,
 *     `B2a ledger (portable-body qualifications)`.
 *   - 완전형의 첫 조각도 도메인 변형을 받는다 (`implementation inference` /
 *     `task model` / `state specification`, 복수형 포함).
 *
 * usage: node scripts/check-limiter-ledger.mjs <brand...>
 *        node scripts/check-limiter-ledger.mjs --wave krds kream kurly kyobobook lablup
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const MIGRATED = "docs/design-md-weight/migrated";

// 완전형 세 조각. 셋이 같은 줄에 있어야 한 건으로 센다.
const FRAGMENTS = [
  /derived editorial (implementation inferences?|task models?|state specifications?)/i,
  // 브랜드명은 여러 단어일 수 있고(`not Kyobo Book Centre-authored`) 점도
  // 들어간다(`not maum.ai-authored` — 웨이브 44에서 [^.;]가 이 브랜드를 통째로
  // 0으로 만들었다). 문장 경계를 넘는 폭주만 막고 나머지는 허용한다.
  /\bnot [A-Za-z0-9가-힣][A-Za-z0-9가-힣 .&'-]{0,58}-authored/i,
  /separately published/i,
];

// 원장 절: 「파생-편집」계열 제목 또는 B2a 원장. 표기 변형을 전부 받는다.
const LEDGER_HEADING =
  /^#{2,4}\s+.*(derived[- ]editorial|b2a\s+ledger).*(inventory|scope|ledger|qualifications)/i;

function countBody(md) {
  return md
    .split("\n")
    .filter((line) => FRAGMENTS.every((re) => re.test(line))).length;
}

function countLedger(prov) {
  const lines = prov.split("\n");
  const start = lines.findIndex((l) => LEDGER_HEADING.test(l));
  if (start < 0) return { rows: null, heading: null, first: null, last: null };
  let rows = 0;
  let first = null;
  let last = null;
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^#{2,4}\s/.test(l)) break;
    if (!l.startsWith("|")) continue;
    if (/^\|\s*:?-{2,}/.test(l)) continue; // 구분행
    // 헤더행: 첫 셀이 표 머리말 상투어면 건너뛴다
    if (/^\|\s*(#|no\.?|section|location|위치|절|항목)\s*\|/i.test(l)) continue;
    rows++;
    if (first === null) first = i + 1;
    last = i + 1;
  }
  return { rows, heading: lines[start].replace(/^#+\s*/, ""), first, last };
}

const brands = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!brands.length) {
  console.error("usage: check-limiter-ledger.mjs <brand...>");
  process.exit(1);
}

let bad = 0;
for (const brand of brands) {
  const dir = join(MIGRATED, brand);
  const designPath = join(dir, "DESIGN.md");
  const provPath = join(dir, "provenance.md");
  if (!existsSync(designPath) || !existsSync(provPath)) {
    console.log(`  ${brand.padEnd(13)}산출물 없음 — 미측정`);
    bad++;
    continue;
  }
  const body = countBody(readFileSync(designPath, "utf8"));
  const { rows, heading, first, last } = countLedger(readFileSync(provPath, "utf8"));
  if (rows === null) {
    console.log(`  ${brand.padEnd(13)}본문=${String(body).padStart(3)} 원장=절없음  FAIL`);
    bad++;
    continue;
  }
  const ok = body === rows;
  if (!ok) bad++;
  console.log(
    `  ${brand.padEnd(13)}본문=${String(body).padStart(3)} 원장=${String(rows).padStart(3)}` +
      ` (${first}–${last})  ${ok ? "1:1 OK" : "MISMATCH"}   ${heading}`,
  );
}

process.exit(bad ? 1 : 0);
