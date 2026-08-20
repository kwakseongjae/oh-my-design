# Trail Gear Gallery Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

A visitor browses a sample trail-gear rental catalog, filters items by category, and selects one card to open a named detail panel with an honest availability note.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Filter items by category

- Select one card to open its detail panel

- See an honest availability note
<!-- design-md:claim-end -->

### Design direction

- Quiet trail-studio field: warm paper, forest ink, rust accent.

- Cards feel current through tokenized tilt, elevation, and staggered entrance.

- Honesty over inventory theatre: sample labels and unpublished stock counts stay visible.

### Principles

- Cite only established tokens, including motion.

- Keep every provided item image at explicit 1024 by 1024 CSS dimensions.

- Prefer compositor-only motion and a reduced-motion equivalent.

### Avoid

- Inventing rental stock counts, prices, testimonials, or official brand marks.

- Any imagery other than the six provided item files.

- Animating layout properties or box-shadow, or ignoring prefers-reduced-motion.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#8A3B1D` — Primary action rust
- **color.bg**: `#F3EEE4` — Page field
- **color.border**: `#D4C9B4` — Hairline border
- **color.disabled-bg**: `#E6E0D4` — Disabled field
- **color.disabled-fg**: `#5C6356` — Disabled text
- **color.error**: `#8B2424` — Error text
- **color.focus**: `#1F5E46` — Focus ring
- **color.ink**: `#1A2416` — Primary text
- **color.ink-muted**: `#3F4A38` — Secondary text
- **color.inverse**: `#243022` — Inverse field
- **color.on-accent**: `#FFF8F2` — Text on accent
- **color.on-inverse**: `#F3EEE4` — Text on inverse
- **color.success**: `#1E5A34` — Success text
- **color.surface**: `#FFFBF5` — Raised surface
- **duration.base**: `200ms`
- **duration.fast**: `120ms`
- **duration.slow**: `320ms`
- **easing.enter**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **easing.exit**: `cubic-bezier(0.4, 0, 1, 1)`
- **font.sans**: `system-ui, "Segoe UI", sans-serif`
- **radius.md**: `1rem`
- **radius.sm**: `0.5rem`
- **size.body**: `1rem`
- **size.caption**: `0.875rem`
- **size.display**: `2rem`
- **size.title**: `1.25rem`
- **space.1**: `0.25rem`
- **space.2**: `0.5rem`
- **space.3**: `0.75rem`
- **space.4**: `1rem`
- **space.5**: `1.5rem`
- **space.6**: `2.5rem`
- **touch.min**: `44px`

### Contrast pairs

- color.ink on color.bg: minimum 7:1
- color.ink on color.surface: minimum 7:1
- color.ink-muted on color.bg: minimum 4.5:1
- color.ink-muted on color.surface: minimum 4.5:1
- color.on-accent on color.accent: minimum 4.5:1
- color.on-inverse on color.inverse: minimum 4.5:1
- color.error on color.bg: minimum 4.5:1
- color.success on color.bg: minimum 4.5:1
- color.disabled-fg on color.disabled-bg: minimum 4.5:1
- color.focus on color.bg: minimum 3:1
- color.accent on color.bg: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Use only these semantic tokens in product CSS custom properties.

- Animate only transform and opacity; fake elevation with a pseudo-element opacity fade.

- Every motion pattern uses a duration token paired with easing.enter or easing.exit.

- prefers-reduced-motion: reduce must disable entrance, tilt, and elevation motion.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | Page title | font.sans | size.display | 650 | 1.2 |
| title | Section and item titles | font.sans | size.title | 600 | 1.3 |
| body | Supporting copy | font.sans | size.body | 400 | 1.5 |
| caption | Sample labels, IDs, and honesty notes | font.sans | size.caption | 500 | 1.4 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| system-ui-stack | font | project-owned | not-required | Platform system-ui stack declared in product CSS. No webfont file is shipped or fetched. |  |
| item-tent | image | user-provided | not-required | assets/item-tent.jpg | 1024 by 1024 sample product photograph. |
| item-pack | image | user-provided | not-required | assets/item-pack.jpg | 1024 by 1024 sample product photograph. |
| item-stove | image | user-provided | not-required | assets/item-stove.jpg | 1024 by 1024 sample product photograph. |
| item-poles | image | user-provided | not-required | assets/item-poles.jpg | 1024 by 1024 sample product photograph. |
| item-lantern | image | user-provided | not-required | assets/item-lantern.jpg | 1024 by 1024 sample product photograph. |
| item-bag | image | user-provided | not-required | assets/item-bag.jpg | 1024 by 1024 sample product photograph. |

### Rules

- Render only the six provided item images. Do not add logos, icons, or decorative pictures.

- Set width and height attributes to 1024 on every item image. Apply motion to the card container, never the raw img.

- Use the system-ui stack only. Do not load networked fonts.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** Skip to main content targets #main and is the first focusable control.

- Anatomy: anchor, visible-on-focus label
- Variants: to-main
- States: default, hover, focus-visible
- Token references: color.ink, color.bg, color.focus, duration.fast, easing.enter

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Skip link stays available for the whole visit. |
| loading | not-applicable | Skip link does not wait on catalog hydration. |
| error | not-applicable | Skip link has no validation contract. |
| success | not-applicable | Skip link does not persist an outcome. |

### Component: nav-disclosure

**Semantics:** Single site nav with a disclosure collapse on narrow viewports.

- Anatomy: toggle, nav landmark, in-page links
- Variants: expanded, collapsed
- States: default, hover, focus-visible, success
- Token references: color.ink, color.bg, color.border, touch.min, duration.base, easing.enter

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Nav disclosure is not disabled on this surface. |
| loading | not-applicable | Nav chrome is local and does not load remotely. |
| error | not-applicable | Nav disclosure has no error contract. |
| success | applicable |  |

### Component: primary-cta

**Semantics:** Exactly one visible primary CTA marked data-cta=primary. It moves focus to the gallery.

- Anatomy: anchor or button, label
- Variants: hero
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.on-accent, color.disabled-fg, color.disabled-bg, duration.fast, easing.enter, touch.min

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Primary CTA does not start a networked action. |
| error | not-applicable | Primary CTA has no field validation. |
| success | not-applicable | Primary CTA only relocates focus; success lives on the gallery status. |

### Component: category-filter

**Semantics:** Control named Filter items by category. The checked radio is the programmatic and visible active filter.

- Anatomy: radiogroup, radio, visible label
- Variants: all, named-category
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.ink, color.surface, color.accent, color.on-accent, color.disabled-fg, color.disabled-bg, color.focus, duration.fast, easing.enter, touch.min

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

### Component: gallery-card

**Semantics:** Selectable sample item card. Keyboard Enter or Space opens the detail panel. aria-selected marks the chosen card. Local action verb is Open detail.

- Anatomy: option control, item image, item id, sample label, availability note, local open-detail cue
- Variants: in-category, selected
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.surface, color.ink, color.ink-muted, color.border, color.focus, radius.md, duration.base, duration.slow, easing.enter, easing.exit

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

### Component: item-detail

**Semantics:** Named role=dialog containing the selected record visible ID. Closed state uses hidden so descendants are not focusable.

- Anatomy: named dialog, item id, item image, sample label, availability note, close control
- Variants: open, closed
- States: default, hover, focus-visible, loading, error, success
- Token references: color.surface, color.ink, color.ink-muted, color.bg, duration.base, easing.enter, easing.exit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The dialog is hidden when unused rather than shown disabled. |
| loading | applicable |  |
| error | applicable |  |
| success | applicable |  |

### Component: dialog-close

**Semantics:** Closes the item detail dialog and returns focus to the selected card.

- Anatomy: button, accessible name
- Variants: in-dialog
- States: default, hover, focus-visible
- Token references: color.ink, color.surface, color.focus, touch.min, duration.fast, easing.exit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Close is available whenever the dialog is open. |
| loading | not-applicable | Close does not wait on a remote save. |
| error | not-applicable | Close has no validation contract. |
| success | not-applicable | Close restores the gallery; success is announced on the gallery status. |

### Component: sample-label

**Semantics:** Visible Sample data label on every catalog record.

- Anatomy: visible text
- States: default
- Token references: color.ink-muted, size.caption

- Interaction kind: non-interactive
- Interaction reason: Static honesty label with no pointer or keyboard contract.

### Component: availability-note

**Semantics:** Honest absence of rental stock counts, placed where a visitor looks for availability.

- Anatomy: visible sentence, unavailable-information state node
- States: default
- Token references: color.ink, color.surface, size.caption

- Interaction kind: non-interactive
- Interaction reason: Informational honesty copy; it is not a control.

### Component: live-status

**Semantics:** role=status summary for filter and selection outcomes.

- Anatomy: status region
- States: default, success
- Token references: color.success, color.ink

- Interaction kind: non-interactive
- Interaction reason: Live status is an output region, not an operable control.

### Component: empty-notice

**Semantics:** Visible empty collection state when a category has no sample items.

- Anatomy: empty state node
- States: default
- Token references: color.ink-muted, color.surface

- Interaction kind: non-interactive
- Interaction reason: Empty copy is display-only.

### Component: error-notice

**Semantics:** role=alert catalog or image failure copy.

- Anatomy: alert, optional retry
- States: default, error
- Token references: color.error, color.bg

- Interaction kind: non-interactive
- Interaction reason: Error copy is a display variant. Retry, when present, is a separate button.

### Rules

- Interactive components declare all seven state-applicability entries.

- Selected cards expose aria-selected on the control that opens the detail panel.

- Never hide focusable descendants with aria-hidden alone; use hidden or inert.

- Primary CTA verb is unique. Per-item controls use Open detail and data-cta=local.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Document scrollWidth must not exceed clientWidth at 320px, 390px, 1440px, and 200% reflow.

- Primary task controls are at least 44 CSS px on the smaller side on touch viewports.

- One main landmark and one h1 per rendered view. Skip link targets #main.

- Gallery collapses from a multi-column grid to a single column before 320px overflow.

### Platform: web

- Vanilla HTML/CSS/JS single page. Tokens are :root custom properties.
- No build step and no network requests.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Direct, trail-side, and literal.

- Name controls with the brief nouns and verbs.

- Call unpublished facts unpublished. Do not soften them into estimates.

### Terminology

| Term | Preferred form |
|---|---|
| Filter items by category | Accessible name of the category filter |
| Open detail | Per-item local action |
| Rental stock counts are not published | Required availability sentence |
| Sample data | Required visible label on every item |

### Locale: en (supported)

- Core interface language is English.
- html lang stays en for this surface.

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

1. Prompt facts for the trail-gear rental gallery.

2. Repository facts from ./assets and the starter document.

3. This established project system.

### Additional change rules

- Record, review, and validate system changes before adoption.

### Decision provenance

- /identity/name — agent-proposed-greenfield-decision; value: "Trail Gear Gallery"; evidence: .benchmark/PROMPT.md, task.md
- /identity/kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md, task.md
- /foundations/reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md, task.md
- /layout_platforms/minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/trail-gear-gallery/council/interaction/result.json
- experience.rental_stock_counts — unresolved; evidence: .benchmark/PROMPT.md, task.md
- experience.prices — unresolved; evidence: .benchmark/PROMPT.md, task.md
- identity.official_brand — unresolved; evidence: .benchmark/PROMPT.md
