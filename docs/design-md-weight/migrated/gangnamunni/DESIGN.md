# Gangnamunni (강남언니) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

강남언니 — carried in this contract as `Gangnamunni (강남언니)`, the Latin transliteration beside the Korean name rather than in place of it — is a Korean consumer service for finding and comparing medical-procedure information, hospitals, and event prices. This record states that description as widely documented public knowledge about the service rather than as a Gangnamunni statement quoted here; the color, type, geometry, and component values in this contract come from the live captures named below.

This contract covers the two current public consumer-product web surfaces this record inspected on 2026-07-13: the home surface `https://www.gangnamunni.com/` and the events surface `https://www.gangnamunni.com/events`. A third surface was inspected on the same date, the official post at `https://blog.gangnamunni.com/post/welchis/`, and this contract does not treat it as a consumer-product surface; the source classifies it as documentation context. It does not treat either consumer surface as a proxy for the native app or for the Welchis PC back office.

The official team describes Cell as the system for the consumer app across iOS, Android, and mobile web, while Welchis is a separate PC back-office system; the same official account separates the two because their users and interaction patterns differ. The company's design writing states a mission to make better medical services accessible to anyone and describes customer perspective as central to product work.

The captured interface layer is quiet: a `#ffffff` canvas, `#131517` foreground text, `#697683` muted labels, `#eff2f5` filter fills, `#b5bfc9` outline borders, a loaded and visible `PretendardVariable` text system, a compact 6px-radius outline CTA, and 32px full-radius filter chips.

The readings in this section — that the current public product routes put the research task ahead of ornamental branding, that the captured layer is quiet, that its outline CTA and procedure chips are compact and can be scanned quickly, that the product's public copy frames the service around confidence in a choice, that the design team's writing guidance connects that confidence to clear and understandable information, and that Cell and Welchis component geometry must therefore be kept apart — are a derived editorial implementation inference from the verified surfaces; they are not Gangnamunni-authored or a separately published UI specification. The values named alongside them are live-computed.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

The first outcome below is the service purpose this record states for the product. The two control-level outcomes under it are read out of the controls this record captures, since the source declares no task list of its own; reading all three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces, and it is not Gangnamunni-authored or a separately published task model.

- Find and compare medical-procedure information, hospitals, and event prices on the current public consumer surfaces.
- Narrow the procedure list with the home filter chips, which this record captures in both an unselected and a selected DOM variant.
- Take the small outline CTA that carries the same fingerprint on the home and events surfaces.
<!-- design-md:claim-end -->

### Audience

No named synthetic personas are included. None is reconstructed here and none is re-hosted in the sidecar. First-party sources substantiate only two groups: consumer-app users, whom Cell serves, and PC back-office users, whom Welchis serves.

### Distinctive traits

- Current canvas `#ffffff`, foreground `#131517`, muted text `#697683`, and filter surface `#eff2f5`
- Loaded, visible consumer-product family `PretendardVariable`
- Compact outline CTA and 32px full-radius filter-chip geometry
- Cell consumer surfaces and Welchis back-office documentation are separate evidence domains

The characterizing word above — *compact* — and the reading that Cell surfaces and Welchis documentation are separate evidence domains are a derived editorial implementation inference from the verified surfaces; they are not Gangnamunni-authored or a separately published UI specification. The Cell/Welchis platform split the second reading rests on is published by the design team; the evidence-domain boundary drawn from it belongs to this contract. The values inside the list are live-computed.

### Principles

The three headline statements below restate principles the official UI-text guideline publishes — understandable language and one topic at a time — together with the official Cell/Welchis platform separation. The *UI implication* attached to each, and the decision to read these three as this contract's design principles, are a derived editorial implementation inference from the verified surfaces and that guideline; they are not Gangnamunni-authored or a separately published UI specification.

1. **Make the next step understandable.** *UI implication:* give an error a concrete recovery action when current evidence supports that state.
2. **Keep a message to one topic.** *UI implication:* separate unrelated procedure conditions or instructions.
3. **Use the system for its user and platform.** *UI implication:* do not import Welchis desktop geometry into Cell without direct evidence.

### Application rules

These application rules are a derived editorial implementation inference from the verified surfaces; they are not Gangnamunni-authored or a separately published UI specification.

- Name tokens by their captured product role and source surface.
- Use loaded `PretendardVariable` for a reconstruction of this consumer web capture.
- Preserve the captured 32px full-radius filter-chip geometry.
- Keep Cell consumer work separate from Welchis references.

### Avoid

These avoidances are a derived editorial implementation inference from the verified surfaces; they are not Gangnamunni-authored or a separately published UI specification.

- Don't promote catalog identity orange without a current component observation.
- Don't reuse blog `pretendard` or declared `commitMono` as the product family.
- Don't invent hover, focus, disabled, error, toast, or changed pressed values.
- Don't promote responsive 303px card height into a general token.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The five values below are current computed observations from the captured consumer-product surfaces, each recorded with the element it was read from. The role names are this contract's naming of those observations rather than published Gangnamunni role names.

- **Canvas** (`#ffffff`): captured home feature-card action.
- **Foreground** (`#131517`): captured home outline CTA and filter chip.
- **Muted** (`#697683`): captured events-page tertiary label.
- **Surface** (`#eff2f5`): captured unselected home filter chip.
- **Border** (`#b5bfc9`): captured home outline CTA.

Only current computed consumer-product values are tokens here. The catalog identity color in frontmatter was not retained as a current computed component value, so no orange value is offered as a reusable UI token; its hex stays in the source ledger as catalog identity metadata.

### Spacing

Two named steps are recorded, 8px and 12px, and they appear in the captured control geometry: the outline CTA uses `8px 12px` padding and the filter chip uses `0px 10px`. These are public-surface samples, not a complete Cell scale.

### Shape

- CTA (outline CTA): 6px
- Card (media-card action): 20px
- Full (filter chip): 9999px

### Elevation

The retained component representatives report `box-shadow: none`. This describes those components only; it does not establish a global shadow, modal, or card-depth contract.

### Motion

No current first-party motion token, duration, easing curve, or reduced-motion behavior was collected, and none is promoted here.

This contract sets the gate for any later motion promotion, and states it as its own rule rather than as a Gangnamunni-published one: promoting an exact easing curve, a reduced-motion behavior, a transition-property list, or an animation name to a Gangnamunni motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior. A single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Status |
|---|---|
| **Official product-use** | No current Gangnamunni announcement naming a product font was found. |
| **Live computed surface-use** | `PretendardVariable` is first family in 616 visible consumer-product observations and has one loaded Gangnamunni-hosted WOFF2 source. |
| **Official distributed font asset** | Pretendard's upstream project documents `Pretendard Variable` and SIL Open Font License 1.1; this is not a Gangnamunni distribution claim. |
| **Documentation chrome** | The Welchis blog loaded separate `pretendard` files in 66 observations; those are not consumer-product tokens. |
| **Declared-only** | `color-emoji`, `commitMono`, `icomoon`, and fallback families had no visible usage. |
| **Unresolved evidence class** | No public evidence establishes a product font-license notice, native-app type contract, or monospace family. |

### Family

- **Current visible consumer-product family:** `PretendardVariable`, loaded from one Gangnamunni-hosted WOFF2 source and computed as the first family across the captured consumer surfaces.
- Do not reuse the Welchis blog `pretendard` files or the declared `commitMono` as the product family.

That reuse rule is this contract's application of the evidence-class table above. It is a derived editorial implementation inference from the verified surfaces; it is not Gangnamunni-authored or a separately published UI specification. The families, counts, and license facts in the table are observations and upstream-project facts.

### Type roles

| Role | Family | Size | Weight | Line height | Evidence |
|---|---|---:|---:|---:|---|
| Body | PretendardVariable | 16px | 400 | 24px | current consumer-product observation |
| Label | PretendardVariable | 14px | 500 | 19.6px | current home filter chip |
| Title | PretendardVariable | 20px | 700 | 28px | current home observation |

### Assets

The only asset entry this record carries for the product is a favicon logo; its URL stays in the source ledger rather than in this contract.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied bundle reports `interactionCount: 0`, so no hover, focus, disabled, error, toast, or changed pressed value is promoted. Two component records carry a verified `type: button` — the outline CTA and the procedure filter chip — and that type is kept per component rather than flattened into a single interactive kind. A third record described in the source, the home feature-card action, carries no `type` and no other interactive-kind evidence, so neither a kind nor a state-applicability map is decided for it.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by evidence completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; absence of an observation is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

The applicability judgments in the tables below, and the role readings written into their Reason column, are this contract's reading of what each control does. They are a derived editorial implementation inference from the verified surfaces; they are not Gangnamunni-authored or a separately published state specification. The geometry, color, type, and DOM-variant facts in the same records are observations.

### Source state contract

Preserved from the source in full: the supplied bundle has `interactionCount: 0` and no current first-party contract for loading, empty, error, success, disabled, or selection behavior beyond the captured DOM variants.

The two DOM observations that do exist — the filter chip's selected-true variant and the outline CTA's captured pressed state — are carried on the components below. Nothing else is introduced.

### Outline CTA — `outline-cta`

- Role: Current small outline CTA on home and events
- Kind: interactive
- Type: button
- Text: `#131517`
- Border: `1px solid #b5bfc9`
- Radius: 6px
- Padding: 8px 12px
- Font: 13px / 600 / PretendardVariable
- Observed: default, on the same fingerprint on home and events. A pressed state was captured; no changed pressed value was retained, so no pressed treatment is stated.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured with its text, border, radius, padding, and font on home and events |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; no treatment is promoted into this row |
| disabled | applicable | The control can be made unavailable; visual treatment omitted |
| loading | applicable | The record types this control as a `button` and names it a call to action; the action a CTA commits can pend. The record does not name that action, so no treatment is stated here |
| error | applicable | The same committed action can fail; no treatment is stated here |
| success | applicable | The same committed action can confirm its outcome; no treatment is stated here |

### Procedure Filter Chip — `filter-chip`

- Role: Current procedure filter chip on home
- Kind: interactive
- Type: button
- Background: `#eff2f5`
- Text: `#131517`
- Radius: 9999px
- Height: 32px
- Padding: 0px 10px
- Font: 14px / 500 / PretendardVariable
- Named appearance — selected: a separate selected-true DOM variant was captured with `#131517` background and `#ffffff` text. No interaction expansion accompanies it, so the variant is a captured appearance rather than an interaction contract.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the selected-false variant on home, with its background, text, radius, height, padding, and font |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; no treatment is promoted into this row |
| disabled | applicable | A procedure filter can be made unavailable to select; visual treatment omitted |
| loading | not-applicable | Selecting the chip switches it between its two captured appearances; that switch is the control's whole meaning and commits no operation of its own that pends. Semantic reason, never absence of an observation |
| error | not-applicable | The same switch has no outcome of its own that can fail. Semantic reason, never absence of an observation |
| success | not-applicable | The selected appearance is itself the result of the switch, so there is no separate outcome to confirm. Semantic reason, never absence of an observation |

### Home Feature-card Action

- Role: home feature-card action
- Background: `#ffffff`
- Text: `#000000`
- Radius: 20px
- Font: 16px / 400 / PretendardVariable
- The 303px rendered height is context, not a portable token.
- The source assigns this record no `type` and no other interactive-kind evidence, so no `kind` and no state-applicability map are declared for it.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Retained component observations include 8px and 12px CTA padding, 10px horizontal chip padding, 6px CTA radius, 20px media-card radius, and full-radius chips. These are public-surface samples, not a complete Cell scale or native-app layout specification.

Cell is the consumer system; Welchis is the PC back office. Do not transfer documentation chrome between them. The Welchis post is documentation context only; its typography and controls are not Cell/product tokens. The platform split itself is published by the design team; the transfer rule and the documentation-context classification drawn from it are a derived editorial implementation inference from the verified surfaces and are not Gangnamunni-authored or a separately published UI specification.

The supplied evidence has one retained capture context and establishes no breakpoints, grids, mobile navigation, or native-app behavior. Treat responsive behavior as unresolved. The 32px chip height, the 303px feature-card height, and the control paddings above are measurements from that one context, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official UI-text guideline calls for confident communication, easy-to-understand medical information, and one topic at a time. It permits restrained emphasis, including an exclamation mark, when it makes value or a completed journey clear.

| Principle | Apply | Avoid |
|---|---|---|
| Confidence | State a feature's value and completion directly. | Hesitant wording. |
| Understandability | Use familiar language and a next action for an exception. | Jargon or generic error text. |
| One topic | Keep one message focused; split distinct cases. | Dense combined instructions. |

The three principles named above and the exclamation-mark permission are published by the official UI-text guideline. The Apply / Avoid table restates them in this record's own words rather than quoting guideline copy, and reading them as this contract's microcopy rules is a derived editorial implementation inference from that guideline; the table is not Gangnamunni-authored guideline text or a separately published UI specification. No product CTA, error, or empty-state string was collected, so no synthetic voice sample is promoted.

### Terminology

- `강남언니` is the product name. Where a Latin form is needed, this contract writes `Gangnamunni (강남언니)`, beside the Korean name rather than replacing it.
- `Cell` names the design system for the consumer app across iOS, Android, and mobile web. `Welchis` names the separate PC back-office system. Do not use either name for the other's surfaces.

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

- the visual treatment of hover, focus, disabled, error, toast, and any changed pressed value on the declared controls
- a current first-party contract for loading, empty, error, success, disabled, or selection behavior beyond the two captured DOM variants
- any first-party motion token, duration, easing curve, or reduced-motion behavior, and the per-component computed observation that Foundations → Motion names as the gate for promoting one
- breakpoints, grids, mobile navigation, and native-app behavior
- a product font-license notice, a native-app type contract, and a monospace family
- research-backed decision, accessibility, and locale needs, which the source adds only when a user or first-party source supplies them
- a current component observation that would establish the catalog identity color as a UI token
