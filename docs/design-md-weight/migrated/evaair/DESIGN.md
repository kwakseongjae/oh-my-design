# 長榮航空 (EVA Air) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

長榮航空 (EVA Air) is Taiwan’s international airline, created by Evergreen Group founder Chang Yung-Fa in 1989 and flying its first service in 1991. EVA’s own account situates the airline in Evergreen’s transportation heritage while setting quality service and safety as the starting standards for the carrier. Its official values page frames the airline around quality service, safety, comfort, international reach, and environmental care, describes a network from Taiwan’s Taoyuan hub, and links service improvements such as digital dining and e-library services to environmental goals. The current company chronicle records digital cargo participation and network expansion. EVA’s official marketing policy asks its teams and partners to keep product information accurate, transparent, fair, and socially responsible. Reading those records together as a brand evolving through operational and service infrastructure as well as passenger-facing hospitality is a derived editorial inference from EVA’s published material; it is not EVA-authored positioning or a separately published brand statement.

This contract covers three measured Korean-locale public web pages only: the public airline home page, the corporate about-us page, and the awards-and-honors page. Those pages combine a travel-planning utility surface with corporate material about safety, service, and a global network. Corporate values, chronicle, and marketing-policy material is brand and business context—not a license to expand the three measured web surfaces into a universal cabin, mobile app, or booking-flow design system. Unobserved interaction, responsive, authenticated booking, cabin, and native-app behavior stays out of scope.

The three measured pages are notably restrained: white fields and black copy carry the information load; the measured green `#4b7d6b` is concentrated in information-card treatment; orange `#cc4b00` marks the awards accordion’s active label. Describing that impression as orderly and operational rather than built from broad, saturated marketing fills is a derived editorial inference from the measured geometry; it is not EVA-authored or a separately published brand or UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Start a trip search in the home booking widget, through the measured booking text field and booking-widget tabs.
- Read corporate about-us information, including the green information panel, on the public about surface.
- Work through the awards-and-honors list using the awards-page accordion trigger.
<!-- design-md:claim-end -->

### Audience

Use stakeholder groups only. EVA’s public service categories support four groups: a trip planner who searches routes, fares, and travel information before booking; a managing passenger who needs clear access to booking changes, check-in, seats, meals, and flight updates; an assistance seeker who needs current, accessible information about special travel requirements and support; and a corporate or cargo partner who encounters business-travel, cargo, digital, and operational information in EVA’s broader public ecosystem. These four are stakeholder archetypes derived from EVA’s published public service categories, not synthetic research personas or behavioral claims, and not EVA-authored audience definitions. No individual biography is promoted.

### Distinctive traits

- White `#ffffff`, black `#000000`, and square `0px` chrome dominate the supplied public pages.
- A green `#4b7d6b` information-card panel pairs with white text and a 3px lower media edge.
- The awards page uses `#cc4b00` for its 30px accordion labels rather than a filled primary button.
- 3px form-control corners coexist with selected 24px booking-widget tabs; geometry is contextual, not a single radius scale.
- The only captured interaction records are booking-tab selected states. No hover, focus, pressed, disabled, error, dialog, or toast values are promoted.

### Principles

The four decision principles below, and the applied rules that follow them, are a derived editorial implementation inference from the verified surfaces and EVA’s published values and marketing policy; they are not EVA-authored or a separately published UI specification.

1. **Safety and service are coequal.** *UI implication:* make safety, assistance, and trip-management information clear rather than decorative.
2. **Accurate information earns trust.** *UI implication:* prefer specific labels, conditions, and status information over promotional abstraction.
3. **Global travel should remain navigable.** *UI implication:* organize public journeys around planning, managing, flight information, and assistance without conflating them.
4. **Sustainability belongs in operational context.** *UI implication:* state the relevant initiative or action precisely; do not turn sustainability into an unsupported green UI semantic.

Applied rules:

- Keep high-density travel information legible against the measured white canvas and black text.
- Use `#4b7d6b` for the evidenced booking-selected or information-panel contexts.
- Preserve 0px structural edges, 3px input/media corners, and the observed 24px selected booking tab as distinct patterns.
- Treat the availability of accessibility and accurate service information as a content requirement, consistent with EVA’s published marketing policy.

### Avoid

- Do not present `#cc4b00` as a global filled CTA; its supplied evidence is an awards accordion label.
- Do not substitute a system or fallback font for an EVA-owned face.
- Do not invent hover, focus, pressed, disabled, error, dialog, toast, or responsive values from the captured default geometry.
- Do not use corporate sustainability, cabin, or campaign language as evidence for unmeasured public-web components.
- Do not turn the green panel into an inferred success state or the orange accordion label into a universal action color.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Selector-backed public surface colours:

- **Canvas** (`#ffffff`): repeated public page ground and form field fill.
- **Foreground** (`#000000`): body, navigation, and form text in the supplied pages.
- **Green information panel** (`#4b7d6b`): about-page `card-info--green` panel and selected booking-widget tab fill.
- **On green** (`#ffffff`): observed text and border sibling on the green information panel and selected tab.
- **Awards accent** (`#cc4b00`): awards-page accordion trigger text; it is not evidenced as a generic filled CTA.
- **Hairline / form border** (`#666666`): observed booking-field border and header utility separator.

`#ed5500`, `#d8d8d8`, and other low-frequency samples remain raw evidence rather than canonical role tokens. `#eeeeee` is the measured awards-accordion bottom rule only.

### Spacing

Measured values: 5px, 10px, 20px, and 30px. Use them only in contexts supported by the supplied public surfaces.

### Shape

- Square (structural): 0px
- Media: 3px
- Input: 3px

3px form-control corners coexist with the selected 24px booking-widget tab. Geometry is contextual, not a single radius scale.

### Elevation

The supplied home travel-card shell exposes `rgba(0,0,0,0.16) 0px 3px 6px 0px`. Most sampled public elements are flat and report no shadow. Keep flat containers as the default and retain that shadow only for the measured travel-card context; no modal, overlay, toast, or floating-menu elevation token was captured.

### Motion

No animation duration, easing curve, transition, or motion-reduction preference is present in the supplied computed-style and interaction evidence. The observed tab selection is a state record, not evidence for an animation contract; no motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No EVA typography standard or product-specific family statement was located in the first-party material reviewed. |
| Live computed surface-use | The supplied Korean public surfaces repeatedly compute to a Dotum-first Korean stack. `Dotum` is classified as unresolved because it has no matching loaded FontFace or known-system mapping. |
| Official distributed brand asset | No EVA-owned distributed type asset was located. |
| Declared-only | EVA-hosted `Roboto Mono` declarations have zero visible uses in the supplied capture. |
| System / license context | EVA-hosted Roboto files appear in the raw evidence, but Roboto is classified as system rather than an EVA brand face. Roboto’s separate Apache-2.0 license does not make it an EVA typography token. |

### Family

The Dotum-first stack is described as a live computed surface fact only and is not promoted to a brand UI family token; no named EVA UI family is claimed. No fallback typeface may be rendered as though it were an EVA-owned face. Component font entries therefore read `unresolved computed stack` rather than naming a family.

### Type roles

| Role | Size | Weight | Line height | Captured context |
|---|---:|---:|---:|---|
| Body | 16px | 300 | 24px (1.5) | Repeated public page body |
| Navigation label | 14px | 300 | 16.8px (1.2) | Public navigation list |
| Booking tab | 16px | 500 | 22.4px | Selected booking widget tab |
| Awards accordion label | 30px | 500 | normal | Awards-page accordion trigger |

### Assets

No EVA-owned distributed type asset was located, and this contract carries no first-party EVA image, icon, or logo file. Do not substitute a fallback face or a stand-in asset where an EVA asset is unresolved.

<!-- design-md:section components-states -->
## 4. Components & States

### State record

Only the booking tab’s selected state is captured. The supplied evidence does not establish visual specifications for empty, loading, error, success, skeleton, disabled, hover, focus, pressed, or dialog states; no values are added for them.

| Category | Evidence boundary |
|---|---|
| Empty | No captured empty-state component. |
| Loading | No captured loading indicator or timing rule. |
| Error | No captured error field, message, or color treatment. |
| Error recovery | No captured retry or recovery control. |
| Success | No captured success confirmation treatment. |
| Success follow-up | No captured completion or next-step component. |
| Skeleton | No captured skeleton surface. |
| Disabled | No captured disabled value. |
| Focus | No captured focus value. |
| Pressed / hover | No captured pressed or hover value. |
| Selected tab | Booking-widget `selected` and `tab-selected` states are captured; the selected tab values appear below. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Absence of an observation is never a `not-applicable` reason; where a state is marked `not-applicable` below, the stated reason is the control’s role. Applicable states whose visual treatment is unresolved keep the applicability and omit the value. This is not a complete state-coverage claim.

### Booking Field

- Role: home booking text field
- Type: `input`
- Kind: interactive
- Anatomy: value field
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #666666`
- Radius: 3px
- Padding: 10px 10px 10px 50px
- Height: 44px
- Font: 16px / 400 / unresolved computed stack
- Observed: default captured; the interaction log records booking-tab selection only, not focus, error, disabled, or pressed values

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the home surface |
| hover | applicable | Pointer-web text field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Input control; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

### Booking Widget Tab

- Role: home booking-widget mode tab
- Type: `tab`
- Kind: interactive
- Variant: selected — the measured values below are the selected tab
- Background: `#4b7d6b`
- Text: `#ffffff`
- Radius: 24px
- Padding: 1px 10px
- Height: 42px
- Font: 16px / 500 / unresolved computed stack
- Observed: selected and tab-selected were captured; no hover, focus, pressed, or disabled values were captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected rest state of the tab; visual treatment omitted |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | Tab control; visual treatment omitted |
| loading | not-applicable | The tab selects which booking panel is shown; a fetch lifecycle belongs to the panel it reveals, not to the selector. |
| error | not-applicable | The tab submits nothing; validation outcomes belong to the fields inside the selected panel. |
| success | not-applicable | A mode selector carries no completion outcome of its own. |

### Awards Accordion

- Role: awards-page accordion trigger
- Type: `button`
- Kind: interactive
- Anatomy: disclosure trigger with label
- Text: `#cc4b00`
- Border: 0px 0px 1px `#eeeeee`
- Radius: 0px
- Padding: 30px 70px 30px 40px
- Height: 96px
- Font: 30px / 500 / unresolved computed stack
- Observed: default captured only; no expanded, hover, focus, pressed, or disabled value was captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the awards surface |
| hover | applicable | Pointer-web trigger; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable trigger; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The trigger discloses an awards row already present on the page; it owns no fetch lifecycle. |
| error | not-applicable | A disclosure trigger submits nothing and carries no validation outcome. |
| success | not-applicable | A disclosure trigger has no completion outcome to confirm. |

Beyond the seven canonical states, this control has an expanded/collapsed role state. Its visual treatment is unresolved and no value is supplied for it.

### Green Information Card

- Role: about-page card information panel
- Type: `card`
- Anatomy: contained panel
- Background: `#4b7d6b`
- Text: `#ffffff`
- Radius: 0px 0px 3px 3px
- Padding: 20px
- Font: 16px / 300 / unresolved computed stack

The supplied evidence establishes no interaction contract for this panel, so no control kind and no state-applicability map are asserted. This is a contained panel, not evidence that all travel cards receive a green fill.

### Footer List Item

- Role: public footer list row
- Type: `listItem`
- Text: `#ffffff`
- Radius: 0px
- Padding: 10px 0px
- Font: 16px / 300 / unresolved computed stack

The supplied evidence establishes no interaction contract for this row, so no control kind and no state-applicability map are asserted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Preserve the separation between a compact booking module, long-form corporate information, and an awards list. Use the measured 5px, 10px, 20px, and 30px spacing values only in contexts supported by the supplied public surfaces. Treat booking controls as form geometry and awards rows as full-width information controls; do not collapse them into one generic button recipe.

The packet supplies desktop `1440x900` observations only. It establishes no breakpoints, mobile rearrangement, touch-target policy, or responsive typography behavior. The 44px booking field, 42px selected booking tab, and 96px awards accordion row are desktop measurements, not cross-viewport specifications; preserve them as desktop evidence and omit unobserved responsive rules.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official EVA Values and marketing policy support a service register that is attentive, direct, accurate, and responsible. That reading, and the Do / Don’t pairs below that apply it, are a derived content-tone interpretation of EVA’s published documents; they are not EVA-authored voice guidance and not a claim about an unmeasured UI copy system.

| Do | Don't |
|---|---|
| State service and travel information plainly. | Use exaggerated performance or sustainability claims. |
| Use reassuring, operational language around safety and assistance. | Replace specific guidance with vague premium language. |
| Keep accessibility information actionable. | Assume a traveler’s needs or bury assistance details. |

Observed public-site samples: “Plan & Book,” “Manage Your Trip,” and “Safety First.” These labels show short task-led navigation; they do not establish a broader copy taxonomy.

The three measured pages are the Korean-locale editions of EVA’s public site, while the values, chronicle, and marketing-policy statements cited in this contract come from EVA’s English-locale corporate pages. That pairing establishes no cross-locale copy contract. The brand name 長榮航空 stays in its published form; set an English rendering beside it rather than in place of it.

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

- hover, focus, pressed, disabled, error, dialog, and toast visual treatments
- empty, loading, error-recovery, success, success-follow-up, and skeleton treatments
- the awards accordion’s expanded treatment
- role assignments for the `#ed5500` and `#d8d8d8` low-frequency samples
- a named EVA UI type family and any EVA-owned distributed type asset
- breakpoints, mobile rearrangement, touch-target policy, and responsive typography behavior
- animation duration, easing curve, transition, and motion-reduction preference
- authenticated booking, cabin, and native-app behavior
