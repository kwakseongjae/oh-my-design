# Ohouse Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Ohouse (오늘의집) is Bucketplace’s lifestyle service for taking an envisioned life into a real space. Its official account joins user-made home content, a community, commerce, and home-related O2O services. This contract covers the three consumer URLs the source captured on 2026-07-13: the populated consumer home at `https://ohou.se/`, plus `/experts` (`https://ohou.se/experts`) and `/customer_center` (`https://ohou.se/customer_center`). Three consumer URLs were captured, but only the home yielded a populated UI tree; `/experts` and `/customer_center` are recorded as product-surface attempts, not a basis for generalising their chrome. No official public design-system or brand-token export was found in this run. The Bucketplace corporate site at `https://www.bucketplace.com/en/` is official company/service context; it is not a token export. This reference records a live product snapshot rather than treating the corporate site or a historic app icon as a token export. Treating those three consumer URLs as this contract’s captured surfaces, treating only the populated home as the token surface, keeping `/experts` and `/customer_center` as product-surface attempts rather than as a basis for generalising their chrome, and treating the corporate site and a historic app icon as not a token export, are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification.

The consumer site snapshot shows the corresponding product expression: image-led commerce and a relatively quiet text-and-control layer. The captured desktop home uses a white canvas, dark neutral copy, a bright blue action color, and compact controls rather than a published visual system. White `#ffffff` control surfaces and dark `#424242` / `#2f3438` body text dominate the populated home capture. `#00a1ff` appears as a compact filled action and as a text-action color; it is an observed action role, not an asserted immutable brand color. The loaded UI face is `Pretendard Variable`; the home’s computed stack includes declared fallbacks but only the first family is loaded and visibly used. The representative product-list articles are visually unframed at their outer element: transparent background, zero radius, and zero padding. Their child composition was not separately measured. Captured radii are mostly `0px`, with observed `4px` utility/action corners and a `24px` circular control. The hex values, family name, radii, and surface names in this paragraph are recorded. The characterizations built on them — image-led commerce, a relatively quiet text-and-control layer, compact controls rather than a published visual system — are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Bucketplace was incorporated in 2014 and launched Ohouse Store in 2016. Its current first-party account frames Ohouse as an integrated lifestyle service: people encounter real-user content, connect through a community, discover products, and can continue into home-remodeling, moving, cleaning, installation, and consultation services. The company’s own timeline records expansion from the store to O2O remodeling, its original brand Ohouse layer, the Ohouse Bukchon showroom, Ohouse Kitchen, and the Ohouse Interior Pangyo Lounge. The current corporate story also extends the service beyond online discovery to purchase, installation, offline showrooms, and renovation consultation. The visual reference should therefore keep its claims at two distinct levels: the product snapshot above is live consumer-web evidence, while the service arc and mission are corporate context. The corporate presentation does not publish a corresponding public component library, token set, or interaction specification. The years, Ohouse Store launch, service list, timeline names, purchase / installation / offline showrooms / renovation consultation extension, two-level-claims sentence, and the corporate-presentation sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-service narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification. Each names a control or shell the source records on the populated consumer home. They do not come from the source’s persona section.

- Scan product-list articles on the consumer home (`home::article.today-deal-item`).
- Use the Top-navigation text input on the consumer home.
- Use the compact blue action or the text action on the consumer home.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The first-party material identifies stakeholder groups rather than individual user personas. No age, location, frequency, preference, or conversion behavior is assigned to these groups without product research. No name, age, city, occupation classification, or motivation is carried into this document or its sidecar. Dropping individual biographies rather than promoting them, and carrying no occupation classification or motivation, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification. What the source independently records, kept in its wording:

- People sharing a home or everyday-life story: official user content is described as a source of inspiration for others.
- People discovering and purchasing products for a space: commerce is described as connecting product discovery, shopping, and delivery.
- People undertaking a space-related service: official scope includes remodeling, moving, cleaning, installation, and consultation.

Reading those source-named groups as this product’s audience is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

### Distinctive traits

The list restates the source’s observed characteristics. The values are measured; the groupings inside them are a derived editorial implementation inference from the verified surfaces — they are not Ohouse-authored or a separately published UI specification.

- White `#ffffff` control surfaces with dark `#424242` / `#2f3438` body text on the populated home capture
- `#00a1ff` as a compact filled action and as a text-action color — an observed action role, not an asserted immutable brand color
- `Pretendard Variable` loaded and visibly used; declared fallbacks in the computed stack are not the loaded UI face
- Unframed product-list article shells: transparent background, zero radius, zero padding; child composition not separately measured
- Radii mostly `0px`, with observed `4px` utility/action corners and a `24px` circular control
- One repeated floating-control shadow: `0px 2px 5px rgba(63, 71, 77, 0.15)` / YAML `0 2px 5px rgba(63, 71, 77, 0.15)`

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The numbered stems rest on first-party About and Team culture sentences; every *UI implication* is the source’s own editorial reading.

1. **Connect inspiration to action.** Ohouse says it connects inspiring user content and community to commerce so people can bring ideas to life. *UI implication:* Preserve the relationship between discovered content and the next practical action; do not claim a particular card or interaction pattern unless observed. ([About](https://www.bucketplace.com/en/))
2. **Serve the whole space journey.** The official service description includes purchase, installation, renovation, moving, cleaning, and consultation. *UI implication:* Treat these as distinct service contexts rather than collapsing them into an unsupported marketplace-only UI. ([About](https://www.bucketplace.com/en/))
3. **Aim for a meaningful customer change.** The team-culture page defines the “O! Moment” as a positive, meaningful change in a customer’s life. *UI implication:* This is a product principle, not evidence for a specific color, animation, or copy treatment. ([Team culture](https://www.bucketplace.com/en/team-culture/))

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification.

- Keep the observed action blue (`#00a1ff`) scoped to action treatments unless new product evidence establishes broader use.
- Use `Pretendard Variable` only when its supplied Ohouse-hosted product source can be loaded; do not silently substitute it.
- Preserve the measured outer-card boundary when adapting the home product-list article: transparent, square, and padding-free.

### Avoid

The source states these three as its Don’t list; they are kept as its rules, reasons included. The source’s Agent Prompt Guide also bound the snapshot with “Do not infer hover or mobile behavior” and “Do not request a complete Ohouse design system from this snapshot.” These prohibitions, the reasons inside them, and keeping those two snapshot bounds here as capture limits rather than as a tool prompt, are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification.

- Don't resurrect `#35c5f0` as a current Ohouse token from historic or secondary descriptions.
- Don't convert declared-only font faces into visible UI-family claims.
- Don't invent state variants, badge treatments, price styles, or mobile chrome from the static home capture.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The values below are representative computed values from the populated consumer-home capture. They are not a public Ohouse palette and should not be expanded into semantic states without new evidence. That palette-and-state bound is the source’s own. Pairing each hex to its token-set path, keeping canvas white’s recorded uses — filled compact action text, circular control background, and white `#ffffff` control surfaces — on `tokens.colors.canvas`, and keeping `#141414` on the top-navigation text input rather than as a YAML color token, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

- **Action blue** (`#00a1ff`): Filled compact action background; text-action and border color on separate home controls. Token-set key `tokens.colors.action`. An observed action role, not an asserted immutable brand color.
- **Canvas white** (`#ffffff`): Filled compact action text and circular control background. Token-set key `tokens.colors.canvas`. White `#ffffff` control surfaces on the populated home capture use this same hex.
- **Foreground** (`#2f3438`): Outlined utility-control text. Token-set key `tokens.colors.foreground`.
- **Body neutral** (`#424242`): Repeated list, card, badge, and text color. Token-set key `tokens.colors.body`.
- **Muted neutral** (`#828c94`): Repeated text color in the home capture. Token-set key `tokens.colors.muted`.
- **Hairline** (`#e0e0e0`): Observed 1px outline on a utility control. Token-set key `tokens.colors.hairline`.

`#141414` is recorded as the top-navigation text input’s text color. It is not a YAML color token.

`#35c5f0` is not retained as a current token: it was not present in the supplied computed-style evidence, and no first-party token source was found.

No published sale, error, success, hover, pressed, focus, disabled, overlay, or selected-state color was collected.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| xs | 6 | `tokens.spacing.xs` |
| sm | 12 | `tokens.spacing.sm` |
| md | 16 | `tokens.spacing.md` |
| lg | 20 | `tokens.spacing.lg` |

The populated home capture provides spacing clusters rather than a documented layout scale: 6px (39 occurrences), 12px (27), 20px (24), 5px (13), and 9px (11). `tokens.spacing.md: 16` is in the YAML scale and is not in that occurrence list. 5px and 9px are in the occurrence list and are not YAML spacing keys. `tokens.spacing.md: 16` is not the compact blue action’s `0px 16px` padding and is not the 16px type size on Body large, Body large emphasis, or Text action. `tokens.spacing.xs: 6` is not a radius. `tokens.spacing.sm: 12` is a spacing step only. `tokens.spacing.lg: 20` is not the text-action height 20px. Keeping the four YAML spacing keys unmerged from the occurrence clusters, from the compact-action `0px 16px` padding, and from the 16px type sizes, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| square | 0 | `tokens.rounded.square` |
| sm | 4 | `tokens.rounded.sm` |
| full | 24 | `tokens.rounded.full` |

Captured radii are mostly `0px`, with observed `4px` utility/action corners and a `24px` circular control. `tokens.rounded.sm: 4` is that observed utility/action corner step; it is not `tokens.spacing` and not a universal radius scale. `tokens.rounded.full: 24` is the circular-control radius step; it is not the circular control’s 48×48px size and is not `tokens.spacing`. `tokens.rounded.square: 0` is the unframed article and text-action radius. 4px utility/action corners and 24px circular geometry are local captured defaults, not a universal radius scale. Keeping those local radii on their keys rather than as a universal scale, and keeping `tokens.rounded.full: 24` unmerged from the circular control’s 48×48px size, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

### Elevation

One repeated floating-control shadow was observed: `0px 2px 5px rgba(63, 71, 77, 0.15)`. Token-set path `tokens.shadow.floating`: `0 2px 5px rgba(63, 71, 77, 0.15)`. Those two writings are the same shadow; neither replaces the other. The outer product-list article has no shadow. No elevation scale, modal shadow, or hover-lift rule was captured. Reading that single floating-control shadow as the captured elevation record rather than as a multi-level scale, and keeping YAML `0 2px 5px rgba(63, 71, 77, 0.15)` beside body `0px 2px 5px rgba(63, 71, 77, 0.15)` without either replacing the other, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

### Motion

No timing, easing, reduced-motion behavior, or animated-state evidence was collected. Motion guidance is unresolved. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

Sorting the source’s font records into these evidence classes is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification. The class contents are the source’s own.

- **Live computed and loaded product UI:** `Pretendard Variable`. It is the first computed family on 286 captured home elements across headings, body text, cards, buttons, badges, and input; the collector also matched it in `document.fonts` and recorded 92 Ohouse-hosted dynamic-subset sources under `assets.ohou.se`.
- **Official font distribution and license:** Pretendard’s maintainer documents `Pretendard Variable` dynamic subsets and its SIL Open Font License 1.1 terms. This is font-project evidence, not an assertion that Ohouse commissioned or owns the face. ([Pretendard documentation](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md), [license](https://github.com/orioncactus/pretendard/blob/main/LICENSE))
- **Declared-only fallbacks/assets:** `Noto Sans KR`, `Open Sans`, `FontAwesome`, and `OhouseIcon` have `@font-face` declarations but no visible matched usage in the capture. They are not UI-family tokens.
- **Unresolved:** `Times` appeared on two text elements without a matching loaded FontFace or system mapping; it is not a UI-family token.

### Family

- **Current visible UI family:** `Pretendard Variable`. Token-set path `tokens.typography.family.ui`.
- The home’s computed stack includes declared fallbacks but only the first family is loaded and visibly used.
- Use `Pretendard Variable` only when its supplied Ohouse-hosted product source can be loaded; do not silently substitute it.
- Do not convert declared-only font faces (`Noto Sans KR`, `Open Sans`, `FontAwesome`, `OhouseIcon`) into visible UI-family claims. `Times` is not a UI-family token.

The fallback prohibition and the refusal to present a declared-only face or `Times` as the UI family are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification. The loaded-family facts they rest on are the source’s own.

### Type roles

YAML `use` strings stay verbatim beside the hierarchy-table capture scope. Unitless YAML line-heights stay on the token-set path; the table’s px line-heights are the source table’s writing, not a replacement of the unitless value. Body large emphasis (16px / 700 / 24px) is in the hierarchy table and is not a YAML typography key. Keeping those dual writings, and keeping the emphasis row off `tokens.typography.action` and off `tokens.typography.body-lg`, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Tracking | Capture scope | Token-set path / YAML `use` |
|---|---|---:|---:|---:|---:|---|---|
| Home h1 | Pretendard Variable | 30px | 400 | 30px / YAML `30` | -0.3px | 10 elements, home | `tokens.typography.display` — `Observed h1 on the consumer home` |
| Body/list/card | Pretendard Variable | 15px | 400 | 15px / YAML `15` | -0.3px | 113 combined elements, home | `tokens.typography.body` — `Observed list, card, and text content on the consumer home` |
| Body large | Pretendard Variable | 16px | 400 | 24px / YAML `24` | -0.3px | 7 elements, home | `tokens.typography.body-lg` — `Observed body content on the consumer home` |
| Body large emphasis | Pretendard Variable | 16px | 700 | 24px | -0.3px | 7 elements, home | Not a YAML typography key |
| Text action | Pretendard Variable | 16px | 700 | 20px / YAML `20` | -0.3px | 6 elements, home | `tokens.typography.action` — `Observed text action on the consumer home` |
| Compact action | Pretendard Variable | 14px | 400 | 18px / YAML `18` | -0.3px | 1 element, home | `tokens.typography.compact-action` — `Observed compact blue action` |

YAML subkeys on those rows, kept as paths: `tokens.typography.display.size`, `tokens.typography.display.weight`, `tokens.typography.display.lineHeight`, `tokens.typography.display.tracking`, `tokens.typography.display.use`; `tokens.typography.body.size`, `tokens.typography.body.weight`, `tokens.typography.body.lineHeight`, `tokens.typography.body.tracking`, `tokens.typography.body.use`; `tokens.typography.body-lg.size`, `tokens.typography.body-lg.weight`, `tokens.typography.body-lg.lineHeight`, `tokens.typography.body-lg.tracking`, `tokens.typography.body-lg.use`; `tokens.typography.action.size`, `tokens.typography.action.weight`, `tokens.typography.action.lineHeight`, `tokens.typography.action.tracking`, `tokens.typography.action.use`; `tokens.typography.compact-action.size`, `tokens.typography.compact-action.weight`, `tokens.typography.compact-action.lineHeight`, `tokens.typography.compact-action.tracking`, `tokens.typography.compact-action.use`. `tokens.typography.body-lg.size: 16` is not `tokens.spacing.md: 16` and is not `tokens.typography.action.size: 16`. `tokens.typography.display.lineHeight: 30` is not a spacing step. `tokens.typography.display.size: 30` is not that line-height. `tokens.typography.body.size: 15` is not `tokens.typography.body.lineHeight: 15`.

### Assets

- Favicon the source frontmatter records: `logo.type: favicon`, `logo.slug` `https://ohou.se/favicon.ico`. That slug is an Ohouse-hosted identity pointer on the captured consumer host.
- Pretendard upstream licence: SIL Open Font License 1.1. The licence describes the font asset; the Ohouse-hosted `assets.ohou.se` dynamic-subset sources are what establish current product-web use.

Reading the favicon URL as an identity pointer on the captured host is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

These are only the representative controls directly preserved by the collector. Each use line carries its product-surface selector and no interaction-state variants are claimed because `interactionCount` is `0`. The collector recorded no interaction expansions or state transitions (`interactionKinds: 0`, `interactionCount: 0`). Empty, loading, error, success, disabled, and validation treatments are unresolved and intentionally omitted rather than reconstructed from generic commerce patterns.

No hover, pressed, focus, disabled, validation, dialog, menu, tab, toast, or responsive component state was captured. Badge class names were present, but a standalone badge fill/text treatment was not measured with sufficient provenance; no badge variant is specified. Do not infer hover or mobile behavior.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, labelling §4-only controls `not in the token set`, omitting kind and a state-applicability map where the source supplies no interactive-kind evidence, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control’s product role rather than its primitive kind. Generic focus is not a `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Compact blue action

- Role: compact filled action on the consumer home
- Kind: interactive
- Primitive type: not in the token set
- Background: `#00a1ff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `4px`
- Padding: `0px 16px`
- Font: `14px / 400 / Pretendard Variable`
- Size: 91×40px
- Use: Home `home::[data-omd-capture="9"]`, `button[role="button"]`, 91×40px; one captured occurrence.
- Observed: default only

`0px 16px` padding is this control’s padding. It is not `tokens.spacing.md: 16`. `4px` radius is this control’s corner. It is not a universal radius scale. Keeping this control’s `0px 16px` padding off `tokens.spacing.md: 16`, and keeping its `4px` radius as this control’s corner rather than as a universal radius scale, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the consumer home |
| hover | applicable | Pointer-web filled action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action; visual treatment omitted |
| disabled | applicable | A filled action whose availability can lapse; visual treatment omitted |
| loading | applicable | A filled action can report in-progress; visual treatment omitted |
| error | applicable | A filled action can report a failed outcome; visual treatment omitted |
| success | applicable | A filled action can report a completed outcome; visual treatment omitted |

### Circular floating control

- Role: circular floating control on the consumer home
- Kind: interactive
- Primitive type: not in the token set
- Background: `#ffffff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `24px`
- Padding: `0px`
- Shadow: `0px 2px 5px rgba(63, 71, 77, 0.15)` / YAML `tokens.shadow.floating` `0 2px 5px rgba(63, 71, 77, 0.15)`
- Font: `16px / 700 / Pretendard Variable`
- Size: 48×48px
- Use: Home `home::[data-omd-capture="20"]`, `button`, 48×48px; seven captured occurrences. The captured control has no text content.
- Observed: default only

`24px` radius is this control’s corner and `tokens.rounded.full: 24`. 48×48px is this control’s size, not that radius step. Keeping this control’s `24px` radius on `tokens.rounded.full: 24` and keeping 48×48px as this control’s size rather than as that radius step is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the consumer home |
| hover | applicable | Pointer-web floating control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable floating control; visual treatment omitted |
| disabled | applicable | A floating control whose availability can lapse; visual treatment omitted |
| loading | applicable | A floating control can report in-progress; visual treatment omitted |
| error | applicable | A floating control can report a failed outcome; visual treatment omitted |
| success | applicable | A floating control can report a completed outcome; visual treatment omitted |

### Outlined utility control

- Role: outlined utility control on the consumer home
- Kind: interactive
- Primitive type: not in the token set
- Background: `transparent`
- Text: `#2f3438`
- Border: `1px solid #e0e0e0`
- Radius: `4px`
- Padding: `0px 8px`
- Font: `14px / 400 / Pretendard Variable`
- Size: 182×32px
- Use: Home `home::[data-omd-capture="127"]`, `button`, 182×32px; one captured occurrence.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the consumer home |
| hover | applicable | Pointer-web utility control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable utility control; visual treatment omitted |
| disabled | applicable | A utility control whose availability can lapse; visual treatment omitted |
| loading | applicable | A utility control can report in-progress; visual treatment omitted |
| error | applicable | A utility control can report a failed outcome; visual treatment omitted |
| success | applicable | A utility control can report a completed outcome; visual treatment omitted |

### Text action

- Role: text action on the consumer home
- Kind: interactive
- Primitive type: not in the token set
- Background: `transparent`
- Text: `#00a1ff`
- Border: `0px`
- Radius: `0px`
- Font: `16px / 700 / Pretendard Variable`
- Size: 41×20px
- Use: Home `home::[data-omd-capture="32"]`, `button`, 41×20px; six captured occurrences.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the consumer home |
| hover | applicable | Pointer-web text action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable text action; visual treatment omitted |
| disabled | applicable | A text action whose availability can lapse; visual treatment omitted |
| loading | applicable | A text action can report in-progress; visual treatment omitted |
| error | applicable | A text action can report a failed outcome; visual treatment omitted |
| success | applicable | A text action can report a completed outcome; visual treatment omitted |

### Top-navigation text input

- Role: top-navigation text input on the consumer home
- Kind: interactive
- Primitive type: not in the token set
- Background: `transparent`
- Text: `#141414`
- Border: `0px`
- Radius: `0px`
- Font: `14px / 400 / Pretendard Variable`
- Size: 255×20px
- Use: Home `home::[data-omd-capture="4"]`, `input[type="text"]`, 255×20px; one captured occurrence.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the consumer home |
| hover | applicable | Pointer-web text input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A text input whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts text; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not complete a save or submit whose success it reports on itself |

### Product-list article shell

- Role: outer product-list article shell on the consumer home
- Primitive type: `card` · YAML `tokens.components.product-list-article.type: card`
- Background: `transparent` · YAML `bg: "transparent"`
- Text: `#424242` · YAML `fg: "#424242"`
- Border: `0px`
- Radius: `0` / `0px` · YAML `radius: 0`
- Padding: `0px` · YAML `padding: "0px"`
- Font: `15px / 400 / Pretendard Variable`
- YAML `use`: `Observed outer product-list article shell on the consumer home`
- YAML fields: `tokens.components.product-list-article.type`, `tokens.components.product-list-article.bg`, `tokens.components.product-list-article.fg`, `tokens.components.product-list-article.radius`, `tokens.components.product-list-article.padding`, `tokens.components.product-list-article.font`, `tokens.components.product-list-article.use`
- Use: Home `home::article.today-deal-item`, representative 269px-wide articles; 4+ captured occurrences. This describes the outer article only, not unmeasured child image, price, badge, or metadata styles.

The source YAML records `type: card` and supplies no interactive-kind evidence for this shell. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The populated home capture provides spacing clusters rather than a documented layout scale: 6px (39 occurrences), 12px (27), 20px (24), 5px (13), and 9px (11). The representative content articles are 269px wide in this 1440×900 desktop capture. No mobile, breakpoint, container, grid, or global-gutter rule is asserted from these data.

No responsive sweep was included in the supplied collector evidence. The only measured viewport is 1440×900; responsive behavior is unresolved. The 91×40px compact blue action, 48×48px circular floating control, 182×32px outlined utility control, 41×20px text action, 255×20px top-navigation text input, and 269px-wide product-list articles are desktop-capture measurements, not cross-viewport specifications.

Treating 1440×900 as the supplied capture size rather than as a breakpoint system, treating the occurrence clusters as clusters rather than as a documented layout scale, and treating the control sizes as desktop-capture measurements, are a derived editorial implementation inference from the verified surfaces; they are not Ohouse-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Bucketplace describes Ohouse in practical, aspirational language: it helps people make the everyday life they envision real within a space, through content, community, commerce, and related services. The official team-culture page pairs that customer outcome with “Customer’s O! Moment,” growth, excellence, and long-term ownership. These are company statements; they do not establish UI microcopy samples or a formal content-style guide. ([About](https://www.bucketplace.com/en/), [Team culture](https://www.bucketplace.com/en/team-culture/))

Carrying those company statements as voice context for this reconstruction, rather than as a separately published content-style guide, is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification. The quoted “Customer’s O! Moment” string, the “practical, aspirational language” wording, and the About / Team culture sentences are Bucketplace-authored.

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

These decisions are unnamed values, not permissions to invent. Listing them as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Ohouse-authored or a separately published UI specification.

- sale, error, success, hover, pressed, focus, disabled, overlay, and selected-state colors
- hover, pressed, focus, disabled, validation, dialog, menu, tab, toast, and responsive component-state visual treatments
- empty, loading, error, success, disabled, and validation treatments
- standalone badge fill/text treatment; child image, price, badge, or metadata styles inside the product-list article
- timing, easing, reduced-motion behavior, and animated-state evidence
- mobile, breakpoint, container, grid, and global-gutter rules; responsive sweep
- `Times` as a UI-family token
- official public design-system or brand-token export
- `/experts` and `/customer_center` chrome
