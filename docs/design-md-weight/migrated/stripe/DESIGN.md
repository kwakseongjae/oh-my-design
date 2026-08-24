# Stripe Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Stripe builds economic infrastructure for internet businesses, from payments to broader business-management software. Its official newsroom frames that mission around increasing the GDP of the internet, names Patrick Collison as co-founder and CEO and John Collison as co-founder and president, and says businesses from new startups to public companies use Stripe to accept payments and manage their businesses online. This contract covers the supplied capture of Docs home (`https://docs.stripe.com/`), Payments documentation (`https://docs.stripe.com/payments`), and API reference (`https://docs.stripe.com/api`)—not the marketing home, Dashboard, or checkout.

Stripe’s official operating principles add the relevant brand context—users first, craft and beauty, urgency and focus, and careful foundations—but they do not authorize treating marketing art direction as a Docs token. Marketing, Docs, newsroom assets, and unauthenticated product UI remain separate evidence domains. Only selector-backed public Docs values are tokens in this capture.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Stripe-authored or a separately published UI specification. The current public Docs surfaces turn the same infrastructure stance into an information-dense, quiet interface. Across those routes a restrained blue-gray text hierarchy sits on white and faintly cool surfaces, with purple/indigo used for links and API-reference accents. The visual character is therefore best described as product documentation chrome: readable, compact, and deliberately non-promotional.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Locate implementation information on public Stripe Docs home.
- Read Payments documentation.
- Consult the API reference.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names stakeholder groups, not synthetic user-satisfaction claims and not fictional biographies. Use those groups only: a developer integrating Stripe who needs public Docs and API-reference navigation; a business operator evaluating Stripe who needs the first-party account of Stripe’s economic-infrastructure role; and a design or documentation contributor who needs the boundary between current Docs chrome, brand assets, declared fonts, and unobserved product UI.

### Distinctive traits

- Public Docs use `#414552` as repeated foreground text and `#1a2c44` in API-reference content
- `#5469d4` is the selector-backed Docs link/action color; `#533afd` occurs on API-reference actions and borders
- White `#ffffff` is the repeated canvas; `#f4f7fa` appears in pressed/subtle controls
- Captured geometry is compact: 4px, 6px, and 8px radii; the evidence does not support a universal radius rule
- Operating-system-stack documentation typography; Söhne and Source Code Pro are not promoted as the captured Docs family

### Principles

The four numbered items below are first-party operating-principle language from Stripe’s jobs/culture material. The *UI implication* notes and the capture-bound application list are a derived editorial implementation inference from the verified surfaces; they are not Stripe-authored or a separately published UI specification.

1. **Users first.** Work backwards from user needs.
   *UI implication:* a Docs interface should make the next implementation decision easier to locate; preserve direct labels and source provenance instead of decorative ambiguity.
2. **Create with craft and beauty.** Stripe states that careful thought can make work surprisingly great.
   *UI implication:* compact spacing and quiet hierarchy must remain legible, not merely minimal.
3. **Move with urgency and focus.** Speed should not erase the investment that makes later work faster.
   *UI implication:* prefer predictable Docs controls and stable evidence boundaries over speculative variants.
4. **Stay curious.** Stripe describes its work as ongoing learning about businesses and the world.
   *UI implication:* leave unknown font/state fields absent and make a future evidence need explicit.

Capture-bound application:

- Keep the captured Docs hierarchy compact: 14px public text/control samples and a 32px API h1 sample.
- Use `#5469d4` for the observed Docs prompt/link treatment and reserve `#533afd` for the captured API-reference accent context.
- Preserve selector/surface boundaries when using the 8px compact actions or zero-radius content tabs.
- Treat Söhne, Source Code Pro, and declared CJK faces according to their evidence class rather than loading a substitute.

### Avoid

- Do not apply a marketing purple, gradient, shadow, font, or button treatment to Docs merely because it is associated with Stripe elsewhere.
- Do not claim menu, dialog, toast, error, disabled, or authenticated Dashboard states from this zero-interaction packet.
- Do not render the operating-system stack as though it were a named Stripe typeface.
- Do not turn a low-confidence generic card/badge detection into a reusable component token.
- Do not substitute the marketing/wordmark color `#635bff` for `#5469d4` or `#533afd` on the captured Docs routes.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Selector-backed public Docs colors:

- **Docs Foreground** (`#414552`): repeated text and tab color on Docs home, Payments docs, and API reference.
- **API Foreground** (`#1a2c44`): stronger text on captured API-reference and Payments documentation content.
- **Muted Docs Text** (`#50617a`): compact secondary-action text. This is that control’s renderable field, not a general Ink for every Docs string.
- **Docs Link** (`#5469d4`): repeated Docs home/Payments link and prompt-action color. Search Prompt text uses this same captured field; it is not a separate ink token.
- **API Accent** (`#533afd`): API-reference action/link and border samples; it is not promoted as a universal Docs fill.
- **Canvas / On-dark** (`#ffffff`): repeated white public Docs canvas and dark-control text.
- **Subtle Pressed Surface** (`#f4f7fa`): observed only on pressed/focused compact Docs controls.
- **Hairline** (`#d4dee9`): observed compact-control border; **Hairline Hover** (`#95a4ba`) appears in captured hover styles.

Brand-asset boundary: Stripe’s newsroom says its wordmark is available in slate, blurple, and white. The catalog’s `primary_color` remains `#635bff`, but the current packet contains no computed marketing-surface sample that would make it a Docs token. Do not substitute that marketing/wordmark color for `#5469d4` or `#533afd` on the captured Docs routes.

### Spacing

Repeated captured values: 4px, 6px, 8px, 12px, 16px, and 24px. YAML `spacing` is xs 4, sm 6, md 8, lg 12, xl 16, xxl 24.

### Shape

- Compact control: 4px, 6px, 8px (YAML `rounded` sm / md / lg)
- Content tab: 0px

Captured geometry is compact. 8px compact-action corners and 0px content-tab geometry are local defaults, not a universal radius scale.

### Elevation

Captured Docs controls are principally flat. The search prompt and secondary action use white `#ffffff`; their pressed/focused states use `#f4f7fa` and hairline values rather than a documented universal shadow scale. An API-only dark sample has a shadow, but a single route-local control is insufficient to publish an elevation system. No shadow token is promoted.

### Motion

No motion duration, easing curve, or reduced-motion behavior was measured in the supplied evidence. Omit motion tokens rather than inventing a Stripe motion system. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No supplied official Stripe statement establishes a named type family for the three captured Docs routes. |
| Live computed surface-use | The Docs capture records an operating-system stack beginning `-apple-system` in 355 visible uses. It is system typography, not a Stripe-owned family or a substitute for one. |
| Official distributed brand asset | Klim Type Foundry’s Söhne page lists Stripe in its separate “Söhne in use” showcase and describes available WOFF2/web licensing. This is foundry/brand context only; it is not evidence that the captured Docs routes loaded Söhne. |
| Declared-only | Heiti SC, Hiragino Kaku Gothic ProN, Hiragino Sans, Hiragino Sans GB, Meiryo UI, Microsoft JhengHei, Microsoft YaHei, PingFang SC, and Yu Gothic UI have declarations but no visible use in the supplied capture. |
| Unresolved claim | `Source Code Pro` (four computed occurrences) and Menlo (two) have no matching loaded FontFace/source URL in the artifact, so neither is promoted. Adobe’s Source Code Pro repository/license establishes the font’s OFL status, not Stripe deployment. This is a captured but uncorroborated unresolved claim, not a promoted family. |

Do not render a system fallback as Söhne or Source Code Pro. The capture supports system-stack documentation typography only.

### Family

- **Current visible UI family:** operating-system stack beginning `-apple-system`
- **Loaded source boundary:** no named Stripe UI family on the three captured Docs routes
- Do not present this system stack as Söhne, Source Code Pro, or another named Stripe typeface

### Type roles

Verified line-height values are the unitless YAML ratios `1.43` and `1.25`. They scale with font size and are not fixed px. The legacy body table also recorded computed line-height at those captured sizes. Those px figures are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height | Size-local observation | Evidence boundary |
|---|---|---:|---:|---:|---|---|
| Public Docs body | operating-system stack | 14px | 400 | 1.43 | 20px or normal | repeated Docs samples; no named UI family claim |
| API Docs h1 | operating-system stack | 32px | 700 | 1.25 | 40px | two observed API-reference samples only |
| Docs control | operating-system stack | 14px | 400 | 1.43 | 20px or normal | prompt, action, input, and tab samples |

A code-adjacent sample computed as Source Code Pro 12px / 700 / 20px in four occurrences is unresolved because FontFace/source corroboration is absent. It is not a promoted type role.

### Assets

No first-party mark file is attached here.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

No reusable Docs state matrix is published from this packet. The only retained control-state observations are the search-prompt and secondary-action focus/hover/pressed samples and the static selected tab in the harvested components. Error, loading, success, empty, disabled, menu, dialog, and toast states require a future selector-backed capture.

The supplied collector records `interactionCount: 0`. Hover, pressed, focus, and selected values below are only the individual static state samples retained in the artifact; no menu, dialog, toast, form-error, disabled, or authenticated-product variant is inferred. Low-confidence card/badge detections and Docs input styling are preserved in verification evidence but not promoted into canonical components.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` capture is not `focus-visible` treatment evidence; named focus observations stay as additional observed states, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. This is not a complete state-coverage claim.

### Search Prompt

- Role: Docs home and Payments search-prompt action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#5469d4`
- Border: 0px `#5469d4`
- Radius: 8px
- Padding: 2px 8px
- Font: 14px / 400 / operating-system stack
- Hover: `#273951` text with `#95a4ba` border
- Pressed: `#f4f7fa` background with `#3c4f69` text and `#d4dee9` border
- Use: Docs home and Payments search-prompt action
- Observed: focus, hover, pressed; home and payments only
- Field note: `#5469d4` is this control’s renderable foreground and the Docs Link color; it is not a separate general Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Docs home and Payments as the search-prompt action |
| hover | applicable | Pointer-web button; `#273951` text with `#95a4ba` border captured as a static sample |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Docs search-prompt action can be unavailable; visual treatment omitted |
| loading | not-applicable | This prompt action opens Docs search chrome; the control itself does not enter a loading state |
| error | not-applicable | Search failure is not a validation or request-failure state of this prompt button |
| success | not-applicable | Opening search is not an action-outcome confirmation on this button |

Additional observed named states: pressed `#f4f7fa` background with `#3c4f69` text and `#d4dee9` border; generic `Focus` captured without a distinct computed value. Generic `Focus` is not `focus-visible` evidence.

### Secondary Action

- Role: Docs home and Payments compact action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#50617a`
- Border: 0px `#d4dee9`
- Radius: 8px
- Padding: 6px 12px
- Font: 14px / 400 / 20px / operating-system stack
- Hover: `#273951` text with `#95a4ba` border
- Pressed: `#f4f7fa` background with `#3c4f69` text
- Use: Docs home and Payments compact action
- Observed: focus, hover, pressed; home and payments only
- Field note: `#50617a` is this control’s renderable foreground and the Muted Docs Text role; it is not general Docs Foreground `#414552`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Docs home and Payments as the compact secondary action |
| hover | applicable | Pointer-web button; `#273951` text with `#95a4ba` border captured as a static sample |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact Docs action can be unavailable; visual treatment omitted |
| loading | not-applicable | This compact action is Docs chrome; the control itself does not enter a loading state |
| error | not-applicable | Compact-action meaning is the next Docs task, not a request or validation failure on the button |
| success | not-applicable | Completing a compact Docs action is not a success confirmation painted on this button |

Additional observed named states: pressed `#f4f7fa` background with `#3c4f69` text; generic `Focus` — `#f4f7fa` background with `#50617a` text. Generic `Focus` is not `focus-visible` evidence.

### Content Tab

- Role: Docs home and Payments content tabs
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#414552`
- Border: 0px `#414552`
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / operating-system stack
- Use: Docs home and Payments content tabs
- Observed: selected is present as a static ARIA-tab capture; no interaction transition was captured

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the resting content-tab label |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A Docs content tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A content tab selects a Docs section; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: selected (static ARIA-tab capture; no separate selected color recorded beyond the captured label).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The capture supports documentation layout behavior only: Docs body/list text repeats at 14px, API-reference headings at 32px, and repeated gaps cluster at 4px, 6px, 8px, 12px, 16px, and 24px. Tabs, prompts, and compact actions use zero or low-radius chrome. It does not establish public marketing-grid, Dashboard, checkout, or mobile breakpoint rules.

No mobile viewport or responsive transition was captured. The public Docs routes may be responsive, but this packet supports no breakpoint, collapsed-navigation, or touch-target specification. The 14px public text/control samples, 32px API h1 sample, 8px compact actions, and 0px content tabs are documentation-capture measurements, not cross-viewport specifications.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Stripe’s operating principles emphasize users first, craft and beauty, urgency and focus, egoless collaboration, talent, and curiosity. The supplied Docs capture supports documentation context but does not itself establish a complete marketing-copy corpus.

The following product-copy direction is a derived editorial implementation inference from the verified surfaces; it is not Stripe-authored or a separately published UI specification. Product-facing public copy can therefore be direct and concrete: state the capability, then the mechanism or next action.

| Context | Supported direction |
|---|---|
| Product / Docs | Lead with the operation or capability; keep terminology precise. |
| Action labels | Use short, literal labels that name the next task. |
| Brand narrative | Connect financial infrastructure to what businesses can build, without inventing a product claim. |

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

- marketing home, Dashboard, and checkout tokens
- menu, dialog, toast, empty, disabled, form-error, and authenticated-product visual treatments
- error, loading, and success visual treatments for the harvested Docs controls
- `focus-visible` visual treatments (generic `Focus` is a different observation)
- a universal radius or elevation scale
- breakpoint, collapsed-navigation, and touch-target specifications
- Söhne as a loaded Docs family; Source Code Pro and Menlo as promoted families
- declared-only CJK faces as visible UI families
- catalog identity `#635bff` as a Docs fill
- low-confidence card/badge detections and Docs input styling as canonical components
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five; a single named duration is not that gate
- a complete marketing-copy corpus beyond the documentation-context table above
