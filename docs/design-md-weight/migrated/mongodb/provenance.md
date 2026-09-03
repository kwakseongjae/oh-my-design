# MongoDB provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/mongodb/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | mongodb |
| name | MongoDB |
| country | US |
| category | backend-devops |
| homepage | https://www.mongodb.com |
| primary_color | `#00ed64` |
| logo | `type: simpleicons`, `slug: mongodb` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | LeafyGreen |
| ds.url | https://www.mongodb.design |
| ds.type | system |
| ds.description | MongoDB's open-source design system and React component library. |

`primary_color` `#00ed64` is dual-destination: identity metadata here, and a portable color record in `DESIGN.md` (catalog `primary_color` and `tokens.colors.primary`). `logo.type: simpleicons` / `slug: mongodb` is dual: identity metadata here, and a portable Assets record that classifies it as a third-party icon-set rendering. `ds.type: system` is a ledger field (A1c); the fact it names (LeafyGreen is MongoDB's open-source design system and React component library) is also in portable Scope.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

The source footer records **Verified:** 2026-07-13. That producer string is ledger metadata.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.mongodb.com/ | 2026-07-13 |
| surface-2 | design-system | https://www.mongodb.design/ | 2026-07-13 |
| surface-3 | documentation | https://www.mongodb.com/ko-kr/docs/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.mongodb.com/ | 2026-07-13 |
| leafygreen-live | official-doc | https://www.mongodb.design/ | 2026-07-13 |
| docs-live | official-doc | https://www.mongodb.com/ko-kr/docs/ | 2026-07-13 |
| typography-guidance | official-doc | https://www.mongodb.design/foundations/typography | 2026-07-13 |
| source-code-license | license | https://github.com/adobe-fonts/source-code-pro/blob/release/LICENSE.md | 2026-07-13 |

### Tier 1

- supplied collector evidence for https://www.mongodb.com/, https://www.mongodb.design/, and https://www.mongodb.com/ko-kr/docs/
- official typography guidance https://www.mongodb.design/foundations/typography
- official company context https://www.mongodb.com/company and https://www.mongodb.com/company/our-story

### Tier 2 (no value promoted)

- https://getdesign.md/mongodb/design-md (opened; third-party analysis, no value promoted)
- https://styles.refero.design/?q=MongoDB (attempted; no usable result page)

### Narrative (not interface tokens)

- https://www.mongodb.com/company — official company page: the 2007 founding context, company mission, and the statement that the founders learned relational-database limitations at more than 400,000 ads per second. Used for source §§1 and 10–13; not a token source.
- https://www.mongodb.com/company/our-story — official history: 10gen launched MongoDB in 2009, renamed itself MongoDB in 2013, and frames Atlas as a unified developer data platform. Used for source §§1, 11–13; not a token source.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `docs` = surface-3 / docs-live / computed-style / 2026-07-13; `leafygreen` = surface-2 / leafygreen-live / computed-style / 2026-07-13.

| claim | surface | portable destination |
|---|---|---|
| tokens.colors.primary | home | Foundations Semantic color Spring Green; catalog `primary_color` |
| tokens.colors.navy | home | Foundations Semantic color MongoDB Navy |
| tokens.colors.forest-chrome | home | Foundations Semantic color Forest Green chrome; documentation icon-control text kept on that component |
| tokens.colors.link | home | Foundations Semantic color Link Blue |
| tokens.colors.docs-canvas | docs | Foundations Semantic color Documentation canvas |
| tokens.colors.docs-border | docs | Foundations Semantic color Documentation border |
| tokens.colors.docs-muted | docs | Foundations Semantic color Documentation muted text; LeafyGreen utility-control background kept on that component |
| tokens.colors.docs-inverse | leafygreen | Foundations Semantic color LeafyGreen inverse canvas |
| tokens.colors.canvas | home | Foundations Semantic color local Canvas observation; also public marketing feature-panel background, documentation icon-control background, and LeafyGreen utility-control text, kept on those records |
| tokens.colors.ink | home | Foundations Semantic color local Ink observation; also public marketing feature-panel text (`fg`) |
| tokens.colors.feature-border | home | Foundations Semantic color local Feature border observation |
| tokens.typography.family.ui | home | Typography Family UI |
| tokens.typography.family.display | home | Typography Family Display |
| tokens.typography.family.mono | home | Typography Family Mono |
| tokens.typography.hero.size / weight / lineHeight / use | home | Typography Type roles token-set hero + Public home hero row |
| tokens.typography.primary-action.size / weight / lineHeight / tracking / use | home | Typography Type roles token-set primary-action + Public primary action row |
| tokens.typography.docs-control.size / weight / lineHeight / use | docs | Typography Type roles token-set docs-control + Documentation compact control row |
| tokens.spacing.primary-action-y / primary-action-x | home | Foundations Spacing |
| tokens.spacing.docs-side-y / docs-side-x | docs | Foundations Spacing |
| tokens.rounded.primary-action | home | Foundations Shape |
| tokens.rounded.docs-control | docs | Foundations Shape |
| tokens.rounded.docs-icon | docs | Foundations Shape (unitless `9999` beside component `100%`) |
| tokens.components.marketing-feature-panel.* | home | Components Public marketing feature panel |

## Capture selectors

| Component | Pointer |
|---|---|
| Public primary action | `home::[data-omd-capture="11"]`, also observed on `surface-3` |
| Public marketing feature panel | `home::[data-omd-capture="15"]` |
| Documentation compact control | `surface-3::[data-omd-capture="21"]` |
| Documentation icon control | `surface-3::[data-omd-capture="22"]` |
| LeafyGreen utility control | `surface-2::[data-omd-capture="48"]` |

Selectors are dual-destination: portable component Use lines and this table (E2a).

## Sibling handling (`web/references/mongodb/.verification.md`)

The sibling exists — confirmed with `find web/references/mongodb -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record, and none of its structural classifications was promoted into `DESIGN.md`.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic Playwright collector evidence; browser capture was not rerun and no MCP was used.
- Viewport in the sibling: 1440×900. The source body also records that the supplied evidence is a 1440×900 capture (`§8`). The portable Layout section keeps the source-body sentence.
- Bundle stats recorded only here: `surfaceCount: 3`, score `80`, `componentTypes: 5`, `componentVariants: 31`, `observedStates: 1`, `interactionCount: 0`. `interactionCount: 0` is also in the source body and is portable there.
- FontFace corroboration counts recorded only here: Euclid Circular A 19 source URLs; MongoDB Value Serif 9 MongoDB CloudFront source URLs; Source Code Pro 4 Google-hosted source URLs.
- Akzidenz-Grotesk Std `55` visible body/text uses — the count is sibling-only. The source body records loaded visible use without that count; the portable Font evidence row keeps the source wording.
- Declared-only face names recorded only here: ChartsIcons, Font Awesome, FontAwesome4, icomoon, MMSIcons, MMSOrgIcons. The source body writes “icon fonts, Noto CJK fallback declarations, and Times/Arial”; the portable row keeps that wording.
- LeafyGreen page-title color `rgb(232, 237, 235)` on `surface-2::h1` — sibling-only. The source table records size/weight/line-height for that title, not this color.
- Home Source Code Pro label sample: color `rgb(61, 79, 88)`, `14px / 400 / 24px`, tracking `2px`. The source table records ranges `400–500` / `16–24px` / `1–2px`; those ranges stay portable. The single-sample triple stays here.
- Home tab `home::[data-omd-capture="23"]`, `aria-selected="true"`: transparent, black text, 0px radius; no selected delta captured. Sibling-only. No tab component is introduced in the portable body.
- Conflict-matrix resolution notes, including “old `#00684a` CTA claim rolled back” and “Legacy pill/radius, hover, and general shadow claims … Rolled back”, stay here. They are not portable tokens.
- Refero attempt: the sibling records that the safe-open response was an internal error, so no result card was available. Recorded as unavailable, not as a claim that MongoDB is absent from Refero.

### Raw samples (from the sibling)

| # | Surface | Element | Recorded values |
|---:|---|---|---|
| 1 | https://www.mongodb.com/ | `home::[data-omd-capture="11"]` | background `rgb(0, 237, 100)` · color `rgb(0, 30, 43)` · border `rgb(0, 30, 43)` `1px` · radius `4px` · padding `15px 24px` · `16px / 500 / 16px` |
| 2 | https://www.mongodb.com/ | `home::h1` | color `rgb(0, 30, 43)` · font `MongoDB Value Serif` · `64px / 400 / 72px` |
| 3 | https://www.mongodb.com/ | home Source Code Pro label | color `rgb(61, 79, 88)` · font `Source Code Pro` · `14px / 400 / 24px` · tracking `2px` |
| 4 | https://www.mongodb.com/ | `home::[data-omd-capture="15"]` | background `rgb(255, 255, 255)` · border `rgb(231, 238, 236)` `1px` · radius `40px` · padding `40px 48px` · shadow `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px` |
| 5 | https://www.mongodb.design/ | `surface-2::h1` | color `rgb(232, 237, 235)` · font `MongoDB Value Serif` · `48px / 400 / 64px` |
| 6 | https://www.mongodb.design/ | `surface-2::[data-omd-capture="48"]` | background `rgb(61, 79, 88)` · color `rgb(255, 255, 255)` · border `rgb(136, 147, 151)` `1px` · radius `50px` · `13px / 500 / 20px` |
| 7 | https://www.mongodb.com/ko-kr/docs/ | `surface-3::[data-omd-capture="21"]` | background `rgb(249, 251, 250)` · color `rgb(0, 30, 43)` · border `rgb(136, 147, 151)` `1px` · radius `6px` · `13px / 500 / 20px` |
| 8 | https://www.mongodb.com/ko-kr/docs/ | `surface-3::[data-omd-capture="22"]` | background `rgb(255, 255, 255)` · color `rgb(0, 104, 74)` · border `rgb(232, 237, 235)` `1px` · radius `100%` · shadow `rgba(0, 30, 43, 0.1) 0px 3px 4px 0px` |

Hex equivalents of samples 1, 2, 4, 6, 7, and 8 also stand in the source DESIGN.md and are portable there.

## Proof notes

- verification_v2 schema 2; conflicts: []
- `components_harvested: true`; one YAML component record (`marketing-feature-panel`, `type: card`) plus four §4-only controls.
- Interaction expansions: 0; only default component observations promoted. Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- LeafyGreen is a published first-party UI specification. Portable B2a uses the adapted form that names that specification rather than the example form that would deny it.
- Official history and company pages are narrative context, not token sources.

## Derived editorial inventory

Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not MongoDB-authored or taken from a separately published UI specification, including the published LeafyGreen documentation."

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience — Scope ¶1 | Three inspected pages as this contract's token surfaces; values attached to the surface that established them; LeafyGreen typography guidance plus company and our-story pages as named sources that do not automatically supply computed interface tokens |
| Experience — Scope ¶2 | navy-and-spring-green signal system; strong rectangular actions; deliberately mixed typographic voice |
| Experience — Scope ¶3 | DoubleClick-to-Atlas narrative as context that does not by itself supply interface tokens |
| Experience — Primary tasks | Selecting the three tasks from recorded controls and surfaces; they do not come from the source's persona section |
| Experience — Audience | Keeping official group labels as Audience; not converting the North Star / innovator / Atlas sentences into primary tasks |
| Experience — Distinctive traits | Four labels; grouping that treats `#001e2b` and `#112733` as two observed dark canvases rather than one collapsed navy |
| Experience — Principles | Four numbered items, each stem, and each UI implication |
| Experience — Application rules | Four Do rules and the reasons attached to them |
| Experience — Avoid | Four Don't rules plus the Agent Prompt Guide constraint on marketing card geometry, and the reasons inside them |
| Foundations — Semantic color | Pairing hex to token-set path; `#00ed64` unmerged from `#00684a`; `#001e2b` unmerged from `#112733` and from ink `#000000`; captured white, gray, and local marketing-card surfaces as local observations rather than a complete application semantic palette; `#3d4f58` muted-text vs utility-control background; `#00684a` announcement-strip vs icon-control text; `#e7eeec` unmerged from `#e8edeb` |
| Foundations — Spacing | `15` unmerged from larger public primary-action `16px`; `24` unmerged from `32px`; `docs-side-y: 16` unmerged from primary-action size/lineHeight `16`; four measurements as source-domain values rather than a complete spacing scale |
| Foundations — Shape | `4`, `6`, `40px`, `100%` / `9999`, and `50px` kept on those records rather than as a universal radius scale |
| Foundations — Elevation | Two observed shadows as local instances rather than a depth system |
| Foundations — Motion | Five-kind promotion gate (computed transition properties, animation name, duration, easing, reduced-motion behavior); refusal of a partial confirmation; a match against an official framework or vendor document is not that gate |
| Typography — Font evidence | LeafyGreen typography-guidance as official product-use rather than proof that every surface loads every role in the same CSS; OFL 1.1 as a Source Code Pro licence boundary rather than a MongoDB brand asset; Akzidenz-Grotesk Std as a live observation rather than a UI-family token; icon fonts, Noto CJK, and Times/Arial as not promoted |
| Typography — Family | No-substitution rule; three families canonical here because official LeafyGreen roles and loaded visible use agree |
| Typography — Type roles | Token-set numbers on their own rows; px hierarchy on its own table; `tokens.typography.primary-action.size` `16` as a type key rather than a spacing step; public code/value label ranges rather than a single sibling sample |
| Typography — Assets | simpleicons slug as an identity pointer rather than a hosted brand file |
| Components — Capture record | Role-based decision procedure; every interactive-kind verdict; every applicability verdict and the reason given for either; attaching YAML `type: card` only to Public marketing feature panel |
| Layout & Platforms | 64px / 16px / 13px / 4px / 6px / 40px / 100% / 50px figures as capture measurements rather than cross-viewport specifications |
| Content & Locales | First-party story as developer-centred, practical, and ambitious; public writing as a pairing of direct action language with concrete technical outcomes; published strings reproduced byte-exact |
| Governance — Named gaps | List named from the source's own unresolved fields rather than adding surfaces the source did not name |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics.

| Item | Disposition |
|---|---|
| Source H1 `# Design System Inspiration of MongoDB` | Replaced by Core v2 identity line `# MongoDB Design System`. Recorded here. |
| YAML frontmatter identity, `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `components_harvested`, `ds.*` | Ledger fields stay in Identity / Freshness / Claim ledger on this page. Renderable values they name are portable. |
| Source footer **Verified** / Tier 1 / Tier 2 / Conflicts | Freshness and Sources on this page. |
| Source §9 Agent Prompt Guide — tool-facing composition sentences | Deleted as tool-facing prompt. Brand constraints already live in Experience application rules / Avoid, Foundations, Typography, and Components. Checked value by value before deletion: see the next paragraph. |
| Source §13 stakeholder groups | Not omitted. The source states they are named by official company and story materials, not fictional user profiles. Group labels and official descriptions are in portable Audience. No name, age, or city was present to delete. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling handling | Ledger only |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Public marketing primary action `#00ed64` with `#001e2b` text/border, 4px radius, and Euclid Circular A 16px/500 — Public primary action. MongoDB Value Serif for a measured public display headline — Type roles Public home hero. Source Code Pro for a code/value label — Type roles Public code/value label. LeafyGreen or documentation work choosing only the separately documented controls rather than importing marketing card geometry by default — Experience Avoid.
