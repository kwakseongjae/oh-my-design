# Bahamut provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/bahamut/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | bahamut |
| name | Bahamut |
| country | TW |
| category | consumer-tech |
| homepage | https://www.gamer.com.tw |
| primary_color | `#11aac1` |
| logo | type `favicon`, slug `https://i2.bahamut.com.tw/apple-touch-icon-144x144.png` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from source: `primary = Bahamut Teal (#11aac1) — active tab/CTA background; active link text is a darker teal (#117e96). Body text is warm dark gray (#464646). Page canvas is near-white (#f8f8f8).` Dual destination (E2a): this ledger and portable Experience Scope 13 (same note plus the adjacent register-split / derived editorial implementation inference / not-Bahamut-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / first-party slug `https://i2.bahamut.com.tw/apple-touch-icon-144x144.png` is dual-destination: this identity ledger + portable Typography & Assets 200 (E2a). Portable Assets treats that URL as catalog identity metadata rather than a captured in-page logo drawing (adjacent complete B2a). Named gaps has no first-party-mark sentence.

Catalog homepage exact `https://www.gamer.com.tw` (no trailing slash) is dual-destination: Experience Scope 9 + this identity ledger (E2a). Surfaces/Sources/Tier 1 hold the same literal. Live-inspect home URL `https://www.gamer.com.tw` is also Scope 11 + Primary tasks 33 + this surfaces/Tier 1 ledger (E2a). Forum `https://forum.gamer.com.tw` is Scope 11 + Primary tasks 35 + this surfaces/Tier 1 ledger (E2a).

Catalog `primary_color` `#11aac1` is identity metadata + portable Scope token-note 13 + Scope atmosphere 17 + Distinctive 44/53/55 + Principles *UI implication* 62 + capture-bound Do 69 (Avoid names teal without this hex) + Foundations unmerged-role 93 + Foundations Primary 95 + Capture-record Active 223 + Top Nav Tab Active 237 / field note 244 / additional selected 256 + Content Section Tab Active 264 / field note 271 + Sidenav field note 322 (as not-fill). It is not active-link text `#117e96` and not secondary-underline `#009cad`. Named gaps has no this hex.

`tokens.source: live-extract` and `components_harvested: true` are this ledger only (A1c).

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| live inspect (playwright getComputedStyle) | 2026-06-22 |
| Observed voice samples | 2026-06-22 |
| footer Verified | 2026-06-22 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#11aac1` teal fill vs `#117e96` link text vs `#009cad` secondary underline; Canvas / on-primary `#ffffff` vs page `#f8f8f8` vs section `#f3f3f3`; Heading `#2d2d2d` vs body `#464646` vs muted `#8c8c8c`; Hairline `#e5e7eb` vs search `0px none`; 4px workhorse vs 2px hot badge vs 0px search/header-link vs YAML `full` 9999 absent from live radius list; YAML line-height ratios `1.50` / `1.57` / `1.40`; YAML `family.sans` vs body CJK chain with `蘋果儷中黑` / `"Apple LiGothic Medium"`; Top Nav Tab 40px / `8px 12px` vs Content Section Tab 28px / `4px 8px` vs Header Link 44px / `0px 10px`; badge 12px vs Micro 13px vs §9-only card title 16px / 700 `#2d2d2d`; card shadow `0 1px 3px rgba(0,0,0,0.08)` vs nav contrast. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | community-portal | https://www.gamer.com.tw | 2026-06-22 |
| forum | forum | https://forum.gamer.com.tw | 2026-06-22 |

YAML homepage identity is `https://www.gamer.com.tw` (no trailing slash). Portable Scope catalog identity uses that exact literal. Surfaces/Tier 1 home row uses the same form from the source footer (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.gamer.com.tw | 2026-06-22 |
| forum-live | product-surface | https://forum.gamer.com.tw | 2026-06-22 |

### Tier 1

- https://www.gamer.com.tw — Bahamut homepage live inspect — nav, tabs, cards, badges, body text
- https://forum.gamer.com.tw — 哈啦區 forum — secondary surface confirm, same teal system

Home / forum URLs are dual-destination with portable Experience Scope 11 (E2a). Compact HTML-comment `rgb(...)` notes (`rgb(17,170,193)` and siblings) stay this Tier 1 ledger; corresponding hex values are in portable Foundations / Components. Sidenav tint `rgba(17, 170, 193, 0.1)` is dual this ledger 69/102 + portable Sidenav 314/322 (E2a). Spelled `RGB 17, 170, 193` is portable Distinctive 44 + Semantic 96.

Live-observed values (HTML comment, 2026-06-22, playwright getComputedStyle):

- Active nav tab: bg rgb(17,170,193) = `#11aac1` / text `#ffffff` / radius 4px / font 14px weight 700
- Active sidenav link: bg rgba(17,170,193,0.1) / color rgb(17,126,150) = `#117e96` / weight 700
- Body text: rgb(70,70,70) = `#464646` (warm dark gray)
- Page bg: rgb(248,248,248) = `#f8f8f8`
- Section surface: rgb(243,243,243) = `#f3f3f3`
- Nav bar bg: rgb(255,255,255) = `#ffffff`
- Muted text: rgb(140,140,140) = `#8c8c8c`
- Red accent: rgb(230,0,18) = `#e60012`

### Tier 2 (no usable record)

- getdesign.md/bahamut — 0 results (not listed)
- styles.refero.design/?q=bahamut — no matching results

### Narrative (not interface tokens)

- Bahamut (巴哈姆特) founded 1996 in Taiwan as a gaming community — public record. Dual portable Scope 23 (under adjacent complete B2a, narrative rather than interface tokens) + this ledger (E2a).
- Name drawn from the legendary dragon Bahamut in role-playing game mythology. Dual portable Scope 23 + this ledger (E2a).
- Source §11: launched when Taiwanese internet infrastructure was nascent, and grew organically to become the dominant community hub. Dual portable Scope 23 + this ledger (E2a).
- Multi-surface: GNN, 哈啦區, 巴哈商城, 動畫瘋 (`ani.gamer.com.tw`), which the source records as Taiwan's largest legal anime streaming service. Dual portable Scope 23 + this ledger (E2a).
- 動畫瘋 was bot-challenged during inspection; visual design confirmed consistent with the main portal via source inspection, not as an extra live computed capture. Dual portable Scope 23 + Named gaps 509 + this ledger (E2a).

Voice samples (§10) are verbatim from the live Bahamut homepage as inspected 2026-06-22. Dual-destination for the Observed strings and the 2026-06-22 date: portable Content & Locales 439–441 + this ledger (E2a). “首頁” is also Primary tasks 33 + Top Nav Tab Role/Use 233/237. “GNN新聞” is also Primary tasks 33 + Top Nav Tab Role/Use 233/237. “哈啦區” is also Primary tasks 35. Derived §10 tone table, voice adjectives, and forbidden register are not this observation class. Source heading sample “巴哈姆特30週年” is Content 444 under the 437 citation-character limiter (not a fourth verified-live line).

Interpretive claims (e.g., "information density is a feature", "brand continuity across decades") are editorial readings connecting observed design to Bahamut's community heritage, not directly sourced Bahamut statements. Portable Principles and Scope atmosphere restate those readings under adjacent complete B2a.

## Claim ledger

Token extraction is `live-extract` (2026-06-22). `components_harvested: true`. The source does not record `data-omd-capture` selectors or a per-hex Proof map. Footer live-inspect notes attach groups of values to named URLs; they are not a claim-by-claim computed Proof table invented here.

| claim group | evidence class / source-stated surface |
|---|---|
| YAML / body teal `#11aac1`, page `#f8f8f8`, body `#464646`, nav `#ffffff`, red `#e60012` | home-live computed style (footer HTML comment) |
| YAML `nav-tab-active` type `tab`, `#11aac1` / `#ffffff` / 4px / `8px 12px` / `14px / 700` | YAML + portable Top Nav Tab |
| YAML `nav-tab-inactive` type `tab`, `#464646` / 4px / `8px 12px` / `14px / 400` | YAML + portable Top Nav Tab inactive appearance |
| YAML `nav-link-active` type `listItem`, `#117e96` / 14px / 700 | YAML + portable Sidenav Active Link; tint `rgba(17, 170, 193, 0.1)` is body / live inspect |
| YAML `search-input` type `input`, `#ffffff` / `0px none` / 0px / `14px / 400` | YAML + portable Search Bar; body text `#464646` |
| YAML `content-card` type `card`, `#ffffff` / 4px / shadow `0 1px 3px rgba(0,0,0,0.08)` | YAML + portable Content Card; §9-only 16px / 700 title `#2d2d2d` + 13px / 400 metadata `#8c8c8c` mixed anatomy on that card (A3/A4) |
| YAML `post-badge` type `badge`, `#e60012` / `#ffffff` / 2px / `12px / 400` | YAML + portable Hot / New Badge |
| YAML `section-tag` type `badge`, `#f3f3f3` / `#464646` / 4px / `4px 8px` / `12px / 400` | YAML + portable Category Tag |
| YAML `register-btn` type `button`, `#ffffff` / 0px / `0px 10px` / `16px / 400` | YAML + portable Header Link Button; height 44px is body |
| Content Section Tab (`#11aac1` / `#ffffff` / 4px / `4px 8px` / 28px, Type: tab from source §4 Tabs) | body §4 Tabs (not YAML `tokens.components`) |
| YAML unitless `lineHeight` 1.50 / 1.57 / 1.40 | YAML + portable Type roles |
| YAML `family.sans` vs body CJK chain | YAML + portable Family |
| §14 empty/loading/error/success/skeleton/disabled/active rows | source state contract; portable Capture record under adjacent complete B2a on table characterizations |
| §15 durations 0ms/100ms/200ms, easing name `ease-standard`, reduced-motion | philosophy layer (sections 10–15); portable Motion under adjacent complete B2a |

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15, omitted from portable Foundations (name kept):

- `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`

This is unattributed. Duration tokens (`0ms` / `100ms` / `200ms`), the easing name, `prefers-reduced-motion: reduce`, and “No page transition animations, no hero reveals” remain in portable Motion under the philosophy-layer / source-stated limiter. B3 five-kind per-component computed gate remains on curve / animation-name / transition-property promotion beyond those tables. Named gaps 506 lists “all five kinds” without enumerating the five evidence kinds; the B3 full text is Foundations Motion 158 only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Verified hexes and harvested geometry in that guide already live in Foundations / Components / Experience capture-bound. Unique §9 content-card mixed anatomy (title 16px weight 700 `#2d2d2d`; metadata 13px weight 400 `#8c8c8c`; red `#e60012` badge 2px radius for hot items) is portable Content Card 368 (A3/A4). Unique §9 iteration constraints “one badge per item maximum” and “text hierarchy lives in size + weight, not color” were deleted from portable Avoid (A2; wave10 sol resubmit). They are not current Avoid 76–85. Unique §9 nav background `#ffffff` height 44px is portable Header Link Button field note 297. Remaining prompt-only constructions stay omitted here as deleted tool prompts, not as harvested components.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Proof notes

- tokens.source: `live-extract`; `components_harvested: true` preserved (A1c)
- Catalog first-party favicon URL is dual-destination: this identity ledger + portable Assets 200 (E2a)
- Catalog homepage `https://www.gamer.com.tw` is dual-destination: Experience Scope 9 + this identity ledger (E2a). Live-inspect home URL is also Scope 11 + Primary tasks 33 + Surfaces/Sources/Tier 1. Forum URL is Scope 11 + Primary tasks 35 + Surfaces/Sources/Tier 1
- `primary_color` `#11aac1` destinations: identity + Scope token-note 13 + atmosphere 17 + Distinctive 44/53/55 + Principles 62 + capture-bound Do 69 (Avoid has no this hex) + Foundations 93/95 + Capture-record 223 + Top Nav 237/244/256 + Content Section Tab 264/271 + Sidenav field note 322 (as not-fill). Named gaps has no hex. It is not `#117e96` and not `#009cad`
- Token note is dual-destination: Experience Scope 13 + this ledger (E2a)
- YAML unitless `lineHeight` 1.50 / 1.57 / 1.40 preserved as ratios (A1a)
- Verified primitive types preserved per component: tab×2 (Top Nav Tab YAML; Content Section Tab from source §4 Tabs) + button + listItem + input + card + badge×2. `Kind: interactive` does not replace those types (A1b)
- Generic Focus is absent from the source and is not promoted to `focus-visible` treatment; focus-visible rows carry no hex (B1). Source §15 `motion-instant` focus-rings use stays a duration role, not that keyboard-focus paint
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Header Link Button and Search Bar omit loading/error/success fields (C2). Top Nav Tab, Content Section Tab, and Sidenav Active Link loading/error/success remain grouping-selection role-based not-applicable. Content Card / Hot / New Badge / Category Tag omit kind/map (C4)
- Content Section Tab is body §4 (not in YAML `tokens.components`)
- Source §13 personas are fictional archetypes informed by publicly observable segments, not specific individuals. Portable Audience keeps no-individual-personas-promoted / exclusion / observable-work under adjacent complete B2a. Names, ages, cities, occupations, and biographies from source §13 are not copied here (D2). Primary tasks come from captured homepage/forum controls, not §13
- Numbered Principles 1–5 including *UI implication* notes and the capture-bound Do list are derived editorial implementation inference / not Bahamut-authored or a separately published UI specification
- Footer Tier 2 unusable records stay this ledger only
- Compact HTML-comment `rgb(...)` notes stay this Tier 1 ledger; corresponding hex values are in portable Foundations / Components. Sidenav tint `rgba(17, 170, 193, 0.1)` is dual this ledger 69/102 + portable Sidenav 314/322. Spelled `RGB 17, 170, 193` is Distinctive 44 + Semantic 93

## Derived inventory (portable B2a sites)

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Bahamut-authored or a separately published UI specification`):

- Scope product-story-span / Taiwan's-largest ranking (9)
- Scope two-URL evidence-domain assignment (11)
- Scope token-note register-split (13)
- Scope evidence-domain (homepage chrome not a proxy; 巴哈商城 / 動畫瘋 separate) (15)
- Scope no-nonsense-density / community-first-information-hub / near-white-recedes / enormous-volume-without-visual-noise / confident-teal / longstanding-palette / unapologetically-utilitarian / without-custom-font-overhead / dense-information-scanning-rather-than-leisurely-reading / warm-dark-gray-reduces-harshness / maximum-information / high-saturation-departure-from-teal-gray / inherited-gaming-community-language / veteran-portal / knows-exactly-what-community-needs / fast-dense-readable-familiar / depth-via-flat-color-layers / conservative-4px / not-an-aggressive-pill / not-a-harsh-square / emotional-urgency-signal (17)
- Scope public-history / founding-as-public-fact / volunteer-to-professional-media / design-language-preserving-dense-community-oriented-layout / 動畫瘋 bot-challenged (23)
- Scope refuses-minimalist-whitespace-redesign / would-alienate-core-users-who-depend-on-information-density / embraces-recognizable-teal / system-font-stack / tab-navigation / veteran-users-navigate-without-thought (25)
- Primary tasks not-from-§13 (31)
- Audience no-individual-personas-promoted / exclusion / observable-work (40)
- Distinctive unmerged-role / veteran-portal / maximum-information / conservative-4px (55)
- numbered Principles *UI implication* / derived stems (59)
- capture-bound grouping of §7 Do’s / live inspect (67)
- Avoid list-head including accent-active-color-reason / portal-prioritizes-speed-and-density / conservative-4px-veteran-portal-identity / palette-deliberately-restrained / text-and-link-information-density (78). one-badge-per-item-maximum / text-hierarchy-in-size-plus-weight are not current Avoid items (A2; deleted)
- Avoid last-bullet text-and-link-information-density (85). Unique §9 construction commands are not current Avoid items
- Semantic unmerged-role / teal-fill-not-link-text / darker-teal-text-not-fill / more-legible-variant-for-text-on-white / deeper-teal-not-primary / canvas-not-page / just-off-white-to-distinguish-from-cards / heading-not-body (93)
- Semantic extra-name / signature-color / contemporary-energetic-without-aggression / workhorse-text / only-highly-saturated-warm / just-off-white-to-distinguish-from-cards (104)
- Spacing unitless-versus-px (109)
- Spacing 8px-×-12px-nav-padding-local (111)
- Spacing harvested-control-padding-stays-with-those-controls (115)
- Shape local-geometry / None-Micro-Standard-Large-Full / 9999-absent (119)
- Shape local-not-universal / 4px-not-search-0px / 2px-not-category-tag / 9999-not-harvested-pill (127)
- Elevation divider-not-elevation / shadow-philosophy / table Use / nav-level-2-contrast-not-second-shadow / 1px-and-3px-stay-with-card-field (141)
- Motion philosophy-layer / source-stated / unattributed-ease-standard (145)
- Motion decades-of-community-habit / functional-and-subtle / no-page-transition / no-hero-reveal / high-frequency-use / latency-perception-unwelcome / reduced-motion-fully-functional (156)
- Font evidence-class application including system-first-not-a-loaded-webfont / YAML-sans-not-the-full-CJK-chain / CJK-fallbacks-not-a-second-identity-family (169). Live stack / no-custom-font is Font 173. no-Bahamut-authored-universal-current-typography-token / no-Bahamut-exclusive-distributed-type-family / system-faces-not-a-Bahamut-brand-asset are not current (D1; deleted)
- Family font-use boundary (182)
- Type-role ratio-versus-size-local / not-converted (186)
- Type-rule system-first-page-speed / CJK-readiness / weight-as-state-signal / size-discipline / omitted-tracking-not-invented / badge-12px-not-micro-13px / card-title-16px-not-headings-18px (196)
- Assets first-party-favicon identity-not-captured-in-page-drawing (200)
- Assets imagery-not-invented-decoration / loading-thumbnail / game-entry reconstruction limit (201)
- Capture-record graph-not-adopted (208)
- Capture-record philosophy-layer (210)
- Capture-record table characterizations (225)
- Top Nav Tab unmerged-field including on-primary-not-page-background / 8px-12px-not-section-tab (244)
- Top Nav Tab captured-variant-not-click-transition (256)
- Content Section Tab unmerged-field including 28px-not-40px / fill-not-a-second-primary-token (271)
- Header Link Button unmerged-field / §9-44px-nav-bar-unmerged-from-this-control-height (297)
- Sidenav Active Link unmerged-field including listItem-not-rewritten-to-tab-or-button (322)
- Search Bar unmerged-field including 0px-none-not-hairline (347)
- Content Card §9-only mixed-anatomy / canvas-fill-not-page-background / 4px-not-2px-hot-badge (368)
- Hot / New Badge 12px-not-13px-micro / 2px-not-4px-category-tag (383)
- Category Tag unmerged-field including section-surface-fill-not-canvas / 12px-not-13px-micro (399)
- Layout product-density / information-density-first / whitespace-not-decorative / every-row-and-card-packs-content / flat-depth / tab-rhythm / ~70-percent-plus-~30-percent-and-1200px-as-surface-measurements / layout-application-not-a-second-spacing-token (408)
- Layout measurement-boundary / collapsing-strategy / touch-purpose / source-stated-not-newly-measured (430)
- Content Observed citation-character / source-heading-sample-巴哈姆特30週年-not-a-fourth-verified-live-line (437)
- Content caption-labels (445)
- Content empty/loading strings as state-contract (447)
- Content derived voice + tone table + forbidden register including communal-direct-encyclopedic / trusted-authority-three-decades / fellow-fans / familiarity-over-formality (451)
- Content no-additional-synthetic-voice (465)
