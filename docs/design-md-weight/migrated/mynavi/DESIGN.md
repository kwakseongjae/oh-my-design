# マイナビ Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

マイナビ (Mynavi) is a Japanese information and service company that supports people across work, learning, and everyday life: its public company material names employment, career change, part-time work, recruitment, and media among those domains. This contract covers the three first-party public surfaces the source inspected on 2026-07-13: the corporate public home at `https://www.mynavi.jp/`, the public service directory at `https://www.mynavi.jp/service/`, and company information at `https://www.mynavi.jp/company/`. Official company/history/purpose material at `https://www.mynavi.jp/company/history/`, `https://www.mynavi.jp/recruit/career/company/purpose/`, and `https://www.mynavi.jp/company/message/` is named for brand history, current direction, purpose, and values; it does not supply computed visual tokens. The Mynavi News logo feature at `https://news.mynavi.jp/article/font_quiz-2/` is named for logo-lettering context; it does not establish a downloadable or licensed UI font. Treating those three public corporate-home, service-directory, and company-information routes as this contract's token surfaces, keeping the official history/purpose/message pages as narrative context that does not supply computed visual tokens, keeping the News feature as logo-lettering context that does not establish a downloadable or licensed UI font, and keeping the three public source domains distinct from unobserved service flows, are derived editorial implementation inferences from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

The corporate web presence is restrained and information-led. The supplied 2026-07-13 capture repeats a deep blue-grey `#323746` for ordinary reading text, leaves large areas unfilled, and uses concise blue `#0071BB` section emphasis rather than a broad decorative palette. Repeated public body ink `#323746`, with isolated black page-title and blue corporate-heading roles. Flat, square-to-small-radius public structures; the captured tab is `4px` and all promoted samples have no shadow. A loaded `Noto Sans JP` title family on two page titles, separate from the unresolved general system stack. The hex values, the isolated black and blue heading roles, the captured tab `4px`, the no-shadow samples, and the loaded `Noto Sans JP` title family are the source's own. Readings of that captured layer as restrained and information-led, as large areas left unfilled, as concise blue section emphasis rather than a broad decorative palette, and as a public site that feels like a directory for a many-service group rather than evidence for a single logged-in product interface, are a derived editorial implementation inference from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Mynavi’s public history places the company’s roots in publishing and records the launch of employment information services before the later unification of its job-information portal under the Mynavi brand in 2007. The 2011 corporate rename extended that unification beyond the portal into the company identity; the company’s own history records the 2007 unification of its job-information portal under the Mynavi brand and the 2011 company-name change from Mainichi Communications. Today, the company describes its work as supporting many forms of “me” across work, learning, and life. Its public purpose is to engage with each person’s possibilities and make a world where the future can be seen; its current top message frames the direction as evolving into a social innovator that co-creates the future through people and technology, and its current leadership message describes an evolution toward a social innovator that co-creates the future with people and technology. For interface work, that is a narrative constraint rather than a token source: show paths and information without claiming a single, universal destination for every visitor. Official history and the leadership message provide that narrative context; they do not by themselves supply interface tokens. Treating that publishing-to-portal history, the 2007 unification, the 2011 rename from Mainichi Communications, the many forms of “me”, the public purpose, the social-innovator direction, and the closing narrative constraint as official context that does not by itself supply interface tokens, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured public surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

- Read public corporate-home body and list text on `https://www.mynavi.jp/`.
- Browse the public service directory at `https://www.mynavi.jp/service/` using the captured service filter tab (`tab-show-item`).
- Read company information at `https://www.mynavi.jp/company/`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as stakeholder archetypes derived only from Mynavi’s publicly named service areas; they are not research personas or claims about actual users, so those archetypes are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. Dropping those archetypes rather than promoting them, carrying no demographic segment list, and refusing to treat the dropped figures as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's §1 bullets. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

- Repeated public body ink `#323746`, with isolated black page-title and blue corporate-heading roles
- Flat, square-to-small-radius public structures; the captured tab is `4px` and all promoted samples have no shadow
- A loaded `Noto Sans JP` title family on two page titles, separate from the unresolved general system stack
- Three public source domains—corporate home, service directory, and company information—kept distinct from unobserved service flows
- The logo’s custom lettering is described in a first-party Mynavi News feature; it is brand-asset context, not a reusable UI font token

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Mynavi-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Meet the individual possibility.** Present choices as paths to explore, not prescriptions.
   *UI implication:* use descriptive labels and preserve comparison or return paths where the relevant product supports them.
2. **Make the future visible.** Explain what a service helps a person do before asking for a decision.
   *UI implication:* pair action labels with concise context rather than relying on generic “continue” language.
3. **Respect diverse values.** The official values include gratitude, respect, and acceptance of diverse viewpoints.
   *UI implication:* avoid exclusionary defaults and keep language considerate of different situations.
4. **Connect people and society.** The company values the ability to connect and involve people.
   *UI implication:* surface the relationship between a service, its audience, and the next useful resource when that relationship is evidenced.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

- Keep `#323746` as the observed public reading color when reproducing these corporate pages.
- Use `Noto Sans JP` only for the captured `40px` page-title role when its webfont is available.
- Keep the `#DDDDDD` tab’s 4px radius and 38px measured height tied to the service-directory context.
- Treat the corporate, service-directory, and company-information pages as separate public source domains.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

- Do not label the unresolved Yu Gothic/system stack as a Mynavi proprietary font or silently substitute it for `Noto Sans JP`.
- Do not turn the company-heading `#0071BB` into a universal product CTA or semantic blue.
- Do not infer tab selection, hover, focus, disabled, error, or responsive states from the default-only capture.
- Do not treat cookie-consent controls or an adjacent link-shaped element as a verified Mynavi component system.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Taking those role names from the source's own token-set keys, pairing each hex to the token-set path named beside it, keeping YAML `#0071bb` beside the §2 spelling `#0071BB` on the same local heading rather than as a universal product CTA, keeping YAML `#dddddd` beside `#DDDDDD`, keeping YAML `#e7f6fd` beside `#E7F6FD`, keeping catalog `primary_color` `#0071bb` on the identity pointer rather than merged into an action role, and leaving orange and green one-pixel heading rules, a dark `#3D3D3D` link-shaped control, and cookie-consent controls out of the shared palette, are derived editorial implementation inferences from the verified surfaces; they are not Mynavi-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Body ink** (`#323746`): `tokens.colors.body`. Repeated on the corporate-home body and public list text.
- **Page-title ink** (`#000000`): `tokens.colors.heading`. Observed on service-directory and company-information `h1` titles.
- **Corporate heading blue** (`#0071bb` / `#0071BB`): `tokens.colors.corporate-heading`. Observed on a company-information `h2`; it is a local heading value, not an asserted all-product action color. Catalog identity `primary_color` is `#0071bb`.
- **Service tab fill** (`#dddddd` / `#DDDDDD`): `tokens.colors.tab-fill`. Observed on the service-directory tab selector.
- **Information surface** (`#e7f6fd` / `#E7F6FD`): `tokens.colors.info-surface`. Observed on the `surface-3::li.txtBox` company-information block.

The supplied capture also includes orange and green one-pixel heading rules, a dark `#3D3D3D` link-shaped control, and cookie-consent controls. They are not promoted into a shared palette: the measured samples do not establish their role beyond their local selectors, and the consent control is not product evidence.

Machine tokens contain only selector-backed values from three public mynavi.jp corporate/service routes. No authenticated service, marketing-adjacent asset, or system fallback is promoted as a shared product token.

### Spacing

Unitless token-set keys from `tokens.spacing`: `list-indent: 39` · `tab-y: 2` · `tab-x: 3`.

The source restates a `39px` left inset on one corporate-home list-item pattern and a compact `2px 3px` service-tab padding; those values are retained as selector-local machine tokens, not extrapolated into a spacing scale. `tokens.spacing.list-indent: 39` is not a type size. `tokens.spacing.tab-y: 2` and `tokens.spacing.tab-x: 3` are the YAML steps for that tab padding; they are not a universal spacing scale. Keeping those key paths unmerged, and keeping the `39px` / `2px 3px` prose spellings beside the unitless YAML keys, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Shape

Unitless token-set key from `tokens.rounded`: `tab: 4`.

The captured tab is `4px`. YAML `tokens.rounded.tab: 4` and the component radius `4px` stay on that service-directory tab. They are local defaults, not a universal radius scale. Keeping the unitless `4` beside prose `4px`, and refusing a radius scale, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow.flat`: `none`. The promoted service tab and the inspected body/title samples all compute to `box-shadow: none`. This supports a flat public-surface observation only. It does not establish card elevation, dialog layering, popover shadow, or a z-index system. Reading that `none` / `box-shadow: none` pair as a flat public-surface observation rather than as a complete elevation system is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Motion

No duration, easing curve, transition property, loading animation, or interaction motion state is present in the supplied evidence. This reference deliberately provides no motion token or animation prescription. Any service-specific motion should be added only after selector-backed, relevant-surface evidence is collected. An exact motion token may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Holding that five-kind, per-component gate, and refusing a partial confirmation, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party announcement reviewed in this pass identifies a specific font as the product or app family. No such promotion is made. |
| Live computed surface-use | `Noto Sans JP` is loaded with high confidence and is the computed family on two captured `h1` page titles, each `40px / 400 / 70px`. This limited, selector-backed title role is the only font-family token in this reference. |
| Live computed system-stack use | The capture records 819 uses of `游ゴシック体, Yu Gothic, YuGothic, …, sans-serif` across body text, lists, tabs, and controls. It has no matching loaded FontFace or source URL in the artifact, so it remains unresolved and is not a brand-font token or a substitute for `Noto Sans JP`. |
| Official distributed brand asset | A first-party Mynavi News feature says the logo lettering was created from scratch for its renewal and discusses its rounded, connected character. It does not distribute a webfont, publish a licence, or establish a UI-family role. |
| Declared-only | `swiper-icons` is declared in the artifact but has no observed visible use; it is not a typography token. |
| License | No first-party font licence is recorded in the source. No licence claim is invented. |

Calling Official product-use a negative lookup rather than a published type token, calling Live computed surface-use the limited `Noto Sans JP` title role, calling the Yu Gothic stack unresolved rather than a substitute, calling the News feature brand-asset context rather than a distributed UI font, calling `swiper-icons` declared-only, and calling the missing licence line a recorded absence rather than a permission to invent, are derived editorial implementation inferences from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

### Family

- **Current visible title family:** `Noto Sans JP` — token-set path `tokens.typography.family.display`. Loaded with high confidence; computed on two captured `h1` page titles.
- **Unresolved general stack:** `游ゴシック体, Yu Gothic, YuGothic, …, sans-serif` — 819 computed uses; no matching loaded FontFace or source URL. Not a brand-font token and not a substitute for `Noto Sans JP`.
- Do not label the unresolved Yu Gothic/system stack as a Mynavi proprietary font or silently substitute it for `Noto Sans JP`. Use `Noto Sans JP` only for the captured `40px` page-title role when its webfont is available.

That title-only / unresolved-stack split, and the refusal to substitute, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use / boundary |
|---|---|---:|---:|---|---|---|
| Public body baseline | family unresolved | 14 | 400 | 1.75 | `tokens.typography.body` | Observed public corporate-home body baseline only. |
| Public page title | `Noto Sans JP` | 40 | 400 | 1.75 | `tokens.typography.display` | Observed service-directory and corporate-information page title only. |
| Company blue section heading | family unresolved | 34px | 500 | 59.5px | not in the token set | Company-information `h2`; family unresolved. |

YAML line heights stay unitless ratios: `1.75` on both body and display (A1a). They are never converted to a replacement px. The source §3 table writes the same roles with a px suffix; those spellings stay beside the unitless YAML sizes and are not a conversion of them: Public body baseline `14px` / 400 / `24.5px`; Public page title `40px` / 400 / `70px`. The company blue section heading `34px` / 500 / `59.5px` is a §3-only row; it is not a `tokens.typography.*` key. Keeping the two token-set roles on their paths, keeping YAML `use` verbatim, keeping the §3 px spellings beside the YAML sizes, and keeping the §3-only heading off the token-set keys, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

### Assets

- Catalog identity pointer the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=mynavi.jp&sz=128`. That URL is a third-party favicon-proxy, not a Mynavi-hosted brand file.
- Logo lettering: a first-party Mynavi News feature says the lettering was created from scratch for its renewal and discusses its rounded, connected character. Brand-asset context, not a reusable UI font token, not a downloadable font, and not a published licence.

Reading the Google s2 slug as a catalog identity pointer rather than a Mynavi-hosted brand file, and reading the News feature as logo-lettering context rather than a UI-family token, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied evidence preflight contains three public surfaces, coverage score 66, 30 component variants, and 0 interaction records. The collector classifies many repeated public rows as `listItem`, and it identifies a selector-backed `tab-show-item` anchor on the service directory. Only the latter is promoted because it carries a static fill, foreground, radius, padding, and height at one exact selector. Rows, links, buttons, and third-party consent controls without a narrower role boundary remain raw evidence rather than inferred components. Promoting only that selector-backed tab, and leaving the remaining controls as raw evidence rather than inferred components, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

The artifact records zero interactions and zero observed states. No hover, focus, pressed, selected, disabled, validation, toast, dialog, or mobile variant is claimed. The static default geometry remains useful and is retained. Reading that static default as remaining useful, and retaining it on that ground, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification. YAML `tokens.components.service-filter-tab.states`: Default static baseline observed; the supplied capture records 0 interactions and no changed tab state.

The supplied capture does not verify product state copy or visual state treatments. The following implementation prompts are illustrative, not Mynavi facts, and should be replaced with source-backed product copy when a specific service surface is available.

| Category | Illustrative implementation prompt |
|---|---|
| Empty | Explain what is absent and name a useful next route. |
| Loading | Keep the current context visible while content is being prepared. |
| Error — retrieval | Say what could not be loaded and offer a retry when supported. |
| Error — input | Identify the field or condition that needs attention without blame. |
| Error — access | Explain the access boundary and name an available alternative. |
| Success | Confirm the completed action and state the next available step. |
| Skeleton | Reserve the same content hierarchy without inventing a branded shimmer treatment. |
| Disabled | Explain the condition that enables the action where the product supports it. |
| No results | Preserve the search or filter context and offer an adjustment path. |
| Offline | State the connection limitation and preserve any safely available information. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless — a filter tab that commits no operation in place — and the reason given is always that semantic one. A `Primitive type` line is attached only when the source YAML records that type on that component. Treating the illustrative §14 rows as the source's own prompts rather than as measured treatments is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Service filter tab

- Role: service-directory filter tab
- Primitive type: `tab` · Kind: interactive
- YAML `type: tab` on `tokens.components.service-filter-tab.type`
- Anatomy: label
- Background: `#dddddd` / `#DDDDDD`
- Text: `#000000`
- Radius: 4px
- Padding: 2px 3px
- Height: 38px
- Token-set path: `tokens.components.service-filter-tab`
- Token-set type: `tab`
- Token-set use: Service-directory filter tab at surface-2::[data-omd-capture="14"] (class tab-show-item).
- Observed: default only. YAML states: Default static baseline observed; the supplied capture records 0 interactions and no changed tab state.

Keep the `#DDDDDD` tab’s 4px radius and 38px measured height tied to the service-directory context. Keeping those measurements bound to that captured context is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured static default on the service directory |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Filter-tab selection does not itself carry loading presentation |
| error | not-applicable | Filter-tab selection does not itself present validation or retrieval failure |
| success | not-applicable | Filter-tab selection does not itself present completion feedback |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture is desktop-only at 1440×900. It supports a `39px` left inset on one corporate-home list-item pattern and a compact `2px 3px` service-tab padding; those values are retained as selector-local machine tokens, not extrapolated into a spacing scale. No authenticated-app grid, breakpoint, mobile navigation, or form layout is established by the three public routes.

Corporate public home uses body ink, body metrics, and one list inset; it does not establish a career-search or account-flow UI. Public service directory uses the loaded title font, page title, and measured static tab; it does not establish a selected/interactive tab state or a shared product component library. Corporate information uses the blue section heading and pale information surface; it does not establish a global product palette.

Reading `1440×900` as the collector's capture size rather than as a breakpoint system, keeping the `39px` inset and `2px 3px` padding as selector-local rather than as a spacing scale, and keeping the three source-domain rows as the source's own boundary table rather than as a new domain inventory, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official purpose and company material suggest a register that is individual-facing, respectful, and future-oriented: it speaks about meeting each person’s possibilities while explaining a broad group of services. This is contextual guidance, not a published UI copy system. That register reading, and the table below as the source's own recommended register rather than a complete product-microcopy guide, are a derived editorial implementation inference from the verified surfaces; they are not Mynavi-authored or a separately published UI specification.

| Use | Recommended register | Avoid |
|---|---|---|
| Career or life guidance | Clear, supportive, non-presumptive | Assuming one correct life path |
| Service directories | Direct labels and useful categorisation | Vague, promotional superlatives |
| Corporate progress | Specific about change and collaboration | Treating technology as the only actor |

Illustrative, not verified live copy: “Find the service that fits your next step.” · “Explore options at your own pace.” · “Let’s make the next possibility visible.”

Published strings the source records, kept byte-exact:

- マイナビ
- Mynavi
- Mainichi Communications
- Noto Sans JP
- 游ゴシック体
- Yu Gothic
- YuGothic
- tab-show-item
- Find the service that fits your next step.
- Explore options at your own pace.
- Let’s make the next possibility visible.

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, reading the three illustrative lines as the source's own “Illustrative, not verified live copy” rather than as official UI copy, and keeping `マイナビ` beside `Mynavi` rather than as a replacement, is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unnamed or that this migration omitted at the smallest value boundary. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Mynavi-authored or a separately published UI specification.

- Yu Gothic / system stack as a Mynavi proprietary font
- official product or app family
- downloadable or licensed UI font
- hover, focus, pressed, selected, disabled, validation, toast, dialog, or mobile variant on the service filter tab
- selected/interactive tab state or a shared product component library
- career-search or account-flow UI
- authenticated-app grid, breakpoint, mobile navigation, or form layout
- global product palette
- orange and green one-pixel heading rules, `#3D3D3D` link-shaped control, and cookie-consent controls as a shared palette or component system
- card elevation, dialog layering, popover shadow, or a z-index system
- duration, easing curve, transition property, loading animation, or interaction motion state
- authenticated service, marketing-adjacent asset, or system fallback as a shared product token
- `swiper-icons` as a typography token
