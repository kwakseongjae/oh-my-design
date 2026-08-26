# flex Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

flex is a Korean company building an HR-data-based AI platform for organizations. The company name is the lowercase `flex`, and its site is `flex.team`; the capitalized `Flex` appears below in modifier position, which is how the reviewed material writes it. Its public product language spans people and organization management, performance, payroll and benefits, and operational workflows.

This contract covers two current first-party public surfaces, both inspected 2026-07-13: the marketing home surface `https://flex.team/` and the corporate/marketing About surface `https://flex.team/about`. The color, type, layout, and component values below stay attached to those two pages. The separate Help Center at `https://guide.flex.team/en/` is not treated as product UI evidence, and no value here describes a logged-in Flex application surface.

The 2026 public site leads with **Relations Driven AX** — the claim that AI becomes useful when it understands the relationships and context inside an organization. The About page sets the brand's **Human Relations** reinterpretation of HR in 80–96px type and alternates dark and light narrative sections. The current expression is not the earlier "one ink / graphite card" system that an older record of this brand described.

The characterization of that interface which follows is a derived editorial implementation inference from the verified surfaces; it is not Flex-authored or a separately published UI specification. The captured layer reads as a black-and-white information field punctuated by an acid-lime conversion action, turning the Relations Driven AX idea into a high-contrast, editorial marketing system. Black or white fields establish the serious enterprise register, while `#00ff44` appears as a deliberately loud action color rather than a general-purpose semantic palette. The About surface makes the same thesis concrete through very large editorial type and stark light/dark transitions.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- Follow the lime marketing conversion link, recorded on both the home and About surfaces.
- Take one of the two global-navigation conversion actions on the About surface — the solid primary and the outline secondary.
- Open the announcement strip link that begins both captured public surfaces.
- Move through the global navigation menu controls on the About surface.
- Read the About-page relationship statement and the company narrative on that page.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted, and none exists in the reviewed material to promote. Flex's official copy names organizations, members, leaders, and teams as the stakeholders of its platform, and describes HR teams dealing with attendance, evaluation, compensation, compliance, and data-informed decisions. Those official stakeholder groups are what is carried here; no named fictional persona, demographic, or audience claim is asserted.

Three groups are recorded, and the need statement attached to each is a derived editorial reading of Flex's official copy rather than a Flex-published audience definition; it is not Flex-authored or a separately published audience specification:

- **Organization and HR operators:** need connected organizational and employee data to handle HR operations and compliance.
- **Leaders:** use organizational context and goal/health signals to make decisions.
- **Employees:** receive access and AI assistance bounded by their role and organizational relationship.

### Distinctive traits

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not Flex-authored or a separately published UI specification. The measured parts inside them are the color values, the radii, and the type sizes and weights, each recorded in its own section below.

- **Relationship data as the visual argument.** Large, plain-spoken statements carry the thesis before any UI treatment; application screenshots serve the story rather than becoming generic SaaS decoration.
- **Hard contrast, selective lime.** `#111111`/white carry most chrome and text, while `#00ff44` is reserved for primary conversion links.
- **Editorial scale plus dense enterprise copy.** About-page statements reach 96px, then resolve into 17px/600 explanatory copy and 15px supporting copy.
- **Rounded actions rather than rounded everything.** Global nav actions use 8px corners; campaign CTAs use 24px pills. No universal card-radius rule is asserted.

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Flex-authored or a separately published UI specification. Item 1 in particular reads a product stance off the marketing copy: it asserts nothing about how Flex actually bounds data access or operates its platform.

1. **Context before capability.** Explain what the organization knows and how access is bounded before claiming AI benefit.
2. **Contrast carries authority.** Build the public hierarchy with black, white, and measured opacity; reserve lime for the decisive conversion point.
3. **Use lime as an action, not a status system.** `#00ff44` is evidenced on marketing CTA links, not as a universal product semantic token.
4. **Let scale establish the thesis.** Keep editorial statements distinct from supporting explanation; the recorded 80–96px About styles are a surface-specific example.
5. **Keep source domains separate.** Marketing/corporate pages, Help Center chrome, and unverified app surfaces must not be mixed into one inferred product design system.

### Capture-bound application

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Flex-authored or a separately published UI specification.

- Use `#111111` and `#ffffff` as the dominant public-surface contrast pair.
- Reserve `#00ff44` for the large, high-emphasis conversion action observed on the current public pages.
- Use the 8px navigation action and 24px campaign CTA radii only in their observed contexts.
- Treat 80–96px editorial type as a current About-page treatment, not proof of a product-app display scale.
- Keep help-center chrome and any unobserved logged-in application UI out of this public-surface contract.

### Avoid

These 5 boundary rules are read off the captured surfaces and are a derived editorial implementation inference from them; they are not Flex-authored or a separately published UI specification. The evidence-class facts they rest on — the loaded family, the declared fallbacks, the absence of an interaction record — are stated as facts in their own sections.

- Do not reintroduce the graphite manifesto cards, service-filter pills, or inset-ring variants that an older record of this brand described; the 2026-07-13 public capture does not support them as current Flex components.
- Do not treat the orange announcement badge as a general error or warning semantic color.
- Do not render static `Pretendard` or a system fallback as though it were the verified `Pretendard Variable` family.
- Do not invent hover, disabled, form, dialog, or loading variants from the static collector output.
- Do not turn relationship-data positioning into generic AI copy that omits access, role, and organizational context.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Black field** (`#000000`): the black public-surface field, and the announcement badge's text color. It is also the primary color entry for this contract.
- **Ink** (`#111111`): light-surface navigation text, the solid navigation action background, and the text color on the lime conversion action.
- **Canvas / On-dark** (`#ffffff`): light canvas, on-dark text, and the outline navigation action background. Canvas and on-dark are recorded as two roles that share one value; they are kept separate rather than merged.
- **Action lime** (`#00ff44`): the primary marketing conversion action on home and About.
- **Announcement orange** (`#ff4d00`): the compact `new` badge in the announcement strip.
- **Dark-on-light emphasis** (`rgba(17,17,17,0.84)`): measured long-form emphasis copy.
- **On-dark supporting copy** (`rgba(255,255,255,0.84)`) and **on-dark label** (`rgba(255,255,255,0.48)`): measured supporting and label tones on the dark fields.

The lime and the orange are observed marketing accents with separate purposes; neither is promoted as a product-app status color.

Three text/background pairings are recorded: `#111111` on `#ffffff` and `#ffffff` on `#111111` in the captured light and dark chrome, and `#111111` text over `#00ff44` on the lime conversion action, which is the pairing to retain when reproducing that action. The reviewed material grades the first two as high-contrast; that grading is a derived editorial reading of the verified surfaces rather than a measured contrast ratio, and it is not Flex-authored or a separately published accessibility specification. The pairings themselves are measured.

### Evidence-domain boundary

The measured surfaces are the marketing home page and the corporate/marketing About page at `flex.team`, both inspected 2026-07-13. Every color, type, spacing, radius, and component value in this contract stays attached to those two pages.

Flex-published positioning language — Relations Driven AX, the Human Relations reframing of HR, and the trial-or-inquiry conversion labels — is published copy, recorded as copy. No color, spacing, radius, type, or component value here describes a Flex product feature, an HR workflow, a data-access boundary, or a contractual term, and none may be read as evidence about one. Recording that a line appears on a public page is a record of the line, not a finding that the claim inside it holds.

`guide.flex.team` was inspected only far enough to classify it as a separate Help Center domain; it contributes no color, typography, or component value here. Public marketing/corporate pages, documentation chrome, and any logged-in application surface remain separate evidence domains.

### Spacing

Recorded values, each attached to the element it was measured on:

| Token | Value | Where |
|---|---:|---|
| `compact` | 8px | Global navigation menu control internal padding. The two conversion actions' `8px 14px` padding carries the same 8px vertically. |
| `nav-action-x` | 14px | Horizontal padding of the two `/about` global navigation conversion actions |
| `cta-y` | 30px | Vertical padding of the lime marketing conversion action |
| `cta-x` | 44px | Horizontal padding of the lime marketing conversion action |

The announcement strip's 60px horizontal padding is a layout measurement rather than a token in this record and is stated in Layout & Platforms.

### Shape

| Token | Value | Where |
|---|---:|---|
| `nav` | 8px | Global navigation menu controls and both navigation conversion actions |
| `badge` | 18px | The compact `new` announcement badge |
| `cta` | 24px | The lime marketing conversion action |

One further radius is recorded on a component rather than in the shape scale: the relationship story card at 16px. These are the observed radii of the named elements; no universal card-radius rule is asserted.

### Elevation

The record holds no shadow value and no elevation scale. One component carries a surface fill and border of its own: the relationship story card, at a translucent `rgba(255,255,255,0.04)` fill with a `1px solid rgba(255,255,255,0.08)` border. Nothing further about elevation is established, and no shadow token is promoted.

### Motion

No duration, easing curve, transition, or scroll-trigger value is recorded in the supplied evidence. Motion is left undocumented here rather than extrapolated from the static surfaces, and no easing curve, delay, or stagger behavior is assigned from visual inference.

Promoting an exact motion value to a Flex motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior. A single named curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No reviewed first-party Flex source publishes a typography token for the captured pages. |
| Live computed surface-use | Both captured public surfaces resolve visible text to `"Pretendard Variable", Pretendard, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`. The collector classifies `Pretendard Variable` as loaded/high-confidence and records 351 visible uses across headings, body, navigation, badges, and actions. |
| FontFaceSet and source corroboration | 92 Flex-hosted subset URLs resolve under `static.flex.team`. |
| Declared but unused | Static `Pretendard` is present in the declarations with zero observed visible uses. `system-ui` appears once as an operating-system stack. Neither is a further Flex UI-family token, and neither is rendered as a substitute specimen. |
| Official distributed asset | No Flex-distributed type family is established in this pass. |
| Outside these captures | `guide.flex.team` is a separate Help Center surface. It was inspected only to classify the source domain and contributes no typography value here. |

### Family

- **Current visible UI family:** `Pretendard Variable`, with the declared stack above behind it.
- The family token names only `Pretendard Variable`, because computed visible use and Flex-hosted subset sources agree on it.
- Do not present static `Pretendard` or a system fallback as an additional Flex font role or as a substitute for the verified family.

### Type roles

Measured styles on the captured public surfaces. The sizes, weights, and line heights are measured. The family column stays empty on every row: the record retains this measured public hierarchy as measured styles and assigns no family token to any of these roles, so none is filled in here.

| Role | Font | Size | Weight | Line height | Where |
|---|---|---:|---:|---|---|
| About display | — | 96px | 600 | 1.00 (96px) | About-page relationship statement, on a light field |
| About display, inverse | — | 80px | 600 | 1.20 (96px) | Dark About-page statement |
| Body emphasis | — | 17px | 600 | 1.55 (24.65–26.35px measured) | About-page explanatory copy |
| Navigation | — | 14px | 700 | 1.00 | Global navigation controls |
| Supporting copy | — | 15px | — | — | About-page supporting copy; the size is the only metric recorded |

Two further measured font records sit on components rather than on a type role: the two global-navigation conversion actions at 13px/700, and the lime conversion action at 17px/700. The record therefore carries the navigation *role* at 14px/700 for global navigation controls and the two captured navigation *actions* at 13px/700; both are preserved and neither is selected over the other.

The 80–96px About styles are surface-local display treatments, not a claimed product-app type scale.

### Icons

The captured public surfaces expose inline brand/product imagery and ordinary navigation affordances, and the record names no icon library and no reusable icon size or weight rule. No icon token is promoted.

### Imagery and assets

- Logo entry: type `favicon`, slug `https://www.google.com/s2/favicons?domain=flex.team&sz=256`. That is a third-party favicon proxy rather than a captured first-party Flex mark, and it is recorded on those terms.
- The home page uses application screenshots to demonstrate contextual AI answers, organizational signals, and connected-work-system data.
- The About page is primarily typographic and narrative; its light/dark editorial fields carry the company story.
- Reading those screenshots as marketing illustrations of the platform rather than as a component library, and reading the About page as framing the story instead of adding a stock-photo visual language, are derived editorial interpretations of the verified surfaces; they are not Flex-authored or a separately published imagery specification. The record identifies no repeatable image component, so no imagery crop ratio, overlay treatment, or product-screen frame is promoted.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-07-13 evidence covers two public surfaces and reports zero interaction coverage. Its observations are static defaults plus surface-theme variants — dark versus light navigation. It holds no hover, pressed, focus, disabled, menu, dialog, or form observation, and it holds no loading, error, empty, or success observation for a Flex product workflow. Those visual treatments are therefore omitted, and the surface-theme variants are not promoted as behavioral state specifications.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. State coverage is not complete here.

The record carries no focus-visible or keyboard-interaction observation, so no focus treatment appears below. Do not infer one from the 8px or 24px radii; an implementation must provide an accessible focus indicator of its own.

### Global Navigation Action — outline

- Role: `/about` light global navigation secondary conversion action
- Variant: `Light-surface secondary action`
- Kind: interactive
- Background: `#ffffff`
- Text: `#111111`
- Border: `1px solid #111111`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the About surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The action hands off to a conversion path; no operation runs on the control that could be pending |
| error | not-applicable | Nothing resolves on the control — it hands off — so no failure outcome can render on it |
| success | not-applicable | Handing off to another surface is not an action-outcome confirmation on the control |

### Global Navigation Action — solid

- Role: `/about` light global navigation primary conversion action
- Variant: `Light-surface primary action`
- Kind: interactive
- Background: `#111111`
- Text: `#ffffff`
- Radius: `8px`
- Padding: `8px 14px`
- Font: `13px / 700`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the About surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The action hands off to a conversion path; no operation runs on the control that could be pending |
| error | not-applicable | Nothing resolves on the control — it hands off — so no failure outcome can render on it |
| success | not-applicable | Handing off to another surface is not an action-outcome confirmation on the control |

### Marketing CTA — lime

- Role: high-emphasis marketing conversion link on home and `/about`
- Variant: `Primary conversion`
- Kind: interactive
- Type: link
- Background: `#00ff44`
- Text: `#111111`
- Radius: `24px`
- Padding: `30px 44px`
- Font: `17px / 700`
- Observed: default only, on both captured surfaces

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on both public surfaces |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | A destination link; it commits no operation in place that could be pending |
| error | not-applicable | A destination link resolves elsewhere, so no failure outcome renders on the control |
| success | not-applicable | Arriving at a destination is not an action-outcome confirmation on the link |

### Announcement Badge — new

- Role: compact `new` label in the public announcement strip, on both captured surfaces
- Variant: `Default`
- Kind: non-interactive — the record names it a label and captures it on a `span`, and records the announcement strip it sits in as a 48px-high link
- Background: `#ff4d00`
- Text: `#000000`
- Radius: `18px`
- Padding: `0px 8px`
- Font: `12px / 700`
- Label: `new`
- Observed: default only

No state-applicability map is declared, because the component is non-interactive.

### Relationship Story Card

- Role: `Non-interactive relationship-data story item observed on the public home surface`
- Kind: non-interactive — the record declares it a non-interactive story item
- Type: card
- Background: `rgba(255,255,255,0.04)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Radius: `16px`
- Padding: `24px`
- Observed: default only

No state-applicability map is declared, because the component is non-interactive.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Global announcement strip:** both captured public surfaces begin with a 48px-high announcement link; it uses 60px horizontal padding at the 1440px collector viewport.
- **Global navigation:** on `/about`, the captured menu controls use 8px radius and 8px internal padding; the two conversion actions use 8px 14px padding.
- **About-page editorial hierarchy:** measured headline styles include 96px/600/96px on a light field and 80px/600/96px on a dark field. These are surface-local display treatments, not a claimed product-app type scale.
- **Conversion action:** the observed lime action is a 24px-radius link with 30px 44px padding and 17px/700 text on both captured public surfaces.
- **Boundary:** no container maximum, page section height, or responsive breakpoint is promoted, because the supplied 1440×900 capture does not establish those values across viewports.

All heights, paddings, and radii above are desktop-capture measurements of the named elements at a single viewport. They are not cross-viewport specifications and not accessibility-target rules.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Recorded from the two captured public surfaces, 2026-07-13:

- **Relations Driven AX** — the current brand thesis on the public site, and the line the home surface leads with.
- **Human Relations** — the About-page reframing of HR, set against **Human Resources** as the term it redefines.
- `new` — the label inside the compact announcement badge.

Those strings are recorded as published copy. Recording them is a record that the lines are published, not a finding that any claim inside them holds.

### Recorded narrative

The home page asks whether blanket AI subscriptions actually change how a company works, then answers through three forms of knowledge: knowing the user, anticipating work, and connecting enterprise context. The About page reframes HR as **Human Relations** and positions the company's mission around solving organizational and employee problems.

Flex says it was established in 2019 and launched its flex service in 2020. Its current About page describes a progression from establishing an HR-platform standard (2019–2021), through enterprise expansion (2022–2024), toward an AX platform grounded in HR data (2025–2027). Under the Relations Driven AX thesis, relationship data is presented as the context that lets AI diagnose, suggest, and execute work safely, and the company frames its mission as solving organizations' and employees' problems so that it becomes an essential service for everyone who works.

### Voice reading

The voice adjectives, the characterization of the narrative, and the four Do/Don't rows below are a derived editorial interpretation of the verified surfaces; they are not Flex-authored or a separately published voice specification. In that reading the public narrative starts from organizational context rather than generic AI capability, the conversion labels are direct and operational — a trial or an inquiry — and the surrounding prose stays declarative and explanatory. The measured parts are the published lines above and the recorded component labels and values.

**Voice adjectives:** contextual · declarative · enterprise-serious

| Do | Don't |
|---|---|
| Start with a concrete organizational condition or question. | Lead with abstract "AI transformation" claims without context. |
| Explain how context, access, and relationships change an outcome. | Treat every user or team as interchangeable. |
| Use a clear conversion label for a trial or inquiry. | Turn every paragraph into a sales CTA. |
| Pair confident headlines with explanatory follow-through. | Use playful hype that conflicts with the governance and safety message. |

This is a style description for writing in this register. It is not a license to reproduce Flex copy verbatim, and it asserts nothing about the company's actual products, marketing conduct, or compliance position.

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

- hover, pressed, focus, disabled, menu, dialog, and form state treatments, which the evidence bundle's zero interaction coverage leaves open
- loading, error, empty, and success state treatments for a Flex product workflow
- an accessible focus indicator treatment, which the record asks an implementation to supply rather than defining
- motion duration, easing, transition, and scroll-trigger values
- container maximum, page section height, and responsive breakpoint values across viewports, beyond the single 1440×900 capture
- a named icon library and any reusable icon size or weight rule
- imagery crop ratio, overlay treatment, and product-screen frame
- a family token for each role in the measured public hierarchy, which is retained as measured styles only
- color, typography, and component values on the `guide.flex.team` Help Center, classified here as a separate domain
- color, typography, and component values for any logged-in Flex application surface
