# T2-1 웨이브 5 표본 검토 — sol 의미 레인 (2/5, 40%)

- 대상: `docs/design-md-weight/migrated/{duolingo,ably}/`
- 원본: `web/references/{duolingo,ably}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v7 전 조항**
- 일시: 2026-08-23
- 기계 검증: `node test-v2/tools/migrate-reference.mjs --brand <id> --gate-only`를 직접 재실행했다. 두 건 모두 `PASS`, problems 0이다.
- F3 실행 증거: 이관 워커와 별도 `auditor-log.txt`가 있고, `audit-log.md`가 Duolingo 23건 / Ably 27건의 B2a·E2 수정을 기록한다. 두 감사 모두 `AUDIT_DONE`이며 값·컴포넌트 표·state applicability·구조를 바꾸지 않았다고 기록했다.
- sol 범위: 기계 PASS와 F3 실행 여부를 전제로, 최종 산출물을 원본의 값-필드/역할 결합, 문장별 evidence class, source-row별 disposition까지 처음부터 다시 대조했다.

## 판정 요약

| 표본 | 판정 | 차단 조항 |
|---|---|---|
| Duolingo | **FAIL** | A1, A3, B2/B2a, C2, D2, E1, E2/E2a/E2c, F1/F2/F3 |
| Ably | **FAIL** | A1, B2/B2a, C2, D1, E1, E2/E2a/E2c, F1/F2/F3 |

**표본 결과: PASS 0/2, FAIL 2/2.** F3는 두 건에서 합계 50건을 실제로 고쳤지만 최종 산출물에도 B2a와 E2가 두 건 모두 남았다. 따라서 “4웨이브 연속 재발한 B2a·E2가 신선 세션 감사 후 끊겼는가”라는 웨이브 5 실험 기준은 충족되지 않았다. 이 판정은 F3 미실행 판정이 아니라 **F3 실행 후 결함 제거 결과의 FAIL**이다.

## v7 전 조항 대조표

| 조항 | Duolingo | Ably |
|---|---|---|
| A1 | **FAIL** — 근거 없는 claim-surface mapping·font evidence 승격, font 맥락 손실 | **FAIL** — exact behavior가 없는 editorial pill에 `navigates Team content` 발명 |
| A1a | PASS — unitless 1.2/1.25/1.5 보존 | PASS — unitless 1.25/1.33/1.27/1.4/1.5/1.6 보존 |
| A1b | PASS — button×4, card×3, input/tab/toggle 구분 | PASS — button×5, card 구분 |
| A1c | PASS — `tokens.source: reconciled`, extraction metadata 보존 | PASS — `ds.type: brand`, `tokens.source: reconciled` 보존 |
| A2 | PASS — §14 11행 capture record 보존 | PASS — §14 baseline-only 본문 보존 |
| A3 | **FAIL** — §9-only correct-feedback CTA 우측 배치 손실 | PASS — §9 고유값 없음 |
| A4 | PASS — shadow/type/color의 component-local 결합 분리 | PASS — pill fg, soft-action bg, seller-primary font 결합 분리 |
| B1 | PASS — generic `Focus`와 `focus-visible` treatment 분리 | PASS — 미관측 `focus-visible` 값 비승격 |
| B2 / B2a | **FAIL** — Layout 해석 두 곳에 인접 완전 한정 없음 | **FAIL** — product-story synthesis와 yellow-campaign canonicality 판단 미한정 |
| B3 | PASS — 다섯 evidence kind + per-component computed gate | PASS — 다섯 evidence kind + per-component computed gate |
| C1 | PASS — 미관측을 `not-applicable` 사유로 쓰지 않음 | PASS — 미관측 treatment와 applicability 분리 |
| C2 | **FAIL** — mixed-role Accent/Destructive를 하나의 categorical map으로 닫음 | **FAIL** — generic Team soft/editorial actions의 exact behavior 없이 세 상태를 닫음 |
| C3 | PASS — state coverage 완료 주장 없음 | PASS — state coverage 완료 주장 없음 |
| C4 | PASS — 근거 없는 surface kind/map 생략 | PASS — story card kind/map 생략 |
| D1 | PASS — 원본 밖 product-domain 부정 claim 없음 | **FAIL** — interaction-state absence를 세 surface의 copy-rule 부재로 확장 |
| D2 | **FAIL** — fictional Daniel의 `ads`를 Audience product fact로 승격 | PASS — first-party task contexts만 Audience에 유지 |
| E1 | **FAIL** — unsupported proof mapping + 최종 derived range 불일치 | **FAIL** — 최종 derived range가 미한정 문장을 누락 |
| E2 | **FAIL** — URL/§9/font disposition과 실제 파일 불일치 | **FAIL** — `verification_v2`, `components_harvested`, §14 disposition 불일치 |
| E2a | **FAIL** — identity-color URL과 `primary_color` 목적지 누락 | **FAIL** — `verification_v2.surfaces`의 Scope+provenance 목적지 누락 |
| E2b | PASS — 네 curve 값 provenance omission ledger 보관 | PASS — placeholder/삭제 curve 없음 |
| E2c | **FAIL** — F1/F2·§9·C2 준수 주장이 본문보다 강함 | **FAIL** — B2a/C2/D1/F2 준수 주장이 본문보다 강함 |
| F1 | **FAIL** — F3 뒤에도 문장 단위 B2a 잔존 | **FAIL** — F3 뒤에도 문장 단위 B2a 잔존 |
| F2 | **FAIL** — grep이 실제 다중 목적지·고유 결합을 놓침 | **FAIL** — source-row 및 full-body/list 목적지를 혼동 |
| F3 | **FAIL (결과)** — 별도 감사는 실행됐으나 B2a·E2 잔존 | **FAIL (결과)** — 별도 감사는 실행됐으나 B2a·E2 잔존 |

## 1. Duolingo — FAIL

### 1.1 출처에 없는 claim-surface 원장과 font evidence 승격 — A1 / E1 FAIL

원본에는 `verification_v2`나 claim별 surface mapping이 없다. 전역 `verified`, `tokens.extracted`, Tier 1/2 설명만 있다(`web/references/duolingo/DESIGN.md` 1–18, 325–328, 541–562행). 그런데 provenance는 각 surface에 `inspected`/`captured: 2026-06-06`을 부여하고(`docs/design-md-weight/migrated/duolingo/provenance.md` 37–51행), 모든 color token을 `brand-identity-color + duolingo-live`, typography/spacing/component token을 `duolingo-live`에 claim별로 배정한다(70–84행).

정리용 id 자체는 문제가 아니지만, 전역 검증일을 surface별 capture date로 바꾸고 각 token을 특정 surface에 매핑하는 것은 원본에 없는 Proof claim이다. `tokens.source: reconciled`와 Tier source 목록은 모든 token이 각 surface에서 독립 확인됐다는 뜻이 아니다. 이 mapping은 제거하거나 exact legacy evidence를 붙여야 한다.

같은 evidence-class 승격이 portable Font evidence에도 있다. 이관본은 Feather Bold/DIN을 `Official product-use`로 분류한다(`DESIGN.md` 200–206행). 원본의 font 설명은 body와 Tier 2 corroboration에 있고, official/computed product-family 증거는 분리돼 있지 않다(원본 111–129, 548–554행). `Official product-use`로 올릴 수 없으며 source-stated/Tier-2 narrative와 live/official evidence를 구분해야 한다.

### 1.2 F3 뒤에도 남은 Layout 해석 — B2 / B2a / E1 / E2c / F1 / F3 FAIL

Layout은 다음 두 판단을 직접 규칙처럼 남긴다.

- `Single-column, full-width content with one focal action per screen`(`docs/design-md-weight/migrated/duolingo/DESIGN.md` 574행)
- answer tiles의 `comfortable spacing for rapid tapping`(584행)

576행의 완전 한정은 그 뒤의 whitespace-reading 문단만 덮는다. 앞선 574행과 표 뒤의 584행에는 `derived editorial implementation inference / not Duolingo-authored or a separately published UI specification`이 인접하지 않는다. 숫자·breakpoint와 달리 “one focal action”, “comfortable”, “for rapid tapping”은 composition/purpose 판단이다.

감사 로그는 Layout measurements를 비해석 사실로 남겼고(`audit-log.md` 11–16행), provenance derived range도 이 둘을 열거하지 않는다(`provenance.md` 111행). Migration log는 모든 editorial/causal/judgement sentence가 한정됐다고 선언한다(`migration-log.md` 38행). 최종 body보다 강한 F1/E2c 주장이다.

### 1.3 실제보다 좁은 이중 목적지 기록 — E2 / E2a / E2c / F2 FAIL

대표적인 source-row mismatch는 두 가지다.

1. `design.duolingo.com/identity/color`는 portable Scope(9행), Foundations Semantic color의 corroboration(93행), provenance surfaces/sources/Tier 1에 있다. 그러나 provenance와 migration log는 이를 Scope + provenance의 **dual**로만 기록한다(`provenance.md` 23, 109행; `migration-log.md` 17, 21, 39행). F2의 grep 결과가 Foundations hit를 놓쳤다.
2. YAML catalog `primary_color` `#58CC02`는 provenance identity, portable Distinctive의 명시적 `catalog primary_color`(36행), Foundations의 명시적 `catalog primary_color`(97행)에 있다. 그런데 provenance와 log는 identity + Foundations의 dual로만 적는다(`provenance.md` 23, 107행; `migration-log.md` 13, 39행).

같은 문자열이 다른 source section에도 반복된다는 사실은 해당 source field/row의 실제 목적지를 생략할 이유가 아니다. F2는 literal 존재 확인이 아니라 source-row와 field/role 문맥의 모든 목적지를 닫아야 한다.

### 1.4 §9-only 우측 배치와 Feather Bold 맥락 손실 — A1 / A3 / E2 FAIL

원본 §9 correct-feedback prompt만 green `CONTINUE` button을 **on the right**라고 명시한다(`web/references/duolingo/DESIGN.md` 433–438행). 다른 feedback/component/state 행은 CTA의 존재만 기록한다. 이관본 Correct Feedback Bar는 nested CTA를 보존하지만 우측 배치를 잃는다(`docs/design-md-weight/migrated/duolingo/DESIGN.md` 517–524행). Migration log의 “§9-only 고유 근거값 없음” 주장은 틀렸다(27행).

또한 원본은 Feather Bold의 곡선이 Duo 형태를 닮았다는 맥락을 body와 Tier-2 evidence에 두 번 기록한다(원본 57, 553–554행). 이 설명은 portable Typography와 provenance 모두에서 사라졌고, log는 Typography를 옮겼다고만 적는다(`migration-log.md` 19행). 공식 product-use로 승격하지 않은 정확한 evidence class와 인접 한정 아래 이 맥락을 복원하거나, 최소 필드 생략 사유를 log에 기록해야 한다.

### 1.5 mixed-role component를 categorical state map으로 닫음 — C2 / E2c FAIL

Accent Button은 `alternative positive action`, `Super upsell`, `info CTA`를 한 component role에 합치고도 loading/error/success를 모두 `not-applicable`로 닫는다(`docs/design-md-weight/migrated/duolingo/DESIGN.md` 300–323행). Exact label/behavior가 없는 서로 다른 action을 모두 destination으로 보는 근거가 없다.

Destructive Button은 `Incorrect CONTINUE`, give-up/end-session, **delete**를 함께 기록한다(325–337행). 그런데 loading/error/success 사유는 incorrect/give-up/end-session만 말하고 delete의 request/failure/outcome 의미를 닫지 못한다(339–347행). 한 map으로 표현할 수 없으면 exact role별로 component를 나누거나 세 applicability field를 unresolved 최소 경계에서 생략해야 한다. Log의 역할별 C2 준수 주장은 실제보다 강하다(`migration-log.md` 32행).

### 1.6 fictional persona fact의 Audience 승격 — D2 / A1 / E2c FAIL

Portable Audience는 `Super Duolingo is a named product offering (hearts and ads)`라고 쓴다(`docs/design-md-weight/migrated/duolingo/DESIGN.md` 30행). `ads`는 원본에서 fictional Daniel biography에만 나온다(`web/references/duolingo/DESIGN.md` 487–495행). 다른 독립 source에는 Super/Plus accent와 hearts/upsell은 있지만 “ads 제거”가 없다.

따라서 `ads`를 product fact로 추출한 것은 D2가 금지한 persona 승격이다. Provenance와 migration log는 이름·나이·biography를 재수록하지 않았고 Audience에는 exclusion boundary만 남겼다고 주장해 실제 body와도 다르다(`provenance.md` 112행; `migration-log.md` 31, 39행).

### Duolingo에서 확인된 통과 항목

- YAML unitless line-height 1.2/1.25/1.5, primitive type, `tokens.source: reconciled`, component-local shadow/color 결합은 보존됐다.
- §14 11행 capture record, generic Focus와 `focus-visible` 분리, B3 다섯 증거 종류와 per-component computed gate가 남아 있다.
- 미관측을 `not-applicable` 사유로 직접 쓰지 않았고, 근거 없는 card/modal kind와 map은 생략했다. 네 unattributed curve 값은 provenance omission ledger에만 있다.

### Duolingo 재제출 조건

1. 근거 없는 per-surface dates와 claim-token surface mapping을 제거하거나 exact legacy evidence를 결합한다. Font evidence의 `Official product-use` 승격을 철회하고 owl-curve 맥락을 정확한 evidence class로 복원한다.
2. Layout을 포함해 portable body 전체를 다시 F1 스캔한다. 574·584행의 해석을 제거하거나 각각 인접 완전 B2a 아래 둔다.
3. identity/color URL과 `primary_color`의 Scope/Distinctive/Foundations/provenance 목적지를 source-row 단위로 migration log와 provenance에 모두 기록한다.
4. correct-feedback CTA의 source §9-only 우측 배치를 portable component/layout 슬롯에 복원하고 §9 disposition을 고친다.
5. Accent/Destructive의 exact action identity를 확인해 role별로 분리하거나 loading/error/success applicability를 최소 unresolved field 경계에서 생략한다.
6. fictional Daniel에서 온 `ads`를 Audience에서 제거하고 D2/F2 준수 기록을 실제 body와 맞춘다.
7. 새 신선 세션 F3를 실행하고 gate-only를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. Ably — FAIL

### 2.1 product-story synthesis와 canonicality 판단의 B2a 누락 — B2 / B2a / E1 / E2c / F1 / F3 FAIL

Scope 11행의 앞 두 문장은 각각 official product story와 current company mission을 attribution한다. 마지막 문장 `Personalization and an accessible seller ecosystem are presented as two connected sides of that next-commerce direction`은 두 source를 하나의 관계로 묶은 synthesis이지만 인접 완전 한정이 없다(`docs/design-md-weight/migrated/ably/DESIGN.md` 11행). 9행의 qualifier는 앞 문단의 evidence-domain sentences를 한정하며 이 별도 문단의 synthesis를 덮지 않는다.

Foundations도 yellow Seller Square campaign action을 `local promotion, not a canonical ABLY semantic color`로 판정한다(94행). 색값 관측과 canonicality 판단은 evidence class가 다르다. 후자를 유지하려면 인접 완전 B2a가 필요하다.

Provenance derived range는 이 둘을 열거하지 않고(`provenance.md` 80–95행), F1은 모든 해석 site를 닫았다고 주장한다(`migration-log.md` 42행). F3 audit도 third-class 문장만 수정했다고 기록했으므로(`audit-log.md` 5–23행), 최종 B2a 잔존은 F1/E2c와 F3 결과를 함께 실패시킨다.

### 2.2 generic Team action의 exact behavior 발명·과단정 — A1 / C2 / E2c FAIL

원본이 확인한 role은 `Current ABLY Team primary action`, `low-emphasis action`, `compact editorial action`뿐이다(`web/references/ably/DESIGN.md` 173–176, 247–256행). Exact selector label, destination, request, validation behavior는 없다.

이관본은 Team soft action의 loading/error/success를 모두 `not-applicable`로 닫고(`docs/design-md-weight/migrated/ably/DESIGN.md` 243–245행), editorial pill은 source에 없는 `navigates Team content`를 이유로 같은 세 상태를 닫는다(269–271행). Styling/emphasis/editorial이라는 이름만으로 navigation/request/outcome 의미를 확정할 수 없다. Team primary도 `recruiting/editorial CTA`라는 surface-level 해석만 있으므로 같은 exact-role 검사를 다시 받아야 한다(218–220행).

최소 수정은 soft action과 editorial pill의 loading/error/success field를 생략하는 것이다. 독립 selector/label/behavior evidence를 추가하지 않는 한 role을 발명해 `not-applicable`로 닫을 수 없다. Provenance와 migration log의 “역할 의미로 C2 완료” 주장도 내려야 한다(`provenance.md` 151행; `migration-log.md` 36행).

### 2.3 interaction-state absence를 copy-rule 부재로 확장 — D1 / E2c FAIL

Portable Content는 consumer, Team, Seller Square의 CTA/error/empty/cart/payment/order-success **copy rules are unobserved**라고 새 부정 claim을 만든다(`docs/design-md-weight/migrated/ably/DESIGN.md` 324행). 원본 §10은 일반 voice guidance를 기록하고(원본 304–306행), §14는 consumer interaction-state capture의 absence를 기록한다(328–330행). 세 surface의 copy-rule coverage가 없다는 claim은 원본에 없다.

미해상 copy field는 생략해야 하며 interaction-state 부재를 copy-domain 부재로 바꿀 수 없다. Migration log §10의 “원본에 없는 도메인 coverage 문구 신설 없음” 주장도 실제 body보다 강하다(`migration-log.md` 32행).

### 2.4 `verification_v2`·metadata·§14 disposition 불일치 — E2 / E2a / E2c / F2 FAIL

Migration log 17행은 YAML `verification_v2` 전체를 provenance-only로 기록한다. 하지만 source `verification_v2.surfaces`의 consumer/team/seller URL은(`web/references/ably/DESIGN.md` 19–29행) portable Scope와 provenance Surfaces 양쪽에 있다(`docs/design-md-weight/migrated/ably/DESIGN.md` 9행; `provenance.md` 42–48행). Footer에 같은 URL이 한 번 더 있다는 사실과 footer disposition(38행)은 `verification_v2` source-row의 이중 목적지를 대신하지 않는다.

또한 source `tokens.components_harvested: true`(원본 171행)는 provenance Proof notes에 보존됐지만(`provenance.md` 149행), YAML metadata disposition이나 F2 inventory 어느 행에도 없다.

마지막으로 F2는 “§14 baseline-only sentence”가 Capture record와 Named gaps 양쪽에 grep됐다고 쓴다(`migration-log.md` 43행). 전체 baseline-only 본문은 Capture record 167행에만 있고, Named gaps 363행은 absent-treatment **목록만** 보존한다. Full-body preservation과 list의 dual destination을 구분해야 한다.

### Ably에서 확인된 통과 항목

- YAML unitless line-height 여섯 비율, button×5/card primitive, `ds.type: brand`, 모든 component-local field 결합은 보존됐다.
- §14 baseline-only 본문, 미관측 focus treatment의 비승격, B3 다섯 evidence kind/per-component gate, story-card kind/map 생략은 유지됐다.
- §13의 세 항목은 fictional biography가 아니라 first-party task contexts이며, 가상 이름·나이·수치가 추가되지 않았다. Placeholder wrapper나 unattributed curve omission은 없다.

### Ably 재제출 조건

1. Scope synthesis와 yellow-campaign canonicality 판단을 제거하거나 각각 인접 완전 B2a 아래 둔다. 전체 body를 다시 F1 스캔하고 provenance derived range를 실제 site와 맞춘다.
2. Team soft/editorial pill의 loading/error/success를 exact role evidence가 없으면 최소 field 경계에서 생략한다. Team primary와 Seller entry도 같은 기준으로 재검사하며, `navigates Team content` 같은 unsupported behavior를 제거한다.
3. Content 324행의 새 negative copy-domain claim을 삭제한다. 유지하려면 세 surface별 copy evidence를 독립적으로 추가해야 한다.
4. `verification_v2.surfaces`를 Scope + provenance 이중 목적지로 기록하고, `components_harvested: true`의 disposition을 명시한다.
5. §14 full-body preservation과 absent-treatment list의 Named gaps 목적지를 나눠 기록하고 F2/E2c 준수 문구를 실제 파일과 맞춘다.
6. 새 신선 세션 F3를 실행하고 gate-only를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Duolingo FAIL / Ably FAIL.** 두 건 모두 별도 F3 감사와 기계 게이트를 통과했지만, 최종 산출물에서 B2a와 E2 두 계열이 다시 확인됐다. F3 구조 전환은 이번 표본에서 4웨이브 재발을 끊지 못했다.

두 표본의 수정·동일 sol 재제출과 나머지 3건의 v7 전수 의미 검토 전까지 웨이브 5 및 카탈로그 채택을 정지한다.
