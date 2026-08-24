# Figma Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Figma is a collaborative design platform whose public product story now spans interface design, prototyping, FigJam, developer handoff, and AI-assisted creation. This contract covers three current first-party public surfaces only: the Korean product-marketing homepage (`https://www.figma.com/ko-kr/`), the public Design product page (`https://www.figma.com/ko-kr/design/`), and the official brand page (`https://www.figma.com/using-the-figma-brand`). Catalog homepage identity is `https://www.figma.com`.

The following colorful-output / workspace-frame reading is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Public pages deliberately let colorful creative output carry the spectacle while the surrounding interaction chrome stays highly legible: white canvas, black type and actions, occasional indigo emphasis, precise custom type, and a small geometry vocabulary that separates 8px controls from 50px segmented pills and circular tool-like actions. That restraint makes the page feel like a workspace framing other people's work rather than a brand campaign competing with it.

The following type-character reading is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. The custom `figmaSans` variable family provides unusually fine weight control—values such as 330 and 480 appear in live controls—and `figmaMono` marks technical signposts with positive tracking.

The following evidence-domain sentences are a derived editorial implementation inference from the verified surfaces; they are not Figma-authored or a separately published UI specification. Official brand guidance governs trademark and logo use separately from these UI measurements. This reference applies those measurements only to the inspected public Figma pages. It does not claim that authenticated editor chrome, desktop clients, FigJam canvases, or generated product content share every marketing value.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Create and prototype an interface with collaborators.
- Inspect design intent and prepare implementation.
- Review, comment, or present shared work.
<!-- design-md:claim-end -->

### Audience

Public product material establishes task contexts only, without names, ages, team sizes, subscription tiers, or productivity goals. Restricting Audience so invented demographic personas are not promoted, absorbing the three contexts as primary tasks rather than named individuals, tying observable work only to that public material — a product designer creating and prototyping with collaborators; a developer inspecting design intent and preparing implementation; a cross-functional teammate reviewing, commenting, or presenting shared work — and restricting those groups so they do not authorize authenticated editor, desktop-client, or FigJam tokens, is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

### Distinctive traits

- White canvas and black interaction chrome with a verified indigo alternate action
- `figmaSans` for public UI and `figmaMono` for technical labels
- Fine variable-font weights rather than only regular/bold (330 and 480 in live controls)
- 8px standard actions, 16px large hero controls, 50px segmented tabs, circular icon actions

Reading the dashed blue focus treatment as echoing selection tooling is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

- Dashed blue focus treatment that visually echoes selection tooling

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Figma-authored or a separately published UI specification.

1. **Make collaboration visible.** Product stories should show shared work and handoff, not solitary decoration.
2. **Frame creative output neutrally.** Black and white chrome lets user work carry color.
3. **Precision creates hierarchy.** Fine type weights, tracking, and component geometry matter.
4. **Evidence stays surface-local.** Marketing, editor, desktop, and brand assets do not silently overwrite one another; reuse only the role a source actually verifies.

Capture-bound application:

The following capture-bound application is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

- Use black/white public chrome and preserve the observed control geometry.
- Keep `figmaMono` for structural signposts rather than paragraphs.
- Treat official brand rules and public UI measurements as separate evidence domains.
- Keep colorful work inside content frames; omit unverified editor chrome.
- Use the 50px radius only for the captured product-area segmented control, not for every rounded action.

### Avoid

The following Avoid items include source-stated prohibitions and retained capture-bound doctrine. Those judgements are a derived editorial implementation inference from the verified surfaces; they are not Figma-authored or a separately published UI specification.

- Do not make purple or a screenshot color the universal UI primary.
- Do not call every rounded control a 50px pill.
- Do not claim editor inputs, panels, or states from marketing-page resemblance.
- Do not present `figmaSans` measurements from these public pages as authenticated editor, desktop-client, or FigJam tokens.
- Do not replace `figmaSans` or `figmaMono` with SF Pro, system, or mono fallbacks as identity fonts.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary chrome** (`#000000`): text and default filled public actions.
- **Canvas / inverse** (`#ffffff`): page canvas and text on black actions.
- **Border** (`#ebebeb`): resolved light separation on white.
- **Indigo action** (`#4d49fc`): captured alternate prominent action.
- **Focus** (`#0d99ff`): dashed action focus outline color. This is a generic `focus` color role, not a `focus-visible` treatment.
- **On primary** (`#ffffff`): text on filled black or indigo actions. Same hex as Canvas; it is the filled-action content color, not a second canvas token.

The following indigo-role and content-token readings are a derived editorial implementation inference from the verified surfaces; they are not Figma-authored or a separately published UI specification. The indigo-action hex is not the universal brand primary. Colors inside screenshots, templates, gradients, and user-created artifacts are content evidence, not reusable interface tokens. The earlier purple, pink, lime, cyan, green, lavender, and sage set is therefore omitted from the machine palette. `#4d49fc` stays the indigo-action role. Do not substitute it for Primary chrome `#000000`.

Outline-action fill is `transparent` on the control, not Canvas.

### Spacing

Repeated captured values: 4, 8, 12, 24, and 32. Treating this as a compact working scale from the public pages, not proof of authenticated editor spacing, is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

### Shape

- Control: 8px
- Hero: 16px
- Segment: 50px
- Full / circle: 9999px

Treating 8px standard actions, 16px large hero controls, 50px segmented tabs, and circular icon actions as local captured geometry, not a universal radius scale, and not calling every rounded control a 50px pill, is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

### Elevation

The following elevation-purpose reading is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Most public chrome is flat. A measured panel shadow (`0 24px 70px rgba(0,0,0,0.1)`) may separate large showcased content; it is not a default card shadow.

### Motion

No reusable current duration or easing token is promoted. Public transitions do not establish editor motion behavior. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Figma-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Current first-party public Figma pages establish `figmaSans` and `figmaMono` roles. |
| Live surface-use | May live proof captured both families and their computed roles. |
| Official distributed asset | The webfont files are product assets and are not assumed redistributable. |
| Declared-only | SF Pro, system, and mono fallbacks do not become Figma identity fonts. |
| Unresolved claim | Authenticated editor, desktop-client, and platform-specific overrides remain unresolved. This is captured-as-unresolved evidence, not outside this capture. |

### Family

- **Current visible UI family:** `figmaSans`
- **Technical signpost family:** `figmaMono`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Do not present SF Pro, system, or mono fallbacks as the Figma identity fonts. Do not replace an unavailable `figmaSans` face with a substitute stack.

### Type roles

These are evidence-backed public-page roles. Verified line-height values are the unitless YAML ratios 1, 1.1, 1.42, and 1.3. They scale with font size and are not fixed px. The legacy body table wrote 1.00, 1.10, and 1.30 for the same three ratios; those trailing zeros are notation, not a different token.

| Role | Family | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Hero | figmaSans | 86px | 400 | 1 | -1.72px | Public product-marketing hero |
| Section | figmaSans | 64px | 400 | 1.1 | -0.96px | Public feature section heading |
| Body/action | figmaSans | 16px | 330–400 | 1.42 | -0.14px | Public body, navigation, and action copy |
| Technical label | figmaMono | 18px | 400 | 1.3 | 0.54px | Uppercase technical signpost |

Body/action weight 330–400 is the observed public range (get-started 330, outline 400). Indigo action copy uses 18px / 480 on the control and is not this body row.

### Assets

The official brand page at `https://www.figma.com/using-the-figma-brand` is trademark, logo, and brand-use guidance. Treating that page as a separate evidence domain from the public-page measurements, treating catalog logo metadata as Simple Icons identity (`slug: figma`), not a captured first-party mark, and not promoting it as a Figma mark file, and treating webfont files as product assets not assumed redistributable, is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

Action focus and product-segment active/inactive variants are verified. Hover, loading, empty, error, success, editor selection, and AI-generation states remain absent from the canonical machine set.

The following omitted-rather-than-synthesized reading is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Inputs, community cards, editor panels, toast states, and template colors are absent from canonical components because current evidence does not establish them at the same boundary.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`. A generic `focus` capture is not that treatment evidence, so the visual treatment for it remains unresolved.

The primary action’s additional observed `focus` state is `2px dashed #0d99ff`. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind. Product segment keeps that identified-role map. Where exact selector/label/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed as destination, conversion, or media-navigation. This is not a complete state-coverage claim.

### Primary action

- Role: default public get-started action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Padding: `12px 21px`
- Height: 49px
- Font: 16px / 330 / figmaSans
- Use: default public get-started action
- Observed: default captured. Generic `focus`: `2px dashed #0d99ff`. No hover token promoted.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public get-started action |
| hover | applicable | Pointer-web get-started action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A get-started action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control only as a default public get-started action; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as destination/session start.

Additional observed named state: generic `focus` (`2px dashed #0d99ff`). This is not `focus-visible` color evidence.

### Indigo action

- Role: alternate prominent public hero action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#4d49fc`
- Text: `#ffffff`
- Radius: 8px
- Padding: `12px 20px`
- Height: 49px
- Font: 18px / 480 / figmaSans
- Use: alternate prominent public hero action
- Observed: default captured; no hover token promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the alternate prominent public hero action |
| hover | applicable | Pointer-web hero action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A prominent public hero action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control only as an alternate prominent public hero action; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as destination control.

### Outline action

- Role: current sales-contact and secondary action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#000000`
- Radius: 8px
- Padding: `12px 21px`
- Height: 49px
- Font: 16px / 400 / figmaSans
- Use: current sales-contact and secondary paths
- Observed: default captured; no hover token promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the current sales-contact and secondary action |
| hover | applicable | Pointer-web sales-contact and secondary action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A sales-contact and secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control only as a current sales-contact and secondary action; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as sales conversion.

`transparent` is this control’s renderable background field. It is not Canvas `#ffffff`.

### Product segment

- Role: product-area segmented navigation
- Kind: interactive
- Type: tab
- Anatomy: segmented control
- Background: `rgba(0,0,0,0.08)` when active; inactive white variants captured
- Text: `#000000`
- Radius: 50px
- Padding: `8px 18px 10px`
- Height: 43px
- Font: 18px / 480 / figmaSans
- Use: product-area segmented navigation
- Observed: active and inactive variants captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive white variant captured |
| hover | applicable | Pointer-web segmented tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A product-area tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A product-area segmented control selects an area; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is active versus inactive, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed states: active `rgba(0,0,0,0.08)` and inactive white. `rgba(0,0,0,0.08)` is this control’s active field, not a general overlay token.

### Round icon action

- Role: circular carousel/navigation action on public design pages
- Kind: interactive
- Type: button
- Anatomy: icon
- Background: `#000000`
- Text: `#ffffff`
- Radius: 9999px
- Size: 40px
- Use: circular carousel/navigation action on public design pages
- Observed: default captured; light and dark surface variants remain local

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the 40×40 black circle with white icon on the design surface |
| hover | applicable | Pointer-web carousel/navigation action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A carousel/navigation action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source records this control only as a circular carousel/navigation action on public design pages; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as current-page media movement.

Treating light and dark translucent round-icon variants as surface-local rather than one universal token is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Additional observed named variants: light and dark translucent treatments remain surface-local rather than one universal token.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout application is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Use wide editorial sections as neutral frames for colorful product output. Keep navigation and conversion geometry compact; reserve large pills for segmented product switching. Let type scale and whitespace establish hierarchy before adding containers. Never copy content colors from screenshots into the surrounding UI palette.

Public page layouts reduce section scale and rearrange product media while retaining the black/white interaction system. Exact authenticated editor breakpoints and desktop-client behavior remain unresolved.

Observed public-page heights: 49px public actions, 43px product segment, and 40px round icon.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following product-copy direction is a derived editorial implementation inference from the verified surfaces; it is not Figma-authored or a separately published UI specification. Figma's public voice is collaborative, action-oriented, and maker-literate. Explain what teams can create together in plain product language. Product guidance should distinguish creating, prototyping, presenting, reviewing, and handing work to development so that each action remains legible. Brand guidance can be protective and precise without sounding legalistic in ordinary UI. Error and permission copy should identify the blocked action and available recovery without blaming collaborators. Prefer concrete verbs such as design, prototype, build, share, and iterate; avoid claiming creative outcomes or speed improvements without evidence. Not promoting synthetic voice samples is the same derived reading.

The inspected public pages were the Korean (`ko-kr`) product-marketing routes. That is the capture locale of those URLs.

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

- authenticated editor chrome, desktop-client, FigJam canvas, and generated-product-content tokens
- hover visual treatments (indigo and outline record default only; no hover token promoted)
- loading, empty, error, success, editor-selection, and AI-generation visual treatments
- loading, error, and success applicability for Primary action, Indigo action, Outline action, and Round icon action (omitted at this boundary; exact selector/label/request/outcome unresolved)
- inputs, community cards, editor panels, toast states, and template colors as canonical components
- exact authenticated editor breakpoints and desktop-client layout
- redistributable webfont grant
- SF Pro, system, or mono fallbacks as identity fonts
- purple, pink, lime, cyan, green, lavender, and sage as reusable UI colors
- panel shadow as a default card elevation
- `focus-visible` visual treatments remain unnamed
- generic `focus` on the primary action (`2px dashed #0d99ff`), which is a different observation
- exact motion duration, easing, animation name, transition properties, and reduced-motion behavior until per-component computed observation of all five kinds exists; public transitions are not editor motion
- light/dark translucent round-icon variants as one universal token
- project-specific names, ages, team sizes, subscription tiers, and productivity goals
