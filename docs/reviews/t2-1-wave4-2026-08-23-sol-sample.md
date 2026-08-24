# T2-1 웨이브 4 표본 검토 — sol 의미 레인 (2/5, 40%)

- 대상: `docs/design-md-weight/migrated/{netflix,github}/`
- 원본: `web/references/{netflix,github}/DESIGN.md`
- 기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v6 전 조항**
- 일시: 2026-08-23
- 검증: `node test-v2/tools/migrate-reference.mjs --brand <id> --gate-only`를 두 건 모두 재실행해 `PASS`, problems 0을 확인했다.
- 의미 레인: F1의 문장 단위 B2a 전문 스캔과 F2의 로그 행별 실제 disposition 대조를 처음부터 다시 수행했다. 값 문자열의 존재뿐 아니라 원 필드·역할 결합을 원본과 대조했다.

## 판정 요약

| 표본 | 판정 | 차단 조항 |
|---|---|---|
| Netflix | **FAIL** | A1/A3/A4, B2/B2a, E2/E2c, F1/F2 |
| GitHub | **FAIL** | A1/A4, B2/B2a, C1/C2, E1, E2/E2a/E2c, F1/F2 |

**표본 결과: PASS 0/2, FAIL 2/2.** 두 산출물 모두 A1a·A1b·A1c·A2·B1·B3·C3·C4·D1·D2·E2b는 통과했다. 그러나 v6가 새로 의무화한 최종 패스를 수행했다고 기록한 첫 제출에서도 B2a와 E2/E2c가 다시 확인됐다. 이번 표본은 절차 전환이 세 웨이브의 재발을 끊었다는 증거가 아니다.

## v6 전 조항 대조표

| 조항 | Netflix | GitHub |
|---|---|---|
| A1 | **FAIL** — `#808080` 역할과 card-hover focus use 손실 | **FAIL** — Label/Action List/feedback component의 exact field 손실 |
| A1a | PASS — unitless 1.1–1.5 비율 유지 | PASS — unitless 1.25/1.5/1.4/1.45 유지 |
| A1b | PASS — button×4, input×2, card×2, badge×3, tab/toast/dialog/toggle | PASS — 검증 primitive를 컴포넌트별 유지 |
| A1c | PASS — `tokens.source: prose-derived` 원장화, source에 없는 `ds.type` 미발명 | PASS — `tokens.source: design-system` 원장화, source에 없는 `ds.type` 미발명 |
| A2 | PASS — §14 11행 본문 보존 | PASS — §14 13행 본문 보존 |
| A3 | **FAIL** — §9-only nav composition 누락 | PASS — §9-only diff-line 값 이동 |
| A4 | **FAIL** — 같은 `#808080`의 CTA-label 결합이 사라짐 | **FAIL** — `#ddf4ff`가 남아도 Label border 결합은 사라짐 |
| B1 | PASS — generic Auth `Focus`를 additional observed state로 유지 | PASS — named `Focus (keyboard)`를 `focus-visible` treatment로 승격하지 않음 |
| B2 / B2a | **FAIL** — Motion 목적·인과문에 인접 완전 한정 없음 | **FAIL** — Content evidence class 과승격 + Motion/Blankslate 미한정 |
| B3 | PASS — 다섯 증거 종류 + per-component computed-only gate | PASS — 다섯 증거 종류 + per-component computed-only gate |
| C1 | PASS | **FAIL** — Select error 비적용 사유가 미명명/미관측 |
| C2 | PASS — loading/error/success를 역할별 판정 | **FAIL** — Copy icon의 captured success를 비적용으로 뒤집음 |
| C3 | PASS — coverage 완료 주장 없음 | PASS — coverage 완료 주장 없음 |
| C4 | PASS — 근거 없는 kind/map 생략 또는 source-backed non-interactive | PASS — surface/status primitive map 생략 |
| D1 / D2 | PASS / PASS | PASS / PASS |
| E1 | PASS — source/freshness/proof 분리, standalone 한정 유지 | **FAIL** — derived §10 표 일부를 `Observed`로 과분류 |
| E2 | **FAIL** — §2 disposition이 실제보다 강함 | **FAIL** — YAML component/source-row disposition이 실제보다 강함 |
| E2a | PASS — homepage/logo/font URL의 실제 이중 목적지 기록 | **FAIL** — WebFetch freshness date의 portable+provenance 목적지 누락 |
| E2b | PASS — 네 curve omission ledger 기록 | PASS — 세 curve omission ledger 기록 |
| E2c | **FAIL** — “전 hex 역할 보존” 및 F1 준수 주장이 본문보다 강함 | **FAIL** — “최소 필드 단위 보존” 및 F1 준수 주장이 본문보다 강함 |
| F1 | **FAIL** — 전문 재독 기록 뒤에도 Motion 미한정 잔존 | **FAIL** — Content/Motion/Blankslate 미한정 잔존 |
| F2 | **FAIL** — grep에 값은 잡히지만 역할·로그 불일치를 놓침 | **FAIL** — grep에 색은 잡히지만 component field·로그 불일치를 놓침 |

## 1. Netflix — FAIL

### 1.1 Grey 500의 검증된 역할 결합 손실 — A1 / A4 FAIL

원본 Neutral Scale은 Grey 500 `#808080`을 `Caption/metadata text`, `"secondary" CTA label`, `inactive nav links`의 세 역할에 결합한다(`web/references/netflix/DESIGN.md` 106–114행). 이관본은 같은 hex를 caption/metadata, inactive nav, Auth Field border에만 연결하고 `secondary CTA label` 역할은 남기지 않는다(`docs/design-md-weight/migrated/netflix/DESIGN.md` 96–105, 347–360행).

`#808080` 문자열 자체가 남아 있다는 사실은 원 필드·역할 보존과 동치가 아니다. 더구나 harvested More Info의 text는 `#FFFFFF`이고(`DESIGN.md` 297–311행), source scale의 secondary-CTA label `#808080`과 충돌할 수 있으므로 한쪽을 조용히 지우지 말고 두 관계를 분리 보존해야 한다.

Migration log는 §2에 대해 `전 hex 역할 보존`이라고 주장한다(`docs/design-md-weight/migrated/netflix/migration-log.md` 17행). 실제 body보다 강한 disposition이므로 E2/E2c에도 걸리고, 값 grep만으로 이 역할 손실을 놓친 F2도 실패다.

### 1.2 Card focus use와 §9-only nav composition 손실 — A1 / A3 / E2 FAIL

원본 Expanded Preview는 `Use: Hover/focus on a row tile`이라고 두 activation path를 기록한다(`web/references/netflix/DESIGN.md` 236–243행). 이관본은 Resting Tile의 `focus-visible` applicability에 visual treatment를 비워 두고, Expanded Preview를 오직 `hover presentation`으로 재분류한다(`docs/design-md-weight/migrated/netflix/DESIGN.md` 413–433행). Generic focus를 `focus-visible` treatment로 승격하지 않은 B1 처리는 맞지만, 원본의 generic focus activation 자체를 지우는 것은 A1 보존이 아니다. Additional observed `Focus`로 별도 보존해야 한다.

원본 §9의 top-nav prompt에는 `N` mark left, links center/left, search icon + profile avatar right라는 composition이 있다(`web/references/netflix/DESIGN.md` 437–442행). 이 배치는 다른 portable 슬롯에 남지 않는다. 그런데 migration log는 §9-only 고유 조각이 white circular play button **1건뿐**이었다고 기록한다(`docs/design-md-weight/migrated/netflix/migration-log.md` 28행). 이는 A3와 E2/F2를 함께 위반한다.

로그 내부에도 실제 body와 다른 행이 있다. §4 행은 badges를 `Kind: non-interactive`라고 맞게 기록하지만(20행), §14 행은 badges의 kind/map을 모두 생략했다고 다시 적는다(33행). 실제 body는 세 badge 모두 `Kind: non-interactive`이고 map만 생략한다(`DESIGN.md` 435–467행).

### 1.3 Motion과 Avoid의 목적·인과 해석에 인접 B2a 한정 없음 — B2 / B2a / F1 FAIL

Foundations Motion은 다음 source 문장을 그대로 보존한다.

- row paging의 edge tile이 `peek to promise more`라고 목적을 해석한다(`docs/design-md-weight/migrated/netflix/DESIGN.md` 157행; 원본 542행).
- billboard title/buttons가 지연되어 `so the artwork lands first`라고 연출 의도를 설명한다(`DESIGN.md` 159행; 원본 544행).

둘은 duration/easing 같은 관측값이 아니라 목적·인과에 대한 편집적 구현 해석이다. 그러나 Motion 블록에는 `derived editorial implementation inference / not Netflix-authored or a separately published UI specification`이라는 인접 완전 한정이 없다. Scope, Principles, Elevation, Typography, Layout, Content의 한정은 수백 행 떨어진 Motion 문장을 덮지 않는다.

Avoid도 Principles의 qualifier 범위 밖인데 `grey hierarchy is what makes white legible`, `the black frame is the design`, `each category needs breathing room`이라는 인과·판단을 그대로 둔다(`DESIGN.md` 63–71행). 원본 Don'ts를 옮겼다는 사실은 그 문장을 Netflix-authored doctrine으로 바꾸지 않는다. 같은 이유로 Scope의 DVD-envelope 인과(13행)와 Semantic color의 `slightly lifted ... so layered surfaces are distinguishable`(86행)도 전체 F1 재검사 대상이다.

Migration log는 `full DESIGN.md reread` F1을 기록하면서 Scope/Principles/Elevation/Layout/type/Content만 열거하고 이 Motion 문장을 놓쳤다(`migration-log.md` 37–40행). v6 F1은 섹션명 체크가 아니라 **모든 인과·해석·판단 문장**의 evidence class를 확인하는 절차이므로, 수행 기록만으로 통과할 수 없다.

### Netflix에서 확인된 통과 항목

- **A1a/A1b/A1c:** unitless line-height 1.1/1.15/1.2/1.25/1.3/1.4/1.5와 component primitive type, `tokens.source: prose-derived`가 보존됐다(`DESIGN.md` 198–213, 244–567행; `provenance.md` 16–24행).
- **A2:** §14 11행을 capture record에 남겼다(`DESIGN.md` 222–242행). §9의 white circular play 값은 옮겼지만 nav composition 누락 때문에 A3 전체는 실패다.
- **B1/B3:** Auth generic Focus는 별도 observed state이고 `focus-visible` treatment는 비어 있다. Motion은 transition properties, animation name, duration, easing, reduced-motion behavior와 per-component computed-only gate를 모두 갖는다(`DESIGN.md` 142–171, 347–373행).
- **C1–C4:** role-based applicability를 사용하고 coverage 완료를 주장하지 않는다. Expanded Preview, badges, progress, banner, dialog는 근거 없는 interactive map을 만들지 않았다.
- **D1/D2/E1/E2a/E2b:** 원본 밖 persona·도메인을 승격하지 않았고, fictional biography를 sidecar에 재수록하지 않았다. homepage/Simple Icons/logos/font-history의 실제 portable+provenance 목적지와 curve omission ledger는 일치한다.

### Netflix 재제출 조건

1. Grey 500 `#808080`의 source-scale `secondary CTA label` 역할을 복원하고, caption/inactive-nav/Auth-border 및 harvested More Info `#FFFFFF`와 합치지 않는다.
2. Expanded Preview의 source generic `Hover/focus` activation을 추가 observed state로 복원하되 `focus-visible` treatment로 승격하지 않는다. §9-only top-nav composition도 portable component/layout 슬롯에 복원한다.
3. Motion·Avoid를 포함해 portable 본문 전체를 다시 F1 스캔한다. `peek to promise more`, `so the artwork lands first` 같은 retained purpose/causal 문장은 인접 완전 B2a 한정 아래 두거나 관측값만 남도록 편집 해석을 제거한다.
4. §2·§4·§9·§14 및 F1/F2 로그를 실제 body와 맞춘다. 값 문자열 grep이 아니라 해당 섹션·컴포넌트의 field/role 문맥까지 확인한 뒤에만 `전 역할 보존` 또는 준수 주장을 쓴다.
5. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 2. GitHub — FAIL

### 2.1 Component exact field와 anatomy 손실 — A1 / A4 FAIL

원본 YAML `label`은 다음 값을 정확히 결합한다: `type: badge`, `bg: #ddf4ff`, `fg: #0969da`, `border: 1px solid #ddf4ff`, `radius: 9999px`, `height: 20px`, `padding: 0 7px`, `font: 12px / 500`(`web/references/github/DESIGN.md` 79–83행). 원본 §4 body에는 별도로 same-hue low-alpha border와 height `~20px`가 있다(305–312행).

이관본 Label은 body 쪽의 `1px solid same hue at low alpha`와 `height ~20px`만 남긴다. YAML의 exact border `1px solid #ddf4ff`와 exact height `20px`가 해당 Label field에 남지 않는다(`docs/design-md-weight/migrated/github/DESIGN.md` 725–737행). `#ddf4ff`가 Background와 다른 component에 존재해 기계 gate가 통과했어도, Label border의 value-field 결합은 복구되지 않는다.

같은 문제가 Action List의 YAML exact padding `16px`가 body의 `~16px`로만 남은 곳에서도 보인다(원본 86행; 이관본 645–654행). 검증 exact와 body approximate는 같은 형태가 아니며, 둘 다 있으면 둘 다 분리 보존해야 한다.

Feedback component에서도 값이 빠졌다. Inline Message는 YAML과 §8 body가 모두 `leading icon + tone-colored text`를 기록하지만(원본 98, 528행), 이관본은 세 tone color만 남기고 leading icon anatomy를 삭제한다(`DESIGN.md` 855–862행). Banner는 원본의 leading status icon과 optional title/description(원본 96, 524행)이 이관본 833–842행에서 빠진다. Optional dismiss와 action reflow는 남아 있으므로 이 둘은 손실로 세지 않았다. 이는 scalar bag이 잡지 못하는 component-field/anatomy 손실이다.

### 2.2 §10 표의 evidence class 과승격과 Motion/Blankslate의 미한정 해석 — B2 / B2a / E1 / F1 FAIL

원본 HTML evidence comment가 WebFetch 관측으로 명시하는 voice string은 홈페이지의 두 문장뿐이다(`web/references/github/DESIGN.md` 721–726행). 이관본 provenance도 그 두 문장만 live homepage observation으로 기록한다(`docs/design-md-weight/migrated/github/provenance.md` 64–68행).

그런데 portable Content는 §10 표 전체를 `Observed product-copy patterns on github.com / Primer examples`라고 올린다(`docs/design-md-weight/migrated/github/DESIGN.md` 943–955행). Error/onboarding/forbidden-copy 해석까지 전부 first-party observation처럼 보이지만, 바로 뒤의 B2a 문구는 `The following voice reading`만 덮고 앞선 표를 덮지 않는다(957–959행). 직접 관측된 두 homepage string과 derived editorial copy guidance를 evidence class별로 분리해야 한다.

전문 스캔은 다른 절도 놓쳤다.

- Merge celebration을 `the single licensed moment of whimsy in the core workflow`라고 판단한다(`DESIGN.md` 165–171행; 원본 692–698행).
- Blankslate가 `Often a rationed Octocat illustration`을 쓴다고 mascot-use 판단을 반복한다(`DESIGN.md` 891–898행; 원본 534–536행).

둘 다 인접 완전 B2a 한정 밖이다. Assets의 mascot qualifier(231–235행)는 898행의 별도 component block을 인접하게 덮지 않는다. Migration log F1은 Content voice와 Assets mascot-use를 통과했다고 쓰면서 Motion/Blankslate를 놓쳤다(`migration-log.md` 37–40행).

### 2.3 Select error를 관측 부재로 비적용 처리 — C1 FAIL

Select의 error 행은 `a field-error variant is not specified on this control`을 이유로 `not-applicable`을 선언한다(`docs/design-md-weight/migrated/github/DESIGN.md` 452–476행). 이는 역할상 비적용 이유가 아니라 `not named/not captured`의 다른 표현이다. 원본에 visual variant가 없으면 treatment만 생략해야 하며, native-backed form control이라는 역할에서 validation error가 의미상 비적용인지 별도로 판정해야 한다.

### 2.4 Copy Icon Button의 captured success를 비적용으로 반전 — C2 FAIL

원본 Motion은 copy-to-clipboard button이 checkmark를 약 1.5초 표시하고 되돌아오는 것을 `functional confirmation`으로 기록한다(`web/references/github/DESIGN.md` 692–698행). 이관본도 Icon Button의 role에 copy를 포함하고 glyph를 anatomy로 둔다(`docs/design-md-weight/migrated/github/DESIGN.md` 377–389행).

그런데 success 행은 그 checkmark를 `signature motion on the glyph, not a success state of the icon-button chrome`이라고 분리해 `not-applicable`로 둔다(391–400행). Glyph는 이 component anatomy이고, copy 완료 checkmark는 바로 그 copy-button role의 성공 확인이다. 공용 Icon Button 전체를 하나의 map으로 유지한다면 copy use에 한해 success를 applicable로 적어야 하고, 서로 다른 role을 분리하려면 Copy Icon Button을 별도 component로 나눠야 한다.

### 2.5 Log가 실제 component field·source-row와 F1 결과보다 강함 — E2 / E2a / E2c / F2 FAIL

Migration log의 YAML token 행은 `검증된 값만 최소 필드 단위`로 옮겼고 component별 보존을 마쳤다고 주장한다(`docs/design-md-weight/migrated/github/migration-log.md` 16행). §8 행도 `YAML 컴포넌트 해부`를 옮겼다고 기록한다(26행). 실제로는 Label border/height와 Action List padding의 exact field 결합이 빠졌다.

§10 행은 표 행을 Content로 옮겼다고 기록하지만(29행), 원본의 `Show, don't just tell`, marketing의 `Mona Sans, big and confident`, empty-repo의 `famous ... zero fluff` 제약(원본 616–618행)은 이관본 953–955행에서 일부 삭제·축약됐고 그 disposition은 기록되지 않았다. 직접 관측/derived 분류도 body와 맞지 않는다.

WebFetch `2026-06-06` freshness는 portable Content와 provenance 양쪽에 있다(`DESIGN.md` 954행; `provenance.md` 68행). 그러나 §10 log는 두 voice **문자열**의 dual destination만 적고(29행), 실제 원천인 HTML comment 행은 provenance-only라고 기록한다(35행). Source-row별 dual disposition에서 freshness date의 portable 목적지가 빠져 E2a도 실패다.

F1 행은 `full DESIGN.md reread` 후 editorial/causal sentence의 인접 완전 한정을 마쳤다고 기록하고, F2 행은 `Compliance claims match the body`라고 끝낸다(37–40행). §10 표, Motion, Blankslate의 미한정 문장과 component field 손실 때문에 이 주장은 body보다 강하다. E2/E2c 위반이며, 단순 hex/숫자 grep으로 field context를 확인하지 못한 F2도 실패다.

### GitHub에서 확인된 통과 항목

- **A1a/A1b/A1c:** unitless line-height 1.25/1.5/1.4/1.45와 primitive type, `tokens.source: design-system`이 보존됐다(`DESIGN.md` 187–230, 266–916행; `provenance.md` 16–25행).
- **A2/A3:** §14 13행을 capture record에 남겼고 §9-only diff-line 값을 Additional patterns에 남겼다(`DESIGN.md` 240–264, 909–916행).
- **B1/B3:** `Focus (keyboard)` ring은 additional observed state이고 `focus-visible` row treatment는 비어 있다. Motion의 five-kind/per-component gate는 완전하다(`DESIGN.md` 154–181, 240–296행).
- **C3/C4:** state coverage 완료를 주장하지 않고 Box/Dialog/Overlay 등은 근거 없는 interactive map을 만들지 않았다.
- **D1/D2/E2b:** 가상 biography는 portable/provenance에 재수록되지 않았고 세 curve omission ledger는 로그와 일치한다. Homepage/Primer/Simple Icons/token note와 voice 문자열 자체의 dual destination도 맞지만 WebFetch date 누락 때문에 E2a 전체는 실패다.

### GitHub 재제출 조건

1. Label의 YAML exact `Border: 1px solid #ddf4ff`와 `Height: 20px`를 body의 low-alpha/~20px 관측과 분리해 복원한다. Action List의 exact `Padding: 16px`, Inline Message의 leading icon, Banner의 leading status icon과 optional title/description도 복원하고 같은 방식으로 모든 YAML component field 결합을 다시 대조한다.
2. Content 표에서 직접 관측된 두 homepage string과 derived voice/copy guidance를 분리한다. derived 표/금지문을 유지하면 인접 완전 B2a 한정을 두고, `Observed` 범위와 provenance를 실제 evidence class에 맞춘다.
3. Motion의 merge-whimsy 판단과 Blankslate의 rationed-Octocat 판단을 인접 완전 B2a 한정 아래 두거나 관측 가능한 component/motion 사실만 남긴다. 전체 본문 F1을 다시 수행한다.
4. Select error를 미관측 사유로 `not-applicable` 처리하지 말고 역할 의미로 재판정한다. Copy Icon Button의 success는 copy role에 맞게 applicable로 고치고 captured checkmark treatment를 연결한다. 공용 component로 정확히 표현할 수 없다면 copy/kebab/bell role을 분리한다.
5. YAML/§8/§10/HTML comment 및 F1/F2 migration-log 행을 실제 body와 맞춘다. WebFetch date의 Content+provenance 목적지를 실제 source-row에 기록하고, field/role 문맥까지 grep 대조한 후에만 보존·준수 주장을 쓴다.
6. 기계 게이트를 다시 통과시킨 뒤 같은 sol 의미 레인에 재제출한다.

## 웨이브 판정

**최종 판정: Netflix FAIL / GitHub FAIL.** 기계 게이트 PASS 5/5와 이번 두 표본의 재실행 PASS는 의미 보존 PASS를 대신하지 못한다.

웨이브 4 최초 산출물의 표본 2/5에서 B2a와 E2/E2c가 모두 재발했다. B3 전문과 대부분의 이중 목적지는 개선됐지만 GitHub WebFetch date에는 E2a도 남았다. 따라서 **F1/F2 절차 전환이 반복 결함을 끊었다는 가설은 이 표본에서 기각된다.** 새 결함 계층은 없으며 v6 기존 A1/A3/A4·B2/B2a·C1/C2·E1·E2/E2a/E2c의 적용 문제다.

두 표본 개정·동일 sol 재확인과 나머지 3건의 v6 의미 전수 검토 전까지 웨이브 4 채택, 다음 웨이브, 카탈로그 채택을 정지한다. 표본율은 40%를 유지한다.
