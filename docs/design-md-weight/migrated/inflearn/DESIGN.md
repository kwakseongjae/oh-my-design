# Inflearn Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Inflearn (인프런) is Inflab’s career-learning platform. This contract covers the two first-party product surfaces the source inspected for tokens on 2026-07-13: the product home at `https://www.inflearn.com/` and the course catalog at `https://www.inflearn.com/courses`. The Inflab engineering article at `https://tech.inflab.com/20260305-new-header/` is documentation chrome and official context; the 2024 design-system retrospective at `https://tech.inflab.com/20240224-design-system/` is first-party design-system context; the company introduction at `https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/` is first-party company context. Those three named sources do not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading those two product routes as this contract’s token surfaces, keeping values attached to the surface that established them, and treating the engineering article, the design-system retrospective, and the company introduction as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

The official company introduction describes a space where people can learn and share knowledge without economic or time constraints, while its public product routes organize that promise as a dense course catalogue. The supplied home and course-list captures use a white field, dark neutral text, a precise green action color, compact rounded navigation controls, and image-led course articles. The expression is practical rather than decorative: the emphasis is on finding, comparing, and entering learning content. Organizing that company promise as a dense course catalogue, and calling the expression practical rather than decorative, are derived editorial implementation inferences from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

The current product shell should not be confused with every Inflearn-owned page. The supplied third route is an Inflab engineering article with separate documentation chrome; it is recorded as first-party context only. Inflab’s own engineering writing says the service has accumulated multiple systems and that its newer shared GNB serves courses, challenges, mentoring, clips, and community across multiple front-end environments. That is useful evidence for the header’s product importance, not authorization to turn documentation styles into product tokens. The product home and course catalog are the only sources of product tokens and component claims in this reference. The Inflab engineering article describes the 2025 GNB redesign, its MFE/App Shell context, and the product’s core service navigation. The source records that article as documentation chrome, not a product-token source. No separate public marketing surface was captured, and no login, course-detail, cart, payment, or learning-room flow was treated as observed. Reading the current product shell as distinct from every Inflearn-owned page, treating the GNB article as useful evidence for the header’s product importance rather than authorization to turn documentation styles into product tokens, and treating the product home and course catalog as the only sources of product tokens and component claims, are derived editorial implementation inferences from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Inflab’s own introduction describes Inflearn as a career-learning platform for people who pursue work and dreams. It says the service aims to let people learn and share knowledge without being prevented by economic or time constraints, and it presents knowledge sharers with substantial professional experience as a source of expertise. The company also frames transparent course information and a long-term growth ecosystem as part of its purpose. Its engineering writing gives that public product a current operational context. A 2024 design-system retrospective says historical systems coexisted, while the 2026 GNB account explains how a new shared header made the core services—courses, challenges, mentoring, clips, and community—more legible across multiple front-end environments. This is an evolution in product infrastructure and navigation, not evidence that every public surface shares a single stylesheet or component library. The reference therefore keeps the official service and evolution story, but does not invent founder history, customer metrics, a uniform visual system, or a quantified design outcome beyond what those sources state. The 2024 retrospective, the 2025 GNB redesign, the 2026 GNB account, the core-service list, the MFE/App Shell context, and the closing “does not invent” sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that service-and-evolution narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from a persona section.

- Find, compare, and enter learning content on the product home at `https://www.inflearn.com/`.
- Browse the course catalogue at `https://www.inflearn.com/courses`.
- Submit a product GNB search from the captured search-submit control.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The official company page identifies learners seeking career development and experts who share knowledge. The product’s current GNB article additionally names courses, challenges, mentoring, clips, and community as core services. These are stakeholder/service facts, not synthetic personas; no age, task frequency, conversion behavior, or preference is inferred. Reading those source-named groups and core services as this product’s audience is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Distinctive traits

The values are recorded; the groupings inside them are a derived editorial implementation inference from the verified surfaces — they are not Inflearn-authored or a separately published UI specification.

- White canvas (`#ffffff` / `#FFFFFF`) with dark ink (`#212529`) and secondary text (`#495057`)
- Precise green action (`#00c471` / `#00C471`) and its observed hover (`#00a760` / `#00A760`)
- Pretendard as the sole promoted UI family (1,278 visible computed uses)
- Compact rounded navigation: 32px GNB actions, `999px` search-submit, `9999px` content tabs
- Image-led course `article` shells at 8px radius, zero padding, `box-shadow: none`
- Course-badge pairs: blue `#e7f5ff` / `#228be6` and cyan `#e3fafc` / `#1098ad`; green badge background `#00a760`

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not Inflearn-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Career learning and knowledge sharing.** The company describes a platform for people to learn and share expertise. *UI implication:* do not replace that service context with unsupported commerce or credential claims.
2. **Transparent information.** The company says it publishes learner counts and course evaluations without selection or manipulation. *UI implication:* where such data is presented, distinguish actual product evidence from marketing interpretation.
3. **Opportunity through accessibility.** The company describes reducing economic and time barriers to learning. *UI implication:* do not turn that narrative into unobserved pricing, promotion, or eligibility UI.

### Application rules

The source states these two as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

- Keep learner and knowledge-sharing context tied to the official company narrative.
- Preserve source-domain boundaries when referring to product, documentation, or company-story content.

### Avoid

The source states these two as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

- Turn a company mission statement into an unobserved product microcopy template.
- Present declared-only or system fonts as loaded Inflearn UI fonts.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Pairing each hex to the token-set path named beside it, keeping `#00c471` on the search-submit default and `#00a760` on that control’s hover rather than collapsing them, keeping `#00a760` as both `tokens.colors.primary-hover` and a course-badge background, keeping `#f8f9fa` as both `tokens.colors.neutral` and a tab-hover background, keeping `#25262b` / `#25262B` as a component record rather than a `tokens.colors.*` key, and keeping `#ADB5BD` as a selector-local disabled-text observation rather than a palette token, are derived editorial implementation inferences from the verified surfaces; they are not Inflearn-authored or a separately published UI specification. The hex values and recorded uses are the source’s own. These values are product-route observations, not a claim that every public Inflab site has the same palette.

- **Canvas** (`#ffffff` / `#FFFFFF`): observed product canvas and control background. Token-set path `tokens.colors.canvas`.
- **Ink** (`#212529`): repeatedly observed product ink. Token-set path `tokens.colors.ink`.
- **Text** (`#495057`): repeatedly observed product control and secondary text. Token-set path `tokens.colors.text`.
- **Neutral** (`#f8f9fa` / `#F8F9FA`): observed GNB action background and product tab hover background. Token-set path `tokens.colors.neutral`.
- **Subtle** (`#f1f3f5` / `#F1F3F5`): observed hover/disabled neutral treatment; the source-specific alpha is retained on the GNB navigation-action record. Token-set path `tokens.colors.subtle`.
- **Hairline** (`#dee2e6` / `#DEE2E6`): observed product control border. Token-set path `tokens.colors.hairline`.
- **Primary** (`#00c471` / `#00C471`): observed product GNB search-submit and selected control background. Token-set path `tokens.colors.primary`. Frontmatter `primary_color` is `#00c471`.
- **Primary hover** (`#00a760` / `#00A760`): observed hover treatment for the GNB search-submit and an observed course-badge background. Token-set path `tokens.colors.primary-hover`.
- **Info surface** (`#e7f5ff` / `#E7F5FF`): observed blue course-badge wrapper. Token-set path `tokens.colors.info-surface`.
- **Info** (`#228be6` / `#228BE6`): observed blue course-badge text. Token-set path `tokens.colors.info`.
- **Cyan tag surface** (`#e3fafc` / `#E3FAFC`): observed cyan course-badge wrapper. Token-set path `tokens.colors.cyan-tag-surface`.
- **Cyan tag** (`#1098ad` / `#1098AD`): observed cyan course-badge text. Token-set path `tokens.colors.cyan-tag`.

The selected content-tab background `#25262b` / `#25262B` is a component record, not a `tokens.colors.*` key. The home disabled-button text `#ADB5BD` is a selector-local observation, not a palette token.

### Spacing

Unitless token-set steps from `tokens.spacing`: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 10` · `tokens.spacing.lg: 16`. The captured product surfaces expose repeated 4px, 8px, 10px, and 16px spacing values. They form the conservative observed spacing set in frontmatter. `tokens.spacing.xs: 4` is not `tokens.rounded.badge: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.input: 8`. `tokens.spacing.md: 10` is not the content-tab padding `10px 16px`. `tokens.spacing.lg: 16` is not the 16px type size and is not the 16px side of that tab padding. Reading those repeated 4/8/10/16 values as the conservative observed spacing set, and keeping those key paths unmerged, is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `tokens.rounded.badge: 4` · `tokens.rounded.input: 8` · `tokens.rounded.pill: 32` · `tokens.rounded.full: 999`.

Product evidence includes 4px badge wrappers, 8px course-card/input shells, 32px GNB actions, and `999px`/`9999px` pill controls. These are distinct observed shapes, not a mandate to round unrelated interfaces.

- Badge wrappers: 4px — `tokens.rounded.badge: 4`
- Course-card / input shells: 8px — `tokens.rounded.input: 8`
- GNB navigation actions: 32px — `tokens.rounded.pill: 32`
- Search-submit pill: `999px` — `tokens.rounded.full: 999`
- Content-tab pill: `9999px` — a component radius, not `tokens.rounded.full`

`tokens.rounded.full: 999` stays the unitless full step. The content-tab `9999px` stays on that component. They are not the same key. `tokens.rounded.badge: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.input: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.pill: 32` is the GNB-action radius step. Keeping those paths unmerged, and treating the 4px / 8px / 32px / `999px` / `9999px` set as distinct observed shapes rather than a mandate to round unrelated interfaces, is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Elevation

The selector-backed GNB controls, search submit, course article, and dialog backdrop have `box-shadow: none`. Token-set path `tokens.shadow.flat` is `none`. A separate course-catalog control has a local shadow observation, but the bundle does not establish a reusable elevation scale. Keeping that local observation off a reusable scale is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Motion

No duration, easing curve, card-scale, skeleton animation, page transition, or reduced-motion rule was captured in the supplied product evidence. The first-party GNB article discusses a shift from reflow-based scroll motion to composite-based scroll motion for the shared header, but it does not supply reusable animation tokens. No motion token is therefore promoted. Promoting no motion token from that captured absence is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

An exact curve or duration may be promoted for a component only after that component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The official company introduction and the Inflab engineering articles describe the service and its GNB, but do not publish a universal current typography token. Classing those pages as narrative and infrastructure context rather than a type specimen is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification. |
| Live product computed use | `Pretendard` is the sole promoted UI family. It has 1,278 visible computed uses across the home and course catalog, and the supplied collector reports a loaded FontFaceSet match with high confidence. The artifact supplies no font-file URL for that loaded face, so the web-source location remains unresolved rather than invented. |
| System fallbacks | `sans-serif` is a high-confidence system resolution in 153 observed product elements; `Arial` and `Roboto` each occur once in the full bundle. They remain system evidence, not Inflearn brand families. |
| Declared-only assets | Fira Code, Font Awesome 6 Pro, KaTeX faces, and Source Serif 4 have zero visible use in this capture. Fira Code, Font Awesome, and Source Serif 4 include declared source URLs; the KaTeX declarations do not. None are promoted to UI tokens or rendered as substitutes. Leaving those declared-only faces unpromoted is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification. |
| Official distribution and licence boundary | Pretendard’s upstream README documents static and variable webfont distribution, while its upstream project publishes the font software under SIL Open Font License 1.1. These identify the asset and licence only; the product-use claim comes from computed use plus the loaded FontFaceSet observation. Classing the upstream README and LICENSE as asset-and-licence identification rather than a product-use token is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification. |
| Outside these captures | Typography on login, course-detail, cart, payment, and learning-room flows stays outside the two product captures the source treated as observed. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Pretendard`. Token-set path `tokens.typography.family.ui` is `Pretendard`.
- The artifact supplies no font-file URL for that loaded face; the web-source location remains unresolved rather than invented.
- Do not replace unavailable or unobserved brand type with a system fallback, and do not present `sans-serif`, `Arial`, or `Roboto` as Inflearn brand families. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| Product body | Pretendard | 16px | 400 | 1.50 | Repeated product-home and course-catalog text/card sample |
| Product control | Pretendard | 16px | 400 | 1.00 | Product GNB and control sample |
| Course badge | Pretendard | 11 | 700 | 1.64 | Course badge wrapper on product home and catalog |

Line heights are unitless ratios in the source token set (`1.50`, `1.00`, `1.64`) and stay ratios here. They are never converted to a replacement px. Token-set paths: `tokens.typography.product-body` · `tokens.typography.product-control` · `tokens.typography.course-badge`. YAML sizes are unitless: `tokens.typography.product-body.size: 16` · `tokens.typography.product-control.size: 16` · `tokens.typography.course-badge.size: 11`. The table Size column writes those steps with a px suffix, the same convention the source body already uses for the 16-size control and card fonts. The GNB navigation action records `16px / 600 Pretendard` on the component, not as a fourth type-role key. The selected content tab records `14px / 700 system sans-serif` on the component. Keeping those unitless line-height ratios as ratios, and keeping those component fonts off extra type-role keys, is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

### Assets

- Logo pointer recorded by the source: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=inflearn.com&sz=256`. That slug is an identity pointer through a third-party favicon service, not an Inflearn-hosted brand file URL.
- The product surfaces include course articles and standard controls, but the supplied evidence does not identify a named icon library, SVG stroke rule, image aspect-ratio contract, or universal thumbnail treatment. Course imagery and any inline icon implementation remain route content rather than promoted system tokens.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading course imagery as route content rather than a promoted token, is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Observed interaction states

The source’s state contract, preserved with its values. The catalog graph is not adopted, so this body is kept here rather than delegated.

| State | Selector-backed observation | Boundary |
|---|---|---|
| Hover | GNB search submit changes to `#00A760`; GNB action has `rgba(241,243,245,0.65)` background. | Only the listed selectors are promoted. |
| Selected | Product content tab has `#25262B` background, white 14px/700 text, and full pill radius. | Product-home tab only. |
| Menu open | Collector expanded a product menu; a 14px Pretendard option at 8px radius and `10px 12px` padding was recorded. | No general menu token is inferred. |
| Dialog open | Collector recorded a `rgba(0,0,0,0.6)` product backdrop. | No dialog-panel, validation, or checkout state is inferred. |
| Disabled | Home selector records a neutral 32px button; catalog selector records a different 8px control. | Keep them selector-local; do not create a universal token. |

The home capture includes one disabled button with `#F1F3F5` background, `#ADB5BD` text, a `#DEE2E6` border, and 32px radius. It is a selector-specific observation, not a universal disabled-state token because the catalog’s disabled sample differs. The captured search-submit is white text on `#00C471`; the source records its observed hover background as `#00A760`. The captured dialog backdrop is `rgba(0, 0, 0, 0.6)`. The bundle confirms that a dialog-open state exists but does not provide a general dialog-panel accessibility specification. No accessibility conformance, focus-visible outline, keyboard order, error message, loading, empty, success, or responsive behavior is claimed beyond the recorded interaction states. The supplied bundle records menu, dialog, and tab interactions (nine interaction expansions in total). Only the selectors and states listed above are reusable claims. No checkout, payment, error, toast, skeleton, course-card-hover, or responsive variant is inferred. Keeping the home disabled sample selector-local, withholding a general dialog-panel accessibility specification, treating only the listed selectors and states as reusable claims, and inferring no general menu token, are derived editorial implementation inferences from the verified surfaces; they are not Inflearn-authored or a separately published UI specification.

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `tab`, `dialog`) and a value set; those types are preserved per component. Applicability below is judged by each control’s role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control’s role makes the state meaningless — a destination navigation action that commits no operation in place, a tab that only selects, or a backdrop that reports no operation — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Inflearn-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Product GNB search submit

- Role: Product GNB search-submit
- Primitive type: `button` · Kind: interactive
- Background: `#00c471` / `#00C471`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `999px`
- Font: `16px / 400 Pretendard`
- Token-set font record: `16px / 400 Pretendard`
- Token-set states: `hover observed: #00a760`
- Hover: background `#00A760` / `#00a760`
- Token-set use: `Product GNB search submit; home::[data-omd-capture=8]`
- Use: Product GNB search-submit; `home::[data-omd-capture="8"]`. Hover provenance is `home::[data-omd-capture="8"]::state-hover` and is also present on the catalog surface.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Observed `#00A760` on this control |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A search submit whose availability can lapse; visual treatment omitted |
| loading | applicable | The control commits a search; in-progress treatment at this control is omitted |
| error | applicable | The control can commit a search; failure treatment at this control is omitted |
| success | not-applicable | Search results appear on the catalogue surface; this control does not report completion on itself |

### Product GNB navigation action

- Role: Product GNB navigation action
- Primitive type: `button` · Kind: interactive
- Background: `#f8f9fa` / `#F8F9FA`
- Text: `#495057`
- Radius: `32px`
- Padding: `0px 22px`
- Font: `16px / 600 Pretendard`
- Token-set font record: `16px / 600 Pretendard`
- Token-set states: `hover observed: rgba(241,243,245,0.65)`
- Hover: background `rgba(241, 243, 245, 0.65)`
- Token-set use: `Product GNB navigation action; home::[data-omd-capture=12]`
- Use: Product GNB navigation action; `home::[data-omd-capture="12"]`. The observed hover selector is `home::[data-omd-capture="12"]::state-hover`. Product navigation actions are route-level controls, not evidence for a universal page container or an application-wide 65px header rule.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Observed `rgba(241, 243, 245, 0.65)` on this control |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a GNB navigation action; it does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination navigation; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a GNB destination is not an operation this control reports as success |

### Product course card

- Role: Product course article shell
- Primitive type: `card`
- Radius: `8px`
- Padding: `0px`
- Font: `16px / 400 Pretendard`
- Token-set font record: `16px / 400 Pretendard`
- Shadow: none
- Token-set states: `default only; no card interaction state captured`
- Token-set use: `Product course article shell; home::article`
- Use: Product course article shell on home and course catalog; `home::article` and `surface-2::article`.

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Product content tab

- Role: Product-home selected content tab
- Primitive type: `tab` · Kind: interactive
- Background: `#25262b` / `#25262B`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `14px / 700 system sans-serif`
- Token-set font record: `14px / 700 system sans-serif`
- Token-set states: `selected observed`
- Token-set use: `Product-home selected content tab; home::[data-omd-capture=19]`
- Use: Selected product-home content tab; `home::[data-omd-capture="19"]` and interaction capture `home::[data-omd-interaction-capture="tab-3-3"]`.

**Hover**
- Background: `#F8F9FA`
- Text: `#212529`
- Radius: `9999px`
- Padding: `10px 16px`
- Font: `14px / 400 system sans-serif`
- Use: Product-home content-tab hover sample; `home::[data-omd-capture="20"]::state-hover`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Selected treatment above; hover variant recorded separately |
| hover | applicable | Observed `#F8F9FA` / `#212529` on this control |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a content tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A tab that only selects; it does not report a failed operation on itself |
| success | not-applicable | Same role reason: selecting a tab is not an operation with a success result |

### Product dialog overlay

- Role: Product dialog backdrop
- Primitive type: `dialog` · Kind: interactive
- Background: `rgba(0,0,0,0.6)` / `rgba(0, 0, 0, 0.6)`
- Font: `16px / 400 Pretendard`
- Token-set font record: `16px / 400 Pretendard`
- Token-set states: `dialog-open observed`
- Token-set use: `Product dialog backdrop; home::[data-omd-interaction-capture=dialog-2-8]`
- Use: Dialog backdrop expanded by the collector on home and catalog; `home::[data-omd-interaction-capture="dialog-2-8"]`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Dialog-open treatment above |
| hover | applicable | Pointer-web overlay; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable overlay; visual treatment omitted |
| disabled | not-applicable | A backdrop is not a gated control |
| loading | not-applicable | The backdrop reports no in-place operation |
| error | not-applicable | No dialog-panel, validation, or checkout state is inferred |
| success | not-applicable | Same role reason: the backdrop does not confirm completion |

The menu-open option (14px Pretendard, 8px radius, `10px 12px` padding) is retained in the state table above. It is not in the token set. No general menu token is inferred.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured product surfaces expose repeated 4px, 8px, 10px, and 16px spacing values. Spacing restated from `tokens.spacing`: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.md: 10` · `tokens.spacing.lg: 16`. Shape restated from `tokens.rounded`: `tokens.rounded.badge: 4` · `tokens.rounded.input: 8` · `tokens.rounded.pill: 32` · `tokens.rounded.full: 999`. The product home and catalog both include course `article` shells at 8px radius with zero padding and no shadow. The capture does not establish a universal course-grid column count, image ratio, responsive breakpoint, course-detail layout, or checkout layout. Product navigation actions are route-level controls, not evidence for a universal page container or an application-wide 65px header rule.

Reading those restated steps as the conservative observed spacing and shape set, and keeping the 65px header rule unpromoted, is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Inflab’s official company page frames the service around career learning, knowledge sharing, fair access to growth opportunities, transparent course/review information, and content rather than inflated marketing. Treat this as brand context: it supports clear, learner-respecting copy but does not establish fictional UI slogans, exact CTA wording, or a product-wide Korean grammatical style guide.

The first-party company introduction addresses people who build careers and dreams, describes expert knowledge sharing, and frames Inflearn as a career-learning platform. It also explicitly values transparent course information, opportunities to learn despite cost or time constraints, and good content over inflated marketing. Together those statements support a grounded, learner-respecting brand voice: clarity about what is being learned and who is sharing the knowledge is more defensible than pressure or spectacle.

They are not a published UI copy manual. The product capture confirms controls and course content but does not prove an exact CTA vocabulary, a required Korean sentence ending, a particular error-message formulation, or a campaign-copy rule. Preserve the company’s stated commitments as context and leave specific product strings unclaimed unless a product surface directly supplies them.

The “grounded, learner-respecting” reading, the judgment that clarity is more defensible than pressure or spectacle, treating the company page as brand context rather than a published UI copy manual, and the judgment that it does not establish fictional UI slogans, exact CTA wording, or a product-wide Korean grammatical style guide, are a derived editorial implementation inference from the verified surfaces; they are not Inflearn-authored or a separately published UI specification. The company-stated commitments themselves are the source’s recorded strings.

Published strings, kept byte-exact:

- 인프런
- Inflearn
- Inflab
- career-learning platform
- learn and share knowledge without economic or time constraints
- learn and share knowledge without being prevented by economic or time constraints
- people who build careers and dreams
- people who pursue work and dreams
- learners seeking career development
- experts who share knowledge
- courses, challenges, mentoring, clips, and community
- learner counts and course evaluations without selection or manipulation
- content rather than inflated marketing
- good content over inflated marketing
- Pretendard
- SIL Open Font License 1.1

Reproduce 인프런 byte-exact rather than translating or re-casing it. An English gloss may sit beside it; it never replaces it.

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

These are named values the source itself left open, not permissions to invent. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not Inflearn-authored or a separately published UI specification.

- **Pretendard web-source URL.** The artifact supplies no font-file URL; the location remains unresolved.
- **Universal course-grid, image ratio, responsive breakpoint, course-detail layout, and checkout layout.** The capture does not establish them.
- **Reusable elevation scale.** A local course-catalog shadow observation is not a scale.
- **Exact CTA wording, Korean sentence ending, error-message formulation, and campaign-copy rule.** The company narrative is context, not a UI copy manual.
- **Focus-visible outline, keyboard order, error message, loading, empty, success, and responsive behavior** beyond the recorded interaction states.
- **Dialog-panel accessibility specification.** Dialog-open exists; a general panel contract does not.
- **Universal disabled-state token.** Home and catalog disabled samples differ; they stay selector-local.
- **Motion duration, easing, animation name, transition properties, and reduced-motion behavior.** No motion token is promoted. Promote a motion value for a component only after that component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
