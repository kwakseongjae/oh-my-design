# Olive Young Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Olive Young (올리브영) is the CJ retail platform that grew from Korea’s first Beauty & Health store into an omnichannel beauty-and-wellness business. Catalog homepage identity is `https://www.oliveyoung.co.kr`. This contract covers two first-party public surfaces the source inspected on 2026-07-13: the public shopping storefront at `https://www.oliveyoung.co.kr/store/main/main.do?oy=0` (`storefront-home`) and the public corporate surface at `https://corp.oliveyoung.com/ko` (`corporate-home`). Official Brand Resources `https://corp.oliveyoung.com/en/company/brand`, official history `https://corp.oliveyoung.com/en/company/history`, official mission `https://corp.oliveyoung.com/en/company/main`, and official vision `https://corp.oliveyoung.com/en/company/vision` are named sources for identity, history, and language; they do not supply the computed interface tokens below. These are not one interchangeable UI system: corporate identity context must not be used to fill gaps in the storefront, and the storefront capture does not establish an authenticated app, checkout, mobile, or documentation system. Treating those two inspected URLs as this contract's token surfaces, keeping Brand Resources, history, mission, and vision as named context that does not supply computed interface tokens, and keeping the source's own bound that the two surfaces are not one interchangeable UI system, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

The supplied 2026 capture shows that this story is expressed very differently by two owned surfaces. The shopping storefront is an information-dense, white and charcoal retail interface dominated by `#666666` body copy, a loaded Montserrat web family, square product controls, and a compact 24px current-page marker. The corporate site is a separate brand-and-company presentation with loaded CJONLYONENew and the observed `#82dc28` brand green. Storefront evidence: a white canvas, low-radius controls, black-to-gray text hierarchy, and carousel/product-grid mechanics on the public home page. Corporate evidence: the green aligns with the official brand-resources description of Olive Green, while corporate typography resolves to CJONLYONENew. Current brand evolution: Olive Young’s official 2025 newsroom announcement says its renewed wordmark was designed for clearer visibility across online and offline global expansion; that is identity context, not a storefront component token. The hex values, family names, 24px marker, Olive Green name, and 2025 wordmark announcement are the source's own. Readings of the storefront as an information-dense white and charcoal retail interface, of black-to-gray as a text hierarchy, and of the 2025 wordmark announcement as identity context rather than as a storefront component token, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Olive Young’s official history places its beginning in 1999 as Korea’s first Beauty & Health store and describes a category shift from conventional supplement-led drugstores toward beauty, trend-led products, and locally tailored store designs and assortments. The company now presents itself as a lifestyle platform where customers encounter trends, not merely as a cosmetics shelf. Its official history records an independent official online store in 2017, same-day delivery in 2018, a 2019 BI renewal, and a 2025 logo renewal oriented toward global and omnichannel visibility. Its official history describes a move away from the traditional health-supplement drugstore model toward beauty, trend discovery, locally tailored assortments, stores, and digital services; its current mission is to help customers live healthier and more beautiful everyday lives. These are brand and business facts; they do not prove an unobserved application design system. The years, Beauty & Health origin, category shift, traditional health-supplement drugstore model, lifestyle-platform sentence, 2017 / 2018 / 2019 / 2025 milestones, the mission sentence, and that closing sentence are the source's own. Treating that origin-to-renewal narrative as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured storefront or corporate control or surface the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

- Scan product-grid `btn_zzim jeem` controls and carousel pagination on the public storefront-home at `https://www.oliveyoung.co.kr/store/main/main.do?oy=0`.
- Search the storefront-home via `header_search_input`.
- Read the public corporate surface at `https://corp.oliveyoung.com/ko`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The official sources describe customers generally rather than publishing research-backed personas. The source's derived stakeholder-group entries are dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. Official material names customers. Use that source wording only. Dropping those derived stakeholder-group entries rather than promoting them, carrying no affiliation classification or motivation, and using only that source wording, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

- Two owned surfaces: storefront-home and corporate-home
- Storefront: `#ffffff` canvas, `#666666` body, loaded Montserrat, square product controls, compact 24px current-page marker
- Corporate: `#82dc28` Olive Green, loaded CJONLYONENew
- Low-radius storefront controls: `tokens.rounded.outline-control` 4, `tokens.rounded.search-field` 5, `tokens.rounded.pagination-current` 12; wishlist shell `0px`
- `interactionCount: 0`; the selected/current carousel relationship is static markup observed in the capture, not an interaction transition contract
- Official 2025 renewed wordmark as identity context, not a storefront component token

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification. The numbered stems rest on official brand-essence, core-value, history, and 2025 logo-renewal sentences the source attributes to first-party pages. Every *UI implication* below is the source's own editorial reading.

1. **Healthy beauty joins beauty and wellbeing.** The official brand essence is Healthy Beauty. *UI implication:* frame choices as practical care or discovery, not as unsupported transformation claims.
2. **Discovery belongs in everyday life.** The official core value names New Discoveries Everyday. *UI implication:* make catalog information scannable enough to compare products and services without forcing a narrative detour.
3. **Omnichannel is a business context, not a copied UI pattern.** Olive Young’s history records online, store, pickup, returns, and same-day service milestones. *UI implication:* preserve service context where it is observed; do not invent cart or fulfilment controls from the corporate story alone.
4. **Global clarity is a current identity objective.** The 2025 official logo-renewal announcement cites visibility and English readability across online and offline environments. *UI implication:* distinguish identity assets from product-interface tokens and keep type/asset licensing explicit.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

- Keep storefront implementation claims bounded to the observed home surface and its measured black-to-gray hierarchy.
- Treat `#82dc28` as corporate brand evidence unless a storefront surface independently establishes that role.
- Preserve the source-domain boundary between Montserrat storefront use and CJONLYONENew corporate use.
- Keep current carousel pagination compact: the captured current item is `#2f3030` with white text and a 12px radius.
- Label declared-only families as unavailable rather than rendering another family under their names.

The source's Agent Prompt Guide also records this unique constraint, kept as written: a factual, dense Korean beauty-retail storefront moment: white ground, dark-gray reading hierarchy, square product-grid controls, Montserrat where the licensed/available target actually supplies it, and a compact dark current-page marker. For corporate storytelling, keep CJONLYONENew and Olive Green in the separate corporate lane. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

- Do not turn the corporate skip link, top button, or Swiper chrome into storefront component tokens.
- Do not infer cart, checkout, form-error, hover, focus, or motion behavior from this static, zero-interaction bundle.
- Do not promote OY Greta Sans, Pretendard, Noto Sans KR, or other zero-use declarations to the UI family.
- Do not use official logo colors as a storefront color system without a matching storefront observation.

The same Agent Prompt Guide records this unique prohibition, kept as written: Do not present a system fallback, declared-only face, logo color, or unobserved cart interaction as an Olive Young storefront fact. Keeping that prohibition here rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Pairing each hex to the token-set path named beside it, keeping YAML lowercase beside the body uppercase form where the source wrote both, keeping `tokens.colors.storefront-current` `#2f3030` unmerged from the current-item `#2F3030` component writing, keeping `tokens.colors.storefront-line` `#ebebeb` unmerged from the wishlist `#EBEBEB` component writing, keeping `tokens.colors.storefront-ink` as search-field text rather than a universal corporate text token, keeping `#82dc28` on the corporate-brand path rather than as a storefront role, and not adding Coral Orange `#ff7878` to `tokens.colors`, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Storefront canvas** (`#ffffff` / YAML `tokens.colors.storefront-canvas`): repeated page, button, and product-control surface on `storefront-home`.
- **Storefront ink** (`#131518` / YAML `tokens.colors.storefront-ink`): observed search-field text on `home::[data-omd-capture="8"]`; it is not a universal corporate text token.
- **Storefront body** (`#666666` / YAML `tokens.colors.storefront-body`): dominant body and navigation color on the public home capture.
- **Storefront muted** (`#888888` / YAML `tokens.colors.storefront-muted`): inactive carousel pagination-button text.
- **Storefront line** (`#ebebeb` / YAML `tokens.colors.storefront-line`): 1px border on the repeated `btn_zzim jeem` wishlist control.
- **Storefront current** (`#2f3030` / YAML `tokens.colors.storefront-current`): current 24px carousel-pagination item.
- **Corporate brand green** (`#82dc28` / YAML `tokens.colors.corporate-brand-green`): observed on the corporate home capture and also named Olive Green in Olive Young’s official Brand Resources. Catalog `primary_color` is `#82dc28`. Its official counterpart is Coral Orange `#ff7878`, but Coral Orange was not a computed token in the supplied surfaces and is intentionally not added to `tokens.colors`.

The source bundle also contains isolated browser/vendor-like blues, reds, and other local values. Without a repeated role or a first-party product token specification, they are not promoted to a semantic palette. Not promoting those isolated values to a semantic palette is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

### Spacing

YAML `tokens.spacing` keys, kept as separate steps (`search-x: 14` is not `tokens.typography.storefront-body.size` 14; `search-end: 10` is not a type size):

- `tokens.spacing.search-x`: 14
- `tokens.spacing.search-end`: 10

Those steps match the storefront search-field padding `0px 10px 0px 14px` (`search-x` as the 14px start, `search-end` as the 10px end). They are not a conversion of `tokens.typography.storefront-body.size` 14. The collector’s spacing frequencies include 2, 5, 10, 12, 18, 22, 23, 24, 30, 35, 40, 45, 51, 60, and 80px. This is a capture-frequency record, not a published spacing scale. Keeping the two YAML keys unmerged from type size 14, from `tokens.rounded.outline-control` 4, and from that frequency list, and reading the frequency list as a capture-frequency record rather than as a published spacing scale, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded` keys, kept as separate steps (`outline-control: 4` is not `search-field: 5`; `search-field: 5` is not `pagination-current: 12`):

- `tokens.rounded.outline-control`: 4
- `tokens.rounded.search-field`: 5
- `tokens.rounded.pagination-current`: 12

The outline-control `4px`, search-field `5px`, and current pagination `12px` belong to those captured storefront controls. The wishlist shell and the other carousel-pagination item are `0px`; that `0px` is not a YAML `tokens.rounded` key. Reading those three keys as local control radii rather than as a universal radius scale, and keeping `0px` off the rounded map, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

### Elevation

The storefront carousel pagination, wishlist controls, search field, and outline control report `box-shadow: none`. The corporate `btn_top` is a distinct corporate-surface exception with `0px 10px 15px rgba(0, 0, 0, 0.1)`; it is not promoted to a shared elevation token. Reading `box-shadow: none` as those observed storefront elements only, and reading the `btn_top` shadow as a corporate-surface exception rather than as a shared elevation token, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

### Motion

The bundle contains Slick and Swiper class names, but no captured duration, easing, or interaction sequence. No motion token is asserted. Recording those class names without promoting a duration, easing curve, animation name, transition property, or reduced-motion behavior is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating loaded Montserrat as the only storefront family token, treating loaded CJONLYONENew as a corporate-surface family token rather than as storefront use, treating `NotoSansCJKkr` as a loaded fallback observation rather than a general primary family token, treating `Arial` as system-resolved in one search input rather than as an Olive Young font asset, treating declared-only faces as omitted, and refusing to substitute a system font or a declared-only face for either loaded family, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Live storefront use — Montserrat | `Montserrat` is loaded with high confidence, has 528 visible uses across storefront body, list, menu, tab, button, and heading roles, and is corroborated by six Olive Young-hosted WOFF/WOFF2 sources. The observed home stack begins `Montserrat, -apple-system, NotoSansCJKkr, AppleSDGothicNeo, Roboto, …`; only the loaded Montserrat family is represented as the storefront family token. Token-set key `tokens.typography.family.storefront`. Public storefront: 532 captured elements. |
| Live corporate use — CJONLYONENew | `CJONLYONENew` is loaded with high confidence on the corporate home (176 visible uses) and is backed by six `corp.oliveyoung.com` WOFF2 assets. The captured corporate stack lists it first, before Pretendard and Korean system fallbacks. It is a corporate-surface family token, not evidence of storefront use. Token-set key `tokens.typography.family.corporate`. Public corporate surface: 176 captured elements. |
| Loaded but not promoted | `NotoSansCJKkr` has only three recorded visible uses on the storefront and stays a loaded fallback observation rather than a general primary family token. `Arial` is system-resolved in the one captured search input and is not an Olive Young font asset. |
| Declared-only assets | CJONLYONENewJP, CJONLYONENewOrigin, Dovemayo-Medium, Nanum Myeongjo, Noto Sans KR, OY Greta Sans, Pretendard, and PretendardJP have declared `@font-face` sources but zero recorded visible use in this bundle. They remain declared-only; no specimen or token substitutes them. |
| Licence boundary | First-party pages and the supplied bundle establish delivery of the corporate and storefront webfont files, but this update found no first-party standalone licence granting downstream reuse of CJONLYONENew or Montserrat assets. Asset delivery is not a redistribution licence. |
| Official product-use / brand resources | `https://corp.oliveyoung.com/en/company/brand` is official brand name story, logo colors, 13° symbol meaning, and downloadable logo asset; it does not publish a storefront token specification. |

### Family

- **Current visible storefront UI family:** `Montserrat`. Token-set key `tokens.typography.family.storefront`.
- **Current visible corporate UI family:** `CJONLYONENew`. Token-set key `tokens.typography.family.corporate`.
- Do not replace unavailable or unobserved brand type with Montserrat or CJONLYONENew. Each is canonical here only on the surface where computed visible use and loaded FontFace/source evidence agree.
- Do not promote OY Greta Sans, Pretendard, Noto Sans KR, or other zero-use declarations to the UI family.
- Label declared-only families as unavailable rather than rendering another family under their names.

Treating Montserrat as the storefront family and CJONLYONENew as the corporate family on this capture, refusing those substitutes, and keeping the two families from mixing across surfaces, is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

### Type roles

YAML token-set metrics keep their size, weight, lineHeight, and tracking numbers. YAML `use` strings are kept verbatim. `tokens.typography.storefront-body.size` 14 is not `tokens.spacing.search-x` 14. Paths kept: `tokens.typography.storefront-body.size` / `tokens.typography.storefront-body.weight` / `tokens.typography.storefront-body.lineHeight` / `tokens.typography.storefront-body.tracking` / `tokens.typography.storefront-body.use`; `tokens.typography.corporate-display.size` / `tokens.typography.corporate-display.weight` / `tokens.typography.corporate-display.lineHeight` / `tokens.typography.corporate-display.tracking` / `tokens.typography.corporate-display.use`. The storefront carousel-pagination row is a §3 measured style; it is not a YAML `tokens.typography` key.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use / evidence boundary |
|---|---|---:|---:|---:|---:|---|
| Storefront body/navigation (`tokens.typography.storefront-body`) | Montserrat | 14px / YAML 14 | 400 | 20px / YAML 20 | -0.56px / YAML -0.56 | Storefront home body and navigation text; repeated `home` text/list/menu/tab samples |
| Storefront carousel pagination | Montserrat | 14px | 700 | 24px | normal | `home::[data-omd-capture="174"]` and `"175"`; not a YAML `tokens.typography` key |
| Corporate display copy (`tokens.typography.corporate-display`) | CJONLYONENew | 25.2px / YAML 25.2 | 700 | 35.28px / YAML 35.28 | normal / YAML 0 | Corporate home display copy; repeated `surface-2` body samples |

Keeping those roles unmerged, keeping YAML `use` verbatim, keeping storefront-body `14` off `tokens.spacing.search-x` 14, keeping YAML lineHeight `20` / `35.28` beside the table `20px` / `35.28px`, keeping YAML tracking `-0.56` beside `-0.56px`, and keeping the carousel-pagination 14px/700 row off the YAML typography map, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

### Assets

- Catalog logo entry: favicon `https://www.google.com/s2/favicons?domain=oliveyoung.co.kr&sz=256`. Reading that URL as a catalog identity pointer rather than as an Olive Young-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.
- Official Brand Resources at `https://corp.oliveyoung.com/en/company/brand`: official brand name story, logo colors, 13° symbol meaning, and downloadable logo asset; it does not publish a storefront token specification.
- Product photography and brand imagery on the storefront are first-party catalog content; do not replace them with invented brand-color decoration. Refusing invented brand-color decoration in place of first-party catalog content is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All components below retain their captured surface and selector provenance. The supplied bundle reports `interactionCount: 0`; it does not establish hover, focus, pressed, disabled, dialog, menu, toast, cart, or checkout variants. The selected/current carousel relationship is static markup observed in the capture, not an interaction transition contract.

**Observed current carousel item:** `#2f3030`, white text, 12px radius, 24px square. **Observed other carousel item:** transparent, `#888888` text, 0px radius, 24px square. **Observed selected carousel markup:** `home::#slick-slide10` carries `aria-selected="true"`; the capture does not record a transition or interaction event. **Unobserved:** loading, empty, error, success, form validation, disabled, hover, focus, pressed, cart feedback, menu, dialog, toast, and mobile states.

The corporate surface includes an off-canvas skip link, but the capture does not document keyboard traversal, focus-visible styling, or screen-reader behavior. The storefront current carousel marker is 24px square and the captured wishlist shell is 40px square. This reference records dimensions only; it is not a touch-target or contrast conformance audit. `#666666` body text, `#888888` muted pagination text, and white text on `#2f3030` are observed combinations. Each target implementation still needs its own contrast and state testing.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, labelling Storefront wishlist control, Storefront search field, Storefront outline control, Storefront carousel pagination — other item, and Corporate skip link `not in the token set`, the refusal to treat this as a complete state-coverage claim, generic Focus not being invented as `focus-visible` treatment, and recorded control sizes plus observed contrast combinations not being a conformance audit, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The source records no `focus-visible` treatment. Generic focus is not invented as `focus-visible` treatment. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

### Storefront carousel pagination — current item

**Current item as captured**

- Role: current carousel pagination item on public storefront-home
- Primitive type: `tab` · YAML `tokens.components.pagination-current.type: tab` · Kind: interactive
- Background: `#2F3030` / YAML `tokens.components.pagination-current.bg` `#2f3030` / `tokens.colors.storefront-current`
- Text: `#FFFFFF` / YAML `tokens.components.pagination-current.fg` `#ffffff`
- Border: 0
- Radius: `12px` / YAML `tokens.components.pagination-current.radius` 12 / `tokens.rounded.pagination-current` 12
- Font: `14px / 700 / Montserrat` / YAML `14px/700/Montserrat`
- Size: 24px × 24px
- YAML active, kept as written: Current carousel pagination item; selected markup observed
- Token-set use: 24px current item in storefront home carousel pagination
- Use: public storefront-home carousel pagination; evidence `home::[data-omd-capture="174"]`, with selected carousel markup at `home::#slick-slide10`
- YAML fields on this component: `tokens.components.pagination-current.type`, `tokens.components.pagination-current.bg`, `tokens.components.pagination-current.fg`, `tokens.components.pagination-current.radius`, `tokens.components.pagination-current.font`, `tokens.components.pagination-current.active`, `tokens.components.pagination-current.use`
- Observed: default only; selected markup is static

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured current item on storefront-home |
| hover | applicable | Pointer-web pagination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A pagination item can be gated; visual treatment omitted |
| loading | not-applicable | Carousel pagination selects a slide; it does not commit an in-place operation |
| error | not-applicable | Selecting a carousel slide is not an action outcome this control reports |
| success | not-applicable | Selecting a carousel slide is not an action outcome this control reports |

### Storefront carousel pagination — other item

**Other item as captured**

- Role: sibling carousel-pagination button on public storefront-home
- Primitive type: not in the token set
- Kind: interactive
- Background: transparent
- Text: `#888888` / `tokens.colors.storefront-muted`
- Border: 0
- Radius: `0px`
- Font: `14px / 700 / Montserrat`
- Size: 24px × 24px
- Use: sibling 24px carousel-pagination button; evidence `home::[data-omd-capture="175"]`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured sibling item on storefront-home |
| hover | applicable | Pointer-web pagination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A pagination item can be gated; visual treatment omitted |
| loading | not-applicable | Carousel pagination selects a slide; it does not commit an in-place operation |
| error | not-applicable | Selecting a carousel slide is not an action outcome this control reports |
| success | not-applicable | Selecting a carousel slide is not an action outcome this control reports |

### Storefront wishlist control

**Default visual shell**

- Role: repeated product-grid wishlist control on storefront-home
- Primitive type: not in the token set
- Kind: interactive
- Background: `#FFFFFF` / `tokens.colors.storefront-canvas` `#ffffff`
- Border: `1px solid #EBEBEB` / YAML `tokens.colors.storefront-line` `#ebebeb`
- Radius: `0px`
- Size: `40px × 40px`
- Use: repeated product-grid `btn_zzim jeem` control on storefront-home; evidence `home::[data-omd-capture="85"]` (29 occurrences)

The control’s visible glyph is not text (`font-size: 0px` in the representative sample); its active/selected icon treatment was not captured and is intentionally omitted. Omitting that uncaptured icon treatment rather than inventing one is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured visual shell on storefront-home |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A wishlist control can be gated; visual treatment omitted |
| loading | applicable | A wishlist control can report in-progress add/remove; visual treatment omitted |
| error | applicable | A wishlist control can report a failed add/remove; visual treatment omitted |
| success | applicable | A wishlist control can report a completed add/remove; visual treatment omitted |

### Storefront search field

**Default visual shell**

- Role: `header_search_input` on storefront-home
- Primitive type: not in the token set
- Kind: interactive
- Text: `#131518` / `tokens.colors.storefront-ink`
- Radius: `5px` / YAML `tokens.rounded.search-field` 5
- Padding: `0px 10px 0px 14px` / YAML `tokens.spacing.search-end` 10 · `tokens.spacing.search-x` 14
- Font: `14px / 400 / Arial` (system-resolved)
- Use: `header_search_input` on storefront-home; evidence `home::[data-omd-capture="8"]`
- Layout record: 294px × 38px global search field

No focused, typed, error, disabled, or autocomplete state was supplied.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured visual shell on storefront-home |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not complete a save on itself |

### Storefront outline control

**Default visual shell**

- Role: storefront-home `btn` outline control
- Primitive type: not in the token set
- Kind: interactive
- Border: `1px solid #DDDDDD`
- Radius: `4px` / YAML `tokens.rounded.outline-control` 4
- Font: `13.3333px / 700 / Montserrat`
- Size: 335px × 40px
- Use: `home::[data-omd-capture="66"]`, class `btn`, 335px × 40px

The sample’s transparent background and white computed foreground cannot identify its composited visual context, so no foreground or reusable button-color token is asserted. Not asserting a foreground or reusable button-color token from that sample is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured visual shell on storefront-home |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A storefront button can be gated; visual treatment omitted |
| loading | applicable | A storefront button can report in-progress work; visual treatment omitted |
| error | applicable | A storefront button can report a failed action; visual treatment omitted |
| success | applicable | A storefront button can report a completed action; visual treatment omitted |

### Corporate skip link

**Default visual shell**

- Role: off-canvas `btn_skip` accessibility link on corporate-home
- Primitive type: not in the token set
- Kind: interactive
- Background: `#0000FF`
- Text: `#FFFFFF`
- Radius: `6px`
- Font: `13.5px / 400 / CJONLYONENew`
- Use: off-canvas `btn_skip` accessibility link on corporate-home; evidence `surface-2::[data-omd-capture="0"]`

This is corporate accessibility chrome, not storefront evidence or a general Olive Young primary-action token. That classification is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on corporate-home |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A skip link can be gated; visual treatment omitted |
| loading | not-applicable | A skip link is a destination accessibility control; it commits no operation in place |
| error | not-applicable | The same destination-link role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination-link role has no in-place operation whose completion can be confirmed on the control |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied storefront capture is 1440×900 and records a 294px × 38px global search field with `0px 10px 0px 14px` padding. Captured carousel pagination is 24px × 24px. The repeated wishlist control is 40px × 40px. The collector’s spacing frequencies include 2, 5, 10, 12, 18, 22, 23, 24, 30, 35, 40, 45, 51, 60, and 80px. This is a capture-frequency record, not a published spacing scale. No authenticated product layout, search-results layout, purchase funnel, responsive breakpoint, or mobile reflow is established by the two supplied desktop surfaces.

The storefront current carousel marker is 24px square and the captured wishlist shell is 40px square. This reference records dimensions only; it is not a touch-target or contrast conformance audit. No design-system documentation, authenticated application, or mobile surface was supplied. Those domains remain unresolved rather than being filled from corporate marketing or legacy notes.

Reading 1440×900 as the supplied capture size rather than as a breakpoint system, reading the frequency list as a capture-frequency record rather than as a published spacing scale, reading the 24px and 40px squares as recorded dimensions rather than as a touch-target audit, and leaving authenticated-product, documentation, and mobile domains unresolved rather than filling them from corporate marketing or legacy notes, are derived editorial implementation inferences from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Olive Young’s official company language is optimistic, practical, and discovery-oriented: its mission centers a healthier and more beautiful everyday life, while the vision names Healthy Beauty and New Discoveries Everyday. The public storefront capture supports short functional labels and dense retail scanning, but it does not establish a complete product microcopy system.

| Do | Don't |
|---|---|
| Connect a beauty or wellness action to a concrete everyday outcome. | Make unverifiable efficacy, delivery, or price promises. |
| Describe discovery as a useful choice or service. | Replace a product fact with a vague lifestyle superlative. |
| Keep commerce labels short and legible in a dense catalog. | Treat the corporate slogan as a verbatim checkout or error-copy pattern. |

**Official wording samples**
- *“Healthy Beauty”* — official brand essence.
- *“New Discoveries Everyday”* — official core value.
- *“ALL LIVE BETTER”* — official brand slogan.

The mission, vision names, slogan, and the three official wording samples are first-party recordings. Naming the company language optimistic, practical, and discovery-oriented, reading the storefront capture as short functional labels and dense retail scanning, and refusing to treat those samples as a complete product microcopy system or as verbatim checkout or error-copy, are a derived editorial implementation inference from the verified surfaces; they are not Olive Young-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Reading the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Olive Young-authored or a separately published UI specification.

- Coral Orange `#ff7878` as a computed `tokens.colors` value
- hover, focus, pressed, disabled, dialog, menu, toast, cart, and checkout visual treatments
- loading, empty, error, success, form validation, and mobile visual treatments
- motion duration, easing, and interaction sequence
- first-party standalone licence granting downstream reuse of CJONLYONENew or Montserrat assets
- authenticated product layout, search-results layout, purchase funnel, responsive breakpoint, and mobile reflow
- complete product microcopy, checkout copy, and error copy
- keyboard traversal, focus-visible styling, and screen-reader behavior
- a storefront role for `#82dc28` unless a storefront surface independently establishes that role
