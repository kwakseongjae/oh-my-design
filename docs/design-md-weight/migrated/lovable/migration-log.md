# Lovable migration log

- Source: `web/references/lovable/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/lovable/.verification.md` — **채택**(증거 등급). 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/lovable/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/lovable/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- 도메인: developer-tools (US). 토큰 표면은 공개 마케팅/제품 3로트 `https://lovable.dev/ko` + `https://lovable.dev/ko/pricing` + `https://lovable.dev/ko/product-managers`. 문서 `https://docs.lovable.dev/introduction/welcome` · `https://docs.lovable.dev/introduction/getting-started` 는 제품 맥락·워크플로 언어. YAML `ds.type` 없음 — 발행 1차 DS 사양 없음. sibling 전용 측정(italic WOFF2, selected-option `lab(47.9156 57.9535 -81.2975 / 0.08)` / `14px/450/21px`, coverage 100, `rgb()` 빈도)은 portable 토큰으로 올리지 않았다. 게이트 copy-loss `compared` 0 / `candidates` 169. A5a 손 대조 발행 카피 아래 목록 / 미생존 0. `--gate-only` PASS, `portable_core: true`.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 행은 산출 파일을 `grep -oF`한 뒤에 썼다(F2).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`) | 분리 → provenance · `name` 옮김 → DESIGN.md H1 | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Lovable Design System`. `id`/`country`/`category`/`homepage`는 provenance Identity 표. |
| YAML `primary_color: "#030303"` | 옮김 → Foundations Semantic color · 분리 → provenance Identity | 이중 목적지. DESIGN.md `#030303` dest **8** · provenance dest **8**. Catalog identity와 `tokens.colors.ink`를 합치지 않음 — 같은 hex, 역할은 Ink. |
| YAML `logo.type: favicon` / `https://lovable.dev/favicon-192x192.png` | 분리 → provenance · 옮김 → DESIGN.md Assets | 이중 목적지. 1차 favicon URL. 해당 URL DESIGN dest **1** · provenance dest **1**. |
| YAML `verified` / `omd` / `verification_v2` / `tokens.source: reconciled` / `tokens.extracted` / `tokens.note` / `components_harvested` | 분리 → provenance | freshness·증거 등급 원장(E1). `reconciled` DESIGN dest 0 · provenance dest ≥1. `components_harvested` DESIGN dest 0 · provenance dest ≥1. |
| YAML `ds.*` | 없음 | 원본에 `ds.type` 필드 없음. A1c 대상 없음. provenance가 부재를 기록. |
| YAML `tokens.colors` (**4키** — `ink` `canvas` `border` `overlay-border`) | 옮김 → Foundations `Semantic color` | 4키 전부. 산출 hex: `#030303` dest **8** · `#fafafa` dest **5** · `#eceae4` dest **4** · `#e7e7e6` dest **2**. canvas `#fafafa`와 on-action `lab(98.2716 0 0)`를 합치지 않음(A4). ink `#030303`과 header-action `lab(0 0 0 / 0.88)`를 합치지 않음. border `#eceae4`와 overlay-border `#e7e7e6`를 합치지 않음. |
| §2 Primary action `lab(0 0 0 / 0.88)` / on-action `lab(98.2716 0 0)` | 옮김 → Foundations Recorded component writings · Components Header primary action | YAML 색 키가 아님. `lab(0 0 0 / 0.88)` DESIGN dest **6** · provenance dest **5**. `lab(98.2716 0 0)` DESIGN dest **8** · provenance dest **6** (on-action text ≠ dialog-shadow 동일 lab). |
| §2 selected-option violet wash · retired coral `#ff6f61` | 옮김 → Foundations Recorded component writings · Experience Avoid · Named gaps | violet wash는 YAML 색 키 아님. `#ff6f61` DESIGN dest **2** · provenance dest **1**. sibling `lab(47.9156…)` DESIGN dest **0** · provenance dest ≥1. |
| YAML `tokens.typography` family + 6 roles (size / weight / **unitless** lineHeight / tracking / use) + §3 표 | 옮김 → Typography & Assets `Type roles` / `Family` | A1a: YAML lineHeight `1.1` dest **6** · YAML lineHeight `1.5` dest **4** (146×2 · 153 · 155; grep `1.5` dest **10** includes tracking `-1.5`/`-1.5px` and dialog-shadow `-1.5px`) · `1.6` dest **3**. tracking YAML `-1.5`/`-1.2`/`-0.9` 와 §3 `-1.5px` dest **2** (146 · 150; grep dest **4** includes shadow `-1.5px` ×2) / `-1.2px` dest **2** / `-0.9px` dest **2** keep-both. YAML use 6/6 착지. Navigation YAML use `Top-level public navigation trigger` dest **2** ≠ 컴포넌트 use `Top-level public navigation menu trigger` dest **2**. action YAML use `Current compact public action` dest **2** ≠ `Current header primary action` dest **2**. WOFF2 URL `https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2` DESIGN dest **2** (Family · Assets) · provenance dest **2** (E2a). |
| YAML `tokens.spacing` (xxs 4 … 3xl 32) | 옮김 → Foundations `Spacing` | 단위 없는 YAML 스텝을 §5 px 목록 옆에 병기. `tokens.spacing.sm: 8` dest **2** 를 `tokens.rounded.control: 8` dest **3** 과 합치지 않음(A4). `tokens.spacing.lg: 12` dest **2** ≠ `tokens.rounded.overlay: 12` dest **3**. `tokens.spacing.xl: 16` dest **3** ≠ body 16. `tokens.spacing.3xl: 32` dest **1** ≠ height 32px. |
| YAML `tokens.rounded` nav-trigger 0 / control 8 / option 6 / overlay 12 / full 9999 | 옮김 → Foundations `Shape` (+ Components) | 이중 목적지(값). `tokens.rounded.option: 6` DESIGN dest **1**. `tokens.rounded.full: 9999` dest **1** beside `9999px` dest **8**. 로컬 기하로 한정. |
| YAML `tokens.components` 5개 (`type: button` ×3, `tab` ×1, `dialog` ×1) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 보존. 산출 `Primitive type: \`button\`` **3** · `tab` **1** · `dialog` **1** = YAML과 동수. YAML `use`를 각 블록 Token-set use 행으로 병기. YAML font/padding/radius/height/states/bg/fg/border/shadow 바이트 형태 병기. |
| YAML `tokens.shadow.*` | 없음 | 원본 YAML에 shadow 키 없음. 다이얼로그 그림자는 컴포넌트 필드. `tokens.shadow` 경로 발명 0. |
| §4 하단 오버레이 한정 (menu list, option row, selected option, dialog는 pricing-route overlays) | 옮김 → Components & States 끝 (Pricing information dialog 다음) | 원문 문장 DESIGN dest **1** at 307. Capture record 끝이 아님(fitpet형 2차 목적지 아님 — 본문에 1회 실재, 절 이름만 틀림). 제네릭 메뉴 시스템 발명 없음. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4/6/8/10/12/16/24/32px 리듬. authenticated-app grid / dashboard / breakpoint 미확정은 원문대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Public base flat. overlay-local dialog shadow 전문 유지. |
| §7 Do 4항 | 옮김 → Experience `Application rules` | 산출 4항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음. B2a 완전형 한정을 절 머리에 배치. |
| §7 Don't 4항 | 옮김 → Experience `Avoid` | 산출 4항. B2a 완전형 한정을 절 머리에 배치. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms `Responsive behavior` | 데스크탑 `1440×900` dest **2**. 문서 preview web/mobile 전환은 제품 맥락이지 public breakpoint 표가 아님을 한정. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 겹치는 `#fafafa` / `#030303` / `#eceae4` / Camera Plain Variable / 8px near-black header action / square header triggers / pricing-local tabs and overlays 는 이미 Foundations/Components/Typography에 있음. Unique 수치 §9 전용 0. |
| §10 Voice & Tone — 홈 4구 + 문서 cadence | 옮김 → Content & Locales | “Build something Lovable” dest **2** · “Start with an idea” dest **2** · “Watch it come to life” dest **2** · “Refine and ship” dest **2** 바이트 그대로(A5). B2a 완전형 한정을 표 앞에 붙였다. |
| §11 Brand Narrative | 옮김 → Experience `Scope` (브랜드 서사 문단) · URL은 분리 → provenance `Narrative` | full-stack AI development platform dest **2** · static website generator dest **1** · frontend, backend, database, authentication, and integrations dest **2** · shared workspaces dest **2** · That product context is not evidence for private workspace controls DESIGN dest **1** · provenance dest **1** · private workspace controls DESIGN dest **1** · provenance dest **1** · authenticated product claims DESIGN dest **2** · provenance dest **1** · creation workflow, examples, and templates dest **2** / P dest **2**. 문서 URL DESIGN dest ≥1 · provenance dest ≥1. |
| §1 고유 구 (deliberately quiet interface, warm hairlines, contrast is purposeful, chat-driven way to create software, compact, legible public shell) | 옮김 → Experience `Scope` | 사실 인용. 각 DESIGN dest **1** · provenance dest **1**. |
| §12 Principles 4항 | 옮김 → Experience `Principles` | 산출 4항. B2a 완전형 한정을 머리에 배치. |
| §13 Personas | **삭제할 이름·전기 없음.** Audience에 공식 문서 그룹만 | D2 / D2a. 원본 §13 머리글이 official documentation task contexts rather than named personas. Experience `Audience`에는 그 그룹 수준 기록만. 식별자 DESIGN dest 0 · provenance dest 0 · 이 로그 dest 0. |
| §14 States | 옮김 → Components & States `Capture record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable 본문). hover/pressed/focus/selected/menu-open/dialog-open 경계 그대로. graph 위임 없음. generic Focus `oklab(...)` 는 `focus-visible`로 승격하지 않음(B1). |
| §15 Motion & Easing | 옮김 → Foundations `Motion` | “No motion token is promoted” 제약. duration/easing 미기록. 삭제할 무출처 커브 없음. `cubic-bezier` DESIGN dest **0**. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations `Motion` + Governance Named gaps | 원본에는 다섯 증거 종류 게이트 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 이 전문이 산출 DESIGN.md에 실제로 존재함을 확인한 뒤 이 행을 적었다 (`transition properties` DESIGN dest **2**). |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 | 옮김 → Experience `Scope` | 세 `/ko` 로트를 토큰 표면으로, docs chrome을 서사로 분리 명시. |
| §1 인과·해석 문장(quiet shell, noisy AI motif) | 옮김 → Experience `Scope`, 한정 부착 | B2a 완전형 인접 배치. 원본 측정·사실 문장은 같은 절에 남김. |
| §1 Key characteristics 5항 | 옮김 → Experience `Distinctive traits` | 산출 5항. B2a 완전형 한정을 머리에 배치. |
| §3 Font evidence 표 5행 | 옮김 → Typography & Assets Font evidence | 원문 표. 758 visible uses. Roboto Mono Variable declared-only. |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·출처 원장(E1). Tier 2 getdesign.md/lovable DESIGN dest **0** · provenance dest ≥1. |
| Sibling `.verification.md` — Proof 머리말·raw samples·Tier 2·Conflict matrix | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건, 구조 분류 승격 0건**(B1). sibling 전용 italic WOFF2 DESIGN dest **0** · provenance dest **1**. `14px/450` DESIGN dest **0** · provenance dest **3**. `coverage 100` DESIGN dest **0** · provenance dest **2**. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 완성본을 처음부터 다시 읽고 인과·해석·판단 문장마다 근거 class를 자문했다. 한정을 붙인 자리 **22곳**을 provenance `Derived editorial inventory`에 색인했다. 완전형 짝: 단수 `"derived editorial implementation inference from the verified surfaces"` DESIGN dest **20** + 복수 `"derived editorial implementation inferences from the verified surfaces"` dest **2** = 22. `"not Lovable-authored or a separately published UI specification"` dest **22**. `separately published` dest **23** (23번째는 Content `separately published copy manual`, 같은 완전형 줄). 자리 수 22 = 원장 22 (209–230). F3가 Semantic · Shape · Type roles · Capture 네 자리의 이름 범위를 본문 세 번째 부류에 맞춰 넓힘(발생 수 +0). Principles 안팎: Scope 표면 귀속 · Scope 레이어 읽기 · Scope 서사 비토큰 · Primary tasks 선정 · Audience 공식 문서 그룹 · Distinctive traits 분류 · Principles · Application rules · Avoid · Semantic color 비해합(+ lab() pair = component fields, on-action lab ≠ shadow lab, warm surfaces component-local) · Spacing keep-both · Shape 로컬 기하(+ 6px option ≠ menu-system token) · Elevation overlay-local · Motion 값 없음+B3 · Font evidence 분류 · Family canonical-because · Type roles keep-both(+ body.size 16 ≠ spacing.xl 16, action.size 14 ≠ spacing) · Assets favicon/WOFF2 · Capture record 역할 판정/YAML keep-both(+ Focus ≠ focus-visible, pressed/selected ≠ extra Core §4.4 rows) · Layout 클러스터+desktop-capture · Responsive `1440×900` · Content 큐 해석. 발행 1차 DS 사양 없음 — 예문 형태 `not Lovable-authored or a separately published UI specification`. `check-limiter-ledger.mjs lovable` 본문 22 = 원장 22 (209–230).

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -oF -- | wc -l`로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(identity name, `#030303`, favicon URL, WOFF2 URL Family+Assets/provenance, §14 상태, B3, §1 고유 구). `reconciled` · `ds.type` 부재 서술 · italic WOFF2 · `14px/450` · `coverage 100` 은 provenance only(DESIGN dest 0). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 전문 2회(`transition properties` DESIGN dest **2** + `animation name` dest **3** + `duration` + `easing` + `reduced-motion behavior` dest **3**, Motion · Named gaps), primitive type 3종 동수(`Primitive type: \`button\`` dest **3** · `tab` **1** · `dialog` **1**; exact `type: button` DESIGN dest **0**), YAML lineHeight `1.1` dest **6** / `1.5` dest **4** / `1.6` dest **3**, YAML `use` 11/11, §14 관측 목록, cubic-bezier dest 0.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 hex 4종 (`#030303` `#fafafa` `#eceae4` `#e7e7e6`) | 4/4 이 산출 `DESIGN.md` 본문에 존재 — 손실 0. |
| portable 본문의 hex 발명 | 0건. 본문의 `#ff6f61` 는 원본 Don't의 은퇴 토큰(생략 대상으로 이름을 남김). 그 외 `#rrggbb`가 legacy 토큰 집합의 부분집합. |
| unitless lineHeight (A1a) | YAML `1.1` dest 6 · YAML `1.5` dest 4 · `1.6` dest 3 비율로 생존. §3 px 병기. grep `1.5` dest 10 is not the YAML lineHeight count. |
| primitive type (A1b) | button 3 · tab 1 · dialog 1 — legacy YAML 실측과 동수. |
| YAML `use` (항목 11) | 11/11 착지 (`check-yaml-use-landing.mjs lovable` OK). |
| `[FILL IN]` | 원본 0건, 산출 DESIGN.md 0건. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | 0건. `not-applicable` 행은 전부 역할 사유(menu trigger · destination action · tab · combobox trigger · information overlay). 머리의 "Absence of a capture is not a `not-applicable` reason" 1회는 금지 사유가 아님. |
| C2 | 다섯 선언 컴포넌트 모두 loading/error/success 는 역할로 `not-applicable`. primitive 일괄 개방 아님. `loading \| applicable` dest **0** · `loading \| not-applicable` dest **5** · `error \| applicable` dest **0** · `error \| not-applicable` dest **5**. |
| C3 | "This is not a complete state-coverage claim." 를 Components Capture record에 명시. 완료 주장 0건. |
| C4 | 선언 5개 모두 YAML type 있음. kind 발명으로 map을 연 컴포넌트 0. |
| D2 / D2a | §13 식별자·동기 스케치·소속 재분류 본문 0 · provenance 0 · 이 로그 0. Audience는 원본이 공식 문서 그룹으로 세운 문장만. |
| D1 | `native-client` / `storefront` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `14px radius with 16px padding` DESIGN dest 0. 원본이 세운 authenticated builder / native clients / generated app / documentation chrome / `1440×900` 만 유지. |
| A5 발행 문자열 전수 대조 (게이트 바늘 밖까지) | legacy 본문과 sibling에서 발행 문자열을 추출해 산출 3파일에 대조 — 미생존 **0건**. 분모는 아래 목록. |

### A5a 손 스윕 목록 (추출 4 / 미생존 0)

발행 카피만. 설명문·점 경로·폰트 스택·YAML `use`·제3자 매체명·declared-only 페이스 이름은 바늘이 아니다.

Legacy 본문 (4): `Build something Lovable` · `Start with an idea` · `Watch it come to life` · `Refine and ship`

Sibling 전용 발행 라벨: 없음(같은 홈 4구를 가리킴). italic WOFF2·coverage 100·`14px/450` 은 발행 카피가 아님.

재대조: 위 레거시 4건은 DESIGN.md에서 각 ≥1회. 미생존 0.

### F2 dest 재실측 (`grep -oF -- | wc -l`, 파일별)

본문 작성 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다. 로그 mention은 use가 아니다.

| 바늘 | DESIGN dest | provenance dest |
|---|---:|---:|
| `#030303` | 8 | 8 |
| `#fafafa` | 5 | 4 |
| `#eceae4` | 4 | 5 |
| `#e7e7e6` | 2 | 1 |
| `lab(0 0 0 / 0.88)` | 6 | 5 |
| `lab(98.2716 0 0)` | 8 | 6 |
| `Camera Plain Variable` | 25 | 8 |
| `1.1` | 6 | 4 |
| `1.5` | 10 | 4 |
| `1.6` | 3 | 2 |
| `-1.5px` | 4 | 1 |
| `Build something Lovable` | 2 | 2 |
| `warm hairlines` | 1 | 1 |
| `contrast is purposeful` | 1 | 1 |
| `chat-driven way to create software` | 1 | 1 |
| `creation workflow, examples, and templates` | 2 | 2 |
| `full-stack AI development platform` | 2 | 0 |
| `private workspace controls` | 1 | 1 |
| `That product context is not evidence for private workspace controls` | 1 | 1 |
| `authenticated product claims` | 2 | 1 |
| `transition properties` | 2 | 0 |
| `derived editorial implementation inference` | 22 | 1 |
| `derived editorial implementation inference from the verified surfaces` | 20 | 1 |
| `derived editorial implementation inferences from the verified surfaces` | 2 | 0 |
| `https://lovable.dev/favicon-192x192.png` | 1 | 1 |
| `https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2` | 2 | 2 |
| `CameraPlainVariable-c48bd243` | 2 | 3 |
| `CameraPlainVariableRegularItalic` | 0 | 1 |
| `14px/450` | 0 | 3 |
| `coverage 100` | 0 | 2 |
| `tokens.spacing.xl: 16` | 3 | 1 |
| `native-client` | 0 | 0 |
| `cubic-bezier` | 0 | 0 |

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

의미 검토가 소실로 지목한 한 결함만 고침. 토큰 값·컴포넌트 표 구조·상태 applicability·원본 미수정. 한정·원장 행 추가 없음 (22=22 유지).

### 결함 1 — A1 원본 고유 경계 구 소실

원본 §11 `:299` `That product context is not evidence for private workspace controls, so this reference keeps the public marketing/product capture distinct from authenticated product claims.` 를 Experience Scope 서사 문단에 원문 표기로 복원. 앞문장(shared workspaces / GitHub / governed and deployed)과 뒷절 B2a 한정은 그대로 두고, 그 사이에 원본 문장을 사실 인용으로 넣었다. 한정 불필요. provenance Claim ledger §11 행에 같은 원문 색인.

판정: **사실 인용**, 한정 불필요. 원본이 세운 공개 캡처 / 인증 제품 클레임 경계를 그대로 옮긴 것이지, 새 플랫폼을 세운 것이 아니다.

### F2 dest 재실측 (`grep -oF -e '<패턴>' <파일> | wc -l`)

이 절을 쓴 뒤 세 파일을 다시 센 값. DESIGN dest가 본문 생존이다. 기존 F2 dest 표의 다른 바늘 dest 횟수는 불변.

| 바늘 | DESIGN dest | provenance dest | migration-log dest |
|---|---:|---:|---:|
| `That product context is not evidence for private workspace controls` | 1 | 1 | 4 |
| `private workspace controls` | 1 | 1 | 7 |
| `authenticated product claims` | 2 | 1 | 4 |
