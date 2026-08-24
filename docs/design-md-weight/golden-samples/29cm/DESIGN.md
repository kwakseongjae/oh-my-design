# 29CM Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

29CM presents itself on its current official storefront as “감도 깊은 취향 셀렉트샵.” This contract covers five current public surfaces: homepage, BEST catalog, 29Magazine, Showcase, and a public product-detail page. Across those surfaces 29CM turns commerce into an editorial browsing experience. Large photography and oversized black navigation lead; product metadata is deliberately compact so curation and shopping efficiency coexist.

The common canvas is `#ffffff`, the dominant ink is `#000000`, and the recurring neutral text colors are `#5d5d5d`, `#303033`, and `#474747`. The only repeated chromatic accent found in the captured commerce surfaces is the orange-red sale text `#ff4800`. Desktop home navigation is `40px` at weight `700` with a `60px` line height. 29Magazine lead titles use `23px/600`, while BEST product metadata compresses to an `11px/700` brand, `12px/400` name, `13px/700` discount and price, and `10px/500` flags. That scale contrast—not a single three-step type ramp—is the current signature.

Pretendard Variable was both declared and loaded, and the collector observed it on 1,562 elements across all five surfaces. `campton` and `swiper-icons` appeared in font declarations but had zero observed usage, so neither is promoted to a canonical family. Captured surfaces remain mostly flat, but they are not radius-free: an editorial outline action uses 4px corners, product cards use 4px, a 10px chip radius exists, and product-gallery controls are fully round at 9999px.

The five first-party surfaces describe the product posture but do not establish a name origin, founding mythology, mission, ownership narrative, or unpublished brand-book structure. Those topics remain omitted until a current official source is available. The supported narrative boundary: 29CM behaves like an editor inside a store. Magazine and Showcase create context around objects; BEST compresses comparison into a ranked grid; product detail translates that interest into price, option, delivery, and purchase information. The same black-and-white restraint lets imagery and selection do the expressive work.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Browse a curated editorial story.
- Scan ranked products.
- Compare product details.
- Move from editorial discovery into purchase.
<!-- design-md:claim-end -->

### Audience

No current first-party persona definitions were verified. Observable task contexts are the primary tasks above. Do not treat fictional demographic profiles as brand facts.

### Distinctive traits

- Five public surfaces reconciled in one capture: storefront, BEST, 29Magazine, Showcase, and product detail
- `#000000` and `#ffffff` dominate; `#ff4800` is sale text, not a filled pill
- Loaded primary family: Pretendard Variable
- 40px/700 desktop editorial navigation and 23px/600 magazine story title
- Compact commerce metadata from 10px to 13px
- Flat containers with targeted 0px, 2px, 4px, 10px, and full-round geometry
- Current outline border `#dddddd`; previous `#c4c4c4` claim was not retained
- Component inventory is based on native buttons, inputs, and list items across multiple routes

### Principles

Official published design or brand principles were not located in this verification pass. The following are implementation inferences from the captured UI, not 29CM-authored principles:

1. **Separate editorial and commerce density.** Large navigation and story titles coexist with compact product metadata.
2. **Use color sparingly.** Black and white structure the surface; `#ff4800` identifies current sale information.
3. **Let component geometry follow function.** Story items are square-edged, product items use small corners, and gallery controls are fully round.
4. **Require observed usage before promoting a resource.** Pretendard Variable is canonical because it loaded and appeared on elements; declared-only fonts are not.

### Avoid

- Don't restore `#ff0066` or `#ff003c` as the current discount accent.
- Don't render discount text as a filled pill; the captured treatment is transparent with 0px radius.
- Don't promote Campton or swiper-icons to a canonical text family without observed usage.
- Don't assert that 4px is the maximum radius.
- Don't invent mobile breakpoints, motion timings, semantic state colors, or focus treatments that were not captured.
- Don't combine editorial and product metadata into a single generic typography style.
- Don't replace `#dddddd` with the obsolete `#c4c4c4` outline claim.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary / foreground** — `#000000`: navigation, product text, headings, and primary ink.
- **Canvas** — `#ffffff`: page and control surfaces.
- **Muted** — `#5d5d5d`: repeatedly observed secondary copy; some instances render with alpha.
- **Secondary ink** — `#303033`: magazine and product-detail copy.
- **Tertiary ink** — `#474747`: catalog and product-detail supporting copy.
- **Border** — `#dddddd`: live outline-button and quantity-control border.
- **Accent** — `#ff4800`: current discount percentage text on BEST and product-detail surfaces.

The accent is rendered as text on a transparent background with 0px radius; it should not be reconstructed as the old `#ff0066` or `#ff003c` sale pill. Low-frequency page-specific values such as `#f4f4f4` were captured but remain evidence rather than canonical tokens because they were not sufficiently recurrent.

### Spacing

Measured reusable values: 2px, 4px, 8px, 16px, 24px, and 28px. They are not a claim that every page follows a strict mathematical scale.

### Shape

Captured radius vocabulary: 2px, 4px, 10px, and 9999px, plus square 0px surfaces. Fully round geometry is valid for image-carousel controls. The earlier rule that prohibited radii above 8px was incorrect.

### Elevation

| Treatment | Captured use |
|---|---|
| Flat, no shadow | Page, editorial story items, and product list items |
| `1px solid #dddddd` | Ghost outline action and quantity input |
| `rgba(0,0,0,0.5)` overlay | Product-gallery carousel control |
| Full-round geometry | 52px carousel controls |

The canonical shadow token is `none`. This does not imply that every transient or uninspected surface lacks elevation; it means no reusable box-shadow could be promoted from the five captured public routes.

### Motion

The evidence set records static default and pseudo-state snapshots only. Do not infer 150ms/250ms durations, cubic-bezier curves, image scaling, scroll reveals, stagger timing, toast dismissal, or reduced-motion substitutions from the visual captures. No motion token is promoted. Promote a motion duration, easing, animation name, transition, or reduced-motion behavior only after a future motion pass has recorded computed transition properties, animation names, durations, easing, and reduced-motion behavior per component.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No separate public typography standard was located; product-use comes from inspected first-party surfaces. |
| Live surface-use | Loaded `Pretendard Variable` appeared on 1,562 elements across five surfaces. |
| Official distributed asset | No 29CM product font asset is promoted from distribution evidence. |
| Declared-only | `campton` and `swiper-icons` had zero observed text usage. |
| Outside this capture | Native-app-only or campaign-specific families stay outside this capture until inspected. |

Specimen availability is separate from family truth and follows a loadable, licensed source.

- **Canonical family:** `Pretendard Variable` — loaded and used across all five inspected surfaces.
- **Declared-only:** `campton` and `swiper-icons` — zero observed element usage; do not use as canonical text families.
- **Fallbacks:** preserve the product's CSS fallback chain when implementing, but do not infer a separate display face from declarations alone.

### Type roles

| Role | Size | Weight | Line height | Captured surface |
|---|---:|---:|---:|---|
| Desktop editorial navigation | 40px | 700 | 60px (1.5) | Home |
| Magazine lead story title | 23px | 600 | 29.9px (1.3) | 29Magazine |
| Shared body | 16px | 400 | 24px (1.5) | Home and editorial |
| Product-grid brand | 11px | 700 | 15.0px (1.36) | BEST |
| Product-grid name | 12px | 400 | 16.3px (1.36) | BEST |
| Product price and discount | 13px | 700 | 18.2px (1.4) | BEST and product detail |
| Shipping and product flag | 10px | 500 | 12px (1.2) | BEST and product detail |

Use the large-to-small contrast intentionally: editorial navigation and stories establish discovery, while dense commerce metadata stays compact. Do not substitute the obsolete 30px/700 and 22px/700 hierarchy as if it were the current live system.

### Assets

- Storefront icon: `https://asset.29cm.co.kr/icon/apple-icon-144x144.png`

<!-- design-md:section components-states -->
## 4. Components & States

Pseudo-state evidence records visual variants available without executing state-changing commerce interactions. It does not prove every control implements every state. The collector found 68 component variants across the five routes: 40 button variants, 27 list-item variants, and one input variant. No safe click expansion was executed because the candidate interactions could mutate navigation or commerce state; pseudo-state capture still recorded disabled, focus, hover, and pressed variants where available.

Declared interactive components (Ghost Outline, Carousel Control, Quantity Input) close §4.4 applicability by control meaning. Uncaptured visual treatments are omitted; that omission is not `not-applicable`. Product Grid Item and Editorial Story Item have no state or interactive-kind evidence, so kind and a state-applicability map are omitted. State coverage is not complete.

### Verified treatments

| State | Verified treatment |
|---|---|
| Default | Captured for buttons, list items, and the product quantity input |
| Hover | Captured on eligible button controls |
| Focus | Captured on eligible button controls |
| Pressed | Captured on eligible button controls |
| Disabled | Captured on product-gallery controls |
| Sale | `#ff4800` text, transparent background, 0px radius |

Empty, loading, error, and success visual treatments were not captured on a dedicated public pass.

### Ghost Outline

- Role: editorial more action and brand-home action
- Kind: interactive
- Type: button
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #dddddd`
- Radius: 4px
- Padding: 16px 16px 16px 20px
- Height: 52px
- Font: 14px at weight 700
- Observed: default on home and magazine; a related product outline action exposed pressed state

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on home and magazine |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; no distinct focus treatment named for this component |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

Additional observed state: pressed on a related product outline CTA.

### Carousel Control

- Role: product-image previous and next controls
- Kind: interactive
- Type: button
- Background: `rgba(0,0,0,0.5)`
- Text: `#ffffff`
- Border: none observed
- Radius: 9999px
- Padding: 14px
- Height: 52px
- Font: 16px at weight 400
- Observed: disabled, focus, hover, and pressed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Product-gallery control |
| hover | applicable | Captured |
| focus-visible | applicable | Focus captured |
| disabled | applicable | Captured on product-gallery controls |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

Additional observed state: pressed.

### Product Grid Item

- Role: BEST result grid item
- Type: listItem
- Kind: omitted. The source names a listItem and records no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Radius: 4px
- Content: image, brand, name, `#ff4800` discount text, price, and shipping caption

### Editorial Story Item

- Role: 29Magazine and Showcase story/list entry
- Type: listItem
- Kind: omitted. The source names a listItem and records no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Radius: 0px
- Content: large editorial media with story metadata

### Quantity Input

- Role: product-detail quantity field
- Kind: interactive
- Type: input
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #dddddd`
- Radius: 0px
- Height: 36px
- Font: 16px at weight 500
- Observed: default captured; no visually distinct changed focus style was observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; no visually distinct changed focus style was observed |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Input control; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The observed surfaces alternate between wide editorial storytelling and dense commerce lists. Home and magazine reserve large blocks for imagery and navigation; BEST compresses repeated product metadata; product detail separates gallery controls from the purchase panel. Preserve those surface-specific densities instead of forcing one universal card grid.

Product and story lists should use their native list-item structure so a renderer can preserve image, label, title, price, and flag relationships.

The July 11 evidence set validates current desktop layouts and component geometry. It does not provide enough controlled multi-viewport samples to canonize breakpoints or mobile transformations.

- Preserve image aspect ratio and metadata order when adapting product and story list items.
- Keep the full 52px carousel control target when space permits; verify any compact mobile variant separately.
- Retain semantic list and button structure at every viewport.

Navigation collapse, mobile column counts, tablet gutters, and fixed-position help behavior are omitted.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The current site title identifies 29CM as “감도 깊은 취향 셀렉트샵 29CM.” Public navigation mixes Korean utility language with English editorial labels such as BEST, Showcase, and 29Magazine. Product grids use concise brand, item, discount, price, and shipping strings; editorial surfaces allow longer story titles.

These observations establish interface examples, not a complete official writing standard. They support one practical boundary: navigation and commerce metadata stay concise, while editorial stories may use longer, curatorial language. A current official voice-and-tone guide was not located, so this reference does not invent forbidden phrases, sentence endings, push copy, or error-copy rules.

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

- Navigation collapse, mobile column counts, tablet gutters, and fixed-position help behavior
- Dedicated public empty, loading, error, and success visual treatments
- Motion duration, easing curve, animation name, transition, and reduced-motion behavior — promote only after per-component computed capture
- Native-app-only or campaign-specific type families
- Official voice-and-tone guide, forbidden phrases, sentence endings, push copy, and error-copy rules
- Name origin, founding mythology, mission, ownership narrative, and unpublished brand-book structure
