# Naver Webtoon Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

NAVER WEBTOON (네이버웹툰) is WEBTOON Entertainment's Korean webcomic platform. This contract covers the three first-party public product routes the source inspected for tokens on 2026-07-13: the product home at `https://comic.naver.com/index`, the product browse at `https://comic.naver.com/webtoon`, and the product creator discovery at `https://comic.naver.com/bestChallenge`. `https://about.webtoon.com/` and `https://about.webtoon.com/our-brands?company=naverWebtoon` are official company and service-context sources; they do not supply the computed product tokens below. Catalog identity also records `primary_color: "#00dc64"`; that catalog field shares a hex with `tokens.colors.primary` `#00dc64` and stays an identity writing, not a second green. Selector-backed values are restricted to the supplied public comic.naver.com product capture, NAVER global-shell chrome and zero-use font declarations are not product-token substitutes, and NAVER account/service utility chrome appears in the artifact as a separate inherited shell and is not promoted into these product tokens. This is a record of the current captured routes—not a claim that every NAVER, WEBTOON Entertainment, mobile, reader, payment, or logged-in surface follows the same contract. Reading those three inspected URLs as this contract's token surfaces, keeping the two about.webtoon.com URLs as named service-context sources that do not supply computed interface tokens, treating values as attached to the surface that established them, keeping catalog `primary_color` `#00dc64` as an identity writing beside `tokens.colors.primary` rather than as a second green, and keeping the inherited NAVER shell off the product-token set, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

The captured product surfaces share a short, practical visual vocabulary: white `#FFFFFF` / YAML `#ffffff`, black `#000000`, muted `#666666`, pale tag fills `#F6F6F6` / YAML `#f6f6f6`, and green `#00DC64` / YAML `#00dc64` on a creator entry, selected tabs, selected pagination, and a browse heading. In the supplied public capture, that creator-and-reader service is expressed with a compact white product shell, black text, a bright green creator entry, and image/content-led browsing rather than a marketing campaign system. The hex values, the listed roles, and that image/content-led browsing sentence are the source's own. The characterizations built on them — a compact white product shell; a short, practical visual vocabulary; image/content-led browsing rather than a marketing campaign system — are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. WEBTOON Entertainment describes NAVER WEBTOON as Korea's largest webcomic platform. Its official brands page says it launched in 2005 and enables new and established creators to build an audience and make money from webcomics; it distinguishes BEST CHALLENGE as the self-publishing path for emerging creators. The company describes it as Korea's largest webcomic platform, launched in 2005 to let both emerging and established creators build an audience and earn from webcomics; its BEST CHALLENGE route is the self-publishing path for up-and-coming creators. The official company site frames the wider organization as a story-oriented entertainment service and a platform where creators and users discover, create, and share stories. These are service and company facts, not proof of a visual or interaction system beyond the captured routes. The year 2005, Korea's largest webcomic platform, both wordings of the creator-audience claim, both BEST CHALLENGE self-publishing wordings, the story-oriented entertainment service, and that closing sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-service narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification. They do not come from the source's Personas section.

- Search with the Product-home header search input on `https://comic.naver.com/index`.
- Scan Product content tabs and a Product-home tag link on the product home.
- Open the product browse route at `https://comic.naver.com/webtoon`.
- Open BEST CHALLENGE product creator discovery at `https://comic.naver.com/bestChallenge`.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source states it does not invent demographic personas. The official context identifies three stakeholder groups: readers/users who discover stories, new and established webcomic creators who build audiences and monetize work, and emerging self-publishers using BEST CHALLENGE. No motivations, demographics, or task flows beyond those official descriptions are asserted. Dropping nothing from those three official group strings, carrying no name, age, city, motivation, or affiliation classification beyond what the official context already names, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

- White `#FFFFFF` / `#ffffff` canvas, black `#000000` text, muted `#666666`, pale tag fills `#F6F6F6` / `#f6f6f6`, and green `#00DC64` / `#00dc64` on a creator entry, selected tabs, selected pagination, and a browse heading
- `Pretendard` computed on 1,371 captured elements across the three product routes, with a high-confidence loaded FontFaceSet match, as the sole `tokens.typography.family.ui` family
- Compact white product shell, black text, a bright green creator entry, and image/content-led browsing rather than a marketing campaign system
- Selected/unselected content-tab split (`#666666` unselected; `#00DC64` / `#00dc64` selected) with tab interaction provenance (`interactionCount: 7`)
- Local radii `tokens.rounded.square` `0` and `tokens.rounded.compact` `4`; not a universal radius scale

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Creator participation.** Official material says the service gives new and established creators ways to build an audience and make money. *UI implication:* the captured global product navigation includes a green creator entry; no broader creator-flow pattern is inferred.
2. **Discovery, creation, and sharing.** WEBTOON Entertainment describes its platform around those three participant activities. *UI implication:* no unmeasured navigation, recommendation, or sharing pattern is prescribed here.
3. **Emerging-creator publishing.** The official brands page identifies BEST CHALLENGE as the self-publishing path for up-and-coming creators. *UI implication:* the captured Best Challenge route is retained as a distinct product surface rather than generalized to reader browsing.

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

- Reuse only the selector-backed white, black, gray, and green treatments documented above when recreating these specific public-route patterns.
- Preserve the selected/unselected tab color split only in contexts with the captured tab semantics.
- Keep `Pretendard` as the product UI family only where a compatible loaded-font path is available.

### Avoid

The source states these three as its Don't list, plus the §9 bound kept as written. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

- Don't treat the inherited NAVER utility shell as a NAVER WEBTOON product-token source.
- Don't substitute `Pretendard Variable`, `NanumSquare`, or another declared font for the verified computed `Pretendard` family.
- Don't infer card, reader, payment, hover, focus, error, or responsive contracts from this three-route capture.
- Do not extend these snippets into a generic WEBTOON app system.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping YAML lowercase and §2 uppercase as two writings of the same hex rather than normalizing one away, keeping `tokens.colors.surface` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping catalog `primary_color` `#00dc64` as an identity writing beside `tokens.colors.primary` `#00dc64` rather than as a second green, attaching Product green to the creator-entry button, selected content tabs, selected pagination, and a weekday browse heading rather than relocating those uses, and keeping weekday-heading on-green text on `tokens.colors.on-primary` rather than merging it into `tokens.colors.surface`, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Product green** (`#00DC64` / YAML `#00dc64`): Observed on the creator-entry button, selected content tabs, selected pagination, and a weekday browse heading. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` writes the same YAML hex; it stays an identity field.
- **Surface white** (`#FFFFFF` / YAML `#ffffff`): Observed header-search background and the text on the captured green weekday heading. Token-set path `tokens.colors.surface`. Same YAML hex as `tokens.colors.on-primary`; it stays a second key.
- **Foreground black** (`#000000`): Observed search text, product headings, and creator-entry text. Token-set path `tokens.colors.foreground`.
- **Muted gray** (`#666666`): Observed unselected content-tab text and tag-link text. Token-set path `tokens.colors.muted`.
- **Tag surface** (`#F6F6F6` / YAML `#f6f6f6`): Observed tag-link background on the product home. Token-set path `tokens.colors.tag-surface`.
- **On-primary** (`#ffffff`): YAML key claimed on the product-browse capture. Same hex as `tokens.colors.surface`; it stays a second key. Token-set path `tokens.colors.on-primary`. The §2 writing that names text on the captured green weekday heading stays on this pair of `#ffffff` keys rather than as a third YAML colors key.

No hover color, error color, dark reader surface, shadow ladder, or universal brand palette is promoted because it was not established by the supplied product capture.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `square: 0` · `compact: 4`.

- Square (`0` / `0px`): header-search radius. Token-set key `tokens.rounded.square`.
- Compact (`4` / `4px`): creator-entry radius and tag-link radius. Token-set key `tokens.rounded.compact`.

4px creator-entry and tag-link corners and 0px header-search corners are local defaults, not a universal radius scale. Keeping `0` and `4` as two keys, keeping those component radii on the keys the source named, and reading them as local defaults rather than as a universal radius scale (the source removed unsubstantiated universal spacing/radius rules), are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

### Elevation

The documented search, creator entry, tabs, tags, weekday heading, and pagination samples all report `box-shadow: none`. No elevation token is promoted. The `none` writing and that no-elevation-token sentence are the source's own. Reading those representative `box-shadow: none` reports as the only elevation record, rather than as a depth scale for every NAVER WEBTOON surface, is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.

### Motion

No duration, easing, animation, or reduced-motion behavior was captured. Tab selection is the only observed interaction kind; it establishes state provenance, not a motion token. An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, refusing a partial confirmation, and keeping the source's "No duration, easing, animation, or reduced-motion behavior was captured" and "Tab selection is the only observed interaction kind; it establishes state provenance, not a motion token" sentences, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live product computed use | `Pretendard` is the computed family on 1,371 captured elements across the three product routes. The collector reports a high-confidence loaded FontFaceSet match, so it is the sole `tokens.typography.family.ui` family. |
| Declared-only font asset | `Pretendard Variable` has 92 captured `@font-face` source URLs but zero visible computed uses. It remains a declared asset, not a substituted UI-family token. |
| Declared-only faces | `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` have zero visible uses in this artifact. They remain declared-only. |
| Unresolved shell family | `나눔고딕` occurs in 12 global NAVER utility-shell observations but has no matching loaded FontFace in the artifact. It remains unresolved and is excluded from the product family token. |
| Upstream asset and licence | Pretendard's upstream README describes its cross-platform, multilingual family and variable distribution. Its upstream LICENSE is SIL Open Font License 1.1. These sources explain the font asset; the product-use conclusion comes from computed use plus the loaded FontFaceSet match above. Docs: `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md`. License: `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. |

Reading those five evidence-class rows as the source's own resolution table rather than as a published NAVER WEBTOON type specimen, and keeping the upstream-licence row from independently establishing product use, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard`
- **Token-set path:** `tokens.typography.family.ui`
- Do not replace unavailable or unobserved brand type with Pretendard. It is canonical here only because computed visible use and loaded FontFaceSet evidence agree. Do not substitute `Pretendard Variable`, `NanumSquare`, or another declared font for the verified computed `Pretendard` family.

Keeping Pretendard as the sole UI-family token on the three captured product routes, treating it as canonical here only because computed visible use and loaded FontFaceSet evidence agree, refusing to replace an unavailable or unobserved brand type with it, and refusing declared-only `Pretendard Variable`, `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` plus unresolved `나눔고딕` as substitutes, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

### Type roles

YAML writes unitless sizes (`24`, `20`, `15`, `14`) and unitless line heights on three roles (`1.05`, `1.40`, `2.14`) and no lineHeight on brand-title. Source §3 writes the same roles with px sizes (`24px`, `20px`, `15px`, `14px`) and px line heights (`21px`, `21px`, `30px`) and `normal` on the header wordmark area. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 captured-use column beside them, keeping YAML unitless sizes beside §3 `px` spellings, keeping header-search `14px / 400 Pretendard` and creator-entry `12px / 400 Pretendard` as §4-only writings rather than as YAML typography keys, keeping the home-route tag-link `16px/500/37px` record as a route-local size rather than a generalized size scale, and keeping `tokens.typography.tag.size` `14` off pagination `14px / 500 Pretendard`, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use | Captured use |
|---|---|---:|---:|---|---|---|
| Header wordmark area | Pretendard | 24 / 24px | 700 | normal | Product header wordmark area | `home::h1` |
| Section title | Pretendard | 20 / 20px | 600 | 1.05 / 21px | Product-home section heading | `ComponentHead__title` on product home |
| Content tab | Pretendard | 15 / 15px | 500 | 1.40 / 21px | Product content tab | selected and unselected `ComponentHead__button_tab` |
| Tag link | Pretendard | 14 / 14px | 500 | 2.14 / 30px | Product-home tag link | `TagGroup__tag` on product home |

Token-set paths: `tokens.typography.brand-title` · `tokens.typography.section-title` · `tokens.typography.tab` · `tokens.typography.tag`. Header-search `14px / 400 Pretendard` and creator-entry `12px / 400 Pretendard` are §4 writings, not YAML typography keys. The same tag-link class also appears at 16px/500/37px on the home route. That is an observed route-local size record, not a generalized size scale. `tokens.typography.tag.size` `14` is not pagination's `14px / 500 Pretendard`.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=comic.naver.com&sz=128`. Frontmatter records `logo.type: favicon`.
- Upstream Pretendard licence: SIL Open Font License 1.1 at `https://github.com/orioncactus/pretendard/blob/main/LICENSE`. This describes the font asset, not a NAVER WEBTOON brand asset.
- Declared-only `Pretendard Variable`, `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` stay declared-only. `나눔고딕` stays unresolved inherited-shell use.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a first-party distributed NAVER WEBTOON brand file, and reading the Pretendard licence as an upstream font-asset boundary rather than a NAVER WEBTOON brand asset, are derived editorial implementation inferences from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

| State | Captured treatment |
|---|---|
| Content tab, unselected | `#666666`, 15px/500, `home::[data-omd-capture="16"]` |
| Content tab, selected | `#00DC64`, 15px/500, `home::[data-omd-capture="17"]`; tab interaction provenance exists |
| Pagination, selected page | `#00DC64`, 14px/500, `surface-3::[data-omd-capture="133"]` |
| Pagination, disabled previous | Statically disabled with `#000000`, 14px/500, `surface-3::[data-omd-capture="132"]`; not a generalized disabled rule |

Only tab selection has interaction provenance in the supplied bundle (`interactionCount: 7`). No hover, pressed, focus, menu, dialog, error, toast, responsive, card, thumbnail, reading-viewer, or checkout variant is asserted. No loading, empty, success, error, toast, skeleton, focus, hover, or pressed state was captured for promotion. The legacy prose-derived token sheet, hover/pressed/focus treatments, reader and payment states, logo-color assertions, shadow ladder, universal spacing/radius rules, and unobserved component variants were removed because the supplied 2026 capture does not substantiate them.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, the selected/unselected tab reading, the pagination disabled-previous observation that is not a generalized disabled rule, the refusal to attach a YAML primitive type that the token set does not record, labelling Header search and Creator entry `not in the token set`, attaching `type: tab` only to Content tab, `type: badge` only to Tag link, and `type: button` only to Pagination, the refusal to claim hover, pressed, focus, menu, dialog, error, toast, responsive, card, thumbnail, reading-viewer, or checkout from class names or static samples, the refusal to treat a generic `focus` non-capture as `focus-visible` treatment, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` observation in the source is not `focus-visible` treatment evidence; the source records that no focus state was captured, and that is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. YAML records `tokens.components.content-tab.type: tab`, `tokens.components.tag-link.type: badge`, and `tokens.components.pagination.type: button`. Header search and Creator entry are §4 writings and are labelled `not in the token set`. No YAML primitive type is invented or copied onto another component.

### Header search

- Role: Product-home header search input
- Primitive type: not in the token set
- Kind: interactive
- Anatomy: value field
- Background: `#FFFFFF`
- Text: `#000000`
- Radius: `0px`
- Padding: `0px 65px 0px 10px`
- Font: `14px / 400 Pretendard`
- Height: 35px (Layout; desktop-capture measurement)
- Use: Product-home header search input; `home::[data-omd-capture="4"]`.
- Observed: default only
- `#FFFFFF` is this control's background. It is `tokens.colors.surface` as a YAML key, and it is not a third `#ffffff` colors key. The radius `0px` is `tokens.rounded.square`. The `14px / 400 Pretendard` metrics are a §4 writing, not `tokens.typography.tag`. Those keep-path attachments are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the product home |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An input can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit an operation whose in-progress state it could report on itself |
| error | applicable | A form field can fail validation; visual treatment omitted |
| success | not-applicable | The field does not complete a search on itself |

### Creator entry

- Role: Product global-navigation creator entry
- Primitive type: not in the token set
- Kind: interactive
- Anatomy: label
- Background: `#00DC64`
- Text: `#000000`
- Radius: `4px`
- Padding: `11px 33px`
- Font: `12px / 400 Pretendard`
- Height: 39px (Layout; desktop-capture measurement)
- Use: Product global-navigation creator entry; `home::[data-omd-capture="14"]`.
- Observed: default only
- `#00DC64` is this control's fill. It is `tokens.colors.primary` as a YAML key. The radius `4px` is `tokens.rounded.compact`. The `12px / 400 Pretendard` metrics are a §4 writing, not a YAML typography key. Those keep-path attachments are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the product home |
| hover | applicable | Pointer-web destination entry; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination entry can be gated; visual treatment omitted |
| loading | not-applicable | A creator entry opens a destination; it commits no operation in place |
| error | not-applicable | A destination creator entry does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this control reports as success |

### Content tab

- Role: Product content tabs
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label
- Default text: `#666666`
- Default font: `15px / 500 Pretendard`
- Default use: Unselected product content tab; `home::[data-omd-capture="16"]`. YAML use also writes `home::[data-omd-capture=16]`.
- Selected text: `#00DC64` / YAML `#00dc64`
- Selected use: observed at `home::[data-omd-capture="17"]` and in the captured tab interaction. YAML use also writes `home::[data-omd-capture=17]`.
- Token-set fg: `#00dc64`
- Token-set font: `15px / 500 Pretendard`
- Token-set states: `unselected #666666; selected #00dc64 via captured tab interaction`
- Token-set use: Product content tabs, selectors home::[data-omd-capture=16] and home::[data-omd-capture=17]
- Token-set path: `tokens.components.content-tab` (`type`, `fg`, `font`, `states`, `use`)
- Height: 21px (Layout; desktop-capture measurement)
- Observed: unselected default, and selected via captured tab interaction (`interactionCount: 7`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured unselected on the product home |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A content tab selects a pane; it commits no operation in place |
| error | not-applicable | A content tab does not report a failed request on itself |
| success | not-applicable | Reaching the selected pane is not an operation this tab reports as success |

### Tag link

- Role: Product-home tag link
- Primitive type: `badge`
- Kind: interactive
- Anatomy: label
- Background: `#F6F6F6` / YAML `#f6f6f6`
- Text: `#666666`
- Radius: `4px`
- Padding: `0px 10px`
- Font: `14px / 500 Pretendard`
- Token-set use: Product-home tag link, selector home::[data-omd-capture=64]
- Use: Product-home tag link; `home::[data-omd-capture="64"]`.
- Token-set path: `tokens.components.tag-link` (`type`, `bg`, `fg`, `radius`, `padding`, `font`, `use`)
- Height: 30px (Layout; desktop-capture measurement). The same class also appears at 16px/500/37px on the home route. That is an observed route-local size record, not a generalized size scale.
- Observed: default only
- The radius `4px` is `tokens.rounded.compact`. `tokens.typography.tag.size` `14` is this control's 14px writing; the 16px/500/37px home-route record stays beside it. Those keep-path attachments are a derived editorial implementation inference from the verified surfaces; they are not Naver Webtoon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the product home |
| hover | applicable | Pointer-web destination link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination tag link can be gated; visual treatment omitted |
| loading | not-applicable | A tag link opens a destination; it commits no operation in place |
| error | not-applicable | A destination tag link does not report a failed request on itself |
| success | not-applicable | Reaching the destination is not an operation this link reports as success |

### Pagination

- Role: Best Challenge selected page
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Selected text: `#00DC64` / YAML `#00dc64`
- Selected font: `14px / 500 Pretendard`
- Selected use: Best Challenge selected page; `surface-3::[data-omd-capture="133"]`. YAML use also writes `surface-3::[data-omd-capture=133]`.
- Disabled previous: A disabled previous control is statically observed at `surface-3::[data-omd-capture="132"]` with `#000000`; no reusable disabled treatment is inferred from that single observation. Token-set states: `static disabled previous control observed separately with #000000; no general disabled rule`.
- Token-set fg: `#00dc64`
- Token-set font: `14px / 500 Pretendard`
- Token-set use: Best Challenge selected page, selector surface-3::[data-omd-capture=133]
- Token-set path: `tokens.components.pagination` (`type`, `fg`, `font`, `states`, `use`)
- Observed: selected page, and a static disabled previous control that is not a generalized disabled rule
- `14px / 500 Pretendard` on this control is not `tokens.typography.tag.size` `14`. That keep-path disambiguation is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured selected page on Best Challenge |
| hover | applicable | Pointer-web page selector; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A previous control is statically observed with `#000000`; no reusable disabled treatment is inferred from that single observation |
| loading | not-applicable | A page selector opens another page; it commits no operation in place |
| error | not-applicable | A page selector does not report a failed request on itself |
| success | not-applicable | Reaching the selected page is not an operation this control reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The capture establishes a 1440×900 view of three public product routes, not a responsive layout system. Observed geometry includes a 35px header search input, a 39px creator entry, 21px content tabs, 30px and 37px tag links, and a 45px green weekday heading. It does not establish breakpoints, a reusable grid, poster aspect ratios, sticky behavior, or reader layout rules.

No responsive viewport comparison was supplied. The reference makes no breakpoint, touch-target, image-ratio, or mobile-reader assertion.

The 35px, 39px, 21px, 30px, 37px, and 45px figures stay on the 1440×900 view of the three public product routes that established them. Reading those figures under the source's own "1440×900 view of three public product routes, not a responsive layout system" and "No responsive viewport comparison was supplied" sentences, rather than as a breakpoint system, is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The supplied evidence contains Korean product labels but no official voice guide or verified product-copy inventory. No reusable tone rule, do/don't table, or sample copy is asserted.

The "Korean product labels" sentence and the "no official voice guide or verified product-copy inventory" limit are the source's own. Classifying that reading as not a complete product-microcopy guide is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Naver Webtoon-authored or a separately published UI specification.

- hover color, error color, dark reader surface, shadow ladder, and universal brand palette
- hover, pressed, focus, menu, dialog, error, toast, responsive, card, thumbnail, reading-viewer, and checkout visual treatments
- loading, empty, success, skeleton treatments
- breakpoints, a reusable grid, poster aspect ratios, sticky behavior, and reader layout rules
- breakpoint, touch-target, image-ratio, or mobile-reader assertion
- duration, easing, animation, and reduced-motion behavior
- official voice guide, verified product-copy inventory, reusable tone rule, do/don't table, and sample copy
- logo-color assertions, universal spacing/radius rules, and a reusable disabled treatment beyond the static previous-control observation
- `Pretendard Variable`, `hind`, `NanumBarunGothic`, `NanumSquare`, and `Volte` as UI-family tokens
- `나눔고딕` as a product family token
- getdesign.md / styles.refero.design records (the source names both lookups as no usable record)
