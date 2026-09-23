---
id: ocado
name: Ocado
country: UK
category: ecommerce
homepage: "https://www.ocado.com"
primary_color: "#4D216D"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ocado.com&sz=128"
verified: "2026-09-23"
added: "2026-09-23"
omd: "0.1"
ds:
  name: "Ocado web tokens (salt)"
  url: "https://www.ocado.com/"
  type: system
  description: "316 first-party custom properties on the grocery storefront: an --intent-* layer of ten-step ramps per role (primary purple, action yellow, promotion red, secondary grey, success, warning, error) with a -contrast text colour for every step, and 156 component tokens under --salt-* (button, links bar, text, elevation, radius, spacing). The prefix is shared with J.P. Morgan's open-source Salt design system, but none of the names are — Ocado's is its own."
tokens:
  source: live-extract
  extracted: "2026-09-23"
  colors:
    primary: "#4d216d"
    primary-hover: "#240b3d"
    primary-ink: "#2e004d"
    primary-surface: "#e9e4ed"
    primary-surface-hover: "#c9bcd3"
    primary-muted: "#a690b6"
    action: "#f1c500"
    action-hover: "#e6a300"
    promotion: "#c51d25"
    promotion-text: "#a90016"
    foreground: "#2d333a"
    placeholder: "#4c5157"
    disabled: "#96999c"
    decoration-contrast: "#6c7075"
    decoration: "#e6ecf0"
    background: "#f3f5f8"
    canvas: "#ffffff"
    success: "#116623"
    warning: "#bd5407"
    error: "#9e171c"
    error-text: "#a31800"
  typography:
    family: { sans: "Source Sans Pro" }
    s: { size: 12, use: "--salt-text-s-font-size (.857rem at the 14px root)" }
    m: { size: 14, use: "--salt-text-m-font-size, the 14px root size; buttons at 600" }
    l: { size: 16, use: "--salt-text-l-font-size" }
    display: { size: 20, use: "--salt-display-font-size (1.43rem)" }
  spacing: { s05: 2, s1: 4, s2: 8, s4: 16, s8: 32, s16: 64, s32: 128 }
  rounded: { default: 8, lg: 12, pill: 20 }
  components:
    button-secondary: { type: "button", bg: "#e9e4ed", fg: "#2e004d", radius: 8, height: "40px", padding: "0 8px", font: "14px / 600", hover: "#c9bcd3", pressed: "#c9bcd3", use: "Log in, and the search submit beside the product field — lavender with deep-purple text, darkening to --salt-button-secondary-hover-background-color. Focus is the browser's ring." }
    button-action: { type: "button", bg: "#f1c500", fg: "#2d333a", border: "#f1c500", radius: 8, height: "40px", padding: "0 8px", font: "14px / 600", hover: "#e6a300, border #e6a300", pressed: "#e6a300, border #e6a300", use: "Add on a product tile — the action yellow, the colour of putting something in the basket, darkening to --interaction-action." }
    button-primary: { type: "button", bg: "#4d216d", fg: "#ffffff", radius: 7, height: "42px", hover: "#240b3d", pressed: "#240b3d", use: "The purple primary button. Logged out on the home page it appears once — as the Live Chat launcher — darkening to --salt-button-primary-hover-background-color." }
    card-link: { type: "card", bg: "#ffffff", fg: "#2d333a", radius: 8, height: "92px", padding: "16px", font: "14px / 400", hover: "shadow rgba(0,0,0,0.08) 0 2px 12px", pressed: "shadow rgba(0,0,0,0.08) 0 2px 12px", use: "The Register card — white, flat at rest, lifting with --salt-elevation-shadow-1 on hover." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-23"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ocado.com/", inspected: "2026-09-23" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ocado.com/", captured: "2026-09-23" }
    - { id: control-404, kind: product-surface, url: "https://www.ocado.com/zz-this-does-not-exist", captured: "2026-09-23" }
    - { id: search-live, kind: product-surface, url: "https://www.ocado.com/search?entry=bread", captured: "2026-09-23" }
    - { id: group-history, kind: official-doc, url: "https://www.ocadogroup.com/about-us/our-history", captured: "2026-09-23" }
  conflicts: []
  claims:
    tokens.colors.action: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.action-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.background: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.decoration: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.decoration-contrast: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.disabled: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.error: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.error-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.placeholder: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-ink: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-muted: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-surface: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.primary-surface-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.promotion: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.promotion-text: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.success: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.colors.warning: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.components.button-action.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.border: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-action.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-primary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.button-secondary.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.components.card-link.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-23" }
    tokens.rounded.default: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.lg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s05: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s1: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s16: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s2: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s32: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s4: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.spacing.s8: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.display.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.l.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.l.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.m.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.m.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.s.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
    tokens.typography.s.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-23" }
---
# Design System Inspiration of Ocado

## 1. Visual Theme & Atmosphere

Ocado is the UK's online-only grocer. Its own history begins with the words "We were founded in
2000, and just one year later, pilot deliveries had begun" — a supermarket with no shops, built on
automated warehouses. For most of its life it sold Waitrose products; in 2019 Marks & Spencer paid
up to £750m for half of Ocado's retail business, forming Ocado Retail, and in 2020 ocado.com
switched from Waitrose to M&S products. The technology side, Ocado Group, now licenses its
warehouse platform to grocers abroad. This reference is the storefront, ocado.com.

The storefront is calm and practical. Most of the page is a pale blue-grey **`#e6ecf0`** — 157
elements, the fill of panels and product placeholders — around white cards, with a slate ink
**`#2d333a`**. The brand purple **`#4d216d`** is used sparingly; lavender **`#e9e4ed`** buttons with
deep-purple text **`#2e004d`** carry the everyday actions, and a warm yellow **`#f1c500`** means
one thing: add to basket. Promotions are red. Everything is set in Source Sans Pro and rounded at
8px.

What makes it worth reading:

- **Colour steps name their own text colour.** The base, 100, 200, 700 and 900 steps of each
  `--intent-*` ramp carry a `-contrast` twin —
  `--intent-action-700-contrast` `#2d333a`, `--intent-primary-700-contrast` `#ffffff` — so the
  system decides legibility, not the designer.
- **Colour is assigned by intent.** Primary, action, promotion, secondary, success, warning,
  error — each a ten-step ramp.
- **A namesake, not a borrowing.** The component tokens are `--salt-*`, the same prefix as J.P.
  Morgan's Salt design system, and share none of its names.

### Primary tasks
- Search for a product; add it to the basket.
- Log in or register; browse categories and recipes.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `www.ocado.com`. Every custom property traces to first-party
stylesheets on `ocado.com`; no third-party script injects any. 316 in all: `--salt-*` 156 · `--intent-*`
105 · `--z-*` 24 · `--typography-*` 7 · `--surface-*` 4 · `--interaction-*` 4 · a few singletons. The root font size is **14px**, so
Ocado's rem values convert at 14.

### Purple — the brand

- **Primary** (`#4d216d`) — `--intent-primary` and `--salt-button-primary-background-color`.
- **Primary Hover** (`#240b3d`) — `--salt-button-primary-hover-background-color`, also
  `--interaction-primary` and `--intent-primary-900`.
- **Primary Ink** (`#2e004d`) — `--typography-primary`, the text on lavender (38 elements).
- **Primary Surface** (`#e9e4ed`) — `--intent-primary-50` and the secondary button's fill (18
  elements).
- **Primary Surface Hover** (`#c9bcd3`) — `--intent-primary-100`, the secondary button's hover.
- **Primary Muted** (`#a690b6`) — `--intent-primary-200`, the links bar's hover underline.

### Yellow — action

- **Action** (`#f1c500`) — `--intent-action`, the Add button.
- **Action Hover** (`#e6a300`) — `--interaction-action` / `--intent-action-900`.

### Red — promotion

- **Promotion** (`#c51d25`) — `--intent-promotion`.
- **Promotion Text** (`#a90016`) — `--typography-promotion`, `--salt-text-promotion-color` and
  `--salt-link-promotion-color`.

### Ink and surface

- **Foreground** (`#2d333a`) — `--typography-default` and `--salt-text-color`. 997 elements; the
  page sets body copy in `div`s and `span`s rather than `<p>`.
- **Placeholder** (`#4c5157`) — `--typography-placeholder` · **Disabled** (`#96999c`) —
  `--typography-disabled`.
- **Decoration** (`#e6ecf0`) — `--decoration`, `--intent-secondary` and `--surface-sunken`; the
  most-painted background · **Decoration Contrast** (`#6c7075`).
- **Background** (`#f3f5f8`) — `--surface-background` · **Canvas** (`#ffffff`) — `--surface-base`
  and `--surface-raised`.

### Status

**Success** `#116623` · **Warning** `#bd5407` · **Error** `#9e171c` (`--intent-error`), with
**`#a31800`** for error text (`--typography-error`). Each is a ten-step ramp with contrast twins.

## 3. Typography Rules

### Font family

**Source Sans Pro** — one family for everything, 400 and 600 loaded (`document.fonts`), served from
Google Fonts. `--salt-text-font-family`, `--salt-display-font-family` and
`--salt-links-bar-font-family` all name it. It is an open Adobe typeface, recorded as what is served.

### Scale

At the 14px root: `--salt-text-s` 12px (line height 1.33) · `--salt-text-m` 14px (1.29) ·
`--salt-text-l` 16px (1.25) · `--salt-display` 20px (1.2). Buttons set 14px at 600.

## 4. Component Stylings

Four components, every state on its own page load, focus read before the mouse moved.

- **Secondary** — Log in and the search submit: `#e9e4ed`, `#2e004d` 14px/600, 8px, 40px. Hover
  **`#c9bcd3`**.
- **Action** — Add, on a product tile: `#f1c500`, `#2d333a` label, 8px, 40px. Hover **`#e6a300`**,
  border following.
- **Primary** — `#4d216d`, white, 7px, 42px. Hover **`#240b3d`**. Logged out on the home page, the
  only purple button is the Live Chat launcher; the purple is not a shopping call to action here.
- **Card** — Register: `#ffffff`, `#2d333a`, 8px, 92px, 16px padding. Hover adds
  `rgba(0,0,0,0.08) 0 2px 12px` — `--salt-elevation-shadow-1` — without changing colour.

So: lavender for everyday actions, yellow for the basket, purple for the brand, and elevation —
not colour — for cards.

### Focus is the browser's

Every control shows `outline: rgb(0, 95, 204) auto 1px` under `:focus-visible`. Each component sets
its own ink as a resting outline colour with `outline-style: none`, but none turns it on; the ring
that renders is Chrome's. No focus colour is recorded.

### Radius

`--salt-radius-default` 8px (0.571rem) — **8px** ×264, the standard for cards, buttons and fields;
`--salt-radius-1` 12px; `0 0 8px 8px` ×27 (bottom-rounded cards); 7px ×15; 20px ×3 (pills).

## 5. Layout Principles

- Spacing doubles: `--salt-spacing-05` 2 · `-1` 4 · `-2` 8 · `-4` 16 · `-8` 32 · `-16` 64 ·
  `-32` 128px. The token name is the number of 4px units.
- Borders are tokenised by width — `--salt-border-1` 1px, `--salt-border-2` 2px — and many controls
  carry a border in their own fill colour, so hover can recolour it.

## 6. Depth & Elevation

Three elevation tokens, all soft and mostly centred: `--salt-elevation-shadow-1`
`0 2px 12px rgb(0 0 0 / 8%)` · `-2` `0 0 14px rgb(0 0 0 / 12%)` · `-3` `0 0 16px rgb(0 0 0 / 12%)`.
Level 1 is the card hover. A couple of one-off shadows outside the scale appear once each.

## 7. Do's and Don'ts

### Do
- Use `#f1c500` only for adding to the basket.
- Use lavender `#e9e4ed` with `#2e004d` text for everyday secondary actions.
- Take text colours from the `-contrast` twin of the `--intent-*` step used as the background.
- Lift cards with `--salt-elevation-shadow-1` on hover instead of recolouring them.

### Don't
- Don't treat `--salt-*` as J.P. Morgan Salt — none of its names are Salt's.
- Don't spread the brand purple across surfaces; it is an accent.
- Don't rely on the browser ring as a brand focus style.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#4d216d` purple · `#240b3d` purple hover · `#2e004d` purple ink · `#e9e4ed` lavender ·
`#c9bcd3` lavender hover · `#f1c500` basket yellow · `#e6a300` yellow hover · `#c51d25` /
`#a90016` promotion · `#2d333a` ink · `#e6ecf0` decoration · `#f3f5f8` background · `#ffffff`
cards

### Example Component Prompts
- "An Add button: `#f1c500`, `#2d333a` 14px/600 Source Sans Pro, 8px radius, 40px; hover
  `#e6a300`."
- "A secondary button: `#e9e4ed`, `#2e004d` 14px/600, 8px radius; hover `#c9bcd3`."

## 10. Voice & Tone

Not assessed as authored voice. 5,667 characters on the measured surface.

## 11. Brand Narrative

Ocado sells groceries without a single shop, and the storefront behaves like a well-run warehouse:
grey-blue shelving, white product cards, a single colour for the one action that matters most —
yellow for the basket — and the brand purple held in reserve. Its partners have changed, from
Waitrose to M&S, and the company has split into a retailer and a technology licensor; the
storefront's system has stayed quietly consistent.

The token system is an engineer's: every colour organised by the job it does, its key background steps naming
their own legible text colour, spacing counted in 4px units that double. Its components carry
a name that happens to match a well-known open-source design system and nothing else of it.

## 12. Principles

- **One colour, one action.** Yellow adds to the basket.
- **Legibility is a token.** The key steps carry their contrast colour.
- **Lift, don't paint.** Cards rise on hover.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Four components, every state measured. Hover: secondary to `#c9bcd3`, action to `#e6a300`,
primary to `#240b3d`, cards gain a soft shadow. Focus is the browser's `auto` ring throughout.
Disabled tokens exist — `--salt-button-primary-disabled-background-color` `#e9e4ed` with
`#96999c` text — but no disabled control was observed.

## 15. Motion & Easing

Not measured. No motion token among the custom properties.

---

**Tier 1 sources:** https://www.ocado.com/ (live storefront — 316 custom properties read via `getComputedStyle`, all traced to first-party stylesheets; controls measured at rest, hover, pressed and focus; Source Sans Pro loaded, captured 2026-09-23); https://www.ocado.com/search?entry=bread (product results — the Add button, logged out, captured 2026-09-23); https://www.ocado.com/zz-this-does-not-exist (nonsense-path control — renders the same client-side "Page not found." as other unknown paths such as /design-system and /brand, so none of them is a page, captured 2026-09-23); https://www.ocadogroup.com/about-us/our-history (Ocado Group history — founded 2000, pilot deliveries a year later, ocado.com switching from Waitrose to M&S products in 2020, read 2026-09-23)

**Regional sources:** https://www.foodmanufacture.co.uk/Article/2019/02/27/M-S-and-Ocado-announce-joint-venture-in-750m-deal/ (Food Manufacture, 2019-02-27 — M&S and Ocado announce a joint venture in a £750m deal); https://www.thegrocer.co.uk/news/ocado-group-drops-battle-for-190m-from-mands/721794.article (The Grocer — Ocado Group drops its claim for £190m from M&S tied to the joint venture)
