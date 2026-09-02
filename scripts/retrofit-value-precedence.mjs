#!/usr/bin/env node
// 이관본 DESIGN.md에 소비자 충돌 우선순위 절(Value precedence)을 소급 부착한다.
//
// 배경 (2026-09-01): DESIGN.md 생태계 4축 조사에서 Vercel design.md의 "priority
// order"(충돌 시 소비자가 따를 위계)를 차용하기로 했다(#81). Core v2는 충돌을
// keep-both로 보존하는 데는 강한데, 소비자가 그 쌍을 만났을 때 어느 쪽을 따를지가
// 규격에 없었다. 웨이브 45부터는 워커가 직접 넣고, 이 스크립트는 기존 이관본을
// 소급한다 — 사용자 지시.
//
// 안전 설계:
//   - 블록은 파일 **끝에 append** — 기존 줄 번호가 밀리지 않아 원장의
//     `DESIGN.md:<n>` 줄 포인터(gangnamunni 등)가 깨지지 않는다.
//   - 블록에는 완전형 한정 조각(derived editorial / -authored / separately
//     published)도, YAML `use:`도 없다 — 1:1·use-landing 계수 불변.
//   - 마지막 문장이 이 절을 Core v2 소비자 지침으로 명시한다 — 브랜드 주장이
//     아니므로 F3의 B2a·D1 대상이 아니다 (B3 게이트 전문과 같은 표준 블록 지위).
//   - 멱등: 이미 있으면 건너뛴다.
//
// usage: node scripts/retrofit-value-precedence.mjs [--write] [brand...]
//        브랜드 생략 시 DONE.txt 전체. --write 없으면 드라이런.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const MIGRATED = "docs/design-md-weight/migrated";
const HEADING = "## Value precedence";

export const BLOCK = `
${HEADING}

When two recorded values conflict, this contract keeps both and attributes each
to the surface or evidence class that established it. A consumer resolves the
pair in this order:

1. Project-level overrides recorded outside this file (for example
   \`.omd/preferences.md\`).
2. The value captured on the surface being built (same URL or surface class).
3. The value the brand publishes in its design system, where no capture covers
   the target surface.
4. Narrative context — history, voice, positioning — which frames intent but
   never overrides a measured token.

Do not average a kept-both pair, and do not promote a narrative fact into a
token. This section is DESIGN.md Core v2 consumer guidance, not a claim
authored by the brand.
`;

// 2026-09-01 롤백 사유: 평면 append가 Core v2 7앵커 구조를 깨서 215개 전부
// portable_core:false가 됐다 ("not a structurally valid seven-anchor Core v2 file").
// 게이트는 통과해 파일럿에서 못 봤다 — 게이트와 적합성은 다른 검사다. 올바른 자리는
// 새 H2가 아니라 기존 application-priority 앵커 **안**이다 (#81에 기록).
const strip = process.argv.includes("--strip");
const write = process.argv.includes("--write");
let brands = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!brands.length)
  brands = readFileSync(join(MIGRATED, "DONE.txt"), "utf8")
    .split("\n")
    .map((l) => l.trim())
    // DONE.txt는 주석(#)을 품는다 — 웨이브 42에서 이걸 안 걸러 14개 부재로 오독했다.
    .filter((l) => l && !l.startsWith("#"));

let appended = 0, skipped = 0, missing = 0;
for (const brand of brands) {
  const p = join(MIGRATED, brand, "DESIGN.md");
  if (!existsSync(p)) { missing++; continue; }
  const t = readFileSync(p, "utf8");
  if (strip) {
    if (!t.includes(HEADING)) { skipped++; continue; }
    const cut = t.indexOf("\n" + HEADING);
    writeFileSync(p, t.slice(0, cut).replace(/\n*$/, "\n"));
    appended++;
    continue;
  }
  if (t.includes(HEADING)) { skipped++; continue; }
  if (write) writeFileSync(p, t.replace(/\n*$/, "\n") + BLOCK.replace(/^\n/, "\n"));
  appended++;
}
console.log(JSON.stringify({ mode: write ? "write" : "dry-run", brands: brands.length, appended, skipped, missing }));
