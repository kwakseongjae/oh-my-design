---
name: CrowdWorks
colors:
  primary: '#006ab6'
  primary-500: '#239ae7'
  primary-50: '#e3f2fb'
  link: '#004980'
  brand-cta: '#f26731'
  orange-500: '#f0510f'
  orange-700: '#d54507'
  text-orange: '#cc4900'
  foreground: '#353d48'
  text-gray: '#617084'
  disabled: '#cfd4da'
  line-gray: '#afb7c1'
  canvas: '#ffffff'
  surface-gray-light: '#ecedf0'
  surface-gray-bright: '#f9fafb'
  surface-blue-light: '#e7f1fa'
  surface-blue-bright: '#f5f9ff'
  accent: '#cb2442'
  danger: '#c92b36'
  danger-light: '#feecf0'
  success: '#177835'
  success-light: '#e6f4e9'
  warning: '#8f6c00'
  warning-light: '#fef9e4'
  info: '#0467a2'
  info-light: '#e0f2fa'
  visited: '#9c27b0'
  aicw-primary: '#5628a8'
  aicw-primary-dark: '#4b2485'
  aicw-secondary: '#0a7093'
  aicw-tertiary: '#32d4af'
typography:
  xxxs:
    fontSize: 10px
    use: '--font-size-10; --single-xxxs / --paragraph-xxxs'
  xxs:
    fontSize: 12px
    use: '--font-size-12; the dominant rendered size, 190 elements'
  xs:
    fontSize: 14px
    use: '--font-size-14; header button labels'
  s:
    fontSize: 16px
    use: '--font-size-16; the wide call-to-action label'
  m:
    fontSize: 18px
    use: '--font-size-18'
  l:
    fontSize: 22px
    use: '--font-size-22'
  xl:
    fontSize: 28px
    use: '--font-size-28'
  xxl:
    fontSize: 37px
    use: '--font-size-37; the largest --single/--paragraph step'
  display:
    fontSize: 56px
    use: '--font-size-56'
  hero:
    fontSize: 112px
    use: '--font-size-112; the largest published size'
rounded:
  xs: 2px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  xxl: 32px
  pill: 10000px
spacing:
  s2: 2
  s3: 3
  s4: 4
  s8: 8
  s12: 12
  s16: 16
  s24: 24
  s32: 32
  s40: 40
  s48: 48
  s56: 56
  s64: 64
  s72: 72
  s80: 80
components:
  button-cta:
    type: button
    backgroundColor: '#f26731'
    textColor: '#ffffff'
    rounded: 4px
    height: 48px
    padding: 0 16px
    typography: 16px / 700
    hover: layer rgba(0,0,0,0.1)
    pressed: layer rgba(0,0,0,0.1)
    use: 無料ではじめる — the wide call to action, 312×48. Hover and press lay a 10% black gradient over the orange (background-image); the fill value itself does not change. Focus shows the same layer and the browser's ring.
    focus: background-image linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), browser default focus ring (outline auto) on :focus-visible
  button-signup:
    type: button
    backgroundColor: '#f26731'
    textColor: '#ffffff'
    rounded: 4px
    height: 40px
    padding: 0 16px
    typography: 14px / 700
    hover: layer rgba(0,0,0,0.1)
    pressed: layer rgba(0,0,0,0.1)
    use: 会員登録（無料） in the header, 130×40 — the same orange at the header size, with the same 10% black layer on hover and press.
  button-login:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#353d48'
    border: '1px solid #afb7c1'
    rounded: 4px
    height: 40px
    padding: 0 16px
    typography: 14px / 700
    hover: layer rgba(0,0,0,0.05)
    pressed: layer rgba(0,0,0,0.05)
    use: ログイン, 89×40 — the outline twin; hover and press lay a 5% black layer over the white.
  button-google:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#353d48'
    border: '1px solid #d6d6d6'
    rounded: 4px
    height: 32px
    padding: 4px 16px 4px 8px
    typography: 12px / 700
    shadow: rgba(163,162,162,0.2) -1px 2px 4px
    hover: layer rgba(0,0,0,0.05)
    pressed: layer rgba(0,0,0,0.05)
    use: Sign in with Google, 148×32 — the only measured control with a shadow, cast down and to the left; hover and press lay a 5% black layer.
  link-guide:
    type: button
    backgroundColor: '#f7f9fa'
    textColor: '#000000'
    border: '1px solid #ecedf0'
    rounded: 0px
    height: 53px
    padding: 16px 32px
    typography: 11px / 700
    hover: rgba(32,34,39,.05)
    pressed: rgba(32,34,39,.05)
    use: はじめての方へ, a 360×53 guide row with a top rule only — the one measured control that responds, washing to ink at 5% on hover and press.
  input-email:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#353d48'
    border: '1px solid #bcc5cc'
    rounded: 4px
    height: 45px
    padding: 4px
    typography: 14px / 400
    hover: '#ffffff'
    pressed: '#ffffff'
    focus: '#ffffff'
    use: The email field, 291×45. Every property is identical at rest, hover, pressed and focus — including under :focus-visible, where it shows no ring at all.
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of CrowdWorks (クラウドワークス)

## Overview

### Visual Theme & Atmosphere

CrowdWorks is Japan's large crowdsourcing marketplace — clients post work, freelancers bid on
it. The landing surface is white, dense and set mostly at **12px** (190 elements), with a
saturated orange **`#f26731`** reserved for the actions that start an account and a navy
**`#004980`** that is — by a wide margin — the most-rendered colour on the page.

That navy is `--text-color-link`, not the body ink. It paints 138 elements because a
marketplace home is mostly links to categories and jobs. The body ink is `--text-color-black`,
**`#353d48`**, a blue-leaning charcoal.

Three things make the token set worth reading:

- **32 tokens are whole CSS `font` shorthands.** `--paragraph-m-w3` is
  `400 18px / 1.8 "Hiragino Kaku Gothic Pro", sans-serif` — weight, size, line height and
  family in one value. No other reference in this catalog tokenises typography this way.
- **91 z-index tokens are named for the element they stack**, down to
  `--z-jobs-sidebar-category-list-right-arrow`, and written as arithmetic —
  `calc(calc(1799 + 1) + 50)` for a modal dialog.
- **56 tokens belong to AI CrowdWorks**, a sub-brand with its own purple-and-teal system,
  kept in its own namespace inside the parent's sheet.

#### Primary tasks
- Start as a client or a freelancer; sign in, or sign up with Google.
- Browse job categories, which is what most of the page is.

### Brand Narrative

CrowdWorks connects clients and freelancers across Japan, and the landing page is built as a
directory into that marketplace: most of it is links, which is why the link navy outnumbers
every other colour. The orange appears only where an account begins.

The token set is the work of a team with a large, long-lived product to keep consistent — every
stacking layer named after the thing it stacks, typography packaged as ready-to-use
declarations, and a newer AI product given its own colour system without being allowed to
leak into the parent's.

### Principles

- **Package the decision.** A font token is a whole font declaration.
- **Name layers by their occupant.** `--z-jobs-sidebar-category-list-right-arrow`.
- **Contain the sub-brand.** AI CrowdWorks lives in `--aicw-*`.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `crowdworks.jp`. **412 custom properties resolve; 17 are
Font Awesome's** — `--fa-font-light` is `normal 300 1em/1 "Font Awesome 6 Pro"` and the rest
are the same icon font — and are excluded. CrowdWorks owns the other 395.

### Primary blue

- **Primary** (`#006ab6`) — `--primary-800`, and also `--surface-color-primary`,
  `--text-color-primary`, `--line-color-primary` and `--object-color-primary`. One value
  under four semantic names, one per family.
- **Primary 500** (`#239ae7`) · **Primary 50** (`#e3f2fb`) — the middle and pale ends of a
  ten-step ramp.
- **Link** (`#004980`) — `--text-color-link`, which is `--blue-900`. The most-rendered colour
  on the page.

### Orange — the account actions

- **Brand CTA** (`#f26731`) — `--orange-400`, the fill on both sign-up buttons.
- **Orange 500** (`#f0510f`) · **Orange 700** (`#d54507`) · **Text Orange** (`#cc4900`,
  `--text-color-orange` = `--orange-800`).

### Ink and lines

- **Foreground** (`#353d48`) — `--text-color-black` = `--gray-800`.
- **Text Gray** (`#617084`) — `--text-color-gray` = `--gray-500`.
- **Disabled** (`#cfd4da`) — `--text-color-disabled`, and also `--line-color-gray-light`.
- **Line Gray** (`#afb7c1`) — `--line-color-gray` = `--gray-200`, and the border on the
  login button.

### Surfaces

**Canvas** (`#ffffff`) · **Surface Gray Light** (`#ecedf0`) · **Surface Gray Bright**
(`#f9fafb`) · **Surface Blue Light** (`#e7f1fa`) · **Surface Blue Bright** (`#f5f9ff`).

### Status — each with a light surface

**Accent** (`#cb2442`) · **Danger** (`#c92b36`) on **`#feecf0`** · **Success** (`#177835`) on
**`#e6f4e9`** · **Warning** (`#8f6c00`) on **`#fef9e4`** · **Info** (`#0467a2`) on
**`#e0f2fa`**. Every one of those strong values is the `-800` or `-900` step of its ramp.

**Visited** (`#9c27b0`) — `--text-color-visited`, which is Material Design's purple 500.

### The ramps, and one that is Material's

Eleven ramps: `primary` `blue` `bluegray` `green` `red` `orange` `yellow` `accent` `purple`
`gray`, ten steps each, plus `black` and `white` as alpha ladders (`rgb(0 0 0 / 5%)` through
`/ 90%`).

`--purple-*` is **Material Design's purple palette** — `#9c27b0`, `#ab47bc`, `#ba68c8`,
`#ce93d8`, `#e1bee7`, `#f3e5f5` — with one exception: `--purple-600` is `#8d24aa` where
Material has `#8e24aa`. The AI sub-brand's own `--aicw-purple-600` *is* `#8e24aa`. Recorded as
found; which was copied from which is not knowable from the page.

### AI CrowdWorks — a sub-brand in its own namespace

**AICW Primary** (`#5628a8`) — `--aicw-primary-purple` and `--aicw-surface-color-primary` ·
**AICW Primary Dark** (`#4b2485`) — its text colour · **AICW Secondary** (`#0a7093`) — a teal,
also its link colour · **AICW Tertiary** (`#32d4af`) — a mint.

It publishes five gradients built only from those, e.g.
`--aicw-gradient-primary-tertiary: linear-gradient(90deg, #5628a8, #32d4af)`. It is
unmistakably CrowdWorks' own: `--z-aicw-projects-login-gate-overlay` puts it inside the
parent's z-index namespace.

## Typography

### Font family

**`Noto Sans JP` is the rendered face** — the only loaded webfont, and the first family on 308
text elements. `--font-family-base` declares `"Hiragino Kaku Gothic Pro", sans-serif`, which is
an operating-system face; it renders on 54 elements, all of them set through the
`--paragraph-*` / `--single-*` tokens that carry it inside their value. It is not recorded as a
brand face.

### Typography as whole shorthands

This is the distinctive part. Two families, 16 tokens each:

```
--paragraph-<size>-w<3|6>   400|700  <size> / 1.8  "Hiragino Kaku Gothic Pro", sans-serif
--single-<size>-w<3|6>      400|700  <size> / 1    "Hiragino Kaku Gothic Pro", sans-serif
```

`paragraph` is running text at a 1.8 line height; `single` is one line at 1. `w3` is weight
400, `w6` is 700. Sizes run `xxxs` 10 · `xxs` 12 · `xs` 14 · `s` 16 · `m` 18 · `l` 22 ·
`xl` 28 · `xxl` 37. A consumer takes one token and gets a complete `font` declaration.

The size scale beneath adds **56** and **112** for display use.

Rendered: 12px ×190 · 14px ×67 · 16px ×37 · 20px ×18 · 18px ×15 · 24px ×13 · 28px ×10. Weights
400 ×217 and 700 ×143.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.leading.single`: `1`
- `typography.leading.paragraph`: `1.8`

## Layout

- **Name the element, not the layer.** 91 z-index tokens, each for one specific component.
- **One token, one complete font declaration.**
- **A sub-brand is a namespace**, not a theme — `--aicw-*` beside the parent, not replacing it.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

Nine shadow tokens, all centred (no offset), in three composed sizes:
`--shadow-s` `0 0 2px 0 rgb(0 0 0 / 30%), 0 0 3px 1px rgb(0 0 0 / 15%)` ·
`--shadow-m` `0 0 3px 0 … 30%, 0 0 8px 3px … 15%` ·
`--shadow-l` `0 0 4px 0 … 30%, 0 0 12px 6px … 15%` — a tight core plus a soft halo.

The one shadow observed on a control, on the Google button, **is not any of these**: it is
offset `-1px 2px` and tinted grey. It comes from the Google sign-in component rather than the
token set.

`--blur-3` is `blur(3px)`, and `--background-color-black-modal` is `rgb(0 0 0 / 20%)`.

## Motion & Easing

**No motion token exists** among the 395, and every measured control computes
`transition: all` with no duration — so the hover changes happen instantly.

---

**Tier 1 sources:** https://crowdworks.jp/ (live marketplace surface — 412 custom properties read via `getComputedStyle`, 17 of them Font Awesome's and excluded; six controls measured at rest, hover, pressed and focus, captured 2026-09-22); https://crowdworks.jp/zz-this-does-not-exist (nonsense-path control — a real HTTP 404 titled 「ページが見つかりませんでした【クラウドワークス】」 with its own 664-character body, establishing the host is not a catch-all, captured 2026-09-22)

## Components

Six controls measured, every state on its own page load, focus read for every control before
the mouse moved.

### Hover is a translucent layer

The buttons keep their fill colour on hover and lay a black gradient over it in
`background-image`: **10%** on the two orange sign-up buttons, **5%** on the white login and
Google buttons. (Measured 2026-09-26; the first capture on 2026-09-22 read these as "no change"
because the probe compared background colour but not background image.) The guide row,
**はじめての方へ**, washes its background to `rgba(32,34,39,.05)` — ink at 5%. The email field is
the one control that stays identical under the pointer.

- **Wide CTA** — `#f26731`, white 16px/700, 4px radius, 312×48.
- **Header sign-up** — the same orange, 14px/700, 130×40.
- **Login** — `#ffffff`, `#353d48` label, `1px solid #afb7c1`, 89×40.
- **Google** — `#ffffff` with a `1px solid #d6d6d6` border and the only shadow among the six,
  `rgba(163,162,162,0.2) -1px 2px 4px` — cast down and to the left.
- **Guide row** — `#f7f9fa` fill, `#000000` label at 11px/700, a `1px solid #ecedf0` top rule
  only, 360×53.
- **Email field** — `#ffffff`, `1px solid #bcc5cc`, 4px radius, 291×45.

### Focus is the browser's — at three different widths

Every focusable button renders `outline: rgb(0, 95, 204) auto` — Chrome's default ring — but
**at 1px, 2px or 3px depending on the control**. The style stays `auto`, so it is still the
browser's ring; what CrowdWorks sets is only the width. `--space-outline-offset-focus: 3px`
sits in the spacing scale beside it. No focus colour is recorded.

**The email field shows no focus indicator at all.** It matches `:focus-visible` and every
property is unchanged — no ring, no border change, no shadow.

### Radius

`--border-radius-2` · `-4` · `-8` · `-16` · `-24` · `-32` · **`-10000`**. Rendered: 4px ×32 ·
8px ×18 · 10px ×7 · 10000px ×3. The pill is ten thousand pixels.

### States

Six components, every state measured. Hover and press lay a black layer over the buttons — 10% on
orange, 5% on white; the guide row washes to ink at 5%; the email field does not change. Focus is the browser's `auto` ring at a per-control width on every button,
and **nothing at all** on the email field.

No disabled state was observed on a rendered control. `--text-color-disabled` `#cfd4da` exists
in the set.

Live state probe, 2026-10-16 (`https://crowdworks.jp/`), `button-cta`: focus — background-image linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), browser default focus ring (outline auto).

## Do's and Don'ts

### Do
- Take a whole `--paragraph-*` or `--single-*` token for a text style rather than rebuilding
  it from size, weight and line height.
- Use `#004980` for links and `#353d48` for body text — the navy is the link, not the ink.
- Keep AI CrowdWorks surfaces in the `--aicw-*` namespace.

### Don't
- Don't count `--fa-*` as CrowdWorks' — it is Font Awesome.
- Don't take the Google button's offset shadow as a CrowdWorks elevation token.
- Don't copy the email field's missing focus indicator.

## Voice & Tone

Not assessed as authored voice. 5,686 characters on the measured surface, mostly category and
job-listing links.

## Agent Prompt Guide

### Quick Color Reference
`#f26731` sign-up · `#006ab6` primary · `#004980` links · `#353d48` ink · `#617084` secondary ·
`#afb7c1` lines · `#cfd4da` disabled · `#ffffff` / `#ecedf0` / `#f9fafb` surfaces ·
`#cb2442` accent · `#c92b36` danger · `#177835` success · `#8f6c00` warning · `#0467a2` info ·
AI CrowdWorks `#5628a8` / `#0a7093` / `#32d4af`

### Example Component Prompts
- "A 48px sign-up button: `#f26731`, white 16px/700 label, 4px radius; hover lays a 10% black layer over the orange."
- "Body copy as `400 16px / 1.8 'Hiragino Kaku Gothic Pro', sans-serif` in `#353d48`."

## Governance

### Known Gaps

- **Contrast, `button-cta`.** Text `#ffffff` on `#f26731` measures 3.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `button-signup`.** Text `#ffffff` on `#f26731` measures 3.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
