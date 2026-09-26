---
---
id: gousto
name: Gousto
country: UK
category: ecommerce
homepage: "https://www.gousto.co.uk/"
primary_color: "#615cff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=gousto.co.uk&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Gousto web tokens"
  url: "https://www.gousto.co.uk/"
  type: system
  description: "No published design-system name or documentation exists on gousto.co.uk (checked with a nonsense-path control). The homepage exposes 212 first-party custom properties on :root beyond the 31 --cc-* cookie-consent vars: a fruit/veg-named colour palette, four parallel type-scale namespaces (--fontStyle-*, --font-Static*, --fontSize-*, --Font-Scale-*), three parallel grey ramps, and a --Gousto-* namespace for component-level button/focus tokens."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    primary: "#615cff"
    primary-highlight: "#412dee"
    primary-surface: "#eae9ff"
    foreground: "#516272"
    text-strong: "#373a3c"
    text-black: "#000000"
    surface: "#f4f7fa"
    surface-dark: "#333d47"
    surface-darkest: "#11161b"
    border: "#ced4d9"
    canvas: "#ffffff"
    red: "#ff0032"
    green: "#01a92b"
    grey: "#7d7e7f"
    link-blue: "#0275d8"
  typography:
    family: { sans: "Axiforma" }
    body: { size: 18, use: "--fontStyle-BodyL (18px/27px), AxiformaBook 400" }
    button: { size: 18, use: "primary CTA label, AxiformaBook 400" }
    nav: { size: 14, use: "top-nav links Recipe boxes / Box prices, Axiforma 700" }
    login: { size: 13, use: "Login ghost button, AxiformaBook 400" }
  rounded: { sm: 3, lg: 8, pill: 64 }
  components:
    button-primary: { type: "button", bg: "#615cff", fg: "#ffffff", radius: 8, height: "48px", padding: "10px 24px", font: "18px / 400", hover: "#412dee", pressed: "shadow 0 0 0 3px #412dee", focus: "ring inset 0 0 0 1px #ffffff, outline 2px solid #412dee", use: "\"Get started\" hero CTA. Renders at 8px radius though --Gousto-button-border-radius declares 3px. Hover and pressed both deepen to Secondary-600 #412dee; focus adds a white inset ring plus a 2px solid #412dee outline." }
    link-nav: { type: "button", bg: "transparent", fg: "#ffffff", radius: 3, height: "20px", font: "14px / 700", hover: "#ffffff", pressed: "shadow 0 0 0 3px #412dee", focus: "shadow 0 0 0 3px #412dee", use: "\"Recipe boxes\" and \"Box prices\" top-nav links on the red header. Hover shows no visible change (confirmed); pressed and focus both draw the same #412dee ring even on the red background." }
    link-nav-dropdown: { type: "button", fg: "#ffffff", height: "24px", font: "18px / 400", pressed: "ring inset 0 0 0 1px #ffffff, outline 2px solid #412dee", focus: "ring inset 0 0 0 1px #ffffff, outline 2px solid #412dee", use: "\"How it works\" dropdown trigger. Hover not measured. Pressed and focus match the primary CTA's ring treatment." }
    link-ghost: { type: "button", bg: "transparent", fg: "#373a3c", radius: 0, height: "35px", font: "13px / 400", hover: "transparent", pressed: "transparent", use: "\"Login\" top-right ghost/text link. No hover or pressed change measured. Its focus is the browser default outline (auto), not a brand ring — the only control on the page without one." }
    card-link: { type: "button", fg: "#615cff", border: "top/left/right #615cff, bottom #c0c5c9 (asymmetric)", height: "402px", hover: "fg #3e3ac2", pressed: "fg #3e3ac2", use: "Recipe cards on /cookbook/recipes (e.g. \"Simply Perfect Beef Spag Bol\") — the whole card is one anchor. Hover and pressed both turn the label and border #3e3ac2 (--color-BlueBaseDarker). Focus draws the browser's default blue ring, not the purple ring used on nav/CTA controls." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.gousto.co.uk/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.gousto.co.uk/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.gousto.co.uk/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: cookbook, kind: product-surface, url: "https://www.gousto.co.uk/cookbook/recipes", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.green: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.grey: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.link-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-highlight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-dark: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface-darkest: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-black: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.card-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-ghost.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav-dropdown.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.button.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.login.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.login.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of Gousto

## 1. Visual Theme & Atmosphere

Gousto is a British recipe-box company: it delivers measured ingredients and recipe cards for
cooking at home, and publishes a public cookbook of its recipes. Its current identity dates from
2017, when a new logo — a lowercase, geometric wordmark with a circular monogram — replaced the old
one, as Brand New recorded that September. Today the homepage runs a "Meet the New Gousto" banner
over its hero.

What renders is a purple/indigo action colour, **`#615cff`**, deepening to **`#412dee`** on hover
and pressed states, over a body-copy ink of **`#516272`** and a dominant nav/UI ink of
**`#373a3c`**. Sections alternate white (**`#ffffff`**), a light grey **`#f4f7fa`**, and two dark
bands, **`#333d47`** and **`#11161b`**. A red ribbon (**`#ff0032`**) and a green accent
(**`#01a92b`**) appear as promotional and status colours.

### Primary tasks
- Browse recipe boxes and prices; get started signing up.
- Browse the public recipe cookbook (`/cookbook/recipes`).

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `www.gousto.co.uk`: 212 root custom properties beyond the 31
`--cc-*` cookie-consent vars, which belong to the third-party "vanilla-cookieconsent" library
(`orestbida/cookieconsent`) and are excluded. Everything else is first-party, though structurally
messy: four parallel type-scale namespaces and three parallel grey ramps coexist.

### Action colour

- **Primary** (`#615cff`) — `--Secondary-400`, the resting fill of the primary CTA and every recipe
  card's link colour. **Primary Highlight** (`#412dee`) — `--Secondary-600` and
  `--Gousto-focused-border`, the hover/pressed/focus colour used everywhere: buttons, nav-link
  rings, the card border. **Primary Surface** (`#eae9ff`) — `--Secondary-50`.

### Text and surfaces

- **Foreground** (`#516272`) — the most frequent colour inside `<p>` elements (`rgb(81, 98, 114)`),
  matching `--ColdGrey-600`. This is the body-copy ink, distinct from the nav/UI ink.
- **Text Strong** (`#373a3c`) — the dominant text colour overall (694 occurrences), used in nav and
  headings. **Text Black** (`#000000`) — 368 occurrences, mixed use.
- **Surface** (`#f4f7fa`) — a light grey section background (21 occurrences). **Surface Dark**
  (`#333d47`, 9 occurrences) and **Surface Darkest** (`#11161b`, 7 occurrences) are the dark
  footer/section bands. **Border** (`#ced4d9`) appears on card edges. **Canvas** (`#ffffff`) is the
  base background (71 occurrences) and the header background.
- **Grey** (`#7d7e7f`) — `--NeutralGrey_500`, whose declared value is malformed, a literal quoted
  string `"\"#7D7E7F\""` baked into the custom property — a pipeline bug, recorded as found.

### Status and a stray

- **Red** (`#ff0032`) — Pomegranate, the "50% OFF" ribbon colour (also seen as `#ff3355`).
  **Green** (`#01a92b`) is a status/promo green (also seen as `#006700`/`#008610`). A success-tint
  background `#e6f7e7` appears behind confirmation-style content.
- **Link Blue** (`#0275d8`) — 53 occurrences, a Bootstrap-blue-looking link colour that reads as a
  stray default rather than an intentional brand colour; flagged, not promoted further.

## 3. Typography Rules

### Font family

**Axiforma** is the confirmed rendered brand face — `document.fonts` reports it `loaded` in three
weights actually used: Book (400), Bold (700), and ExtraBold (on `<h1>`), plus variable-font
instances with continuous weight ranges (`AxiformaBook 401 1000`, `AxiformaBold 1 1000`,
`AxiformaExtraBold 1 1000`), meaning Axiforma is served as a variable font alongside static Book and
Bold files. It is self-hosted — no Google Fonts or Adobe Fonts network call appears in the font
fallback chain, which falls back straight to system fonts — but this serving mechanism was not
independently confirmed via a network trace in this pass, only that `document.fonts` reports it
loaded.

Declared stacks: body = `AxiformaBook, Helvetica, sans-serif`; h1 = `AxiformaExtraBold, Helvetica,
sans-serif`; button = `AxiformaBook, Helvetica, sans-serif`.

### Scale, and the mess

At least four parallel size namespaces coexist: `--fontStyle-*` (composite tokens baking in size,
line-height *and* family, e.g. `--fontStyle-BodyL: 18px/27px AxiformaBook,Helvetica,sans-serif,
sans-serif` — note the doubled `sans-serif`, a token-pipeline artefact repeated across several of
these), `--font-Static*` (pure size/line-height pairs, e.g. `--font-StaticLarge: 18px/27px`),
`--fontSize-*` (bare px sizes, 11–48), and `--Font-Scale-*` (a second bare-px ramp, 16/18/20/24/28,
overlapping the others in value space). `--Line-Height-*` supplies a third naming convention for
line-heights (20/24/28/36 px) alongside `--lineHeight-normal: 1.4`.

Confirmed rendered sizes: the primary CTA label is 18px at weight 400; the "Recipe boxes"/"Box
prices" nav links are 14px at weight 700; the "How it works" dropdown trigger is 18px at weight 400;
the "Login" ghost link is 13px at weight 400.

## 4. Component Stylings

Six controls were checked; five were measurable on the logged-out public surface. A search input
was **not found** — the only `<input>` elements reachable while logged out (homepage and
`/cookbook/recipes`) are a hidden coupon-toggle radio and four filter checkboxes; no visible
text/search field exists without logging in.

- **Primary CTA — "Get started" (hero):** rest `#615cff` fill, `#ffffff` text, 8px radius, 48px
  height, `10px 24px` padding, 18px/400. **Renders at 8px though `--Gousto-button-border-radius`
  declares 3px** — the token doesn't match the live control. Hover and pressed both deepen the fill
  to `#412dee`; pressed adds a `0 0 0 3px #412dee` shadow; focus adds a white inset ring
  (`0 0 0 1px #ffffff`) plus a `2px solid #412dee` outline.
- **Nav links — "Recipe boxes" and "Box prices"** (top nav, red header): transparent background,
  `#ffffff` text, 3px radius, 20px height, 14px/700. **Hover shows no visible change**, confirmed.
  Pressed and focus both draw a `0 0 0 3px #412dee` shadow ring, even against the red header
  background.
- **"How it works" dropdown trigger:** `#ffffff` text, 24px height, 18px/400. Hover not measured.
  Pressed and focus both add a white inset ring (`0 0 0 1px #ffffff`) plus a `2px solid #412dee`
  outline — the same treatment as the primary CTA's focus.
- **"Login" (ghost/text button, top right):** transparent background, `#373a3c` text, 35px height,
  0px radius, 13px/400. No hover or pressed change measured. Its focus ring is the browser's default
  (`outline-style: auto`) — the only control here without an authored ring.
- **Recipe card link** (`/cookbook/recipes`): the whole card is one anchor, 402px tall. Rest: `#615cff`
  text, an asymmetric border — top/left/right `#615cff`, bottom `#c0c5c9` — reading like a
  card-shadow-as-border trick. Hover and pressed both turn the text and border `#3e3ac2`
  (`--color-BlueBaseDarker`). Focus draws the browser's default blue ring, inconsistent with the
  purple ring used on nav and CTA controls.

## 5. Layout Principles

- Two parallel spacing scales: mobile `--spacing-*` (`XXS` 5 … `XXXXXL` 100) and
  `--spacing-Desktop*`, which uses different px values below `XXL` and converges with the mobile
  scale from `XXL` up.
- Button padding: `--Gousto-button-padding` `8px 16px`; the rendered primary CTA instead uses
  `10px 24px`.
- Border widths were not enumerated as a dedicated scale beyond the component borders above.

## 6. Depth & Elevation

Mostly flat, with the ring itself doing the work of state feedback: `0 0 0 3px #412dee` (button and
nav-link pressed/focus), `0 0 0 1px #ffffff inset` (the focus inner ring on white-text buttons). A
soft `rgba(2,2,3,.28)` shadow belongs to the cookie-consent modal and is excluded as third-party.

## 7. Do's and Don'ts

### Do
- Use `#615cff` for the primary action and `#412dee` for hover/pressed/focus.
- Set body copy in `#516272`, not the nav ink `#373a3c`.
- Put a `0 0 0 3px #412dee` ring (or the white-inset + `#412dee` outline pair) on focusable controls
  that already carry one.

### Don't
- Don't assume the CTA's 8px radius matches the declared 3px button-radius token — they disagree.
- Don't copy `--NeutralGrey_500`'s malformed quoted value; use `#7d7e7f`.
- Don't call the design system "Zest" — that name could not be verified for Gousto and is not used
  here.
- Don't treat `#0275d8` as a brand colour; it reads as a stray default link colour.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#615cff` primary · `#412dee` highlight/hover · `#eae9ff` primary surface · `#516272` body text ·
`#373a3c` UI text · `#000000` black · `#f4f7fa` light surface · `#333d47` / `#11161b` dark sections ·
`#ced4d9` border · `#ffffff` canvas · `#ff0032` red ribbon · `#01a92b` green · `#7d7e7f` grey ·
`#0275d8` stray link blue

### Example Component Prompts
- "A 48px button: `#615cff` fill, white 18px/400 Axiforma, 8px radius; hover and pressed
  `#412dee`; focus adds a white inset ring plus a 2px `#412dee` outline."
- "A recipe-card link: `#615cff` text and border, turning `#3e3ac2` on hover, 402px tall."

## 10. Voice & Tone

Not assessed as authored voice. The only first-party line captured is the hero banner "Meet the New
Gousto," undated and unexplained on the page itself.

## 11. Brand Narrative

Regional UK trade press corroborates a 2017 rebrand: Fresh Produce Journal/Fruitnet ("Gousto rebrand
targets families," 13 Sep 2017) describes a new logo, "design system" and photography style aimed at
families, a TV campaign via The Sharp Agency (production by The Gate, director Cosmo Wallace), with
CEO Timo Boldt quoted on "good food on the table." underconsideration.com's Brand New ("New Logo for
Gousto," 27 Sep 2017) corroborates the same rebrand date and describes it with tags including
circle, geometric, lowercase and monogram, though its full analysis is paywalled and was not read.

Grocery Gazette ("How Gousto used AI guardrails to speed up Ireland website development," 24 Sep
2026) describes active 2026 engineering and design work: an engineer-built, Claude-based "AI
harness" for constrained code generation, a pricing-page redesign, and a homepage overhaul across
mobile/tablet/desktop via Figma and feature flags, with product designer Dec Roberts quoted; it also
confirms roughly 15 years of UK operation before Gousto's Ireland launch in February 2025.

## 12. Principles

- **One colour for doing.** `#615cff`/`#412dee` carries every primary action and every interactive
  ring, on light and dark backgrounds alike.
- **Body ink is its own colour.** `#516272` for paragraph text is distinct from the `#373a3c` used
  in navigation and headings.
- **The ring travels, the radius doesn't agree with itself.** The `#412dee` focus/pressed ring is
  applied consistently across button, nav and dropdown controls, even though the CTA's 8px radius
  contradicts its own declared 3px token.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Five controls measured. Hover: unchanged on the two nav links, `#412dee` fill on the primary CTA, no
data on the dropdown trigger or Login, `#3e3ac2` on the recipe-card link. Pressed: a `#412dee` ring
on CTA and nav links, `#3e3ac2` on the card link. Focus: an authored `#412dee`-based ring on CTA, nav
links and the dropdown trigger; the browser's own default ring on Login and the recipe card, with no
brand token assigned to either.

## 15. Motion & Easing

**Not measured.** No `--transition`/`--duration` custom properties were found in the root
enumeration.

---

**Tier 1 sources:** https://www.gousto.co.uk/ (live homepage, headless-refused, headed Chrome;
en-GB, 1440×1000; 212 first-party `:root` custom properties beyond `--cc-*`; consent banner
rejected via "Reject all non-essential" before any measurement; captured 2026-09-26);
https://www.gousto.co.uk/cookbook/recipes (public recipe browse page, used to measure the card-link
component and to confirm no search input exists logged out, captured 2026-09-26);
https://www.gousto.co.uk/zz-this-does-not-exist (nonsense-path control — HTTP 200, byte-identical
785-character "Oh crumbs!" 404 body to `/about-us` and `/our-story`, captured 2026-09-26), compared
against https://www.gousto.co.uk/jobs (a real, distinct 3,862-character page, same date).

**Regional sources:** https://www.underconsideration.com/brandnew/archives/new_logo_for_gousto.php (Brand New — "New Logo for Gousto", spotted 2017-09-27; circle, geometric, lowercase, monogram)
