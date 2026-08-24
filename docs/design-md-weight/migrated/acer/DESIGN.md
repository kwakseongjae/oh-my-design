# 宏碁 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

宏碁 (Acer) is a Taiwan-founded technology company whose public portfolio spans computers, displays, and newer businesses, while its corporate mission is to break barriers between people and technology. This contract covers three supplied public web surfaces from the 2026-07-13 packet: the Korean regional product home (`https://www.acer.com/kr-ko/`), the US laptop catalog (`https://www.acer.com/us-en/laptops`), and the corporate site (`https://www.acer.com/corporate/en`). Catalog homepage identity is `https://www.acer.com/`.

Acer began in 1976 as Multitech, focused on the commercialization of microprocessor technology, and created the Acer name in 1987. Official milestones describe later shifts from manufacturing into marketing and sales, then into gaming, lifestyle, cloud, and sustainable innovation. The following portfolio-versus-laptop-only and hardware-beyond / people-work-responsibility readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. That history makes the brand’s broad device and solution portfolio more legible than a laptop-only description would. Today Acer frames its mission as “Breaking barriers between people and technology.” Its corporate home says the group operates across computers, displays, and new businesses while pursuing sustainable growth. The current narrative is therefore not just access to hardware, but technology that connects people, work, and wider social or environmental responsibilities. The 2023 Conscious Technology announcement states that technology should be designed and made with consideration for the future. Acer corporate president Victor Chien states, “We focus on achieving measurable change.” Acer’s current corporate evolution also names a Conscious Technology direction and a Vero product line.

The following capture-bound coverage sentence is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. These three public web surfaces are not a proxy for native application screens, downloaded brand guidelines, product interaction recordings, or a public official Acer design-system specification.

The following visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. The captured public web language is practical rather than ornamental: a white canvas, near-black reading text, green action emphasis, sans-serif hierarchy, and deliberately simple geometry.

The following green-emphasis and shared-system readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. The bright `#80c343` fill and darker `#40810c` text green make calls to action easy to identify against otherwise quiet surfaces; large headings create product-story scale without adding decorative effects. Conscious Technology and Vero are useful strategic context for that green emphasis; they do not prove a single shared component system, and they do not encode sustainability in the measured website tokens.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Follow a product-story call to action on the captured Korean home.
- Scan feature-card product information on the captured US laptop catalog.
- Choose a locale on the captured public laptop and corporate surfaces.
<!-- design-md:claim-end -->

### Audience

The following no-invented-personas, stakeholder-group, and task-context reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Source §13 names evidence-bounded stakeholder archetypes drawn from public company, product, and sustainability material — individual technology users; organizational customers or partners; and employees, suppliers, communities, and customers in Acer’s sustainability narrative. Those groups are not an official Acer classification of users, not synthetic research personas, and not performance scores. Restricting Audience so those archetypes are not named personas and are not primary tasks, and tying observable work only to the three primary tasks, is part of that same derived reading. The supplied capture supports catalog and CTA patterns, not assumptions about checkout or account behavior.

### Distinctive traits

- A measured public-web action pair of `#80c343` fill and `#222222` text
- A darker `#40810c` for a transparent tertiary CTA on the home surface
- Loaded, visibly used `Noto Sans` across all three supplied Acer surfaces (391 visible first-family uses)
- Zero-radius feature cards and pill-shaped CTA/control geometry

Treating pill CTA geometry, 24px locale-select corners, and square feature-card geometry as distinct surface patterns rather than one universal Acer component is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification.

### Principles

These four items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. They are application principles derived from Acer’s official mission, core values, and current sustainability narrative; they are not a published Acer UI component specification.

1. **Make technology approachable.** Lead with understandable human outcomes before technical detail.
   *UI implication:* Use plain labels, readable hierarchy, and one clear primary action.
2. **Progress with purpose.** Pair innovation claims with a specific use case, material choice, or accountable target.
   *UI implication:* Keep environmental supporting copy close to the product fact it qualifies.
3. **Stay curious and concrete.** Invite exploration without overpromising.
   *UI implication:* Use catalog cards and secondary actions to reveal information progressively, rather than inventing status badges.
4. **Work across people and partners.** Acer’s mission and Earthion work frame progress as collaborative.
   *UI implication:* Make partner, service, and support pathways easy to distinguish from purchase CTAs.

Capture-bound application (source §7 Do’s and harvested geometry). Treating the following list as a capture-bound application of source §7 Do’s and harvested geometry is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification.

- Use the measured green action colors against the quiet white and near-black public-web palette.
- Keep home CTAs pill-shaped while retaining the observed square feature-card treatment in catalog contexts.
- Use Noto Sans only where the target surface can load it; disclose unavailable fonts rather than substituting a system face as if it were Noto.
- Retain home CTA geometry, laptop feature-card geometry, and locale-select geometry by observed surface rather than merging them into a hypothetical universal Acer component.

### Avoid

The following items copy source §7 Don’ts. They are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification.

- Do not treat `#80c343` as an unverified semantic success, confirmation, or hover token.
- Do not invent interactive state colors, elevation, error treatments, or native-product geometry from these static web samples.
- Do not collapse marketing, catalog, and corporate evidence into a single undocumented component library.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Selector-backed public-web colors:

- **Primary** (`#80c343`): filled CTA background observed on home, laptop, and corporate public surfaces. Catalog `primary_color` is this same hex.
- **Brand Green** (`#40810c`): text and border color observed on the home tertiary CTA and navigation-related links.
- **Canvas** (`#ffffff`): white page background observed on all supplied surfaces.
- **Foreground** (`#222222`): dominant text and border cluster across all supplied surfaces.
- **Muted** (`#474747`): feature-card copy color on the laptop catalog surface.
- **Subtle** (`#f8f8f8`): locale-select foreground/border pair on the laptop and corporate surfaces.

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. Catalog `primary_color` is this observed filled-CTA hex, not a semantic success, confirmation, or hover token. Locale Select’s background `#474747` is that control’s renderable field; it shares a hex with Muted feature-card copy and is not merged into a different role. Locale Select’s text `#f8f8f8` is that control’s renderable field and the Subtle role, not Canvas. These roles describe only the measured public web surfaces.

The following evidence-domain application is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Source token note: only the three supplied Acer web surfaces ground these tokens. Product, corporate, and declared-only font observations remain separate where the evidence does not connect them. They do not establish product-app semantic success, warning, error, hover, or theme tokens.

### Spacing

YAML `spacing`: xs 6, sm 8, md 16, lg 24, xl 32. The supplied surfaces repeatedly expose 6px, 8px, 16px, 24px, and 32px values.

The following measured-scale reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. They are retained as a measured working scale, not as proof of a private product design-token system.

### Shape

- Control (locale select): 24px
- CTA pill: 800px
- Feature card: 0px

YAML `rounded`: control 24, pill 800.

The following coexist and local-geometry readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. Two observed shape families coexist: 24px controls and 800px CTA pills, alongside square feature cards. The data does not support an additional general radius scale. 24px locale-select corners and 800px CTA pills are local defaults, not a universal radius.

### Elevation

The representative CTA, select, and feature-card samples in the supplied packet each report `box-shadow: none`.

The following no-canonical-shadow and separation readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. No canonical shadow token is promoted. Visual separation is instead carried by color, spacing, typography, and the feature card’s top border. These are observed treatments on those samples, not proof of a general elevation ladder.

### Motion

No duration scale, easing curve, transition, or interactive motion state was captured in the supplied evidence.

The following no-published-token and future-work limiter readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. Accordingly, no Acer motion token is published here. Future work should respect reduced-motion preferences and keep motion subordinate to the task, but must measure any timing or easing value before treating it as Acer-specific.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification: no native-product typeface named in this pass, and none promoted; live `Noto Sans` as a surface-use claim rather than a proprietary Acer typeface; `acer-icons` as an icon asset rather than a text-family token; declared-only faces excluded from tokens; Noto’s SIL Open Font License 1.1 as the font asset’s license boundary rather than an Acer brand-font claim.

| Evidence class | Acer status |
|---|---|
| Official product-use | No first-party statement was found in this pass that names a typeface for Acer’s native products; none is promoted. |
| Live computed surface-use | `Noto Sans` is loaded and visibly used on the supplied Korean home, US laptop, and corporate surfaces. The evidence packet records 391 visible first-family uses backed by loaded FontFace resources, including Acer-hosted Noto files and Google-hosted resources. It is a live surface-use claim, not evidence of a proprietary Acer typeface. |
| Official distributed brand asset | `acer-icons` is a loaded Acer-hosted icon font in the packet; it is an icon asset, not a text-family token. |
| Declared-only | `Noto Sans JP`, `Noto Sans TC`, and `Material Icons` are declared but have zero visible first-family uses in the packet. |
| License | The Noto project’s published license is SIL Open Font License 1.1; this documents Noto’s license boundary, not an Acer brand-font claim. |
| Unresolved evidence class | Native-product typography, local-market substitutions beyond the captured surfaces, and any Acer-owned text typeface are absent. |

### Family

- **Current visible UI family:** `Noto Sans`
- YAML `family.ui`: `Noto Sans`
- **Loaded non-text:** `acer-icons` (icon font)
- **Declared-only:** `Noto Sans JP`, `Noto Sans TC`, `Material Icons`

The following font-use boundary, including treating `Noto Sans` as the canonical visible UI family because computed visible use and loaded FontFace/source evidence agree, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. `Noto Sans` is the canonical visible UI family for this reference because computed visible use and loaded FontFace/source evidence agree. Do not replace unavailable or unobserved brand type with Noto Sans. Use Noto Sans only where the target surface can load it; disclose unavailable fonts rather than substituting a system face as if it were Noto. Do not present Noto Sans as a proprietary Acer typeface.

### Type roles

Verified YAML line-height values are the keyword `normal` on Display and Body, and the size-local `28.368px` on CTA.

The following ratio-versus-size-local reading, including not converting those recorded values into a different unit, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. They are not converted into a different unit. `normal` is the recorded line-height keyword, not a fixed px. `28.368px` is the observed CTA line-height at 18.912px / 600, not a replacement for Display or Body `normal`. CTA `18.912px / 600 / 28.368px` is also the Primary CTA and Tertiary CTA font field; it is not merged into Display heading.

| Role | Font | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---|---|
| Display heading | Noto Sans | 42.768px | 600 | normal | observed `h2` treatment on the public home surface |
| Body | Noto Sans | 16px | 400 | normal | observed default body treatment on the public home surface |
| CTA | Noto Sans | 18.912px | 600 | 28.368px | observed primary and tertiary home CTA treatment |

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. No first-party mark file is attached here.

`acer-icons` is a loaded Acer-hosted icon font.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification.

The supplied interaction count is zero.

The following classification of the source §14 table as implementation guidance for a future Acer-adjacent surface, not observed Acer state styling, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Do not add those rows’ values to tokens without new evidence. Characterizations such as “non-deceptive”, “Never represent a static green CTA as evidence of a successful completed action”, and “without claiming an observed skeleton style” are part of the same derived reading.

| Category | Guidance |
|---|---|
| Empty | Explain why no catalog or search results are shown and offer a safe next route. |
| Loading | Preserve card or control geometry with a non-deceptive loading placeholder. |
| Loading | Keep primary-action labels stable while work is in progress. |
| Error | Explain a network or service failure in plain language and provide a retry path. |
| Error | Separate invalid selection feedback from product availability messaging. |
| Error | Never represent a static green CTA as evidence of a successful completed action. |
| Success | Confirm the completed outcome with specific next steps. |
| Skeleton | Match the observed feature-card information hierarchy without claiming an observed skeleton style. |
| Skeleton | Reserve space for the locale control instead of changing layout abruptly. |
| Disabled | Do not infer disabled color, opacity, or cursor values from this packet. |

YAML component `states` notes record default static baseline observation; no interactive state was captured. Recording those unobserved interactive-state values as omitted rather than synthesized is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. No changed state values are published.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records no `Focus` capture and no `focus-visible` treatment; `focus-visible` visual treatment remains omitted. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact label/destination/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the implementation-guidance §14 rows. This is not a complete state-coverage claim.

The Feature Card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted. Source Use names a laptop catalog `.card-feature` link card; “link card” in Use is not a closed seven-state contract.

The following native-select instruction reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Source §8 prompt language unique to Locale Select: provide accessible native-select behavior without claiming captured focus styles. That native-select instruction is kept on the Locale Select control; captured focus styles remain unclaimed. It is a source prompt constraint, not a captured focus observation.

### Primary CTA

- Role: homepage primary CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#80c343`
- Text: `#222222`
- Radius: 800px
- Padding: 6px 24px
- Size: 113px x 40px
- Font: 18.912px / 600 / Noto Sans
- Use: Homepage `.agw-btn.agw-btn-primary` CTA; selector `home::[data-omd-capture=19]`
- Observed: default static baseline observed; no interactive state was captured
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. `#80c343` is this control’s fill and Primary, not a semantic success token. `#222222` is this control’s label and Foreground.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the homepage `.agw-btn.agw-btn-primary` CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A product-story CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Homepage `.agw-btn.agw-btn-primary` CTA and records selector `home::[data-omd-capture=19]`; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed from the implementation-guidance §14 rows.

### Tertiary CTA

- Role: homepage tertiary call to action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#40810c`
- Radius: 800px
- Padding: 6px 0px
- Size: 120px x 40px
- Font: 18.912px / 600 / Noto Sans
- Use: Homepage `.agw-btn.agw-btn-tertiary` CTA; selector `home::[data-omd-capture=31]`
- Observed: default static baseline observed; no interactive state was captured
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. `#40810c` is this control’s text and Brand Green, not Primary `#80c343`. Transparent fill is this control’s field, not Canvas.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the homepage `.agw-btn.agw-btn-tertiary` CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tertiary CTA can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Homepage `.agw-btn.agw-btn-tertiary` CTA and records selector `home::[data-omd-capture=31]`; exact label/destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed from the implementation-guidance §14 rows.

### Feature Card

- Role: laptop catalog feature-card container
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: surface
- Text: `#474747`
- Border: 4px 0px 0px
- Radius: 0px
- Size: 330px x 430px
- Font: 16px / 400 / Noto Sans
- Use: Laptop catalog `.card-feature` link card; selector `surface-2::[data-omd-capture=30]`
- Observed: default static baseline
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. `#474747` is this card’s copy field and Muted. The 4px top border is this card’s field, not a general elevation token.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted. “link card” in Use is not a closed seven-state contract.

### Locale Select

- Role: public laptop and corporate-surface locale select
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#474747`
- Text: `#f8f8f8`
- Border: 0px
- Radius: 24px
- Padding: 8px 40px 8px 16px
- Size: 312px x 38px
- Font: 16px / 400 / Noto Sans
- Use: Public laptop and corporate-surface locale select; selector `surface-2::[data-omd-capture=0]`
- Observed: default static baseline observed; no interactive state was captured
- Field note: The following unmerged-field reading, and the native-select instruction kept as a source prompt constraint rather than a captured focus observation, are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. `#474747` is this control’s background, not a second Muted-copy token. `#f8f8f8` is this control’s text and Subtle. Source §8: provide accessible native-select behavior without claiming captured focus styles.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public laptop and corporate-surface locale select |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A locale select can be unavailable; visual treatment omitted |
| loading | not-applicable | This control’s role is locale choice; page loading is not a state of the select |
| error | not-applicable | A locale select is not a validated form field; field-level error is not this control’s meaning |
| success | not-applicable | Choosing a locale is not a success confirmation on the select |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 6, sm 8, md 16, lg 24, xl 32. The supplied surfaces repeatedly expose 6px, 8px, 16px, 24px, and 32px values.

The following surface-distinction and measured-scale readings are a derived editorial implementation inference from the verified surfaces; they are not Acer-authored or a separately published UI specification. The home surface uses large editorial sections and broad full-width content. The laptop catalog pairs feature cards with a more bounded catalog rhythm. Preserve that surface distinction instead of applying the home page’s spacious composition to every product card. The spacing values are a measured working scale from those supplied surfaces, not a private product design-token system and not a body-general layout observation.

The 113px x 40px primary CTA, 120px x 40px tertiary CTA, 312px x 38px locale select, and 330px x 430px feature card are measurements from the supplied surfaces. The following measurement-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Those figures are supplied-surface measurements, not a universal layout token and not a target-size rule for unlisted controls.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Acer’s stated brand values in its corporate-responsibility material are **human, progressive, and curious**.

The following citation-character reading of those official samples is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Official English samples from that corporate narrative are preserved below as first-party language.

- “Breaking barriers between people and technology.” — official mission language.
- “We focus on achieving measurable change.” — Acer corporate president Victor Chien, Conscious Technology announcement.

The following Content application, including the product-voice instruction, the Do/Don't table, and the reading that corporate mission and Conscious Technology language can inform content tone but do not authorize a new component, color, font, or interaction rule, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Make technology feel capable and approachable; keep sustainability claims specific and attributable. Corporate mission and Conscious Technology language can inform content tone; they do not authorize a new component, color, font, or interaction rule.

| Do | Don't |
|---|---|
| Lead with the practical human benefit of the technology. | Present hardware capability as an end in itself. |
| Use clear, active language for progress and collaboration. | Make unmeasured environmental superlatives. |
| Name a material, target, or program when making a sustainability claim. | Turn a color or UI token into a sustainability claim. |

The following three lines are illustrative voice samples from the source, not official Acer copy. Treating them as illustrative rather than product microcopy, retaining the source sample-grounding notes, and not promoting additional synthetic samples, is a derived editorial implementation inference from the verified surfaces; it is not Acer-authored or a separately published UI specification. Source Components do not record harvested control-label strings.

- “Technology that helps you make more room for what matters.” *(Illustrative voice sample, not official Acer copy; grounded in the mission’s barrier-breaking intent.)*
- “Designed for today’s work, with consideration for tomorrow.” *(Illustrative voice sample, not official Acer copy; aligned to Conscious Technology.)*
- “Choose the product details that fit the way you create, learn, or play.” *(Illustrative voice sample, not official Acer copy; avoids unsupported performance claims.)*

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

- product-app semantic success, warning, error, hover, and theme tokens
- interactive state colors; captured focus styles
- hover, pressed, disabled, loading, error, success, empty, and skeleton visual treatments except the default static baselines above
- Primary CTA and Tertiary CTA loading, error, and success applicability (exact label/destination/request/outcome unresolved; capture selectors remain known)
- interactive kind and state-applicability map for the Feature Card
- `focus-visible` visual treatments
- a canonical shadow token; an additional general radius scale; a private product design-token system
- native-product typography; local-market substitutions; an Acer-owned text typeface
- declared-only `Noto Sans JP`, `Noto Sans TC`, and `Material Icons` as visible first-family uses
- first-party logo mark beyond catalog Google-favicon identity
- native application screens, downloaded brand guidelines, product interaction recordings, and a public official Acer design-system specification
- checkout or account behavior
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five kinds; official documentation of a single curve or duration is not that gate
