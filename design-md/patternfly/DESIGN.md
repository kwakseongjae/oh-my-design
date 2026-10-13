---
name: PatternFly
colors:
  primary: '#0066cc'
  foreground: '#151515'
  body: '#4d4d4d'
  canvas: '#ffffff'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated body, list-item, and default control text on all three supplied PatternFly.org surfaces.
  display-title:
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.3
    use: Observed H1 on the supplied public PatternFly.org surfaces.
rounded:
  none: 0px
  control: 6px
  card: 16px
spacing:
  xs: 4
  sm: 8
  md: 16
  lg: 24
components:
  primary-action:
    type: button
    backgroundColor: '#0066cc'
    textColor: '#ffffff'
    rounded: 999px
    padding: 8px 24px
    typography: 14/400 Red Hat Text
    states: 'Observed default only; the supplied artifact has interactionCount: 0, so no hover, focus, pressed, disabled, or error value is specified.'
    use: home::[data-omd-capture="2"] — selector-backed pf-v6-c-button pf-m-primary action on the public home.
  featured-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#151515'
    rounded: 16px
    typography: 14/400 Red Hat Text
    use: home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home.
fonts:
  roles:
    ui: Red Hat Text
    display: Red Hat Display
---

# Design System Inspiration of PatternFly

## Overview

### Visual Theme & Atmosphere

PatternFly is Red Hat’s sponsored, open-source design system for teams building consistent, usable enterprise software. Its recognizable expression is less a campaign aesthetic than a deliberately practical interface language: legible Red Hat typefaces, dark text on white surfaces, restrained blue actions, compact spacing, and controls that make dense software easier to scan. The official project frames its purpose as helping designers and developers share standards, guidance, and working code for accessible enterprise products, while remaining open to users and contributors beyond Red Hat. [About PatternFly](https://www.patternfly.org/get-started/about-patternfly/)

The supplied capture is limited to the PatternFly public home, button documentation, and color-foundation documentation. Those are design-system/documentation surfaces, not evidence for an individual Red Hat product or an authenticated operational console. Current evolution also matters: PatternFly 6 has expanded its theming architecture, including a Default theme, high-contrast options, and the Red Hat-aligned Project Felt theme. The values below describe the observed Default-style public documentation surface only; Project Felt’s red accents, pill treatment, glass layer, and unobserved themes are not silently merged into these tokens. [Theming](https://staging.patternfly.org/foundations-and-styles/theming/) · [Release highlights](https://www.patternfly.org/get-started/release-highlights)

**Key Characteristics:**

- A documentation-first enterprise system with open-source and accessibility commitments
- Blue `#0066cc` for observed primary actions and links, with dark `#151515` content ink
- Red Hat Text for repeated interface/body text and Red Hat Display for observed display headings
- Compact 4/8/16/24px spacing clusters, 6px controls, and 16px featured cards
- Public documentation components only; no product-console workflow, form, toast, or state system inferred

### Primary tasks

- Find a component example and carry it through to implementation
- Keep an enterprise workflow consistent using the documented foundations and patterns
- Submit a feature request, design issue, or documentation update
- Upgrade across a major release using the published codemods
- Choose a theme, whether Default, high contrast, or Project Felt

### Brand Narrative

PatternFly is presented by its maintainers as an open-source design system for consistent, usable enterprise software. It is sponsored and maintained by Red Hat, yet its documentation explicitly invites wider use and contribution. That relationship explains why the system reads as shared infrastructure: guidance, component examples, code, and accessibility resources are organized to reduce repeated work across cross-functional product teams. [About PatternFly](https://www.patternfly.org/get-started/about-patternfly/)

The current story is one of controlled evolution rather than a replacement of the system’s enterprise purpose. PatternFly 6 adds a token-based theming architecture and optional visual modes; Project Felt brings a Red Hat-aligned option while the Default theme remains available. The source material does not provide a named executive quotation for this reference, so none is fabricated. [Theming](https://staging.patternfly.org/foundations-and-styles/theming/) · [Release highlights](https://www.patternfly.org/get-started/release-highlights)

### Principles

1. **Make enterprise work consistent.**
   *UI implication:* Reuse documented components and foundations before creating a competing local pattern.
2. **Keep design and code connected.**
   *UI implication:* Pair visual guidance with implementation examples and accessibility information where the source provides them.
3. **Make contribution legible.**
   *UI implication:* Name the review or request path instead of implying that a change is automatically accepted.
4. **Evolve through explicit versions and themes.**
   *UI implication:* Treat Default, Project Felt, high contrast, and glass as named modes; do not blend their values without an explicit theme decision.

### Personas

*These are workflow archetypes derived from the official audience description, not research-validated people or synthetic satisfaction evidence.*

- **Enterprise front-end developer:** Looks for production-ready React or HTML guidance and needs a clear path from a component example to implementation.
- **Product designer:** Uses foundations, components, and patterns to maintain consistency while making an enterprise workflow understandable.
- **Open-source contributor:** Brings a feature request, design issue, code change, or documentation update through the project’s public contribution channels.

## Colors

### Observed public documentation surfaces

- **Primary blue** (`#0066cc`): observed as the filled primary-action background and as repeated public link/control ink.
- **Foreground** (`#151515`): repeated main text and border value across the supplied home, button, and color documentation surfaces.
- **Body text** (`#4d4d4d`): repeated secondary/navigation control text and border value across all supplied surfaces.
- **Canvas** (`#ffffff`): repeated public-surface and component background.

### Boundary

The supplied button page also contains measured danger, warning, plain, link, and secondary examples. Those values are documentation examples, but only the selector-backed primary default is promoted as a reusable component token here. No capture establishes global semantic success, warning, error, dark-mode, high-contrast, Project Felt, or glass-mode tokens; those unresolved groups are omitted rather than filled with plausible values.

## Typography

### Evidence classes

- **Live computed surface-use:** **Red Hat Text** is loaded with high confidence on 349 captured elements and is the repeated body, list-item, button, and card family. **Red Hat Display** is loaded with high confidence on 12 captured heading/text elements. Both have matching PatternFly-hosted WOFF2 source URLs in the supplied artifact.
- **Official product-use:** PatternFly’s typography documentation names Red Hat Display for larger headings and Red Hat Text for smaller text, subheadings, and body copy; it documents Red Hat Mono for tabular/code use. [Typography](https://www.patternfly.org/foundations-and-styles/typography/)
- **Declared-only:** **Red Hat Mono**, **Font Awesome 5 Free**, and **pf-v6-pficon** have `@font-face` declarations in the supplied packet but no visible-use match. They are useful context, not UI-family tokens.
- **License boundary:** the official typography page links to a font download but the direct link returned a Red Hat contact form in this research pass. No license statement is asserted or promoted from that failed retrieval.

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|------|------|--------|-------------|------------------|
| Display title | 36px | 600 | 46.8px | Observed public-site H1 |
| Standard body/control | 14px | 400 | 21px | Repeated across all three supplied surfaces |
| Official body reference | 14px | 400 | 1.5 | Official default-body guidance; consistent with the live measurement |

Do not substitute a system font and label it Red Hat Text or Red Hat Display. Likewise, do not promote declared-only Red Hat Mono or icon fonts to the documented UI family without visible-use evidence.

## Layout

The 1440×900 supplied capture shows documentation and promotional content rather than an enterprise application grid. Measured spacing clusters at 4, 8, 16, and 24px recur in captured styles. Use those only as the observed public-surface rhythm; no application-column count, responsive grid, sidebar width, data-table density, or form layout was captured.

### Responsive Behavior

Only a 1440×900 viewport is present in the supplied packet. No breakpoint, mobile navigation, touch-target policy, responsive reflow, or safe-area behavior was observed, so each is omitted.

## Elevation & Depth

The primary action and featured card representatives use no box shadow. A separate public-home feedback button has a measured shadow, but it is a different selector and is not generalized into an elevation scale. No modal, popover, drawer, toast, or layered application surface is tokenized.

## Motion & Easing

No motion duration, easing curve, transition, or reduced-motion behavior was measured in the supplied packet. PatternFly documentation and release notes discuss component animation and accessibility work, but those references do not license an unmeasured timing token in this canonical record. Preserve user motion preferences in any implementation and source exact values from the relevant official component or motion guidance before adding them.

## Components

### Public-home action

**Primary action — observed default**

- Background: #0066cc
- Text: #ffffff
- Radius: 999px
- Padding: 8px 24px
- Font: 14px / 400 / Red Hat Text
- Use: `home::[data-omd-capture="2"]`, an anchor with `pf-v6-c-button pf-m-primary` on the supplied public home; 37px rendered height.

### Public-home featured content

**Featured card — observed default**

- Background: #ffffff
- Text: #151515
- Radius: 16px
- Font: 14px / 400 / Red Hat Text
- Use: `home::#featured-blog-post-1`, a selector-backed `pf-v6-c-card pf-m-clickable` on the supplied public home.

The artifact records 27 component variants but zero interaction snapshots and zero interaction kinds. Therefore this reference preserves only default measured geometry; it does not claim hover, focus, pressed, disabled, error, selected, or animated values. Links and rows that were not captured as button semantics are not reclassified as button components.

### Published component roster (70 not measured here)

PatternFly publishes **72 components**, enumerated and counted by its own components index
(`https://www.patternfly.org/components/overview/`, read 2026-09-19), whose "Explore components"
gallery is labelled "72 items". Two of them are measured above — **Button** and **Card**, as the
`pf-v6-c-button pf-m-primary` primary action and the `pf-v6-c-card pf-m-clickable` featured card on
the supplied public home — and each in a single default variant only. The remaining 70 names carry
no asserted value here: no geometry, no color, no state.

About modal, Accordion, Action list, Alert, Avatar, Back to top, Backdrop, Background image, Badge, Banner, Brand, Breadcrumb, Button, Card, Chip, Clipboard copy, Code block, Code editor, Compass, Content, Data list, Description list, Divider, Drag and drop, Drawer, Dual list selector, Empty state, Expandable section, Helper text, Hint, Icon, Inline edit, Input group, Jump links, Label, List, Login page, Masthead, Modal, Navigation, Notification badge, Notification drawer, Number input, Overflow menu, Page, Pagination, Panel, Password generator, Password strength, Popover, Progress, Progress stepper, Search input, Sidebar, Simple list, Skeleton, Skip to content, Slider, Spinner, Switch, Table, Tabs, Text input group, Tile, Timestamp, Title, Toggle group, Toolbar, Tooltip, Tree view, Truncate, Wizard

The list is flat and alphabetical because the index publishes it flat: one gallery, no category
headings, no grouping. Names are given as the index renders them.

#### What is excluded from the roster, and why

PatternFly separates **components** from **patterns** and publishes a second index at
`https://www.patternfly.org/patterns/overview`, labelled "11 items". Nine of those eleven are
patterns only and are therefore absent above: Actions, Bulk selection, Card view, Component usage
and behavior, Dashboard, Filters, Primary-detail, Right-to-left, Status and severity. The other two
— **Password generator** and **Password strength** — are published in *both* indexes, under
`/components/` and `/patterns/` alike. They are kept in the roster because the components index
cards them; the duplication is the host's, not this reference's.

Six further paths sit under `/components/` without being carded by the index. Five are sidebar
families whose own path returns 404 and whose leaves are documented one level down: **Charts**,
**Date and time**, **File upload**, **Forms**, **Menus**. The sixth is **Hero**, which resolves and
is marked Beta in the sidebar but is not one of the 72 cards. None of the six is added to the
roster, and no family leaf is enumerated: the index is the source cited here, and expanding a
family or promoting an uncarded path would be structure this reference invented rather than
structure PatternFly publishes.

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.patternfly.org/; https://www.patternfly.org/components/button/; https://www.patternfly.org/design-foundations/colors/; https://www.patternfly.org/get-started/about-patternfly/; https://www.patternfly.org/foundations-and-styles/typography/; https://staging.patternfly.org/foundations-and-styles/theming/; https://www.patternfly.org/get-started/release-highlights
**Tier 2 sources:** https://getdesign.md/patternfly (attempted; no usable record returned); https://styles.refero.design/?q=PatternFly (attempted; no usable record returned)
**Conflicts unresolved:** none

### States

| Category | Documented handling boundary |
|----------|------------------------------|
| Empty | Use the component/pattern guidance for the specific product context; no empty-state geometry was captured. |
| Empty — filtered | Describe the filter condition and recovery action; do not borrow a state style from an uncaptured component. |
| Loading | Use the relevant official component guidance; no loading visual was observed in this packet. |
| Loading — long task | Explain ongoing work and preserve user control where the product pattern documents it. |
| Error | Identify the failed task and next recovery step; no error color or layout is tokenized here. |
| Error — permission | Explain the access boundary without presenting it as a system fault. |
| Error — unavailable service | State that the service is unavailable and provide a retry or support path only when the product supports one. |
| Success | Confirm the completed task in the relevant product context; no success token was observed. |
| Skeleton | Do not imply a particular skeleton geometry from this desktop documentation capture. |
| Disabled | Do not infer disabled colors, opacity, or cursor treatment from the default-only component observations. |

## Do's and Don'ts

### Do

- Keep observed Default-theme documentation values separate from Project Felt, high-contrast, dark, and glass themes.
- Load Red Hat Text and Red Hat Display when applying the measured typography.
- Use the primary-action geometry only in a source domain where the selector-backed public default is relevant.
- Preserve the distinction between public PatternFly documentation and downstream product interfaces.

### Don't

- Do not treat `#0066cc` as proof of a universal Red Hat product CTA.
- Do not invent control states from a packet with `interactionCount: 0`.
- Do not call Red Hat Mono, Font Awesome, or pficon a loaded UI font in this capture.
- Do not convert the featured public-home card into a dashboard/card system without a product-surface observation.

## Voice & Tone

PatternFly’s official voice is practical, inclusive, and collaborative: it explains standards for enterprise work, names the consequence for a product team, and points to a usable next action. This is a documentation voice, not evidence of every Red Hat product’s microcopy.

| Do | Don't |
|----|-------|
| State the object, constraint, and outcome plainly. | Use generic innovation or transformation claims. |
| Explain how a component supports an accessible workflow. | Promise behavior that has not been documented. |
| Invite contribution through a concrete route. | Pretend that community review is an automatic approval. |

- **Official stance, paraphrased:** Build consistent and usable enterprise software with shared standards and tools. [About](https://www.patternfly.org/get-started/about-patternfly/)
- **Official stance, paraphrased:** Components connect foundations, patterns, and extensions. [Components overview](https://www.patternfly.org/components/overview/)
- **Official stance, paraphrased:** Major releases provide upgrade guidance and codemods for breaking changes. [About](https://www.patternfly.org/get-started/about-patternfly/)

## Agent Prompt Guide

Use PatternFly as an enterprise-documentation reference, not as authority for an uncaptured Red Hat product. Start with white canvas, `#151515` content ink, `#4d4d4d` secondary text, and source-backed `#0066cc` actions. Load Red Hat Text and Red Hat Display rather than substituting a system face. Keep the 4/8/16/24px rhythm and use the measured pill primary action or 16px featured card only where their public-home provenance is appropriate. Do not invent semantic states, responsive behavior, elevation scales, or Project Felt styling.
