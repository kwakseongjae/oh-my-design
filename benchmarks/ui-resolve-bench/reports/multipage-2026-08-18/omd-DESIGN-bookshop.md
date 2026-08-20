# Quarto Cup Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

A calm editorial site that lets a visitor browse the shop, filter sample events, inspect one event, and review the space while keeping unpublished hours, prices, and street address honestly absent.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Browse the bookstore-cafe home

- Filter the sample event list

- Inspect one sample event

- Review the visit and space pages

- Read unpublished hours, prices, and street address where those facts would appear
<!-- design-md:claim-end -->

### Design direction

- Modern editorial hairline-rule bands, not a widget kit

- Warm paper and ink with one terracotta accent used as a small signal

- One shared stylesheet owns tokens and components; pages add only route layout

- Restrained compositor-only motion behind prefers-reduced-motion

### Principles

- Every page uses the same navigation, heading, body, and primary-action styles

- Sample events and people are labeled as sample content

- Honesty nodes sit where a visitor would look for withheld facts

- States come from real product interactions, never a developer switcher

### Avoid

- Invented opening hours, prices, or a street address

- Network fonts, build tools, or third-party scripts

- Sticky duplicate primary calls to action

- Accent used as a large fill area

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#8E3A28` — Terracotta signal
- **color.accent-ink**: `#F3EBE0` — Ink on accent chip
- **color.disabled**: `#4F4841` — Disabled ink
- **color.disabled-fill**: `#E6DDD1` — Disabled fill
- **color.error**: `#8A2F22` — Error ink
- **color.error-tint**: `#F4E4DE` — Error wash
- **color.focus**: `#8E3A28` — Focus ring
- **color.ink**: `#2A231D` — Primary ink
- **color.ink-muted**: `#5E554C` — Secondary ink for lede and meta
- **color.paper**: `#F3EBE0` — Warm paper background
- **color.plate**: `#2A231D` — Inverted ink plate
- **color.plate-ink**: `#F3EBE0` — Ink on inverted plate
- **color.rule**: `#D4CBBF` — Hairline rule
- **color.success**: `#2C5A38` — Success ink
- **color.success-tint**: `#DCE8DE` — Success wash
- **color.tint**: `#E8DFD3` — Tinted paper band
- **color.tint-deep**: `#CFC4B6` — Deeper tint for plates
- **elevation.hover**: `none`
- **elevation.rest**: `none`
- **motion.duration-base**: `200ms`
- **motion.duration-fast**: `120ms`
- **motion.duration-slow**: `320ms`
- **motion.easing-enter**: `cubic-bezier(0.22, 1, 0.36, 1)`
- **motion.easing-exit**: `cubic-bezier(0.4, 0, 1, 1)`
- **radius.none**: `0`
- **space.2xs**: `0.25rem`
- **space.gutter**: `clamp(1rem, 4vw, 2.5rem)`
- **space.lg**: `1.5rem`
- **space.md**: `1rem`
- **space.section**: `4rem`
- **space.section-lg**: `6rem`
- **space.section-sm**: `2.5rem`
- **space.sm**: `0.75rem`
- **space.xl**: `2rem`
- **space.xs**: `0.5rem`
- **type.body-family**: `Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif`
- **type.body-size**: `1.0625rem`
- **type.display-family**: `Iowan Old Style, Palatino Linotype, Palatino, Times New Roman, serif`
- **type.display-size**: `clamp(2.5rem, 6vw, 4.75rem)`

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.ink-muted on color.paper: minimum 4.5:1
- color.ink on color.tint: minimum 4.5:1
- color.plate-ink on color.plate: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.error on color.paper: minimum 4.5:1
- color.success on color.paper: minimum 4.5:1
- color.disabled on color.disabled-fill: minimum 3:1
- color.accent on color.paper: minimum 3:1
- color.focus on color.paper: minimum 3:1

### Reduced motion

Required.

### Foundation rules

- Surface genre is hairline-rule bands: no-radius plates, 1px rules, and occasional inverted ink bands.

- Accent occupies at most about 5 percent of any viewport and never fills a card and a primary action together.

- Color tokens are stored as hex for contrast proof; product CSS projects the same pairs as OKLCH custom properties.

- Motion may change only transform and opacity, using the duration and easing tokens.

- Every animation has a non-animated equivalent under prefers-reduced-motion.

- Do not animate layout properties or use transition:all.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page titles and the wordmark | Iowan Old Style, Palatino Linotype, Palatino, Times New Roman, serif | clamp(2.5rem, 6vw, 4.75rem) | 700 | 1.05 | -0.03em |
| heading | Section titles shared across all pages | Iowan Old Style, Palatino Linotype, Palatino, Times New Roman, serif | clamp(1.5rem, 3vw, 2.125rem) | 700 | 1.15 | -0.02em |
| body | Readable body copy on every page | Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif | 1.0625rem | 400 | 1.55 | 0 |
| label | Eyebrows, filter names, and meta rows | Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif | 0.75rem | 600 | 1.3 | 0.14em |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| display-stack | font | project-owned | not-required | Local operating-system serif stack; no webfont download | Used only as a family list in CSS |
| body-stack | font | project-owned | not-required | Local operating-system sans stack; no webfont download |  |
| hero-shop | image | user-provided | not-required | assets/hero-shop.jpg | Explicit dimensions 1280 by 720 |
| space-cafe | image | user-provided | not-required | assets/space-cafe.jpg | Explicit dimensions 864 by 1152 |
| space-shelves | image | user-provided | not-required | assets/space-shelves.jpg | Explicit dimensions 1248 by 832 |
| event-reading | image | user-provided | not-required | assets/event-reading.jpg | Explicit dimensions 1248 by 832 |
| event-workshop | image | user-provided | not-required | assets/event-workshop.jpg | Explicit dimensions 1248 by 832 |
| event-club | image | user-provided | not-required | assets/event-club.jpg | Explicit dimensions 1248 by 832 |

### Rules

- Display and body are a pair; display is at least twice body size at the large clamp.

- Label role is smaller, uppercase, wide tracking, and muted.

- No italic display type. Body measure stays between 45 and 75 characters.

- Provided images keep width and height attributes and are never the motion target; motion applies to their container.

- Decorative images use empty alt or aria-hidden; informative images have a short factual alt.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control; moves keyboard focus to #main, never to the primary CTA.

- Anatomy: target hash, visible label
- Variants: to-main
- States: default, hover, focus-visible
- Token references: color.plate, color.plate-ink, color.focus, motion.duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The skip link remains available whenever the page is shown. |
| loading | not-applicable | Skip navigation is immediate. |
| error | not-applicable | Skip navigation has no validation. |
| success | not-applicable | Skip navigation has no completion record. |

### Component: site-nav

**Semantics:** Single site navigation rendered identically on every page, with aria-current on the active page link and a disclosure that collapses on narrow viewports.

- Anatomy: wordmark, disclosure button, link list, current marker
- Variants: home, events, event-detail, visit
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.accent, type.display-family

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Current page is marked with aria-current, not disabled. |
| loading | not-applicable | Navigation is static HTML. |
| error | not-applicable | Navigation has no submit. |
| success | not-applicable | Navigation has no completion record. |

### Component: primary-action

**Semantics:** Exactly one visible primary call to action per page, marked data-cta=primary. Form submit uses data-cta=submit and must not reuse the primary verb.

- Anatomy: label, optional trailing mark
- Variants: link, button
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.plate, color.plate-ink, color.focus, motion.duration-base, motion.easing-enter

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | applicable |  |
| error | applicable |  |
| success | applicable |  |

### Component: event-filter

**Semantics:** Filters the sample event collection. The selected option is both programmatic and visible. A role=status summary names the active filter.

- Anatomy: fieldset legend, option buttons, live summary
- Variants: all, reading, workshop, club, matinee
- States: default, hover, focus-visible, disabled, loading
- Token references: color.ink, color.paper, color.rule, color.accent, color.disabled, color.disabled-fill

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | applicable |  |
| error | not-applicable | Filtering a local sample list cannot fail a server contract. |
| success | not-applicable | The live summary is the outcome; there is no separate success chrome. |

### Component: event-card

**Semantics:** Interactive sample-event preview that links to event-detail.html for one record. Local action uses data-cta=local and never repeats the primary verb.

- Anatomy: sample badge, event id, title, type label, figure, local action
- Variants: reading, workshop, club
- States: default, hover, focus-visible
- Token references: color.ink, color.paper, color.rule, color.tint

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Cards in the baseline sample set remain openable. |
| loading | not-applicable | Navigation to detail is a page load. |
| error | not-applicable | Missing records are handled on the detail route. |
| success | not-applicable | Opening a card is not a completion record. |

### Component: event-interest-form

**Semantics:** Sample interest form on the event detail. Validation errors move focus to the failing field and associate a role=alert. Success names the event id and remains reflected on the record.

- Anatomy: name field, hint, alert, submit, status
- Variants: sample-hold
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.ink, color.paper, color.error, color.error-tint, color.success, color.success-tint, color.disabled, color.disabled-fill

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | applicable |  |
| error | applicable |  |
| success | applicable |  |

### Component: display-heading

**Semantics:** Shared display and heading styles used identically on all four pages. Exactly one h1 per rendered view.

- Anatomy: eyebrow, title
- States: default
- Token references: color.ink, type.display-family, type.display-size

- Interaction kind: non-interactive
- Interaction reason: Headings are typographic structure, not controls.

### Component: body-copy

**Semantics:** Shared body text used identically on all four pages.

- Anatomy: paragraph
- States: default
- Token references: color.ink, color.ink-muted, type.body-family, type.body-size

- Interaction kind: non-interactive
- Interaction reason: Body copy is not a control.

### Component: figure-image

**Semantics:** Provided asset images with explicit width and height. Motion applies to the figure container only.

- Anatomy: image, caption
- States: default
- Token references: color.rule, space.md

- Interaction kind: non-interactive
- Interaction reason: Figures are media, not controls.

### Component: unavailable-info

**Semantics:** Visible unavailable-information node that names the withheld category. Required for opening hours, prices, and street address where a visitor would look for each.

- Anatomy: category name, honest absence sentence
- States: default
- Token references: color.ink, color.tint, color.rule

- Interaction kind: non-interactive
- Interaction reason: Honesty nodes report absence; they are not operable controls.

### Component: empty-collection

**Semantics:** Distinct empty surface for a filter that matches no sample events.

- Anatomy: title, explanation
- States: default
- Token references: color.ink-muted, color.rule

- Interaction kind: non-interactive
- Interaction reason: Empty copy is a display outcome of the filter, not its own control.

### Component: status-message

**Semantics:** role=status or role=alert copy that names the affected record or filter.

- Anatomy: live text
- States: default, error, success
- Token references: color.error, color.success

- Interaction kind: non-interactive
- Interaction reason: Status and alert text are announced display variants, not focusable controls.

### Rules

- Interactive components implement the applicable state matrix in code with data-state on the real component.

- Hover changes surface, not only translation. Selection is a persistent mark distinct from hover.

- Focus is an outline in a reserved slot and does not fade in.

- Disabled controls use reduced opacity, cursor not-allowed, and the native disabled attribute together.

- Never render a developer state switcher.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Task order stays home, events, one event, visit at every width.

- No horizontal document overflow at 320px, 390px, 1440px, or 200 percent reflow.

- Primary action stays fully inside the viewport.

- Interactive controls are at least 44 by 44 CSS pixels on touch viewports unless they are inline prose links.

- Hero is a copy and figure diptych, not a cropped strip over a thin bar.

- Nav labels never wrap to two lines. Display headings use overflow-wrap anywhere and min-width 0.

- Fixed-count galleries use authored 1, 2, or 3 column breakpoints, never auto-fit.

### Platform: web

- Static HTML, one shared CSS file, and one shared JS file with no build step and no network.
- Narrow viewports collapse the site nav behind a disclosure button.
- Skip link targets #main.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Calm, specific, and editorial.

- Name withheld categories in plain sentences where a visitor would look for them.

- Label every fictional event and person as sample content.

### Terminology

| Term | Preferred form |
|---|---|
| Browse sample events | Home primary action verb |
| Hold a sample seat | Event-detail form verb |
| Inspect this event | Event-card local action verb |
| Opening hours | Category that is not published |
| Prices | Category that is not published |
| Sample content | Visible label for every fictional event and person |
| Street address | Category that is not published |

### Locale: en (supported)

- All product copy is written in English.
- html lang is en.
- No additional locales are claimed.

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

1. Prompt facts for routes, stack, honesty, and shared system.

2. Repository facts for provided images and the stub homepage.

3. This design system contract.

4. Agent-proposed greenfield choices such as the shop name and token values.

### Additional change rules

- Record, review, and validate changes before adoption.

- Do not invent hours, prices, or a street address to fill a layout hole.

### Decision provenance

- identity.name — agent-proposed-greenfield-decision; value: "Quarto Cup"; evidence: task.md, .omd/runs/bookshop-multipage/council/design-system/result.json
- identity.kind — prompt-fact; value: "project-system"; evidence: task.md, .benchmark/PROMPT.md
- experience.primary_tasks — prompt-fact; evidence: task.md, .omd/runs/bookshop-multipage/council/interaction/result.json
- foundations.reduced_motion — prompt-fact; value: true; evidence: task.md, .benchmark/PROMPT.md
- layout_platforms.minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/bookshop-multipage/council/interaction/result.json
- visit.opening-hours — unresolved; evidence: task.md, .benchmark/PROMPT.md
- visit.street-address — unresolved; evidence: task.md, .benchmark/PROMPT.md
- visit.prices — unresolved; evidence: task.md, .benchmark/PROMPT.md
