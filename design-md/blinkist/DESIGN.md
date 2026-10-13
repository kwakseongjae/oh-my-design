---
name: Blinkist
colors:
  brand-green: '#2ee081'
  brand-midnight: '#033049'
  brand-blue: '#0266f2'
  blue-hover: '#0552bd'
  conversion-text: '#008566'
  violet: '#694dd1'
  raspberry: '#c81e34'
  summer-yellow: '#fdbe21'
  rating: '#edab02'
  foreground: '#033049'
  text-secondary: '#3b474a'
  text-tertiary: '#6d787e'
  black: '#000000'
  canvas: '#ffffff'
  pale-mint-grey: '#eff5f3'
  surface-neutral: '#f9fbfa'
  light-grey: '#bac8ce'
  lightest-grey: '#e1e7ea'
typography:
  display:
    fontSize: 64px
    fontWeight: 700
    use: section headings in midnight
  body:
    fontSize: 16px
    fontWeight: 500
    use: buttons and navigation
rounded:
  sm: 4px
  md: 6px
  lg: 8px
components:
  button-conversion:
    type: button
    backgroundColor: '#2ee081'
    textColor: '#033049'
    rounded: 6px
    height: 44px
    padding: 0 16px
    typography: 16px / 500
    hover: rgba(46,224,129,0.8)
    pressed: rgba(46,224,129,0.8)
    focus: 'outline 2px solid #0266f2'
    use: 'Get started — the brand green conversion button with midnight text; hover drops it to 80% and adds a 0 3px 6px #bac8ce shadow; focus a 2px blue outline.'
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 6px
    height: 32px
    typography: 14px / 500
    hover: 'fg #0552bd'
    pressed: 'fg #0552bd'
    focus: 'outline 2px solid #0266f2'
    use: 'Log in / For Business / Categories — black text turning blue #0552bd on hover; focus a 2px #0266f2 outline.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: CeraPRO
    serif: blinkist-serif
---

# Design System Inspiration of Blinkist

## Overview

### Visual Theme & Atmosphere

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

#### Primary tasks
- Get started with a trial; log in.
- Browse categories; learn about Blinkist for Business.

### Brand Narrative

Four friends' answer to having no time to read: key ideas in 15 minutes. The interface is calm
midnight and mint, with one green button that means "start".

### Principles

- **15-minute discoveries.**
- **Humans before algorithms.**
- **One conversion colour.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

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

## Typography

### Font family

**Cera Pro** (400, 500, 700) for everything measured, with **blinkist-serif** (400–700) also
loaded; both via `document.fonts`.

### Scale

H1 64px/400; H2 48–64px/700 in midnight; buttons and navigation 14–16px/500.

## Layout

- A white header with categories, a hero with the green call to action, then content rows on white
  and pale mint grey.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

A soft `0 3px 6px #bac8ce` shadow appears on the hovered conversion button.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.blinkist.com/ (live homepage — 385 root custom properties read via `getComputedStyle`, Tailwind excluded; Cera Pro and blinkist-serif loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-27); https://www.blinkist.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.blinkist.com/about (About — founded 2012 by four friends, 44 million readers, 15-minute format, awards, read 2026-09-27); https://www.blinkist.com/en/disclaimer (legal notice — Blinks Labs GmbH, Revaler Straße 31, 10245 Berlin, read 2026-09-27)

## Components

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The grey
button border (`oklch(0.928 0.006 264.5)`) is Tailwind's default and is not recorded.

- **Conversion button** — Get started: **`#2ee081`**, `#033049` 16px/500, 6px, 44px. Hover and
  press drop it to **80%** (`rgba(46,224,129,0.8)`) with a `0 3px 6px #bac8ce` shadow; focus a
  **2px `#0266f2`** outline.
- **Navigation link** — Log in, For Business, Categories: black 14–16px/500. Hover **`#0552bd`**;
  same focus.

### Radius

4–8px (`--radius-*`).

### States

Hover: the green drops to 80% with a shadow; links turn `#0552bd`. Press: the same. Focus: a 2px
`#0266f2` outline.

## Do's and Don'ts

### Do
- Use green `#2ee081` with midnight `#033049` text for the one conversion action.
- Set headings in midnight, not black.
- Use blue `#0266f2` for links and focus.

### Don't
- Don't put white text on the green; the pairing is midnight on green.
- Don't use green for secondary actions.
- Don't adopt Tailwind's default grey border as a brand token.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#2ee081` Blinkist green · `#033049` midnight · `#0266f2` blue · `#0552bd` hover · `#eff5f3` pale
mint · `#3b474a` secondary · `#6d787e` tertiary · `#fdbe21` yellow

### Example Component Prompts
- "A 44px `#2ee081` button, `#033049` 16px/500 Cera Pro, 6px radius; hover 80% with a soft shadow."
- "A 64px Cera Pro 700 heading in `#033049` on `#eff5f3`."

## Governance

### Known Gaps

- **Contrast, `link-nav`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
