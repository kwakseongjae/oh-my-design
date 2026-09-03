# Miro Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Miro is a collaborative canvas for teams that want to move from an early idea to a shared outcome. Catalog homepage identity is `https://miro.com`. Official design system = Mirotone (`https://www.mirotone.xyz`, `ds.type: system`). Source `ds.description`: "Miro's base CSS component library for applications on the Miro platform." This contract covers two public surfaces the July 2026 capture distinguishes from that library: public marketing home at `https://miro.com/ko/` and public pricing at `https://miro.com/ko/pricing/` (the pricing URL was captured twice; the repeat is not a third route). Source token note: "Machine tokens are limited to supplied public marketing/pricing capture. Mirotone, Aura, and documentation establish context only; they do not supply unobserved live variants." Treating those two public marketing/pricing URLs as this contract's token surfaces, keeping Mirotone, Aura, and documentation as context that does not supply unobserved live variants, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

The public presentation connects that expansive canvas metaphor to a deliberately vivid visual language: an optimistic yellow brand signal, restrained white and near-black functional surfaces, and blue conversion actions in the captured pricing flow. Current Aura material expands the palette for colorful board work and pairs it with a broad-language body face. The captured interface layer is `#ffffff` canvas with near-black `#1c1c1e` ink, `#fde050` on a 40px promo action, and `#3859ff` pricing CTAs with a `#7a90fe` 1px edge. Public actions and the email input use 8px corners; the pricing-period option uses 40px. Body/UI text is Noto Sans; public display headings are Roobert PRO Medium. **Yellow as a signal:** the official identity story calls yellow iconic and sparing; the supplied public capture observes `#fde050` on a 40px promo action. **Canvas before chrome:** white surfaces and near-black `#1c1c1e` text dominate the captured public controls, leaving color to mark a moment rather than fill the whole page. **Workroom energy:** Miro’s own language foregrounds collaborative, canvas-first work; brand imagery can be expressive, while functional pricing controls remain compact and measured. The hex values, families, 40px promo height, 8px / 40px corners, and the pricing-flow conversion actions are recorded. Readings of yellow as a signal, of canvas before chrome, and of Workroom energy are a derived editorial implementation inference from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

Brand narrative recorded by the source, kept as narrative context. Official context URLs named by the source for that narrative — not as token surfaces — are `https://miro.com/about/`, `https://miro.com/aura/`, `https://miro.com/blog/miro-vis/`, and Mirotone developer guidance at `https://developers.miro.com/docs/design-guidelines`. Its first version, RealtimeBoard, began in 2011 as a way for Andrey Khusid’s design agency to communicate with clients at a distance. Miro now describes the service as a place for teams and AI to develop strategy, design products and services, and manage the innovation lifecycle. The company now describes the product as a visual workspace where teams work with AI across strategy, product design, and innovation delivery. Its 2023 identity work explains the expression behind the public brand: yellow had always been iconic, but the brand team chose to use it with moderation and supporting colors rather than flood every interface; the same identity work says yellow should be the protagonist rather than paint every surface. Aura extends that evolution into a richer board palette and Noto Sans body text for multilingual collaboration, and pairs that body face with colorful board work. The result is a useful split for this reference: lively brand expression belongs to marketing and board context, while only the supplied live public controls become implementation tokens. The 2011 RealtimeBoard origin, Andrey Khusid’s design agency, the distant-client brief, the teams-and-AI product description, the 2023 identity sentences, Aura’s board palette and Noto Sans pairing, and that last-sentence split are the source's own. Classifying that founding-and-identity narrative as context that does not by itself supply interface tokens, and keeping the last-sentence split as this capture's evidence-domain split rather than as a Mirotone token rule, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured public marketing or pricing control, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

- Act on the yellow public promo/banner action on the captured home marketing surface.
- Convert on public pricing via the blue pricing CTA or the outlined pricing action.
- Select a billing period on the public pricing billing-period selector (checked / unchecked).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona header is: *These are first-party stakeholder groups, not fictional individual personas.* No name, age, or city is recorded there, and none is invented here. What the source independently records, in its own wording, as first-party stakeholder groups is the audience at a group level:

- **Cross-functional innovation teams:** Miro describes teams using the canvas to develop strategy, design products and services, and manage the innovation lifecycle.
- **Multilingual, hybrid collaborators:** Aura explicitly positions Noto Sans around broad language support for distributed teams.
- **People with access needs:** Miro’s accessibility work addresses keyboard, screen-reader, voice-control, color, and motion-sensitive collaboration.

Reading those source-named groups as this product's audience, and not turning their descriptions into primary tasks, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Distinctive traits

The list restates the source's recorded public layer. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

- **Yellow as a signal:** `#fde050` on a 40px promo action; the official identity story calls yellow iconic and sparing
- **Canvas before chrome:** white surfaces and near-black `#1c1c1e` text on captured public controls
- **Workroom energy:** Miro’s own language foregrounds collaborative, canvas-first work; brand imagery can be expressive, while functional pricing controls remain compact and measured
- Action Blue `#3859ff` with `#7a90fe` 1px border on public pricing CTAs — not a general primary-action role inferred from yellow
- Noto Sans body/UI; Roobert PRO Medium public display
- Compact public actions with 8px control corners; pricing-period option at 40px
- No captured hover, pressed, focus, error, loading, toast, or animation variant is promoted

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation. The source states them in its own Principles section together with the UI implication it draws from each.

1. **The canvas keeps work shared.** *UI implication:* prioritize surfaces that let teams move among ideas, structure, and outcomes without treating the workspace as a document-only flow.
2. **Yellow is an intentional identity signal.** *UI implication:* use a yellow accent to focus attention, not as a default fill for every public or product action.
3. **Multilingual clarity is a product concern.** *UI implication:* use Noto Sans for body/UI content where the live and official evidence supports it.
4. **Accessible collaboration is part of the experience.** *UI implication:* support keyboard access, named colors, readable contrast, and reduced-motion behavior when implementing product work with separate surface evidence.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

- Use yellow as a deliberate public-brand signal rather than a blanket surface fill.
- Use the supplied blue CTA geometry only for public pricing/conversion contexts.
- Default to the evidence-backed Noto Sans body/UI family where multilingual readability is needed.
- Keep public actions compact, with the observed 8px control corners.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

- Don’t turn the observed yellow promo button into Miro’s universal primary action.
- Don’t promote declared-only scripts, placeholders, or a system stack to Miro typography.
- Don’t apply Mirotone app-library components to Miro marketing/pricing tokens without direct live evidence.
- Don’t invent hover, pressed, focus, error, loading, toast, or animation variants from the captured dialog/toggle states.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping Miro Yellow (`#fde050`) off Action Blue (`#3859ff`) off Action Blue border (`#7a90fe`), keeping canvas (`#ffffff`) off the dialog's `oklch(1 0 0)` and off the outlined action's transparent background, keeping canvas fill, Blue pricing action text, and Email input background as separate roles even where they share a hex, keeping Input border (`#e9eaef`) off Control border (`#c7cad5`) off Subtle border (`#e0e2e8`), and keeping Aura's Coral, Cyan, Lilac, Lime, Sunshine, Orange, Pink, Moss, and Teal as named narrative context rather than as machine tokens, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation. The hex values and recorded uses are the source's own. Miro’s Aura material names that broader accent palette, but the supplied capture does not establish their exact current public-web values or semantic component roles.

- **Miro Yellow / promo accent** (`#fde050`): live 40px marketing/promo action on home and pricing; Miro’s brand story establishes yellow as the central identity color, but no general primary-action role is inferred. Token-set path `tokens.colors.brand-yellow`. Catalog `primary_color`.
- **Action Blue** (`#3859ff`): repeated public-pricing CTA fill with white text. Token-set path `tokens.colors.action-blue`.
- **Action Blue border** (`#7a90fe`): observed 1px border/inset edge on the blue pricing CTA. Token-set path `tokens.colors.action-blue-border`.
- **Ink** (`#1c1c1e`): repeated public text and control color. Token-set path `tokens.colors.ink`.
- **Canvas** (`#ffffff`): observed public surface and selected pricing-period fill. Token-set path `tokens.colors.canvas`.
- **Input border** (`#e9eaef`): observed on the single public-home email field. Token-set path `tokens.colors.border-input`.
- **Control border** (`#c7cad5`): observed outlined public pricing action border. Token-set path `tokens.colors.border-control`.
- **Subtle border** (`#e0e2e8`): observed pricing badge/control border. Token-set path `tokens.colors.border-subtle`.
- **Muted text** (`#555a6a`): observed unchecked pricing-period label. Token-set path `tokens.colors.muted`.

Legacy `#5b76fe`/pastel/card/badge tokens were already removed in the source because the supplied July 2026 capture did not support them; repeated live public pricing actions resolve to `#3859ff`, while `#fde050` is retained only as a promo/brand-accent action.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 12` · `tokens.spacing.lg: 16` · `tokens.spacing.xl: 24` · `tokens.spacing.xxl: 32`.

The supplied public capture repeatedly uses 4, 8, 12, 16, 24, and 32px values. This reference retains only those observed values as its spacing tokens. YAML `lg: 16` is not `tokens.typography.action.size` `16` and is not the email field's `16px` padding. YAML `sm: 8` is not `tokens.rounded.control` `8` and is not the yellow promo padding `8px 12px`. YAML `xl: 24` is not action `lineHeight` `24` and is not the dialog padding `20px 24px`. YAML `xs: 4` is not a type size. Keeping those unitless steps on their own keys, keeping the px cluster as the source's own writing rather than a replacement, and keeping padding/height/line-height figures on the controls that recorded them, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `control: 8` · `segmented: 40`.

- **Public action and email input:** `8px` — YAML `tokens.rounded.control`.
- **Pricing-period option:** `40px` — YAML `tokens.rounded.segmented`. YAML component radius on the toggle is `40`.
- **Circular controls:** `50%` was observed locally on home controls; it is intentionally not normalized into a general-purpose radius token.

Keeping `control: 8` off `segmented: 40`, keeping YAML `8` beside prose `8px` and YAML `40` beside prose `40px`, keeping segmented `40` off the yellow promo height `40px`, and keeping local `50%` off both YAML keys, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Elevation

No global elevation scale is established. The captured pricing dialog has a local two-part black shadow, while public buttons are largely flat; retain that shadow only when reproducing the recorded dialog context. The recorded part is `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px` (the source writes that the dialog shadow includes that string). Reading that as a local dialog treatment rather than a depth system, and leaving public buttons largely flat, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Motion

The supplied raw capture contains no timing, easing, or transition values. Miro’s accessibility documentation says reduced motion removes animations and transition effects; that establishes a behavioral boundary, not motion tokens. No duration or easing value is asserted. No motion token is promoted.

Promote a motion token for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. That five-kind gate, holding reduced motion as a behavioral boundary rather than as a duration table, and the decision not to promote a duration or easing value from this capture, are a derived editorial implementation inference from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Miro Aura calls Noto Sans its new body-text font, citing broad language and writing-system support for multilingual hybrid teams. |
| Live computed public-surface use | `Noto Sans` is loaded/high confidence with 882 visible uses and 24 font-source URLs in the supplied bundle. `Roobert PRO Medium` is loaded/high confidence with 46 visible uses; the bundle also records the loaded `roobertPROLocal` face with three Miro-hosted WOFF2 source URLs. These FontFaceSet-backed families are the only typography families promoted to tokens. |
| Official distributed font asset and licence boundary | Displaay identifies Roobert as a geometric sans with weight, slant, and mono axes (`https://displaay.net/typeface/roobert`). Displaay’s licence (`https://displaay.net/help/licenses`) describes paid usage, including web self-hosting via `@font-face`; it is the foundry’s licence, not evidence that Miro grants third parties permission to redistribute its hosted files. |
| Declared-only | Fragment Mono, Inter Placeholder, M PLUS 1, Nanum Pen Script, Vazirmatn, and placeholder/fallback faces are declared with zero visible use in this capture. They are not substitutes or UI tokens. |
| System/unresolved | `sans-serif` is a system stack. Computed `Roobert PRO` has visible uses but no matching loaded-font record, so it is not separately tokenized. |

Reading the Aura row as official product-use rather than as a Mirotone type ramp, reading Displaay as a foundry licence boundary rather than a Miro redistribution grant, reading declared-only faces as not UI tokens, and reading `sans-serif` / unresolved `Roobert PRO` as not substitutes, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Family

- **Current visible UI family:** `Noto Sans`. Token-set path `tokens.typography.family.ui`.
- **Current visible display family:** `Roobert PRO Medium`. Token-set path `tokens.typography.family.display`.
- Do not substitute a declared-only or system family for Noto Sans or Roobert PRO Medium. The loaded families are canonical here only because computed visible use and FontFaceSet/source evidence agree on the observed public-web roles. The loaded `roobertPROLocal` alias is selector-level provenance, not a separately named UI family token.

The no-substitution rule above, the reading that the loaded families are canonical here only because computed visible use and loaded sources agree, and the reading that `roobertPROLocal` is an alias rather than a separately named UI family token, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Type roles

Token-set roles keep the source's recorded numbers. The observed-hierarchy table keeps the source's px spellings. YAML `lineHeight` values `56`, `55.2`, `20`, and `24` are not rewritten as fixed px. Observed `56px`, `55.2px`, `24px`, and `20px` line-height writings sit on that table. Neither writing was chosen as a replacement. YAML tracking `-1.68` and `-1.44` stay beside observed `-1.68px` and `-1.44px`. YAML `use` strings stay verbatim. The yellow promo action's `16px / 900 / Roobert PRO Medium` is that control's font; it is not `tokens.typography.action` (`16` / `600` / Noto Sans) and is not `tokens.typography.display-hero` (`56` / `500`). YAML `action.size` `16` is not `tokens.spacing.lg` `16`. Keeping the token-set numbers on their own rows, the px hierarchy on its own table, YAML Display off the yellow-promo 900 row, and action `16` off spacing `16`, is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Public display hero | Roobert PRO Medium | 56 | 500 | 56 | -1.68 | Observed public home display headline |
| Public section heading | Roobert PRO Medium | 48 | 400 | 55.2 | -1.44 | Observed public home section heading |
| Public pricing action | Noto Sans | 16 | 600 | 24 | — | Observed public pricing action |
| Pricing control/list text | Noto Sans | 14 | 400 | 20 | — | Observed public pricing control and list text |

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---:|---|
| Public display hero | Roobert PRO Medium | 56px | 500 | 56px | -1.68px | `home::h1` |
| Public section heading | Roobert PRO Medium | 48px | 400 | 55.2px | -1.44px | `home::h2` |
| Public pricing action | Noto Sans | 16px | 600 | 24px | normal | `surface-2::[data-omd-capture="136"]` |
| Pricing control/list text | Noto Sans | 14px | 400 | 20px | normal | `surface-2::[data-omd-capture="89"]` |

Token-set `tokens.typography.display-hero.size` is `56`. Token-set `tokens.typography.display-section.size` is `48`. Token-set `tokens.typography.body.size` is `14`. Token-set `tokens.typography.action.size` is `16`. Display-hero `lineHeight` `56` is not a replacement for display-hero `size` `56`; they are two keys that share a numeral. Reading those two keys as sharing a numeral rather than as a replacement is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Assets

The catalog identity records `logo.type: simpleicons` and `logo.slug: miro`. That is an identity pointer, not a Miro-hosted file and not a reusable brand download. Classifying the simpleicons slug as an identity pointer rather than a hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All variants below are constrained to the supplied public marketing/pricing capture. Selector, surface, and observed-state provenance are kept with each entry; Mirotone documentation establishes a broader app-library context but does not turn undocumented or unobserved variants into tokens. The source token-set declares one component: `pricing-period-toggle` with `type: toggle`. That primitive type is attached only to Pricing-period toggle. The other §4 records are not in the token set. Attaching that primitive type only to Pricing-period toggle, and treating the other §4 records as outside the token set, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

Only the following states are observed or officially described in this pass:

| State | Treatment | Provenance |
|---|---|---|
| Checked | White pricing-period option with `#1c1c1e` text | `surface-2::[data-omd-capture="86"]` |
| Unchecked | Transparent pricing-period option with `#555a6a` text | `surface-2::[data-omd-capture="85"]` |
| Dialog open | White pricing dialog with local shadow | captured pricing dialog interactions |
| Disabled | 36px circular home control was captured disabled | `home::[data-omd-capture="100"]` |
| Reduced motion | Animations and transitions removed | official Miro Accessibility page |

No public evidence in this pass establishes a loading, empty, success, error, hover, pressed, or focus treatment. The disabled 36px circular home control is retained here only; it is not generalized into a component token. Generic Focus capture is not treated as a `focus-visible` treatment. A recorded `focus` appearance is a different evidence kind from `focus-visible`. No `focus-visible` row carries a treatment.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where not recorded on that control. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless — a destination public promo or pricing action that does not report an in-page operation, a toggle that only selects, or a dialog surface that is not a control — and the reason given is always that semantic one. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either, attaching YAML `type: toggle` only to Pricing-period toggle, omitting kind and a state-applicability map on the pricing dialog, retaining the disabled circular control in this record only, and not treating generic Focus capture as a `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

### Yellow promo action

- Role: destination control that is the public promo/banner action
- Primitive type: not in the token set · Kind: interactive
- Domain: `home`; repeated on `surface-2`
- Background: `#fde050`
- Text: `#1c1c1e`
- Radius: `8px`
- Padding: `8px 12px`
- Height: `40px`
- Font: `16px / 900 / Roobert PRO Medium`
- Use: public promo/banner action; `home::[data-omd-capture="0"]`, repeated at `surface-2::[data-omd-capture="76"]`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public promo/banner destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Blue pricing action

- Role: destination control that is the public pricing CTA
- Primitive type: not in the token set · Kind: interactive
- Domain: `surface-2`; repeated on `surface-3`
- Background: `#3859ff`
- Text: `#ffffff`
- Border: `1px solid #7a90fe`
- Radius: `8px`
- Padding: `11px 15px`
- Height: `48px`
- Font: `16px / 600 / Noto Sans`
- Use: public pricing CTA; `surface-2::[data-omd-capture="136"]`, repeated on `surface-3`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public pricing destination CTA; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Outlined pricing action

- Role: destination control that is the public pricing action
- Primitive type: not in the token set · Kind: interactive
- Domain: `surface-2`; repeated on `surface-3`
- Background: transparent
- Text: `#1c1c1e`
- Border: `1px solid #c7cad5`
- Radius: `8px`
- Padding: `11px 15px`
- Height: `48px`
- Font: `16px / 600 / Noto Sans`
- Use: public pricing action; `surface-2::[data-omd-capture="137"]`, repeated on `surface-3`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public pricing destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Email input

- Role: public home email field
- Primitive type: not in the token set · Kind: interactive
- Domain: `home`
- Background: `#ffffff`
- Text: `#1c1c1e`
- Border: `1px solid #e9eaef`
- Radius: `8px`
- Padding: `16px`
- Height: `48px`
- Font: `16px / 400 / Noto Sans`
- Use: public home email field; `home::[data-omd-capture="82"]` (one observed instance)
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An email field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a value field; it does not commit an operation whose in-progress state it could report |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Pricing-period toggle

- Role: public pricing billing-period selector
- Primitive type: `toggle` · Kind: interactive
- Domain: `surface-2`
- Radius: `40px`
- Padding: `6px 16px`
- Height: `34px`
- Font: `16px / 600 / Noto Sans` (checked); unchecked `16px / 400`
- Checked: white background with `#1c1c1e` text; `surface-2::[data-omd-capture="86"]`
- Unchecked: transparent background with `#555a6a` text at `16px / 400`; `surface-2::[data-omd-capture="85"]`
- Token-set use: `Public pricing billing-period selector`
- Token-set path: `tokens.components.pricing-period-toggle` (`type: toggle`, `radius: 40`, `height: 34`, `padding: 6px 16px`, `states: checked, unchecked`, `use: Public pricing billing-period selector`)
- Use: public pricing billing-period selector; both states observed
- Observed: checked and unchecked

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared checked and unchecked treatments above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A billing-period selector whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a toggle; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Toggle control; selecting a period is not an operation this control reports as failure |
| success | not-applicable | Same role reason: remaining the selected period is not an operation with a success result |

### Pricing dialog

- Role: dialog opened by a captured public-pricing interaction
- Primitive type: not in the token set
- Domain: `surface-2`
- Background: `oklch(1 0 0)`
- Text: `#1c1c1e`
- Padding: `20px 24px`
- Font: `16px / 400 / roobertPROLocal`
- Dialog-open: `surface-2::[data-omd-interaction-capture="dialog-0-8"]`; shadow includes `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px`
- Use: dialog opened by a captured public-pricing interaction; no global modal token or further state contract is inferred
- Observed: dialog-open only

No interactive kind and no state-applicability map is declared for this dialog: the source declares it as a captured open surface and names no control, action, or further state contract on the dialog itself. Omitting interactive kind and a state-applicability map on this dialog is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied public capture repeatedly uses 4, 8, 12, 16, 24, and 32px values. Public action and email input corners are `8px`; the pricing-period option is `40px`. Circular controls at `50%` were observed locally on home controls and are not a general-purpose radius token.

The supplied capture is desktop-only (`1440x900`) for the home and two pricing records. It does not establish a mobile breakpoint, layout transition, or responsive component variant. The 40px yellow promo action, 48px pricing actions and email input, 34px pricing-period toggle, and 36px disabled circular home control are desktop-capture measurements, not cross-viewport specifications. Reading those measurements as local captured geometry rather than as a complete grid or breakpoint system, and keeping `1440x900` as the collector's capture size rather than as a layout token, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Miro’s first-party language is collaborative, expansive, and outcome-oriented: teams come together on a canvas to dream, design, and build. Its recent AI positioning keeps the emphasis on shared work rather than an individual assistant.

| Context | Supported voice evidence |
|---|---|
| Mission | “empower teams to create the next big thing” — Miro About |
| Product metaphor | “canvas-first” / “from idea to outcome” — Miro newsroom |
| Accessibility | “Everyone should be able to collaborate … without barriers” — Miro Accessibility |

No invented error copy or prohibition list is asserted. Reproduce those strings byte-exact rather than translating or re-casing them. Reading that first-party language as a narrative and content boundary rather than as a complete product-microcopy guide, and requiring quoted strings byte-exact, are derived editorial implementation inferences from the verified surfaces; they are not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation.

- **Aura accent exact values and semantic component roles.** Coral, Cyan, Lilac, Lime, Sunshine, Orange, Pink, Moss, and Teal remain narrative context, not machine tokens.
- **Hover, pressed, focus, error, loading, toast, or animation variants** inferred from the captured dialog/toggle states. They are not `not-applicable`; applicability follows control meaning.
- **Loading, empty, success, error, hover, pressed, or focus treatment** as public evidence in this pass.
- **Mobile breakpoint, layout transition, or responsive component variant.** The capture is desktop-only (`1440x900`) for the home and two pricing records.
- **Global elevation scale.** The dialog shadow is local; public buttons are largely flat.
- **Global modal token or further dialog state contract.**
- **Duration or easing value.** Reduced motion is a behavioral boundary, not a motion token. Promote a motion token only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Declared-only scripts, placeholders, or a system stack as Miro typography.** Fragment Mono, Inter Placeholder, M PLUS 1, Nanum Pen Script, Vazirmatn, placeholder/fallback faces, and `sans-serif`.
- **Computed `Roobert PRO` as a separately named family token.** Visible uses, no matching loaded-font record.
- **`50%` as a general-purpose radius token.** Observed locally on home circular controls.
- **Mirotone app-library components as marketing/pricing tokens** without direct live evidence.
- **Display / action line-height writings.** Token-set `56` / `55.2` / `24` / `20` and observed `56px` / `55.2px` / `24px` / `20px` are both kept. Neither was chosen as a replacement.
