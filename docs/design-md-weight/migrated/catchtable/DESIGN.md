# CatchTable Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

CatchTable (캐치테이블). Catalog homepage identity is `https://www.catchtable.co.kr`.

Treating CatchTable as a restaurant platform operated by WAD, treating the diner’s choice and reservation journey as related to merchant-side reservation, waiting, POS, pickup, and ordering operations without collapsing those sides into one UI surface, and treating catalog homepage `https://www.catchtable.co.kr` as identity rather than a captured page in this packet, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. CatchTable is a restaurant platform operated by WAD that connects the diner’s choice and reservation journey with merchant-side reservation, waiting, POS, pickup, and ordering operations.

Treating the following three URLs as three named evidence domains rather than one inferred product UI, including consumer-product-discovery-not-a-proxy-for-merchant-lead-or-careers-campaign, merchant-marketing-not-a-restaurant-booking-control, careers-marketing-not-a-consumer-CTA-system, and values-stay-attached-to-the-surface-that-established-them, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. This contract covers three named first-party evidence domains from the 2026-07-13 packet: the public consumer home at `https://www.catchtable.net/` (consumer-product), the merchant marketing surface at `https://biz.catchtable.co.kr/n/main` (b2b-marketing), and the careers marketing surface at `https://career.catchtable.co.kr/ko/service` (careers-marketing and official service context). Color, type, and component values below stay attached to the surface that established them. A merchant lead form or careers campaign button is not a restaurant-booking control.

Source token note: Selector-backed values are limited to the supplied consumer, merchant-marketing, and careers-marketing captures. These domains are not one inferred UI. Token extraction is `reconciled`. Treating that note as a register split — consumer-home values stay on the consumer home, merchant-marketing values stay on the merchant marketing route, careers-marketing `#ff3d00` stays a careers action fill rather than a universal consumer-product status or CTA token, catalog `primary_color` `#ff3d00` is that careers-marketing orange rather than a consumer-home action fill, and `https://www.catchtable.co.kr` is catalog identity rather than the captured consumer host `https://www.catchtable.net/` — is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

The following atmosphere readings — consumer-home-visually-quieter-than-merchant-and-employer-stories, white-field, black-text, compact-controls, image-led-discovery-tiles, a-single-loaded-`Pretendard Std Variable`-family-on-the-consumer-home, and careers-orange-kept-distinct-from-the-consumer-home-rather-than-generalized-into-a-product-wide-CTA-system — are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification. The supplied public consumer home is a white field, black text, compact controls, image-led discovery tiles, and a single loaded `Pretendard Std Variable` family. The official careers surface supplies the current orange `#FF3D00` action treatment; that marketing expression is kept distinct from the consumer home rather than generalized into a product-wide CTA system.

Treating the following public-history and official-service facts as narrative rather than interface tokens, including CatchTable-B2C versus CatchTable-Business-B2B, a current ambition to grow into a food-service super-platform, and WAD’s official service terms identifying the operating company as 주식회사 와드, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. CatchTable’s official careers page describes a service present around meaningful meals and store opening/growth moments. It identifies the consumer side as CatchTable (B2C), where reservations and waiting support the dining journey, and the merchant side as CatchTable Business (B2B), combining reservation, waiting, and POS operations. The same page reports a current ambition to grow into a food-service super-platform. WAD’s official service terms identify the operating company as 주식회사 와드. Official careers narrative and those service terms provide that context; they do not by themselves supply interface tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three YAML consumer-home component-use strings below as Primary tasks, and not lifting uncaptured restaurant-detail or reservation-flow UI from source §13 diner/operator groups, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

- Search the captured consumer home (YAML use: `Consumer-home search input`).
- Scan image-led discovery tiles on the captured consumer home (YAML use: `Consumer-home image-led discovery tile`).
- Use the compact filter/control on the captured consumer home (YAML use: `Consumer-home compact filter/control`).
<!-- design-md:claim-end -->

### Audience

Restricting Audience so no individual personas are promoted, source §13 official stakeholder groups are not primary tasks and not demographic personas, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. No individual personas are promoted. The official service description names two stakeholder groups; this reference keeps them as groups rather than inventing demographic personas:

- **Diners:** use the consumer service to discover restaurants, make reservations, and use waiting-related experiences.
- **Restaurant operators:** use merchant-side reservation, waiting, POS, pickup, order, and management functions.

### Distinctive traits

Treating `#ff3d00` as catalog `primary_color` and the careers-marketing action fill rather than a consumer-home CTA, treating merchant `#002d4e` as a route-local marketing fill rather than that orange, treating `#222222` as consumer section-title and careers-heading ink rather than consumer foreground `#000000`, treating canvas `#ffffff` as unmerged from on-action `#ffffff`, treating `Pretendard Std Variable` as the consumer UI family rather than marketing `Pretendard` or merchant-local `NanumSquareRound`, treating 40px search / 8px compact control / 6px discovery tile / 15px careers action as local geometry rather than one radius, treating image-led consumer discovery as not a generalized sales dashboard, and treating hover, focus, pressed, disabled, dialog, or responsive systems as not promoted from this capture, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

- Catalog `primary_color` / careers-marketing action fill `#ff3d00` (`#FF3D00`), not a universal consumer-product status or CTA token
- Merchant-marketing CTA fill `#002d4e` (`#002D4E`) on an 8px, 48px control
- Consumer canvas `#ffffff` with foreground `#000000`, section-title ink `#222222`, muted `#666666`, search surface `#f5f5f5`, compact-control border `#e4e4e4`
- `Pretendard Std Variable` as the only UI family promoted in `tokens.typography.family.ui`
- Consumer-home 40px search field, 8px compact control, 6px image-led discovery tile; careers action 15px
- Image-led consumer discovery rather than a generalized sales dashboard
- No promoted hover, focus, pressed, disabled, menu, dialog, validation, or responsive variant from this capture

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

1. **Keep the two-sided service legible.** Consumer discovery and merchant operations are related but not the same UI surface.
2. **Promote only observed public styles.** A selector-backed product token does not authorize a plausible restaurant-detail or reservation-flow variant.
3. **Let food discovery carry the consumer surface.** The captured consumer home uses image-led tiles and compact controls rather than a generalized sales dashboard.
4. **Treat orange by source domain.** `#FF3D00` is verified on the careers marketing action; do not automatically use it as a universal consumer semantic color.

Treating the following as a capture-bound application of source §7 Do’s, including restaurant-imagery-tied-to-the-consumer-surface and diner-discovery-imagery-not-merchant-lead-generation-content, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

- Keep restaurant imagery and discovery content tied to the consumer surface where they were observed.
- Preserve the separation between diner discovery imagery and merchant lead-generation content.

### Avoid

The following items copy source §7 Don’ts and source §10 Don’ts, including no-named-icon-library, merchant-imagery-not-a-consumer-reservation-component, no-invented-urgency-discounts-or-reservation-states, merchant-lead-CTA-not-a-diner-booking-control, and official-slogans-not-generated-product-copy. They are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

- Do not invent a named icon library, stroke specification, or image ratio that the evidence does not establish.
- Do not recast merchant marketing imagery as an observed consumer reservation component.
- Do not invent urgency, discounts, or reservation states that were not captured.
- Do not treat a merchant lead-generation CTA as a diner-booking control.
- Do not reproduce official slogans as generated product copy. The last item’s official-slogans-not-generated-product-copy reading is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings, including careers-orange-not-a-consumer-CTA, merchant-navy-not-that-orange, title-ink-not-foreground, canvas-white-not-on-action-white-as-a-second-paint, search-surface-not-canvas, compact-control-border-not-a-fill, on-brand-white-as-careers-action-text-not-merchant-cta-fg, and merchant-cta-on-fill-not-yaml-on-brand — are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification. Catalog `primary_color` `#ff3d00` is YAML `brand-orange` and the careers-marketing action fill; it is not a universal consumer-product status or CTA token. YAML `merchant-cta` `#002d4e` is the merchant-marketing CTA fill. YAML `title` `#222222` is consumer section-title and careers-heading ink; it is not consumer foreground `#000000`. YAML `canvas` `#ffffff` is the observed consumer canvas and compact-control background. YAML `on-brand` `#ffffff` is text on the careers orange action only. Merchant CTA `#FFFFFF` is that component’s local `fg` / on-fill, not YAML `on-brand`. Same hex; named jobs stay unmerged. YAML `search-surface` `#f5f5f5` is the consumer search background, not canvas. YAML `control-border` `#e4e4e4` is the compact-control border, not a fill.

- **Canvas** (`#ffffff` / `#FFFFFF`): YAML `canvas`. Observed consumer canvas and compact-control background.
- **Foreground** (`#000000`): YAML `foreground`. Observed consumer foreground; consumer search and compact-control text.
- **Title** (`#222222`): YAML `title`. Observed consumer section-title and careers-heading ink.
- **Muted** (`#666666`): YAML `muted`. Consumer-home muted text sample.
- **Search surface** (`#f5f5f5` / `#F5F5F5`): YAML `search-surface`. Consumer search background.
- **Control border** (`#e4e4e4` / `#E4E4E4`): YAML `control-border`. Consumer compact-control border.
- **Brand orange** (`#ff3d00` / `#FF3D00`): catalog `primary_color`. YAML `brand-orange`. Careers-marketing action background; verified public brand expression, not a universal consumer-product status or CTA token.
- **On-brand** (`#ffffff` / `#FFFFFF`): YAML `on-brand`. Text on the careers orange action. Same hex as canvas; jobs stay unmerged. Not the merchant CTA label.
- **Merchant CTA fill** (`#002d4e` / `#002D4E`): YAML `merchant-cta` `bg`. Merchant-marketing CTA background. Not brand orange.

### Spacing

YAML `spacing`: xs 4, sm 8, md 12, lg 20. Those YAML numbers are recorded without a px suffix; none is added here. Body layout names a conservative `4 / 8 / 12 / 20px` observed spacing set.

Treating those YAML numbers as recorded without a required px suffix, treating the body `4 / 8 / 12 / 20px` writing as the source’s observed-set phrase rather than a converted px writing of YAML xs 4, and treating harvested control padding and heights as component fields rather than replacements for the YAML spacing scale, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

### Shape

YAML `rounded`: square 0, discovery-tile 6, control 8, search 40, career-action 15.

The following local-geometry reading, including Square-chrome, Discovery-tile-6px, Compact-control-8px, Search-40px, Careers-action-15px, and not-a-global-radius-prescription, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

- Square (YAML `square` 0): consumer-home square chrome
- Discovery tile (`6px`): image-led consumer-home discovery tile (YAML `discovery-tile` 6)
- Control (`8px`): consumer compact control and merchant-marketing CTA (YAML `control` 8)
- Search (`40px`): consumer-home search field (YAML `search` 40)
- Careers action (`15px`): careers-service marketing action (YAML `career-action` 15)

Treating 0 / 6 / 8 / 40 / 15 as local harvested geometry rather than a universal radius for every unlisted control, and treating square chrome, 6px discovery tiles, an 8px compact control, a 40px search field, and a 15px careers action as source-specific rather than a global radius prescription, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. These observations are not a global radius prescription.

### Elevation

The following elevation readings, including consumer-controls-`box-shadow: none`, merchant-CTA-route-local-shadow-not-a-repeatable-scale, and no-shadow-token-promoted, are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Flat | `box-shadow: none` | Selector-backed consumer controls documented in Components |

Treating the following after-table readings — selector-backed-consumer-controls-`box-shadow: none`, merchant-CTA-route-local-shadow-not-a-repeatable-scale, and route-local-measurement-omitted-rather-than-invented — as reconstruction rather than a CatchTable elevation specification is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. The selector-backed consumer controls documented in Components have `box-shadow: none`. The merchant CTA has a route-local shadow, but no repeatable elevation scale is established across the three domains, so no shadow token is promoted. The route-local merchant measurement is omitted at this boundary; none is invented.

### Motion

No duration, easing, transition, carousel, or scroll state is recorded in the supplied evidence. Motion is intentionally undocumented. Treating that source-stated absence, including intentionally-undocumented, as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. No motion token is promoted.

Do not promote an easing curve, animation name, transition property, or a duration until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including live-consumer-`Pretendard Std Variable`-as-the-only-UI-family-token, live-marketing-`Pretendard`-as-source-domain-evidence-not-a-second-consumer-UI-family, surface-local-`NanumSquareRound`-kept-out-of-consumer-tokens, declared-only-faces-not-loaded-CatchTable-faces, and Pretendard-OFL-as-the-font-asset-not-a-CatchTable-brand-asset, are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live consumer computed use | `Pretendard Std Variable` is loaded/high confidence with 122 observed uses on the consumer home and seven jsDelivr subset source URLs. It is the only UI family promoted in `tokens.typography.family.ui`. |
| Live marketing computed use | `Pretendard` is loaded/high confidence with 117 observed uses across the merchant and careers surfaces and source URLs from Lazyrockets plus jsDelivr. It is recorded as source-domain evidence, not added as a second consumer UI-family token. |
| Surface-local live use | `NanumSquareRound` is loaded with one observed merchant-surface text use and eighteen source URLs; its low frequency and separate B2B surface keep it out of consumer tokens. |
| Declared-only | Aggro, Arita-dotum-Medium, Cafe24Oneprettynight, Chosunilbo_myungjo, D2Coding, DungGeunMo, Gmarket Sans, NanumSquare, Inter, KaTeX faces, and other zero-use declarations in the bundle remain declared-only. They are neither rendered as substitutes nor promoted as CatchTable UI roles. |
| Official font/license boundary | Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. That license explains the font asset, while computed usage plus FontFaceSet/source corroboration is what establishes the observed public use above. |

### Family

- **Current visible consumer UI family:** `Pretendard Std Variable` — YAML `family.ui`
- **Live marketing computed companion:** `Pretendard` — merchant and careers surfaces; not a second consumer UI-family token
- **Surface-local live companion:** `NanumSquareRound` — one observed merchant-surface text use; not a consumer UI-family token

The following font-use boundary, including system-or-declared-only-faces-not-`Pretendard Std Variable`, marketing-`Pretendard`-not-a-second-consumer-UI-family, `NanumSquareRound`-not-a-consumer-token, `NanumSquare`-declared-only-not-`NanumSquareRound`, and declared-only-fonts-not-loaded-CatchTable-faces, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. Do not present a system stack or a declared-only face as `Pretendard Std Variable`. Do not replace `Pretendard Std Variable` on the consumer home with marketing `Pretendard` or with `NanumSquareRound`. Do not present `NanumSquare` as `NanumSquareRound`. Declared-only fonts must not be presented as loaded CatchTable faces.

### Type roles

Verified YAML line-height values are the unitless ratios `1.50` and `1.35`. The following ratio-versus-size-local reading, including unitless-ratios-not-fixed-px, consumer-body-16-not-search-15, consumer-title-20-not-career-display-38, career-display-`Pretendard`-not-`Pretendard Std Variable`, and 13px-labels-not-a-YAML-role, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. YAML sizes 16 / 20 / 15 / 38 stay YAML numbers; body px companions below are size-local observations, not replacements for the ratios. Centered 13px discovery labels are a Layout observation, not a YAML typography role.

| Role | Font | Size (YAML) | Weight | Line height (YAML) | Body observation | Use (YAML) |
|---|---|---:|---:|---:|---|---|
| Consumer body | Pretendard Std Variable | 16 | 400 | 1.50 | 16px at this size | Repeated consumer-home body and button sample |
| Consumer title | Pretendard Std Variable | 20 | 700 | 1.50 | 20px / 700 section-title sample | Consumer-home section-title sample |
| Search control | Pretendard Std Variable | 15 | 500 | 1.50 | 15px at this size | Consumer-home search input |
| Career display | Pretendard | 38 | 700 | 1.35 | Careers-service marketing heading | Careers-service marketing heading |

### Assets

Treating catalog logo metadata as a Google favicon lookup (`https://www.google.com/s2/favicons?domain=catchtable.co.kr&sz=256`), not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

Treating restaurant imagery and discovery content as tied to the consumer surface where they were observed, not recasting merchant marketing imagery as an observed consumer reservation component, and treating no-named-icon-library-stroke-image-ratio-or-reusable-media-card as unclaimed, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. The consumer home is image-led: repeated discovery tiles use a simple control shell around imagery and text. The capture exposes ordinary controls but no named icon library, stroke treatment, image ratio, or reusable media-card contract. Those details remain unclaimed.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

Treating default-only static samples as the documented state contract because the raw bundle contains zero interaction records, treating loading/error/success/focus/hover/pressed/disabled/menu-open/dialog-open/responsive as intentionally omitted for that reason, and treating `surface-2` static pseudo-state samples as not promoted because the bundle has no corresponding interaction provenance, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. Only default static component samples are documented. The raw bundle contains zero interaction records, so loading, error, success, focus, hover, pressed, disabled, menu-open, dialog-open, and responsive states are intentionally omitted. The supplied bundle reports zero interaction records. No hover, pressed, focus, disabled, menu, dialog, validation, or responsive variants are claimed; the `surface-2` static pseudo-state samples are not promoted because the bundle has no corresponding interaction provenance.

Treating Core §4.4 applicability as judged by control meaning rather than capture completeness, treating a later generic Focus observation as not `focus-visible` evidence, and treating loading/error/success as following product role rather than primitive kind, and treating unresolved request/outcome mapping as omitted-L-E-S-fields-rather-than-closed-from-§14-rows, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no keyboard or `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

Source §8 records contrast pairings as observations, not as an accessibility approval for all consumer actions: consumer search has black text on `#F5F5F5`; the compact control has black text on white with a `#E4E4E4` border; the careers orange action is `#FFFFFF` on `#FF3D00`. Treating those pairings as capture-bound observations rather than an accessibility approval, and treating any implementation as needing its own accessible focus treatment rather than inferring one from the recorded radii, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

### Consumer search

- Role: consumer-home search input
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#F5F5F5`
- Text: `#000000`
- Radius: `40px`
- Padding: `0px 15px 0px 32px`
- Height: 38px
- Font: `15px / 500 Pretendard Std Variable`
- Use: YAML `Consumer-home search input`
- Observed: default only
- Field note: The following unmerged-field reading, including search-surface-not-canvas, 40px-not-compact-control-8px, 15px-500-not-consumer-body-16px-400, asymmetric-padding-not-an-unmeasured-icon-spec, and 38px-height-from-body-layout-not-a-YAML-component-height, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. `#F5F5F5` is this control’s fill (search-surface), not canvas `#ffffff`. Radius `40px` is this search field, not compact-control `8px`. Font 15px / 500 is this control’s field, not Consumer body 16 / 400. Padding `0px 15px 0px 32px` is asymmetric; the capture does not assert an unmeasured icon spec. Height 38px is the body §2 search-input measurement; YAML `tokens.components.consumer-search` has no height field.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the consumer-home search input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the consumer-home search input; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Consumer filter control

- Role: consumer-home compact filter/control
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FFFFFF`
- Text: `#000000`
- Border: `1px solid #E4E4E4`
- Radius: `8px`
- Height: `32px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: YAML `Consumer-home compact filter/control`
- Observed: default only
- Field note: The following unmerged-field reading, including compact-control-white-not-search-`#F5F5F5`, 8px-not-search-40px, 32px-not-merchant-48px, and 16px-400-not-search-15px-500, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. `#FFFFFF` is this control’s fill (canvas / compact-control background), not search-surface `#F5F5F5`. Radius `8px` is this compact control, not search `40px`. Height `32px` is this control, not merchant CTA `48px`. Font 16px / 400 is this control’s field, matching Consumer body, not Search control 15 / 500.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the consumer-home compact filter/control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter/control can be unavailable; visual treatment omitted |
| loading | not-applicable | A compact filter/control selects a filter; the control itself does not enter a loading state |
| error | not-applicable | Filter meaning is chosen versus resting, not a request or validation failure on the control |
| success | not-applicable | Filter meaning is selection, not action-outcome confirmation |

### Consumer discovery tile

- Role: image-led consumer-home discovery tile
- Kind: interactive
- Type: button
- Anatomy: image + text in a control shell
- Radius: `6px`
- Padding: `8px 12px`
- Font: `16px / 400 Pretendard Std Variable`
- Use: YAML `Consumer-home image-led discovery tile`
- Observed: default only
- Field note: The following unmerged-field reading, including 6px-not-compact-control-8px, 8px-12px-padding-not-search-padding, no-YAML-background, 13px-centered-labels-as-Layout-not-this-font-field, and Type-button-from-YAML-not-inverted-to-card, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. Radius `6px` is this tile, not compact-control `8px` and not search `40px`. Padding `8px 12px` is this tile, not search `0px 15px 0px 32px`. YAML records no background for this control; none is invented. Centered 13px discovery labels are a Layout observation, not this 16px / 400 field. `Type: button` is YAML `tokens.components.consumer-discovery-tile.type`; it is not inverted to card.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the image-led consumer-home discovery tile |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A discovery tile can be unavailable; visual treatment omitted |
| loading | not-applicable | An image-led discovery tile presents a destination to scan; the tile itself does not enter a loading state |
| error | not-applicable | Discovery-tile meaning is destination/scan, not a request or validation failure on the tile |
| success | not-applicable | Discovery-tile meaning is destination/scan, not action-outcome confirmation |

### Merchant marketing CTA

- Role: merchant-marketing call-to-action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#002D4E`
- Text: `#FFFFFF`
- Radius: `8px`
- Height: `48px`
- Font: `16px / 700 Pretendard`
- Use: YAML `Merchant-marketing CTA link`
- Observed: default only
- Field note: The following unmerged-field reading, including this-fill-not-careers-`#FF3D00`, on-fill-white-not-canvas-as-a-second-paint, 8px-matching-compact-control-not-careers-15px, 48px-not-compact-32px, `Pretendard`-700-not-`Pretendard Std Variable`-400, YAML-type-button-not-inverted-to-link, and not-a-restaurant-booking-control, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. `#002D4E` is this control’s fill. It is not careers orange `#FF3D00`. `#FFFFFF` is this control’s on-fill label, same hex as canvas, jobs unmerged. Radius `8px` matches YAML `control`; it is not careers `15px`. Height `48px` is this control, not compact-control `32px`. Font 16px / 700 / Pretendard is this control’s field, not consumer-home `Pretendard Std Variable` 16 / 400. YAML `type` is `button`; Use names a CTA link; both records are kept and type is not inverted to link. This is a merchant-marketing action, not a restaurant-booking control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the merchant-marketing CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the merchant-marketing CTA link; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows. The `surface-2` static pseudo-state samples are not copied here as a computed paint. Treating those `surface-2` samples as not-copied-as-a-computed-paint rather than a harvested interaction state is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

### Careers orange action

- Role: careers-service marketing action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#FF3D00`
- Text: `#FFFFFF`
- Radius: `15px`
- Padding: `10.5px 24px`
- Font: `16px / 400 Pretendard`
- Use: YAML `Careers-service marketing action`
- Observed: default only
- Field note: The following unmerged-field reading, including this-fill-as-catalog-`primary_color`-not-merchant-`#002D4E`, 15px-not-compact-8px-not-search-40px, 10.5px-24px-not-discovery-8px-12px, `Pretendard`-400-not-merchant-700-and-not-consumer-`Pretendard Std Variable`, and not-an-accessibility-approval-for-all-consumer-actions, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification. `#FF3D00` is this control’s fill and catalog `primary_color`. It is not merchant `#002D4E`. Radius `15px` is this action, not compact-control `8px` and not search `40px`. Padding `10.5px 24px` is this action, not discovery `8px 12px`. Font 16px / 400 / Pretendard is this control’s field, not merchant 16px / 700 and not consumer-home `Pretendard Std Variable`. Source §8 records `#FFFFFF` on `#FF3D00` as a marketing observation, not an accessibility approval for all consumer actions.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the careers-service marketing action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the careers-service marketing action; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 12, lg 20. Body layout repeats the conservative `4 / 8 / 12 / 20px` observed spacing set. Harvested heights: 38px search input, 32px compact control, 48px merchant CTA.

The following layout readings — 1440×900-public-route, 38px-search, 32px-compact-control, centered-13px-discovery-labels, 20px-700-section-title, image-led-discovery-tiles, asymmetric-search-padding, merchant-and-careers-route-local-marketing-layouts, no-universal-card-grid-breakpoint-or-responsive-rule, merchant-careers-button-values-as-route-local-examples-only, and 1440×900-not-cross-viewport — are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

Recorded layout:

- The captured consumer home is a 1440×900 public route with a 38px search input, compact 32px control, centered 13px discovery labels, a 20px/700 section-title sample, and repeated image-led discovery tiles.
- Consumer search padding is asymmetric—`0px 15px 0px 32px`—which leaves room for a leading search affordance without asserting an unmeasured icon spec. Treating that leaves-room-for-a-leading-search-affordance clause as a reconstruction reading of the recorded padding rather than a CatchTable icon specification is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.
- Consumer discovery tiles are observed at 6px radius with `8px 12px` padding. The capture does not establish a universal card grid, breakpoint, or responsive rule.
- Merchant and careers surfaces have their own marketing layouts. Their button values are documented only as route-local examples in Components.

Treating the supplied 1440×900 desktop capture as not substantiating a universal card grid, breakpoint, or responsive rule, treating 38px / 32px / 48px as surface measurements in this packet rather than a cross-viewport specification, and treating no-keyboard-or-focus-visible-capture as a reason for an implementation to supply its own accessible focus rather than inferring one from the recorded radii, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Official careers copy frames the consumer experience around making a dining choice with more confidence and enjoyment, and the merchant experience around connecting reservation, waiting, POS, and store operations. Treating the use of that clarity — choice for diners, operational continuity for merchants — without copying slogans or turning a careers narrative into consumer-product microcopy as a reconstruction reading rather than a CatchTable-authored microcopy specification, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

The following voice readings — clear, food-centered, operationally concrete, diner-choice-or-concrete-restaurant-operation, consumer-and-merchant-messages-audience-specific, and calm-direct-Korean-service-language — are a derived editorial implementation inference from the verified surfaces; they are not CatchTable-authored or a separately published UI specification.

**Voice adjectives:** clear · food-centered · operationally concrete

| Do | Don't |
|---|---|
| Describe a diner choice or a concrete restaurant operation. | Invent urgency, discounts, or reservation states that were not captured. |
| Keep consumer and merchant messages audience-specific. | Treat a merchant lead-generation CTA as a diner-booking control. |
| Use calm, direct Korean service language. | Reproduce official slogans as generated product copy. |

Not promoting synthetic voice samples, and treating the §14 default-only rows as the state contract rather than extra voice samples, is a derived editorial implementation inference from the verified surfaces; it is not CatchTable-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent:

- hover, pressed, focus, disabled, loading, error, success, menu, dialog, validation, menu-open, dialog-open, and responsive visual treatments
- Consumer search / Merchant marketing CTA / Careers orange action loading·error·success applicability (exact request/outcome unresolved)
- named icon library, stroke specification, image ratio, and reusable media-card contract
- universal card grid, breakpoint, and responsive rule
- unmeasured search-icon spec
- merchant CTA route-local shadow measurement
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five kinds; official documentation of a single curve or duration is not that gate
- restaurant-booking CTA styling, bottom-navigation states, Swiper states, a 145-token semantic sheet, a universal 150% type contract, a five-tier shadow ladder, and a universal hard-square geometry (source-stated prior claims the 2026 capture does not substantiate)
