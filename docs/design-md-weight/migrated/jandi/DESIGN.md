# JANDI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

JANDI (잔디) is Toss Lab’s Korean business-collaboration service, introduced in 2015 and now presented by the company as an enterprise platform that connects work communication, AI-assisted collaboration, and project management. This contract covers the six supplied marketing capture records, which represent five distinct URLs: `https://www.jandi.com/landing/kr` (two records, `home` and `surface-2`), `https://www.jandi.com/landing/kr/features/collaboration`, `https://www.jandi.com/landing/kr/features/member`, `https://www.jandi.com/landing/kr/security`, and `https://www.jandi.com/landing/kr/jandi-ai`. Official pages named for brand context — the company page at `https://finalpick.jandi.com/landing/en/company`, the June 2026 Project 2.0 announcement at `https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/`, the support-centre theme article at `https://support.jandi.com/en/articles/Changing-themes-bf4edc58`, and Noto’s licence documentation — do not supply the computed interface tokens below. Every value stays attached to the surface that established it. The values in this reference remain scoped to those six marketing capture records. Reading those six records as this contract’s token surfaces, keeping values attached to the surface that established them, and treating the company page, Project 2.0 announcement, support-centre theme article, and Noto licence documentation as named sources that do not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

Its public marketing does not imitate an internal dashboard: it uses a white field, black Korean type hierarchy, and a consistent green conversion action to make a broad B2B offer immediately legible. The captured landing, collaboration, member-management, security, and AI pages keep that visual language coherent while giving each subject its own explanatory cards and calls to action. The product is evolving beyond messaging. Toss Lab’s June 2026 Project 2.0 announcement describes project management integrated with the messenger, including a contributor-centred work view and a manager dashboard. That is first-party product context, not authorization to treat the public-marketing measurements below as an authenticated-product design system. The source’s own “does not imitate an internal dashboard” wording, the “immediately legible” wording, the “keep that visual language coherent” wording, and the “not authorization” boundary are source statements. Classifying those four wordings as source statements, and keeping those recorded public-marketing values on the six capture records rather than reading them as an authenticated-product design system, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Toss Lab’s official company history dates the JANDI launch to 2015. The service is presented as a collaboration platform for business communication and, in its current direction, AI-assisted and project-based work. In June 2026, Toss Lab announced JANDI Project 2.0, a project-management experience integrated with messaging and redesigned around visibility for both individual contributors and team managers. This reference keeps that product evolution separate from the measured public-marketing styles. The year 2015, the June 2026 Project 2.0 announcement, the messenger-integrated project-management experience, the contributor and manager visibility redesign, and the closing sentence that this reference keeps that product evolution separate from the measured public-marketing styles are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-Project-2.0 narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not JANDI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not JANDI-authored or a separately published UI specification. They do not come from the source’s persona section.

- Read the public landing offer on `https://www.jandi.com/landing/kr`.
- Scan the collaboration, member, security, and AI marketing pages.
- Use the repeated public global navigation action and the white landing action on those public pages.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. First-party material describes the service in terms of teams and collaboration work, and the Project 2.0 release specifically distinguishes individual contributors from team managers. Those are the only stakeholder groups retained here: individual contributors, team managers, and teams. The announced project experience describes individual contributors viewing assigned work and weekly workload, team managers using the announced dashboard for project progress and member work status, and teams using messaging and project work as connected collaboration contexts. Those descriptions stay here as first-party stakeholder framing; they are not promoted to primary tasks for the captured public-marketing surfaces. Reading those source-named groups as this product’s audience, and keeping the announced-experience descriptions off the primary-task list, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not JANDI-authored or a separately published UI specification.

- `#00c473` fill and border on the repeated global public navigation action
- `#ffffff` canvas with `#000000` ink and `#041911` action-ink on the white landing action
- Noto Sans, with 676 observed uses and seven JANDI-CDN OTF URLs corroborating the computed family
- 56px / 700 public headlines (home `80px` line-height; feature-route `66px` line-height) and 42px / 700 / 60px feature headings
- 6px action corners, 10px floating-nav corners, 16px security-card corners
- No captured hover, pressed, focus, disabled, error, dialog, menu, or responsive variant is promoted

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not JANDI-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Use green as the public action signal.** The capture supports `#00c473` on the repeated global public navigation action, not a universal product semantic system.
2. **Let large Korean headlines carry marketing hierarchy.** The measured 56px, 42px, 40px, and 32px treatments belong to the captured public pages only.
3. **Keep explanatory cards scoped to their feature surface.** The observed security and AI environment cards are static marketing cards, not generic product-card variants.
4. **Keep evidence domains separate.** Marketing, documentation chrome, font licensing, corporate context, and the unobserved authenticated application have different evidentiary roles.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

- Use the loaded `Noto Sans` family only for the captured public-surface type reference.
- Scope `#00c473` to the observed repeated public action.
- Keep each documented card tied to its security or AI marketing surface and selector.
- Preserve selector and surface provenance when using the components in §4.

### Avoid

The source states these four as its Don’t list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

- Present declared-only `icomoon` or `swiper-icons` as a JANDI UI text family.
- Generalize public-marketing measurements into an authenticated product-app system.
- Invent hover, pressed, focus, disabled, error, menu, dialog, or responsive variants.
- Reintroduce the legacy inferred pricing cards, input rules, or universal shadow system.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

These are public-surface roles only. Neither the documentation centre nor the announced authenticated project experience contributes a semantic application palette. Role names below follow the source’s own token-set keys. Taking those role names from the source’s own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` and `tokens.colors.on-dark` as two keys that happen to share `#ffffff`, keeping `tokens.colors.ink` `#000000` off `tokens.colors.action-ink` `#041911`, and keeping `tokens.colors.ink-muted` `#333333` off `tokens.colors.muted` `#a2a2a2`, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

- **Primary** (`#00c473`): observed fill and border of the global public navigation action on all six capture records. Token-set path `tokens.colors.primary`.
- **Canvas** (`#ffffff`): observed public canvas, white landing action, and the scoped security/AI environment-card surface. Token-set path `tokens.colors.canvas`.
- **On-dark** (`#ffffff`): observed on-green text on the global public navigation action. Token-set path `tokens.colors.on-dark`.
- **Ink** (`#000000`): observed body and heading ink on the public pages. Token-set path `tokens.colors.ink`.
- **Ink-muted** (`#333333`): observed supporting text on public feature, security, and AI content. Token-set path `tokens.colors.ink-muted`.
- **Muted** (`#a2a2a2`): observed muted public text and static accordion-button presentation. Token-set path `tokens.colors.muted`.
- **Action-ink** (`#041911`): observed text on the white landing and pill-link actions. Token-set path `tokens.colors.action-ink`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a scale): `nav-action-y: 7` · `nav-action-x: 14` · `landing-action-y: 12` · `landing-action-x: 30`.

`nav-action-y: 7` and `nav-action-x: 14` are the repeated global green action’s internal padding. `landing-action-y: 12` and `landing-action-x: 30` are the white landing action’s internal padding. These are individual component measurements, not a general spacing scale. `tokens.spacing.nav-action-x: 14` is a padding step. It is not `tokens.typography.nav-action.size` `14`. `tokens.spacing.landing-action-x: 30` is a padding step. It is not a radius. Keeping the four unitless spacing steps on their own keys rather than rewriting them as a grid, and keeping those two writings of `14` and the `30` padding on their own records, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `action: 6` · `floating-nav: 10` · `security-card: 16`.

- Action (`6` / `6px`): repeated public global navigation action and white landing action. Token-set key `tokens.rounded.action`.
- Floating-nav (`10` / `10px`): static `role="button"` floating feature-navigation item. Token-set key `tokens.rounded.floating-nav`.
- Security-card (`16` / `16px`): static security-environment card. Token-set key `tokens.rounded.security-card`.

The AI environment card also records `radius: 16px` on its component record. That 16px is `tokens.components.ai-environment-card.radius`. It is not a `tokens.rounded` key. `tokens.rounded.security-card: 16` is a radius step. It is not the 16px / 400 type on the cards, and it is not a spacing step. Keeping `6`, `10`, and `16` as three keys, and keeping the AI-card `16px` on that component record rather than inventing `tokens.rounded.ai-card`, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Elevation

The token set has no shadow key. The previous legacy material asserted a universal card-shadow system. None occurs in the supplied 2026-07-13 evidence, so those claims are removed rather than substituted. No elevation token is promoted. Reading that removal as a token-set boundary rather than as a live elevation token is a derived editorial implementation inference from the verified surfaces; it is not JANDI-authored or a separately published UI specification.

### Motion

No duration, easing, transition, hover result, or other motion behavior was recorded. Motion is intentionally undocumented. No motion token, easing curve, duration, or reduced-motion behavior was captured. Preserve this boundary rather than inventing a motion system. No motion token is promoted.

A future motion pass may promote a value only after per-component computed observation of all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. That five-kind gate, and the refusal to invent a motion system from this capture, are a derived editorial implementation inference from the verified surfaces; they are not JANDI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The official company and Project 2.0 pages describe JANDI’s product evolution. They do not publish a universal current typography token. |
| Live computed public-web use | Visible text across all six supplied records resolves to `"Noto Sans", sans-serif`. The supplied FontFaceSet record classifies `Noto Sans` as loaded/high confidence, with 676 observed uses across headings, body, buttons, cards, list items, and text. Seven JANDI-CDN OTF URLs corroborate that computed family. The machine UI-family token therefore names only `Noto Sans`. |
| Official font and licence context | Noto’s official documentation describes Noto fonts as licensed under the SIL Open Font License. This explains the font’s licence boundary; it does not independently establish a JANDI product-font claim. |
| Declared-only assets | `icomoon` and `swiper-icons` have `@font-face` declarations but zero observed visible uses. They remain declared icon-font assets, not JANDI text families or available specimens. |
| Measured public hierarchy | `home` supplies the 56px/700/80px hero and 42px/700/60px feature samples; the feature routes supply 56px/700/66px page-heading samples. Their observed secondary headings vary by page (40px or 32px). These are observed public treatments, not a full product type scale. |
| Documentation chrome | The support centre is a separate first-party documentation domain. Its theme article is recorded for domain classification only and supplies no visual token or component claim. |

Calling Official product-use a product-evolution account rather than a published type token, calling Live computed the only machine UI-family reading, calling the SIL Open Font License a licence boundary rather than a JANDI product-font claim, calling the declared faces declared-only rather than current UI tokens, calling the measured hierarchy observed public treatments rather than a full product type scale, and calling the support-centre theme article domain classification only, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Noto Sans` — token-set path `tokens.typography.family.ui`
- **Computed stack recorded on the captures:** `"Noto Sans", sans-serif`
- Do not replace unavailable or unobserved brand type with `Noto Sans`. It is canonical here only because computed visible use, FontFaceSet loaded/high confidence, and seven JANDI-CDN OTF URLs agree. Do not present declared-only `icomoon` or `swiper-icons` as a JANDI UI text family.

That no-substitution rule is a derived editorial implementation inference from the verified surfaces; it is not JANDI-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Public landing headline | Noto Sans | 56 | 700 | 1.43 | `tokens.typography.hero` | Public landing headline |
| Public landing feature heading | Noto Sans | 42 | 700 | 1.43 | `tokens.typography.section` | Public landing feature heading |
| Public global navigation action | Noto Sans | 14 | 500 | 1.43 | `tokens.typography.nav-action` | Public global navigation action |

Line-height values stay unitless, as the token-set wrote them (`1.43`). The §2 prose also writes `56px/700/80px`, `42px/700/60px`, and the feature-route `56px/700/66px`. Those px spellings sit on the observed-hierarchy records. They do not replace the unitless token-set figure.

The white landing action records `Font: 15px / 500 / Noto Sans`. That 15px is the landing-action component record. It is not `tokens.typography.nav-action.size` `14`. Feature-page secondary headings at 40px or 32px, and the card / floating-nav `16px / 400 / Noto Sans` treatments, stay on those records. They are not type-role token keys. Keeping the unitless `1.43` beside the §2 px spellings, and keeping landing-action `15` off nav-action `14`, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=www.jandi.com&sz=128`
- Public marketing pages use product imagery and explanatory cards, but the supplied DOM/style evidence does not establish an image ratio, crop rule, overlay system, or reusable screenshot frame. Do not derive an illustration system from those visuals.
- The capture has declared-only `icomoon` and `swiper-icons` font assets but no visible-use match, named icon catalogue, sizing rule, or product-icon evidence. No icon token is promoted.

Reading the Google s2 favicon URL as a catalog identity pointer rather than a JANDI-hosted brand file, and reading the imagery and icon absences as omitted fields rather than as a missing illustration system, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All entries below retain the supplied surface and selector provenance. They are static computed-style observations, not a reusable authenticated-product library. The bundle records zero interaction events, interaction kinds, and observed states; no hover, pressed, focus, disabled, error, dialog, menu, or responsive variant is documented. No empty, loading, error, success, disabled, focus, or validation states were captured. The component appearances are static public-page observations, not behavioral state specifications. The collector did not record focus-visible, keyboard, disabled, form-error, or screen-reader behavior. An implementation should add an accessible focus indicator rather than infer one from static borders or radii. Treating zero observed states as a reason to omit visual treatments rather than as a published state token, and reading the focus-indicator sentence as an implementation inference rather than a captured treatment, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. The global navigation action, the white landing action, and the floating feature-navigation item commit no in-place operation, so loading / error / success are `not-applicable` on those controls for a role reason. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

### Global navigation action

- Role: repeated public global navigation action
- Primitive type: not in the token set · Kind: interactive
- Background: `#00c473`
- Text: `#ffffff`
- Border: `1px solid #00c473`
- Radius: `6px`
- Padding: `7px 14px`
- Font: `14px / 500 / Noto Sans`
- Use: repeated public global navigation action; evidence `home::[data-omd-capture="10"]` and the corresponding selector on `surface-2` through `surface-6`.
- Token-set spacing: `tokens.spacing.nav-action-y: 7` · `tokens.spacing.nav-action-x: 14`
- Token-set shape: `tokens.rounded.action: 6`
- Contrast pair recorded by the source: `#ffffff` text with `#00c473`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on all six records |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public navigation action; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this action, reports failure |
| success | not-applicable | Same role reason: reaching a public destination is not an operation with a success result on this action |

### Landing action

- Role: static white landing action on the duplicated landing records
- Primitive type: not in the token set · Kind: interactive
- Background: `#ffffff`
- Text: `#041911`
- Radius: `6px`
- Padding: `12px 30px`
- Font: `15px / 500 / Noto Sans`
- Use: static white landing action on the duplicated landing records; evidence `home::[data-omd-capture="19"]` and `surface-2::[data-omd-capture="19"]`.
- Token-set spacing: `tokens.spacing.landing-action-y: 12` · `tokens.spacing.landing-action-x: 30`
- Token-set shape: `tokens.rounded.action: 6`
- Contrast pair recorded by the source: `#041911` with `#ffffff`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the duplicated landing records |
| hover | applicable | Pointer-web action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a landing action; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this action, reports failure |
| success | not-applicable | Same role reason: reaching a landing destination is not an operation with a success result on this action |

### Feature floating navigation

- Role: static `role="button"` floating feature-navigation item
- Primitive type: not in the token set · Kind: interactive
- Text: `#000000`
- Radius: `10px`
- Padding: `12px`
- Font: `16px / 400 / Noto Sans`
- Use: static `role="button"` floating feature-navigation item; evidence `surface-3::[data-omd-capture="11"]` (`Collaboration_icon1__cFiWm`) and `surface-4::[data-omd-capture="11"]` (`Member_icon1__MIU61`).
- Token-set shape: `tokens.rounded.floating-nav: 10`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the collaboration and member feature pages |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A navigation item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a floating feature-navigation item; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Feature-navigation item; the destination section, not this item, reports failure |
| success | not-applicable | Same role reason: moving between feature sections is not an operation with a success result on this item |

### Security environment card

- Role: static security-environment card
- Primitive type: `card` · Kind: non-interactive — static marketing card; no in-page commit
- Background: `#ffffff`
- Text: `#000000`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Font: `16px / 400 / Noto Sans`
- Use: static security-environment card; evidence `surface-5::li.Security_securityEnvironmentList__3CRP0`.
- Token-set type: `tokens.components.security-environment-card.type` `card`
- Token-set bg: `tokens.components.security-environment-card.bg` `#ffffff`
- Token-set radius: `tokens.components.security-environment-card.radius` `16px`
- Token-set padding: `tokens.components.security-environment-card.padding` `40px 32px 54px`
- Token-set use: `Static security environment card; surface-5::li.Security_securityEnvironmentList__3CRP0`
- Token-set shape: `tokens.rounded.security-card: 16`

### AI environment card

- Role: static AI-environment card
- Primitive type: `card` · Kind: non-interactive — static marketing card; no in-page commit
- Background: `#ffffff`
- Text: `#000000`
- Radius: `16px`
- Padding: `40px 32px 54px`
- Font: `16px / 400 / Noto Sans`
- Use: static AI-environment card; evidence `surface-6::li.JandiAi_aiEnvironmentList__2ng2t`.
- Token-set type: `tokens.components.ai-environment-card.type` `card`
- Token-set bg: `tokens.components.ai-environment-card.bg` `#ffffff`
- Token-set radius: `tokens.components.ai-environment-card.radius` `16px` — not a `tokens.rounded` key
- Token-set padding: `tokens.components.ai-environment-card.padding` `40px 32px 54px`
- Token-set use: `Static AI environment card; surface-6::li.JandiAi_aiEnvironmentList__2ng2t`

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

`home` records a 56px/700/80px hero and 42px/700/60px feature headings. These are desktop public-marketing samples, not a responsive type contract. The collaboration, member, security, and AI routes record 56px/700/66px page headings; their observed secondary headings vary by page (40px or 32px). The repeated global green action uses 7px 14px internal padding. The white landing action uses 12px 30px. These are individual component measurements, not a general spacing scale. The supplied evidence establishes neither a page container maximum nor a breakpoint, logged-in application shell, or universal grid.

The 56px headlines, 42px feature headings, 14px navigation action, 15px landing action, 16px floating-nav and card type, 6px action corners, 10px floating-nav corners, and 16px card corners are desktop-capture measurements, not cross-viewport specifications. Reading those measurements as desktop public-marketing samples rather than a responsive contract, and leaving a page container maximum, a breakpoint, a logged-in application shell, and a universal grid unnamed because the supplied evidence does not establish them, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

JANDI’s first-party company and product material frames the service as practical collaboration infrastructure: messages, projects, work visibility, and AI-assisted work support. The public voice is correspondingly concise, explanatory, and operational. That observation does not authorize invented authenticated-product microcopy.

**Voice adjectives:** practical · clear · collaboration-oriented

| Do | Don't |
|---|---|
| State the work problem before describing a capability. | Promise transformation without explaining the collaboration task. |
| Connect messaging, project work, and visibility in plain language. | Treat public marketing tone as a specification for every authenticated UI state. |
| Keep feature and inquiry language direct. | Infer urgency, error, or success copy that was not observed. |

Published strings the source records, kept byte-exact:

- JANDI
- 잔디
- Toss Lab
- Project 2.0
- Noto Sans
- SIL Open Font License
- icomoon
- swiper-icons

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, reading “correspondingly concise, explanatory, and operational” as a public-voice observation rather than a complete product-microcopy guide, and reading the Do / Don’t table as the source’s own voice contract rather than invented authenticated-product microcopy, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named values rather than permissions to invent, and naming the list from the source’s own unresolved fields rather than adding surfaces the source did not name, are derived editorial implementation inferences from the verified surfaces; they are not JANDI-authored or a separately published UI specification.

- **Hover, pressed, focus, disabled, error, dialog, menu, and responsive variants.** The bundle records zero interaction events, interaction kinds, and observed states. They are not `not-applicable`; applicability follows control meaning.
- **Empty, loading, error, success, disabled, focus, and validation visual treatments.** Source §14 leaves those visual treatments unspecified. The component appearances in §4 are static public-page observations.
- **Page container maximum, breakpoint, logged-in application shell, and universal grid.** The supplied evidence does not establish them.
- **Documentation-centre and authenticated-project semantic application palette.** Public-surface roles only.
- **Motion duration, easing, transition, and reduced-motion.** No motion token is promoted. Promote a value only after a component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Icon token, image ratio, crop rule, overlay system, and reusable screenshot frame.** Declared-only `icomoon` and `swiper-icons` are not text families. No illustration system is derived.
- **Legacy `/ko/pricing` surface, pricing-card variants, generic inputs, and a universal card-shadow system.** None occurs in the supplied 2026-07-13 evidence, so those claims are removed rather than substituted.
