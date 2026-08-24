# ASOS Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

ASOS (As Seen On Screen) is a UK online fashion retailer. Catalog homepage identity is `https://www.asos.com`. Treating that opening identity sentence — the As Seen On Screen expansion and the UK online-fashion-retailer product-story span — as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

Treating the following two URLs as the named live-inspect evidence domains of this reconstruction is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. This contract covers two current first-party web surfaces from the 2026-06-22 live inspect: the homepage `https://www.asos.com/` and the product-detail page `https://www.asos.com/noisy-may/noisy-may-cropped-tank-top-in-washed-grey/prd/205778249`.

Source token note: primary = nav/surface dark charcoal (`#2d2d2d`); add-to-bag = ASOS green (`#018849`); accent lime = app-promo banner (`#ccff00`); sale red (`#d01345`). Font = futura-pt, all-caps wordmark. Treating that note as a register split — `#2d2d2d` is catalog `primary_color` and harvested nav/chrome fill rather than body ink `#000000`; `#018849` is the Add-to-bag fill rather than a second identity colour; `#ccff00` is the sitewide app-promo banner rather than an interactive fill; `#d01345` is the sale-price / sale-badge signal rather than error chrome — is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. The source HTML comment attaches token-level claims in §1–9 to playwright `getComputedStyle` on those two URLs (headed Chrome). Values below stay attached to the page that established them. A homepage chrome value is not a proxy for every other captured page. Commerce, editorial, help, and app pages remain separate evidence domains.

The next paragraphs’ stark-editorial-restraint, product-photography-heavy-lifting, get-out-of-the-way, razor-sharp zero-radius, search-pill-exception, three-accents-never-compete, fashion-retail-distilled, almost-black-without-harsh, navigation-backbone, echoing-wordmark, deliberate-search-softness, and dense-precise-unapologetic readings are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. The source reads ASOS’s visual identity as built on stark editorial restraint. Product photography is described as doing the heavy lifting against a pure white (`#ffffff`) canvas that has no colour tinting and no gradients. The UI chrome is kept in a signature dark charcoal (`#2d2d2d`) that the source reads as almost-black without being harsh, functioning as the navigation backbone. The source calls the result fashion retail distilled: get out of the way and let the product speak.

What the source treats as instantly recognisable is a commitment to zero-radius geometry. Buttons, cards, inputs — everything is razor-sharp at 0px corner radius, echoing the bold uppercase wordmark. The sole exception recorded is the search bar (19px pill radius), described as a deliberate softness for the search affordance. The source reads that geometry as fashion-editorial: the grid is dense, precise, and unapologetic.

The only moments of colour the source names as purposeful are an electric lime (`#ccff00`) for the app download promo banner, a confident ASOS green (`#018849`) for the “Add to bag” CTA, and a sale red (`#d01345`) for discounted prices. The source says these three colours never compete — lime is sitewide utility, green is the commerce action, red is the price signal — and that everything else is black and white.

Treating the following public-history and product-line facts as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. ASOS was founded in **2000** in London by **Nick Robertson** and **Quentin Griffiths**, with the original premise of selling products seen on celebrities in film and TV. The name was literal: shoppers could identify a piece worn on screen and buy an equivalent on ASOS. The source HTML comment records those founding details as publicly documented facts. The business is described as evolving from a niche celebrity-copycat service into one of the world’s largest pure-play fashion retailers, serving customers in over 200 countries, headquartered in London, with no physical stores and no concessions. The source HTML comment also records it as a public company (LSE: ASC). Signature breadth named in the source: thousands of brands alongside its own label (ASOS DESIGN), and size-inclusive ranges (Curve, Petite, Tall, AS/4U).

The following democratic-instinct, digital-native-container, neutral-monochrome-frame, refuses-exclusivity, and embraces-scale readings are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. The source reads the celebrity-referencing origin as shaping a democratic instinct — fashion as something you see on people you admire, then access, not something gatekept behind boutique doors. It treats the digital-native identity as embedded in the design system: the UI exists to surface product at scale, not to create an aspirational in-store atmosphere. The design system is read as a neutral, editorial monochrome frame that carries any product photography without competing with it. What the source treats ASOS as refusing: the exclusivity and gatekeeping of traditional fashion retail. What it treats ASOS as embracing: scale, inclusivity, speed-to-trend, and the proposition that fashion should be findable and affordable by everyone.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three live control strings below as the independently verified user outcomes, and not lifting tasks from source §13 fictional archetypes, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

- Shop women’s or men’s fashion from the homepage hero CTAs (`SHOP WOMENS` / `SHOP MENS`).
- Search for items and brands from the global search bar.
- Add a product to bag on a product-detail page (`Add to bag` on the captured PDP).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable ASOS user segments, not individual people. Restricting Audience so no individual personas are promoted, those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

### Distinctive traits

- Catalog `primary_color` / nav charcoal `#2d2d2d` (not body ink `#000000`)
- White canvas `#ffffff`; hairline `#dddddd`; surfaces `#f8f8f8` / `#f7f7f7`
- Add-to-bag green `#018849`; sale red `#d01345`; app-promo lime `#ccff00`
- `futura-pt` as the recorded UI family; weight 900 on WOMEN / MEN; uppercase nav and CTA labels
- Zero-radius geometry at 0px on buttons, cards, badges, tabs, and size chips; search input 19px pill is the recorded exception
- YAML `rounded.full` 9999 (`9999px`) is recorded as not present in the live UI
- Shadow token `none`; separation by `#dddddd` hairlines and `#f8f8f8` / `#f7f7f7` tints
- Ultra-bold 14px / 900 primary nav on a 60px charcoal bar; 30px lime banner above it; 50px `#525050` category sub-nav
- Product photography centred; UI chrome kept to nav, search, and commerce controls

Treating `#2d2d2d` as nav/chrome identity rather than body ink, treating `#018849` as the single commerce-action fill rather than a second identity colour, treating `#ccff00` as promo-banner-only rather than an interactive fill, treating `#d01345` as the sale-price signal rather than error chrome, treating `#ffffff` canvas as unmerged from `#ffffff` on-primary / on-dark / cta-green-on, treating `#f8f8f8` as unmerged from `#f7f7f7`, treating 0px as the system default rather than a universal radius for the search pill, treating 19px as search-only rather than YAML `rounded.lg` applied everywhere, treating `9999px` as absent from the live UI rather than a harvested radius, treating weight 900 on WOMEN / MEN as the primary-nav command rather than a general headline face, and treating product-photography-centred / chrome-minimal as distinctive character rather than published UI doctrine, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. The source HTML comment marks interpretive claims such as “product first, chrome second” as editorial readings connecting observed design to publicly stated brand positioning, not directly sourced ASOS statements.

1. **Product first, chrome second.** The UI exists to surface product photography. Every design decision that reduces distraction from the product grid is the right decision. *UI implication:* zero-radius cards, shadow-free layout, near-monochrome system colours.
2. **Breadth as a feature.** ASOS’s value proposition is quantity and variety at accessibility — every style, every size, every price point. *UI implication:* the dense product grid that maximises product exposure per viewport pixel; category navigation that covers every department.
3. **Fashion for everyone, not for someone.** Inclusivity is non-negotiable. Size-inclusive ranges (Curve, Petite, Tall, AS/4U) are first-class, not footnotes. *UI implication:* size selector design accommodates extended ranges without visual hierarchy that deprioritises non-standard sizes.
4. **Speed and freshness.** ASOS’s “New In” is a genuine product promise — newness at extreme velocity. *UI implication:* the New In tab is prominent, the product card grid is optimised for scanning at speed rather than lingering.
5. **The action is always clear.** In an environment of thousands of products and dozens of categories, the commerce action must be unambiguous. *UI implication:* the single green add-to-bag button is the only green in the system — colour has been reserved so the action is unmistakable.

Treating the following as a capture-bound application of source §7 Do’s and live inspect is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

- Use `futura-pt` uppercase for all nav labels and CTAs.
- Use weight 900 for primary nav items (WOMEN/MEN).
- Use sharp 0px radius on all buttons, cards, and badges.
- Use `#2d2d2d` charcoal (not pure black) for the nav and primary chrome.
- Reserve `#018849` ASOS green exclusively for the add-to-bag action.
- Use `#ccff00` lime only for promotional banners.
- Use `#d01345` red only for sale prices and discount indicators.
- Keep the layout flat — no shadows; use hairlines and tints for separation.

### Avoid

The following items copy source §7 Don’ts, including the completing-purchase-signal on add-to-bag green. They are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification.

- Do not apply rounded corners to any button or card — 0px radius is non-negotiable.
- Do not use multiple accent colours simultaneously — lime, green, and red each have a single role.
- Do not use a weight below 700 on hero CTAs.
- Do not use inline decorative shadows — the system is flat by design.
- Do not mix futura-pt with secondary display typefaces.
- Do not apply the lime (`#ccff00`) colour to interactive elements other than promo banners.
- Do not put the add-to-bag green on non-commerce actions — it signals “completing purchase”.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings, including charcoal-not-body-ink on `#2d2d2d`, defining-chrome / not-pure-black on Charcoal, maximum-contrast on Pure Black, green-as-commerce-only, lime-as-promo-only, and sale-red-as-price-signal, are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. Catalog `primary_color` `#2d2d2d` is the live nav/chrome fill (YAML `primary`) and Retry / Utility Action fill; it is not body ink `#000000` and not Nav Active `#525050`. Canvas `#ffffff` is page background, product cards, and form inputs; YAML `on-primary`, `on-dark`, and `cta-green-on` also use `#ffffff` as text-on-dark/on-green and stay unmerged as named fields. Pure Black `#000000` is body text, headings, product names, hero-CTA label, lime-on, and size-selector default text; it is not charcoal chrome. Surface `#f8f8f8` is alternate surface backgrounds; Surface Alt `#f7f7f7` is a secondary tint; they stay unmerged. Hairline `#dddddd` is dividers and PLP skeleton placeholders; Neutral Light `#e8e8e8` is size-selector fill (and the named unavailable-size chip fill); they stay unmerged. Muted `#666666` is utility-nav / footer / struck original price; Muted Alt `#858585` is tertiary/meta; Disabled size text `#999999` is the §14 unavailable-size field only — not Muted. Info Blue `#27455c` is informational text and link states in some editorial surfaces, not the Add-to-bag fill.

**Primary Surface**

- **Charcoal** (`#2d2d2d`): YAML `primary`. Primary navigation background, the defining surface colour of the ASOS chrome. Catalog `primary_color`. Not pure black.
- **Canvas White** (`#ffffff`): YAML `canvas`. Page background, product cards, form inputs.
- **Pure Black** (`#000000`): Body text, headings, product names — maximum contrast on white.

**Navigation & Interactive**

- **Nav Active** (`#525050`): YAML `nav-active`. Slightly lighter charcoal for active/hover nav items (Women tab when viewing Women) and the category sub-nav bar fill.
- **Muted** (`#666666`): YAML `muted`. Utility nav text (Help & FAQs, footer links); also the struck original price in §14 Sale pricing.
- **Muted Alt** (`#858585`): YAML `muted-alt`. Tertiary text, meta information.

**Commerce Actions**

- **ASOS Green** (`#018849`): YAML `cta-green`. The “Add to bag” button — the single primary commerce CTA. YAML `cta-green-on` `#ffffff` is the label on that fill.
- **Sale Red** (`#d01345`): YAML `sale-red`. Reduced prices, sale tags, discount labels.
- **Lime / Acid Yellow** (`#ccff00`): YAML `lime`. App download promo banner. YAML `lime-on` `#000000` is the label on that fill.

**Neutral Scale**

- **Surface** (`#f8f8f8`): YAML `surface`. Very light grey for alternate surface backgrounds.
- **Surface Alt** (`#f7f7f7`): YAML `surface-alt`. Secondary tint for sections.
- **Neutral Light** (`#e8e8e8`): YAML `neutral-light`. Light grey for size selector chips (selected/available states).
- **Hairline** (`#dddddd`): YAML `hairline`. Dividers and borders between elements.
- **Info Blue** (`#27455c`): YAML `info-blue`. Informational text and link states in some editorial surfaces.
- **On-primary / On-dark** (`#ffffff`): YAML `on-primary` and `on-dark`. Text on charcoal / dark chrome. Same hex as Canvas; named fields stay unmerged.

### Spacing

YAML `spacing` is unitless: xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64. Treating those YAML numbers as unitless token numbers rather than a claimed px scale, while keeping the §5 observed px scale as a separate observation, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

Observed scale in the body: 4px, 8px, 16px, 24px, 32px, 48px, 64px. Base unit stated in the source: 8px. Notable: 0px padding between product cards in the grid. Spacing appears on section breaks and inner card padding. Treating that 0px-between-cards density as a recorded listing behaviour rather than a universal padding token is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

Treating harvested control padding as staying with those controls, not as a universal padding token, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. Harvested control padding stays with those controls: Add to bag `4px 0px`; Hero CTAs `9px 14px`; Search `0px 70px 0px 16px`; Lime banner `0px 16px`; Category sub-nav `0px 10px`; Retry `15px`.

### Shape

YAML `rounded`: sm 0, md 0, lg 19, full 9999 (`9999px` in the body).

Observed radii in the body. The following local-geometry reading, including Zero as the system default, Pill 19px as the single exception, and Full `9999px` as absent from the live UI, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

- Zero (0px): all buttons, cards, badges, tabs, size chips — the system default
- Pill (19px): search input only — the single exception
- Full (9999px): not present in the live UI

0px / 19px / `9999px` remain local harvested geometry, not a universal radius for every unlisted control. 19px is the search input, not YAML `rounded.lg` applied to buttons or cards. `9999px` is a YAML `full` step the source records as absent from the live UI, not a harvested pill.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | All surfaces — the system default |
| Hairline (Level 1) | `1px solid #dddddd` | Dividers, category separators |
| Tint (Level 2) | `#f8f8f8` / `#f7f7f7` background shift | Section alternation |

YAML `tokens.shadow.none` is `none`.

The following divider-not-elevation and shadow-philosophy readings, including the table Use assignments, lime-as-absolute-visual-layer, green-as-the-one-coloured-action, flatness-not-oversight, and photography-supplies-three-dimensional-interest, are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. The source reads ASOS as a completely shadowless system. Every surface is flat. Depth is communicated solely through stark colour contrast: charcoal (`#2d2d2d`) nav against white canvas, lime banner as an absolute visual layer, green add-to-bag as the one coloured action. The source says the flatness is not an oversight — it keeps the focus on product photography, which supplies all the three-dimensional interest the page needs.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating §15 as philosophy-layer rather than live-inspect, treating the duration table, easing names, content-is-the-theatre / no-spring readings, and reduced-motion line as source-stated rather than computed CSS, treating the omitted `ease-exit` curve as matching the legacy spec-template example, and treating the “fashion content is the theatre, not the UI” reading as editorial, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State commits (bag count update, size selection tick) |
| `motion-fast` | 120ms | Hover states, button press, nav tab active |
| `motion-standard` | 200ms | Dropdown open, add-to-bag confirmation |
| `motion-slow` | 300ms | Page-level transitions, hero carousel |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — dropdowns, menus, drawers |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions |

The following motion-rule readings, including functional-unobtrusive, content-is-the-theatre, no-spring, rapid-browse, and reduced-motion-fully-navigable, are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. ASOS motion is described as functional and unobtrusive — the fashion content is the theatre, not the UI. Hover states on product cards (like/save icons appearing) use `motion-fast`; navigation dropdowns use `motion-standard`. No spring, no bounce, no theatrical delay. The product grid is read as needing to feel fast and responsive — slow motion would undermine the rapid-browse behaviour the system is built for. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the page remains fully navigable.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including the fallback-not-product-face assignment and the alternate `Futura-pt, "Futura Std"` string as not a second identity family and not YAML `family.primary`, are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Homepage and PDP inspect: `font-family` futura-pt; body `color rgb(0,0,0)`; body `font-size` 16px. Nav WOMEN/MEN weight 900. Hero CTAs weight 700. App banner weight 600. Sub-nav weight 400. |
| Declared fallback | YAML `family.fallback`: `Tahoma, Geneva, Verdana, Arial, sans-serif`. Those faces are fallbacks, not the brand face. |
| Alternate named stack | Body records `Futura-pt, "Futura Std"` for sub-nav and secondary elements. That string is a recorded alternate, not a second identity family and not YAML `family.primary`. |

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. Do not present Tahoma, Geneva, Verdana, Arial, or `sans-serif` as futura-pt. Do not replace futura-pt with a different claimed family. Do not present `Futura-pt, "Futura Std"` as YAML `family.primary`.

The following type-rule readings (Futura everywhere; weight signals hierarchy; uppercase for identity; zero kerning manipulation; compact line heights) are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. A single geometric sans-serif is described as creating system consistency. Weight 900 is the primary-nav command, 700 is actions and prices, 600 is promo, 400 is body and utility. All display and navigation text is uppercase; body and product description text is mixed case. Navigation and CTA text is rendered in uppercase. Tracking is standard — Futura’s own geometry is read as providing the visual rhythm. Body line-height is 1.0 (16px on 16px) — the grid is dense, not airy.

### Family

- **Primary:** `futura-pt` (Futura PT) — YAML `family.primary`
- **Fallback:** `Tahoma, Geneva, Verdana, Arial, sans-serif` — YAML `family.fallback`
- **Alternate (body):** `Futura-pt, "Futura Std"` — used for sub-nav and secondary elements; not YAML `family.primary`

### Type roles

Verified YAML line-height values are the unitless ratios `1.25` and `1.0`. The following ratio-versus-size-local, 10.5px-unmerged-from-14px-sub-nav, and omitted-tracking-not-invented readings are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. “16px on 16px” beside Body `1.0` is a size-local observation at 16px, not a replacement for the ratio. YAML `sub-nav` 14px / 400 is category tabs (Sale, New in, Clothing…). Body-table “Category sub-nav” 10.5px / 700 is the scroll-position gender toggle; those two roles stay unmerged. YAML roles without a tracking field stay without one.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Use (YAML / body) |
|---|---|---:|---:|---:|---|---|
| Hero CTA | futura-pt | 16px | 700 | 1.25 | Uppercase, editorial | YAML `Hero CTA buttons (SHOP WOMENS / SHOP MENS)` |
| Primary Nav (WOMEN/MEN) | futura-pt | 14px | 900 | 1.0 | Uppercase, white on charcoal | YAML `Primary nav tabs (WOMEN / MEN) — ultra-bold uppercase` |
| Utility nav | futura-pt | 14px | 400 | 1.0 | Help, Country selector | YAML `Utility nav (Help & FAQs, country selector)` |
| Sub-nav tabs | futura-pt | 14px | 400 | 1.0 | Utility tabs (Sale, New in…) | YAML `Category sub-nav (Sale, New in, Clothing…)` |
| App Banner | futura-pt | 14px | 600 | 1.0 | Uppercase, lime background | YAML `App download promo banner CTA` |
| Body | futura-pt | 16px | 400 | 1.0 | 16px on 16px at this size | YAML `Body default` |
| Price | futura-pt | 16px | 700 | 1.0 | Bold for price prominence | YAML `Product price` |
| Sale price | futura-pt | 16px | 700 | 1.0 | Sale red colour | YAML `Sale/was price in sale red` |
| Category sub-nav (gender toggle) | futura-pt | 10.5px | 700 | — | Scroll-position gender toggle | Body table only; not YAML `sub-nav` |

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

Treating verified product photography as not replaceable with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. Hex values and geometry in the harvested components remain source-stated.

The following classification of the source §14 table as philosophy-layer implementation guidance (sections 10–15), not live-inspect commerce-chrome paints, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. The source HTML comment attaches live inspect to token-level claims in §1–9. These rows describe empty/loading/error/success/skeleton/disabled/sale-pricing treatments. They are not copied onto harvested CTAs as computed paints.

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. Black heading ("No results found") at 60px futura-pt weight 900 (`#2d2d2d` text). Sub-copy explaining suggestions, search bar remains active. |
| **Empty (wishlist/saved items)** | Muted grey prompt encouraging product exploration with a CTA back to shopping. No illustration. |
| **Loading (PLP grid)** | Skeleton cards at exact product card dimensions on white `#ffffff` background. Light grey `#dddddd` placeholder rectangles for image area, title, and price. No animated shimmer in the base system. |
| **Loading (Add to bag action)** | Green button maintains `#018849` background; shows spinner/indicator while size is being added. Label updates to "Adding…" |
| **Error (item out of stock)** | Size chip rendered in `#e8e8e8` with strikethrough or reduced opacity; button state changes to "Notify me when available" in `#2d2d2d` (non-green). |
| **Error (search no results)** | 404-style heading at 60px futura-pt, sub-suggestions for search terms. |
| **Error (page not found)** | Large "404" in futura-pt 60px weight 900 `#2d2d2d`, sub-text explaining the page is unavailable, `#2d2d2d` Retry button. |
| **Success (added to bag)** | Brief confirmation — bag icon updates with item count. No full-page toast; minimal disruption to browsing flow. |
| **Success (checkout complete)** | Confirmation page with ASOS green `#018849` checkmark or confirmation header; order summary below. |
| **Skeleton** | `#dddddd` blocks at final card dimensions. No rounded corners (consistent with 0px radius system). |
| **Disabled (size unavailable)** | `#e8e8e8` background chip at 56px height, `#999999` text. Clear visual distinction from available sizes. |
| **Sale pricing** | Original price struck through in `#666666`, sale price in `#d01345` bold. |

Characterizations in that table such as “No illustration”, “No animated shimmer in the base system”, “non-green”, “No full-page toast; minimal disruption to browsing flow”, “Clear visual distinction from available sizes”, “No rounded corners (consistent with 0px radius system)”, “encouraging product exploration”, and “404-style” are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`.
Named nav “active/hover” `#525050` is generic active/hover, not that keyboard-focus treatment.
The `focus-visible` row does not carry a colour. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows, except where source §14 names the role directly (Add to Bag). This is not a complete state-coverage claim.

Product Grid Card, Sale Badge, Lime Promo Banner, and Surface Section have YAML or body card/badge types and no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted. Size Selector has no YAML `tokens.components` type; Type `input` is the source Inputs heading classification.

### Add to Bag (Primary Commerce CTA)

- Role: primary add-to-bag action on product detail page, full-width
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#018849`
- Text: `#ffffff`
- Radius: 0px
- Padding: 4px 0px
- Height: 44px
- Font: YAML `16px / 700 futura-pt`; body 16px futura-pt weight 700
- Use: YAML `Add to bag — primary commerce CTA, full-width on PDP`
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#018849` is this control’s fill and ASOS Green. `#ffffff` is this control’s label and YAML `cta-green-on`, not Canvas. Height 44px is this control and the Hero CTAs; it is not Retry 48px and not Nav 60px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the primary commerce CTA on the captured PDP |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An add-to-bag action can be unavailable; visual treatment omitted |
| loading | applicable | Source §14 names this add-to-bag role: green button maintains `#018849`, shows an indicator, label updates to "Adding…". That row is §14 guidance, not a computed paint on this harvest |
| error | applicable | Source §14 names this add-to-bag role: button changes to non-green "Notify me when available" in `#2d2d2d`. That row is §14 guidance, not a computed paint on this harvest |
| success | applicable | Source §14 names this add-to-bag role: bag icon updates with item count. That row is §14 guidance, not a computed paint on this harvest |

### Hero Editorial CTA (on dark image)

- Role: SHOP WOMENS / SHOP MENS on hero editorial image
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 9px 14px
- Height: 44px
- Font: YAML `16px / 700 futura-pt`; body 16px futura-pt weight 700
- Border: 2px solid `#ffffff`
- Use: YAML `Hero editorial CTA on dark image (SHOP WOMENS)`
- Observed: default only
- Field note: The following unmerged-variant reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. 2px solid `#ffffff` is this control’s border on dark imagery. It is not the light-image variant’s 2px solid `#000000`. `#ffffff` fill is this control’s fill, YAML `on-primary` sharing a hex with Canvas, and not Nav charcoal.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the dark-image hero CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A hero editorial CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as SHOP WOMENS / SHOP MENS on a hero image; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Hero Editorial CTA (bordered, on light image)

- Role: SHOP WOMEN'S BRANDS / secondary hero CTA on lighter backgrounds
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 9px 14px
- Height: 44px
- Font: YAML `16px / 700 futura-pt`; body 16px futura-pt weight 700
- Border: 2px solid `#000000`
- Use: YAML `Hero CTA on light image variant (bordered)`; body also names SHOP WOMEN'S BRANDS / secondary hero CTA on lighter backgrounds
- Observed: default only
- Field note: The following unmerged-variant reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. 2px solid `#000000` is this control’s border. It is not the dark-image variant’s 2px solid `#ffffff`. The two hero CTAs share fill, type, padding, height, and font and stay separate components.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the light-image bordered hero CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary hero CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a bordered hero CTA on lighter backgrounds; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Retry / Utility Action

- Role: utility/error state action buttons
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#2d2d2d`
- Text: `#ffffff`
- Radius: 0px
- Padding: 15px
- Height: 48px
- Font: 14px futura-pt weight 900
- Use: Utility/error state action buttons
- Observed: default geometry named in body §4; also named as the `#2d2d2d` Retry button on the §14 page-not-found row
- YAML `tokens.components` does not record this control; values are body §4. Type: button is from source §4 Buttons.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#2d2d2d` is this control’s fill and Charcoal / catalog `primary_color`, not Add-to-bag green. Height 48px is this control, not Add to bag 44px. Weight 900 is this utility action and Primary Nav, not Hero CTA 700.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named utility/error-state action in source §4 |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A retry/utility action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a utility/error-state action; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Search Bar

- Role: global search input in header — the only rounded element in the system
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#2d2d2d`
- Radius: 19px
- Padding: 0px 70px 0px 16px
- Height: 38px
- Font: YAML `16px / 400 futura-pt`; body 16px futura-pt weight 400
- Use: YAML `Global search bar in nav, pill-shaped`; live placeholder “Search for items and brands”
- Observed: default only
- Field note: The following unmerged-field reading, including treating 19px as this input’s pill rather than a button radius and treating “the only rounded element in the system” as a local-geometry characterization of this control rather than a published radius doctrine, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#2d2d2d` is this field’s text and Charcoal, not body ink `#000000`. `#ffffff` fill is this field and Canvas. Height 38px is this input, not Add to bag 44px. 19px is YAML `rounded.lg` on this control only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the global search bar |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| error | applicable | Search field; visual treatment omitted. Source §14 names empty/error search headings; those rows are not copied here as computed paints |

Loading and success applicability are omitted. Source records default geometry plus the live placeholder. Exact loading/success mapping for this field is unresolved, so those two fields stay omitted at this boundary rather than closed from the §14 rows.

### Size Selector

- Role: size selection chips on PDP
- Kind: interactive
- Type: input
- Anatomy: label
- Background: `#e8e8e8`
- Text: `#000000`
- Radius: 0px
- Height: 56px
- Font: 16px futura-pt weight 400
- Use: Size selection chips on PDP
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4. Type `input` is the source Inputs heading classification, not a YAML `tokens.components` type.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#e8e8e8` is this chip’s default fill and Neutral Light. Default text `#000000` is not the §14 unavailable-size text `#999999`. Those two appearances share a fill hex and stay unmerged as named fields. Height 56px is this chip, not Add to bag 44px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named size-selection chip on the captured PDP |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Source §14 names an unavailable-size appearance (`#e8e8e8` fill, `#999999` text, 56px); that named appearance is this field, not a computed paint invented for other controls |
| loading | not-applicable | A size chip selects a variant; the chip itself does not enter a loading state |
| error | not-applicable | Chip meaning is selected versus unavailable, not a request or validation failure on the chip |
| success | not-applicable | Chip meaning is size selection, not action-outcome confirmation |

Additional observed named state: source §14 out-of-stock size chip (`#e8e8e8` with strikethrough or reduced opacity). Treating that appearance as a named availability variant, not an observed click transition and not this table’s error row, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

### Product Grid Card

- Role: PLP product card — no border, no shadow, sharp edges; image fills full card width
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Use: YAML `Product grid card — zero radius, no shadow; image + name + price stacked`
- Observed: default only
- Field note: The following unmerged-field and §9-only mixed-anatomy readings are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. `#ffffff` is this card’s fill and Canvas. YAML `fg` `#000000` is this component’s token field. Source §9-only mixed anatomy is a 14px / 400 futura-pt product name in `#000000` with price at 16px / 700 `#000000` and sale price in `#d01345`; that mixed name/price is not the same as painting the whole card copy `#000000`, and the 14px name is not YAML Body 16px / 400.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Surface Section

- Role: alternating content sections and page regions
- Type: card
- Anatomy: surface
- Background: `#f8f8f8`
- Text: `#000000`
- Radius: 0px
- Use: Alternating content sections and page regions
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4. Type: card is from source §4 Cards.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#f8f8f8` is this section’s fill and Surface, not Surface Alt `#f7f7f7` and not Canvas.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Sale Badge

- Role: reduced price / sale tag on product cards in PLP
- Type: badge
- Anatomy: label
- Background: `#d01345`
- Text: `#ffffff`
- Radius: 0px
- Font: YAML `12px / 700 futura-pt`; body 12px futura-pt weight 700
- Use: YAML `Sale price label / reduced tag on PLP cards`
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#d01345` is this badge’s fill and Sale Red. 12px is this badge, not YAML Sale price 16px / 700.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Lime Promo Banner

- Role: sitewide app download promo — high-visibility editorial lime banner
- Type: card
- Anatomy: surface
- Background: `#ccff00`
- Text: `#000000`
- Radius: 0px
- Padding: 0px 16px
- Height: 30px
- Font: YAML `14px / 600 futura-pt`; body 14px futura-pt weight 600
- Use: YAML `App download promo sitewide banner at page top`; live string “Download our new app”
- Observed: default only
- Field note: The following unmerged-field reading, including treating “high-visibility editorial lime banner” as a local-role characterization rather than a published banner doctrine, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#ccff00` is this banner’s fill and Lime, not Add-to-bag green. Height 30px is this banner, not Search 38px and not Nav 60px. YAML Type is `card`; that primitive is preserved and is not rewritten as a button.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Primary Gender Nav Tab

- Role: WOMEN / MEN primary navigation tabs
- Kind: interactive
- Type: tab
- Anatomy: label
- Background: `#2d2d2d`
- Text: `#ffffff`
- Radius: 0px
- Height: 60px (body §4 / live inspect; YAML `tokens.components.nav-tab` records no height)
- Font: YAML `14px / 900 futura-pt`; body 14px futura-pt weight 900
- Active: YAML `text #ffffff + active indicator (bg shift to #525050)`; body background shifts to `#525050` on active/hover gender tab
- Use: YAML `Primary nav tabs WOMEN / MEN`
- Observed: default, plus named active/hover `#525050` shift
- Field note: Treating the named active/hover `#525050` shift as a captured variant, not an observed click transition, treating that name as not copied onto the hover applicability row as a hover-only hex, and the following unmerged-field reading (`#2d2d2d` resting versus `#525050` active/hover versus Category Sub-Nav resting; height 60px versus 50px), is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.
It is also not a `focus-visible` treatment.
`#2d2d2d` is this tab’s resting fill and Charcoal. `#525050` is this tab’s named active/hover fill, Nav Active, and the Category Sub-Nav resting fill — those jobs share a hex and stay unmerged as named fields. Height 60px is this tab, not Category Sub-Nav 50px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the WOMEN / MEN primary nav tab |
| hover | applicable | Pointer-web tab; visual treatment omitted. Source names an active/hover bg shift to `#525050`; that name is not copied onto this row as a hover-only hex |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A gender tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A gender tab selects a grouping (WOMEN / MEN); the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active/hover appearance (background `#525050`, text `#ffffff`). Treating that appearance as a captured variant, not an observed click transition, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

### Category Sub-Nav Tab

- Role: category tabs (Sale, New in, Clothing, Dresses, Shoes, Accessories, Brands…)
- Kind: interactive
- Type: tab
- Anatomy: label
- Background: `#525050`
- Text: `#ffffff`
- Radius: 0px
- Height: 50px
- Padding: 0px 10px
- Font: 14px futura-pt weight 400
- Use: Category tabs (Sale, New in, Clothing, Dresses, Shoes, Accessories, Brands…)
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4. Type: tab is from source §4 Tabs.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. `#525050` is this tab’s resting fill and Nav Active, not Primary Gender Nav’s resting `#2d2d2d`. Height 50px is this bar, not Primary Gender Nav 60px. 14px / 400 is YAML `sub-nav`, not the 10.5px / 700 scroll-position gender toggle.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named category tab on the captured homepage |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A category tab selects a department grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 16, base 16, lg 24, xl 32, xxl 48, section 64. Body layout repeats 4px, 8px, 16px, 24px, 32px, 48px, 64px with an 8px base unit. Add to bag is 44px high. Size selector chips are 56px high. Primary nav tabs are 60px high. Search is 38px high with 16px left padding and 70px right padding. Lime banner is 30px high. Category sub-nav is 50px high. Retry is 48px high. Hero CTAs pad `9px 14px`.

The “product density over airiness” / commerce-first / whitespace-not-a-design-statement, “flat depth” / tints-do-hierarchy-work, and “zero radius discipline” readings in this section are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification.

Recorded layout:

- PLP: multi-column product grid (4+ columns desktop), fluid with image-first cards; 0px padding between product cards
- PDP: left-aligned images (sticky scroll), right-aligned product details, size/colour selectors below title
- Full-width charcoal navigation bar (60px height) with logo centered/left and utility nav right
- Sitewide lime banner at page top (30px height) above the main nav
- Sub-navigation: secondary 50px bar for category filtering
- Product density over airiness: the browsing surface is commerce-first; whitespace is between products, not as a design statement
- Flat depth: no shadows anywhere on the live site — border separation and background tints do all the hierarchy work
- Zero radius discipline: sharp 0px corners on every interactive element except the search pill

Source breakpoint table:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Hamburger nav, single-column grid, 2-column PLP max |
| Tablet | 640-1024px | 2-3 column grid, abbreviated nav |
| Desktop | 1024px+ | Full 4-column PLP grid, full horizontal nav |

Collapsing strategy recorded in the source: navigation full horizontal primary nav → hamburger with slide-out on mobile; product grid 4-column → 2-column → single column stacked; hero maintains full-width editorial images across all sizes, CTA stacks below on mobile; sub-nav horizontal scroll on mobile.

Touch-target record: Add to bag 44px height; size selector chips 56px height; nav tabs 60px height; search bar 38px height with 16px left padding.

Treating that table as a recorded span of named widths, not a complete specification of every unlisted control, treating the 30px / 38px / 44px / 48px / 50px / 56px / 60px figures as surface measurements in this packet rather than universal layout tokens, treating the collapsing-strategy and image-behavior rows (hero stays full-width; CTA stacks below on mobile; sub-nav horizontal scroll) as recorded packet application rather than a complete responsive specification, and treating the touch-target record as a purpose reading of those measurements rather than a complete target-size specification, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (live surfaces, 2026-06-22)

The live strings below are source-stated. Treating the live-inspect attributions and the harvested-control-string grouping as citation-character of those live strings is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

- “Download our new app” — app banner (direct, energetic). *(verified live 2026-06-22)*
- “SHOP WOMENS” — hero CTA (uppercase, energetic). *(verified live 2026-06-22)*
- “Search for items and brands” — search placeholder (plain, inclusive “brands” nod). *(verified live 2026-06-22)*
- Control strings from harvested components and §4: “SHOP MENS”; “SHOP WOMEN'S BRANDS”; “Add to bag”; WOMEN / MEN; Help & FAQs; Sale, New in, Clothing, Dresses, Shoes, Accessories, Brands
- Product-name example from source: “ASOS DESIGN wide leg trousers”; “Noisy May cropped tank top in washed grey”

Parenthetical tone labels on the three verified-live lines (“direct, energetic”, “uppercase, energetic”, “plain, inclusive ‘brands’ nod”) are part of the source’s sample captions. Treating those caption labels as citation-character rather than extra Observed strings is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

Treating the §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples, is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification.

### Derived editorial voice

The following voice reading, context table, forbidden-register list, and voice-keywords list are a derived editorial implementation inference from the verified surfaces; they are not ASOS-authored or a separately published UI specification. They are not the Observed strings above.

The source describes ASOS’s voice as the confident best-friend who always knows what’s cool and makes fashion feel accessible, not exclusive. Where luxury brands whisper, ASOS speaks plainly. Where editorial magazines lecture, ASOS enthuses without condescension. The brand’s personality is read as young, inclusive, and irreverent — it sells fashion to everyone without making anyone feel like they need to earn entry.

| Context | Tone |
|---|---|
| Navigation | Ultra-concise category names (WOMEN, MEN, SALE, NEW IN) — purely functional, no marketing speak |
| Product names | Descriptive and specific ("ASOS DESIGN wide leg trousers", "Noisy May cropped tank top in washed grey") |
| CTAs | Energetic but plain: "Add to bag", "SHOP WOMENS", "Download our new app" |
| Sale / Promo | Direct and excitement-led: "Sale", "New in" — simple declarative |
| Help / Support | Friendly and matter-of-fact: "Help & FAQs" |
| Fashion copy | Relaxed, descriptive, detail-forward (fabric, fit, style notes) |
| Inclusivity | Explicitly size-inclusive language across all product categories (AS/4U, Curve, Petite, Tall) |

**Voice keywords** (source): accessible, confident, inclusive, fashion-forward, unpretentious, direct.

**Forbidden register** (source): gatekeeping luxury language ("investment piece", "curated edit"), tech startup enthusiasm ("disrupt", "revolutionise"), jargon-heavy fashion crit ("deconstructed silhouette"), or anything that excludes the broad demographic ASOS explicitly serves.

Not promoting synthetic voice samples beyond the quoted live lines is a derived editorial implementation inference from the verified surfaces; it is not ASOS-authored or a separately published UI specification. No synthetic voice samples are promoted.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- hover, pressed, and `focus-visible` visual treatments
- named nav active/hover `#525050` remains generic active/hover, not that keyboard-focus treatment
- loading, error, and success visual treatments on the harvested buttons and search field, and the omitted loading/error/success applicability fields on both Hero Editorial CTAs and Retry / Utility Action; omitted loading/success on Search Bar
- interactive kind and state-applicability map for Product Grid Card, Surface Section, Sale Badge, and Lime Promo Banner
- motion animation names, transition properties, and any duration beyond the four source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
