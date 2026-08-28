# Kmong Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kmong (크몽) is a Korean expert-services marketplace. This contract covers the two first-party public marketplace surfaces the source inspected for tokens on 2026-07-13: the home at `https://kmong.com/` and the category route at `https://kmong.com/category/1`. The official company site at `https://company.kmong.com/` is a named source for service, escrow, company-payment, and 2025 logo-rebrand narrative; it does not supply the computed marketplace tokens below. Every value stays attached to the surface that established it. Reading those two inspected marketplace URLs as this contract's token surfaces, keeping the company URL as a named narrative source that does not supply computed interface tokens, and treating values as attached to the surface that established them, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

The source records the public marketplace as deliberately direct: white space, dark `#212224` headings (token-set `tokens.colors.heading`), a large searchable entry point, and a lime `#92FA72` / `#92fa72` action (token-set `tokens.colors.primary`) that stands apart from a compact dark header action (`#212224` / `#ffffff`, token-set `tokens.colors.header-action` / `tokens.colors.on-header-action`). The public home lets people find and commission specialists. The official company site describes an escrow-protected transaction model and company-oriented services such as corporate-card payment and tax-invoice issuance. The hex values, the searchable entry, the lime/dark pair, the escrow-protected model, and the company-oriented payment and document services are the source's own. The characterizations built on them — a deliberately direct public marketplace; a lime action that stands apart; a living marketplace identity rather than an inherited generic green UI — are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Kmong's official company site presents the service as an expert platform where a request can be made by chat and protected through escrow payment, with distinct support for company transactions such as corporate cards and tax invoices. Its public home exposes the marketplace side of that proposition: specialist listings, reviews, and a search-led path into discovery. The company site also publishes a 2025 logo-rebrand item, indicating an actively maintained visual identity. These facts establish the product and its current public expression; no unobserved seller, contract, or post-purchase experience is inferred here. The chat-and-escrow request model, corporate-card payment, tax-invoice issuance, specialist listings and reviews, the search-led discovery path, the 2025 logo-rebrand item, and that closing sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that expert-platform narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification. They do not come from the source's stakeholder-group section.

- Find and commission specialists on `https://kmong.com/`.
- Search the public marketplace through the home search shell on `https://kmong.com/`.
- Browse specialist listings and category filters on `https://kmong.com/category/1`.
<!-- design-md:claim-end -->

### Audience

No named individuals appear. The source labels its groups as source-grounded groups, not fictional personas, and records three groups at that level: Clients commissioning expert work; Experts offering services; Companies commissioning external work. The public marketplace exposes specialist listings, reviews, and search-led discovery for the first group. The marketplace model depends on expert service listings; no seller-console UI is claimed from this public capture. The official company site identifies corporate transaction support, including corporate-card payment and tax-invoice issuance; this is business context, not a captured enterprise product UI. Reading those source-named groups as this product's audience, and keeping the source's own "not fictional personas" label rather than inventing biographies, is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

- White canvas (`#ffffff` / `#FFFFFF`) with dark `#212224` headings and `#000000` body text
- Lime `#92FA72` / `#92fa72` home primary CTA kept off the compact dark `#212224` header action
- Pretendard as the sole `tokens.typography.family.ui` family — 1,444 visible uses, 18 Kmong CloudFront font-source URLs
- Route-local search geometry: 36px / 64px home search versus 24px / 50px category search
- Two recorded search-shell shadows, and no general card / popover / modal elevation ladder
- Declared-only `slick` (four hosted source files, zero visible uses) is not a UI-family token
- Zero interaction records; no hover, pressed, focus, disabled, menu, dialog, validation, or responsive variant is claimed

### Principles

These three items are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Start with expert discovery.** The large public search field is the most explicit route into the marketplace. *UI implication:* keep a verified search treatment route-local rather than inventing a global command surface.
2. **Make the next action legible.** The public home's lime CTA contrasts with the dark header action. *UI implication:* preserve their separate size, colour, and radius values.
3. **Keep transaction trust concrete.** Escrow protection and company-payment support come from official company context. *UI implication:* do not fabricate trust badges, validation states, or checkout affordances from that narrative alone.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

- Keep the observed home primary CTA distinct: `#92FA72` with `#212224` text.
- Use Pretendard only when reproducing the verified public-marketplace specimen.
- Preserve the route distinction between the 36px home search and 24px category search.
- Treat the dark 36px header action and lime 52px home CTA as separate observed variants.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

- Do not turn the lime home CTA into an unsupported universal action token.
- Do not reuse `slick` or substitute it for Pretendard; its visible product use was not observed.
- Do not infer hover, focus, disabled, error, modal, or responsive styles from utility class names.
- Do not apply the category panel or filters to marketing, support, or signed-in flows without evidence.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping YAML lowercase and §2 uppercase writings of the same hex as two records of one key, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-header-action` `#ffffff`, keeping `tokens.colors.heading` `#212224` off `tokens.colors.on-primary` `#212224` and off `tokens.colors.header-action` `#212224`, keeping `tokens.colors.control-border` `#c8cad2` off `tokens.colors.category-border` `#e4e5ed`, attaching every role to the surface the source recorded rather than relabeling a home value as a house palette for every Kmong surface, and keeping the YAML token note as the facts it names — selector-backed values only; home and category observations route-local; no logged-in, checkout, support-doc, or interaction state inferred — are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Home and shared marketplace

- **Canvas** (`#ffffff` / `#FFFFFF`): observed public home/category canvas, search shell, and outlined controls. Token-set path `tokens.colors.canvas`.
- **Ink** (`#000000`): frequent body and card text in the supplied public capture. Token-set path `tokens.colors.ink`.
- **Heading** (`#212224`): heading, search-input, and dark header-action colour. Token-set path `tokens.colors.heading`.
- **Muted** (`#555969`): observed muted public-marketplace text. Token-set path `tokens.colors.muted`.
- **Hairline** (`#f2f3f7` / `#F2F3F7`): repeatedly observed hairline/border colour. Token-set path `tokens.colors.hairline`.
- **Control border** (`#c8cad2` / `#C8CAD2`): home search and outlined-CTA border. Token-set path `tokens.colors.control-border`.
- **Primary** (`#92fa72` / `#92FA72`): observed home primary-CTA background; it is not assumed to be every primary action on every route. Token-set path `tokens.colors.primary`.
- **On-primary** (`#212224`): text on the lime home primary CTA. Token-set path `tokens.colors.on-primary`.
- **Header action** (`#212224`): dark header-action background. Token-set path `tokens.colors.header-action`.
- **On-header-action** (`#ffffff` / `#FFFFFF`): text on the dark header action. Token-set path `tokens.colors.on-header-action`.

Category route

- **Category surface** (`#fafafc` / `#FAFAFC`): observed category-page panel surface only. Token-set path `tokens.colors.category-surface`.
- **Category border** (`#e4e5ed` / `#E4E5ED`): category filter-control border. Token-set path `tokens.colors.category-border`.

`tokens.colors.canvas` and `tokens.colors.on-header-action` both write `#ffffff`. They stay two keys. `tokens.colors.heading`, `tokens.colors.on-primary`, and `tokens.colors.header-action` all write `#212224`. They stay three keys. `tokens.colors.control-border` `#c8cad2` is not `tokens.colors.category-border` `#e4e5ed`. `tokens.colors.category-surface` stays on the category-page panel.

The YAML token note, kept as the facts it names: only selector-backed values from the supplied public marketplace capture are tokens. Home and category observations remain route-local; no logged-in, checkout, support-doc, or interaction state is inferred.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them): `xxs: 2` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 32`.

`tokens.spacing.sm: 8` is not `tokens.rounded.control: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.category-panel: 12` and is not the `12px` in the category-filter padding `0px 12px`. `tokens.spacing.base: 16` is not `tokens.typography.marketplace-body.size` `16` and is not the `16px` in the home-CTA font. `tokens.spacing.lg: 20` is not the header-action §3 line height `20px` and is not the search type-role size `20`. `tokens.spacing.xl: 24` is not `tokens.rounded.category-search: 24`, is not the `24px` in the home-CTA padding `0px 24px`, and is not the `24px` in the category-panel padding `32px 24px`. `tokens.spacing.xxl: 32` is not the `32px` in that same panel padding. Keeping those unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those writings of `2`, `8`, `12`, `16`, `20`, `24`, and `32` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `square: 0` · `primary-cta: 4` · `control: 8` · `category-panel: 12` · `home-search: 36` · `category-search: 24`.

The source's named radius uses, kept on their own rows:

- Square (`0`): token-set key `tokens.rounded.square`.
- Primary CTA (`4` / `4px`): home primary CTA. Token-set key `tokens.rounded.primary-cta`. YAML `home-primary-cta.radius` is `4px`.
- Control (`8` / `8px`): header action, home outlined CTA, and category filter control. Token-set key `tokens.rounded.control`.
- Category panel (`12` / `12px`): category-page panel. Token-set key `tokens.rounded.category-panel`.
- Home search (`36` / `36px`): public home search shell. Token-set key `tokens.rounded.home-search`. This `36` is not the header-action height `36px` and is not the category-filter height `36px`.
- Category search (`24` / `24px`): public category-search shell. Token-set key `tokens.rounded.category-search`. This `24` is not `tokens.spacing.xl: 24`.

`tokens.rounded.home-search: 36` stays the home-search radius step. `tokens.rounded.category-search: 24` stays the category-search radius step. Neither was chosen over the other as a replacement. Keeping `0`, `4`, `8`, `12`, `36`, and `24` as six keys, and keeping those component heights off the rounded map, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

### Elevation

| Shell | Treatment | Surface |
|---|---|---|
| Home search | `rgba(0,0,0,0.1) 0px 0px 20px 0px` | Public home. Token-set path `tokens.shadow.home-search`. |
| Category search | `rgba(0,0,0,0.06) 0px 0px 8px 0px` | Public category route. Token-set path `tokens.shadow.category-search`. |

No general card, popover, modal, or hover-elevation ladder is claimed. The two shadows and that no-general-ladder sentence are the source's own. Reading those two route-local shells as the only elevation records, rather than as a depth scale for every Kmong surface, is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

### Motion

No reusable duration, easing, or motion rule is recorded. Public utility class names and static elements do not establish a motion contract without interaction provenance. The source names no duration token and no easing role. An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and keeping the source's "no reusable duration, easing, or motion rule" sentence, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live product computed use | `Pretendard` has 1,444 visible uses across the supplied home and category capture, with a high-confidence loaded FontFace match and 18 Kmong CloudFront font-source URLs. It is the sole `tokens.typography.family.ui` family. |
| Official font asset and licence | The upstream Pretendard project documents distribution and its SIL Open Font License 1.1. This establishes the upstream licence boundary; it does not independently establish Kmong product use. |
| Declared-only | `slick` has four Kmong-hosted declared source files but zero visible uses in the bundle. It is not a UI-family token and must not be substituted. |
| Unresolved class | No separate official Kmong typeface or additional browser-loaded family was established from the supplied public routes. |

Reading those four evidence-class rows as the source's own resolution table rather than as a published Kmong type specimen, and keeping the official-licence row from independently establishing product use, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard`
- **Token-set path:** `tokens.typography.family.ui`
- Do not replace unavailable or unobserved brand type with Pretendard. It is canonical here only because computed visible use and loaded FontFace/source evidence agree. Do not reuse `slick` or substitute it for Pretendard.

Keeping Pretendard as the sole UI-family token on the two captured marketplace routes, treating it as canonical here only because computed visible use and loaded FontFace/source evidence agree, refusing to replace an unavailable or unobserved brand type with it, and refusing `slick` as a substitute, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

### Type roles

YAML writes unitless line heights. Source §3 writes the same roles with px line heights and a surface-boundary column. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 surface-boundary column beside them, and keeping `tokens.typography.hero.size` `40`, `tokens.typography.search.size` `20`, `tokens.typography.marketplace-body.size` `16`, and `tokens.typography.header-action.size` `14` off spacing and radius steps, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use | Surface boundary |
|---|---|---:|---:|---|---|---|
| Home headline | Pretendard | 40 | 700 | 1.30 / 52px | Public home headline | Home only |
| Home search input | Pretendard | 20 | 400 | 1.40 / 28px | Public home search input | Home only |
| Category heading sample | Pretendard | 36 | 700 | 1.22 / 44px | Public category-page heading sample | Category route only |
| Repeated body/card/list sample | Pretendard | 16 | 400 | 1.50 / 24px | Repeated public marketplace body, card, and list sample | Home and category routes |
| Header action | Pretendard | 14 | 500 | 1.43 / 20px | Public home/category header action | Public marketplace header |

Token-set paths: `tokens.typography.hero` · `tokens.typography.search` · `tokens.typography.category-heading` · `tokens.typography.marketplace-body` · `tokens.typography.header-action`. `tokens.typography.hero.size` `40` is not a spacing step. `tokens.typography.search.size` `20` is not `tokens.spacing.lg: 20`. `tokens.typography.marketplace-body.size` `16` is not `tokens.spacing.base: 16`. `tokens.typography.header-action.size` `14` is not a radius.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=kmong.com&sz=128`. Frontmatter records `logo.type: favicon`.
- Upstream Pretendard licence: SIL Open Font License 1.1 at `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. This describes the font asset, not a Kmong brand asset.
- Declared-only `slick` stays declared-only.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Kmong-hosted brand file, and reading the Pretendard licence as an upstream font-asset boundary rather than a Kmong brand asset, are derived editorial implementation inferences from the verified surfaces; they are not Kmong-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full: no reusable empty, loading, error, success, disabled, validation, or skeleton treatment is recorded. The bundle has zero interaction records, so state design is intentionally omitted rather than synthesized. The supplied bundle reports zero interaction records. No hover, pressed, focus, disabled, menu, dialog, validation, or responsive variants are claimed from class names or static samples.

The older universal 4px input/card rule, 76px header, card-shadow system, Biz/Best/promo badge variants, generic gig-card treatment, and all reusable interaction/state/motion assertions were rolled back: they are not established by the supplied 2026 multi-surface capture.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the kind-omission on the category panel, the refusal to treat this as a complete state-coverage claim, attaching a `Primitive type` line only when the source YAML records that type on that component, and refusing a §4-only component outside the six token-set records are a derived editorial implementation inference from the verified surfaces; they are not Kmong-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The six token-set records are `home-primary-cta`, `header-action`, `home-search`, `home-outline-cta`, `category-filter-control`, and `category-panel`. There is no §4-only component outside that set.

### Home primary CTA

- Role: public home CTA on `https://kmong.com/`
- Primitive type: `button` · Kind: interactive
- Background: `#92fa72` / `#92FA72`
- Text: `#212224`
- Radius: `4px`
- Padding: `0px 24px` / `0 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Token-set use: Public home CTA, selector home::[data-omd-capture=143]
- §4 Use: Public home CTA; `home::[data-omd-capture="143"]`.
- Token-set path: `tokens.components.home-primary-cta` (`type`, `bg`, `fg`, `radius`, `padding`, `height`, `font`, `states`, `use`)
- Token-set states: default only; no interaction state captured
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public home |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The public home CTA opens a destination into expert discovery; it commits no operation in place |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Header action

- Role: public marketplace header action on `https://kmong.com/`
- Primitive type: `button` · Kind: interactive
- Background: `#212224`
- Text: `#ffffff` / `#FFFFFF`
- Radius: `8px`
- Height: `36px`
- Font: `14px / 500 Pretendard`
- Token-set use: Public marketplace header action, selector home::[data-omd-capture=6]
- §4 Use: Public marketplace header action; `home::[data-omd-capture="6"]`.
- Token-set path: `tokens.components.header-action` (`type`, `bg`, `fg`, `radius`, `height`, `font`, `states`, `use`)
- Token-set states: default only; no interaction state captured
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public marketplace header |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | A header action opens a destination; it commits no operation in place |
| error | not-applicable | A header action does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Home search

- Role: public home search shell/input on `https://kmong.com/`
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #c8cad2` / `1px solid #C8CAD2`
- Radius: `36px`
- Padding: `0px 32px`
- Height: `64px`
- Font: `20px / 400 Pretendard`
- Token-set use: Public home search shell/input, selectors home::form and home::[data-omd-capture=7]
- §4 Use: Public home search shell/input; `home::form` and `home::[data-omd-capture="7"]`.
- Token-set path: `tokens.components.home-search` (`type`, `bg`, `fg`, `border`, `radius`, `padding`, `height`, `font`, `states`, `use`)
- Token-set states: default only; no interaction state captured
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public home |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted |
| success | not-applicable | The field does not complete a search on itself |

### Home outlined CTA

- Role: public home outlined CTA on `https://kmong.com/`
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #c8cad2` / `1px solid #C8CAD2`
- Radius: `8px`
- Padding: `0px 24px` / `0 24px`
- Height: `52px`
- Font: `16px / 500 Pretendard`
- Token-set use: Public home outlined CTA, selector home::[data-omd-capture=145]
- §4 Use: Public home outlined CTA; `home::[data-omd-capture="145"]`.
- Token-set path: `tokens.components.home-outline-cta` (`type`, `bg`, `fg`, `border`, `radius`, `padding`, `height`, `font`, `states`, `use`)
- Token-set states: default only; no interaction state captured
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public home |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The outlined home CTA opens a destination; it commits no operation in place |
| error | not-applicable | A destination CTA does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this button reports as success |

### Category filter control

- Role: public category filter control on `https://kmong.com/category/1`
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff` / `#FFFFFF`
- Text: `#212224`
- Border: `1px solid #e4e5ed` / `1px solid #E4E5ED`
- Radius: `8px`
- Padding: `0px 12px` / `0 12px`
- Height: `36px`
- Font: `14px / 400 Pretendard`
- Token-set use: Public category filter control, selector surface-3::[data-omd-capture=93]
- §4 Use: Public category filter control; `surface-3::[data-omd-capture="93"]`.
- Token-set path: `tokens.components.category-filter-control` (`type`, `bg`, `fg`, `border`, `radius`, `padding`, `height`, `font`, `states`, `use`)
- Token-set states: default only; no interaction state captured
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public category route |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | A filter control selects a facet; it commits no operation in place |
| error | not-applicable | A filter control does not report a failed request on itself |
| success | not-applicable | Selecting a facet is not an operation this control reports as success |

### Category panel

- Role: public category-page panel on `https://kmong.com/category/1`
- Primitive type: `card`
- Background: `#fafafc` / `#FAFAFC`
- Radius: `12px`
- Padding: `32px 24px`
- Font: `16px / 400 Pretendard`
- Token-set use: Public category-page panel, selector surface-3::article
- §4 Use: Public category-page panel; `surface-3::article`.
- Token-set path: `tokens.components.category-panel` (`type`, `bg`, `radius`, `padding`, `font`, `use`)
- Observed: default only

The source supplies no interaction evidence for this panel, so kind and a state-applicability map are both withheld. Withholding kind and a map because the source supplies no interaction evidence is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture covers public 1440×900 home and category routes. It establishes a 628px × 64px home-search shell and a 500px × 50px category-search shell, not a breakpoint system. The public category page includes a 1,168px × 184px `#FAFAFC` / `#fafafc` panel with `32px 24px` padding. It is a route-local observation, not a universal card layout. No mobile, signed-in, checkout, seller, help-centre, or documentation-chrome route was supplied as product evidence. Their layout contracts are intentionally absent.

Only desktop-sized public capture evidence was supplied. No breakpoint, touch-target, mobile navigation, or image-ratio rule is recorded.

The 1440×900 home and category routes, the 628px × 64px home-search shell, the 500px × 50px category-search shell, and the 1,168px × 184px category panel stay on the surfaces that established them. Reading those figures under the source's own "not a breakpoint system" and "route-local observation, not a universal card layout" sentences is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official homepage frames the service around finding capable experts and protecting a transaction until work is received; the company site presents the same marketplace as a place where individuals and companies can commission work with practical payment and document support. The observable public tone is therefore direct, reassuring, and task-oriented. This is source-grounded service framing, not a claim that every internal or support message uses one fixed voice. The homepage framing, the company-site payment and document support, and the source's own "not a claim that every internal or support message uses one fixed voice" limit are the source's own. Calling the observable public tone direct, reassuring, and task-oriented is the source's own "therefore" reading; classifying that reading as source-grounded service framing rather than as a complete product-microcopy guide is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unresolved. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Kmong-authored or a separately published UI specification.

- hover, pressed, focus, disabled, menu, dialog, validation, and responsive visual treatments
- reusable empty, loading, error, success, disabled, validation, and skeleton treatments
- reusable duration, easing, and motion values
- breakpoint, touch-target, mobile navigation, and image-ratio rules
- signed-in, checkout, seller, help-centre, and documentation-chrome layout contracts
- getdesign.md / styles.refero.design records (the source names both lookups as no usable record)
