---
id: sumup
name: SumUp
country: UK
category: fintech
homepage: "https://www.sumup.com"
primary_color: "#FF61F2"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=sumup.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Circuit UI"
  url: "https://circuit.sumup.com/"
  type: system
  description: "SumUp's open-source design system for the web — \"the web implementation of the SumUp Circuit Design System\". sumup.com exposes 267 --cui-* tokens: background, foreground and border colours in tiers (normal, subtle, strong, highlight, accent, neutral, success, warning, danger, promo, brand), each with hovered, pressed and disabled steps, and one focus colour. The brand magenta #ff61f2 matches the value documented in the repository."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#ff61f2"
    brand-hovered: "#eb58df"
    brand-pressed: "#da4ece"
    primary: "#1e1c1c"
    strong-hovered: "#3f3a3a"
    strong-pressed: "#756c6c"
    foreground: "#1e1c1c"
    text-subtle: "#706464"
    accent-hovered: "#726767"
    accent-pressed: "#887a7a"
    canvas: "#fbfbf9"
    surface: "#f5f4ed"
    subtle-hovered: "#f0eee7"
    subtle-pressed: "#e8e6dc"
    border: "#d0cdc3"
    border-hovered: "#ded7cf"
    border-subtle: "#e3e2d6"
    success: "#3c7411"
    success-strong: "#1e862d"
    danger: "#b13606"
    danger-strong: "#d23f04"
    warning: "#a65a03"
    promo: "#a33e9a"
    promo-strong: "#b342a9"
  typography:
    family: { sans: "SumUp Narrow", display: "SumUp Black" }
    body: { size: 17, use: "SumUp Narrow; navigation and links at 375, buttons at 550" }
  rounded: { xs: 2, sm: 4, md: 12, lg: 16, xl: 24 }
  components:
    button-primary: { type: "button", bg: "#1e1c1c", fg: "#fbfbf9", radius: 12, height: "68px", padding: "11px 23px", font: "17px / 550", hover: "#3f3a3a", pressed: "#756c6c", focus: "ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c", use: "Zum Warenkorb hinzufügen on a card-terminal page — --cui-bg-strong, lightening to --cui-bg-strong-hovered and -pressed. Focus is Circuit UI's one ring: 2px off-white inside 4px near-black." }
    button-secondary: { type: "button", bg: "#fbfbf9", fg: "#1e1c1c", border: "#d0cdc3", radius: 12, height: "48px", padding: "11px 23px", font: "17px / 550", hover: "#f0eee7, border #ded7cf", pressed: "#e8e6dc, border #cac4be", focus: "ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c", use: "Mehr erfahren — the outlined twin on --cui-bg-normal with --cui-border-normal; hover and press warm the fill and border." }
    link-nav: { type: "button", bg: "transparent", fg: "#1e1c1c", radius: 4, height: "64px", font: "17px / 375", hover: "fg #726767", pressed: "fg #887a7a", focus: "ring 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c", use: "Top navigation (Preise). Hover and press fade the label to --cui-fg-accent-hovered and -pressed; inline product links share the recipe." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.sumup.com/de-de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.sumup.com/de-de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.sumup.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: product-page, kind: product-surface, url: "https://www.sumup.com/de-de/kartenterminals/", captured: "2026-09-26" }
    - { id: circuit-ui-repo, kind: official-doc, url: "https://github.com/sumup-oss/circuit-ui", captured: "2026-09-26" }
    - { id: about-us, kind: official-doc, url: "https://www.sumup.com/en-gb/about-us/", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.accent-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.accent-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.border-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.danger-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.promo: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.promo-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.strong-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.strong-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.subtle-hovered: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.subtle-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success-strong: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-subtle: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
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
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
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
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xs: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.display: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of SumUp

## 1. Visual Theme & Atmosphere

SumUp makes card readers and payment tools for small businesses. By its own account it "started in
2012 with the belief that anyone should be able to build a successful business", and it has since
grown from a card reader into point-of-sale systems, a business account and consumer payments. It is
headquartered in London; German press calls it the "deutsch-britische" payments company.

Its web presence is built on **Circuit UI**, SumUp's open-source design system — in the repository's
words "the web implementation of the SumUp Circuit Design System". The look is calm and warm rather
than techy: an off-white page **`#fbfbf9`** instead of white, a warm near-black **`#1e1c1c`** for text
and primary buttons, warm greys, and — used sparingly — the SumUp magenta **`#ff61f2`**. Type is SumUp
Narrow, a condensed sans, with SumUp Black for headlines.

What makes it worth reading:

- **Every colour has its states.** Circuit UI names each background, foreground and border colour
  with `-hovered`, `-pressed` and `-disabled` steps — `--cui-bg-strong`, `--cui-bg-strong-hovered`,
  `--cui-bg-strong-pressed` — and the live buttons use exactly those.
- **The primary action is black, not the brand colour.** The magenta is an accent; the buttons that
  sell are near-black.
- **One focus ring for everything**: 2px of off-white inside 4px of near-black, drawn as a
  box-shadow, identical on buttons and links.

### Primary tasks
- Choose and buy a card terminal; compare prices.
- Learn about the business account and point-of-sale tools.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `www.sumup.com/de-de/` and a card-terminal page: 274 root custom
properties — **267 `--cui-*`**, five layout variables (header and side-panel sizes) and two empty
`--lightningcss-dark` / `-light` build markers.

### Brand magenta

- **Brand** (`#ff61f2`) — `--cui-bg-brand`, `--cui-fg-brand`, `--cui-border-brand`, matching the value
  in Circuit UI's `packages/design-tokens/themes/light.ts`. **Brand Hovered** (`#eb58df`) · **Brand
  Pressed** (`#da4ece`); disabled `rgba(255,97,242,0.2)`. Not among the page's most-painted
  backgrounds — an accent, not a surface.

### Strong — the action colour

- **Primary** (`#1e1c1c`) — `--cui-bg-strong`, the primary button fill; also `--cui-fg-normal` and
  `--cui-border-focus`.
- **Strong Hovered** (`#3f3a3a`) · **Strong Pressed** (`#756c6c`).

### Ink and warm neutrals

- **Foreground** (`#1e1c1c`) — `--cui-fg-normal`. 1,350 text elements, and most `<p>`.
- **Text Subtle** (`#706464`) — `--cui-fg-subtle`, secondary copy (97 elements on the home page,
  300 on the product page).
- **Accent Hovered** (`#726767`) · **Accent Pressed** (`#887a7a`) — the link and navigation states.
- **Canvas** (`#fbfbf9`) — `--cui-bg-normal`, "SumUp off-white", the page itself (44 elements) ·
  **Surface** (`#f5f4ed`) — `--cui-bg-subtle` · **Subtle Hovered** (`#f0eee7`) · **Subtle Pressed**
  (`#e8e6dc`).
- **Border** (`#d0cdc3`) — `--cui-border-normal` · **Border Hovered** (`#ded7cf`) · **Border Subtle**
  (`#e3e2d6`).

### Status and promo

**Success** `#3c7411` (strong **`#1e862d`**) · **Danger** `#b13606` (strong **`#d23f04`**) ·
**Warning** `#a65a03` · **Promo** `#a33e9a` (strong **`#b342a9`**).

## 3. Typography Rules

### Font family

**SumUp Narrow** (300–700) for body, navigation and buttons, and **SumUp Black** (700) for headlines —
both loaded (`document.fonts`), self-hosted at `static.sumup.com/fonts/sumup/` and preloaded on every
page. Metric-matched fallback faces (`SumUp Narrow fallback`) are declared so the layout holds while
the fonts load.

### Scale

Text is set at 17px; navigation and links at weight 375, buttons at 550 — the variable face allows
weights between the usual steps.

## 4. Component Stylings

Three components (plus inline links sharing the navigation recipe), measured on a card-terminal page,
every state on its own page load, focus read under a real Tab key.

- **Primary** — Zum Warenkorb hinzufügen: `#1e1c1c`, off-white 17px/550, **12px** radius, 68px,
  `11px 23px`. Hover **`#3f3a3a`**, pressed **`#756c6c`**; the label also softens to 90% and 80%.
- **Secondary** — Mehr erfahren: `#fbfbf9` with a `#d0cdc3` border and `#1e1c1c` label, 48px. Hover
  **`#f0eee7`** with border **`#ded7cf`**; pressed `#e8e6dc` with `#cac4be`.
- **Navigation and links** — `#1e1c1c` 17px/375. Hover **`#726767`**, pressed **`#887a7a`**.

### Focus is authored

`box-shadow: 0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c` on every control — a halo of the page colour and a
near-black ring (`--cui-border-focus`). The outline stays `none`.

### Radius

12px on buttons; 4px ×166 (small elements), 2px ×44, 16px (cards, dominant on product pages), round
avatars and icons, and an asymmetric `24px 24px 24px 0` speech-bubble corner.

## 5. Layout Principles

- `--header-bar-height` 64px, `--side-panel-width` 400px.
- Warm off-white and slightly darker warm grey (`#f5f4ed`) alternate as section grounds; near-black
  sections reverse the text to off-white.

## 6. Depth & Elevation

Two repeating shadows: `rgba(0,0,0,0.1) 0 10px 10px` and `rgba(0,0,0,0.2) 0 4px 8px`, plus a layered
`#e3e2d6` shadow that draws a hairline border with a slight lift on tiles.

## 7. Do's and Don'ts

### Do
- Put primary actions in near-black `#1e1c1c` and keep the magenta `#ff61f2` for accents.
- Use each colour's own `-hovered` and `-pressed` token for states.
- Set pages on off-white `#fbfbf9`, not pure white.
- Use the one focus ring everywhere.

### Don't
- Don't fill large surfaces with the magenta.
- Don't use cold greys; SumUp's neutrals are warm.
- Don't invent state colours outside the tokens.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#ff61f2` brand magenta · `#1e1c1c` ink and primary · `#3f3a3a` / `#756c6c` primary states ·
`#fbfbf9` page · `#f5f4ed` surface · `#d0cdc3` border · `#706464` subtle text · `#3c7411` success ·
`#b13606` danger

### Example Component Prompts
- "A 48px button: `#1e1c1c`, `#fbfbf9` 17px/550 SumUp Narrow, 12px radius; hover `#3f3a3a`; focus
  `0 0 0 2px #fbfbf9, 0 0 0 4px #1e1c1c`."
- "An outlined button: `#fbfbf9`, `1px solid #d0cdc3`, `#1e1c1c` label; hover `#f0eee7`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

SumUp sells to people running small shops, cafés and stalls, and its web design talks to them in a
warm, plain register — off-white paper, warm charcoal, a condensed sans that fits a lot on a screen —
with one flash of magenta for recognition. Circuit UI makes that consistency a system: every colour
arrives with its own hover, press and disabled steps, and one focus ring covers every control.

## 12. Principles

- **Warm, not techy.** Off-white and warm greys.
- **Black to act, magenta to recognise.**
- **States are tokens.** Hover and press come from the system, never improvised.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Three components. Hover and press step along each colour's Circuit UI state tokens; focus is the
shared double ring. Disabled tokens exist (e.g. `--cui-bg-brand-disabled`) but no disabled control was
observed.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.sumup.com/de-de/ (live homepage — 274 root custom properties, 267 --cui-*, read via `getComputedStyle`; SumUp Narrow and SumUp Black loaded, captured 2026-09-26); https://www.sumup.com/de-de/kartenterminals/ (card-terminal page — three components measured at rest, hover, pressed and focus, captured 2026-09-26); https://www.sumup.com/zz-this-does-not-exist (nonsense-path control, captured 2026-09-26); https://github.com/sumup-oss/circuit-ui (Circuit UI repository — "SumUp's design system for the web"; the brand token #ff61f2 in themes/light.ts matches the live value; its nonsense-path control returns 404, read 2026-09-26); https://www.sumup.com/en-gb/about-us/ ("SumUp started in 2012…", read 2026-09-26)

**Regional sources:** https://www.handelsblatt.com/finanzen/banken-versicherungen/banken/sumup-dieses-fintech-ist-jetzt-auf-augenhoehe-mit-deutschlands-wertvollstem-finanz-start-up/28448048.html (Handelsblatt — "Fintech Sumup ist so viel wert wie N26"); https://sifted.eu/articles/sumup-potential-london-ipo (Sifted — "SumUp taps top banks for potential London IPO")
