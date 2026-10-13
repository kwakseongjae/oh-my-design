---
name: Dailymotion
colors:
  purple: '#6200ee'
  purple-700: '#8133f1'
  purple-deep: '#360083'
  lavender: '#c5a1f9'
  hover-surface: '#f2ebfe'
  gradient-pink-1: '#fab3f7'
  gradient-pink-2: '#f682f2'
  gradient-lavender: '#a2a2fb'
  decorative-selected: '#fde1fc'
  magenta-text: '#8108a6'
  lime: '#c2ff80'
  foreground: '#0d0d0d'
  text-secondary: '#2b2b2b'
  text-muted: '#767676'
  canvas: '#ffffff'
  surface-secondary: '#f8f8f8'
  surface-tertiary: '#f0f0f0'
  input-border: '#dadada'
  error: '#b72a1a'
typography:
  heading:
    fontSize: 28px
    fontWeight: 500
    use: page H1; DailySans 700 for card titles
  button:
    fontSize: 14px
    fontWeight: 500
    use: header buttons
rounded:
  md: 6px
components:
  button-gradient:
    type: button
    backgroundColor: transparent
    textColor: '#0d0d0d'
    rounded: 6px
    height: 40px
    padding: 0 16px
    typography: 14px / 500
    hover: '#f682f2'
    pressed: '#fde1fc'
    use: 'Se connecter — a 228° gradient #fab3f7 → #f682f2 → #a2a2fb (decorative-gradient tokens); hover paints a solid #f682f2 ::before; press #fde1fc.'
  button-secondary:
    type: button
    backgroundColor: '#f8f8f8'
    textColor: '#0d0d0d'
    rounded: 6px
    height: 40px
    padding: 0 16px
    typography: 14px / 500
    hover: '#f8f8f8'
    pressed: '#f0f0f0'
    use: 'Rechercher — light grey; hover adds a 0 0 8px rgba(13,13,13,.12) shadow; press #f0f0f0.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: ABCFavorit
    display: DailySans
---

# Design System Inspiration of Dailymotion

## Overview

### Visual Theme & Atmosphere

"The home for videos that matter." Dailymotion's mission page says it is "more than just a video
app": it builds "the next generation of media platforms designed to inspire millions of people to
grow and share a diverse and inclusive vision of the world", putting "listening, discovery, and
kindness back at the heart of interactions". Its legal notice names **Dailymotion SA**, 50 rue
Camille Desmoulins, 92130 Issy-les-Moulineaux, as the service provider in the EEA.

The site is white and light grey (`#f8f8f8`, `#f0f0f0`) with near-black text **`#0d0d0d`**, and a
playful accent world: a deep purple **`#6200ee`**, lavender, a pink-lavender gradient on the sign-in
button, and lime decorations. Type is **ABC Favorit**, with **DailySans** for titles.

What makes it worth reading:

- **Gradient borders as tokens.** `--action-border-active` `linear-gradient(46deg,#c5a1f9,#f66093)`,
  plus lavender, lime, mustard and turquoise variants.
- **Layered colour naming.** `--color-core-*` primitives (grayscale, purple, lime, states),
  `--color-currentcolors-*` for the current theme, and roles for buttons, interactive states,
  surfaces and effects.
- **Drop shadows as colour tokens.** `--color-effect-dropshadow-primary-1` … `-20` — ink at 1% to 20%.

#### Primary tasks
- Watch videos for you, explore, follow creators.
- Search; sign in.

### Brand Narrative

A French video platform repositioning around nuance, listening and kindness. Its interface keeps
neutral surfaces and lets gradients and a deep purple carry the personality.

### Principles

- **Videos that matter.**
- **Listening, discovery, kindness.**
- **Neutral surfaces, colourful accents.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `dailymotion.com/fr`: 434 root custom properties — `--color-*`
158, `--rem-*` 116, `--surface-*` 16, `--vertical-*` 14, `--notification-*` 10 … All first-party.

### Purple and decorative

- **Purple** (`#6200ee`) — `--color-text-decorative-1`, `--color-interactive-surface-selected`.
- **Purple 700** (`#8133f1`) · **Purple deep** (`#360083`) — hover border · **Lavender** (`#c5a1f9`).
- **Hover surface** (`#f2ebfe`).
- **Gradient** `#fab3f7` → `#f682f2` → `#a2a2fb` · **Decorative selected** (`#fde1fc`).
- **Magenta text** (`#8108a6`) — active and visited links · **Lime** (`#c2ff80`).

### Neutrals

- **Foreground** (`#0d0d0d`) · **Text secondary** (`#2b2b2b`) · **Text muted** (`#767676`).
- **Canvas** (`#ffffff`) · **Surface secondary** (`#f8f8f8`) · **Surface tertiary** (`#f0f0f0`) ·
  **Input border** (`#dadada`).
- **Error** (`#b72a1a`).

## Typography

### Font family

**ABC Favorit** (400, 500, 700) for text and **DailySans** (700) for titles; both load
(`document.fonts`).

### Scale

H1 28px/500; card titles 16px/700 DailySans; buttons 14px/500; small follow buttons 12px/500.

## Layout

- A slim header with search and sign-in, tabs (Pour toi, Explorer, Suivi), then a feed of video cards
  with creator follow buttons.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`--action-button-shadow` `0 0 0.5rem #0d0d0d1f`; drop-shadow colour tokens from 1% to 20%.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.dailymotion.com/fr (live homepage — 434 root custom properties read via `getComputedStyle`; ABC Favorit and DailySans loaded; two components measured at rest, hover and pressed, captured 2026-09-27); https://www.dailymotion.com/zz-this-does-not-exist (nonsense-path control — HTTP 200 with a not-found page, "Il semblerait que nous ayons perdu cette page", read 2026-09-27); https://about.dailymotion.com/en (About — "The home for videos that matter", mission, read 2026-09-27); https://www.dailymotion.com/legal/infos (legal notices — Dailymotion SA, 50 rue Camille Desmoulins, 92130 Issy-les-Moulineaux, read 2026-09-27)

## Components

Measured with a hover counted only when `:hover` matched. Focus showed only the browser's ring and
is not recorded.

- **Gradient button** — Se connecter: a **228° `#fab3f7 → #f682f2 → #a2a2fb`** gradient, `#0d0d0d`
  14px/500, 6px, 40px. Hover paints a solid **`#f682f2`**; press **`#fde1fc`**.
- **Secondary** — Rechercher: **`#f8f8f8`**. Hover adds a `0 0 8px rgba(13,13,13,.12)` shadow; press
  **`#f0f0f0`**.

### Radius

6px on buttons.

### States

Hover: the gradient turns solid pink; grey buttons gain a soft shadow. Press: pale pink `#fde1fc`;
grey `#f0f0f0`. Focus: the browser's ring (not recorded).

## Do's and Don'ts

### Do
- Keep the page neutral and put colour in accents: purple, lavender gradients, lime.
- Use gradient borders for active states.
- Set titles in DailySans and text in ABC Favorit.

### Don't
- Don't fill large areas with the purple.
- Don't use pure black; the ink is `#0d0d0d`.
- Don't flatten the sign-in gradient to one colour at rest.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#6200ee` purple · `#c5a1f9` lavender · `#f682f2` pink · `#fde1fc` pale pink · `#c2ff80` lime ·
`#0d0d0d` ink · `#f8f8f8` surface · `#8108a6` magenta link

### Example Component Prompts
- "A 40px button with a 228° `#fab3f7 → #f682f2 → #a2a2fb` gradient, `#0d0d0d` 14px/500 ABC Favorit,
  6px radius; hover solid `#f682f2`, press `#fde1fc`."
- "A light grey `#f8f8f8` button that gains a soft 8px shadow on hover."

## Governance

### Known Gaps

- **Contrast, `button-gradient`.** Text `#0d0d0d` on `#00000000` measures 1.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
