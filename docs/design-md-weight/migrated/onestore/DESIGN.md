# 원스토어 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

원스토어 is a Korean mobile-content marketplace spanning games, apps, and story content. Catalog homepage identity is `https://m.onestore.co.kr/`. Catalog `primary_color` is `#2a1f60`. This contract covers the five first-party public surfaces the source inspected on 2026-07-13: the consumer storefront at `https://m.onestore.co.kr/`, `https://m.onestore.co.kr/v2/ko-kr/game`, `https://m.onestore.co.kr/v2/ko-kr/about/oneplay`, `https://m.onestore.co.kr/v2/ko-kr/app/0000117501/about`, and the developer portal at `https://dev.onestore.net/dev`. Token note from the source, kept as written: Machine tokens are limited to selector-backed values from the supplied One Store storefront and developer-portal capture. Corporate brand, font, and developer-support material remain separate evidence domains. Official company history at `https://www.onestorecorp.com/about/corp/`, customer commitment at `https://onestorecorp.com/sv/ccm/`, developer-support material at `https://onestorecorp.com/sv/fordev/`, the corporate brand gallery at `https://www.onestorecorp.com/brand/`, the official font page at `https://www.onestorecorp.com/sv/fordev_font/`, and the 2021 font announcement at `https://onestorecorp.com/news/presskit/2021/2021-05-17.html` are named first-party sources; they do not supply the interface tokens below. Treating those five inspected routes as this contract's surfaces, keeping machine tokens limited to the storefront and developer-portal capture, and keeping corporate brand, font, and developer-support material as separate evidence domains that do not supply the interface tokens below, are derived editorial implementation inferences from the verified surfaces; they are not One Store-authored or a separately published UI specification.

The supplied capture shows a deliberately split public ecosystem rather than one universal UI: the consumer storefront is a mostly white, black-text surface with a sparse dark-purple background occurrence, while the separately captured developer portal uses conventional square system controls. The official corporate brand gallery, free mobile-font program, developer-support material, and storefront are related but distinct domains; this reference keeps their evidence boundaries intact. [Company history](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/). The five URLs, the token note, the white/black baseline, the sparse dark-purple observation, and the square developer controls are the source's own. Readings of that captured layer as a deliberately split public ecosystem rather than one universal UI, of the storefront as a mostly white, black-text surface with a sparse dark-purple background occurrence, of the developer portal as conventional square system controls, and of those four domains as related but distinct, are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. It was launched in 2016 by combining the three mobile-carrier app markets with Naver App Store, after the T Store business moved from SK Planet to One store Co., Ltd. Its official company narrative calls for a platform that is closer, more open, and more fun, and its current public messaging centres on “쏠쏠하게 앱하다” and enjoyable game life. One Store traces its operating history to the 2016 transfer of T Store from SK Planet, its company establishment, and the launch that combined the three mobile-carrier app markets with Naver App Store. That origin explains the platform’s explicit concern with both consumers and content partners rather than a single retail category. The company’s current description centres games, apps, and story content, seeking a more open and enjoyable platform experience. [Company history](https://www.onestorecorp.com/about/corp/). The current story also has an ecosystem dimension. The company records a 2024 investment/cooperation arrangement with Digital Turbine for overseas expansion, while its developer-support program describes long-running support for mobile-game developers and creator pathways. These are corporate and partner-program facts, not evidence that the public storefront or developer portal shares a single component system. [Company history](https://www.onestorecorp.com/about/corp/) · [Developer support](https://onestorecorp.com/sv/fordev/). In 2021, the company made three mobile fonts publicly available and described them as suitable for commercial use. That release expands its brand-asset footprint, but no supplied loaded-font evidence connects the fonts to the captured consumer storefront. [Font release](https://onestorecorp.com/news/presskit/2021/2021-05-17.html). The years 2016 / 2021 / 2024, T Store, SK Planet, One store Co., Ltd., the three mobile-carrier app markets, Naver App Store, Digital Turbine, the three last sentences of those narrative paragraphs, and the official messaging lines are the source's own recordings of first-party pages. Classifying that official-history narrative as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured surface or control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

- Use the consumer storefront at `https://m.onestore.co.kr/` spanning games, apps, and story content.
- Use the captured developer-portal GeneralButton (`GeneralButton-module__box___leAwc.large`).
- Use the captured developer-portal LoginField (`LoginField-module__loginField___7ReTE`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. Official company language names creators, consumers, and developers. The origin paragraph also names consumers and content partners. Use those source wordings only. Dropping that persona section rather than promoting it, carrying no affiliation classification or motivation, and using only those source wordings, are derived editorial implementation inferences from the verified surfaces; they are not One Store-authored or a separately published UI specification.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

- Consumer storefront white canvas `#FFFFFF` / YAML `tokens.colors.canvas` `#ffffff` with foreground `#000000`
- Sparse home-route brand-surface `#2A1F60` / YAML `tokens.colors.brand-surface` `#2a1f60` / catalog `primary_color` `#2a1f60`, observed twice as a background
- Storefront secondary list text `#454545` / YAML `tokens.colors.secondary-foreground`
- Developer-portal square controls: `#EFEFEF` / YAML `#efefef` GeneralButton with `2px solid #000000`, white LoginField with `2px solid #767676`, radius `0px`
- Storefront body 15px / 400 / `1.46` (21.9px) on a computed system stack that is not a brand font
- One Store Mobile Gothic Body, Title, and POP as official distributed assets, not a verified storefront webfont

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification. The numbered stems rest on official company sentences the source attributes to first-party pages. Every *UI implication* below is the source's own editorial reading.

1. **Offer compelling choices for creators and consumers.** The official mission joins both stakeholder groups in one digital-content platform. *UI implication:* make a verified choice or benefit legible without inventing a checkout, ranking, or recommendation rule.
2. **Keep mobile content enjoyable.** The company describes a goal of more enjoyable mobile and game life. *UI implication:* use a clear, light hierarchy where actual content or benefit evidence exists; do not add decorative game tropes as a default.
3. **Support the ecosystem.** Official developer-support material describes developer, game-industry, and creator programs. *UI implication:* distinguish developer-facing controls from consumer-storefront patterns instead of collapsing them into one UI kit.
4. **Put customers first.** The company’s customer commitment calls for understanding what customers want and acting on feedback. *UI implication:* communicate confirmed outcomes and boundaries plainly; do not hide missing state evidence behind generic reassurance.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification.

- Keep consumer storefront, developer portal, corporate brand assets, and font distribution as separately evidenced domains.
- Reuse the recorded developer button or input only at their documented default geometry and source surface.
- Treat One Store Mobile Gothic as an official distributable brand asset, not a verified storefront webfont.
- Preserve the measured storefront body metrics without silently substituting a claimed brand typeface.

The source's Agent Prompt Guide also records this unique constraint, kept as written: Treat One Store as a Korean mobile-content marketplace with separate storefront, developer, corporate-brand, and font-asset evidence. For the documented developer portal default, use a square #EFEFEF button with a 2px black border, 0px 20px padding, 50px height, and system Arial metrics; pair it only with the measured square white login input. Preserve the storefront’s white/black baseline and narrow #2A1F60 background observation. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification.

- Do not turn the narrow `#2A1F60` background observation into a universal CTA or product palette.
- Do not use `geistSans`, `geistMono`, `notoSansKr`, Times, Arial, Helvetica, or a system fallback as though it were an observed One Store brand UI font.
- Do not reclassify observed links/rows as buttons or infer components from generic marketplace conventions.
- Do not add hover, focus, pressed, disabled, error, selected, responsive, or motion values from this capture.

The same Agent Prompt Guide records this unique prohibition, kept as written: Do not synthesize a consumer CTA, card, brand webfont, interaction state, responsive pattern, or elevation system. Keeping that prohibition here rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Selector-backed surface values.** Pairing each hex to the token-set path named beside it, keeping YAML lowercase beside the body uppercase form, keeping `tokens.colors.brand-surface` as a narrow home-route background observation and catalog identity color rather than as a universal action color, keeping `tokens.colors.developer-surface` and `tokens.colors.developer-border` on `dev.onestore.net` rather than as the consumer marketplace palette, and not promoting `#0000EE` as a One Store brand value, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

- **Brand-surface candidate** (`#2A1F60` / YAML `tokens.colors.brand-surface` `#2a1f60` / catalog `primary_color` `#2a1f60`): observed twice as a background on the captured storefront home route. It is retained as a narrow surface observation and catalog identity color, not as a universal action color.
- **Canvas** (`#FFFFFF` / YAML `tokens.colors.canvas` `#ffffff`): observed across all five captured surfaces.
- **Foreground** (`#000000` / YAML `tokens.colors.foreground` `#000000`): the dominant observed text and border value across all five captured surfaces.
- **Storefront secondary text** (`#454545` / YAML `tokens.colors.secondary-foreground` `#454545`): repeated on home-route list items.
- **Developer control surface** (`#EFEFEF` / YAML `tokens.colors.developer-surface` `#efefef`) and **developer input border** (`#767676` / YAML `tokens.colors.developer-border` `#767676`): observed only on `dev.onestore.net`; they do not define the consumer marketplace palette.

No semantic success, error, selected, hover, pressed, or CTA color is specified. `#0000EE` appears on the developer portal, but the supplied evidence does not establish it as a One Store brand value, so it is not promoted.

### Spacing

YAML `tokens.spacing` keys, kept as separate steps (`developer-button-x: 20` is not a storefront gutter; `developer-input-y: 1` is not `developer-input-x: 2`):

- `tokens.spacing.developer-button-x`: 20
- `tokens.spacing.developer-input-y`: 1
- `tokens.spacing.developer-input-x`: 2

`developer-button-x` matches the GeneralButton padding `0px 20px`. `developer-input-y` / `developer-input-x` match the LoginField padding `1px 2px`. Keeping the three keys unmerged, and not reading them as a consumer-marketplace spacing scale, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded.square`: 0. YAML claims bind that key to store-home / selector `home::body`. It is not `tokens.components.developer-basic-button.radius` and is not `tokens.components.developer-login-input.radius`. Those two fields remain `0px` on their own component keys. Reading that rounded key as that body observation, not as a universal radius scale, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Elevation

The retained button and input samples have `box-shadow: none`. No elevated card, panel, menu, toast, dialog, or overlay value was backed by the supplied selector/state evidence, so no elevation token is included. Reading that `box-shadow: none` as the retained samples only, rather than as a card-elevation ladder, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Motion

No transition duration, easing curve, animation, expanded state, or interaction sequence was captured. Do not assign motion tokens or infer a motion style from static illustrations, corporate videos, or generic platform behaviour. Promote a motion token only after a per-component computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition. Treating that measured absence as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, requiring that per-component computed observation of all five kinds before any promotion, and keeping the source prohibition on inferring a motion style from static illustrations, corporate videos, or generic platform behaviour, are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating the storefront computed stack as a high-confidence operating-system stack rather than a One Store-owned UI family, treating developer-portal `Arial` as a system font, treating `geistSans`, `geistMono`, and `notoSansKr` as declared-only, treating One Store Mobile Gothic Body, Title, and POP as official distributed assets rather than captured storefront webfonts, and omitting `Times`, are derived editorial implementation inferences from the verified surfaces; they are not One Store-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Live computed storefront use | the main storefront’s visible samples resolve to `helvetica, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", Arial, sans-serif`. The collector classifies this as a high-confidence operating-system stack; no loaded FontFace/source supports a One Store-owned UI family. The measured 15px / 400 / 21.9px body metrics remain useful, but the stack is not emitted as a brand font token. |
| Live computed developer-product use | the developer portal samples use system `Arial` at 13.3333px / 400. The portal’s `geistSans`, `geistMono`, and `notoSansKr` faces are declared-only in the supplied evidence; none had visible usage and none is promoted. |
| Official distributed brand assets | One Store publicly distributes Mobile Gothic Body, Mobile Gothic Title, and Mobile Gothic POP. The company describes the Body face as mobile-optimised and modern/comfortable, the Title face as stable and firm, and POP as a lively handwritten face. These are useful font assets, not evidence that the captured storefront loads them. [Official font page](https://www.onestorecorp.com/sv/fordev_font/) |
| Official licence/use boundary | the company’s launch announcement says the three fonts are free and commercially usable. That establishes distribution/use terms, not consumer-storefront deployment. [Font announcement](https://onestorecorp.com/news/presskit/2021/2021-05-17.html) |
| Times (sparse developer-portal samples) | `Times` appears in sparse developer-portal samples without a matching loaded FontFace or official product-use evidence; it is omitted. |

### Family

- **Current visible storefront samples:** `helvetica, "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", Arial, sans-serif`. This computed system stack is not a brand font.
- **Developer-portal control samples:** system `Arial` at 13.3333px / 400. Computed Arial is a system font.
- Do not substitute Mobile Gothic, `geistSans`, `geistMono`, `notoSansKr`, Times, Arial, Helvetica, or a system fallback as though it were an observed One Store brand UI font.

Treating that storefront stack as not a One Store-owned UI family, treating developer-portal `Arial` as a system font, and refusing those substitutes, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Type roles

YAML token-set metrics keep their size, weight, and unitless line-height numbers. YAML `use` strings are kept verbatim. `tokens.typography.body.size` 15 is not a spacing step. YAML `tokens.typography.body.lineHeight` `1.46` and the §3 writing `21.9px` both stay. Storefront secondary list text 14px / 400 / 20px is a §3 measured hierarchy row; it is not a YAML `tokens.typography` key. Paths kept: `tokens.typography.body.size` / `tokens.typography.body.weight` / `tokens.typography.body.lineHeight` / `tokens.typography.body.use`; `tokens.typography.developer-control.size` / `tokens.typography.developer-control.weight` / `tokens.typography.developer-control.use`.

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---|---|
| body (`tokens.typography.body`) | computed system stack; not a brand font | 15 | 400 | 1.46 (21.9px) | Storefront body sample; computed system stack is not a brand font |
| Storefront secondary list text | home-route list items | 14px | 400 | 20px | not a YAML `tokens.typography` key |
| developer-control (`tokens.typography.developer-control`) | system Arial | 13.3333 | 400 | normal | Developer-portal button and input sample; computed Arial is a system font |

Keeping those three roles unmerged, keeping YAML `use` verbatim, keeping unitless `1.46` beside `21.9px`, and keeping the 14px list-text row off the YAML typography keys, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Assets

- Catalog logo entry: favicon `https://www.google.com/s2/favicons?domain=onestore.co.kr&sz=128`. Reading that URL as a catalog identity pointer rather than as a One Store-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.
- Official distributed type: Mobile Gothic Body, Mobile Gothic Title, and Mobile Gothic POP. Free and commercially usable as of the 2021 announcement. Not a verified storefront webfont.
- Official corporate brand gallery at `https://www.onestorecorp.com/brand/` is a named brand-asset source; it does not supply the marketplace palette or component tokens below. Reading the official distributed type in the preceding bullet as not a verified storefront webfont, and reading that gallery as a named brand-asset source that does not supply the marketplace palette or component tokens below, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

No state-specific UI was observed: the supplied bundle has `interactionCount: 0` and `observedStates: 0`. The following state categories are intentionally unspecified until a relevant product-surface selector/value pair is captured.

| Category | Evidence status |
|----------|-----------------|
| Empty | No observed state |
| Loading | No observed state |
| Error | No observed state |
| Success | No observed state |
| Skeleton | No observed state |
| Disabled | No observed state |

The evidence records no interaction snapshots or observed states. The two default controls below remain available because their selector, surface, and computed geometry are present; hover, focus, pressed, disabled, and error values are absent. Storefront links and rows are documented only as list items in the raw evidence and are not relabelled as buttons. YAML states, kept as written on both token-set components: Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Developer portal GeneralButton

- Role: Developer portal GeneralButton
- Primitive type: `button` · YAML `tokens.components.developer-basic-button.type: button` · Kind: interactive
- Background: `#EFEFEF` / YAML `tokens.components.developer-basic-button.bg` `#efefef`
- Text: `#000000` / YAML `tokens.components.developer-basic-button.fg` `#000000`
- Border: `2px solid #000000` / YAML `tokens.components.developer-basic-button.border` `2px solid #000000`
- Radius: `0px` / YAML `tokens.components.developer-basic-button.radius` `0px`
- Padding: `0px 20px` / YAML `tokens.components.developer-basic-button.padding` `0px 20px` / `tokens.spacing.developer-button-x` 20
- Height: `50px` / YAML `tokens.components.developer-basic-button.height` `50px`
- Font: `13.3333px / 400 / Arial` / YAML `tokens.components.developer-basic-button.font` `13.3333px / 400 Arial`
- YAML fields on this component: `tokens.components.developer-basic-button.type`, `tokens.components.developer-basic-button.bg`, `tokens.components.developer-basic-button.fg`, `tokens.components.developer-basic-button.border`, `tokens.components.developer-basic-button.radius`, `tokens.components.developer-basic-button.padding`, `tokens.components.developer-basic-button.height`, `tokens.components.developer-basic-button.font`, `tokens.components.developer-basic-button.states`, `tokens.components.developer-basic-button.use`
- Token-set use: Developer portal GeneralButton-module__box___leAwc.large at surface-5::[data-omd-capture=10]
- Use: `GeneralButton-module__box___leAwc.large` at `surface-5::[data-omd-capture=10]` / `surface-5::[data-omd-capture="10"]`; default only.
- Observed: Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted
- YAML states, kept as written: Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted
- Source §5 measurement of this control: 180×50px. That figure is this control's measured box, not a consumer-marketplace grid.

Reading the padding `0px 20px` as this control together with `tokens.spacing.developer-button-x` 20, and reading 180×50px as this control's measured box rather than as a marketplace grid, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the developer portal |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A portal button can be gated; visual treatment omitted |
| loading | applicable | Recorded as the pair of the login input; a button in that documented pair can commit an action; visual treatment omitted |
| error | applicable | Same commit role; visual treatment omitted |
| success | applicable | Same commit role; visual treatment omitted |

### Developer portal LoginField

- Role: Developer portal LoginField
- Primitive type: `input` · YAML `tokens.components.developer-login-input.type: input` · Kind: interactive
- Background: `#FFFFFF` / YAML `tokens.components.developer-login-input.bg` `#ffffff`
- Text: `#000000` / YAML `tokens.components.developer-login-input.fg` `#000000`
- Border: `2px solid #767676` / YAML `tokens.components.developer-login-input.border` `2px solid #767676`
- Radius: `0px` / YAML `tokens.components.developer-login-input.radius` `0px`
- Padding: `1px 2px` / YAML `tokens.components.developer-login-input.padding` `1px 2px` / `tokens.spacing.developer-input-y` 1 · `tokens.spacing.developer-input-x` 2
- Height: `21px` / YAML `tokens.components.developer-login-input.height` `21px`
- Font: `13.3333px / 400 / Arial` / YAML `tokens.components.developer-login-input.font` `13.3333px / 400 Arial`
- YAML fields on this component: `tokens.components.developer-login-input.type`, `tokens.components.developer-login-input.bg`, `tokens.components.developer-login-input.fg`, `tokens.components.developer-login-input.border`, `tokens.components.developer-login-input.radius`, `tokens.components.developer-login-input.padding`, `tokens.components.developer-login-input.height`, `tokens.components.developer-login-input.font`, `tokens.components.developer-login-input.states`, `tokens.components.developer-login-input.use`
- Token-set use: Developer portal LoginField-module__loginField___7ReTE at surface-5::[data-omd-capture=12]
- Use: `LoginField-module__loginField___7ReTE` at `surface-5::[data-omd-capture=12]` / `surface-5::[data-omd-capture="12"]`; default only.
- Observed: Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted
- YAML states, kept as written: Default observed only; interactionCount is 0, so no hover, focus, pressed, disabled, or error value is asserted
- Source §5 measurement of this control: 153×21px. That figure is this control's measured box, not a consumer-marketplace grid.

Reading the padding `1px 2px` as this control together with `tokens.spacing.developer-input-y` 1 and `tokens.spacing.developer-input-x` 2, and reading 153×21px as this control's measured box rather than as a marketplace grid, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the developer portal |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An input can be gated; visual treatment omitted |
| loading | not-applicable | This control is a value field; it does not commit an operation whose in-progress state it could report |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | A login value field does not report a completed operation on itself |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied bundle covers five 1440×900 routes but does not establish a single cross-domain layout system. On the developer portal, the observed button is 180×50px and the input is 153×21px; these are individual control measurements, not a consumer-marketplace grid. The storefront’s only retained measurement is its system-stack body text and sparse list-item geometry. No product-card grid, breakpoint, sticky header, or responsive rule is claimed.

All supplied surfaces were captured at 1440×900. No mobile viewport, breakpoint, touch-target rule, responsive grid, or alternate navigation state is evidenced. The mobile hostname in the storefront URL is not itself evidence for a responsive implementation rule.

Reading that capture as not a single cross-domain layout system, reading the storefront URL's mobile hostname as not itself a responsive-implementation rule, reading 1440×900 as the supplied capture size rather than as a breakpoint system, and reading 180×50px and 153×21px as individual control measurements rather than as a consumer-marketplace grid, are derived editorial implementation inferences from the verified surfaces; they are not One Store-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official corporate voice is open, benefit-aware, and playfully mobile-native. Its public language frames the service around more enjoyable game life and a platform that is closer, more open, and more fun, while the customer-commitment page keeps the decision frame on compelling choices for creators and consumers. This is corporate and service-principle context, not evidence for unobserved store labels or flows. [Company introduction](https://www.onestorecorp.com/about/corp/) · [Customer commitment](https://onestorecorp.com/sv/ccm/)

| Do | Don't |
|----|-------|
| Describe a concrete benefit or choice in plain language. | Attribute unobserved purchase, error, or account copy to the storefront. |
| Keep creator and consumer value in the same frame where the source does. | Treat corporate slogan language as a UI token. |
| Use playful energy only when it supports a real mobile-content context. | Invent a youth audience, demographic, or game-specific tone rule. |

**Voice samples.**

- “더 쏠쏠하게 앱하다” — current corporate/service slogan.
- “슬기로운 게임생활을 만듭니다” — official company framing.
- “To provide compelling choices to make creators and consumers happier on our digital content platform” — official mission statement.

The slogans and mission statement are first-party recordings. Naming the official corporate voice open, benefit-aware, and playfully mobile-native, keeping that language as corporate and service-principle context rather than as unobserved store labels or flows, and refusing to treat corporate slogan language as a UI token, are a derived editorial implementation inference from the verified surfaces; they are not One Store-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

- hover, focus, pressed, disabled, error, selected, success, empty, loading, and skeleton visual treatments
- consumer CTA, card, brand webfont, interaction state, responsive pattern, or elevation system
- product-card grid, breakpoint, sticky header, mobile viewport, touch-target rule, responsive grid, or alternate navigation state
- motion duration, easing curve, animation, expanded state, or interaction sequence
- `#0000EE` as a One Store brand value
- `Times` as a loaded UI family; declared-only `geistSans`, `geistMono`, and `notoSansKr`
- One Store Mobile Gothic as a captured storefront webfont
- elevated card, panel, menu, toast, dialog, or overlay value
