# Microsoft Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Microsoft makes public experiences for people, teams, and organizations across consumer software, cloud services, devices, and developer tools. Catalog homepage identity is `https://www.microsoft.com`. Official design system = Fluent 2 (`https://fluent2.microsoft.design`, `ds.type: system`). Source `ds.description`: "Microsoft's cross-platform design system, with platform-aware typography, tokens, component guidance, and accessibility guidance." This contract covers two public marketing surfaces the July 2026 capture distinguishes from Fluent 2 documentation chrome: Microsoft home at `https://www.microsoft.com/ko-kr` and Microsoft 365 at `https://www.microsoft.com/en-us/microsoft-365`. The July 2026 capture distinguishes two public marketing surfaces—Microsoft home and Microsoft 365—from Fluent 2 documentation chrome: the first two load the Microsoft-hosted Segoe variable webfonts and use Communication Blue (`#0078d4`) for home actions, while the documentation site is evidence for the Fluent design system rather than a proxy for every Microsoft product UI. Source token note: "Marketing tokens below are observed only on microsoft.com home and Microsoft 365 public marketing. Fluent documentation is a separate source domain; its product-system tokens are not inferred from marketing." Treating those two public marketing surfaces as this contract's token surfaces, keeping Fluent 2 documentation as a separate official system domain that does not automatically supply marketing tokens, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

Its current public marketing uses generous white space, product imagery, blue calls to action, and a familiar Segoe typographic voice to make that breadth feel coherent rather than experimental. The first two captured surfaces load the Microsoft-hosted Segoe variable webfonts and use Communication Blue (`#0078d4`) for home actions. Microsoft’s official mission is to empower every person and every organization on the planet to achieve more; its visual system supports that broad, practical framing with clear hierarchy and deliberately familiar controls. On the captured marketing surfaces, headings use a display instance of Segoe, text uses the Text instance, and the global header/footer retain Segoe UI. Home combines dark blue-black headings (`#0e1726`), body copy (`#17253d`), white canvas (`#ffffff`), and 8px blue action controls. Microsoft 365 introduces its own observed dark action treatment (`#091f2c`) and 200px active pill tabs. These are public-web observations, not a claim that any authenticated product, Windows app, or documentation surface uses the same values. The hex values, Segoe instance split, 8px action corners, 200px pills, July 2026 capture bound, and the authenticated-product / Windows-app / documentation-surface refusal are the source's own. Readings of that captured layer as generous white space, product imagery, blue calls to action, and a familiar Segoe typographic voice used to make that breadth feel coherent rather than experimental, and of the visual system as supporting the mission with clear hierarchy and deliberately familiar controls, are a derived editorial implementation inference from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

Brand narrative recorded by the source, kept as narrative context. Microsoft describes its mission as empowering every person and every organization on the planet to achieve more. Its current About material connects that mission to expanding opportunity, earning trust, protecting fundamental rights, and advancing sustainability. That purpose provides useful narrative context for a broad product family, but it is not itself a visual-token source. Fluent 2 supplies the cross-platform design-system context: official documentation describes global and alias tokens for color, type, spacing, elevation, and theming. The public marketing capture and Fluent documentation are therefore complementary—not interchangeable—evidence domains. The mission sentence, the About commitments (expanding opportunity, earning trust, protecting fundamental rights, and advancing sustainability), Fluent 2's global-and-alias token description, and the complementary—not interchangeable sentence are the source's own. Classifying that About narrative as context that does not by itself supply interface tokens, and keeping the public marketing capture and Fluent documentation as complementary—not interchangeable—evidence domains rather than one merged token set, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation. Each names a captured public-marketing surface or control the source records. They do not come from the source's persona section.

- Scan Microsoft home public marketing at `https://www.microsoft.com/ko-kr` and act on Communication Blue (`#0078d4`) home CTAs.
- Scan Microsoft 365 public marketing at `https://www.microsoft.com/en-us/microsoft-365` and act on the captured dark CTAs (`#091f2c`).
- Use the captured Microsoft 365 active pill tab (`#06161f`, 200px).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Microsoft’s official mission names people and organizations globally, but this capture does not provide validated research defining product-specific personas. No name, age, city, occupation, or affiliation is carried into this document or its sidecar. Restricting Audience to that mission-named group level, and refusing to invent product-specific personas, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

- A white (`#ffffff`) public-marketing canvas with near-white (`#fefefe`) cards and a quiet footer (`#f2f2f2`)
- Home primary CTAs in Communication Blue (`#0078d4`) with 8px corners
- Microsoft 365 marketing CTAs in dark navy (`#091f2c`) with the same 8px corner treatment
- Segoe UI Variable Text for body/actions and Segoe UI Variable Display for observed large headings
- Segoe UI in global navigation/footer chrome, with `#262626` navigation and `#616161` footer links
- Fluent 2 is a separate official system domain; its component guidance is not used to fill missing marketing variants

### Principles

The four numbered stems rest on Microsoft-authored mission and About language (items 1–2) and Fluent 2 documentation (items 3–4). The *UI implication* notes, and grouping those four as this reconstruction's principles, are a derived editorial implementation inference from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

1. **Empower people and organizations.** Microsoft’s stated mission centers the user’s outcome. *UI implication:* state the user’s task and next action plainly.
2. **Earn trust.** Microsoft names a safe, secure, and responsible digital world as an enduring commitment. *UI implication:* make consequential states and explanations clear rather than decorative.
3. **Respect platform context.** Fluent uses native platform defaults where appropriate. *UI implication:* use the relevant platform/Fluent guidance instead of forcing marketing chrome into a product UI.
4. **Use semantic systems.** Fluent documents global and alias token layers. *UI implication:* choose role-based tokens in a Fluent implementation rather than hard-coding a marketing hex.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

- Scope `#0078d4` 8px CTAs to the captured home-marketing surface.
- Use the loaded Segoe family evidence only for the observed public-web roles.
- Preserve the 13px Segoe UI global chrome and 11px footer treatment when reproducing that chrome.
- Use Fluent’s official semantic tokens when building a Fluent product rather than copying public-marketing values.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

- Treat the home or Microsoft 365 capture as a token source for Windows, authenticated apps, or documentation chrome.
- Substitute a system font and label it Segoe UI Variable.
- Promote Cascadia Code or icon fonts from zero-use declarations into UI typography.
- Invent inactive, disabled, hover, error, or responsive variants not recorded by the collector.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping Communication Blue (`#0078d4`) off link blue (`#0067b8`) off Microsoft 365 dark action (`#091f2c`) off active pill dark (`#06161f`) off outline-CTA text (`#051118`), keeping heading ink (`#0e1726`) off body ink (`#17253d`) off navigation ink (`#262626`), and keeping canvas white (`#ffffff`) off card white (`#fefefe`) off footer gray (`#f2f2f2`), are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation. The hex values and recorded uses are the source's own. Fluent’s official color guidance describes global values and semantic alias tokens, including theme-aware state values. Those design-system values are useful for Fluent implementations, but they are not assigned to the marketing token set above unless they occur in the supplied marketing capture.

**Observed public marketing**

- **Communication Blue** (`#0078d4`): home primary CTA background. Token-set path `tokens.colors.primary`. Catalog `primary_color`.
- **Dark Microsoft 365 action** (`#091f2c`): observed Microsoft 365 CTA background. Token-set path `tokens.colors.primary-dark`.
- **Active pill dark** (`#06161f`): observed active Microsoft 365 pill-tab background. Not a `tokens.colors` key; it stays on the tab record.
- **Heading ink** (`#0e1726`): observed home and Microsoft 365 headings. Token-set path `tokens.colors.ink`.
- **Body ink** (`#17253d`): observed marketing body text. Token-set path `tokens.colors.body`.
- **Navigation ink** (`#262626`): observed global-header text. Token-set path `tokens.colors.nav-ink`.
- **Link blue** (`#0067b8`): observed text-link treatment. Token-set path `tokens.colors.link`.
- **Muted gray** (`#616161`): observed footer text. Token-set path `tokens.colors.muted`.
- **Canvas white** (`#ffffff`): observed marketing and action foreground. Token-set path `tokens.colors.canvas`.
- **Card white** (`#fefefe`): observed Microsoft 365 card/background treatment. Token-set path `tokens.colors.card`.
- **Footer gray** (`#f2f2f2`): observed global-footer surface. Token-set path `tokens.colors.footer`.

`#051118` is the captured Microsoft 365 outline-CTA text. It stays on that component record. It is not a `tokens.colors` key.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept on their own path): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48`.

The supplied capture records a public-web spacing cluster of 4px, 8px, 12px, 16px, 24px, 32px, and 48px. It does not establish a universal layout scale for authenticated apps. Keeping the YAML unitless steps on their own path, keeping the px cluster as the source's own spacing-cluster writing rather than a replacement for those steps, and treating that cluster as observed public-web rhythm rather than a universal layout scale for authenticated apps, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 2` · `md: 4` · `lg: 8` · `xl: 24` · `pill: 200`.

- Control (`8` / `8px`): home and Microsoft 365 marketing CTAs. Token-set key `tokens.rounded.lg`.
- Pill (`200` / `200px`): Microsoft 365 active pill tab. Token-set key `tokens.rounded.pill`. YAML component radius is `200px` on that tab.
- Chrome (`0px`): home header link and footer link. Not a `tokens.rounded` key.

Keeping `sm: 2` / `md: 4` / `lg: 8` / `xl: 24` / `pill: 200` as five keys, keeping YAML `pill: 200` beside the body `200px` writing rather than choosing one as a replacement, keeping CTA `8px` on `lg: 8` rather than collapsing it into another step, and keeping chrome `0px` on those link records rather than inventing a YAML sharp key, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Elevation

The current bundle records mostly flat public-marketing actions and containers. It does not provide a stable, cross-surface shadow recipe for Microsoft marketing, so no shadow token is exported. Fluent elevation guidance belongs to the Fluent design-system domain and must be consulted there for a Fluent product implementation. Reading that as a flat treatment for the observed public-marketing actions and containers rather than a depth system, and leaving Fluent elevation in the Fluent design-system domain rather than assigning it to the marketing token set, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Motion

Fluent’s official design-token documentation establishes that motion can be tokenized, but the supplied capture does not provide a source-backed Microsoft-wide duration or easing table. No motion token is promoted. Promote a motion token for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. That five-kind gate, and the decision not to promote a Microsoft-wide duration or easing table from this capture or from Fluent documentation, are a derived editorial implementation inference from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed and loaded | `Segoe UI Variable Text` is high-confidence loaded (797 visible uses) in body, buttons, cards, dialogs, menus, tabs, and text. Its Microsoft-hosted WOFF2/TTF sources were recorded by the collector. |
| Live computed and loaded | `SegoeUI` is high-confidence loaded (242 visible uses) in navigation, footer, inputs, and other public-web chrome, with Microsoft-hosted Segoe UI sources recorded. |
| Live computed and loaded | `Segoe UI Variable Display` is high-confidence loaded (58 visible uses) for captured headings. `Segoe UI Variable Small` is loaded but has only two captured text uses, so it is not a general UI-family token. |
| Official product-use / design-system context | Fluent identifies Segoe UI as its primary typeface and uses Segoe UI Variable in its Windows type ramp; it also defaults to native platform fonts where appropriate. This is design-system guidance, not evidence that every Microsoft product or platform uses the web stack. |
| Official distributed asset and licence boundary | Microsoft’s font FAQ says Windows fonts cannot be self-hosted from a Windows installation; Segoe UI may be licensed through Monotype, while Segoe UI Variable is not available for licensing or use outside Microsoft products or non-Windows platforms. Captured Microsoft-hosted files therefore establish use on the observed pages, not reusable project assets. |
| Declared-only | `Cascadia Code` is declared by the Fluent documentation site with zero visible captured use. `FabricMDL2Icons`, `MWF-FLUENT-ICONS`, `Leelawadee UI Web`, localized Segoe Web faces, and `SegoeUI Fallback` also have zero visible captured use. They are not typography-family tokens. |

Reading the Design-system row as official Fluent context rather than proof that every Microsoft product uses the web stack, reading the FAQ as a licence boundary rather than permission to redistribute captured files, reading `Segoe UI Variable Small` as loaded-but-not-a-general-UI-family-token, and reading Cascadia Code and the icon/localized/fallback faces as declared-only rather than UI-family tokens, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Family

- **Current visible UI family:** `Segoe UI Variable Text`. Token-set path `tokens.typography.family.ui`.
- **Current visible display family:** `Segoe UI Variable Display`. Token-set path `tokens.typography.family.display`.
- **Current visible chrome family:** `Segoe UI`. Token-set path `tokens.typography.family.chrome`.
- Do not substitute a system font and label it Segoe UI Variable. The loaded families are canonical here only because computed visible use and loaded Microsoft-hosted sources agree on the observed public-web roles. Captured Microsoft-hosted files establish use on the observed pages, not reusable project assets.

The no-substitution rule above, the reading that the loaded families are canonical here only because computed visible use and loaded sources agree, and the reading that captured Microsoft-hosted files are not reusable project assets, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Type roles

Token-set roles keep the source's recorded numbers. The observed-hierarchy table keeps the source's px spellings. YAML `lineHeight` values `1.17`, `1.25`, `1.4`, `1.5`, and `1.47` are not rewritten as fixed px. Observed `56px`, `40px`, `28px`, `24px`, `22px`, `normal`, and `16px` line-height writings sit on that table. Neither writing was chosen as a replacement. YAML tracking `-1.2`, `-0.8`, `-0.5`, `-0.48`, and `-0.3` stay beside observed `-1.2px`, `-0.8px`, `-0.5px`, `-0.48px`, and `-0.3px`. YAML marketing display family is `Segoe UI Variable Display`; the observed-hierarchy display row is `Segoe UI Variable Text / Display`. Footer link `11px / 16px` is a §3-only chrome row; it is not a YAML typography key. Fluent’s web ramp starts at 10px/14px captions and documents a 68px/92px display role, with Segoe UI as the default web face. Treat that as official Fluent system guidance, separate from the values captured above. Keeping the token-set numbers on their own rows, the px hierarchy on its own table, YAML Display off the Text / Display observed row, footer `11px` off the YAML keys, and the Fluent 10px/14px and 68px/92px ramp off the marketing roles, is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Display | Segoe UI Variable Display | 48 | 500 | 1.17 | -1.2 | Observed home and Microsoft 365 public-marketing headings |
| Section | Segoe UI Variable Display | 32 | 500 | 1.25 | -0.8 | Observed marketing section headings |
| Card title | Segoe UI Variable Display | 20 | 600 | 1.4 | -0.5 | Observed home card headings |
| Body | Segoe UI Variable Text | 16 | 400 | 1.5 | -0.48 | Observed marketing body copy |
| CTA | Segoe UI Variable Text | 15 | 600 | 1.47 | -0.3 | Observed marketing action labels |
| Global nav | Segoe UI | 13 | 400 | — | — | Observed home global navigation |

| Role | Family | Size / line-height | Weight | Tracking | Surface |
|---|---|---|---|---|---|
| Marketing display | Segoe UI Variable Text / Display | 48px / 56px | 500 | -1.2px | home and Microsoft 365 |
| Marketing section | Segoe UI Variable Display | 32px / 40px | 500 | -0.8px | home and Microsoft 365 |
| Card title | Segoe UI Variable Display | 20px / 28px | 600 | -0.5px | home |
| Body | Segoe UI Variable Text | 16px / 24px | 400 | -0.48px | marketing |
| CTA | Segoe UI Variable Text | 15px / 22px | 600 | -0.3px | marketing |
| Global nav | Segoe UI | 13px / normal | 400 | normal | home chrome |
| Footer link | Segoe UI | 11px / 16px | 400 | -0.48px | home chrome |

Token-set `tokens.typography.display.size` is `48`. Token-set `tokens.typography.section.size` is `32`. Token-set `tokens.typography.card-title.size` is `20`. Token-set `tokens.typography.body.size` is `16`. Token-set `tokens.typography.cta.size` is `15`. Token-set `tokens.typography.nav.size` is `13`. Body `16` is a type size. It is not a spacing step — `tokens.spacing.base` is the spacing key for `16`. Keeping that body size off that spacing step is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Assets

The catalog identity records `logo.type: github` and `logo.slug: microsoft`. That is an identity pointer, not a Microsoft-hosted file and not a reusable brand download. No favicon or wordmark URL is recorded in the source body. Classifying the github slug as an identity pointer rather than a hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

All values below retain their public-surface and selector provenance. State rows are only included where the collector recorded an active selection; no hover, disabled, validation, or menu variant is inferred from a class name or general Fluent guidance. The collector recorded a Fluent documentation form-error interaction and Microsoft 365 dialog/tab interactions, but does not provide reusable error, success, loading, empty, disabled, or responsive state specifications. The source token-set declares one component: `m365-tab-active` with `type: tab`. That primitive type is attached only to Active pill tab. The other §4 records are not in the token set.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where not recorded on that control. Absence of a capture is not a `not-applicable` reason. `not-applicable` is used only where the control's role makes the state meaningless — a destination marketing CTA or destination chrome link that does not report an in-page operation, or a tab that only selects — and the reason given is always that semantic one. Generic `Focus` capture is not treated as a `focus-visible` treatment. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either, attaching YAML `type: tab` only to Active pill tab, and not treating generic `Focus` capture as a `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

### Standard CTA — home

- Role: destination control that is the home marketing card action
- Primitive type: not in the token set · Kind: interactive
- Domain: `home` surface
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Home marketing card action; `home` surface. Selector `[data-omd-capture="17"]`–`"25"`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a home marketing destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Hero CTA — home

- Role: destination control that is the home hero action
- Primitive type: not in the token set · Kind: interactive
- Domain: `home` surface
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 17px
- Height: 48px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Home hero action; `home` surface. Selector `[data-omd-capture="14"]` / `"16"`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a home hero destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Dark CTA — Microsoft 365

- Role: destination control that is a captured Microsoft 365 marketing action
- Primitive type: not in the token set · Kind: interactive
- Domain: `surface-3`
- Background: `#091f2c`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 52px
- Font: 15px / 600 / Segoe UI Variable Text
- Border: 2px solid transparent
- Use: Captured Microsoft 365 marketing action; `surface-3`. Selector `[data-omd-interaction-capture="tab-2-10"]`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a Microsoft 365 marketing destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Compact dark CTA — Microsoft 365

- Role: destination control that is a captured compact Microsoft 365 marketing action
- Primitive type: not in the token set · Kind: interactive
- Domain: `surface-3`
- Background: `#091f2c`
- Text: `#ffffff`
- Radius: 8px
- Padding: 4px 12px
- Height: 36px
- Font: 15px / 600 / Segoe UI Variable Text
- Border: 2px solid transparent
- Use: Captured compact Microsoft 365 marketing action; `surface-3`. Selector `[data-omd-interaction-capture="tab-2-25"]`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a compact Microsoft 365 marketing destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Outline CTA — Microsoft 365

- Role: destination control that is a captured compact secondary action
- Primitive type: not in the token set · Kind: interactive
- Domain: `surface-3`
- Text: `#051118`
- Border: 2px solid `#091f2c`
- Radius: 8px
- Padding: 4px 12px
- Height: 36px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Captured compact secondary action; `surface-3`. Selector `[data-omd-interaction-capture="tab-2-53"]`.
- Observed: default only. No background value is recorded in the source body.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination action; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a compact secondary destination action; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this control, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this control reports as success |

### Active pill tab — Microsoft 365

- Role: contained tab on the Microsoft 365 public-marketing surface; active value only
- Primitive type: `tab` · Kind: interactive
- Domain: `surface-3`
- Background: `#06161f`
- Text: `#ffffff`
- Border: 0px solid transparent
- Radius: 200px
- Padding: 8px 24px
- Height: 40px
- Font: 16px / 600 / Segoe UI Variable Text
- Token-set use: `Observed active Microsoft 365 pill tab`
- Token-set path: `tokens.components.m365-tab-active` (`type: tab`, `bg: #06161f`, `fg: #ffffff`, `radius: 200px`, `padding: 8px 24px`, `height: 40px`, `font: 16px / 600 Segoe UI Variable Text`, `active: true`, `use: Observed active Microsoft 365 pill tab`)
- Use: Active tab value captured after the collector’s tab interaction; `surface-3`. Selector `[data-omd-interaction-capture="tab-2-0"]`. No inactive-state rule is asserted.
- Observed: active selection only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared active treatment above; no inactive-state rule is asserted |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Tab control; the selected panel, not this tab, reports failure |
| success | not-applicable | Same role reason: remaining the selected tab is not an operation with a success result |

### Header link — home

- Role: destination control that is the home global-navigation link
- Primitive type: not in the token set · Kind: interactive
- Domain: `home` surface
- Text: `#262626`
- Radius: 0px
- Padding: 0px 8px
- Height: 54px
- Font: 13px / 400 / Segoe UI
- Use: Home global-navigation link; `home` surface. Selector `.uhf-nav-item.uhf-nav-link`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a global-navigation destination link; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this link reports as success |

### Footer link — home

- Role: destination control that is the home global-footer link
- Primitive type: not in the token set · Kind: interactive
- Domain: `home` surface
- Text: `#616161`
- Radius: 0px
- Font: 11px / 400 / Segoe UI
- Use: Home global-footer link; `home` surface. Selector `.uhf-footer-link`.
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destination link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control is a global-footer destination link; it does not commit an in-page operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching the destination is not an operation this link reports as success |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Home marketing uses large image-led bands and 40px or 48px actions; Microsoft 365 has its own dense product-marketing modules. The supplied capture records a public-web spacing cluster of 4px, 8px, 12px, 16px, 24px, 32px, and 48px. It does not establish a universal layout scale for authenticated apps. Do not use Fluent documentation geometry to fill gaps in the two captured marketing surfaces.

The supplied evidence is desktop-only (1440×900). It demonstrates 40px, 48px, and 52px public-marketing actions, but it does not establish mobile breakpoints, navigation collapse behavior, or touch-target rules. Follow the relevant Fluent platform guidance when implementing a responsive product surface.

The 40px standard home CTA, 48px home hero CTA, 52px Microsoft 365 dark CTA, 36px compact Microsoft 365 actions, 40px active pill tab, 54px header link, 13px / normal global nav, and 11px / 16px footer link are desktop-capture measurements, not cross-viewport specifications. Reading the two marketing surfaces as 1440×900 desktop captures rather than a responsive system, leaving mobile breakpoints, navigation collapse behavior, and touch-target rules unnamed rather than filling them from Fluent documentation geometry, and not inferring an authenticated-app layout from the two captured marketing surfaces, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Microsoft’s official corporate voice is empowering, inclusive, and practical. Its About page frames the mission as helping every person and organization achieve more, while the public Copilot copy uses companion language rather than technical showmanship. Use concise benefit-led labels and sentence case; this is a narrative and content boundary, not an observed rule for every product team.

| Context | Direction |
|---|---|
| Mission framing | Empower the person or organization using the product. |
| Product copy | Describe the task or outcome plainly. |
| AI framing | Use assistive/companion language grounded in the product’s capability. |
| UI labels | Use sentence case, per Fluent typography guidance. |

**Source-grounded samples:**

- "We empower the world" — Microsoft About.
- "Your everyday AI companion" — Microsoft About’s Copilot section.
- "What will you do with Copilot?" — Microsoft About’s Copilot section.

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, and reading the voice table and Copilot companion language as a narrative and content boundary rather than an observed rule for every product team or a complete product-microcopy guide, are derived editorial implementation inferences from the verified surfaces; they are not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Naming the list from the source's own unresolved fields, rather than adding surfaces the source did not name, is a derived editorial implementation inference from the verified surfaces; it is not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation.

- **Hover, disabled, validation, and menu variants.** State rows are only included where the collector recorded an active selection; those variants are not inferred from a class name or general Fluent guidance. They are not `not-applicable`; applicability follows control meaning.
- **Inactive pill-tab state.** No inactive-state rule is asserted.
- **Reusable error, success, loading, empty, disabled, or responsive state specifications.** The collector recorded a Fluent documentation form-error interaction and Microsoft 365 dialog/tab interactions, but does not provide those reusable specifications.
- **Authenticated product, Windows app, or documentation surface tokens from the marketing capture.** Public-web observations are not that claim.
- **Universal layout scale for authenticated apps.** The spacing cluster does not establish one.
- **Mobile breakpoints, navigation collapse behavior, or touch-target rules.** Desktop-only (1440×900).
- **Shadow token / cross-surface shadow recipe for Microsoft marketing.** No shadow token is exported. Fluent elevation guidance belongs to the Fluent design-system domain.
- **Source-backed Microsoft-wide duration or easing table.** No motion token is promoted. Promote a motion token only after a component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Cascadia Code, FabricMDL2Icons, MWF-FLUENT-ICONS, Leelawadee UI Web, localized Segoe Web faces, and SegoeUI Fallback as typography-family tokens.** Zero visible captured use.
- **Segoe UI Variable Small as a general UI-family token.** Loaded, only two captured text uses.
- **Display / body line-height writings.** Token-set `1.17` / `1.25` / `1.4` / `1.5` / `1.47` and observed `56px` / `40px` / `28px` / `24px` / `22px` are both kept. Neither was chosen as a replacement.
