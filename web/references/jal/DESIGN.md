---
id: jal
name: JAL
country: JP
category: consumer-tech
homepage: "https://www.jal.co.jp/ja-jp/"
primary_color: "#CC0000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=jal.co.jp&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "JAL ds-* tokens"
  url: "https://www.jal.co.jp/ja-jp/"
  type: system
  description: "416 of the booking surface's 479 custom properties are JAL's own: a four-part semantic colour system (surfaceColor / textColor / iconColor / strokeColor, each role × state), seven language-specific font families, a semantic and a numeric type scale, and colour tokens for every JMB and JGC membership tier. The set is mid-migration — 87 of its 105 semantic colours are published twice under two naming conventions."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    brand: "#cc0000"
    brand-pressed: "#a30000"
    foreground: "#000000"
    subtle: "#666666"
    disabled: "#999999"
    informative: "#2a344b"
    informative-pressed: "#4c559b"
    canvas: "#ffffff"
    border: "#d5d5d5"
    surface-muted: "#e2e7ed"
    surface-alert: "#fdf5f5"
    surface-emphasis: "#e8e8e8"
    neutral-3: "#f5f6f6"
    neutral-80: "#333333"
    icon-white-pressed: "#e1e3e6"
    accent-steel-blue: "#6a7181"
    accent-gray-blue: "#b7c1cd"
    accent-light-cyan: "#f0f7ff"
    red-10: "#fae5e5"
    red-20: "#f7d6d6"
    red-60: "#d63131"
    red-75: "#b80000"
    jmb-crystal-red: "#ba1334"
    jmb-sapphire-blue: "#066fbf"
    jmb-emblem-gold: "#edc900"
    jmb-emblem-bronze: "#733b11"
    jmb-blue: "#0f327b"
    jmb-green: "#097048"
    jgc-three-star: "#960a20"
    jgc-four-star: "#112a6c"
    jgc-five-star: "#535a60"
    jmb-elite: "#652d73"
  typography:
    family: { sans: "Noto Sans JP", english: "Noto Sans", korean: "Noto Sans KR", thai: "Noto Sans Thai", chinese-simplified: "Noto Sans SC", chinese-traditional: "Noto Sans TC", chinese-hongkong: "Noto Sans HK" }
    caption: { size: 11, use: "--text-caption-sm and --fontSize-11; the smallest step" }
    small: { size: 12, use: "--text-body-sm, -caption-md and -label-xs" }
    body: { size: 14, use: "--text-body-md, -caption-lg and -label-sm; the login button's label" }
    base: { size: 16, use: "--text-body-lg and -heading-xs; 188 of 232 rendered text elements" }
    lead: { size: 18, use: "--text-body-xl, -heading-sm and -label-lg" }
    title: { size: 20, use: "--fontSize-20" }
    heading: { size: 24, use: "--fontSize-24" }
    heading-lg: { size: 28, use: "--fontSize-28" }
    display-sm: { size: 32, use: "--fontSize-32" }
    display: { size: 36, use: "--fontSize-36" }
    display-lg: { size: 40, use: "--fontSize-40; the largest published step" }
  spacing: { s4: 4, s8: 8, s16: 16, s20: 20, s24: 24, s32: 32, s40: 40, s48: 48, s64: 64, s96: 96 }
  rounded: { xs: 2, sm: 4, md: 8, lg: 16, pill: 9999 }
  components:
    button-primary: { type: "button", bg: "#cc0000", fg: "#ffffff", border: "1px solid #cc0000", radius: 9999, height: "34px", font: "14px / 700", hover: "#cc0000", focus: "#cc0000", use: "The sign-in pill in the header, 193×34. Hover changes nothing; focus draws a #cc0000 2px solid ring, which is --strokeColor-focus-primary." }
    nav-link: { type: "tab", bg: "#ffffff", fg: "#000000", radius: 0, height: "47px", font: "16px / 700", hover: "#cc0000", focus: "#cc0000", use: "Global navigation item, 80×47. Hover turns the label #cc0000 and grows a 3px bottom border in the same red; focus adds a #cc0000 1px solid ring and a 2px radius on top of that." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.jal.co.jp/ja-jp/", inspected: "2026-09-22" }
    - { id: corporate, kind: product-surface, url: "https://www.jal.com/ja-jp/", inspected: "2026-09-22" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.jal.co.jp/ja-jp/", captured: "2026-09-22" }
    - { id: corp-live, kind: product-surface, url: "https://www.jal.com/ja-jp/", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.accent-gray-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-light-cyan: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.accent-steel-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.icon-white-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.informative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.informative-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jgc-five-star: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jgc-four-star: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jgc-three-star: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-crystal-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-elite: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-emblem-bronze: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-emblem-gold: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.jmb-sapphire-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.neutral-3: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.neutral-80: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-10: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-20: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-60: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.red-75: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-alert: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-emphasis: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.surface-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.components.nav-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s16: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s20: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s24: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s32: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s4: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s40: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s48: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s64: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s8: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.s96: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.base.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.caption.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-sm.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-sm.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.chinese-hongkong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.chinese-simplified: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.chinese-traditional: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.english: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.korean: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.thai: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading-lg.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading-lg.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.heading.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lead.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.title.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of JAL (日本航空)

## 1. Visual Theme & Atmosphere

JAL is Japan's flag carrier, and `jal.co.jp` is a booking surface — white, dense, and set
almost entirely in **Noto Sans JP at 16px** (188 of 232 text-bearing elements). One red,
`#cc0000`, carries the brand.

The token set underneath is a real design system with a component prefix (`ds-button__`,
`ds-globalNav__`) and **416 of the page's 479 custom properties are JAL's own**. Its shape is
four semantic families, one per *thing being coloured*:

```
--surfaceColor-<role>-<state>     what a fill is
--textColor-<role>-<state>        what a label is
--iconColor-<role>-<state>        what a glyph is
--strokeColor-<role>-<state>      what a border or ring is
```

Two things make this reference unusual in the catalog. It publishes **a font family per
language** — Japanese, English, Korean, Thai and three Chinese variants — and it publishes
**a colour for every frequent-flyer tier**, from JMB Crystal to JGC Six Star.

And it is **caught mid-migration**: 87 of its 105 semantic colours exist twice, under two
different naming conventions, with 18 of those pairs written in two different notations.

### Primary tasks
- Search and book a flight; sign in to JMB.
- Reach the fare, status and service pages from a persistent global nav.

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `jal.co.jp/ja-jp/`.

### The brand red, and its states

- **Brand** (`#cc0000`) — `--surfaceColor-primary-default`, `--textColor-primary-default` and
  `--strokeColor-focus-primary` all at once. The sign-in pill's fill, the nav's hover, the
  focus ring.
- **Brand Pressed** (`#a30000`) — `--textColor-primary-pressed`, and also
  `--surfaceColor-danger-default` and `--strokeColor-form-error`. **Pressed red and danger red
  are the same value**, which is worth knowing before reusing either.
- Hover is not a separate hue but **the same red at alpha**:
  `--surfaceColor-primary-hover` is `rgba(204,0,0,0.8)` and `--textColor-primary-hover` is
  `rgba(204,0,0,0.6)`.

### A red ramp beside it

`--red-5` `#fdf5f5` · `--red-10` **`#fae5e5`** · `--red-20` **`#f7d6d6`** ·
`--red-60` **`#d63131`** · `--red-75` **`#b80000`** · `--red-80` `#a30000`, plus
`--red-80-alpha10` and `-alpha80`. Six steps, and the brand's own `#cc0000` is **not one of
them** — the ramp is for surfaces and the brand value sits outside it.

### Ink, and the blues

- **Foreground** (`#000000`) — `--textColor-heading`, also `--neutral-black`.
- **Subtle** (`#666666`) — `--textColor-subtle`, `--iconColor-default`, `--neutral-60`.
- **Disabled** (`#999999`) — `--textColor-disabled`, `--neutral-40`.
- **Neutral 80** (`#333333`) — `--iconColor-black-pressed`, `--neutral-80`.
- **Neutral 3** (`#f5f6f6`) — the lightest surface step.
- **Informative** (`#2a344b`) — `--textColor-informative-default`, and the same value is
  `--accent-prussianBlue`. A navy that does the job "this is a link or a notice".
- **Informative Pressed** (`#4c559b`) — `--iconColor-link-default` and
  `--strokeColor-focus-link`; a brighter indigo for the pressed and link states.
- **Icon White Pressed** (`#e1e3e6`) — the one icon value that is neither black nor white.

### Surfaces and lines

**Canvas** (`#ffffff`) · **Border** (`#d5d5d5`) — `--strokeColor-outline-default`,
`--strokeColor-divider-content` and `--surfaceColor-*-disabled` share it ·
**Surface Muted** (`#e2e7ed`) — `--surfaceColor-informative-muted`, also
`--accent-powderBlue` · **Surface Alert** (`#fdf5f5`) · **Surface Emphasis** (`#e8e8e8`) —
`--surfaceColor-base-light-emphasis`, also `--neutral-10`.

### The accent family — named after colours, not roles

**Accent Steel Blue** (`#6a7181`) · **Accent Gray Blue** (`#b7c1cd`) ·
**Accent Light Cyan** (`#f0f7ff`) · Prussian Blue `#2a344b` · Powder Blue `#e2e7ed`, each with
`alpha80` and some with `alpha60` variants. These are the one group named by **hue** rather
than by role — the rest of the system never says what a colour looks like, only what it is for.

### Membership tiers as tokens

This is the part no other reference here has.

| JMB Status | | JGC / LSP Status | |
|---|---|---|---|
| **Crystal Red** | `#ba1334` | **Three Star** | `#960a20` |
| **Sapphire Blue** | `#066fbf` | **Four Star** | `#112a6c` |
| **Emblem Gold** | `#edc900` | **Five Star** | `#535a60` |
| **Emblem Bronze** | `#733b11` | Six Star | `#000000` |
| **Blue** | `#0f327b` | **JMB Elite** | `#652d73` |
| **Green** | `#097048` | | |
| Diamond Black | `#000000` | | |

Eleven distinct values for loyalty status, published as design tokens on the public booking
page. A consumer building anything JAL-adjacent gets the tier palette for free; a consumer
building something else should not take them, because each one means a specific membership
level.

### What is *not* JAL's

The page also loads a **shadcn/Tailwind layer**: 31 properties in `oklch` (`--background`,
`--card`, `--border`, `--popover`, `--muted`, `--sidebar-*`, `--chart-*`) plus 63 `--tw-*`.

This matters more than usual, because **the most-rendered text colour on the page is
`oklch(0.145 0 0)` on 150 elements — and that is shadcn's default foreground, not JAL's.**
`--textColor-heading` `#000000` is what the system declares; the shadcn default is what much of
the page actually paints. Neither the oklch values nor `rgb(31, 41, 55)` (Tailwind's gray-800,
4 elements) are recorded here.

## 3. Typography Rules

### Font family — one per language

```
--fontFamily-japanese            "Noto Sans JP", sans-serif
--fontFamily-english             "Noto Sans", sans-serif
--fontFamily-korean              "Noto Sans KR", sans-serif
--fontFamily-thai                "Noto Sans Thai", sans-serif
--fontFamily-chineseSimplified   "Noto Sans SC", sans-serif
--fontFamily-chineseTraditional  "Noto Sans TC", sans-serif
--fontFamily-chineseHongKong     "Noto Sans HK", sans-serif
--fontFamily-serif               serif
--fontFamily-poppins             poppins, sans-serif
```

Seven scripts, each an explicit token rather than a fallback chain — an airline selling in
every market it flies to, with the language switch as a token lookup. Only `Noto Sans JP`
rendered on the measured surface (232 of 232 elements).

`--fontFamily-poppins` is declared and did not render here. The webfonts the browser actually
loaded were `Noto Sans JP`, `AdobeClean-Regular` and `AdobeClean-Bold` — Adobe Clean arriving
from an embedded Adobe component rather than from a JAL token, so it is not recorded.

### Two type scales, both published

**Semantic**, 12 tokens: `--text-caption-sm` 11 · `-caption-md` 12 · `-caption-lg` 14 ·
`-body-sm` 12 · `-body-md` 14 · `-body-lg` 16 · `-body-xl` 18 · `-heading-xs` 16 ·
`-heading-sm` 18 · `-label-xs` 12 · `-label-sm` 14 · `-label-lg` 18.

**Numeric**, 11 tokens in rem: `--fontSize-11` `0.6875rem` through `--fontSize-40` `2.5rem`.

The two overlap from 11 to 18 and only the numeric one goes above it. Rendered, the page is
almost monotone: **16px on 188 elements**, then 18px on 14 and 14px on 11. Weights are 400 on
154 and 700 on 78 — two weights, no middle.

## 4. Component Stylings

Measured with focus read for every control before the mouse moved at all.

### Sign-in pill

`#cc0000` fill, `#ffffff` label, `1px solid #cc0000`, **9999px radius**, 193×34, 14px/700.
**Hover changes nothing** — `:hover` matched true while the reading was taken.
Focus draws **`outline: #cc0000 solid 2px`**.

`solid` is what makes that ring JAL's: the browser's own is `auto 1px`. And the value is
declared — `--strokeColor-focus-primary` is `#cc0000`. Token and render agree.

### Global nav item

`#ffffff`, `#000000` label, no border, square, 80×47, 16px/700.
**Hover** turns the label `#cc0000` and grows a **3px bottom border** in the same red.
**Focus** does all of that *and* adds `outline: #cc0000 solid 1px` with a 2px radius — so the
keyboard state is the hover state plus a ring, rather than a different state.

### Two controls measured and not declared

A transparent 254×48 pill (`#cc0000` text and border) and a filled 234×48 pill (`#a30000`) both
sit below the fold. `:hover` matched **false** on two separate attempts, and neither reported
`:focus-visible`. Their rest values are real and consistent with the two above; **their states
were not measured, so they are not declared.**

### Radius

Rendered: **9999px on 17 elements** — the pill is the house shape — then `0px 0px 8px 8px`
on 6 (dropdown panels), 16px on 4, 8px on 4, 4px on 3 and 50px on 2.

## 5. Layout Principles

- **Colour by what is being painted.** Surface, text, icon and stroke are four parallel
  families, so `--iconColor-subtle-hover` exists separately from `--textColor-subtle`.
- **States live in the token name**, not in the consumer's code: `default`, `hover`, `pressed`,
  `disabled`, `selected`, and compound ones like `base-selected-hover` and `base-hover-compact`.
- **Alpha does the hover work.** `rgba(204,0,0,0.8)` rather than a second red.

## 6. Depth & Elevation

**No shadow was observed** on either declared control, and no shadow token appears among the
416. Separation is `#d5d5d5` lines and the `#e8e8e8` / `#f5f6f6` surface steps.

## 7. Do's and Don'ts

### Do
- Pick the family by what you are colouring — a glyph takes `iconColor`, not `textColor`.
- Use `#cc0000` at `solid 2px` for focus; it is declared as `--strokeColor-focus-primary` and
  measured on the rendered pill.
- Take hover as the base colour at 0.8 or 0.6 alpha, which is what the system does.

### Don't
- Don't reuse the JMB and JGC tier colours decoratively. `#066fbf` means Sapphire.
- Don't read `oklch(0.145 0 0)` as JAL's ink even though it paints 150 elements — it is
  shadcn's default. JAL's heading colour is `#000000`.
- Don't assume `#a30000` is only the pressed red; it is also danger and form-error.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1100 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#cc0000` brand · `#a30000` pressed and danger · `#000000` heading · `#666666` subtle ·
`#999999` disabled · `#2a344b` informative · `#4c559b` link · `#d5d5d5` lines ·
`#e2e7ed` muted surface · `#fdf5f5` alert · `#e8e8e8` emphasis · `#f5f6f6` lightest ·
`#333333` icon pressed · `#e1e3e6` icon on dark · accents `#6a7181` `#b7c1cd` `#f0f7ff` ·
reds `#fae5e5` `#f7d6d6` `#d63131` `#b80000`

### Example Component Prompts
- "A 34px sign-in pill: `#cc0000` fill and border, `#ffffff` 14px/700 label, fully rounded, no
  hover change, focus `outline: #cc0000 solid 2px`."
- "A 47px nav item: `#000000` 16px/700 on white; hover turns the label `#cc0000` and adds a 3px
  `#cc0000` bottom border."

## 10. Voice & Tone

Not assessed as copy. 2,810 characters on the measured surface, most of it fare and route names.

## 11. Brand Narrative

JAL's booking surface reads like infrastructure rather than marketing: one red, one typeface at
one size, and a token set that spends its detail on the things an airline actually has to get
right in software — a colour for every membership tier, a font for every market, and a state
named for every way a control can be.

The migration visible in §14 fits that too. Nobody renames 87 colour tokens for fun; it is what
a long-lived system looks like partway through being tidied.

## 12. Principles

- **Four families, one per painted thing.** Surface, text, icon, stroke.
- **A font per language**, not a fallback chain.
- **The product's own vocabulary becomes tokens.** Tier colours are part of the system.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States, and a system caught mid-rename

Both declared components carry measured hover and focus. The pill does nothing on hover and
rings on focus; the nav item colours on hover and rings on top of that. Pressed was not
measured on either, so no pressed value is recorded.

The state *vocabulary* is much larger than what was observed: `default`, `hover`, `pressed`,
`disabled`, `selected`, plus `base-selected-hover`, `base-hover-compact`,
`base-dark-emphasis`, `base-light-emphasis`, `disabled-light` and `disabled-dark`. Recorded
here in prose; only the two observed states reached the component block.

### 87 colours published twice

The 105 `--surfaceColor / textColor / iconColor / strokeColor` tokens are **also** published
under a second convention, `--color-<kebab-case>`:

```
--surfaceColor-informative-muted        #e2e7ed
--color-surface-color-informative-muted #e2e7ed      ← same value, second name
```

**69 pairs are byte-identical. 18 more are the same colour in a different notation:**

```
--iconColor-white-hover         rgba(255, 255, 255, 0.6)
--color-icon-color-white-hover  #fff9                 ← 0x99 = 153 = 0.6 × 255
--surfaceColor-base-hover-compact        rgba(0, 0, 0, 0.1019607843)
--color-surface-color-base-hover-compact #0000001a    ← 0x1a = 26 = 0.102 × 255
```

18 have no twin at all. The same doubling appears in the other scales: `--space-16` beside
`--spacing-space-16`, and a semantic type scale beside a numeric one.

**No conflict is recorded**, because there is none — every pair that exists agrees. It is one
system written down twice, and a consumer should take the camelCase names, which are the
complete set.

## 15. Motion & Easing

**No motion token exists** among the 416, and no transition value was captured on either
declared control.

---

**Tier 1 sources:** https://www.jal.co.jp/ja-jp/ (live booking surface — 479 custom properties read via `getComputedStyle`, of which 416 are JAL's own and 63 are `--tw-*`; two controls measured at rest, hover and focus, 2026-09-22); https://www.jal.com/ja-jp/ (JAL's corporate surface — a second brand-owned Japanese surface rendering the same `#cc0000` on 13 elements and the same `#2a344b` informative navy, on a separate stylesheet carrying only two custom properties; cited for ownership and for the brand red, not for the token set, 2026-09-22)
