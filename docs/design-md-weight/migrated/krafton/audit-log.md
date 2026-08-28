# krafton 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/krafton/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/krafton/DESIGN.md`
검증 sibling: `web/references/krafton/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KRAFTON-authored or a separately published UI specification`을 요구한다. 기존 29건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 29 / 원장 29. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:146–148`의 duration keep-both와 `0.1 s` not-a-spacing-step은 `:132` 한정(표 앞, easing/게이트만)에 인접하지 않았다. Scope `:11`은 분위기만 이름하고 three-key/two-key/off-canvas를 빠뜨렸다. Semantic `:81`은 Alert Red alternate를 빠뜨렸다. Family `:186`은 fallback만. Type roles `:190`은 inventory가 hero `140`을 이름하는데 한정 본문이 그것을 말하지 않았다. Download Link `:342`는 inventory가 0.3s/0.2s keep-both를 이름하는데 한정 본문이 geometry만 말했다.

문장 분류: 브랜드 발행 사실(연도·스튜디오명·비전 라인·YAML 값·§표 수치) / 관측 기술(CSS 클래스·hex·duration 전사) / 편집적 해석·인과 판단(키 비병합, keep-both, 분위기, 승격 게이트, 페르소나 삭제 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (27건)

### B2a — 인접 한정 (본문 6건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | three-key / two-key / Body Background off canvas는 세 번째 부류. 기존 한정은 분위기 읽기만. | 기존 완전형에 세 키 비병합 · 두 키 비병합 · Body Background off canvas를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:81` — Semantic color | Alert Red alternate를 YAML colors 키가 아니라고 읽는 것은 세 번째 부류. 기존 한정은 대소문자 keep-both와 역할 부착만. | 기존 완전형에 Alert Red alternate = §2/§14 writing, not a second YAML colors key를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:148` — Motion keep-both | YAML `0.3s` / §4 `0.2s` / §15 `0.2–0.3 s` keep-both와 `0.1 s` not-a-spacing-step은 세 번째 부류. `:132`는 표 앞이고 easing / 게이트만 가리킨다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:186` — Family | §9 Zalando 600–800 / Poppins 500과 §7 Noto Sans JP keep-both는 세 번째 부류. 기존 한정은 fallback prohibition만. | 기존 완전형에 그 keep-both를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:190` — Type roles | hero `140` off spacing `140`과 article `16` not-a-spacing-step은 세 번째 부류. 원장은 이미 hero `140`을 이름했으나 한정 본문이 말하지 않음. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:342` — Download Link | 0.3s / 0.2s / 0.2–0.3 s keep-both는 세 번째 부류. 원장은 이미 이름했으나 한정 본문은 geometry만. | 기존 완전형에 duration keep-both를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 30, `not KRAFTON-authored` 30, `separately published UI specification` 30. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 3 / 4는 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 44, 54, 66, 81, 113, 124, 128, 132, 148, 160, 170, 176, 186, 190, 210, 228, 252, 286, 315, 342, 370, 375, 392, 426.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | 헤더 | 29 complete / 29 data rows. | **30** / **30**. |
| 8 | Scope ¶2 행 2 | 분위만. 본문 `:11`이 이제 키 비병합도 이름한다. | 세 키 / 두 키 / off-canvas를 행에 추가. |
| 9 | Semantic 행 10 | 역할·비병합만. 본문 `:81`이 이제 Alert Red alternate도 이름한다. | 그 판단을 행에 추가. |
| 10 | Official product-use 행 16 | "No published type token"만. 본문 `:170`은 type specimen도 이름한다. | type specimen을 행에 추가. |
| 11 | Family 행 18 | Fallback만. 본문 `:186`이 이제 §9/§7 keep-both도 이름한다. | 그 판단을 행에 추가. |
| 12 | Type roles 행 19 | hero `140`만. 본문 `:190`이 이제 article `16`도 이름한다. | article `16`을 행에 추가. |
| 13 | Capture 행 21 | Kind/applicability / not-complete만. 본문 `:228`은 catalog-graph · role procedure · Focus-vs-focus-visible도 이름한다. | 본문이 이름하는 판단을 행에 맞춤. |
| 14 | Motion keep-both 행 | 없음. 본문 `:148` 신설. | 행 30 신설. |

헤더 / 데이터 행 **29 → 30** at 163–192 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (13건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 15 | YAML identity 행 | homepage DESIGN dest 2 at 9/21. `grep -o 'https://www.krafton.com'`는 line 9에 4회(homepage ×2 + brandcenter + vision). | DESIGN dest **5** at 9×4/21 · P dest **19** at 13/46–53/57–64/84/105. |
| 16 | YAML identity 행 | `#000000` DESIGN dest 23 (줄 수). 11·241·334에 각 2회. | dest **26**. P dest 5는 유지. |
| 17 | YAML identity 행 | `logo.type: favicon` / s2를 P dest 2 at 15/16로 묶음. exact `logo.type: favicon`은 P 25. `s2/favicons`는 P 16. | exact type DESIGN dest 1 at 210 / P dest 1 at 25. s2 DESIGN dest 1 at 210 / P dest 1 at 16. 표 행 15/16은 필드로 분리. |
| 18 | YAML metadata 행 | `prose-derived` P dest 3 at 19/27/75. 27에 2회. freshness 35–40; **Verified:** 42. | P dest **4** at 19/27×2/75. exact `tokens.source: prose-derived` P dest **2** at 27/75. table **33–36**; Verified **38**. |
| 19 | YAML family 행 | `SF Mono` dest 3 at 173/176/184. 173에 2회, 186 누락. | dest **5** at 173×2/176/184/186. |
| 20 | YAML type-roles 행 | `1.9` dest 2 at 190/196; `1.7` dest 2 at 190/198. 각 표 행에 2회. | `1.9` dest **3** at 190/196×2 · `1.7` dest **3** at 190/198×2. |
| 21 | YAML spacing 행 | `tokens.spacing.xxl: 140` dest at 113/202. 한정 확장 후 190에도 있음. | dest **3** at 113/190/202. |
| 22 | Footer 행 | Freshness 35–40 · Verified 42 · Conflicts 44. | table **33–36** · Verified **38** · Conflicts **40**. |
| 23 | §12 행 | inventory 163–191 (29). | **163–192** (30). |
| 24 | §15 행 | rules 148–152. 148은 0.1s 문단이고 규칙은 152–156. | rules **152–156**. 148은 신설 한정. |
| 25 | Deviations | B2a 29=29 · `wc -w` 6,469 · worker SHA만. | 30=30. `wc -w` **6,642**. auditor SHA `e52922c7f4941be5f273df082e5e038d400bb6906feae237ded4ea8d019f08a2`. |
| 26 | F1 | 29 = 29. | 30 = 30. 신설 1 + 확장 5를 목록에 반영. |
| 27 | F2 | 29=29. dual dest를 착수 숫자로 적음. | 30=30. homepage / `#000000` / `prose-derived` / `SF Mono` / `1.9` / `1.7` / freshness 33–36을 실측으로 갱신. |

Destination SHA `be8612421b7335b0b8c06bf697bbfa7c64b062da761109f952f0360d3b6b0910` → `e52922c7f4941be5f273df082e5e038d400bb6906feae237ded4ea8d019f08a2` (한정 신설·확장 후). 줄 수 DESIGN `wc -l` **428** 불변. provenance 191→**192**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 29개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 160 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:44` dest 1. 준수 주장 유지.
- E2d: sibling-only 머리(`provenance.md:101`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:151`)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.
- `prose-derived` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `tokens.source: prose-derived` DESIGN dest 0 은 로그 주장과 맞다.
- `loading | applicable` dest 1 at 260. `not in the token set` dest 0.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 / candidates 148. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: Pioneer the Undiscovered dest 7 / PIONEER THE UNDISCOVERED dest 2 / Fans are at the center. dest 3 / Aim for Bold Objectives dest 1 / Depth Builds the Edge dest 2 / Imagination + Technology dest 2 / Fan-First Thinking dest 3 / Embrace Global Perspectives dest 2 / Bluehole Studio dest 3 / TERA dest 2 / PUBG: Battlegrounds dest 2 / Our Challenges dest 2 / Korea Stock Exchange dest 2 / We pioneer the path to players' dreams. dest 1 / We don't rush into the undiscovered dest 1 / SiteHeaderBar dest 1 / KeyVisualVideoBox dest 1. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `8px 43px 7px 15px` / `KRAFTON_FONT.woff` / `fonts.css` / `button_1_button_colour` / `ko-KR` / `krafton — 0 DESIGN.md files` / `about/history` DESIGN dest 0. sibling의 "seven CSS bundles"·h3/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음. 본문은 원본 footer의 theme CSS 5종만 이름한다.
- **D2a.** 식별자(`Seungjae`/`Mia`/`David`/`Yuki`/`São Paulo`/`Hong Kong`) · 동기(`patch notes`/`careers page`/`PUBG Mobile`/`quarterly earnings`/`cultural fit`) · 소속(`Competitive Gamer`/`Investor Analyst`/`Indie Developer`/`gameplay engineer`) DESIGN/P/L dest 0. Audience는 원본 그룹 `fans` / Fan-First Thinking만. `Our Challenges`는 발행 페이지명. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **E2d.** 이 브랜드 0. 부재 단언 행이 자기 나열을 분모에 넣는 형태 없음.
- **A1.** 원본 YAML 컴포넌트 4레코드의 필드가 각 대응 블록에 행으로 있다. button-primary 9필드(type/bg/fg/border/padding/font/radius/hover/use), input-search 9필드(type/bg/fg/border/height/padding/font/radius/use), tab-third 7필드(type/bg/fg/font/height/active/use), listItem-link 5필드(type/fg/font/hover/use). icook형 키 경로 소실 없음 — 같은 hex가 다른 블록에만 있는 형태 없음. 복원 없음.

AUDIT_DONE fixes=27
