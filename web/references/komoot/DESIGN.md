---
name: komoot
colors:
  primary: '#4f6814'
  primary-hover: '#404823'
  green-deep: '#212512'
  accent: '#ee6b17'
  accent-hover: '#ca5910'
  accent-subtle: '#fce1d1'
  secondary: '#e3d2b4'
  secondary-hover: '#d0c1a6'
  subtle-green: '#e7e8d1'
  purple: '#8879e1'
  foreground: '#1c1a18'
  text-on-primary: '#f5f3ec'
  background: '#faf9f4'
  sand: '#ede9de'
  border: '#edebe5'
  border-idle: '#e0dbce'
  disabled: '#d1cdc4'
  danger: '#b53521'
typography:
  display:
    fontSize: 72px
    fontWeight: 500
    use: hero heading; H2 40px/500
  button:
    fontSize: 14px
    fontWeight: 700
    use: header buttons
rounded:
  md: 12px
  lg: 16px
components:
  button-primary:
    type: button
    backgroundColor: '#4f6814'
    textColor: '#f5f3ec'
    rounded: 16px
    height: 43px
    padding: 12px 16px
    typography: 14px / 700
    hover: '#404823'
    pressed: '#404823'
    use: 'Login or Signup — olive primary (actionBaseFillPrimary) darkening to #404823.'
  nav-ghost-white:
    type: button
    backgroundColor: transparent
    textColor: '#faf9f4'
    rounded: 12px
    height: 35px
    padding: 8px 12px
    typography: 14px / 500
    hover: rgba(28,26,24,0.498)
    pressed: rgba(28,26,24,0.498)
    use: 'Routes / Planner / Features / Updates over the hero — off-white text; hover lays a 50% ink fill (actionBaseFillGhostWhiteHover #1c1a187f).'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: Nohemi
    sans: Satoshi
---

# Design System Inspiration of komoot

## Overview

### Visual Theme & Atmosphere

komoot plans outdoor routes — "Explore beyond the map". It generates "sport-specific routes" for
road bikes, mountain bikes and hikes, offers turn-by-turn voice navigation with offline maps, and
calls its users "the largest outdoor community in the world". Curated Collections cover trails such
as the North Coast 500 and the John Muir Trail. Its imprint names **komoot GmbH**, Kienberger Allee
4, 12529 Schönefeld, Germany.

The site is earthy and warm: an off-white ground **`#faf9f4`**, sand **`#ede9de`**, ink **`#1c1a18`**,
olive green **`#4f6814`** for the primary action, and a bright orange **`#ee6b17`** as the accent.
Headlines are set in **Nohemi**, text in **Satoshi**.

What makes it worth reading:

- **Action tokens by fill and content.** `actionBaseFill<Variant><State>` paired with
  `actionContentFill<Variant><State>` — primary, green, secondary, subtle, accent-orange, purple,
  ghost black/white/orange, plus Apple, Google Play and Facebook buttons.
- **A warm neutral world.** Off-white, sand, beige secondary `#e3d2b4` and warm greys instead of
  cool ones.
- **Outdoor colours.** Olive, deep forest `#212512`, orange and a lilac purple `#8879e1`.

#### Primary tasks
- Plan and discover routes; browse Collections.
- Sign up or log in; get the app.

### Brand Narrative

komoot turns planning an outdoor day into picking a line on a map. Its palette comes from the trail
— olive, forest, sand, trail-marker orange — and the type is friendly and modern.

### Principles

- **Explore beyond the map.**
- **Sport-specific routes.**
- **Warm, natural colour.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `komoot.com`: 482 root custom properties, all `--theme-ui-colors-*`
(a Theme UI colour scale), first-party values.

### Greens

- **Primary** (`#4f6814`) — `actionBaseFillPrimaryDefault`.
- **Primary hover** (`#404823`) — also `actionBaseFillGreenDefault` · **Green deep** (`#212512`).
- **Subtle green** (`#e7e8d1`).

### Accent and secondary

- **Accent** (`#ee6b17`) → hover (`#ca5910`) · **Accent subtle** (`#fce1d1`).
- **Secondary** (`#e3d2b4`) → hover (`#d0c1a6`).
- **Purple** (`#8879e1`).

### Neutrals

- **Foreground** (`#1c1a18`) · **Text on primary** (`#f5f3ec`).
- **Background** (`#faf9f4`) · **Sand** (`#ede9de`) · **Border** (`#edebe5`) · **Border idle**
  (`#e0dbce`) · **Disabled** (`#d1cdc4`).
- **Danger** (`#b53521`).

## Typography

### Font family

**Nohemi** (500, 700) for headlines, **Satoshi** (400, 500, 700) for text, and **Boyrun** loaded as
well; all via `document.fonts`.

### Scale

H1 72px/500 Nohemi; H2 40px/500; header buttons 14px/700; navigation 14px/500.

## Layout

- A transparent header over a photographic hero, then alternating feature blocks and Collections on
  off-white and sand.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; warm surfaces separate sections.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.komoot.com/ (live homepage — 482 root custom properties read via `getComputedStyle`; Nohemi and Satoshi loaded; two components measured at rest, hover and pressed; homepage copy, captured 2026-09-27); https://www.komoot.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.komoot.com/imprint (imprint — komoot GmbH, Kienberger Allee 4, 12529 Schönefeld, Germany, read 2026-09-27)

## Components

Measured with a hover counted only when `:hover` matched; consent refused. Focus renders a
translucent blue ring (`rgba(66,153,225,.5)`, border `#63b3ed`) that is not part of the komoot palette;
it is not recorded as a brand state.

- **Primary** — Login or Signup: **`#4f6814`**, `#f5f3ec` 14px/700, 16px radius, 43px. Hover and
  press **`#404823`**.
- **Ghost navigation** — Routes, Planner, Features, Updates over the hero: off-white text. Hover and
  press lay **`rgba(28,26,24,0.5)`**.
- The App link (`#fce1d1` / `#ee6b17`) showed no hover change.

### Radius

16px on buttons, 12px on navigation items.

### States

Hover: olive darkens to `#404823`; ghost navigation takes a 50% ink fill. Press: the same. Focus: a
non-brand blue ring (not recorded).

## Do's and Don'ts

### Do
- Use olive `#4f6814` for primary actions and orange `#ee6b17` for accents.
- Keep neutrals warm — off-white, sand, beige.
- Pair every fill token with its content token.

### Don't
- Don't use cool greys or pure white grounds.
- Don't use orange for primary actions.
- Don't adopt the blue focus ring as a brand colour.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#4f6814` olive · `#404823` hover · `#ee6b17` orange · `#fce1d1` orange subtle · `#1c1a18` ink ·
`#faf9f4` off-white · `#ede9de` sand · `#e3d2b4` beige

### Example Component Prompts
- "A 43px olive `#4f6814` button, `#f5f3ec` 14px/700 Satoshi, 16px radius; hover `#404823`."
- "A 72px Nohemi headline in white over a trail photo."
