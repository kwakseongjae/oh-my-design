# 全家便利商店 provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/familymart-tw/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | familymart-tw |
| name | 全家便利商店 |
| country | TW |
| category | ecommerce |
| homepage | https://www.family.com.tw/Marketing/ |
| primary_color | `#00b347` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=family.com.tw&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The source carries no `tokens.note` and no `ds.name` / `ds.url` / `ds.type` / `ds.description` field. None is invented here.

Dual / multiple destinations (E2a):

- Source `name` `全家便利商店` is dual: this identity ledger + the portable H1 (`# 全家便利商店 Design System`) and every portable sentence that names the company, byte-for-byte. The Latin `Taiwan FamilyMart` / `FamilyMart` never stands in for it; the one added `全家便利商店 (Taiwan FamilyMart)` gloss in Scope sits beside it, and the Latin forms that survive are the ones the source itself writes.
- `primary_color` `#00b347` has six destinations: this identity ledger + portable Experience Scope (the qualified interface reading) + portable Experience Distinctive traits + portable Foundations Brand green + the portable Current-section navigation row background + the retained `dropbtn-more__btn` text color in portable Components & States. Measured: 5 occurrences in the portable body, 5 in this ledger.
- `homepage` `https://www.family.com.tw/Marketing/` stays in this ledger only. The portable body names the three captured routes by their surface URLs instead.
- The three surface URLs `https://www.family.com.tw/Marketing/ko`, `https://www.family.com.tw/Marketing/zh/Convenience`, and `https://www.family.com.tw/Marketing/zh/Map` are dual: portable Experience Primary tasks + the Surfaces / Sources / Tier 1 tables below.
- `logo` type `favicon` and its slug are dual: this identity ledger holds the value; portable Typography & Assets holds only the boundary sentence (favicon-service URL on a third-party host keyed to `family.com.tw`, identity metadata rather than a captured first-party 全家便利商店 mark).
- `tokens.source: live-extract`, `tokens.extracted: 2026-07-13`, and `components_harvested: true` stay in this ledger. `tokens.extracted` is dual — Identity **and** Freshness below. The operative meaning of `components_harvested` ("one component token is published, and that is not a claim that every public component was observed") is carried in the portable Components & States capture record; the field name and value are not.
- Capture selector `home::li.main-menu__menu--active` is dual: the portable Current-section navigation row `Use` line + the Capture selectors table below.
- The token path `tokens.components.current-section-nav-row` is recorded here; the portable body names the component token as `current-section-nav-row` in its capture record and `Use` line.
- The four sibling class names `navbar-item--text`, `dropbtn-more__btn`, `main-menu__menu`, and `card__title` are dual: the Capture selectors table below + the portable body, where they reach four sections rather than three — Experience (`main-menu__menu--active` in Primary tasks, `card__title` in Distinctive traits), Foundations (`navbar-item--text`, `dropbtn-more__btn`), Typography & Assets (`main-menu__menu`, `card__title`), and Components & States (`main-menu__menu--active`, `dropbtn-more__btn`).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| product-surface sources captured | 2026-07-13 |
| official-doc sources captured | 2026-07-14 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none (`verification_v2.conflicts: []`).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://www.family.com.tw/Marketing/ko | 2026-07-13 |
| convenience | product-information | https://www.family.com.tw/Marketing/zh/Convenience | 2026-07-13 |
| map | store-service | https://www.family.com.tw/Marketing/zh/Map | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| familymart-home-live | product-surface | https://www.family.com.tw/Marketing/ko | 2026-07-13 |
| familymart-convenience-live | product-surface | https://www.family.com.tw/Marketing/zh/Convenience | 2026-07-13 |
| familymart-map-live | product-surface | https://www.family.com.tw/Marketing/zh/Map | 2026-07-13 |
| familymart-company-info | official-doc | https://www.family.com.tw/web_enterprise/page/information.aspx | 2026-07-14 |
| familymart-vision | official-doc | https://www.family.com.tw/web_enterprise/page/business.aspx | 2026-07-14 |
| familymart-franchise | official-doc | https://www.family.com.tw/Web_Franchise/page/advantage.aspx | 2026-07-14 |

### Tier 1

- https://www.family.com.tw/Marketing/ko
- https://www.family.com.tw/Marketing/zh/Convenience
- https://www.family.com.tw/Marketing/zh/Map
- https://www.family.com.tw/web_enterprise/page/information.aspx
- https://www.family.com.tw/web_enterprise/page/business.aspx

The source footer lists five Tier 1 URLs. `https://www.family.com.tw/Web_Franchise/page/advantage.aspx` is registered as the `familymart-franchise` official-doc source and is cited inline in the source §11; it is not repeated in the source footer list, and it is not added to it here.

### Tier 2 (no usable record)

- https://getdesign.md/familymart-tw (attempted; no usable record returned)
- https://styles.refero.design/?q=FamilyMart%20Taiwan (attempted; no usable record returned)

The source footer records both attempts without a date. The adopted sibling (`.verification.md`, see below) dates both to **2026-07-14** and records the failure mode as a returned internal error on the permitted web open, so no Tier 2 token or component value is used. Neither attempt supports a general absence conclusion. That date and reason are sibling-sourced ledger facts; they add nothing to the portable body.

### Narrative documents (not interface tokens)

- Company information: https://www.family.com.tw/web_enterprise/page/information.aspx
- Brand vision: https://www.family.com.tw/web_enterprise/page/business.aspx
- Franchise advantage: https://www.family.com.tw/Web_Franchise/page/advantage.aspx

## Sibling verification document — adopted

`web/references/familymart-tw/.verification.md` exists beside the canonical source. Silence about a present sibling is itself a ledger defect, so its disposition is recorded: it **is adopted** as evidence for this ledger, with its method, dates, and sources written down and its boundary stated. Adoption stops at this ledger — no sibling value is promoted into a portable body token, because a verification note and the reference contract are different evidence domains.

| Field | Value |
|---|---|
| Path | `web/references/familymart-tw/.verification.md` |
| Document date | 2026-07-13 |
| Method | supplied deterministic collector bundle, read as given — the sibling states "No browser capture was rerun and no MCP source was used" |
| Underlying artifacts it names | `artifacts/reference-create/runs/2026-07-13-familymart-tw/packet.md`; `artifacts/reference-evidence/familymart-tw.json`, captured `2026-07-13T15:02:43.748Z` |
| Proof block | "Proof — Tier 1 live inspect", inspected 2026-07-13, 7 raw computed-style samples |
| Tier 1 sources | the three `Marketing` routes + `information.aspx` + `business.aspx` — identical to the five already recorded under **Sources → Tier 1** above |
| Tier 2 attempts | `https://getdesign.md/familymart-tw` and `https://styles.refero.design/?q=FamilyMart%20Taiwan`, both attempted 2026-07-14, both returning an internal error |
| Conflicts | conflict matrix present; resolution `**Conflicts unresolved:** none`, matching `verification_v2.conflicts: []` |

What adoption adds to this ledger — dates and method only, no portable-body change:

- The Tier 2 attempt **date** `2026-07-14`. The source footer lists the two attempts without dates; the sibling supplies them, and the Tier 2 block above now rests on a dated record rather than an undated one.
- The capture provenance chain (packet path, evidence-JSON path, capture timestamp) standing behind `tokens.source: live-extract` and `tokens.extracted: 2026-07-13`.
- Bundle-level capture metrics: coverage score 80, 39 component variants, one static selected-looking class observation, zero interaction kinds, `interactionCount: 0`.

Sibling-held facts deliberately **not** promoted, each with its reason:

- The sibling's raw sample `home::p.card__text` — `color: rgb(115, 115, 115)` — gives `#737373` a card-text role. The portable body lists `#737373` among the measured siblings whose "role is not resolved at a smaller boundary" (Foundations → Evidence-domain boundary) and repeats it in Governance → Named gaps. That listing is **not** rewritten from the sibling: promoting a verification-note observation into the reference's token contract crosses an evidence domain and would alter a token judgement this revision may not touch. Recorded here so the divergence is visible instead of silent.
- A fourth narrative URL, `https://www.family.com.tw/web_enterprise/page/NewsContent_en.aspx?ID=2939` (2025 official news, current business activity). It is not a registered source in the canonical frontmatter, so it is **not** added to Sources, Tier 1, or Narrative documents above.
- Sibling-local surface labels `surface-2` and `surface-3` for the convenience and map routes. The canonical frontmatter names them `convenience` and `map`; the Surfaces table above keeps the canonical ids and does not adopt the sibling's placeholder labels.
- The sibling records its samples in `rgb()` notation. Nothing is restated here in an altered notation to satisfy a check (E3); the hex forms above come from the canonical source's own token block.

## Claim ledger

All 32 source claims resolve through one YAML anchor: surface `home` / source `familymart-home-live` / method `computed-style` / captured `2026-07-13`.

| claim | surface | method |
|---|---|---|
| tokens.colors.brand-green / canvas / ink / navigation / utility-surface / card-title | home | computed-style |
| tokens.typography.body.size / weight / lineHeight / use | home | computed-style |
| tokens.typography.navigation.size / weight / lineHeight / use | home | computed-style |
| tokens.typography.card-title.size / weight / lineHeight / use | home | computed-style |
| tokens.spacing.xs / sm / md / lg | home | computed-style |
| tokens.rounded.square / compact | home | computed-style |
| tokens.shadow.flat | home | computed-style |
| tokens.components.current-section-nav-row.type / bg / fg / radius / height / font / use | home | computed-style |

Source token values, recorded verbatim:

- `tokens.colors`: brand-green `#00b347`, canvas `#ffffff`, ink `#212529`, navigation `#7a7a7a`, utility-surface `#f2f2f2`, card-title `#68b5ac`
- `tokens.typography.body`: size 14, weight 400, lineHeight 1.5, use "Observed public-route body and text navigation"
- `tokens.typography.navigation`: size 14, weight 700, lineHeight 1.5, use "Observed main navigation list-item label"
- `tokens.typography.card-title`: size 16, weight 700, lineHeight 1.2, use "Observed content-card title"
- `tokens.spacing`: xs 3, sm 5, md 10, lg 15
- `tokens.rounded`: square 0, compact 3
- `tokens.shadow.flat`: "none"
- `tokens.components.current-section-nav-row`: type `listItem`, bg `#00b347`, fg `#212529`, radius 0, height 51, font `14px/700`, use "Static current-section navigation row at home::li.main-menu__menu--active"

The unitless line-height ratios 1.5 and 1.2 are preserved as ratios in the portable Type roles table (`21px (1.5)`, `19.2px (1.2)`) alongside the pixel figures the source records. The verified primitive `type: listItem` is preserved as `Type: listItem` in the portable component and is not flattened into `Kind: interactive` alone. `Kind` is not a source field — the legacy token carries no kind — so the portable `Kind: interactive` is a Core-v2 role classification declared by this migration from the element's navigation-row role, not a measured value; the migration log carries that declaration and the C4 omission it rejected.

## Capture selectors

| Component or role | Pointer |
|---|---|
| Current-section navigation row | `home::li.main-menu__menu--active` |
| Main navigation list-item label (typography) | `main-menu__menu` |
| Navigation gray text/border | `navbar-item--text` |
| Utility surface fill | `dropbtn-more__btn` |
| Content-card title | `card__title` |

## Derived interpretation ledger

The portable body carries **five** derived-interpretation groups, not one. Each is recorded here as its own row so that a reviewer can read the derivation scope off this ledger instead of reconstructing it from a full pass over the body.

| # | Derived group | Size | Portable line | Legacy origin | Qualification placement |
|---|---|---|---|---|---|
| 1 | Experience → Scope — the interface reading of the three captured routes (white information-dense utility surface, narrow green brand signal, quiet gray navigation, teal content-card headings, green not a dominant canvas) | one reading, three clauses | `DESIGN.md:15` | source §1 evaluative readings | complete, precedes within the same sentence |
| 2 | Experience → Audience — the four service-context archetypes | 4 items | `DESIGN.md:30` | source §13 Personas | complete, precedes the bullets; the source's own "archetypes … not research-validated personas or demographic claims" wording sits beside it, so this group carries two qualifications |
| 3 | Experience → Principles | 4 items | `DESIGN.md:49` | source §12 | complete, precedes the numbered list |
| 4 | Experience → Capture-bound application | 7 items | `DESIGN.md:58` | source §7 Do's + §5 bullets 2–3 + §8 bullet 1 | complete, precedes the list |
| 5 | Content & Locales → Voice reading — the register reading plus the 3 Do/Don't rows | 1 register sentence + 3 rows | `DESIGN.md:220` | source §10 | complete, precedes both |

1:1 check against the portable body, measured over the final file with `grep -o … | wc -l`, which counts **occurrences**; `grep -c` was not used because it counts matching lines and has already produced one false discrepancy on this brand (`全家便利商店`: 10 occurrences on 9 lines):

| Counted string | Method | Result |
|---|---|---|
| `derived editorial implementation inference from the verified surfaces` | `grep -o … \| wc -l` over `DESIGN.md` | 5 occurrences |
| `全家便利商店-authored` | `grep -o … \| wc -l` over `DESIGN.md` | 5 occurrences |
| `separately published UI specification` | `grep -o … \| wc -l` over `DESIGN.md` | 5 occurrences |
| lines carrying the clause | `grep -n` over `DESIGN.md` | 15, 30, 49, 58, 220 — 5 lines |

Occurrences (5) and lines (5) agree here only because no line carries the clause twice; that agreement is measured, not assumed. Groups in the table: 5. Qualifications in the body: 5. No derived group in the body is missing from this table, and no row here lacks a body group.

Body sentences left unqualified are of two kinds only, and are not derived groups: attributed first-party statements (`says`, `describes`, `states`, `presents`, `Its official history explicitly labels`) and evidence-boundary limits (Avoid, Evidence-domain boundary, Elevation, Motion, Accessibility boundary, Layout, Assets, Font evidence).

## Proof notes

- `verification_v2` schema 2; `conflicts: []`
- `tokens.source: live-extract`; `components_harvested: true`
- `interactionCount: 0`. Only measured default geometry is documented; the `main-menu__menu--active` class is a static route snapshot, not an interaction-state observation.
- Uncaptured hover, focus, and pressed treatments are omitted. Non-observation is not a `not-applicable` reason; the three `not-applicable` rows on the current-section navigation row give role reasons (a current-section marker carries route context, not pending, validation, or action-outcome meaning). State coverage is not claimed complete.
- Measured sibling colors kept as raw proof and deliberately not promoted to tokens: `#007bff`, `#444444`, `#737373`, `#8c8c8c`, `#28a745`, `#36ad1b`.
- Raw default geometry retained outside tokens: compact `dropbtn-more__btn` button (`#f2f2f2` fill, `#00b347` text, 3px radius, 5px padding, 12px/400) and a 14px input sample.
- The computed family `Microsoft JhengHei, 微軟正黑體, sans-serif` is recorded on 652 visible observations and classified by the bundle as unresolved and low confidence (no matching loaded FontFace, no known-system mapping). No `tokens.typography.family` exists in the source, and none is created here.
- Icon-font facts: `Font Awesome 5 Free` loaded on two card-role observations; `Font Awesome 5 Brands`, `IAGlyphs`, and `Material Icons` declared with zero visible use.
- Capture viewport: 1440×900, desktop, three routes.
- Company information, brand vision, and franchise advantage documents are business and narrative context, not token sources.
- No fictional persona, demographic, journey, or conversion claim is recorded here. The source's four service-context archetypes stay in portable Experience Audience under **two** adjacent qualifications, not one: the source's own "not research-validated personas or demographic claims" wording, and the complete derived-editorial qualification the portable body adds above them ("a derived editorial implementation inference from the verified surfaces; … not 全家便利商店-authored or a separately published UI specification"). They are not re-hosted here and are not promoted into the `primary-tasks` claim. The archetypes are **one of five** derived groups, not the derivation scope: all five are enumerated row by row in **Derived interpretation ledger** above (E1).

## Observations recorded, not corrected

Two findings from the wave-23 semantic review are recorded as observations. Neither is corrected, and each carries the reason it is not.

1. **`DESIGN.md:167` summarises the applicability map more narrowly than the table it introduces.** The sentence reads "`default` and `focus-visible` apply", while the table at `DESIGN.md:188`–`DESIGN.md:196` marks `default`, `hover`, `focus-visible`, **and** `disabled` applicable. The two disagree on `hover` and `disabled`. Not corrected: changing either side is a state-applicability edit, which this revision may not make, and the sentence is corpus boilerplate — the same wording stands in 97 of the 115 migrated bodies (measured by the F3 audit; see `audit-log.md` "Out of scope"). If it is wrong it is wrong corpus-wide and belongs to a corpus-level fix, not a familymart-local rewrite. The table, not the summary sentence, is the operative applicability record.

2. **`全家就是你家` keeps its bytes; only the enclosing punctuation differs.** The source writes `“全家就是你家”` (U+201C `e2 80 9c` … U+201D `e2 80 9d`); the portable body writes `「全家就是你家」` (U+300C `e3 80 8c` … U+300D `e3 80 8d`). Hexdumped on both files, the brand string itself is the identical 18 bytes `e5 85 a8 e5 ae b6 e5 b0 b1 e6 98 af e4 bd a0 e5 ae b6` in both. A5 protects the brand-published **string**; what changed is the quotation marks around it, not the string. This is an A5 note, not an A5 violation. The same finding is recorded from the audit side in `audit-log.md`.
