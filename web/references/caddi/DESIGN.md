---
name: CADDi
colors:
  primary: '#224bd2'
  primary-deep: '#0d34b5'
  foreground: '#1f2533'
  text-secondary: '#606985'
  text-tertiary: '#374059'
  border: '#d5d7e0'
  surface: '#f4f5f8'
  canvas: '#ffffff'
  status-error: '#ff4e57'
  status-success: '#2ec7cc'
  status-warning: '#e9c212'
typography:
  xs:
    fontSize: 12px
    use: '--font-size-xs'
  s:
    fontSize: 14px
    use: '--font-size-s; the button label size'
  m:
    fontSize: 16px
    use: '--font-size-m; the most common rendered size, on 78 elements'
  l:
    fontSize: 20px
    use: '--font-size-l'
  xl:
    fontSize: 24px
    use: '--font-size-xl'
  xxl:
    fontSize: 32px
    use: '--font-size-2xl'
  xxxl:
    fontSize: 40px
    use: '--font-size-3xl'
  display:
    fontSize: 48px
    use: '--font-size-4xl; the largest published step'
rounded:
  s: 4px
  m: 6px
  l: 8px
  full: 200px
spacing:
  s2: 2
  s4: 4
  s6: 6
  s8: 8
  s12: 12
  s16: 16
  s20: 20
  s24: 24
  s32: 32
  s40: 40
  s48: 48
  s56: 56
  s64: 64
  s80: 80
  s96: 96
  s120: 120
  s160: 160
components:
  button-primary:
    type: button
    backgroundColor: '#1f2533'
    textColor: '#ffffff'
    border: 1px solid transparent
    rounded: 0px
    height: 48px
    padding: 16px 20px
    typography: 14px / 500
    hover: '#f4f5f8'
    pressed: '#f4f5f8'
    focus: '#224bd2'
    use: 'The filled action — square, 48px, and it inverts completely on hover: #f4f5f8 fill with #1f2533 text and border. Focus draws a #224bd2 2px solid outline.'
  select-language:
    type: input
    backgroundColor: '#f4f5f8'
    textColor: '#1f2533'
    border: '1px solid #d5d7e0'
    rounded: 0px
    height: 43px
    padding: 0 12px
    typography: 16px / 500
    hover: '#1f2533'
    pressed: '#1f2533'
    focus: '#224bd2'
    use: 'The language select in the header, 160×43 — the mirror of the primary button: it inverts the other way, from the pale surface to the dark ink.'
  button-contact:
    type: button
    backgroundColor: transparent
    textColor: '#224bd2'
    rounded: 0px
    height: 47px
    padding: 16px 20px
    typography: 16px / 400
    hover: '#224bd2'
    pressed: '#224bd2'
    use: 'お問い合わせ — transparent with primary-blue text, filling with #224bd2 on hover and pressed. Its focus renders the browser''s own ring, unlike the two above, so none is recorded.'
fonts:
  roles:
    sans: NB International Pro
    japanese: MFW-PIshiiGothicStdN
    mono: JetBrains Mono
---

# Design System Inspiration of CADDi (キャディ)

## Overview

### Visual Theme & Atmosphere

CADDi builds an AI data platform for manufacturing. Its own company page gives the mission as
「モノづくり産業のポテンシャルを解放する」, the head office in Asakusabashi, Taito-ku, Tokyo,
加藤勇志郎 as CEO and co-founder, and **911 employees as of 1 July 2026**. The products are
CADDi Drawer, CADDi Quote and the AI Data Platform.

The interface is **completely square**. In a census of 2,500 elements the only radius other
than zero was a single `50%` avatar. Buttons, selects, cards, images — nothing is rounded,
and the token set publishes a radius scale that the page does not use.

Colour is equally restrained: `#1f2533` ink on white, `#d5d7e0` rules, and one blue `#224bd2`
that appears only as a link colour and a focus ring.

**The spacing is the system.** 54 of the 158 properties are `--space-*`, and they are not one
scale — they are **four directional families** drawn from a shared raw ramp.

#### Primary tasks
- Understand the platform and reach a contact form.
- Switch language, which is the other control the header offers.

### Brand Narrative

CADDi states its mission as unleashing the potential of the manufacturing industry, works from
Asakusabashi in Taito-ku, Tokyo, is led by co-founder 加藤勇志郎, and had 911 employees on
1 July 2026. It ships CADDi Drawer for custom-parts procurement, CADDi Quote for quotation, and
an AI Data Platform underneath both.

The interface reads like software for people who look at engineering drawings: square, grey,
one blue, one weight of type doing most of the work, and a spacing system that names the
direction of every gap.

### Principles

- **Name the direction, not just the size.** `inline`, `stack`, `inset`, `block`.
- **Two surfaces, and hovering crosses between them.** Pale to dark, dark to pale.
- **Square, everywhere.** A radius scale exists and is left alone.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured 2026-09-22 with `getComputedStyle` on `caddi.com/ja-jp/platform/`. 25 of the 158
properties are colours, and **they are heavily aliased**: the same nine values carry 25 names.

- **Primary** (`#224bd2`) — `--color-primary-500`. The link colour and the focus ring; it is
  never a fill at rest anywhere this capture measured.
- **Primary Deep** (`#0d34b5`) — `--color-primary-600`.
- **Foreground** (`#1f2533`) — one value under **four** names: `--color-text-primary`,
  `--color-neutral-800`, `--color-bg-dark` and `--color-state-default`. It is the ink, the
  dark fill and the default state, all at once — 80 elements.
- **Text Secondary** (`#606985`) — `--color-text-secondary`, also `--color-neutral-500` and
  `--color-state-current`.
- **Text Tertiary** (`#374059`) — `--color-text-tertiary`, also `--color-neutral-700` and
  `--color-border-on-dark`.
- **Border** (`#d5d7e0`) — `--color-border-secondary`, `--color-neutral-200`, and — this one
  is worth noting — `--color-state-hover`.
- **Surface** (`#f4f5f8`) — `--color-bg-subtle` / `--color-neutral-50`.
- **Canvas** (`#ffffff`) — `--color-neutral-0`, `--color-bg-primary`, `--color-text-inverse`,
  `--color-border-inverse`.
- **Status**: Error `#ff4e57` · Success **`#2ec7cc`** — a teal, not a green · Warning `#e9c212`.

The aliasing is the interesting part. A consumer reading `--color-state-default` and a consumer
reading `--color-text-primary` get the same `#1f2533`, so the **role names are a vocabulary over
a very small palette** rather than nine independent decisions.

## Typography

### Font Family — four faces, three of them commercial

- **`--font-family-body`** is `"NB International Pro"` — a Latin grotesk, rendered on 32
  elements of the platform page and 84 of the company page.
- **`--font-family-mono`** is `"JetBrains Mono"`, on 12–18 elements.
- **`--font-family-display`** is `"Zalando Sans Expanded"` — **declared and not loaded**. It
  appears in no font the browser reported, so it is recorded here in prose and not as a token.
- The face that actually carries the page is **`MFW-PIshiiGothicStdN`** — Morisawa's Pi Shii
  Gothic, in **three weights** (R, M, B) totalling 145 elements on the platform page. It comes
  from the fallback chain rather than from a `--font-family-*` token, which is how a Japanese
  site usually reaches its CJK face.

Both the declared Latin face and the rendered Japanese one are recorded, because taking either
alone misrepresents the page.

### Scale

Eight published steps: **12 · 14 · 16 · 20 · 24 · 32 · 40 · 48px**. Rendered, 16px leads on 78
elements, then 14px on 58.

Weights: `--font-weight-regular` 400 · `-medium` 500 · `-bold` 700. The page is a **500-weight
page** — 109 elements at medium against 38 bold and 33 regular.

Five line heights: `tight` 1.25 · `display` 1.2 · `body` 1.5 · `normal` 1.5 · `relaxed` 1.75.
Letter spacing is `0` for both body and display.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.leading.tight`: `1.25`
- `typography.leading.display`: `1.2`
- `typography.leading.body`: `1.5`
- `typography.leading.normal`: `1.5`
- `typography.leading.relaxed`: `1.75`

## Layout

### Spacing named by direction, not only by size

54 tokens in four families, each `2xs` → `4xl`, all drawn from `--space-scale-*`:

| Family | Meaning | Range |
|---|---|---|
| `--space-inline-*` | horizontal gap | 2 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 |
| `--space-stack-*` | vertical gap between siblings | 2 · 4 · 8 · 12 · 16 · 24 · 32 · 40 · 56 |
| `--space-inset-*` | padding inside a box | 4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 |
| `--space-block-*` | page-level block rhythm | 40 · 56 · 80 · 96 · 120 · 160 |

Plus `--space-section-sm/md/lg` at 48 / 80 / 120 and `--space-section-padding-x` at 96.

`inline` and `stack` carry the same numbers, so the distinction is **not** about value — it is
about *intent*, and reading `--space-stack-md` tells you the direction before you look it up.
The raw `--space-scale-*` ramp underneath runs 0 · 2 · 4 · 6 · 8 · 12 · 16 · 20 · 24 · 32 · 40
· 48 · 56 · 64 · 80 · 96 · 120 · 160px.

### The rest

Three max-widths — `--size-max-width-sm` 800 · `-md` 1000 · `-lg` 1600px — and a fixed header
offset, `--caddi-header-offset` 111px, with a stuck menu bar at 80px.

### Responsive Behavior

**Not measured.** Desktop 1440×1100 only. The three max-widths and the fixed header offset are
declared; no breakpoint was observed.

## Elevation & Depth

**No shadow token exists** and none was observed on any measured control. With no radius and no
shadow, separation is done entirely by the `#d5d7e0` rule and the `#f4f5f8` surface.

## Motion & Easing

**No motion token exists.** Durations are written inline on the controls and differ by
component: `background 0.2s, background-color 0.2s, color 0.2s` on the primary button,
`background-color 0.15s, border-color 0.15s` on the select, and `color 0.3s` on the contact
block. Three components, three durations, no shared value.

---

**Tier 1 sources:** https://caddi.com/ja-jp/platform/ (live product surface — 158 custom properties read via `getComputedStyle`, three controls measured at rest, hover, pressed and focus, 2026-09-22); https://caddi.com/ja-jp/company/ (CADDi's own company page — mission, headquarters, representative, headcount and the product list, and a second brand-owned Japanese surface carrying the same token set, 2026-09-22); https://caddi.com/ja-jp/ (the landing surface, where the census of typefaces and the square-radius reading were taken; 2026-09-22)

## Components

Three controls measured on live content pages, each state read on its own page load.

### Primary — and it inverts

`#1f2533` fill, `#ffffff` text, `1px` transparent border, **0px radius**, 48px, `16px 20px`
padding, 14px/500.
**Hover and pressed swap it end to end**: `#f4f5f8` fill, `#1f2533` text *and* border.
Focus: **`outline: rgb(34, 75, 210) solid 2px`** — that is `--color-primary-500`, and `solid`
is the tell that it is authored rather than the browser's `auto`.

### Language select — the same move, mirrored

`#f4f5f8` fill, `#1f2533` text, `1px solid #d5d7e0`, 0px radius, 160×43, 16px/500.
Hover and pressed go **to** `#1f2533` with white text and a matching border.

Put beside the primary button, the pair describes the whole interaction language: **there are
two surfaces, pale and dark, and hovering moves a control from one to the other.**

### Contact

Transparent with `#224bd2` text, 0px radius, 153×47, 16px/400, `transition: color 0.3s`.
Hover and pressed fill with `#224bd2`.

**Its focus is the browser's** (`auto 1px`), unlike the two above — it is a CMS-authored block
rather than a `CaddiButton`, and the difference shows. No focus value is recorded for it.

### Radius — declared, unused

`--radius-s` 4 · `-m` 6 · `-l` 8 · `-full` 200px are all published. The rendered page uses
**none of them**: every measured control computes `border-radius: 0px`, and the whole census
found one `50%` and one `1px`. The scale exists and the design does not draw on it.

### States, and the tokens that are not styles

Two of three components carry measured hover, pressed and focus; the third carries hover and
pressed with the browser's focus ring. The pattern is a single move — **invert** — applied in
both directions.

**46 tokens carry interface copy rather than style.** `--label-login` is `"Log in"`,
`--label-drawer` is `"CADDi Drawer"`, `--label-copyright` is `"© CADDi, Inc."`,
`--label-privacy-recruiting` is `"Recruiting Privacy Policy"`, and a run of industry names
(`--label-auto` "Automotive", `--label-plant` "Plant & Chemical") sits beside them. All in
English, on a `ja-jp` page.

Two of them are worth recording as found:

- **`--label-mission` is `"文字列値"`** — literally "string value", a placeholder that reached
  production.
- Six have degenerate names — `--label---`, `--label-----`, `--label------` — carrying
  "Previous", "Announcements", "Back to list", "Media coverage" and "Press releases". A
  generator that ran out of slugs.

Neither is promoted to a token here. They are recorded because a reader of this system should
know that its `--label-*` layer is generated, and that generated layers carry their mistakes
into the custom-property namespace where nothing checks them.

## Do's and Don'ts

### Do
- Pick a spacing token by direction — `inline` for a row gap, `stack` for a column gap,
  `inset` for padding — even though the numbers coincide.
- Use `#224bd2` for focus at `solid 2px`; it is the system's one authored ring.
- Keep corners square. The radius tokens exist; the design does not use them.

### Don't
- Don't treat the colour names as nine separate values. `--color-state-default`,
  `--color-text-primary`, `--color-neutral-800` and `--color-bg-dark` are all `#1f2533`.
- Don't set `Zalando Sans Expanded` because `--font-family-display` names it — it does not load.
- Don't assume every control shares the focus ring. The CMS-authored contact button falls back
  to the browser's.

## Voice & Tone

Not assessed as authored voice — but see §14, because 46 tokens carry interface copy.

## Agent Prompt Guide

### Quick Color Reference
`#224bd2` primary, links and focus · `#0d34b5` primary deep · `#1f2533` ink and dark fill ·
`#606985` secondary · `#374059` tertiary · `#d5d7e0` rules · `#f4f5f8` surface · `#ffffff`
canvas · `#ff4e57` error · `#2ec7cc` success · `#e9c212` warning

### Example Component Prompts
- "A 48px square button: `#1f2533` fill, `#ffffff` 14px/500 label, `16px 20px` padding, no
  radius; hover inverts to `#f4f5f8` fill with `#1f2533` text and border; focus draws
  `#224bd2 solid 2px`."
- "A 43px square select: `#f4f5f8` fill, `1px solid #d5d7e0`, `#1f2533` 16px/500 label,
  inverting to `#1f2533` on hover."

## Governance

### Known Gaps

- **Contrast, `button-contact`.** Text `#224bd2` on `#00000000` measures 3.01:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
