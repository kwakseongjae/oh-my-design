# Databricks Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope, source-role, narrative-versus-token, and historical-causality judgments in this Scope are derived editorial implementation inferences from the source records; they are not Databricks-authored or a separately published UI specification.

Databricks is an enterprise data-and-AI platform. This reconstruction covers the inspected public homepage, pricing page, Data Intelligence Platform page, and official brand portal. It describes those public marketing and pricing surfaces; the product and documentation surfaces named separately in the source remain outside this evidence base.

The source records Databricks's 2013 founding by eight UC Berkeley AMPLab researchers, including Ali Ghodsi, Ion Stoica, and Matei Zaharia; its Apache Spark origin; and its evolution from a managed Spark service into the Data Intelligence Platform and lakehouse category. It connects the platform to Delta Lake, MLflow, Unity Catalog, and multicloud delivery across Azure, AWS, and GCP. Those records provide product and historical context, not additional interface-token proof.

The following visual characterization is a derived editorial implementation inference from the inspected surfaces; it is not Databricks-authored or a separately published UI specification. Public surfaces combine white and warm Oat sections with deep Navy showcases, Teal text, DM Sans typography, and a tightly bounded Lava action color. Square CTA buttons and pill product tabs create a deliberate contrast between engineering precision and navigational grouping.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the inspected surface purposes and source CTAs; they are not Databricks-authored or a separately published UI specification.

- Evaluate the platform's data, AI, analytics, and governance capabilities.
- Understand Databricks pricing and product-category options.
- Start a trial, explore the product, request a demo, or request a pricing quote.
<!-- design-md:claim-end -->

### Audience

This audience grouping and the biography-retention decision below are derived editorial implementation inferences from the source-backed user segments and fictional-archetype disclosure; they are not Databricks-authored or a separately published UI specification.

Use only the source-backed groups: data engineers, ML scientists, data analysts, and enterprise architects. The named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the inspected records; it is not Databricks-authored or a separately published UI specification.

- Lava 600 `#FF3621` is the official primary action color; the distinct live-rendered CTA value `#EB1600` remains separately recorded.
- Navy 900 `#0B2026` anchors full-width dark showcases, while Oat Medium `#EEEDE9` and Oat Light `#F9F7F4` warm the neutral surfaces.
- Teal `#1B3139` is the functional text and secondary-action color rather than pure black.
- DM Sans covers the public text hierarchy; DM Mono is reserved for code and technical displays.
- Primary and secondary CTA buttons use 0px corners, while product tabs use a 20px pill radius.
- Inline links use `#016BC1`; success treatment uses `#468254` on `#F9FFFA`.

### Derived implementation principles

These five items are derived editorial implementation inferences from the source narrative and inspected surfaces; they are not Databricks-authored or a separately published UI specification.

- Keep technical capability and pricing explicit; do not hide concrete information behind generic enterprise language.
- Present data and AI as one connected platform rather than unrelated product silos.
- Use direct trial, exploration, demo, and pricing actions, revealing complexity progressively.
- Preserve the open, composable platform context without turning public interface observations into unsupported product-surface rules.
- Let Lava, Navy, Oat, Teal, and precise geometry carry the visual identity without decorative gradients or heavy effects.

### Avoid

The following avoidances are derived editorial implementation inferences from the source rules; they are not Databricks-authored or a separately published UI specification.

- Do not use Lava `#FF3621` as running-text or decorative color; keep it tied to primary action.
- Do not round the square primary and secondary CTA variants.
- Do not replace Teal body text with pure black `#000000` or use DM Mono for prose.
- Do not use 700-weight DM Sans for headings; the source reserves 700 for the active tab variant.
- Do not mix unrelated accent hues, add decorative gradients, or promote unverified product-surface, responsive, or motion behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

| Role | Value | Source use / boundary |
|---|---|---|
| Primary action / Lava 600 | `#FF3621` | Official brand value and primary CTA token |
| Live CTA alternate | `#EB1600` | Live-rendered CTA variant; not promoted as a specific hover or pressed treatment |
| Navy 900 | `#0B2026` | Deep dark sections, feature showcases, hero overlays |
| Teal body / secondary action | `#1B3139` | Body, headings, navigation, secondary-button fill |
| Teal mid | `#1B5162` | Language selector and secondary interface elements |
| Link | `#016BC1` | Inline links and reference anchors |
| Muted | `#90A5B1` | Secondary text, captions, metadata |
| Cloud blue | `#EDF2F8` | Source tint; inactive dark-surface tabs use `rgba(237,242,248,0.1)` |
| Canvas / card / on dark | `#ffffff` | Canvas, cards, modal/background record, inverse text |
| Oat medium | `#EEEDE9` | Warm sections, muted containers, input border |
| Oat light | `#F9F7F4` | Light warm section separation |
| Hairline surface | `#F4F4F4` | Dividers and subtle separation |
| Success | `#468254` | Positive status text and indicator |
| Success surface | `#F9FFFA` | Success-badge background |

The source records the `#FF3621` official brand value and the separate `#EB1600` live CTA rendering as an unresolved comparison. Keeping those values separate is a derived editorial implementation inference from the source comparison; it is not Databricks-authored or a separately published UI specification.

### Spacing

Source scale: `xs: 4px`, `sm: 8px`, `md: 12px`, `base: 16px`, `lg: 24px`, `xl: 32px`, `xxl: 48px`, `section: 64px`. Keeping component-specific padding attached to each declaration is a derived editorial implementation inference from the source records; it is not Databricks-authored or a separately published UI specification.

### Shape

- Small: 2
- Medium: 4
- Large / product-tab pill: 20
- Full: 9999
- Primary and secondary CTA declarations: `0px`

The role grouping above is a derived editorial implementation inference from the source scale and component geometry; it is not Databricks-authored or a separately published UI specification. The values 0, 2, 4, 20, and 9999 remain separate and are not collapsed into a universal radius.

### Elevation

- Card: `0px 2px 8px rgba(27,49,57,0.12)`
- Elevated: `0px 4px 16px rgba(27,49,57,0.16)`
- Flat surfaces: no shadow

The description of Navy/white alternation as the primary depth signal and teal-tinted shadows as restrained elevation is a derived editorial implementation inference from the source rules; it is not Databricks-authored or a separately published UI specification.

### Motion

The motion-promotion decision below is a derived editorial implementation inference from the source evidence boundary; it is not Databricks-authored or a separately published UI specification.

The source reports an accessibility pause button on a decorative homepage banner, but it does not bind its legacy duration and curve table to component-specific computed observations. Those exact legacy recipes remain in provenance and are not promoted as Databricks tokens.

A motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, motion values remain absent.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

The family-use boundary below is a derived editorial implementation inference from the source's live inspection and official brand-portal records; it is not Databricks-authored or a separately published UI specification.

- Primary public-surface family: `DM Sans`; fallback `sans-serif`.
- Monospace: `DM Mono`; fallback `monospace`.
- DM Mono is restricted to code depictions, technical data labels, and terminal-style displays.
- The source records Google Fonts availability and official brand-portal confirmation. The decision not to claim a separate proprietary font asset is a derived editorial implementation inference from those records; it is not Databricks-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Display hero | DM Sans | 60px | 500 | `1.10` unitless | Hero headline |
| Display H1 | DM Sans | 56px | 400 | `1.14` unitless | Page H1 |
| Section H2 | DM Sans | 48px | 500 | `1.17` unitless | Feature section headline |
| Sub-section H2 | DM Sans | 40px | 400 | `1.20` unitless | Sub-section heading |
| Card heading | DM Sans | 28px | 400 | `1.29` unitless | Card / feature title |
| Body large | DM Sans | 18px | 400 | `1.44` unitless | Feature descriptions |
| Body | DM Sans | 16px | 400 | `1.50` unitless | Standard interface text |
| Button | DM Sans | 16px | 500 | `1.25` unitless | Primary-button label |
| Navigation | DM Sans | 16px | 400 | `1.25` unitless | Navigation links |
| Caption | DM Sans | 14px | 400 | `1.50` unitless | Small labels and utility links |
| Code | DM Mono | 14px | 400 | `1.60` unitless | Code and technical displays |

The source records default tracking at every scale, DM Sans 400/500 for the main hierarchy, and 700 only for the active product-tab variant.

### Assets

The asset-authority boundary below is a derived editorial implementation inference from the source identity record; it is not Databricks-authored or a separately published UI specification.

- Catalog identity pointer: Simple Icons slug `databricks`.
- The slug is retained in provenance and must not be presented as proof of an official distributed logo file or licence.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified primitive roles; they are not Databricks-authored or a separately published UI specification.

The source supplies default component records, active/inactive tab variants, a named input `Focus` border, and a separate live CTA color variant. A named `Focus` observation is not promoted to a `focus-visible` treatment, and the CTA alternate is not assigned to hover or pressed. Applicability follows component meaning; unmeasured visual treatments remain absent, and state coverage is not claimed complete.

### CTA button family

The applicability judgments for this component family are derived editorial implementation inferences from its navigation and preference-action roles; they are not Databricks-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Primary: background `#FF3621`; text `#ffffff`; radius `0px`; padding `8px 24px`; height 40px; `16px / 500 / DM Sans`; “Try Databricks”, “Start free trial”, “Explore the product”
- Secondary: background `#1B3139`; text `#ffffff`; radius `0px`; padding `8px 24px`; height 40px; `16px / 500 / DM Sans`; “See demo”, “Request a pricing quote”
- Tertiary / ghost: background `#EEEDE9`; text `#1B3139`; radius `2px`; padding `12px 10px`; height 40px; `16px / 400 / DM Sans`; preference actions

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source component variants establish default treatments |
| hover | applicable | Pointer-web buttons; visual treatment omitted |
| focus-visible | applicable | Interactive buttons; visual treatment omitted |
| disabled | applicable | Actions can be unavailable; visual treatment omitted |
| loading | not-applicable | These recorded buttons navigate or open preferences rather than present in-button progress |
| error | not-applicable | These buttons do not themselves present validation failure |
| success | not-applicable | These buttons do not themselves present completion feedback |

### Product section tab

The applicability judgments for this component are derived editorial implementation inferences from its product-navigation role; they are not Databricks-authored or a separately published UI specification.

- Primitive type: tab
- Kind: interactive
- Active variant: background `#ffffff`; text `#1B3139`; radius 20px; padding `12px 16px`; height 40px; `16px / 700 / DM Sans`
- Inactive variant: background `rgba(237,242,248,0.1)`; text `#ffffff`; radius 20px; padding `12px 16px`; height 40px; `16px / 500 / DM Sans`
- Use: Platform, Database, AI, BI, and Governance product navigation

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source records inactive and active variants |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive tab; visual treatment omitted |
| disabled | applicable | A product tab can be unavailable; visual treatment omitted |
| loading | not-applicable | Tab selection does not carry a loading presentation in the source contract |
| error | not-applicable | Tab selection does not present validation failure |
| success | not-applicable | Tab selection does not present completion feedback |

### Text input

The applicability judgments for this component are derived editorial implementation inferences from its form/search-field role; they are not Databricks-authored or a separately published UI specification.

- Primitive type: input
- Kind: interactive
- Background `#ffffff`; text `#1B3139`; border `1px solid #EEEDE9`; radius 2px; `16px / DM Sans`
- Use: form input and search field
- Named source `Focus` observation: `1px solid #FF3621`; retained as observed focus, not promoted to a focus-visible treatment

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source default input treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Form/search input can be unavailable; visual treatment omitted |
| loading | not-applicable | The field itself does not present asynchronous progress |
| error | applicable | Source legacy guidance includes field-level validation; treatment remains legacy guidance below |
| success | applicable | A form field can validate successfully; visual treatment omitted |

### Product pricing card

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved card interaction evidence; it is not Databricks-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted
- Background `#ffffff`; text `#1B3139`; radius `0px`
- Use: Data Engineering and Data Warehousing pricing tiles

### Success badge

Classifying this badge as non-interactive is a derived editorial implementation inference from its status-label role; it is not Databricks-authored or a separately published UI specification.

- Primitive type: badge
- Kind: non-interactive
- Reason: availability or success status label, not a control
- Background `#F9FFFA`; text `#468254`; radius 4px; `14px / 400 / DM Sans`

### Surface containers

The container classification below is a derived editorial implementation inference from the source section recipes; it is not Databricks-authored or a separately published UI specification.

- Dark feature panel: background `#0B2026`; text `#ffffff`; full-width product-demo and feature showcase.
- Oat surface section: background `#EEEDE9`; text `#1B3139`; alternating warm-neutral content section.
- Interaction kind and applicability maps are omitted because the source does not establish either container as a control.

### Legacy state guidance

The following treatments are derived editorial implementation inferences in the legacy source rather than measured interaction proof; they are not Databricks-authored or a separately published UI specification. They remain guidance for the named product patterns and do not make every treatment applicable to every component above.

| Pattern | Legacy treatment |
|---|---|
| Empty notebook / no results | White canvas; 16px DM Sans Teal `#1B3139`; one Lava action; no illustration |
| Empty cluster list | Muted `#90A5B1` 14px “No clusters running.” plus `#016BC1` create link |
| Loading job run | Inline progress with Lava `#FF3621`; text remains visible; spinner does not block content |
| Loading dashboard first paint | Final-size Oat Medium `#EEEDE9` card blocks, 0px radius |
| Pipeline failure | Error type, job ID, and log link; never “Something went wrong” alone |
| Form validation | Field-level `#FF3621` border plus 14px corrective text |
| Cluster timeout | “Cluster timed out after N minutes” plus Lava restart action |
| Job completed | `#F9FFFA` surface, `#468254` text, “Succeeded”, duration, and output size; no emoji |
| Resource created | Brief body-size past-tense confirmation, “Cluster started.”, plus open-resource action |
| Skeleton | `#EEEDE9` final-size blocks; 0px card corners; flat pulse recipe |
| Disabled | Reduced opacity; Lava action retains a muted orange-red hue |
| Running cluster | `#468254` status dot plus “Running” label |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and responsive-proof boundaries below are derived editorial implementation inferences from the source records; they are not Databricks-authored or a separately published UI specification.

- Public marketing layouts use centered hero treatment, single- or two-column feature sections, alternating full-width Navy and white/Oat surfaces, a horizontal pill-tab row, and pricing-card grids.
- Source component measurements preserve 40px CTA and tab heights, 24px CTA horizontal padding, and a recorded 65px navigation touch zone.
- The source describes a roughly 1200px centered content area and 64px-plus section rhythm; those approximate layout claims remain source declarations rather than universal product-surface constraints.
- The legacy responsive breakpoint and collapse claims lack a separate multi-viewport proof record. Their exact values remain in provenance and are not promoted as verified responsive tokens.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction and forbidden-register judgments below are derived editorial implementation inferences from the verified public copy; they are not Databricks-authored or a separately published UI specification.

Use precise, ambitious, technically confident copy. Hero headlines are declarative and technically grounded; product descriptions put capability verbs before adjectives; CTAs use direct imperatives; pricing exposes concrete values; documentation assumes technical proficiency and uses examples. The source records `$0.15 / DBU` as a pricing-style example and “Simple. Open. Multicloud.” as mission-oriented phrasing.

Verified live samples:

- “The database your AI agents deserve”
- “Build and run apps, agents and AI on your data”
- “Intelligent. Simple. Private.”

For errors, identify the specific error type and the next action. Avoid empty superlatives such as “revolutionary”, “industry-leading”, or “best-in-class”; consumer-app excitement such as “🚀 We're excited to…”; undefined jargon in user-facing copy; and passive CTAs.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Databricks-authored or a separately published UI specification.

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

- typography and components on the product and documentation surfaces beyond the inspected public marketing and pricing pages
- official distribution/licensing status for the Simple Icons identity asset
- component-specific hover, focus-visible, disabled, loading, error, and success visual treatments beyond the explicitly named legacy guidance
- verified multi-viewport rendering of the four breakpoint bands, the collapsing strategy, and mobile navigation
- component-specific transition properties, animation names, durations, easings, and reduced-motion behavior
