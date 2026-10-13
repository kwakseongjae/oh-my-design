---
name: Fever
colors:
  primary: '#0079ca'
  primary-hover: '#0068b0'
  primary-weak: '#e6f4ff'
  focus-glow: '#add4ee'
  ink: '#031419'
  black: '#000405'
  main-contrast: '#06232c'
  subtle-contrast: '#2c4751'
  text-secondary: '#536b75'
  text-disabled: '#a7b2ba'
  canvas: '#ffffff'
  surface: '#fafbfb'
  surface-subtle: '#f2f3f3'
  border: '#ccd2d8'
  accent: '#6f41d7'
  accent-weak: '#f0ebfd'
  danger: '#eb0052'
  success: '#18824c'
  warning: '#9f5800'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: body, links and the city search
  chip:
    fontSize: 14px
    fontWeight: 600
    use: category filter chips
rounded:
  chip: 64px
  search: 32px
  button: 100px
components:
  chip-selected:
    type: button
    backgroundColor: '#000405'
    textColor: '#fafbfb'
    rounded: 64px
    height: 38px
    padding: 8px 16px
    typography: 14px / 600
    hover: '#000405'
    pressed: '#000405'
    focus: 'outline 2px solid #000405'
    use: 'All — the selected category chip on a city page: near-black with an off-white label; hover changes nothing; focus a 2px outline.'
  chip:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#031419'
    border: '#a7b2ba'
    rounded: 64px
    height: 38px
    padding: 8px 16px
    typography: 14px / 600
    hover: '#fafbfb'
    pressed: '#fafbfb'
    focus: 'outline 2px solid #000405'
    use: 'Live Music, Nightlife, Family … — white chips with a grey border that tint #fafbfb on hover.'
  link-see-all:
    type: button
    backgroundColor: transparent
    textColor: '#031419'
    rounded: 0px
    height: 24px
    typography: 16px / 400
    hover: 'fg #536b75'
    pressed: 'fg #536b75'
    use: 'See all — ink text that turns #536b75 and underlines on hover and press.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Montserrat
---

# Design System Inspiration of Fever

## Overview

### Visual Theme & Atmosphere

Fever calls itself "the leading global live-entertainment discovery tech platform", helping
millions of people each week find experiences in their cities, "with a mission to democratize
access to culture and entertainment in real life". Its careers page counts 3,000+ employees of 56+
nationalities, a campus in Madrid, local offices in more than 15 cities and a platform in more than
150 cities. The contracting company is **Fever Labs Inc.**, a Delaware corporation with offices at
50 Greene St, New York.

The site is photographic and dark-on-light: a full-bleed video hero ("Experience your city"), then
an off-white page **`#fafbfb`** of plan cards, near-black ink **`#031419`**, a blue **`#0079ca`**
for primary actions, and hot magenta **`#eb0052`** for alerts and badges. Type is **Montserrat**.

What makes it worth reading:

- **Component-scoped tokens.** 608 `--fv-*` properties named by component and role —
  `--fv-plan-view-color-action-background-primary`, `--fv-text-field-focus-box-shadow`,
  `--fv-order-reschedule-*`, `--fv-voucher-card-*`.
- **A blue-grey neutral ramp.** `#031419`, `#06232c`, `#2c4751`, `#536b75`, `#a7b2ba`, `#ccd2d8`.
- **Paired weak tints.** Each status has a weak background — primary `#e6f4ff`, accent `#f0ebfd`,
  positive `#e8f8f0`, danger `#fff0f4`.

#### Primary tasks
- Pick a city; filter plans by category.
- Open a plan and buy tickets.

### Brand Narrative

Fever turns a city into a menu of things to do — music, sports, culture, pop-ups — and its
interface steps back behind photography: off-white, blue-grey ink, one blue for buying and magenta
for urgency.

### Principles

- **Culture for everyone.** The mission it states.
- **Components own their tokens.**
- **Weak and strong pairs.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `feverup.com/en` and `/en/madrid`: 617 root custom properties,
608 of them `--fv-*`. All first-party.

### Blue (primary)

- **Primary** (`#0079ca`) — `--fv-button-primary-background`, `--fv-plan-view-color-action-*-primary`.
- **Primary hover** (`#0068b0`) — `--fv-plan-view-button-background-primary-hover`; the text field's
  focus border.
- **Primary weak** (`#e6f4ff`) · **Focus glow** (`#add4ee`, a 4px text-field shadow).

### Ink and neutrals

- **Ink** (`#031419`) — light-button and chip text · **Black** (`#000405`) — the selected chip.
- **Main contrast** (`#06232c`) — dark buttons · **Subtle contrast** (`#2c4751`).
- **Text secondary** (`#536b75`) · **Text disabled** (`#a7b2ba`).
- **Canvas** (`#ffffff`) · **Surface** (`#fafbfb`) · **Surface subtle** (`#f2f3f3`) · **Border**
  (`#ccd2d8`).

### Accent and status

**Accent** `#6f41d7` · **Accent weak** `#f0ebfd` · **Danger** `#eb0052` · **Success** `#18824c` ·
**Warning** `#9f5800`.

## Typography

### Font family

**Montserrat** (400, 600), `Montserrat, sans-serif`, loaded (`document.fonts`).

### Scale

Body and links 16px/400; chips 14px/600.

## Layout

- A white header with city picker, a video hero with search, then rows of plan cards and category
  chips.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat cards on `#fafbfb`; the hero is photographic.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://feverup.com/en/madrid (live city page — 617 root custom properties read via `getComputedStyle`; Montserrat loaded; three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://feverup.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://feverup.com/legal/terms_en.html (Terms — Fever Labs Inc., Delaware corporation, offices at 50 Greene St, New York, read 2026-09-26); https://careers.feverup.com/ (careers — mission, 3,000+ employees, campus in Madrid, 150+ cities, read 2026-09-26)

## Components

Measured on the Madrid city page, focus read under a real Tab key and a hover counted only when
`:hover` matched. The consent banner offered only "Accept" and was never answered.

- **Selected chip** — All: **`#000405`**, `#fafbfb` 14px/600, 64px radius, 38px. Hover no change;
  focus a **2px `#000405`** outline.
- **Chip** — Live Music and others: white, `#031419` label, `#a7b2ba` border. Hover **`#fafbfb`**;
  same focus.
- **See all** — `#031419` 16px. Hover and press turn it **`#536b75`** and underline.

### Radius

64px chips, 32px city search, 100px buttons.

### States

Hover: chips tint `#fafbfb`; links turn `#536b75` and underline. Focus: 2px outlines on chips; a
2px `#0068b0` border and `#add4ee` glow on text fields (tokens).

## Do's and Don'ts

### Do
- Use `#0079ca` for primary actions with `#0068b0` hover.
- Keep ink and neutrals on the blue-grey ramp.
- Pair every status colour with its weak tint.

### Don't
- Don't use pure black text; the ink is `#031419`.
- Don't use magenta `#eb0052` for actions; it is danger and alerts.
- Don't drop the 2px chip focus outline.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#0079ca` blue · `#0068b0` blue hover · `#031419` ink · `#536b75` secondary · `#fafbfb` surface ·
`#ccd2d8` border · `#6f41d7` accent · `#eb0052` danger

### Example Component Prompts
- "38px pill chips in Montserrat 14px/600: selected `#000405` with `#fafbfb` text, others white with
  a `#a7b2ba` border tinting `#fafbfb` on hover."
- "A text field with a 2px `#0068b0` focus border and a 4px `#add4ee` glow."

## Governance

### Known Gaps

- **Contrast, `link-see-all`.** Text `#031419` on `#00000000` measures 1.12:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
