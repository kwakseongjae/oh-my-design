---
id: ns
name: NS
country: NL
category: consumer-tech
homepage: "https://www.ns.nl"
primary_color: "#FFC917"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ns.nl&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-yellow: "#ffc917"
    brand-yellow-shade: "#ffb519"
    brand-yellow-strong: "#8a6000"
    brand-yellow-pale: "#fcf6e8"
    brand-blue: "#003082"
    brand-blue-subdued: "#193370"
    action-blue: "#0063d3"
    action-blue-shade: "#004ba0"
    action-blue-subdued: "#1f55b2"
    foreground: "#003082"
    text-strong: "#252528"
    text-subdued: "#404144"
    text-subtle: "#75767c"
    canvas: "#ffffff"
    background-base: "#f7f7f9"
    border: "#e4e5e8"
    border-strong: "#93949a"
    success: "#008672"
    critical: "#e2103d"
    attention: "#d44504"
    highlight: "#7b55cd"
  typography:
    family: { sans: "NS Sans" }
    body: { size: 16, weight: 400, use: "buttons, links and forms" }
    nav: { size: 18, weight: 700, use: "main navigation" }
  rounded: { sm: 4 }
  components:
    button-primary: { type: "button", bg: "#0063d3", fg: "#ffffff", radius: 4, height: "45px", padding: "10px 18px", font: "16px / 400", shadow: "inset 0 -2px 0 #004ba0", hover: "inset 0 -50px 0 #004ba0", pressed: "inset 0 -50px 0 #004ba0", focus: "outline 1px dotted #0063d3", use: "Plannen in the journey planner — blue with a 2px darker bottom edge that floods the whole button on hover (inset shadow -2px → -50px)." }
    button-yellow: { type: "button", bg: "#ffc917", fg: "#003082", radius: 4, height: "45px", padding: "10px 18px", font: "16px / 400", shadow: "inset 0 -2px 0 #ffb519", hover: "inset 0 -50px 0 #ffb519", pressed: "inset 0 -50px 0 #ffb519", focus: "outline 1px dotted #003082", use: "Koop nu — NS yellow with blue text; the same flood from a #ffb519 bottom edge on hover." }
    button-outline: { type: "button", bg: "transparent", fg: "#003082", border: "#003082", radius: 4, height: "45px", padding: "10px 18px", font: "16px / 400", hover: "transparent", pressed: "transparent", focus: "outline 1px dotted #0063d3", use: "Bestel treinkaartje — a faint 16%-alpha border at rest that turns solid #003082 on hover and press." }
    link-header: { type: "button", bg: "transparent", fg: "#003082", radius: 0, height: "25px", font: "14px / 400", hover: "transparent", pressed: "transparent", use: "Zakelijk / In English — blue text that gains a yellow #ffc917 ::after bar on hover; focus adds a #0063d3 ring on ::before." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ns.nl/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ns.nl/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.ns.nl/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.ns.nl/en/about-ns", captured: "2026-09-26" }
    - { id: history, kind: official-doc, url: "https://www.ns.nl/en/about-ns/learning-about-ns/history", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.action-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.action-blue-shade: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.action-blue-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.attention: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.background-base: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-blue-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow-pale: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow-shade: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.critical: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-outline.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-outline.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.shadow: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-yellow.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of NS

## 1. Visual Theme & Atmosphere

NS "connects people across the Netherlands and beyond", aiming "to make
travel as comfortable, reliable and sustainable as possible, from door to door" by train, bus,
bicycle and other transport. Its online channels belong to **NS Group N.V.** Its history page
traces the Dutch railway from the first train through the war years and corporatisation to
"a modern NS: focused on you".

ns.nl wears the railway's colours: NS yellow **`#ffc917`** and deep blue **`#003082`** — the text
colour itself is that blue — with a working blue **`#0063d3`** for the journey planner, white
cards on **`#f7f7f9`**, and **NS Sans** throughout.

What makes it worth reading:

- **A three-tier token system.** `--nes-core-*` primitives, `--nes-base-*` roles
  (`brand-primary-default`, `content-text-default`, `system-critical-pale`) and `--nes-applied-*`
  context tokens (`applied-form`, `applied-interaction`, `applied-modality`).
- **Transport modes as tokens.** `--nes-applied-modality-color-shared-bike` `#1e7bbc`,
  `-shared-car` `#11872f`, `-parking` `#28549c`, `-own-transport` `#00819e` — the planner's legend.
- **A flood hover.** Buttons carry a 2px darker bottom edge that fills the whole button on hover
  (`inset 0 -2px` → `inset 0 -50px`).

### Primary tasks
- Plan a journey; buy a ticket.
- Check travel information and disruptions.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `ns.nl`: 535 root custom properties — `--nes-*` 496 (core
colour 123, base colour 85, fonts, dimensions, motion …) and `--cc-*` 38 (cookie consent). All
first-party.

### Brand

- **Brand yellow** (`#ffc917`) — `--nes-base-color-brand-primary-default`.
- **Yellow shade** (`#ffb519`) — the yellow button's bottom edge and hover.
- **Yellow strong** (`#8a6000`) · **Yellow pale** (`#fcf6e8`).
- **Brand blue** (`#003082`) — `brand-secondary-default`, `content-text-default`, `text-logo`.
- **Blue subdued** (`#193370`).

### Action blue

- **Action blue** (`#0063d3`) — `brand-tertiary-default`, `applied-interaction-color-active`.
- **Action shade** (`#004ba0`) — the planner button's edge and hover.
- **Action subdued** (`#1f55b2`) — `applied-interaction-color-active-pressed`.

### Text, surfaces and lines

- **Foreground** (`#003082`) · **Text strong** (`#252528`) · **Text subdued** (`#404144`) · **Text
  subtle** (`#75767c`).
- **Canvas** (`#ffffff`) · **Background base** (`#f7f7f9`).
- **Border** (`#e4e5e8`) · **Border strong** (`#93949a`).

### System

**Success** `#008672` · **Critical** `#e2103d` · **Attention** `#d44504` · **Highlight** `#7b55cd`.

## 3. Typography Rules

### Font family

**NS Sans** (400, 700), `"NS Sans", "Segoe UI", Myriad, Verdana, sans-serif`, loaded
(`document.fonts`).

### Scale

Main navigation 18px/700; buttons and forms 16px/400; secondary navigation 14px/400.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
rejected.

- **Plan button** — Plannen: **`#0063d3`**, white, 4px, 45px, with `inset 0 -2px 0 #004ba0`. Hover
  and press flood it with **`#004ba0`** (`inset 0 -50px`); focus a 1px dotted outline.
- **Yellow button** — Koop nu: **`#ffc917`**, `#003082` text, `#ffb519` edge flooding on hover.
- **Outline button** — Bestel treinkaartje: blue text, a faint border that turns **`#003082`** on
  hover and press.
- **Header link** — Zakelijk, In English: `#003082` 14px. Hover adds a **yellow `#ffc917`** bar
  (`::after`); focus a `#0063d3` ring on `::before`.

### Radius

4px on buttons and inputs.

## 5. Layout Principles

- A white header with bold blue navigation, a journey planner card, then yellow and blue promo
  blocks on `#f7f7f9`.

## 6. Depth & Elevation

Buttons carry a 2px inset bottom edge; focus rings add a soft 28px shadow.

## 7. Do's and Don'ts

### Do
- Pair NS yellow `#ffc917` with NS blue `#003082`; set text in that blue.
- Give buttons a darker 2px bottom edge that floods on hover.
- Use the modality tokens for transport legends.

### Don't
- Don't put white text on yellow; the pairing is blue on yellow.
- Don't use black body text; NS text is blue.
- Don't mix the working blue `#0063d3` with the brand blue for body copy.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ffc917` NS yellow · `#003082` NS blue · `#0063d3` action blue · `#004ba0` action shade ·
`#ffb519` yellow shade · `#252528` strong · `#f7f7f9` base · `#e4e5e8` border

### Example Component Prompts
- "A 45px `#0063d3` button, white 16px NS Sans, 4px radius, a 2px `#004ba0` inset bottom edge that
  fills the button on hover."
- "A yellow `#ffc917` button with `#003082` text and a `#ffb519` edge."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

NS's yellow and blue, carried into a planner-first site: blue text everywhere,
yellow for buying, a working blue for planning, and a token system that knows about bikes, cars
and parking as well as trains.

## 12. Principles

- **Door to door.** The stated goal.
- **Blue is the text colour.**
- **Buttons you can feel.** A bottom edge that floods on hover.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: buttons flood with their edge colour; outlines turn solid blue; header links gain a yellow
bar. Press: the same. Focus: 1px dotted outlines on buttons; a `#0063d3` ring on links.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.ns.nl/ (live homepage — 535 root custom properties read via `getComputedStyle`; NS Sans loaded; four components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.ns.nl/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.ns.nl/en/about-ns (About NS — connecting people across the Netherlands, door-to-door goal; online channels of NS Group N.V., read 2026-09-26); https://www.ns.nl/en/about-ns/learning-about-ns/history (History of NS, read 2026-09-26)
