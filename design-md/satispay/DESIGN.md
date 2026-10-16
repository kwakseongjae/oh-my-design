---
name: Satispay
colors:
  brand: '#ff3d00'
  brand-hover: '#e53700'
  brand-pressed: '#b52b00'
  brand-100: '#ffd8cc'
  primary: '#290402'
  foreground: '#290402'
  text-body: '#3e3e3e'
  text-muted: '#707272'
  text-placeholder: '#979797'
  off-white: '#fffbef'
  canvas: '#ffffff'
  surface-elevated: '#f6f6f6'
  surface-canvas: '#e5e5e5'
  stroke: '#dcdcdc'
  secondary: '#ededed'
  ondark: '#2c2c2c'
  lilac: '#a493f6'
  sage: '#c6ef5d'
  mint: '#56ab2b'
  danger: '#ff1414'
typography:
  button:
    fontSize: 14px
    fontWeight: 500
    use: header buttons
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  pill: 9999px
components:
  button-signup:
    type: button
    backgroundColor: '#290402'
    textColor: '#fffbef'
    rounded: 12px
    height: 48px
    typography: 14px / 500
    shadow: rgba(41,4,2,0.08) 0 2px 8px
    hover: '#290402'
    use: Iscriviti in the header — aubergine with an off-white label and a soft shadow. Hover changes nothing (pseudo-elements included); focus adds Tailwind's default slate ring.
    padding: 8px 16px
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: 'shadow transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, #94a3b8 0px 0px 0px 1px, rgba(41, 4, 2, 0.08) 0px 2px 8px 0px on :focus-visible'
  button-login:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#232323'
    rounded: 12px
    height: 48px
    typography: 14px / 500
    hover: '#ffffff'
    use: Accedi — white with a dark label and the same soft shadow; no hover change.
  nav-segment:
    type: button
    backgroundColor: transparent
    textColor: '#979797'
    rounded: 10px
    height: 37px
    typography: 14px / 500
    hover: 'rgba(0,0,0,0.05) + fg #290402'
    pressed: 'rgba(0,0,0,0.05) + fg #290402'
    use: Welfare, Negozi — audience tabs in grey that gain a 5% black wash and turn aubergine on hover and press; the active tab (Privati) is aubergine.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: Bricolage Grotesque
---

# Design System Inspiration of Satispay

## Overview

### Visual Theme & Atmosphere

Satispay is an Italian mobile payments app — pay in shops and online, save and invest. Its careers
page names Milan as "Il nostro quartier generale", with an office in Luxembourg that is home to
Satispay Europe, and says more than 750 people are changing how 6.5 million users pay, save and
invest.

The site is warm and confident: off-white **`#fffbef`** and white, a dark aubergine **`#290402`** for
titles and the sign-up button, and Satispay's vivid orange-red **`#ff3d00`** in bold brand blocks.
Headlines are set in **Bricolage Grotesque**; buttons are 12px-rounded with a soft warm shadow.

What makes it worth reading:

- **A brand scale named after the brand.** `--ds-satispay-50` … `-900` runs from `#ffece5` to
  `#3d0f00` around `#ff3d00`.
- **Action tokens with states.** `--ds-action-primary-bg` `#ff3d00` → `-hover` `#e53700` → `-pressed`
  `#b52b00`; secondary and on-dark actions follow the same pattern.
- **Aubergine instead of black.** Titles (`--ds-text-title`) and the sign-up button use `#290402`.

#### Primary tasks
- Download the app; sign up.
- Explore Satispay for individuals, welfare and shops; sign in.

### Brand Narrative

Satispay grew from Milan into a payments app for millions of users across Europe. Its site is warm
rather than corporate — off-white, aubergine and a bold orange — with a characterful grotesque for
headlines and a compact token set that spells out action states.

### Principles

- **Warm, not corporate.** Off-white and aubergine instead of white and black.
- **Orange is Satispay.** Bold blocks and primary actions.
- **States in tokens.** Base, hover and pressed for every action.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `satispay.com/it-it`: 239 root custom properties — `--ds-*` 87
(Satispay's) and Tailwind v4 defaults (`--tw-*`, `--text-*`, `--leading-*`, `--tracking-*`,
`--container-*`, `--default-*`), which are excluded.

### Orange

- **Brand** (`#ff3d00`) — `--ds-satispay-500`, `--ds-action-primary-bg`; 25 orange blocks on the page.
- **Brand hover** (`#e53700`) — `--ds-action-primary-bg-hover`.
- **Brand pressed** (`#b52b00`) — `--ds-action-primary-bg-pressed`.
- **Brand 100** (`#ffd8cc`) — tinted panels.

### Aubergine and greys

- **Primary** (`#290402`) — `--ds-dark-aubergine`, `--ds-text-title`; the sign-up button.
- **Foreground** (`#290402`) — 28 `<p>` elements; body copy elsewhere is `--ds-text-body` **`#3e3e3e`**.
- **Text muted** (`#707272`) · **Placeholder** (`#979797`).
- **Off-white** (`#fffbef`) — `--ds-off-white`, `--ds-action-primary-text`.
- **Canvas** (`#ffffff`) · **Surface elevated** (`#f6f6f6`) · **Surface canvas** (`#e5e5e5`) ·
  **Stroke** (`#dcdcdc`) · **Secondary** (`#ededed`) · **On dark** (`#2c2c2c`).

### Accents

**Lilac** `#a493f6` · **Sage** `#c6ef5d` · **Mint** `#56ab2b` · **Danger** `#ff1414`.

## Typography

### Font family

**Bricolage Grotesque** (variable, 200–800) on headings, loaded (`document.fonts`). Body text uses
the system UI stack; Inter also loads.

### Scale

Header buttons are 14px/500.

## Layout

- Spacing in 4px steps (`--ds-spacing-1` 4px … `-20` 80px).
- Off-white and white sections with orange brand blocks.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`--ds-shadow-1/2/3`, from a faint layered shadow to `0 25px 50px -12px #00000040`. Buttons carry
`rgba(41,4,2,0.08) 0 2px 8px`, tinted with the aubergine.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.satispay.com/it-it/ (live homepage — 239 root custom properties read via `getComputedStyle`, Tailwind excluded; Bricolage Grotesque loaded; three components measured at rest, hover, pressed and focus after declining cookies, captured 2026-09-26); https://www.satispay.com/it-it/zz-this-does-not-exist (nonsense-path control — soft 404 "Pagina non trovata", 30 KB vs 143 KB for a real page, read 2026-09-26); https://www.satispay.com/it-it/chi-siamo/ (Satispay careers — Milan headquarters, Luxembourg office for Satispay Europe, 750+ people, 6.5 million users, read 2026-09-26)

## Components

Measured after declining cookies (Cookiebot), focus read under a real Tab key, and a hover counted
only when `:hover` matched; background-image, text-decoration and pseudo-elements were compared too.

- **Sign-up** — Iscriviti: **`#290402`**, off-white label, 12px, 48px, 14px/500, shadow
  `rgba(41,4,2,0.08) 0 2px 8px`. Hover changes nothing. Focus adds a 1px ring in Tailwind's default
  slate `#94a3b8`.
- **Login** — Accedi: `#ffffff`, `#232323` label, same shape and shadow; no hover change.
- **Audience tabs** — Welfare, Negozi: grey `#979797`, 10px, 37px. Hover and press add a 5% black
  wash and turn the label **`#290402`**.

### Radius

`--ds-radius-2` 8px · `-3` 12px (buttons) · `-4` 16px · `-6` 24px · `-full`.

### States

Hover: audience tabs gain a 5% wash and turn aubergine; the header buttons do not change. Focus: a
1px slate ring (framework default) or the browser's ring.

Live state probe, 2026-10-16 (`https://www.satispay.com/it-it/`), `button-signup`: pressed — no visible change (measured 2026-10-16); focus — shadow transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, transparent 0px 0px 0px 0px, #94a3b8 0px 0px 0px 1px, rgba(41, 4, 2, 0.08) 0px 2px 8px 0px.

## Do's and Don'ts

### Do
- Use orange `#ff3d00` for brand blocks and primary actions, stepping to `#e53700` and `#b52b00`.
- Use aubergine `#290402` instead of black for titles and dark buttons.
- Tint shadows with the aubergine.

### Don't
- Don't count Tailwind's defaults as Satispay tokens.
- Don't use pure black for titles.
- Don't treat the slate focus ring as a brand colour; it is Tailwind's default.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#ff3d00` orange · `#e53700` / `#b52b00` hover / pressed · `#290402` aubergine · `#fffbef`
off-white · `#3e3e3e` body · `#f6f6f6` surface · `#a493f6` lilac · `#c6ef5d` sage

### Example Component Prompts
- "A 48px aubergine `#290402` button, off-white `#fffbef` 14px/500 label, 12px radius, shadow
  `rgba(41,4,2,0.08) 0 2px 8px`."
- "An orange `#ff3d00` brand block with a Bricolage Grotesque headline in off-white."
