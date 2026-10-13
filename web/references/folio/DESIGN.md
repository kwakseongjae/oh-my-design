---
name: FOLIO
colors:
  primary: '#f26161'
  primary-light: '#ff8c8c'
  primary-surface: '#ffe2e8'
  foreground: '#202128'
  text-secondary: '#70707e'
  text-tertiary: '#b0b0bb'
  link: '#6585c2'
  positive: '#007e7d'
  canvas: '#ffffff'
  surface: '#f7f8fa'
  border: '#e9eaef'
  gray-70: '#41424e'
  gray-80: '#292a33'
typography:
  xxs:
    fontSize: 10px
    use: '--FOLIOWEB-LP-font-size-xxs'
  xs:
    fontSize: 12px
    use: '--FOLIOWEB-LP-font-size-xs'
  s:
    fontSize: 14px
    use: '--FOLIOWEB-LP-font-size-s'
  m:
    fontSize: 16px
    use: '--FOLIOWEB-LP-font-size-m; body, header buttons and navigation'
  l:
    fontSize: 20px
    use: '--FOLIOWEB-LP-font-size-l; the 48px pill buttons'
  xl:
    fontSize: 24px
    use: '--FOLIOWEB-LP-font-size-xl'
  xxl:
    fontSize: 32px
    use: '--FOLIOWEB-LP-font-size-xxl'
  xxxl:
    fontSize: 40px
    use: '--FOLIOWEB-LP-font-size-xxxl, the largest step'
rounded:
  m: 8px
  l: 16px
  full: 999px
spacing:
  xxxxs: 2
  xxxs: 4
  xxs: 8
  xs: 16
  s: 24
  m: 32
  l: 40
  xl: 48
  xxl: 56
  xxxl: 64
  xxxxl: 80
components:
  button-primary:
    type: button
    backgroundColor: '#f26161'
    textColor: '#ffffff'
    rounded: 999px
    height: 40px
    padding: 0 24px
    typography: 16px / 600
    hover: '#ff8c8c'
    pressed: '#ff8c8c'
    use: 口座開設 in the header — the coral pill that opens an account. Lightens to --color-light-pink on hover; focus is the browser's ring.
  button-dark:
    type: button
    backgroundColor: '#202128'
    textColor: '#ffffff'
    rounded: 999px
    height: 48px
    padding: 0 24px
    typography: 20px / 600
    hover: '#70707e'
    pressed: '#70707e'
    use: 詳しく見る on dark — a near-black pill that turns mid-gray on hover.
  button-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#202128'
    border: '1px solid #70707e'
    rounded: 999px
    height: 40px
    padding: 0 24px
    typography: 16px / 600
    hover: 'fg #f26161, border #f26161'
    pressed: 'fg #f26161, border #f26161'
    use: 'ログイン — white pill with a gray border; on hover the label and border both turn coral #f26161 while the fill stays white.'
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#202128'
    height: 32px
    typography: 16px / 600
    hover: 'fg #f26161'
    pressed: 'fg #f26161'
    use: 'Header navigation (手数料 and siblings). The label turns coral #f26161 on hover.'
  link-inline:
    type: button
    backgroundColor: transparent
    textColor: '#6585c2'
    typography: 16px / 400
    hover: transparent
    pressed: transparent
    use: Inline notice links in the leftover blue. Identical at rest, hover and press — only the browser's focus ring distinguishes a state.
fonts:
  roles:
    sans: Aoto Gothic
    latin: Roboto
---

# Design System Inspiration of FOLIO (フォリオ)

## Overview

### Visual Theme & Atmosphere

FOLIO is a Japanese online securities company. It started with a mission stated as
「資産運用をバリアフリーに。」 — asset management without barriers. Today its public face also carries **ROBOPRO**, an
AI-driven robo-advisor, renamed from *FOLIO ROBO PRO* in July 2023 with a new logo and a
redesigned site.

The colour is the story. In 2018, when the securities service moved to full release, FOLIO spent
eight months on a rebrand, and its Chief Design Officer, 広野萌, wrote it up in August 2018: the
company broadened its mission to 「全ての個を発揚する。」 (lift every individual up), picked the
concept **"LIFT ME UP!"** from four candidates, and with it left 「安心の青」, the blue of
reassurance, for 「躍動感のある赤」, a red with momentum — a choice the post itself calls a bold one
for a fintech start-up.

That red is today's **coral `#f26161`**, on every button that opens an account. The blue did not
disappear: it survives as **`#6585c2`**, the colour of inline notice links and nothing else. The
rest is a cool, faintly violet gray ramp from **`#202128`** to **`#f7f8fa`**, pill-shaped buttons,
no shadows anywhere, and type set in Morisawa's **Aoto Gothic**.

What makes it worth reading:

- **One prefix, nothing else.** All 75 custom properties are `--FOLIOWEB-LP-*`. No framework
  variables sit beside them.
- **The old brand colour is kept as a role.** Blue is the link colour; coral is the brand.
- **A licensed Japanese face, actually loaded** — not declared and left to fall back.

#### Primary tasks
- Open an account; sign in.
- Read about fees and ROBOPRO.

### Brand Narrative

FOLIO chose, deliberately and in writing, not to look like a bank. The 2018 rebrand gave up the
blue of trust for a red of momentum because the company had redefined itself around lifting
individuals up, and the visual system followed the mission rather than the category. Eight years
on, the landing page still runs on that decision: coral opens accounts, coral is where things go
when you point at them, and the old blue is a link.

The token set is small and entirely its own — one prefix, one accent, one gray ramp, three radii,
no shadows — and it spends where it matters to a Japanese reader, on a licensed screen gothic
that is actually delivered.

### Principles

- **Momentum over reassurance.** Coral, not blue.
- **Keep the past as a role.** The pre-rebrand blue is the link colour.
- **Flat and round.** Pills, gray surfaces, no shadow.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `folio-sec.com`: 75 properties, all under `--FOLIOWEB-LP-`.

### Coral — the brand

- **Primary** (`#f26161`) — `--color-pink`, also `--color-background-pink`,
  `--color-text-notice` and `--color-border-tertiary`. Every account button, and the hover colour
  for outline buttons and navigation.
- **Primary Light** (`#ff8c8c`) — `--color-light-pink`, the primary button's hover fill.
- **Primary Surface** (`#ffe2e8`) — `--color-ultra-light-pink`, a pale panel (4 elements).

### Gray — cool, with a violet lean

`--color-gray-00` **`#f7f8fa`** · `-10` **`#e9eaef`** · `-40` **`#b0b0bb`** · `-60`
**`#70707e`** · `-70` **`#41424e`** · `-80` **`#292a33`** · `-90` **`#202128`**. Every step
carries slightly more blue than red.

- **Foreground** (`#202128`) — `--color-text-primary` = `gray-90`. Paragraph text.
- **Text Secondary** (`#70707e`) — `--color-text-secondary`, also the outline-button border and
  `--color-divider-primary`.
- **Text Tertiary** (`#b0b0bb`) — `--color-text-tertiary`. **The most-rendered text colour on the
  page** (68 elements against the ink's 49), because navigation and labels outnumber paragraphs.
  Counted inside `<p>` only, the ink is `#202128`. Roles here follow that reading, not the raw
  rank.
- **Gray 70** (`#41424e`) · **Gray 80** (`#292a33`) — dark surfaces
  (`--color-background-dark-gray`, `-ultra-dark-gray`).

### Surfaces and lines

**Canvas** (`#ffffff`) · **Surface** (`#f7f8fa`, `--color-background-ultra-light-gray`, 10
elements) · **Border** (`#e9eaef`, `--color-border-primary`, written out as
`--border-primary: 1px solid #E9EAEF`).

### The other two

- **Link** (`#6585c2`) — `--color-text-link` = `--color-blue`. Inline notices only. This is the
  blue the 2018 rebrand moved away from, kept for one job.
- **Positive** (`#007e7d`) — `--color-text-positive` = `--color-green`, a teal for gains.

## Typography

### Font family

**Aoto Gothic (あおとゴシック)** — Morisawa's screen-oriented gothic. It is the
rendered face: the body computes `MFW-PAotoGothicStdN-Regular`, headings
`MFW-PAotoGothicStdN-DeBold`, and **both appear in `document.fonts` as loaded**. They arrive
through Morisawa's TypeSquare service (`typesquare.com/3/tsst/script/ja/typesquare.js` with
`auto_load_font=true`), which subsets per page — `document.fonts` lists the two faces many
times over, one entry per delivered subset. The tokens name them
`--font-family-regular` and `--font-family-bold`.

**Roboto** (500) is loaded for Latin text and numerals — `--font-family-latin:
"Roboto","Roboto Fallback"`.

TypeSquare fonts are licensed to the domain that serves them. A consumer outside
`folio-sec.com` will not get Aoto Gothic from this page, and must not substitute a system gothic
while calling it Aoto Gothic.

### Scale

`--font-size-xxs` 10 · `xs` 12 · `s` 14 · `m` 16 · `l` 20 · `xl` 24 · `xxl` 32 · `xxxl` 40.
Weights `--font-weight-normal` 400 and `-bold` **600** — bold here is semibold.
Line heights `--leading-none` 1 · `-normal` 1.5 · `-relaxed` 1.6 · `-loose` 1.8. Tracking is
tokenised too: `--tracking-normal` 0.6px · `-wide` 1px · `-wider` 1.6px · `-widest` 2px — the
text is spaced open by default.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.leading.none`: `1`
- `typography.leading.normal`: `1.5`
- `typography.leading.relaxed`: `1.6`
- `typography.leading.loose`: `1.8`

## Layout

- Spacing is a token scale: `--spacing-xxxxs` 2 · `xxxs` 4 · `xxs` 8 · `xs` 16 · `s` 24 · `m` 32
  · `l` 40 · `xl` 48 · `xxl` 56 · `xxxl` 64 · `xxxxl` 80. Button padding is `0 24px` (`s`).
- Borders are tokenised as whole declarations: `--border-primary` `1px solid #E9EAEF`,
  `-secondary` `1px solid #70707E`, `-tertiary` `1px solid #F26161`.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

**None.** No shadow token exists, and `box-shadow` is `none` on every element and every measured
state. Separation is done with gray surfaces and hairline borders.

## Motion & Easing

No motion token exists among the 75. Not measured further.

---

**Tier 1 sources:** https://folio-sec.com/ (live landing surface — 75 custom properties read via `getComputedStyle`, all `--FOLIOWEB-LP-*`; five controls measured at rest, hover, pressed and focus; Aoto Gothic and Roboto confirmed loaded in `document.fonts`, captured 2026-09-23); https://folio-sec.com/zz-this-does-not-exist (nonsense-path control — a real HTTP 404 on a different template with its own font stack, establishing the host is not a catch-all, captured 2026-09-23); https://note.com/hajipion/n/n1653f6ebb468 (「FOLIOリブランディングの裏側」 by FOLIO's CDO 広野萌, published 2018-08-08 — the move from 「安心の青」 to 「躍動感のある赤」 under "LIFT ME UP!", and the mission 「全ての個を発揚する。」, read 2026-09-23)

**Regional sources:** https://prtimes.jp/main/html/rd/p/000000125.000022761.html (FOLIO release on PR TIMES, 2023-08-07 — FOLIO ROBO PRO renamed ROBOPRO with a new logo and site); https://www.don-guri.com/works/folio-branding-corporatesite/ (DONGURI case study of the 2018 corporate branding and site)

## Components

Five controls measured, every state on its own page load, focus read before the mouse moved.

- **Primary** — `#f26161`, white 16px/600, a 999px pill, 40px tall in the header (48px at 20px
  in the page body). Hover and press lighten the fill to **`#ff8c8c`**.
- **Dark** — `#202128`, white 20px/600, 48px pill. Hover turns it **`#70707e`**.
- **Outline** — `#ffffff` with `1px solid #70707e` and a `#202128` label. Hover keeps the white
  fill and turns **label and border coral `#f26161`**.
- **Navigation link** — `#202128` 16px/600; hover turns the label coral.
- **Inline link** — `#6585c2` 16px/400. **Identical at rest, hover and press.**

Coral is therefore FOLIO's hover colour: it is where outline buttons and navigation go under the
pointer, and where the primary button already is.

### Focus is the browser's

Every control shows `outline: rgb(0, 95, 204) auto 1px` under `:focus-visible` — Chrome's
default ring, unchanged on all five. No focus colour is recorded.

### Radius

Three values, all tokens, all used: `--radius-m` **8px** (21 elements) · `--radius-l` **16px**
(7) · `--radius-full` **999px** (17, every button). Nothing renders off the scale.

### States

Five components, every state measured. Hover and pressed: the primary lightens to `#ff8c8c`, the
dark button turns `#70707e`, the outline button and navigation turn coral; the inline link does
not change. Focus is the browser's `auto` ring on all five. No disabled state was observed.

## Do's and Don'ts

### Do
- Reserve `#f26161` for opening an account and for the hover state of secondary controls.
- Use `#202128` for paragraph text and `#b0b0bb` for navigation and labels.
- Keep buttons as 999px pills and keep everything flat.

### Don't
- Don't use the blue `#6585c2` for actions — it is the link colour the rebrand left behind.
- Don't render Aoto Gothic with a substitute face under its name.
- Don't copy the inline link's missing hover state.

## Voice & Tone

Not assessed as authored voice. 2,908 characters on the measured surface.

## Agent Prompt Guide

### Quick Color Reference
`#f26161` brand · `#ff8c8c` hover · `#ffe2e8` pale coral · `#202128` ink · `#70707e` secondary ·
`#b0b0bb` tertiary · `#6585c2` link · `#007e7d` positive · `#ffffff` / `#f7f8fa` surfaces ·
`#e9eaef` borders · `#41424e` / `#292a33` dark surfaces

### Example Component Prompts
- "A 40px pill button: `#f26161`, white 16px/600 label, 0 24px padding; hover `#ff8c8c`; no
  shadow."
- "An outline pill: white, `1px solid #70707e`, `#202128` label; hover turns label and border
  `#f26161`."

## Governance

### Known Gaps

- **Contrast, `button-primary`.** Text `#ffffff` on `#f26161` measures 3.15:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-nav`.** Text `#202128` on `#00000000` measures 1.31:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
