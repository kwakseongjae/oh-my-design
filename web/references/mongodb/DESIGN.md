---
id: mongodb
name: MongoDB
country: US
category: backend-devops
homepage: "https://www.mongodb.com"
primary_color: "#00ed64"
logo:
  type: simpleicons
  slug: mongodb
verified: "2026-07-13"
omd: "0.1"
ds:
  name: LeafyGreen
  url: "https://www.mongodb.design"
  type: system
  description: MongoDB's open-source design system and React component library.
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing, url: "https://www.mongodb.com/", inspected: "2026-07-13" }
    - { id: surface-2, kind: design-system, url: "https://www.mongodb.design/", inspected: "2026-07-13" }
    - { id: surface-3, kind: documentation, url: "https://www.mongodb.com/ko-kr/docs/", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.mongodb.com/", captured: "2026-07-13" }
    - { id: leafygreen-live, kind: official-doc, url: "https://www.mongodb.design/", captured: "2026-07-13" }
    - { id: docs-live, kind: official-doc, url: "https://www.mongodb.com/ko-kr/docs/", captured: "2026-07-13" }
    - { id: typography-guidance, kind: official-doc, url: "https://www.mongodb.design/foundations/typography", captured: "2026-07-13" }
    - { id: source-code-license, kind: license, url: "https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.navy": *home
    "tokens.colors.forest-chrome": *home
    "tokens.colors.link": *home
    "tokens.colors.docs-canvas": &docs { surface_id: surface-3, source_id: docs-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.docs-border": *docs
    "tokens.colors.docs-muted": *docs
    "tokens.colors.docs-inverse": &leafygreen { surface_id: surface-2, source_id: leafygreen-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.canvas": *home
    "tokens.colors.ink": *home
    "tokens.colors.feature-border": *home
    "tokens.typography.family.ui": *home
    "tokens.typography.family.display": *home
    "tokens.typography.family.mono": *home
    "tokens.typography.hero.size": *home
    "tokens.typography.hero.weight": *home
    "tokens.typography.hero.lineHeight": *home
    "tokens.typography.hero.use": *home
    "tokens.typography.primary-action.size": *home
    "tokens.typography.primary-action.weight": *home
    "tokens.typography.primary-action.lineHeight": *home
    "tokens.typography.primary-action.tracking": *home
    "tokens.typography.primary-action.use": *home
    "tokens.typography.docs-control.size": *docs
    "tokens.typography.docs-control.weight": *docs
    "tokens.typography.docs-control.lineHeight": *docs
    "tokens.typography.docs-control.use": *docs
    "tokens.spacing.primary-action-y": *home
    "tokens.spacing.primary-action-x": *home
    "tokens.spacing.docs-side-y": *docs
    "tokens.spacing.docs-side-x": *docs
    "tokens.rounded.primary-action": *home
    "tokens.rounded.docs-control": *docs
    "tokens.rounded.docs-icon": *docs
    "tokens.components.marketing-feature-panel.type": *home
    "tokens.components.marketing-feature-panel.bg": *home
    "tokens.components.marketing-feature-panel.fg": *home
    "tokens.components.marketing-feature-panel.border": *home
    "tokens.components.marketing-feature-panel.radius": *home
    "tokens.components.marketing-feature-panel.padding": *home
    "tokens.components.marketing-feature-panel.shadow": *home
    "tokens.components.marketing-feature-panel.use": *home
tokens:
  source: live-extract
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    primary: "#00ed64"
    navy: "#001e2b"
    forest-chrome: "#00684a"
    link: "#006cfa"
    canvas: "#ffffff"
    ink: "#000000"
    feature-border: "#e7eeec"
    docs-canvas: "#f9fbfa"
    docs-border: "#889397"
    docs-muted: "#3d4f58"
    docs-inverse: "#112733"
  typography:
    family: { ui: "Euclid Circular A", display: "MongoDB Value Serif", mono: "Source Code Pro" }
    hero: { size: 64, weight: 400, lineHeight: 72, use: "Public home marketing H1" }
    primary-action: { size: 16, weight: 500, lineHeight: 16, tracking: 0.16, use: "Public home and documentation primary action" }
    docs-control: { size: 13, weight: 500, lineHeight: 20, use: "Small documentation control" }
  spacing: { primary-action-y: 15, primary-action-x: 24, docs-side-y: 16, docs-side-x: 24 }
  rounded: { primary-action: 4, docs-control: 6, docs-icon: 9999 }
  components:
    marketing-feature-panel: { type: card, bg: "#ffffff", fg: "#000000", border: "1px solid #e7eeec", radius: "40px", padding: "40px 48px", shadow: "rgba(0, 0, 0, 0.1) 0px 2px 4px 0px", use: "Observed public-home feature panel" }
---

# Design System Inspiration of MongoDB

## 1. Visual Theme & Atmosphere

MongoDB is a developer data platform built around a flexible document model and services that let teams build and scale modern applications. Its origin story is equally developer-centred: the founders’ experience operating DoubleClick at high scale led them to establish 10gen in 2007, launch MongoDB in 2009, and rename the company after the product in 2013. Today Atlas joins data services into a unified developer data platform. Across the captured public marketing, LeafyGreen design-system, and documentation surfaces, that technical purpose is expressed through a navy-and-spring-green signal system, strong rectangular actions, and a deliberately mixed typographic voice: Value Serif for display authority, Euclid Circular A for UI clarity, and Source Code Pro for code-like labels. This reference keeps those three public domains separate rather than treating the public website as an authenticated Atlas UI.

- **High-signal green action:** `#00ed64` appears as a navy-text primary action on the public home and documentation headers.
- **Dark technical field:** `#001e2b` anchors dark marketing sections and inverse actions; LeafyGreen’s captured design-system page uses a separate `#112733` dark canvas.
- **Editorial plus operational typography:** Value Serif leads headings; Euclid and Source Code Pro support product reading and code/value notation.
- **Domain boundary:** home is marketing, `mongodb.design` is the LeafyGreen design system, and `/docs/` is documentation chrome. No authenticated product screen was captured.

## 2. Color Palette & Roles

### Observed public and documentation roles

- **Spring Green** (`#00ed64`): public home and documentation header primary-action background.
- **MongoDB Navy** (`#001e2b`): primary-action text and border; dark marketing-section foreground/background use.
- **Forest Green chrome** (`#00684a`): home announcement-strip background; it is not promoted to the canonical CTA fill.
- **Link Blue** (`#006cfa`): observed home text-link color.
- **Documentation canvas** (`#f9fbfa`): compact public documentation control background.
- **Documentation border** (`#889397`): observed one-pixel compact-control border.
- **Documentation muted text** (`#3d4f58`): documentation utility/control text.
- **LeafyGreen inverse canvas** (`#112733`): captured design-system search-field background.

The captured white, gray, and local marketing-card surfaces remain local observations. They do not establish a complete application semantic palette.

## 3. Typography Rules

### Evidence classes

- **Official product-use:** LeafyGreen’s typography guidance says MongoDB Value Serif is used in the logo and primarily for H1/H2, Euclid Circular A is the frequently used product body font, and Source Code Pro displays code snippets and other values.
- **Live computed surface-use:** the supplied capture reports all three families as loaded with high confidence: Euclid Circular A (287 visible uses), MongoDB Value Serif (5), and Source Code Pro (3). Euclid and Value Serif have MongoDB-hosted font sources; Source Code Pro is loaded from Google-hosted files.
- **Official licence context:** Adobe licenses Source Code Pro under SIL Open Font License 1.1. That licence applies to Source Code Pro, not to MongoDB’s proprietary or brand-hosted font files.
- **Loaded but not promoted:** Akzidenz-Grotesk Std has loaded visible use in the bundle but has no captured source URL or matching LeafyGreen product-role statement. It is retained as a live observation, not a machine UI-family token.
- **Declared-only / system / unresolved:** icon fonts, Noto CJK fallback declarations, and Times/Arial system or unresolved fallbacks are not promoted. No substitute is rendered as a MongoDB font.

### Measured public hierarchy

| Role | Font | Size | Weight | Line height | Tracking | Surface boundary |
|---|---|---:|---:|---:|---:|---|
| Public home hero | MongoDB Value Serif | 64px | 400 | 72px | normal | home marketing H1 |
| Public primary action | Euclid Circular A | 16px | 500 | 16px | 0.16px | home and documentation header |
| Public section heading | Euclid Circular A | 36px | 500 | 48px | normal | home marketing |
| Public code/value label | Source Code Pro | 14px | 400–500 | 16–24px | 1–2px | home marketing |
| LeafyGreen page title | MongoDB Value Serif | 48px | 400 | 64px | normal | design-system page |
| Documentation compact control | Euclid Circular A | 13px | 500 | 20px | normal | public docs |

## 4. Component Stylings

All variants below are baseline observations from the supplied 2026-07-13 collector bundle. The bundle records `interactionCount: 0`; therefore it does not establish hover, pressed, focus, menu, modal, toast, form-error, or transition variants.

### Public primary action

**Home and documentation header action**
- Background: `#00ed64`
- Text: `#001e2b`
- Border: `1px solid #001e2b`
- Radius: `4px`
- Padding: `15px 24px`
- Font: `16px / 500 / Euclid Circular A`
- Use: public marketing and documentation header action; `home::[data-omd-capture="11"]`, also observed on `surface-3`

### Public marketing feature panel

**Large white feature panel**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #e7eeec`
- Radius: `40px`
- Padding: `40px 48px`
- Shadow: `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`
- Use: home role-button feature panel; `home::[data-omd-capture="15"]`

### Documentation compact control

**Small bordered control**
- Background: `#f9fbfa`
- Text: `#001e2b`
- Border: `1px solid #889397`
- Radius: `6px`
- Font: `13px / 500 / Euclid Circular A`
- Use: compact public documentation control; `surface-3::[data-omd-capture="21"]`

### Documentation icon control

**Circular icon control**
- Background: `#ffffff`
- Text: `#00684a`
- Border: `1px solid #e8edeb`
- Radius: `100%`
- Padding: `1px 6px`
- Shadow: `rgba(0, 30, 43, 0.1) 0px 3px 4px 0px`
- Use: public documentation icon control; `surface-3::[data-omd-capture="22"]`

### LeafyGreen utility control

**Dark compact control**
- Background: `#3d4f58`
- Text: `#ffffff`
- Border: `1px solid #889397`
- Radius: `50px`
- Font: `13px / 500 / Euclid Circular A`
- Use: LeafyGreen design-system utility control; `surface-2::[data-omd-capture="48"]`

## 5. Layout Principles

### Measured spacing

- Public primary action: `15px 24px` at `home::[data-omd-capture="11"]`.
- Larger public primary actions: `16px 32px` at home CTA captures.
- Documentation side-nav items: `16px 24px` on the captured public docs surface.
- LeafyGreen navigation list item: `8px 16px` on the design-system surface.

The evidence does not establish a full cross-product spacing scale. Use the recorded values only in their source-domain contexts.

### Shape boundary

- Public primary action: 4px.
- Documentation compact control: 6px.
- Public marketing feature panel: 40px.
- Documentation icon control: 100% circular.
- LeafyGreen utility control: 50px pill.

## 6. Depth & Elevation

Two shadows are directly observed: the public marketing feature panel uses `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`; the documentation icon control uses `rgba(0, 30, 43, 0.1) 0px 3px 4px 0px`. No general elevation ladder is promoted from those local instances.

## 7. Do's and Don'ts

### Do

- Use Spring Green (`#00ed64`) with MongoDB Navy (`#001e2b`) for the observed public primary-action pairing.
- Keep Value Serif for the captured display hierarchy, Euclid for UI/body roles, and Source Code Pro for code/value labels.
- Preserve the source-domain distinction between marketing, LeafyGreen, and documentation observations.
- Carry selector and surface provenance forward when using the component examples.

### Don't

- Do not substitute a system font for Euclid Circular A, MongoDB Value Serif, or Source Code Pro.
- Do not reclassify Forest Green (`#00684a`) announcement chrome as the canonical CTA fill.
- Do not infer interaction states, modal behavior, form errors, toasts, or component variants from this baseline-only bundle.
- Do not generalize public-site styles into an authenticated Atlas product interface.

## 8. Responsive Behavior

The supplied evidence is a 1440×900 capture. It establishes no responsive breakpoint, mobile layout, touch-target, or collapse behavior claim.

## 9. Agent Prompt Guide

Use the reference as a source-bounded composition guide: a public marketing primary action can be `#00ed64` with `#001e2b` text/border, 4px radius, and Euclid Circular A 16px/500. Use MongoDB Value Serif for a measured public display headline and Source Code Pro for a code/value label. For LeafyGreen or documentation work, choose only the separately documented controls rather than importing marketing card geometry by default.

## 10. Voice & Tone

MongoDB’s first-party company story is developer-centred, practical, and ambitious: make a flexible data platform that helps developers build and scale. Its public writing pairs direct action language with concrete technical outcomes rather than generic database superlatives.

| Context | Observed or official direction |
|---|---|
| Product mission | Empower innovators by unleashing the power of software and data. |
| Founder story | Frame scale, flexibility, and developer productivity as the problem to solve. |
| CTA | Use concise actions such as “Get Started” when supported by the captured public header. |

**Voice samples**
- “Get Started” — captured public primary action.
- “Our journey” — official company-history framing.
- “The needs of developers have always served as the company’s North Star.” — official story page.

## 11. Brand Narrative

MongoDB traces its start to Dwight Merriman, Eliot Horowitz, and Kevin Ryan’s experience at DoubleClick, where relational databases struggled at more than 400,000 ads per second. MongoDB’s official history says they founded the company, then called 10gen, in 2007 to make a more scalable and flexible approach to data.

The team launched MongoDB in 2009 with a document model intended to manage large, unstructured data and scale for modern applications. The company renamed itself MongoDB in 2013 as the product gained traction. Its current account presents Atlas as the unified developer data platform that carries forward that developer-first direction across cloud providers and on-premises workloads.

## 12. Principles

1. **Build for developer agility.** *UI implication:* explain the concrete action or data outcome before introducing platform breadth.
2. **Make flexibility legible.** *UI implication:* distinguish a public marketing message, design-system rule, and documentation affordance instead of flattening them into one generic UI.
3. **Use type by role.** *UI implication:* Value Serif belongs in display hierarchy, Euclid in product reading/UI, and Source Code Pro in code/value contexts.
4. **Keep high-signal actions disciplined.** *UI implication:* reserve Spring Green primary actions for the observed navy-text pairing; Forest Green remains announcement chrome in this evidence set.

## 13. Personas

These are stakeholder groups named by MongoDB’s official company and story materials, not fictional user profiles.

**Developers and builders.** MongoDB describes developers as the product’s North Star and the audience that needs a flexible way to manage and interact with data.

**Innovators and application teams.** The company mission addresses teams creating, transforming, and disrupting industries with modern applications.

**Organizations operating across environments.** Atlas is described as consolidating workloads through a unified experience for on-premises or preferred-cloud deployment.

## 14. States

No empty, loading, success, error, disabled, skeleton, or interactive transition treatment was captured. These states are intentionally omitted rather than reconstructed from public baseline screenshots.

## 15. Motion & Easing

No duration, easing curve, or reduced-motion behavior was captured. No motion token is asserted.

---

**Verified:** 2026-07-13
**Tier 1 sources:** supplied collector evidence for https://www.mongodb.com/, https://www.mongodb.design/, and https://www.mongodb.com/ko-kr/docs/; official typography guidance https://www.mongodb.design/foundations/typography; official company context https://www.mongodb.com/company and https://www.mongodb.com/company/our-story.
**Tier 2 sources:** https://getdesign.md/mongodb/design-md (opened; third-party analysis, no value promoted); https://styles.refero.design/?q=MongoDB (attempted; no usable result page).
**Conflicts unresolved:** none
