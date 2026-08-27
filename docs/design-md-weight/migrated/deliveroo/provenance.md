# Deliveroo provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, conflicts, and omission record for the T2 Core v2 migration. The canonical source remains `web/references/deliveroo/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | deliveroo |
| name | Deliveroo |
| country | UK |
| category | consumer-tech |
| homepage | https://deliveroo.co.uk |
| primary_color | `#00CCBC` |
| logo | `type: simpleicons`, `slug: deliveroo` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-06-22 |
| components_harvested | true |

Token note from the source, verbatim: "primary = brand teal (#00CCBC) confirmed via SimpleIcons official hex + multiple brand sources + Medium DS article. Dark mode canvas #121212. Seaweed-named action color in PDS 2.0. Stratos (customised Production Type) for headlines."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-22 |
| tokens.extracted | 2026-06-22 |
| deliveroo.design hero copy checked | 2026-06-22 |

## Capture boundary

The source footer records: "KR IP geo-blocked from deliveroo.co.uk + design.deliveroo.net, tokens from Tier 1 official sources", and the philosophy-layer comment records the same block as Cloudflare Error 1009. No computed style, DOM, or interaction observation of any Deliveroo product surface exists in this record. Every component, layout, state, and motion figure in the portable document is source-recorded rather than measured.

## Sources

### Tier 1

| URL | What it supports |
|---|---|
| https://deliveroo.design/ | Brand and hiring surface; hero copy "How do you show customers when their order's arriving?" verified 2026-06-22 |
| https://medium.com/deliveroo-design/brightening-up-accessibility-with-a-new-colour-system-5921915641ed | Official Deliveroo Design Medium; PDS 2.0 colour system details, food-themed token naming (Seaweed, Anchovy, Tomato), `#DF1619` critical token, WCAG AA compliance approach |
| https://cdn.simpleicons.org/deliveroo | Official SVG `fill="00CCBC"` confirming the primary brand hex |

### Tier 2

- getdesign.md/deliveroo — not listed
- styles.refero.design?q=deliveroo — not listed

### Supporting record (narrative and type attribution, not interface tokens)

| URL | What it supports |
|---|---|
| https://fontsinuse.com/uses/14757/deliveroo | Stratos (Production Type) + Adelle confirmed |
| https://www.creativeboom.com/news/deliveroo-serves-up-a-sizzling-new-identity-to-drive-a-wider-global-appetite/ | Rooute, teal brand code, Roo Head geometry, 2023 refresh |

### Search synthesis (weakest class carried into the portable document)

The source records: "Search synthesis: #00A99C pressed state, #003733 teal ink, #121212 dark canvas, #FFC100 promo gold, pill geometry, food-first hierarchy — widely corroborated across multiple brand color databases and design articles". The portable Foundations section keeps this class separate from the official-asset and official-publication classes rather than merging all colour values into one authority.

The remaining neutral values — `#ffffff`, `#1a1a1a`, `#4a4a4a`, `#767676`, `#f5f5f5`, `#e0e0e0` — carry no individual attribution in the ledger; the token set as a whole is marked `reconciled`.

## Conflicts

Source footer, verbatim: "Teal variant: #00CCBC (logo sources, SimpleIcons) vs #00CDBC (SchemeColor) vs #00c1b2 (designpieces/htmlcolors). Resolved: #00CCBC wins — confirmed by SimpleIcons official Deliveroo SVG fill value and Mobbin brand palette. Other variants are minor colour sampling discrepancies."

The portable document carries only `#00CCBC` and a one-line pointer to this resolved conflict; the competing samples stay here.

## Omission ledger

| Omitted from the portable document | Exact source value | Reason |
|---|---|---|
| `ease-enter` curve | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Unattributed curve. The source ledger names sources for colour, type, and narrative and names none for motion. This value differs from the legacy template's `ease-enter` example. |
| `ease-exit` curve | `cubic-bezier(0.4, 0.0, 1, 1)` | Same, and identical to the `ease-exit` example in the legacy authoring template `spec/omd-v0.1.md`, which that file now labels a non-brand implementation default. |
| `ease-spring` curve | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Unattributed curve, byte-identical to the `ease-spring` example in `spec/omd-v0.1.md`, which that file labels a non-brand implementation default. |
| `ease-standard` curve | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Unattributed curve. This value differs from the legacy template's `ease-standard` example. |
| §13 personas | four named fictional archetypes | The source discloses them as fictional archetypes with illustrative names. Deleted from the portable document and deliberately **not** re-hosted here: no name, age, city, or segment profile is recorded in this ledger. |
| §9 Agent Prompt Guide wrapper | prompt sentences, iteration list, quick-reference restatements | Tool-facing prompt packaging with no receiving Core slot. The renderable values that existed only inside it are listed below and were moved, not deleted. |

### §9-only values that were moved rather than deleted

| Value | Destination |
|---|---|
| Restaurant name 18px system-ui weight 600 in `#1a1a1a`; rating stars `#00CCBC` | Components & States → Restaurant card, labelled legacy prompt-block guidance |
| Magnifier icon `#4a4a4a`, left-aligned | Components & States → Search input, labelled legacy prompt-block guidance |
| Deal card headline 18px weight 700, subtext 14px weight 400, child CTA pill `#1a1a1a` background with `#ffffff` text at 9999px radius | Components & States → Promo card, labelled legacy prompt-block guidance |
| Primary order button full-width on mobile | Components & States → Primary CTA, labelled legacy prompt-block guidance |

The remaining §9 lines — the quick colour reference, the ETA string "25–35 min", the pill-badge recipe, and the eight iteration rules — restate values already carried by Foundations, Components & States, and Experience; they are deleted as repetition rather than moved.

## Claim ledger

| Claim | Class | Record |
|---|---|---|
| `#00CCBC` primary/brand | Official brand asset | SimpleIcons official SVG fill; corroborated by brand sources, the Medium article, and the Mobbin palette |
| `#DF1619` critical | Official design publication | Deliveroo Design Medium, `color.background.critical` |
| Seaweed / Anchovy / Tomato token naming, PDS 2.0 AA approach | Official design publication | Deliveroo Design Medium |
| `#00A99C`, `#003733`, `#121212`, `#FFC100`, pill geometry, food-first hierarchy | Search synthesis | Multiple brand colour databases and design articles |
| `#ffffff`, `#1a1a1a`, `#4a4a4a`, `#767676`, `#f5f5f5`, `#e0e0e0` | Reconciled token set | No individual attribution in the ledger |
| Stratos, 6° angle, Roo Head, Rooute, DesignStudio 2016 rebrand, 2023 refresh | Type attribution and design press | Fonts In Use; Creative Boom |
| Adelle | Type attribution | Fonts In Use; no role assigned in the source body, so none assigned in the portable document |
| Founding 2013, Will Shu, Greg Orlowski, 400 assets, ten markets | Public record | The source comment marks these as widely documented public facts |
| PDS 2.0 overhaul attribution to Laura Soto Miranda and the Deliveroo Design team | Source body claim | Stated in §11 of the source; no separate URL is recorded for the attribution |
| Component, layout, breakpoint, touch-target, state, and motion figures | Source-recorded reconstruction | No live measurement exists; see Capture boundary |
| "Food-first" philosophy, pill-native system, contrast-first PDS 2.0 direction | Editorial interpretation | The source comment declares these as editorial readings connecting observed decisions to the stated accessibility goals |
| The portable document's own B2a qualifications — Scope, Primary tasks, Audience, Distinctive traits, Derived implementation principles, Avoid, Foundations colour evidence classes, the Elevation shadow reading, the whole Motion contract and its promotion gate, Font evidence, the Family no-substitution rule, Typography rules, Assets, the Components & States evidence boundary, the Source state contract, Layout Whitespace and the responsive-proof note, Content & Locales voice / copy classes / locale register, and Governance | Derived editorial implementation inference of this migration | Wider than the three readings the source comment declares in the row above. These qualifications are written by this migration rather than by Deliveroo, and each is stated adjacent to its passage in the portable body (B2/B2a) rather than held only in this ledger (E1) |

## Proof notes

- The source is a reconciled reconstruction, not a live capture; `verified: 2026-06-22` records the source review date, not a product-surface observation.
- Interaction expansions: none. Applicability in the portable document follows control meaning, and unrecorded treatments are omitted rather than marked `not-applicable`. State coverage is not claimed complete.
- The generic `Focus: 1.5px solid #00CCBC` treatment on the search input stays a generic focus observation. It is not promoted into a `focus-visible` treatment.
- Level 3 sheet elevation is described qualitatively in the source ("Large shadow + scrim overlay"); no numeric shadow or scrim value exists, and none is invented.
- No licence grant is recorded for Stratos, Adelle, or any distributed Deliveroo brand asset.
