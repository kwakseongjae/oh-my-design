# T2-1 웨이브 2 표본 검토 — sol 의미 레인 (2/5, 40%)

- 대상: `docs/design-md-weight/migrated/{coupang,openai}/`
- 원본: `web/references/{coupang,openai}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v4 전 조항**
- 일시: 2026-08-23
- 전제: 웨이브 2의 5건이 통과한 12종 기계 게이트는 수용했다. 이 문서는 게이트가 식별하지 못하는 값-필드 결합, 증거 종류, 권위 한정, 본문 보존, 실제 disposition을 원본과 수동 대조한다.

## 판정 요약

| 표본 | 판정 | 차단 조항 |
|---|---|---|
| Coupang | **FAIL** | A1, B2/B2a, E2/E2a |
| OpenAI | **FAIL** | A1/A1b, A2, B2/B2a, C4, E1, E2/E2a/E2c |

**표본 결과: PASS 0/2, FAIL 2/2.** v4를 첫 워커 입력으로 제공했지만, 웨이브 1에서 정밀화한 B2a와 E2 계열은 첫 산출물에서 완전히 지켜지지 않았다. A1a와 B3는 두 건 모두 바로 통과했다.

## v4 전 조항 대조표

| 조항 | Coupang | OpenAI |
|---|---|---|
| A1 | **FAIL** — Times 증거 종류 변조 | **FAIL** — Badge 값, easing 이름·용도 결합 손실 |
| A1a | PASS — `1.5` / `1.25` | PASS — 10개 unitless 비율 |
| A1b | PASS — button/input/listItem 관계 | **FAIL** — badge 3개를 1개 umbrella type으로 축약 |
| A1c | PASS — `ds.type: brand` 포함 | PASS — source에 `ds` 없음, `tokens.source` 보존 |
| A2 | PASS | **FAIL** — §14 두 의미 제약 누락 |
| A3 / A4 | PASS / PASS | PASS / PASS |
| B1 | PASS | PASS |
| B2 / B2a | **FAIL** — Scope의 편집적 인과 해석 | **FAIL** — 여덟 Principles 밖 편집적 해석 |
| B3 | PASS | PASS |
| C1 / C2 / C3 | PASS / PASS / PASS | PASS / PASS / PASS |
| C4 | PASS | **FAIL** — Dialog kind/map 발명 |
| D1 / D2 | PASS / PASS | PASS / PASS |
| E1 | PASS | **FAIL** — third-party font history를 official로 승격 |
| E2 | **FAIL** | **FAIL** |
| E2a | **FAIL** — §11 다중 목적지 누락 | **FAIL** — favicon의 실제 portable 목적지 부정 |
| E2b | PASS — 9개 wrapper 전부 원장화 | 적용 대상 없음 — source placeholder 0 |
| E2c | PASS — B3 주장은 본문과 일치 | **FAIL** — badge·§14·motion 준수 과장 |

## 1. Coupang — FAIL

### 1.1 캡처 안의 미해상 증거를 `Outside this capture`로 변조 — A1 / E2 FAIL

원본은 제품 URL 문서에 Times가 여덟 번 나타났지만 FontFaceSet/source corroboration이 없어 **`Unresolved`**라고 분류한다(`web/references/coupang/DESIGN.md` 133–138행). 이관본은 같은 관측을 **`Outside this capture`**로 바꾼다(`docs/design-md-weight/migrated/coupang/DESIGN.md` 98–103행). 셀 본문이 “captured product URL documents”라고 적으므로 새 라벨은 내용과도 모순이다.

`Unresolved`는 `[FILL IN]` placeholder가 아니다. Core v2도 official product use, live observation, distributed asset, declared-only face, unresolved claim을 별도 증거 도메인으로 요구한다(`spec/design-md-core-v2.md` 700–706행). 그런데 로그는 portable placeholder 금지 때문에 라벨을 바꿨다고 기록한다(`migration-log.md` 19행). 증거 종류 손실과 실제 규칙에 맞지 않는 disposition 사유가 동시에 남았다.

### 1.2 Scope의 편집적 인과 해석에 완전한 인접 한정 없음 — B2 / B2a FAIL

이관본은 careers 언어가 storefront의 “dense, utilitarian register”를 설명한다고 인과적으로 해석한다(`DESIGN.md` 11행). 같은 문단의 “corporate/editorial sources; not token sources”는 token 승격 경계일 뿐, 이 해석이 `derived editorial implementation inference`이며 Coupang-authored 또는 별도 발행된 UI specification이 아니라는 evidence-class 완결 문구가 아니다.

`DESIGN.md` 37행의 완전한 한정은 명시적으로 “The three numbered items below”만 덮는다. 따라서 39–41행의 §12 UI implication은 B2a PASS지만 Scope 11행은 덮지 않는다. Governance의 일반 authority 문구도 대체물이 아니다.

### 1.3 §11의 실제 다중 목적지를 로그가 누락 — E2 / E2a FAIL

원본 §11은 corporate/careers Coupang Sans의 Display/Text cuts와 speed/legibility 맥락을 함께 둔다(원본 253–257행). 이 내용은 이관본 Scope뿐 아니라 Typography & Assets에도 남는다(`DESIGN.md` 101–105, 127–131행). 서사/source boundary는 provenance에도 남는다(`provenance.md` 75–80, 130행).

그러나 `migration-log.md` 32행은 portable 목적지를 `Experience scope` 하나로만 적고 URL만 provenance로 분리했다고 기록한다. 실제 `Experience + Typography & Assets + provenance` 분기를 모두 기록해야 한다.

### 1.4 §13을 삭제했다고 적었지만 no-persona 경계는 Audience에 남음 — E2 FAIL

원본 §13의 “No first-party persona research … Do not fabricate …” 경계(원본 265–270행)는 portable Audience에 거의 그대로 남는다(`DESIGN.md` 23–25행). 반면 `migration-log.md` 34행은 §13을 `삭제`로 적고 두 placeholder wrapper의 provenance 분리만 기록한다.

실제 disposition은 `no-persona 경계 → Experience/Audience`, `미해상 두 값 → 최소 필드 생략`, `원문 wrapper → provenance omission ledger`다. Primary tasks를 유지한다면 그 근거가 §13 placeholder가 아니라 §4의 캡처된 controls라는 점도 분리해 기록해야 한다.

### Coupang에서 확인된 통과 항목

- **A1a/A1b/A1c:** unitless `1.5` / `1.25`, button/input/listItem 관계, `ds.type: brand`가 각각 보존됐다(`DESIGN.md` 114–125, 166–170, 189–193, 215–220, 238–243행; `provenance.md` 17–21행).
- **A2/A3/A4:** §14 default-only 경계와 여섯 미관측 category를 남겼고, §9-only delivery badge 금지를 Avoid로 옮겼으며, `#212b36`을 account component field로 유지했다.
- **B1/B3:** `focus-visible` treatment를 발명하지 않았다. Motion은 transition properties, animation name, duration, easing, reduced-motion behavior 다섯 종류와 per-component computed-only 게이트를 모두 적었다(`DESIGN.md` 88–90, 331행).
- **C1–C4/D1/D2:** state 이유는 control 역할별이고 coverage 완료를 주장하지 않는다. 가상 persona를 승격하거나 sidecar에 재수록하지 않았다.
- **E2b/E2c:** 아홉 `[FILL IN]` wrapper가 `provenance.md` 132–146행과 로그 34–36행에 모두 기록됐고, 로그의 B3 주장은 실제 본문과 일치한다.

### Coupang 재제출 조건

1. Times를 `Unresolved` 또는 동등한 `captured but uncorroborated unresolved claim` 증거 종류로 복원하고 non-promotion은 유지한다.
2. Scope 11행의 인과 해석을 삭제하거나 바로 인접한 곳에 B2a 완전 문구를 둔다.
3. §11 로그에 `Experience + Typography & Assets + provenance` 실제 목적지를 모두 적는다.
4. §13 로그를 no-persona 경계의 Audience 이동, 두 값의 생략, wrapper의 provenance 보관으로 정확히 고친다.
5. 12종 기계 게이트를 재통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. OpenAI — FAIL

### 2.1 Badge의 검증값과 컴포넌트별 primitive 관계 손실 — A1 / A1b / E2c FAIL

원본 Neutral badge의 `Border: none`(원본 323–330행)이 이관본 Badge에서 빠졌다(`DESIGN.md` 485–495행). Unknown/omission은 `none`과 동치가 아니므로 직접적인 필드 손실이다.

또 원본 YAML은 `badge-neutral`, `badge-teal`, `badge-amber` 각각에 `type: badge`를 검증한다(원본 72–74행). 이관본은 세 variant를 나열하지만 umbrella `Type: badge` 한 줄만 둔다(`DESIGN.md` 485–495행). v4 A1b의 “컴포넌트별 보존”에서 implicit inheritance는 세 source component→primitive 관계를 대신하지 못한다. 그런데 로그는 `badge ×3`을 컴포넌트별로 보존했다고 주장한다(`migration-log.md` 15행).

### 2.2 third-party/WebSearch font history를 `Official product-use`로 승격 — A1 / E1 FAIL

원본 source comment와 provenance는 OpenAI Sans rebrand/font history의 근거를 third-party WebSearch corroboration으로 기록하고, first-party brand page는 HTTP 403이었다고 적는다(원본 623–634행; `provenance.md` 55–66행). 이관본은 그 이력을 `Official product-use`로 분류한다(`DESIGN.md` 169–177행).

403 caveat는 official authority를 만들지 않는다. Third-party-corroborated brand history, live/source-stated surface observation, official product-use는 서로 다른 증거 종류다. 현재 분류는 source authority보다 강한 승격이다.

### 2.3 완전한 B2a 한정이 여덟 Principles 밖의 편집적 해석을 덮지 않음 — B2 / B2a FAIL

`DESIGN.md` 38행은 완전한 한정을 갖지만 “These eight items”라고 범위를 닫는다. 그래서 Scope의 “interface argues … / well-set book”(`DESIGN.md` 11행), elevation philosophy(130행), “Whitespace is treated as the brand”(607행), voice characterization(625–637행) 같은 retained editorial readings는 인접 한정 없이 권위 있는 규칙처럼 남는다.

원본 source comment는 interpretive claims를 documented OpenAI statements가 아닌 editorial readings로 구분한다(원본 638–640행). Principles 한정과 Governance 645행의 일반 reconstruction 문구는 다른 섹션의 derived block을 대신하지 못한다.

### 2.4 §14 본문 두 의미 제약 누락 — A2 / E2c FAIL

원본 rate-limit Error는 “Honest and specific, not apologetic boilerplate”를 포함하고(원본 585–587행), Selected는 “a quiet highlight, not a colored bar”라는 표현 제약을 포함한다(원본 590–591행). 이관본의 해당 두 행은 각각 reset 안내와 `no border`에서 끝나 이 의미를 잃는다(`DESIGN.md` 224–230행).

A2는 graph 0/440 동안 §14 **본문** 보존을 요구한다. 로그 34행의 “12행 표 본문 보존” 주장은 행 개수만 같고 셀 의미가 빠진 현재 본문보다 강하다.

### 2.5 Dialog surface의 interactive kind와 state map 발명 — C4 FAIL

원본은 `type: dialog`, geometry, confirmations/settings/upgrade 용도만 기록한다(원본 78, 378–387행). Dialog surface 자체의 hover/disabled 등 interactive-kind/state 증거는 없다. 이관본은 `Kind: interactive`를 확정하고 “Pointer-web modal”을 이유로 hover를 applicable로 만드는 7-state map을 추가한다(`DESIGN.md` 559–580행).

Dialog 안의 controls가 interactive인 것과 dialog surface가 hover/disabled state를 갖는 것은 다르다. C4에 따라 `Type: dialog`와 검증된 geometry는 보존하되, 독립적인 interactive-kind 근거가 없으면 kind와 applicability map을 생략해야 한다.

### 2.6 favicon의 실제 portable 목적지를 원장이 부정 — E2 / E2a FAIL

Provenance는 Google s2 favicon을 identity metadata로 보관한다(`provenance.md` 15, 20행). Portable Assets도 같은 Google s2/openai.com favicon identity를 직접 언급한다(`DESIGN.md` 206–208행). 그런데 로그 13행과 provenance 93행은 이를 provenance-only이며 portable Typography & Assets claim이 아니라고 단정한다.

Portable에서 boundary 설명으로 유지하려면 그 두 번째 목적지를 기록해야 한다. Identity-only가 의도라면 portable Assets의 favicon 문장을 제거해야 한다.

### 2.7 §13의 실제 mixed disposition 누락 — E2 FAIL

가상 biography 자체는 올바르게 삭제됐고 D2는 통과한다. 다만 portable Audience는 “Source §13’s named fictional archetypes are not Audience and are not primary tasks”라는 §13-derived exclusion boundary를 유지한다(`DESIGN.md` 24–26행). 로그 33행은 §13을 pure `삭제`로 적는다.

로그는 `exclusion boundary → Audience / fictional names·ages·cities·biographies → 삭제 / sidecar 재수록 없음`으로 실제 분기를 기록해야 한다. 세 Primary task는 §13이 아니라 component/state/CTA/docs 근거에서 왔다는 mapping도 분리해야 한다.

### 2.8 curve 외 easing token 이름·용도·component association까지 삭제 — A1 / E2 / E2c FAIL

원본 §15는 `ease-out`, `ease-in`, `ease-standard`라는 세 이름과 각각 appearing menus/modals/toasts, dismissals, two-way hovers/tab/drawer의 use를 기록한다(원본 605–611행). Menu/popover signature motion은 `ease-out`과 직접 결합돼 있다(617행).

이관본은 menu/popover에서 `ease-out` 결합을 제거하고(160행), 세 이름과 상세 use를 anonymous “appearing / leaving / two-way” 역할로 축약한다(163행). Provenance 97행은 이름과 curve를 보관하지만 use association은 보관하지 않는다. 로그 35행은 **cubic-bezier curve 세 개만** 삭제했고 signature prose를 보존했다고 주장하므로 실제 disposition보다 강하다.

Curve 자체의 삭제와 provenance 보관은 허용된다. 실패 지점은 curve가 아닌 token name/use/component 결합까지 조용히 지운 것이다.

### OpenAI에서 확인된 통과 항목

- **A1a/A1c:** `1.07 / 1.15 / 1.25 / 1.33 / 1.4 / 1.56 / 1.63 / 1.6 / 1.57 / 1.38`을 역할별 unitless 비율로 보존했다(`DESIGN.md` 188–204행). Source에 `ds`는 없고 `tokens.source: prose-derived`는 provenance에 남았다.
- **A3/A4/B1:** §9-only composer icons와 model-card type values를 옮겼고, teal/default-primary 및 warning/amber 역할을 합치지 않았다. Generic Focus 값은 별도 observed state로 두고 `focus-visible` treatment로 승격하지 않았다.
- **B3:** `DESIGN.md` 163행은 transition properties, animation name, duration, easing, reduced-motion behavior 다섯 종류와 per-component computed-only 승격 조건을 모두 갖는다. Curve 삭제 문제는 B3 전문이 아니라 A1/E2 disposition 문제다.
- **C1–C3:** loading/error/success는 각 control 역할로 판정했고 미관측을 비적용 사유로 쓰지 않으며 coverage 완료도 주장하지 않는다.
- **D1/D2:** 원본 밖 제품 도메인을 만들지 않았고, §13의 Maya/David/Priya biography를 portable이나 provenance에 재수록하지 않았다. Primary tasks는 별도 component/state/copy 근거가 있다.
- **E2b:** Source placeholder가 없어 적용 대상이 아니다. 세 curve 문자열은 별도의 provenance omission record에는 남아 있다.

### OpenAI 재제출 조건

1. Neutral Badge의 `Border: none`을 복원하고 Neutral/Teal/Amber 각 source variant에 `Type: badge` 관계를 명시한다.
2. OpenAI Sans history를 actual third-party-corroborated evidence class로 되돌리고, first-party 근거가 없는 `Official product-use` 승격을 제거한다.
3. Principles 밖 retained editorial block마다 완전한 인접 B2a 한정을 두거나, 직접 관측 사실만 남기도록 문장을 줄인다.
4. §14 rate-limit/Selected의 빠진 두 의미 제약을 복원한다.
5. Dialog은 `Type: dialog`와 검증값만 남기고 interactive kind/map은 근거가 생길 때까지 생략한다.
6. Favicon과 §13의 실제 portable/provenance/delete 목적지를 로그에 정확히 맞춘다.
7. 세 easing token 이름·use와 menu/popover의 `ease-out` association을 source-stated/uncomputed label로 복원한다. 세 cubic-bezier curve는 계속 생략하고 provenance에 둘 수 있다.
8. Migration log의 badge·§14·§15 준수 주장을 실제 본문과 맞추고, 12종 기계 게이트를 재통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Coupang FAIL / OpenAI FAIL.** 기계 게이트 PASS 5/5는 의미 보존 PASS를 대신하지 못한다.

표본 2/5가 모두 실패했으므로 웨이브 2의 나머지 3건도 같은 v4 의미 기준으로 전수 재검토해야 한다. 두 표본을 개정하고 동일 sol 레인에서 재확인하기 전까지 웨이브 2 채택과 다음 웨이브 진행을 정지한다. 표본율은 40%를 유지하며, 이 판정은 카탈로그 채택이 아니다.
