# Lablup migration log

- Source: `web/references/lablup/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/lablup/.verification.md` — **존재함** (`ls -la`로 확인, 6,710 B, 64 lines, SHA-256 `62a8ac9aa1a8e7c5bd34349d66e004db3497845027a653f75fb6fd39d4160db7`). 전문 판독, **증거 등급으로만 채택**. 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/lablup/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/lablup/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Date: 2026-08-29
- Worker: grok-4.6 T2
- Portable Core: **pass** — `scripts/design-md-core.cjs` `inspectDesignMd` + `evaluatePortableCore`, `portable_core: true`, `level: "portable-core"`, `reasons: []`, placeholder 0. Claim `lang` 전부 `en`.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 쓰기 전에 `grep -oF`로 목적지 파일에서 확인했다.

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `coverage`: `copy-loss` **compared 1 / candidates 199**. 원본은 라틴 본문 + 짧은 한글 사명/인명이라 비라틴 바늘이 거의 없다. 기계가 대조한 1개는 `"오류가 발생했습니다"` (길이 ≥4 한글 런). `verdict: PASS`는 「대조한 바늘 중 잃은 것이 없다」이지 「카피가 보존됐다」가 아니다. A5 준수의 근거는 게이트가 아니라 아래 손 스윕과 `latin-copy-audit`이다.

손 스윕 (원본 `DESIGN.md` + sibling `.verification.md`에서 인용 문자열을 전수 추출한 뒤, 브랜드가 발행한 라벨·CTA·슬로건·마이크로카피·사명·sibling이 측정 대상으로 명기한 카피만 분모):

| 단계 | 수치 |
|---|---|
| 추출 | 게이트 `quotedAll` 199 + sibling 인용. `latin-copy-audit` 후보 **64** (high 31 / medium 33) |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | 아래 목록 **36**개 |
| 미생존 | **0** (`python3` `.count` / `grep -oF` 실측). `latin-copy-audit --brand lablup` → `withLoss: 0` / `totalLost: 0` |

바늘과 착지 (본문 `.count`, DESIGN / provenance):

| 바늘 | DESIGN | provenance |
|---|---:|---:|
| `래블업` | 3 | 1 |
| `신정규` | 2 | 1 |
| `Jeongkyu Shin` | 3 | 1 |
| `Joongi Kim` | 1 | 1 |
| `Jonghyun Park` | 1 | 1 |
| `Make AI infrastructure accessible` | 4 | 2 |
| `Lablup — Make AI infrastructure accessible` | 1 | 2 |
| `Making AI possible where it wasn't` | 2 | 1 |
| `The Operating System for AI Infrastructure` | 4 | 1 |
| `We untangle complex AI infrastructure with software, for a tomorrow where AI reaches everyone` | 2 | 1 |
| `AI infrastructure is never a solo effort. We build alongside the hardware, storage, cloud, and service partners...` | 1 | 1 |
| `View all partners` | 3 | 2 |
| `About Lablup` | 5 | 2 |
| `Contact Us` | 4 | 2 |
| `View All` | 4 | 2 |
| `Accept All` | 4 | 3 |
| `Customize` | 1 | 3 |
| `Join our team` | 1 | 2 |
| `Latest from Lablup` | 1 | 1 |
| `Backend.AI` (제품명; nav 라벨 `"Backend.AI"` 포함) | 본문 다수 | 본문 다수 |
| `"About us"` | 1 | 0 (DESIGN Top Nav Link에 바이트 보존; 원장은 nav 라벨을 컴포넌트 레코드로 가리킴) |
| `"Media center"` | 1 | 0 |
| `"Stories"` | 1 | 0 |
| `Careers` | 6 | 4 |
| `Latest news` | 2 | 1 |
| `Trusted by` | 2 | 3 |
| `Better together` | 1 | 1 |
| `Need a hand` | 1 | 3 |
| `Backend.AI FastTrack` | 1 | 1 |
| `Backend.AI:GO` | 1 | 1 |
| `AI:GO` | 2 | 2 |
| `Sovereign AI` | 1 | 1 |
| `오류가 발생했습니다` | 2 | 0 (State treatments + Locale; 원장은 §14 처분 행으로 가리킴) |
| `revolutionary` | 1 | 0 |
| `game-changing` | 1 | 0 |
| `"required"` | 1 | 0 |
| `possible / where it wasn't` | 1 | 0 |

바늘이 아니라고 판정해 제외: hex·치수·CSS·셀렉터·점 경로·폰트 스택·카피에 대한 서술·원본이 제3자로 격리한 Tier 2 문자열·§13 가상 전기 안의 동기 문구.

sibling 전용 카피(`Lablup | Make AI Accessible`, `Better, together`, `Need a hand with your AI infrastructure?`, `Trusted by leading organizations`, `Lablup adds Intel Arc Pro B70 support…`, `Product / Explore Backend.AI`, `Lablup Blog`)는 원본 DESIGN.md가 세우지 않은 측정이라 **승격하지 않았고** provenance sibling-only 표에만 둔다. YAML 약칭(`Better together` / `Need a hand` / `Trusted by`)은 원본 토큰 블록의 문자열이라 type-role Notes에 바이트 보존.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Lablup Design System`. `래블업`은 Experience Scope + Content Locale + provenance Identity. `primary_color` `#28ab6c`는 provenance Identity와 DESIGN.md Foundations Emerald 양쪽. `logo.type: github` / `slug: lablup`은 DESIGN.md Assets에 카탈로그 포인터로 한 줄, 바이트·픽셀·Google-favicon 대안은 provenance `Logo decision`에만. `country` `KR` · `category` `backend-devops` · `homepage`는 provenance Identity. |
| YAML `verified` / `added` / `omd: "0.1"` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: `components_harvested: true`와 `tokens.source: live-extract`를 Identity 표에서 누락하지 않음 (`live-extract` DESIGN 0 / provenance 2; `components_harvested` DESIGN 0 / provenance 2). |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance (인용 블록, 전문) · 값은 옮김 → DESIGN.md | 이중 목적지. 안의 값(`#28ab6c` `#002926` `#03b5e5`, 999px pills, 4px utility, 두 도메인)은 Experience Scope·Foundations·Components에 별도로 실려 있다. |
| YAML `tokens.colors` (**13키** — `primary` `teal` `cyan` `ink` `dark-card` `canvas` `surface` `surface-grey` `hairline` `muted` `faint` `mint` `dark-grey`) | 옮김 → Foundations `Semantic color` · 분리 → provenance claim ledger | 13 hex 전부 본문 role 불릿에 존재 (`#28ab6c` DESIGN 17 / `#002926` 15 / `#03b5e5` 7 등, `grep -oF` 실측). |
| §2 Color Palette & Roles — 3개 소제목 · 불릿 13개 | 옮김 → Foundations `Semantic color` | Primary & brand 3 / Neutral & surface 6 / Text hierarchy 5. `#000000`의 Ink 텍스트 역할과 black-pill fill을 합치지 않음(A4). |
| YAML `tokens.typography.family` (`display: "Google Sans"`, `body: "Pretendard"`, `docs: "Poppins"`) + §3 Font Family (폴백 `PyeojinGothic` / `Pretendard`, 라이브 docs `Pretendard, Poppins`) | 옮김 → Typography & Assets `Font evidence` · `Family` | YAML docs 키 `Poppins`와 라이브 스택 `Pretendard, Poppins`를 병합하지 않고 둘 다 남김. 폴백을 브랜드 페이스로 제시하지 않는다는 경계를 Font evidence 행과 Family 불릿 양쪽. |
| YAML `tokens.typography` 7역할 (size / weight / **unitless** lineHeight / use) + §3 Hierarchy 표 7행 | 옮김 → Typography & Assets `Type roles` | A1a: `1.05`와 `1.5`를 px로 바꾸지 않음 — DESIGN `1.05` 2, `1.50` 1, 문구 `lineHeight\` is \`1.5\` 1. rem 등가 (`5.00rem` `3.25rem` `2.25rem` `2.13rem` `1.19rem` `1.00rem` `0.81rem`) 보존. Button YAML weight `700`과 표 `500-700`을 병합하지 않고 표에 `500-700`, Notes에 YAML 700. 항목 11: Display Hero·Large는 YAML `use` 병기. Section·Caption도 같은 방식으로 YAML 원문 `Section headings (Latest news / Trusted by)` · `Consent / utility button label`을 표 쪽 `Section heads (Latest news / Trusted by)` · `Consent + utility button label` 옆에 병기 (개정: 의미 검토 FAIL 항목 11). |
| §3 Principles 4항 | 옮김 → Typography & Assets typography rules | 4항. 항목 안의 인과가 편집적 읽기라 B2a 완전형 한정을 절 머리에 인접 배치. |
| YAML `tokens.spacing` 8키 (`xs: 4` `sm: 8` `md: 14` `base: 16` `lg: 24` `xl: 32` `xxl: 40` `section: 64`) + §5 Spacing System | 옮김 → Foundations `Spacing` | `md: 14`를 `base: 16`과 합치지 않음. `tokens.spacing.md` DESIGN 1. |
| YAML `tokens.rounded` 6키 (`xs: 2` `sm: 4` `md: 8` `lg: 18` `xl: 24` `pill: 999`) + §5 Border Radius Scale | 옮김 → Foundations `Shape` | `pill: 999`는 Shape 값 칸 `tokens.rounded.pill): 999` (DESIGN 1). 캐러셀 `50%`와 합치지 않음. |
| YAML `tokens.shadow.none: "none"` + §6 Depth 표 4행 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 4행 표 + `tokens.shadow.none` `none` (DESIGN 1 / provenance 1). Philosophy의 목적 부여 문장은 B2a 한정 뒤에 둠. `box-shadow: none` DESIGN 2. |
| YAML `tokens.components` 10개 (`type: button` ×6, `card` ×3, `listItem` ×1 — `grep -oE 'type: [a-zA-Z]+' \| sort \| uniq -c` 실측; `type: github` 1건은 logo) | 옮김 → Components & States · 분리 → provenance | 이중 목적지(E2a). A1b: `Primitive type: \`button\`` 6 · `\`card\`` 3 · `\`listItem\`` 1. 배지 없음. 각 블록에 `Token-set use:` 행으로 YAML `use` 바이트 보존 (10문자열 DESIGN dest 1 each). provenance `Token-block component strings (verbatim)`에 10키 전부 바이트 보관. |
| §4 Buttons 6종 (Teal / Black / White Inverse / Ghost / Emerald Accent / Emerald Outline) | 옮김 → Components & States | YAML 5종 + §4에만 있는 Emerald Outline (`Customize`) — `Not in the token set`. padding/font/height 전부 보존 (`16px 36px` `14px 24px` `18px 40px` `14px 34px` `7px 16px`, heights `51px` `47px` `55px` `49px`). |
| §4 Cards 4종 (Light / Dark / Teal / Blog) | 옮김 → Components & States | YAML 3종 + §4에만 있는 Teal Feature Card — `Not in the token set`. C4: 네 카드 모두 kind·applicability map 생략 (`Kind: omitted` DESIGN 4). |
| §4 Blog Link Card — YAML no `fg`; §4 Text `#000000`; §9 body `#606060` Pretendard 16px | 옮김 → Components `Blog Link Card` (A3) | §9에만 있던 본문색 `#606060`을 컴포넌트 레코드에 옮김. 제목 `#000000`과 합치지 않음(A4). |
| §4 Navigation — Carousel Circle + Top Nav Link | 옮김 → Components | Carousel은 YAML `nav-circle` (`type: button`). Top Nav는 토큰 블록 없음 — `Not in the token set`. 라벨 `"Backend.AI", "About us", "Media center", "Stories", "Careers"` 바이트 보존. Active `#28ab6c`는 additional observed state. |
| §4 Docs Link | 옮김 → Components | `Primitive type: \`listItem\``. `#03b5e5` · `18px / 400` / Pretendard. |
| §4 하단 footer 블록 (**Verified** / Tier 1 3 URL / Tier 2 2건 / Conflicts unresolved: none) | 분리 → provenance | freshness·출처 원장(E1). |
| §5 Layout Principles (Spacing / Grid / Whitespace / Radius) | 옮김 → Layout & Platforms + Foundations | Grid 4불릿은 Layout. Whitespace 3불릿은 Layout (B2a 한정 인접). Spacing·Radius는 Foundations. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | 위 shadow 행과 동일 착지. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 실측 8항. Governance 통제 문구에 넣지 않음(제약 3). B2a 한정 절 머리. |
| §7 Don't 8항 | 옮김 → Experience `Avoid` | 실측 8항, 원문 그대로. |
| §8 Responsive Behavior (Breakpoints 3행 / Touch Targets 3항 / Collapsing 4항 / Image 2항) | 옮김 → Layout & Platforms | 3행 그대로 (`<640px` / `640-1024px` / `1024-1440px`). 터치 타깃 높이는 컴포넌트 측정. 브레이크포인트 표는 단일 데스크톱 뷰포트 한정 (sibling `1440×900`은 provenance에만). |
| §9 Agent Prompt Guide — Quick Color Reference | 삭제 | 같은 값의 도구용 재진술. 열거 hex가 전부 Foundations에 있음. |
| §9 Example Component Prompts 4개 · Iteration Guide 7항 | 삭제 + 고유값 1건은 이동(A3) | 복붙용 프롬프트 포장과 도구별 workflow는 받을 슬롯이 없으므로 삭제. §9에만 있던 Blog card body `#606060` / Pretendard 16px는 Components로 이동. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone 6행 표 | 옮김 → Content & Locales | 표 6행 그대로. voice 해석은 원본 닫는 주석이 editorial reading이라 B2a 완전형 한정을 표 바로 앞 문단에 붙임. |
| §10 Voice samples 4건 (verbatim) | 옮김 → Content & Locales (+ provenance) | A5: 4건 전부 바이트 그대로. `*(verified live 2026-06-26)*` 표기만 provenance Freshness로 분리. |
| §10 Forbidden register | 옮김 → Content & Locales | `"revolutionary"` · `"game-changing"` 바이트 보존. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (narrative 문단) · 증거 등급은 provenance | 2015 / 신정규 / Jeongkyu Shin / Joongi Kim / Jonghyun Park / Backend.AI FastTrack / AI:GO / Sovereign AI / Gangnam / San Jose / Presidential Commendation / POSTECH / Google Developer Expert 보존. 원본 `:384` `frustrated by the repetitive technical hurdles of running computation in research environments`와 `:386` `for national and consortium-scale deployments`는 사실 인용(원본 §11 고유 구)이라 한정 없이 Scope 서사에 복원. 닫는 주석의 public-fact 한정도 본문에 남김. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 실측 5항. B2a 예문 형태(`These 5 items are a derived editorial… not Lablup-authored or a separately published UI specification`)를 절 머리에 인접 배치. 닫는 주석이 editorial이라 지목한 `"one action, one green"` · `"untangle, don't decorate"`를 그 한정 문장에서 이름으로 지목. |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. fictional personas 3인, §13. 이름·나이·도시·전기는 본문에 승격하지 않았고 provenance에도 재수록하지 않음. 삭제 처분은 provenance Omission ledger의 무식별 행. Experience `Audience`에는 원본 머리글이 독립적으로 세운 그룹(ML platform engineers, research-lab infra leads, enterprise AI teams)만. |
| §14 States 10행 | 옮김 → Components `State treatments` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 10행 값·카피 그대로 — `"오류가 발생했습니다"` · `"required"` · `#f3f3f3` 스켈레톤 · emerald fade disabled · Focus 1px `#28ab6c`. Focus는 generic Focus로 기록하고 `focus-visible` 행에 색값을 넣지 않음(B1). graph 위임 없음. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 220ms / `motion-slow` 360ms) | 옮김 → Foundations `Motion` | 3행 그대로 (`120ms` `220ms` `360ms` 각 DESIGN 1 / provenance 0). 규칙집 삭제 범위는 **무출처 커브뿐**. sibling method/raw sample에 transition 관측이 없으므로 B2a 한정을 절 머리에 붙임. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. 실측: 원본 각 1 · 산출 `DESIGN.md` **0** · `provenance.md` 1행이 세 값을 담음. `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 예시 표와 동일. |
| §15 Motion rules 4항 + reduced-motion + hero word swap `"possible / where it wasn't"` | 옮김 → Foundations `Motion` | signature motion(히어로 워드 스왑)과 duration은 T1-3 제약 5에 따라 보존. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 그 전문이 산출 `DESIGN.md` 179행에 **1회** 존재함을 `grep`으로 확인한 뒤 이 행을 적었다. 약화 문구(“공식 출처로 검증될 때까지”)는 쓰지 않았다. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 두 표면 분리, 값에 도메인 부착. 성격 규정(engineered, trustworthy, infrastructure-grade)에는 B2a 완전형 한정 인접. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 실측 8항. |
| 원본 H1 `# Design System Inspiration of Lablup` | 삭제 → provenance `Omission ledger`에 기록 | Core v2 identity 라인 `# Lablup Design System`으로 대체. |
| 원본 닫는 HTML 주석 (“OmD v0.1 Sources — Philosophy Layer”) | 분리 → provenance `Source closing note` | Tier 1 라이브 측정 재진술과 §10 / §11 / §13 / interpretive claims의 증거 등급 배정. |
| Sibling `.verification.md` — Proof·method·raw samples·Tier 2·Conflict matrix 6행·Logo 판정 | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건** (sibling-only 표의 각 값이 DESIGN 0). 뷰포트 `1440×900`은 본문 「one desktop viewport」 한정의 근거로만 쓰이고 숫자는 provenance에만. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a | 검증 값 손실 0 · 발명 0 · unitless `1.05` / `1.5` 비율 유지 · `[FILL IN]` 0 | DESIGN `FILL IN` 0 · `1.05` 2 · `lineHeight\` is \`1.5\` 1 |
| A1b | primitive type `button` 6 / `card` 3 / `listItem` 1 컴포넌트별 보존 | `Primitive type: \`button\`` 6 · `\`card\`` 3 · `\`listItem\`` 1 |
| A1c | `tokens.source` · `components_harvested` · `omd` · `verified` · `added` 원장 보존 | provenance Identity 표 |
| A2 | §14 10행 본문 보존 · §9 도구 프롬프트 삭제 · 보편 규칙만 Governance | State treatments 10행; Governance 통제 문구 4블록 |
| A3 | §9 고유값 1건(Blog body `#606060`) 이동 | Blog Link Card 레코드 |
| A4 | `#000000` 텍스트 역할과 black-pill fill을 합치지 않음; Blog 제목 `#000000`과 본문 `#606060`을 합치지 않음 | Foundations Semantic color 한정 문장 + Blog Link Card |
| A5 / A5a | 위 A5a 절 — 바늘 36 / 미생존 0 | 손 스윕 표 |
| B1 | generic `Focus` 관측을 `focus-visible` treatment로 승격하지 않음 | State treatments Focus 행이 관측을 분리 기록. 어떤 `focus-visible` 행에도 `#28ab6c` 없음 |
| B2 / B2a | 해석·인과 문장 31개 위치에 완전형 한정 인접 배치 | DESIGN `derived editorial implementation inference` = 31 (`grep -o` 파일별; 복수 `inferences` 5는 단수 패턴의 접두 일치를 포함). provenance inventory 31 data rows (263–293). 발행 1차 DS 없음 → 예문 형태 `not Lablup-authored or a separately published UI specification` |
| B3 | 다섯 증거 종류 전문 + 컴포넌트별 게이트 | DESIGN 179행 1회 (E2c 대조 완료) |
| C1 | `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 | 각 not-applicable 사유가 역할(destination / arrow / dialog trigger) |
| C2 | 역할 판단으로 열고 닫음 | `loading \| applicable` 1 (Emerald Accent Accept All, 동의 커밋). `loading \| not-applicable` 8 (마케팅 목적지 필 4 · Customize dialog trigger · carousel arrow · top nav · docs link). primitive 종류만으로 일괄 개방하지 않음 |
| C3 | coverage 완료 주장 없음 | 「This is not a complete state-coverage claim.」 DESIGN 1 |
| C4 | interactive-kind 근거 없는 카드 4종은 kind·map 생략 | `Kind: omitted` 4 |
| D1 / D1a | 부정 claim과 Named gaps 명사구가 전부 원본이 세운 대상 | gaps: 무출처 커브, hover/press/focus-ring, focus-visible vs Focus, 카드 interactive kind, 토큰 미등재 primitive type 3종, §14 미컴퓨트, YAML docs family vs live stack. `native-client` / `authenticated` / `parity` DESIGN 0 |
| D2 / D2a | 가상 페르소나 승격·재수록 없음. 삭제 처분 행은 무식별 | Omission ledger는 「three named fictional archetypes with ages, cities, and motivations」. 식별자 문자열을 로그·원장 Item 칸에 옮기지 않음 |
| E1 | 원장·freshness·Proof는 provenance, 권위·증거 종류·경계는 본문 | provenance Identity/Freshness/Sibling; 본문 Scope 두 도메인 · Font evidence · How to read · Motion 머리 |
| E2 / E2a–d | 이 표의 각 행을 grep 뒤에 씀. 이중 목적지는 둘 다. 부재 단언은 같은 행이 항목을 나열하지 않음 | 이 파일 |
| E3 | 게이트 회피 없음 | hex를 공백 삽입 등으로 변형하지 않음 |

## 게이트 결과

`node test-v2/tools/migrate-reference.mjs --brand lablup --gate-only` → `verdict: PASS`, `problems: []`.

`coverage`: `copy-loss` **compared 1 / candidates 199**. 이 PASS는 「대조한 바늘 중 잃은 것이 없다」이고, 그 1개는 `"오류가 발생했습니다"`. 나머지 198개 인용은 라틴이라 바늘이 되지 않았다. A5 준수의 근거는 게이트가 아니라 위 A5a 손 스윕(발행 바늘 36 / 미생존 0)과 `latin-copy-audit` (candidates 64 / lost 0)이다.

Portable Core: `scripts/design-md-core.cjs` `inspectDesignMd` + `evaluatePortableCore` → `portable_core: true`, `level: "portable-core"`, `reasons: []`, placeholder 0. Claim `lang` 전부 `en`.

## 개정 — 의미 검토 FAIL 2 (2026-08-29)

의미 검토가 지목한 두 결함만 고침. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 미수정. 한정·원장 행 추가 없음 (31=31 유지).

### 결함 1 — §11 고유 사실 (A1)

복원 위치: DESIGN Experience Scope 서사 (`:17`). provenance Narrative 색인에도 같은 두 구를 적음. 원장 Derived editorial inventory는 그대로.

| 문자열 | 원본 | 판정 |
|---|---|---|
| `frustrated by the repetitive technical hurdles of running computation in research environments` | §11 `:384`, 창업 문장의 분사 수식 | **사실 인용.** 원본이 팀을 `lab researchers frustrated by…`로 적는다. 산출은 `lab researchers`만 남기고 분사절을 잘랐다. 같은 문단의 기존 한정은 「lab-researcher origin을 Backend.AI가 존재하는 이유로 읽기」라는 *편집적 읽기*를 덮는다. 분사절 자체는 그 읽기가 아니라 원본이 적은 창업 동기 구이므로 한정 없이 복원. |
| `for national and consortium-scale deployments` | §11 `:386`, Sovereign AI 병행 괄호 | **사실 인용.** FastTrack `(MLOps pipelines)` · AI:GO `(personal and desktop AI)`는 산출에 남고 Sovereign AI 범위 수식어만 빠졌다. 형제 항목이 수식어를 유지하므로 의도적 생략이 아니라 누락. 원본 고유 범위 구이므로 한정 없이 복원. |

편집적 해석이 아니므로 완전형 한정과 원장 행을 붙이지 않음.

### 결함 2 — Type roles YAML `use` 병기 (항목 11)

같은 표에서 Display Hero·Large는 `YAML use:`를 병기하고 Section·Caption은 §3 표 짧은/다른 표기만 남겼다. 항목 11은 긴 쪽 병기. Section·Caption 행에 YAML 원문을 Hero/Large와 같은 형식으로 병기:

- 표 `Section heads (Latest news / Trusted by)` + YAML `Section headings (Latest news / Trusted by)`
- 표 `Consent + utility button label` + YAML `Consent / utility button label`

값 변환 없음. 기존 Type roles 한정(YAML 단위 비율·button 700 keep-both)이 이미 그 표의 두 기록을 덮으므로 한정·원장 행을 늘리지 않음.

## 개정 — 2라운드 (의미 검토 FAIL 2 재검토, 2026-08-29)

2라운드 판정이 지목한 두 결함만 고침. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 미수정. 한정·원장 행 추가 없음 (31=31 유지).

### 결함 1 — Scope 본문 16px 절 융합 해제 (A1/A4, 항목 9·10)

Experience Scope의 `Korean-optimized fallback behind Google Sans`를 원본 `:66` 표기 `Korean-optimized fallback stack`으로 되돌림. Type roles Hangul-first 규칙의 `behind the Latin-first Google Sans display face`는 그대로.

### 결함 2 — A5a dest 갱신 (E2, 항목 6)

1라운드 YAML `use` 병기 후 DESIGN dest가 1→2가 됐는데 A5a 표 dest는 1로 남았다. 표만 실측에 맞춤. 본문 추가 없음.

갱신한 dest 행 (`grep -oF -e` 실측):

| 바늘 | 옛 DESIGN dest | 새 DESIGN dest | provenance dest |
|---|---:|---:|---:|
| `Latest news` | 1 | 2 | 1 |
| `Trusted by` | 1 | 2 | 3 |
