---
id: bitpanda
name: Bitpanda
country: AT
category: fintech
homepage: "https://www.bitpanda.com"
primary_color: "#103E36"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bitpanda.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#103e36"
    brand-hover: "#28514a"
    brand-pressed: "#40655e"
    brand-text: "#16764d"
    brand-tertiary: "#f3f3f2"
    positive: "#2cec9a"
    positive-pressed: "#16764d"
    foreground: "#282828"
    text-secondary: "#7e7e7e"
    fill-tertiary: "#a9a9a9"
    fill-quaternary: "#eaeaea"
    divider: "#f4f4f4"
    widget: "#f9f9f9"
    hover-light: "#f3f5f5"
    canvas: "#ffffff"
    negative: "#ff4e4e"
    negative-text: "#cc3e3e"
    information: "#2b6fd5"
    best: "#f2254a"
  typography:
    family: { display: "Bitpanda Compressed", sans: "Inter" }
    display: { size: 88, weight: 700, use: "hero heading" }
    body: { size: 15, weight: 500, use: "header buttons" }
  rounded: { sm: 4, md: 5 }
  components:
    button-signup: { type: "button", bg: "#103e36", fg: "#ffffff", radius: 5, height: "32px", padding: "4px 16px", font: "15px / 500", hover: "#28514a", pressed: "#28514a", use: "Sign-up in the header — the dark brand green; hover and press lift it to #28514a with a #f3f5f5 label; focus is the browser's ring." }
    button-login: { type: "button", bg: "#ffffff", fg: "#282828", radius: 5, height: "32px", padding: "4px 16px", font: "15px / 500", hover: "#f3f5f5", pressed: "#f3f5f5", use: "Log in — white with #282828 text; hover and press tint #f3f5f5." }
    button-neutral: { type: "button", bg: "#f4f4f4", fg: "#282828", border: "#f4f4f4", radius: 4, height: "48px", padding: "8px 16px", font: "15px / 400", hover: "#eaeaea", pressed: "#f4f4f4", use: "Start investing — a light grey 48px button that darkens to #eaeaea on hover." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.bitpanda.com/en", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.bitpanda.com/en", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.bitpanda.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: about, kind: official-doc, url: "https://group.bitpanda.com/about-us", captured: "2026-09-26" }
    - { id: legal, kind: official-doc, url: "https://www.bitpanda.com/en/legal/legal-notice", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.best: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.divider: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.fill-quaternary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.fill-tertiary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.hover-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.information: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.widget: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-neutral.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.display.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Bitpanda

## 1. Visual Theme & Atmosphere

Bitpanda was "founded in Vienna by Eric Demuth, Paul Klanschek, Christian Trummer with a mission to
make Bitcoin accessible to everyone" in 2014; in 2015 it started brokerage for Bitcoin in the
Austrian market. Its group page frames the idea as "your wealth shouldn't depend on who your banker
is". The site's own asset-class tokens name crypto, stocks, ETFs, commodities, metals and more.

The site pairs a deep forest green **`#103e36`** with a bright mint **`#2cec9a`**: dark-green
hero and buttons, mint highlights, neutral greys **`#282828`** and **`#f4f4f4`**, and huge headlines
in **Bitpanda Compressed** over **Inter** body text.

What makes it worth reading:

- **A complete semantic scheme.** `--colors-<group>-<role>` for brand, neutrals, positive, negative,
  information and "best": `fill_primary`, `fill_hover`, `fill_pressed`, `fill_disabled`,
  `on_fill_light`, `stroke_primary`, `text_primary_inverted` …
- **Asset classes as colours.** `--colors-class-crypto` `#ff9426`, `-etf` `#2b6fd5`, `-stock`
  `#21c9ab`, `-commodities` `#f7da44`, `-metal` `#995917`, `-leverage` `#7921ea`, `-ai` `#2cec9a`.
- **A compressed display face.** Bitpanda Compressed 700 at 88px for the hero.

### Primary tasks
- Sign up or log in.
- Start investing; explore asset classes.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `bitpanda.com/en`: 297 root custom properties — `--colors-*`
119, `--animations-*` 26, `--rb-*` 22, `--color-*` 22, `--spacing-*` 18 … All first-party. Tokens
are served as 8-digit hex with an `ff` alpha; they are written here as 6-digit.

### Brand green

- **Brand** (`#103e36`) — `--colors-brand-fill_primary`; the Sign-up button and hero.
- **Brand hover** (`#28514a`) — `fill_hover`, `fill_focused` · **Brand pressed** (`#40655e`).
- **Brand text** (`#16764d`) — `text_primary` · **Brand tertiary** (`#f3f3f2`).

### Mint (positive)

- **Positive** (`#2cec9a`) — `--colors-positive-fill_primary`, `--colors-class-ai`.
- **Positive pressed** (`#16764d`).

### Neutrals

- **Foreground** (`#282828`) — `--colors-neutrals-text_primary`.
- **Text secondary** (`#7e7e7e`) · **Fill tertiary** (`#a9a9a9`) · **Fill quaternary** (`#eaeaea`).
- **Divider** (`#f4f4f4`) · **Widget** (`#f9f9f9`) · **Canvas** (`#ffffff`) · **Hover light**
  (`#f3f5f5`).

### Status

**Negative** `#ff4e4e` (text `#cc3e3e`) · **Information** `#2b6fd5` · **Best** `#f2254a`.

## 3. Typography Rules

### Font family

**Bitpanda Compressed** (700) for display; **Inter** (400–700) for text. Both load
(`document.fonts`).

### Scale

H1 88px/700 Compressed; H2 17px/500 Inter; header buttons 15px/500; body 15px/400.

## 4. Component Stylings

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
rejected.

- **Sign-up** — **`#103e36`**, white 15px/500, 5px, 32px. Hover and press **`#28514a`** with a
  `#f3f5f5` label; focus is the browser's ring.
- **Log in** — white, `#282828`. Hover and press **`#f3f5f5`**.
- **Start investing** — **`#f4f4f4`**, `#282828` 15px/400, 4px, 48px. Hover **`#eaeaea`**.

### Radius

4–5px on buttons.

## 5. Layout Principles

- A dark-green header and hero with a compressed headline, then trust badges and product sections
  on white.

## 6. Depth & Elevation

Flat; neutrals and green blocks separate sections.

## 7. Do's and Don'ts

### Do
- Use forest green `#103e36` for primary actions and mint `#2cec9a` for positive highlights.
- Name colours by group and role; give each fill hover, pressed and disabled values.
- Set hero headlines in the compressed face.

### Don't
- Don't use mint for primary buttons; the action colour is the dark green.
- Don't reuse asset-class colours for status.
- Don't set body text in the compressed face.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#103e36` forest green · `#28514a` hover · `#2cec9a` mint · `#16764d` brand text · `#282828` ink ·
`#7e7e7e` secondary · `#f4f4f4` divider · `#ff4e4e` negative

### Example Component Prompts
- "A 32px `#103e36` button, white 15px/500 Inter, 5px radius; hover `#28514a`."
- "An 88px Bitpanda Compressed headline in white on forest green."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Founded in Vienna to make Bitcoin accessible, Bitpanda now wraps many asset classes in one calm
green — each class with a colour of its own — and a compressed headline face that makes the brand
recognisable at a glance.

## 12. Principles

- **Accessible wealth.** "Your wealth shouldn't depend on who your banker is."
- **Role-named colour.**
- **Every asset has a colour.**

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: brand green lifts to `#28514a`; white buttons tint `#f3f5f5`; grey to `#eaeaea`. Press: the
same. Focus: the browser's ring on measured controls.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.bitpanda.com/en (live homepage — 297 root custom properties read via `getComputedStyle`; Bitpanda Compressed and Inter loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.bitpanda.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://group.bitpanda.com/about-us (About Bitpanda Group — founded in Vienna in 2014 by Eric Demuth, Paul Klanschek and Christian Trummer, read 2026-09-26); https://www.bitpanda.com/en/legal/legal-notice (legal notice under § 5 E-Commerce-Law, Bitpanda GmbH, read 2026-09-26)
