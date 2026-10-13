---
name: JAL
colors:
  brand: '#cc0000'
  brand-pressed: '#a30000'
  foreground: '#000000'
  subtle: '#666666'
  disabled: '#999999'
  informative: '#2a344b'
  informative-pressed: '#4c559b'
  canvas: '#ffffff'
  border: '#d5d5d5'
  surface-muted: '#e2e7ed'
  surface-alert: '#fdf5f5'
  surface-emphasis: '#e8e8e8'
  neutral-3: '#f5f6f6'
  neutral-80: '#333333'
  icon-white-pressed: '#e1e3e6'
  accent-steel-blue: '#6a7181'
  accent-gray-blue: '#b7c1cd'
  accent-light-cyan: '#f0f7ff'
  red-10: '#fae5e5'
  red-20: '#f7d6d6'
  red-60: '#d63131'
  red-75: '#b80000'
  jmb-crystal-red: '#ba1334'
  jmb-sapphire-blue: '#066fbf'
  jmb-emblem-gold: '#edc900'
  jmb-emblem-bronze: '#733b11'
  jmb-blue: '#0f327b'
  jmb-green: '#097048'
  jgc-three-star: '#960a20'
  jgc-four-star: '#112a6c'
  jgc-five-star: '#535a60'
  jmb-elite: '#652d73'
typography:
  caption:
    fontSize: 11px
    use: '--text-caption-sm and --fontSize-11; the smallest step'
  small:
    fontSize: 12px
    use: '--text-body-sm, -caption-md and -label-xs'
  body:
    fontSize: 14px
    use: '--text-body-md, -caption-lg and -label-sm; the login button''s label'
  base:
    fontSize: 16px
    use: '--text-body-lg and -heading-xs; 188 of 232 rendered text elements'
  lead:
    fontSize: 18px
    use: '--text-body-xl, -heading-sm and -label-lg'
  title:
    fontSize: 20px
    use: '--fontSize-20'
  heading:
    fontSize: 24px
    use: '--fontSize-24'
  heading-lg:
    fontSize: 28px
    use: '--fontSize-28'
  display-sm:
    fontSize: 32px
    use: '--fontSize-32'
  display:
    fontSize: 36px
    use: '--fontSize-36'
  display-lg:
    fontSize: 40px
    use: '--fontSize-40; the largest published step'
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  pill: 9999px
spacing:
  s4: 4
  s8: 8
  s16: 16
  s20: 20
  s24: 24
  s32: 32
  s40: 40
  s48: 48
  s64: 64
  s96: 96
components:
  button-primary:
    type: button
    backgroundColor: '#cc0000'
    textColor: '#ffffff'
    border: '1px solid #cc0000'
    rounded: 9999px
    height: 34px
    typography: 14px / 700
    hover: '#cc0000'
    focus: '#cc0000'
    use: 'The sign-in pill in the header, 193×34. Hover changes nothing; focus draws a #cc0000 2px solid ring, which is --strokeColor-focus-primary.'
  nav-link:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    height: 47px
    typography: 16px / 700
    hover: '#cc0000'
    focus: '#cc0000'
    use: 'Global navigation item, 80×47. Hover turns the label #cc0000 and grows a 3px bottom border in the same red; focus adds a #cc0000 1px solid ring and a 2px radius on top of that.'
fonts:
  roles:
    sans: Noto Sans JP
    english: Noto Sans
    korean: Noto Sans KR
    thai: Noto Sans Thai
    chinese-simplified: Noto Sans SC
    chinese-traditional: Noto Sans TC
    chinese-hongkong: Noto Sans HK
---

# Design System Inspiration of JAL (日本航空)

## Overview

### Visual Theme & Atmosphere

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

#### Primary tasks
- Search and book a flight; sign in to JMB.
- Reach the fare, status and service pages from a persistent global nav.

### Brand Narrative

JAL's booking surface reads like infrastructure rather than marketing: one red, one typeface at
one size, and a token set that spends its detail on the things an airline actually has to get
right in software — a colour for every membership tier, a font for every market, and a state
named for every way a control can be.

The migration visible in §14 fits that too. Nobody renames 87 colour tokens for fun; it is what
a long-lived system looks like partway through being tidied.

### Principles

- **Four families, one per painted thing.** Surface, text, icon, stroke.
- **A font per language**, not a fallback chain.
- **The product's own vocabulary becomes tokens.** Tier colours are part of the system.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

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

## Typography

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

## Layout

- **Colour by what is being painted.** Surface, text, icon and stroke are four parallel
  families, so `--iconColor-subtle-hover` exists separately from `--textColor-subtle`.
- **States live in the token name**, not in the consumer's code: `default`, `hover`, `pressed`,
  `disabled`, `selected`, and compound ones like `base-selected-hover` and `base-hover-compact`.
- **Alpha does the hover work.** `rgba(204,0,0,0.8)` rather than a second red.

### Responsive Behavior

**Not measured.** Desktop 1440×1100 only.

## Elevation & Depth

**No shadow was observed** on either declared control, and no shadow token appears among the
416. Separation is `#d5d5d5` lines and the `#e8e8e8` / `#f5f6f6` surface steps.

## Motion & Easing

**No motion token exists** among the 416, and no transition value was captured on either
declared control.

---

**Tier 1 sources:** https://www.jal.co.jp/ja-jp/ (live booking surface — 479 custom properties read via `getComputedStyle`, of which 416 are JAL's own and 63 are `--tw-*`; two controls measured at rest, hover and focus, 2026-09-22); https://www.jal.com/ja-jp/ (JAL's corporate surface — a second brand-owned Japanese surface rendering the same `#cc0000` on 13 elements and the same `#2a344b` informative navy, on a separate stylesheet carrying only two custom properties; cited for ownership and for the brand red, not for the token set, 2026-09-22)

## Components

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

### States, and a system caught mid-rename

Both declared components carry measured hover and focus. The pill does nothing on hover and
rings on focus; the nav item colours on hover and rings on top of that. Pressed was not
measured on either, so no pressed value is recorded.

The state *vocabulary* is much larger than what was observed: `default`, `hover`, `pressed`,
`disabled`, `selected`, plus `base-selected-hover`, `base-hover-compact`,
`base-dark-emphasis`, `base-light-emphasis`, `disabled-light` and `disabled-dark`. Recorded
here in prose; only the two observed states reached the component block.

#### 87 colours published twice

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

## Do's and Don'ts

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

## Voice & Tone

Not assessed as copy. 2,810 characters on the measured surface, most of it fare and route names.

## Agent Prompt Guide

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
