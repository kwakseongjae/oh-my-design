---
name: Studysapuri
colors:
  primary: '#0b41a0'
  primary-dark: '#093788'
  primary-light: '#275ab3'
  foreground: '#24243f'
  text-secondary: '#808d96'
  text-spot: '#adb8be'
  action-primary: '#0ca5e6'
  action-primary-light: '#30b6f0'
  action-primary-dark: '#0c8dd8'
  action-secondary: '#3ec1bd'
  action-secondary-light: '#64cdca'
  action-secondary-dark: '#33aab2'
  ultra-blue: '#1c80e7'
  spot-gray: '#67717a'
  spot-pink: '#de30ca'
  spot-purple: '#aa30de'
  spot-violet: '#b551e0'
  canvas: '#ffffff'
  surface-gray: '#fafafa'
  surface-sky: '#f0f8ff'
  surface-sky-strong: '#e1f4ff'
  surface-tint: '#e3eefa'
  line: '#e9eeef'
  promo-red: '#f0307d'
  promo-pink: '#f56ca3'
  promo-yellow: '#fcda21'
  promo-orange: '#ff8c5a'
  subject-math: '#436fba'
  subject-japanese: '#e7cc4c'
  subject-informatics: '#69cbf5'
  subject-practical: '#8eaee5'
typography:
  caption:
    fontSize: 11px
    use: 6 text elements
  small:
    fontSize: 12px
    use: 61 text elements; the login link
  body:
    fontSize: 14px
    use: 104 text elements, the dominant size; cards and grade pills
  lead:
    fontSize: 16px
    use: 12 text elements
  cta:
    fontSize: 19px
    use: the primary call to action, 700
  heading:
    fontSize: 20px
    use: 5 text elements
  display:
    fontSize: 24px
    use: 2 text elements, the largest measured
rounded:
  md: 8px
  lg: 10px
  pill: 1440px
components:
  button-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#0b41a0'
    rounded: 10px
    height: 69px
    padding: 20px 0
    typography: 19px / 700
    shadow: rgba(0,0,0,0.15) 0 3px 6px
    hover: opacity 0.9
    pressed: opacity 0.9
    use: 初回の方は14日間無料体験！会員登録へ — the sign-up call to action. White with a blue label and the page's only offset shadow. Hover and press fade it to 90% over 0.3s; colours do not change. Focus is the browser's ring.
  link-login:
    type: button
    backgroundColor: transparent
    textColor: '#0b41a0'
    rounded: 0px
    height: 32px
    padding: 1px 12px
    typography: 12px / 700
    hover: opacity 0.5
    pressed: opacity 0.5
    use: ログイン in the header. Fades to half opacity on hover — the deepest fade on the page.
  card-audience:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#24243f'
    rounded: 8px
    padding: 0 12px 0 0
    typography: 14px / 400
    shadow: rgba(0,0,0,0.1) 0 0 10px
    hover: opacity 0.8
    pressed: opacity 0.8
    use: Audience cards (高校生・高卒生 and siblings) — a centred soft shadow, fading to 80% on hover.
  pill-grade:
    type: button
    backgroundColor: '#e3eefa'
    textColor: '#0b41a0'
    rounded: 8px
    height: 60px
    typography: 14px / 700
    hover: opacity 0.7
    pressed: opacity 0.7
    use: Grade selectors (高校1年生 and siblings) on a pale blue tint, fading to 70% on hover.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Open Sans
---

# Design System Inspiration of Studysapuri (スタディサプリ)

## Overview

### Visual Theme & Atmosphere

Studysapuri is Recruit's online learning service — recorded lectures from well-known cram-school
teachers, for students from elementary school through university entrance exams, and English
for adults. It began in an internal business contest: in March 2012 the idea won the grand
prize of Recruit's *New RING* competition, and in October 2012 it launched as **受験サプリ**
("exam supplement"), an online prep school aimed at a specific problem the company names on its
own history page — that family income and region shape who gets into university. In March
2013 it dropped to ¥980 a month.

The "supplement" name multiplied: 勉強サプリ for grades 4–9 in 2015, then 英語サプリ and
英単語サプリ. In April 2015 Recruit bought Quipper, a London-founded learning company, and in
**February 2016 every サプリ service was folded into one brand, スタディサプリ**. A teachers'
edition followed that April, and in 2017 Recruit's university-guide brand リクナビ進学 was
renamed スタディサプリ進路 — the learning brand absorbing the older information business.

The hub page reads like that history: a deep **sapuri blue `#0b41a0`** carries the name and
every primary action, a charcoal-navy **`#24243f`** carries the text, and a set of bright
secondary colours — sky `#0ca5e6`, turquoise `#3ec1bd`, pink `#de30ca` — marks the separate
services. Surfaces are white and pale blue. Set mostly at 14px.

Three things make it worth reading:

- **Two colour generations live side by side.** `--cl_sapuri_blue` (flat, underscore) and
  `--cl-text-primary-darkblue700` (semantic, hyphen) are the same `#0b41a0`.
- **School subjects have colours.** `--cl-subject-math` `#436fba`, `-english` `#f56ca3`,
  `-japanese` `#e7cc4c`, `-science` `#b551e0`, `-social` `#33aab2`, `-informatics` `#69cbf5`,
  `-practical` `#8eaee5`.
- **Hover is a fade, and every control fades by a different amount** — 0.9, 0.8, 0.7, 0.5.

#### Primary tasks
- Choose a school level or grade and find its course.
- Start the 14-day free trial; sign in.

### Brand Narrative

Studysapuri started as a price and access argument — famous teachers' lectures, unlimited, for
¥980 a month, so that where a student lives and what the family earns matter less. The brand
then grew by accretion: a サプリ for each audience, until 2016 folded them into one name and
2017 folded Recruit's university-guide brand in too.

The token set carries that layering. An older flat palette named for the brand
(`--cl_sapuri_blue`) survives beside a newer semantic one organised by role, and the newer one
adds what a multi-service learning brand needs — a colour per school subject, a separate campaign
palette — while keeping the sapuri blue as the one colour that means Studysapuri.

### Principles

- **One blue means the brand.** Everything else is a service, a subject or a campaign.
- **Colour a subject, not just a state.** Math is `#436fba` wherever it appears.
- **Fade to respond.** Hover changes opacity, never hue.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `studysapuri.jp`. About 190 custom properties resolve. The
page is built with **Panda CSS** — `--made-with-panda` is literally `"🐼"` — and Panda's own
scaffolding is excluded: `--breakpoints-*` and `--sizes-breakpoint-*` (5 each) and 36 utility
variables (`--blur`, `--translate-x`, `--skew-y`, `--gradient-from-position` …). What remains is
Studysapuri's: 45 `--cl_*`, 60 `--cl-*`, and about 37 component-scoped values.

### Sapuri blue — the brand and the action

- **Primary** (`#0b41a0`) — `--cl_sapuri_blue`, and in the newer layer both
  `--cl-text-primary-darkblue700` and `--cl-background-primary-darkblue700`. The label on the
  sign-up button, the login link and the grade pills.
- **Primary Dark** (`#093788`) — `--cl_sapuri_blue_plus` / `-darkblue800`.
- **Primary Light** (`#275ab3`) — `--cl-background-primary-darkblue600`.

The flat layer has a five-step naming habit: `_minus2` `#4978c2` · `_minus` `#3c67b3` · base ·
`_plus` `#093788` · `_plus2` `#05266f`.

### Ink

- **Foreground** (`#24243f`) — `--cl_black` / `--cl-text-primary-gray900`. Body text. Of text
  elements on the page, 105 are white (on the dark header, footer and blue bands), 41 are this
  ink and 35 are sapuri blue — a hub page is mostly labels and links, so the ink leads the blue
  only narrowly.
- **Text Secondary** (`#808d96`) — `--cl-text-secondary-gray500`.
- **Text Spot** (`#adb8be`) — `--cl-text-spot-gray400`.

### Action colours — the semantic layer

`--cl-action-*` is where the newer layer puts interactive colour, in 500/600/700 triples:

- **Action Primary** (`#0ca5e6`) — `--cl-action-primary-skyblue600`, with **`#30b6f0`** (500) and
  **`#0c8dd8`** (700).
- **Action Secondary** (`#3ec1bd`) — `--cl-action-secondary-turquoise600`, with **`#64cdca`**
  (500) and **`#33aab2`** (700).
- **Spot** — **Spot Gray** `#67717a` (the most-painted non-white background, on 10 elements) ·
  **Spot Pink** `#de30ca` · **Spot Purple** `#aa30de` · **Spot Violet** `#b551e0`.

Note the naming: the semantic layer calls sky blue "action primary", while the brand's own blue
is filed under text and background. On the measured controls the sapuri blue does the primary
work; the sky blue appears on 8 text elements.

- **Ultra Blue** (`#1c80e7`) — `--cl_ultra_blue` / `--cl-background-primary-ultrablue600`.

### Surfaces and lines

**Canvas** (`#ffffff`) · **Surface Gray** (`#fafafa`, `-gray50`) · **Surface Sky** (`#f0f8ff`,
`-skyblue50`) · **Surface Sky Strong** (`#e1f4ff`, `-skyblue100`) · **Line** (`#e9eeef`,
`--cl-line-primary-gray100`).

**Surface Tint** (`#e3eefa`) — the fill on the grade pills. It is **not a token**: neither layer
contains it; it is written directly.

### Sales promotion

A separate group for campaign colour, each with pale 200-step backgrounds:
**Promo Red** `#f0307d` · **Promo Pink** `#f56ca3` · **Promo Yellow** `#fcda21` ·
**Promo Orange** `#ff8c5a`.

### Subjects

`--cl-subject-math` **`#436fba`** · `-english` `#f56ca3` (the promo pink) · `-japanese`
**`#e7cc4c`** · `-science` `#b551e0` (spot violet) · `-social` `#33aab2` (turquoise 700) ·
`-informatics` **`#69cbf5`** · `-practical` **`#8eaee5`**. Three reuse a colour from elsewhere
in the set; four are unique to the subject group.

### Things recorded as found

- `--cl_pink_week` `#b433c2` sits beside `--cl_pink_strong` — "week" where the siblings say weak.
- The course-card tokens `--cl_course_header` and `--cl_course_bg` write three hexes directly —
  `#0D3F94`, `#31938E`, `#2BAAA3` — that belong to neither layer.

## Typography

### Font family

**Open Sans is the loaded webfont** — 400 and 700, self-hosted from `/_next/static/media/`
(no request to Google's font CDN), declared through `--font_open_sans` as
`"Open Sans", "Open Sans Fallback"`. It is a Google-published open face, recorded as what is
served, not as a proprietary brand face. Open Sans has no Japanese glyphs; Japanese text falls
through the stack to operating-system faces (`Hiragino Sans`, `Meiryo`, `MS PGothic`), which are
not recorded as brand fonts.

**StudySapuriNumbers** — a numerals face of the brand's own — is declared: `--font_ss_numbers`
names it, and an `@font-face` points at `StudySapuri_Numbers-Regular.otf` on
`assets.studysapuri.jp`. **It did not load on the measured page**, so there is no specimen and
it is not a token. It exists; it was not seen rendering.

### Scale

Rendered on text elements: 14px ×104 · 12px ×61 · 16px ×12 · 11px ×6 · 20px ×5 · 13px ×5 ·
24px ×2 · 19px ×2 (the sign-up label). Component-scoped `--heading-font-size` takes 14/16/18/20,
`--font-size` 10/12/14.

## Layout

- The header is a token: `--header-height` 54px, `--header-container-size` 1230px.
- Carousels carry their own spacing: `--slide-spacing` 8/16/20/24/32/36px and `--slide-size`
  per slider. No global spacing scale is published.
- Illustration offsets are tokens too: `--illustHeightPc` / `--illustHeightSp`,
  `--illustTopPosPc` 7px — the page tunes its artwork separately for desktop and phone.

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only. The `Pc`/`Sp` token pairs show the page is tuned for
phones separately.

## Elevation & Depth

Two shadows on the page: `rgba(0,0,0,0.1) 0 0 10px` on cards (centred, soft) and
`rgba(0,0,0,0.15) 0 3px 6px` on the sign-up button (offset down). No shadow token is published.

## Motion & Easing

Measured controls compute `transition: background-color 0.3s, color 0.3s, opacity 0.3s`; only
the opacity step is used. Separately the set declares `--transition-prop: opacity`,
`--transition-duration: 1s` and `--transition-easing: ease-in` — a slower fade whose target on the
page was not identified.

---

**Tier 1 sources:** https://studysapuri.jp/ (live service hub — about 190 custom properties read via `getComputedStyle`, Panda CSS scaffolding excluded; four controls measured at rest, hover, pressed and focus, captured 2026-09-23); https://studysapuri.jp/zz-this-does-not-exist (nonsense-path control — a real HTTP 404 with a 112-character body, establishing the host is not a catch-all, captured 2026-09-23); https://brand.studysapuri.jp/about/history/ (first-party brand history — New RING grand prize 2012-03, launch as 受験サプリ 2012-10, ¥980/month 2013-03, Quipper acquisition 2015-04, unification as スタディサプリ 2016-02, read 2026-09-23)

**Regional sources:** https://resemom.jp/article/2016/02/26/29934.html (リセマム, 2016-02-26 — reports the unification of 受験サプリ and the other サプリ services under スタディサプリ); https://diamond.jp/articles/-/148799 (ダイヤモンド・オンライン — adoption beyond students, by teachers and working adults)

## Components

Four controls measured, every state on its own page load, focus read before the mouse moved.

### Hover is a fade — and each control has its own depth

No measured control changes colour on hover. Instead each fades, over `opacity 0.3s`:

| control | fades to |
|---|---|
| Sign-up button | **0.9** |
| Audience card | **0.8** |
| Grade pill | **0.7** |
| Login link | **0.5** |

Pressed matches hover on all four. The white text links in the dark header change none of
background, text colour, border, shadow, outline, transform or opacity on hover; whether they
underline was not read, so they are not declared.

- **Sign-up** — `#ffffff`, `#0b41a0` label at 19px/700, 10px radius, 69px tall, and the page's
  one offset shadow, `rgba(0,0,0,0.15) 0 3px 6px`.
- **Login** — transparent, `#0b41a0` 12px/700, 32px tall.
- **Audience card** — `#ffffff`, `#24243f` 14px, 8px radius, a centred
  `rgba(0,0,0,0.1) 0 0 10px` shadow.
- **Grade pill** — `#e3eefa`, `#0b41a0` 14px/700, 8px radius, 60px tall.

### Focus is the browser's

Every control shows `outline: rgb(0, 95, 204) auto 1px` under `:focus-visible` — Chrome's
default ring, unchanged. No focus colour is recorded.

### Radius

Rendered: **8px** ×11 (cards, pills) · **10px** (the sign-up button, and a split control's two
halves as `10px 0 0 10px` / `0 10px 10px 0`) · **1440px** ×3 (circles). The component tokens
`--buttonSolid-borderRadius` and `--buttonOutline-borderRadius` are both **4px**, and no measured
control renders at 4px — they govern buttons not on this page.

Also excluded as not Studysapuri's control: a course button that renders `#efefef` with
`#000000` text at 13.33px — the browser's own `<button>` defaults, left unstyled behind an image.

### States

Four components, every state measured. Hover and pressed are opacity fades — 0.9, 0.8, 0.7,
0.5 — with no colour change. Focus is the browser's `auto` ring on all of them. No disabled state
was observed.

## Do's and Don'ts

### Do
- Use `#0b41a0` for the primary label and `#24243f` for body text.
- Signal hover with opacity, not a colour change — and fade less on large targets than on small
  links.
- Give each school subject its own colour from the `--cl-subject-*` set.

### Don't
- Don't count `--breakpoints-*`, `--sizes-*` or the utility variables as Studysapuri's — they are
  Panda CSS.
- Don't use `StudySapuriNumbers` as though it rendered; it was declared and not loaded.
- Don't take the unstyled `#efefef` course button as a component.

## Voice & Tone

Not assessed as authored voice. 1,832 characters on the measured surface, mostly school levels,
grades and course names.

## Agent Prompt Guide

### Quick Color Reference
`#0b41a0` primary · `#24243f` ink · `#808d96` secondary text · `#0ca5e6` sky · `#3ec1bd`
turquoise · `#de30ca` pink · `#67717a` spot gray · `#ffffff` / `#fafafa` / `#f0f8ff` / `#e1f4ff`
surfaces · `#e9eeef` lines · subjects `#436fba` `#f56ca3` `#e7cc4c` `#b551e0` `#33aab2`
`#69cbf5` `#8eaee5`

### Example Component Prompts
- "A 69px sign-up button: white, `#0b41a0` 19px/700 label, 10px radius,
  `rgba(0,0,0,0.15) 0 3px 6px` shadow; hover fades to 0.9 over 0.3s."
- "A grade pill: `#e3eefa`, `#0b41a0` 14px/700, 8px radius; hover fades to 0.7."

## Governance

### Known Gaps

- **Contrast, `link-login`.** Text `#0b41a0` on `#00000000` measures 2.28:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
