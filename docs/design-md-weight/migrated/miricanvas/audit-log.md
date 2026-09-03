# miricanvas 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/miricanvas/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/miricanvas/DESIGN.md`
검증 sibling: `web/references/miricanvas/.verification.md` — `find web/references/miricanvas -type f`와 `test -f web/references/miricanvas/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. Help Center 문서와 MIRIDIH 기업 페이지는 토큰 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MiriCanvas-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 **22** / 원장 데이터 행 **22** (헤더 162, 데이터 164–185). 숫자는 맞았으나 한정이 같은 단락의 판단을 이름하지 않거나(inflearn형 접어 넣기), Capture `:167` medium/low 비승격에 인접 완전형이 없었다. Layout `:295`는 not-full-grid·desktop-capture만 이름하고 `:293`의 absent-rather-than-inferred를 빠뜨렸다. Type roles `:138`은 extra-key만 닫고 unitless-ratios-stay-ratios는 한정 목록 밖이었다. 원장 Type roles 행은 그 비율 유지를 이미 적고 있어 본문 한정보다 넓었다.

문장 분류: 브랜드 발행 사실(사명 라인·한국어 슬로건·YAML 값·§표 수치) / 관측 기술(hex·radius·padding·selector 전사) / 편집적 해석·인과 판단(비병합, keep-both, 분위기, 증거 종류 정렬, 페르소나 삭제 읽기, medium/low 비승격). 세 번째 부류만 수정 대상. 토큰 값·컴포넌트 표·상태 applicability·구조는 수정하지 않음.

## 수정 목록 (28건)

### B2a — 인접 한정 (본문 9건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:19` — Primary tasks | "They do not come from the source's Personas section"는 세 번째 부류. 기존 한정은 세 항목 선택만 이름한다. | 기존 완전형에 not-from-Personas를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:73` — Semantic color | 메뉴 패널 배경 `#ffffff`를 canvas 키에 두는 것은 세 번째 부류. 기존 한정은 canvas off on-primary 두 키와 menu-open 텍스트 `#000000`만. | 기존 완전형에 menu-open 배경 = canvas 키(세 번째 YAML colors 키 아님)를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:89` — Spacing | `md: 8`/`lg: 12`/`xl: 16`/`hero: 24`/`xxl: 20`/`14px` 비병합은 세 번째 부류. 기존 한정은 "own keys / own records"만. | 기존 완전형에 각 쌍을 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:102` — Shape | Extra-large `16` off spacing step는 세 번째 부류. 기존 한정은 네 키·8px cluster·frequency sentence만. | 기존 완전형에 `16` off spacing을 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:126` — Font evidence | Official product-use announcement = none located는 세 번째 부류. 기존 한정은 표 성격·licence·Times만. | 기존 완전형에 none-located를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:138` — Type roles | unitless-ratios-stay-ratios / both-writings-stay는 세 번째 부류. 기존 한정은 pairing·YAML use·extra-key만 (inflearn `:145` 동형). | 기존 완전형에 YAML unitless와 §3 px 병기, 비율 유지를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:167` — Capture / medium-low | 56px white / 48px white / 46px input을 canonical variant로 올리지 않는 것은 세 번째 부류. `:169`는 applicability 절차만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:295` — Layout | `:293` "absent rather than inferred from desktop public routes"는 세 번째 부류. 기존 한정은 not-full-grid·14px/56px·desktop-capture만. | 기존 완전형에 absent-rather-than-inferred를 접어 넣음. 발생 수 +0. |
| 9 | `DESIGN.md:300` — Content | `:309` avoid-inventing editor error messages / onboarding / persona-specific voice는 세 번째 부류. 기존 한정은 voice 성격화와 "not evidence of an editor microcopy system"만. | 기존 완전형에 avoid-inventing bound를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **23**, `not MiriCanvas-authored` **23**, `separately published UI specification` **23**. `provenance.md`의 inventory 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 51, 60, 73, 89, 102, 106, 110, 126, 134, 138, 156, 167, 169, 295, 300, 343.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형)과 넓은 쪽(본문 한정이 이름하지 않은 판단을 원장만 적음)을 본문에 맞춰 닫음. 본문 한정수와 1:1이어야 한다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | Semantic color 행 | canvas off on-primary만. 본문이 이제 menu-open 배경 `#ffffff` = canvas 키를 이름한다. | 그 분리를 행에 추가. |
| 11 | Spacing 행 | unmerge 일반만. | `md`/`lg`/`xl`/`hero`/`xxl`/`14px` 쌍을 행에 적음. |
| 12 | Shape 행 | 네 키·8px cluster·frequency만. | Extra-large `16` off spacing을 행에 추가. |
| 13 | Font evidence 행 | 표 성격·licence·Times만. | product-use announcement none located를 행에 추가. |
| 14 | Type roles 행 | 비율 유지를 원장만 적고 본문 한정 목록에는 없음. | 본문 접어 넣기와 같이 both-writings / 비율 유지를 행에 명시. |
| 15 | Capture / medium-low | 행 없음. 본문 `:167` 신설. | 행 신설 1 at `:183`. |
| 16 | Layout 행 | not-full-grid·14px/56px·desktop-capture만. | absent-rather-than-inferred를 행에 추가. |
| 17 | Content 행 | voice·microcopy-guide만. | avoid-inventing bound를 행에 추가. |

헤더 `22` → **23** / 데이터 행 **23** at `:164–186` (E1 1:1). `#ffffff` 역할 분리는 inventory Semantic 행과 본문 `:73`이 같이 이름함.

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 준수 주장은 본문 실재 시에만. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 편집 후 dest 표를 재실측함 (wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 18 | YAML identity | Operator P **48/55**, editor **49/56**, license **50/57**. 55는 빈 줄, 56·57은 home/templates URL. 실측 P **48/59**, **49/60**, **50/61**. | 실측 줄. DESIGN dest **1** at 9 유지 (fitpet형 0회 아님). |
| 19 | Footer Tier 1 / Tier 2 | Tier 1 **53–58**, Tier 2 **62–63**. 실측 리스트는 Tier 1 **56–61** (heading 54), Tier 2 **65–66** (heading 63). | 실측 범위. |
| 20 | §10 공식 표현 | 슬로건 dest 1 at **303/304/305**, corporate at **306**. 303은 표 구분선. 실측 Homepage **304**, Templates **305**, Business **306**, Corporate **307**. | 실측 줄. DESIGN dest 각 **1**. |
| 21 | Sibling-only | `provenance.md` **114–128**. 리스트는 **118–130** (Times 198과 capture 34/22/29는 129–130). | **118–130**. DESIGN dest **0**은 DESIGN.md 분모 (로그 mention ≠ use). |
| 22 | §12 inventory | 22 rows at **163–185**. 163은 구분선. 본문이 이제 23. | **23** data rows at **164–186**, header **162**. |
| 23 | YAML metadata / §11 | `tokens.source: reconciled` P **70/194**, `components_harvested: false` P **70/190**, narrative-not-token P **193**. inventory 행 신설로 Proof가 한 줄 밀림. | **70/195**, **70/191**, **194**. |
| 24 | YAML colors `#ffffff` | DESIGN dest **8**. Semantic 한정이 메뉴 배경 첨부를 이름한 뒤 dest **9**. | dest **9**. 73/277 canvas 첨부 병기. |
| 25 | YAML spacing dest | `md: 8` dest **2** / `lg: 12` **4** / `xl: 16` **4** / `xxl: 20` **2** / `hero: 24` **4**; exact `tokens.spacing.md: 8` dest **1**; `tokens.rounded.sm: 8` dest **1**. 한정 접어 넣기 후 실측 **3 / 6 / 6 / 3 / 5**, exact dest **2 / 2**. | 재실측 수. |
| 26 | YAML type roles dest | `tokens.typography.section.size` dest **3**, `tokens.spacing.hero: 24` dest **3**, `tokens.typography.ui.size` dest **3**. 실측 각 dest **4** at 89/138/148. | dest **4**. |
| 27 | F1 · Deviations · SHA | F1 22=22. `split()` 4,981. worker-close SHA `d8d6777c…`. | F1 **23=23**. `split()` **5,151** (353줄 불변). auditor SHA `fa9d2ce905e08904a98b4ad8ee88d9893a6f006dde167dc5cb0c41a22b53bd3a`. |
| 28 | §4 / §10 한정 dest | medium/low 비승격과 avoid-inventing이 로그 사유에 없음. | §4에 `:167` 인접 한정, §10에 `:300` avoid-inventing bound. |

Destination SHA `d8d6777c…` → `fa9d2ce905e08904a98b4ad8ee88d9893a6f006dde167dc5cb0c41a22b53bd3a` (한정 접어 넣기·신설 후). 줄 수 DESIGN 353 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. Help Center를 limiter에 1차 사양처럼 넣지 않은 것도 맞다.
- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- Menu open Kind `:284`의 non-interactive 읽기는 Capture `:169`가 이름함 (Principles 머리 한정과 동형). 같은 판단의 완전형을 두 번 세지 않음.
- E2c: B3 전문 `DESIGN.md:110` dest **1** (`computed transition properties` · `animation name` · duration · easing · `reduced-motion behavior`와 per-component 게이트·partial-confirmation 배제). Principles 형태 `:42` dest **1**.
- E2d: 「세 파일 어디에도 없다」 자기부정 행 없음. Sibling-only `:116`은 “this paragraph names the dropped field kind; it does not assert that the strings are absent from this file”.
- D2a 처분 행은 절·인원·필드 종류만. 원형 라벨(`Workspace owners and managers` 등)은 로그 삭제 행에 있고 (게이트 copy-loss), 이름·나이·도시·전기는 적지 않음.
- YAML `tokens.components: {}` — 복원할 컴포넌트 키 경로 없음. §4 필드는 각 블록에 행으로 있음.
- 원본에 없는 모션 규칙을 합성하지 않음. `:110` "No motion token is asserted"는 원본 §15 문장.

## 범위 밖 관찰

- **A5a.** 로그 `compared` **4** / `candidates` **106**. 이관본 130개 전수 평균 4.4%와 같고, `verdict: PASS`는 대조한 바늘 중 손실 없음이다. 손 스윕 발행 카피 DESIGN dest: `세상의 모든 디자인은 미리캔버스로 완성` **1**, `복잡한 디자인, 템플릿으로 3분이면 끝!` **1**, `기업의 디자인 고민, 미리캔버스로 한 번에 해결합니다` **1**, `copyright safe` **1**, `미리캔버스` DESIGN **3** / provenance **1** (YAML `display_name_kr`는 원장; 슬로건 안의 같은 문자열은 본문), `MIRIDIH` **6**, YAML `use` 4종 dest 각 **1** 또는 **2**. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **A5 (보고만).** 원본 §1 `without turning every surface into brand decoration` (SRC **1**)이 Scope ¶2에서 `without turning all of those surfaces into brand decoration` (DESIGN `all of those surfaces` **2** / SRC **0**)으로 바뀌었다. Distinctive traits 첫째 줄은 `every surface` DESIGN **1**로 남아 있다. 발행 슬로건이 아니라 원본 서술 문장의 한정사 교체. 고치지 않음.
- **B1.** sibling 전용: `playwright_cli` SIB **1** / DESIGN **0**; `4405471619481` SIB **2** / DESIGN **0**; `business/industries/franchise` SIB **1** / DESIGN **0**; `home::[data-omd-capture="34"]` SIB **1** / DESIGN **0**; `Search input` SIB **1** / DESIGN **0**; `portal H2` 전 파일 **0**. 본문에 사실·구조 분류로 승격되지 않음. `:167` `.verification.md`와 56px/48px/46px는 원본 §4 문장.
- **D2a.** 식별자 DESIGN/P dest **0**. 동기(`configuring permitted` / `headquarters and locations` / `exchanging feedback` / `brand-managed`) DESIGN dest **0**. 소속 분류(`Organization and franchise operators` / `Solutions Partner`) DESIGN dest **0**. `owners and managers` DESIGN dest **1** at Principles 3 — 원본 §12 문장이지 §13 승격이 아님. Audience는 ready-made-material 주소만.
- **E2d.** 부재 단언 행이 자기 자신을 분모에 넣어 거짓이 된 문장 없음. 로그 §13 dest **0** 측정은 DESIGN·provenance를 분모로 하고, 원형 라벨은 로그 삭제 행에만 있다 (wave 41 경계).
- **A1 키 경로.** YAML `tokens.components`는 `{}`. icook형 필드 소실 없음. 복원 없음. colors 7키, typography family + 5 role(size/weight/lineHeight/use), spacing 7, rounded 4, `tokens.shadow.menu-open`이 각 대응 블록에 경로와 값으로 있다. 값 grep만으로 다른 블록의 같은 hex를 보존으로 읽지 않음.
- **열 구조 / 귀속 (웨이브 40).** 원본 색 역할명·YAML 키명이 본문에 남아 있다. CSS custom-property 열은 원본에 없다. 충돌 처리는 문서 전체 keep-both (canvas/on-primary 두 키, YAML unitless line-height와 §3 px, spacing 숫자와 radius/padding 숫자).
- **`#ffffff` 역할 분리 (웨이브 39 krafton).** canvas / on-primary / 메뉴 패널 배경(canvas 키) / Filled primary Text(on-primary). 정상 귀속 분리. 원장 Semantic 행과 본문 `:73`에 맞춰 두었음(E1). 값을 고치지 않음.
- **`미리캔버스` SRC 4 / DESIGN 3.** YAML `display_name_kr`가 provenance `:11`로 분리된 결과 (E2a). 본문 슬로건 2 + Scope 병기 1. 손실 아님.

AUDIT_DONE fixes=28
