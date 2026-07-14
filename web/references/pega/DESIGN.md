---
id: pega
name: Pega UX Design System
country: US
category: saas
homepage: "https://design.pega.com/"
primary_color: "#1a3a5c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pega.com&sz=128"
verified: "2026-07-13"
omd: "0.1"
ds:
  name: Pega UX Design System
  url: "https://design.pega.com/"
  type: system
  description: Pega's public, prescribed system for enterprise application workflows.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: design-system, url: "https://design.pega.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: design-system, url: "https://design.pega.com/", inspected: "2026-07-13" }
    - { id: surface-3, kind: design-system, url: "https://design.pega.com/components/", inspected: "2026-07-13" }
  sources:
    - { id: pega-ui-home, kind: product-surface, url: "https://design.pega.com/", captured: "2026-07-13" }
    - { id: pega-components, kind: official-doc, url: "https://design.pega.com/components/", captured: "2026-07-13" }
    - { id: pega-design-resources, kind: brand-asset, url: "https://design.pega.com/resources/design-resources/", captured: "2026-07-13" }
    - { id: roboto-flex-license, kind: license, url: "https://github.com/googlefonts/roboto-flex", captured: "2026-07-13" }
  claims:
    "tokens.colors.header": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.action": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.accent-weak": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.family.ui": { surface_id: home, source_id: pega-ui-home, method: computed-style-and-FontFaceSet, captured: "2026-07-13" }
    "tokens.typography.heading.size": { surface_id: surface-3, source_id: pega-components, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.heading.weight": { surface_id: surface-3, source_id: pega-components, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.heading.lineHeight": { surface_id: surface-3, source_id: pega-components, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.size": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.weight": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.typography.body.lineHeight": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.version-button-y": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.version-button-x": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.search-input-x": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.dark-action-y": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.spacing.dark-action-x": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.version-button": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.dark-action": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.rounded.search-input": { surface_id: home, source_id: pega-ui-home, method: computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.type": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.bg": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.fg": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.border": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.radius": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.height": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.padding": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.font": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.dark-link-action.states": { surface_id: home, source_id: pega-ui-home, method: supplied-interaction-summary, captured: "2026-07-13" }
    "tokens.components.dark-link-action.use": { surface_id: home, source_id: pega-ui-home, method: selector-and-classname, captured: "2026-07-13" }
    "tokens.components.header-search.type": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.bg": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.fg": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.radius": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.height": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.padding": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.font": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.header-search.states": { surface_id: home, source_id: pega-ui-home, method: supplied-interaction-summary, captured: "2026-07-13" }
    "tokens.components.header-search.use": { surface_id: home, source_id: pega-ui-home, method: selector-and-input-type, captured: "2026-07-13" }
    "tokens.components.menu-row.type": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.menu-row.fg": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.menu-row.height": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.menu-row.font": { surface_id: home, source_id: pega-ui-home, method: selector-backed-computed-style, captured: "2026-07-13" }
    "tokens.components.menu-row.use": { surface_id: home, source_id: pega-ui-home, method: selector-and-role, captured: "2026-07-13" }
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Only the supplied public Pega UX Design System surfaces are tokenized; corporate and authenticated-product UI are outside this evidence bundle."
  colors:
    header: "#1a3a5c"
    action: "#03102e"
    canvas: "#ffffff"
    foreground: "#050505"
    accent: "#0b6dd3"
    accent-weak: "#e8f3fb"
  typography:
    family: { ui: "Roboto Flex" }
    heading: { size: 38.4, weight: 500, lineHeight: "48px" }
    body: { size: 16, weight: 400, lineHeight: "24.64px" }
  spacing: { version-button-y: 6, version-button-x: 12, search-input-x: 12, dark-action-y: 16, dark-action-x: 32 }
  rounded: { version-button: 2, dark-action: 32, search-input: 0 }
  components_harvested: true
  components:
    dark-link-action: { type: button, bg: "#03102e", fg: "#ffffff", border: "1px solid #ffffff", radius: "32px", height: "59px", padding: "16px 32px", font: "16px / 700 / Roboto Flex", states: "default observed only; interaction capture reported 0", use: "public design-system link with explicit link-as-button class" }
    header-search: { type: input, bg: "rgba(255, 255, 255, 0.14)", fg: "#ffffff", radius: "0px", height: "32px", padding: "0px 12px", font: "14px / 400 / Roboto Flex", states: "default observed only; interaction capture reported 0", use: "public design-system search input" }
    menu-row: { type: listItem, fg: "#050505", height: "42px", font: "16px / 400 / Roboto Flex", use: "public design-system menu row" }
---

# Design System Inspiration of Pega UX Design System

## 1. Visual Theme & Atmosphere

Pega is an enterprise AI decisioning and workflow-automation company whose public UX system is built for people completing consequential, guided work. The system’s recognizable expression is deliberately prescribed rather than a loose sticker sheet: it directs teams toward pre-built workflows, familiar patterns, and reduced interface choice so that attention can stay on business logic, accuracy, and progress. In the supplied Pega UX System surfaces, a deep blue header, crisp white canvas, Roboto Flex, compact utility controls, and a single large pill-shaped action create a calm but operationally direct document experience. Pega’s corporate story has evolved from long-running AI and automation work toward its current enterprise-transformation position; its design-system documentation likewise says Constellation is now the default name and direction for the same system.

**Key characteristics:**
- Deep header blue `#1a3a5c` paired with white `#ffffff` utility text.
- A dark `#03102e` link styled as a 59px, 32px-radius primary action in the captured public system home.
- Roboto Flex is both loaded on the supplied surfaces and named in Pega’s official UX System ’25 design resources.
- Current web geometry is limited to Pega’s public design-system documentation, not Pega corporate marketing or an authenticated enterprise application.

## 2. Color Palette & Roles

### Public Pega UX System surface roles

- **Header** (`#1a3a5c`): measured background of the public design-system masthead.
- **Action** (`#03102e`): measured fill of the explicit `link-as-button` action on the public home surface.
- **Canvas** (`#ffffff`): measured page background and text-on-dark pairing.
- **Foreground** (`#050505`): measured dark menu and body text.
- **Accent** (`#0b6dd3`): measured blue foreground in a public-home link sample.
- **Accent Weak** (`#e8f3fb`): measured pale-blue background in that same public-home link sample.

The observed palette is a documentation-surface record. It does not establish Pega corporate campaign colors or authenticated-product semantic colors.

## 3. Typography Rules

### Official product-use and live surface-use

Roboto Flex is the loaded, high-confidence family across 184 visible observations in the supplied Pega UX System pages, including body text, headings, buttons, inputs, cards, and menu rows. The Pega UX System ’25 design-kit resource also names “Roboto Flex” as its font family. The measured public documentation values retained as reusable reference points are a 38.4px / 500 / 48px component-page heading and 16px / 400 / 24.64px body text.

### Official distributed design asset

Pega’s design-resources page links its Figma kit, icon library, and Roboto Flex family. This confirms the family as a Pega UX System asset; it does not transfer a Pega project asset licence to another project.

### Licence boundary

The Roboto Flex project publishes its fonts under the SIL Open Font License 1.1. That licence is typeface context, separate from Pega’s own application assets and from this reference’s measured web usage.

### Declared-only and unresolved

DM Sans, JetBrains Mono, and Source Serif 4 were declared in the captured CSS but had zero visible uses. They are not promoted to a UI token. System stacks such as `-apple-system` and Arial were also observed, but are treated as runtime fallbacks rather than Pega brand families.

## 4. Components

### Public dark link action

**Default observed**
- Background: `#03102e`
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: `32px`
- Height: `59px`
- Padding: `16px 32px`
- Font: `16px / 700 / Roboto Flex`
- States: default observed only; interaction capture reported 0
- Use: public design-system link with explicit `link-as-button` class

### Header search input

**Default observed**
- Background: `rgba(255, 255, 255, 0.14)`
- Text: `#ffffff`
- Radius: `0px`
- Height: `32px`
- Padding: `0px 12px`
- Font: `14px / 400 / Roboto Flex`
- States: default observed only; interaction capture reported 0
- Use: public design-system search input

### Menu row

**Default observed**
- Text: `#050505`
- Height: `42px`
- Font: `16px / 400 / Roboto Flex`
- Use: public design-system menu row

The menu item is retained as `listItem`: the supplied evidence records a row/menuitem, not button semantics. No hover, focus, pressed, disabled, error, or selection styling is asserted because the bundle records zero interaction actions and zero observed states.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://design.pega.com/` (supplied public Pega UX System computed-style and FontFaceSet evidence), `https://design.pega.com/components/` (supplied public components-route evidence), `https://design.pega.com/resources/design-resources/` (official design assets and Roboto Flex confirmation), `https://github.com/googlefonts/roboto-flex` (Roboto Flex licence context)
**Tier 2 sources:** `https://getdesign.md/pega` (attempted through built-in web open; safe-open error, no usable record), `https://styles.refero.design/?q=pega` (attempted through built-in web open and domain search; safe-open error and no result record)
**Conflicts unresolved:** none

## 5. Layout Principles

- **Prescribed workflow first:** Pega’s official getting-started material frames the system as a way to remove trivial UI decisions so teams can focus on business logic, productivity, and ROI.
- **Compact documentation chrome:** the captured version control uses 6px vertical and 12px horizontal padding; the search input uses 12px horizontal padding.
- **Large forward action:** the observed dark action uses 16px vertical and 32px horizontal padding at 59px height.
- **Scope boundary:** these dimensions describe the supplied public design-system pages at 1440×900; they do not prove a product application grid, responsive breakpoint, or authenticated workflow layout.

## 6. Depth & Elevation

The retained dark action, header controls, menu rows, and captured article containers report no box shadow. No Pega elevation scale is established. In this narrow evidence bundle, hierarchy comes from the dark header, contrast, padding, and the action’s rounded silhouette rather than a reusable shadow ladder.

## 7. Do's and Don'ts

### Do

- Use the documented system as a guide for task-oriented enterprise flows, where the next meaningful action is clear.
- Preserve the measured dark blue `#03102e` action, white `#ffffff` text, and 32px action radius only in a comparable public-system context.
- Use Roboto Flex only when it is actually available and appropriately licensed for the target project.
- Keep labels, helper content, and form structure explicit; Pega’s forms guidance favors labels and helper text over placeholders.

### Don't

- Do not transplant public documentation chrome into an authenticated Pega application without product-surface evidence.
- Do not substitute a system font and label it Roboto Flex.
- Do not invent hover, focus, pressed, disabled, error, or motion values from this zero-interaction capture.
- Do not promote DM Sans, JetBrains Mono, or Source Serif 4 from declared CSS into a Pega UI-family claim.

## 8. Responsive Behavior

Only 1440×900 surfaces were supplied. Pega’s official material says the system addresses multi-device support and responsive behavior, but this packet contains no measured breakpoint, reflow, touch-target, or mobile-navigation value. Those fields are therefore absent.

## 9. Agent Prompt Guide

Use this reference for a **Pega UX System public documentation or guided-enterprise-workflow direction**: a deep-blue utility header, white canvas, Roboto Flex when truly available, low-shadow separation, clear labels, and one highly legible dark rounded next-step action. Let the workflow and business information lead. Do not present this public documentation geometry as verified Pega product UI, and leave all interactive states and motion unspecified unless new product-surface evidence records them.

## 10. Voice & Tone

Pega’s official system language is practical and outcome-oriented: it describes guided workflows, familiar interaction patterns, accessibility, localization, and the fastest path to an accurate outcome. The corporate voice adds “Build for Change” to a long-running AI and automation story. Treat this as public documentation and positioning guidance, not as a complete error-message or transactional-copy specification.

| Context | Direction grounded in official material |
| --- | --- |
| Workflow guidance | Name the task and the outcome plainly. |
| Form help | Explain what is expected with labels and short helper text. |
| Product framing | Connect consistency to speed, accuracy, and adaptability. |

**Official wording samples**
- *“Patterns and components for building enterprise applications.”* — Pega UX Design System home.
- *“The fastest path to an accurate outcome.”* — Pega forms guidance.
- *“Build for Change®.”* — Pega corporate positioning.

## 11. Brand Narrative

Pega says founder and CEO Alan Trefler began developing chess-playing AI agents more than four decades ago, applying the underlying ideas to technology and business. Its current corporate story positions the company as an enterprise-transformation platform for governed, scalable, adaptable processes and decisions. That long horizon helps explain the UX system’s emphasis on prescribed patterns: the public getting-started guidance explicitly redirects effort away from repeated button-placement choices and toward business logic, workflows, and productivity.

The current design-system site describes Constellation as the default design system name and direction while saying the underlying system remains the same. This is a product-language evolution, not evidence that all historical Pega public surfaces share the measured values in this reference. Pega’s 2021 brand account separately describes a move away from a rigid, four-color/four-shape visual system toward a more modern, flexible, narrative illustration approach; that corporate brand history is not used as a token source for the Pega UX System pages.

## 12. Principles

1. **Guide work toward an accurate outcome.** The system’s forms guidance makes speed, readability, and reduced overwhelm explicit. *UI implication:* show the next required task and its context before adding optional controls.
2. **Prescribe the repeatable decisions.** Pega’s getting-started page emphasizes pre-built workflows and consistent patterns. *UI implication:* make ordinary workflow choices predictable instead of styling each page as a separate concept.
3. **Keep essential input explicit.** Pega recommends labels and helper text instead of placeholders. *UI implication:* expose what a field means and what is required without relying on faint temporary copy.
4. **Build for continuous change.** Pega’s corporate position ties enterprise transformation to adaptable, governed systems. *UI implication:* use clear information hierarchy that can accommodate evolving case data without obscuring the current action.

The UI implications are this reference’s application of official public guidance, not a claim of unpublished Pega product rules.

## 13. Personas

This reference does not invent named personas. Pega’s official UX-system pages identify people who design, author, configure, and complete guided enterprise work: application designers and authors use the documented patterns, while end users create and manage Cases and complete Assignments. Pega’s public corporate context also names large organizations modernizing workflows and customer experiences. These are stakeholder groups, not substitutes for first-party user research or verified application roles.

## 14. States

No authenticated-product empty, loading, success, error, or disabled state was supplied. The packet records zero interaction actions and zero observed states, so no component-state contract is inferred. Pega’s public documentation discusses forms, accessibility, and workflow patterns, but that narrative does not create measured state tokens for this reference.

## 15. Motion & Easing

The evidence packet records `interactionCount: 0`, no interaction kinds, and no transition or easing measurements. No duration, easing, reduced-motion, or motion-behavior token is established.
