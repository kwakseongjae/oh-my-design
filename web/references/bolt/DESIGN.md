---
id: bolt
name: Bolt
country: EE
category: consumer-tech
homepage: "https://bolt.eu"
primary_color: "#32BB78"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bolt.eu&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    action-primary: "#32bb78"
    action-active: "#1d965c"
    link-active: "#127042"
    border-action-secondary: "#5ae1a0"
    green-9: "#2b8659"
    green-10: "#18784c"
    focus-green: "#2a9c64"
    neutral-primary: "#2f313f"
    neutral-active: "#414a55"
    foreground: "#2f313f"
    text-inverted: "#fafafb"
    background: "#f7f9f8"
    canvas: "#ffffff"
    floor-grouped: "#f5f6f7"
    promo: "#5b68f6"
    promo-active: "#4450d5"
    danger: "#eb4755"
    danger-active: "#c91d2b"
    warning: "#f58300"
  typography:
    family: { sans: "Inter" }
    button: { size: 18, weight: 650, use: "hero app buttons" }
    small: { size: 14, weight: 600, use: "header pills" }
  rounded: { lg: 40, pill: 9999 }
  components:
    button-app: { type: "button", bg: "#2b8659", fg: "#ffffff", radius: 40, height: "48px", padding: "0 24px", font: "18px / 650", hover: "#18784c", pressed: "#18784c", focus: "outline 2px solid #2a9c64", use: "Get Bolt — green (--green-9) darkening to --green-10 on hover; press also scales it to 97%; a 2px green focus outline." }
    button-app-soft: { type: "button", bg: "rgba(1,34,18,0.067)", fg: "rgba(0,10,7,0.627)", radius: 40, height: "48px", padding: "0 24px", font: "18px / 650", hover: "rgba(0,31,21,0.098)", pressed: "rgba(0,31,24,0.13)", use: "Get Bolt Food — a translucent green-black tint stepping 6.7% → 9.8% → 13%, scaling to 97% when pressed." }
    button-register: { type: "button", bg: "#2f313f", fg: "#ffffff", radius: 9999, height: "32px", padding: "0 16px", font: "14px / 600", hover: "#414a55", pressed: "#414a55", use: "Register in the header — neutral-primary pill lifting to neutral-active #414a55, scaling to 97.5% when pressed." }
    button-ghost: { type: "button", bg: "transparent", fg: "#2f313f", radius: 9999, height: "32px", padding: "8px 16px", font: "14px / 600", hover: "rgba(6,26,55,0.04)", pressed: "rgba(6,26,55,0.08)", use: "Support — a ghost pill tinting 4% on hover and 8% when pressed." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://bolt.eu/en/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://bolt.eu/en/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://bolt.eu/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: company, kind: official-doc, url: "https://bolt.eu/en/company/", captured: "2026-09-26" }
    - { id: legal, kind: official-doc, url: "https://bolt.eu/en/legal/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.action-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.action-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-action-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.floor-grouped: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-10: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green-9: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.neutral-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.promo: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.promo-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-inverted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-app-soft.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app-soft.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-app.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-register.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Bolt

## 1. Visual Theme & Atmosphere

"Bolt was founded in 2013 in Estonia, when 19-year-old Markus Villig set out to fix Tallinn's broken
taxi system" — with €5,000 borrowed from his parents he recruited 50 drivers and built the first
app. Today it is "a global mobility platform with ride-hailing, scooter and e-bike rentals,
car-sharing, and food delivery services in over 50 countries and 850 cities", with over 4,000
employees in hubs from Tallinn to London and more than 200 million customers. Its footer names
**Bolt Technology OÜ**.

The site is light and green: a pale green-grey ground **`#f7f9f8`**, charcoal ink **`#2f313f`**,
Bolt green for actions (`#32bb78` in the tokens, `#2b8659` on the app buttons), and full pills
everywhere, set in **Inter**.

What makes it worth reading:

- **Semantic families with active states.** `--color-bg-action-primary` / `--color-bg-active-
  action-primary`, and the same for danger, neutral, positive, promo and warning — each with a solid
  primary and a translucent secondary.
- **Floors and layers.** `--color-layer-floor-0…3`, `--color-layer-surface`, `--color-special-scrim`
  describe elevation as layers rather than shadows.
- **Tactile pills.** Pressed buttons scale to 97% as well as darkening.

### Primary tasks
- Get the Bolt or Bolt Food app.
- Register as a driver, courier or merchant; find support.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `bolt.eu/en`: 537 root custom properties — `--color-*` 85
(semantic), 12-step colour scales (`--green-*`, `--mint-*`, `--blue-*` …, 28 each) and Tailwind's
`--tw-*` (51, excluded).

### Green

- **Action primary** (`#32bb78`) — `--color-bg-action-primary`, `--color-bg-positive-primary`.
- **Action active** (`#1d965c`) — the active step and link colour · **Link active** (`#127042`).
- **Border action secondary** (`#5ae1a0`).
- **Green 9** (`#2b8659`) · **Green 10** (`#18784c`) — the app button and its hover.
- **Focus green** (`#2a9c64`) — the app button's outline.

### Neutrals

- **Foreground** (`#2f313f`) — `--color-content-primary`, `--color-bg-neutral-primary`.
- **Neutral active** (`#414a55`) · **Text inverted** (`#fafafb`).
- **Background** (`#f7f9f8`) · **Canvas** (`#ffffff`) · **Floor grouped** (`#f5f6f7`).

### Promo and status

**Promo** `#5b68f6` → active `#4450d5` · **Danger** `#eb4755` → active `#c91d2b` · **Warning**
`#f58300`.

## 3. Typography Rules

### Font family

**Inter** (variable 100–900, via `next/font`), loaded (`document.fonts`).

### Scale

App buttons 18px/650; header pills 14px/600; body 16px.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
rejected.

- **App button** — Get Bolt: **`#2b8659`**, white 18px/650, 40px radius, 48px. Hover and press
  **`#18784c`**; press also scales to **0.97**; focus a **2px `#2a9c64`** outline.
- **Soft app button** — Get Bolt Food: **`rgba(1,34,18,0.067)`** → **0.098** → **0.13**, the same
  press scale.
- **Register** — **`#2f313f`** pill, white 14px/600, 32px. Hover and press **`#414a55`**; press
  scales to 0.975.
- **Ghost pill** — Support: transparent → **`rgba(6,26,55,0.04)`** → **0.08**.

### Radius

40px on app buttons; 9999px pills in the header.

## 5. Layout Principles

- A light header with pills, a hero with the two app buttons, then service sections on `#f7f9f8`.

## 6. Depth & Elevation

Layers instead of shadows: `--color-layer-floor-*`, `--color-layer-surface` `rgba(6,26,55,.04)`, and
a `rgba(0,0,0,.28)` scrim.

## 7. Do's and Don'ts

### Do
- Use Bolt green for actions with a darker active step, and pair every solid with a translucent
  secondary.
- Make buttons full pills that shrink slightly when pressed.
- Use charcoal `#2f313f`, not black, for text and neutral buttons.

### Don't
- Don't use shadows for elevation; use floors and surfaces.
- Don't use the promo blue for primary actions.
- Don't square off buttons.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#32bb78` Bolt green · `#2b8659` app green · `#18784c` hover · `#1d965c` active · `#2f313f`
charcoal · `#f7f9f8` ground · `#5b68f6` promo · `#eb4755` danger

### Example Component Prompts
- "A 48px green `#2b8659` pill, white 18px/650 Inter; hover `#18784c`; pressed scale 0.97; focus a
  2px `#2a9c64` outline."
- "A 32px charcoal `#2f313f` header pill lifting to `#414a55`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

From one teenager's fix for Tallinn taxis to rides, scooters, cars and food in 50 countries — Bolt's
interface stays light and green, with pills you can almost press and a token system built around
active states.

## 12. Principles

- **Reduce car dependency.** Its services page's stated aim.
- **Every colour has an active state.**
- **Tactile pills.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: green darkens to `#18784c`; charcoal lifts to `#414a55`; tints deepen. Press: the same plus a
0.97 scale. Focus: a 2px green outline on the app button, the browser's ring elsewhere.

## 15. Motion & Easing

Press scale 0.97–0.975 observed; durations not measured.

---

**Tier 1 sources:** https://bolt.eu/en/ (live homepage — 537 root custom properties read via `getComputedStyle`, Tailwind excluded; Inter loaded; four components measured at rest, hover, pressed and focus, captured 2026-09-26); https://bolt.eu/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://bolt.eu/en/company/ (About Bolt — founded 2013 in Estonia, 50+ countries, 850 cities, 4,000+ employees, 200M+ customers, read 2026-09-26); https://bolt.eu/en/legal/ (© 2026 Bolt Technology OÜ, read 2026-09-26)
