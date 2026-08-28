# Hyundai Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Hyundai Motor Company operates the Korean product site at `https://www.hyundai.com/kr/ko/e`. This contract covers the three first-party KR product surfaces the source inspected for tokens: the product home at `https://www.hyundai.com/kr/ko/e`, the vehicle catalogue at `https://www.hyundai.com/kr/ko/e/vehicles`, and the IONIQ 6 intro at `https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro`. The official design page at `https://www.hyundai.com/worldwide/en/company/innovation/design`, the 2023 typeface newsroom account at `https://www.hyundai.com/worldwide/en/newsroom/detail/0000000287`, and the official history at `https://www.hyundai.com/worldwide/en/footer/corporate/history/1967-2000` are named brand sources for vehicle-design and corporate context; they do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those three inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the official design, typeface, and history pages as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

Founded in 1967, Hyundai Motor Company now presents itself as a mobility company as well as an automaker, with its official history tracing the shift from the Ulsan assembly plant to current IONIQ electric vehicles. On the captured Korean product surfaces, that broad automotive identity resolves into a restrained interface: black and white text, a deep navy action color (`#002c5f`), and loaded HyundaiSans families. The documented vehicle-design direction, Sensuous Sportiness, has been Hyundai's design philosophy since 2018; it connects emotional appeal with structure, proportion, styling, and technology. This reference keeps that official vehicle-design context separate from web claims: it describes the captured KR product UI, not a universal Hyundai design system. The product capture favors flat, rectangular actions for its repeated navy vehicle CTA, but it is not a zero-radius system: the selected carousel control has a 6px radius and the chatbot is circular. Deep navy (`#002c5f`) is the repeated product action color; teal (`#007fa8`) appears in captured carousel controls, while cyan (`#00aad2`) appears on the chatbot. Black (`#000000`), white (`#ffffff`), muted gray (`#999999`), utility gray (`#444444`), and the dark footer (`#1c1b1b`) are also directly observed. The hex values, family names, Sensuous Sportiness phrasing, 1967 founding, Ulsan-to-IONIQ shift, 2018 date, and the 6px / circular exceptions are recorded. The source's own "restrained interface" wording and the "not a zero-radius system" / "not a universal Hyundai design system" boundaries are source statements. Keeping those recorded values on the surfaces that established them, rather than reading them as a house palette for every Hyundai surface, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Hyundai Motor Company was incorporated in 1967; its official history records the Ulsan assembly plant in 1968, the Pony launch in 1976, and its present framing as a mobility solution provider. The 2024 milestone account connects that history to the current dedicated IONIQ electric-vehicle lineup. Since 2018, Hyundai has described Sensuous Sportiness as the evolution of its design identity. Its official design page names structure, proportion, and styling, while the 2023 newsroom account separates vehicle infotainment work: the Seon design system and Hyundai Sans UI are an in-vehicle ccNC context, not proof of the KR public-web component rules above. The years, incorporation, Ulsan plant, Pony, mobility-solution-provider framing, 2024 IONIQ milestone, Sensuous Sportiness evolution, structure / proportion / styling, Seon, Hyundai Sans UI, and the ccNC separation are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-design-identity narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Open a vehicle from the catalogue at `https://www.hyundai.com/kr/ko/e/vehicles` through the navy filled vehicle action.
- Read the IONIQ 6 intro at `https://www.hyundai.com/kr/ko/e/vehicles/the-new-ioniq-6/intro`.
- Use the KR product home at `https://www.hyundai.com/kr/ko/e`, including the home carousel, the `Family Site` footer control, and the circular chatbot trigger.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source recorded no first-party audience segmentation with enough detail to define personas, and it tells readers not to use synthetic personas as evidence for Hyundai product decisions. No name, age, city, occupation, or affiliation is carried into this document or its sidecar.

### Distinctive traits

- Deep navy (`#002c5f`) as the repeated filled vehicle action, with white (`#ffffff`) action text
- Loaded HyundaiSans families: `HyundaiSansHeadKR` / `HyundaiSansTextKR`, plus loaded regional variants `HyundaiSansHeadKRR` / `HyundaiSansTextKRR`
- Flat rectangular navy actions at `0px`, a 6px teal carousel pager, and a circular cyan chatbot
- Black (`#000000`) and white (`#ffffff`) text and border values across the three product surfaces
- Teal (`#007fa8`) on home carousel controls and cyan (`#00aad2`) on the home chatbot only
- Footer utility chrome in `#1c1b1b` / `#999999` with a `#676767` border, set in system Arial
- Capture `interactionCount: 0`; only the carousel indicator shell carries an observed `selected` state

These seven traits, and the grouping that treats teal, cyan, and the circular chatbot as recorded uses rather than a general accent system, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Progress for Humanity.** Hyundai's official materials frame this as a mobility and sustainability vision. *UI implication:* none is inferred beyond the recorded product surfaces.
2. **Sensuous Sportiness.** The official vehicle-design philosophy combines emotional appeal with structure, proportion, styling, and technology. *UI implication:* do not turn that vehicle philosophy into unsupported web tokens.
3. **Legibility in mobility UX.** Hyundai's official Hyundai Sans UI description stresses legibility and hierarchy for driving environments. *UI implication:* this supports the typeface's brand context, not a substitution or web licence.

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

- Use the observed navy vehicle action only when the same product action pattern is intended.
- Use the loaded HyundaiSans KR families only where licensed assets are provided by Hyundai.
- Preserve a component's surface and state boundary when reusing this reference.

### Avoid

The source states these three as its Don't list, plus the source §9 brand constraint not to derive card, input, error-state, or motion specifications from this reference. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

- Treat teal, cyan, or the circular chatbot as a general-purpose accent or floating-action system.
- Substitute a system font while labelling it Hyundai Sans.
- Invent hover, focus, disabled, form-error, or responsive variants from this capture.
- Derive card, input, error-state, or motion specifications from this reference.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping teal and cyan on the recorded carousel and chatbot uses rather than a broader accent role, and keeping `#676767` on the Family Site border rather than as a color-token key, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Primary navy** (`#002c5f`): observed filled vehicle action on both the catalogue and IONIQ 6 product surfaces. Token-set path `tokens.colors.primary`.
- **Teal** (`#007fa8`): observed on home-surface carousel controls; no broader semantic role is inferred. Token-set path `tokens.colors.accent-teal`.
- **Cyan** (`#00aad2`): observed as the home-surface chatbot button background. Token-set path `tokens.colors.accent-cyan`.
- **Ink** (`#000000`): repeatedly observed text and border values across the three product surfaces. Token-set path `tokens.colors.ink`.
- **White** (`#ffffff`): repeatedly observed text and border values; also the navy action text. Token-set path `tokens.colors.on-primary`.
- **Muted gray** (`#999999`): observed in footer/list chrome. Token-set path `tokens.colors.muted`.
- **Utility gray** (`#444444`): observed in inline external-link chrome. Token-set path `tokens.colors.utility`.
- **Footer dark** (`#1c1b1b`): observed on the Family Site control in the KR product footer. Token-set path `tokens.colors.footer`.

`#676767` is the Family Site border. It is not a token-set color key.

### Spacing

The source token-set records `tokens.spacing` as an empty map. No spacing scale is promoted. Component paddings stay on those records: inline external link `10px 0px`, selected indicator shell `0px 4px`, Family Site `0px 13px`. Reading those paddings as component-local measurements and not as a missing scale to invent, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `none: 0` · `pager: 6`.

- Square (`0` / `0px`): navy vehicle action, primary-nav trigger, inline external link, selected indicator shell, Family Site. Token-set key `tokens.rounded.none`.
- Pager (`6` / `6px`): teal carousel pager control. Token-set key `tokens.rounded.pager`.
- Circle (`100%`): home-surface chatbot trigger. This is a body-named radius, not a token-set key.

`pager: 6` is a radius step. It is not a spacing step. The chatbot `100%` stays on that control. Neither was chosen over the others as a replacement. Keeping `none: 0` and `pager: 6` as two keys, and keeping the chatbot `100%` on its own record, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

### Elevation

The repeated captured components in source §4 have `box-shadow: none`, except the single home-surface chatbot trigger, which has `rgba(0,0,0,0.15) 0px 0px 20px 0px`. Token-set path `tokens.shadow.chatbot`. No broader elevation scale is asserted. Reading that as a chatbot-only shadow record rather than a depth system, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.

### Motion

No duration, easing, animation, or reduced-motion behavior was captured. Motion tokens and rules are unresolved. No motion token is promoted. The source lists no curve values. Promote a motion token for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. That five-kind gate, and the decision not to promote a motion token from this capture, are a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Hyundai's 2023 official newsroom describes Hyundai Sans UI as a next-generation mobility UX typeface that inherits the formative characteristics of Hyundai Sans. That statement concerns the ccNC infotainment context; it does not establish Hyundai Sans UI as the web product-surface family. |
| Live computed product use, FontFaceSet-backed | `HyundaiSansTextKR` (287 observed uses) and `HyundaiSansHeadKR` (84) are visible computed families with matching loaded FontFaceSet entries in the supplied KR product capture. `HyundaiSansHeadKRR` (43) and `HyundaiSansTextKRR` (35) are likewise loaded and visibly used variants. |
| Official distributed asset | The supplied capture records no font source URLs, and this review found no public first-party web-font licence for the KR files. The loaded families may be described by name and observed metrics, but no downloadable asset or reuse licence is asserted. |
| System / declared-only | Arial is a system family observed in utility chrome. `element-icons` is declared in the capture but has no visible usage. Neither is promoted to the UI family token. |
| Outside these captures | Vehicle infotainment (Seon / Hyundai Sans UI / ccNC) remains the official type context named above; it is not a public-web family assignment. |

Reading the 2023 newsroom line as official product-use context rather than a web family assignment, reading the missing source URLs as a licence boundary rather than permission to host the files, and reading Arial / `element-icons` as system or declared-only rather than the UI face, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

### Family

- **Current visible display family:** `HyundaiSansHeadKR`. Token-set path `tokens.typography.family.display`.
- **Current visible body family:** `HyundaiSansTextKR`. Token-set path `tokens.typography.family.body`.
- **Loaded regional variants:** `HyundaiSansHeadKRR` (primary-nav trigger) and `HyundaiSansTextKRR`.
- Do not replace unavailable or unobserved brand type with a system font, and do not label a system font Hyundai Sans. The loaded families are canonical here only because computed visible use and loaded FontFaceSet entries agree on the three captured KR product surfaces.

The token-set note, kept as the facts it names: only values observed in the supplied three-surface KR product capture are tokenized; `HyundaiSansTextKR` and `HyundaiSansHeadKR` have visible computed use backed by loaded FontFaceSet entries; `HyundaiSansHeadKRR` and `HyundaiSansTextKRR` are loaded regional variants; Arial is system chrome and `element-icons` is declared-only. The no-substitution rule above, and the reading that the loaded families are canonical here only because computed visible use and loaded FontFaceSet entries agree, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

### Type roles

Token-set roles keep the source's unitless line-height ratios. The observed-hierarchy table keeps the source's px line-heights. `1.32` is not rewritten as `58px`. `1.15` is not rewritten as `18.4px`. Those two writings sit on those records. Neither was chosen as a replacement. Keeping the token-set ratios on their own rows, the px hierarchy on its own table, and `tokens.typography.body.size` `16` and `tokens.typography.action.size` `16` as two type keys rather than a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display h2 | HyundaiSansHeadKR | 44 | 400 | 1.32 | -0.4 | Observed h2 on the KR product home surface |
| Body | HyundaiSansTextKR | 16 | 400 | 1.15 | — | Observed product-surface text |
| Action | HyundaiSansTextKR | 16 | 500 | 1.15 | -0.4 | Observed navy vehicle action |

| Role | Family | Size | Weight | Line Height | Tracking | Surface |
|------|--------|------|--------|-------------|----------|---------|
| H2 | HyundaiSansHeadKR | 44px | 400 | 58px | -0.4px | home |
| Body/list | HyundaiSansTextKR | 16px | 400 | 18.4px | normal | all three product surfaces |
| Vehicle action | HyundaiSansTextKR | 16px | 500 | 18.4px | -0.4px | catalogue and IONIQ 6 |
| Primary nav trigger | HyundaiSansHeadKRR | 16px | 400 | 30px | -0.4px | all three product surfaces |
| Inline external link | HyundaiSansHeadKR | 14px | 500 | 14px | -0.4px | all three product surfaces |

Token-set `tokens.typography.display-h2.size` is `44`. Token-set `tokens.typography.body.size` and `tokens.typography.action.size` are both `16`; they stay as two keys. Action `16` is a type size. It is not a spacing step — `tokens.spacing` is empty.

### Assets

The catalog identity records `logo.type: simpleicons` and `logo.slug: hyundai`. That is an identity pointer, not a Hyundai-hosted file and not a reusable brand download. No favicon or wordmark URL is recorded in the source body. Product photography on the three KR surfaces is first-party vehicle imagery; it is not replaced with invented brand-color decoration. Classifying the simpleicons slug as an identity pointer rather than a hosted brand file, and not replacing first-party vehicle photography with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Only the variants below are retained because the supplied collector evidence records their selector, surface, and computed values. The capture has `interactionCount: 0`; hover, focus, pressed, disabled, menu-open, and validation states are not asserted. No component interaction state was captured. The collector reports `interactionCount: 0` and only the carousel indicator shell carries an observed `selected` state. Empty, loading, error, success, skeleton, disabled, hover, focus, and pressed treatments are unresolved.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless — a destination link, a nav or dialog trigger, or a pager that only selects — and the reason given is always that semantic one. Generic `Focus` capture is not treated as a `focus-visible` treatment. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

The source token-set declares one component, `selected-carousel-indicator`, with `type: tab`. That primitive type is attached only to the Selected indicator shell. The other §4 records are not in the token set.

### Navy filled vehicle action

- Role: destination control that opens a vehicle product surface
- Primitive type: not in the token set · Kind: interactive
- Domain: vehicle catalogue and IONIQ 6 intro
- Background: `#002c5f`
- Text: `#ffffff`
- Radius: 0px
- Font: 16px / 500 / HyundaiSansTextKR
- Token-set font record: `16` / `500` / `1.15` / `-0.4` · Token-set use: `Observed navy vehicle action`
- Use: `surface-2::[data-omd-capture="15"]`, class `btn nuxt-link-active`; observed on `surface-2` (vehicle catalogue) and `surface-3` (IONIQ 6 intro), 2 occurrences, no state captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a `nuxt-link` destination; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the catalogue or IONIQ 6 intro is not an operation this control reports as success |

### Primary navigation trigger

- Role: top-level LNB trigger on the three captured product surfaces
- Primitive type: not in the token set · Kind: interactive
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Font: 16px / 400 / HyundaiSansHeadKRR
- Use: `home::[data-omd-capture="2"]`, class `lnb_depth0_btn`; observed on home, vehicle catalogue, and IONIQ 6 intro, 15 occurrences, no state captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web trigger; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A trigger whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens the top-level nav; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Nav trigger; the opened layer, not this button, reports failure |
| success | not-applicable | Same role reason: opening the LNB is not an operation with a success result on this button |

### Inline external link

- Role: small in-phrase external destination
- Primitive type: not in the token set · Kind: interactive
- Background: transparent
- Text: `#444444`
- Radius: 0px
- Padding: 10px 0px
- Font: 14px / 500 / HyundaiSansHeadKR
- Use: `home::[data-omd-capture="128"]`, class `btn btn-external-sm in-phrase`; observed on all three product surfaces, 9 occurrences, no state captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control sends the reader to an external destination; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching an external page is not an operation this link reports as success |

### Teal pager control

- Role: home-surface carousel pager
- Primitive type: not in the token set · Kind: interactive
- Background: `#007fa8`
- Radius: 6px
- Use: `home::[data-omd-capture="75"]`, class `el-carousel__button`; observed on home only, 2 occurrences, no state captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web pager; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A pager whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control advances the carousel; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Pager control; it does not report a failed commit |
| success | not-applicable | Same role reason: changing the visible slide is not a success result on this button |

### Selected indicator shell

- Role: selected home-surface carousel indicator shell
- Primitive type: `tab` · Kind: interactive
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px 4px
- Font: 16px / 400 / HyundaiSansTextKR
- Token-set use: `Selected shell observed on the home surface`
- Token-set path: `tokens.components.selected-carousel-indicator` (`type: tab`, `fg: #000000`, `radius: 0px`, `active: true`)
- Use: `home::li`, class `el-carousel__indicator el-carousel__indicator--horizontal is-active`; observed on home only, 13 occurrences, `selected` is the sole captured state. The child visual control was not separately measured.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above; `selected` is the sole captured state |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a selected indicator shell; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Tab indicator; the slide, not this shell, reports failure |
| success | not-applicable | Same role reason: remaining the selected shell is not an operation with a success result |

### Family Site control

- Role: footer utility chrome labeled `Family Site`
- Primitive type: not in the token set · Kind: interactive
- Background: `#1c1b1b`
- Text: `#999999`
- Border: 1px solid `#676767`
- Radius: 0px
- Padding: 0px 13px
- Font: system Arial — retained as footer utility chrome, not a HyundaiSans UI token
- Use: `home::[data-omd-capture="146"]`; observed on all three product surfaces, 3 occurrences
- Published label: `Family Site`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A footer control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens Family Site chrome; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Utility trigger; the opened list, not this control, reports failure |
| success | not-applicable | Same role reason: opening Family Site is not an operation with a success result on this control |

### Circular chatbot button

- Role: home-surface chatbot dialog trigger
- Primitive type: not in the token set · Kind: interactive
- Background: `#00aad2`
- Radius: 100%
- Shadow: rgba(0,0,0,0.15) 0px 0px 20px 0px
- Font: 16px / 500 / HyundaiSansTextKR
- Use: `home::[data-omd-capture="122"]`, class `btn ibtn chatbot`; observed once on the home product surface, no state captured. This is single-surface, low-confidence component evidence and does not establish a general floating-action pattern.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web trigger; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A trigger whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens the chatbot; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Dialog trigger; the opened panel, not this button, reports failure |
| success | not-applicable | Same role reason: opening the chatbot is not an operation with a success result on this button |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied evidence establishes three desktop product routes, but it does not contain a responsive breakpoint or grid measurement. The catalogue and IONIQ 6 routes share the navy filled vehicle action; no universal card, spacing scale, or layout grid is promoted from the capture. No responsive viewport comparison was supplied. Breakpoints, touch-target rules, and collapse behavior remain unresolved.

The 44px home H2, 16px body/action, 16px nav trigger, 14px external link, 6px pager, and 100% chatbot are desktop-capture measurements, not cross-viewport specifications. Reading the three routes as desktop captures rather than a responsive system, leaving breakpoint / grid / touch / collapse unnamed rather than filling them, and not promoting a universal card, spacing scale, or layout grid from the capture, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Official corporate language frames Hyundai around “Progress for Humanity,” while the official design material describes Sensuous Sportiness as combining emotional appeal with structure, proportion, styling, and technology. The supplied capture does not preserve reliable product-copy text, so no verbatim voice samples or prescriptive copy rules are claimed here.

Published strings the source records, kept byte-exact:

- Progress for Humanity
- Sensuous Sportiness
- Hyundai Motor Company
- Hyundai Sans
- Hyundai Sans UI
- Seon
- IONIQ
- Pony
- Family Site
- mobility solution provider

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, and reading the two official lines as corporate and vehicle-design language rather than a product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not Hyundai-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not Hyundai-authored or a separately published UI specification.

- **Hover, focus, pressed, disabled, menu-open, and validation treatments.** The collector reports `interactionCount: 0`. Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
- **Empty, loading, error, success, and skeleton treatments.** Unresolved as values.
- **Responsive breakpoint, grid, touch-target, and collapse behavior.** The three routes are desktop captures.
- **Spacing scale.** `tokens.spacing` is empty.
- **Motion duration, easing, animation, and reduced-motion.** No motion token is promoted. Promote a curve only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Product-copy samples.** The capture does not preserve reliable product-copy text.
- **Font source URLs and a public first-party web-font licence.** Families may be named; no downloadable asset is asserted.
- **Display h2 line-height writings.** Token-set `1.32` and observed `58px` are both kept. Neither was chosen as a replacement.
- **Body / action line-height writings.** Token-set `1.15` and observed `18.4px` are both kept.
