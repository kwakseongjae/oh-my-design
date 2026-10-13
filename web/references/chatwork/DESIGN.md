---
name: Chatwork
colors:
  brand: '#f03748'
  link: '#df1c13'
  secondary: '#645b4a'
  foreground: '#13202f'
  ink: '#191919'
  muted: '#949aa2'
  canvas: '#ffffff'
typography:
  xsmall:
    fontSize: 10px
    use: '--rise--fontSize-other-xSmall, .625rem'
  caption:
    fontSize: 12px
    use: '--rise--fontSize-caption, .75rem — and the most common rendered size, on 105 elements'
  body2:
    fontSize: 14px
    use: '--rise--fontSize-body2 and -button-small, .875rem'
  body1:
    fontSize: 16px
    use: '--rise--fontSize-body1 and -button-medium, 1rem'
  subtitle:
    fontSize: 20px
    use: '--rise--fontSize-subtitle and -button-large, 1.25rem'
  headline3:
    fontSize: 24px
    use: '--rise--fontSize-headline3, 1.5rem'
  headline2:
    fontSize: 32px
    use: '--rise--fontSize-headline2, 2.0rem'
  headline1:
    fontSize: 40px
    use: '--rise--fontSize-headline1, 2.5rem'
  other-large:
    fontSize: 48px
    use: '--rise--fontSize-other-large, 3rem — the largest published step'
rounded:
  sm: 5px
  md: 6px
  lg: 15px
  xl: 20px
  pill: 50px
components:
  button-cta:
    type: button
    backgroundColor: '#f03748'
    textColor: '#ffffff'
    rounded: 50px
    height: 60px
    typography: 17px / 700
    hover: '#f03748'
    pressed: '#f03748'
    use: The primary call to action (無料登録して使う) — a 50px pill repeated at 35, 60, 80 and 85px tall. Measured across hover and pressed with :hover live; neither changes anything.
  button-outline-red:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#df1c13'
    rounded: 50px
    height: 42px
    typography: 14px / 400
    hover: '#645b4a'
    pressed: '#645b4a'
    use: 'White 50px pill with the link red as text and no border at all. Hover and pressed move the text to #645b4a, the system''s olive secondary.'
  link-brand:
    type: button
    backgroundColor: transparent
    textColor: '#df1c13'
    typography: 16px / 400
    hover: '#645b4a'
    pressed: '#645b4a'
    use: 'Brand-red text action, including the wordmark link. Same #645b4a on hover and pressed.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Chatwork Sans R
    display: Chatwork Sans B
---

# Design System Inspiration of Chatwork (チャットワーク)

## Overview

### Visual Theme & Atmosphere

Chatwork is Japan's business chat service, operated by 株式会社kubell — which states on its own
site that it was Chatwork株式会社 until **1 July 2024**, and that Chatwork was used by 430,000
companies as of December 2023.

Its design system is called **RISE**, and it is the most **typography-first** token set in this
catalog. Of twenty `--rise--*` properties, **sixteen are about type**: four font families, ten
sizes, two line heights. Two are colours. There is no spacing scale, no radius scale, no
shadow, no motion — the system is a typeface and a scale, and everything else is left to the
page.

That makes sense once you see what the typeface is. **Chatwork Sans**, in four weights, is the
brand's own face, and it renders on **318 of 319 text-bearing elements**. The one exception is
a single Helvetica fallback.

#### Primary tasks
- Understand the product and start a free account, from a red pill repeated at four sizes.
- Download the explainer material, or sign in.

### Brand Narrative

株式会社kubell states on its own site that Chatwork株式会社 became kubell on 1 July 2024, that
it operates Chatwork — "日本最大級のビジネスチャット" — and that the service was used by 430,000
companies as of December 2023. Alongside it the company lists Taxita, Secure SAMBA and a cloud
postal service.

The two surfaces have separated visually. `go.chatwork.com` is Chatwork Sans, red and 50px
pills; `kubell.com` is Noto Sans JP with Poppins, an orange `#f04600` and a `#121212` ink, and
carries no `--rise--*` at all. The product kept its identity through the rename and the parent
built a different one.

### Principles

- **The typeface is the system.** Four weights, four tokens, 318 of 319 elements.
- **Name the size by role, in rem**, and let buttons alias the body steps.
- **Two reds, one job each.** Fill and text, close enough to read as one.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured 2026-09-22 with `getComputedStyle` on `go.chatwork.com/ja/`. RISE declares exactly two
colours; the rest of this palette is read off the rendered page.

- **Brand** (`#f03748`) — the fill red. It backs every primary pill (11 elements) and appears
  as text on 19 more.
- **Link** (`#df1c13`) — a **second, darker red** for text actions and the wordmark, on 37
  elements. The two are close enough to read as one colour and are not the same value.
- **Secondary** (`#645b4a`) — an olive-brown, and the most surprising value in the system. It
  never appears at rest. It is what **every red text action turns on hover and pressed**, and
  the stylesheet backs it up: `.btn--secondary` and `.plan__btn-signup--personal` take it as a
  background and border in nine rules. A red brand whose secondary is olive.
- **Foreground** (`#13202f`) — `--rise--color-cw-black`, one of the two declared colours, on
  190 elements.
- **Ink** (`#191919`) — a second near-black that carries **borders on 410 elements** and never
  appears as text colour in the same scan. It is the inherited `currentColor` of a large
  subtree rather than a text role.
- **Muted** (`#949aa2`) — secondary labels and list text, 46 elements.
- **Canvas** (`#ffffff`) — `--rise--color-cw-white`, the other declared colour.

**Not recorded:** `#bf0000`, which appears six times on `div.mktoAsterix` — the required-field
marker inside an embedded Marketo form. The Marketo form also brings its own button styling
(`.mktoButton:hover { background: rgb(60, 72, 14) }`), and none of it is Chatwork's.

## Typography

### Font Family — four weights, four tokens

```
--rise--fontFamily-chatworkSansL   "Chatwork Sans L",  Hiragino Sans, ヒラギノ角ゴシック…
--rise--fontFamily-chatworkSansR   "Chatwork Sans R",  …
--rise--fontFamily-chatworkSansB   "Chatwork Sans B",  …
--rise--fontFamily-chatworkSansEB  "Chatwork Sans EB", …
```

Light, Regular, Bold and ExtraBold, each a **separate family name with its own token** rather
than a weight axis on one family. Two of the four were loaded on the measured page —
`Chatwork Sans R` on 185 elements and `Chatwork Sans B` on 133.

Every token falls back to Hiragino Sans and the Japanese system stack, so the face degrades to
the OS rather than to a Latin default.

### Scale — ten sizes with role names, in rem

| Token | rem | px |
|---|---|---|
| `other-xSmall` | .625 | 10 |
| `caption` | .75 | 12 |
| `body2` · `button-small` | .875 | 14 |
| `body1` · `button-medium` | 1 | 16 |
| `subtitle` · `button-large` | 1.25 | 20 |
| `headline3` | 1.5 | 24 |
| `headline2` | 2.0 | 32 |
| `headline1` | 2.5 | 40 |
| `other-large` | 3 | 48 |

The three button sizes are **aliases of body and subtitle steps**, not their own scale — a
button is body text at one of three existing sizes.

Line height is two values: `--rise--lineHeight-base` **1.6** and `-headline` **1.5**.

The rendered page leans small: 12px on 105 elements, then 14 and 16 on 35 each, 15 on 27 and
17 on 22 — several of which are not scale steps, so the marketing page sets sizes the system
does not name.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.leading.base`: `1.6`
- `typography.leading.headline`: `1.5`

## Layout

- **The system is a typeface and a scale.** Sixteen of twenty tokens are typographic; spacing,
  radius, shadow and motion are all absent from RISE and left to the page.
- **One pill at five sizes** carries every call to action.
- **Two reds that are nearly the same**, split by job: fill versus text.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

**No shadow was observed** on any measured control, and RISE declares none. The only shadow on
the page belongs to the embedded Marketo input.

## Motion & Easing

**No motion token exists** in RISE. The measured controls declare `transition: all` with no
duration, which resolves to `0s` — the state changes above are instant, not animated. The one
timed transition on the page (`0.2s ease-in-out`) belongs to the embedded Marketo button.

---

**Tier 1 sources:** https://go.chatwork.com/ja/ (live product surface — 20 `--rise--*` custom properties read via `getComputedStyle`, three controls measured at rest, hover, pressed and focus, and the stylesheet searched to separate Chatwork's rules from the embedded Marketo form's, 2026-09-22); https://www.kubell.com/ (株式会社kubell's own corporate site — the rename date, the statement that it operates Chatwork, and the 430,000-company figure; a second brand-owned Japanese surface, and the evidence that the parent's visual system is a separate one; not cited for tokens)

## Components

Three controls measured, each state read on its own page load.

### Primary pill

`#f03748` fill, `#ffffff` text, **50px radius**, 444×60 at 17px/700 — and the same pill at
440×85 and 390×80 at 21px/700, 140×35 at 13px/700 and 130×35 at 13px/400. One shape, five
sizes.

**Hover and pressed change nothing.** `:hover` and `:active` both matched while the readings
were taken. The element is a `<span>` inside an anchor, so it never receives focus itself and
no focus value is recorded for it.

### Outline pill

`#ffffff` fill, `#df1c13` text, 50px radius, 100×42, 14px/400, and **no border at all**
(`border-width: 0`). Hover and pressed move the text — and `border-color`, which follows
`currentColor` — to **`#645b4a`**.

### Brand link

Transparent, `#df1c13`, 16px/400, including the wordmark. Same `#645b4a` on hover and pressed.

### Focus

Every focusable control matched `:focus-visible` and painted
`outline: rgb(0, 95, 204) auto 1px` — **Chrome's default ring**. The `auto` style is the tell.
**No focus token is recorded**, because RISE declares none and the page authors none.

### Radius

Rendered: **5px on 71 elements** — by far the dominant value and not a RISE token — then 50px
on 17 (the pills), 6px on 5, 20px on 5, 15px on 3, and 100% on 5.

### States

Three components carry measured hover and pressed. The split is by control type: the **filled
pill does not move at all**, while both **red text actions go to `#645b4a`** — the same value,
reached from two different rest colours, on hover and on pressed alike.

Focus is Chrome's own ring on everything that can take focus, and the primary pill is a `span`
that cannot. **No focus state is recorded.** No disabled state was observed on a rendered
control.

## Do's and Don'ts

### Do
- Pick the weight by token, not by `font-weight` — RISE names four separate families.
- Reach for `#645b4a` for a hover on red text; it is the system's secondary, confirmed in nine
  stylesheet rules and on three controls.
- Keep the fallback chain Japanese: every family token falls back to Hiragino Sans.

### Don't
- Don't take `#bf0000` or `rgb(60, 72, 14)` as Chatwork's. Both belong to the embedded Marketo
  form.
- Don't copy the focus ring — it is Chrome's `auto 1px`, not a brand value.
- Don't expect the primary pill to respond to hover. It was measured and it does not.

## Voice & Tone

Not assessed as copy. 3,807 characters on the measured surface.

## Agent Prompt Guide

### Quick Color Reference
`#f03748` fill red · `#df1c13` text red · `#645b4a` olive secondary, hover only · `#13202f`
foreground · `#191919` rules · `#949aa2` muted · `#ffffff` canvas

### Example Component Prompts
- "A 60px primary pill: `#f03748`, `#ffffff` 17px/700 in Chatwork Sans B, 50px radius, no
  hover change."
- "Its outline twin: white, `#df1c13` 14px/400 label, 50px radius, **no border**, text to
  `#645b4a` on hover."

## Governance

### Known Gaps

- **Contrast, `button-cta`.** Text `#ffffff` on `#f03748` measures 3.93:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-brand`.** Text `#df1c13` on `#00000000` measures 4.31:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
