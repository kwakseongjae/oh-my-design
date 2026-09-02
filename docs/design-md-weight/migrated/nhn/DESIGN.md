# NHN Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

NHN is a Korean IT group whose public corporate presence connects a long Hangame-era history with businesses in games, payments and advertising, technology, commerce, and content. This contract covers the three public corporate/disclosure surfaces the source inspected on 2026-07-13: the main site at `https://www.nhn.com/`, the services listing at `https://www.nhn.com/services?tab=technology`, and the investor-relations financial page at `https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial`. Official history at `https://www.nhn.com/company?tab=about`, the official CI story at `https://inside.nhn.com/corp/245`, the official typeface story at `https://inside.nhn.com/corp/260`, the official slogan story at `https://inside.nhn.com/corp/164`, and the Brand Resource page at `https://www.nhn.com/en-US/company?subTab=brandResource&tab=brand` are named brand sources; they provide narrative and asset context and do not supply the computed interface tokens below. Every value stays attached to the surface that established it. YAML `tokens.note` records corporate-web evidence only: three public NHN corporate/disclosure surfaces; colors and components below are live computed observations; no authenticated product UI or documentation chrome was captured. Reading those three inspected URLs as this contract's token surfaces, keeping the history / CI / typeface / slogan / Brand Resource URLs as named sources that do not supply computed interface tokens, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

The supplied July 2026 runtime evidence is limited to those three public corporate surfaces. Across those surfaces, the visible interface is restrained and nearly monochrome: `#212126` is the principal ink, `#36363d` and `#57575b` carry hierarchy, and `#f8f8f8` provides the recurring soft surface. The collector observed no shadows and only zero-radius navigation/action controls plus a 50px pill on one low-confidence services control. These are corporate-web observations, not a claim about NHN's separate customer products or their documentation interfaces. The hex values, the 50px pill, `box-shadow: none`, and the zero-radius navigation/action controls are the source's own. Readings of that layer as restrained and nearly monochrome, of `#212126` as the principal ink, and of the three-surface packet as corporate-web observations rather than as a claim about separate customer products or documentation interfaces, are a derived editorial implementation inference from the verified surfaces; they are not NHN-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. NHN traces its history to Hangame Communication and the Hangame online-game portal, then describes a modern global IT group working across multiple business areas. Its current brand expression is built around **Weaving New Play**: NHN’s own rebrand story explains the phrase as a move from a simple connection toward a more multidirectional act of weaving. Its official timeline records the 2023 public introduction of “Weaving New Play”; its 2024 CI story explains the subsequent folded-paper identity, the 27-degree fold, and the achromatic colour decision. The 2024 CI then made that idea tangible through folded-paper forms, a 27-degree fold motif, and a decision to abandon a single fixed brand colour in favour of achromatic identity. Official history and the official CI story provide that context; they do not by themselves supply interface tokens. The Hangame Communication origin, the Hangame online-game portal, the businesses in games, payments and advertising, technology, commerce, and content, the 2023 public introduction of “Weaving New Play”, the 2024 CI, the folded-paper identity, the 27-degree fold, the achromatic colour decision, and that closing sentence of the CI story are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification. Each names a surface the source records. They do not come from the source's persona section.

- the main site at `https://www.nhn.com/`
- a services listing at `https://www.nhn.com/services?tab=technology`
- an investor-relations financial page at `https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial`
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source records that NHN has not supplied first-party audience-segment or persona documentation in the sources reviewed for this reference, and it instructs not to fabricate named user personas from the corporate, services, or IR surfaces, so those unfinished slots are dropped rather than promoted, and no name, motivation, affiliation classification, or demographic segment list is carried into this document or its sidecar. Dropping those unfinished slots rather than promoting them, carrying no name, motivation, affiliation classification, or demographic segment list, and refusing to invent a group the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

- Official brand rationale: connection reinterpreted as multidirectional weaving
- Corporate-web palette: near-black ink with neutral grey hierarchy and white canvas
- Flat visual treatment: the captured components report `box-shadow: none`
- Live UI typography: Pretendard Variable; Main Pretendard Variable appears in Korean heading roles
- Official NHN Sans is a distinct brand asset, not a live-family token for these captured pages

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not NHN-authored or a separately published UI specification. The numbered stems rest on official rebrand and brand-resource material the source attributes to NHN. Every *UI implication* below is the source's own editorial reading.

1. **Connection becomes weaving.** Official rebrand material frames the idea as multidirectional connection. *UI implication:* organise diverse corporate information under one calm, consistent structure.
2. **Achromatic identity leaves room for variety.** NHN says it abandoned a single colour to open varied combinations. *UI implication:* keep corporate chrome neutral unless a directly observed surface provides a different role.
3. **CI and typography are controlled brand assets.** NHN asks that brand resources not be arbitrarily changed. *UI implication:* do not substitute NHN Sans, its CI, or unverified font-family names as though they were live tokens.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not NHN-authored or a separately published UI specification.

- Keep the corporate chrome neutral and let the ink-to-grey text hierarchy do the work.
- Use the observed flat treatment: no shadow on captured corporate components.
- Keep `Pretendard Variable` for live UI/body roles represented in this evidence.
- Treat NHN Sans as an official communication asset until a target surface proves live use.
- Keep the one observed disabled previous-control treatment tied to its services-surface context.

### Avoid

The source states these four as its Don't list, plus the §9 instruction not to use this reference as a substitute for an NHN affiliate product, authenticated app, or documentation system. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not NHN-authored or a separately published UI specification.

- Promote affiliate-product colours or components into the NHN corporate reference without direct evidence.
- Rename `__Poppins_1848dd` to Poppins in a token set without a reliable public-family mapping.
- Invent hover, focus, pressed, error, or success variants: the supplied collector has zero interaction captures.
- Generalize the low-confidence services pill into a global button style.
- Use this reference only for an NHN-like **corporate information surface**: white canvas, near-black `#212126` text, a muted `#36363d` / `#57575b` hierarchy, `#f8f8f8` neutral surface moments, Pretendard Variable body/UI text, and no shadows. Do not use it as a substitute for an NHN affiliate product, authenticated app, or documentation system.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that happen to share `#ffffff`, keeping `tokens.colors.subtle` `#62626a` unmerged from `tokens.colors.muted` `#57575b` and from `tokens.colors.hint` `#aaaaae`, attaching every role to the surface the source recorded, and reading the official CI achromatic decision as support for the neutral brand narrative rather than as permission to promote affiliate-product colours into this corporate-web token set, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Primary Ink** (`#212126`): `tokens.colors.primary`. Observed text and transparent action labels across all three captured surfaces. Catalog identity `primary_color` is `#212126`.
- **Foreground** (`#36363d`): `tokens.colors.foreground`. Observed corporate primary-navigation list item text.
- **Muted** (`#57575b`): `tokens.colors.muted`. Most frequent observed secondary/list text colour.
- **Subtle** (`#62626a`): `tokens.colors.subtle`. Secondary action/label text on the services surface.
- **Hint** (`#aaaaae`): `tokens.colors.hint`. Low-emphasis list text on the IR surface.
- **Surface** (`#f8f8f8`): `tokens.colors.surface`. Recurrent neutral background, including the observed services pill control.
- **Canvas / On Ink** (`#ffffff`): Observed page background and contrast text. Token-set path `tokens.colors.canvas` is the page-background writing. Token-set path `tokens.colors.on-primary` is the contrast-text writing. They stay two keys that share the hex.
- **Hairline** (`#e5e7eb`): `tokens.colors.hairline`. Computed border colour recurring in the raw collector output.

NHN’s official CI story says the company chose achromatic brand colour rather than a single colour so the identity could accommodate a variety of combinations. That official sentence is recorded. It does not promote colours from affiliate product surfaces into this corporate-web token set.

`tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xs: 4` · `sm: 7` · `md: 8` · `base: 10` · `lg: 22` · `xl: 32` · `xxl: 80`.

Source §5 restates the same cluster as measured spacing observations of 4, 7, 8, 10, 22, 32, and 80px; they are observations rather than a complete spacing scale. Both writings stay.

`tokens.spacing.xs: 4` is a spacing step. It is not the services-pill padding `4px`. `tokens.spacing.sm: 7` is a spacing step. It is not the secondary-list padding `7.008px`. `tokens.spacing.md: 8` is a spacing step. It is not the services-pill padding `8px`. `tokens.spacing.base: 10` is a spacing step. `tokens.spacing.lg: 22` is a spacing step. It is not the secondary-label line height `22px`. `tokens.spacing.xl: 32` is a spacing step. It is not the Large Korean display size `32px`. `tokens.spacing.xxl: 80` is a spacing step. It is not the primary-list padding `80px`. Keeping the YAML unitless cluster and the §5 measured-observation restatement as two writings, and keeping those unitless spacing steps on their own keys rather than rewriting them as those paddings or type sizes, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `none: 0` · `pill: 50`.

- Zero (`0` / `0px`): captured navigation/action controls. Token-set key `tokens.rounded.none`. YAML `previous-control` also records `radius: "0px"`.
- Pill (`50`): token-set key `tokens.rounded.pill: 50`. The services pill records `Radius: 50px` as that control's local geometry.

`tokens.rounded.none: 0` stays the unitless none step. `tokens.rounded.pill: 50` stays the unitless pill step. It is not rewritten as a global button radius. Keeping `0` and `50` as two keys, and keeping the services-pill `50px` on that control rather than as a replacement for the YAML step, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

### Elevation

All captured representative components report `box-shadow: none`. Token-set path `tokens.shadow.none` with value `none`. Separation in the captured corporate UI comes from text hierarchy, white/neutral surfaces, and the recurring `#e5e7eb` computed border colour. No elevation ramp is inferred beyond that evidence. The `none` token, the live `box-shadow: none` observations, the `#e5e7eb` hairline, and the source's refusal to infer an elevation ramp are the source's own. Reading that shadow-free packet as a flat treatment for the observed corporate components only is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

### Motion

No motion durations, easing curves, or interaction transitions were captured. The raw class names are not sufficient evidence to publish motion tokens; leave motion unresolved for this reference. No motion token is promoted. Treating that measured absence, and the source's own raw-class-name insufficiency, as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, requiring the per-component computed observation, and refusing a partial confirmation, is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating `Pretendard Variable` as the live UI-family token, treating `Main Pretendard Variable` as a live display-KR family with a source-url limitation, treating `__Poppins_1848dd` as an unresolved public-name family rather than as Poppins, treating NHN Sans as an official distributed brand asset that is not a live UI token or specimen here, treating declared-only faces as omitted, reading typography beyond the three captured corporate/disclosure surfaces as outside this contract, and refusing to substitute a system font while calling it Pretendard Variable or NHN Sans, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | Official history and the CI story describe brand context. They do not publish a universal current typography token. NHN Sans is presented on the Brand Resource page as the company's exclusive typeface; the official typeface story says it is intended for official communications. It was not observed as a loaded family on the three captured surfaces, so it is not a live UI token or specimen here. Classifying official product-use as that Brand Resource / typeface-story claim rather than as a live-family assignment on the three captured pages is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification. |
| Live computed + FontFaceSet corroborated — `Pretendard Variable` | 370 observed uses across body, buttons, cards, headings, and lists. The bundle records 92 NHN-hosted subset source URLs under `static.nhnent.com`. Token-set path `tokens.typography.family.ui`. |
| Live computed + FontFaceSet corroborated — `Main Pretendard Variable` | 32 observed uses, including Korean `h2`/`h3` roles. The collector found it loaded, but did not retain an individual source URL; retain it as a live family with that source-url limitation. Token-set path `tokens.typography.family.display-kr`. |
| Live internal family, public-name unresolved — `__Poppins_1848dd` | two heading uses and NHN-hosted font assets were observed. The collector does not establish that this internal runtime name is the public Poppins family, so `Poppins` is not a typography token. |
| Official distributed brand asset / official product-use — `NHN Sans` | Brand Resource and the official typeface story as above. Not a live UI token or specimen on the three captured surfaces. |
| Declared-only | `__Poppins_Fallback_1848dd` and `swiper-icons` appeared without visible use; neither is promoted. |
| Outside these captures | Typography beyond the three captured corporate/disclosure surfaces stays outside this contract. |

### Family

- **Current visible UI family:** `Pretendard Variable` — Token-set path `tokens.typography.family.ui`.
- **Korean heading / display family:** `Main Pretendard Variable` — Token-set path `tokens.typography.family.display-kr`. Live family with the source-url limitation recorded above.
- **Official communication asset, not live here:** `NHN Sans`.
- **Internal runtime family, public name unresolved:** `__Poppins_1848dd`. Not rewritten as Poppins.

Do not replace Pretendard Variable or Main Pretendard Variable with a system substitute, and do not present NHN Sans or `__Poppins_1848dd` as those live families. That fallback prohibition, and keeping `__Poppins_1848dd` off a Poppins token, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.50` is not rewritten as a fixed px. `1.75` is not rewritten as a fixed px. `1.57` is not rewritten as a fixed px. Token-set `use` strings are kept verbatim; where source §3 notes are longer, both writings are kept. Keeping YAML line heights as unitless ratios, keeping the YAML `use` strings and the §3 evidence-boundary notes on separate readings, keeping Large Korean display as a §3 hierarchy row that is not a YAML typography key, and keeping title `20` / display `32` / body `16` as type sizes rather than as spacing steps, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | §3 evidence boundary |
|---|---|---:|---:|---:|---|---|
| Corporate body/list | Pretendard Variable | 16px | 400 | 1.50 (24px) | Observed corporate body/list text | Repeated across all captured surfaces |
| Primary action | Pretendard Variable | 16px | 500 | 1.75 (28px) | Observed primary navigation action | Transparent action-label control |
| Secondary label | Pretendard Variable | 14px | 500 | 1.57 (22px) | Observed secondary action and label | Services controls/labels |
| Korean title | Main Pretendard Variable | 20px | 700 | 1.50 (30px) | Observed Korean heading | Captured `h3` role |
| Large Korean display | Main Pretendard Variable | 32px | 800 | 48px | not a YAML `tokens.typography` key | One captured `h2` role |

Token-set `tokens.typography.body.size` is `16`. Token-set `tokens.typography.nav.size` is `16`. Token-set `tokens.typography.label.size` is `14`. Token-set `tokens.typography.title.size` is `20`. Body `16` is a type size. It is not a spacing step. Title `20` is a type size. Large Korean display `32` is a type size. It is not `tokens.spacing.xl: 32`. Secondary-label line height `22px` is a type metric. It is not `tokens.spacing.lg: 22`.

### Assets

Catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=nhn.com&sz=128`. That URL is a third-party favicon-proxy pointer, not an NHN-hosted brand file. NHN Sans remains an official communication asset on the Brand Resource page and in the official typeface story; it is not a live specimen on the three captured surfaces. Reading the Google s2 slug as an identity pointer rather than a hosted brand file, and reading NHN Sans as that official communication asset rather than as a live-family token here, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The only state recorded by the supplied collector is a **disabled** previous-navigation control on the services surface: transparent background, `#212126` text, and `opacity: 0.4`. YAML `tokens.components.previous-control.states` writes `disabled opacity 0.4`. Hover, focus, pressed, loading, error, empty, and success states were not captured and are unresolved. The collector has zero interaction captures. No hover, focus, pressed, error, or success variant is invented.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item, a previous-navigation arrow that commits no operation in place, a secondary label action, or a low-confidence services pill that is not a global commit control — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `type: button` on `tokens.components.previous-control` only. Primary list item, Secondary list item, Transparent action label, Secondary label action, and Services pill are labelled `not in the token set`. Generic `Focus` capture is not treated as a `focus-visible` treatment. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, labelling every non-YAML component `not in the token set`, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary list item

- Role: Observed corporate primary-navigation list item (`home::li`; also present on services and IR surfaces)
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Text: `#36363d`
- Radius: 0px
- Padding: 0px 80px 0px 0px
- Font: 16px / 400 / Pretendard Variable
- Observed: default only
- The `80px` in the padding is this list item's padding. It is not `tokens.spacing.xxl: 80`. The `16px / 400` font is this list item's font; it is not the YAML nav role (`16` / `500`, Observed primary navigation action). Reading those figures as this list item's geometry rather than as those YAML spacing or nav-role rows is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on home; also present on services and IR |
| hover | applicable | Pointer-web destination list item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable navigation item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination list item does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching the destination is not an operation this item reports as success |

### Secondary list item

- Role: Observed corporate secondary/list item (`home::li`; also present on services and IR surfaces)
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Text: `#57575b`
- Radius: 0px
- Padding: 7.008px 0px
- Font: 16px / 400 / Pretendard Variable
- Observed: default only
- The `7.008px` in the padding is this list item's padding. It is not `tokens.spacing.sm: 7`. Reading that figure as this list item's geometry rather than as that YAML spacing step is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on home; also present on services and IR |
| hover | applicable | Pointer-web list item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable list item; visual treatment omitted |
| disabled | applicable | A list item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control selects a destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A destination list item does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching the destination is not an operation this item reports as success |

### Transparent action label

- Role: Observed transparent action control (`home::[data-omd-capture="45"]`) across the corporate surfaces
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Text: `#212126`
- Radius: 0px
- Font: 16px / 500 / Pretendard Variable
- Token-set typography role beside this control: `tokens.typography.nav` — Observed primary navigation action; 16 / 500 / 1.75
- Observed: default only
- The `16px / 500` font is this action-label control's font. YAML nav `use` is `Observed primary navigation action`. Source §3 writes `Transparent action-label control`. Both writings stay. Reading those figures as this control's geometry rather than as a spacing step, and keeping the YAML nav `use` and the §3 “Transparent action-label control” note as two writings, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured across the corporate surfaces |
| hover | applicable | Pointer-web action label; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An action label whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a transparent navigation action; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A navigation action label does not report a failed request on itself |
| success | not-applicable | Same role reason: reaching the destination is not an operation this label reports as success |

### Secondary label action

- Role: Observed services-surface control (`surface-2::[data-omd-capture="49"]`)
- Primitive type: not in the token set · Kind: interactive
- Anatomy: label
- Text: `#62626a`
- Radius: 0px
- Font: 14px / 500 / Pretendard Variable
- Token-set typography role beside this control: `tokens.typography.label` — Observed secondary action and label; 14 / 500 / 1.57
- Observed: default only
- Do not generalize this services-surface control to other NHN surfaces. That surface-scope reading is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the services surface |
| hover | applicable | Pointer-web services control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a secondary label action; it commits no operation in place |
| error | not-applicable | The secondary label action commits no operation in place |
| success | not-applicable | The secondary label action commits no operation in place |

### Previous control

- Role: Observed previous-navigation control on the services surface
- Primitive type: `button` · Kind: interactive
- Anatomy: control
- Text: `#212126`
- Radius: 0px
- Font: 16px / 400 / Pretendard Variable
- Disabled: Observed disabled instance has transparent background and `opacity: 0.4` (`surface-2::[data-omd-capture="37"]`)
- Token-set type: `tokens.components.previous-control.type` `button`
- Token-set fg: `tokens.components.previous-control.fg` `#212126`
- Token-set radius: `tokens.components.previous-control.radius` `0px`
- Token-set font: `tokens.components.previous-control.font` `16px / 400 Pretendard Variable`
- Token-set states: `tokens.components.previous-control.states` `disabled opacity 0.4`
- Token-set use: `tokens.components.previous-control.use` `Observed previous-navigation control on the services surface`
- Keep this disabled treatment tied to its services-surface context. The `0px` radius is this control's radius. It is not a spacing step. YAML `disabled opacity 0.4` and the §4 / §14 writing `opacity: 0.4` both stay. YAML `16px / 400 Pretendard Variable` and the §4 writing `16px / 400 / Pretendard Variable` both stay. Reading those figures as this control's geometry, keeping the YAML states string beside the §14 `opacity: 0.4` writing rather than choosing one as a replacement, and keeping the YAML font string beside the §4 Font writing rather than choosing one as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web previous-navigation control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | Captured: transparent background, `#212126` text, `opacity: 0.4` |
| loading | not-applicable | This control is a previous-navigation arrow; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A previous-navigation arrow does not report a failed request on itself |
| success | not-applicable | Same role reason: paging backward is not an operation this control reports as success |

### Services pill

- Role: One low-confidence observed services control (`surface-2::[data-omd-capture="43"]`); do not generalize it to other NHN surfaces
- Primitive type: not in the token set · Kind: interactive
- Anatomy: control
- Background: `#f8f8f8`
- Text: `#62626a`
- Radius: 50px
- Padding: 4px 8px 4px 14px
- Font: 14px / 500 / Pretendard Variable
- Observed: default only
- The `50px` radius is this pill's local geometry. It is not a global button style, and it is not a replacement for YAML `tokens.rounded.pill: 50`. The `4px` and `8px` in the padding are this pill's padding. They are not `tokens.spacing.xs: 4` and not `tokens.spacing.md: 8`. Reading those figures as this pill's geometry, and refusing to generalize the low-confidence services pill into a global button style, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured once on the services surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A pill control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This low-confidence services pill is not a commit control; it reports no in-progress operation on itself |
| error | not-applicable | The pill commits no operation in place |
| success | not-applicable | The pill commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The collected evidence supports a flat corporate information layout: transparent navigation/actions, neutral `#f8f8f8` surface moments, and a white canvas. Measured spacing clusters include 4, 7, 8, 10, 22, 32, and 80px; they are observations rather than a complete spacing scale. No product-app layout or documentation layout was captured.

The supplied collector used only a 1440×900 viewport. Responsive breakpoints, mobile navigation, and touch-target behaviour are unresolved and intentionally omitted.

Reading the collected evidence as supporting a flat corporate information layout, reading those spacing clusters as observations rather than a complete spacing scale, and reading the 1440×900 figure as the collector viewport the source recorded rather than as a breakpoint token, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

NHN’s first-party language centres on connection and future-facing expansion: the official slogan is “Weaving New Play,” while the company’s rebrand story describes a shift from simple connection to multidirectional weaving. Corporate copy should stay explanatory and composed rather than adding product-marketing superlatives. Those two sentences are the source's own Voice & Tone record. Calling that register explanatory and composed, and refusing to treat the slogan story as a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not NHN-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not NHN-authored or a separately published UI specification.

- hover, focus, pressed, loading, error, empty, and success visual treatments
- motion durations, easing curves, and interaction transitions
- responsive breakpoints, mobile navigation, and touch-target behaviour
- a complete spacing scale
- an elevation ramp
- NHN Sans as a live family on the three captured surfaces
- a public-family mapping for `__Poppins_1848dd`
