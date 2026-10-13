---
name: Klarna
colors:
  brand-pink: '#ffa8cd'
  primary: '#0b051d'
  foreground: '#0b051d'
  text-body: '#282636'
  text-subtle: '#504f5f'
  text-disabled: '#96959f'
  inverse: '#f9f8f5'
  hover: '#2c2242'
  accent: '#7039e2'
  accent-focus: '#7b57d8'
  link: '#582fb4'
  accent-subtle: '#efecff'
  border: '#e2e2e7'
  border-neutral: '#c4c3ca'
  pop: '#cff066'
  positive: '#046234'
  positive-badge: '#c1f4d1'
  negative: '#ae1d1d'
  warning: '#fbc64d'
  canvas: '#ffffff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: Klarna Text; the accordion items
  button:
    fontSize: 16px
    fontWeight: 500
    use: the pill button
  nav:
    fontSize: 13px
    fontWeight: 500
    use: header navigation
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  pill: 99999px
components:
  button-pill:
    type: button
    backgroundColor: '#0b051d'
    textColor: '#f9f8f5'
    border: '#e2e2e7'
    rounded: 99999px
    height: 42px
    padding: 11px 20px
    typography: 16px / 500
    hover: '#2c2242'
    pressed: '#2c2242'
    focus: 'outline 2px solid #0b051d'
    use: 'Logga in in the header — a near-black pill that lifts to --brand90 #2c2242 on hover and press; focus adds a 2px near-black outline.'
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#0b051d'
    rounded: 0px
    height: 24px
    padding: 4px 0
    typography: 13px / 500
    hover: opacity 0.84
    pressed: opacity 0.68
    focus: 'box-shadow inset 0 0 0 1px #7b57d8 + outline 2px solid #0b051d'
    use: Shoppa and the other header links — dim to 0.84 on hover and 0.68 on press; focus is a purple 1px inset ring inside a 2px near-black outline.
  accordion-item:
    type: button
    backgroundColor: transparent
    textColor: '#0b051d'
    rounded: 0px
    height: 64px
    typography: 16px / 400
    hover: opacity 0.84
    pressed: opacity 0.68
    focus: 'box-shadow 0 0 0 3px #7b57d8 + outline 2px solid #0b051d'
    use: An expandable item (Anpassat efter dig) — the same opacity steps, with a 3px purple ring on focus.
  input-search:
    type: input
    backgroundColor: transparent
    textColor: '#0b051d'
    rounded: 0px
    height: 22px
    typography: 14px / 400
    hover: transparent
    focus: transparent
    use: The header search field (Sök efter produkter…). None of its measured values change on hover or focus.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Klarna Text
    display: Klarna Title
---

# Design System Inspiration of Klarna

## Overview

### Visual Theme & Atmosphere

Klarna is a payments and shopping company from Stockholm. Its own history begins with "three young
Swedish entrepreneurs" and "a brilliant idea back in 2005—but not the best name": Kreditor became
Klarna in 2010. It passed a $1 billion valuation in 2012. In September 2025 Klarna Group plc listed
on the New York Stock Exchange (NYSE: KLAR). Klarna counts 120 million active consumers, more than
1.2 million merchants and 26 countries.

Its brand guidelines open with "We're not standard. But the new standard", and describe the brand
as "Refreshingly different". The site is near-black on white — the ink is a violet-black
**`#0b051d`** — with Klarna's pink **`#ffa8cd`** on surfaces and badges, and a purple scale for
accents and focus. Type is Klarna's own **Klarna Text** and **Klarna Title**.

What makes it worth reading:

- **The ink is the brand.** `--brand` is `#0b051d`, the top of a ten-step purple scale
  (`--brand10` `#efecff` … `--brand100`). Buttons and text use it; hover lifts to `--brand90`
  `#2c2242`.
- **Pink as a surface.** `--colors-bg-brand` and `--colors-btn-brand` are `#ffa8cd`: the famous pink
  fills areas and badges rather than colouring text.
- **Two token generations side by side.** A kebab-case layer and an older camelCase layer carry the
  same values — 205 of 207 camelCase names have an exact twin.

#### Primary tasks
- Shop with Klarna: search products and stores.
- Sign in; manage payments and the app.

### Brand Narrative

Klarna grew from a Stockholm startup called Kreditor into a public payments company with 120 million
consumers. Its brand calls itself "not standard" and "refreshingly different", and the site keeps
that without shouting: violet-black type, pink as a mood rather than a signal, and a purple scale
that shows up where attention is needed — links, accents and focus.

### Principles

- **Black-violet, not black.** The ink has a hue.
- **Pink is a place.** It fills surfaces; it does not colour words.
- **States are quiet.** A darker pill, a softer link.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `klarna.com/se/`: 547 root custom properties — `--colors-*` 92,
`--lineHeights-*` 36, `--textSizes-*` 28, `--ribbon-*` 23, 207 camelCase names, and the purple scale.
All first-party.

### Ink and text

- **Primary** (`#0b051d`) — `--brand`, `--colors-text-default`, `--colors-border-active`. The pill
  button and the ink.
- **Foreground** (`#0b051d`) — 15 of 23 `<p>` elements; 1,809 text elements.
- **Text body** (`#282636`) · **Text subtle** (`#504f5f`) · **Text disabled** (`#96959f`).
- **Inverse** (`#f9f8f5`) — `--offwhite`, `--colors-text-inverse`; the pill's label.
- **Canvas** (`#ffffff`).

### Brand colours

- **Brand pink** (`#ffa8cd`) — `--colors-bg-brand`, `--colors-btn-brand`, `--colors-badge-brand`.
- **Hover** (`#2c2242`) — `--brand90`.
- **Accent** (`#7039e2`) — `--brand60`, `--colors-bg-accent`, `--colors-text-accent-heading`.
- **Accent focus** (`#7b57d8`) — `--brand50`, `--colors-badge-accent-inverse`; focus rings.
- **Link** (`#582fb4`) — `--colors-text-link`.
- **Accent subtle** (`#efecff`) — `--brand10`.
- **Pop** (`#cff066`) — `--colors-badge-pop`, a lime badge.

### Borders

**Border** `#e2e2e7` (`--colors-border-default`) · **Border neutral** `#c4c3ca`.

### Status

**Positive** `#046234` (badge `#c1f4d1`) · **Negative** `#ae1d1d` · **Warning** `#fbc64d`.

## Typography

### Font family

**Klarna Text** (400, 500, 700) and **Klarna Title** (700), both loaded (`document.fonts`) and
self-hosted at `x.klarnacdn.net/ui/fonts/v1.5/`. Headings use Klarna Title. Body copy blocks
compute to Klarna Text, though `<body>` itself and some buttons fall back to the system stack.

### Scale

28 `--textSizes-*` and 36 `--lineHeights-*` tokens. Measured: the pill button 16px/500, header
links 13px/500, accordion items 16px/400, the search field 14px/400.

## Layout

- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80px.
- Pink and tinted panels break up a white page; buttons are pills.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`shadow-s` `0 2px 4px rgba(0,0,0,.1)` · `shadow-m` `0 6px 12px rgba(0,0,0,.1)` · `shadow-l`
`0 12px 24px rgba(0,0,0,.1)`.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.klarna.com/se/ (live homepage — 547 root custom properties read via `getComputedStyle`; Klarna Text and Klarna Title loaded; four components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://brand.klarna.com/ (Klarna brand guidelines — nonsense path returns 404, read 2026-09-26); https://www.klarna.com/international/about-us/ (About Klarna — 2005, Kreditor became Klarna in 2010, NYSE listing September 2025, 120m consumers, read 2026-09-26); https://www.klarna.com/international/press/ (Klarna newsroom — "Klarna lists on the New York Stock Exchange", 10 September 2025, read 2026-09-26)

## Components

Measured on `klarna.com/se/` (the probe declines the cookie banner with "Avvisa alla" when it shows), focus read under a real Tab key,
and a hover counted only when `:hover` matched.

- **Pill button** — Logga in: **`#0b051d`**, label `#f9f8f5`, fully round, 42px, `11px 20px`,
  16px/500. Hover and press lift it to **`#2c2242`**. Focus adds `outline: 2px solid #0b051d`.
- **Header link** — Shoppa: `#0b051d`, 13px/500. Hover fades to opacity 0.84, press to 0.68. Focus:
  a purple `inset 0 0 0 1px #7b57d8` ring inside a 2px near-black outline.
- **Accordion item** — `#0b051d`, 64px, 16px/400. The same opacity steps; focus a 3px `#7b57d8`
  ring plus the outline.
- **Search field** — transparent, `#0b051d`, 14px/400. Nothing measured changes on hover or focus.

### Radius

`--radius-xs` 4 · `s` 8 · `m` 12 · 16 · 24 · 32px, and `99999px` for pills.

### States

Hover: the pill to `#2c2242`; links and accordion items to opacity 0.84. Press: `#2c2242`; opacity
0.68. Focus: a 2px near-black outline, with a purple ring on links and accordion items. The search
field shows no change. A secondary "Visa fler" pill could not be hovered or focused (unmeasured).

## Do's and Don'ts

### Do
- Use `#0b051d` for ink and the main button; lift it to `#2c2242` on hover.
- Use pink `#ffa8cd` as a surface or badge fill.
- Draw focus with the purple `#7b57d8` ring and a near-black outline.

### Don't
- Don't set body text in pink.
- Don't use pure black as the brand ink; the token is `#0b051d`.
- Don't mix the camelCase and kebab-case token layers in new work — they duplicate each other.

## Voice & Tone

The guidelines name "How We Speak" as a section; not assessed here.

## Agent Prompt Guide

### Quick Color Reference
`#0b051d` ink · `#ffa8cd` brand pink · `#2c2242` hover · `#7039e2` accent · `#7b57d8` focus ·
`#582fb4` link · `#f9f8f5` off-white · `#e2e2e7` border · `#cff066` pop

### Example Component Prompts
- "A 42px pill button, `#0b051d` with an `#f9f8f5` 16px/500 Klarna Text label; hover `#2c2242`;
  focus a 2px `#0b051d` outline."
- "A pink `#ffa8cd` promo panel with `#0b051d` Klarna Title heading."

## Governance

### Known Gaps

- **Contrast, `link-nav`.** Text `#0b051d` on `#00000000` measures 1.05:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `accordion-item`.** Text `#0b051d` on `#00000000` measures 1.05:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `input-search`.** Text `#0b051d` on `#00000000` measures 1.05:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
