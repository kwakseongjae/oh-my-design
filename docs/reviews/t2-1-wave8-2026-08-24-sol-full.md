# T2-1 웨이브 8 전수 검토 — sol 의미 레인 (4/4 첫 판정)

- 대상: `docs/design-md-weight/migrated/{adobe,airbridge,alipay,amazingtalker}/`
- 원본: `web/references/{adobe,airbridge,alipay,amazingtalker}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7 전 조항
- 프로토콜: `docs/reviews/t2-1-protocol-2026-08-23-grok.md`
- 일시: 2026-08-24
- 검토 모드: 웨이브 8 첫 4/4 전수 판정. 5번째 슬롯은 완료분 중복이라 범위에서 제외했다. 첫 FAIL은 기대값이며, 아래 재제출 조건만 다음 개정과 동일 sol 재확인의 입력이다.

## 판정 요약

| id | 판정 | 차단 조항 |
|---|---|---|
| adobe | **FAIL** | A1/A1b/A3/A4, C4, D1, E1, E2/E2a/E2c, F2 |
| airbridge | **FAIL** | D1, E1 |
| alipay | **FAIL** | B2/B2a, D1, E1, E2/E2c, F1/F2 |
| amazingtalker | **FAIL** | A1/A3/A4, C4, D1, E1, E2/E2c, F2 |

**웨이브 첫 판정: FAIL 4/4, PASS 0/4.**

기계 검사는 의미 판정을 대신하지 않는다. 아래 두 명령을 현재 파일에 직접 재실행했고 네 건 모두 통과했다.

1. `node test-v2/tools/migrate-reference.mjs --brand {id} --gate-only`
2. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/{id}/DESIGN.md --check --require-portable-core --json`

| id | gate-only | Core | DESIGN.md SHA-256 | F3 실행 증거 |
|---|---|---|---|---|
| adobe | PASS, problems 0 | exit 0, `portable_core: true` | `64c274ec205314fc5dbaea4457d524fcb4696c8ba6ac197b2ab07e64c5db13f3` | `AUDIT_DONE fixes=31` |
| airbridge | PASS, problems 0 | exit 0, `portable_core: true` | `9f697e06cee4400e0b3f9940055338810d130df5f915fb0de5a690586309ca2a` | `AUDIT_DONE fixes=33` |
| alipay | PASS, problems 0 | exit 0, `portable_core: true` | `4b58d4d180c095427dc85c41287df49987ec9a66aff526cec54feff7cce368b3` | `AUDIT_DONE fixes=27` |
| amazingtalker | PASS, problems 0 | exit 0, `portable_core: true` | `8589286390f9697c16207eb9472c836108984b72cdcd8fe211f304fb133f327e` | `AUDIT_DONE fixes=27` |

네 건 모두 이관 워커와 분리된 신선 세션 F3를 이미 1회 실행했고 `audit-log.md`의 post-F3 SHA가 현재 파일과 일치한다. 따라서 F3는 실행 증거로 PASS다. 이는 본문 의미 PASS 보증이 아니며, 프로토콜에 따라 이번 목록 개정에 새 F3를 요구하지 않는다.

## Rulebook v7 전 조항 매트릭스

표의 FAIL은 아래 건별 차단점에 연결된다. PASS는 해당 조항의 전수 대조 결과이지 문서 전체 PASS를 뜻하지 않는다.

| 조항 | adobe | airbridge | alipay | amazingtalker |
|---|---|---|---|---|
| A1 값 손실 0 / 발명 0 | FAIL — §9·§11·interaction 역할 | PASS | PASS | FAIL — §9·§11 관계 |
| A1a unitless ratio | PASS | PASS | PASS | PASS |
| A1b primitive type | FAIL — Glass card·Promo badge | PASS | PASS | PASS |
| A1c metadata | PASS | PASS | PASS | PASS |
| A2 §14 보존 / §9 prompt 삭제 | PASS | PASS | PASS | PASS |
| A3 §9-only 고유값 | FAIL — Category Tile tuple | PASS | PASS | FAIL — Course/Coral tuple |
| A4 field-role 비결합 | FAIL — Category/App switcher | PASS | PASS | FAIL — component-bound typography tuple |
| B1 관측 evidence kind 비승격 | PASS | PASS | PASS | PASS |
| B2/B2a 인접 완전 한정 | PASS | PASS | FAIL — Scope·Distinctive | PASS |
| B3 motion 5종 gate | PASS | PASS | PASS | PASS |
| C1 capture absence ≠ N/A | PASS | PASS | PASS | PASS |
| C2 exact role별 L/E/S | PASS | PASS | PASS | PASS |
| C3 coverage 완료 주장 금지 | PASS | PASS | PASS | PASS |
| C4 kind 근거와 kind/map | FAIL — Glass·App switcher | PASS | PASS | FAIL — Course Card |
| D1 새 negative coverage 금지 | FAIL | FAIL | FAIL | FAIL |
| D2 fictional persona 금지 | PASS | PASS | PASS | PASS |
| E1 provenance/portable evidence boundary | FAIL | FAIL | FAIL | FAIL |
| E2 source-row 실제 disposition | FAIL | PASS | FAIL | FAIL |
| E2a 모든 다중 목적지 | FAIL | PASS | PASS | PASS |
| E2b omission ledger | PASS | PASS | PASS | PASS |
| E2c 준수 주장 강도 | FAIL | PASS | FAIL | FAIL |
| F1 최종 B2a scan 결과 | PASS | PASS | FAIL | PASS |
| F2 최종 E2 grep 결과 | FAIL | PASS | FAIL | FAIL |
| F3 별도 세션 1회 실행 | PASS | PASS | PASS | PASS |

## 1. adobe — FAIL

### 1.1 §9 Category Tile의 내부 tuple 손실 — A1 / A3 / A4 / E2 / E2c / F2 FAIL

원본 `web/references/adobe/DESIGN.md` 329행은 Category Tile 하나에 다음을 결합한다.

- heading: Adobe Clean Display Black, 24px, 900, `#000000`
- body: 16px / 400
- text link: bold 14px / 700
- no shadow / no border

이관본 `DESIGN.md` 395–407행은 surface, background, text, radius만 남긴다. 217–228행의 일반 Type roles에 일부 숫자가 따로 존재해도 Category Tile 내부의 heading/body/link 역할 결합을 보존한 것이 아니다. `provenance.md` 145행과 `migration-log.md` 30행은 §9-only 고유값이 Glass의 white 16px뿐이라고 잘못 닫았다.

### 1.2 §11 PostScript·Firefly 관계 손실 — A1 / E2 / E2c / F2 FAIL

원본 366행은 PostScript를 desktop-publishing 혁명을 물리적으로 인쇄 가능하게 만든 page-description language로 설명하고, 현재 진화를 Firefly generative AI로 잇는다.

이관본 `DESIGN.md` 23·25행은 PostScript 명사와 화살표, “current era Firefly”만 남겨 page-description/printability 인과와 generative-AI 관계를 잃었다. `provenance.md` 93행과 `migration-log.md` 19·32행의 §11 disposition도 같은 손실을 기록하지 않는다.

### 1.3 primitive type과 interaction kind 삭제 — A1 / A1b / A4 / C4 / E2 / E2c / F2 FAIL

- 원본 196·204행은 Glass Quick-Link를 `Cards & Containers` 아래의 card로, 212–216행은 Promo Flag를 `Badges` 아래의 badge로 분류한다. 이관본 `DESIGN.md` 409–436행은 두 Type을 생략하고, `provenance.md` 161행 및 `migration-log.md` 17·22–23행은 “Type not invented”라고 적는다.
- Glass는 원본 204·210행에서 quick-link이고 241행에서 entry-point dock이다. 이관본 261·409–424·588행은 interactive-kind evidence가 없다고 뒤집어 kind/map을 생략한다.
- 원본 221행은 App switcher를 5px radius, 32px square의 grid trigger로 기록한다. 이관본 448행은 이를 Global Nav Link field note로 합쳐 별도 component가 아니라고 판정하고 589행을 gap으로 남긴다. 명시된 trigger 역할과 geometry 결합을 별도 component로 보존해야 한다.

### 1.4 원본 밖 product/font/logo 부정 claim — D1 / E1 FAIL

이관본은 다음 새 negative domain을 만든다.

- `DESIGN.md` 15·590행: Photoshop, Express, Acrobat, Experience Cloud product UI가 캡처 범위 밖이라는 주장
- 195·200·593행: Adobe Clean redistribution right, unavailable asset, license 관련 부재 주장
- 232·592행: first-party mark/file 및 redistributable logo 부재 주장

원본은 캡처한 page URL, Adobe Clean 관련 긍정 사실, Google favicon metadata, live SVG의 `#eb1000` fill만 제공한다(원본 8–10·70·89·114–118·226·429–449행). Google favicon을 capture method로 분류하고 portable mark로 승격하지 않는 경계 자체는 허용되지만, 이를 first-party file/license/product-UI 부재로 확장할 수 없다. B2a 한정도 D1을 치유하지 않는다.

### 1.5 source count·source-row·다중 목적지 원장 불일치 — E2 / E2a / E2c / F2 FAIL

- `DESIGN.md` 11·15행은 “not a sixth captured page”와 “five captured web surfaces”라고 쓴다. 그러나 원본 footer 226행의 다섯 web URL에 354–360행의 about-page live evidence까지 surface로 열거한 `provenance.md` 53–58행에는 여섯 page URL이 있다. “six pages across five evidence-domain groups”로 고치거나 ordinal을 삭제해야 한다.
- `migration-log.md` 16행은 원본에 없는 YAML `verification` surfaces를 만든다. 원본 YAML에는 `verified` 날짜가 있고 URL은 footer Tier 1에 있다.
- `provenance.md` 94행과 `migration-log.md` 19·32행은 full mission과 “Empowering everyone to create.”가 모두 Content Observed로 간다고 적지만, 이관본 Content 525행에는 후자만 있다.
- 위 Category Tile, PostScript, Glass/Promo/App switcher, D1 항목의 disposition도 실제 본문보다 강하다.

### adobe에서 확인된 통과 항목

- YAML unitless line-height 1.5/1.25, `tokens.source`, `ds.type`, `components_harvested`와 나머지 primitive/component 값은 유지됐다.
- §14 9행, §9 prompt wrapper 삭제, generic Focus 경계, B3 다섯 evidence kind가 유지됐다.
- 현재 선언된 controls의 C1/C2 state 처리와 C3 비완료 선언, fictional persona 삭제, omission ledger는 통과했다.
- 현존 editorial 문장의 인접 완전 B2a와 F1 scan은 통과했다. 이 PASS는 D1 발명을 정당화하지 않는다.

### adobe 재제출 조건

1. Category Tile의 heading/body/text-link/border/shadow 결합을 component 문맥에 복원하고 §9 provenance/disposition을 고친다.
2. PostScript page-description/physical-printability 관계와 Firefly generative-AI 진화를 Scope와 Narrative 원장에 복원한다.
3. Glass의 card Type과 quick-link interaction kind/map, Promo의 badge Type, App switcher의 별도 trigger 역할과 5px/32px 결합을 복원한다. exact L/E/S가 미해상이면 해당 field만 생략한다.
4. product-UI, Adobe Clean license/unavailability/redistribution, first-party mark/file negative를 삭제하거나 각각 정확한 독립 evidence를 추가한다. Google favicon capture boundary와 live SVG 긍정 사실은 유지할 수 있다.
5. six-page/five-group 표현, YAML source-row 명칭, mission 목적지, provenance/migration/audit/F2를 실제 파일과 동기화한다.
6. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 위 다섯 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 2. airbridge — FAIL

### 2.1 원본 밖 typography negative coverage — D1 / E1 FAIL

원본 `web/references/airbridge/DESIGN.md` 98–112행은 captured surface의 `Pretendard Variable`, `Pretendard` fallback, 역할별 metric을 제공한다. 이관본 `DESIGN.md`는 이 긍정 관측을 보존했지만 다음 부정 도메인을 추가했다.

- 170행: first-party AB180 universal typography statement가 없다는 주장
- 173행: Airbridge-exclusive distributed family가 검증되지 않았다는 주장
- 174행: Pretendard upstream을 Airbridge brand asset으로 기록하지 않았다는 license/asset 주장

166행의 인접 완전 B2a는 편집 해석의 evidence class를 설명할 뿐, 원본에 없는 도메인의 부재를 발명할 권한이 아니다. 세 행을 삭제하거나 각 claim을 뒷받침하는 정확한 독립 evidence가 필요하다. 171–172행의 live computed use와 fallback 관계는 원본 근거가 있으므로 유지 대상이다.

### airbridge에서 확인된 통과 항목

- unitless ratio, primitive type, metadata, §14, prompt 삭제와 §9 dark-card mixed anatomy/canvas-ink는 보존됐다.
- generic Focus와 focus-visible 경계, B2/B2a/F1, B3, C1–C4, §11 관계, D2, E2/E2a/E2b/E2c/F2가 통과했다.
- Assets 205행의 Google favicon capture-method/portable-mark 비승격 문구는 새 logo-file gap을 만들지 않아 허용 경계다.
- 신선 F3와 현재 SHA는 일치한다.

### airbridge 재제출 조건

1. `DESIGN.md` 170·173–174행의 unsupported font negative를 삭제하거나 각각 정확한 독립 evidence를 추가한다.
2. 영향받은 §3 provenance/migration/audit 서술이 있다면 실제 evidence 범위에 맞춰 동기화한다.
3. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 이 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 3. alipay — FAIL

### 3.1 Scope의 cross-source 관계를 first-party로 오분류 — B2 / B2a / E1 / E2 / E2c / F1 FAIL

원본 `web/references/alipay/DESIGN.md` 238행은 Open Platform을 broader Alipay ecosystem의 한 expression으로 읽는 cross-source synthesis다. 이관본 `DESIGN.md` 21행은 developer-facing APIs/tools라는 관측 사실과 ecosystem-expression 관계를 분리하지 않고 후자를 first-party처럼 무한정 상태로 둔다.

`provenance.md` 93행, `migration-log.md` 18·19·32행, `audit-log.md` 38·53·67행의 분류·목적지도 같은 과장을 반복한다. 관측 capability는 그대로 둘 수 있지만 ecosystem-expression 관계는 인접 완전 B2a로 한정하거나 source-stated fact 범위로 좁혀야 한다.

### 3.2 Distinctive의 질적 해석 한정 누락 — B2 / B2a / E1 / E2c / F1 FAIL

이관본 `DESIGN.md` 42–43행의 “Compact”, “Small”은 단순 selector 값이 아니라 visual-character 판단이다. 46행의 qualifier는 다른 extra reading만 열거하므로 이 두 판단을 덮지 않는다.

`migration-log.md` 18·45행과 `audit-log.md` 41행은 40–44행 전체를 observed-technical로 분류해 F1 inventory에서도 누락했다. 각 판단을 raw 관측으로 좁히거나 바로 인접한 완전 B2a를 붙여야 한다.

### 3.3 Google favicon에서 first-party-logo 부재로 확장 — D1 / E1 / E2 / E2c / F2 FAIL

원본 8–10행에는 Google favicon metadata만 있고 first-party mark audit는 없다. 이관본 `DESIGN.md` 165행은 “No first-party mark file is attached”를 추가하고 361행은 first-party logo를 Named gap으로 만든다. 이 경계는 `provenance.md` 26·141·170행, `migration-log.md` 15·45·53행, `audit-log.md` 9·29·78·80행에도 전파됐다.

Google favicon literal을 provenance-only로 두고 portable mark로 승격하지 않는 현재 capture-method 분류는 유지할 수 있다. broad first-party-mark file/gap만 삭제하거나 독립 evidence를 추가해야 한다.

### 3.4 F2 line map이 실제 grep과 불일치 — E2 / E2c / F2 FAIL

- `migration-log.md` 16·37·52·58행은 date destination을 `provenance.md` 36/42로 적지만 42행은 conflicts 문장이고 footer-specific verified note는 44행이다.
- `migration-log.md` 31행은 Content context table 312–315에 Consumer payment copy가 포함된다고 적지만 해당 row는 이관본 `DESIGN.md` 316행이다.

### alipay에서 확인된 통과 항목

- Top navigation의 `home::li`와 “list item, not tab” 의미는 component-local로 보존됐다. unsupported schema Type을 만들지 않은 것은 A1b 손실이 아니다.
- Footer link row 역할과 `home::li`도 유지됐다.
- Developer action, Search, Nav, Footer의 exact request/outcome이 미해상인 L/E/S field 생략은 C2에 맞는다. Tool card의 kind/map 생략도 C4에 맞는다.
- Audience의 “not an official classification”은 이 compiled group의 경계에 인접 완전 B2a가 있어 D1 blocker가 아니다.
- `currentMenu`는 canonical selected treatment가 아닌 한정된 static class-derived variant다. generic Search Focus도 focus-visible로 승격하지 않았다.
- A1–A4, A2, B1/B3, C1–C4, D2, E2a/E2b, F3는 통과했다.

### alipay 재제출 조건

1. Scope 21의 ecosystem-expression 관계를 인접 완전 B2a로 한정하거나 source-stated fact로 좁히고 provenance/migration/audit/F1을 맞춘다.
2. Distinctive 42–43행의 Compact/Small 판단을 한정하거나 삭제하고 derived inventory를 맞춘다.
3. first-party-mark-file 문장과 Named gap을 삭제하거나 독립 evidence를 추가한다. Google favicon literal은 provenance-only로 유지한다.
4. date와 Content table line map을 고치고 실제 grep hit로 F2를 다시 작성한다.
5. 두 기계 검사를 다시 통과시키고 새 SHA를 기록한 뒤 같은 sol에 위 네 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 4. amazingtalker — FAIL

### 4.1 §9-only Course Card·Coral typography 결합 손실 — A1 / A3 / A4 / E2 / E2c / F2 FAIL

원본 `web/references/amazingtalker/DESIGN.md` 313행은 Course Card category head를 `24px Roboto 400 #363636`으로 한 role tuple에 묶고, 315행은 coral urgency badge를 `14px Roboto 400`에 묶는다.

이관본 `DESIGN.md` 213행의 일반 Type role은 Course-card H3의 font/size/weight/line-height 일부를 보존하지만 component-bound `#363636` 결합을 보존하지 않는다. Course Card 352–367행은 category head를 24px로만 적고, Coral Soft/Accent 369–393행은 14px/400 결합을 잃었다. 일반 Heading/Caption token이 component field-role 보존을 대신할 수 없다.

`provenance.md` 117–119행과 `migration-log.md` 26행의 “§9-only unique renderable field 없음” 주장은 실제 disposition과 다르다.

### 4.2 확인된 Course Card tap target을 C4로 삭제 — C4 / E2 / E2c / F2 FAIL

원본 280–283행은 “Course cards are full tap targets”라고 명시하고 409행은 card hover lift가 tappability를 신호한다고 기록한다. 이관본 Layout 469–471행도 full tap target을 보존한다.

그런데 이관본 Components 251·367행과 Named gaps 544행은 interactive-kind evidence가 없다고 주장하며 Course Card의 kind/map을 생략한다. 같은 오류가 `provenance.md` 139행, `migration-log.md` 20·31행, `audit-log.md` 9행에 반복된다. `Type: card`는 유지하되 `Kind: interactive`와 listing/tap-target 역할 기반 map을 복원해야 한다. exact L/E/S가 미해상이면 해당 field만 생략할 수 있다.

### 4.3 §11의 제품 premise·human-tutor 관계 손실 — A1 / E2 / E2c / F2 FAIL

원본 347행은 다음 관계를 하나의 브랜드 premise로 기록한다.

- personal, flexible, genuinely enjoyable learning 대 rigid classroom curricula / impersonal app gamification
- real, vetted human tutors를 marketplace 중심에 둠
- visual language가 그 human warmth를 반영함

이관본 Scope 9·21·23행과 provenance narrative ledger는 product identity, expansion, 다른 rejection/embrace는 남기지만 이 관계를 삭제했다. `migration-log.md` 28행의 §11 이동/A1 완료 주장은 과대하다.

### 4.4 원본 밖 font/logo/microcopy negative coverage — D1 / E1 / E2 / E2c / F2 FAIL

원본 typography 110–113행은 stack과 “No custom webfont”까지만 제공한다. 이관본은 다음 부정 claim을 추가했다.

- `DESIGN.md` 182행: official product-use 부재
- 184행: FontFaceSet file URL 부재
- 185행: AmazingTalker-exclusive distributed family 부재
- 187행: license 부재
- 491행: complete product-microcopy guide 부재
- Named gaps 546–547행: first-party mark file와 FontFaceSet URL 부재

원본의 “no custom webfont”와 `DESIGN.md` 222행의 Google favicon capture-method/portable-mark 비승격 경계는 유지할 수 있다. 그 사실을 official/distributed/license/FontFaceSet/logo/microcopy 도메인 전체의 부재로 넓힐 수 없다. `migration-log.md` 27행의 “새 negative domain 없음”도 실제 본문보다 강하다.

### amazingtalker에서 확인된 통과 항목

- YAML unitless 1.30/1.50, primitive type, metadata, 나머지 역할 tuple과 §14 9행은 유지됐다.
- prompt wrapper 삭제, generic Focus 경계, B2/B2a/F1, B3, C1–C3, D2, E2a/E2b가 통과했다.
- en./tw. capture 밖 locale subdomain 언급은 원본이 locale expansion과 subdomain을 명시하므로 이번 D1 blocker로 잡지 않았다.
- 신선 F3와 현재 SHA는 일치한다.

### amazingtalker 재제출 조건

1. Course Card category head의 `24px Roboto 400 #363636` 전체 결합과 coral urgency badge의 14px/400 결합을 component slot에 복원하고 §9 ledger를 고친다.
2. Course Card의 interactive kind와 역할 기반 applicability map을 복원하고 Components/Layout/Named gaps/provenance/migration/audit의 C4 문장을 동기화한다.
3. §11의 personal/flexible/enjoyable 대 rigid/impersonal, vetted-human-tutor 중심, visual-language warmth 관계를 인접 완전 B2a와 함께 Scope 및 실제 ledger 목적지에 복원한다.
4. unsupported official/distributed/license/FontFaceSet/logo/microcopy negative를 삭제하거나 각각 정확한 독립 evidence를 추가한다. source-stated no-custom-webfont와 Google favicon capture boundary는 유지할 수 있다.
5. provenance/migration/audit에 superseding 기록과 실제 disposition/F2를 맞추고 두 기계 검사 및 새 SHA를 기록한 뒤 같은 sol에 위 네 조건만 목록-only로 재제출한다. 새 F3는 요구하지 않는다.

## 웨이브 처리 결론

- 현재 웨이브 8은 **FAIL 4/4**다. 네 건 모두 개정 대상이며, 통과 집합이나 카탈로그 채택 집합에 추가하지 않는다.
- 재제출 검토는 이 문서의 건별 조건만 대조하는 동일 sol 목록-only 방식이다. 새 기준을 추가하지 않는다.
- 기존 F3는 네 건 모두 유효하다. 새 F3를 반복하지 않는다.
- 각 개정본은 새 DESIGN.md SHA-256과 두 기계 검사 PASS를 함께 제출한다.
- 네 건이 같은 sol 재확인에서 4/4 PASS가 되기 전 웨이브 8 완료나 카탈로그 채택을 선언하지 않는다.
