# 8percent provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/8percent/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | 8percent |
| name | 8percent |
| display_name_kr | 에잇퍼센트 |
| country | KR |
| category | fintech |
| homepage | https://www.8percent.kr/ |
| primary_color | `#3282f0` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=8percent.kr&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-02 |
| components_harvested | true |

Token note from source: `primary = live action/emphasis blue (#3282f0); #6741d9 purple is the secondary accent (tinted 'more' pills). Data-dense, near-shadowless product surface on a cool-grey canvas (#f1f3f5) with white (#ffffff) cards. Official DS = EDS (Eight Design System): EdsButton/EdsTextfield/EdsToggle/EdsCheckbox.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-8percent-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=8percent.kr&sz=128` is dual: this identity ledger + portable Typography & Assets identity-boundary sentence (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.8percent.kr/` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). Disclosures `https://www.8percent.kr/disclosures/` and blog `https://8percent.github.io/` / EDS post `https://8percent.github.io/2024-07-15/frontend-eds-improvement/` are dual Scope + this surfaces/Tier 1 ledger (E2a).

Catalog `primary_color` `#3282f0` is identity metadata + portable Scope token-note + Distinctive + Foundations 8percent Blue / Semantic unmerged-role + Capture-bound + Primary (EdsButton) fill. The hex value additionally appears in Scope atmosphere, Principles item 3, Elevation, Capture-record Empty (no investments), Soft Blue-Tint YAML fg / mixed-anatomy field-note, EdsTextfield named Focus, and Credit-Grade Tag field note (as not Primary) (E2a). It is not Grade Accent `#3770b2`. Avoid does not contain the hex.

`display_name_kr` `에잇퍼센트` is dual: this identity ledger (YAML key) + portable Scope running prose `8percent (에잇퍼센트)` (value destination). H1 is `8percent Design System` and is not the YAML key. `tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-07-02 is this ledger only. YAML `button-primary.states` `"EdsButton variants primary/secondary/tertiary, sizes xs/s/m/l"` is this claim ledger + portable Primary (EdsButton) `states` field (A1c); it is not merged into Use.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-02 |
| added | 2026-07-02 |
| tokens.extracted | 2026-07-02 |
| live inspect (playwright getComputedStyle) | 2026-07-02 |
| Observed voice samples | 2026-07-02 |
| footer Verified | 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#3282f0` action blue vs Grade Accent `#3770b2` vs Accent Purple `#6741d9`; Ink `#1d2024` vs Body `#606060` vs Slate `#3c3c3c` vs Label `#4b525a`; Canvas `#f1f3f5` vs Surface Blue `#f1f6fe`; Divider `#dee3e8` vs §14 skeleton-block field; YAML `rounded.full` 9999 / `9999px` vs News-More 6px (body-only radius, not a YAML step); YAML line-height ratios `1.10` / `1.50` / `1.15` vs body-table 44px / 36px / 16.1px; YAML tracking `-0.9` / `-0.6` vs body `-0.9px` / `-0.6px`; YAML Soft Use "전체 상품, 한 번에 투자" vs body "전체 상품, 한 번에 투자해볼까요?". Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-homepage | https://www.8percent.kr/ | 2026-07-02 |
| disclosures | business-disclosure | https://www.8percent.kr/disclosures/ | 2026-07-02 |
| blog | official-product-engineering-blog | https://8percent.github.io/ | 2026-07-02 |
| eds-post | official-ds-writeup | https://8percent.github.io/2024-07-15/frontend-eds-improvement/ | 2026-07-02 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.8percent.kr/ | 2026-07-02 |
| disclosures-live | product-surface | https://www.8percent.kr/disclosures/ | 2026-07-02 |
| blog-live | official-blog | https://8percent.github.io/ | 2026-07-02 |
| eds-blog | official-ds-writeup | https://8percent.github.io/2024-07-15/frontend-eds-improvement/ | 2026-07-02 |

### Tier 1

- https://www.8percent.kr/ — product homepage, live computed style (action/emphasis blue rgb(50,130,240) `#3282f0`; secondary accent purple rgb(103,65,217) `#6741d9` on a `rgba(103,65,217,0.1)` tint pill "언론기사 더 보기"; headings rgb(29,32,36) `#1d2024` (H3 24px/700/`-0.6px`); hero stat rgb(60,60,60) `#3c3c3c` (40px/400/`-0.9px`); body Pretendard rgb(96,96,96) `#606060` 14px/line-height 16.1px; canvas rgb(241,243,245) `#f1f3f5`; `box-shadow: none` across hero/cards/buttons; dominant divider rgb(222,227,232) `#dee3e8`; credit-grade card backgrounds color-coded `#3770b2` blue / `#d2b82f` gold / `#4a7656` green / `#8884c9` lilac; live strings "모집중 상품", "누적 대출액 1조 3,955억 2,815만 원", "사업공시 보러가기")
- https://www.8percent.kr/disclosures/ — business-disclosure surface (tabs "경영현황" / "이용정보" / "취급현황")
- https://8percent.github.io/ — official product/engineering blog (NanumSquare with Source Sans Pro)
- https://8percent.github.io/2024-07-15/frontend-eds-improvement/ — Official DS = EDS (Eight Design System): EdsButton (primary/secondary/tertiary, xs/s/m/l), EdsTextfield, EdsToggle, EdsCheckbox

Home / disclosures / blog / EDS URLs are dual-destination with portable Experience Scope (E2a).

### Tier 2 (no usable record)

- https://getdesign.md/8percent — 404 (no entry)
- styles.refero.design/?q=8percent — not listed (generic catalog only)

### Narrative (not interface tokens)

- Live homepage positioning: Korea's first licensed online investment-linked finance company (온투업 1호); 10th-anniversary milestone; accumulated-loan figure (>1.39 trillion won / live "누적 대출액 1조 3,955억 2,815만 원"); institutional-inflow coverage; CEO/Janet Yellen meeting — all surfaced on the live homepage's press links. Dual portable Scope + this ledger (E2a). `온투업 1호` is also in portable Content derived-voice (E2a). No timeline URL exists in the source packet; none was invented here.
- Broader founding details (~2014, CEO 이효진 / Lee Hyo-jin, former bank employee) are widely documented public facts, not directly quoted from a verified 8percent statement in the source turn. Portable Scope restates that public-knowledge limiter under adjacent complete B2a (narrative rather than interface tokens).
- Name-thesis ~8% register is in portable Scope under the product-origin B2a limiter, and here.

Voice samples (§10) are verbatim from the live homepage ("모집중 상품", "누적 대출액 …", "사업공시 보러가기"). Dual-destination for the Observed strings and the 2026-07-02 date: portable Content & Locales + this ledger (E2a). Those three strings are also in Primary tasks; "모집중 상품" is also Type roles Use; "누적 대출액" is also Type roles Use / Layout; "사업공시 보러가기" is also Foundations 8percent Blue example and the Content derived CTA-tone row (E2a). Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-07-02). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body action blue `#3282f0`, purple `#6741d9` + `rgba(103, 65, 217, 0.1)` more pill, ink/slate/body ladder, canvas `#f1f3f5`, divider `#dee3e8`, `box-shadow: none`, grade spectrum | home-live computed style (footer HTML comment) |
| Disclosure tabs "경영현황" / "이용정보" / "취급현황" | disclosures-live |
| NanumSquare + Source Sans Pro | blog-live |
| EDS EdsButton / EdsTextfield / EdsToggle / EdsCheckbox | eds-blog |
| YAML `button-primary.states` `EdsButton variants primary/secondary/tertiary, sizes xs/s/m/l` | YAML metadata + portable Primary `states` field (not Use) |
| §9 Soft pill mixed anatomy (near-ink base + `#3282f0` emphasis word) | body §9 + portable Soft Blue-Tint field-note |
| YAML `rounded.full` 9999 / body `9999px` | YAML + portable Shape + Distinctive + Scope atmosphere |
| Notice Pill geometry (bg `#f1f3f5`, text `#4b525a`, radius 16px, padding 0px 16px, height 56px) | body §4 / §8 only (not YAML `tokens.components`) |
| Soft / News-More height 40px; Neutral Confirm height 60px | body §4 / §8 (YAML has other fields) |
| News-More radius 6px | YAML `button-news-pill` + body |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 120ms/200ms/320ms, easing names, reduced-motion, signature press/fade-in | philosophy layer (sections 10–15); not in the live-inspect list; portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `200ms` / `320ms`), easing names, “No bounce or spring”, and `prefers-reduced-motion: reduce` remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 Soft pill mixed anatomy (“near-ink label with a `#3282f0` emphasis word”) is portable Soft Blue-Tint field-note, unmerged from YAML `button-soft` fg `#3282f0` (A3/A4). Prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is dual: this identity ledger + portable Typography & Assets identity-boundary sentence (E2a). No Named-gaps first-party-logo-file negative was kept
- Homepage `https://www.8percent.kr/` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Disclosures / blog / EDS URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#3282f0` destinations: identity + Scope token-note + Distinctive + Foundations 8percent Blue / Semantic unmerged-role + Capture-bound + Primary (EdsButton) Background. Hex also in Scope atmosphere, Principles item 3, Elevation, Capture-record Empty (no investments), Soft Blue-Tint YAML fg / mixed-anatomy field-note, EdsTextfield named Focus, Credit-Grade Tag field note as not Primary (E2a). Avoid does not contain the hex.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- `display_name_kr` `에잇퍼센트` is dual: this identity ledger (YAML key) + portable Scope running prose (value). Not provenance-only.
- YAML `button-primary.states` is dual: this ledger + portable Primary `states` field (A1c)
- Observed 2026-07-02 voice strings and date are dual-destination: portable Content & Locales + this freshness/narrative ledger; the three live strings are also in Primary tasks (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.10 / 1.50 / 1.15 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×4 + input + card + badge + tab; Notice Pill has no YAML type and none was invented (A1b)
- Generic EdsTextfield Focus `#3282f0` is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary / Soft Blue-Tint / News-More / Neutral Confirm / Notice Pill omit loading/error/success fields (C2). EdsTextfield omits loading/success and keeps error applicable as a form field. Disclosure Tab loading/error/success remain grouping-selection role-based. Product Card / Credit-Grade Tag omit kind/map (C4)
- Notice Pill is body §4 / §8 only (not YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments (Korean retail investors, refinancing borrowers), not specific individuals. Portable Audience keeps the exclusion boundary only. Names, ages, cities, occupations, and biographies are not copied here (D2). Primary tasks come from live homepage strings, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not 8percent-authored or a separately published UI specification`): Scope three-URL evidence-domain assignment; Scope token-note register-split; Scope evidence-domain (homepage/disclosures vs blog face); Scope marketplace-character / hierarchy / restraint / typographic-personality (Korean-product-standard; weight and size rather than color; appropriate-for-financial-data) / flashier-peer-contrast / bank-grade-unintimidating readings; Scope public-history / founding-as-public-fact narrative-not-interface-token; Scope product-origin / name-thesis (~8% register); Scope refusal / embrace / decade-arc / category-operator readings; Audience exclusion / observable-work-follows-three-tasks; Distinctive unmerged-role readings including measured-purple / softly-rounded / 10px-dominant / action-blue-as-primary-and-fill; five numbered principles and UI implications; capture-bound grouping of §7 Do’s / live inspect / EDS blog with first-party EDS names marked separately from remaining token-role rules; Avoid §7 Don’ts; Semantic color unmerged-role readings; Shape local-geometry / workhorse-radius / dominant-on-the-page reading; Elevation divider-not-elevation and shadow-philosophy readings; Motion philosophy-layer / source-stated classification; Motion functional-restrained / signature press/fade-in / steadiness readings; Font evidence-class application including fallback-not-product-face; Font blog-versus-product face assignment; Family font-use boundary; Typography weight-over-color / tight-tracking / two-weights / hangul-first-density readings; Type roles ratio-versus-size-local reading; Type roles unmerged-ink reading; Assets Google-favicon identity-only reading; Assets imagery-not-invented-decoration reading; Capture-record table characterizations and skeleton-block non-merge; Soft Blue-Tint field-note unmerged-role; News-More field-note unmerged-role; EdsTextfield field-note not-a-license-to-set-body-copy-in-Ink; Layout flat-segmentation / dense-data-calm-chrome / restraint-with-color / scannable-card-grid / hero-statistic-anchors-top readings; Layout breakpoint table as recorded span not complete specification of every unlisted control, surface measurements not universal layout tokens, and touch-target record as a purpose reading rather than a complete target-size specification; Content Observed citation-character of parentheticals; Content empty/loading strings as state-contract not extra Observed samples; Content derived voice + tone table + forbidden register (B2/B2a)
- First-party EDS component names are labeled first-party in portable Capture-bound / Font evidence; they are not wrapped as derived
- Footer `(omd:add-reference CREATE)` is this freshness ledger only
- HTML-comment `rgb(...)` notes are this Tier 1 ledger only. Corresponding hex values (`#3282f0` and the rest) are already in portable Foundations; portable does not restate the rgb tuples (E2a)
