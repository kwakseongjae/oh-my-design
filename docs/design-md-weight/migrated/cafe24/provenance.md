#Cafe24 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/cafe24/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cafe24 |
| name | Cafe24 |
| display_name_kr | 카페24 |
| country | KR |
| category | ecommerce |
| homepage | https://www.cafe24.com |
| primary_color | `#084fff` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=cafe24.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from source: `primary = live marketing CTA blue (#084fff, full pill); the product/login app surface uses a slightly lighter blue (#3971ff) on sharp 4px buttons. Ink near-black (#1c1c1c). Lime (#bbf94f) is the single saturated accent reserved for dark hero sections.` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / `#3971ff`-as-submit-fill-not-input-fill / 4px-shared-geometry / derived editorial implementation inference / not-Cafe24-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=cafe24.com&sz=128` is dual: this identity ledger + portable Typography & Assets 227 (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence. Named gaps 601–610 has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.cafe24.com` is dual-destination: Experience Scope 9/11 + this identity/surfaces/Proof ledger (E2a). `https://eclogin.cafe24.com/Shop/`, `https://developers.cafe24.com/design/front/smart`, and `https://news.cafe24.com` are dual Scope 11 (newsroom URL also Scope 17) + this surfaces/Tier 1/Proof ledger (E2a). `display_name_kr` 카페24 is dual: this identity ledger 11 + portable Scope running prose 9 (E2a). Observed 549 quotes a live store-hub headline that contains 카페24; that string is not the YAML identity field.

Catalog `primary_color` `#084fff` destinations: this identity ledger + portable Scope token-note 13 / atmosphere 15 + Distinctive unmerged B2a 38 / bullet 40 + Principles item 3 58 / item 5 60 / capture-bound 63 / Do 66 + Avoid list-head 76 + Semantic unmerged-role 93 / Cafe24 Blue 95 + Capture-record Empty 242 + Primary CTA Background 262 / field note 270 + App Submit field note 295 (as not-marketing-fill) + Step Badge text 427 / field note 432 + White Hero local children 467 + Step Section local children 503 (E2a). Avoid 79 names lime, not this hex. Content Observed 550 is the live CTA string without this hex.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only as YAML keys (A1c). Portable Font evidence restates live computed surface-use in the table row at 194 (E2a). Line 190 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. YAML `verified` 2026-06-26, `added` 2026-06-26, and `extracted` 2026-06-26 are this freshness ledger. Footer **Verified:** 2026-06-26 is this ledger only.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| footer Verified | 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces) |
| HTML-comment live inspect | 2026-06-26 |
| design-md sidecar inspected | 2026-06-26 |

Conflicts unresolved: none (source footer: marketing `#084fff`/pill vs. app `#3971ff`/4px documented as an intentional two-surface split, not a conflict). Preserved value pairs inside the reconstruction: `#084fff` marketing pill vs `#3971ff` eclogin submit; `#3971ff` submit fill vs login input fill `#ffffff`; 4px shared geometry on that submit and those inputs; `#1c1c1c` marketing ink vs `#1b1e26` input ink vs `#000000` dark-section black; `#bbf94f` lime vs action blues; `#f9fafb` / `#f0f2f3` / `#f7f8fa` greys; `#e0e0e0` / `#e6e8eb` / `#d6dae1` borders; `#616161` / `#5f5f5f` / `#757575` / `#bfbfbf` text steps; `#323232` / `#1a1d22` / `#012255` dark fills; marketing Pretendard vs docs Noto Sans KR; YAML `rounded.full` 9999 / `9999px` vs circular-icon `100%`; YAML spacing numbers without a px suffix vs body 9px vs harvested heights 56px / 48px / 46px / 40px; Button 18px / 700 / 1.00 vs App Submit 16px / 700; Caption 14px / 400 vs Step Badge 14px / 800; Selector 15px / 700. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen. §9 parent-child tuples stay on local recipes, not as extra global tokens.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://www.cafe24.com | 2026-06-26 (source footer + HTML comment + canonical `web/references/cafe24/.verification.md`) |
| eclogin | product-login | https://eclogin.cafe24.com/Shop/ | 2026-06-26 |
| developers | developer-docs | https://developers.cafe24.com/design/front/smart | 2026-06-26 (legacy Noto Sans KR chrome) |
| newsroom | brand-newsroom | https://news.cafe24.com | named in source footer; Q&A URL in source §11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.cafe24.com | 2026-06-26 |
| eclogin-live | product-login | https://eclogin.cafe24.com/Shop/ | 2026-06-26 |
| developers-live | developer-docs | https://developers.cafe24.com/design/front/smart | 2026-06-26 |
| newsroom | brand-newsroom | https://news.cafe24.com | named footer; Q&A captured as narrative |
| verification | proof-sidecar | `web/references/cafe24/.verification.md` | 2026-06-26 |

### Tier 1

- https://www.cafe24.com — modern marketing homepage (Pretendard). Dual portable Scope 9/11 + this ledger (E2a). Source HTML comment and `.verification.md` raw samples on this host.
- https://eclogin.cafe24.com/Shop/ — product/login app. Dual portable Scope 11 + this ledger (E2a). Harvested input + submit.
- https://developers.cafe24.com/design/front/smart — developer design docs, brand-owned, legacy Noto Sans KR chrome. Dual portable Scope 11 / Font evidence 194 / Family 201 + this ledger (E2a).
- https://news.cafe24.com — Cafe24 Newsroom. Dual portable Scope 11/17 + this ledger (E2a). Q&A URL `https://news.cafe24.com/global/qna-with-jaesuk-lee-founder-and-ceo-of-cafe24/` is dual Scope 17 + this narrative ledger.

### Proof (source HTML comment + sidecar `web/references/cafe24/.verification.md`)

Canonical proof sidecar exists at `web/references/cafe24/.verification.md` (A1c; heading `## Proof — Tier 1 live inspect`). Derived mirror `design-md/cafe24/.verification.md` has the same SHA-256 `5812cc95e16da7f3a4afd1acf9948e0313a2beef422ede165186cc1a7125d606`. Canonical is `web/references`. Source footer has no `.verification.md` pointer. The same live-inspect method and overlapping raw samples also sit in the source DESIGN.md HTML comment (philosophy-layer block). This ledger records both. They are not a second portable token table.

- **Heading (sidecar):** `## Proof — Tier 1 live inspect`
- **Inspected:** 2026-06-26
- **Method:** playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + `ko-KR` locale, `domcontentloaded` + scroll-through, cookie/modal dismissal, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, inputs, plus a full-DOM background/text color frequency scan. Three brand-owned surfaces inspected.
- **Sources:**
  - https://www.cafe24.com
  - https://developers.cafe24.com/design/front/smart
  - https://eclogin.cafe24.com/Shop/

Raw samples in the source HTML comment / sidecar (this ledger; portable Semantic/Components restate the matching hex/geometry, not the rgb dump):

- Primary CTA “지금 무료로 시작하기”: bg `rgb(8,79,255)` `#084fff` / radius `9999px` / 56px / 18px·700
- Ink `rgb(28,28,28)` `#1c1c1c`
- Section H2 48px·700 / line-height 58px; store H3 40px·700·-0.4px / 54px
- Persona cards `#f9fafb` / 20px / `40px 32px`
- Tag chips `#f7f8fa` / `#5f5f5f` / 6px
- Step badge bg `#e6edff` / fg `#084fff` / 8px·800
- Lime `rgb(187,249,79)` `#bbf94f` as fg accent on dark bands (`#323232`, `#1a1d22`, `#012255`)
- Eclogin input bg `#ffffff` / border 1px `#d6dae1` / 4px / `14px 12px` / 48px / text `rgb(27,30,38)` `#1b1e26`
- Eclogin submit bg `rgb(57,113,255)` `#3971ff` / 4px / 56px
- developers.cafe24.com docs body: `font-family: "Noto Sans KR", Dotum`; `color: rgb(51, 51, 51)`; `font-size: 14px`; `background-color: rgb(255, 255, 255)`
- Sidecar-only (not promoted as portable tokens; not converted to a new hex): selector padding recorded in the sidecar as `10px 12px 10px 16px` (YAML/body keep `10px 16px`); frequency-scan counts

HTML-comment / sidecar full `rgb(...)` sample dump and the sidecar frequency-scan table are this Proof ledger only. Portable Foundations Semantic restates role hexes; Font evidence 194 restates docs `rgb(51, 51, 51)` on `#ffffff` (E2a). That rgb tuple is not converted into an extra hex.

### Tier 2 (no usable record)

- getdesign.md/cafe24 — NOT LISTED
- styles.refero.design — searched "cafe24", no brand-specific Cafe24 style surfaced

Footer note (this ledger): Conflicts unresolved: none (marketing `#084fff`/pill vs. app `#3971ff`/4px documented as an intentional two-surface split, not a conflict). Dual portable Scope token-note 13 + Distinctive/Foundations/Components + this ledger (E2a). `#3971ff` is submit fill; 4px is shared geometry for that submit and for login inputs.

### Narrative (not interface tokens)

Source §11 founding 1999 / 이재석 / Cafe24 Corp. Seoul / 2018 KOSDAQ “Tesla listing” ticker 042000 / 2021 Naver ~20% stake to deepen the two companies' commerce partnership, and the Newsroom Q&A quotes, are restated in portable Scope under adjacent complete B2a (product-origin 9 / public-history 17 / refusal-embrace 19 including energetic-not-bureaucratic). They are not interface tokens. Evidence class is public-history narrative from those KED Global, Wikipedia, and Newsroom sources. KED Global `https://www.kedglobal.com/m-as/newsView/ked202108090008` and Wikipedia `https://en.wikipedia.org/wiki/Cafe24` are dual Scope 17 + this ledger (E2a). Newsroom Q&A URL is dual Scope 17 + this ledger (E2a). Merchant-centric Newsroom philosophy is this narrative / Scope 17, not a Font Official product-use row.

## Claim ledger

Token extraction is `live-extract` (2026-06-26). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body marketing `#084fff`, app `#3971ff`, ink `#1c1c1c`, lime `#bbf94f`, canvas `#ffffff`, surfaces `#f9fafb` / `#f0f2f3` / `#f7f8fa`, hairlines `#e0e0e0` / `#e6e8eb` / `#d6dae1` | live-extract tokens + body §2; marketing homepage / eclogin named as inspection hosts; HTML comment + sidecar raw samples. `#3971ff` is eclogin submit fill; login input fill is `#ffffff` |
| YAML typography Pretendard roles display 48/700/1.21 through caption 14/400/1.50; body-table Notes; legacy Noto Sans KR on developers docs | YAML + body §3; portable Type roles 213–223 including Notes column. Live computed surface-use in portable Font evidence 194 |
| YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 32 / xxl 40 / section 64 (unitless); body also 9px | YAML; portable Spacing 119 (no px suffix added to YAML numbers) |
| YAML rounded sm 4 / md 6 / lg 8 / xl 20 / pill 24 / full 9999 | YAML; portable Shape; full as `9999px` on the marketing CTA; circular icon `100%` unmerged |
| YAML shadow.none `none`; live `box-shadow: none` on hero CTAs, persona cards, nav, selector chips | YAML + body §6; portable Elevation |
| YAML components button-primary / button-app / chip-selector type `button`; nav-link type `tab`; card-persona type `card`; input-text type `input`; tag-chip / badge-step type `badge`; Circular Icon Button `Type: button` from source §4 heading/Use | YAML + portable Components (A1b). Circular Icon Button has no YAML `tokens.components` row; body-stated `Type: button` / Kind interactive restored (440/439). YAML type absence is not a reason to invert that primitive |
| YAML component use strings | YAML + portable Use fields 268/293/320/347/372/391/415/430 and Primary tasks 27–29 (marketing CTA / login submit / scan captured persona-card labels). Persona Card task is scan/read of captured entry cards, not Open |
| §9 parent-child tuples | prompt wrappers deleted; unique tuples restored as local recipes White Hero 460–470 / Dark Feature Band 472–483 / Login White Card 485–495 / Step Section 497–506. Not promoted as global tokens |
| §14 Empty / Loading / Error / Success / Skeleton / Disabled | source state contract; portable Capture record 242–250 under adjacent complete B2a on table characterizations 238 (limiter precedes the table) |
| §15 durations 120ms / 220ms / 360ms, easing names, reduced-motion, signature carousel / fade-in / dark-band, functional-and-friendly / dependability-not-gimmickry | source-stated; portable Motion under adjacent complete B2a 155 and 173. Cubic-bezier values omitted (omission ledger below) |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `220ms` / `360ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the source-stated limiter 155 plus the adjacent signature-motion limiter 173. The B3 five-kind per-component computed gate is Foundations Motion 182 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 610 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts wrappers, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Unique parent-child tuples from those prompts are restored as receiving local recipes (A3/A4): White Hero 460–470, Dark Feature Band 472–483, Login White Card 485–495, Step Section 497–506. Verified hexes, radii, heights, and Pretendard metrics already in Foundations / Type / Components stay there; the tuples are not scattered as extra global tokens. Unique §4 Circular Icon Button (`#e6e8eb`, `100%`, 48px, `Type: button`) is portable Circular Icon Button 436–458 (A3). Remaining prompt-only constructions stay omitted here as deleted tool prompts.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Omitted §13 fictional archetypes

Source §13 names fictional archetypes. They are not Audience, not primary tasks, and not re-hosted here (D2). No names, biographies, ages, or cities from that section are listed in this file.

## Derived inventory (portable B2a sites)

Adjacent complete B2a (`derived editorial implementation inference` / `not Cafe24-authored or a separately published UI specification`) on the current portable body: Scope product-origin / foundational-platform (9); Scope four-URL evidence-domain including values-stay-attached / marketing-not-proxy / eclogin-not-proxy / docs-chrome-not-marketing-Pretendard (11); Scope token-note register-split including `#3971ff`-as-submit-fill-not-input-fill / 4px-shared-geometry (13); Scope atmosphere extra names including never-pure-black-for-body-copy / reserved-almost-entirely-for-the-primary-CTA / occasional-deep-navy / app-blue-submit-fill-not-input-fill / 4px-shared-geometry-for-submit-and-inputs (15); Scope public-history / narrative-not-interface-token including Naver-stake-as-deepening-commerce-partnership (17); Scope refusal / embrace / dual-register extra names including energetic-not-bureaucratic (19); Primary tasks YAML-use-strings-not-from-§13 (25); Audience no-individual-personas-promoted / fictional-archetypes-not-Audience / observable-work-follows-three-tasks (34); Distinctive unmerged-role extras including `#3971ff`-submit-fill-not-input-fill / 4px-shared-geometry, limiter immediately before the bullets (38); numbered Principles six stems (54); capture-bound grouping of §7 Do’s named rules (63); Avoid named Don’ts (76); Avoid last-bullet size-and-weight-driven (85); Semantic unmerged-role extra characterizations including utilitarian-sibling / warm-near-black / occasional-navy / pure-black-not-body-copy (93); Lime never-on-light (111); Spacing unitless-YAML-not-required-px-suffix / body-9px / heights-as-component-fields (119); Spacing ~8px-base / generous-card-padding / tight-tag-padding (121); Shape local-geometry / role labels limiter-precedes-list (127); Shape local-harvested-not-universal / YAML-full-9999-not-circular-100% (136); Elevation table Use precede / extra philosophy / hairline-not-border-soft (140); Motion source-stated classification / Arriving-Dismissals-Two-way / spec-template-ease-exit-match / functional-and-friendly / no-bounce-or-spring / dependability-not-gimmickry (155); Motion signature functional-and-friendly / dependability-not-gimmickry adjacent (173); Font evidence-class extras including live-computed-marketing-versus-docs / YAML-family-keys-naming-those-live-computed-families / merchant-centric-Newsroom-philosophy-as-Scope-narrative-not-a-font-Official-product-use-row (190); Family font-use named (203); Type-rule extras (205); Type-role ratio-versus-size-local / px-companions-local / tracking-unmerged (209); Type-role unmerged Button-vs-App-Submit-vs-Caption-vs-chips (211); Assets Google-favicon identity-only (227); Assets imagery-not-invented-decoration (229); Capture-record graph-not-adopted (236); Capture-record table characterizations, limiter immediately before the table (238); Primary CTA field-note unmerged-field including Role-as-the-single-primary-marketing-action (270); App Submit field-note unmerged-field including 4px-not-9999px (295); Selector Chip field-note unmerged-field (322); Nav Link field-note unmerged-field including captured-variant (349); Nav captured-variant-not-click-transition / named-active-ink-not-focus-visible (361); Persona Card field-note unmerged-field (374); Text Field field-note unmerged-field including 4px-not-pill (393); Tag Chip field-note unmerged-field including 6px-not-24px / 14px-400-not-800 (417); Step Badge field-note unmerged-field (432); Circular Icon Button field-note unmerged-field (448); White Hero local-composition (462) / field-note (470); Dark Feature Band local-composition (474) / field-note (483); Login White Card local-composition (487) / field-note (495); Step Section local-composition (499) / field-note (506); Layout breathing-room extras including hero-row / feature-alternation / numbered-3-step (513); Layout recorded-span / collapsing / image-behavior / touch-purpose, limiter precedes the breakpoint table (522); Content Observed citation-character (543); Content §14-not-extra-Observed (553); Content derived voice extra names / tone-table labels / forbidden-register items (557). Reconstruction-boundary exemption not used. Governance Authority is not a substitute. No “no unqualified sentence remains” claim (E2c). This ledger does not re-host those sentences.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets 227 (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage / eclogin / developers / newsroom URLs are dual-destination with portable Experience Scope (E2a)
- `primary_color` `#084fff` destinations listed in Identity (E2a)
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a)
- YAML typography `use` fields restored on Type roles 213–223 together with body-table Notes (A1)
- YAML unitless `lineHeight` 1.21 / 1.35 / 1.53 / 1.42 / 1.40 / 1.50 / 1.00 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×4 (260/285/311/440) + tab (338) + card (366) + input (382) + badge×2 (408/424). Circular Icon Button `Type: button` / Kind interactive restored from source §4 heading and Use (A1b). YAML `tokens.components` has no row for it; that absence is not a type inversion
- No generic Focus capture in the source; focus-visible rows carry no hex (B1, 252/276/301/328/355/399/454)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete (252)
- Primary CTA omits loading/error/success fields (C2) 279. App Submit keeps loading applicable as a login submit (303) and omits error/success (305). Text Field keeps error applicable as a form field (401) and omits loading/success (403). Selector Chip and Nav Link loading/error/success remain destination/selection role-based (330–332, 357–359). Circular Icon Button status table 451–458; loading/error/success are role-based not-applicable (456–458): carousel chrome utility, not request-in-flight / form-outcome
- Persona / Segment Card, Tag Chip, and Numbered Step Badge omit kind/map (C4) 254/376/419/434/609. Circular Icon Button does not
- Source §13 fictional archetypes are not copied here (D2). Primary tasks come from YAML use / live CTA strings / captured persona-card labels, not §13. The persona-card task is scan/read of captured entry cards, not Open
- Footer live-inspect method, source HTML comment, and canonical sidecar path `web/references/cafe24/.verification.md` are this ledger only. Derived mirror `design-md/cafe24/.verification.md` has the same SHA-256 `5812cc95e16da7f3a4afd1acf9948e0313a2beef422ede165186cc1a7125d606`
- Sidecar-only selector padding `10px 12px 10px 16px` stays in this Proof ledger; YAML/body keep `10px 16px`. Extra sidecar measurements that are not in the legacy DESIGN.md token bag are not copied here.
