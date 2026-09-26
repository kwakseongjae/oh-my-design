---
id: vinted
name: Vinted
country: LT
category: ecommerce
homepage: "https://www.vinted.co.uk"
primary_color: "#007782"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=vinted.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#007782"
    primary-dark: "#004654"
    primary-extra-dark: "#112e33"
    primary-medium: "#86cdcf"
    primary-light: "#c9f0ee"
    primary-extra-light: "#e6fafa"
    foreground: "#15191a"
    text-subtle: "#5a6566"
    canvas: "#ffffff"
    surface-subtle: "#edf2f2"
    border: "#b6bebf"
    overlay-ink: "#0f1212"
    error: "#d04555"
    success: "#28865a"
    warning: "#f9bb42"
  typography:
    family: { sans: "V_INTER" }
    body: { size: 16, weight: 375, use: "search field and body text" }
    label: { size: 12, weight: 500, use: "header button labels" }
  rounded: { sm: 6, md: 12, full: 3996 }
  components:
    button-sell: { type: "button", bg: "#007782", fg: "#ffffff", radius: 6, height: "32px", padding: "0 12px", font: "12px / 500", hover: "rgba(255,255,255,0.02)", pressed: "rgba(255,255,255,0.08)", focus: "rgba(255,255,255,0.02)", use: "Sell now in the header — a teal fill with a white label; hover and focus lay a white ::after at 2%, press at 8%." }
    button-auth: { type: "button", bg: "transparent", fg: "#007782", border: "#007782", radius: 6, height: "32px", padding: "0 12px", font: "12px / 500", hover: "rgba(0,119,130,0.02)", pressed: "rgba(0,119,130,0.08)", focus: "rgba(0,119,130,0.02)", use: "Sign up | Log in — teal outline and label; a teal ::after at 2% on hover and focus, 8% when pressed." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.vinted.co.uk/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.vinted.co.uk/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.vinted.co.uk/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://www.vinted.co.uk/about", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.overlay-ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-extra-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-extra-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-medium: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-auth.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-auth.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-sell.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.full: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.label.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.label.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.label.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Vinted

## 1. Visual Theme & Atmosphere

Vinted is a marketplace for second-hand items, "on a mission to make second-hand first choice". Its
About page tells the origin: in 2008 founder Milda Mitkute was moving with too many clothes, Justas
Janauskas built a website to give them away, and "Vinted was born" — "from a Lithuanian start-up" to
a European business where "more than 2,000 people work from our HQ in Lithuania and offices across
Europe". It has grown beyond clothing to kids' items, luxury handbags and more.

The site is clean and quiet: white ground, a blue-grey ink **`#15191a`**, subtle text **`#5a6566`**,
a pale teal-grey surface **`#edf2f2`**, and Vinted's teal **`#007782`** for everything actionable.

What makes it worth reading:

- **Layered token vocabulary.** Primitive ramps (`--primary-default`, `--primary-dark`,
  `--primary-light` …), semantic roles named by intent, prominence and state
  (`--background-action-primary-prominent-idle`, `--foreground-passive-neutral-subtle-idle`), and
  component parameters (`--v-comp-input-v2-*`, `--v-comp-table-*`, `--v-comp-sheet-*`).
- **States as overlays.** `--v-comp-pressable-state-hover-opacity` `.04`, `-pressed-opacity` `.08`,
  `-focused-opacity` `.02` over `#0f1212`. The header buttons paint a translucent `::after` rather
  than changing their fill.
- **Channels, not colours.** Many roles are stored as bare RGB channels (`0,119,130`) so alpha can
  be applied at use.

### Primary tasks
- Browse and search second-hand items.
- Sell an item; sign up or log in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `vinted.co.uk`: 416 root custom properties — `--v-comp-*`,
`--background-*`, `--foreground-*`, `--border-*`, `--shadow-*`, `--primary-*`, `--bloom-*` and
spacing/radius groups. All first-party.

### Teal (primary)

- **Primary** (`#007782`) — `--primary-default`, `--background-action-primary-prominent-idle`.
- **Primary dark** (`#004654`) — `--primary-dark`, `--foreground-action-primary-prominent-high-idle`.
- **Primary extra dark** (`#112e33`) · **Primary medium** (`#86cdcf`) · **Primary light**
  (`#c9f0ee`) · **Primary extra light** (`#e6fafa`).

### Ink and surfaces

- **Foreground** (`#15191a`) — `--foreground-passive-neutral-high-idle`.
- **Text subtle** (`#5a6566`) — `--foreground-passive-neutral-subtle-idle`; 88 `<p>` elements.
- **Canvas** (`#ffffff`) · **Surface subtle** (`#edf2f2`, `--background-passive-disabled`).
- **Border** (`#b6bebf`) — `--background-action-neutral-subtle-idle`, table dividers.
- **Overlay ink** (`#0f1212`) — `--v-comp-pressable-state-hover-color`.

### Status

**Error** `#d04555` · **Success** `#28865a` · **Warning** `#f9bb42`.

## 3. Typography Rules

### Font family

A face loaded as **V_INTER** (400, 500, 580), with `"Helvetica Neue", Arial, sans-serif` behind it.
`--bloom-font-weight-label` is `375`.

### Scale

Body and search 16px/375; header button labels 12px/500.

## 4. Component Stylings

Measured on the UK home page, focus read under a real Tab key, a hover counted only when `:hover`
matched; pseudo-elements were compared too.

- **Sell now** — **`#007782`** fill, white 12px/500 label, 6px, 32px. Hover and focus lay a white
  `::after` at **2%**, press at **8%**.
- **Sign up | Log in** — transparent, teal `#007782` border and label, 6px, 32px. A teal `::after` at
  **2%** on hover and focus, **8%** pressed.

### Radius

6px default and small, 12px medium (sheets), 3996px round.

## 5. Layout Principles

- A header with search, the two actions and a category row; a hero and item grids below.

## 6. Depth & Elevation

Shadows are tokens — `--shadow-elevation-*`, `--shadow-lifted-*`, `--shadow-elevated-*` — with
blur from 2px (`--shadow-elevation-low-blur`) to 16px (`--shadow-elevated-blur`) on `#15191a`;
`--shadow-elevation-medium-opacity` is `.12`.

## 7. Do's and Don'ts

### Do
- Use teal `#007782` for actions, and draw states as translucent overlays.
- Use the blue-grey ink `#15191a` and subtle `#5a6566` for text.
- Name roles by intent and prominence, not by colour.

### Don't
- Don't swap the fill on hover; overlay it.
- Don't use pure black text.
- Don't put the teal on passive text; it is for actions and brand.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#007782` teal · `#004654` teal dark · `#c9f0ee` teal light · `#15191a` ink · `#5a6566` subtle ·
`#edf2f2` surface · `#b6bebf` border

### Example Component Prompts
- "A 32px teal `#007782` button, white 12px/500 label, 6px radius; hover a 2% white overlay, press
  8%."
- "A teal outline twin with a 2% teal overlay on hover."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

From one person's too-many clothes in 2008 to a European marketplace run from Lithuania, Vinted's
mission is to make second-hand the first choice. Its interface is a calm teal-and-grey frame whose
states are quiet overlays, leaving attention for the items.

## 12. Principles

- **Second-hand first.**
- **Intent-named tokens.** Action or passive, prominent or subtle, idle or hover.
- **Quiet states.** Overlays of 2–8%.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and focus: a 2% `::after` overlay. Press: 8%. The pressable tokens declare `.04` hover,
`.08` press and `.02` focus over `#0f1212`.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.vinted.co.uk/ (live homepage — 416 root custom properties read via `getComputedStyle`; V_INTER loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.vinted.co.uk/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://www.vinted.co.uk/about (About us — mission, 2008 founding story, "our HQ in Lithuania", more than 2,000 people, read 2026-09-26)
