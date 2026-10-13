---
name: Pairs
colors:
  primary: '#00c1d4'
  primary-link: '#0096a9'
  primary-strong: '#00aec2'
  primary-deep: '#007f90'
  primary-light: '#a5eaf5'
  primary-surface: '#e0f8fc'
  gradient-start: '#70dfab'
  gradient-mid: '#3bd6cb'
  gradient-end: '#20cfe3'
  ink: '#0a2c2f'
  foreground: '#325151'
  gray-02: '#678181'
  gray-03: '#96aaaa'
  border: '#dae4e5'
  gray-06: '#ebf2f2'
  surface: '#f4fbfb'
  canvas: '#ffffff'
  blue: '#007bcc'
  red: '#d03138'
  red-bright: '#ef3f45'
  green: '#028541'
  yellow: '#f1bf00'
  orange: '#ff8831'
  purple: '#6e7de2'
typography:
  caption-2:
    fontSize: 12px
    use: '--text-caption-2-pc (10px on -sp), 400, 150%'
  caption-1:
    fontSize: 14px
    use: '--text-caption-1-pc (10px on -sp), 400, 150%'
  body-2:
    fontSize: 16px
    use: '--text-body-2-pc (12px on -sp), 400, 150%; the header buttons at 700'
  body-1:
    fontSize: 18px
    use: '--text-body-1-pc (14px on -sp), 400, 150% — and body-1-wide at 200%'
  headline-3:
    fontSize: 22px
    use: '--text-headline-3-pc (16px on -sp), 700, 150%'
  headline-2:
    fontSize: 24px
    use: '--text-headline-2-pc (18px on -sp), 700, 130%'
  headline-1:
    fontSize: 38px
    use: '--text-headline-1-pc (28px on -sp), 700, 130%'
  headline-0:
    fontSize: 40px
    use: '--text-headline-0-pc (30px on -sp), 700, 130%'
rounded:
  lg: 16px
  xl: 24px
  pill: 9999px
components:
  button-signup:
    type: button
    backgroundColor: 'linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)'
    textColor: '#ffffff'
    rounded: 9999px
    height: 36px
    typography: 16px / 700
    hover: '#ffffff, fg #00c1d4, border 2px #00c1d4'
    pressed: '#ffffff, fg #00c1d4, border 2px #00c1d4'
    use: 新規登録 in the header — white text on the brand gradient (the --color-pairs-gradient PNG; stops sampled from its pixels). Hover drops the gradient for white with a teal label and a 2px teal border. Focus is the browser's ring.
  button-cta-large:
    type: button
    backgroundColor: 'linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)'
    textColor: '#ffffff'
    rounded: 90px
    height: 72px
    padding: 24px 0
    typography: 18px / 700
    hover: '#ffffff, fg #00c1d4, border 2px #00c1d4'
    pressed: '#ffffff, fg #00c1d4, border 2px #00c1d4'
    use: 今すぐ無料ではじめる, 307×72 — the same gradient and the same inversion on hover, at the large size.
  button-login:
    type: button
    backgroundColor: transparent
    textColor: '#00c1d4'
    border: '2px solid #00c1d4'
    rounded: 9999px
    height: 36px
    typography: 16px / 700
    hover: '#a5eaf5, fg #ffffff, border #a5eaf5'
    pressed: '#a5eaf5, fg #ffffff, border #a5eaf5'
    use: 'ログイン — the outline twin: teal border and label, filling with pale teal and turning the label white on hover.'
  card-testimonial:
    type: card
    backgroundColor: transparent
    textColor: '#000000'
    border: '#dae4e5'
    hover: transparent
    pressed: transparent
    use: Member testimonial cards (links). Nothing changes on hover or press — the seven compared values stay the same; only the browser's focus ring marks them.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans JP
    latin: Roboto
---

# Design System Inspiration of Pairs (ペアーズ)

## Overview

### Visual Theme & Atmosphere

Pairs is a Japanese dating app run by 株式会社エウレカ (Eureka, Inc.) in Tokyo. In May 2015 Match
Group, the US online-dating company, acquired Eureka outright and kept Pairs running as its own
brand. The stylesheet looks beyond Japan: alongside the Japanese font stack it carries one for
Korean and one for Traditional Chinese.

The landing page is light, soft and teal. A brand cyan **`#00c1d4`** carries every interactive
border and label, a pale **`#e0f8fc`** tints whole sections, text sits in a green-grey
**`#325151`** rather than black, and the calls to action sit on a **mint-to-cyan gradient** —
`#70dfab` to `#3bd6cb` to `#20cfe3`. Everything round is fully round.

What makes it worth reading:

- **The gradient is an image token.** `--color-pairs-gradient` is not a CSS gradient but a
  `url(data:image/png…)` — a 29×6 PNG stretched across the button. Its colours had to be read off
  its pixels.
- **Every type step has two sizes.** `--text-headline-0-pc` is 2.5rem and `--text-headline-0-sp`
  1.875rem — the desktop and smartphone sizes are separate tokens, not a fluid scale.
- **Hover inverts.** The gradient buttons turn white with a teal label; the outline button fills.

#### Primary tasks
- Sign up (新規登録); start free; log in.
- Read member stories and the "happiness report".

### Brand Narrative

Pairs sells trust in a category that needs it, and the page looks it: clean, soft and pale, with a
single fresh teal and no hard edges. The gradient — mint into cyan — is the one flourish, and it is
spent on the button that starts everything.

The token set reads like a product built for more than one country and more than one screen: a font
stack per market, a type scale that names its desktop and phone sizes separately, and a brand ramp
kept apart from a generic blue so that the two never blur. A Tailwind build sits underneath, but the
brand decisions are written as Pairs' own tokens on top of it.

### Principles

- **One teal, one gradient.** Teal for interaction, the gradient for the first step.
- **Soft, not black.** Green-grey text on white and pale teal.
- **Two screens, two sizes.** Every type step names both.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `www.pairs.lv`: 217 root custom properties, 264 across all
rules. **Tailwind v4's are excluded** — `--tw-*`, the stock `--text-xs…6xl`, `--radius-sm…3xl`,
`--font-weight-*`, tracking and leading defaults, and Tailwind's own `lab()` greys
(`--color-gray-100…900`), none of which paints anything on the page. About 100 remain, Pairs' own.

### Teal — the brand

`--color-pairs-blue-00…06` (there is no `-04`):

- **Primary** (`#00c1d4`) — `pairs-blue-03`. The most-painted teal: the login button's border and
  label, every hover label and border (9 backgrounds, the interactive colour).
- **Primary Link** (`#0096a9`) — `pairs-blue-01`, also `--color-fontColor-link`.
- **Primary Strong** (`#00aec2`) — `pairs-blue-02`, accent text (17 elements).
- **Primary Deep** (`#007f90`) — `pairs-blue-00`.
- **Primary Light** (`#a5eaf5`) — `pairs-blue-05`, the login button's hover fill.
- **Primary Surface** (`#e0f8fc`) — `pairs-blue-06`, section backgrounds (10).

A separate, bluer ramp, `--color-blue-00…04` (**`#007bcc`** first), is not the brand teal. Keep them
apart.

### The gradient

`--color-pairs-gradient` is `url(data:image/png;base64,…)`, a 29×6 raster. Sampled across its
middle row at x = 0, 7, 14, 21 and 28 it reads `#70dfab`, `#3bd6cb`, `#20cfe3`, `#40d2e5`, `#46d2e5`
— **Gradient Start** (`#70dfab`), a mint; **Gradient Mid** (`#3bd6cb`), a teal; **Gradient End**
(`#20cfe3`), a cyan, easing slightly lighter at the right edge. It is the background of both sign-up
buttons.

### Ink and neutrals

`--color-gray-00…07`: `#0a2c2f` · `#325151` · `#678181` · `#96aaaa` · `#bfcfcf` · `#dae4e5` ·
`#ebf2f2` · `#f4fbfb` — greys with a green-teal cast throughout.

- **Ink** (`#0a2c2f`) — `gray-00`, `--color-fontColor-primary`. `--color-fontColor-secondary` is the
  same at 70%.
- **Foreground** (`#325151`) — `gray-01`. The colour of most `<p>` text on the page.
- **Gray 02** (`#678181`) · **Gray 03** (`#96aaaa`).
- **Border** (`#dae4e5`) — `gray-05`. The hairline on **934** elements — the page separates things
  with lines, not shadows.
- **Gray 06** (`#ebf2f2`) · **Surface** (`#f4fbfb`) — `gray-07` · **Canvas** (`#ffffff`).

`--color-fontColor-placeholder` is `#22252766` — a different near-black at 40%, rendered on
placeholder text.

### Status and accents

**Red** `#d03138` (ramp to **`#ef3f45`** and `#ffefeb`) · **Green** `#028541` · **Yellow**
`#f1bf00` · **Orange** `#ff8831` · **Purple** `#6e7de2` · **Blue** `#007bcc`.

## Typography

### Font family

`--font-sans-ja` is `"Roboto", "Noto Sans JP", system-ui, sans-serif`, and body, headings and
buttons all compute it. `document.fonts` shows **Roboto** 400 and 700 and **Noto Sans JP** 400 and
700 loaded — Roboto for Latin letters and numerals, Noto Sans JP for Japanese. Both are open
Google-published faces, recorded as what is served.

The same stylesheet carries `--font-sans-ko` (`"Nanum Gothic"`), `--font-sans-ko-noto-sans-kr` and
`--font-sans-zh-tw` (`"Noto Sans TC"`) for Korean and Traditional Chinese; they are not used on
the Japanese page.

### Scale — two sizes per step

| token | -pc | -sp | weight | line height |
|---|---|---|---|---|
| headline-0 | 2.5rem | 1.875rem | 700 | 130% |
| headline-1 | 2.375rem | 1.75rem | 700 | 130% |
| headline-2 | 1.5rem | 1.125rem | 700 | 130% |
| headline-3 | 1.375rem | 1rem | 700 | 150% |
| headline-4 | 1.125rem | .875rem | 700 | 150% |
| headline-5 | 1rem | .875rem | 700 | 150% |
| headline-6 | .875rem | .75rem | 700 | 150% |
| body-1 | 1.125rem | .875rem | 400 | 150% |
| body-1-wide | 1.125rem | .875rem | 400 | **200%** |
| body-2 | 1rem | .75rem | 400 | 150% |
| caption-1 | .875rem | .625rem | 400 | 150% |
| caption-2 | .75rem | .625rem | 400 | 150% |

Headlines are always 700 and body and captions always 400 — weight marks the family, size marks the
step. `--breakpoint-pc` is 1024px.

## Layout

- Lines, not shadows: the `#dae4e5` hairline separates cards, lists and sections.
- Pale teal bands (`#e0f8fc`) alternate with white to structure the long page.
- Desktop and smartphone are designed as two sizes of one scale, switched at `--breakpoint-pc`.

### Responsive Behavior

**Not measured** beyond the tokens: desktop 1440×1000 only. The `-sp` sizes and
`--breakpoint-pc: 1024px` describe the phone layout; it was not rendered.

## Elevation & Depth

One shadow on the page: `rgba(0,0,0,0.2) 0 0 18px 0`, a soft centred glow, used once. Elevation is
otherwise absent.

## Motion & Easing

The buttons transition over 0.3s. No motion token is published.

---

**Tier 1 sources:** https://www.pairs.lv/ (live landing page — 217 root custom properties read via `getComputedStyle`, Tailwind v4 excluded; the --color-pairs-gradient PNG decoded and sampled by pixel; four components measured at rest, hover, pressed and focus; Roboto and Noto Sans JP loaded, captured 2026-09-26); https://www.pairs.lv/zz-this-does-not-exist (nonsense-path control — a real HTTP 404, 「ページが見つかりませんでした。」, captured 2026-09-26); https://eure.jp/ (株式会社エウレカ corporate site, read 2026-09-26)

**Regional sources:** https://thebridge.jp/en/2015/05/eureka-acquired-by-match-group (BRIDGE, 2015-05 — "Japan's Eureka, developer of dating and couple apps, acquired by Match Group"); https://www.globaldatinginsights.com/news/02062015-japanese-dating-developer-eureka-acquired-by-the-match-group/ (Global Dating Insights — "Japanese Dating Developer Eureka Acquired By The Match Group")

## Components

Four components, every state on its own page load, focus read before the mouse moved.

- **Sign up (header)** — the brand gradient with a white 16px/700 label, a pill 36px tall. Hover and
  press drop the gradient: the button turns **white with a `#00c1d4` label and a 2px `#00c1d4`
  border**, over 0.3s.
- **Start free (large)** — the same gradient and the same inversion, 72px tall, 18px/700, 90px
  radius.
- **Log in** — transparent with a 2px `#00c1d4` border and label. Hover fills **`#a5eaf5`** and turns
  the label white.
- **Testimonial cards** — links with `#000000` text and a `#dae4e5` hairline. **Nothing changes on hover or press.**

The two button patterns are mirror images: the filled gradient empties to an outline, the outline
fills.

### Focus is the browser's

Every measured control shows Chrome's `auto` ring under `:focus-visible`. No focus colour is
recorded. The header navigation (ホーム, 料金) could not be isolated on the page and is not measured.

### Radius

Pills everywhere for buttons (a `9999px`-class radius, 12 elements); cards at **24px** (18) and
**16px** (14); 90px on the large button; a few one-offs (48px, 40px).

### States

Four components. Hover: the gradient buttons invert to white with a teal label and border; the login
button fills pale teal with a white label; testimonial cards do not change. Focus is the browser's
`auto` ring throughout. No disabled state was observed.

## Do's and Don'ts

### Do
- Use `#00c1d4` for interactive borders and labels, and the mint-to-cyan gradient for the primary
  call to action.
- Set text in the green-grey `#325151` (or `#0a2c2f` for emphasis), not black.
- Separate with `#dae4e5` hairlines.
- Pick the `-pc` or `-sp` size of a type step rather than scaling one size.

### Don't
- Don't use the `--color-blue-*` ramp as the brand colour; the brand is `--color-pairs-blue-*`.
- Don't count Tailwind's `lab()` greys or stock text sizes as Pairs tokens.
- Don't recreate the gradient as brighter or more saturated than its sampled stops.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#00c1d4` brand teal · gradient `#70dfab → #3bd6cb → #20cfe3` · `#0096a9` link · `#a5eaf5` light ·
`#e0f8fc` surface · `#325151` text · `#0a2c2f` ink · `#dae4e5` hairline · `#f4fbfb` / `#ffffff`
backgrounds · `#d03138` red

### Example Component Prompts
- "A 36px pill: `linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)`, white 16px/700; hover turns it
  white with a `#00c1d4` label and 2px `#00c1d4` border."
- "An outline pill: 2px `#00c1d4` border and label; hover fills `#a5eaf5` with a white label."

## Governance

### Known Gaps

- **Contrast, `card-testimonial`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
