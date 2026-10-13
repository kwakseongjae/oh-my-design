---
name: NHS website
colors:
  primary: '#005eb8'
  primary-dark: '#003087'
  primary-hover: '#004b93'
  primary-active: '#002f5c'
  primary-reverse-border: '#337ec6'
  primary-tint: '#d9e7f4'
  foreground: '#212b32'
  text-secondary: '#4c6272'
  grey-2: '#768692'
  grey-3: '#aeb7bd'
  border: '#d8dde0'
  background: '#f0f4f5'
  canvas: '#ffffff'
  button: '#007f3b'
  button-hover: '#00662f'
  button-active: '#00401e'
  link-visited: '#330072'
  link-hover: '#7c2855'
  pink: '#ae2573'
  error: '#d5281b'
  focus: '#ffeb3b'
  pale-yellow: '#fff9c4'
  warm-yellow: '#ffb81c'
  orange: '#ed8b00'
  aqua-green: '#00a499'
typography:
  nav:
    fontSize: 16px
    use: header navigation and the search field
  body:
    fontSize: 19px
    use: paragraphs, 19px / 28px, 400; the primary button at 600
  h2:
    fontSize: 22px
    use: h2 22px / 30.25px and action links, 600
  card:
    fontSize: 26px
    use: card headline links, 26px / 32px, 600
  h1:
    fontSize: 32px
    use: h1 32px / 36px, 600
rounded:
  sm: 4px
components:
  button-primary:
    type: button
    backgroundColor: '#007f3b'
    textColor: '#ffffff'
    rounded: 4px
    height: 60px
    padding: 14px 16px
    typography: 19px / 600
    shadow: '0 4px 0 #00401e'
    hover: '#00662f'
    pressed: '#00401e'
    focus: '#ffeb3b, fg #212b32, shadow 0 4px 0 #212b32'
    use: The green primary button (--nhsuk-button-colour). On the homepage it appears in NHS's own cookie banner. A hard 4px shadow beneath; hover and active darken along the token ramp; focus repaints it yellow with a black bottom edge.
  link-card:
    type: button
    backgroundColor: transparent
    textColor: '#005eb8'
    height: 32px
    typography: 26px / 600
    hover: 'fg #7c2855'
    pressed: '#ffeb3b, fg #212b32'
    focus: '#ffeb3b, fg #212b32, shadow 0 -2px 0 #ffeb3b, 0 4px 0 #212b32'
    use: Card headline links. Hover changes only the text colour, to --nhsuk-link-hover-colour; focus fills yellow and draws a 4px black bottom border as a box-shadow.
  link-action:
    type: button
    backgroundColor: transparent
    textColor: '#005eb8'
    height: 44px
    typography: 22px / 600
    hover: 'fg #7c2855'
    pressed: '#ffeb3b, fg #212b32'
    focus: '#ffeb3b, fg #212b32, shadow 0 -2px 0 #ffeb3b, 0 4px 0 #212b32'
    use: Action links (Order a repeat prescription), indented for their arrow icon. The same hover and focus as card links.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 56px
    padding: 16px 2px
    typography: 16px / 400
    hover: transparent
    pressed: '#ffeb3b, fg #212b32'
    focus: '#ffeb3b, fg #212b32, shadow inset 0 -4px 0 #212b32'
    use: Header navigation on the blue bar (Health A to Z). No hover change; focus fills yellow with a black edge drawn inset.
  input-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 4px
    height: 40px
    padding: 0 12px
    typography: 16px / 400
    hover: '#ffffff'
    focus: 'ring 0 0 0 4px #ffeb3b, border #212b32'
    use: The header search field, rounded on its left (4px 0 0 4px) where it joins the search button. Focus draws a 4px yellow ring and turns the border near-black — the input variant of the focus style, with no fill.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Frutiger
---

# Design System Inspiration of NHS website (nhs.uk)

## Overview

### Visual Theme & Atmosphere

nhs.uk is the NHS website for England, run by NHS England — the public front door to health
information, conditions from A to Z, and services such as ordering a repeat prescription. Its
design comes from the **NHS design system**, published openly in the NHS digital service manual and
shipped as the `nhsuk-frontend` package; the live site reports version `10.4.2` in its own
`--nhsuk-frontend-version` token.

It looks like a public service that must work for everyone: **NHS blue `#005eb8`** for the header,
links and the brand, a near-black ink **`#212b32`**, a pale grey page **`#f0f4f5`** under white
cards, a green **`#007f3b`** primary button, and **Frutiger**, the NHS brand font, which NHS
England licenses for NHS organisations.

The part worth studying most is focus. The design system states it plainly — "Like GOV.UK, we use
a combination of yellow and black" — and nhs.uk renders it exactly: focused links fill **yellow
`#ffeb3b`** with a **black bottom border**; focused inputs get a yellow ring and a thick black
border.

What makes it worth reading:

- **Focus is a designed state, in two variants.** Links and buttons fill yellow; inputs ring yellow.
  Both use `--nhsuk-focus-colour` and `--nhsuk-focus-text-colour`.
- **Shadows are hard offsets.** Every shadow on the page is a solid, unblurred line — `0 4px 0` under
  a button, `0 3px 0` under a card.
- **Almost nothing is rounded.** 4px on buttons and the search field; 0 everywhere else.

#### Primary tasks
- Look up a condition or medicine (Health A to Z); search.
- Use an NHS service — order a repeat prescription, find a service.

### Brand Narrative

The NHS website has to be usable by anyone in England, on any device, in any state of health, and
its design system says so in every decision: large body text, one blue for links, one green for
the primary action, and a focus state that no one can miss. It borrowed that yellow-and-black focus
from GOV.UK and says so, then made it its own — two variants, one for links and one for inputs —
and put its brand in the NHS blue and a licensed Frutiger rather than in decoration.

### Principles

- **Visible focus, always.** Yellow and black, on every control.
- **Readable first.** 19px body, near-black on white.
- **Flat and square.** Hard shadows, almost no radius.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `www.nhs.uk`: **73 custom properties, all `--nhsuk-*`**, and no
framework or third-party variables.

### Blue — the NHS

- **Primary** (`#005eb8`) — `--nhsuk-blue-colour`, `--nhsuk-brand-colour`, `--nhsuk-link-colour`
  and the login button. The header bar, links, card headlines.
- **Primary Dark** (`#003087`) — `--nhsuk-dark-blue-colour`, footer and reverse links.
- **Primary Hover** (`#004b93`) — `--nhsuk-login-button-hover-colour` · **Primary Active**
  (`#002f5c`) — `--nhsuk-link-active-colour`.
- **Primary Reverse Border** (`#337ec6`) · **Primary Tint** (`#d9e7f4`, the secondary button's hover).

### Ink and greys

- **Foreground** (`#212b32`) — `--nhsuk-text-colour`, `--nhsuk-black-colour` and
  `--nhsuk-focus-text-colour`: one near-black for text and for focus. Every `<p>` but one.
- **Text Secondary** (`#4c6272`) — `grey-1`, also the input border.
- **Grey 2** (`#768692`) · **Grey 3** (`#aeb7bd`, the border-hover colour) · **Border** (`#d8dde0`,
  `grey-4` and the template background) · **Background** (`#f0f4f5`, `grey-5`,
  `--nhsuk-body-background-colour`) · **Canvas** (`#ffffff`, cards and inputs).

### Buttons — five variants as tokens

| variant | colour | hover | active / shadow |
|---|---|---|---|
| primary | **`#007f3b`** | **`#00662f`** | **`#00401e`** |
| secondary | transparent, `#005eb8` border and text | `#d9e7f4` | `#c7dcef` / `#005eb8` |
| reverse | white, `#212b32` text | `#d9d9d9` | `#b3b3b3` |
| warning | `#d5281b` | `#aa2016` | `#6b140e` |
| login | `#005eb8` | `#004b93` | `#002f5c` |

### Links

`--nhsuk-link-colour` `#005eb8` · visited **`#330072`** (`--nhsuk-purple-colour`) · hover
**`#7c2855`** (`--nhsuk-dark-pink-colour`) · active `#002f5c`.

### Focus and the rest of the palette

- **Focus** (`#ffeb3b`) — `--nhsuk-focus-colour` and `--nhsuk-yellow-colour`.
- **Pale Yellow** (`#fff9c4`) · **Warm Yellow** (`#ffb81c`) · **Orange** (`#ed8b00`) · **Aqua Green**
  (`#00a499`) · **Pink** (`#ae2573`) · **Error** (`#d5281b`, `--nhsuk-error-colour` and
  `--nhsuk-red-colour`).

## Typography

### Font family

**Frutiger** — `"Frutiger W01", arial, sans-serif` on body, headings and buttons. Two weights load
(`document.fonts`): 400 and 600, from `assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2` and
`-65Bold.woff2`, NHS's own asset host.

The design system's typography page gives the same stack — `font-family: "Frutiger W01", Arial,
sans-serif;` — says "NHS England has a licence for 3 weights of the font which NHS organisations
in England can sign up to use", and "Default to Arial when Frutiger isn't available". Frutiger is
a licensed face; a consumer outside the NHS must not render Arial under its name.

### Scale

h1 **32px / 36px** at 600 · card headlines 26px / 32px at 600 · h2 and action links 22px at 600 ·
paragraphs **19px / 28px** at 400 · navigation and the search field 16px. The body size is large on
purpose — 19px, not 16.

## Layout

- A centred width container (240px margins at 1440px).
- Cards separate with a hard grey underline, `box-shadow: 0 3px 0 #d8dde0`, and 51px bottom margin.
- Breakpoints as tokens: mobile 20rem, tablet 40.0625rem, desktop 48.0625rem, large desktop
  61.875rem.

### Responsive Behavior

**Not measured** beyond the breakpoint tokens. Desktop 1440×1000 only.

## Elevation & Depth

None in the usual sense. Every shadow is a solid offset with no blur — the button's `0 4px 0`, the
card's `0 3px 0`, the focus edges. It reads like print, not like layered glass.

## Motion & Easing

Not measured. No motion token among the 73.

---

**Tier 1 sources:** https://www.nhs.uk/ (live homepage — 73 --nhsuk-* custom properties read via `getComputedStyle`; five components measured at rest, hover, pressed and focus; Frutiger W01 loaded from assets.nhs.uk, captured 2026-09-26); https://www.nhs.uk/zz-this-does-not-exist (nonsense-path control — a real HTTP 404, "Page not found - NHS", captured 2026-09-26); https://service-manual.nhs.uk/zz-this-does-not-exist (the design-system host's control — a real 404, captured 2026-09-26); https://service-manual.nhs.uk/design-system (NHS design system, read 2026-09-26); https://service-manual.nhs.uk/design-system/styles/focus-state (focus state — "Like GOV.UK, we use a combination of yellow and black", links with "a yellow background with a black bottom border", read 2026-09-26); https://service-manual.nhs.uk/design-system/styles/typography (Frutiger, the 3-weight NHS England licence, the Arial fallback, read 2026-09-26)

**Regional sources:** https://www.bbc.co.uk/news/articles/ce8nr1936zyo (BBC News — "NHS App upgrade to give patients more choice over treatment"; covers the NHS App, which shares the design system); https://www.bbc.co.uk/news/uk-england-45434453 (BBC News — "Pilot areas announced for NHS app to book appointments")

## Components

Five components, every state on its own page load, focus read before the mouse moved.

- **Primary button** — `#007f3b`, white 19px/600, 4px radius, 60px, with a hard
  `0 4px 0 #00401e` shadow. Hover **`#00662f`**, active **`#00401e`** — exactly the token ramp. On
  the homepage it appears in NHS's own cookie banner.
- **Card link** — `#005eb8` 26px/600. Hover changes only the text colour, to **`#7c2855`**.
- **Action link** — `#005eb8` 22px/600, indented for its arrow. The same hover.
- **Navigation link** — white 16px on the blue header. **No hover change.**
- **Search field** — `#ffffff`, `#000000` text, 16px, 40px, rounded `4px 0 0 4px` where it meets the
  search button. No hover change.

### Focus — two authored variants

| control | focus |
|---|---|
| Card and action links | fill `#ffeb3b`, text `#212b32`, `box-shadow: 0 -2px 0 #ffeb3b, 0 4px 0 #212b32` — a yellow block with a black bottom border |
| Navigation link | fill `#ffeb3b`, text `#212b32`, `box-shadow: inset 0 -4px 0 #212b32` |
| Primary button | fill `#ffeb3b`, text `#212b32`, `box-shadow: 0 4px 0 #212b32` |
| Search field | `box-shadow: 0 0 0 4px #ffeb3b`, border `#212b32`, no fill |

The `outline` is set but transparent (`rgba(0,0,0,0) solid 4px`) — the visible focus is always the
box-shadow and fill. This is the pattern the design system documents: "When links are focused, they
have a yellow background with a black bottom border"; form inputs get "a yellow outline and a thick
black border".

### Radius

4px on buttons and the search field, **0** on cards, links, headings and containers.

### States

Five components. Hover: the button darkens along its ramp; card and action links turn `#7c2855`;
navigation and the search field do not change. Focus: yellow fill with a black edge on links and the
button, a yellow ring with a black border on the search field. The secondary, reverse, warning and
login button variants exist as tokens but were not rendered on the homepage. No disabled state was
observed.

## Do's and Don'ts

### Do
- Give every focusable element the yellow-and-black focus: a fill and black bottom border for links
  and buttons, a yellow ring and black border for inputs.
- Use `#005eb8` for links and the brand, `#212b32` for text, `#f0f4f5` behind white cards.
- Set body text at 19px.
- Draw shadows as hard offsets.

### Don't
- Don't round cards or links.
- Don't render Arial and call it Frutiger.
- Don't blur shadows.
- Don't use the button green for links or the link blue for primary buttons.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#005eb8` NHS blue · `#003087` dark blue · `#212b32` text · `#4c6272` secondary · `#d8dde0`
borders · `#f0f4f5` page · `#ffffff` cards · `#007f3b` / `#00662f` / `#00401e` button ramp ·
`#7c2855` link hover · `#330072` visited · `#ffeb3b` focus · `#d5281b` error

### Example Component Prompts
- "A primary button: `#007f3b`, white 19px/600 Frutiger, 4px radius, `0 4px 0 #00401e` shadow;
  hover `#00662f`; focus yellow `#ffeb3b` with `#212b32` text and a `0 4px 0 #212b32` edge."
- "A card link `#005eb8` 26px/600; hover `#7c2855`; focus yellow fill with a 4px black bottom
  border."

## Governance

### Known Gaps

- **Contrast, `link-card`.** Text `#005eb8` on `#00000000` measures 3.29:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-action`.** Text `#005eb8` on `#00000000` measures 3.29:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
