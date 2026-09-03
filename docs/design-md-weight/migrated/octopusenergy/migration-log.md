# octopusenergy migration log

- Source: `web/references/octopusenergy/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/octopusenergy/.verification.md` — **존재함**(`ls -la`로 확인), 전문 판독, **증거 등급으로만 채택**. 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/octopusenergy/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/octopusenergy/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `inspectDesignMd` + `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: consumer-tech. 캡처 표면은 homepage `https://octopus.energy/` 와 tariffs `https://octopus.energy/tariffs/`. 원본 YAML에 발행 디자인 시스템 필드 없음. B2a 닫힘은 toss-form (`not Octopus Energy-authored or a separately published UI specification`). 규칙집 v12 B2a 전제 주석: 1차 발행 사양이 원본에 없으므로 예문을 적응시키지 않음.

Source SHA-256 `6b16ebc26352fbcc1c7a2a60a8c9d3195d037cbf9d23117200ccc4779ec12d29` (`web/references/octopusenergy/DESIGN.md`). Sibling SHA-256 `43fbba52ce984844cc8da73010354a21eff2e798adbdac48512c471162a7a969` (`web/references/octopusenergy/.verification.md`).

`provenance.md`의 `Claim ledger`가 YAML 클레임의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a). 각 카운트는 이 파일을 쓰기 직전에 `grep -oF`로 세었다(F2). 기억으로 쓰지 않음.

## A5a — 발행 카피 손 대조 (규칙집 v12)

게이트 `copy-loss` 바늘은 이 브랜드에서 돌리지 않았다. 원본과 sibling에서 인용 문자열을 추출한 뒤, 브랜드가 발행한 문자열만 산출 3파일과 손 대조했다.

| 단계 | 수치 |
|---|---|
| 추출 (따옴표 정규식) | 원본 `DESIGN.md` **142**개 인용 문자열 + sibling `.verification.md` **16**개 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **23**개 (`That's cool`, `Fine tune`, `Get a quote`, `Energy`, `Heat pumps`, `Log in`, `Join the UK's most popular energy supplier`, `Everything you need for a cheaper, greener home & business`, `Great value energy for your home or business`, `Our standard prices have always been cheaper than the price cap`, `Most homes could save with our fixed and flexible tariffs`, `Please enter a valid UK postcode`, `Update payment details`, `Which? Recommended Provider`, `Rated 4.8 stars`, `Rated 4.8 stars for customer service from 815,906 reviews`, `change my tariff`, `we care about the planet`, `Switching is simple — just provide your account details`, `Octopus Energy: The UK's most awarded energy supplier`, `All our tariffs | Octopus Energy`, sibling-only `No thanks`, sibling-only `Read more`) |
| 바늘이 아니라고 판정해 제외 | hex·치수·CSS·셀렉터·점 경로·URL·카피에 대한 서술·토큰 키 경로·Tier 2 부재 문장·`Chromatophore` 패밀리명 |
| 미생존 | **0** (`No thanks` DESIGN dest 0 / provenance dest 1; `Read more` DESIGN dest 0 / provenance dest 1 — sibling-only, 본문 승격 없음) |

분모: 추출 158 / 바늘 23 / 미생존 0. `verdict: PASS`를 카피 보존의 증거로 쓰지 않는다.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# Octopus Energy Design System`. `primary_color` `#f050f8`은 provenance Identity와 DESIGN Foundations/Components (`grep -oF`: DESIGN 15 · provenance 11). `logo.type: favicon` DESIGN 1 · provenance 1. slug `https://www.google.com/s2/favicons?domain=octopus.energy&sz=128`는 Assets에 identity pointer로, hosted brand file로 승격하지 않음. `homepage` `https://octopus.energy` DESIGN Scope 1 · provenance Identity 1. |
| YAML `verified` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1, A1c). `live-extract` DESIGN 0 / provenance 3. `components_harvested: true` DESIGN 0 / provenance 2. |
| YAML `tokens.note` (전문) | 분리 → provenance (인용 블록) · 값은 옮김 → DESIGN.md | 이중 목적지. note 전문은 provenance Identity 아래 인용. `#f050f8` `#100030` `#60f0f8` `#f0ffff` Chromatophore는 Foundations/Typography에 별도 착지. |
| YAML `tokens.colors` 9키 (`primary` `#f050f8`, `primary-border` `#f050f8`, `canvas` `#100030`, `canvas-alt` `#180048`, `brand-accent` `#5840ff`, `cyan` `#60f0f8`, `foreground` `#f0ffff`, `on-primary` `#100030`, `muted` `#a49fc8`) | 옮김 → Foundations `Semantic color` · 분리 → provenance claim ledger | 이중 목적지. 같은 hex 두 키를 합치지 않음: `tokens.colors.primary` DESIGN 4 / `tokens.colors.primary-border` DESIGN 2; `tokens.colors.canvas` DESIGN 3 / `tokens.colors.on-primary` DESIGN 3. `#5840ff` DESIGN 1 (Brand Accent Blue). sticky-nav `rgba(16, 0, 48, 0.9)`는 Canvas Alt 역할의 원본 표기 그대로 (`grep -oF` DESIGN 5 · provenance 1). |
| YAML `tokens.typography.family.sans` `Chromatophore, helvetica, arial, sans-serif` | 옮김 → Typography Family | 바이트 보존. `Chromatophore` DESIGN 48 · provenance 9. Fallback을 브랜드 페이스로 제시하지 않음. |
| YAML `tokens.typography` 7역할 + §3 표 6행 | 옮김 → Typography `Type roles` | YAML unitless `1.5` / `1.11` 보존(A1a). §3 괄호 px `1.5 (54px)` DESIGN 3 · `1.5 (42px)` 2 · `1.5 (27px)` 2 · `1.5 (18px)` 2. YAML `body-sm` (`16`/`400`/`1.5`, use `Nav links, captions — foreground white` DESIGN 2)을 §3 Body / Nav (`16px`/`500`/`1.11`, Notes `Nav links, button labels`) 및 YAML `button` (`Button label — Chromatophore medium` DESIGN 2)과 합치지 않음. subsection §3 긴 쪽 `#f0ffff` foreground or `#100030` on light card (`on light card` DESIGN 1). |
| YAML `tokens.spacing` `{ xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 48, section: 64 }` + §5 스케일 | 옮김 → Foundations Spacing · Layout | 이중 목적지. `tokens.spacing.section` DESIGN 2. 키 경로를 컴포넌트 padding·radius·type size와 합치지 않음. |
| YAML `tokens.rounded` `{ sm: 4, md: 8, lg: 12, full: 9999 }` | 옮김 → Foundations Shape | `tokens.rounded.sm` DESIGN 2 · `md` 2 · `lg` 3 · `full` 2. `sm: 4` / `md: 8`에 용도를 발명하지 않음. `full: 9999`는 trust pill. 부착 CTA 분할 반경은 컴포넌트 로컬 (`12px 0px 0px 12px` DESIGN 2 · `0px 12px 12px 0px` DESIGN 2; §9 축약형 `12px 0 0 12px` DESIGN 1 · `0 12px 12px 0` DESIGN 1). |
| YAML `tokens.shadow.none: "none"` | 옮김 → Foundations Elevation | `tokens.shadow.none` DESIGN 1 · provenance 1. `box-shadow: none` DESIGN 3. |
| YAML `tokens.components` 11개 (`type: button` ×5, `type: input` ×2, `type: tab` ×1, `type: card` ×1, `type: badge` ×1, `type: listItem` ×1) | 옮김 → Components & States · YAML `use`/font는 DESIGN Token-set 행 · `type:` 연속 문자열은 분리 → provenance | 이중 목적지(E2a). A1b: `Primitive type: \`button\`` DESIGN 5 · `input` 2 · `tab` 1 · `card` 1 · `badge` 1 · `listItem` 1. provenance `type: button` 5. 11개 YAML `use` 전부 DESIGN 1 (F2 전수). `text #f0ffff on #180048 background` DESIGN 1. §4-only sticky nav chrome은 `Primitive type: not in the token set` DESIGN 1 — YAML type을 다른 컴포넌트로 옮기지 않음. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` · Distinctive traits | 제품/표면 범위, 두 URL, Chromatophore, `#100030`/`#f050f8`/`#60f0f8`/`#f0ffff`, Arial 600 예외, `box-shadow: none`, Key Characteristics 8불릿. 분위기 읽기(rave-poster-turned-utility-brand, neon sign, dark-mode-native, glow-based)에 인접 B2a 완전형. |
| §1 공식 히스토리·Tier URL | 분리 → provenance | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Scope에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations `Semantic color` | 9역할. bioluminescent / night sky / never decorative 원문 유지, 섹션 머리 B2a. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급, Family, Type roles, 4 principles. Arial 600은 히어로 필드 예외로 유지. `H1 = H2` DESIGN 1. `100% of the typographic load` DESIGN 1. `pigment cells` DESIGN 2. |
| §4 Component Stylings | 옮김 → Components & States | 11 YAML 레코드 + sticky nav chrome. 셀렉터 `#hero-quote-form-field-postcode` DESIGN 3 · `#postcode` DESIGN 1 + provenance Capture selectors (E2a). button-primary-lg Height `56px`는 §4에만 있던 값(YAML 무) — DESIGN 3. button-ghost Border `2px solid transparent`는 §4 표기. Hero input `rgba` 없음; tariffs input `rgba(0,0,0,0)` DESIGN 1. |
| §4 하단 **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장. Conflicts unresolved: none. Tier 2 두 시도 0 results 보존. |
| §5 Layout Principles | 옮김 → Layout & Platforms · Foundations spacing/shape | 4-column cards, ~1200px (`1200px` DESIGN 3), whitespace 3불릿, radius prose. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | 3행 표 + Shadow Philosophy. `implied blur` DESIGN 2. |
| §7 Do's | 옮김 → Experience Application rules | 8항. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience Avoid | 8항 원문. `weight 700 or bold` DESIGN 1. `pills are for badges only` DESIGN 1. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Mobile `<640px` / Tablet `640-1024px` / Desktop `1024px+`. Nav buttons `46px` DESIGN 2 (nav-button 일; cookie height 46px는 sibling-only라 본문에 승격하지 않음). Large CTA `56px`. Postcode `60px`. hamburger toggle DESIGN 1. `1440px` DESIGN 0 (D1: 없는 측정 틀을 지어 닫지 않음). |
| §9 Agent Prompt Guide (Quick Color Reference + Example prompts + Iteration Guide) | 삭제; 고유값만 옮김 | 도구별 명령·프롬프트. 색 재진술은 Foundations에 이미 있음. **고유값 2건(A3):** Trust Indicator Pill padding `4px 12px` DESIGN 2 · provenance 2; Product Feature Card product name `16px Chromatophore weight 500` + `#100030` (카드 레코드). Iteration 기하 예외 4항은 Application rules로 이동(히어로 흰 필드, 분할 반경, `#ffffff` only as hero postcode bg, Arial 600). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | warm/direct/cheeky, tone 표 6행, 샘플 4건 바이트 그대로, forbidden register. `815,906` DESIGN 2. `change my tariff` DESIGN 2. 캐주얼 초대·genuine-rather-than-performed 읽기에 인접 B2a. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 2015 DESIGN 2 · Greg Jackson DESIGN 2 · Kraken DESIGN 6 · 2023-2024 DESIGN 2 · Which? Recommended Provider · nine consecutive years DESIGN 2 · E.ON DESIGN 2 · EDF · Origin Energy DESIGN 2 · Constantine · refuse/embrace 마지막 문장까지 한 단위. `technology company wearing a utility's licence` DESIGN 2 · provenance 2. 원본 주석의 public-facts 등급을 Scope에 유지. |
| §12 Principles | 옮김 → Experience Principles | 5항 + UI implication. `do this now` DESIGN 1. `the brand earns affection through character, not just price`를 Principles B2a가 명시적으로 닫음. |
| §13 Personas | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 원본 머리글의 publicly observable segments만 Audience에 원문 그대로: `UK households switching energy suppliers` DESIGN 2 · provenance 2; `early-adopter EV and solar homeowners`; `sustainability-conscious renters`. 이름·나이·도시·동기·소속 분류는 본문 0 · 원장 0 (무식별 omission). Primary tasks는 표면/컨트롤에서만 (`Get a quote`, product cards, `Log in`) — 페르소나 동기를 과업으로 바꾸지 않음. |
| §14 States 10행 | 옮김 → Components `State record` + 컴포넌트별 applicability | 이중 목적지(둘 다 portable). 10행 전문 보존(A2): empty postcode `#a49fc8`, loading inline progress, `Please enter a valid UK postcode` DESIGN 4, success redirect, account empty + smart meter, skeleton `#180048`, payment failed `Update payment details` DESIGN 2, payment taken in-app toast, disabled magenta fades, skeleton flat colour pulse. graph 위임 없음. |
| §15 Motion & Easing — durations 3 | 옮김 → Foundations Motion | `motion-fast` `100ms` · `motion-standard` `200ms` · `motion-slow` `300ms` 및 use 행 보존. |
| §15 Easings — three exact `cubic-bezier` | 삭제(값) · 이름·use는 옮김 · 곡선 문자열은 분리 → provenance omission ledger | `ease-enter`/`ease-exit`/`ease-standard` 이름과 use는 DESIGN Motion 표. 곡선 세 값은 출처 없음; `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`은 레거시 템플릿. DESIGN은 생략 문장 안에서 세 문자열을 한 번씩 지목(igaworks 형태; grep DESIGN 1 / provenance 1 each). 승격 토큰으로 쓰지 않음. |
| §15 Motion rules + reduced-motion | 옮김 → Foundations Motion | Constantine float-in, `#f050f8` → slightly lighter, outlined fill, No spring or bounce, `prefers-reduced-motion: reduce` DESIGN 1. |
| B3 — 미해상 motion 승격 조건 | 신규 작성 → Foundations Motion | 다섯 증거 종류 전문 DESIGN 1: `transition properties, animation name, duration, easing, and reduced-motion behavior`. `Official documentation of a single curve or duration is not that gate` DESIGN 1. 약화 문구 없음. E2c: 이 행은 그 전문이 본문에 있는 뒤에만 적음. 라벨 `B3` 자체는 DESIGN 0 / provenance 1(원장 언급). |
| 원본 H1 `# Design System Inspiration of Octopus Energy` | 삭제 → provenance `Omission ledger` | Core identity `# Octopus Energy Design System`으로 대체. |
| Trailing HTML sources comment | 분리 → provenance | Raw live-inspect record + evidence-class boundaries. 한정 자체는 본문 인접에 유지(E1). |
| Sibling `.verification.md` Proof / conflict matrix / logo / frequency extras | 분리 → provenance | 증거 등급만. **portable 승격 0건**인 sibling-only: body `line-height: 24px`, `That's cool` height 46px, `No thanks` 마젠타 고스트, `Read more` 라벨, tariffs large CTA sibling 전경 `#100030`(원본 YAML/§4/`HTML comment`는 `#f0ffff` — 본문은 `#f0ffff` 유지), direct `favicon.ico`, SimpleIcons 404, 1879 bytes. |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a | 검증 hex·치수·use 문자열 보존. line-height `1.5` / `1.11`은 비율로 보존. §3 괄호 px는 옆에 병기 | `#f050f8` 15 · `#100030` 16 · `1.11` 6 · `1.5 (54px)` 3 |
| A1b | primitive type 컴포넌트별 보존 | `Primitive type: \`button\`` 5 · `input` 2 · `tab` 1 · `card` 1 · `badge` 1 · `listItem` 1 · `not in the token set` 1 |
| A1c | `tokens.source: live-extract`, `components_harvested: true` | DESIGN 0. provenance Identity + Proof notes |
| A2 / A3 | §14 본문 보존. §9 고유값 2건 Components로 이동 | State record 10행. `4px 12px` DESIGN 2. §9 나머지 프롬프트 삭제 |
| A4 | `#f050f8`을 일반 장식색으로 합치지 않음. `#100030` canvas/on-primary 비병합 | Foundations 역할명 + 컴포넌트 필드 |
| A5 / A5a | 발행 카피 23/23 생존 | 분모 158/23/0. sibling-only 2건은 provenance |
| B1 | `focus-visible` treatment 값 없음. motion `focus ring`은 duration use | `focus-visible` 행은 applicable + omitted. 색값 0 |
| B2 / B2a | 파생 해석 32곳에 완전형 한정 | `derived editorial implementation inference` DESIGN **32** · `not Octopus Energy-authored or a separately published UI specification` DESIGN **32** · provenance 원장 **32행**. 헤더 `\| Location in DESIGN.md \| Qualified reading \|` |
| B3 | 다섯 증거 + 컴포넌트별 computed 관측 게이트 본문 1회 | 위 B3 행. “공식 출처로 검증될 때까지” 0 |
| C1 | `not captured`를 `not-applicable` 사유로 쓰지 않음 | `Not captured` DESIGN 0. `not-applicable` 17행은 전부 역할 사유 |
| C2 | 역할 판단. quote CTA 2개 + cookie accept는 L/E/S 개방. Fine tune / ghost-nav / nav-link / inline link는 destination·dialog → 닫음. postcode 필드는 error 개방, loading/success 닫음 | `not-applicable` 사유에 “Not captured” 0 |
| C3 | 완료 주장 없음 | `This is not a complete state-coverage claim.` DESIGN 1 |
| C4 | Product Feature Card와 sticky nav chrome은 kind/map 생략 | card `Primitive type: \`card\`` 1, kind 없음. chrome `not in the token set` |
| D1 / D1a | 원본에 없는 도메인 부정 claim 없음 | `native application` 0 · `mobile app` 0 · `back-office` 0 · `1440px` 0 · `does not say` 0 |
| D2 / D2a | 가상 페르소나 승격·재수록 없음 | 이름 3인 DESIGN 0 · provenance 0. Audience는 원본 머리글 그룹만 |
| E1 | 원장·freshness·Proof는 provenance. standalone 한정은 본문 | sibling 방법론·주파수 extras는 provenance |
| E2 / E2a–d | 이중 목적지 병기. 준수 주장은 본문 실재 시만. 부재 단언이 자기 나열을 분모에 넣지 않음 | 이 표의 grep 카운트. Omission ledger는 무식별 |
| E3 | 게이트 회피 표기 왜곡 없음 | hex를 `# f050f8`처럼 쪼개지 않음 |

## F1 B2a 스캔 (제출 전 재독)

Principles 안팎을 불문하고 인과·해석·판단 문장을 재독했다. Scope 분위기 문단, §11 `technology company wearing a utility's licence`, Principles UI implication, voice `casual invitation` / genuine-rather-than-performed, Docs 성격 규정(Font evidence 정렬, Assets favicon pointer 및 Constantine character-not-whitespace), Motion 철학층, State record 철학층, Product Feature Card / Trust Indicator Pill의 agent-prompt-only 값 유지에 완전형 한정이 인접한다. Canvas Alt의 sticky-nav `rgba`는 원본 표기를 유지하고, 그것을 canvas hex로 다시 쓰지 않는다는 읽기는 Semantic color 머리 한정에 포함했다.

## F2 E2 대조

이 로그의 각 행은 쓰기 직전 `grep -oF`로 확인했다. 한 값이 DESIGN과 provenance 양쪽에 있으면 두 목적지를 적었다. `B3` 준수는 다섯 증거 종류 전문이 DESIGN Motion에 있는 뒤에만 적었다.

## 값 소실 자가 점검 (키 경로별)

YAML `tokens.colors` 9 · `tokens.typography` family+7역할 · `tokens.spacing` 8 · `tokens.rounded` 4 · `tokens.shadow.none` · `tokens.components` 11 — 각 키 경로 문자열 또는 대응 Primitive type / use 문자열이 DESIGN.md에 1회 이상. `tokens.rounded.lg: 12`를 spacing `12`로 대체하지 않음. `tokens.spacing.section: 64`는 spacing 표의 section 행.

## Unique-phrase self-check

원본 §별 고유 표현 64개를 `grep -oF`로 대조했다 (연도 2015/2023-2024, Greg Jackson, Kraken, Which? Recommended Provider, nine consecutive years, E.ON/EDF/Origin Energy, Constantine, chromatophore/pigment cells, technology company wearing a utility's licence, refuse/embrace 마지막 문장, CTA/에러/트러스트 카피, `#hero-quote-form-field-postcode`, 분할 반경 두 표기, `1.11`, `4px 12px`, YAML use 11, §3 긴 Notes `on light card`, motion 100/200/300ms, `prefers-reduced-motion`). 0이었다가 복원한 수: **0** (초고에 모두 착지. backtick 래핑 때문에 한 번은 `#f0ffff foreground or...`가 0으로 보였으나 `on light card` DESIGN 1로 실재 확인).

Audience / Primary tasks 각 항목도 원본 `grep -oF` 출현 > 0 (그룹은 §13 머리글 원문; 과업은 `Get a quote` / product-card 라벨 / `Log in` / `#hero-quote-form-field-postcode`).
