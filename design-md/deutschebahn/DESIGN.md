---
name: Deutsche Bahn
colors:
  primary: '#ec0016'
  primary-hover: '#c50014'
  foreground: '#282d37'
  ink-strong: '#16181b'
  field: '#f0f3f5'
  border: '#d7dce1'
  focus: '#257fa8'
  accent: '#d96000'
  canvas: '#ffffff'
typography:
  button:
    fontSize: 16px
    fontWeight: 700
    use: the search button
rounded:
  sm: 4px
  pill: 12px
components:
  button-search:
    type: button
    backgroundColor: '#ec0016'
    textColor: '#ffffff'
    rounded: 4px
    height: 56px
    padding: 16px 32px
    typography: 16px / 700
    hover: '#c50014'
    pressed: '#c50014'
    focus: 'outline 2px solid #257fa8'
    use: 'Suchen in the journey planner — DB red, darkening to #c50014 on hover and press; focus is a 2px teal-blue outline.'
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#282d37'
    rounded: 0px
    height: 40px
    hover: '::after bar #282d37'
    pressed: '::after bar #282d37'
    focus: 'outline 2px solid #257fa8'
    use: Tickets & Angebote in the header — hover and press draw an ::after bar in the ink colour under the label; focus is the same 2px outline.
  button-ghost:
    type: button
    backgroundColor: transparent
    textColor: '#16181b'
    rounded: 4px
    height: 40px
    hover: rgba(90,94,104,0.24)
    pressed: rgba(90,94,104,0.32)
    focus: 'outline 2px solid #257fa8'
    use: Jetzt bestellen — a ghost button whose grey wash deepens from 24% on hover to 32% on press.
  input-station:
    type: input
    backgroundColor: '#f0f3f5'
    textColor: '#282d37'
    border: '#d7dce1'
    rounded: 0px
    height: 56px
    hover: '#f0f3f5'
    focus: 'outline 2px solid #257fa8'
    use: The departure and destination fields — grey fill with a bottom rule; hover changes nothing, focus draws the 2px outline.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: DB Screen Sans
    display: DB Screen Head
---

# Design System Inspiration of Deutsche Bahn

## Overview

### Visual Theme & Atmosphere

bahn.de is Deutsche Bahn's travel site — the journey planner, tickets and offers, and trip
management for Germany's national railway. Its imprint names DB Fernverkehr AG in Frankfurt as the
operator, within the DB group. Deutsche Bahn publishes its design system openly: the **DB UX Design
System**, "a Design System designed to align teams and streamline product delivery", with its
tokens and web components developed in public on GitHub.

The site is functional and trustworthy: white ground, dark slate text **`#282d37`**, pale grey
fields **`#f0f3f5`**, and the DB red **`#ec0016`** reserved for the one action that matters — Search.
Type is Deutsche Bahn's own **DB Screen Sans** with **DB Screen Head** for headings.

What makes it worth reading:

- **An open system.** The design system has a public site and a public monorepo
  (`db-ux-design-system/core-web`), so the tokens behind bahn.de are inspectable.
- **Adaptive roles with states.** Variable names like `--db-adaptive-bg-basic-level-1-hovered`,
  `--db-adaptive-on-bg-basic-emphasis-90-pressed` and `--db-adaptive-bg-vibrant-default` spell out a
  role, an emphasis and a state.
- **One focus colour everywhere.** Every measured control draws a 2px `#257fa8` outline on focus.

#### Primary tasks
- Plan a journey: from, to, date, travellers; search.
- Buy tickets and offers; manage trips.

### Brand Narrative

Deutsche Bahn's site does one job first — get you a train — and its design says so: a slate-and-
white page, grey fields, and a single red button. Behind it sits a design system the railway builds
in the open, with state-aware adaptive tokens and a focus colour applied everywhere.

### Principles

- **One red.** The primary action and nothing else.
- **Open by default.** The system and its tokens are public.
- **Visible focus.** The same outline on every control.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

bahn.de's root holds only 20 custom properties (container and screen sizes, icon fonts); its
stylesheets declare about 1,000 `--db-*` variables that resolve inside component scopes. The colours
below are read from the rendered elements.

- **Primary** (`#ec0016`) — the DB red on the search button (nine red backgrounds on the page).
- **Primary hover** (`#c50014`).
- **Foreground** (`#282d37`) — text and links; 17 of 17 `<p>` elements.
- **Ink strong** (`#16181b`) — the ghost button's label.
- **Field** (`#f0f3f5`) — input fills and grey panels.
- **Border** (`#d7dce1`) — the fields' bottom rule.
- **Focus** (`#257fa8`) — the 2px focus outline.
- **Accent** (`#d96000`) — an orange badge.
- **Canvas** (`#ffffff`).

## Typography

### Font family

**DB Screen Sans** (400, 700) — `DBScreenSans, "Helvetica Neue", arial, sans-serif` on body — and
**DB Screen Head** (900) on headings, both loaded (`document.fonts`). Icons come from two icon fonts,
`db-default` and `db-filled`.

### Scale

The search button is 16px/700.

## Layout

- Container tokens run from `--db-container-3xs` 14rem to `--db-container-3xl` 48rem; screens from
  `--db-screen-xs` 20em to `--db-screen-xl` 120em.
- The journey planner leads the page.

### Responsive Behavior

Screen tokens define breakpoints (20em–120em); only desktop was measured.

## Elevation & Depth

Flat: no shadows on the measured controls; overlays use `rgba(0,0,0,0.7)`.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.bahn.de/ (live homepage — root and stylesheet custom properties read; DB Screen Sans and Head loaded; four components measured at rest, hover, pressed and focus, captured 2026-09-26); https://design-system.deutschebahn.com/ (DB UX Design System — nonsense path returns a GitHub Pages 404, read 2026-09-26); https://github.com/db-ux-design-system/core-web (DB UX Design System monorepo — design tokens and components for web UIs, read 2026-09-26); https://www.bahn.de/impressum (Impressum — DB Fernverkehr AG, Frankfurt, read 2026-09-26)

## Components

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Search** — Suchen: **`#ec0016`**, white 16px/700, radius 4px, 56px, `16px 32px`. Hover and press
  **`#c50014`**. Focus: `outline: 2px solid #257fa8`.
- **Header link** — Tickets & Angebote: `#282d37`, 40px. Hover and press draw an `::after` bar in
  `#282d37` under the label; the link's own values stay the same. Focus: the 2px outline.
- **Ghost button** — Jetzt bestellen: transparent, `#16181b`, 4px. Hover washes it with
  `rgba(90,94,104,0.24)`, press with `rgba(90,94,104,0.32)`.
- **Station fields** — `#f0f3f5` with a `#d7dce1` bottom rule, 56px. Hover changes nothing; focus draws
  the outline.

### Radius

4px on buttons; 12px on the class toggles.

### States

Hover: search to `#c50014`, the header link gains an underline bar, the ghost button a 24% wash, the
fields no change. Press: `#c50014`, the bar, a 32% wash. Focus: a 2px `#257fa8` outline on all four.

## Do's and Don'ts

### Do
- Keep DB red `#ec0016` for the primary action; darken to `#c50014`.
- Use slate `#282d37` for text and grey `#f0f3f5` for fields.
- Give every control the 2px `#257fa8` focus outline.

### Don't
- Don't spread the red across secondary controls.
- Don't use pure black for text; the ink is `#282d37`.
- Don't add shadows to controls.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#ec0016` DB red · `#c50014` red hover · `#282d37` ink · `#f0f3f5` field · `#d7dce1` rule ·
`#257fa8` focus · `#ffffff` white

### Example Component Prompts
- "A 56px search button, `#ec0016`, white 16px/700 DB Screen Sans, 4px radius; hover `#c50014`;
  focus a 2px `#257fa8` outline."
- "A header link in `#282d37` that shows an underline bar on hover."

## Governance

### Known Gaps

- **Contrast, `link-nav`.** Text `#282d37` on `#00000000` measures 1.52:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-ghost`.** Text `#16181b` on `#00000000` measures 1.18:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
