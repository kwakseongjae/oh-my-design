# Hyperconnect 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/hyperconnect/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/hyperconnect/DESIGN.md`
검증 sibling: `web/references/hyperconnect/.verification.md` — `find web/references/hyperconnect -type f`와 `test -f web/references/hyperconnect/.verification.md`로 존재 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-28

발행 1차 DS 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Hyperconnect-authored or a separately published UI specification`을 요구한다. 기존 30건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 30 / 원장 30. 숫자는 맞았으나 본문에 인접 한정이 없거나 이름을 안 붙인 편집 문장이 있어 30이 과소였다.

## 수정 목록 (16건)

### B2a — 인접 한정 신설·범위 확장 (본문 5건)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:119` — Foundations / Spacing | "30px horizontal button padding is a recurring rhythm value, giving buttons a wide, confident footprint"는 패딩을 리듬·자신감으로 읽는 **편집 판단**. 같은 줄의 기존 한정은 키경로 미분합만 가리킨다. 스텝 값 4/8/12/16/24/30/48/64는 원본 사실. | 기존 완전형에 rhythm / confident-footprint 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:132` — Foundations / Shape | Tight 행의 "corporate, decisive"는 반지름 쓰임을 성격으로 읽는 **판단**. `:132` 기존 한정은 `full: 9999`·8·17 미분합만 가리킨다. | 기존 완전형에 Tight named-use 읽기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:145` — Foundations / Elevation | `:143` "It is not a `focus-visible` treatment"는 Focus 행의 **증거 class 분류**. `:145` 기존 한정은 quiet-last-resort만 가리킨다. | 기존 완전형에 Focus-not-focus-visible 분류를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:453` — Layout / Grid and container | "create vertical rhythm" / 여백으로 가운데 정렬은 레이아웃 구조를 인과로 읽는 **판단**. `:461` Whitespace 한정은 bright-and-open / cinematic / content-over-decoration만 가리키고, 소절이 달라 인접이 아니다. 히어로·그리드·밴드 관측은 원본 §5 사실. | 같은 줄(마지막 불릿) 끝에 완전형 한정 신설. 새 줄 아님. |
| 5 | `DESIGN.md:546` — Recorded unresolved | "These are named values, not permissions to invent"는 목록 프레이밍 **판단**. 인접 한정 없음. | 같은 줄에 완전형 한정 신설. 새 줄 아님. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 32, `not Hyperconnect-authored` 32, `separately published UI specification` 32. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 44, 55, 67, 82, 115, 119, 132, 145, 149, 183, 185, 186, 194, 209, 218, 225, 236, 441, 443, 453, 461, 467, 490, 510, 512, 546.

### E1 — provenance derived 범위 (1건)

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 6 | `provenance.md` Derived editorial inventory | 착수 원장 30행 = 본문 30. 본문에 한정 2건을 신설하면 원장이 좁아진다(fastcampus형). Spacing·Shape·Elevation 행은 본문이 이제 덮는 재료를 적지 않음. | 원장 30→**32**. 행 신설 2(Layout grid `:453` · Recorded unresolved `:546`). Spacing·Shape·Elevation 행 서술 확장. inventory `146–177`. |

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 7 | YAML identity 행 | `#00dd99` 목적지 `DESIGN.md` 11/35/57/86 + P 14. DESIGN **16**회(11/35/57/86/141/171/234/316/317/322/382/383/436/437/549/550). provenance 실제 4줄은 14/64/74/138. | 발생 수와 전 줄을 적음. |
| 8 | YAML identity 행 | homepage exact URL provenance 13/45/50 — 60(sibling Sources 전사)을 빠뜨림. | 13/45/50/60. |
| 9 | Footer / Tier 1 행 | about URL provenance 46/51 — 60/87을 빠뜨림. | 46/51/60/87. |
| 10 | YAML components 행 | `16px / 700` · `14px / 400` · `16px / 400` · `13px / 400` dest 1 — `Token-set font record:`는 각 1이나 부분문자열은 Font 줄과 겹쳐 dest **2**. | record 줄과 부분문자열 dest를 갈라 적음. |
| 11 | Sibling 절 | sibling-only 목록 `provenance.md` 91–99 — `rgb()` sample forms는 **100**. | **91–100**. |
| 12 | §14 applicability 행 | 눈썹이 `kind: non-interactive`를 선언한다고 적음 — 그 문자열 DESIGN **0**. 본문은 `Kind: non-interactive` dest 1. | `Kind:`만 dest로 남기고 소문자는 DESIGN 0으로 밝힘. |
| 13 | §11 · §12 행 | narrative-not-token `provenance.md` 182 — inventory 삽입 후 Official-history 행이 **184**. inventory 146–175 (30) — 본문·원장 32. | 184. inventory **146–177 (32)**. 546 dest 병기. |
| 14 | YAML spacing/shape · §5 · §6 | 119/132/145 확장을 적지 않음. Grid 453 한정을 적지 않음. | 119 rhythm · 132 Tight · 145 Focus classing · 453 Grid dest 추가. |
| 15 | Deviations · F1 · F2 | 로그가 B2a 30을 현재 상태로 남김. 본문·원장 32. `wc -w` 6,430은 감사 후 6,577. | Auditor 절: F1 32줄(453·546 추가, 119/132/145 접기) · inventory 32 · `B2a 32=32` · 단어 수 6,577. worker-close SHA `1484a305…` 유지, auditor `a0be6103d617b3bf1204f8f05d4adb10eea317ddf4d3b08d15d2abd1ca7c1875`. |
| 16 | YAML identity / F2 | B3 167 전문 / 548 부분은 착수와 일치(E2c 유지). 2차 목적지 중 `#00dd99`·homepage·about만 줄 목록이 짧았고, 본문 0회 주장은 없었음(fitpet형 아님). | 7–9에서 2차 목적지 줄을 실측에 맞춤. |

Destination SHA `1484a305…` → `a0be6103d617b3bf1204f8f05d4adb10eea317ddf4d3b08d15d2abd1ca7c1875` (한정 신설·확장 후). 줄 수 DESIGN 551 불변.

## 수정하지 않은 것 (검토 후 위반 아님)

- Principles 여섯 항목·Do/Don't 본문 — 원본 §12/§7 문장. 머리 한정이 항목을 덮음. toss 예문 적용(발행 1차 DS 없음, v12 전제 주석).
- Semantic `#ffffff` 세 키 · Spacing/Shape "is not" 미분합 — A1 값 보존, 브랜드 해석 아님.
- Motion `:167` — B3 다섯 종류(transition properties · animation name · duration · easing · reduced-motion behavior)와 per-component 게이트와 부분확인 배제가 같은 줄에 전문. E2c 유지, 548은 축소.
- Official product-use "do not publish a universal current typography token" — 같은 칸에 완전형 있음.
- 컴포넌트 표, 상태 applicability, 토큰 값, 절 구조 — 손대지 않음.
- 원본 `web/references/hyperconnect/DESIGN.md` · sibling `.verification.md` — 읽기만.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — Hyperconnect, Azar, Founded in Seoul, WebRTC, on-device machine learning, Middle East / Europe / Asia / the Americas, Match Group, Our Mission / Grow Rapidly & Expand Globally / Serviced in / Apply / Confirm My Choices / Reject All, YAML use/font 바이트.
- **관측 기술** — 라이브 hex·치수·Poppins / noto-sans / Inter · `Primitive type` · unitless `1.17`/`1.20`/`1.45`/`1.50`/`1.63`/`1.86`/`1.00` · `full: 9999` · `rgba(0,0,0,0.08)` / `0.12`.
- **편집적 해석·인과 판단** — 두 페이지를 계약 표면으로 읽기, 분위기/서사≠토큰, 과제/청중 선정, 원칙·Do/Don't 이유, 30px 리듬, Tight corporate-decisive, Focus class, Grid 수직 리듬, kind/applicability, 보이스 읽기, unresolved 프레이밍.

세 번째 부류 중 30곳은 착수 시 인접 완전형이 있었고, Grid와 Recorded unresolved 2곳은 한정이 없어 그 자리에 붙였고, Spacing 리듬 · Shape Tight · Elevation Focus class는 기존 한정이 이름을 안 붙여 범위를 닫았다. Scope·Content·Principles 안팎을 같이 보았다.

## 사후 실측

| 패턴 | DESIGN.md | provenance.md | migration-log.md |
|---|---:|---:|---:|
| `derived editorial implementation inference` | 32 | 0 | 2 |
| `not Hyperconnect-authored` | 32 | 1 | 2 |
| `separately published UI specification` | 32 | 1 | 2 |
| inventory 데이터 행 | — | 32 | — |
| `Kind: non-interactive` | 1 | 0 | 2 |
| `kind: non-interactive` | 0 | 0 | 2 |
| `#00dd99` | 16 | 4 | 2 |
| `full: 9999` | 3 | 3 | 2 |
| `loading \| applicable` | 2 | 0 | 0 |
| `loading \| not-applicable` | 5 | 0 | 0 |

로그·audit-log의 숫자 등장은 mention이지 use가 아니다.

## 범위 밖 관찰

- **A5a.** 게이트 `coverage` copy-loss `compared` 0 / `candidates` 123. `verdict: PASS`는 대조한 것 중 손실 없음이지 카피 보존이 아니다. 손 대조 발행 라틴(Our Mission / Grow Rapidly & Expand Globally / Serviced in / Apply / Confirm My Choices / Reject All / Azar / Match Group / revolutionary / game-changing) DESIGN 각 ≥1 = 원본 ≥1. `latin-copy-audit.mjs --brand hyperconnect` `0 lost / 1 scanned`. 발행 라틴 손실은 안 보임. 고치지 않음.
- **B1.** sibling 전용 `72.354px`/`55.2px`/`26.1px`/`14.4px`/`13.008px`/`901229276`/`hyperconnect.com/careers`/`About` DESIGN 각 0. sibling `h1`/`h2`/`h3` 분류 DESIGN 0 — "Serviced in"은 eyebrow/metadata로만 적혀 있고 h3로 승격되지 않음. 값·분류 침투 0.
- **D2a.** 삭제 처분 행(`provenance.md` 131, 로그 §13)은 `§13 페르소나 4인(이름·나이·도시·동기·소속 분류 포함)` 무식별. 식별자(`Mehmet`/`Yılmaz`/`Istanbul`/`Jiyeon`/`Sara Lindholm`/`Stockholm`/`Daniel Okafor`/`London`) DESIGN/provenance/migration-log 0. 동기(`real-time translation`/`evaluating Hyperconnect as an employer`/`video collaboration`/`how natural the video`) 0. 소속 분류(`Senior backend engineer`/`Partnerships lead`/`Mobile growth marketer`) 0. Audience는 원본 헤더 그룹 `global app users, engineers, recruiters, partners`만. 고치지 않음.
- **E2d.** 부재 단언은 DESIGN dest 0으로만 닫힘(sibling-only · invented domain). 그 문장이 「세 파일 어디에도 없다」고 자기 분모를 넣지 않음. 이 브랜드 0.
- **D1 (참고).** `native application`/`mobile app`/`back-office`/`product application`/`measures 1440px` DESIGN 0.

AUDIT_DONE fixes=16
