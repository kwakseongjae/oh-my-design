# Apple Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Apple’s current design language makes hardware, software, content, and controls feel like one continuous system. This contract covers three evidence domains only: `apple.com` marketing, Apple Store commerce/product UI, and the Human Interface Guidelines documentation website. HIG guidance may describe native-platform components, but the computed style of the HIG website is only evidence for its documentation chrome.

On the public web, a small neutral palette, SF Pro optical families, and conspicuous blue actions leave product photography and page composition to carry most of the drama. Across Apple platforms, the 2025 software redesign introduced Liquid Glass on iOS, iPadOS, macOS, watchOS, and tvOS as a shared material language: controls and navigation occupy a translucent functional layer above content and should not become a decorative glass effect spread across the content layer. Liquid Glass is native-platform material language. It is not a computed token from the apple.com or HIG-website captures.

The recognizable effect is not minimalism for its own sake: precise hierarchy, familiar behavior, platform harmony, and carefully limited ornament make complex capabilities feel immediately usable.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Scan apple.com marketing sections and use the verified large and compact marketing CTAs.
- Choose a product image on an Apple Store product page.
- Open a Human Interface Guidelines topic from the documentation index.
<!-- design-md:claim-end -->

### Audience

No demographic personas are promoted. The source names four official Human Interface Guidelines design contexts, not invented demographic biographies: a person pursuing a goal; a person protecting sensitive information; a person using a different device, input, language, or accessibility setting; and a person learning a new interaction. Those are HIG guidance contexts. They are not captured apple.com users and are not Experience primary tasks.

### Distinctive traits

- SF Pro Text: 600 visible uses on current Apple public pages; SF Pro Display: 31. Another 734 SF Pro Text uses on HIG documentation surfaces.
- Primary filled action `#0071e3`; text link `#0066cc`; dark-surface link `#2997ff`
- 44px large pill and 36px compact pill coexist on the current homepage
- HIG documentation cards use an 18px radius but are not native-platform component tokens

### Principles

These five items are a derived editorial implementation inference from the verified public surfaces; they are not Apple-authored or a separately published UI specification.

1. Let product content dominate while controls remain visually restrained.
2. Use one clear chromatic action accent per local composition.
3. Match typography optical role to size: Display for large hierarchy, Text for reading and controls.
4. Keep marketing, commerce, documentation, and native-platform evidence separate.
5. Prefer verified component-local measurements over a fictional universal Apple scale.

Capture-bound application:

- Use SF Pro Display for verified large display roles and SF Pro Text for body/control roles.
- Name Apple web variants by surface and size.
- Use `#0071e3` for filled actions and `#0066cc` for light-surface links/outline actions.
- Keep selected state explicit in gallery-style tabs.
- Label HIG website chrome separately from native-platform HIG guidance.

### Avoid

- Don't call the HIG website's 18px card a universal Apple platform card.
- Don't promote declared-only SF Mono or icon fonts as visible UI families.
- Don't treat `#0066cc` as a filled-button background.
- Don't collapse 36px and 44px marketing controls into one invented default.
- Don't infer hover, disabled, or focus visuals that were not retained by the capture.
- When building a native app, treat this web reference as inspiration and consult the relevant platform HIG instead of copying web geometry.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary Action** (`#0071e3`): current filled buttons across Apple-owned web surfaces.
- **Brand / Dark Canvas** (`#000000`): identity and immersive dark sections.
- **Fog Canvas** (`#f5f5f7`): light section and footer background.
- **Surface** (`#ffffff`): white content and HIG card surfaces.
- **Foreground** (`#1d1d1f`): principal text and selected commerce state.
- **Muted** (`#6e6e73`): secondary HIG documentation text.
- **Secondary** (`#515154`): another current HIG documentation neutral.
- **On Primary** (`#ffffff`): text on blue filled actions.
- **Link** (`#0066cc`): links and outline-button text/border on light surfaces.
- **Link on Dark** (`#2997ff`): brighter blue observed on dark Apple sections.

Do not infer a universal native-platform semantic palette from these web values. HIG platform colors are dynamic and context-dependent; this pass records public web evidence.

### Spacing

Exact spacing promoted here is component-local: 8px and 15px for compact action padding; 11px and 21px for the large pill; 20px as a recurrent content cluster. Avoid treating every sampled margin from Apple page composition as a universal system token.

### Shape

- Control: 8px
- HIG documentation card: 18px
- Marketing pill: 980px

8px control corners, 18px HIG cards, and 980px marketing pills are captured local geometry, not a universal radius scale.

### Elevation

No shadow token is canonical in this revision. Captured primary and outline buttons reported no shadow, and HIG reference cards were flat in computed style. Product imagery and color contrast create depth on the inspected surfaces.

### Motion

No exact Apple motion token is promoted from this web capture. Use relevant platform HIG guidance and reduced-motion support for native implementation. Do not promote a web motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration, including native HIG motion writing, is not that gate. Any exact web animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Apple status |
|---|---|
| Official product-use | SF Pro is the system family for Apple platforms; SF Compact serves watchOS; SF Mono serves coding environments such as Xcode |
| Live surface-use | SF Pro Text and SF Pro Display are loaded and visibly used across inspected Apple marketing, Store, and HIG web surfaces |
| Official distributed asset | Apple provides SF Pro, SF Compact, SF Mono, New York, script extensions, and design resources under Apple-specific licenses |
| Declared-only | SF Mono was declared on the inspected HIG website but not observed as visible page chrome |
| Unresolved mapping | A universal mapping from Apple web roles to every native platform context; platform APIs remain the authority |

### Family

- **Display:** `SF Pro Display`, loaded/high confidence, 31 visible uses across current Apple public pages.
- **Text:** `SF Pro Text`, loaded/high confidence, 600 visible uses across marketing and store surfaces; another 734 on HIG documentation surfaces.
- **SF Mono:** declared on the HIG site but not visibly used in this capture, so it is not promoted.

Do not replace unavailable or unobserved Apple type with a system or fallback stack, and do not present a fallback as SF Pro.

### Type roles

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|---|
| Display Hero | SF Pro Display | 56px | 600 | 60px | -0.28px |
| Section | SF Pro Display | 40px | 600 | 44px | normal |
| Tile Heading | SF Pro Display | 28px | 400 | 32px | 0.196px |
| Body | SF Pro Text | 17px | 400 | 25px | -0.374px |
| Body Small | SF Pro Text | 14px | 400 | 18.0008px | -0.224px |
| Caption | SF Pro Text | 12px | 400 | 16.0005px | -0.12px |

### Assets

Apple-distributed SF Pro, SF Compact, SF Mono, New York, script extensions, and design resources remain under Apple-specific licenses. This capture does not grant redistribution.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

| Component | Verified state evidence |
|---|---|
| Marketing buttons | default geometry captured; hover/pressed/disabled not retained |
| Product gallery tab | selected and unselected thumbnail states |
| HIG reference card | default documentation state only |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`; that applicability stays, and the visual treatment is omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

### apple.com Marketing Primary

- Role: large homepage marketing CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0071e3`
- Text: `#ffffff`
- Radius: 980px
- Padding: 11px 21px
- Height: 44px
- Font: 17px / 400 / SF Pro Text
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on apple.com marketing |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | A large homepage marketing CTA is a navigation action; the control itself does not enter a loading state |
| error | not-applicable | Marketing CTA meaning is the paired action, not a request or validation failure on the control |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on the control |

Additional observed state: pressed, named in the capture record as not retained. No pressed visual is promoted.

### apple.com Marketing Outline

- Role: secondary marketing CTA paired with a filled action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#0066cc`
- Border: 1px solid `#0066cc`
- Radius: 980px
- Padding: 11px 21px
- Height: 44px
- Font: 17px / 400 / SF Pro Text
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on apple.com marketing |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | An outline marketing CTA is a navigation action paired with a filled action; the control itself does not enter a loading state |
| error | not-applicable | Outline CTA meaning is the paired action, not a request or validation failure on the control |
| success | not-applicable | Following the outline CTA is not an action-outcome confirmation on the control |

Additional observed state: pressed, named in the capture record as not retained. No pressed visual is promoted.

### apple.com Marketing Compact

- Role: compact product-tile CTA on the current homepage
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#0071e3`
- Text: `#ffffff`
- Radius: 980px
- Padding: 8px 15px
- Height: 36px
- Font: 14px / 400 / SF Pro Text
- Observed: default captured; hover not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the current homepage tile |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | A compact product-tile CTA is a navigation action; the control itself does not enter a loading state |
| error | not-applicable | Compact CTA meaning is the tile action, not a request or validation failure on the control |
| success | not-applicable | Following the compact CTA is not an action-outcome confirmation on the control |

Additional observed state: pressed, named in the capture record as not retained. No pressed visual is promoted.

### Apple Store Product Gallery Tab

- Role: choosing a product image on an Apple Store product page
- Kind: interactive
- Anatomy: tab
- Text: `#1d1d1f`
- Height: 53px in the captured product thumbnail navigation
- Font: 17px / 400 / SF Pro Text
- Observed: selected and unselected thumbnails. `#1d1d1f` is principal text and the selected commerce state. Unselected visual treatment is not named.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected thumbnail recorded |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A gallery tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A product gallery tab selects an image; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed states: selected and unselected thumbnails, as in the capture record.

### HIG Documentation Reference Card

- Role: HIG component-index navigation
- Kind: interactive
- Anatomy: card
- Background: `#ffffff`
- Radius: 18px
- Observed: default documentation card; hover not retained
- Use: HIG component-index navigation only. Do not present this as a native iOS or macOS card token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default documentation state captured |
| hover | applicable | Pointer-web index navigation; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An index card can be unavailable; visual treatment omitted |
| loading | not-applicable | A documentation index card opens a topic; the card itself does not enter a loading state |
| error | not-applicable | Card meaning is topic navigation, not a request or validation failure on the card |
| success | not-applicable | Opening a HIG topic is not an action-outcome confirmation on the card |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Public marketing sections use full-width composition and centered content; store pages use denser product-detail layout. Exact spacing promoted here is component-local: 8px and 15px for compact action padding; 11px and 21px for the large pill; 20px as a recurrent content cluster. Avoid treating every sampled margin from Apple page composition as a universal system token.

The homepage and store surface are responsive, but this pass does not promote universal breakpoints. Preserve control geometry at the inspected desktop surface, then use platform-specific HIG guidance when targeting iOS, macOS, watchOS, tvOS, or visionOS rather than scaling web values mechanically.

The 44px large marketing CTA, 36px compact marketing CTA, and 53px product gallery tab are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Apple’s current design guidance treats language as part of simplicity and agency. Labels should be concise, recognizable, and directly tied to what happens next; feedback should keep people informed and in control. Product pages tend to make one capability the subject of a headline and use short actions, while platform guidance explains the rationale and constraints without promotional filler.

Clarity does not mean stripping away character. Apple’s current principles pair **Simplicity** with **Craft** and **Delight**: remove what is unnecessary, care about every detail, and create defining moments that support the task rather than interrupt it. Privacy, safety, permissions, and destructive actions require transparent language and recoverability, not euphemism.

These are source-bound voice principles, not a complete product-microcopy guide and not a license to invent campaign lines.

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

- hover, pressed, disabled, and focus visual treatments
- unselected Product Gallery Tab visual treatment
- universal breakpoints
- a native-platform semantic palette from these web values
- exact motion duration, easing, animation name, transition properties, and reduced-motion behavior until per-component computed observation of all five kinds exists
- SF Mono as a visible UI family
- the HIG website's 18px card as a native-platform card token
- a collapsed 36px/44px marketing-control default
- `#0066cc` as a filled-button background
