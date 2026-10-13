---
name: Thumbtack Thumbprint
colors:
  primary: '#009fd9'
  canvas: '#ffffff'
  foreground: '#2f3033'
  muted: '#676d73'
  hairline: '#e9eced'
typography:
  display:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    use: Observed h1 on the public button documentation route
  heading:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.333
    use: Observed h2 on the public button documentation route
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    use: Repeated body and documentation list content on the supplied public surfaces
  label:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.4
    use: Repeated navigation, list, and search-input text on the supplied public surfaces
rounded:
  square: 0px
  control: 4px
  pill: 9999px
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
components:
  docs-primary-button:
    type: button
    backgroundColor: '#07344a'
    textColor: '#7cdcfd'
    border: 1px solid transparent
    rounded: 9999px
    padding: 0px 24px
    height: 48px
    typography: 16px / 700 Rise
    states: Default and a separate disabled specimen were captured; no hover, focus, pressed, or interaction transition was captured.
    use: Public Button v2 documentation primary example; selector surface-2::[data-omd-capture=63]
  global-search:
    type: input
    backgroundColor: transparent
    textColor: '#2f3033'
    rounded: 4px
    padding: 9px 16px 9px 12px
    height: 38px
    typography: 14px / 400 Rise
    states: Default only; no focus, error, disabled, or input interaction was captured.
    use: Public Thumbprint navigation search combobox; selector home::[data-omd-capture=1]
  documentation-list-item:
    type: listItem
    textColor: '#2f3033'
    border: '1px solid #e9eced (top only)'
    padding: 24px 0px
    typography: 16px / 400 Rise
    use: Public component-documentation content row; selector surface-2::li
fonts:
  roles:
    ui: Rise
---

# Design System Inspiration of Thumbtack Thumbprint

## Overview

### Visual Theme & Atmosphere

Thumbtack helps homeowners identify, plan, and complete home projects with local professionals; its current public framing is a continuing relationship with the home rather than a one-time directory search. That practical, confidence-building premise comes through in Thumbprint, the public design-system surface captured here: a white documentation canvas, near-black readable text, a lively cyan call-to-action color, and a custom Rise typeface used in a deliberately compact hierarchy. The supplied routes are the Thumbprint home, Button v2 documentation, and tokens documentation—not the consumer marketplace, a homeowner account, or a pro workflow—so this reference records the design-system public surface only. Current company messaging describes an AI-guided experience that lets a homeowner start with a problem in text, photos, or voice and then receive guidance toward the right professional. That evolution reinforces the system’s direct, reassuring expression without converting marketplace or press language into CSS facts.

**Key characteristics:**

- White documentation surfaces anchored by #2f3033 text and #e9eced separators.
- #009fd9 is a selector-backed public Thumbprint CTA color, not a universal marketplace-product claim.
- Rise is loaded from Thumbtack’s font host and carries the observed public UI hierarchy.
- Fully rounded, dark-blue documentation buttons provide the strongest observed component geometry.
- No hover, focus, pressed, menu, dialog, toast, or form-error interaction was captured.

### Primary tasks

- Look up a component's documented specification before building it
- Search the design system from the navigation search field
- Check which typeface and weights the system specifies

### Brand Narrative

Thumbtack was founded in 2008 to connect customers with local professionals and help service businesses grow. Its public history explains the original tension simply: people need skilled local help but can struggle to find the right professional, while professionals need dependable ways to reach customers. The marketplace’s early framing centered on answering questions, receiving quotes, comparing options, and hiring with confidence.

The company’s more recent public story shifts from finding a pro for a discrete task to continuously caring for a home. The 2026 AI-powered experience describes a guided starting point—text, photos, or voice—that interprets a homeowner’s issue, gathers the information needed to clarify scope, and recommends a curated set of relevant professionals. That evolution is documented company/product context; it does not add unobserved UI states to the Thumbprint capture.

### Principles

1. **Start with the problem a homeowner can describe.** *UI implication:* let a first step be clear and plain-language rather than assuming category expertise.
2. **Build confidence through useful guidance.** *UI implication:* explain why a next step or recommendation is relevant without inventing unsupported feedback states.
3. **Match work to qualified local expertise.** *UI implication:* make practical selection criteria legible when evidence for a particular product flow exists.
4. **Treat home care as ongoing.** *UI implication:* connect recurring care information without forcing every screen into a one-time checkout metaphor.
5. **Help local businesses grow.** *UI implication:* preserve clear boundaries between homeowner and professional contexts instead of blending their requirements.

### Personas

The following are role archetypes inferred from Thumbtack’s first-party homeowner and local-professional positioning; they are not surveyed personas or synthetic-test findings.

- **Homeowner starting with an unclear issue.** Wants to describe what is happening in ordinary language and understand a sensible next step before choosing a professional.
- **Homeowner managing ongoing care.** Needs timely guidance about maintenance, repairs, and improvements across a changing home context.
- **Local service professional.** Needs a marketplace relationship that can connect relevant project demand with a sustainable business.

## Colors

### Observed public-surface values

- **Thumbprint cyan** (#009fd9): public home CTA background and the reference primary color.
- **Canvas** (#ffffff): observed solid public button and page surface.
- **Foreground** (#2f3033): repeated home, documentation, list, input, and button text.
- **Muted text** (#676d73): repeated secondary public text.
- **Hairline** (#e9eced): observed one-pixel top border on component-documentation list rows.

### Boundary

The Button v2 documentation also contains a dark #07344a / light #7cdcfd button recipe. It remains a component-local docs specimen; it is not promoted to a global product color role. The packet supplies no selector-backed focus-ring, success, warning, or general error token, so those roles are absent.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | Thumbprint’s official Product Design page says Thumbtack Rise is its primary font and is used across its product; its Typography guide identifies 400 and 700 weights. This is product/design-system context, separate from the three captured routes. |
| Live computed surface-use | Rise is the visible computed family on 358 sampled body, heading, button, input, list, and text observations. The supplied packet reports it as loaded/high with Thumbtack-hosted WOFF and WOFF2 sources. |
| Official distributed brand asset | `ThumbtackRiseVF.woff2` is served from `fonts.thumbtack.com` on the captured public surface. This verifies browser delivery for this reference, not a right to redistribute the file. |
| Declared-only | Source Code Pro and Source Code Pro Fallback have declared `@font-face` records but zero visible computed uses. They are not UI typography tokens. |
| System / unresolved | A two-use system-ui occurrence is system evidence only. It is not a Rise substitute or a Thumbtack brand-family claim. No standalone public font license was located in this pass. |

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public h1 | Rise | 40px | 700 | 44px | one Button v2 documentation heading |
| Public h2 | Rise | 24px | 700 | 32px | repeated Button v2 documentation headings |
| Public h3 | Rise | 18px | 700 | 24px | repeated Button v2 documentation headings |
| Body | Rise | 16px | 400 | 25.6px | public body and documentation content |
| Label/search | Rise | 14px | 400 | 19.6–20px | navigation, lists, and search input |

## Layout

The supplied public documentation capture clusters 4px, 8px, 16px, 24px, and 32px spacing values. The global search uses asymmetric 9px 16px 9px 12px padding, while the captured documentation primary button uses horizontal 24px padding. Documentation list rows use 24px vertical padding with a top divider. These are observed route measurements, not a claim that Thumbtack marketplace or native product screens use the same layout scale.

### Responsive Behavior

All supplied surfaces were captured at 1440x900. The packet gives desktop computed values only. No smaller viewport, collapsed navigation, touch target, reflow, or responsive Button v2 state was captured, so those behaviors remain unclaimed.

## Elevation & Depth

The representative default button, search input, and documentation list rows have no observed box shadow. No shadow token is emitted. A lack of a sampled shadow does not imply that all Thumbtack product overlays or cards are flat.

## Motion & Easing

No motion timing, easing curve, or interaction transition was captured in the supplied packet. Do not promote a motion token. If an implementation needs motion, keep it functional and brief, and respect `prefers-reduced-motion: reduce` by removing nonessential motion; this is an accessibility implementation rule, not a Thumbprint-measured easing specification.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://thumbprint.design/ , https://thumbprint.design/components/button/v2/react , https://thumbprint.design/tokens
**Tier 2 sources:** https://getdesign.md/thumbtack (attempted; no parsed result), https://styles.refero.design/?q=thumbtack (attempted; no parsed result)
**Conflicts unresolved:** none

## Components

### Documentation primary button

**Default large**
- Background: #07344a
- Text: #7cdcfd
- Border: 1px solid transparent
- Radius: 9999px
- Padding: 0px 24px
- Height: 48px
- Font: 16px / 700 / Rise
- Disabled: Separate static specimen observed with #f5f6f6 background and #b9bbbf text; no transition is claimed.
- Use: Public Button v2 primary example; selector surface-2::[data-omd-capture="63"]

### Global search input

**Small default**
- Background: transparent
- Text: #2f3033
- Radius: 4px
- Padding: 9px 16px 9px 12px
- Height: 38px
- Font: 14px / 400 / Rise
- Use: Public Thumbprint navigation search combobox; selector home::[data-omd-capture="1"]

### Documentation content row

**Separated list item**
- Text: #2f3033
- Border: 1px solid #e9eced (top only)
- Padding: 24px 0px
- Font: 16px / 400 / Rise
- Use: Public component-documentation list row; selector surface-2::li

No hover, focus, pressed, error, selected, menu, dialog, toast, or input-validation state is added: the capture reports zero interactions. The default button, input, and list geometry remains measured static evidence.

### Published component roster (45 published, none measured here)

Thumbprint publishes **45 components**, read from its own index at `https://thumbprint.design/components/` on
2026-09-19. Every host in this group serves a shell to a plain fetch, so the names come from the
rendered page in a browser. No value, state or geometry below is asserted by this reference.

Accordion, Action Sheet, Alert, Alert Banner, Avatar, Button, Button Row, Calendar, Carousel, Checkbox, Chip, Date Picker, Dropdown, Fab, Form Note, Grid, Horizontal Rule, Icon Button, Image, Input Row, Label, Link, List, Loader Dots, Longread, Modal, Modal Curtain, Navigation Bar, Partial Sheet, Pill, Popover, Radio, Segmented Control, Service Card, Shadow Card, Slider, Star Rating, Switch, Tabs, Text Area, Text Input, Toast, Tooltip, Type, Wrap

### States

These are content guidelines derived from the documented service context, not observed Thumbprint component state tokens.

| Category | Guidance |
|---|---|
| Empty — no project yet | Invite the homeowner to describe a problem or goal. |
| Empty — no matching pro | State the availability boundary plainly and offer a next search or timing choice when supported. |
| Loading — project understanding | Explain that the system is clarifying the project, not that a match is guaranteed. |
| Loading — pro options | Keep progress language practical and avoid unobserved animated treatments. |
| Error — incomplete description | Ask only for the missing project detail needed to continue. |
| Error — unavailable match | Explain the constraint without implying a hidden retry result. |
| Error — service interruption | State the interruption and a safe retry path in direct language. |
| Success — project clarified | Confirm what was understood and present the verified next step. |
| Success — pro connection | Confirm the connection without overpromising project completion. |
| Skeleton | Use only if a measured product surface establishes a skeleton treatment; none is captured here. |
| Disabled | The Button v2 docs contain a separate static disabled specimen; do not infer timing or hover behavior. |

## Do's and Don'ts

### Do

- Use Rise only where the exact Thumbtack-hosted face is licensed and available.
- Preserve the observed distinction between the cyan home CTA and the dark Button v2 documentation specimen.
- Use 9999px radius only for the measured documentation button recipe; retain the 4px search-input control radius.
- Keep a 24px vertically padded documentation row tied to its divider-led content context.

### Don't

- Do not render system-ui or Source Code Pro while labeling it Rise.
- Do not treat #07344a and #7cdcfd as global marketplace color roles.
- Do not invent hover, focus, pressed, selected, validation, menu, dialog, toast, or loading component states.
- Do not generalize public Thumbprint documentation measurements to signed-in homeowner, pro, checkout, or mobile-app surfaces.

## Voice & Tone

Official Thumbtack language is practical, confidence-building, and homeowner-centered. Its current AI announcement favors describing a home problem naturally, clarifying the work, and choosing an appropriate pro; the company’s career messaging frames the work around peace of mind for homeowners and growth for local businesses. These are narrative and voice sources, not component-token evidence.

| Context | Evidence-backed direction |
|---|---|
| Project start | Begin with the homeowner’s real problem, question, or goal. |
| Guidance | Explain what happens next in direct, confidence-building terms. |
| Pro relationship | Describe fit through expertise, availability, and practical project needs. |
| Home care | Prefer ongoing-care language to a one-off transaction metaphor. |

**Public samples**

- “the one app for your home” (official 2024 fact sheet).
- “helping millions of people confidently care for and improve their homes” (official 2026 announcement).
- “help homeowners and home professionals accomplish more” (official 2026 announcement).

## Agent Prompt Guide

- For a public Thumbprint documentation primary action, use #07344a background, #7cdcfd text, 9999px radius, 0px 24px padding, 48px height, and 16px / 700 Rise; keep the default and disabled specimen distinction factual.
- For the observed public navigation search field, use transparent background, #2f3033 text, 4px radius, 9px 16px 9px 12px padding, 38px height, and 14px / 400 Rise.
- Use #009fd9 as the observed public Thumbprint home CTA color, not as a guarantee for consumer marketplace flows.
- Keep Source Code Pro declared-only and system-ui system-only; neither may stand in for Rise.

## Governance

### Known Gaps

- **Contrast, `global-search`.** Text `#2f3033` on `#00000000` measures 1.59:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
