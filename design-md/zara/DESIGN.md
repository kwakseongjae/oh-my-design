---
name: Zara
colors:
  main: '#000000'
  main-080: '#333333'
  main-060: '#666666'
  content-mid: '#757575'
  main-040: '#999999'
  main-020: '#cccccc'
  main-010: '#e5e5e5'
  background-low: '#f7f7f7'
  canvas: '#ffffff'
  focus-ring: '#0170e9'
  emphasis: '#ff3b30'
  danger: '#e90d01'
  success: '#0a882a'
  warning: '#b66009'
  sales: '#23f444'
  notification: '#ff9500'
typography:
  button:
    fontSize: 13px
    fontWeight: 300
    use: uppercase buttons and labels
rounded:
  none: 0px
components:
  button-black:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 0px
    height: 32px
    padding: 2px 12px
    typography: 13px / 300
    hover: '#333333'
    pressed: '#333333'
    focus: 'outline 2px solid #0170e9'
    use: 'SÍ, CONTINUAR EN ESPAÑA — a square black button with light uppercase text; hover #333333 (--color-main-080); a 2px #0170e9 focus outline.'
  button-white:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    height: 32px
    padding: 2px 12px
    typography: 13px / 300
    hover: 'fg #757575'
    pressed: 'fg #757575'
    focus: 'outline 2px solid #0170e9'
    use: 'NO, IR A LA WEB DE … — the white twin; hover greys the text to #757575 (--color-content-mid).'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Helvetica Now Text
    display: Didot
---

# Design System Inspiration of Zara

## Overview

### Visual Theme & Atmosphere

"Zara es una de las principales empresas de moda internacional. Pertenece a Inditex, uno de los
mayores grupos de distribución del mundo." Its business model "integra diseño, fabricación,
distribución y venta, a través de una amplia red de tiendas propia". Online sales in Spain are made
by **ZARA ESPAÑA, S.A.**, Avda. de la Diputación, Edificio Inditex, 15143 Arteixo (A Coruña).

The site is black and white and almost nothing else: **`#000000`** and **`#ffffff`**, a grey ramp
from `#333333` to `#f7f7f7`, square corners, and light uppercase type in **Helvetica Now Text**, with
**Didot** also loaded. Colour appears only for meaning — a bright sales green **`#23f444`**, emphasis
red, a blue focus ring.

What makes it worth reading:

- **A monochrome system with a grey ramp.** `--color-main` `#000` and `--color-main-000` … `-080`
  (white to `#333`) — every neutral is a percentage of black.
- **Uppercase as a token.** `--text-transform-*` sets titles, labels and headings to uppercase and
  paragraphs to none.
- **Colour reserved for signals.** Sales `#23f444`, emphasis `#ff3b30`, notification `#ff9500`, focus
  `#0170e9`.

#### Primary tasks
- Browse collections; search; shop.
- Choose the store region.

### Brand Narrative

Inditex's fashion brand keeps its interface out of the way: black,
white, grey, square, uppercase — and colour only when it has something to say.

### Principles

- **The customer at the centre.** Its business model's stated focus.
- **Monochrome by default.**
- **Signals only.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `zara.com/es`: 379 root custom properties — `--font-*` 107,
`--chat-*` 53, `--color-*` 46, `--line-*` 29, `--letter-*` 26, `--grid-*` 24, `--text-*` 23 … All
first-party.

### Monochrome

- **Main** (`#000000`) — `--color-main`, `--color-content-high`.
- **Main 080** (`#333333`) — the black button's hover · **Main 060** (`#666666`).
- **Content mid** (`#757575`) · **Main 040** (`#999999`) · **Main 020** (`#cccccc`) · **Main 010**
  (`#e5e5e5`).
- **Background low** (`#f7f7f7`) · **Canvas** (`#ffffff`).

### Signals

**Focus ring** `#0170e9` · **Emphasis** `#ff3b30` · **Danger** `#e90d01` · **Success** `#0a882a` ·
**Warning** `#b66009` · **Sales** `#23f444` · **Notification** `#ff9500`.

## Typography

### Font family

**Helvetica Now Text** (300, 400, 700) for the interface; **Didot** is also loaded. Both via
`document.fonts`.

### Scale

Buttons 13px/300 uppercase; titles, labels and headings uppercase by token.

## Layout

- Not surveyed beyond the region chooser; the page behind it was not laid out for measurement.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; translucent white overlays (`--color-background-overlay-alt` 75%) sit over imagery.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.zara.com/es/ (live homepage — 379 root custom properties read via `getComputedStyle`; Helvetica Now Text and Didot loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-27); https://www.zara.com/es/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.zara.com/es/es/z-compania-corp1391.html (Empresa — part of Inditex, integrated design-to-store model, read 2026-09-27); https://static.zara.net/static/pdfs/ES/terms-and-conditions/terms-and-conditions-es_ES-20230722.pdf (Condiciones de compra — ZARA ESPAÑA, S.A., Edificio Inditex, 15143 Arteixo (A Coruña), read 2026-09-27)

## Components

Measured on the region chooser shown to a visitor from outside Spain (not answered), with focus
under a real Tab key and a hover counted only when `:hover` matched; cookies rejected.

- **Black button** — **`#000000`**, white 13px/300 uppercase, square, 32px. Hover and press
  **`#333333`**; focus a **2px `#0170e9`** outline.
- **White button** — **`#ffffff`**, black text. Hover and press grey the text to **`#757575`**; same
  focus.

### Radius

0 — everything is square.

### States

Hover: black lifts to `#333333`; white buttons grey their text to `#757575`. Press: the same. Focus: a
2px `#0170e9` outline.

## Do's and Don'ts

### Do
- Stay black and white; take neutrals from the percentage-of-black ramp.
- Set titles and labels in light uppercase.
- Use colour only for signals — sales, errors, focus.

### Don't
- Don't round corners.
- Don't introduce a brand accent colour.
- Don't use heavy weights for buttons; they are 300.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#000000` black · `#333333` hover · `#757575` mid · `#e5e5e5` line · `#f7f7f7` low · `#ffffff` white ·
`#0170e9` focus · `#23f444` sales

### Example Component Prompts
- "A square 32px black button with white 13px/300 uppercase Helvetica Now Text; hover `#333333`;
  focus a 2px `#0170e9` outline."
- "A white twin whose text greys to `#757575` on hover."
