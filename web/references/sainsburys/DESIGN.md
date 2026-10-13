---
name: Sainsbury's
colors:
  primary: '#f06c00'
  primary-highlight: '#e55000'
  primary-light: '#ff9900'
  primary-surface: '#fef5f0'
  brand-2: '#7f0442'
  brand-2-dark: '#57002b'
  brand-2-light: '#a50052'
  foreground: '#404040'
  text-darker: '#262626'
  text-medium: '#737373'
  grey: '#8c8c8c'
  line: '#d8d8d8'
  surface: '#f2f2f2'
  canvas: '#ffffff'
  focus-blue: '#1976d2'
  blue-light: '#e8f1fb'
  green: '#2e7d32'
  red: '#d50000'
  yellow: '#ffd600'
typography:
  body-1:
    fontSize: 16px
    use: '--ln-font-stack-body-1 (Arial stack), 400'
  button:
    fontSize: 16px
    use: the rendered call to action, MaryAnn 800 (--ln-font-stack-button declares 1.125rem)
  body-2:
    fontSize: 18px
    use: '--ln-font-stack-body-2 (Arial stack), 400'
  nav:
    fontSize: 20px
    use: top navigation, MaryAnn 700
rounded:
  sm: 2px
  md: 4px
  pill: 20px
components:
  button-primary:
    type: button
    backgroundColor: '#f06c00'
    textColor: '#ffffff'
    rounded: 2px
    height: 47px
    padding: 12px 16px 13px
    typography: 16px / 800
    hover: '#f06c00'
    pressed: '#f06c00'
    focus: ring 0 0 0 3px rgba(25,118,210,0.7), bg rgba(229,80,0,0.8)
    use: Book a slot and Register — the orange call to action in MaryAnn ExtraBold. Hover changes nothing (with :hover confirmed). Focus draws the Luna focus ring, 3px of translucent blue, and deepens the fill toward --ln-color-palette-brand-1-highlight.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#404040'
    height: 52px
    padding: 11px 16px
    typography: 20px / 700
    hover: 'fg #e55000'
    pressed: 'fg #e55000'
    focus: 'fg #e55000, ring 0 0 0 3px rgba(25,118,210,0.7)'
    use: Top navigation (Groceries and siblings) in MaryAnn. The label turns the orange highlight on hover and focus; focus adds the blue ring.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: MaryAnn
---

# Design System Inspiration of Sainsbury's

## Overview

### Visual Theme & Atmosphere

Sainsbury's is a British supermarket that began, in its own words, when "John James and Mary Ann
Sainsbury welcomed their first customer" in 1869, with the aim "to provide good quality food at
affordable prices". J Sainsbury plc now also runs Argos and other retail brands; this reference is
the supermarket's own site, `sainsburys.co.uk`.

The site is built on **Luna**, Sainsbury's design system — its documentation is published as "Luna
Codebase" — and the homepage carries 364 of its tokens. The look is familiar from the stores: a
warm **orange `#f06c00`** for the actions that matter, a charcoal **`#404040`** for text and the
footer, white and pale grey surfaces, corners of just **2px**, and headings in **MaryAnn**, the
brand's own display face.

What makes it worth reading:

- **The focus ring is a token.** `--ln-modifier-focus-ring-color` is `rgba(25,118,210,0.7)` and
  `--ln-modifier-focus-ring-focus-width` 3px — and that exact ring is what renders on focus.
- **Two named brand colours.** `--ln-color-palette-brand-1` is the orange, `brand-2` a plum
  **`#7f0442`**, each with a highlight and a lowlight.
- **A dark mode is specified** in `--ln-mode-dark-*`, though the homepage renders light.

#### Primary tasks
- Book a delivery slot; register or log in.
- Go to groceries, offers and recipes.

### Brand Narrative

Sainsbury's has sold food under the same founding promise since 1869 — good quality at affordable
prices — and the site keeps the store's orange and its plain charcoal. Luna turns that into a
system: two named brand colours, a set of semantic modifiers for every recurring part, and an
accessibility decision made once — a single blue focus ring — and applied everywhere.

### Principles

- **Orange for doing.** One brand colour carries every primary action.
- **Plain and square.** Charcoal text, 2px corners.
- **Focus is designed.** One ring, one token, every control.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `www.sainsburys.co.uk`: 369 root custom properties — **364
`--ln-*`** (Luna) and 5 `--ot-*` (OneTrust's consent banner, excluded).

### Orange — brand 1

- **Primary** (`#f06c00`) — `--ln-color-palette-brand-1`, `--ln-modifier-button-color-base` and
  `--ln-modifier-link-color-brand`. The call-to-action fill.
- **Primary Highlight** (`#e55000`) — `brand-1-highlight`, `--ln-modifier-button-color-highlight`,
  `--ln-modifier-link-color-brand-highlight`. The navigation's hover and focus colour.
- **Primary Light** (`#ff9900`) — `--ln-color-palette-orange-light` · **Primary Surface**
  (`#fef5f0`) — `orange-lighter`. The lowlight is written as `rgba(229,80,0,0.06)`.

### Plum — brand 2

**Brand 2** (`#7f0442`) · **Brand 2 Dark** (`#57002b`, its highlight) · **Brand 2 Light**
(`#a50052`).

### Charcoal and grey

The monochrome set names its steps plainly — `dark` `#404040`, `darker` `#262626`, `medium`
`#737373`, `light` `#d8d8d8`, `lighter` `#f2f2f2`:

- **Foreground** (`#404040`) — body copy (1,265 text elements, most `<p>`), and also
  `--ln-modifier-footer-background` and the dark-mode border. One charcoal for text and footer.
- **Text Darker** (`#262626`) · **Text Medium** (`#737373`) · **Grey** (`#8c8c8c`, 15 backgrounds).
- **Line** (`#d8d8d8`) · **Surface** (`#f2f2f2`) · **Canvas** (`#ffffff`,
  `--ln-modifier-header-background`).

### Palettes and status

Ten-step palettes for blue (`#1976d2` at 60, **`#e8f1fb`** at 10), green (**`#2e7d32`**), grey, red
(**`#d50000`**) and yellow (**`#ffd600`**). The focus colour is the palette blue **`#1976d2`** at
70% opacity.

## Typography

### Font family

**MaryAnn** is the rendered brand face: 400 and 800 load (`document.fonts`), self-hosted as
`/assets/static/mary_ann-*.woff2`. It sets headings, navigation and the calls to action
(`--ln-font-stack-button-font-family: MaryAnn, Trebuchet MS, Arial, …`). Body copy is **Arial**
(`--ln-font-stack-body-1-font-family: Arial, Helvetica Neue, Helvetica, sans-serif`) — a system
face, not recorded as a brand font.

The stylesheet also declares **Barlow** and **ItalianPlateNo1Expanded** with `@font-face` rules;
neither loaded on the homepage.

### Scale and a quirk

`--ln-font-stack-body-1` 1rem, `-body-2` 1.125rem, `-button` 1.125rem. The rendered call to action
is 16px at 800, the navigation 20px at 700.

The weight tokens are written with a stray hash — `--ln-font-stack-body-1-font-weight: #400`,
`--ln-font-stack-button-font-weight: #800`, `--ln-modifier-link-font-weight-brand: #800` — which is
not a valid weight; recorded as found.

## Layout

- `--ln-space-*` provides a spacing scale in 0.5rem steps (`--ln-space-spacing-x5` 2.5rem) plus
  fixed widths and breakpoints.
- `--ln-modifier-global-bar-height` 36px; button padding `--ln-modifier-button-padding-vertical`
  0.5rem and `-horizontal` 1.5rem.
- Borders: `--ln-modifier-border-width` 1px, `-large` 2px, `-extra-large` 6px.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Mostly flat. A soft `rgba(0,0,0,0.15) 0 0 15px` appears on 12 elements (menus and overlays). The
most common "shadow" is the invisible resting focus ring.

## Motion & Easing

`--ln-modifier-transition-duration` 0.2s and `-long` 0.4s, `--ln-modifier-transition-timing-function-default`
ease-out; the call to action transitions over 0.2s.

---

**Tier 1 sources:** https://www.sainsburys.co.uk/ (live homepage, collected in a headed Chrome because headless requests are refused — 364 --ln-* custom properties read via `getComputedStyle`; two components measured after rejecting the consent banner; MaryAnn loaded, captured 2026-09-26); https://www.sainsburys.co.uk/zz-this-does-not-exist (nonsense-path control — a real HTTP 404, "Error 404 - File Not Found", captured 2026-09-26); https://jsainsburyplc.github.io/luna/ (Luna Codebase, Sainsbury's design-system documentation; its nonsense-path control returns GitHub Pages' 404, read 2026-09-26); https://www.about.sainsburys.co.uk/about-us (J Sainsbury plc — John James and Mary Ann Sainsbury, 1869, read 2026-09-26)

**Regional sources:** https://www.thegrocer.co.uk/sainsburys/156.subject (The Grocer — Sainsbury's news and analysis)

## Components

Two components, every state on its own page load. **The consent banner was rejected before
measuring** — with it open, the pointer and the Tab key both land on the banner, and every hover
and focus read comes back unchanged.

- **Call to action** — Book a slot, Register: `#f06c00`, white MaryAnn 16px/800, **2px** radius,
  47px, `12px 16px 13px`. **Hover changes nothing**, with `:hover` confirmed matched.
- **Navigation** — Groceries and siblings: `#404040` MaryAnn 20px/700, 52px, `11px 16px`. Hover turns
  the label **`#e55000`**.

### Focus is authored

| control | focus |
|---|---|
| Call to action | `box-shadow: 0 0 0 3px rgba(25,118,210,0.7)`, fill deepens to `rgba(229,80,0,0.8)`, `outline-offset: 1px` |
| Navigation | the same blue ring, label `#e55000` |

The resting state carries the ring already, at zero opacity (`rgba(0,0,0,0) 0 0 0 3px`) — 114
elements wear it — so focus only has to change its colour. Both values come straight from
`--ln-modifier-focus-ring-*`.

### Radius

`--ln-modifier-border-radius` 2px and `-large` 4px; `--ln-modifier-button-border-radius` 2px.
Rendered: **2px** ×119, 1px ×28, 20px ×15 (pills), 4px ×14, `50%` ×5.

### States

Two components. Hover: none on the call to action, `#e55000` on navigation. Focus: the 3px Luna ring
on both. No disabled state was observed.

## Do's and Don'ts

### Do
- Use `#f06c00` for the primary action and `#e55000` for its highlight.
- Keep corners at 2px.
- Put the 3px `rgba(25,118,210,0.7)` ring on every focusable element, invisible at rest.
- Set headings and actions in MaryAnn, body copy in the system sans.

### Don't
- Don't use the plum as a second action colour beside the orange.
- Don't copy the `#400` / `#800` weight values.
- Don't measure or style states with a consent banner in front of the page.

## Voice & Tone

Not assessed as authored voice. 3,903 characters on the measured page.

## Agent Prompt Guide

### Quick Color Reference
`#f06c00` orange · `#e55000` highlight · `#7f0442` plum · `#404040` text and footer · `#262626` /
`#737373` greys · `#d8d8d8` lines · `#f2f2f2` / `#ffffff` surfaces · focus
`rgba(25,118,210,0.7)`

### Example Component Prompts
- "A 47px button: `#f06c00`, white 16px/800 MaryAnn, 2px radius; focus
  `0 0 0 3px rgba(25,118,210,0.7)`."
- "A navigation link: `#404040` 20px/700; hover and focus `#e55000`."

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#f06c00` measures 3.07:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-nav`.** Text `#404040` on `#00000000` measures 2.03:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
