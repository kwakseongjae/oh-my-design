# LG유플러스 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

LG유플러스 is a Korean telecommunications and consumer-technology company, established in 1996, with public services for mobile, home internet and IPTV, smart home, and people-centred AI as well as enterprise offerings. This contract covers two current first-party public product captures inspected on 2026-07-13: the public service home at `https://www.lguplus.com/` and one public subscription-product page at `https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone`. The corporate About page at `https://www.lguplus.com/about/ko` is context rather than a shared product-token source. Treating those two public product captures as this contract's token surfaces, treating corporate About as context rather than a shared product-token source, and not treating the capture as a single universal LG U+ design system or as evidence for authenticated, native-app, checkout, or support flows, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification. The result is not a single universal LG U+ design system, nor evidence for authenticated, native-app, checkout, or support flows.

The supplied capture shows the public expression in a deliberately bounded way: the public service home uses Pretendard with magenta calls to action; the public subscription-product page uses its own loaded `nskr` stack and more compact information rows. `#e6007e` is a selector-backed filled action color on both captured public service and subscription surfaces. `#000000` on `#ffffff` is the repeated public working base; `#f5f5f5`, `#888888`, and `#ebebeb` are scoped subscription-detail siblings. The captured Home CTA is a 40px-high 20px-radius control; the subscription detail also has a static 65px information row with an 8px outline geometry. Readings of that captured layer as a white, near-black service foundation with a high-visibility magenta action signal, and of the current Simply. U+ direction as framing the brand around reducing the complexity customers encounter in everyday telecom tasks rather than as a token source, are a derived editorial implementation inference from the verified surfaces; they are not LG U+-authored or a separately published UI specification. Its recognizable public expression combines a white, near-black service foundation with a high-visibility magenta action signal, while its current Simply. U+ direction frames the brand around reducing the complexity customers encounter in everyday telecom tasks. The 2025 Simply. U+ narrative is brand context only. It does not create colors, components, states, or motion tokens.

Brand narrative recorded by the source, kept separate from the interface evidence above. LG유플러스 states that it has worked to make meaningful change in customers’ lives since its 1996 establishment. Its official company presentation spans personal mobile, home internet and IPTV, smart-home, AI, and enterprise services; the common narrative is connection and practical service value rather than a single consumer product. The current evolution is Simply. U+. In official 2025 material, LG유플러스 describes the direction as reducing customers’ complexity and discomfort, leaving the essential, and building trustworthy, easier experiences. Simple Lab is presented as a channel for customer ideas to be proposed and shared through implementation. Treating that 1996 establishment statement, official service landscape, Simply. U+ 2025 direction, and Simple Lab as corporate and campaign facts that do not by themselves supply interface tokens, and treating them as not evidence that all legacy pages already share a new visual system, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification. These are corporate and campaign facts, not evidence that all legacy pages already share a new visual system.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured public surface or control, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

- Browse public service offerings on the public Home at `https://www.lguplus.com/`.
- Inspect a public subscription product on the captured subscription-product page.
- Use the captured Home solid CTA or read the captured subscription information row.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its §13 figures as service-domain archetypes inferred from public service categories, not surveyed personas, demographics, or observed product-flow behavior, so those records are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the official company presentation independently records at a group level is personal mobile, home internet and IPTV, smart-home, AI, and enterprise services. Dropping those inferred archetypes rather than promoting them, carrying no demographic segment list, and reading those official service categories as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

- `#e6007e` filled action color on both captured public service and subscription surfaces
- `#000000` on `#ffffff` public working base; `#f5f5f5`, `#888888`, and `#ebebeb` scoped to subscription-detail siblings
- Surface-specific loaded type: Home Pretendard; public subscription detail `nskr`
- Home CTA 40px high / 20px radius; subscription information row 65px high / 8px outline
- 2025 Simply. U+ narrative as brand context only — not a color, component, state, or motion token

### Principles

These 4 items — numbered stems that rest on official Simply. U+ direction recorded by the source, and every *UI implication* as the source's own editorial reading — are a derived editorial implementation inference from the verified surfaces; they are not LG U+-authored or a separately published UI specification.

1. **Remove customer complexity.** *UI implication:* Put the immediate outcome and the required action together; do not add unmeasured interaction patterns.
2. **Keep what is essential.** *UI implication:* Prefer the observed white/ink foundation and purpose-specific magenta CTA over decorative color expansion.
3. **Make service choices understandable.** *UI implication:* Preserve surface-specific type and row geometry where it carries practical subscription information.
4. **Listen through customer participation.** *UI implication:* A feedback flow must be evidenced before it is treated as a reusable component pattern.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not LG U+-authored or a separately published UI specification.

- Keep Home and public subscription values explicitly scoped to their observed surfaces.
- Use `#e6007e` with white text for the measured action variants.
- Use the actual loaded family only where the relevant captured surface is being recreated.
- Preserve the static row as `listItem` geometry rather than changing the observed link/row into button semantics.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not LG U+-authored or a separately published UI specification.

- Do not treat declared-only fonts as visible LG U+ type families.
- Do not substitute a system font and label it Pretendard or `nskr`.
- Do not invent hover, focus, pressed, disabled, error, toast, dialog, or motion values from this zero-interaction capture.
- Do not merge corporate About styling into the product-token namespace without a product-surface observation.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` `#ffffff` unmerged from the Home primary CTA text field `#ffffff`, keeping that same hex in the Home primary CTA border `0px solid #ffffff` as that component's border field rather than as canvas or as a second YAML color key, keeping `tokens.colors.ink` `#000000` unmerged from the information-row field `#222222`, keeping `tokens.colors.muted` `#888888` and `tokens.colors.soft` `#f5f5f5` scoped to the subscription-detail uses the source names, not promoting `#222222` as a general foreground token, and not merging Corporate About ink values or low-frequency page-specific colors into this product-scoped palette, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

- **Primary** (`#e6007e`): `tokens.colors.primary`. Measured fill on the public Home solid CTA and the public subscription purchase CTA.
- **Ink** (`#000000`): `tokens.colors.ink`. Measured Home body ink and repeated public-surface text baseline.
- **Canvas** (`#ffffff`): `tokens.colors.canvas`. Measured Home canvas. The Home primary CTA text is also `#ffffff`; that is the component's `fg` field, not a second YAML color key.
- **Muted** (`#888888`): `tokens.colors.muted`. Measured public subscription-detail supporting-link text only.
- **Soft** (`#f5f5f5`): `tokens.colors.soft`. Measured fill on the compact public subscription `pr-btne add` control only.
- **Border** (`#ebebeb`): `tokens.colors.border`. Measured 1px outline on the public subscription information row.

The product-detail row’s text is `#222222`; it is retained in that component’s measured fields rather than promoted as a general foreground token. Corporate About ink values and low-frequency page-specific colors remain useful raw evidence but are not merged into this product-scoped palette.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xs: 4`, `sm: 8`, `md: 12`, `lg: 16`. The source itself writes the captured cluster with a unit: 4px, 8px, 12px, and 16px. `tokens.spacing.lg: 16` is not the Home body type size 16px. `tokens.spacing.sm: 8` is not `tokens.rounded.row` 8. Keeping those YAML steps unitless beside the source's own captured-px list, not treating a spacing step as a type size or as a radius, and treating the captured 4/8/12/16 cluster as a measured local cluster rather than a complete grid declaration, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification. Treat this as a measured local cluster, not a complete grid declaration.

### Shape

- YAML `tokens.rounded.none: 0`
- YAML `tokens.rounded.row: 8` — subscription information-row corners (8px)
- YAML `tokens.rounded.primary-cta: 20` — Home CTA corners (20px)

Preserve the named component geometry rather than averaging it: the Home CTA is 40px high with 20px corners, whereas the subscription row is 65px high with 8px corners. Reading 0 / 8 / 20 as local harvested geometry for those observed controls rather than averaging the Home CTA and subscription-row geometries, and not as a universal radius for every unlisted LG U+ surface, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

### Motion

No duration scale, easing curve, transition, carousel behavior, or motion-reduction rule is verified by the supplied static capture. Do not introduce a named LG U+ motion token from this reference. If motion is added to a new implementation, treat it as a local extension and document it separately from these verified tokens. Treating that measured absence as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, requiring a per-component computed observation of all five kinds before any promotion, and reading official documentation of a single curve or duration as not that gate, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Home Pretendard and subscription `nskr` as surface-specific live families rather than one cross-product LG U+ type system, treating NotoSansKR filenames as delivery identity for the computed `nskr` family rather than a replacement name, reading that no first-party announcement reviewed here names one type family for every LG U+ product, reading LG U+-hosted file delivery as proof of delivery on the captured web surfaces rather than ownership of a proprietary LG U+ typeface, reading Pretendard's SIL Open Font License 1.1 as concerning Pretendard rather than an LG U+ trademark or cross-product font policy, treating declared-only faces as omitted, and refusing to substitute a system font while calling it Pretendard or `nskr`, are derived editorial implementation inferences from the verified surfaces; they are not LG U+-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party announcement reviewed here names one type family for every LG U+ product. |
| Live computed surface-use | Home has loaded Pretendard with 231 observed uses. The public subscription product has loaded `nskr` with 162 observed uses; its delivered filenames identify NotoSansKR assets. |
| Official distributed brand asset | The supplied runtime bundle delivers LG U+-hosted Pretendard and NotoSansKR font files. This proves delivery on the captured web surfaces, not ownership of a proprietary LG U+ typeface. |
| Declared-only | Geist, Geist Fallback, slick, and swiper-icons have no visible use in the supplied bundle and are omitted from tokens. |
| License | Pretendard’s upstream repository states SIL Open Font License 1.1. This license concerns Pretendard, not an LG U+ trademark or cross-product font policy. |

### Family

- **Public Home visible UI family:** Pretendard — YAML `tokens.typography.family.home`. Loaded source recorded at `https://www.lguplus.com/static/pc-static/common/fonts/Pretendard-Regular.subset.woff2`.
- **Public subscription visible UI family:** `nskr` — YAML `tokens.typography.family.subscription`. Delivered filenames identify NotoSansKR assets; the computed family name stays `nskr`.
- Do not substitute an unavailable system font and call it Pretendard or `nskr`; do not extend either family from these two captured domains to uninspected LG U+ surfaces. Reading computed visible use as the reason Pretendard is canonical on Home and `nskr` is canonical on the public subscription detail, and refusing to replace either with a system font or to extend either family beyond those two captured domains, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

### Type roles

Line heights stay in the form the source verified them: YAML unitless `1.5` beside the source's own 24px writings where both exist; 21px on the information row stays 21px and is not converted into a ratio. Keeping those YAML unitless ratios beside the source's own px equivalents, keeping each YAML `use` string beside the hierarchy-table note without replacing either, and reading Public Home body as not a universal product scale, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Notes |
|---|---|---:|---:|---:|---|
| Public Home body | Pretendard | 16px | 400 | 1.5 (24px) | `home::body`; not a universal product scale. YAML use: Observed public Home body |
| Public Home primary CTA | Pretendard | 16px | 400 | 24px | `home::[data-omd-capture="19"]` |
| Public subscription purchase CTA | `nskr` | 16px | 700 | 1.5 (24px) | `surface-2::[data-omd-capture="15"]`. YAML use: Observed public subscription purchase action |
| Public subscription information row | `nskr` | 14px | 500 | 21px | `surface-2::[data-omd-capture="14"]` |

### Assets

Catalog identity points at `logo.type: favicon`, slug `https://www.google.com/s2/favicons?domain=lguplus.com&sz=128`. That pointer is a third-party favicon proxy, not an LG U+-distributed mark file. Treating it as identity metadata rather than a portable first-party asset file is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied evidence reports `interactionCount: 0`; no state color, message, control, or animation specification is available. Default captured; `interactionCount: 0`, so no hover, focus, pressed, disabled, or error value was observed. Use only the frontmatter tokens that have a matching `verification_v2.claims` path. The two promoted components preserve measured default geometry: the button includes the truthful zero-interaction state summary, and the static subscription link/row preserves its measured default fields without fabricated interactive states.

The categories below preserve that boundary rather than inventing brand facts.

| Category | Verified boundary |
|---|---|
| Empty | No captured empty-state treatment. |
| Loading | No captured loading treatment. |
| Error — validation | No captured validation-error treatment. |
| Error — service | No captured service-error treatment. |
| Success | No captured success treatment. |
| Skeleton | No captured skeleton treatment. |
| Disabled | No captured disabled treatment. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control’s product role, not its primitive kind. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of a capture is not a `not-applicable` reason. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. The generic observed-state name `focus` is not promoted as a `focus-visible` treatment. Every interactive-kind verdict, every applicability verdict, and the reason given for either — including keeping the two promoted components' measured default geometry and zero-interaction summaries without fabricating interactive states, keeping each YAML `use` string as a Token-set use row beside Role, keeping YAML font, padding, border, and states byte forms beside the §4 writings, preserving the information row as `listItem` rather than button semantics, and not promoting the generic observed-state name `focus` as a `focus-visible` treatment — is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Home primary CTA

- Role: public Home solid CTA
- Token-set use: Public Home solid CTA at home::[data-omd-capture="19"]
- Token-set states: default captured; interactionCount 0, so no hover, focus, pressed, disabled, or error value was observed
- Primitive type: `button` · Kind: interactive
- Anatomy: label on a filled surface
- Background: `#e6007e`
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: 20px. YAML radius: `20px`
- Padding: 0px 30px. YAML padding: `0px 30px`
- Height: 40px
- Font: 16px / 400 / Pretendard. YAML font: `16px / 400 / Pretendard`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public Home solid CTA |
| hover | applicable | Pointer-web action control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An action control can be unavailable; visual treatment omitted |
| loading | applicable | A public Home solid CTA can wait on a request it starts; no treatment observed |
| error | applicable | A public Home solid CTA can fail; no treatment observed |
| success | applicable | A public Home solid CTA can confirm; no treatment observed |

### Subscription information row

- Role: public subscription product information row
- Token-set use: Public subscription product information row at surface-2::[data-omd-capture="14"]
- Primitive type: `listItem` · Kind: interactive
- Anatomy: observed link/row
- Background: transparent
- Text: `#222222`
- Border: `1px solid #ebebeb`
- Radius: 8px. YAML radius: `8px`
- Padding: 19px. YAML padding: `19px`
- Height: 65px
- Font: 14px / 500 / nskr. YAML font: `14px / 500 / nskr`
- Observed: default only. Classified as `listItem`, not as a button.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public subscription product information row |
| hover | applicable | Pointer-web link/row; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination row can be unavailable; visual treatment omitted |
| loading | not-applicable | This observed link/row presents subscription information and takes the reader to that row's destination; it does not commit an operation whose outcome it could report. |
| error | not-applicable | Same role reason: choosing a destination is not an operation with an error result this row would report. |
| success | not-applicable | Same role reason: choosing a destination is not an operation with a success result. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop observations repeatedly include 4px, 8px, 12px, and 16px spacing values. Treat this as a measured local cluster, not a complete grid declaration. Preserve the named component geometry rather than averaging it: the Home CTA is 40px high with 20px corners, whereas the subscription row is 65px high with 8px corners. The capture establishes no canonical column count, maximum container width, or authenticated checkout layout. Reading those repetitions as a measured local cluster rather than a complete grid declaration, and refusing to average the Home CTA and subscription-row geometries, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

### Responsive behavior

The supplied evidence was captured at 1440×900. It supports only the listed desktop geometry. No mobile breakpoint, touch-target rule, safe-area behavior, or responsive reflow is promoted. Reading 1440×900 as the capture viewport rather than a cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official Simply. U+ material describes a customer-centred effort to remove complexity, retain what is essential, and make telecom tasks easier to understand. The cues below are bounded implementation guidance derived from that stated direction, not an approved LG U+ copy manual: **plain**, **reassuring**, and **next-step oriented**. Characterizing those three cues as implementation guidance rather than an approved copy manual, and reading the Do/Don't table as reconstruction guidance rather than published LG U+ microcopy, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Put the service outcome and next action close together. | Make a customer decode a technical term before learning its consequence. |
| Use everyday Korean service language for a practical task. | Hide conditions behind celebratory language. |
| Explain a choice in one clear step before adding detail. | Turn a routine telecom task into a dense multi-step instruction. |

Illustrative, not LG U+ copy: “요금제 확인하기”; “내게 맞는 혜택 보기”; “필요한 정보부터 확인하세요.”

The quoted Korean strings are illustrative samples the source already labelled as not LG U+ copy; English beside a Korean label is a reading aid, not a replacement. Reproduce those three strings byte-exact rather than translating or re-casing them. Treating English beside a Korean label as a reading aid rather than a replacement, and requiring those three strings byte-exact, is a derived editorial implementation inference from the verified surfaces; it is not LG U+-authored or a separately published UI specification.

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

- hover, focus, pressed, disabled, and error visual treatments on the captured controls
- empty, loading, error-validation, error-service, success, skeleton, and disabled treatments
- toast and dialog values
- duration scale, easing curve, transition, carousel behavior, and motion-reduction rule — promote a motion value for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- canonical column count, maximum container width, and authenticated checkout layout
- mobile breakpoint, touch-target rule, safe-area behavior, and responsive reflow
- a first-party type family named for every LG U+ product
- Geist, Geist Fallback, slick, and swiper-icons as visible LG U+ type families
