---
id: alan
name: Alan
country: FR
category: healthcare
homepage: "https://alan.com"
primary_color: "#5C59F3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=alan.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Alan web tokens"
  url: "https://alan.com/fr-fr"
  type: system
  description: "About 258 first-party custom properties on alan.com: 86 --c-* colours in named families (indigo, grey, teal, orange, red, green, blue, yellow, pink, white alpha) with semantic aliases (--c-heading, --c-paragraph, --c-caption), and 168 --t-* sizes split evenly into radius, space and size scales. The brand is indigo --c-indigo500 #5c59f3; buttons darken through --c-indigo700 and --c-indigo900 on hover and press. Type is Alan Sans, Alan's own variable typeface, published open-source under the OFL."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#5c59f3"
    primary-hover: "#2f33a8"
    primary-pressed: "#0c0a66"
    indigo-100: "#d6dbff"
    indigo-50: "#f0f3ff"
    heading: "#282830"
    foreground: "#464754"
    caption: "#656779"
    grey-500: "#9da3ba"
    border: "#ecf1fc"
    surface: "#f5f8fe"
    canvas: "#ffffff"
    cream: "#fffcf5"
    fluo-yellow: "#fcff7e"
    teal: "#2aa79c"
    teal-dark: "#124548"
    orange: "#ff9359"
    danger: "#ed4e4e"
    success: "#7fca6c"
  typography:
    family: { sans: "Alan Sans" }
    button: { size: 16, weight: 500, use: "hero buttons" }
    nav: { size: 13.33, weight: 400, use: "segment navigation" }
  rounded: { md: 12, lg: 16 }
  components:
    button-primary: { type: "button", bg: "#5c59f3", fg: "#ffffff", radius: 16, height: "48px", font: "16px / 500", shadow: "rgba(40,40,48,0.06) 0 1px 4px", hover: "#2f33a8", pressed: "#0c0a66", use: "Mon devis en 2 min in the hero — --c-indigo500, darkening to --c-indigo700 on hover and --c-indigo900 on press. Focus is the browser's ring." }
    button-secondary: { type: "button", bg: "#ffffff", fg: "#5c59f3", border: "#ecf1fc", radius: 16, height: "48px", font: "16px / 500", shadow: "rgba(40,40,48,0.06) 0 1px 4px", pressed: "border #f5f8fe", use: "Demander une démo beside it — white with an indigo label and a --c-grey100 border; hover changes nothing, press lightens the border to --c-grey50." }
    nav-segment: { type: "button", bg: "transparent", fg: "#000000", radius: 16, height: "40px", font: "13.33px / 400", hover: "#f5f8fe", pressed: "#f5f8fe", use: "Entreprises, Indépendants, Particuliers — the audience switch in the header; hover and press fill it with --c-grey50." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://alan.com/fr-fr", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://alan.com/fr-fr", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://alan.com/fr-fr/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: font-repo, kind: official-doc, url: "https://github.com/alan-eu/Alan-Sans", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.caption: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.cream: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.fluo-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.grey-500: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.heading: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.indigo-100: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.indigo-50: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.orange: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.teal: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.teal-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-segment.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Alan

## 1. Visual Theme & Atmosphere

Alan is a French health insurer founded on 10 February 2016 and based at 117 quai de Valmy in
Paris, according to its own structured data. It sells health cover to companies, the
self-employed, individuals and the public sector — the four audiences its header switches
between — and describes itself as a health partner rather than only an insurer.

The site is soft and friendly: white and pale-blue surfaces, dark grey headings **`#282830`**, and
Alan's indigo **`#5c59f3`** on the main actions, with cream, teal and a fluorescent yellow for
illustration and highlights. Buttons and panels are rounded at 16px and carry a faint shadow.
Everything is set in **Alan Sans**, a variable typeface Alan designed and released as open
source.

What makes it worth reading:

- **Its own typeface, open-sourced.** Alan Sans is published at `github.com/alan-eu/Alan-Sans`
  under the SIL Open Font License, and the site loads it as one variable file (weights 300–900).
- **Indigo in three steps.** `--c-indigo500` rests, `--c-indigo700` hovers, `--c-indigo900`
  presses — the state ramp is the colour ramp.
- **Sizes as tokens.** 168 `--t-*` properties split exactly into 56 radius, 56 space and 56 size
  steps.

### Primary tasks
- Get a quote ("Mon devis en 2 min") or book a demo, by audience.
- Sign in to the member space.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `alan.com/fr-fr`: 299 root custom properties — `--c-*` 86,
`--t-*` 168, `--website-*` 4, and 41 `--toastify-*` from the react-toastify library (excluded).

### Indigo

- **Primary** (`#5c59f3`) — `--c-indigo500`; the quote button and link accents.
- **Primary hover** (`#2f33a8`) — `--c-indigo700`.
- **Primary pressed** (`#0c0a66`) — `--c-indigo900`.
- `--c-indigo100` **`#d6dbff`** · `--c-indigo50` **`#f0f3ff`** (tinted panels).

### Text

- **Heading** (`#282830`) — `--c-heading`, `--c-grey900`.
- **Foreground** (`#464754`) — `--c-paragraph`, `--c-grey800`; body copy.
- **Caption** (`#656779`) — `--c-caption`; the most frequent `<p>` colour, used for labels and
  captions.
- `--c-grey500` **`#9da3ba`**.

### Surfaces

**Canvas** `#ffffff` · **Surface** `#f5f8fe` (`--c-grey50`) · **Border** `#ecf1fc` (`--c-grey100`) ·
**Cream** `#fffcf5` · **Fluo yellow** `#fcff7e`.

### Accents and status

**Teal** `#2aa79c` (`--c-teal500`) with a deep `#124548` · **Orange** `#ff9359` · **Danger**
`#ed4e4e` (`--c-red500Base`) · **Success** `#7fca6c` (`--c-green500`). Several families carry
`HighContrast` variants (for example `--c-red500HighContrast` `#9e1924`).

## 3. Typography Rules

### Font family

**Alan Sans** — `AlanSans, Helvetica, Arial, sans-serif` on body and headings, served by alan.com as
a single variable `woff2` (`AlanSans-variable.*.woff2`) and loaded across weights 300–900.
Buttons use 500.

### Scale

Measured: hero buttons 16px/500, the audience switch 13.33px/400. The `--t-size-*` tokens hold the
size scale.

## 4. Component Stylings

Measured on the home page after declining cookies ("Continuer sans accepter"), focus read under a
real Tab key, and a hover counted only when `:hover` matched. The buttons are links whose own
colour is the browser default; the visible label is a child element, and its colour is recorded.

- **Primary** — Mon devis en 2 min: **`#5c59f3`**, white 16px/500 label, radius 16px, 48px, shadow
  `rgba(40,40,48,0.06) 0 1px 4px`. Hover **`#2f33a8`**, press **`#0c0a66`**. Focus is the browser's
  `auto` ring.
- **Secondary** — Demander une démo: `#ffffff`, indigo label, `#ecf1fc` border, same shape. Hover
  changes nothing; press lightens the border to `#f5f8fe`.
- **Audience switch** — Entreprises and its siblings: transparent, `#000000` 13.33px, radius 16px,
  40px. Hover and press fill it with **`#f5f8fe`**.

### Radius

16px on buttons and the switch; 12px on header links; asymmetric `12px 12px 12px 2px` speech-bubble
corners appear on chat-style elements.

## 5. Layout Principles

- `--website-header-height` 84px; the hero sits 137px below the top (`--website-header-hero-offset`).
- The header switches the whole site by audience.

## 6. Depth & Elevation

One low shadow does most of the work: `rgba(40,40,48,0.06) 0 1px 4px`, with a near twin
`rgba(70,71,84,0.06) 0 1px 4px`.

## 7. Do's and Don'ts

### Do
- Use indigo `#5c59f3` for the main action and step to `#2f33a8`, then `#0c0a66`.
- Set type in Alan Sans; keep body copy in `#464754` and headings in `#282830`.
- Round at 16px and keep shadows faint.

### Don't
- Don't count react-toastify's `--toastify-*` variables as Alan's.
- Don't use the fluo yellow `#fcff7e` for text.
- Don't make captions the body colour; `#656779` is secondary.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#5c59f3` indigo · `#2f33a8` hover · `#0c0a66` pressed · `#282830` heading · `#464754` body ·
`#656779` caption · `#f5f8fe` surface · `#ecf1fc` border · `#fffcf5` cream · `#fcff7e` fluo

### Example Component Prompts
- "A 48px button, `#5c59f3`, white 16px/500 Alan Sans label, 16px radius, faint shadow; hover
  `#2f33a8`, press `#0c0a66`."
- "A white secondary button with an indigo label and a `#ecf1fc` border."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Alan calls itself a health partner, and its site speaks softly: pale
surfaces, rounded shapes and one indigo for the things to press. It went as far as designing its
own typeface and giving it away — Alan Sans is open source — so the brand's voice in type is its
own.

## 12. Principles

- **Soft, not clinical.** Pale surfaces, 16px corners, faint shadows.
- **One colour, three steps.** Indigo at rest, deeper on hover, deepest on press.
- **Our own type.** Alan Sans everywhere.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the primary to `#2f33a8`, the audience switch to `#f5f8fe`, the secondary unchanged. Press:
`#0c0a66`; the secondary's border to `#f5f8fe`. Focus: the browser's ring. No disabled state was
observed.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://alan.com/fr-fr (live homepage — 299 root custom properties read via `getComputedStyle`, react-toastify excluded; Alan Sans loaded; three components measured at rest, hover, pressed and focus after declining cookies; structured data giving foundingDate 2016-02-10 and 117 quai de Valmy, Paris, captured 2026-09-26); https://alan.com/fr-fr/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://github.com/alan-eu/Alan-Sans (Alan Sans repository — OFL-1.1, read 2026-09-26)
