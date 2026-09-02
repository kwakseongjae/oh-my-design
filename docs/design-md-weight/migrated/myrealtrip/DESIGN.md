# MyRealTrip Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MyRealTrip (마이리얼트립) is a Korean travel marketplace whose own public materials describe a 2012 start brokering locally made tours and a current scope across travel experiences. This contract covers two current first-party public product surfaces inspected on 2026-07-13: the consumer home at `https://www.myrealtrip.com/` and the hotel listing at `https://www.myrealtrip.com/hotels`. The corporate/about site at `https://about.myrealtrip.com/` is a separate corporate/about surface. The help-center at `https://help.myrealtrip.com/hc/ko` is official support chrome and service context. YAML `tokens.source` is `live-extract`. The YAML token note, kept as the facts it names: Only values with current raw computed-style provenance are tokens. Home/hotel product surfaces and corporate/about chrome remain separate. Treating those two public product URLs as this contract's token surfaces, keeping the separate corporate/about site as corporate chrome rather than silently blended into consumer-product tokens, keeping `https://help.myrealtrip.com/hc/ko` as official support chrome and service context rather than as a consumer-product token source, keeping the YAML set in the `live-extract` class the source assigned it, and keeping every value attached to the surface or evidence class that established it, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

The current public home and hotel-listing surfaces pair a white working canvas with low-chrome navigation: a blue header action, a pale-gray search field, compact gray text, and a selected dark locale pill. The visual system recorded here is deliberately narrower than a brand story. It covers only current rendered public web evidence. MyRealTrip’s public partner program foregrounds reliable booking, sustained traveler ratings, and prompt communication; its current company blog describes the organisation as an AI-native travel platform. Those are product and organisational context, not evidence for an unobserved app component or visual token. The source’s observed character, kept as written: restrained utility chrome around travel discovery, with `#2B96ED` used for the repeated public header action rather than a generalised brand palette. The hex, the white canvas, the pale-gray search field, the compact gray text, the selected dark locale pill, the partner-program framing, and the AI-native travel-platform description are the source’s own. Reading that captured layer as restrained utility chrome around travel discovery, and reading `#2B96ED` as the repeated public header action rather than as a generalised brand palette, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. MyRealTrip’s own public offer page identifies founder Lee Dong-geon and says the company was founded in February 2012, beginning by brokering tours made by local people. Its current partner programme frames quality around responsible reservation fulfilment, traveller ratings, and timely communication. The company blog currently describes MyRealTrip as an AI-native travel platform and publishes product, technology, and organisational stories. Together, these sources establish a travel-marketplace origin and a current organisational direction; they do not supply an official rebrand history or a visual-design manifesto. The year 2012, February 2012, Lee Dong-geon, brokering tours made by local people, the partner-programme quality frame, the AI-native travel-platform description, the product / technology / organisational stories, and that closing sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-direction narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured public-web surface or control, and not taking them from the source's stakeholder-group section, is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

- Use the current public home and hotel-listing surfaces at `https://www.myrealtrip.com/` and `https://www.myrealtrip.com/hotels`.
- Use the captured public keyword search at `home::[data-omd-capture="3"]` and `surface-3::[data-omd-capture="1"]`.
- Use the repeated public header action on home and hotel listing.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source’s own §13 header states that first-party materials identify public stakeholder groups rather than research-backed personas, and that no named or synthetic persona is supplied; demographic needs, booking journeys, and conversion motivations remain unnamed pending first-party research or user-provided evidence, so those unfinished slots are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is those public stakeholder groups: travellers seeking travel products, partners who operate listings and reservations, and support visitors looking for help. Dropping those unfinished persona slots rather than promoting them, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it — including the repeated header action on a white canvas rather than a generalised brand palette — is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

- Repeated public header action `#2b96ed` / `#2B96ED` on a white `#ffffff` / `#FFFFFF` canvas, rather than a generalised brand palette
- Pale-gray `#f5f6f7` / `#F5F6F7` square-cornered public search field (48px high)
- Compact gray text `#495056` and muted navigation text `#666d75` / `#666D75`
- Selected dark locale pill `#101418` at 16px radius and 32px height
- Pretendard as the live public-web UI family (60 visible uses, 36 captured source URLs), with loaded internal alias `__pretandard_7bdbf6` (64 visible uses, four MyRealTrip CDN sources)
- Local geometry: 40px header action, 48px search field, 32px selected locale tab
- Collector `interactionCount: 0`; no hover, focus, pressed, disabled, menu, dialog, validation, or loading variant is claimed

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification. The numbered stems rest on the public partner programme recorded by the source. Every *UI implication* below is the source’s own editorial reading.

1. **Reliable reservation fulfilment.** The partner programme asks partners to manage schedules so confirmed reservations can be fulfilled. *UI implication:* do not represent this as a verified button, badge, or checkout-state treatment without product-screen evidence.
2. **Traveller feedback matters.** The public Real Partner criteria include a rolling one-year 4.8-or-higher review requirement. *UI implication:* the criterion is partner-program context, not permission to invent rating-card components.
3. **Timely communication.** The same programme asks for message responses and reservation confirmation within 24 hours. *UI implication:* do not turn this service standard into a notification, SLA, or error-state token without direct evidence.

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

- Keep the documented `#2B96ED` / `#FFFFFF` pair for the observed 40px public header action when reproducing that exact public-web pattern.
- Preserve the selected locale tab’s observed `#101418` fill, 16px radius, and explicit selected-state provenance.
- Treat the pale `#F5F6F7` search field as its own square-cornered public header control.

### Avoid

The source states these three as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

- Don't turn the captured default action into hover, focus, pressed, disabled, booking, or payment variants without new state evidence.
- Don't substitute a declared-only font face for the visibly loaded Pretendard/public aliases.
- Don't blend the corporate/about or help-center chrome into consumer product tokens.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following are current computed observations from the supplied 2026-07-13 product bundle. They are not a published MyRealTrip token library. Role names follow the source’s observed-role table. YAML keys keep the lowercase hex the token set writes; source §2 keeps the uppercase hex it writes. Both writings stay. Pairing each hex to the token-set path named beside it, keeping YAML lowercase and §2 uppercase writings of the same hex as two records of one key, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, attaching every role to the surface the source recorded rather than as a generalised brand palette, keeping `tokens.colors.control-border` as a color observation rather than a harvested component, and keeping the YAML token note as the facts it names, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

- **Repeated header action** (`#2b96ed` / `#2B96ED`): 40px button background on home and hotel listing; do not infer hover or booking-flow use. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#2b96ed`.
- **White canvas** (`#ffffff` / `#FFFFFF`): Repeated public surface background. Token-set path `tokens.colors.canvas`.
- **Action text** (`#ffffff` / `#FFFFFF`): text on the blue action. Token-set path `tokens.colors.on-primary`. `tokens.colors.canvas` and `tokens.colors.on-primary` both write `#ffffff`. They stay two keys.
- **Search fill** (`#f5f6f7` / `#F5F6F7`): 48px public search input on home and hotel listing. Token-set path `tokens.colors.search-fill`.
- **Search/control ink** (`#495056`): Repeated input and public list/control text. Token-set path `tokens.colors.ink`.
- **Muted navigation text** (`#666d75` / `#666D75`): Repeated public home and hotel-header text/border observation. Token-set path `tokens.colors.muted`.
- **Control border** (`#ced4da` / `#CED4DA`): Static white outlined control in both product surfaces. Token-set path `tokens.colors.control-border`. This is a color observation. It is not a harvested component record.
- **Selected locale-tab fill** (`#101418`): `aria-selected=true` tab on the home header. Token-set path `tokens.colors.selected-fill`.

The prior deep-blue, violet, semantic, sale, and success palette claims are not retained: the fresh bundle does not establish them as current reusable product tokens.

`tokens.colors.canvas` `#ffffff` is not `tokens.colors.on-primary` `#ffffff`. `tokens.colors.primary` `#2b96ed` is the repeated header-action fill. It is not a hover or booking-flow color. `tokens.colors.search-fill` `#f5f6f7` is not `tokens.colors.control-border` `#ced4da`. `tokens.colors.ink` `#495056` is not `tokens.colors.muted` `#666d75`. `tokens.colors.selected-fill` `#101418` stays on the selected locale tab. Reading those attachments as the roles named beside them, rather than as a shared numeral or a collapsed pair, is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless step as the YAML recorded it.

| Step | Value | Token-set path |
|---|---:|---|
| action-inline | 24 | `tokens.spacing.action-inline` |

`tokens.spacing.action-inline: 24` is the YAML spacing step. It is not only the header-action padding `0px 24px` and is not a type size. Keeping that unitless 24 on its own key path rather than treating a shared numeral as the same token is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| square | 0 | `tokens.rounded.square` |
| action | 12 | `tokens.rounded.action` |
| selected-tab | 16 | `tokens.rounded.selected-tab` |

`tokens.rounded.square: 0` is not only the search field’s `Radius: 0px` and is not the search field’s `Border: 0px`. `tokens.rounded.action: 12` is not only the header-action `Radius: 12px`. `tokens.rounded.selected-tab: 16` is not only the selected locale tab’s `Radius: 16px` and is not a type size. Keeping those three keys on their own paths, and keeping local radii on their components, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

### Elevation

The retained primary action, search field, and selected locale tab have no shadow. The selected tab’s own sample carries `0px 1px 2px rgba(0, 0, 0, 0.15)` while the action and search field are `none`; this isolated header treatment does not establish a reusable elevation scale. Those sentences are the source’s own. Reading that isolated selected-tab sample as not a reusable elevation scale is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

### Motion

The source placeholder for this section is omitted at the placeholder-value boundary. No duration, easing, transition, reduced-motion, or animated-state measurement was captured. Do not infer motion from class names or from the presence of interactive-looking controls. Those sentences are the source’s own.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Treating that measured absence as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, requiring a per-component computed observation of all five kinds before any promotion, and keeping the source’s “Do not infer motion from class names or from the presence of interactive-looking controls” sentence, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Pretendard as the public-web UI-family token only, treating `__pretandard_7bdbf6` as a loaded internal alias rather than a separately named reusable brand typeface, treating declared-only faces as omitted, and refusing to substitute a declared-only face for the visibly loaded Pretendard/public aliases, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification. The finding inside each row stands on its own.

| Evidence class | Finding | Boundary |
|---|---|---|
| **Official product-use** | No first-party MyRealTrip font specification or announcement was found in this update. | No brand-font claim is inferred from a marketing or corporate page. |
| **Live computed surface-use** | `Pretendard` is a loaded, high-confidence first family with 60 visible uses and 36 captured source URLs; the hotel search input resolves to it directly. | This supports the public-web UI-family token only. |
| **Loaded internal alias** | `__pretandard_7bdbf6` is loaded with high confidence, 64 visible uses, and four MyRealTrip CDN sources. | The bundle does not prove that the internal alias is a separately named, reusable brand typeface. |
| **Official distributed font asset / licence** | Pretendard’s upstream project publishes the font under SIL Open Font License 1.1. | This is third-party font licensing, not a licence to MyRealTrip marks, UI assets, or an assertion that every MyRealTrip surface ships the same build. |
| **Declared-only** | `Pretendard Variable`, `Noto Sans KR`, `PP Neue Montreal`, and icon faces appear as declarations in the bundle but are not promoted by the collector. | Do not render a specimen or token as though any of them were verified visible current UI use. |

### Family

- **Current visible UI family:** `Pretendard`. Token-set path `tokens.typography.family.sans`.
- **Loaded internal alias:** `__pretandard_7bdbf6` — preserve exact evidence; do not de-alias it into a new proprietary family token.
- Do not substitute a declared-only font face for the visibly loaded Pretendard/public aliases. Pretendard is canonical here only for the captured public-web surfaces, and only because computed visible use and loaded FontFace/source evidence agree.

Keeping Pretendard as the public-web UI-family token only for the captured public-web surfaces and only where computed visible use and loaded FontFace/source evidence agree, keeping `__pretandard_7bdbf6` as a loaded internal alias rather than a separately named family, and refusing declared-only faces as substitutes, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

### Type roles

YAML sizes stay the unitless numbers the token set recorded. YAML `lineHeight` is already px (`21px`, `22.5px`) and stays in that form. Token-set paths: `tokens.typography.body.size` / `tokens.typography.body.weight` / `tokens.typography.body.lineHeight` / `tokens.typography.body.use` and `tokens.typography.control.size` / `tokens.typography.control.weight` / `tokens.typography.control.lineHeight` / `tokens.typography.control.use`. Token-set `use` strings are kept verbatim; where source §3 is the longer record of the same role, that longer surface column stays beside the YAML use. The selected home locale tab’s `18.6px` line height is a §3 row; YAML has no typography key for that role. Keeping YAML sizes as the token-set numbers, keeping YAML `use` and the §3 surface column on the same role, keeping `18.6px` on the selected home locale tab rather than dropping it, and attaching each role to the surface the source recorded rather than as a company-wide typographic scale, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use | Surface |
|---|---|---:|---:|---|---|---|
| Hotel-listing body/list text | Pretendard | 14 | 400 | 21px | Public hotel-listing body/list text | `https://www.myrealtrip.com/hotels` |
| Hotel search control | Pretendard | 15 | 500 | 22.5px | Public hotel-search input | `https://www.myrealtrip.com/hotels` |
| Selected home locale tab | Pretendard | 15px | 700 | 18.6px | Not a YAML `tokens.typography` key. Component font: `15px / 700 / Pretendard` | `https://www.myrealtrip.com/` |

These are captured public-web roles, not a claim about authenticated booking screens, mobile native UI, help-center chrome, or a company-wide typographic scale.

`tokens.typography.body.size` `14` is not the header-action font `14px / 600`. `tokens.typography.control.size` `15` is not the selected locale tab’s `15px / 700` and is not only the search field’s `15px / 500`. The control line height `22.5px` is not the locale-tab line height `18.6px`. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or another component, is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=myrealtrip.com&sz=128`. That URL is an identity pointer, not a MyRealTrip-hosted brand file.
- Upstream Pretendard licence: SIL Open Font License 1.1 at `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. This describes the font asset, not a MyRealTrip brand asset.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a MyRealTrip-hosted brand file, and reading the Pretendard licence as an upstream font-asset boundary rather than a MyRealTrip brand asset, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The collector reports one selected tab observation and `interactionCount: 0`. No verified empty, loading, error, success, disabled, validation, toast, dialog, or skeleton treatment is available from this packet.

| State | Evidence boundary |
|---|---|
| Selected locale tab | `aria-selected="true"` static home-header observation; values recorded on the Selected locale tab block. |
| Empty | unnamed in this packet |
| Loading | unnamed in this packet |
| Error | unnamed in this packet |
| Success | unnamed in this packet |
| Disabled | unnamed in this packet |

The prior prose-derived palette, broad card/badge/dialog/toast inventory, hover/focus/error/disabled catalogue, mobile breakpoints, and motion rules were not supported by the supplied current raw evidence. They are removed rather than refreshed by assumption.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless, and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. The two token-set records are `primary-header-action` and `selected-locale-tab`. The public search field is source §4 only; it is not in the token set, so no primitive type is attached. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a `Primitive type` line only when the source YAML records that type, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Public header action

- Role: repeated header action on the public home and hotel listing
- Primitive type: `button` · Kind: interactive
- Background: `#2b96ed` / `#2B96ED`
- Text: `#ffffff` / `#FFFFFF`
- Radius: 12px
- Padding: 0px 24px
- Height: 40px
- Font: YAML `14px / 600 / Pretendard`. §4 longer record: 14px / 600 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- Token-set states: Default only; interactionCount is 0, so hover, focus, pressed, and disabled variants are not claimed.
- Token-set path: `tokens.components.primary-header-action` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `states`, `use`)
- Token-set use: Public home and hotel-header action; home::[data-omd-capture="5"] and surface-3::[data-omd-capture="3"]
- §4 Use: repeated header action on `home::[data-omd-capture="5"]` and `surface-3::[data-omd-capture="3"]`
- Observed: default only; the supplied bundle reports `interactionCount: 0`, so no hover, focus, pressed, disabled, menu, dialog, validation, or loading variant is claimed
- The `12px` radius is this button's geometry. It is not only `tokens.rounded.action: 12`. The `0px 24px` padding is this control's padding. It is not only `tokens.spacing.action-inline: 24`. The 40px height is this control's height. The 14px / 600 font is this control's font; it is not `tokens.typography.body.size` `14`. Reading those figures as this button's geometry rather than as those YAML steps, keeping the YAML font beside the §4 longer alias/stack record, and treating this public header action as a header control that opens a destination rather than as an in-place commit, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on home and hotel listing |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | A public header action opens a destination; it commits no operation in place |
| error | not-applicable | A header action does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Public search field

- Role: public keyword search on the public home and hotel listing
- Not in the token set. No primitive type is attached.
- Kind: interactive
- Background: `#f5f6f7` / `#F5F6F7`
- Text: `#495056`
- Border: 0px
- Radius: 0px
- Padding: 0px 54px 0px 20px
- Height: 48px
- Font: 15px / 500 / loaded internal Pretendard alias on home; Pretendard stack on hotel listing
- Use: public keyword search at `home::[data-omd-capture="3"]` and `surface-3::[data-omd-capture="1"]`
- Observed: default only
- The `0px` radius is this field's geometry. It is not only `tokens.rounded.square: 0`. The 48px height is this field's height. The 15px / 500 font is this control's font; it is not only `tokens.typography.control.size` `15` and is not the selected locale tab’s `15px / 700`. Omitting a primitive type because the row is not in the token set, and reading those figures as this search field's geometry rather than as those YAML steps, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on home and hotel listing |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted |
| success | not-applicable | The field does not complete a search on itself |

### Selected locale tab

- Role: selected locale tab within the home-header tablist
- Primitive type: `tab` · Kind: interactive
- Background: `#101418`
- Text: `#ffffff` / `#FFFFFF`
- Radius: 16px
- Padding: 6px 10px
- Height: 32px
- Font: 15px / 700 / Pretendard. §3 longer line-height record: 18.6px
- Token-set path: `tokens.components.selected-locale-tab` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `active`, `use`)
- Token-set active: aria-selected=true observed on home::[data-omd-capture="1"]
- Token-set use: Selected locale tab on the public home header
- §4 Use: selected locale tab within the home-header tablist; `aria-selected="true"` on `home::[data-omd-capture="1"]`
- Observed: selected state only
- The unselected sibling’s transparent computed text is not promoted as a reusable inactive variant. Its static capture does not establish an interaction transition.
- The `16px` radius is this tab's geometry. It is not only `tokens.rounded.selected-tab: 16`. The 32px height is this control's height. The 15px / 700 font is this control's font; it is not `tokens.typography.control.size` `15`. The `18.6px` line height stays on this tab. Reading those figures as this tab's geometry rather than as those YAML steps, keeping the YAML font beside the §3 `18.6px` line height, and treating this control as a tab rather than as an in-place commit, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selected static state captured on the home header |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Tab control; it commits no operation in place |
| error | not-applicable | Tab control; it commits no operation in place |
| success | not-applicable | Tab control; it commits no operation in place |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied bundle records public desktop-width documents only. The repeated consumer header is compact: the search field is 48px high, the primary action is 40px high, and the selected locale tab is 32px high. No public max-width, carousel, card-grid, booking-detail, or authenticated-flow layout rule is retained because the bundle does not supply a stable element-level measurement for one. Those sentences are the source’s own.

No responsive breakpoint or mobile layout was captured in the supplied evidence. The record therefore makes no claim about mobile navigation, carousel behavior, touch targets, safe-area controls, or image aspect-ratio rules. Those sentences are the source’s own. The 40px, 48px, and 32px heights are desktop-capture measurements, not cross-viewport specifications.

Reading those three heights as local captured geometry rather than as a complete grid declaration, reading those heights as desktop-capture measurements rather than as cross-viewport specifications, and keeping the source’s own “public desktop-width documents only” and “makes no claim about mobile navigation, carousel behavior, touch targets, safe-area controls, or image aspect-ratio rules” sentences rather than adding a further domain, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The public sources demonstrate Korean-first service labels such as `무엇을 도와드릴까요?`, `문의하기`, and partner guidance written in polite `~요` language. Those samples support a practical, explanatory service register on the public help and partner surfaces; they do not establish a comprehensive product voice system. The quoted labels, the `~요` register, and the source’s own “do not establish a comprehensive product voice system” limit are the source’s own. Characterizing those samples as a practical, explanatory service register on the public help and partner surfaces rather than as a complete product-microcopy guide, and requiring the quoted strings below byte-exact, are derived editorial implementation inferences from the verified surfaces; they are not MyRealTrip-authored or a separately published UI specification.

| Evidence | Safe use |
|---|---|
| `무엇을 도와드릴까요?` | Help-centre framing for a support entry point. |
| `문의하기` | Direct action label for a support route. |
| `여행자와의 약속을 성실히 이행해요` | Partner-program guidance, not a generic consumer CTA. |

Published names and lines the source records, kept byte-exact: MyRealTrip, 마이리얼트립, Lee Dong-geon, Real Partner, `무엇을 도와드릴까요?`, `문의하기`, `여행자와의 약속을 성실히 이행해요`, AI-native travel platform. Classifying those strings as published names the source records and keeping them byte-exact is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unresolved. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not MyRealTrip-authored or a separately published UI specification.

- empty, loading, error, success, disabled, validation, toast, dialog, and skeleton visual treatments
- hover, focus, pressed, disabled, menu, dialog, validation, and loading visual treatments on the captured default action
- duration, easing, transition, reduced-motion, and animated-state measurement
- public max-width, carousel, card-grid, booking-detail, and authenticated-flow layout rule
- responsive breakpoint or mobile layout
- unselected locale-tab inactive variant
- prior deep-blue, violet, semantic, sale, and success palette claims
- declared-only `Pretendard Variable`, `Noto Sans KR`, `PP Neue Montreal`, and icon faces as visible current UI use
