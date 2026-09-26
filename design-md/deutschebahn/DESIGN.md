---
id: deutschebahn
name: Deutsche Bahn
country: DE
category: consumer-tech
homepage: "https://www.bahn.de"
primary_color: "#EC0016"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bahn.de&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "DB UX Design System"
  url: "https://design-system.deutschebahn.com"
  type: system
  description: "Deutsche Bahn's public design system — 'A Design System designed to align teams and streamline product delivery' — with its source on GitHub (db-ux-design-system/core-web: design tokens and components for web UIs). bahn.de's stylesheets carry about 1,000 --db-* variables: adaptive background, on-background, origin and vibrant roles, each with default, hovered and pressed steps, plus sizing, container and screen scales. The DB red #ec0016 is the search action; ink is #282d37 on white and #f0f3f5 fields; focus is a 2px #257fa8 outline. Type is DB Screen Sans and DB Screen Head."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#ec0016"
    primary-hover: "#c50014"
    foreground: "#282d37"
    ink-strong: "#16181b"
    field: "#f0f3f5"
    border: "#d7dce1"
    focus: "#257fa8"
    accent: "#d96000"
    canvas: "#ffffff"
  typography:
    family: { sans: "DB Screen Sans", display: "DB Screen Head" }
    button: { size: 16, weight: 700, use: "the search button" }
  rounded: { sm: 4, pill: 12 }
  components:
    button-search: { type: "button", bg: "#ec0016", fg: "#ffffff", radius: 4, height: "56px", padding: "16px 32px", font: "16px / 700", hover: "#c50014", pressed: "#c50014", focus: "outline 2px solid #257fa8", use: "Suchen in the journey planner — DB red, darkening to #c50014 on hover and press; focus is a 2px teal-blue outline." }
    link-nav: { type: "button", bg: "transparent", fg: "#282d37", radius: 0, height: "40px", hover: "::after bar #282d37", pressed: "::after bar #282d37", focus: "outline 2px solid #257fa8", use: "Tickets & Angebote in the header — hover and press draw an ::after bar in the ink colour under the label; focus is the same 2px outline." }
    button-ghost: { type: "button", bg: "transparent", fg: "#16181b", radius: 4, height: "40px", hover: "rgba(90,94,104,0.24)", pressed: "rgba(90,94,104,0.32)", focus: "outline 2px solid #257fa8", use: "Jetzt bestellen — a ghost button whose grey wash deepens from 24% on hover to 32% on press." }
    input-station: { type: "input", bg: "#f0f3f5", fg: "#282d37", border: "#d7dce1", radius: 0, height: "56px", hover: "#f0f3f5", focus: "outline 2px solid #257fa8", use: "The departure and destination fields — grey fill with a bottom rule; hover changes nothing, focus draws the 2px outline." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.bahn.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.bahn.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://design-system.deutschebahn.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: ds-site, kind: official-doc, url: "https://design-system.deutschebahn.com/", captured: "2026-09-26" }
    - { id: ds-repo, kind: official-doc, url: "https://github.com/db-ux-design-system/core-web", captured: "2026-09-26" }
    - { id: imprint, kind: official-doc, url: "https://www.bahn.de/impressum", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.field: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ink-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-ghost.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-ghost.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
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
    tokens.components.input-station.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-station.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Deutsche Bahn

## 1. Visual Theme & Atmosphere

bahn.de is Deutsche Bahn's travel site — the journey planner, tickets and offers, and trip
management for Germany's national railway. Its imprint names DB Fernverkehr AG in Frankfurt as the
operator, within the DB group. Deutsche Bahn publishes its design system openly: the **DB UX Design
System**, "a Design System designed to align teams and streamline product delivery", with its
tokens and web components developed in public on GitHub.

The site is functional and trustworthy: white ground, dark slate text **`#282d37`**, pale grey
fields **`#f0f3f5`**, and the DB red **`#ec0016`** reserved for the one action that matters — Search.
Type is Deutsche Bahn's own **DB Screen Sans** with **DB Screen Head** for headings.

What makes it worth reading:

- **An open system.** The design system has a public site and a public monorepo
  (`db-ux-design-system/core-web`), so the tokens behind bahn.de are inspectable.
- **Adaptive roles with states.** Variable names like `--db-adaptive-bg-basic-level-1-hovered`,
  `--db-adaptive-on-bg-basic-emphasis-90-pressed` and `--db-adaptive-bg-vibrant-default` spell out a
  role, an emphasis and a state.
- **One focus colour everywhere.** Every measured control draws a 2px `#257fa8` outline on focus.

### Primary tasks
- Plan a journey: from, to, date, travellers; search.
- Buy tickets and offers; manage trips.

## 2. Color Palette & Roles

bahn.de's root holds only 20 custom properties (container and screen sizes, icon fonts); its
stylesheets declare about 1,000 `--db-*` variables that resolve inside component scopes. The colours
below are read from the rendered elements.

- **Primary** (`#ec0016`) — the DB red on the search button (nine red backgrounds on the page).
- **Primary hover** (`#c50014`).
- **Foreground** (`#282d37`) — text and links; 17 of 17 `<p>` elements.
- **Ink strong** (`#16181b`) — the ghost button's label.
- **Field** (`#f0f3f5`) — input fills and grey panels.
- **Border** (`#d7dce1`) — the fields' bottom rule.
- **Focus** (`#257fa8`) — the 2px focus outline.
- **Accent** (`#d96000`) — an orange badge.
- **Canvas** (`#ffffff`).

## 3. Typography Rules

### Font family

**DB Screen Sans** (400, 700) — `DBScreenSans, "Helvetica Neue", arial, sans-serif` on body — and
**DB Screen Head** (900) on headings, both loaded (`document.fonts`). Icons come from two icon fonts,
`db-default` and `db-filled`.

### Scale

The search button is 16px/700.

## 4. Component Stylings

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Search** — Suchen: **`#ec0016`**, white 16px/700, radius 4px, 56px, `16px 32px`. Hover and press
  **`#c50014`**. Focus: `outline: 2px solid #257fa8`.
- **Header link** — Tickets & Angebote: `#282d37`, 40px. Hover and press draw an `::after` bar in
  `#282d37` under the label; the link's own values stay the same. Focus: the 2px outline.
- **Ghost button** — Jetzt bestellen: transparent, `#16181b`, 4px. Hover washes it with
  `rgba(90,94,104,0.24)`, press with `rgba(90,94,104,0.32)`.
- **Station fields** — `#f0f3f5` with a `#d7dce1` bottom rule, 56px. Hover changes nothing; focus draws
  the outline.

### Radius

4px on buttons; 12px on the class toggles.

## 5. Layout Principles

- Container tokens run from `--db-container-3xs` 14rem to `--db-container-3xl` 48rem; screens from
  `--db-screen-xs` 20em to `--db-screen-xl` 120em.
- The journey planner leads the page.

## 6. Depth & Elevation

Flat: no shadows on the measured controls; overlays use `rgba(0,0,0,0.7)`.

## 7. Do's and Don'ts

### Do
- Keep DB red `#ec0016` for the primary action; darken to `#c50014`.
- Use slate `#282d37` for text and grey `#f0f3f5` for fields.
- Give every control the 2px `#257fa8` focus outline.

### Don't
- Don't spread the red across secondary controls.
- Don't use pure black for text; the ink is `#282d37`.
- Don't add shadows to controls.

## 8. Responsive Behavior

Screen tokens define breakpoints (20em–120em); only desktop was measured.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ec0016` DB red · `#c50014` red hover · `#282d37` ink · `#f0f3f5` field · `#d7dce1` rule ·
`#257fa8` focus · `#ffffff` white

### Example Component Prompts
- "A 56px search button, `#ec0016`, white 16px/700 DB Screen Sans, 4px radius; hover `#c50014`;
  focus a 2px `#257fa8` outline."
- "A header link in `#282d37` that shows an underline bar on hover."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Deutsche Bahn's site does one job first — get you a train — and its design says so: a slate-and-
white page, grey fields, and a single red button. Behind it sits a design system the railway builds
in the open, with state-aware adaptive tokens and a focus colour applied everywhere.

## 12. Principles

- **One red.** The primary action and nothing else.
- **Open by default.** The system and its tokens are public.
- **Visible focus.** The same outline on every control.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: search to `#c50014`, the header link gains an underline bar, the ghost button a 24% wash, the
fields no change. Press: `#c50014`, the bar, a 32% wash. Focus: a 2px `#257fa8` outline on all four.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.bahn.de/ (live homepage — root and stylesheet custom properties read; DB Screen Sans and Head loaded; four components measured at rest, hover, pressed and focus, captured 2026-09-26); https://design-system.deutschebahn.com/ (DB UX Design System — nonsense path returns a GitHub Pages 404, read 2026-09-26); https://github.com/db-ux-design-system/core-web (DB UX Design System monorepo — design tokens and components for web UIs, read 2026-09-26); https://www.bahn.de/impressum (Impressum — DB Fernverkehr AG, Frankfurt, read 2026-09-26)
