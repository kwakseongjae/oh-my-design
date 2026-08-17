# Roastery Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

An editorial landing page for a specialty coffee roastery. The primary task is reserving a cupping seat through a small on-page form. Commercial facts that are not published stay visibly absent.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Reserve a cupping seat

- Read the roasting story from the provided photographs

- See which commercial facts are not published
<!-- design-md:claim-end -->

### Design direction

- Modern editorial: long measure, generous margins, photographic crops, and restrained chrome

- Warm paper canvas with a roast-brown accent

- Motion is tokenized and limited to entrance fade-up, card hover elevation, and CTA press

### Principles

- Exactly one primary action, named Reserve a cupping seat

- Honesty over decoration: never invent prices, awards, review scores, or partner logos

- Every motion pattern has a reduced-motion equivalent

### Avoid

- Invented prices, awards, review scores, or partner logos

- Hot-linked or generated imagery beyond the provided assets directory

- Animating layout properties or using untokenized easing

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#6e3b22` — Roast-brown action fill
- **color.accent-ink**: `#fff8f0` — Ink on roast-brown actions
- **color.canvas**: `#f3ede3` — Warm paper page background
- **color.danger**: `#8b2418` — Error and alert fill
- **color.danger-ink**: `#fff8f0` — Ink on error fill
- **color.disabled**: `#c4b7a6` — Disabled control fill
- **color.disabled-ink**: `#3f3933` — Ink on disabled controls
- **color.ink**: `#1a1612` — Primary text and icon ink
- **color.ink-muted**: `#5a5148` — Secondary text ink
- **color.line**: `#d4c8b8` — Hairline and rule color
- **color.success**: `#1c4a36` — Success status fill
- **color.success-ink**: `#f3fbf6` — Ink on success fill
- **color.surface**: `#fff9f1` — Raised paper surface
- **elevation.card**: `0.12` — Card hover elevation overlay opacity
- **motion.duration-base**: `200ms` — Hover elevation and control transitions
- **motion.duration-fast**: `120ms` — Pressed and focus transitions
- **motion.duration-slow**: `320ms` — Section entrance fade-up
- **motion.easing-enter**: `cubic-bezier(0.22, 1, 0.36, 1)` — Entrance easing
- **motion.easing-exit**: `cubic-bezier(0.4, 0, 1, 1)` — Exit easing
- **motion.enter-distance**: `12px` — Entrance fade-up translate distance
- **radius.md**: `12px`
- **radius.sm**: `4px`
- **space.1**: `4px`
- **space.2**: `8px`
- **space.3**: `12px`
- **space.4**: `16px`
- **space.5**: `24px`
- **space.6**: `32px`
- **space.7**: `48px`
- **space.8**: `64px`

### Contrast pairs

- color.ink on color.canvas: minimum 7:1
- color.ink on color.surface: minimum 7:1
- color.ink-muted on color.canvas: minimum 4.5:1
- color.ink-muted on color.surface: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.danger-ink on color.danger: minimum 4.5:1
- color.success-ink on color.success: minimum 4.5:1
- color.disabled-ink on color.disabled: minimum 4.5:1
- color.accent on color.canvas: minimum 4.5:1
- color.danger on color.surface: minimum 4.5:1
- color.success on color.surface: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Use only declared semantic color pairs; never a lone accent on an undeclared background.

- Animate only transform and opacity. Fake elevation with overlay opacity, never by animating box-shadow.

- Every transition uses a motion duration token with either motion.easing-enter or motion.easing-exit.

- Apply at most three motion patterns: section entrance fade-up, card hover elevation, and CTA pressed scale.

- When prefers-reduced-motion is reduce, render the equivalent static state with no animation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | Page title and major section headings | Iowan Old Style, Palatino Linotype, Palatino, Georgia, Times New Roman, serif | clamp(2rem, 4vw, 3.5rem) | 600 | 1.15 | -0.02em |
| title | Section titles | Iowan Old Style, Palatino Linotype, Palatino, Georgia, Times New Roman, serif | clamp(1.5rem, 2.4vw, 2rem) | 600 | 1.25 |  |
| body | Long-form editorial copy | Georgia, Times New Roman, serif | 1.0625rem | 400 | 1.6 |  |
| ui | Navigation, buttons, and form labels | system-ui, Segoe UI, sans-serif | 0.9375rem | 600 | 1.3 |  |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| hero | image | user-provided | not-required | assets/hero.jpg | 1280 by 720 editorial roastery interior. Explicit width and height required. |
| story-beans | image | user-provided | not-required | assets/story-beans.jpg | 1248 by 832 roasted beans. Explicit width and height required. |
| story-brew | image | user-provided | not-required | assets/story-brew.jpg | 1248 by 832 pour-over. Explicit width and height required. |
| story-space | image | user-provided | not-required | assets/story-space.jpg | 1248 by 832 cafe corner. Explicit width and height required. |

### Rules

- Use only platform-available serif and system UI stacks. Do not load webfonts or invent a licensed typeface.

- Use only the four provided images in assets. Do not generate or hot-link any other imagery.

- Every img element must declare explicit width and height matching the source file.

- Apply motion to image containers, never to the raw img element.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control. Accessible name Skip to main content. Targets #main, never the primary CTA.

- Anatomy: anchor, visible-on-focus label
- Variants: in-page
- States: default, hover, focus-visible
- Token references: color.accent-ink, color.accent, motion.duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The skip link remains available whenever the page is rendered. |
| loading | not-applicable | In-page navigation does not load a remote resource. |
| error | not-applicable | The skip link has no validation contract. |
| success | not-applicable | Arrival at main is not a success status surface. |

### Component: site-nav

**Semantics:** Single site navigation. Disclosure collapses below the compact breakpoint. aria-expanded reflects open state.

- Anatomy: disclosure button, link list
- Variants: collapsed, expanded
- States: default, hover, focus-visible
- Token references: color.ink, color.canvas, motion.duration-base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Navigation remains operable for the whole visit. |
| loading | not-applicable | In-page anchors do not load remote routes. |
| error | not-applicable | Navigation has no form validation. |
| success | not-applicable | Navigation does not persist a success record. |

### Component: primary-cta

**Semantics:** The unique primary call to action. Accessible name is exactly Reserve a cupping seat. Marked data-cta=primary. Opens the reservation form.

- Anatomy: button label
- Variants: hero
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.accent-ink, color.disabled, color.disabled-ink, motion.duration-fast, motion.easing-enter

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Loading belongs to reservation-submit after the form opens. |
| error | not-applicable | Validation errors belong to the reservation fields. |
| success | not-applicable | Success is announced on the reservation form status. |

### Component: reservation-form

**Semantics:** Small reservation dialog opened by Reserve a cupping seat. role=dialog. Closed state uses hidden or inert so descendants are not focusable.

- Anatomy: dialog, title, fields, alerts, status, actions
- Variants: closed, open
- States: default, focus-visible, disabled, loading, error, success
- Token references: color.surface, color.ink, color.danger, color.success, motion.duration-base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | not-applicable | The dialog surface is not a hover target; fields and buttons own hover. |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | applicable |  |
| error | applicable |  |
| success | applicable |  |

### Component: text-field

**Semantics:** Labeled reservation field. label[for] binds the control. Errors use role=alert and are referenced from aria-describedby together with any hint.

- Anatomy: label, control, hint, error
- Variants: text, email, date, select, textarea
- States: default, hover, focus-visible, disabled, error
- Token references: color.ink, color.surface, color.line, color.danger, motion.duration-fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Submission loading is shown on reservation-submit, not each field. |
| error | applicable |  |
| success | not-applicable | Field-level success is not used; the form status names the reservation. |

### Component: reservation-submit

**Semantics:** Form submit control marked data-cta=submit. Accessible name submits the cupping reservation. Disabled while required fields are empty or while loading.

- Anatomy: button label
- Variants: dialog
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.accent, color.accent-ink, color.disabled, color.disabled-ink, motion.duration-fast

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

### Component: hero-figure

**Semantics:** Hero photograph of the roastery interior. Informative image with explicit 1280 by 720 dimensions. Decorative motion applies to the container only.

- Anatomy: image, caption
- States: default
- Token references: color.canvas, motion.duration-slow

- Interaction kind: non-interactive
- Interaction reason: The hero photograph is a static figure and is not a control.

### Component: story-card

**Semantics:** Editorial story card. Hover elevation is decorative CSS on a non-focusable article. Images keep explicit 1248 by 832 dimensions.

- Anatomy: media, title, copy
- States: default
- Token references: color.surface, elevation.card, motion.duration-base, motion.easing-enter

- Interaction kind: non-interactive
- Interaction reason: Story cards are reading surfaces, not buttons or links. Hover elevation is visual only.

### Component: unavailable-notice

**Semantics:** Visible unavailable-information node that names a withheld commercial category. Prose disclaimers alone do not satisfy this component.

- Anatomy: heading, named absence
- States: default
- Token references: color.ink, color.surface, color.line

- Interaction kind: non-interactive
- Interaction reason: Honesty notices are read-only and have no focus or submission contract.

### Rules

- Exactly one visible primary CTA, marked data-cta=primary, with the accessible name Reserve a cupping seat.

- Form submit is data-cta=submit and must not reuse the primary verb string.

- Every required journey state is a reachable DOM node with data-state set to that state name.

- Validation errors move focus to the failing control and associate a visible role=alert through aria-describedby.

- Success status is focusable role=status and names the reserved seat record.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Primary reading order is skip link, header, main, footer at every viewport.

- At 320px, 390px, and 200 percent reflow, document scrollWidth must not exceed clientWidth.

- Primary task controls are at least 44 by 44 CSS pixels on touch viewports.

- A single nav disclosure collapses the in-page links on compact widths.

- The primary CTA stays fully inside the viewport and is not duplicated in sticky or footer chrome.

### Platform: web

- Vanilla HTML, CSS, and JavaScript only. No build step and no network.
- Tokens project to :root custom properties. States project to data- and aria- attributes.
- The only route is the root landing page.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Editorial and specific, never promotional superlatives

- Name withheld categories in plain language

- Use the brief verbs and nouns without decorative prefixes

### Terminology

| Term | Preferred form |
|---|---|
| honesty | not published |
| primary action | Reserve a cupping seat |
| reservation | cupping seat |

### Locale: en (supported)

- Page language is English via html lang=en.
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

1. Prompt facts about the reservation journey and forbidden inventions

2. Repository facts about provided assets and the empty starter page

3. Agent-proposed greenfield tokens and editorial surface name

4. Unresolved commercial facts stay absent

### Additional change rules

- Do not add imagery, typefaces, or commercial claims without a new authority source.

- Motion tokens change only with a system revision, not per-element improvisation.

### Decision provenance

- /identity/name — agent-proposed-greenfield-decision; value: "Roastery"; evidence: task.md, .omd/runs/roastery/system/proposal.md
- /identity/kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md
- /experience/primary_tasks — prompt-fact; evidence: .benchmark/PROMPT.md
- /foundations/reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- /typography_assets/assets — repository-fact; evidence: assets/assets-manifest.json
- /layout_platforms/minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/roastery/council/interaction/result.json
- /experience/prices — unresolved; evidence: .benchmark/PROMPT.md
- /experience/awards — unresolved; evidence: .benchmark/PROMPT.md
- /experience/review-scores — unresolved; evidence: .benchmark/PROMPT.md
- /experience/partner-logos — unresolved; evidence: .benchmark/PROMPT.md
- /identity/legal-business-name — unresolved; evidence: .benchmark/PROMPT.md
- /content_locales/street-address — unresolved; evidence: .benchmark/PROMPT.md
- /content_locales/telephone — unresolved; evidence: .benchmark/PROMPT.md
