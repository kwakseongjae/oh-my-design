---
name: Coolblue
colors:
  brand: '#0090e3'
  primary: '#285dab'
  primary-hover: '#1c4684'
  primary-inset-hover: '#14315c'
  action: '#008a00'
  action-hover: '#026902'
  action-inset-hover: '#005200'
  link: '#0072d1'
  icon: '#0088d6'
  foreground: '#1b1e24'
  text-subtle: '#6c6e75'
  text-additional: '#5b5c62'
  accent: '#ff6600'
  canvas: '#ffffff'
  surface-secondary: '#f2f7fc'
  surface-tertiary: '#f7f7f7'
  border: '#d2d5d5'
  danger: '#da001e'
  warning: '#ed9f02'
typography:
  button:
    fontSize: 13px
    fontWeight: 700
    use: buttons
  body:
    fontSize: 13px
    fontWeight: 400
    use: search field and links
rounded:
  sm: 4px
components:
  button-main:
    type: button
    backgroundColor: '#285dab'
    textColor: '#ffffff'
    rounded: 4px
    height: 48px
    padding: 12px 16px 14px
    typography: 13px / 700
    shadow: 'inset 0 -2px 0 #1c4684'
    hover: '#1c4684'
    focus: 'outline 2px solid #14315c'
    use: 'A blue main button on the home page — --cb-color-background-interactive-main-base with a 2px darker inset along its bottom. Hover darkens it to #1c4684 and the inset to #14315c; focus drops the inset and draws a 2px navy outline.'
  button-action:
    type: button
    backgroundColor: '#008a00'
    textColor: '#ffffff'
    rounded: 4px
    height: 48px
    padding: 12px 16px 14px
    typography: 13px / 700
    shadow: 'inset 0 -2px 0 #026902'
    hover: '#026902'
    focus: 'outline 2px solid #14315c'
    use: 'The green action style (--cb-color-background-interactive-action-base), measured on the consent dialog''s button: hover #026902 with the inset deepening to #005200; focus a 2px navy outline.'
  link:
    type: button
    backgroundColor: transparent
    textColor: '#0072d1'
    rounded: 0px
    height: 52px
    typography: 13px / 400
    hover: 'underline #0072d1'
    focus: 'box-shadow 0 0 0 2px #14315c'
    use: A blue content link — hover underlines it; focus rounds it to 4px and draws a 2px navy ring.
  input-search:
    type: input
    backgroundColor: transparent
    textColor: '#1b1e24'
    rounded: 0px
    height: 38px
    padding: 0 8px 0 0
    typography: 13px / 400
    hover: transparent
    focus: transparent
    use: The header search field. None of its own measured values change on hover or focus; the frame belongs to a wrapper that was not read.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Open Sans
    display: Dobra Slab
---

# Design System Inspiration of Coolblue

## Overview

### Visual Theme & Atmosphere

Coolblue is a Dutch online retailer of electronics and appliances — "Alles voor een glimlach",
everything for a smile, as its homepage title says. By its own history, Pieter Zwart and his friends
Paul de Jong and Bart Kuijpers founded it in 1999 from Zwart's dorm room with a first webshop,
"MP3man.nl". It reached Belgium in 2004, opened physical stores by 2008, and in 2011 set down the
brand values it still uses — "friends, flexible, unconventional, and go for it" — and designed the
Coolblue logo and colour scheme. It has since added its own delivery network, a central warehouse
in Tilburg and an energy business.

The shop is crisp and friendly: white and pale-blue surfaces, near-black **`#1b1e24`** text,
Coolblue blue **`#0090e3`** for the brand, a deeper **`#285dab`** for buttons, green **`#008a00`**
for actions and a hot orange **`#ff6600`** for accents. Buttons are small-radius (4px) with a
darker inset line along their base.

What makes it worth reading:

- **Names with character.** Primitive colours are called coolblue, factblue, eveningblue,
  springblue, hotorange, freshgreen, coolblack, rubyred — the brand's tone in the token names.
- **Every state spelled out.** Semantic tokens go base → hovered → disabled → loading for each
  role (`--cb-color-background-interactive-main-hovered`, `-action-loading` …).
- **A pressed-key button.** A 2px darker `inset 0 -2px 0` under each button; on hover the fill and
  the inset both step darker.

#### Primary tasks
- Search and browse products; compare and read advice.
- Add to basket; check delivery and installation.

### Brand Narrative

Coolblue started as MP3man.nl in a student room in 1999 and grew into a retailer that delivers and
installs what it sells. Its 2011 brand work fixed the values and the logo and colours still in use,
and the interface carries them: a friendly blue, a green that means go, and token names with
the same sense of humour as the brand.

### Principles

- **Blue for trust, green for go.** Two button colours with clear jobs.
- **States all the way down.** Base, hovered, disabled, loading — for every role.
- **Say it with a smile.** Even the tokens have personality.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Read with `getComputedStyle` on `coolblue.nl`: 441 root custom properties, all `--cb-*` —
`--cb-color-*` 332, `--cb-font-*` 15, `--cb-spacing-*` 14, `--cb-motion-*` 13, `--cb-input-*` 12,
`--cb-border-*` 11, `--cb-shadow-*` 10, `--cb-control-*` 10, `--cb-opacity-*` 7.

### Brand and actions

- **Brand** (`#0090e3`) — `--cb-color-background-brand`, `--cb-color-primitive-blue-coolblue`.
- **Primary** (`#285dab`) — `--cb-color-background-interactive-main-base` (factblue); hover
  **`#1c4684`** (`-main-hovered`), inset hover **`#14315c`**.
- **Action** (`#008a00`) — `--cb-color-background-interactive-action-base`; hover **`#026902`**,
  inset hover **`#005200`**.
- **Link** (`#0072d1`) — `--cb-color-font-interactive-base`.
- **Icon** (`#0088d6`) — `--cb-color-icon-base`.
- **Accent** (`#ff6600`) — `--cb-color-background-accented-base`, hotorange.

### Text and surfaces

- **Foreground** (`#1b1e24`) — `--cb-color-font-base`; 82 of 90 `<p>` elements.
- **Text subtle** (`#6c6e75`) · **Text additional** (`#5b5c62`).
- **Canvas** (`#ffffff`) · **Surface secondary** (`#f2f7fc`, 18 backgrounds) · **Surface tertiary**
  (`#f7f7f7`) · **Border** (`#d2d5d5`, `--cb-color-border-base`).

### Status

**Danger** `#da001e` · **Warning** `#ed9f02` · positive uses the action green `#008a00`.

## Typography

### Font family

**Open Sans** on body text and controls (`"Open Sans", Arial, Helvetica, Verdana, sans-serif`),
loaded at 400, 600 and 700. **Dobra Slab** (Book 400, Medium 500) and **Avenir Black** (900) also
load (`document.fonts`). Where each is applied beyond body text was not traced.

### Scale

Buttons 13px/700; the search field and links 13px/400.

## Layout

- White pages with `#f2f7fc` blue-tinted panels; a dense product grid.

### Responsive Behavior

**Not measured.** Desktop only.

## Elevation & Depth

Buttons carry a 2px inset along the bottom; `--cb-shadow-*` tokens hold the rest. Backdrops use
`--cb-color-background-backdrop-base` `#1b1e24cc`.

## Motion & Easing

13 `--cb-motion-*` tokens are declared. Not measured on controls.

---

**Tier 1 sources:** https://www.coolblue.nl/ (live homepage — 441 root custom properties read via `getComputedStyle`; fonts loaded; four components measured at rest, hover and focus in a fresh Aside tab, captured 2026-09-26); https://www.aboutcoolblue.com/en/history/ (Coolblue history — 1999, Pieter Zwart, Paul de Jong, Bart Kuijpers, MP3man.nl; 2011 brand values, logo and colour scheme, read 2026-09-26); https://www.aboutcoolblue.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 "Page not found - About Coolblue", read 2026-09-26)

## Components

Measured on the home page in a fresh browser tab, focus read under a real Tab key, and a hover
counted only when `:hover` matched; `background-image`, `text-decoration` and pseudo-elements were
compared too.

- **Main button** — **`#285dab`**, white 13px/700, radius 4px, 48px, `12px 16px 14px`, shadow
  `inset 0 -2px 0 #1c4684`. Hover: fill **`#1c4684`**, inset `#14315c`. Focus: the inset goes and
  `outline: 2px solid #14315c` appears.
- **Action button** — **`#008a00`**, same shape, inset `#026902`. Hover: fill **`#026902`**, inset
  `#005200`. Focus: the same navy outline. (Measured on the button in the consent dialog, which uses
  the action style.)
- **Link** — `#0072d1`, 13px. Hover underlines it. Focus rounds it to 4px and draws `0 0 0 2px
  #14315c`.
- **Search field** — transparent, `#1b1e24`, 38px. Nothing on the input itself changes on hover or
  focus.

### Radius

4px on buttons and focus rings.

### States

Hover: main `#1c4684`, action `#026902`, links underline, the search field unchanged. Focus: a 2px
`#14315c` outline on buttons, a 2px ring on links. Disabled and loading tokens exist
(`--cb-color-background-interactive-main-disabled` `#cfd5dc`) but were not observed.

## Do's and Don'ts

### Do
- Use `#285dab` for main buttons and `#008a00` for action; step both darker on hover.
- Give buttons the 2px darker bottom inset.
- Draw focus with the navy `#14315c` outline or ring.

### Don't
- Don't use the brand blue `#0090e3` as the button colour; buttons are `#285dab`.
- Don't round buttons beyond 4px.
- Don't use orange `#ff6600` for actions; it is an accent.

## Voice & Tone

The brand values are stated: "friends, flexible, unconventional, and go for it". Copy was not
assessed further.

## Agent Prompt Guide

### Quick Color Reference
`#0090e3` brand · `#285dab` button · `#1c4684` hover · `#008a00` action · `#026902` action hover ·
`#0072d1` link · `#1b1e24` ink · `#f2f7fc` panel · `#ff6600` accent · `#14315c` focus

### Example Component Prompts
- "A 48px button, `#285dab`, white 13px/700 Open Sans, 4px radius, a 2px `#1c4684` inset along the
  bottom; hover `#1c4684` with a `#14315c` inset; focus a 2px `#14315c` outline."
- "A green `#008a00` add-to-basket button in the same shape."

## Governance

### Known Gaps

- **Contrast, `link`.** Text `#0072d1` on `#00000000` measures 4.33:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `input-search`.** Text `#1b1e24` on `#00000000` measures 1.26:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
