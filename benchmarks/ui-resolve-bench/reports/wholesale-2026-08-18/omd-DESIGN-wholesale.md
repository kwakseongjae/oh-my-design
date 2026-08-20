# Terra & Tide Order Console Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

An internal operations console for Terra & Tide wholesale staff. Operators scan order volume by status, open cases, and low-stock products, then filter and sort the live order table and inspect one order with lines joined to product names. The workspace is fictional sample data. Revenue figures and carrier names are not in the dataset and stay omitted.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=7 lang=en -->
### Primary tasks

- Read overview aggregates for order counts by status, open cases, and low-stock products

- Filter the order table by status

- Sort the order table by date placed

- Open any order row to its detail

- Inspect one order with joined product lines, customer, status, and note

- Handle an unknown order id with an honest error state

- Browse the catalog with provided images and visible stock states
<!-- design-md:claim-end -->

### Design direction

- Hairline-rule bands on warm paper, no-radius ink plates, and one tide-teal accent used as a signal.

- Information density first: tabular figures, glanceable status tokens, and a short operational readout.

- Current, confident product aesthetic with restrained compositor-only motion behind prefers-reduced-motion.

### Principles

- Every number and row is computed at runtime from window.TERRA_TIDE_DATA.

- Status and stock are readable at a glance through named token pairs.

- Honesty beats completeness: label sample data and name withheld categories where an operator would look.

### Avoid

- Invented revenue figures or carrier names

- Copying dataset records into markup by hand

- Developer state switchers

- Unstyled native form controls

- Sticky duplicate primary actions

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#0F6E6B` — Single tide-teal accent
- **color.accent-ink**: `#F3EDE3` — Ink on accent fill
- **color.danger-fill**: `#F3D6D0` — Error region fill
- **color.danger-ink**: `#7A2418` — Error region ink
- **color.ink**: `#1A2421` — Primary tide ink
- **color.ink-muted**: `#5C6662` — Label and meta ink
- **color.ink-soft**: `#3D4743` — Secondary body ink
- **color.paper**: `#F3EDE3` — Warm paper canvas
- **color.paper-raised**: `#EBE4D6` — Inset band on paper
- **color.rule**: `#C9C0B0` — Hairline rule
- **color.status-cancelled-fill**: `#E1DCD3` — Cancelled status fill
- **color.status-cancelled-ink**: `#3F403C` — Cancelled status ink
- **color.status-delayed-fill**: `#F3D6D0` — Delayed status fill
- **color.status-delayed-ink**: `#7A2418` — Delayed status ink
- **color.status-packed-fill**: `#D5E3F4` — Packed status fill
- **color.status-packed-ink**: `#163A6B` — Packed status ink
- **color.status-pending-fill**: `#F4E3C4` — Pending status fill
- **color.status-pending-ink**: `#6B4510` — Pending status ink
- **color.status-shipped-fill**: `#D3E8DA` — Shipped status fill
- **color.status-shipped-ink**: `#1A4D32` — Shipped status ink
- **color.stock-in-fill**: `#D3E8DA` — In-stock fill
- **color.stock-in-ink**: `#1A4D32` — In-stock ink
- **color.stock-low-fill**: `#F3D6D0` — Low-stock fill
- **color.stock-low-ink**: `#7A2418` — Low-stock ink
- **color.stock-out-fill**: `#E1DCD3` — Out-of-stock fill
- **color.stock-out-ink**: `#3F403C` — Out-of-stock ink
- **color.tint-1**: `#E7DFD0` — Neutral tint step 1
- **color.tint-2**: `#D9D0BF` — Neutral tint step 2
- **elevation.hover**: `1` — Hover uses tint shift, not drop shadow
- **elevation.rest**: `0` — Hairline rest, no shadow
- **motion.duration-base**: `200ms` — Hover and fade
- **motion.duration-fast**: `120ms` — Press and focus
- **motion.duration-slow**: `320ms` — Section entrance
- **motion.easing-enter**: `0.22 1 0.36 1` — Enter curve
- **motion.easing-exit**: `0.4 0 1 1` — Exit curve
- **radius.none**: `0px` — No-radius plates
- **space.1**: `4px` — Hairline inset
- **space.2**: `8px` — Tight control gap
- **space.3**: `12px` — Compact row gap
- **space.4**: `16px` — Control padding
- **space.5**: `24px` — Cluster gap
- **space.gutter**: `clamp(1rem, 4vw, 2.5rem)` — Viewport gutter
- **space.section-l**: `6rem` — Large section air
- **space.section-m**: `4rem` — Medium section air
- **space.section-s**: `2.5rem` — Small section air
- **type.body-family**: `Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif` — Body stack
- **type.body-size**: `1rem` — Body size
- **type.display-family**: `Iowan Old Style, Palatino Linotype, Palatino, Times New Roman, serif` — Display stack
- **type.display-size**: `clamp(2.25rem, 4vw, 3.5rem)` — Display step at least 2x body
- **type.label-size**: `0.75rem` — Label size

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.ink-soft on color.paper: minimum 4.5:1
- color.ink-muted on color.paper: minimum 4.5:1
- color.ink on color.paper-raised: minimum 4.5:1
- color.ink on color.tint-1: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.accent on color.paper: minimum 4.5:1
- color.status-pending-ink on color.status-pending-fill: minimum 4.5:1
- color.status-packed-ink on color.status-packed-fill: minimum 4.5:1
- color.status-shipped-ink on color.status-shipped-fill: minimum 4.5:1
- color.status-delayed-ink on color.status-delayed-fill: minimum 4.5:1
- color.status-cancelled-ink on color.status-cancelled-fill: minimum 4.5:1
- color.stock-in-ink on color.stock-in-fill: minimum 4.5:1
- color.stock-low-ink on color.stock-low-fill: minimum 4.5:1
- color.stock-out-ink on color.stock-out-fill: minimum 4.5:1
- color.danger-ink on color.danger-fill: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Use hairline-rule bands and no-radius plates. Do not mix shadowed tiles or rounded widget-kit cards.

- Accent is a 2px rule, a selected mark, or one inverted primary fill. Keep accent coverage under about 5 percent of any viewport.

- Every component color reads a color.* token. Do not invent inline hex in page CSS.

- Animate only transform and opacity, and only with motion.* tokens.

- When prefers-reduced-motion is reduce, disable entrance and hover motion and keep focus outlines instant.

- Touch targets are at least 44 by 44 CSS pixels except inline prose links.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and the wordmark | Iowan Old Style, Palatino Linotype, Palatino, Times New Roman, serif | clamp(2.25rem, 4vw, 3.5rem) | 700 | 1.05 | -0.03em |
| body | Operational prose and table cells | Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif | 1rem | 400 | 1.5 | 0 |
| label | Eyebrows, column heads, and status captions | Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif | 0.75rem | 600 | 1.3 | 0.12em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| display-stack | font | project-owned | not-required | Local Iowan Old Style / Palatino / Times New Roman stack | No webfont files are shipped. |
| body-stack | font | project-owned | not-required | Local Avenir Next / Segoe UI / Helvetica Neue stack | No webfont files are shipped. |
| catalog-product-photos | image | user-provided | not-required | assets/ product photographs listed in assets/assets-manifest.json and referenced by data/data.js | Render with explicit width and height. Apply motion to the figure container, never the raw image. |

### Rules

- Display headings use overflow-wrap anywhere and min-width 0.

- Body measure for prose stays between 45 and 75 characters. Tables may exceed that measure.

- Numeric order counts and case totals use tabular lining figures.

- Product images keep authored width and height to prevent layout shift.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control. Moves keyboard focus to #main. Never targets the primary CTA.

- Anatomy: anchor, visible-on-focus label
- Variants: default
- States: default, hover, focus-visible
- Token references: color.accent, color.accent-ink, space.4, type.body-family

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Skip to main content stays available. |
| loading | not-applicable | The skip link does not wait on data. |
| error | not-applicable | The skip link has no validation. |
| success | not-applicable | Focus movement is not a success state. |

### Component: app-nav

**Semantics:** Exactly one navigation landmark, identical links on every page, aria-current=page on the active destination.

- Anatomy: landmark, wordmark, page links, current-page mark
- Variants: overview, orders, order-detail, products
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.accent, type.display-family, type.label-size

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation destinations stay available on every page. |
| loading | not-applicable | Route changes are full page loads, not in-control progress. |
| error | not-applicable | Broken destinations are not a nav-control error state. |
| success | not-applicable | The current page uses aria-current, not a success state. |

### Component: nav-disclosure

**Semantics:** Compact-viewport disclosure for the same nav link set. aria-expanded reflects open state. Controls are at least 44px.

- Anatomy: button, expanded panel
- Variants: collapsed, expanded
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, space.4

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The navigation disclosure stays operable on compact viewports. |
| loading | not-applicable | The disclosure does not fetch. |
| error | not-applicable | The disclosure has no validation. |
| success | not-applicable | Expanded or collapsed is aria-expanded, not success. |

### Component: button-primary

**Semantics:** Exactly one visible primary CTA per page, marked data-cta=primary. Per-item actions use data-cta=local and a different verb.

- Anatomy: anchor or button, label
- Variants: chrome
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.accent-ink, space.4, motion.duration-fast, type.body-family

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | The primary action is a same-origin navigation, not an async submit. |
| error | not-applicable | Validation is not attached to the chrome primary action. |
| success | not-applicable | Arrival on the destination page is the outcome, not a button success state. |

### Component: status-filter

**Semantics:** Restyled native select that filters the order table by status. Selected option is both programmatic and visible. A role=status summary names the active filter.

- Anatomy: label, native select, custom mark, live summary
- Variants: all, pending, packed, shipped, delayed, cancelled
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.paper, color.rule, color.accent, space.4

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Filtering is synchronous against the already-bound dataset. |
| error | not-applicable | A zero-row filter is a collection empty state, not a control error. |
| success | not-applicable | The live result summary is a status region, not a success state on the select. |

### Component: sort-control

**Semantics:** Toggles date-placed sort. aria-pressed reflects newest-first. Visible label names the committed direction.

- Anatomy: button, direction label
- Variants: newest-first, oldest-first
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, space.4

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Sort remains available whenever the table has a bound dataset. |
| loading | not-applicable | Sorting is synchronous against the already-bound dataset. |
| error | not-applicable | Sort does not validate input. |
| success | not-applicable | Direction is exposed with aria-pressed, not a success state. |

### Component: find-control

**Semantics:** Finds orders by id or customer name against the bound dataset so an empty filter result is a real interaction.

- Anatomy: label, text input, clear affordance
- Variants: idle, query
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.paper, color.rule, space.4

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Find is synchronous against the already-bound dataset. |
| error | not-applicable | No matching rows is a collection empty state, not a field error. |
| success | not-applicable | The live result count is a status region, not a success state on the field. |

### Component: order-row

**Semantics:** Each bound order is a focusable row that opens order-detail.html with that order id. Local CTA verb is Open order.

- Anatomy: row, status badge, local open control
- Variants: pending, packed, shipped, delayed, cancelled
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.accent

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Every bound order row remains openable. |
| loading | not-applicable | Row activation is a same-origin navigation. |
| error | not-applicable | Unknown ids are handled on the detail route, not on the row control. |
| success | not-applicable | Opening a detail is a navigation, not a row success state. |

### Component: status-badge

**Semantics:** Readable-at-a-glance order status using named token pairs.

- Anatomy: text, fill
- Variants: pending, packed, shipped, delayed, cancelled
- States: default
- Token references: color.status-pending-ink, color.status-pending-fill, color.status-packed-ink, color.status-packed-fill, color.status-shipped-ink, color.status-shipped-fill, color.status-delayed-ink, color.status-delayed-fill, color.status-cancelled-ink, color.status-cancelled-fill, type.label-size

- Interaction kind: non-interactive
- Interaction reason: Status is a computed display of a record field, not a control.

### Component: stock-badge

**Semantics:** Visible stock state and case count from the catalog record.

- Anatomy: text, fill, case count
- Variants: in-stock, low-stock, out-of-stock
- States: default
- Token references: color.stock-in-ink, color.stock-in-fill, color.stock-low-ink, color.stock-low-fill, color.stock-out-ink, color.stock-out-fill

- Interaction kind: non-interactive
- Interaction reason: Stock state is a computed display of catalog fields, not a control.

### Component: sample-banner

**Semantics:** Visible accessible copy that the workspace is fictional sample data.

- Anatomy: region, disclosure sentence
- Variants: workspace
- States: default
- Token references: color.ink, color.paper-raised, color.rule, type.label-size

- Interaction kind: non-interactive
- Interaction reason: Honesty banner is static sample-data disclosure, not a control.

### Component: unavailable-information

**Semantics:** Explicit nodes that name withheld revenue figures and carrier names. A prose disclaimer alone does not satisfy this component.

- Anatomy: named node, withheld category
- Variants: revenue, carrier
- States: default
- Token references: color.ink-soft, color.paper-raised, color.rule

- Interaction kind: non-interactive
- Interaction reason: Unavailable-information nodes are honesty displays, not controls.

### Component: metric-band

**Semantics:** Overview aggregates computed from the dataset. data-state=loading until the dataset binds.

- Anatomy: label, computed value, supporting note
- Variants: status-count, open-cases, low-stock
- States: default, loading
- Token references: color.ink, color.paper, color.rule, type.display-family, type.label-size

- Interaction kind: non-interactive
- Interaction reason: Metrics are computed readouts. Loading is a region state, not a focusable control.

### Component: product-figure

**Semantics:** Provided product photograph with explicit width and height. Decorative crop frames are aria-hidden when needed.

- Anatomy: image, caption, stock badge
- Variants: catalog
- States: default
- Token references: color.paper, color.rule, space.4

- Interaction kind: non-interactive
- Interaction reason: Catalog figures are media with explicit dimensions, not controls.

### Component: empty-collection

**Semantics:** Shown when the live status or find filter matches no orders. Names the active filter.

- Anatomy: region, explanation, active filter echo
- Variants: filter-empty
- States: default
- Token references: color.ink, color.paper-raised, color.rule

- Interaction kind: non-interactive
- Interaction reason: Empty is a collection outcome, not a control.

### Component: missing-order

**Semantics:** Honest error when the requested order id is absent. role=alert names the requested id.

- Anatomy: alert, requested id, recovery link
- Variants: missing-id, unrecognized-id
- States: default, error
- Token references: color.danger-ink, color.danger-fill, color.rule

- Interaction kind: non-interactive
- Interaction reason: A missing or unrecognized order id is an error display of an absent record, not a focusable widget.

### Component: loading-region

**Semantics:** Initial data-state=loading on main content until window.TERRA_TIDE_DATA is bound.

- Anatomy: status, placeholder bands
- Variants: overview, orders, detail, catalog
- States: default, loading
- Token references: color.tint-1, color.rule, motion.duration-base

- Interaction kind: non-interactive
- Interaction reason: Loading is a page-region wait for the dataset to bind, not a control.

### Rules

- Interactive components implement hover as a surface change, not only a translate.

- Focus uses an instant outline reserved slot. Do not fade the focus ring.

- Native inputs stay in the accessibility tree under restyled marks.

- Never hide focusable descendants with aria-hidden alone.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Document scrollWidth must not exceed clientWidth at 320, 390, and 1440 CSS pixels.

- Primary action stays fully inside the viewport.

- Nav and CTA labels do not wrap to two lines.

- Catalog grids use authored 1/2/3 column breakpoints, never auto-fit.

- Overflow-x is clip, never hidden, on the document root.

- 200 percent reflow keeps task order and does not clip controls.

### Platform: web

- Static HTML, CSS, and JS with no build step and no external network.
- Shared stylesheet owns tokens and components. Pages add only page layout.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Direct, operational, and specific. Prefer nouns from the dataset: order, case, customer, stock.

- Name withheld categories in the place an operator would expect the figure.

- Do not invent revenue, carriers, testimonials, or brand claims.

### Terminology

| Term | Preferred form |
|---|---|
| case | case unit from the catalog case_size and line cases fields |
| order | wholesale order identified by the dataset id |
| status | order status token: pending, packed, shipped, delayed, cancelled |
| stock | catalog stock_status: in-stock, low-stock, out-of-stock |

### Locale: en (supported)

- html lang is en on every page.
- Dates stay in the dataset ISO placed_on form or a locale-neutral operational format derived from that field.

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

1. Direct user instructions for the requested console.

2. Repository facts from data/data.js, data/data.json, and assets/.

3. This system contract.

4. Reference inspiration, none used.

### Additional change rules

- Record, review, and validate changes before adoption.

- Do not invent revenue figures or carrier names if later data still omits them.

### Decision provenance

- identity.name — prompt-fact; value: "Terra & Tide Order Console"; evidence: .benchmark/PROMPT.md, task.md
- identity.kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md, task.md
- identity.scope — prompt-fact; value: "Four-page internal order console for the fictional specialty-grocery wholesaler Terra & Tide: overview, orders table, order detail, and product catalog."; evidence: .benchmark/PROMPT.md, task.md
- foundations.reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- foundations.tokens.color.paper — agent-proposed-greenfield-decision; value: {"$description":"Warm paper canvas","$type":"color","$value":"#F3EDE3"}; evidence: .omd/runs/wholesale-console/council/design-system/result.json
- foundations.tokens.color.ink — agent-proposed-greenfield-decision; value: {"$description":"Primary tide ink","$type":"color","$value":"#1A2421"}; evidence: .omd/runs/wholesale-console/council/design-system/result.json
- foundations.tokens.color.accent — agent-proposed-greenfield-decision; value: {"$description":"Single tide-teal accent","$type":"color","$value":"#0F6E6B"}; evidence: .omd/runs/wholesale-console/council/design-system/result.json
- layout_platforms.minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/wholesale-console/council/interaction/result.json
- experience.revenue_reporting — unresolved; evidence: .benchmark/PROMPT.md, data/data.js
- experience.carrier_assignment — unresolved; evidence: .benchmark/PROMPT.md, data/data.js
