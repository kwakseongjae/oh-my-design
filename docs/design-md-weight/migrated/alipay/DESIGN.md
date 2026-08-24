# Alipay Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Ant Group says Alipay was officially established in 2004 after an escrow service was introduced on Taobao, with the purpose of creating trust between online sellers and buyers. It now describes Alipay as having developed from a payment tool into a one-stop digital daily-life platform, and describes the group's work with consumers, small businesses, merchants, and global partners across payments, public services, and local life. Catalog homepage identity is `https://www.alipay.com`.

Treating the following three URLs as the named evidence domains of this reconstruction is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. This contract covers three supplied public captures from the 2026-07-13 packet: the Alipay Open Platform developer-facing home (`https://open.alipay.com/?mobile=2`), the web/mobile-app integration page (`https://open.alipay.com/module/webApp`), and the developer-tools page (`https://open.alipay.com/tool`).

The following coverage sentence is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Those three pages are an observable developer-platform surface. They are not evidence for the native consumer wallet, and they are not a universal Alipay app theme.

The following visual-character reading — practical rather than promotional, and a system-font stack chosen by the browser — is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. The captured Open Platform expression is practical rather than promotional: a `#F5F5F5` page ground, white content planes, compact Chinese-language navigation, a blue call-to-action, and a system-font stack chosen by the browser.

Ant Design's official introduction says Ant User-Experience Design Team built it for complex enterprise products, with the values Natural, Certain, Meaningful, and Growing. The following Ant-class and default-separation readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. The public Open Platform capture visibly contains Ant-class names; that does not authorize promotion of every current Ant default into Alipay product evidence. The captured `#1890FF` banner action, 2px control radius, and 8px tools card are retained as surface-specific facts. Ant Design currently documents `#1677FF` as its default `colorPrimary`, plus configurable color, radius, and component tokens; its theming documentation explicitly supports overrides. `#1677FF` is official Ant Design documentation context, not a live Open Platform token in this run.

The following related-but-distinct reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Ant Design is related but distinct context. Those public documents explain the lineage of the developer-platform chrome. Unmodified Ant Design theming on other Alipay pages remains unproven.

The captured pages offer payment and marketing capabilities through APIs and tools. The following ecosystem-expression reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Reading the Open Platform as one of the public developer-facing expressions of the Alipay ecosystem is that derived reading.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Use the captured Open Platform developer home, including its top navigation and footer link row.
- Follow the captured web/mobile-app banner action and Open Platform search on `https://open.alipay.com/module/webApp`.
- Scan developer-tool content cards on `https://open.alipay.com/tool`.
<!-- design-md:claim-end -->

### Audience

The following no-invented-personas, stakeholder-group, and no-inferred-workflow reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Source §13 names stakeholder groups named or implied by first-party sources, not fictional user profiles: developers integrating web or mobile applications; businesses and service providers; and consumers. Those groups are not an official Alipay classification of users, not synthetic research personas, and not performance scores. Restricting Audience so those groups are not named personas and are not primary tasks, tying observable work only to the three primary tasks, and not inferring individual workflow or screen preference beyond that public role, is part of that same derived reading.

The Open Platform's web/mobile-app page addresses developers using SDKs, tools, APIs, keys, gateways, review, and release steps. Ant Group describes its partner ecosystem as supporting consumers and small businesses, while the platform offers payment, marketing, and data capabilities. Ant Group describes Alipay as a digital daily-life platform for consumers. No consumer UI component, typography, or microcopy has been captured in this update.

### Distinctive traits

- Developer-platform pages with a `#F5F5F5` page ground and white content cards
- `#1890FF` on the captured web/mobile-app banner action; `#1677FF` is Ant Design documentation context, not a live Open Platform token in this run
- Compact 14px system-font body text, with larger active navigation and banner-action text
- Small 2px search/action geometry alongside an 8px developer-tool card
- No observed hover, pressed, disabled, menu, dialog, toast, or mobile state in the supplied capture

Treating Compact and Small as visual-character readings of the recorded 14px body and 2px search/action geometry, treating the captured Open Platform chrome as a developer-platform layer rather than a consumer-wallet theme, treating `#1890FF` as the live banner-action hue rather than Ant Design `#1677FF`, and treating 2px search/action geometry and 8px tool-card geometry as distinct recorded surfaces rather than one universal Alipay radius, is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification.

### Principles

These four items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification.

1. **Trust through explicit capability boundaries.** Alipay's origin story is escrow trust; in this reference, that means do not overstate what an observed developer page proves. *UI implication:* keep native-wallet and payment-flow claims out until their own surface is observed.
2. **Certain, reusable work patterns.** Ant Design's published “Certain” value links components and patterns to lower coordination entropy. *UI implication:* use documented, surface-proven values consistently rather than inventing variants.
3. **System-font readability.** Both the observed Open Platform pages and Ant Design's font guidance favor a broad system stack. *UI implication:* preserve the actual stack classification; do not substitute a lookalike webfont.
4. **Semantic separation of domains.** Developer-platform UI, corporate context, and open-source design-system material each answer different questions. *UI implication:* a first-party narrative or license source cannot fill a missing computed component value.

Capture-bound application (source §7 Do’s and harvested geometry). Treating the following list as a capture-bound application of source §7 Do’s and harvested geometry is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification.

- Use `#1890FF` only for the recorded Open Platform banner-action specimen.
- Retain the system-stack classification unless a visible computed family and loaded/source evidence establish something more specific.
- Keep the 2px search/action and 8px tool-card geometries tied to their recorded developer-platform surfaces.
- Use Ant Design's principles and license as design-system context, not as a blanket Alipay consumer-product specification.

### Avoid

The following items copy source §7 Don’ts. They are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification.

- Do not substitute Ant Design's current `#1677FF` for the observed Open Platform action.
- Do not promote AlipayNumber, KaTeX, or icon-font declarations into a visible UI family.
- Do not recreate payment flows, tables, status tags, dialogs, or interaction variants from generic Ant Design defaults.
- Do not treat marketing/corporate history or documentation chrome as a live consumer-wallet token source.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. Catalog `primary_color` `#1890FF` is the captured web/mobile-app banner-action fill; it is not Ant Design `#1677FF`. `#FFFFFF` is the developer-tools card surface and the banner-action text; those two uses are not merged into one role. YAML Foreground `#000000` is the catalog foreground token; the raw capture records that default foreground at 85%. Navigation ink `#333333`, muted utility ink `#8997AD`, and search `#999999` stay unmerged. Search `#999999` is that input’s text and YAML `input-border`; it is not Navigation ink and not Muted.

Treating the following token-note and evidence-domain sentence as a register split — only supplied deterministic capture values for Alipay Open Platform are tokens; Ant Design defaults remain separately documented official design-system context — is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification.

Observed Alipay Open Platform:

- **Developer action / Primary** (`#1890FF`): catalog `primary_color`. Observed on `surface-2::[data-omd-capture="10"]`, the web/mobile-app banner action. YAML `primary`.
- **Page canvas** (`#F5F5F5`): observed on the `home` body. YAML `canvas`.
- **Card surface** (`#FFFFFF`): observed on the developer-tools `contentCard___nkyvg` card and banner action text. YAML `surface`.
- **Default foreground** (`#000000`): YAML `foreground`. Body, footer, and card copy; at 85% in the raw capture.
- **Navigation ink** (`#333333`): observed in the home menu. YAML `nav`.
- **Muted utility ink** (`#8997AD`): observed on compact home footer utility items. YAML `muted`.
- **Search border/text** (`#999999`): observed on the Open Platform search input. YAML `input-border`.

Official Ant Design context, not an Alipay Open Platform token:

- **Ant Design `colorPrimary` (docs)** (`#1677FF`): Ant Design currently documents this as its default `colorPrimary`. Useful when discussing Ant Design itself; it is not substituted for the captured Open Platform `#1890FF` action.

### Spacing

YAML has no spacing scale. The following no-invented-scale and measurements-stay-with-components readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. Recorded control measurements stay with the components and Layout. Treating the absence of a YAML spacing scale as a reason not to invent one is part of that same derived reading.

### Shape

YAML `rounded`: input 2, card 8.

- Search/action geometry: 2px
- Developer-tool card: 8px

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. 2px search/action corners and 8px tool-card geometry are local recorded defaults, not a universal radius scale.

### Elevation

The observed banner action has `0 2px 0 rgba(0,0,0,0.043)` shadow. YAML `shadow.cta` is that same string. The observed tool card has no shadow.

The following not-a-general-ladder reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. No overlay, popover, menu, modal, drawer, or elevation scale was captured, so none is inferred. The CTA shadow is that control’s field, not a page-wide elevation token.

### Motion

No motion, duration, easing curve, or reduced-motion behavior was present in the supplied raw evidence.

The following Ant-motion-not-evidence reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Ant Design's published motion configuration is a design-system resource, not evidence for this Open Platform surface, so no Alipay motion token is specified.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation value remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | All observed Open Platform specimens resolve to `-apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif`. This is a high-confidence system stack; no loaded named FontFaceSet match was supplied, so it is not promoted as an Alipay-owned webfont. |
| Official design-system guidance | Ant Design's font documentation also prioritizes the operating system's interface family and offers screen-readable fallbacks. This supports the system-first rationale for Ant Design documentation, not a claim that a proprietary Alipay family is in use on the captured pages. |
| Declared-only assets | The collector found `AlipayNumber`, `AlipayNumber-Medium`, `osite-menu`, and KaTeX families with `@font-face` sources but zero visible use. They remain declared-only. In particular, a declaration without computed use plus FontFaceSet/source corroboration is not a UI-family claim. |
| Official distributed font or font license | None was located in the official material collected here. Ant Design's repository is MIT-licensed software; that license applies to the library code, not to a newly inferred Alipay font license. |

### Family

- **Current visible UI family:** `-apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif`
- YAML `family.sans`: the same stack
- YAML body use: Observed Open Platform body and footer text; a system stack, not a branded webfont.
- **Declared-only:** `AlipayNumber`, `AlipayNumber-Medium`, `osite-menu`, KaTeX

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Do not render Inter, an Ant Design default stack, or a declared AlipayNumber face as though it were an observed proprietary Alipay product font. Do not present the system stack as a branded webfont.

### Type roles

Verified YAML line-height values are the unitless ratios `1.5715` (body), `3.3333` (nav-active), and `2.5` (cta).

The following ratio-versus-size-local reading, including not converting those recorded values into a different unit, is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. The px figures in the body table are size-local observations, not replacements for the ratios.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Provenance |
|---|---|---:|---:|---:|---|---|
| Default body/footer | system stack | 14px | 400 | 1.5715 | 22px | `home::body` and footer list items. YAML `body`. |
| Active top navigation | system stack | 18px | 500 | 3.3333 | 60px | `home::[data-omd-capture="1"]`. YAML `nav-active`. |
| Banner action | system stack | 16px | 400 | 2.5 | 40px | `surface-2::[data-omd-capture="10"]`. YAML `cta`. |
| Search input | system stack | 14px | 400 | (no YAML role) | 22px | `surface-2::[data-omd-capture="7"]`. Body-table only. |

YAML `use`: body = Observed Open Platform body and footer text; a system stack, not a branded webfont. nav-active = Observed active home navigation link. cta = Observed web-app banner action.

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification.

Only one state label is present in the collector output: the Open Platform search specimen is marked `focus`, with the raw values recorded on Search input. There are no interaction snapshots and no observed hover, pressed, disabled, error, loading, success, toast, dialog, or payment-processing states. The following unresolved-rather-than-imported reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Those states remain unresolved rather than being imported from Ant Design examples.

The following prior-reference and machine-component readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. The observed Alipay Open Platform action is `#1890FF`; the prior reference's Ant Design v5 defaults, generic payments components, and unobserved state variants have not been carried forward as live Alipay product claims. Measured button and input defaults remain as raw surface evidence, but are absent from machine components because no interaction state was captured. No modal, table, payment form, merchant dashboard, consumer-wallet control, status badge, dropdown, toast, hover, pressed, disabled, error, or responsive variant is specified: the supplied developer-platform capture has no selector/state provenance for one.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records a generic Search input Focus classification; that is not `focus-visible` treatment evidence. The `focus-visible` row does not carry a colour. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact destination/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

The Developer tool card has default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Developer action

- Role: web/mobile-app banner action
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#1890FF`
- Text: `#FFFFFF`
- Border: none
- Radius: 2px
- Padding: `0.01px 15px 4px`
- Size: 110px × 40px
- Font: 16px / 400 / system stack
- Use: `surface-2::[data-omd-capture="10"]`, class `ant-btn ant-btn-primary bannerBtn___ON0Mn`
- Observed: default only. No hover, pressed, or disabled state was captured.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. `#1890FF` is this control’s fill and catalog `primary_color`. It is not Ant Design `#1677FF`. `#FFFFFF` is this control’s label; it is also Card surface, not a second canvas token. YAML `shadow.cta` `0 2px 0 rgba(0,0,0,0.043)` is this control’s elevation field.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the web/mobile-app banner action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A banner action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as the web/mobile-app banner action and records selector `surface-2::[data-omd-capture="10"]`; exact destination/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

### Search input

- Role: Open Platform search
- Kind: interactive
- Type: input
- Anatomy: value field
- Text: `#999999`
- Radius: 2px
- Padding: `4px 8px 4px 11px`
- Size: 199px × 30px
- Font: 14px / 400 / system stack
- Use: `surface-2::[data-omd-capture="7"]`, class `ant-input alipay-open-search-header-input`
- Observed: default, plus named Focus. Collector classifies this specimen as focus; its raw captured values remain transparent background, 0px border width, and no shadow. The following no-focus-ring-inferred reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. There is no interaction snapshot, so no focus-ring token is inferred.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. `#999999` is this control’s text and YAML `input-border`. Named Focus is generic Focus, not `focus-visible` treatment.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the Open Platform search input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search input can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as Open Platform search and records selector `surface-2::[data-omd-capture="7"]`; exact request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

Additional observed named state: Focus (transparent background, 0px border width, no shadow). That appearance is a captured generic Focus, not an observed `focus-visible` treatment.

### Developer tool card

- Role: developer-tools content card
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Anatomy: surface
- Background: `#FFFFFF`
- Radius: 8px
- Padding: `22px 10px`
- Size: 308px × 225px
- Font: 14px / 400 / system stack
- Use: Observed developer-tools content card only. `surface-3::div`, class `contentCard___nkyvg`; six occurrences in the supplied desktop capture.
- Observed: default only
- YAML `tokens.components.tool-card`: type card, bg `#FFFFFF`, radius 8, padding `22px 10px`, font `14px/400 system`, use Observed developer-tools content card only.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. `#FFFFFF` is this card’s fill and Card surface. The card has no shadow; that absence is this surface’s field, not a page-wide elevation token.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Top navigation item

- Role: home top navigation item
- Kind: interactive
- Anatomy: label
- Text: `#333333`
- Height: 61px rendered
- Font: 14px / 400 / system stack
- Use: `home::li`, class `menuItem currentMenu`. YAML does not record this control; values are body §4 only. The following not-a-tab reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Type is not invented. Source: it is a list item, not evidence of a tab component.
- Observed: default, plus `currentMenu` appearance
- Field note: The following not-a-tab and unmerged-field readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. `#333333` is this item’s text and Navigation ink. The `currentMenu` appearance is a captured variant, not an observed click transition. Type is not invented as tab.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the home menu list item |
| hover | applicable | Pointer-web navigation item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A navigation item can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a list item, not a tab; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

The following captured-variant reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Additional observed named state: `currentMenu` appearance. That appearance is a captured variant, not an observed click transition.

### Footer link row

- Role: Open Platform footer link row
- Kind: interactive
- Anatomy: label
- Text: `#000000`
- Padding: `14px 0px 0px`
- Font: 14px / 400 / system stack
- Use: `home::li`, class `alipay-open-footer-li`; observed across all three surfaces. YAML does not record this control; values are body §4 only. The following type-not-invented reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Type is not invented.
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. `#000000` is this row’s text and YAML Foreground; the raw capture records default foreground at 85%.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the footer list item across all three surfaces |
| hover | applicable | Pointer-web footer row; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A footer row can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a footer link row; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The supplied capture is desktop-only at 1440×900.

The following measurement-boundary, limited-to, and not-generalized readings are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. Its verified layout evidence is limited to the 60px top navigation line, a 199px × 30px search input, the 110px × 40px banner action, and 308px-wide developer-tool cards. Those figures are supplied-surface measurements, not a universal layout token and not a target-size rule for unlisted controls. The capture does not establish consumer-wallet breakpoints, a merchant-console sider, table grids, payment-dialog layout, or a mobile bottom action bar. No responsive capture was supplied. The 1440px desktop observations above must not be generalized to mobile, native-app, or merchant-console behavior.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following developer-oriented reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. The supplied Open Platform pages are developer-oriented.

The official web/mobile-app description emphasizes payment, marketing, data, APIs, SDKs, configuration, review, and release.

The following citation-character and voice-application readings, including the context table, are a derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification. That official capability list is first-party platform language, not a complete product-microcopy guide. Treating it as supporting a direct, task-oriented tone for developer documentation, and not as transactional consumer copy, is part of the same derived reading. Ant Design's official value of certainty is Ant Design system guidance; treating it as supporting clear outcomes and restrained wording in that system's own guidance is a citation-character reading, not an Alipay house-voice token.

| Context | Supported direction |
|---|---|
| Developer setup | Name the capability, prerequisite, and next task plainly. |
| API/tool documentation | Use precise terms and preserve technical labels. |
| Consumer payment copy | Unresolved in this capture; do not manufacture a house voice. |

The following no-synthetic-sample reading is a derived editorial implementation inference from the verified surfaces; it is not Alipay-authored or a separately published UI specification. Consumer payment copy is unresolved in this capture; do not manufacture a house voice. No synthetic voice samples are promoted.

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

- Ant Design `#1677FF` as an Alipay Open Platform token
- hover, pressed, disabled, loading, error, success, toast, dialog, menu, and payment-processing visual treatments
- Developer action, Search input, Top navigation item, and Footer link row loading, error, and success applicability (exact destination/request/outcome unresolved; capture selectors remain known where recorded)
- interactive kind and state-applicability map for the Developer tool card
- `focus-visible` visual treatments; a focus-ring token from the Search input Focus specimen
- a spacing scale; a universal radius scale; overlay/popover/menu/modal/drawer elevation
- Inter, an Ant Design default stack, or declared `AlipayNumber` / `AlipayNumber-Medium` / `osite-menu` / KaTeX as a visible UI family; native consumer-wallet and merchant-console typography
- native consumer-wallet, merchant-console, payment-form, table, status-badge, and mobile-app components
- consumer payment copy; a manufactured house voice
- motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five kinds; official documentation of a single curve or duration is not that gate
