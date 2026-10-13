---
name: Spendesk
colors:
  brand-deep-purple: '#7136ed'
  brand-carbon: '#191b1b'
  brand-grolive: '#f3f4ef'
  purple: '#5d21d2'
  purple-hover: '#4b1baf'
  purple-ultradark: '#27175c'
  purple-ultralight: '#f7f4fd'
  lavender: '#9477f3'
  periwinkle: '#b3bffa'
  mint: '#91d69f'
  teal: '#4ac8c6'
  pink: '#e473ff'
  salmon: '#ffa38a'
  error: '#f04c74'
  foreground: '#191b1b'
  text-secondary: '#636363'
  canvas: '#ffffff'
  neutral-100: '#f7f7f7'
  neutral-400: '#cccccc'
typography:
  display:
    fontSize: 64px
    fontWeight: 500
    use: hero H1; H2 48px/500
  button:
    fontSize: 16px
    fontWeight: 600
    use: header buttons
rounded:
  md: 8px
components:
  button-primary:
    type: button
    backgroundColor: '#7136ed'
    textColor: '#ffffff'
    rounded: 8px
    height: 44px
    padding: 14px 20px
    typography: 16px / 600
    hover: '#7136ed'
    pressed: '#7136ed'
    use: Book a demo — brand deep purple; :hover matched and the button's own values did not change.
  button-secondary:
    type: button
    backgroundColor: '#f3f4ef'
    textColor: '#191b1b'
    rounded: 8px
    height: 46px
    padding: 14px 20px
    typography: 16px / 600
    hover: '#f3f4ef'
    pressed: '#f3f4ef'
    use: Login — grolive with carbon text and a 10% carbon border; no hover change.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: Roobert
    sans: Inter
---

# Design System Inspiration of Spendesk

## Overview

### Visual Theme & Atmosphere

"Spend smarter with Spendesk." Spendesk is "one complete spend management solution" — procurement,
cards, invoices, expenses, approvals, budgets, reporting and pre-accounting — built for finance
teams, with the mission "to liberate businesses and people to do their best work". Its guiding
principles include "Visibility is fundamental for business growth" and "Simplicity equals
adoption". The company is a simplified joint stock company registered in Paris, with its registered
office at 51 rue de Londres, 75008 Paris.

The site pairs a carbon ink **`#191b1b`** with Spendesk's deep purple **`#7136ed`**, an olive-grey
neutral it calls "grolive" **`#f3f4ef`**, and soft accents — lavender **`#9477f3`**, periwinkle
**`#b3bffa`**, mint **`#91d69f`**. Headlines are **Roobert**, text **Inter**.

What makes it worth reading:

- **Three named brand colours.** `--brand-carbon`, `--brand-deep-purple`, `--brand-grolive` — ink,
  action and ground.
- **A wide supporting palette.** `--color-tp-*`: purples from ultralight to ultradark, pinks, teal,
  salmon and a set of greys.
- **Restrained buttons.** The measured buttons hold their colour on hover.

#### Primary tasks
- Book a demo; log in.
- See pricing and customer stories.

### Brand Narrative

A Paris spend-management company promising finance teams visibility and simplicity. Its brand
reduces to three words — carbon, deep purple, grolive — with soft accents for everything else.

### Principles

- **Visibility is fundamental for business growth.**
- **Simplicity equals adoption.**
- **Three brand colours.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `spendesk.com/en`: 194 root custom properties — `--color-*` 28,
`--sp-*` 27, `--fs-*` 25, `--br-*` 23, `--space-*` 20, `--lh-*` 15, `--neutral-*` 10 … All first-party.

### Brand

- **Deep purple** (`#7136ed`) — `--brand-deep-purple`; Book a demo.
- **Carbon** (`#191b1b`) — `--brand-carbon`; text.
- **Grolive** (`#f3f4ef`) — `--brand-grolive`; secondary buttons and sections.

### Purples

**Purple** `#5d21d2` → hover `#4b1baf` · **Ultradark** `#27175c` · **Ultralight** `#f7f4fd` ·
**Lavender** `#9477f3` (section fills).

### Accents

**Periwinkle** `#b3bffa` · **Mint** `#91d69f` · **Teal** `#4ac8c6` · **Pink** `#e473ff` · **Salmon**
`#ffa38a` · **Error** `#f04c74`.

### Neutrals

- **Foreground** (`#191b1b`) · **Text secondary** (`#636363`).
- **Canvas** (`#ffffff`) · **Neutral 100** (`#f7f7f7`) · **Neutral 400** (`#cccccc`).

## Typography

### Font family

**Roobert** (500, 600) for headlines and **Inter** (variable) for text; both load (`document.fonts`).

### Scale

H1 64px/500 Roobert; H2 48px/500; eyebrows 14px/600 uppercase Inter; buttons 16px/600.

## Layout

- A white header with navigation and the two buttons, a hero with a large Roobert headline, then
  product sections on grolive and lavender.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; colour blocks separate sections.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.spendesk.com/en/ (live homepage — 194 root custom properties read via `getComputedStyle`; Roobert and Inter loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://www.spendesk.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.spendesk.com/about/ (About — mission, spend management scope, guiding principles, read 2026-09-27); https://www.spendesk.com/en-eu/legals/privacy/ (privacy policy — Spendesk, Paris Trade and Companies Register 821 893 286, 51 rue de Londres, 75008 Paris, read 2026-09-27)

## Components

Measured with a hover counted only when `:hover` matched; consent denied. Focus showed only the
browser's ring and is not recorded.

- **Primary** — Book a demo: **`#7136ed`**, white 16px/600, 8px, 44px. Hover and press: no change in
  the button's own values.
- **Secondary** — Login: **`#f3f4ef`**, `#191b1b` text, a 10% carbon border, 8px, 46px. No hover
  change.

### Radius

8px on buttons.

### States

Hover and press: no change on the measured buttons. Focus: the browser's ring (not recorded).

## Do's and Don'ts

### Do
- Use deep purple `#7136ed` for the main action, carbon for text, grolive for quiet surfaces.
- Keep accents soft — lavender, periwinkle, mint.
- Set headlines in Roobert.

### Don't
- Don't use pure black; the ink is carbon `#191b1b`.
- Don't use pure grey for neutral surfaces; grolive has an olive tint.
- Don't invent hover colours; the measured buttons hold their colour.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#7136ed` deep purple · `#191b1b` carbon · `#f3f4ef` grolive · `#9477f3` lavender · `#b3bffa`
periwinkle · `#91d69f` mint · `#636363` secondary · `#f04c74` error

### Example Component Prompts
- "A 44px `#7136ed` button, white 16px/600 Inter, 8px radius."
- "A 64px Roobert headline in carbon `#191b1b` on white, over a grolive `#f3f4ef` section."
