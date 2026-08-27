# evaair audit log — B2a · E2 (F3 separate-session audit)

Auditor: fresh session, not the migration worker.
Rulebook: **v9** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`), clauses B2 · B2a and E1 · E2 · E2a–c only.
Date: 2026-08-26
Source `web/references/evaair/DESIGN.md` was read, never written.

Method: every sentence of the portable body classified as [brand-published fact / observed technical description / editorial interpretation or causal judgment]; every migration-log row re-grepped against the three output files; `node test-v2/tools/process-leak-check.mjs` for E1; `migrate-reference.mjs --brand evaair --gate-only` before and after.

## Fixes

### Portable `DESIGN.md` (2)

1. **E1 — migration-process concept exposed in the body.** §4 State record opened with “The source state contract, preserved in full: only the booking tab’s selected state is captured.” “The source … preserved” names the migration act, not anything an EVA-literate reader can resolve; at audit time the phrase `preserved in full` occurred in exactly one of the 115 migrated bodies, this one (it is now zero). Rewritten to open on the source §14 prose itself: “Only the booking tab’s selected state is captured. …”. No word of the state contract was dropped. The literal-term leak check does not catch this phrasing — reported below.
2. **B2a — qualifier did not reach the sentences it governs.** §6 Content & Locales qualified only the register sentence (“That reading is a derived content-tone interpretation …”), while the Do / Don’t table directly under it applies that reading and includes an airline-safety copy rule (“Use reassuring, operational language around safety and assistance”). Widened to the approved §Principles pattern — “That reading, and the Do / Don’t pairs below that apply it, are a derived content-tone interpretation of EVA’s published documents; they are not EVA-authored voice guidance and not a claim about an unmeasured UI copy system.” No qualifier was removed anywhere in this audit.

### `provenance.md` (1)

3. **B2/B2a — derived range unrecorded, i.e. recorded at its narrowest.** The ledger carried no derived-range note at all; at audit time 92 of the 115 migrated provenance files carried one and evaair’s did not. Added a §Proof notes bullet enumerating the actual derived set measured from the body — Scope narrative-synthesis reading, Scope visual-impression reading, Audience archetypes, Principles + Applied rules, Content & Locales register + Do/Don’t pairs — and separating the C2 control-role `not-applicable` reasons as role judgments rather than EVA statements.

### `migration-log.md` (9)

4. **E2 — `name`.** Row read “provenance §Identity table (×2)”. Measured: 長榮航空 occurs twice in that file, once in the §Identity row and once in the H1 heading. Destination restated.
5. **E2/E2a — `primary_color`.** Row listed Experience §Avoid as a destination; §Avoid contains no hex (it names the green panel in words). Row also omitted Experience §Scope, which carries the hex. Corrected to the six measured occurrences: §Scope, §Distinctive traits, §Principles applied rules, Foundations §Semantic color, Booking Widget Tab, Green Information Card.
6. **E2 — `omd: "0.1"`.** Row sent it to provenance §Freshness; it is in the §Identity table as `omd format (source)`. §Freshness holds `verified`, `verification_v2.schema` and `.checked` only. Split.
7. **E2a — `verification_v2.surfaces`.** §Freshness restates the inspected date as an aggregate row; only §Surfaces was named. Second destination added.
8. **E2a — `verification_v2.sources`.** §Freshness restates the captured dates as the product-surface and official-doc/brand-asset/license rows; only §Sources and §Narrative-and-license-context were named. Second destination added.
9. **E2a — `tokens.extracted`.** Row named the §Identity table only; the value also has its own row in §Freshness. Second destination added.
10. **E2/E2a — `tokens.note`.** Row claimed the note’s substance (“three surfaces only, separate evidence domains”) is restated in Experience §Scope. Measured: §Scope carries the three-surfaces bound and the corporate-material bound, while the font-declaration and external-licensing half lives in §3 Font evidence (declared-only and system/license rows). Both destinations now named.
11. **E2c — §10 Voice row.** The row described a qualifier narrower than the body now states. Restated to match fix 2 exactly, and no further.
12. **F2 — re-collation after the audit.** The header paragraph asserted a pre-write grep pass only. Updated with the measured audit result: seven destination statements corrected, one compliance claim restated, two portable sentences changed, one provenance record added.

## Checked and left unchanged

- **frontmatter `logo` non-promotion (worker’s flagged item): correct, and correctly recorded.** The slug is `https://www.google.com/s2/favicons?domain=evaair.com&sz=128` — a third-party favicon-service URL, not an EVA-published asset file, so portable Assets is the wrong destination. Grep confirms it appears in provenance §Identity only, the reason sentence sits with it, and the migration-log row states the same disposition. §3 Assets independently states the body carries no first-party EVA image, icon, or logo file. No contradiction between the three files.
- **C2 reasons (worker’s flagged item): role-based, no observation-absence anywhere.** All six `not-applicable` rows give a role reason — the booking-widget tab as a mode selector that owns no fetch lifecycle, submits nothing, and has no completion outcome of its own; the awards accordion as a disclosure trigger over an already-present row. Nothing in the body uses “not captured” as an applicability reason; the §4 paragraph states the opposite rule explicitly. Untouched (state applicability is out of the audit’s edit remit anyway).
- **Airline-domain sentence check: clean.** Every safety/operations statement is either attributed to a named EVA document (“EVA’s own account …”, “Its official values page frames …”, “EVA’s official marketing policy asks …”) or sits under a derived-editorial qualifier (Principle 1 “Safety and service are coequal”, its UI implication, and the applied accessibility rule). The one sentence that puts safety next to UI (“Those pages combine a travel-planning utility surface with corporate material about safety, service, and a global network”) describes what the measured pages contain; it is an observation, not a safety claim. No brand safety assertion is presented as a measured UI fact, and no measured UI fact is dressed as an EVA safety commitment.
- **Value parity re-measured after the edits:** 8 distinct hexes + 19 distinct px = 27 values, identical sets in source and portable body; 0 lost, 0 invented. The migration-log’s “27 distinct values” claim measures out. Component tables, token values, state applicability, and section structure untouched.
- **Existing qualifiers:** all five derived sites were checked for completeness (derived-class named **and** brand-authorship denied) and all five pass; none was weakened or removed. Audience keeps “not synthetic research personas or behavioral claims, and not EVA-authored audience definitions” as written.

## E3 — false positives to report, not to work around

- `--gate-only` reported no false positive; verdict was PASS both before and after this audit, and nothing was reworded to satisfy it.
- **`process-leak-check.mjs` miss (not a false positive — a gap).** Fix 1 is a genuine E1 leak that the checker passes, because its rule set is literal terms plus ledger/clause patterns and does not cover source-versus-output framing (“the source …, preserved in full”). evaair reported zero hits before the fix and zero after. If that phrasing class is meant to be caught, the term list needs a pattern for it; it was left to the tool owner rather than worked around here.

## Out of audit scope (reported, not changed)

- Legacy §11 closed with “That documented commitment is stronger evidence for a precise, non-exaggerated communication posture than any invented brand slogan or executive quotation.” It is absent from the portable body. It is an evidence-strength judgment rather than a verified value, so it is not an A1 loss, but the A-series owner may want a ruling on dropped source judgments.
- Legacy §3 attributed its font classifications to an agent (“The artifact classifies `Dotum` as unresolved”, “the artifact classifies Roboto as system”); the portable body uses agentless passive (“`Dotum` is classified as unresolved”). Inside a table whose column is literally “Evidence class”, this reads as a classification rather than an EVA statement, so it is not a B2a violation — flagging it as a borderline pattern likely to recur.
- At audit time 92 of the 115 migrated provenance files carried a derived-range note and evaair’s had none. That looks like a harness-prompt gap rather than a one-brand slip.

AUDIT_DONE evaair fixes=12
