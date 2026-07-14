---
id: 11st
name: 11st
country: KR
category: ecommerce
homepage: "https://www.11st.co.kr/"
primary_color: "#ff0038"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128"
verified: "2026-07-13"
added: "2026-06-09"
omd: "0.1"
verification_v2:
  schema: 2
  checked: "2026-07-13"
  surfaces:
    - { id: home, kind: product-home, url: "https://www.11st.co.kr/", inspected: "2026-07-13" }
    - { id: main, kind: product-home, url: "https://www.11st.co.kr/main", inspected: "2026-07-13" }
    - { id: category, kind: product-category, url: "https://www.11st.co.kr/categories/1467565", inspected: "2026-07-13" }
  sources:
    - { id: home-capture, kind: product-surface, url: "https://www.11st.co.kr/", captured: "2026-07-13" }
    - { id: main-capture, kind: product-surface, url: "https://www.11st.co.kr/main", captured: "2026-07-13" }
    - { id: category-capture, kind: product-surface, url: "https://www.11st.co.kr/categories/1467565", captured: "2026-07-13" }
    - { id: brand-context, kind: official-doc, url: "https://www.11stcorp.com/brand", captured: "2026-07-13" }
    - { id: design-system, kind: official-doc, url: "https://design.11stcorp.com/", captured: "2026-07-13" }
    - { id: company-profile, kind: official-doc, url: "https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf", captured: "2026-07-13" }
    - { id: advertising-guide, kind: official-doc, url: "https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y", captured: "2026-07-13" }
  conflicts: []
  claims:
    "tokens.colors.canvas": &product { surface_id: home, source_id: home-capture, method: computed-style, captured: "2026-07-13" }
    "tokens.colors.foreground": *product
    "tokens.colors.body": *product
    "tokens.colors.brand-red": *product
    "tokens.colors.muted": *product
    "tokens.colors.hairline": *product
    "tokens.colors.on-brand": *product
    "tokens.typography.family.ui": *product
    "tokens.typography.family.numerals": *product
    "tokens.typography.family.brand": *product
    "tokens.typography.body.size": *product
    "tokens.typography.body.weight": *product
    "tokens.typography.body.lineHeight": *product
    "tokens.typography.body.use": *product
    "tokens.typography.search.size": *product
    "tokens.typography.search.weight": *product
    "tokens.typography.search.lineHeight": *product
    "tokens.typography.search.use": *product
    "tokens.typography.price.size": *product
    "tokens.typography.price.weight": *product
    "tokens.typography.price.lineHeight": *product
    "tokens.typography.price.use": *product
    "tokens.typography.price-struck.size": *product
    "tokens.typography.price-struck.weight": *product
    "tokens.typography.price-struck.lineHeight": *product
    "tokens.typography.price-struck.use": *product
    "tokens.spacing.xs": *product
    "tokens.spacing.sm": *product
    "tokens.spacing.md": *product
    "tokens.spacing.lg": *product
    "tokens.rounded.square": *product
    "tokens.rounded.card": *product
    "tokens.rounded.billboard-control": *product
    "tokens.rounded.circular": *product
    "tokens.components.global-search.type": *product
    "tokens.components.global-search.bg": *product
    "tokens.components.global-search.fg": *product
    "tokens.components.global-search.radius": *product
    "tokens.components.global-search.height": *product
    "tokens.components.global-search.font": *product
    "tokens.components.global-search.states": *product
    "tokens.components.global-search.use": *product
    "tokens.components.billboard-control.type": *product
    "tokens.components.billboard-control.bg": *product
    "tokens.components.billboard-control.fg": *product
    "tokens.components.billboard-control.border": *product
    "tokens.components.billboard-control.radius": *product
    "tokens.components.billboard-control.height": *product
    "tokens.components.billboard-control.font": *product
    "tokens.components.billboard-control.states": *product
    "tokens.components.billboard-control.use": *product
    "tokens.components.deal-card.type": *product
    "tokens.components.deal-card.bg": *product
    "tokens.components.deal-card.fg": *product
    "tokens.components.deal-card.radius": *product
    "tokens.components.deal-card.shadow": *product
    "tokens.components.deal-card.states": *product
    "tokens.components.deal-card.use": *product
    "tokens.components.header-inventory-dialog.type": *product
    "tokens.components.header-inventory-dialog.bg": *product
    "tokens.components.header-inventory-dialog.fg": *product
    "tokens.components.header-inventory-dialog.radius": *product
    "tokens.components.header-inventory-dialog.states": *product
    "tokens.components.header-inventory-dialog.use": *product
tokens:
  source: reconciled
  extracted: "2026-07-13"
  note: "Values are selector-backed observations from three public 11st product routes. The corporate brand site, advertising guide, and declared fonts are separate evidence domains."
  colors:
    canvas: "#ffffff"
    foreground: "#111111"
    body: "#666666"
    brand-red: "#ff0038"
    muted: "#a9a9a9"
    hairline: "#eeeeee"
    on-brand: "#ffffff"
  typography:
    family: { ui: "Noto Sans KR", numerals: "Lato New", brand: "11StreetGothic" }
    body: { size: 14, weight: 400, lineHeight: 1.50, use: "Repeated public product-home body, list, button, and dialog samples" }
    search: { size: 18, weight: 400, lineHeight: 2.44, use: "Public product-home global search input" }
    price: { size: 16, weight: 400, lineHeight: 1.50, use: "Public home deal-card price using Lato New first" }
    price-struck: { size: 13, weight: 400, lineHeight: 1.85, use: "Public home deal-card struck price using Lato New first" }
  spacing: { xs: 4, sm: 8, md: 12, lg: 20 }
  rounded: { square: 0, card: 4, billboard-control: 50, circular: 9999 }
  components:
    global-search: { type: input, bg: "transparent", fg: "#666666", radius: "0px", height: "44px", font: "18px / 400 Noto Sans KR", states: "focus and pressed samples change foreground to #111111; no flow transition inferred", use: "Product home and /main; selector home::[data-omd-capture=1]" }
    billboard-control: { type: button, bg: "#ffffff", fg: "#999999", border: "1px solid #eeeeee", radius: "50px", height: "50px", font: "17px / 400 Noto Sans KR", states: "default only; no interaction transition captured", use: "Product home and /main billboard control; selector home::[data-omd-capture=109]" }
    deal-card: { type: card, bg: "#ffffff", fg: "#666666", radius: "4px", shadow: "rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px", states: "default only; no hover contract captured", use: "Home deal card; selector home::div.c-card-item.c-card-item--deal.c-card-item--box" }
    header-inventory-dialog: { type: dialog, bg: "#ffffff", fg: "#666666", radius: "0px", states: "dialog-open observed after the menu trigger on home and /main", use: "Header inventory dialog; selector home::[data-omd-interaction-capture=dialog-0-0]" }
  components_harvested: true
---

# Design System Inspiration of 11st (11번가)

## 1. Visual Theme & Atmosphere

11st is a Korean open-market platform that has operated since 2008 and now presents shopping, search, payment, delivery, and seller participation as one commerce ecosystem. Its official company profile frames the service as a guide for a shopper’s product discovery and purchase journey; its brand page turns that metaphor into a minimal street-sign logo. The current public product routes express a much more utilitarian layer of that identity: a mostly white, compact information field where product names, prices, navigation, and search occupy the visual foreground. The saturated `#FF0038` appears in observed product text and border samples, while near-black and gray do the repetitive reading work. This is a reference for the captured public web surfaces, not a claim about a logged-in order flow, seller console, or mobile app.

The official brand presentation is broader than the captured web palette. It describes the logo’s orange-red-pink gradient as an expression of customer, shopping, and experience. That official identity context is valuable, but it does not authorize unobserved gradient, CTA, or product-status tokens on the public storefront.

## 2. Color Palette & Roles

- **Canvas — `#FFFFFF`:** observed white surface on public product routes and the header-inventory dialog.
- **Foreground — `#111111`:** repeated dark text and the focused/pressed global-search foreground.
- **Body — `#666666`:** repeated default text, borders, buttons, list items, and dialog text across home and `/main`.
- **Brand red — `#FF0038`:** observed product-route text and border color, including the home deal-card rate sample. The capture does not establish it as a universal filled CTA background.
- **Muted — `#A9A9A9`:** home deal-card struck-price text sample.
- **Hairline — `#EEEEEE`:** observed billboard-control border on home and `/main`.

## 3. Typography Rules

### Evidence classes

- **Live product computed use:** `Noto Sans KR` is loaded/high confidence with 727 visible uses across body, buttons, cards, dialogs, headings, inputs, list items, and text. Its visible computed family is corroborated by loaded FontFaceSet entries and eight 11st-hosted WOFF/WOFF2 sources. It is the UI family token.
- **Live product numeric/card use:** `Lato New` is loaded/high confidence with 57 visible card uses and six 11st-hosted WOFF/WOFF2 sources. It is recorded for the observed price treatment, not substituted for Hangul UI text.
- **Live product brand-face use:** `11StreetGothic` is loaded/high confidence with 16 visible body/text uses and two 11st-hosted WOFF sources. The official brand page separately publishes 11번가 고딕 Light, Regular, and Bold and states the ownership and free-use conditions. The official asset and its observed web use are related but distinct facts.
- **Declared-only:** `11StreetGothicBold`, `Lato`, `Lato all`, and `Helvetica Neue` have declarations but no visible captured use. They remain declared-only.
- **System or unresolved:** Arial and Roboto remain system classifications; 돋움 has computed occurrences without a matching loaded FontFace or known system mapping and remains unresolved. None is promoted as a 11st brand face.

### Observed hierarchy

| Role | Size | Weight | Line height | Source-domain use |
|---|---:|---:|---:|---|
| Product body/chrome | 14px | 400 | 21px | Repeated product home and `/main` samples, `Noto Sans KR` |
| Global search | 18px | 400 | 44px | Public product-home search input, `Noto Sans KR` |
| Deal-card price | 16px | 400 | 24px | Home `.c-card-item__price`, `Lato New` first |
| Deal-card struck price | 13px | 400 | 24px | Home `.c-card-item__price-del`, `Lato New` first |

The official advertising-production guide allows 11Street Gothic-Kor and Noto Sans CJK KR for PC and mobile, with other limited numeric conventions. It is documentation for advertising materials, not a replacement for the product-route computed/font-loading evidence above.

## 4. Component Stylings

### Global search

**Default**
- Background: `transparent`
- Text: `#666666`
- Radius: `0px`
- Height: `44px`
- Font: `18px / 400 Noto Sans KR`
- Use: Public product home and `/main`; `home::[data-omd-capture="1"]`, `.search_text.search_text_ad`.
- Focus: foreground `#111111` in the captured focus sample.
- Pressed: foreground `#111111` in the captured pressed sample.

### Billboard control

**Default**
- Background: `#ffffff`
- Text: `#999999`
- Border: `1px solid #eeeeee`
- Radius: `50px`
- Height: `50px`
- Font: `17px / 400 Noto Sans KR`
- Use: Public home and `/main` billboard control; `home::[data-omd-capture="109"]`, `._billboard-controls__button_1wxhc_120`.

### Deal card

**Default**
- Background: `#ffffff`
- Text: `#666666`
- Radius: `4px`
- Shadow: `rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px`
- Use: Home deal card; `home::div.c-card-item.c-card-item--deal.c-card-item--box` (16 observed occurrences).

The card’s observed price is `#111111`, `16px / 400`, with `Lato New` first; its observed struck-price is `#A9A9A9`, `13px / 400`, also with `Lato New` first. No hover, selection, loading, or purchase state is claimed for this card.

### Header inventory dialog

**Dialog open**
- Background: `#ffffff`
- Text: `#666666`
- Radius: `0px`
- Font: `14px / 400 Noto Sans KR`
- Use: Opened from the header menu on home and `/main`; `home::[data-omd-interaction-capture="dialog-0-0"]`, `.c_header_inventory.c_header_inventory_not_recommend`.

The collector records two menu-to-dialog interaction expansions. It does not establish further dialog variants, focus management, close behavior beyond the observed close control, or a generic overlay pattern.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.11st.co.kr/` (product home), `https://www.11st.co.kr/main` (product home), `https://www.11st.co.kr/categories/1467565` (product category), `https://www.11stcorp.com/brand` (official identity, font asset, and font-use terms), `https://design.11stcorp.com/` (official design-system context), `https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf` (official current company/history context), and `https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y` (official advertising-font guidance)
**Tier 2 sources:** `https://getdesign.md/11st` (attempted; built-in web open returned no accessible record), `https://styles.refero.design/?q=11st` (attempted; built-in web open returned no accessible record), and built-in web search for both `11st` and `11번가` on each directory (no record returned)
**Conflicts unresolved:** none

Legacy claims that promoted a `#F43142` discount token, filled primary/ghost CTAs, a 25px search tab, an 8px universal product-card radius, hover elevation, generic mobile breakpoints, checkout/cart states, and motion tokens were removed. The supplied 2026 capture does not substantiate those values or variants.

## 5. Layout Principles

The supplied evidence covers three public desktop routes at `1440×900`. It establishes a 44px search input, 50px billboard control, repeated header/list chrome, and the observed deal-card samples above. It does not establish a reusable grid width, breakpoint range, mobile composition, category hierarchy, seller tool, cart, checkout, or account layout; those are deliberately omitted rather than inferred from an open-market category.

## 6. Depth & Elevation

The observed deal-card sample has the specific two-layer shadow recorded in §4. The observed billboard control and header-inventory dialog have `box-shadow: none`. These route-local facts do not form an elevation scale.

## 7. Do's and Don'ts

### Do

- Keep public product observations scoped to their captured selector and route.
- Use `Noto Sans KR` for verified public Korean UI text and `Lato New` only where the observed price treatment calls for it.
- Treat the official 11번가 고딕 distribution and its live web use as separate evidence classes.
- Preserve the actual dialog-open provenance when referring to the header inventory layer.

### Don't

- Render a declared-only, system, or unresolved family as if it were a loaded 11st product font.
- Turn official brand gradients, advertising-guide choices, or company-profile statements into unobserved storefront tokens.
- Invent filled CTA, hover, checkout, or responsive variants absent from the collector evidence.
- Generalize a card or control from a marketing, documentation, or unobserved authenticated surface.

## 8. Responsive Behavior

No responsive capture was supplied. The only verified viewport is `1440×900`; no breakpoint, touch-target, mobile navigation, or image-resizing rule is recorded.

## 9. Agent Prompt Guide

Use only selector-backed public-web facts: a transparent 44px search field with `#666666` default text that becomes `#111111` in captured focus/pressed samples; a white 50px billboard control with `#999999` text, `#EEEEEE` border, and 50px radius; or the specifically observed home deal card. Do not ask an implementation to reproduce an unobserved purchase journey, brand-gradient campaign, or loaded font that the evidence does not support.

## 10. Voice & Tone

The official company profile describes 11st as a commerce platform that connects product search, information, purchase, and customer life. Keep public-facing content practical, product-specific, and clear about the next shopping action. This is a content-direction reading of the official profile, not a capture of checkout, service-recovery, or notification copy.

## 11. Brand Narrative

11st launched as an open market in February 2008, opened a mobile service in 2010, and renewed its brand identity in 2016, according to its 2026 company profile. The same profile presents an evolving platform that connects customers and sellers across products, services, delivery, payment, and content.

The official brand page describes the logo as a minimal street sign: a visual guide toward diverse goods and differentiated services. Its downloadable 11번가 고딕 family was tested for shopping words, numbers, punctuation, device environments, spacing, and readability, with the sign motif incorporated into its letterforms. Those brand and typeface statements explain the identity; they do not expand the observed public web component contract.

## 12. Principles

1. **Guide the shopping journey.** The company describes a platform spanning search, information, and purchase. *UI implication:* make observed product information easy to scan without inventing a flow.
2. **Keep identity recognizable across surfaces.** The official logo and typeface both use the street-sign motif. *UI implication:* preserve the documented asset boundary rather than copying unobserved campaign treatments.
3. **Support both customers and sellers.** The company profile presents both as stakeholders in the marketplace. *UI implication:* do not collapse a seller or advertising surface into a consumer-product component claim.

## 13. Personas

*The reference does not invent named personas. The official company profile identifies customers and sellers as distinct marketplace stakeholders; any product-specific persona work needs task-specific research beyond this public capture.*

## 14. States

| Observed state | Treatment | Evidence boundary |
|---|---|---|
| Search default | Transparent field, `#666666` text, 44px height | Public home and `/main` selector-backed sample |
| Search focus | `#111111` foreground | Captured pseudo-state only |
| Search pressed | `#111111` foreground | Captured pseudo-state only |
| Header inventory dialog open | White, square, `#666666` text dialog | Two collector interaction expansions on home and `/main` |

No empty, loading, validation, disabled, cart, order, error, toast, or success state was captured, so none is specified.

## 15. Motion & Easing

No duration, easing curve, or transition property was observed in the supplied evidence. The dialog-open interaction proves that the layer can be expanded on the captured routes, not how it should animate.
