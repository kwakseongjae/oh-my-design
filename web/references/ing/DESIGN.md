---
name: ING
colors:
  brand: '#ff6200'
  primary: '#525199'
  secondary-bold: '#31305b'
  secondary-subtle: '#dcdceb'
  tertiary: '#ab0066'
  foreground: '#333333'
  text-subtle: '#696969'
  canvas: '#ffffff'
  page: '#f0f0f0'
  hover-primary: '#cfe4f4'
  hover-tertiary: '#eecce0'
  highlight: '#dfedf8'
  focus: '#335d7d'
  info: '#559bd1'
  success: '#349651'
  error: '#d70000'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
    use: header buttons
rounded:
  sm: 8px
components:
  button-primary:
    type: button
    backgroundColor: '#525199'
    textColor: '#ffffff'
    rounded: 8px
    height: 36px
    typography: 16px / 700
    hover: layer rgba(255,255,255,0.08)
    pressed: 'layer rgba(255,255,255,0.16) + inset ring 2px #ffffff'
    focus: 'outline 2px solid #335d7d + inset 2px #ffffff'
    use: Open een rekening — indigo --bg_secondary; hover lays an 8% white layer, press a 16% layer and a white inner ring; focus a 2px navy-teal outline with the white inner ring.
    padding: 6px 12px
  link-login:
    type: button
    backgroundColor: transparent
    textColor: '#525199'
    border: '#525199'
    rounded: 8px
    height: 36px
    padding: 4px 10px
    typography: 16px / 700
    hover: '#525199 + layer rgba(0,0,0,0.08)'
    pressed: 'layer rgba(255,255,255,0.16) + inset ring 2px #ffffff'
    focus: 'outline 2px solid #335d7d + inset 2px #ffffff'
    use: Inloggen — an indigo text button that fills indigo with a white label on hover (plus an 8% dark layer).
  nav-menu:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 8px
    height: 28px
    hover: '#ffffff + layer rgba(0,0,0,0.08)'
    pressed: layer rgba(0,0,0,0.3)
    focus: 'outline 2px solid #335d7d'
    use: Producten, Voor wie, Thema's — menu buttons that gain an 8% dark layer on hover and 30% when pressed.
  link-quick:
    type: button
    backgroundColor: transparent
    textColor: '#525199'
    rounded: 0px
    height: 24px
    hover: '#cfe4f4'
    pressed: rgba(0,0,0,0.16)
    focus: 'outline 2px solid #335d7d'
    use: 'Klant worden, App activeren — indigo quick links that fill --bg_hover-primary #cfe4f4 on hover.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: INGMe
    display: ING Display
---

# Design System Inspiration of ING

## Overview

### Visual Theme & Atmosphere

ING is "a global bank with a strong European base": more than 60,000 employees offering retail and
wholesale banking in more than 100 countries, shares listed in Amsterdam, Brussels and New York,
and corporate headquarters in the Cedar building in Amsterdam Zuidoost. Its stated purpose is "to
empower people to stay a step ahead in life and in business". ING Group is the parent of ING Bank,
which in turn is the parent of its Dutch and foreign banks. ing.nl is its Dutch retail site.

The site is bright and orderly: white and light grey **`#f0f0f0`** surfaces, dark grey text
**`#333333`**, ING's famous orange **`#ff6200`** as the brand colour, and an indigo **`#525199`** for
actions and links. Type is ING's own **INGMe**, with **ING Display** for headlines.

What makes it worth reading:

- **Built from web components.** The header, buttons and links live in shadow DOM; measuring them
  required reaching into open shadow roots.
- **Role tokens with hover tints.** `--bg_primary` orange, `--bg_secondary` indigo, `--bg_tertiary`
  magenta, each with its own hover tint (`--bg_hover-primary` `#cfe4f4`, `-secondary` `#dcdceb`,
  `-tertiary` `#eecce0`).
- **Layered states and a double focus.** Hover and press add translucent layers and a white inner
  ring; focus pairs a 2px `#335d7d` outline with a white inner ring (`--border_focus-outer_color`,
  `--border_focus-inner_color`).

#### Primary tasks
- Open an account; sign in.
- Explore products, themes and service.

### Brand Narrative

ING keeps its orange for
the brand while giving actions a calm indigo. Underneath, a large web-component system spells out
roles, hover tints and a two-part focus ring for every control.

### Principles

- **Orange is ING; indigo acts.**
- **Layers, not new colours.** States add translucent layers and rings.
- **Focus you can see.** Outline plus inner ring.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `ing.nl`: about 1,700 root custom properties — `--oj2_*` 1,519,
`--border_*` 54, `--bg_*` 29, `--fg_*` 12, and small dimension, opacity, gap and palette groups. All
first-party.

### Brand and actions

- **Brand** (`#ff6200`) — `--bg_primary`, `--fg_primary`, `--oj2_fg_primary`.
- **Primary** (`#525199`) — `--bg_secondary`, `--fg_secondary`; action buttons and links.
- **Secondary bold** (`#31305b`) · **Secondary subtle** (`#dcdceb`).
- **Tertiary** (`#ab0066`) — `--bg_tertiary`; 20 magenta `<p>` elements on the page.

### Text and surfaces

- **Foreground** (`#333333`) — `--fg_default`; 45 `<p>` elements.
- **Text subtle** (`#696969`) — `--fg_subtle`.
- **Canvas** (`#ffffff`) · **Page** (`#f0f0f0`, `--bg_page`) · **Highlight** (`#dfedf8`).
- **Hover primary** (`#cfe4f4`) · **Hover tertiary** (`#eecce0`).

### Focus and status

**Focus** `#335d7d` (`--border_focus-outer_color`, with a white inner colour) · **Info** `#559bd1` ·
**Success** `#349651` · **Error** `#d70000`.

## Typography

### Font family

**INGMe** (400, 700) — `INGMe, arial, helvetica, sans-serif` — and **ING Display** (700), loaded
(`document.fonts`).

### Scale

Header buttons are 16px/700.

## Layout

- A light grey page with white panels; orange for brand moments, indigo for everything clickable.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; states are drawn with layers and inner rings.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.ing.nl/ (live homepage — about 1,700 root custom properties read via `getComputedStyle`; INGMe and ING Display loaded; four components measured inside open shadow roots at rest, hover, pressed and focus, captured 2026-09-26); https://www.ing.nl/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.ing.com/about-us/ing-at-a-glance (ING at a glance — 60,000+ employees, 100+ countries, listings, headquarters in the Cedar building, Amsterdam Zuidoost, read 2026-09-26); https://www.ing.com/About-us.htm (ING Group — parent of ING Bank, read 2026-09-26)

## Components

Measured with the probe reaching into open shadow roots, focus read under a real Tab key, and a
hover counted only when `:hover` matched; background-image, text-decoration and pseudo-elements
were compared too.

- **Primary** — Open een rekening: **`#525199`**, white 16px/700, 8px, 36px. Hover adds a white 8%
  layer (`linear-gradient(rgba(255,255,255,0.08) …)`); press a 16% layer and a 2px white inner ring.
  Focus: `outline: 2px solid #335d7d` plus the white inner ring.
- **Login** — Inloggen: indigo text, 36px, `4px 10px`. Hover fills it **`#525199`** with a white label
  and an 8% dark layer; press and focus as above.
- **Menu** — Producten, Voor wie, Thema's: `#333333`. Hover: white with an 8% dark layer; press: 30%.
- **Quick links** — Klant worden, App activeren: indigo. Hover fills **`#cfe4f4`**; press a 16% dark
  layer.

### Radius

8px on buttons and menu items.

### States

Hover: 8% layers, indigo fill on the login link, `#cfe4f4` on quick links. Press: 16–30% layers and a
white inner ring. Focus: a 2px `#335d7d` outline with a white inner ring.

## Do's and Don'ts

### Do
- Use orange `#ff6200` for the brand and indigo `#525199` for actions.
- Draw hover and press as translucent layers over the fill.
- Pair a 2px `#335d7d` outline with a white inner ring for focus.

### Don't
- Don't make buttons orange; actions are indigo.
- Don't use pure black text; the ink is `#333333`.
- Don't drop the white inner ring from focus.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#ff6200` ING orange · `#525199` indigo · `#31305b` indigo bold · `#ab0066` magenta · `#333333` ink ·
`#f0f0f0` page · `#cfe4f4` hover tint · `#335d7d` focus

### Example Component Prompts
- "A 36px indigo `#525199` button, white 16px/700 INGMe, 8px radius; hover adds an 8% white layer;
  focus a 2px `#335d7d` outline with a white inner ring."
- "An orange `#ff6200` brand band on a light grey `#f0f0f0` page."

## Governance

### Known Gaps

- **Contrast, `link-login`.** Text `#525199` on `#00000000` measures 3.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `nav-menu`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-quick`.** Text `#525199` on `#00000000` measures 3.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
