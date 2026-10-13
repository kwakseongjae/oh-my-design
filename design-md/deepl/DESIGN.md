---
name: DeepL
colors:
  brand: '#0f2b46'
  brand-hover: '#091a2b'
  mint-pressed: '#6cf1c9'
  primary: '#0070c9'
  primary-hover: '#0053a9'
  primary-pressed: '#00388d'
  primary-muted: '#e0f0ff'
  alternative-border: '#6d5cd8'
  foreground: '#191919'
  text-strong: '#292929'
  text-secondary: '#6f6f6f'
  canvas: '#ffffff'
  surface-secondary: '#f5f5f5'
  basic-pressed: '#e5e5e5'
  border-hover: '#c6c6c6'
  hover-light: '#f8f8f8'
  success: '#007f59'
  danger: '#c34331'
  warning: '#c9a800'
typography:
  heading:
    fontSize: 32px
    fontWeight: 400
    use: section headings
  button:
    fontSize: 18px
    fontWeight: 400
    use: header pills
rounded:
  md: 8px
  pill: 40px
components:
  button-brand:
    type: button
    backgroundColor: '#0f2b46'
    textColor: '#ffffff'
    rounded: 40px
    height: 45px
    padding: 13px 16px 14px
    typography: 18px / 400
    hover: '#091a2b'
    pressed: '#6cf1c9'
    use: 'Start free trial — brand navy pill that deepens on hover and flashes mint #6cf1c9 with navy text when pressed.'
  button-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0f2b46'
    rounded: 40px
    height: 45px
    padding: 13px 16px 14px
    typography: 18px / 400
    hover: '#f8f8f8'
    pressed: '#6cf1c9'
    use: Log in — white pill with navy text; the same mint press.
  tab-product:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#292929'
    rounded: 8px
    height: 40px
    padding: 8px 16px
    typography: 16px / 600
    shadow: 'inset 0 0 0 1px #e5e5e5'
    hover: '#f5f5f5'
    pressed: '#e5e5e5'
    focus: 'outline 2px solid #0070c9'
    use: 'Translate files / speech / Use API — basic action tabs (--dui-color-background-action-basic-*) with a 1px inset border that darkens to #c6c6c6; the active tab is #e0f0ff with #0053a9 text.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: robotoLatin
---

# Design System Inspiration of DeepL

## Overview

### Visual Theme & Atmosphere

"DeepL is on a mission to help businesses fully solve language with AI." It was "founded in Cologne
in 2017 by CEO Jarek Kutylowski on the conviction that language should never be a barrier", and has
grown from a single translation product into a Language AI company used by more than 200,000
business teams and millions of individuals. Its publisher notice names **DeepL SE**, Maarweg 165,
50825 Cologne.

The translator page is white and quiet: near-black text **`#191919`**, DeepL's deep navy
**`#0f2b46`** on the brand pills, a working blue **`#0070c9`** for primary actions and links, and a
fresh mint **`#6cf1c9`** that appears when a pill is pressed. Type is **Roboto** (served as
`robotoLatin`).

What makes it worth reading:

- **A large, dual-theme token system.** 1,094 `--dui-*` properties, each colour declared as
  `light-dark(<light>, <dark>)` with a `-hex` twin — `--dui-color-background-action-primary`
  `light-dark(#0070c9,#0070c9)`.
- **Complete action families.** Basic, ghost, primary, danger and brand actions with hover,
  pressed and disabled values; borders and text follow the same pattern.
- **A rebrand layer.** 333 `--dui-color-rebrand-*` properties sit alongside the current set.

#### Primary tasks
- Translate text, files or speech; use the API.
- Start a free trial; log in.

### Brand Narrative

A Cologne company that set out to remove language as a barrier. The translator stays calm — white,
near-black, a working blue — with the brand's navy and a flash of mint when you commit to an action.

### Principles

- **Language should never be a barrier.**
- **Every colour for both themes.** `light-dark()` throughout.
- **Complete action states.**

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `deepl.com/en/translator`: 1,551 root custom properties —
`--dui-*` 1,094, `--color-*` 219, `--csstools-*` 112 (build helpers) and Tailwind's `--tw-*` (31,
excluded).

### Brand

- **Brand** (`#0f2b46`) — `--dui-color-brand`, `--dui-color-background-action-brand`.
- **Brand hover** (`#091a2b`) — the Start free trial pill on hover.
- **Mint pressed** (`#6cf1c9`) — the pills' pressed fill.

### Primary blue

- **Primary** (`#0070c9`) → hover (`#0053a9`) → pressed (`#00388d`) — actions and links.
- **Primary muted** (`#e0f0ff`) — active tabs · **Alternative border** (`#6d5cd8`).

### Neutrals

- **Foreground** (`#191919`) · **Text strong** (`#292929`) · **Text secondary** (`#6f6f6f`).
- **Canvas** (`#ffffff`) · **Surface secondary** (`#f5f5f5`) · **Basic pressed** (`#e5e5e5`) ·
  **Border hover** (`#c6c6c6`) · **Hover light** (`#f8f8f8`).

### Status

**Success** `#007f59` · **Danger** `#c34331` · **Warning** `#c9a800`.

## Typography

### Font family

**Roboto**, self-hosted as `robotoLatin` (300–700), with Noto Sans KR loaded for Korean.

### Scale

H2 32px/400; H1 (the translator title) 20px/600; tabs 16px/600; header pills 18px/400.

## Layout

- A light header with navigation and two pills, product tabs, then the two-pane translator.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Flat; 1px inset borders define controls.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.deepl.com/en/translator (live product page — 1,551 root custom properties read via `getComputedStyle`, Tailwind excluded; Roboto loaded as robotoLatin; three components measured at rest, hover, pressed and focus, captured 2026-09-27); https://www.deepl.com/en/zz-this-does-not-exist (nonsense-path control — HTTP 404 in the browser, read 2026-09-27); https://www.deepl.com/en/about-us (About — mission, founded in Cologne in 2017, 200,000+ business teams, read 2026-09-27); https://www.deepl.com/en/publisher (publisher — DeepL SE, Maarweg 165, 50825 Cologne, HRB 104617, read 2026-09-27)

## Components

Measured with focus under a real Tab key and a hover counted only when `:hover` matched; consent
rejected.

- **Brand pill** — Start free trial: **`#0f2b46`**, white 18px/400, 40px radius, 45px. Hover
  **`#091a2b`**; press flips to **`#6cf1c9`** with navy text.
- **Outline pill** — Log in: white, navy text. Hover **`#f8f8f8`**; press **`#6cf1c9`**.
- **Product tab** — Translate files, speech, Use API: white with a 1px `#e5e5e5` inset border,
  `#292929` 16px/600, 8px. Hover **`#f5f5f5`** (border `#c6c6c6`), press **`#e5e5e5`**; focus a
  **2px `#0070c9`** outline. The active tab is `#e0f0ff` with `#0053a9` text.

### Radius

40px pills in the header; 8px tabs and cards.

### States

Hover: navy deepens; white pills and tabs grey a step. Press: pills flash mint; tabs `#e5e5e5`. Focus:
a 2px `#0070c9` outline on tabs.

## Do's and Don'ts

### Do
- Use navy `#0f2b46` for brand pills and blue `#0070c9` for primary actions and links.
- Give every action hover, pressed and disabled values, declared for light and dark.
- Keep the mint `#6cf1c9` for the pressed moment.

### Don't
- Don't use mint as a resting fill.
- Don't use pure black; text is `#191919`.
- Don't replace inset borders with drop shadows.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#0f2b46` DeepL navy · `#6cf1c9` mint · `#0070c9` primary · `#0053a9` hover · `#e0f0ff` active ·
`#191919` ink · `#f5f5f5` surface · `#e5e5e5` border

### Example Component Prompts
- "A 45px navy `#0f2b46` pill, white 18px Roboto; hover `#091a2b`; pressed `#6cf1c9` with navy text."
- "A tab row of white 40px buttons with 1px `#e5e5e5` inset borders; active tab `#e0f0ff` with
  `#0053a9` text."
