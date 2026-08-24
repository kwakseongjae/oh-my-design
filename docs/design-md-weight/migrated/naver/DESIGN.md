# Naver Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Naver (네이버) is a Korean search and discovery platform. This contract covers three inspected domains only: the portal home, search results, and the NAVER Corp brand-resource page.

The following connective-tissue, surface-optimization, and surface-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. The familiar green is the stable connective tissue. Each inspected surface still optimizes independently for dense information retrieval, quick navigation, and local task completion. Official identity stays shared; typography, spacing, and components stay attached to the surface where they were observed. Values from one surface are not silently generalized to the others.

The official identity constant is NAVER Green (`#03C75A`). Portal and search use a System-first Korean stack. The corporate brand page loads and visibly uses `InterVariable`.

The following product-chrome atmosphere reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Product chrome is otherwise neutral and information-dense.

NAVER's official company page describes its beginning in 1999 and frames the organization as “Navigators” connecting possibilities through technology and services. The same official timeline presents integrated search in 2000, HyperCLOVA in 2021, and the 1784 robot-friendly headquarters in 2022. The official brand guide describes NAVER Green as carrying trust, challenge, exploration, familiarity, and an eco-friendly image.

The following sourced-context reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Those statements remain sourced brand context rather than inferred unpublished principles.

The following useful-tension reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. In product terms the useful tension is recognizability versus local job density. Search favors fast scanning and compact labels; the portal coordinates many destinations; the corporate brand surface explains the shared identity. Green, logo rules, and company statements stay at brand level.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

- Enter a query and compare search results.
- Scan portal destinations such as news, shopping, maps, and mail.
- Retrieve official identity assets from the NAVER Corp brand-resource page.
<!-- design-md:claim-end -->

### Audience

NAVER has not published validated product personas for the inspected portal, search, and brand-resource surfaces. Treating the three bullets above as task contexts supported by those surfaces rather than demographic profiles, not promoting invented biographies, and requiring validation of the specific NAVER service, language, device, and task before turning those contexts into research personas, is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification.

### Distinctive traits

The following trait readings (dense composition, live-computed controls, separate-domain measurements) are a derived editorial implementation inference from the verified surfaces; they are not NAVER-authored or a separately published UI specification.

- Official brand green `#03C75A`, with RGB 3/199/90, CMYK 72/0/88/0, and Pantone 2270C
- Dense portal/search composition on `#FFFFFF` with dark gray text
- System-first portal/search typography; `InterVariable` on the corporate brand page
- Search, filters, tabs, cards, menus, and paging controls grounded in live computed evidence
- Portal, search, and corporate measurements kept in separate domains

### Principles

The official logo and `#03C75A` identity rules in Avoid and capture-bound application come from the NAVER brand guide. The three numbered principles, including their UI implications, are a derived editorial implementation inference from the verified surfaces; they are not NAVER-authored or a separately published UI specification.

1. **Keep identity consistent.** The official logo and `#03C75A` must not be arbitrarily recolored, distorted, outlined, or given effects.
   - *UI implication:* isolate brand identity tokens from transient service colors.
2. **Connect people to destinations quickly.** Public navigation and search copy is literal and compact.
   - *UI implication:* prioritize recognizable labels and scanning speed.
3. **Separate service surfaces.** NAVER operates many products with different local systems.
   - *UI implication:* never treat one service's typography or component geometry as a universal NAVER token.

Capture-bound application:

The following capture-bound application list is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification.

- Use official NAVER Green exactly as `#03C75A` for identity applications, and only where identity or a verified action requires it.
- Keep portal/search System typography separate from corporate `InterVariable` typography.
- Preserve compact Korean text rhythm and the explicit interactive states recorded below.
- Treat live product evidence and the official brand guide as different authorities.
- Keep 12px result cards and 18px filter chips as the observed search-result geometry, not as a universal NAVER radius scale.

### Avoid

First-party brand-guide Don’ts:

- Do not alter the official logo's proportions, color, or style.

The remaining items are a derived editorial implementation inference from the verified surfaces; they are not NAVER-authored or a separately published UI specification.

- Do not infer native-app typography from these web surfaces.
- Do not promote declared-only Nanum or Pretendard faces as current UI fonts.
- Do not claim Nanum, Pretendard, or `InterVariable` outside the surfaces where they were actually observed.
- Do not invent a public NAVER product design system from brand-resource guidance.
- Do not promote older `#0068C3`, `#6633B9`, or estimated semantic colors as current universal NAVER tokens without surface-specific live evidence.
- Do not merge Search Input text `#000000` into Portal Ink `#2E2E2E` or Search Ink `#1C1C1C`.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Official identity:

- **NAVER Green** (`#03C75A`): official logo and identity color. The guide specifies RGB 3/199/90, CMYK 72/0/88/0, and Pantone 2270C.

The following identity-use reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Use it for identity applications, and only where identity or a verified action requires it.

Portal and search:

- **Canvas** (`#FFFFFF`): portal and result surfaces.
- **Portal Ink** (`#2E2E2E`): common portal control and chrome text.
- **Search Ink** (`#1C1C1C`): primary search-result text.
- **Search Link** (`#0C43B7`): current search-result link/chip blue.
- **Search Muted** (`#8C8C8C`): inactive tabs and secondary labels.
- **Hairline** (`#E5E5E5`): filter-chip and light container border.

Corporate brand page:

- **Corporate Ink** (`#1A1D24`): brand-page navigation and section labels.
- **Corporate Muted** (`#717680`): secondary corporate copy.

The following unmerged-role and older-hex reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Search Input text `#000000` is that field's renderable foreground, not a general ink role. Older `#0068C3` and `#6633B9` are not current universal NAVER tokens.

### Spacing

The following spacing scale and hierarchy application is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Use the observed 4/8/12/16/20px spacing clusters for compact UI composition. Portal and SERP density are surface properties, not permission to remove hierarchy. Corporate pages use more generous rhythm and must not inherit portal density automatically.

### Shape

- Square controls: `0px`
- YAML `rounded`: sm 4, md 8, lg 12, full `9999px`
- Search-result cards: `12px`

The following local-geometry and scale reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Filter-chip `18px` is local search-result geometry, not a universal radius scale. Cards may use 12px rounding on search surfaces; utility controls range from square to fully circular.

### Elevation

Most sampled portal/search controls use no shadow. The portal paging button uses a restrained `0 1px 2px rgba(0,0,0,0.06)` shadow.

The following elevation use-priority reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Prefer border, spacing, and type hierarchy before introducing elevation. No universal NAVER shadow scale is claimed.

### Motion

The collector captured state changes but did not establish a canonical duration or easing scale. Official product motion tokens were not found in the inspected public sources.

The following motion-use reading is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Use motion only to clarify menu expansion, tab selection, and focus transitions; respect reduced-motion preferences.

Do not promote a motion duration, easing, animation name, transition, or reduced-motion behavior until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No single official family is published for every NAVER product surface. |
| Live surface-use | Portal/search use a System-first stack; the corporate brand page visibly uses loaded `InterVariable`. |
| Official distributed asset | NAVER distributes Nanum and D2Coding, but distribution alone is not UI usage. |
| Declared-only | NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard were declared without visible use. |
| Unresolved claim | A minority `나눔고딕` usage had no matching loaded FontFace. This is a captured but uncorroborated unresolved claim, not a promoted family. |

The following specimen-availability, declaration-is-not-visible-use, and D2Coding-not-UI-use readings are a derived editorial implementation inference from the verified surfaces; they are not NAVER-authored or a separately published UI specification. Specimen availability is evaluated per surface and never substitutes one NAVER-published font for another.

- **Portal and search:** `System`. Computed stacks begin with `-apple-system` and continue through Korean platform fallbacks.
- **Corporate brand page:** `InterVariable`, loaded from `https://www.navercorp.com/font/InterVariable.woff2` and visibly used.
- **Declared only in this capture:** NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard. Declaration is not visible use.
- **Unresolved minority:** `나눔고딕` appeared on four search elements without a matching loaded FontFace.
- **No canonical UI monospace:** D2Coding is a NAVER-published font, not evidence that current portal/search UI uses it.

### Type roles

| Role | Surface | Font | Size | Weight | Line height | Tracking |
|---|---|---|---:|---:|---:|---:|
| Portal Search | Portal | System | 21px | 700 | 24px | -0.4px |
| Portal UI | Portal | System | 14.7px | 500 | 17.85px | -0.4px |
| Search Tab | Search | System | 16px | 600 | 21px | -0.3px |
| Search Title | Search | System | 18px | 600 | 24px | -0.16px |
| Corporate Tab | Brand resource | InterVariable | 20px | 600 | 28px | -0.6px |

### Assets

The following identity-asset, catalog-logo, and InterVariable-not-system-stack readings are a derived editorial implementation inference from the verified surfaces; they are not NAVER-authored or a separately published UI specification. Official identity applications use NAVER Green `#03C75A` and the official logo rules. Catalog logo metadata is Simple Icons identity (`naver`), not a captured first-party mark.

- `InterVariable` on the corporate brand page is a loaded webfont from the NAVER Corp origin above. Do not present a system stack as `InterVariable`.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here while the catalog graph is not adopted:

- Hover / pressed: captured on search tabs and utility actions.
- Selected: captured on portal/search/corporate tabs.
- Expanded: captured for the portal listbox/menu.
- Checked / unchecked: captured for portal display controls and a search switch. Those controls are not in the harvested component list; they are not invented as extra canonical components here.
- Empty, loading, error, success, disabled: no safe representative live evidence captured in this run.
- Do not fill absent states with generic NAVER-looking values.

Recording those unobserved empty/loading/error/success/disabled treatments as omitted rather than synthesized, and not filling them with generic NAVER-looking values, is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification.

Search Submit and Paging Button also record “default observed; hover and pressed not retained.” Both that component-level note and the search-tab/utility-action capture above are kept. This pass does not drop either side.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic `focus` capture is not `focus-visible` treatment evidence; named focus on Search Input stays an additional observed state, and the `focus-visible` visual treatment remains omitted. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow an identified product role, not primitive kind. Where exact selector/label/request/outcome is unresolved, those three applicability fields are omitted at this boundary rather than closed. This is not a complete state-coverage claim.

Filter Chip and Result Card record default geometry and no state or interactive-kind evidence, so kind and a state-applicability map are omitted.

### Search Input

- Role: query field inside the portal's branded search assembly
- Kind: interactive
- Type: input
- Anatomy: value field
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 17px 0
- Height: 58px
- Font: 21px / 700 / System
- Use: Portal-home search query input inside the branded search assembly
- Observed: focus and autocomplete listbox expansion

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the portal query field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive field; visual treatment omitted |
| disabled | applicable | A query field can be unavailable; visual treatment omitted |
| loading | not-applicable | A portal query field accepts text; the field itself does not enter a loading state |
| error | not-applicable | Portal search is query entry, not a validating form field that reports error on the input |
| success | not-applicable | Submitting a query is not a success confirmation on the field |

Additional observed named states: generic `focus`, and autocomplete listbox expansion. Generic `focus` is not `focus-visible` evidence.

### Search Submit

- Role: AI/search submission control adjacent to the query field
- Kind: interactive
- Type: button
- Anatomy: control
- Background: transparent
- Text: `#2E2E2E`
- Radius: 0px
- Padding: 9px 9px 9px 10px
- Height: 58px
- Use: Portal AI/search submit control
- Observed: default observed; hover and pressed not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default observed on the portal submit control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A submit control can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control only as Portal AI/search submit; exact selector/label/request/outcome is unresolved, so those three fields stay omitted at this boundary rather than closed as a query-or-navigate destination.

Additional observed named state: pressed, not retained on this control.

### Vertical Tab

- Role: search-result vertical/category navigation
- Kind: interactive
- Type: tab
- Anatomy: tab
- Background: transparent
- Text: `#8C8C8C`
- Radius: 0px
- Padding: 6px 12px 14px
- Font: 16px / 600 / System
- Hover: `#595959`
- Pressed: `#595959`
- Use: Search vertical/category navigation
- Observed: default `#8C8C8C`; hover and pressed `#595959`; selected captured on search tabs

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default `#8C8C8C` captured on search verticals |
| hover | applicable | Pointer-web tab; captured `#595959` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A vertical can be unavailable; visual treatment omitted |
| loading | not-applicable | A search vertical tab selects a category; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named states: pressed `#595959`, and selected (no separate selected color recorded for this tab).

### Filter Chip

- Role: search-result image and result refinement filter
- Type: badge
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Text: `#0C43B7`
- Border: 1px solid `#E5E5E5`
- Radius: 18px
- Padding: 4px 12px 4px 4px
- Font: 13px / 400 / System
- Use: Image and result refinement filter

### Result Card

- Role: grouped search-result content surface
- Type: card
- Kind: omitted. The source records default geometry and no state or interactive-kind evidence, so no `Kind: interactive` confirmation and no §4.4 state-applicability map are declared.
- Background: `#FFFFFF`
- Text: `#1C1C1C`
- Radius: 12px
- Use: Grouped search-result content surface

### Paging Button

- Role: portal carousel previous/next action
- Kind: interactive
- Type: button
- Anatomy: control
- Background: `#FFFFFF`
- Text: `#2E2E2E`
- Border: 1px solid rgba(0,0,0,0.15)
- Radius: 9999px
- Height: 36px
- Shadow: `0 1px 2px rgba(0,0,0,0.06)`
- Use: Portal carousel previous/next control
- Observed: default observed; hover and pressed not retained

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default observed on the portal carousel control |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A carousel previous/next control can be unavailable at an end; visual treatment omitted |
| loading | not-applicable | A carousel previous/next control steps through present items; the control itself does not enter a loading state |
| error | not-applicable | An arrow control does not report a request or validation failure of its own |
| success | not-applicable | Advancing an item is not an action-outcome confirmation on the arrow |

Additional observed named state: pressed, not retained on this control.

### Overflow Menu

- Role: portal content-header overflow navigation option
- Kind: interactive
- Type: listItem
- Anatomy: option
- Background: transparent
- Text: `#2E2E2E`
- Font: 14.7px / 500 / System
- Use: Content-header overflow navigation
- Observed: expanded listbox and option

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Option observed in the expanded portal listbox |
| hover | applicable | Pointer-web menu option; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A menu option can be unavailable; visual treatment omitted |
| loading | not-applicable | Choosing an overflow option selects a destination; the option itself does not enter a loading state |
| error | not-applicable | Option meaning is selection, not a request or validation failure on the row |
| success | not-applicable | Choosing an option is not a success confirmation on the row |

Additional observed named state: expanded listbox.

### Section Tab

- Role: NAVER Corp brand-resource section switcher
- Kind: interactive
- Type: tab
- Anatomy: tab
- Background: transparent
- Text: `#1A1D24`
- Radius: 0px
- Padding: 17px 0 18px
- Font: 20px / 600 / InterVariable
- Use: Brand guide versus official-photo section switching
- Observed: selected

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the brand-resource section switcher |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A section tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A brand-resource section tab selects a panel; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected vs unselected, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: selected.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The following compact-composition and density application is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Search remains the primary spatial anchor on the portal. Use the observed 4/8/12/16/20px spacing clusters for compact UI composition. Portal and SERP density are surface properties, not permission to remove hierarchy. Cards may use 12px rounding on search surfaces; utility controls range from square to fully circular. Corporate pages use more generous rhythm and must not inherit portal density automatically.

The inspected evidence is desktop at 1440×900; mobile-native claims are intentionally absent.

The following narrow-layout application is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. Preserve 44px-or-larger touch targets when adapting dense portal utilities to narrow layouts. Allow search-result cards to stack before shrinking readable Korean type. Keep the search control visually dominant and avoid horizontal overflow in tab/filter rows.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The following voice and application guidance is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification. The inspected public copy is direct, functional, and navigation-led. Labels such as “검색하기”, “삭제”, “전체 서비스”, and “브랜드 리소스” describe the action or destination without promotional filler.

| Do | Don't |
|---|---|
| Use short Korean action labels | Add decorative slogans to utility controls |
| Explain the next recoverable action | Blame the user |
| Name destinations consistently | Rename familiar portal concepts for novelty |

Treating the verified live samples as observed copy rather than a complete microcopy guide, and not promoting synthetic voice samples, is a derived editorial implementation inference from the verified surfaces; it is not NAVER-authored or a separately published UI specification.

Verified live samples, kept as observed copy rather than a complete microcopy guide:

- “검색하기” — corporate-site integrated search
- “브랜드 리소스” — official brand-resource section
- “기술과 서비스로 세상의 모든 가능성을 연결합니다” — corporate navigation statement

No synthetic voice samples are promoted.

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

- empty, loading, error, success, and disabled visual treatments
- hover and pressed treatments not retained on Search Submit and Paging Button
- `focus-visible` visual treatments
- checked/unchecked treatments for portal display controls and a search switch
- canonical motion duration, easing, animation name, transition properties, and reduced-motion behavior — promote only after per-component computed capture of all five
- a universal NAVER shadow scale
- native-app typography and mobile-native layout beyond the 1440×900 desktop capture
- declared-only NanumSquare, NanumSquareNeo, NanumHuman, and Pretendard as current UI fonts
- `나눔고딕` as a loadable UI face
- D2Coding as current portal/search UI monospace
- older `#0068C3` and `#6633B9` as current universal tokens
