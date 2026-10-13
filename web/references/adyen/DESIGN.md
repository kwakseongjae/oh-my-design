---
name: Adyen
colors:
  brand: '#00d16a'
  primary: '#001222'
  foreground: '#001222'
  navy-2800: '#1a2b3b'
  navy-2500: '#2f3e4d'
  slate: '#636f7a'
  grey-1400: '#848d96'
  grey-500: '#d1d5d8'
  grey-200: '#ecedef'
  grey: '#f4f5f6'
  sand: '#e6e4e2'
  sand-light: '#f6f5f4'
  canvas: '#ffffff'
  blue: '#0063d7'
  purple: '#cb96ff'
  yellow: '#ffc200'
  orange: '#ff9e11'
  red: '#c72727'
rounded:
  base: 6px
  lg: 24px
components:
  button-cta:
    type: button
    backgroundColor: '#00d16a'
    textColor: '#001222'
    rounded: 6px
    typography: Adyen
    hover: '::before overlay rgba(0,18,34,0.074)'
    focus: 'outline 1px solid #ffffff'
    use: Contact us in the header — green with a navy label. Hover fades in a ::before overlay of --main-light-secondary (navy at 7.4%) over the green; focus draws a 1px white outline.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    hover: transparent
    focus: 'outline 1px solid #ffffff'
    use: Pricing in the header over the dark hero — hover changes nothing (pseudo-elements included); focus draws the same 1px white outline.
omitted:
  - section: typography
    reason: No verified values in current evidence.
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Adyen
    mono: Adyen Mono
---

# Design System Inspiration of Adyen

## Overview

### Visual Theme & Atmosphere

Adyen is a payments platform for businesses — online, in store and in apps — built on its own
infrastructure. Its about page says it was "Founded in 2006 in Amsterdam, the Netherlands", signed
Groupon as its first global enterprise merchant in 2009, and has added risk tools, terminals,
issuing and platform payments since. Its investor-relations calendar holds its shareholder events
in Amsterdam.

The site is dark and precise: deep navy **`#001222`** heroes, white sections, and one bright green
**`#00d16a`** for the actions. Surfaces are graded from the navy itself — a 4.2% tint, a 7.4% tint,
17.8%, 48%, 60.7% — so everything reads as one ink at different strengths. Type is Adyen's own
**Adyen** and **Adyen Mono**.

What makes it worth reading:

- **One ink, many strengths.** `--main-*` roles are `color-mix(in srgb, #001222 N%, transparent)`:
  light-primary 4.2%, light-secondary 7.4%, elevated 17.8%, contrast-secondary 48%,
  contrast-primary 60.7%, strong 81.2%.
- **Hover as an overlay.** The green button keeps its colour; a `::before` layer of navy at 7.4%
  fades in over it.
- **A thin brand layer over Tailwind.** Tailwind v4 supplies the machinery (`--tw-*`, the `--text-*`
  scale, containers, easings); Adyen's own tokens are the colours, surfaces, radius and grid.

#### Primary tasks
- Learn about payments, platforms and pricing.
- Contact sales; sign in to the Customer Area.

### Brand Narrative

Adyen describes itself as a platform built to help businesses grow faster, and its site has an
economy to match: one navy, one green, and surfaces made from
the navy at measured strengths. Its own typefaces carry the brand. Behind the product sits a
separate design system, Bento, whose tokens Adyen publishes on npm.

### Principles

- **One ink.** Surfaces are the navy at different strengths.
- **Green means go.** The only bright colour is the action.
- **Quiet states.** A faint overlay, a thin white ring.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `adyen.com`: 154 root custom properties. About 65–70 are
Adyen's (`--color-*` 35, `--main-*` 14, `--spacing-*` 17, radius, grid, overlays, motion); the rest
are Tailwind v4 defaults — `--tw-*`, the `--text-*` type scale, font weights, containers — and are
excluded.

### Brand and ink

- **Brand** (`#00d16a`) — `--color-green`, `--active-primary`; the call-to-action fill.
- **Primary** (`#001222`) — `--color-black`, `--main-solid`; the navy of heroes and text.
- **Foreground** (`#001222`) — text on light sections (423 elements; white text on dark ones).
- **Canvas** (`#ffffff`) — `--main-surface`.

### Navy ramp

`--color-black-2800` **`#1a2b3b`** · `-2500` **`#2f3e4d`** · `-1800` **`#636f7a`** (slate borders) ·
`-1400` **`#848d96`** · `-500` **`#d1d5d8`** · `-200` **`#ecedef`** · `--color-grey` **`#f4f5f6`**.

### Sand and accents

**Sand** `#e6e4e2` · **Sand light** `#f6f5f4` · **Blue** `#0063d7` · **Purple** `#cb96ff` ·
**Yellow** `#ffc200` · **Orange** `#ff9e11` · **Red** `#c72727`.

## Typography

### Font family

**Adyen** (`Adyen, Helvetica, Arial, sans-serif`) on body, headings and buttons, and **Adyen Mono**
(`--font-mono`) — both variable (400–700), loaded (`document.fonts`), self-hosted at
`adyen.com/main_nuxt/Adyen-Variable.*.woff2` and `Adyen-Mono-Variable.*.woff2`.

### Scale

The `--text-*` sizes on the page are Tailwind v4's defaults and are not recorded as Adyen's.

## Layout

- `--grid-*`: 12 columns, 1280px maximum.
- Spacing in steps of 1.5rem (`--spacing-s` 1.5rem, `-m` ×1.5, `-l` ×2, `-xl` ×3).
- Dark hero, then light sections.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Elevation is ink density rather than shadow: `--main-elevated` is navy at 17.8%. Overlays use
`--overlay-light` `#0000003d` and `--overlay-medium` `#00000072`.

## Motion & Easing

Adyen-authored easing tokens sit beside Tailwind's (`--ease-spring`, `--anticipate`, `--in_out_*`).
Not measured on controls.

---

**Tier 1 sources:** https://www.adyen.com/ (live homepage — 154 root custom properties read via `getComputedStyle`, Tailwind v4 defaults excluded; Adyen and Adyen Mono loaded; two components measured at rest, hover, pressed and focus including pseudo-elements, after declining cookies, captured 2026-09-26); https://www.adyen.com/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://www.adyen.com/about (About Adyen — "Founded in 2006 in Amsterdam, the Netherlands", read 2026-09-26); https://www.adyen.com/investor-relations (Investor relations — shareholder events in Amsterdam, read 2026-09-26); https://www.npmjs.com/package/@adyen/bento-design-tokens (Bento design tokens — maintainers at adyen.com, repository Adyen/bento, read 2026-09-26)

## Components

Measured on the home page after declining cookies (OneTrust), focus read under a real Tab key, and
a hover counted only when `:hover` matched. The comparison includes `::before` and `::after`.

- **Call to action** — Contact us: **`#00d16a`**, navy `#001222` label, 6px radius. Hover fades in a
  `::before` overlay of navy at 7.4% (`--main-light-secondary`) — the button's own values do not
  change. Focus: `outline: 1px solid #ffffff`.
- **Header link** — Pricing: white on the dark hero. Hover changes nothing; focus draws the same
  1px white outline.

### Radius

`--base-radius` 6px (`--radius-m`) · `--radius-l` 24px (`calc(6px*4)`).

### States

Hover: the green button gains a 7.4% navy overlay; the header link does not change. Focus: a 1px
white outline on both. The Products mega-menu trigger could not be measured.

## Do's and Don'ts

### Do
- Use green `#00d16a` for actions with a navy `#001222` label.
- Build surfaces as navy at fixed strengths (4.2%, 7.4%, 17.8% …).
- Draw hover as a 7.4% navy overlay over the fill.

### Don't
- Don't count Tailwind's `--text-*`, `--tw-*` or container tokens as Adyen's.
- Don't use pure black; the ink is `#001222`.
- Don't change the label on green; the live button uses navy `#001222`.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#00d16a` green · `#001222` navy · `#1a2b3b` / `#2f3e4d` navy steps · `#636f7a` slate · `#f4f5f6`
grey · `#e6e4e2` sand · `#ffffff` white

### Example Component Prompts
- "A green `#00d16a` button with a navy `#001222` Adyen label, 6px radius; hover fades in a navy
  7.4% overlay; focus a 1px white outline."
- "A navy `#001222` hero with white Adyen type and a panel at navy 17.8%."
