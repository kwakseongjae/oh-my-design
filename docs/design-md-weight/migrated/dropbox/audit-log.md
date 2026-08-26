# Dropbox — F3 separate-session audit

Auditor: fresh session, not the migration worker (RULEBOOK v9 §F3).
Scope: **B2 · B2a** and **E1 · E2 · E2a–c** only. Values, component tables, state
applicability, and section structure were not touched.
Date: 2026-08-26 · Ruleset: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v9

## B2a — evidence-class qualification (5 fixes, all in `DESIGN.md`)

1. **`:11` — evidence-domain seam (brand-specific check).** The live marketing-surface
   domain was said to supply "every measured value in Foundations, Typography,
   Components, and Layout below." It does not: the four accent hexes (`#cd2f7b`,
   `#fa551e`, `#ff8c19`, `#9b0032`) are swatch values published on the guideline
   domain's own color page, and only Azalea was additionally observed rendering live.
   The blanket sentence let one domain's observation stand behind another domain's
   values. The seam is now named in place, with the "a swatch value is not evidence of
   where the hue renders" boundary that provenance already carried.
2. **`:27` — Primary tasks.** Selecting three outcomes as *the* primary tasks is a
   derived editorial inference and carried no adjacent qualification. Added the complete
   form, including the statement that the source's fictional archetypes were not lifted
   into the list.
3. **`:49` — Distinctive traits.** The qualification covered two readings and then said
   "The remaining items restate measured values." Three of the remaining items are
   readings, not measurements: the single-action-color role (qualified at `:130`), the
   flat/shadowless reading with separation carried by surface shifts and 2px borders
   (qualified at `:17` and `:149`, and marked editorial by the source's own ledger), and
   the ranking of 12px as the workhorse radius (qualified at `:138`). A qualification
   that explicitly de-qualifies readings is worse than a missing one; scope widened.
4. **`:130` — accents carried by name.** "the value field stays omitted rather than
   filled from a neighbouring hue" is a judgment about unresolved values and sat outside
   the adjacent qualification. Folded into the same sentence.
5. **`:388` — Graphite Band.** Primitive type and interaction kind were omitted "on the
   same grounds as the Sand Surface Card" — a pointer, not a qualification. B2a fails
   even adjacent-but-incomplete forms (apple §1.2); a cross-reference is weaker still.
   The complete form is now written at the record. This also makes true the `:386`
   (now `:388`) entry that both the migration-log F1 list and the provenance derived
   range already claimed.

No qualification was removed or weakened anywhere. Sentences the source itself wrote
were treated by evidence class, not by authorship: the source's own readings
("shadowless by design", the coconut-on-blue warmth reading, the two-font register,
the refuses/embraces list) stay qualified.

## E2 — log ↔ file agreement (4 fixes, in `migration-log.md`)

6. **§8 Responsive Behavior row — destination was single, disposition was dual (E2a).**
   Image Behavior split two ways: the 12px-radius-across-breakpoints rule went to Layout
   & Platforms, but the flat no-shadow product-screenshot rule and the warm-accent
   illustration/photography rule went to Typography & Assets → Assets (`:214`, `:215`).
   Both destinations are now recorded.
7. **§14 States row (E2c).** The row described the body as stating that "the source
   ledger gives §14 no origin entry" — the body's class statement at `:395` does not say
   that. Reworded to what `:395` actually carries.
8. **F1 pass.** Count 32 → 33 and `:27` added; every one of the 33 line references was
   re-verified by grep after the two-line shift the new paragraph introduced. F2's §14
   row range corrected to `:399–407`.
9. **Header compliance lines.** The Core v2 check claimed output fields
   (`portable_core`, `reasons`, `placeholders`) that `inspectDesignMd` does not emit;
   replaced with the result it does report (`format: core-v2`, `cleanTop: true`, seven
   core section ids, zero failing conformance checks, zero `[FILL IN]`). Stale
   `DESIGN SHA-256` refreshed.

## E1 / provenance range (1 fix, in `provenance.md`)

10. **Derived editorial range was narrower than the body.** Added `:27`, and widened the
    descriptions at `:11` (accent-swatch seam), `:49` (the three readings added above),
    and `:130` (the value-omission decision). The list now matches the 33 qualified lines
    exactly.

**E1 body scan — no fix needed at close.** The portable body carries no migration-internal
matter: no catalog graph, no rulebook clause ids, no wave numbers, no legacy spec-template
reference, no legacy §-numbering, no "portable"/ledger-plumbing vocabulary in the
`ease-exit` cell or the Assets boundary. (The copy read at the start of this audit did
contain "matching the legacy spec-template `ease-exit` example" and "no portable value";
both were gone from the file before the audit's own edit pass — see the process note.)
"Catalog homepage identity" is corpus-standard across 100+ migrated references and is
catalog identity, not migration plumbing. "the source" / "the source's ledger" as an
authority qualifier is likewise corpus convention (43 / 14 files) and is the kind of
evidence-class limit E1 keeps in the body; left as written.

## Out of scope — reported, not fixed (E3)

- **No gate false positive observed.** `--gate-only` → PASS, problems `[]`, both before
  and after this audit. Nothing was reworded to satisfy the gate.
- **Process finding (harness).** The three migrated files were modified by another
  writer *during* this audit window: the `ease-exit` table cell, the Foundations accent
  sentence, the Assets logo bullet, the state-table preamble, and two new log header
  lines all changed between the auditor's first read and its edit pass. Concurrent writes
  make an F3 audit non-reproducible and can make a fresh session report defects that no
  longer exist, or miss ones introduced behind it. The audit window should be serialized
  against the migration worker.
- **A / C / D spot-checks passed** (not this audit's remit, recorded so a later pass need
  not redo them): all 13 color roles, 7 typography roles with unitless line heights
  preserved as ratios, 8 spacing steps, 4 radii, and all 7 component `type:` values
  survive portable; `#0061FF` (Simple Icons) and the Pink/Rust/Gold swatch-only hexes
  correctly stay provenance-side; Named gaps enumerates only source-named unresolved
  items.

AUDIT_DONE dropbox fixes=10

---

## Post-audit addendum — wave-21 revision (2026-08-26)

Added after the fact by the wave-21 revision worker. **Nothing above is rewritten.**
What the F3 auditor saw and what was later found are different facts, and the audit
record is kept as issued — including its own process finding that the three files were
being written by another session inside the audit window, which is why the pass did not
converge on the file as it now stands.

The five B2a fixes the audit made (`:11`, `:27`, `:49`, `:130`, `:388`) were re-checked
against the current file and confirmed correct. None was reverted; only their line
numbers moved (`:388` → `:389`, `:130` and the rest unchanged).

Six defects the audit did not reach were confirmed by a later semantic review and are now
resolved:

1. **A3 — value not carried.** The source's section 9 mega-menu prompt was the only place
   binding the mega-menu card title to `16px Atlas Grotesk`; it is in neither the YAML
   `card-menu` record nor the section 4 body. Deleting the prompt block dropped it. The
   receiving slot already existed (the Mega-menu Product Card record, which already had an
   Anatomy line), so A3 required the move, not the deletion. `Font: 16px / Atlas Grotesk
   (title)` is now on the record at `DESIGN.md:346`.
2. **B2a at `:395`.** The state-table preamble opened by asserting that the two contract
   domains "account for every value elsewhere in this document" — the same unbounded
   coverage shape the audit itself corrected at `:11`. The document disproves it: the
   About-page facts and the widely-documented public facts at `:19`, and the illustrative
   120/240/400ms durations at `:153`, sit in neither contract domain, and provenance lists
   About page and public facts as separate domain rows. Narrowed to a statement about the
   state table alone (now `:396`).
3. **B2a at `:452`.** "Reproduce them byte for byte; do not translate, re-case, or
   paraphrase them" is a migration-authored rule with no adjacent qualification, while the
   sibling rule of the same kind — the font-substitution rule at `:189` — carries the
   complete form. The same complete form is now attached (now `:453`).
4. **E2 at `migration-log.md:41`.** The §9 row claimed "three unique facts moved to real
   slots" while a fourth had not moved. Corrected to four, with the destination named.
5. **F1 at `migration-log.md:57`.** The pass recorded thirty-three re-read passages and
   missed both `:452` and the blanket sentence at `:395`. Re-measured by grep against the
   current file: thirty-four, with every line number refreshed.
6. **F3 (this file).** Recorded as addressed by this addendum rather than by editing the
   audit above.

Also refined, below judgment level: the Named gaps bullet listed Pink, Rust, and Gold
among unresolved accent values when the guideline color page publishes swatches for all
three and provenance holds them. The bullet now says the gap is the source's silence, not
an unresolved value. **The values were not promoted into the portable file.**

Ledger pointers in `migration-log.md` and `provenance.md` were re-verified by grep and
updated for the one-line shift the A3 fix introduced.

REVISION_DONE dropbox items=6
