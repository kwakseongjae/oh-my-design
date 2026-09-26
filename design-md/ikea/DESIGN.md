---
id: ikea
name: IKEA
country: NL
category: ecommerce
homepage: "https://www.ikea.com"
primary_color: "#0058A3"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=ikea.com&sz=128"
verified: "2026-09-26"
added: "2026-09-26"
omd: "0.1"
ds:
  name: "Skapa"
  url: "https://www.ikea.com/de/de/"
  type: system
  description: "IKEA's digital design system. Every Skapa component on ikea.com carries a versioned data-skapa attribute (button@19.0.24, search@11.0.24, card@19.1.15, price-module@11.1.8 …); its documentation host is behind sign-in. The site's --colour-* tokens name roles and states — interactive primary, secondary, emphasised, subtle and destructive, each with default, hover and pressed — and keep the brand blue #0058a3 and yellow #ffdb00 as static colours. The surface is near-monochrome: #484848 text, #111111 for primary actions and headings, blue for the emphasised role. Type is Noto IKEA."
tokens:
  source: live-extract
  extracted: "2026-09-26"
  colors:
    brand-blue: "#0058a3"
    brand-yellow: "#ffdb00"
    primary: "#111111"
    primary-hover: "#333333"
    emphasised-hover: "#004f93"
    emphasised-pressed: "#003e72"
    foreground: "#484848"
    text-3: "#767676"
    text-4: "#929292"
    secondary-bg: "#f5f5f5"
    secondary-hover: "#dfdfdf"
    secondary-pressed: "#cccccc"
    canvas: "#ffffff"
    family-blue: "#007cc1"
    offer-red: "#cc0008"
    negative: "#e00751"
    positive: "#0a8a00"
    caution: "#f26a2f"
  typography:
    family: { sans: "Noto IKEA" }
    nav: { size: 14, weight: 400, use: "header links" }
    input: { size: 16, weight: 400, use: "search field" }
  rounded: { sm: 4, pill: 64 }
  components:
    link-header: { type: "button", bg: "transparent", fg: "#484848", radius: 0, height: "46px", padding: "12px 16px", font: "14px / 400", hover: "fg #111111 + underline", pressed: "fg #111111 + underline", focus: "box-shadow 0 0 0 4px #ffffff + outline 2px solid #111111", use: "Produkte in the header — the grey text darkens to #111111 and underlines on hover; focus adds a white 4px ring inside a 2px #111111 outline." }
    input-search: { type: "input", bg: "transparent", fg: "#111111", radius: 0, height: "48px", padding: "0 0 0 48px", font: "16px / 400", hover: "transparent", focus: "transparent", use: "The header search field (search@11). The input itself shows no change on hover or focus; its frame belongs to the wrapping search component, which was not read." }
  components_harvested: true
verification_v2:
  schema: 2
  checked: "2026-09-26"
  surfaces:
    - { id: home, kind: product-surface, url: "https://www.ikea.com/de/de/", inspected: "2026-09-26" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.ikea.com/de/de/", captured: "2026-09-26" }
    - { id: control-404, kind: product-surface, url: "https://www.ikea.com/zz-this-does-not-exist", captured: "2026-09-26" }
    - { id: franchise, kind: official-doc, url: "https://www.ikea.com/global/en/our-business/how-we-work/the-ikea-franchise-system/", captured: "2026-09-26" }
    - { id: terms, kind: official-doc, url: "https://www.ikea.com/global/en/international-sales/terms-and-conditions/", captured: "2026-09-26" }
    - { id: inter-ikea, kind: official-doc, url: "https://www.inter.ikea.com/en", captured: "2026-09-26" }
  conflicts: []
  claims:
    tokens.colors.brand-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.brand-yellow: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.canvas: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.caution: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.emphasised-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.emphasised-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.family-blue: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.foreground: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.negative: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.offer-red: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.positive: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.primary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-bg: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-hover: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.secondary-pressed: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-3: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.colors.text-4: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
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
    tokens.components.link-header.bg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.fg: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.focus: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.font: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.height: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.hover: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.padding: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.pressed: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.radius: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.type: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.components.link-header.use: { surface_id: home, source_id: home-live, method: live-inspect, captured: "2026-09-26" }
    tokens.rounded.pill: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.rounded.sm: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.family.sans: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.input.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.input.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.input.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.size: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.use: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
    tokens.typography.nav.weight: { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-09-26" }
---
# Design System Inspiration of IKEA

## 1. Visual Theme & Atmosphere

IKEA sells home furnishings through a franchise system. In ikea.com's own words, "Inter IKEA
Systems B.V. is the owner of the IKEA Concept and worldwide IKEA franchisor"; its registered office is
Olof Palmestraat 1, Delft, the Netherlands, and its name is in the copyright line of every ikea.com
page. Retailers such as the German operator of the site measured here, IKEA Deutschland GmbH & Co.
KG, run the stores under franchise. The Inter IKEA Group also includes IKEA of Sweden AB and IKEA
Marketing and Communications AB.

The German storefront is near-monochrome and matter-of-fact: white ground, grey **`#484848`** text,
near-black **`#111111`** for headings and primary actions, and the famous blue **`#0058a3`** and
yellow **`#ffdb00`** kept for the brand and for the "emphasised" role. Promotions add a red
**`#cc0008`**. Type is **Noto IKEA**.

What makes it worth reading:

- **A versioned system in the markup.** Skapa components announce themselves:
  `data-skapa="button@19.0.24"`, `search@11.0.24`, `card@19.1.15`, `price-module@11.1.8`,
  `commercial-message@9.1.0` — more than twenty component types on one page.
- **Roles with all their states.** `--colour-interactive-primary-bg-default` / `-hover` / `-pressed`,
  and the same for secondary, emphasised, subtle and destructive.
- **Blue is a role, not the default.** The primary action is near-black; blue is the emphasised
  action and informative colour.

### Primary tasks
- Search and browse products and rooms; open a product.
- Add to basket; find a store; sign in to IKEA Family.

## 2. Color Palette & Roles

Measured with `getComputedStyle` on `ikea.com/de/de`: 94 root custom properties, all IKEA's —
`--colour-*` 88 (as RGB triplets), `--product-*` 4, `--ikea-font`, `--hnf-menu-dropdown-top`.

### Brand

- **Brand blue** (`#0058a3`) — `--colour-static-ikea-brand-blue`; also
  `--colour-interactive-emphasised-bg-default` and `--colour-semantic-informative`.
- **Brand yellow** (`#ffdb00`) — `--colour-static-ikea-brand-yellow`.
- **Emphasised hover** (`#004f93`) · **pressed** (`#003e72`).
- **IKEA Family blue** (`#007cc1`) — `--colour-static-ikea-family`.

### Ink and actions

- **Primary** (`#111111`) — `--colour-interactive-primary-bg-default`, `--colour-text-and-icon-1`;
  hover **`#333333`**, pressed `#000000`.
- **Foreground** (`#484848`) — `--colour-text-and-icon-2`; the most frequent text colour on the page
  (2,735 elements), also the hairline border.
- **Text 3** (`#767676`) · **Text 4** (`#929292`).
- **Secondary** (`#f5f5f5`) → hover **`#dfdfdf`** → pressed **`#cccccc`**.
- **Canvas** (`#ffffff`).

### Commercial and status

**Offer red** `#cc0008` (`--colour-commercial-message-bti-red`, time-restricted and lower-price
messages) · **Negative** `#e00751` · **Positive** `#0a8a00` · **Caution** `#f26a2f`. A 21-step
`--colour-extended-palette-*` serves illustration and campaigns.

## 3. Typography Rules

### Font family

**Noto IKEA** at 400 and 700 — the only faces loaded (`document.fonts`). `--ikea-font` holds the
stack: a currency-glyph face ("Saudi Riyal") first, then Noto IKEA, then Noto Sans for CJK scripts,
Roboto, Open Sans and system-ui. How Noto IKEA is served was not traced.

### Scale

Skapa's type scale is present as unitless numbers (`--skapa-heading-l` 28, `--skapa-body-m` 14,
`--skapa-label-s` 12). Header links are 14px/400, the search field 16px/400.

## 4. Component Stylings

Measured on the home page after declining cookies (OneTrust), focus read under a real Tab key, and
a hover counted only when `:hover` matched; background-image, text-decoration and pseudo-elements
were compared too.

- **Header link** — Produkte: transparent, **`#484848`**, 46px, `12px 16px`, 14px/400. Hover and press
  darken it to **`#111111`** and underline it. Focus adds `0 0 0 4px #ffffff` inside
  `outline: 2px solid #111111`.
- **Search field** — the bare input: `#111111` text, 48px, a 48px left inset for the icon, 16px/400.
  It shows no change on hover or focus; the search component's frame was not read.

The same two-ring focus (white 4px, then a 2px `#111111` outline) appears on Skapa buttons over
product images.

### Radius

Round icon buttons and pills at 64px; small chips at 4px. Product images carry their own radius
tokens (`--product-image-radius-s`, `-m`).

## 5. Layout Principles

- White pages, product imagery first, grey text and hairlines.
- Padding steps of 4, 8, 12, 16, 20, 24 and 32px.

## 6. Depth & Elevation

Soft and rare: `rgba(0,0,0,0.1) 0 4px 16px` on floating surfaces; product cards have no shadow.
`--colour-elevation-1/2/3` name the surface levels.

## 7. Do's and Don'ts

### Do
- Use `#111111` for primary actions and `#484848` for text.
- Keep blue `#0058a3` for emphasised actions and information, yellow `#ffdb00` for the brand.
- Draw focus as a white 4px ring inside a 2px `#111111` outline.

### Don't
- Don't make blue the default button colour; primary is near-black.
- Don't use the offer red `#cc0008` outside commercial messages.
- Don't add shadows to product cards.

## 8. Responsive Behavior

**Not measured.** Desktop 1440×1000 only.

## 9. Agent Prompt Guide

### Quick Color Reference
`#0058a3` brand blue · `#ffdb00` brand yellow · `#111111` primary · `#333333` primary hover ·
`#484848` text · `#f5f5f5` secondary · `#dfdfdf` secondary hover · `#cc0008` offer red

### Example Component Prompts
- "A 14px/400 Noto IKEA header link in `#484848` that darkens to `#111111` and underlines on hover;
  focus a white 4px ring inside a 2px `#111111` outline."
- "A primary action in `#111111` with white text (`--colour-interactive-primary-bg-default`); hover `#333333`."

## 10. Voice & Tone

Not assessed as authored voice.

## 11. Brand Narrative

IKEA's concept belongs to Inter IKEA Systems in Delft, and franchisees around the world sell under
it. Online, the brand is held together by Skapa, whose components are stamped with their version in
the page itself. The storefront is deliberately quiet — grey, black and white — so the blue and
yellow, and the products, stand out.

## 12. Principles

- **Monochrome first.** Grey text, black actions, white ground.
- **Blue and yellow are the brand.** Used sparingly, for emphasis and identity.
- **One system, versioned.** Skapa components carry their version into production.

## 13. Personas

Not researched. No persona claim is made from a UI capture.

## 14. States

Hover and press: header links darken to `#111111` and underline. Focus: a white 4px ring inside a
2px `#111111` outline. The search input shows no change of its own. Tokens define hover and pressed
steps for every interactive role.

## 15. Motion & Easing

Not measured.

---

**Tier 1 sources:** https://www.ikea.com/de/de/ (live homepage — 94 root custom properties read via `getComputedStyle`; Noto IKEA loaded; data-skapa attributes read; two components measured after declining cookies, captured 2026-09-26); https://www.ikea.com/de/de/zz-this-does-not-exist (nonsense-path control — HTTP 404 "Seite kann nicht gefunden werden", read 2026-09-26); https://www.ikea.com/global/en/our-business/how-we-work/the-ikea-franchise-system/ (IKEA franchise system — "Inter IKEA Systems B.V. is the owner of the IKEA Concept and worldwide IKEA franchisor", read 2026-09-26); https://www.ikea.com/global/en/international-sales/terms-and-conditions/ (IKEA terms — Inter IKEA Systems B.V., Olof Palmestraat 1, 2616 LN Delft, the Netherlands, read 2026-09-26); https://www.inter.ikea.com/en (Inter IKEA Group — "Inter IKEA Systems B.V. – the worldwide IKEA franchisor", read 2026-09-26)
