---
name: Toss
description: Toss product (TDS Mobile) and toss.im marketing surfaces, kept separate. Values are limited to current computed styles and current official TDS documentation; unresolved values are omitted.
colors:
  primary: '#3182f6'
  primary-hover: '#2272eb'
  canvas: '#ffffff'
  foreground: '#191f28'
  body: '#4e5968'
  muted: '#8b95a1'
  surface: '#f2f4f6'
  border: '#e5e8eb'
  on-primary: '#ffffff'
  weak-background: '#e8f3ff'
  weak-foreground: '#1b64da'
  danger: '#e42939'
typography:
  h1:
    fontSize: 36px
    fontWeight: 700
    lineHeight: 54px
    fontFamily: Toss Product Sans, sans-serif
  h2:
    fontSize: 30px
    fontWeight: 600
    lineHeight: 45px
    fontFamily: Toss Product Sans, sans-serif
  h3:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 36px
    fontFamily: Toss Product Sans, sans-serif
  h4:
    fontSize: 22px
    fontWeight: 600
    lineHeight: 33px
    fontFamily: Toss Product Sans, sans-serif
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    fontFamily: Toss Product Sans, sans-serif
  body-small:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    fontFamily: Toss Product Sans, sans-serif
rounded:
  sm: 4px
  md: 6px
  button-small: 8px
  button-medium: 10px
  button-large: 14px
  button-xlarge: 16px
spacing:
  xs: 4
  sm: 6
  md: 8
  lg: 16
  xl: 24
  xxl: 32
components:
  tds-button:
    type: button
    backgroundColor: '#3182f6'
    textColor: '#ffffff'
    rounded: 16px
    height: 56px
    padding: 0 20px
    typography: 17px / 600
    pressed: scale(0.96); 56px renders 54px, fill unchanged
    focus: '0 0 0 1px #8ac0ff, 0 0 0 3px #b8d9ff ring on :focus-visible'
    states: fill or weak; primary, danger, light, or dark; loading, disabled, pressed, and keyboard focus. Hover produces no observable change on the official component page — the press feedback is geometric, not tonal
    use: TDS Mobile xlarge primary action
  text-field:
    type: input
    states: box, line, big, hero; focus, error, disabled, read-only
    use: TDS Mobile text entry with help or error text
  badge:
    type: badge
    states: fill or weak; xsmall, small, medium, large; semantic color variants
    use: TDS Mobile status or category label; not an action
  agreement:
    type: toggle
    states: checked, unchecked, disabled, and nested agreement hierarchy
    use: TDS Mobile terms selection in v3 and v4 surfaces
  marketing-primary:
    type: button
    backgroundColor: '#e8f3ff'
    textColor: '#1b64da'
    rounded: 7px
    height: 40px
    padding: 11px 16px
    typography: 15px / 600
    states: default observed; hover not captured in the retained evidence bundle
    use: toss.im light-blue marketing CTA
  marketing-dark:
    type: button
    backgroundColor: rgba(0, 12, 30, 0.8)
    textColor: '#ffffff'
    rounded: 7px
    height: 46px
    padding: 11px 16px
    typography: 17px / 600
    states: default observed; hover not captured in the retained evidence bundle
    use: toss.im app-store style CTA
fonts:
  roles:
    sans: Toss Product Sans
  faces:
    Toss Product Sans:
      scripts:
        - hangul
        - latin
      evidence:
        - official-product-use
        - live-surface-use
      distribution: none-asserted
    Tossface:
      evidence:
        - declared-only
  safeDefaults:
    hangul:
      - Noto Sans KR
    latin:
      - Noto Sans
---

# Design System Inspiration of Toss (토스)

## Overview

### Visual Theme & Atmosphere

Toss is a unified financial platform that tries to make consequential money decisions feel answerable, immediate, and visually calm. Its public design spans two related but distinct systems: TDS Mobile documents product UI with large, touch-oriented controls and explicit state contracts, while `toss.im` uses a tighter marketing-web button system. Across both, a strong blue action color, plain language, generous hierarchy, and purpose-built typography reduce the institutional distance people often feel around finance. This reference keeps product and marketing surfaces separate instead of forcing their geometry into one false universal component.

The verified common language is Toss Product Sans, a bright blue interaction accent, warm blue-grey neutrals, and direct hierarchy. Exact values below are limited to current computed styles or current official TDS documentation.

**Key Characteristics:**
- Product primary `#3182f6`; marketing weak CTA `#e8f3ff` / `#1b64da`
- Toss Product Sans loaded and used across all 810 visible TDS observations
- Four documented TDS button sizes with explicit loading and disabled behavior
- Surface-specific component geometry rather than one blended “Toss style”

### Primary tasks

- Check on financial products that normally live in separate institutions
- Compare options as concrete, comparable choices before deciding
- See what a product is worth before consenting, uploading, or paying
- Agree to terms, including nested sub-agreements, before a product starts
- Pay, and read back the outcome and the next action in plain language
- Pick up an interrupted insurance, payment, or account flow where it broke

### Brand Narrative

Toss presents finance as a connected product experience rather than a collection of institutional silos. Its design system supports that ambition by making repeated actions—checking, comparing, agreeing, paying, and recovering—feel consistent even when the underlying financial products differ.

The company’s first-party design writing shows how this consistency became a brand system inside the product. Product branding is treated as the experience people receive while using a feature, not merely a campaign wrapped around it. Toss Product Sans extends the same logic into typography: numbers, symbols, Korean text, and multiple digital and offline contexts were considered as one product problem.

The practical design position is therefore clarity with momentum. **Easy to answer** reduces the cognitive cost of a decision; **Value first, cost later** makes benefit legible before asking for commitment. Blue, typography, motion, and microcopy are useful only when they help a person move through money with more confidence.

### Principles

The following are implementation principles derived from the verified surfaces, not quoted corporate doctrine:

1. Separate product-system evidence from marketing-surface evidence.
2. Make interaction blue functional rather than decorative.
3. Preserve component states, especially disabled, loading, pressed, and keyboard focus.
4. Prefer exact, readable typography over ornamental depth.
5. Treat financial outcomes as explicit states with clear next actions.

### Personas

These are first-party product contexts, not invented demographic personas.

- **A person answering a financial question:** needs options translated into concrete, comparable choices rather than a dense form or open-ended prompt.
- **A person evaluating value before effort:** needs the likely benefit made visible before consent, document upload, consultation, or payment is requested.
- **A person recovering from an interrupted flow:** needs the current state, consequence, and next safe action stated explicitly, especially in insurance, payment, or account contexts.

## Colors

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

## Typography

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

### Brand face, substitute, safe default

- **Brand face:** Toss Product Sans. No general redistribution right is asserted by the current official sources, so most adopters cannot install it.
- **Substitute:** none chosen. No measured comparison against an open-licence face exists yet, so no face is named as a substitute.
- **Safe default (not the brand face):** Noto Sans KR for Hangul and Noto Sans for Latin, when a project must install a face. Label it as a fallback; never present it as Toss Product Sans.

## Layout

### Spacing System
- Captured TDS documentation clusters: 4px, 6px, 8px, 16px, 24px, and 32px.
- Treat those values as a compact working scale, not proof of every native product layout token.

### Grid & Container
- TDS component documentation is mobile-oriented; its xlarge button is designed as a strong touch action.
- The public marketing site uses a distinct responsive web composition and should not inherit mobile component geometry wholesale.

### Border Radius Scale
- Documentation chrome and components cluster around 4px and 6px for small surfaces.
- Button sizes use 8px, 10px, 14px, and 16px radii from small through xlarge.

### Responsive Behavior

- TDS Mobile component sizes should remain touch-oriented; xlarge is the documented default button size.
- On web, preserve the observed 40px or 46px marketing button height rather than substituting the 56px mobile control.
- The public sources in this verification do not establish universal breakpoints, desktop maximum widths, or native safe-area values.

## Elevation & Depth

No canonical shadow token is promoted in this revision. The inspected evidence contains documentation-site chrome as well as TDS examples, so treating every computed shadow as a Toss product token would overstate the source. Use flat color layering until a component-specific official source verifies elevation.

## Motion & Easing

No canonical motion duration or easing token is promoted, and the absence is now sourced rather than assumed. TDS publishes no numeric `duration`, `easing`, or `cubic-bezier` value in its documentation; Toss states that component motion is carried inside the Figma UI Kit library, so timing must be read off the kit rather than cited from a page. The two motion rules TDS does publish are qualitative: 3D graphics and animation may use only resources from the Toss-provided module, and a loading animation must not appear where there is nothing to wait for.

Preserve state clarity and reduced-motion compatibility. Label any exact animation curve or duration as a local extension — for Toss there is no official numeric value to promote it to.

**Verified:** 2026-09-17 · `https://developers-apps-in-toss.toss.im/design/components.md` (first-party documentation query), `https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md`

## Components

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

### Published component roster (43 published, 4 measured)

TDS Mobile publishes **43 components**, read from the rendered navigation at
`https://tossmini-docs.toss.im/tds-mobile/` on 2026-09-19. This reference measures four of them —
Button, Badge, TextField and Agreement — and asserts no value, state or geometry for the other 39.

Agreement, Alphabet Keypad, Asset, Badge, Bar Chart, Board Row, Border, Bottom Info, Bottom Sheet, BottomCTA, Bubble, Button, Checkbox, Dialog, Grid List, Highlight, Icon Button, List Footer, List Header, ListRow, Loader, Menu, Modal, Numeric Spinner, Paragraph, Post, Progress Bar, Progress Stepper, Rating, Result, Search Field, Segmented Control, Skeleton, Slider, Stepper, Switch, Tab, Table Row, Text Button, TextField, Toast, Tooltip, Top

**This replaces a smaller, curated list and answers the question the old text left open.** The
previous roster recorded the 11 components Toss names as "most frequently used in Apps in Toss",
a partner-facing selection, and said plainly that "TDS's full component surface is larger than 11
and is not enumerated by any index found so far". It is enumerated now: 43.

**Why no index found it.** `tossmini-docs.toss.im` serves a shell, and the roster exists only in
the rendered navigation. Four pages are titled in Korean as "X 이해하기" — understanding X — so
their labels read as guides while their routes are the components `Asset`, `BottomCTA`, `Dialog`
and `ListRow`. A fifth, routed at `Agreement`, renders with its version tab `V3` as the visible
label. Reading labels alone would have produced five wrong names and missed five components; the
names above follow the routes.

The Figma/TDS Mobile UI Kit is distributed under a named licence from Viva Republica, which
terminates automatically on breach and requires deleting all copies — relevant to any adopter
redistributing kit-derived assets.

---

**Verified:** 2026-07-11 (verification v2, live computed-style capture + current official TDS docs); roster and licence added 2026-09-17
**Tier 1 sources:** https://toss.im/ https://toss.im/docs/10290 https://tossmini-docs.toss.im/tds-mobile/components/button/ https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/ https://tossmini-docs.toss.im/tds-mobile/components/badge/ https://developers-apps-in-toss.toss.im/design/components.md https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md https://developers-apps-in-toss.toss.im/design/prepare/figma-ui-license.md
**Tier 2 sources:** https://getdesign.md/toss produced no importable Toss record; https://styles.refero.design/?q=Toss produced no importable result through the available fetch path.
**Surface split:** TDS Mobile xlarge uses 56px height and 16px radius; `toss.im` marketing actions observed here use 40–46px height and 7px radius.
**Conflicts unresolved:** none

### States

| Component | Verified state contract |
|---|---|
| TDS Button | fill/weak, semantic color, loading, disabled, pressed, keyboard focus |
| TDS Text Field | box/line/big/hero, focus, error, disabled, read-only |
| TDS Agreement | checked, unchecked, disabled, nested hierarchy |
| Marketing CTAs | default geometry captured; hover remains unclaimed |

## Do's and Don'ts

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

## Voice & Tone

Toss speaks as a capable guide that removes work rather than displaying financial expertise. Copy is short and direct, but the governing idea is not minimal word count by itself: a person should understand the value, answer the question, and recover from uncertainty without decoding industry language. Official product-design writing describes principles such as **Easy to answer** and **Value first, cost later**—make choices concrete, and show why an action is worthwhile before asking for effort, data, or commitment.

In product flows, name the outcome and next action precisely. In education or product-branding surfaces, explain one unfamiliar idea in everyday language and let the interface carry the rest. Avoid vague reassurance, unexplained abbreviations, institutional phrasing, or playful copy that makes a financial consequence ambiguous.

## CJK Typesetting

Toss Product Sans was designed with Korean text, numbers, and symbols as one problem, which is why it is the family for Hangul and Latin alike. The current evidence does not verify a word-break, line-break, punctuation-compression, or tracking rule for TDS, so none is declared here.

## Agent Prompt Guide

- “Create a TDS Mobile xlarge primary button using `#3182f6`, white text, 56px height, 16px radius, 17px/600 Toss Product Sans, and explicit loading/disabled/focus behavior.”
- “Create a `toss.im` weak marketing CTA using `#e8f3ff` background, `#1b64da` text, 40px height, and 7px radius.”
- “Use Toss Product Sans for the verified UI family; do not promote Tossface without visible usage evidence.”
- “If building a component not listed here, mark it as an extension rather than presenting it as verified TDS.”

## Governance

### Known Gaps

- **Contrast, `tds-button`.** Text `#ffffff` on `#3182f6` measures 3.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Elevation and motion.** No shadow, duration, or easing value is verified as a product token.
- **Font licence.** Public redistribution and licence terms for Toss Product Sans are unresolved; no substitute has been measured.
- **Coverage.** Four of 43 published TDS components are measured; marketing CTA hover states were not captured.
