# Pinterest Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Pinterest is a visual discovery platform for searching, saving, and shopping ideas. This contract covers two current first-party public captures: the signed-out consumer/auth route at `https://kr.pinterest.com/` (`home` and `surface-2`) and Pinterest Business marketing at `https://business.pinterest.com/ko/` (`surface-3`). Catalog homepage identity is `https://www.pinterest.com`. Gestalt (`https://gestalt.pinterest.systems`) is Pinterest’s public design system for product teams. Using Gestalt as official product-system context in this capture, and not promoting Gestalt component tokens from it, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. Official brand guidance is at `https://business.pinterest.com/en-in/brand-guidelines/`.

The source token note records that consumer product/auth and Pinterest Business marketing are separate source domains. Applying that note as “no route-local value is generalized across them” in this contract is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

The next paragraph is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. The supplied consumer capture is read as expressing that discovery role with an image-led, low-chrome surface: warm plum ink, quiet olive-gray supporting text, a single red action, and compact rounded account controls.

The signed-out consumer/auth route uses loaded `Pin Sans`, `#211922` ink, `#e60023` consumer action, and `#e5e5e0` secondary surface. Pinterest Business is a separate marketing surface with loaded `PinterestSansPro`, `#111111` actions, 30px pills, and a selected-tab treatment. Documenting those route-local facts side by side without treating business lead-generation chrome as consumer-product UI is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

Pinterest’s public Gestalt introduction frames the product as helping people create a life they love. The public business explanation describes Pins as the image, video, and link-bearing units that connect browsing to action — saving, clicking, and buying. Current official campaign coverage continues that position: inspiration is presented as a step toward life away from the screen rather than an end in itself. Official brand guidance fixes the recognizable mark as a white script P in a red circle and limits black or white versions to constrained-colour contexts. Reading that narrative as explaining the documented mark and product purpose, and as not authorizing additional UI tokens, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=2 lang=en -->
### Primary tasks

- Search, save, and shop ideas on the signed-out consumer/auth route.
- Move from visual browsing to saving, clicking, or buying through Pins, as the public business explanation describes.
<!-- design-md:claim-end -->

### Audience

Official sources checked for this update describe people discovering ideas, shoppers, creators, and businesses at a group level, but do not provide verified user-persona definitions. Restricting Audience to those stakeholder groups, tying observable work only to the two primary tasks, and not promoting invented demographic personas, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

### Distinctive traits

- Consumer action `#e60023` on `Pin Sans` 16px-radius controls; Pinterest Business filled action `#111111` on 30px `PinterestSansPro` pills
- Consumer ink `#211922` and muted `#62625b`; business marketing ink `#111111`
- Consumer secondary surface / secondary-action `#e5e5e0`; consumer auth-input border `#91918c`
- Business marketing tab 12px radius with selected text `#ffffff`
- Official badge: white script P in a red circle

### Principles

These four items are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification.

1. **Visual discovery should lead to action.** *UI implication:* retain image/video-first content context where it is actually supplied; do not replace it with generic dashboard chrome.
2. **Inspiration is the product promise.** *UI implication:* make consumer action language practical and supportive, using the first-party guidance rather than invented hype.
3. **The badge retains its circle and colour treatment.** *UI implication:* do not recolour, outline, or add effects to the Pinterest mark.
4. **Source domains stay distinct.** *UI implication:* business-marketing typography and 30px actions are not defaults for consumer product/auth controls.

Official brand-guideline rules (first-party, not the numbered list): keep the Pinterest badge in its red circle; pair external uses with an account context or call to action; do not recolor, outline, or add effects to the badge; black or white versions are limited to constrained-colour contexts.

Capture-bound application: this list is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. Source-domain values (`Pin Sans` / `#211922` / `#e60023` / `#e5e5e0` / 16px; `PinterestSansPro` / `#111111` / 30px) stay in Distinctive, Foundations, and Type roles. Agent-prompt wrappers (“For a consumer … use”, “For a Pinterest Business … use”, “Do not blend the two into a claimed single system”) are deleted.

- Name the surface before reusing a value: signed-out consumer/auth, or Pinterest Business marketing.
- Let visual content carry the discovery story rather than inventing unobserved decorative chrome.

### Avoid

First-party brand-guideline Don’ts:

- Do not recolor, outline, or add effects to the Pinterest badge.

The remaining items are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification.

- Do not represent a Pinterest Business action as an observed consumer-product CTA.
- Do not substitute a system or third-party font for a named Pinterest family.
- Do not promote business `#111111` as a consumer-product substitute.
- Do not treat catalog Simple Icons identity as a captured first-party mark file.
- Do not promote `Google Sans`, `HaasGrotDisp`, `HaasGrotText`, `PinterestSans`, `PinterestSansLC`, `PinterestSansTPJ`, or `PinterestUI` as consumer or business UI families.
- Do not infer hover, focus, pressed, disabled, menu, dialog, validation, masonry-column count, card ratio, breakpoint, or a responsive grid from this snapshot.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Consumer signed-out/product-auth (`home`, `surface-2`):

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification.

- **Primary / consumer action** (`#e60023`): consumer primary-action background on `home` and `surface-2`. Catalog `primary_color` is this hex. It is not a Pinterest Business filled-action color.
- **Consumer ink** (`#211922`): signed-out/product-auth ink. It is not the consumer action label.
- **Muted** (`#62625b`): consumer muted-text sample.
- **Secondary surface** (`#e5e5e0`): consumer secondary-action background. Same hex as that control’s fill; it is not a second canvas.
- **Control border** (`#91918c`): consumer auth-input border. Same hex as that field’s border; it is not general ink.
- **Canvas** (`#ffffff`): observed consumer canvas. The same hex is also recorded as observed consumer canvas/action text and as the business outline surface. Captured consumer primary and secondary action labels are `#000000`. Keeping those control foregrounds unmerged from this canvas/action-text observation is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

Pinterest Business marketing (`surface-3`):

- **Business ink / filled-action** (`#111111`): business-marketing ink and filled-action background. Not treating that hex as a consumer-product substitute is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.
- **On-action** (`#ffffff`): text on the filled business action. Same hex as Canvas. Keeping the roles unmerged into one ink for every string is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

### Spacing

Observed source-bound set: `4 / 8 / 12 / 20px`.

### Shape

- Consumer account and form control: 16px
- Business marketing tab: 12px
- Business marketing action: 30px

Treating those radii as observations of separate domains, not a universal radius prescription, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

### Elevation

The retained consumer controls have `box-shadow: none`. Business marketing action samples include a 2px `#111111` outline-like shadow. No filled-action selector is recorded for that shadow. Reading that observation as not a shared elevation scale, not a general border token, not a consumer-control copy, and not a local field of the harvested filled Business marketing action is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

### Motion

No motion duration, easing curve, transition, or reduced-motion rule is supported by the supplied raw capture or the official sources checked for this update. No motion token is claimed. Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Pinterest-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | Gestalt is official product-system context for product teams. This capture does not promote a Gestalt typography token. |
| Live consumer computed use | `Pin Sans` is loaded/high confidence with 118 visible uses across body, heading, input, button, text, and toggle roles. The collector matches computed family use to eight Pinterest-hosted `s.pinimg.com/font/Pin-Sans-*` files. It is the consumer UI family token. |
| Live business-marketing computed use | `PinterestSansPro` is loaded/high confidence with 199 visible uses across body, buttons, headings, list items, tabs, and text. The collector matches it to four Pinterest-hosted `Pinterest-Sans-Pro-*` files. It remains a business-marketing family token rather than a consumer-family replacement. |
| Official distributed asset | Pinterest-hosted files include `https://s.pinimg.com/font/Pin-Sans-Regular.ttf` and `https://s.pinimg.com/font/Pinterest-Sans-Pro-Regular.otf`. Hosting does not grant downstream reuse. |
| Declared-only | `HaasGrotDisp`, `HaasGrotText`, `PinterestSans`, `PinterestSansLC`, `PinterestSansTPJ`, and `PinterestUI` have captured `@font-face` sources but zero visible use. No specimen or UI token is inferred. |
| Unresolved embedded face | One Google Sign-In control reports `Google Sans` with no matching loaded FontFace or Pinterest source. It is third-party chrome and is not a Pinterest token. |
| Licence boundary | The official search found Pinterest-hosted font files but no first-party public licence granting downstream reuse of Pin Sans or PinterestSansPro. The family names and observed metadata are recorded; the files are not reusable project assets. |

### Family

- **Consumer UI family:** `Pin Sans`
- **Business-marketing family:** `PinterestSansPro`

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. Do not replace an unavailable named Pinterest family with a system or third-party face, and do not present a fallback as Pin Sans or PinterestSansPro. Do not use the business-marketing family as a consumer-family replacement.

### Type roles

Verified line-height is the unitless YAML ratio `1.50` on the consumer auth form. It scales with font size and is not a fixed px.

| Role | Family | Size | Weight | Line height | Use |
|---|---|---:|---:|---:|---|
| Consumer UI / header action | Pin Sans | 12px | 400 | | Repeated consumer product/auth control sample |
| Consumer auth form | Pin Sans | 16px | 400 | 1.50 | Consumer auth form input |
| Business body / action | PinterestSansPro | 16px | 400 | | Business-marketing actions and body samples |
| Business tab | PinterestSansPro | 15px | 700 | | Business-marketing tab |

### Assets

Official brand guidance defines the mark as a white script P in a red circle. Pins are official visual content that can include images or videos. Catalog logo metadata is Simple Icons identity (`pinterest`). Treating that catalog identity as not a captured first-party mark file and not promoting it as one, and omitting a reusable icon set, stroke width, media-card ratio, and image treatment because the supplied captures do not establish them, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. Pin Sans and PinterestSansPro files are product assets without a verified public reuse licence.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

The supplied evidence records two business-marketing tab interactions and selected/unselected text treatments. It does not establish consumer loading, empty, error, success, toast, disabled, modal, or validation state contracts. Those unobserved states are intentionally omitted rather than synthesized.

No hover, focus, pressed, disabled, menu, dialog, validation, or responsive component variant is claimed beyond that tab-selection interaction provenance.

Recording those unobserved states as omitted rather than synthesized, and limiting claimed variants to that tab-selection provenance, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

The source capture-boundary sentence is preserved here. Reading that 2026-07-13 capture as establishing only the selector- and surface-scoped observations below, and as the reason legacy global component, font, responsive, motion, and product-state claims were removed, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source never records `focus-visible`. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind. Where exact selector label/behavior is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

### Consumer primary action

- Role: consumer header action on the signed-out/product-auth route; also repeated on `surface-2`
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#e60023`
- Text: `#000000`
- Border: `2px solid transparent`
- Radius: `16px`
- Padding: `6px 14px`
- Font: `12px / 400 Pin Sans`
- Use: Consumer header action
- Observed: default baseline captured; no changed interaction style promoted

`#000000` is this control’s renderable foreground.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `home` and `surface-2` |
| hover | applicable | Pointer-web header action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a consumer header action; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed from the chrome name.

### Consumer secondary action

- Role: consumer header secondary action on the signed-out/product-auth route; also repeated on `surface-2`
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#e5e5e0`
- Text: `#000000`
- Border: `2px solid transparent`
- Radius: `16px`
- Padding: `6px 14px`
- Font: `12px / 400 Pin Sans`
- Use: Consumer header secondary action
- Observed: default baseline captured; no changed interaction style promoted

`#e5e5e0` is this control’s fill and the Secondary surface role. `#000000` is this control’s foreground.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `home` and `surface-2` |
| hover | applicable | Pointer-web header action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A header secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a consumer header secondary action; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed from the chrome name.

### Consumer auth input

- Role: consumer auth input on the signed-out/product-auth route; also repeated on `surface-2`
- Kind: interactive
- Type: input
- Anatomy: value field
- Text: `#000000`
- Border: `1px solid #91918c`
- Radius: `16px`
- Padding: `11px 15px`
- Font: `16px / 400 Pin Sans`
- Line height: `1.50`
- Use: Consumer auth input
- Observed: default baseline captured; no changed focus or error style promoted

`#91918c` is this field’s border and the Control border role. `#000000` is this field’s foreground. No background is recorded.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on `home` and `surface-2` |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An auth field can be unavailable; visual treatment omitted |
| loading | not-applicable | This field’s role is credential entry; in-progress auth is not a state of the field |
| error | applicable | Auth form field; no changed error style promoted, so the visual treatment is omitted |
| success | not-applicable | Completing auth is not a success confirmation painted on this field |

No generic `focus` capture is recorded. The omitted focus style is not `focus-visible` treatment evidence.

### Business marketing action

- Role: Pinterest Business marketing action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#111111`
- Text: `#ffffff`
- Radius: `30px`
- Padding: `0px 20px`
- Font: `16px / 400 PinterestSansPro`
- Use: Pinterest Business marketing action
- Observed: default baseline captured; no changed interaction style promoted. No filled-action selector is recorded for the 2px `#111111` outline-like shadow. Treating that shadow as an Elevation sample only, not a local field of this filled action, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Pinterest Business marketing |
| hover | applicable | Pointer-web marketing action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a Pinterest Business marketing action; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Business marketing outline action

- Role: Pinterest Business marketing outline action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#ffffff`
- Text: `#111111`
- Radius: `30px`
- Padding: `0px 20px`
- Font: `16px / 400 PinterestSansPro`
- Use: Pinterest Business marketing outline action
- Observed: default baseline captured; no changed interaction style promoted

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on Pinterest Business marketing |
| hover | applicable | Pointer-web marketing outline action; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing outline action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as a Pinterest Business marketing outline action; exact selector label/behavior is unresolved, so those three fields stay omitted at this boundary rather than closed as a destination control.

### Business marketing tab

- Role: Pinterest Business marketing tab
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#111111`
- Radius: `12px`
- Padding: `14px 16px`
- Font: `15px / 700 PinterestSansPro`
- Use: Pinterest Business marketing tab; unselected representative
- Observed: default / unselected captured. Selected: white `#ffffff` text; tab selection is recorded by two `interactions[]` entries.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Unselected representative captured on Pinterest Business marketing |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A marketing tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: selected `#ffffff` text. Selected is not `focus-visible` evidence.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied consumer capture is a public signed-out/product-auth route at 1440×900; it contains a 48px search control and 48px account actions. Pinterest Business is a public marketing route at 1440×900; it contains 60px action examples and 47px tabs. Retaining those business measurements only for that surface is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

The following layout application is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification. The 48px, 60px, and 47px figures are desktop-capture measurements, not cross-viewport specifications. Pinterest’s official business guidance describes Pins as visual content and recommends vertical 2:3 advertising canvases, but the supplied capture does not establish a reusable consumer masonry-column count, card ratio, breakpoint, or responsive grid contract. The raw bundle is desktop-only (1440×900). Official business creative guidance does not prove a consumer-product breakpoint or responsive component behavior. No breakpoint table is inferred. Observed spacing values retained as a conservative source-bound set are `4 / 8 / 12 / 20px`. Consumer account and form controls use 16px radii; the business marketing tab is 12px and its large actions are 30px.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Pinterest’s first-party product and business materials consistently frame the service around inspiration becoming action: people search, save, shop, and create a life they love. The approved external-language examples in the brand guidelines include “Follow on Pinterest”, “Find more ideas on Pinterest”, and “Get inspired on Pinterest”; they prohibit “Trending on Pinterest”, “Trending Pins”, and using “Pin” as a verb. Treating those strings as official communications guidance rather than a reconstructed in-product copy library, and not promoting synthetic voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Pinterest-authored or a separately published UI specification.

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

- hover, focus, pressed, disabled, menu, dialog, validation, and responsive component visual treatments beyond the recorded business-marketing tab selection
- consumer loading, empty, error, success, toast, disabled, modal, and validation visual treatments
- `focus-visible` visual treatments
- a shared elevation scale beyond consumer `box-shadow: none` and the one business-marketing-action-sample 2px `#111111` outline-like shadow (not bound to a filled selector)
- reusable icon set, stroke width, media-card ratio, and image treatment
- consumer masonry-column count, card ratio, breakpoint, and responsive grid
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five kinds
- a first-party public licence granting downstream reuse of Pin Sans or PinterestSansPro
- `HaasGrotDisp`, `HaasGrotText`, `PinterestSans`, `PinterestSansLC`, `PinterestSansTPJ`, and `PinterestUI` as UI families
- `Google Sans` as a Pinterest token
- Gestalt component tokens from this capture
- verified user-persona definitions
- an in-product copy library beyond the official external-language examples
