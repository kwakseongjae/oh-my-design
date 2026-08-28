# KakaoBank Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

KakaoBank (카카오뱅크) is an internet bank that presents financial services as part of ordinary mobile life. This contract covers the three first-party public surfaces the source inspected for tokens on 2026-07-12: the corporate home at `https://www.kakaobank.com/`, the public service page at `https://www.kakaobank.com/view/service`, and the official brand-resource page at `https://www.kakaobank.com/view/about/brand/resource`. The YAML token-set note records a fresh corporate home, service, and official brand-resource capture: brand identity and public web measurements are promoted; native banking-product controls are not inferred. The official KakaoBank Brand Resource at that brand-resource URL, and the official identity guide `https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf`, publish symbol, wordmark, and brand-color guidance; the source states that this identity resource does not substitute for native banking-product UI evidence. Every value stays attached to the surface that established it. Reading those three inspected routes as this contract's token surfaces, keeping values attached to the surface that established them, and treating the Brand Resource and V2.0 identity guide as named identity sources that do not automatically supply native banking-product controls, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

The corporate site expresses that breadth with unusually little banking ornament: a white canvas, black type, pale-gray sections, very large Korean headings, and only selective use of the protected KakaoBank Yellow. The result feels digitally accessible while retaining the clarity and restraint expected from a regulated financial institution. That restraint is the distinctive system. The official brand resource defines KakaoBank Yellow as `#FFE300`, alongside black, white, and a narrow neutral palette, and warns against nearby substitute yellows. Yet the current public corporate surface is mostly monochrome. Yellow identifies KakaoBank; it is not proof that every banking CTA, card, success state, or app control uses yellow. The current product page organizes the catalog through large editorial sections and simple service tabs, while the brand-resource page explains the symbol, wordmark, and color system as protected identity assets. The hex values, the monochrome pairing, the heading scale, and the three-surface split are recorded. Calling the public layer restrained and digitally accessible while retaining the clarity expected of a regulated financial institution, calling that restraint the distinctive system, and reading yellow as identity rather than proof that every banking control uses yellow, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

Pretendard Variable carries all visible public UI and editorial roles. It loaded from KakaoBank's own domain and appeared across 645 elements, from the 90px home hero to 14px navigation and 16px body text. Brand character comes from scale, disciplined yellow, and product imagery rather than a proprietary display face. The family name, the 645-element count, and the 90px / 14px / 16px sizes are recorded. Reading brand character as coming from scale, disciplined yellow, and product imagery rather than a proprietary display face is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. KakaoBank positions banking as a digital product embedded in everyday routines. The official symbol explains a bank centered on the individual, while the service catalog shows continuous expansion from basic accounts into youth, business, investment, global, and AI-related offerings. The visual identity balances Kakao-family recognition with the restraint expected of a bank: one unmistakable yellow, then a large field of neutral structure. This system allows the company to speak both as a consumer product and as a financial institution. Large Korean headings make service categories approachable; monochrome navigation and pale-gray sections keep attention on information rather than decoration. The protected wordmark and exact yellow establish ownership, but they do not dictate the geometry of native transfers, account cards, or compliance flows. Those product layers require their own evidence. The public-story span of deposits, savings, loans, investment, foreign exchange, cards, business banking, youth products, and newer AI-led service exploration; the official-symbol sentence; the catalog expansion; the one-yellow-then-neutral structure; and that closing pair of sentences — ownership from the wordmark and exact yellow, and product layers requiring their own evidence — are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, and classifying them as first-party task contexts rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification. Each is a first-party task context the source records. They are not fictional biographies.

- An individual comparing everyday banking services.
- A young user or guardian exploring KakaoBank mini.
- A business owner reviewing business banking options.
- A visitor seeking official company, ESG, investor, or brand information.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source establishes first-party task contexts only and leaves project-specific names, ages, balances, credit profiles, income, risk tolerance, and success metrics unspecified. No name, age, city, balance, or affiliation classification is carried into this document or its sidecar. What the source independently records as publicly observable groups is those same first-party contexts: an individual comparing everyday banking services; a young user or guardian exploring KakaoBank mini; a business owner reviewing business banking options; a visitor seeking official company, ESG, investor, or brand information. Refusing to promote individual personas, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not KakaoBank-authored or a separately published UI specification.

- Official single-yellow identity: `#FFE300`, not neighboring Kakao-family yellows
- White and pale-gray corporate canvas with black-first typography
- Pretendard Variable loaded across every observed text role
- 90px/800 home hero and 42px/700 service-page title
- Flat public components with 0px navigation/tab geometry and 6px black actions
- Explicit separation between public corporate evidence and native banking-product UI

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Put the individual at the center.** Organize information around the user's task, not the bank's internal structure.
2. **Use yellow with discipline.** Exact brand recognition is stronger than broad decorative use.
3. **Make finance readable.** Strong Korean typography and generous rhythm should reduce cognitive load.
4. **Do not confuse brand with product evidence.** A CI guide cannot authorize native transfer controls.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

- Use exact `#FFE300` when the role is an official KakaoBank identity role.
- Preserve Pretendard Variable's observed Korean-first metrics and tracking.
- Keep the corporate web surface restrained and largely monochrome.
- Distinguish official identity, public service marketing, and native banking evidence.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

- Do not substitute `#FEE500`, `#FAE100`, or another Kakao-family yellow.
- Do not infer a Yellow CTA or transfer component from a brand swatch.
- Do not fabricate app error, success, account, badge, or sheet components.
- Do not turn the public corporate site into a Kakao Friends-heavy app mockup.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping official `#FFE300` beside token-set `#ffe300`, keeping `#007AFF` off the promoted set, and attaching surfaces from the YAML claim anchors rather than from the role name, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Surface attachments follow the YAML claim anchors, not the role name.

- **KakaoBank Yellow** (`#ffe300` / `#FFE300`): official primary identity color and protected brand specification. Token-set path `tokens.colors.primary`. Claim surface: brand.
- **Canvas** (`#ffffff`): dominant current public pairing with foreground. Token-set path `tokens.colors.canvas`. Claim surface: home.
- **Foreground** (`#000000`): dominant current public pairing with canvas. Token-set path `tokens.colors.foreground`. Claim surface: home.
- **Secondary** (`#888888`): repeated supporting navigation and footer text. Token-set path `tokens.colors.secondary`. Claim surface: home.
- **Body gray** (`#444444`): service and brand-resource explanatory text. Token-set path `tokens.colors.body`. Claim surface: service.
- **Section surface** (`#f7f7f7`): current quiet public section fill. Token-set path `tokens.colors.surface`. Claim surface: home.
- **Divider** (`#e6e6e6`): public service and brand-spec boundaries. Token-set path `tokens.colors.divider`. Claim surface: brand.

Earlier `#E02000`, `#0FBE6C`, `#FF9800`, input, placeholder, and native state roles are not retained. The live public site exposed `#007AFF` on small web controls, but its semantic product role was not clear enough to promote.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. Surface attachments follow the YAML claim anchors.

| Step | Value | Token-set path | Claim surface |
|---|---:|---|---|
| xs | 8 | `tokens.spacing.xs` | home |
| sm | 12 | `tokens.spacing.sm` | home |
| md | 16 | `tokens.spacing.md` | home |
| lg | 24 | `tokens.spacing.lg` | service |
| xl | 40 | `tokens.spacing.xl` | brand |

`tokens.spacing.md: 16` is not `tokens.rounded.section: 16`, not the 16px body size, not the 16px/400 service-tab or resource-download or brand-spec-row font, and not the service-tab padding `16px 0`. `tokens.spacing.lg: 24` is not the brand-spec-row line-height `24px`. `tokens.spacing.xs: 8` is not a type size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Claim surface for all three steps: home.

| Step | Value | Token-set path |
|---|---:|---|
| action | 6 | `tokens.rounded.action` |
| section | 16 | `tokens.rounded.section` |
| full | 9999 | `tokens.rounded.full` |

`tokens.rounded.action: 6` is the YAML action step. The black-action and resource-download components record `6px` on those controls. `tokens.rounded.section: 16` is not `tokens.spacing.md: 16`. `tokens.rounded.full: 9999` is a step. Navigation and tab geometry stay at `0px` on those components; that `0px` is not a YAML rounded step. Keeping those local radii on their components, and keeping `full: 9999` on its own key path, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

### Elevation

The promoted public system is shadow-free. Separation comes from white/pale-gray surfaces, `#e6e6e6` rules, and typographic scale. No sheet, card, or focus shadow is promoted for native banking UI. Reading that stack as flat public layering, and keeping sheet/card/focus shadows off the promoted set, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

### Motion

No reusable duration or easing curve is promoted. Public interaction capture establishes state presence, not native banking motion behavior. Treating that capture as a state record rather than a motion token, and leaving reduced-motion behavior unnamed, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | KakaoBank's current public home, service, and brand-resource pages establish Pretendard Variable. |
| Live surface-use | Pretendard Variable loaded/high across 645 visible elements from KakaoBank's first-party WOFF2. |
| Official distributed asset | The public webfont is first-party delivered; the KakaoBank wordmark remains a protected identity asset rather than a font. |
| Declared-only | `swiper-icons` was declared with zero visible text use. |
| Unresolved class | Native iOS/Android banking flows and device-specific typography remain unresolved. |

Reading the wordmark as protected artwork rather than a font, classing `swiper-icons` as declared-only rather than a brand face, and leaving native iOS/Android banking typography unresolved, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard Variable` — Token-set path `tokens.typography.family.ui`. Claim surface: home.

Do not replace Pretendard Variable with a system substitute, and do not present a fallback as Pretendard Variable. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. Surface attachments follow the YAML claim anchors. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, and attaching surfaces from the YAML claim anchors, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | Claim surface |
|---|---|---:|---:|---|---|---|---|
| Corporate hero | Pretendard Variable | 90px | 800 | 1.3 (117px) | -0.9 (-0.9px) | Current corporate home hero | home |
| Service display | Pretendard Variable | 42px | 700 | 1.24 (52.08px) | -0.84 (-0.84px) | Current service page title | service |
| Section heading | Pretendard Variable | 32px | 700 | 1.36 (43.52px) | -0.64 (-0.64px) | Current public service section heading | service |
| Card heading | Pretendard Variable | 24px | 700 | 1.44 (34.56px) | -0.48 (-0.48px) | Current public service and brand-resource card heading | service |
| Body/list | Pretendard Variable | 16px | 400 | 1.5 (24px) | normal | Current public body and list text | home |
| Top navigation | Pretendard Variable | 14px | 600 | 1.5 (21px) | -0.14 (-0.14px) | Current top navigation | home |

The 90px hero is the home hero. The 42px / 700 title is the service-page title; it is not the 42px-tall corporate black-action. The 16px body size is not `tokens.spacing.md: 16`. The 14px navigation size is not a spacing step. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or the 42px-tall black-action, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

### Assets

- Official identity assets the source names: the symbol, the wordmark, and KakaoBank Yellow on the brand-resource page and in `KakaoBank_BrandIdentityGuidelines_V2.0.pdf`.
- Catalog identity pointer: `logo.type: simpleicons`, `logo.slug: kakaotalk`. That slug is an identity pointer, not a KakaoBank-hosted brand file and not a substitute for the protected wordmark. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

Top navigation exposed focus, hover, and pressed states. One current service control exposed a disabled state, but its semantic role was insufficient for promotion. Native loading, empty, transfer success, transfer failure, identity verification, and destructive states remain absent.

Yellow native CTAs, account cards, transfer inputs, status badges, notifications, bottom sheets, and app tabs are intentionally absent until a current inspectable native-product path establishes them.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; the observed Focus on top navigation is recorded as that observed state, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination navigation item or a tab that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Top navigation

- Role: Current corporate top navigation item
- Primitive type: `button` · Kind: interactive
- Background: `transparent`
- Text: `#000000`
- Radius: `0px`
- Padding: `0 20px`
- Height: `62px`
- Font: `14px / 600`
- Token-set use: `Current corporate top navigation item`
- Observed: focus, hover, and pressed captured. The observed Focus is not a `focus-visible` treatment.
- Claim surface: home

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web navigation item; hover captured |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A navigation item can be gated; visual treatment omitted |
| loading | not-applicable | Destination navigation item; it commits no operation in place |
| error | not-applicable | Destination navigation item; it commits no operation in place |
| success | not-applicable | Destination navigation item; it commits no operation in place |

### Service-category tab

- Role: Current public service-category tab
- Primitive type: `tab` · Kind: interactive
- Background: `transparent`
- Text: `#000000`
- Border: `0 0 1px #e6e6e6`
- Radius: `0px`
- Padding: `16px 0`
- Height: `62px`
- Font: `16px / 400`
- Token-set use: `Current public service-category tab`
- Observed: default captured; no reusable selected style promoted
- Claim surface: service
- The 62px height is this tab's geometry. It is not the top-navigation 62px. The `16px 0` padding is this tab's padding. It is not `tokens.spacing.md: 16`. Reading those figures as this tab's geometry rather than the top-navigation 62px or `tokens.spacing.md: 16` is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted. The source's one disabled service control is not promoted onto this tab. |
| loading | not-applicable | A service-category tab commits no operation in place |
| error | not-applicable | A service-category tab commits no operation in place |
| success | not-applicable | A service-category tab commits no operation in place |

### Corporate black action

- Role: Current corporate high-emphasis action
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `9.5px 18px`
- Height: `42px`
- Font: `15px / 600`
- Token-set use: `Current corporate high-emphasis action`
- Observed: default captured; no reusable hover or pressed value promoted
- Claim surface: home
- The 42px height is this action's geometry. It is not the 42px service-page title. Reading that height as this action's geometry rather than the service-page title is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | A high-emphasis action can be gated; visual treatment omitted |
| loading | applicable | High-emphasis action is an in-place commit; visual treatment omitted |
| error | applicable | A failed commit can be reported on this control; visual treatment omitted |
| success | applicable | A completed commit can be reported on this control; visual treatment omitted |

### Brand-resource download

- Role: Current official brand-resource download action
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `10px 16px 10px 20px`
- Height: `43px`
- Font: `16px / 400`
- Token-set use: `Current official brand-resource download action`
- Observed: default captured; no reusable hover or pressed value promoted
- Claim surface: brand
- The 43px height is this download action's geometry. The `10px 16px 10px 20px` padding is this control's padding. The 16px in that padding is not `tokens.spacing.md: 16`. Reading those figures as this control's geometry rather than `tokens.spacing.md: 16` is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable download control; visual treatment omitted |
| disabled | applicable | A download action can be gated; visual treatment omitted |
| loading | applicable | Download is an in-place commit; visual treatment omitted |
| error | applicable | A failed download can be reported on this control; visual treatment omitted |
| success | applicable | A completed download can be reported on this control; visual treatment omitted |

### Brand specification row

- Role: Current official brand specification row
- Primitive type: `listItem`
- Background: `transparent`
- Text: `#000000`
- Border: `1px 0 0 #e6e6e6`
- Radius: `0px`
- Padding: `10px 0`
- Font: `16px / 400 / 24px`
- Token-set use: `Current official brand specification row`
- Claim surface: brand
- The `24px` in the font shorthand is this row's line-height spelling. It is not `tokens.spacing.lg: 24`. Reading that `24px` as this row's line-height spelling rather than `tokens.spacing.lg: 24` is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Use large type and generous vertical rhythm to explain complex financial categories. Keep public navigation and tabs geometrically flat; hierarchy comes from placement and weight. Use `#f7f7f7` for section-level grouping instead of elevated cards. Apply KakaoBank Yellow at verified identity moments, not as ambient chrome. Keep official brand-resource layouts separate from banking-task layouts. These five layout rules are the source's own list. Reading them as the layout contract for the three inspected public surfaces, rather than as a native banking-task layout, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

The public routes preserve their typographic hierarchy and section grouping while content reflows. Exact mobile-app navigation, banking-task breakpoints, device safe areas, and native keyboard behavior remain unresolved.

The 62px top-navigation and service-tab heights, the 42px corporate black-action, the 43px brand-resource download, and the 90px home hero are measurements on the surfaces named beside them. Reading those heights as surface measurements rather than cross-viewport specifications is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

KakaoBank's public voice makes finance feel ordinary and useful. It favors direct Korean nouns and verbs, names the service category clearly, and explains benefits without institutional ceremony. Service descriptions should state who a product is for, what financial task it supports, and what the visitor can learn next. Corporate and brand material may be more declarative, while compliance or Help content must stay precise and unambiguous. Avoid playful copy where money movement, identity, or risk is involved. Do not invent rates, user counts, or performance claims. Reading that register as this contract's voice, rather than as a separately published KakaoBank microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

Published names the source records, kept byte-exact: KakaoBank, 카카오뱅크, KakaoBank Yellow, KakaoBank mini, Pretendard Variable, KakaoBank Brand Resource.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not KakaoBank-authored or a separately published UI specification.

- reusable duration, easing curve, and reduced-motion behavior
- reusable hover or pressed values on the corporate black action and the brand-resource download
- reusable selected style on the service-category tab
- semantic product role for live `#007AFF` on small web controls
- earlier `#E02000`, `#0FBE6C`, `#FF9800`, input, placeholder, and native state roles
- native loading, empty, transfer success, transfer failure, identity verification, and destructive states
- Yellow native CTAs, account cards, transfer inputs, status badges, notifications, bottom sheets, and app tabs
- exact mobile-app navigation, banking-task breakpoints, device safe areas, and native keyboard behavior
- native iOS/Android banking flows and device-specific typography
