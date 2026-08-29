# LikeLion 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/likelion/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/likelion/DESIGN.md`
검증 sibling: `web/references/likelion/.verification.md` — `test -f web/references/likelion/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 DS 문서 표면 있음 (`ds.type: system`, `https://designsystem.likelion.net/`). B2a 예문 전제(v12)가 깨지므로 toss형을 요구하지 않는다. 기존 22건과 이번에 붙인 2건은 `not LikeLion-authored or taken from a separately published UI specification, including the published LikeLion Design System documentation`으로 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 22 / 원장 22. 숫자는 맞았으나 Font evidence Official product-use 칸과 Official distributed brand asset 칸이 세 번째 부류인데 인접 한정이 없었다. 22는 과소였다. 로그 sibling 행은 portable 토큰·구조 승격 0을 주장했으나 sibling 문장 `No LikeLion-authored font licence`가 본문 dest 1. Semantic color 같은 hex 다역할은 본문에 있고 원장에 없었다.

## 수정 목록 (10건)

### B2a — 인접 한정 신설 (본문 2건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:114` — Font evidence / Official product-use | "this capture did not take a universal current typography token from it"와 official product-use를 미해상으로 분류하는 것은 세 번째 부류. `:110` 한정은 정렬·homepage Variable·docs Pretendard·declared-only·system 치환만 이름한다. 이 칸을 가리키지 않는다. | 같은 칸 끝에 완전형 한정 신설. 새 줄 아님. |
| 2 | `DESIGN.md:117` — Font evidence / Official distributed brand asset | "This proves delivery … not ownership of a proprietary LikeLion typeface"는 인과 판단. `:110`은 이 칸을 이름하지 않고, Family `:126`은 절이 달라 인접이 아니다. | 같은 칸 끝에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 24, `not LikeLion-authored` 24, `separately published UI specification` 24, `including the published LikeLion Design System documentation` 24. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 42, 51, 60, 73, 87, 94, 98, 102, 110, 114, 117, 126, 130, 141, 163, 241, 245, 250.

### E1 — provenance derived 범위 (3건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 넓은 쪽도 FAIL이므로 행은 본문 한정 수와 같게만 늘렸다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 3 | `provenance.md` Derived editorial inventory | 착수 원장 22행 = 본문 22. 본문에 한정 2건을 신설하면 원장이 좁아진다. | 헤더 22→**24**. 행 신설 2 (`:192` Official product-use · `:193` Official distributed). 데이터 **177–200**. 24 = 24. |
| 4 | Semantic color 행 `:186` | 페어링·비병합만. 본문 `#ff6000`은 catalog `primary_color` / `tokens.colors.primary` / course-search Text, `#222222`은 foreground / promo Text / account-pill Text, `#fcf4ee`는 promo / tile Background, `#d4d4d4`는 nav-border / account-pill Border. | 같은-hex 다역할을 원장에 적음 (E1; 본문 역할은 고치지 않음). |
| 5 | Sibling handling `:126` | 「portable 토큰·구조 분류 승격 0, 아래 사실은 DESIGN.md에 안 들어갔다」. 측정값(score 79, 단독 `6px`, woff2, `rgb()`)은 DESIGN dest 0이 맞다. sibling 문장 `No LikeLion-authored font licence`는 DESIGN dest **1**. | 토큰 승격 0은 유지. 그 문장 DESIGN dest 1 예외를 서문에 적음. 표의 측정 행은 dest 0 유지. 부재 단언으로 바꾸지 않음 (E2d). |

### E2 / E2a / E2c — 로그 목적지 (5건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다. 본문을 고친 뒤 dest를 재실측했다 (lablup).

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | 머리 sibling 문장 | 전용 측정을 토큰으로 안 올렸다는 주장은 측정값에 대해 참. sibling 문장 dest 1을 빼면 준수 주장이 본문보다 셈. | `No LikeLion-authored font licence` DESIGN dest 1 예외를 머리와 sibling 행에 적음. |
| 7 | YAML `primary_color` 행 | `#ff6000` provenance dest 4. 원장 Semantic color 행을 넓힌 뒤 provenance dest **5**. | dest **5**. |
| 8 | Sibling 행 | 「구조 분류 승격 0건」+ 전용 문자열 DESIGN 0. `surface-2` / score 79 / 단독 `6px` / woff2 / `rgb(37, 99, 235)` DESIGN dest 0은 유지. `No LikeLion-authored font licence` dest 1 누락은 fitpet형 2차 목적지 누락. | dest **1** 예외. 토큰 승격 0은 유지. |
| 9 | 패스 1 | B2a 22 = 원장 22, 177–198. 본문·원장 24. | 이관 시점 22를 남기고 F3 24 = 24, inventory **177–200**, Official product-use / Official distributed를 목록에 추가. |
| 10 | F2 dest 표 | 착수 숫자. 본문 한정 +2, 원장 hex mention 증가 후 `#ff6000` 9/4, `#222222` 6/2, `#fcf4ee` 8/2, derived 22/1, `not LikeLion-authored` 22/2. | `#ff6000` **9/5**, `#222222` **6/3**, `#fcf4ee` **8/3**, `#d4d4d4` **4/1**, derived **24/1**, `not LikeLion-authored` **24/2**, `No LikeLion-authored font licence` **1/1**, `Official product-use` **1/2**, `Official distributed brand asset` **1/1**. |

Destination SHA DESIGN `e3492452e04620591f47867aa440a40d4602119ec2ed1d738aa907b8e27874a8` · provenance `1b72817e699ca470f28969142b986362742af1adf5d70b757a4c98dd340f099a` · log `96a87cecc72d1bb35f1d7630691b721f7cafa4a2247c42ddd739508fc7ace755`. 줄 수 DESIGN `wc -l` **308** (한정은 기존 칸 안). provenance **220**. log **119**.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 네 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. 발행 DS가 있으므로 published-spec 닫힘(v12 전제 주석).
- Scope ¶1 계약 범위 — `:9` 한정이 "`https://likelion.net/` as this contract's token surface"를 이미 이름함.
- Scope ¶2 restrained field / concentrated / docs Pretendard — `:11` 한정이 그 읽기를 가리킴.
- Scope ¶3 narrative-not-token — `:13` 한정이 그 분류를 가리킴.
- Semantic color `:83` 원본 §2 Boundary 재진술 — `:73` 한정이 같은 비해합을 이름함.
- Content `:264` byte-exact — `:250` 한정이 "requiring the quoted strings below byte-exact"를 앞으로 가리킴.
- Type roles YAML `1.5`/`1.2` 병기, course-card title `30px` 미변환 — A1a 값 보존, 브랜드 해석 아님.
- B3 준수 주장 — `DESIGN.md` 102가 transition properties · animation name · duration · easing · reduced-motion behavior와 per-component 게이트와 "Official documentation of a single curve or duration is not that gate"를 담고, Named gaps `:305`는 다섯 종류+게이트. `transition properties` DESIGN dest **2**. E2c 유지.
- 원본에 없는 모션 커브/duration을 합성하지 않은 것 — 부재를 옮긴 것이 정답 (kmong).
- YAML `tokens.components.promo-tile|account-pill|course-search` 각 필드(type/bg/fg/radius/padding/font/states/use/border)가 대응 블록에 라벨 행으로 있음. 값 grep만으로 통과시킨 자리 없음 (icook 아님).
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/likelion/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — LikeLion / 멋쟁이사자처럼, LikeLion Design System, “HACK YOUR LIFE!”, “문제 해결 반복 및 경험 공유”, “AI = 동료”, 로그인/회원가입, 2013, YAML `use`/`font`/`states` 바이트.
- **관측 기술** — 라이브 hex·치수·Pretendard Variable 193 / docs Pretendard 34·22 URL, `Primitive type`, unitless `1.5`/`1.2`, `box-shadow: none`, 1440×900, capture selectors.
- **편집적 해석·인과 판단** — 토큰 표면 지정, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 증거 class 해상(official product-use 미해상, hosted files ≠ ownership), kind/applicability, 보이스 큐.

세 번째 부류 중 22곳은 착수 시 인접 완전형이 있었고, Official product-use와 Official distributed 2곳은 한정이 없어 그 자리에 붙였다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

`grep -o <패턴> <파일> | wc -l`. mention(로그·원장 인용)은 use가 아니다.

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 24 | 1 | 2 |
| `not LikeLion-authored` | 24 | 2 | 3 |
| `separately published UI specification` | 24 | 2 | 2 |
| `including the published LikeLion Design System documentation` | 24 | 2 | 1 |
| inventory 데이터 행 | — | 24 (177–200) | — |
| `No LikeLion-authored font licence` | 1 | 1 | 3 |
| `Official product-use` | 1 | 2 | 5 |
| `Official distributed brand asset` | 1 | 1 | 2 |
| `transition properties` | 2 | 0 | 4 |
| `HACK YOUR LIFE!` | 4 | 4 | 4 |
| `score 79` | 0 | 2 | 3 |
| `surface-2` | 0 | 4 | 1 |
| `Pretendard-Regular.subset.woff2` | 0 | 1 | 3 |
| `loading \| not-applicable` | 3 | 0 | 1 |
| `loading \| applicable` | 0 | 0 | 1 |
| `cubic-bezier` | 0 | 0 | 3 |

단독 `6px`(숫자 앞이 아닌 `6px`): DESIGN **0** / provenance **2** / 원본 **0** / sibling **1**. `grep -oF 6px`는 `16px` 부분문자열을 센다.

`provenance.md` / `migration-log.md`의 패턴은 mention이지 본문 use가 아니다.

토큰·표·applicability·구조·원본 무변경.

## 범위 밖 관찰

- **A5a.** 로그가 적는 게이트 copy-loss = compared 2 / candidates 102 (2.0%). `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존의 증거가 아니다. 발행 카피 손 대조(`멋쟁이사자처럼` DESIGN 1 · `HACK YOUR LIFE!` 4 · `문제 해결 반복 및 경험 공유` 1 · `AI = 동료` 1 · `로그인` 6 · `회원가입` 6): DESIGN.md에서 생존. 눈에 띄는 라틴 발행 카피 손실은 없다. `K-Digital Training` 원본 1 / 산출 2는 손실이 아니라 과제 문장 재사용. 고치지 않음.
- **B1.** sibling 전용 score 79 / `surface-2` / 단독 `6px` / `8px` / `14px / 400` / woff2 URL / `rgb()`: DESIGN dest 0. 구조 분류 `h3`는 원본 §3 `Homepage \`h3\` samples` (원본 dest 1)이지 sibling `homepage course-section h3` 승격이 아니다. **예외(본문은 고치지 않음):** sibling `No LikeLion-authored font licence` 원본 0 / sibling 1 / DESIGN 1. Official product-use 칸에 검색 결과로 들어가 있다. B2a 한정을 붙여 편집 읽기로 표시했고 원장에 dest 1을 적었다. 문장 삭제는 B1 본문 수정이라 하지 않음.
- **D2a.** 삭제 처분 행(로그 §13 · provenance Omission `:164`)은 원형 라벨만 (`Individual learners` / `Organisation learning teams` / `Documentation readers` 로그 dest 1, 이름·나이·도시 없음). 식별자 본문 0. **본문 Audience** `public documentation visitors`는 원본 0 / sibling 0 / DESIGN 1. 원본 §13은 `public Storybook/documentation visitors`(원본 dest 1, 산출 dest 0). 소속 문구의 새 표현(hubspot형). Primary tasks는 표면 과제이지 페르소나 동기 재수록이 아님. 고치지 않음.
- **E2d.** 「세 파일 어디에도 없다」면서 그 행이 항목을 나열하는 단언은 없음. `cubic-bezier` DESIGN dest 0 · provenance dest 0은 그 두 파일 분모. sibling 측정 dest 0은 DESIGN 분모. 예외 문장은 dest 1로 적었고 부재를 단언하지 않음.
- **A1 키 경로.** YAML `promo-tile` type/bg/fg/radius/padding/font/states/use, `account-pill` type/fg/border/radius/padding/font/states/use, `course-search` type/fg/font/states/use가 각 블록 라벨 행에 값과 함께 있음. 같은 hex가 다른 블록에만 있는 자리 없음. 복원 없음.
- **열 구조 / 귀속.** 원본 §3 Provenance 열 내용은 Type roles Notes로 옮김 (`home::body`, Homepage `h3` samples, capture selector, card text). 토큰명 열 삭제는 없음. 단계 귀속 수식어 소실 없음.
- **충돌 처리.** 원본 `conflicts: []`. 자리마다 다른 충돌 정책 없음.
- **같은 hex 다역할.** `#ff6000` / `#222222` / `#fcf4ee` / `#d4d4d4`는 표면마다 역할이 갈린다. 본문은 고치지 않고 원장 Semantic color 행에만 적음 (krafton, E1).

AUDIT_DONE fixes=10

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

대상: `docs/design-md-weight/migrated/likelion/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정 24=24.

### 결함 1 — 삭제된 §13 그룹 라벨 Audience 승격 (D2, hubspot형)

Audience `:28`가 미완 슬롯을 버렸다고 쓴 뒤, 공식 history/business가 독립 기록한 집단이라고 세 조각을 올렸다. 그 승격을 삭제했다. 발명 `public documentation visitors`는 본문 dest 0. 원문 `public Storybook/documentation visitors`는 §13 미완 슬롯이라 Audience에 복원하지 않음(승격 금지). `public course and bootcamp visitors` · `business/AX education`도 본문 dest 0. provenance Omission `:164`와 Audience 원장 행의 history/business 귀속을 「dropped slots are not audience」로 고침.

`grep -oF -e` 실측:

| 문자열 | 원본 | sibling | DESIGN | provenance | log |
|---|---:|---:|---:|---:|---:|
| `public documentation visitors` | 0 | 0 | 0 | 0 | 3 |
| `public Storybook/documentation visitors` | 1 | 0 | 0 | 0 | 3 |
| `public course and bootcamp visitors` | 1 | 0 | 0 | 0 | 3 |
| `business/AX education` | 1 | 1 | 0 | 0 | 3 |

Primary tasks는 홈 표면 과제라 이 건에서 건드리지 않음. B2a 완전형 `derived editorial implementation inference` DESIGN dest 24 · `not LikeLion-authored` dest 24 불변.

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| F2 | `public documentation visitors` DESIGN / P | 1 / 0 (표 밖, 본문) | **0** / 0 |
| F2 | `public Storybook/documentation visitors` DESIGN / P | 0 / 0 (표 밖) | **0** / 0 |
| F2 | `public course and bootcamp visitors` DESIGN / P | 1 / 0 (표 밖, 본문) | **0** / 0 |
| F2 | `business/AX education` DESIGN / P | 1 / 0 (표 밖, 본문) | **0** / 0 |
| §13 Personas | 위 4바늘 DESIGN dest 주장 | history/business 그룹 잔존 서술 | DESIGN dest **0** 4바늘 |
| D2 / D2a | 위 4바늘 DESIGN dest 주장 | 식별자 0만 | Audience 미완 슬롯 dest **0** 4바늘 |

F2 기존 29바늘 dest 불변 (`#ff6000` 9/5 · `not LikeLion-authored` 24/2 포함).

`node scripts/check-limiter-ledger.mjs likelion` → 본문 **24** / 원장 **24** (177–200) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand likelion --gate-only` → PASS.

FIX_DONE likelion fixed=1 logdest=6
