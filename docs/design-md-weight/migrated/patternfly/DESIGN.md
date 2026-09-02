# PatternFly Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PatternFly is Red Hat’s sponsored, open-source design system for teams building consistent, usable enterprise software. YAML `ds.name` is PatternFly, `ds.url` is `https://www.patternfly.org/`, `ds.type` is `system`. The YAML `ds.description` is kept as written: Red Hat-sponsored open-source design system for consistent, accessible enterprise products. Catalog homepage identity is `https://www.patternfly.org/`. Catalog `primary_color` is `#0066cc`. Official design system = PatternFly (`https://www.patternfly.org/`, `ds.type: system`). [About PatternFly](https://www.patternfly.org/get-started/about-patternfly/)

The supplied capture is limited to the PatternFly public home, button documentation, and color-foundation documentation. Those are design-system/documentation surfaces, not evidence for an individual Red Hat product or an authenticated operational console. This contract covers those three first-party public routes from the 2026-07-13 packet: PatternFly home `https://www.patternfly.org/` (verification kind: marketing); button documentation `https://www.patternfly.org/components/button/` (documentation); and color-foundation documentation `https://www.patternfly.org/design-foundations/colors/` (documentation). The official project frames its purpose as helping designers and developers share standards, guidance, and working code for accessible enterprise products, while remaining open to users and contributors beyond Red Hat. Current evolution also matters: PatternFly 6 has expanded its theming architecture, including a Default theme, high-contrast options, and the Red Hat-aligned Project Felt theme. The values below describe the observed Default-style public documentation surface only; Project Felt’s red accents, pill treatment, glass layer, and unobserved themes are not silently merged into these tokens. [Theming](https://staging.patternfly.org/foundations-and-styles/theming/) · [Release highlights](https://www.patternfly.org/get-started/release-highlights)

Treating those three captured PatternFly.org routes as this contract’s product-surface scope, keeping an individual Red Hat product and an authenticated operational console outside that same-surface set, and keeping Default-style public-documentation values unmerged from Project Felt’s red accents, pill treatment, glass layer, and unobserved themes, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

Its recognizable expression is less a campaign aesthetic than a deliberately practical interface language: legible Red Hat typefaces, dark text on white surfaces, restrained blue actions, compact spacing, and controls that make dense software easier to scan. The hex values, typefaces, and spacing clusters named beside that reading are recorded. Calling that expression less a campaign aesthetic than a deliberately practical interface language, and calling those controls a language that makes dense software easier to scan, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

Brand narrative recorded by the source, kept as narrative context. PatternFly is presented by its maintainers as an open-source design system for consistent, usable enterprise software. It is sponsored and maintained by Red Hat, yet its documentation explicitly invites wider use and contribution. That relationship explains why the system reads as shared infrastructure: guidance, component examples, code, and accessibility resources are organized to reduce repeated work across cross-functional product teams. The current story is one of controlled evolution rather than a replacement of the system’s enterprise purpose. PatternFly 6 adds a token-based theming architecture and optional visual modes; Project Felt brings a Red Hat-aligned option while the Default theme remains available. The source material does not provide a named executive quotation for this reference, so none is fabricated. The sponsorship, the invitation to wider use and contribution, PatternFly 6, the token-based theming architecture, optional visual modes, Project Felt as a Red Hat-aligned option, and the Default theme remaining available are the source’s own recordings of first-party pages. Treating that About / Theming / Release-highlights narrative as brand context that does not by itself supply interface tokens, reading the Red Hat relationship as the reason the system reads as shared infrastructure, and reading the current story as controlled evolution rather than a replacement of the system’s enterprise purpose, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks, each naming a captured PatternFly.org surface the source records, and not taking them from the source’s persona section, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- Use the PatternFly public home, including the selector-backed primary action and featured card.
- Read the button documentation at `https://www.patternfly.org/components/button/`.
- Read the color-foundation documentation at `https://www.patternfly.org/design-foundations/colors/`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source’s persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. Official About language names designers and developers, and users and contributors beyond Red Hat. Use those source wordings only. Dropping that persona section rather than promoting it, carrying no affiliation classification or motivation, and using only those source wordings, are derived editorial implementation inferences from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- A documentation-first enterprise system with open-source and accessibility commitments
- Blue `#0066cc` for observed primary actions and links, with dark `#151515` content ink
- Red Hat Text for repeated interface/body text and Red Hat Display for observed display headings
- Compact 4/8/16/24px spacing clusters, 6px controls, and 16px featured cards
- Public documentation components only; no product-console workflow, form, toast, or state system inferred

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation. The numbered stems rest on official About, Theming, and contribution sentences the source attributes to first-party pages. Every *UI implication* below is the source’s own editorial reading, not taken from the published PatternFly documentation as a token sheet for uncaptured Red Hat product surfaces.

1. **Make enterprise work consistent.**
   *UI implication:* Reuse documented components and foundations before creating a competing local pattern.
2. **Keep design and code connected.**
   *UI implication:* Pair visual guidance with implementation examples and accessibility information where the source provides them.
3. **Make contribution legible.**
   *UI implication:* Name the review or request path instead of implying that a change is automatically accepted.
4. **Evolve through explicit versions and themes.**
   *UI implication:* Treat Default, Project Felt, high contrast, and glass as named modes; do not blend their values without an explicit theme decision.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- Keep observed Default-theme documentation values separate from Project Felt, high-contrast, dark, and glass themes.
- Load Red Hat Text and Red Hat Display when applying the measured typography.
- Use the primary-action geometry only in a source domain where the selector-backed public default is relevant.
- Preserve the distinction between public PatternFly documentation and downstream product interfaces.

The source’s Agent Prompt Guide also records this unique constraint, kept as written: keep the 4/8/16/24px rhythm and use the measured pill primary action or 16px featured card only where their public-home provenance is appropriate. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Avoid

The source states these four as its Don’t list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- Do not treat `#0066cc` as proof of a universal Red Hat product CTA.
- Do not invent control states from a packet with `interactionCount: 0`.
- Do not call Red Hat Mono, Font Awesome, or pficon a loaded UI font in this capture.
- Do not convert the featured public-home card into a dashboard/card system without a product-surface observation.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Observed public documentation surfaces. Pairing each hex to the token-set path named beside it, keeping `#0066cc` as filled primary-action background and repeated public link/control ink rather than as proof of a universal Red Hat product CTA, and keeping measured danger, warning, plain, link, and secondary examples on the supplied button page as documentation examples rather than as reusable component tokens, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- **Primary blue** (`#0066cc`): observed as the filled primary-action background and as repeated public link/control ink. Token-set path `tokens.colors.primary`. Catalog `primary_color` is this same hex.
- **Foreground** (`#151515`): repeated main text and border value across the supplied home, button, and color documentation surfaces. Token-set path `tokens.colors.foreground`.
- **Body text** (`#4d4d4d`): repeated secondary/navigation control text and border value across all supplied surfaces. Token-set path `tokens.colors.body`.
- **Canvas** (`#ffffff`): repeated public-surface and component background. Token-set path `tokens.colors.canvas`.

The supplied button page also contains measured danger, warning, plain, link, and secondary examples. Those values are documentation examples, but only the selector-backed primary default is promoted as a reusable component token here. No capture establishes global semantic success, warning, error, dark-mode, high-contrast, Project Felt, or glass-mode tokens; those unresolved groups are omitted rather than filled with plausible values.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `xs: 4` · `sm: 8` · `md: 16` · `lg: 24`.

Repeated captured values: 4, 8, 16, and 24px. Use those only as the observed public-surface rhythm. `tokens.spacing.md: 16` is a spacing step. It is not `tokens.rounded.card: 16`, not the featured-card radius `16`, and not a type size. Treating these as a public-surface rhythm rather than a complete grid or breakpoint contract, and keeping those writings of `16` on their own records rather than choosing one 16 as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `none: 0` · `control: 6` · `card: 16`.

- none (`0`): Token-set key `tokens.rounded.none`.
- Control (`6` / `6px`): Token-set key `tokens.rounded.control`. Distinctive-traits “6px controls” is this radius step. It is not a spacing step.
- Card (`16` / `16px`): Token-set key `tokens.rounded.card`. Featured-card radius `16px` sits on that component as well.

Primary-action radius is YAML `999` / §4 `999px`. That value is `tokens.components.primary-action.radius`. It is not `tokens.rounded.control: 6` and not `tokens.rounded.none: 0`. Keeping the three YAML rounded keys unmerged from the primary-action `999` pill, and keeping `6px` as a control radius rather than a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Elevation

The primary action and featured card representatives use no box shadow. Featured-card capture also records `box-shadow: none`. A separate public-home feedback button has a measured shadow, but it is a different selector and is not generalized into an elevation scale. No modal, popover, drawer, toast, or layered application surface is tokenized. Treating `none` as only those observed representatives, and not collapsing the feedback-button shadow into a shared elevation scale, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Motion

No motion duration, easing curve, transition, or reduced-motion behavior was measured in the supplied packet. PatternFly documentation and release notes discuss component animation and accessibility work, but those references do not license an unmeasured timing token in this canonical record. Preserve user motion preferences in any implementation and source exact values from the relevant official component or motion guidance before adding them. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted. That five-kind gate, and the decision not to promote a motion token from this capture or from PatternFly documentation and release notes, are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Applying the evidence-class boundaries below (official product-use as system/product facts separate from the computed capture; PatternFly-hosted WOFF2 files as availability on captured web surfaces rather than a substitute for the loaded family; Red Hat Mono / Font Awesome 5 Free / pf-v6-pficon as declared-only and not UI-family tokens; no license statement asserted from the contact-form retrieval) is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

| Evidence class | Resolution |
|---|---|
| Official product-use | PatternFly’s typography documentation names Red Hat Display for larger headings and Red Hat Text for smaller text, subheadings, and body copy; it documents Red Hat Mono for tabular/code use. These are system/product facts, separate from the computed capture. [Typography](https://www.patternfly.org/foundations-and-styles/typography/) |
| Live computed surface-use | **Red Hat Text** is loaded with high confidence on 349 captured elements and is the repeated body, list-item, button, and card family. **Red Hat Display** is loaded with high confidence on 12 captured heading/text elements. Both have matching PatternFly-hosted WOFF2 source URLs in the supplied artifact. |
| Declared-only | **Red Hat Mono**, **Font Awesome 5 Free**, and **pf-v6-pficon** have `@font-face` declarations in the supplied packet but no visible-use match. They are useful context, not UI-family tokens. |
| License boundary | the official typography page links to a font download. The sibling records the guide’s link text as “Download PatternFly’s fonts from GitHub”; that destination returned a Red Hat contact form in this research pass. No license statement is asserted or promoted from that failed retrieval. |

### Family

- **Current visible UI family:** Red Hat Text. Token-set path `tokens.typography.family.ui`.
- **Current visible display family:** Red Hat Display. Token-set path `tokens.typography.family.display`.
- **Loaded source boundary:** both faces are loadable on the captured public-web surfaces via PatternFly-hosted WOFF2 files.
- Do not substitute a system font and label it Red Hat Text or Red Hat Display. Likewise, do not promote declared-only Red Hat Mono or icon fonts to the documented UI family without visible-use evidence.

Treating Red Hat Text and Red Hat Display as canonical here only because official product-use and live computed use agree, and refusing a system-font substitute or a declared-only promotion, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Type roles

Token-set roles keep the source’s recorded numbers, including unitless line-height. The observed-hierarchy table keeps the source’s px spellings. YAML `tokens.typography.body.lineHeight` is `1.5`. YAML `tokens.typography.display-title.lineHeight` is `1.3`. The observed table records Display title `46.8px` and Standard body/control `21px`. Official body reference is `14px` / `400` / `1.5`. Those writings sit on those records. Neither was chosen as a replacement. Keeping the token-set unitless numbers on their own rows, the px hierarchy on its own table, the official body `1.5` as official default-body guidance consistent with the live measurement, and body `14` as a type size rather than a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| body | Red Hat Text | 14 | 400 | 1.5 | Repeated body, list-item, and default control text on all three supplied PatternFly.org surfaces. |
| display-title | Red Hat Display | 36 | 600 | 1.3 | Observed H1 on the supplied public PatternFly.org surfaces. |

| Role | Size | Weight | Line height | Surface boundary |
|------|------|--------|-------------|------------------|
| Display title | 36px | 600 | 46.8px | Observed public-site H1 |
| Standard body/control | 14px | 400 | 21px | Repeated across all three supplied surfaces |
| Official body reference | 14px | 400 | 1.5 | Official default-body guidance; consistent with the live measurement |

Token-set `tokens.typography.body.size` is `14`. Token-set `tokens.typography.display-title.size` is `36`. Body `14` is a type size. It is not a spacing step.

### Assets

Treating catalog logo metadata as a Google favicon capture-method for `patternfly.org`, and not promoting that lookup as a portable PatternFly-hosted mark file, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract is preserved here. Treating that preservation as required while the catalog graph is not adopted, treating the §14 handling-boundary rows as the source’s capture-boundary notes rather than as a published PatternFly state specification, declaring Core §4.4 applicability by control meaning rather than by capture completeness, attaching YAML `Primitive type` only when the token set records that type, not treating a generic `Focus` capture as a `focus-visible` treatment, not using absence of a capture as a `not-applicable` reason, and not claiming complete state coverage, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

The artifact records 27 component variants but zero interaction snapshots and zero interaction kinds. Therefore this reference preserves only default measured geometry; it does not claim hover, focus, pressed, disabled, error, selected, or animated values. Links and rows that were not captured as button semantics are not reclassified as button components.

YAML `tokens.components.primary-action.states`: Observed default only; the supplied artifact has interactionCount: 0, so no hover, focus, pressed, disabled, or error value is specified.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control’s role makes the state meaningless. Generic `Focus` capture is not treated as a `focus-visible` treatment. This packet has no focus-visible treatment. This is not a complete state-coverage claim.

| Category | Documented handling boundary |
|----------|------------------------------|
| Empty | Use the component/pattern guidance for the specific product context; no empty-state geometry was captured. |
| Empty — filtered | Describe the filter condition and recovery action; do not borrow a state style from an uncaptured component. |
| Loading | Use the relevant official component guidance; no loading visual was observed in this packet. |
| Loading — long task | Explain ongoing work and preserve user control where the product pattern documents it. |
| Error | Identify the failed task and next recovery step; no error color or layout is tokenized here. |
| Error — permission | Explain the access boundary without presenting it as a system fault. |
| Error — unavailable service | State that the service is unavailable and provide a retry or support path only when the product supports one. |
| Success | Confirm the completed task in the relevant product context; no success token was observed. |
| Skeleton | Do not imply a particular skeleton geometry from this desktop documentation capture. |
| Disabled | Do not infer disabled colors, opacity, or cursor treatment from the default-only component observations. |

The source token-set declares two components: `primary-action` with `type: button`, and `featured-card` with `type: card`. Those primitive types are attached only to Public-home action and Public-home featured content.

### Public-home action

**Primary action — observed default**

- Role: selector-backed `pf-v6-c-button pf-m-primary` action on the public home; an anchor
- Primitive type: `button` · Kind: interactive
- Domain: public PatternFly.org home
- Background: `#0066cc`
- Text: `#ffffff`
- Radius: YAML `999` / §4 `999px`
- Padding: `8px 24px`
- Font: YAML `14/400 Red Hat Text` / §4 `14px / 400 / Red Hat Text`
- Height: 37px rendered height
- Token-set path: `tokens.components.primary-action` (`type: button`, `bg: #0066cc`, `fg: #ffffff`, `radius: 999`, `padding: 8px 24px`, `font: 14/400 Red Hat Text`)
- States: Observed default only; the supplied artifact has interactionCount: 0, so no hover, focus, pressed, disabled, or error value is specified.
- Use: `home::[data-omd-capture="2"]` — selector-backed pf-v6-c-button pf-m-primary action on the public home.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the public home |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public-home destination action (anchor); it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

The role-based applicability verdicts and reasons for this primary action are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

### Public-home featured content

**Featured card — observed default**

- Role: selector-backed `pf-v6-c-card pf-m-clickable` default geometry on the public home
- Primitive type: `card` · Kind: interactive
- Domain: public PatternFly.org home
- Background: `#ffffff`
- Text: `#151515`
- Radius: `16px`
- Font: YAML `14/400 Red Hat Text` / §4 `14px / 400 / Red Hat Text`
- Token-set path: `tokens.components.featured-card` (`type: card`, `bg: #ffffff`, `fg: #151515`, `radius: 16`, `font: 14/400 Red Hat Text`)
- Token-set use: home::#featured-blog-post-1 — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home.
- Use: `home::#featured-blog-post-1` — selector-backed pf-v6-c-card pf-m-clickable default geometry on the public home.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the public home |
| hover | applicable | Pointer-web clickable card; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable clickable card; visual treatment omitted |
| disabled | applicable | A clickable card whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a clickable featured-content card; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Clickable card; the destination, not this card, reports failure |
| success | not-applicable | Same role reason: opening the featured post is not an operation this card reports as success |

The role-based applicability verdicts and reasons for this featured card are a derived editorial implementation inference from the verified surfaces; they are not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The 1440×900 supplied capture shows documentation and promotional content rather than an enterprise application grid. Measured spacing clusters at 4, 8, 16, and 24px recur in captured styles. Use those only as the observed public-surface rhythm; no application-column count, responsive grid, sidebar width, data-table density, or form layout was captured.

Only a 1440×900 viewport is present in the supplied packet. No breakpoint, mobile navigation, touch-target policy, responsive reflow, or safe-area behavior was observed, so each is omitted. The 37px primary-action height, 6px control radius, 16px featured-card radius, and 999px pill primary action are desktop-capture measurements, not cross-viewport specifications. Treating 1440×900 as the supplied capture size rather than as a breakpoint system, and treating those control measurements as desktop-capture rather than as a cross-viewport specification, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

PatternFly’s official voice is practical, inclusive, and collaborative: it explains standards for enterprise work, names the consequence for a product team, and points to a usable next action. This is a documentation voice, not evidence of every Red Hat product’s microcopy. Naming that official voice practical, inclusive, and collaborative, and treating the table and paraphrases below as the source’s documentation-voice application rather than as a complete product-microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

| Do | Don't |
|----|-------|
| State the object, constraint, and outcome plainly. | Use generic innovation or transformation claims. |
| Explain how a component supports an accessible workflow. | Promise behavior that has not been documented. |
| Invite contribution through a concrete route. | Pretend that community review is an automatic approval. |

- **Official stance, paraphrased:** Build consistent and usable enterprise software with shared standards and tools. [About](https://www.patternfly.org/get-started/about-patternfly/)
- **Official stance, paraphrased:** Components connect foundations, patterns, and extensions. [Components overview](https://www.patternfly.org/components/overview/)
- **Official stance, paraphrased:** Major releases provide upgrade guidance and codemods for breaking changes. [About](https://www.patternfly.org/get-started/about-patternfly/)

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

These decisions are unnamed values, not permissions to invent. Naming the list from the source’s own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not PatternFly-authored or taken from a separately published UI specification, including the published PatternFly documentation.

- hover, focus, pressed, disabled, error, selected, and animated visual treatments (`interactionCount: 0`)
- empty, loading, error, success, and skeleton visual treatments
- global semantic success, warning, error, dark-mode, high-contrast, Project Felt, and glass-mode tokens
- danger, warning, plain, link, and secondary as reusable component tokens (documentation examples on the supplied button page)
- elevation scale (the public-home feedback-button shadow is not generalized); modal, popover, drawer, toast, and layered application surface
- breakpoint, mobile navigation, touch-target policy, responsive reflow, and safe-area behavior
- application-column count, responsive grid, sidebar width, data-table density, and form layout
- motion duration, easing curve, transition, and reduced-motion behavior — promote only after per-component computed capture of all five kinds; official documentation of a single curve or duration is not that gate
- Red Hat Mono, Font Awesome 5 Free, and pf-v6-pficon as UI-family tokens
- a font-license statement (the download destination returned a Red Hat contact form)
- a named executive quotation
