# Google provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Google migration. Canonical source remains `web/references/google/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | google |
| name | Google |
| country | US |
| category | consumer-tech |
| homepage | https://www.google.com |
| primary_color | `#1a73e8` |
| logo | `type: simpleicons`, `slug: google` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Material Design 3 |
| ds.url | https://m3.material.io |
| ds.type | system |
| ds.description | Google's public design system. Its documentation and baseline guidance are context, not a substitute for observed Google product tokens. |

Token note from the source, quoted in full:

> Only values in the supplied three-surface capture are machine tokens. Search is a captured dark public product surface; Advanced Search and Business Profile are separate light product domains. Material documentation, logo guidance, and declared-only font faces remain context rather than product-token substitutes.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| added | 2026-06-11 |
| tokens.extracted | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

Conflicts unresolved: none.

## Sibling verification file (E2)

`web/references/google/.verification.md` exists and was read in full (`find` + read). It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish, and no structural classification from it (element roles, frequency ranks, selector names) was promoted into a portable-body fact.

- **Inspected:** 2026-07-13
- **Method (verbatim):** Supplied deterministic collector bundle at artifacts/reference-evidence/google.json. The bundle was treated as raw evidence; no browser capture, browser automation, or MCP collection was rerun for this update. Values below retain the collector surface id and selector provenance.
- **Raw samples:** 14 records in the sibling Proof section.

Sibling-only observations kept here and **not** written into the portable body:

- home menu item `home::[data-omd-interaction-capture="menu-0-1"]` is 38px high with expanded and menu-open state provenance
- Business Profile primary compact pressed shadow `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px`
- Business Profile secondary pressed text `rgb(23, 78, 166)` and border `#1a73e8`
- Business Profile navigation tracking `0.25px`
- collector surface-kind labels `public-search-product-dark`, `public-search-product-form`, `public-business-product-marketing`

## Evidence class

| Domain | Surface | What it establishes | What it does not establish |
|---|---|---|---|
| Dark public Search | `https://www.google.com/` | Dark canvas `#22242a`, Arial system type, submit-key geometry and hover shadow | Light-surface tokens; Material baseline palette |
| Advanced Search form | `https://www.google.com/advanced_search?hl=ko` | Light canvas, Arial field metrics, transparent input | Search-home chrome; Business Profile actions |
| Business Profile product marketing | `https://business.google.com/kr/business-profile/` | Google Sans families, `#1a73e8` actions, 24px card, navigation row | Search-domain type; Material docs chrome as product tokens |
| Official narrative | about.google story / philosophy; Google Design type article | Mission, philosophy sentences, Product Sans → Google Sans → Google Sans Text history | Current CSS values |
| Published design system (context) | Material Design 3 typography overview | Official system context | Search or Business Profile product tokens |
| Brand-resource | about.google brand-resource guidance | Brand-use boundary | Component tokens |
| Distributed code face | Google Sans Code GitHub, OFL 1.1 | Code-face distribution and license | Live UI family on the three surfaces |

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-search-product-dark | https://www.google.com/ | 2026-07-13 |
| advanced-search | public-search-product-form | https://www.google.com/advanced_search?hl=ko | 2026-07-13 |
| business-profile | public-business-product-marketing | https://business.google.com/kr/business-profile/ | 2026-07-13 |

## Sources

### Tier 1

- https://www.google.com/ — captured dark Search product
- https://www.google.com/advanced_search?hl=ko — captured Advanced Search product
- https://business.google.com/kr/business-profile/ — captured Business Profile product
- https://about.google/company-info/our-story/
- https://about.google/company-info/philosophy/
- https://design.google/library/google-sans-flex-font
- https://about.google/brand-resource-center/guidance/
- https://m3.material.io/styles/typography/overview
- https://github.com/googlefonts/googlesans-code

**Verified:** 2026-07-13

### Tier 2 (no usable record)

- https://getdesign.md/google — direct fetch unavailable; no value adopted
- https://styles.refero.design/?q=google — query fetch unavailable; no value adopted

### Narrative (not interface tokens)

- Official history: https://about.google/company-info/our-story/
- Official philosophy: https://about.google/company-info/philosophy/
- Google Sans role history: https://design.google/library/google-sans-flex-font
- Brand-use boundary: https://about.google/brand-resource-center/guidance/
- Material typography context: https://m3.material.io/styles/typography/overview
- Google Sans Code license: https://github.com/googlefonts/googlesans-code

## Claim ledger

Claims use YAML anchors from the source: `business_live` = business-profile / business-profile-live / live-inspect / 2026-07-13; `advanced_live` = advanced-search / advanced-search-live / live-inspect / 2026-07-13; `home_live` = home / home-live / live-inspect / 2026-07-13.

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.primary | business-profile | Foundations Semantic color · Components high-emphasis / medium-emphasis |
| tokens.colors.canvas | advanced-search | Foundations Semantic color |
| tokens.colors.canvas-dark | home | Foundations Semantic color |
| tokens.colors.foreground | business-profile | Foundations Semantic color · Components inactive card |
| tokens.colors.foreground-inverse | home | Foundations Semantic color |
| tokens.colors.muted | business-profile | Foundations Semantic color |
| tokens.colors.outline | business-profile | Foundations Semantic color · Components medium-emphasis border |
| tokens.typography.family.ui | business-profile | Typography Family · Type roles |
| tokens.typography.family.text | business-profile | Typography Family · Type roles |
| tokens.typography.family.display | business-profile | Typography Family · Type roles |
| tokens.typography.family.search-system | home | Typography Family · Type roles |
| tokens.typography.display.* | business-profile | Typography Type roles Business heading |
| tokens.typography.body.* | business-profile | Typography Type roles Business body |
| tokens.typography.action.* | business-profile | Typography Type roles Business action |
| tokens.typography.search-field.* | advanced-search | Typography Type roles Search field |
| tokens.spacing.xs / sm | home | Foundations Spacing · Layout |
| tokens.spacing.md / lg / xl | business-profile | Foundations Spacing · Layout |
| tokens.rounded.nav | business-profile | Foundations Shape · Components navigation |
| tokens.rounded.search-key | home | Foundations Shape · Components submit key |
| tokens.rounded.card | business-profile | Foundations Shape · Components inactive card |
| tokens.rounded.full | business-profile | Foundations Shape · Components actions |
| tokens.shadow.flat | business-profile | Foundations Elevation |
| tokens.shadow.search-key-hover | home | Foundations Elevation · Components submit key hover |
| tokens.components.business-primary.* | business-profile | Components high-emphasis action |
| tokens.components.business-secondary.* | business-profile | Components medium-emphasis action |
| tokens.components.business-nav.* | business-profile | Components navigation menu item |
| tokens.components.business-card.* | business-profile | Components inactive image card |
| tokens.components.search-key.* | home | Components Dark Search submit key |

## Capture selectors

| Component | Pointer |
|---|---|
| Business Profile high-emphasis action | `surface-3::[data-omd-capture="11"]` |
| Business Profile medium-emphasis action | `surface-3::[data-omd-capture="10"]` |
| Business Profile navigation menu item | `surface-3::[data-omd-capture="2"]` |
| Business Profile inactive image card | `surface-3::div` with class `ion-scrolling-3up-cards-list-card` |
| Business Profile heading | `surface-3::h2` with class `ion-scrolling-3up-cards-list-header__headline` |
| Dark Search submit key | `home::[data-omd-capture="12"]` |
| Advanced Search text field | `surface-2::[data-omd-capture="2"]` |
| Dark Search menu trigger (expanded menu; no portable component) | `home::[data-omd-capture="6"]` opened menu-0-0 through menu-0-6 |

## Token-block component strings (verbatim)

| Key | type | fields |
|---|---|---|
| business-primary | button | bg `#1a73e8`; fg `#ffffff`; radius `1000px`; padding `8px 16px`; height `42px`; font `16px / 500 / Google Sans`; states `default, hover, pressed, and focus observed on Business Profile high-emphasis action`; use `Business Profile high-emphasis action only.` |
| business-secondary | button | bg `#ffffff`; fg `#1a73e8`; border `1px solid #dadce0`; radius `1000px`; padding `8px 16px`; height `42px`; font `16px / 500 / Google Sans`; states `default, hover, pressed, and focus observed on Business Profile medium-emphasis action`; use `Business Profile medium-emphasis action only.` |
| business-nav | button | fg `#202124`; radius `4px`; padding `0px 10px`; height `48px`; font `14px / 500 / Google Sans`; states `default, hover, pressed, and focus observed on Business Profile menu item`; use `Business Profile global navigation menu item.` |
| business-card | card | bg `#ffffff`; fg `#3c4043`; radius `24px`; padding `18px 18px 32px`; font `16px / 400 / Google Sans Text`; states `disabled observed on the captured inactive image card`; use `Business Profile scrolling image card only.` |
| search-key | button | bg `#303134`; fg `#e8eaed`; border `1px solid #303134`; radius `8px`; padding `0px 16px`; height `36px`; font `14px / 500 / Arial`; states `default, hover, pressed, and focus observed on dark Search submit controls`; use `Captured dark Search homepage submit key only.` |

## Raw samples (from the sibling)

| # | Surface | Element | Recorded values |
|---:|---|---|---|
| 1 | home | body | background `#22242a`; color `#e8e8e8`; font Arial, sans-serif; 14px / 400 |
| 2 | home | search submit `[data-omd-capture="12"]` | `#303134` / `#e8eaed`; border 1px `#303134`; radius 8px; padding 0px 16px; height 36px; Arial 14px / 500 |
| 3 | home | search submit hover | border 1px `#5f6368`; box-shadow `rgba(23,23,23,0.24) 0px 1px 3px 0px` |
| 4 | home | menu interaction | trigger `[data-omd-capture="6"]`; menu item 38px high (sibling-only height) |
| 5 | advanced-search | input `[data-omd-capture="2"]` | transparent; `#474747`; padding 12px 16px; height 48px; Arial 16px / 400 / 22px |
| 6 | business-profile | primary compact `[data-omd-capture="11"]` | `#1a73e8` / `#ffffff`; radius 1000px; padding 8px 16px; height 42px; Google Sans 16px / 500 / 24px |
| 7 | business-profile | primary hover | `rgb(26, 114, 231)` (`#1a72e7`) |
| 8 | business-profile | primary pressed | `#185abc`; sibling-only shadow `rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px` |
| 9 | business-profile | primary focus | `#185abc`; border 1px `#ffffff`; 2px `#185abc` outer ring |
| 10 | business-profile | secondary `[data-omd-capture="10"]` | `#ffffff` / `#1a73e8`; border 1px `#dadce0`; radius 1000px; padding 8px 16px; height 42px |
| 11 | business-profile | secondary pressed | `#e8f1fd`; sibling-only text `rgb(23, 78, 166)` and border `#1a73e8` |
| 12 | business-profile | secondary focus | `#e4eefc`; 2px `#1a73e8` outer ring |
| 13 | business-profile | navigation `[data-omd-capture="2"]` | `#202124`; radius 4px; padding 0px 10px; height 48px; Google Sans 14px / 500 / 20px; sibling-only tracking 0.25px |
| 14 | business-profile | image card | `#ffffff` / `#3c4043`; radius 24px; padding 18px 18px 32px; Google Sans Text 16px / 400 / 24px; disabled observed |
| 15 | business-profile | heading | Google Sans Display 48px / 400 / 56px / -0.5px |

### Font corroboration (sibling)

- Google Sans Text: computed visible usage 145; loaded/high; 156 fonts.gstatic.com source URLs
- Google Sans: computed visible usage 107; loaded/high; 25 fonts.gstatic.com source URLs
- Google Sans Display: computed visible usage 4; loaded/high; 15 fonts.gstatic.com source URLs
- Arial: computed visible usage 64; system/high
- Product Sans, Google Symbols, Material Icons: declared only, zero visible usages
- Material Symbols Outlined: one loaded icon-font usage

## Logo decision

- Existing simpleicons Google logo mapping is retained.
- The supplied evidence packet did not include a first-party raster logo asset that would justify replacing the existing mapping.

## Conflict matrix (from the sibling)

| Field | Resolution |
|---|---|
| Search homepage canvas | Keep a scoped Search dark canvas `#22242a`; remove the old universal-white homepage claim. |
| Light product canvas | Keep `#ffffff` scoped to Advanced Search and Business Profile. |
| Primary action blue | Keep `#1a73e8` as the observed Business Profile primary action, not a claim about every Google product. |
| UI font | Promote only the recorded surface roles, backed by FontFaceSet/source corroboration. |
| Search font | Keep Arial as a system family; do not substitute Google Sans. |
| Product Sans and icon faces | Declared-only/icon boundary retained; no text-family token. |
| Material 3 docs | Official design-system context only; do not use docs chrome as product-token evidence. |

**Conflicts unresolved:** none

## Omission ledger

Mention of a deleted class, not a re-hosting of its contents (D2a / E2d).

| Item | Disposition |
|---|---|
| Source H1 `# Design System Inspiration of Google` | Deleted. Replaced by Core identity line `# Google Design System`. |
| YAML frontmatter / verification_v2 / claim anchors / freshness dates | Separated into this file. Not a portable-body fact. |
| §9 Agent Prompt Guide (five quick-reference bullets) | Deleted as tool-command restatement. Every renderable value in those bullets already has a Components or Foundations slot. |
| §13 Personas | Deleted. The source states that no first-party user-research or stakeholder-segment source was supplied and contains a `[FILL IN]` audience placeholder. No named persona existed to re-host. Placeholder omitted (A1). |
| §14 / §15 `[FILL IN]` wrappers | Omitted from the portable body. The unnamed targets (empty / loading / error / success surfaces; first-party product motion) remain in Governance Named gaps as names without values. |
| Sibling-only measurements listed under Sibling verification file | Kept in this file only. |

## Portable derived-editorial scope

Each row is a portable-body sentence or group whose evidence class is derived editorial implementation inference, not a Google-authored fact or a Material Design 3 specification. Mention here is an index of those qualifications, not a second copy of the interpretive prose.

| Location in DESIGN.md | What is derived | Qualification sits |
|---|---|---|
| Experience Scope (surface split) | Treating the three captures as separate product domains rather than one interchangeable template | adjacent in the same paragraph |
| Experience Scope (identity reading) | "unusually disciplined" split; identity readable through blue / charcoal / rounded controls / multicolor mark rather than one page theme | adjacent in the same paragraph |
| Experience Scope (type-role confirmation) | Live evidence "confirms" type roles remain separated rather than collapsed into a system-font fallback | adjacent in the same paragraph |
| Experience Primary tasks | Naming the three surfaces as the contract's primary tasks | adjacent above the list |
| Experience Distinctive traits | Grouping the five observations as the distinctive layer, including the first bullet's non-interchangeable-template claim | adjacent above the list |
| Experience Principles | Treating the four items as this contract's principles, and each *UI implication* | adjacent above the list |
| Experience Application rules | Justifications inside the Do list | adjacent above the list |
| Foundations Semantic color | Treating source role names as observation labels rather than Material Design 3 baseline roles | adjacent in the same paragraph |
| Foundations Spacing | Reading 4/8/12/16/24/32/48px as observations, not a universal Google grid | adjacent in the same paragraph |
| Typography Font evidence | Promoting loaded Google Sans / Google Sans Text as usable live UI families for Business Profile | adjacent in the same table cell |
| Typography Family | Prohibiting a system or fallback stack from being presented as the Google Sans family | adjacent in the same bullet |
| Typography Assets logo sentence | Classing Simple Icons as a third-party rendering | adjacent in the same bullet |
| Components Capture record | Interactive-kind and applicability verdicts; Focus versus `focus-visible` evidence-class distinction | adjacent above the first component |
| Components inactive image card | Omitting `kind` and a state-applicability map | adjacent on the card record |
| Layout & Platforms | Reading the same spacing scale as observations, not a universal Google grid | adjacent in the same bullet |
| Content & Locales | Reading a short, plain, task-naming register as the product implication of official philosophy; tone-column labels | adjacent above the table |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- ds.type: system (Material Design 3)
- Interaction states were captured on named components; empty / loading / error / success surfaces were not. Uncaptured treatments are omitted. They are not `not-applicable` unless the control's role makes the state meaningless. State coverage is not claimed complete.
- Official history, philosophy, Google Design type article, brand-resource guidance, and Material typography overview are narrative or system context, not Search or Business Profile product-token sources
