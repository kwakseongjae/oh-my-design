# Neighborhood Tool Library Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Residents arrive to learn the borrowing ritual and reserve a tool. The page explains the steps, shows a sample catalog so the journey is visible, and never invents stock, prices, praise, or partner marks.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Understand borrowing

- Reserve a tool

- Inspect one sample tool

- Filter the sample catalog

- See unavailable information
<!-- design-md:claim-end -->

### Design direction

- Civic workshop on warm paper: calm, local, and practical rather than retail or startup gloss.

- One primary action in the hero. Catalog, borrowing steps, and reservation live in one scrollable route.

- Honesty is a visual layer: withheld facts sit where a reader would look for them.

### Principles

- Name the action with the brief verb Reserve a tool and keep that string unique to the primary control.

- Every required state is reachable from the keyboard and marked in the DOM.

- Sample records stay visibly sample. Withheld categories are named, not filled.

### Avoid

- Inventory counts

- Prices

- Testimonials

- Partner logos

- Sticky duplicate primary buttons

- Invented hours, addresses, or membership fees

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#8A3722` — Clay accent
- **color.canvas**: `#F3EEE4` — Page paper
- **color.danger**: `#8A1C1C` — Error text
- **color.disabled-bg**: `#E6DFD2` — Disabled fill
- **color.disabled-fg**: `#5C564C` — Disabled text
- **color.focus**: `#1A4F42` — Focus ring
- **color.ink**: `#1A1714` — Primary text
- **color.ink-muted**: `#534C43` — Secondary text
- **color.line**: `#D4CBBB` — Hairline
- **color.on-accent**: `#FFF8F3` — Text on clay
- **color.on-danger**: `#FFF6F4` — Error surface
- **color.on-primary**: `#F3EEE4` — Text on forest
- **color.primary**: `#1A4F42` — Forest action
- **color.success**: `#1A4F42` — Success text
- **color.success-bg**: `#E4EFEA` — Success surface
- **color.surface**: `#FFFDF8` — Raised paper
- **elevation.card**: `0 12px 32px rgba(26, 23, 20, 0.08)`
- **motion.duration**: `180ms`
- **motion.easing**: `ease-out`
- **radius.md**: `14px`
- **radius.sm**: `6px`
- **space.1**: `4px`
- **space.2**: `8px`
- **space.3**: `16px`
- **space.4**: `24px`
- **space.5**: `40px`
- **space.6**: `64px`

### Contrast pairs

- color.ink on color.canvas: minimum 7:1
- color.ink on color.surface: minimum 7:1
- color.ink-muted on color.canvas: minimum 4.5:1
- color.on-primary on color.primary: minimum 4.5:1
- color.on-accent on color.accent: minimum 4.5:1
- color.danger on color.on-danger: minimum 4.5:1
- color.success on color.success-bg: minimum 4.5:1
- color.disabled-fg on color.disabled-bg: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Use only named foreground and background pairs from this token set.

- Touch targets are at least 44 by 44 CSS pixels except inline prose links.

- Motion uses motion.duration and must collapse to an instant change when reduced motion is requested.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | Hero title | Georgia, Times New Roman, serif | clamp(2rem, 4vw, 3.5rem) | 600 | 1.15 |
| title | Section headings | Georgia, Times New Roman, serif | 1.75rem | 600 | 1.25 |
| body | Explanatory copy | system-ui, Segoe UI, sans-serif | 1.0625rem | 400 | 1.55 |
| label | Controls and navigation | system-ui, Segoe UI, sans-serif | 0.9375rem | 600 | 1.3 |
| caption | Hints, honesty notes, sample tags | system-ui, Segoe UI, sans-serif | 0.875rem | 500 | 1.4 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| platform-type-stack | font | project-owned | not-required | Installed system UI sans and Georgia serif stacks | No webfont file is shipped and no partner or brand typeface is claimed. |

### Rules

- Do not load remote fonts.

- Do not place partner logos or endorsement marks anywhere on the surface.

- Decorative SVG must be aria-hidden. Informative SVG uses role=img with a title.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** First focusable control. Moves keyboard focus to #main, never to the primary CTA.

- Anatomy: control
- Variants: to-main
- States: default, hover, focus-visible
- Token references: color.ink, color.surface, color.focus

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | The skip link stays available whenever the page is rendered. |
| loading | not-applicable | Skip navigation does not wait on a request. |
| error | not-applicable | Skip navigation has no validation outcome. |
| success | not-applicable | Skip navigation has no completion outcome. |

### Component: site-nav

**Semantics:** Single navigation landmark. A disclosure collapses the link list on narrow viewports.

- Anatomy: landmark, disclosure, links
- Variants: collapsed, expanded
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.canvas, color.line

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Navigation links do not submit work. |
| error | not-applicable | Navigation has no field error. |
| success | not-applicable | Navigation has no success receipt. |

### Component: button

**Semantics:** Task controls. Only the hero control may use the exact name Reserve a tool and data-cta=primary.

- Anatomy: label, focus-ring
- Variants: primary, submit, local
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.primary, color.on-primary, color.disabled-fg, color.disabled-bg, color.focus

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

**Semantics:** Collects resident name, contact, sample tool, and intended window. Errors return focus to the failing field and are named by aria-describedby plus role=alert. Success names the sample tool in role=status.

- Anatomy: legend, fields, hints, errors, submit
- Variants: ready, invalid, sending, complete
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.ink, color.surface, color.danger, color.on-danger, color.success, color.success-bg

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

### Component: catalog-filter

**Semantics:** Filters the sample catalog. The selected option is both the programmatic and visible state. A role=status summary names the visible set. Empty is reachable when a category has no sample tools.

- Anatomy: fieldset, options, live-summary
- Variants: all, category
- States: default, hover, focus-visible, disabled, empty
- Token references: color.ink, color.surface, color.primary

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | The sample catalog is local and does not load remotely. |
| error | not-applicable | Filtering a sample list has no server error. |
| success | not-applicable | Filter changes are immediate, not a saved success. |

### Component: status-region

**Semantics:** Non-interactive status and alert copy. It reports reservation progress and outcomes without becoming a second primary CTA.

- Anatomy: message
- Variants: info, error, success, loading
- States: default, error, success, loading
- Token references: color.success, color.success-bg, color.danger, color.on-danger

- Interaction kind: non-interactive
- Interaction reason: Status text is announced, not operated. Error and success variants do not receive a fictional focus contract.

### Component: honesty-notice

**Semantics:** Visible unavailable-information node that names a withheld category where a reader would expect that datum.

- Anatomy: sentence
- Variants: inventory, price, testimonial, logo
- States: default
- Token references: color.ink-muted, color.canvas

- Interaction kind: non-interactive
- Interaction reason: Honesty copy is read, not operated.

### Rules

- Exactly one visible control may use data-cta=primary and the accessible name Reserve a tool.

- Form submit uses data-cta=submit and a different verb.

- Per-item catalog controls use data-cta=local.

- Every state change updates visible copy and ARIA in the same paint.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Document scrollWidth must not exceed clientWidth at 320, 390, and 1440 CSS pixels.

- The primary action stays fully inside the viewport on first paint of the hero.

- A single column below 720px. Two columns for catalog and reservation from 900px.

- Nav collapses behind one disclosure below 720px.

### Platform: web

- Static HTML, CSS, and JavaScript in the workspace. No remote runtime.
- Target modern evergreen browsers with keyboard and pointer input.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Neighborly and specific. Speak as a shared shed, not a store.

- Explain the borrowing steps in plain English.

- When a fact is missing, name the missing category instead of softening it.

### Terminology

| Term | Preferred form |
|---|---|
| Reserve a tool | Primary action and accessible name |
| borrowing | The resident ritual this page explains |
| sample | Required visible label on every fabricated catalog record |

### Locale: en (supported)

- html lang is en.
- Core copy, control names, and honesty sentences are English only.

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

1. Prompt facts about borrowing, the primary action, and withheld categories

2. Repository facts from the blank product shell

3. Agent-proposed tokens and components for this greenfield system

4. Unresolved facts stay absent from tokens, copy claims, and code

### Additional change rules

- Do not invent inventory, price, testimonial, or logo facts later without a new owner source.

- Compiler-owned DESIGN.md bytes are not hand-edited.

### Decision provenance

- /identity/name — agent-proposed-greenfield-decision; value: "Neighborhood Tool Library"; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/design-system/result.json
- /experience/primary_tasks/1 — prompt-fact; value: "Reserve a tool"; evidence: .benchmark/PROMPT.md
- /foundations/reduced_motion — agent-proposed-greenfield-decision; value: true; evidence: .omd/runs/neighborhood-library/council/design-system/result.json
- /layout_platforms/minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/neighborhood-library/council/interaction/result.json
- /experience/inventory-counts — unresolved; evidence: .benchmark/PROMPT.md
- /experience/prices — unresolved; evidence: .benchmark/PROMPT.md
- /experience/testimonials — unresolved; evidence: .benchmark/PROMPT.md
- /typography_assets/partner-logos — unresolved; evidence: .benchmark/PROMPT.md
