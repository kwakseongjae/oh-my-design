# Framer Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Framer is a platform for designing and publishing websites. Its current careers page describes the mission as building the best tool for designing and publishing incredible sites, while its public product copy positions AI-assisted website creation alongside design, collaboration, CMS, hosting, and publishing. This contract covers the three public domains of that ecosystem that the supplied 2026-07-13 evidence captures, at `1440×900`: the main marketing site on `https://www.framer.com`, a community Marketplace components listing, and pricing. It preserves those domains separately: it does not turn public marketing, community browsing chrome, or pricing into a claim about the authenticated editor, generated sites, or documentation UI. Use it as a public-web direction, not an app-kit specification.

The values observed across those captures are an `#000000` public canvas with `#ffffff` foreground, `#111111` and `#242424` Marketplace surfaces, `#0099ff` in Marketplace and pricing controls, 8px compact controls, 13px menu panels, 20px category cards, and a GT Walsheim Medium display face on the home page. Reading that combination as an achromatic black-and-white public canvas with a small blue accent, compact rounded Marketplace controls, and a more editorial display face is a derived editorial implementation inference from the verified surfaces; it is not Framer-authored or a separately published UI specification.

Framer’s present public framing is a web-design and publishing platform. The careers page states the mission above, the product blog describes the enduring mission as turning ideas into stunning websites quickly, and the public navigation spans design, collaboration, CMS, hosting, performance, SEO, conversion, and publishing. Those are first-party statements about the company and its product, and they assign no interface value on their own. Reading the careers page as tying the company to the future of the web, and reading the distinctive visual expression in this evidence as coming from the current public surfaces, is a derived editorial implementation inference from the verified surfaces; it is not Framer-authored or a separately published UI specification. The three observed surfaces are not a claim that every Framer product surface uses the same components or palette.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Browse Marketplace components on the observed public community surface, through its category cards, tabs, and filters.
- Read Framer’s public pricing page, the third of the three observed public surfaces.
- Start from the “Sign up.” action that the captured public pages expose.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted, and no biography, demographic, or private-product behavior is asserted. Three audience archetypes are carried from the reviewed material: a **website creator** who uses the public design-and-publish proposition and may enter through marketing or templates; a **community browser** who explores the public Marketplace components surface through category cards, tabs, and filters; and a **developer/documentation reader** who encounters a separately structured developer/docs domain whose chrome is not used here as visual-token evidence. Those three archetypes are a derived editorial implementation inference from Framer’s public positioning and the verified surfaces; they are not Framer-authored or a separately published UI specification, and they are not synthetic test users or claims about private product behavior.

### Distinctive traits

- **Public canvas:** `#000000` is observed as the home and pricing page background; `#ffffff` is the recurring foreground.
- **Community layer:** the Marketplace components page introduces `#111111` and `#242424` surfaces, 8px compact controls, 20px category cards, and 13px menu panels.
- **Blue as local evidence:** `#0099ff` is observed in Marketplace and pricing controls and is also published by Framer as “Framer Blue”; it is not promoted as a universal product-state color.
- **Official brand assets:** Framer separately publishes Black, White, Framer Blue (`#0099FF`), and Framer Deep Blue (`#0055FF`) for marks. Brand-asset colors are not automatically public-web CSS tokens.
- **Display and UI split:** GT Walsheim Medium carries the captured home headings at 54px and 44px, while Inter carries body and Marketplace UI text.

The five bullet values above are observed on the captures or published by Framer for marks. The labels attached to them, and reading the home headings as a more editorial display layer than the Marketplace chrome, are a derived editorial implementation inference from the verified surfaces; they are not Framer-authored or a separately published UI specification.

### Principles

These four principles, their UI implications, and the applied rules under them are a derived editorial implementation inference from the verified surfaces; they are not Framer-authored or a separately published UI specification.

1. **Make the publishing outcome legible.** *UI implication:* public copy should foreground the site-building/publishing task rather than inventing technical workflow claims.
2. **Keep brand assets recognizable.** *UI implication:* follow the official guidance not to alter, recolor, distort, or create substitute Framer marks.
3. **Preserve source-domain boundaries.** *UI implication:* use public marketing and Marketplace evidence only for those surfaces; do not synthesize editor or docs patterns.
4. **Prefer measured compactness over generic pills.** *UI implication:* the supported compact controls are 8px-rounded Marketplace controls, not a site-wide full-pill rule.

Applied rules:

- Keep generated work scoped to the observed public domain: black/white marketing or the separate dark Marketplace surface.
- Use the observed Marketplace compact geometry — 8px controls, 13px menu panels, 20px category cards — only when recreating the corresponding public patterns, and pair the 8px control with the 13px menu panel only where an open-menu surface is actually needed.
- Use Inter for UI/body and GT Walsheim Medium only for public display contexts when the font licensing and asset availability are appropriate.
- Treat `#0099ff` as a documented public/brand accent, with route-level component evidence rather than a universal semantic-state guarantee.

### Avoid

- Do not infer Framer editor, publishing, CMS, collaboration, or docs components from these public captures.
- Do not turn declared-only faces into live UI tokens or substitute a system font as an unavailable family.
- Do not claim hover, pressed, focus, responsive, modal, or motion variants that the collector did not capture.
- Do not treat official brand-asset colors or third-party font licences as permission to reuse Framer-hosted assets.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Observed public-web roles:

- **Black canvas** (`#000000`): computed background on the captured home and pricing pages.
- **White foreground** (`#ffffff`): repeated visible text and border value across all three captured surfaces.
- **Muted label gray** (`#999999`): repeated text and border value on home and Marketplace; it is a lower-emphasis public-web value, not an accessibility-state definition.
- **Marketplace mid surface** (`#242424`): filter-trigger and open-menu panel background on the Marketplace components page.
- **Marketplace card surface** (`#111111`): category-card background on the Marketplace components page.
- **Framer Blue** (`#0099ff`): observed Marketplace/pricing background and home text/border value; official brand guidance also lists the same color.

`#0055FF` remains an official brand-asset color from the brand guidelines, but it was not a measured token in the supplied live samples. Other isolated colors in the raw bundle are route- or content-local and are not raised into a system palette. The published brand palette and the live public-web capture are separate evidence domains: an observation on one does not populate a token in the other.

The remaining measured colors below — the `#333333` menu-panel border, the `#666666` disabled-tab text, and the `#dee6ff` form-error text — stay with their own components. Each is that control’s renderable field, not a general semantic role.

### Spacing

- **Compact horizontal inset** (`10px`): the Marketplace compact filter and tab controls use `0px 10px` padding.
- **Menu inset** (`5px`): the expanded Marketplace menu panel’s inset padding.

These are two control measurements, not a universal spacing scale.

### Shape

- **Compact control** (`8px`): Marketplace filter trigger, accent action, disabled tab, and menu option.
- **Menu panel** (`13px`): the expanded Marketplace menu.
- **Category card** (`20px`): the Marketplace category-card root.

These three radius steps are what the capture measured on the observed Marketplace controls; they are the supported compact controls, not a site-wide full-pill rule.

### Elevation

- **Marketplace open menu:** the only selector-backed elevated panel is the expanded Marketplace menu, with `rgba(0,0,0,0.08) 0px 3px 6px 0px`.
- **Home utility controls:** three individual home buttons have `rgba(0,0,0,0.2) 0px 2px 6px 0px`; their semantic role is not identified, so the value is not a system elevation level.
- No general blue glow, card-shadow hierarchy, or authenticated-product elevation rule is asserted.

### Motion

The capture records structural menu and form-error expansions but supplies no measured duration, easing, transition, or reduced-motion behavior. Framer’s historical association with motion does not license a motion-token claim for the currently captured public surfaces; motion values remain unresolved. Promoting any motion value into this contract requires a per-component computed observation on a live Framer surface of all five: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration, on this or any other surface, does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Evidence classes

- **Live computed public-web use:** `Inter` is loaded/high with 512 visible uses and two Framer-hosted Inter Variable WOFF2 source URLs. `Inter Variable` is separately loaded/high with 392 visible uses. The Marketplace’s `inter, "inter Fallback"` computed stack is therefore represented by the canonical UI family `Inter`, rather than by a fallback name. Representing the computed stack by the canonical family name rather than the fallback name is a derived editorial implementation inference from the verified surfaces; it is not Framer-authored or a separately published UI specification.
- **Live computed display use:** `GT Walsheim Medium` is loaded/high with 11 visible heading uses; the collector reports FontFaceSet corroboration but no source URL. It is recorded as the public-home display family, not as a reusable distributed asset.
- **Live local monospace use:** `Input Mono Regular` and `Input Mono Bold` are loaded/high in a small number of visible public samples. They are not made general UI or code tokens because the capture does not establish a component-level role. Input’s official licence says published/distributed use needs the appropriate licence.
- **Source-backed local mono:** `jetBrainsMono` has one loaded visible use and two Framer-hosted source URLs. JetBrains Mono’s official project is OFL-1.1; this license context does not grant use of Framer-hosted files.
- **Declared-only:** Azeret Mono, Chillax, EB Garamond, Geist, additional GT Walsheim faces, numerous Inter aliases/placeholders, and other declared faces have zero visible uses in this bundle. They remain declared-only and are not UI-family tokens.
- **Unobserved domains:** no authenticated Framer editor/product surface or docs chrome font capture was supplied. No web family is substituted into either domain.

### Family

- **UI family:** `Inter` — the canonical family behind the computed public and Marketplace UI text.
- **Display family:** `GT Walsheim Medium` — the public-home display face.

Keep both names as metadata even where a specimen cannot be rendered, and do not substitute a system font as an unavailable family.

### Measured public hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Evidence boundary |
|---|---|---:|---:|---:|---:|---|
| Public home body | Inter Variable | 14px | 400 | 14px | -0.01px | Observed public-home body text |
| Public home display heading | GT Walsheim Medium | 54px | 500 | 54px | -2.16px | Captured public-home first-level heading |
| Public home section heading | GT Walsheim Medium | 44px | 500 | 48.4px | -1.76px | Captured public-home section heading |
| Marketplace compact control | Inter | 12px | 500 | 12px | normal | Marketplace filter trigger on the public community surface |
| Marketplace category label | Inter | 13px | 600 | 18.2px | normal | Marketplace category-card label on the public community surface |

The two captured display examples are 54px/500 and 44px/500. They are the measured public examples, not an unbounded display scale.

### Assets

Framer publishes official brand guidance covering the mark, color, and trademark use, and that guidance is where the Black / White / Framer Blue / Framer Deep Blue palette for marks is published. Follow it: do not alter, recolor, distort, or create substitute Framer marks. Brand-asset colors are not automatically public-web CSS tokens, and neither official brand-asset colors nor third-party font licences are permission to reuse Framer-hosted assets.

This contract carries no first-party Framer mark, image, or icon file.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All variants below are selector-backed observations from public surfaces. The capture records three interaction expansions: two Marketplace menus and one home form-error sample. It does not capture an authenticated editor, documentation chrome, hover, pressed, focus, modal, or product-toast contract beyond the exact rows called out below.

| State | Evidence boundary |
|---|---|
| Form error | Home textarea captured in `error` state with `#dee6ff` text; field shell and message copy are not captured. |
| Menu open | Two Marketplace menu expansions are captured, including one `#242424` panel and unchecked menu option. |
| Disabled tab | One Marketplace coming-soon tab is disabled with `#666666` text and 8px radius. |
| Toast viewport | A Marketplace toast viewport element is present, but no visible message, lifecycle, or style contract is captured. |
| Empty/loading/success/product failure | Not captured; no editor or authenticated-product state recipe is asserted. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by the completeness of the record. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. `loading`, `error`, and `success` are judged against what each control is for: a control that commits an operation can be pending, can fail, and can confirm, while a control whose role is to open a menu, toggle its own value, or select which panel is shown reports none of those itself. Where a state applies by role and no treatment was observed, the state stays applicable and only its visual treatment is omitted. Absence of an observation is never a `not-applicable` reason. This is not a complete state-coverage claim.

### Marketplace filter trigger

- Role: `Marketplace filter trigger on the public community surface`
- Primitive: `button`
- Kind: interactive
- Anatomy: label with a menu affordance (`aria-haspopup="menu"`)
- Background: `#242424` · Text: `#ffffff` · Border: `1px solid transparent`
- Radius: `8px` · Padding: `0px 10px` · Font: `12px / 500 / Inter`
- Observed: `expanded and menu-open captured on the Marketplace filter`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Required of the control; the recorded measurement was taken with the trigger expanded and its menu open, so a separate closed treatment is omitted |
| hover | applicable | Pointer-web trigger; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | The control’s role is to open the Marketplace filter menu; opening a menu commits no operation of its own that could be pending |
| error | not-applicable | The same disclosure role; a filter that fails to apply is reported by the listing that applies it, not by the trigger that opened the menu |
| success | not-applicable | The same disclosure role; the menu opening is the outcome itself, so the trigger confirms no separate completion |

### Marketplace accent action

- Role: public Marketplace action
- Kind: interactive
- Background: `#0099ff` · Text: `#ffffff` · Border: `1px solid transparent`
- Radius: `8px` · Padding: `0px 10px` · Font: `12px / 600 / Inter`
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Observed on the Marketplace components surface |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | applicable | The record names this control an action rather than a destination or a disclosure trigger, so the operation it runs can be pending; visual treatment omitted |
| error | applicable | The same acting role — the operation it runs can fail; visual treatment omitted |
| success | applicable | The same acting role — the operation it runs can complete; visual treatment omitted |

### Marketplace open menu panel

- Role: expanded public Marketplace menu
- Background: `#242424` · Text: `#ffffff` · Border: `1px solid #333333`
- Radius: `13px` · Padding: `5px` · Font: `12px / 400 / Inter`
- Shadow: `rgba(0, 0, 0, 0.08) 0px 3px 6px 0px`
- Observed: expanded / menu-open
- Kind: non-interactive — the record measures the expanded panel surface itself, and the control role belongs to the options inside it, so no state-applicability map is asserted for the panel.

### Marketplace unchecked menu option

- Role: `role="menuitemcheckbox"` option with `aria-checked="false"`, captured only in the expanded Marketplace menu
- Kind: interactive
- Text: `#ffffff` · Radius: `8px` · Padding: `0px 10px 0px 0px` · Font: `13px / 500 / Inter`
- Observed: unchecked only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | The unchecked option is the row the capture measures |
| hover | applicable | Pointer-web menu option; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Interactive control; visual treatment omitted |
| loading | not-applicable | A `menuitemcheckbox` toggles its own checked value in place; it runs no operation of its own that could be pending |
| error | not-applicable | The same toggle role; a listing that fails to filter reports that in the listing, not on the option that toggled |
| success | not-applicable | The same toggle role; the changed checked value is the outcome itself, so the option confirms no separate completion |

### Marketplace category card

- Role: `Marketplace category card on the public community surface`; public Marketplace category-card root
- Primitive: `card`
- Background: `#111111` · Text: `#ffffff` · Radius: `20px` · Font: `12px / 500 / Inter`
- Observed: default
- Kind: not asserted — the record measures the card root’s surface values and declares no control role for it, so neither an interaction kind nor a state-applicability map is fixed here.

### Marketplace disabled tab

- Role: disabled, coming-soon public Marketplace tab
- Kind: interactive
- Text: `#666666` · Radius: `8px` · Padding: `0px 10px` · Font: `12px / 500 / Inter`
- Observed: disabled only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Required of the control; only the disabled treatment is recorded, so the enabled treatment is omitted |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Observed: the coming-soon tab with `#666666` text and an 8px radius |
| loading | not-applicable | A tab selects which panel is shown; it runs no operation of its own that could be pending |
| error | not-applicable | The same selection role; a panel that fails to load reports that in the panel, not on the tab that selected it |
| success | not-applicable | The same selection role; the shown panel is the outcome itself, so the tab confirms no separate completion |

### Home form field

- Role: home textarea, error capture
- Kind: interactive
- Text: `#dee6ff` · Font: `14px / 500 / Inter`
- Observed: error only. The collector records the error state but does not supply a reusable field shell, label, or transition contract.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Required of the control; only the error text treatment is recorded |
| hover | applicable | Pointer-web form field; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Form field; visual treatment omitted |
| loading | applicable | The field belongs to a submission the reader waits on, so a pending state has meaning for it; visual treatment omitted |
| error | applicable | Observed: `#dee6ff` error text on the home textarea |
| success | applicable | The same entry-committing role — an entry can be accepted; visual treatment omitted |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- The supplied evidence is desktop-only (`1440×900`). It supports local spacing observations, not a responsive grid, breakpoint, container-width, or editor-layout claim.
- Marketplace compact filter and tab controls use `0px 10px` padding; the open menu uses 5px inset padding.
- Category-card text has 15px padding in the captured Marketplace DOM. This is a card-local observation, not a global spacing scale.
- The raw spacing aggregation also repeats 5px, 10px, 14px, 15px, and 40px values. Without semantic selector coverage for a universal scale, they remain aggregate evidence rather than prescribed tokens.

Only a `1440×900` capture was supplied. The public pages may be responsive, but this packet does not measure a breakpoint, mobile navigation, touch target, image crop, or a responsive state transition. Those fields remain unresolved rather than being extrapolated from the desktop DOM.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Framer’s first-party careers page leads with “Make the web more creative” and describes a mission to build the best tool for designing and publishing incredible sites. The product blog says the enduring mission is to turn ideas into stunning websites quickly.

| Context | Supported direction |
|---|---|
| Public headline | Short outcome-led statement, as in “Make the web more creative.” |
| Public CTA | Direct account/start action; captured pages expose “Sign up.” |
| Community | Label-led browsing and filters on the Marketplace components surface. |

“Make the web more creative” and “Sign up.” are Framer’s own published strings and are carried exactly as written. Reading them together as support for a direct, maker-facing public voice, and the three supported directions in the table above, are a derived editorial implementation inference from the verified surfaces; they are not Framer-authored or a separately published UI specification. They do not establish editor error copy or a complete product-content style guide.

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

These are unnamed values, not permissions to invent:

- hover, pressed, focus, modal, and product-toast contracts beyond the rows the capture records
- empty, loading, success, and product-failure state recipes
- the toast message, lifecycle, and style contract behind the observed Marketplace toast viewport
- a reusable form-field shell, label, and transition contract for the home textarea
- Framer editor, publishing, CMS, collaboration, and docs components
- authenticated Framer editor/product and docs chrome font capture
- a responsive grid, breakpoint, container width, and editor-layout claim
- a universal spacing scale behind the repeated 5px, 10px, 14px, 15px, and 40px aggregate values
- mobile navigation, touch target, image crop, and responsive state transition
- motion duration, easing, transition, and reduced-motion behavior
- a system elevation level for the three home utility controls, and any general blue glow, card-shadow hierarchy, or authenticated-product elevation rule
