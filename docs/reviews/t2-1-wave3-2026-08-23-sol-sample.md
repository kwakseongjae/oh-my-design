# T2-1 웨이브 3 표본 검토 — sol 의미 레인 (2/5, 40%)

- 대상: `docs/design-md-weight/migrated/{kakao,stripe}/`
- 원본: `web/references/{kakao,stripe}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v5 전 조항**
- 일시: 2026-08-23
- 전제: 웨이브 3의 5건이 통과한 기계 게이트는 수용했다. 이 문서는 게이트가 식별하지 못하는 문장 단위 evidence class, standalone 권위 한정, 원 필드·절별 실제 disposition을 원본과 수동 대조한다.

## 판정 요약

| 표본 | 판정 | 차단 조항 |
|---|---|---|
| Kakao | **FAIL** | B2/B2a, E2/E2a |
| Stripe | **FAIL** | B2/B2a, E1, E2/E2a/E2c |

**표본 결과: PASS 0/2, FAIL 2/2.** 두 산출물 모두 A1a·A1b·B1·B3와 §14 본문 보존은 첫 제출에서 통과했다. 그러나 v5가 예문까지 고정한 B2a와 웨이브 2에서 재발한 E2 계열은 이번 첫 산출물에서도 완전히 지켜지지 않았다.

## v5 전 조항 대조표

| 조항 | Kakao | Stripe |
|---|---|---|
| A1 | PASS — 검증 scalar·field 보존 | PASS — 검증 scalar·field 보존 |
| A1a | PASS — px 문자열과 `30Pt` 형태 유지 | PASS — unitless `1.43` / `1.25` 유지 |
| A1b | PASS — button×5 + badge | PASS — button×2 + tab |
| A1c | PASS — `ds.type: system` 원장화 | PASS — source에 `ds` 없음, `tokens.source` 보존 |
| A2 | PASS — §14 5행 본문 보존 | PASS — §14 상태 경계 본문 보존 |
| A3 / A4 | PASS / PASS | PASS / PASS |
| B1 | PASS — generic focus 별도 관측 | PASS — generic `Focus` 별도 관측 |
| B2 / B2a | **FAIL** — Principles 밖 Scope·Content 해석 무한정 | **FAIL** — Principle #1 안의 Docs 편집문을 first-party로 과분류 |
| B3 | PASS — 다섯 증거 종류 + per-component computed gate | PASS — 다섯 증거 종류 + per-component computed gate |
| C1 / C2 / C3 | PASS / PASS / PASS | PASS / PASS / PASS |
| C4 | PASS — Dark Marketing Tag kind/map 미확정 | PASS — 저신뢰 card/badge/input 미승격 |
| D1 / D2 | PASS / PASS | PASS / PASS |
| E1 | PASS — 원장 분리 자체는 일치 | **FAIL** — provenance가 derived 범위를 실제보다 좁게 기록 |
| E2 | **FAIL** — logo·§13 실제 mapping 불일치 | **FAIL** — principle 준수 과장, note·URL source-row 불일치 |
| E2a | **FAIL** — logo 이중 목적지 누락 | **FAIL** — `tokens.note`·Docs URL 이중 목적지 누락 |
| E2b | 적용 대상 없음 — source placeholder 0 | 적용 대상 없음 — source placeholder 0 |
| E2c | PASS — B3·§14 준수 주장은 본문과 일치 | **FAIL** — Principles B2a 준수 주장이 본문보다 강함 |

## 1. Kakao — FAIL

### 1.1 Principles 밖 편집·인과 해석에 완전한 인접 한정 없음 — B2 / B2a FAIL

이관본의 완전한 승인 문구는 `These five items`라고 범위를 닫아 §12에서 옮긴 다섯 원칙만 덮는다(`docs/design-md-weight/migrated/kakao/DESIGN.md` 38–46행). 다음 retained block은 그 범위 밖이다.

- Scope의 “identity is built around … approachable”, 색·상징·type이 제품명을 읽기 전에 recognition을 만든다는 해석(`DESIGN.md` 9행)
- mission이 human context를 앞세운다는 독해, KakaoTalk communication model이 broader ecosystem의 organizing metaphor가 됐다는 인과, yellow/speech bubble이 connection을 signal한다는 결론(`DESIGN.md` 13행)
- mission을 familiar Korean·short labels·everyday actions로 번역하고 surface별 권장 tone을 정한 Content & Locales 블록(`DESIGN.md` 342–344행)

이 문장들이 원본에 이미 있었다는 사실(`web/references/kakao/DESIGN.md` 177–179, 337–347행)은 면제가 아니다. v5 B2a는 카탈로그 전체가 evidence-backed reconstruction이므로 Principles뿐 아니라 Scope 등 다른 절의 retained causal/editorial reading에도 문장 단위로 `derived editorial implementation inference / not Kakao-authored or a separately published UI specification`을 인접하게 두도록 요구한다(`MIGRATION_RULEBOOK.md` 41–57행).

Migration log는 §12 다섯 원칙에 한정해 B2a 준수를 기록한다(`migration-log.md` 31행). Governance의 일반 authority 문구(`DESIGN.md` 356–375행)는 누락된 인접 evidence-class 구분을 대신하지 못한다.

### 1.2 Simple Icons logo를 provenance-only라고 적었지만 portable Assets에도 남음 — E2 / E2a FAIL

원본 logo는 Simple Icons `kakaotalk`다(원본 8–10행). 이 값은 provenance에 남고(`docs/design-md-weight/migrated/kakao/provenance.md` 15, 24, 130행), portable Typography & Assets도 `Catalog logo metadata is Simple Icons identity (kakaotalk)`라고 직접 적는다(`DESIGN.md` 156–158행).

반면 migration log는 logo가 `identity-only in provenance; not a portable Typography & Assets claim`이라고 단정한다(`migration-log.md` 13행). Provenance도 `not promoted into Typography & Assets`라고 같은 단일 목적지를 주장한다(`provenance.md` 24행). Boundary 설명으로만 portable에 남겨도 실제 disposition은 `provenance + Typography & Assets`다. 이는 웨이브 2 OpenAI favicon과 같은 E2a 불일치다.

### 1.3 §13 행이 corporate browse/search task의 실제 원천을 섞음 — E2 FAIL

원본 §13은 네 stakeholder context를 둔다(원본 359–366행). Corporate pages를 browse하거나 corporate search/milestone filter를 쓰는 task는 그 절에 없다. 이관본은 네 그룹을 Audience에 두고(`DESIGN.md` 26–28행), Login integration·corporate browse·search/filter 세 task를 Primary tasks로 둔다(18–24행).

그런데 migration log의 `§13 Personas` 행은 `independently verified tasks 옮김 → primary-tasks`라고 적어 세 task를 같은 §13 disposition 안에 넣는다(`migration-log.md` 32행). 설명이 captured surfaces를 언급해도 section-by-section 표의 원천 mapping은 여전히 부정확하다. 실제 mapping은 `§13 네 context → Audience`, `Login task → Login guide/component`, `browse/search/filter tasks → captured corporate surfaces/components`로 분리해야 한다.

### Kakao에서 확인된 통과 항목

- **A1/A1a/A1b/A1c:** 색·type metrics·spacing·radius·component fields가 보존됐고, px/`30Pt` 형태와 button×5+badge 관계, `ds.type: system`도 각각 유지됐다(`DESIGN.md` 75–109, 125–154, 179–328행; `provenance.md` 17–23행).
- **A2/A3/A4:** §14 다섯 행을 capture record로 보존했고, §9-only 고유값은 다른 portable 슬롯에 있으며, Login foreground `rgba(0, 0, 0, 0.85)`를 YAML `login-label` `#000000`이나 corporate Foreground `#333333`과 합치지 않았다.
- **B1/B3:** generic focus를 additional observed state로 두고 `focus-visible` treatment를 발명하지 않았다. Motion은 transition properties, animation name, duration, easing, reduced-motion behavior 다섯 종류와 per-component computed-only gate를 모두 적었다(`DESIGN.md` 115–117, 175, 227–233행).
- **C1–C4/D1/D2:** loading/error/success는 각 control 역할로 판정했고 coverage 완료를 주장하지 않는다. Dark Marketing Tag는 kind/map을 확정하지 않았고, 원본 밖 도메인이나 가상 biography를 만들지 않았다.
- **E2b/E2c:** source placeholder는 없고, 로그의 B3·§14 보존 주장은 실제 본문과 일치한다.

### Kakao 재제출 조건

1. Scope와 Content & Locales의 retained editorial block마다 완전한 B2a 문구를 인접하게 두거나, 직접 관측·first-party 사실만 남도록 해당 해석을 줄인다. §1·§10·§11 로그도 최종 disposition과 맞춘다.
2. Simple Icons를 provenance-only로 둘 의도라면 portable Assets의 `kakaotalk` 문장을 제거한다. Boundary 문장을 portable에 유지한다면 migration log와 provenance를 `provenance + Typography & Assets`로 고친다.
3. §13 로그에서 stakeholder 이동과 Login/component/corporate-surface 기반 Primary tasks의 원천을 분리한다.
4. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. Stripe — FAIL

### 2.1 Principle #1 안의 Docs 편집 적용문을 first-party로 과분류 — B2 / B2a / E1 / E2c FAIL

Principles 머리의 한정은 네 numbered item 전체를 `first-party operating-principle language`로 선언하고, derived 범위를 이탤릭 `UI implication` notes로만 제한한다(`docs/design-md-weight/migrated/stripe/DESIGN.md` 36–38행). 그러나 첫 항목의 비이탤릭 문장 중 `a Docs interface should make the next implementation decision easier to locate`는 `Users first / work backwards from user needs`라는 jobs/culture 원칙이 아니라 Docs-specific 편집 적용문이다(`DESIGN.md` 40–41행; 원본 `web/references/stripe/DESIGN.md` 267–268행).

따라서 승인된 완전 문구가 존재한다는 섹션 휴리스틱만으로는 PASS가 아니다. 문제 문장이 한정 범위 밖에서 Stripe-authored doctrine처럼 남는다. Provenance도 `only the UI implication notes are derived`라고 같은 과분류를 반복하고(`docs/design-md-weight/migrated/stripe/provenance.md` 125행), migration log는 네 원칙이 first-party이며 B2/B2a 한정을 마쳤다고 주장한다(`migration-log.md` 31행). Portable·source ledger·log가 함께 실제 evidence class보다 강해 B2/B2a, E1, E2c를 위반한다.

Scope의 visual-character paragraph와 Content의 product-copy block은 각각 완전한 인접 한정을 갖추므로 이 지점에서는 통과한다(`DESIGN.md` 13, 251–257행).

### 2.2 YAML `tokens.note`의 실제 portable 목적지를 로그가 누락 — E2 / E2a FAIL

원본 YAML note는 `Only selector-backed public Docs values are tokens`와 marketing/newsroom/Docs/declaration evidence-domain 분리를 기록한다(원본 88–91행). 실제 이관본은 provenance에 이를 보관하고(`provenance.md` 24행), portable Scope에도 `Only selector-backed public Docs values are tokens in this capture`와 같은 경계를 남긴다(`DESIGN.md` 11행).

그러나 migration log의 YAML metadata 행은 `tokens.note`를 포함한 묶음 전체를 `분리 → provenance`로만 기록한다(`migration-log.md` 14행). §1 원문과 일부 내용이 겹쳐도 `Only selector-backed` token boundary는 note에서 portable로 간 실제 disposition이다. Kakao log가 같은 유형의 note를 portable contract와 provenance 양쪽으로 기록한 것(`migrated/kakao/migration-log.md` 15행)과도 대조된다.

### 2.3 Docs URL의 이중 목적지를 원 필드가 아닌 identity 행에 잘못 기록 — E2 / E2a FAIL

세 exact Docs URL은 YAML identity가 아니라 `verification_v2.surfaces`와 `sources`에 있다(원본 13–23행). 같은 URL은 원본 footer에도 반복된다(214–216행). 실제 목적지는 portable Scope(`docs/design-md-weight/migrated/stripe/DESIGN.md` 9행)와 provenance surfaces/sources/Tier 1(`provenance.md` 38–64행) 양쪽이다.

Migration log는 이 이중 목적지를 값의 원천이 아닌 `YAML identity` 행에 넣고(`migration-log.md` 13행), 정작 `verification_v2`를 포함한 행은 provenance-only라고 적는다(14행). Footer의 Tier 1 행도 provenance-only로 적는다(22행). E2는 legacy **섹션별** 표이고 E2a는 같은 값의 모든 목적지를 요구하므로, 다른 source-row에 dual 문구가 한 번 있다는 사실은 실제 원 필드→목적지 trace를 복구하지 못한다.

### Stripe에서 확인된 통과 항목

- **A1/A1a/A1b/A1c:** selector-backed colors, geometry, state samples, `Type: button`×2 + `Type: tab`을 보존했다. YAML line-height `1.43` / `1.25`는 px 관측과 합치지 않고 unitless 비율로 유지했다(`DESIGN.md` 70–100, 124–134, 153–237행). Source에 `ds`는 없고 `tokens.source: reconciled`는 provenance에 남았다.
- **A2/A3/A4:** §14의 no-matrix·잔류 관측·future-capture 경계를 capture record에 유지했고, §9-only 근거값은 portable에 남는다. Search Prompt `#5469d4`와 Secondary Action `#50617a`는 각 renderable field 관계를 유지했다.
- **B1/B3:** generic `Focus`는 additional observed state이고 `focus-visible` treatment는 비워 두었다. Motion은 다섯 증거 종류와 per-component computed gate를 모두 갖는다(`DESIGN.md` 98–100, 145–151, 171–181, 201–211행).
- **C1–C4:** 미관측을 비적용 사유로 쓰지 않고 loading/error/success를 Search Prompt·Secondary Action·Content Tab 역할별로 판정했다. Coverage 완료를 주장하지 않고, 저신뢰 card/badge/input은 canonical component나 kind/map으로 승격하지 않았다.
- **D1/D2:** 원본 밖 도메인 부정 claim을 만들지 않았고, §13의 stakeholder groups만 Audience에 두며 가상 biography나 sidecar를 만들지 않았다.
- **E2b:** source placeholder가 없어 적용 대상이 아니다. B3 로그 주장은 실제 본문과 일치한다.

### Stripe 재제출 조건

1. Principle #1의 Docs-specific 절을 derived `UI implication`으로 옮기거나, 인접 한정이 numbered items 안의 모든 Docs/UI 적용문을 명시적으로 덮도록 고친다. Provenance 125행과 migration log §12 행의 first-party/derived 분류도 같은 범위로 맞춘다.
2. YAML `tokens.note` 행에 실제 `Experience Scope + provenance` 목적지를 모두 기록한다.
3. 세 Docs URL의 dual disposition을 실제 원천인 `verification_v2.surfaces/sources`와 footer Tier 1 행에 기록하고, identity 행에서는 homepage 등 실제 identity field만 다룬다.
4. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Kakao FAIL / Stripe FAIL.** 기계 게이트 PASS 5/5는 의미 보존 PASS를 대신하지 못한다.

표본 2/5가 모두 실패했으므로 웨이브 3의 나머지 3건도 v5 의미 기준으로 전수 재검토해야 한다. 두 표본을 개정하고 동일 sol 레인에서 재확인하기 전까지 웨이브 3 채택과 다음 웨이브 진행을 정지한다. 표본율은 40%를 유지하며, 이 판정은 카탈로그 채택이 아니다.
