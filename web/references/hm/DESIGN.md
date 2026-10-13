---
name: H&M
colors:
  logo: '#eb0010'
  background: '#000000'
  foreground: '#f2f2f2'
  text-subtle: '#a0a0a0'
  fill-primary-hover: '#e6e6e6'
  fill-primary-pressed: '#cccccc'
  fill-secondary-hover: '#4d4d4d'
  sunken: '#333333'
  border-subtle: '#5a5a5a'
  border-focused: '#99d3ff'
  attention: '#ed4d58'
  favourite: '#e50010'
  success: '#00713d'
  warning: '#995e00'
  info: '#66bdff'
  white: '#ffffff'
typography:
  body:
    fontSize: 14px
    fontWeight: 100
    use: calls to action, search, login and navigation — --fds-text-* weights are 100
rounded:
  none: 0px
components:
  link-cta:
    type: button
    backgroundColor: transparent
    textColor: '#f2f2f2'
    rounded: 0px
    height: 48px
    typography: 14px / 100
    hover: 'fg #a0a0a0'
    use: Jetzt shoppen on the home page — a text-only call to action; hover fades the label to --fds-color-text-subtle. Focus is the browser's ring.
  button-search:
    type: button
    backgroundColor: transparent
    textColor: '#f2f2f2'
    rounded: 0px
    height: 48px
    typography: 14px / 100
    hover: 'fg #a0a0a0'
    use: 'Suchen in the header; the same fade to #a0a0a0 on hover, the browser''s ring on focus.'
  button-login:
    type: button
    backgroundColor: transparent
    textColor: '#f2f2f2'
    rounded: 0px
    height: 48px
    typography: 14px / 100
    hover: 'fg #a0a0a0'
    use: Einloggen in the header; same behaviour as search.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#f2f2f2'
    rounded: 0px
    typography: 14px / 100
    hover: transparent
    use: Damen in the main navigation. Hover changes nothing (confirmed with :hover matched); focus draws no indicator.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: HM Slussen
---

# Design System Inspiration of H&M

## Overview

### Visual Theme & Atmosphere

H&M began as a single womenswear store. In 1947 Swedish entrepreneur Erling Persson opened it in
Västerås after a trip to New York, and called it Hennes, Swedish for "Hers"; he designed the
logotype himself. The first Stockholm store followed in 1952. In 1968 the company became Hennes &
Mauritz and added menswear and childrenswear. Today H&M Group is a family of brands with over 4,000
stores in more than 80 markets and online sales in over 60, and H&M is its flagship.

The German storefront measured here is dark: a black ground, near-white **`#f2f2f2`** type, and the
red logo **`#eb0010`** as the only colour on the chrome. Controls are square, text-only and set in
**HM Slussen**, the group's own sans, at a light weight. Colour comes from the photography.

What makes it worth reading:

- **A locale-aware type system in CSS.** 11,217 of the 11,430 `--fds-*` properties are
  typography. Each style — display, heading, body, label, price, nav — is repeated per locale, and
  the font family changes where the script needs it (Hebrew, Traditional Chinese).
- **Campaign palettes as tokens.** Black Friday, Cyber Monday, sale, deals and gift-giving each get
  the same seven slots — background, icon, text, border, title text, primary, primary hover and
  pressed.
- **Square and quiet.** Buttons and inputs have no radius and no fill; hover dims the label.

#### Primary tasks
- Browse women, men, kids and home; search; open a product.
- Sign in; manage favourites and the basket.

### Brand Narrative

From a Västerås store named Hennes to a group of brands in more than 80 markets, H&M has kept its
promise of accessible fashion. The storefront keeps the interface out of the way — black, white, a
red logo — so the photography sells. Underneath sits the Fabric Design System, which H&M Group
serves under its own domain. Its tokens carry typography for every locale the shop speaks, and a
palette for each sales moment.

### Principles

- **Photography first.** The chrome recedes.
- **One red.** The logo is the colour.
- **Every locale typeset.** Type tokens change family by script.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `www2.hm.com/de_de`: 14,556 root custom properties — `--fds-*`
11,430, `--interactive-*` 1,070, `--heading-*` 495, `--editorial-*` 444, `--price-*` 341, and smaller
`--body-*`, `--display-*`, `--label-*` groups. No framework namespace. Values below are the
theme that rendered.

### Ground and ink

- **Background** (`#000000`) — `--fds-color-background-default`; the body.
- **Foreground** (`#f2f2f2`) — `--fds-color-text-default`; text, borders and icons.
- **Text subtle** (`#a0a0a0`) — `--fds-color-text-subtle`; the hover state of calls to action.
- **Sunken** (`#333333`) — `--fds-color-background-sunken`.
- **Border subtle** (`#5a5a5a`) — `--fds-color-border-subtle`.
- **White** (`#ffffff`) — `--fds-color-fill-selected`.

### Brand

- **Logo** (`#eb0010`) — `--fds-color-fill-logo`; also `--fds-color-text-discount`.
- **Favourite** (`#e50010`) — `--fds-color-fill-favourite`.

### Fills

`--fds-color-fill-primary` `#f2f2f2` → hover **`#e6e6e6`** → pressed **`#cccccc`**.
`--fds-color-fill-secondary` `#000000` → hover **`#4d4d4d`** → pressed `#737373`.

### Status and focus

**Attention** `#ed4d58` (text) · **Success** `#00713d` (fill) · **Warning** `#995e00` (fill) ·
**Info** `#66bdff` (text) · **Focused border** `#99d3ff` (`--fds-color-border-focused`).

A base palette of 16 `--fds-global-color-swatch-*` values uses plain colour names (red `#ff0000`,
blue `#00a1ff`, beige `#eccc9b` …) for product colour swatches, not brand.

## Typography

### Font family

**HM Slussen** — the first family on body, headings and buttons, loaded as a web font
(`document.fonts`). H&M Group's corporate site, hmgroup.com, sets its header in the same face
(`'HMSlussen'`). The fallback stack continues through Japanese system fonts. A serif, `"HM Sergel"`,
is named for parent navigation labels (`--interactive-navigation-parent-font-family`); it was not
loaded on the page measured. AdobeClean also loaded, from an embedded widget, and is not part of
the brand.

### Scale

`--fds-text-<role>-<size>-[locale-<xx-xx>-][breakpoint-<name>-]<property>` — roles include display,
heading (s–xxl), body (s, m), label, link, action, nav and price. Every sampled heading and body
step sets `font-weight: 100`; the controls measured are 14px at 100.

## Layout

- Photography carries the page; chrome is black and text-only.
- Spacing: `--fds-spacing-*` 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64, 96, 128, 160px, each in px
  and rem.

### Responsive Behavior

**Not measured.** Desktop only. The type tokens carry breakpoint variants.

## Elevation & Depth

Almost none. `--fds-color-utility-shadow` is `#0000001a`; one rendered shadow, `rgba(34,34,34,0.05) 0
0 32px 0`, belongs to an overlay.

## Motion & Easing

Controls declare `transition: all` without a duration in the computed shorthand. Not measured
further.

---

**Tier 1 sources:** https://www2.hm.com/de_de/index.html (live homepage — 14,556 root custom properties read via `getComputedStyle`, HM Slussen loaded, four components measured at rest, hover and focus after declining non-essential cookies, captured 2026-09-26 through Aside); http://cinfprxnprci.hm.com/ ("Fabric Design System - H&M Group" — title read; nonsense path returns 404, read 2026-09-26); https://hmgroup.com/about-us/ (About H&M Group — over 4,000 stores in more than 80 markets, "From a single store in 1947"; header set in HMSlussen, read 2026-09-26); https://hmgroup.com/about-us/history/ (Our history — Erling Persson, Västerås 1947, Hennes, Stockholm 1952, Hennes & Mauritz 1968, read 2026-09-26)

## Components

Measured on the home page after declining non-essential cookies, focus read under a real Tab key,
and a hover counted only when `:hover` matched.

- **Call to action** — Jetzt shoppen: text only, `#f2f2f2`, no fill, no radius, 48px, 14px/100.
  Hover fades the label to **`#a0a0a0`**. Focus draws the browser's `auto` ring.
- **Search and login** — Suchen and Einloggen in the header: the same, with the same fade.
- **Navigation link** — Damen: `#f2f2f2`, 14px/100. Hover changes nothing; focus draws no
  indicator.

### Radius

Square. `--interactive-border-radius` is 0, and the only rounded value rendered was a 34px element.

### States

Hover: calls to action, search and login dim to `#a0a0a0`; navigation links do not change. Focus:
the browser's ring on the first three, nothing on navigation. Press was not measured.

## Do's and Don'ts

### Do
- Keep the chrome black and white and let photography carry colour; red `#eb0010` is the logo.
- Set type in HM Slussen at a light weight.
- Keep controls square and text-only; dim to `#a0a0a0` on hover.

### Don't
- Don't read the swatch palette (`#ff0000`, `#00a1ff` …) as brand colours.
- Don't round buttons or add shadows.
- Don't treat a campaign palette as the default theme.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#000000` ground · `#f2f2f2` text · `#a0a0a0` subtle / hover · `#eb0010` logo · `#e6e6e6` /
`#cccccc` primary fill hover and press · `#4d4d4d` secondary hover · `#99d3ff` focused border

### Example Component Prompts
- "A square, text-only 48px call to action on black: `#f2f2f2` 14px HM Slussen at weight 100; hover
  dims it to `#a0a0a0`."
- "A black header with a red `#eb0010` logo and white text-only Search and Login controls."
