---
id: otto
name: OTTO
country: DE
category: ecommerce
homepage: "https://www.otto.de"
primary_color: "#EB001F"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=otto.de&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "OTTO Design System (OTTO Components)"
  url: "https://designsystem.otto.de"
  type: system
  description: "OTTO's public design system, documented on zeroheight at designsystem.otto.de; its predecessor docs introduce it as 'Design System powered by OTTO Components'. otto.de serves about 630 --oc-* tokens in base, semantic and component layers, plus 92 --ofc-* tokens for commerce details such as energy labels, product colour swatches, the wishlist heart and price display. The brand red #eb001f marks the logo and brand text, sale and primary fills are #dc001d, interactive text is blue #2366cb, and body ink is #212121. Type is OTTO Sans, from the 2022 rebrand."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand: "#eb001f"
    primary: "#dc001d"
    foreground: "#212121"
    interactive: "#2366cb"
    interactive-hover: "#1c50a0"
    interactive-pressed: "#143b75"
    text-secondary: "#6d6d6d"
    disabled-text: "#949494"
    frame: "#f0f0f0"
    disabled-background: "#e5e5e5"
    disabled-border: "#cccccc"
    canvas: "#ffffff"
    hint: "#dcf2ff"
    success: "#227642"
    warning: "#ae4518"
    error: "#b30023"
    sustainable: "#50734d"
  typography:
    family: { sans: "OTTO Sans" }
    body: { size: 16, weight: 400, use: "the header search field" }
    small: { size: 14, weight: 400, use: "product tiles" }
  rounded: { none: 0, sm: 4, md: 8, lg: 12, xl: 16, xxl: 24 }
  components:
    link-product: { type: "button", bg: "transparent", fg: "#2366cb", radius: 0, font: "14px / 400", hover: "fg #1c50a0", pressed: "fg #143b75", use: "A product tile link on a search results page — the interactive blue darkens a step on hover and another on press." }
    input-search: { type: "input", bg: "transparent", fg: "#212121", radius: 0, height: "48px", padding: "1px 2px 1px 16px", font: "16px / 400", hover: "transparent", focus: "transparent", use: "The header search field (Wonach suchst du?). None of its measured values change on hover, press or focus." }
    link-nav: { type: "button", bg: "transparent", fg: "#212121", radius: 0, height: "40px", hover: "transparent", use: "Mein Konto in the header. Hover changes nothing." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.otto.de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.otto.de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://designsystem.otto.de/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: search-page, kind: product-surface, url: "https://www.otto.de/suche/sofa/", captured: "2026-09-26" }
    - { id: ds-docs, kind: official-doc, url: "https://designsystem.otto.de/", captured: "2026-09-26" }
    - { id: ds-legacy, kind: official-doc, url: "https://www.otto.de/design-system/getting-started", captured: "2026-09-26" }
    - { id: history, kind: official-doc, url: "https://www.ottogroup.com/en/ueber-uns/historie-und-gruender.php", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.brand: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.disabled-background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.disabled-border: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.disabled-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.frame: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.hint: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.interactive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.interactive-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.interactive-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.sustainable: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-secondary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.components.input-search.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.input-search.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-nav.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-product.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.md: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.none: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.xxl: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.body.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.small.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of OTTO

## 1. Visual Theme & Atmosphere

OTTO is a German online shop and the retail brand of the Hamburg-based Otto Group.
Its story starts on 17 August 1949, when the 40-year-old Werner Otto founded "Werner Otto
Versandhandel", a mail-order company with three employees, in barracks in Hamburg-Schnelsen. The
first catalogue followed in 1950. In 1960 the business moved to Hamburg-Bramfeld, where the group is
still based.

In 2022 OTTO relaunched its corporate design with the agencies Mutabor and C/O Setzkorn Kemper. Mutabor describes a new house typeface, a versatile colour spectrum, clear
layouts and expressive imagery. With type designer Henning Skibbe they made **OTTO Play**, a campaign face whose
letters each carry one of four brand tonalities, swapped in automatically through OpenType
contextual alternates. It sits alongside **OTTO Sans**, the typeface the shop renders in.

The shop is white and calm, with dark **`#212121`** text, blue **`#2366cb`** for interactive text,
and red — **`#eb001f`** for the brand, **`#dc001d`** for sale and primary fills.

What makes it worth reading:

- **A public, layered system.** OTTO Components tokens run base → semantic → component
  (`--oc-base-color-*`, `--oc-semantic-color-text-interactive`, `--oc-component-button-*`).
- **Commerce as its own layer.** 92 `--ofc-*` tokens cover what a shop needs and a generic system
  doesn't: EU energy labels, product colour swatches, the wishlist heart, price information.
- **Two reds.** Brand red and sale red are separate tokens, a shade apart.

### Primary tasks
- Search and browse categories; open a product.
- Sign in; manage the wishlist, basket and orders.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `otto.de`: 729 root custom properties — about 630 `--oc-*`, 92
`--ofc-*`, and small `--font-*`, `--icon-*`, `--label-*` groups. No framework namespace.

### Brand and ink

- **Brand** (`#eb001f`) — `--oc-semantic-color-brand`, `--oc-semantic-color-text-brand`.
- **Primary** (`#dc001d`) — `--oc-semantic-color-background-primary`, `--oc-semantic-color-sale-background`.
- **Foreground** (`#212121`) — `--oc-semantic-color-text-default`; 62 of 65 `<p>` elements.
- **Text secondary** (`#6d6d6d`) · **Disabled text** (`#949494`).
- **Canvas** (`#ffffff`) · **Frame** (`#f0f0f0`, `--oc-semantic-color-background-frame`).

### Interactive

- **Interactive** (`#2366cb`) — `--oc-semantic-color-text-interactive`; links and product tiles.
- **Interactive hover** (`#1c50a0`) and **pressed** (`#143b75`) — the tile link's states.
- **Hint** (`#dcf2ff`) — `--oc-semantic-color-background-hint`.

### Disabled

**Disabled background** `#e5e5e5` · **Disabled border** `#cccccc`.

### Status

**Success** `#227642` · **Warning** `#ae4518` · **Error** `#b30023` · **Sustainable** `#50734d`.
A range of soft, block and card backgrounds (yellow, mint, purple, beige, pink …) serves
editorial and campaign surfaces.

## 3. Typography Rules

### Font family

**OTTO Sans** — `OTTOSans, Arial, Helvetica, sans-serif` on body, headings and buttons, served by
OTTO. `document.fonts` loaded 400, 700 and 800. The campaign face OTTO Play did not load on the
pages measured.

### Scale

Measured: the search field 16px/400, product tiles 14px/400.

## 4. Component Stylings

Measured on otto.de and a search results page after declining cookies (OneTrust), focus read
under a real Tab key, and a hover counted only when `:hover` matched.

- **Product tile link** — `#2366cb`, 14px. Hover darkens it to **`#1c50a0`**, press to **`#143b75`**.
- **Search field** — transparent, `#212121`, 48px, `1px 2px 1px 16px`, 16px/400. Nothing measured
  changes on hover, press or focus.
- **Header link** — Mein Konto, `#212121`, 40px. Hover changes nothing.

### Radius

Semantic radii `0`, `.25rem`, `.5rem` (buttons), `.75rem`, `1rem`, `1.5rem`, and focus-ring radii that
are each 2px larger than the shape they surround.

## 5. Layout Principles

- White pages with grey `#f0f0f0` frames; product grids on search and category pages.

## 6. Depth & Elevation

One elevation: `--oc-semantic-shadow-above` = `drop-shadow(0 1px 2px #00000040) drop-shadow(0 4px 6px
#0000001a)`. `--oc-semantic-shadow-stacked` is empty — no shadow.

## 7. Do's and Don'ts

### Do
- Use `#212121` for text and `#2366cb` for interactive text; darken to `#1c50a0` and `#143b75`.
- Keep brand red `#eb001f` for the brand and `#dc001d` for sale and primary fills.
- Put commerce details (energy label, swatches, price) on their own token layer.

### Don't
- Don't swap the two reds.
- Don't use red for links; interactive text is blue.
- Don't use OTTO Play for interface text; it is a campaign face.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#eb001f` brand · `#dc001d` sale / primary · `#212121` ink · `#2366cb` interactive · `#1c50a0` /
`#143b75` hover / pressed · `#6d6d6d` secondary · `#f0f0f0` frame

### Example Component Prompts
- "A product tile with a `#2366cb` 14px OTTO Sans title that darkens to `#1c50a0` on hover."
- "A sale badge filled `#dc001d` with white text."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

From a Hamburg mail-order business with three employees to a national online shop, OTTO has
reinvented its channel more than once. The 2022 relaunch gave it its own type — a calm sans for
the shop and an expressive campaign face — and the design system behind otto.de is public, layered
and extended for commerce.

## 12. Principles

- **Blue acts, red sells.** Interactive text is blue; red is brand and sale.
- **Tokens in layers.** Base, semantic, component, then commerce.
- **Calm shop, loud campaigns.** OTTO Sans in the interface, OTTO Play on posters.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover: product links darken to `#1c50a0`; the search field and header link do not change. Press:
`#143b75` on product links. Focus on the search field changes nothing. The product-page basket
button could not be reached (product pages returned HTTP 400 to automation).

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.otto.de/ (live homepage — 729 root custom properties read via `getComputedStyle`, OTTO Sans loaded, search field and header link measured, captured 2026-09-26); https://www.otto.de/suche/sofa/ (search results — product tile link measured at rest, hover and press, captured 2026-09-26); https://designsystem.otto.de/ (OTTO Design System on zeroheight — nonsense path returns 404, read 2026-09-26); https://www.otto.de/design-system/getting-started (legacy docs — "Design System powered by OTTO Components", rendered; nonsense path renders "404 - OTTO Design System", read 2026-09-26); https://www.ottogroup.com/en/ueber-uns/historie-und-gruender.php (Otto Group history — 17 August 1949, Werner Otto, Hamburg-Schnelsen, Bramfeld 1960, read 2026-09-26); https://www.mutabor.de/work/otto (Mutabor case study — 2022 corporate design relaunch, OTTO Play, read 2026-09-26); https://page-online.de/kreation/clevere-open-type-hausschrift-fuer-otto/ (PAGE, 15 Feb 2022 — OTTO Play with Henning Skibbe, OTTO Sans, read 2026-09-26)
