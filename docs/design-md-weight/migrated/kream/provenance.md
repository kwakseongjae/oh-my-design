# KREAM provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kream/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kream |
| name | KREAM |
| country | KR |
| category | ecommerce |
| homepage | `https://kream.co.kr` |
| primary_color | `#000000` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kream.co.kr&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | false |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog `primary_color` `#000000` is dual: identity here, and a keep-off record in `DESIGN.md` Scope / Semantic color / Search text input / Home recovery button — it is not `tokens.colors.primary` `#222222`. The favicon URL is dual: identity here, and a portable Assets pointer in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

## Freshness

| Event | Date |
|---|---|
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
| home | commerce-home | `https://kream.co.kr/` | 2026-07-13 |
| recovery | commerce-recovery | `https://kream.co.kr/shop` | 2026-07-13 |
| search | commerce-search | `https://kream.co.kr/search?keyword=nike` | 2026-07-13 |
| buying-faq | official-doc | `https://kream.co.kr/faq?category=buying&page=0` | 2026-07-13 |
| authentication-policy | official-doc | `https://kream.co.kr/auth_policy` | 2026-07-13 |
| pretendard-docs | official-doc | `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` | 2026-07-13 |
| pretendard-license | license | `https://github.com/orioncactus/pretendard/blob/main/LICENSE` | 2026-07-13 |

YAML also names a narrative FAQ list page used in source §11, not a token surface: `https://kream.co.kr/faq?list=true&page=2`.

### Tier 1 (as listed in the source footer)

- `https://kream.co.kr/` (commerce home)
- `https://kream.co.kr/shop` (commerce recovery)
- `https://kream.co.kr/search?keyword=nike` (commerce search)
- `https://kream.co.kr/faq?category=buying&page=0` (official buying FAQ)
- `https://kream.co.kr/auth_policy` (authentication standards)
- `https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md` (upstream font documentation)
- `https://github.com/orioncactus/pretendard/blob/main/LICENSE` (upstream font licence)

### Tier 2

- `https://getdesign.md/kream` — attempted; no indexed KREAM record returned
- `https://styles.refero.design/?q=kream` — attempted; no KREAM result returned in the public search result set

## Token source (YAML `tokens.source`)

The source frontmatter records `tokens.source: live-extract` and `tokens.extracted: 2026-07-13`. That producer string is ledger metadata. `components_harvested: false` is ledger metadata. The portable body names `tokens.components: {}` in the Capture record.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13; `search` = search / search-live / live-inspect / 2026-07-13; `recovery` = recovery / recovery-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas / primary / foreground / surface / on-primary | home |
| tokens.colors.muted / hairline | search |
| tokens.typography.family.ui | home |
| tokens.typography.body (size, weight, use) | home |
| tokens.typography.utility (size, weight, use) | search |
| tokens.typography.search (size, weight, lineHeight, use) | search |
| tokens.typography.tab-active (size, weight, use) | search |
| tokens.spacing.xxs / xs / md / lg / xl | home |
| tokens.spacing.sm | search |
| tokens.rounded.none / merchandising-panel | home |
| tokens.rounded.sm / search-filter-pill | search |
| tokens.rounded.recovery | recovery |
| tokens.shadow.none | home |

YAML `tokens.components` is `{}`. §4 component records are not claim-ledger keys.

## Capture selectors

| Component | Pointer |
|---|---|
| Pill filter button | `surface-3::[data-omd-capture="18"]` (`filter_button tint shape_pill`) |
| Outlined filter button | `surface-3::[data-omd-capture="25"]` (`filter_button line shape_rect`) |
| Search tab (default) | `home::[data-omd-capture="13"]` (`tab`) |
| Search tab (active, route state) | `surface-3::[data-omd-capture="14"]` (`router-link-active router-link-exact-active tab active`) |
| Search text input | `surface-3::[data-omd-capture="12"]` (`input_search show_placeholder_on_focus`) |
| Search product-card shell | `surface-3::[data-omd-capture="37"]` (`product_card`) |
| Home recovery button | `surface-2::[data-omd-capture="12"]` (`button-home`) |

## Sibling handling (`web/references/kream/.verification.md`)

The sibling exists — confirmed with `find web/references/kream -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Checked 2026-07-13. Pipeline: omd:add-reference UPDATE. Method: supplied raw artifact only; no browser capture rerun and no MCP.
- Artifact captured `2026-07-13T11:28:48.609Z` with `playwright_cli`. Path `artifacts/reference-evidence/kream.json`.
- Capture coverage: 3 routes, score 81, 23 component variants, 0 observed states, 0 interaction kinds, 0 interaction snapshots.
- Surfaces: `https://kream.co.kr/` commerce home; `https://kream.co.kr/shop` commerce recovery; `https://kream.co.kr/search?keyword=nike` commerce search.
- Raw samples: home capture 13 (44px tab, padding `13px 0px`); home capture 15 (16px/700/44px); `home::div.flicking-panel` height 475px; search capture 18 (`rgb(244, 244, 244)` / 30px pill); search capture 25 (white / `rgb(78, 78, 78)` / `rgb(240, 240, 240)` / 6px / `0px 6px 0px 4px` / 30px); search capture 12 (`rgb(0, 0, 0)` / 24px/700 / 29px); search capture 14 (`rgb(34, 34, 34)` / 2px bottom border / 16px/700 / 44px); recovery capture 12 (`rgb(0, 0, 0)` / `rgba(0, 0, 0, 0.6)` / 8px / 13px / 36px).
- Pretendard Variable: 1,026 visible uses; `loaded` / high confidence; 92 KREAM-hosted subset `woff2` sources under `https://kream.co.kr/_nuxt/`.
- Declared-only sibling names: `HelveticaNeue` / `HelveticaNeueBold` / `NotoSansCJKkr` / `NotoSansCJKkr-Light` / `NotoSansCJKkrBold` / `Roboto-Bold` / `Roboto-Light` / `Roboto-Medium`. `Roboto` classified as system with 0 visible uses.
- getdesign / Refero: no indexed KREAM record / no KREAM result in the public search result set.

### Sibling-only strings (not promoted into `DESIGN.md`)

These values appear in the sibling and not in the visible source body. They stay on this ledger. They are not portable facts. This paragraph names the dropped field kind; it does not assert that the strings are absent from this file (E2d).

- coverage score 81
- 23 component variants
- 0 interaction kinds / 0 interaction snapshots
- artifact path `artifacts/reference-evidence/kream.json`
- artifact timestamp `2026-07-13T11:28:48.609Z`
- `playwright_cli`
- `rgb(34, 34, 34)` / `rgb(244, 244, 244)` / `rgb(78, 78, 78)` / `rgb(240, 240, 240)` / `rgb(0, 0, 0)` / `rgb(255, 255, 255)`
- `home::[data-omd-capture="15"]`
- `home::div.flicking-panel` as a selector (the 475px height is already in the source body)
- font source path `https://kream.co.kr/_nuxt/`
- sibling family labels `NotoSansCJKkr-Light` / `NotoSansCJKkrBold`

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffffff`, `#222222`, `#f4f4f4`, `#f0f0f0`, `#4e4e4e`, Pretendard Variable, 1,026 uses, 92 hosted subset URLs, 30px pill, 6px outlined filter, 44px tabs, 2px bottom border, 24px/700 search input, 29px input height, 8px recovery radius, 36px recovery height, SIL OFL 1.1, declared-only Helvetica Neue / Noto Sans / Roboto, zero interaction records, getdesign/refero no usable record.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.canvas / primary / foreground / surface / on-primary | home |
| tokens.colors.muted / hairline | search |
| tokens.typography.family.ui | home |
| tokens.typography.body | home |
| tokens.typography.utility / search / tab-active | search |
| tokens.spacing.xxs / xs / md / lg / xl | home |
| tokens.spacing.sm | search |
| tokens.rounded.none / merchandising-panel | home |
| tokens.rounded.sm / search-filter-pill | search |
| tokens.rounded.recovery | recovery |
| tokens.shadow.none | home |
| tokens.components | empty object `{}` |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §9 Agent Prompt Guide — construction prompt | Deleted. Tool-facing recreate-the-control prompt. Values it restated are already in Foundations / Typography / Components. No receiving slot and no delegation (A2, A3). |
| §13 personas | Source collected no first-party persona research. Two user-provided placeholders (customer-segment field; transaction-or-discovery-task field) omitted at the field boundary. No name, age, city, motivation, or affiliation classification is invented or re-hosted here (D2, D2a). |
| §14 / §15 placeholder wrappers | `[FILL IN]` wrappers omitted; the evidence-status meanings (no observed empty/loading/success/skeleton/disabled; recovery-route component only with no error treatment; no motion evidence) land in the Capture record and Foundations Motion without a placeholder token. |
| §15 unattributed curves | Not present in the source. No curve value to delete. Duration and signature-motion fields are also unnamed. B3 promotion gate stays in Foundations Motion. |

§9 deletion check (A3). Every value the construction prompt names was confirmed present elsewhere in the portable body before the section was dropped. White/charcoal desktop search route — Scope / Foundations. Pretendard Variable — Typography Family. 30px `#f4f4f4` pill filters — Pill filter button. 6px white outlined filters — Outlined filter button. 24px/700 search input — Type roles + Search text input. 44px tabs with 700 weight plus a 2px charcoal bottom border — Search tab. Do not add a branded CTA color, a substituted font, a modal/menu state, or a responsive variant — Avoid / Capture record.

## Derived editorial inventory

Portable `DESIGN.md` carries 22 complete B2a qualifications. This table is 22 data rows. Preamble sentences on this page are not portable qualifications.

| # | Portable location | Qualified reading |
|---|---|---|
| 1 | Experience Scope ¶1 `:9` | Three inspected commerce URLs as this contract's token surfaces; FAQ and authentication-policy URLs as named service-context sources that do not supply computed tokens; values stay attached; catalog `primary_color` `#000000` kept off `tokens.colors.primary` `#222222` |
| 2 | Experience Scope ¶2 `:11` | Tightly-neutral / quiet-white-and-charcoal / search-route-as-strongest-marketplace-control-evidence / surface-specific-not-universal-kit / transaction-model character |
| 3 | Experience Scope ¶3 `:13` | Marketplace-and-inspection / five-stage buying guidance / current-surface reflection classified as context that does not by itself supply interface tokens |
| 4 | Primary tasks `:19` | Selecting the three surface-or-label outcomes as primary tasks; not from the Personas section |
| 5 | Audience `:28` | Dropping the unfilled placeholders rather than promoting them; carrying no name, age, city, motivation, or affiliation classification; reading source-named member/seller groups as audience |
| 6 | Distinctive traits `:32` | Classifying the Key Characteristics list as that restatement; groupings and readings inside the list |
| 7 | Principles `:42` | Three numbered items as derived editorial implementation inference; toss-form close |
| 8 | Application rules `:50` | Four Do rules and the reasons attached to them |
| 9 | Avoid `:59` | Four Don't prohibitions and the reasons inside them |
| 10 | Semantic color `:72` | Role names from token-set keys; pairing each hex to its token-set path; primary off foreground as two `#222222` keys; canvas off on-primary as two `#ffffff` keys; outlined-filter background `#ffffff` as a §4 field off those two YAML `#ffffff` keys; catalog `#000000` off YAML keys and off search-input/recovery `#000000`; `#f4f4f4` not a YAML colors key; `#00cc44`/`#f15746` off the token set; home values not a house palette; on-primary "no semantic CTA role" bound kept |
| 11 | Spacing `:88` | Unitless steps kept on their own keys rather than rewritten as a grid; `2`/`4`/`6`/`8`/`12`/`24` unmerged from border, padding, rounded, and type |
| 12 | Shape `:102` | Five rounded keys kept (`0`/`6`/`8`/`16`/`30`); pill radius `30` off pill height `30px`; component heights off the rounded map; neither chosen as a replacement |
| 13 | Elevation `:106` | Representative `box-shadow: none` as the only elevation record, not a depth scale for every surface |
| 14 | Motion `:110` | Five-kind promotion gate; refusal of a partial confirmation; source "No motion, transition, or interaction state was captured" kept |
| 15 | Font evidence `:125` | Four evidence-class rows as the source's resolution table, not a published KREAM type specimen; official-licence row not independently establishing product use |
| 16 | Family `:133` | Pretendard Variable as sole UI-family token on the three captured routes; canonical only because computed visible use and loaded FontFace/source evidence agree; refusing to replace an unavailable or unobserved brand type with it; declared-only Helvetica Neue, Noto Sans, and Roboto refused as substitutes |
| 17 | Type roles `:137` | Pairing each YAML role to its token-set path; unitless `1.21` kept as a ratio beside §3 `29px`; YAML `use` verbatim; longer §3 surface-boundary column beside them; recovery-button row as a §3-only writing; search size `24` kept off spacing `xl: 24`; body size `16` off a spacing step |
| 18 | Assets `:155` | Google s2 favicon as catalog identity pointer; Pretendard licence as upstream font-asset boundary |
| 19 | Capture / applicability `:175` | Interactive-kind and applicability verdicts and the reason for either; route-state reading of the active tab; no-fixed-height reading of the product-card; recovery-not-primary-CTA reading; no YAML primitive type invented; every §4 component labelled `not in the token set`; class-names/static-samples are not interaction-state evidence; generic `focus` observation is not `focus-visible` treatment; absence of an observation is not `not-applicable`; loading/error/success follow product role not primitive kind; Core §4.4 by control meaning; not a complete state-coverage claim |
| 20 | Layout `:332` | 1188px × 475px / 238px / 468px figures read under the source's own "Only route-local dimensions are retained" and "desktop-only" sentences |
| 21 | Content `:351` | Official service language classified as not a complete product-microcopy guide |
| 22 | Named gaps `:385` | List as a catalog of source-unnamed values, not coverage of domains the source never named |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: false
- Interaction expansions: 0; only default component observations plus the route-selected search tab promoted
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for want of a capture; applicability follows control meaning. State coverage is not claimed complete.
- Official FAQ and authentication policy are service context, not token sources
- `tokens.source: live-extract` is ledger metadata
