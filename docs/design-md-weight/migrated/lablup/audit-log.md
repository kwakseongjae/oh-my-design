# Lablup 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lablup/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lablup/DESIGN.md`
검증 sibling: `web/references/lablup/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양 없음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lablup-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:21` 두 도메인 비병합, Spacing `:120` `md: 14`≠`base: 16`, Shape `:137` radius 비병합, Type roles `:213` YAML/표 keep-both, Assets `:234` isometric facet은 세 번째 부류인데 인접 완전형이 없었다. Scope `:11`은 분위만 이름하고 defining recorded move를 빠뜨렸다. Semantic `:93`은 역할 비병합만 이름하고 live/action·isometric facet을 빠뜨렸다. Font evidence `:194`는 sorting만. How-to-read `:247`은 kind/applicability만 이름하고 inventory가 이미 적은 Focus≠focus-visible을 본문 한정이 말하지 않았다.

## 수정 목록 (30건)

### B2a — 인접 한정 (본문 9건, 발생 수 +5)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | "defining recorded move"는 세 번째 부류. 기존 한정은 forest-dark / engineered만. | 기존 완전형에 defining recorded move를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:21` — Scope evidence domains | 마케팅 측정≠docs 토큰, docs 측정≠마케팅 값, 두 도메인 비병합은 세 번째 부류. 인접 완전형 없음. | 완전형 신설. 발생 수 +1. |
| 3 | `DESIGN.md:93` — Semantic color | live/action green과 isometric brighter facet은 세 번째 부류. 기존 한정은 역할 페어링·cyan 분리·`#000000` 비병합만. `:97`이 "covered by the qualification above"라고 적었으나 그 한정이 이 읽기를 이름하지 않음. | 기존 완전형에 두 읽기를 접어 넣음. 발생 수 +0. |
| 4 | `DESIGN.md:120` — Spacing unmerged | `md: 14` is not `base: 16`은 세 번째 부류. `:133`은 ~8px named base / generous padding이고 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 5 | `DESIGN.md:137` — Shape | `sm: 4`≠`xs: 2`, `lg: 18`≠`xl: 24`, `pill: 999`≠carousel `50%`는 세 번째 부류. Shape 절에 한정 없음. | 완전형 신설. 발생 수 +1. |
| 6 | `DESIGN.md:194` — Font evidence | Hangul fallback≠display, system-face 대체 거부는 세 번째 부류. 기존 한정은 sorting만. | 기존 완전형에 두 판단을 접어 넣음. 발생 수 +0. |
| 7 | `DESIGN.md:213` — Type roles | YAML unitless 비율과 표 노트를 서로 바꾸지 않기, YAML button 700과 표 500-700 keep-both는 세 번째 부류. `:225`는 weight-jump / Hangul *for*이고 표 뒤라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 8 | `DESIGN.md:234` — Assets Brand mark | isometric brighter facet as emerald, catalog pointer≠distributed asset file은 세 번째 부류. `:93`은 Semantic 절이라 인접하지 않다. | 완전형 신설. 발생 수 +1. |
| 9 | `DESIGN.md:247` — How to read | generic Focus≠`focus-visible`, YAML `use` beside §4 Role은 세 번째 부류. 기존 한정은 kind/applicability만. 원장은 이미 Focus를 이름했으나 한정 본문이 말하지 않음. | 기존 완전형에 두 판단을 접어 넣음. 주어를 복수로 맞춤. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 31, `not Lablup-authored` 31, `separately published UI specification` 31. 완전형 정규식 31(단수 26 + 복수 `inferences` 5). `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 15, 17, 19, 21, 27, 36, 40, 53, 63, 76, 93, 120, 133, 137, 157, 161, 194, 213, 225, 234, 247, 253, 553, 561, 571, 589, 607, 620.

### E1 — provenance derived 범위 (10건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 10 | 헤더 / 행 수 | 26 complete / 26 data rows. | **31** / **31**. |
| 11 | Scope ¶2 행 2 | 분위만. 본문 `:11`이 이제 defining recorded move도 이름한다. | 그 판단을 행에 추가. |
| 12 | Semantic 행 | 역할·비병합만. 본문 `:93`이 이제 live/action·isometric facet도 이름한다. | 그 판단을 행에 추가. |
| 13 | Font evidence 행 | Sorting만. 본문 `:194`이 이제 fallback-not-display / no-system-substitute도 이름한다. | 그 판단을 행에 추가. |
| 14 | How-to-read 행 | Kind/applicability / Focus / not-complete. 본문 `:247`이 이제 YAML use beside §4 Role도 이름한다. | 그 판단을 행에 추가. |
| 15 | Scope evidence domains 행 | 없음. 본문 `:21` 신설. | 행 7 신설. |
| 16 | Spacing unmerged 행 | 없음. 본문 `:120` 신설. | 행 15 신설. |
| 17 | Shape 행 | 없음. 본문 `:137` 신설. | 행 17 신설. |
| 18 | Type roles keep-both 행 | 없음. 본문 `:213` 신설. | 행 21 신설. |
| 19 | Assets Brand mark 행 | 없음. 본문 `:234` 신설. | 행 23 신설. |

헤더 / 데이터 행 **26 → 31** at 263–293 (E1 1:1).

### A1 — 키 경로 복원 (1건, 10필드)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 20 | Components 10 YAML 레코드 | `tokens.components.<id>.use` 10문자열이 대응 블록에 행으로 없음(DESIGN dest 0). Role은 §4 표기. 같은 값이 provenance verbatim 표에만 있어 grep「어딘가에 있다」는 통과(icook형). | 각 블록에 `Token-set use:` 행으로 YAML `use` 바이트 복원. DESIGN dest **1** each. 해석 없음 — 값 복원. `:247` keep-both 한정이 이 병기를 이름함. |

복원 문자열: `Primary deep-teal pill CTA (View all partners)` · `Black pill CTA (About Lablup)` · `White pill CTA on dark sections (Contact Us)` · `Ghost outline pill on dark (View All)` · `Emerald accent action (consent Accept All)` · `Light feature shortcut card (Product / News / Careers grid)` · `Near-black dark feature card` · `Blog link card with hairline outline (no shadow)` · `Carousel prev/next circle on dark hero` · `Backend.AI docs TOC / inline link accent`.

시각 필드(type/bg/fg/radius/padding/font/border)는 착수 시 이미 대응 블록에 행으로 있었다. icook형 hex-elsewhere는 없음.

### E2 / E2a / E2c — 로그 목적지 (10건)

본문이 아니라 로그만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -o | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 21 | A5a `Make AI infrastructure accessible` | P dest **1**. 실측 P dest **2** at 77/135 (`Lablup — …` 접두 포함). | P dest **2**. |
| 22 | A5a `Lablup — Make AI infrastructure accessible` | P dest **1**. 실측 P dest **2** at 77/135. | P dest **2**. |
| 23 | A5a `About Lablup` | D dest **4**. Token-set use 복원 후 dest **5**. | dest **5**. |
| 24 | A5a `Contact Us` | D dest **3**. 복원 후 dest **4**. | dest **4**. |
| 25 | A5a `View All` | D dest **3**. 복원 후 dest **4**. | dest **4**. |
| 26 | A5a `Accept All` | D dest **3**. 복원 후 dest **4**. | dest **4**. |
| 27 | A5a `"Careers"` | quoted dest **1** / unquoted dest 착수 **5**. 바늘을 인용부호로 적고 계수는 unquoted. 복원 후 unquoted dest **6**. | 바늘 `Careers` dest **6** / P dest **4**. |
| 28 | A5a `Backend.AI:GO` / `AI:GO` | 한 셀에 두 문자열. `grep -o` 한 패턴이 아님(fitpet형 결합). | 행 분리. `Backend.AI:GO` dest **1**/1 · `AI:GO` dest **2**/2 (`Backend.AI:GO` 접두 포함). |
| 29 | B2 / B2a 행 | DESIGN 26 · inventory 26행. | **31** · inventory **263–293**. |
| 30 | YAML `tokens.components` 행 | 옮김 → Components만. `use`는 본문 dest 0이었다. | 이중 목적지. 각 블록 `Token-set use:` DESIGN dest 1 + provenance verbatim 표. |

Destination SHA `2b25fabe1e0a56c8c59fec2f3a9b9a3d2ce66607882acfe111545100a9a3811b` (DESIGN). 줄 수 DESIGN **666** (착수 657 → use 행 10 + 한정은 기존 줄에 접힘). provenance 307→**312**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md` 179 (`transition properties, animation name, duration, easing, and reduced-motion behavior` dest 1). Principles 형태 `:53` dest 1. 준수 주장 유지.
- `loading | applicable` dest **1** at Emerald Accent. `loading | not-applicable` dest **8**. `Kind: omitted` dest **4**. `This is not a complete state-coverage claim` dest **1**.
- `live-extract` DESIGN dest 0 / P dest 2. `components_harvested` DESIGN dest 0 / P dest 2. `FILL IN` dest 0.
- 무출처 커브 3개 DESIGN dest 0 / P dest 1 each. duration `120ms`/`220ms`/`360ms` DESIGN dest 1 each — T2 관례(역할 서술 + 값 인용). 되살리지 않음.
- E2d: `provenance.md:119` 「Portable-body counts for `getdesign`, `refero`, `13,973`, and `26,638` are 0」은 분모가 portable body. DESIGN dest 실제 0. 「세 파일 어디에도 없다」 단언이 아님. 원장 자신이 그 문자열을 담아도 분모 밖.
- D2a 처분 행(`provenance.md` Omission ledger)은 절·인원·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 래블업, Make AI infrastructure accessible, Making AI possible where it wasn't, The Operating System for AI Infrastructure, We untangle…, Contact Us / About Lablup / View all partners / View All / Accept All / Customize, Backend.AI FastTrack / AI:GO / Sovereign AI, 오류가 발생했습니다, 2015 / 신정규 / Jeongkyu Shin / Joongi Kim / Jonghyun Park, YAML use 10문자열, §7 Do/Don't, §12 다섯 원칙 문장.
- **관측 기술** — hex·999px/4px/24px/18px·Google Sans / Pretendard / Poppins / PyeojinGothic · unitless `1.05`/`1.5` · `Primitive type` · `box-shadow: none` · 47–55px pills · 두 표면 URL.
- **편집적 해석·인과 판단** — 두 페이지를 토큰 표면으로 읽기, GitHub≠세 번째 토큰 표면, defining move / forest-dark / engineered, geometric quietly bold, distinguishing geometry split, 두 도메인 비병합, lab-researcher 인과, refuses/embraces, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, 역할 페어링·live/action, spacing/shape 비병합, ~8px named base, elevation/motion 게이트, 폰트 class·fallback 거부, YAML/표 keep-both, isometric facet, applicability·Focus≠focus-visible·use 병기, whitespace/responsive/touch/image 읽기, voice register, forbidden register.

세 번째 부류 중 26곳은 착수 시 인접 완전형이 있었고, 그중 4곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 5곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **1** / candidates **199**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 기계가 본 1개는 `"오류가 발생했습니다"`. 손 대조 발행 라틴(CTA·슬로건·nav 라벨·비전 라인)은 본문에 dest ≥1. 라틴 발행 카피 손실은 눈에 띄지 않음. 고치지 않음.
- **B1.** sibling 전용 `1440×900` / `Lablup | Make AI Accessible` / `Better, together` / `Need a hand with your AI infrastructure?` / `Trusted by leading organizations` / `Lablup adds Intel Arc` / `Explore Backend.AI` / `Lablup Blog` / `160px` / `13,973` / `26,638` / `18-20px` DESIGN dest 0. `H3`/`h3` DESIGN dest 0. 값·섹션 표제 분류 침투 없음. 본문 `:161`이 sibling에 transition 관측이 없다고 적는 것은 재구성 한정이지 sibling 수치 승격이 아님.
- **D2a.** 식별(`Daeyoung Min`/`Hannah Cole`/`Jiwoo Han`/`Daejeon`) · 동기(`shared GPU cluster`/`ad-hoc notebooks`/`graduate student`) DESIGN/P/L dest 0. 소속 분류 신조어 dest 0. Audience는 원본 그룹 `ML platform engineers, research-lab infra leads, enterprise AI teams`만(원본 §13 머리글 dest ≥1). gitlab형 동기 잔존·hubspot형 소속 신조어 없음. `Seoul`/`San Jose`는 창립·사무실 서사(원본 §11)이지 페르소나 도시 승격이 아님.
- **E2d.** 「세 파일 어디에도 없다」 자기부정 행 없음. 로그 dest 0은 DESIGN/P를 분모로 두고 로그 자신을 넣지 않는다.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 Pure White canvas(light-band background / white pill CTA / text on teal-dark)와 Inverse Pill Background·dark-card Text에 붙는다. 원본 §2가 세 쓰임을 한 불릿에 적었고, claim ledger는 `tokens.colors.canvas` + 컴포넌트 fg/bg 행으로 가른다. 원장에 없는 파생 분리는 아님. 고치지 않음.

AUDIT_DONE fixes=30

## 개정 — 의미 검토 FAIL 2 (2026-08-29)

대상: `docs/design-md-weight/migrated/lablup/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정.

### 결함 1 — §11 고유 사실 복원 (A1)

원본 `:384` `frustrated by the repetitive technical hurdles of running computation in research environments`와 `:386` `for national and consortium-scale deployments`를 Experience Scope 서사에 복원. provenance Narrative 색인에도 같은 두 구.

판정: **사실 인용**, 한정 불필요. 근거 — (1) 창업 동기 구는 원본 §11 창업 문장의 분사 수식이며, 산출이 같은 절에서 `lab researchers`만 남긴 절단이다. 문단 말 기존 한정은 origin을 제품 존재 이유로 *읽는* 편집이며, 분사절 자체는 그 읽기가 아니다. (2) Sovereign AI 범위 수식어는 FastTrack·AI:GO 병행 괄호와 같은 문장 형제인데 한 항목만 잘렸다. 원본이 적은 제품군 범위이므로 해석이 아니다. 원장 행 추가 없음.

### 결함 2 — Type roles YAML `use` 병기 (항목 11)

Section Heading Notes에 YAML `Section headings (Latest news / Trusted by)` 병기. Caption Notes에 YAML `Consent / utility button label` 병기. 표 쪽 `Section heads (Latest news / Trusted by)` · `Consent + utility button label`은 유지. Display Hero·Large와 같은 `YAML use:` 형식.

`check-limiter-ledger.mjs lablup` → 본문 == 원장. `migrate-reference.mjs --brand lablup --gate-only` → PASS.

FIX_DONE lablup facts=2 use=2

## 개정 — 2라운드 (의미 검토 FAIL 2 재검토, 2026-08-29)

대상: `docs/design-md-weight/migrated/lablup/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표·상태 applicability·구조 미수정. provenance 본문 무변경.

### 결함 1 — Scope 본문 16px 절 융합 해제 (A1/A4, 항목 9·10)

Experience Scope `:13` `Korean-optimized fallback behind Google Sans` → 원본 `:66` `Korean-optimized fallback stack`. display 수식어를 본문 16px 절에 붙인 결합을 끊음. `:229` `behind the Latin-first Google Sans display face`는 display 규칙이라 유지.

`grep -oF -e` 실측:

| 문자열 | 원본 | sibling | DESIGN |
|---|---:|---:|---:|
| `Korean-optimized fallback behind Google Sans` | 0 | 0 | 0 |
| `Korean-optimized fallback stack` | 1 | 0 | 1 |
| `behind the Latin-first Google Sans` | 1 | 0 | 1 |

### 결함 2 — A5a dest 갱신 (E2, 항목 6)

1라운드가 Type roles에 YAML `use`를 병기해 DESIGN dest가 1→2가 됐는데 A5a 표 dest는 1로 남았다. 본문은 그대로 두고 로그 dest만 맞춤.

갱신한 dest 행:

| 바늘 | 파일 | 옛 dest | 새 dest |
|---|---|---:|---:|
| `Latest news` | migration-log A5a DESIGN | 1 | 2 |
| `Trusted by` | migration-log A5a DESIGN | 1 | 2 |

provenance dest는 `Latest news` 1 / `Trusted by` 3 그대로.

`check-limiter-ledger.mjs lablup` → 본문 31 = 원장 31. `migrate-reference.mjs --brand lablup --gate-only` → PASS.

FIX2_DONE lablup fixed=2 logdest=2
