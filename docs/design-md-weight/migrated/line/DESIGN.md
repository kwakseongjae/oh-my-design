# LINE Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

The following identity, tone, and surface-separation reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. LINE is a communication product whose identity begins with helping people stay close, then extends into services that support everyday life. This contract covers two related but distinct public design surfaces: the Korean consumer marketing site (`https://www.line.me/ko/`) and the official LINE Design System for Messenger (`https://designsystem.line.me`). They share LINE Green `#06c755` and a direct, approachable tone. Their typography and density must not be collapsed into one generic marketing system.

The consumer marketing site uses large `LINESeed` display typography and lifestyle imagery. Messenger guidance specifies OS-native system fonts, compact product type roles, a structured color palette, and reusable interaction patterns. Official first-party design documentation frames the mission as closing the distance between information, services, and people. The principle “Chat comes first” states that sharing messages with people closest to the user is central to LINE’s values. The public marketing site describes LINE as more than a messenger and as infrastructure for everyday life. LY Corporation is the current publisher of these documents. The following publisher-chrome boundary is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Its separate corporate visual system is not used as Messenger component tokens.

The following surface-application reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Exact values below stay attached to the surface that established them. Marketing `LINESeed` display metrics stay in the marketing/display domain. Messenger component anatomy stays with Messenger; it does not describe the wide marketing site’s layout.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Start and maintain a chat with people closest to the user.
- Read N, dot, or number notification updates.
- Complete important information or a user decision in a Messenger popup.
<!-- design-md:claim-end -->

### Audience

No current first-party LINE persona definitions were found in the inspected public design-system documents.

The following observable-work and research prescription is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Do not convert the broad global audience into fictional demographic profiles. No individual personas are promoted. Observable work follows the three primary tasks and these supported task contexts: starting and maintaining a chat, reading notifications, sharing content, recovering from a communication error, and using localized interfaces across operating systems. Persona research should be stored separately with market, language, task, device, and observed behavior.

### Distinctive traits

- Official LINE Green `#06c755` with white `#ffffff`, black `#000000`, and a deep gray scale
- Messenger product UI on OS-native system fonts; marketing and documentation display on loaded `LINESeed`
- Box buttons, capsule buttons, underline inputs, popups, tabs, and notification badges with official anatomy
- 16pt screen and card margins; resolution-adaptive column count rather than CSS breakpoints
- Conversational LINE Voice (Clear, Conversational, Considerate) as current first-party writing rules

### Principles

The six numbered items below are official LINE Design Principles. The *UI implication* notes are a derived editorial implementation inference from the verified surfaces; they are not LINE-authored or a separately published UI specification.

1. **WE ≠ USERS.** Investigate what users actually need rather than assuming designer perspectives are universal.
   *UI implication:* validate tasks and localization with real usage evidence.
2. **Clear primary tasks.** Make primary tasks intuitive.
   *UI implication:* one primary action should dominate the screen and remain easy to identify.
3. **Chat comes first.** New features should reinforce conversation between people.
   *UI implication:* avoid features or flows that obscure the messaging core.
4. **Reliable design.** Pursue trustworthy, intuitive design for all ages and varied use cases.
   *UI implication:* prioritize clear states, accessibility, and predictable actions.
5. **A cohesive experience.** Design seamless flows across related screens.
   *UI implication:* components and terminology must remain consistent across journeys.
6. **Respect for legacy.** Phase beneficial changes carefully because users develop familiarity and unexpected workflows.
   *UI implication:* migration and redesign need compatibility and staged rollout plans.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification.

- Use official `#06c755` LINE Green for primary Messenger actions.
- Use each OS’s system font for product UI and LINESeed for verified marketing/display roles.
- Keep the primary task intuitive and visually dominant.
- Use one primary green or red box button per screen.
- Place affirmative popup actions on the right or above dismissive actions.
- Support multilingual labels and change horizontal controls to vertical when translation length requires it.
- Use green badges in content areas and red badges only in GNB placement.
- Preserve 16pt screen and card margins.

### Avoid

First-party Messenger guidance:

- Do not use the legacy `#07b53b` as current LINE Green.
- Do not place more than one popup on screen.
- Do not disable the dismissive popup action while waiting for an affirmative selection.
- Do not expose nested tabs or connect tabs directly to bottom navigation.
- Do not repeat label text as placeholder text without adding guidance.
- Do not use capsule buttons in the center of content; place them at the top or bottom scroll boundary.

The remaining items are a derived editorial implementation inference from the verified surfaces; they are not LINE-authored or a separately published UI specification.

- Do not hard-code SF Pro as the universal cross-platform LINE font.
- Do not merge LY corporate charcoal chrome into Messenger tokens.
- Do not transfer the public 70px LINESeed headline into Messenger product screens.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Official Messenger palette:

- **LINE Green** (`#06c755`): brand color and primary action. Current v3.5 official palette and current product metadata identify this value. The previous `#07b53b` green was removed; it appeared in an older live tab capture and is not current LINE Green.
- **Android Green** (`#4cc764`): Android display-environment variant.
- **White** (`#ffffff`): canvas and on-dark/on-brand content.
- **Black** (`#000000`): primary foreground.
- **Gray 650** (`#616161`): recurring secondary text in all eight captured surfaces.
- **Gray 500** (`#949494`): muted navigation, inactive labels, and input underline reference.
- **Gray 250** (`#e8e8e8`): repeated structural border.
- **Gray 200** (`#efefef`): official outline-button asset border.
- **Blue 500** (`#638dff`): documented button-background and large-tooltip blue.
- **Red 400** (`#ff334b`): destructive action and error state.
- **On-primary** (`#ffffff`): text on filled primary and destructive actions.

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not LINE-authored or a separately published UI specification. Do not merge Android Green or Blue 500 into LINE Green.

The official color guide does not permit arbitrary opacity changes except for LINE Black and LINE White. Text should generally use palette values numbered 500 or higher to maintain at least 3:1 contrast; Gray 400 is restricted to the least important text. Highlighted colors are generated by documented HSV rules. Disabled labels use 40% treatment according to foreground context. No Gray 400 or Gray 900 hex is established here.

### Spacing

Official Messenger layout: 16pt left and right screen margin, repeated 16pt inside cards.

| Grid | Column width | Gutter | Margin |
|---|---:|---:|---:|
| 2 columns | 167pt | 9pt | 16pt |
| 3 columns | 109pt | 8pt | 16pt |
| 4 columns | 82pt | 5pt | 16pt |

YAML spacing records the same gutters and margins as unitless 9 / 8 / 5 / 16, plus card-margin 16. Those numbers are the pt values above, not px. When resolution increases, the guideline keeps the gutter and increases column count while maintaining proportional column widths. The following surface-application reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. This is a product grid rule, not a claim about the wide marketing site’s layout.

### Shape

- Box button medium: 5px radius
- Box button large / extra-large: 6px radius
- Capsule button and notification badge: 9999px

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. 5px medium and 6px large geometry are official box-button radii, not a universal radius scale.

### Elevation

The captured public and documentation surfaces are predominantly flat and reported `box-shadow: none`. YAML `shadow.flat` is `none`.

The following hierarchy and elevation synthesis is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Component hierarchy is expressed through color, borders, scrims, fixed placement, and content order. A popup is elevated semantically in front of app content using a scrim. Sticky buttons sit above scrolling content but below dialogs and sheets. No reusable shadow value was published or reliably extracted, so the canonical shadow token remains `none` rather than an invented modal shadow.

### Motion

The inspected documents define interaction outcomes but do not publish canonical duration or easing tokens.

- Capsule buttons scroll to new content and disappear after the destination is reached.
- Tabs navigate through press or content swipe, subject to documented gesture-priority rules.
- Box buttons may show loading progress for save/download-like actions.
- Code inputs submit automatically after the final digit.
- Popup content can scroll while its button area remains fixed.

No motion duration, easing curve, animation name, or reduced-motion behavior is promoted. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not LINE-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Messenger guidance specifies OS-native system fonts by platform. |
| Live surface-use | Design-system pages use `system-ui` (682 visible elements); marketing and documentation display roles use loaded `LINESeed` (107 elements). |
| Official distributed asset | LINESeed is official, but distribution does not make it the Messenger UI default. |
| Declared-only | `SF Pro Text` and `SF Pro Display` declarations had zero observed usage. |
| Unresolved claim | `SFPro` on the marketing surface had no resolved loaded face. |

Specimen availability is separate for system UI and LINESeed; neither is a substitute for the other.

### Family

- **Messenger product UI:** each operating system’s system font. YAML family `sans` is `System`. The guideline lists SF Pro Text/Display and localized iOS fonts such as Hiragino Sans, PingFang, Apple SD Gothic Neo, and Thonburi. The following font-mapping reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. These are platform mappings, not a license to hard-code SF Pro as the universal LINE font.
- **Marketing and documentation display:** loaded `LINESeed`. YAML family `display` is `LINESeed`.
- The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Do not present a system fallback as LINESeed, and do not present LINESeed as the Messenger UI default.

### Type roles

Product UI sizes are the official Messenger `pt` roles. YAML records a subset as unitless size/weight; those numbers are the same `pt` values, not px. Do not replace `pt` with px.

| Role | Size | Weight | Use |
|---|---:|---|---|
| Heading 1 | 24pt | Heavy (YAML weight 900) | Messenger product heading 1; official Heavy role |
| Heading 2 | 17pt | Bold (700) | Messenger product heading 2 |
| Heading 3 | 14pt | Bold | Messenger product heading 3 |
| Heading 4 | 13pt | Regular | Messenger product heading 4 |
| Title 1 | 23pt | Bold (700) | Messenger product title 1 |
| Title 2 | 19pt | Semibold or Bold | Messenger product title 2 |
| Title 3 | 16pt | Medium or Semibold (YAML weight 500) | Messenger product title 3 |
| Title 4 | 15pt | Medium or Semibold | Messenger product title 4 |
| Title 5 | 14pt | Medium or Semibold | Messenger product title 5 |
| Body 1 | 16pt | Regular (400) | Messenger primary body |
| Body 2 | 14pt | Regular (400) | Messenger secondary body |
| Body 3 | 13pt | Regular | Messenger body 3 |
| Body 4 | 12pt | Regular (400) | Minimum recommended Messenger body role |

Sizes smaller than 12pt are not recommended. The scale is recommended rather than mandatory so designers can combine roles when content hierarchy requires it.

Marketing and documentation (loaded `LINESeed`, px as captured):

| Role | Size | Weight | Line height | Use |
|---|---:|---:|---:|---|
| Marketing hero | 70px | 700 | | Public line.me “Life on LINE” heading |
| Marketing service | 60px | 700 | 1.334 | Public line.me Messenger APP and Services headings |
| Documentation page title | 48px | 900 | | Design-system documentation page titles |
| Documentation section title | 32px | 700 | | Design-system documentation section titles |

Documentation explanatory body uses `system-ui`. The public 70px LINESeed headline is marketing typography.

### Assets

LINESeed is an official distributed face for verified marketing/display roles. Catalog logo metadata is Simple Icons identity (`line`). LY Corporation corporate Design Style is a separate corporate document.

The following catalog-boundary readings are a derived editorial implementation inference from the verified surfaces; they are not LINE-authored or a separately published UI specification. LINESeed is not the Messenger UI default. Catalog Simple Icons identity is not a captured first-party mark. Corporate chrome and values are not Messenger component tokens. LY Corporation corporate Design Style is organizational context only.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| Component | Official states |
|---|---|
| Box button | Active, inactive, pressed, loading, on, off |
| Text input | Inactive, focused, typing, completed, error, disabled |
| Password input | Inactive, focused, typing visible, typing hidden |
| Code input | Initial focused, typing, submitted, error |
| Capsule button | Active, pressed, disappears after scroll completion |
| Tabs | Selected, unselected, pressed |
| Popup | Light, dark, one/two/three actions, affirmative disabled |
| Badge | N, dot, number; appears on update and dismisses by defined action |
| Destructive action | Solid red; may be affirmative depending on context |
| Disabled label | 40% treatment according to white or Gray 900 foreground rules |

The collector safely exercised five official documentation tab controls and recorded selected/tab-selected variants. It did not execute form submission, destructive actions, or popup actions.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records generic `focused` underline treatment on the text input; that is not `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

Official first-party design documentation records that the official component system is broader than pills: box buttons, capsule buttons, inputs, popups, tabs, badges, sheets, navigation, lists, cards, and feedback components each have defined anatomy, usage, and state behavior. That official range and those definitions exist. The following harvest-boundary reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. This document does not promote tokens for the unharvested members. Harvested tokens here cover box buttons, capsule buttons, inputs, popups, tabs, and badges. Sheets, navigation, lists, cards, and feedback remain outside the harvested token set.

### Box Button Primary Medium

- Role: the most important general action in content or the bottom action area
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 5px
- Height: 36px
- Official states: active, inactive, pressed, loading, on, off

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official active general action |
| hover | applicable | Pointer-web button; visual treatment omitted. Official docs name pressed, not hover |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Official inactive |
| loading | applicable | Official loading for save/download-like actions |

Error and success applicability are omitted. Source names this control as the most important general action in content or the bottom action area; exact label, destination, request, and outcome behavior are unresolved, so those two fields stay omitted at this boundary rather than closed as not-applicable.

Additional official named states: pressed, on, off.

Official SVG assets expose a progression from approximately 29–30px small controls through 36px medium, 43px large, and 48px extra-large controls, using 5px radius at medium and 6px at large/extra-large.

### Box Button Destructive Medium

- Role: delete, replace, remove, and other destructive actions
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ff334b`
- Text: `#ffffff`
- Radius: 5px
- Height: 36px
- Official states: active, inactive, pressed, loading
- Use: solid red; may be affirmative depending on context

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official active destructive action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Official inactive |
| loading | applicable | Official loading |

Error and success applicability are omitted. Source names this control as delete, replace, remove, and other destructive actions; exact label, destination, request, and outcome behavior are unresolved, so those two fields stay omitted at this boundary rather than closed as not-applicable.

Additional official named state: pressed.

### Box Button Outline Medium

- Role: secondary action or turned-off state
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #efefef`
- Radius: 5px
- Height: 36px
- Official states: active, inactive, pressed, loading, off

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official active secondary / outline action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Official inactive |
| loading | applicable | Official loading |

Error and success applicability are omitted. Source names this control as a secondary action or turned-off state; exact label, destination, request, and outcome behavior are unresolved, so those two fields stay omitted at this boundary rather than closed as not-applicable.

Additional official named states: pressed, off.

### Capsule Button

- Role: scroll to newly available content above or below the current position, then disappear
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 9999px
- Official states: active, pressed
- Place at the top or bottom scroll boundary, not in the center of content

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official active scroll-jump control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | not-applicable | Unavailability is absence after the scroll completes; the control does not sit in a disabled treatment |
| loading | not-applicable | The control scrolls to new content and disappears; it does not enter a loading progress state |
| error | not-applicable | Capsule meaning is a scroll jump, not a validation or request failure |
| success | not-applicable | Reaching the destination removes the control; that is disappearance, not a success confirmation on the button |

Additional official named state: pressed.

### Text Input

- Role: text, password, or code entry with reset action and optional label/helper/counter
- Kind: interactive
- Type: input
- Anatomy: value field with required underline and reset action
- Background: `#ffffff`
- Text: `#000000`
- Border: `0 0 1px solid #949494` (bottom underline using Gray 500)
- Focus (generic focused observation): underline changes to `#06c755`
- Error: underline, cursor, and helper text change to `#ff334b`
- Official states: inactive, focused, typing, completed, error, disabled
- Password variant also records typing visible and typing hidden, plus a password visibility toggle
- Code variant records initial focused, typing, submitted, and error; it submits automatically after the final digit

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official inactive underline field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | Official disabled |
| error | applicable | Official error underline, cursor, and helper text |

Loading and success applicability are omitted. Official named states include inactive, focused, typing, completed, error, and disabled (plus password typing visible/hidden and code submitted). Exact loading and success-confirmation behavior on the combined text/password/code field is unresolved, so those two fields stay omitted at this boundary rather than closed as not-applicable. Official `completed` / `submitted` remain named entry-complete states in the capture record.

Additional official named states: focused (generic), typing, completed. Official focused underline `#06c755` is a generic focused observation, not evidence for the `focus-visible` row above. Password and code variants keep their named states in the capture record.

### Popup

- Role: important information or a user decision with content area, action area, and scrim
- Type: dialog
- Kind: omitted. The source records light/dark and one-/two-/three-button variants plus an affirmative-disabled action, and no independent interactive-kind evidence for the dialog surface, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: content, optional area, mandatory dismissal path, action area, and scrim
- Background: `#ffffff`
- Text: `#000000`
- Variants: light, dark, one-button, two-button, three-button
- The action area must include a dismissal path. Affirmative actions sit right or above dismissive actions. Only one popup may be exposed at a time. Do not disable the dismissive popup action while waiting for an affirmative selection. Affirmative-disabled is a state of the affirmative action inside the popup, not a state map for the dialog surface. Popup content can scroll while its button area remains fixed.

### Tabs

- Role: text, box, or icon grouping at the top of dependent content
- Kind: interactive
- Type: tab
- Anatomy: label plus selected indicator
- Background: transparent
- Text: `#000000`
- Active: selected indicator uses `#06c755`
- Official states: selected, unselected, pressed
- Only one tab can be active. Tabs may scroll horizontally when all items do not fit; fixed tabs divide the width into two to four columns. Labels remain single-line and the selected tab must be fully revealed. Do not expose nested tabs or connect tabs directly to bottom navigation.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Official unselected resting tab |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A grouping tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional official named states: selected, unselected, pressed. The collector recorded selected/tab-selected variants on five official documentation tab controls.

### Notification Badge

- Role: N, dot, or number notification
- Type: badge
- Kind: non-interactive. The source treats the badge as an update indicator rather than an action, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#06c755`
- Text: `#ffffff`
- Radius: 9999px
- Use: N, dot, or number update badge; red is reserved for GNB placement. Green badges belong in content areas. Appears on update and dismisses by defined action.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The official Messenger layout uses a common 16pt left and right screen margin and repeats 16pt inside cards. Its reference grid is the 2-/3-/4-column table in Foundations. When resolution increases, gutters stay stable and column count increases while proportional column widths are maintained. The following layout-contract reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. This is resolution-adaptive product-grid guidance, not a breakpoint-specific CSS contract. No canonical CSS breakpoints were published in the inspected Messenger documents.

Multilingual behavior is part of responsiveness. English, Japanese, Korean, Chinese, and Thai labels can vary substantially in length. Buttons and popups should switch from horizontal to vertical arrangements when translations would truncate action labels. Tabs can become horizontally scrollable, but labels remain single-line and the selected tab must be fully revealed.

The following surface-application reading is a derived editorial implementation inference from the verified surfaces; it is not LINE-authored or a separately published UI specification. Official box-button heights (approximately 29–30px small, 36px medium, 43px large, 48px extra-large) and 16pt margins are Messenger product measurements. They are not a claim about the wide marketing site’s layout.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official LINE Voice defines three qualities. These are current first-party writing rules, not inferred marketing tone.

1. **Clear** — remove unimportant information, prefer unambiguous language, and choose clarity over rigid consistency.
2. **Conversational** — translate complex concepts into the user's language, use active sentences, and treat buttons as the user's voice.
3. **Considerate** — avoid assumptions, focus on user goals, anticipate problems, and emphasize what users can do.

Official examples include “Keep it short,” “Buttons are the user's voice,” and “Use descriptive links instead of URLs paired with instructions.”

Do not repeat label text as placeholder text without adding guidance. Supported label languages in the inspected guidance include English, Japanese, Korean, Chinese, and Thai.

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

- motion duration, easing curve, animation name, transition properties, and reduced-motion behavior until per-component computed capture of all five motion evidence kinds exists; a single named duration is not that gate
- keyboard `focus-visible` visual treatments (generic focused underline is a different observation; see Text Input)
- hover visual values for box, capsule, input, and tab controls
- Gray 400 and Gray 900 hex values
- a resolved loaded `SFPro` face on the marketing surface
- canonical CSS breakpoints
- harvested tokens for sheets, navigation, lists, cards, and feedback components
- LY Corporation corporate chrome as Messenger tokens
