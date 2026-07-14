---
id: lovable
name: Lovable
country: US
category: developer-tools
homepage: "https://lovable.dev"
primary_color: "#030303"
logo:
  type: favicon
  slug: "https://lovable.dev/favicon-192x192.png"
verified: "2026-07-13"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: marketing-product, url: "https://lovable.dev/ko", inspected: "2026-07-12" }
    - { id: pricing, kind: marketing-pricing, url: "https://lovable.dev/ko/pricing", inspected: "2026-07-12" }
    - { id: product-managers, kind: marketing-product, url: "https://lovable.dev/ko/product-managers", inspected: "2026-07-12" }
    - { id: docs-welcome, kind: documentation-chrome, url: "https://docs.lovable.dev/introduction/welcome", inspected: "2026-07-13" }
    - { id: docs-quick-start, kind: documentation-chrome, url: "https://docs.lovable.dev/introduction/getting-started", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://lovable.dev/ko", captured: "2026-07-12" }
    - { id: pricing-live, kind: product-surface, url: "https://lovable.dev/ko/pricing", captured: "2026-07-12" }
    - { id: product-managers-live, kind: product-surface, url: "https://lovable.dev/ko/product-managers", captured: "2026-07-12" }
    - { id: docs-welcome-official, kind: official-doc, url: "https://docs.lovable.dev/introduction/welcome", captured: "2026-07-13" }
    - { id: docs-quick-start-official, kind: official-doc, url: "https://docs.lovable.dev/introduction/getting-started", captured: "2026-07-13" }
    - { id: camera-font-asset, kind: brand-asset, url: "https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.ink": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-12" }
    "tokens.colors.canvas": *home
    "tokens.colors.border": *home
    "tokens.colors.overlay-border": &pricing { surface_id: pricing, source_id: pricing-live, method: computed-style, captured: "2026-07-12" }
    "tokens.typography.family.ui": &font { surface_id: home, source_id: camera-font-asset, method: computed-style+FontFaceSet, captured: "2026-07-12" }
    "tokens.typography.display.size": *home
    "tokens.typography.display.weight": *home
    "tokens.typography.display.lineHeight": *home
    "tokens.typography.display.tracking": *home
    "tokens.typography.display.use": *home
    "tokens.typography.section.size": *home
    "tokens.typography.section.weight": *home
    "tokens.typography.section.lineHeight": *home
    "tokens.typography.section.tracking": *home
    "tokens.typography.section.use": *home
    "tokens.typography.heading.size": *pricing
    "tokens.typography.heading.weight": *pricing
    "tokens.typography.heading.lineHeight": *pricing
    "tokens.typography.heading.tracking": *pricing
    "tokens.typography.heading.use": *pricing
    "tokens.typography.body.size": *home
    "tokens.typography.body.weight": *home
    "tokens.typography.body.lineHeight": *home
    "tokens.typography.body.use": *home
    "tokens.typography.navigation.size": *home
    "tokens.typography.navigation.weight": *home
    "tokens.typography.navigation.lineHeight": *home
    "tokens.typography.navigation.use": *home
    "tokens.typography.action.size": *home
    "tokens.typography.action.weight": *home
    "tokens.typography.action.lineHeight": *home
    "tokens.typography.action.use": *home
    "tokens.spacing.xxs": *home
    "tokens.spacing.xs": *home
    "tokens.spacing.sm": *home
    "tokens.spacing.md": *home
    "tokens.spacing.lg": *home
    "tokens.spacing.xl": *home
    "tokens.spacing.xxl": *home
    "tokens.spacing.3xl": *home
    "tokens.rounded.nav-trigger": *home
    "tokens.rounded.control": *home
    "tokens.rounded.option": *pricing
    "tokens.rounded.overlay": *pricing
    "tokens.rounded.full": *home
    "tokens.components.header-nav-trigger.type": *home
    "tokens.components.header-nav-trigger.bg": *home
    "tokens.components.header-nav-trigger.fg": *home
    "tokens.components.header-nav-trigger.radius": *home
    "tokens.components.header-nav-trigger.padding": *home
    "tokens.components.header-nav-trigger.height": *home
    "tokens.components.header-nav-trigger.font": *home
    "tokens.components.header-nav-trigger.states": *home
    "tokens.components.header-nav-trigger.use": *home
    "tokens.components.header-primary-action.type": *home
    "tokens.components.header-primary-action.bg": *home
    "tokens.components.header-primary-action.fg": *home
    "tokens.components.header-primary-action.radius": *home
    "tokens.components.header-primary-action.padding": *home
    "tokens.components.header-primary-action.height": *home
    "tokens.components.header-primary-action.font": *home
    "tokens.components.header-primary-action.states": *home
    "tokens.components.header-primary-action.use": *home
    "tokens.components.pricing-cycle-tab.type": *pricing
    "tokens.components.pricing-cycle-tab.bg": *pricing
    "tokens.components.pricing-cycle-tab.fg": *pricing
    "tokens.components.pricing-cycle-tab.radius": *pricing
    "tokens.components.pricing-cycle-tab.padding": *pricing
    "tokens.components.pricing-cycle-tab.height": *pricing
    "tokens.components.pricing-cycle-tab.font": *pricing
    "tokens.components.pricing-cycle-tab.states": *pricing
    "tokens.components.pricing-cycle-tab.use": *pricing
    "tokens.components.pricing-selector.type": *pricing
    "tokens.components.pricing-selector.bg": *pricing
    "tokens.components.pricing-selector.fg": *pricing
    "tokens.components.pricing-selector.border": *pricing
    "tokens.components.pricing-selector.radius": *pricing
    "tokens.components.pricing-selector.height": *pricing
    "tokens.components.pricing-selector.font": *pricing
    "tokens.components.pricing-selector.states": *pricing
    "tokens.components.pricing-selector.use": *pricing
    "tokens.components.pricing-info-dialog.type": *pricing
    "tokens.components.pricing-info-dialog.bg": *pricing
    "tokens.components.pricing-info-dialog.fg": *pricing
    "tokens.components.pricing-info-dialog.radius": *pricing
    "tokens.components.pricing-info-dialog.padding": *pricing
    "tokens.components.pricing-info-dialog.font": *pricing
    "tokens.components.pricing-info-dialog.shadow": *pricing
    "tokens.components.pricing-info-dialog.states": *pricing
    "tokens.components.pricing-info-dialog.use": *pricing
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Three current public marketing/product routes were captured. Authenticated builder UI, documentation chrome, and declared-only font assets are separate evidence domains; only current live public claims are machine tokens."
  colors:
    ink: "#030303"
    canvas: "#fafafa"
    border: "#eceae4"
    overlay-border: "#e7e7e6"
  typography:
    family: { ui: "Camera Plain Variable" }
    display: { size: 60, weight: 600, lineHeight: 1.1, tracking: -1.5, use: "Current public display heading" }
    section: { size: 48, weight: 600, lineHeight: 1.1, tracking: -1.2, use: "Repeated public section heading" }
    heading: { size: 36, weight: 600, lineHeight: 1.1, tracking: -0.9, use: "Current public feature heading" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Public body and list copy" }
    navigation: { size: 15, weight: 400, lineHeight: 1.6, use: "Top-level public navigation trigger" }
    action: { size: 14, weight: 400, lineHeight: 1.5, use: "Current compact public action" }
  spacing: { xxs: 4, xs: 6, sm: 8, md: 10, lg: 12, xl: 16, xxl: 24, 3xl: 32 }
  rounded: { nav-trigger: 0, control: 8, option: 6, overlay: 12, full: 9999 }
  components_harvested: true
  components:
    header-nav-trigger: { type: button, bg: "transparent", fg: "#030303", radius: "0px", padding: "4px 0px 4px 6px", height: "32px", font: "15px / 400 / 24px", states: "hover, pressed, and focus captured on home::[data-omd-capture=\"1\"]", use: "Top-level public navigation menu trigger" }
    header-primary-action: { type: button, bg: "lab(0 0 0 / 0.88)", fg: "lab(98.2716 0 0)", radius: "8px", padding: "6px 10px", height: "32px", font: "14px / 400 / 21px", states: "default captured on all three public routes; no role-specific hover, pressed, or focus variant promoted", use: "Current header primary action" }
    pricing-cycle-tab: { type: tab, bg: "transparent", fg: "lab(42.0087 -0.102207 0.363302)", radius: "9999px", padding: "0px 12px", height: "32px", font: "14px / 400 / 21px", states: "hover, pressed, and selected captured on pricing::[data-omd-capture=\"9\"]", use: "Pricing-cycle tab on the public pricing route" }
    pricing-selector: { type: button, bg: "lab(100 0 0 / 0.8)", fg: "lab(0.903296 0 0)", border: "lab(0.903296 0 0)", radius: "8px", height: "32px", font: "14px / 400 / 21px", states: "pressed, focus, and menu-open captured on pricing::[data-omd-capture=\"12\"]", use: "Public pricing combobox trigger" }
    pricing-info-dialog: { type: dialog, bg: "lab(99.9884 -0.0000298023 0)", fg: "lab(0.903296 0 0)", radius: "12px", padding: "16px", font: "16px / 400 / 24px", shadow: "rgb(255, 255, 255) 0px 0px 0px 1px, lab(98.2716 0 0) 0px 0px 0px 1px, rgba(119, 119, 113, 0.16) 0px 0px 0px 2px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 4px 3px -1.5px, rgba(0, 0, 0, 0.04) 0px 7px 6px -3px, rgba(0, 0, 0, 0.04) 0px 13px 12px -6px, rgba(0, 0, 0, 0.04) 0px 25px 24px -12px", states: "dialog-open captured on pricing::[data-omd-interaction-capture=\"dialog-3-0\"]", use: "Public pricing information dialog" }
---

# Design System Inspiration of Lovable

## 1. Visual Theme & Atmosphere

Lovable is a full-stack AI development platform for turning natural-language requests into editable web applications, from early prototypes through deployment. Its current public experience gives that technical promise a deliberately quiet interface: a `#fafafa` canvas, `#030303` ink, warm hairlines, Camera Plain Variable, and a near-black action rather than a saturated universal brand fill. The contrast is purposeful: a chat-driven way to create software is presented with a compact, legible public shell instead of a visually noisy “AI” motif.

The July 12 capture covers three Korean-localized public marketing/product routes: home, pricing, and the product-managers page. Those routes share a loaded Camera Plain Variable family and the same header action geometry, while the pricing route adds local tabs, comboboxes, menus, and dialogs. The capture does not authorize claims about the authenticated builder, native clients, or any generated app. Lovable’s documentation supplies product context and workflow language, but its documentation chrome is a separate source domain and does not populate the tokens below.

**Key characteristics:**
- Quiet public canvas: `#fafafa` with `#030303` text and `#eceae4` hairlines
- Camera Plain Variable is visibly loaded across all three captured routes
- Header primary action is `lab(0 0 0 / 0.88)`, 8px-rounded, and compact
- Public header menu triggers remain square; full-pill geometry is local to pricing tabs and small actions
- Pricing menus and dialogs are 12px rounded overlays with a measured layered shadow

## 2. Color Palette & Roles

- **Ink** (`#030303`): repeated public headings, body copy, and navigation labels.
- **Canvas** (`#fafafa`): repeated page background across the captured routes.
- **Primary action** (`lab(0 0 0 / 0.88)`) with **on-action** (`lab(98.2716 0 0)`): current compact header action.
- **Hairline** (`#eceae4`): repeated public boundary color.
- **Overlay border** (`#e7e7e6`): observed on pricing overlays and options.

The capture also contains local warm surfaces and a selected-option violet wash in pricing. They remain component-local observations rather than a universal primary palette. The prior coral `#ff6f61`, generic focus blue, and a universal cream card surface are removed because this capture does not establish those roles.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Lovable’s public pages and documentation position the platform as a natural-language app-building workflow; they do not publish a separate typography system. |
| Live surface-use | Camera Plain Variable is computed on 758 visible captured elements and backed by loaded `document.fonts` entries plus first-party WOFF2 source URLs. |
| Official distributed asset | The first-party WOFF2 files establish live delivery only; redistribution or license terms were not established by this packet. |
| Declared-only | Roboto Mono Variable has six declared first-party source URLs but zero visible computed uses in the capture. |
| Unresolved | Authenticated builder, native/desktop, and generated-app typography remain outside the public capture. |

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Display | Camera Plain Variable | 60px | 600 | 66px | -1.5px |
| Section | Camera Plain Variable | 48px | 600 | 52.8px | -1.2px |
| Feature heading | Camera Plain Variable | 36px | 600 | 39.6px | -0.9px |
| Body | Camera Plain Variable | 16px | 400 | 24px | normal |
| Navigation | Camera Plain Variable | 15px | 400 | 24px | normal |
| Compact action | Camera Plain Variable | 14px | 400 | 21px | normal |

## 4. Component Stylings

### Header navigation trigger

**Current public menu trigger**
- Background: transparent
- Text: `#030303`
- Radius: 0px
- Padding: 4px 0px 4px 6px
- Height: 32px
- Font: Camera Plain Variable 15px / 400 / 24px
- Hover: `oklab(0.0983389 0.00000446842 0.00000196737 / 0.998508)` text observed
- Pressed: `oklab(0.100978 0.00000458921 0.00000201977 / 0.993438)` text observed
- Focus: `oklab(0.0980805 0.00000445659 0.00000196224 / 0.999007)` text observed
- Use: top-level menu trigger on `home::[data-omd-capture="1"]`

### Header primary action

**Current compact primary action**
- Background: `lab(0 0 0 / 0.88)`
- Text: `lab(98.2716 0 0)`
- Radius: 8px
- Padding: 6px 10px
- Height: 32px
- Font: Camera Plain Variable 14px / 400 / 21px
- Use: repeated header action on home, pricing, and product-managers; selector `*[data-omd-capture="7"]`

### Pricing-cycle tab

**Current unselected tab**
- Background: transparent
- Text: `lab(42.0087 -0.102207 0.363302)`
- Radius: 9999px
- Padding: 0px 12px
- Height: 32px
- Font: Camera Plain Variable 14px / 400 / 21px
- Hover: `oklab(0.499999 -0.000297248 0.000967979)` text observed
- Pressed: `oklab(0.496991 -0.000295021 0.000960718)` text observed
- Use: pricing-cycle tab at `pricing::[data-omd-capture="9"]`; selected state was also captured and remains local to this control

### Pricing selector

**Current public combobox trigger**
- Background: `lab(100 0 0 / 0.8)`
- Text: `lab(0.903296 0 0)`
- Border: `lab(0.903296 0 0)`
- Radius: 8px
- Height: 32px
- Font: Camera Plain Variable 14px / 400 / 21px
- Pressed: `rgba(119, 119, 113, 0.4) 0px 0px 0px 1px inset` observed
- Focus: inset boundary and focus state observed
- Use: public pricing combobox at `pricing::[data-omd-capture="12"]`

### Pricing information dialog

**Current open dialog**
- Background: `lab(99.9884 -0.0000298023 0)`
- Text: `lab(0.903296 0 0)`
- Radius: 12px
- Padding: 16px
- Shadow: `rgb(255, 255, 255) 0px 0px 0px 1px, lab(98.2716 0 0) 0px 0px 0px 1px, rgba(119, 119, 113, 0.16) 0px 0px 0px 2px, rgba(0, 0, 0, 0.04) 0px 2px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 4px 3px -1.5px, rgba(0, 0, 0, 0.04) 0px 7px 6px -3px, rgba(0, 0, 0, 0.04) 0px 13px 12px -6px, rgba(0, 0, 0, 0.04) 0px 25px 24px -12px`
- Font: Camera Plain Variable 16px / 400 / 24px
- Use: dialog-open capture at `pricing::[data-omd-interaction-capture="dialog-3-0"]`

The captured menu list, option row, selected option, and dialog are pricing-route overlays. Card systems, app prompt inputs, toasts, status treatments, and generated-app controls are omitted because this packet did not establish matching public variants.

## 5. Layout Principles

The packet establishes a compact public control rhythm: 4, 6, 8, 10, 12, 16, 24, and 32px occur repeatedly in the capture. It does not establish a reusable authenticated-app grid, dashboard layout, or breakpoint system. Keep public page composition and pricing overlays separate from any generated product UI.

## 6. Depth & Elevation

Public base controls are flat. The measured exception is the pricing menu/dialog overlay: a 12px rounded surface with white and near-white rings, a `rgba(119,119,113,0.16)` inset layer, and progressively larger low-opacity black shadows. That is overlay-local depth, not a default card shadow.

## 7. Do's and Don'ts

### Do
- Use `#fafafa`, `#030303`, and `#eceae4` for the verified public neutral structure.
- Use Camera Plain Variable only where the loaded public family is appropriate.
- Keep the current 8px compact action distinct from the 0px header trigger and 9999px pricing tab.
- Treat pricing menu, option, and dialog states as pricing-route evidence with their recorded selectors.

### Don't
- Do not use the retired coral token as a current primary color.
- Do not turn the selected pricing-option violet wash into a universal CTA color.
- Do not infer authenticated builder inputs, cards, toasts, errors, or status components from marketing routes.
- Do not render Roboto Mono Variable as a UI family: it was declared but had no visible computed use.

## 8. Responsive Behavior

The supplied collector evidence is desktop `1440×900`. Documentation says the project preview can be switched between web and mobile views, but the packet contains no public responsive measurements or breakpoint values. Those values remain unresolved.

## 9. Agent Prompt Guide

> Build only a public Lovable-inspired shell: `#fafafa` canvas, `#030303` type, `#eceae4` hairlines, Camera Plain Variable, a compact 8px near-black header action, and square header menu triggers. Keep pricing tabs and overlays component-local. Do not synthesize the authenticated builder or generic AI-app controls.

## 10. Voice & Tone

Lovable’s public language is direct, constructive, and sequence-oriented. The homepage asks people to “Build something Lovable,” then moves through “Start with an idea,” “Watch it come to life,” and “Refine and ship.” Documentation turns the same cadence into practical instructions: describe what to build, review and iterate, sync code to GitHub, then deploy and operate. Use clear action verbs and name the next outcome; avoid unsupported speed, funding, or technical-performance claims.

## 11. Brand Narrative

Lovable frames itself as a full-stack AI development platform rather than a static website generator. Its official documentation says an individual or team can describe an application in natural language and receive editable code spanning frontend, backend, database, authentication, and integrations. The current homepage compresses that lifecycle into a public story: begin with an idea, see a working prototype emerge, then refine and ship it. The public visual system supports that narrative through a quiet shell that lets the creation workflow, examples, and templates carry the product story.

The documentation also draws a boundary that matters for this reference: projects live in shared workspaces, can be synced to GitHub, and can be governed and deployed within existing workflows. That product context is not evidence for private workspace controls, so this reference keeps the public marketing/product capture distinct from authenticated product claims.

## 12. Principles

1. **Start from an idea.** Natural-language requests, screenshots, and other inputs are presented as valid starting points for a project.
2. **Make iteration visible.** Public and documentation language emphasize reviewing, editing, versioning, and refining instead of treating generation as a final state.
3. **Keep code usable beyond the tool.** Official documentation describes editable code and GitHub synchronization; do not represent this as a claim about every integration or private control.
4. **Separate public evidence domains.** Marketing/product routes, documentation chrome, webfont delivery, and authenticated builder UI answer different questions and must not be merged into a fictional universal system.

## 13. Personas

Official documentation establishes task contexts rather than named personas:
- Individual builders, founders, students, and independent makers starting apps or prototypes.
- Product managers, designers, and marketers creating realistic prototypes, interfaces, and campaign surfaces.
- Developers, engineering teams, agencies, and enterprises extending generated code through existing workflows.

Specific job titles, company sizes, technical fluency, goals, or success metrics should come from a product brief rather than be invented for Lovable.

## 14. States

The collector observed public header hover, pressed, and focus states; pricing tab hover, pressed, and selected states; pricing selector pressed, focus, and menu-open states; plus menu-open and dialog-open overlays. Loading, empty, error, success, toast, validation, and authenticated builder states were not established and are omitted.

## 15. Motion & Easing

Current public controls include transition classes, but this packet did not record a reliable duration or easing value. No motion token is promoted. Preserve the observed interaction-state boundaries without fabricating animation behavior.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://lovable.dev/ko, https://lovable.dev/ko/pricing, https://lovable.dev/ko/product-managers, https://docs.lovable.dev/introduction/welcome, https://docs.lovable.dev/introduction/getting-started, https://lovable.dev/fonts/CameraPlainVariable-c48bd243.woff2
**Tier 2 sources:** https://getdesign.md/lovable/design-md (independent directory analysis) and https://styles.refero.design/style/9ff62d34-e48d-4fcb-9fd9-c018e2747542 (independent style analysis).
**Conflicts unresolved:** none
