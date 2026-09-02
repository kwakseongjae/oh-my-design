# moreh 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/moreh/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/moreh/DESIGN.md`
검증 sibling: `web/references/moreh/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Moreh-authored or a separately published UI specification`을 요구한다. 기존 31건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 31 / 원장 31. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11`은 분위 목록만 이름하고 premium-as-scale-and-tracking / dense engineered headline block을 빠뜨렸다. Audience `:29`는 전기 삭제·세그먼트 읽기만 이름하고 sophisticated-reader / peer-to-peer 병기를 빠뜨렸다. Family `:181`은 한 서체·세 웨이트만 이름하고 system-face 대체 거부를 빠뜨렸다. Motion 표 앞 캡션 `:137`·`:145`(computed 관측 없음 / 커브 생략)는 세 번째 부류인데 표 뒤 `:153`만 있어 인접하지 않았다(lablup Spacing형). Layout responsive `:473`은 원장이 이미 desktop-viewport를 적었으나 본문 한정이 breakpoint table / collapsing rules만 이름했다.

## 수정 목록 (19건)

### B2a — 인접 한정 (본문 7건, 발생 수 +2)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | premium as scale and tracking, single dense engineered headline block은 세 번째 부류. 기존 한정은 분위기 8항만. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:29` — Audience | 소스의 sophisticated-reader / peer-to-peer 병기는 세 번째 부류. 기존 한정은 전기 삭제·세그먼트 읽기만. | 기존 완전형에 그 병기를 접어 넣음. 발생 수 +0. |
| 3 | `DESIGN.md:137` — Motion duration caption | "no computed transition observation behind them"은 세 번째 부류. `:153`은 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:145` — Motion easing caption | "with the curves omitted"은 세 번째 부류. `:153`은 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:153` — Motion paragraph | 기존 한정이 duration roles / easing-use(표 위)까지 이름해 `:137`·`:145`와 겹치고, 표 앞 캡션에는 닿지 않음. | 이 줄은 reduced-motion / motion character만 이름하도록 좁힘. 발생 수 +0. |
| 6 | `DESIGN.md:181` — Family | system font / grotesque를 브랜드 페이스로 대체하지 않기는 세 번째 부류(lablup Font evidence동형). 기존 한정은 한 서체·세 웨이트만. | 기존 완전형에 대체 거부를 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:473` — Layout responsive | desktop-viewport 검사 설정은 세 번째 부류. 기존 한정은 breakpoint table / collapsing rules만. 원장 `:473`은 이미 이 읽기를 적음. | 기존 완전형에 desktop-viewport setting을 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 33 (`grep -o` 어간이 복수 `inferences` 접두도 포함; 단수 only 25 + 복수 8 = 완전형 33), `not Moreh-authored or a separately published UI specification` 33. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 29, 33, 47, 57, 70, 87, 116, 120, 133, 137, 145, 153, 155, 163, 181, 185, 201, 213, 226, 230, 465, 473, 492, 499, 506, 517, 529, 533, 567.

### E1 — provenance derived 범위 (6건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. `:473`은 원장이 넓고 본문이 좁았으므로 본문을 원장에 맞춤(#7).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 8 | Scope ¶2 행 | 분위 8항만. 본문 `:11`이 이제 premium as scale and tracking · dense engineered headline block도 이름한다. | 그 판단을 행에 추가. |
| 9 | Audience 행 | 전기 삭제·세그먼트만. 본문 `:29`이 이제 sophisticated-reader / peer-to-peer 병기도 이름한다. | 그 판단을 행에 추가. |
| 10 | Motion duration 행 | 없음. 본문 `:137` 신설. | 행 신설. |
| 11 | Motion easing 행 | 없음. 본문 `:145` 신설. | 행 신설. |
| 12 | Motion `:153` 행 | Duration roles / easing-use / reduced-motion / motion character. 본문 `:153`은 이제 뒤 둘만. | 행을 reduced-motion · motion character로 좁힘. |
| 13 | Family 행 | 한 서체·세 웨이트만. 본문 `:181`이 이제 system-face 대체 거부를 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **31 → 33** at 148–180 (E1 1:1).

### E2 / E2a / E2c — 로그 목적지 (6건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 14 | YAML spacing 행 | `tokens.spacing.base: 16`을 xs와 같이 dest 1로 읽음. 실측 DESIGN dest **3** (token-set path 1 + keep-off 2) / provenance dest **1**. | dest **3** / P dest **1** (E2a). xs/sm/md/lg/xl/section는 dest **1** each로 분리. |
| 15 | YAML components 행 | Exact YAML `active: "text #dd4300 + bg #f8f7f4"`를 DESIGN dest 1 / P dest 2로 적음. 실측 그 표기 DESIGN dest **1** / P dest **0**. 속 문자열 `text #dd4300 + bg #f8f7f4`는 DESIGN dest 1 / P dest **2**. fitpet형 2차 목적지. | 바늘을 둘로 나눔. quoted form DESIGN dest 1 / P dest 0. inner form DESIGN dest 1 / P dest 2 (E2a). |
| 16 | §5 Layout 행 | Qualified at **464**. 실측 whitespace 한정 **465**. | **465**. |
| 17 | §8 Responsive 행 | Qualified at **472, 491, 498**. 실측 **473, 492, 499**. | **473, 492, 499**. |
| 18 | §10 Voice 행 | Qualified at **505, 516, 528**; locale **532**. 실측 **506, 517, 529**; locale **533**. | 실측 줄로 고침. |
| 19 | B2a 절 + §12 + §15 | 본문 31 · inventory 31행. §15는 155만 B2a로 적음. | 본문 **33** · inventory **33**행. Duration/easing/character 한정을 137 / 145 / 153 / 155에 실측 기재. |

## 검증 (수정 후, 파일별 `grep -o | wc -l`)

B2a 완전형: DESIGN 33 / provenance 0 (색인이지 use 아님) / migration-log 1 (mention).
`tokens.spacing.base: 16`: DESIGN 3 / provenance 1 / log 2 (mention).
Exact `active: "text #dd4300 + bg #f8f7f4"`: DESIGN 1 / provenance 0 / log 1 (mention).
Inner `text #dd4300 + bg #f8f7f4`: DESIGN 1 / provenance 2 / log 3 (mention).
B3 본문 실재: `transition properties` DESIGN 1 · `animation name` DESIGN 2 · `reduced-motion behavior` DESIGN 1. 로그 E2c 준수 주장과 일치.
`Inter` DESIGN dest 35 — 본문 한정을 기존 줄에 접어 dest 불변.

A1 키 경로: 원본 YAML `tokens.components` 8키의 type/bg/fg/radius/padding/height/font/border/states/active/use 각 필드가 대응 블록에 **행으로** 있다. 같은 hex가 다른 블록에만 있는 icook형은 없음. 값 복원 없음.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared 0 (unquoted `모레`, 빈 바늘). `verdict: PASS`는 대조분모가 비었다는 뜻이다. 손 스윕 발행 카피(`Optimal LLM Inference on Every Accelerator`, `Request Demo`, `View Benchmarks`, `From Kernels to Clusters`, `Privacy Policy`, `Terms of Use`, `모레` 등)는 DESIGN에 생존. `Learn more →` SRC 3 / DES 2, `AMD GPU →` SRC 3 / DES 2, `Optimal LLM Inference on Every Accelerator` SRC 6 / DES 5 — 미생존이 아니라 횟수 차(원본 HTML 주석·반복). 라틴 카피 손실로 읽지 않음. 고치지 않음.
- **B1 sibling.** `web/references/moreh/.verification.md` 전용 문자열 `oklch` / `__Inter_f367f3` / `Heterogeneous GPU Inference` / `Request Demo →` / `Blog – Moreh` / `Customer Case` / `width 1440px` / `line-height: 24px` DESIGN dest 0, provenance ledger only. 소스 본문이 이미 적은 H3 feature-heads를 sibling 분류로 승격한 자리는 없음. `1440px` DESIGN dest 1은 소스 §8 Desktop `1024-1440px`.
- **D2a.** 삭제 처분 행은 인원·필드 종류만. 이름·나이·도시·동기·소속 분류 재수록 0. 본문 Primary tasks / Audience에 페르소나 동기·원본에 없는 소속 재구성 없음. 원형 라벨 해당 없음.
- **E2d.** 「세 파일 어디에도 없다」형 부재 단언이 그 문자열을 같은 문장에 다시 쓰는 행 없음. dest 0은 DESIGN만의 측정이고 mention(로그·원장)과 구분해 적혀 있다.
- **같은 hex 다른 역할.** `#f8f7f4` sunken-section / on-dark text, `#050403` ink / hero-dark, `#ffffff` canvas / dropdown surface. 원장 Semantic color 행이 비병합을 적음. 고치지 않음.
- **충돌 처리.** YAML `94` / §3 `94px` / live `93.6px`, YAML `6` / prose `6px`, Overlay faint shadow / `tokens.shadow.none`, 오렌지 3키 — 문서 전체 keep-both. 자리마다 다른 정책 없음.
- **A5 표기.** 원본 HTML 주석 `moreh.io/about` (스킴 없음) vs 산출 `https://moreh.io/about`. 스킴 부여. B2a·E2 밖.

AUDIT_DONE fixes=19
