---
name: 11st
colors:
  canvas: '#ffffff'
  foreground: '#111111'
  body: '#666666'
  brand-red: '#ff0038'
  muted: '#a9a9a9'
  hairline: '#eeeeee'
  on-brand: '#ffffff'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Repeated public product-home body, list, button, and dialog samples
  search:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 2.44
    use: Public product-home global search input
  price:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Public home deal-card price using Lato New first
  price-struck:
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.85
    use: Public home deal-card struck price using Lato New first
rounded:
  square: 0px
  card: 4px
  billboard-control: 50px
  circular: 9999px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 20
components:
  global-search:
    type: input
    backgroundColor: transparent
    textColor: '#666666'
    rounded: 0px
    height: 44px
    typography: 18px / 400 Noto Sans KR
    states: 'pressed samples on home and /main change foreground to #111111; focus not declared (the bundle records its focus frames after a press, so they are not a focus-visible sample); no flow transition inferred'
    use: Product home and /main; selector home::[data-omd-capture=1]
    pressed: '#111111'
  billboard-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#999999'
    border: '1px solid #eeeeee'
    rounded: 50px
    height: 50px
    typography: 17px / 400 Noto Sans KR
    states: default only; no interaction transition captured
    use: Product home and /main billboard control; selector home::[data-omd-capture=109]
  deal-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#111111'
    rounded: 4px
    typography: 15px / 400 Noto Sans KR
    shadow: rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px
    states: default only; hover not sampled. Text colour and font are the card name line (div.c-card-item__name, line height 22.5px), corrected 2026-09-30
    use: Home deal card; selector home::div.c-card-item.c-card-item--deal.c-card-item--box
  header-inventory-dialog:
    type: dialog
    backgroundColor: '#ffffff'
    textColor: '#666666'
    rounded: 0px
    states: dialog-open observed after the menu trigger on home and /main
    use: Header inventory dialog; selector home::[data-omd-interaction-capture=dialog-0-0]
  gnb-category-link:
    type: tab
    backgroundColor: transparent
    textColor: '#111111'
    rounded: 0px
    padding: 0px
    height: 66px
    typography: 17px / 700 11StreetGothic
    states: rest captured on home and /main (captures 12-18 on each route); no state frame in the bundle
    use: Header category link set in the brand face, home::[data-omd-capture="12"]; line height 66px, the height of the row
  gnb-side-link:
    type: tab
    backgroundColor: transparent
    textColor: '#111111'
    rounded: 0px
    padding: 0px
    height: 21px
    typography: 14px / 400 Noto Sans KR
    states: rest captured on home and /main (captures 19 and 20 on each route); no state frame in the bundle
    use: Header link to the right of the category links, home::[data-omd-capture="19"]; line height 21px; its list item (class line) adds 14px left padding
  header-list-link:
    type: button
    backgroundColor: transparent
    textColor: '#666666'
    rounded: 0px
    padding: 0px
    height: 24px
    typography: 14px / 400 Noto Sans KR
    hover: 'fg #ff0038'
    pressed: 'fg #ff0038'
    states: 'rest on four links (captures 3 and 4 on home and /main); hover and pressed sampled on three of them (6 frames), each recording colour #666666 to #ff0038 and nothing else; focus not sampled'
    use: Header text link, 147 px wide, in the two-row list between the search button (capture 2) and the button with class raking_button (capture 5), home::[data-omd-capture="3"]; line height 21px
  icon-text-tile:
    type: card
    backgroundColor: '#ffffff'
    rounded: 27px
    padding: 90px 0px 0px
    size: 166px x 103px
    states: six captured at rest on home (captures 117-122); no state frame in the bundle
    use: Home icon-and-text shortcut tile (a.c-icontext), home::[data-omd-capture="117"]. The anchor computes font-size 0px, so its label sits in a child outside the dump and no label style is declared. The more tile (button.c-icontext--more, capture 123) shares the background, radius and padding at 166 x 126
  wing-top-button:
    type: button
    backgroundColor: '#000000'
    rounded: 50%
    size: 60px x 60px
    states: one captured at rest on /main; no state frame in the bundle
    use: Circular button with class c_wing_top on /main, surface-2::[data-omd-capture="120"]; its label text is visually hidden (line height 200px), so no label style is declared
  footer-menu-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 14px / 400 Noto Sans KR
    states: nine captured at rest on /main (captures 121-129); no state frame in the bundle
    use: Footer menu link (a.lk_f_menu) on /main, surface-2::[data-omd-capture="121"]; line height 21px
  footer-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    border: '1px #cccccc'
    rounded: 0px
    padding: 0px 35px 0px 10px
    height: 36px
    typography: 14px / 400 Noto Sans KR
    states: two captured at rest on /main (captures 130 and 131, both 175 px wide); no state frame in the bundle
    use: Footer outlined button on /main, surface-2::[data-omd-capture="130"]; line height 21px
  footer-bordered-link:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    border: '1px #eeeeee'
    rounded: 0px
    padding: 0px 6px
    height: 24px
    typography: 12px / 400 Noto Sans KR
    states: two captured at rest on /main (captures 133 and 134); no state frame in the bundle
    use: Small bordered footer link on /main, surface-2::[data-omd-capture="133"]; line height 22px
  footer-contact-button:
    type: button
    backgroundColor: transparent
    textColor: '#111111'
    rounded: 0px
    padding: 0px
    height: 20px
    typography: 14px / 700 Noto Sans KR
    states: one captured at rest on /main; no state frame in the bundle
    use: Bold footer text button (button.c-footer-contact__button) on /main, surface-2::[data-omd-capture="135"]; line height 20px
fonts:
  roles:
    ui: Noto Sans KR
    numerals: Lato New
    brand: 11StreetGothic
---

# Design System Inspiration of 11st (11번가)

## Overview

### Visual Theme & Atmosphere

11st is a Korean open-market platform that has operated since 2008 and now presents shopping, search, payment, delivery, and seller participation as one commerce ecosystem. Its official company profile frames the service as a guide for a shopper’s product discovery and purchase journey; its brand page turns that metaphor into a minimal street-sign logo. The current public product routes express a much more utilitarian layer of that identity: a mostly white, compact information field where product names, prices, navigation, and search occupy the visual foreground. The saturated `#FF0038` appears in observed product text and border samples, while near-black and gray do the repetitive reading work. This is a reference for the captured public web surfaces, not a claim about a logged-in order flow, seller console, or mobile app.

The official brand presentation is broader than the captured web palette. It describes the logo’s orange-red-pink gradient as an expression of customer, shopping, and experience. That official identity context is valuable, but it does not authorize unobserved gradient, CTA, or product-status tokens on the public storefront.

### Primary tasks

- Search for a product across the marketplace
- Scan product names and prices down the home page
- Compare a deal price against its struck-out original
- Buy a product after discovering it on the storefront

### Brand Narrative

11st launched as an open market in February 2008, opened a mobile service in 2010, and renewed its brand identity in 2016, according to its 2026 company profile. The same profile presents an evolving platform that connects customers and sellers across products, services, delivery, payment, and content.

The official brand page describes the logo as a minimal street sign: a visual guide toward diverse goods and differentiated services. Its downloadable 11번가 고딕 family was tested for shopping words, numbers, punctuation, device environments, spacing, and readability, with the sign motif incorporated into its letterforms. Those brand and typeface statements explain the identity; they do not expand the observed public web component contract.

### Principles

1. **Guide the shopping journey.** The company describes a platform spanning search, information, and purchase. *UI implication:* make observed product information easy to scan without inventing a flow.
2. **Keep identity recognizable across surfaces.** The official logo and typeface both use the street-sign motif. *UI implication:* preserve the documented asset boundary rather than copying unobserved campaign treatments.
3. **Support both customers and sellers.** The company profile presents both as stakeholders in the marketplace. *UI implication:* do not collapse a seller or advertising surface into a consumer-product component claim.

### Personas

*The reference does not invent named personas. The official company profile identifies customers and sellers as distinct marketplace stakeholders; any product-specific persona work needs task-specific research beyond this public capture.*

## Colors

- **Canvas — `#FFFFFF`:** observed white surface on public product routes and the header-inventory dialog.
- **Foreground — `#111111`:** repeated dark text and the pressed global-search foreground.
- **Body — `#666666`:** repeated default text, borders, buttons, list items, and dialog text across home and `/main`.
- **Brand red — `#FF0038`:** observed product-route text and border color, including the home deal-card rate sample. The capture does not establish it as a universal filled CTA background.
- **Muted — `#A9A9A9`:** home deal-card struck-price text sample.
- **Hairline — `#EEEEEE`:** observed billboard-control border on home and `/main`.

## Typography

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

## Layout

The supplied evidence covers two public desktop routes at `1440×900` (a third, the category URL, rendered an error page). It establishes a 44px search input, 50px billboard control, repeated header/list chrome, and the observed deal-card samples above. It does not establish a reusable grid width, breakpoint range, mobile composition, category hierarchy, seller tool, cart, checkout, or account layout; those are deliberately omitted rather than inferred from an open-market category.

### Responsive Behavior

No responsive capture was supplied. The only verified viewport is `1440×900`; no breakpoint, touch-target, mobile navigation, or image-resizing rule is recorded.

## Elevation & Depth

The observed deal-card sample has the specific two-layer shadow recorded in §4. The observed billboard control and header-inventory dialog have `box-shadow: none`. These route-local facts do not form an elevation scale.

## Motion & Easing

No duration, easing curve, or transition property was observed in the supplied evidence. The dialog-open interaction proves that the layer can be expanded on the captured routes, not how it should animate.

## Components

### Global search

**Default**
- Background: `transparent`
- Text: `#666666`
- Radius: `0px`
- Height: `44px`
- Font: `18px / 400 Noto Sans KR`
- Use: Public product home and `/main`; `home::[data-omd-capture="1"]`, `.search_text.search_text_ad`.
- Focus: not declared. The bundle records its focus frames after a press, so they are not a focus-visible sample (July value withdrawn 2026-09-30).
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
- Text: `#111111` (the card name line, `div.c-card-item__name`)
- Font: `15px / 400 Noto Sans KR`, line height 22.5px (card name)
- Radius: `4px`
- Shadow: `rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px`
- Use: Home deal card; `home::div.c-card-item.c-card-item--deal.c-card-item--box` (16 observed occurrences).

The card’s observed price is `#111111`, `16px / 400`, with `Lato New` first; its observed struck-price is `#A9A9A9`, `13px / 400`, also with `Lato New` first. Hover, selection, loading and purchase states were not sampled for this card, so none is claimed. Corrected 2026-09-30: the July text gave the card's text colour as `#666666`, the card container's own inherited colour (the container computes font-size 0px and holds no text of its own). `#666666` remains the colour of the card's benefit and delivery lines (13px / 400).

### Header inventory dialog

**Dialog open**
- Background: `#ffffff`
- Text: `#666666`
- Radius: `0px`
- Font: `14px / 400 Noto Sans KR`
- Use: Opened from the header menu on home and `/main`; `home::[data-omd-interaction-capture="dialog-0-0"]`, `.c_header_inventory.c_header_inventory_not_recommend`.

The collector records two menu-to-dialog interaction expansions. It does not establish further dialog variants, focus management, close behavior beyond the observed close control, or a generic overlay pattern.

The sections below were added on 2026-09-30 from the same 2026-07-13 bundle (bundle-only; no new capture). The category URL (bundle `surface-3`) rendered an error page (five elements: paragraphs with the classes `errImg` and `MsgImg` and two anchors, all 12px 돋움), so no component is taken from it.

### Header category link

**Default**
- Background: transparent
- Text: `#111111`
- Radius: `0px`
- Padding: `0px`
- Height: `66px`
- Font: `17px / 700 11StreetGothic`, line height 66px (the height of the row)
- Use: header category links on home and `/main` (captures 12-18 on each route); `home::[data-omd-capture="12"]`.
- States: the bundle holds no state frame for these links; none is declared.

### Header side link

**Default**
- Background: transparent
- Text: `#111111`
- Radius: `0px`
- Height: `21px`
- Font: `14px / 400 Noto Sans KR`, line height 21px
- Use: the links to the right of the category links (captures 19 and 20 on home and `/main`); `home::[data-omd-capture="19"]`. Their list item (`li.line`) adds 14px of left padding.

### Header list link

**Default and pointer states**
- Background: transparent
- Text: `#666666`
- Radius: `0px`
- Height: `24px` (147 px wide)
- Font: `14px / 400 Noto Sans KR`, line height 21px
- Hover: fg `#ff0038`
- Pressed: fg `#ff0038`
- Use: the two-row header list between the search button (capture 2) and the button with class `raking_button` (capture 5); `home::[data-omd-capture="3"]`, four links across home and `/main`.
- Evidence: three of the four links carry hover and pressed frames (6 frames); each records colour `#666666` to `#ff0038` and nothing else. `#ff0038` is the brand red, also the rest colour of the deal card's discount rate. Focus was not sampled.

### Icon-and-text shortcut tile

**Default**
- Background: `#ffffff`
- Radius: `27px`
- Padding: `90px 0px 0px` (the icon area)
- Size: `166px x 103px`
- Use: six home shortcut tiles (`a.c-icontext`, captures 117-122); `home::[data-omd-capture="117"]`. The more tile (`button.c-icontext--more`, capture 123) shares the background, radius and padding at 166 × 126.
- Label: not declared. The anchors compute font-size 0px, so their labels sit in child elements outside the dump.

### Wing top button

**Default**
- Background: `#000000`
- Radius: `50%`
- Size: `60px x 60px`
- Use: circular button with class `c_wing_top` on `/main`; `surface-2::[data-omd-capture="120"]`. Its label text is visually hidden (line height 200px), so no label style is declared.

### Footer menu link

**Default**
- Background: transparent
- Text: `#333333`
- Height: `20px`
- Font: `14px / 400 Noto Sans KR`, line height 21px
- Use: nine footer menu links (`a.lk_f_menu`) on `/main`; `surface-2::[data-omd-capture="121"]`.

### Footer outlined button

**Default**
- Background: transparent
- Text: `#111111`
- Border: `1px #cccccc`
- Radius: `0px`
- Padding: `0px 35px 0px 10px`
- Height: `36px` (175 px wide)
- Font: `14px / 400 Noto Sans KR`, line height 21px
- Use: two footer buttons on `/main`; `surface-2::[data-omd-capture="130"]`.

### Footer bordered link

**Default**
- Background: transparent
- Text: `#111111`
- Border: `1px #eeeeee`
- Radius: `0px`
- Padding: `0px 6px`
- Height: `24px`
- Font: `12px / 400 Noto Sans KR`, line height 22px
- Use: two small bordered footer links on `/main`; `surface-2::[data-omd-capture="133"]`.

### Footer contact button

**Default**
- Background: transparent
- Text: `#111111`
- Height: `20px`
- Font: `14px / 700 Noto Sans KR`, line height 20px
- Use: bold footer text button (`button.c-footer-contact__button`) on `/main`; `surface-2::[data-omd-capture="135"]`.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.11st.co.kr/` (product home), `https://www.11st.co.kr/main` (product home), `https://www.11st.co.kr/categories/1467565` (inspected 2026-07-13; the capture rendered an error page, so no value comes from it), `https://www.11stcorp.com/brand` (official identity, font asset, and font-use terms), `https://design.11stcorp.com/` (official design-system context), `https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf` (official current company/history context), and `https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y` (official advertising-font guidance)
**Tier 2 sources:** `https://getdesign.md/11st` (attempted; built-in web open returned no accessible record), `https://styles.refero.design/?q=11st` (attempted; built-in web open returned no accessible record), and built-in web search for both `11st` and `11번가` on each directory (no record returned)
**Conflicts unresolved:** none

Legacy claims that promoted a `#F43142` discount token, filled primary/ghost CTAs, a 25px search tab, an 8px universal product-card radius, hover elevation, generic mobile breakpoints, checkout/cart states, and motion tokens were removed. The supplied 2026 capture does not substantiate those values or variants.

### States

| Observed state | Treatment | Evidence boundary |
|---|---|---|
| Search default | Transparent field, `#666666` text, 44px height | Public home and `/main` selector-backed sample |
| Search pressed | `#111111` foreground | Captured pseudo-state only |
| Header inventory dialog open | White, square, `#666666` text dialog | Two collector interaction expansions on home and `/main` |
| Header list link hover | `#ff0038` foreground | Hover frames on three header list links, home and `/main` (added 2026-09-30) |
| Header list link pressed | `#ff0038` foreground | Pressed frames on the same three links (added 2026-09-30) |

No empty, loading, validation, disabled, cart, order, error, toast, or success state was captured, so none is specified.

## Do's and Don'ts

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

## Voice & Tone

The official company profile describes 11st as a commerce platform that connects product search, information, purchase, and customer life. Keep public-facing content practical, product-specific, and clear about the next shopping action. This is a content-direction reading of the official profile, not a capture of checkout, service-recovery, or notification copy.

## Agent Prompt Guide

Use only selector-backed public-web facts: a transparent 44px search field with `#666666` default text that becomes `#111111` in captured pressed samples; a white 50px billboard control with `#999999` text, `#EEEEEE` border, and 50px radius; or the specifically observed home deal card. Do not ask an implementation to reproduce an unobserved purchase journey, brand-gradient campaign, or loaded font that the evidence does not support.

## Governance

### Known Gaps

- **Contrast, `global-search`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `billboard-control`.** Text `#999999` on `#ffffff` measures 2.85:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-category-link`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-side-link`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-list-link`.** Text `#666666` on `#00000000` measures 3.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-menu-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-outline-button`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-bordered-link`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-contact-button`.** Text `#111111` on `#00000000` measures 1.11:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
