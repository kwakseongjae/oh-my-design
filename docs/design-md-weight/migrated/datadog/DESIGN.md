# Datadog Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The surface-scope, source-role, narrative-versus-token, and historical-causality judgments in this Scope are derived editorial implementation inferences from the verified records; they are not Datadog-authored or a separately published UI specification.

Datadog is an observability and cloud-security platform. This reconstruction covers the inspected first-party homepage, official Logos & Press Kit surface, and public pricing surface. It describes public marketing, brand, and pricing interfaces; it does not establish every authenticated monitoring, APM, logging, security, or documentation surface.

The source records Datadog's 2010 founding by Olivier Pomel and Alexis Lê-Quôc after their work at Wireless Generation, the aim of putting development and operations on the same page, expansion from infrastructure monitoring into APM, logs, security, and AI-powered analysis, and the 2019 Nasdaq IPO. Founding and IPO detail beyond the inspected surfaces is recorded as public narrative context rather than first-party interface proof.

The following visual characterization is a derived editorial implementation inference from the inspected surfaces; it is not Datadog-authored or a separately published UI specification. A white, near-black, and cool-neutral system is punctuated by workhorse purple `#632ca6`, vivid brand violet, pure-black bands, and a deep purple-black footer. NationalWeb carries the hierarchy, while flat tints and hairlines replace drop-shadow depth.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

These task formulations are derived editorial implementation inferences from the inspected surface purposes and labels; they are not Datadog-authored or a separately published UI specification.

- Evaluate Datadog's observability, monitoring, and security capabilities.
- Compare pricing plans and choose a deployment region or datacenter option.
- Start a free trial, get started, search the site, or see the platform — the verified labels are “Free trial”, “Start Free Trial”, “Free Trial”, and “SEE THE PLATFORM”.
<!-- design-md:claim-end -->

### Audience

This audience grouping and the biography-retention decision below are derived editorial implementation inferences from the source-backed segments and fictional-archetype disclosure; they are not Datadog-authored or a separately published UI specification.

Use only the source-backed groups: site-reliability engineers, platform engineers, DevOps leads, and security engineers. The named biographies in the legacy persona section are fictional and are not retained.

### Distinctive traits

Selecting and naming the following traits as distinctive is a derived editorial implementation inference from the verified surfaces; it is not Datadog-authored or a separately published UI specification.

- Workhorse action purple `#632ca6`, documented in the official press kit and live CTA.
- Printed brand violet `#8000ff`, with a separate live-rendered press-kit band at `#7700ff`.
- NationalWeb across display and body, including a 68px / 600 hero and a 22px / 300 lede.
- Near-black `#212529` heading ink, pure-black `#000000` bands, and footer `#110617`.
- Flat depth using `#f5f5f5`, `#eeeeee`, `#e1e5e9`, and `box-shadow: none`.
- Tight 4px–8px component geometry, with 9999 reserved for rare circular elements rather than routine controls.

### Derived implementation principles

These five items are derived editorial implementation inferences from the verified surfaces and source narrative; they are not Datadog-authored or a separately published UI specification.

- Use purple, not category-default enterprise blue, as the sole public action signal.
- Keep one action color so platform navigation and conversion paths remain legible amid dense technical content.
- Separate dense content with tints, hairlines, and dark/light contrast rather than stacked shadows.
- Address technical readers directly with concrete capabilities, examples, and precise labels.
- Respect the official Datadog name and Bits logo treatment on light and dark fields.

### Avoid

The following avoidances are derived editorial implementation inferences from the official brand rules and verified interface records; they are not Datadog-authored or a separately published UI specification.

- Do not replace purple with enterprise blue or add a second action accent.
- Do not spread vivid `#8000ff` across routine interface controls.
- Do not use drop shadows or use pure black `#000000` as body copy; use `#212529` for heading ink and `#333333` for body.
- Do not move routine buttons outside the 4px–8px radius range.
- Do not set the hero in a light weight; only the intro lede uses 300.
- Do not invert, recolor, gradient, box, or otherwise alter the official Bits logo treatment.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The semantic role names, source-boundary distinctions, and printed-versus-live reconciliation in this subsection are derived editorial implementation inferences from the verified official and live records; they are not Datadog-authored or a separately published UI specification.

| Role | Value | Verified use / boundary |
|---|---|---|
| Primary action / Datadog Purple | `#632ca6` | Live CTA, link, outline, and press-kit text |
| Brand violet | `#8000ff` | Official press-kit printed value for brand moments |
| Live violet band | `#7700ff` | Separate live-rendered press-kit swatch |
| Heading ink | `#212529` | Primary heading/text ink |
| Pure black | `#000000` | High-contrast dark section; not body text |
| Body | `#333333` | Reading text |
| Muted | `#555555` | Navigation and secondary labels |
| Faint | `#c7c7c7` | Disabled, placeholder, lowest-emphasis text |
| Canvas / card / on primary | `#ffffff` | Page, card, and inverse text |
| Surface | `#f5f5f5` | Alternating content section |
| Surface alternate | `#eeeeee` | Secondary block/divider surface |
| Dark chip | `#323232` | Dark inset controls |
| Footer background | `#110617` | Deep purple-black footer |
| Hairline | `#e1e5e9` | Input and divider border |
| Error | `#bf0000` | Validation and destructive messaging |

The printed `#8000ff` brand value and the distinct live `#7700ff` swatch are both retained and are not merged.

### Spacing

Source scale: `xs: 4px`, `sm: 8px`, `md: 12px`, `base: 16px`, `lg: 24px`, `xl: 28px`, `xxl: 48px`, `section: 64px`. Keeping exact fractional navigation padding and asymmetric component padding attached to their components is a derived editorial implementation inference from the source records; it is not Datadog-authored or a separately published UI specification.

### Shape

- Small: 4
- Medium: 6
- Large: 8
- Full: 9999px

The role boundary above is a derived editorial implementation inference from the source uses; it is not Datadog-authored or a separately published UI specification. The source uses 4px for marketing buttons, inputs, and the region control; 6px for compact/ghost CTAs; 8px for cards; and full only for rare circular elements.

### Elevation

- Shadow token: `none`.
- Tint separation: `#f5f5f5` / `#eeeeee`.
- Hairline separation: `1px solid #e1e5e9`.
- Contrast separation: `#000000` bands and `#110617` footer.

Describing color/contrast as the depth hierarchy is a derived editorial implementation inference from the flat verified surfaces; it is not Datadog-authored or a separately published UI specification.

### Motion

The motion-promotion boundary below is a derived editorial implementation inference from the recorded live declaration; it is not Datadog-authored or a separately published UI specification.

The primary CTA verifies `transition: background-color 0.15s ease-in-out`. This preserves the component-bound transition property, duration, and easing, but it does not establish a hover target color, an animation name, or reduced-motion behavior. The other legacy durations and curves remain in provenance rather than becoming Datadog tokens.

A broader motion value may be promoted only after component-specific computed before/after observation establishes all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Until then, only the observed CTA declaration is retained.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Family

The family and availability boundary below is a derived editorial implementation inference from the live records; it is not Datadog-authored or a separately published UI specification.

- Display and body: `NationalWeb`.
- Captured fallback: `Helvetica, Arial, sans-serif`.
- The fallback stack is runtime fallback, not a separate Datadog brand family.

### Type roles

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Display hero | 68px | 600 | `1.0` unitless / 68px | Hero headline |
| Section heading | 36px | 600 | `1.11` unitless / 40px | Section title |
| Intro / lede | 22px | 300 | `1.43` unitless / 31px | Hero subcopy |
| Navigation | 18px | 600 | `1.0` unitless | Top links |
| Button | 18px | 700 | `1.0` unitless | Primary/secondary CTA |
| Body | 18px | 400 | `1.5` unitless | Standard reading text |

The four hierarchy readings below are derived editorial implementation inferences from that verified table; they are not Datadog-authored or a separately published UI specification.

- One family, three weights: NationalWeb carries every role, and hierarchy is signalled by weight — 300 lede, 400 body, 600 headings and navigation, 700 CTA — rather than by a second typeface.
- Heavy headline, light lede: the 68px / 600 hero set against the 22px / 300 intro is the primary hierarchy device.
- Tight display line height: the hero runs at `1.0` unitless (68px on 68px) for a dense headline block.
- CTA weight bump: buttons go to 700, one step heavier than navigation at 600, so the action reads as the heaviest text on the row.

### Assets

The asset-authority and usage boundaries below are derived editorial implementation inferences from the official press-kit and identity records; they are not Datadog-authored or a separately published UI specification.

- The logo dog is named “Bits”. Use white on purple/dark and purple `#632ca6` on light.
- Do not invert, recolor, gradient, box, or otherwise alter the official mark.
- The catalog identity pointer is a Google s2 favicon URL; its exact URL and the source's Simple Icons fallback note remain in provenance. The proxy is not presented as a distributed brand asset or licence.

<!-- design-md:section components-states -->
## 4. Components & States

### State evidence boundary

The evidence-boundary and applicability judgments in this section are derived editorial implementation inferences from the verified component roles; they are not Datadog-authored or a separately published UI specification.

The source verifies default component geometry, active navigation text, and a primary-CTA transition declaration. It does not supply a complete interaction capture. Applicability follows control meaning; unmeasured visual treatments remain absent, and state coverage is not claimed complete.

### CTA button family

The interactive classification and applicability judgments for this component family are derived editorial implementation inferences from its public navigation/conversion roles; they are not Datadog-authored or a separately published UI specification.

- Primitive type: button
- Kind: interactive
- Primary: `#632ca6` / `#ffffff`; 4px; `16px 24px`; height 54px; `18px / 700 / NationalWeb`; observed `background-color 0.15s ease-in-out`; use: primary marketing CTA — “Free trial”, “Get started”
- Compact primary: `#632ca6` / `#ffffff`; 6px; `8px 14px`; height 38px; `18px / 600 / NationalWeb`; use: compact primary action on pricing cards — “Start Free Trial”
- Outline on light: transparent; text/border `#632ca6`; `1px solid #632ca6`; 4px; `14px 24px 16px`; height 54px; `18px / 700 / NationalWeb`; use: secondary CTA on light backgrounds — “SEE THE PLATFORM”
- Ghost on dark: transparent; text/border `#ffffff`; `1px solid #ffffff`; 6px; height 50px; `18px / 600 / NationalWeb`; use: secondary CTA inside dark sections — “Free Trial”

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified button variants |
| hover | applicable | Pointer-web buttons; the primary transition declaration is observed, but target color is omitted |
| focus-visible | applicable | Interactive buttons; visual treatment omitted |
| disabled | applicable | Trial/platform actions can be unavailable; visual treatment omitted |
| loading | not-applicable | These public CTAs navigate rather than present in-button progress |
| error | not-applicable | These buttons do not themselves present validation failure |
| success | not-applicable | These buttons do not themselves present completion feedback |

### Top navigation item

The interactive classification and applicability judgments for this component are derived editorial implementation inferences from its navigation role; they are not Datadog-authored or a separately published UI specification.

- Primitive type: tab
- Kind: interactive
- Text `#555555`; active text `#632ca6`; `18px / 600 / NationalWeb`; padding `8.5px 12px 9.5px`
- Use: Product, Customers, Pricing, Solutions, Docs

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified navigation treatment and active variant |
| hover | applicable | Pointer-web navigation; visual treatment omitted |
| focus-visible | applicable | Interactive navigation; visual treatment omitted |
| disabled | not-applicable | Public top-level navigation has no disabled role in this contract |
| loading | not-applicable | Navigation selection does not carry loading presentation |
| error | not-applicable | Navigation selection does not present validation failure |
| success | not-applicable | Navigation selection does not present completion feedback |

### Header search input

The interactive classification and applicability judgments for this component are derived editorial implementation inferences from its search role; they are not Datadog-authored or a separately published UI specification.

- Primitive type: input
- Kind: interactive
- Source token background `#ffffff`; text `#212529`; border `1px solid #e1e5e9`; radius 4px; padding `0px 10px 0px 35px`; `18px / NationalWeb`; placeholder “Search”

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified search-field treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive input; visual treatment omitted |
| disabled | applicable | Search input can be unavailable; visual treatment omitted |
| loading | not-applicable | The field itself does not present asynchronous progress |
| error | applicable | Search/form input can reject invalid input; legacy treatment retained below |
| success | not-applicable | Query entry does not present a field-success state in the source contract |

### Region / datacenter select

The interactive classification and applicability judgments below are derived editorial implementation inferences from the source's explicit select-control role; they are not Datadog-authored or a separately published UI specification.

- Primitive type: badge
- Kind: interactive
- Background `#ffffff`; text `#000000`; radius 4px; padding `7px 10px 9px 12px`; height 34px; `18px / NationalWeb`
- Use: “US (US1, US3, US5)” region/datacenter select control

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Verified select-control treatment |
| hover | applicable | Pointer-web select control; visual treatment omitted |
| focus-visible | applicable | Interactive select control; visual treatment omitted |
| disabled | applicable | Region selection can be unavailable; visual treatment omitted |
| loading | not-applicable | The selector itself does not present plan-loading progress |
| error | not-applicable | The selector does not present validation failure in this contract |
| success | not-applicable | The selector does not present completion feedback |

### Pricing plan card

The decision to omit an interaction kind and applicability map is a derived editorial implementation inference from the unresolved card interaction evidence; it is not Datadog-authored or a separately published UI specification.

- Primitive type: card
- Interaction kind / applicability map: omitted
- Background `#ffffff`; text `#212529`; source-token radius 8px; legacy body bottom corners `0px 0px 8px 8px`; padding `0px 0px 16px`; shadow `none`

### Legacy state guidance

The following treatments are derived editorial implementation inferences in the legacy source rather than measured interaction proof; they are not Datadog-authored or a separately published UI specification. They apply only to the named product patterns.

| Pattern | Legacy treatment |
|---|---|
| Empty dashboard / no data | White canvas; one `#212529` line; one `#632ca6` connect-source action; no illustration clutter |
| Empty saved view | One `#555555` line plus path to create a view |
| Loading query/results | Final-size skeleton rows on `#f5f5f5`; 8px; flat pulse and no shadow shimmer |
| In-place refresh | Previous values remain; subtle `#632ca6` progress indicator |
| Query failure | Inline `#bf0000` explanation and retry; never bare “Something went wrong” |
| Form validation | Field-level `#bf0000` message describing valid input |
| Source connected | Brief inline confirmation and immediate next-step link; no celebratory emoji |
| Skeleton | `#f5f5f5` / `#eeeeee` final-size blocks; 4px–8px; flat pulse |
| Disabled | `#c7c7c7` text and reduced opacity; purple action fades rather than changing to grey |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The layout grouping and responsive-proof boundaries below are derived editorial implementation inferences from the verified desktop surfaces; they are not Datadog-authored or a separately published UI specification.

- Public surfaces use a centered hero, light 22px lede, filled-plus-outline CTA pair, alternating white/tint/black full-width bands, a multi-column pricing grid, and the `#110617` footer anchor.
- Source component measurements include 54px full CTA, 38px compact CTA, 50px ghost CTA, and 34px region control.
- Flat sections separate with background and hairline rather than card-stack elevation.
- The legacy responsive breakpoint, collapse, and image-behavior claims lack a separate multi-viewport proof record. Their exact values remain in provenance and are not promoted as verified responsive tokens.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The voice direction and forbidden-register judgments below are derived editorial implementation inferences from verified first-party copy and the official press kit; they are not Datadog-authored or a separately published UI specification.

Use technical, confident, plainspoken copy. Hero language is declarative and capability-first; product descriptions name metrics, traces, logs, and concrete operations; CTAs are direct imperatives — “Get started free”, “Free trial”, “See the platform”; technical writing assumes an engineer-to-engineer relationship; brand guidance is plain and corrective.

Verified live samples:

- “AI-Powered Observability and Security” — hero H1
- “Cloud Monitoring as a Service” — page-title meta
- “Our company name is \"Datadog\": one word with only the first letter capitalized.” — press kit
- “Products” and “클라우드 통합 모니터링…” — the two sampled section H2 strings, white on the dark band
- “Free trial” — primary CTA
- “SEE THE PLATFORM” — secondary outline CTA on light
- “Start Free Trial” — compact pricing CTA
- “Free Trial” — ghost CTA on dark
- “Search” — header search placeholder
- “US (US1, US3, US5)” — region/datacenter select control

Use “Datadog”, never “Data Dog” or “DataDog”. Avoid hype superlatives such as “revolutionary” and “game-changer”, exclamation-heavy marketing, vague benefit language that hides capability, and any copy or asset treatment that contradicts the press kit.

<!-- design-md:section governance -->
## 7. Governance

The governance judgments in this section are derived editorial implementation inferences of this reconstruction; they are not Datadog-authored or a separately published UI specification.

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

- authenticated observability/security product states and documentation parity
- NationalWeb distribution and licence status beyond the captured live use
- hover target color and unobserved focus-visible/disabled/error/success treatments
- verified responsive breakpoints, mobile navigation, card reflow, and image behavior
- animation name and verified reduced-motion behavior for the observed CTA transition; all other component-specific motion evidence
