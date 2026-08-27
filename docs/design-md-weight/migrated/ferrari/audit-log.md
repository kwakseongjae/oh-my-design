# ferrari — B2a·E2 audit log

Separate-session F3 audit (rulebook **v10**, clauses B2·B2a and E1·E2·E2a–c only).
Auditor session is distinct from the migration worker's. Date: 2026-08-26.
Source `web/references/ferrari/DESIGN.md` was read only and is unmodified.

Counts below were taken with `grep -o … | wc -l` (occurrences, not lines).

## Fixes applied — 6

### B2a (1)

1. **`DESIGN.md` §2 Foundations → Shape.** "Public geometry is sharp." asserted an
   un-qualified generalization from two measured controls. The same interpretive move is
   already marked derived twice elsewhere in the file — the `Sharp geometry` label under
   Distinctive traits and Principle 3 — so §2 stated flat what §1 states as inference, and a
   qualifier three sections away is not adjacent. Rewritten to keep both facts and carry the
   complete adjacent qualification:
   "Both measured public controls resolve to 0px. The 2px corner belongs to the third-party
   consent utility and is not a Ferrari radius step. Reading those two measurements as a sharp
   public geometry is a derived editorial implementation inference from the verified surfaces;
   it is not Ferrari-authored or a separately published UI specification."
   No value, table or structure changed.

### E2 / E2a / E2c (5)

2. **`migration-log.md` row `YAML id / country / category / homepage` — missing dual
   destination (E2a).** The row read `분리 → 원장` only, but the `homepage` value reaches the
   portable body: `grep -o "https://www.ferrari.com" DESIGN.md | wc -l` = 1, and it is the only
   URL in the portable file. Disposition split to `분리 → 원장 (id / country / category)` **및**
   `옮김 → DESIGN.md (homepage)`, with the measured count and the receiving sentence named.

3. **`migration-log.md` row `verification_v2.surfaces` — false destination claim (E2).** The
   reason ended "only ids, kinds, URLs and dates moved out", but the observation date is in the
   portable body: `grep -o "2026-07-13" DESIGN.md | wc -l` = 1, in "three public Ferrari web
   surfaces observed on 2026-07-13". Corrected to record the date as staying in the body
   alongside the three-surface boundary and the `en-EN` locale; only the surface ids, kinds and
   per-surface URLs moved out.

4. **`migration-log.md` row `verified / omd / schema / checked` — pointer added (E2a).** These
   fields share the `2026-07-13` string with `surfaces[].inspected`. Added a note that the one
   body occurrence is recorded on the surfaces row rather than counted twice, so the shared
   string is not silently claimed ledger-only.

5. **`provenance.md` Identity note — stale claim about the portable body (E2c).** It said the
   body "states that no first-party Ferrari image, icon, logo, or **type** file is carried". The
   body says "This contract carries no image, icon, or logo file" — `grep -o "type file"
   DESIGN.md | wc -l` = 0. The ledger was describing the pre-correction wording. Rewritten to
   match the body and to record *why* the claim stops short of type files: the first-party
   `Ferrari-SansRegular` / `Ferrari-SansMedium` WOFF/WOFF2 sources are carried in the portable
   Typography & Assets subsection, so a "no type file" claim would contradict them.

6. **`provenance.md` Omission ledger, §9 row — contradicted the migration log (E2).** It said
   §9's out-of-scope list "are all restatements of §1–§4" and was deleted with the prompt.
   Measured against the source: `dashboard` and `component-state system` occur **only** on source
   line 193 (§9) — nowhere in §1–§4 — and `migration-log.md` correctly records the list as
   `옮김 → Experience Scope` under A3. The ledger paragraph was the stale one. Rewritten so the
   prompt wrapper is the deletion and the out-of-scope list is explicitly excluded from it, with
   the §9-only finding stated as the reason the move was required.

## F2 re-collation after the body edit

The Shape rewrite changed two counts the log asserts. Both re-measured and updated:

- `derived editorial implementation inference`: 7 → **8** in `DESIGN.md` (Principles row).
- `Ferrari`: 53 → **54** in `DESIGN.md` (the new `not Ferrari-authored` clause), with the
  counting basis restated on the row.
- Row `tokens.rounded` extended to name the new adjacent qualification in §2 Shape.

## Checked and deliberately not changed

- **A5 curly-quote line.** `“The power of passion becomes the beauty of achievement.”` is
  byte-identical to the source (`e2 80 9c` … `e2 80 9d` on both sides, verified with `xxd`).
  The migrated file was matched to the source, which is the correct direction. Left alone.
- **The three D1a-family removals the worker reported are real, and none was over-broad.**
  `gutter` / `section rhythm` / `base unit` and `locale expansion` / `formatting`: 0 occurrences
  in all three migrated files and 0 in the source — invented domains, correctly gone. The
  domains the source *does* establish all survive: the §5 layout limit ("global grid, maximum
  width, breakpoint, carousel behavior, or a reusable card layout") is verbatim in Layout &
  Platforms and in Named gaps; all three spacing measurements plus the "not a general spacing
  scale" bound remain in Foundations; the §10 voice prohibition remains in Content & Locales and
  Named gaps; the measured `en-EN` locale fact remains. The third removal narrowed "no
  first-party image/icon/logo/**type** file" to "no image, icon, or logo file", which removes the
  contradiction with the verified Ferrari-Sans sources while the font-file evidence stays in both
  the §3 evidence table and the Assets paragraph. Only the ledger's description of it was stale
  (fix 5).
- **A3 §9 handling.** The out-of-scope list is in Experience Scope: `configurator` 3×,
  `checkout` 2×, `alert` 2×, `dashboard` 1×, `component-state system` 1×. The prompt wrapper is
  gone and its design values are each present elsewhere (`1px tracking` 3×, `57px` 4×, `21px` 2×,
  `5px 0px` 2×). Correct; only the ledger contradicted it (fix 6).
- **Sibling non-promotion.** `provenance.md` states it explicitly, and it holds: `13px`,
  `19.5px`, `rgb(0, 0, 0)` and `letter-spacing: 1px` are each 0× in `DESIGN.md`, and the portable
  type-role table keeps the source's unitless `1` and `0.13008` tracking. The sibling
  `.verification.md` is adopted as ledger evidence and logged as `채택 → 원장`.
- **Statements of the form "the source DESIGN.md promotes neither …".** Subject is the source
  file, so the existence of the sibling does not falsify them. Not flagged.
- **Primary tasks (§1).** Considered for a B2a qualifier and declined: each of the three bullets
  names the observed surface or the observed control label it restates, and the approved toss
  sample carries the same subsection with no qualifier. Qualifying them would degrade observation
  to inference.
- **Avoid (§1) and the C2 state-applicability reasons (§4).** Also declined. The Avoid list is
  prohibitions bounded by stated evidence limits (approved toss carries none), and the per-state
  role reasons sit directly under the §4 paragraph that declares the whole method to be
  role-judgment rather than record-completeness — which C2 requires.
- **All other qualifier placements.** All 8 occurrences attach to genuine editorial content
  (Scope readings ×2, trait labels, Principles + applied rules, elevation attribution, layout
  emphasis reading, voice comparison/conclusion, and the new Shape summary). No document fact or
  measurement is qualified — no over-qualification found.

## Rechecks

- **E1 process leak:** `node test-v2/tools/process-leak-check.mjs` — ferrari is not in the
  leaking set (96 of 120 bodies leak; ferrari is clean, before and after the edits).
- **Gate:** `--gate-only` returns PASS with no problems, before and after. Recorded as status
  only — not offered as conformance evidence.
- **Every other numeric claim in `migration-log.md`** was re-measured with `grep -o … | wc -l`
  after the edits. All match.
- **No gate output was worked around.** No false positive was encountered (E3).

## Out of scope — reported, not fixed

- `migration-log.md` row 52 says the §9 out-of-scope boundary "exists only in §9". Precisely, the
  combined boundary statement does, and `dashboard` / `component-state system` do; `configurator`,
  `checkout` and `alert` also appear at source lines 88, 90 and 182 in other roles. The
  disposition (move, per A3) is correct and the row is not misleading, so it was left as written.
- `DESIGN.md` line 9 carries `https://www.ferrari.com` in the portable body. Recorded now as a
  dual destination (fix 2). Whether a bare homepage URL belongs in a portable body at all is an
  E1 question the leak checker does not currently ask; flagged, not changed.

AUDIT_DONE ferrari fixes=6
