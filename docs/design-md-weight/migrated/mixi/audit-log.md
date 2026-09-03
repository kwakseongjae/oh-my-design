# mixi 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mixi/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mixi/DESIGN.md`
검증 sibling: `web/references/mixi/.verification.md` — `find web/references/mixi -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. **EXISTS**.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches found` / `No such file`은 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양은 원본에 없다. MIXI DESIGN activity report는 culture context이지 공개 컴포넌트 사양이 아니다 (`DESIGN.md` 32). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MIXI-authored or a separately published UI specification`을 요구한다. 기존 25건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.

착수 실측: 본문 `derived editorial implementation inference` 25 / `not MIXI-authored` 25 / `separately published UI specification` 25 / `separately published` 25. 원장 `## Derived editorial inventory` 데이터행 25 (188–212). `node scripts/check-limiter-ledger.mjs mixi` 본문 25 = 원장 25. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11`은 분위기 세 항만 이름하고 같은 단락의 route-local news-red ≠ universal action colour는 한정 밖. Semantic `:80`은 역할 페어링·news-red·muted·red/orange 분리만 이름하고 catalog `primary_color` beside ink / 같은 ink hex의 header·news-label 컴포넌트 경로는 한정 밖. Font `:129`는 canonical-family·MIXISANS만 이름하고 `Unresolved in this capture` vs 원본 라벨 Unresolved keep-both는 표 안의 세 번째 부류. Header `:190`은 기하·YAML/§4 use만 이름하고 `static default specimen, not a state model`(`:179`)은 한정 밖. News `:225`는 기하·11px·kind 생략만 이름하고 같은 불릿의 links/rows ≠ button semantics는 한정 밖.

문장 분류: 브랜드 발행 사실(Find Job!·mixi·MONSTER STRIKE·MIXI, Inc.·Third Founding·We-Time Economy·MIXI Way·purpose/values) / 관측 기술(hex·px·selector·interactionCount 0·337 uses) / 편집적 해석·인과 판단(계약 표면 지정, 분위기 수식, 같은-hex 키 분리, keep-both, 승격 게이트, kind 생략). 세 번째 부류만 수정 대상.

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 5건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 분위기 세 항만. 같은 단락의 route-local red news label ≠ universal action colour는 세 번째 부류인데 한정 밖. | 기존 완전형에 그 읽기를 접어 넣음. 발생 수 +0. `#e5004d` DESIGN dest 3 불변(hex를 한정에 다시 쓰지 않음). |
| 2 | `DESIGN.md:80` — Semantic color | 역할 페어링·news-red·muted·red/orange 분리만. `:83` catalog `primary_color` beside ink, not a second colors token과 같은 ink hex의 header/news-label text·border 컴포넌트 경로는 세 번째 부류. | 기존 완전형에 두 읽기를 접어 넣음. `#000000` DESIGN dest **9** 불변(hex를 한정에 다시 쓰지 않음). `primary_color` DESIGN dest 1→**2**. |
| 3 | `DESIGN.md:129` — Font evidence | canonical-family / mixi2 거부 / MIXISANS=declared만. 클래스 열 `Unresolved in this capture` vs 해상 셀 원본 라벨 Unresolved keep-both는 표 안의 세 번째 부류. | 그 keep-both를 기존 완전형에 접어 넣음. `Unresolved in this capture` DESIGN dest 1→**2**. |
| 4 | `DESIGN.md:190` — Header global navigation | 70px / 13px 600 / 0px 기하와 YAML/§4 use만. `:179` `static default specimen, not a state model`은 세 번째 부류. | 기존 완전형에 captured control as a static default specimen rather than a state model을 접어 넣음. 원본 §9 전문 `static default specimen, not a state model` DESIGN dest **1** 유지(전문을 복제하지 않음). `static default specimen` dest 1→**2**. |
| 5 | `DESIGN.md:225` — News category label | 기하·11px off type-role·kind 생략만. 같은 불릿의 observed news-card rows as links/rows rather than button semantics는 세 번째 부류. | 그 읽기를 기존 완전형에 접어 넣음. `links/rows` DESIGN dest 2→**3**. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 25, `not MIXI-authored` 25, `separately published UI specification` 25, `separately published` 25. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 14, 19, 28, 36, 48, 57, 66, 80, 91, 103, 107, 113, 129, 136, 140, 152, 165, 190, 225, 234, 239, 249, 283.

### E1 — provenance derived 범위 (5건)

좁은 쪽 FAIL(fastcampus). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 25로 유지하고 이름 범위만 맞췄다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | Scope ¶2 행 `:11` | 분위기 세 항만. | route-local red news label ≠ universal action colour. |
| 7 | Semantic color 행 `:80` | 역할 페어링·news-red·muted·red/orange만. | catalog `primary_color` beside ink, not a second colors token; same ink hex on header/news-label text/border component paths, not extra colors keys; canvas = home logo block and news-label foreground/border context (same role, two observations). |
| 8 | Font evidence 행 `:129` | canonical-family / mixi2 / MIXISANS만. | class column `Unresolved in this capture` keeps the source label Unresolved in the resolution cell. |
| 9 | Header 행 `:190` | 기하·YAML/§4 use만. | captured control as a static default specimen rather than a state model. |
| 10 | News 행 `:225` | 기하·11px·kind 생략만. | observed news-card rows as links/rows rather than button semantics. |

헤더 / 데이터 행 **25 = 25** at 188–212 (E1 1:1, 이름 범위 정렬). `node scripts/check-limiter-ledger.mjs mixi` 본문 25 = 원장 25.

### E2 / E2a / E2c — 로그 목적지 (8건)

본문이 아니라 로그(와 원장 행의 이름 범위)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 본문을 고친 뒤 dest 표를 재실측함(lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML metadata 행 freshness | `provenance.md` 33–37. 실측 freshness 표는 **37–43**(33은 tokens.note dual 문장). | 37–43. |
| 12 | Footer **Verified**/Tier 행 | Freshness 33–37; Tier 1 73–77; Tier 2 81–83. 실측 Tier 1 리스트 **70–74**, Tier 2 리스트 **78–79**(81은 "Tier 2 data was not used…" 문장). | Freshness 37–43; Tier 1 70–74; Tier 2 78–79. |
| 13 | §13 Audience 행 | Disposition `provenance.md` 173. 실측 §13 원장 행은 **178**(173은 Omission ledger 빈 줄). | 178. |
| 14 | Sibling handling 전사 | `provenance.md` 137–151. 137은 빈 줄. 실측 전사 **138–151**. | 138–151. |
| 15 | Sibling-only 리스트 + A5 sibling 행 | `provenance.md` 155–167. 155는 도입 산문, 리스트는 **157–168**. | 157–168 (sibling handling과 A5 표 둘 다). |
| 16 | YAML homepage 2차 목적지 | 「DESIGN dest 6 / P dest 16」. `grep -oF 'https://mixi.co.jp/'`는 `/about/`·`/en/` 접두 일치를 포함한다(fitpet형 과대). 정확 홈(추가 path 없음) DESIGN dest **2** / P dest **4**. | exact dest 2/4와 substring dest 6/16을 분리. `#000000` P dest를 "multiple"에서 **6**으로. Exact `logo.type: favicon` DESIGN dest 1 / P dest 1. |
| 17 | §1/§2/§3/§4 한정 서술 | 본문 한정 확장 전 서술. 한정이 이름하는 읽기와 dest가 구버전. | `:11` news-red 읽기, `:80` primary_color/ink 분리, `:129` Unresolved dest 2, `:190` specimen 읽기, `links/rows` dest 3을 로그에 반영. |
| 18 | F2 dest 표 + SHA + `wc -w` | 본문 수정 뒤 재실측 없음(lablup). freshness 33–37이 F2에 남아 있음. Worker SHA `bc91d85c…`. `wc -w` 4,463. | `grep -oF -- \| wc -l` 재실측. Homepage exact 2/4 · substring 6/16. `#000000` DESIGN **9** / P **6**. `reconciled` 0/2. `1.8`/`1.15`/`1.5` 2/2/2. `primary_color` **2**/**2**. `Unresolved in this capture` DESIGN **2**. `static default specimen, not a state model` dest **1**. `links/rows` dest **3**. freshness 37–43, Verified 45, Conflicts 47, Tier 1 70–74, Tier 2 78–79. DESIGN SHA `add7fdd329b0ac863e420e5e5c5e7d8aeb604cddd56cf1e36b8f9b11d49a8745`. provenance SHA `7ba306190ebe568f18a8264275383d5055263048cb50eaba9a38008e5fe07e59`. `wc -w` 4,463→**4,562**. 줄 수 DESIGN **292** 불변. |

2차 목적지 재실측(본문에 남겼다는 주장): tokens.note 캡처 바운드 `DESIGN.md` 11 dest 1; `square-cornered` dest 1 at 174; `Do not generate a product UI…exact surface and selector` dest 1 at 72; B3 다섯 종류 전문 dest 1 at 113; B2a 예문 `These 4 items…` dest 1 at 48; §14 본문 159–163 실재. fitpet형 본문 0회 2차 목적지 0.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 25개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니다. Application priority / Unknowns / Changes는 Core 보일러플레이트.
- YAML vs §3 px, YAML use vs §4 use, header `0px` vs `tokens.rounded.control: 3`, padding trailing `5px` vs `tokens.rounded.news-image: 5`, Unresolved 열 vs 원본 라벨은 문서 전체 keep-both — 항목 5 비일관에 해당하지 않는다.
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 1 at 113. 준수 주장은 그 줄이 전문을 담을 때만 유지.
- E2d: `There is no ds.name / ds.url / ds.type field in the source frontmatter`의 분모는 원본 frontmatter. `§15 cubic-bezier values | None in the source`의 분모는 원본. Sibling-only는 「visible source body에 없고 이 원장에 남긴다」이지 「세 파일 어디에도 없다」가 아니다. 부재 단언이 자기 자신을 분모에 넣어 거짓이 된 행 0.
- D2a: §13은 삭제되지 않음(source-grounded groups). 처분 행에 이름·나이·도시·전기 문구 없음. 원형 라벨 `People sharing communication…` / `Service audiences across MIXI’s portfolio` / `MIXI designers and collaborators`는 원본 dest 1 / 산출 dest 1 — 게이트 copy-loss가 요구하는 기록이며 D2a 대상이 아니다. 본문에 식별자·동기·소속 분류의 신규 재구성 0.
- A1 키 경로: `header-global-navigation` type/bg/fg/radius/padding/height/font/states/use와 `news-category-label` type/bg/fg/border/radius/padding/height/font/use가 각 컴포넌트 블록 **행으로** 존재. icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 5/5 (`check-yaml-use-landing.mjs`). Token-set use 행은 카탈로그 관례대로 값만 두고 경로 문자열은 type/bg/fg 행에 둔다.
- 원본 §15 곡선·duration 없음. 값이 어디에도 없는 경우만 손실 — 합성하지 않음(kmong). `No motion token is promoted`는 모범.
- `#ffffff` canvas = home logo block **and** news-label foreground/border context는 같은 역할·두 관측. `#000000`은 ink / catalog `primary_color` / header fg / news-label fg / news-label border로 키가 갈린다. 분리를 원장 Semantic 행에 적어 E1 1:1.

## 범위 밖 관찰

- **A5a.** `--gate-only` `coverage.copy-loss` compared **0** < candidates **83**. `verdict: PASS`는 대조한 바늘 중 손실 없음이지 카피 보존이 아니다. 손 스윕 발행 라벨 18 extracted / 0 missing (Find Job! dest 3, MONSTER STRIKE dest 4, MIXI, Inc. dest 2, Third Founding dest 3, We-Time Economy dest 2, MIXI Way dest 2, mixi2 dest 2, MIXISANS dest 9, mixi-bold dest 3, mixi-medium dest 3, Noto Sans JP dest 17, swiper-icons dest 2, Make a moment worth sharing. dest 1, Leave room for a pleasant surprise. dest 1, Build the connection, then let the joy travel. dest 1, MIXI DESIGN dest 2). 라틴 카피 손실은 눈에 띄지 않았다. 설명문·use 라벨·편집 gloss는 손 대조 대상이 아니다.
- **B1 sibling 전용.** `hamburger` / `52px` / `98px` / `130px` / `MIXISANS-BOLD` / `Designer Relations` / `15.4px` / `2px white border` / `c-header__globalNavi--itemInner` / `s-guidline__top--title` / `four component classes` / `2026-07-13T14:58:16.213Z` DESIGN dest **0**. 구조 분류(`h2.s-guidline__top--title`, hamburger `button`)도 본문에 사실로 승격되지 않음. finda형 0.
- **A1 열 구조(wave 40).** mixi YAML에 `--css-var` 토큰명 열이 없다. Type roles는 Size/Weight/Line height/Token-set use 열에 YAML 값이 행으로 있다. 단계 귀속 수식어 소실 0.
- audit-log·migration-log에 문자열이 등장하는 것은 mention이지 use가 아니다.

AUDIT_DONE fixes=18
