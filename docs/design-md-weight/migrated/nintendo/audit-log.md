# nintendo 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/nintendo/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/nintendo/DESIGN.md`
검증 sibling: `web/references/nintendo/.verification.md` — `find web/references/nintendo/.verification.md`와 `test -f`로 경로 직접 확인. 파일 **존재**. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). 카피는 `grep -oF`. `grep -c` 미사용. 셸 `no matches`/`No such file`은 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

원본 frontmatter에 `ds.name` / `ds.url` / `ds.type` 없음. 발행 1차 UI 사양이 없으므로 B2a 예문 전제(v12)가 성립하고 toss형 닫힘 `not Nintendo-authored or a separately published UI specification`을 요구한다. 착수 시 기존 38건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 38 / 원장 38. 숫자는 맞았으나 Media Tile `:477`, Featured Card `:491`은 Capture how-to-read `:279`와 같은 omit-kind 판단인데 인접 완전형이 없었다(ncsoft Dark Tile형). 원장도 그 두 자리를 빠뜨렸다 — 좁은 쪽(fastcampus형). provenance `:140` / 로그 A5a는 sibling을 **없음**으로 적었으나 `find web/references/nintendo/.verification.md`는 파일을 연다.

`node scripts/check-limiter-ledger.mjs nintendo` → 본문 **40** / 원장 **40** (159–198) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs nintendo` → use 16/16 OK.
`node test-v2/tools/migrate-reference.mjs --brand nintendo --gate-only` → PASS, `problems: []`, copy-loss compared 5 / candidates 194.

같은 줄에 한정을 붙였으므로 `DESIGN.md` `wc -l` **607** 불변.

## 수정 목록 (10건)

### B2a — 인접 한정 (본문 2건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:477` — Media Tile | "No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted."는 세 번째 부류. Capture `:277`/`:279`의 "the controls below" 닫힘은 이 문장에 인접하지 않다. | 같은 줄에 Treating this surface as having no interactive-kind evidence for a §4.4 map … is a derived editorial implementation inference …; it is not Nintendo-authored or a separately published UI specification. |
| 2 | `DESIGN.md:491` — Featured Card | "No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted." 동형. `:279`는 212줄 위. | 같은 줄에 Treating this tile as having no interactive-kind confirmation for a §4.4 map … is a derived editorial implementation inference …; it is not Nintendo-authored or a separately published UI specification. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 40, `not Nintendo-authored` 40, `separately published UI specification` 40. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial implementation inference` P dest 2, mention). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 15, 17, 19, 21, 23, 29, 39, 52, 56, 64, 77, 94, 126, 153, 174, 176, 180, 196, 198, 206, 215, 225, 239, 248, 250, 257, 271, 279, 463, 477, 491, 512, 538, 545, 552, 556, 570.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL. 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. sibling 부재 단언은 실측과 불일치.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | Derived editorial inventory | 38 데이터 행(착수 시 159–196). Media Tile / Featured Card omit-kind 없음. | 문서 순서대로 2행 삽입 (191 Media Tile, 192 Featured Card). 헤더 40 / 40. 데이터 **159–198**. |
| 4 | Sibling verification file `:140` | “does not exist”. `find`는 파일을 연다. | 파일 실재 + 2026-06-17 playwright `getComputedStyle` 두 URL. sibling-only 샘플은 본문에 승격하지 않음(B1). 부재를 단언하지 않음(E2d). |
| 5 | Proof notes A5a | “no sibling `.verification.md`”. 바늘 분모가 sibling을 빠뜨림. | sibling 실재. 원본 인용 발행 카피 28 / 미생존 0 유지. sibling-only 라벨 미승격(B1). Gate compared 5 / candidates 194. |

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o \| wc -l`로 재실측했다. 본문 한정을 붙인 뒤 dest 표를 재실측했다(wave 40 lablup). 카피 dest는 같은 줄 부착이라 불변.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | F1 B2a scan | 본문/원장 **38**. Media Tile / Featured Card 없음. | **40** / **40** (159–198). 한정 줄에 477 / 491. |
| 7 | F2 Brand copy | “No sibling `.verification.md`”; provenance 218은 착수 시 범위 밖. | sibling **존재**. provenance A5a는 수정 후 **218**. Gate compared 5 / candidates 194. sibling-only DESIGN dest 0을 이름 없이 기록(E2d). |
| 8 | A5a hand sweep | sibling 없음 + `compared`를 가정문으로만. `Unsurived` 오탈. | sibling 실재. compared **5** / candidates **194**. 원본과 겹치는 sibling 명기 카피 DESIGN dest ≥1을 재실측해 적음. Unsurvived 0. `verdict: PASS`는 바늘 5개. |
| 9 | §4 Featured Card / Red Status Pill 행 | Kind+map omitted (C4, 491)만. 인접 B2a dest 없음. | 491 / 477 인접 완전형을 목적지로 병기. |
| 10 | §14 States 행 + §4 Primary CTA 행 | Media Tile / Featured Card C4만. | C4 + 인접 B2a (477 / 491). |

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 38개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다(v12 전제 주석).
- Principles 다섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음.
- Utility Pill `:347` / Carousel Arrow `:394` / Header `:438` 필드 노트 — `:279`가 그 비병합을 이름하는 how-to-read. omit-kind 재서술(477/491)과 달리 새 한정을 붙이지 않음.
- Red Status Pill `kind: non-interactive`는 Kind 필드이고 `:277`/`:279`가 이름함. 단독 omit 문장이 아님.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- B3 다섯 종류 게이트는 `DESIGN.md:198`에 전문이 있다(E2c). 곡선 값은 본문 0 / provenance 1 (verbatim keep, T2 관례). `120ms`/`220ms`/`360ms` DESIGN dest 1 each.
- YAML `use` 착지 16/16. 컴포넌트 필드가 대응 블록에 행으로 있다(아래 A1).
- `#ffffff` canvas / on-primary 분리는 Semantic `:94`/`:110`과 원장 Semantic 행이 이름한다(krafton형).
- 충돌 처리: YAML `0 24px` vs §4 `0px 24px`, shadow trailing `0px` vs 본문 무trailing, `family.cjk` 짧은 스택 vs §3 긴 스택 — 문서 전체 keep-both. 자리마다 다른 정책 없음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Nintendo Co., Ltd. (任天堂), "Log in" / "Learn more" / "Start shopping" / "See all news articles" / "Play" / "Search" / "Wish List" / "Cart" / "Nintendo Direct" / "Games on sale" / "Explore" / "Shop" / "Support" / "本体・グッ즈" / "ゲームソフト" / "トピックス" / "サポート" / "Search games, hardware, news, etc" / "Experience The World's Game like never before" / "Get up and move with friends and family" / "Trending topics" / "Pre-order now!" / "Available now!" / "Online services" / "New", YAML `use` 바이트, 원본 §12 원칙 · §7 Do/Don't · §10 보이스 샘플.
- **관측 기술** — `#e60012` `#484848` `#3c3c3c` 등 hex, unitless `1.35`/`1.40`/`2.00`/`1.00`, 28/21/16/18/14 type, 2/4/8/12/20/48/9999 radius, `0 24px` / 48px / 32px, `Primitive type` button/tab/input/card, Soft/Card shadow 문자열, Geologica Variable / CJK 스택.
- **편집적 해석·인과 판단** — 두 URL을 증거 도메인으로 읽기, 토큰 노트 register-split, visual-character/sacred-red, 지역 타입, near-shadowless, 공적 역사를 내러티브로, calm-digital-product, refuses/embraces, 과제 선정, 청중 그룹·개인 페르소나 거부, 특성 비병합, 원칙·Do/Don't, Semantic 역할 비병합, spacing/shape 키 분리, elevation Use, motion 철학·B3 게이트, 폰트 증거 class, type-role keep-both, favicon pointer, applicability·omit-kind·not-complete-coverage, 보이스 레지스터, locale pairing, Media Tile/Featured Card omit-kind.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 5 / candidates 194 (`compared < candidates`; 이관본 평균 4.4%와 같은 라틴 맹점). `verdict: PASS`는 바늘 5개에 대한 것. 손 대조 원본 인용 발행 카피: Log in DESIGN dest 6 · Learn more 8 · Start shopping 8 · See all news articles 6 · Play 20 · Search 12 · Wish List 5 · Cart 5 · Games on sale 3 · Explore 4 · Shop 11 · Support 5 · Search games, hardware, news, etc 3 · Experience The World's Game like never before 3 · Get up and move with friends and family 2 · Trending topics 3 · 本体・グッ즈 4 · ゲームソフト 4 · トピックス 4 · サポート 4 · Pre-order now! 5 · Available now! 2 · Online services 2. 눈에 띄는 라틴 발행 카피 손실은 없다. 워커 분모 28의 목록은 로그에 없어 재추출하지 않음.
- **B1 / sibling.** sibling 전용 `さがす` / `ストア` / `ログイン` / `マリオ` / `ゼルダの伝説` / `そのほかの本体` / `任天堂ホームページ` / `Nintendo Direct 6.9.2026` / `Previous page` / `Next page` / `Log in / Sign up` / `Nintendo - Official Site: Consoles, Games, News, and More` / `36px` / `font-size: 10px` / `simpleicons` / `document.title` / `h3` / `H2 panel` DESIGN dest **0**. 구조 분류 승격 없음. `getComputedStyle` / `playwright`는 원본 HTML 주석에도 있어 SRC 1 — 본문 dest 0.
- **D2a.** 삭제 행은 무식별(`§13 Personas — 3 fictional archetypes (name / age / city included in the source)`). 식별자 DESIGN/provenance/migration-log dest 0 (원본에만 있음). 동기 문구(`unintimidating` / `family-friendly reputation` / `new Switch owner` / `conversion pop-ups`) DESIGN dest 0. 소속 분류 재구성 없음. Audience는 원본 그룹 문자열("families, lifelong fans, new players" / "kids, parents, lifelong fans" / "children, parents, and adults who grew up with the brand"). 원형 라벨을 D2a로 지우지 않음. 처분 행에 이름을 열거하지 않음.
- **E2d.** 착수 시 provenance `:140` “does not exist”는 파일 부재 허위이지 자기나열 부재 단언은 아님. 수정 후 `does not exist` DESIGN 0 / provenance 0 / log 0. sibling-only 문자열을 「세 파일에 없다」고 이름하며 단언하지 않음.
- **A1 키 경로.** YAML `tokens.components` 8레코드의 type/bg/fg/radius/height/padding/font/use/active/shadow가 각 대응 블록에 **행으로** 있음. icook형 타 블록 hex만 있는 소실 없음. 값 복원 없음. `tokens.colors.*` 15키 · `tokens.spacing.*` 7 · `tokens.rounded.*` 6 · `tokens.shadow.soft`/`card` · `family.sans`/`cjk`/`mono` · type-role 8 경로가 Foundations/Typography 표·행에 있음. krds형 토큰명 열 삭제 없음.
- **`#ffffff` 귀속.** `tokens.colors.canvas`와 `tokens.colors.on-primary`는 두 키로 남고 Semantic `:110`이 같은 hex의 두 직업을 이름한다. Header band fill는 Canvas로 읽고 Nav Item Background가 아니라고 `:438`이 적는다.
- **충돌 처리.** YAML vs §4 표기(padding `0 24px`/`0px 24px`, font `18px / 600 Geologica`/`18px Geologica weight 600`, shadow trailing `0px`)는 전 문서 keep-both. Primary Deep/Warning/radius처럼 자리마다 다른 정책 없음.

AUDIT_DONE fixes=10

## 개정 — 의미 검토 FAIL 1 (2026-09-02)

대상: `docs/design-md-weight/migrated/nintendo/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 수 40=40 불변.

### 결함 1 — A1 / 항목 11 — Panel Heading YAML↔§3 Notes 병기 깨짐

원본 §3 Hierarchy Notes `:117`은 `Card / login panel heads`. YAML `tokens.typography.subheading.use`는 `"Card / panel head (H2)"`. Type roles `:230`이 YAML `use`만 들고 §3 Notes를 버렸다. Feature Headline·Caption은 YAML `use`와 §3 Notes를 병기하고 있었다.

Type roles Panel Heading Use 칸에 원본 Notes를 병기: YAML `subheading` use: `"Card / panel head (H2)"`. §3: `Card / login panel heads`. 한정 신설 없음 — 원본이 세운 Notes 인용. provenance claim ledger subheading 행이 keep-both를 이름(E1, 행 수 40 불변).

판정: **소실 복원**. sibling `.verification.md` dest 0. 융합 문자열 없음.

`node scripts/check-limiter-ledger.mjs nintendo` → 본문 **40** / 원장 **40** (159–198) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs nintendo` → use 16/16, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand nintendo --gate-only` → PASS, `problems: []`, copy-loss compared 5 / candidates 194.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용; 이 절 기록 전 DESIGN/P/L):

| 문자열 | SRC | SIB | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `Card / login panel heads` | 1 | 0 | **1** | 1 | 4 |
| `Card / panel head (H2)` | 1 | 0 | **1** | 1 | 4 |
| `Log in` | 3 | — | **6** | 1 | 2 |
| `Section/feature titles, US` | 1 | 0 | **1** | 0 | 0 |
| `Search field, small labels` | 1 | 0 | **1** | 0 | 0 |

`derived editorial implementation inference` DESIGN dest **40** 불변. YAML `use` `"Card / panel head (H2)"` DESIGN dest **1** 불변. `wc -l` DESIGN **607** 불변.

### 갱신한 dest 행 (migration-log)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML tokens | `Card / login panel heads` DESIGN / P | 0 / 0 | **1** / **1** |
| YAML tokens | `Card / panel head (H2)` DESIGN | 1 | **1** |
| §3 Typography Rules | `Card / login panel heads` DESIGN / P | 0 / 0 | **1** / **1** |
| F2 | `Card / login panel heads` DESIGN / P | 없음 | **1** / **1** |
| Unique-phrase | Restored unique phrases | 0 | **1** |

FIX_DONE nintendo fixed=1 logdest=5
