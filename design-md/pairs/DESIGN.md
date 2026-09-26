---
id: pairs
name: Pairs
country: JP
category: consumer-tech
homepage: "https://www.pairs.lv"
primary_color: "#00C1D4"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pairs.lv&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Pairs web tokens"
  url: "https://www.pairs.lv/"
  type: system
  description: "About 100 brand custom properties on the landing page beside Tailwind v4's own: a brand teal ramp (--color-pairs-blue-*), two-digit neutral and status ramps, font-colour roles, locale-switched font stacks for Japan, Korea and Taiwan, and a complete type scale that gives every headline, body and caption step a desktop (-pc) and smartphone (-sp) size. The brand gradient is a token too — a 29×6 PNG, not a CSS gradient."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#00c1d4"
    primary-link: "#0096a9"
    primary-strong: "#00aec2"
    primary-deep: "#007f90"
    primary-light: "#a5eaf5"
    primary-surface: "#e0f8fc"
    gradient-start: "#70dfab"
    gradient-mid: "#3bd6cb"
    gradient-end: "#20cfe3"
    ink: "#0a2c2f"
    foreground: "#325151"
    gray-02: "#678181"
    gray-03: "#96aaaa"
    border: "#dae4e5"
    gray-06: "#ebf2f2"
    surface: "#f4fbfb"
    canvas: "#ffffff"
    blue: "#007bcc"
    red: "#d03138"
    red-bright: "#ef3f45"
    green: "#028541"
    yellow: "#f1bf00"
    orange: "#ff8831"
    purple: "#6e7de2"
  typography:
    family: { sans: "Noto Sans JP", latin: "Roboto" }
    caption-2: { size: 12, use: "--text-caption-2-pc (10px on -sp), 400, 150%" }
    caption-1: { size: 14, use: "--text-caption-1-pc (10px on -sp), 400, 150%" }
    body-2: { size: 16, use: "--text-body-2-pc (12px on -sp), 400, 150%; the header buttons at 700" }
    body-1: { size: 18, use: "--text-body-1-pc (14px on -sp), 400, 150% — and body-1-wide at 200%" }
    headline-3: { size: 22, use: "--text-headline-3-pc (16px on -sp), 700, 150%" }
    headline-2: { size: 24, use: "--text-headline-2-pc (18px on -sp), 700, 130%" }
    headline-1: { size: 38, use: "--text-headline-1-pc (28px on -sp), 700, 130%" }
    headline-0: { size: 40, use: "--text-headline-0-pc (30px on -sp), 700, 130%" }
  rounded: { lg: 16, xl: 24, pill: 9999 }
  components:
    button-signup: { type: "button", bg: "linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)", fg: "#ffffff", radius: 9999, height: "36px", font: "16px / 700", hover: "#ffffff, fg #00c1d4, border 2px #00c1d4", pressed: "#ffffff, fg #00c1d4, border 2px #00c1d4", use: "新規登録 in the header — white text on the brand gradient (the --color-pairs-gradient PNG; stops sampled from its pixels). Hover drops the gradient for white with a teal label and a 2px teal border. Focus is the browser's ring." }
    button-cta-large: { type: "button", bg: "linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)", fg: "#ffffff", radius: 90, height: "72px", padding: "24px 0", font: "18px / 700", hover: "#ffffff, fg #00c1d4, border 2px #00c1d4", pressed: "#ffffff, fg #00c1d4, border 2px #00c1d4", use: "今すぐ無料ではじめる, 307×72 — the same gradient and the same inversion on hover, at the large size." }
    button-login: { type: "button", bg: "transparent", fg: "#00c1d4", border: "2px solid #00c1d4", radius: 9999, height: "36px", font: "16px / 700", hover: "#a5eaf5, fg #ffffff, border #a5eaf5", pressed: "#a5eaf5, fg #ffffff, border #a5eaf5", use: "ログイン — the outline twin: teal border and label, filling with pale teal and turning the label white on hover." }
    card-testimonial: { type: "card", bg: "transparent", fg: "#000000", border: "#dae4e5", hover: "transparent", pressed: "transparent", use: "Member testimonial cards (links). Nothing changes on hover or press — the seven compared values stay the same; only the browser's focus ring marks them." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.pairs.lv/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.pairs.lv/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.pairs.lv/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: eureka-corp, kind: official-doc, url: "https://eure.jp/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gradient-end: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gradient-mid: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gradient-start: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-02: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-03: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-06: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.orange: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-link: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.purple: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red-bright: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-cta-large.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-cta-large.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-login.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-signup.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-testimonial.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body-1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body-1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body-2.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body-2.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.caption-1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.caption-1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.caption-2.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.caption-2.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.latin: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-0.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-0.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-1.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-1.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-2.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-2.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-3.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.headline-3.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Pairs (ペアーズ)

## 1. Visual Theme & Atmosphere

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

### Primary tasks
- Sign up (新規登録); start free; log in.
- Read member stories and the "happiness report".

## 2. Color Palette & Roles

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

## 3. Typography Rules

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

## 4. Component Stylings

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

## 5. Layout Principles

- Lines, not shadows: the `#dae4e5` hairline separates cards, lists and sections.
- Pale teal bands (`#e0f8fc`) alternate with white to structure the long page.
- Desktop and smartphone are designed as two sizes of one scale, switched at `--breakpoint-pc`.

## 6. Depth & Elevation

One shadow on the page: `rgba(0,0,0,0.2) 0 0 18px 0`, a soft centred glow, used once. Elevation is
otherwise absent.

## 7. Do's and Don'ts

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

## 8. Responsive Behavior

**Not measured** beyond the tokens: desktop 1440×1000 only. The `-sp` sizes and
`--breakpoint-pc: 1024px` describe the phone layout; it was not rendered.

## 9. Agent Prompt Guide

### Quick Color Reference
`#00c1d4` brand teal · gradient `#70dfab → #3bd6cb → #20cfe3` · `#0096a9` link · `#a5eaf5` light ·
`#e0f8fc` surface · `#325151` text · `#0a2c2f` ink · `#dae4e5` hairline · `#f4fbfb` / `#ffffff`
backgrounds · `#d03138` red

### Example Component Prompts
- "A 36px pill: `linear-gradient(90deg, #70dfab, #3bd6cb, #20cfe3)`, white 16px/700; hover turns it
  white with a `#00c1d4` label and 2px `#00c1d4` border."
- "An outline pill: 2px `#00c1d4` border and label; hover fills `#a5eaf5` with a white label."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

Pairs sells trust in a category that needs it, and the page looks it: clean, soft and pale, with a
single fresh teal and no hard edges. The gradient — mint into cyan — is the one flourish, and it is
spent on the button that starts everything.

The token set reads like a product built for more than one country and more than one screen: a font
stack per market, a type scale that names its desktop and phone sizes separately, and a brand ramp
kept apart from a generic blue so that the two never blur. A Tailwind build sits underneath, but the
brand decisions are written as Pairs' own tokens on top of it.

## 12. Principles

- **One teal, one gradient.** Teal for interaction, the gradient for the first step.
- **Soft, not black.** Green-grey text on white and pale teal.
- **Two screens, two sizes.** Every type step names both.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components. Hover: the gradient buttons invert to white with a teal label and border; the login
button fills pale teal with a white label; testimonial cards do not change. Focus is the browser's
`auto` ring throughout. No disabled state was observed.

## 15. Motion & Easing

The buttons transition over 0.3s. No motion token is published.

---

**Tier 1 sources:** https://www.pairs.lv/ (live landing page — 217 root custom properties read via `getComputedStyle`, Tailwind v4 excluded; the --color-pairs-gradient PNG decoded and sampled by pixel; four components measured at rest, hover, pressed and focus; Roboto and Noto Sans JP loaded, captured 2026-09-26); https://www.pairs.lv/zz-this-does-not-exist (nonsense-path control — a real HTTP 404, 「ページが見つかりませんでした。」, captured 2026-09-26); https://eure.jp/ (株式会社エウレカ corporate site, read 2026-09-26)

**Regional sources:** https://thebridge.jp/en/2015/05/eureka-acquired-by-match-group (BRIDGE, 2015-05 — "Japan's Eureka, developer of dating and couple apps, acquired by Match Group"); https://www.globaldatinginsights.com/news/02062015-japanese-dating-developer-eureka-acquired-by-the-match-group/ (Global Dating Insights — "Japanese Dating Developer Eureka Acquired By The Match Group")
