# ElevenLabs Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

ElevenLabs is an AI research and product company that began with human-like voice technology and now describes three distinct offerings: `ElevenAgents` for customer-facing voice and chat agents, `ElevenCreative` for creator and marketing workflows, and `ElevenAPI` for developers. This contract covers three current first-party public communication surfaces only: the marketing home, one customer-story editorial route, and the pricing route. Public marketing/editorial/pricing, the authenticated product interface, documentation chrome, official brand assets, official policy, and declared font assets are separate evidence domains; observation on one does not populate another. The authenticated product interface and the documentation chrome are outside this reconstruction, so no authenticated-product or documentation-chrome value is carried here. Treating those three captured routes as the boundary of this contract, rather than as a proxy for every ElevenLabs surface, is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

The official brand page publishes the mark construction, the correct names, and a per-platform direction: blue for `ElevenAgents`, orange for `ElevenCreative`, and a monochrome approach for `ElevenAPI`. The official “11” symbol abstracts eleven and references a pause icon, and its clear-space and naming rules govern brand use rather than a UI component library. Characterizing the resulting parent identity as spare — black, white, the two-bar “11” pause-like symbol, and disciplined naming — while each platform carries its own graphic and color approach, is a derived editorial implementation inference from the verified surfaces and that official brand material; it is not ElevenLabs-authored or a separately published UI specification.

Reading the supplied public capture as reinforcing that distinction — black-and-white actions, warm near-neutrals, low-contrast borders, `Inter` for the repeated reading rhythm, and light `Waldenburg` display moments — is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.
<!-- design-md:claim-end -->

### Origin and current evolution

ElevenLabs says it was founded in 2022 by Piotr Dąbkowski and Mati Staniszewski after the two reflected on poor dubbing in films they watched while growing up in Poland. The company’s own help material describes that origin as the motivation for improving voice dubbing and states a mission of making content accessible in any language and voice. The current public account is broader than the original voice model: the official About page names an agent platform for businesses, a creative platform for creators and marketers, and an API platform for developers. Reading that shift as the explanation for why the official brand system deliberately gives the three platforms their own graphic treatment instead of using one visual vocabulary everywhere is a derived editorial implementation inference from that official material; it is not ElevenLabs-authored or a separately published UI specification.

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting the following three platform outcomes, drawn from official first-party product descriptions, as the Primary tasks is a derived editorial implementation inference from the verified surfaces and that official material; it is not ElevenLabs-authored or a separately published UI specification.

- Deploy customer-facing voice and chat agents with integrations, testing, monitoring, and reliability.
- Generate and edit speech, music, image, and video in a browser-based creative environment.
- Reach AI audio models through APIs and official SDKs.
<!-- design-md:claim-end -->

### Audience

Official sources identify stakeholder groups rather than named user personas; no fictional individual is asserted, and none is reconstructed here. The groups are businesses deploying agents, creators and marketers, developers, and accessibility and nonprofit recipients — the last through the Impact program, which provides free licenses to qualifying individuals and organizations.

### Distinctive traits

Grouping the following four observations and boundaries as the distinctive traits of this contract is a derived editorial implementation inference from the verified surfaces and official brand material; it is not ElevenLabs-authored or a separately published UI specification.

- Parent-brand public chrome is neutral: `#000000`, `#ffffff`, `#f5f3f1`, and `#e5e5e5` are selector-backed observations.
- The official “11” symbol abstracts eleven and references a pause icon; its clear-space and naming rules belong to brand use, not a UI component library.
- `Inter` is the repeated live UI/body family; light-weight `Waldenburg` is a live public display family.
- `ElevenAgents`, `ElevenCreative`, and `ElevenAPI` have official platform-specific identities and must not be reduced to one parent-product palette.

### Official brand guidance

- Preserve official platform names exactly: `ElevenAgents`, `ElevenCreative`, and `ElevenAPI`.
- Do not alter the official “11” symbol, its construction, or the prescribed platform names.
- The official brand page distributes logo and symbol assets and sets trademark-use rules. Reading that distribution as making the page neither a font package, nor a font-license source, nor a source for unlisted UI CSS values is a derived editorial implementation inference from the verified surfaces and that official brand material; it is not ElevenLabs-authored or a separately published UI specification.

### Derived implementation principles

These four items are a derived editorial implementation inference from the verified surfaces and first-party brand, documentation, and safety material; they are not ElevenLabs-authored or a separately published UI specification.

1. **Make communication and creation more seamless.** State the relevant capability and audience before styling a generic “AI” surface.
2. **Keep platform identities legible.** Preserve official platform names and do not transplant an Agents or Creative color direction into the parent brand without context. Treat Agents blue, Creative orange, and API monochrome as platform-brand direction until route-local UI values are observed.
3. **Treat safety as part of the product.** Make consent, provenance, reporting, and misuse boundaries understandable where the relevant flow is evidenced.
4. **Use the official mark with discipline.** Protect the “11” symbol’s clear space and never reconstruct it with text characters.

Two further application rules — use the black/white action pairing only where the public-surface context calls for it, and keep live `Inter` reading/UI and light `Waldenburg` display roles distinct — are a derived editorial implementation inference from the verified surfaces; they are not ElevenLabs-authored or a separately published UI specification.

### Avoid

The first three avoidances below are derived editorial implementation inferences from the verified surfaces; they are not ElevenLabs-authored or a separately published UI specification. The fourth restates the official brand page’s trademark boundary.

- Don’t apply parent marketing neutrals as an asserted authenticated-product palette.
- Don’t substitute a system or fallback face for declared-only `Geist Mono` or `WaldenburgFH`.
- Don’t invent hover, focus, expanded-menu, or pressed visual variants from structural ARIA/state observations.
- Don’t alter the official “11” symbol, its construction, or the prescribed platform names.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Every value below is a selector-backed observation from the supplied public marketing, editorial, and pricing capture. Assigning the role names and the bounded-use readings in the third column is a derived editorial implementation inference from those verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

| Role | Value | Verified use |
|---|---|---|
| Canvas / inverse action | `#ffffff` | Observed page and public inverse-action background |
| Primary public action / foreground | `#000000` | Observed black public action and primary text |
| Warm public surface | `#f5f3f1` | Observed on a pill-shaped home control only; not a global canvas claim |
| Muted text | `#777169` | Repeated public-route muted text |
| Hairline | `#e5e5e5` | Repeated computed border color across the captured routes |
| On primary | `#ffffff` | Observed text on the black public action |

`#000000` carries both the primary public action and the foreground ink; `#ffffff` carries both the canvas and the on-primary text. Reading each pairing as two distinct roles that do not substitute for each other is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

### Official platform-brand boundary

The official brand page assigns blue to `ElevenAgents`, orange to `ElevenCreative`, and a monochrome approach to `ElevenAPI`. It supplies no selector-backed CSS value for those directions in this evidence, so no platform hue is promoted into the parent token set. The supplied capture is public marketing/editorial/pricing evidence only; it does not establish an authenticated dashboard palette.

### Spacing

Scale: `xs: 4`, `sm: 6`, `md: 8`, `lg: 12`, `xl: 16`, `xxl: 20`. The captured public routes repeat 4, 6, 8, 12, 16, and 20px spacing observations. Reading those repeats as a restrained public rhythm rather than as a universal spacing scale or a product-layout grid is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

### Shape

- Scale: `sm: 4`, `md: 12`, `lg: 16`, `full: 9999`.
- Captured compact text-control corners: `4px`.
- Captured container corners: `12px` and `16px`.
- Captured full-pill actions and controls: `9999px`.
- The captured selected public tab uses a component-local `14px` radius that the scale does not contain; it stays a component-local value and is not normalized into the scale.

### Elevation

The capture establishes two selector-backed public depth treatments:

- White public action: `rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px, rgba(0, 0, 0, 0.04) 0px 2px 4px` — a dark 1px-like edge plus a low-alpha 1px/2px lift.
- Home editorial card: `rgba(0, 0, 0, 0.4) 0px 0px 1.143px, rgba(0, 0, 0, 0.04) 0px 2px 4px` — a low-alpha `0px 2px 4px` shadow with a 1.143px edge.

Reading those two measured shadow strings as an edge-plus-lift treatment is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

The capture has no evidence for a universal shadow ladder, modal elevation, or authenticated-product layers, so none is promoted.

### Motion

No motion duration, easing value, or reduced-motion behavior was measured in the supplied artifact, and the official brand guidance reviewed here describes graphics rather than a UI motion specification. No motion token is asserted.

A motion value may be promoted only after component-specific computed observation establishes all five evidence kinds — transition properties, animation name, duration, easing, and reduced-motion behavior. A single confirmed curve does not satisfy that condition. Until then the unresolved motion fields stay absent rather than carrying a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The evidence classes below record how each family was resolved. Applying them as the disposition that decides which family becomes a UI token is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

| Evidence class | Family and boundary |
|---|---|
| Live computed surface-use | **Inter** is loaded/high with 879 observed uses across the supplied public routes, with CDN source URLs. **Waldenburg** is loaded/high with 22 observed uses and three ElevenLabs CDN font files; observed samples include a 48px/300 home h1 and 36px/300 headings. |
| Official product-use | No official source in this evidence names a product UI font family. The official documentation establishes the separate developer-doc domain but was not raw-style inspected. |
| Official distributed brand asset | The official brand page distributes logo and symbol assets, not a font package or font license. It supports brand-mark use only. |
| Declared-only | **Geist Mono**, **WaldenburgFH**, **Waldenburg-ML**, and listed fallback families have declared/source evidence in the capture but no visible loaded use. They are not UI-family tokens or specimen claims. |
| System / unresolved | No system fallback is substituted for an identified family; no font-license claim is made where an official font-license source was not found. |

### Family

- **Live public UI/body family:** `Inter`
- **Live public display family:** `Waldenburg`
- Both are canonical here because visible computed use and loaded CDN source evidence agree on the three supplied public routes. Neither is promoted to an authenticated-product or documentation-chrome family.

Treating that agreement between computed use and loaded source evidence as sufficient grounds for promoting a family is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

### Selector-backed hierarchy

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Public display | Waldenburg | 48px | 300 | 1.08 | Captured home h1 |
| Public section heading | Waldenburg | 36px | 300 | 1.17 | Captured public h2 |
| Repeated reading text | Inter | 18px | 400 | 1.60 | Captured list/body text |
| Public action sample | Inter | 15px | 400 | 1.00 | One black home action |

Line heights are unitless ratios. Multiply by the role's size rather than substituting a pixel value measured at one captured size.

### Assets

- The official brand page distributes logo and symbol assets and sets trademark-use rules; the exact asset and metadata URLs are not carried in this contract.
- The “11” symbol’s construction and clear space are governed by that brand guidance, not by this interface contract.
- No font asset, font package, or font-license document is distributed by the sources reviewed here, so no font-license claim is made for the CDN-delivered faces.

<!-- design-md:section components-states -->
## 4. Components & States

### Evidence boundary

Every component value below comes from the supplied public marketing, editorial, and pricing capture, which records zero interaction expansions. The supplied public capture includes structural disabled buttons and selected tabs but no measured authenticated-product, loading, error, success, form-validation, or expanded interaction state. Preserve only the documented public selected/disabled provenance recorded in this section; omit product-state recipes rather than invent them. Unmeasured state styling and unobserved menu/dialog variants are intentionally omitted.

Applicability below is decided by what each control does, not by how complete the capture is: absence of a measurement omits the visual treatment and never turns a state into `not-applicable`. This is not a complete state-coverage claim. Making those applicability decisions and writing the reasons that accompany them is a derived editorial implementation inference from the verified surfaces and their component records; it is not ElevenLabs-authored or a separately published UI specification, and it promotes no unmeasured visual treatment.

### Black public action

- Kind: interactive
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: `9999px`
- Padding: `0px 14px`
- Font: `15px / 400 / Inter`
- Use: one public-home action; do not generalize to an authenticated product button.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured public-home treatment |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action; visual treatment omitted |
| disabled | applicable | The same public capture records structurally disabled buttons, so unavailability is a real condition for this control; visual treatment omitted |
| loading | not-applicable | A public marketing action hands off to its destination; progress belongs to that destination, not to the control |
| error | not-applicable | The control carries no input of its own to validate |
| success | not-applicable | The control presents no completion outcome of its own |

### White public action

- Kind: interactive
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Radius: `9999px`
- Shadow: `rgba(0, 0, 0, 0.4) 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 1px, rgba(0, 0, 0, 0.04) 0px 2px 4px`
- Use: repeated public-route action; the capture does not establish its semantic variant name, so no variant name is assigned.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured and repeated across the public routes |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action; visual treatment omitted |
| disabled | applicable | The same public capture records structurally disabled buttons; visual treatment omitted |
| loading | not-applicable | A public marketing action hands off to its destination; progress belongs to that destination, not to the control |
| error | not-applicable | The control carries no input of its own to validate |
| success | not-applicable | The control presents no completion outcome of its own |

### Warm public pill

- Kind: interactive
- Anatomy: label
- Background: `#f5f3f1`
- Text: `#000000`
- Radius: `9999px`
- Padding: `0px 16px`
- Font: `15px / 400 / Inter`
- Use: home-only public control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured home-only treatment |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A public control can be made unavailable; visual treatment omitted |
| loading | not-applicable | Activating this public control does not itself present progress |
| error | not-applicable | The control carries no input of its own to validate |
| success | not-applicable | The control presents no completion outcome of its own |

### Editorial card

- Interaction kind and applicability map: omitted. The capture records this as a public-home article and establishes no interactive primitive for it, so its kind is left unresolved rather than decided. Treating the record as insufficient to settle that question is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.
- Background: `#ffffff`
- Radius: `16px`
- Shadow: `rgba(0, 0, 0, 0.4) 0px 0px 1.143px, rgba(0, 0, 0, 0.04) 0px 2px 4px`
- Use: public-home article capture; it is not a general dashboard-card contract.

### Listbox trigger

- Primitive type: button
- Kind: interactive
- Anatomy: label with `aria-haspopup="listbox"`
- Radius: `12px`
- Padding: `0px 8px 0px 12px`
- Font: `15px / 500 / Inter`
- Use: public-home button with `aria-haspopup="listbox"`. The artifact has no menu-open capture, so the opened listbox has no recorded appearance.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured closed-trigger treatment |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A disclosure trigger can be made unavailable; visual treatment omitted |
| loading | not-applicable | Disclosing the listbox does not itself present progress |
| error | not-applicable | Disclosure carries no validation outcome |
| success | not-applicable | Disclosure carries no completion outcome |

### Selected public tab

- Primitive type: tab
- Kind: interactive
- Anatomy: label with `role="tab"`
- Radius: `14px`
- Padding: `0px 21px 0px 20px`
- Font: `18px / 400 / Inter`
- Observed: selected via `aria-selected=true`, with no measured visual delta. No selected-color change, hover, focus, or pressed style was observed.
- Use: one public-home selected tab; not a product-wide component contract.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured unselected/selected tab treatment; the selected marker carries no measured delta |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be made unavailable; visual treatment omitted |
| loading | not-applicable | Selecting a tab does not itself present progress |
| error | not-applicable | Tab selection carries no validation outcome |
| success | not-applicable | Tab selection carries no completion outcome |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop public routes repeat compact `4px` text-control corners alongside `12px`/`16px` containers and full-pill actions, with 4, 6, 8, 12, 16, and 20px spacing observations. Reading those repeats as support for a restrained public rhythm, while declining to read them as a universal spacing scale or a product-layout grid, is a derived editorial implementation inference from the verified surfaces; it is not ElevenLabs-authored or a separately published UI specification.

No mobile viewport or breakpoint behavior is present in the supplied evidence. Preserve the observed public components’ content semantics when adapting a layout, but do not claim a specific collapse threshold, mobile navigation pattern, or touch-target size without new route-specific evidence.

Official platform art direction — spheres for Agents and Chladni-pattern variations for Creative/API — belongs to platform-brand materials rather than to this parent marketing token set.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Official copy is direct, technically specific, and mission-led: the company describes itself as an AI research and product company making communication and creation with technology seamless, while its documentation routes audiences through product-specific paths and concrete API examples. Safety language is explicit rather than ornamental: the safety page frames safeguards as part of development, deployment, and misuse prevention. Summarizing that language as direct, technically specific, and mission-led, and deriving the four directions below from it, is a derived editorial implementation inference from that first-party material; it is not ElevenLabs-authored or a separately published UI specification.

| Context | Evidence-backed direction |
|---|---|
| Parent brand | Describe the research/product company and its three named platforms plainly. |
| Documentation | Use example-first, capability-specific language; do not borrow unobserved docs-chrome styles. |
| Safety | Name the safeguard, traceability, or accountability point directly. |
| Brand naming | Keep `ElevenLabs`, `ElevenAgents`, `ElevenCreative`, and `ElevenAPI` in their official forms. |

Beyond those four directions and the official product names, this evidence establishes no further product microcopy or locale behavior, so none is written here.

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

- authenticated-product palette, dashboard components, product-state recipes, and a product-layout grid
- documentation-chrome typography and component values
- platform color values behind the official Agents blue, Creative orange, and API monochrome directions
- hover, focus, pressed, expanded-menu, and dialog visual variants
- loading, error, success, and form-validation state treatments
- mobile viewport and breakpoint behavior, collapse threshold, mobile navigation pattern, and touch-target size
- motion duration, easing value, and reduced-motion behavior
- a universal shadow ladder, modal elevation, and authenticated-product layers
- an official font-license source for the identified and declared-only families
- the semantic variant name of the white public action
