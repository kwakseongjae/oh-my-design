# Expo — F3 separate-session audit (B2a · E2)

Auditor: Claude Opus 5, fresh session (no migration context inherited).
Date: 2026-08-26. Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v9**.
Scope audited: **B2 · B2a** and **E1 · E2 · E2a–c** only. Everything else is reported, not touched.
Source `web/references/expo/DESIGN.md` was not opened for writing; SHA-256 `0014c9fa640b65165cce430fddbbdc3e38efc78145a9ab18035fb30e973060a2` before and after (unchanged).

Forbidden and untouched: token values, component field tables, state applicability rows and their reasons, section structure.

## Fixes

### 1. `DESIGN.md` Audience — evidence class was assigned twice, two different ways (B2a)

The framing sentence read “The first-party public material identifies two supported audience groups without inventing named personas, **and then lists the three groups below**.” That attributes the three-group listing to the first-party material, while the closing qualifier of the same section calls the three-label grouping “a derived editorial implementation inference from the verified surfaces.” One act, two evidence classes — the failure B2a exists to prevent.

The source's own sentence ends at a colon; the trailing clause is the migration's, so this is not a case of the original having published it. Fixed to “…without inventing named personas, **while three groups are listed below**.” The two-versus-three conflict is still stated and still not reconciled; only the false attribution is gone. No qualifier was removed anywhere in this audit.

### 2. `DESIGN.md` Assets — a sidecar pointer in the standalone body (E1)

The paragraph ended “…and its exact record stays **in the source ledger** rather than in this contract.” A portable reader has no ledger; the clause names a document that only the migration holds. `process-leak-check.mjs` misses it because `LEDGER_PATTERNS` requires the word `provenance` adjacent to `ledger` — “source ledger” slips the regex. Measured context: 16 of 116 migrated bodies use ledger vocabulary; the three approved golden samples use none.

Fixed to “…and its exact record is not reproduced in this contract.” Same boundary, no pointer, no value lost — the Simple Icons record still lives in the provenance identity row and the portable body still never names the icon set.

### 3. `provenance.md` — derived scope was narrower than the body (audit step 3)

The `Derived scope:` bullet enumerated roughly nineteen qualified passages. The body actually carries **twenty-five** complete qualifier sentences (`derived editorial implementation inference` ×25, `not Expo-authored or a separately published UI specification` ×25 — counted mechanically, not estimated). Missing from the ledger's list: the product-shape reading and the narrative-authority limit; the audience grouping; the representative-element condition for promoting a color; the elevation reading and the dialog-only shadow promotion; the family-promotion condition and the JetBrains Mono role restriction; each font item's promotion decision; the decision to leave unmeasured treatments empty rather than fill or negate them; and the decision to keep pressed as a separate observed state. A ledger that under-declares its own derived range is a defect in the same direction as one that over-declares.

Rewritten to enumerate all twenty-five, with the count stated.

### 4. `migration-log.md` E2 row — homepage occurrence count wrong

Row claimed `https://expo.dev/` “appears 4× in the portable body (Scope, first primary task, and inside the two sibling route URLs)”. Measured: **6×** — the home URL in Scope, the home URL in the first primary task, and four sibling route URLs (`/services` and `/pricing`, once in Scope and once in Primary tasks) that carry it as a prefix. Ledger count 19× was correct. Row corrected with the full enumeration.

### 5. `migration-log.md` E2 row — `primary_color` destination enumeration did not account for its own counts

Row named four portable lines but claimed five, and named “identity row, exact token record, and the raw `rgb(0, 0, 0)` samples” for a six-line provenance count. Measured: body lines 85, 95, 171, 194, 229 (the missing one is the A4 paragraph holding `#010101` / `#030304` apart from `#000000`); provenance lines 17, 136, 155, 156, 211, 230 carry the hex, and three further rows carry the raw `rgb(0, 0, 0)`. Row rewritten to the measured breakdown.

### 6. `migration-log.md` E2 row — §13 “framing sentence carried verbatim” was not true

The row said the framing sentence was carried verbatim. It was not: the migration appended a clause (fix 1). Row rewritten to say what is true — the framing clause is verbatim, the sentence then continues to state the count conflict, and the three-label grouping is attributed to the reconstruction rather than to the first-party material.

### 7. `migration-log.md` E2c — F2 claimed two divergent typography `use` strings; there is one

F2 listed “the two YAML typography `use` strings that differ from the §3 table wording”. Compared field by field, only `typography.body` differs (`Repeated marketing body and list text` in YAML vs `Repeated body and list text` in the §3 table); hero, section, subheading, action, and code are identical in both. Corrected, with the one string named.

### 8. `migration-log.md` — F1 stated a count its own list contradicts

“Sixteen interpretive or causal passages were found without adjacent complete qualification and were fixed in place:” is followed by a list of twenty-two passage groups, and the finished body carries twenty-five qualifier sentences. An unverifiable count in front of a colon that promises to enumerate it. Replaced with the measured statement: every such passage was qualified in place, and the body carries twenty-five complete qualifiers (both halves of the class present in all twenty-five).

### 9. `migration-log.md` §14 row — “one word differs and only one”

The §14 change is `documented in §4` → `documented in this section`: one cross-reference, two words. Word-level diff against the source shows that single substitution and no other change. Row reworded to state the diff instead of a word count.

### 10. `migration-log.md` E1 note — compliance claim was one clause stronger than the body (E2c)

“The portable body contains no migration vocabulary — no … sidecar directives …” was false when written, because of the clause fixed in item 2, and the leak checker could not see it. The note now records that, explains why the checker missed it, and states the claim as true of the current SHA.

### 11. `migration-log.md` — SHA and F2 re-collation refreshed after the body edits

Migrated SHA-256 updated to `91bcad953da29071b1b3c1c56e6e591abc553c69394dff10c09b221774a5ff55` (pre-audit `3523f41e…` recorded alongside). F2 gained a post-audit re-collation measured against the final files: dual-destination body/ledger counts for every color, family, radius, route URL, and state label; the two values that are dual-destination in different forms (`9999px` and the prose spacing set in the body vs `full: 9999` and the `xs`–`xxl` mapping in the ledger); ledger-only re-confirmed at 0× in the body; portable-only re-confirmed at 0× in the ledger.

## Verified, not changed

**The two reported false positives are real, and both rewrites are meaning-preserving.**

- **§3 evidence grades.** The five bullets in the portable body are **byte-identical** to the source's own §3 `### Evidence classes` list (exact string comparison, not eye-check). Reconstructing the table variant and re-running the conformance evaluator reproduces the false positive: `| Unresolved | … |` yields `contains-prescriptive-placeholder` and `portable_core: false`. The bullet form is both correct and strictly closer to the source. Nothing lost.
- **Motion.** Source sentence 1 is carried verbatim. Sentence 2, “Motion tokens are unresolved and omitted.”, is carried as “No motion token is promoted, and every motion value stays absent rather than being filled with a plausible default.” Same disposition; “unresolved” survives for the same three fields in Governance Named gaps. The upstream fix landed: `containsUnresolvedSemanticClaim` now carries an `ATTRIBUTED_UNKNOWN` guard whose comment credits this worker's report. Re-tested by substituting the source's own sentence back into the body — it now passes (`portable_core: true`, foundations check `true`). So the rewrite is no longer *required*; it is left in place because it loses nothing, and reverting it would only churn the body and stale the worker's honest E3 record. Reported here rather than silently reverted.

**Judgments checked and upheld.**

- **A3 rescues (3).** Both hero-action variants (fields, geometry, use) and both §9-only rules — “Use the 8px dialog panel and its measured shadow only for a pricing-dialog-like overlay” (application rule 5) and “Do not add error, success, input, card, or mobile rules from this reference” (Avoid, 5th bullet) — are present verbatim in the body. Correct A3 handling; each had a receiving slot.
- **C4 on the pricing dialog panel.** The verified `type: dialog` is kept as **Primitive type** (A1b), while the interactive kind and the seven-state applicability map are omitted with a stated reason and an adjacent complete qualifier. A1b and C4 are not in conflict here: the YAML primitive type is a measured value, the control role is the thing left undecided.
- **§13 two-versus-three.** Preserving the source's own count conflict instead of reconciling it matches approved practice (golden `karrot` preserves an unresolved persona conflict the same way). Only the attribution was wrong, not the decision.

**Domain separation holds, sentence by sentence.** Every sentence touching the brand-guideline domain was checked against the UI-token surface: Scope (brand-character words, narrative only), Principles 2 and 3 (brand manifesto and guideline goals, with UI implications pointing back at *measured* values), Assets (explicit “not a source for the marketing component measurements”), Layout (“the official brand guidance supports the observed … presentation” — supports, supplies nothing, and the adjacent qualifier says so), Content & Locales (voice boundary, not a token), Avoid bullet 4. No brand-page, About-page, EAS-documentation, or font-license value reaches a `tokens.*` slot. The dropbox failure class is not present here.

**D1a.** Every Named-gaps item is a domain the source itself establishes (§15, §8, §5, §6, §14, §2, §4, §3). Documentation chrome, authenticated product UI including EAS dashboards, native clients, and brand-asset rules are named as out-of-scope surfaces, not as unresolved values — with a complete adjacent qualifier.

**A5 spot-verified by exact string comparison:** the three imperative calls with their U+201C/U+201D quotes, `Build, Submit, Update, Workflows, and Hosting`, both brand-character strings, `Expo Agent`, `React Foundation`, `$45 million Series B` — all 1:1 between source and body.

## Out of scope (reported, not acted on)

- **`process-leak-check.mjs` blind spot.** `LEDGER_PATTERNS` requires `provenance` adjacent to `ledger|sidecar|record|원장`, so plain “the source ledger”, “the ledger”, and “the sidecar” pass. Fix 2 here was invisible to the checker. 16 of 116 migrated bodies match `ledger` at all — worth a sweep with a widened pattern before the E1 check folds into `gateTexts()`.
- **D1 gate trigger set.** The gate's alien-negative-claim scan only fires on `not captured | were not | 없었 | 않았다 | 미기록`. Expo's `no satisfaction or demographic claim is made` is fine (it is a D2 guard about this contract, and matches golden `29cm`/`karrot` phrasing), but the same blind spot that produced D1a still lets other negative forms through.
- **Conformance FP #1 is still live.** A table cell whose whole content is `Unresolved` still trips `BARE_PLACEHOLDER` and fails `portable_core`. Expo dodged it by returning to the source's bullet form, which happened to be better — a brand whose source used a table would have no such escape.

## Final verification (re-run against the post-audit files)

- `node test-v2/tools/migrate-reference.mjs --brand expo --gate-only` → **PASS**, problems `[]`.
- `scripts/design-md-core.cjs`: `format: core-v2`, `level: portable-core`, `structurally_valid: true`, `portable_core: true`, `reasons: []`, `cleanTop: true`, 13/13 checks pass, seven claim markers each exactly once, no `[FILL IN]`.
- `node test-v2/tools/process-leak-check.mjs` → no hits for `expo`.
- Source SHA-256 unchanged: `0014c9fa640b65165cce430fddbbdc3e38efc78145a9ab18035fb30e973060a2`.
- Migrated body SHA-256: `91bcad953da29071b1b3c1c56e6e591abc553c69394dff10c09b221774a5ff55`.

AUDIT_DONE expo fixes=11
