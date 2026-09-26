---
id: ecosia
name: Ecosia
country: DE
category: consumer-tech
homepage: "https://www.ecosia.org"
primary_color: "#275243"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ecosia.org&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-primary: "#333333"
    brand-secondary: "#275243"
    featured: "#d7eb80"
    featured-hover: "#bbcf65"
    featured-active: "#a1b353"
    primary-hover: "#4c4c4c"
    primary-active: "#6c6c6c"
    secondary-hover: "#deded9"
    secondary-active: "#bebeb9"
    foreground: "#333333"
    text-secondary: "#6c6c6c"
    ink-static: "#1a1a1a"
    canvas: "#ffffff"
    background-secondary: "#f8f8f6"
    background-quaternary: "#f0f0eb"
    focus: "#0094c7"
    success: "#008009"
    leaf-dark: "#005304"
    error: "#b90a32"
    results-link: "#1a0dab"
    results-visited: "#681da8"
  typography:
    family: { display: "Founders Grotesk", sans: "Inter" }
    display: { size: 48, weight: 700, use: "hero heading" }
    body: { size: 16, weight: 400, use: "buttons and body" }
  rounded: { pill: 9999 }
  components:
    button-featured: { type: "button", bg: "#d7eb80", fg: "#333333", border: "#d7eb80", radius: 9999, height: "40px", padding: "0 15px", font: "16px / 400", hover: "#bbcf65", pressed: "#a1b353", focus: "outline 2px solid #0094c7", use: "Download Ecosia Browser — the featured lime pill (--color-button-background-featured-*); a 2px blue focus outline." }
    button-transparent: { type: "button", bg: "transparent", fg: "#333333", radius: 9999, height: "40px", padding: "0 15px", font: "16px / 400", hover: "rgba(51,51,51,0.16)", pressed: "rgba(51,51,51,0.24)", focus: "outline 2px solid #0094c7", use: "AI tools — a transparent pill tinting 16% on hover and 24% when pressed." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ecosia.org/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ecosia.org/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.ecosia.org/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: imprint, kind: official-doc, url: "https://www.ecosia.org/imprint", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.background-quaternary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.background-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.featured: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.featured-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.featured-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.focus: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ink-static: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.leaf-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.results-link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.results-visited: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-active: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-featured.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-featured.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-transparent.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Ecosia

## 1. Visual Theme & Atmosphere

Ecosia is a search engine and browser that puts "100% of profits for the planet": "We use all our
profits for climate action, with the majority going into tree-planting projects around the world."
Its homepage counts over 256 million trees planted, 20 million people using Ecosia, 900+ native
species and 70+ active projects, and publishes financial reports every month. It is a certified B
Corporation; its imprint names **Ecosia GmbH**, Gerichtstrasse 23, 13347 Berlin, Germany.

The site is calm and earthy: charcoal **`#333333`** as the brand primary and text colour, a deep
forest green **`#275243`** as the secondary brand colour, a fresh lime **`#d7eb80`** for featured
actions, warm off-whites **`#f8f8f6`** and **`#f0f0eb`**, and **Founders Grotesk** headlines over
**Inter**.

What makes it worth reading:

- **Button families in three states.** `--color-button-background-{primary, secondary, featured,
  negative, transparent, glass-static}` each with `-hover` and `-active`.
- **Search-result conventions kept.** `--color-link-results-default` `#1a0dab` and `-visited`
  `#681da8` — the classic search-link blue and visited purple — sit beside the brand palette.
- **Glass buttons for video.** `--color-button-background-glass-static` `rgba(26,26,26,.32)` →
  `.5` → `.64`, with translucent white borders, for controls over imagery.

### Primary tasks
- Search; download the Ecosia browser.
- See trees planted and monthly financial reports.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `ecosia.org`: 81 root custom properties, all `--color-*`,
first-party.

### Brand

- **Brand primary** (`#333333`) — `--color-brand-primary`, primary buttons and text.
- **Brand secondary** (`#275243`) — forest green surfaces and text.
- **Featured** (`#d7eb80`) → hover (`#bbcf65`) → active (`#a1b353`).

### Neutrals

- **Primary hover** (`#4c4c4c`) · **Primary active** (`#6c6c6c`).
- **Secondary hover** (`#deded9`) · **Secondary active** (`#bebeb9`).
- **Foreground** (`#333333`) · **Text secondary** (`#6c6c6c`) · **Ink static** (`#1a1a1a`).
- **Canvas** (`#ffffff`) · **Background secondary** (`#f8f8f6`) · **Background quaternary**
  (`#f0f0eb`).

### Signals and links

**Focus** `#0094c7` · **Success** `#008009` (leaf dark `#005304`) · **Error** `#b90a32` · **Results
link** `#1a0dab` · **Results visited** `#681da8`.

## 3. Typography Rules

### Font family

**Founders Grotesk** (600) for display headings and **Inter** (400–700) for text; both load
(`document.fonts`).

### Scale

H1 48px/700 Founders Grotesk; section labels 14px/700 uppercase Inter; body and buttons 16px/400.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The consent
banner was never answered (the probe hid it).

- **Featured pill** — Download Ecosia Browser: **`#d7eb80`**, `#333333` text, full pill, 40px.
  Hover **`#bbcf65`**, press **`#a1b353`**; focus a **2px `#0094c7`** outline.
- **Transparent pill** — AI tools: transparent → **`rgba(51,51,51,0.16)`** → **0.24**; same focus.

### Radius

Full pills (`9999px`).

## 5. Layout Principles

- A video hero with a search box and counters, then value blocks, a monthly finance panel and a
  tree-planting section on warm off-white.

## 6. Depth & Elevation

`--color-elevation-layer-1` `rgba(26,26,26,.18)` and `-layer-2` `.06` build two-layer shadows.

## 7. Do's and Don'ts

### Do
- Use charcoal `#333333` as the brand primary and the forest green `#275243` as the secondary.
- Save lime `#d7eb80` for featured actions, darkening to `#bbcf65` and `#a1b353`.
- Keep search results in the conventional `#1a0dab` / `#681da8`.

### Don't
- Don't use lime for body text or backgrounds at large scale.
- Don't use pure white everywhere; secondary grounds are warm off-white.
- Don't square off buttons.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#333333` charcoal · `#275243` forest · `#d7eb80` lime · `#bbcf65` lime hover · `#f8f8f6` off-white ·
`#6c6c6c` secondary · `#0094c7` focus · `#008009` success

### Example Component Prompts
- "A 40px lime `#d7eb80` pill with `#333333` text; hover `#bbcf65`, press `#a1b353`; focus a 2px
  `#0094c7` outline."
- "A 48px Founders Grotesk headline in white over a video, with glass buttons at 32% black."

## 10. Voice & Tone

Direct and purposeful — "Search with a purpose". Not assessed further.

## 11. Brand Narrative

A Berlin search company that spends its profits on trees and publishes the numbers every month. The
interface is quiet — charcoal, forest green, off-white — with a single lime for the action that
matters.

## 12. Principles

- **100% of profits for the planet.**
- **Total transparency, every month.**
- **Private by default.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: lime darkens to `#bbcf65`; transparent pills tint 16%. Press: `#a1b353`; 24%. Focus: a 2px
`#0094c7` outline.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.ecosia.org/ (live homepage — 81 root custom properties read via `getComputedStyle`; Founders Grotesk and Inter loaded; two components measured at rest, hover, pressed and focus; homepage figures and "100% of profits for the planet", captured 2026-09-26); https://www.ecosia.org/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.ecosia.org/imprint (imprint — Ecosia GmbH, Gerichtstrasse 23, 13347 Berlin, HRB 170873, read 2026-09-26)
