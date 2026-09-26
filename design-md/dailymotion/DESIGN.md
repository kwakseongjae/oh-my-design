---
id: dailymotion
name: Dailymotion
country: FR
category: consumer-tech
homepage: "https://www.dailymotion.com"
primary_color: "#6200EE"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=dailymotion.com&sz=128"
verified: "2026-09-27"
added: "2026-09-27"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-27"
  colors:
    purple: "#6200ee"
    purple-700: "#8133f1"
    purple-deep: "#360083"
    lavender: "#c5a1f9"
    hover-surface: "#f2ebfe"
    gradient-pink-1: "#fab3f7"
    gradient-pink-2: "#f682f2"
    gradient-lavender: "#a2a2fb"
    decorative-selected: "#fde1fc"
    magenta-text: "#8108a6"
    lime: "#c2ff80"
    foreground: "#0d0d0d"
    text-secondary: "#2b2b2b"
    text-muted: "#767676"
    canvas: "#ffffff"
    surface-secondary: "#f8f8f8"
    surface-tertiary: "#f0f0f0"
    input-border: "#dadada"
    error: "#b72a1a"
  typography:
    family: { sans: "ABCFavorit", display: "DailySans" }
    heading: { size: 28, weight: 500, use: "page H1; DailySans 700 for card titles" }
    button: { size: 14, weight: 500, use: "header buttons" }
  rounded: { md: 6 }
  components:
    button-gradient: { type: "button", bg: "transparent", fg: "#0d0d0d", radius: 6, height: "40px", padding: "0 16px", font: "14px / 500", hover: "#f682f2", pressed: "#fde1fc", use: "Se connecter — a 228° gradient #fab3f7 → #f682f2 → #a2a2fb (decorative-gradient tokens); hover paints a solid #f682f2 ::before; press #fde1fc." }
    button-secondary: { type: "button", bg: "#f8f8f8", fg: "#0d0d0d", radius: 6, height: "40px", padding: "0 16px", font: "14px / 500", hover: "#f8f8f8", pressed: "#f0f0f0", use: "Rechercher — light grey; hover adds a 0 0 8px rgba(13,13,13,.12) shadow; press #f0f0f0." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-27"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.dailymotion.com/fr", inspected: "2026-09-27" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.dailymotion.com/fr", captured: "2026-09-27" }
    - { id: control-404, kind: product-surface, url: "https://www.dailymotion.com/zz-this-does-not-exist", captured: "2026-09-27" }
    - { id: about, kind: official-doc, url: "https://about.dailymotion.com/en", captured: "2026-09-27" }
    - { id: legal, kind: official-doc, url: "https://www.dailymotion.com/legal/infos", captured: "2026-09-27" }
  conflicts: []
  claims:
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.decorative-selected: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.gradient-lavender: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.gradient-pink-1: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.gradient-pink-2: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.hover-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.input-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.lavender: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.lime: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.magenta-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple-700: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.purple-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.surface-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.surface-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.components.button-gradient.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-gradient.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.button.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.heading.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
---
# Design System Inspiration of Dailymotion

## 1. Visual Theme & Atmosphere

"The home for videos that matter." Dailymotion's mission page says it is "more than just a video
app": it builds "the next generation of media platforms designed to inspire millions of people to
grow and share a diverse and inclusive vision of the world", putting "listening, discovery, and
kindness back at the heart of interactions". Its legal notice names **Dailymotion SA**, 50 rue
Camille Desmoulins, 92130 Issy-les-Moulineaux, as the service provider in the EEA.

The site is white and light grey (`#f8f8f8`, `#f0f0f0`) with near-black text **`#0d0d0d`**, and a
playful accent world: a deep purple **`#6200ee`**, lavender, a pink-lavender gradient on the sign-in
button, and lime decorations. Type is **ABC Favorit**, with **DailySans** for titles.

What makes it worth reading:

- **Gradient borders as tokens.** `--action-border-active` `linear-gradient(46deg,#c5a1f9,#f66093)`,
  plus lavender, lime, mustard and turquoise variants.
- **Layered colour naming.** `--color-core-*` primitives (grayscale, purple, lime, states),
  `--color-currentcolors-*` for the current theme, and roles for buttons, interactive states,
  surfaces and effects.
- **Drop shadows as colour tokens.** `--color-effect-dropshadow-primary-1` … `-20` — ink at 1% to 20%.

### Primary tasks
- Watch videos for you, explore, follow creators.
- Search; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `dailymotion.com/fr`: 434 root custom properties — `--color-*`
158, `--rem-*` 116, `--surface-*` 16, `--vertical-*` 14, `--notification-*` 10 … All first-party.

### Purple and decorative

- **Purple** (`#6200ee`) — `--color-text-decorative-1`, `--color-interactive-surface-selected`.
- **Purple 700** (`#8133f1`) · **Purple deep** (`#360083`) — hover border · **Lavender** (`#c5a1f9`).
- **Hover surface** (`#f2ebfe`).
- **Gradient** `#fab3f7` → `#f682f2` → `#a2a2fb` · **Decorative selected** (`#fde1fc`).
- **Magenta text** (`#8108a6`) — active and visited links · **Lime** (`#c2ff80`).

### Neutrals

- **Foreground** (`#0d0d0d`) · **Text secondary** (`#2b2b2b`) · **Text muted** (`#767676`).
- **Canvas** (`#ffffff`) · **Surface secondary** (`#f8f8f8`) · **Surface tertiary** (`#f0f0f0`) ·
  **Input border** (`#dadada`).
- **Error** (`#b72a1a`).

## 3. Typography Rules

### Font family

**ABC Favorit** (400, 500, 700) for text and **DailySans** (700) for titles; both load
(`document.fonts`).

### Scale

H1 28px/500; card titles 16px/700 DailySans; buttons 14px/500; small follow buttons 12px/500.

## 4. Component Stylings

Measured with a hover counted only when `:hover` matched. Focus showed only the browser's ring and
is not recorded.

- **Gradient button** — Se connecter: a **228° `#fab3f7 → #f682f2 → #a2a2fb`** gradient, `#0d0d0d`
  14px/500, 6px, 40px. Hover paints a solid **`#f682f2`**; press **`#fde1fc`**.
- **Secondary** — Rechercher: **`#f8f8f8`**. Hover adds a `0 0 8px rgba(13,13,13,.12)` shadow; press
  **`#f0f0f0`**.

### Radius

6px on buttons.

## 5. Layout Principles

- A slim header with search and sign-in, tabs (Pour toi, Explorer, Suivi), then a feed of video cards
  with creator follow buttons.

## 6. Depth & Elevation

`--action-button-shadow` `0 0 0.5rem #0d0d0d1f`; drop-shadow colour tokens from 1% to 20%.

## 7. Do's and Don'ts

### Do
- Keep the page neutral and put colour in accents: purple, lavender gradients, lime.
- Use gradient borders for active states.
- Set titles in DailySans and text in ABC Favorit.

### Don't
- Don't fill large areas with the purple.
- Don't use pure black; the ink is `#0d0d0d`.
- Don't flatten the sign-in gradient to one colour at rest.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#6200ee` purple · `#c5a1f9` lavender · `#f682f2` pink · `#fde1fc` pale pink · `#c2ff80` lime ·
`#0d0d0d` ink · `#f8f8f8` surface · `#8108a6` magenta link

### Example Component Prompts
- "A 40px button with a 228° `#fab3f7 → #f682f2 → #a2a2fb` gradient, `#0d0d0d` 14px/500 ABC Favorit,
  6px radius; hover solid `#f682f2`, press `#fde1fc`."
- "A light grey `#f8f8f8` button that gains a soft 8px shadow on hover."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

A French video platform repositioning around nuance, listening and kindness. Its interface keeps
neutral surfaces and lets gradients and a deep purple carry the personality.

## 12. Principles

- **Videos that matter.**
- **Listening, discovery, kindness.**
- **Neutral surfaces, colourful accents.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the gradient turns solid pink; grey buttons gain a soft shadow. Press: pale pink `#fde1fc`;
grey `#f0f0f0`. Focus: the browser's ring (not recorded).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.dailymotion.com/fr (live homepage — 434 root custom properties read via `getComputedStyle`; ABC Favorit and DailySans loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://www.dailymotion.com/zz-this-does-not-exist (nonsense-path control — HTTP 200 with a not-found page, "Il semblerait que nous ayons perdu cette page", read 2026-09-27); https://about.dailymotion.com/en (About — "The home for videos that matter", mission, read 2026-09-27); https://www.dailymotion.com/legal/infos (legal notices — Dailymotion SA, 50 rue Camille Desmoulins, 92130 Issy-les-Moulineaux, read 2026-09-27)
