---
id: ft
name: Financial Times
country: UK
category: consumer-tech
homepage: "https://www.ft.com"
primary_color: "#0D7680"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ft.com&sz=128"
verified: "2026-09-23"
added: "2026-09-23"
omd: "0.1"
ds:
  name: "Origami (o3)"
  url: "https://origami.ft.com/"
  type: system
  description: "The FT Group's design system, serving five brand skins (core, professional, sustainable, internal, whitelabel). ft.com exposes it as --o3-* custom properties scoped by [data-o3-brand]: a named palette with tint ladders, colour use-case tokens, a rem spacing scale, and Metric / Financier Display type tokens. The documentation site moved behind a sign-in during 2026; the tokens on ft.com match its last public snapshot."
tokens:
  source: live-extract
  extracted: "2026-09-23"
  colors:
    primary: "#0d7680"
    primary-hover: "#0a5e66"
    primary-pressed: "#052f33"
    link-hover: "#08474d"
    link-underline: "#cfd8d1"
    canvas: "#fff1e5"
    surface-light: "#fff7ef"
    wheat: "#f2dfce"
    black-10: "#e6d9ce"
    black-20: "#ccc1b7"
    foreground: "#33302e"
    support-text: "#4d4845"
    muted-text: "#807973"
    black-60: "#66605c"
    slate: "#262a33"
    muted-inverse: "#a8aaad"
    claret: "#990f3d"
    oxford: "#0f5499"
    ft-pink: "#fcd0b1"
    crimson: "#cc0000"
    velvet: "#593380"
    mandarin: "#ff8833"
    jade: "#00994d"
    sky: "#cce6ff"
    success: "#00572c"
    success-surface: "#d7f0d1"
    white: "#ffffff"
  typography:
    family: { sans: "Metric", display: "Financier Display" }
    detail: { size: 14, use: "--o3-type-detail and -label; 66 text elements" }
    body: { size: 16, use: "--o3-type-body-base; 116 text elements, the dominant size" }
    body-lg: { size: 18, use: "--o3-type-body-lg" }
    headline-sm: { size: 20, use: "--o3-type-headline-sm / title-sm; Financier Display story headlines, 54 elements" }
    title-md: { size: 24, use: "--o3-type-title-md" }
    title-lg: { size: 28, use: "--o3-type-title-lg" }
    display-sm: { size: 32, use: "--o3-type-display-sm / headline-md" }
    display-md: { size: 40, use: "--o3-type-display-md / headline-lg" }
    display-lg: { size: 48, use: "--o3-type-display-lg, the largest use-case size" }
  spacing: { 5xs: 4, 4xs: 8, 3xs: 12, 2xs: 16, xs: 20, s: 24, m: 32, l: 40, xl: 48, 2xl: 64, 3xl: 80, 4xl: 96 }
  rounded: { xs: 2, sm: 3, md: 4 }
  components:
    button-subscribe: { type: "button", bg: "#262a33", fg: "#ffffff", radius: 2, height: "28px", padding: "0 8px", font: "12px / 700", focus: "ring 0 0 0 4px #ffffff, 0 0 0 8px #4d4845", use: "Subscribe in the header — slate with white Metric. Focus draws a two-layer authored ring, white inside black-70. Hover was not measured." }
    button-offers: { type: "button", bg: "#ffffff", fg: "#262a33", radius: 2, height: "44px", padding: "0 16px", font: "16px / 700", focus: "ring 0 0 0 4px #4d4845, 0 0 0 8px #ffffff", use: "Explore offers — the inverse button, white on a dark band. Its focus ring inverts too: black-70 inside, white outside. Hover was not measured." }
    link-signin: { type: "button", bg: "transparent", fg: "#33302e", height: "48px", padding: "8px 0", font: "14px / 400", focus: "ring 0 0 0 2px #807973", use: "Sign In in the header. Focus draws a 2px ring in the muted-text colour. Hover was not measured." }
    link-nav: { type: "button", bg: "transparent", fg: "#33302e", height: "36px", padding: "8px 0", font: "12px / 600", focus: "ring 0 0 0 2px #807973", use: "Section navigation (WORLD, COMPANIES …). The current section, HOME, is set in #0a5e66. Focus draws the same 2px ring. Hover was not measured." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-23"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ft.com/", inspected: "2026-09-23" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ft.com/", captured: "2026-09-23" }
    - { id: control-404, kind: product-surface, url: "https://www.ft.com/zz-this-does-not-exist", captured: "2026-09-23" }
    - { id: origami-colours-archive, kind: official-doc, url: "https://web.archive.org/web/20251229031638/https://origami.ft.com/foundations/colours/", captured: "2026-09-23" }
  conflicts: []
  claims:
    tokens.colors.black-10: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.black-20: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.black-60: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.claret: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.crimson: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.ft-pink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.jade: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.link-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.link-underline: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.mandarin: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.muted-inverse: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.muted-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.oxford: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.sky: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.slate: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.success-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.support-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.surface-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.velvet: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.wheat: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.white: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.components.button-offers.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-offers.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-subscribe.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.link-signin.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.2xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.2xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.3xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.3xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.4xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.4xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.5xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.l: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.m: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.body-lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.body-lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.detail.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.detail.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-md.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-md.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-sm.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display-sm.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.headline-sm.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.headline-sm.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.title-lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.title-lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.title-md.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.title-md.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
---
# Design System Inspiration of Financial Times

## 1. Visual Theme & Atmosphere

The Financial Times is a London business newspaper whose colour is its name in the street — the
pink newspaper — and on ft.com that pink becomes the page itself. Origami, the FT's design system, calls it **paper `#fff1e5`** — "a
lighter, more legible shade of FT Pink" that "can be seen as a kind of replacement of white". The
logo pink, **`#fcd0b1`**, is kept off the interface entirely: Origami's own guidance is that FT
pink and FT grey "are not used for digital UI".

Against the paper sits a warm, slightly brown ink **`#33302e`** on 1,121 text elements, and a
deep **teal `#0d7680`** on 270 — every headline link on the home page. Origami names teal "the
most striking colour and main CTA colour on ft.com", reserved for "buttons, text links and other
critical functional use cases". **Claret `#990f3d`** marks myFT, the reader's personal feed, and
**oxford `#0f5499`** marks opinion.

The type came out of a redesign completed in 2014: **Financier**, drawn for the FT by Kris
Sowersby at Klim Type Foundry and sold to everyone else from 2016, and its sans companion
**Metric**. On the home page, story headlines are Financier Display at 20px and everything else —
navigation, labels, buttons, standfirsts — is Metric.

What makes it worth reading:

- **The background is a brand colour.** Paper, not white, is the ground, and the grey ramp is
  mixed into it: `black-10` is `#e6d9ce`, a pink-grey, not a neutral.
- **One system, five brands.** Tokens are scoped by `[data-o3-brand]`; the page's `core` brand
  and FT Professional share a palette but not button colours.
- **Focus is authored.** Every measured control draws its own ring — two-layer box-shadows that
  flip to suit their ground.

### Primary tasks
- Read the day's stories; move between sections.
- Subscribe; sign in.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `ft.com`: the root exposes 101 `--o3-*` properties (grid, the icon
set as SVG data URIs, z-index), and the colour, spacing and type tokens sit in rules scoped to
`[data-o3-brand="core"]` and `[data-o3-brand="professional"]`. Values below are those computed on
the page's `core` brand.

### Teal — action and links

- **Primary** (`#0d7680`) — `--o3-color-palette-teal`, `--o3-color-use-case-button-default` and
  `--o3-color-use-case-link-text`.
- **Primary Hover** (`#0a5e66`) — `--o3-color-use-case-button-hover` (`teal-40`); also the colour
  of the current section in the navigation.
- **Primary Pressed** (`#052f33`) — `--o3-color-use-case-button-pressed` (`teal-20`).
- **Link Hover** (`#08474d`) — `--o3-color-use-case-link-text-hover`.
- **Link Underline** (`#cfd8d1`) — `--o3-color-use-case-link-underline`, a grey-green.

FT Professional's button tokens are different — `#515257` hover, `#7d7a7a` pressed — under the
same names. The brand attribute decides.

### Paper and the warm greys

- **Canvas** (`#fff1e5`) — `--o3-color-palette-paper` and `--o3-color-use-case-page-background`.
  The page background.
- **Surface Light** (`#fff7ef`) — `white-40`, the most-painted element background (17).
- **Wheat** (`#f2dfce`) · **Black 10** (`#e6d9ce`) · **Black 20** (`#ccc1b7`) — panels, rules,
  borders.

The `black-N` ladder is black mixed into paper: `black-5` `#f2e5da` through `black-90` `#1a1817`.
There is a parallel `white-N` ladder, `white-10` `#fff2e8` to `white-80` `#fffcfa`.

### Ink

- **Foreground** (`#33302e`) — `black-80`, `--o3-color-use-case-body-text`, `heading-text`,
  `caption-text` and `footer-text`. Every `<p>` on the page.
- **Support Text** (`#4d4845`) — `black-70`, `--o3-color-use-case-support-text`.
- **Muted Text** (`#807973`) — `black-50`, `--o3-color-use-case-muted-text`, and the colour of the
  2px focus ring.
- **Black 60** (`#66605c`) — 16 text elements.

### Inverse

**Slate** (`#262a33`) — `--o3-color-use-case-page-inverse-background` and the Subscribe button ·
**Muted Inverse** (`#a8aaad`) — `--o3-color-use-case-muted-inverse-text`, 71 elements on dark
bands · **White** (`#ffffff`).

### Brand identifiers

**Claret** (`#990f3d`) — myFT; Origami says never as a background · **Oxford** (`#0f5499`) —
opinion · **FT Pink** (`#fcd0b1`) — the logo; not for UI.

### Tertiary and status

**Crimson** `#cc0000` (also `--o3-color-use-case-error`) · **Velvet** `#593380` · **Mandarin**
`#ff8833` · **Jade** `#00994d` · **Sky** `#cce6ff` · **Success** `#00572c` on **`#d7f0d1`**.
The palette also names candy `#ff7faa`, wasabi `#96cc28`, lemon `#ffec1a`, light-blue `#00a0dd`,
graphics-dark-blue `#006f9b`, matisse-blue `#355778` and mint `#c0efd8`, each with tint steps.

## 3. Typography Rules

### Font family

Both faces load on the page (`document.fonts`): **`financier display VF`** (200–800) and
**`metric 2 VF`** (300–800), self-hosted variable fonts. `--o3-font-family-metric` is
`"metric 2 VF",sans-serif`; `--o3-font-family-financier-display` is
`"financier display VF",serif`.

Origami's third family, `--o3-font-family-georgia`, is the system Georgia, documented for article
body copy as a system face that spares readers a font download.
It did not render on the home page and is not recorded as a brand face.

### Scale

Use-case tokens compose family, weight, size and line height: `display-lg` 3rem · `display-md`
2.5rem · `display-sm` 2rem · `headline-lg` 2.5rem · `headline-md` 2rem · `headline-sm` 1.25rem ·
`title-lg` 1.75rem · `title-md` 1.5rem · `title-sm` 1.25rem · `body-lg` 1.125rem · `body-base`
1rem · `detail` and `label` 0.875rem (labels uppercase, `--o3-type-label-text-case`).

Rendered: Metric 16px ×116 · 14px ×66 · 12px ×56; Financier Display 20px ×54 · 24px ×18 · 18px
×5 · 28px ×5 · 32px ×3 · 48px ×1. Weights run `--o3-font-weight-light` 300 to `-bold` 800, with
`semibold` at 700. Line width is capped at `--o3-typography-max-line-width: 60ch`.

## 4. Component Stylings

Four controls declared. **Collected through the Aside Browser** (the owner's desktop Chrome), because
local headless automation meets a Cloudflare challenge on ft.com. Rest and focus were measured,
with focus read under a real Tab key first. **Hover and pressed were not measured**: the
session's pointer did not produce `:hover` on the page (checked with `matches(':hover')`, which
returned false), so no hover state is recorded — which is not the same as saying there is none.

- **Subscribe** — `#262a33`, white Metric 12px/700, **2px** radius, 28px tall, `0 8px`.
- **Explore offers** — `#ffffff`, `#262a33` label, 16px/700, 2px radius, 44px, `0 16px`.
- **Sign In** — ink `#33302e`, 14px/400, 48px.
- **Section navigation** — ink, 12px/600, 36px; the current section in `#0a5e66`.

Origami's documented button colours — `#0d7680`, hover `#0a5e66`, pressed `#052f33` — are the
tokens for teal buttons; none of the four measured controls is a teal button.

### Focus is authored

| control | focus |
|---|---|
| Subscribe (dark) | `0 0 0 4px #ffffff, 0 0 0 8px #4d4845` — white inside, black-70 outside |
| Explore offers (light, on a dark band) | `0 0 0 4px #4d4845, 0 0 0 8px #ffffff` — the same two rings, swapped |
| Sign In, navigation | `0 0 0 2px #807973` |

Each ring is a box-shadow with `outline: none` and `outline-offset: 1px`. The two-ring version
keeps contrast on either ground by putting a light and a dark ring next to each other, and it
flips which one is inside depending on the button.

### Radius

Small and square: **4px** ×16 · **2px** ×12 · 3px ×5, plus `50%` circles ×7. Origami documents no
radius scale; these are the rendered values.

## 5. Layout Principles

- A 12-column grid with a 24px gap, max width 1220px: `--o3-grid-columns: 12`,
  `--o3-grid-gap: 24px`, and `--o3-grid-template` adding a `1fr` bleed column each side.
- Spacing is a rem scale: `5xs` 4 · `4xs` 8 · `3xs` 12 · `2xs` 16 · `xs` 20 · `s` 24 · `m` 32 ·
  `l` 40 · `xl` 48 · `2xl` 64 · `3xl` 80 · `4xl` 96px.
- Layering is named: `--o3-z-popover` 10 · `-navigation-popover` 20 · `-message-polite-popover`
  30 · `-message-service-popover` 35 · `-modal-dialog` 40.

## 6. Depth & Elevation

Nearly flat. One shadow on the home page:
`rgba(77,72,69,0.15) 0 1px 4px, rgba(77,72,69,0.2) 0 8px 14px` — tinted with black-70 `#4d4845`,
not black. Origami documents no elevation scale.

## 7. Do's and Don'ts

### Do
- Put content on paper `#fff1e5`, not white.
- Use teal `#0d7680` for links and primary actions; claret only for myFT; oxford for opinion.
- Draw focus as a paired light-and-dark ring so it reads on any ground.
- Set headlines in Financier Display and everything functional in Metric.

### Don't
- Don't use FT pink `#fcd0b1` or FT grey in the interface.
- Don't use a neutral grey — the greys are paper-tinted.
- Don't use claret as a background.
- Don't take FT Professional's grey button tokens for ft.com's.

## 8. Responsive Behavior

**Not measured.** Desktop only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#fff1e5` paper · `#33302e` ink · `#0d7680` teal · `#0a5e66` teal hover · `#990f3d` claret ·
`#0f5499` oxford · `#262a33` slate · `#f2dfce` wheat · `#e6d9ce` / `#ccc1b7` rules ·
`#807973` muted · `#cc0000` error

### Example Component Prompts
- "A story list on `#fff1e5`: Financier Display 20px headlines in `#0d7680`, Metric 16px
  standfirst in `#33302e`."
- "A 28px Subscribe button: `#262a33`, white Metric 12px/700, 2px radius; focus ring
  `0 0 0 4px #fff, 0 0 0 8px #4d4845`."

## 10. Voice & Tone

Not assessed as authored voice. 10,211 characters on the measured surface.

## 11. Brand Narrative

Few brands own a colour as completely as the FT owns its pink, and the digital product handles
that inheritance with restraint: the pink becomes a pale paper that makes the screen feel like the
newspaper, while the saturated logo pink is kept out of the interface. Everything that asks for a
reader's action is teal; everything that belongs to the reader's own feed is claret; opinion is
oxford blue. The greys are mixed from the paper rather than from white, so even the dividers are
warm.

The type does the same work. Financier, drawn for the FT's 2014 redesign, gives headlines the
authority of print; Metric carries the interface. Origami packages all of it — for ft.com and for
the FT Group's other brands — as tokens that one attribute switches between.

## 12. Principles

- **Paper, not white.** The ground is the brand.
- **Colour means a job.** Teal acts, claret is yours, oxford is opinion.
- **Focus must read everywhere.** Pair a light ring with a dark one.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components. Focus measured on all four: two-layer rings on the buttons (swapped between
dark and light buttons) and a 2px `#807973` ring on links. Hover and pressed **not measured** —
the collector could not produce `:hover`. Origami documents teal button hover `#0a5e66` and
pressed `#052f33`, and link hover `#08474d` with underline `#9ec0bd`.

## 15. Motion & Easing

The buttons compute `transition-duration: 0.3s, 0.15s, 0.15s`; the links have none. No motion
tokens are published.

---

**Tier 1 sources:** https://www.ft.com/ (live home page through the Aside Browser — 101 root `--o3-*` properties and brand-scoped colour, spacing and type tokens read via `getComputedStyle`; four controls measured at rest and focus; Financier Display and Metric confirmed loaded, captured 2026-09-23); https://www.ft.com/zz-this-does-not-exist (nonsense-path control — a distinct 「Not found – Financial Times」 page, establishing the host is not a catch-all, captured 2026-09-23); https://web.archive.org/web/20251229031638/https://origami.ft.com/foundations/colours/ (Origami colour documentation, last public snapshot — teal as the main CTA colour, paper as a replacement of white, FT pink and grey not for digital UI; values match the live tokens, read 2026-09-23)

**Regional sources:** https://eyeondesign.aiga.org/new-financier-font-gives-the-financial-times-a-smart-luxurious-update/ (AIGA Eye on Design — Financier by Kris Sowersby at Klim, completed for the 2014 FT redesign, retail release 2016); https://klim.co.nz/in-use/financial-times/ (Klim Type Foundry, Fonts in use — the FT uses Financier Display, Financier Text and Metric)
