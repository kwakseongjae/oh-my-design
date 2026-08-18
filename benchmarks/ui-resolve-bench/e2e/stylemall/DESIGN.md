# 스타일몰 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Photography occupies the field and chrome recedes. An edit shop names the house first, then the garment, then an honest price. Sale information is a fixed hierarchy — struck original, small rate, large sale price — never a celebration. Inventory, cart, and official brand marks are absent from the sample and stay absent on screen.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=7 lang=en -->
### Primary tasks

- Browse curated banners, ranking garments, lookbooks, and houses on the home field

- Filter the catalog by category and gender, and sort by ranking, price, or discount rate

- Inspect one garment: switch model and product cuts, choose a size, read reviews with height and purchased size

- Read a lookbook as a scroll narrative where cuts, copy, and joined garments arrive in order

- Open a house and see only that house's garments

- Meet an honest missing-record screen for an unknown id

- See unavailable inventory information after choosing a size
<!-- design-md:claim-end -->

### Design direction

- P1 Image occupies, chrome recedes: sacrifice decorative chrome, widget-kit radius, and competing type so photography and the three-line product hierarchy remain the only loud thing.

- P2 Honest sale hierarchy: sacrifice celebration red and fake urgency; original, rate, and sale price keep a fixed order that cannot invert.

- P3 Brand sits above the garment: sacrifice product-name-first marketplace cards; the house is the first line because this is an edit shop.

- Home grammar: visual-heavy field — full-bleed curation banners, internal ranking carousel of five with a synchronized 1–5 list (D-P1-7), lookbook cover preview, featured houses. Wide viewports add image columns.

- Products grammar: filterable catalog grid, 2/3/4 columns, custom sort listbox, distinct empty-filter surface. Clear-filters is ghost and appears only when filters or sort leave the default.

- Product detail grammar: master-detail — large cut stage left, facts/size/reviews in the right column, brand entry, then a full-width horizontal lookbook back-reference.

- Lookbook grammar: scroll narrative in a centered 960px well (D-P1-8) — cover, then three cuts with copy, products join in context. A single join is a horizontal media card. Reveal plays once.

- Brand grammar: one-liner plus follower count, then the house grid.

### Principles

- D-P1-1 Surface is no-radius ink plates with a hairline, not shadowed 12px tiles, so garment silhouettes are not rounded by chrome.

- D-P1-2 Color is warm paper and ink with one oxblood accent used only for sale rate, ranking numeral, and selection.

- D-P1-3 Type is one Hangul gothic family; display is weight and clamp size, never a second face or italic.

- D-P1-4 Section air uses 2.5rem / 4rem / 6rem and a viewport gutter clamp so images breathe.

- D-P1-5 Extra-wide strategy adds columns inside a left-aligned well; it does not stretch a single card or invent filler.

- D-P1-6 Motion is 120/200/320ms with one enter and one exit ease; only transform and opacity; reduced motion is required.

- D-P1-7 Wide ranking carousel fills the right pane with a 1–5 text list; the current rank is highlighted; a row selects that slide, and a second activation or the image opens the garment.

- D-P1-8 Lookbook narrative uses a centered ~960px image well (well-look); cut captions and join cards share that well; a single joined garment uses a horizontal media card.

- D-P2-1 Sale price is the largest number, original is struck, rate is a small accent label; the rate never outranks the price.

- D-P3-1 Card text is brand label, then name, then price. Ranking is a small overlay numeral, not a ribbon.

### Avoid

- Developer state switchers and demo radios

- Native unstyled form controls and native select popups

- Invented inventory, cart, checkout, or official brand marks

- Purple gradients, pure black or white bases, and untinted gray scales

- Implementation vocabulary in the interface

- More than one primary call to action on a view

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color-accent**: `#9a3a2a` — Oxblood signal for sale rate, ranking, and selection. Accent budget under 5 percent. D-P1-2 D-P2-1.
- **color-accent-ink**: `#faf7f3` — Ink on accent fills.
- **color-disabled**: `#8a8378` — Disabled ink; still visible on paper. C42.
- **color-focus**: `#1c1916` — Immediate focus-visible ring. Never fades in. G15 G19.
- **color-ink**: `#1c1916` — Warm charcoal body ink. D-P1-2. Not #000000.
- **color-ink-soft**: `#5c564e` — Muted label ink for brand lines and meta. D-P3-1.
- **color-inverse**: `#241f1b` — Dark footer and inverted bands. Dark sections flip text tokens. G41.
- **color-inverse-ink**: `#f4f0ea` — Ink on inverse surfaces.
- **color-inverse-muted**: `#c4b9ab` — Muted ink on inverse surfaces.
- **color-line**: `#d9d2c8` — Hairline on ink plates. D-P1-1.
- **color-paper**: `#f4f0ea` — Warm paper field. D-P1-2. Not #ffffff.
- **color-tile**: `#faf7f3` — Slightly lifted plate inside paper. D-P1-1.
- **color-tile-hover**: `#efe8de` — Hover surface change for plates and chips. Hover must change surface, not only translate.
- **duration-base**: `200ms` — Hover surface. D-P1-6.
- **duration-fast**: `120ms` — Pressed and focus-adjacent. D-P1-6.
- **duration-slow**: `320ms` — Lookbook reveal. D-P1-6.
- **ease-enter**: `cubic-bezier(0.2, 0, 0, 1)` — Enter ease. D-P1-6.
- **ease-exit**: `cubic-bezier(0.4, 0, 1, 1)` — Exit ease. D-P1-6.
- **font-family-hangul**: `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` — Single Hangul gothic stack for every role. Local fallbacks only. D-P1-3.
- **leading-body**: `1.7` — Hangul body leading 1.6-1.8.
- **leading-display**: `1.2` — Hangul display leading 1.15-1.3. No all-caps display.
- **radius-control**: `2px` — Slightly eased controls so they are not the same plate as cards.
- **radius-none**: `0px` — Ink plates and media. D-P1-1.
- **shadow-hover**: `0 12px 28px rgb(28 25 22 / 0.12)` — Hover elevation token. One hover effect stack.
- **shadow-rest**: `none` — Resting plates use a hairline, not a drop shadow. D-P1-1.
- **size-body**: `1rem` — Body size. Hangul measure.
- **size-display**: `clamp(2.05rem, 4vw, 3.25rem)` — Display at least 2 times body. D-P1-3.
- **size-label**: `0.75rem` — Brand and meta label. D-P3-1.
- **size-touch**: `44px` — Minimum hit target. C2.
- **space-1**: `4px` — Tightest internal gap, price sits this close to the title. D-P3-1.
- **space-2**: `8px` — Icon-text and card row gap. C6.
- **space-3**: `12px` — Card body padding step.
- **space-4**: `16px` — Control padding.
- **space-5**: `24px` — Card action separation.
- **space-6**: `32px` — Intra-section cluster.
- **space-gutter**: `clamp(1rem, 4vw, 2.5rem)` — Viewport gutter. D-P1-4.
- **space-section-l**: `6rem` — Large section air. D-P1-4.
- **space-section-m**: `4rem` — Medium section air. D-P1-4.
- **space-section-s**: `2.5rem` — Small section air. D-P1-4.
- **tracking-display**: `-0.01em` — Hangul display tracking floor. D-P1-3.
- **tracking-label**: `0.08em` — Wide tracking on labels. Hangul tracking never tighter than -0.01em.
- **weight-body**: `400` — Body weight.
- **weight-display**: `800` — Display weight. D-P1-3.
- **weight-strong**: `700` — Sale price and selected controls.
- **well-max**: `88rem` — Left-aligned product well. D-P1-5.
- **well-look**: `60rem` — Centered lookbook image well (~960px). D-P1-8 C32.

### Contrast pairs

- color-ink on color-paper: minimum 4.5:1
- color-ink-soft on color-paper: minimum 4.5:1
- color-ink on color-tile: minimum 4.5:1
- color-ink on color-tile-hover: minimum 4.5:1
- color-accent on color-paper: minimum 4.5:1
- color-accent-ink on color-accent: minimum 4.5:1
- color-inverse-ink on color-inverse: minimum 4.5:1
- color-inverse-muted on color-inverse: minimum 4.5:1
- color-disabled on color-paper: minimum 3:1
- color-focus on color-paper: minimum 3:1

### Reduced motion

Required.

### Foundation rules

- Foreground and background always travel as a named pair from this token set.

- Accent coverage stays under about 5 percent of any viewport.

- Hover changes surface color or hairline, not only transform.

- Focus-visible is an immediate outline using color-focus; mouse click never shows it.

- prefers-reduced-motion: reduce disables autoplay and lookbook transforms; content stays visible.

- Disabled controls use color-disabled, cursor not-allowed, and the native disabled attribute together.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and lookbook titles. Hangul weight 800, clamp size at least 2 times body, tracking -0.01em, leading 1.2, word-break keep-all, overflow-wrap anywhere. | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | clamp(2.05rem, 4vw, 3.25rem) | 800 | 1.2 | -0.01em |
| body | Product names, reviews, and supporting copy. Hangul leading 1.7, measure about 40 CJK characters in prose wells. | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 1rem | 400 | 1.7 | 0em |
| label | Brand line above the garment, ranking captions, filter names. Smaller, wide tracking, muted ink. | Pretendard Variable, Pretendard, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, sans-serif | 0.75rem | 600 | 1.4 | 0.08em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| hangul-system-stack | font | official | not-required | Local system Hangul gothic faces named in the Korean typography contract. No webfont network fetch. | Pretendard is a preferred name in the stack, not a downloaded file. |
| catalog-photographs | image | user-provided | not-required | public/assets 70 JPEG files referenced from src/data/data.json | Model and flat cuts, lookbook covers and cuts, curation banners. Explicit width and height to avoid layout shift. |

### Rules

- word-break: keep-all on Korean prose and headings; overflow-wrap: anywhere on display headings.

- Prices use a thousands separator and the won unit after the number.

- No italic display. Font-family count stays at one gothic stack.

- Provided images declare width and height; motion applies to the container, never the raw img.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: site-nav

**Semantics:** Single site navigation. Current route uses aria-current=page. Mobile uses a disclosure button. No chrome primary CTA.

- Anatomy: skip link, wordmark, primary links, mobile disclosure
- Variants: wide, collapsed
- States: default, hover, focus-visible, current
- Token references: color-paper, color-ink, color-focus, size-touch, font-family-hangul

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation links stay available on every route. |
| loading | not-applicable | Routing is local; nav does not wait on a network. |
| error | not-applicable | Nav has no validation contract. |
| success | not-applicable | Arrival is marked with aria-current, not a success state. |

### Component: product-card

**Semantics:** Whole-card link to a garment. Brand above name above price. No inner CTA. Ranking numeral overlays the media.

- Anatomy: media, ranking mark, brand label, name, price stack
- Variants: grid, carousel, join
- States: default, hover, focus-visible
- Token references: color-tile, color-tile-hover, color-ink, color-ink-soft, color-line, color-accent, space-1, space-2, space-3, radius-none

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Catalog cards that render are always openable. |
| loading | not-applicable | Catalog is local JSON; images use lazy loading, not a card loading state. |
| error | not-applicable | Broken records are omitted rather than shown as an error card. |
| success | not-applicable | Opening a card is navigation, not a success state. |

### Component: filter-chip

**Semantics:** Toggle filter. aria-pressed on the control. A live status summarizes the visible set.

- Anatomy: label, pressed mark
- Variants: category, gender
- States: default, hover, focus-visible, pressed
- Token references: color-tile, color-tile-hover, color-ink, color-accent, size-touch, radius-control

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every category and gender in the dataset remains choosable. |
| loading | not-applicable | Filtering is synchronous over local data. |
| error | not-applicable | An empty intersection is an empty collection state, not a chip error. |
| success | not-applicable | Pressed is the selected state; it is not a success banner. |

### Component: sort-listbox

**Semantics:** Custom select-only listbox for ranking, price, and discount rate. Trigger keeps DOM focus. Options use aria-activedescendant. Enter, Space, or Tab commit; Escape cancels.

- Anatomy: trigger, popup, options
- Variants: ranking, price, discount
- States: default, hover, focus-visible, expanded
- Token references: color-tile, color-ink, color-focus, size-touch, duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sort remains available whenever the catalog view is showing. |
| loading | not-applicable | Sort is synchronous. |
| error | not-applicable | Sort has no invalid value. |
| success | not-applicable | The trigger label is the committed value. |

### Component: cut-switch

**Semantics:** Model cut and product cut switch. Selected tab is aria-selected. Stage image has explicit dimensions.

- Anatomy: tab, stage
- Variants: model, flat
- States: default, hover, focus-visible, selected
- Token references: color-ink, color-line, color-accent, size-touch

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every garment in the dataset has both cuts. |
| loading | not-applicable | Cuts are local files. |
| error | not-applicable | Cut switching has no validation error. |
| success | not-applicable | Selected is the committed cut. |

### Component: size-option

**Semantics:** Size radio group. Checking a size reveals the unavailable inventory node. No add-to-cart.

- Anatomy: radio, size label
- Variants: alpha, numeric, free
- States: default, hover, focus-visible, checked, error
- Token references: color-tile, color-ink, color-accent, color-focus, size-touch

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The dataset does not mark sizes as out of stock, so every listed size stays choosable. |
| loading | not-applicable | Size choice is local. |
| error | applicable | A required-size reminder may associate with the group if the user activates the group without a choice. |
| success | not-applicable | Checked is the committed size; inventory success is not available. |

### Component: carousel-control

**Semantics:** Controls live inside the ranking carousel. Pause is required when autoplay runs. aria-pressed on pause.

- Anatomy: previous, next, pause
- Variants: playing, paused
- States: default, hover, focus-visible, pressed, disabled
- Token references: color-inverse, color-inverse-ink, size-touch, duration-base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable | Reduced-motion disables autoplay so pause can be disabled while previous and next remain. |
| loading | not-applicable | Slides are local ranking items. |
| error | not-applicable | Carousel has no validation error. |
| success | not-applicable | Pause is a toggle, not a success state. |

### Component: price-stack

**Semantics:** Honest sale hierarchy. Sale price is the largest ink number. Original is struck muted ink. Rate is a small accent label. Full-price items omit rate and strike.

- Anatomy: sale price, original price, rate
- Variants: sale, full
- States: default
- Token references: color-ink, color-ink-soft, color-accent, weight-strong, size-body

- Interaction kind: non-interactive
- Interaction reason: Price is computed display from catalog fields. It is not a control.

### Component: ranking-mark

**Semantics:** Small ranking numeral over the media. Not a ribbon badge.

- Anatomy: numeral
- Variants: overlay
- States: default
- Token references: color-accent, color-accent-ink, size-label

- Interaction kind: non-interactive
- Interaction reason: Ranking is a catalog fact painted on the card.

### Component: review-panel

**Semantics:** Rating distribution plus a list that always shows height and purchased size. Sample nicknames stay as given.

- Anatomy: average, distribution, list, height, purchased size
- Variants: detail
- States: default
- Token references: color-ink, color-line, color-accent, space-2

- Interaction kind: non-interactive
- Interaction reason: Reviews are read-only sample records.

### Component: empty-filter

**Semantics:** Distinct empty surface when category and gender yield no garments. Not a muted paragraph inside a card.

- Anatomy: title, explanation, clear action
- Variants: products
- States: default
- Token references: color-tile, color-ink, color-line

- Interaction kind: non-interactive
- Interaction reason: The empty surface is a result display. The clear action is a separate local button.

### Component: missing-record

**Semantics:** Honest missing id screen. Names the missing record type and id. Does not invent a substitute garment.

- Anatomy: title, explanation, back link
- Variants: product, lookbook, brand
- States: default, error
- Token references: color-paper, color-ink

- Interaction kind: non-interactive
- Interaction reason: Error display for an unknown route id. It is not a focusable form.

### Component: unavailable-inventory

**Semantics:** Visible unavailable-information node that names inventory as the withheld category after a size is chosen.

- Anatomy: status text, named absence
- Variants: size
- States: default
- Token references: color-tile, color-ink-soft, color-line

- Interaction kind: non-interactive
- Interaction reason: This is an honesty node, not a control. data-state=unavailable-information lives on this node.

### Component: lookbook-cut

**Semantics:** Scroll narrative block. Reveal plays once. Reduced motion shows the cut without transform.

- Anatomy: figure, copy, joined products
- Variants: cover, cut
- States: default
- Token references: color-paper, color-ink, size-display, duration-slow, ease-enter

- Interaction kind: non-interactive
- Interaction reason: Cuts are narrative figures. Joined product cards are separate interactive links.

### Component: footer-colophon

**Semantics:** One quiet sample-data disclosure line. Inverse tokens on the dark footer.

- Anatomy: disclosure line
- Variants: site
- States: default
- Token references: color-inverse, color-inverse-ink, color-inverse-muted

- Interaction kind: non-interactive
- Interaction reason: Footer honesty line is not a control.

### Rules

- Exactly one visible primary CTA in chrome or hero, never both. Item controls are data-cta=local.

- Interactive hit targets are at least 44 by 44 CSS pixels on touch viewports.

- Custom listbox follows APG select-only combobox: focus stays on the trigger.

- Whole-card links do not also contain an inner CTA.

- Empty and missing states are distinct surfaces, not muted paragraphs.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Document overflow-x is clip. scrollWidth must not exceed clientWidth at 320, 390, 1440, and 200 percent zoom.

- Product grid tracks are minmax(0, 1fr) at 2 columns under 720px, 3 columns under 1100px, 4 columns above.

- Display headings use overflow-wrap anywhere and min-width 0.

- Primary actions stay inside the viewport. Touch controls stay unclipped.

- Home wide strategy adds image columns; it does not leave 40 percent of the viewport empty. Ranking carousel right pane is the 1–5 list (D-P1-7).

- Lookbook extra-wide strategy is a centered editorial well (D-P1-8), not a split that empties the right half.

- Lookbook reveal is one-shot. Reduced motion skips transform and keeps copy visible.

- Route changes scroll to top, move focus to the new h1 without a visual ring on that non-interactive heading, and update document.title.

### Platform: web

- React and Vite single-page app with one shared stylesheet.
- Skip link targets #main. Exactly one main and one h1 per view.
- Nav disclosure collapses below 720px. Hit target remains 44px.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- User language only. Speak as a shop, never as a dataset.

- Short factual Korean. Read aloud; drop anything that sounds like a dashboard.

- Name actions with the shop's verbs: 상품 보기, 사이즈 선택, 정렬, 일시정지.

- One footer disclosure that the catalog is a fictional sample. Repeat near money on the detail page.

### Terminology

| Term | Preferred form |
|---|---|
| brand | 브랜드 |
| curation | 기획전 |
| discount rate | 할인율 |
| inventory | 재고 |
| lookbook | 룩북 |
| original price | 정가 |
| product | 상품 |
| ranking | 랭킹 |
| review | 후기 |
| sale price | 세일가 |
| size | 사이즈 |

### Locale: ko (supported)

- html lang is ko on every route.
- Hangul typography contract applies to every role.
- Won amounts use a thousands separator and the 원 suffix.
- No second locale is claimed.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
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

### Project priority details

1. Prompt facts for pages, journeys, and honesty.

2. Repository facts in src/data/data.json and public/assets.

3. This system contract.

4. No verified external brand book.

### Additional change rules

- New tokens require a D-id in the decision table before use.

- Do not invent inventory, cart, or official marks.

### Decision provenance

- identity.name — prompt-fact; value: "스타일몰"; evidence: .benchmark/PROMPT.md, src/data/data.json
- identity.kind — agent-proposed-greenfield-decision; value: "project-system"; evidence: .omd/runs/stylemall/design-system-decision.json
- foundations.reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- foundations.tokens.color-paper.$value — agent-proposed-greenfield-decision; value: "#f4f0ea"; evidence: .omd/runs/stylemall/council/design-system/result.json, .omd/runs/stylemall/system/proposal.md
- foundations.tokens.color-accent.$value — agent-proposed-greenfield-decision; value: "#9a3a2a"; evidence: .omd/runs/stylemall/council/design-system/result.json
- layout_platforms.minimum_width_px — prompt-fact; value: 320; evidence: .agents/skills/omd-autopilot/references/visual-quality-contract.md
- content_locales.locales.0.locale — prompt-fact; value: "ko"; evidence: .benchmark/PROMPT.md, src/data/data.json
