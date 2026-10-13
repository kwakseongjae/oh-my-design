---
name: SumUp
colors:
  brand: '#ff61f2'
  brand-hovered: '#eb58df'
  brand-pressed: '#da4ece'
  primary: '#1e1c1c'
  strong-hovered: '#3f3a3a'
  strong-pressed: '#756c6c'
  foreground: '#1e1c1c'
  text-subtle: '#706464'
  accent-hovered: '#726767'
  accent-pressed: '#887a7a'
  canvas: '#fbfbf9'
  surface: '#f5f4ed'
  subtle-hovered: '#f0eee7'
  subtle-pressed: '#e8e6dc'
  border: '#d0cdc3'
  border-hovered: '#ded7cf'
  border-subtle: '#e3e2d6'
  success: '#3c7411'
  success-strong: '#1e862d'
  danger: '#b13606'
  danger-strong: '#d23f04'
  warning: '#a65a03'
  promo: '#a33e9a'
  promo-strong: '#b342a9'
typography:
  body:
    fontSize: 17px
    use: SumUp Narrow; navigation and links at 375, buttons at 550
rounded:
  xs: 2px
  sm: 4px
  md: 12px
  lg: 16px
  xl: 24px
components:
  button-primary:
    type: button
    backgroundColor: '#1e1c1c'
    textColor: '#fbfbf9'
    rounded: 12px
    height: 68px
    padding: 11px 23px
    typography: 17px / 550
    hover: '#3f3a3a'
    pressed: '#756c6c'
    focus: 'ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c'
    use: 'Zum Warenkorb hinzufügen on a card-terminal page — --cui-bg-strong, lightening to --cui-bg-strong-hovered and -pressed. Focus is Circuit UI''s one ring: 2px off-white inside 4px near-black.'
  button-secondary:
    type: button
    backgroundColor: '#fbfbf9'
    textColor: '#1e1c1c'
    border: '#d0cdc3'
    rounded: 12px
    height: 48px
    padding: 11px 23px
    typography: 17px / 550
    hover: '#f0eee7, border #ded7cf'
    pressed: '#e8e6dc, border #cac4be'
    focus: 'ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c'
    use: Mehr erfahren — the outlined twin on --cui-bg-normal with --cui-border-normal; hover and press warm the fill and border.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#1e1c1c'
    rounded: 4px
    height: 64px
    typography: 17px / 375
    hover: 'fg #726767'
    pressed: 'fg #887a7a'
    focus: 'ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c'
    use: Top navigation (Preise). Hover and press fade the label to --cui-fg-accent-hovered and -pressed; inline product links share the recipe.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: SumUp Narrow
    display: SumUp Black
---

# Design System Inspiration of SumUp

## Overview

### Visual Theme & Atmosphere

SumUp makes card readers and payment tools for small businesses. By its own account it "started in
2012 with the belief that anyone should be able to build a successful business", and it has since
grown from a card reader into point-of-sale systems, a business account and consumer payments. It is
headquartered in London; German press calls it the "deutsch-britische" payments company.

Its web presence is built on **Circuit UI**, SumUp's open-source design system — in the repository's
words "the web implementation of the SumUp Circuit Design System". The look is calm and warm rather
than techy: an off-white page **`#fbfbf9`** instead of white, a warm near-black **`#1e1c1c`** for text
and primary buttons, warm greys, and — used sparingly — the SumUp magenta **`#ff61f2`**. Type is SumUp
Narrow, a condensed sans, with SumUp Black for headlines.

What makes it worth reading:

- **Every colour has its states.** Circuit UI names each background, foreground and border colour
  with `-hovered`, `-pressed` and `-disabled` steps — `--cui-bg-strong`, `--cui-bg-strong-hovered`,
  `--cui-bg-strong-pressed` — and the live buttons use exactly those.
- **The primary action is black, not the brand colour.** The magenta is an accent; the buttons that
  sell are near-black.
- **One focus ring for everything**: 2px of off-white inside 4px of near-black, drawn as a
  box-shadow, identical on buttons and links.

#### Primary tasks
- Choose and buy a card terminal; compare prices.
- Learn about the business account and point-of-sale tools.

### Brand Narrative

SumUp sells to people running small shops, cafés and stalls, and its web design talks to them in a
warm, plain register — off-white paper, warm charcoal, a condensed sans that fits a lot on a screen —
with one flash of magenta for recognition. Circuit UI makes that consistency a system: every colour
arrives with its own hover, press and disabled steps, and one focus ring covers every control.

### Principles

- **Warm, not techy.** Off-white and warm greys.
- **Black to act, magenta to recognise.**
- **States are tokens.** Hover and press come from the system, never improvised.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `www.sumup.com/de-de/` and a card-terminal page: 274 root custom
properties — **267 `--cui-*`**, five layout variables (header and side-panel sizes) and two empty
`--lightningcss-dark` / `-light` build markers.

### Brand magenta

- **Brand** (`#ff61f2`) — `--cui-bg-brand`, `--cui-fg-brand`, `--cui-border-brand`, matching the value
  in Circuit UI's `packages/design-tokens/themes/light.ts`. **Brand Hovered** (`#eb58df`) · **Brand
  Pressed** (`#da4ece`); disabled `rgba(255,97,242,0.2)`. Not among the page's most-painted
  backgrounds — an accent, not a surface.

### Strong — the action colour

- **Primary** (`#1e1c1c`) — `--cui-bg-strong`, the primary button fill; also `--cui-fg-normal` and
  `--cui-border-focus`.
- **Strong Hovered** (`#3f3a3a`) · **Strong Pressed** (`#756c6c`).

### Ink and warm neutrals

- **Foreground** (`#1e1c1c`) — `--cui-fg-normal`. 1,350 text elements, and most `<p>`.
- **Text Subtle** (`#706464`) — `--cui-fg-subtle`, secondary copy (97 elements on the home page,
  300 on the product page).
- **Accent Hovered** (`#726767`) · **Accent Pressed** (`#887a7a`) — the link and navigation states.
- **Canvas** (`#fbfbf9`) — `--cui-bg-normal`, "SumUp off-white", the page itself (44 elements) ·
  **Surface** (`#f5f4ed`) — `--cui-bg-subtle` · **Subtle Hovered** (`#f0eee7`) · **Subtle Pressed**
  (`#e8e6dc`).
- **Border** (`#d0cdc3`) — `--cui-border-normal` · **Border Hovered** (`#ded7cf`) · **Border Subtle**
  (`#e3e2d6`).

### Status and promo

**Success** `#3c7411` (strong **`#1e862d`**) · **Danger** `#b13606` (strong **`#d23f04`**) ·
**Warning** `#a65a03` · **Promo** `#a33e9a` (strong **`#b342a9`**).

## Typography

### Font family

**SumUp Narrow** (300–700) for body, navigation and buttons, and **SumUp Black** (700) for headlines —
both loaded (`document.fonts`), self-hosted at `static.sumup.com/fonts/sumup/` and preloaded on every
page. Metric-matched fallback faces (`SumUp Narrow fallback`) are declared so the layout holds while
the fonts load.

### Scale

Text is set at 17px; navigation and links at weight 375, buttons at 550 — the variable face allows
weights between the usual steps.

## Layout

- `--header-bar-height` 64px, `--side-panel-width` 400px.
- Warm off-white and slightly darker warm grey (`#f5f4ed`) alternate as section grounds; near-black
  sections reverse the text to off-white.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Two repeating shadows: `rgba(0,0,0,0.1) 0 10px 10px` and `rgba(0,0,0,0.2) 0 4px 8px`, plus a layered
`#e3e2d6` shadow that draws a hairline border with a slight lift on tiles.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.sumup.com/de-de/ (live homepage — 274 root custom properties, 267 --cui-*, read via `getComputedStyle`; SumUp Narrow and SumUp Black loaded, captured 2026-09-26); https://www.sumup.com/de-de/kartenterminals/ (card-terminal page — three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.sumup.com/zz-this-does-not-exist (nonsense-path control, captured 2026-09-26); https://github.com/sumup-oss/circuit-ui (Circuit UI repository — "SumUp's design system for the web"; the brand token #ff61f2 in themes/light.ts matches the live value; its nonsense-path control returns 404, read 2026-09-26); https://www.sumup.com/en-gb/about-us/ ("SumUp started in 2012…", read 2026-09-26)

**Regional sources:** https://www.handelsblatt.com/finanzen/banken-versicherungen/banken/sumup-dieses-fintech-ist-jetzt-auf-augenhoehe-mit-deutschlands-wertvollstem-finanz-start-up/28448048.html (Handelsblatt — "Fintech Sumup ist so viel wert wie N26"); https://sifted.eu/articles/sumup-potential-london-ipo (Sifted — "SumUp taps top banks for potential London IPO")

## Components

Three components (plus inline links sharing the navigation recipe), measured on a card-terminal page,
every state on its own page load, focus read under a real Tab key.

- **Primary** — Zum Warenkorb hinzufügen: `#1e1c1c`, off-white 17px/550, **12px** radius, 68px,
  `11px 23px`. Hover **`#3f3a3a`**, pressed **`#756c6c`**; the label also softens to 90% and 80%.
- **Secondary** — Mehr erfahren: `#fbfbf9` with a `#d0cdc3` border and `#1e1c1c` label, 48px. Hover
  **`#f0eee7`** with border **`#ded7cf`**; pressed `#e8e6dc` with `#cac4be`.
- **Navigation and links** — `#1e1c1c` 17px/375. Hover **`#726767`**, pressed **`#887a7a`**.

### Focus is authored

`box-shadow: 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c` on every control — a halo of the page colour and a
near-black ring (`--cui-border-focus`). The outline stays `none`.

### Radius

12px on buttons; 4px ×166 (small elements), 2px ×44, 16px (cards, dominant on product pages), round
avatars and icons, and an asymmetric `24px 24px 24px 0` speech-bubble corner.

### States

Three components. Hover and press step along each colour's Circuit UI state tokens; focus is the
shared double ring. Disabled tokens exist (e.g. `--cui-bg-brand-disabled`) but no disabled control was
observed.

## Do's and Don'ts

### Do
- Put primary actions in near-black `#1e1c1c` and keep the magenta `#ff61f2` for accents.
- Use each colour's own `-hovered` and `-pressed` token for states.
- Set pages on off-white `#fbfbf9`, not pure white.
- Use the one focus ring everywhere.

### Don't
- Don't fill large surfaces with the magenta.
- Don't use cold greys; SumUp's neutrals are warm.
- Don't invent state colours outside the tokens.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#ff61f2` brand magenta · `#1e1c1c` ink and primary · `#3f3a3a` / `#756c6c` primary states ·
`#fbfbf9` page · `#f5f4ed` surface · `#d0cdc3` border · `#706464` subtle text · `#3c7411` success ·
`#b13606` danger

### Example Component Prompts
- "A 48px button: `#1e1c1c`, `#fbfbf9` 17px/550 SumUp Narrow, 12px radius; hover `#3f3a3a`; focus
  `0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c`."
- "An outlined button: `#fbfbf9`, `1px solid #d0cdc3`, `#1e1c1c` label; hover `#f0eee7`."

## Governance

### Known Gaps

- **Contrast, `link-nav`.** Text `#1e1c1c` on `#00000000` measures 1.24:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
