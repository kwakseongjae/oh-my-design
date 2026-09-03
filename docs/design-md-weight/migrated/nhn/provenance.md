# NHN provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/nhn/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | nhn |
| name | NHN |
| display_name_kr | NHN |
| country | KR |
| category | saas |
| homepage | `https://www.nhn.com/` |
| primary_color | `#212126` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=nhn.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| added | 2026-06-17 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not an NHN-hosted brand file.

Token source from YAML, kept as ledger metadata: `tokens.source: reconciled`, `tokens.extracted: 2026-07-13`. YAML `tokens.note`: `Corporate-web evidence only: three public NHN corporate/disclosure surfaces. Colors and components below are live computed observations; no authenticated product UI or documentation chrome was captured.`

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| added | 2026-06-17 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | corporate | `https://www.nhn.com/` | 2026-07-13 |
| services | corporate-services | `https://www.nhn.com/services?tab=technology` | 2026-07-13 |
| ir | corporate-ir | `https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial` | 2026-07-13 |
| about | official-doc — company history | `https://www.nhn.com/company?tab=about` | 2026-07-13 |
| ci-story | official-doc | `https://inside.nhn.com/corp/245` | 2026-07-13 |
| type-story | official-doc | `https://inside.nhn.com/corp/260` | 2026-07-13 |
| slogan-story | official-doc | `https://inside.nhn.com/corp/164` | 2026-07-13 |
| brand-resource | official-doc | `https://www.nhn.com/en-US/company?subTab=brandResource&tab=brand` | 2026-07-13 |

YAML verification_v2 sources named `home-live`, `services-live`, `ir-live`, `ci-story`, `type-story`. The slogan story and Brand Resource page appear in the source body, not in that YAML sources list.

### Tier 1 (as listed in the source footer)

- `https://www.nhn.com/` (corporate marketing surface, raw collector)
- `https://www.nhn.com/services?tab=technology` (corporate services surface, raw collector)
- `https://www.nhn.com/ir?tab=financials&subTab=consolidatedFinancial` (IR disclosure surface, raw collector)
- `https://www.nhn.com/company?tab=about` (official context)
- `https://inside.nhn.com/corp/245` (official CI narrative)
- `https://inside.nhn.com/corp/260` (official typeface narrative)

### Tier 2

- `https://getdesign.md/nhn` (attempted; retrieval error in this run)
- `https://styles.refero.design/?q=nhn` (attempted; retrieval error in this run)

Tier 2 data was not used to establish any token or component value.

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: reconciled` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. The portable body attaches tokens to the three captured corporate/disclosure surfaces rather than renaming the source class.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `services` = services / services-live / computed-style / 2026-07-13; `ir` = ir / ir-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.foreground | home |
| tokens.colors.muted | home |
| tokens.colors.subtle | services |
| tokens.colors.hint | ir |
| tokens.colors.surface | services |
| tokens.colors.canvas | home |
| tokens.colors.hairline | home |
| tokens.colors.on-primary | home |
| tokens.typography.family.ui | home |
| tokens.typography.family.display-kr | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.nav.size / weight / lineHeight / use | home |
| tokens.typography.label.size / weight / lineHeight / use | services |
| tokens.typography.title.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / base / lg / xl / xxl | home |
| tokens.rounded.none | home |
| tokens.rounded.pill | services |
| tokens.shadow.none | home |
| tokens.components.previous-control.type / fg / radius / font / states / use | services |

## Capture selectors

| Component | Pointer |
|---|---|
| Primary list item | `home::li`; also present on services and IR |
| Secondary list item | `home::li`; also present on services and IR |
| Transparent action label | `home::[data-omd-capture="45"]` |
| Secondary label action | `surface-2::[data-omd-capture="49"]` |
| Previous control | `surface-2::[data-omd-capture="37"]` |
| Services pill | `surface-2::[data-omd-capture="43"]` |

## Sibling handling (`web/references/nhn/.verification.md`)

The sibling exists — confirmed with `find web/references/nhn -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic collector bundle; Playwright computed styles and `document.fonts`/`@font-face` results were recorded for three official URLs. Coverage: 3 surfaces, score 66, 17 component variants, one observed state, and 0 interaction captures.
- Raw samples: `home::body` `color: rgb(33, 33, 38)` (`#212126`), `font-family: "Pretendard Variable"`, `font-size: 16px`, `line-height: 24px`; `home::li` (`text-grayscale-2 mainLink flex pr-80`) `#36363d`, padding `0px 80px 0px 0px`; `home::li` (`py-7 text-grayscale-3`) `#57575b`, padding `7.008px 0px`; `surface-2::[data-omd-capture="45"]` transparent, `#212126`, `16px / 500`, `line-height: 28px`; `surface-2::[data-omd-capture="49"]` `#62626a`, `14px / 500`, `line-height: 22px`; `surface-2::[data-omd-capture="43"]` `#f8f8f8`, `border-radius: 50px`, padding `4px 8px 4px 14px`; `surface-2::[data-omd-capture="37"]` disabled previous, class includes `opacity-40`; repeated border `rgb(229, 231, 235)` (`#e5e7eb`); representative `box-shadow: none`.
- Font table: Pretendard Variable 370 uses / 92 NHN-hosted subset URLs under `static.nhnent.com`; Main Pretendard Variable 32 uses, loaded, no individual source URL; `__Poppins_1848dd` 2 `h2` uses, 12 NHN-hosted Next font assets; `__Poppins_Fallback_1848dd` and `swiper-icons` declared-only; NHN Sans 0 in this capture.
- External font licence context: Pretendard SIL OFL 1.1 at `https://github.com/orioncactus/pretendard/blob/main/LICENSE`; Poppins publisher repository `https://github.com/itfoundry/poppins`.
- Conflict matrix: computed border `#e5e7eb` replaces older uncorroborated `#dbdbdb` hairline token.
- Narrative: Hangame Communication origin, 2023 introduction of “Weaving New Play”; CI story 2024 folded-paper / 27-degree / achromatic; Brand Resource CI and NHN Sans; typeface story documents its design, three weights, and intended use across official communication.
- Viewport named in the sibling scope line: captured 2026-07-13 at 1440×900.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- Coverage score `66`; `17 component variants`
- Playwright method string; `document.fonts`
- Class fragments `text-grayscale-2`, `mainLink`, `pr-80`, `py-7`, `text-grayscale-3`, `opacity-40`; sibling padding shorthand `0 80px 0 0` and `4 8 4 14`
- Sibling slogan spelling `Weaving New Play.` (period inside the quotation); the source body writes `“Weaving New Play”` and `“Weaving New Play,”` without that period
- `artifacts/reference-evidence/nhn.json`; `interactionCount`; `interactionKinds`
- rgb() samples `rgb(33, 33, 38)`, `rgb(54, 54, 61)`, `rgb(87, 87, 91)`, `rgb(98, 98, 106)`, `rgb(248, 248, 248)`, `rgb(229, 231, 235)`
- Sibling capture of action label `45` as `surface-2::[data-omd-capture="45"]` (source body writes `home::[data-omd-capture="45"]`)
- `12` NHN-hosted Next font assets for `__Poppins_1848dd`
- Pretendard licence URL; Poppins publisher repository URL
- Older uncorroborated hairline `#dbdbdb`
- NHN Sans `three weights` as a sibling narrative detail

Values the sibling shares with the source body (corroboration, not new portable facts): `#212126`, `#36363d`, `#57575b`, `#62626a`, `#f8f8f8`, `#e5e7eb`, `0px 80px 0px 0px`, `7.008px`, `50px`, `4px 8px 4px 14px`, `opacity: 0.4` / YAML `disabled opacity 0.4`, Pretendard Variable 370 uses, Main Pretendard Variable 32 uses, 92 NHN-hosted subset URLs under `static.nhnent.com`, 1440×900, Hangame Communication, 2023 “Weaving New Play”, 2024 CI, 27-degree fold.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary | home — `#212126` |
| tokens.colors.foreground | home — `#36363d` |
| tokens.colors.muted | home — `#57575b` |
| tokens.colors.subtle | services — `#62626a` |
| tokens.colors.hint | ir — `#aaaaae` |
| tokens.colors.surface | services — `#f8f8f8` |
| tokens.colors.canvas | home — `#ffffff` |
| tokens.colors.on-primary | home — `#ffffff` (second key) |
| tokens.colors.hairline | home — `#e5e7eb` |
| tokens.typography.family.ui | Pretendard Variable |
| tokens.typography.family.display-kr | Main Pretendard Variable |
| tokens.typography.body | 16 / 400 / 1.50 — Observed corporate body/list text |
| tokens.typography.nav | 16 / 500 / 1.75 — Observed primary navigation action |
| tokens.typography.label | 14 / 500 / 1.57 — Observed secondary action and label |
| tokens.typography.title | 20 / 700 / 1.50 — Observed Korean heading |
| tokens.spacing.xs: 4 | home |
| tokens.spacing.sm: 7 | home |
| tokens.spacing.md: 8 | home |
| tokens.spacing.base: 10 | home |
| tokens.spacing.lg: 22 | home |
| tokens.spacing.xl: 32 | home |
| tokens.spacing.xxl: 80 | home |
| tokens.rounded.none: 0 | home |
| tokens.rounded.pill: 50 | services |
| tokens.shadow.none | none |
| tokens.components.previous-control | type `button`; fg `#212126`; radius `0px`; font `16px / 400 Pretendard Variable`; states `disabled opacity 0.4`; use `Observed previous-navigation control on the services surface` |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 unfinished persona slot (no first-party audience-segment documentation) | Deleted. The source records that NHN has not supplied first-party audience-segment or persona documentation and instructs not to fabricate named user personas from the corporate, services, or IR surfaces. Not promoted to Audience or primary-tasks, and not re-hosted here as names, motivations, or affiliation classifications (D2, D2a). |
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing restatement. Values it names are already in Experience / Foundations. The §9-only sentence that this reference is not a substitute for an NHN affiliate product, authenticated app, or documentation system lands on Experience Avoid. |
| §15 cubic-bezier values | None in the source. No unattributed template curve was deleted. Durations and signature motion are also absent; the source leaves motion unresolved. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. White canvas, near-black `#212126` text, muted `#36363d` / `#57575b` hierarchy, `#f8f8f8` neutral surface moments, Pretendard Variable body/UI text, and no shadows — Scope, Distinctive traits, Semantic color, Family, Elevation. “Do not use it as a substitute for an NHN affiliate product, authenticated app, or documentation system” — Avoid.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- Interaction expansions: 0; only default component observations plus one disabled previous-control
- Uncaptured hover/focus/pressed/loading/error/empty/success treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The source never records `focus-visible` as a captured state; no `focus-visible` treatment value appears in the portable body.
- YAML records `type: button` only on `previous-control`. Other §4 components are labelled `not in the token set`.
- Loading, error, and success are closed with a role reason on destination list items, the transparent action label, the secondary label action, the previous-navigation arrow, and the low-confidence services pill, never for absence of observation.
- No published first-party UI specification was found; the B2a example form is used as-is.
- Official history, CI story, typeface story, slogan story, and Brand Resource are narrative / brand-owned sources, not token sources.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three inspected corporate/disclosure URLs as this contract's token surfaces; history / CI / typeface / slogan / Brand Resource as named sources that do not supply computed interface tokens; values stay attached |
| Experience Scope `:11` | Characterizations (restrained and nearly monochrome; `#212126` as principal ink; three-surface packet as corporate-web observations rather than a claim about separate customer products or documentation interfaces) |
| Experience Scope `:13` | Founding-and-rebrand narrative (Hangame Communication, Hangame online-game portal, 2023 “Weaving New Play”, 2024 CI, folded-paper, 27-degree fold, achromatic colour decision, and that CI-story closing sentence) as context that does not by itself supply interface tokens |
| Primary tasks `:19` | Selecting the three recorded surfaces as primary tasks; not from the persona section |
| Audience `:28` | Dropping unfinished persona slots; carrying no name, motivation, affiliation classification, or demographic segment list; refusing to invent a group the source did not name |
| Distinctive traits `:32` | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside them |
| Principles `:42` | Three numbered stems plus every UI implication |
| Application rules `:50` | Five Do rules and the reasons attached to them |
| Avoid `:60` | Don't list plus the §9 substitute prohibition, and the reasons inside them |
| Semantic color `:74` | Role names from the source's labels; pairing each hex to its token-set path; canvas and on-primary as two keys that share `#ffffff`; subtle unmerged from muted and hint; official CI achromatic decision as support for the neutral narrative rather than permission to promote affiliate-product colours |
| Spacing `:95` | YAML unitless cluster and §5 measured-observation restatement kept as two writings; unitless spacing steps unmerged from matching paddings and type sizes (`4` / `7` / `8` / `22` / `32` / `80`) |
| Shape `:104` | `none: 0` and `pill: 50` as two keys; services-pill `50px` kept on that control rather than as a replacement for the YAML step |
| Elevation `:108` | Shadow-free packet as a flat treatment for the observed corporate components only |
| Motion `:112` | Measured absence and raw-class-name insufficiency as a reason not to promote duration, easing, animation name, transition property, or reduced-motion behavior |
| Motion B3 `:114` | Five-kind promotion gate; per-component computed observation; refusal of a partial confirmation |
| Font evidence `:122` | Evidence-class sorting; Pretendard Variable as live UI-family; Main Pretendard Variable as live display-KR with source-url limitation; `__Poppins_1848dd` not Poppins; NHN Sans official not live; declared-only omitted; typography beyond the three captured surfaces outside this contract; fallback prohibition |
| Font Official product-use `:126` | Official product-use as the Brand Resource / typeface-story claim rather than as a live-family assignment on the three captured pages |
| Family `:141` | Fallback prohibition; `__Poppins_1848dd` kept off a Poppins token |
| Type roles `:145` | YAML unitless ratios kept; YAML `use` and §3 evidence-boundary notes both kept; Large Korean display as a §3 row that is not a YAML typography key; title `20` / display `32` / body `16` as type sizes rather than spacing steps |
| Assets `:159` | Google s2 slug as identity pointer rather than a hosted brand file; NHN Sans as official communication asset rather than a live-family token here |
| Capture record `:168` | Source state contract kept rather than delegated to an unadopted catalog graph; role-based decision procedure; kind and applicability verdicts; YAML primitive type attached only when recorded; non-YAML components labelled `not in the token set`; generic Focus not treated as focus-visible; not a complete state-coverage claim |
| Primary list item `:180` | `80px` / `16px / 400` as this list item's geometry rather than `tokens.spacing.xxl: 80` or the YAML nav role |
| Secondary list item `:202` | `7.008px` as this list item's padding rather than `tokens.spacing.sm: 7` |
| Transparent action label `:224` | `16px / 500` as this control's font; YAML nav `use` and §3 “Transparent action-label control” both kept |
| Secondary label action `:246` | Services-surface scope; do not generalize this control to other NHN surfaces |
| Previous control `:273` | `0px` as this control's radius; YAML `disabled opacity 0.4` beside §14 `opacity: 0.4` rather than choosing one as a replacement; YAML font `16px / 400 Pretendard Variable` beside §4 `16px / 400 / Pretendard Variable` rather than choosing one as a replacement |
| Services pill `:296` | `50px` / `4px` / `8px` as this pill's geometry rather than a global button or `tokens.spacing.xs: 4` / `tokens.spacing.md: 8`; refusal to generalize the low-confidence pill |
| Layout `:315` | Collected evidence as a flat corporate information layout; spacing clusters as observations rather than a complete spacing scale; 1440×900 as the collector viewport the source recorded rather than as a breakpoint token |
| Content voice `:320` | Explanatory and composed register; slogan story not a complete product-microcopy guide |
| Named gaps `:354` | Named gaps as unnamed values rather than coverage of domains the source never named |
