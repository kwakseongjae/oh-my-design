# Mercari Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Mercari operates a marketplace where people can list and buy items that can be shipped; its US guidance frames listing as taking photos, adding a description, and setting a price. Catalog homepage identity is `https://www.mercari.com`. Catalog `primary_color` is `#5356ee`. This contract covers three supplied public US routes from the 2026-07-12 capture: the public marketplace home `https://www.mercari.com/` (`home`, kind `public-marketplace`), the corporate-marketing about page `https://www.mercari.com/about/` (`surface-2`, kind `corporate-marketing`), and the brand-directory page `https://www.mercari.com/us/brand/` (`surface-3`, kind `brand-directory`). Every value stays attached to the surface that established it.

Treating those three URLs as this contract’s token surfaces, keeping public marketplace, corporate marketing, and brand-directory chrome as separate evidence domains, and keeping values attached to the surface that established them, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification. Mercari publishes no first-party UI design-system documentation in the source, so the toss-form close is used.

The supplied public capture shows a compact, type-led web presence rather than the former Japanese marketplace system: a near-white canvas, charcoal reading text, and a repeated indigo `#5356ee` action/link value. Averta is loaded from Mercari’s own web-assets domain throughout all three routes. The observed experience splits into three source domains—a public marketplace home, a corporate-marketing about page, and a brand-directory page—so their shared typography and controls are useful public-web evidence but not proof of an authenticated buying, selling, payment, or mobile-app system. Reading that capture as a compact, type-led public-web presence rather than the former Japanese marketplace system, and reading the shared typography and controls as useful public-web evidence but not proof of an authenticated buying, selling, payment, or mobile-app system, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification. The hex values, the Averta load, the three named routes, and the “former Japanese marketplace system” bound are the source’s record.

Mercari’s published marketplace principles connect the service to circulation and a safe, trustworthy, humane marketplace; its public guidelines express that operationally as neighborly, safe, and legal behavior. Mercari’s current marketplace-principles material states its mission as circulating forms of value to unleash people’s potential, and frames the marketplace as needing to remain diverse, free, safe, trustworthy, and humane. The same material connects the marketplace to the reuse of dormant value and a circular economy. On the public US product side, the listing guide turns that broad purpose into a practical peer-to-peer exchange: people photograph an item, describe it, price it, and choose shipping. Official marketplace principles, US guidelines, and the listing guide provide that narrative context; they do not by themselves supply interface tokens. Reading the guidelines as expressing the principles operationally as neighborly, safe, and legal behavior, reading the listing guide as turning that broad purpose into a practical peer-to-peer exchange, and classifying that mission-and-circulation narrative as context that does not by itself supply interface tokens, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification. The mission wording, the diverse / free / safe / trustworthy / humane frame, and the reuse of dormant value / circular economy connection are the source’s record of Mercari-authored material.

This reference does not add founding dates, expansion history, or claims about the Japanese app because they were not re-established by the sources reviewed in this update. No authenticated marketplace-flow, Japanese-product, responsive, or app-system claims in this update. For a public US Mercari web concept only. [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/) · [Marketplace principles](https://pj.mercari.com/principles/marketplace-principles-and-history_EN.pdf)
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks, each naming work the listing guide or the captured public surfaces already record rather than lifting source §13 archetypes into this list, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

- List items that can be shipped: taking photos, adding a description, and setting a price, then choose shipping (public listing guide).
- Buy items that can be shipped on the public marketplace home.
- Scan listing-image shells on the public marketplace home (`home::[data-testid="AnonCardImage"]`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels two entries as non-factual design archetypes derived only from the official marketplace’s buyer/seller framing; they are not demographic claims, user research, or representations of individual Mercari users. Those archetypes are not carried here and are not re-hosted in the sidecar. Observable actors follow the official marketplace framing the source already records: buyers and sellers as real people. Reading those groups as this product’s audience, keeping them out of `primary-tasks`, and carrying no name, age, city, or biography, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

### Distinctive traits

The list restates the source’s Key Characteristics. The values are recorded; the grouping is a derived editorial implementation inference from the verified surfaces — it is not Mercari-authored or a separately published UI specification.

- Loaded **Averta** across the three supplied public US routes, with Mercari-hosted font sources
- Repeated public action/link value `#5356ee`; it is an observed public-web value, not an asserted global brand token
- Near-white canvas with `#222222` foreground and `#6b6b6b` muted text
- Small `4px` action corners, `8px` image corners, and isolated circular icon controls
- Public marketplace, corporate marketing, and brand-directory chrome kept as separate evidence domains
- No authenticated marketplace-flow, Japanese-product, responsive, or app-system claims in this update

### Principles

The three stems rest on Mercari-authored marketplace principles and US guidelines the source cites. Each *UI implication* is a derived editorial implementation inference from those documents and the verified surfaces; the implications are not Mercari-authored or a separately published UI specification. Mercari publishes no first-party UI design-system documentation in the source, so the toss-form close is used for the UI implications.

1. **Circulate value through a marketplace.** Mercari’s official principles connect exchanges of dormant value with a circular economy. *UI implication:* make the transaction task and its next step legible; do not introduce decorative claims in place of item information.

2. **Keep peer-to-peer exchange neighborly.** The marketplace guidelines say buyers and sellers are real people and ask participants to represent themselves and their items accurately. *UI implication:* favour direct labels, truthful item details, and understandable conditions over ambiguous promotional language.

3. **Safety is a condition of marketplace freedom.** Mercari’s principles treat a safe environment as necessary for free transactions, while the US guidelines direct users to keep communication in the app. *UI implication:* safety boundaries should be clear and contextual, not hidden in decorative reassurance.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Mercari-authored or a separately published UI specification.

- Use Averta only where the verified family can be loaded from an appropriately licensed source.
- Keep `#5356ee` scoped to the observed public-web action/link contexts, rather than treating it as a complete product palette.
- Retain source-domain provenance when using the public-home, corporate-marketing, or brand-directory observations.
- Use the 8px radius only for the observed listing image shell, not as a general card rule.

### Avoid

The source states these as its Don’t list, plus one brand constraint that appears only in its Agent Prompt Guide. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Mercari-authored or a separately published UI specification.

- Do not revive the former Japanese semantic-red system, JP typography stack, or token inventory from a different capture.
- Do not reuse the corporate-marketing sell action as a checkout, payment, listing-submit, or mobile-app CTA.
- Do not carry Truste cookie-consent controls or dialogs into a Mercari component system.
- Do not invent responsive, error, success, disabled, motion, or authenticated-marketplace variants.
- Do not generate a mobile marketplace flow, checkout, payment, seller workflow, status system, or Japanese-product design from this reference; the supplied evidence does not establish them.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow `tokens.colors`. Where a line also characterizes a value — observed public-web rather than global brand token, fill of skip/sell controls, catalog `primary_color` as the same hex, or the capture not establishing a universal filled CTA from that identity field — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

- **Public action/link** (`#5356ee`): repeated text and border value on the marketplace home, corporate-marketing page, and brand directory. It appears as the fill of the observed marketing skip/sell controls and as text on public links. Token-set key `tokens.colors.public-action`. Catalog `primary_color` is the same hex. The capture does not establish a universal filled CTA from that identity field.
- **Canvas** (`#ffffff`): observed on the marketplace sell action and repeated public surface/background samples. Token-set key `tokens.colors.canvas`.
- **Foreground** (`#222222`): repeated public text value, including the marketplace sell action and search field. Token-set key `tokens.colors.foreground`.
- **Muted text** (`#6b6b6b`): observed in compact marketplace navigation/footer text. Token-set key `tokens.colors.muted`.

The capture does not establish the earlier red/blue semantic palette, success/error colors, a universal filled CTA, or a global product color architecture. Values from third-party Truste consent controls (`#ecedf1`, `#dcdde0`) are excluded; their presence on the pages is not Mercari product evidence.

### Spacing

Token-set steps, unitless: `xs 4 · sm 6 · md 12 · lg 16 · xl 20`. The supplied 1440×900 capture’s measured spacing clusters at 4, 6, 12, 16, and 20px. The selector-backed actions above use 0px 16px or 6px 16px padding. Keeping those unitless steps beside the px cluster, and refusing to turn the cluster into a product grid or page-width rule, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `none 0 · compact 4 · image 8 · circular 50`. Named uses the source records:

- None (0px): header text action radius
- Compact (4px): action corners on the marketplace sell action, corporate-marketing sell action, and skip link
- Image (8px): observed listing image shell only — not as a general card rule
- Circular (50 / 50%): isolated circular icon controls

4px action corners, 8px image corners, and isolated circular icon controls are local observed geometry, not a universal radius scale. That local-not-universal reading is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

### Elevation

The selector-backed public controls and listing-image shell have `box-shadow: none`. Token-set key `tokens.shadow.none: none`. The evidence does not establish a card elevation, menu, sheet, modal, tooltip, or z-index scale. The only captured dialogs belong to third-party cookie consent and are excluded from Mercari depth guidance. Reading that stack as a flat treatment for these observed elements only is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

### Motion

No Mercari motion duration, easing curve, transition, or reduced-motion treatment was captured on the selector-backed public components. Motion guidance is intentionally absent pending product-surface evidence. No motion token is promoted.

A future motion pass may promote an omitted duration, curve, or reduced-motion behavior only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Mercari.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | **Averta** is the computed family on 902 captured elements across the public marketplace, corporate-marketing, and brand-directory surfaces. The supplied FontFaceSet/source evidence includes Mercari-hosted light, regular, semibold, and bold WOFF/WOFF2 URLs, so Averta is the verified public-web UI family in this reference. |
| Official product-use | no first-party announcement reviewed in this pass states that Averta is the native mobile-app or authenticated-marketplace family. This reference does not make that promotion. |
| Font-publisher context and license boundary | Foundry5 lists Averta PE among its families and publishes a commercial EULA covering webfont `@font-face` use. That publisher material does not grant readers a Mercari font-file license or establish that its retail package is the exact CDN build. [Foundry5](https://foundryfivetype.com/) · [EULA](https://foundryfivetype.com/eulas/) |
| Declared-only | `averta-bold` has a declared face in the supplied evidence but zero observed visible uses; it is not a separate token. `averta-semibold` and `averta-regular` are loaded aliases associated with the verified Averta family. |
| System/unresolved | the capture’s Arial fallback declarations have no independent loaded/source corroboration and are not promoted. Do not substitute a system face and label it Averta. |
| Outside these captures | Type beyond the three supplied public US routes remains outside these captures. Naming only those source-established routes as the capture boundary, rather than opening a surface the source never named, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification. |

### Family

- **Current visible UI family:** `Averta`. Token-set key `tokens.typography.family.sans`.
- **Loaded source boundary:** Averta is loaded from Mercari’s own web-assets domain throughout all three routes; Mercari-hosted light, regular, semibold, and bold WOFF/WOFF2 URLs corroborate the load.
- Do not replace unavailable or unobserved brand type with Averta. It is canonical here only because computed visible use and loaded FontFace/source evidence agree on the three supplied public US routes. Do not substitute a system face and label it Averta. That canonical-only-because reading, and the substitution ban, are a derived editorial implementation inference from the verified surfaces; they are not Mercari-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---|---|---|
| Public body/link | Averta | 14px | 400 | 20px (1.43) | `-0.16px` | Repeated public-site body and link text on the supplied US surfaces. |
| Corporate header action | Averta | 16px | 600 | 22px (1.38) | | Observed corporate-marketing header text action only. |
| Corporate display | Averta | 48px | 600 | 57.6px (1.2) | | Observed corporate-marketing display heading only. |

YAML `tokens.typography.body.lineHeight: 1.43`, `header-action.lineHeight: 1.38`, and `marketing-display.lineHeight: 1.2` stay unitless ratios; the source also writes 20px, 22px, and 57.6px beside them, and both forms stay. They are never converted to a single px form. The capture also contains isolated sizes; it does not establish a universal type scale beyond the roles above. Keeping those ratios as ratios, refusing a single px conversion, and refusing a universal type scale, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

YAML `use` strings restored verbatim: `Repeated public-site body and link text on the supplied US surfaces.`, `Observed corporate-marketing header text action only.`, `Observed corporate-marketing display heading only.`

### Assets

- Catalog logo entry: `type: github`, `slug: mercari`. Classing that entry as an identity pointer rather than a Mercari-hosted brand file in this packet is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.
- Foundry5 lists Averta PE and publishes a commercial EULA covering webfont `@font-face` use. That publisher material does not grant readers a Mercari font-file license. Treating Foundry5 as font-publisher context rather than a Mercari-owned type family is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

No authenticated product workflow was captured. The supplied collector records only public-route selector snapshots and third-party cookie-consent dialogs; it does not establish Mercari empty, loading, error, success, skeleton, or disabled treatments. Do not manufacture those states from the colors or controls above. The collector recorded three dialog interactions, all triggered from Truste cookie-consent controls. Those third-party dialogs are deliberately excluded. No authenticated-marketplace button, checkout, input, product-card metadata, toast, modal, error, success, disabled, or mobile component variant has source-backed provenance in this update.

Declared interactive components still declare Core §4.4 applicability by control role, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source recorded a selector-backed snapshot. Absence of a capture is not a `not-applicable` reason. Generic `Focus` is not treated as a `focus-visible` treatment. This is not a complete state-coverage claim. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

### Marketplace sell action

- Role: public marketplace-home sell action
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Domain: public marketplace home only
- Background: `#ffffff`
- Text: `#222222`
- Radius: 4px
- Padding: `0px 16px`
- Font: 14px / 600 / Averta
- Token-set font: `14px/600 Averta`
- Height: 32px-high
- Use: `home::[data-omd-capture="12"]`, a 32px-high public marketplace-home action only.
- Token-set states: Default baseline captured; no changed interaction style promoted.
- Token-set use: Observed default at home::[data-omd-capture="12"] on the public marketplace home only.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public marketplace home |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader toward listing; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a sell destination is not an operation with a success result |

### Circular icon action

- Role: public-home icon control. Its semantic purpose is not named in the supplied artifact.
- Kind: interactive
- Domain: public marketplace home
- Background: transparent
- Text: `#000000`
- Radius: 50%
- Padding: 0px
- Font: 16px / 400 / Averta
- Height: 40px-high
- Use: `home::[data-omd-capture="6"]`, a 40px-high public-home icon control. Its semantic purpose is not named in the supplied artifact.
- Observed: default only
- No YAML primitive type: this control is in the source body, not in `tokens.components`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the public marketplace home |
| hover | applicable | Pointer-web icon control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An icon control can be gated; treatment omitted |
| loading | not-applicable | This icon control does not commit an operation whose in-progress state it could report |
| error | not-applicable | This icon control does not report an operation failure |
| success | not-applicable | This icon control does not report an operation success |

### Listing image shell

- Role: the image element of the anonymous public-home listing cards
- Primitive type: `card` · YAML `type: card`
- Domain: public marketplace home only
- Background: transparent
- Radius: 8px
- Shadow: none
- Use: `home::[data-testid="AnonCardImage"]`, the image element of the anonymous public-home listing cards.
- Token-set use: Observed image shell at home::[data-testid="AnonCardImage"] on the public marketplace home only.
- No card container fill, metadata, price, or state specification was captured.
- No kind and no applicability map: the source supplies no interaction evidence for this image shell, so neither is decided here.

### Marketing sell action

- Role: corporate-marketing sell action. It is not a marketplace transaction CTA.
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Domain: corporate-marketing route only
- Background: `#5356ee`
- Text: `#ffffff`
- Radius: 4px
- Padding: `0px 16px`
- Font: 14px / 600 / Averta
- Token-set font: `14px/600 Averta`
- Height: 32px-high
- Use: `surface-2::[data-omd-capture="11"]`, a 32px-high corporate-marketing action only. It is not a marketplace transaction CTA.
- Token-set states: Default baseline captured; no changed interaction style promoted.
- Token-set use: Observed default at surface-2::[data-omd-capture="11"] on the corporate-marketing route only.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the corporate-marketing route |
| hover | applicable | Pointer-web destination control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control is not a marketplace transaction CTA; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a marketing destination is not an operation with a success result |

### Header text action

- Role: corporate-marketing header control
- Kind: interactive
- Domain: corporate-marketing route only
- Background: transparent
- Text: `#222222`
- Radius: 0px
- Padding: 0px
- Font: 16px / 600 / Averta
- Height: 22px-high
- Hover: Text `#5356ee` at `surface-2::[data-omd-capture="7"]::state-hover`
- Pressed: Text `#5356ee` at `surface-2::[data-omd-capture="7"]::state-pressed`
- Use: `surface-2::[data-omd-capture="7"]`, a 22px-high corporate-marketing header control. The stated hover and pressed values are collector snapshots for this selector only.
- No YAML primitive type: this control is in the source body and in `tokens.typography.header-action`, not in `tokens.components`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on the corporate-marketing route |
| hover | applicable | Pointer-web header control; selector-backed text `#5356ee` at `::state-hover` |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A header control can be gated; treatment omitted |
| loading | not-applicable | This control is a header destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching a header destination is not an operation with a success result |

### Skip link

- Role: public-route accessibility skip-link; it is not a standard primary action.
- Primitive type: `button` · YAML `type: button` · Kind: interactive
- Domain: public routes
- Background: `#5356ee`
- Text: `#ffffff`
- Radius: 4px
- Padding: `0px 16px`
- Font: 16px / 600 / Averta
- Token-set font: `16px/600 Averta`
- Height: 44px-high
- Focus: identical visible values at `home::[data-omd-capture="3"]::state-focus`
- Use: `home::[data-omd-capture="3"]`, a 44px-high public-route accessibility control; it is not a standard primary action.
- Token-set states: Default and an identical focus snapshot captured; no distinct focus value promoted.
- Token-set use: Observed skip-link default and identical focus snapshot at home::[data-omd-capture="3"] on public routes.
- The identical `state-focus` snapshot is a generic focus capture. It is not promoted as a `focus-visible` treatment.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured default on public routes |
| hover | applicable | Pointer-web skip-link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable accessibility control; no distinct focus-visible value is promoted from the identical focus snapshot |
| disabled | not-applicable | Skip-to-content control; it is not a gated command |
| loading | not-applicable | This control jumps to in-page content; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Skip-link role; jumping to content is not an operation this control reports as failure |
| success | not-applicable | Same role reason: reaching in-page content is not an operation with a success result |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied 1440×900 capture exposes public routes only. Measured spacing clusters at 4, 6, 12, 16, and 20px; the selector-backed actions above use 0px 16px or 6px 16px padding. No captured evidence establishes a product grid, page-width rule, breakpoint, mobile navigation, or authenticated listing layout, so those rules are omitted.

Only a 1440×900 viewport was supplied. No mobile viewport, breakpoint, layout transition, touch-target policy, or safe-area behavior was observed. Responsive behavior is therefore not specified. The 32px-high marketplace and marketing sell actions, 40px-high circular icon action, 22px-high header text action, and 44px-high skip link are desktop-capture measurements, not cross-viewport specifications. Reading those heights as desktop-capture measurements rather than a cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Mercari’s reviewed public guidance is neighborly, practical, and safety-conscious. The marketplace guidelines address buyers and sellers as real people, ask them to represent items accurately, and structure safety/legal rules in plain language. The listing guide is similarly procedural: photos, description, price, then shipping. [Marketplace guidelines](https://www.mercari.com/us/help_center/article/407/) · [Listing guide](https://www.mercari.com/us/help_center/topics/listing/guides/creating-a-listing/). That characterization of the reviewed guidance, and the tone table below, are a derived editorial implementation inference from the verified surfaces; they are not Mercari-authored or a separately published UI specification. The quoted lines themselves are Mercari-authored public copy.

| Context | Observed direction |
|---------|--------------------|
| Marketplace guidance | Address participants directly and concretely. |
| Listing assistance | Sequence the next practical action without hype. |
| Safety policy | Name the boundary and the reason for it plainly. |

Voice samples are quoted or closely paraphrased from the cited public pages; they are not an authenticated-product copy specification.

- “Keep it neighborly.” — public marketplace guideline.
- “Keep it safe.” — public marketplace guideline.
- “Just take some photos, add a description, and set the price.” — public listing guide.

Limiting voice samples to those three quoted public lines, rather than expanding them into an authenticated-product copy specification, is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification.

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

These are named values the source already opened, not permissions to invent, and not a list of domains the source never established. That framing is a derived editorial implementation inference from the verified surfaces; it is not Mercari-authored or a separately published UI specification:

- earlier red/blue semantic palette, success/error colors, a universal filled CTA, and a global product color architecture
- hover, pressed, disabled, loading, error, success, empty, skeleton, toast, and modal visual treatments except the header-text-action hover/pressed snapshots and the skip-link identical focus snapshot
- product grid, page-width rule, breakpoint, mobile navigation, authenticated listing layout, mobile viewport, layout transition, touch-target policy, and safe-area behavior
- card elevation, menu, sheet, modal, tooltip, and z-index scale
- motion duration, easing curve, transition, and reduced-motion treatment. Promote a motion value for a component only after that component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed
- authenticated-product copy beyond the three quoted public guideline lines
- founding dates, expansion history, and Japanese-app claims not re-established by the sources reviewed in this update
