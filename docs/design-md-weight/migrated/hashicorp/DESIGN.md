# HashiCorp Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

HashiCorp, now an IBM company, builds infrastructure and security software for multi-cloud and hybrid environments. This contract covers three public-facing domains within the company site, not a signed-in application: `/ko` is corporate marketing, `/ko/pricing` is commercial/pricing marketing, and `/ko/products/boundary` is a Boundary product-marketing route. Those three route labels are the source's own. No developer documentation chrome or authenticated product UI was captured, so this reference does not promote those domains into the shared token set. Helios at `https://helios.hashicorp.design` is documented separately by HashiCorp as the public product design system for product foundations, content, components, and patterns. The machine-token note says only values observed in the supplied three-route capture are machine tokens. Treating the three captured routes as this contract's domain, not promoting uncaptured developer-documentation chrome or authenticated product UI into the shared token set, and treating that separate Helios record as not a substitute for the three-route tokens, is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

The current public expression puts a sober operational interface around that mission: white and near-white information surfaces sit beside deep charcoal sections, with blue as the shared action color and named product routes able to introduce their own accent. The 2024 Infrastructure Cloud brand launch also introduced HashiCorp Sans, a custom display typeface that ties the logotype and headlines together. In the captured public routes, that mix produces a clear division of labor: HashiCorp Sans carries large headings and eyebrow labels; system stacks carry reading text, navigation, controls, and cards. Calling that expression sober and operational, and calling the type split a division of labor, is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation. The values named alongside that reading — `#ffffff` / `#fafafa` / `#15181e` / `#0d0e12` surfaces, `#1060ff` shared actions, HashiCorp Sans on headings and a Boundary eyebrow, system-ui on body and controls, 4–5px control corners, 6px home card — are live observations.

Mitchell Hashimoto and Armon Dadgar met at the University of Washington in 2008 while working on a research project to make public-cloud technologies available to scientists. Hashimoto started HashiCorp in November 2012 and Dadgar joined as co-founder in 2013. Their early view was that organizations using multiple clouds would need a consistent, reliable set of automation tools for combinations of cloud and on-premises environments. The present company describes itself as an IBM company that helps organizations automate and secure multi-cloud and hybrid environments through The Infrastructure Cloud. In April 2024 it introduced that brand chapter and HashiCorp Sans; in February 2025 it officially joined IBM. These facts describe the corporate/brand domain and should not be read as a claim about the captured public UI’s runtime tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

The source declares no task list of its own. Reading the three captured routes as the jobs below is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

- Act on the shared marketing CTAs “Get started” and “Contact us” on `/ko`.
- Compare commercial offers on `/ko/pricing`, including the Terraform-labelled CTA and the selected/unselected pricing tabs.
- Evaluate Boundary on `/ko/products/boundary`, including the Boundary-labelled CTA and the loaded HashiCorp Sans eyebrow.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The official company material identifies technical and business teams, IT operators, practitioners, users, customers, and partners as stakeholders. This reference does not invent named or demographic personas; use those verified stakeholder groups as the starting point for task research. No biography is re-hosted in the sidecar.

### Distinctive traits

The values in this list are recorded observations. The grouping of them as the distinctive layer of the three routes is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

- White, near-white, deep-charcoal, and near-black surfaces are all observed in the capture
- Shared actions use `#1060ff`; a Terraform-labelled control and a Boundary-labelled control use their observed route-specific colors
- Loaded HashiCorp Sans appears in headings and a Boundary eyebrow; system-ui dominates visible UI text
- Controls use small 4–5px corners; the captured home card uses 6px

### Principles

The four headlines rest on HashiCorp-published About, origin, and font-announcement positions the source attributes to the company. The *UI implication* attached to each, and the decision to treat these four as this contract's design principles, are a derived editorial implementation inference from the verified surfaces; they are not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

1. **Workflows, not technologies.** The company frames its offering around real-world operator workflows. *UI implication:* lead with the task or outcome before product mechanics.
2. **Multi-cloud and hybrid operations.** The public mission is to automate and secure these environments. *UI implication:* avoid implying that a single provider is the default context.
3. **Open source at the core.** HashiCorp describes source-available projects and a practitioner community as foundational. *UI implication:* make technical learning and implementation paths legible alongside commercial paths.
4. **Pragmatic beauty.** The font announcement links “beauty works better” with pragmatism. *UI implication:* use distinctive display typography deliberately while keeping functional UI plain and readable.

### Application rules

These application rules are the source's own Do list.

- Use HashiCorp Sans only where the official brand describes display/logo/headline use and where it can actually be loaded.
- Use system-ui for the captured body and control treatments.
- Keep shared primary, Terraform, and Boundary CTA treatments attached to the route/context in which they were observed.

### Avoid

These avoidances are the source's own Don't list.

- Don't substitute a system font while labelling it HashiCorp Sans.
- Don't infer unobserved product colors, hover states, focus rings, or component variants from class names or adjacent routes.
- Don't treat declared DejaVu Sans Mono assets as a live code-font token.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels for recorded observations. Treating them as three-route observation labels rather than Helios baseline roles is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

Shared live surfaces

- **Shared primary** (`#1060ff`): blue primary CTA background. Token-set key `tokens.colors.primary`.
- **Primary border** (`#0c56e9`): observed border on that shared primary CTA. Token-set key `tokens.colors.primary-border`.
- **Bright blue** (`#2b89ff`): selected pricing-tab foreground. Token-set key `tokens.colors.primary-bright`.
- **Canvas** (`#ffffff`): navigation and light card background. Token-set key `tokens.colors.canvas`.
- **Secondary surface** (`#fafafa`): secondary CTA background. Token-set key `tokens.colors.surface`.
- **Muted surface** (`#f1f2f3`): observed badge and alert background. Token-set key `tokens.colors.surface-muted`.
- **Deep surfaces** (`#15181e`, `#0d0e12`): dark toggle and dark pricing-card/input backgrounds. Token-set keys `tokens.colors.surface-dark` and `tokens.colors.surface-deep`.
- **Light foreground** (`#3b3d45`): secondary CTA, navigation, and light-card text. Token-set key `tokens.colors.foreground`.
- **Dark-surface foreground** (`#d5d7db`, `#efeff1`): dark-route text and dark input text. Token-set keys `tokens.colors.foreground-dark` and `tokens.colors.on-dark`.
- **On-primary** (`#ffffff`): primary CTA text. Token-set key `tokens.colors.on-primary`.
- **Muted text** (`#656a76`) and **hairline** (`#b2b6bd`): observed supporting text and borders. Token-set keys `tokens.colors.muted` and `tokens.colors.hairline`.

Route-specific live variants

- **Terraform** (`#7b42bc`): one `color-terraform` CTA observed on `/ko/pricing`. Token-set key `tokens.colors.terraform`.
- **Boundary** (`#f24c53`): one `color-boundary` CTA observed on `/ko/products/boundary`. Token-set key `tokens.colors.boundary`.

No other product-color variant is included: it was not present in the supplied capture.

### Spacing

Token-set keys from the source, kept as separate steps (`md: 12` is not `base: 16`):

- `tokens.spacing.xs`: 4
- `tokens.spacing.sm`: 8
- `tokens.spacing.md`: 12
- `tokens.spacing.base`: 16
- `tokens.spacing.lg`: 24
- `tokens.spacing.xl`: 32
- `tokens.spacing.xxl`: 48

The capture records a recurring 4/8/12/16/24/32/48px spacing rhythm. Those px strings name the same seven steps; they are not a universal HashiCorp grid declaration. Reading the scale that way is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

### Shape

Token-set keys from the source, kept as separate steps (`nav: 4` is not `control: 5`; `control: 5` is not `card: 6`):

- `tokens.rounded.square`: 0
- `tokens.rounded.sm`: 2
- `tokens.rounded.nav`: 4
- `tokens.rounded.control`: 5
- `tokens.rounded.card`: 6

High-frequency visible corners are 0px, 4px, 5px, and 6px. The only captured 8px radius is not promoted as the card standard. Not promoting that captured 8px radius as the card standard is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

### Elevation

The primary, secondary, Terraform, and Boundary CTAs use a two-layer 5% shadow, with the exact values recorded below. These shadow strings are kept as separate records. `tokens.shadow.control` uses `101,104,118`; the §4 primary/secondary-medium CTAs use `101, 106, 118`; the §4 large secondary, Terraform, and Boundary CTAs use `97, 104, 117`. They are not merged.

- **Control shadow (token-set):** `rgba(101,104,118,0.05) 0px 1px 1px, rgba(101,104,118,0.05) 0px 2px 2px`. Token-set key `tokens.shadow.control`.
- **Control shadow (shared primary and secondary-medium CTAs):** `rgba(101, 106, 118, 0.05) 0px 1px 1px, rgba(101, 106, 118, 0.05) 0px 2px 2px`.
- **Control shadow (secondary-large, Terraform, and Boundary CTAs):** `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`.
- **Light-card outline:** `rgba(101, 106, 118, 0.2) 0px 0px 0px 1px` on `.card__HomZw`. The token-set card use names `rgba(101,104,118,0.2)` for the same outline; both byte forms are kept.
- **Dark-input inset:** `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`.

### Motion

No motion duration, easing value, or reduced-motion behavior was measured in this packet. Keep motion tokens unresolved. Promote a motion token only after a per-component computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Evidence classes

| Evidence class | Resolution |
|---|---|
| Official brand/product use | HashiCorp’s 2024 font announcement describes HashiCorp Sans as a display typeface used across corporate and product logos and headlines. Its brand typography guidance directs HashiCorp Sans to headlines, sub-headlines, and titles; it separately names Metro Sans Book for brand-material body copy. That guidance is not evidence that Metro Sans is loaded on the captured Korean marketing routes. |
| Live computed and loaded | The capture records `__hashicorpSans_96f0ca` on 21 visible heading/eyebrow nodes and a site-hosted WOFF2 source (`d29050812a1756cf-s.p.woff2`). The family is therefore represented as **HashiCorp Sans** for display use, not as the UI family. |
| Live system use | `system-ui` is the computed high-confidence family on 713 visible body, button, card, tab, and badge nodes. Arial appears only on the captured embedded marketing form controls. |
| Declared-only assets | `__dejavuSansMono_7cac6c` and `dejavu-sans-mono-web` have declared sources but no visible usage in this capture; they are not a UI or code token. |
| License boundary | The official typography guidance directs access requests to the Brand Studio, while the site terms say no license to proprietary interests is implied. Neither source grants reusable webfont distribution or substitution rights; do not treat the captured WOFF2 source as such permission. |
The class assignments and resolutions in this table are the source's own evidence-class table. Treating official brand typography guidance as not establishing Metro Sans on the captured Korean routes, representing the loaded family as display-not-UI, excluding declared-only DejaVu assets from tokens, and reading the Brand Studio/terms pair as withholding redistribution permission, is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.
### Family

- **Current visible UI family:** `system-ui`. Token-set key `tokens.typography.family.ui`.
- **Current visible display family:** `HashiCorp Sans`. Token-set key `tokens.typography.family.display`.
- Do not replace HashiCorp Sans with a system font while labelling the substitute HashiCorp Sans. Representing HashiCorp Sans as the display family, and not as the UI family, because computed visible use and a loaded FontFace/source agree, is the source's own evidence-class resolution. Calling that resolution canonical for these three routes is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

### Type roles

YAML token-set metrics keep their unitless line-height ratios. The observed-hierarchy table keeps the px line heights the source recorded beside them. Those two forms are not converted into each other.

| Role | Family / evidence | Size | Weight | Line height | Tracking | Token-set use / captured use |
|---|---|---:|---:|---|---|---|
| Display hero | HashiCorp Sans, loaded | 82px | 600 | 1.17 (token-set) / 96px (observed H1) | | Loaded HashiCorp Sans H1 on captured public surfaces |
| Heading | HashiCorp Sans, loaded | 52px | 600 | 1.19 (token-set) / 62px (observed H2) | | Loaded HashiCorp Sans H2 on captured public surfaces |
| Heading variant | HashiCorp Sans, loaded | 42px | 700 | 50px | | H2 |
| Eyebrow / label | HashiCorp Sans, loaded | 13px | 600 | 1.69 (token-set) / 22px (observed) | 1.3 (token-set) / 1.3px (observed) | Loaded HashiCorp Sans eyebrow observed on Boundary |
| Body / card | system-ui | 16px | 400 | 1.63 (token-set) / 26px (observed) | | Computed system-ui reading text |
| Controls | system-ui | 16px | 500 | 1.69 (token-set) / 26–27px (observed) | | Computed system-ui primary and secondary control label |
| Navigation | system-ui | 15.008px | 500 | 24.013px | | top navigation trigger |

### Assets

- Display webfont source observed on the captured routes: `https://www.hashicorp.com/_next/static/media/d29050812a1756cf-s.p.woff2` (HashiCorp Sans). License and redistribution are unresolved; the Brand Studio access path and the site terms are the recorded boundary.
- Helios (`https://helios.hashicorp.design`) is documented separately by HashiCorp as the public product design system. Keeping that separate record from standing in for the three-route machine tokens is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All values below are raw computed values from the supplied 2026-07-13 capture. Selector and route provenance are retained in the sidecar. The capture reports zero interaction events, so hover, focus, pressed, modal, menu, and error variants are intentionally omitted.

The supplied capture records one disabled icon-only primary button and selected/unselected pricing tabs. It records no interaction events, loading, error, success, empty, skeleton, dialog, or toast state transitions, so those treatments are intentionally unresolved.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source recorded them. Absence of a capture is not a `not-applicable` reason. This is not a complete state-coverage claim. Closing each map by control role — and omitting `kind` plus a map where the source supplies no interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

### Shared Primary CTA

- Role: shared primary CTA on home, pricing, and Boundary routes
- Primitive type: `button` · Kind: interactive
- Background: `#1060ff`
- Text: `#ffffff`
- Border: `1px solid #0c56e9`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(101, 106, 118, 0.05) 0px 1px 1px, rgba(101, 106, 118, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-primary__rWbwp` on home, pricing, and Boundary routes
- Disabled (observed, one icon-only primary instance): `#fafafa` background, `#8c909c` text, and `rgba(101, 106, 118, 0.2)` border

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on home, pricing, and Boundary |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | One icon-only primary instance recorded above |
| loading | not-applicable | A shared marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Shared Secondary CTA — medium

- Role: shared secondary CTA, medium, on all three routes
- Primitive type: `button` · Kind: interactive
- Background: `#fafafa`
- Text: `#3b3d45`
- Border: `1px solid rgba(59, 61, 69, 0.4)`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(101, 106, 118, 0.05) 0px 1px 1px, rgba(101, 106, 118, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.size-medium__HxMcm.color-secondary-white__AseI0` on all three routes

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on all three routes |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A shared marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Shared Secondary CTA — large

- Role: shared secondary CTA, large, on all three routes
- Primitive type: `button` · Kind: interactive
- Background: `#fafafa`
- Text: `#3b3d45`
- Border: `1px solid rgba(59, 61, 69, 0.4)`
- Radius: `5px`
- Padding: `11px 19px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.size-large__MEpK3.color-secondary-high-contrast__3bxg3` on all three routes

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on all three routes |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A shared marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Terraform-labelled CTA

- Role: Terraform-labelled CTA on pricing only
- Primitive type: `button` · Kind: interactive
- Background: `#7b42bc`
- Text: `#ffffff`
- Border: `1px solid rgba(178, 182, 189, 0.2)`
- Radius: `5px`
- Padding: `9px 15px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-terraform__DQMD5` on pricing; only this Terraform-labelled variant was captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on pricing |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A route-labelled marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Boundary-labelled CTA

- Role: Boundary-labelled CTA on the Boundary route only
- Primitive type: `button` · Kind: interactive
- Background: `#f24c53`
- Text: `#0c0c0e`
- Border: `1px solid rgba(178, 182, 189, 0.2)`
- Radius: `5px`
- Padding: `11px 19px`
- Shadow: `rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px`
- Font: `16px / 500 / system-ui`
- Use: `.button__gOWvd.color-boundary__xJtzy` on the Boundary route; only this Boundary-labelled variant was captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the Boundary route |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A route-labelled marketing CTA leads to a destination; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the control |

### Top navigation trigger

- Role: top navigation trigger on all three routes
- Primitive type: the token block declares no type for this control; the source lists it as a navigation trigger · Kind: interactive
- Background: `#ffffff`
- Text: `#3b3d45`
- Radius: `4px`
- Padding: `8px 12px`
- Font: `15.008px / 500 / system-ui`
- Use: `.style_navItemTrigger__65Jsv` on all three routes

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on all three routes |
| hover | applicable | Pointer-web navigation trigger; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable navigation control; visual treatment omitted |
| disabled | applicable | A navigation trigger can be gated; visual treatment omitted |
| loading | not-applicable | A navigation trigger opens a destination or menu; it commits no operation in place |
| error | not-applicable | The same destination role has no in-place operation whose failure can be reported on the trigger |
| success | not-applicable | The same destination role has no in-place operation whose completion can be confirmed on the trigger |

### Pricing tab — selected and unselected

- Role: pricing tab on `/ko/pricing`
- Primitive type: the token block declares no type for this control; the source lists it as a tab · Kind: interactive
- Selected text: `#2b89ff`
- Unselected text: `#d5d7db`
- Radius: `5px`
- Font: `16px / 500 / system-ui`
- Use: `.tab-button__qI9wt` with `aria-selected="true"` and `aria-selected="false"` on pricing
- Observed: selected and unselected. Interaction count remains zero.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected and selected treatments recorded above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A tab selects a panel; it commits no in-place operation |
| error | not-applicable | A tab has no in-place operation whose failure can be reported on the tab |
| success | not-applicable | Selected/unselected are the tab's own recorded states, not a success treatment |

### Dark email field

- Role: dark email field in the shared marketing form on all three routes
- Primitive type: the token block declares no type for this field; the source lists it as a form control · Kind: interactive
- Background: `#0d0e12`
- Text: `#efeff1`
- Border: `1px solid #616875`
- Radius: `5px`
- Padding: `11px`
- Shadow: `rgba(97, 104, 117, 0.1) 0px 1px 2px 1px inset`
- Font: `16px / 400 / Arial`
- Use: `.mktoField.mktoEmailField.mktoRequired` in the shared marketing form on all three routes
- Required class is present; no validation-error state captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on all three routes |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable form field; visual treatment omitted |
| disabled | applicable | A form field can be gated; visual treatment omitted |
| loading | not-applicable | The field accepts a value; the operation is committed by the form's submit action, not by the field |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Completion is not confirmed on the field; the field accepts a value |

### Light content card

- Role: light content card on home
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#3b3d45`
- Radius: `6px`
- Shadow: `rgba(101, 106, 118, 0.2) 0px 0px 0px 1px`
- Font: `16px / 400 / system-ui`
- Token-set use: Home content card with a 1px rgba(101,104,118,0.2) outline shadow
- Use: `.card__HomZw` on home
- The source assigns `type: card` and records no card interaction state. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

### Neutral filled badge

- Role: neutral filled badge on home
- Background: `#f1f2f3`
- Text: `#3b3d45`
- Border: `1px solid transparent`
- Radius: `5px`
- Padding: `3px 7px`
- Font: `16px / 400 / system-ui`
- Use: `.badge__zns82.type-filled__ZaWsu.color-neutral__6Csf4` on home
- The source records no badge state and assigns no primitive type. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence — is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The capture records a recurring 4/8/12/16/24/32/48px spacing rhythm. Its high-frequency visible corners are 0px, 4px, 5px, and 6px; the only captured 8px radius is not promoted as the card standard. No responsive breakpoint, container-width, or grid behavior was measured in this packet. Reading this restated rhythm and the 8px-not-card-standard decision as capture observations, not a published HashiCorp layout specification, is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

No responsive observations were collected in this packet. Do not infer breakpoint values or mobile transformations from the desktop-route evidence.

<!-- design-md:section content-locales -->
## 6. Content & Locales

HashiCorp describes its work in operational, outcome-oriented terms: automate and secure multi-cloud and hybrid environments; focus on workflows rather than technologies; and keep source code freely available at the core of its offerings. The public marketing routes use short imperative actions. Reading those captured labels as a short-imperative marketing register is a derived editorial implementation inference from the verified surfaces; it is not HashiCorp-authored or taken from a separately published UI specification, including the published Helios documentation.

**Voice samples**

- “Get started” — shared marketing CTA, captured on `/ko`
- “Contact us” — shared marketing CTA, captured on `/ko`
- “The Infrastructure Cloud” — official company positioning

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

- other product-color variants
- hover, focus, pressed, modal, menu, and error visual treatments
- loading, success, empty, skeleton, dialog, and toast treatments
- responsive breakpoint, container-width, and grid behavior
- motion duration, easing value, and reduced-motion behavior
- Metro Sans as a loaded family on the captured Korean marketing routes
