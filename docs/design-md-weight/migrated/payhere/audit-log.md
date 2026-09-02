# Payhere 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/payhere/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/payhere/DESIGN.md`
검증 sibling: `web/references/payhere/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Payhere-authored or a separately published UI specification`을 요구한다. 기존 41건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 41 / 원장 41. 숫자는 맞았으나 양쪽이 함께 좁았다. Family `:198` 시스템폰트·Pretendard 대체 금지와 Capture `:233` 미계산 hover/press/focus 생략은 세 번째 부류인데 인접 완전형이 없었다. Semantic `:85`는 역할 비병합만 이름하고, 같은 절 `:92`의 hero H2 `rgb(0,0,0)`≠ink navy를 본문 한정이 말하지 않았다(원장 행은 이미 이름함).

## 수정 목록 (18건)

### B2a — 인접 한정 (본문 3건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:85` — Semantic color | hero H2 live `rgb(0,0,0)`을 ink navy에 올리지 않기는 세 번째 부류. 기존 한정은 역할 페어링·catalog/`primary`·canvas/on-primary·surface 비병합·로고 필≠action만. 원장은 이미 hero H2를 이름했으나 한정 본문이 말하지 않음. | 기존 완전형에 hero H2 black≠ink navy를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:198` — Family substitution | 시스템 폰트 대체 금지 / Pretendard를 마케팅 홈에 섞지 않기 / 미관측 페이스를 Pretendard로 채우지 않기는 세 번째 부류. `:196`은 default·blog 한정·Fallback≠brand face이고, 그 다음 문장(소스 고유 사실)이 끼어 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:233` — Capture omission | motion 규칙이 이름하는 hover / tab-pill-press / focus ring을 계산값 부재로 생략한 것은 세 번째 부류. `:249`·`:251`은 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 43, `not Payhere-authored` 43, `separately published UI specification` 43. 완전형 43(단수 37 + 복수 `inferences` 6). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 46, 56, 69, 85, 120, 135, 148, 152, 168, 172, 180, 196, 198, 202, 213, 226, 233, 249, 251, 269, 298, 324, 352, 379, 406, 422, 437, 458, 466, 478, 497, 504, 511, 519, 531, 535, 569.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 4 | 헤더 / 행 수 | 41 complete / 41 data rows. | **43** / **43**. |
| 5 | Family substitution 행 | 없음. 본문 `:198` 신설. | 행 신설 at 192. |
| 6 | Capture omission 행 | 없음. 본문 `:233` 신설. | 행 신설 at 196. |

헤더 / 데이터 행 **41 → 43** at 174–216 (E1 1:1). Semantic `:85` 행은 착수 시 이미 hero H2 black을 이름하고 있어 행 수정 없음.

### E2 / E2a / E2c — 로그 목적지 (12건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다. 본문 한정 추가 후 A5a 발행 카피 dest는 재실측했고 변동 없음.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity `https://payhere.in/` / `#008cff` | 홈 URL을 줄 목록만 적음. `grep -o` DESIGN dest **4** at 9/21/189 (9에 2회). `#008cff`를 9/11/36/50 네 줄만 적어 dest 4로 읽힘. 실측 DESIGN dest **26** / provenance dest **9**. | dest **4** / dest **26**·**9**. |
| 8 | YAML `live-extract` / `components_harvested` | P dest를 21/29/68만. 실측 dest **5** at 21/29/68/224 (29에 2회). `components_harvested` P dest 23/219 → 원장 행 추가로 **23/221**. | P dest **5** at 21/29/68/224; harvested **23/221**. |
| 9 | YAML type-role line-heights | `1.40` dest 1 (줄 수). 실측 dest **2** at 206. `1.50`/`1.30` 줄만. 실측 dest **4** each. `1.00` dest at 209만. 실측 dest **4** at 209/210 (`1.00rem` 포함). | dest **2** / **4** / **4** / **4**. |
| 10 | `tokens.rounded.full: 9999` | dest at 133/135. 콜론형은 135만. 133은 `` `tokens.rounded.full` `` 표 행. | `tokens.rounded.full` dest **2** at 133/135; 콜론형 dest **1** at 135. |
| 11 | YAML `tokens.components` `Token-set use:` | 266/295/349/**406**/**417**/**430**. 실측 266/295/349/**404**/**420**/**434**. | 실측 여섯 줄. |
| 12 | §3 qualifiers | 180, 196, 202, 213. `:198` 신설을 빠뜨림. | 198을 목록에 넣음. |
| 13 | §5 Layout | `DESIGN.md` 450–468. 450은 빈 줄(컴포넌트 절 끝). 4px 스케일은 456, Standard (8px)는 469, Full은 474. | **456–474**. |
| 14 | §14 States | `DESIGN.md` 237–245. Skeleton·Disabled는 246–247인데 그 행이 포함된다고 적음. | **237–247**. 233 생략 한정도 같은 행에 병기. |
| 15 | §12 inventory / Deviations measure | 41 data rows at 168–214 / 172–214. | **43** rows at **174–216**. Measure DESIGN = 43. |
| 16 | HTML comment Proof | `provenance.md` 224. 원장 행 +2 뒤 그 줄은 `live-extract` 원장. Proof 해석 문장은 **226**. | **226**. |
| 17 | `not in the token set` | dest (313/367)만. 실측 dest **3** at 251/313/367. | dest **3**. |
| 18 | F1 스캔 목록 | Family substitution·Capture omission·hero H2 black을 스캔 목록에 없음. | 세 판단을 F1 목록에 넣음. |

Destination SHA는 이 감사가 본문을 고친 뒤의 `DESIGN.md`(575줄, 한정은 기존 줄에 접힘). provenance 224→**226**줄.

## A1 키 경로 (복원 0)

원본 YAML `tokens.components` 6레코드 필드를 대응 블록 행으로 대조했다. 값 grep이 아니라 키 경로.

| id | YAML 필드 | 대응 블록 행 |
|---|---|---|
| tab-filled | type/bg/fg/radius/height/padding/font/use | Primitive type `button` / Background / Text / Radius / Height / Padding(YAML `0 16px`) / Font `16px / 700` / Token-set use `:266` |
| tab-outline | type/bg/fg/radius/height/padding/font/states/use | 동일 + Active + YAML `states` `:293–295` |
| filter-pill | type/bg/fg/radius/height/padding/font/use | Primitive type `badge` / … / Token-set use `:349` |
| product-card | type/bg/fg/radius/padding/font/use | Primitive type `card` / Text `#1c2638` 행 있음(icook형 소실 아님). Height 84px는 §4 병기(YAML에 없음). Token-set use `:404` |
| device-card | type/bg/fg/border/radius/height/use | Border 행 있음. YAML에 font 없음 → Font 행 없음. Token-set use `:420` |
| section-tab | type/fg/font/active/use | Primitive type `tab` / Text `#000000` / Font `16px / 700` / Active `text #008cff` / Token-set use `:434`. YAML에 bg/height/padding/radius 없음 → 그 키는 이 블록에 만들지 않음. Background `#ffffff`는 §4 Navigation 병기. |

필드 소실 0. 복원 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 39 / candidates 196 (19.9%, 전수 평균 4.4%대보다 높고 50% 미만). `verdict: PASS`는 대조한 39개 바늘의 미손실이지 카피 전수 보존이 아니다. 손 스윕 발행 라벨 33 / YAML `use` 12 / 라틴 후보 23을 재실측: DESIGN dest는 착수와 동일. 라틴 손실 1건은 sibling 전용 getdesign miss-page title `payhere — **0 DESIGN.md files**`(원본 0 / sibling 1 / DESIGN 0 / provenance 1 at 111). 발행 제품 카피 아님.
- **B1 / sibling 전용 분류.** sibling-only 값 `124px` DESIGN dest 0, `채용공고` 0, `#111827` 0, `빛나는 여정을 함께해요! 페이히어 웰컴키트` 0, `border-radius: 0px` 0, `line-height: 16px` 0, `rgb(31,89,224)` 0, `rgb(249,110,174)` 0. 본문의 `hero H2` / `Section H3` / `inactive H3`는 원본 HTML 주석(원본 `:412–413`)에 있어 sibling 전용 승격이 아니다. `portal H2` 세 파일 0.
- **D2a.** 삭제 처분 행은 `페르소나 3인`(이름·나이·도시·동기·소속 분류 종류만). 식별자 본문·원장·로그 dest 0. 원형 라벨이 아닌 식별자라 로그에 이름·도시를 적지 않은 것은 맞다. 동기 문구(`legacy POS rental` / `order-taking labor` / `enterprise complexity`) DESIGN dest 0. 소속 분류는 원본 헤더 그룹(`Korean small-business owners, café/restaurant operators, retail merchants`)만 Audience에 있고, hubspot형 신규 표현 없음.
- **E2d.** 「세 파일 어디에도 없다」형 단언 없음. sibling-only 목록은 provenance 원장에 두는 처분이며 부재를 세 파일 분모로 단언하지 않는다. 로그 `DESIGN.md 0 for those sibling-only strings`는 DESIGN dest 계수이고, 그 문장이 담은 문자열은 로그 mention이다.
- **krafton형 hex 귀속.** `#ffffff`는 canvas와 `on-primary` 두 키(Semantic `:85`/` :98`에 비병합 한정·원장 있음)와 컴포넌트 배경(outline tab / login / default pill / device-card)으로 갈린다. `#000000`은 ink-pure와 filter-pill `fg`. 귀속 분리는 정상이고 canvas/on-primary는 원장에 있다.
- **T2 곡선.** 원본 §15 cubic-bezier 세 값은 본문에서 생략되고 토큰명·use·duration만 남음. 역할 서술만 남는 관례. 되살리지 않음.
- **원본 §1 분위기 문장.** `The overall impression is of merchant software that feels approachable and consumer-friendly — POS tooling that a café or restaurant owner can trust at a glance.` 원본 1 / 산출 0. 발행 카피가 아니라 편집 분위기. A5 바늘 아님. 고치지 않음.
- **충돌 처리.** canvas/on-primary, surface/surface-alt, primary/primary-strong/logo, spacing≠rounded 동형 숫자는 전부 비병합·keep-both. krds형 자리마다 다른 정책 없음.

AUDIT_DONE fixes=18
