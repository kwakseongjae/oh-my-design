---
id: toss
name: Toss
country: KR
category: fintech
homepage: "https://toss.im"
primary_color: "#0064ff"
logo:
  type: favicon
  slug: "https://static.toss.im/icons/png/4x/icon-toss-logo.png"
verified: "2026-07-11"
omd: "0.1"
ds:
  name: TDS Mobile
  url: "https://tossmini-docs.toss.im/tds-mobile/"
  type: system
  description: Toss's public mobile design-system documentation.
verification_v2:
  schema: 2
  checked: "2026-07-11"
  surfaces:
    - { id: marketing-home, kind: marketing, url: "https://toss.im/", inspected: "2026-07-11" }
    - { id: marketing-story, kind: marketing, url: "https://toss.im/docs/10290", inspected: "2026-07-11" }
    - { id: tds-button, kind: design-system, url: "https://tossmini-docs.toss.im/tds-mobile/components/button/", inspected: "2026-07-11" }
    - { id: tds-agreement-v3, kind: design-system, url: "https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v3/", inspected: "2026-07-11" }
    - { id: tds-agreement-v4, kind: design-system, url: "https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v4/", inspected: "2026-07-11" }
  sources:
    - { id: toss-live, kind: product-surface, url: "https://toss.im/", captured: "2026-07-11" }
    - { id: tds-button-live, kind: official-doc, url: "https://tossmini-docs.toss.im/tds-mobile/components/button/", captured: "2026-07-11" }
    - { id: tds-text-field, kind: official-doc, url: "https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/", captured: "2026-07-11" }
    - { id: tds-badge, kind: official-doc, url: "https://tossmini-docs.toss.im/tds-mobile/components/badge/", captured: "2026-07-11" }
    - { id: tds-agreement, kind: official-doc, url: "https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v4/", captured: "2026-07-11" }
  claims:
    "tokens.colors.primary": &tds_button { surface_id: tds-button, source_id: tds-button-live, method: computed-style-and-official-doc, captured: "2026-07-11" }
    "tokens.colors.primary-hover": *tds_button
    "tokens.colors.canvas": &toss_live { surface_id: marketing-home, source_id: toss-live, method: computed-style, captured: "2026-07-11" }
    "tokens.colors.foreground": *toss_live
    "tokens.colors.body": *toss_live
    "tokens.colors.muted": *toss_live
    "tokens.colors.surface": *toss_live
    "tokens.colors.border": *toss_live
    "tokens.colors.on-primary": *tds_button
    "tokens.colors.weak-background": *toss_live
    "tokens.colors.weak-foreground": *toss_live
    "tokens.colors.danger": *tds_button
    "tokens.typography.family.sans": *tds_button
    "tokens.typography.h1.size": *tds_button
    "tokens.typography.h1.weight": *tds_button
    "tokens.typography.h1.lineHeight": *tds_button
    "tokens.typography.h2.size": *tds_button
    "tokens.typography.h2.weight": *tds_button
    "tokens.typography.h2.lineHeight": *tds_button
    "tokens.typography.h3.size": *tds_button
    "tokens.typography.h3.weight": *tds_button
    "tokens.typography.h3.lineHeight": *tds_button
    "tokens.typography.h4.size": *tds_button
    "tokens.typography.h4.weight": *tds_button
    "tokens.typography.h4.lineHeight": *tds_button
    "tokens.typography.body.size": *tds_button
    "tokens.typography.body.weight": *tds_button
    "tokens.typography.body.lineHeight": *tds_button
    "tokens.typography.body-small.size": *tds_button
    "tokens.typography.body-small.weight": *tds_button
    "tokens.typography.body-small.lineHeight": *tds_button
    "tokens.spacing.xs": *tds_button
    "tokens.spacing.sm": *tds_button
    "tokens.spacing.md": *tds_button
    "tokens.spacing.lg": *tds_button
    "tokens.spacing.xl": *tds_button
    "tokens.spacing.xxl": *tds_button
    "tokens.rounded.sm": *tds_button
    "tokens.rounded.md": *tds_button
    "tokens.rounded.button-small": *tds_button
    "tokens.rounded.button-medium": *tds_button
    "tokens.rounded.button-large": *tds_button
    "tokens.rounded.button-xlarge": *tds_button
    "tokens.components.tds-button.type": *tds_button
    "tokens.components.tds-button.bg": *tds_button
    "tokens.components.tds-button.fg": *tds_button
    "tokens.components.tds-button.radius": *tds_button
    "tokens.components.tds-button.height": *tds_button
    "tokens.components.tds-button.padding": *tds_button
    "tokens.components.tds-button.font": *tds_button
    "tokens.components.tds-button.states": *tds_button
    "tokens.components.tds-button.use": *tds_button
    "tokens.components.text-field.type": &tds_field { surface_id: tds-button, source_id: tds-text-field, method: official-doc, captured: "2026-07-11" }
    "tokens.components.text-field.states": *tds_field
    "tokens.components.text-field.use": *tds_field
    "tokens.components.badge.type": &tds_badge_claim { surface_id: tds-button, source_id: tds-badge, method: official-doc, captured: "2026-07-11" }
    "tokens.components.badge.states": *tds_badge_claim
    "tokens.components.badge.use": *tds_badge_claim
    "tokens.components.agreement.type": &tds_agreement_claim { surface_id: tds-agreement-v4, source_id: tds-agreement, method: computed-style-and-official-doc, captured: "2026-07-11" }
    "tokens.components.agreement.states": *tds_agreement_claim
    "tokens.components.agreement.use": *tds_agreement_claim
    "tokens.components.marketing-primary.type": *toss_live
    "tokens.components.marketing-primary.bg": *toss_live
    "tokens.components.marketing-primary.fg": *toss_live
    "tokens.components.marketing-primary.radius": *toss_live
    "tokens.components.marketing-primary.height": *toss_live
    "tokens.components.marketing-primary.padding": *toss_live
    "tokens.components.marketing-primary.font": *toss_live
    "tokens.components.marketing-primary.states": *toss_live
    "tokens.components.marketing-primary.use": *toss_live
    "tokens.components.marketing-dark.type": *toss_live
    "tokens.components.marketing-dark.bg": *toss_live
    "tokens.components.marketing-dark.fg": *toss_live
    "tokens.components.marketing-dark.radius": *toss_live
    "tokens.components.marketing-dark.height": *toss_live
    "tokens.components.marketing-dark.padding": *toss_live
    "tokens.components.marketing-dark.font": *toss_live
    "tokens.components.marketing-dark.states": *toss_live
    "tokens.components.marketing-dark.use": *toss_live
  conflicts: []
tokens:
  source: reconciled
  extracted: "2026-07-11"
  note: "TDS Mobile product tokens and toss.im marketing variants are intentionally separate."
  colors:
    primary: "#3182f6"
    primary-hover: "#2272eb"
    canvas: "#ffffff"
    foreground: "#191f28"
    body: "#4e5968"
    muted: "#8b95a1"
    surface: "#f2f4f6"
    border: "#e5e8eb"
    on-primary: "#ffffff"
    weak-background: "#e8f3ff"
    weak-foreground: "#1b64da"
    danger: "#e42939"
  typography:
    family: { sans: "Toss Product Sans" }
    h1: { size: 36, weight: 700, lineHeight: "54px" }
    h2: { size: 30, weight: 600, lineHeight: "45px" }
    h3: { size: 24, weight: 600, lineHeight: "36px" }
    h4: { size: 22, weight: 600, lineHeight: "33px" }
    body: { size: 16, weight: 400, lineHeight: "24px" }
    body-small: { size: 14, weight: 400, lineHeight: "21px" }
  spacing: { xs: 4, sm: 6, md: 8, lg: 16, xl: 24, xxl: 32 }
  rounded: { sm: 4, md: 6, button-small: 8, button-medium: 10, button-large: 14, button-xlarge: 16 }
  components_harvested: true
  components:
    tds-button: { type: button, bg: "#3182f6", fg: "#ffffff", radius: "16px", height: "56px", padding: "0 20px", font: "17px / 600", states: "fill or weak; primary, danger, light, or dark; loading, disabled, pressed, and keyboard focus", use: "TDS Mobile xlarge primary action" }
    text-field: { type: input, states: "box, line, big, hero; focus, error, disabled, read-only", use: "TDS Mobile text entry with help or error text" }
    badge: { type: badge, states: "fill or weak; xsmall, small, medium, large; semantic color variants", use: "TDS Mobile status or category label; not an action" }
    agreement: { type: toggle, states: "checked, unchecked, disabled, and nested agreement hierarchy", use: "TDS Mobile terms selection in v3 and v4 surfaces" }
    marketing-primary: { type: button, bg: "#e8f3ff", fg: "#1b64da", radius: "7px", height: "40px", padding: "11px 16px", font: "15px / 600", states: "default observed; hover not captured in the retained evidence bundle", use: "toss.im light-blue marketing CTA" }
    marketing-dark: { type: button, bg: "rgba(0, 12, 30, 0.8)", fg: "#ffffff", radius: "7px", height: "46px", padding: "11px 16px", font: "17px / 600", states: "default observed; hover not captured in the retained evidence bundle", use: "toss.im app-store style CTA" }
---

# Design System Inspiration of Toss (토스)

## 1. Visual Theme & Atmosphere

Toss is a unified financial platform that tries to make consequential money decisions feel answerable, immediate, and visually calm. Its public design spans two related but distinct systems: TDS Mobile documents product UI with large, touch-oriented controls and explicit state contracts, while `toss.im` uses a tighter marketing-web button system. Across both, a strong blue action color, plain language, generous hierarchy, and purpose-built typography reduce the institutional distance people often feel around finance. This reference keeps product and marketing surfaces separate instead of forcing their geometry into one false universal component.

The verified common language is Toss Product Sans, a bright blue interaction accent, warm blue-grey neutrals, and direct hierarchy. Exact values below are limited to current computed styles or current official TDS documentation.

**Key Characteristics:**
- Product primary `#3182f6`; marketing weak CTA `#e8f3ff` / `#1b64da`
- Toss Product Sans loaded and used across all 810 visible TDS observations
- Four documented TDS button sizes with explicit loading and disabled behavior
- Surface-specific component geometry rather than one blended “Toss style”

## 2. Color Palette & Roles

### Product and shared roles
- **Primary** (`#3182f6`): TDS interaction blue and primary action reference.
- **Primary Hover / Strong Blue** (`#2272eb`): stronger blue visible in current TDS documentation.
- **Canvas** (`#ffffff`): principal light background.
- **Foreground** (`#191f28`): strongest product text.
- **Body** (`#4e5968`): emphasized body and neutral action text.
- **Muted** (`#8b95a1`): secondary product text.
- **Surface** (`#f2f4f6`): quiet neutral layer.
- **Border** (`#e5e8eb`): light divider or outline reference.
- **On Primary** (`#ffffff`): text on filled primary actions.
- **Danger** (`#e42939`): destructive/error text observed in the current TDS page.

### Marketing-web roles
- **Weak Background** (`#e8f3ff`) and **Weak Foreground** (`#1b64da`): current light-blue `toss.im` CTA pair.
- The official logo/brand blue in frontmatter is catalog identity metadata; do not substitute it for the verified UI primary `#3182f6`.

## 3. Typography Rules

### Font Family
- **Canonical visible UI family**: `Toss Product Sans`. The collector found 810 visible first-family uses backed by loaded FontFace resources.
- **Tossface status**: declared in FontFace resources but not observed as the first family on a visible element. It is therefore context, not a canonical UI token.
- **Monospace**: no current canonical monospace claim.

### Current TDS documentation hierarchy

| Role | Size | Weight | Line Height | Evidence |
|---|---:|---:|---:|---|
| H1 | 36px | 700 | 54px | computed TDS documentation style |
| H2 | 30px | 600 | 45px | computed TDS documentation style |
| H3 | 24px | 600 | 36px | computed TDS documentation style |
| H4 | 22px | 600 | 33px | computed TDS documentation style |
| Body | 16px | 400 | 24px | dominant visible role |
| Body Small | 14px | 400 | 21px | secondary visible role |

These are evidence-backed public-document roles, not a claim that every native Toss product screen uses this exact hierarchy.

| Evidence class | Toss status |
|---|---|
| **Official product-use** | Toss Product Sans was designed for financial symbols and mobile, desktop, and offline product contexts |
| **Live surface-use** | Toss Product Sans is loaded and visibly used throughout the inspected TDS documentation surfaces |
| **Official distributed asset** | No general redistribution right is asserted by the current official sources |
| **Declared-only** | Tossface is declared in captured FontFace resources but was not observed as the visible first family |
| **Unresolved** | Public redistribution/license terms and exact native-screen type metrics beyond documented TDS roles |

## 4. Component Stylings

### TDS Mobile Button
- Background: `#3182f6` for the canonical primary reference
- Text: `#ffffff`
- Radius: 16px at xlarge
- Height: 56px at xlarge
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Size scale: small 32px / 8px radius; medium 38px / 10px; large 48px / 14px; xlarge 56px / 16px
- States: fill or weak; primary, danger, light, or dark; loading, disabled, pressed, and keyboard focus
- Use: primary and secondary mobile actions; preserve width while loading

### TDS Mobile Text Field
- Variants: box, line, big, hero
- States: focus, error, disabled, read-only
- Use: text entry with label, help text, and error text. Do not transfer undocumented page-chrome colors into the product field token.

### TDS Mobile Badge
- Variants: fill or weak; xsmall, small, medium, large; semantic colors
- States: semantic and size variants; badge is descriptive rather than interactive
- Use: compact status or category label

### TDS Mobile Agreement
- States: checked, unchecked, disabled, and nested agreement hierarchy
- Use: terms selection; v3 and v4 are retained as separate official surfaces because both are publicly documented

### toss.im Marketing Primary
- Background: `#e8f3ff`
- Text: `#1b64da`
- Radius: 7px
- Height: 40px
- Padding: 11px 16px
- Font: 15px / 600 / Toss Product Sans
- States: default observed; hover not captured in the retained evidence bundle
- Use: light-blue marketing CTA

### toss.im Marketing Dark
- Background: `rgba(0, 12, 30, 0.8)`
- Text: `#ffffff`
- Radius: 7px
- Height: 46px
- Padding: 11px 16px
- Font: 17px / 600 / Toss Product Sans
- States: default observed; hover not captured in the retained evidence bundle
- Use: app-store style marketing CTA

---

**Verified:** 2026-07-11 (verification v2, live computed-style capture + current official TDS docs)
**Tier 1 sources:** https://toss.im/ https://toss.im/docs/10290 https://tossmini-docs.toss.im/tds-mobile/components/button/ https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/ https://tossmini-docs.toss.im/tds-mobile/components/badge/
**Tier 2 sources:** https://getdesign.md/toss produced no importable Toss record; https://styles.refero.design/?q=Toss produced no importable result through the available fetch path.
**Surface split:** TDS Mobile xlarge uses 56px height and 16px radius; `toss.im` marketing actions observed here use 40–46px height and 7px radius.
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Captured TDS documentation clusters: 4px, 6px, 8px, 16px, 24px, and 32px.
- Treat those values as a compact working scale, not proof of every native product layout token.

### Grid & Container
- TDS component documentation is mobile-oriented; its xlarge button is designed as a strong touch action.
- The public marketing site uses a distinct responsive web composition and should not inherit mobile component geometry wholesale.

### Border Radius Scale
- Documentation chrome and components cluster around 4px and 6px for small surfaces.
- Button sizes use 8px, 10px, 14px, and 16px radii from small through xlarge.

## 6. Depth & Elevation

No canonical shadow token is promoted in this revision. The inspected evidence contains documentation-site chrome as well as TDS examples, so treating every computed shadow as a Toss product token would overstate the source. Use flat color layering until a component-specific official source verifies elevation.

## 7. Do's and Don'ts

### Do
- Keep TDS Mobile and `toss.im` marketing variants explicitly named by surface.
- Use `Toss Product Sans` where the font is available, with a system fallback for resilience.
- Preserve documented loading, disabled, pressed, and keyboard-focus states on buttons.
- Treat badge content as status metadata, not as an action affordance.
- Use exact component geometry only where the evidence names a size and surface.

### Don't
- Don't use logo brand blue as a silent replacement for UI primary `#3182f6`.
- Don't claim Tossface is the visible primary UI font; it was declared but unused in this capture.
- Don't copy documentation-site colors into native product tokens without component-level evidence.
- Don't merge the 16px TDS radius with the 7px marketing radius into an average value.
- Don't invent cards, shadows, tabs, toasts, or dialogs from generic fintech conventions.

## 8. Responsive Behavior

- TDS Mobile component sizes should remain touch-oriented; xlarge is the documented default button size.
- On web, preserve the observed 40px or 46px marketing button height rather than substituting the 56px mobile control.
- The public sources in this verification do not establish universal breakpoints, desktop maximum widths, or native safe-area values.

## 9. Agent Prompt Guide

- “Create a TDS Mobile xlarge primary button using `#3182f6`, white text, 56px height, 16px radius, 17px/600 Toss Product Sans, and explicit loading/disabled/focus behavior.”
- “Create a `toss.im` weak marketing CTA using `#e8f3ff` background, `#1b64da` text, 40px height, and 7px radius.”
- “Use Toss Product Sans for the verified UI family; do not promote Tossface without visible usage evidence.”
- “If building a component not listed here, mark it as an extension rather than presenting it as verified TDS.”

## 10. Voice & Tone

Toss speaks as a capable guide that removes work rather than displaying financial expertise. Copy is short and direct, but the governing idea is not minimal word count by itself: a person should understand the value, answer the question, and recover from uncertainty without decoding industry language. Official product-design writing describes principles such as **Easy to answer** and **Value first, cost later**—make choices concrete, and show why an action is worthwhile before asking for effort, data, or commitment.

In product flows, name the outcome and next action precisely. In education or product-branding surfaces, explain one unfamiliar idea in everyday language and let the interface carry the rest. Avoid vague reassurance, unexplained abbreviations, institutional phrasing, or playful copy that makes a financial consequence ambiguous.

## 11. Brand Narrative

Toss presents finance as a connected product experience rather than a collection of institutional silos. Its design system supports that ambition by making repeated actions—checking, comparing, agreeing, paying, and recovering—feel consistent even when the underlying financial products differ.

The company’s first-party design writing shows how this consistency became a brand system inside the product. Product branding is treated as the experience people receive while using a feature, not merely a campaign wrapped around it. Toss Product Sans extends the same logic into typography: numbers, symbols, Korean text, and multiple digital and offline contexts were considered as one product problem.

The practical design position is therefore clarity with momentum. **Easy to answer** reduces the cognitive cost of a decision; **Value first, cost later** makes benefit legible before asking for commitment. Blue, typography, motion, and microcopy are useful only when they help a person move through money with more confidence.

## 12. Principles

The following are implementation principles derived from the verified surfaces, not quoted corporate doctrine:

1. Separate product-system evidence from marketing-surface evidence.
2. Make interaction blue functional rather than decorative.
3. Preserve component states, especially disabled, loading, pressed, and keyboard focus.
4. Prefer exact, readable typography over ornamental depth.
5. Treat financial outcomes as explicit states with clear next actions.

## 13. Personas

These are first-party product contexts, not invented demographic personas.

- **A person answering a financial question:** needs options translated into concrete, comparable choices rather than a dense form or open-ended prompt.
- **A person evaluating value before effort:** needs the likely benefit made visible before consent, document upload, consultation, or payment is requested.
- **A person recovering from an interrupted flow:** needs the current state, consequence, and next safe action stated explicitly, especially in insurance, payment, or account contexts.

## 14. States

| Component | Verified state contract |
|---|---|
| TDS Button | fill/weak, semantic color, loading, disabled, pressed, keyboard focus |
| TDS Text Field | box/line/big/hero, focus, error, disabled, read-only |
| TDS Agreement | checked, unchecked, disabled, nested hierarchy |
| Marketing CTAs | default geometry captured; hover remains unclaimed |

## 15. Motion & Easing

No canonical motion duration or easing token is promoted in this revision. Preserve state clarity and reduced-motion compatibility, but label any exact animation curve or duration as a local extension until it is verified from an official component source.
