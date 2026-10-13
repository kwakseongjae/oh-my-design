---
name: Celonis
colors:
  accent-green: '#5cfe50'
  accent-secondary: '#04cd24'
  black: '#000000'
  header-button: '#1d1d1d'
  header-button-hover: '#4d4d4d'
  canvas: '#ffffff'
  background-secondary: '#f5f5f5'
  background-tertiary: '#e5e5e5'
  background-quaternary: '#cbcbcb'
  background-quinary: '#767676'
  foreground: '#000000'
  text-mid: '#666666'
  text-low: '#8e8d8d'
  success: '#0b9e23'
  success-bg: '#d5ffd1'
  danger: '#bf281b'
  danger-bg: '#ffdfdc'
typography:
  display:
    fontSize: 80px
    fontWeight: 400
    use: section headlines (--fnd-typography-heading-xl 5rem, -3px tracking)
  body:
    fontSize: 14px
    fontWeight: 400
    use: header buttons
rounded:
  s: 2px
  m: 4px
  l: 8px
components:
  button-primary:
    type: button
    backgroundColor: '#5cfe50'
    textColor: '#000000'
    rounded: 2px
    height: 40px
    padding: 0 16px
    typography: 14px / 400
    hover: inset 0 0 0 1000px rgba(0,0,0,0.2)
    focus: inset 0 0 0 1000px rgba(0,0,0,0.2)
    use: Try for free — neon green with black text; hover and focus darken it with a 20% black inset shadow.
  link-cta:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 0px
    height: 24px
    typography: 18px / 400
    hover: 'underline #ffffff'
    use: 'Discover our solutions on the black hero — white text that underlines on hover while a green #5cfe50 ::before fades in.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Poppins
---

# Design System Inspiration of Celonis

## Overview

### Visual Theme & Atmosphere

"We make processes work for people, companies, and the planet." Celonis was founded in 2011,
"bringing Process Mining from academia into the boardroom"; its timeline runs through cloud (2018),
unicorn and decacorn rounds, the Process Intelligence Graph (2023) and the Process Intelligence
Platform (2024). It counts 3,000+ employees "in Munich, New York, Madrid and 14 other offices".
Its imprint names **Celonis SE**, Theresienstr. 6, 80333 Munich, registered office Munich.

The site is stark: a black header and hero, white and light grey sections (`#f5f5f5`, `#e5e5e5`),
black text, **Poppins** everywhere, and a single neon green **`#5cfe50`** for the call to action.

What makes it worth reading:

- **A foundation system, "fnd".** 127 `--fnd-*` properties: colour roles (background base →
  quinary, border low/mid/high, text high/mid/low, semantic success/danger), a 4px spacing scale to
  112px, radii 2/4/8px, and a type scale from `paragraph-xs` to `display-s` (8rem, −4px tracking).
- **Motion as tokens.** Three motion personalities — `expressive` (ease-out), `focused`
  (ease-in-out), `informative` (linear) — each with quick/base/slow durations (.2s/.3s/.45s–.6s).
- **One accent.** Everything is black, white and grey except the neon green.

#### Primary tasks
- Understand the platform and solutions.
- Try for free; talk to an expert.

### Brand Narrative

Process mining brought from academia to the boardroom, now sold as process intelligence. The site
is as reductive as a process diagram: black, white, grey, and one neon green where you act.

### Principles

- **Processes work for people, companies and the planet.**
- **One accent.**
- **Motion with intent.** Expressive, focused, informative.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `celonis.com`: 137 root custom properties, 127 of them `--fnd-*`.
All first-party.

### Accent

- **Accent green** (`#5cfe50`) — `--fnd-color-background-accent-green`; Try for free.
- **Accent secondary** (`#04cd24`).

### Neutrals

- **Black** (`#000000`) — header, inverse background, text high.
- **Header button** (`#1d1d1d`) → hover (`#4d4d4d`).
- **Canvas** (`#ffffff`) · **Background secondary** (`#f5f5f5`) · **tertiary** (`#e5e5e5`) ·
  **quaternary** (`#cbcbcb`) · **quinary** (`#767676`).
- **Foreground** (`#000000`) · **Text mid** (`#666666`) · **Text low** (`#8e8d8d`).

### Semantic

**Success** `#0b9e23` on `#d5ffd1` · **Danger** `#bf281b` on `#ffdfdc`.

## Typography

### Font family

**Poppins** (400), loaded (`document.fonts`) with a metric-matched fallback.

### Scale

`--fnd-typography-*`: heading-xxl 6.25rem/−2px, heading-xl 5rem/−3px, heading-l 3.75rem/−1.5px,
heading-m 2.75rem, heading-s 2rem, paragraph-l 1rem/1.375rem, paragraph-m .875rem. Section headlines
render at 80px/400.

## Layout

- A black header and hero, then alternating white and grey sections on a 4px spacing grid.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; hover darkens with an inset shadow rather than a new fill.

## Motion & Easing

Tokens: `--fnd-motion-duration-{expressive,focused,informative}-{quick,base,slow}` (.2s / .3s /
.45s, informative slow .6s); `--fnd-motion-ease-expressive` ease-out, `-focused` ease-in-out,
`-informative` linear.

---

**Tier 1 sources:** https://www.celonis.com/ (live homepage — 137 root custom properties read via `getComputedStyle`; Poppins loaded; two components measured at rest, hover and focus, captured 2026-09-26); https://www.celonis.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://www.celonis.com/company/about-us (About — mission, 2011 founding, timeline, 3,000+ employees in Munich, New York, Madrid and 14 other offices, read 2026-09-26); https://www.celonis.com/legal (imprint — Celonis SE, Theresienstr. 6, 80333 Munich, registered office Munich, read 2026-09-26)

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `motion.duration-quick`: `.2s`
- `motion.duration-base`: `.3s`
- `motion.duration-slow`: `.45s`
- `motion.ease-expressive`: `ease-out`
- `motion.ease-focused`: `ease-in-out`
- `motion.ease-informative`: `linear`

## Components

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. The pressed
state could not be measured (an overlay intercepted the pointer) and is not recorded.

- **Try for free** — **`#5cfe50`**, black 14px/400, 2px, 40px. Hover and focus lay a **20% black
  inset** (`inset 0 0 0 1000px rgba(0,0,0,.2)`).
- **Hero link** — Discover our solutions: white 18px. Hover underlines it and fades in a green
  `#5cfe50` `::before`.

### Radius

2px on buttons; `--fnd-radius-m` 4px and `-l` 8px elsewhere.

### States

Hover: a 20% black inset on the green button; underline plus a green bar on hero links; the header
button lifts to `#4d4d4d`. Focus: the same as hover plus the browser's ring. Pressed: not measured.

## Do's and Don'ts

### Do
- Keep the palette black, white and grey, with neon green `#5cfe50` for the one call to action.
- Darken hover with a 20% black inset instead of a new colour.
- Pick motion from the three personalities: expressive, focused, informative.

### Don't
- Don't add a second accent colour.
- Don't round buttons; they are 2px.
- Don't put the green behind body text; it is for actions and highlights.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#5cfe50` neon green · `#000000` black · `#1d1d1d` header button · `#f5f5f5` / `#e5e5e5` greys ·
`#666666` mid text · `#0b9e23` success · `#bf281b` danger

### Example Component Prompts
- "A 40px `#5cfe50` button, black 14px Poppins, 2px radius; hover a 20% black inset."
- "A black hero with an 80px Poppins headline and a white link that underlines on hover."
