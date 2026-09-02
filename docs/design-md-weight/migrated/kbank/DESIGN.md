# K bank Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

K bank is South Korea’s first internet-only bank. This contract covers the five distinct public product URLs the source inspected for tokens on 2026-07-13, plus a duplicate home snapshot: the public-web home at `https://www.kbanknow.com/web/web-home/home/main`, the deposit-index at `https://www.kbanknow.com/web/product/info/list?tab=deposit`, the curious-saving page at `https://www.kbanknow.com/web/product/deposit/curious-saving`, the rolling-farm page at `https://www.kbanknow.com/web/product/deposit/rolling-farm`, and the ONE card page at `https://www.kbanknow.com/web/product/card/one-card`. The YAML token-set note records that product tokens are selector-backed values from the supplied six-route public-web capture; the official resource center corroborates the two blue brand colors and Pretendard K Edition as a brand font, but does not create extra product components or states. The official resource center at `https://brand.kbanknow.com/resource.html`, the official brand story at `https://brand.kbanknow.com/`, and the official culture story are retained as context and asset evidence. The source states that the evidence does not cover the authenticated app, transfer journeys, account management, documentation chrome, or native UI, and that brand marketing, the resource center, and culture writing are not silently converted into generic banking components or product states. Every value stays attached to the surface that established it. Reading those five inspected product routes plus the duplicate home snapshot as this contract's token surfaces, keeping values attached to the surface that established them, and treating the resource center, brand story, and culture writing as named context and asset sources that do not create extra product components or states, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

The official brand story describes a “pleasant financial life” built from the basics of banking—rates and fees—then carries that promise into everyday rewards, investment, safety, and connected services. The public-web product capture has a more restrained job than that broad marketing story: it uses a white canvas and black chrome with two blue actions, while product information pages mix the loaded K bank webfont with system-stack controls. K bank’s own resource center makes the blue pair and Pretendard K Edition part of its brand expression; its culture writing adds a participatory way of working. These sources explain the brand’s current public expression, but only the supplied selector-backed product capture establishes the tokens and components below. Calling the public-web capture more restrained than the marketing story, and reading the white canvas, black chrome, two blue actions, and the webfont-with-system-stack mix as that public expression rather than as proof of every banking control, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. K bank’s official culture story identifies the company as South Korea’s first internet-only bank. Its current brand story frames the evolution not as finance for finance’s sake, but as a pleasant daily financial life: better basics, rewards woven into ordinary moments, access to investment, and reassurance around customers’ assets. That public expression is supported by a resource center that gives the brand a consistent visual vocabulary—deep and secondary blue, a K identification icon, and Pretendard K Edition—while distinguishing logo/asset guidance from the public-web UI. The public product routes in this reference show only a bounded web slice of that system; they do not prove the design of protected banking work or the native app. The first-internet-only-bank identification, the pleasant-daily-financial-life framing, the resource-center vocabulary, and that closing pair of sentences — a bounded web slice, and that those routes do not prove protected banking work or the native app — are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, and classifying them as source-grounded service audiences rather than fictional biographies, is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification. Each is a source-grounded service audience the source records. They are not fictional user profiles.

- Everyday banking customer: the brand story addresses spending, rewards, and routine money management; protected-flow requirements were not captured.
- Customer exploring savings, cards, or investment: public product pages and the brand story cover these offerings, without establishing a unified dashboard UI.
- Customer seeking reassurance: the brand story speaks to security and asset confidence; specific support or fraud-response flows remain unobserved.
- Internal contributor: the culture story documents employees participating in defining shared working practices, an organizational stakeholder rather than an end user.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source establishes source-grounded service audiences, not fictional user profiles, and leaves project-specific names, ages, cities, and affiliation classifications unspecified. No name, age, city, or affiliation classification is carried into this document or its sidecar. What the source independently records as those service audiences is those same four groups: Everyday banking customer; Customer exploring savings, cards, or investment; Customer seeking reassurance; Internal contributor. Refusing to promote individual personas, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key characteristics. The values are measured; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not K bank-authored or a separately published UI specification.

- White public-web canvas and black structural text
- Official dark-blue `#0114A7` and secondary blue `#4262FF`, both observed on separate public actions
- Pretendard K Edition is the loaded public-web family; selected product controls also expose an operating-system stack
- Flat, selector-local controls: 8px and 10px action corners coexist with 0px tabs and utility controls

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not K bank-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Make the financial basics feel worthwhile.** The brand story foregrounds rates, fees, and practical benefits. *UI implication:* lead public product pages with the customer value, then keep conditions readable.
2. **Connect finance to daily life.** The brand explicitly places banking around shopping, meals, rewards, and ordinary routines. *UI implication:* use concrete scenarios in public education without trivializing regulated detail.
3. **Protect confidence while broadening access.** The brand combines approachable benefits with asset reassurance, IT, and AI-security messaging. *UI implication:* do not reuse campaign exuberance as a substitute for clear security and transaction states.
4. **Build shared language through participation.** The culture story documents collective input into K bank’s way of working. *UI implication:* retain provenance and evidence boundaries so product, brand, and design teams can review decisions together.

### Application rules

The source states these three as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not K bank-authored or a separately published UI specification.

- Keep the two blue action treatments tied to their public-web selector and surface provenance.
- Use Pretendard K Edition only where loaded public-web evidence or official brand guidance applies.
- Use the official resource center for logo and K icon treatment, keeping those assets separate from product-control tokens.

### Avoid

The source states these as its Don't lists. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not K bank-authored or a separately published UI specification.

- Do not generalize captured public actions to transfer, account, login, or native-app flows.
- Do not invent interaction states, a responsive grid, a general card family, or a documentation system from these static routes.
- Do not render a system fallback or `swiper-icons` as a verified K bank-branded typeface.
- Do not treat playful campaign language as the verified voice of every banking flow.
- Do not fabricate executive quotations, customer promises, or error-state language.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping official `#0114A7` / `#4262FF` / `#FFFFFF` / `#000000` beside token-set `#0114a7` / `#4262ff` / `#ffffff` / `#000000`, keeping `#E0E6F1` / `#EDF1F7` / `#F7F9FD` / `#2848DF` off the promoted set, and attaching surfaces from the YAML claim anchors rather than from the role name, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Surface attachments follow the YAML claim anchors, not the role name.

- **Primary** (`#0114a7` / `#0114A7`): official primary color in K bank’s resource center; also the computed fill of the 48px public primary action. Token-set path `tokens.colors.primary`. Claim surface: home.
- **Secondary** (`#4262ff` / `#4262FF`): official secondary color in the same resource center; also the computed fill of the 40px compact action. Token-set path `tokens.colors.secondary`. Claim surface: home.
- **Canvas** (`#ffffff` / `#FFFFFF`): observed page canvas and action-label color. Token-set path `tokens.colors.canvas`. Claim surface: home.
- **Foreground** (`#000000`): observed public-web structural text and transparent-control border color. Token-set path `tokens.colors.foreground`. Claim surface: home.

The resource center additionally lists `#E0E6F1`, `#EDF1F7`, and `#F7F9FD` as brand grayscale and `#2848DF` for the icon’s dark-mode treatment. They are official brand/asset guidance, not tokens promoted from the supplied product capture.

### Spacing

YAML spacing stays on its own key path. The compact-action inline step is `tokens.spacing.compact-action-inline: 14` (claim surface: home). The wide-action inline step is `tokens.spacing.wide-action-inline: 28` (claim surface: product-curious). Those numbers are not a global scale. The measured compact and primary actions use `0px 14px` and `0px 28px` on those controls. The bundle also contains 2px, 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 32px, and 100px spacing observations; the source states their semantics are not promoted into a global scale. Keeping each YAML number on its own key path, keeping the `0px 14px` / `0px 28px` paddings on the actions that established them, and refusing to promote the bundle observations into a global scale, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

### Shape

- compact-action: 8 — Token-set path `tokens.rounded.compact-action`. Claim surface: home.
- primary-action: 10 — Token-set path `tokens.rounded.primary-action`. Claim surface: product-curious.
- selected-tab: 0 — Token-set path `tokens.rounded.selected-tab`. Claim surface: product-index.

The selected product tab is square (`0px`) with `10px 4px 12px` padding. The product-index bordered choice is 6px with `0px 12px` padding; that 6px is this choice's local radius, not a token-set rounded key. Keeping those local radii on their components, and keeping `tokens.rounded.compact-action: 8` / `tokens.rounded.primary-action: 10` / `tokens.rounded.selected-tab: 0` on their own key paths, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

### Elevation

The selector-backed public-home shell and all promoted action/tab samples have `box-shadow: none`. Token-set path `tokens.shadow.none`. Claim surface: home. This is a route-level flatness observation, not a shadow scale for native banking, brand marketing, or unobserved panels. Reading that stack as route-level flatness, and keeping a shadow scale off the promoted set, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

### Motion

No motion, transition, easing, or interaction expansion appears in the supplied raw evidence. No motion token is promoted. The observed selected tab is not proof of a tab transition or easing curve. Treating the selected-tab observation as an element-state record rather than a motion token, and leaving reduced-motion behavior unnamed, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Holding that five-kind per-component gate, and treating a partial confirmation as insufficient, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product/brand-use | K bank’s resource center designates Pretendard K Edition for its consistent brand image and permits Pretendard as an alternate. This is official brand guidance, not a license grant or proof of every app surface. |
| Live computed surface-use | Pretendard K Edition is `loaded` with high confidence, 58 observed uses, and four first-party WOFF2 sources on the supplied public-web routes. It is the sole UI-family token because both computed use and FontFaceSet/source evidence are present. |
| Live system use | `-apple-system` is a high-confidence operating-system stack on 181 observed public-page elements, including product-detail controls. It remains system evidence rather than a K bank family or a substitute for Pretendard K Edition. |
| Declared-only | `swiper-icons` has a data-URL `@font-face` declaration and zero visible uses. It is not a text-family token. |
| Official distributed asset / license | No separately downloadable K bank font asset or font-license terms were located in the official material reviewed. The resource-center font statement remains useful brand evidence but does not authorize rehosting or substitution. |

Reading Pretendard as an officially named alternate rather than the captured UI family, reading the official-use designation as brand guidance rather than a license grant or proof of every app surface, reading Pretendard K Edition as the sole UI-family token because both computed use and FontFaceSet/source evidence are present, classing `-apple-system` as system evidence rather than a K bank family, classing `swiper-icons` as declared-only rather than a brand face, leaving a downloadable license unnamed, and reading the resource-center font statement as not authorizing rehosting or substitution, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard K Edition` — Token-set path `tokens.typography.family.ui`. Claim surface: home.

Do not replace Pretendard K Edition with a system substitute, and do not present `-apple-system` or `swiper-icons` as Pretendard K Edition. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

### Type roles

YAML `tokens.typography.body.lineHeight` is `normal` and stays `normal` (A1a). YAML `tokens.typography.product-display.lineHeight` is `59.4px` and stays `59.4px`. The §3 table's `16px` / `44px` spellings sit beside YAML sizes `16` and `44`; one is not a replacement of the other. Token-set `use` strings are kept verbatim. Surface attachments follow the YAML claim anchors. The selected-product-tab row is a §3 measurement on the deposit index; it is not a YAML typography key. Keeping YAML `normal` and `59.4px` in those forms, keeping the YAML singles and the §3 px spellings on separate readings, attaching surfaces from the YAML claim anchors, and keeping the 18px tab on the deposit index rather than on a YAML body or display key, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | Claim surface |
|---|---|---:|---:|---|---|---|---|
| Public-web body / compact action | Pretendard K Edition | 16 (`16px`) | 400 | normal | | Observed public-web home body and compact action control; do not generalize to native or authenticated banking. | home |
| Public deposit display | Pretendard K Edition | 44 (`44px`) | 700 | 59.4px | -0.22px | Observed on the supplied public deposit-product pages only. | product-curious |
| Selected product tab | Pretendard K Edition | 18px | 700 | 24.3px | | not a YAML typography key | product-index |

The 16px body size is not `tokens.spacing` and is not the 16px system-stack font on the product-curious primary action. The 44px display size is the public deposit display on the supplied deposit-product pages. The 18px / 700 / 24.3px tab is the deposit-index selected tab. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing or another surface's control, is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

### Assets

- Official resource-center assets the source names: logo, K-bank identification icon, logo spacing, light/dark icon colors, and media-kit material. The icon guide says the K position is visually adjusted and should not be moved; it is brand-asset guidance for identifying K bank, including transfer screens, rather than a general application icon library. The supplied product collector does not identify a named SVG set, illustration ratio, or icon-component geometry. `swiper-icons` is declared but unused and must not be substituted for a K bank text or icon token. Reading the icon-guide K-position rule as brand-asset guidance rather than a general application icon library, and refusing to substitute `swiper-icons` for a K bank text or icon token, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.
- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kbanknow.com&sz=256`. That slug is an identity pointer, not a K bank-hosted brand file and not a substitute for the official logo or K identification icon. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.
- The official brand resource asks that logo visibility be considered against its background. That asset rule is not evidence for control contrast, accessible names, landmarks, or mobile behavior. Reading that visibility rule as asset guidance rather than evidence for control contrast, accessible names, landmarks, or mobile behavior is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

| Category | Evidence boundary |
|---|---|
| Empty | no public product empty state captured |
| Loading | no loading state captured |
| Error: validation | no validation state captured |
| Error: transaction or service interruption | no operational-error state captured |
| Success | no public product success state captured |
| Skeleton | no skeleton state captured |
| Disabled | no disabled control captured |
| Focus | no focus-visible state captured |
| Pressed | no pressed state captured |
| Hover | no hover state captured |
| Selected tab | Public deposit-index `aria-selected="true"` only; no selection-change interaction captured. |

The collector reports `interactionCount: 0` and no interaction records. The selected tab is an element-state observation, not an observed tab-change interaction. No menu, dialog, validation, toast, responsive, hover, focus, pressed, disabled, or authenticated-product variant is claimed. The compact and primary actions pair white text with `#4262FF` and `#0114A7`; this reference does not substitute for a contrast or accessibility audit. A future implementation needs accessible focus and state treatments designed and verified on the relevant flow.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `Focus` row in the source table is not `focus-visible` treatment evidence; that row records that no focus-visible state was captured, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination public action, a tab, a bordered choice, or a full-width text button that commits no operation in place — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, the refusal to treat the white-on-blue pairing as a contrast or accessibility audit, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Public compact action

- Role: Public compact action
- Primitive type: not in the token set · Kind: interactive
- Background: `#4262FF`
- Text: `#FFFFFF`
- Radius: `8px`
- Padding: `0px 14px`
- Height: `40px`
- Font: `16px / 400 / Pretendard K Edition`
- Observed: Default only; no hover, pressed, focus, or disabled state captured.
- Use: `home::[data-omd-capture="3"]`; the same fingerprint occurs across the supplied public routes.
- Claim surface: home
- The 40px height, `8px` radius, and `0px 14px` padding are this action's geometry. They are not the 48px / `10px` / `0px 28px` primary action, and the 14px is not `tokens.spacing.wide-action-inline: 28`. Reading those figures as this action's geometry rather than the primary action or the wide-action spacing key is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A public action can be gated; visual treatment omitted |
| loading | not-applicable | Destination public action; it commits no operation in place |
| error | not-applicable | Destination public action; it commits no operation in place |
| success | not-applicable | Destination public action; it commits no operation in place |

### Public primary action

- Role: Public primary action
- Primitive type: not in the token set · Kind: interactive
- Background: `#0114A7`
- Text: `#FFFFFF`
- Radius: `10px`
- Padding: `0px 28px`
- Height: `48px`
- Font: `16px / 400 / system stack` on `product-curious::[data-omd-capture="19"]`; the duplicate home snapshot uses a 14px Pretendard K Edition instance.
- Observed: Default only; no hover, pressed, focus, or disabled state captured.
- Use: Supplied public deposit and card-product pages; this does not establish an authenticated-flow CTA.
- Claim surface: product-curious
- The 48px height, `10px` radius, and `0px 28px` padding are this action's geometry on the supplied deposit and card-product pages. The `16px / 400 / system stack` font is the product-curious capture. The 14px Pretendard K Edition instance is the duplicate home snapshot. Those two font readings stay on the surfaces that established them. Reading the 48px / `10px` / `0px 28px` figures as this action's product-page geometry, and keeping the 16px system-stack font on product-curious rather than on the duplicate home 14px Pretendard instance, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A public action can be gated; visual treatment omitted |
| loading | not-applicable | Destination public action; it commits no operation in place |
| error | not-applicable | Destination public action; it commits no operation in place |
| success | not-applicable | Destination public action; it commits no operation in place |

### Product index tab

- Role: Product index tab
- Primitive type: not in the token set · Kind: interactive
- Text: `oklch(0.47 0.024 264.308)`
- Radius: `0px`
- Padding: `10px 4px 12px`
- Height: `44px`
- Font: `18px / 700 / Pretendard K Edition`
- Observed: Selected is observed through `aria-selected="true"`; no transition or alternate tab state was captured. The selected observation is an element-state, not an observed tab-change interaction.
- Use: `product-index::[data-omd-capture="14"]` on the public deposit index.
- Claim surface: product-index
- The 44px height, `0px` radius, `10px 4px 12px` padding, and `18px / 700` font are this tab's geometry on the deposit index. They are not the 40px compact action or the 18.72px product-detail text button. Reading those figures as this tab's geometry rather than another control is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A product-index tab commits no operation in place |
| error | not-applicable | A product-index tab commits no operation in place |
| success | not-applicable | A product-index tab commits no operation in place |

### Product-index bordered choice

- Role: Product-index bordered choice
- Primitive type: not in the token set · Kind: interactive
- Background: `oklch(1 0 0)`
- Text: `oklch(0.301 0.016 264.308)`
- Border: `1px solid oklch(0.87 0.02 267.27)`
- Radius: `6px`
- Padding: `0px 12px`
- Height: `32px`
- Font: `16px / 400 / system stack`
- Observed: Default only; no interaction state captured. Medium-confidence collector fingerprint, retained with its exact source boundary.
- Use: `product-index::[data-omd-capture="21"]`
- Claim surface: product-index
- The 32px height, `6px` radius, and `0px 12px` padding are this choice's geometry. The `6px` is not `tokens.rounded.compact-action: 8` or `tokens.rounded.primary-action: 10`. Reading those figures as this choice's geometry rather than a token-set radius is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web choice; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable choice; visual treatment omitted |
| disabled | applicable | A choice can be gated; visual treatment omitted |
| loading | not-applicable | A bordered choice commits no operation in place |
| error | not-applicable | A bordered choice commits no operation in place |
| success | not-applicable | A bordered choice commits no operation in place |

### Product-detail full-width text button

- Role: Product-detail full-width text button
- Primitive type: not in the token set · Kind: interactive
- Text: `#000000`
- Radius: `0px`
- Padding: `16px 20px`
- Height: `60px`
- Font: `18.72px / 700 / system stack`
- Observed: Default only; no expansion or pressed state captured.
- Use: `product-curious::[data-omd-capture="14"]`, repeated on the supplied deposit and card product pages.
- Claim surface: product-curious
- The 60px height, `16px 20px` padding, and `18.72px / 700 / system stack` font are this control's geometry on the supplied deposit and card product pages. They are not the 44px deposit display or the 18px selected tab. The source does not name an expansion behavior. Reading those figures as this control's geometry, and refusing to name an unobserved expansion, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web text button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A text button can be gated; visual treatment omitted |
| loading | not-applicable | A full-width text button commits no operation in place |
| error | not-applicable | A full-width text button commits no operation in place |
| success | not-applicable | A full-width text button commits no operation in place |

### Public home shell

- Role: Observed static home shell
- Primitive type: `card`
- Background: `transparent`
- Radius: `0px`
- Shadow: `none`
- Size: `1365px × 840px`, no padding
- Token-set use: `Observed static home shell at home::div.mainCardWrapper.css-x2jyed; not a general card family.`
- Claim surface: home
- Kind: non-interactive — Observed static home shell; not a general card family. No state-applicability map.
- The `1365px × 840px` size, `0px` radius, transparent background, and `none` shadow are this shell's geometry on the home route. They are not a reusable product-card or grid contract. Reading those figures as this static shell rather than a general card family is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied collector uses a `1440×900` viewport on the home, product index, two deposit pages, and the ONE card page. The second home record is a duplicate URL, not a breakpoint or a distinct surface. The home’s `mainCardWrapper` is a measured static shell (`1365px × 840px`, no padding, 0px radius), not a reusable product-card or grid contract. Public product-page measurements include 44px tabs and 40px/48px action controls. No mobile breakpoint, authenticated layout, or responsive rule was captured. Reading the `1440×900` figure as the collector viewport on those named pages rather than as a breakpoint or a cross-viewport specification, and reading the second home record as a duplicate URL rather than a distinct surface, are derived editorial implementation inferences from the verified surfaces; they are not K bank-authored or a separately published UI specification.

The 40px compact action is the home compact action. The 48px primary action is the product-page primary action. The 44px tab is the deposit-index tab. The 32px bordered choice is the product-index choice. The 60px text button is the product-detail text button. The `1365px × 840px` shell is the home `mainCardWrapper`. Reading those heights as surface measurements rather than cross-viewport specifications is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official brand story writes about rates, fees, everyday rewards, investment, and safety in short, conversational Korean: financial life should feel closer, easier, and more pleasant. It pairs that accessible public register with precise product explanations and terms on the public product pages. K bank-inspired public marketing can explain a concrete everyday benefit plainly, but this does not establish copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors.

- **Everyday and benefit-led:** the brand story grounds financial features in shopping, meals, rewards, and daily situations.
- **Reassuring but specific:** public pages pair cheerful benefit language with product conditions and legal information.
- **Participatory internally:** the official culture story describes employees gathering perspectives to define a shared way of working.

Explain a public benefit through a concrete financial situation. Keep conditions and eligibility explicit when a product page needs them. Separate public marketing language from regulated or operational copy. Reading that register as this contract's voice, and reading the opening bound — that this does not establish copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors — rather than as a separately published K bank microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

Published names the source records, kept byte-exact: K bank, “pleasant financial life”, Pretendard K Edition, Pretendard, ONE card, `swiper-icons`, `-apple-system`.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not K bank-authored or a separately published UI specification.

- reusable hover, pressed, focus, disabled, loading, empty, validation-error, operational-error, success, and skeleton visual treatments
- menu, dialog, toast, responsive, and authenticated-product variants
- motion duration, easing curve, reduced-motion behavior, and a tab-transition curve
- a downloadable K bank font asset or font-license terms
- a named SVG set, illustration ratio, or icon-component geometry
- a contrast or accessibility audit
- copy rules for regulated disclosures, transaction confirmations, eligibility decisions, or errors
- a unified dashboard UI; specific support or fraud-response flows
- brand grayscale `#E0E6F1` / `#EDF1F7` / `#F7F9FD` and icon dark-mode `#2848DF` as product tokens
- bundle spacing observations 2px, 3px, 4px, 6px, 8px, 10px, 12px, 16px, 20px, 24px, 28px, 32px, and 100px as a global scale
- mobile breakpoint, authenticated layout, or responsive rule
- getdesign.md/kbank and styles.refero.design records
