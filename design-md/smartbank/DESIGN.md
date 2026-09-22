---
id: smartbank
name: SmartBank
country: JP
category: fintech
homepage: "https://smartbank.co.jp"
primary_color: "#1DD0B0"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=smartbank.co.jp&sz=128"
verified: "2026-09-22"
added: "2026-09-22"
omd: "0.1"
ds:
  name: "SmartBank design tokens"
  url: "https://smartbank.co.jp/"
  type: system
  description: "371 custom properties resolving on the corporate surface: 110 scale colours across nine named hues, 76 semantic colours in a role/variant/emphasis structure that includes families for emoji and for each prepaid card product, 18 gradients, a 34-step dimension scale, a 36-cell line-height matrix of three densities by twelve sizes, platform-split font families for web, iOS and Android, and seventeen durations with four easings."
tokens:
  source: live-extract
  extracted: "2026-09-22"
  colors:
    mint: "#1dd0b0"
    mint-deep: "#0fbea0"
    marine: "#4e79ef"
    sky: "#64b6df"
    coral: "#ff7f74"
    peach: "#f48ebc"
    grape: "#a97ee1"
    wood: "#c6b99d"
    stone: "#f5f5f5"
    positive-on-container: "#176256"
    negative-base: "#ff5c4d"
    negative-container: "#ffe6e3"
    attention-base: "#eb923c"
    attention-container: "#f9e1d1"
    card-junior-base: "#80cbef"
    card-junior-container: "#d9f1fd"
    card-my-on-container: "#763831"
    emoji-sun-base: "#ffc919"
    emoji-coral-base-variant: "#ee3b1c"
    emoji-marine-on-container: "#34466e"
    foreground: "#000000"
    canvas: "#ffffff"
  typography:
    family: { sans: "Noto Sans JP", latin: "Open Sans", accent: "Poppins" }
    xxxs: { size: 10.6672, use: "--font-size-three-extra-small" }
    xxs: { size: 11.6368, use: "--font-size-two-extra-small" }
    xs: { size: 12.8, use: "--font-size-extra-small; the most common rendered size, on 64 elements" }
    sm: { size: 14.2224, use: "--font-size-small" }
    md: { size: 16, use: "--font-size-medium; the scale's base" }
    lg: { size: 18.2864, use: "--font-size-large" }
    xl: { size: 21.332, use: "--font-size-extra-large" }
    xxl: { size: 25.6, use: "--font-size-two-extra-large" }
    xxxl: { size: 32, use: "--font-size-three-extra-large" }
    display: { size: 42.6672, use: "--font-size-four-extra-large" }
    display-xl: { size: 64, use: "--font-size-five-extra-large" }
    display-xxl: { size: 128, use: "--font-size-six-extra-large; the largest published step" }
  spacing: { xxxs: 2, xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 56, huge: 72, huger: 96, hugest: 128 }
  rounded: { xs: 2, sm: 4, md: 8, lg: 12, xl: 16, xxl: 32 }
  motion:
    duration-50: "50ms"
    duration-100: ".1s"
    duration-150: ".15s"
    duration-200: ".2s"
    duration-250: ".25s"
    duration-300: ".3s"
    duration-500: ".5s"
    duration-1000: "1s"
    ease-enter: "cubic-bezier(.24, 1, .32, 1)"
    ease-exit: "cubic-bezier(.64, 0, .78, 0)"
    ease-move: "cubic-bezier(.83, 0, .17, 1)"
    ease-feedback: "cubic-bezier(0, 0, 1, 1)"
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-22"
  surfaces:
    - { id: corporate, kind: product-surface, url: "https://smartbank.co.jp/", inspected: "2026-09-22" }
    - { id: product, kind: product-surface, url: "https://onebank.jp/", inspected: "2026-09-22" }
  sources:
    - { id: corp-live, kind: product-surface, url: "https://smartbank.co.jp/", captured: "2026-09-22" }
    - { id: product-live, kind: product-surface, url: "https://onebank.jp/", captured: "2026-09-22" }
    - { id: company, kind: official-doc, url: "https://smartbank.co.jp/company", captured: "2026-09-22" }
  conflicts: []
  claims:
    tokens.colors.attention-base: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.attention-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.canvas: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.card-junior-base: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.card-junior-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.card-my-on-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.coral: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.emoji-coral-base-variant: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.emoji-marine-on-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.emoji-sun-base: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.foreground: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.grape: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.marine: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.mint: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.mint-deep: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.negative-base: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.negative-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.peach: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.positive-on-container: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.sky: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.stone: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.colors.wood: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.lg: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.md: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.sm: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xl: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xs: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.rounded.xxl: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.huge: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.huger: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.hugest: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.lg: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.md: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.sm: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xl: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xs: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xxl: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xxs: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xxxl: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.spacing.xxxs: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-xl.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-xl.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-xxl.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display-xxl.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.display.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.accent: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.latin: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.family.sans: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lg.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.lg.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.md.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.md.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.sm.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.sm.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xl.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xl.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xs.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xs.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxl.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxl.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxs.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxs.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxl.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxl.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxs.size: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
    tokens.typography.xxxs.use: { surface_id: corporate, source_id: corp-live, method: computed-style, captured: "2026-09-22" }
---
# Design System Inspiration of SmartBank (株式会社スマートバンク)

## 1. Visual Theme & Atmosphere

SmartBank is a Tokyo fintech — founded April 2019, headquartered in Shinagawa, capitalised at
¥3.1bn including reserve, and licensed by the Kanto Financial Bureau as a fund-transfer and
prepaid-payment operator. Its product is **ワンバンク (OneBank)**, an AI household-budget app
built around prepaid cards.

The corporate page itself is plain: black text at alpha on white, Noto Sans JP with Poppins for
Latin, and almost no colour. **The system underneath it is not plain at all.**

371 custom properties resolve on that page, and they describe a **cross-platform design system**
— not a website's stylesheet. Nine named colour hues with twelve steps each. A semantic layer
shaped like Material 3, with `base` / `container` / `on-container` for every role. Font families
split three ways for **web, iOS and Android**. A line-height matrix of three densities by twelve
sizes. Seventeen durations and four easings.

It also contains two families this catalog has not seen anywhere else: **one for emoji**, and
**one per prepaid card product**.

### Primary tasks
- Read what the company does and reach the product or the recruitment pages.
- (The product's own surface, `onebank.jp`, is where these tokens are actually painted.)

## 2. Color Palette & Roles

Measured 2026-09-22 with `getComputedStyle` on `smartbank.co.jp`. **214 of the 371 properties
are colours.**

**There is no brand token.** The system declares no `--color-brand-*`, so `primary_color` here
is a reading rather than a citation: **mint `#1dd0b0`** is what `--color-state-default-selected`
is built from (at 8% alpha), what `--color-impression-positive` resolves to, what the Pair Card
gradient starts on, and what the product surface paints. It is recorded as the identity on that
evidence and on nothing stronger.

### The scale — nine named hues, not a numbered grey

`marine` · `mint` · `coral` · `sky` · `wood` · `grape` · `peach` · `carrot` · `stone`, each
running roughly `10 · 20 · 30 · 40 · 50 · 60 · 70 · 80 · 90 · 95 · 99`. **110 tokens.**

- **Mint** (`#1dd0b0` at 60, `#0fbea0` at 50) · **Marine** (`#4e79ef`) · **Sky** (`#64b6df`)
- **Coral** (`#ff7f74`) · **Peach** (`#f48ebc`) · **Grape** (`#a97ee1`)
- **Wood** (`#c6b99d`) — a warm neutral hue, which most systems do not name
- **Stone** (`#f5f5f5` at 99) — the grey ramp, and it is a *hue* here like the others

The low steps are dark and desaturated (`--color-scale-coral-10` is `#422926`, a near-black
brown), so each hue spans a full light-to-dark range rather than tinting one value.

### The semantic layer — role, variant, emphasis

76 tokens in a Material-3 shape:

- **Impression**: `positive` · `negative` · `attention`, each with `base`, `container` and
  `on-container`. **Negative Base** (`#ff5c4d`) with **Negative Container** (`#ffe6e3`);
  **Attention Base** (`#eb923c`) with **Attention Container** (`#f9e1d1`);
  **Positive On-Container** (`#176256`).
- **Text** and **Border**, each `default` / `inverse` × `high` / `mid` / `low`, all **black or
  white at alpha** — `#000000de`, `#0006`, `#0003`, `#ffffffb3`, `#ffffff1a`. The rendered page
  confirms it: the two dominant text colours are `rgba(0,0,0,0.87)` and `rgba(0,0,0,0.6)`.
- **State**: `default` / `inverse` × `hover` / `focused` / `activated` / `selected`, again at
  alpha — `#0000001f` for hover and focus, `#1dd0b014` for selected.
- **`--opacity-state-disabled`** is `.38`.

### The two families nothing else here publishes

**Emoji.** `--color-emoji-<hue>-{base, base-variant, container, on-container}` for sun, sky,
mint, marine, coral and carrot. **Emoji Sun Base** is `#ffc919`; **Emoji Coral Base Variant**
is `#ee3b1c`; **Emoji Marine On-Container** is `#34466e`. A colour family for pictograms,
tokenised at the same depth as the text roles.

**Prepaid card.** `--color-prepaid-card-{my, pair, junior}-card-{base, container, on-container}`
— one family per card the product issues. **Card Junior Base** (`#80cbef`) with its container
(`#d9f1fd`); **Card My On-Container** (`#763831`). Each also has a three-stop gradient set:

```
--gradient-prepaid-card-my-card-base      linear-gradient(68.49deg, #ff5c4d 25%, #ffbe18 100%)
--gradient-prepaid-card-pair-card-base    linear-gradient(59.54deg, #1dd0b0 30%, #89dc65 100%)
--gradient-prepaid-card-junior-card-base  linear-gradient(90deg,    #54c8e8 30%, #afe2e3 100%)
```

…and each gradient exists three times over, at full, `99` and `33` alpha — `base`, `scrim`,
`container`. **18 gradient tokens for three cards.**

## 3. Typography Rules

### Font Family — split by platform

```
--font-family-web-japanese       "Noto Sans JP"     --font-family-web-latin      "Open Sans"
--font-family-ios-japanese       "SF Pro Text"      --font-family-ios-latin      "SF Pro Text"
--font-family-android-japanese   "SF Pro Text"      --font-family-android-latin  Roboto
--font-family-web-accent         Montserrat
--font-family-web-corporate-accent  Poppins
```

Three platforms × two scripts, plus two accent faces. **This is a token sheet for an app, not
for a page** — the web values are one column of it. (The Android Japanese value reads
`SF Pro Text`, which is Apple's face; recorded as measured.)

Rendered on the corporate page: **Noto Sans JP on 94 elements, Poppins on 52.**

### Scale — a modular ratio, computed not rounded

`10.6672 · 11.6368 · 12.8 · 14.2224 · 16 · 18.2864 · 21.332 · 25.6 · 32 · 42.6672 · 64 · 128`

Each step is roughly 1.14× the last, computed from a 16px base and **left unrounded**. The
fractional values are the giveaway that this is generated from a ratio rather than picked.

Weights: `normal` 400 · `semi-bold` 600 · `bold` 700. The page uses 700 on 83 elements and 600
on 52 — a heavy page from a three-weight set.

### Line height — a matrix, not a list

**36 tokens**: `--line-height-{dense, normal, comfort}-<size>` across all twelve sizes. At
medium, `dense` is 20px, `normal` 24px and `comfort` 28px. Density is a first-class axis, which
is how a system that has to fit both a phone screen and a marketing page handles leading.

`--letter-spacing-normal` is `0px` and `-comfort` is `2px`.

## 4. Component Stylings

**No component is declared, and that is the honest result.**

The controls on `smartbank.co.jp` are CSS-module wrappers — `_rounded-button_gtcz6_1`,
`_circle-button_t4zv0_1` — and every one measures **`background: rgba(0,0,0,0)` with
`border-width: 0`**. The fill and the label are painted by children. Measured across rest,
hover, pressed and focus, **no property changes on any of them**, and focus renders
`outline: rgb(0, 95, 204) auto 1px` — Chrome's default ring, not SmartBank's.

The same is true on the product surface: `onebank.jp`'s two calls to action are the same
`_rounded-button_` class at 312px radius, transparent, unchanged on hover and pressed.

A system this complete almost certainly has components; **this capture did not see them**. The
tokens stand on their own, and nothing is declared that was not observed.

What can be said about shape: the rendered radii are **8px on 29 elements, 32px on 27 and 312px
on 17** — which are `--dimension-radius-medium`, `--dimension-radius-two-extra-large` and
`--dimension-scale-312`, a pill built from the dimension scale rather than a radius token.

## 5. Layout Principles

- **One dimension scale serves everything.** `--dimension-scale-*` runs 0, 1, 2, 4, 8, 12, 16,
  20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 80, 96, 112 … 312 — 34 steps — and both the spacing
  and radius scales are named subsets of it.
- **Alpha carries the neutrals.** Text, border and state are black or white at opacity, never
  grey hex, so the same tokens work on either ground.
- **Every role has three parts.** `base`, `container`, `on-container` — you get the fill, the
  surface it sits on and the ink that goes over it, together.

## 6. Depth & Elevation

**No shadow token exists** among the 371, and none was observed on a measured control. Depth is
done with `container` surfaces and the gradient sets.

## 7. Do's and Don'ts

### Do
- Take a role as a set — `base` with its `container` and `on-container` — rather than picking
  one value out.
- Reach into `--color-scale-<hue>-<step>` when the semantic layer has no name for what you need;
  the hues are named, so `wood-60` reads as a decision.
- Use the density axis. `dense`, `normal` and `comfort` line heights exist for different surfaces.

### Don't
- Don't flatten the text and border tokens to grey hex. They are black and white at alpha and
  they are meant to composite.
- Don't invent components from the tokens. The buttons on both measured surfaces are transparent
  wrappers and nothing in this capture shows what a filled SmartBank button does.
- Don't copy the focus ring — it is Chrome's.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only. The line-height density axis and the platform-split
font families both imply a responsive and multi-surface system; neither was observed in action.

## 9. Agent Prompt Guide

### Quick Color Reference
`#1dd0b0` mint · `#0fbea0` mint deep · `#4e79ef` marine · `#64b6df` sky · `#ff7f74` coral ·
`#f48ebc` peach · `#a97ee1` grape · `#c6b99d` wood · `#f5f5f5` stone ·
`#ff5c4d`/`#ffe6e3` negative · `#eb923c`/`#f9e1d1` attention · `#176256` positive on-container ·
`#80cbef`/`#d9f1fd` junior card · `#763831` my-card on-container · `#ffc919` emoji sun ·
`#ee3b1c` emoji coral · `#34466e` emoji marine · text `#000000` at .87/.6/.38

### Example Component Prompts
- "A card tile using the Pair Card set: `linear-gradient(59.54deg, #1dd0b0 30%, #89dc65 100%)`
  fill, `#176256` ink, 32px radius, 16px padding."
- "An attention banner: `#f9e1d1` container, `#eb923c` accent, text black at 87%, 8px radius,
  comfort line height."

## 10. Voice & Tone

Not assessed as copy. 1,605 characters on the corporate surface.

## 11. Brand Narrative

SmartBank states on its own company page that it was founded in **April 2019**, sits in
Nishi-Gotanda, Shinagawa, is led by 堀井翔太, carries ¥3.1bn of capital including reserve, and
holds Kanto Financial Bureau registration as both a fund-transfer service and a prepaid-payment
instrument operator. The product it names is ワンバンク — an AI household-budget app with pair
cards for couples and deferred charging.

The token sheet reads like the company: a small team shipping one financial product across web,
iOS and Android, who wrote down the colour of every card they issue and every emoji they draw
before writing the marketing page it is served from.

## 12. Principles

- **Name the hue, not the number.** Nine named colour families, grey among them.
- **Ship one sheet for three platforms.** Font families split web / iOS / Android.
- **Tokenise the product, not just the interface.** Each prepaid card has its own colour family
  and its own three-stop gradient.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

**The system publishes them and this capture did not see them rendered.**
`--color-state-{default,inverse}-{hover,focused,activated,selected}` exist — `#0000001f` for
hover and focus, `#1dd0b014` for selected, `#ffffff3d` on the inverse side — and
`--opacity-state-disabled` is `.38`.

Every control measured on both surfaces is a transparent wrapper that **changes no property on
hover, pressed or focus**. So the state tokens are recorded in prose above and **no component
declares them**, because nothing was observed using them.

## 15. Motion & Easing

Seventeen durations on a numeric scale — `--duration-scale-0` through `-1000`, at
`50ms · .1 · .15 · .2 · .25 · .3 · .35 · .4 · .45 · .5 · .55 · .6 · .7 · .8 · .9 · 1s` — and
**four easings named for the kind of motion**:

| Token | Curve | |
|---|---|---|
| `--cubic-bezier-motion-enter` | `cubic-bezier(.24, 1, .32, 1)` | fast out, long settle |
| `--cubic-bezier-motion-exit` | `cubic-bezier(.64, 0, .78, 0)` | both points on the floor — accelerates away |
| `--cubic-bezier-motion-move` | `cubic-bezier(.83, 0, .17, 1)` | symmetric, slow at both ends |
| `--cubic-bezier-feedback` | `cubic-bezier(0, 0, 1, 1)` | linear, for immediate response |

Enter, exit and move as separate curves is the Material convention; a fourth curve reserved for
**feedback**, and set to linear, is not. **No transition using them was observed** on the
measured controls.

---

**Tier 1 sources:** https://smartbank.co.jp/ (live corporate surface — 371 custom properties read via `getComputedStyle`, three controls measured at rest, hover, pressed and focus, 2026-09-22); https://onebank.jp/ (ワンバンク, SmartBank's own product surface — every one of the eight colours its census renders resolves to a named token on the corporate sheet, 2026-09-22); https://smartbank.co.jp/company (SmartBank's own company profile — founding date, headquarters, capital and regulatory registration; not cited for tokens)
