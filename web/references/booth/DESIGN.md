---
name: BOOTH
colors:
  brand: '#fc4d50'
  brand-hover: '#ce2f36'
  brand-press: '#9b1e25'
  primary: '#2c9ba6'
  primary-hover: '#067a87'
  primary-press: '#145c69'
  link: '#1b7f8c'
  link-press: '#0f6270'
  foreground: '#171d26'
  text-body: '#252f3d'
  canvas: '#ffffff'
  background-secondary: '#f1f5f8'
  background-tertiary: '#dee4e9'
  input: '#ebedf2'
  input-border: '#d5d9de'
  focus-soft: '#94dee2'
  notice: '#fed63d'
  positive: '#2f92db'
  negative: '#ce2f36'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: search field and links, system stack
rounded:
  sm: 5px
components:
  link-notice:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1b7f8c'
    rounded: 0px
    height: 32px
    typography: 14px / 600
    pressed: 'fg #0f6270'
    use: 'お知らせ一覧 — a teal link button with a hairline inset bottom; hover changes nothing, press and focus darken the label to #0f6270.'
  input-search:
    type: input
    backgroundColor: '#ebedf2'
    textColor: '#171d26'
    border: '#d5d9de'
    rounded: 5px
    height: 32px
    typography: 16px / 400
    hover: '#ebedf2'
    focus: '#ffffff + border #171d26'
    use: The header keyword field (キーワードを入力) — grey fill that turns white with a dark border on focus; no hover change.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: booth heavy
---

# Design System Inspiration of BOOTH

## Overview

### Visual Theme & Atmosphere

BOOTH is pixiv's marketplace where creators sell illustrations, doujinshi, goods and digital items;
its footer reads "© pixiv". pixiv Inc. (ピクシブ株式会社), founded on 25 July 2005, is based in
Sendagaya, Shibuya, Tokyo, with an office in Fukuoka. The home page is full of creator events — Comic
Market, COMITIA, Vket, VRChat — each with its own coloured tile.

The site is light and busy in a good way: white ground, cool greys **`#f1f5f8`** and **`#dee4e9`**,
dark ink **`#171d26`**, teal links **`#1b7f8c`**, and BOOTH's red **`#fc4d50`** for promotion and
discovery. Its interface tokens come from **Charcoal**, pixiv's public design system.

What makes it worth reading:

- **A public design system in production.** Charcoal is published as "Design system library by
  pixiv", and booth.pm carries 691 of its tokens.
- **Container roles with three steps each.** Primary, discovery, positive, negative, notice,
  neutral, HUD and on-image containers all have default, hover and press values.
- **Two-colour focus.** `--charcoal-color-border-focus-1` `#067a87` and `-focus-2` `#94dee2`.

#### Primary tasks
- Search for items; browse events and categories.
- Open the cart; read notices.

### Brand Narrative

BOOTH is where pixiv's creator culture becomes commerce — event tiles, goods and downloads — and it
runs on Charcoal, the design system pixiv shares publicly. The interface stays cool and neutral so
creators' work and event colours can be loud.

### Principles

- **Creators first.** Neutral chrome, colourful content.
- **Shared system.** Charcoal tokens across pixiv products.
- **Every container has states.** Default, hover, press.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `booth.pm/ja`: 782 root custom properties — `--charcoal-*` 691,
plus Tailwind's `--tw-*` 51 and `--tailwind-*` 40 (excluded).

### Red (discovery)

- **Brand** (`#fc4d50`) — `--charcoal-color-container-discovery-default`.
- **Brand hover** (`#ce2f36`) · **press** (`#9b1e25`).

### Teal (primary and links)

- **Primary** (`#2c9ba6`) — `--charcoal-color-container-primary-default`.
- **Primary hover** (`#067a87`) · **press** (`#145c69`).
- **Link** (`#1b7f8c`) — rendered link colour; **Link press** (`#0f6270`).
- **Focus soft** (`#94dee2`) — `--charcoal-color-border-focus-2`.

### Ink and surfaces

- **Foreground** (`#171d26`) — the search text; **Text body** (`#252f3d`).
- **Canvas** (`#ffffff`) · **Background secondary** (`#f1f5f8`) · **Background tertiary** (`#dee4e9`).
- **Input** (`#ebedf2`) · **Input border** (`#d5d9de`).

### Status

**Notice** `#fed63d` · **Positive** `#2f92db` · **Negative** `#ce2f36`.

## Typography

### Font family

Body text uses the system stack (`-apple-system, …, Hiragino Kaku Gothic ProN, Meiryo`). BOOTH's own
faces — **booth heavy** (English and Japanese, 700) and `booth_font` — load (`document.fonts`) for
headings and logotype-style text.

### Scale

The search field and links are 16px/400; the notices button 14px/600.

## Layout

- A header search, notices, a promotional carousel and rows of translucent event tiles.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Light: a 1px shadow on carousel controls; overlays use `--charcoal-color-background-overlay`.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://booth.pm/ja (live homepage — 782 root custom properties read via `getComputedStyle`, Tailwind excluded; BOOTH faces loaded; two components measured at rest, hover, pressed and focus; footer "© pixiv", captured 2026-09-26); https://booth.pm/ja/zz-this-does-not-exist (nonsense-path control — HTTP 404, read 2026-09-26); https://github.com/pixiv/charcoal (Charcoal — "Design system library by pixiv"; a nonsense repository path returns 404, read 2026-09-26); https://www.pixiv.co.jp/company/ (ピクシブ株式会社 会社概要 — founded 2005-07-25, Tokyo office in Sendagaya, Shibuya, read 2026-09-26)

## Components

Measured on the home page, focus read under a real Tab key, and a hover counted only when `:hover`
matched; background-image, text-decoration and pseudo-elements were compared too.

- **Notices link** — お知らせ一覧: white, teal `#1b7f8c` 14px/600, 32px, with a hairline inset bottom.
  Hover changes nothing; press and focus darken the label to **`#0f6270`**.
- **Search field** — キーワードを入力: `#ebedf2` fill, `#d5d9de` border, 5px left corners, 32px. No
  hover change; focus turns it **`#ffffff`** with a **`#171d26`** border.

### Radius

5px on the search field and event tiles.

### States

Hover: no change on the measured link and field. Press and focus: the link darkens to `#0f6270`; the
field turns white with a dark border.

## Do's and Don'ts

### Do
- Use Charcoal's container roles with their hover and press steps.
- Keep BOOTH red `#fc4d50` for discovery and promotion; teal for links and primary actions.
- Use the two-colour focus border (`#067a87`, `#94dee2`).

### Don't
- Don't count Tailwind's variables as Charcoal tokens.
- Don't use the red for body links; links are teal.
- Don't flatten the focus to a single colour.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#fc4d50` BOOTH red · `#ce2f36` red hover · `#2c9ba6` teal · `#067a87` teal hover · `#1b7f8c` link ·
`#171d26` ink · `#f1f5f8` / `#dee4e9` greys · `#ebedf2` input

### Example Component Prompts
- "A 32px search field, `#ebedf2` fill with a `#d5d9de` border; on focus white with a `#171d26`
  border."
- "A teal `#1b7f8c` text button that darkens to `#0f6270` when pressed."
