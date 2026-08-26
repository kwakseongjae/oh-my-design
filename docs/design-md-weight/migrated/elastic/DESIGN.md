# Elastic UI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Elastic UI (EUI) is Elastic’s public React component framework: its documentation presents themed components, setup guidance, and implementation patterns for software interfaces. This contract covers three public EUI routes inspected on 2026-07-13 — the EUI home at `https://eui.elastic.co/`, the public component index at `https://eui.elastic.co/docs/components/`, and the card documentation route at `https://eui.elastic.co/docs/components/containers/card/index.html`. EUI sits on the framework/documentation side of the ecosystem: its public documentation exposes components and theme controls, while this reference deliberately limits UI claims to the three supplied EUI surfaces. Corporate marketing, EUI documentation, and the supplied public component surfaces are separate evidence domains; no authenticated Elastic-product UI is represented here.

Official EUI specification and live computed observation are also held apart. The EUI font-settings and Theme Provider pages are published framework specification; the three routes above are a computed-style capture. Where both name the same fact this document says so, and neither one is used to fill a value the other did not establish. Drawing the contract boundary at those three captured routes, keeping the published-specification and live-observation domains separate rather than merged, treating corporate marketing, EUI documentation, and the captured public component surfaces as separate evidence domains, and reading EUI as sitting on the framework/documentation side of the ecosystem, are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification.

Reading the captured EUI home, components index, and card documentation route as deliberately operational rather than campaign-led — white surfaces, dense blue-gray type, short 4px control geometry, and a blue action color making the system read like maintainable application chrome — and reading EUI as a framework-level expression of Elastic’s practical, scalable direction rather than a substitute record of the corporate marketing site or authenticated product UI, is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

Elasticsearch was launched as an open-source project in 2010, and Elastic was founded in 2012 by people behind Elasticsearch and Apache Lucene. In 2015 the company changed its name from Elasticsearch to Elastic to reflect a product scope that had expanded beyond search. Elastic’s 2019 design account describes an iterative redesign of product logos and icons to give a growing multi-product organization clearer visual hierarchy. Current EUI Theme Provider documentation identifies `EUI_THEME_BOREALIS` as the default theme. Those are company-history and framework-evolution facts, not EUI token evidence, and the theme name does not authorize an unobserved Borealis token set here.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Read EUI setup, theming, and component guidance on the public EUI home at `https://eui.elastic.co/`.
- Browse the public EUI component index at `https://eui.elastic.co/docs/components/`.
- Read a single component’s public documentation, such as the card route at `https://eui.elastic.co/docs/components/containers/card/index.html`.

Selecting these three captured-route outcomes as the primary tasks — the supplied material declares no task list of its own — is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.
<!-- design-md:claim-end -->

### Audience

The following are evidence-bounded stakeholder groups, not synthetic satisfaction claims. No individual personas and no fictional biographies are promoted.

- **Application developer using EUI.** Needs setup, theme, and component guidance that identifies the exact public framework surface rather than conflating it with Elastic’s marketing or authenticated products.
- **Design-system contributor.** Needs a concise record of live colors, typography, and row geometry, plus the boundary that prevents inferred component states from entering a shared token set.
- **Technical writer or reviewer.** Needs public documentation language that names implementation artifacts directly and preserves source/provenance links for future updates.

Identifying these three groups — the supplied material declares no audience of its own — and stating what each one *needs* are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification. The group names themselves stay at stakeholder level and carry no demographic, behavioral, or satisfaction claim.

### Distinctive traits

- Repeated public EUI foreground is `#1d2a3e`; a darker `#111c2c` appears in card documentation.
- `#0b64dd` is the observed solid action fill, while `#d9e8ff` is an observed light action treatment.
- White `#ffffff` is the observed canvas; `#ecf1f9` is a subdued panel surface and `#cad3e2` a visible hairline.
- The supplied sample clusters around 4px control corners and 4/6/8/12/16/24px spacing values.
- Corporate marketing, EUI docs, and the supplied public component surfaces are separate domains; no authenticated Elastic-product UI is represented here.

### Principles

These four items, including their *UI implication* notes, are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification. The numbered stems paraphrase Elastic’s own design writing and EUI’s published setup and color guidance; the implications underneath them are this reconstruction’s reading of what that means for an interface.

1. **Work iteratively at system scale.** Elastic describes its product-logo work as an iterative response to a fast-growing, multi-product organization.
   *UI implication:* prefer small, selector-backed component facts over a fictional universal style system.
2. **Make hierarchy legible.** Elastic’s design account distinguishes product logos from functional icons so their roles remain clear.
   *UI implication:* label navigation and controls by function; do not turn a documentation row into a button without semantic evidence.
3. **Change the least necessary theme variables.** EUI’s setup guidance recommends limited token overrides for substantial results.
   *UI implication:* preserve the measured base palette and add local values only with new evidence.
4. **Do not rely on color alone.** EUI’s color guidance asks authors to pair color context with icons or copy.
   *UI implication:* semantic action and state communication must not depend solely on `#0b64dd`, `#d9e8ff`, or any other color token.

The four application rules below are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification.

- Keep EUI documentation-local interfaces compact, using the measured spacing and 4px control-corner evidence.
- Use Inter only where the EUI font-family evidence applies; preserve the fallback stack as fallback.
- Distinguish `#0b64dd` solid action from the observed `#d9e8ff` subtle action treatment.
- Keep a navigational row as a `listItem` when the evidence is a static row rather than a button.

### Avoid

The five prohibitions below are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification. Each one restates a boundary of the supplied evidence rather than a published Elastic rule.

- Don't import Elastic marketing-logo colors or artwork as EUI component facts.
- Don't invent hover, focus, pressed, motion, dialog, toast, form-error, or responsive states from this zero-interaction packet.
- Don't substitute `system-ui`, Helvetica, Arial, or declared-only Roboto Mono for the verified Inter UI family.
- Don't treat a raw card or toggle variant as a reusable token unless its exact field set is promoted with matching claim evidence.
- Do not call this Elastic marketing, Kibana product UI, or an authenticated application surface; omit all unmeasured interactive and responsive behavior.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Every hex below is a selector-backed value from the three public EUI captures. Assigning each one the role name that follows it — action, subtle action, hairline, subdued surface, strong foreground — is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification. The measurement and the surface it came from are the verified part; the role label is this reconstruction’s reading of how the value is used.

- **Foreground** (`#1d2a3e`): repeated body text and component-documentation sidebar foreground.
- **Foreground Strong** (`#111c2c`): observed card-title text on the public card documentation route.
- **Action** (`#0b64dd`): filled primary EUI action on the home and card-documentation samples.
- **Action Subtle** (`#d9e8ff`): observed light-background action treatment in component documentation.
- **Canvas** (`#ffffff`): repeated public EUI page and panel canvas.
- **Hairline** (`#cad3e2`): observed 1px input/control border.
- **Surface Subdued** (`#ecf1f9`): observed subdued card/panel background on the card documentation route.

Elastic’s cluster mark and broader product-logo hierarchy are brand assets, not a license to promote logo colors or marketing artwork into EUI UI tokens. Use the selector-backed values above for this captured EUI scope. Reading the mark and the logo hierarchy as a separate evidence domain from these UI values is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### Spacing

Repeated captured values: 4px, 6px, 8px, 12px, 16px, and 24px. Reading that set as a compact documentation rhythm rather than a published grid or breakpoint contract is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### Shape

- Control: 4px
- Documentation sidebar category row: 0px

4px control corners are the geometry the supplied sample clusters around; the 0px row corner is that row’s own measured field. Treating both as local measured defaults rather than a universal radius scale is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### Elevation

The promoted documentation row is flat. The captured card and control samples use canvas, subdued surfaces, borders, and 4px geometry; no reusable shadow token is published because the packet does not establish a consistent elevation scale.

Reading border-and-surface separation as the observed depth method here in place of a tokenized raised layer, and reading the absence of a consistent elevation scale in the packet as the reason to publish no shadow token, are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification.

### Motion

No duration, easing, transition, or reduced-motion value was measured in the supplied evidence. Motion tokens are intentionally absent. Do not promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior until a later pass has recorded computed evidence of all five of those kinds for the specific component being described; official documentation of a single curve or duration does not satisfy that gate. Stating that five-kind, per-component promotion gate is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The five-way split below — official product-use, live computed surface-use, official distributed brand asset, declared-only, and fallback boundary — is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification. What each row reports is verified; sorting the rows into these classes is the reconstruction’s reading.

| Evidence class | Family and boundary |
|---|---|
| Official product-use | EUI’s font-settings documentation says the `euiTheme.font.family` stack applies to all parts of the UI and begins with Inter. |
| Live computed surface-use | The supplied capture records Inter as loaded, high confidence, in 810 visible uses across body, button, card, input, list-item, badge, and toggle roles. |
| Official distributed brand asset | No Elastic-owned distributed type asset is established by the supplied material. EUI’s setup documentation instead points consumers to obtain Inter from its source when locally embedding it. |
| Declared-only | Roboto Mono has declared `@font-face` sources in the packet but zero visible uses; it is not a UI-family token here. |
| Unresolved / fallback boundary | `system-ui`, Helvetica, and Arial occur as fallbacks in the computed stack. They are not rendered or named as substitutes for Inter. |

Inter is canonical for this scope only because the published EUI font specification and the live computed capture agree on it; neither alone would carry the other’s claim. Making agreement between those two domains the condition for promoting a family is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### Captured hierarchy

| Role | Family | Size | Weight | Line height | Scope |
|---|---|---:|---:|---:|---|
| Body | Inter | 14px | 400 | 16px | repeated public EUI home and component docs |
| Card heading | Inter | 20.0004px | 600 | 24.0002px | public card-documentation title sample |
| Control | Inter | 14px | 450 | 20.0004px | public component-documentation controls |

### Licensing

EUI’s repository is dual-licensed under Elastic License 2.0 and SSPL v1 according to the EUI documentation; the Elastic License source is listed in the verification record. That repository licensing note does not establish an Inter font license or change the live-use boundary above. Reading software licensing and font licensing as separate questions here is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### Assets

The only logo record for this reference is a third-party favicon-service capture of the EUI documentation domain, retained as a catalog identity record; the exact URL stays in the source ledger rather than in this contract. Elastic marketing-logo colors and artwork are not EUI component facts, and Elastic’s product logos and functional icons stay in that same brand-asset domain rather than becoming EUI asset tokens here. Reading that record as an identity pointer rather than as an Elastic-distributed brand asset or a license grant, and holding Elastic’s product logos and functional icons in the brand-asset domain rather than among this contract’s asset values, are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

The supplied packet records `interactionCount: 0`. The sidebar row below is retained because its default geometry and typography are directly observed; no hover, focus, pressed, active, disabled, or transition value is published for it. Static checked, unchecked, and disabled toggle samples remain raw evidence only because the packet contains no interaction events and no toggle token is required for this honest component set.

Absence of an observation omits a visual treatment; it is never a reason to call a state inapplicable, and this is not a complete state-coverage claim. The causal readings in the paragraph above — that direct observation of default geometry and typography is what justifies retaining the row, and that a zero-interaction packet is what keeps the toggle samples as raw evidence rather than a token — are a derived editorial implementation inference from the verified surfaces; they are not Elastic-authored or a separately published UI specification.

### Sidebar Category Row

- Role: static public component-documentation sidebar category row
- Primitive type: `listItem`
- Background: transparent
- Text: `#1d2a3e`
- Radius: 0px
- Padding: 0px
- Font: 14px / 500 / 16px / Inter
- Use: Static component-documentation sidebar category row; selector `surface-2::li`.

This row is promoted as a `listItem` and explicitly not as a button: the evidence is an observed list row and does not establish button semantics. Because nothing in the supplied material establishes an interactive control role for it either, no interactive kind and no canonical state-applicability map is asserted here — the question is left open rather than decided in either direction. Reading the observed list row as insufficient evidence for a control role is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

### State record

No reusable state matrix is published. The supplied packet has zero interaction events. Its three static observations—checked, unchecked, and disabled toggle samples—are documented in the verification record but are not generalized into component tokens; empty, loading, error, success, skeleton, focus, hover, pressed, dialog, and toast behavior are absent. Declining to generalize those three static observations into tokens is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The capture supports a compact public documentation rhythm: 4px, 6px, 8px, 12px, 16px, and 24px recur in the measured spacing set. Component-docs text and sidebar rows are 14px, while a card title sample is 20.0004px. No marketing grid, authenticated-product layout, or responsive container rule is inferred from these desktop captures. Reading the recurring spacing values as a documentation rhythm is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.

Only 1440×900 public captures were supplied. No breakpoint, mobile navigation behavior, touch-target rule, or responsive state is published. None of them is substituted from a convention.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The EUI documentation is implementation-oriented: it names a setup concern, identifies the relevant token or provider, and gives a concrete usage path. Elastic’s design writing also frames its icon work as iterative and scalable for a multi-product environment. Reading those two observations together as support for a direct, technical, and scope-aware tone for EUI documentation is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification, and it is not a claim about the full Elastic marketing voice. The same class applies to the three supported directions in the table below.

| Context | Supported direction |
|---|---|
| Setup guidance | Name the provider, token, or component before describing configuration. |
| Theming guidance | State the smallest safe override and its scope. |
| Accessibility guidance | Pair color with explanatory copy or icons rather than color alone. |

Source-grounded examples of the documentation’s framing are “Setup,” “Styling your application,” and “Customizing the style tokens.” Those three strings are carried unchanged from the documentation’s own wording.

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

- hover, focus, pressed, active, disabled, and transition values for the documentation sidebar category row
- empty, loading, error, success, skeleton, focus, hover, pressed, dialog, and toast behavior
- a toggle token; the static checked, unchecked, and disabled toggle samples stay raw evidence
- motion duration, easing, transition, and reduced-motion values
- a reusable shadow token, and any consistent elevation scale
- breakpoint, mobile navigation behavior, touch-target rule, responsive state, and any responsive container rule

Elastic marketing, Kibana product UI, and authenticated Elastic-product surfaces are outside this contract’s scope rather than unresolved values within it. Do not fill them from the values above. Placing those three surfaces outside the scope instead of inside the unresolved list is a derived editorial implementation inference from the verified surfaces; it is not Elastic-authored or a separately published UI specification.
