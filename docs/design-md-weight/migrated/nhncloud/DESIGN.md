# NHN Cloud Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

NHN Cloud is a cloud and IT-service company whose public platform describes a broad set of infrastructure and platform services for business operations and service development. Catalog homepage identity is `https://www.nhncloud.com`. This contract covers three first-party public surfaces the source inspected on 2026-07-13: the corporate marketing route at `https://www.nhncloud.com/kr`, the TOAST UI catalog at `https://ui.toast.com/`, and the documentation chrome at `https://docs.nhncloud.com/ko/nhncloud/ko/overview/`. YAML `ds.name` is TOAST UI, `ds.url` is `https://ui.toast.com`, `ds.type` is `system`. The YAML `ds.description` is kept as written: NHN Cloud's official, continuously maintained open-source JavaScript UI catalog; it is a distinct developer/documentation surface, not a published token sheet for the NHN Cloud marketing site. The company page at `https://company.nhncloud.com/about?lang=en` is named as official company history and brand context; it does not supply the interface tokens below. Token note from the source, kept as written: Machine tokens are limited to selector-backed values from the NHN Cloud public corporate marketing route. TOAST UI and NHN Cloud documentation are recorded as separate source domains. Treating those three inspected routes as this contract's surfaces, keeping the company page as narrative context that does not supply interface tokens, keeping TOAST UI as that distinct catalog rather than as a token sheet for the marketing site, and keeping machine tokens limited to the corporate marketing route, are derived editorial implementation inferences from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

On the captured corporate marketing route, that promise is expressed with a narrow, high-contrast action system: a bright `#125DE6` blue on fully rounded CTAs, white labels, dark resource menus, and the loaded `Pretendard Variable` face. Catalog `primary_color` is `#125de6`. The company’s official symbol describes three dots as both cloud and connection; the visual interface does not literalize that story with a broad decorative palette. It instead uses blue as a deliberate conversion signal. [NHN Cloud Company](https://company.nhncloud.com/about?lang=en) and the public [cloud platform](https://www.nhncloud.com/kr) are distinct from the developer-facing TOAST UI catalog and from the documentation chrome captured below. The hex values, the loaded face, the three-dot symbol wording, and the three-surface split are the source's own. Readings of that captured layer as a narrow, high-contrast action system, of the interface as not literalizing the symbol story with a broad decorative palette, and of blue as a deliberate conversion signal, are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

Brand narrative recorded by the source, kept separate from the interface evidence above. Its corporate history traces the cloud service to a 2014 OpenStack launch and records NHN Cloud Corp.'s 2022 establishment, while the current company site frames the role as enabling customers' next technical challenge. NHN Cloud's official history records an OpenStack public-cloud launch in 2014, a cloud-center build in Pangyo in 2015, and the launch of NHN Cloud in April 2022. The company now describes itself as a cloud and IT-service business, with current growth efforts spanning data/AI services, private and global markets, and regional data centers. Its official logo explanation centres connection and boundless possibility; the three-dot symbol is described as a cloud and as a prompt for easy, flexible collaboration. The developer-facing counterpart is TOAST UI: its own site calls it a JavaScript UI library and free open-source project constantly managed by NHN Cloud, listing applications such as Grid, Editor, Calendar, Chart, and Image Editor alongside smaller components and front-end guides. The catalog is informative evidence of the developer ecosystem, not proof that its catalog-page typography or any unobserved component value is the NHN Cloud corporate design system. The years, Pangyo, April 2022, NHN Cloud Corp.'s 2022 establishment, the growth-effort list, the logo explanation, the TOAST UI self-description, the application list, and that catalog-is-not-the-corporate-design-system sentence are the source's own recordings of first-party pages. Treating that official-history and catalog narrative as brand context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured corporate-marketing control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- Act on the captured Corporate-marketing header CTA.
- Act on the captured Corporate-marketing section CTA.
- Open the captured Corporate-marketing resource/menu trigger.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. Official company language names customers. The TOAST UI catalog is recorded as developer-facing. Use those source wordings only. Dropping that persona section rather than promoting it, carrying no affiliation classification or motivation, and using only those source wordings, are derived editorial implementation inferences from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Distinctive traits

The list restates measured values from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- Bright `#125DE6` / YAML `tokens.colors.primary` `#125de6` on fully rounded corporate-marketing CTAs, with white labels
- Loaded `Pretendard Variable` as the only general corporate UI family promoted here
- Dark resource menus on `#111111` with a muted `#727781` trigger
- Two measured CTA sizes on the marketing route: 40px header and 48px section
- 30px CTA radius on that marketing surface; 6px trigger and 8px expanded-menu as a separate resource-control cluster
- TOAST UI catalog and documentation chrome recorded as separate source domains, not as the corporate marketing token set

### Principles

These 4 items are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog. The numbered stems rest on official company and catalog sentences the source attributes to first-party pages. Every *UI implication* below is the source's own editorial reading, not taken from the published TOAST UI catalog as a marketing-token sheet.

1. **Enable a customer’s technical journey.**
   *UI implication:* Prefer a clear capability and an unambiguous next action over decorative language.

2. **Connection is a brand idea, not a license to invent a token system.**
   *UI implication:* Keep the action lane focused; do not turn the corporate logo story into unsupported visual rules.

3. **Corporate marketing and developer catalog are distinct public domains.**
   *UI implication:* Attribute each token and component to its captured route before reuse.

4. **Open-source developer tools need precise boundaries.**
   *UI implication:* Describe TOAST UI's documented applications and components without claiming unseen states or styles.

### Application rules

The source states these four as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- Use `#125DE6` and a 30px radius only for the captured corporate marketing CTA pattern.
- Use loaded `Pretendard Variable` for corporate-marketing reproductions.
- Keep the 6px trigger and 8px expanded-menu geometry tied to their observed resource control.
- Treat TOAST UI and NHN Cloud docs as separately evidenced developer/documentation surfaces.

The source's Agent Prompt Guide also records this unique constraint, kept as written: a white-on-`#125DE6` 30px pill CTA, and a choice of either the 40px / `8px 19px` / 15px-400 header sample or the 48px / `10px 27px` / 17px-500 section sample. For the captured resource menu, use a transparent `#727781` / `#51565F` 6px trigger and an expanded `#111111` panel with an 8px radius and the observed light overlay shadow. Keeping that Agent Prompt Guide constraint on this page rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Avoid

The source states these four as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- Do not merge TOAST UI catalog chrome or documentation-chrome colors into the corporate marketing token set.
- Do not substitute `Noto Sans KR`, `Noto Sans CJK KR`, or a system font for the verified corporate `Pretendard Variable` role.
- Do not invent grid, editor, calendar, error, hover, disabled, or responsive variants from TOAST UI’s product list.
- Do not generalize the menu overlay shadow into a broad elevation ladder.

The same Agent Prompt Guide records this unique prohibition, kept as written: Do not use this small marketing sample to synthesize a cloud-console UI or TOAST UI widget library. Keeping that prohibition here rather than as a tool prompt is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

**Corporate marketing route — selector-backed machine tokens.** Pairing each hex to the token-set path named beside it, keeping YAML lowercase beside the body uppercase form, keeping `tokens.colors.muted` `#727781` as observed resource-menu trigger text and menu border rather than merging it with `tokens.colors.border` `#51565f`, and not promoting documentation-chrome `#E9F1FF` as a corporate marketing or TOAST UI token, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- **Primary action** (`#125DE6` / YAML `tokens.colors.primary` `#125de6`): observed as the filled CTA background and border.
- **On primary** (`#FFFFFF` / YAML `tokens.colors.on-primary` `#ffffff`): observed CTA label color.
- **Dark menu surface** (`#111111` / YAML `tokens.colors.dark` `#111111`): observed expanded menu background.
- **Muted control text** (`#727781` / YAML `tokens.colors.muted` `#727781`): observed resource-menu trigger text and menu border.
- **Control border** (`#51565F` / YAML `tokens.colors.border` `#51565f`): observed resource-menu trigger border.

The capture also records `#E9F1FF` in documentation chrome. It is not promoted as a corporate marketing or TOAST UI token: the page is a separate documentation shell.

### Spacing

YAML `tokens.spacing` keys, kept as separate steps (`cta-sm-y: 8` is not `menu-y: 8`; `cta-sm-x: 19` is not `cta-lg-x: 27`; `menu-x: 16` is not a type-size 16):

- `tokens.spacing.cta-sm-y`: 8
- `tokens.spacing.cta-sm-x`: 19
- `tokens.spacing.cta-lg-y`: 10
- `tokens.spacing.cta-lg-x`: 27
- `tokens.spacing.menu-y`: 8
- `tokens.spacing.menu-x`: 16

`cta-sm-y` / `cta-sm-x` match the header CTA padding `8px 19px`. `cta-lg-y` / `cta-lg-x` match the section CTA padding `10px 27px`. `menu-y: 8` and `menu-x: 16` remain their own keys; they are not merged with the trigger padding `10px 16px` or the panel padding `8px 0px`. Keeping the six keys unmerged, and not reading `menu-y` / `menu-x` as a single component's padding, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Shape

YAML `tokens.rounded` keys, kept as separate steps (`cta: 30` is not `control: 6`; `control: 6` is not `menu: 8`):

- `tokens.rounded.cta`: 30
- `tokens.rounded.control`: 6
- `tokens.rounded.menu`: 8

The 30px CTA radius belongs to this marketing surface; the observed 6px trigger and 8px menu panel are a separate resource-control cluster. Reading those three keys as that split, not as a universal radius scale, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Elevation

The captured corporate CTA samples have no shadow. The expanded resource menu alone records an overlay shadow of `0px 4px 8px rgba(0, 0, 0, 0.06)` behind a `#111111` panel and `#727781` hairline. Token-set key `tokens.shadow.menu-overlay`. Do not turn that one menu observation into a general card-elevation system. Reading that one overlay as menu-local rather than as a card-elevation ladder is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Motion

No computed duration, easing curve, or motion sequence was supplied as a reliable token. The menu-open capture establishes the resulting expanded panel only. Treat motion values as unresolved until a relevant public surface is captured with explicit computed transition evidence. Promote a motion token only after a per-component computed observation of transition properties, animation name, duration, easing, and reduced-motion behavior. A partial confirmation — one curve read off one element, or a match against an official framework or specification document, including the published TOAST UI catalog — does not satisfy that condition. Treating that measured absence as a reason not to promote a motion duration, easing curve, animation name, transition property, or reduced-motion behavior, and requiring that per-component computed observation of all five kinds before any promotion, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating loaded `Pretendard Variable` as the only general corporate UI family promoted here, treating `Noto Sans KR` as documentation-chrome evidence rather than a replacement for the corporate token family, treating `Noto Sans CJK KR` as unresolved catalog use, treating declared-only faces as omitted, and refusing to substitute a system font for the verified corporate `Pretendard Variable` role, are derived editorial implementation inferences from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Live corporate computed use | `Pretendard Variable` is the only general corporate UI family promoted here. It has 480 visible uses across the corporate marketing capture and a loaded FontFace/source match at `https://www.nhncloud.com/fonts/PretendardVariable.woff2`. Token-set key `tokens.typography.family.ui`. |
| Live documentation-chrome use | `Noto Sans KR` is loaded/high confidence with 203 visible uses on `docs.nhncloud.com`, from Google Fonts sources. It is documentation chrome evidence, not a replacement for the corporate token family. |
| Unresolved catalog use | the TOAST UI catalog computes `Noto Sans CJK KR` on 122 visible samples, but the collector found no matching loaded FontFace or source. It remains unresolved. |
| Declared-only assets | `common`, `Noto Sans`, `Noto Sans JP`, `swiper-icons`, and `tui-calendar-font-icon` have declaration/source evidence but zero visible observed use. They are not promoted or substituted. |
| Font licence boundary | Pretendard’s upstream project distributes the family under SIL Open Font License 1.1. The licence describes the family; the corporate FontFaceSet/source evidence above is what establishes current NHN Cloud web use. |

### Family

- **Current visible corporate UI family:** `Pretendard Variable`. Token-set key `tokens.typography.family.ui`.
- Do not substitute `Noto Sans KR`, `Noto Sans CJK KR`, or a system font for the verified corporate `Pretendard Variable` role.

Treating `Pretendard Variable` as the sole corporate UI family on this capture, and refusing those substitutes, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Type roles

YAML token-set metrics keep their size and weight numbers. YAML `use` strings are kept verbatim. `tokens.typography.body.size` 16 is not `tokens.spacing.menu-x: 16` and is not the resource-menu trigger font 16px. Paths kept: `tokens.typography.body.size` / `tokens.typography.body.weight` / `tokens.typography.body.use`; `tokens.typography.cta.size` / `tokens.typography.cta.weight` / `tokens.typography.cta.use`; `tokens.typography.cta-lg.size` / `tokens.typography.cta-lg.weight` / `tokens.typography.cta-lg.use`.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---|---|---|
| body (`tokens.typography.body`) | Pretendard Variable | 16 | 400 | | | Corporate-marketing body sample |
| cta (`tokens.typography.cta`) | Pretendard Variable | 15 | 400 | | | 40px corporate header CTA |
| cta-lg (`tokens.typography.cta-lg`) | Pretendard Variable | 17 | 500 | | | 48px corporate section CTA |

Keeping those three roles unmerged, keeping YAML `use` verbatim, and keeping body `16` off spacing `16` and off the trigger's 16px font, is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

### Assets

- Catalog logo entry: favicon `https://www.google.com/s2/favicons?domain=nhncloud.com&sz=128`. Reading that URL as a catalog identity pointer rather than as an NHN Cloud-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.
- Official symbol: three dots as both cloud and connection; official logo explanation centres connection and boundless possibility; the three-dot symbol is described as a cloud and as a prompt for easy, flexible collaboration.
- TOAST UI at `https://ui.toast.com/` is the official catalog named in YAML `ds`; it is a distinct developer/documentation surface, not a published token sheet for the NHN Cloud marketing site.
- Pretendard upstream licence: SIL Open Font License 1.1. The licence describes the family; the corporate FontFaceSet/source evidence above is what establishes current NHN Cloud web use.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Corporate header and section CTA selectors carry collector markers for hover and pressed, but no separate computed state values are promoted. The corporate resource trigger was observed expanded/menu-open with the 42px, 6px-radius trigger values above; expanded/menu-open was observed. The expanded corporate menu panel was observed at `#111111`, with a 1px `#727781` border, 8px radius, and the recorded overlay shadow. A documentation-chrome CTA was observed separately at `surface-3::[data-omd-capture="3"]`: `#125DE6`, white text, 30px radius, `9px 20px` padding, and Noto Sans KR 15px/300. It is not promoted as the corporate CTA token. Not promoting that documentation-chrome sample as the corporate CTA token is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog. No focus, disabled, error, success, loading, empty, toast, dialog, or form-validation state is asserted.

No TOAST widget, input, grid, editor, hover color, error treatment, or responsive variant is specified here without a captured selector/value pair on an actual relevant surface.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, labelling Resource Menu `not in the token set`, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Corporate Header CTA

- Role: Corporate-marketing header CTA
- Primitive type: `button` · YAML `tokens.components.corporate-header-cta.type: button` · Kind: interactive
- Background: `#125DE6` / YAML `tokens.components.corporate-header-cta.bg` `#125de6`
- Text: `#FFFFFF` / YAML `fg` `#ffffff`
- Border: 1px solid `#125DE6` / YAML `1px solid #125de6`
- Radius: 30px / YAML `tokens.components.corporate-header-cta.radius` `30px` / `tokens.rounded.cta` 30
- Padding: `8px 19px` / YAML `tokens.spacing.cta-sm-y` 8 · `tokens.spacing.cta-sm-x` 19
- Height: 40px
- Font: 15px / 400 / Pretendard Variable / YAML `15px / 400 Pretendard Variable`
- YAML fields on this component: `tokens.components.corporate-header-cta.type`, `tokens.components.corporate-header-cta.bg`, `tokens.components.corporate-header-cta.fg`, `tokens.components.corporate-header-cta.border`, `tokens.components.corporate-header-cta.radius`, `tokens.components.corporate-header-cta.padding`, `tokens.components.corporate-header-cta.height`, `tokens.components.corporate-header-cta.font`, `tokens.components.corporate-header-cta.states`, `tokens.components.corporate-header-cta.use`
- Token-set use: Corporate-marketing header CTA, selector home::[data-omd-capture=13]
- Use: Corporate-marketing header CTA, selector `home::[data-omd-capture=13]` / `home::[data-omd-capture="13"]`
- Observed: hover and pressed observed on the same selector; no state value is inferred
- YAML states, kept as written: hover and pressed observed on the same selector; no state value is inferred

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the corporate marketing route |
| hover | applicable | Pointer-web button; collector markers for hover exist; no distinct computed value is promoted, so the visual treatment is omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A corporate-marketing header CTA is a public marketing call-to-action; it commits no operation in place |
| error | not-applicable | The same marketing CTA role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same marketing CTA role has no in-place operation whose completion can be confirmed on the control |

### Corporate Section CTA

- Role: Corporate-marketing section CTA
- Primitive type: `button` · YAML `tokens.components.corporate-section-cta.type: button` · Kind: interactive
- Background: `#125DE6` / YAML `tokens.components.corporate-section-cta.bg` `#125de6`
- Text: `#FFFFFF` / YAML `fg` `#ffffff`
- Border: 1px solid `#125DE6` / YAML `1px solid #125de6`
- Radius: 30px / YAML `tokens.components.corporate-section-cta.radius` `30px` / `tokens.rounded.cta` 30
- Padding: `10px 27px` / YAML `tokens.spacing.cta-lg-y` 10 · `tokens.spacing.cta-lg-x` 27
- Height: 48px
- Font: 17px / 500 / Pretendard Variable / YAML `17px / 500 Pretendard Variable`
- YAML fields on this component: `tokens.components.corporate-section-cta.type`, `tokens.components.corporate-section-cta.bg`, `tokens.components.corporate-section-cta.fg`, `tokens.components.corporate-section-cta.border`, `tokens.components.corporate-section-cta.radius`, `tokens.components.corporate-section-cta.padding`, `tokens.components.corporate-section-cta.height`, `tokens.components.corporate-section-cta.font`, `tokens.components.corporate-section-cta.states`, `tokens.components.corporate-section-cta.use`
- Token-set use: Corporate-marketing section CTA, selector home::[data-omd-capture=29]
- Use: Corporate-marketing section CTA, selector `home::[data-omd-capture=29]` / `home::[data-omd-capture="29"]`
- Observed: hover and pressed observed on the same selector class; no state value is inferred
- YAML states, kept as written: hover and pressed observed on the same selector class; no state value is inferred

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the corporate marketing route |
| hover | applicable | Pointer-web button; collector markers for hover exist; no distinct computed value is promoted, so the visual treatment is omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A CTA can be gated; visual treatment omitted |
| loading | not-applicable | A corporate-marketing section CTA is a public marketing call-to-action; it commits no operation in place |
| error | not-applicable | The same marketing CTA role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same marketing CTA role has no in-place operation whose completion can be confirmed on the control |

### Resource Menu Trigger

- Role: Corporate-marketing resource/menu trigger
- Primitive type: `button` · YAML `tokens.components.resource-menu-trigger.type: button` · Kind: interactive
- Text: `#727781`
- Border: 1px solid `#51565F` / YAML `1px solid #51565f`
- Radius: 6px / YAML `tokens.components.resource-menu-trigger.radius` `6px` / `tokens.rounded.control` 6
- Padding: `10px 16px`
- Height: 42px
- Font: 16px / 400 / Pretendard Variable / YAML `16px / 400 Pretendard Variable`
- YAML fields on this component: `tokens.components.resource-menu-trigger.type`, `tokens.components.resource-menu-trigger.fg`, `tokens.components.resource-menu-trigger.border`, `tokens.components.resource-menu-trigger.radius`, `tokens.components.resource-menu-trigger.padding`, `tokens.components.resource-menu-trigger.height`, `tokens.components.resource-menu-trigger.font`, `tokens.components.resource-menu-trigger.states`, `tokens.components.resource-menu-trigger.use`
- Token-set use: Corporate-marketing resource/menu trigger, selector home::[data-omd-capture=130]
- Use: Corporate-marketing resource/menu trigger, selector `home::[data-omd-capture=130]` / `home::[data-omd-capture="130"]`
- Observed: expanded and menu-open observed; expanded/menu-open was observed
- YAML states, kept as written: expanded and menu-open observed
- Unique §9 constraint, kept on this control: a transparent `#727781` / `#51565F` 6px trigger

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the corporate marketing route |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A menu trigger can be gated; visual treatment omitted |
| loading | not-applicable | A resource/menu trigger opens a menu; it commits no operation in place |
| error | not-applicable | Opening a menu is not an action outcome this control reports |
| success | not-applicable | Opening a menu is not an action outcome this control reports |

### Resource Menu

- Role: Expanded corporate-marketing menu panel
- Primitive type: not in the token set
- Background: `#111111`
- Text: `#FFFFFF`
- Border: 1px solid `#727781`
- Radius: 8px / `tokens.rounded.menu` 8
- Padding: `8px 0px`
- Shadow: `0px 4px 8px rgba(0, 0, 0, 0.06)` / YAML `tokens.shadow.menu-overlay`
- Font: 16px / 400 / Pretendard Variable
- Use: Expanded corporate-marketing menu panel; `home::[data-omd-interaction-capture="menu-0-0"]`

The source YAML token set does not declare this panel. Omitting `kind` and a state-applicability map — because that pair is not interactive-kind evidence in the token set — is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The corporate marketing capture pairs a 40px header action with 48px section actions, keeping the bright blue lane intentionally limited. The 30px CTA radius belongs to this marketing surface; the observed 6px trigger and 8px menu panel are a separate resource-control cluster. The source artifact does not establish a universal grid, app-shell spacing scale, or layout rule for the cloud console, TOAST UI applications, or documentation pages.

The supplied capture is 1440×900 only. It establishes 40px and 48px CTA examples and a 42px resource trigger at that viewport, but it does not establish a mobile breakpoint, responsive menu geometry, or touch-target policy. Preserve the observed values only where the same surface is being recreated; validate any responsive implementation separately.

Reading the 40px/48px pairing and the 30px-versus-6px/8px split as that marketing-surface cluster, reading “intentionally limited” as the source's own layout sentence rather than as a published grid, and treating 1440×900 as the supplied capture size rather than as a breakpoint system, are derived editorial implementation inferences from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The official company statement is business-enabling and practical: it positions NHN Cloud as technology support for customers' new journeys. Keep corporate copy direct, capability-led, and concrete about the operational outcome. The TOAST UI catalog has a different, developer-oriented voice: it presents applications, components, tools, and front-end guidance. That public catalog voice is useful context for developers, but it does not turn documentation labels into corporate-marketing microcopy. [Company statement](https://company.nhncloud.com/about?lang=en) · [TOAST UI](https://ui.toast.com/)

The company-statement positioning and the TOAST UI catalog's own presentation list are first-party recordings. Naming the company statement business-enabling and practical, instructing that corporate copy stay direct, capability-led, and concrete about the operational outcome, naming the catalog voice developer-oriented, and refusing to turn documentation labels into corporate-marketing microcopy, are a derived editorial implementation inference from the verified surfaces; they are not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

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

These decisions are unnamed values, not permissions to invent. Treating the list as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not NHN Cloud-authored or taken from a separately published UI specification, including the published TOAST UI catalog.

- hover and pressed visual values on the corporate CTAs (collector markers exist; no distinct computed value is promoted)
- focus, disabled, error, success, loading, empty, toast, dialog, and form-validation visual treatments
- TOAST widget, input, grid, editor, hover color, error treatment, or responsive variant without a captured selector/value pair
- motion duration, easing curve, animation name, transition properties, and reduced-motion behavior
- `Noto Sans CJK KR` as a loaded catalog family
- declared-only `common`, `Noto Sans`, `Noto Sans JP`, `swiper-icons`, and `tui-calendar-font-icon`
- mobile breakpoint, responsive menu geometry, and touch-target policy
- a universal grid, app-shell spacing scale, or layout rule for the cloud console, TOAST UI applications, or documentation pages
