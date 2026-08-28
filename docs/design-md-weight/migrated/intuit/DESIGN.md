# Intuit QuickBooks Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

QuickBooks is Intuit’s small-business financial-management product and brand program. This contract covers the three first-party public surfaces the source inspected for tokens on 2026-07-13: the official QuickBooks brand hub at `https://design.intuit.com/quickbooks/brand/`, the public product-expression route at `https://design.intuit.com/quickbooks/product/`, and the Intuit authentication surface at `https://federation.intuit.com/as/authorization.oauth2?scope=openid+profile+email&response_type=code&redirect_uri=https%3A%2F%2Fpartnerauth.platform.intuit.com%2Fexternal_partner%2Fintuit_eiam%2Fcallback&client_id=9d678f82-f00e-4e8f-875e-484cac84cbc1&state=awb.228bcc57-93dd-4b7c-8691-6e252452f1e8`. The official hub describes its job as helping teams craft experiences that champion small businesses, while Intuit situates QuickBooks inside a broader financial-technology platform. The YAML token-set note records that machine tokens are limited to selector-backed values in the supplied three-surface capture; the QuickBooks brand hub, product-expression route, and authentication route are separate evidence domains; no interaction state was captured. The source records QuickBooks Design as an official brand hub covering visual foundations, product expression, resources, and accessibility, distinct from an authenticated QuickBooks application specification. Official pages named for brand context — QuickBooks typography at `https://design.intuit.com/quickbooks/brand/design-foundations/type/`, Intuit origins at `https://www.intuit.com/company/origins/`, Intuit operating values at `https://www.intuit.com/company/operating-values/`, and the resources page — do not supply the computed interface tokens below. Every value stays attached to the surface that established it. The supplied capture is desktop-only at 1440×900. The source states that this capture does not establish an accounting-app shell, transaction flow, subscription checkout, or post-login dashboard. Reading those three inspected routes as this contract’s token surfaces, keeping values attached to the surface that established them, treating the typography, origins, operating-values, and resources pages as named brand sources that do not automatically supply computed interface tokens, and reading the brand hub as distinct from an authenticated QuickBooks application specification, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

The recognizable expression is not a generic bank dashboard. QuickBooks frames its familiar logo as a green light for possibility and pairs that optimistic cue with candid small-business photography, playful industry illustration, approachable language, and a deliberate, balanced type voice. Its current design material is a working brand hub rather than a frozen identity archive, with product expression, accessibility, motion, resource libraries, and review office hours gathered around the same small-business mission. The captured public layer uses loaded `Avenir Next forINTUIT`, ink `#000000` on transparent square navigation, canvas `#ffffff` / `#FFFFFF`, muted `#6b6c72` / `#6B6C72`, brand-hub link `#055393`, and dark-action `#0d333f` / `#0D333F` on the outlined product-expression action. The official hub calls the QuickBooks mark a metaphorical green light and offers a separate color-guideline resource, but the supplied computed-style artifact does not expose a selector-backed green hex. Green is therefore useful brand narrative, not a machine color token here. The single low-frequency orange and blue values on the authentication surface are likewise not promoted into the QuickBooks brand set. The hex values, the loaded family, the 84px / `28px 0px` navigation geometry, the 52px outlined action, and the 1440×900 viewport are recorded. Calling the expression not a generic bank dashboard, calling the current material a working brand hub rather than a frozen identity archive, keeping recorded values on the surfaces that established them rather than as a house palette for every Intuit surface, reading green as brand narrative rather than a machine color token, and keeping the authentication-surface orange and blue values off the QuickBooks brand set, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Intuit began in 1983 when Scott Cook and Tom Proulx built Quicken after observing the difficulty of balancing a family checkbook. The company’s own history describes a progression from DOS to web, mobile, cloud, and AI while holding customer problems at the center. QuickBooks is one of the products through which that broader platform serves small businesses. This sits within Intuit’s longer evolution from personal-computing finance software through web, mobile, cloud, and AI services. QuickBooks’ brand hub translates that financial-confidence story into a focused small-business expression: its logo signals possibility, its photography shows real customers in their own environments, and its illustrations bring playful charm to industries and people. That is a brand and marketing narrative; it should not be mistaken for proof of any unobserved product workflow. The year 1983, Scott Cook, Tom Proulx, Quicken, the family checkbook, the DOS-to-web-mobile-cloud-and-AI progression, customer problems at the center, QuickBooks as one product on that platform, the personal-computing-finance evolution, the logo-as-possibility, real-customer photography, playful industry illustration, and the closing sentence that this is a brand and marketing narrative rather than proof of any unobserved product workflow are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-brand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source’s persona section.

- Read the official QuickBooks brand hub at `https://design.intuit.com/quickbooks/brand/`.
- Use the public product-expression route at `https://design.intuit.com/quickbooks/product/`.
- Use the Intuit authentication surface named in the supplied capture.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its figures as product-context archetypes derived from official statements about QuickBooks serving small businesses; they are not research-validated personas or claims about a particular screen, so those biographies are dropped rather than promoted, and no name, occupation, or affiliation classification is carried into this document or its sidecar. What the source independently records is the audience at a group level: small businesses. Reading that source-named group as this product’s audience is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Intuit-authored or a separately published UI specification.

- Loaded `Avenir Next forINTUIT` (203 visible uses) on brand-hub body, button, card, heading, list-item, and text roles
- Ink `#000000` on transparent square navigation; canvas `#ffffff` / `#FFFFFF`; muted `#6b6c72` / `#6B6C72`; brand-hub link `#055393`
- Dark action / dark text `#0d333f` / `#0D333F` on the 52px outlined product-expression action
- Brand-hub tile heading 40px / 600 / 52px; body and global-navigation tab 16px / 400 / 24px
- Global-navigation tab: transparent, `#000000`, radius `0px`, padding `28px 0px`, height `84px`, `role="button"`
- Product-expression outlined action: 52px high, `#0D333F` text/border, 4px radius, `0px 28px` padding
- Flat captured representative: `box-shadow: none` on the promoted navigation tab
- Desktop capture at 1440×900; 80px global-navigation band and 60px secondary navigation band

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Start with the customer problem.** Intuit’s history says it falls in love with customer problems rather than solutions. *UI implication:* make the next meaningful task easy to identify before adding explanatory chrome.
2. **Champion small businesses.** QuickBooks frames its design mission around small businesses. *UI implication:* write benefits in terms of practical progress, clarity, and confidence.
3. **Use hierarchy sparingly.** The official type guidance recommends fewer sizes and a limited weight range. *UI implication:* let one clear heading/body/action relationship do the work before adding more display treatments.
4. **Protect trust and understanding.** Intuit’s operating values include customer obsession and integrity without compromise. *UI implication:* make consequential choices legible and avoid ambiguous financial language.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

- Use the loaded `Avenir Next forINTUIT` family when recreating the measured public brand-hub samples.
- Keep the role-button navigation tab square, transparent, and tied to its observed 84px / `28px 0px` geometry.
- Treat `#0D333F`, `#000000`, `#FFFFFF`, `#6B6C72`, and `#055393` as public-surface observations with their listed local roles.
- Use sentence case by default, in line with the official QuickBooks type guidance.

### Avoid

The source states these four as its Don’t list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

- Do not substitute Arial, Proxima Nova, iconfont, or a system fallback as if it were the loaded Avenir family.
- Do not derive QuickBooks green, an app-dashboard palette, a checkout flow, or a universal spacing scale from this capture.
- Do not invent hover, focus, pressed, disabled, error, or expanded styling: interaction count is zero.
- Do not merge authentication-surface anomalies into the QuickBooks brand tokens.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source’s own labels. Pairing each hex to the token-set path named beside it, keeping the table’s uppercase spellings (`#0D333F`, `#FFFFFF`, `#6B6C72`) beside the token-set lowercase spellings (`#0d333f`, `#ffffff`, `#6b6c72`), keeping green as brand narrative rather than a machine color token, and keeping authentication-surface orange and blue values off the QuickBooks brand set, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

- **Dark action / dark text** (`#0d333f` / `#0D333F`): observed as text and border on the 52px outlined product-expression action, and as a repeated dark background value on public brand/product routes. Token-set path `tokens.colors.dark-action`.
- **Ink** (`#000000`): repeated public brand-hub text, navigation, and border value. Token-set path `tokens.colors.ink`.
- **Canvas** (`#ffffff` / `#FFFFFF`): repeated public-surface text/border and white surface value. Token-set path `tokens.colors.canvas`.
- **Muted text** (`#6b6c72` / `#6B6C72`): repeated public brand/product text value. Token-set path `tokens.colors.muted`.
- **Brand-hub link blue** (`#055393`): observed on the public brand-hub logo link. Token-set path `tokens.colors.brand-link`.

The official hub calls the QuickBooks mark a metaphorical green light and offers a separate color-guideline resource, but the supplied computed-style artifact does not expose a selector-backed green hex. Green is therefore useful brand narrative, not a machine color token here.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `tile-text-bottom: 20` · `secondary-action-x: 28` · `global-nav-y: 28`.

`tokens.spacing.tile-text-bottom: 20` is the measured 20px bottom margin on brand-hub tile heading and body text. It is not a universal product grid. `tokens.spacing.secondary-action-x: 28` is the 28px horizontal padding on the product-expression outlined action (`0px 28px`). `tokens.spacing.global-nav-y: 28` is the 28px vertical padding on the brand-hub global-navigation tab (`28px 0px`). Those two writings of `28` sit on two keys. Neither was chosen as a replacement. The 80px global-navigation band and the 60px secondary navigation band are layout measurements; they are not `tokens.spacing` keys. Treating the three token-set steps as local measured relationships rather than a complete spacing scale, keeping the two writings of `28` on their own keys, and keeping `80` / `60` off the spacing token-set, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `square: 0` · `secondary-action: 4`.

- Square (`0` / `0px`): brand-hub global-navigation tab. Token-set key `tokens.rounded.square`.
- Secondary action (`4` / `4px`): product-expression outlined action. Token-set key `tokens.rounded.secondary-action`.

`square: 0` is a radius step. It is not a spacing step. The navigation tab `0px` stays on that control as well as on `tokens.rounded.square`. `secondary-action: 4` is a radius step. It is not `tokens.spacing.secondary-action-x: 28`. The outlined action `4px` stays on that control as well as on `tokens.rounded.secondary-action`. Neither pair was chosen as a replacement. Keeping `square: 0` and `secondary-action: 4` as two keys, and keeping the nav-tab `0px` and the outlined-action `4px` on those records, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

### Elevation

The promoted global-navigation tab has `box-shadow: none`, and its default surface is transparent. Token-set path `tokens.shadow.flat`. Do not infer a card-shadow scale or overlay recipe from the public hub; the supplied capture has not established one. Reading `box-shadow: none` as a flat treatment for the observed navigation tab rather than a depth system, and not inferring a card-shadow scale or overlay recipe from the public hub, is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.

### Motion

QuickBooks’ brand hub says motion can create feelings of passion and optimism, but the supplied raw evidence reports zero interactions and exposes no duration, delay, easing, or reduced-motion values. No motion token is therefore defined. Keep implementation motion purposeful and verify any timing or easing against a relevant official surface before treating it as QuickBooks guidance. The source lists no curve values. Promote a motion token for a component only after that component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. That five-kind gate, the keep-purposeful and verify-against-an-official-surface instruction, and the decision not to promote a motion token from this capture, are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | QuickBooks names Avenir Next for Intuit as its official primary font. Its typography guidance calls it balanced, timeless, modern, and contemporary, and recommends a restrained weight range with a 4px design grid. |
| Live computed surface-use | The supplied capture records `Avenir Next forINTUIT` as loaded/high confidence, with 203 visible uses across body, button, card, heading, list-item, and text roles. The computed family is backed by FontFaceSet and Intuit CDN font-source evidence; this is the only family promoted to machine tokens. |
| Official distributed brand asset | The QuickBooks resources page provides a font-library download route, but says assets require SSO. It establishes that a controlled font library exists; it does not grant a public redistribution licence in this reference. |
| Declared-only | `iconfont` and Proxima Nova faces are declared on the authentication domain with zero visible observed use. They are not QuickBooks UI-family substitutes or tokens. |
| System/unresolved | Arial appears once as a system stack on the authentication surface. It is not promoted or substituted for the loaded Avenir family. |

Reading the official primary-font and 4px-grid lines as official product-use context rather than a complete type-scale token, reading the SSO-controlled library as an access boundary rather than a public redistribution licence, reading declared-only `iconfont` and Proxima Nova as authentication-domain faces rather than QuickBooks UI-family tokens, and reading Arial as system chrome rather than the loaded Avenir family, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Avenir Next forINTUIT`. Token-set path `tokens.typography.family.ui`.
- **Official product name:** Avenir Next for Intuit.
- **Loaded source boundary:** Intuit CDN face source `https://lib.intuitcdn.net/fonts/AvenirNext/3.0/AvenirNextforINTUIT-Regular.1.woff2`; the family is loadable in the captured brand-hub surface.
- Do not replace unavailable or unobserved brand type with Arial, Proxima Nova, iconfont, or a system fallback. The loaded Avenir family is canonical here only because computed visible use and loaded FontFace/source evidence agree.

The no-substitution rule above, and the reading that the loaded Avenir family is canonical here only because computed visible use and loaded FontFace/source evidence agree, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

### Type roles

Token-set roles keep the source’s recorded numbers. The observed-hierarchy table keeps the source’s px spellings. `52` is not rewritten as a ratio. `24` is not rewritten as `1.5`. Those writings sit on those records. Neither was chosen as a replacement. Keeping the token-set numbers on their own rows, the px hierarchy on its own table, and `tokens.typography.body.size` `16` and `tokens.typography.nav.size` `16` as type keys rather than spacing steps, is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display | Avenir Next forINTUIT | 40 | 600 | 52 | — | Observed brand-hub tile heading |
| Body | Avenir Next forINTUIT | 16 | 400 | 24 | — | Observed brand-hub body and tile text |
| Nav | Avenir Next forINTUIT | 16 | 400 | 24 | — | Observed brand-hub global-navigation tab |

| Role | Family | Size | Weight | Line height | Provenance |
|---|---|---:|---:|---:|---|
| Brand-hub tile heading | Avenir Next forINTUIT | 40px | 600 | 52px | `home::h2` |
| Brand-hub body/tile text | Avenir Next forINTUIT | 16px | 400 | 24px | `home::p` and body samples |
| Global-navigation tab | Avenir Next forINTUIT | 16px | 400 | 24px | `home::[data-omd-capture="1"]` |

Token-set `tokens.typography.display.size` is `40`. Token-set `tokens.typography.body.size` is `16`. Token-set `tokens.typography.nav.size` is `16`. Body `16` and nav `16` are type sizes. They are not spacing steps — `tokens.spacing.tile-text-bottom` is the spacing key for `20`, and the two `28` keys are `tokens.spacing.secondary-action-x` and `tokens.spacing.global-nav-y`.

### Assets

- Catalog identity records `logo.type: favicon` and `logo.slug: "https://www.google.com/s2/favicons?domain=intuit.com&sz=128"`. That is an identity pointer, not an Intuit-hosted brand file and not a reusable QuickBooks download.
- Official distributed font asset: `https://lib.intuitcdn.net/fonts/AvenirNext/3.0/AvenirNextforINTUIT-Regular.1.woff2`.
- Candid small-business photography and playful industry illustration are first-party brand-hub imagery; do not replace them with invented brand-color decoration.
- The QuickBooks resources page provides a font-library download route that requires SSO; it does not grant a public redistribution licence in this reference.

Classifying the favicon slug as an identity pointer rather than a hosted brand file, keeping the SSO-controlled library off a public-licence claim, and keeping candid photography and playful industry illustration as first-party brand-hub imagery rather than replacing them with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The supplied evidence contains 21 default component variants across the three public surfaces, but interaction coverage is zero. The selector-backed static component below is promoted because its role, geometry, family, and default visual values were measured; hover, focus, pressed, disabled, error, and expanded values are omitted. The source token-set declares one component: `global-nav-tab` with `type: button`. That primitive type is attached only to Global Navigation Tab. The product-expression outlined action is not in the token set.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control’s role makes the state meaningless — a destination navigation tab or a destination outlined action that does not commit an in-page operation — and the reason given is always that semantic one. Generic `Focus` capture is not treated as a `focus-visible` treatment. This is not a complete state-coverage claim.

Promoting the selector-backed static component because its default visual values were measured, omitting unobserved interaction treatments as values, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

### Recorded state-content practices

No QuickBooks state styling is established by the supplied capture. The following content practices are implementation guidance derived from the documented clarity and customer-support principles, not observed component specifications. The source marks skeleton and disabled as unnamed values in this table. That derived-guidance reading, and the decision to keep these rows as content practices rather than as visual treatments or as a complete state-coverage claim, are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

| State | Guidance boundary |
|---|---|
| Empty — no records | Name the missing thing and a next step; do not assign an unobserved icon or color. |
| Empty — filtered out | Explain that the filter caused the result and offer a reset path. |
| Loading — initial | Preserve the task context; no skeleton geometry or motion value is verified. |
| Loading — refresh | Keep already available information readable where the product permits; no visual treatment is specified here. |
| Error — recoverable | State what did not complete and give a concrete retry or correction action. |
| Error — access | Explain the access boundary without inventing an authentication-error component. |
| Error — validation | Describe the relevant field or issue plainly; no error color or focus style is verified. |
| Success | Confirm the completed outcome in sentence case; no success icon or color is verified. |
| Skeleton | No selector-backed skeleton shape, color, or animation was captured. |
| Disabled | No disabled visual value or state was captured. |

### Global Navigation Tab

- Role: brand-hub global-navigation tab; a `div` with `role="button"`
- Primitive type: `button` · Kind: interactive
- Domain: QuickBooks brand hub
- Background: transparent
- Text: `#000000`
- Radius: `0px`
- Padding: `28px 0px`
- Height: `84px`
- Font: `16px / 400 / Avenir Next forINTUIT`
- Token-set font record: `16` / `400` / `24` · Token-set use: `Observed brand-hub global-navigation tab`
- Token-set path: `tokens.components.global-nav-tab` (`type: button`, `bg: transparent`, `fg: #000000`, `radius: 0px`, `padding: 28px 0px`, `height: 84px`, `font: 16px / 400 / Avenir Next forINTUIT`, `states: Default snapshot only; interaction count 0, so hover, focus, pressed, and disabled variants are not observed.`, `use: Brand-hub global-navigation tab with role=button; selector home::[data-omd-capture=1]`)
- Use: Brand-hub global-navigation tab; `home::[data-omd-capture="1"]`, a `div` with `role="button"`.
- Observed: default only. `box-shadow: none`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the brand-hub global-navigation tab |
| hover | applicable | Pointer-web navigation control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a brand-hub navigation tab; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination navigation tab; the destination, not this tab, reports failure |
| success | not-applicable | Same role reason: remaining the selected tab is not an operation this control reports as success |

### Product-expression Outlined Action

- Role: destination outlined action on the public product-expression route
- Primitive type: not in the token set · Kind: interactive
- Domain: product-expression route
- Text / border: `#0D333F`
- Radius: `4px`
- Padding: `0px 28px`
- Height: `52px`
- Use: a secondary public action observed at 52px high with `#0D333F` text/border, a 4px radius, and `0px 28px` padding; it is a separate product-expression sample. Token-set path `tokens.spacing.secondary-action-x` and `tokens.rounded.secondary-action` name its padding and radius; this control is not in `tokens.components`.
- Observed: default only.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the product-expression route |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a public product-expression destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the product-expression destination is not an operation this control reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The public brand hub uses an 80px global-navigation band followed by a 60px secondary navigation band in the supplied desktop capture. Its tile content repeatedly gives heading and body text a 20px bottom margin; this is a measured local relationship, not a universal product grid. Token-set path `tokens.spacing.tile-text-bottom`. On the separate product-expression route, the captured outlined action uses 28px horizontal padding and a 4px corner radius. Token-set paths `tokens.spacing.secondary-action-x` and `tokens.rounded.secondary-action`. The brand-hub global-navigation tab uses `28px 0px` padding; token-set path `tokens.spacing.global-nav-y`. The evidence does not establish mobile breakpoints, accounting-workspace columns, authenticated navigation, or a general spacing scale.

The supplied capture is desktop-only at 1440×900. It proves the observed desktop navigation and action geometry at that viewport, but no breakpoint, touch target, responsive type scale, or small-screen rearrangement is verified. The official type page documents marketing and product responsive scales as assets, yet their numeric values are not available as raw text in the evidence supplied for this reference and are not reconstructed here.

The 84px global-navigation tab, 52px outlined action, 80px / 60px navigation bands, and 40px tile heading are desktop-capture measurements, not cross-viewport specifications. Reading the three routes as 1440×900 captures rather than a responsive system, leaving the official marketing and product responsive-scale numerics unnamed rather than reconstructing them, and keeping `tokens.spacing.tile-text-bottom: 20` as a local tile relationship rather than a universal product grid, are derived editorial implementation inferences from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

QuickBooks’ official brand hub describes its voice as friendly and understanding, while its type guidance asks for sentence case and reserves all caps for short emphasis. Use a clear, helpful, benefit-led tone; this is a content-direction reading of official guidance, not a captured interface copy deck. That content-direction reading, and the decision to keep the illustrative lines below as non-official examples rather than as a captured interface copy deck, are a derived editorial implementation inference from the verified surfaces; they are not Intuit-authored or a separately published UI specification.

| Do | Don't |
|---|---|
| Lead with the customer’s next useful outcome. | Make financial work sound needlessly technical or distant. |
| Use sentence case for ordinary UI copy. | Use long all-caps headlines. |
| Make emphasis short and legible. | Treat the QuickBooks name itself as a colored emphasis device. |

Illustrative, non-official examples based on that guidance:

- “See what needs your attention today.”
- “Keep your cash flow in view.”
- “Review the details before you continue.”

Published strings the source records, kept byte-exact:

- QuickBooks
- Intuit
- Avenir Next for Intuit
- Avenir Next forINTUIT
- Quicken
- Scott Cook
- Tom Proulx
- See what needs your attention today.
- Keep your cash flow in view.
- Review the details before you continue.

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Naming the list from the source’s own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not Intuit-authored or a separately published UI specification.

- **Selector-backed green hex.** The official hub calls the QuickBooks mark a metaphorical green light; the supplied computed-style artifact does not expose a selector-backed green hex.
- **Hover, focus, pressed, disabled, error, and expanded visual treatments.** Interaction count is zero. They are not `not-applicable`; applicability follows control meaning.
- **Accounting-app shell, transaction flow, subscription checkout, and post-login dashboard.** The supplied capture does not establish those surfaces.
- **Mobile breakpoints, accounting-workspace columns, authenticated navigation, and a general spacing scale.** Source §5 leaves those unnamed as values.
- **Breakpoint, touch target, responsive type scale, and small-screen rearrangement.** Measured only at the captured 1440×900 viewport. The official type page documents marketing and product responsive scales as assets; their numeric values are not available as raw text here.
- **Card-shadow scale and overlay recipe.** `tokens.shadow.flat` is `none` on the promoted navigation tab.
- **Skeleton shape, color, or animation; disabled visual value.** Source §14 leaves those unresolved.
- **Motion duration, delay, easing, and reduced-motion.** No motion token is promoted. Promote a curve only after a component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Declared-only `iconfont` and Proxima Nova, and authentication-surface Arial, as QuickBooks UI-family tokens.**
- **Public redistribution licence for the SSO-controlled font library.**
- **Display / body / nav line-height writings.** Token-set `52` / `24` and observed `52px` / `24px` are both kept. Neither was chosen as a replacement.
