---
id: "29cm"
name: "29CM"
country: KR
category: ecommerce
homepage: "https://www.29cm.co.kr"
primary_color: "#000000"
logo:
  type: favicon
  slug: "https://asset.29cm.co.kr/icon/apple-icon-144x144.png"
verified: "2026-07-11"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: home, kind: storefront, url: "https://www.29cm.co.kr/", inspected: "2026-07-11" }
    - { id: best, kind: catalog, url: "https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30", inspected: "2026-07-11" }
    - { id: magazine, kind: editorial, url: "https://www.29cm.co.kr/content/29magazine", inspected: "2026-07-11" }
    - { id: showcase, kind: editorial, url: "https://www.29cm.co.kr/store/showcase", inspected: "2026-07-11" }
    - { id: product, kind: product-detail, url: "https://www.29cm.co.kr/products/3970725", inspected: "2026-07-11" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.29cm.co.kr/", captured: "2026-07-11" }
    - { id: best-live, kind: product-surface, url: "https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30", captured: "2026-07-11" }
    - { id: magazine-live, kind: product-surface, url: "https://www.29cm.co.kr/content/29magazine", captured: "2026-07-11" }
    - { id: showcase-live, kind: product-surface, url: "https://www.29cm.co.kr/store/showcase", captured: "2026-07-11" }
    - { id: product-live, kind: product-surface, url: "https://www.29cm.co.kr/products/3970725", captured: "2026-07-11" }
  claims:
    "tokens.colors.accent": &best_evidence { surface_id: best, source_id: best-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.colors.border": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.ink-secondary": &magazine_evidence { surface_id: magazine, source_id: magazine-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.colors.ink-tertiary": *best_evidence
    "tokens.colors.muted": *home_evidence
    "tokens.colors.primary": *home_evidence
    "tokens.components.carousel-control.bg": &product_evidence { surface_id: product, source_id: product-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.components.carousel-control.fg": *product_evidence
    "tokens.components.carousel-control.font": *product_evidence
    "tokens.components.carousel-control.height": *product_evidence
    "tokens.components.carousel-control.padding": *product_evidence
    "tokens.components.carousel-control.radius": *product_evidence
    "tokens.components.carousel-control.states": *product_evidence
    "tokens.components.carousel-control.type": *product_evidence
    "tokens.components.carousel-control.use": *product_evidence
    "tokens.components.editorial-story-item.bg": &showcase_evidence { surface_id: showcase, source_id: showcase-live, method: live-inspect, captured: "2026-07-11" }
    "tokens.components.editorial-story-item.radius": *showcase_evidence
    "tokens.components.editorial-story-item.type": *showcase_evidence
    "tokens.components.editorial-story-item.use": *showcase_evidence
    "tokens.components.ghost-outline.bg": *home_evidence
    "tokens.components.ghost-outline.border": *home_evidence
    "tokens.components.ghost-outline.fg": *home_evidence
    "tokens.components.ghost-outline.font": *home_evidence
    "tokens.components.ghost-outline.height": *home_evidence
    "tokens.components.ghost-outline.padding": *home_evidence
    "tokens.components.ghost-outline.radius": *home_evidence
    "tokens.components.ghost-outline.states": *home_evidence
    "tokens.components.ghost-outline.type": *home_evidence
    "tokens.components.ghost-outline.use": *home_evidence
    "tokens.components.product-grid-item.bg": *best_evidence
    "tokens.components.product-grid-item.radius": *best_evidence
    "tokens.components.product-grid-item.type": *best_evidence
    "tokens.components.product-grid-item.use": *best_evidence
    "tokens.components.quantity-input.bg": *product_evidence
    "tokens.components.quantity-input.border": *product_evidence
    "tokens.components.quantity-input.fg": *product_evidence
    "tokens.components.quantity-input.font": *product_evidence
    "tokens.components.quantity-input.height": *product_evidence
    "tokens.components.quantity-input.radius": *product_evidence
    "tokens.components.quantity-input.states": *product_evidence
    "tokens.components.quantity-input.type": *product_evidence
    "tokens.components.quantity-input.use": *product_evidence
    "tokens.rounded.chip": *product_evidence
    "tokens.rounded.full": *product_evidence
    "tokens.rounded.md": *home_evidence
    "tokens.rounded.sm": *home_evidence
    "tokens.shadow.flat": *home_evidence
    "tokens.spacing.base": *home_evidence
    "tokens.spacing.lg": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.xl": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.caption.lineHeight": *best_evidence
    "tokens.typography.caption.size": *best_evidence
    "tokens.typography.caption.use": *best_evidence
    "tokens.typography.caption.weight": *best_evidence
    "tokens.typography.editorial-title.lineHeight": *magazine_evidence
    "tokens.typography.editorial-title.size": *magazine_evidence
    "tokens.typography.editorial-title.use": *magazine_evidence
    "tokens.typography.editorial-title.weight": *magazine_evidence
    "tokens.typography.family.sans": *home_evidence
    "tokens.typography.nav-display.lineHeight": *home_evidence
    "tokens.typography.nav-display.size": *home_evidence
    "tokens.typography.nav-display.use": *home_evidence
    "tokens.typography.nav-display.weight": *home_evidence
    "tokens.typography.product-brand.lineHeight": *best_evidence
    "tokens.typography.product-brand.size": *best_evidence
    "tokens.typography.product-brand.use": *best_evidence
    "tokens.typography.product-brand.weight": *best_evidence
    "tokens.typography.product-name.lineHeight": *best_evidence
    "tokens.typography.product-name.size": *best_evidence
    "tokens.typography.product-name.use": *best_evidence
    "tokens.typography.product-name.weight": *best_evidence
    "tokens.typography.product-price.lineHeight": *best_evidence
    "tokens.typography.product-price.size": *best_evidence
    "tokens.typography.product-price.use": *best_evidence
    "tokens.typography.product-price.weight": *best_evidence

tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "Five current public commerce/editorial surfaces. Pretendard Variable is loaded and used; Campton and swiper-icons are declared-only. Accent is current sale text #ff4800, not the previous #ff0066/#ff003c guess."
  colors:
    primary: "#000000"
    foreground: "#000000"
    canvas: "#ffffff"
    muted: "#5d5d5d"
    ink-secondary: "#303033"
    ink-tertiary: "#474747"
    accent: "#ff4800"
    border: "#dddddd"
  typography:
    family: { sans: "Pretendard Variable" }
    nav-display: { size: 40, weight: 700, lineHeight: 1.5, use: "Desktop editorial navigation" }
    editorial-title: { size: 23, weight: 600, lineHeight: 1.3, use: "29Magazine lead story title" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Shared commerce and editorial body" }
    product-brand: { size: 11, weight: 700, lineHeight: 1.36, use: "Product-grid brand link" }
    product-name: { size: 12, weight: 400, lineHeight: 1.36, use: "Product-grid item name" }
    product-price: { size: 13, weight: 700, lineHeight: 1.4, use: "Price and discount percentage row" }
    caption: { size: 10, weight: 500, lineHeight: 1.2, use: "Shipping and product flags" }
  spacing: { xs: 2, sm: 4, md: 8, base: 16, lg: 24, xl: 28 }
  rounded: { sm: 2, md: 4, chip: 10, full: 9999 }
  shadow:
    flat: "none"
  components_harvested: true
  components:
    ghost-outline: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #dddddd", radius: "4px", padding: "16px 16px 16px 20px", height: "52px", font: "14px / 700", states: "default on home and magazine; pressed observed on product outline CTA", use: "Editorial more and brand-home action" }
    carousel-control: { type: button, bg: "rgba(0,0,0,0.5)", fg: "#ffffff", radius: "9999px", padding: "14px", height: "52px", font: "16px / 400", states: "disabled, focus, hover, pressed", use: "Product-image previous/next control" }
    product-grid-item: { type: listItem, bg: "transparent", radius: "4px", use: "BEST product result with image, brand, name, discount, price, and shipping caption" }
    editorial-story-item: { type: listItem, bg: "transparent", radius: "0px", use: "29Magazine and Showcase story/list entry" }
    quantity-input: { type: input, bg: "#ffffff", fg: "#000000", border: "1px solid #dddddd", radius: "0px", height: "36px", font: "16px / 500", states: "default captured; no changed focus style observed", use: "Product-detail quantity field" }
---

# Design System Inspiration of 29CM

## 1. Visual Theme & Atmosphere

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

## 2. Color Palette & Roles

### Core
- **Primary / foreground** — `#000000`: navigation, product text, headings, and primary ink.
- **Canvas** — `#ffffff`: page and control surfaces.
- **Muted** — `#5d5d5d`: repeatedly observed secondary copy; some instances render with alpha.
- **Secondary ink** — `#303033`: magazine and product-detail copy.
- **Tertiary ink** — `#474747`: catalog and product-detail supporting copy.
- **Border** — `#dddddd`: live outline-button and quantity-control border.
- **Accent** — `#ff4800`: current discount percentage text on BEST and product-detail surfaces.

The accent is rendered as text on a transparent background with 0px radius; it should not be reconstructed as the old `#ff0066` or `#ff003c` sale pill. Low-frequency page-specific values such as `#f4f4f4` were captured but remain evidence rather than canonical tokens because they were not sufficiently recurrent.

## 3. Typography Rules

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

## 4. Component Stylings

### Ghost Outline
- Type: button
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #dddddd`
- Radius: 4px
- Padding: 16px 16px 16px 20px
- Height: 52px
- Font: 14px at weight 700
- States: default captured on home and magazine; a related product outline action exposed pressed state
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
- States: disabled, focus, hover, and pressed captured
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
- States: default captured; no visually distinct changed focus style was observed
- Use: product-detail quantity field

The collector found 68 component variants across the five routes: 40 button variants, 27 list-item variants, and one input variant. No safe click expansion was executed because the candidate interactions could mutate navigation or commerce state; pseudo-state capture still recorded disabled, focus, hover, and pressed variants where available.

---

**Verified:** 2026-07-11 (five-surface live recapture and deterministic reconciliation)
**Tier 1 sources:** https://www.29cm.co.kr/ , https://www.29cm.co.kr/best-products?period=HOURLY&ranking=POPULARITY&gender=F&age=30 , https://www.29cm.co.kr/content/29magazine , https://www.29cm.co.kr/store/showcase , https://www.29cm.co.kr/products/3970725
**Tier 2 sources:** https://getdesign.md/29cm returned “No designs found for 29cm”; https://styles.refero.design/?q=29CM exposed no 29CM-specific style result in the rendered search path inspected on 2026-07-11.
**Conflicts unresolved:** none

Current live evidence supersedes the prior pink accent, `#c4c4c4` outline, 22px/700 editorial title, and radius-ceiling assumptions.

## 5. Layout Principles

The observed surfaces alternate between wide editorial storytelling and dense commerce lists. Home and magazine reserve large blocks for imagery and navigation; BEST compresses repeated product metadata; product detail separates gallery controls from the purchase panel. Preserve those surface-specific densities instead of forcing one universal card grid.

The canonical spacing samples are 2px, 4px, 8px, 16px, 24px, and 28px. They are measured reusable values, not a claim that every page follows a strict mathematical scale. Product and story lists should use their native list-item structure so a renderer can preserve image, label, title, price, and flag relationships.

The captured radius vocabulary is 2px, 4px, 10px, and 9999px, plus square 0px surfaces. Fully round geometry is valid for image-carousel controls; the earlier rule that prohibited radii above 8px was incorrect.

## 6. Depth & Elevation

| Treatment | Captured use |
|---|---|
| Flat, no shadow | Page, editorial story items, and product list items |
| `1px solid #dddddd` | Ghost outline action and quantity input |
| `rgba(0,0,0,0.5)` overlay | Product-gallery carousel control |
| Full-round geometry | 52px carousel controls |

The canonical shadow token is `none`. This does not imply that every transient or uninspected surface lacks elevation; it means no reusable box-shadow could be promoted from the five captured public routes.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

The July 11 evidence set validates current desktop layouts and component geometry. It does not provide enough controlled multi-viewport samples to canonize breakpoints or mobile transformations.

- Preserve image aspect ratio and metadata order when adapting product and story list items.
- Keep the full 52px carousel control target when space permits; verify any compact mobile variant separately.
- Retain semantic list and button structure at every viewport.
- Treat navigation collapse, mobile column counts, tablet gutters, and fixed-position help behavior as `[FILL IN: controlled multi-viewport capture required]`.

## 9. Agent Prompt Guide

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
- “Build a product-gallery control at 52px square with `rgba(0,0,0,0.5)` background, white icon, 14px padding, and 9999px radius. Include disabled, focus, hover, and pressed variants.”
- “Build a quantity input at 36px height with white background, black 16px/500 text, 1px `#dddddd` border, and 0px radius.”

Use the exact component evidence before extrapolating. If a requested state, viewport, or pattern is absent, mark it for capture rather than filling it with a generic commerce convention.

---

## 10. Voice & Tone

The current site title identifies 29CM as “감도 깊은 취향 셀렉트샵 29CM.” Public navigation mixes Korean utility language with English editorial labels such as BEST, Showcase, and 29Magazine. Product grids use concise brand, item, discount, price, and shipping strings; editorial surfaces allow longer story titles.

These observations establish interface examples, not a complete official writing standard. They support one practical boundary: navigation and commerce metadata stay concise, while editorial stories may use longer, curatorial language. A current official voice-and-tone guide was not located, so this reference does not invent forbidden phrases, sentence endings, push copy, or error-copy rules. Future claims in those areas require first-party guidance or a captured product state.

## 11. Brand Narrative

29CM presents itself on its current official storefront as “감도 깊은 취향 셀렉트샵.” The five inspected surfaces support an observable editorial-commerce positioning through magazine stories, showcases, catalog ranking, and product purchase flows.

The current first-party surfaces describe the product posture but do not establish a name origin, founding mythology, mission, ownership narrative, or unpublished brand-book structure. Those topics remain omitted until a current official source is available. This preserves the useful observable story—editorial discovery leading into purchase—without converting third-party history or plausible interpretation into brand fact.

Across those surfaces, curation is expressed structurally rather than through a large set of brand effects. Magazine and Showcase create context around objects; BEST compresses comparison into a ranked grid; product detail translates that interest into price, option, delivery, and purchase information. The same black-and-white restraint lets imagery and selection do the expressive work. This is the supported narrative boundary: 29CM behaves like an editor inside a store, while claims about internal brand doctrine remain absent until first-party publication.

## 12. Principles

Official published design or brand principles were not located in this verification pass. The following are clearly labeled implementation inferences from the captured UI, not 29CM-authored principles:

1. **Separate editorial and commerce density.** Large navigation and story titles coexist with compact product metadata.
2. **Use color sparingly.** Black and white structure the surface; `#ff4800` identifies current sale information.
3. **Let component geometry follow function.** Story items are square-edged, product items use small corners, and gallery controls are fully round.
4. **Require observed usage before promoting a resource.** Pretendard Variable is canonical because it loaded and appeared on elements; declared-only fonts are not.

## 13. Personas

No current first-party persona definitions were verified. Observable task contexts include browsing a curated story, scanning ranked products, comparing product details, and moving from editorial discovery into purchase. Do not treat fictional demographic profiles as brand facts. If persona work is needed, create a separately labeled research artifact with recruitment data, tasks, and behavioral evidence; keep it outside this canonical reference until 29CM publishes or confirms it.

## 14. States

| State | Verified treatment |
|---|---|
| Default | Captured for buttons, list items, and the product quantity input |
| Hover | Captured on eligible button controls |
| Focus | Captured on eligible button controls |
| Pressed | Captured on eligible button controls |
| Disabled | Captured on product-gallery controls |
| Sale | `#ff4800` text, transparent background, 0px radius |
| Empty | `[FILL IN: dedicated public empty-state capture required]` |
| Loading | `[FILL IN: dedicated loading-state capture required]` |
| Error | `[FILL IN: dedicated public error-state capture required]` |
| Success | `[FILL IN: dedicated public success-state capture required]` |

Pseudo-state evidence records visual variants available without executing state-changing commerce interactions. It does not prove every control implements every state.

## 15. Motion & Easing

`[FILL IN: no canonical motion duration or easing curve was published or extracted in this verification pass.]`

The evidence set records static default and pseudo-state snapshots only. Do not infer 150ms/250ms durations, cubic-bezier curves, image scaling, scroll reveals, stagger timing, toast dismissal, or reduced-motion substitutions from the visual captures. A future motion pass should record computed transition properties, animation names, durations, easing, and reduced-motion behavior per component.
