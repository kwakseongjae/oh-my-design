---
id: cabify
name: Cabify
country: ES
category: consumer-tech
homepage: "https://cabify.com"
primary_color: "#7145D6"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=cabify.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Cabify web tokens"
  url: "https://cabify.com/es"
  type: system
  description: "About 195 first-party custom properties on cabify.com: --color-* roles (text, bodytext, background, surface, border, action, state), --cta-* button tokens with hover and active values, typography, heading, transition and radius scales. The brand is Cabify purple #7145d6 (--color-action-primary), lifting to #8a6ee4 on hover; a deep aubergine #1f123f carries the secondary buttons; text is #1a1a1c and #5e6088 on white and lavender #f2f2fd surfaces. Pressing a button adds a 2px lavender ring. Type is Cabify Ciudad and Cabify Ciudad Text."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#7145d6"
    primary-hover: "#8a6ee4"
    ring: "#a697ed"
    aubergine: "#1f123f"
    aubergine-hover: "#362065"
    foreground: "#1a1a1c"
    text-secondary: "#5e6088"
    surface: "#f2f2fd"
    surface-hover: "#dddaf9"
    subdued: "#f8f8fe"
    border: "#dbdce8"
    border-hover: "#c0c2d8"
    canvas: "#ffffff"
  typography:
    family: { display: "Cabify Ciudad", sans: "Cabify Ciudad Text" }
    button: { size: 14, weight: 700, use: "40px button" }
    button-large: { size: 18, weight: 700, use: "50px button" }
  rounded: { md: 8 }
  components:
    button-primary: { type: "button", bg: "#7145d6", fg: "#ffffff", radius: 8, height: "40px", font: "14px / 700", hover: "#8a6ee4", pressed: "box-shadow 0 0 0 2px #a697ed", use: "Regístrate in the header — --cta-primary-bg-color, lifting to --cta-primary-bg-color-hover #8a6ee4; press adds a 2px lavender ring. Focus is the browser's ring." }
    button-dark: { type: "button", bg: "#1f123f", fg: "#ffffff", radius: 8, height: "50px", font: "18px / 700", hover: "#362065", pressed: "box-shadow 0 0 0 2px #8a6ee4", use: "Conduce con nosotros — deep aubergine, lifting to #362065 on hover; press adds a 2px purple ring." }
    link-header: { type: "button", bg: "transparent", fg: "#5e6088", radius: 8, height: "40px", font: "14px / 450", hover: "fg #7145d6", pressed: "fg #7145d6", use: "The language switch (ES) — grey #5e6088 that turns Cabify purple on hover and press." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://cabify.com/es", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://cabify.com/es", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://cabify.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://cabify.com/en/about-us", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.aubergine: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.aubergine-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ring: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.subdued: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-dark.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-dark.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button-large.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button-large.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button-large.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Cabify

## 1. Visual Theme & Atmosphere

Cabify is a ride-hailing and mobility company. In its own words: "We were born in Madrid (Spain) in
2011 and have been pioneers in creating a new mobility in Iberoamerica." It operates in six
countries — Spain, Chile, Argentina, Peru, Colombia and Uruguay — and more than 40 cities, connecting
riders, companies and drivers.

The site is friendly and purple: white and pale lavender **`#f2f2fd`** surfaces, dark text
**`#1a1a1c`** and a blue-grey **`#5e6088`**, with Cabify's purple **`#7145d6`** on the main action and
a deep aubergine **`#1f123f`** for the driver recruitment button. Buttons are 8px-rounded; headings
use **Cabify Ciudad** and text **Cabify Ciudad Text**, faces named for the company.

What makes it worth reading:

- **Button tokens with their states.** `--cta-primary-bg-color` / `-hover`,
  `--cta-secondary-bg-color` / `-hover`, `--cta-outline-border-color` / `-hover`,
  `--cta-outline-bg-color-active` — plus sizes (`--cta-s-height` 40px, `--cta-m-height` 50px).
- **Hover lightens.** The purple lifts to a lighter `#8a6ee4`, the aubergine to `#362065`.
- **A ring on press.** Pressing a button adds a 2px ring in a lighter purple.

### Primary tasks
- Sign up and ride; book for companies.
- Drive with Cabify; manage a fleet.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `cabify.com/es`: 240 root custom properties; about 195 are
Cabify's — `--color-*` 115, `--typography-*` 28, `--transition-*` 18, `--cta-*` 18, `--heading-*` 16,
spacing, radius and grid groups.

### Purple

- **Primary** (`#7145d6`) — `--color-action-primary`, `--cta-primary-bg-color`,
  `--color-state-primary-active`.
- **Primary hover** (`#8a6ee4`) — `--color-state-primary-hover`, `--cta-primary-bg-color-hover`.
- **Ring** (`#a697ed`) — `--color-border-primary`, `--cta-border-color`; the press ring.
- **Aubergine** (`#1f123f`) and its hover **`#362065`** (`--color-bodytext-primary`).

### Text and surfaces

- **Foreground** (`#1a1a1c`) — `--color-text-primary`.
- **Text secondary** (`#5e6088`) — `--color-text-secondary`; the most frequent `<p>` colour.
- **Surface** (`#f2f2fd`) — `--color-surface`, `--cta-secondary-bg-color`; hover **`#dddaf9`**.
- **Subdued** (`#f8f8fe`) — `--color-background-subdued`.
- **Border** (`#dbdce8`) — `--color-border`, `--cta-outline-border-color`; hover **`#c0c2d8`**.
- **Canvas** (`#ffffff`).

## 3. Typography Rules

### Font family

**Cabify Ciudad** (700) for headings and **Cabify Ciudad Text** (400, 600, 700) for text, both loaded
(`document.fonts`). Header text uses a 450 weight.

### Scale

Small buttons 14px/700 at 40px; medium buttons 18px/700 at 50px.

## 4. Component Stylings

Measured after declining cookies ("Rechazar"), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Primary** — Regístrate: **`#7145d6`**, white 14px/700, 8px, 40px. Hover **`#8a6ee4`**. Press adds
  `0 0 0 2px #a697ed`. Focus is the browser's `auto` ring.
- **Dark** — Conduce con nosotros: **`#1f123f`**, white 18px/700, 8px, 50px. Hover **`#362065`**. Press
  adds `0 0 0 2px #8a6ee4`.
- **Header link** — the language switch: `#5e6088`, turning **`#7145d6`** on hover and press.

### Radius

8px on buttons; the radius group holds the rest of the scale.

## 5. Layout Principles

- Lavender and white bands; purple blocks for key messages (28 purple backgrounds on the page).
- Buttons come in two heights, 40px and 50px.

## 6. Depth & Elevation

Flat; the only shadow on the measured controls is the press ring.

## 7. Do's and Don'ts

### Do
- Use purple `#7145d6` for the main action and lighten to `#8a6ee4` on hover.
- Use lavender `#f2f2fd` for surfaces and secondary buttons.
- Add a 2px lighter ring on press.

### Don't
- Don't darken on hover; Cabify lightens.
- Don't use pure black text; the ink is `#1a1a1c`, secondary `#5e6088`.
- Don't mix in other brand hues for actions.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#7145d6` purple · `#8a6ee4` hover · `#a697ed` ring · `#1f123f` aubergine · `#1a1a1c` ink ·
`#5e6088` secondary · `#f2f2fd` lavender · `#dbdce8` border

### Example Component Prompts
- "A 40px button, `#7145d6`, white 14px/700 Cabify Ciudad Text, 8px radius; hover `#8a6ee4`; press
  adds a 2px `#a697ed` ring."
- "A 50px aubergine `#1f123f` button, 18px/700; hover `#362065`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Cabify grew from Madrid into Iberoamerican mobility, and its site keeps one idea front and centre —
purple — with lavender surfaces and a typeface named for it. The tokens are explicit about every button's
states, and the states lighten rather than darken.

## 12. Principles

- **Purple is Cabify.** One brand colour for action.
- **Lighten to respond.** Hover lifts the colour.
- **Its own letters.** Cabify Ciudad for headings and text.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: primary to `#8a6ee4`, dark to `#362065`, header link to purple. Press: a 2px ring. Focus: the
browser's ring.

## 15. Motion & Easing

`--cta-transition`: background-color, box-shadow and colour over 0.25s ease-out.

---

**Tier 1 sources:** https://cabify.com/es (live homepage — 240 root custom properties read via `getComputedStyle`; Cabify Ciudad and Ciudad Text loaded; three components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://cabify.com/es/zz-this-does-not-exist (nonsense-path control — HTTP 404 "¡Página no encontrada!", read 2026-09-26); https://cabify.com/en/about-us (Who we are — "We were born in Madrid (Spain) in 2011", 6 countries, 40+ cities, read 2026-09-26)
