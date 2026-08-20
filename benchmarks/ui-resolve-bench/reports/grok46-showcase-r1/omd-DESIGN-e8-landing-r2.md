# Neighborhood Tool Library Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

A civic neighborhood tool library landing that explains how borrowing works and makes Reserve a tool the single primary action, without inventing stock, prices, praise, or partner marks.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Understand how borrowing from the neighborhood tool library works.

- Reserve a tool through the primary reservation journey.
<!-- design-md:claim-end -->

### Design direction

- Workshop-civic atmosphere: warm paper surfaces, forest ink, and brass-edge structure rather than generic software chrome.

- One clear borrowing story from how-it-works through catalog to reservation, with honesty about missing operational facts.

### Principles

- Keep exactly one visible primary call to action: Reserve a tool.

- Omit unresolved facts at the smallest boundary instead of filling them with theater.

- Every required product state must be reachable through a real control on the landing route.

### Avoid

- Invented inventory counts, prices, testimonials, or partner logos.

- Duplicate sticky or footer copies of the primary Reserve a tool control.

- Decorative stock photography presented as a real shed or real members.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#163828` — Forest primary action fill.
- **color.accent-ink**: `#F6F1E8` — Text on the forest action fill.
- **color.border**: `#C4BBA8` — Hairline structural border.
- **color.canvas**: `#F6F1E8` — Warm paper page background.
- **color.danger**: `#7A1F1F` — Error text and invalid borders.
- **color.danger-surface**: `#F8E8E4` — Error message surface.
- **color.disabled-bg**: `#D8D2C4` — Disabled control fill.
- **color.disabled-fg**: `#3A4036` — Disabled control text.
- **color.ink**: `#1B2416` — Primary readable text.
- **color.muted**: `#3E4636` — Secondary supporting text.
- **color.surface**: `#FFFDF8` — Raised card and form surface.
- **color.surface-alt**: `#E7EFE0` — Soft garden-tint banding.
- **motion.duration**: `160ms`
- **radius.md**: `12px`
- **radius.sm**: `6px`
- **space.2xl**: `64px`
- **space.lg**: `24px`
- **space.md**: `16px`
- **space.sm**: `8px`
- **space.xl**: `40px`
- **space.xs**: `4px`

### Contrast pairs

- color.ink on color.canvas: minimum 12:1
- color.ink on color.surface: minimum 14:1
- color.ink on color.surface-alt: minimum 12:1
- color.muted on color.canvas: minimum 7:1
- color.accent-ink on color.accent: minimum 10:1
- color.accent on color.canvas: minimum 10:1
- color.danger on color.danger-surface: minimum 7:1
- color.disabled-fg on color.disabled-bg: minimum 6:1

### Reduced motion

Required.

### Foundation rules

- Pair every foreground color with an explicit background token; never place accent fill behind untested ink.

- Spacing uses the xs through 2xl scale only.

- Motion uses motion.duration and must collapse to an instant cut when the user requests reduced motion.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | Landing name and hero heading | ui-serif, Georgia, Times New Roman, serif | clamp(2rem, 4vw, 3.5rem) | 650 | 1.15 |
| title | Section headings | ui-serif, Georgia, Times New Roman, serif | 1.75rem | 650 | 1.25 |
| body | Explanatory copy and form text | ui-sans-serif, system-ui, sans-serif | 1.0625rem | 400 | 1.55 |
| label | Control labels and navigation | ui-sans-serif, system-ui, sans-serif | 0.9375rem | 600 | 1.35 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| font.platform-ui | font | project-owned | not-required | Platform UI and UI-serif stacks already on the resident device | No remote webfont is shipped. |
| icon.tool-marks | icon | generated-original | not-required |  | Decorative inline SVG marks only; never presented as partner logos. |

### Rules

- Use only the declared platform font stacks; do not load a hosted typeface.

- Do not ship a wordmark, lockup, or partner logo asset.

- Informative SVG must expose a name; decorative marks stay aria-hidden.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: button-primary

**Semantics:** The unique page-level Reserve a tool control that starts the reservation journey.

- Anatomy: label, focus-ring, busy-indicator
- Variants: on-canvas, on-accent-band
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.accent, color.accent-ink, color.disabled-fg, color.disabled-bg, radius.md

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

**Semantics:** Collects a reservation request and reports loading, validation, success, and disabled readiness without claiming fulfillment facts.

- Anatomy: name-field, contact-field, tool-field, notes-field, hint, error, status, submit
- Variants: resident-request
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.surface, color.ink, color.danger, color.danger-surface, space.md

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

**Semantics:** Filters the baseline tool-category list so empty and default outcomes stay observable.

- Anatomy: fieldset, options, status
- Variants: category
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.surface-alt, radius.sm

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Category filtering is local and synchronous. |
| error | not-applicable | The filter does not call a remote catalog. |
| success | not-applicable | Selection is a filter state, not a completion state. |

### Component: site-nav

**Semantics:** Single landmark navigation with a disclosure that collapses on narrow viewports.

- Anatomy: brand-text, disclosure, links
- Variants: collapsed, expanded
- States: default, hover, focus-visible
- Token references: color.ink, color.canvas, space.md

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | Landing navigation remains available whenever the page is shown. |
| loading | not-applicable | Navigation does not fetch destinations. |
| error | not-applicable | In-page links do not have a failure contract. |
| success | not-applicable | Following a section link is not a success state. |

### Component: tool-card

**Semantics:** Presents a borrowable tool category and a local choose action that never repeats the primary verb.

- Anatomy: name, use, local-action, honesty
- Variants: category
- States: default, hover, focus-visible, disabled
- Token references: color.surface, color.ink, color.border, radius.md

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | Cards do not independently load inventory. |
| error | not-applicable | Card errors would invent a stock feed that does not exist. |
| success | not-applicable | Choosing a category only prepares the form. |

### Component: honesty-banner

**Semantics:** Visible unavailable-information ledger for facts the page must not invent.

- Anatomy: heading, items
- States: default
- Token references: color.surface-alt, color.ink

- Interaction kind: non-interactive
- Interaction reason: The honesty ledger is informational and has no operable control of its own.

### Component: process-step

**Semantics:** Explains one borrowing step without collecting input.

- Anatomy: index, title, body
- States: default
- Token references: color.ink, color.accent

- Interaction kind: non-interactive
- Interaction reason: Process steps are explanatory content, not controls.

### Rules

- Mark the unique primary control with data-cta=primary and the form send control with data-cta=submit.

- Per-item tool actions use data-cta=local and a verb other than Reserve a tool.

- Every required product state exposes a visible data-state node that a resident can actually reach.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- Task order stays skip link, header, borrowing explainer, catalog, reservation, honesty, footer at every width.

- At 320px and 390px the page must not produce horizontal document overflow.

- At 200 percent reflow, primary text and the reservation form remain in reading order without clipped controls.

- Touch targets for task controls are at least 44 by 44 CSS pixels except inline prose links.

### Platform: web

- Single HTML landing route with in-page anchors; no native-app shell is claimed.
- Navigation collapses behind one disclosure below the medium width.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Neighborly, practical, and specific about borrowing without sounding like a shop or a startup.

- Name missing information plainly instead of softening it into marketing.

### Terminology

| Term | Preferred form |
|---|---|
| library | neighborhood tool library |
| local card action | Choose this tool |
| primary action | Reserve a tool |

### Locale: en (supported)

- Core interface copy is authored in English.
- No additional locale is claimed.

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

1. Prompt facts about borrowing and the Reserve a tool action outrank visual preference.

2. Unresolved operational facts stay absent from tokens, components, and product copy claims.

### Additional change rules

- Do not add inventory, price, testimonial, or partner-logo values without a new product-owner source.

- System changes must keep the seven Core sections and the honesty ledger intact.

### Decision provenance

- /identity/name — agent-proposed-greenfield-decision; value: "Neighborhood Tool Library"; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/task.md
- /identity/kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/decision-ledger.json
- /experience/primary_tasks — prompt-fact; value: ["Understand how borrowing from the neighborhood tool library works.","Reserve a tool through the primary reservation journey."]; evidence: .benchmark/PROMPT.md
- /foundations/tokens/color.canvas/$value — agent-proposed-greenfield-decision; value: "#F6F1E8"; evidence: .omd/runs/neighborhood-library/council/design-system/result.json
- /foundations/reduced_motion — agent-proposed-greenfield-decision; value: true; evidence: .omd/runs/neighborhood-library/council/interaction/result.json
- /content_locales/terminology/primary action — prompt-fact; value: "Reserve a tool"; evidence: .benchmark/PROMPT.md
- /inventory_counts — unresolved; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/evidence-unknown/result.json
- /prices — unresolved; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/evidence-unknown/result.json
- /testimonials — unresolved; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/evidence-unknown/result.json
- /partner_logos — unresolved; evidence: .benchmark/PROMPT.md, .omd/runs/neighborhood-library/council/evidence-unknown/result.json
- /hours_of_operation — unresolved; evidence: .omd/runs/neighborhood-library/council/evidence-unknown/result.json
- /street_address — unresolved; evidence: .omd/runs/neighborhood-library/council/evidence-unknown/result.json
