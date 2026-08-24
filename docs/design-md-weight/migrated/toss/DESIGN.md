# Toss Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Toss (토스) is a unified financial platform that tries to make consequential money decisions feel answerable, immediate, and visually calm. This contract covers two related but distinct first-party systems: TDS Mobile, which documents product UI with large, touch-oriented controls and explicit state contracts, and `toss.im`, which uses a tighter marketing-web button system. Across both, a strong blue action color, plain language, generous hierarchy, and purpose-built typography reduce the institutional distance people often feel around finance. Product and marketing surfaces stay separately named. Their geometry is not blended into one universal component.

Toss presents finance as a connected product experience rather than a collection of institutional silos. Repeated actions — checking, comparing, agreeing, paying, and recovering — are meant to feel consistent even when the underlying financial products differ. First-party design writing treats product branding as the experience people receive while using a feature, not merely a campaign wrapped around it. Toss Product Sans extends that logic into typography: numbers, symbols, Korean text, and multiple digital and offline contexts were considered as one product problem. The practical design position is clarity with momentum. **Easy to answer** reduces the cognitive cost of a decision; **Value first, cost later** makes benefit legible before asking for commitment. Blue, typography, motion, and microcopy are useful only when they help a person move through money with more confidence.

Exact values below are limited to current computed styles or current official TDS documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Answer a financial question with concrete, comparable choices rather than a dense form or an open-ended prompt.
- See the likely benefit before consent, document upload, consultation, or payment is requested.
- Recover from an interrupted flow with the current state, consequence, and next safe action stated explicitly.
<!-- design-md:claim-end -->

### Audience

No invented demographic personas are promoted. The source names three first-party product contexts rather than research participants or population counts. Those contexts are absorbed as primary tasks, not as named individuals. Observable work follows the official product writing: people answering money questions, evaluating value before effort, and recovering from interrupted insurance, payment, or account flows.

### Distinctive traits

- Product primary `#3182f6`; marketing weak CTA `#e8f3ff` / `#1b64da`
- Toss Product Sans loaded and used across all 810 visible TDS observations
- Four documented TDS button sizes with explicit loading and disabled behavior
- Surface-specific component geometry rather than one blended “Toss style”

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Toss-authored or a separately published UI specification.

1. Separate product-system evidence from marketing-surface evidence.
2. Make interaction blue functional rather than decorative.
3. Preserve component states, especially disabled, loading, pressed, and keyboard focus.
4. Prefer exact, readable typography over ornamental depth.
5. Treat financial outcomes as explicit states with clear next actions.

Capture-bound application:

- Keep TDS Mobile and `toss.im` marketing variants explicitly named by surface.
- Use Toss Product Sans where the font is available, with a system fallback for resilience. Do not present the fallback as Toss Product Sans.
- Preserve documented loading, disabled, pressed, and keyboard-focus states on TDS buttons, and preserve width while loading.
- Treat badge content as status metadata, not as an action affordance.
- Use exact component geometry only where the evidence names a size and surface.
- If building a component not listed here, mark it as an extension rather than presenting it as verified TDS.

### Avoid

- Do not use logo brand blue `#0064ff` as a silent replacement for UI primary `#3182f6`. Catalog identity metadata is not the verified UI primary.
- Do not claim Tossface is the visible primary UI font; it was declared but unused in this capture.
- Do not copy documentation-site colors into native product tokens without component-level evidence.
- Do not merge the 16px TDS radius with the 7px marketing radius into an average value.
- Do not invent cards, shadows, tabs, toasts, or dialogs from generic fintech conventions.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Product and shared roles:

- **Primary** (`#3182f6`): TDS interaction blue and primary action reference.
- **Primary Hover / Strong Blue** (`#2272eb`): stronger blue visible in current TDS documentation.
- **Canvas** (`#ffffff`): principal light background.
- **Foreground** (`#191f28`): strongest product text.
- **Body** (`#4e5968`): emphasized body and neutral action text.
- **Muted** (`#8b95a1`): secondary product text.
- **Surface** (`#f2f4f6`): quiet neutral layer.
- **Border** (`#e5e8eb`): light divider or outline reference.
- **On Primary** (`#ffffff`): text on filled primary actions.
- **Danger** (`#e42939`): destructive/error text observed in the current TDS page.

Marketing-web roles (do not substitute for product primary):

- **Weak Background** (`#e8f3ff`) and **Weak Foreground** (`#1b64da`): current light-blue `toss.im` CTA pair.

TDS Mobile product tokens and `toss.im` marketing variants are intentionally separate.

### Spacing

Captured TDS documentation clusters: 4px, 6px, 8px, 16px, 24px, and 32px. Treat those values as a compact working scale, not proof of every native product layout token.

### Shape

- Documentation chrome and components cluster around 4px and 6px for small surfaces.
- Button sizes use 8px, 10px, 14px, and 16px radii from small through xlarge.
- `toss.im` marketing actions use 7px radius.

Do not average the 16px TDS radius with the 7px marketing radius.

### Elevation

No canonical shadow token is promoted in this revision. The inspected evidence contains documentation-site chrome as well as TDS examples, so treating every computed shadow as a Toss product token would overstate the source. Use flat color layering until a component-specific official source verifies elevation.

### Motion

No canonical motion duration or easing token is promoted in this revision. Preserve state clarity and reduced-motion compatibility. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Toss status |
|---|---|
| Official product-use | Toss Product Sans was designed for financial symbols and mobile, desktop, and offline product contexts |
| Live surface-use | Toss Product Sans is loaded and used throughout the inspected TDS documentation surfaces (810 visible first-family uses backed by loaded FontFace resources) |
| Official distributed asset | No general redistribution right is asserted by the current official sources |
| Declared-only | Tossface is declared in captured FontFace resources but was not observed as the visible first family |
| Outside this capture | Public redistribution/license terms and exact native-screen type metrics beyond documented TDS roles |

### Family

- **Canonical visible UI family:** `Toss Product Sans`
- **Tossface:** context, not a canonical UI token
- **Monospace:** no current canonical monospace claim
- Do not replace Toss Product Sans with a system face, and do not present a fallback as Toss Product Sans.

### Type roles

These are evidence-backed public-document roles, not a claim that every native Toss product screen uses this exact hierarchy.

| Role | Font | Size | Weight | Line height | Evidence |
|---|---|---:|---:|---:|---|
| H1 | Toss Product Sans | 36px | 700 | 54px | computed TDS documentation style |
| H2 | Toss Product Sans | 30px | 600 | 45px | computed TDS documentation style |
| H3 | Toss Product Sans | 24px | 600 | 36px | computed TDS documentation style |
| H4 | Toss Product Sans | 22px | 600 | 33px | computed TDS documentation style |
| Body | Toss Product Sans | 16px | 400 | 24px | dominant visible role |
| Body Small | Toss Product Sans | 14px | 400 | 21px | secondary visible role |

### Assets

- Toss Product Sans is the verified UI family on the inspected TDS surfaces. Tossface remains declared-only.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| Component | Verified state contract |
|---|---|
| TDS Button | fill/weak, semantic color, loading, disabled, pressed, keyboard focus |
| TDS Text Field | box/line/big/hero, focus, error, disabled, read-only |
| TDS Agreement | checked, unchecked, disabled, nested hierarchy |
| Marketing CTAs | default geometry captured; hover remains unclaimed |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; named keyboard-focus on the TDS button is a documented state without a captured visual treatment, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The TDS Mobile Badge is descriptive rather than interactive, so kind is `non-interactive` and no state-applicability map is declared.

### TDS Mobile Button

- Role: TDS Mobile xlarge primary action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#3182f6` for the canonical primary reference
- Text: `#ffffff`
- Radius: 16px at xlarge
- Height: 56px at xlarge
- Padding: 0 20px
- Font: 17px / 600 / Toss Product Sans
- Size scale: small 32px / 8px radius; medium 38px / 10px; large 48px / 14px; xlarge 56px / 16px
- Variants: fill or weak; primary, danger, light, or dark
- Use: primary and secondary mobile actions; preserve width while loading
- Surface: TDS Mobile documentation
- Observed: documented loading, disabled, pressed, and keyboard focus. No hover color is recorded.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Canonical primary reference on TDS Mobile |
| hover | applicable | Pointer exists on the TDS documentation web surface; visual treatment omitted |
| focus-visible | applicable | Keyboard focus is documented; visual treatment omitted |
| disabled | applicable | Documented TDS button state |
| loading | applicable | Documented TDS button state; preserve width while loading |
| error | not-applicable | Danger is a semantic color variant of the button, not an error state of this action control |
| success | not-applicable | A TDS primary or secondary action stays the action control; success is not a distinct button state |

Additional observed named state: pressed, documented without a captured visual treatment.
Additional observed named state: keyboard focus, documented without a captured visual treatment. This is not `focus-visible` color evidence.

### TDS Mobile Text Field

- Role: TDS Mobile text entry with help or error text
- Kind: interactive
- Type: input
- Anatomy: value field with label, help text, and error text
- Variants: box, line, big, hero
- Use: text entry with label, help text, and error text. Do not transfer undocumented page-chrome colors into the product field token.
- Surface: TDS Mobile documentation
- Observed: documented focus, error, disabled, and read-only. No field geometry or color token is promoted beyond those named states.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Documented text-entry control |
| hover | applicable | Pointer exists on the TDS documentation web surface; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Documented TDS field state |
| loading | not-applicable | A TDS text field's product role is text entry with help or error text; the field itself does not enter a loading state |
| error | applicable | Documented with error text |
| success | not-applicable | The field reports help or error text, not a success confirmation on the control |

Additional observed named state: generic `focus`. This is not `focus-visible` evidence.
Additional observed named state: read-only.

### TDS Mobile Badge

- Role: TDS Mobile status or category label
- Type: badge
- Kind: non-interactive. The source says the badge is descriptive rather than interactive, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Variants: fill or weak; xsmall, small, medium, large; semantic colors
- Use: compact status or category label; not an action

### TDS Mobile Agreement

- Role: TDS Mobile terms selection
- Kind: interactive
- Type: toggle
- Anatomy: nested agreement control
- Use: terms selection; v3 and v4 are retained as separate official surfaces because both are publicly documented
- Observed: checked, unchecked, disabled, and nested agreement hierarchy

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unchecked/checked terms selection is the documented control |
| hover | applicable | Pointer exists on the TDS documentation web surface; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Documented agreement state |
| loading | not-applicable | A terms-selection control records checked versus unchecked; the agreement row itself does not enter a loading state |
| error | not-applicable | Checked/unchecked is the agreement meaning; validation failure belongs to the surrounding terms flow, not an error state of the toggle |
| success | not-applicable | Agreeing is the checked state, not a success confirmation on the control |

Additional observed named states: checked, unchecked, and nested agreement hierarchy.

### toss.im Marketing Primary

- Role: light-blue marketing CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#e8f3ff`
- Text: `#1b64da`
- Radius: 7px
- Height: 40px
- Padding: 11px 16px
- Font: 15px / 600 / Toss Product Sans
- Use: light-blue marketing CTA
- Surface: `toss.im`
- Observed: default geometry captured; hover not captured in the retained evidence bundle

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default geometry captured on `toss.im` |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | A toss.im light-blue marketing CTA is a navigation action; the control itself does not enter a loading state |
| error | not-applicable | Marketing CTA meaning is the destination action, not a request or validation failure on the control |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on the control |

### toss.im Marketing Dark

- Role: app-store style marketing CTA
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `rgba(0, 12, 30, 0.8)`
- Text: `#ffffff`
- Radius: 7px
- Height: 46px
- Padding: 11px 16px
- Font: 17px / 600 / Toss Product Sans
- Use: app-store style marketing CTA
- Surface: `toss.im`
- Observed: default geometry captured; hover not captured in the retained evidence bundle

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default geometry captured on `toss.im` |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing CTA can be unavailable; visual treatment omitted |
| loading | not-applicable | An app-store style marketing CTA is a navigation action; the control itself does not enter a loading state |
| error | not-applicable | App-store CTA meaning is the destination action, not a request or validation failure on the control |
| success | not-applicable | Following the CTA is not an action-outcome confirmation on the control |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

TDS component documentation is mobile-oriented; its xlarge button is designed as a strong touch action (56px height, 16px radius). The public marketing site uses a distinct responsive web composition and should not inherit mobile component geometry wholesale. On web, preserve the observed 40px or 46px marketing button height rather than substituting the 56px mobile control.

TDS Mobile component sizes should remain touch-oriented; xlarge is the documented default button size. The public sources in this verification do not establish universal breakpoints, desktop maximum widths, or native safe-area values.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Toss speaks as a capable guide that removes work rather than displaying financial expertise. Copy is short and direct, but the governing idea is not minimal word count by itself: a person should understand the value, answer the question, and recover from uncertainty without decoding industry language. Official product-design writing describes principles such as **Easy to answer** and **Value first, cost later** — make choices concrete, and show why an action is worthwhile before asking for effort, data, or commitment.

In product flows, name the outcome and next action precisely. In education or product-branding surfaces, explain one unfamiliar idea in everyday language and let the interface carry the rest. Avoid vague reassurance, unexplained abbreviations, institutional phrasing, or playful copy that makes a financial consequence ambiguous.

No synthetic voice samples are promoted.

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

- public redistribution and license terms for Toss Product Sans
- exact native-screen type metrics beyond documented TDS roles
- canonical shadow or elevation tokens
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five
- universal breakpoints, desktop maximum widths, and native safe-area values
- cards, shadows, tabs, toasts, or dialogs not listed in Components
- hover visual values for the two `toss.im` marketing CTAs
- documentation-site chrome colors transferred into native product field tokens
