---
id: n26
name: N26
country: DE
category: fintech
homepage: "https://n26.com"
primary_color: "#088177"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=n26.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "N26 web tokens (nemo)"
  url: "https://n26.com/de-de"
  type: system
  description: "About 250 authored custom properties on n26.com, beside Tailwind v4's engine variables. Colours are ramps named for the 2018 rebrand's palette — teal, rhubarb, lagoon (petrol blue), sand (golden wheat) and cream — each aliased under a --color-nemo* name; type, spacing, radius and tracking are nemo-prefixed scales. The family names N26 and N26-Extended are served from GT America font files."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#088177"
    primary-strong: "#045e58"
    primary-deep: "#005451"
    primary-heavy: "#003b39"
    primary-light: "#a8ded8"
    primary-bright: "#d8edeb"
    primary-mist: "#809d9c"
    rhubarb: "#b55b64"
    rhubarb-strong: "#b04364"
    rhubarb-deep: "#8e1b44"
    rhubarb-light: "#ffdce1"
    lagoon: "#1d6ea2"
    lagoon-deep: "#00395f"
    lagoon-light: "#c6eaff"
    sand: "#c6b29f"
    cream: "#faf8f5"
    cream-deep: "#ede7e0"
    foreground: "#1b1b1b"
    gray-strong: "#6d6d6d"
    gray-deep: "#2a2a2a"
    gray-line: "#d9d9d9"
    canvas: "#ffffff"
  typography:
    family: { sans: "N26", display: "N26-Extended" }
    body: { size: 16, use: "N26 400/500; the buttons at 500" }
  rounded: { xs: 2, sm: 4, md: 8, lg: 16, pill: 24, xl: 32, xxl: 40 }
  components:
    button-primary: { type: "button", bg: "#003b39", fg: "#ffffff", radius: 24, height: "48px", padding: "12px 24px", font: "16px / 500", hover: "#045e58", focus: "ring 0 0 0 2px #ffffff, 0 0 0 4px #045e58", use: "Girokonto eröffnen — the account-opening pill in --color-nemoTealHeavy. Hover lightens to --color-nemoTealStrong over 0.15s; focus draws a double ring, 2px white inside 4px teal." }
    button-tonal: { type: "button", bg: "rgba(198,178,159,0.25)", fg: "#003b39", radius: 24, height: "48px", padding: "12px 24px", font: "16px / 500", hover: "rgba(198,178,159,0.5)", focus: "ring 0 0 0 2px #ffffff, 0 0 0 4px #045e58", use: "Login in the header — sand at 25% (--color-nemoSand25) with a deep-teal label. Hover doubles the sand to 50%; focus is the same double ring." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://n26.com/de-de", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://n26.com/de-de", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://n26.com/zz-this-does-not-exist-omd-probe", captured: "2026-09-26" }
    - { id: rebrand-2018, kind: official-doc, url: "https://n26.com/en-eu/blog/n26-new-logo-new-colors", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.cream: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.cream-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-line: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.gray-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lagoon: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lagoon-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.lagoon-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-bright: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-heavy: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-mist: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.rhubarb: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.rhubarb-deep: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.rhubarb-light: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.rhubarb-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-tonal.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of N26

## 1. Visual Theme & Atmosphere

N26 is a mobile bank from Berlin — a current account opened and run from a phone. Its look was set
in a rebrand announced on its own blog on 19 December 2018: a rounder, heavier logo, a new typeface,
and a palette that left the earlier mint behind for **teal**, "our primary branding color", **golden
wheat**, **rhubarb** and **petrol blue**. Christian Hertlein, N26's Head of Design, described the
choice: at first glance "quite a traditional color set — a blue; a yellow; a green", but on a second
look "each an uncommon version of the simpler shade".

Eight years later the site still runs on exactly those four families. The page is white and warm
cream **`#faf8f5`**, the ink a soft black **`#1b1b1b`**, the brand teal **`#088177`** in links and
accents, a deep teal **`#003b39`** on the account-opening button, and the golden wheat — here named
sand, **`#c6b29f`** — as a translucent fill on quiet buttons. Buttons are pills; cards are rounded
at 16px.

What makes it worth reading:

- **The palette is the rebrand, verbatim.** `--color-teal-*`, `--color-rhubarb-*`,
  `--color-lagoon-*` (petrol blue) and `--color-nemoSand*` (golden wheat) map one-to-one onto the
  four colours the 2018 post names.
- **Every token has a nemo name.** `--color-nemoTealHeavy`, `--text-nemo16`, `--spacing-nemo24`,
  `--radius-nemo24`, `--tracking-nemoWide` — one prefix across the system.
- **Focus is a double ring**: 2px of white inside 4px of teal, on every measured button.

### Primary tasks
- Open a current account (Girokonto eröffnen); log in.
- Compare account plans; read about banking, saving, investing and travel.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `n26.com/de-de`: 305 root custom properties. **Tailwind v4's
engine variables are excluded** (29 `--tw-*`, and the stock container and drop-shadow scales), as
are 56 hashed build variables (`--_1n4x04z*`, `--_1yr65jo*`) that redirect to named tokens. None of
the colours are Tailwind defaults — all are flat hex values.

### Teal — the brand

- **Primary** (`#088177`) — `--color-teal-500`, `--color-nemoTeal`. Links and accents (21 text
  elements).
- **Primary Strong** (`#045e58`) — `teal-700`, `--color-nemoTealStrong`. The primary button's hover
  and the outer focus ring.
- **Primary Deep** (`#005451`) — `teal-800` · **Primary Heavy** (`#003b39`) — `teal-900`,
  `--color-nemoTealHeavy`, the account-opening button and deep-teal labels.
- **Primary Light** (`#a8ded8`) — `teal-200` · **Primary Bright** (`#d8edeb`) — `teal-100` ·
  **Primary Mist** (`#809d9c`) — `teal-450`.

### Rhubarb, lagoon, sand

- **Rhubarb** (`#b55b64`) with **Rhubarb Strong** `#b04364`, **Rhubarb Deep** `#8e1b44`, **Rhubarb
  Light** `#ffdce1` (and `#44021d`, `#f5e1e3` at the ends).
- **Lagoon** — the petrol blue — (`#1d6ea2`) with **Lagoon Deep** `#00395f` and **Lagoon Light**
  `#c6eaff`.
- **Sand** — the golden wheat — (`#c6b29f`), used mostly translucent: `--color-nemoSand15`
  `#c6b29f26`, `-25` `#c6b29f40`, `-50` `#c6b29f80` (rgba 15%, 25%, 50%).

### Ink, grey, cream

- **Foreground** (`#1b1b1b`) — `--color-black` and `--color-nemoBlack`. Every `<p>`, 459 text
  elements. Not pure black.
- **Gray Strong** (`#6d6d6d`) · **Gray Deep** (`#2a2a2a`) · **Gray Line** (`#d9d9d9`).
- **Cream** (`#faf8f5`) — `--color-nemoCream`, section backgrounds · **Cream Deep** (`#ede7e0`) ·
  **Canvas** (`#ffffff`).

## 3. Typography Rules

### Font family

Two families load (`document.fonts`): **N26** at 400, 500 and 600 — body, navigation and buttons,
`--font-standard: N26, N26-Fallback, sans-serif` — and **N26-Extended** at 500 for headings,
`--font-extended`. Both are self-hosted under `/_build/fonts/`, and the files are named for the face
underneath: `GT-America-Standard-Regular`, `GT-America-Standard-Medium`, `GT-America-Extended-Medium`,
and `N26-Sans-Extended-Medium`. The CSS names are N26's; the files say most of it is GT America. The
2018 post mentions a new typeface without naming it.

Metric-tuned fallback faces (`N26-Fallback`, `N26-Extended-Fallback`, both local Arial with
`size-adjust` and ascent/descent overrides) are declared so the layout does not jump while the fonts
load.

### Scale

`--text-nemo12` to `--text-nemo80`, 21 sizes each with its own line height. Weights
`--font-weight-nemoNormal` 400 and `-nemoMedium` 500. Tracking is slightly open:
`--tracking-nemoWide` 0.015625em, `-nemoWider` 0.01875em.

## 4. Component Stylings

Two components, measured in one browser session after rejecting the consent banner (Usercentrics),
focus read under a real Tab key before the pointer moved, hover confirmed with `:hover` matched.

- **Primary** — Girokonto eröffnen: `#003b39`, white N26 16px/500, a 24px-radius pill 48px tall,
  `12px 24px`. Hover lightens to **`#045e58`** over 0.15s.
- **Tonal** — Login: sand at 25% (`rgba(198,178,159,0.25)`), `#003b39` label, the same pill. Hover
  doubles the sand to 50%.

### Focus is authored

Both draw `box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #045e58` under `:focus-visible` — a white gap and
a teal ring, readable on white and on teal alike.

### Radius

`--radius-nemo2 … nemo40`. Rendered: **16px** ×39 (cards), **24px** ×27 (pills), 32px ×13, 8px ×9,
40px ×8, fully round ×8, plus top-only `8px 8px 0 0` and `16px 16px 0 0`.

## 5. Layout Principles

- Spacing tokens `--spacing-nemo0 … nemo132` in pixels.
- Named z-index layers: tooltip 980, floating button 990, overlay-under-header 995, dialog 998,
  header 999, overlay 1000, modal 1001.
- Header heights are tokens per breakpoint (63 / 69 / 73px); section heights are computed from the
  viewport minus the header.

## 6. Depth & Elevation

Flat at rest — no drop shadows in the measured view. Separation comes from cream and sand fills and
from radius. The only shadow is the focus ring.

## 7. Do's and Don'ts

### Do
- Keep to the four rebrand families: teal, rhubarb, lagoon, sand.
- Use `#003b39` for the account-opening action and `#088177` for links.
- Use sand translucently (15–50%) for quiet buttons and chips.
- Give every focusable element the white-and-teal double ring.

### Don't
- Don't swap in Tailwind's default palette; N26's colours are its own.
- Don't use pure black for text; the ink is `#1b1b1b`.
- Don't square off buttons — they are pills.

## 8. Responsive Behavior

**Not measured** beyond the breakpoint header-height tokens. Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#088177` teal · `#045e58` teal strong · `#003b39` teal heavy · `#b55b64` rhubarb · `#1d6ea2`
lagoon · `#c6b29f` sand · `#faf8f5` cream · `#1b1b1b` ink · `#ffffff` white

### Example Component Prompts
- "A 48px pill: `#003b39`, white 16px/500, 24px radius; hover `#045e58`; focus
  `0 0 0 2px #fff, 0 0 0 4px #045e58`."
- "A tonal pill: sand `rgba(198,178,159,0.25)` with a `#003b39` label; hover 50% sand."

## 10. Voice & Tone

Not assessed as authored voice. The German page is functional ("Girokonto eröffnen"); the English
page leads with "Love your bank".

## 11. Brand Narrative

N26 set out to be a bank people might like, and its 2018 rebrand said so in colour: familiar hues —
a blue, a yellow, a green — each made slightly unusual. The site has kept that palette intact, named
every token in one consistent vocabulary, and put its care into details like a focus ring that works
on any background and fallback fonts tuned so text does not shift as the brand face arrives.

## 12. Principles

- **Familiar, then unusual.** Teal, wheat, rhubarb, petrol.
- **One vocabulary.** Every token is nemo-named.
- **Soft and round.** Cream grounds, pill buttons, a soft black.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Two components. Hover: the primary lightens to `#045e58`; the tonal button doubles its sand. Focus:
the double ring on both. The plan-selection buttons, tabs and FAQ accordions on the comparison page
were not measured. No disabled state was observed.

## 15. Motion & Easing

Buttons transition over `--default-transition-duration` 0.15s; 16 `--animate-*` shorthands (slideUp,
fadeIn, accordionSlideDown/Up, shimmer, scaleIn/Out, dropDownScaleIn/Out) and three `--ease-*`
curves are declared.

---

**Tier 1 sources:** https://n26.com/de-de (live homepage — 305 root custom properties read via `getComputedStyle`, Tailwind and build variables excluded; two components measured at rest, hover and focus after rejecting the consent banner; N26 and N26-Extended loaded, captured 2026-09-26); https://n26.com/zz-this-does-not-exist-omd-probe (nonsense-path control — a real HTTP 404, "Whoops, that page cannot be found", captured 2026-09-26); https://n26.com/en-eu/blog/n26-new-logo-new-colors (N26 blog, 2018-12-19 — "Introducing our new look": teal, golden wheat, rhubarb and petrol blue; Christian Hertlein's quote; a new logo and typeface, read 2026-09-26)

**Regional sources:** https://www.deutsche-startups.de/2018/03/20/5-knallharte-fakten-zum-fintech-wunderkind-n26/ (deutsche-startups.de, 2018-03-20 — "5 knallharte Fakten zum FinTech-Wunderkind N26")
