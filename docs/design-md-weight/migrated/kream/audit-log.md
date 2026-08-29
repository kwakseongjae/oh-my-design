# kream 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kream/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kream/DESIGN.md`
검증 sibling: `web/references/kream/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KREAM-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Semantic `:72`는 두 YAML `#ffffff` 키만 이름하고 outlined-filter 배경 `#ffffff`를 빠뜨렸다. Type roles `:137`은 search `24` off `xl: 24`만 이름하고 body `16` not-a-spacing-step(`:147`)을 빠뜨렸다. Capture `:175`는 applicability를 이름하고 `:173` class-names/static-samples 경계를 빠뜨렸다. Font evidence·Family 한정이 이름하는 판단이 원장 행 15/16에 없었다.

문장 분류: 브랜드 발행 사실(FAQ 거래 단계·세 공식 라벨·YAML 값·§표 수치) / 관측 기술(hex·selector·FontFace 1,026·92 subset) / 편집적 해석·인과 판단(키 비병합, keep-both, 분위기, 승격 게이트, 페르소나 자리 읽기). 세 번째 부류만 수정 대상.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 3건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:72` — Semantic color | outlined-filter 배경 `#ffffff`를 canvas/on-primary 두 YAML 키와 가르는 읽기는 세 번째 부류. 기존 한정은 두 YAML `#ffffff` 키와 `#f4f4f4` §4 필드만. | 기존 완전형에 outlined-filter 배경 `#ffffff` = §4 field, off the two YAML `#ffffff` keys를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:137` — Type roles | `:147` `tokens.typography.body.size` `16` is not a spacing step은 세 번째 부류. 기존 한정은 search `24` off `xl: 24`만. | 기존 완전형에 body size `16` off a spacing step을 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:175` — Capture | `:173` "not claimed from class names or static samples"는 세 번째 부류. `:175`는 applicability / kind / not-complete만. | 기존 완전형에 class-names/static-samples 경계를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not KREAM-authored` 22, `separately published UI specification` 22. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention 2 / 3은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 50, 59, 72, 88, 102, 106, 110, 125, 133, 137, 155, 175, 332, 351, 385.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | Distinctive 행 6 | Groupings and readings만. 본문 `:32`는 restatement 분류도 이름한다. | restatement 분류를 행에 추가. |
| 5 | Semantic 행 10 | 두 YAML `#ffffff` 키만. 본문 `:72`가 이제 outlined-filter `#ffffff`도 이름한다. | pairing + outlined-filter §4 field를 행에 추가. |
| 6 | Spacing 행 11 | unmerged만. 본문 `:88`은 not-rewritten-as-a-grid도 이름한다. | 그 판단을 행에 추가. |
| 7 | Shape 행 12 | pill 30 off height만. 본문 `:102`는 다섯 키 · component heights off rounded map · neither-as-replacement도 이름한다. | 그 판단을 행에 추가. |
| 8 | Font evidence 행 15 | type specimen만. 본문 `:125`는 official-licence row not independently establishing product use도 이름한다. | 그 판단을 행에 추가. |
| 9 | Family 행 16 | sole-family / substitutes만. 본문 `:133`은 do-not-replace-unavailable도 이름한다. | 그 판단을 행에 추가. |
| 10 | Type roles 행 17 | 1.21 / use / recovery / search 24만. 본문 `:137`이 이제 pairing과 body `16`도 이름한다. | 그 판단을 행에 추가. |
| 11 | Capture 행 19 | kind/applicability / not-complete만. 본문 `:175`는 reasons · class-names · Focus-vs-focus-visible · C1 · role-not-primitive · Core §4.4도 이름한다. | 본문이 이름하는 판단을 행에 맞춤. |

헤더 / 데이터 행 **22 = 22** (E1 1:1). 데이터 175–196.

### E2 / E2a / E2c — 로그 목적지 (11건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 줄 수가 아니라 출현 수.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 12 | YAML identity 행 | trailing-slash `https://kream.co.kr/` DESIGN dest 9 at 9×3. 9에 5회(home/shop/search/faq/auth). P dest at 43–47/51/55–59/115 — 117·134 `_nuxt` 접두와 115×3 누락. | DESIGN dest **9** at 9×5/13×2/21/22. P dest **16** at 43–47/51/55–59/115×3/117/134. |
| 13 | YAML identity 행 | `#000000` DESIGN dest 7 (줄 수). 9·72에 각 2회. P dest 4 at 14/23/175/184. 184에 2회. | DESIGN dest **9**. P dest **5** at 14/23/175/184×2. |
| 14 | YAML identity 행 | favicon URL dual만. exact `logo.type: favicon`은 DESIGN 151, P 표는 logo.type / favicon at 15. | exact colon form DESIGN dest **1** at 151 / P dest **0**. 표 필드는 15. |
| 15 | YAML metadata 행 | `tokens.components: {}` DESIGN dest 1 at 177만. P 70에도 1. | DESIGN dest **1** at 177 / P dest **1** at 70 (E2a). |
| 16 | YAML colors 행 | `#ffffff` / `#222222` 출현 수 없음. 한정 확장 후 `#ffffff` DESIGN dest 9. | `#ffffff` dest **9** at 11/36/72×4/74/80/207. `#222222` dest **14**. outlined-filter `#ffffff` keep-apart를 72/207에 적음. |
| 17 | YAML family 행 | `HelveticaNeue` dest 3 at 122/131/153. 122·153에 Bold 접두 포함 각 2회. | dest **5** at 122×2/131/153×2. |
| 18 | YAML family 행 | 1,026 uses dest 1 at 120만. P 117/137에도. 92 KREAM-hosted dest 2만. P 117에도. | 1,026 DESIGN dest **1** / P dest **2**. 92 DESIGN dest **2** / P dest **1** (E2a). |
| 19 | YAML rounded 행 | `tokens.rounded.search-filter-pill: 30` dest at 92/100/102. 정확 문자열은 102만. | exact dest **1** at 102. `search-filter-pill: 30` dest **2** at 92/102. path dest **3** at 100/102/191. |
| 20 | YAML elevation 행 | `box-shadow: none` at 106 (출현 수 없음). 106에 2회. | dest **2** at 106×2. |
| 21 | YAML type-roles / §2 / §14 행 | body `16` off spacing, outlined-filter `#ffffff`, class-names 경계를 로그가 이름하지 않음. | type-roles dest at 137/147. §2 한정 72. §14 한정 175가 `:173`을 덮는다고 적음. |
| 22 | Deviations / Pass | `wc -w` 5,216. worker SHA만. 22=22는 유지하되 착수 좁은 목록. | **5,260**. Auditor SHA `edf859a629e102219ea6673ee6dee190e5cffdc99d41288b32444cd250e38bfc`. F1/F2 재실측 dest를 Pass에 적음. |

Destination SHA `30dbd0a7ccfb952d7e44a68b87fc8a402f6820afb935c2401d4bb3cef05ca90b` → `edf859a629e102219ea6673ee6dee190e5cffdc99d41288b32444cd250e38bfc` (한정 확장 후). 줄 수 DESIGN `wc -l` **394** 불변. provenance 205 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 110 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:42` dest 1. 준수 주장 유지.
- E2d: sibling-only 머리(`provenance.md:123`)는 원장에 남기고 portable fact가 아니라고 적는다. 「이 파일에 없다」고 단언하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md:163`)은 절·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다. 원본 §13 자체에 식별 페르소나가 없다.
- `tokens.source: live-extract` DESIGN dest 0 / `components_harvested` DESIGN dest 0 / `loading | applicable` dest 0 / `error | applicable` dest 1 at 277 은 정정 후 로그와 맞다.
- §9 삭제 값의 재수록 확인은 `provenance.md:167`. 본문에 해당 값이 있다.
- 원본에 모션 규칙이 없다. Foundations Motion의 합성 거부 문장은 위반이 아니라 모범(웨이브 39 kmong). 합성하지 않음.
- YAML `use` 4종과 §3 29px는 본문에 인용된 채 역할이 남는다. T2 관례 — 값 소실로 읽지 않음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 3 / candidates 91. `verdict: PASS`는 대조한 것 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨: KREAM / Pretendard Variable / HelveticaNeue / NotoSansCJKkr / Roboto / “즉시 구매 혹은 구매 입찰” dest 2 / “검수를 진행” dest 1 / “당일 출고” dest 1 / SIL Open Font License 1.1 dest 2. latin-copy-audit 1 lost (`", captured:"`) / 23 candidates — YAML 메타, 발행 카피 0. 발행 라틴 손실은 안 보인다. 고치지 않음.
- **B1.** sibling 전용 `coverage score 81` / `playwright_cli` / `rgb(34, 34, 34)` / `kream.co.kr/_nuxt/` / `NotoSansCJKkr-Light` / `home::[data-omd-capture="15"]` / `Noto Sans KR` / `Conflict Matrix` DESIGN dest 0. sibling h3·섹션 표제 분류 침투 없음. `commerce-home` 등 YAML kind 문자열도 본문 dest 0(원장은 표에만).
- **D2a.** 원본 §13은 미수집 + placeholder 2. 식별자 DESIGN/P dest 0. 동기·소속 신조어(`Solutions Partner`) dest 0. Audience는 원본 §1 그룹 members/sellers만. Primary tasks는 표면·공식 라벨이지 페르소나 동기가 아님. `motivation` DESIGN dest 1 at 28은 D2a 필드 종류 한정 문구. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN을 분모로 두고 로그 자신을 넣지 않는다.
- **A1 키 경로.** YAML `tokens.components` 는 `{}`. 복원할 컴포넌트 필드 없음. colors 7키 / typography family+4 roles / spacing 6 / rounded 5 / shadow.none 이 각 절의 행·경로로 있다. icook형 소실 없음. 복원 없음.
- **hex 귀속 분리 (웨이브 39 krafton, E1로 원장 맞춤).** `#ffffff` = canvas / on-primary / outlined-filter 배경. `#000000` = catalog primary_color / search-input 텍스트 / recovery 텍스트. `#222222` = primary / foreground. `#f4f4f4` pill ≠ `#f5f5f5` surface. 본문 한정 `:72`와 원장 행 10이 이제 그 분리를 이름한다. 값을 합치지 않음.

AUDIT_DONE fixes=22
