# 11st Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

11st (11번가) is a Korean open-market platform that has operated since 2008. Its official 2026 company profile frames the service as a guide for a shopper’s product discovery and purchase journey, and presents an evolving platform that connects customers and sellers across products, services, delivery, payment, and content. The same profile records a mobile service in 2010 and a brand-identity renewal in 2016. The official brand page describes the logo as a minimal street sign: a visual guide toward diverse goods and differentiated services. That page also describes the logo’s orange-red-pink gradient as an expression of customer, shopping, and experience.

This contract covers three captured public product routes only: product home (`https://www.11st.co.kr/`), `/main`, and the inspected category route `https://www.11st.co.kr/categories/1467565`. Values below are selector-backed observations from those public product routes. This capture is not a claim about a logged-in order flow, seller console, or mobile app. Saturated `#ff0038` appears in observed product text and border samples.

The following evidence-domain, reading-work, and identity-authorization sentences are a derived editorial implementation inference from the verified surfaces; they are not 11st-authored or a separately published UI specification. The corporate brand site (`https://www.11stcorp.com/brand`), the official design-system context at `https://design.11stcorp.com/`, the official company-profile PDF (`https://www.11stcorp.com/resources/guide/2026_11street_Brochure_Kor.pdf`), the advertising-production guide (`https://ads.11st.co.kr/contents/guide/read?bbsNo=617&incHideYN=Y`), and declared fonts are separate evidence domains. Near-black and gray do the repetitive reading work. Official identity context does not authorize unobserved gradient, CTA, or product-status tokens on the captured public routes.

The following comparison of official identity to the captured product routes is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The current public product routes express a much more utilitarian layer of that identity: a mostly white, compact information field where product names, prices, navigation, and search occupy the visual foreground.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Search the public product catalog from the global search field on product home and `/main`.
- Scan home deal-card product names, prices, and struck prices.
- Open the header inventory dialog from the header menu on product home and `/main`.
<!-- design-md:claim-end -->

### Audience

The official company profile identifies customers and sellers as distinct marketplace stakeholders.

The following no-invented-personas, stakeholder-group, and task-context reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The reference does not invent named personas. Use those stakeholder groups only. Independently verified user outcomes are the three captured tasks above. Seller consoles, advertising tools, and any product-specific persona work need task-specific research beyond this public capture.

### Distinctive traits

- White public-product canvas with `#111111` foreground and `#666666` body text
- Brand red `#ff0038` as observed product-route text and border color, including the home deal-card rate sample
- `Noto Sans KR` as the loaded UI family; `Lato New` on observed deal-card prices; `11StreetGothic` as a loaded brand face with a separately published official 11번가 고딕 asset
- Transparent 44px global search that turns `#111111` in captured focus and pressed samples
- White 50px billboard control with `#999999` text, `#eeeeee` border, and 50px radius
- Home deal card with a two-layer shadow and 4px corners

The following filled-CTA non-promotion reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The capture does not establish that observed `#ff0038` as a universal filled CTA background.

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not 11st-authored or a separately published UI specification.

1. **Guide the shopping journey.** The company describes a platform spanning search, information, and purchase. *UI implication:* make observed product information easy to scan without inventing a flow.
2. **Keep identity recognizable across surfaces.** The official logo and typeface both use the street-sign motif. *UI implication:* preserve the documented asset boundary rather than copying unobserved campaign treatments.
3. **Support both customers and sellers.** The company profile presents both as stakeholders in the marketplace. *UI implication:* do not collapse a seller or advertising surface into a consumer-product component claim.

The following capture-bound application list is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification.

- Keep public product observations scoped to their captured selector and route.
- Use `Noto Sans KR` for verified public Korean UI text and `Lato New` only where the observed price treatment calls for it.
- Treat the official 11번가 고딕 distribution and its live web use as separate evidence classes.
- Preserve the actual dialog-open provenance when referring to the header inventory layer.

### Avoid

The following items are a derived editorial implementation inference from the verified surfaces; they are not 11st-authored or a separately published UI specification.

- Do not render a declared-only, system, or unresolved family as if it were a loaded 11st product font.
- Do not turn official brand gradients, advertising-guide choices, or company-profile statements into unobserved storefront tokens.
- Do not invent filled CTA, hover, checkout, or responsive variants absent from the collector evidence.
- Do not generalize a card or control from a marketing, documentation, or unobserved authenticated surface.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Canvas** (`#ffffff`): observed white surface on public product routes and the header-inventory dialog.
- **Foreground** (`#111111`): repeated dark text and the focused/pressed global-search foreground.
- **Body** (`#666666`): repeated default text, borders, buttons, list items, and dialog text across home and `/main`.
- **Brand red** (`#ff0038`): observed product-route text and border color, including the home deal-card rate sample. Catalog `primary_color` is this same hex. The following filled-CTA non-promotion reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The capture does not establish it as a universal filled CTA background.
- **Muted** (`#a9a9a9`): home deal-card struck-price text sample.
- **Hairline** (`#eeeeee`): observed billboard-control border on home and `/main`.
- **On-brand** (`#ffffff`): YAML color token. No source-domain use is recorded in the body.

The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. `#999999` is the billboard control’s renderable text field, not general Body or Muted ink. Deal-card price `#111111` and struck-price `#a9a9a9` are that card’s renderable fields; they match Foreground and Muted here but are not merged into a different role.

The following canonicity and omitted-rather-than-reconstructed reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. No sale, success, selected, promotional, or filled-CTA color is canonical in this pass. Legacy `#F43142` as a discount token is not substantiated by the supplied 2026 capture and is omitted rather than reconstructed.

### Spacing

YAML captured spacing values: 4, 8, 12, and 20.

The following unitless-scale reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. These are unitless token numbers, not a px scale.

### Shape

- Square: `0px` (global search; header-inventory dialog)
- Card: `4px` (home deal card)
- Billboard control: `50px`
- YAML `rounded.circular`: 9999

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. 4px deal-card corners and 50px billboard-control corners are local geometry, not a universal radius scale. YAML 9999 has no captured use in the body.

### Elevation

The observed deal-card sample has `rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px`. The observed billboard control and header-inventory dialog have `box-shadow: none`. The following not-an-elevation-scale reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. These route-local facts do not form an elevation scale.

### Motion

No duration, easing curve, or transition property was observed in the supplied evidence. The following dialog-open-not-animation reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The dialog-open interaction proves that the layer can be expanded on the captured routes, not how it should animate. No motion token is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not 11st-authored or a separately published UI specification: official asset versus live web use as related but distinct facts; Lato New not substituted for Hangul UI text; not promoting Arial, Roboto, or 돋움 as a 11st brand face; advertising-guide documentation as not a replacement for product-route computed and font-loading evidence.

| Evidence class | Resolution |
|---|---|
| Live product computed use | `Noto Sans KR` is loaded/high confidence with 727 visible uses across body, buttons, cards, dialogs, headings, inputs, list items, and text. Its visible computed family is corroborated by loaded FontFaceSet entries and eight 11st-hosted WOFF/WOFF2 sources. It is the UI family token. |
| Live product numeric/card use | `Lato New` is loaded/high confidence with 57 visible card uses and six 11st-hosted WOFF/WOFF2 sources. It is recorded for the observed price treatment, not substituted for Hangul UI text. |
| Live product brand-face use | `11StreetGothic` is loaded/high confidence with 16 visible body/text uses and two 11st-hosted WOFF sources. The official brand page separately publishes 11번가 고딕 Light, Regular, and Bold and states the ownership and free-use conditions. The official asset and its observed web use are related but distinct facts. |
| Declared-only | `11StreetGothicBold`, `Lato`, `Lato all`, and `Helvetica Neue` have declarations but no visible captured use. They remain declared-only. |
| System or unresolved | Arial and Roboto remain system classifications; 돋움 has computed occurrences without a matching loaded FontFace or known system mapping and remains unresolved. None is promoted as a 11st brand face. |
| Advertising documentation | The official advertising-production guide allows 11Street Gothic-Kor and Noto Sans CJK KR for PC and mobile, with other limited numeric conventions. The source classifies that guide as documentation for advertising materials, not a replacement for the product-route computed/font-loading evidence above. |

### Family

- **Current visible UI family:** `Noto Sans KR`
- **Observed numeric/card family:** `Lato New` (deal-card price and struck price; not Hangul UI)
- **Loaded brand face:** `11StreetGothic`, related to but distinct from the official 11번가 고딕 distribution
The following UI-family canonicity reading, and the related-but-distinct reading of loaded `11StreetGothic` versus the official 11번가 고딕 distribution, is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. Do not replace unavailable or unobserved brand type with `Noto Sans KR`. It is canonical here because computed visible use and loaded FontFace/source evidence agree.

### Type roles

Verified line-height values are the unitless YAML ratios `1.50`, `2.44`, and `1.85`. The legacy body table also recorded computed line-height at those captured sizes.

The following ratio-versus-px reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The ratios scale with font size and are not fixed px. Those px figures are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Size-local observation | Surface boundary |
|---|---|---:|---:|---:|---|---|
| Product body/chrome | Noto Sans KR | 14px | 400 | 1.50 | 21px | Repeated public product-home body, list, button, and dialog samples |
| Global search | Noto Sans KR | 18px | 400 | 2.44 | 44px | Public product-home search input. YAML also records height `44px`; that is the control height, not a replacement for ratio `2.44`. |
| Deal-card price | Lato New first | 16px | 400 | 1.50 | 24px | Home `.c-card-item__price` |
| Deal-card struck price | Lato New first | 13px | 400 | 1.85 | 24px | Home `.c-card-item__price-del` |

### Assets

The following identity-asset and font-distribution boundary reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification.

- Catalog logo metadata is a third-party Google favicon lookup (`https://www.google.com/s2/favicons?domain=11st.co.kr&sz=128`), not a captured first-party 11st mark.
- Official 11번가 고딕 Light, Regular, and Bold are published on the brand page with ownership and free-use conditions. The official brand page says that downloadable family was tested for shopping words, numbers, punctuation, device environments, spacing, and readability, with the sign motif incorporated into its letterforms. Those brand and typeface statements explain the identity; they do not expand the observed public web component contract. That distribution is a font asset, not a storefront token, and is distinct from the loaded `11StreetGothic` web face.
- The official logo’s street-sign motif and orange-red-pink gradient are identity context. They are not unobserved storefront fill, CTA, or product-status tokens.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| Observed state | Treatment | Evidence boundary |
|---|---|---|
| Search default | Transparent field, `#666666` text, 44px height | Public home and `/main` selector-backed sample |
| Search focus | `#111111` foreground | Captured pseudo-state only |
| Search pressed | `#111111` foreground | Captured pseudo-state only |
| Header inventory dialog open | White, square, `#666666` text dialog | Two collector interaction expansions on home and `/main` |

The following omitted-rather-than-synthesized / variant-limit reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. No empty, loading, validation, disabled, cart, order, error, toast, or success state was captured, so none is specified. Those visual treatments are omitted. No filled primary/ghost CTA, 25px search tab, 8px universal product-card radius, hover elevation, generic mobile breakpoint, checkout/cart state, or motion token from earlier catalog claims is included: the supplied 2026 capture does not substantiate those values or variants.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus and pressed observations on Global Search stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact label, action, request, or outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Deal Card and Header Inventory Dialog have no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted.

### Global Search

- Role: public product-home and `/main` global search field
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `transparent`
- Text: `#666666`
- Radius: `0px`
- Height: `44px`
- Font: `18px / 400 Noto Sans KR`
- Observed: default, plus captured focus and pressed foreground samples. YAML: focus and pressed samples change foreground to `#111111`; no flow transition inferred.
- Surface: product home and `/main`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on public home and `/main` |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | This field’s role is catalog query entry; results loading is not a state of the input |
| error | not-applicable | A catalog search field is not a validated form field; field-level error is not this control’s meaning |
| success | not-applicable | Submitting a query is not a success confirmation on the input |

Additional observed named states: generic `Focus` — foreground `#111111` in the captured focus sample; generic `Pressed` — foreground `#111111` in the captured pressed sample. These are not `focus-visible` evidence.

### Billboard Control

- Role: public home and `/main` billboard control
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#ffffff`
- Text: `#999999`
- Border: `1px solid #eeeeee`
- Radius: `50px`
- Height: `50px`
- Font: `17px / 400 Noto Sans KR`
- Observed: default only; no interaction transition captured
- Surface: product home and `/main`
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. `#999999` is this control’s renderable foreground, not general Body `#666666` or Muted `#a9a9a9`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on public home and `/main` |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A billboard control can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control as a public home and `/main` billboard control with selector and default styling only; exact label, action, request, and outcome are unresolved, so those three fields stay omitted at this boundary rather than closed.

### Deal Card

- Role: home deal card
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Text: `#666666`
- Radius: `4px`
- Shadow: `rgba(0,0,0,0.06) 0px 2px 10px -2px, rgba(0,0,0,0.28) 0px 0px 1px`
- Observed: default only; no hover contract captured. 16 observed occurrences.
- Surface: home
- Price field: `#111111`, `16px / 400`, `Lato New` first
- Struck-price field: `#a9a9a9`, `13px / 400`, `Lato New` first

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted. The card’s observed price and struck-price are those fields; no hover, selection, loading, or purchase state is claimed for this card.

### Header Inventory Dialog

- Role: header inventory dialog opened from the header menu
- Type: dialog
- Anatomy: dialog
- Background: `#ffffff`
- Text: `#666666`
- Radius: `0px`
- Font: `14px / 400 Noto Sans KR`
- Observed: dialog-open after the menu trigger on home and `/main`. Two collector interaction expansions.
- Surface: product home and `/main`

Kind omitted. The source records dialog-open geometry and no interactive-kind evidence for the dialog surface itself, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared. The collector does not establish further dialog variants, focus management, close behavior beyond the observed close control, or a generic overlay pattern.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied evidence covers three public desktop routes at `1440×900`. It establishes a 44px search input, 50px billboard control, repeated header/list chrome, and the observed deal-card samples above. It does not establish a reusable grid width, breakpoint range, mobile composition, category hierarchy, seller tool, cart, checkout, or account layout. The following omitted-rather-than-inferred reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. Those layout absences are deliberately omitted rather than inferred from an open-market category.

No responsive capture was supplied. The only verified viewport is `1440×900`; no breakpoint, touch-target, mobile navigation, or image-resizing rule is recorded.

The following desktop-measurement reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. The 44px search input, 50px billboard control, and deal-card samples are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official company profile describes 11st as a commerce platform that connects product search, information, purchase, and customer life.

The following public-facing content-direction reading is a derived editorial implementation inference from the verified surfaces; it is not 11st-authored or a separately published UI specification. Keep public-facing content practical, product-specific, and clear about the next shopping action. This is a content-direction reading of the official profile, not a capture of checkout, service-recovery, or notification copy.

Current checkout, service-recovery, and notification copy were not captured.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent:

- filled CTA background for `#ff0038`; sale, success, selected, and promotional colors
- legacy `#F43142` discount token, filled primary/ghost CTAs, 25px search tab, 8px universal product-card radius, hover elevation, generic mobile breakpoints, checkout/cart states, and motion tokens from earlier catalog claims
- hover, pressed, disabled, loading, error, success, empty, skeleton, validation, cart, order, toast, and form-error visual treatments except the named search focus/pressed foreground samples
- `focus-visible` visual treatments (generic `Focus` and `Pressed` on Global Search are different observations)
- reusable grid, breakpoints, mobile composition, category hierarchy, seller-tool, cart, checkout, and account layout
- checkout, service-recovery, and notification copy (source §10 boundary; not a capture of those domains)
- declared-only `11StreetGothicBold`, `Lato`, `Lato all`, `Helvetica Neue`; system Arial and Roboto; unresolved 돋움
- YAML `rounded.circular` 9999 use; YAML `on-brand` source-domain use
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five
- native-app, seller-console, logged-in order-flow, and advertising-material typography as product-route tokens
