# ASOS provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/asos/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | asos |
| name | ASOS |
| country | UK |
| category | ecommerce |
| homepage | https://www.asos.com |
| primary_color | `#2d2d2d` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=asos.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source: `primary = nav/surface dark charcoal (#2d2d2d); add-to-bag = ASOS green (#018849); accent lime = app-promo banner (#ccff00); sale red (#d01345). Font = futura-pt, all-caps wordmark.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-ASOS-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=asos.com&sz=128` is this identity ledger only. Portable Typography & Assets states a Google-favicon identity-boundary sentence without the URL (E2a). It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Catalog homepage exact `https://www.asos.com` (no trailing slash) is dual-destination: Experience Scope + this identity ledger (E2a). Surfaces/Sources/Tier 1 hold the live-inspect form `https://www.asos.com/` with trailing slash, not the identity literal. Live-inspect home URL `https://www.asos.com/` and PDP `https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249` are dual Scope + this surfaces/Tier 1 ledger (E2a: identity literal vs live-inspect trailing-slash form).

Catalog `primary_color` `#2d2d2d` is identity metadata + portable Scope token-note + Scope atmosphere + Distinctive + capture-bound Do (not Avoid; Avoid has no hex) + Foundations Charcoal / Semantic unmerged-role + Elevation + Capture-record empty/error headings and Retry + Retry Background / Observed / field note + Search text / field note + Primary Gender Nav Tab Background / field note + Category Sub-Nav field note. It is not body ink `#000000` and not Nav Active `#525050`.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| live inspect (playwright getComputedStyle, headed Chrome, UA spoofed) | 2026-06-22 |
| Observed voice samples | 2026-06-22 |
| footer Verified | 2026-06-22 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#2d2d2d` charcoal vs body ink `#000000` vs Nav Active `#525050`; Canvas `#ffffff` vs `on-primary` / `on-dark` / `cta-green-on` `#ffffff`; Surface `#f8f8f8` vs Surface Alt `#f7f7f7`; Hairline `#dddddd` vs Neutral Light `#e8e8e8`; Muted `#666666` vs Muted Alt `#858585` vs Disabled size `#999999`; Add-to-bag `#018849` vs Lime `#ccff00` vs Sale Red `#d01345` vs Info Blue `#27455c`; YAML `rounded.lg` 19 / `19px` search vs 0px default vs YAML `full` 9999 / `9999px` absent from live UI; YAML line-height ratios `1.25` / `1.0` vs body-table “16px on 16px”; YAML `sub-nav` 14px / 400 vs body-table Category sub-nav 10.5px / 700; Hero dark-image border `2px solid #ffffff` vs light-image `2px solid #000000`; Add to bag / Hero 44px vs Retry 48px vs Search 38px vs Nav 60px vs Sub-nav 50px vs Size 56px vs Lime 30px; YAML product-card `fg` `#000000` vs §9-only 14px name + 16px price mixed anatomy; Sale Badge 12px vs YAML Sale price 16px. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-homepage | https://www.asos.com/ | 2026-06-22 |
| pdp | product-detail | https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249 | 2026-06-22 |

YAML homepage identity is `https://www.asos.com` (no trailing slash). Portable Scope catalog identity uses that exact literal. Surfaces/Tier 1 home row uses the live-inspect form `https://www.asos.com/` from the source footer (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.asos.com/ | 2026-06-22 |
| pdp-live | product-surface | https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249 | 2026-06-22 |

### Tier 1

- https://www.asos.com/ — homepage, live computed style via playwright
- https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249 — PDP; Add to bag, size selector, nav observed

Home / PDP URLs are dual-destination with portable Experience Scope (E2a). HTML-comment `rgb(...)` notes are this Tier 1 ledger; corresponding hex values are already in portable Foundations / Components. Portable Font evidence restates the source-body `rgb(0,0,0)` tuple that already sits on the live body-color note; additional HTML-comment rgb groupings stay this ledger.

Live-observed values (HTML comment, 2026-06-22):

- body: font-family futura-pt; color rgb(0,0,0); font-size 16px
- Nav WOMEN/MEN tabs: bg rgb(45,45,45) `#2d2d2d`; color rgb(255,255,255); font-weight 900; height 60px
- App banner "Download our new app": bg rgb(204,255,0) `#ccff00`; color rgb(0,0,0); height 30px; font-weight 600
- Hero CTAs "SHOP WOMENS/MENS": bg rgb(255,255,255); color rgb(0,0,0); radius 0px; padding 9px 14px; height 44px; font-weight 700
- Search input: bg rgb(255,255,255); color rgb(45,45,45); radius 19px; height 38px
- Add to bag: bg rgb(1,136,73) `#018849`; color rgb(255,255,255); radius 0px; height 44px; font-weight 700
- Sub-nav tabs (Sale, New in, Clothing...): bg rgb(82,80,80) `#525050`; height 50px; font-weight 400
- Size selector chips: bg rgb(230,230,230); height 56px; radius 0px
- Sale price text color: rgb(208,19,69) `#d01345`

### Tier 2 (no usable record)

- getdesign.md/asos — 404 (no entry)
- styles.refero.design/?q=asos — no ASOS results found (fashion adjacent brands returned, but not ASOS)

### Narrative (not interface tokens)

- ASOS founded 2000 by Nick Robertson and Quentin Griffiths in London. Originally "As Seen On Screen." Source HTML comment: publicly documented facts. Dual portable Scope (under adjacent complete B2a, narrative rather than interface tokens) + this ledger (E2a).
- ASOS operates in 200+ countries, no physical stores. Pure-play digital retailer. Public company (LSE: ASC). Dual portable Scope + this ledger (E2a).
- Own label ASOS DESIGN; size-inclusive ranges Curve, Petite, Tall, AS/4U. Dual portable Scope + Content Inclusivity row (E2a).

Voice samples (§10) are verbatim from the live ASOS homepage as inspected 2026-06-22. Dual-destination for the Observed strings and the 2026-06-22 date: portable Content & Locales + this ledger (E2a). “SHOP WOMENS” is also Primary tasks + Type roles Hero CTA Use + Hero dark Role/Use + Hero C2 omission + derived tone table. “Search for items and brands” is also Primary tasks + Search Bar Use. “Download our new app” is also Lime Promo Banner Use + derived tone table. Derived §10 tone table, voice keywords, and forbidden register are not this observation class.

Interpretive claims (e.g., "product first, chrome second", "neutral container that makes everything else look good") are editorial readings connecting observed design to publicly stated brand positioning, not directly sourced ASOS statements. Portable Principles and Scope atmosphere restate those readings under adjacent complete B2a.

## Claim ledger

Token extraction is `live-extract` (2026-06-22). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body charcoal `#2d2d2d`, canvas `#ffffff`, lime `#ccff00`, hero CTAs, search 19px, nav 60px / weight 900 | home-live computed style (footer HTML comment) |
| YAML / body Add to bag `#018849`, size selector `#e8e8e8` / 56px, sale `#d01345` | pdp-live |
| YAML `button-add-to-bag` type `button`, `#018849` / `#ffffff` / 0px / `4px 0px` / 44px / `16px / 700 futura-pt` | YAML + portable Add to Bag |
| YAML `button-hero-cta` type `button`, `#ffffff` / `#000000` / 0px / `9px 14px` / 44px / `16px / 700 futura-pt` / `2px solid #ffffff` | YAML + portable Hero Editorial CTA (on dark image) |
| YAML `button-hero-cta-dark` type `button`, same fill/type/padding/height/font, `2px solid #000000` | YAML + portable Hero Editorial CTA (bordered, on light image) |
| YAML `search-input` type `input`, `#ffffff` / `#2d2d2d` / 19px / `0px 70px 0px 16px` / 38px / `16px / 400 futura-pt` | YAML + portable Search Bar |
| YAML `product-card` type `card`, `#ffffff` / `#000000` / 0px | YAML + portable Product Grid Card; §9-only 14px name / 16px price / `#d01345` sale mixed anatomy on that card (A3/A4) |
| YAML `sale-badge` type `badge`, `#d01345` / `#ffffff` / 0px / `12px / 700 futura-pt` | YAML + portable Sale Badge |
| YAML `lime-promo-banner` type `card`, `#ccff00` / `#000000` / 0px / `0px 16px` / 30px / `14px / 600 futura-pt` | YAML + portable Lime Promo Banner |
| YAML `nav-tab` type `tab`, `#2d2d2d` / `#ffffff` / 0px / `14px / 900 futura-pt`, active `text #ffffff + active indicator (bg shift to #525050)` | YAML + portable Primary Gender Nav Tab; height 60px is body / live inspect, not YAML |
| Retry / Utility Action (`#2d2d2d` / `#ffffff` / 0px / 15px / 48px / 14px / 900, Type: button) | body §4 Buttons (not YAML `tokens.components`) |
| Size Selector (`#e8e8e8` / `#000000` / 0px / 56px / 16px / 400; Type: input from source Inputs heading; Kind: interactive) | body §4 Inputs |
| Surface Section (`#f8f8f8` / `#000000` / 0px, Type: card from §4 Cards) | body §4 Cards |
| Category Sub-Nav Tab (`#525050` / `#ffffff` / 0px / 50px / `0px 10px` / 14px / 400, Type: tab from §4 Tabs) | body §4 Tabs |
| YAML unitless `lineHeight` 1.25 / 1.0 | YAML + portable Type roles |
| YAML `family.primary` futura-pt; `family.fallback` Tahoma, Geneva, Verdana, Arial, sans-serif | YAML + portable Family |
| Body alternate `Futura-pt, "Futura Std"` | body §3 + portable Family |
| Body-table Category sub-nav 10.5px / 700 | body §3 + portable Type roles (not YAML `sub-nav`) |
| §14 empty/loading/error/success/skeleton/disabled/sale-pricing rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 0ms/120ms/200ms/300ms, easing names, reduced-motion, no-spring | philosophy layer (sections 10–15); portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (names kept):

- `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

These are unattributed. Duration tokens (`0ms` / `120ms` / `200ms` / `300ms`), easing names, `prefers-reduced-motion: reduce`, and “No spring, no bounce, no theatrical delay” remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps lists the omitted curve names and “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 product-card mixed anatomy (product name 14px futura-pt weight 400 `#000000`; price 16px weight 700 `#000000`; sale price in `#d01345`) is portable Product Grid Card (A3/A4). Unique §9 search placeholder “Search for items and brands” is portable Search Bar Use + Content Observed (also in source §10). Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog Google favicon URL is this identity ledger only. URL-free capture-method / not-a-portable-mark sentence → portable Assets only (E2a). Named gaps has no first-party-mark sentence.
- Catalog homepage `https://www.asos.com` is dual-destination: Experience Scope + this identity ledger (E2a). Live-inspect home URL with trailing slash is Surfaces/Tier 1 + Scope evidence-domain list. Identity literal is not a Surfaces/Sources/Tier 1 value
- PDP URL is dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#2d2d2d` destinations: identity + Scope token-note + Scope atmosphere + Distinctive + capture-bound Do (Avoid has no hex) + Foundations Charcoal / Semantic unmerged-role + Elevation + Capture-record headings + Retry Background / Observed / field note + Search text / field note + Primary Gender Nav Background / field note + Category Sub-Nav field note. Named gaps has no hex. It is not body ink `#000000`
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML unitless `lineHeight` 1.25 / 1.0 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×4 (Add to Bag, Hero dark, Hero light, Retry) + input×2 (Search Bar YAML; Size Selector from source Inputs heading) + card×3 (Product Grid Card YAML; Lime Promo Banner YAML; Surface Section from source §4 Cards) + badge + tab×2 (Primary Gender Nav YAML; Category Sub-Nav from source §4 Tabs). Size Selector has no YAML `tokens.components` type; Type `input` is the source Inputs heading classification (A1b)
- Generic Focus is absent from the source and is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1). Named nav active/hover `#525050` stays a captured variant, not a `focus-visible` paint
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Add to Bag loading/error/success are applicable from the source §14 add-to-bag role; those §14 rows remain guidance, not computed paints on the harvest (C2). Both Hero CTAs / Retry omit loading/error/success fields (C2). Search Bar omits loading/success; error remains a form-field row. Size Selector loading/error/success remain role-based not-applicable. Primary Gender Nav Tab and Category Sub-Nav Tab loading/error/success remain grouping-selection role-based. Product Grid Card / Surface Section / Sale Badge / Lime Promo Banner omit kind/map (C4)
- Retry, Size Selector, Surface Section, Category Sub-Nav Tab are body §4 (not all in YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments, not specific individuals. Portable Audience keeps no-individual-personas-promoted / exclusion / observable-work under adjacent complete B2a. Names, ages, cities, occupations, and biographies from source §13 are not copied here (D2). Primary tasks come from captured homepage/PDP controls, not §13
- Numbered Principles 1–5 including *UI implication* notes and the capture-bound Do list are derived editorial implementation inference / not ASOS-authored or a separately published UI specification
- Footer Tier 2 unusable records stay this ledger only
- HTML-comment `rgb(...)` notes: portable Font evidence restates `rgb(0,0,0)` from the live body-color note; additional HTML-comment rgb groupings stay this Tier 1 ledger

## Derived inventory (portable B2a sites)

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not ASOS-authored or a separately published UI specification`):

- Scope product-story-span (As Seen On Screen / UK online-fashion-retailer as narrative rather than tokens)
- Scope two-URL evidence-domain assignment
- Scope token-note register-split
- Scope evidence-domain (homepage chrome not a proxy; headed Chrome inspect bound to §1–9)
- Scope stark-editorial-restraint / product-photography-heavy-lifting / get-out-of-the-way / razor-sharp zero-radius / search-pill-exception / three-accents-never-compete / fashion-retail-distilled / almost-black-without-harsh / navigation-backbone / echoing-wordmark / deliberate-search-softness / dense-precise-unapologetic
- Scope public-history / founding-as-public-fact
- Scope democratic-instinct / digital-native-container / neutral-monochrome-frame / refuses-exclusivity / embraces-scale
- Primary tasks not-from-§13
- Audience no-individual-personas-promoted / exclusion / observable-work
- Distinctive unmerged-role / product-photography-centred / chrome-minimal
- numbered Principles *UI implication* / product-first stems as derived (source HTML comment)
- capture-bound grouping of §7 Do’s / live inspect
- Avoid including completing-purchase-signal
- Semantic unmerged-role / charcoal-not-body-ink / defining-chrome / not-pure-black / maximum-contrast / green-as-commerce-only / lime-as-promo-only / sale-red-as-price-signal
- Spacing unitless-versus-px
- Spacing 0px-between-cards density
- Spacing harvested-control-padding-stays-with-those-controls
- Shape local-geometry / Zero-system-default / Pill-single-exception / Full-absent / 19px-search-only / 9999px-absent (limiter precedes the labeled list)
- Elevation divider-not-elevation / shadow-philosophy / table Use / lime-as-absolute-visual-layer / green-as-the-one-coloured-action / flatness-not-oversight / photography-supplies-three-dimensional-interest
- Motion philosophy-layer-not-live-inspect / source-stated / spec-template-ease-exit-match / content-is-the-theatre
- Motion functional-unobtrusive / no-spring / rapid-browse / reduced-motion-fully-navigable
- Font evidence-class application including fallback-not-product-face / alternate-not-second-identity
- Family font-use boundary
- Typography Futura-everywhere / weight-signals-hierarchy / uppercase-for-identity / display-and-navigation-uppercase / body-and-product-description-mixed-case / zero-kerning / compact-line-heights
- Type-role ratio-versus-size-local / 10.5px-unmerged-from-14px-sub-nav / omitted-tracking-not-invented
- Assets Google-favicon identity-not-captured
- Assets imagery-not-invented-decoration
- Capture-record graph-not-adopted
- Capture-record philosophy-layer
- Capture-record table characterizations including encouraging-product-exploration / 404-style
- Add to Bag field-note unmerged-field
- Hero dark unmerged-variant
- Hero light unmerged-variant
- Retry unmerged-field
- Search only-rounded-element / 19px-local
- Size Selector unmerged-field / out-of-stock named-availability-variant
- Product Grid Card §9-only mixed-anatomy
- Surface Section unmerged-field
- Sale Badge 12px-unmerged-from-16px
- Lime Promo high-visibility-editorial / Type-card-not-rewritten
- Primary Gender Nav captured-variant-not-click-transition / hover-name-not-copied-as-hover-only-hex / unmerged-field
- Primary Gender Nav additional-observed captured-variant
- Category Sub-Nav unmerged-field
- Layout product-density / commerce-first / whitespace-not-a-design-statement / flat-depth / tints-do-hierarchy-work / zero-radius-discipline
- Layout measurement-boundary / collapsing-strategy / image-behavior / touch-purpose
- Content Observed citation-character / caption-labels / empty-loading-as-state-contract
- Content derived voice + tone table + forbidden register + voice-keywords
- Content no-additional-synthetic-voice
