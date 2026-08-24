# Linear Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Linear is a product-development system for planning and building software. This contract covers four current first-party public routes: the homepage (`https://linear.app/`), Method (`https://linear.app/method`), customers (`https://linear.app/customers`), and pricing (`https://linear.app/pricing`). Linear’s official brand page (`https://linear.app/brand`) is identity and asset-use guidance. Marketing, embedded product preview, Method, customer, pricing, and brand evidence remain separate.

The public experience treats precision as atmosphere: a deep `#08090a` canvas, near-white `#f7f8f8` type, narrow luminance steps for secondary information, and light-steel conversion actions rather than flooding the interface with its indigo identity color. Large Inter Variable headings compress at 48px/510 with negative tracking, while compact 13px navigation and embedded product previews create a tool-like layer beneath the editorial story.

The distinctive boundary is between public marketing and inspectable product demonstration. The homepage embeds real-looking issue, menu, comment, and control compositions, but those samples do not authorize claims about every authenticated workspace state. Six safe menu expansions established current open/selected behavior for public nav and the embedded preview. Method turns product philosophy into operating guidance; it is not a substitute for the captured public interface tokens. The brand’s indigo identifies Linear, but neutral structure does most of the interface work. Public customer stories show the system in organizational context. The visual language should feel fast because hierarchy is clear, not because motion or unsupported performance claims are added.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Plan work and review progress.
- Create, prioritize, or discuss issues.
- Evaluate workflow, pricing, or migration fit.
<!-- design-md:claim-end -->

### Audience

Public material establishes task contexts only. No independently verified persona set with names, team sizes, roles, metrics, or company stages is promoted. Observable work follows the three primary tasks: a product or engineering lead planning work and reviewing progress; a software maker creating, prioritizing, or discussing issues; a cross-functional team evaluating workflow, pricing, or migration fit.

### Distinctive traits

- Dark-native public canvas with narrow neutral luminance hierarchy
- Loaded Inter Variable across 1,728 visible elements; Berkeley Mono in six technical preview roles
- Light-steel pill as the main public CTA; indigo retained as identity evidence
- 6px embedded product controls, 8px cards/menu rows, full-pill public actions
- Current focus/hover/pressed and menu-open states captured across four routes

### Principles

These four items are a derived editorial implementation inference; they are not Linear-authored or a separately published UI specification.

1. **Build with focus.** Reduce visual and operational noise around the next important action.
2. **Make progress legible.** Hierarchy and state should help teams understand momentum.
3. **Use opinionated defaults carefully.** Strong conventions should remain tied to verified roles.
4. **Separate story from product truth.** Marketing demos, Method, brand assets, and private workspaces are distinct evidence domains, even when they share the same visual language.

Capture-bound application:

- Use the verified neutral hierarchy and distinguish public actions from product-preview controls.
- Keep Inter Variable’s observed 510/590 weights and negative display tracking.
- Treat open/selected states as component-local evidence.
- Keep public conversion actions pill-shaped; keep embedded product controls compact at 6–8px.
- Create hierarchy through luminance before borders on the deep continuous canvas.

### Avoid

- Do not make neon lime or indigo the default CTA everywhere.
- Do not export embedded preview states as authenticated-app facts.
- Do not invent command palettes, status colors, or errors from Linear-like convention.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

- **Identity indigo** (`#5e6ad2`): official/live brand-defining accent, not the default public CTA fill.
- **Canvas** (`#08090a`): repeated current dark background.
- **Foreground** (`#f7f8f8`), **secondary** (`#d0d6e0`), **muted** (`#8a8f98`), **quiet** (`#62666d`): current information hierarchy.
- **Primary public action** (`#e5e5e6`) with `#08090a` content.
- **Hairline** (`#1c1d1e`): 8% white composited on `#08090a`, the current embedded/product boundary.

Neon lime is retained only as a captured customer-card editorial sibling, not a universal action or semantic token. Prior hover indigo and generic success colors are omitted without matching current interaction evidence.

### Spacing

Repeated captured values: 4, 8, 12, 24, and 32. Public customer-story compositions use generous 24–32px card padding. This is not a claim that every page follows a strict mathematical scale.

### Shape

- Product control: 6px
- Card / menu row: 8px
- Full pill: 9999px

Keep public conversion actions pill-shaped; keep embedded product controls compact at 6–8px. Nested menu items in the embedded product preview use a separate 6px compact geometry. These are captured local geometry, not a universal radius scale.

### Elevation

Depth is low-contrast and layered: faint inset rings and small multi-layer action shadows on dark surfaces. The primary action shadow is role-specific, not a default for every control:

`0 0 1px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.07), 0 3px 2px rgba(0,0,0,0.04)`

### Motion

No reusable current duration or easing curve is promoted. Menu expansion proves state change, not a universal animation token and not an animation-name observation. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists. No motion token is promoted.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Public Linear surfaces and embedded product demonstrations establish Inter Variable and Berkeley Mono roles. |
| Live surface-use | Inter Variable loaded/high, 1,728 uses; Berkeley Mono loaded/high, six uses; Tiempos Headline loaded/medium, one heading use. |
| Official distributed asset | These first-party webfont files are not assumed redistributable. |
| Declared-only | SF Pro and system fallbacks remain fallback declarations. |
| Outside this capture | Authenticated workspace and native/desktop overrides remain outside this capture. |

### Family

- **Recorded UI family:** `Inter`
- **Current visible UI family:** Inter Variable on the four captured public routes
- **Technical preview:** Berkeley Mono
- **Surface-local observation:** Tiempos Headline appeared once on a heading; it is an observation, not the UI family
- Do not present SF Pro or a system fallback as the Linear UI face. Do not replace Inter Variable with a substitute stack.

### Type roles

| Role | Family | Size | Weight | Line height | Tracking | Use |
|---|---|---:|---:|---:|---:|---|
| Section display | Inter Variable | 48px | 510 | 1 | -1.056px | Repeated public section display heading |
| Feature heading | Inter Variable | 24px | 590 | 1.33 | -0.288px | Public feature and card heading |
| Method body | Inter Variable | 15px | 400 | 1.6 | -0.165px | Method and public descriptive body |
| Navigation | Inter Variable | 13px | 400 | 1.5 | -0.13px | Public navigation and compact product-preview labels |
| Technical preview | Berkeley Mono | 14px | 400 | 1.71 | normal | Embedded public product-preview technical input |

Verified line-height values are the unitless ratios above (YAML `lineHeight` 1, 1.33, 1.6, 1.5, 1.71). They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes: 48px, 31.92px, 24px, 19.5px, and 24px. Those px figures are size-local observations, not replacements for the ratios. The technical-preview 24px is a rounding of 14 × 1.71 = 23.94.

### Assets

The official brand page is identity and asset-use guidance, a separate evidence domain from the four-route measurements. Catalog logo metadata is Simple Icons identity, not a captured first-party mark.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Public nav focus/hover/pressed and expanded/menu-open states are verified. Embedded menu selected/open is verified. Loading, empty, error, success, disabled workflow, and command-palette states remain absent.

The four-route capture recorded 65 component variants and six safe menu expansions. Inputs, command palettes, authenticated issue controls, success badges, and dialogs are omitted from canonical machine components unless current evidence establishes their exact role.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; those observations stay as additional observed states, and the `focus-visible` visual treatment remains unresolved. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

The customer story card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Primary public action

- Role: highest-priority public get-started action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#e5e5e6`
- Text: `#08090a`
- Border: 1px solid `#e5e5e6`
- Radius: 9999px
- Padding: 0 20px
- Height: 44px
- Font: 16px / 510 / Inter Variable
- Observed: default captured; compact 32px variant remains local

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the public get-started action |
| hover | applicable | Pointer-web conversion action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A get-started action can be unavailable; visual treatment omitted |
| loading | applicable | A public get-started action can wait on destination or session start; visual treatment omitted |
| error | applicable | A get-started conversion can fail to start; visual treatment omitted |
| success | applicable | A get-started conversion can confirm that start; visual treatment omitted |

### Secondary public action

- Role: paired public contact-sales action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `rgba(255,255,255,0.05)` (5% white)
- Text: `#f7f8f8`
- Radius: 9999px
- Padding: 0 20px
- Height: 44px
- Font: 16px / 510 / Inter Variable
- Observed: default captured; no universal hover token promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the paired contact-sales action |
| hover | applicable | Pointer-web conversion action; no universal hover token promoted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A contact-sales action can be unavailable; visual treatment omitted |
| loading | applicable | A public contact-sales action can wait on destination or session start; visual treatment omitted |
| error | applicable | A contact-sales conversion can fail to start; visual treatment omitted |
| success | applicable | A contact-sales conversion can confirm that start; visual treatment omitted |

### Navigation trigger

- Role: current public navigation trigger
- Kind: interactive
- Type: button
- Anatomy: trigger
- Background: transparent
- Text: `#8a8f98`
- Radius: 9999px
- Padding: 0 12px
- Height: 32px
- Font: 13px / 400 / Inter Variable
- Observed: focus, hover, pressed, expanded, and menu-open across current routes. Treatment values for those observations are not in this contract.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on current public routes |
| hover | applicable | Pointer-web navigation trigger; observed; treatment value omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A navigation trigger can be unavailable; visual treatment omitted |
| loading | not-applicable | A public navigation trigger opens a menu; the trigger itself does not enter a loading state |
| error | not-applicable | Opening a navigation menu is not a validation or request-failure state on the trigger |
| success | not-applicable | Menu-open is the observed outcome; it is not a success confirmation on the trigger |

Additional observed states: generic `focus`, hover, pressed, expanded, and menu-open. Generic `focus` is not `focus-visible` evidence.

### Embedded product menu row

- Role: current embedded product-preview menu row
- Kind: interactive
- Anatomy: tab / menu row
- Background: transparent
- Text: `#f7f8f8`
- Radius: 8px
- Padding: `12px 16px 12px 12px`
- Font: 16px / 400 / Inter Variable
- Observed: selected, expanded, and menu-open in the embedded product preview. Nested menu items use a separate 6px compact geometry.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the embedded product preview |
| hover | applicable | Pointer-web menu row; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A menu row can be unavailable; visual treatment omitted |
| loading | not-applicable | A product-preview menu row selects or expands; the row itself does not enter a loading state |
| error | not-applicable | Selected versus unselected is the menu-row meaning, not a request or validation failure |
| success | not-applicable | Selected/open is selection, not action-outcome confirmation on the row |

Additional observed states: selected, expanded, and menu-open.

### Customer story card

- Role: large current customer-story card
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: transparent
- Text: `#f7f8f8`
- Radius: 8px
- Padding: `24px 32px`
- Surface: customers route. The lime sibling is an editorial variant, not a universal card token.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Use a deep continuous canvas and create hierarchy through luminance before borders. Keep public conversion actions pill-shaped; keep embedded product controls compact at 6–8px. Let large editorial typography and product demonstration alternate rather than stacking generic cards. Preserve generous 24–32px card padding where customer stories become full compositions.

Public routes retain the dark canvas, pill navigation/actions, and type hierarchy as sections reflow. Authenticated workspace breakpoints and desktop-client layout remain unresolved.

The 44px public actions, 32px navigation trigger, and 24–32px customer-card padding are desktop-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Linear’s public language is concise, opinionated, and operational. Describe how teams plan and build with direct verbs and clear tradeoffs. Product copy should name the work object, its state, and the next decision rather than celebrate process for its own sake. Method content may be more declarative, but it should still connect principles to how a team actually plans, discusses, and ships work. Keep labels short. Avoid decorative productivity claims and unsupported speed metrics; prioritize focus, momentum, quality, and deliberate workflow.

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

- authenticated workspace states and native/desktop overrides
- authenticated workspace breakpoints and desktop-client layout
- loading, empty, error, success, disabled-workflow, and command-palette visual treatments
- inputs, command palettes, authenticated issue controls, success badges, and dialogs as canonical components
- universal hover token for the secondary public action
- compact 32px primary-action size as a system-wide token
- neon lime as a universal action or semantic token
- Tiempos Headline as the UI family
- SF Pro as the brand face
- redistributable webfont grant
- exact motion duration, easing, animation name, transition properties, and reduced-motion behavior until per-component computed observation of all five kinds exists; menu expansion is not an animation-name observation and is not a universal animation token
- prior hover indigo and generic success colors
- customer-card interactive kind
- focus-visible visual treatments; generic `focus` on the navigation trigger is a different observation
