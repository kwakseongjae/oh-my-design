# Airbnb Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The following product-story reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Airbnb is a global marketplace for homes, experiences, and services, built around the idea that travel can be organized through people and place rather than a conventional hotel inventory.

This contract covers three current first-party public surfaces: the public marketplace (`https://www.airbnb.co.kr/`), the official Summer Release Newsroom (`https://news.airbnb.com/product-releases/airbnb-2026-summer-release/`), and official Help (`https://www.airbnb.com/help/article/2503`). Airbnb Brand Hub (`https://brand.withairbnb.com`) is identity and asset-use guidance. Catalog homepage metadata is `https://www.airbnb.com`. Treating that catalog URL as not a substitute for the captured `.co.kr` marketplace route is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification.

The following evidence-domain reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Marketplace UI, Newsroom editorial presentation, Help content, official brand assets, and native-app behavior remain separate evidence domains.

The following visual-signature reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. The current public product is photography-led: a white canvas, near-black type, restrained gray controls, and compact category navigation leave most of the emotional work to destinations, hosts, and activities. The Bélo and Rausch identify the brand; photographs, host offerings, and local context create the actual variety. Rausch pink (`#ff385c`) still appears as an identity accent on the current marketplace, but neutral structure carries the majority of the inspected interface. Airbnb Cereal is the strongest repeatable visual signature.

`Airbnb Cereal VF` was loaded and used across 973 visible marketplace and Help elements; the Newsroom loaded its `Cereal` family across 68 elements.

The following 2026-product and causal reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. The 2026 product story broadens that marketplace. Airbnb's official Summer Release introduces new search and planning work across homes, experiences, services, and adjacent travel needs, while the Help surface continues to explain the platform as a connected set of guest, host, and service-provider journeys. Homes remain the marketplace foundation; experiences and services bring more of a trip into the same discovery environment. Official Brand Hub and the Summer Release provide identity and product-story context; they do not by themselves supply marketplace component geometry.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Explore homes, experiences, or services on the public marketplace.
- Present and manage an offering as a host.
- Seek official Help before or after a booking-related task.
<!-- design-md:claim-end -->

### Audience

The following audience-application reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. First-party material establishes task contexts only. No independently verified persona set with names, ages, income, trip frequency, team structure, or success metrics is promoted. Observable work follows the three primary tasks: a guest exploring homes, experiences, or services; a host presenting and managing an offering; a traveler seeking official Help before or after a booking-related task.

### Distinctive traits

The following trait readings (photography-first hierarchy, Rausch-as-accent, Cereal span, pill/circle geometry, evidence-domain split) are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification.

- Photography and place content lead; UI neutrals stay deliberately quiet
- Rausch `#ff385c` is a current identity accent, not an inferred fill for every CTA
- Airbnb Cereal VF spans navigation, headings, lists, inputs, and controls (973 visible uses)
- 20–32px pill geometry for public actions and search; full circles for icon controls
- Separate visual domains for marketplace, Newsroom, Help, brand assets, and native product

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification.

1. **Let the place lead.** UI should frame photography and real offerings rather than compete with them.
2. **Make discovery approachable.** Rounded geometry and direct language reduce perceived complexity.
3. **Reserve brand voltage.** Identity color should clarify ownership or a verified high-value role, not decorate every action.
4. **Keep evidence domains explicit.** Marketplace, editorial, support, brand, and native surfaces cannot silently substitute for one another.

The following capture-bound application list is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification.

Capture-bound application:

- Use Airbnb Cereal only when an authorized source can load it.
- Keep the neutral marketplace hierarchy and photography-first composition.
- Preserve Rausch as identity evidence while assigning component roles only from current capture.
- Separate marketplace, Help, Newsroom, brand, and native evidence.

### Avoid

The following Don'ts include source-stated prohibitions and retained capture-bound doctrine. Those judgements are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification.

- Do not recreate old Reserve, Luxe, Plus, error, or shadow tokens from memory.
- Do not turn Rausch into a default fill for every control.
- Do not promote a Newsroom cookie button or Help row as a marketplace product primitive.
- Do not substitute system UI fonts and label the result Airbnb Cereal.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following semantic-role and omission readings are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification.

- **Identity accent** (`#ff385c`): currently observed on the marketplace; retained as Airbnb's primary identity color without inventing a universal component role.
- **Canvas** (`#ffffff`) and **foreground** (`#222222`): the dominant marketplace and Help pairing.
- **Secondary** (`#6a6a6a`): category labels and supporting marketplace text.
- **Disabled** (`#c1c1c1`): disabled circular-control content.
- **Surface** (`#f2f2f2`): compact circular controls and quiet utility surfaces.
- **Soft search surface** (`#ebebeb`): current 66px marketplace search shell.
- **Divider** (`#dddddd`): official Help list-row separation.

The following editorial-domain and omission readings are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification. Newsroom-local black/white controls and `#f7f7f7` panels remain editorial-domain observations. Earlier Luxe, Plus, error, legal-link, and generic semantic colors are omitted because the current inspected surfaces did not establish those roles. Rausch remains a current identity accent; no universal red CTA geometry is promoted without matching current component evidence.

### Spacing

Repeated captured values: 4, 8, 16, 24, and 32. YAML `lg` 24 is Help-surface evidence (the Help list-row uses `24px 0` padding). 8px, 16px, 24px, and 32px also appear as component measurements. Reading those clusters as captured local measurements rather than a strict mathematical scale is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification.

### Shape

- Control: 8px
- Search: 32px
- Hosting action: 20px
- Full circle: 9999px
- Help list row: 0px
- Card: 12 (YAML `rounded.card`; no component in this packet records that radius as a px measurement)

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Use 32px search-shell geometry as a role-specific container, not a universal pill. 20–32px pill geometry is for public actions and search; full circles are for icon controls. These are captured local geometry, not a universal radius scale.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. The current marketplace components promoted here are flat. Newsroom consent UI exposed an 8px panel with a strong `0 8px 28px rgba(0,0,0,.28)` shadow, but that cookie-specific surface is not a general Airbnb product elevation token.

### Motion

No reusable duration or easing curve is promoted. The following motion-availability reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Captured interaction states establish state availability, not a universal Airbnb motion token.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | First-party marketplace and Help surfaces establish Airbnb Cereal as Airbnb's public product family. |
| Live surface-use | Airbnb Cereal VF loaded/high with 973 visible uses; Cereal loaded/high with 68 Newsroom uses. |
| Official distributed asset | Cereal is delivered as a first-party webfont but is not represented as a freely installable or redistributable asset. |
| Declared-only | Cereal Italic and HE/JP/KR/Thai variable families were declared on the Newsroom but had zero visible use in this capture. |
| Unresolved claim | Authenticated booking flows, native apps, and locale-specific runtime overrides remain unresolved. This is a captured but uncorroborated unresolved claim, not a promoted family. |

### Family

- **Current visible UI family:** `Airbnb Cereal VF`
- **Editorial Newsroom family:** `Cereal`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Do not render Circular, system-ui, or another sans as though it were Airbnb Cereal. If the authorized font cannot load, preserve metadata and omit the specimen.

### Type roles

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Marketplace section title | Airbnb Cereal VF | 22px | 500 | 1.18 | Repeated public marketplace section heading |
| Marketplace body/list | Airbnb Cereal VF | 14px | 400 | 1.43 | Marketplace body and list text |
| Marketplace action/tab | Airbnb Cereal VF | 14px | 500 | 1.29 | Marketplace tabs and compact actions |
| Help reading text | Airbnb Cereal VF | 16px | 400 | 1.5 | Help article body and long-form list content |
| Newsroom editorial copy | Cereal | 18px | 400 | 1.56 | Newsroom editorial copy |

Verified line-height values are the unitless ratios above (YAML `lineHeight` 1.18, 1.43, 1.29, 1.5, 1.56). They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes: 26px, 20.02px, 18px, 24px, and 28px. Those px figures are size-local observations, not replacements for the ratios. 22 × 1.18 = 25.96, so the title 26px is a rounding. 14 × 1.29 = 18.06, so the action 18px is a rounding. 18 × 1.56 = 28.08, so the Newsroom 28px is a rounding. Body 14 × 1.43 = 20.02 and reading 16 × 1.5 = 24 match the computed px.

### Assets

The following asset-application boundary is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Catalog logo metadata is Simple Icons identity (`airbnb`), not a captured first-party mark. Official DS name Airbnb Brand Hub is identity and asset-use guidance; public marketplace, Newsroom, Help, and native-product evidence remain separate domains from the three-surface measurements.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Marketplace circular controls expose focus, hover, pressed, and disabled states. Category navigation exposes selected/tab-selected states. Search shells expose hover and pressed behavior. Booking loading, error, success, authentication, and empty states remain absent.

The following omission and input-boundary readings are a derived editorial implementation inference from the verified surfaces; they are not Airbnb-authored or a separately published UI specification. Red Reserve buttons, listing cards, modal dialogs, badges, inputs, and booking states are not promoted without a current inspectable path that establishes their exact role and geometry. The search shell's inner text input is transparent; it is not a separate promoted input component.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; those observations stay as additional observed states, and the `focus-visible` visual treatment remains unresolved. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind or a generic specimen name. Where exact selector, label, destination, request, or outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed as navigation or local-action outcome. This is not a complete state-coverage claim.

The Help list row has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Hosting action

- Role: current public hosting entry action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#222222`
- Radius: 20px
- Padding: `11px 12px`
- Height: 40px
- Font: 14px / 500 / Airbnb Cereal VF
- Observed: pressed observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public hosting entry action |
| hover | applicable | Pointer-web hosting entry; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A hosting entry action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control only as current public hosting entry action; exact selector/label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as navigation or local-action outcome.

Additional observed named state: pressed. No pressed visual is promoted as a system token.

### Category tab

- Role: current public category navigation
- Kind: interactive
- Type: tab
- Anatomy: tab
- Background: transparent
- Text: `#6a6a6a`
- Radius: 8px
- Padding: `0 16px`
- Font: 14px / 500 / Airbnb Cereal VF
- Observed: selected and tab-selected; selected text resolves to `#222222`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected category tab captured |
| hover | applicable | Pointer-web category tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A public category tab selects a category; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed states: selected and tab-selected. Selected text resolves to `#222222`.

### Circular icon action

- Role: current compact circular marketplace control
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#f2f2f2`
- Text: `#222222`
- Radius: 9999px
- Size: 28px
- Observed: hover and pressed observed

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the compact circular marketplace control |
| hover | applicable | Pointer-web circular control; hover observed; treatment value omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact circular marketplace control can be unavailable; the disabled sibling records the captured disabled visual |

Loading, error, and success applicability are omitted. Source records this control only as current compact circular marketplace control; exact selector/label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as navigation or local-action outcome.

Additional observed named state: pressed. No pressed visual is promoted as a system token.

### Disabled circular icon action

- Role: disabled compact circular marketplace control
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#f2f2f2`
- Text: `#c1c1c1`
- Radius: 9999px
- Size: 28px
- Observed: disabled, focus, hover, and pressed captured. `#c1c1c1` is this control's renderable content color. Reading that field as not a general secondary text role is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as this component's default, which is the disabled sibling appearance |
| hover | applicable | Pointer-web circular control; hover captured; treatment value omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Captured as the disabled compact circular marketplace control |

Loading, error, and success applicability are omitted. Source records this control only as disabled compact circular marketplace control; exact selector/label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as navigation or local-action outcome.

Additional observed named states: generic `focus`, hover, and pressed. Generic `focus` is not `focus-visible` evidence.

### Search shell

- Role: current public marketplace search shell
- Kind: interactive
- Type: input
- Anatomy: shell with a transparent inner text input
- Background: `#ebebeb`
- Text: `#222222`
- Radius: 32px
- Height: 66px
- Font: 14px / 500 / Airbnb Cereal VF
- Observed: hover and pressed observed on the shell; inner text input remains transparent

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public marketplace search shell |
| hover | applicable | Pointer-web search shell; hover observed; treatment value omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search shell can be unavailable; visual treatment omitted |
| loading | not-applicable | This shell's role is public marketplace search; in-progress search is not a state of the shell |
| error | not-applicable | A marketplace search shell does not report a request or validation failure of its own |
| success | not-applicable | Submitting a search is not a success confirmation on the shell |

Additional observed named state: pressed on the shell. No pressed visual is promoted as a system token.

### Help list row

- Role: current official Help article list row
- Type: listItem
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: list row
- Background: transparent
- Text: `#222222`
- Border: `0 0 1px #dddddd`
- Radius: 0px
- Padding: `24px 0`
- Font: 14px / 400 / 20.02px / Airbnb Cereal VF
- Use: official Help article list row only. Treating this Help row as Help-domain only, not a marketplace product primitive, is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout-purpose reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Give photography the largest visual area and keep utility controls compact. Build hierarchy with white space, type weight, and neutral surfaces before shadows. Use 32px search-shell geometry as a role-specific container, not a universal pill. Keep marketplace category navigation horizontally scannable and stateful. Treat Help and Newsroom layout measurements as domain-local unless a shared implementation is directly verified.

The following cross-viewport reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. The inspected public surfaces maintain large media areas, horizontally navigable category controls, compact circular actions, and reflowing text. Exact native-app breakpoints, authenticated booking layouts, and locale-specific truncation behavior remain unresolved.

Reading those control heights as capture-local measurements rather than cross-viewport specifications is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. The 40px hosting action, 28px circular icon controls, and 66px search shell are measurements from the inspected public surfaces, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and application reading is a derived editorial implementation inference from the verified surfaces; it is not Airbnb-authored or a separately published UI specification. Airbnb's current public language is welcoming, concrete, and action-oriented. It names a place, activity, service, or next step directly and allows imagery to carry aspiration. Marketplace labels should help a guest compare location, timing, category, or offering without unnecessary travel jargon. Host-facing language should make responsibility and next steps clear. Help content becomes procedural and explicit; Newsroom content becomes explanatory and product-led. Safety and policy language should remain direct, specific, and calm. Avoid generic luxury language, exaggerated belonging claims, and unsupported outcome metrics. No synthetic voice samples are promoted.

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

- authenticated booking flows, native apps, and locale-specific runtime overrides
- exact native-app breakpoints, authenticated booking layouts, and locale-specific truncation
- booking loading, error, success, authentication, and empty visual treatments
- Red Reserve buttons, listing cards, modal dialogs, badges, inputs, and booking states as canonical components
- hover, pressed, and generic-focus visual treatments (observed availability is not a promoted token)
- focus-visible visual treatments; generic `focus` on the disabled circular control is a different observation
- Help list-row interactive kind
- YAML `rounded.card` 12 as a captured component radius
- Newsroom cookie-panel shadow as a product elevation token
- Newsroom `#f7f7f7` panels as marketplace surfaces
- earlier Luxe, Plus, error, legal-link, and generic semantic colors
- Circular, system-ui, or another sans as the Airbnb Cereal face
- Cereal Italic and HE/JP/KR/Thai variable families as visible UI faces
- redistributable webfont grant
- exact motion duration, easing, animation name, transition properties, and reduced-motion behavior until per-component computed observation of all five kinds exists; captured interaction states are not a universal animation token
