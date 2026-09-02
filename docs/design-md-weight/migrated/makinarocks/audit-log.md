# makinarocks 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/makinarocks/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/makinarocks/DESIGN.md`
검증 sibling: `web/references/makinarocks/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found`/`No such file` 없음 — `find`로 산출 3 + 원본 + sibling 존재 확인 후 빈 출력만 dest 0.
날짜: 2026-09-01

발행 1차 UI 사양은 수집되지 않음. 2026 리브랜드 글은 브랜드 맥락이지 1차 UI 컴포넌트 사양이 아니다. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MakinaRocks-authored or a separately published UI specification`을 요구한다. 기존 23건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형 복수 `are derived editorial implementation inferences` / `they are not` 은 완전형.

착수 실측: 본문 `derived editorial implementation inference` **23** / `not MakinaRocks-authored or a separately published UI specification` **23** / `separately published` **24**. 원장 데이터 행 23 (137–159). `scripts/check-limiter-ledger.mjs makinarocks` 본문 23 = 원장 23. 24번째 `separately published`는 Font-evidence 표 셀 “No separately published MakinaRocks type specification”이지 닫힘이 아니다. 자리 수는 맞았으나 Content `:241` 원장 문장이 본문 세 번째 부류와 1:1이 아니었다(fastcampus 좁은 쪽). Principles `:47`도 본문 주어보다 짧았다.

문장 분류: 브랜드 발행 사실(About/리브랜드 수치·세 보이스 샘플·`마키나락스`) / 관측 기술(hex·px·KmrApparat/Pretendard 로드 수·셀렉터) / 편집적 해석·인과 판단(토큰 표면 귀속, YAML/px 비해합, 승격 게이트, 페르소나 비승격, 레지스터 표를 마이크로카피 가이드가 아니라고 읽기). 세 번째 부류만 수정 대상. 본문 23개 완전형은 인접에 있고, 세 번째 부류에 닫힘 없는 문장은 없었다. DESIGN.md는 이 감사에서 고치지 않음.

## 수정 목록 (13건)

### B2a — 인접 한정 (본문 0건)

본문 한정 줄: 9, 11, 13, 19, 34, 38, 47, 55, 65, 79, 89, 93, 97, 101, 107, 115, 131, 135, 152, 161, 223, 241, 277. 발생 수 23=23 유지. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### E1 — provenance derived 범위 (2건)

헤더 / 데이터 행 **23 = 23** at 137–159 유지. 행 텍스트를 본문 한정 주어에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 1 | `provenance.md` Content `:241` | 원장: “Voice rules as structural notes, not MakinaRocks-authored doctrine or a complete product-microcopy guide”. 본문 한정은 그 문장이 아니다. `Voice rules` / `structural notes` / `MakinaRocks-authored doctrine` DESIGN dest **0** / P dest **1**(감사 전). 본문이 닫는 주어는 industrial/concrete/outcome-led, 리브랜드 은유, 3행 레지스터 표, `마키나락스` 병기. 좁고 다른 이름(fastcampus). | 본문 `:241`과 1:1: first-party public language called industrial, concrete, and outcome-led; rebrand energetic metaphor as brand expression rather than an instruction to overstate product capability; three-row register table as observed public-context notes rather than a complete product-microcopy guide; `마키나락스` kept beside `MakinaRocks`. `Voice rules` P dest 0. `industrial, concrete, and outcome-led` P dest **1**. `three-row register` P dest **1**. |
| 2 | `provenance.md` Principles `:47` | 원장: “Three stems plus every UI implication…; toss-form close”. 본문은 “numbered stems resting on first-party About and rebrand sentences the source attributes to the company, plus every *UI implication*”. 닫힘 형태 주석은 본문 주어가 아니다. | 본문 주어로 맞춤. `numbered stems` DESIGN dest 1 / P dest 1. |

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그(와 원장 이름 범위)만 고침. 이중 목적지는 둘 다. 준수 주장(B3 전문)은 본문 `:107`에 실재하므로 유지. 본문 수정이 없으므로 DESIGN dest 표는 재실측만 했고, provenance 행 수정 뒤 P dest는 재실측해 반영(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | §3 Typography | exact `zero visible uses` dest **2**. 실측 DESIGN dest **1** (`:123`). Avoid `:70`는 단수 `zero visible use`. | dest 1. 단수 부분문자열 dest 2를 별도로 적음. |
| 4 | §15 Motion | exact `do not attribute a motion system to MakinaRocks without a selector-provenanced observation` dest **2**. 실측 DESIGN dest **1** (`:105`). `:107` 한정은 `refusing to attribute…`(다른 문자열, dest 1). | dest 1. 한정 쪽 문자열을 따로 적음. fitpet형 2차 목적지 과장 아님 — 본문에 1회는 있다. |
| 5 | §11 Brand Narrative | `research-and-development workforce share above 70%` / `dense, grounded outer form` / `energy breaking outward` / `business, digital, event, and product touchpoints` dest **1**. 실측 각 DESIGN dest **2** (`:13` 서술 + 같은 절 한정 재진술). `stability/precision…`만 dest 2로 세고 이 넷은 1. | 넷 모두 dest 2. `founded in 2017` dest 1 · `more than 6,000 models applied in industrial fields` dest 1은 한정 문구가 달라 유지. |
| 6 | Footer / Tier 2 | `getdesign` P dest **2**. 실측 P dest **3** (Tier 2 URL + `site:getdesign.md/makinarocks` + Omission mention). DESIGN dest 0은 맞음. | P dest 3. |
| 7 | Footer / Tier 2 | `refero` P dest **1**. 실측 P dest **2** (Tier 2 행 `styles.refero.design` 두 번). 대문자 `Refero`는 다른 문자열(P dest 1). DESIGN dest 0은 맞음. | P dest 2. |
| 8 | YAML colors | 목적지 `DESIGN.md` 79–84. 실측 Muted `#8d8da5` 행은 **85**. | 79–85. |
| 9 | §8 Responsive | 목적지 `DESIGN.md` 219. 실측 `1440×900`은 **221** (219는 빈 줄). | 221. |
| 10 | YAML identity / freshness / surfaces | Identity table 9–22 (22는 로고 산문). metadata 17–22. freshness 26–35 (35는 빈 줄). Conflicts `provenance.md` 37 (실측 **36**). surfaces/sources 41–59 (Tier 1 시작을 뭉갬). Tier 1 61–66 / Tier 2 68–71. | Identity 9–20. metadata 17–20. freshness 26–34. Conflicts 36. surfaces 40–44. sources 48–55. Tier 1 59–63. Tier 2 67–68. |
| 11 | §3 Typography 줄 범위 | Evidence 115–126 (표는 124에서 끝). Family 129–131 (절 머리 127). Type roles 135–144 (절 머리 133). | 115–124 · 127–131 · 133–144. |
| 12 | §10 Voice | `industrial, concrete, and outcome-led` DESIGN dest 2만. E1 수정 후 P dest **1** (inventory 인용). | DESIGN dest 2 / P dest 1 (E2a). |
| 13 | Hashes | provenance SHA `c494958e…`는 원장 개정 전. | `e5c93a4c96715ec65ef9691fb2230c9d03924829474f6b537198ec79684b2ed4`. DESIGN SHA `3a1a534c8f3a8efa9536c10150360de8ae36ccec5aaac4cfceaf306bab50e2c8` 불변. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 23, `not MakinaRocks-authored or a separately published UI specification` 23, `separately published` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다. `node scripts/check-limiter-ledger.mjs makinarocks` 본문 23 = 원장 23 (137–159).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정. DESIGN.md 미수정.
- 기존 23개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Font-evidence `:119`의 24번째 `separately published`는 닫힘이 아니라 읽기(type specification 부재)이고 같은 절 `:115`가 toss형으로 끝난다.
- Governance 일반 문구는 B2a 대체물이 아니다. Capture `:161` 다음의 Core §4.4 문장은 시스템 계약이지 브랜드 해석이 아니다.
- YAML vs §3/`§4` px는 문서 전체 keep-both. 무출처 커브 없음 + `intentionally not promoted` / `No duration, easing, or transition token is captured`는 원본에 없는 규칙을 합성하지 않은 모범(kmong).
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 1 (`:107`). 로그의 B3 유지는 본문 실재.
- E2d: Omission `None in the source. Nothing to delete.`의 분모는 원본(SRC `cubic-bezier` dest 0). 세 파일 부재를 단언하지 않는다. `native-client` DESIGN dest 0 / P dest 0 — 로그 mention은 분모가 아니다.
- D2a: §13 처분 행은 절·그룹·필드 종류만. 이름·나이·도시·전기 문구 없음. 원형 라벨을 D2a로 지목하지 않음. Primary tasks는 캡처 공개 표면/컨트롤 세 개이지 페르소나 동기가 아니다.
- A1 키 경로: YAML `tokens.components.disabled-home-control`의 type/bg/fg/radius/font/states/use가 Disabled public-home control 블록에 **행으로** 존재 (`Primitive type: \`button\`` · Background `rgba(196, 196, 212, 0.5)` · Text `#000000` · Radius `28px` · Font `13.3333px / 400 / Pretendard` · Observed `disabled computed snapshot only` · Token-set use). icook형 타 블록 hex 차용 없음. 복원 0. display-hero/body 메트릭+use는 Type roles 표의 해당 행. 색 5키는 Semantic color 각 불릿의 Token-set path.
- 원본 §15에 곡선·duration 값 없음. 값이 어디에도 없는 경우만 손실 — 합성하지 않음.
- `#ffffff` canvas ≠ `#000000` ink는 원본 키 분리. `#000000`가 Ink와 두 컨트롤 Text에 동시에 있는 것은 YAML `tokens.colors.ink` + `tokens.components.disabled-home-control.fg` 보존이다.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **0** / candidates **71**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피(`Transforming Industries with Specialized AI` DESIGN dest 2 · `Deploying AI, Delivering Reality` dest 2 · `The Physical AI Leader — Built for the Field, Powered by Enterprise AI OS` dest 2 · `Delivering Reality` dest 3 · `마키나락스` dest 3) 미생존 0. YAML use 2/2 verbatim dest 1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `31.2px` / `rgb(249, 249, 251)` / `1,656` / `2,142` / `2026-07-13T11:52:21.879Z` / `24px` / `surface-2` / `surface-2::li` / `38 variants` / `score 65` / FontFace `light`·`book` / `contact CTA` / `product cards` / `industry tiles` / `blog card` DESIGN dest 0. `portal H2` SRC/SIB/DESIGN dest 0. 본문 `h1` dest 2는 원본 §3 `captured h1`(SRC dest 1)이지 sibling 표제 승격이 아니다.
- **D2a.** 식별자 없음(원본 §13도 그룹만). 동기 스케치·소속 분류의 원본-밖 재구성 없음. Audience 세 줄은 원본 §13 그룹 문구. 로그 삭제 행은 원형 라벨을 적지 않음 — 발행 한국어 원형 라벨이 아님.
- **같은 hex 두 표면.** `#ffffff`는 Semantic canvas(원본: background **and** high-contrast text/border)와 Distinctive traits “high-frequency public-web base”. `#000000`는 Ink와 header/disabled Text. 원본 YAML·§2 문장 그대로이며, 원장 Semantic 행은 hex 간 비해합(`canvas` off `ink` off `slate` off `muted`)만 이름한다. krafton형 미기록 귀속 분리는 새 역할 발명이 아니라 키 경로 보존으로 본다. 고치지 않음.
- **충돌 처리 일관성.** YAML unitless vs §3/§4 `px`는 spacing·shape·type 전항 keep-both. fluorescent yellow-green은 전항 토큰 시트 밖. krds형 자리마다 다른 충돌 처리는 없다.
- **원본 표 열.** 원본 색 절에 `--token` 이름 열이 없다. krds형 토큰명 열 삭제는 해당 없음.

AUDIT_DONE fixes=13
