# Panasonic migration log

- Source: `web/references/panasonic/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/panasonic/.verification.md` — **존재함**(dotfile). 전문 판독, **증거 등급으로만 채택**. portable 토큰 승격 0건.
- Destination: `docs/design-md-weight/migrated/panasonic/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/panasonic/provenance.md`
- Date: 2026-09-02
- Worker: grok-4.6 T2
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: consumer-tech / Panasonic Holdings public-web. 발행 1차 UI 사양 없음. B2a는 표준형: `not Panasonic-authored or a separately published UI specification` (24=24).

Source SHA-256 `a080e3dee5d5bc181a08d267e1054f654c4ddd0d8cc521c3764264e4c5f2ba97`. Sibling SHA-256 `b34cc25af5243be2e9e97f9b99ab9fbd75ed6440ab30aeafed899ab07139aa68`.

아래 표의 각 행은 grep으로 목적지를 확인한 뒤 적는다(E2). 한 값이 두 곳으로 가면 둘 다 적는다(E2a). 준수 주장(B3 등)은 본문에 그 전문이 실재할 때만 적는다(E2c).

## A5a — 발행 카피 손 대조 (규칙집 v12 / A5a)

게이트 `copy-loss` 바늘은 이 브랜드에서 인용 전량을 커버하지 않는다. `verdict: PASS`를 카피 보존의 증거로 쓰지 않는다.

| 단계 | 수치 |
|---|---|
| 추출 (원본 `DESIGN.md` 인용 문자열 + sibling `.verification.md` 인용) | 원본 인용 캡처 **106** + sibling 인용 **4** (`10` / `115` / `118` / `ambient solutions`) |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **9** (カタログ名 `パナソニック` · `Future Craft` · `Panasonic GREEN IMPACT` · `Konosuke Matsushita` · `Matsushita Electric Housewares Manufacturing Works` · Group CCO `creating with care, consideration, and attention to future generations` · brand personality `integrity` · business philosophy `fairness and honesty` · public brand statement `seeking truth, and transforming the future`) |
| 바늘이 아니라고 판정해 제외 | YAML 점 경로·hex·날짜·셀렉터·agent prompt 3건·원본이 명시한 illustrative voice sample 3건(`not official Panasonic copy`)·sibling 캡처 id·sibling 전용 `ambient solutions` |
| 미생존 | **0**건 (발행 바늘 9/9 산출 3파일 생존, `grep -oF` 실측) |

A5 분모: 발행 바늘 9 추출 / 미생존 0.

Illustrative samples 3건은 원본 한정과 함께 Content에 유지(발행 카피가 아님). Agent prompt 3건은 도구 프롬프트로 삭제; 안의 hex/type 값은 Foundations/Components에 이미 있다(A3).

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지(E2a). Portable 파일에 frontmatter 없음. `name` パナソニック은 H1 `# パナソニック Design System` (`DESIGN.md` dest 2 · `provenance.md` dest 1). `homepage` `https://holdings.panasonic/global/`는 Scope + Identity 표. `primary_color` `#0041c0`는 `DESIGN.md` dest 7 + `provenance.md` dest 5. favicon slug는 `DESIGN.md` Assets dest 1 + `provenance.md` dest 1. |
| YAML `omd` / `verified` / `verification_v2` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: `live-extract` DESIGN dest **0** / P dest **2**. `components_harvested` DESIGN dest **0** / P dest **2**. |
| YAML `tokens.note` | 분리 → provenance (전문) · 값은 옮김 → DESIGN.md Scope | 이중 목적지. note 전문 `provenance.md` Identity. 같은 문장 `DESIGN.md` Scope dest 1 (`Only the three supplied Panasonic Holdings public-web surfaces ground these tokens`). |
| YAML `tokens.colors` (5키: canvas / foreground / muted / navigation / link) | 옮김 → Foundations `Semantic color` | `#f2f2f2` dest 4 · `#1a1a1a` dest 8 · `#666666` dest 4 · `#4d4d4d` dest 8 · `#0041c0` dest 7. 키 경로 `tokens.colors.canvas` dest 2 · `tokens.colors.foreground` dest 3 · `tokens.colors.navigation` dest 3 · muted/link dest 2. A4: link `#0041c0`을 일반 primary action으로 합치지 않음. 같은 hex 이중 역할은 합치지 않음 — `#1a1a1a`는 canvas-role Foreground와 search-toggle `fg`, `#4d4d4d`는 Navigation과 header-nav `fg`. |
| YAML `tokens.typography.family.ui` + §3 Visible public-web family | 옮김 → Typography & Assets `Family` / `Font evidence` | `Noto Sans` DESIGN dest **17**. `tokens.typography.family.ui` dest 1. |
| YAML `tokens.typography.body` / `navigation` + §3 표 | 옮김 → Typography & Assets `Type roles` | A1a: lineHeight `24px` dest 2 · `22.5px` dest 2 (표 행 + YAML 경로 문장; 비율로 바꾸지 않음). YAML `use` 긴 쪽 dest 1 each. 표 evidence boundary 병기. `tokens.typography.body.size` / `.weight` / `.lineHeight` / `.use` 및 navigation 동형 키 경로 dest 1 each. body `16` ≠ search-toggle `16px`. |
| YAML `tokens.spacing` `{ xs: 4, sm: 12, md: 20, nav-gap: 26 }` + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout) | `tokens.spacing.xs` dest 1 · `.sm` dest 1 · `.md` dest 1 · `.nav-gap` dest 2. §5 `4px, 12px, 20px, and 26px` dest 2 · `The 26px value is specifically the observed right margin` dest 2 (이중 목적지: Spacing `:85` + Layout `:224`). |
| YAML `tokens.rounded` `{ square: 0, cookie-control: 2 }` + §5 Shape | 옮김 → Foundations `Shape` (+ Layout) | `tokens.rounded.square` dest 1 · `tokens.rounded.cookie-control` dest 1. cookie-control은 컴포넌트가 아님. 일반 rounded-control / pill scale 승격 없음. |
| YAML `tokens.components.header-navigation-item` | 옮김 → Components `Header Navigation Item` · 셀렉터는 provenance | A1b: `Primitive type: \`listItem\`` dest 1 = source `type: listItem` 1. `167px x 23px` DESIGN dest 2 / P dest 1. `0px 26px 0px 0px` dest 3. YAML `use` verbatim. |
| YAML `tokens.components.search-toggle` | 옮김 → Components `Search Toggle` · 셀렉터는 provenance | A1b: `Primitive type: \`button\`` dest 1 = source `type: button` 1. `16px x 16px` dest 3. YAML `states` dest 2. YAML `use` verbatim. |
| YAML `verification_v2.claims` / methods / selectors | 분리 → provenance `Claim ledger` / `Capture selectors` | 본문에 셀렉터 원장을 올리지 않음. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim + Distinctive traits | 표면 범위 3 URL, pale-gray 캔버스, 1918/Future Craft/GREEN IMPACT 연결. 분위기 수식은 `:11` B2a. |
| §1 Key Characteristics 5항 | 옮김 → Experience `Distinctive traits` | 실측 5항. `DESIGN.md` `:32` B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | 5 role + `They do not establish a native-product palette, success/error meanings, hover/focus colors, or a universal Panasonic brand token set` dest 1. |
| §3 Typography Rules + evidence-class 표 | 옮김 → Typography & Assets | 509 uses dest 1. `swiper-icons` dest 3. `Noto Sands` dest 4. SIL OFL 1.1 dest 1. 원본 표 칸 `Unresolved`는 플레이스홀더 검출을 피해 `Unresolved in this pass`로 표기(의미 동일, `Noto Sands` 제외 유지). |
| §3 Noto license URL | 분리 → provenance · 본문은 라이선스 경계 유지 | 이중 목적지. URL은 provenance Sources. 본문은 `font-license boundary, not a Panasonic brand-font claim`. |
| §4 Component Stylings | 옮김 → Components & States | Header Navigation Item · Search Toggle. Default static baseline. capture selector는 provenance. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Surface split / Conflicts | 분리 → provenance · Surface split 문장은 옮김 → DESIGN.md Scope | freshness·원장. Surface split 문장 `no native product UI is inferred`는 Scope dest 1. 그 전문은 provenance dest 0 (원장 `:156`은 읽기 색인이지 전문 재수록이 아님). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | Grid/container 문단 dest 1. `checkout, account, or device-control patterns` dest 1 (원본 문장). |
| §6 Depth & Elevation | 옮김 → Foundations `Elevation` | `box-shadow: none` DESIGN dest 2 / P dest 1. `No canonical shadow token is promoted` dest 1. |
| §7 Do 3항 | 옮김 → Experience `Application rules` | 실측 3항. Governance 통제 문구에 넣지 않음. `DESIGN.md` `:55` B2a. |
| §7 Don't 3항 | 옮김 → Experience `Avoid` (+ Named gaps 재술) | 실측 3항. `zero-interaction packet` dest 2 (Avoid `:66` + Named gaps `:285`). `fictional shared component library` dest 1. |
| §8 AI Design Prompts 3건 | 삭제 + 고유값은 이미 Foundations/Components에 있음(A3) | 도구용 프롬프트. 슬롯 없는 위임 없음. |
| §9 Reference Assets & Evidence Boundaries | 옮김 → Typography & Assets `Assets` · 일부 분리 → provenance | 카탈로그 로고 이중 목적지. Not included 목록은 원문 그대로 Assets. 새 도메인 발명 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | `considerate, clear, and future-facing` dest 2. Do/Don't 표. illustrative samples 3건 원문 한정 유지. `:247` B2a. |
| §11 Brand Narrative | 옮김 → Experience `scope` 3번째 문단 · URL은 provenance | 1918, Konosuke Matsushita DESIGN dest 2 / P dest 1, Matsushita Electric Housewares Manufacturing Works DESIGN dest 1 / P dest 1, 1955 export speaker, Future Craft DESIGN dest 7 / P dest 2, GREEN IMPACT formulated in 2022 DESIGN dest 1 / P dest 1, Group CCO 문장 `creating with care, consideration, and attention to future generations` DESIGN dest 1 / P dest 1. **문단 마지막 문장** `These are verified design and corporate narratives; they do not make the measured corporate-web colors or controls environmental semantics` dest 1. |
| §12 Principles 4항 + UI implication | 옮김 → Experience `Principles` | 실측 4항. 원본 머리 한정 + B2a 완전형 `:42`. |
| §13 Personas 3 slots | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 역할 라벨·동기를 Audience/Primary tasks로 승격하지 않음. `Household or individual` DESIGN dest 0 / P dest 0. `Business customer or partner` 0/0. `Society-facing` 0/0. Audience는 원본 §11 문구 `lasting customer connections`만 (SRC dest 1 / DESIGN dest 2: Scope `:13` + Audience `:28` / P dest 1 원장 색인). |
| §14 States 표 10행 | 옮김 → Components & States `Capture record` | 이중 목적지 아님 — portable 본문. Empty / Loading×2 / Error×3 / Success / Skeleton×2 / Disabled 원문 유지. `Never use the limited home-surface blue as an unverified error or recovery semantic` dest 1. graph 위임 없음. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Header nav: destination list item이라 L/E/S `not-applicable` (의미 사유). Search toggle: search-open toggle이라 L/E/S `not-applicable`. hover/focus-visible/disabled는 applicable, 시각값 생략. 미관측을 `not-applicable` 사유로 쓰지 않음(C1). state coverage 완료 주장 없음 (`This is not a complete state-coverage claim` dest 1). |
| §15 Motion & Easing 본문 | 옮김 → Foundations `Motion` | `No duration scale, easing curve, transition, or interactive motion state was captured` dest 1. `no Panasonic motion token is published here` dest 1. reduced-motion / subordinate-to-the-task 유지. 삭제할 무출처 커브 없음. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | E2c 대조: 전문 `transition properties, animation name, duration, easing, and reduced-motion behavior have been observed`가 산출 `DESIGN.md` **1회** (`:101`) 존재함을 확인한 뒤 이 행을 적는다. 약화 문구는 쓰지 않았다. |
| 원본 H1 `# Design System Inspiration of パナソニック` | 삭제 → Core v2 identity 라인 | `# パナソニック Design System`. |
| Sibling `.verification.md` — raw samples / conflict matrix / sibling-only 수치 | 분리 → provenance `Sibling file` | 증거 등급만. **portable 승격 0건**. sibling 전용: `12.992` DESIGN dest 0 / P dest 1 · `122px x 40px` 0/1 · `ambient solutions` 0/1 · `Basic Management Objective` 0/1 · `visible first-family use count 10` DESIGN dest 0 / P dest 1 (원장 Sibling file; portable 본문 0). |

## 규칙 대조 (본문 실재 확인 후에만 기재)

- A1 / A1a / A1b / A1c: 검증된 값·단위·`listItem`/`button` primitive type·`tokens.source: live-extract` 원장 유지.
- A2: §14 10행 본문 보존.
- A3: §8 고유 hex/type는 Foundations/Components에 이미 있음.
- A4: `#0041c0`는 `tokens.colors.link` / catalog `primary_color`이지 일반 product action이 아님. `#1a1a1a` foreground ≠ search-toggle fg, `#4d4d4d` navigation ≠ header-nav fg 역할 합치기 없음(같은 hex, 다른 키; DESIGN dest `#1a1a1a` 8 · `#4d4d4d` 8).
- A5 / A5a: 발행 바늘 9 / 미생존 0.
- B1: sibling `12.992px` / cookie padding을 focus-visible 또는 컴포넌트 값으로 승격하지 않음.
- B2 / B2a: portable 본문 24건 완전형, provenance inventory 24행 1:1. F3가 `:11` pale-gray 읽기와 `:75` 같은-hex 이중 역할 비병합을 기존 한정에 접어 넣음(발생 수 24 유지).
- B3: Foundations Motion `:101` 다섯 증거 종류 + per-component 관측 게이트 실재.
- C1: `not captured`를 `not-applicable` 사유로 쓰지 않음.
- C2: L/E/S는 역할로 닫음(destination row / search toggle). 일괄 개방 없음.
- C3: state coverage 완료 주장 없음.
- C4: 두 컴포넌트 모두 YAML type이 있어 kind+map을 닫음.
- D1 / D1a: `mobile app` / `native application` / `back-office` / `1440` DESIGN dest 0. Named gaps는 원본이 생략한 항목만.
- D2 / D2a: 페르소나 3 slots 삭제, 원장 무식별. 역할 라벨 Audience 승격 없음.
- E1: freshness/claims/sibling raw는 provenance.
- E2 / E2a / E2c / E2d: 이 표는 grep 후 작성. 부재 단언이 같은 행에서 드롭 문자열을 재수록하지 않음.
- E3: 값 표기 왜곡 없음.

## 제출 전 자가 대조 (웨이브 43)

고유 표현 65건을 원본 §별로 뽑아 산출 `DESIGN.md`에 `grep -oF` 대조. 0이었던 수 **0**, 복원 수 **0**. 기록: `unique-expressions=65 miss=0 restored=0`.

YAML `tokens.*` 키 경로 대조: colors 5, typography family/body/navigation size·weight·lineHeight·use, spacing 4 (`xs`/`sm`/`md`/`nav-gap`), rounded 2 (`square`/`cookie-control`), components 2. 같은 숫자 16이 body size와 search-toggle size/font에 있어도 키 경로를 분리해 확인함.

## F1 / F2

- F1 B2a 스캔: Scope·Primary tasks·Audience·Principles·Avoid·Color·Spacing·Shape·Elevation·Motion·Font·Family·Type roles·Assets·Capture record·두 컴포넌트 역할 판정·Layout·Content·Named gaps의 인과·해석 문장에 인접 완전형 한정. 24=24.
- F2 E2 대조: 이 로그의 각 dest 숫자는 F3 감사 후 `grep -oF` 재실측. `24px`/`22.5px` dest 2; §5 간격 문장 dest 2; `zero-interaction packet` dest 2; `lasting customer connections` DESIGN dest 2; Group CCO 문장 DESIGN dest 1 / P dest 1; Surface split 전문 DESIGN dest 1 / P dest 0; Noto Sands count 10 DESIGN dest 0 / P dest 1.
