# Kmong provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kmong/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kmong |
| name | Kmong |
| display name in source H1 | Kmong (크몽) |
| country | KR |
| category | consumer-tech |
| homepage | `https://kmong.com` |
| primary_color | `#92fa72` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kmong.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| added | 2026-06-09 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / components in `DESIGN.md`. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

Token note from source, kept as ledger metadata: only selector-backed values from the supplied public marketplace capture are tokens. Home and category observations remain route-local; no logged-in, checkout, support-doc, or interaction state is inferred. Those facts also land in the portable body as the YAML note restatement in Foundations Semantic color.

## Freshness

| Event | Date |
|---|---|
| added | 2026-06-09 |
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer and YAML `verification_v2.conflicts: []` state.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| marketplace-home | public-marketplace | `https://kmong.com/` | 2026-07-13 |
| marketplace-category | public-marketplace | `https://kmong.com/category/1` | 2026-07-13 |
| company-context | official-doc | `https://company.kmong.com/` | 2026-07-13 |
| font-design | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| font-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://kmong.com/` (public marketplace home)
- `https://kmong.com/category/1` (public category marketplace)
- `https://company.kmong.com/` (official company context)
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font distribution)
- `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)

### Tier 2

- `https://getdesign.md/kmong` — attempted; built-in web open returned an internal safe-open failure/no usable record
- `https://styles.refero.design/?q=kmong` — attempted; built-in web open returned an internal safe-open failure/no usable record

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: reconciled` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. The portable body names the YAML note's selector-backed / route-local limit in Foundations Semantic color.

## Claim ledger

Claims use YAML anchors from the source: `home` = marketplace-home / home-capture / computed-style / 2026-07-13; `category` = marketplace-category / category-capture / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas / ink / heading / muted / hairline / control-border / primary / on-primary / header-action / on-header-action | home |
| tokens.colors.category-surface / category-border | category |
| tokens.typography.family.ui | home |
| tokens.typography.marketplace-body / header-action / hero / search (size, weight, lineHeight, use) | home |
| tokens.typography.category-heading (size, weight, lineHeight, use) | category |
| tokens.spacing.xxs / sm / md / base / lg / xl | home |
| tokens.spacing.xxl | category |
| tokens.rounded.square / primary-cta / control / home-search | home |
| tokens.rounded.category-panel / category-search | category |
| tokens.shadow.home-search | home |
| tokens.shadow.category-search | category |
| tokens.components.home-primary-cta.* / header-action.* / home-search.* / home-outline-cta.* | home |
| tokens.components.category-filter-control.* / category-panel.* | category |

## Capture selectors

| Component | Pointer |
|---|---|
| Home primary CTA | `home::[data-omd-capture="143"]` |
| Header action | `home::[data-omd-capture="6"]` |
| Home search | `home::form` and `home::[data-omd-capture="7"]` |
| Home outlined CTA | `home::[data-omd-capture="145"]` |
| Category filter control | `surface-3::[data-omd-capture="93"]` |
| Category panel | `surface-3::article` |

## Sibling handling (`web/references/kmong/.verification.md`)

The sibling exists — confirmed with `find web/references/kmong -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/kmong.json`) plus first-party and Tier 2 web checks. No browser capture was rerun and no MCP session was used.
- Artifact captured `2026-07-13T11:54:21.535Z`. Three captured entries (two home samples and one category route), five component types, 38 component variants, one static observed state, zero interaction expansions, coverage score 80.
- Home primary CTA `home::[data-omd-capture="143"]`: `background-color: rgb(146, 250, 114)` / `#92FA72`, `color: rgb(33, 34, 36)` / `#212224`, 4px radius, `0px 24px` padding, 52px height, Pretendard 16px/500/16px.
- Header action `home::[data-omd-capture="6"]`: `background-color: rgb(33, 34, 36)` / `#212224`, `color: rgb(255, 255, 255)` / `#FFFFFF`, 8px radius, 36px height, Pretendard 14px/500/20px.
- Home search `home::form` + `home::[data-omd-capture="7"]`: white shell, 1px `#C8CAD2` border, 36px radius, 64px height, `0px 32px` shell padding, `rgba(0, 0, 0, 0.1) 0px 0px 20px 0px` shadow; input is `#212224`, Pretendard 20px/400/28px with `16px 0px` padding.
- Home `h1`: `#212224`, Pretendard 40px/700/52px.
- Home outlined CTA `home::[data-omd-capture="145"]`: white, `#212224`, 1px `#C8CAD2`, 8px, `0px 24px`, 52px, Pretendard 16px/500/16px.
- Category filter `surface-3::[data-omd-capture="93"]`: white, `#212224`, 1px `#E4E5ED`, 8px, `0px 12px`, 36px, Pretendard 14px/400/20px.
- Category panel `surface-3::article`: `rgb(250, 250, 252)` / `#FAFAFC`, 12px, `32px 24px`, Pretendard 16px/400/24px.
- Category search `surface-3::form`: 24px radius and `rgba(0, 0, 0, 0.06) 0px 0px 8px 0px` shadow.
- Pretendard: 1,444 visible uses; `loaded` / high confidence; 18 Kmong CloudFront WOFF/WOFF2 source URLs spanning Thin through Black; SIL OFL 1.1.
- `slick`: zero visible uses; four Kmong-hosted EOT/WOFF/TTF/SVG URLs; declared-only.
- Category panel resolution: Not interactive. Preserve route-local panel only.
- Bundle `interactionCount: 0` and `interactions: []`.
- getdesign / Refero: internal safe-open failure; no usable record.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts.

- coverage score 80
- five component types / 38 component variants
- artifact path `artifacts/reference-evidence/kmong.json`
- artifact timestamp `2026-07-13T11:54:21.535Z`
- `rgb(146, 250, 114)` / `rgb(33, 34, 36)` / `rgb(255, 255, 255)` / `rgb(250, 250, 252)`
- home-search input padding `16px 0px`
- CTA computed line-height `16px/500/16px` (source YAML/§4 write `16px / 500 Pretendard` without that line-height)
- Pretendard weight span Thin through Black
- slick hosted formats EOT/WOFF/TTF/SVG

Values the sibling shares with the source body (corroboration, not new portable facts): `#92FA72`, `#212224`, `#FFFFFF`, `#C8CAD2`, `#E4E5ED`, `#FAFAFC`, Pretendard, 4px / 8px / 12px / 36px / 24px radii, `0px 24px` / `0px 32px` / `0px 12px` / `32px 24px` paddings, 52px / 36px / 64px heights, 1,444 uses, 18 CloudFront URLs, SIL OFL 1.1, `slick` declared-only, zero interaction records, getdesign/refero no usable record.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.canvas / ink / heading / muted / hairline / control-border / primary / on-primary / header-action / on-header-action | marketplace-home |
| tokens.colors.category-surface / category-border | marketplace-category |
| tokens.typography.family.ui | marketplace-home |
| tokens.typography.marketplace-body / header-action / hero / search | marketplace-home |
| tokens.typography.category-heading | marketplace-category |
| tokens.spacing.xxs / sm / md / base / lg / xl | marketplace-home |
| tokens.spacing.xxl | marketplace-category |
| tokens.rounded.square / primary-cta / control / home-search | marketplace-home |
| tokens.rounded.category-panel / category-search | marketplace-category |
| tokens.shadow.home-search | marketplace-home |
| tokens.shadow.category-search | marketplace-category |
| tokens.components.home-primary-cta / header-action / home-search / home-outline-cta | marketplace-home |
| tokens.components.category-filter-control / category-panel | marketplace-category |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompts | Deleted. Tool-facing recreate-the-control prompts. Values they restated are already in Foundations / Components. The §9-only sentence "Do not generate an interaction or state variant unless new selector-and-interaction evidence establishes it" lands on the Capture record. |
| §13 fictional biographies | Not present in the source. The source labels three source-grounded groups. Those groups land in Audience. No name, age, city, motivation, or affiliation classification is invented or re-hosted here (D2, D2a). |
| §15 unattributed curves | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Public home CTA 52px / 4px / `#92FA72` / `#212224` / `0px 24px` / 16px/500 Pretendard — Home primary CTA. Public home search 64px / `#C8CAD2` 1px / 36px / `0px 32px` / 20px/400 Pretendard — Home search. Public category filter 36px / `#E4E5ED` / 8px / `0px 12px` / 14px/400 Pretendard — Category filter control. The no-generated-interaction sentence lands on Capture record.

## Derived editorial inventory

Portable `DESIGN.md` carries 23 complete B2a qualifications. This table is 23 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 `:9` | Two inspected marketplace URLs as this contract's token surfaces; company URL as named narrative source that does not supply computed tokens; values stay attached |
| 2 | Experience Scope ¶2 `:11` | Deliberately-direct / lime-stands-apart / living-marketplace-identity-rather-than-inherited-generic-green atmosphere |
| 3 | Experience Scope ¶3 `:13` | Expert-platform / chat-escrow / 2025 logo-rebrand narrative classified as context that does not by itself supply interface tokens |
| 4 | Primary tasks `:19` | Selecting the three surface-or-control outcomes as primary tasks; not from the stakeholder-group section |
| 5 | Audience `:28` | Reading the three source-named groups as this product's audience; keeping the source's own "not fictional personas" label |
| 6 | Distinctive traits `:32` | Groupings and readings of the recorded-value list |
| 7 | Principles `:44` | Three numbered items as derived editorial implementation inference; toss-form close |
| 8 | Application rules `:52` | Four Do rules and the reasons attached to them |
| 9 | Avoid `:61` | Four Don't prohibitions and the reasons inside them |
| 10 | Semantic color `:74` | Role names from token-set keys; YAML/§2 hex keep-both; canvas off on-header-action; heading / on-primary / header-action as three `#212224` keys; home values not a house palette; YAML token note kept as the facts it names (selector-backed / route-local; no logged-in, checkout, support-doc, or interaction state inferred) |
| 11 | Spacing `:102` | Unitless steps kept on their own keys; `8`/`12`/`16`/`20`/`24`/`32` unmerged from rounded, type, and component paddings |
| 12 | Shape `:117` | Six rounded keys kept; home-search `36` off header/filter height `36px`; category-search `24` off spacing `xl: 24` |
| 13 | Elevation `:126` | Two route-local shells as the only elevation records, not a depth scale for every surface |
| 14 | Motion `:130` | Five-kind promotion gate; refusal of a partial confirmation; source "no reusable duration, easing, or motion rule" kept |
| 15 | Font evidence `:145` | Four evidence-class rows as the source's resolution table, not a published Kmong type specimen |
| 16 | Family `:153` | Pretendard as sole UI-family token on the two captured routes; canonical only because computed visible use and loaded FontFace/source evidence agree; unavailable or unobserved brand type not replaced with it; `slick` refused as a substitute |
| 17 | Type roles `:157` | Unitless ratios kept as ratios; YAML `use` verbatim; longer §3 surface-boundary column beside them; hero `40` / search `20` / marketplace-body `16` / header-action `14` kept off spacing and radius steps |
| 18 | Assets `:175` | Google s2 favicon as catalog identity pointer; Pretendard licence as upstream font-asset boundary |
| 19 | Capture / applicability `:186` | Interactive-kind and applicability verdicts; kind-omission on the category panel; not a complete state-coverage claim; `Primitive type` attached only when the source YAML records that type; no §4-only component outside the six token-set records |
| 20 | Category panel `:335` | Withholding kind and a map because the source supplies no interaction evidence |
| 21 | Layout `:344` | 1440×900 / search-shell / panel figures read under the source's own "not a breakpoint system" and "route-local observation, not a universal card layout" sentences |
| 22 | Content `:349` | Source "therefore" tone reading classified as source-grounded service framing, not a complete product-microcopy guide |
| 23 | Named gaps `:383` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official company context and the 2025 logo-rebrand item are narrative context, not token sources
- `tokens.source: reconciled` is ledger metadata
