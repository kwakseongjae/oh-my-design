---
name: Wolt
colors:
  brand: '#66cbf0'
  brand-hovered: '#56bee3'
  brand-pressed: '#4ab1d5'
  brand-surface: '#dcf7ff'
  brand-text: '#145367'
  brand-text-hovered: '#0e4253'
  brand-deep: '#08303e'
  focus: '#23748f'
  fill: '#151727'
  fill-hovered: '#363b57'
  foreground: '#272b42'
  input-text: '#202125'
  text-hovered: '#5e5b59'
  canvas: '#ffffff'
  surface: '#f5f1ed'
  surface-secondary: '#fbf8f5'
  surface-hovered: '#eeeae5'
  border: '#c3beb9'
  border-subdued: '#ded9d4'
  border-selected: '#3899bb'
  inverse: '#21201f'
  negative: '#c83527'
  positive: '#77d377'
  warning: '#ffad52'
  input-hover: '#009de0'
  input-focus: '#0f2594'
typography:
  body:
    fontSize: 16px
    use: navigation, buttons and the address field, on the system sans
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  pill: 9999px
components:
  button-register:
    type: button
    backgroundColor: transparent
    textColor: '#145367'
    rounded: 12px
    height: 46px
    padding: 0 16px
    typography: 16px / 500
    hover: transparent
    focus: 'outline 3px solid #23748f'
    use: Registrieren in the header, in --al-color-text-brand. Hover changes nothing (confirmed with :hover matched); focus draws a 3px teal outline — --al-color-outline-focused.
  link-nav:
    type: button
    backgroundColor: transparent
    textColor: '#272b42'
    rounded: 8px
    height: 24px
    typography: 16px / 500
    hover: 'fg #5e5b59'
    focus: 'outline 3px solid #23748f'
    use: Anmelden and Jobs — the ink label warms to --al-color-text-hovered on hover; focus is the same teal outline.
  input-address:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#202125'
    rounded: 100px
    height: 58px
    padding: 16px 52px
    typography: 16px / 400
    hover: 'border #009de0'
    focus: 'border #0f2594'
    use: Lieferadresse eingeben — the address pill with a transparent 2px border that turns cyan on hover and indigo on focus; no outline on this control.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    display: DD Scoop
---

# Design System Inspiration of Wolt

## Overview

### Visual Theme & Atmosphere

Wolt is a delivery platform from Helsinki — restaurants, groceries and shops delivered through one
app. On 31 May 2022 DoorDash
completed its acquisition of Wolt in an all-stock deal; Wolt's own newsroom announced it, and Wolt
keeps its name and brand.

The web is built on **Alchemy**, Wolt's in-house design system — the name is in Wolt's own code: the
`--al-*` tokens live in a CSS layer called `alchemy`, served from `wolt.com/static/themes/al/`. The look is bright and friendly: white and a warm off-white
**`#f5f1ed`**, a navy ink **`#272b42`**, the Wolt light blue **`#66cbf0`** as the brand fill, a deep
teal **`#145367`** for brand text and links, and big, fully rounded shapes. Headlines are set in
**DD Scoop**, whose files come from DoorDash's asset CDN.

What makes it worth reading:

- **Every colour has five states.** Alchemy names fills, surfaces, text and borders with `-hovered`,
  `-pressed`, `-selected` and `-disabled` — `--al-color-bg-fill-brand` `#66cbf0` →
  `-hovered` `#56bee3` → `-pressed` `#4ab1d5`.
- **Components own their radius.** `--al-c-button-medium-corner-radius` 20px,
  `--al-c-input-search-corner-radius` 9999px, `--al-c-toggle-checkbox-corner-radius` 4px — radius is a
  component decision, not one global value.
- **Two generations, visible.** `--al-*` (Alchemy) sits beside an older `--cb-*` layer with the same
  base colours and no component tokens; the page's own layer order is `reset, codeless, cb, alchemy,
  wpt-ui`.

#### Primary tasks
- Enter a delivery address; browse restaurants and shops.
- Sign up or log in.

### Brand Narrative

Wolt grew from Helsinki into a multi-country delivery company with a friendly, rounded, light-blue
identity, and joined DoorDash in 2022 while keeping its own name. The web shows both halves of that
story: Wolt's own design system, Alchemy, carrying every colour and state, and a headline face
fetched from DoorDash's servers.

### Principles

- **States are named.** Five steps for every colour.
- **Round and warm.** Big radii, greige neutrals.
- **Components decide.** Each component carries its own radius.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on `wolt.com/de/deu`: 678 root custom properties — **405 `--al-*`**
(Alchemy), 257 `--cb-*` (the earlier layer), eight `--global-*` scroll-padding helpers and a few
one-offs (`--swiper-theme-color`, `--appsflyer-banner-height`, Lightning CSS markers — excluded). Both
`al` and `cb` are served from Wolt's own `/static/themes/` files.

### Brand blue and teal

- **Brand** (`#66cbf0`) — `--al-color-bg-fill-brand`. **Brand Hovered** (`#56bee3`) · **Brand Pressed**
  (`#4ab1d5`) · **Brand Surface** (`#dcf7ff`, `--al-color-bg-surface-brand`).
- **Brand Text** (`#145367`) — `--al-color-text-brand`, the colour of most links and the register
  button (428 elements). **Brand Text Hovered** (`#0e4253`) · **Brand Deep** (`#08303e`, pressed).
- **Focus** (`#23748f`) — `--al-color-outline-focused` and `--fallback-focus-outline: 3px solid
  #23748f`.

### Ink, fills and warm neutrals

- **Foreground** (`#272b42`) — the navy ink of 2,605 text elements and most `<p>`.
- **Fill** (`#151727`) — `--al-color-bg-fill`, the dark fill · **Fill Hovered** (`#363b57`).
- **Text Hovered** (`#5e5b59`) — `--al-color-text-hovered`, a warm grey.
- **Canvas** (`#ffffff`) · **Surface** (`#f5f1ed`, `--al-color-bg-surface`) · **Surface Secondary**
  (`#fbf8f5`) · **Surface Hovered** (`#eeeae5`) · **Inverse** (`#21201f`).
- **Border** (`#c3beb9`) · **Border Subdued** (`#ded9d4`) · **Border Selected** (`#3899bb`).

The neutrals are warm — greige, not grey.

### Status

**Negative** `#c83527` · **Positive** `#77d377` · **Warning** `#ffad52`, each with surface and state
steps.

### Outside the tokens

The address field's hover border **`#009de0`** and focus border **`#0f2594`**, and its text
**`#202125`**, are written directly on the control.

## Typography

### Font family

**DD Scoop** is the only web font that loads (`document.fonts`, a variable face 400–700) and it sets
the headlines only. Its `@font-face` rules, one per script range, all point at
`img.cdn4dd.com/t/dd-scoop/DD-Scoop-*.woff2` — DoorDash's asset CDN. The same face and host serve the
Finnish site. DoorDash's own public writing about its typography names other faces; the DoorDash
link here rests on the file host and the name.

Body text, navigation and buttons use the operating system's sans stack (`-apple-system,
"system-ui", Roboto, "Segoe UI", …`) — not recorded as a brand face.

### Scale

Navigation, buttons and the address field are 16px, at 500 for controls and 400 in the field. The
`cb` layer carries the type primitives (`font-size-title-xxxlarge`, weights regular to bold).

## Layout

- `--wcom-main-header-height` 70px, `--wcom-side-padding` 32px.
- Discovery pages use carousels with cloned off-screen cards (an infinite-scroll technique).

### Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## Elevation & Depth

No shadow on any measured control in any state. `--al-color-shadow` is `rgba(0,0,0,0.07)` and the
overlay `rgba(0,0,0,0.48)`.

## Motion & Easing

Not measured.

---

**Tier 1 sources:** https://wolt.com/de/deu (live landing page — 678 root custom properties, 405 --al-* Alchemy, read via `getComputedStyle`; three components measured at rest, hover, pressed and focus after dismissing the consent banner; DD Scoop loaded from img.cdn4dd.com, captured 2026-09-26); https://wolt.com/zz-this-does-not-exist (nonsense-path control, captured 2026-09-26); https://wolt.com/static/themes/al/default.css (Alchemy theme file — `@layer alchemy { :root { --al-* } }`; the page declares `@layer reset, codeless, cb, alchemy, wpt-ui`, read 2026-09-26); https://press.wolt.com/en-WW/215041-doordash-completes-acquisition-of-wolt/ (Wolt newsroom — "DoorDash Completes Acquisition of Wolt", read 2026-09-26)

**Regional sources:** https://www.sec.gov/Archives/edgar/data/1792789/000162828022015815/dash-20220531.htm (DoorDash Form 8-K, 2022-05-31 — the completed acquisition of Wolt Enterprises Oy)

## Components

Three components, every state on its own page load after the consent banner was dismissed ("Nur
erforderliche verwenden"), focus read under a real Tab key.

- **Register** — transparent, `#145367` 16px/500, 12px radius, 46px, `0 16px`. **Hover changes
  nothing** (`:hover` matched).
- **Navigation links** — Anmelden, Jobs: `#272b42` 16px/500. Hover warms the label to **`#5e5b59`**.
- **Address field** — `#ffffff`, `#202125` text, a 100px pill 58px tall with room for a leading icon
  (`16px 52px`). Hover turns its 2px border **`#009de0`**, focus **`#0f2594`**.

### Focus is authored

Buttons and links draw `outline: 3px solid #23748f` under `:focus-visible` — Alchemy's focus colour.
The address field instead changes its border.

### Radius

Alchemy's component radii: buttons 20px (medium, large) and fully round (small, extra small), inputs
20px or 16px, search fully round, popovers, toasts and tooltips 20px, checkboxes 4px. Rendered on the
page: 12px, 8px, and the 100px pill.

### States

Three components. Hover: none on Register, warm grey on navigation links, a cyan border on the address
field. Focus: a 3px `#23748f` outline on buttons and links, an indigo border on the field. No disabled
state was observed.

## Do's and Don'ts

### Do
- Use `#66cbf0` for brand fills and `#145367` for brand text and links.
- Take every state colour from Alchemy's `-hovered` / `-pressed` / `-selected` / `-disabled` steps.
- Keep neutrals warm (`#f5f1ed`, `#c3beb9`).
- Round generously — 20px and fully round.

### Don't
- Don't count `--cb-*` as a separate palette; it is the earlier layer with the same values.
- Don't use DD Scoop for body text; it is a headline face.
- Don't drop the 3px `#23748f` focus outline.

## Voice & Tone

Not assessed as authored voice.

## Agent Prompt Guide

### Quick Color Reference
`#66cbf0` brand blue · `#145367` brand text · `#23748f` focus · `#272b42` ink · `#151727` dark fill ·
`#f5f1ed` surface · `#ffffff` page · `#c3beb9` border · `#c83527` negative · `#77d377` positive ·
`#ffad52` warning

### Example Component Prompts
- "A 46px text button: `#145367` 16px/500, 12px radius; focus `outline: 3px solid #23748f`."
- "A 58px address pill: white, 100px radius, transparent 2px border that turns `#009de0` on hover and
  `#0f2594` on focus."

## Governance

### Known Gaps

- **Contrast, `button-register`.** Text `#145367` on `#00000000` measures 2.46:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `link-nav`.** Text `#272b42` on `#00000000` measures 1.51:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
