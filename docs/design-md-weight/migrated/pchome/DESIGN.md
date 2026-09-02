# PChome Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PChome 24h is Taiwan's archetypal high-density marketplace. This contract covers two first-party public surfaces the source inspected for tokens on 2026-06-08: the **portal** at `https://www.pchome.com.tw` and the **24h shopping** surface at `https://24h.pchome.com.tw`. Catalog homepage identity is `https://www.pchome.com.tw`. The YAML token set is `live-extract`. The YAML token note records: primary = live 24h price/accent red `rgb(234,23,23)` → `#ea1717`; portal hero CTA red `#fe3b52` is a softer variant. Body text is `#2b2b2b` on a `#f2f2f2` commerce canvas. Live inspect recorded 202 element occurrences of the 24h accent and a color-frequency sweep across ~5000 elements. Every value stays attached to the surface or evidence class that established it. Treating those two URLs as this contract's token surfaces, keeping catalog homepage identity on `https://www.pchome.com.tw`, keeping the YAML token set in the `live-extract` class the source assigned it, keeping the `rgb(234,23,23)` note and the 202 / ~5000 counts on the 24h extract, and keeping every value attached to the surface or evidence class that established it, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

The system runs on two distinct surfaces with a shared DNA. The **portal** (`www.pchome.com.tw`) is a news-and-services front door: dark editorial headlines (`Noto Sans TC` at 28px / weight 700, white on imagery) over a blue-link information architecture, with a hotter coral-red CTA (`#fe3b52`) for promotional banners. The **24h shopping app** (`24h.pchome.com.tw`) is the commerce engine: a `#f2f2f2` workbench, dense product grids on white cards with 8px corners, prices rendered in the canonical brand red `#ea1717`, and a blue (`#0090eb`) reserved for navigational links. Body copy everywhere sits in a near-black `#2b2b2b` rather than pure black. The hex values, the two-surface split, the portal 28px / 700 white-on-imagery headlines, the 24h 8px cards, and the link-versus-buy color split are recorded. The characterizations built on them — get as much shoppable inventory in front of the eye as possible, as fast as possible; busy, urgent, and transactional in the best Taiwanese-e-commerce tradition; a digital department store where the brand red is the heartbeat, pulsing on every price, every discount flag, and every "buy now" button; Western boutique commerce leaning on whitespace and one-product-per-screen storytelling as the contrast the source draws; softening the wall of text just enough to keep a thousand SKUs scannable; utilitarian Traditional-Chinese-first type; no whisper-weight subtlety; weight, color, and red as the three levers in an intentionally crowded field; unmistakably a Taiwanese marketplace: confident, dense, value-signaling, and built for the thumb of a deal-hunting shopper — are a derived editorial implementation inference from the verified surfaces; they are not PChome-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PChome Online (網路家庭) was founded in **1998** by **Jan Hung-tze (詹宏志)**, a prominent Taiwanese publisher, writer, and internet pioneer. The name traces to PChome magazine, and the company grew from a portal into one of Taiwan's defining internet groups. Its flagship **PChome 24h購物** popularized the promise that gives it its name: delivery within 24 hours across Taiwan — a logistics commitment that became a core brand identity in a market where speed and reliability win loyalty. The company sits at the center of Taiwan's e-commerce landscape alongside rivals like Shopee, Momo, and Yahoo奇摩購物. Its design reflects that competitive, value-driven market: a department-store density of inventory, aggressive promotional layering (credit-card tie-ins, P幣 rebate points, flash deals), and a brand red that signals price and savings at a glance. The portal heritage (news, email, services at `www.pchome.com.tw`) still frames the commerce engine, giving PChome the feel of a full digital ecosystem rather than a single-purpose store. What PChome embraces: speed (24h delivery as identity), density (maximal shoppable surface), and value-signaling through red prices and stacked rebates. What it avoids: the sparse, one-product-per-screen aesthetic of Western DTC — in the Taiwanese market, abundance and visible savings build trust, not minimalism. The year 1998, Jan Hung-tze (詹宏志), 網路家庭, the PChome magazine origin, PChome 24h購物 and the 24-hour delivery identity, the Shopee / Momo / Yahoo奇摩購物 rivalry, the portal heritage of news, email, and services, and that closing embrace-and-avoid sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-to-market narrative, including the closing sentence, as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

- Browse the portal news-and-services front door at `https://www.pchome.com.tw`.
- Scan shoppable inventory on the 24h shopping surface at `https://24h.pchome.com.tw`.
- Search from the Search bar dominant and centered — the primary navigation tool of a marketplace.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries as fictional archetypes informed by publicly observable PChome user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: publicly observable PChome user segments (Taiwanese deal-hunting shoppers, 3C enthusiasts, household buyers, loyalty members); a deal-hunting shopper. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

- Brand red `#ea1717` as the universal price + CTA + promo color — the single loudest signal in the system
- Light gray commerce canvas `#f2f2f2` with white product cards `#ffffff` at 8px radius — a tiled department-store grid
- `Noto Sans TC` Traditional-Chinese-first stack with `Montserrat` / `Roboto` for Latin numerals and prices
- Near-black body text `#2b2b2b` instead of pure black, for readability across dense layouts
- Hard two-weight rhythm: 400 for body, 700 for headlines/prices/promos — no light display weights
- Blue (`#0090eb`) strictly for navigational links, never for buy actions
- Conservative 4px–8px radius; promo badges and prices, not rounding, carry the visual energy
- Countdown timers, P幣 (P-coin) rebate flags, and strike-through list prices as native commerce ornament

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not PChome-authored or a separately published UI specification. The source states them in its own Principles section.

1. **The price is the hero.** Every card resolves to a red `#ea1717` price. Nothing should out-shout it.
2. **Density is service.** Showing more inventory faster respects a deal-hunting shopper's time. Whitespace is rationed, not lavished.
3. **Speed is the promise.** 24h delivery is the brand. Surface it relentlessly.
4. **Red means value.** Reserve `#ea1717` for price, action, and savings — never dilute it onto navigation.
5. **Numbers over adjectives.** Quantify the benefit: percentage off, rebate amount, delivery hours.
6. **Two-weight clarity.** In a crowded field, hierarchy comes from 400 vs 700 and color, not from typographic subtlety.
7. **The card is the unit.** White cards on a gray canvas — a tileable, scannable, infinitely-stackable building block.
8. **Traditional Chinese first.** Render for the Taiwanese reader; give numerals a Latin face for crisp prices.

### Application rules

The source states these as its Do list, kept as written, plus the §16 rule that is unique to that section: surface the 24h delivery promise and P幣 rebate prominently. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PChome-authored or a separately published UI specification.

- Use brand red `#ea1717` for every price, primary CTA, and promo badge
- Set body text in near-black `#2b2b2b` on a `#f2f2f2` canvas with white `#ffffff` cards
- Render prices and numerals in a Latin face (`Montserrat` / `Roboto`) for tabular crispness
- Keep the two-weight rhythm: 400 body, 700 headlines/prices/promos
- Reserve blue (`#0090eb`) strictly for navigational links
- Embrace density — fill the grid, use the full width, stack cards efficiently
- Use 4px radius on buttons/badges and 8px on cards
- Show strike-through list prices in `#969696` next to the red sale price
- Surface the 24h delivery promise and P幣 rebate prominently
- Treat the red `#ea1717` price as the climax of every card and let savings be visible

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PChome-authored or a separately published UI specification.

- Don't use red for navigation links or use blue for buy actions — the roles are fixed
- Don't add light display weights (300/200) — PChome never whispers
- Don't introduce large pill radii on product cards — stay at 4–8px
- Don't over-apply whitespace at the expense of shoppable density
- Don't use pure black `#000000` for long body copy — `#2b2b2b` is the body tone
- Don't render prices in a CJK-only weight without the Latin numeral face
- Don't make shadows heavy or colored beyond the faint navy elevated tint
- Don't let any single element out-shout the price — red price is the visual climax of every card
- Don't dilute the brand red onto navigation or non-action elements
- Don't trade shoppable density for decorative whitespace
- Don't bury the price, the discount percentage, or the delivery window

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.surface` `#ffffff` unmerged from `tokens.colors.on-primary` `#ffffff`, keeping `tokens.colors.primary` `#ea1717` on the 24h price/CTA/promo role rather than as the portal hero CTA, keeping `tokens.colors.primary-soft` `#fe3b52` on the portal promotional surfaces rather than as the 24h buy red, keeping `tokens.colors.link` `#0090eb` unmerged from `tokens.colors.link-deep` `#008ae0`, keeping that link-deep writing as Hover / visited on navigational links rather than as `focus-visible` treatment, keeping heading `#000000` unmerged from body `#2b2b2b`, and keeping the 202-occurrence / `rgb(234,23,23)` live-extract note on the 24h primary rather than rewriting it as a second hex, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **PChome Red** (`#ea1717`): The brand anchor. Live-extracted as the dominant accent on 24h (202 element occurrences) and the literal color of every product price. Drives CTAs, promo badges, and price emphasis. Token-set path `tokens.colors.primary`. Catalog `primary_color` is `#ea1717`. YAML token note: live 24h price/accent red `rgb(234,23,23)` → `#ea1717`.
- **Soft Red / Coral CTA** (`#fe3b52`): Portal hero banner CTA red — a lighter, pinker variant used on `www.pchome.com.tw` promotional surfaces. Token-set path `tokens.colors.primary-soft`.
- **Coral Accent** (`#fd7777`): Lighter red-pink for secondary tags, sub-prices, and softer promo accents. Token-set path `tokens.colors.primary-coral`.
- **Commerce Canvas** (`#f2f2f2`): The 24h shopping background — a light neutral gray that lets white cards float and red prices pop. Token-set path `tokens.colors.canvas`.
- **Card Surface** (`#ffffff`): Product cards, banner tiles, and content panels. Token-set path `tokens.colors.surface`.
- **Hairline** (`#e5e5e5`): Standard border and divider between dense rows and cards. Token-set path `tokens.colors.hairline`.
- **Heading Black** (`#000000`): Strongest headings, tab labels, maximum-contrast titles. Token-set path `tokens.colors.heading`.
- **Body** (`#2b2b2b`): Default reading text and product titles — near-black, the most-used color on the page. Token-set path `tokens.colors.body`.
- **Body Muted** (`#666666`): Secondary descriptions, spec rows, helper text. Token-set path `tokens.colors.body-muted`.
- **Label Muted** (`#969696`): Captions, strike-through list prices, low-priority metadata. Token-set path `tokens.colors.label-muted`.
- **Link Blue** (`#0090eb`): Navigational links and interactive text on the portal and 24h. Token-set path `tokens.colors.link`.
- **Link Deep** (`#008ae0`): Hover / visited link variant. Token-set path `tokens.colors.link-deep`. This is the source's hover/visited writing on navigational links. It is not a `focus-visible` treatment.
- **Navy** (`#0e4f77`): Header and dark-chrome accents, info section backgrounds. Token-set path `tokens.colors.navy`.
- **Navy Deep** (`#084567`): Deepest chrome tone for footers and immersive bars. Token-set path `tokens.colors.navy-deep`.
- **Success Green** (`#0bb677`): In-stock, order-confirmed, positive status. Token-set path `tokens.colors.success`.
- **Amber** (`#fed796`): Warm highlight for warning chips, P幣 rebate, and attention flags. Token-set path `tokens.colors.amber`.
- **On-Primary White** (`#ffffff`): Text on red CTAs, promo badges, and dark navy bars. Token-set path `tokens.colors.on-primary`. This hex is not `tokens.colors.surface` rewritten as on-color.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

The source also writes a base unit of `8px` and the scale 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Dense at the card level (8px internal gutters), generous between major sections. Source §9 writes 16px gutters on a dense marketplace grid. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4` and not the primary-button `4px` radius. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`, not the card `8px` radius, not the 8px vertical button padding, and not the 8px internal gutters written as those local geometries. `tokens.spacing.md: 12` is not a radius. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16`, not the 16px body type role, not the 16px product-card title, and not the §9 16px gutters written as a second key. `tokens.spacing.lg: 24` is not the Price Large type size `24`. `tokens.spacing.section: 64` is the YAML section step. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Small (`4px`) for buttons, badges, and promo flags; Standard (`8px`) for product cards, banner tiles, and promo tiles; Large (`16px`) for occasional rounded feature containers. The system stays conservative; energy comes from red and density, not rounding. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.full: 9999` is a YAML step. YAML `tokens.components.button-soft.radius` is `9999`; source §4 Soft / Portal CTA writes Radius `8px`. Both writings stay; they are not collapsed into one another or into `tokens.rounded.full`. Source §4 Tabs write Radius `0px` (flat bar — relies on color, not shape). That `0px` is the tab bar's local geometry; it is not a YAML rounded step. Keeping those local radii on their components, keeping `full: 9999` on its own key path beside the Soft CTA YAML `9999` and the §4 `8px`, and keeping the tab `0px` on the tab bar, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (0) | No shadow | Canvas, inline text, flat tab bars |
| Ambient (1) | `rgba(0,0,0,0.06) 0px 1px 4px` | Subtle card lift, hover hint. Token-set path `tokens.shadow.ambient`. |
| Card (2) | `rgba(0,0,0,0.1) 0px 2px 8px` | Standard product cards, promo tiles. Token-set path `tokens.shadow.card`. |
| Elevated (3) | `rgba(1,47,73,0.1) 0px 8px 24px` | Dropdowns, mega-menu, modals. Token-set path `tokens.shadow.elevated`. |

**Shadow Philosophy** the source records: Elevation at PChome is functional and restrained — soft neutral shadows that lift white cards off the `#f2f2f2` canvas just enough to read as discrete, tappable units. The elevated tier picks up a faint navy tint (`rgba(1,47,73,0.1)`) echoing the header chrome, but depth is never decorative. In a layout this dense, heavy shadows would create visual noise; the system relies on the canvas/card figure-ground contrast and the red accent to do the hierarchy work instead. Source §7: Don't make shadows heavy or colored beyond the faint navy elevated tint. Reading that stack as functional card-off-canvas lift rather than as decorative depth, and keeping the navy-tint elevated string unmerged from the two neutral shadows, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection, focus, cart-badge increment |
| `motion-fast` | 150ms | Hover lift on cards, button press |
| `motion-standard` | 250ms | Dropdowns, drawers, modal open |
| `motion-slow` | 400ms | Carousel slide, banner transition |

Easing roles — three roles with declared uses. The specific curve values the source lists (`ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`, `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`) are not traceable to PChome-computed samples. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` matches the catalog template in `spec/omd-v0.1.md`. The curves are omitted here at the curve-value boundary; only the roles and their uses are kept. They do not restore a curve.

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Most transitions |
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Drawers, dropdowns arriving |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals |

Signature motions the source names stay:

1. **Card hover lift.** Product cards lift on hover with `motion-fast` and the card shadow deepens from ambient to `rgba(0,0,0,0.1) 0px 2px 8px` — a subtle invitation to click.
2. **Countdown tick.** Flash-deal timers tick per second with no animation flourish — `motion-instant`, purely functional urgency.
3. **Promo carousel.** Above-the-fold banner and promo strips auto-advance on a slow timer using `motion-slow / ease-standard` horizontal slide.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, carousels freeze, hover lifts collapse to instant, and the countdown updates without transition. The marketplace remains fully shoppable.

Omitting the three unsourced curves, keeping the four duration rows as duration tokens rather than easing curves, keeping the four signature motions including the reduced-motion contract, and holding the five-kind per-component promotion gate rather than treating a single named curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating YAML `tokens.typography.family.sans` `Noto Sans TC` as the primary UI family the source assigns rather than as interchangeable with the fallback, treating YAML `tokens.typography.family.display` `Montserrat` as the Latin/numeral companion rather than as a second CJK UI face, treating fallback members as fallbacks rather than as the brand face, and refusing to substitute a system font while calling it Noto Sans TC or Montserrat, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | This record's typography evidence is the live inspect on the two named surfaces. |
| Live computed surface-use | Portal and 24h shopping, 2026-06-08 playwright `getComputedStyle` on body, headings, buttons, and price nodes. |
| Official distributed asset | No PChome-exclusive distributed type family was verified. `Noto Sans TC` and `Montserrat` are upstream faces, not PChome-owned brand assets. |
| Declared-only fallbacks | `微軟正黑體` / `Microsoft JhengHei`, then `文泉驛正黑` / `WenQuanYi Zen Hei`; Latin `Roboto`, `Helvetica`, `Arial`. They are fallbacks, not a second brand face. |
| YAML family keys | `tokens.typography.family.sans` is `"Noto Sans TC"`. `tokens.typography.family.display` is `"Montserrat"`. `tokens.typography.family.fallback` is `"Microsoft JhengHei"`. |

### Family

- **Primary:** `Noto Sans TC`, fallback `微軟正黑體` / `Microsoft JhengHei`, then `文泉驛正黑` / `WenQuanYi Zen Hei`. Token-set path `tokens.typography.family.sans` is `"Noto Sans TC"`. Token-set path `tokens.typography.family.fallback` is `"Microsoft JhengHei"`.
- **Latin / Numerals:** `Montserrat`, `Roboto`, `Helvetica`, `Arial`. Token-set path `tokens.typography.family.display` is `"Montserrat"`. Source §1 pairs `Montserrat` and `Roboto` for Latin numerals and prices. Source §3 Rationale: Traditional-Chinese-first rendering with a Latin companion specifically for prices and numerals — critical for a commerce site where the price is the loudest element.

A fallback member of a stack is never presented as the brand face. Do not replace `Noto Sans TC` with `Microsoft JhengHei` and call the result Noto Sans TC. Do not mix the Latin numeral face into CJK body copy. That fallback-and-reservation reading is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical rem figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. YAML `feature-title` use is `Editorial / feature card titles on hero carousels`; source §3 Notes is `Editorial hero / carousel headlines (white on imagery)`. Both writings stay. YAML `price` use is `Product card price in red #ea1717`; source §3 Notes is `Product card price, in red `#ea1717``. Strike Price is a source §3 row with no YAML typography key. Keeping YAML line heights as unitless ratios, keeping the YAML `use` strings beside the §3 Notes, keeping tracking `0` as the YAML recorded it, and keeping Strike Price on its §3 row rather than inventing a YAML key, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | Token-set path |
|---|---|---:|---:|---|---:|---|---|
| Feature Title | Noto Sans TC | 28 (1.75rem) | 700 | 1.23 | 0 | Editorial / feature card titles on hero carousels. §3 Notes: Editorial hero / carousel headlines (white on imagery) | `tokens.typography.feature-title` |
| Section Title | Noto Sans TC | 22 / 22px (1.38rem) | 700 | 1.23 | 0 | Secondary headlines, section heads | `tokens.typography.section-title` |
| Price Large | Montserrat / Noto Sans TC | 24 (1.50rem) | 700 | 1.2 | 0 | Hero / featured product price | `tokens.typography.price-lg` |
| Price | Montserrat | 18 (1.13rem) | 600 | 1.3 | 0 | Product card price in red `#ea1717` | `tokens.typography.price` |
| Body | Noto Sans TC | 16 (1.00rem) | 400 | 1.5 | 0 | Standard reading text, product titles. §3 Notes: Product titles, standard reading text | `tokens.typography.body` |
| Label | Noto Sans TC | 14 (0.88rem) | 400 | 1.4 | 0 | Tab labels, metadata, secondary nav | `tokens.typography.label` |
| Caption | Noto Sans TC | 13 (0.81rem) | 400 | 1.4 | 0 | Fine print, spec rows, timestamps | `tokens.typography.caption` |
| Strike Price | Montserrat | 14 (0.88rem) | 400 | 1.4 | — | List price, `#969696`, line-through. No YAML typography key. | — |

Source §3 also records, kept beside those rows:

- **Two-weight rhythm**: 400 for body and product titles, 700 for headlines / prices / promos. Weight is the primary hierarchy lever, not size. Card price YAML weight is `600`; that 600 is the Price row, not a rewrite of the 400/700 rhythm.
- **Red is a type style**: Price text is not just colored — `#ea1717` red at weight 600+ is functionally a typographic role of its own.
- **Traditional Chinese first**: All sizing assumes CJK glyphs; line-heights (1.23–1.5) leave room for dense Hanzi without crowding.
- **Numerals get a Latin face**: `Montserrat` / `Roboto` render prices and countdown digits, giving numbers tabular crispness against the CJK body.
- **No light display weights**: Unlike boutique brands, PChome never goes below 400. Density demands legibility at weight, not elegance at lightness.

The 16px Body size is not `tokens.spacing.base: 16`. The 14px Label / Strike Price size is not a spacing step. The 24 Price Large size is not `tokens.spacing.lg: 24`. The 22 / 22px Section Title size is not a spacing step. The 28 Feature Title size is not a spacing step. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing, and reading the five type principles as the source's own type rules rather than as a separately published type spec, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=pchome.com.tw&sz=128`. That slug is an identity pointer, not a PChome-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.
- Product photography remains on the white cards. Do not replace it with invented brand-color decoration. Countdown timers, P幣 rebate flags, and strike-through list prices are native commerce ornament the source records. Refusing to replace product-card imagery with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| **Empty (cart)** | White canvas, gray `#969696` line "購物車是空的" (your cart is empty), one red `#ea1717` CTA back to shopping. No illustration drama. |
| **Empty (search)** | Muted `#666666` "找不到符合的商品" with the query echoed and category suggestions below. |
| **Loading (grid)** | Skeleton cards at final dimensions in `#e5e5e5`, gentle shimmer. Price bars sized to typical price width. |
| **Error (out of stock)** | Card dims; red `#ea1717` "已售完" (sold out) flag replaces the buy button. |
| **Success (added to cart)** | Brief toast / inline confirm with green `#0bb677` check and item count; cart badge increments. |
| **Promo active** | Red `#ea1717` badge + amber `#fed796` P幣 chip; countdown timer in white-on-red for limited deals. |
| **Disabled** | Reduced opacity on the red button; never recolored to gray — the brand red stays readable as faded red. |
| **Price drop** | List price in `#969696` line-through beside the new red `#ea1717` price; savings stated as a number. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence. `tokens.colors.link-deep` `#008ae0` is the source's Hover / visited link variant; it is not a color assigned to a `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination link, a tab that only selects, a display badge, or a query field that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary (Buy / Add to Cart)

- Role: Add to cart, buy now, primary commerce action. Published labels: `加入購物車` / `立即購買`.
- Primitive type: `button` · Kind: interactive
- Background: `#ea1717`
- Text: `#ffffff`
- Padding: 8px 16px
- Radius: 4px
- Font: 16px `Noto Sans TC` weight 700. YAML font record: `weight 700`.
- Token-set use: `Add to cart / Buy now`
- Observed: disabled reduced opacity on the red button; never recolored to gray — the brand red stays readable as faded red.
- The `8px 16px` padding is this control's padding. It is not `tokens.spacing.sm: 8` or `tokens.spacing.base: 16`. The `4px` radius is `tokens.components.button-primary.radius` and the `tokens.rounded.sm: 4` step; it is not `tokens.spacing.xs: 4`. The 16px font size is not `tokens.spacing.base: 16`. Reading those figures as this control's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Disabled treatment captured above |
| loading | applicable | `加入購物車` / `立即購買` is an in-place commit; visual treatment omitted |
| error | applicable | A failed add-to-cart or buy can be reported on this control; visual treatment omitted |
| success | applicable | Source records added-to-cart toast / inline confirm; visual treatment at this control is omitted |

### Soft / Portal CTA

- Role: Portal hero banner CTAs on `www.pchome.com.tw`. YAML use: `Portal hero CTA / banner actions`.
- Primitive type: `button` · Kind: interactive
- Background: `#fe3b52`
- Text: `#ffffff`
- Padding: 8px 20px
- Radius: YAML `tokens.components.button-soft.radius` `9999`; source §4 Radius `8px`. Both writings stay.
- Font: 16px weight 700
- Token-set use: `Portal hero CTA / banner actions`
- The `8px 20px` padding is this control's padding. It is not `tokens.spacing.sm: 8`. The YAML `9999` radius is this component's YAML field; it is not `tokens.rounded.full: 9999` rewritten as this button, and it is not the §4 `8px`. Keeping both radius writings on this control, and reading the padding as this control's geometry rather than a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web banner CTA; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A banner CTA can be gated; visual treatment omitted |
| loading | not-applicable | Portal hero banner action; it commits no operation in place |
| error | not-applicable | Portal hero banner action; it commits no operation in place |
| success | not-applicable | Portal hero banner action; it commits no operation in place |

### Promo Tile

- Role: Credit-card / P幣 offer tiles in the promo strip
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Text: `#2b2b2b`
- Padding: 0px 8px
- Radius: 8px
- Height: 93px
- Font: 16px weight 400
- The 93px height is this tile's geometry and the promo-strip fixed height. The `0px 8px` padding is this tile's padding. The 8px radius is this tile's local geometry and the `tokens.rounded.md: 8` step; it is not `tokens.spacing.sm: 8`. Reading those figures as this tile's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web offer tile; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tile; visual treatment omitted |
| disabled | applicable | An offer tile can be gated; visual treatment omitted |
| loading | not-applicable | Promo-strip destination tile; it commits no operation in place |
| error | not-applicable | Promo-strip destination tile; it commits no operation in place |
| success | not-applicable | Promo-strip destination tile; it commits no operation in place |

### Product Card

- Role: Dense product grid card. Anatomy the source records: image + 16px title + `#ea1717` price + optional promo flag.
- Primitive type: `card` · Kind: interactive
- Background: `#ffffff`
- Radius: 8px
- Border: `1px solid #e5e5e5` (when bordered)
- Shadow (card): `rgba(0,0,0,0.1) 0px 2px 8px`
- Shadow (elevated): `rgba(1,47,73,0.1) 0px 8px 24px`
- Token-set use: `Dense product grid card, soft card shadow`
- Source §8: Product cards are entirely tappable surfaces. Source §15: cards lift on hover with `motion-fast` and the card shadow deepens from ambient to `rgba(0,0,0,0.1) 0px 2px 8px`. Source §14: out of stock, the card dims and a red `#ea1717` "已售完" flag replaces the buy button.
- The 8px radius is `tokens.components.card.radius` and the `tokens.rounded.md: 8` step; it is not `tokens.spacing.sm: 8`. The 16px title is the Body type role on this card; it is not `tokens.spacing.base: 16`. Reading those figures as this card's geometry and type rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tappable card; source records hover lift and shadow deepening |
| focus-visible | applicable | Keyboard-reachable card; visual treatment omitted |
| disabled | applicable | A product tile can be gated; visual treatment omitted |
| loading | not-applicable | Destination product tile; grid skeleton is the Loading (grid) row, not a commit on this card |
| error | applicable | Source records out-of-stock dim and `已售完` on the card |
| success | not-applicable | Destination product tile; add-to-cart success is the buy control / toast, not this card |

### Price Tag

- Role: Product price, strike-through `#969696` for list price
- Primitive type: `badge`
- Kind: non-interactive — a price display, not a commit control
- Sale price: `#ea1717`, 18px Montserrat weight 600 (hero: 24px weight 700)
- List price: `#969696`, 14px, `line-through`
- Currency: `$` prefix, no space, set in the same Latin face
- Token-set font record: `18px weight 600`
- Token-set use: `Product price, strike-through #969696 for list price`
- Token-set path `tokens.components.price-tag`
- YAML `fg` is `#ea1717`. Hero 24px weight 700 is the source §4 writing on the same price-tag role; it is not moved onto Feature Title. Keeping the hero 24px / 700 writing on this price-tag role rather than transferring it onto Feature Title or Price Large is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

### Promo Badge

- Role: 折扣 (discount), 限時 (limited), P幣 rebate flags. YAML use: `P幣 / 折扣 promo flags`.
- Primitive type: `badge`
- Kind: non-interactive — a promo flag, not a commit control
- Background: `#ea1717`
- Text: `#ffffff`
- Padding: 1px 6px
- Radius: 4px
- Font: 13px weight 700
- Token-set use: `P幣 / 折扣 promo flags`
- Token-set path `tokens.components.badge-promo`

### P幣 / Rebate Chip

- Role: P-coin reward callouts
- Primitive type: not in the token set
- Kind: non-interactive — a rebate callout, not a commit control
- Background: `#fed796` (amber)
- Text: `#2b2b2b`
- Radius: 4px

### In-Stock Chip

- Role: availability, order-confirmed status
- Primitive type: not in the token set
- Kind: non-interactive — a status flag, not a commit control
- Background / text: `#0bb677` green

### Tab Bar / Category Switcher

- Role: Category switcher. YAML active: `black active text`.
- Primitive type: `tab` · Kind: interactive
- Background: `#f2f2f2`
- Active text: `#000000`, inactive: `#666666`
- Height: 52px
- Font: 16px weight 400. YAML font record: `16px weight 400`.
- Radius: 0px (flat bar — relies on color, not shape)
- Token-set use: `Category switcher`
- Token-set path `tokens.components.tab-bar`
- YAML `fg` is `#000000`. Source §4 splits active `#000000` / inactive `#666666`. Both writings stay.
- The 52px height is this bar's geometry. The `0px` radius is this bar's local geometry; it is not a YAML rounded step. Reading those figures as this control's geometry rather than a spacing or rounded step, and keeping YAML `fg` `#000000` beside the §4 active `#000000` / inactive `#666666` split rather than collapsing them, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A category tab can be gated; visual treatment omitted |
| loading | not-applicable | Category switcher tab; it commits no operation in place |
| error | not-applicable | Category switcher tab; it commits no operation in place |
| success | not-applicable | Category switcher tab; it commits no operation in place |

### Navigation

- Role: Sticky top header on white / navy chrome. Search bar dominant and centered — the primary navigation tool of a marketplace. Links: `Noto Sans TC` 14px weight 400, `#0090eb`. Category mega-menu and left-rail tree for taxonomy depth.
- Primitive type: not in the token set · Kind: interactive
- Hover / visited on links: `#008ae0` (`tokens.colors.link-deep`). That observed hover/visited is not a `focus-visible` treatment.
- Recording the sticky header, centered search, mega-menu, and left-rail as this navigation anatomy rather than as a second layout system, and recording `#008ae0` as the link hover/visited variant rather than as `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web links; `#008ae0` is the source's hover/visited variant |
| focus-visible | applicable | Keyboard-reachable header controls; visual treatment omitted |
| disabled | applicable | A nav link or search field can be gated; visual treatment omitted |
| loading | not-applicable | Destination links and a search field; they commit no operation in place |
| error | not-applicable | Empty-search copy is the Empty (search) page row, not a commit failure on this header |
| success | not-applicable | Destination / query controls; they complete no operation on themselves |

### Countdown Timer

- Role: Used on flash-deal / 限時 sections — native urgency ornament
- Primitive type: not in the token set
- Kind: non-interactive — a timer display, not a commit control
- Digits: white `#ffffff` on red, 18px weight 700, Latin face
- Source §15: tick per second with no animation flourish — `motion-instant`
- Source §9 flash-deal section: red `#ea1717` band, white countdown digits at 18px Montserrat weight 700, product cards below with `#ea1717` prices and 限時 promo flags.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

These layout rules are the source's own list. Reading them as the layout contract for the inspected portal and 24h shopping surfaces, keeping each measurement on the role that established it, keeping the §8 4–6 desktop columns beside the §9 5-column example rather than collapsing them, and keeping 1024–1440px as the source's Desktop band rather than as a page-canvas size, are derived editorial implementation inferences from the verified surfaces; they are not PChome-authored or a separately published UI specification.

### Spacing and grid

- Base unit: 8px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px.
- Dense at the card level (8px internal gutters), generous between major sections.
- Full-bleed marketplace grid — content extends edge to edge, not centered in a narrow column.
- Product grids: 4–6 columns on desktop, collapsing to 2 on mobile. Source §9 example: 5-column product card grid, 16px gutters, full bleed.
- Left rail for category taxonomy; main column for grids; right rail for promos.
- Promo strips run horizontally as fixed-height (93px) tiles above the fold.

### Whitespace

- **Density as a feature**: PChome deliberately maximizes shoppable surface area. Whitespace is rationed — it exists to separate cards, not to create drama.
- **Cards as the unit**: Every piece of content is a card on the `#f2f2f2` canvas. The gray background is the negative space; white cards are the figure.
- **Above-the-fold maximalism**: Flash deals, credit-card offers, editorial headlines, and category entry points all compete above the fold. This is intentional — it signals a full department store, not a curated boutique.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | 2-column product grid, collapsed left rail, sticky search |
| Tablet | 640–1024px | 3–4 column grid, drawer category nav |
| Desktop | 1024–1440px | 4–6 column grid, left taxonomy rail + right promo rail |
| Wide | >1440px | Full-width grid, more columns, persistent rails |

### Touch targets

- Promo tiles at 93px height — comfortably tappable
- Category tabs at 52px height
- Buttons with 8px vertical padding minimum
- Product cards are entirely tappable surfaces

### Collapsing strategy

- Left category rail → hamburger drawer on mobile
- Multi-rail desktop layout → single scrolling column
- Product grid: 6 → 4 → 3 → 2 columns
- Search bar stays sticky and dominant at all sizes — it is the primary mobile nav
- Promo strips become horizontally swipeable carousels on mobile

### Image behavior

- Product thumbnails maintain square aspect ratio across breakpoints
- Hero / editorial banners crop to maintain headline legibility (white 28px/700 over imagery)
- Cards keep 8px radius at all sizes

The 93px promo tiles, 52px tabs, 8px vertical padding, 28px/700 white headlines, and the 6 → 4 → 3 → 2 column collapse are the source's own writings on the roles named beside them. Reading those figures as those roles rather than as a single cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

PChome's voice is the brisk, value-forward register of a Taiwanese hypermarket flyer — direct, deal-driven, and benefit-first. Copy leads with the offer: 折扣 (discount), 限時 (limited time), 24h到貨 (24-hour delivery), P幣回饋 (P-coin rebate). The site tagline 每天一起變更好 ("getting better together, every day") sets a warm, communal tone over the transactional core. Button labels are imperative and concrete (加入購物車 / 立即購買 / 結帳), never coy. Numbers do the talking — price, percentage off, delivery hours, rebate amount. Reading that register as this contract's voice, rather than as a separately published PChome microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Product titles | Spec-dense, keyword-front-loaded for search and scanning |
| Prices / promos | Pure number + benefit. "$3,999", "8% P幣回饋", "限時下殺" |
| CTAs | Direct imperatives: 加入購物車, 立即購買, 結帳 |
| Delivery promise | Concrete and repeated: 24h到貨, 隔日配 |
| Editorial / portal | Newsier, headline-driven, Traditional-Chinese broadsheet register |
| Membership / rebate | Warm, loyalty-flavored — P幣, 會員, 點數 framed as belonging |

**Forbidden register.** Vague boutique poetry ("elevate your lifestyle"), unquantified hype with no number attached, and anything that buries the price or the delivery promise. PChome's reader wants the deal stated plainly.

Published names and labels the source records, kept byte-exact: PChome, PChome 24h, PChome Online, 網路家庭, PChome 24h購物, 詹宏志, Jan Hung-tze, 每天一起變更好, 加入購物車, 立即購買, 結帳, 折扣, 限時, 24h到貨, P幣回饋, 限時下殺, 隔日配, P幣, 會員, 點數, 購物車是空的, 找不到符合的商品, 已售完, Yahoo奇摩購物, 微軟正黑體, 文泉驛正黑, `$3,999`, `8% P幣回饋`.

Reproduce the Traditional Chinese strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Chinese line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not PChome-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-standard` / `ease-enter` / `ease-exit` (omitted as unattributed; `ease-exit` matches the legacy spec template)
