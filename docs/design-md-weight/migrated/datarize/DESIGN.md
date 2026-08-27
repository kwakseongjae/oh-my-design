# Datarize Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope, source-role, and marketing-versus-product boundary judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Datarize-authored or a separately published UI specification.

Datarize (데이터라이즈) is an e-commerce growth and CRM platform that connects customer-behavior data to analysis, audiences, on-site and message campaigns, metrics, and revenue growth. This reconstruction covers the Korean marketing homepage, a brand-blog route, and the public pricing page captured at desktop. Official About, terms, and GitBook sources provide product and mission context only. The authenticated `console.datarize.ai` service and GitBook chrome were not captured.

The source presents the international-facing expression “Autonomous Marketing Intelligence” and the proposition “Behavior Captured. Growth Automated.” Its guide describes an operational sequence from store registration and data collection through audience/campaign work to analytics and settings. Those sources establish product context, not additional visual tokens.

The following visual characterization is a derived editorial implementation inference from the three captured public surfaces; it is not Datarize-authored or a separately published UI specification. The current marketing layer is restrained: white canvas, near-black type and pills, one outlined action, a pale pricing selector, loaded Pretendard faces, and flat separation. It does not reproduce an authenticated dashboard aesthetic.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the official product areas and guide; they are not Datarize-authored or a separately published UI specification.

- Register and connect an e-commerce store so customer-behavior data can be collected and profiled.
- Build audiences and operate on-site, email, or message campaigns from those signals.
- Review pricing, metrics, and analytics to connect campaign action to growth outcomes.
<!-- design-md:claim-end -->

### Audience

This audience grouping and its evidence-class boundary are derived editorial implementation inferences from the source-backed roles; they are not Datarize-authored or a separately published UI specification.

- E-commerce store operators who register and install a store.
- CRM or growth marketers who create audiences and operate campaigns.
- Platform administrators who manage stores, users, payments, and integrations.

These are scope labels from official product flows, not named personas or research findings.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the captured surfaces; it is not Datarize-authored or a separately published UI specification.

- White `#ffffff` canvas with dominant `#191919` marketing ink.
- `#111111` and `#191919` dark CTA pills plus an outlined `#111111` action.
- Loaded Pretendard variants for the captured marketing hierarchy.
- Home-only `#007aff` text-link accent and supporting copy `#5d6875`.
- 8px / 10px small corners and 50px / 100px / 999px pill geometry.
- Flat observed controls with `box-shadow: none` and a pale `#f2f5fa` pricing tab group.

### Derived implementation principles

These three items are derived editorial implementation inferences from official product context and captured interfaces; they are not Datarize-authored or a separately published UI specification.

- Make the path from observed behavior to audience, campaign action, and analytics legible.
- Keep Audience, on-site campaign, message campaign, analytics, and administration distinguishable rather than collapsing them into a generic AI dashboard.
- Use one decisive dark or outlined CTA treatment on marketing pages instead of competing action colors.

### Avoid

The following avoidances are derived editorial implementation inferences from the evidence boundaries; they are not Datarize-authored or a separately published UI specification.

- Do not reintroduce prior lime, yellow, or royal-blue values as current tokens without new evidence.
- Do not present the captured marketing layer as the authenticated console or GitBook documentation design system.
- Do not generalize `#007aff` beyond the observed homepage text-link role.
- Do not invent pricing-tab states beyond transparent default and white selected, or invent an email-error visual treatment from an event without a visual sample.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic-role assignments and current-token/generalization boundaries below are derived editorial implementation inferences from the captured surfaces; they are not Datarize-authored or a separately published UI specification.

| Role | Value | Verified boundary |
|---|---|---|
| Canvas / selected tab | `#ffffff` | Page surface and selected pricing tab |
| Marketing ink | `#191919` | Dominant text/border and shared CTA fill |
| Action ink | `#111111` | Home CTA fill and outline-action text/border |
| Supporting slate | `#5d6875` | Blog/pricing supporting copy |
| Text-link blue | `#007aff` | Homepage text links only |
| Pricing-selector surface | `#f2f5fa` | Pricing tab-group background, not a general card token |
| Hairline | `#e5e7eb` | Testimonial-navigation border |

Legacy `#f9ff91`, `#f7ff91`, `#ffef42`, and `#466cf3` were absent from the July evidence and are explicitly not current palette tokens.

### Spacing

The captured-cluster, non-universal-scale, and component-padding placement judgments below are derived editorial implementation inferences from the source declarations; they are not Datarize-authored or a separately published UI specification.

Observed source values: `xs: 6px`, `sm: 8px`, `md: 10px`, `lg: 14px`, `xl: 16px`, `xxl: 20`, `xxxl: 24px`, `section: 32px`. They are captured clusters, not a published universal scale. Exact component paddings remain attached to component declarations.

### Shape

- Small: 8
- Medium: 10
- Pill: 50
- Full: 999
- Captured component geometry also includes 100px and 999px.

The role grouping and separation above are derived editorial implementation inferences from the captured component uses; they are not Datarize-authored or a separately published UI specification. Numeric source roles and explicit component px forms remain distinct.

### Elevation

The separation-method and no-general-elevation-scale judgments below are derived editorial implementation inferences from the captured controls; they are not Datarize-authored or a separately published UI specification.

Observed shadow token: `none`. Captured controls separate by dark/white contrast, a `1px solid #111111` outline, `#e5e7eb` hairline, or `#f2f5fa` tablist surface. No general card or elevation scale is claimed.

### Motion

The motion-promotion boundary below is a derived editorial implementation inference from the supplied evidence; it is not Datarize-authored or a separately published UI specification.

No motion duration, easing, animation name, or reduced-motion behavior was measured. A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The evidence-class, token-promotion, ownership, and product-scope judgments below are derived editorial implementation inferences from the captured and official font records; they are not Datarize-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed + loaded | Pretendard Regular, Medium, SemiBold, Variable with jsDelivr sources, and Bold |
| Computed without loaded match | Literal `Pretendard`; not an independently verified face |
| Loaded but weakly corroborated | Inter with no source URL; not a Datarize family token |
| Declared-only | Fragment Mono, Inter Placeholder, Pretendard Black/ExtraBold and placeholder declarations; no visible use |
| Official distributed font asset / licence | Pretendard upstream documents web distribution and SIL Open Font License 1.1; not Datarize ownership or an official Datarize typography guide |
| Product boundary | No font claim is generalized to the uncaptured authenticated console |

### Family

Captured public-marketing family: `Pretendard`, using the named loaded variants above. The decision not to substitute the weakly corroborated or declared-only faces as Datarize tokens is a derived editorial implementation inference from the evidence classes; it is not Datarize-authored or a separately published UI specification.

### Type roles

| Role | Family evidence | Size | Weight | Line height | Tracking | Captured use |
|---|---|---:|---:|---:|---:|---|
| Marketing hero | Pretendard Bold, loaded | 64px | 700 | 83.2px | -3.2px | Homepage H1 |
| Section heading | Pretendard SemiBold, loaded | 44px | 600 | 57.2px | -0.05px | Homepage H2 |
| Supporting heading | Pretendard SemiBold, loaded | 24px | 600 | 33.6px | -1.2px | Marketing heading |
| Body | Pretendard Regular, loaded | 16px | 400 | 24px | normal | Blog/pricing copy |
| Navigation | Pretendard Medium, loaded | 15px | 500 | 21px | normal | Marketing navigation |
| CTA | Pretendard Variable, loaded | 16px | 600 | normal | normal | Home/pricing CTA links |

### Assets

The asset-authority boundary below is a derived editorial implementation inference from the identity and font-source records; it is not Datarize-authored or a separately published UI specification.

- The exact Google s2 favicon URL remains in provenance. It was retained but not recaptured or re-evaluated in this update; no official distributed-logo or licence claim is added.
- Pretendard source/licence evidence applies to the font asset, not to Datarize brand ownership.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the captured roles; they are not Datarize-authored or a separately published UI specification.

The bundle captured default marketing controls, pricing-tab default/selected changes, and a blog `form-error` event without a distinct visual error style or message. Applicability follows component meaning; missing visuals remain absent, and state coverage is not claimed complete.

### Marketing CTA link family

The family grouping, interaction-kind, and applicability judgments for these anchor controls are derived editorial implementation inferences from their verified navigation roles; they are not Datarize-authored or a separately published UI specification.

- Source element: anchor; Kind: interactive.
- Action ink pill: `#111111` / `#ffffff`; border `0px solid #ffffff`; 50px; `14px 24px`; `16px / 600 / Pretendard Variable`; height 47px.
- Shared ink pill: `#191919` / `#ffffff`; border `0px solid #ffffff`; 50px; `14px 24px`; `15px / 600 / Pretendard Variable`; height 46px.
- Outline pill: transparent; text/border `#111111`; `1px solid #111111`; 100px; `14px 24px`; `16px / 600 / Pretendard Variable`; height 49px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured anchor variants |
| hover | applicable | Pointer-web links; visual treatment omitted |
| focus-visible | applicable | Interactive anchors; visual treatment omitted |
| disabled | not-applicable | Anchor CTAs have no disabled semantic in this contract |
| loading | not-applicable | Navigation links do not carry loading presentation |
| error | not-applicable | Navigation links do not present validation failure |
| success | not-applicable | Navigation links do not present completion feedback |

### Locale control

The interaction-kind and applicability judgments for this component are derived editorial implementation inferences from its shared-header role; they are not Datarize-authored or a separately published UI specification.

- Source element / primitive type: button; Kind: interactive.
- Transparent background; `#191919`; `1px solid transparent`; radius 8px; padding `10px 12px`; `15px / 500 / Pretendard Variable`; height 40px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured shared-header control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Locale control can be unavailable; visual treatment omitted |
| loading | not-applicable | Locale selection does not carry a loading presentation in this contract |
| error | not-applicable | Locale selection does not present validation failure |
| success | not-applicable | Locale selection does not present completion feedback |

### Testimonial navigation button

The interaction-kind and applicability judgments for this component are derived editorial implementation inferences from its navigation role; they are not Datarize-authored or a separately published UI specification.

- Source element / primitive type: button; Kind: interactive.
- Transparent background; `#000000`; border `1px solid #e5e7eb`; radius 8px; padding `1px 6px`; height 48px; unlabeled in capture.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured testimonial navigation control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive button; visual treatment omitted |
| disabled | applicable | Previous/next navigation can be unavailable; visual treatment omitted |
| loading | not-applicable | Local testimonial navigation does not present loading progress |
| error | not-applicable | Navigation does not present validation failure |
| success | not-applicable | Navigation does not present completion feedback |

### Pricing tab

The interaction-kind and applicability judgments for this component are derived editorial implementation inferences from its pricing-selection role; they are not Datarize-authored or a separately published UI specification.

- Primitive type: tab; Kind: interactive.
- Selected: `#ffffff` / `#191919`; radius 999px; padding `8px 16px`; `12px / 400 / Pretendard`; height 34px; `aria-selected="true"`.
- Alternate captured tabs: transparent before interaction and `#ffffff` after selection.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Transparent default and white selected variants were captured |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A pricing option may be unavailable; visual treatment omitted |
| loading | not-applicable | Selection does not carry a loading presentation in this contract |
| error | not-applicable | Selection does not present validation failure |
| success | not-applicable | Selection does not present completion feedback |

### Pricing tab group

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the structural tablist role; it is not Datarize-authored or a separately published UI specification.

- Source role: `tablist`; interaction kind / applicability map: omitted.
- Background `#f2f5fa`; border `1px solid rgba(25, 25, 25, 0.1)`; radius 999px; padding 5px; height 46px.

### Blog email input

The interaction-kind and applicability judgments for this component are derived editorial implementation inferences from its form-field role; they are not Datarize-authored or a separately published UI specification.

- Source element / primitive type: input; Kind: interactive.
- Transparent, borderless, `#000000`; `15px / 400 / Pretendard Regular`.
- A `form-error` interaction occurred, but no distinct error copy or visual treatment was captured.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured email-field treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Email field can be unavailable; visual treatment omitted |
| loading | not-applicable | The input itself does not present submission progress |
| error | applicable | A form-error event was captured; visual treatment remains omitted |
| success | applicable | Email validation can succeed; visual treatment omitted |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and responsive-proof boundary below are derived editorial implementation inferences from the supplied evidence; they are not Datarize-authored or a separately published UI specification.

- Evidence is desktop-only; no responsive grid, breakpoint, stacking, or touch-adaptation rule is specified.
- Repeated measurements include 40px locale control, 47px / 46px / 49px marketing links, 48px testimonial control, and a compact 46px tablist with 5px padding around 34px tabs.
- The observed 6/8/10/14/16/20/24/32px clusters are not promoted as a published spacing system.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction below is a derived editorial implementation inference from the official English marketing and product-context sources; it is not Datarize-authored or a separately published UI specification.

Use direct, operational, outcome-oriented public copy: behavior and data are inputs; campaign action and growth are intended outcomes. Lead with a concrete behavior, campaign, or growth result, and explain the data-to-action connection in plain operator language.

Observed first-party expressions:

- “Behavior Captured. Growth Automated.”
- Data to insight to action in one flow.
- E-commerce growth through autonomous marketing intelligence.

The attribution and authenticated-console-copy boundaries below are derived editorial implementation inferences from the source coverage; they are not Datarize-authored or a separately published UI specification. Do not attribute unverified product promises, metrics, or customer stories to Datarize, and do not treat external marketing copy as authenticated-console microcopy.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Datarize-authored or a separately published UI specification.

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

- authenticated-console and GitBook visual tokens, components, states, and typography
- official distributed Datarize logo asset and licence status
- responsive breakpoints, mobile stacking, touch adaptation, and multi-viewport typography
- email error copy/treatment and all unobserved loading, disabled, success, toast, or console states
- component-specific transition properties, animation names, durations, easings, and reduced-motion behavior
