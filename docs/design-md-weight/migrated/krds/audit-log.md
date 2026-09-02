# krds 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/krds/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/krds/DESIGN.md`
검증 sibling: `web/references/krds/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 있음 (`ds.type: system`, `https://www.krds.go.kr/html/site/index.html`). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않는다. 기존 25건은 `not KRDS-authored or taken from a separately published UI specification, including the published KRDS documentation`으로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 25 / 원장 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:13` 한정은 한 줄 요약·기본 동작·행위의 색만 이름하고, 같은 문단의 GOV.UK/USWDS/Singapore comparison-coordinates 읽기와 문단 끝 official-history-not-token 단언을 빠뜨렸다. Family `:268` 한정은 mixed-script만 이름하고 `:266` fallback-not-brand-face를 빠뜨렸다. YAML `tokens.components.badge-tag`의 `bg`/`fg`/`radius`와 `button-tertiary.hover`, `badge-*.font`가 대응 블록에 키 경로로 없었다(icook). 로그 줄 번호·출현 수가 본문과 어긋났고, sibling `1,934`를 DESIGN dest **0**으로 적었으나 본문 `:251` dest **1**.

문장 분류: 브랜드 발행 사실(MOIS 인용·YAML 값·§14 카피·패턴명) / 관측 기술(hex·토큰·컴포넌트 측정) / 편집적 해석·인과 판단(문서/도입 서비스 분리, 분위기, 비교 좌표, fallback, kind/applicability). 세 번째 부류와 원장 정확성만 수정. 토큰 역할 표·상태 applicability·구조는 그대로.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 2건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:13` — Scope ¶3 | GOV.UK / USWDS / Singapore를 comparison coordinates이지 token source가 아니라고 읽는 것, official history·보도자료가 인터페이스 토큰을 공급하지 않는다는 단언은 세 번째 부류. 기존 한정은 한 줄 요약·기본 동작·행위의 색만. | 기존 완전형에 두 판단을 접어 넣음. 문단 끝 단독 문장은 같은 닫힘으로 흡수. 발생 수 +0. |
| 2 | `DESIGN.md:268` — Family | `:266` "The fallback stack is a fallback, not the brand face"는 세 번째 부류. `:268`은 mixed-script ("민원 24", "행정 API")만. | 기존 완전형에 fallback-not-brand-face를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not KRDS-authored` 25, `taken from a separately published UI specification` 25, `including the published KRDS documentation` 25. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 3은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 48, 58, 72, 90, 165, 200, 212, 232, 257, 268, 314, 340, 385, 623, 691, 695, 731, 774, 810.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Scope 행 3 | 기본 동작 / 행위의 색 / 한 줄 요약만. 본문 `:13`이 이제 comparison-coordinates와 official-history-not-token도 이름한다. | 그 판단을 행에 추가. |
| 4 | Family 행 16 | mixed-script만. 본문 `:268`이 이제 fallback-not-brand-face도 이름한다. | 그 판단을 행에 추가. |
| 5 | Byte-form notes | 대소문자 keep-both와 Primary Deep 비병합만. 본문 `#ffffff`는 canvas / on-primary / 컨트롤 fill·text로 갈리고 `#256ef4`는 `primary`와 `brand` 두 YAML 키다. | `#ffffff` 역할 분리와 `#256ef4` two-key를 원장에 적음 (E1; 본문 역할은 고치지 않음). |
| 6 | Sibling handling `:102` / list `:133` | 「본문에 승격 없음」인데 `1,934`가 `DESIGN.md` 251 dest **1**. | 포인터 예외를 원장에 적음. 헤더 measure 25=25 유지. |

헤더 / 데이터 행 **25 = 25** (E1 1:1). 데이터 189–215.

### A1 키 경로 복원 (4건)

문자열 grep으로 「값이 파일 어딘가에 있다」는 부족하다. YAML `tokens.components.<id>.<field>`가 대응 블록에 행으로 있어야 한다.

| # | 키 경로 | 무엇이 빠졌나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | `badge-tag.bg` / `badge-tag.fg` | Tag 블록은 `#FFFFFF` / `#1E2124`만. YAML lowercase가 그 블록에 없음(다른 블록의 같은 hex는 다른 키). | Tag 블록에 `/ `#ffffff`` · `/ `#1e2124`` 병기. |
| 8 | `badge-tag.radius` | Tag 블록은 `pill (height-matched)`만. YAML `1000px`는 Shape `:198`에만 있음 (icook). | Tag 블록에 `token-set `1000px`` 행. |
| 9 | `button-tertiary.hover` | Tertiary 블록은 `#F4F5F6`만. YAML `#f4f5f6`가 그 블록에 없음. | `/ `#f4f5f6`` 병기. |
| 10 | `badge-*.font` | Badge 블록 shared는 `15px·400`만. YAML `15px / 400`이 그 블록에 없음. | Token-set font record `15px / 400`을 Badge shared 행에 복원. |

복원은 YAML 바이트 병기이지 해석이 아니므로 새 B2a는 붙이지 않음.

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | homepage DESIGN dest 9 only; P 13/52/69. 실측 DESIGN dest **2** at 9/785 · P dest **4** at 13/24/54/69. `#256ef4` dest 11/92 + P 14. 실측 DESIGN dest **10** at 11/94/165/391/394/426/487/571×2/605 · P dest **5** at 14/112/143×2/147. | dest를 출현 수로 고침. Favicon dest 1/1 at 324/15는 유지. |
| 12 | YAML metadata 행 | `WCAG/KWCAG 2.2` P 28/33 (28은 빈 줄). OG P 29. `ds.type` P 25/33/213. Proof 210–213. | P dest **2** at 26/33. OG dest 1 at 27. `ds.type` DESIGN dest **0** / P dest **3** at 25/33/220. Proof **219–221**. |
| 13 | YAML colors 행 | 18 keys at 92–111. 92는 표제. | **94–111**. |
| 14 | YAML type 행 | roles 276–299; Display Medium / Heading xxsmall 278/287. | **278–299**; **279/291**. |
| 15 | YAML spacing/rounded 행 | `full 1000` at 191; live scale 193–199. | **190**; live **192–198**. |
| 16 | YAML shadow 행 | modal `a1`/`a2` at 209/212. 209는 Modal (3) 행. | **208/212**. |
| 17 | YAML components 행 | `button` 389/421/448; `input` 475/508; `dialog` 539; `badge` 563/595; border 394/425/571; disabled 399/485. | `button` **390/422/449**; `input` **476/509**; `dialog` **540**; `badge` **564/596**; border **394/426/571** + `#58616a` **453/480/514** + `#cdd1d5` **600**; disabled **402/488**. Tertiary hover `#f4f5f6` at 459; Tag 597–598/601; badge font 565. |
| 18 | §3 evidence 행 | classes 248–258; qualifier 258/268. | **250–258**; qualifier **257**/268. |
| 19 | §10 행 | strings 735–751; table 757–768; forbidden 770; qualifier 772; illustrative 753. | strings **733–755**; table **759–770**; forbidden **772**; qualifier **774**; illustrative **757**. |
| 20 | §11 행 | narrative-not-token P 216. | P **223**. |
| 21 | §9 행 | itemised P 155 (separator). | P **157**. |
| 22 | §14 applicability 행 | Tertiary 466–468; Dialog 551–554; Badge 563; Tag 611–613. | Tertiary **469–471**; Dialog **556–559**; Badge **564**; Tag **617–619**. |
| 23 | §15 행 | durations 218–224; signatures 234–240. | durations **220–224**; signatures **236–240**. B3 전문 dest 1 at **230** 유지 (E2c). |
| 24 | §4 harvested 행 | size scales 412/497/530/609; states 431/489. | scales **407/494/525/609**; states **432/489/521**. |
| 25 | Sibling 행 | DESIGN.md **0** for sibling-only including `1,934`. 실측 `1,934` DESIGN dest **1** at 251. transcription 93–132. | dest **1** at 251 (pointer). transcription **106–125**. sibling-only list **127–137**. Exact style_02 intro DESIGN dest **0**. |
| 26 | Deviations / F1 / F2 / SHA | `wc -w` 10,522; worker SHA만; 25 closes without the two named expansions; dest를 착수 숫자로 적음. | `wc -w` **10,569**. Auditor DESIGN SHA `a93085c3b5f35b5953350cfe333f7de1a1c2fae1aa85b2bc6fe14f005b43612e` · P SHA `81e4cbc2cbaf068e6f8b98bdffb4c024bc43367e46adf56bb59125f3c70d7763`. F1에 `:13`/`:268` 확장을 적음. F2에 실측 dest를 적음. |

Destination SHA `f07cc88076164ceaea91ba1cae50b67d032da65fb6db8cf196aa93944108e6cd` → `a93085c3b5f35b5953350cfe333f7de1a1c2fae1aa85b2bc6fe14f005b43612e` (한정 확장·키 경로 복원 후). 줄 수 DESIGN `wc -l` **818** 불변. provenance **319** 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 역할 표, 컴포넌트 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 25개 완전형은 evidence class를 끝까지 닫음. 발행 DS 있음 — published-spec 닫힘이 맞다 (v12 전제 주석). 문법 변형(복수 주어, including the published KRDS documentation)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 230 (`computed transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1).
- 원본 §15 duration·easing이 본문 `:218–240`에 인용된 채 역할 서술만 남는 것은 T2 관례. 값 소실로 되살리지 않음.
- `focus-visible` 원본 dest 0. 본문은 generic Focus observation으로 보존하고 `focus-visible` 행에 값을 붙이지 않음 (B1).
- YAML `15px / 400`이 Tag 블록에도 있음(medium font). Badge 블록 복원과는 별개 키.

## 범위 밖 관찰

- **A5a.** 게이트 `compared` 199 / `candidates` 921. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 전수 보존이 아니다. 손 대조 발행 카피 표본(`시작하기` dest 5 · `Apply now` dest 1 · `모두를 위한 디지털 서비스 경험` dest 2 · `누구나 쉽게 사용할 수 있는 공공 웹·앱` dest 2 · `신청이 완료되었습니다` dest 5 · `처리 중...` dest 4 · `필수 입력 항목입니다` dest 2 · `Pan-Government UI/UX Design System` dest 1)은 본문에 있다. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling `web/references/krds/.verification.md` 존재(경로 직접). sibling 전용 `색상은 정보 전달과 시각적 경험을 결정하는 중요한 요소다` DESIGN dest **0** / P dest 1. `SF Mono` / `swiper-icons` / `VideoJS` / `lnb-toggle` / `760×501` DESIGN dest **0**. `krds-form-select` DESIGN dest 1 at 510 — 원본 §4 Select 본문 `:627`에 있어 sibling-only가 아니다. **`1,934` DESIGN dest 1 at 251** — sibling 빈도 수가 Font-evidence 칸에 포인터로 들어 있음. 값 승격은 아니고 빈도 분류의 본문 mention. 고치지 않음(B1 보고).
- **D2a.** 식별(`김순자` / `Soon-ja` / `박지훈` / `Ji-hoon` / `Sarah Kim` / `이주임` / `Joo-im` / `최민호` / `Min-ho` / `대전`) DESIGN/P/log dest **0**. 동기(`정부24` / `NVDA` / `노안` / `해외 거주` / `미국 거주`) dest **0**. 소속 분류(`광역시 공무원` / `시각장애` / `모바일-only`) dest **0**. Audience `:28`는 원본 그룹 `디지털 약자 및 일반 시민 (고령자·장애인·저시력 사용자)`만. **로그 §13 행과 A5 행이 `어떤 버튼이` / `어떤 배지가`를 dest 0 측정용으로 다시 열거한다 — D2a 재수록. 고치지 않음(범위 밖).**
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. `provenance.md:139`는 원장 mention이 부재 단언이 아니라고 적는다. 로그 dest 0은 DESIGN/P를 분모로 둔다.
- **hex 귀속.** `#ffffff`는 canvas (`:97`) · on-primary (`:100`) · 버튼/배지/다이얼로그/태그 fill 또는 text. `#256ef4`는 `primary`와 `brand` 두 키. 분리를 원장 Byte-form에 적음(수정 #5). 본문 역할은 고치지 않음.

AUDIT_DONE fixes=26

## 개정 — 의미 검토 FAIL 8 + E1 (2026-08-29)

대상: `docs/design-md-weight/migrated/krds/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정.

### 1 A1 — Gray·System 토큰명 열

Gray 표에 Token semantic 열 복원 (`--krds-light-color-surface-white-static` 등). System 표에 Token 열 복원 (`--krds-color-light-danger-*` 등). Primary와 같은 방식.

### 2 A1 — Warning `#FFB114` 단계 귀속

표 칸 `(30, bg)`와 후속 문장 `배경 50단계`를 둘 다 복원. 한쪽만 남기지 않음.

### 3 A1 발명 — sibling `1,934`

Font-evidence Live surface-use에서 `1,934` 문장 삭제. 숫자는 provenance에만. DESIGN dest **0**.

### 4 항목 9+5 — Primary 60/70 pressed 융합

Key Characteristics 표기 `Primary 60 … (텍스트·pressed)` 복원. 색 표 70 `강한 강조 텍스트` 복원. Brand Primary Deep pressed와 버튼 Active Primary 70 pressed는 병기. `text / hover` · `pressed / strong emphasis text` 삭제.

### 5 A1 — `small select`

Shape 6px 행을 `small select`로 되돌림. Select 스케일 small=8px / large (default)=6px는 같은 줄에 병기. `default select`로 고쳐 쓰지 않음.

### 6 A1 발명 — `16px icon, no border`

Tag Use에서 제거. sibling 측정은 provenance에만.

### 7 항목 2 — 고유 사실 복원

Elevation `style_08.html`. 신청 패턴 `복지 / 세액 / 발급 / 예약`. 본문 17px 근거 `14~16px` · `의도적으로 +1px`. 타이포/Do `노안·저시력`. §9 부정 `16px이 아님`.

### 8 D2a — 직업-과업 단편

본문·원장 dest **0**. 로그 `:42` `:65` dest-0 측정용 재열거는 지움. A5 copy-loss 바늘은 게이트 픽스처·cookpad형 **삭제 — 복원 대상 아님** 행 2곳에만 남김 (본문 승격 아님). 이름·나이·도시 세 파일 0.

### E1 — 원장 헤더 과잉 행

`check-limiter-ledger.mjs`가 `| Interpretation |` 헤더를 데이터행으로 세어 본문 25 / 원장 26. 헤더 첫 칸을 `#`로 바꿔 스킵. 해석 데이터행 25 = 본문 완전형 25. 대응 없는 해석 행은 없었고, 헤더가 과잉이었다.

`check-limiter-ledger.mjs krds` → 본문 **25** / 원장 **25** (192–216) 1:1 OK.
`migrate-reference.mjs --brand krds --gate-only` → PASS.

FIX_DONE krds defects=8 e1=1

## 개정 — 2라운드 (의미 검토 FAIL 5, 2026-08-29)

대상: `docs/design-md-weight/migrated/krds/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. provenance 본문 무변경. 한정·원장 행 추가 없음 (25=25).

### 결함 1 — §11 목적 (1)(2) 복원 (A1)

Experience Scope `:13`에 원본 `:1122` 목적 (1) `동일한 사용 경험` · (2) `디자이너와 개발자` / `품질 편차`를 서사로 복원. 사실 인용.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `동일한 사용 경험` | 1 | 1 | 0 |
| `품질 편차` | 1 | 1 | 0 |
| `디자이너와 개발자` | 1 | 1 | 0 |

### 결함 2 — 기본 패턴 4종 가이드 복원 (A1)

Layout `:701` 머리에 원본 `:953` `"사용성·접근성·인터랙션 가이드·플랫폼 고려사항"`. 12행 purpose 표 그대로.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `사용성·접근성·인터랙션 가이드·플랫폼 고려사항` | 1 | 1 | 1 |

### 결함 3 — 금지 감탄 `"놀라운"` 복원 (A1)

Content Voice `:733`에 원본 `:1090` `("놀라운", "혁신적인", "최고의")`. Don'ts `"감동의"` · 금지 표현 `"차세대"`는 각 원본 목록 유지. Don'ts에 `"놀라운"`을 합치지 않음.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `놀라운` | 1 | 1 | 0 |
| `혁신적인` | 3 | 3 | 0 |
| `최고의` | 3 | 3 | 0 |

### 결함 4 — Locale English-option 승격 해제 (D2)

`English option` 결합 삭제. 원본 §10 `영문 카피가 필요한 경우`를 카피 규칙으로 복원. Locale는 Korean (`ko`) for public services. 페르소나 식별 dest 0.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `English option` | 0 | 0 | 0 |
| `영문 카피가 필요한 경우` | 1 | 1 | 0 |
| `영문 모드` | 1 | 0 | 0 |
| `영문 인터페이스` | 1 | 0 | 0 |

### 결함 5 — body-small YAML/§3 use 병기 (A1, 항목 11)

Type roles `:301`: YAML `Caption / small label` + §3 `캡션 / 보조 / 작은 라벨`.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `Caption / small label` | 1 | 1 | 0 |
| `캡션 / 보조 / 작은 라벨` | 1 | 1 | 0 |

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML typography | `캡션 / 보조 / 작은 라벨` DESIGN | 0 | 1 |
| §5 Layout | `사용성·접근성·인터랙션 가이드·플랫폼 고려사항` DESIGN / P | 0 / 1 | 1 / 1 |
| §7 Don'ts | `혁신적인` DESIGN | 2 | 3 |
| §7 Don'ts | `최고의` DESIGN | 2 | 3 |
| §10 Voice | `놀라운` DESIGN | 0 | 1 |
| §10 Voice | `영문 카피가 필요한 경우` DESIGN | 0 | 1 |
| §10 Voice | `English option` DESIGN | 1 | 0 |
| §11 Brand Narrative | `동일한 사용 경험` DESIGN | 0 | 1 |
| §11 Brand Narrative | `품질 편차` DESIGN | 0 | 1 |
| §11 Brand Narrative | `디자이너와 개발자` DESIGN | 0 | 1 |

`Caption / small label` DESIGN dest **1** 유지 (병기, 추가 복사 없음).

`check-limiter-ledger.mjs krds` → 본문 25 = 원장 25 (192–216). `migrate-reference.mjs --brand krds --gate-only` → PASS.

FIX2_DONE krds fixed=5 logdest=10

## 개정 — 3라운드 (의미 검토 FAIL 5, 2026-08-29)

대상: `docs/design-md-weight/migrated/krds/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. 한정 행 추가 없음 (25=25). provenance Family 원장 행은 mixed-script 예문을 빼고 fallback-not-brand-face만 이름함.

### 결함 1 — Primary 5 Role 세 번째 쓰임 복원 (A1)

Primary `:121` Role에 원본 `:357` `약한 강조`. `약한 배경`과 합치지 않음.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `약한 강조` | 1 | 1 | 0 |

### 결함 2 — Gray 40 Role 절단 복원 (A1)

Gray `:144` Role을 원본 `:390` `bg-disabled, disabled badge`로 되돌림. Gray 20 `input disabled bg`와 합치지 않음.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `bg-disabled` | 1 | 1 | 0 |
| `Disabled badge fill` | 0 | 0 | 0 |

### 결함 3 — 서체 설계 원칙 `기호` 메트릭 복원 (A1)

Family `:270`에 원본 `:444` `한글·라틴·기호의 메트릭이 균일`. Distinctive traits `:34` `한글·라틴·숫자 일체` 유지 (내부 충돌 병기). `Hangul/Latin/numeral` 삭제.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `기호` | 1 | 1 | 0 |
| `메트릭` | 1 | 1 | 0 |
| `한글·라틴·기호의 메트릭이 균일` | 1 | 1 | 0 |
| `한글·라틴·숫자 일체` | 1 | 1 | 0 |
| `Hangul/Latin/numeral` | 0 | 0 | 0 |

### 결함 4 — Body medium YAML/§3 병기 (A1, 항목 11)

Type roles `:300`: YAML `Standard body (default)` + §3 `표준 본문 (`<body>` 기본)`.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `Standard body (default)` | 1 | 1 | 0 |
| `<body>` | 1 | 1 | 0 |
| `표준 본문` | 1 | 1 | 0 |

### 결함 5 — Heading xxsmall 적용 `H5` 복원 (A1, 항목 11)

Type roles `:293`: 원본 `:468` 적용 `H5` + YAML 부재 주석. Display Medium 행은 그대로.

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `H5` | 5 | 3 | 0 |
| `(visible scale only; not a YAML key)` | 0 | 2 | 0 |

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §2 Color | `약한 강조` DESIGN | 0 | 1 |
| §2 Color | `bg-disabled` DESIGN | 0 | 1 |
| Gray 40 Role | `Disabled badge fill` DESIGN | 1 | 0 |
| YAML family / §3 | `기호` DESIGN | 0 | 1 |
| YAML family / §3 | `메트릭` DESIGN | 0 | 1 |
| YAML family / §3 | `한글·라틴·기호의 메트릭이 균일` DESIGN | 0 | 1 |
| Family 치환 | `Hangul/Latin/numeral` DESIGN | 1 | 0 |
| YAML family / §3 | `설계 원칙` DESIGN | 0 | 1 |
| YAML typography | `<body>` DESIGN | 0 | 1 |
| YAML typography | `표준 본문` DESIGN | 0 | 1 |
| YAML typography | `H5` DESIGN | 2 | 3 |

`한글·라틴·숫자 일체` DESIGN dest **1** 유지. `Standard body (default)` DESIGN dest **1** 유지. `(visible scale only; not a YAML key)` DESIGN dest **2** 유지.

`check-limiter-ledger.mjs krds` → 본문 25 = 원장 25 (192–216). `migrate-reference.mjs --brand krds --gate-only` → PASS.

FIX3_DONE krds fixed=5 logdest=11
