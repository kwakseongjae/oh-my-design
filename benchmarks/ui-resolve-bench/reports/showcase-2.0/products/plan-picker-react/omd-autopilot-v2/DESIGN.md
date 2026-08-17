# Membership Plan Picker Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Members compare three fictional sample membership plans, select one with keyboard-reachable controls, and review a summary of the chosen plan name and inclusions.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Compare three fictional sample membership plans

- Select one membership plan

- Review the summary of the chosen plan name and inclusions
<!-- design-md:claim-end -->

### Design direction

- Calm indigo-teal geometry matching the provided header artwork

- Project tokens as one theme object and mirrored CSS custom properties

- Pressed, hover, and selection motion uses named duration and easing tokens

### Principles

- Selection visuals and aria-pressed or aria-checked share one state

- Sample data is labeled as sample wherever amounts appear

- Unknown commercial prices stay absent rather than invented

### Avoid

- Invented real prices or currency claims

- Build steps, network imports, or libraries beyond the vendored Preact and HTM runtime

- Animating layout properties or shadow values

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#0f6e73` — Selected plan and primary action
- **color.accent-soft**: `#d7eef0` — Selected plan wash
- **color.border**: `#c5d4db` — Default control border
- **color.canvas**: `#eef4f6` — Page canvas
- **color.danger**: `#8b1e2d` — Error text
- **color.danger-bg**: `#fdecee` — Error surface
- **color.disabled-bg**: `#eef2f5` — Disabled control surface
- **color.disabled-ink**: `#3a4a55` — Disabled control text
- **color.ink**: `#102033` — Primary text
- **color.ink-muted**: `#3d5163` — Secondary text
- **color.on-accent**: `#ffffff` — Text on accent
- **color.success**: `#14532d` — Success text
- **color.success-bg**: `#e8f6ee` — Success surface
- **color.surface**: `#ffffff` — Raised card and panel surface
- **motion.duration-base**: `200ms`
- **motion.duration-fast**: `120ms`
- **motion.duration-slow**: `320ms`
- **motion.easing-enter**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **motion.easing-exit**: `cubic-bezier(0.4, 0, 1, 1)`
- **radius.card**: `20px`
- **radius.control**: `12px`
- **space.lg**: `24px`
- **space.md**: `16px`
- **space.sm**: `12px`
- **space.xl**: `32px`
- **space.xs**: `8px`
- **type.family-sans**: `system-ui, "Segoe UI", sans-serif`

### Contrast pairs

- color.ink on color.canvas: minimum 4.5:1
- color.ink on color.surface: minimum 4.5:1
- color.ink-muted on color.surface: minimum 4.5:1
- color.on-accent on color.accent: minimum 4.5:1
- color.accent on color.canvas: minimum 4.5:1
- color.danger on color.danger-bg: minimum 4.5:1
- color.success on color.success-bg: minimum 4.5:1
- color.disabled-ink on color.disabled-bg: minimum 4.5:1
- color.ink on color.accent-soft: minimum 4.5:1

### Reduced motion

Required.

### Foundation rules

- Use only named foreground and background color pairs from this token set.

- Animate only transform and opacity; never animate width, height, margin, or box-shadow.

- Every motion pattern sits behind prefers-reduced-motion with a non-animated equivalent.

- Project every token into one JavaScript theme object and mirrored CSS custom properties.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height |
|---|---|---|---|---|---|
| display | Page title | system-ui, "Segoe UI", sans-serif | clamp(1.5rem, 2vw + 1rem, 2.25rem) | 650 | 1.2 |
| title | Plan name and summary heading | system-ui, "Segoe UI", sans-serif | 1.25rem | 650 | 1.3 |
| body | Inclusions and supporting copy | system-ui, "Segoe UI", sans-serif | 1rem | 400 | 1.5 |
| caption | Sample-data labels and honesty notices | system-ui, "Segoe UI", sans-serif | 0.875rem | 500 | 1.4 |
| ui | Buttons and plan option labels | system-ui, "Segoe UI", sans-serif | 1rem | 600 | 1.2 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| header-art | illustration | user-provided | not-required | assets/header-art.jpg | Provided header artwork. Render with explicit width 1280 and height 720. |
| system-sans | font | project-owned | not-required | system-ui stack | Generic platform UI type. No webfont file is shipped. |

### Rules

- Do not introduce branded or downloaded fonts.

- Keep sample-data labels in the caption role next to every amount.

- Give the header artwork explicit width and height to avoid layout shift.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: plan-option

**Semantics:** Keyboard-reachable control that selects one of three fictional membership plans. aria-pressed and aria-checked are computed from the same selectedPlanId that styles the card.

- Anatomy: name, sample amount, inclusions, select control
- Variants: starter, standard, plus
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.surface, color.ink, color.accent, color.accent-soft, color.border, radius.card, motion.duration-base

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

### Component: catalog-status

**Semantics:** Sample catalog status control that makes loading and error states reachable from the keyboard.

- Anatomy: status label, ready control, loading control, error control
- Variants: ready, loading, error
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.ink, color.accent, color.danger, color.danger-bg, motion.duration-fast

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

### Component: confirm-selection

**Semantics:** Single primary action that confirms the selected membership plan. Disabled until a plan is selected.

- Anatomy: label, disabled reason
- Variants: enabled, disabled
- States: default, hover, focus-visible, disabled, loading, error, success
- Token references: color.accent, color.on-accent, color.disabled-bg, color.disabled-ink, radius.control, motion.duration-fast

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

### Component: summary-panel

**Semantics:** Read-only complementary region that names the chosen plan and lists its inclusions.

- Anatomy: heading, plan name, inclusions, empty copy
- Variants: empty, selected
- States: default, empty, success
- Token references: color.surface, color.ink, color.success, color.success-bg

- Interaction kind: non-interactive
- Interaction reason: Displays the selected plan; it is not an independent control.

### Component: header-artwork

**Semantics:** Decorative header illustration from the provided assets directory.

- Anatomy: image
- States: default
- Token references: radius.card

- Interaction kind: non-interactive
- Interaction reason: Artwork only; marked decorative for assistive technology.

### Component: honesty-notice

**Semantics:** Visible unavailable-information notice that real prices are withheld and amounts are sample data.

- Anatomy: unavailable-information copy
- States: default
- Token references: color.ink-muted, color.canvas

- Interaction kind: non-interactive
- Interaction reason: Static honesty notice with no control.

### Rules

- aria-pressed and aria-checked on plan options are derived from the same selectedPlanId that drives visual selection.

- Primary-action uniqueness: one visible data-cta=primary confirm control; per-plan select controls use data-cta=local.

- Touch targets are at least 44 by 44 CSS pixels.

- Focus-visible uses the accent token pair and a motion-token transition.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- At 320px and 390px the document must not overflow horizontally.

- At 200 percent reflow the compare, select, and summary tasks stay in source order.

- Plan options stack to one column below 720px and sit three-up from 880px.

- Primary action remains fully inside the viewport on 320px, 390px, and 1440px.

### Platform: web

- Buildless Preact and HTM through the index.html import map.
- No network imports and no additional libraries.
- Skip link targets #main. Exactly one main and one h1 per view.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- Direct and specific.

- Label every fabricated plan and amount as sample data.

- Name withheld categories instead of inventing them.

### Terminology

| Term | Preferred form |
|---|---|
| plan | membership plan |
| sample | sample data |
| select | Select |
| summary | summary |

### Locale: en (supported)

- Core product copy is English.
- html lang remains en for this surface.

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

1. Prompt facts about the picker, stack, motion, and sample-data honesty

2. Repository facts from index.html, assets, and the import map

3. Agent-proposed greenfield tokens that do not invent brand or prices

### Additional change rules

- Do not add real prices or official brand marks without a new source.

- Compiler-owned DESIGN.md, claims, and hashes are never hand-edited.

### Decision provenance

- identity.name — prompt-fact; value: "Membership Plan Picker"; evidence: .benchmark/PROMPT.md, task.md
- identity.kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md
- foundations.reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- layout_platforms.minimum_width_px — agent-proposed-greenfield-decision; value: 320; evidence: .omd/runs/plan-picker-react/council/design-system/result.json
- typography_assets.assets.0.source — repository-fact; value: "assets/header-art.jpg"; evidence: assets/assets-manifest.json
- commercial.published-prices — unresolved; evidence: .benchmark/PROMPT.md
