---
id: flixbus
name: FlixBus
country: DE
category: consumer-tech
homepage: "https://www.flixbus.de"
primary_color: "#97D700"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=flixbus.de&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Honeycomb"
  url: "https://styleguide.hive.flix.tech"
  type: system
  description: "Flix's public design system, documented at styleguide.hive.flix.tech with a Honeycomb React Storybook, and themed for Flix, Kamil (Kâmil Koç), Neptune and High Contrast. flixbus.de serves 95 --flix-* custom properties whose values match the documented tokens, and its controls carry the Honeycomb React version in their class names (hcr-btn-16-7-0). Hover and press are drawn as translucent black layers in background-image — 6% and 12% — over the colour, so a lime button stays lime and darkens slightly. Focus is a white 4px halo inside a blue 2px outline."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#97d700"
    foreground: "#353535"
    ui-primary: "#31a100"
    ui-primary-light: "#5cc500"
    ui-primary-dark: "#187d00"
    highlight: "#e5f9c0"
    link: "#0047de"
    neutral: "#016ae7"
    content-secondary: "#646464"
    grayscale-90: "#444444"
    icon-primary: "#848484"
    line: "#c8c8c8"
    grayscale-30: "#e1e1e1"
    bg-secondary: "#f7f7f7"
    canvas: "#ffffff"
    success: "#228f00"
    warning: "#ff5704"
    danger: "#dd2828"
    ai: "#e100e1"
  typography:
    family: { sans: "Roboto" }
    body: { size: 16, weight: 400, use: "--flix-font-size-primary 1rem, line height 1.5rem" }
    h1: { size: 27.2, weight: 700, use: "--flix-font-size-h1 1.7rem" }
    button: { size: 16, weight: 500, use: "buttons and navigation, --flix-font-weight-semibold 500" }
  rounded: { half: 3, sm: 6, md: 12 }
  components:
    button-search: { type: "button", bg: "#97d700", fg: "#353535", border: "#97d700", radius: 6, height: "36px", padding: "5px 12px", font: "16px / 500", hover: "layer rgba(0,0,0,0.06)", pressed: "layer rgba(0,0,0,0.12)", focus: "box-shadow 0 0 0 4px #ffffff + outline 2px solid #016ae7", use: "Suchen, the search button. Hover lays --flix-hover-layer-color, a 6% black gradient, over the lime; press lays the 12% --flix-pressed-layer-color. Focus is a white halo inside a blue outline (--flix-focus-outline-color)." }
    nav-link: { type: "button", bg: "transparent", fg: "#353535", radius: 6, height: "36px", padding: "6px 12px", font: "16px / 500", hover: "layer rgba(0,0,0,0.06)", pressed: "layer rgba(0,0,0,0.12)", focus: "box-shadow 0 0 0 4px #ffffff + outline 2px solid #016ae7", use: "Plane Deine Reise and Hilfe in the header — the same hover and press layers over a transparent ground, and the same focus ring." }
    input-destination: { type: "input", bg: "transparent", fg: "#353535", radius: 0, height: "24px", font: "16px / 400", focus: "transparent", use: "The destination field in the search form. Focus changes none of its measured values; the field's frame sits on a wrapper that was not read." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.flixbus.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.flixbus.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://styleguide.hive.flix.tech/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: styleguide, kind: official-doc, url: "https://styleguide.hive.flix.tech/", captured: "2026-09-26" }
    - { id: tokens-doc, kind: official-doc, url: "https://styleguide.hive.flix.tech/design-tokens/", captured: "2026-09-26" }
    - { id: storybook, kind: official-doc, url: "https://honeycomb-react.hive.flix.tech/", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://corporate.flix.com/about-flix/", captured: "2026-09-26" }
    - { id: impressum, kind: official-doc, url: "https://www.flix.com/de/impressum", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.ai: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.bg-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.content-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.grayscale-30: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.grayscale-90: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.icon-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.line: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ui-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ui-primary-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ui-primary-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-destination.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.nav-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.half: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.h1.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of FlixBus

## 1. Visual Theme & Atmosphere

FlixBus is the long-distance bus network of Flix SE, a Munich travel-tech company. In its own words,
Flix was "launched in 2013 in Munich" and has since carried more than 500 million travellers
across more than 40 countries on five continents, through its brands FlixBus, FlixTrain,
Greyhound and Kâmil Koç. Daniel Krauss, André Schwämmlein and Jochen Engert founded the company in
2011, anticipating the loosening of Germany's passenger transport law; the first FlixBuses ran in
February 2013. In January 2022 the parent company, Flixmobility, re-formed as a European company
(SE).

The site is bright and practical: white ground, dark-grey **`#353535`** text, and the lime
**`#97d700`** that marks everything Flix — header, primary button and icons. Type is **Roboto**,
buttons are 6px rounded and 36px tall, and the search form is the first thing on the page.

What makes it worth reading:

- **A public, versioned system.** Honeycomb documents its tokens and components openly, and the
  live site matches: seven documented `--flix-*` colours are identical on flixbus.de. Controls carry
  the Honeycomb React version in their class names (`hcr-btn-16-7-0`).
- **States as layers.** Hover and press don't change the colour. They lay a translucent black
  gradient over it — `--flix-hover-layer-color` at 6%, `--flix-pressed-layer-color` at 12% — so one
  rule works on any fill.
- **One focus recipe.** A white 4px halo inside a blue 2px outline (`#016ae7`), on buttons and
  navigation alike.

### Primary tasks
- Search a trip: from, to, date, passengers.
- Find help, deals and bookings.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `flixbus.de`: 96 root custom properties, 95 `--flix-*`. The
remaining one is a component-internal spinner variable.

### Brand and ink

- **Brand** (`#97d700`) — `--flix-brand-primary-color`, `--flix-header-bg-color`,
  `--flix-button-primary-color`.
- **Foreground** (`#353535`) — `--flix-content-primary-color`; body text (961 text elements), headings
  and button labels.
- **Content secondary** (`#646464`) — `--flix-content-secondary-color`.
- **Canvas** (`#ffffff`) · **Background secondary** (`#f7f7f7`).

### Greens

**UI primary** `#31a100` · **light** `#5cc500` (the tablet navigation background) · **dark**
`#187d00` · **Highlight** `#e5f9c0` (a pale lime tint).

### Links and neutral

**Link** `#0047de` · **Neutral** `#016ae7` (also the focus outline).

### Greys

`#444444` (grayscale 90) · `#848484` (icons, input borders) · `#c8c8c8` (lines) · `#e1e1e1`
(grayscale 30).

### Status

**Success** `#228f00` · **Warning** `#ff5704` · **Danger** `#dd2828` · **AI** `#e100e1`, a magenta named
`--flix-ai-color`.

## 3. Typography Rules

### Font family

**Roboto** — `--flix-font-family-primary: Roboto, Arial, sans-serif`, self-hosted as `woff2` in
latin and cyrillic subsets. `document.fonts` loaded 400, 500 and 700.

### Scale

`--flix-font-size-h1` 1.7rem · `h2` 1.3rem · `h3` 1.1rem · `h4` 1rem · `primary` 1rem (line 1.5rem) ·
`small` 0.875rem · `fineprint` 0.75rem. Weights: normal 400, semibold 500 (buttons and navigation),
bold 700.

## 4. Component Stylings

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched. The consent banner (Usercentrics) was declined first.

- **Search button** — Suchen: **`#97d700`**, label `#353535`, radius 6px, 36px, `5px 12px`,
  16px/500. Hover adds a 6% black layer, press a 12% one; the lime value itself never changes.
  Focus: `0 0 0 4px #ffffff` plus `outline: 2px solid #016ae7`.
- **Navigation link** — Plane Deine Reise, Hilfe: transparent, `#353535`, 6px, 36px, 16px/500. Same
  hover and press layers, same focus ring.
- **Destination field** — transparent, `#353535`, 16px/400. Focus changes nothing on the input
  itself.

### Radius

`--flix-border-radius-half` 3px · `-1` 6px (buttons, `--flix-primary-border-radius`) · `-2` 12px.

## 5. Layout Principles

- `--flix-page-max-width` 1200px, `--flix-page-min-width` 320px; gutters 12px and 24px.
- Spacing runs in 6px steps: `--flix-spacing-half` 3px, `-1` 6px, `-2` 12px, `-4` 24px, `-8` 48px,
  `-16` 96px.
- Inputs are 36px on desktop and 44px on mobile (`--flix-input-height-*`).

## 6. Depth & Elevation

`--flix-primary-box-shadow`: `0 6px 12px rgba(0,0,0,.06), 0 3px 18px rgba(0,0,0,.06), 0 3px 6px
rgba(0,0,0,.18)`. Overlays use `rgba(0,0,0,0.5)`.

## 7. Do's and Don'ts

### Do
- Use lime `#97d700` for the header and the main action, with `#353535` labels on it.
- Draw hover and press as 6% and 12% black layers, not new colours.
- Use the white-halo, blue-outline focus ring everywhere.

### Don't
- Don't change the label colour on lime; the live button keeps `#353535`.
- Don't use the magenta `--flix-ai-color` `#e100e1` as a general accent; its name ties it to AI.
- Don't invent state colours per component — the layer does it.

## 8. Responsive Behavior

Only desktop was measured. Tokens declare mobile input height (44px) and a tablet navigation
colour (`#5cc500`).

## 9. Agent Prompt Guide

### Quick Color Reference
`#97d700` brand lime · `#353535` ink · `#646464` secondary · `#f7f7f7` surface · `#0047de` link ·
`#016ae7` focus · `#31a100` UI green · `#dd2828` danger · `#ff5704` warning

### Example Component Prompts
- "A 36px lime `#97d700` button with a `#353535` 16px/500 Roboto label, 6px radius; hover adds a 6%
  black layer, press 12%; focus a white 4px halo inside a 2px `#016ae7` outline."
- "A white header link, `#353535` 16px/500, with the same hover layer."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Flix grew from a Munich startup that bet on deregulated long-distance buses in 2013 into a travel
group spanning buses and trains on five continents. It runs the brands on one system: Honeycomb
ships themes for Flix and Kâmil Koç from the same tokens, and flixbus.de uses the documented values
exactly. The interface is plain and quick — lime for the brand, grey for text, and states that
darken rather than recolour.

## 12. Principles

- **Lime means Flix.** One brand colour, used on the things that matter.
- **States are layers.** One translucent rule for every fill.
- **Documented equals shipped.** The live tokens match the public styleguide.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: a 6% black layer on the search button and navigation links. Press: 12%. Focus: white halo and
blue outline; the destination field shows no change. Disabled elements use
`--flix-disabled-element-opacity` 0.5 (not observed).

## 15. Motion & Easing

The search button transitions `background` over 0.25s.

---

**Tier 1 sources:** https://www.flixbus.de/ (live homepage — 96 root custom properties read via `getComputedStyle`; Roboto loaded; three components measured at rest, hover, pressed and focus after declining the consent banner, captured 2026-09-26); https://styleguide.hive.flix.tech/ (Honeycomb Design System Styleguide — nonsense path returns 404, read 2026-09-26); https://styleguide.hive.flix.tech/design-tokens/ (Honeycomb design tokens — --flix-* contract and themes, read 2026-09-26); https://honeycomb-react.hive.flix.tech/ (Honeycomb React Storybook, read 2026-09-26); https://corporate.flix.com/about-flix/ (About Flix — "Launched in 2013 in Munich", 500 million travellers, 40+ countries, FlixBus, FlixTrain, Greyhound, Kâmil Koç, read 2026-09-26); https://www.flix.com/de/impressum (Impressum — Flix SE, Friedenheimer Brücke 16, 80639 München, read 2026-09-26); https://www.munich-startup.de/en/13105/flixbus/ (Munich Startup — founding 2011, launch 2013, read 2026-09-26); https://munich-startup.de/79459/se-statt-gmbh-flixmobility-stellt-sich-neu-auf (Munich Startup — GmbH to SE, read 2026-09-26)
