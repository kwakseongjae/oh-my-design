# T2-1 웨이브 1 표본 검토 — sol 의미 레인 (2/5, 40%)

- 대상: `docs/design-md-weight/migrated/{toss,bilibili}/`
- 원본: `web/references/{toss,bilibili}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2 전 조항
- 일시: 2026-08-23
- 전제: 웨이브 5건의 기계 게이트 PASS는 수용했다. 이 문서는 게이트가 식별하지 못하는 의미 보존만 판정한다.

## 판정 요약

| 표본 | 판정 | 차단 조항 |
|---|---|---|
| Toss | **FAIL** | B3, E2 |
| Bilibili | **FAIL** | B2, E2 |

**표본 결과: PASS 0/2, FAIL 2/2.**

## 1. Toss — FAIL

### 1.1 미해상 motion의 승격 게이트 약화 — B3 FAIL

규칙집 B3는 미해상 motion 값을 승격하려면 `transition properties`, animation name, duration, easing, reduced-motion behavior를 **컴포넌트별 computed evidence로 관측한 뒤에만** 가능하다는 조건을 Foundations 본문에 남기도록 요구한다(`MIGRATION_RULEBOOK.md` 35–37행).

이관본은 “공식 컴포넌트 출처로 검증될 때까지 exact curve 또는 duration을 local extension으로 둔다”고만 적고, reduced motion은 구현 호환 지침으로만 둔다(`docs/design-md-weight/migrated/toss/DESIGN.md` 103–105행). 공식 문서에서 curve나 duration 하나를 확인하는 것만으로도 이 문장은 충족될 수 있으므로, 규칙집이 요구한 다섯 증거 종류의 **per-component computed 관측 게이트**와 동치가 아니다.

원본의 generic 경계(`web/references/toss/DESIGN.md` 354–356행)를 보존한 것만으로는 이미 적용 중인 Rulebook v2 B3를 충족하지 않는다. 그런데 migration log는 이 문구가 B3 승격 조건을 유지했다고 기록한다(`docs/design-md-weight/migrated/toss/migration-log.md` 34행). 실제 portable 경계보다 강한 준수 사유를 기록했으므로 이 부분은 E2에도 걸린다.

### 1.2 logo의 실제 이중 disposition을 로그에서 누락 — E2 FAIL

원본 YAML의 logo는 catalog favicon URL이다(`web/references/toss/DESIGN.md` 8–10행). Migration log는 logo를 포함한 YAML identity를 `분리 → provenance`로 기록하고, portable 예외로는 H1 name과 `primary_color` 금지문만 설명한다(`docs/design-md-weight/migrated/toss/migration-log.md` 13행).

실제 산출물은 같은 favicon URL을 provenance뿐 아니라 portable Assets에도 둔다(`docs/design-md-weight/migrated/toss/provenance.md` 15행; `docs/design-md-weight/migrated/toss/DESIGN.md` 141–144행). 따라서 기록된 `provenance` 단일 목적지와 실제 `provenance + Typography & Assets`가 일치하지 않는다.

### 확인된 통과 항목

- **C2:** TDS Button, Text Field, Agreement, 두 marketing CTA의 loading/error/success를 primitive 일괄값이 아니라 각 역할 의미로 판정했다(`DESIGN.md` 181–189, 204–212, 233–241, 260–268, 285–293행).
- **B2:** §12 원칙을 “verified surfaces에서 derived, quoted corporate doctrine이 아님”이라고 portable 본문에서 직접 한정했다(`DESIGN.md` 35–43행).
- **D2:** 원본이 first-party product context라고 한 세 항목만 독립 task 문장으로 흡수했고, 가상 인구통계를 Audience나 provenance에 재수록하지 않았다(원본 337–343행; 이관본 16–26행; `provenance.md` 117행).
- **A3/A4:** §9의 고유 extension 제약을 Experience로 옮겼고, identity `#0064ff`와 UI primary `#3182f6`, marketing weak pair, TDS/marketing geometry 결합을 분리 보존했다(`DESIGN.md` 47–60, 68–97행).
- **B1/C4:** generic focus와 `focus-visible` treatment를 분리했고, descriptive Badge는 non-interactive로 두어 applicability map을 만들지 않았다(`DESIGN.md` 160–162, 191–221행).

### Toss 재제출 조건

1. Foundations Motion에 다섯 증거 종류(`transition properties`, animation name, duration, easing, reduced-motion behavior)를 **컴포넌트별 computed 관측한 뒤에만** motion 값을 승격한다는 B3 게이트를 명시한다.
2. `migration-log.md` §15 행을 개정된 실제 portable 경계와 일치시킨다.
3. favicon을 identity-only로 둘 의도라면 portable Assets에서 제거한다. Portable asset으로 유지할 의도라면 identity 행의 disposition을 `provenance + Typography & Assets`로 고치고 catalog-only favicon이라는 범위를 기록한다.
4. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. Bilibili — FAIL

### 2.1 corporate fact에서 파생한 UI implication의 권위 한정 누락 — B2 FAIL

원본 §12는 공식 기업 서사와 편집자가 만든 세 `UI implication`을 한 항목 안에 결합한다(`web/references/bilibili/DESIGN.md` 265–271행). 이관본은 그 implication을 Experience의 prescriptive Principles로 그대로 올렸지만, 이것이 공식 Bilibili 디자인 원칙이나 별도 발행된 product-system 규격이 아니라 **공식 서사와 관측 표면에서 파생한 편집적 구현 해석**이라는 한정을 인접 portable 본문에 두지 않았다(`docs/design-md-weight/migrated/bilibili/DESIGN.md` 39–43행).

Governance의 일반 문구인 “unrelated target project의 authority가 아님”(`DESIGN.md` 252–265행)은 corporate statement와 derived UI implication의 evidence class를 구분하지 못한다. Migration log도 단순히 세 원칙과 UI implication을 옮겼다고만 기록한다(`docs/design-md-weight/migrated/bilibili/migration-log.md` 33행). 따라서 B2가 요구하는 standalone 권위 한정이 portable에 없다.

### 2.2 여섯 placeholder wrapper의 provenance 보관을 로그에서 누락 — E2 FAIL

원본의 `[FILL IN]`은 responsive 1개, §14 state 4개, motion 1개로 모두 여섯 개다(원본 240, 287, 289–290, 292, 296행). 이관본은 미해상 값을 만들지 않고 실질 제약만 portable의 Layout, Components, Foundations에 남겼다(`docs/design-md-weight/migrated/bilibili/DESIGN.md` 95–97, 140–147, 240–242행). 이 처리 자체는 A1/A2/B3에 맞다.

다만 provenance는 여섯 원문 wrapper를 그대로 보관한다(`docs/design-md-weight/migrated/bilibili/provenance.md` 123–132행). Migration log의 §8, §14, §15 행은 각각 portable 목적지와 “placeholder 값 생략”만 기록하고 이 원문 wrapper의 provenance disposition을 적지 않는다(`docs/design-md-weight/migrated/bilibili/migration-log.md` 28, 35–36행). 값 승격은 아니지만 실제 이동은 `실질 제약 → portable / 원문 placeholder wrapper → provenance omission ledger`의 분기이므로, E2가 요구하는 실제 목적지 원장과 현재 로그가 불완전하게 일치한다.

### 확인된 통과 항목

- **A1/A2:** 여섯 미해상 값은 생성하지 않았고 §14의 Loading/Skeleton 값과 네 미관측 제약은 보존했다(`DESIGN.md` 138–147행).
- **A3/A4:** §9의 고유 금지문과 evidence-domain boundary를 Experience/Components에 보존했다. Search default `#61666d`, focused/pressed fill 및 border candidate `#e3e5e7`, focused/pressed text `#18191c`의 필드 역할도 합치지 않았다(`DESIGN.md` 47–58, 68–75, 186–235행).
- **C2:** Home search와 Feed roll의 loading/error/success를 각 product role로 판정했다. Primitive 종류만을 사유로 일괄 `applicable` 처리한 행은 없다(`DESIGN.md` 198–206, 227–235행).
- **D2:** Audience는 원본이 명시한 evidence-bounded stakeholder group에 한정되고 가상 개인·행동 연구 결과를 만들지 않았다. Primary tasks는 관측된 feed/search/card 정보 과업뿐이다(원본 273–281행; 이관본 16–30행).
- **B1/B3/C4:** focused/pressed aggregate를 `focus-visible` treatment로 승격하지 않았고, motion에는 정확한 per-component computed 승격 조건을 남겼다. Cover/stats/skeleton은 interactive-kind 근거가 없어 kind와 applicability map을 생략했다(`DESIGN.md` 95–97, 149–180, 208–212행).

### Bilibili 재제출 조건

1. Principles 인접 본문에 세 `UI implication`이 공식 Bilibili UI doctrine이 아니라 공식 서사와 관측 근거에서 파생한 편집적 구현 해석이며, 별도 발행된 product-system 규격 밖이라는 B2 한정을 추가한다.
2. `migration-log.md` §12 행에 그 권위 한정이 portable 본문에 남았다는 실제 disposition을 기록한다.
3. `migration-log.md` §8, §14, §15 행에 `실질 제약 → portable 목적지 / 원문 placeholder wrapper → provenance omission ledger` 분기를 기록한다. Portable이나 provenance의 값 자체를 새로 채우지 않는다.
4. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

`docs/reviews/t2-1-open-2026-08-23-grok.md` 53–57행의 표본 계약에 따라 **다음 웨이브는 정지**한다. 웨이브 1의 5건을 전수 의미 재검토하고, 기존 B2/B3/E2 적용 누락을 워커 지침 또는 규칙집 사례에 누적한 뒤 개정본을 다시 제출해야 한다. 이번 결함은 이미 Rulebook v2에 명문화된 조항의 적용 누락이므로 새 원칙을 발명할 사안은 아니다. 표본율은 40%를 유지한다.

**최종 판정: Toss FAIL / Bilibili FAIL. 기계 게이트 PASS는 의미 보존 PASS를 대신하지 못한다.**
