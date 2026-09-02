# Lamborghini Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Automobili Lamborghini is an Italian super sports car maker founded in 1963, whose current public positioning pairs technological performance with audacious design and its “Driving Humans Beyond” mission. This contract covers three public marketing routes observed on 2026-07-13 on `https://www.lamborghini.com`: locale marketing home `https://www.lamborghini.com/ko-en` (`home`), global marketing home `https://www.lamborghini.com/en-en` (`global-home`), and public model marketing `https://www.lamborghini.com/en-en/models` (`models`). Treating those three captured public marketing routes as this contract's token surfaces, and not treating them as proof of an authenticated vehicle, owner, dealer, checkout, documentation, configurator, account flow, or modal product, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. The supplied evidence covers only those three public marketing routes. This is not a reference for an authenticated vehicle, owner, dealer, checkout, or documentation product, and it is not an implementation kit for a vehicle or ownership product. Do not request a generic Lamborghini configurator, error state, account flow, or modal from this evidence.

The captured public web surfaces use large LamboType headlines, full-bleed product imagery, 0px controls, and a palette of yellow, black, white, and neutral gray. Those values are observed. Reading that captured layer as editorial automotive marketing, reading hard-edged controls and a tightly observed palette as the measured character of these routes rather than a universal Lamborghini product system, and reading yellow on accent actions as measured character rather than a general semantic palette, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. 0px controls and panels recur throughout the capture; yellow is observed on accent actions rather than elevated to a general semantic palette.

Lamborghini’s official company material dates the founding to 1963 in Sant’Agata Bolognese and describes more than sixty years of super sports car design and performance. Its current company framing adds sustainability, well-being, and inclusion to the “Driving Humans Beyond” mission. The 2024 corporate refresh is the relevant current evolution recorded for this reference: it introduces a broader logo typeface, reconfirms black and white as primary hues with yellow and gold accents, and adds a new official typeface and icon set for company communications. Those are first-party statements about the company and its identity work; they assign no interface token on their own. Treating that 2024 refresh as this reference's current evolution, treating those first-party statements as assigning no interface token on their own, treating the official identity announcement as brand context rather than a release of a reusable design system, and treating the live capture's corroboration as not licensing an older site snapshot as a universal product system, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. The live capture corroborates LamboType in visible public UI rather than treating an older site snapshot as a universal product system.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and classifying them as captured-surface outcomes rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. Each names a captured marketing surface or control. They do not come from the source's persona section.

- Browse public model marketing on `https://www.lamborghini.com/en-en/models`.
- Read public marketing home and news-card editorial on `https://www.lamborghini.com/ko-en` and `https://www.lamborghini.com/en-en`.
- Use the captured marketing accent action and outline action on the locale marketing home.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. No first-party persona segmentation or user-research evidence was supplied for this reverify. Dropping the unresolved audience-needs placeholder rather than promoting it, inventing no stakeholder group the source did not name, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

### Distinctive traits

The list restates measured values from the source. The values are recorded; classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

- Public-marketing scope only: `home`, `global-home`, and `models`; no authenticated vehicle, owner, dealer, checkout, or documentation chrome
- Accent action fill `#ffc000` with on-accent text `#000000`; alternate observed sample `#917300` is not a hover contract
- Light fill / inverse `#ffffff`; foreground `#202020`; muted control text `#969696`
- LamboType as the sole loaded, high-confidence family (805 visible uses, FontFace-backed)
- 0px control and panel radius (`tokens.rounded.square`)
- No promoted hover, menu-open, dialog, form-validation, carousel, or motion system from this capture

### Principles

These 3 items are a derived editorial implementation inference from the verified surfaces; they are not Lamborghini-authored or a separately published UI specification. The numbered stems cite the official manifesto values brave, unexpected, and authentic. Every *UI implication* below is the source's own editorial reading, not a separately published UI specification.

1. **Brave.** The manifesto identifies courage as a brand value. *UI implication:* make emphasis deliberate and sparse rather than accumulating decorative emphasis.
2. **Unexpected.** The manifesto asks the brand to push boundaries. *UI implication:* use the measured accent action only where a public-marketing action needs visual priority.
3. **Authentic.** The official identity work ties visual expression to the company’s own design language. *UI implication:* retain 0px control geometry and licensed LamboType only where the cited marketing evidence applies.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Lamborghini-authored or a separately published UI specification.

- Keep an adaptation scoped to the public-marketing evidence: LamboType, 0px control radius, and the explicitly observed yellow/white/charcoal roles.
- Preserve selector-level provenance when reusing the 24px accent action, white outline action, or selected tab.
- Use a properly licensed LamboType asset, or omit the specimen rather than substituting a system face.
- Treat the 2024 official identity announcement as brand context, not a release of a reusable design system.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Lamborghini-authored or a separately published UI specification.

- Do not apply these marketing observations to configurator, owner, vehicle, dealer, checkout, or documentation UI without source evidence from that domain.
- Do not turn `#917300` into a hover token, or turn the observed color list into success/error/link semantics; those behaviors were not captured.
- Do not promote `Lambo-icons`, Roboto, Helvetica Neue, or Arial to a verified Lamborghini UI family.
- Do not invent menu, dialog, form-validation, carousel, or motion variants beyond the selected tab interaction that was observed.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The roles below are limited to values the supplied collector observed in computed styles on the three marketing surfaces. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.surface-light` unmerged from `tokens.colors.inverse` even though both write `#ffffff`, keeping `tokens.colors.on-primary` `#000000` unmerged from `tokens.colors.foreground` `#202020`, keeping `#917300` as an observed variant rather than a hover contract, and keeping `#969696` unmerged from the unpromoted local list `#181818` / `#f5f5f5` / `#c4c4c4` / `#494949` / `#7d7d7d`, and not promoting that local list to semantic, error, success, link, or global-surface roles because the capture does not establish those roles, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

- **Accent action** (`#ffc000`): `tokens.colors.primary`. Background on `btn-accent btn-large` at `home::[data-omd-capture="45"]`.
- **Alternate accent sample** (`#917300`): `tokens.colors.primary-muted`. Background on a separate `nav-btn explore ... btn-accent` sample at `home::[data-omd-capture="31"]`. It is an observed variant, not a documented hover contract.
- **Light fill** (`#ffffff`): `tokens.colors.surface-light`. A captured filled primary button background.
- **Inverse text** (`#ffffff`): `tokens.colors.inverse`. The foreground/border of outline controls. Same hex as light fill; the jobs stay unmerged.
- **Foreground** (`#202020`): `tokens.colors.foreground`. Recurring card and text color on the marketing routes.
- **On accent** (`#000000`): `tokens.colors.on-primary`. Text and border color on the `#ffc000` accent action. This is that control’s field, not a general Lamborghini ink role.
- **Muted control text** (`#969696`): `tokens.colors.muted`. Captured on disabled/secondary carousel and tab samples.

The bundle also records `#181818`, `#f5f5f5`, `#c4c4c4`, `#494949`, and `#7d7d7d` in local text or border contexts. They are not promoted to semantic, error, success, link, or global-surface tokens because the capture does not establish those roles.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xs` 8, `sm` 16, `md` 24, `lg` 32, `section` 48. `tokens.spacing.md: 24` is not the 24px action/tab padding. `tokens.spacing.lg: 32` is not a type size. `tokens.spacing.section: 48` is not the isolated carousel `80px 0px` padding or the editorial-content card `40px` padding. Keeping those key paths unmerged from those isolated measurements, and reading the strongest observed local pattern as measured local recurrence rather than a site-wide grid, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

The capture repeatedly measures 8px, 16px, 24px, 32px, and 48px in local padding, margin, and gap values. The strongest observed local pattern is 24px: it occurs in action padding, tab padding, and layout gaps. A carousel shell is observed with `80px 0px` padding and an editorial-content card with `40px` padding, but neither value is promoted into the compact token scale because their roles are isolated.

### Shape

YAML `tokens.rounded.square`: 0. Sampled accent, outline, menu, tab, and news-card controls resolve to `0px`. Reading that 0 as square harvested geometry for those observed controls, not a universal radius for every unlisted Lamborghini surface, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

### Elevation

The captured component samples report `box-shadow: none`. No overlay scale, modal treatment, image-gradient system, or global black-canvas policy is promoted from this evidence. Treat depth beyond the observed no-shadow samples as unresolved. The `none` value is observed; treating depth beyond the observed no-shadow samples as unresolved, and attributing the page’s visual weight to transparent wrappers and photography, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

### Motion

No duration, easing, transition, or reduced-motion value was measured in the supplied evidence. Do not derive a motion scale from cinematic imagery or the corporate narrative. No motion token is promoted. Treating that absence as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, not deriving a motion scale from cinematic imagery or the corporate narrative, and requiring a per-component computed observation of all five kinds before any promotion, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating LamboType as the sole UI-family token rather than promoting fallback names, treating `Lambo-icons` as declared-only, refusing to substitute a system face while calling it LamboType, treating official product-use context as support for the live family story rather than a reusable captured-file asset, and keeping family metadata while marking a specimen unavailable unless licensed, are derived editorial implementation inferences from the verified surfaces; they are not Lamborghini-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Live computed + FontFaceSet use | `LamboType` is the sole loaded, high-confidence family in the bundle. It has 805 visible uses across headings, text, buttons, cards, tabs, badges, and list items; the collector reports that the computed family is backed by a loaded `FontFace`. |
| Official product-use context | Lamborghini’s 2024 corporate-look announcement says its official typeface was created for company communications. Character Type identifies the Lamborghini project as Lambotype, a variable custom family designed with Strichpunkt. This contextual evidence supports the live family story; it does not turn the captured site files into a reusable asset. |
| Declared-only asset | `Lambo-icons` has an `@font-face` declaration but zero visible captured use. It is not a typography or icon token. |
| Fallback names | Roboto, Helvetica Neue, and Arial appear behind `LamboType` in computed CSS stacks. The loaded LamboType face wins in the capture; fallback names are not promoted as brand families. |
| Licence boundary | Lamborghini’s terms say site fonts and other material are protected and may not be reproduced or used without authorization. No public downstream LamboType web-font licence was found. Keep the family metadata, but mark a specimen unavailable unless the target project has its own licence; never substitute a system font while calling it LamboType. |

### Family

- **Current visible UI family:** `LamboType` — YAML `tokens.typography.family.ui`
- Do not present Roboto, Helvetica Neue, or Arial as the brand face. Do not substitute a system font while calling it LamboType.

### Type roles

The hierarchy below is the source's measured public-marketing table. Line heights stay the recorded px values; they are not converted into unitless ratios. Keeping those px line heights unconverted, and keeping the small-label `0.225px` tracking on that role rather than inventing tracking for the other rows, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Tracking | Provenance |
|---|---|---:|---:|---:|---|---|
| Display headline | LamboType | 120px | 400 | 110px | — | `surface-3::h3.card-bt__title-primary` |
| Large display | LamboType | 80px | 400 | 90px | — | `surface-3` body sample |
| Editorial heading | LamboType | 54px | 400 | 64px | — | `surface-3::h3` sample |
| News heading | LamboType | 27px | 400 | 37px | — | `home::h3.card-news__title` |
| Menu hierarchy link | LamboType | 18px | 400 | 28px | — | `home::[data-omd-capture="4"]` |
| Body / control | LamboType | 16px | 400 | 24px | — | recurring captured text/button/card sample |
| Small label | LamboType | 10px | 400 | 10px | `0.225px` | `home::[data-omd-capture="51"]` |

### Assets

Catalog identity points at `logo.type: simpleicons`, `slug: lamborghini`. That pointer is a third-party icon-set entry, not a Lamborghini-distributed mark file. Treating it as identity metadata rather than a portable first-party asset file is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

`Lambo-icons` is declared-only and is not an icon token.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All values below are selector-level observations from the supplied public marketing capture. It reports seven successful tab interactions. The collector’s `selected` / `tab-selected` component labels are retained as provenance; they do not establish a general button-hover, menu, dialog, or form-state specification.

The only observed interaction class is tabs: seven captured interactions produced `selected` / `tab-selected` provenance. Disabled carousel-control styling appears in component samples, but no disabled behavior was exercised. Empty, loading, error, success, skeleton, menu, dialog, form-validation, and toast states were not captured and are intentionally omitted.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control’s product role, not its primitive kind: a control that commits an operation can be pending, can fail, and can confirm, while a destination action, menu toggle, or tab reports none of those itself. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of an observation is never a `not-applicable` reason. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. `selected` / `tab-selected` is an additional observed interaction result, not a Core applicability row. Every interactive-kind verdict, every applicability verdict, the omission of kind and a state-applicability map for the news-card image wrapper because it declares no control role, the refusal to copy an unobserved menu open/close transition as a computed paint, and the refusal to treat collector `selected` / `tab-selected` labels on button samples as a button activation transition, are derived editorial implementation inferences from the verified surfaces; they are not Lamborghini-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Accent CTA

- Role: marketing accent action on the locale marketing home
- Primitive type: `button`
- Kind: interactive
- Anatomy: label on a filled surface
- Background: `#ffc000`
- Text: `#000000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Token-set path: `tokens.components.accent-cta`
- Token-set use: `Marketing accent action at home::[data-omd-capture="45"]`
- Token-set states: `captured in selected/tab-selected surface context; no activation transition asserted`
- Observed: default only; the collector’s selected/tab-selected labels on this sample are capture-context provenance, not an asserted activation transition

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as `btn-accent btn-large` on the locale marketing home |
| hover | applicable | Pointer-web marketing action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An action control can be unavailable; visual treatment omitted |
| loading | not-applicable | This marketing accent action points the reader to another public-marketing destination; it commits no operation of its own that could be pending |
| error | not-applicable | The same destination role; a destination that fails to open reports that on the destination, not on this control |
| success | not-applicable | The same destination role; arriving at the destination is the outcome itself, so this control confirms no separate completion |

### Outline action

- Role: marketing secondary action on the locale marketing home
- Primitive type: `button`
- Kind: interactive
- Anatomy: label with outline
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Token-set path: `tokens.components.outline-action`
- Token-set use: `Marketing secondary action at home::[data-omd-capture="46"]`
- Token-set states: `captured in selected/tab-selected surface context; no activation transition asserted`
- Observed: default only; no activation transition asserted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the marketing secondary action on the locale marketing home |
| hover | applicable | Pointer-web marketing action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A paired action can be unavailable; visual treatment omitted |
| loading | not-applicable | This marketing secondary action points the reader to another public-marketing destination; it commits no operation of its own that could be pending |
| error | not-applicable | The same destination role; failure is not reported on this control |
| success | not-applicable | The same destination role; this control confirms no separate completion |

### Menu hierarchy link

- Role: burger-menu hierarchy link on the locale marketing home
- Primitive type: `button`
- Kind: interactive
- Anatomy: label
- Text: `#ffffff`
- Radius: `0px`
- Padding: `16px 0px`
- Font: `18px / 400 / LamboType`
- Token-set path: `tokens.components.menu-link`
- Token-set use: `Burger-menu hierarchy link at home::[data-omd-capture="4"]`
- Token-set states: `default capture; menu open/close transition was not captured`
- Observed: default only. Additional named unobserved state: menu open/close transition. That name is not copied here as a computed paint.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as `.burger-menu-link.lev-2-toggler` on the locale marketing home |
| hover | applicable | Pointer-web menu control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A menu hierarchy control can be unavailable; visual treatment omitted |
| loading | not-applicable | This control is a menu hierarchy toggle; it is not a request-in-flight control |
| error | not-applicable | A menu toggle is not a form or request-outcome control |
| success | not-applicable | A menu toggle is not a completion control |

### Selected tab

- Role: React tab on the locale marketing home, after an observed tab interaction
- Primitive type: `tab`
- Kind: interactive
- Anatomy: label with a bottom accent
- Text: `#ffffff`
- Border: `0px 0px 2px #ffc000`
- Radius: `0px`
- Padding: `24px`
- Font: `16px / 400 / LamboType`
- Token-set path: `tokens.components.selected-tab`
- Token-set use: `React tab at home::[data-omd-capture="41"]`
- Token-set states: `selected and tab-selected after observed tab interaction`
- Observed: selected and tab-selected after an observed tab interaction. Those names are additional observed interaction results, not Core applicability rows.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as `.react-tabs__tab.react-tabs__tab--selected` after an observed tab interaction |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a panel; it commits no operation of its own that could be pending |
| error | not-applicable | The same panel-selection role; a panel that fails to load reports that on the panel, not on the tab that selected it |
| success | not-applicable | The same panel-selection role; showing the panel is the outcome itself, so the tab confirms no separate completion |

### News-card image wrapper

- Role: news-card image wrapper on the locale marketing home
- Primitive type: `card`
- Token-set path: `tokens.components.news-card`
- Token-set use: `News-card image wrapper at home::div.card-news__image-wrapper`
- Text: `#202020`
- Radius: `0px`
- Padding: `0px`
- Kind: omitted — the recorded use describes a transparent image wrapper and declares no control role, so no state-applicability map is asserted for it. No card fill, border, shadow, or state is claimed from this transparent wrapper.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The capture repeatedly measures 8px, 16px, 24px, 32px, and 48px in local padding, margin, and gap values. The strongest observed local pattern is 24px: it occurs in action padding, tab padding, and layout gaps. A carousel shell is observed with `80px 0px` padding and an editorial-content card with `40px` padding, but neither value is promoted into the compact token scale because their roles are isolated. No grid, breakpoint, or max-width is claimed without an explicit measurement. Reading those repetitions as local measurements rather than a declared layout system or a responsive specification, and reading 24px as the strongest observed local pattern rather than a site-wide grid, is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification.

The supplied evidence does not provide a viewport matrix or mobile/desktop comparison. Responsive breakpoints, navigation collapse behavior, touch-target policy, and image-art-direction rules remain unresolved rather than inferred from the marketing layout.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official manifesto frames Lamborghini as brave, unexpected, and authentic, with “Driving Humans Beyond” as its mission. The live public navigation and model marketing use concise, uppercase labels; the corporate-look announcement describes the identity change as a clearer expression of those values.

| Context | Source-backed direction |
|---|---|
| Brand statement | “Driving Humans Beyond” and a leadership position in the unexpected |
| Public marketing navigation | Brief uppercase labels such as “MODELS”, “OWNERSHIP”, and “NEWS” |
| Product storytelling | Model-focused, editorial presentation on the captured public pages |

The mission line and the three navigation labels are first-party or captured strings, carried byte-for-byte. Reading those facts as support for a direct, declarative marketing register — and not as an invented support, legal, or product-error voice — is a derived editorial implementation inference from the verified surfaces; it is not Lamborghini-authored or a separately published UI specification. This supports a direct, declarative marketing register—not an invented support, legal, or product-error voice.

The observed surfaces include the `ko-en` marketing home and the `en-en` global home and models routes. No other locale was measured.

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

These are unnamed values, not permissions to invent:

- authenticated vehicle, owner, dealer, checkout, documentation, configurator, account-flow, and modal product UI
- error, success, and link semantic color roles
- a hover contract from `#917300`
- `Lambo-icons`, Roboto, Helvetica Neue, and Arial as UI-family tokens
- menu, dialog, form-validation, carousel, and motion variants beyond the observed tab interaction
- a viewport matrix, mobile/desktop comparison, responsive breakpoints, navigation collapse behavior, touch-target policy, and image-art-direction rules
- motion duration, easing, transition, and reduced-motion values — promote only after per-component computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior
- overlay scale, modal treatment, image-gradient system, and a global black-canvas policy
- support, legal, and product-error voice
- first-party persona segmentation and user-research evidence
