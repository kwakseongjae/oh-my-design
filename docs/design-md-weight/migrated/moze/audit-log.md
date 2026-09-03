# MOZE 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/moze/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/moze/DESIGN.md`
검증 sibling: `web/references/moze/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음. SHA-256 `113324821c58b1a2286ff4965a60682a09bb6999b132f89c3c0e3051887f1ad1`, 6078 bytes — provenance Canonical proof와 일치.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -o <패턴> <파일> | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-09-02

발행 1차 UI 사양 없음(`ds.type` 원본 dest 0). B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not MOZE-authored or a separately published UI specification`을 요구한다. 기존 26건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 완전형 26 / 원장 26. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Shape `:132`는 YAML radius 키와 컴포넌트 `999px`/`20px` 비병합인데 인접 완전형이 없었다. Scope `:11`은 분위만 이름하고 `single, unmistakable signature`를 빠뜨렸다. Scope `:13` 완전형은 classifying-as-context만 이름하고 원장이 이미 적은 premise / beauty-and-data-clarity / competes-not-on-free-or-fast / refusal-embrace를 말하지 않았다. Motion `:165`는 곡선 생략을 빠뜨렸다. Family `:192`는 do-not-replace-unavailable을 빠뜨렸다. Assets `:220`은 identity pointer만. Capture `:229`는 Primitive-type 부착 규칙을 빠뜨렸다. Voice `:441`은 tone table만 이름하고 forbidden register는 불완전 지시어로 닫혔다.

## 수정 목록 (26건)

### B2a — 인접 한정 (본문 8건, 발생 수 +1)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | `single, unmistakable signature`는 세 번째 부류. 기존 한정은 cinematic / gadget unboxing / premium-but-playful / CJK split / glow over flat / closing atmosphere만. | 기존 완전형에 calling the gradient a single, unmistakable signature를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:13` — Scope ¶3 | founding premise / beauty-and-data-clarity / competes-not-on-free-or-fast / refusal-embrace는 세 번째 부류. 기존 완전형은 classifying-as-context만. 원장은 이미 그 읽기를 이름함. | 기존 완전형에 네 읽기를 접어 넣고 주어를 복수로 맞춤. 발생 수 +0. |
| 3 | `DESIGN.md:132` — Shape | YAML radius 키 ≠ 컴포넌트 `999px`/`20px`, `tokens.rounded.md` 20 ≠ `tokens.spacing.md` 20, `tokens.rounded.full` 999 ≠ spacing step은 세 번째 부류. Shape 절에 한정 없음. Spacing `:121`은 spacing 키만. | 완전형 신설. 발생 수 +1. |
| 4 | `DESIGN.md:165` — Motion | unattributed cubic-bezier 생략(이름·use만 유지)은 세 번째 부류. 기존 한정은 durations / reduced-motion / glow swell / no-bounce / smooth-and-premium만. | 기존 완전형에 omitting unattributed curves while keeping easing names and uses를 접어 넣음. 발생 수 +0. |
| 5 | `DESIGN.md:192` — Family | `:190` do-not-replace-unavailable / do-not-present system CJK or Inter as a MOZE brand face는 세 번째 부류. 기존 한정은 Latin/OS split / never-swap / weight 400 / heading ink / −2.08px만. | 기존 완전형에 두 금지를 접어 넣음. 발생 수 +0. |
| 6 | `DESIGN.md:220` — Assets | `:218` first-party imagery / triangular "M" 대체 거부는 세 번째 부류. 기존 한정은 catalog pointer≠illustration specification만. | 기존 완전형에 그 거부를 접어 넣고 주어를 복수로 맞춤. 발생 수 +0. |
| 7 | `DESIGN.md:229` — Capture | Primitive type은 YAML이 type을 기록한 컴포넌트에만 붙인다는 규칙은 세 번째 부류. 기존 한정은 kind/applicability / not-complete / active≠focus-visible만. | 기존 완전형에 Primitive-type-only-when-YAML를 접어 넣음. 발생 수 +0. |
| 8 | `DESIGN.md:441` — Voice | Forbidden register `:451`은 세 번째 부류. 기존 한정은 characterization / tone table만. `:451`의 "same editorial reading as Voice above"는 완전형이 그 규칙을 이름하지 않아 인접이 끝나지 않음. | 기존 완전형에 forbidden-register authoring rule that follows it를 접어 넣음. 발생 수 +0. |

수정 후 실측 — `DESIGN.md`: `derived editorial` 27, `not MOZE-authored` 27, `separately published` 27. 완전형 줄: 9, 11, 13, 19, 28, 32, 44, 54, 67, 84, 113, 121, 132, 143, 165, 183, 192, 196, 220, 229, 233, 398, 424, 437, 441, 459, 493. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | 헤더 / 행 수 | 26 complete / 26 data rows. | **27** / **27**. |
| 10 | Scope ¶2 행 | 분위만. 본문 `:11`이 이제 single, unmistakable signature도 이름한다. | 그 판단을 행에 추가. |
| 11 | Shape 행 | 없음. 본문 `:132` 신설. | 행 신설. |
| 12 | Motion 행 | durations / glow swell / 게이트만. 본문 `:165`이 이제 curve omission도 이름한다. | 그 판단을 행에 추가. |
| 13 | Family 행 | Latin/OS split만. 본문 `:192`이 이제 do-not-replace / do-not-present도 이름한다. | 그 판단을 행에 추가. |
| 14 | Assets 행 | identity pointer만. 본문 `:220`이 이제 imagery 대체 거부를 이름한다. | 그 판단을 행에 추가. |
| 15 | Capture 행 | kind/applicability / not-complete만. 본문 `:229`이 이제 Primitive-type-only-when-YAML도 이름한다. | 그 판단을 행에 추가. |
| 16 | Voice 행 | characterization / tone table만. 본문 `:441`이 이제 forbidden register도 이름한다. | 그 판단을 행에 추가. |

헤더 / 데이터 행 **26 → 27** at provenance 209–235 (E1 1:1). 각 행의 `` `:n` ``는 본문 한정 줄과 일치(27/27 OK).

### E2 / E2a / E2c — 로그·원장 목적지 (10건)

본문이 아니라 로그·원장의 목적지 표기만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김. 2차 목적지 문자열은 DESIGN dest를 `grep -oF | wc -l`로 확인했다.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | provenance Dual `#ff367c` | Avoid를 목적지로 적음. Avoid dest **0** for this hex. Scope ¶2 / token note / Pro Tier Card ring이 빠져 있음. DESIGN dest **20**. | Avoid dest 0을 명시. Scope ¶2 · token-note · Pro ring을 목적지에 추가. |
| 18 | provenance Dual homepage | Experience Scope + Primary tasks만. Capture record `:227`에도 `https://moze.app/`가 있다. DESIGN dest **6** (prefix-inclusive: `https://moze.app/pricing`도 같은 바늘). | Capture record를 목적지에 추가. prefix-inclusive dest 6을 적음. |
| 19 | log YAML homepage 행 | `≥ 1`; 목적지 Scope + Primary tasks만. | dest **6** + Capture record. |
| 20 | log YAML `#ff367c` 행 | Avoid를 목적지로 적음. Avoid dest **0**. | Avoid dest 0. Scope ¶2 · token-note · Pro ring 추가. dest **20** 유지. |
| 21 | log YAML shadow 행 | Elevation + CTA/card만. glow-cta dest **3** at 11/140/258. glow-card dest **3** at 11/141/345. Scope ¶2가 빠져 있음. | Scope ¶2를 세 번째 목적지로. dest 3 each. |
| 22 | log Dual table homepage / dates / live-extract | homepage dest 미기재; `2026-06-17` 절만; `live-extract` 절만. | homepage dest **6**. `2026-06-17` dest **6**. `live-extract` dest **1**. |
| 23 | log Dual table `#ff367c` | "Foundations + components + Experience" — Avoid가 암시됨. | dest **20**. Avoid dest **0**. |
| 24 | log Dual table `rgba(255,255,255,0.87)` / gold | 계수 없음. | rgba dest **9**. `#f0c732` dest **4** / `#f7ce36` dest **2**. |
| 25 | Pass 1 | `grep -c` = 26. 줄 수 계수. | `grep -o \| wc -l` = **27**. inventory **27**. forbidden register는 Voice `:441`이 이름함. |
| 26 | Pass 2 | dual dest를 착수 목록으로 적음. | Scope glow dest 3 · homepage dest 6 · `#ff367c` Avoid dest 0을 실측으로 갱신. |

Destination SHA `ec86b7132b019e114f8f6e8bd3e3355c8f8f29b2601d617fe1b110a54850f5f7` (DESIGN). 줄 수 DESIGN **497** 불변(한정은 기존 줄에 접힘, Shape는 같은 단락에 신설). provenance 243→**244**. migration-log **123**.

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 hex·치수, 컴포넌트 상태 applicability 표, 절 구조. 원본·sibling 미수정.
- 기존 26개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법에 맞춘 복수 주어(`inferences` / `they are not`)는 완전형이다.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다.
- E2c: B3 전문 `DESIGN.md:165` (`transition properties, the animation name, the duration, the easing, and the reduced-motion behavior` dest 1). Principles 형태 `:44` dest 1. 준수 주장 유지.
- `live-extract` DESIGN dest **1** / P dest **4**. `components_harvested` DESIGN dest **0** / P dest **3**. `FILL IN` dest 0.
- 무출처 커브 3개 DESIGN dest 0 / P dest 1 each. duration `120ms`/`240ms`/`360ms` DESIGN dest 1 each — T2 관례(역할 서술 + 값 인용). 되살리지 않음.
- E2d: portable body가 `doc.moze.app` / `changelog.moze.app`를 나르지 않는다는 문장(`provenance.md:68`)의 분모는 portable body. DESIGN dest 실제 0. 「세 파일 어디에도 없다」 단언이 아님.
- D2a 처분 행(`provenance.md` Omission ledger, log §13)은 절·인원·필드 종류만. 이름·나이·도시·전기를 Item에 옮기지 않음.
- A5 발행 카피 dest는 본문 한정 확장 후에도 불변(손 스윕 27 / unsurvived 0). 로그 A5 표 재실측: `摩斯` 4 · `最美記帳 App` 4 · `立即免費下載` 4 · `立即下載` 3 · `查看完整教學` 5 · `專業版 + AI` 6. 갱신할 차이 없음.

## 문장 분류 요약 (B2a 절차 1)

휴대 본문을 문장 단위로 [브랜드 발행 사실 / 관측 기술 / 편집적 해석·인과 판단]으로 나누었다.

- **브랜드 발행 사실** — 摩斯, 最美記帳 App, 用最優雅的方式簡化你的財務旅程, 記帳，是理財的第一步, 投資你的財務健康, 跨越裝置的財務掌控, 全面的記帳體驗，持續進化中, 真實用戶，真心推薦, 立即免費下載 / 立即下載, 查看完整教學, 定價方案 / 教學文件 / 常見問題 / 聯繫我們, 這裡, 基本版 $0 / 專業版 / 專業版 + AI, 螢幕快照, Apple Watch, 必填, YAML use 8문자열, §7 Do/Don't, §12 다섯 원칙 문장.
- **관측 기술** — hex · 999px/20px/41px/43px/30px · Poppins / system sans-serif · unitless `1.4`/`1.3`/`1.5` · `Primitive type` · glow 두 문자열 · 두 표면 URL · 2026-06-17 inspect.
- **편집적 해석·인과 판단** — 두 URL을 토큰 표면으로 읽기, design-forward, cinematic / gadget unboxing / unmistakable signature / CJK split / glow over flat, founding-and-thesis를 토큰 아닌 맥락으로 분류, 과제 선정, 청중 묶기, 특성 묶기, 원칙·Do/Don't, hex↔경로 페어링, spacing/shape 비병합, elevation/motion 게이트와 곡선 생략, 폰트 class·대체 거부, YAML/표 keep-both, applicability·Primitive-type·active≠focus-visible, whitespace/responsive/tap-comfort, voice register와 forbidden register, Named gaps를 미해상 값 목록으로 읽기.

세 번째 부류 중 26곳은 착수 시 인접 완전형이 있었고, 그중 7곳은 같은 단락의 다른 판단을 이름하지 않아 범위를 닫았고, 1곳은 신설했다. Scope·Content·Principles 안팎을 같이 보았다.

## 범위 밖 관찰

- **A5a.** 게이트 `copy-loss` compared **21** / candidates **200** (`verdict: PASS`는 그 21-바늘 부분집합). 이관본 130개 전수 평균 4.4% 대비 21/200 = 10.5% — 기계가 안 본 차이는 179. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다이지 카피 보존이 아니다. 손 대조 발행 카피(번체 라벨·CTA·슬로건 + 원본이 붙인 영어 gloss 27)는 본문 dest ≥ 1. 라틴 발행 카피 손실은 눈에 띄지 않음. sibling-only `$1.99` / document.title `MOZE － 最美記帳`는 원장에 처분. 고치지 않음.
- **B1.** sibling 전용 `$1.99` / `MOZE － 最美記帳` / `146px` / `doc.moze.app` / `changelog.moze.app` / `apple-touch-icon` / `radial-gradient(35%` / `radial-gradient(59%` / `×119` / `×277` / `domcontentloaded` / `zh-TW` / `Framer lazy` DESIGN dest 0. `H2` DESIGN dest 2 / 원본 dest 3 — 원본 §3 표 Notes의 "Hero + section H2"이지 sibling 전용 분류 승격이 아님. `H3` DESIGN dest 3 / 원본 dest 3. `H4` DESIGN dest 1 / 원본 dest 3. `portal H2` dest 0. 값·섹션 표제 분류 침투 없음.
- **D2a.** 식별자 3인·세 도시 DESIGN/P/L dest 0. 동기(`belongs on her iPhone` / `Apple Watch quick-entry` / `personal and business spending`) dest 0. 소속 분류 신조어 dest 0. gitlab형 동기 잔존·hubspot형 소속 신조어 없음. 원형 그룹 라벨 3종은 처분 행에 이름하지 않음 — 원본 §13 머리글의 편집 세그먼트이지 발행 카피가 아니며, 라벨 재수록을 D2a로 지목하지 않는다.
- **A1.** 원본 YAML 컴포넌트 8레코드의 type/bg/fg/radius/padding/height/font/border/states/use/active가 대응 블록에 행으로 있다. `12px / 400 system-sans` 원문 바늘 DESIGN dest 0이지만 같은 블록 Font 행이 `12px system sans weight 400`으로 값을 분해해 둔다 — Text 행 부재(icook)가 아니다. YAML border/active 원문은 본문에서 hex를 백틱으로 감싸 dest 0이 되나 키 경로 행은 있다. `tokens.rounded.sm` 8 (8px) / `tokens.rounded.lg` 40 (40px) dest 1 each. 고치지 않음.
- **`#ffffff` 역할 분리 (wave 39 krafton 보고).** 같은 hex가 On-Dark White 토큰(heading ink, 라이브는 `rgba(255,255,255,0.87)`)과 Primary Gradient CTA / Outline / Nav / Accent Pill Text, 그리고 nav `active` 흰 글자에 붙는다. 원본 YAML이 `tokens.colors.on-dark`와 각 컴포넌트 `fg`를 따로 적었고, claim ledger가 그 경로를 가른다. 원장에 없는 파생 분리는 아님. 고치지 않음.
- **충돌 처리 일관 (wave 40 item 5).** gold `#f0c732`/`#f7ce36`, Pro ring 2-stop/3-stop/`150deg`, heading ink solid/rgba, tracking YAML/`-2.08px`, nav 3-label/4-label은 모두 keep-both. 곡선 3개는 출처 없는 템플릿이라 생략 — 같은 종류의 두 브랜드 표기 충돌이 아니다. 자리마다 다른 정책으로 보이지 않음.

AUDIT_DONE fixes=26
