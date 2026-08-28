# Inflearn provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/inflearn/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | inflearn |
| name | Inflearn |
| country | KR |
| category | education |
| homepage | `https://www.inflearn.com` |
| primary_color | `#00c471` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=inflearn.com&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The favicon slug is dual-destination: identity metadata here, and a portable asset record in `DESIGN.md` §3. It is a favicon-service URL keyed to the domain rather than an Inflearn-hosted brand file, and the portable record says so.

Frontmatter `primary_color` is `#00c471`. Token-set `tokens.colors.primary` is `#00c471`. Body prose also writes `#00C471`. All three writings are kept.

Token note from source: Selector-backed tokens are limited to the supplied Inflearn product-home and course-catalog capture. The Inflab engineering article is documentation chrome and official context, not a product-token source.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| product-home | product-home | `https://www.inflearn.com/` | 2026-07-13 |
| product-courses | product-catalog | `https://www.inflearn.com/courses` | 2026-07-13 |
| engineering-documentation | documentation-chrome | `https://tech.inflab.com/20260305-new-header/` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-capture | product-surface | `https://www.inflearn.com/` | 2026-07-13 |
| courses-capture | product-surface | `https://www.inflearn.com/courses` | 2026-07-13 |
| engineering-context | official-doc | `https://tech.inflab.com/20260305-new-header/` | 2026-07-13 |
| design-system-context | official-doc | `https://tech.inflab.com/20240224-design-system/` | 2026-07-13 |
| company-context | official-doc | `https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/` | 2026-07-13 |
| font-design | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| font-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://www.inflearn.com/` (product home)
- `https://www.inflearn.com/courses` (product catalog)
- `https://tech.inflab.com/20260305-new-header/` (first-party engineering documentation/context)
- `https://tech.inflab.com/20240224-design-system/` (first-party design-system context)
- `https://story.inflab.com/main/%ED%9A%8C%EC%82%AC%EC%86%8C%EA%B0%9C/` (first-party company context)
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution)
- `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence boundary)

### Tier 2 (no usable record)

- `https://getdesign.md/inflearn` (attempted; built-in web open returned an internal safe-open failure)
- `https://styles.refero.design/?q=inflearn` (attempted; built-in web open returned an internal safe-open failure); no usable Inflearn record was returned by the required cross-check attempts.

## Sibling handling (`web/references/inflearn/.verification.md`)

The sibling exists — confirmed with `find web/references/inflearn -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/inflearn.json`) plus first-party, font-license, and required Tier 2 web checks. No browser capture was rerun and no MCP session was used.
- Artifact captured `2026-07-13T11:34:13.504Z`. Three public routes, ten component types, 99 component variants, nine observed state labels, three interaction kinds, nine interaction expansions, coverage score of 100.
- Official GNB engineering article dated 2026-03-05 in the sibling; official design-system retrospective dated 2024-03-04 in the sibling. The source body writes “2024 design-system retrospective”, “2025 GNB redesign”, and “2026 GNB account”. Those source-body year forms are the portable ones.
- Sibling narrative: “three design systems coexisted historically” and “Inflab adopted/openly customized open-source system infrastructure”. Used in the sibling to prevent a false single-system claim, not to assign legacy CSS variables. Not promoted into the portable body as new wording.
- FontFace URL counts the sibling names: Fira Code seven Google-hosted URLs; Font Awesome two Inflearn CDN URLs; Source Serif 4 twelve Google-hosted URLs; KaTeX declarations have no recorded URLs.
- Menu option selector `home::[data-omd-interaction-capture="menu-0-1"]`; sibling default “transparent, black”.
- Green course-badge wrapper: `0px 4px` padding, white text, Pretendard 11px/700/18px. Cyan badge same padding/metrics.
- Computed line-height px forms: search submit Pretendard 16px/400/16px; course article Pretendard 16px/400/24px.

Values and forms the sibling carries that the visible source body does not, kept here as corroboration and not promoted into the portable body as new facts:

- Artifact path `artifacts/reference-evidence/inflearn.json`
- Timestamp `2026-07-13T11:34:13.504Z`
- Counts: ten component types, 99 variants, coverage score of 100
- RGB samples `rgb(0, 196, 113)`, `rgb(0, 167, 96)`, `rgb(248, 249, 250)`, `rgb(73, 80, 87)`, `rgb(37, 38, 43)`, `rgb(227, 250, 252)`, `rgb(16, 152, 173)`
- Sibling-only dates `2024-03-04` and `2026-03-05`
- Sibling-only wording `three design systems coexisted` and `open-source system infrastructure`
- Sibling-only badge padding `0px 4px` and computed line-height px `16px/400/16px`, `16px/400/24px`, `11px/700/18px`
- Method string `No browser capture was rerun`

Hex values those RGB samples convert to (`#00c471`, `#00a760`, `#f8f9fa`, `#495057`, `#25262b`, `#e3fafc`, `#1098ad`) are already in the source body.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.50` product-body, `1.00` product-control, `1.64` course-badge). They are carried as ratios in the portable body, never converted to px (A1a).
- The source frontmatter records spacing and radius steps unitless (`xs: 4`, `sm: 8`, `md: 10`, `lg: 16`; `badge: 4`, `input: 8`, `pill: 32`, `full: 999`). The portable body keeps both the unitless steps and the px forms the visible sections use. `tokens.rounded.full: 999` stays a step. The content-tab radius `9999px` is a component value, not that step.
- `tokens.spacing.xs: 4` is not `tokens.rounded.badge: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.input: 8`. `tokens.spacing.md: 10` is not the tab padding `10px 16px`. `tokens.spacing.lg: 16` is not the 16px type size.
- Frontmatter `primary_color` `#00c471` and `tokens.colors.primary` `#00c471` share a hex. Body prose also writes `#00C471`. YAML component `bg` for the search submit is `#00c471`; §4 prose uses `#00C471`.
- YAML tab `bg` is `#25262b`; §4 / §14 prose uses `#25262B`.
- YAML hover state string is `hover observed: #00a760` and `hover observed: rgba(241,243,245,0.65)`.

## Source rollback list (footer)

The source footer records that legacy claims about a universal Mantine token sheet, a named 65px sticky GNB contract, course-detail/cart/payment CTAs, input outlines, footer geometry, card motion, empty/error/success states, and unmeasured course-grid rules were removed because the supplied 2026 evidence does not establish them. That rollback list is the source’s own disposition, kept here as ledger context.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Stakeholder Groups — fictional biographies | none present | The source already writes stakeholder/service facts and says no age, task frequency, conversion behavior, or preference is inferred. Nothing fictional was present to drop. No name, age, city, or biography is restated here (D2, D2a). |
| §9 Agent Prompt Guide | section not present | The source’s §9 is Source Boundaries, not a tool-facing prompt. No agent-prompt section to delete. |
| Motion duration / easing curve values | no values present | The source specifies none. Nothing to delete as an unsourced curve. The B3 promotion condition is kept in the portable body. |

## Claim ledger

Claims use YAML anchors from the source: `product` = product-home / home-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas / ink / text / neutral / subtle / hairline / primary / primary-hover / info-surface / info / cyan-tag-surface / cyan-tag | product |
| tokens.typography.family.ui | product |
| tokens.typography.product-body.size / weight / lineHeight / use | product |
| tokens.typography.product-control.size / weight / lineHeight / use | product |
| tokens.typography.course-badge.size / weight / lineHeight / use | product |
| tokens.spacing.xs / sm / md / lg | product |
| tokens.rounded.badge / input / pill / full | product |
| tokens.shadow.flat | product |
| tokens.components.product-search-submit.* | product |
| tokens.components.product-nav-action.* | product |
| tokens.components.product-course-card.* | product |
| tokens.components.product-content-tab.* | product |
| tokens.components.product-dialog-overlay.* | product |

## Capture selectors

| Component | Pointer |
|---|---|
| Product GNB search submit | `home::[data-omd-capture="8"]`; hover `home::[data-omd-capture="8"]::state-hover` |
| Product GNB navigation action | `home::[data-omd-capture="12"]`; hover `home::[data-omd-capture="12"]::state-hover` |
| Product course card | `home::article`; `surface-2::article` |
| Product content tab (selected) | `home::[data-omd-capture="19"]`; interaction `home::[data-omd-interaction-capture="tab-3-3"]` |
| Product content tab (hover) | `home::[data-omd-capture="20"]::state-hover` |
| Product dialog overlay | `home::[data-omd-interaction-capture="dialog-2-8"]` |
| Product menu option (not promoted as a token) | sibling names `home::[data-omd-interaction-capture="menu-0-1"]`; source §14 records the 14px / 8px / `10px 12px` option only |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true; five component records in the source token set
- Interaction expansions: nine (menu, dialog, tab). Only the listed selectors and states are reusable claims.
- Uncaptured focus-visible, loading, error, success, empty, toast, skeleton, and course-card-hover treatments are omitted as values; they are not turned into `not-applicable` for lack of capture. Applicability follows control role. State coverage is not claimed complete.
- Inflab publishes engineering writing about a 2024 design-system retrospective and a 2025/2026 GNB redesign. Those articles are official context. They are not a published token specification on the order of Pajamas or Carbon, and the source says they must not populate product CSS tokens. Derived-editorial qualifications therefore use the standard close: not Inflearn-authored or a separately published UI specification.
- The 2024 retrospective, the 2025 GNB redesign, the 2026 GNB account, and the core-service list (courses, challenges, mentoring, clips, and community) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **27**. This table has **27** rows (E1 1:1). The same 27 lines also carry `not Inflearn-authored`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 | Reading the two product routes as token surfaces, keeping values attached to the surface that established them, and treating the engineering article, design-system retrospective, and company introduction as named sources that do not supply computed tokens |
| Experience — Scope ¶2 | Organizing the company promise as a dense course catalogue, and calling the expression practical rather than decorative |
| Experience — Scope ¶3 (boundaries) | Reading the current product shell as distinct from every Inflearn-owned page, treating the GNB article as useful evidence for header importance rather than token authorization, and treating home and catalog as the only product-token sources |
| Experience — Scope ¶4 (narrative) | Classifying the service-and-evolution narrative as context that does not by itself supply interface tokens |
| Experience — Primary tasks | The step from recorded surfaces and the search-submit control to “primary tasks” |
| Experience — Audience | Reading the source-named learner/expert groups and core services as this product’s audience |
| Experience — Distinctive traits | The grouping half of the recorded values |
| Experience — Principles | All three §12 principles and their UI implications |
| Experience — Application rules | Grouping the Do list as application rules, and their rationales |
| Experience — Avoid | The Don't-list prohibitions and the reasons inside them |
| Foundations — Semantic color | Pairing hexes to token-set paths, keeping shared hexes on separate roles, keeping `#25262b` as a component record rather than a `tokens.colors.*` key, and keeping `#ADB5BD` selector-local |
| Foundations — Spacing | Reading the repeated 4/8/10/16 values as the conservative observed spacing set, and keeping `xs: 4` / `sm: 8` / `md: 10` / `lg: 16` off the rounded steps and the tab padding / type size |
| Foundations — Shape | Keeping `full: 999` off the content-tab `9999px`, the rounded steps off the matching spacing numbers, and the 4px / 8px / 32px / `999px` / `9999px` set as distinct observed shapes rather than a mandate |
| Foundations — Elevation | Keeping the local course-catalog shadow observation off a reusable scale |
| Foundations — Motion | Promoting no motion token from the captured absence |
| Typography — Font evidence / Official product-use | Classing company and engineering pages as narrative and infrastructure context rather than a type specimen |
| Typography — Font evidence / Declared-only | Leaving declared-only faces unpromoted as UI tokens |
| Typography — Font evidence / Official distribution | Classing the upstream README and LICENSE as asset-and-licence identification rather than a product-use token |
| Typography — Font evidence / Outside these captures | Reading typography on the source-named unobserved flows as outside this contract |
| Typography — Family | The ban on presenting system fallbacks as Inflearn brand families |
| Typography — Type roles | Keeping unitless line-height ratios as ratios, and keeping `16px / 600 Pretendard` and `14px / 700 system sans-serif` on component records and not as extra type-role keys |
| Typography — Assets | Classing the favicon slug as a third-party favicon service, and course imagery as route content |
| Components — Observed interaction states | Keeping the home disabled sample selector-local, withholding a general dialog-panel specification, treating only listed selectors as reusable claims, and inferring no general menu token |
| Components — How applicability is decided here | The role-based decision procedure, and every Reason cell in every per-component table |
| Layout & Platforms | Reading the restated steps as the conservative observed set, and keeping the 65px header rule unpromoted |
| Content & Locales — voice | The “grounded, learner-respecting” reading, the clarity-over-pressure judgment, and brand-context-not-copy-manual |
| Governance — Recorded unresolved decisions | Treating the list as named unresolved values rather than a license to invent |
