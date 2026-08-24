# Bigin provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bigin/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bigin |
| name | Bigin |
| display_name_kr | 빅인 |
| country | KR |
| category | marketing |
| homepage | https://www.bigin.io |
| primary_color | `#006fff` |
| logo | type `favicon`, slug `https://www.bigin.io/favicon.ico` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from source: `primary = live CTA electric blue (#006fff); inline text links sit on a slightly deeper #0066cc. Hero band is a deep navy (#0b1335) with white type. Feature surfaces ladder through tinted blues (#f4f9ff -> #f1f5fd -> #e1f1ff) plus one mint accent (#dbf4eb / #7edbb9). Everything is SpoqaHanSansNeo at weight 700`. Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Bigin-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / first-party slug URL `https://www.bigin.io/favicon.ico` is dual: this identity ledger + portable Typography & Assets identity-boundary sentence `DESIGN.md:220` (E2a). Named gaps has no first-party-mark sentence and does not restate the URL.

Homepage `https://www.bigin.io` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). `https://www.bigin.io/pricing` and `https://www.bigin.io/company` are dual Scope + this surfaces/Tier 1 ledger (E2a).

Catalog `primary_color` `#006fff` is identity metadata + portable Scope token-note `11` + Scope atmosphere `15` + Distinctive limiter `42` / bullet `44` + Principles item 2 `58` + capture-bound `66` + Foundations Bigin Blue `94` / Semantic unmerged-role `92` + Capture-record Empty `235` + Capture-record generic Focus `247` + Primary CTA Background `257` / field-note `266` + Lift CTA Background `283` / field-note `292` + Connect Chip Background `309` + Form Input named Focus `337` / named-Focus sentence `341` / loading-omission `352` / additional-observed `354` + Header / Navigation band §9-only right-aligned CTA recipe `441` + Inline Link field-note contrast `482`. Avoid does not contain the hex. Content Observed CTAs (`545`) restates the live string "상담 신청" without this hex. Live inspect rgb(0,111,255) is dual Foundations Bigin Blue + this Tier 1 ledger (E2a). It is not Link Blue `#0066cc` and not Hero Navy `#0b1335`. Connect Chip glow uses `rgba(0,111,255,0.4)`, not this hex’s CTA glow `rgba(0,104,255,0.4)`.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c). `added` 2026-06-26 is this ledger only. `display_name_kr` 빅인 is this ledger; the portable H1 is `Bigin Design System` and Scope restates Bigin (빅인).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| live inspect (playwright getComputedStyle) | 2026-06-26 |
| footer Verified | 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 brand-owned surfaces) |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#006fff` action blue vs `#0066cc` link blue vs `#0b1335` navy; `#000000` vs `#3d4046` vs `#53585f` vs `#7e8696` vs `#b2c0cb`; `#f4f9ff` vs `#f1f5fd` vs `#e1f1ff`; `#dbf4eb` vs `#7edbb9`; `rgba(0,104,255,0.4)` vs `rgba(0,111,255,0.4)`; YAML `button-primary.shadow` `2px 2px 8px` vs `cta-glow-tight` trailing `0px` vs lift `0px 4px 16px -4px`; YAML `feature-card.shadow` without trailing `0px` vs `card-ambient` with trailing `0px`; YAML unitless `lineHeight` 1.3 / 1.4 / 1.5 vs body-table `~1.3` / `~1.4` / `~1.5` / `normal`; YAML `rounded.full` 9999 / `9999px`; header CTA 20px / 40px / 14px vs lift 24px / 58px / 18px vs connect 8px / 36px; homepage nav `#b2c0cb` vs inner `#7e8696`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-homepage | https://www.bigin.io | 2026-06-26 |
| pricing | product-pricing | https://www.bigin.io/pricing | 2026-06-26 |
| company | brand-company | https://www.bigin.io/company | 2026-06-26 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.bigin.io | 2026-06-26 |
| pricing-live | product-surface | https://www.bigin.io/pricing | 2026-06-26 |
| company-live | product-surface | https://www.bigin.io/company | 2026-06-26 |

### Tier 1

- https://www.bigin.io (homepage)
- https://www.bigin.io/pricing (플랜 안내)
- https://www.bigin.io/company (회사 소개)

Proof pointer: the source HTML comment (`web/references/bigin/DESIGN.md` philosophy layer) points at `.verification.md Raw samples`. File `web/references/bigin/.verification.md` exists (A1c). Heading: **Proof — Tier 1 live inspect**. Inspected: 2026-06-26. Method (from that file): playwright getComputedStyle (live DOM) — global playwright (chromium, headless), realistic Chrome UA + ko-KR locale, goto domcontentloaded + 3.5s settle, cookie/modal dismissal pass, then `getComputedStyle` on body, h1/h2/h3, header/nav, buttons, links, plus a full-DOM background/text/radius color-frequency scan and a rounded/shadowed container scan across three brand-owned surfaces. Proof **Sources** (same three surfaces):
- https://www.bigin.io (homepage, live computed style)
- https://www.bigin.io/pricing (플랜 안내 — pricing surface)
- https://www.bigin.io/company (회사 소개 — company/about surface)

A prior ledger sentence that no `.verification.md` existed in the reference directory is SUPERSEDED (2026-08-24 wave11 sol resubmit). That absence claim is deleted.

Token-level claims (§1–9) are sourced from this live inspection (source HTML comment + `.verification.md` Raw samples):

- Primary CTA "상담 신청" — bg rgb(0,111,255) `#006fff` / radius 20px (24px lift variant) / shadow rgba(0,104,255,0.4)
- Hero band — bg rgb(11,19,53) `#0b1335` / white H1 56px / weight 700 / Spoqa Han Sans Neo
- Inline links — color rgb(0,102,204) `#0066cc`
- Tint ladder — `#f4f9ff` / `#f1f5fd` / `#e1f1ff` section surfaces; mint `#dbf4eb` with `#7edbb9` border
- White feature card — bg `#ffffff` / 1px `#e8eaee` / radius 20px / shadow rgba(0,0,0,0.04) 0px 5px 51px

HTML-comment rgb samples `rgb(0,111,255)` / `rgb(11,19,53)` / `rgb(0,102,204)` are this Tier 1 ledger. Portable Foundations restates those rgb tuples on Bigin Blue / Hero Navy / Link Blue (E2a).

Home / pricing / company URLs are dual-destination with portable Experience Scope (E2a).

### Tier 2 (no usable record)

- getdesign.md/bigin — not listed (404)
- styles.refero.design — Bigin not indexed (KR brand)

### Narrative (not interface tokens)

- Biginsight (빅인사이트 / 어플리켓 → Biginsight 2018) founded 2015; product timeline (Bigin 2018 → 3.0 2021 → 4.0 2023), investors (Crescendo Equity Partners, Mixpanel partnership), acquisitions (Taggers, Opinno Marketing 2022), and awards (APAC MarTech Startup TOP 10, Korea AI Startup 100, TIPS) are all read directly from the brand-owned company page (`https://www.bigin.io/company`) on 2026-06-26. Dual portable Scope (under adjacent complete B2a as public-history / narrative-not-interface-token) + this ledger (E2a).
- Refusal of legacy enterprise chrome / growth-hack urgency, and embrace of rounded mostly-flat interface + one electric blue + Bold Spoqa + consultative CTA, live in portable Scope under the refusal/embrace B2a limiter.

Voice samples (§10 / live inspect) are verbatim from the live homepage and company page. Dual-destination for the Observed strings and the 2026-06-26 date: portable Content & Locales + this ledger (E2a). Derived §10 tone table and forbidden register are not this observation class.

## Claim ledger

Token extraction is `live-extract` (2026-06-26). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body `#006fff`, `#0066cc`, `#0b1335`, `#ffffff`, tint ladder, mint pair, `#e8eaee`, slate inks | home-live computed style (footer + HTML comment) |
| Header CTA 20px / 40px / 14px/700; lift CTA 24px / 58px / 18px/700; connect 8px / 36px | home-live + pricing-live |
| H1 56px/700 white on navy; section 40px/700; plan-title 32px/700; subhead 24px/700; eyebrow 20px/700; body 16px/400; nav 14px/700; arrow 18px/500 | home-live + pricing-live |
| YAML `cta-glow` vs `cta-glow-tight` vs `button-primary.shadow` vs `button-connect.shadow` vs `card-ambient` vs `feature-card.shadow` | YAML metadata + body §4 / §6 |
| YAML unitless `lineHeight` 1.3 / 1.4 / 1.5 vs body-table `~1.3` / `~1.4` / `~1.5` / `normal` | YAML + body §3 |
| §14 empty/loading/error/success/skeleton/disabled rows | source state contract (philosophy layer §10–15); portable Capture record under adjacent complete B2a on graph-not-adopted `229` and table characterizations `231` (limiter immediately before the table) |
| §15 durations 120ms/220ms/320ms, easing names, reduced-motion, signature glow-lift / fade-in | source-stated; portable Motion under adjacent complete B2a on duration-table Use `150`, easing-table Use `158`, signature-motion list `166`, and reduce-motion `173` |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`120ms` / `220ms` / `320ms`), easing names, signature motions, and `prefers-reduced-motion: reduce` remain in portable Motion under the adjacent source-stated limiters (`150` duration table; `158` easing table; `166` signature list; `173` reduce-motion). B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables (`DESIGN.md:175`). Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds (`599` / `604`); the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide tool prompts are deleted from the portable body (no adapter slot). Verified hexes and harvested parent geometry in that guide already live in Foundations / Components / Experience capture-bound.

Unique §9-only renderable fields restored to receiving components as local recipes, not as global type tokens (A3/A4). A prior “no unique §9-only renderable field” close is SUPERSEDED (2026-08-24 wave11 sol resubmit):
- White Feature Card child tuple: title `24px / 700 / #3d4046` with body `16px / 400 / #53585f` (`DESIGN.md:369`)
- Tinted Section child tuple: eyebrow `20px / 700 / #7e8696` with section title `40px / 700 / #000000` (`DESIGN.md:385`)
- Header / Navigation band: white header with blue `#006fff` 20px-radius CTA pill right-aligned (`DESIGN.md:441`)

Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog first-party favicon URL is dual: this identity ledger + portable Typography & Assets identity-boundary sentence `DESIGN.md:220` (E2a). Named gaps has no first-party-mark sentence and does not restate the URL
- Homepage `https://www.bigin.io` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- `https://www.bigin.io/pricing` / `https://www.bigin.io/company` are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#006fff` destinations: identity + Scope token-note `11` + Scope atmosphere `15` + Distinctive limiter `42` / bullet `44` + Principles item 2 `58` + capture-bound `66` + Foundations Bigin Blue `94` / Semantic unmerged-role `92` + Capture-record Empty `235` + Capture-record generic Focus `247` + Primary CTA Background/field-note `257,266` + Lift CTA Background/field-note `283,292` + Connect Chip Background `309` + Form Input named Focus `337,341,352,354` + Header / Navigation band §9-only right-aligned CTA recipe `441` + Inline Link field-note contrast `482` (E2a). Not Avoid. Not Content Observed CTAs (`545`). Not Connect Chip glow (`rgba(0,111,255,0.4)`)
- Proof is `web/references/bigin/.verification.md` (Proof — Tier 1 live inspect; method and three surfaces as recorded above). The prior “no `.verification.md` in the reference directory” sentence is deleted.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.3 / 1.4 / 1.5 preserved as ratios (A1a). Body-table `~1.3` / `~1.4` / `~1.5` / `normal` kept beside those ratios. Body rem companions `3.50rem` / `2.50rem` / `2.00rem` / `1.50rem` / `1.25rem` / `1.13rem` / `1.00rem` / `0.88rem` restored on Type roles
- Verified primitive types preserved per component: button×3 + tab + card×4 + badge + listItem; Form Input / Footer have no YAML type and none was invented (A1b)
- Generic Input Focus `#006fff` is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary CTA / Lift CTA / Connect Chip omit loading/error/success fields (C2). Form Input omits loading/success and keeps error applicable as a form field. Nav Link and Inline Link loading/error/success remain destination/selection role-based. White Feature Card / Tinted Section Container / Blue Accent Block / Mint Integration Card / Eyebrow Label / Header / Navigation band / Footer omit kind/map (C4)
- Form Input and Footer are body §4 only (not YAML `tokens.components`)
- Source §13 fictional archetypes are omitted. Names, biographies, and the source’s publicly-observable-segment labels are not copied here (D2). Portable Audience keeps a generic no-individual-personas-promoted exclusion only (`DESIGN.md:38`). Primary tasks come from live CTA / pricing / company surfaces, not §13
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Bigin-authored or a separately published UI specification`): listed in the derived inventory below (B2/B2a)
- Footer live-inspect method, `.verification.md` Proof method/surfaces, and the HTML-comment rgb sample dump are this ledger only. Portable Semantic bullets restate role rgb tuples on Bigin Blue / Hero Navy / Link Blue (E2a)

## Derived inventory (portable B2a)

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Bigin-authored or a separately published UI specification`):

- Scope product-origin / MarTech-definition `9`
- Scope three-URL evidence-domain assignment `9`
- Scope token-note register-split `11`
- Scope evidence-domain stay-attached-to-the-establishing-surface / homepage-header-not-inner-page-nav / pricing-table-heading-not-navy-hero-headline `13`
- Scope marketing-site character / confident-SaaS-dashboard-turned-outward / one-blue-action / reserved-almost-exclusively / navy-band-against-white / product-narrative-peaks / airy-white-editorial-flow / more-legible-link-blue / typographic-personality-entirely-700 / source-treats-700-as-unusual / warmer-slate / size-not-weight / distinguishing-from-fintech-blue-peers / rounded-low-shadow tint-ladder / 20px-workhorse / barely-there-depth / whisper-soft elevation / friendly-modern-data-product-aesthetic / capable-but-unintimidating `15`
- Scope public-history / narrative-not-interface-token `21`
- Scope refusal / embrace / consultative-CTA `23`
- Primary-tasks application (three captured jobs; §13 out of the list) `29`
- Audience no-individual-personas-promoted / exclusion / observable-work-follows-three-tasks `38`
- Distinctive-trait bullets / unmerged-role readings `42` (limiter immediately before the bullets; not trailing)
- five numbered principles `55`
- capture-bound grouping of §7 Do’s / live inspect / token note including Bold-is-the-brand-voice / single-action-color / softer-read `63`
- Avoid §7 Don’ts named list-head `76`
- Avoid last-bullet no-body-copy-in-Bold `84`
- Semantic color unmerged-role readings including extra list characterizations `92` (role-list restatement `110`)
- Semantic Connect Chip glow unmerged from CTA glow `112`
- Spacing ~8px-base / generous-48px / tighter-26px-on-compact-item-cards / typical-SaaS-marketing-rhythm `118`
- Shape local-geometry / Small-Medium-Large-Extra-Full role labels / 20px-workhorse `124`
- Elevation table Use assignments `134`
- Elevation YAML shadow writings unmerged `144`
- Elevation shadow-philosophy including whisper-soft-ambient / lifted-and-clickable / staying-on-brand `146`
- Motion duration-table Use / source-stated classification `150`
- Motion easing-table Arriving / Dismissals / Two-way `158`
- Motion signature CTA glow lift / feature-card reveal / no-bounce-off-brand / functional-and-quiet / competence-not-playfulness `166` (adjacent to the signature list, not remote from `150`)
- Motion reduce-motion instant-collapse / product-remains-fully-functional `173`
- Font evidence-class application including one-font / mostly-one-weight `183`
- Family font-use boundary `195`
- Typography type-rule including softening-the-dense-Bold-type `197`
- Type roles ratio-versus-size-local `201`
- Type roles unmerged-ink `203`
- Assets favicon identity-only `220`
- Assets imagery-not-invented-decoration `222`
- Capture-record graph-not-adopted preservation / philosophy-layer classification `229`
- Capture-record table characterizations including previous-values-stay-visible `231` (limiter immediately before the table; not trailing)
- Capture-record generic-Focus not focus-visible `247`
- Primary CTA unmerged-field `266`
- Lift CTA unmerged-field `292`
- Connect Chip unmerged-field `317`
- Form Input unmerged-field / generic-Focus `340`
- Form Input additional-observed generic-Focus `354`
- White Feature Card unmerged-field `368`
- White Feature Card §9-only title/body child tuple `369`
- White Feature Card fade-in-not-tap-target `371`
- Tinted Section Container unmerged-field `384`
- Tinted Section §9-only eyebrow/title child tuple `385`
- Blue Accent Block unmerged-field `400`
- Mint Integration Card unmerged-field `415`
- Eyebrow Label unmerged-field `428`
- Header / Navigation band parent-surface / header-fill-not-nav-item-background `440`
- Header / Navigation band §9-only white-header + right-aligned blue CTA pill `441`
- Nav Link captured-variant / unmerged homepage-inner inks / active-not-focus-visible / item-not-header-fill `470`
- Inline Link unmerged-field `482`
- Layout Breathing-room / airy-marketing-surface / Tint-segmentation / Rounded-cadence / typical-SaaS-rhythm / ~8px-base restatement / recorded-layout centered-column / alternating-bands / two-up-and-grid / pricing-comparison-plus-closing-navy-CTA-band / repeated-20px-radius `506`
- Layout collapsing-strategy / image-behavior / touch-target purpose reading / recorded-span / surface-measurements `525`
- Content Observed citation-character of parentheticals `538`
- Content empty/loading strings as state-contract not extra Observed samples `547`
- Content derived voice + tone table labels + forbidden register `551`

## Revision 2026-08-24 (wave11 sol resubmit)

Worker: grok-4.6 T2-1. Rulebook v7. New F3 not required and was not re-ran (E2c).

Portable DESIGN SHA-256 `cff360f291eb360e45ef92fcfb8f3054c003f41b2e76688623bf832c92eaf5f7`. `node test-v2/tools/migrate-reference.mjs --brand bigin --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/bigin/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. These are command outputs, not a catalog-adoption claim (E2c).

Superseded current claims:
- “no `.verification.md` in the reference directory” — deleted. Proof / method / three surfaces are connected from `web/references/bigin/.verification.md` (this ledger Tier 1).
- “unique §9-only renderable field 없음” — local child tuples restored at White Feature Card `369`, Tinted Section `385`, Header right-aligned CTA `441`.
- Nav Link `Background: #ffffff (header)` — split: parent surface Header / Navigation band `436`; Nav Link child has no Background field `458`.
- Audience/provenance re-listing of persona-derived segment labels — generic deletion only (`DESIGN.md:38` + this ledger D2 bullet).
- Distinctive / state-table / signature-motion trailing or remote B2a — limiters now immediately before Distinctive bullets `42`, state table `231`, signature-motion list `166`.

F1 inventory after the B2a moves: Derived inventory above (current grepped dests). F2 greps: see this revision and `migration-log.md` Revision.
