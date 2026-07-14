---
id: brandi
name: Brandi
country: KR
category: ecommerce
homepage: "https://www.brandi.co.kr"
primary_color: "#1e1e1e"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=brandi.co.kr&sz=128"
verified: "2026-07-13"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: commerce-home, url: "https://www.brandi.co.kr/", inspected: "2026-07-13" }
    - { id: product-a, kind: commerce-product, url: "https://www.brandi.co.kr/products/106329458", inspected: "2026-07-13" }
    - { id: product-b, kind: commerce-product, url: "https://www.brandi.co.kr/products/125381184", inspected: "2026-07-13" }
  sources:
    - { id: home-live, kind: product-surface, url: "https://www.brandi.co.kr/", captured: "2026-07-13" }
    - { id: product-a-live, kind: product-surface, url: "https://www.brandi.co.kr/products/106329458", captured: "2026-07-13" }
    - { id: product-b-live, kind: product-surface, url: "https://www.brandi.co.kr/products/125381184", captured: "2026-07-13" }
    - { id: spoqa-font, kind: official-doc, url: "https://github.com/spoqa/spoqa-han-sans", captured: "2026-07-13" }
    - { id: noto-font, kind: official-doc, url: "https://notofonts.github.io/noto-docs/website/use/", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &home { surface_id: home, source_id: home-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.ink": *home
    "tokens.colors.promo-active": *home
    "tokens.colors.action-direct": &product { surface_id: product-a, source_id: product-a-live, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.action-partner": *product
    "tokens.colors.action-on": *product
    "tokens.colors.option-border": *product
    "tokens.colors.option-border-disabled": *product
    "tokens.colors.badge-surface": *product
    "tokens.colors.badge-text": *product
    "tokens.typography.family.ui": *product
    "tokens.typography.product-action.size": *product
    "tokens.typography.product-action.weight": *product
    "tokens.typography.product-action.lineHeight": *product
    "tokens.typography.product-action.use": *product
    "tokens.typography.option.size": *product
    "tokens.typography.option.weight": *product
    "tokens.typography.option.lineHeight": *product
    "tokens.typography.option.use": *product
    "tokens.typography.badge.size": *product
    "tokens.typography.badge.weight": *product
    "tokens.typography.badge.lineHeight": *product
    "tokens.typography.badge.use": *product
    "tokens.spacing.action-x": *product
    "tokens.spacing.action-y": *product
    "tokens.spacing.option-item": *product
    "tokens.spacing.badge-x": *product
    "tokens.spacing.badge-y-start": *product
    "tokens.spacing.badge-y-end": *product
    "tokens.rounded.product-action": *product
    "tokens.rounded.option": *product
    "tokens.rounded.option-menu": *product
    "tokens.rounded.badge": *product
    "tokens.components.product-badge.type": *product
    "tokens.components.product-badge.bg": *product
    "tokens.components.product-badge.fg": *product
    "tokens.components.product-badge.radius": *product
    "tokens.components.product-badge.padding": *product
    "tokens.components.product-badge.font": *product
    "tokens.components.product-badge.use": *product
tokens:
  source: reconciled
  extracted: "2026-07-13"
  components_harvested: true
  colors:
    canvas: "#ffffff"
    ink: "#202429"
    promo-active: "#ff365d"
    action-direct: "#1e1e1e"
    action-partner: "#00c73c"
    action-on: "#ffffff"
    option-border: "#e6e6e6"
    option-border-disabled: "#e1e1e1"
    badge-surface: "#ebeef2"
    badge-text: "#808893"
  typography:
    family: { ui: "Noto Sans KR" }
    product-action: { size: 17, weight: 500, lineHeight: 1.0, use: "Observed direct and partner purchase links on both captured product pages." }
    option: { size: 13, weight: 400, lineHeight: 1.0, use: "Observed product-option select and expanded listbox." }
    badge: { size: 13, weight: 700, lineHeight: 1.0, use: "Observed product-detail badge." }
  spacing: { action-x: 4, action-y: 18, option-item: 16, badge-x: 8, badge-y-start: 2, badge-y-end: 3 }
  rounded: { product-action: 6, option: 6, option-menu: 6, badge: 6 }
  components:
    product-badge: { type: badge, bg: "#ebeef2", fg: "#808893", radius: "6px", padding: "2px 8px 3px", font: "13px / 700 / Noto Sans KR", use: "Observed product-detail metadata badge." }
---

# Design System Inspiration of Brandi

## 1. Visual Theme & Atmosphere

Brandi is an official Korean women's fashion shopping service: the public site title calls it “여성 패션 쇼핑앱 브랜디,” and its two captured item pages concentrate the available product evidence around choosing an option and proceeding to purchase. Those public commerce surfaces are predominantly white with `#202429` text. The clearest action treatment is not the legacy pink claim: the direct purchase link is `#1e1e1e` with white text, while an adjacent green `#00c73c` link is a partner purchase path. On the home route, `#ff365d` appears on an active promotional slider item; it is therefore recorded as route-local promo evidence rather than a universal Brandi action token. The capture is desktop-only and does not establish an app, marketing, documentation, or account-area system beyond these public routes.

**Key Characteristics:**
- White commerce canvas with `#202429` ink across all three captured routes
- Product-detail purchase pair: direct `#1e1e1e` and a separate green partner action
- 6px rounding on the recorded product actions, option control, listbox, and badge
- Noto Sans KR and Spoqa Han Sans are live-loaded on the captured web surfaces
- Active home promotional slider evidence is `#ff365d`, not a general CTA rule

## 2. Color Palette & Roles

### Captured commerce colors

- **Canvas** (`#ffffff`): observed page/control background on the home and product routes.
- **Ink** (`#202429`): observed product-option, menu, and general text color.
- **Direct purchase** (`#1e1e1e`): background of `.btn-buy` on both captured product pages.
- **Partner purchase** (`#00c73c`): background of the adjacent `.btn-n-buy`; this is a route-local partner action, not a universal Brandi color.
- **On action** (`#ffffff`): observed text on both recorded purchase links.
- **Promo active** (`#ff365d`): observed only on active home slider list items.
- **Option border** (`#e6e6e6`): default product-option selector border.
- **Disabled option border** (`#e1e1e1`): observed disabled selector border.
- **Badge surface / text** (`#ebeef2` / `#808893`): product-detail badge pair.

No `#ff204b` live use was recorded by the supplied 2026-07-13 capture, so it is not retained as a current token.

## 3. Typography Rules

### Font evidence classes

| Family | Captured use | FontFaceSet / source corroboration | Resolution |
|------|--------------|------------------------------------|------------|
| `Noto Sans KR` | 257 visible uses across home and both product pages, including headings, controls, badges, and purchase links | `loaded`, high confidence, with 124 `fonts.gstatic.com` source URLs | **Verified live webfont.** It is the sole `tokens.typography.family.ui` family. The [Noto documentation](https://notofonts.github.io/noto-docs/website/use/) describes the collection’s OFL use boundary; that licence context does not make it a Brandi-owned font. |
| `Spoqa Han Sans` | 124 visible uses across body, menu, button, badge, and list-item roles | `loaded`, high confidence, backed by the captured FontFaceSet; the artifact lists no exact source URL for this family | **Verified live surface use**, preserved as route-local typographic evidence rather than an additional UI-family token. The [Spoqa project](https://github.com/spoqa/spoqa-han-sans) distributes its family under SIL OFL and documents webfont use; do not rename the exact captured family to a newer upstream alias. |
| `Pretendard` | No visible use | 18 CDN `@font-face` sources but no computed use | **Declared-only.** It is not a Brandi UI token and is not substituted into examples. |
| `Arial` | Seven utility-button uses | System classification; no webfont source | **System-only.** Not a Brandi font claim. |

### Observed hierarchy

| Role | Font | Size | Weight | Line Height | Provenance |
|------|------|------|--------|-------------|------------|
| Product purchase link | Noto Sans KR | 17px | 500 | normal | `.btn-buy` and `.btn-n-buy` on both product pages |
| Product option / expanded menu | Spoqa Han Sans | 13px | 400 | normal | option trigger and listbox on both product pages |
| Product badge | Noto Sans KR | 13px | 700 | normal | `.badge` on both product pages |

## 4. Component Stylings

### Product purchase action

**Direct purchase — observed default**
- Background: `#1e1e1e`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `18px 4px`
- Font: `17px / 500 / Noto Sans KR`
- Use: `surface-2::[data-omd-capture="17"]` / `.btn-buy`, also observed on surface-3; direct product purchase link.

**Partner purchase — observed default**
- Background: `#00c73c`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `18px 4px`
- Font: `17px / 500 / Noto Sans KR`
- Use: `surface-2::[data-omd-capture="18"]` / `.btn-n-buy`, also observed on surface-3; adjacent green partner purchase link.

### Product option select

**Default and observed states**
- Background: `#ffffff`
- Text: `#202429`
- Border: `1px solid #e6e6e6`
- Radius: `6px`
- Font: `13px / 400 / Spoqa Han Sans`
- Expanded: The trigger at `surface-2::[data-omd-capture="15"]` opened the recorded listbox on both product routes.
- Disabled: The disabled trigger at `surface-2::[data-omd-capture="16"]` retained white background and `#202429` text with `1px solid #e1e1e1` border.
- Use: Product-option selector. No hover, focus, pressed, validation, or selected-option styling is specified.

### Product option listbox

**Expanded — observed interaction state**
- Background: `#ffffff`
- Text: `#202429`
- Border: `0px 1px 1px #e6e6e6`
- Radius: `0px 0px 6px 6px`
- Padding: `0px 0px 1px`
- Font: `13px / 400 / Spoqa Han Sans`
- Expanded: `surface-2::[data-omd-interaction-capture="menu-0-0"]` / `.ui-menu` appeared after the option-trigger interaction; a 16px-padded option wrapper was observed inside it.
- Use: Product-option listbox on product pages only.

### Product detail badge

**Default — observed product metadata badge**
- Background: `#ebeef2`
- Text: `#808893`
- Radius: `6px`
- Padding: `2px 8px 3px`
- Font: `13px / 700 / Noto Sans KR`
- Use: `surface-2::span` / `.badge`, also observed on surface-3.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.brandi.co.kr/; https://www.brandi.co.kr/products/106329458; https://www.brandi.co.kr/products/125381184; https://github.com/spoqa/spoqa-han-sans; https://notofonts.github.io/noto-docs/website/use/
**Tier 2 sources:** https://getdesign.md/brandi (no indexed Brandi record found); https://styles.refero.design/?q=brandi (no Brandi result found in the public search result set)
**Conflicts unresolved:** none

## 5. Layout Principles

The supplied evidence is a 1440×900 desktop capture. It supports only the recorded product-action spacing (`18px 4px`), option-listbox item padding (16px on the representative option wrapper), and compact badge padding. No product grid, page container, sticky bar, mobile layout, or checkout funnel rule is retained without a representative captured selector.

## 6. Depth & Elevation

The representative purchase links, select trigger, listbox, and badge all have `box-shadow: none`. No shadow scale or image overlay system is established by this capture.

## 7. Do's and Don'ts

### Do

- Keep the direct product purchase link black `#1e1e1e` with white text when reproducing the captured product-page state.
- Keep the green `#00c73c` purchase link scoped to the observed adjacent partner action.
- Use the measured 6px corners and 13px Spoqa Han Sans option text only for the recorded product-option controls.
- Preserve the observed option listbox and disabled border as distinct states with their route/selector provenance.
- Treat Noto Sans KR and Spoqa Han Sans as live font evidence; keep Pretendard declared-only.

### Don't

- Do not restore the legacy pink `#ff204b` CTA, sale badge, wish-toggle, or card system from this evidence set.
- Do not turn the home slider’s `#ff365d` into a universal product action token.
- Do not infer hover, focus, pressed, error, checkout, responsive, or app-native variants from the two recorded menu expansions.
- Do not use the green partner action as evidence of a Brandi-owned brand palette.
- Do not substitute a system font or declared-only Pretendard for the captured loaded families.

## 8. Responsive Behavior

No mobile viewport was supplied. The public evidence does not establish breakpoints, touch-target requirements, sticky behavior, product-grid columns, or mobile navigation rules.

## 9. Agent Prompt Guide

### Verified prompt boundary

“Recreate only the captured Brandi product-detail controls: a `#1e1e1e` direct purchase link and adjacent `#00c73c` partner link, both white 17px/500 Noto Sans KR with 6px radius and `18px 4px` padding; a white 6px product-option select with `#e6e6e6` border and 13px Spoqa Han Sans; and its observed white expanded listbox. Do not add pink CTAs, product cards, heart toggles, hover/focus/error states, grid rules, or a mobile treatment.”

## 10. Voice & Tone

The supplied capture establishes the service name and commerce labels only; it does not provide a first-party editorial voice guide or enough verified copy to derive one. [FILL IN: official voice principles or source-backed microcopy.]

## 11. Brand Narrative

Brandi’s public site identifies the service as “여성 패션 쇼핑앱 브랜디.” Its product pages show a public option-selection and purchase surface, while the site footer identifies Newnex as the hosting operator and describes its payment/intermediation boundary. These are product and legal-context facts, not authority for a broader origin story, market position, mission, or rebrand narrative. [FILL IN: first-party history, mission, or current-evolution source.]

## 12. Principles

[FILL IN: official Brandi product or design principles. The observed commerce constraints above are not presented as official principles.]

## 13. Personas

[FILL IN: first-party, source-backed stakeholder groups or research. No synthetic personas are included.]

## 14. States

Only the product-option expanded/listbox state and the disabled option border were observed. Empty, loading, error, success, cart, wish, sold-out, and validation treatments are not specified.

## 15. Motion & Easing

No motion duration, easing curve, transition, or reduced-motion behavior was captured. None is specified.

## 16. Do's and Don'ts (Summary)

### Do

- Reuse only values tied to a captured Brandi route and selector.
- Keep font, component, and interaction provenance separate by surface and state.

### Don't

- Promote declared-only assets or old token values into the current product system.
- Invent checkout, account, marketing, documentation, or mobile components from these three public routes.
