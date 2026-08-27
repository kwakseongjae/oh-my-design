# familymart-tw — F3 separate-session audit

Date: 2026-08-26 · Auditor: fresh session (not the migrating worker) · Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**
Scope: **B2 · B2a** and **E1 · E2 · E2a–c** only. Token values, the component table, state applicability, and section structure were out of scope and were not touched.
Source of truth for every claim below: grep / substring counts over the three migrated files and `web/references/familymart-tw/DESIGN.md`. Nothing here is asserted without a measurement.

## Verdict

- `DESIGN.md` (portable body): **0 edits.** The B2a sentence scan found no interpretive or causal sentence standing without an adjacent complete qualification. No qualification was removed.
- `migration-log.md`: 9 fixes.
- `provenance.md`: 4 fixes.
- **fixes = 13**

## B2 · B2a — portable body

Every sentence in `DESIGN.md` was classified as brand-published fact / observed description / editorial-interpretive judgment. The five interpretive groups each carry the approved qualification **adjacent and complete**, measured at 5 occurrences of `derived editorial implementation inference from the verified surfaces; … not 全家便利商店-authored or a separately published UI specification`:

| Group | Line | Qualification position |
|---|---|---|
| Scope — interface reading of the three routes | 15 | precedes, same sentence |
| Audience — four service-context archetypes | 30 | precedes the bullets |
| Principles — 4 items | 49 | precedes the list |
| Capture-bound application — 7 items | 58 | precedes the list |
| Content & Locales — register + 3 Do/Don't rows | 220 | precedes both |

Unqualified sentences are of the two permitted kinds only: attributed first-party statements (`says`, `describes`, `states`, `presents`, `Its official history explicitly labels`) and evidence-boundary limits (Avoid, Evidence-domain boundary, Elevation, Motion, Accessibility boundary, Layout, Assets, Font evidence). No qualification was relaxed on the ground that the source itself wrote the sentence — the test applied was the publishing party, not the file of origin.

The six post-draft F1 edits the worker reported were verified as actually present in the file, not merely logged:

| Claimed edit | Measured |
|---|---|
| `shell` framing removed from Distinctive traits | line 43 carries the measured-value wording; `shell` occurs only once in the body, inside the qualified Scope paragraph (line 15) |
| card-title "separating content emphasis" removed | line 45 states the two measured roles; `emphasis` survives only at line 65, inside the qualified Capture-bound application group |
| Ink imperative dropped | `use as the observed` → 0 hits; line 83 reads "the observed functional baseline" |
| line-height ratio sentence re-attributed | line 137 attributes the ratio form to the supplied bundle |
| Assets "changing content" reading removed | `changing content` occurs only at line 15, inside the qualified Scope paragraph; line 142 is observation + boundary |
| Layout `gutter` / `platform` D1 leak removed | `gutter` → 0 hits; line 205 ends "rather than a breakpoint specification", and `breakpoints` is the source's own word (§5) |

## E1 — process leak

`node test-v2/tools/process-leak-check.mjs` → familymart-tw not among the leaking bodies. Manual re-read found three phrasings worth naming — `Core §4.4`, `the source state contract`, `the source records` — and each was measured as house convention across the migrated corpus (98 / 80 / widespread of 115 bodies), including one golden sample (`musinsa` carries `Core §`). They are not familymart-specific defects and were left alone.

## E2 · E2a–c — migration log

| # | Clause | Defect | Fix |
|---|---|---|---|
| 1 | E2c | A5 count claim gave a bare "10 occurrences" with no counting basis, so an independent `grep -c` re-measure returned 9 and read as a discrepancy | states 10 occurrences on 9 lines, names the double-naming line, and fixes the basis as occurrences-not-lines |
| 2 | E2c | `components_harvested` claimed 3× in the ledger; measured 4 occurrences on 3 lines | corrected to 4 occurrences on 3 ledger lines, with the reason |
| 3 | E2a | `tokens.rounded` row said "Triple destination"; the pair also appears in Layout & Platforms | four destinations, Layout & Platforms added to the disposition column |
| 4 | E2a | component-token row omitted Layout & Platforms, which restates the measured `height` 51px | added to disposition and reason |
| 5 | E2a | §4 button/input row said "Dual"; the 3px radius / 5px padding are restated in Layout & Platforms | three destinations, Layout & Platforms added |
| 6 | E2a | §2 sibling-hex row said "Dual" while its own reason named a third destination (Governance Named gaps) | three destinations, Named gaps promoted into the disposition column |
| 7 | E2 | the portable `Kind: interactive` had **no** log row at all — it is not a source field, so its disposition was unrecorded | new row: the derivation, the considered-and-rejected C4 omission, and the measured precedent |
| 8 | E2/F2 | F2 paragraph predated the audit and described `grep -c -F` as if it counted occurrences | counting basis stated; an F2 re-contrast paragraph records the audit's re-measured destination and token counts |
| 9 | E2c | Gate section asserted "No F3 fresh-session audit was run for this reference, and none is claimed" — false once this audit ran | replaced with what actually happened, noting `DESIGN.md` is byte-identical so the recorded SHA still describes the audited file |

### On fix #7 — the `Kind: interactive` judgment

The judgment itself was **not** changed; that is outside this audit. What was missing is its record. Measured, and now written into the log:

- The legacy token carries `type: listItem` and **no** kind field, so `Kind: interactive` is declared by the migration, not carried from the source.
- 23 of the 115 migrated bodies pair `Kind: interactive` with `Type: listItem`.
- `bahamut` is a genuine precedent — `Sidenav Active Link`, `Kind: interactive` / `Type: listItem`.
- `catchtable` is **not**: it contains no `listItem` component at all; its `Kind: interactive` entries are `input` and `button`. The worker's review note cited "bahamut/catchtable listItem 선례"; half of that citation does not hold, so the log now cites only the half that measures true and records the check that removed the other.

## E1 · E2 — provenance

| # | Defect | Fix |
|---|---|---|
| 10 | `primary_color` labelled "four destinations" while enumerating six | six destinations, with the measured 5-in-body / 5-in-ledger count |
| 11 | "The three sibling class names" followed by **four** names; destination list named three portable sections where the names actually reach four (Experience omitted) | corrected to four names and four sections, each located |
| 12 | ledger mentioned `Kind: interactive` only to say the primitive was not flattened into it, never recording that `Kind` is itself migration-declared rather than measured | records it as a Core-v2 role classification declared by this migration, pointing at the log |
| 13 | derived scope written too narrowly: the archetypes were described as staying under "the source's own" qualification, omitting the complete derived-editorial qualification the body also carries | records both qualifications, quoting the added one |

## E3 — false positives reported, not evaded

No gate false positive was encountered, and no notation was altered to satisfy a check. One count *disagreement* was referred to this audit and resolved as a method artifact rather than a value loss: `grep -c` counts matching lines (9), a substring count counts occurrences (10). Nothing was renamed, split, or reformatted to make a number agree.

## Out of scope — reported, not fixed

- `DESIGN.md` line 167 summarises the applicability map as "`default` and `focus-visible` apply", while the table below it also marks `hover` and `disabled` applicable. Touching it means touching state applicability, which this audit may not do. It is boilerplate: the same sentence appears in 97 of 115 migrated bodies, so if it is wrong it is wrong corpus-wide, not here.
- `DESIGN.md` line 71 and line 127 carry the same "Do not substitute a system font …" sentence in Experience Avoid and in Typography & Assets Family. Duplication, not a B2a or E2 defect.
- The source renders the brand idea as “全家就是你家” with U+201C/U+201D; the portable body uses 「全家就是你家」. The brand string itself is byte-exact — only the surrounding quotation marks differ — so this is an A5 note, not an A5 violation, and A-series is out of scope.

## Re-verification after the audit

- `DESIGN.md` SHA-256 `6c66603accbe76dec9fd8c3e0c1823b71284d6b9330163cde7e047f0ffdc2f36` — unchanged from the value the migration log records; the portable body was not edited.
- `node test-v2/tools/migrate-reference.mjs --brand familymart-tw --gate-only` → **PASS**, `problems: []`.
- `node test-v2/tools/process-leak-check.mjs` → familymart-tw clean.
- `node scripts/migrate-design-md-core.cjs --input … --check --require-portable-core --json` → `status: pass`, `conformance.level: portable-core`, `conformance.portable_core: true`, `dropped_segments: 0`, `projection_roundtrip_equal: true`.

AUDIT_DONE familymart-tw fixes=13
