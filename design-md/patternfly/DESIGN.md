---
id: patternfly
name: PatternFly
country: US
category: developer-tools
homepage: https://www.patternfly.org/
primary_color: "#0066cc"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=patternfly.org&sz=128"
verified: "2026-07-14"
omd: 0.1
ds:
  name: PatternFly
  url: https://www.patternfly.org/
  type: system
  description: "Red Hat-sponsored open-source design system for consistent, accessible enterprise products."
verification_v2:
  schema: 2
  checked: "2026-07-14"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.patternfly.org/", inspected: "2026-07-13" }
    - { id: button-docs, kind: documentation, url: "https://www.patternfly.org/components/button/", inspected: "2026-07-13" }
    - { id: color-docs, kind: documentation, url: "https://www.patternfly.org/design-foundations/colors/", inspected: "2026-07-13" }
    - { id: typography-docs, kind: documentation, url: "https://www.patternfly.org/foundations-and-styles/typography/", inspected: "2026-07-14" }
    - { id: about-docs, kind: documentation, url: "https://www.patternfly.org/get-started/about-patternfly/", inspected: "2026-07-14" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.patternfly.org/", captured: "2026-07-13" }
    - { id: button-live, kind: product-surface, url: "https://www.patternfly.org/components/button/", captured: "2026-07-13" }
    - { id: color-live, kind: product-surface, url: "https://www.patternfly.org/design-foundations/colors/", captured: "2026-07-13" }
    - { id: about-official, kind: official-doc, url: "https://www.patternfly.org/get-started/about-patternfly/", captured: "2026-07-14" }
    - { id: typography-official, kind: official-doc, url: "https://www.patternfly.org/foundations-and-styles/typography/", captured: "2026-07-14" }
    - { id: theming-official, kind: official-doc, url: "https://staging.patternfly.org/foundations-and-styles/theming/", captured: "2026-07-14" }
    - { id: releases-official, kind: official-doc, url: "https://www.patternfly.org/get-started/release-highlights", captured: "2026-07-14" }
  conflicts: []
  claims:
    "tokens.colors.primary": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.body": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.family.display": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.body.use": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.display-title.size": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.display-title.weight": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.display-title.lineHeight": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.typography.display-title.use": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.spacing.xs": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.spacing.sm": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.spacing.md": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.spacing.lg": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.rounded.none": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.rounded.control": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.rounded.card": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.type": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.bg": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.fg": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.radius": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.padding": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.font": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.states": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.primary-action.use": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.type": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.bg": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.fg": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.radius": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.font": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
    "tokens.components.featured-card.use": { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-13" }
tokens:
  source: reconciled
  extracted: "2026-07-13"
  colors:
    primary: "#0066cc"
    foreground: "#151515"
    body: "#4d4d4d"
    canvas: "#ffffff"
  typography:
    family: { ui: "Red Hat Text", display: "Red Hat Display" }
    body: { size: 14, weight: 400, lineHeight: 1.5, use: "Repeated body, list-item, and default control text on all three supplied PatternFly.org surfaces." }
    display-title: { size: 36, weight: 600, lineHeight: 1.3, use: "Observed H1 on the supplied public PatternFly.org surfaces." }
  spacing: { xs: 4, sm: 8, md: 16, lg: 24 }
  rounded: { none: 0, control: 6, card: 16 }
  components_harvested: true
  components:
    primary-action: { type: button, bg: "#0066cc", fg: "#ffffff", radius: 999, padding: "8px 24px", font: "14/400 Red Hat Text", states: "Observed default only; the supplied artifact has interactionCount: 0, so no hover, focus, pressed, disabled, or error value is specified.", use: "home::[data-omd-capture=\"2\"] — selector-backed pf-v6-c-button pf-m-primary action on the public home." }
    featured-card: { type: card, bg: "#ffffff", fg: "#151515", radius: 16, font: "14/400 Red Hat Text", use: "home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home." }
---

# Design System Inspiration of PatternFly

## 1. Visual Theme & Atmosphere

PatternFly is Red Hat’s sponsored, open-source design system for teams building consistent, usable enterprise software. Its recognizable expression is less a campaign aesthetic than a deliberately practical interface language: legible Red Hat typefaces, dark text on white surfaces, restrained blue actions, compact spacing, and controls that make dense software easier to scan. The official project frames its purpose as helping designers and developers share standards, guidance, and working code for accessible enterprise products, while remaining open to users and contributors beyond Red Hat. [About PatternFly](https://www.patternfly.org/get-started/about-patternfly/)

The supplied capture is limited to the PatternFly public home, button documentation, and color-foundation documentation. Those are design-system/documentation surfaces, not evidence for an individual Red Hat product or an authenticated operational console. Current evolution also matters: PatternFly 6 has expanded its theming architecture, including a Default theme, high-contrast options, and the Red Hat-aligned Project Felt theme. The values below describe the observed Default-style public documentation surface only; Project Felt’s red accents, pill treatment, glass layer, and unobserved themes are not silently merged into these tokens. [Theming](https://staging.patternfly.org/foundations-and-styles/theming/) · [Release highlights](https://www.patternfly.org/get-started/release-highlights)

**Key Characteristics:**

- A documentation-first enterprise system with open-source and accessibility commitments
- Blue `#0066cc` for observed primary actions and links, with dark `#151515` content ink
- Red Hat Text for repeated interface/body text and Red Hat Display for observed display headings
- Compact 4/8/16/24px spacing clusters, 6px controls, and 16px featured cards
- Public documentation components only; no product-console workflow, form, toast, or state system inferred

## 2. Color Palette & Roles

### Observed public documentation surfaces

- **Primary blue** (`#0066cc`): observed as the filled primary-action background and as repeated public link/control ink.
- **Foreground** (`#151515`): repeated main text and border value across the supplied home, button, and color documentation surfaces.
- **Body text** (`#4d4d4d`): repeated secondary/navigation control text and border value across all supplied surfaces.
- **Canvas** (`#ffffff`): repeated public-surface and component background.

### Boundary

The supplied button page also contains measured danger, warning, plain, link, and secondary examples. Those values are documentation examples, but only the selector-backed primary default is promoted as a reusable component token here. No capture establishes global semantic success, warning, error, dark-mode, high-contrast, Project Felt, or glass-mode tokens; those unresolved groups are omitted rather than filled with plausible values.

## 3. Typography Rules

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

## 4. Component Stylings

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

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.patternfly.org/; https://www.patternfly.org/components/button/; https://www.patternfly.org/design-foundations/colors/; https://www.patternfly.org/get-started/about-patternfly/; https://www.patternfly.org/foundations-and-styles/typography/; https://staging.patternfly.org/foundations-and-styles/theming/; https://www.patternfly.org/get-started/release-highlights
**Tier 2 sources:** https://getdesign.md/patternfly (attempted; no usable record returned); https://styles.refero.design/?q=PatternFly (attempted; no usable record returned)
**Conflicts unresolved:** none

## 5. Layout Principles

The 1440×900 supplied capture shows documentation and promotional content rather than an enterprise application grid. Measured spacing clusters at 4, 8, 16, and 24px recur in captured styles. Use those only as the observed public-surface rhythm; no application-column count, responsive grid, sidebar width, data-table density, or form layout was captured.

## 6. Depth & Elevation

The primary action and featured card representatives use no box shadow. A separate public-home feedback button has a measured shadow, but it is a different selector and is not generalized into an elevation scale. No modal, popover, drawer, toast, or layered application surface is tokenized.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

Only a 1440×900 viewport is present in the supplied packet. No breakpoint, mobile navigation, touch-target policy, responsive reflow, or safe-area behavior was observed, so each is omitted.

## 9. Agent Prompt Guide

Use PatternFly as an enterprise-documentation reference, not as authority for an uncaptured Red Hat product. Start with white canvas, `#151515` content ink, `#4d4d4d` secondary text, and source-backed `#0066cc` actions. Load Red Hat Text and Red Hat Display rather than substituting a system face. Keep the 4/8/16/24px rhythm and use the measured pill primary action or 16px featured card only where their public-home provenance is appropriate. Do not invent semantic states, responsive behavior, elevation scales, or Project Felt styling.

## 10. Voice & Tone

PatternFly’s official voice is practical, inclusive, and collaborative: it explains standards for enterprise work, names the consequence for a product team, and points to a usable next action. This is a documentation voice, not evidence of every Red Hat product’s microcopy.

| Do | Don't |
|----|-------|
| State the object, constraint, and outcome plainly. | Use generic innovation or transformation claims. |
| Explain how a component supports an accessible workflow. | Promise behavior that has not been documented. |
| Invite contribution through a concrete route. | Pretend that community review is an automatic approval. |

- **Official stance, paraphrased:** Build consistent and usable enterprise software with shared standards and tools. [About](https://www.patternfly.org/get-started/about-patternfly/)
- **Official stance, paraphrased:** Components connect foundations, patterns, and extensions. [Components overview](https://www.patternfly.org/components/overview/)
- **Official stance, paraphrased:** Major releases provide upgrade guidance and codemods for breaking changes. [About](https://www.patternfly.org/get-started/about-patternfly/)

## 11. Brand Narrative

PatternFly is presented by its maintainers as an open-source design system for consistent, usable enterprise software. It is sponsored and maintained by Red Hat, yet its documentation explicitly invites wider use and contribution. That relationship explains why the system reads as shared infrastructure: guidance, component examples, code, and accessibility resources are organized to reduce repeated work across cross-functional product teams. [About PatternFly](https://www.patternfly.org/get-started/about-patternfly/)

The current story is one of controlled evolution rather than a replacement of the system’s enterprise purpose. PatternFly 6 adds a token-based theming architecture and optional visual modes; Project Felt brings a Red Hat-aligned option while the Default theme remains available. The source material does not provide a named executive quotation for this reference, so none is fabricated. [Theming](https://staging.patternfly.org/foundations-and-styles/theming/) · [Release highlights](https://www.patternfly.org/get-started/release-highlights)

## 12. Principles

1. **Make enterprise work consistent.**
   *UI implication:* Reuse documented components and foundations before creating a competing local pattern.
2. **Keep design and code connected.**
   *UI implication:* Pair visual guidance with implementation examples and accessibility information where the source provides them.
3. **Make contribution legible.**
   *UI implication:* Name the review or request path instead of implying that a change is automatically accepted.
4. **Evolve through explicit versions and themes.**
   *UI implication:* Treat Default, Project Felt, high contrast, and glass as named modes; do not blend their values without an explicit theme decision.

## 13. Personas

*These are workflow archetypes derived from the official audience description, not research-validated people or synthetic satisfaction evidence.*

- **Enterprise front-end developer:** Looks for production-ready React or HTML guidance and needs a clear path from a component example to implementation.
- **Product designer:** Uses foundations, components, and patterns to maintain consistency while making an enterprise workflow understandable.
- **Open-source contributor:** Brings a feature request, design issue, code change, or documentation update through the project’s public contribution channels.

## 14. States

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

## 15. Motion & Easing

No motion duration, easing curve, transition, or reduced-motion behavior was measured in the supplied packet. PatternFly documentation and release notes discuss component animation and accessibility work, but those references do not license an unmeasured timing token in this canonical record. Preserve user motion preferences in any implementation and source exact values from the relevant official component or motion guidance before adding them.
