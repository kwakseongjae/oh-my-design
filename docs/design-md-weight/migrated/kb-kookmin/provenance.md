# KB국민은행 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kb-kookmin/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kb-kookmin |
| name | KB국민은행 |
| country | KR |
| category | fintech |
| homepage | `https://www.kbstar.com/` |
| primary_color | `#ffcc00` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kbstar.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and a portable scope record in `DESIGN.md` §1. Catalog identity `primary_color` `#ffcc00` matches `tokens.colors.header-accent` and is also the portable Header Accent role. The favicon slug is dual: identity here, and a portable asset pointer in `DESIGN.md` §3 classified as an identity pointer, not hosted brand artwork.

**Logo decision.** The `logo.slug` above is a Google favicon service URL, not a KB국민은행-hosted asset URL. The catalog identity field is kept here and is classified in the portable document as an identity pointer, not a hosted brand file and not a substitute for the bank CI signature.

No `ds.*` fields appear in the source. The portable B2a close uses the toss-form `not KB국민은행-authored or a separately published UI specification`.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 / 2026-07-14 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c). Brand-asset and official-doc sources were captured 2026-07-14.

Conflicts unresolved: none — as the source footer states.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product-web | `https://www.kbstar.com/` | 2026-07-13 |
| online-banking | public-product-web | `https://obank.kbstar.com/quics?page=C018702` | 2026-07-13 |
| home-repeat | duplicate-public-product-web | `https://www.kbstar.com/` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.kbstar.com/` | 2026-07-13 |
| online-banking-live | product-surface | `https://obank.kbstar.com/quics?page=C018702` | 2026-07-13 |
| kb-bank-ci | brand-asset | `https://omoney.kbstar.com/quics?page=C017667` | 2026-07-14 |
| kbfg-ci | brand-asset | `https://www.kbfg.com/kor/about/corporate/ci.htm` | 2026-07-14 |
| kbfg-font | brand-asset | `https://www.kbfg.com/kor/about/corporate/font.htm` | 2026-07-14 |
| kbfg-history | official-doc | `https://www.kbfg.com/eng/about/group/history/merge.htm` | 2026-07-14 |
| kbfg-values | official-doc | `https://www.kbfg.com/kor/about/group/value.htm` | 2026-07-14 |
| kbfg-annual-report-2024 | official-doc | `https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf` | 2026-07-14 |

### Tier 1

- https://www.kbstar.com/
- https://obank.kbstar.com/quics?page=C018702
- https://omoney.kbstar.com/quics?page=C017667
- https://www.kbfg.com/kor/about/corporate/ci.htm
- https://www.kbfg.com/kor/about/corporate/font.htm
- https://www.kbfg.com/eng/about/group/history/merge.htm
- https://www.kbfg.com/kor/about/group/value.htm
- https://www.kbfg.com/common/jsp/fileDownUtil.jsp?filepath=%2Fdata%2Fannual_report%2F2024+KB_ar_full+version.pdf

### Tier 2 (no usable record)

- https://getdesign.md/kb-kookmin and https://styles.refero.design/?q=KB%20Kookmin%20Bank were both attempted. The available open paths returned internal/safe-open errors and corresponding searches found no KB국민은행-specific catalogue record.

## Token note (YAML `tokens.note`)

The source frontmatter note, kept here as a ledger string and also landed in the portable body as the facts it names:

> Only selector-backed public KB국민은행 product-web values are tokens. KB Financial Group CI, font, history, and value materials are retained as separate brand-context evidence; no fallback family or unobserved interaction is promoted.

## Sibling handling (`web/references/kb-kookmin/.verification.md`)

The sibling exists — confirmed with `find web/references/kb-kookmin -type f`. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record. Source §9 also names `_research.md` as a companion ledger for raw selectors, values, confidence, conflicts, and the source ledger. That filename is a ledger pointer, not published copy.

Its own record, transcribed here:

- Machine artifact: `artifacts/reference-evidence/kb-kookmin.json`
- Bundle preflight: 3 surfaces, score 80, 5 detected component types, 33 component variants, one static observed state, zero interaction kinds / zero interaction records. Viewport 1440×900 per supplied bundle.
- `home::body` — color `rgb(90, 90, 90)`, font 14px / 400 / 21px, computed stack begins `맑은 고딕`
- `home::[data-omd-capture="0"]` — color `rgb(255, 204, 0)`, radius `0px`
- `home::[data-omd-capture="14"]` — background `rgb(255, 255, 255)`, text `rgb(34, 34, 34)`, border `rgb(221, 221, 221)` at `1px`, padding `0px 10px`, height `28px`
- `home::[data-omd-capture="67"]` — text `rgb(12, 74, 209)`, padding `0px 8px 0px 9px`, height `24px`, font 13px / 400 / 24px
- `home::[data-omd-capture="59"]` — 14px square box; low-confidence / not promoted
- `surface-2::#slick-slide00` — static `aria-selected="true"`, text `rgb(51, 51, 51)`, height `28px`, font 14px / 400 / 14px, stack begins `Roboto`
- `surface-2::[data-omd-capture="14"]` — low-confidence detector, not promoted
- Font table: 맑은 고딕 unresolved/low, 352 uses; Roboto system/high, 67 uses; Times unresolved/low, 1 use; KB금융체 official group brand asset, not measured in bundle
- Conflict matrix: `#ffffff` 21 high-confidence background occurrences; `#333333` repeated; all 420 radius observations `0px`

Sibling-only items (mention, not portable use). This sentence names the field kind so the row can be found; it does not assert that those strings are absent from this file:

- coverage score `80`
- 5 detected component types, 33 component variants
- 352 / 67 / 1 font-use counts
- Times (one text occurrence)
- 21 high-confidence background occurrences
- 420 radius observations
- `home::[data-omd-capture="59"]` 14px square box
- `surface-2::[data-omd-capture="14"]` low-confidence detector
- `artifacts/reference-evidence/kb-kookmin.json`
- sibling narrative gloss “straight forms for trust and curved forms for friendliness”

Those sibling-only strings are transcribed in the bullet list above. They are not promoted into `DESIGN.md`.

Values the sibling shares with the source body (corroboration, not new portable facts): `#ffffff`, `#333333`, `#ffcc00`, `#0c4ad1`, `#dddddd`, `#000000`, `#222222`, 맑은 고딕, Roboto, KB금융체, `1440×900`, `interactionCount: 0`, Star-b, Kookmin Bank and Housing & Commercial Bank merger.

## Token-set key paths (YAML)

| Path | Surface attachment |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.foreground | online-banking |
| tokens.colors.foreground-strong / muted / header-accent / link / hairline | home |
| tokens.typography.body.* / section-heading.* | home |
| tokens.typography.online-selected-item.* | online-banking |
| tokens.spacing.inline-link-left / inline-link-right / outline-link-inline / toggle-inline | home |
| tokens.rounded.square | home |
| tokens.shadow.none | home |
| tokens.components.home-outline-list-item.* / home-inline-list-item.* | home |
| tokens.components.online-selected-list-item.* | online-banking |

## Omission ledger

Disposition mentions. These rows name the dropped field kind; they do not re-host the dropped content as a fact.

| Item | Disposition |
|---|---|
| §13 stakeholder categories — 3 headings; name, age, city, motivation, and affiliation classification | Deleted. The source already calls them stakeholder categories evidenced by first-party group materials, not synthetic personal profiles, and leaves task / device / accessibility need / journey unspecified. No name, age, city, motivation, or affiliation classification is re-hosted here (D2, D2a). The source's own publicly observable group wordings — customers broadly; people and businesses — survive in `DESIGN.md` Audience. |
| Unsourced motion curve | None in the source. No curve was deleted. Durations are unnamed. B3 promotion gate is in `DESIGN.md` Motion. |
| Sibling-only previous/secondary fields (score 80, 352/67/1 uses, Times, 420 radius observations, capture-59 square box) | Mentioned in the sibling section above. Not promoted into `DESIGN.md`. |
| YAML `omd`, `verified`, `verification_v2`, `tokens.source` / `extracted`, `components_harvested` | Kept in this ledger (A1c). Not copied into portable top matter. |

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / selector-backed-computed-style / 2026-07-13; `online-banking` = online-banking / online-banking-live / selector-backed-computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.canvas | home |
| tokens.colors.foreground | online-banking |
| tokens.colors.foreground-strong | home |
| tokens.colors.muted | home |
| tokens.colors.header-accent | home |
| tokens.colors.link | home |
| tokens.colors.hairline | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.section-heading.size / weight / lineHeight / use | home |
| tokens.typography.online-selected-item.size / weight / lineHeight / use | online-banking |
| tokens.spacing.inline-link-left / inline-link-right / outline-link-inline / toggle-inline | home |
| tokens.rounded.square | home |
| tokens.shadow.none | home |
| tokens.components.home-outline-list-item.* | home |
| tokens.components.home-inline-list-item.* | home |
| tokens.components.online-selected-list-item.* | online-banking |

## Derived-editorial inventory (B2a, 1:1 with portable complete-form closes)

Each row names one portable sentence that carries the complete close `derived editorial implementation inference` + `not KB국민은행-authored or a separately published UI specification`. Count must match `DESIGN.md`.

| # | Portable site | Judgment named |
|---|---|---|
| 1 | Scope ¶1 | two inspected routes as token surfaces; duplicate home snapshot not a second responsive surface; values stay attached; group CI / font / history / value materials as brand-context evidence that do not automatically supply product-web tokens |
| 2 | Scope ¶2 | practical visual language whose cues of trust, legibility, and institutional continuity should be kept distinct from unobserved native-app or authenticated banking flows |
| 3 | Scope narrative | classifying the §11 paragraphs — including the closing sentence that the 2024 report does not establish completed 2025 UI values or authorise a broader product design system — as narrative context that does not by itself supply interface tokens |
| 4 | Primary tasks | selecting the three captured-surface tasks as primary tasks; taking them from captured controls rather than from the persona section |
| 5 | Audience | refusing to promote individual personas; reading those source-named groups as this product's audience |
| 6 | Distinctive traits | classifying the list as a restatement of the source Key characteristics; groupings inside the list |
| 7 | Principles | the five source Principles items together with the UI implication the source draws from each |
| 8 | Application rules | the four source Do rules and the reasons attached |
| 9 | Avoid | the four source Don't prohibitions and the reasons inside them |
| 10 | Semantic color | pairing each hex to its token-set path; taking role names from the source's own labels; keeping `#ffcc00` as a local header accent rather than a universal product fill; attaching surfaces from YAML claim anchors rather than from the role name |
| 11 | Spacing | keeping each number on its own key path |
| 12 | Shape | reading `tokens.rounded.square: 0` as a local observation rather than a universal radius scale |
| 13 | Elevation | reading the stack as a local flat observation rather than a universal elevation system |
| 14 | Motion | treating the zero-interaction record as a motion constraint rather than a motion token; leaving reduced-motion unnamed; stating the five-kind per-component promotion gate rather than promoting a curve |
| 15 | Font evidence | neither computed stack as a KB UI-family token; KB금융체 as a separately documented brand asset; missing `@font-face` as declared-only rather than a brand face |
| 16 | Family | omitting a `tokens.typography.family` path; fallback prohibition |
| 17 | Type roles | keeping YAML line heights as the YAML px spelling; keeping the 13px inline-item font off the 14px body role; attaching surfaces from YAML claim anchors |
| 18 | Type roles sizes | reading 14px body, 14px selected-item, `21px` body line height, `14px` selected line height, and 20px heading as the roles named beside them rather than as shared numerals |
| 19 | Assets | Google favicon slug as an identity pointer rather than hosted brand artwork |
| 20 | Capture record | preserving the source state contract here rather than delegating to an unadopted catalog graph; role-based decision procedure; every interactive-kind verdict; every applicability verdict and reason; refusal to treat the map as a complete state-coverage claim |
| 21 | Outline list item | reading 28px and `0px 10px` as this item's geometry rather than the spacing step or the online-banking 28px |
| 22 | Inline list item | reading 13px / 24px and `0px 8px 0px 9px` as this item's geometry rather than the body role or the spacing steps |
| 23 | Selected list item | reading the 14px line height and 28px height as this item's geometry rather than the home body or the outline item; omitting kind and applicability because the source supplies no interaction evidence for the row; not promoting the row as a tab |
| 24 | Layout capture | reading `1440×900` as a capture measurement rather than a cross-viewport specification; reading 13–14px / square-utility observations as those captured routes rather than an accessibility contract |
| 25 | Layout measurements | reading named heights as surface measurements rather than cross-viewport specifications |
| 26 | Content & Locales | reading the source register as this contract's voice rather than as a separately published KB국민은행 microcopy guide |
| 27 | Voice samples | keeping the three Korean lines as illustrative samples rather than extracted product copy; keeping the Do/Don't table as the source's own voice rules rather than a complete microcopy guide |
| 28 | Named gaps | calling the list a set of named gaps rather than a domain inventory; treating the items as unnamed values rather than permissions to invent |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Interaction: `interactionCount: 0`; `interactionKinds: 0`. One static `aria-selected="true"` observation on the online-banking row; no selection transition retained.
- Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` for that reason; applicability follows control meaning. State coverage is not claimed complete.
- Official bank CI, group CI, group font, history, values, and 2024 annual report are brand-context and narrative evidence; they do not populate product numeric tokens
- Narrative context (merger, mission, vision, 2024 evolution, closing 2025-UI-values sentence) does not by itself supply interface tokens
