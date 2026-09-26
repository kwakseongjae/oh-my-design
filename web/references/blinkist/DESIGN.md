---
id: blinkist
name: Blinkist
country: DE
category: education
homepage: "https://www.blinkist.com"
primary_color: "#2EE081"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=blinkist.com&sz=128"
verified: "2026-09-27"
added: "2026-09-27"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-27"
  colors:
    brand-green: "#2ee081"
    brand-midnight: "#033049"
    brand-blue: "#0266f2"
    blue-hover: "#0552bd"
    conversion-text: "#008566"
    violet: "#694dd1"
    raspberry: "#c81e34"
    summer-yellow: "#fdbe21"
    rating: "#edab02"
    foreground: "#033049"
    text-secondary: "#3b474a"
    text-tertiary: "#6d787e"
    black: "#000000"
    canvas: "#ffffff"
    pale-mint-grey: "#eff5f3"
    surface-neutral: "#f9fbfa"
    light-grey: "#bac8ce"
    lightest-grey: "#e1e7ea"
  typography:
    family: { sans: "CeraPRO", serif: "blinkist-serif" }
    display: { size: 64, weight: 700, use: "section headings in midnight" }
    body: { size: 16, weight: 500, use: "buttons and navigation" }
  rounded: { sm: 4, md: 6, lg: 8 }
  components:
    button-conversion: { type: "button", bg: "#2ee081", fg: "#033049", radius: 6, height: "44px", padding: "0 16px", font: "16px / 500", hover: "rgba(46,224,129,0.8)", pressed: "rgba(46,224,129,0.8)", focus: "outline 2px solid #0266f2", use: "Get started — the brand green conversion button with midnight text; hover drops it to 80% and adds a 0 3px 6px #bac8ce shadow; focus a 2px blue outline." }
    link-nav: { type: "button", bg: "transparent", fg: "#000000", radius: 6, height: "32px", font: "14px / 500", hover: "fg #0552bd", pressed: "fg #0552bd", focus: "outline 2px solid #0266f2", use: "Log in / For Business / Categories — black text turning blue #0552bd on hover; focus a 2px #0266f2 outline." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-27"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.blinkist.com/", inspected: "2026-09-27" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.blinkist.com/", captured: "2026-09-27" }
    - { id: control-404, kind: product-surface, url: "https://www.blinkist.com/zz-this-does-not-exist", captured: "2026-09-27" }
    - { id: about, kind: official-doc, url: "https://www.blinkist.com/about", captured: "2026-09-27" }
    - { id: legal, kind: official-doc, url: "https://www.blinkist.com/en/disclaimer", captured: "2026-09-27" }
  conflicts: []
  claims:
    tokens.colors.black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.blue-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.brand-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.brand-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.brand-midnight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.conversion-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.light-grey: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.lightest-grey: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.pale-mint-grey: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.raspberry: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.rating: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.summer-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.surface-neutral: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.text-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.colors.violet: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.components.button-conversion.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.button-conversion.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-27" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
    tokens.typography.family.serif: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-27" }
---
# Design System Inspiration of Blinkist

## 1. Visual Theme & Atmosphere

Blinkist turns nonfiction books into 15-minute "blinks" in text and audio. "Founded in 2012 by four
friends, Blinkist now connects 44-million readers worldwide to the biggest ideas from bestselling
nonfiction." It collaborates with authors ("humans before algorithms") and lists a UN World Summit
Award, a Google Material Design Award and Apple's Best Apps of 2017. Its legal notice names **Blinks
Labs GmbH**, Revaler Straße 31, 10245 Berlin.

The site is fresh and legible: white and a pale mint-grey **`#eff5f3`**, deep midnight blue
**`#033049`** for headings and text, Blinkist green **`#2ee081`** for the conversion button, a blue
**`#0266f2`** for links and focus, and **Cera Pro** throughout, with a Blinkist serif available.

What makes it worth reading:

- **Container / content / outline roles.** `--color-container-*`, `--color-content-*` and
  `--color-outline-*` for primary, secondary, accent, conversion, info, success, warning, danger and
  disabled — each with an `on-` content colour.
- **"Conversion" as a role.** The green is named for its job: `--color-container-conversion`,
  `--color-content-on-conversion` (midnight).
- **Extended ramps with names.** Midnight, blue, green, orchid-violet, raspberry and summer-yellow,
  eight steps each.

### Primary tasks
- Get started with a trial; log in.
- Browse categories; learn about Blinkist for Business.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `blinkist.com`: 385 root custom properties — `--color-*` 157,
`--text-*` 52, `--dim-*` 23, `--type-*` 15 … and Tailwind's `--tw-*` (32, excluded).

### Brand

- **Brand green** (`#2ee081`) — `--color-brand-green`, `--color-container-conversion`.
- **Brand midnight** (`#033049`) — `--color-brand-midnight`, `--color-content-primary`.
- **Brand blue** (`#0266f2`) — accent, info, focus ring · **Blue hover** (`#0552bd`).
- **Conversion text** (`#008566`) — `--color-content-conversion`, success.

### Extended accents

**Violet** `#694dd1` · **Raspberry** `#c81e34` (danger) · **Summer yellow** `#fdbe21` · **Rating**
`#edab02`.

### Neutrals

- **Foreground** (`#033049`) · **Text secondary** (`#3b474a`) · **Text tertiary** (`#6d787e`) ·
  **Black** (`#000000`) — navigation.
- **Canvas** (`#ffffff`) · **Pale mint grey** (`#eff5f3`) · **Surface neutral** (`#f9fbfa`).
- **Light grey** (`#bac8ce`) · **Lightest grey** (`#e1e7ea`).

## 3. Typography Rules

### Font family

**Cera Pro** (400, 500, 700) for everything measured, with **blinkist-serif** (400–700) also
loaded; both via `document.fonts`.

### Scale

H1 64px/400; H2 48–64px/700 in midnight; buttons and navigation 14–16px/500.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The grey
button border (`oklch(0.928 0.006 264.5)`) is Tailwind's default and is not recorded.

- **Conversion button** — Get started: **`#2ee081`**, `#033049` 16px/500, 6px, 44px. Hover and
  press drop it to **80%** (`rgba(46,224,129,0.8)`) with a `0 3px 6px #bac8ce` shadow; focus a
  **2px `#0266f2`** outline.
- **Navigation link** — Log in, For Business, Categories: black 14–16px/500. Hover **`#0552bd`**;
  same focus.

### Radius

4–8px (`--radius-*`).

## 5. Layout Principles

- A white header with categories, a hero with the green call to action, then content rows on white
  and pale mint grey.

## 6. Depth & Elevation

A soft `0 3px 6px #bac8ce` shadow appears on the hovered conversion button.

## 7. Do's and Don'ts

### Do
- Use green `#2ee081` with midnight `#033049` text for the one conversion action.
- Set headings in midnight, not black.
- Use blue `#0266f2` for links and focus.

### Don't
- Don't put white text on the green; the pairing is midnight on green.
- Don't use green for secondary actions.
- Don't adopt Tailwind's default grey border as a brand token.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#2ee081` Blinkist green · `#033049` midnight · `#0266f2` blue · `#0552bd` hover · `#eff5f3` pale
mint · `#3b474a` secondary · `#6d787e` tertiary · `#fdbe21` yellow

### Example Component Prompts
- "A 44px `#2ee081` button, `#033049` 16px/500 Cera Pro, 6px radius; hover 80% with a soft shadow."
- "A 64px Cera Pro 700 heading in `#033049` on `#eff5f3`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Four friends' answer to having no time to read: key ideas in 15 minutes. The interface is calm
midnight and mint, with one green button that means "start".

## 12. Principles

- **15-minute discoveries.**
- **Humans before algorithms.**
- **One conversion colour.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: the green drops to 80% with a shadow; links turn `#0552bd`. Press: the same. Focus: a 2px
`#0266f2` outline.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.blinkist.com/ (live homepage — 385 root custom properties read via `getComputedStyle`, Tailwind excluded; Cera Pro and blinkist-serif loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-27); https://www.blinkist.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.blinkist.com/about (About — founded 2012 by four friends, 44 million readers, 15-minute format, awards, read 2026-09-27); https://www.blinkist.com/en/disclaimer (legal notice — Blinks Labs GmbH, Revaler Straße 31, 10245 Berlin, read 2026-09-27)
