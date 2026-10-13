---
name: Qiita
colors:
  brand: '#55c500'
  team-blue: '#4097db'
  green-text: '#357a00'
  green-90: '#2b6300'
  green-70: '#4cb100'
  green-20: '#dff4cf'
  green-container-dim: '#2b6300'
  blue-text: '#2c6897'
  blue-text-dim: '#204c6e'
  blue-70: '#3987c4'
  blue-50: '#7bb7e6'
  blue-30: '#c0ddf3'
  red-container: '#bd0505'
  red-90: '#6d0303'
  red-30: '#ffb8b8'
  yellow-70: '#ae8803'
  yellow-container-dim: '#685103'
  bronze-text: '#663700'
  bronze-container: '#ffdcb3'
  canvas: '#ffffff'
  gray-10: '#f5f6f6'
  gray-20: '#edeeee'
  gray-30: '#dfe0e0'
  ink-muted: '#494b4b'
  social-twitter: '#000000'
  social-github: '#1a1414'
  social-hatena-blog: '#333333'
  partner-findy: '#155aa8'
  partner-findy-dim: '#003d83'
typography:
  body-3:
    fontSize: 12px
    use: '--font-size-body-3; metadata and tag labels'
  body-2:
    fontSize: 14px
    use: '--font-size-body-2; the control label size'
  body-1:
    fontSize: 16px
    use: '--font-size-body-1; the dominant rendered size, 908 of 1,999 elements'
  subhead-2:
    fontSize: 18px
    use: '--font-size-subhead-2'
  subhead-1:
    fontSize: 20px
    use: '--font-size-subhead-1'
  headline-2:
    fontSize: 24px
    use: '--font-size-headline-2'
  headline-1:
    fontSize: 32px
    use: '--font-size-headline-1; the largest published step'
rounded:
  sm: 4px
  md: 8px
  pill: 21px
  circle: 9999px
components:
  button-primary:
    type: button
    backgroundColor: '#357a00'
    textColor: '#ffffff'
    rounded: 8px
    height: 34px
    typography: 14px / 600
    hover: '#2b6300'
    pressed: '#2b6300'
    use: The filled call to action, 88×34. Hover and pressed both step to green90; the label does not move.
  button-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#357a00'
    border: '1px solid #357a00'
    rounded: 8px
    height: 34px
    typography: 14px / 600
    hover: '#f5f6f6'
    pressed: '#f5f6f6'
    use: The outline twin at the same height, 87×34 — green on white. Hover and pressed wash to gray10.
  button-outline-neutral:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#494b4b'
    border: '1px solid #494b4b'
    rounded: 8px
    height: 34px
    typography: 14px / 600
    hover: '#f5f6f6'
    pressed: '#f5f6f6'
    use: The same outline component in grey, 108×34, used where the pair's emphasis is reversed.
  chip-topic:
    type: button
    backgroundColor: '#edeeee'
    textColor: rgba(0,0,0,.6)
    rounded: 4px
    typography: 12px / 400
    hover: '#dfe0e0'
    pressed: '#dfe0e0'
    use: A topic tag (AI, 入門). Hover and pressed step one rung down the grey ramp, gray20 to gray30.
  pill-filter:
    type: button
    backgroundColor: '#ffffff'
    textColor: rgba(0,0,0,.87)
    border: 1px solid rgba(0,0,0,.12)
    rounded: 21px
    height: 39px
    hover: '#edeeee'
    pressed: '#edeeee'
    use: The feed filter (すべて), 156×39 — the only 21px radius on the page, and the only control with a divider-coloured border.
  button-icon:
    type: button
    backgroundColor: transparent
    textColor: rgba(0,0,0,.87)
    rounded: 9999px
    height: 44px
    hover: '#edeeee'
    pressed: '#edeeee'
    use: A circular icon action (more_horiz), 44×44, transparent until hovered.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Qiita (キータ)

## Overview

### Visual Theme & Atmosphere

Qiita is where Japanese engineers publish technical articles. The surface is white, set at 16px
on 908 of 1,999 elements, with ink that is **black at 87%** — and the whole system is shaped
like Material Design without saying so.

The tell is in the role names: `highEmphasis`, `mediumEmphasis`, `disabled`, `divider`,
`surface`, `surfaceVariant`, `scrim`, `onContainerText`, `elevation`. Then a five-hue tonal
scale numbered 0 to 110, and a type scale of `headline` / `subhead` / `body`. That vocabulary
comes from one place.

What it adds on top is Qiita's own: three tokens for **markdown rendering**, two for the
**Advent Calendar**, and a separate accent for **Qiita Team**, the B2B product.

#### Primary tasks
- Read the feed, filter it, open an article.
- Sign up or sign in — a pair of buttons that swap emphasis depending on where they sit.

### Brand Narrative

Qiita has been the place Japanese engineers post what they learned for over a decade, and the
token set is built around that one activity. Three properties exist only to render markdown —
inline code, blockquote, visited link — and two exist for the Advent Calendar, a December
tradition where engineers fill a 25-day schedule with posts. A design system that names a
seasonal event is a design system that expects to still be here next December.

The Material vocabulary underneath says something else: this is a product that chose a mature
convention rather than inventing one, and spent its own invention on markdown and calendars.

### Principles

- **Borrow the convention, name your own nouns.** Material's emphasis layer, Qiita's markdown
  and Advent tokens.
- **A hue is a family**, not a ramp: Text, Container, Border and Dim for each.
- **Two products, one sheet.** Qiita green and Qiita Team blue side by side.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured 2026-09-22 with `getComputedStyle` on `qiita.com`. **All 129 properties sit under
Qiita's own prefixes** — no framework, no icon-font namespace, no ad widget.

### Two greens, for two products

- **Brand** (`#55c500`) — `--color-qiitaGreen`. The logo green.
- **Green Text** (`#357a00`) — `--color-greenText`, `--color-green80`, and **what the filled
  button actually paints**. The interface green is a darker, contrast-safe step; the brand
  green is not used as a fill anywhere this capture measured.
- **Team Blue** (`#4097db`) — `--color-teamBlue`, the accent for Qiita Team. A second product
  in the same sheet.

### The tonal scale — five hues, and each hue has roles

`gray` · `green` · `red` · `blue` · `yellow`, numbered 0–110, and **each hue also publishes
`Text`, `Container`, `Border` and `Dim` variants**. So green is not just a ramp:

**Green 70** `#4cb100` · **Green 90** `#2b6300` · **Green 20** `#dff4cf` ·
**Green Container Dim** `#2b6300`.
**Blue 30** `#c0ddf3` · **Blue 50** `#7bb7e6` · **Blue 70** `#3987c4` ·
**Blue Text** `#2c6897` — and that last one is the second-most-used ink on the page, 166
elements, because it is the link colour — with **Blue Text Dim** `#204c6e` a step darker for
the pressed and visited cases.
**Red 30** `#ffb8b8` · **Red 90** `#6d0303` · **Red Container** `#bd0505`.
**Yellow 70** `#ae8803` · **Yellow Container Dim** `#685103`.
**Canvas** (`#ffffff`) — `--color-gray0`, authored `#fff`; the grey ramp's zero step is the
page itself. **Gray 10** `#f5f6f6` · **Gray 20** `#edeeee` · **Gray 30** `#dfe0e0` — the three
hover steps.

**Bronze Text** (`#663700`) with **Bronze Container** (`#ffdcb3`) sits outside the five hues,
and there is no silver or gold sibling among the 129. Recorded as found; what it marks was not
observed on this page.

### Emphasis instead of a grey ramp

`--color-highEmphasis` is `rgb(0 0 0 / 87%)` and `--color-divider` is `rgb(0 0 0 / 12%)`. The
census agrees: `rgba(0,0,0,.87)` on 1,031 elements and `rgba(0,0,0,.6)` on 387. **Ink Muted**
(`#494b4b`) is the one solid grey, used on the neutral outline button.

### Five colours in the namespace that are not Qiita's

```
--color-twitter      #000000     --color-findy      #155aa8
--color-github       #1a1414     --color-findyDim   #003d83
--color-hatena-blog  #333333
```

Share targets and a partner. They are **authored by Qiita and owned by someone else** — a
distinction worth keeping, because a consumer reaching for "a Qiita colour" should not get
GitHub's. (Twitter is `#000000`, which dates the token to after the rebrand.)

## Typography

### Font family — absent, and the stack is a trap

**No Latin or Japanese webfont loads.** The page declares two `@font-face` entries:
`Material Symbols Outlined`, which loads, and `FontAwesome`, which does not.

The rendered stack begins `YakuHanJPs, -apple-system, "system-ui", "Segoe UI", "Hiragino Kaku
Gothic ProN", …` on 1,554 elements. **`YakuHanJPs` is not among the loaded faces** — it is
declared first and falls through, so the text is set in the OS stack. A census that reads only
the first name in the stack would report a typeface that never renders.

`family` is therefore **absent**. Two other census entries are artifacts and are named here so
nobody promotes them: `Times` ×236 is non-visual `<html>` / `<head>` / `<script>` nodes picking
up Chrome's serif default, and `Arial` ×156 is unstyled `<input>` and `<button>` elements
falling through to the UA's form-control font.

### Scale

Seven steps: **12 · 14 · 16 · 18 · 20 · 24 · 32px**, named `body-3` through `headline-1`.
Rendered: 16px ×908 · 14px ×410 · 12px ×244 · 10px ×236 · 13.33px ×135.

Weights: 400 ×1,878 · 600 ×119 · 700 ×2. Effectively two.

**Line height is a small matrix**: `headline` 1.4 · `subhead` 1.6 with a `dense` 1.4 ·
`body` 1.8 with a `dense` 1.5. Dense as an axis, on a site whose whole purpose is long articles.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.leading.headline`: `1.4`
- `typography.leading.subhead`: `1.6`
- `typography.leading.subhead-dense`: `1.4`
- `typography.leading.body`: `1.8`
- `typography.leading.body-dense`: `1.5`

## Layout

- **Emphasis, not greys.** Ink is black at 87% and 60%; the solid grey is a single token.
- **Every hue carries roles**, so `greenText` and `greenContainer` exist beside `green80`.
- **Hover is one rung down the grey ramp**, from wherever the control starts.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

`--elevation-*` exists as a single token and **no shadow was observed** on any of the six
controls. Separation is the `rgb(0 0 0 / 12%)` divider and the grey surfaces.

## Motion & Easing

**No motion token exists** among the 129, and no transition value was captured on the six
measured controls.

---

**Tier 1 sources:** https://qiita.com/ (live product surface — 129 custom properties read via `getComputedStyle`, six controls measured at rest, hover, pressed and focus, 2026-09-22); https://qiita.com/ (an independent second capture confirming that `YakuHanJPs` leads the font stack while only `Material Symbols Outlined` appears among the page's loaded faces, which is why `tokens.typography.family` is absent, 2026-09-22)

## Components

Six controls measured, every state on its own page load. **No state was left unmeasured.**

### The hover rule is one rung down the grey ramp

Four of the six controls hover to a grey step and nothing else: the two outline buttons to
**`#f5f6f6`** (gray10), the topic chip and the icon button to **`#edeeee`** (gray20), and the
filter pill to `#edeeee` as well. The chip starts at gray20 and goes to **`#dfe0e0`** (gray30) —
**one rung down from wherever it started.**

The filled button is the exception: `#357a00` → **`#2b6300`**, a step on the green ramp.

### The six

- **Filled** — `#357a00`, white label, **8px radius**, 88×34, 14px/600.
- **Outline (green)** — white, `#357a00` text and border, same 8px and same 34px height.
- **Outline (neutral)** — the same component in `#494b4b`, 108×34.
- **Topic chip** — `#edeeee`, `rgba(0,0,0,.6)` label, 4px radius, 12px.
- **Filter pill** — white, `1px solid rgba(0,0,0,.12)`, **21px radius**, 156×39. The only 21px
  on the page, and the only control bordered in the divider colour.
- **Icon button** — transparent, 44×44, fully round.

### Which button is primary depends on where it is

The header pairs 新規登録 as the **filled** button with ログイン **outlined**. A recirculation
panel lower down **flips them** — ログイン filled, 新規登録 outlined.

Both use the same two components. This is a placement decision, not two primaries, and it is
recorded here so it is not read as an inconsistency.

### Focus

**All six render `outline: rgb(0, 95, 204) auto 1px`** — Chrome's default. `auto` is the tell.
Six independent component families and not one authored ring, so **no focus token is recorded**
and none exists among the 129.

### Radius

Rendered: `0px` ×1,683 · **`4px` ×142** · `50%` ×115 · `8px` ×57 · `21px` ×1 · `32px` ×1. The
page is mostly square; 4px is the chip, 8px the buttons.

### States

Six components, every one with measured hover, pressed and focus, and **nothing unmeasured**.
Hover and pressed are the same value on all six — the system separates "pointer is here" from
rest, and not "pointer is down" from hover.

**Focus is Chrome's on every one of them.** `--color-disabled` exists and was **not observed on
a rendered control**, so no disabled component is declared.

## Do's and Don'ts

### Do
- Take the interface green `#357a00`, not the logo green `#55c500`, for a filled control.
- Hover by stepping one rung down the grey ramp — gray10, gray20, gray30 exist for that.
- Use the emphasis tokens for ink rather than picking a grey.

### Don't
- Don't take `--color-github` or `--color-twitter` as Qiita's. They are other companies'.
- Don't set `YakuHanJPs` because it leads the stack; it does not load.
- Don't author a focus ring from this reference — six controls, all Chrome's default.

## Voice & Tone

Not assessed as authored voice. The measured surface is a feed of user-written article titles.

## Agent Prompt Guide

### Quick Color Reference
`#55c500` logo green · `#357a00` interface green · `#2b6300` its hover · `#4097db` Qiita Team ·
`#2c6897` links · `#f5f6f6`/`#edeeee`/`#dfe0e0` hover steps · `#494b4b` solid grey ·
ink black at 87% / 60% / 12% divider · `#bd0505` red container · `#ae8803` yellow ·
`#663700`/`#ffdcb3` bronze

### Example Component Prompts
- "A 34px filled button: `#357a00`, white 14px/600 label, 8px radius, hover `#2b6300`."
- "Its outline twin: white with `#357a00` text and border, hover fill `#f5f6f6`."
- "A 39px filter pill: white, `1px solid rgba(0,0,0,.12)`, 21px radius, hover `#edeeee`."

## Governance

### Known Gaps

- **Contrast, `button-icon`.** Text `#000000de` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
