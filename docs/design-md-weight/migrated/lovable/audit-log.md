# lovable 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lovable/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lovable/DESIGN.md`
검증 sibling: `web/references/lovable/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lovable-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다. 문법 변형 복수 `are derived editorial implementation inferences` 2건은 완전형.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not Lovable-authored` 22 / `separately published UI specification` 22 / `separately published` **23**. 원장 데이터 행 22 (209–230). 단수 `"derived editorial implementation inference from the verified surfaces"` DESIGN dest **20**; 복수 `"…inferences from the verified surfaces"` dest **2**. `not a separately published UI specification` DESIGN dest **0** — 23번째 `separately published`는 Content `:323`의 `separately published copy manual`이고 같은 완전형 줄에 있다. 자리 수는 맞았으나 네 절의 이름 범위가 본문 세 번째 부류보다 좁았다(fastcampus). Semantic `:79`는 비해합·violet wash·은퇴 토큰만 이름하고, `:88` lab() pair = component fields와 `:91` local warm surfaces remain component-local은 세 번째 부류인데 한정 밖. Shape `:107`은 로컬 기하·9999 keep-both만 이름하고 `:103` 6px option ≠ menu-system token은 한정 밖. Type roles `:146`은 YAML/§3 keep-both와 use 병기만 이름하고 `:157` `tokens.typography.body.size` `16` ≠ `tokens.spacing.xl: 16` · action.size `14` ≠ spacing은 한정 밖. Capture `:173` including-list는 역할 판정/YAML keep-both만 이름하고, 같은 문단의 generic Focus ≠ `focus-visible` · pressed/selected ≠ extra Core §4.4 rows는 세 번째 부류인데 닫힘 주어 밖.

문장 분류: 브랜드 발행 사실(공식 문서의 full-stack 프레이밍, 홈 4구, 문서 그룹 Audience) / 관측 기술(hex·px·Camera Plain Variable 758 uses·셀렉터·YAML 필드) / 편집적 해석·인과 판단(표면 귀속, 비해합, 로컬 기하, 승격 게이트, 페르소나 비승격). 세 번째 부류만 수정 대상.

## 수정 목록 (14건)

### B2a — 인접 한정 (본문 4건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:79` — Semantic color | 비해합·violet wash·은퇴 토큰만. `:88` lab() pair = component fields, `:91` local warm surfaces, on-action `lab(98.2716 0 0)` ≠ dialog-shadow 동일 lab은 세 번째 부류인데 한정 밖. | 기존 완전형에 세 판단을 접어 넣음. 발생 수 +0. `lab(0 0 0 / 0.88)` DESIGN dest 5→**6**. `lab(98.2716 0 0)` 6→**8**. |
| 2 | `DESIGN.md:107` — Shape | 로컬 기하·9999 keep-both·rounded≠spacing만. `:103` 6px option ≠ promoted menu-system token은 한정 밖. | 그 판단을 기존 완전형에 접음. `menu-system token` DESIGN dest 1→**2**. |
| 3 | `DESIGN.md:146` — Type roles | YAML/§3 keep-both와 use 병기만. `:157` body.size `16` ≠ spacing.xl `16` · action.size `14` ≠ spacing은 세 번째 부류. | 두 keep-apart를 기존 완전형에 접음. `:157`은 재진술로 남김. `tokens.spacing.xl: 16` DESIGN dest 2→**3**. |
| 4 | `DESIGN.md:173` — Capture record | including-list는 역할 판정/YAML keep-both. 같은 문단의 generic Focus ≠ `focus-visible` · pressed/selected ≠ extra Core §4.4 rows는 닫힘 주어 밖. | 두 판단을 including-list에 접음. `focus-visible` DESIGN dest 10→**11**. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, 단수 `…inference from the verified surfaces` **20**, 복수 `…inferences from the verified surfaces` **2**, `not Lovable-authored` 22, `separately published UI specification` 22, `separately published` 23, `not a separately published UI specification` 0. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 34, 38, 48, 57, 66, 79, 95, 107, 111, 115, 125, 142, 146, 164, 173, 312, 318, 323.

### E1 — provenance derived 범위 (4건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 헤더/데이터 행 수는 22=22로 유지하고 행 텍스트를 본문에 맞춤. Semantic evidence-class 경계 문장도 같은 읽기를 따라 넓힘(원장 행 수 불변).

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 5 | Semantic color 행 + evidence-class 탄환 | 비해합·violet wash·은퇴 토큰만. | lab() pair = header-primary-action fields; on-action lab ≠ shadow lab; local warm surfaces ≠ universal primary palette. |
| 6 | Shape 행 | 로컬 기하·9999 keep-both만. | 6px option ≠ promoted menu-system token. |
| 7 | Type roles 행 | keep-both / YAML use만. | body.size 16 ≠ spacing.xl 16; action.size 14 ≠ spacing step. |
| 8 | Capture record 행 | 역할 판정/YAML keep-both. Focus≠focus-visible은 행 끝에만 있고 including 범위와 어긋남. | generic Focus ≠ `focus-visible`; pressed/selected ≠ extra Core §4.4 rows를 본문 including-list와 1:1로 맞춤. |

헤더 / 데이터 행 **22 = 22** at 209–230 (E1 1:1, 이름 범위 정렬). `scripts/check-limiter-ledger.mjs lovable` 본문 22 = 원장 22.

### E2 / E2a / E2c — 로그 목적지 (6건)

본문이 아니라 로그(와 거짓 목적지 원장 행)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | §4 오버레이 행 | 목적지 `Components Capture record 끝`. 원문 문장은 Capture record가 아니라 Components & States 끝(Pricing information dialog 다음). DESIGN dest **1** at **307**. | 절 이름을 실제 착지로 교정. 본문 0회가 아님(fitpet형 2차 목적지와 다름). |
| 10 | YAML typography 행 · 값보존 표 A1a | YAML lineHeight `1.5` dest **10**. grep `1.5` dest 10은 tracking `-1.5`/`-1.5px`와 dialog-shadow `-1.5px`를 포함. YAML lineHeight `1.5`는 dest **4** (146×2 · 153 · 155). | lineHeight dest 4로 바로잡고 grep dest 10을 분모에 적음. |
| 11 | YAML typography 행 | §3 `-1.5px` dest **4**. 실제 타입 트래킹 dest **2** (146 · 150). grep dest 4는 shadow `-1.5px` ×2. | 타입 dest 2로 교정. |
| 12 | F1 준수 주장 | 단수 인용 `"derived editorial implementation inference from the verified surfaces"`를 짝 22로 적음. 그 문자열 DESIGN dest **20**. | 단수 dest 20 + 복수 dest 2 = 22로 바로잡음(E2c). |
| 13 | YAML typography 행 | WOFF2 URL이 Family+Assets(DESIGN dest **2**)와 provenance Sources(dest **2**)로 가는데 표가 이중 목적지를 안 적음. Pass 2만 주장. | Family·Assets / provenance dest 2를 표에 적음(E2a). |
| 14 | F2 dest 표 + §2 lab 행 + spacing 행 | 본문 수정 뒤 재실측 없음(lablup). `lab(0 0 0 / 0.88)` 5→**6**/P **5**. `lab(98.2716 0 0)` 미수록 → DESIGN **8**/P **6**. `tokens.spacing.xl: 16` 2→**3**/P **1**. 단수/복수 inference 바늘 추가. WOFF2 풀 URL DESIGN **2**/P **2**. | `grep -oF -- \| wc -l` 재실측. F1에 확장 4자리를 적음. 자리 수 22=22 유지. |

Destination SHA `01bcee03246a0b1a19387b32282aa0d592a1ec07885f40288543ae9830a24487` → `f6a3183572445a602b257f4a8d6872dbd100871bb7a936bb04c74812f9804945` (한정 확장 후). 줄 수 DESIGN `wc -l` **380** 불변. `wc -w` 5,434→**5,548**. provenance 250 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- E2c: B3 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest — `transition properties` **2** (Motion `:117` · Named gaps `:380`).
- E2d: sibling-only 머리(`provenance.md` 154)는 DESIGN.md를 분모로 두고 승격을 거부하며, 그 문장은 항목을 나열하지 않는다. 201행은 「this file에 없다」를 명시적으로 거부한다. `cubic-bezier` DESIGN dest 0 · provenance dest 0 — 로그 mention은 분모가 아니다.
- D2a 처분 행은 절·필드 종류만. 이름·나이·도시·전기 없음. 원본 §13에 식별자가 없다.
- A1 키 경로: `header-nav-trigger` 9필드(type/bg/fg/radius/padding/height/font/states/use)가 Header navigation trigger 블록 행으로 존재. `header-primary-action` 9필드. `pricing-cycle-tab` 9필드. `pricing-selector` 9필드(+border, padding 없음). `pricing-info-dialog` 10필드(+shadow, height 없음). icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 11/11.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **0** / candidates **169**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 4 (`Build something Lovable` DESIGN dest 2 · `Start with an idea` 2 · `Watch it come to life` 2 · `Refine and ship` 2) DESIGN dest 각 ≥1, 미생존 0. YAML use 11/11. 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 italic WOFF2 / `14px/450` / `coverage 100` / `rgb(3, 3, 3)` / `10px 8px` / `lab(47.9156` / `208 captured` / `330 captured` / `220 captured` / `31 component variants` / `nine observed states` / `full-pill radius` DESIGN dest 0. `portal H2` / `h3` sibling 0, 본문 승격 0. `full-pill tab` SRC dest 0 / SIB dest 0 / DESIGN dest **1** (Anatomy `:233`) — 원본 Key characteristics `full-pill geometry is local to pricing tabs` SRC dest 1에서 온 해부 라벨이지 sibling `full-pill radius`의 승격이 아니다.
- **D2a.** 식별자·동기 스케치·소속 신조어 DESIGN dest 0. Primary tasks는 캡처 공개 컨트롤 세 개. Audience는 원본 공식 문서 그룹 세 줄 그대로. 로그 삭제 행은 원형 라벨을 적지 않음 — 이 브랜드는 이름 페르소나가 없고 발행 한국어 원형 라벨이 아님. 라벨 재수록을 D2a로 지목하지 않음(웨이브 41).
- **E2d.** 부재 단언 행이 자기 자신을 분모에 넣는 형태 없음. sibling-only 절은 「this file에 없다」를 명시적으로 거부한다.
- **같은 값 다른 역할.** `#030303`는 Ink / header-nav-trigger fg / catalog `primary_color` 세 글. `lab(98.2716 0 0)`는 header-action text와 dialog-shadow 링 — E1로 원장·본문 한정을 실제에 맞춤(고침 #1·#5). `lab(0.903296 0 0)`는 combobox text · combobox border · dialog text. `#fafafa` canvas ≠ on-action lab ≠ dialog `lab(99.9884…)`. 보편 filled CTA로 합치지 않음.
- **열 구조.** 원본 색 표는 이름·hex·use. 토큰명 열(`--lovable-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. 충돌 없음(`conflicts: none`); sibling 추가 기하(`14px/450`, italic WOFF2)는 provenance-only로 일관.
- **모션 규칙 원본 부재.** 원본 §15에 커브·duration 없음. 본문 `intentionally` 합성 없음. 부재를 합성하지 않은 것은 모범(웨이브 39 kmong). `cubic-bezier` DESIGN dest 0 · provenance dest 0. 값 인용+역할만 남는 T2 관례 해당 없음(원본에 값이 없음).
- **D1.** `native-client` / `storefront` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `14px radius with 16px padding` DESIGN dest 0.

AUDIT_DONE fixes=14

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

대상: `docs/design-md-weight/migrated/lovable/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (22=22).

### 결함 1 — A1 원본 고유 경계 구 소실

원본 §11 `:299` `That product context is not evidence for private workspace controls, so this reference keeps the public marketing/product capture distinct from authenticated product claims.` 를 Experience Scope 서사 문단에 원문 표기로 복원. 앞문장(shared workspaces / GitHub / governed and deployed)과 뒷절 B2a 한정은 그대로 두고, 그 사이에 원본 문장을 사실 인용으로 넣었다. provenance Claim ledger §11 행에 같은 원문 색인.

판정: **사실 인용**, 한정 불필요.

`node scripts/check-limiter-ledger.mjs lovable` → 본문 **22** / 원장 **22** (209–230) 1:1 OK.
`node test-v2/tools/migrate-reference.mjs --brand lovable --gate-only` → PASS.

세 바늘 dest (`grep -oF -e` 파일별, `grep -c` 미사용; 이 절 기록 후): `That product context is not evidence for private workspace controls` D1/P1/L4/AUD2 · `private workspace controls` D1/P1/L7/AUD3 · `authenticated product claims` D2/P1/L4/AUD2. SRC 각 1 / SIB 각 0. A5a dest 불변. 기존 F2 dest 다른 바늘 횟수 불변.

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 고유 경계 구 전문 DESIGN / P | 0 / 0 | **1** / **1** |
| §11 Brand Narrative | 고유 경계 구 짧은 쪽 DESIGN / P | 0 / 0 | **1** / **1** |
| §11 Brand Narrative | 인증 제품 클레임 DESIGN / P | 미수록 1 / 1 | **2** / **1** |
| F2 dest 표 | 고유 경계 구 전문 | 미수록 | **1** / **1** |
| F2 dest 표 | 고유 경계 구 짧은 쪽 | 미수록 | **1** / **1** |
| F2 dest 표 | 인증 제품 클레임 | 미수록 | **2** / **1** |

FIX_DONE lovable fixed=1 logdest=6
