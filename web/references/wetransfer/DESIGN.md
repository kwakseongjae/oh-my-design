---
name: WeTransfer
colors:
  base: '#3767ea'
  base-hover: '#4e7df7'
  base-active: '#1842ce'
  base-tint: '#f5f8ff'
  neutral: '#353535'
  neutral-hover: '#464646'
  neutral-active: '#161616'
  neutral-tint: '#f1f1f1'
  upsell: '#8e21cc'
  upsell-hover: '#a035e2'
  upsell-active: '#650095'
  destructive: '#b82b00'
  foreground: '#161616'
  text-muted: '#676767'
  canvas: '#ffffff'
  gray-10: '#f9f9f9'
  gray-30: '#d6d6d6'
  success: '#3a9249'
  warning: '#fbc738'
typography:
  small:
    fontSize: 14px
    fontWeight: 500
    use: navigation and buttons
rounded:
  sm: 8px
  md: 12px
components:
  button-signup:
    type: button
    backgroundColor: '#353535'
    textColor: '#f1f1f1'
    rounded: 8px
    height: 32px
    padding: 6px 12px
    typography: 14px / 500
    hover: '#464646'
    pressed: '#161616'
    focus: 'ring 0 0 0 4px #464646'
    use: 'Sign up — the neutral action (--wt-color-neutral-*): #353535 → hover #464646 → active #161616 with a white label; focus a 4px #464646 ring.'
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#353535'
    rounded: 0px
    height: 48px
    typography: 14px / 500
    hover: 'fg #676767'
    pressed: 'fg #676767'
    focus: 'outline 1px solid #4e7df7'
    use: 'Log in in the top navigation — #353535 text greying to #676767 on hover; focus a 1px blue outline with a soft blue glow.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: GT Super WT
    sans: Actief Grotesque
---

# Design System Inspiration of WeTransfer

## Overview

### Visual Theme & Atmosphere

"The simplest way to send big files? That's us. A platform to empower creatives while using
business as a force for good? Also us." WeTransfer moves big files for millions of people a month
and runs an editorial arm and a premium advertising space for brands. Its terms give a notice
address at Nieuwezijds Voorburgwal 162, Amsterdam, the Netherlands.

The interface is plain and confident: white and light grey (`#f9f9f9`, `#d6d6d6`), near-black ink
**`#161616`**, a charcoal neutral action **`#353535`**, and WeTransfer blue **`#3767ea`** for the
product's base action. Type pairs **GT Super WT** for display with **Actief Grotesque** for text.

What makes it worth reading:

- **Actions as families.** `--wt-color-{base, neutral, upsell, destructive}-{enabled, hover, active,
  tint}` — four intents, each with three states and a tint.
- **Full ramps with odd steps.** `--wt-color-blue-66`, `-gray-55`, `-red-65` — steps chosen for
  contrast, not round numbers.
- **Darken tints as tokens.** `--wt-color-tint-darken-05` to `-95`, plus
  `--wt-color-interaction-darken-light` `rgba(0,0,0,.05)`.

#### Primary tasks
- Send or request files; sign up or log in.
- Explore features, pricing and use cases.

### Brand Narrative

A tool for sending big files that also wants to be a home for creative work — editorial stories, a
creator guide, advertising for brands — with a restrained interface so the work and the transfer
stay in front.

### Principles

- **Simplest way to send big files.** Its own line.
- **Business as a force for good.**
- **Four intents, three states.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `wetransfer.com`: 225 root custom properties — `--wt-*` 188,
`--banner-*` 32, `--modal-*` 5. All first-party.

### Base (blue)

- **Base** (`#3767ea`) — `--wt-color-base-enabled`, `--wt-color-blue-66`.
- **Base hover** (`#4e7df7`) — also the focus colour · **Base active** (`#1842ce`) · **Base tint**
  (`#f5f8ff`).

### Neutral (charcoal)

- **Neutral** (`#353535`) → hover (`#464646`) → active (`#161616`) · **Neutral tint** (`#f1f1f1`).

### Upsell and destructive

- **Upsell** (`#8e21cc`) → hover (`#a035e2`) → active (`#650095`).
- **Destructive** (`#b82b00`).

### Ink and surfaces

- **Foreground** (`#161616`) — `--wt-color-gray-95`; 24 `<p>` elements.
- **Text muted** (`#676767`) — `--wt-color-gray-70`.
- **Canvas** (`#ffffff`) · **Gray 10** (`#f9f9f9`) · **Gray 30** (`#d6d6d6`).

### Signals

**Success** `#3a9249` · **Warning** `#fbc738`.

## Typography

### Font family

**GT Super WT** (900) for display and **Actief Grotesque** (400, 500, 900) for text; both load
(`document.fonts`).

### Scale

Navigation and buttons 14px/500.

## Layout

- The home page is the product: an app sidebar (Send, Request, Sign, Albums) beside the transfer
  area, with a marketing navigation bar.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; darken tints (`rgba(0,0,0,.05)` upward) mark interaction.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://wetransfer.com/ (live homepage — 225 root custom properties read via `getComputedStyle`; GT Super WT and Actief Grotesque loaded; two components measured at rest, hover, pressed and focus, captured 2026-09-26); https://wetransfer.com/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-26); https://wetransfer.com/explore (company page — "The simplest way to send big files", millions of people a month, editorial and advertising, read 2026-09-26); https://wetransfer.com/explore/legal/terms (Terms of Service — notice address Nieuwezijds Voorburgwal 162, 1012 SJ Amsterdam, the Netherlands, read 2026-09-26)

## Components

Measured with focus under a real Tab key and a hover counted only when `:hover` matched. Cookie
consent rejected; a terms-agreement dialog was never answered.

- **Sign up** — **`#353535`**, `#f1f1f1` 14px/500, 8px, 32px. Hover **`#464646`** (white label),
  press **`#161616`**; focus a **4px `#464646`** ring.
- **Navigation link** — Log in: `#353535` 14px/500. Hover and press **`#676767`**; focus a **1px
  `#4e7df7`** outline with a soft blue glow.

### Radius

8px on buttons; 12px on app sidebar items.

### States

Hover: charcoal lifts to `#464646`; links grey to `#676767`. Press: `#161616`. Focus: a 4px charcoal
ring on buttons, a 1px blue outline on links.

## Do's and Don'ts

### Do
- Give every action intent enabled, hover, active and tint values.
- Use charcoal `#353535` for neutral actions and blue `#3767ea` for the product's base action.
- Pair GT Super WT display with Actief Grotesque text.

### Don't
- Don't use purple outside upsell moments.
- Don't use pure black; the darkest ink is `#161616`.
- Don't invent in-between ramp steps; use the published ones.

## Voice & Tone

Playful and plain — "Hey there, big file mover". Not assessed further.

## Agent Prompt Guide

### Quick Color Reference
`#3767ea` WeTransfer blue · `#4e7df7` hover/focus · `#1842ce` active · `#353535` charcoal ·
`#161616` ink · `#676767` muted · `#8e21cc` upsell · `#f9f9f9` surface

### Example Component Prompts
- "A 32px `#353535` button, `#f1f1f1` 14px/500 Actief Grotesque, 8px radius; hover `#464646`, press
  `#161616`; focus a 4px `#464646` ring."
- "A text link in `#353535` that greys to `#676767` on hover, with a 1px `#4e7df7` focus outline."

## Governance

### Known Gaps

- **Contrast, `link-nav`.** Text `#353535` on `#00000000` measures 1.71:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
