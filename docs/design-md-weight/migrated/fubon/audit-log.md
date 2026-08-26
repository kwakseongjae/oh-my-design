# Fubon — B2a / E2 audit log

Auditor: opus5, 2026-08-26. Separate lane from the migration worker; the worker's
report was not an input. Only the three outputs in this directory, the source
`web/references/fubon/DESIGN.md`, and its sibling `web/references/fubon/.verification.md`
were read.

Clauses in scope: **B2 · B2a** and **E1 · E2 · E2a–c**. Nothing else was fixed.
Token values, component tables, state applicability, and document structure were
not touched.

**Counting discipline.** Every count below is `grep -o <pattern> <file> | wc -l`,
recorded per file. `grep -c` is not used anywhere in this audit — it counts lines,
and `DESIGN.md` 225 carries `#0093c1` twice on one line, which is exactly the case
it undercounts. The sibling was addressed by its literal dotfile path
`web/references/fubon/.verification.md` and confirmed present with
`find web/references/fubon -maxdepth 1 -type f` before anything was counted; no
zero in this log comes from an unmeasured `no matches found`.

---

## B2 / B2a — qualifications added to `DESIGN.md` (4)

Line numbers are post-edit. Each added qualifier carries the full evidence class:
*derived editorial implementation inference from the verified surfaces* **and**
*not Fubon-authored or a separately published UI specification*. A partial form
("derived from the verified surfaces" alone) was treated as a failure, not a pass.

1. **§1 Primary tasks — line 19.** The four items are observed CTA labels and
   modules (`外幣匯率`, `更多最新公告`, `了解更多`, `線上申辦` / `線上申辦成功`) recast as
   *user tasks*. The paragraph named the derivation ("These four come from CTA
   labels and modules named on the two captured surfaces") but stopped at the
   "derived from verified surfaces" half, so the boundary against Fubon-published
   doctrine was never closed. Appended: *"Reading those labels and modules as the
   primary tasks users come to these surfaces to perform is a derived editorial
   implementation inference from the verified surfaces; it is not Fubon-authored
   or a separately published UI specification."*

2. **§1 Avoid — new paragraph at line 67.** The Do list carried a grouping
   qualifier at 54; the Don't list carried none, though its eight bullets mostly
   append a reason rather than a value — "for approachability", "the tint
   (`#f5f5f5`) has subtle cool warmth", "Fubon elevation is gentle, not
   dramatic", "without intent". The ninth bullet (now 77) is not a source Don't
   at all: it restates this contract's scope boundary as a prohibition, and that
   boundary is itself a derived reading (qualified at 9) — at 66 lines' distance,
   which is not adjacency. A qualifier was inserted ahead of the list covering
   the eight rationales and the ninth boundary line as **two separate clauses**,
   each stating the full evidence class. Line 67 therefore carries the phrase
   twice; that is deliberate.

3. **§3 Type rules — line 189.** The qualified sentence ended, and then a bare
   imperative followed it outside the qualifier's scope: *"Pair the two families
   for bilingual UI rather than using either alone."* That is the source's
   "Bilingual first" principle turned into an instruction — editorial, not
   Fubon-published. Rewritten as *"The instruction to pair the two families for
   bilingual UI rather than use either alone falls inside that same
   qualification."*

4. **§4 How applicability is decided here — line 218.** The qualifier read
   "These role judgments are …", with the actual role judgments living in the
   Reason cells of six per-component tables (headers at 230, 250, 268, 287, 306,
   323) whose cells run to line 331 — up to 113 lines downstream, with the
   referent left to the reader. Scope made explicit:
   *"These role judgments — including every Reason cell in the per-component
   tables below — are a derived editorial implementation inference …"*. No cell,
   applicability value, or reason text was altered.

Qualifier occurrences after the fixes, measured per file:
`DESIGN.md` **18 on 17 lines** (9, 11, 13, 19, 29, 33, 46, 54, 67×2, 119, 137,
145, 189, 201, 218, 384, 403) · `provenance.md` 1 (inside a quoted grep command)
· `migration-log.md` 2 (both mentions of the fixed form, neither a use).

## E1 — derived scope in `provenance.md` (1)

5. **`provenance.md` had no derived-inference ledger at all** — the ferrari
   failure mode, and the widest possible mismatch in the "too narrow" direction:
   the body carried 15 qualified passages and the ledger recorded 0. A
   **Derived-inference ledger (B2 / B2a)** section was appended, one row per
   occurrence, **18 rows against 18 body occurrences, 1:1**, each naming what its
   qualification covers. Both clauses of line 67 get their own row. The section
   states that the qualification itself stays in the body and that the table only
   records its extent (E1), and it names the four rows the audit added.

## E2 / E2a / E2c — `migration-log.md` corrections (14)

Every destination in the log was re-grepped against the three files. Findings:

6. **Row `YAML identity` — `#0093c1` dual-destination list was wrong in both
   directions.** Logged: `DESIGN.md` 11/35/51/56/70/85/109/223/**231**/282/288/356
   + `provenance.md` 23/65/67/**68**/**69**/125. Measured: line 231 (now 233)
   carries `#005c7a`, not `#0093c1`; `provenance.md` 68 and 69 carry
   `rgb(0,147,193)`, not the hex. Three false destinations. Missing from the log:
   `DESIGN.md` 283 (now 285) and `provenance.md` 14, 34, 102 — four real
   destinations unrecorded. Corrected to the measured set
   `DESIGN.md` 11/35/51/56/72/87/111/225(×2)/284/285/290/358 (13 occurrences on
   12 lines) + `provenance.md` 14/23/34/65/67/102/125, with the counting method
   named (E2a).

7. **Same row — favicon dual destination** `DESIGN.md` 191 → **193** (measured;
   `provenance.md` 15/107 was correct).

8. **Row `§2 Color Palette & Roles` — "All 15 named roles kept" is a miscount.**
   Source §2 declares 3 Primary + 3 Accent + 5 Neutral & Surface + 3 Text = **14**,
   and the portable body carries 14 bullets. Corrected to 14, with the arithmetic
   shown and the earlier figure marked wrong.

9. **Sibling handling — `#009e9c` is a value that exists nowhere.** The log listed
   it among "values the sibling carries that the migration source does not", i.e.
   a claimed provenance destination. Measured: `#009e9c` occurs **0 times** in the
   sibling, 0 in `DESIGN.md`, 0 in `provenance.md`, 0 in `migration-log.md`. What
   the sibling (line 32) and `provenance.md` 86 actually carry is
   `rgb(0,158,156)`. Replaced with the recorded form. The same bullet's `#eef0ef`
   and `#156b9b` were kept but annotated: the sibling writes only
   `rgb(238,240,239)` and `rgb(21,107,155)`, so those hexes are the ledger's own
   conversion, and the ledger now says so.

10. **Row `§15 — three cubic-bezier values` used `grep -c`.** Replaced with
    per-file occurrence counts: `DESIGN.md` 0, `provenance.md` 3,
    `migration-log.md` 3, method named. The B3 compliance claim in that row was
    checked against the body before being left standing (E2c): `DESIGN.md` 143
    does carry all five evidence kinds — transition properties, animation name,
    duration, easing, reduced-motion behavior — plus the per-component
    computed-observation gate, in full text. The row's byte-identity claim was
    also verified: `cubic-bezier(0.4, 0.0, 1, 1)` matches `spec/omd-v0.1.md` 267
    byte for byte. Both claims stand.

11. **`## A5 verification` — "it produced 20 needles here" is not what the gate
    reports.** Measured by re-running the gate: `coverage.copy-loss compared 24 /
    candidates 165`. Corrected to the measured pair, with the 14.5% figure stated.

12. **A5 sweep row 1 — `台北.` is not missing.** The row listed six absent CJK
    runs including `台北.`; measured, the run `台北` occurs **5 times** in
    `DESIGN.md` (lines 9, 13, 201, 210) inside `台北富邦銀行` and `台北市產物保險`,
    which are not persona material. The trailing period was a run-extraction
    artefact, not part of any CJK run. Count corrected 6 → **5**
    (`陳小美`, `林建國`, `吳麗華`, `新竹`, `台中`, each measured at 0 in `DESIGN.md`
    and 0 in `provenance.md`), with the withdrawn needle explained.

13. **A5 sweep row 1 — "39 distinct" could not be reproduced.** An independent
    extraction over `[CJK Ext-A + URO + Compat]+` returns 37 distinct runs. The
    figure is extraction-dependent, so rather than substitute one unverifiable
    total for another the row now records that it stands unverified and names the
    audit's own measurement.

14. **A5 sweep table header** said "Missing from all outputs" while the cells
    measured against `DESIGN.md` + `provenance.md` only (the persona names appear
    in `migration-log.md` itself). Header made explicit. Row 2 was re-measured
    under both scopes and is 0 either way.

15. **`## Gate run` — coverage was not recorded.** The section cited `PASS` /
    `problems: []` without the number that qualifies it. Re-ran
    `node test-v2/tools/migrate-reference.mjs --brand fubon --gate-only`: same
    verdict, `compared 24 / candidates 165`. Recorded, with the reading that PASS
    means "nothing lost among what was collated", not "copy preserved".

16. **`## Deviations recorded` — the word count was wrong before the audit and
    wrong after.** Logged 4,963; `wc -w` on the file as committed returned
    **4,998** pre-audit and **5,144** post-audit. Corrected to 5,144 with the
    pre-audit discrepancy noted rather than quietly overwritten.

17. **Every `DESIGN.md` line citation in the log was re-measured and shifted.**
    Fix 2 inserted two lines at 66, so every body citation at or beyond the old
    line 66 moved by +2 — roughly 90 numbers across 20 disposition rows, the
    sibling section, the A5 section and the F1 list. Each destination was
    re-verified against the file, not arithmetically assumed.

18. **F1 item 11 — inner citation 399 → 401** (the label/gloss boundary line),
    missed when the item's own range was updated.

19. **Audit note added under `## Mandatory passes`**, recording the four body
    fixes, the +2 shift, and the `grep -o` counting rule, so the log does not
    read as if its numbers were still the worker's.

Gate after all edits: `verdict: PASS`, `problems: []`, `compared 24 /
candidates 165` — unchanged, as expected, since none of these defects is
machine-visible.

---

## 범위 밖 관찰

Reported, not fixed.

**O1 — B1 (evidence-class promotion), `DESIGN.md` 156.** The "Live computed
surface-use" row reads: *"the H1, the `.title-primary` headings, the nav link,
the more-links, and the popup buttons all compute in that pairing."* Measured:
`font-family` is recorded for exactly **two** elements in the whole evidence
base — `body` (source philosophy comment line 414; sibling line 13) and
`H1 個人金融` (source 415; sibling 14). For the three `.title-primary` captures,
`.nav-link-p`, `.art-more-btn`, `.ann-more-btn`, `.blue-btn`, `.gray-btn` and
`.main-btn`, no family is recorded in either file — those captures carry colour,
size and weight only. A body/H1 family capture is not evidence for the family of
seven other selectors, which is B1's exact shape. The fix is to narrow the row,
not to qualify it — qualifying an over-claim would launder it — so it is left for
the B1 lane. Note that the log's own F1 item 2 records correcting this row once
already, for a different B1 defect (a sibling-only font stack).

**O2 — A5 / coverage.** Gate coverage here is 24 of 165 quoted strings (14.5%),
so PASS says nothing about the 141 Latin strings. Measured by hand, these source
phrases occur **0 times in all three outputs**: §3 Font Family rationales
"clean, neutral, highly legible for dense financial UI", "complete TC Unicode
coverage, pairs seamlessly with Roboto", "broad compatibility across TW
Windows/macOS environments"; §2 role descriptors "A calm, trustworthy green-teal
that complements the blue anchor", "Deep red that reads clearly on white canvas
without visual aggression", "a very dark blue-black with financial gravitas",
"Subtle cool-grey", "Very light blue-tinted surface", "soft separators". All are
the reference author's characterizations, so dropping them is B2-consistent — but
none of them is in the omission ledger, which records only §9, §13 and the three
curves. Un-ledgered Latin loss, whatever its justification.

**O3 — D2 adjacency.** `陳小美`, `林建國`, `吳麗華`, `新竹`, `台中` occur 0 times in
`DESIGN.md` and 0 times in `provenance.md`, and **1 time each in
`migration-log.md`** (the A5 sweep row). The log's §13 row says the personas were
"not re-hosted in the sidecar", which is true of `provenance.md`; the log is a
third output file that does carry the names. Whether the migration log counts as
a re-hosting surface under D2 is a rulebook question, not an audit finding.

**O4 — B1/B3 lane, `DESIGN.md` 141 and 145.** The three durations and the motion
rules — including *"Under `prefers-reduced-motion: reduce`, all animated
transitions collapse to an instant cut and the site remains fully usable"* — are
stated as fact, while `provenance.md` 144 records that **no motion sample is
present in the evidence** and line 143 withholds the three curves on precisely
that ground. Same source section, same absent observation, two different
treatments. Not a B2a defect (the interpretive layer at 145 is properly
qualified) and not an E2 defect; flagged for whoever owns B1/B3.

---

AUDIT_DONE fixes=19
