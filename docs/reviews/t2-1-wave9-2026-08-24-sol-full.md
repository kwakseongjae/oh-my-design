# T2-1 웨이브 9 전수 검토 — sol 의미 레인 (5/5 첫 판정)

- 대상: `docs/design-md-weight/migrated/{appier,asana,asleep,asos,au}/`
- 원본: `web/references/{appier,asana,asleep,asos,au}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 전 조항
- 프로토콜: `docs/reviews/t2-1-protocol-2026-08-23-grok.md`
- 일시: 2026-08-24
- 검토 모드: 웨이브 9 첫 5/5 전수 판정. 첫 FAIL은 기대값이며, 아래 재제출 조건만 다음 개정과 동일 sol 재확인의 입력이다.

## 판정 요약

| id | 판정 | 차단 조항 |
|---|---|---|
| appier | **FAIL** | B2/B2a, D1, E1, E2/E2c, F1/F2 |
| asana | **FAIL** | A1/A3/A4, B1, D1/D2, E1, E2/E2c, F2 |
| asleep | **FAIL** | A1/A3/A4, C2, E2/E2c, F2 |
| asos | **FAIL** | A1/A1b, C2, E2/E2c, F2 |
| au | **FAIL** | A1/A4, B2/B2a, D1, E1, E2/E2c, F1/F2 |

**웨이브 첫 판정: FAIL 5/5, PASS 0/5.**

기계 검사는 의미 판정을 대신하지 않는다. 아래 두 명령을 현재 파일에 직접 재실행했고 다섯 건 모두 통과했다.

1. `node test-v2/tools/migrate-reference.mjs --brand {id} --gate-only`
2. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/{id}/DESIGN.md --check --require-portable-core --json`

| id | gate-only | Core | DESIGN.md SHA-256 | F3 실행 증거 |
|---|---|---|---|---|
| appier | PASS, problems 0 | exit 0, `portable_core: true` | `e9ca264a63723c2738fda42fa8eaebb8e02611e32d0b734ca148fae86d99e5cf` | `AUDIT_DONE fixes=37` |
| asana | PASS, problems 0 | exit 0, `portable_core: true` | `3206212379ec0319a87cced9e934513e5dd47283b3b42b83733a41962266d52e` | `AUDIT_DONE fixes=45` |
| asleep | PASS, problems 0 | exit 0, `portable_core: true` | `6d54313a5a32835037c3787aa1ac692408bb06bcd25ea81acdf5ddc40e11c166` | `AUDIT_DONE fixes=30` |
| asos | PASS, problems 0 | exit 0, `portable_core: true` | `8ea6e76dd473167fbd22d449393685e4fddb96d924bb232768c2dfa821fad3c9` | `AUDIT_DONE fixes=31` |
| au | PASS, problems 0 | exit 0, `portable_core: true` | `28a67dff8b79141ee7842ceb9d3d59982eac65e3ee637275b8a4956899af0e0a` | `AUDIT_DONE fixes=43` |

다섯 건 모두 이관 워커와 분리된 신선 세션 F3를 이미 1회 실행했고 `audit-log.md`의 post-F3 SHA가 현재 파일과 일치한다. 따라서 F3는 **절차 실행 증거로 PASS**다. 이는 의미 결함이 없다는 보증이 아니며, 프로토콜에 따라 이번 목록 개정에 새 F3를 요구하지 않는다.

## Rulebook v7 전 조항 매트릭스

표의 FAIL은 아래 건별 차단점에 연결된다. PASS는 해당 조항의 전수 대조 결과이지 문서 전체 PASS를 뜻하지 않는다.

| 조항 | appier | asana | asleep | asos | au |
|---|---|---|---|---|---|
| A1 값 손실 0 / 발명 0 | PASS | FAIL — §9 tuple·§11 관계 | FAIL — Outlined field | FAIL — typography·primitive | FAIL — surface 관계 |
| A1a unitless ratio | PASS | PASS | PASS | PASS | PASS |
| A1b primitive type | PASS | PASS | PASS | FAIL — Size Selector | PASS |
| A1c metadata | PASS | PASS | PASS | PASS | PASS |
| A2 §14 보존 / §9 prompt 삭제 | PASS | PASS | PASS | PASS | PASS |
| A3 §9-only 고유값 | PASS | FAIL — Hero/Pricing/Feature tuple | FAIL — `transparent` | PASS | PASS |
| A4 field-role 비결합 | PASS | FAIL — component-internal tuple | FAIL — Outlined background | PASS | FAIL — mobile evidence→home |
| B1 관측 evidence kind 비승격 | PASS | FAIL — Ghost·Content | PASS | PASS | PASS |
| B2/B2a 인접 완전 한정 | FAIL — Avoid 전체 | PASS | PASS | PASS | FAIL — voice table authority |
| B3 motion 5종 gate | PASS | PASS | PASS | PASS | PASS |
| C1 capture absence ≠ N/A | PASS | PASS | PASS | PASS | PASS |
| C2 exact role별 L/E/S | PASS | PASS | FAIL — Docs Search | FAIL — Add to Bag | PASS |
| C3 coverage 완료 주장 금지 | PASS | PASS | PASS | PASS | PASS |
| C4 kind 근거와 kind/map | PASS | PASS | PASS | PASS | PASS |
| D1 새 negative coverage 금지 | FAIL — first-party mark | FAIL — font/microcopy | PASS | PASS | FAIL — reusable copy |
| D2 fictional persona 금지 | PASS | FAIL — segment 재승격 | PASS | PASS | PASS |
| E1 provenance/portable evidence boundary | FAIL | FAIL | PASS | PASS | FAIL |
| E2 source-row 실제 disposition | FAIL | FAIL | FAIL | FAIL | FAIL |
| E2a 모든 다중 목적지 | PASS | PASS | PASS | PASS | PASS |
| E2b omission ledger | PASS | PASS | PASS | PASS | PASS |
| E2c 준수 주장 강도 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F1 최종 B2a scan 결과 | FAIL | PASS | PASS | PASS | FAIL |
| F2 최종 E2 grep 결과 | FAIL | FAIL | FAIL | FAIL | FAIL |
| F3 별도 세션 1회 실행 | PASS | PASS | PASS | PASS | PASS |

## 1. appier — FAIL

### 1.1 Avoid 전체의 authority 한정 누락 — B2 / B2a / E1 / E2c / F1 FAIL

원본 `web/references/appier/DESIGN.md` 266–279행의 Do/Don’t는 검증 surface로부터 만든 reference reconstruction이다. 이관본 `DESIGN.md` 72행은 여섯 Don’t 전체가 Appier-authored doctrine이 아니라는 경계를 끝까지 두지 않고, derived 한정 대상을 `muddy the single-blue brand signal` 한 문구로 좁힌다. 그 결과 74–79행의 pastel, AI hype, gradient, pill/shadow, locale 금지가 Appier가 별도 발행한 규칙처럼 남는다.

같은 과대 분류가 `provenance.md` 129행, `migration-log.md` 28·54·65행, `audit-log.md` 21·66·93·119행의 adjacent-complete/F1 주장에 반복된다. source Don’ts를 유지할 수는 있지만, 목록 전체를 source reconstruction의 derived application으로 인접하게 한정해야 한다.

### 1.2 Google favicon에서 first-party-mark 부재로 확장 — D1 / E1 / E2 / E2c / F2 FAIL

원본 8–10행은 Google s2 favicon metadata만 제공하며 first-party mark-file 감사를 하지 않는다. 이관본 `DESIGN.md` 555행은 이를 `first-party mark file`이라는 broad Named gap으로 확장한다.

`DESIGN.md` 81·234행의 Google favicon capture-method/portable-mark 비승격 경계는 유지할 수 있다. 그러나 “이 Google record를 first-party mark로 쓰지 않는다”와 “first-party mark file이 없다/미해상이다”는 다른 claim이다. `provenance.md` 20·118행과 `migration-log.md` 14행은 실제 Named-gap 목적지와 D1 발명을 기록하지 않고 logo disposition을 닫는다.

### appier에서 확인된 통과 항목

- YAML unitless body line-height `1.5`, primitive types, metadata, §14 10행과 §9-only component 값은 보존됐다.
- generic Focus와 `focus-visible` 경계, B3 다섯 evidence kind, C1–C4, fictional persona 삭제, omission ledger가 통과했다.
- §11의 founding/three-cloud/product-story 관계와 직접 검증·illustrative copy의 evidence class는 보존됐다.
- F3 실행과 현재 SHA 일치는 확인됐다. F3가 놓친 Avoid 한정은 F1 의미 FAIL을 없애지 않는다.

### appier 재제출 조건

1. Avoid 74–79행 전체를 source reconstruction의 derived editorial application으로 인접·완전 한정한다. 특정 한 문구만을 qualifier 대상으로 두지 않는다.
2. Named gaps의 broad `first-party mark file` 문장을 삭제하거나 정확한 독립 evidence를 추가한다. Google favicon capture boundary는 유지할 수 있다.
3. provenance/migration/audit의 B2a inventory, logo disposition, D1/E2/F1/F2 주장을 superseding revision으로 실제 본문과 동기화한다.
4. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 위 세 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 2. asana — FAIL

### 2.1 §9 component-internal tuple 손실 — A1 / A3 / A4 / E2 / E2c / F2 FAIL

원본 `web/references/asana/DESIGN.md` 358–360행은 다음 component-local 결합을 기록한다.

- Hero: subhead `20px / 400 / #646f79`와 black/ghost CTA pair
- Pricing card: plan name `24px / 500 / #0d0d0d`, price `36px / 400`
- Grey feature card: headline `24px / 500 / #0d0e10`, body `16px / 400 / #646f79`, coral badge

이관본 `DESIGN.md` 205–215행의 일반 Type roles와 250–322·349–447행의 CTA/card surface는 개별 숫자 일부만 갖고, 위 역할별 내부 결합을 보존하지 않는다. 219행은 nav prompt만 portable boundary로 언급하고, 나머지는 `provenance.md` 109–111행에 prompt-only composition으로 밀었다. `migration-log.md` 26행의 “슬롯 없는 위임 없음”은 실제 disposition과 다르다.

### 2.2 Ghost와 copy의 evidence kind 승격 — B1 / E1 / E2 / E2c / F2 FAIL

- 원본 249–252행은 TWK Lausanne을 Tier 1 live, Ghost를 Tier 2 Refero로 구분한다. 이관본 `DESIGN.md` 15행은 둘을 함께 `Observed type`으로 묶는다. 같은 파일의 Font evidence 184–189행은 이 둘을 올바르게 나누므로 portable 내부도 모순이다.
- 원본 Voice samples 388–392행에서 live homepage string은 H1/H2/page title 세 개다. 이관본 Content 553–561행은 harvested CTA labels와 pricing-tier names까지 `Observed (asana.com homepage 2026-06-22)`에 넣는다. CTA component 관측과 pricing source를 homepage voice-observation으로 바꿀 수 없고, “그렇게 Observed로 취급하는 것은 derived”라는 qualifier도 evidence kind 승격을 치유하지 않는다.

과대 분류는 `provenance.md` 130·138행, `migration-log.md` 27·44행, `audit-log.md` 66·95행에도 반복된다. `provenance.md` 74행의 올바른 세-string 경계와도 모순된다.

### 2.3 원본 밖 font·microcopy negative domain — D1 / E1 / E2c FAIL

원본 116–119·249–252·388–393행은 live TWK Lausanne, Tier 2 Ghost, fallback, 세 live voice sample을 제공한다. 다음 이관본 문장은 별도 domain audit 없이 부재를 확장한다.

- `DESIGN.md` 184행: official-product typography evidence가 unresolved라는 주장
- 187행: Asana-exclusive distributed type family가 검증되지 않았다는 주장
- 189·622행: Ghost loaded-source URL 부재
- 625행: complete product-microcopy guide 부재

B2a qualifier는 D1 발명을 허용하지 않는다. `provenance.md` 138행, `migration-log.md` 19·27·44행, `audit-log.md` 21–23·81–82행의 negative-domain/준수 주장도 함께 좁혀야 한다.

### 2.4 fictional-persona segment를 Audience로 재승격 — A1 / D2 / E2 / E2c FAIL

원본 §13 411–421행과 footer 482행은 project managers, product teams, marketing ops, enterprise IT를 fictional archetype의 출발점이라고 명시한다. 이관본 `DESIGN.md` 30행은 biography를 지웠지만 같은 파생 segment를 `Use stakeholder groups only`라는 Audience 지시로 다시 승격한다.

fictional persona를 Audience가 아니라고 경계하는 문장은 유지할 수 있다. 그러나 그 persona-derived segment를 독립 검증 없이 Audience 값으로 재사용할 수 없다. `provenance.md` 139행과 `migration-log.md` 30행은 exclusion-only 처리라고 과대 기록한다.

### 2.5 §11의 인과·진화 관계 손실 — A1 / E2 / E2c / F2 FAIL

원본 397–401행에는 다음 관계가 있다.

- Facebook 규모의 coordination problem 때문에 두 senior engineers가 떠나 full-time으로 해결했다는 창업 인과
- human coordination이 underinvested leverage라는 premise와 mission idealism이 product clarity 및 Moskovitz의 public writing으로 이어지는 관계
- three-dot logo가 interconnected circles에서 triangular arrangement로 진화했다는 관계

이관본 Scope 17행과 Principles 49–53행은 co-founders, Facebook origin, mission, shared-goal metaphor 일부만 남기고 위 관계를 잃었다. `migration-log.md` 28행은 §11을 옮겼다고 닫으므로 실제 보존 범위보다 강하다. 관계를 복원할 때 editorial reading에는 인접 완전 B2a도 함께 둬야 한다.

### asana에서 확인된 통과 항목

- unitless line-height `1.0/1.15/1.2/1.5/1.75`, YAML `use`, primitive types와 나머지 component fields는 보존됐다.
- §14 11행, generic Focus 경계, B3 gate, C1–C4 state 처리, placeholder/curve omission ledger가 통과했다.
- 현존 editorial 문장의 B2/B2a 형식 자체와 F1 scan은 통과했다. 이는 B1 승격, D1, D2를 치유하지 않는다.
- F3 실행과 현재 SHA는 일치한다.

### asana 재제출 조건

1. Hero, Pricing card, Grey feature card의 §9-only 내부 tuple을 해당 component 문맥에 복원하고 §9 provenance/disposition을 고친다.
2. Ghost를 Tier 2 Refero로 되돌리고, CTA labels와 pricing tiers를 각 실제 component/source class와 surface로 분리한다. homepage live voice Observed에는 원본 세 string만 둔다.
3. unsupported official/distributed/loaded-source/microcopy negative를 삭제하거나 각각 정확한 독립 evidence를 추가한다.
4. fictional-persona-derived stakeholder group을 Audience에서 삭제한다. exclusion boundary와 독립 검증된 primary tasks만 유지할 수 있다.
5. §11의 창업 인과, coordination premise→clarity/public-writing 관계, logo evolution을 복원하고 필요한 B2a를 붙인다.
6. provenance/migration/audit와 F2를 실제 disposition에 맞춰 supersede하고, 두 기계 검사와 새 SHA를 기록해 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 3. asleep — FAIL

### 3.1 §9 Outlined의 `transparent` background 손실 — A1 / A3 / A4 / E2 / E2c / F2 FAIL

원본 `web/references/asleep/DESIGN.md` 279행은 dark hero의 outlined CTA에 `transparent` background를 component-local renderable field로 기록한다. 이관본 `DESIGN.md` 268–282행은 Text/Border/Radius/Padding/Height/Font를 보존하지만 Background를 생략한다.

`provenance.md` 117–119행과 `migration-log.md` 27행은 §9-only 고유값이 Feature Card mixed anatomy뿐이라고 잘못 닫는다. 이는 Rulebook A3/A4의 Notion `transparent` 선례와 같은 손실이다. `transparent`는 Outlined에만 복원해야 하며 일반 canvas/color token으로 승격하면 안 된다.

### 3.2 primitive 이유로 Docs Search error를 적용 — C2 / E2 / E2c / F2 FAIL

원본 §14 350행은 generic `Error (form validation)`만 기록하고 Docs Search에 그 상태를 연결하지 않는다. 이관본 `DESIGN.md` 313행은 Docs Search가 `Form field`라는 primitive/class 이유만으로 error를 applicable로 만든다.

documentation search role에 대한 exact validation/error evidence가 없으므로 error applicability도 loading/success와 함께 최소 field 경계에서 생략해야 한다. 이를 `not-applicable`로 닫아서도 안 된다. `provenance.md` 141행, `migration-log.md` 21·32행, `audit-log.md` 9·98·103행의 C2 준수 주장도 실제 본문보다 강하다.

### asleep에서 확인된 통과 항목

- unitless ratios, primitive types, metadata, §14 9행과 나머지 §9-only Feature Card anatomy는 보존됐다.
- Content의 company-page quotations는 같은 행에서 company-page quotation source를 명시하고 provenance가 WebFetch와 token inspection을 구분하므로 B1/E1 승격으로 잡지 않았다.
- B2/B2a/F1, B3, C1/C3/C4, D1/D2, E2a/E2b가 통과했다.
- Google favicon은 capture-method boundary만 있고 broad first-party-logo Named gap이 없어 D1 blocker가 아니다.
- F3 실행과 현재 SHA는 일치한다.

### asleep 재제출 조건

1. Outlined component에만 `Background: transparent`를 복원하고 §9-only evidence임을 기록한다.
2. Docs Search의 error applicability를 생략한다. role-specific evidence를 새로 제시하지 않는 한 primitive `Form field`를 적용 근거로 쓰지 않는다.
3. Named gaps, provenance, migration/audit, F2의 §9/C2 주장을 실제 disposition으로 supersede한다.
4. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 위 세 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 4. asos — FAIL

### 4.1 typography casing 범위 손실 — A1 / E2 / E2c / F2 FAIL

원본 `web/references/asos/DESIGN.md` 109행은 **all display and navigation text is uppercase**, **body and product description text is mixed case**라고 역할 범위를 구분한다. 이관본 `DESIGN.md` 195행은 `Navigation and CTA text`만 uppercase라고 좁히고, display 전체 범위와 body/product-description mixed-case 대조를 잃었다.

`migration-log.md` 22행은 §3 typography가 이동됐다고 기록하지만 이 역할 관계 손실을 밝히지 않는다. portable Type rules에 원본의 두 범위를 그대로 복원해야 한다.

### 4.2 Size Selector의 verified primitive type 손실 — A1 / A1b / E2 / E2c / F2 FAIL

원본 174–191행은 Search Bar와 Size Selector를 `### Inputs` 아래에 분류한다. 이 body heading은 Size Selector의 verified primitive type 근거다. 이관본 `DESIGN.md` 386–399행은 `Kind: interactive`만 두고 Type을 생략하며, 398행과 Named gaps 640행은 YAML에 type이 없다는 이유로 이를 미해상 처리한다.

같은 이관본은 body heading을 근거로 Surface Section의 `Type: card`, Category Sub-Nav의 `Type: tab`을 보존한다. 따라서 Size Selector만 heading의 `input` 분류를 버린 것은 A1b 손실이다. `provenance.md` 151·155행, `migration-log.md` 18·23–24행, `audit-log.md` 9·111행의 “Type not invented” 원장도 고쳐야 한다.

### 4.3 명시된 Add-to-Bag L/E/S 관계 삭제 — C2 / E2 / E2c / F2 FAIL

원본 §14 417–421행은 Add-to-bag role에 직접 다음을 연결한다.

- loading: green button 유지, indicator, `Adding…`
- error/out-of-stock: button이 non-green `Notify me when available`로 변경
- success: bag icon item count update

이관본 capture record `DESIGN.md` 239–243행은 이 관계를 보존하면서도, 실제 Add to Bag map 280행은 exact selector/request/outcome이 unresolved라며 loading/error/success applicability를 모두 생략한다. role이 원본에서 직접 명명됐으므로 generic §14 paint를 억지로 붙이는 문제가 아니다. applicable을 복원하되 capture-record guidance를 computed paint로 오인하지 않게 evidence class를 유지해야 한다.

같은 오류가 `provenance.md` 154행, `migration-log.md` 36·66행, `audit-log.md` 9·111행에 반복된다.

### asos에서 확인된 통과 항목

- unitless `1.25/1.0`, metadata, 다른 primitive types와 §14 전체 표는 보존됐다.
- §9 Product Grid Card의 14px product-name/16px price/sale tuple은 component-local field note에 보존됐다.
- generic Focus 경계, B2/B2a/F1, B3, C1/C3/C4, D1/D2, E1, E2a/E2b가 통과했다.
- Hero/Retry의 exact role에 직접 연결되지 않은 L/E/S 생략과 Search/Tab의 나머지 role-based 처리는 이번 blocker가 아니다.
- F3 실행과 현재 SHA는 일치한다.

### asos 재제출 조건

1. display/navigation uppercase와 body/product-description mixed-case 대조를 Type rules에 복원한다.
2. Size Selector에 source heading이 검증한 `Type: input`을 복원하고 Named gap 및 primitive ledgers를 고친다.
3. Add to Bag의 loading/error/success applicability와 원본 role 관계를 복원한다. 시각값은 §14 guidance의 evidence class를 유지한다.
4. provenance/migration/audit/F2를 실제 파일과 동기화하고, 두 기계 검사와 새 SHA를 기록해 같은 sol에 위 세 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 5. au — FAIL

### 5.1 mobile-bound navigation/search를 home task에 결합 — A1 / A4 / E1 / E2 / E2c / F2 FAIL

원본 `web/references/au/DESIGN.md` 38–58·85–94행의 verification claims는 navigation/search typography와 `header-search.*`를 `mobile` surface / `mobile-capture`에 묶는다. body 133–134·141·212–223행도 public navigation/search 값과 `surface-2` header-search selector를 기록한다.

이관본 `DESIGN.md` 29행은 이 근거를 home URL의 `global navigation and header search` task로 재결합한다. 그러나 `provenance.md` 114·117–118행은 여전히 해당 claims를 `mobile`이라고 기록한다. B2a qualifier가 source metadata와 모순되는 surface 관계를 발명할 수 없다. `migration-log.md` 22행과 `audit-log.md` 19·42행의 verified-public-route mapping 주장도 실제 evidence보다 강하다.

### 5.2 derived Do/Don’t table을 first-party language로 승격 — B2 / B2a / E1 / E2 / E2c / F1 / F2 FAIL

원본 §10 298–307행은 네 voice adjective와 Do/Don’t table, 별도의 source-derived sample direction을 담는다. 하지만 supporting research `_research.md` 22행이 공식 voice evidence로 확인한 범위는 **four voice characteristics and respect requirement**다.

이관본 `DESIGN.md` 339행은 table 처리 자체를 derived reading이라고 한정하면서 같은 문단에서 table 전체를 `first-party tone-of-voice language`라고 선언한다. 이 상충 문장은 evidence class를 끝까지 구분하지 못한다. `provenance.md` 208행은 voice application을 derived로 적는 반면 `migration-log.md` 31행과 `audit-log.md` 48행은 table을 official/first-party로 분류해 원장끼리도 모순이다.

네 공식 characteristics와 근거 있는 respect proposition만 first-party로 남기고, 영어 Do/Don’t 구현 문장은 source-derived editorial direction으로 분류해야 한다.

### 5.3 bounded sample에서 broad reusable-copy gap으로 확장 — D1 / E1 / E2 / E2c / F2 FAIL

원본 307행은 세 sample direction만 `not reusable au copy`라고 한정한다. 이관본 `DESIGN.md` 395행은 이를 `reusable au copy beyond the official V.I. voice table and the labelled source-derived sample direction`이라는 전체 copy-domain gap으로 확장한다.

세 sample이 reusable하지 않다는 긍정 경계는 유지할 수 있지만, 그 관측만으로 그 밖의 reusable copy가 없거나 미해상이라고 선언할 수 없다. `migration-log.md` 31·48–49행과 `audit-log.md` 50행도 이 새 gap을 실제 D1/F2 disposition으로 밝히지 않는다.

### au에서 확인된 통과 항목

- YAML unitless line-height `1.4/2.5`, `ds.type: brand`, primitive types, component fields, §14과 §9-only 제약은 보존됐다.
- official product-use/live surface-use/distributed asset/declared-only font evidence class와 Tazugane/Noto/Helvetica 경계는 유지됐다.
- B1 generic Focus, B3 gate, C1–C4, D2, E2a/E2b가 통과했다.
- Google favicon은 capture-method boundary만 있고 broad first-party-mark Named gap이 없어 D1 blocker가 아니다.
- F3 실행과 현재 SHA는 일치한다.

### au 재제출 조건

1. home task에서 global navigation/header search 결합을 제거하거나, 원본 claim metadata대로 mobile surface에 묶는다. provenance와 route disposition을 함께 맞춘다.
2. Do/Don’t table을 source-derived editorial implementation direction으로 재분류하고, `derived editorial implementation inference / not au-authored or a separately published UI specification`의 인접·완전 한정을 둔다. 네 characteristics와 검증된 respect proposition만 first-party fact로 둔다.
3. Named gaps 395행의 broad reusable-copy bullet을 삭제한다. 세 sample direction의 `not reusable au copy` 경계는 이미 348행에 있으므로 gap으로 재작성하지 않는다.
4. provenance/migration/audit의 authority class, route mapping, D1/F1/F2 주장을 supersede한다.
5. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 위 네 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 웨이브 처리 결론

- 현재 웨이브 9은 **FAIL 5/5**다. 다섯 건 모두 개정 대상이며 통과 집합이나 카탈로그 채택 집합에 추가하지 않는다.
- 재제출 검토는 이 문서의 건별 조건만 대조하는 동일 sol 목록-only 방식이다. 새 기준을 추가하지 않는다.
- 기존 F3는 다섯 건 모두 유효하다. 새 F3를 반복하지 않는다.
- 각 개정본은 새 `DESIGN.md` SHA-256과 두 기계 검사 PASS를 함께 제출한다.
- 다섯 건이 같은 sol 재확인에서 5/5 PASS가 되기 전 웨이브 9 완료나 카탈로그 채택을 선언하지 않는다.
