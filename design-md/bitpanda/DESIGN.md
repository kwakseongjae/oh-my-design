---
name: Bitpanda
colors:
  brand: '#103e36'
  brand-hover: '#28514a'
  brand-pressed: '#40655e'
  brand-text: '#16764d'
  brand-tertiary: '#f3f3f2'
  positive: '#2cec9a'
  positive-pressed: '#16764d'
  foreground: '#282828'
  text-secondary: '#7e7e7e'
  fill-tertiary: '#a9a9a9'
  fill-quaternary: '#eaeaea'
  divider: '#f4f4f4'
  widget: '#f9f9f9'
  hover-light: '#f3f5f5'
  canvas: '#ffffff'
  negative: '#ff4e4e'
  negative-text: '#cc3e3e'
  information: '#2b6fd5'
  best: '#f2254a'
typography:
  display:
    fontSize: 88px
    fontWeight: 700
    use: hero heading
  body:
    fontSize: 15px
    fontWeight: 500
    use: header buttons
rounded:
  sm: 4px
  md: 5px
components:
  button-signup:
    type: button
    backgroundColor: '#103e36'
    textColor: '#ffffff'
    rounded: 5px
    height: 32px
    padding: 4px 16px
    typography: 15px / 500
    hover: '#28514a'
    pressed: '#28514a'
    use: 'Sign-up in the header — the dark brand green; hover and press lift it to #28514a with a #f3f5f5 label; focus is the browser''s ring.'
  button-login:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#282828'
    rounded: 5px
    height: 32px
    padding: 4px 16px
    typography: 15px / 500
    hover: '#f3f5f5'
    pressed: '#f3f5f5'
    use: 'Log in — white with #282828 text; hover and press tint #f3f5f5.'
  button-neutral:
    type: button
    backgroundColor: '#f4f4f4'
    textColor: '#282828'
    border: '#f4f4f4'
    rounded: 4px
    height: 48px
    padding: 8px 16px
    typography: 15px / 400
    hover: '#eaeaea'
    pressed: '#f4f4f4'
    use: 'Start investing — a light grey 48px button that darkens to #eaeaea on hover.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: Bitpanda Compressed
    sans: Inter
---

# Design System Inspiration of Bitpanda

## Overview

### Visual Theme & Atmosphere

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

#### Primary tasks
- Sign up or log in.
- Start investing; explore asset classes.

### Brand Narrative

Founded in Vienna to make Bitcoin accessible, Bitpanda now wraps many asset classes in one calm
green — each class with a colour of its own — and a compressed headline face that makes the brand
recognisable at a glance.

### Principles

- **Accessible wealth.** "Your wealth shouldn't depend on who your banker is."
- **Role-named colour.**
- **Every asset has a colour.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

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

## Typography

### Font family

**Bitpanda Compressed** (700) for display; **Inter** (400–700) for text. Both load
(`document.fonts`).

### Scale

H1 88px/700 Compressed; H2 17px/500 Inter; header buttons 15px/500; body 15px/400.

## Layout

- A dark-green header and hero with a compressed headline, then trust badges and product sections
  on white.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; neutrals and green blocks separate sections.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.bitpanda.com/en (live homepage — 297 root custom properties read via `getComputedStyle`; Bitpanda Compressed and Inter loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.bitpanda.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://group.bitpanda.com/about-us (About Bitpanda Group — founded in Vienna in 2014 by Eric Demuth, Paul Klanschek and Christian Trummer, read 2026-09-26); https://www.bitpanda.com/en/legal/legal-notice (legal notice under § 5 E-Commerce-Law, Bitpanda GmbH, read 2026-09-26)

## Components

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
rejected.

- **Sign-up** — **`#103e36`**, white 15px/500, 5px, 32px. Hover and press **`#28514a`** with a
  `#f3f5f5` label; focus is the browser's ring.
- **Log in** — white, `#282828`. Hover and press **`#f3f5f5`**.
- **Start investing** — **`#f4f4f4`**, `#282828` 15px/400, 4px, 48px. Hover **`#eaeaea`**.

### Radius

4–5px on buttons.

### States

Hover: brand green lifts to `#28514a`; white buttons tint `#f3f5f5`; grey to `#eaeaea`. Press: the
same. Focus: the browser's ring on measured controls.

## Do's and Don'ts

### Do
- Use forest green `#103e36` for primary actions and mint `#2cec9a` for positive highlights.
- Name colours by group and role; give each fill hover, pressed and disabled values.
- Set hero headlines in the compressed face.

### Don't
- Don't use mint for primary buttons; the action colour is the dark green.
- Don't reuse asset-class colours for status.
- Don't set body text in the compressed face.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#103e36` forest green · `#28514a` hover · `#2cec9a` mint · `#16764d` brand text · `#282828` ink ·
`#7e7e7e` secondary · `#f4f4f4` divider · `#ff4e4e` negative

### Example Component Prompts
- "A 32px `#103e36` button, white 15px/500 Inter, 5px radius; hover `#28514a`."
- "An 88px Bitpanda Compressed headline in white on forest green."
