---
name: n8n
colors:
  brand-pink: '#ea4b71'
  cta-from: '#fd8925'
  cta-to: '#ff0c00'
  primary-600: '#ee4f27'
  primary-400: '#f96e49'
  secondary-orange: '#ff9b26'
  button-primary-from: '#077ac7'
  button-primary: '#6b21ef'
  tertiary-from: '#a3a3a3'
  tertiary: '#bcbcbc'
  midnight-navy: '#0e0918'
  dark-navy: '#1b1728'
  deep-navy: '#1f192a'
  slate-blue: '#48556a'
  hazy-white: '#f7f6fa'
  text-primary: '#d1cece'
  text-secondary: '#9d9797'
  heading: '#ffffff'
  green: '#35a670'
typography:
  heading:
    fontSize: 48px
    fontWeight: 400
    use: section headings (--text-headline-md 48px)
  body:
    fontSize: 14px
    fontWeight: 400
    use: buttons; navigation 15px
rounded:
  md: 8px
  lg: 16px
  xl: 24px
components:
  button-cta:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 0 20px
    typography: 14px / 400
    hover: rgba(255,255,255,0.12)
    pressed: rgba(255,255,255,0.12)
    use: 'Get started for free — a 30° gradient from #fd8925 to #ff0c00 (--color-button-cta-*); hover and press lay a 12% white layer over it.'
  button-glass:
    type: button
    backgroundColor: rgba(163,163,163,0.2)
    textColor: '#ffffff'
    rounded: 8px
    height: 40px
    padding: 0 20px
    typography: 14px / 400
    hover: rgba(188,188,188,0.2)
    pressed: rgba(188,188,188,0.2)
    use: 'Talk to sales — translucent grey (the tertiary pair #a3a3a3 → #bcbcbc at 20%) on the dark page.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: geomanist
---

# Design System Inspiration of n8n

## Overview

### Visual Theme & Atmosphere

"n8n is a free and open node-based Workflow Automation Tool. It can be self-hosted, easily extended,
and used with third party web applications or custom in-house tools." The press page adds that "n8n
is headquartered in Berlin and was founded by Jan Oberhauser in 2019", and that its name is always
lowercase, pronounced "n eight n". Its imprint names **n8n GmbH**, Novalisstr. 10, 10115 Berlin.

The site is dark and warm: a midnight navy page **`#0e0918`**, navy panels (`#1b1728`, `#1f192a`),
soft grey text **`#d1cece`** under white headings, n8n's pink **`#ea4b71`**, and an orange-to-red
gradient **`#fd8925 → #ff0c00`** on the main call to action. Type is **Geomanist**.

What makes it worth reading:

- **Gradient buttons as token pairs.** `--color-button-cta-from` / `--color-button-cta`,
  `--color-button-primary-from` (`#077ac7`) / `--color-button-primary` (`#6b21ef`), and
  `--color-button-tertiary-from` / `-tertiary` — each button is a two-stop gradient.
- **Navy shades named like a palette.** Midnight, deep, dark, dark-lighten and slate-blue navies.
- **A headline scale in pixels.** `--text-headline-xxs` 28px up to `-xxl` 80px, all at 100% line
  height.

#### Primary tasks
- Get started for free; sign in.
- Explore use cases, docs and community; talk to sales.

### Brand Narrative

A Berlin-built, fair-code automation tool that you can self-host. The site is a night-time canvas —
midnight navy and grey — lit by a pink logo and a warm gradient button.

### Principles

- **Automate without limits.** The page title's promise.
- **Self-hostable and extensible.**
- **Gradients as buttons.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `n8n.io`: 190 root custom properties — `--color-*` 56, `--text-*`
29, `--radius-*` 9, `--font-*` 9 … Tailwind's `--tw-*` (29) and the carousel library's `--vc-*` (19)
are excluded.

### Brand and gradients

- **Brand pink** (`#ea4b71`) — `--color-base-pink`.
- **CTA gradient** `#fd8925` → `#ff0c00` — `--color-button-cta-from`, `--color-button-cta`.
- **Primary** `#ee4f27` (600), `#f96e49` (400) · **Secondary orange** `#ff9b26`.
- **Primary button gradient** `#077ac7` → `#6b21ef`.
- **Tertiary** `#a3a3a3` → `#bcbcbc`.

### Navy and text

- **Midnight navy** (`#0e0918`) — the page · **Dark navy** (`#1b1728`) · **Deep navy** (`#1f192a`) ·
  **Slate blue** (`#48556a`) · **Hazy white** (`#f7f6fa`).
- **Heading** (`#ffffff`) · **Text primary** (`#d1cece`) · **Text secondary** (`#9d9797`).
- **Green** (`#35a670`) — excellent scores.

## Typography

### Font family

**Geomanist** (300, 400, plus a Book cut), `geomanist, ui-sans-serif, system-ui, sans-serif`,
loaded (`document.fonts`).

### Scale

Headlines 28–80px at 100% line height (section H2 48px/400); body 16–18px at 150%; navigation 15px;
buttons 14px.

## Layout

- A dark header, a hero with the gradient CTA, a workflow canvas illustration and use-case tabs.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Translucent white panels (`rgba(255,255,255,.03)`–`.1`) on the navy ground; blur tokens exist.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://n8n.io/ (live homepage — 190 root custom properties read via `getComputedStyle`, Tailwind and carousel variables excluded; Geomanist loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://n8n.io/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://n8n.io/press/ (press — "a free and open node-based Workflow Automation Tool", headquartered in Berlin, founded by Jan Oberhauser in 2019, read 2026-09-27); https://n8n.io/imprint/ (imprint — n8n GmbH, Novalisstr. 10, 10115 Berlin, read 2026-09-27)

## Components

Measured with a hover counted only when `:hover` matched; consent declined. Focus showed only the
browser's ring and is not recorded.

- **CTA** — Get started for free: a **30° `#fd8925 → #ff0c00` gradient**, white 14px, 8px, 40px.
  Hover and press lay a **12% white** layer over the gradient.
- **Glass button** — Talk to sales: **`rgba(163,163,163,0.2)`** → **`rgba(188,188,188,0.2)`** on
  hover.

### Radius

8px buttons; `--radius-small` 1rem, `--radius-default` 1.5rem, `--radius-huge` 2rem on cards.

### States

Hover: a 12% white layer on the gradient CTA; the glass button brightens. Press: the same. Focus:
the browser's ring (not recorded).

## Do's and Don'ts

### Do
- Put the orange-to-red gradient on the one main CTA, and brighten it with a white layer on hover.
- Use the navy shades for the page and panels.
- Write the name lowercase — n8n.

### Don't
- Don't use flat orange where the CTA gradient belongs.
- Don't use pure black backgrounds; the page is midnight navy.
- Don't treat the carousel library's variables as n8n tokens.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#ea4b71` n8n pink · `#fd8925 → #ff0c00` CTA · `#0e0918` midnight · `#1b1728` navy · `#d1cece` text ·
`#9d9797` secondary · `#077ac7 → #6b21ef` primary gradient · `#35a670` green

### Example Component Prompts
- "A 40px button with a 30° `#fd8925 → #ff0c00` gradient, white 14px Geomanist, 8px radius; hover adds
  a 12% white layer."
- "A glass button at `rgba(163,163,163,0.2)` on `#0e0918`."

## Governance

### Known Gaps

- **Contrast, `button-glass`.** Text `#ffffff` on `#a3a3a333` measures 2.52:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
