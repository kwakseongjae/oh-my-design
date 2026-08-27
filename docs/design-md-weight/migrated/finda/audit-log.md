# Finda — B2a · E2 audit (separate session, F3)

Auditor: fresh session, opus5. Date: 2026-08-26. Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v10**, clauses B2·B2a and E1·E2·E2a–c only.
Files audited: `DESIGN.md`, `provenance.md`, `migration-log.md` in this directory, against `web/references/finda/DESIGN.md` (unmodified) and its sibling `web/references/finda/.verification.md` (unmodified; 3,050 bytes and SHA-256 `c608646a…0ee5e` re-measured and both match the ledger).

Counting rule observed throughout: occurrence counts are `grep -o … | wc -l`, never `grep -c`. The gate result is recorded at the end and is **not** used as conformance evidence.

## Fixes — portable body (B2a), 3

| # | Line | Was | Now | Why |
|---|---:|---|---|---|
| 1 | 13 | "a section heading states the end-to-end 대출 비교부터 신청까지 **promise**" | "a section heading states 대출 비교부터 신청까지" | The body itself classifies "an end-to-end promise" as one of three **derived editorial role notes** at line 426. Using the same reading unqualified inside the paragraph that records what the homepage publishes states it as fact. In this domain the word also attributes a commitment about a lending service to Finda. The reading is not lost: it survives at 426 under the complete qualification. |
| 2 | 110 | "the 대출 비교부터 신청까지 **promise**" | "the 대출 비교부터 신청까지 section heading" | Same reading, same problem, and here it sat inside the Evidence-domain boundary — the one paragraph whose whole job is to keep financial copy classified as copy. `page-title claim` was left as written: "claim" is the neutral speech-act word and is what the boundary sentence needs. |
| 3 | 47 | "Three readings **sit inside that list** rather than measurements" | "Three readings **accompany that list in the reviewed material** rather than measurements" | The three readings are not in the bullet list above — the migration lifted them out of the bullets and restated them inside this qualified sentence. As written the sentence mis-locates what it qualifies. |

After these edits `promise` stands at 1 occurrence in the body, the qualified one at line 426. Nothing else changed: the file is still 507 lines, so every line reference in `provenance.md` and `migration-log.md` still resolves.

Not changed, deliberately:

- **The heading-colour contradiction was left unresolved and unqualified.** `#000000` (4 occurrences: 78, 94, 197, 500) and `#010a26` (16) both stand; Type roles line 197 states "recorded two ways … Both values are preserved; neither is selected here", Named gaps line 500 names the gap, and the ledger records that the adopted sibling's H1 sample `rgb(0, 0, 0)` agrees with one side without closing it. **That two source statements disagree is a document fact, not an inference**, so no qualification was attached to it — attaching one would demote the evidence, which is the failure detected elsewhere.
- No qualification anywhere in the body was removed or weakened. Publication-fact and observation sentences were not qualified.

## Fixes — provenance.md (E1 / derived scope), 5

| # | Where | Fix |
|---|---|---|
| 4 | Canonical proof ¶1 | "everything else here exists only in the sibling" was false: the source's trailing comment already names the method as playwright `getComputedStyle` on finda.co.kr. Now says which part is shared and confines "sibling-only" to the method detail (headless chromium, `--disable-http2`, `networkidle`, dismissal pass, element set, frequency scan). |
| 5 | Portable derived-editorial scope, head | "every qualification the body carries is listed here" was stronger than the measurement behind it, which counts a phrase. Now scoped: 1:1 **for the counted phrase**, with the one differently-formed closure named below the table. |
| 6 | Same section, closing ¶ | "Two sections carry none" reads as a universal and is false — many subsections carry no occurrence. Replaced with the measured statement (no occurrence sits in §7 Governance or the two named §2 subsections) plus what the other occurrence-free subsections hold and which row covers the readings they do contain. |
| 7 | Same section, new ¶ | **Derived scope was written narrower than reality.** §6 → Forbidden register (line 457) closes its evidence class without either counted phrase — by anaphora to the Voice reading qualification directly above it, plus its own "authoring rule … not a Finda-published policy" boundary. It is now named in the ledger instead of being invisible to it. Judged closed as written, so the body was left alone. |
| 8 | Deletions → §13 Personas | "Grep-verified **across all three outputs**: `김지원` 0 …" is false as written — each string occurs once in `provenance.md` and once in this log, inside the verification sentence itself. Re-measured and rewritten: 0 in the portable body; in the two ledger files they occur only inside the deletion records that name them (`대출 갈아타기` 3 in the log, 1 elsewhere). |

## Fixes — migration-log.md (E2 / E2a / E2c), 8

| # | Where | Fix |
|---|---|---|
| 9 | C2 section, head | "**Six** controls declare a map; three components declare none" — measured 5 and 3, which also sums to the eight harvested components. The log's own §14 row said "all five declared maps", so the file contradicted itself. Corrected with the measurement (`^\| State \| Applicability \| Reason \|` = 5, `^- Type:` = 8). |
| 10 | C2 section, close | "on all **six** declared maps" → five. |
| 11 | §4 footer row | `blog.finda.co.kr` was logged as dual with **one** portable destination. It has two: Experience → Scope (15) and Governance → Named gaps (507). Both now recorded with the measurement (E2a). |
| 12 | new *Multi-destination published strings (E2a)* section | The section rows log a legacy section's destination, so a string landing in several portable places had no complete record. Added a measured location table for all twelve multi-destination string groups, plus the two cross-section moves it exposes: `전월세 비교` reaches the Dark Tool Chip `Labels` field from §10 (§4's chip `use` names only three labels — the union is source-backed, not sibling-sourced), and `오류가 발생했습니다` / `필수` reach Content & Locales from §14. |
| 13 | §13 Personas row | Same false "across all three outputs" claim as #8; rewritten with per-file occurrence counts. |
| 14 | Pass 2 re-measured table | Same claim in the re-measured row; rewritten. |
| 15 | `tokens.typography` row | "Every `use:` string lands in the Notes column" is stronger than the body: the Notes column is §3's own Notes, and each `use:` string lands split the way the source splits it (role half in Notes, family half in the Font column, `ExtraBold` as weight 800). Restated to what is actually there (E2c). |
| 16 | new *Pass 3* paragraph | F2 re-cross-check after this audit: the three body edits were re-measured against every destination list in the log — none moved. 507 lines, 17/17 qualification phrases on the same 17 lines, all 24 A5 occurrence counts unchanged, `#4e2eed` still 7 at the same seven lines. |

## Verified, no change needed

- **B2a sweep, sentence by sentence.** 17 occurrences each of `derived editorial` and `not Finda-authored`, on the same 17 lines (11, 17, 47, 51, 61, 74, 118, 137, 159, 181, 195, 215, 390, 411, 426, 443, 461); 16 use the fixed implementation-inference form, 1 (Scope ¶2, brand history) closes as "not a separately published brand statement". Every evaluative term in the body — premium, trustworthy, restraint, intimidating, calm, mission-framed, approachable, advocate — falls on one of those 17 lines. `promise` was the only exception and is fix #1–#2.
- **Financial-domain boundary, exhaustive.** No colour, spacing, radius, type, or component sentence describes a loan product, rate, DSR or income figure, approval or screening condition, or a term of service. The three boundary points hold: Foundations → Evidence-domain boundary (108–112) keeps every measured value attached to the marketing homepage and separates recording a published line from endorsing it; Principles carries the extra clause that item 1 is not a claim about how Finda ranks, sources, or discloses offers; §14's contract carries the clause that its comparison/failure/application scenarios are editorial scenarios, not statements about Finda's behaviour; Forbidden register is labelled an authoring rule that asserts nothing about products, lending practice, marketing conduct, or compliance position.
- **E1.** `node test-v2/tools/process-leak-check.mjs` → finda absent from `detail`, 0 hits, before and after the edits. Hand-checked as well: `portable` / `migration` / `sibling` / `ledger` / `sidecar` / `provenance` / `Tier` / `rulebook` / clause ids / wave numbers all 0 in the body. `Catalog logo entry` (1) is the corpus idiom — `catalog logo` appears in 82 of the 120 migrated bodies — and the E1 checker does not flag it; `Core §4.4` (2) is the approved specification idiom.
- **A5 counts.** All 24 Korean occurrence counts in the log's table re-measured with `grep -oF … | wc -l` and all 24 match, including the declared substring overlaps (`핀다` 7 = 3 standalone + 4 inside `핀다소개`; `대출 비교` 8 = 5 + 3).
- **Sibling handling.** The eight sibling-only values return 0 from a literal grep of the body (`14.48`, `내 집 대출한도`, `연말정산`, `rgb(68, 72, 87)`, `rgb(0, 0, 0)`, `rgb(21, 22, 27)`, `apps.apple.com`, `대환대출`, `networkidle` — all 0). Sibling adoption is recorded at ledger level only. The ledger sentences whose subject is the source `DESIGN.md` ("the source carries no `verification_v2` …", "no Conflicts line") were re-measured against the source and are true; the sibling's existence does not falsify them.
- **Omission ledger (E2b).** `cubic-bezier(…)` = 0 in the body, 3 in the ledger; the bare word = 4 in the body (three omission labels + the Named-gaps line), as logged.
- **A3 moves.** `right-aligned` = 1 in the source (§9 line 293) and present on the App-Download CTA record; the card's `#3a415a` body text and the 34px section-title `#010a26` are both in the body where the log says.

## Out of scope — reported, not touched

1. **`악성 앱 차단` is described as "a section heading" (lines 13, 434).** The source `DESIGN.md` records that string only in §10's tone table, as "Trust / security copy"; the *sibling* records it as an `h3`. So the structural class is not established by the source the portable body reconstructs. It is a class, not a value, so no sibling-only value grep catches it, and the log's zero-claims are unaffected. Flagging rather than editing, because every alternative descriptor has the same or weaker basis. (A1/B1 territory.) **Resolved 2026-08-26 by the wave24 revision, after the semantic review confirmed it as a B1 FAIL** — see `migration-log.md` → *Revision 2026-08-26 (wave24 — B1, sibling structural class)*. The descriptor the source does supply was used: its §10 tone-table classification. Line 13 no longer names the string, line 434 now reads "악성 앱 차단, recorded once as the trust-and-security example in the tone table", and the sibling's `h3` binding moved to `provenance.md` with its evidence class named. The body is still 507 lines, so every line reference in this log still resolves.
2. **Duplicated hexes across portable sections are logged by source section, not by value.** `tokens.colors` is logged with a single destination (Foundations → Semantic color) while thirteen of its fourteen hexes also appear elsewhere; those other landings are logged under the source section that carried them (§1 Key Characteristics, §7, §4). Coherent, but unlike `#4e2eed`, which gets a per-location breakdown. Left as the worker wrote it. (E2a, borderline.)
3. **C2 (not in scope, checked for log accuracy only).** 13 `not-applicable` cells across 5 maps, every one giving a role reason and none citing absence of observation; Dark Tool Chip is the only control with `loading` / `error` applicable, cited to §14's calculator-compute row. Matches the worker's account once the control count is corrected (#9).

## Gate

`node test-v2/tools/migrate-reference.mjs --brand finda --gate-only` → **PASS**, `problems: []` (re-run after every edit above).
`inspectDesignMd(...).conformance` → `portable_core: true`, `reasons: []`.

**Not conformance evidence.** The gate returns the same PASS before and after all sixteen fixes above; B2a, E2, E2a and E2c are sentence-level judgments it does not evaluate. No gate false positive was encountered, so nothing was reshaped to avoid one (E3).

AUDIT_DONE finda fixes=16
