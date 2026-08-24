# Coupang Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Coupang is a commerce and services company whose customer-facing Korean storefront is built around a broad catalog and a compact global header. This contract covers the live commerce capture only: the homepage and two product URLs. The product URLs exposed only minimal document chrome in this collector run. The captured storefront presents a white field, black text, pale gray dividers, a prominent search field, and small utility navigation rather than a published consumer design system.

The company’s marketing and careers material is a different domain. Coupang describes its broader aim as making shopping, eating, and living easier, and as building the future of commerce; its careers material frames the desired outcome as customers wondering how they lived without Coupang. Coupang Careers and the Coupang Newsroom are corporate/editorial sources; they are not token sources for the commerce UI. They do not license an inferred brand palette or a generic e-commerce component library.

Corporate media guidance governs downloadable marks and logo treatment. That guidance is separate from the captured storefront tokens. No public source collected in this pass authorizes treating a marketing color, logo asset, or a careers-font deployment as a commerce-app token. Coupang Sans is confirmed only for corporate/careers use. It is not a loaded commerce webfont in this capture.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Search the Korean commerce homepage catalog from the header search field.
- Use the compact header menu and account-utility items on the homepage.
<!-- design-md:claim-end -->

### Audience

No first-party persona research was collected for this reference. Do not fabricate customer archetypes or demographic facts. No individual personas are promoted. Observable work follows the two captured homepage tasks: people searching the catalog and using compact header menu and account-utility controls.

### Distinctive traits

- White commerce header and canvas with black default text
- Pale gray `#e5e7eb` divider/border chrome
- Search-led header with compact utility and menu controls
- Square default geometry: sampled controls and inputs have 0px radius
- System-font rendering on the captured commerce surface, separate from Coupang Sans on official corporate/careers surfaces

### Principles

The three numbered items below are first-party careers and leadership language. The *UI implication* notes are a derived editorial implementation inference; they are not Coupang-authored or a separately published UI specification.

1. **Wow the customer.** Coupang says the customer is the beginning and end of decisions. *UI implication:* connect a product claim to a clear user outcome; do not claim more product behavior than the evidence records.
2. **Simplify.** The company’s published leadership principles call complexity an enemy of scale, speed, and customer experience. *UI implication:* preserve a clear default hierarchy before adding optional surface variants.
3. **Move with urgency.** Coupang describes timely action as a leadership value. *UI implication:* use concise, actionable language where official product copy is available; otherwise leave the copy unspecified.

Capture-bound application:

- Keep the observed commerce header canvas white with black text and pale gray hairlines when recreating this captured state.
- Treat Apple SD Gothic Neo as an operating-system stack on this surface, not a Coupang webfont.
- Keep components constrained to their recorded selector, route, and default state provenance.
- Apply the official media-assets rules when using downloaded Coupang logos or marks.

### Avoid

- Do not infer a consumer CTA color from Coupang’s logo, media assets, or third-party color directories.
- Do not use Coupang Sans as a commerce UI font without product-surface and font-source corroboration.
- Do not add hover, focus, pressed, selected, error, or responsive variants from this evidence set.
- Do not reuse corporate/careers or newsroom visual chrome as storefront evidence.
- Do not add a red CTA, product card, delivery badge, font substitution, or interaction state unless separately evidenced.
- Do not substitute Pretendard, Inter, or another webfont and label it as Coupang.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Observed live commerce surface:

- **Canvas** (`#ffffff`): Observed background on the header menu control and search input.
- **Foreground** (`#000000`): Dominant observed text color across all three captured routes.
- **Muted foreground** (`#555555`): Repeated home-surface text color; no semantic role was observed.
- **Secondary foreground** (`#333333`): Repeated home-surface text color; no semantic role was observed.
- **Account foreground** (`#212b36`): Observed on the home account-area list item. This is that control’s renderable field, not general Ink.
- **Hairline** (`#e5e7eb`): Repeated border color in the collector output.

No live computed Coupang-red fill, WOW color, semantic status color, or hover/pressed value was present in the supplied capture. Those values are omitted rather than inferred from logos, screenshots, or third-party color lists. The live commerce capture does not corroborate legacy `#E94B22`.

### Spacing

YAML captured spacing values: 1, 5, 10, 12, 14, 16, 20, and 24 (account-gap). Observed component-local spacing includes `0px 5px` menu-item padding, `0px 16px` menu-control padding, and `0px 24px` account-item margin. Product-grid columns and card spacing are not asserted.

### Shape

Square default geometry. Sampled controls and inputs have 0px radius. YAML `rounded.none` is 0. This is the captured local default, not a universal radius scale.

### Elevation

The representative captured controls have `box-shadow: none`. YAML `shadow.none` is `none`. No elevated component or overlay state is retained.

### Motion

No motion, transition, or interaction state was captured. No motion duration, easing curve, animation name, or reduced-motion behavior is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The captured commerce pages resolve to Apple SD Gothic Neo followed by Korean/Japanese/Chinese and common sans fallbacks. The collector classifies it as a high-confidence operating-system stack (155 uses), with no loaded FontFaceSet match or @font-face source URL. It is documented as system use, not a Coupang-owned UI font token. |
| Official product/corporate-use | Coupang’s Newsroom says its BX team created **Coupang Sans**, applied it to the corporate homepage and careers site, and split it into Display and Text families. This is official corporate/careers use; it does not establish use on the captured commerce storefront. |
| Official distributed asset / license | No downloadable font file or font-license terms were found in the official material reviewed for this pass. Coupang’s media-assets license covers marks and logos, not a font license. |
| Unresolved claim | Times appeared eight times in the captured product URL documents but has no FontFaceSet/source corroboration and is not promoted. This is a captured but uncorroborated unresolved claim, not a promoted family. |

Do not substitute Pretendard, Inter, or another webfont and label it as Coupang. Coupang Sans is useful brand context only until a product surface and loaded source corroborate it for that surface.

### Family

- **Current visible UI family:** operating-system stack, Apple SD Gothic Neo first, then Korean/Japanese/Chinese and common sans fallbacks
- **Loaded source boundary:** no FontFaceSet match and no @font-face source URL on the captured commerce surface
- **Coupang Sans:** corporate/careers context (Display and Text). Not a commerce UI token in this capture
- Do not present this system stack as a Coupang-owned webfont, and do not present a substitute family as Coupang

### Type roles

Verified line-height values are the unitless YAML ratios `1.5` and `1.25`. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes. Those px figures are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Size-local observation | Surface boundary |
|---|---|---:|---:|---:|---|---|
| Default body | system stack | 16px | 400 | 1.5 | 24px | Commerce home surface |
| Search field | system stack | 14px | 400 | 1.5 | 21px | Commerce home surface |
| Utility text | system stack | 12px | 400 | 1.25 | 15–32px | Commerce home surface |
| Utility small | system stack | 11px | 400 | 1.5 | 16.5px | Commerce home surface |

12 × 1.25 = 15, so the 15 in the utility `15–32px` range is the ratio product; `32px` is a separate size-local observation. Do not replace `1.25` with a fixed px.

### Assets

- Storefront favicon: `https://www.coupang.com/favicon.ico`
- Downloaded Coupang logos or marks follow the official Coupang Media Assets Brand Guidelines. That guidance is mark-and-logo treatment, not live product UI.
- Coupang Sans remains corporate/careers brand context. The source describes Display and Text cuts and links the design to speed and legibility, but does not provide a license or establish the font as a loaded commerce-webfont asset.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Only default states were captured. Empty, loading, error, success, skeleton, and disabled require a product-specific observation before specification; those visual treatments are omitted. No product card, checkout CTA, badge, selected, error, focus, hover, pressed, dialog, or mobile-tab variant is specified: none had selector/state provenance in the supplied capture. The live commerce capture does not corroborate legacy `#E94B22`, Pretendard, or any interaction/state variant; these values are intentionally absent. Interactive machine components are omitted because the capture contains no observed interaction state; their measured defaults remain documented below as prose evidence.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`; that applicability stays, and the visual treatment is omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

### Header Menu Control

- Role: home header menu control
- Kind: interactive
- Anatomy: control
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: `0px 16px`
- Height: 32px
- Font: 16px / 400 / system stack
- Observed: default only
- Surface: commerce home

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the commerce home header |
| hover | applicable | Pointer-web header control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header menu control can be unavailable; visual treatment omitted |
| loading | not-applicable | This header menu control operates header chrome; the control itself does not enter a loading state |
| error | not-applicable | Opening or operating the header menu is not a validation or request-failure state on the control |
| success | not-applicable | Header-menu operation is not an action-outcome confirmation on the control |

### Search Submit Control

- Role: home header search submit
- Kind: interactive
- Type: button
- Anatomy: label
- Text: `#000000`
- Radius: 0px
- Height: 20px
- Font: 16px / 400 / system stack
- Observed: default only
- Surface: commerce home

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the home header submit button |
| hover | applicable | Pointer-web submit button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search submit can be unavailable; visual treatment omitted |
| loading | not-applicable | This 20px header submit starts a catalog search; the control itself does not enter a loading state |
| error | not-applicable | Search failure belongs to results, not this submit control |
| success | not-applicable | Finding results is not a success confirmation on the submit control |

### Header Search Input

- Role: header search field on the commerce home surface
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Width: 351px
- Height: 17px
- Font: 14px / 400 / system stack
- Observed: default only
- Surface: commerce home desktop capture

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the home header search input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | This field’s role is catalog query entry; results loading is not a state of the input |
| error | not-applicable | A catalog search field is not a validated form field; field-level error is not this control’s meaning |
| success | not-applicable | Submitting a query is not a success confirmation on the input |

### Header Menu Item

- Role: header navigation menu item
- Kind: interactive
- Type: listItem
- Anatomy: list item
- Text: `#000000`
- Radius: 0px
- Padding: `0px 5px`
- Height: 32px
- Observed: default only. This item was classified as a list item, not a tab.
- Surface: commerce home

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as `gnb-menu-item` on the commerce home header |
| hover | applicable | Pointer-web navigation list item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header menu item can be unavailable; visual treatment omitted |
| loading | not-applicable | A header menu list item navigates; the item itself does not enter a loading state |
| error | not-applicable | List-item meaning is header navigation, not a request or validation failure on the item |
| success | not-applicable | Following the menu item is not an action-outcome confirmation on the item |

### Header Account Utility Item

- Role: home account-area list item
- Kind: interactive
- Type: listItem
- Anatomy: list item
- Text: `#212b36`
- Radius: 0px
- Font: 12px / 400 / system stack
- Height: 59px
- Margin: `0px 24px`
- Observed: default only
- Surface: commerce home
- Field note: `#212b36` is this component’s renderable foreground, not general Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the home account-area list item |
| hover | applicable | Pointer-web account utility item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An account-area item can be unavailable; visual treatment omitted |
| loading | not-applicable | An account-area list item opens account utility; the item itself does not enter a loading state |
| error | not-applicable | Account-utility meaning is the account area, not a request or validation failure on the item |
| success | not-applicable | Opening account utility is not an action-outcome confirmation on the item |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop home capture is 1440px wide. Its verified layout evidence is limited to a 351px search input, compact 32px menu controls, and home-header utility spacing. Product-grid columns, responsive breakpoints, sticky behavior, and card spacing are not asserted because they were not reliably captured across the supplied routes.

No mobile viewport was captured. The source evidence does not support breakpoint, grid, sticky, or touch-target rules. The 32px menu control, 20px search submit, 351px × 17px search input, 32px menu item, and 59px account-utility item are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Coupang’s official careers language is customer-centred, direct, and action-oriented: it describes an aim to “wow” customers, make everyday commerce easier, and build the future of commerce. That is a corporate voice source, not evidence of storefront microcopy.

| Do | Don't |
|----|-------|
| Describe customer outcomes plainly and specifically. | Attribute unobserved commerce labels or error messages to Coupang. |
| Use the official “wow the customer” framing only with its source context. | Turn careers language into a product UI token or interaction claim. |
| Preserve the distinction between corporate and commerce copy. | Invent delivery, checkout, or membership copy. |

Official careers copy, not storefront microcopy:

- “We exist to wow our customers.”
- “How did I ever live without Coupang?”
- “Our mission to build the future of commerce is real.”

Current storefront CTA, error, empty-state, and support-copy rules are unobserved, so no synthetic storefront voice samples are promoted.

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

- Coupang-red fill, WOW color, semantic status color, hover/pressed values, and legacy `#E94B22`
- Coupang Sans as a commerce UI font; downloadable font file and font-license terms
- Times as a promoted family
- empty, loading, error, success, skeleton, and disabled visual treatments
- hover, focus, pressed, selected, dialog, and mobile-tab visual treatments
- product card, checkout CTA, badge, and delivery badge
- product-grid columns, breakpoints, sticky behavior, card spacing, and touch-target rules
- storefront CTA, error, empty-state, and support copy
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five
