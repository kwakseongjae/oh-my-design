# IBM Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

IBM is a long-running enterprise technology company. This contract covers the three first-party Korean public surfaces the source inspected for tokens on 2026-07-13: the marketing route at `https://www.ibm.com/kr-ko`, the Cloud Support public-product route at `https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl`, and the Confluent public-product route at `https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr`. Carbon at `https://carbondesignsystem.com` is IBM's official open-source design system; Carbon documentation is distinct from the captured IBM.com product surfaces. The official typeface page at `https://www.ibm.com/design/language/typography/typeface/`, the IBM Developer typography guide at `https://www.ibm.com/brand/experience-guides/developer/brand/typography/`, the history page at `https://www.ibm.com/history/ctr-and-ibm`, and About at `https://www.ibm.com/about?lnk=intro` are named brand sources for typeface, license, and company context; they do not supply the computed interface tokens below. Every value stays attached to the surface that established it. The July 2026 capture establishes a narrower, current implementation boundary: one Korean marketing route and two public product routes; it does not represent an authenticated IBM application or every Carbon theme. Carbon documentation is authoritative design-system context, but its catalog of variants is not automatically a claim about every observed IBM.com surface. Reading those three inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating Carbon documentation plus the typeface, Developer, history, and About pages as named sources that do not automatically supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

The product routes repeatedly use IBM Plex Sans KR, full-height 48px primary actions, 4px control corners, flat surfaces, and tab/accordion structures. The captured Korean public surfaces balance dense, practical product information with a restrained visual grammar: a white and light-gray field, near-black text, precise blue actions, and modestly rounded controls. The brand's expressive layer comes principally from IBM Plex, a corporate typeface that IBM positions alongside its name and logo, while Carbon supplies the reusable component and accessibility guidance behind many of those public patterns. IBM Blue (`#0f62fe`) is the captured primary action; `#0062fe` also appears as a public link/color treatment. White (`#ffffff`) is the observed canvas; Gray 100 (`#161616`) is repeated text; muted text is `#525252`; Gray 10 (`#f4f4f4`) is the repeated layer; border is `#c6c6c6`. The hex values, IBM Plex Sans KR, 48px height, 4px corners, and the tab/accordion structures are recorded. The source's own "restrained visual grammar" wording, the "does not represent an authenticated IBM application or every Carbon theme" boundary, and the "catalog of variants is not automatically a claim" boundary are source statements. Keeping those recorded values on the surfaces that established them, rather than reading them as a house palette for every IBM or Carbon surface, is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

Brand narrative recorded by the source, kept as narrative context. IBM's own history traces the company from the 1911 Computing-Tabulating-Recording merger through its 1924 IBM name; that origin is the 1911 creation of Computing-Tabulating-Recording Company from data-processing businesses, and the company later became IBM. That long data-and-computing lineage helps explain a brand system that presents technical information as structured, durable, and internationally usable rather than fashion-led. The contemporary expression is held together by IBM Plex and Carbon. IBM calls Plex a corporate typeface and makes its source and OFL boundary available; Carbon provides the public component guidance that contextualizes buttons, tabs, and accordions. Current IBM About material presents the company's work around AI, cloud, quantum computing, and sustainability. This reference keeps those first-party narrative facts separate from the limited set of computed values collected on Korean public routes. The years, Computing-Tabulating-Recording merger, 1924 IBM name, data-and-computing lineage, Plex as corporate typeface, OFL boundary, Carbon's public component guidance, and the About framing around AI, cloud, quantum, and sustainability are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-typeface-and-About narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation. Each names a label or surface the source records. They do not come from the source's persona section.

- Read the Korean marketing route at `https://www.ibm.com/kr-ko`, including the marketing leadspace.
- Use the Cloud Support public-product CTA at `https://www.ibm.com/kr-ko/products/cloud/support?lnk=flathl`.
- Use the Confluent public-product tablist at `https://www.ibm.com/kr-ko/products/confluent?lnk=hpfp4kr`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source recorded no first-party audience research suitable for named personas, and it tells readers not to invent demographic personas. No name, age, city, occupation, or affiliation is carried into this document or its sidecar.

### Distinctive traits

- White and Gray 10 (`#f4f4f4`) layers with Gray 100 (`#161616`) text
- IBM Blue (`#0f62fe`) for the captured primary action; `#0062fe` also appears as a public link/color treatment
- IBM Plex Sans KR is the loaded, visible family on the captured Korean marketing and public-product surfaces
- Small, explicit action typography: 14px / 400 / 18.0001px with 0.16px tracking
- A mixed corner treatment: content structures are often sharp, while captured primary actions and tabs use 4px

These five traits, and the grouping that treats `#0f62fe` and `#0062fe` as two observed roles rather than one collapsed blue, are a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation. Each names the values it rests on.

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Make the action legible.** Carbon treats a button label as the statement of the action. *UI implication:* use direct sentence-case action labels rather than vague promotional nouns.
2. **Use typography as identity and information structure.** IBM positions Plex as a core brand asset and uses Mono/Sans differently in its Developer guidance. *UI implication:* use the loaded KR Sans evidence for this public-web reference; reserve other official Plex families for surfaces where their use is actually established.
3. **Keep component context intact.** Carbon's tab and accordion guidance makes their purpose and behavior explicit. *UI implication:* use tabs for related views and accordions for progressive disclosure; do not invent unobserved state variants.
4. **Separate system guidance from surface fact.** Carbon is IBM's official system, but this packet observes a bounded public web slice. *UI implication:* never overwrite product/marketing evidence with a generic component catalog.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

- Use the measured IBM Plex Sans KR public-web family when implementing the captured Korean product patterns.
- Keep the captured primary CTA at 48px high with 4px radius and the observed asymmetric padding.
- Distinguish `#0f62fe` CTA backgrounds from the separately observed `#0062fe` link treatment.
- Keep tabs and accordion behavior tied to their documented public-product routes and selector provenance.
- Use Carbon documentation for system-level guidance while preserving the actual IBM.com surface boundary.

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

- Do not reintroduce a universal 0px-radius primary-button rule for the captured public-product routes.
- Do not render Helvetica marketing-form chrome as IBM Plex or promote it to the product type token.
- Do not turn declared-only Mono, Serif, or locale faces into visible-webfont claims.
- Do not invent expanded accordion, error, modal, toast, or dashboard states from the current capture.
- Do not apply the Korean public-web measurements as a substitute for an authenticated IBM product surface.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping `#0f62fe` on the captured CTA and `#0062fe` on the separately observed link treatment rather than collapsing them, and keeping route-local state colors such as `#e8e8e8` and the darker blue CTA states on those component records rather than as universal palette tokens, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation. The hex values and recorded uses are the source's own.

- **Primary action** (`#0f62fe`): default background on the captured Cloud Support CTA; white text. Token-set path `tokens.colors.primary`.
- **Link / product accent** (`#0062fe`): observed as text and border color on the marketing and Confluent routes. It is retained as a separate observed role, not silently collapsed into the CTA value. Token-set path `tokens.colors.link`.
- **Canvas** (`#ffffff`): observed public page background and light control surface. Token-set path `tokens.colors.canvas`.
- **Foreground** (`#161616`): repeated text and border color across all three captured routes. Token-set path `tokens.colors.foreground`.
- **Muted text** (`#525252`): repeated secondary text color across all three captured routes. Token-set path `tokens.colors.muted`.
- **Layer** (`#f4f4f4`): repeated product tab/input/card-adjacent surface. Token-set path `tokens.colors.layer`.
- **Border** (`#c6c6c6`): observed tab and card boundary color. Token-set path `tokens.colors.border`.

`#e8e8e8` is the Confluent tab hover background. `#095bf4` / `#0b5df8` are route-local primary-action hover values; `#0c56e7` / `#0953e5` are route-local pressed values. They stay on those component records. They are not token-set color keys.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `xs: 8` · `sm: 12` · `md: 16` · `lg: 24` · `xl: 32` · `section: 64`.

The captured 1440px routes repeatedly expose 8, 12, 16, 24, 32, 48, and 64px spacing values. Treat these as observed rhythm candidates, not a complete responsive grid specification. `48` in that list is the measured public-product primary-action and tab height; it is not a `tokens.spacing` key. `tokens.spacing.md: 16` is a spacing step. It is not `tokens.typography.body.size` `16`, not `tokens.typography.label.lineHeight` `16`, and not the tab padding `0px 16px`. Treating the captured 8/12/16/24/32/48/64px values as observed rhythm candidates rather than a complete responsive grid specification, keeping `48` as a measured control height rather than a `tokens.spacing` key, and keeping those four writings of `16` on their own records rather than choosing one 16 as a replacement, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sharp: 0` · `control: 4`.

- Sharp (`0` / `0px`): content structures and the Cloud Support accordion header. Token-set key `tokens.rounded.sharp`.
- Control (`4` / `4px`): captured primary actions and tabs. Token-set key `tokens.rounded.control`.

`control: 4` is a radius step. It is not a spacing step. The accordion header `0px` stays on that control as well as on `tokens.rounded.sharp`. Neither was chosen over the other as a replacement. Keeping `sharp: 0` and `control: 4` as two keys, and keeping the mixed corner treatment (content often sharp; captured primary actions and tabs 4px) on those records, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

### Elevation

The representative public components in the supplied bundle report `box-shadow: none`. Token-set path `tokens.shadow.flat`. The visible hierarchy comes from white and `#f4f4f4` surfaces, text contrast, borders, and the accent action. Floating menus, dialogs, tooltips, and overlays were not captured; their elevation values are intentionally absent. Reading that as a flat treatment for the observed public components rather than a depth system, is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

### Motion

The supplied evidence records hover, pressed, focus, and tab-selected results but does not measure durations, curves, or reduced-motion behavior. Do not infer a motion scale from Carbon documentation or from static state values. Motion tokens and rules are unresolved. No motion token is promoted. The source lists no curve values. Promote a motion token for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. That five-kind gate, and the decision not to promote a motion token from this capture or from Carbon documentation, are a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | IBM's Design Language calls IBM Plex its corporate typeface and lists Sans, Mono, Serif, and Condensed subfamilies. IBM Developer separately states that Plex Mono Light is its expressive primary face and Plex Sans supports informative text. These are official brand-system facts, not proof that every current IBM.com page loads every family. |
| Live computed surface-use | The supplied 2026-07-13 capture records `IBM Plex Sans KR` as loaded/high for 485 visible elements across marketing, Cloud Support, and Confluent. `IBM Plex Sans` is also loaded/high for 25 elements. Representative measured styles include a 53.6469px/300/62.7669px marketing leadspace, 16px/400/24px product body, 14px/400/18.0001px action text with 0.16px tracking, and a 12px/400/16px marketing badge with 0.32px tracking. |
| Official distributed asset and license | IBM describes Plex as open source and directs users to its GitHub release; its Design Language says the downloadable files contain the Open Font License. This supports the typeface's distribution and license boundary, not a browser substitution. |
| Declared-only in this capture | `IBM Plex Mono`, `IBM Plex Serif`, `IBM Plex Sans Arabic`, `IBM Plex Sans Hebrew`, and `IBM Plex Sans JP` had `@font-face` sources but no visible computed use in the three captured routes. Mono and Serif remain useful official family context, but are not machine UI-family tokens here. |
| System/unresolved | A marketing newsletter input computed to `Helvetica, Arial, sans-serif`; it is kept separate as marketing-form chrome and is not represented as IBM Plex. `ibm_icons` was loaded for two icon elements; it is not typography content. |

Reading the Design Language and Developer lines as official product-use context rather than proof that every IBM.com page loads every family, reading the OFL/GitHub release as a license boundary rather than a browser substitution, reading declared-only Mono, Serif, and locale faces as official family context rather than machine UI-family tokens, and reading Helvetica / `ibm_icons` as system chrome or an icon face rather than the UI family, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

### Family

- **Current visible UI family:** `IBM Plex Sans KR`. Token-set path `tokens.typography.family.sans`.
- **Also loaded on the captured routes:** `IBM Plex Sans` (25 visible elements).
- Do not replace unavailable or unobserved brand type with a system font, and do not label Helvetica IBM Plex. The loaded KR family is canonical here only because computed visible use and loaded/high evidence agree on the three captured Korean public surfaces.

The no-substitution rule above, and the reading that the loaded KR family is canonical here only because computed visible use and loaded/high evidence agree, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

### Type roles

Token-set roles keep the source's recorded numbers. The observed-hierarchy table keeps the source's px spellings. `62.7669` is not rewritten as a ratio. `24` is not rewritten as `1.5`. Those writings sit on those records. Neither was chosen as a replacement. Keeping the token-set numbers on their own rows, the px hierarchy on its own table, and `tokens.typography.body.size` `16` as a type key rather than a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display | IBM Plex Sans KR | 53.6469 | 300 | 62.7669 | — | Marketing leadspace at the captured 1440px viewport |
| Body | IBM Plex Sans KR | 16 | 400 | 24 | — | Observed public-product body text |
| Action | IBM Plex Sans KR | 14 | 400 | 18.0001 | 0.16 | Observed primary action |
| Label | IBM Plex Sans KR | 12 | 400 | 16 | 0.32 | Observed marketing badge |

| Role | Family | Size | Weight | Line Height | Tracking | Surface |
|------|--------|------|--------|-------------|----------|---------|
| Marketing leadspace | IBM Plex Sans KR | 53.6469px | 300 | 62.7669px | — | marketing |
| Product body | IBM Plex Sans KR | 16px | 400 | 24px | — | public-product |
| Primary action | IBM Plex Sans KR | 14px | 400 | 18.0001px | 0.16px | Cloud Support and Confluent |
| Marketing badge | IBM Plex Sans KR | 12px | 400 | 16px | 0.32px | marketing |

Token-set `tokens.typography.display.size` is `53.6469`. Token-set `tokens.typography.body.size` is `16`. Token-set `tokens.typography.action.size` is `14`. Token-set `tokens.typography.label.size` is `12`. Body `16` is a type size. It is not a spacing step — `tokens.spacing.md` is the spacing key for `16`. Label line-height `16` is a type metric on that row.

### Assets

The catalog identity records `logo.type: github` and `logo.slug: IBM`. That is an identity pointer, not an IBM-hosted file and not a reusable brand download. No favicon or wordmark URL is recorded in the source body. `ibm_icons` was loaded for two icon elements; it is an icon face, not typography content. Classifying the github slug as an identity pointer rather than a hosted brand file, and keeping `ibm_icons` off the UI-family token, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Only the variants below are retained because the supplied collector evidence records their selector, surface, and computed values. Hover, pressed, and focus were captured on the public-product primary action; hover, pressed, and selected were captured on the Confluent tabs; focus and pressed were captured on the Cloud Support accordion header. The bundle did not record an accordion-panel expansion interaction, so no expanded-panel spacing, icon rotation, disabled state, or generic modal/toast/form-error variant is asserted. Loading, error, empty, disabled, success, and skeleton treatments are unresolved as values. Carbon's accordion guidance describes the broader component separately.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where not recorded on that control. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA, a tab that only selects, a disclosure header, or a marketing field that does not report commit progress — and the reason given is always that semantic one. Generic `Focus` capture is not treated as a `focus-visible` treatment. Route-local hover and pressed colors stay on those records; they are not a universal color scale. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

The source token-set declares two components: `primary-action` with `type: button`, and `product-tabs` with `type: tab`. Those primitive types are attached only to Public product primary action and Public product tabs. The other §4 records are not in the token set.

### Public product primary action

- Role: destination control that is the public product CTA on Cloud Support and Confluent
- Primitive type: `button` · Kind: interactive
- Domain: Cloud Support and Confluent public-product routes
- Background: `#0f62fe`
- Text: `#ffffff`
- Border: 1px solid transparent
- Radius: 4px
- Padding: 14px 63px 14px 15px
- Height: 48px
- Font: 14px / 400 / IBM Plex Sans KR
- Token-set font record: `14` / `400` / `18.0001` / `0.16` · Token-set use: `Observed primary action`
- Token-set path: `tokens.components.primary-action` (`type: button`, `bg: #0f62fe`, `fg: #ffffff`, `radius: 4`, `padding: 14px 63px 14px 15px`, `height: 48`, `font: 14px/400 IBM Plex Sans KR`, `states: hover/pressed/focus captured on cloud-support and confluent`, `use: Public product CTA`)
- Use: Public product CTA; selectors `surface-2::[data-omd-capture="4"]` and `surface-3::[data-omd-capture="16"]`.
- Hover: `#095bf4` on Cloud Support and `#0b5df8` on Confluent.
- Pressed: `#0c56e7` on Cloud Support and `#0953e5` on Confluent.
- Focus: 4px radius with dark-blue background and inset focus treatment; raw values are retained in `.verification.md` because the two routes differ. Generic Focus capture is not treated as a `focus-visible` treatment.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured route-local values on Cloud Support and Confluent |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public-product destination CTA; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching Cloud Support or Confluent is not an operation this control reports as success |

### Public product tabs

- Role: contained tablist on the Confluent public-product route
- Primitive type: `tab` · Kind: interactive
- Domain: Confluent public-product route
- Background: `#f4f4f4`
- Text: `#161616`
- Border: 1px solid `#c6c6c6`
- Radius: 4px
- Padding: 0px 16px
- Height: 48px
- Font: 16px / 400 / IBM Plex Sans KR
- Token-set use: `Confluent public-product tablist`
- Token-set path: `tokens.components.product-tabs` (`type: tab`, `bg: #f4f4f4`, `fg: #161616`, `border: 1px solid #c6c6c6`, `radius: 4`, `padding: 0px 16px`, `height: 48`, `font: 16px/400 IBM Plex Sans KR`, `states: hover/pressed/selected captured`, `use: Confluent public-product tablist`)
- Use: `surface-3::[data-omd-capture="10"]`, a public Confluent tablist.
- Hover: `#e8e8e8` background.
- Selected: transparent background with `#ffffff` text; the selected target panels were captured through the tab interaction.
- Pressed: observed by the collector; no universal pressed color is promoted because the evidence records route-local values only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Captured on the Confluent tablist |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Tab control; the selected panel, not this tab, reports failure |
| success | not-applicable | Same role reason: remaining the selected tab is not an operation with a success result |

### Public product accordion

- Role: flush support accordion header on the Cloud Support route
- Primitive type: not in the token set · Kind: interactive
- Domain: Cloud Support public-product route
- Text: `#161616`
- Border: 1px solid `#e0e0e0` on the item’s top edge
- Radius: 0px
- Padding: 0px 16px 0px 0px
- Height: 40px
- Font: 16px / 400 / IBM Plex Sans KR
- Use: `surface-2::[data-omd-capture="5"]`, class `cds--accordion__heading cmp-accordion__button`.
- Focus: captured on the header.
- Pressed: captured on the header.
- The bundle did not record an accordion-panel expansion interaction, so no expanded-panel spacing, icon rotation, or disabled treatment is asserted. Carbon’s accordion guidance describes the broader component separately.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web disclosure header; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable header; visual treatment omitted |
| disabled | applicable | A disclosure header whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control discloses support content; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Disclosure header; the revealed panel, not this header, reports failure |
| success | not-applicable | Same role reason: opening the accordion is not an operation with a success result on this header |

### Marketing newsletter field

- Role: newsletter field on the marketing route only
- Primitive type: not in the token set · Kind: interactive
- Domain: marketing route
- Background: `#f4f4f4`
- Text: `#161616`
- Border: 1px bottom edge `#8d8d8d`
- Radius: 0px
- Padding: 0px 16px
- Height: 48px
- Font: 14px / 400 / Helvetica, Arial, sans-serif
- Use: `home::[data-omd-capture="23"]`; a Marketo-classed field on the public marketing route.
- This form field is not promoted into the IBM Plex product token set.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a marketing field; it does not commit an operation whose in-progress state it could report |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Same role reason: a value in this field is not an operation this control reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The captured 1440px routes repeatedly expose 8, 12, 16, 24, 32, 48, and 64px spacing values. Treat these as observed rhythm candidates, not a complete responsive grid specification. Carbon’s 2x Grid is official system guidance, but the supplied artifact did not measure breakpoint-specific grid columns or a second viewport; those values remain outside this reference’s live-token scope.

For the observed public routes, use light-gray layering and clean rule boundaries before introducing shadow. Keep action controls at the measured 48px height where the public-product primary CTA pattern is appropriate. Do not infer an authenticated-product layout from the marketing or product-detail pages.

No breakpoint comparison was collected in this packet. The public primary CTA, tabs, accordion header, and marketing field were measured only at the captured 1440×900 viewport. Preserve normal responsive accessibility requirements in an implementation, but do not claim IBM-specific mobile geometry, navigation collapse, or grid changes without a separate observation.

The 53.6469px marketing leadspace, 16px product body, 14px action, 12px badge, 48px primary CTA and tabs, and 40px accordion header are desktop-capture measurements, not cross-viewport specifications. Reading the three routes as 1440×900 captures rather than a responsive system, leaving breakpoint-specific grid columns unnamed rather than filling them from Carbon’s 2x Grid, and not inferring an authenticated-product layout from the marketing or product-detail pages, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

IBM’s public design guidance favors clear, action-led labels and systematic information architecture over decorative copy. Carbon’s button guidance asks labels to communicate the action and recommends sentence case; the IBM Developer typography guidance uses code-adjacent glyphs and disciplined type to make technical communication recognizable. For IBM-style public product copy, name the task or resource, use direct verbs, and let supporting text explain the technical context. Avoid invented security certifications, performance outcomes, or informal claims of transformation.

| Context | Treatment |
|---|---|
| Primary action | Sentence-case action label that states the outcome. |
| Product detail | Direct technical noun plus a concise explanatory sentence. |
| Support disclosure | Short heading that describes the content revealed by the accordion. |

Published strings the source records, kept byte-exact:

- IBM
- IBM Plex
- IBM Plex Sans KR
- IBM Plex Sans
- IBM Plex Mono
- IBM Plex Serif
- IBM Plex Sans Arabic
- IBM Plex Sans Hebrew
- IBM Plex Sans JP
- Carbon
- Computing-Tabulating-Recording
- Computing-Tabulating-Recording Company
- Gray 10
- Gray 100
- IBM Blue
- Open Font License
- Plex Mono Light

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, and reading the Carbon button and IBM Developer typography lines as official guidance rather than a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not IBM-authored or taken from a separately published UI specification, including the published Carbon documentation.

- **Loading, error, empty, disabled, success, and skeleton treatments.** Source §14 leaves those visual treatments unspecified on the captured public routes. They are not `not-applicable`; applicability follows control meaning.
- **Expanded accordion-panel spacing, icon rotation, and generic modal/toast/form-error variants.** The bundle did not record an accordion-panel expansion interaction.
- **Authenticated IBM application and every Carbon theme.** The July 2026 capture covers one Korean marketing route and two public product routes.
- **Breakpoint-specific grid columns, a second viewport, IBM-specific mobile geometry, navigation collapse, and grid changes.** Measured only at the captured 1440×900 viewport. Carbon’s 2x Grid is official system guidance and is not a live-token measurement here.
- **Floating-menu, dialog, tooltip, and overlay elevation.** Intentionally absent.
- **Motion duration, easing, animation, and reduced-motion.** No motion token is promoted. Promote a curve only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Declared-only Plex families as machine UI-family tokens.** `IBM Plex Mono`, `IBM Plex Serif`, `IBM Plex Sans Arabic`, `IBM Plex Sans Hebrew`, and `IBM Plex Sans JP` had `@font-face` sources but no visible computed use.
- **Helvetica marketing-form chrome as IBM Plex.** Kept separate.
- **Display / body line-height writings.** Token-set `62.7669` / `24` and observed `62.7669px` / `24px` are both kept. Neither was chosen as a replacement.
