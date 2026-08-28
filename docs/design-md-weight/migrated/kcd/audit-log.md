# kcd 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/kcd/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/kcd/DESIGN.md`
검증 sibling: `web/references/kcd/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not KCD-authored or a separately published UI specification`을 요구한다. 기존 36건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 36 / 원장 36. 횟수는 맞았으나 Motion `:157`의 arriving / dismissal / two-way use-name keep가 `:157` 스프링 한정과 `:159` 게이트 한정 어디에도 이름되지 않았다. 원장 9행은 본문 한정이 이름하는 판단을 빼서 범위가 좁았다(fastcampus형 — 횟수 일치만으로는 부족). 로그 identity 행은 `#2d91ff`·`한국신용데이터`의 provenance 착지를 빼 E2a 이중 목적지가 한쪽만이었다. §11 행은 `2016`/`2017`/`김동호` P dest를 1로 적어 실측 2(131/165)와 달랐다.

## 수정 목록 (12건)

### B2a — 인접 한정 (본문 1건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:159` — Motion gate | `:157` "The source's use names for arriving / dismissals / two-way transitions stay as use claims; they do not restore a curve"는 세 번째 부류. `:157` 한정은 spring stance만, `:159` 한정은 커브 생략·duration-as-duration·시그니처·다섯 종류 게이트만. | 기존 완전형에 arriving / dismissal / two-way use names as use claims that do not restore a curve를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 36, `not KCD-authored or a separately published UI specification` 36. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 45, 55, 68, 84, 103, 120, 134, 147, 157, 159, 169, 183, 187, 203, 205, 207, 211, 233, 247, 272, 296, 320, 342, 354, 367, 380, 395, 407, 412, 465.

### E1 — provenance derived 범위 (9건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 행 수는 36 유지, 범위를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 2 | Distinctive traits 행 | restatement만. 본문 `:32`는 groupings and the readings inside them도 이름한다. | 그 판단을 행에 추가. |
| 3 | Application rules 행 | eight Do-list rules만. 본문 `:55`는 the reasons attached to them도 이름한다. | 그 판단을 행에 추가. |
| 4 | Avoid 행 | seven Don't-list rules만. 본문 `:68`는 the reasons inside them도 이름한다. | 그 판단을 행에 추가. |
| 5 | Semantic color 행 | Role-to-path + heading-surface만. 본문 `:84`는 taking those role names from the source's own labels도 이름한다. | 그 판단을 행에 추가. |
| 6 | Shape 행 | `full: 9999` beside `9999px`만. 본문 `:134`의 주 판단은 reading figures as rounded keys rather than shared numerals. | 그 판단을 행에 추가. |
| 7 | Motion gate 행 | 커브 생략·duration·게이트만. 본문 `:159`가 이제 use-name keep과 시그니처 keep도 이름한다. | 두 판단을 행에 추가. |
| 8 | Type roles 행 | YAML integers + longer writing만. 본문 `:187`은 unitless line heights as ratios와 attaching each size to the establishing surface도 이름한다. | 두 판단을 행에 추가. |
| 9 | Capture 행 | 절차·Focus-vs-focus-visible·kind-omission만. 본문 `:233`은 preserving the source state contract, every verdict and reason, refusal of complete coverage도 이름한다. | 그 판단을 행에 추가. |
| 10 | Layout targets 행 | 수치를 역할로 읽기만. 본문 `:407`은 Desktop band kept as written, not as a measurement of any one canvas도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **36 → 36** (E1 1:1). 데이터 163–198.

### E2 / E2a — 로그 목적지 (2건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 11 | YAML identity 행 | `한국신용데이터` DESIGN dest 3만. P dest 실측 **1** at 11. `#2d91ff` DESIGN dest 15만. P dest 실측 **5** at 15/65/90/151/154. | DESIGN dest **3** at 9/13/431 · P dest **1** at 11. `#2d91ff` DESIGN dest **15** at 11/35/49/58/86/103/147/226/233/240/264/265/317/319/377 · P dest **5** at 15/65/90/151/154. |
| 12 | §11 행 | 2016/2017 P dest **1**. 실측 P dest **2** at 131/165. 김동호 P 미기재. 실측 DESIGN dest **3** at 13×2/431 · P dest **2** at 131/165. | 2016/2017 P dest **2** at 131/165. 김동호 DESIGN dest **3** · P dest **2**. 아이디인큐/오픈서베이 DESIGN dest **3** · P dest **1** at 131. 165는 derived-editorial index mention임을 행에 적음. |

F1/F2 절과 헤더에 auditor DESIGN SHA `b57411f06b9fbea8d0d1c56d3d803d563ba2c7a578518219d868bbb571c5bcb9`를 반영. Destination SHA `3153f282a567b3f53a402db5de071ea1c979f15dbb4b7fe2f5bcaedb6841dbff` → `b57411f06b9fbea8d0d1c56d3d803d563ba2c7a578518219d868bbb571c5bcb9` (한정 확장 후). 줄 수 DESIGN `wc -l` 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 36개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md:161` (`transition properties` · `animation name` · `duration` · `easing` · `reduced-motion behavior` · partial confirmation). 로그의 B3 주장은 본문 실재.
- E2d: `[FILL IN] none in source`와 `verification_v2 schema: none in source frontmatter`는 분모가 source. `Not rehosted in this file` 페르소나 행은 식별자를 열거하지 않는다. 로그의 `DESIGN.md` dest 0 측정은 다른 파일을 분모로 둔다.
- D2a 처분 행(`provenance.md` Omission ledger, 로그 §13)은 절·인원·필드 종류만. 이름·나이·도시·전기를 열거하지 않는다.

## 범위 밖 관찰

- **A5a.** 게이트 `compared` 32 / `candidates` 191. `verdict: PASS`는 대조한 바늘 중 잃은 게 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 라벨 32종(한국신용데이터·캐시노트·사장님·내 사업이 채워지는 모든 순간·모든 과정이 쉬워지도록 돕습니다·앱 다운로드·캐시노트 시작하기·캐시노트 컨설턴트·서비스 보기·자세히 보기·2026년 5월 기준·회사소개·팀 문화·인재영입·새 소식·사업의 모든 순간…·모든 고민은…·매출을 확인하고…·누구나 기술 혜택을…·데이터와 연결로·공감·사업의 모든 순간·사업자 경영관리·관리 거래액·캐시노트 이용 사업장·창업을 준비하는…·사업자 경영관리 서비스·오류가 발생했습니다·필수·김동호·아이디인큐·오픈서베이) DESIGN dest ≥2. 발행 라틴: `We help make every step easier` SRC 1 / DESIGN 1, `Every moment my business fills up` 1/1, `do this` 2/2, `KakaoTalk` 2/2. `CashNote` SRC 15 / DESIGN 8 — 절 합치로 횟수는 줄었으나 이름 자체는 Scope·서사·Type roles·Voice에 남음. `Korea Credit Data` 4/3, `Kim Dong-ho` 2/1(본문 `:13` 김동호 옆 병기; provenance Proof notes는 한글만). 라틴 발행 카피 소실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `66px` / `#0d1741` / `#57a8ff` / `height 40px` / `50%` / `0px 0px 25px` / `playwright` / `1440×900` / `ko-KR` / `H3` DESIGN dest 0. sibling의 h3/섹션 표제 분류가 본문에 사실로 들어온 흔적 없음. `:205` `hero H2`는 원본 philosophy-layer 주석에 있는 표기(원본 `:409`·`:412`).
- **D2a.** 식별자(`박은정`/`김상호`/`이지연`/`대구`/`인천`/`부산`)·동기(`never pressures`/`enterprise accounting`/`retail shops`)·소속 재구성 DESIGN/P dest 0. Audience는 원본 그룹 `small-business owners (사장님)` / `independent shop owners` / `sole proprietors`만. gitlab형 동기 잔존·hubspot형 소속 신조어 없음.
- **A1.** 원본 YAML `tokens.components` 8레코드의 type/bg/fg/radius/padding/font/use 및 기록된 height/border/focus/active가 대응 블록에 행으로 있다. Soft CTA `tokens.components.button-soft` 블록(235–258)에 bg/fg/radius/height/padding/font/use. Outline·Ghost·Input·Surface Card·Blue-Tinted Card·Stat Chip·Nav 동일. Ghost YAML bg 없음 — "YAML records no background key"로 표기. icook형 키 경로 소실 없음. `tokens.colors.*` 16키 Semantic 역할행, spacing 8·rounded 5·`shadow.none` Foundations 표. typography 9역할 값은 Type roles 표 행, 경로는 `:201` 요약 문장.

AUDIT_DONE fixes=12
