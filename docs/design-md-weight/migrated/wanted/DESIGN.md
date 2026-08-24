# Wanted Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Wanted (원티드) is a Korean career platform that connects job discovery, company information, career content, and employer services around the idea that every working person should be able to work more like themselves. This contract covers five current first-party surfaces: the product home (`https://www.wanted.co.kr/`), the job directory (`https://www.wanted.co.kr/wdlist/518`), the company service (`https://www.wanted.co.kr/company`), Wanted Montage (`https://montage.wanted.co.kr/`), and Montage foundations (`https://montage.wanted.co.kr/docs/foundations`). Additional first-party Montage sources in this capture are typography utilities (`https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style`) and text-button design (`https://montage.wanted.co.kr/docs/components/actions/text-button/design`). Wanted Montage is Wanted's official product-experience design system with foundations, cross-platform components, UI kits, utilities, and usage guidance.

The following capture-bound coverage reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. It does not treat those routes as a proxy for native-app navigation, campaign-only type use, or uncaptured apply, form-validation, or toast flows.

The following quieter/denser and signature-unit reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. The current product is quieter and denser than a campaign page: white surfaces, `#171719` headings, `#333333` body copy, restrained translucent metadata, and `#0066ff` reserved for recognizable actions. The signature visual unit is not a generic elevated card but a job result composed from a 12px media thumbnail, a compact 16px/600 position title, company and location metadata, and generous grid rhythm.

Montage is Wanted's current official product-experience design system. Its 2026 site frames reusable foundations and components as a way to combine individual parts into a consistent, intuitive service, and publishes cross-platform component guidance rather than only a static brand kit. The live product and Montage capture both visibly used Pretendard Variable. Wanted Sans Variable and Pretendard JP Variable were present as declared downloadable faces but had zero visible computed use in the inspected nodes.

The following Montage→product evidence-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Product composition and Montage documentation examples may share foundations but are not interchangeable evidence. Official Montage writing explains how repeatable parts keep career information coherent as teams add features. That writing is system context; captured interface tokens still come from the five named surfaces.

The following Brand-narrative paragraph is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Wanted's service story connects career possibility with a concrete browsing and matching workflow. The relationship matters because career decisions require both emotional confidence and reliable comparison. Typography stays neutral and highly legible so role and company evidence can lead. Brand color marks actions and ownership without turning every listing into campaign content.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Compare role, company, location, and reward information on the current job directory.
- Search from the product header to narrow a career direction.
- Consult Wanted's company service or Montage product-experience guidance.
<!-- design-md:claim-end -->

### Audience

Public surfaces establish task contexts, not verified biographical personas. Project-specific names, ages, goals, company sizes, and conversion assumptions are unspecified and must come from the product brief. Restricting Audience so invented demographic personas are not promoted, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. No invented demographic personas are promoted. Observable work follows the three primary tasks: people comparing job listings, people using product search, and employers or product makers consulting the company service or Montage.

### Distinctive traits

- `#0066ff` interactive accent on a white product canvas
- Loaded Pretendard Variable with 1,575 visible uses across product and Montage
- 12px image/card geometry, 8px controls, and 16px overlay menus
- Product search dialog captured through safe interaction on four product routes
- Current job-card composition documented separately from Montage primitives

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Wanted-authored or a separately published UI specification.

1. **Help people work more like themselves.** Career choices should remain understandable and user-directed.
2. **Compose consistency from reusable parts.** Follow Montage's published extensibility, consistency, and efficiency framing.
3. **Information leads decoration.** Job role, company, and metadata establish hierarchy before campaign color.
4. **Font truth follows visible use.** A declared asset is not automatically the current UI face.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification.

- Reserve `#0066ff` for clear actions and selection meaning.
- Use the verified flat job-card composition for career listings.
- Keep 12px media rounding distinct from 8px product controls and 16px overlays.
- Keep dense metadata below a clear 16px/600 position title.
- Keep declared fonts separate from visibly used fonts.
- Keep product composition and Montage documentation examples as separate evidence domains even when they share foundations.

### Avoid

The following items are a derived editorial implementation inference from the verified surfaces; they are not Wanted-authored or a separately published UI specification.

- Do not render Wanted Sans as current product UI merely because its files are declared.
- Do not invent colored semantic states or filled CTAs from an old snapshot.
- Do not turn every content block into a shadowed 12px card.
- Do not present Montage documentation examples as proof of every product, native-app, or campaign surface.
- Do not substitute a system font for a different claimed family; only the observed Pretendard Variable family is available here as the UI face.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary action** (`#0066ff`): current account/action text across four product surfaces.
- **Heading** (`#171719`): product headings, position titles, and controls.
- **Body** (`#333333`): dominant product list and card copy.
- **Secondary** (`#858688`): the observed 61% metadata color resolved on white.
- **Canvas** (`#ffffff`): page, dialog, and content surface.
- **Subtle surface** (`#f8f8f8`): current secondary product background.
- **Hairline** (`#e8e9ea`): the observed 16% control boundary resolved on white.
- **On primary** (`#ffffff`): text on primary actions where a filled treatment exists; the captured header account action uses `#0066ff` on transparent rather than this pair as a filled button.

The following unpromoted-role reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. The old marketing orange, pink, sky, violet, semantic error/success/warning, and `#f7f7f8` claims were not promoted because the current capture did not establish those roles at the same surface boundary.

### Spacing

Repeated captured values: 4, 8, 14, 20, and 40.

Treating those as compact working values from the current product and Montage captures, not a claim that every layout follows a strict mathematical scale, is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification.

### Shape

- Control: 8px
- Card / media thumbnail: 12px
- Overlay menu: 16px
- Full: 9999

The following local-geometry application is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Keep 12px media rounding distinct from 8px product controls and 16px overlays. These are captured local geometry, not a universal radius scale.

### Elevation

Most current product cards are flat. Controls use an inset 1px translucent boundary (`1px inset rgba(112,115,124,0.16)`). The captured Montage menu uses a low-opacity two-layer shadow:

`0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)`

The following elevation application is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. No generic modal shadow is promoted.

### Motion

No reusable duration or easing token was established. Dialog/menu expansion proves state change only; it does not authorize a universal motion curve. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following Official-distributed-asset license-check reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Montage publishes Wanted's current product typography utilities and scale. |
| Live surface-use | Pretendard Variable loaded/high with 1,575 visible uses across six captured surfaces. |
| Official distributed asset | Montage links font resources; asset licensing must be checked per resource before redistribution. |
| Declared-only | Pretendard JP Variable and Wanted Sans Variable were declared with source files but zero visible use. |
| Unresolved claim | Campaign-only use of Wanted Sans and native-app overrides remain unresolved. |

### Family

- **Current visible UI family:** Pretendard Variable
- **Declared-only:** Wanted Sans Variable and Pretendard JP Variable — font evidence, not the UI family

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Do not render Wanted Sans or Pretendard JP as current product UI. Do not replace Pretendard Variable with a substitute stack, and do not present a fallback as Pretendard Variable.

### Type roles

Verified line-height values from YAML are the unitless ratios 1.36, 1.5, 1.43, and 1.33. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes. Those px figures are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Section heading | Pretendard Variable | 22px | 600 | 1.36 (30px at this size) | -0.4268px | Current product section headings and Montage headings |
| Job position | Pretendard Variable | 16px | 600 | 1.5 (24px at this size) | 0.0912px | Job-card position title |
| Supporting title | Pretendard Variable | 15px | 600 | 22px | 0.144px | Supporting title observed in the capture table; no YAML ratio |
| Product body | Pretendard Variable | 14px | 400 | 1.43 (20px at this size) | normal | Product lists, cards, actions, and supporting copy |
| Metadata | Pretendard Variable | 12px | 500 | 1.33 (16px at this size) | 0.3024px | Job-card industry and metadata |

The following scale-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Montage's official typography utility documents a broader scale from Display 1 through Caption 2. That published scale is useful system context; the smaller machine token set above contains only roles grounded in this capture.

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable asset, is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Montage-linked font resources remain license-check-per-resource; no redistribution right is asserted here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The current full-screen search dialog and Montage menu open states were captured. Default product buttons and filters were captured without a safe hover/focus expansion. Error, success, loading, empty, disabled, and application-completion states remain absent.

Recording those unobserved states as omitted rather than synthesized, and not promoting a filled apply CTA, segmented control, form validation, toast, or native navigation token without a current matching sample, is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. No filled apply CTA, segmented control, form validation, toast, or native navigation token is promoted without a current matching sample.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; the source records no safe hover/focus expansion, so those visual treatments remain omitted and the `focus-visible` row does not carry a color. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. Where exact selector/label/destination/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. Search-dialog error applicability is omitted because exact query-validation semantics are unresolved; source unobserved/unpromoted error is not a `not-applicable` reason. This is not a complete state-coverage claim.

The mini job card and directory job card have default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted. The Montage menu keeps `Type: dialog` and verified geometry, shadow, overlay/menu use, and dialog-open; `Kind` and a state-applicability map are omitted because dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading.

### Header account action

- Role: current product header account action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#0066ff`
- Border: `1px inset rgba(112,115,124,0.16)`
- Radius: 8px
- Padding: 7px 14px
- Height: 32px
- Font: 14px / 400
- Use: current product header account action
- Observed: default captured; no hover/focus token promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the current product header |
| hover | applicable | Pointer-web account action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header account action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as current product header account action; exact selector/label/destination/request/outcome is unresolved.

### Job filter trigger

- Role: all-tags and filter trigger on the job directory
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#171719`
- Border: `1px inset rgba(112,115,124,0.16)`
- Radius: 8px
- Padding: 7px 11px
- Height: 36px
- Font: 14px / 400
- Use: all-tags and filter trigger on the job directory
- Observed: default captured; no selected value inferred

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the job directory |
| hover | applicable | Pointer-web filter trigger; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter trigger can be unavailable; visual treatment omitted |
| loading | not-applicable | A filter trigger opens local tags or filters; the control itself does not enter a loading state |
| error | not-applicable | Opening filters is not a validation or request-failure state on the trigger |
| success | not-applicable | Applying a filter is not a success confirmation on the trigger |

### Mini job card

- Role: horizontal recommended-job card on the current home surface
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Media: horizontal 120×90 with 12px radius
- Gap: 14px
- Font: 16px / 600 / 24px position title
- Use: horizontal recommended-job card on the current home surface

### Directory job card

- Role: vertical job result card on the current directory
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Media: 308×205 thumbnail with 12px radius and 8px bottom margin
- Body padding: 0px 6px
- Gap: 2px
- Font: 16px / 600 position title
- Use: vertical job result card on the current directory

### Search dialog

- Role: full-screen product search input revealed from the header
- Kind: interactive
- Type: input
- Anatomy: value field in a full-screen search surface
- Background: `#ffffff`
- Text: `#171719`
- Input font: 16px / 400 / 24px
- Use: full-screen product search input revealed from the header
- Observed: dialog-open captured on four product routes. Default product buttons and filters were captured without a safe hover/focus expansion.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the full-screen search input |
| hover | applicable | Pointer-web search field; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | not-applicable | The field takes a query; result fetching is not a loading state of the input |
| success | not-applicable | Completing a search is not a success confirmation on the input |

Error applicability is omitted. Source names this control as a full-screen product search input revealed from the header; exact query-validation semantics are unresolved. Source unobserved/unpromoted error is not a `not-applicable` reason.

Additional observed named state: dialog-open, captured on four product routes.

### Montage menu

- Role: compact current Montage navigation/menu overlay
- Type: dialog
- Kind: omitted. The source records type, geometry, shadow, overlay/menu use, and open state; dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: overlay menu
- Background: transparent
- Radius: 16px
- Gap: 4px
- Shadow: `0 2px 4px -2px rgba(23,23,23,0.06), 0 4px 6px -1px rgba(23,23,23,0.06)`
- Use: compact current Montage navigation/menu overlay
- Observed: dialog-open captured on Montage pages / both Montage surfaces

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout application is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Job discovery uses repeatable grid rhythm while the card body itself stays flat. Keep 12px media rounding distinct from 8px product controls and 16px overlays. Dense metadata belongs below a clear 16px/600 position title. Product composition and Montage documentation examples may share foundations but are not interchangeable evidence.

The inspected product adapts repeated job units and search overlays while retaining the same type and radius hierarchy. Exact breakpoints and native-app navigation behavior were not promoted from these desktop captures.

The following measurement-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. The 32px header account action, 36px filter trigger, 120×90 mini-card media, 308×205 directory thumbnail, and full-screen search overlay are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Wanted's official system language is practical, encouraging, and centered on helping working people become more themselves.

The following Content application, including not promoting synthetic voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Wanted-authored or a separately published UI specification. Product copy should make the next career action legible without overpromising a match or outcome. Search, filter, and job-detail language should prioritize concrete role, company, location, and process information. Employer-facing or system documentation may be more technical, but should preserve the same directness and respect for the reader's decision. Use direct labels, specific role/company information, and respectful guidance rather than motivational clichés.

No synthetic voice samples are promoted.

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

- old marketing orange, pink, sky, violet, semantic error/success/warning, and `#f7f7f8`
- Wanted Sans Variable and Pretendard JP Variable as the current UI family
- campaign-only use of Wanted Sans and native-app type overrides
- Montage Display 1 through Caption 2 as machine tokens
- hover, focus, error, success, loading, empty, disabled, and application-completion visual treatments
- filled apply CTA, segmented control, form validation, toast, and native navigation
- selected value on the job filter trigger
- exact breakpoints and native-app navigation behavior
- generic modal shadow
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; dialog/menu expansion is not that gate
- first-party logo mark beyond catalog Google-favicon identity
- interactive kind and state-applicability map for the mini job card, directory job card, and Montage menu
- header account loading, error, and success applicability (exact selector/label/destination/request/outcome unresolved)
- search-dialog error applicability (exact query-validation semantics unresolved)
- focus-visible visual treatments; the missing hover/focus expansion is a different observation
