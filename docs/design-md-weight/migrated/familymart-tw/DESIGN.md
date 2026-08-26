# 全家便利商店 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

全家便利商店 (Taiwan FamilyMart) is a convenience-retail business that began with its first Taipei shop in 1988 and has developed a nationwide store, supply-chain, fresh-food, and digital-service network. 全家便利商店 says it grew from one store into a network embedded in daily routines, and that it built its business with employees, franchisees, customers, suppliers, and cross-industry partners. Its official history explicitly labels 2021–2026 as a period of digital transformation.

The company describes its current direction as a customer-needs-led OMO, data-driven retail platform that connects stores and digital channels, with an aim of making cross-industry convenience part of everyday life. It also states an ESG direction of a fair, mutually beneficial sustainable ecosystem. Its franchise material presents the lasting brand idea as 「全家就是你家」 and describes a mix of community retail, supply-chain capability, fresh food, and varied store formats. These are corporate narrative facts, not UI or typography specifications; this reference does not attribute an unverified executive quotation or translate that idea into unobserved product behavior.

This contract covers three captured public routes only — the public marketing route, the convenience-information route, and the store-service map route. It does not describe a checkout, a membership account, a native app, the corporate website, or an unobserved mobile breakpoint. FamilyMart's corporate material supports the business and OMO context; it does not turn corporate language into UI-token evidence.

The following reading of those routes is a derived editorial implementation inference from the verified surfaces; it is not 全家便利商店-authored or a separately published UI specification: the practical "always nearby" role appears as a white, information-dense utility surface with a narrow green brand signal, dark functional text, quiet gray navigation, compact three-pixel controls, and teal content-card headings; the page does not turn green into a dominant canvas but uses the measured `#00b347` most visibly as a small current-section marker and utility accent; and that restrained treatment lets store information, service categories, and promotional imagery carry the page's changing content while the shell remains familiar.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Move through the main navigation of the captured public marketing route at `https://www.family.com.tw/Marketing/ko`, where the current section is marked by the observed `main-menu__menu--active` row.
- Read convenience-service information on the captured product-information route at `https://www.family.com.tw/Marketing/zh/Convenience`.
- Reach store information on the captured store-service map route at `https://www.family.com.tw/Marketing/zh/Map`.
<!-- design-md:claim-end -->

### Audience

The reviewed first-party material names the stakeholder network 全家便利商店 says it built the business with: employees, franchisees, customers, suppliers, and cross-industry partners.

The four service-context groups below are a derived editorial implementation inference from the verified surfaces; they are not 全家便利商店-authored or a separately published UI specification. The source records them as archetypes drawn from the stated stakeholder and convenience-service framing, not as research-validated personas or demographic claims:

- **Nearby customer:** Needs a clear, quick route to store, product, or service information.
- **Franchise operator:** Needs operating and support information distinct from consumer-facing marketing.
- **Partner or supplier:** Encounters corporate and ecosystem context rather than a consumer transaction flow.
- **Service explorer:** Uses public route navigation to understand changing convenience, food, and store offerings.

No demographic claim is asserted for any of them.

### Distinctive traits

- White `#ffffff` page surfaces with `#212529` operational text.
- A compact `#00b347` current-section accent rather than a documented universal CTA fill.
- `#7a7a7a` is the measured text-navigation value and `#f2f2f2` the measured utility-control fill.
- Zero- and three-pixel corners dominate the measured public routes; no elevation token was observed.
- The card-title accent is teal `#68b5ac`, measured on `card__title`; the navigation green is a separate measured role.

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not 全家便利商店-authored or a separately published UI specification.

1. **Start from customer need.** *UI implication:* Make the immediate store/service task legible before secondary promotion; do not claim unobserved flows.
2. **Connect physical and digital convenience.** *UI implication:* Keep route context and service wayfinding explicit; verify any OMO interaction separately.
3. **Grow with a broad stakeholder network.** *UI implication:* Distinguish customer-facing service information from partner, corporate, and franchise content rather than collapsing the domains.
4. **Evolve with social and environmental change.** *UI implication:* Treat sustainability and service evolution as content context, not as license to invent status, success, or motion patterns.

### Capture-bound application

These 7 items are a derived editorial implementation inference from the verified surfaces; they are not 全家便利商店-authored or a separately published UI specification.

- Keep public information surfaces white and dense enough for store/service discovery.
- Use dark functional text, restrained gray navigation, and the locally measured green cue in their observed roles.
- Preserve the sharp-to-compact 0px/3px corner distinction.
- Treat route-selected navigation as a static context marker unless interaction evidence is captured.
- Keep the green accent local to an explicitly current navigation row or measured utility treatment rather than flooding the canvas.
- Use the measured teal only for content-card-title emphasis until a wider product-surface role is observed.
- Keep the observed dark-on-white informational baseline, and evaluate any new green text or fill against its actual foreground/background pairing.

### Avoid

- Do not invent a green filled CTA, hover recipe, or universal active state from this capture.
- Do not substitute a system font for the unresolved computed family or label it a FamilyMart typeface.
- Do not transfer corporate vision language into a component specification.
- Do not infer authenticated purchase, account, or native-app behavior from the public routes.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Brand green** (`#00b347`): repeated computed text/border value across all three supplied routes, and the measured fill on a current-section navigation row. It is not generalized into an unmeasured primary-button system.
- **Canvas** (`#ffffff`): repeated public-route background and card surface.
- **Ink** (`#212529`): repeated body text and border value; the observed functional baseline.
- **Navigation gray** (`#7a7a7a`): the measured text/border value on `navbar-item--text` links.
- **Utility surface** (`#f2f2f2`): the measured fill of the compact `dropbtn-more__btn` utility control.
- **Card-title teal** (`#68b5ac`): measured content-card title color. Its local role is retained rather than inferred as a general brand color.

### Evidence-domain boundary

Other measured siblings — `#007bff`, `#444444`, `#737373`, `#8c8c8c`, `#28a745`, and `#36ad1b` — are kept in the raw proof and omitted from tokens because their role is not resolved at a smaller boundary. The three supplied routes are public marketing, convenience-information, and store-service surfaces; corporate, vision, and franchise documents are business context and do not extend this measured palette.

### Spacing

Measured values `xs` 3, `sm` 5, `md` 10, `lg` 15, recorded in the supplied bundle as a `3/5/10/15px` set. Use them only as a compact public-route rhythm; the packet does not establish a universal grid.

### Shape

- Square: 0px
- Compact: 3px

Zero- and three-pixel corners dominate the measured public routes, and the sharp-to-compact distinction is the observed one.

### Elevation

The supplied component and element samples report `box-shadow: none`. The reference therefore has only the flat shadow token; it does not claim that dialogs, menus, maps, or other unobserved layers are shadowless.

### Motion

No duration, easing, transition, loading, carousel, or menu-motion value is established by the supplied evidence. The capture has `interactionCount: 0`; motion tokens and motion rules are therefore omitted rather than filled with a generic convenience-retail default.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The supplied bundle records `Microsoft JhengHei, 微軟正黑體, sans-serif` as the computed family on 652 visible observations across the three public routes. The bundle classifies it as unresolved and low confidence, because there is no matching loaded FontFace or known-system mapping. The observed samples are recorded as metrics only; no `tokens.typography.family` is emitted. |
| Official product-use | No first-party source found in the permitted research names a product or app typeface. No such claim is inferred from the public capture. |
| Official distributed brand asset | No first-party distributed FamilyMart type asset was identified in the permitted research. The absence of that finding does not alter the measured public-route metrics. |
| Declared-only and loaded icon assets | The bundle reports `Font Awesome 5 Free` as loaded on two card-role observations, and `Font Awesome 5 Brands`, `IAGlyphs`, and `Material Icons` as declared with zero visible use. These icon-font facts do not establish a FamilyMart UI typeface and are omitted from typography tokens. |

### Family

- **Computed visible stack:** `Microsoft JhengHei, 微軟正黑體, sans-serif` — unresolved and low confidence in the supplied bundle, and therefore not promoted to a family token.
- Do not substitute a system font for the unresolved computed family or label it a FamilyMart typeface.

### Type roles

| Role | Size | Weight | Line height | Evidence boundary |
|---|---:|---:|---:|---|
| Body / text navigation | 14px | 400 | 21px (1.5) | Observed public-route body and text navigation; captured public routes only |
| Main navigation list item | 14px | 700 | 21px (1.5) | Observed main navigation list-item label; `main-menu__menu` row only |
| Content-card title | 16px | 700 | 19.2px (1.2) | Observed content-card title; `card__title` only |

The supplied bundle records the line heights as unitless ratios (1.5 and 1.2); the pixel figures are those ratios at the measured sizes.

### Assets

- The recorded logo metadata resolves to a favicon-service URL on a third-party host, keyed to the `family.com.tw` domain. It is identity metadata rather than a captured first-party 全家便利商店 mark, and no first-party logo file is established here.
- The captured routes carry promotional imagery, but the supplied evidence attaches no asset, license, or usage rule to it, and none is created here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied bundle reports `interactionCount: 0`. The supplied evidence establishes no branded state system, and the source state contract is preserved here in full so that these boundaries are not silently replaced with generic FamilyMart-looking UI:

| Category | Observed status | Boundary |
|---|---|---|
| Empty | Not observed | No empty-state copy, visual, or component token is asserted. |
| Loading | Not observed | No spinner, progress, or loading transition is asserted. |
| Error — form | Not observed | No validation color, message, or field geometry is asserted. |
| Error — service | Not observed | No outage or map-service treatment is asserted. |
| Success | Not observed | No confirmation treatment is asserted. |
| Skeleton | Not observed | No skeleton pattern is asserted. |
| Disabled | Not observed | No disabled visual token is asserted. |
| Selected route | Static capture only | A `main-menu__menu--active` row is observed; it is not an interaction-state claim. |
| Hover | Not observed | `interactionCount: 0`; omitted. |
| Focus | Not observed | `interactionCount: 0`; omitted. |
| Pressed | Not observed | `interactionCount: 0`; omitted. |

`current-section-nav-row` is intentionally the sole component token: it is a high-confidence collector `listItem` with a named class, source surface, selector, and default geometry. One component token is published, and that is not a claim that every public component was observed.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; non-observation is never used as a `not-applicable` reason, and the `not-applicable` rows below give role reasons instead. State coverage is not complete here.

### Accessibility boundary

Preserve visible route context without treating a class name as proof of keyboard focus. The supplied evidence contains no keyboard, screen-reader, contrast-audit, error, or responsive test; those requirements remain unverified rather than assumed.

### Current-section navigation row

- Role: static current-section navigation row on the captured public marketing route
- Type: listItem
- Kind: interactive
- Anatomy: label row
- Background: `#00b347`
- Text: `#212529`
- Radius: 0px
- Height: 51px
- Font: 14px / 700 / computed family unresolved
- Observed: default only; `interactionCount: 0`
- Use: Static `home::li.main-menu__menu--active` current-section row; this selector, surface, and default geometry are the canonical evidence for `current-section-nav-row`.
- Field note: the selected-looking class is a static route snapshot, not an observed hover, focus, pressed, disabled, or other dynamic state. It is preserved as a list-item variant because the observed element is a navigation row, not as a button or inferred tab; the source `listItem` type is not rewritten.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static route snapshot captured on the public marketing route |
| hover | applicable | Pointer-web navigation row; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable navigation row; visual treatment omitted |
| disabled | applicable | A main-navigation row can be unavailable; visual treatment omitted |
| loading | not-applicable | The row marks which section is current; moving to another section replaces the route rather than putting this row into a pending state |
| error | not-applicable | Current-section meaning is route context, not a request or validation failure on the row |
| success | not-applicable | Current-section meaning is route context, not action-outcome confirmation |

### Measurements retained outside tokens

The bundle measures a compact `dropbtn-more__btn` button (`#f2f2f2` fill, `#00b347` text, 3px radius, 5px padding, 12px/400) and a 14px input sample. They remain raw default geometry only: zero interaction records do not support state matrices, and no interactive component token is emitted for them.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured public routes repeat the measured `3/5/10/15px` rhythm and the zero- and three-pixel corner pair; the packet does not establish a universal grid. The current-section navigation row measures 51px high, and the retained compact utility button carries a 3px radius with 5px padding. Those are local measurements rather than a breakpoint specification.

The three routes were captured at 1440×900. Do not derive mobile columns, touch targets, carousel behavior, or breakpoints from this packet.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published line

- 「全家就是你家」 — the lasting brand idea presented in first-party franchise material. (Reading aid added here: FamilyMart is your home.) The published string is the Traditional Chinese above; do not substitute the English rendering for it.

### Voice reading

The first-party vision frames the service around customer needs, convenience, shared growth, and a cross-industry convenience-life platform.

The register below and the 3 Do/Don't rows that follow it are a derived editorial implementation inference from the verified surfaces; they are not 全家便利商店-authored or a separately published UI specification. For public service copy, that vision supports a practical, nearby, and action-oriented register; it is not a claim about an unpublished editorial style guide.

| Do | Don't |
|---|---|
| Name the immediate service or store task. | Replace the task with abstract technology language. |
| Keep actions short and locally useful. | Promise unavailable real-time capability. |
| Connect convenience to a clear next step. | Invent a branded slogan or quote. |

### Locale

Observed public-route voice samples: utility navigation labels, a convenience-information route, and a store-map route. Their exact strings are not tokenized or generalized as a copy system.

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

- checkout, membership account, native app, corporate website, and unobserved mobile breakpoint surfaces, including authenticated purchase and account behavior
- a documented universal CTA fill, an unmeasured primary-button system, a hover recipe, and a universal active state
- empty, loading, form-error, service-error, success, skeleton, disabled, hover, focus, and pressed treatments
- dialog, menu, map, and other unobserved layer elevation
- keyboard, screen-reader, contrast-audit, error, and responsive tests
- mobile columns, touch targets, carousel behavior, and breakpoints
- a product or app typeface, and a first-party distributed FamilyMart type asset
- duration, easing, transition, loading, carousel, and menu-motion values
- the resolved roles of the measured siblings `#007bff`, `#444444`, `#737373`, `#8c8c8c`, `#28a745`, and `#36ad1b`
- a published editorial style guide behind the observed public-route copy
