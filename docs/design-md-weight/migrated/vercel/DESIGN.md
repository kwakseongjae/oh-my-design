# Vercel Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Vercel is a developer platform for building, deploying, and operating web applications, with Next.js and AI-oriented application workflows central to its current public story. This contract covers two current first-party surfaces: the public home (`https://vercel.com/`) and official Geist introduction (`https://vercel.com/geist/introduction`). Official Geist documentation (`https://vercel.com/geist`) is the named design-system and type-family documentation. Geist font distribution (`https://vercel.com/font`) is a license surface, separate from the two captured UIs. Public home, Geist examples, and authenticated product UI remain distinct evidence domains.

The following visual-character reading is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. The interface turns infrastructure into a visual grid: white fields, near-black type, hairline `#ebebeb` boundaries, technical diagrams, code-adjacent labels, and large compressed headings. Product imagery and system diagrams carry complexity while the surrounding UI remains deliberately quiet, connecting developer precision with a clear editorial explanation of the platform's direction and scope. The current home is more typographically expansive than the prior snapshot: a 64px/400 hero and repeated 56px/450 section headings use strong negative tracking, while 30px feature statements and dense 14px UI layers connect editorial storytelling to developer tooling.

`GeistSans` is the loaded implementation alias on 428 visible elements; the official family is Geist. Geist Mono loaded across 65 elements and marks commands, technical labels, and code-adjacent content.

Official Geist documentation is Vercel's official design-system and type-family documentation; marketing, component examples, and authenticated dashboard evidence remain distinct. Its examples expose 6px ring-bordered controls, 36px compact actions and inputs, 32px radio controls, and flat 32px-padded example cards. These examples are valid Geist system evidence, but they do not automatically describe every authenticated Vercel dashboard state. This capture is a fresh public-home and official Geist introduction packet. Baseline-only mode avoided unsafe long-running interaction enumeration; current defaults are combined with explicit state absence rather than inferred hover values.

The following platform-narrative reading is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. Vercel evolved from ZEIT into a platform closely associated with Next.js and the frontend cloud, then expanded its story toward AI-native application development. Geist makes that evolution visible: a type and component system shaped for interfaces where code, deployment state, documentation, and product storytelling meet. The triangle symbol, monochrome structure, and tight typography keep the platform recognizable without relying on a broad color palette. The platform narrative consistently moves complexity behind a clearer developer workflow: source becomes a deployment, a deployment becomes an inspectable environment, and a team can iterate on the result. Current AI messaging extends that same premise to models and generated application experiences rather than replacing the foundation. Hairline grids, technical diagrams, and mono labels make infrastructure legible; large Geist headings make the product direction legible to a broader audience.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Evaluate how to build and deploy an application.
- Compare platform, framework, AI, or enterprise capabilities.
- Consult the official Geist system.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names first-party task contexts only, without project-specific names, company size, stack, deployment volume, budget, or success metrics. Use those stakeholder groups only: a developer evaluating how to build and deploy an application; a team comparing platform, framework, AI, or enterprise capabilities; a designer or engineer consulting the official Geist system. Independently verified user outcomes are the three primary tasks above. Those unspecified project-brief fields stay unnamed.

### Distinctive traits

The following trait readings (information steps, elevation-versus-hairline, strict evidence-domain boundary) are a derived editorial implementation inference from the verified surfaces; they are not Vercel-authored or a separately published UI specification.

- White canvas with `#171717`, `#4d4d4d`, and `#666666` information steps
- Geist with strongly negative tracking at 64px, 56px, 30px, and 24px scales
- Geist Mono as a genuine loaded technical companion
- `#ebebeb` hairlines and ring-borders instead of decorative elevation
- Flat grid compositions and 6px compact official controls
- Strict boundary between public home, Geist examples, and authenticated product UI

### Principles

These four items and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Vercel-authored or a separately published UI specification.

1. **Remove infrastructure noise.** Visual structure should clarify the application and its state.
2. **Make technical content native.** Type, grids, and mono roles should serve real information.
3. **Use precise defaults.** Small control geometry and neutral boundaries should be consistent.
4. **Keep evidence layers explicit.** Geist examples are reusable system evidence; marketing and private dashboard UI remain separate, and one must not silently fill gaps in another.

Capture-bound application:

- Use the exact current neutral hierarchy and `#ebebeb` grid logic.
- Preserve Geist's observed negative tracking and moderate weights.
- Use official Geist examples for reusable controls while naming their documentation context.
- Keep public, documentation, and authenticated evidence separate.
- Use Geist Mono where content is genuinely technical, not as decorative developer flavor.

### Avoid

The following Don'ts include source-stated prohibitions and retained capture-bound doctrine. Those judgements are a derived editorial implementation inference from the verified surfaces; they are not Vercel-authored or a separately published UI specification.

- Do not reintroduce workflow accents or badge colors from an older snapshot without current evidence.
- Do not make every developer label monospace.
- Do not invent dashboard, deployment, login, or command-menu states.
- Do not apply layered elevation where a hairline grid is the verified structure.
- Do not treat Geist examples as authenticated dashboard tokens.
- Do not present `GeistSans` as a third family beside Geist.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Primary / Foreground** (`#171717`): current headings, controls, and technical content. Catalog `primary_color` is this same value; it is not a separate accent.
- **Canvas** (`#ffffff`): dominant page and control surface.
- **Body** (`#4d4d4d`): current explanatory and navigation text. Header-link and radio foregrounds reuse this captured field; they are not a separate ink token.
- **Muted** (`#666666`): supporting public copy.
- **Border** (`#ebebeb`): highly repeated grid, ring, and boundary color.
- **Subtle surface** (`#fafafa`): quiet current section/background tint.

Earlier Ship red, Preview pink, Develop blue, console syntax colors, link blue, and badge blue are omitted because this capture did not establish reusable current roles for them. Their historical or local presence does not authorize global tokens.

### Spacing

YAML `spacing` is xs 4, sm 8, md 12, lg 24, xl 32. Home evidence established xs / sm / md; Geist evidence established lg / xl. These are captured clusters, not a claim that every page follows a strict mathematical scale.

### Shape

- Compact: 4
- Control: 6
- Full: 9999

YAML `rounded` compact / control / full. 4–6 radius on compact official controls and `9999px` radio geometry are local defaults, not a universal radius scale.

### Elevation

The following elevation reading is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. The current promoted system is primarily planar. `0 0 0 1px #ebebeb` creates a ring-boundary without changing box geometry. Secondary-action and icon-button borders use that same ring as the control’s renderable field; the example card participates in the shared `#ebebeb` documentation grid rather than carrying an independent floating shadow. Earlier multi-layer card shadows are not retained as universal current tokens.

### Motion

No reusable duration or easing curve is promoted. Baseline DOM capture cannot establish a universal motion system, and the current reference does not infer one. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Vercel's current home and official Geist documentation establish Geist and Geist Mono. |
| Live surface-use | `GeistSans` loaded/high with 428 uses; Geist Mono loaded/high with 65 uses. The docs' computed `Geist` alias had no separately matched FontFace, so it is reconciled through official family documentation rather than treated as a third font. |
| Official distributed asset | Geist and Geist Mono are officially distributed by Vercel under OFL at `https://vercel.com/font`. |
| Declared-only | Geist Pixel Circle/Grid/Line/Square/Triangle and GeistSans Fallback were declared with zero visible use. |
| Unresolved claim | Authenticated dashboard-only overrides and product-specific font loading remain unresolved. This is a captured but uncorroborated unresolved claim, not a promoted family. |

### Family

- **Official family:** Geist and Geist Mono
- **Loaded implementation alias:** `GeistSans` on the captured public home (428 visible uses)
- **Technical companion:** Geist Mono (65 loaded uses)
- Do not present `GeistSans` as a third family. Do not replace Geist with a system fallback. Do not treat declared Geist Pixel faces or GeistSans Fallback as visible UI families.

### Type roles

Verified line-height values are the unitless YAML ratios `1`, `1.1`, `1.33`, `1.5`, and `1.43`. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes. Those px figures are size-local observations, not replacements for the ratios. Feature 33px is 30 × 1.1. Card-title 32px is a rounding of 24 × 1.33 = 31.92. UI/list and technical-label 20px are a rounding of 14 × 1.43 = 20.02.

| Role | Family | Size | Weight | Line height | Size-local observation | Tracking | Use |
|---|---|---:|---:|---:|---|---|---|
| Public hero | Geist | 64px | 400 | 1 | 64px | -3.84px | Current public hero |
| Public section | Geist | 56px | 450 | 1 | 56px | -3.36px | Repeated current public section heading |
| Feature statement | Geist | 30px | 400 | 1.1 | 33px | -1.5px | Current public feature statement |
| Technical card title | Geist | 24px | 600 | 1.33 | 32px | -0.96px | Current public technical card title |
| Body | Geist | 16px | 400 | 1.5 | 24px | normal | Current public and Geist explanatory body |
| UI/list | Geist | 14px | 400 | 1.43 | 20px | normal | Current navigation, lists, and compact controls |
| Technical label | Geist Mono | 14px | 400 | 1.43 | 20px | normal | Current technical labels and code-adjacent content |

YAML `mono.weight` is 400. The legacy body table records technical-label weight as 400–600. That range is a size-local observation on technical labels, not a replacement for the YAML 400 role.

### Assets

No first-party mark file is attached here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The official Geist radio exposed an unchecked state, and one compact icon action exposed disabled in the baseline. The canonical controls otherwise retain explicit default-only state boundaries. Hover, focus, pressed, loading, success, error, deployment, and authenticated dashboard states are absent unless separately recaptured.

Login CTAs, dashboard project cards, deployment states, command menus, badges, toasts, and authenticated inputs are omitted until a current accessible product path verifies their exact implementation.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`; that applicability stays, and the visual treatment is omitted. A generic `focus` mention is not `focus-visible` treatment evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind or a generic specimen name. Where exact action identity is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

The Geist component-example card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Header link

- Role: current public header navigation link
- Kind: interactive
- Type: button
- Anatomy: label
- Background: transparent
- Text: `#4d4d4d`
- Radius: 0px
- Height: 32px
- Font: 14px / 400 / Geist
- Use: Current public header navigation link
- Observed: default captured; current baseline run did not promote hover or pressed values
- Field note: `#4d4d4d` is this control’s renderable foreground and the Body color; it is not a separate general Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the current public home as the header navigation link |
| hover | applicable | Pointer-web header link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header navigation link can be unavailable; visual treatment omitted |
| loading | not-applicable | A public header link navigates; the control itself does not enter a loading state |
| error | not-applicable | Following a header link is not a validation or request-failure state of this link |
| success | not-applicable | Destination arrival is not a success confirmation on this link |

### Geist secondary action

- Role: official Geist secondary action example
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#171717`
- Border: `0 0 0 1px #ebebeb`
- Radius: 6px
- Padding: `0 10px`
- Height: 36px
- Font: 14px / 500 / Geist
- Use: Official Geist secondary action example
- Observed: default official Geist example captured
- Field note: `#171717` is this control’s renderable foreground and Primary / Foreground; the ring is this control’s renderable border, not a general elevation for every surface.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the official Geist secondary action example |
| hover | applicable | Pointer-web secondary action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as an official Geist secondary action example; no request evidence is captured, so those three fields stay unresolved at this boundary rather than closed from the specimen or primitive name.

### Geist icon button

- Role: official Geist compact icon-button example
- Kind: interactive
- Type: button
- Anatomy: icon
- Background: `#ffffff`
- Text: `#171717`
- Border: `0 0 0 1px #ebebeb`
- Radius: 6px
- Size: 36px
- Use: Official Geist compact icon-button example
- Observed: default official Geist example captured; one compact icon action exposed disabled in the baseline. Disabled visual values are not named.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the official Geist compact icon-button example |
| hover | applicable | Pointer-web icon-button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact icon action can be unavailable; disabled was exposed in the baseline; visual values omitted |

Loading, error, and success applicability are omitted. Source names this control only as an official Geist compact icon-button example; exact action identity is unresolved, so those three fields stay omitted at this boundary rather than closed from a specimen-chrome reading.

### Geist compact input

- Role: official Geist compact input example
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: `#ffffff`
- Text: `#171717`
- Border: adjacent control ring `#ebebeb`
- Radius: 0px
- Padding: `0 12px`
- Height: 36px
- Font: 14px / 400 / Geist
- Use: Official Geist compact input example
- Observed: default official Geist example captured as the rectangular input region beside a ring-bordered control; no separate universal focus value promoted
- Field note: the adjacent `#ebebeb` ring is this input’s renderable boundary, not a general Ink or a universal focus token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the official Geist compact input example |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact input can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as an official Geist compact input example; no validation-role evidence is captured, so those three fields stay unresolved at this boundary rather than closed from the input primitive.

### Geist radio

- Role: official Geist radio example
- Kind: interactive
- Type: toggle
- Anatomy: radio
- Background: transparent
- Text: `#4d4d4d`
- Radius: 9999px
- Size: 32px
- Use: Official Geist radio example
- Observed: unchecked observed
- Field note: `#4d4d4d` is this control’s renderable foreground and the Body color.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the official Geist radio example |
| hover | applicable | Pointer-web radio; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A radio option can be unavailable; visual treatment omitted |
| loading | not-applicable | A radio selects an option; the radio itself does not enter a loading state |
| error | not-applicable | Checked versus unchecked is the radio meaning, not a request or validation failure on the control |
| success | not-applicable | Checked is the selected state, not a success confirmation on the radio |

Additional observed named state: unchecked.

### Geist component-example card

- Role: official Geist component-example card
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Text: `#171717`
- Border: shared `#ebebeb` grid boundary
- Radius: 0px
- Padding: 32px
- Gap: 24px
- Use: Official Geist component-example card
- Field note: The following grid-versus-shadow reading is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. The card participates in the shared `#ebebeb` documentation grid rather than carrying an independent floating shadow.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following layout application is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. Use hairline grids to organize technical complexity without heavy containers. Let large compressed headings alternate with diagrams, code, and product imagery. Keep compact system controls at 32–36px and 4–6px radius. Separate marketing compositions from reusable Geist examples and authenticated product patterns.

The following responsive reading is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. The current public site reflows large headings, technical diagrams, and grid sections while maintaining the neutral hierarchy. Official Geist examples remain compact and composable. Authenticated dashboard breakpoints, mobile project navigation, and deployment-log overflow remain unresolved.

The 32px header link, 36px compact Geist actions and inputs, 32px radio, and 32px-padded example cards are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following product-copy direction is a derived editorial implementation inference from the verified surfaces; it is not Vercel-authored or a separately published UI specification. Vercel's public language is technical, direct, and outcome-oriented. It connects platform capability to building, shipping, scaling, and AI application work without explaining every infrastructure detail up front. Product and documentation copy should name the artifact or system involved—application, deployment, framework, model, environment, or team—and connect it to an observable next action. Enterprise material can discuss coordination and reliability but should remain concrete. Prefer active verbs, precise platform nouns, and short supporting explanations. Avoid invented performance numbers or universal claims not present in current first-party material.

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

- authenticated dashboard, deployment, login, command-menu, badge, toast, and authenticated-input visual treatments
- hover, pressed, focus, loading, success, and error visual treatments except the radio unchecked observation and the compact icon-button disabled exposure
- `focus-visible` visual treatments
- Ship red, Preview pink, Develop blue, console syntax, link blue, and badge blue as current roles
- earlier multi-layer card shadows as universal tokens
- authenticated dashboard breakpoints, mobile project navigation, and deployment-log overflow
- Geist Pixel Circle/Grid/Line/Square/Triangle and GeistSans Fallback as visible UI families
- authenticated dashboard-only font overrides (Unresolved claim; captured but uncorroborated)
- loading, error, and success applicability for Geist secondary action, compact icon-button, and compact input (exact action/validation identity unresolved)
- a first-party mark file
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; a single named duration is not that gate
- project-specific persona names, company size, stack, deployment volume, budget, and success metrics
- a complete product-copy guide beyond the public-language direction above
