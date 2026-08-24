# T2-1 웨이브 9 재확인 — sol 집중 재심

- 대상: `docs/design-md-weight/migrated/{appier,asana,asleep,asos,au}/`
- 선행 판정: `docs/reviews/t2-1-wave9-2026-08-24-sol-full.md`의 건별 「재제출 조건」
- 판정 경계: 선행 목록만 대조했다. 새 기준을 추가하지 않았고 새 F3를 실행하거나 요구하지 않았다.
- 재확인일: 2026-08-24 · 검증자: sol

## 건별 판정

### appier — PASS (4/4)

1. **PASS — Avoid 전체 한정.** 여섯 Don’t 전체가 source reconstruction의 derived editorial application으로 인접·완전 한정됐다(`DESIGN.md:72-79`; `provenance.md:129`; `migration-log.md:99,106,110`).
2. **PASS — broad first-party-mark gap 삭제.** Named gaps에는 해당 부재 주장이 없고, Google favicon의 capture boundary만 별도로 유지된다(`DESIGN.md:81,544-554`; `provenance.md:118`; `migration-log.md:100,111-112`).
3. **PASS — 원장 동기화.** Avoid inventory, favicon disposition, D1/E2/F1/F2가 wave9 revision과 current-class에 맞고 과거 muddy-only/closed 주장은 supersede됐다(`provenance.md:118-129`; `migration-log.md:93-114`; `audit-log.md:130-132`).
4. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `6f3522756978d501470a41cf36b0dd5844f950a1727e3ff62f973ddfa162128e`가 `migration-log.md:102`와 일치한다.

**appier 판정: PASS.**

### asana — FAIL (4/6)

1. **FAIL — §9 tuple은 복원됐으나 provenance disposition이 남음.** Hero subhead+black/ghost pair, Pricing plan-name/price, Grey feature headline/body/badge tuple 자체는 component 문맥에 정확히 복원됐다(`DESIGN.md:263,432-435,446-450`; `migration-log.md:54,67-69`). 그러나 active `provenance.md:104` 제목이 여전히 `Omitted prompt-only values`이고, 그 아래 복원된 세 tuple `provenance.md:109-111`이 종속된다. 실제 prompt-only인 Nav 항목과 복원된 tuple의 disposition이 제목 수준에서 충돌하므로 선행 조건 1의 “§9 provenance/disposition을 고친다”가 완결되지 않았다.
2. **PASS — Ghost/Content evidence 분리.** TWK Lausanne은 live, Ghost는 Refero Tier 2로 분리됐고, homepage Observed에는 원본 세 string만 남는다. CTA labels와 pricing tiers도 component/pricing surface로 분리됐다(`DESIGN.md:15,184-188,558-566`; `provenance.md:74,87,128`; `migration-log.md:55,70-71`).
3. **PASS — unsupported negative 삭제.** official-product typography, exclusive distributed family, Ghost loaded-source URL, complete product-microcopy guide 부재 주장은 현재 본문에서 제거됐다(`DESIGN.md:180-188,622-629`; `provenance.md:136`; `migration-log.md:56,72`; `audit-log.md:122-124`).
4. **PASS — stakeholder Audience 재승격 삭제.** persona-derived segment labels는 Audience 값으로 재사용되지 않고 exclusion boundary와 독립 검증된 세 primary task만 남는다(`DESIGN.md:20-30`; `provenance.md:137`; `migration-log.md:57,72`).
5. **PASS — §11 관계 복원.** founding cause, coordination premise→clarity/public-writing, three-dot logo evolution이 인접 완전 B2a 아래 복원됐다(`DESIGN.md:17`; `provenance.md:136`; `migration-log.md:58,63,73`).
6. **FAIL — 원장/F2 동기화 미완결.** migration revision/F2와 audit current-class, 두 기계 검사와 새 SHA는 맞지만(`migration-log.md:48-75`; `audit-log.md:122-124`), 조건 1의 active provenance 제목이 복원된 tuple을 계속 omitted prompt-only로 포괄한다. SHA-256은 `cfabe335a9f5c6c2b4deacdfb99ecc1a9ed30a4d9cd144dd7585e21131be951f`이고 gate/Core는 통과했다.

**asana 판정: FAIL.**

### asleep — FAIL (3/4)

1. **PASS — Outlined `transparent`.** `Background: transparent`가 Outlined에만 복원됐고 §9-only component-local renderable field로 경계됐다(`DESIGN.md:274,283`; `provenance.md:119`; `migration-log.md:67,78`).
2. **PASS — Docs Search error 생략.** Docs Search map에는 default/hover/focus-visible/disabled만 있고 loading/error/success는 primitive `Form field`나 `not-applicable`로 닫지 않은 채 생략됐다(`DESIGN.md:308-315`; `provenance.md:141`; `migration-log.md:68,79-80`).
3. **FAIL — provenance line map 미동기화.** active derived inventory의 Outlined field-note 목적지 `(282)`는 현재 `DESIGN.md:282`의 `Observed: default only`를 가리키며 실제 field note는 `DESIGN.md:283`이다. Docs Search field-note 목적지 `(305)`도 현재 `DESIGN.md:305`의 `Observed: default only`를 가리키고 실제 field note는 `DESIGN.md:306`이다(`provenance.md:184-185`). 의미 문장과 migration/audit current-class는 고쳐졌지만 이 두 active 목적지가 남아 선행 조건 3의 provenance/F2 동기화가 완결되지 않았다.
4. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `f9c6eaa555423dae18fdcb5801bb60dc55837b71a0d11808ce98c51eb60bb233`가 `migration-log.md:70`과 일치한다.

**asleep 판정: FAIL.**

### asos — FAIL (3/4)

1. **PASS — typography casing.** display/navigation uppercase와 body/product-description mixed-case 대조가 Type rules에 복원됐다(`DESIGN.md:195`; `provenance.md:188`; `migration-log.md:120,132`).
2. **PASS — Size Selector primitive.** source Inputs heading에 근거한 `Type: input`이 복원됐고 해당 Named gap은 삭제됐다(`DESIGN.md:255,391,400,634-643`; `provenance.md:151`; `migration-log.md:121,133,135`).
3. **PASS — Add to Bag L/E/S.** loading/error/success가 원본 Add-to-bag role에 따라 applicable로 복원됐고 시각값은 §14 guidance이지 computed paint가 아니라는 evidence class를 유지한다(`DESIGN.md:232-253,273-281`; `provenance.md:154`; `migration-log.md:122,128,134,136`).
4. **FAIL — migration 원장 line map 미동기화.** active source row `migration-log.md:36`은 Named gaps C2를 `639`, C4를 `641`로 가리키지만 현재 실제 위치는 각각 `DESIGN.md:641`과 `DESIGN.md:642`다. Add-to-Bag C2/Size Selector 개정 뒤 남은 현행 목적지 불일치이므로 선행 조건 4의 provenance/migration/audit/F2 동기화가 완결되지 않았다. 두 기계 검사는 통과했고 SHA-256은 `7fa00a2f82183231bf91133e0b38411889a9e31362556175ba3d0a64258fc218`로 `migration-log.md:124`와 일치한다.

**asos 판정: FAIL.**

### au — FAIL (4/5)

1. **PASS — home/mobile 관계.** home task는 home URL만 유지하고 global navigation/header search는 claim metadata와 같은 mobile/mobile-capture task에 묶였다(`DESIGN.md:27-31`; `provenance.md:52-57,181`; `migration-log.md:57,69-70`).
2. **PASS — voice table authority.** 네 voice adjectives와 respect requirement만 first-party로 남고, English Do/Don’t 구현 문장은 source-reconstruction derived editorial implementation으로 인접·완전 한정됐다(`DESIGN.md:337-348`; `provenance.md:208`; `migration-log.md:58,71-72`).
3. **PASS — broad reusable-copy gap 삭제.** 세 sample direction의 bounded `not reusable au copy` 경계만 남고 Named gaps의 broad reusable-copy bullet은 제거됐다(`DESIGN.md:350-352,384-397`; `migration-log.md:59,73-74`).
4. **FAIL — authority/D1 원장 line map 미동기화.** active derived inventory `provenance.md:208`은 Do/Don’t B2a를 `(339)`로 가리키지만 `DESIGN.md:339`는 first-party respect requirement이고 실제 derived qualifier는 `DESIGN.md:341`이다. `provenance.md:209`도 no-synthetic B2a를 `(350)`으로 가리키지만 `DESIGN.md:350`은 bounded sample이고 실제 qualifier는 `DESIGN.md:352`다. 선행 조건 4의 authority class·D1·F1/F2 동기화가 완결되지 않았다.
5. **PASS — 기계 검사/SHA.** 현재 파일에서 gate PASS/problems `[]`, Core exit 0/`portable_core: true`; SHA-256 `dc98ae41e1c3800965ecf3c272aa78d5baa6a13f13068b2262ac16e1fa954f90`가 `migration-log.md:61`과 일치한다.

**au 판정: FAIL.**

## 현재 파일 기계 재검증

| 대상 | `--gate-only` | Core `--check --require-portable-core` | DESIGN SHA-256 |
|---|---|---|---|
| appier | PASS, problems 0 | exit 0, `portable_core: true` | `6f3522756978d501470a41cf36b0dd5844f950a1727e3ff62f973ddfa162128e` |
| asana | PASS, problems 0 | exit 0, `portable_core: true` | `cfabe335a9f5c6c2b4deacdfb99ecc1a9ed30a4d9cd144dd7585e21131be951f` |
| asleep | PASS, problems 0 | exit 0, `portable_core: true` | `f9c6eaa555423dae18fdcb5801bb60dc55837b71a0d11808ce98c51eb60bb233` |
| asos | PASS, problems 0 | exit 0, `portable_core: true` | `7fa00a2f82183231bf91133e0b38411889a9e31362556175ba3d0a64258fc218` |
| au | PASS, problems 0 | exit 0, `portable_core: true` | `dc98ae41e1c3800965ecf3c272aa78d5baa6a13f13068b2262ac16e1fa954f90` |

## 남은 재제출 조건

- **asana:** `provenance.md:104`의 broad omitted 제목을 실제 disposition에 맞게 바꾸거나, prompt-only Nav 항목과 복원된 tuple `provenance.md:109-111`을 별도 절로 분리한다.
- **asleep:** `provenance.md:184-185`의 현행 목적지를 `(282→283)`, `(305→306)`으로 맞춘다.
- **asos:** `migration-log.md:36`의 Named gaps C2/C4 목적지를 현재 `DESIGN.md:641-642`에 맞춘다.
- **au:** `provenance.md:208-209`의 B2a 목적지를 `(339→341)`, `(350→352)`로 맞춘다.

위 네 항목은 모두 선행 판정의 원장/disposition 동기화 조건 안에 있다. 새 기준이나 새 F3는 요구하지 않는다.

**전체: FAIL — appier PASS / asana FAIL / asleep FAIL / asos FAIL / au FAIL (선행 재제출 조건 18/23, 새 F3 없음).**
