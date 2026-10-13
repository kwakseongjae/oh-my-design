---
name: 29CM
colors:
  primary: '#000000'
  foreground: '#000000'
  canvas: '#ffffff'
  muted: '#5d5d5d'
  ink-secondary: '#303033'
  ink-tertiary: '#474747'
  accent: '#ff4800'
  border: '#dddddd'
  focus-outline: '#375fff'
typography:
  nav-display:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.5
    use: Desktop editorial navigation
  editorial-title:
    fontSize: 23px
    fontWeight: 600
    lineHeight: 1.3
    use: 29Magazine lead story title
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Shared commerce and editorial body
  product-brand:
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.36
    use: Product-grid brand link
  product-name:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.36
    use: Product-grid item name
  product-price:
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.4
    use: Price and discount percentage row
  caption:
    fontSize: 10px
    fontWeight: 500
    lineHeight: 1.2
    use: Shipping and product flags
rounded:
  sm: 2px
  md: 4px
  chip: 10px
  full: 9999px
spacing:
  xs: 2
  sm: 4
  md: 8
  base: 16
  lg: 24
  xl: 28
components:
  ghost-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #dddddd'
    rounded: 4px
    padding: 16px 16px 16px 20px
    height: 52px
    typography: 14px / 700
    hover: no visible change (measured 2026-09-29)
    pressed: 'bg #f4f4f4 fg #474747'
    focus: 'outline 1px #375fff, offset 2px (authored, not the browser ring) — measured 2026-09-29'
    states: default on home and magazine (2026-07-11); pressed first seen on the product outline CTA, then measured on the home '더보기' itself on 2026-09-17 and 2026-09-29; hover and keyboard focus measured 2026-09-29
    use: Editorial more and brand-home action
  carousel-control:
    type: button
    backgroundColor: rgba(0,0,0,0.5)
    textColor: '#ffffff'
    rounded: 9999px
    padding: 14px
    height: 52px
    typography: 16px / 400
    hover: bg rgba(0,0,0,0.9)
    pressed: 'bg #27272a'
    states: hover and pressed measured 2026-09-29 on the enabled next button (real :hover and :active); disabled look bg rgba(93,93,93,0.4), fg rgba(255,255,255,0.5), cursor not-allowed; keyboard focus not measured (the Tab walk moved the gallery and the button was disabled when reached)
    use: Product-image previous/next control
  product-grid-item:
    type: listItem
    backgroundColor: transparent
    rounded: 4px
    use: BEST product result with image, brand, name, discount, price, and shipping caption
  editorial-story-item:
    type: listItem
    backgroundColor: transparent
    rounded: 0px
    use: 29Magazine and Showcase story/list entry
  quantity-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #dddddd'
    rounded: 0px
    height: 36px
    typography: 16px / 500
    hover: no visible change (measured 2026-09-29)
    pressed: no authored change; the press focuses the field, so the browser default ring (not brand) appears — measured 2026-09-29
    focus: 'browser default ring (not brand); the border stays #dddddd — measured 2026-09-29'
    states: default captured 2026-07-11; hover, pressed and keyboard focus measured 2026-09-29; no authored focus style
    use: Product-detail quantity field
  nav-display-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    height: 48px
    typography: 40px / 700 / Pretendard Variable
    hover: '::before (parent) bar #000000, height 0→6px under the link; text colour unchanged'
    pressed: same bar as hover
    focus: browser default ring (not brand) — measured 2026-09-29; the bar is not drawn on focus
    states: default captured 2026-07-11 (four links on each of five surfaces); hover and pressed measured 2026-09-29 on 'Showcase' in the scrolled header, where the link renders 24px / 700 and the bar is 116px wide; keyboard focus measured at page top
    use: Desktop editorial navigation (BEST, Showcase, 29Magazine …)
  period-chip:
    type: button
    backgroundColor: rgba(93,93,93,0.08)
    textColor: '#474747'
    rounded: 10px
    padding: 0px 10px
    height: 32px
    typography: 13px / 400 / Pretendard Variable (label span)
    selected: 'bg #000000, fg #ffffff (the chip of the period in the URL: 실시간 for period=HOURLY)'
    hover: no visible change (measured 2026-09-29)
    pressed: 'fg #5d5d5d (label)'
    focus: 'outline 1px #375fff, offset 1px (authored) — measured 2026-09-29'
    states: unselected and selected captured 2026-07-11 (30px tall, padding 6px 10px then) and again in the 2026-09-29 survey (32px, padding 0 10px); hover, pressed and keyboard focus measured 2026-09-29 on '일간'
    use: BEST ranking period chips (실시간, 일간, 주간, 월간)
  product-image-link:
    type: card
    backgroundColor: transparent
    size: 251px x 251px
    hover: no visible change (measured 2026-09-29)
    pressed: no visible change (measured 2026-09-29)
    focus: browser default ring (not brand) — measured 2026-09-29
    states: default captured 2026-07-11 (40 on BEST); hover, pressed and keyboard focus measured 2026-09-29 on the first BEST item
    use: Image link of a BEST product item, inside product-grid-item (the rank badge is its label)
  buy-cta:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 4px
    padding: 12px 18px
    height: 44px
    typography: 14px / 700
    states: default captured 2026-07-11 and seen again in the 2026-09-29 survey; never pressed (a purchase action), so no state is declared
    use: Product-detail '바로 구매하기'
  quantity-stepper:
    type: button
    backgroundColor: '#ffffff'
    border: '1px solid #dddddd (no inner edge)'
    rounded: 4px 0px 0px 4px (minus); 0px 4px 4px 0px (plus)
    size: 36px x 36px
    states: default captured 2026-07-11; no state sample
    use: Quantity minus and plus buttons ('감소', '증가') either side of quantity-input
  option-thumbnail:
    type: button
    backgroundColor: transparent
    border: '1px solid #dddddd'
    rounded: 2px
    size: 74px x 74px
    selected: 'border 1px #000000'
    states: default and selected captured 2026-07-11 and seen again in the 2026-09-29 survey; no pointer-state sample
    use: Product option thumbnail (colour option), an a role=button
  editorial-tag:
    type: button
    backgroundColor: transparent
    border: '1px solid #d4d4d4'
    rounded: 2px
    padding: 0px 9px
    height: 25px
    states: default captured 2026-07-11 (24 on 29Magazine); no state sample
    use: 29Magazine story tag chip
fonts:
  roles:
    sans: Pretendard Variable
---

# Design System Inspiration of 29CM

## Overview

### Visual Theme & Atmosphere

Across the current homepage, BEST catalog, 29Magazine, Showcase, and a public product-detail page, 29CM presents itself as a taste-led select shop and turns commerce into an editorial browsing experience. Large photography and oversized black navigation lead; product metadata is deliberately compact so curation and shopping efficiency coexist. The common canvas is `#ffffff`, the dominant ink is `#000000`, and the recurring neutral text colors are `#5d5d5d`, `#303033`, and `#474747`. The only repeated chromatic accent found in the captured commerce surfaces is the orange-red sale text `#ff4800`.

The desktop home navigation is materially larger than the previous reference described: the captured link is `40px` at weight `700` with a `60px` line height. 29Magazine lead titles use `23px/600`, while BEST product metadata compresses to an `11px/700` brand, `12px/400` name, `13px/700` discount and price, and `10px/500` flags. This scale contrast—not a single three-step type ramp—is the current signature.

Pretendard Variable was both declared and loaded, and the collector observed it on 1,562 elements across all five surfaces. `campton` and `swiper-icons` appeared in font declarations but had zero observed usage, so neither is promoted to a canonical family. The captured surfaces remain mostly flat, but they are not radius-free: an editorial outline action uses 4px corners, product cards use 4px, a 10px chip radius exists, and product-gallery controls are fully round at 9999px.

**Observed characteristics:**
- Five public surfaces reconciled in one capture: storefront, BEST, 29Magazine, Showcase, and product detail
- `#000000` and `#ffffff` dominate; `#ff4800` is sale text, not a filled pill
- Loaded primary family: Pretendard Variable
- 40px/700 desktop editorial navigation and 23px/600 magazine story title
- Compact commerce metadata from 10px to 13px
- Flat containers with targeted 0px, 2px, 4px, 10px, and full-round geometry
- Current outline border `#dddddd`; previous `#c4c4c4` claim was not retained
- Component inventory is based on native buttons, inputs, and list items across multiple routes

### Primary tasks

- Read an editorial story that builds context around a product
- Scan ranked products by brand, discount, price, and shipping
- Look through a product's photos on its detail page
- Compare product details before deciding what to buy

### Brand Narrative

29CM presents itself on its current official storefront as “감도 깊은 취향 셀렉트샵.” The five inspected surfaces support an observable editorial-commerce positioning through magazine stories, showcases, catalog ranking, and product purchase flows.

The current first-party surfaces describe the product posture but do not establish a name origin, founding mythology, mission, ownership narrative, or unpublished brand-book structure. Those topics remain omitted until a current official source is available. This preserves the useful observable story—editorial discovery leading into purchase—without converting third-party history or plausible interpretation into brand fact.

Across those surfaces, curation is expressed structurally rather than through a large set of brand effects. Magazine and Showcase create context around objects; BEST compresses comparison into a ranked grid; product detail translates that interest into price, option, delivery, and purchase information. The same black-and-white restraint lets imagery and selection do the expressive work. This is the supported narrative boundary: 29CM behaves like an editor inside a store, while claims about internal brand doctrine remain absent until first-party publication.

### Principles

Official published design or brand principles were not located in this verification pass. The following are clearly labeled implementation inferences from the captured UI, not 29CM-authored principles:

1. **Separate editorial and commerce density.** Large navigation and story titles coexist with compact product metadata.
2. **Use color sparingly.** Black and white structure the surface; `#ff4800` identifies current sale information.
3. **Let component geometry follow function.** Story items are square-edged, product items use small corners, and gallery controls are fully round.
4. **Require observed usage before promoting a resource.** Pretendard Variable is canonical because it loaded and appeared on elements; declared-only fonts are not.

### Personas

No current first-party persona definitions were verified. Observable task contexts include browsing a curated story, scanning ranked products, comparing product details, and moving from editorial discovery into purchase. Do not treat fictional demographic profiles as brand facts. If persona work is needed, create a separately labeled research artifact with recruitment data, tasks, and behavioral evidence; keep it outside this canonical reference until 29CM publishes or confirms it.

## Colors

### Core
- **Primary / foreground** — `#000000`: navigation, product text, headings, and primary ink.
- **Canvas** — `#ffffff`: page and control surfaces.
- **Muted** — `#5d5d5d`: repeatedly observed secondary copy; some instances render with alpha.
- **Secondary ink** — `#303033`: magazine and product-detail copy.
- **Tertiary ink** — `#474747`: catalog and product-detail supporting copy.
- **Border** — `#dddddd`: live outline-button and quantity-control border.
- **Accent** — `#ff4800`: current discount percentage text on BEST and product-detail surfaces.
- **Focus outline** — `#375fff`: authored 1px keyboard-focus outline on the ghost outline action (offset 2px) and the BEST period chips (offset 1px), measured 2026-09-29. Nav links, product image links and the quantity input show the browser's default ring instead, so this is not a site-wide focus rule.

The accent is rendered as text on a transparent background with 0px radius; it should not be reconstructed as the old `#ff0066` or `#ff003c` sale pill. Low-frequency page-specific values such as `#f4f4f4` were captured but remain evidence rather than canonical tokens because they were not sufficiently recurrent.

## Typography

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No separate public typography standard was located; product-use comes from inspected first-party surfaces. |
| Live surface-use | Loaded `Pretendard Variable` appeared on 1,562 elements across five surfaces. |
| Official distributed asset | No 29CM product font asset is promoted from distribution evidence. |
| Declared-only | `campton` and `swiper-icons` had zero observed text usage. |
| Unresolved | Native-app-only or campaign-specific families remain unresolved until inspected. |

Specimen availability is separate from family truth and follows a loadable, licensed source.

- **Canonical family:** `Pretendard Variable` — loaded and used across all five inspected surfaces.
- **Declared-only:** `campton` and `swiper-icons` — zero observed element usage; do not use as canonical text families.
- **Fallbacks:** preserve the product's CSS fallback chain when implementing, but do not infer a separate display face from declarations alone.

### Captured hierarchy

| Role | Size | Weight | Line height | Captured surface |
|---|---:|---:|---:|---|
| Desktop editorial navigation | 40px | 700 | 60px | Home |
| Magazine lead story title | 23px | 600 | 29.9px | 29Magazine |
| Shared body | 16px | 400 | 24px | Home and editorial |
| Product-grid brand | 11px | 700 | 15.0px | BEST |
| Product-grid name | 12px | 400 | 16.3px | BEST |
| Product price and discount | 13px | 700 | 18.2px | BEST and product detail |
| Shipping and product flag | 10px | 500 | 12px | BEST and product detail |

Use the large-to-small contrast intentionally: editorial navigation and stories establish discovery, while dense commerce metadata stays compact. Do not substitute the obsolete 30px/700 and 22px/700 hierarchy as if it were the current live system.

## Layout

The observed surfaces alternate between wide editorial storytelling and dense commerce lists. Home and magazine reserve large blocks for imagery and navigation; BEST compresses repeated product metadata; product detail separates gallery controls from the purchase panel. Preserve those surface-specific densities instead of forcing one universal card grid.

The canonical spacing samples are 2px, 4px, 8px, 16px, 24px, and 28px. They are measured reusable values, not a claim that every page follows a strict mathematical scale. Product and story lists should use their native list-item structure so a renderer can preserve image, label, title, price, and flag relationships.

The captured radius vocabulary is 2px, 4px, 10px, and 9999px, plus square 0px surfaces. Fully round geometry is valid for image-carousel controls; the earlier rule that prohibited radii above 8px was incorrect.

### Responsive Behavior

The July 11 evidence set validates current desktop layouts and component geometry. It does not provide enough controlled multi-viewport samples to canonize breakpoints or mobile transformations.

- Preserve image aspect ratio and metadata order when adapting product and story list items.
- Keep the full 52px carousel control target when space permits; verify any compact mobile variant separately.
- Retain semantic list and button structure at every viewport.
- Treat navigation collapse, mobile column counts, tablet gutters, and fixed-position help behavior as unestablished until a controlled multi-viewport capture is made.

## Elevation & Depth

| Treatment | Captured use |
|---|---|
| Flat, no shadow | Page, editorial story items, and product list items |
| `1px solid #dddddd` | Ghost outline action and quantity input |
| `rgba(0,0,0,0.5)` overlay | Product-gallery carousel control |
| Full-round geometry | 52px carousel controls |

The canonical shadow token is `none`. This does not imply that every transient or uninspected surface lacks elevation; it means no reusable box-shadow could be promoted from the five captured public routes.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No canonical motion duration or easing curve was published or extracted in this verification pass.

The evidence set records static default and pseudo-state snapshots only. Do not infer 150ms/250ms durations, cubic-bezier curves, image scaling, scroll reveals, stagger timing, toast dismissal, or reduced-motion substitutions from the visual captures. A future motion pass should record computed transition properties, animation names, durations, easing, and reduced-motion behavior per component.

## Components

### Ghost Outline
- Type: button
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #dddddd`
- Radius: 4px
- Padding: 16px 16px 16px 20px
- Height: 52px
- Font: 14px at weight 700
- Hover: no visible change (measured 2026-09-29)
- Pressed: background `#f4f4f4`, text `#474747` (first seen on the product outline action in July; measured on the home 더보기 itself on 2026-09-17 and 2026-09-29)
- Focus: authored outline 1px `#375fff`, offset 2px (measured 2026-09-29)
- Use: editorial more action and brand-home action

### Carousel Control
- Type: button
- Background: `rgba(0,0,0,0.5)`
- Text: `#ffffff`
- Border: none observed
- Radius: 9999px
- Padding: 14px
- Height: 52px
- Font: 16px at weight 400
- Hover: background darkens to `rgba(0,0,0,0.9)` (measured 2026-09-29 on the enabled next button)
- Pressed: background `#27272a` (measured 2026-09-29)
- Disabled: background `rgba(93,93,93,0.4)`, icon `rgba(255,255,255,0.5)`, cursor not-allowed
- Keyboard focus was not read: in the runs with a keyboard walk the gallery moved and the button was disabled when reached
- Use: product-image previous and next controls

### Product Grid Item
- Type: listItem
- Background: transparent
- Radius: 4px
- Content: image, brand, name, `#ff4800` discount text, price, and shipping caption
- Use: BEST result grid

### Editorial Story Item
- Type: listItem
- Background: transparent
- Radius: 0px
- Content: large editorial media with story metadata
- Use: 29Magazine and Showcase lists

### Quantity Input
- Type: input
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #dddddd`
- Radius: 0px
- Height: 36px
- Font: 16px at weight 500
- Hover: no visible change (measured 2026-09-29)
- Focus: the browser's default ring (not brand); the border stays `#dddddd`. A mouse press focuses the field and shows the same ring. No authored focus or pressed style (measured 2026-09-29)
- Use: product-detail quantity field

### Desktop Navigation Link
- Type: navigation link
- Text: `#000000`, 40px at weight 700, 48px link box, no fill
- Hover and pressed: the parent's `::before` draws a 6px `#000000` bar under the link; the text colour does not change. Read on 2026-09-29 in the scrolled header, where the same link renders 24px / 700 and the bar is 116px wide
- Focus: the browser's default ring (not brand), measured 2026-09-29; the bar is not drawn on focus
- Use: BEST, Showcase, 29Magazine and the other desktop navigation entries

### Period Chip
- Type: button
- Background: `rgba(93,93,93,0.08)`; label `#474747`, 13px at weight 400
- Radius: 10px; 32px tall with 0 10px padding on 2026-09-29 (30px tall with 6px 10px padding in the July capture)
- Selected: background `#000000`, text `#ffffff` — the chip of the period in the URL (실시간 for period=HOURLY)
- Hover: no visible change. Pressed: the label turns `#5d5d5d`. Focus: authored outline 1px `#375fff`, offset 1px (all measured 2026-09-29)
- Use: BEST ranking period chips (실시간, 일간, 주간, 월간)

### Product Image Link
- Type: card
- Transparent, 251px square image link inside a BEST product item; the rank badge is its label
- Hover and pressed: no visible change. Focus: the browser's default ring, not brand (all measured 2026-09-29)

### Buy CTA
- Type: button
- Background: `#000000`; Text: `#ffffff`; Radius: 4px; Padding: 12px 18px; Height: 44px; Font: 14px at weight 700
- States: default only. It is a purchase action and was never pressed
- Use: 바로 구매하기 on the product page, beside the 44px outline 장바구니 담기

### Quantity Stepper
- Type: button
- Background: `#ffffff`; 1px `#dddddd` border with no inner edge; 36px square; radius 4px on the outer corners only
- Use: the minus and plus buttons either side of the quantity input

### Option Thumbnail
- Type: button
- 74px square, transparent, 1px `#dddddd` border, 2px radius; the selected option's border is `#000000`
- Use: product option thumbnails

### Editorial Tag
- Type: button
- Transparent, 1px `#d4d4d4` border, 2px radius, 0 9px padding, 25px tall
- Use: tag chips on 29Magazine stories

The collector found 68 component variants across the five routes: 40 button variants, 27 list-item variants, and one input variant. No safe click expansion was executed because the candidate interactions could mutate navigation or commerce state; pseudo-state capture still recorded disabled, focus, hover, and pressed variants where available. Its only carousel state frames sit on `surface-5::[data-omd-capture="17"]`, the previous button while disabled (`rgba(93,93,93,0.4)`), so they are not used as values; the hover, pressed and focus values above come from the 2026-09-29 live probe, which reads real `:hover`, `:active` and keyboard `:focus-visible`.

---

**Verified:** 2026-07-11 (five-surface live recapture and deterministic reconciliation) · states re-measured 2026-09-29 (live probe of the home, BEST and product pages)
**Tier 1 sources:** https://www.29cm.co.kr/ , https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30 , https://www.29cm.co.kr/content/29magazine , https://www.29cm.co.kr/store/showcase , https://www.29cm.co.kr/products/3970725
**Tier 2 sources:** https://getdesign.md/29cm returned “No designs found for 29cm”; https://styles.refero.design/?q=29CM exposed no 29CM-specific style result in the rendered search path inspected on 2026-07-11.
**Conflicts unresolved:** none

Current live evidence supersedes the prior pink accent, `#c4c4c4` outline, 22px/700 editorial title, and radius-ceiling assumptions.

### States

| State | Verified treatment |
|---|---|
| Default | Captured for buttons, list items, and the product quantity input |
| Hover | Measured 2026-09-29: no visible change on the ghost outline, period chip, product image link and quantity input; the carousel control darkens to `rgba(0,0,0,0.9)`; desktop navigation draws a 6px black bar |
| Focus | Measured 2026-09-29: authored 1px `#375fff` outline on the ghost outline and period chips; the browser's default ring on navigation links, product image links and the quantity input; carousel focus not measured |
| Pressed | Measured 2026-09-29: ghost outline `#f4f4f4` / `#474747`, period chip label `#5d5d5d`, carousel `#27272a`; no change on the product image link |
| Disabled | Captured on product-gallery controls: `rgba(93,93,93,0.4)` with a half-transparent white icon |
| Sale | `#ff4800` text, transparent background, 0px radius |
| Empty | Not captured — a dedicated public empty-state capture is required |
| Loading | Not captured — a dedicated loading-state capture is required |
| Error | Not captured — a dedicated public error-state capture is required |
| Success | Not captured — a dedicated public success-state capture is required |

Pseudo-state evidence records visual variants available without executing state-changing commerce interactions. It does not prove every control implements every state.

## Do's and Don'ts

### Do
- Use loaded `Pretendard Variable` as the canonical text family.
- Keep `#000000` and `#ffffff` as structural colors and `#ff4800` for observed sale text.
- Reproduce the 40px/700 navigation, 23px/600 editorial title, and compact 10–13px product metadata as distinct roles.
- Use `#dddddd` for the verified outline and quantity borders.
- Preserve list-item semantics for product grids and editorial story collections.
- Allow full-round product-gallery controls where the live component uses them.
- Distinguish loaded fonts from declared-only font resources.

### Don't
- Don't restore `#ff0066` or `#ff003c` as the current discount accent.
- Don't render discount text as a filled pill; the captured treatment is transparent with 0px radius.
- Don't promote Campton or swiper-icons to a canonical text family without observed usage.
- Don't assert that 4px is the maximum radius.
- Don't invent mobile breakpoints, motion timings, semantic state colors, or focus treatments that were not captured.
- Don't combine editorial and product metadata into a single generic typography style.
- Don't replace `#dddddd` with the obsolete `#c4c4c4` outline claim.

## Voice & Tone

The current site title identifies 29CM as “감도 깊은 취향 셀렉트샵 29CM.” Public navigation mixes Korean utility language with English editorial labels such as BEST, Showcase, and 29Magazine. Product grids use concise brand, item, discount, price, and shipping strings; editorial surfaces allow longer story titles.

These observations establish interface examples, not a complete official writing standard. They support one practical boundary: navigation and commerce metadata stay concise, while editorial stories may use longer, curatorial language. A current official voice-and-tone guide was not located, so this reference does not invent forbidden phrases, sentence endings, push copy, or error-copy rules. Future claims in those areas require first-party guidance or a captured product state.

## Agent Prompt Guide

### Quick token reference
- Canvas: `#ffffff`
- Foreground and primary: `#000000`
- Muted: `#5d5d5d`
- Secondary and tertiary ink: `#303033`, `#474747`
- Sale accent: `#ff4800`
- Border: `#dddddd`
- Font: `Pretendard Variable`
- Navigation: 40px / 700 / 60px
- Editorial title: 23px / 600 / 29.9px
- Product brand: 11px / 700
- Product name: 12px / 400
- Product price and discount: 13px / 700
- Product flag: 10px / 500

### Construction prompts
- “Build a 29CM ghost action with a white background, black 14px/700 text, 1px `#dddddd` border, 4px radius, 52px height, and 16px 16px 16px 20px padding.”
- “Build a BEST product list item with image, 11px/700 brand, 12px/400 product name, transparent `#ff4800` 13px/700 discount text, 13px/700 price, and 10px/500 shipping flag.”
- “Build a product-gallery control at 52px square with `rgba(0,0,0,0.5)` background, white icon, 14px padding, and 9999px radius. Hover darkens it to `rgba(0,0,0,0.9)`, pressed is `#27272a`, and disabled is `rgba(93,93,93,0.4)` with a half-transparent white icon; no focus style was measured.”
- “Build a quantity input at 36px height with white background, black 16px/500 text, 1px `#dddddd` border, and 0px radius.”

Use the exact component evidence before extrapolating. If a requested state, viewport, or pattern is absent, mark it for capture rather than filling it with a generic commerce convention.

---

## Governance

### Known Gaps

- **Contrast, `nav-display-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `period-chip`.** Text `#474747` on `#5d5d5d14` measures 1.41:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
