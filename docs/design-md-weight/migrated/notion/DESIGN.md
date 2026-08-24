# Notion Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Notion is an all-in-one workspace for notes, docs, project work, knowledge, and AI-assisted workflows. This contract covers three current first-party public routes only: Korean marketing (`https://www.notion.com/ko`), public product-marketing (`https://www.notion.com/ko/product`), and Korean Help chrome (`https://www.notion.com/ko/help`). It does not treat those routes as a proxy for an authenticated workspace, native app, dashboard, help-article body, or a complete internal design-system API.

The public web expression makes a flexible “toolbox of software building blocks” feel legible rather than enterprise-heavy: white canvas, near-black type, modest 4–12px corners, and a restrained blue action color. Marketing and public-product promotion share the blue CTA and the NotionInter family. The Help route adds its own documentation controls and a muted `#f9f9f8` hover layer; that layer is Help chrome, not a universal workspace pattern.

Notion’s About page locates the company in a critique of fragmented office tools: people stitch together email, chat, documents, and storage rather than shaping software around the work at hand. The stated response is an all-in-one workspace of building blocks that can be adapted to a task list, roadmap, or design repository, and the page connects that goal to computing pioneers who imagined computers amplifying imagination. That founding frame now includes AI. Ivan Zhao’s official Notion AI account describes the mission as making software toolmaking ubiquitous and positions AI as a way for people to mold computers to their needs. Current careers copy describes Notion as helping teams of people and AI agents think and work together. Those are first-party framing statements and narrative context; they are not evidence for a particular authenticated product UI.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Keep notes, docs, project work, and knowledge in one workspace.
- Adapt building blocks to a task list, roadmap, or design repository.
- Think and work with teams of people and AI agents.
<!-- design-md:claim-end -->

### Audience

No independently verified persona set is promoted. The source labels four product-role archetypes as inferred from first-party categories and not as research participants or user counts. Those items are not Experience claims. Observable work follows the official product scope: notes, docs, project work, knowledge, and AI-assisted workflows, including teams of people and AI agents named on the current careers page.

### Distinctive traits

- White canvas with `rgba(0,0,0,0.95)` / `#000000` reading color
- `#0075de` public CTA, with darker selector-specific interaction states
- NotionInter loaded on all three captured public routes
- 4–8px controls, 12px marketing cards, and a pill-shaped language menu trigger
- Public components are flat or whisper-bordered; the observed circular carousel action is the only captured soft-shadow control

### Principles

The five numbered items are first-party mission and careers values. The UI implications are how the source applies those values to interface work; they are not a separately published Notion UI specification.

1. **Software should be moldable.** Notion’s official mission is to make software toolmaking ubiquitous. *UI implication:* prefer composable structures and clear primitives over forced linear workflows.
2. **Customer outcomes are the point.** “Customer in every room” is a current careers value. *UI implication:* explain benefits in the user’s task language and make the next action concrete.
3. **Own the outcome.** Notion names agency and initiative as a current value. *UI implication:* give people understandable controls, consequences, and recovery paths rather than opaque automation.
4. **Move with judgment and urgency.** “Why not today” describes the company’s speed value. *UI implication:* keep routine actions short without removing necessary context or accessibility.
5. **Humans remain central to AI.** The official AI narrative describes AI as a companion that users can mold. *UI implication:* surface user intent, sources, and control rather than presenting autonomous output as unquestionable.

Capture-bound application:

- Use `#0075de` only where the captured public CTA pattern is appropriate, and preserve the observed 8px action corners.
- Keep NotionInter evidence-bound: use it only when it can be loaded from an authorized source in an implementation.
- Separate white marketing cards from Help-specific controls and focus treatment.
- Preserve tab, dialog, hover, pressed, and focus provenance rather than converting observed states into a generic component library.
- Treat public marketing, public product-marketing, and Help patterns as three related but separate surfaces.

### Avoid

- Do not restore the earlier `#455dd3` primary CTA or treat `#005bab` as its universal default.
- Do not use declared-only iA Writer Mono, Lyon Text, Noto, or Permanent Marker as visible web typography.
- Do not claim an authenticated Notion workspace, native-app controls, dashboard states, or a complete design-system API from these public routes.
- Do not invent error, disabled, toast, menu, modal, or responsive variants beyond the raw observations described here.
- Do not make a NotionInter fallback appear to be the real font, and do not fill missing authenticated-workspace components with generic substitutes.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Observed on public marketing and product-marketing:

- **Primary action** (`#0075de`): global navigation CTA and hero CTA across the marketing and public product-marketing routes.
- **Primary interaction states** (`#005bab`, `#0073d9`, `#0071d6`): hover, pressed, and focus backgrounds on captured CTA selectors. These are state evidence, not a general color ramp.
- **Canvas** (`#ffffff`): repeated white page, card, and menu-button surface.
- **Ink** (`#000000` / `rgba(0,0,0,0.95)`): observed primary text treatment.
- **Muted text** (`#615d59` and route-local `rgba(0,0,0,0.54)`): secondary copy/control treatment; neither is a substitute for primary ink.
- **Whisper border** (`rgba(0,0,0,0.1)`): white language-picker trigger and compact card.

Documentation-chrome boundary (Help only):

- **Help hover layer** (`#f9f9f8`): Help toggle hover only. Not a universal canvas or workspace layer.
- **Help focus treatment** (`rgba(35,131,226,0.57)` inset plus `rgba(35,131,226,0.35)` outer ring): language-picker search input after its dialog opened.

The prior `#455dd3` primary-CTA claim is not current. `#005bab` is a captured global-CTA hover, not a replacement default.

### Spacing

Repeated public rhythm: 4px, 8px, 12px, 16px, and 24px. Marketing content uses generous page-level whitespace with 12px bento-card corners; Help uses narrower, denser controls. This is not a claim that every page follows a strict mathematical scale.

### Shape

- Help-toggle hover corners: 4px
- Help language-picker search: 5px
- Public controls: 8px
- Marketing compact card: 12px
- Language-menu trigger and circular carousel action: 9999px

4–8px control corners and 12px marketing cards are captured local geometry, not a universal radius scale.

### Elevation

The observed public surfaces are chiefly flat. The compact card uses a `1px rgba(0,0,0,0.1)` boundary with no shadow. One circular carousel control carries this four-layer low-opacity shadow; do not generalize it to cards or dialogs:

`rgba(0,0,0,0.01) 0px 0.175px 1.041px, rgba(0,0,0,0.02) 0px 0.8px 2.925px, rgba(0,0,0,0.027) 0px 2.025px 7.847px, rgba(0,0,0,0.04) 0px 4px 18px`

The Help dialog’s representative container is transparent, so its elevation is not asserted. No generic modal, popover, or toast elevation system is inferred from this packet.

### Motion

The supplied evidence records state snapshots but no duration, easing, transition-property, or animation timing values. Do not manufacture a Notion motion scale from the visual state changes. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Notion describes an all-in-one workspace of configurable building blocks and a mission to make software toolmaking ubiquitous. Those are product and brand facts; they do not by themselves specify a webfont. |
| Live computed surface-use | `NotionInter` is computed on visible marketing, public product-marketing, and Help-chrome elements. The capture reports it loaded/high for 906 elements with matching FontFaceSet/source evidence. |
| Official distributed brand asset | Notion-controlled `NotionInter` `.woff` and `.woff2` files exist at `www.notion.com` URLs. They support browser delivery on these routes. No first-party public font-license or redistribution grant was found. Treat the files as service assets, not a font package to redistribute. |
| Declared-only | `iA Writer Mono`, `Lyon Text`, `Noto Sans Arabic`, `Noto Sans Hebrew`, and `Permanent Marker` have `@font-face` sources but no visible computed use. They remain declared assets, not UI-family tokens. |
| System/unresolved | `Inter`, `-apple-system`, `system-ui`, `Segoe UI`, Helvetica, Arial, and emoji faces appear as fallback members in the computed stack. No fallback is rendered or labeled as NotionInter. Authenticated workspace typography, local app typography, and a public NotionInter license remain outside this capture. |

### Family

- **Current visible UI family:** `NotionInter` on the three captured public routes.
- Do not replace NotionInter with a fallback stack, and do not present Inter or a system face as NotionInter.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---|---|
| Marketing hero | NotionInter | 96px | 600 | 100px | -4.6px | Observed marketing h1 at the captured viewport |
| Public heading | NotionInter | 54px | 700 | 56px | -1.875px | Observed public marketing/product h2 |
| Body | NotionInter | 16px | 400 | 24px | | Observed navigation, cards, and Help chrome |
| Action | NotionInter | 16px | 500 | 24px | | Observed public marketing CTA |
| Label | NotionInter | 14px | 500 | 20px | | Observed menu trigger and Help dialog control |

### Assets

NotionInter delivery files on these routes are service assets. Do not redistribute them without a grant this capture did not find.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Only the following states are evidenced in this packet. Empty, loading, error, success, skeleton, and disabled patterns were not captured and are deliberately not specified.

| State | Observed surface | Evidence boundary |
|---|---|---|
| CTA hover | Marketing | `#005bab` on global CTA selector only. |
| CTA pressed | Marketing | `#0073d9` on hero CTA selector only. |
| CTA focus | Marketing | `#0071d6` on hero CTA selector only. |
| Secondary CTA focus | Marketing | `#e7f3fe` / `#005bab` pair only. |
| Tab selected | Marketing/product marketing | Selected and unselected tab targets recorded by three interactions. |
| Language dialog open | Marketing/product marketing/Help | Trigger opens dialog; no container elevation asserted. |
| Help input focus | Help chrome | Blue double-ring on language-picker search only. |
| Help toggle hover | Help chrome | `#f9f9f8`, 4px radius. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` / `::state-focus` capture is not `focus-visible` treatment evidence; those observations stay as additional observed states, and the `focus-visible` visual treatment remains unresolved. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. This is not a complete state-coverage claim.

The Compact card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Global CTA

- Role: global marketing CTA
- Kind: interactive
- Anatomy: label
- Background: `#0075de`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 4px 14px
- Height: 36px
- Font: 16px / 500 / NotionInter
- Surface: observed on all three captured routes
- Observed: default; hover `#005bab`. Pressed and focus were captured for this selector; their raw values are not in this contract.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the three public routes |
| hover | applicable | Pointer-web button; `#005bab` on this selector |
| focus-visible | applicable | Interactive control; treatment omitted here |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

Additional observed state: pressed, captured for this selector; value not in this contract.

### Hero CTA

- Role: hero marketing action
- Kind: interactive
- Anatomy: label
- Background: `#0075de`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 6px 15px
- Height: 38px
- Font: 16px / 500 / NotionInter
- Surface: public marketing and product-marketing only
- Observed: default; pressed `#0073d9`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on marketing and product-marketing |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

Additional observed state: pressed `#0073d9`.
Additional observed state: generic `Focus` / `::state-focus` `#0071d6` on this selector. This is not `focus-visible` evidence.

### Hero secondary action

- Role: hero secondary marketing action
- Kind: interactive
- Anatomy: label
- Background: `#e6f3fe`
- Text: `#005bab`
- Border: 1px solid transparent
- Radius: 8px
- Padding: 6px 15px
- Height: 38px
- Font: 16px / 500 / NotionInter
- Surface: a focus observation, not a universal secondary-button default
- Observed: listed geometry plus generic `Focus` background `#e7f3fe`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Geometry recorded with the focus observation; not a universal secondary default |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | applicable | Button control; visual treatment omitted |
| error | applicable | Button control; visual treatment omitted |
| success | applicable | Button control; visual treatment omitted |

Additional observed state: generic `Focus` background `#e7f3fe` and text `#005bab` on this selector. This is not `focus-visible` evidence.

### Compact card

- Role: marketing content card
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.898)`
- Border: 1px solid `rgba(0,0,0,0.1)`
- Radius: 12px
- Padding: 24px
- Font: 16px / 400 / NotionInter
- Surface: marketing and public product-marketing

### Bento feature tab

- Role: marketing bento feature tab
- Kind: interactive
- Anatomy: tab
- Background: transparent
- Radius: 8px
- Padding: 12px 16px
- Font: 16px / 400 / NotionInter
- Surface: marketing and public product-marketing; three tab interactions recorded
- Observed: selected `rgba(0,0,0,0.95)` text; unselected `rgba(0,0,0,0.54)` text

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected tab recorded |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A feature tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A marketing feature tab selects a panel; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed states: selected and unselected text colors above.

### Circular carousel action

- Role: marketing carousel arrow
- Kind: interactive
- Anatomy: control
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.95)`
- Radius: 9999px
- Height: 40px
- Font: 20px / 400 / NotionInter
- Shadow: the four-layer stack in Foundations; do not generalize this elevation to cards or dialogs
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on marketing |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A carousel arrow can be unavailable at an end; visual treatment omitted |
| loading | not-applicable | A marketing carousel arrow steps through present slides; the control itself does not enter a loading state |
| error | not-applicable | An arrow control does not report a request or validation failure of its own |
| success | not-applicable | Advancing a slide is not an action-outcome confirmation on the arrow |

### Language picker trigger

- Role: language-menu dialog opener
- Kind: interactive
- Anatomy: trigger
- Background: `#ffffff`
- Text: `rgba(0,0,0,0.95)`
- Border: 1px solid `rgba(0,0,0,0.1)`
- Radius: 9999px
- Padding: 8px 16px
- Height: 38px
- Font: 14px / 500 / NotionInter
- Surface: equivalent selectors on all three captured routes; the collector opened a dialog on each
- Observed: default; dialog-open language-list targets were captured. No dialog container elevation is asserted.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the three public routes |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A dialog opener can be unavailable; visual treatment omitted |
| loading | not-applicable | A language-menu trigger opens a dialog; the trigger itself does not enter a loading state |
| error | not-applicable | Opening a language menu is not a validation or request-failure state on the trigger |
| success | not-applicable | Dialog-open is the observed outcome; it is not a success confirmation on the trigger |

Additional observed state: dialog open. No container elevation asserted because the representative style was transparent.

### Language-picker search

- Role: Help language-picker search field
- Kind: interactive
- Anatomy: value field
- Background: transparent
- Text: `#000000` (YAML `tokens.components.help-search.fg`; the field's renderable foreground)
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 5px
- Padding: 7px 10px 7px 30px
- Height: 36px
- Font: 16px / 400 / NotionInter
- Observed: dialog-open focused field. YAML `help-search.fg` `#000000` is the field token. Focused computed text `rgba(0,0,0,0.95)` is a different source role.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Field geometry recorded in the open dialog |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | Input control; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted |
| success | applicable | Form field; visual treatment omitted |

Additional observed state: generic `Focus` on the dialog-open field — inset `rgba(35,131,226,0.57) 0px 0px 0px 1px` plus outer `rgba(35,131,226,0.35) 0px 0px 0px 2px`, with computed text `rgba(0,0,0,0.95)`. This is not `focus-visible` evidence.

### Help toggle

- Role: Help documentation chrome toggle
- Kind: interactive
- Anatomy: control
- Text: `rgba(0,0,0,0.54)`
- Padding: 6px 8px
- Height: 32px
- Font: 16px / 400 / NotionInter
- Surface: Help documentation chrome only
- Observed: default; hover `#f9f9f8` background and 4px radius. Pressed was captured for the selector; no raw pressed value is promoted as a system token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Help chrome |
| hover | applicable | `#f9f9f8` and 4px radius on this selector |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A documentation toggle can be unavailable; visual treatment omitted |
| loading | not-applicable | A Help chrome toggle expands or collapses local documentation; the control itself does not enter a loading state |
| error | not-applicable | Expanded/collapsed is the toggle meaning; it does not report a request or validation failure |
| success | not-applicable | Toggle meaning is expanded vs collapsed, not action-outcome confirmation |

Additional observed state: pressed, captured for this selector; value not promoted.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied desktop capture exposes a 4, 8, 12, 16, and 24px rhythm across public marketing and Help controls. Marketing content combines wide bento cards with 12px corners and generous page-level whitespace; Help uses narrower, denser controls. No second viewport or authenticated workspace was inspected, so responsive grid columns, exact page gutters, and native-app layout are omitted.

No viewport comparison was captured. The public controls in Components & States were measured in the supplied capture only, so Notion-specific breakpoint values, mobile navigation transformation, and touch-target rules remain unverified. Implement responsive accessibility normally, but do not present it as a Notion measurement without a dedicated capture.

The 36px global CTA, 38px hero CTA, 40px circular carousel action, 38px language trigger, 36px language-picker search, and 32px Help toggle are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Notion’s official voice pairs direct utility with an expansive “tools for thought” frame. Public CTA copy is concise and action-led (“Get Notion free”); the About page explains the product through the history of work tools and early computing; the current careers page speaks about teams of humans and AI agents with craft, judgment, and customer focus.

| Do | Don't |
|---|---|
| Name the job or next action plainly. | Promise undefined transformation or use hype as a substitute for an outcome. |
| Explain a complex capability through a concrete workflow. | Treat AI as a separate, magical product layer. |
| Be direct and kind when giving guidance. | Use synthetic congratulations, blame, or invented brand aphorisms. |

Official voice examples: “Get Notion free” (public CTA); “Solve your problems your way” (About); “Customer in every room” and “Why not today” (Careers values). These examples are source-bound, not a license to reproduce product copy wholesale.

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

- authenticated workspace, native-app controls, dashboard states, and a complete design-system API
- empty, loading, error, success, skeleton, and disabled visual treatments
- Global CTA pressed and focus raw values
- Help toggle pressed value
- Help dialog container elevation
- Compact-card interactive kind
- responsive grid, breakpoints, mobile navigation, gutters, and touch-target rules
- motion duration, easing, transition-property, animation timing, and reduced-motion behavior
- public NotionInter license or redistribution grant
- authenticated-workspace, local-app, and declared-only type as UI families
