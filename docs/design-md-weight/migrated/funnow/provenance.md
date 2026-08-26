# FunNow provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and evidence detail for the T2 migration. Canonical source remains `web/references/funnow/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | funnow |
| name | FunNow |
| country | TW |
| category | consumer-tech |
| homepage | https://www.myfunnow.com |
| primary_color | `#ff5537` |
| logo | type `favicon`, slug `https://cdn.myfunnow.com/web/images/funnow_favicon.svg` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-10 |
| components_harvested | true |

The logo record is a first-party FunNow CDN asset — the site's own `<link rel="icon">` file — so it is carried in the portable Assets section as a brand asset as well as being indexed here. Two destinations (E2a).

`tokens.note`, verbatim from the source frontmatter:

> primary = live CTA / urgency orange-red (#ff5537, matches the official favicon SVG fill); teal #4dcbcb is the secondary outline accent; flash-sale tags run indigo #5a69eb. Vuetify/Material chrome — flat v-cards, 4px radius everywhere.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-10 |
| added | 2026-06-10 |
| tokens.extracted | 2026-06-10 |
| surfaces inspected | 2026-06-10 |
| sibling verification notes | 2026-06-10 |

Source footer, verbatim: **Verified:** 2026-06-10 · **Conflicts unresolved:** none.

## Sibling verification file (E2)

`web/references/funnow/.verification.md` exists beside the legacy source (a dotfile — it does not appear under `ls` or a `*` glob; the path was addressed directly) and **is adopted** as the evidence record for this migration. It is titled "FunNow — Verification Notes (2026-06-10)".

Adoption is at the evidence level only. **No portable token and no structural classification was promoted from the sibling** (B1). Concretely, the sibling records the following facts that the legacy `DESIGN.md` never carried, and none of them entered `docs/design-md-weight/migrated/funnow/DESIGN.md`:

| Sibling-only fact | Where it lives | Portable body |
|---|---|---|
| Homepage hero H1 element height `88px` ("2 lines ≈ 44px lh") | Raw samples below | 0 occurrences of `88px` |
| Merchant H1 `font-size: 46px`, merchant H2 sections `font-size: 34–38px` / `font-weight: 400` | Raw samples below | 0 occurrences of `46px` or `38px` |
| Category page H1 element height `36px` | Raw samples below | `36px` occurs in the portable body only as the legacy header-button height (`button-outline-teal.height`, `button-text.height`, §5 "36px header buttons"), never as this element height |
| Merchant CTA height `35–40px` | Raw samples below | `40px` occurs in the portable body only as the legacy toolbar/CTA/input height, never as this range |
| Google favicon proxy render `32×32`, `sz=128`, 223 B PNG; brand SVG 517 B | Logo decision below | `128px` occurs 0 times in the portable body |
| Full-DOM background and foreground colour frequency counts (`rgba(0,0,0,0.87)` ×387 / ×1770, `rgb(255,255,255)` ×175 / ×466, `rgb(255,85,55)` ×43 / ×221, `rgb(255,177,7)` ×17, `rgb(90,105,235)` ×13, `rgb(37,39,41)` ×9 / ×502, `rgb(167,167,169)` ×6 / ×60, `rgb(77,203,203)` ×1 / ×18, `rgb(255,216,209)` ×1, `rgb(255,238,235)` ×1, `rgb(0,0,0)` ×125, `rgba(0,0,0,0.4)` ×19) | Raw samples below | No frequency count appears in the portable body; the legacy document promoted these colours by role, not by count |
| Structural readings — that the merchant heading is an H1, that the category page title is an H1 and its intro an H2, that "All" is the active tab in a tab list | Raw samples below | The portable body uses only the legacy document's own role names (Display Hero H1, Page Title H1, Section Intro H2, filter tab with an active variant). No heading level or element classification was carried across from the sibling into a body fact |
| The sibling's own published-label captures `"Get Started"`, `"FunNow Booking — Help you stay on top"`, `"Taipei｜TaoyuanHot Spring"`, `"FunNow｜生活玩樂誌"` | Raw samples and Country sources below, byte-exact | Only the labels the legacy document itself carries ("Reach Out to Us", "Grow with Us", "Help you stay on top") appear in the portable body |

## Evidence class

`tokens.source: live-extract`. Method, verbatim from the sibling:

> playwright getComputedStyle (live DOM) — global playwright (chromium, headless), goto domcontentloaded + 3.5–4.5s settle, modal/cookie dismissal pass, then `getComputedStyle` on body, h1/h2/h3, buttons, inputs, tabs, badges/chips, plus full-DOM background/text color frequency scans on three surfaces.

The inspection covers computed colour, type, spacing, radius, border, and shadow on three surfaces. It records no transition property, animation name, duration, easing, or reduced-motion sample. That is why the portable Motion section keeps the source's durations, roles, and rules as a system-level statement with an adjacent qualifier, and drops the three curve values (see the Omission ledger).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | consumer homepage | https://www.myfunnow.com/en | 2026-06-10 |
| category | category listing surface | https://www.myfunnow.com/en/regions/1/categories/10265 | 2026-06-10 |
| merchant | FunNow Booking merchant surface | https://www.events.myfunnow.com/booking-en | 2026-06-10 |

## Sources

### Tier 1 (from the legacy footer, verbatim scope notes)

| URL | What it supplied |
|---|---|
| https://www.myfunnow.com/en | homepage, live computed-style inspect — toolbar, hero, booking bar, product cards, tags |
| https://www.myfunnow.com/en/regions/1/categories/10265 | category listing surface, live inspect — page title, filter tabs, listing chrome |
| https://www.events.myfunnow.com/booking-en | FunNow Booking merchant surface, live inspect — CTAs, headings |
| https://blog.myfunnow.com | official FunNow blog |
| https://www.events.myfunnow.com/whyfunnow-zh | official Why FunNow brand page — mission and slogans |

### Tier 2 (none available)

- **getdesign.md/funnow** — WebFetch 2026-06-10 → 404 / "No designs found for 'funnow'". No brand-name variant exists (myfunnow also implausible; site search itself reported zero results).
- **styles.refero.design/?q=funnow** — playwright navigate 2026-06-10 → search executed, results returned unrelated brands only (Wizz, Fold, Foodnoms, Fuser, Busuu…). FunNow not listed.

→ Tier 2: none available. Tier 1 live inspect carries all token claims (TW policy per `spec/regional-sources.yaml`).

### Country sources (TW — brand-owned ≥2 requirement)

1. **https://www.myfunnow.com** — FunNow official consumer platform (Tier 1 live-inspected on two surfaces: homepage + category listing).
2. **https://blog.myfunnow.com** — FunNow official lifestyle blog 「FunNow｜生活玩樂誌」 (brand-owned; deal guides and brand voice).
3. **https://www.events.myfunnow.com/whyfunnow-zh** — official "Why FunNow" brand page (brand-owned; mission, slogans: "Last minute unlimited", "線上一鍵預訂，線下即刻出發！", "尖峰有優惠，離峰更划算！").
4. **https://www.events.myfunnow.com/booking-en** — FunNow Booking merchant SaaS surface (brand-owned; live-inspected).

Note from the sibling: getdesign.md / styles.refero.design / Google favicon proxy are explicitly NOT counted toward the TW brand-owned requirement.

### Narrative sources (not interface tokens)

The legacy source comment names these classes for §11:

- Official brand page (brand-published): "Last minute unlimited", 亞洲首款主打「最後一分鐘」的預訂平台, mission 我們希望讓你透過簡單、可靠的預訂，隨興成行，達到隨心所欲享受生活的願景。
- Published founder-story coverage (Meet Global), **paraphrased** by the source: the empty-seat yield-management insight, TK Chen's ING background.
- Third-party press: $5M Series A (TechCrunch, 2018-08-12), $15M Series B (TechCrunch, 2021-11-08), merger with Eatigo (TechCrunch, 2023-09-11), expansion to HK / Malaysia / Japan / SEA (Meet Global / bnext coverage).

## Raw samples (from the sibling, 18 records)

Kept here because they are per-element evidence, not portable contract.

- `myfunnow.com/en` · body · `font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "PingFang TC", "Microsoft JhengHei", ...` · `color: rgb(37, 39, 41)` (#252729) · `font-size: 15px` · `line-height: 22.5px` · `background-color: rgb(244, 244, 245)` (#f4f4f5)
- `myfunnow.com/en` · hero H1 "Explore & book your fun activities in Ta…" · `font-size: 36px` · `font-weight: 500` · `color: rgba(0, 0, 0, 0.87)` · height 88px (2 lines ≈ 44px lh)
- `myfunnow.com/en` · hero H2 "Book motel & hotel, massage & spa, resta…" · `font-size: 17px` · `font-weight: 400` · `color: rgb(37, 39, 41)`
- `myfunnow.com/en` · search submit button · `background-color: rgb(255, 85, 55)` (#ff5537) · `color: rgb(255, 255, 255)` · `border-radius: 4px` · `padding: 0px 16px` · height 40px · `font-size: 14px` · Material elevation shadow `rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px …`
- `myfunnow.com/en` · "Download App" button · `color: rgb(77, 203, 203)` (#4dcbcb) · `border: 1px solid rgb(77, 203, 203)` · `border-radius: 4px` · `padding: 0px 8px` · height 36px · `font-size: 15px`
- `myfunnow.com/en` · "Login / Sign Up" button · transparent bg · `color: rgb(0, 0, 0)` · `border-radius: 4px` · `padding: 0px 8px` · height 36px · `font-size: 15px`
- `myfunnow.com/en` · booking bar buttons (Category/Now/Date/Time/Pax) · transparent bg · `color: rgba(0, 0, 0, 0.87)` · `border-radius: 4px` · `padding: 0px 12px` · height 40px · `font-size: 17px`
- `myfunnow.com/en` · search input · `font-size: 16px` · `padding: 8px 16px` · height 40px · `border-radius: 0px`
- `myfunnow.com/en` · badge "Available now" · `background-color: rgb(255, 85, 55)` (#ff5537) · `color: rgb(255, 255, 255)` · `border-radius: 4px` · `padding: 2px 8px` · `font-size: 12px` · `font-weight: 500`
- `myfunnow.com/en` · badge "Flash Sales Now" / "06:00 Flash Sale" · `background-color: rgb(90, 105, 235)` (#5a69eb) · `color: rgb(255, 255, 255)` · `border-radius: 4px` · `padding: 0px 8px` · `font-size: 12px` · `font-weight: 400`
- `myfunnow.com/en` · product tiles · class `v-card v-card--flat` · `background-color: rgb(255, 255, 255)` · `border-radius: 4px` · `box-shadow: none` · measured 360×135 (list) and 233×146 (carousel)
- `myfunnow.com/en` · bg frequency scan (top): `rgba(0,0,0,0.87)` ×387, `rgb(255,255,255)` ×175, `rgb(255,85,55)` ×43 (#ff5537), `rgba(0,0,0,0.4)` ×19, `rgb(255,177,7)` ×17 (#ffb107), `rgb(90,105,235)` ×13 (#5a69eb), `rgb(37,39,41)` ×9, `rgb(167,167,169)` ×6 (#a7a7a9), `rgb(77,203,203)` ×1 (#4dcbcb), `rgb(255,216,209)` ×1 (#ffd8d1), `rgb(255,238,235)` ×1 (#ffeeeb)
- `myfunnow.com/en` · fg frequency scan (top): `rgba(0,0,0,0.87)` ×1770, `rgb(37,39,41)` ×502 (#252729), `rgb(255,255,255)` ×466, `rgb(255,85,55)` ×221 (#ff5537), `rgb(0,0,0)` ×125, `rgb(167,167,169)` ×60 (#a7a7a9), `rgb(77,203,203)` ×18 (#4dcbcb)
- `regions/1/categories/10265` · page H1 "Taipei｜TaoyuanHot Spring" · `font-size: 24px` · `font-weight: 700` · height 36px
- `regions/1/categories/10265` · page H2 intro · `font-size: 18px` · `font-weight: 400`
- `regions/1/categories/10265` · filter tab "All" (active) · `color: rgb(255, 85, 55)` (#ff5537) · `font-size: 17px` · `padding: 0px 16px` · height 48px; inactive tabs ("Beitou Hot Spring Hotel" …) `color: rgb(37, 39, 41)` (#252729) · height 48px
- `events.myfunnow.com/booking-en` · CTA "Reach Out to Us" / "Get Started" / "Grow with Us" · `background-color: rgb(255, 85, 55)` (#ff5537) · `border-radius: 5px` · height 35–40px
- `events.myfunnow.com/booking-en` · H1 "FunNow Booking — Help you stay on top" · `font-size: 46px` · `color: rgb(37, 39, 41)`; H2 sections `font-size: 34–38px` · `font-weight: 400`

## Conflict matrix (from the sibling)

| Field | Tier 1 (live) | getdesign | refero | Resolution |
|---|---|---|---|---|
| Primary color | `#ff5537` (CTA, tags, active tab, favicon SVG fill) | n/a (404) | n/a (not listed) | `#ff5537` — Tier 1 only, cross-confirmed by official favicon SVG `fill="#FF5537"` |
| Radius | 4px (consumer product), 5px (events/merchant pages) | n/a | n/a | 4px canonical; 5px noted as merchant-surface variant — documented, not a conflict |
| Heading color | `rgba(0,0,0,0.87)` (homepage H1) vs `rgb(37,39,41)` (events headings, body) | n/a | n/a | Both kept: Material 87%-black default + `#252729` charcoal; documented in §2 |

No unresolved conflicts. The portable Foundations section keeps the two-heading-colour split rather than collapsing it.

## Logo decision (from the sibling)

- Google s2 favicon proxy (`domain=myfunnow.com&sz=128`): 223 B PNG at **32×32** only (Google lacks a 128px render) — but visually verified as the real FunNow "f" mark in brand orange, NOT a generic globe.
- `cdn.simpleicons.org/funnow` → 404. `github.com/FunNow` org exists but avatar is an auto-generated identicon (not a logo).
- **Chosen:** `type: favicon, slug: https://cdn.myfunnow.com/web/images/funnow_favicon.svg` — the site's own `<link rel="icon">` asset, 517 B SVG, HTTP 200, vector brand mark with `fill="#FF5537"`. (Precedent: 29cm uses a direct brand-CDN asset URL as favicon slug.)

Only the slug itself is carried into the portable Assets section, together with the legacy §2 statement that the primary colour is the favicon SVG fill. The byte size, HTTP status, proxy comparison, and the literal `fill="#FF5537"` attribute string stay here.

## Claim ledger

Every value below traces to `web/references/funnow/DESIGN.md`. "Source location" is the legacy section or YAML path.

| Claim | Source location | Portable destination |
|---|---|---|
| `tokens.colors.primary` / `on-primary` | YAML `tokens.colors`, §2 Primary | Foundations → Semantic color (brand and action table) |
| `tokens.colors.teal` / `flash-indigo` / `amber` | YAML `tokens.colors`, §2 Secondary Accents | Foundations → Semantic color (secondary accents table) |
| `tokens.colors.ink` / `ink-pure` / `muted` / `canvas` / `surface` | YAML `tokens.colors`, §2 Neutrals & Surfaces | Foundations → Semantic color (neutrals and surfaces table) |
| `tokens.colors.tint-peach` / `tint-blush` | YAML `tokens.colors`, §2 Tints | Foundations → Semantic color (tints table) |
| `rgba(0,0,0,0.87)` Material 87%-black | §1, §2 Neutrals, §4 Inputs | Experience → Scope; Foundations → Semantic color; Components → Hero Search Field |
| `tokens.typography.family.sans` / `.tc` + §3 full stacks incl. PMingLiU and WenQuanYi | YAML `tokens.typography.family`, §3 Font Family | Typography & Assets → Family |
| 7 type roles (size, weight, **unitless** lineHeight, use) | YAML `tokens.typography`, §3 Hierarchy table | Typography & Assets → Type roles (A1a: ratios 1.22 / 1.50 / 1.41 / 1.00 / 1.30 kept as ratios; the source's own px equivalents 44px and 22.5px kept beside them) |
| §3 Principles (system type, bilingual parity, modest display sizes, compact body) | §3 Principles | Typography & Assets → Typography rules |
| `tokens.spacing` xs / sm / md / base | YAML `tokens.spacing`, §5 Spacing System | Foundations → Spacing (+ Layout & Platforms heights) |
| `tokens.rounded` sm / md | YAML `tokens.rounded`, §5 Border Radius Scale | Foundations → Shape |
| `tokens.shadow.flat` / `raised` | YAML `tokens.shadow`, §6 table | Foundations → Elevation (+ Components → Search / Primary CTA Button shadow) |
| §6 Overlay `rgba(0,0,0,0.4)` scrim | §6 table | Foundations → Elevation and Typography & Assets → Assets carry the value (2 occurrences in the portable body); Layout & Platforms → Imagery restates the scrim behaviour from §8 without repeating the value, as §8 itself does |
| `button-primary` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Search / Primary CTA Button |
| `button-outline-teal` (`type: button`) | YAML `tokens.components`, §4 Buttons | Components & States → Download App Outline Button |
| `button-text` (`type: button`) + §9 "no border" | YAML `tokens.components`, §4 Buttons, §9 header-actions reference | Components & States → Quiet Header Text Button |
| `badge-available-now` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Available Now Badge |
| `badge-flash-sale` (`type: badge`) | YAML `tokens.components`, §4 Badges | Components & States → Flash Sale Badge |
| `card-product` (`type: card`) + §4 measurements 360×135 / 233×146 | YAML `tokens.components`, §4 Cards & Containers | Components & States → Product Tile |
| `tab-filter` (`type: tab`, active variant) + §4 `padding: 0px 16px` + §9 white bar background | YAML `tokens.components`, §4 Tabs, §9 filter-tab-bar reference | Components & States → Category Filter Tab; Header and booking-toolbar record |
| `input-search` (`type: input`) | YAML `tokens.components`, §4 Inputs | Components & States → Hero Search Field |
| §4 Navigation (white toolbar, orange logotype, city selector 17px / 400, right cluster, 40px booking-parameter text buttons) | §4 Navigation | Components & States → Header and booking-toolbar record; Typography & Assets → Assets (logotype colour) |
| §5 Grid & Container, Whitespace Philosophy | §5 | Layout & Platforms |
| §8 Breakpoints, Touch Targets, Collapsing Strategy, Image Behavior | §8 | Layout & Platforms → Responsive behavior |
| §14 nine state records with values and copy | §14 | Components & States → State record (+ per-component applicability reasons) |
| §15 durations 100 / 200 / 300ms, easing roles and uses, motion rules, reduced-motion | §15 | Foundations → Motion |
| §10 tone table, forbidden register, five verbatim voice samples | §10 | Content & Locales |
| §11 founding, founder, Zoek, positioning slogans, mission, funding and merger records, refusals | §11 | Experience → Scope (fenced as brand narrative, with the source's own evidence-class split restated) |
| §12 five principles with UI implications | §12 | Experience → Principles |
| §7 Do rules / Don't rules | §7 | Experience → Application rules / Avoid |
| §1 Key Characteristics (8 items) | §1 | Experience → Distinctive traits |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | §4 footer block | This file — Freshness, Sources, Conflict matrix |

## Derived editorial inventory

Sites in the portable `DESIGN.md` that carry an adjacent complete qualifier. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not FunNow-authored or a separately published UI specification." This is an index of the derived-reading sites, not a completeness claim.

- Scope — the "traffic-light accent economy" reading, the reading of flat white cards on the grey canvas as the reason the listings scan like a catalog, the Vuetify-chassis-as-utilitarian-crispness reading, and the speed-first / spontaneity-flavoured characterization. The source's own closing note names "traffic-light accent economy" as one of its editorial readings.
- Primary tasks — the selection of three tasks, each tied to the source passage it rests on
- Audience — the group-level restatement that remains after the four fictional archetypes were dropped
- Distinctive traits — the eight-item selection and the readings inside them (Material conservatism, rationed orange-red, traffic-light accents, density as a feature)
- Principles — the five items and each *UI implication*, including "off-peak is a win, not a discount bin", which the source's closing note names as editorial
- Foundations → Elevation — reading the flatness as FunNow inverting the Material habit so that urgency and deal tags become the highest-contrast objects. The source's closing note names "the framework ships elevation but the product flattens it" as editorial
- Foundations → Motion — reading the durations, roles, and rules as a system-level statement rather than per-component measured values
- Typography & Assets → Typography rules — reading the measured metrics as the source's four typography principles
- Components & States → How to read this section — every interactive-kind verdict, every applicability verdict, and the reason given for either
- Layout & Platforms — the "density over air" reading, the reading of the grey gutter as what replaces borders and shadows, and the reading of thin chrome as vertical space deliberately spent on listings
- Content & Locales — the voice characterization, the "energy is part of the brand" reading, and the tone table

Evidence-class boundary sentences in the portable body (a different class from the qualifier above, listed separately so the two are not conflated):

- Scope — the narrative's three evidence classes are separated in the body: brand-published slogans and mission; founder-story coverage the source paraphrases rather than quotes from FunNow; and third-party press records for the funding rounds, the Eatigo merger, and the market expansion.
- Scope — the narrative supplies product context and does not by itself supply interface tokens.
- Foundations → Motion — the source attributes its token-level claims to a live inspection of computed colour, type, spacing, radius, border, and shadow; the motion contract sits outside that attribution.
- Typography & Assets → Font evidence — the Traditional Chinese and Linux faces are named as fallbacks and are not presented as the brand face; the source records no FunNow-owned type family.
- Components & States → Available Now Badge — the sold-out flip is a change in the value the tag displays, not an operation outcome the tag reports.
- Content & Locales — the Traditional Chinese strings are the labels and the English beside them is a reading aid; reproduce them byte-exact.

A third, weaker form also appears in the body and is deliberately not counted as either of the two above: sentences that attribute a reading to the source rather than asserting it ("the source reads the hue break as deliberate", "the source calls the experience photo the persuasion layer", "the source credits the Helvetica-then-PingFang stack with keeping the two scripts at parity", "the source describes the indigo as making deals read distinctly from availability", "the source reads the booking funnel as being the hero itself"). These carry the evidence class inside the sentence; the sections they sit in also carry the complete qualifier above.

## Omission ledger

| Item | Status |
|---|---|
| Three easing curve values from §15 — `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`, `ease-decelerate` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-accelerate` `cubic-bezier(0.4, 0.0, 1, 1)` | Removed from the portable body, retained verbatim in this row. The sibling records no transition, animation, duration, or easing sample on any of the three surfaces, so no FunNow evidence attaches to a curve. All three are additionally the example curves carried by the 0.1 format's own section template (`spec/omd-v0.1.md` 265–268), which that file now labels a non-brand implementation default and forbids moving into a reference DESIGN.md. The three easing roles, their uses, and the promotion condition stay in the portable Motion section. |
| §15 role labels `ease-standard` / `ease-decelerate` / `ease-accelerate` and their uses | Kept in the portable body. Only the curve values were dropped. |
| §15 durations `motion-fast` 100ms / `motion-standard` 200ms / `motion-slow` 300ms | Kept in the portable body with an adjacent evidence-class qualifier. The rulebook's easing scope is unsourced curves only; durations vary by brand and are not treated as boilerplate. |
| Hover, ripple, pulse, disabled-opacity, sold-out, and skeleton-pulse values | Unresolved. §15 assigns card hover to `motion-standard` and ripple / tag appearance to `motion-fast`, and §14 states that orange CTAs fade in opacity, the availability tag flips to a muted sold-out state, and skeleton blocks use a flat pulse — none of these carries a colour, opacity, scale, transform, or duration value. Named in Governance without values. |
| Four persona records (林佳穎 27 台北; Marcus Tan 33 Kuala Lumpur; 張媽媽 & family 45 宜蘭; Kenji 38 Okinawa) — names, ages, cities, and biographies | Deleted. The source's own §13 header and its closing comment both label them fictional archetypes whose names are illustrative and do not refer to real people. Not promoted, and deliberately not re-hosted here: no name, age, city, or demographic segment list from §13 is kept in this file (D2). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | Deleted as tool-facing packaging. Every value in it already exists elsewhere in the source except two renderable details, which were moved rather than dropped (A3): the filter-tab-bar's white background, now in the Header and booking-toolbar record, and the text button's "no border", now in the Quiet Header Text Button record. |
| Sibling-only element measurements (`88px`, `46px`, `34–38px`, `35–40px`, category H1 element height `36px`) and DOM frequency counts | Held here as evidence. Not promoted into the portable body — the sibling is adopted as evidence, not as a token source. Absence is at fact level: the numerals `36px` and `40px` do occur in the portable body carrying legacy control heights, never these sibling element measurements. |
| Sibling-only structural readings (heading levels, tab-list membership, active-tab identity) | Held here as evidence. No sibling classification was carried into a body fact; the portable body uses only the legacy document's own role names (B1). |
| Sibling-only published labels `"Get Started"`, `"FunNow Booking — Help you stay on top"`, `"Taipei｜TaoyuanHot Spring"`, `"FunNow｜生活玩樂誌"` | Held here byte-exact in Raw samples and Country sources. They are sibling captures rather than legacy body values, so they stay at the evidence level rather than entering the portable contract. |
| Favicon byte size (517 B SVG), HTTP status, Google-proxy comparison (223 B, 32×32, `sz=128`), simpleicons 404, GitHub identicon | Held here in Logo decision. The portable Assets section carries only the slug and the colour attribution. |

## Notes on evidence separation

- The consumer surfaces (`myfunnow.com/en` and the category listing) and the merchant surface (`events.myfunnow.com/booking-en`) are separate evidence domains. The one place they diverge in the source — radius 4px on the consumer product and 5px on the events/merchant CTAs — is carried into the portable Shape section as two values with their domains attached, not merged.
- The Traditional Chinese strings are the published labels. Every one of them is preserved byte-exact in the portable body with an English reading aid beside it, never in place of it (A5). The English glosses the source supplies for the two Why FunNow slogans are also kept verbatim.
- §11's three evidence classes — brand-published slogans, paraphrased founder-story coverage, and third-party press records — are preserved as three classes in the portable Scope rather than flattened into one verified-fact voice.
- The legacy source comment's list of interpretive claims ("traffic-light accent economy", "the framework ships elevation but the product flattens it", "off-peak as a win not a discount bin") is the source's own editorial marking. Each of the three is qualified adjacently in the portable body at the section where it appears.
