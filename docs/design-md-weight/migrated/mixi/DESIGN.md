# MIXI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MIXI is a Japanese communication and entertainment company. This contract covers the three supplied corporate-site routes the source inspected on 2026-07-13: `https://mixi.co.jp/` (corporate home), `https://mixi.co.jp/about/` (corporate about), and `https://mixi.co.jp/about/conductguidelines/` (conduct guidelines). The YAML homepage is `https://mixi.co.jp/`. Official company and brand context at `https://mixi.co.jp/en/about/`, official history at `https://mixi.co.jp/en/company/history/`, and the MIXI DESIGN activity report at `https://design-note.mixi.co.jp/n/n72743daaf24b` are named narrative sources; they do not supply the selector-backed tokens below. Every value stays attached to the surface that established it. Reading those three corporate routes as this contract's token surfaces, keeping values attached to the surface that established them, and treating the about/history/DESIGN URLs as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

The source's token note, kept here as a capture bound: only selector-backed values from the supplied MIXI corporate-site capture are canonical tokens. Corporate history, product strategy, logo rationale, and design-culture sources provide narrative context only; no unobserved product, marketing, or interaction pattern is inferred. The supplied July 13 corporate capture covers the home, about, and conduct-guidelines routes: 3 surfaces, 30 component variants, 0 interaction expansions, and coverage 71. Across those surfaces, Noto Sans JP is loaded with high confidence and 337 visible uses. The measured web surface is white/transparent fields, black text and boundaries, compact 13px/600 header controls, 15px/400 reading copy, and editorial 35px section headings. The red news label is route-local; it is retained as a measured news treatment, not promoted as a universal action colour. The characterizations built on those recorded values — an unusually deliberate corporate expression for such a broad portfolio; a stark, editorial black-and-white site; restrained rather than a universal product system; the red news label retained as a route-local measured news treatment rather than a universal action colour — are a derived editorial implementation inference from the verified surfaces; they are not MIXI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

Brand narrative recorded by the source, kept as narrative context. MIXI began with the Find Job! service in 1997, launched the social network mixi in 2004, and has since expanded through services and businesses including MONSTER STRIKE, family sharing, sports, and live-event activity. MIXI’s official history starts with the 1997 Find Job! service and records the 2004 launch of the mixi social network. The company later added services and businesses spanning mobile entertainment, family sharing, sports, and events; its name changed to MIXI, Inc. in 2022. This is a company narrative, not evidence that those individual products share one web component system. The current corporate articulation centers on enriching communication and creating opportunities for meaningful connection. MIXI’s current strategic language places emotional, meaningful connection ahead of communication volume. The company calls the present its “Third Founding” and frames a We-Time Economy around experiences shared with other people. Its brand explanation says the redesigned heavy uppercase logo is intended to express trust, stability, ubiquity, and a leading presence, while the two red/orange underscore forms carry excitement and warmth. The company’s documented red and orange emotion marks give excitement and warmth separate roles. The official rationale connects the bold logo to trust, stability, and a large-scale communications presence; the two rotated underscore forms introduce emotional colour without turning every public surface into a multicolour UI. The current “Third Founding”/We-Time framing extends that connection mission toward experiences people enjoy together. These statements explain the corporate identity and direction; they do not fill in missing service UI facts. That corporate evolution and its product/service portfolio explain the visual balance of forceful black structure and bounded emotional accents; they do not establish unobserved application controls, signed-in flows, or service-level design tokens. The years 1997 / 2004 / 2022, Find Job!, the mixi social network, MONSTER STRIKE, family sharing, sports, live-event activity, mobile entertainment, events, MIXI, Inc., "Third Founding", We-Time Economy, the heavy uppercase logo rationale (trust, stability, ubiquity, a leading presence, a large-scale communications presence), the two red/orange rotated underscore forms (excitement and warmth), and each paragraph's last sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-portfolio narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as surface-or-control outcomes rather than stakeholder-group aims, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's stakeholder-groups section.

- Use the observed corporate-header global-navigation button at `home::[data-omd-capture="3"]`.
- Scan the observed home news-card category label at `home::div.c-newsCard__info--category`.
- Read the observed about and conduct-guideline body copy.
<!-- design-md:claim-end -->

### Audience

*Source-grounded groups, not fictional personas.* Those three groups keep the source's wording. Reading them as this contract's audience, rather than rewriting them as new segment labels, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

- **People sharing communication and entertainment with friends or family:** the corporate mission explicitly identifies meaningful connection and shared emotion as the aim.
- **Service audiences across MIXI’s portfolio:** the company history identifies social networking, mobile entertainment, family sharing, sports, and event-related expansion; individual service UI remains outside this capture.
- **MIXI designers and collaborators:** the official MIXI DESIGN activity report describes a design community organized around contents, communication, and community, plus knowledge sharing and external exchange. It is culture context, not a public component specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

- White/transparent fields with `#000000` text and boundaries on a `#ffffff` canvas
- Noto Sans JP loaded with high confidence and 337 visible uses across the three corporate routes
- Compact 13px/600 header controls, 15px/400 reading copy, editorial 35px/600 guideline headings
- 70px header-navigation baseline; 22px / 3px news category label; 5px news-image rounding; 390px-wide home news-card rows
- `#e5004d` retained as a route-local home news-label treatment
- `#5c5c5c` retained as supporting corporate text on an about/conduct breadcrumb link
- Default baseline captured only; `interactionCount: 0`

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not MIXI-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. MIXI’s purpose, MIXI Way, official logo rationale, and official values are first-party lines the source attributes to MIXI; every *UI implication* below is the source's own editorial reading.

1. **Make connection meaningful, not merely frequent.** MIXI’s purpose explicitly favors deeper, richer connection. *UI implication:* describe the value of a communication moment without fabricating engagement mechanics or product states.
2. **Put user surprise before novelty for its own sake.** MIXI Way asks whether an outcome is a pleasant surprise. *UI implication:* make the next step clear and useful; do not add unobserved animation or urgency patterns to simulate surprise.
3. **Carry emotion with structural restraint.** The corporate site’s black-and-white framework bounds its observed red news label, while official logo rationale assigns emotional meaning to red/orange. *UI implication:* keep any measured accent scoped to its source context.
4. **Be bold, passionate, and sincere.** The official values name innovation, passion, and integrity. *UI implication:* use a confident hierarchy and plain, accountable language rather than decorative complexity.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

- Keep the captured corporate specimen sober: white/transparent surfaces, black structure, and generous editorial reading space.
- Use `Noto Sans JP` only for the verified corporate-web specimen, with the observed 15px/400 body and 13px/600 header control roles where appropriate.
- Keep `#e5004d` bounded to its observed news-label treatment.
- Preserve the 70px header-navigation baseline and the 22px/3px news category label as separate measured components.

### Avoid

The source states these as its Don't list, plus the §9 sentence that a product UI, a brand-font specimen, or any interaction state needs new evidence for that exact surface and selector. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

- Do not substitute declared MIXISANS files, Noto Sans fallbacks, or a system font for a claimed MIXI product font.
- Do not turn corporate red/orange brand narrative into unmeasured product action, error, success, or hover tokens.
- Do not map a captured news link/row to a button; only the captured header elements with button tags are button evidence.
- Do not invent responsive breakpoints, interaction states, dialogs, toasts, inputs, or a generic component library from this corporate capture.
- Do not generate a product UI, a brand-font specimen, or any interaction state without new evidence for that exact surface and selector.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` beside ink rather than as a second colors token, keeping header and news-label text/border writings of that same ink hex on those component paths rather than as extra colors keys, keeping `tokens.colors.news-red` as a home news-label treatment rather than a global CTA, error, or product action, keeping `tokens.colors.muted` as supporting corporate text only, keeping the official red/orange emotion-mark rationale separate from the selector-backed values, and attaching every role to the surface the source recorded, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Canvas** (`#ffffff`): Token-set path `tokens.colors.canvas`. Observed as the home logo block and white news-label foreground/border context.
- **Ink** (`#000000`): Token-set path `tokens.colors.ink`. The repeated text, border, header-control, and navigation value across all three supplied corporate surfaces. Catalog `primary_color` is also `#000000`; that identity field stays beside this key, not as a second colors token.
- **Muted** (`#5c5c5c`): Token-set path `tokens.colors.muted`. Observed on an about/conduct breadcrumb link; retain it as supporting corporate text only.
- **News red** (`#e5004d`): Token-set path `tokens.colors.news-red`. Observed as the background of the home news-card red label. It is not evidence for a global CTA, error, or product action.

The official corporate-brand explanation describes red as excitement/adrenaline and orange as comfort/warmth. It does not publish an exact red/orange CSS token in the inspected material, so that narrative colour rationale is kept separate from the selector-backed values above.

### Spacing

The source YAML has no `tokens.spacing` map. Route-local measured shapes the source names sit on Layout: 70px header controls, 390px news rows, 22px category labels, and 5px news-image rounding. Reading the absence of a spacing map as omission at that field boundary, rather than as a scale invented from those measured shapes, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `control: 3` · `news-image: 5`.

The source's named radius uses, kept on their own rows:

- Header global-navigation radius `0px` — a component writing on `tokens.components.header-global-navigation.radius`. It is not `tokens.rounded.control: 3`.
- News category label radius `3px` — Token-set path `tokens.rounded.control: 3`. YAML `news-category-label.radius` also records `3px`.
- News-image rounding `5px` — Token-set path `tokens.rounded.news-image: 5`. The `5px` in news-label padding `4px 9px 5px` is that padding's trailing value. It is not `tokens.rounded.news-image: 5`.

`tokens.rounded.control: 3` and `tokens.rounded.news-image: 5` stay two keys. Header `0px` stays a component writing. Keeping those writings unmerged is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

### Elevation

No reusable box-shadow token was established. The captured corporate surfaces mostly use transparent fields, black rules, image framing, and whitespace rather than a documented elevation ladder. Do not create card, dialog, popover, or modal shadow values from static page structure. Reading that recorded treatment as the elevation contract of this capture, rather than filling a documented elevation ladder the source did not establish, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

### Motion

No reusable duration, easing, transition, or motion rule is recorded in the supplied evidence. Static corporate elements and a brand narrative about emotion do not establish a motion contract. No motion token is promoted.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and reading the source's emotion narrative as not a motion contract, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party statement in the collected material establishes a MIXI product/app UI font. |
| Live computed surface-use | `Noto Sans JP` is loaded/high confidence with 337 visible uses across the three supplied corporate routes. |
| Official distributed brand asset | `mixi-bold` and `mixi-medium` are declared from MIXI-hosted MIXISANS files, but have zero visible uses in the bundle. |
| Declared-only | `mixi-bold`, `mixi-medium`, `Noto Sans`, and `swiper-icons` have no observed visible use in this capture. |
| Unresolved in this capture | The public capture does not establish a separate, browser-loadable MIXI product type family or a licence boundary for the declared MIXISANS files. Source evidence-class label: Unresolved. |

`Noto Sans JP` is therefore the only canonical family for the captured corporate web specimen. It is not a substitute claim for MONSTER STRIKE, mixi2, or another MIXI service. The declared MIXISANS files remain useful implementation evidence, but not tokens or specimens. Reading that live-use count as the reason Noto Sans JP is canonical here, refusing it as a substitute for MONSTER STRIKE, mixi2, or another MIXI service, reading MIXISANS as declared implementation evidence rather than tokens or specimens, and keeping the class column `Unresolved in this capture` with the source evidence-class label Unresolved in the resolution cell rather than as a prescriptive placeholder, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Noto Sans JP` — Token-set path `tokens.typography.family.ui`.
- **Declared MIXISANS:** `mixi-bold`, `mixi-medium` — MIXI-hosted files; zero visible uses; not tokens or specimens.
- **Declared-only, zero visible uses:** `Noto Sans`, `swiper-icons`.
- Do not replace unavailable or unobserved MIXI type with Noto Sans JP, and do not present Noto Sans, a system font, or the declared MIXISANS files as the captured corporate-web face. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). `1.15` is not rewritten as a fixed px. `1.8` is not rewritten as a fixed px. `1.5` is not rewritten as a fixed px. Token-set `use` strings are kept verbatim; where source §3 surface-boundary notes are longer, both writings are kept. The news-label `11px / 600` font is a component writing; it is not a type-role row. Keeping YAML line heights as unitless ratios beside the source's own px equivalents, keeping each YAML `use` string beside the §3 surface-boundary column, and keeping `11px` on the news-label component rather than as a fourth type role, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Surface boundary |
|---|---|---:|---:|---:|---|---|
| Corporate header navigation | Noto Sans JP | 13 | 600 | 1.15 (14.95px) | Observed corporate-header global-navigation control | Home/about/conduct shared header |
| Reading body | Noto Sans JP | 15 | 400 | 1.8 (27px) | Observed about and conduct-guideline body copy | About and conduct-guidelines samples |
| Conduct-guideline heading | Noto Sans JP | 35 | 600 | 1.5 (52.5px) | Observed conduct-guideline section heading | Conduct-guidelines route only |

Token-set `tokens.typography.header-navigation.size` is `13`. Token-set `tokens.typography.body.size` is `15`. Token-set `tokens.typography.guideline-heading.size` is `35`. Source §3 also writes those sizes as 13px / 15px / 35px. Those px spellings stay beside the unitless YAML sizes. Neither writing was chosen as a replacement.

### Assets

The catalog identity records `logo.type: favicon` and `logo.slug: https://www.google.com/s2/favicons?domain=mixi.co.jp&sz=128`. That is a third-party favicon proxy URL held as catalog identity metadata; it is not a first-party distributed MIXI brand asset, and it is not promoted to one here. Classifying the Google s2 slug as an identity pointer rather than a hosted brand file, and reading MIXISANS as declared files rather than specimens, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

No reusable empty, loading, error, success, disabled, validation, skeleton, or interactive-state treatment is recorded. The supplied bundle has zero interaction records, so state design is omitted rather than synthesized.

The bundle reports `interactionCount: 0` and no interaction records. That removes hover, focus, pressed, disabled, error, dialog, toast, and menu-state claims only; it does not remove the measured static header or news-label geometry above. Observed news-card rows are links/rows rather than evidence of button semantics and are not recast as actions.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item that commits no operation in place — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. Generic `Focus` capture is not treated as a `focus-visible` treatment. The news category label has YAML `type: badge` and no interactive-kind evidence in the source body, so kind and a state-applicability map are omitted rather than confirmed. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, the badge omission, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Header global navigation

- Role: Corporate-header global-navigation button
- Primitive type: `button` · Kind: interactive
- Domain: home / about / conduct shared header
- Background: transparent
- Text: `#000000`
- Radius: 0px (square-cornered)
- Padding: 0px
- Height: 70px
- Font: 13px / 600 / Noto Sans JP
- YAML font: `13px / 600 Noto Sans JP`
- States: Default baseline captured; no changed interaction state captured. It is a static default specimen, not a state model.
- Token-set type: `tokens.components.header-global-navigation.type` `button`
- Token-set bg: `tokens.components.header-global-navigation.bg` `transparent`
- Token-set fg: `tokens.components.header-global-navigation.fg` `#000000`
- Token-set radius: `tokens.components.header-global-navigation.radius` `0px`
- Token-set padding: `tokens.components.header-global-navigation.padding` `0px`
- Token-set height: `tokens.components.header-global-navigation.height` `70px`
- Token-set font: `tokens.components.header-global-navigation.font` `13px / 600 Noto Sans JP`
- Token-set states: `tokens.components.header-global-navigation.states` `Default baseline captured; no changed interaction state captured.`
- Token-set use: Observed header global-navigation button at home::[data-omd-capture=3].
- Use (source §4): Corporate-header global-navigation button; `home::[data-omd-capture="3"]`.
- The `70px` height is this control's height. It is not a spacing step. The `13px / 600` font is this control's font and also the header-navigation type-role row; both writings stay. Radius `0px` is this control's radius. It is not `tokens.rounded.control: 3`. YAML use writes `home::[data-omd-capture=3]` without quotes on the capture id; source §4 writes `home::[data-omd-capture="3"]`. Both writings stay. Reading those figures as this button's geometry rather than as `tokens.rounded.control` or a spacing step, keeping the YAML use beside the §4 use, and reading the captured control as a static default specimen rather than a state model, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default baseline |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination navigation control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is corporate-header global navigation; it selects a destination and does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Same role: destination navigation does not report a failed request on itself |
| success | not-applicable | Same role: reaching the destination is not an operation this control reports as success |

### News category label

- Role: Home news-card category label
- Primitive type: `badge`
- Domain: home news-card
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 3px
- Padding: 4px 9px 5px
- Height: 22px
- Font: 11px / 600 / Noto Sans JP
- YAML font: `11px / 600 Noto Sans JP`
- Token-set type: `tokens.components.news-category-label.type` `badge`
- Token-set bg: `tokens.components.news-category-label.bg` `transparent`
- Token-set fg: `tokens.components.news-category-label.fg` `#000000`
- Token-set border: `tokens.components.news-category-label.border` `1px solid #000000`
- Token-set radius: `tokens.components.news-category-label.radius` `3px`
- Token-set padding: `tokens.components.news-category-label.padding` `4px 9px 5px`
- Token-set height: `tokens.components.news-category-label.height` `22px`
- Token-set font: `tokens.components.news-category-label.font` `11px / 600 Noto Sans JP`
- Token-set use: Observed news-card category label at home::div.c-newsCard__info--category.
- Use (source §4): Home news-card category label; `home::div.c-newsCard__info--category`.
- Radius `3px` is this label's radius and `tokens.rounded.control: 3`. The trailing `5px` in padding `4px 9px 5px` is this label's padding. It is not `tokens.rounded.news-image: 5`. The `11px / 600` font is this control's font; it is not a type-role row. Kind and a state-applicability map are omitted: the source records YAML `type: badge` and no interactive-kind evidence. Observed news-card rows are links/rows rather than evidence of button semantics and are not recast as actions. Reading those figures as this label's geometry, keeping `11px` off the type-role table, omitting kind rather than confirming it, and reading observed news-card rows as links/rows rather than as button semantics, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop capture records a fixed, repeated 70px corporate header and broad editorial content widths. It also records 390px-wide home news-card rows, but does not establish a breakpoint system, mobile composition, grid scale, or touch-target policy. Preserve only the route-local measured shapes: 70px header controls, 390px news rows, 22px category labels, and 5px news-image rounding.

Only the supplied 1440×900 desktop surface captures are available. No mobile viewport, breakpoint, focus management, menu expansion, or responsive-state observation is recorded.

`tokens.rounded.news-image: 5` is the news-image rounding named here. It is not the trailing `5px` of news-label padding. The `70px` header is this layout measurement and the header-control height; both writings stay. Reading these figures as route-local measured shapes of the supplied desktop capture, rather than as a breakpoint system or a spacing map, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official corporate material is purposeful, emotionally literate, and concrete about connection: it values joy, warmth, surprise, and meaningful ties rather than connection as a raw volume metric. Its values pair a bold invitation to innovate with passion and integrity. This is a corporate communication register, not a blanket claim about every consumer service’s microcopy. Calling that register purposeful / emotionally literate / concrete, and refusing to treat it as a complete product-microcopy guide for every MIXI service, are derived editorial implementation inferences from the verified surfaces; they are not MIXI-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Name the human connection or moment the work enables. | Reduce the message to connection volume, metrics, or vague scale. |
| Be direct about a surprising or enjoyable outcome. | Manufacture excitement with unsupported urgency or claims. |
| Keep a sincere, grounded commitment when describing impact. | Treat red/orange emotion marks as permission for indiscriminate visual noise. |

Illustrative, not verbatim product copy: “Make a moment worth sharing.” “Leave room for a pleasant surprise.” “Build the connection, then let the joy travel.”

Classifying those three lines as illustrative samples rather than official UI copy is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification. The source already marks them as illustrative, not verbatim product copy.

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

These decisions are unnamed values, not permissions to invent. Reading the list as a catalog of unnamed values the source already named, rather than as coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not MIXI-authored or a separately published UI specification.

- reusable empty, loading, error, success, disabled, validation, skeleton, or interactive-state treatment
- reusable duration, easing, transition, or motion rule
- reusable box-shadow token
- breakpoint system, mobile composition, grid scale, or touch-target policy
- mobile viewport, focus management, menu expansion, or responsive-state observation
- MIXI product/app UI font; licence boundary for the declared MIXISANS files
- exact red/orange CSS token for the official emotion-mark rationale
- getdesign.md / refero records for MIXI
