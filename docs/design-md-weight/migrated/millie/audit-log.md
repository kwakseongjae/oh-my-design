# millie 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/millie/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/millie/DESIGN.md`
검증 sibling: `web/references/millie/.verification.md` — `find`로 경로 직접 확인. EXISTS. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Millie-authored or a separately published UI specification`을 요구한다. 기존 완전형은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 21 / 원장 21 (185–205). 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Spacing `:90`의 isolated measurements / no-`tokens.spacing`-scale은 세 번째 부류인데 인접 한정이 없었다. Hero slide `:246` · skeleton `:258` · benefit card `:271`의 C4 보류와 benefit/campaign route-local 읽기는 Capture `:167`이 이름하는 절차의 적용인데 다른 `###` 아래라 인접하지 않았다. Semantic `:74`는 ink≠utility fill만 이름하고 compact-home-utility fill ≠ YAML color key와 YAML token note-as-facts를 빠뜨렸다. Family `:133`은 sole-token/unresolved-merge만 이름하고 unavailable-type 치환 거부를 빠뜨렸다.

문장 분류: 브랜드 발행 사실(밀리의서재·2016·240,000·기념/B2B 카피·YAML 값) / 관측 기술(hex·px·캡처 셀렉터·FontFaceSet) / 편집적 해석·인과 판단(비병합, 과제 선정, C4 보류, route-local, 승격 게이트). 세 번째 부류만 수정 대상.

선행 D1 게이트 정정(`rather than as a divider token for every surface` DESIGN dest **0**)은 유지. 이번 세션이 만든 수정이 아니다.

## 수정 목록 (25건)

### B2a — 인접 한정 (본문 7건, 완전형 사이트 +5)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:74` — Semantic color | compact-home-utility fill ≠ YAML color key, YAML token note를 사실로 유지하는 것은 세 번째 부류. 기존 한정은 경로 병기·canvas/ink 비병합·`#FEF08C`·이전 팔레트 거부만. | 기존 완전형에 그 두 읽기를 접어 넣음. hex를 다시 쓰지 않음. 발생 수 +0. |
| 2 | `DESIGN.md:90` — Spacing | isolated measurements stay on the surfaces that established them, supplying no `tokens.spacing` keys는 세 번째 부류. 인접 한정 없음. | 같은 줄에 완전형 신설. 발생 수 +1 사이트. |
| 3 | `DESIGN.md:133` — Family | unavailable/unobserved brand type를 그 가족으로 치환하지 않는 것은 세 번째 부류. 기존 한정은 sole-token과 unresolved 비병합만. | 기존 완전형에 치환 거부를 `that family`로 접어 넣음 (`Pretendard Variable` dest 18 불변). 발생 수 +0. |
| 4 | `DESIGN.md:246` — Home hero slide | C4 보류(so kind and a map are withheld)는 세 번째 부류. Capture `:167`은 다른 `###`. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:258` — Home skeleton card | 동형 C4 보류. | 같은 줄에 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:271` — B2B benefit card | C4 보류 + route-local ≠ consumer/app card는 세 번째 부류. 원본 benefit card에는 route-local 문장이 없다(캠페인에만 있음). | 같은 줄에 완전형 신설(둘을 한 한정으로). 발생 수 +1. |
| 7 | `DESIGN.md:285` — B2B campaign action | route-local ≠ consumer/app button은 원본 문장의 편집 읽기. 인접 한정 없음. | 같은 줄에 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` **26**, `not Millie-authored` **26**, `separately published UI specification` **26**. 완전형 줄 26. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다 (`derived editorial implementation inference` P dest **0**; `not Millie-authored` P dest **1** / Proof notes — mention). `migration-log.md` mention dest **2 / 4 / 4**는 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 51, 60, 74, **90**, 101, 105, 111, 119, 133, 137, 154, 167, **246**, **258**, **271**, **285**, 304, 309, 349.

`node scripts/check-limiter-ledger.mjs millie` → 본문 **26** / 원장 **26** (185–210) 1:1 OK.

줄 수 DESIGN `wc -l` **358** 불변(한정을 기존 줄에 접음).

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Distinctive traits 행 | Grouping만. 본문 `:32`는 restatement + readings inside them도 이름한다. | 그 읽기를 행에 추가. |
| 9 | Semantic 행 | canvas/ink 비병합·`#FEF08C`·이전 팔레트만. | compact-home-utility fill ≠ YAML color key · YAML token note-as-facts를 추가. |
| 10 | Family 행 | sole-token · unresolved 비병합만. | unavailable-type 치환 거부를 추가. |
| 11 | Spacing 행 | 없음. 본문 `:90` 신설. | 행 신설. |
| 12 | Home hero slide 행 | 없음. 본문 `:246` 신설. | 행 신설. |
| 13 | Home skeleton card 행 | 없음. 본문 `:258` 신설. | 행 신설. |
| 14 | B2B benefit card 행 | 없음. 본문 `:271` 신설. | 행 신설 (C4 + route-local). |
| 15 | B2B campaign action 행 | 없음. 본문 `:285` 신설. | 행 신설. |

헤더 / 데이터 행 **21 → 26**. inventory 185–210.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -oF -- | wc -l`로 확인했다. 본문 한정 수정 후 A5a·F2 dest 표를 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 16 | 헤더 / B2a / Gate / Deviations | 21=21, 원장 185–205. | **26=26**, 원장 **185–210**. |
| 17 | YAML identity 행 | `#242424` 줄 6개(78의 ×2 누락). 밀리의서재 P 11/174(occ **3**). homepage를 9만. | `#242424` DESIGN dest **7** at 9/11/34/53/74/78×2 · P dest **5**. 밀리의서재 DESIGN dest **1** / P dest **3**. `https://www.millie.co.kr` DESIGN dest **5** at 9×3/21/23. |
| 18 | YAML `live-extract` / `components_harvested` | P dest 20/210 · 22/164/211. 원장 5행 추가로 줄이 밀림. | `live-extract` P dest **2** at **20/215**. `components_harvested` P dest **3** at **22/164/216**. DESIGN dest 0 / 1 불변. |
| 19 | YAML `tokens.colors` / A4 | `tokens.colors.ink`를 78만. `#FFFFFF` dest 미기재. | ink dest **2** at 74/78. canvas dest **2** at 74/79. `#FFFFFF` DESIGN dest **7** at 74×3/79/174/219/264 (canvas ≠ utility text ≠ pagination text ≠ benefit-card fill). |
| 20 | §2 Color 행 | `rgba(0,0,0,0.3)` 84/196/218 — **74 누락**(fitpet형 2차 목적지). `#FEF08C`/`#333333`/`#1B6DDA`/`#A451F7`도 74 누락. | rgba DESIGN dest **4** at 74/84/196/218. `#FEF08C` dest **3** at 74/84/277. `#333333` dest **3** at 74/84/173. `#1B6DDA`/`#A451F7` dest **3** each at 74/86/351. |
| 21 | Footer 행 | Freshness 35–43 · Tier 1 67–73 · Tier 2 77–78 · Conflicts 45. | Freshness **30–41** (표 34–39). Tier 1 **64–70**. Tier 2 **74–75**. Conflicts unresolved: none — **41** (재수록 175). |
| 22 | §5 행 | `32px-high` 계수 없음. `tokens.spacing` dest 1. | `32px-high` dest **2** at 300/304. `tokens.spacing` DESIGN dest **2** at 90×2 / P dest **1** at 195 (E2a). `1392px × 400px` dest **3** 유지. |
| 23 | §11 행 | 240,000 dest 1 · May 2026 dest 1. 실측 본문 13×2. | 2016 / 240,000 / May 2026 DESIGN dest **2** each at 13×2. P dest 1 each (E2a). |
| 24 | §4 / §13 행 | C4·route-local 한정 dest 없음. Disposition `provenance.md` 168. | C4 dest 1 each at 246/258/271. Campaign 285. Disposition **172**. 그룹 라벨 DESIGN dest **0** / P dest **0** 유지(로그 명명은 copy-loss 처분). |
| 25 | Family / Deviations | Pretendard dest 18 줄 목록 없음. SIL dest 3 줄 없음. mention dest 2/4/3. 단어 5,065. SHA gate-fix만. | Pretendard dest **18** (133×2). SIL dest **3** at 9/124/152. mention dest **2 / 4 / 4**. `wc -w` **5301**. Auditor DESIGN SHA `6799dc091a4e28e12099e6c13701515950f06bd1a382434eeb4f96da5bc976f4`. Auditor provenance SHA `eb2950b5abdcd4a7225f4eab689675bdca56f7cd254a10a43bbffdabae079a5b`. |

E2c: B3 전문 `DESIGN.md` **1회** at 111. “These 4 items are a derived editorial…” dest 1 at 42. 준수 주장 유지.

## A1 — 키 경로

원본 YAML `tokens.components: {}` / `components_harvested: false`. 컴포넌트 필드 소실 없음 — 7개 레코드 모두 `Primitive type: not in the token set` dest **7** at 172/195/217/240/251/263/276. icook형 타 블록 hex 차용으로 가린 필드 소실 없음. 복원 없음.

토큰 키는 대응 블록 **행**으로 대조(값 grep으로 대체하지 않음):

| 경로 | 대응 행 |
|---|---|
| `tokens.colors.{ink,canvas,surface-subtle,muted,divider}` | Semantic color 불릿 78–82, 경로 문자열이 그 행에 있음 |
| `tokens.typography.family.sans` | Family 132 |
| `tokens.typography.body.{size,weight,lineHeight,use}` | Type roles 표 Body 행 141 (YAML `14` / 400 / `1.7143` / use verbatim) + 경로 목록 146 |
| `tokens.typography.heading-xl.{size,weight,lineHeight,use}` | Large B2B heading 행 142 |
| `tokens.typography.heading.{size,weight,lineHeight,use}` | B2B section heading 행 143 |
| `tokens.typography.utility.{size,weight,lineHeight,use}` | Compact home utility 행 144. `12` ≠ 12px gap ≠ `0px 12px` padding |
| `tokens.rounded.utility-button` `4` | Shape 표 98 + utility button Radius 행 175. campaign `4px`와 합치지 않음 |
| `tokens.rounded.carousel-pagination` `100` | Shape 표 99 + play/pagination Radius 197/220 |

원본 §3 표의 열(Role / Size / Weight / Line height / Surface provenance)은 산출 표에 유지. 토큰명 열을 삭제한 krds형이 아니다.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 절 구조. 원본 미수정.
- 기존 21개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- C4 표의 역할 사유는 Capture `:167`이 “every applicability verdict, the reason given for either”를 이름하고, 네 interactive 블록이 그 절 바로 아래라 Principles 항목과 동형으로 본다. 다른 `###`의 보류 문장(246/258/271)만 인접 한정을 붙였다.
- 원본에 없는 motion 스케일을 합성하지 않음(wave 39 kmong). `:109`의 “No Millie motion token is specified”는 원본 문장.
- `#FFFFFF` canvas / utility text / pagination text 분리는 `:74`와 원장 Semantic 행에 있다. benefit-card fill `#FFFFFF`는 원본 §2 Canvas의 “B2B list-card surface” 역할이라 새 직업이 아니다.
- E2d: 「세 파일 어디에도 없다」 단언 없음. sibling-only 목록은 “kept here / not promoted into the portable body”이며 분모는 portable body. `No name, age, or city was present to drop`는 식별자를 열거하지 않음.
- D2a: 처분 행은 절·인원·필드 종류. 원형 라벨 3종은 로그 삭제 행에만 명명(게이트 copy-loss). 이름·나이·도시 없음. 동기 `workplace welfare` / `signed-in reading workflow` / `reading-related information` DESIGN dest **0** / P dest **0**. 소속 분류를 Audience에 새 표현으로 재구성하지 않음. `employer reading benefits`는 원본 §1 문장(SRC dest 1).
- B1: sibling 전용 `2026-07-12T16:32:58.946Z` · coverage score 64 · 26 component variants · `observedStates: 0` · 127 high-confidence · pagination `16px/400/24px` · campaign `16px/400/56px` · `rgb(...)` DESIGN dest **0**. `portal H2` DESIGN dest **0**. 본문 `h2` specimen은 원본 §3 표.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **1** / candidates **88**. `verdict: PASS`는 대조한 바늘 1개에 손실이 없다는 뜻이다. 손 대조 발행 바늘 14/14 DESIGN 생존(밀리의서재, 기념/B2B 카피, YAML `use` 4종, Pretendard Variable, SIL Open Font License 1.1). 라틴 카피 손실로 볼 발행 문자열은 없음.
- **latin-copy-audit** lost **5**: sibling 축약 padding `0 12px` / `16 24px` / `4 10px` / `45 24 30px`(원본·산출 본문은 `0px 12px` 등으로 생존) · YAML 메타 `, captured:`. 발행 카피가 아니다. 복원하지 않음.
- 원본 §1의 편집 수식어 `quiet and typographic`는 본문 `:11` 한정에 dest **1**로 남아 있고, 서술 절의 콜론 도입에서는 빠졌다. 브랜드 발행 카피가 아니라 원본 편집 읽기라 A5 바늘이 아니다. 한정에 이름이 있어 되살리지 않음.

`node test-v2/tools/migrate-reference.mjs --brand millie --gate-only` → PASS, `problems: []`.
`node scripts/check-yaml-use-landing.mjs millie` → use 4/4 미착지 0.

AUDIT_DONE fixes=25
