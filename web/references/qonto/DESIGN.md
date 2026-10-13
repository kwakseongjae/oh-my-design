---
name: Qonto
colors:
  primary: '#050505'
  foreground: '#050505'
  grey-900: '#1a1a1a'
  grey-800: '#262626'
  grey-700: '#3d3d3d'
  text-secondary: '#616161'
  grey-500: '#8f8f8f'
  grey-300: '#cccccc'
  grey-200: '#e0e0e0'
  grey-100: '#e8e8e8'
  surface: '#f5f5f5'
  canvas: '#ffffff'
  pressed: '#373737'
  blueberry: '#3275c4'
  blueberry-product-100: '#dceaff'
  blueberry-product-50: '#e0eafb'
  blueberry-1000: '#093b75'
  blueberry-product-1000: '#163470'
  plum: '#6e45e3'
  plum-50: '#d5c8ff'
  peach-50: '#ffc9a6'
  sakura-50: '#ffdfea'
  mint-50: '#c8ffec'
  mustard-50: '#faffa4'
  success: '#0f7a3d'
  danger: '#b81818'
  warning: '#b04e10'
typography:
  body:
    fontSize: 16px
    use: buttons, navigation and tabs, 400
  t20:
    fontSize: 20px
    use: '--text-20'
  t22:
    fontSize: 22px
    use: '--text-22'
  t40:
    fontSize: 40px
    use: '--text-40'
  t72:
    fontSize: 72px
    use: '--text-72'
  t88:
    fontSize: 88px
    use: '--text-88'
  t128:
    fontSize: 128px
    use: '--text-128, the largest display size'
rounded:
  sm: 4px
  md: 8px
  lg: 24px
  xl: 32px
  pill: 9999px
components:
  button-primary:
    type: button
    backgroundColor: '#050505'
    textColor: '#ffffff'
    rounded: 8px
    height: 48px
    padding: 12px 16px
    typography: 16px / 400
    hover: rgba(29,29,27,0.92)
    pressed: '#373737'
    use: 'Démarrer on a pricing plan — solid near-black; hover fades it slightly, press lightens to #373737. Focus is the browser''s ring.'
  button-outline:
    type: button
    backgroundColor: transparent
    textColor: '#050505'
    border: '#050505'
    rounded: 8px
    height: 48px
    padding: 11px 16px
    typography: 16px / 400
    hover: rgba(29,29,27,0.08)
    pressed: rgba(29,29,27,0.12)
    use: The outlined Démarrer on other plan cards — a near-black wash at 8% on hover and 12% on press.
  tab:
    type: button
    backgroundColor: transparent
    textColor: '#3d3d3d'
    rounded: 4px
    height: 44px
    padding: 10px 16px
    typography: 16px / 400
    hover: 'fg #000000'
    pressed: 'fg #000000'
    use: The pricing segment tabs (TPE/PME …) — the label darkens to black on hover.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: QontoSans
---

# Design System Inspiration of Qonto

## Overview

### Visual Theme & Atmosphere

Qonto is a business account and finance tool for small companies and freelancers — "Made in France in
2017", in its own words, and now serving more than 600,000 customers across eight European markets.
Its founders, Alexandre Prot and Steve Anavi, "set out to build the solution they wish they'd had:
transparent, efficient, and designed around" the people running small businesses. Its newsroom now
describes Qonto as a finance management solution for SMEs, adding tools such as invoicing and
bookkeeping to the account.

The site is confident and editorial: near-black **`#050505`** and white, set in large sizes — display
steps run to **128px** — in **QontoSans**, the company's own typeface, with full-bleed dark and light
sections alternating down the page. Colour comes in soft pastel families — blueberry, plum, peach,
sakura, mint, mustard — used for tints and highlights rather than for the actions, which stay black.

What makes it worth reading:

- **The brand is black.** `--color-primary-black` `#050505` is the ink, the primary button and the
  hover wash; the brand colour is typographic, not chromatic.
- **Pastels come as families with highlights.** Each has 50–1000 steps and a translucent highlight
  (`--color-highlight-plum` `#d5c8ff80`, `--color-highlight-mint` `#c8ffec80`).
- **One sticker shadow.** `--shadow-xl` is `-4px 4px 0 0 #1d1d1b` — a hard, unblurred offset, unlike the
  soft shadows beside it.

#### Primary tasks
- Open a business account; compare plans and prices.
- Learn about cards, payments, invoicing and financing.

### Brand Narrative

Qonto was built by founders frustrated with traditional banking, for small businesses that had been
underserved by it, and its site speaks with the confidence of a company that has grown to hundreds of
thousands of customers: black and white, huge type in its own face, and colour held back for soft
tints and highlights. The system is a Tailwind build with a thin, deliberate layer of brand tokens on
top — a black, a grey ramp, six pastel families and a type scale that runs off the chart.

### Principles

- **Black is the brand.** Colour is for tint, not for action.
- **Type does the talking.** QontoSans, very large.
- **Soft, then one hard edge.** Pastels and soft shadows, with a single sticker shadow for accents.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `qonto.com/fr` and `/fr/pricing`: 287 root custom properties. The
site is built with Tailwind v4, and **Tailwind's own values are excluded**: 32 `--tw-*`, 57
`--color-*` entries that are Tailwind's stock `oklch()` palette, the stock `--radius-*`, `--font-mono`
and font weights, and the stock `--text-*` rem scale. About 96 colour tokens remain, Qonto's own.

### Black and grey

- **Primary** (`#050505`) — `--color-primary-black`. The primary button, and the ink.
- **Foreground** (`#050505`) — 1,368 text elements. Plain `#000000` also appears on hundreds of
  elements; both blacks are in use.
- **Pressed** (`#373737`) — the primary button pressed.
- `--color-grey-*`: **`#1a1a1a`** (900) · **`#262626`** (800) · **`#3d3d3d`** (700, the tabs) ·
  **`#616161`** (600, secondary text and link hover) · **`#8f8f8f`** (500) · **`#cccccc`** (300) ·
  **`#e0e0e0`** (200) · **`#e8e8e8`** (100) · **`#f5f5f5`** (50, surface) · **Canvas** `#ffffff`.

### Pastel families

- **Blueberry** (`#3275c4`) — 500; with **`#dceaff`** (`blueberry-product-100`) and **`#e0eafb`**
  (`-product-50`) as the pricing-card tints (70 elements on the pricing page), and **`#093b75`**
  (`blueberry-1000`) and **`#163470`** (`blueberry-product-1000`) as dark bands.
- **Plum** (`#6e45e3`) with **`#d5c8ff`** at 50. `--color-plum-dark` and `--color-blueberry-dark` are
  the same `#3020d8`.
- **Peach** 50 **`#ffc9a6`** · **Sakura** 50 **`#ffdfea`** · **Mint** 50 **`#c8ffec`** · **Mustard** 50
  **`#faffa4`** — each with a matching translucent highlight at 50% (`#ffc9a680`, `#ffdfea80`,
  `#c8ffec80`, `#faffa480`).

### Status

**Success** `#0f7a3d` · **Danger** `#b81818` (`--color-red-1000`) · **Warning** `#b04e10`.

## Typography

### Font family

**QontoSans** — `--font-sans: "QontoSans"` — on body, headings and buttons. 300, 400, 600 and 700
load (`document.fonts`), self-hosted as `woff2` under `qonto.com/blog/assets/`; 900 is declared and did
not load. PolySans and Yrsa are declared in the same stylesheet and did not load on the pages
measured.

### Scale

Qonto adds pixel display steps to Tailwind's rem scale: **`--text-20`** 20px · `-22` 22px · `-40` 40px ·
`-72` 72px · `-88` 88px · **`-128`** 128px. Buttons, navigation and tabs are 16px at 400 — the weight
stays regular even on actions.

## Layout

- Full-bleed sections alternate dark and light.
- Cards at 24px radius; pricing plans on blueberry tints.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`--shadow-sm` and `--shadow-md` are soft, conventional; `--shadow-lg` is `1px 0 10px 2px #0000001a`;
**`--shadow-xl`** is a hard offset, `-4px 4px 0 0 #1d1d1b`, for accent cards.

## Motion & Easing

Fifteen `--animate-*` shorthands are declared — `fadeinUp` with four delays, `navbarIn`,
`overlayFade`, `highlight`, `arrow-enter/exit-250` among them — alongside Tailwind's stock easings.

---

**Tier 1 sources:** https://qonto.com/fr (live homepage — 287 root custom properties read via `getComputedStyle`, Tailwind v4 values excluded; QontoSans loaded, captured 2026-09-26); https://qonto.com/fr/pricing (pricing page — three components measured at rest, hover, pressed and focus after dismissing the consent banner, captured 2026-09-26); https://qonto.com/zz-this-does-not-exist (nonsense-path control — "404 Page not found — Qonto", captured 2026-09-26); https://qonto.com/en/about (About Qonto — "Made in France in 2017", 8 European markets, 600,000+ customers, founders Alexandre Prot and Steve Anavi, read 2026-09-26); https://qonto.com/en/press (Qonto newsroom — "Launched in 2017 by Alexandre Prot and Steve Anavi", read 2026-09-26)

## Components

Three components, measured on the pricing page after dismissing the consent banner (Didomi), focus
read under a real Tab key.

- **Primary** — Démarrer: `#050505`, white 16px/400, **8px** radius, 48px, `12px 16px`. Hover fades
  it to `rgba(29,29,27,0.92)`; press lightens it to **`#373737`**.
- **Outline** — the other Démarrer: transparent with a `#050505` border and label, 48px. Hover washes it
  with `rgba(29,29,27,0.08)`, press with `rgba(29,29,27,0.12)`.
- **Tabs** — the plan segments: `#3d3d3d` label, 4px radius, 44px. Hover turns the label **`#000000`**.

Both button variants take their states from the same near-black `#1d1d1b` at different opacities. In
the transparent header on the home page, the account-opening button appears white with a black label.

### Focus is the browser's

Every measured control shows Chrome's `auto` ring under `:focus-visible`. No focus colour is
recorded.

### Radius

Rendered: fully round ×71 (pills and avatars), **24px** ×42 (cards — not a Tailwind step), **8px** ×37
(buttons), 6px, 4px, 32px.

### States

Three components. Hover: the primary fades, the outline washes 8%, tabs turn black. Press: `#373737`
and a 12% wash. Focus is the browser's `auto` ring. The navigation's mega-menu triggers were not
measured. No disabled state was observed.

## Do's and Don'ts

### Do
- Use near-black `#050505` for actions and text; let pastels tint surfaces.
- Keep type regular weight on buttons and go very large for display.
- Use the hard `-4px 4px 0 #1d1d1b` shadow only for accent cards.

### Don't
- Don't count Tailwind's stock oklch palette as Qonto's colours.
- Don't use a pastel as a button colour.
- Don't treat the two blacks as interchangeable tokens — `--color-primary-black` is the authored one.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#050505` black · `#ffffff` white · `#f5f5f5` surface · `#3d3d3d` / `#616161` greys · `#3275c4`
blueberry · `#dceaff` blueberry tint · `#093b75` navy band · `#6e45e3` plum · pastels `#ffc9a6`
`#ffdfea` `#c8ffec` `#faffa4`

### Example Component Prompts
- "A 48px button: `#050505`, white 16px/400 QontoSans, 8px radius; hover `rgba(29,29,27,0.92)`, press
  `#373737`."
- "A pricing card on `#dceaff`, 24px radius, a 72px QontoSans price."

## Governance

### Known Gaps

- **Contrast, `button-outline`.** Text `#050505` on `#00000000` measures 1.03:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `tab`.** Text `#3d3d3d` on `#00000000` measures 1.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
