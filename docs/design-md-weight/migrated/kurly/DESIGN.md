# Kurly Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kurly (컬리 / 마켓컬리) is a Korean commerce company whose retail service began in 2015 around curated food and controlled-temperature delivery. Official materials say that the company began its consumer service in 2015 and built it around carefully chosen products and a cold-chain delivery approach. Its official introduction says that selection, delivery quality, fair pricing, customer care, and sustainable distribution are central to the service. The current company profile identifies Market Kurly and Beauty Kurly as services and describes the broader purpose as distribution innovation for a better life (`더 나은 삶을 위한 유통 혁신`). This contract covers the three current first-party public shopping surfaces in the supplied capture: the commerce home at `https://www.kurly.com/main`, the category list at `https://www.kurly.com/shopping/categories/list`, and the new-products collection at `https://www.kurly.com/collections/market-newproduct`. The supplied artifact contains desktop captures only. Treating those three captured shopping URLs as this contract's scope, rather than substituting the catalog homepage token, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

The current public shopping surfaces in this reference show white backgrounds, charcoal text, fine light borders, a restrained deep-purple active accent (`#5f0080`), and a loaded Pretendard webfont. The recognizable purple is present in category selection and active text/border treatments, while the product-list article wrappers themselves remain visually flat. Reading that captured layer as a compact commerce language rather than a published universal product design system, and reading Kurly’s corporate story and its current shopping UI as related without using corporate or marketing language to fill unobserved commerce tokens, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification. Kurly’s corporate story and its current shopping UI are related, but neither the corporate brand material nor marketing language is used here to fill unobserved commerce tokens. The Kurly introduction and company profile provide the business context; the three supplied live surfaces provide the UI values. Official history and those two documents provide that narrative context; they do not by themselves supply interface tokens. Classifying the introduction and company profile as business context, the three live surfaces as UI values, and that 2015 / cold-chain / Market Kurly / Beauty Kurly narrative as context that does not convert corporate claims into component tokens or make unobserved commerce behaviors factual is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona placeholders, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification. Each names a captured shopping surface.

- Browse the commerce home and its category tabs at `https://www.kurly.com/main`.
- Use the category-list shopping surface at `https://www.kurly.com/shopping/categories/list`.
- Scan new-products collection articles and product-list controls at `https://www.kurly.com/collections/market-newproduct`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Kurly’s first-party material identifies stakeholder groups rather than providing customer personas: customers and families, producers, partners, shareholders, and employees. No demographic archetypes, purchase behavior, or individual personas were collected for this reference, so they are not fabricated here. Reading those first-party stakeholder groups as this product's audience, and dropping the two unresolved persona placeholders rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces — it is not Kurly-authored or a separately published UI specification.

- Current captured commerce surfaces use `#ffffff`, `#333333`, and a deep `#5f0080` active accent
- Pretendard is computed on 761 visible samples and corroborated by loaded Kurly-hosted FontFace sources
- The retained component evidence is deliberately surface-specific: category tabs, a form-input error sample, and flat product-list articles
- The supplied artifact contains desktop captures only; responsive rules, mobile navigation, checkout, and product-detail UI are not specified

### Principles

The four numbered items below take their titles from Kurly’s official company-profile values (`Something Better`, Integrity, Diversity, Sustainability). The *UI implication* notes are a derived editorial implementation inference from the verified surfaces; they are not Kurly-authored or a separately published UI specification.

1. **Something Better.** The company says it pursues better things and better ways. *UI implication:* make a product or delivery claim specific and traceable to its supporting evidence.
2. **Integrity.** The company describes acting on trust and sincere communication. *UI implication:* do not conceal an evidence boundary behind a plausible UI token.
3. **Diversity.** The company says it respects different preferences and choices. *UI implication:* do not collapse separate product, marketing, and corporate surfaces into one fictional system.
4. **Sustainability.** Kurly connects sustainability to customers, producers, partners, and the distribution ecosystem. *UI implication:* represent a sustainability claim only when the source identifies the practice or impact.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Kurly-authored or a separately published UI specification.

- Use `#5f0080` for the observed active category treatment, not as a presumed universal fill.
- Use Pretendard where this reference needs the captured product-surface UI family.
- Keep the observed new-products article wrapper flat unless another surface supplies a measured treatment.
- Preserve the selector and state boundaries for category-tab hover/pressed and form-input error evidence.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Kurly-authored or a separately published UI specification.

- Don't restore legacy purple ramps, cream fills, sale colors, filled purchase CTAs, or badges without current product-surface provenance.
- Don't turn declared-only Noto Sans KR or system fallbacks into Kurly’s UI-family token.
- Don't use corporate/newsroom brand narrative as an authority for commerce component geometry or color values.
- Don't invent responsive, checkout, modal, or additional form states from the three desktop captures.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Observed live product surfaces. Pairing each hex to the token-set path named beside it, keeping muted control text unmerged from muted text, and keeping canvas `#ffffff` unmerged from form-input `bg` and the repeated list-control background, foreground `#333333` unmerged from form-input `fg` and article `fg`, and control-muted `#b5b5b5` unmerged from category-tab `fg`, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Active accent** (`#5f0080`): `tokens.colors.primary`. Repeated computed text and border value across the home, category-list, and new-products surfaces; selected category-tab and hover/pressed tab samples use it.
- **Canvas** (`#ffffff`): `tokens.colors.canvas`. Repeated page/control background in the supplied product surfaces.
- **Foreground** (`#333333`): `tokens.colors.foreground`. Dominant computed text value in all three captured product surfaces.
- **Body emphasis** (`#464c52`): `tokens.colors.body`. Observed text value in home and new-products samples.
- **Muted text** (`#999999`): `tokens.colors.muted`. Observed secondary text value; no wider semantic role is inferred.
- **Muted control text** (`#b5b5b5`): `tokens.colors.control-muted`. Observed inactive/secondary text value; no wider semantic role is inferred. This is not `tokens.colors.muted`.
- **Control border** (`#dfe4eb`): `tokens.colors.border`. Observed 1px border on repeated 36px new-products list controls.
- **Control fill** (`#f7f7f7`): `tokens.colors.control-background`. Observed on compact product-list controls in the new-products surface.

The supplied current capture does not establish the former purple ramps, cream bands, promotional colors, sale/error colors, or a filled purple commerce CTA. Those values are omitted from canonical tokens rather than inferred from legacy prose, logos, corporate material, or adjacent surfaces.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xxs` 2, `xs` 4, `sm` 8, `md` 16. `tokens.spacing.xxs: 2` is not `tokens.rounded.xs: 2`. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not a type size. `tokens.spacing.md: 16` is not the form-input `16px` size. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

Component-local spacing recorded in px in the source body is not a conversion of that YAML scale: compact product-list control padding `2px 0px 3px`. The `3px` step is that control’s field; it is not a spacing token. Recording that `3px` as that control's field rather than a spacing token is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded`: `xs` 2, `sm` 4. Those unitless steps are not a universal radius scale. Reading those unitless steps as not a universal radius scale, and pairing compact `2px` to `tokens.rounded.xs` and the list-control `4px` to `tokens.rounded.sm`, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

Component-local radii recorded in the source body, kept unmerged from the YAML scale:

- Category tab, form input, and product-list article: `0px` (no YAML `rounded.none` key exists)
- Compact product-list control: `2px` — `tokens.rounded.xs`
- Repeated new-products list control: `4px` — `tokens.rounded.sm`

Keeping YAML 2 / 4 unmerged from those `0px` fields, and not inventing a `rounded.none` key, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

### Elevation

The retained representative category tabs, repeated product-list controls, and product-list article wrappers all compute to `box-shadow: none`. YAML `tokens.shadow.none` is `none`. No elevation scale, modal shadow, sticky-header shadow, or hover shadow is specified from this artifact.

### Motion

No motion duration, easing curve, or transition was captured. The hover and pressed samples establish resulting computed styles for one category tab only; they do not establish motion behavior. No motion token is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | All 761 retained uses resolve first to **Pretendard** across body, button, card, heading, input, list-item, and text roles. The collector also records 18 Kurly-hosted Pretendard subset files as loaded FontFace sources, so `Pretendard` is the current UI-family token. |
| Font source and license | The webfont files are served from `res.kurly.com`; the typeface project publishes its license as SIL Open Font License 1.1. This establishes the reusable typeface license, not a Kurly-owned brand-font asset. |
| Declared-only | `Noto Sans KR` has declared source files in the artifact but no visible computed use. It is not promoted to the UI family. `swiper-icons` is likewise declared-only icon-font infrastructure. |
| System fallbacks | The computed family includes platform and system fallbacks after Pretendard. They remain fallbacks and are not presented as Kurly typography. |
| Official distributed asset | No Kurly-exclusive distributed type family was verified. Pretendard’s license describes the typeface, not a Kurly-owned brand-font asset. |

Assigning live-computed Pretendard as the current UI-family token, treating the Pretendard license as a reusable typeface license rather than a Kurly-owned brand-font asset, leaving `Noto Sans KR` and `swiper-icons` declared-only, refusing platform/system fallbacks as the brand face, and recording that no Kurly-exclusive distributed type family was verified, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification. Do not substitute Noto Sans KR or a system font and call it Kurly’s active UI family; the July capture directly corroborates Pretendard instead.

### Family

- **Current visible UI family:** `Pretendard` — YAML `tokens.typography.family.sans`
- **Loaded source boundary:** Pretendard face sources from `res.kurly.com`; 18 subset files loaded. The family is loadable in these captured shopping surfaces.
- Do not present the unnamed platform/system fallbacks after Pretendard as the brand face. Do not substitute Noto Sans KR or a system font and call it Kurly’s active UI family.

### Type roles

YAML sizes are the unitless numbers 14, 18, and 16. The body table writes `14px`, `18px`, and `16px`. YAML line-height values are the fixed px strings `14px`, `23.94px`, and `20px`. They are not unitless ratios and are not converted here. Compact product-list control `13px` / 400 is a component-local observation, not a YAML type role. Keeping YAML 14 / 18 / 16 unmerged from the body px writings, keeping YAML line-height px strings unconverted to unitless ratios, and treating compact `13px` as component-local rather than a YAML type role, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set / body | Provenance |
|---|---|---:|---:|---:|---|---|
| Utility/default | Pretendard | YAML 14 / body 14px | 400 | 14px | `tokens.typography.utility` | Repeated visible text and button default in the supplied desktop commerce capture. |
| Category tab, inactive | Pretendard | YAML 18 / body 18px | 400 | 23.94px | `tokens.typography.category-tab` | Inactive category tab in the home and new-products surfaces; selected and hover/pressed samples are separately observed. |
| Category tab, selected/hover/pressed | Pretendard | 18px | 500 | 23.94px | body §3 table; not a second YAML size key | selected `data-omd-capture="6"`; hover/pressed state capture for `"7"` |
| Form input | Pretendard | YAML 16 / body 16px | 400 | 20px | `tokens.typography.input` | Captured form input, including the collector's error-state sample. |

### Assets

- Storefront favicon: `https://res.kurly.com/icons/favicon-128x128.png`
- Pretendard on these surfaces is a loaded third-party webfont under SIL Open Font License 1.1, not a Kurly-owned brand-font asset. Reading it as a third-party webfont rather than a Kurly-owned brand-font asset is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The collector recorded category-tab hover and pressed samples and a form-input error sample only. All other product states need direct surface evidence before specification.

| Category | Evidence status |
|---|---|
| Default category tab | Inactive and selected values captured |
| Hover | Captured for one inactive category tab |
| Pressed | Captured for one inactive category tab |
| Error | Captured for a form input; retained computed values matched the default sample |
| Empty | no observed state |
| Loading | no observed state |
| Success | no observed state |
| Skeleton | no observed state |
| Disabled | no observed state |
| Focus | no observed state |

No filled purple purchase CTA, badge, modal, checkout control, product-card image treatment, responsive variant, or additional interaction state is specified: the supplied capture does not give that selector/state provenance. The source never records `focus-visible`; named Focus in the table above is not `focus-visible` treatment evidence. Pressed is an additional observed state on one category tab; it is not a Core applicability row.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim. Declaring Core applicability by control meaning rather than capture completeness, treating named Focus as not `focus-visible` treatment evidence, treating pressed as an additional observed state rather than a Core row, attaching a primitive type only when YAML records one, and omitting kind plus a state map on the product-list article, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

### Category tab

- Role: category control on the home and new-products surfaces
- Kind: interactive
- Type: button (`tokens.components.category-tab.type`)
- Anatomy: label
- Text: `#b5b5b5` inactive (`tokens.components.category-tab.fg`); `#5f0080` selected
- Radius: 0px
- Font: `18px / 400 / Pretendard` inactive (`tokens.components.category-tab.font`); `18px / 500` selected
- YAML `tokens.components.category-tab.states`: Selected tab is `#5f0080` at 18px / 500; the captured inactive tab changed to `#5f0080` at both hover and pressed
- YAML `tokens.components.category-tab.use`: Category control at `home::[data-omd-capture="7"]` and `surface-3::[data-omd-capture="7"]`.
- Observed: inactive default, selected default, hover, and pressed
- Additional observed state (not a Core applicability row): pressed `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-pressed`
- Hover captured: `#5f0080` text at 18px / 500 on `home::[data-omd-capture="7"]::state-hover`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive and selected values captured on home and new-products |
| hover | applicable | Pointer-web category tab; captured `#5f0080` at 18px / 500 on one inactive tab |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category tab can be unavailable; visual treatment omitted |
| loading | not-applicable | Category navigation does not submit a request on the tab itself |
| error | not-applicable | The tab is not a form field; form-input error sits on the captured input |
| success | not-applicable | Selecting a category is not an action-outcome confirmation on the tab |

### Form input

- Role: captured form input on the home and new-products surfaces
- Kind: interactive
- Type: input (`tokens.components.form-input.type`)
- Anatomy: value field
- Background: `#ffffff` (`tokens.components.form-input.bg`)
- Text: `#333333` (`tokens.components.form-input.fg`)
- Radius: 0px
- Font: `16px / 400 / Pretendard` (`tokens.components.form-input.font`)
- YAML `tokens.components.form-input.error`: Error state was captured at `home::[data-omd-interaction-capture="form-error-0-0"]` and `surface-3::[data-omd-interaction-capture="form-error-0-0"]`; sampled computed values matched the retained default sample.
- YAML `tokens.components.form-input.use`: Captured form input only; no focus, disabled, or success variant is specified.
- Observed: default and error sample. Focus, disabled, success, and validation-copy variants were not observed.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured form input default |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted. Named Focus in the capture record is not this treatment |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| loading | not-applicable | This field’s role is value entry; request loading is not a state of the input |
| error | applicable | Form field; error sample captured; retained computed background, text, border, and radius matched the default sample |
| success | not-applicable | Value entry on this captured input is not an action-outcome confirmation on the field |

### Repeated list control

- Role: repeated 249px by 36px button in the new-products product list
- Kind: interactive
- Anatomy: control
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#dfe4eb`
- Radius: 4px (`tokens.rounded.sm`)
- Font: 14px / 400 / Pretendard
- Height: 36px
- Width: 249px
- Use: Repeated 249px by 36px button at `surface-3::[data-omd-capture="148"]`; default state only
- Not in the YAML token set. No YAML `type` key, so no primitive-type field is attached.
- Source §9 unique constraint, kept on this control: Do not add a hover state.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the new-products list |
| hover | applicable | Pointer-web list control; visual treatment omitted (source §9: Do not add a hover state) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A list control can be unavailable; visual treatment omitted |
| loading | not-applicable | This repeated list control is product-list chrome; the control itself is not recorded as a request-commit |
| error | not-applicable | The control is not a form field |
| success | not-applicable | Operating the list control is not an action-outcome confirmation on the control |

### Compact product-list control

- Role: compact 22px product-list control on the new-products surface
- Kind: interactive
- Anatomy: control
- Background: `#f7f7f7` (`tokens.colors.control-background`)
- Text: `#b5b5b5` (`tokens.colors.control-muted`)
- Radius: 2px (`tokens.rounded.xs`)
- Padding: 2px 0px 3px
- Font: 13px / 400 / Pretendard
- Height: 22px
- Use: Compact 22px control at `surface-3::[data-omd-capture="60"]`; default state only
- Not in the YAML token set. No YAML `type` key, so no primitive-type field is attached.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the new-products list |
| hover | applicable | Pointer-web list control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact list control can be unavailable; visual treatment omitted |
| loading | not-applicable | This compact control is product-list chrome; the control itself is not recorded as a request-commit |
| error | not-applicable | The control is not a form field |
| success | not-applicable | Operating the compact control is not an action-outcome confirmation on the control |

### Product-list article

- Role: article wrapper in the new-products product list
- Type: card (`tokens.components.product-list-article.type`)
- Anatomy: wrapper
- Text: `#333333` (`tokens.components.product-list-article.fg`)
- Radius: `0px` (`tokens.components.product-list-article.radius`)
- Font: `14px / 400 / Pretendard` (`tokens.components.product-list-article.font`)
- YAML `tokens.components.product-list-article.use`: Article wrapper in the new-products product list at `surface-3::article`; 249px sampled width, with no card surface or hover variant observed.
- Observed: default only. Transparent computed background, no border, no shadow, no observed hover variant.
- Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation) (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied evidence is a 1440px desktop capture, not a responsive specification. Repeated new-products article wrappers measure 249px wide; that observation does not establish a site-wide grid, column count, gutter, or breakpoint. Keep product-list wrappers flat until a specific elevated/card treatment is observed on the relevant surface. Reading the 1440px capture as not a responsive specification, and the 249px article width as not a site-wide grid, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

No mobile viewport or responsive-state capture was supplied. Breakpoints, column changes, touch-target requirements, and mobile navigation are intentionally unspecified.

YAML spacing steps 2, 4, 8, and 16 remain the spacing token set; they are not a converted px sheet and are not a responsive grid. Keeping those YAML spacing steps as the spacing token set rather than a converted px sheet or a responsive grid is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kurly’s first-party introduction frames the service around careful selection, delivery quality, price, customer care, and sustainable distribution. The official company profile names `Something Better`, tenacity, integrity, diversity, and sustainability as its values. Reading that material as supporting a practical, discriminating, and responsible voice in company material, and treating the context table as first-party-supported direction rather than a storefront microcopy specification, is a derived editorial implementation inference from the verified surfaces; it is not Kurly-authored or a separately published UI specification. This does not establish unobserved storefront microcopy rules.

| Context | First-party-supported direction |
|---|---|
| Product selection | Explain the standard or quality rationale clearly. |
| Delivery | State timing and product-condition information plainly. |
| Producer/partner story | Credit the producer and describe the relevant value chain. |
| Sustainability | Describe the specific practice or impact rather than generic “eco” claims. |

**Official language samples.**

- `Something Better` — company value label.
- `나와 내 가족이 사고 싶은 상품을 판매합니다.` — official service principle.
- `더 나은 삶을 위한 유통 혁신` — company-profile framing.

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

- former purple ramps, cream bands, promotional colors, sale/error colors, and a filled purple commerce CTA
- hover visual treatments other than the captured inactive category-tab hover
- pressed visual treatments other than the captured inactive category-tab pressed
- disabled, loading, success, empty, skeleton, and focus visual treatments
- form-input validation-copy variants
- responsive grid, breakpoints, column changes, touch-target requirements, and mobile navigation
- checkout, product-detail, badge, modal, filled purchase CTA, and product-card image treatment
- unobserved storefront microcopy rules
- interactive kind and state-applicability map for the product-list article
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior; official documentation of a single curve or duration is not that gate
