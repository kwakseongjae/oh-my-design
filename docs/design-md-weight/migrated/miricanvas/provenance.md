# MiriCanvas provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/miricanvas/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | miricanvas |
| name | MiriCanvas |
| display_name_kr | 미리캔버스 |
| country | KR |
| category | design-tools |
| homepage | `https://www.miricanvas.com` |
| primary_color | `#21afbf` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=miricanvas.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| added | 2026-06-10 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | false |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#21afbf` is dual: identity here, and the same hex as `tokens.colors.primary` in `DESIGN.md` Scope / Semantic color / Filled primary. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer and YAML `verification_v2.conflicts: []` state. Tier 2 token/component data could not be retrieved, so no Tier 2 comparison is asserted.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product | `https://www.miricanvas.com/ko` | 2026-07-13 |
| templates | public-product | `https://www.miricanvas.com/ko/templates` | 2026-07-13 |
| pricing | public-product | `https://www.miricanvas.com/ko/pricing` | 2026-07-13 |
| company-context | official-doc | `https://www.miridih.com/ko/home` | 2026-07-13 |
| editor-doc | official-doc | `https://help.miricanvas.com/hc/ko/articles/4413862566937` | 2026-07-13 |
| license-doc | official-doc | `https://help.miricanvas.com/hc/ko/articles/56483608870681` | 2026-07-13 |

YAML also names live-inspect sources `home-live`, `templates-live`, and `pricing-live` on those three public-product URLs.

### Tier 1 (as listed in the source footer)

- `https://www.miricanvas.com/ko` (public product marketing surface, supplied computed-style/FontFaceSet evidence)
- `https://www.miricanvas.com/ko/templates` (public template surface, supplied computed-style evidence)
- `https://www.miricanvas.com/ko/pricing` (public pricing surface, supplied computed-style evidence)
- `https://www.miridih.com/ko/home` (operator context and values)
- `https://help.miricanvas.com/hc/ko/articles/4413862566937` (documentation domain: editor controls, not UI tokens)
- `https://help.miricanvas.com/hc/ko/articles/56483608870681` (documentation domain: content license boundary, not UI tokens)

### Tier 2

- `https://getdesign.md/miricanvas` — attempted; fetch unavailable
- `https://styles.refero.design/?q=miricanvas` — attempted; fetch unavailable

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: reconciled` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. `components_harvested: false` is ledger metadata. The portable body names `tokens.components: {}` in the Capture record.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13; `pricing` = pricing / pricing-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary / primary-deep / ink / ink-soft / muted / canvas / on-primary | home |
| tokens.typography.family.sans | home |
| tokens.typography.display-hero (size, weight, lineHeight, use) | home |
| tokens.typography.page-title (size, weight, lineHeight, use) | pricing |
| tokens.typography.subsection / section / ui (size, weight, lineHeight, use) | home |
| tokens.spacing.xs / sm / md / lg / xl / xxl / hero | home |
| tokens.rounded.sm / md / lg / xl | home |
| tokens.shadow.menu-open | home |

YAML `tokens.components` is `{}`. §4 component records are not claim-ledger keys.

## Capture selectors

| Component | Pointer |
|---|---|
| Filled primary | `home::[data-omd-capture="21"]` |
| Navigation item | `home::[data-omd-capture="12"]` |
| Navigation switcher item | `home::[data-omd-capture="1"]` |
| Menu trigger | `home::[data-omd-capture="9"]` (`aria-haspopup="menu"`) |
| Menu open | `home::[data-omd-interaction-capture="menu-0-0"]` (`expanded` / `menu-open`) |

## Sibling handling (`web/references/miricanvas/.verification.md`)

The sibling exists — confirmed with `find web/references/miricanvas -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Pipeline used as raw evidence only. No browser recapture or MCP was run for this update.
- Artifact captured `2026-07-13T11:33:06.833Z` with `playwright_cli`. Path `artifacts/reference-evidence/miricanvas.json`.
- Capture coverage: 3 routes, score 87, 5 component types, 23 component variants, 1 interaction kind, 3 interaction snapshots.
- Surfaces: `https://www.miricanvas.com/ko` home; `https://www.miricanvas.com/ko/templates` templates (`surface-2`); `https://www.miricanvas.com/ko/pricing` pricing (`surface-3`).
- Raw samples: home capture 21 (CTA `#21afbf` / white / 8px / `8px 16px` / 40px / 14px/500); home capture 12 (nav transparent / `#23242a` / 8px / `8px 16px` / 40px / 14px/500); home capture 1 (switcher transparent / `#23242a` / 8px / `12px` / 44px / 14px/500); home capture 9 (trigger `aria-haspopup="menu"` / `8px 12px 8px 16px` / 40px); home interaction `menu-0-0` (white / `#000000` / 16px / 16px / 321px / `rgba(11, 60, 65, 0.2) 0px 6px 20px 0px`); home h1 64px/700/96px `#16181d`; surface-3 h1 40px/700/48px.
- Pretendard Variable: 215 visible uses; `loaded` / high; 92 source URLs under `https://resource.miricanvas.com/font/pretendard/woff2-dynamic-subset/`.
- Declared-only sibling names: `Figtree` / `IBM Plex Sans JP` / `Pretendard JP Variable` / `Pretendard Std Variable`. `Times` unresolved / low; 198 reported uses in unstyled fragments and expanded-menu records.
- getdesign / refero: built-in fetch returned an internal error; no getdesign value asserted; attempted cross-check, not a claim that MiriCanvas is absent from Refero.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- coverage score 87
- 5 component types / 23 component variants
- 1 interaction kind / 3 interaction snapshots
- artifact path `artifacts/reference-evidence/miricanvas.json`
- artifact timestamp `2026-07-13T11:33:06.833Z`
- `playwright_cli`
- font source path `https://resource.miricanvas.com/font/pretendard/woff2-dynamic-subset/`
- sibling URL `https://help.miricanvas.com/hc/ko/articles/4405471619481`
- sibling URLs `https://www.miricanvas.com/business/main` and `https://www.miricanvas.com/business/industries/franchise`
- Pretendard docs `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md`
- Pretendard license `https://github.com/orioncactus/pretendard/blob/main/LICENSE`
- `home::[data-omd-capture="34"]` / `home::[data-omd-capture="22"]` / `surface-3::[data-omd-capture="29"]` / `surface-2::[data-omd-capture="22"]`
- sibling family-use count 198 for `Times`

Values the sibling shares with the source body (corroboration, not new portable facts): `#21afbf`, `#1c95a2`, `#16181d`, `#23242a`, `#ffffff`, `#000000`, Pretendard Variable, 215 uses, 92 hosted subset URLs, 40px CTA, 8px radius, `8px 16px`, 14px/500, 44px switcher, 321px menu, SIL OFL 1.1, declared-only Figtree / IBM Plex Sans JP / Pretendard JP Variable / Pretendard Std Variable, Times unresolved, expanded / menu-open only, getdesign/refero no usable record.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.primary / primary-deep / ink / ink-soft / muted / canvas / on-primary | home |
| tokens.typography.family.sans | home |
| tokens.typography.display-hero | home |
| tokens.typography.page-title | pricing |
| tokens.typography.subsection / section / ui | home |
| tokens.spacing.xs / sm / md / lg / xl / xxl / hero | home |
| tokens.rounded.sm / md / lg / xl | home |
| tokens.shadow.menu-open | home |
| tokens.components | empty object `{}` |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing recreate-the-control prompt. Values it restated are already in Foundations / Typography / Components. No receiving slot and no delegation (A2, A3). |
| §13 stakeholder groups (4 documentation- and business-material roles; no name, age, or city) | Deleted. Not promoted to Audience or primary-tasks, and not re-hosted here as names, ages, cities, motivations, or affiliation classifications (D2, D2a). |
| §15 unattributed curves | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompt names was confirmed present elsewhere in the portable body before the section was dropped. White canvas — Scope / Semantic color. `#21afbf` filled action — Semantic color / Filled primary. `#ffffff` text — On-primary / Filled primary. 8px radius — Shape / Filled primary / Navigation item. 8px 16px padding — Filled primary / Navigation item. 40px height — Filled primary / Navigation item. `Pretendard Variable` 14px/500 — Type roles / those two controls. Public navigation transparent background, `#23242a` text, 8px radius, same 40px / 14px 500 baseline — Navigation item. White 16px-rounded menu with the recorded shadow only after a menu is explicitly expanded — Menu open / Application rules / Elevation.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Three inspected public URLs as this contract's token surfaces; operator and Help Center URLs as named context sources that do not supply computed tokens; values stay attached; catalog `primary_color` `#21afbf` on the same hex as `tokens.colors.primary` rather than as a second colors key |
| Experience Scope ¶2 | Deliberately-spare / clear-action-hierarchy / soft-geometry characterizations |
| Experience Scope ¶3 | Operator-and-license narrative, including the two-verified-contexts paragraph and its license-boundary closing sentence, classified as context that does not by itself supply interface tokens |
| Primary tasks | Selecting the three surface-or-label outcomes as primary tasks; not from the Personas section |
| Audience | Dropping documentation- and business-material stakeholder groups rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading the captured public copy's users-from-ready-made-material address as this contract's audience bound |
| Distinctive traits | Classifying the Key characteristics list as that restatement; groupings and readings inside the list |
| Principles | Four numbered items as derived editorial implementation inference; toss-form close |
| Application rules | Four Do rules and the reasons attached to them |
| Avoid | Four Don't prohibitions and the reasons inside them |
| Semantic color | Role names from token-set keys; pairing each hex to its token-set path; canvas off on-primary as two `#ffffff` keys; menu-open panel background `#ffffff` on the canvas key rather than a third YAML colors key; primary off primary-deep; menu-open `#000000` as a §4 field off the YAML colors keys; no-semantic-error/success/disabled/hover/focus/editor-color bound kept |
| Spacing | Unitless steps kept on their own keys rather than rewritten as a grid; `md: 8` off `rounded.sm` and off padding `8px 16px`; `lg: 12` off `rounded.lg` and off switcher `12px`; `xl: 16` off `rounded.xl` and off menu-open padding `16px`; `hero: 24` off `section.size` `24`; `xxl: 20` off ui line-height `20px`; §5 `14px`/`56px` off YAML spacing keys; `14px` also `tokens.typography.ui.size` |
| Shape | Four rounded keys kept (`8`/`10`/`12`/`16`); Extra-large `16` off a spacing step; 8px strongest public-button cluster kept as the source recorded it rather than as a universal radius; frequency sentence kept from becoming an exhaustive-scale claim |
| Elevation | Representative `box-shadow: none` plus the one menu-open shadow as the only elevation records, not a depth scale for every surface; menu shadow not generalized |
| Motion | Five-kind promotion gate; refusal of a partial confirmation; source "No duration, easing curve, transition, or reduced-motion rule was captured" / "No motion token is asserted" kept |
| Font evidence | Five evidence-class rows as the source's resolution table, not a published MiriCanvas type specimen; official-licence row not independently establishing product use; Official product-use announcement row kept as none located; `Times` kept as an unresolved capture artifact |
| Family | Pretendard Variable as sole UI-family token on the three captured routes; canonical only because computed visible use and loaded FontFace/source evidence agree; refusing to replace an unavailable or unobserved brand type with it; declared-only and unresolved entries refused as substitutes |
| Type roles | Pairing each YAML role to its token-set path; both YAML unitless and §3 px writings kept; unitless `1.50`/`1.20`/`1.29`/`1.33`/`1.43` kept as ratios and never converted to a replacement px; YAML `use` verbatim; longer §3 provenance column beside them; section size `24` off spacing `hero: 24`; ui size `14` off the §5 `14px` writing |
| Assets | Google s2 favicon as catalog identity pointer; Pretendard licence as upstream font-asset boundary |
| Capture / applicability | Interactive-kind and applicability verdicts and the reason for either; menu-open panel non-interactive reading; no YAML primitive type invented; every §4 component labelled `not in the token set`; generic `focus` observation is not `focus-visible` treatment; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| Capture / medium-low | Leaving the 56px white button, 48px white button, and 46px input as raw observations rather than canonical component variants |
| Layout | Component-level spacing rather than a full grid; `14px` and `56px` as §5 observed writings rather than YAML spacing keys; listed measurements as desktop-capture rather than cross-viewport specifications; breakpoints, navigation collapse, touch-target policy, and mobile editor behavior absent rather than inferred from desktop public routes |
| Content | Direct/inclusive/task-oriented voice characterization; official expressions as public-route and corporate context rather than a complete product-microcopy guide; source "not evidence of an editor microcopy system" bound kept; source avoid-inventing editor error messages, onboarding wording, or persona-specific voice rules bound kept |
| Named gaps | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: false
- Interaction expansions: menu-open only; only default component observations plus the expanded navigation panel promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official corporate page, editor-control article, and license article are narrative and documentation-domain context, not token sources
- `tokens.source: reconciled` is ledger metadata
