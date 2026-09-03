# Pinkoi F3 audit (B2a · E1 · E2)

Auditor session. Source of truth: `docs/design-md-weight/migrated/pinkoi/{DESIGN,provenance,migration-log}.md` plus `web/references/pinkoi/DESIGN.md` and sibling `web/references/pinkoi/.verification.md`. Worker claims were not an input.

Counts use `grep -o <pat> <file> | wc -l` per file. Sibling path was opened directly (dotfile).

## B2a — adjacent complete-form closes attached

Portable `DESIGN.md` sentences were classified as brand-issued fact / observation / editorial interpretation. Three editorial keep-apart / evidence-class sentences had no adjacent complete close (`derived editorial implementation inference` + `not Pinkoi-authored or a separately published UI specification`). Closes were attached in place. Token values, component tables, applicability maps, and structure were not edited.

| Location | What was attached |
|---|---|
| `DESIGN.md` Elevation intro (line 181) | After “That sentence is the source's own. YAML strings and the §6 specific uses both stay.” — classifying that sentence as the source's own, and keeping YAML shadow strings beside §6 uses rather than merging them, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification. Same-section closer at `:217` already covered the later modal keep-both / two-track reading; `:181` was not adjacent to it (hierarchy `:307` and density `:757` put the close in the same paragraph as “the source's own”). |
| `DESIGN.md` Capture record (line 334) | After “Geometry below keeps YAML anatomies beside the longer §4 / §9 / footer writings.” — keeping YAML anatomies beside those longer writings, rather than collapsing them, is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification. The `:354` closer is about §14 row attachment, not this keep-apart. |
| `DESIGN.md` Breakpoints keep-apart (line 770) | After “`<767px` and `<768px` stay two writings. They are not collapsed.” — keeping those two cutoff writings uncollapsed is a derived editorial implementation inference from the verified surfaces; it is not Pinkoi-authored or a separately published UI specification. The `:793` closer is about reading breakpoint figures as layout measurements rather than a token-set path, several subsections later. |

Remeasure after those attachments (`grep -o` per file):

- `DESIGN.md` `derived editorial implementation inference`: **52**
- `DESIGN.md` `not Pinkoi-authored or a separately published UI specification`: **52**

No published first-party UI specification is named for Pinkoi; the toss-form close is the correct evidence class (rulebook v12 B2a 전제 주석). Grammar (singular/plural subject) is the complete form.

## E1 — provenance range matched to the body

| Location | What was fixed |
|---|---|
| `provenance.md` Derived editorial inventory preamble | “49 complete B2a qualifications / 49 data rows” → **52 / 52**, matching the body after the three attached closes. |
| `provenance.md` inventory rows | Added `Elevation intro `:181``, `Capture geometry `:334``, `Breakpoints uncollapsed `:770``. Existing line pointers still match the body (attachments were on the same paragraph lines). |
| `provenance.md` Identity `#ff595a` dual dest | “`DESIGN.md` Scope / Named gaps” was wider than use. Named gaps contains `#ff595a` **0**. Actual portable keep-beside: Scope / Semantic color / Coral Tint keep-apart. |
| `provenance.md` Sibling handling | False file-absence. Sibling exists at `web/references/pinkoi/.verification.md`. Rewrote to file-exists + dual dest of footer captures already in the source DESIGN.md footer. Sibling-only labels/classifications pointed at the log A5a disposition (mention, not portable use). |

## E2 — migration-log destinations rematched

Each claimed dest was grepped in the three files after the body edits. The log was corrected where the destination or count was wrong. Dual dests that hold were left. Compliance (B3 five-kind gate) remains dest **1** in `DESIGN.md` Motion (`transition properties, animation name, duration, easing, and reduced-motion behavior`).

| Location | What was fixed |
|---|---|
| `migration-log.md` YAML identity row | Catalog `#ff595a` DESIGN dest **6** → **5** (P dest **6** unchanged). Dual dest “Named gaps” removed; actual portable dests: Scope / Semantic color / Coral Tint keep-apart. Homepage DESIGN dest **2** · P dest **3** still holds. |
| `migration-log.md` YAML token-note row | `#10567b` DESIGN dest **15** → **14**. `#f16c5d` dest **13** still holds. |
| `migration-log.md` YAML rounded row | `` `full: 9999` dest **2** `` → `` `9999` dest **2** `` (`` `full: 9999` `` / `` `tokens.rounded.full: 9999` dest **1** ``). Key-path line already had `9999` dest **2**. |
| `migration-log.md` A5a | “no sibling” / “Missing from the three outputs: 0” was false as a sibling-inclusive sweep. Sibling path recorded. Source DESIGN.md needles 38 / portable use-missing 0. Sibling-only live-verified labels named as disposition (mention, not use); not claimed absent from all three files. |
| `migration-log.md` header + Pass 1 | Limiter 본문=49 원장=49 → **52 / 52**. Pass 1 count **52**. |

Post-edit dest remasure (DESIGN.md unless noted): `https://www.pinkoi.com` 2 / P 3; `#ff595a` 5 / P 6; `#10567b` 14; `#f16c5d` 13; `prose-derived` 3; `9999` 2; `Not in the token set` 8; `0px 8px 8px 0px` 2; `#fff8f7` 3; `3-fill discipline` 1; `warm-cast` 1; `Taipei in 2011` 1 / P 1; `Peter Yen (顏君庭)` 2 / P 1; `transition: border .1s, color .1s, background .1s` 2; B3 five-kind sentence 1; `tokens.spacing.md` 3; `tokens.spacing.base` 5; `tokens.spacing.section` 3; `components_harvested` DESIGN 0 / P 4; `2026-05-15` DESIGN 0 / P 3.

## A1 key-path (in scope)

YAML `tokens.components.<id>.<field>` checked as **rows in the matching component block**, not as shared numerals elsewhere. All ten records land: type/bg/fg/radius/padding/font/use where the YAML has the field (product-card has no fg/padding/font in YAML; that absence is preserved). Color / type-role / spacing / rounded / shadow paths are present as path rows. No field restore.

## D2a / E2d

Deletion rows (`provenance.md` Omission ledger §13; `migration-log.md` §13) stay unidentified (4인; 이름·나이·도시·동기·소속 분류). Identifiers and biography strings from source §13 are DESIGN 0 / provenance 0 / log 0. Audience keeps only source-named group wording. Primary tasks are surface/control outcomes, not persona motivation.

No “this string is in none of the three files” sentence lists that string. The old sibling sentence was a false file-existence claim, rewritten without a three-file absence assertion.

## 범위 밖 관찰

- **A5a.** Gate `copy-loss` compared **2** / candidates **421**. `verdict: PASS` is “none lost among compared needles,” not full issued-copy preservation. Sibling live-verified Latin labels are not in source DESIGN.md (SRC 0) and were not copied into portable DESIGN.md (DES 0): trailing-button `Search`, country-pill set including `Republic of Korea (ROK)` and `Explore More`, `Cross-border Free Shipping`, `See more`, `Join us`, `Download the Pinkoi app`. Not restored here (B1 + this audit’s B2a/E2 remit). Disposition is in the log A5a row (mention, not use).
- **B1.** Sibling-only structure classifications are not promoted as facts in the portable body (SRC 0 / SIB 1 / DES 0): `e-commerce-discovery`, `Three-radius`, `icon-only`, `screen-reader`, `barely-tinted`, `purple-leaning`, `14×48`, `Promo Pill`. Footer captures that the source DESIGN.md already recorded (split-radius, 100px pills, Coral Tint, Outline Secondary 40-52px, warm-cast, 3-fill discipline) are source writings, not sibling-only promotion.
- **Wave 39 hex role split.** `#ffffff` is `tokens.colors.surface` and `tokens.colors.on-primary` as two keys; that split is already in the Semantic color B2a and provenance inventory. Not a defect.
- **§15 curves.** `cubic-bezier(...)` values are named in the Motion omission sentence; easing *roles* remain. T2 citation-plus-role, not a silent loss. Not restored.
- **D1 phrases** named in the log (`native application`, `mobile app`, `back-office`, `product application`, `measures 1440px`, `does not say`) are DESIGN dest **0**.

AUDIT_DONE fixes=11
