---
id: vercel
name: Vercel
country: US
category: developer-tools
homepage: "https://vercel.com"
primary_color: "#171717"
logo:
  type: simpleicons
  slug: vercel
verified: "2026-07-12"
omd: "0.1"
ds:
  name: Geist
  url: "https://vercel.com/geist"
  type: system
  description: Vercel's official design-system and type-family documentation; marketing, component examples, and authenticated dashboard evidence remain distinct.
verification_v2:
  schema: 2
  checked: "2026-07-12"
  surfaces:
    - { id: home, kind: public-product, url: "https://vercel.com/", inspected: "2026-07-12" }
    - { id: geist, kind: official-design-system, url: "https://vercel.com/geist/introduction", inspected: "2026-07-12" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://vercel.com/", captured: "2026-07-12" }
    - { id: geist-live, kind: official-doc, url: "https://vercel.com/geist/introduction", captured: "2026-07-12" }
    - { id: geist-font, kind: license, url: "https://vercel.com/font", captured: "2026-07-12" }
  conflicts: []
  claims:
    "tokens.colors.primary": &home_evidence { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.canvas": *home_evidence
    "tokens.colors.foreground": *home_evidence
    "tokens.colors.body": *home_evidence
    "tokens.colors.muted": *home_evidence
    "tokens.colors.border": &geist_evidence { surface_id: geist, source_id: geist-live, method: live-inspect, captured: "2026-07-12" }
    "tokens.colors.surface": *home_evidence
    "tokens.typography.family.ui": *geist_evidence
    "tokens.typography.family.mono": *geist_evidence
    "tokens.typography.hero.size": *home_evidence
    "tokens.typography.hero.weight": *home_evidence
    "tokens.typography.hero.lineHeight": *home_evidence
    "tokens.typography.hero.tracking": *home_evidence
    "tokens.typography.hero.use": *home_evidence
    "tokens.typography.section.size": *home_evidence
    "tokens.typography.section.weight": *home_evidence
    "tokens.typography.section.lineHeight": *home_evidence
    "tokens.typography.section.tracking": *home_evidence
    "tokens.typography.section.use": *home_evidence
    "tokens.typography.feature.size": *home_evidence
    "tokens.typography.feature.weight": *home_evidence
    "tokens.typography.feature.lineHeight": *home_evidence
    "tokens.typography.feature.tracking": *home_evidence
    "tokens.typography.feature.use": *home_evidence
    "tokens.typography.card-title.size": *home_evidence
    "tokens.typography.card-title.weight": *home_evidence
    "tokens.typography.card-title.lineHeight": *home_evidence
    "tokens.typography.card-title.tracking": *home_evidence
    "tokens.typography.card-title.use": *home_evidence
    "tokens.typography.body.size": *home_evidence
    "tokens.typography.body.weight": *home_evidence
    "tokens.typography.body.lineHeight": *home_evidence
    "tokens.typography.body.use": *home_evidence
    "tokens.typography.ui.size": *home_evidence
    "tokens.typography.ui.weight": *home_evidence
    "tokens.typography.ui.lineHeight": *home_evidence
    "tokens.typography.ui.use": *home_evidence
    "tokens.typography.mono.size": *home_evidence
    "tokens.typography.mono.weight": *home_evidence
    "tokens.typography.mono.lineHeight": *home_evidence
    "tokens.typography.mono.use": *home_evidence
    "tokens.spacing.xs": *home_evidence
    "tokens.spacing.sm": *home_evidence
    "tokens.spacing.md": *home_evidence
    "tokens.spacing.lg": *geist_evidence
    "tokens.spacing.xl": *geist_evidence
    "tokens.rounded.compact": *geist_evidence
    "tokens.rounded.control": *geist_evidence
    "tokens.rounded.full": *geist_evidence
    "tokens.shadow.control-ring": *geist_evidence
    "tokens.components.header-link.type": *home_evidence
    "tokens.components.header-link.bg": *home_evidence
    "tokens.components.header-link.fg": *home_evidence
    "tokens.components.header-link.radius": *home_evidence
    "tokens.components.header-link.height": *home_evidence
    "tokens.components.header-link.font": *home_evidence
    "tokens.components.header-link.states": *home_evidence
    "tokens.components.header-link.use": *home_evidence
    "tokens.components.geist-secondary-action.type": *geist_evidence
    "tokens.components.geist-secondary-action.bg": *geist_evidence
    "tokens.components.geist-secondary-action.fg": *geist_evidence
    "tokens.components.geist-secondary-action.border": *geist_evidence
    "tokens.components.geist-secondary-action.radius": *geist_evidence
    "tokens.components.geist-secondary-action.padding": *geist_evidence
    "tokens.components.geist-secondary-action.height": *geist_evidence
    "tokens.components.geist-secondary-action.font": *geist_evidence
    "tokens.components.geist-secondary-action.states": *geist_evidence
    "tokens.components.geist-secondary-action.use": *geist_evidence
    "tokens.components.geist-icon-button.type": *geist_evidence
    "tokens.components.geist-icon-button.bg": *geist_evidence
    "tokens.components.geist-icon-button.fg": *geist_evidence
    "tokens.components.geist-icon-button.border": *geist_evidence
    "tokens.components.geist-icon-button.radius": *geist_evidence
    "tokens.components.geist-icon-button.size": *geist_evidence
    "tokens.components.geist-icon-button.states": *geist_evidence
    "tokens.components.geist-icon-button.use": *geist_evidence
    "tokens.components.geist-input.type": *geist_evidence
    "tokens.components.geist-input.bg": *geist_evidence
    "tokens.components.geist-input.fg": *geist_evidence
    "tokens.components.geist-input.border": *geist_evidence
    "tokens.components.geist-input.radius": *geist_evidence
    "tokens.components.geist-input.padding": *geist_evidence
    "tokens.components.geist-input.height": *geist_evidence
    "tokens.components.geist-input.font": *geist_evidence
    "tokens.components.geist-input.states": *geist_evidence
    "tokens.components.geist-input.use": *geist_evidence
    "tokens.components.geist-radio.type": *geist_evidence
    "tokens.components.geist-radio.bg": *geist_evidence
    "tokens.components.geist-radio.fg": *geist_evidence
    "tokens.components.geist-radio.radius": *geist_evidence
    "tokens.components.geist-radio.size": *geist_evidence
    "tokens.components.geist-radio.states": *geist_evidence
    "tokens.components.geist-radio.use": *geist_evidence
    "tokens.components.geist-example-card.type": *geist_evidence
    "tokens.components.geist-example-card.bg": *geist_evidence
    "tokens.components.geist-example-card.fg": *geist_evidence
    "tokens.components.geist-example-card.border": *geist_evidence
    "tokens.components.geist-example-card.radius": *geist_evidence
    "tokens.components.geist-example-card.padding": *geist_evidence
    "tokens.components.geist-example-card.gap": *geist_evidence
    "tokens.components.geist-example-card.use": *geist_evidence
tokens:
  source: reconciled
  extracted: "2026-07-12"
  note: "Fresh public home and official Geist introduction capture. Baseline-only mode avoided unsafe long-running interaction enumeration; current defaults are combined with explicit state absence rather than inferred hover values."
  colors:
    primary: "#171717"
    canvas: "#ffffff"
    foreground: "#171717"
    body: "#4d4d4d"
    muted: "#666666"
    border: "#ebebeb"
    surface: "#fafafa"
  typography:
    family: { ui: "Geist", mono: "Geist Mono" }
    hero: { size: 64, weight: 400, lineHeight: 1, tracking: -3.84, use: "Current public hero" }
    section: { size: 56, weight: 450, lineHeight: 1, tracking: -3.36, use: "Repeated current public section heading" }
    feature: { size: 30, weight: 400, lineHeight: 1.1, tracking: -1.5, use: "Current public feature statement" }
    card-title: { size: 24, weight: 600, lineHeight: 1.33, tracking: -0.96, use: "Current public technical card title" }
    body: { size: 16, weight: 400, lineHeight: 1.5, use: "Current public and Geist explanatory body" }
    ui: { size: 14, weight: 400, lineHeight: 1.43, use: "Current navigation, lists, and compact controls" }
    mono: { size: 14, weight: 400, lineHeight: 1.43, use: "Current technical labels and code-adjacent content" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 24, xl: 32 }
  rounded: { compact: 4, control: 6, full: 9999 }
  shadow:
    control-ring: "0 0 0 1px #ebebeb"
  components_harvested: true
  components:
    header-link: { type: button, bg: "transparent", fg: "#4d4d4d", radius: "0px", height: "32px", font: "14px / 400", states: "default captured; current baseline run did not promote hover or pressed values", use: "Current public header navigation link" }
    geist-secondary-action: { type: button, bg: "#ffffff", fg: "#171717", border: "0 0 0 1px #ebebeb", radius: "6px", padding: "0 10px", height: "36px", font: "14px / 500", states: "default official Geist example captured", use: "Official Geist secondary action example" }
    geist-icon-button: { type: button, bg: "#ffffff", fg: "#171717", border: "0 0 0 1px #ebebeb", radius: "6px", size: "36px", states: "default official Geist example captured", use: "Official Geist compact icon-button example" }
    geist-input: { type: input, bg: "#ffffff", fg: "#171717", border: "adjacent control ring #ebebeb", radius: "0px", padding: "0 12px", height: "36px", font: "14px / 400", states: "default official Geist example captured; no focus value promoted", use: "Official Geist compact input example" }
    geist-radio: { type: toggle, bg: "transparent", fg: "#4d4d4d", radius: "9999px", size: "32px", states: "unchecked observed", use: "Official Geist radio example" }
    geist-example-card: { type: card, bg: "transparent", fg: "#171717", border: "shared #ebebeb grid boundary", radius: "0px", padding: "32px", gap: "24px", use: "Official Geist component-example card" }
---

# Design System Inspiration of Vercel

## 1. Visual Theme & Atmosphere

Vercel is a developer platform for building, deploying, and operating web applications, with Next.js and AI-oriented application workflows central to its current public story. The interface turns infrastructure into a visual grid: white fields, near-black type, hairline `#ebebeb` boundaries, technical diagrams, code-adjacent labels, and large compressed headings. Product imagery and system diagrams carry complexity while the surrounding UI remains deliberately quiet, connecting developer precision with a clear editorial explanation of the platform's direction and scope.

The current home is more typographically expansive than the prior snapshot. A 64px/400 hero and repeated 56px/450 section headings use strong negative tracking, while 30px feature statements and dense 14px UI layers connect editorial storytelling to developer tooling. `GeistSans` is the loaded implementation alias on 428 visible elements; the official family is Geist. Geist Mono loaded across 65 elements and marks commands, technical labels, and code-adjacent content.

The official Geist documentation makes the system inspectable beyond marketing. Its examples expose 6px ring-bordered controls, 36px compact actions and inputs, 32px radio controls, and flat 32px-padded example cards. These examples are valid Geist system evidence, but they do not automatically describe every authenticated Vercel dashboard state.

**Key Characteristics:**
- White canvas with `#171717`, `#4d4d4d`, and `#666666` information steps
- Geist with strongly negative tracking at 64px, 56px, 30px, and 24px scales
- Geist Mono as a genuine loaded technical companion
- `#ebebeb` hairlines and ring-borders instead of decorative elevation
- Flat grid compositions and 6px compact official controls
- Strict boundary between public home, Geist examples, and authenticated product UI

## 2. Color Palette & Roles

- **Primary/foreground** (`#171717`): current headings, controls, and technical content.
- **Canvas** (`#ffffff`): dominant page and control surface.
- **Body** (`#4d4d4d`): current explanatory and navigation text.
- **Muted** (`#666666`): supporting public copy.
- **Border** (`#ebebeb`): highly repeated grid, ring, and boundary color.
- **Subtle surface** (`#fafafa`): quiet current section/background tint.

Earlier Ship red, Preview pink, Develop blue, console syntax colors, link blue, and badge blue are omitted because this capture did not establish reusable current roles for them. Their historical or local presence does not authorize global tokens.

## 3. Typography Rules

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | Vercel's current home and official Geist documentation establish Geist and Geist Mono. |
| Live surface-use | `GeistSans` loaded/high with 428 uses; Geist Mono loaded/high with 65 uses. The docs' computed `Geist` alias had no separately matched FontFace, so it is reconciled through official family documentation rather than treated as a third font. |
| Official distributed asset | Geist and Geist Mono are officially distributed by Vercel under OFL. |
| Declared-only | Geist Pixel Circle/Grid/Line/Square/Triangle and GeistSans Fallback were declared with zero visible use. |
| Unresolved | Authenticated dashboard-only overrides and product-specific font loading remain unresolved. |

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---:|
| Public hero | Geist | 64px | 400 | 64px | -3.84px |
| Public section | Geist | 56px | 450 | 56px | -3.36px |
| Feature statement | Geist | 30px | 400 | 33px | -1.5px |
| Technical card title | Geist | 24px | 600 | 32px | -0.96px |
| Body | Geist | 16px | 400 | 24px | normal |
| UI/list | Geist | 14px | 400 | 20px | normal |
| Technical label | Geist Mono | 14px | 400–600 | 20px | normal |

## 4. Component Stylings

### Current public home

#### Header link
- Transparent / `#4d4d4d`, 0px radius, 32px height
- Geist 14px/400
- Default captured; no current hover or pressed value promoted from the baseline-only run

### Official Geist examples

#### Secondary action
- White / `#171717`, 6px radius, 36px height, `0 10px`
- `0 0 0 1px #ebebeb` ring; Geist 14px/500

#### Icon button
- White / `#171717`, 36px square, 6px radius, `#ebebeb` ring

#### Compact input
- White / `#171717`, 36px height, `0 12px`, Geist 14px/400
- Captured as the rectangular input region beside a ring-bordered control; no separate universal focus value promoted

#### Radio
- Transparent / `#4d4d4d`, 32px circle; unchecked state observed

#### Component-example card
- Transparent / `#171717`, 0px radius, 32px padding, 24px internal gap
- Participates in the shared `#ebebeb` documentation grid rather than carrying an independent floating shadow

Login CTAs, dashboard project cards, deployment states, command menus, badges, toasts, and authenticated inputs are omitted until a current accessible product path verifies their exact implementation.

## 5. Layout Principles

- Use hairline grids to organize technical complexity without heavy containers.
- Let large compressed headings alternate with diagrams, code, and product imagery.
- Keep compact system controls at 32–36px and 4–6px radius.
- Use Geist Mono where content is genuinely technical, not as decorative developer flavor.
- Separate marketing compositions from reusable Geist examples and authenticated product patterns.

## 6. Depth & Elevation

The current promoted system is primarily planar. `0 0 0 1px #ebebeb` creates a ring-boundary without changing box geometry. Earlier multi-layer card shadows are not retained as universal current tokens.

## 7. Do's and Don'ts

### Do
- Use the exact current neutral hierarchy and `#ebebeb` grid logic.
- Preserve Geist's observed negative tracking and moderate weights.
- Use official Geist examples for reusable controls while naming their documentation context.
- Keep public, documentation, and authenticated evidence separate.

### Don't
- Do not reintroduce workflow accents or badge colors from an older snapshot without current evidence.
- Do not make every developer label monospace.
- Do not invent dashboard, deployment, login, or command-menu states.
- Do not apply layered elevation where a hairline grid is the verified structure.

## 8. Responsive Behavior

The current public site reflows large headings, technical diagrams, and grid sections while maintaining the neutral hierarchy. Official Geist examples remain compact and composable. Authenticated dashboard breakpoints, mobile project navigation, and deployment-log overflow remain unresolved.

## 9. Agent Prompt Guide

> Build a precise developer-platform surface on white with `#171717` headings, `#4d4d4d` body text, `#ebebeb` grid lines, Geist with compressed large-scale tracking, Geist Mono for technical content, and flat 6px ring-bordered controls. Omit unverified dashboard and deployment states.

## 10. Voice & Tone

Vercel's public language is technical, direct, and outcome-oriented. It connects platform capability to building, shipping, scaling, and AI application work without explaining every infrastructure detail up front. Product and documentation copy should name the artifact or system involved—application, deployment, framework, model, environment, or team—and connect it to an observable next action. Enterprise material can discuss coordination and reliability but should remain concrete. Prefer active verbs, precise platform nouns, and short supporting explanations. Avoid invented performance numbers or universal claims not present in current first-party material.

## 11. Brand Narrative

Vercel evolved from ZEIT into a platform closely associated with Next.js and the frontend cloud, then expanded its story toward AI-native application development. Geist makes that evolution visible: a type and component system shaped for interfaces where code, deployment state, documentation, and product storytelling meet. The triangle symbol, monochrome structure, and tight typography keep the platform recognizable without relying on a broad color palette. The platform narrative consistently moves complexity behind a clearer developer workflow: source becomes a deployment, a deployment becomes an inspectable environment, and a team can iterate on the result. Current AI messaging extends that same premise to models and generated application experiences rather than replacing the foundation. Hairline grids, technical diagrams, and mono labels make infrastructure legible; large Geist headings make the product direction legible to a broader audience.

## 12. Principles

1. **Remove infrastructure noise.** Visual structure should clarify the application and its state.
2. **Make technical content native.** Type, grids, and mono roles should serve real information.
3. **Use precise defaults.** Small control geometry and neutral boundaries should be consistent.
4. **Keep evidence layers explicit.** Geist examples are reusable system evidence; marketing and private dashboard UI remain separate, and one must not silently fill gaps in another.

## 13. Personas

First-party material establishes task contexts only:
- A developer evaluating how to build and deploy an application.
- A team comparing platform, framework, AI, or enterprise capabilities.
- A designer or engineer consulting the official Geist system.

Project-specific names, company size, stack, deployment volume, budget, and success metrics are intentionally unspecified and must come from the product brief.

## 14. States

The official Geist radio exposed an unchecked state, and one compact icon action exposed disabled in the baseline. The canonical controls otherwise retain explicit default-only state boundaries. Hover, focus, pressed, loading, success, error, deployment, and authenticated dashboard states are absent unless separately recaptured.

## 15. Motion & Easing

No reusable duration or easing curve is promoted. Baseline DOM capture cannot establish a universal motion system, and the current reference does not infer one.

---

**Verified:** 2026-07-12 (omd:migrate)
**Tier 1 sources:** https://vercel.com/ ; https://vercel.com/geist/introduction ; https://vercel.com/font
**Tier 2 attempts:** getdesign.md/vercel supplied a directory entry only; Refero had no reliable Vercel record
**Conflicts unresolved:** none
