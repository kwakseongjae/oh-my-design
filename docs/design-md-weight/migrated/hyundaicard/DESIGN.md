# Hyundai Card Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Hyundai Card is a Korean credit-card company whose identity reaches beyond payment products into card design, cultural programming, and branded libraries. This contract covers the three first-party web surfaces the source inspected for tokens: the current product home at `https://www.hyundaicard.com/index.jsp`, and the two corporate-information routes at `https://www.hyundaicard.com/about/ceh/ho/cehho0101_01.hc` and `https://www.hyundaicard.com/about/ckh/ho/ckhho0101_01.hc`. The source token-set note records that current product home and corporate-information surfaces are separate from DIVE, marketing, and unobserved interaction states. Official pages named for brand context — Hyundai Card’s branding through typeface, the company overview, and the Hyundai Card Design Library — do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those three inspected routes as this contract’s token surfaces, keeping values attached to the surface that established them, and treating the newsroom typeface account, the company overview, and the Design Library as named brand sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

Its most recognizable visual asset is Youandi: the company introduced the proprietary typeface in 2003, then renewed it as YouandiNew for contemporary digital media. Hyundai Card’s own account places the card plate’s proportions inside the letterforms, treating type as a carrier of brand identity rather than as a decorative layer. That history is visible on the current captured product home, where loaded YouandiNewKr leads product headings and navigation, while the corporate-information routes use a larger white-on-dark display treatment. The live product routes are not a uniform monochrome system: black and white form the common base, but their product and corporate links use distinct blue values. The source records DIVE, the Design Library, and other cultural/marketing surfaces as meaningful brand context; the source did not use them to fill product tokens in this reference. The years, the Youandi / YouandiNew names, the card-plate construction, the loaded YouandiNewKr family, the inverse corporate display, the two blue values, and the DIVE / Design Library boundary are recorded. Calling Youandi the most recognizable visual asset, calling the history visible on the current product home, and calling the live routes not a uniform monochrome system, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Hyundai Card pairs credit-card products with a long-running cultural and design program. Its official company overview describes a current move toward a technology-company identity while continuing the cultural work expressed through libraries, performance programs, branded spaces, card plates, and Youandi. That makes the company’s visual story broader than one web page or one card campaign. Youandi is the clearest continuity thread. Hyundai Card developed the first version in 2003; its official account says the original letterforms drew from the physical shape and proportions of a card. The 2021 YouandiNew renewal rebuilt that asset for evolving digital media, expanded its range, and added variable-font capability. The current web capture corroborates that the newer family is not merely historical: `YouandiNewKr` is loaded and visible on current product and corporate headings. The years, the technology-company identity, the libraries / performance programs / branded spaces / card plates, the card-derived letterforms, the 2021 renewal, the variable-font capability, and the loaded-and-visible corroboration are the source’s own narrative facts; they do not by themselves supply interface tokens. Calling the visual story broader than one web page or one card campaign, calling Youandi the clearest continuity thread, calling the newer family not merely historical, and classifying that founding-and-typeface narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source’s persona section.

- Follow product-home second-level navigation links.
- Open product-card links on the product home.
- Read the corporate-information hero and outline action on the two captured `/about/` routes.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its figures as service-context archetypes, not claims about private user research, so those biographies are dropped rather than promoted, and no name or occupation classification is carried into this document or its sidecar. What the source independently records is the audience at a group level: a Korean credit-card company whose identity reaches beyond payment products into card design, cultural programming, and branded libraries, framed in official materials as a financial company that has deliberately built a wider culture-and-design practice. Reading those source-named groups as this product’s audience is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Hyundai Card-authored or a separately published UI specification.

- YouandiNewKr loaded on product headings and navigation; a platform system stack on ordinary body, card, and button text
- Black-and-white foundation (`#000000` / `#ffffff`) with two surface-local blues (`#0070F0` product, `#1E75D6` corporate)
- Product-home 40px / 600 / 52px YouandiNewKr `h2`; corporate-information 54px / 700 / 80px inverse `h2`
- Transparent, borderless product navigation (18px / 500 / YouandiNewKr, 20px inline) and product-card links
- 3px corporate outline action, white on dark, corporate-information routes only
- Flat captured representatives: `box-shadow: none`

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Build identity into useful assets.** Youandi is presented as a brand asset used in product branding and official documents.
   *UI implication:* preserve the verified family distinction instead of approximating it with a system font.
2. **Let the product and the cultural program remain distinct evidence domains.** The company’s libraries and DIVE expand brand context, but they are not product-component documentation.
   *UI implication:* do not transfer their colors or patterns into payment-product tokens without direct proof.
3. **Use surface-local rules.** The current product home and corporate-information routes intentionally expose different link and inverse-action treatments.
   *UI implication:* name a component’s source surface before reusing its geometry or colors.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

- Use YouandiNewKr only when it is licensed and actually available from Hyundai Card-controlled sources.
- Preserve the product/corporate split: black-and-white foundation, product link #0070F0, corporate link #1E75D6.
- Keep the observed product navigation and card links transparent and borderless.
- Use the 3px corporate outline action only for the corporate-information context from which it was measured.

### Avoid

The source states these four as its Don’t list, and its Agent Prompt Guide restates two further brand constraints (DIVE category tags / a 48px pill / Noto Sans KR). They are kept as its rules. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

- Treat DIVE tag colors or Design Library visuals as current payment-product tokens.
- Replace unavailable YouandiNewKr with a system face while labeling it Youandi.
- Generalize the corporate white outline action into a product-home primary button.
- Invent interaction states, motion, a spacing scale, or component variants absent from the capture.
- Import DIVE category tags, a 48px pill, or Noto Sans KR.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The three supplied current captures share black text and white page fields. Two blue link treatments are surface-specific, so neither is promoted as a universal brand primary. Role names below are the source’s own labels. Refusing to promote either blue as a universal brand primary, pairing each hex to the token-set path named beside it, keeping the table’s uppercase spellings (`#FFFFFF`, `#0070F0`, `#1E75D6`) beside the token-set lowercase spellings (`#ffffff`, `#0070f0`, `#1e75d6`), and keeping `tokens.colors.inverse` on its own path rather than folding it into canvas, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

| Role | Value | Token-set path | Usage and evidence boundary |
|---|---|---|---|
| Ink | #000000 | `tokens.colors.ink` | Current product home and both corporate-information routes; text and border observations |
| Canvas | #FFFFFF | `tokens.colors.canvas` `#ffffff` | Current captured surface background observations |
| Inverse text | #FFFFFF | `tokens.colors.inverse` `#ffffff` | Corporate-information hero/action context; not a global text token |
| Product link | #0070F0 | `tokens.colors.link-product` `#0070f0` | Product-home detail links only |
| Corporate link | #1E75D6 | `tokens.colors.link-corporate` `#1e75d6` | Corporate-information links only |

The prior DIVE-only red and green content tags are omitted: they were not observed in this product/corporate packet and cannot describe the current product token set. Reading that omission as a current-token-set boundary rather than as a missing DIVE palette is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a scale): `nav-inline: 20` · `corporate-action-inline: 29`.

`nav-inline: 20` is the product-home second-level link’s inline padding. `corporate-action-inline: 29` is the corporate outline action’s inline padding. Neither is a radius step — `tokens.rounded` has no 20 and no 29. Keeping the two unitless spacing steps on their own keys rather than rewriting them as a grid, and reading them as padding steps and not radius or type steps, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `corporate-outline-action: 3` · `carousel-control: 5`.

- Corporate outline action (`3`): measured on the two corporate-information routes. Token-set key `tokens.rounded.corporate-outline-action`.
- Carousel control (`5`): token-set key `tokens.rounded.carousel-control`. No §4 component is declared for it.

The §4 product-home navigation link and product-card link record `Radius: 0px`. That 0px is those components’ local geometry. It is not a `tokens.rounded` step. Keeping `3` and `5` as two keys, keeping the 0px navigation/card radii on those component records, and not treating `carousel-control: 5` as a declared component, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Elevation

The captured representatives report `box-shadow: none`. Token-set path `tokens.shadow.flat`: `none`. This supports a flat default for the retained components only. It does not establish that Hyundai Card never uses shadows, gradients, or elevation on other product, marketing, or native-app surfaces. Reading the flat default as applying to the retained components only, and reading the following sentence as an evidence boundary for the captured representatives rather than as a global flat-system claim, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Motion

No transition duration, easing curve, or motion state was observed in the supplied capture. Do not derive motion guidance from the flat default component styles; retain motion as unresolved until a relevant live surface is measured. No motion token is promoted.

A future motion pass may promote a value only after per-component computed observation of all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. That five-kind gate, and the refusal to derive motion from the flat defaults, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Hyundai Card says that it has used Youandi for product branding and official company documents since 2003; the 2021 renewal, YouandiNew, was designed for digital environments, readability, Korean/English balance, and variable-font use. The official account describes it as a proprietary corporate typeface, not a public web-font distribution or open-license announcement. |
| Live computed surface-use | `YouandiNewKr` is the only verified branded family in this packet: it is the computed family on 60 visible heading, navigation, and text observations, has a loaded FontFace match, and resolves to Hyundai Card-hosted `YouandiNewKrTitle` font files. The product home uses 40px/600/52px `h2` headings and 18px/500/26px second-level links; the two corporate-information pages use 54px/700/80px `h2` headings. |
| System use | A platform stack is the first computed family on 351 ordinary body, card, button, and text observations. It is an observed runtime fallback/utility stack, not a substitute rendering of YouandiNewKr and not a brand-font claim. Product-card labels are observed at 16px/500/22px in that stack. |
| Official distributed asset | No public redistribution license or browser-consumable licensing terms were found in the official sources consulted. |
| Declared-only | `Spoqa Han Sans Neo`, `YouandiModernHEB`, `YouandiModernTR`, and `YouandModern` have `@font-face` source declarations in the capture but no visible first-family usage. They remain declared-only. A password-input face named `pass` is loaded for two inputs and is not a brand type token. |
| License | The official font history establishes Hyundai Card’s ownership and internal product/document use. Do not infer permission to ship the font outside its supplied Hyundai Card sources. |
| Outside these captures | Typography on DIVE, the Design Library, and other cultural/marketing surfaces remains outside these three captures. |

Calling Official product-use a history-and-use account rather than a published type token, calling Live computed the only-verified-branded-family reading rather than a catalog of every hosted face, calling System use a runtime fallback/utility stack rather than a substitute rendering or a brand-font claim, calling Official distributed an absence of public redistribution terms rather than a missing family, calling the declared faces declared-only rather than current UI tokens, calling License ownership-and-internal-use rather than a shippable grant, and calling DIVE / Design Library typography outside these captures, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Family

- **Current visible branded family:** `YouandiNewKr`
- **Observed runtime stack:** a platform system stack on 351 ordinary body, card, button, and text observations
- Do not replace unavailable YouandiNewKr with a system face while labeling it Youandi. The platform stack is an observed runtime fallback/utility stack, not a substitute rendering of YouandiNewKr and not a brand-font claim.

That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Product-home h2 | YouandiNewKr | 40 | 600 | 52 | `tokens.typography.hero` | Product-home h2 headings |
| Corporate-information h2 | YouandiNewKr | 54 | 700 | 80 | `tokens.typography.corporate-hero` | Corporate-information h2 headings on the two captured routes |
| Product-home second-level nav | YouandiNewKr | 18 | 500 | 26 | `tokens.typography.nav` | Product-home second-level navigation links |
| Product-card title labels | platform system stack | 16 | 500 | 22 | `tokens.typography.card-title` | Product-card title labels |

Line-height values stay unitless, as the token-set wrote them (`52`, `80`, `26`, `22`). The §3 prose also writes `40px/600/52px`, `18px/500/26px`, `54px/700/80px`, and `16px/500/22px`. Those px spellings sit on the §3 records. They do not replace the unitless token-set figures.

`tokens.typography.card-title` is `16` / `500` / `22` — Product-card title labels. The YAML component `product-card-link` records `font: "16px / 400 / platform system stack"`. Those two 16s stay on their own records. Keeping the unitless token-set line-heights beside the §3 px spellings, and keeping card-title `500` off product-card-link `400`, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Assets

- Catalog favicon: `https://newsroom.hyundaicard.com/images/favicon.ico`
- Official Youandi / YouandiNew history: `https://newsroom.hyundaicard.com/front/board/Hyundai-Card-branding-through-typeface?country=en`
- Official company overview: `https://img.hyundaicard.com/about/common/en/pageView.hc?id=ceabi0201_01`
- Hyundai Card Design Library (cultural/design context; not token evidence): `https://newsroom.hyundaicard.com/front/board/Hyundai-Card-Design-Library?country=en`

Reading the newsroom favicon URL as an identity pointer rather than a hosted product-home brand file, and reading the Design Library URL as cultural context rather than component documentation, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The packet captured default styles only. It reports `interactionCount: 0`, `interactionKinds: 0`, and `observedStates: 0`; no state token is published. No hover, focus, pressed, disabled, error, menu, dialog, or toast state is included: the supplied collector reports zero interaction expansions and zero observed states. Reinspect the relevant live surface before specifying any of the following. Treating zero observed states as a reason to reinspect before specifying any of those categories, rather than as a published state token, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification.

| Category | Status |
|---|---|
| Default | Observed only for the three §4 component defaults |
| Hover | Not observed |
| Focus | Not observed |
| Pressed | Not observed |
| Disabled | Not observed |
| Error | Not observed |
| Loading | Not observed |
| Success | Not observed |
| Empty | Not observed |
| Skeleton | Not observed |

### How applicability is decided here

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Destination links and the corporate outline action commit no in-place operation, so loading / error / success are `not-applicable` on those controls for a role reason. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

### Product-home navigation link

- Role: static second-level navigation links on the product home
- Primitive type: not in the token set · Kind: interactive
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Padding: 0px 20px
- Font: 18px / 500 / YouandiNewKr
- Use: `home::[data-omd-capture="1"–"7"]` static second-level navigation links on the product home
- Token-set spacing: `tokens.spacing.nav-inline: 20`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the product home |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a second-level navigation link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching a second-level destination is not an operation with a success result on this link |

### Product-card link

- Role: product-home card link; transparent, borderless default
- Primitive type: `card` · Kind: interactive
- Background: transparent
- Text: #000000
- Border: none
- Radius: 0px
- Font: 16px / 400 / platform system stack
- Token-set font record: `16px / 400 / platform system stack`
- Token-set use: `Product-home card link; transparent, borderless default`
- Token-set fg: `#000000`
- Use: `home::[data-omd-capture="55"–"84"]` product-card links; only the default was captured
- This 16px / 400 record is not `tokens.typography.card-title` (`16` / `500` / `22`).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the product home |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination card link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a product-card destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching a product card is not an operation with a success result on this link |

### Corporate-information outline action

- Role: outline action on the two corporate-information routes
- Primitive type: not in the token set · Kind: interactive
- Background: transparent
- Text: #FFFFFF
- Border: 1px solid rgba(255,255,255,0.6)
- Radius: 3px
- Padding: 0px 29px
- Font: 16px / 400 / platform system stack
- Use: `surface-2::[data-omd-capture="11"]` and `surface-3::[data-omd-capture="12"]`; corporate-information routes only
- Token-set spacing: `tokens.spacing.corporate-action-inline: 29`
- Token-set radius: `tokens.rounded.corporate-outline-action: 3`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on both corporate-information routes |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An outline action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a corporate-information outline action; it does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a corporate-information destination is not an operation with a success result on this control |

These rows describe default treatments the source wrote. They are not attached as visual treatments for hover, focus, pressed, disabled, error, loading, or success. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not Hyundai Card-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured product home establishes hierarchy through a 40px YouandiNewKr heading, 18px second-level navigation, and transparent product-card links rather than a documented card-container recipe. Corporate-information routes use a separate 54px inverse hero and compact 3px outline action. Treat those as surface-specific compositions; there is no captured evidence for a shared responsive grid, spacing scale, or universal card treatment.

The supplied evidence is desktop-only at 1440×900. It establishes typography and default component values on the listed routes, not a responsive contract. Preserve the surface split and remeasure at target breakpoints before assigning mobile dimensions, stacking behavior, or touch states.

Spacing restated from `tokens.spacing`: `nav-inline` 20 · `corporate-action-inline` 29. Shape restated from `tokens.rounded`: corporate-outline-action 3 · carousel-control 5. The 20 and 29 stay on Spacing. The 3 and 5 stay on Shape.

Reading the product-home hierarchy as heading / navigation / transparent card links rather than a documented card-container recipe, reading the product-home and corporate-information compositions as surface-specific rather than as a shared grid, reading 1440×900 as the supplied desktop evidence rather than as a cross-viewport specification, and keeping the YAML spacing and rounded restatements on their own paths, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official materials frame Hyundai Card as a financial company that has deliberately built a wider culture-and-design practice through its branded spaces, card plates, and typeface. The usable voice is therefore precise, design-literate, and concrete rather than “luxury” by default.

| Do | Don't |
| --- | --- |
| Describe a specific product, design choice, or cultural program plainly. | Claim an unmeasured visual rule as a universal brand mandate. |
| Let Youandi’s card-derived construction carry a factual brand story. | Use vague premium language in place of evidence. |
| Keep product and cultural surfaces named and separated. | Fold DIVE or library material into payment-product UI claims. |

Calling the usable voice precise, design-literate, and concrete rather than “luxury” by default, and reading the Do / Don't table as register guidance rather than issued microcopy, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai Card-authored or a separately published UI specification.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

The Hyundai Card Design Library is a Hyundai Card cultural space, not a public component design-system specification.

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

- hover, focus, pressed, disabled, error, loading, success, empty, and skeleton visual treatments
- transition properties, animation name, duration, easing, and reduced-motion behavior
- a shared responsive grid, a spacing scale, and a universal card treatment
- mobile dimensions, stacking behavior, and touch states
- a public redistribution license for Youandi / YouandiNew
