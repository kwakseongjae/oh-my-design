# iCHEF provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/ichef/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | ichef |
| name | iCHEF |
| country | TW |
| category | saas |
| homepage | `https://www.ichefpos.com` |
| primary_color | `#E8552D` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=ichefpos.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-19 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the primary CTA in `DESIGN.md`. The favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3.

**Logo decision.** The `logo.slug` above is a Google favicon-service URL, not an iCHEF-hosted asset. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-19 |
| tokens.extracted | 2026-06-09 |
| Created (source HTML comment) | 2026-05-19 |

The source footer records the verification verbatim as **Verified:** 2026-05-19. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: production hexes beyond primary not live-verified this pass (browser unreliable) — flagged for UPDATE. That conflict is also named in `DESIGN.md` Recorded unresolved.

**Style ref** recorded only here: `pinkoi` (TW tone, adapted operational). Not a portable iCHEF fact.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing homepage, WebFetch | `https://www.ichefpos.com` | 2026-05-19 |
| about | official-doc — mission / awards / 10k+ | `https://www.ichefpos.com/about-ichef` | 2026-05-19 |
| story | official-doc — founding | `https://www.ichefpos.com/ichef-story` | 2026-05-19 |
| product-ui | described iPad POS — not live-DOM-inspected | (no URL; source-described surface) | not completed |

### Tier 1 (as listed in the source footer)

- `https://www.ichefpos.com` + `/about-ichef` (WebFetch — taglines `科技用得更好，餐廳業績更好` / `We build the best restaurant POS in the world…`, demo CTA `專人到店免費體驗`, warm orange-red identity, TW+EN bilingual, award positioning). Live DOM inspect NOT completed (browser redirect); primary `#E8552D` is brief-provided and matches iCHEF's orange-red identity; other hexes are grounded approximations pending live re-inspection.

### Tier 2

- Meet Global (bnext) + Vulcan Post (founding story / Sean Hsu / Mazendo), as the source footer names them.
- `https://www.ichefpos.com/about-ichef` + `/ichef-story` (mission, 10k+ restaurants, iF Gold 2016 / German Design Award 2017 / Red Dot).

The source HTML comment also names `meet-global.bnext.com.tw` and `vulcanpost.com` (WebSearch 2026-05-19) and CMO Ken Chen on learning from restaurant owners. Metrics surfaced by iCHEF, not independently audited. Those third-party corroboration URLs stay here; they are not portable token surfaces.

## Token note (YAML `tokens.source: prose-derived`)

The source frontmatter records `tokens.source: prose-derived` and `tokens.extracted: 2026-06-09`. The source §2 note and footer, kept here as ledger strings and also landed in the portable body as the facts they name (`DESIGN.md` Scope + Semantic color):

> Live computed-style verification was not completed this pass (WebFetch returned the marketing copy but the inspection browser session redirected unreliably). Values below combine the brief-provided primary, iCHEF's known orange-red operational identity, and conventional POS/SaaS roles. Hexes other than the primary are well-grounded approximations pending live re-inspection.

## Sibling handling

`find web/references/ichef -type f` returns only `web/references/ichef/DESIGN.md`. There is no `.verification.md` sibling. No sibling-only value exists to promote or to withhold.

## Byte-form notes

- The source frontmatter records line heights as unitless ratios (`1.15`, `1.25`, `1.20`, `1.30`, `1.50`, `1.40`). They are carried as ratios in the portable token-set table, never converted to a replacement px (A1a). Source §3's inferred ranges (`12–13px`, `14–16px`, `16–18px`, `20–28px`, `20–24px`, `28–40px`) stay on the inferred-scale table.
- YAML `tokens.typography.pos-tile.size` `17` is not the inferred product range `16–18px`. YAML `tokens.typography.body.size` `15` is not the inferred body range `14–16px`. YAML `tokens.typography.hero.size` `34` is not the inferred hero range `28–40px`.
- `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not the 16px button size. `tokens.spacing.lg: 24` is not button padding `12px 24px`.
- `tokens.rounded.full: 9999` is the unitless full step.
- YAML hex is lowercase. Source §2 writes uppercase. The portable body keeps both writings on Semantic color and component records.
- YAML `tokens.shadow.card` / `header` / `modal` use the `rgba(0,0,0,0.06) 0px 2px 8px` writing. Source §6 uses `0 2px 8px rgba(0,0,0,0.06)`. Both writings stay.
- YAML `type: button` is attached only to `button-primary` and `button-secondary`. YAML `type: card` is attached only to `pos-tile`, `card-feature`, and `card-order`. YAML `type: input` is attached only to `input`. YAML `type: badge` is attached only to `badge-status`. Quantity stepper, marketing header nav, and product nav are not in the token set.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 Personas | whole section | The source labels three fictional archetypes (name · age · city included). Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The section is dropped and is deliberately not restated here as names, ages, cities, occupations, or affiliations (D2, D2a). Mention of the drop is this row's disposition, not a re-listing of those identifiers (E2d). A `90%` figure appears only in that deleted section as a use-share sentence, not as a product token; the string is recorded here as the deleted-section token so its disposition is visible (E2d: this is mention-as-disposition, not a claim that the figure is absent from this file). |
| §9 Agent Prompt Guide | whole section | Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| §15 unattributed template curves | three curve values | `cubic-bezier(0.4, 0, 0.2, 1)`, `cubic-bezier(0, 0, 0.2, 1)`, `cubic-bezier(0.4, 0, 1, 1)` match `spec/omd-v0.1.md` example-table rows. Durations, easing *roles*, signature motions, spring stance, and reduced-motion are kept. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Brand / action `#E8552D`, hover `#D14A26`, tint `#FDEDE7` — Semantic color + Primary. Text primary `#1F1F1F`, muted `#888888`, white `#FFFFFF`, soft `#F7F7F7`, border `#D4D4D4`, Paid `#1FA463`, Pending `#F5A623`, Void/Error `#E0353B`, Info `#2B82E0` — Semantic color. Primary CTA 8px / 16px/600 / 12px 24px / no shadow / hover `#D14A26` / `專人到店免費體驗` / `Free in-store demo` — Primary CTA / POS action. POS tile white / 8px / 12px / 16px/600 `#1F1F1F` / price 14px/400 `#888888` / ≥44px / selected `#FDEDE7` + 1px solid `#E8552D` — POS Tile. Open-table card 8px / status-tinted left border / table number 20px/700 / item count + total bold / status badge top-right — Order / Table Card. Feature card white / 1px solid `#E6E6E6` / 12px / 24px / photo top / headline 20px/700 / body 14px/400 `#555555` / ROI in `#E8552D` — Feature / Content Card. Iteration-guide rules (orange-red rationed; status colors rigorous; ≥44px; numbers bold; real operators + ROI; 8px workhorse; Traditional Chinese first) — Principles + Application rules + Avoid + Motion.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` `#e8552d` / `#E8552D` | brief-provided; marketing WebFetch identity |
| `tokens.colors.primary-hover` / `accent-tint` / `canvas` / `surface` / `surface-hover` / `foreground` / `body` / `muted` / `disabled` / `hairline` / `border` / `success` / `warning` / `error` / `info` | prose-derived approximations pending live re-inspection |
| `tokens.typography.family.sans` PingFang TC / `family.mono` SFMono-Regular | inferred stack (source §3 title) |
| `tokens.typography.hero` / `heading` / `total` / `pos-tile` / `body` / `button` / `caption` (size, weight, lineHeight, use) | prose-derived |
| `tokens.spacing` xs 4 · sm 8 · md 12 · base 16 · lg 24 · xl 48 · xxl 80 | prose-derived |
| `tokens.rounded` sm 4 · md 8 · lg 12 · full 9999 | prose-derived |
| `tokens.shadow.card` / `header` / `modal` | prose-derived |
| `tokens.components.button-primary` / `button-secondary` / `pos-tile` / `input` / `card-feature` / `card-order` / `badge-status` | prose-derived; `components_harvested: true` |
| Published strings `科技用得更好，餐廳業績更好` / `We build the best restaurant POS in the world, and keep making it better.` / `專人到店免費體驗` | ichefpos.com / about-ichef WebFetch 2026-05-19 |
| Founding 2012 Taipei / Sean Hsu / Mazendo / four specialists / technology should help, not handicap, entrepreneurship / turn enterprise-level technologies into something affordable and understandable for small restaurants / iF Gold 2016 / German Design Award 2017 / Red Dot / 10,000 restaurants / Taiwan, Singapore, Malaysia, Hong Kong / noodle-counter closing sentence | source §11 narrative |

## Proof notes

- Token extraction is `prose-derived`. Live computed-style DOM inspection was not completed. Primary `#E8552D` is the creation-brief-provided value and matches iCHEF's known orange-red identity. Secondary and status hexes stay approximations.
- `components_harvested: true`; seven component records in the source token set.
- The source records a generic input `Focus` border, not a `focus-visible` treatment. Generic Focus is not treated as `focus-visible` (B1). Uncaptured hover, focus-visible, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- iCHEF has no published first-party UI specification in the source. Award recognition (iF / German Design Award / Red Dot) is craft-heritage narrative, not a published token sheet. Derived-editorial qualifications therefore close with the toss-form example: not iCHEF-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- Founding year, Taipei, Sean Hsu, Mazendo, the four specialists, the two mission lines, the three award names and years, the 10,000-restaurant figure, the four markets, and the source §11 closing noodle-counter sentence are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.
- Illustrative product-UI verbs and empty-state copy stay marked illustrative. They are not promoted as live-DOM-verified copy.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **32**. This table has **32** rows (E1 1:1). The same 32 lines also carry `not iCHEF-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Surface boundary: ichefpos.com as fetched marketing surface; described iPad product UI as source-named not live-computed; about/story pages do not supply computed tokens; prose-derived / not-live-inspected bound |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Atmosphere readings: clean operational warmth; appetite-and-action; trustworthy-and-warm; enterprise-cold vs iCHEF-warm; consumer-playful vs iCHEF-grounded; operators-not-consumers |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2012 / Taipei / Sean Hsu / Mazendo / awards / 10,000 / noodle-counter narrative as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three label-and-surface tasks; they do not come from the persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source's own group-level phrases as this product's audience |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the ten Key Characteristics |
| Experience — Principles (`DESIGN.md` 47) | The six source principles and their UI implications (toss-form header) |
| Experience — Application rules (`DESIGN.md` 58) | The Do-list rules and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 70) | The Don't-list prohibitions |
| Foundations — Semantic color (`DESIGN.md` 84) | Palette-role slotting; approximation class on every non-primary hex; no hex invented for muted category colors |
| Foundations — Spacing (`DESIGN.md` 107) | Keeping spacing steps off matching rounded / type / padding values |
| Foundations — Shape (`DESIGN.md` 118) | Keeping `sm: 4` / `md: 8` / `lg: 12` / `full: 9999` on their own paths |
| Foundations — Elevation (`DESIGN.md` 128) | Flat-and-clean / reliable-not-flashy reading; YAML and §6 shadow writings unmerged |
| Foundations — Motion (`DESIGN.md` 132) | Durations, roles, signature motions, spring stance, and reduced-motion as reconstruction; omitting the three listed curves because they match the spec example table |
| Typography — Font evidence Official product-use (`DESIGN.md` 174) | No published type token |
| Typography — Font evidence Official distributed (`DESIGN.md` 176) | No exclusive downloadable package |
| Typography — Font evidence Declared-only (`DESIGN.md` 177) | Inferred fallbacks are not a published iCHEF face |
| Typography — Font evidence License (`DESIGN.md` 178) | No iCHEF-issued font-license notice |
| Typography — Font evidence Outside (`DESIGN.md` 179) | Unfetched surfaces stay outside |
| Typography — Family (`DESIGN.md` 186) | No-substitution / fallback-not-brand-face rule |
| Typography — Type roles (`DESIGN.md` 192) | Unitless ratios kept off inferred ranges; YAML 17 / 15 / 34 unmerged from range tables |
| Typography — Conventions (`DESIGN.md` 224) | Four convention titles; larger-than-typical-SaaS / operational-truth readings |
| Typography — Assets (`DESIGN.md` 233) | Favicon slug as an identity pointer; operator photography not replaced with invented decoration |
| Components — How applicability is decided (`DESIGN.md` 244) | Role-based applicability procedure; interactive-kind and not-applicable verdicts |
| Components — Approximation bound (`DESIGN.md` 246) | Carrying the non-primary approximation class onto every component value |
| Components — State record (`DESIGN.md` 454) | §14 treatments as reconstruction rather than measured per-control observations |
| Components — State non-attachment (`DESIGN.md` 470) | System-level rows not attached as treatments to destination controls |
| Layout — Structure / density (`DESIGN.md` 485) | Marketing photography-led vs product fixed operational; medium vs purposeful density |
| Layout — Responsive (`DESIGN.md` 487) | Breakpoints / collapse / touch / image as source-stated, not viewport-measured |
| Content — Voice (`DESIGN.md` 509) | Characterization, register reading, and tone table |
| Content — Byte-exact (`DESIGN.md` 548) | Byte-exact / gloss-beside rule; verified lines as fetched marketing copy, not a complete microcopy guide |
| Governance — Recorded unresolved (`DESIGN.md` 582) | Naming the list from the source's own unresolved fields |
