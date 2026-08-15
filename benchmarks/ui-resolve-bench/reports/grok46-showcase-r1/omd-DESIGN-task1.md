# Neighborhood Tool Library Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

A civic landing for neighbors who want to borrow shared tools. The page explains how borrowing works and makes Reserve a tool the single primary action.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Understand how borrowing from the neighborhood tool library works

- Start a reservation for a named tool
<!-- design-md:claim-end -->

### Design direction

- Warm workshop paper, forest ink, and a single deep-green action color

- Quiet civic utility over retail marketing

### Principles

- One visible primary action

- Explain borrowing before asking for a reservation

- Omit invented inventory, prices, testimonials, and partner marks

### Avoid

- Inventory counts

- Prices or fees presented as facts

- Testimonials

- Partner logos

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.border**: `#C9BDA4` — Hairline border on paper surfaces
- **color.canvas**: `#F6F1E7` — Warm paper page background
- **color.danger**: `#8B1D1D` — Error text and icon
- **color.danger-surface**: `#FDECEC` — Error message background
- **color.disabled-ink**: `#4A524C` — Disabled control label
- **color.disabled-surface**: `#E4DDCE` — Disabled control fill
- **color.focus-ring**: `#1B4D3E` — Visible focus ring
- **color.ink**: `#1A241E` — Primary text and icon ink
- **color.muted**: `#3D4A42` — Secondary supporting text
- **color.on-primary**: `#F7F3E8` — Text and icon on primary actions
- **color.primary**: `#1B4D3E` — Primary action background
- **color.success**: `#14532D` — Success text and icon
- **color.success-surface**: `#E7F6EC` — Success message background
- **color.surface**: `#FFFDF8` — Raised card and form surface
- **motion.duration**: `160ms`
- **radius.md**: `10px`
- **space.lg**: `24px`
- **space.md**: `16px`
- **space.sm**: `8px`
- **space.xl**: `40px`
- **space.xs**: `4px`
- **touch.min**: `44px`
- **type.family**: `system-ui, "Segoe UI", sans-serif`

### Contrast pairs

- color.ink on color.canvas: minimum 7:1
- color.ink on color.surface: minimum 7:1
- color.on-primary on color.primary: minimum 4.5:1
- color.muted on color.canvas: minimum 4.5:1
- color.danger on color.danger-surface: minimum 4.5:1
- color.success on color.success-surface: minimum 4.5:1
- color.disabled-ink on color.disabled-surface: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Pair every foreground color with an explicit background token.

- Primary task controls are at least 44 CSS pixels on touch viewports.

- Honor prefers-reduced-motion by dropping non-essential transitions.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | Hero title | system-ui, "Segoe UI", sans-serif | 2.25rem | 650 | 1.15 |
| title | Section headings | system-ui, "Segoe UI", sans-serif | 1.5rem | 650 | 1.25 |
| body | Explanatory copy | system-ui, "Segoe UI", sans-serif | 1rem | 400 | 1.55 |
| label | Form labels and navigation | system-ui, "Segoe UI", sans-serif | 0.9375rem | 600 | 1.35 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| ui-sans | font | project-owned | not-required | Platform UI sans stack declared as system-ui, Segoe UI, sans-serif | No webfont file is bundled. |

### Rules

- Use only the declared platform UI sans stack.

- Do not introduce partner logos or decorative brand marks.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: reserve-button

**Semantics:** Starts or submits a tool reservation. The unique primary instance uses the verb Reserve a tool.

- Anatomy: label, focus-ring
- Variants: primary, local
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.primary, color.on-primary, color.disabled-ink, color.disabled-surface, color.focus-ring, touch.min

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

### Component: reservation-form

**Semantics:** Collects the tool and resident contact needed to start a reservation. Validation errors bind to the failing field; success names the reserved tool.

- Anatomy: tool field, name field, contact field, submit, status
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.surface, color.ink, color.danger, color.success, color.border

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

### Component: site-nav

**Semantics:** Single landmark navigation with a disclosure on narrow viewports. Skip link targets main.

- Anatomy: skip link, brand wordmark, disclosure, in-page links
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.canvas, touch.min

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Navigation does not wait on a network fetch. |
| error | not-applicable | Navigation has no validation or request error. |
| success | not-applicable | Navigation does not confirm a completed action. |

### Component: text-field

**Semantics:** Labeled input with optional hint and programmatically associated error text.

- Anatomy: label, input, hint, error
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.ink, color.surface, color.border, color.danger, color.focus-ring

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

### Component: borrowing-guide

**Semantics:** Explains the borrowing sequence without collecting input.

- Anatomy: heading, steps
- States: default
- Token references: color.ink, color.surface

- Interaction kind: non-interactive
- Interaction reason: The borrowing guide is explanatory content, not a control.

### Component: status-message

**Semantics:** Announces form or catalog status, including unavailable information.

- Anatomy: text
- States: default, error, success
- Token references: color.danger, color.danger-surface, color.success, color.success-surface

- Interaction kind: non-interactive
- Interaction reason: Status text is an output region and is not itself operable.

### Rules

- Exactly one visible primary call to action uses the Reserve a tool verb.

- Per-item actions use a local verb and never repeat Reserve a tool.

- Every required product state is a visible data-state node.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Preserve task order from skip link through reservation at 320px and 200 percent zoom.

- Do not create document overflow at 390px, 320px, or 200 percent reflow.

- Collapse the single nav behind a disclosure below 720px.

### Platform: web

- Ship as a static public landing page.
- Support keyboard, pointer, and touch without a separate native shell.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Neighborly and practical

- Specific about borrowing steps

- Honest when a fact is not available

### Terminology

| Term | Preferred form |
|---|---|
| Activity | Borrow |
| Place | Neighborhood tool library |
| Primary action | Reserve a tool |

### Locale: en (supported)

- Core interface copy is English.
- Do not invent localized inventory, prices, or testimonials.

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

1. Direct user instructions for the requested scope

2. Repository facts

3. This system contract

4. Reference inspiration

### Additional change rules

- Record, review, and validate changes before adoption.

### Decision provenance

- /identity/name — agent-proposed-greenfield-decision; value: "Neighborhood Tool Library"; evidence: .benchmark/PROMPT.md
- /identity/kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md
- /experience/primary_tasks — prompt-fact; value: ["Understand how borrowing from the neighborhood tool library works","Start a reservation for a named tool"]; evidence: .benchmark/PROMPT.md
- /foundations/tokens/color.canvas — agent-proposed-greenfield-decision; value: {"$description":"Warm paper page background","$type":"color","$value":"#F6F1E7"}; evidence: .omd/runs/neighborhood-library/system/proposal.md
- /foundations/reduced_motion — agent-proposed-greenfield-decision; value: true; evidence: .omd/runs/neighborhood-library/system/proposal.md
- /content_locales/locales/0/locale — agent-proposed-greenfield-decision; value: "en"; evidence: .benchmark/PROMPT.md
- /content_locales/testimonials — unresolved; evidence: .benchmark/PROMPT.md
- /content_locales/prices — unresolved; evidence: .benchmark/PROMPT.md
- /foundations/tokens/inventory-count — unresolved; evidence: .benchmark/PROMPT.md
- /typography_assets/partner-logo — unresolved; evidence: .benchmark/PROMPT.md
- /content_locales/hours-address — unresolved; evidence: .benchmark/PROMPT.md
