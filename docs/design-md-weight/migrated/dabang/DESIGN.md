# 다방 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Dabang (다방) is Station3’s residential-information service. Official service and terms material distinguishes the consumer Dabang service, Dabang Pro for brokers, and Dabang Bangjoo-in for landlords; it also describes a platform where individual users, licensed brokers, and landlords search for or register property information while the relevant parties conduct their own transactions.

The evidence-domain partition and the no-cross-domain rule below are derived editorial implementation inferences from the verified source roles; they are not Dabang-authored or a separately published UI specification. This reconstruction covers the public product home, the public one/two-room map route, and the support FAQ captured on 2026-07-13. Home and map are product surfaces. The FAQ is support-documentation chrome, while Station3’s service page and the terms are narrative and legal context. Values do not cross those domains without specific evidence.

The following visual characterization is a derived editorial implementation inference from the verified surfaces; it is not Dabang-authored or a separately published UI specification. The public web product is utilitarian and task-led: white canvas, dark neutral text, compact outlined controls, loaded `Pretendard Variable`, and route-specific geometry. An 8px header account control, 2px outlined actions, a 32px home-search entry, a 42px map search, and the map-tool rounded token `6` remain distinct instead of being averaged into a universal radius.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the verified surface purposes and official role context; they are not Dabang-authored or a separately published UI specification.

- Search and filter public residential information on Dabang’s home and map routes.
- Register permitted property information as a licensed broker or landlord under the service boundary.
- Read support answers about using the service without treating support chrome as product-map UI.
<!-- design-md:claim-end -->

### Audience

Grouping the official roles as the following audience contexts is a derived editorial implementation inference from the service terms; it is not Dabang-authored or a separately published UI specification.

Official service terms support three role contexts, not demographic personas: property seekers searching public housing information, licensed brokers providing permitted property information, and landlords registering rental listings.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surfaces; it is not Dabang-authored or a separately published UI specification.

- `#ffffff` public canvas with repeated `#222222` foreground and restrained `#dfdfdf` / `#ededed` outlines.
- Map-local action blue `#326cf9`; the catalog identity pink `#ff3478` is not a reusable current product-control token in this capture.
- `Pretendard Variable` loaded with high confidence, visibly used 376 times, and corroborated by 92 Dabang-hosted dynamic-subset WOFF2 URLs.
- Route-specific geometry: 8px account control, 2px outline/dock controls, 32px home search, 42px map search, and the numeric map-tool rounded token `6`.
- Zero captured interaction expansions; static pseudo-state selector copies do not establish behavior.

### Derived implementation principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Dabang-authored or a separately published UI specification.

- Keep product home, product map, support documentation, corporate context, and legal context in separate evidence domains.
- Name the property task and acting role explicitly; distinguish platform information from user-, broker-, or landlord-provided content.
- Keep `#326cf9` bounded to the documented map action context until another product surface verifies a broader role.
- Preserve the measured 32px and 42px search geometries as different route controls.

### Avoid

The following avoidances are derived editorial implementation inferences from the verified surfaces; they are not Dabang-authored or a separately published UI specification.

- Do not promote identity pink `#ff3478` to a universal CTA, marker, or status color.
- Do not turn the FAQ row into a listing, modal, or verified accordion contract.
- Do not infer state treatments from static `hover`, `focus`, or `pressed` selector names.
- Do not substitute a system font as if it were loaded `Pretendard Variable`.
- Do not invent map markers, listing cards, a universal shadow rule, breakpoints, icon geometry, or motion values.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic role names and reuse boundaries in this table are derived editorial implementation inferences from the verified surface records; they are not Dabang-authored or a separately published UI specification.

| Role | Value | Verified boundary |
|---|---|---|
| Canvas / control surface | `#ffffff` | Public home and map |
| Foreground | `#222222` | Repeated home/map text and controls |
| Standard outline | `#dfdfdf` | Header outline action and map dock control |
| Muted surface | `#f5f5f5` | Muted surface and a static header-control hover sample; not a global interaction state |
| Map action | `#326cf9` | Map-route action ink/border and selected-tool treatment only |
| Map search border | `#ededed` | Map location-search field |
| Maximum black | `#000000` | Map dock text and support FAQ row |
| Catalog identity | `#ff3478` | Frontmatter identity metadata only; not a reusable product-control role |

### Spacing

The component-attachment and support-domain judgments below are derived editorial implementation inferences from the verified records; they are not Dabang-authored or a separately published UI specification.

The verified compact scale is `xs: 4`, `sm: 8`, `md: 16`. Component-specific `0px`, `7px`, `8px`, `11px`, `15px`, `16px`, and `37px` padding values remain attached to their components. Support FAQ padding `16px 20px` stays in the support domain.

### Shape

- Compact: 2
- Standard: 8
- Map tool: 6
- Home search entry: 32
- Map location search: 42

The numeric token forms are preserved; component declarations provide their explicit px rendering values.

### Elevation

The component-bounded elevation interpretation below is a derived editorial implementation inference from the selector-backed records; it is not Dabang-authored or a separately published UI specification.

Selector-backed product controls retained in §4 report `box-shadow: none`. This is component-bounded evidence, not a global zero-elevation system. Cards, markers, drawers, and native-app elevation remain outside the captured contract.

### Motion

The motion-promotion and local-extension judgments below are derived editorial implementation inferences from the recorded proof boundary; they are not Dabang-authored or a separately published UI specification.

The supplied artifact contains `interactionCount: 0` and an empty interaction array. No duration, easing curve, animation behavior, or reusable pseudo-state transition is promoted.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion is a local implementation extension rather than verified Dabang behavior, and any such extension must include reduced-motion support.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The evidence-class resolutions and promotion boundaries in this subsection are derived editorial implementation inferences from the verified font records; they are not Dabang-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use announcement | No separate Dabang typography announcement was found in the checked official sources. |
| Live computed surface-use | `Pretendard Variable` is the visible first family on all three captured routes: 376 uses across body, headings, buttons, inputs, lists, and text. |
| FontFace/source corroboration | Loaded/high with 92 Dabang-hosted dynamic-subset WOFF2 URLs under `static.dabangapp.com/web/fonts/pretendard-variable/v1.3.9/`. |
| Official distributed asset | Pretendard’s upstream project distributes the family under SIL Open Font License 1.1; this establishes the font asset, not Dabang use by itself. |
| Other/declaration-only families | No other loaded visible first-family claim is supplied; none is promoted from fallback stacks or plausibility. |
| Unresolved boundary | Native-app metrics and a Dabang-owned font licence/asset are not established. |

### Type roles

| Role | Family | Size | Weight | Line height | Boundary |
|---|---|---:|---:|---:|---|
| Public body/control cluster | Pretendard Variable | 14px | 400 | 24px | Repeated home and map use |
| Public-home section title | Pretendard Variable | 20px | 700 | 32px | Home heading sample |
| Map search/dock control | Pretendard Variable | 14px | 400 | 24px | Map controls |
| Header account control | Pretendard Variable | 16px | 400 | not generalized | Header component value |
| Header outline action | Pretendard Variable | 14px | 700 | 24px in raw proof | Header component value |
| Support FAQ display | Pretendard Variable | 46px | 700 | 70px | Support-documentation only |
| Support FAQ row | Pretendard Variable | 13.3333px | 400 | not established | Support-documentation only |

### Assets

The font-asset and logo-authority boundaries below are derived editorial implementation inferences from the verified sources; they are not Dabang-authored or a separately published UI specification.

- The upstream Pretendard project and SIL Open Font License 1.1 supply the font-project and licence boundary; Dabang-hosted sources plus visible computed use establish this web use.
- Catalog favicon: identity pointer only. Its exact first-party URL remains in provenance and is not promoted into a logo distribution/licence claim.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Dabang-authored or a separately published UI specification.

The four product components have selector-backed default values only. The FAQ row is support chrome. Static pseudo-state selector copies exist for some controls, but the interaction array is empty. Applicability follows component meaning; absence of a capture is not a `not-applicable` reason. Visual treatments without measured evidence remain absent, and state coverage is not claimed complete.

The applicability judgments below are derived editorial implementation inferences from the verified component roles; they are not Dabang-authored or a separately published UI specification. They classify Core §4.4 meaning only and do not promote an unmeasured visual treatment.

### Header account control

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#222222`
- Radius: 8px; padding: `8px 16px`
- Font: `16px / 400 / Pretendard Variable`
- Use: shared public-home account control

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dabang-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selector-backed default treatment |
| hover | applicable | Pointer-web account button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Account action can be unavailable; visual treatment omitted |
| loading | not-applicable | Header account navigation does not carry in-place loading presentation |
| error | not-applicable | Header account navigation does not present validation failure |
| success | not-applicable | Header account navigation does not present completion feedback |

### Header outline action

- Primitive type: button
- Kind: interactive
- Background: transparent in raw proof; text: `#222222`; border: `1px solid #dfdfdf`
- Radius: 2px; padding: `0px 16px`
- Font: `14px / 700 / Pretendard Variable`
- Use: shared public-header outline action

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dabang-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selector-backed default treatment |
| hover | applicable | Pointer-web button; static selector copy supplies no treatment |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Header action can be unavailable; visual treatment omitted |
| loading | not-applicable | Header navigation action does not carry in-place loading presentation |
| error | not-applicable | Header navigation action does not present validation failure |
| success | not-applicable | Header navigation action does not present completion feedback |

### Map location search

- Primitive type: input
- Kind: interactive
- Background: `#ffffff`; text: `#222222`; border: `1px solid #ededed`
- Radius: 42px; padding: `7px 37px 7px 15px`
- Font: `14px / 400 / Pretendard Variable`
- Use: map location-search field

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dabang-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selector-backed default treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; static focus selector is not focus-visible proof |
| disabled | applicable | Location field can be unavailable; visual treatment omitted |
| loading | applicable | Location lookup may be pending; visual treatment omitted |
| error | applicable | A location query may fail or be invalid; visual treatment omitted |
| success | applicable | A location query may resolve; visual treatment omitted |

### Map dock control

- Primitive type: button
- Kind: interactive
- Background: `#ffffff`; text: `#000000`; border: `1px solid #dfdfdf`
- Radius: 2px; padding: `0px 7px 0px 11px`
- Font: `14px / 400 / Pretendard Variable`
- Use: map dock control

The applicability judgments for this component are derived editorial implementation inferences from its verified role; they are not Dabang-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selector-backed default treatment |
| hover | applicable | Pointer-web map control; static selector copy supplies no treatment |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Map control can be unavailable; visual treatment omitted |
| loading | not-applicable | Dock control does not carry data-loading presentation |
| error | not-applicable | Dock control does not present validation failure |
| success | not-applicable | Dock control does not present completion feedback |

### Home search-entry geometry

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved primitive evidence; it is not Dabang-authored or a separately published UI specification.

- Interaction kind / applicability map: omitted; the source establishes geometry but not a primitive contract.
- Background: `#ffffff`; text: `#222222`; border: `1px solid #dfdfdf`
- Radius: 32px
- Use: public-home search entry; retained separately from the 42px map field

### Map tool geometry

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved primitive evidence; it is not Dabang-authored or a separately published UI specification.

- Interaction kind / applicability map: omitted; a reusable primitive contract is not established.
- Action text/border: `#326cf9`
- Radius token: 6; raw top-corner shape is preserved in provenance
- Use: map-local tool treatment only

### Support FAQ row

The support-only classification and decision to omit an interaction kind and applicability map are derived editorial implementation inferences from the verified source domain; they are not Dabang-authored or a separately published UI specification.

- Interaction kind / applicability map: omitted; the source records a documentation row, not an accordion contract.
- Background: transparent; text: `#000000`
- Block-end border: `1px solid #f5f5f5`
- Padding: `16px 20px`
- Font: `13.3333px / 400 / Pretendard Variable`
- Use: support-documentation FAQ row only

### Observed-state record

| Evidence area | Recorded state boundary |
|---|---|
| Header account and outline controls | Default visual values only |
| Map location search and dock control | Default visual values only |
| Support FAQ row | Default documentation-row values only |

No reusable pressed, empty, skeleton, menu, dialog, or toast treatment is established.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping, reuse, and unresolved-contract judgments below are derived editorial implementation inferences from the verified route captures; they are not Dabang-authored or a separately published UI specification.

- Home and map are distinct compositions: home retains a 32px-radius search entry, while the map uses a 42px location field and compact 2px dock controls.
- Repeated spacing supports only the conservative `4 / 8 / 16px` set; it does not establish a full grid, rail width, map-canvas percentage, or breakpoint contract.
- The FAQ has separate support-documentation layout and `16px 20px` row padding; do not reuse that as map or listing-card spacing.
- All three routes were captured at 1440×900. Mobile breakpoints, map drawer behavior, native safe areas, and alternate-viewport listing density remain unresolved.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction, content-source rules, and avoidances below are derived editorial implementation inferences from verified official service and terms language; they are not Dabang-authored or a separately published UI specification.

Official service context centers on housing information and the roles of people who search, list, and manage property. Use practical, role-aware language: name the property task, state the next action, and distinguish platform-provided information from content entered by a user, broker, or landlord. The service terms establish that Dabang is not itself a party to users’ property transactions.

Avoid campaign-like promises, demographic stereotypes, vague conversion language, or language implying that the platform is a transaction party. No broader locale, formatting, or error/recovery copy system is established by the captured web surfaces.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Dabang-authored or a separately published UI specification.

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

- authenticated search, listing-detail, transaction, selected-listing, marker, and map-drawer contracts
- reusable card/listing, modal, menu, dialog, toast, and native-app component systems
- measured component visual treatments beyond the recorded defaults
- mobile breakpoints, rail/grid dimensions, native safe areas, and alternate-viewport density
- verified motion properties, names, durations, easings, and reduced-motion behavior
