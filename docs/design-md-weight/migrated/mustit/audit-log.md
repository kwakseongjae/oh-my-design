# MUSTIT 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/mustit/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/mustit/DESIGN.md`
검증 sibling: `web/references/mustit/.verification.md` — `find web/references/mustit -type f`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용. 셸 `no matches`/`No such file`은 0이 아니라 미측정으로 두고, 0을 적기 전에 `find`로 파일 존재를 확인함.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MUSTIT-authored or a separately published UI specification`을 요구한다. 착수 시 기존 24건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 24 / 원장 24. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Motion `:144` Fast keep-both, Font evidence 상류·라이선스, Assets 사진 대체 거부, Button/Tab/Badge/Chip/Search keep-apart 재서술이 세 번째 부류인데 인접 완전형이 없었다. 로그는 exact `tokens.source: prose-derived` DESIGN dest 1을 주장했으나 실측 dest 0(fitpet형 2차 목적지). `탐험하세요` dest 2 주장 / 실측 dest 3.

`node scripts/check-limiter-ledger.mjs mustit` → 본문 31 / 원장 31 (120–150) 1:1 OK.
`node scripts/check-yaml-use-landing.mjs mustit` → use 19/19 OK.

Destination SHA `c03761e0fc27219000859e643c243073b65e7410723b80131d7d6fee5cace180` (DESIGN). 줄 수 DESIGN 468 불변(한정을 같은 줄에 붙임). 단어 5,829 → 6,070.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 8건: 신설 7 + 접어넣기 1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:144` — Motion Fast keep-both | Do-list `transition: all 0.2s ease`를 Fast `200ms`/`ease`로 읽고 Fast 용례 줄을 대체하지 않는다는 서술은 세 번째 부류. `:132` 한정은 motion contract만. | 같은 줄에 완전형 신설. |
| 2 | `DESIGN.md:170` — Font evidence | `:167–168` 전용 패밀리 부재 / Pretendard 상류 페이스 / 브랜드 자산 아님 / 라이선스 미수립은 세 번째 부류. 기존 한정은 resolution table / sans·mono / SD·Archivo off `family.sans`만. | 기존 완전형에 그 네 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:205` — Assets photography | 상품 사진을 발명 장식으로 대체하지 말라는 거부는 세 번째 부류. `:203` 한정은 favicon identity만. | 같은 불릿에 완전형 신설. `Do not round product image containers`는 원본 Don't라 그대로. |
| 4 | `DESIGN.md:265` — Button keep-apart | 4px=`tokens.rounded.md` / padding 16≠spacing 16 / `#333333`≠brand는 세 번째 부류. Capture `:223`은 applicability만. | 같은 줄에 완전형 신설. |
| 5 | `DESIGN.md:290` — Tab keep-apart | Tab `16px`≠spacing 16 / `#aaaaaa`≠YAML color key는 세 번째 부류. | 같은 줄에 완전형 신설. |
| 6 | `DESIGN.md:316` — Badge Outlet pairing | 로컬 2px를 `tokens.rounded.sm`에 붙이는 것은 세 번째 부류. Don't 본문은 원본. | 같은 줄에 완전형 신설. |
| 7 | `DESIGN.md:345` — Filter Chip keep-apart | Chip `17px`≠`full: 9999`/md 4 / counter `9px`≠YAML rounded는 세 번째 부류. | 같은 줄에 완전형 신설. |
| 8 | `DESIGN.md:372` — Search keep-apart | placeholder 양쪽 유지 / padding 12≠spacing 12 / §14 disabled를 search에 복사하지 않음은 세 번째 부류. `:223`이 form-field 거부를 이름하나 인접하지 않음. | 같은 줄에 완전형 신설. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 31, `not MUSTIT-authored` 31, `separately published UI specification` 31. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다(`derived editorial implementation inference` P dest 1 at 126, mention). `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 53, 64, 78, 103, 114, 118, 132, 144, 153, 170, 179, 183, 203, 205, 223, 265, 290, 316, 345, 372, 401, 406, 425, 463.

### E1 — provenance derived 범위 (2건)

좁은 쪽 FAIL(fastcampus형). 본문 24=원장 24였으나 본문이 이름하지 않은 해석이 남아 있었다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Derived editorial inventory | 24행(120–143). 본문이 31이 되면서 1:1이 깨짐. | 표 31데이터행(120–150). 신설 7행: Motion Fast `:144` · Assets photography `:205` · Button `:265` · Tab `:290` · Badge Outlet `:316` · Filter Chip `:345` · Search `:372`. |
| 10 | Font evidence 행 | resolution table / sans·mono / SD·Archivo만. 본문 `:170`이 이제 전용 패밀리 부재·상류 페이스·브랜드 자산 아님·라이선스 미수립도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **31 = 31** (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (16건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 수정 후 dest가 바뀐 바늘은 재실측했다(wave 40 lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML metadata 행 | Exact `tokens.source: prose-derived` DESIGN dest **0** (문장은 `YAML tokens.source is prose-derived`). 로그 dest 1은 fitpet형 2차 목적지. P colon-form dest 2 at 63/158, 값 `prose-derived` dest 3 at 19/63/158. | DESIGN dest **0**; 값 dual dest 1+3; colon-form P dest **2**. |
| 12 | YAML metadata 행 | `tokens.extracted` P dest 2 at 20/32. 실측 dest **3** at 20/30/63. `components_harvested` 21/63/148 → **21/63/155**. | dest를 실측 줄로. |
| 13 | YAML typography 행 | `family.sans` dest 2 at 166/172 (172는 `### Family`, sans 0). Pretendard dest 20+. | sans dest **2** at 166/174. Pretendard dest **31**. |
| 14 | YAML type-role 행 | Fine `1.6` dest 2. 실측 줄높이 dest **1** at 197. 다른 1회는 cubic-bezier `1.64` at 140. | dest **1** at 197. `1.64`는 줄높이 dest가 아님을 적음. |
| 15 | YAML spacing/shape 행 | Exact `tokens.rounded.full: 9999` dest 3 at 112/114/345. 실측 dest **2** at 114/345. shadow/box-shadow 줄 122/390·123. | colon-step dest **2**; `tokens.rounded.full` dest 3 병기. level1 dest **2** at 123/391. level2 dest **1** at 124. box-shadow dest 2 at 123/391 · dest 1 at 124. |
| 16 | YAML components 행 | `badge` at 304/320/333 · `input` at 358 · tab active at 287 · 범위 227–381. | `Primitive type: badge` dest 3 at 305/321/334. `input` dest 1 at 360. tab active dest 1 at **288**. 범위 **227–392**. |
| 17 | YAML colors / Footer 행 | Shopping `#333333` at 232. Conflict 재서술 at 467. | `#333333` dest 7 at 35/78/80/97/233/253/265. 재서술은 **465**. |
| 18 | §7 Do 행 | `transition: all 0.2s ease` dest 5 at 59/132/144/270/470. | dest **5** at 59/132/144/270/**468**. |
| 19 | §10 행 | `탐험하세요` dest 2. 실측 dest **3** at 410/420/427 (illustrative 샘플이 3회째). | dest **3**. |
| 20 | §11 행 | `1,300+` dest 2. 실측 dest **3** at 9/13×2. | dest **3**. 3.7 million dest 2 at 13×2는 유지. |
| 21 | §12 행 | inventory 120–143 (24 data rows). | **120–150** (31 data rows). |
| 22 | §13 행 | disposition P 104. | **108**. |
| 23 | §14 행 | no shimmer dest 2 at 215/468. `no shimmer animation measured` dest **1** at 215. title-case dest **1** at 466. 468은 Hover 불릿. | dest를 대소문자별로 나눔. |
| 24 | §14 applicability 행 | `kind: non-interactive` DESIGN dest 0. C4 at 391. | `Kind: non-interactive` dest **2** at 306/322. C4 at **392**. |
| 25 | §15 / §9 행 | computed dest 2 at 153/470. Product card 385–392. | computed dest **2** at 153/**468**. Product card **384–392**. |
| 26 | A5a 표 + Deviations | tab active dest 1 at 287. 단어 5,829. B2a 24=24. | tab active dest 1 at **288**. 단어 **6,070**. B2a **31=31**. F2 dest 재실측 주석. |

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 24개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- B3 다섯 종류 게이트는 `DESIGN.md:153`에 전문이 있다(E2c).
- YAML `use` 착지 19/19. 컴포넌트 필드가 대응 블록에 행으로 있다(아래 A1).
- `#ffffff` canvas / on-primary 분리는 Semantic `:78`과 원장 행 129에 이미 있다(krafton형, E1 범위는 기존 행이 담당).

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared 9 / candidates 157 (5.7%, 전수 평균 4.4%보다 약간 높고 50% 미만). `verdict: PASS`는 대조한 바늘 손실 0이지 카피 보존이 아니다. 손 대조 발행 라벨: MUSTIT / 머스트잇 / Smart Luxury — Make the Best Discovery / M SCOPE / 발견하세요 / 탐험하세요 / 세상 모든 럭셔리 취향을 탐험하세요. / 정품 200% 보장 / 1,300개 해외명품 브랜드 / 검색 결과가 없어요 / 품절 / Pretendard / SD Gothic Neo / Archivo Expanded — DESIGN dest ≥1. `latin-copy-audit.mjs` lost 4 = `1px solid #3083e4` / `1px solid #333333` / `1px solid #cccccc` / `1px solid #dddddd`. 본문은 `1px solid \`#hex\``로 쓰고 대응 Border 행은 있다. 발행 카피 손실 아님. 복원하지 않음.
- **A1 키 경로.** YAML `tokens.components` 9레코드의 각 필드가 대응 블록에 행으로 있다. `button-primary` type/bg/fg/radius/height/padding/font/use · `button-confirm` type/bg/fg/border/radius/height/font/use · `button-outline` type/bg/fg/border/radius/height/font/use · `button-disabled` type/bg/fg/border/radius/use · `tab` type/fg/font/active/use · `badge-outlet` type/bg/fg/radius/height/padding/font/use · `badge-info` type/fg/border/radius/height/font/use · `chip` type/border/radius/height/active/use · `input-search` type/bg/fg/radius/height/padding/font/use. `type: button`은 네 레코드 공통이라 Button 절 머리에 한 줄. icook형 타 블록 hex 차용으로 가린 필드 소실 없음. YAML에 없는 padding을 confirm/disabled에 발명하지 않음. 원본 §15 곡선·duration은 본문 표에 값으로 남아 역할만 남은 T2 관례가 아니다(kkday와 다름).
- **B1.** sibling `web/references/mustit/.verification.md` 경로 직접. sibling 전용 `.btn_black` / `border-radius: 20px` / `border-radius: 45px` / `#505050` / `#646464` / `#a0a0a0` / `#c8c8c8` / `opacity .15s linear` / `Pretendard-Bold.subset.woff2` / `17.7 kB` / `No designs found for 'mustit'` / `도산대로` / `(주)머스트잇` / `Gangnam` / `redirects to` / `inline CSS` DESIGN dest 0. `H2`/`H3`/`portal H2` sibling 0 / 원본 0 / 산출 0. 구조 분류 본문 승격 없음.
- **D2a.** 삭제 처분 행은 원형 라벨(`명품 입문자` / `셀럽 팔로워` / `컬렉터` / `선물 구매자`)을 로그에 적고(게이트 copy-loss), 이름·나이·도시·전기는 적지 않는다. 식별자·동기(`K-pop` / `best-seller` / `gift guide` / `express delivery` / `influencer` / `Price-sensitive` / `connoisseur`)·소속 분류 DESIGN dest 0 / P dest 0. Primary tasks는 그리드·검색·바텀바 표면이지 gitlab형 동기 잔존이 아니다. Audience는 원본 그룹(`millions of monthly shoppers` / `multi-sided market with seller tools`)만. hubspot형 원본에 없는 소속 신조어 없음.
- **E2d.** 부재 단언은 「DESIGN.md dest 0」로 분모를 DESIGN에 한정. 그 행이 문자열을 담아도 세 파일 부재를 주장하지 않음. furiosaai형 자기부정 없음. `도산대로`는 로그의 DESIGN dest 0 측정이며 P dest 0 — provenance는 주소를 재수록하지 않고 “parent-company legal name and HQ address”로만 가리킨다.
- **같은 hex 역할 분리.** `#ffffff`는 canvas와 on-primary. `#333`/`#333333`은 shopping CTA이지 brand navy가 아니다. `#D00000`은 catalog `primary_color`와 `tokens.colors.primary` 두 표기. 분리는 Semantic B2a와 원장에 이미 있다. 충돌 처리는 문서 전체 keep-both로 일관(krds형 자리마다 다른 정책 없음).

AUDIT_DONE fixes=26
