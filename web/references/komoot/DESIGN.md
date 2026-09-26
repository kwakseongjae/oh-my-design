---
id: komoot
name: komoot
country: DE
category: consumer-tech
homepage: "https://www.komoot.com"
primary_color: "#4F6814"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=komoot.com&sz=128"
verified: "2026-09-27"
added: "2026-09-27"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-27"
  colors:
    primary: "#4f6814"
    primary-hover: "#404823"
    green-deep: "#212512"
    accent: "#ee6b17"
    accent-hover: "#ca5910"
    accent-subtle: "#fce1d1"
    secondary: "#e3d2b4"
    secondary-hover: "#d0c1a6"
    subtle-green: "#e7e8d1"
    purple: "#8879e1"
    foreground: "#1c1a18"
    text-on-primary: "#f5f3ec"
    background: "#faf9f4"
    sand: "#ede9de"
    border: "#edebe5"
    border-idle: "#e0dbce"
    disabled: "#d1cdc4"
    danger: "#b53521"
  typography:
    family: { display: "Nohemi", sans: "Satoshi" }
    display: { size: 72, weight: 500, use: "hero heading; H2 40px/500" }
    button: { size: 14, weight: 700, use: "header buttons" }
  rounded: { md: 12, lg: 16 }
  components:
    button-primary: { type: "button", bg: "#4f6814", fg: "#f5f3ec", radius: 16, height: "43px", padding: "12px 16px", font: "14px / 700", hover: "#404823", pressed: "#404823", use: "Login or Signup — olive primary (actionBaseFillPrimary) darkening to #404823." }
    nav-ghost-white: { type: "button", bg: "transparent", fg: "#faf9f4", radius: 12, height: "35px", padding: "8px 12px", font: "14px / 500", hover: "rgba(28,26,24,0.498)", pressed: "rgba(28,26,24,0.498)", use: "Routes / Planner / Features / Updates over the hero — off-white text; hover lays a 50% ink fill (actionBaseFillGhostWhiteHover #1c1a187f)." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-27"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.komoot.com/", inspected: "2026-09-27" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.komoot.com/", captured: "2026-09-27" }
    - { id: control-404, kind: product-surface, url: "https://www.komoot.com/zz-this-does-not-exist", captured: "2026-09-27" }
    - { id: imprint, kind: official-doc, url: "https://www.komoot.com/imprint", captured: "2026-09-27" }
  conflicts: []
  claims:
    tokens.colors.accent: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.accent-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.accent-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.border-idle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.green-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.sand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.secondary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.subtle-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-on-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.nav-ghost-white.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
---
# Design System Inspiration of komoot

## 1. Visual Theme & Atmosphere

komoot plans outdoor routes — "Explore beyond the map". It generates "sport-specific routes" for
road bikes, mountain bikes and hikes, offers turn-by-turn voice navigation with offline maps, and
calls its users "the largest outdoor community in the world". Curated Collections cover trails such
as the North Coast 500 and the John Muir Trail. Its imprint names **komoot GmbH**, Kienberger Allee
4, 12529 Schönefeld, Germany.

The site is earthy and warm: an off-white ground **`#faf9f4`**, sand **`#ede9de`**, ink **`#1c1a18`**,
olive green **`#4f6814`** for the primary action, and a bright orange **`#ee6b17`** as the accent.
Headlines are set in **Nohemi**, text in **Satoshi**.

What makes it worth reading:

- **Action tokens by fill and content.** `actionBaseFill<Variant><State>` paired with
  `actionContentFill<Variant><State>` — primary, green, secondary, subtle, accent-orange, purple,
  ghost black/white/orange, plus Apple, Google Play and Facebook buttons.
- **A warm neutral world.** Off-white, sand, beige secondary `#e3d2b4` and warm greys instead of
  cool ones.
- **Outdoor colours.** Olive, deep forest `#212512`, orange and a lilac purple `#8879e1`.

### Primary tasks
- Plan and discover routes; browse Collections.
- Sign up or log in; get the app.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `komoot.com`: 482 root custom properties, all `--theme-ui-colors-*`
(a Theme UI colour scale), first-party values.

### Greens

- **Primary** (`#4f6814`) — `actionBaseFillPrimaryDefault`.
- **Primary hover** (`#404823`) — also `actionBaseFillGreenDefault` · **Green deep** (`#212512`).
- **Subtle green** (`#e7e8d1`).

### Accent and secondary

- **Accent** (`#ee6b17`) → hover (`#ca5910`) · **Accent subtle** (`#fce1d1`).
- **Secondary** (`#e3d2b4`) → hover (`#d0c1a6`).
- **Purple** (`#8879e1`).

### Neutrals

- **Foreground** (`#1c1a18`) · **Text on primary** (`#f5f3ec`).
- **Background** (`#faf9f4`) · **Sand** (`#ede9de`) · **Border** (`#edebe5`) · **Border idle**
  (`#e0dbce`) · **Disabled** (`#d1cdc4`).
- **Danger** (`#b53521`).

## 3. Typography Rules

### Font family

**Nohemi** (500, 700) for headlines, **Satoshi** (400, 500, 700) for text, and **Boyrun** loaded as
well; all via `document.fonts`.

### Scale

H1 72px/500 Nohemi; H2 40px/500; header buttons 14px/700; navigation 14px/500.

## 4. Component Stylings

Measured with a hover counted only when `:hover` matched; consent refused. Focus renders a
translucent blue ring (`rgba(66,153,225,.5)`, border `#63b3ed`) that is not part of the komoot palette;
it is not recorded as a brand state.

- **Primary** — Login or Signup: **`#4f6814`**, `#f5f3ec` 14px/700, 16px radius, 43px. Hover and
  press **`#404823`**.
- **Ghost navigation** — Routes, Planner, Features, Updates over the hero: off-white text. Hover and
  press lay **`rgba(28,26,24,0.5)`**.
- The App link (`#fce1d1` / `#ee6b17`) showed no hover change.

### Radius

16px on buttons, 12px on navigation items.

## 5. Layout Principles

- A transparent header over a photographic hero, then alternating feature blocks and Collections on
  off-white and sand.

## 6. Depth & Elevation

Flat; warm surfaces separate sections.

## 7. Do's and Don'ts

### Do
- Use olive `#4f6814` for primary actions and orange `#ee6b17` for accents.
- Keep neutrals warm — off-white, sand, beige.
- Pair every fill token with its content token.

### Don't
- Don't use cool greys or pure white grounds.
- Don't use orange for primary actions.
- Don't adopt the blue focus ring as a brand colour.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#4f6814` olive · `#404823` hover · `#ee6b17` orange · `#fce1d1` orange subtle · `#1c1a18` ink ·
`#faf9f4` off-white · `#ede9de` sand · `#e3d2b4` beige

### Example Component Prompts
- "A 43px olive `#4f6814` button, `#f5f3ec` 14px/700 Satoshi, 16px radius; hover `#404823`."
- "A 72px Nohemi headline in white over a trail photo."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

komoot turns planning an outdoor day into picking a line on a map. Its palette comes from the trail
— olive, forest, sand, trail-marker orange — and the type is friendly and modern.

## 12. Principles

- **Explore beyond the map.**
- **Sport-specific routes.**
- **Warm, natural colour.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: olive darkens to `#404823`; ghost navigation takes a 50% ink fill. Press: the same. Focus: a
non-brand blue ring (not recorded).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.komoot.com/ (live homepage — 482 root custom properties read via `getComputedStyle`; Nohemi and Satoshi loaded; two components measured at rest, hover and pressed; homepage copy, captured 2026-09-27); https://www.komoot.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.komoot.com/imprint (imprint — komoot GmbH, Kienberger Allee 4, 12529 Schönefeld, Germany, read 2026-09-27)
