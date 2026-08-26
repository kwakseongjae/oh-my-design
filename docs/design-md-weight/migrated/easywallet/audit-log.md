# EasyWallet — separate-session audit (F3)

- Date: 2026-08-26 · auditor: fresh session, not the migration worker
- Scope: rulebook **v9** clauses **B2 · B2a** and **E1 · E2 · E2a–c** only. Other clauses were read only far enough to tell whether a finding was in scope; out-of-scope defects are reported, not fixed.
- Not touched, per remit: token values, component tables, state applicability, section structure.
- Brand identity confirmed against the source before auditing: **TW**, not KR — frontmatter `country: TW`, homepage `easywallet.easycard.com.tw`, published copy in Traditional Chinese (悠遊付 / 悠遊卡股份有限公司). The worker's correction of the initial orchestrator instruction is right and was left alone.

## B2 · B2a — 21 sentences classified, 11 fixed

Every sentence of the portable body was classified as [brand-published fact / observation / editorial interpretation or causal judgment]. Qualifications were only added or completed; none was weakened or removed. The test applied was the published *source* of the statement, never which session wrote it.

| # | Where | Finding | Fix |
|---|---|---|---|
| 1 | `DESIGN.md` §1 Audience | The two stakeholder groups replaced the deleted persona archetypes and carried no qualification at all. Naming them as EasyWallet's audience is an inference from positioning, not an observation. | Added the complete form adjacent: derived editorial implementation inference, not EasyCard- or EasyWallet-authored, not a separately published audience definition. |
| 2 | `DESIGN.md` §2 Semantic color | "Brand Teal … EasyCard's transit teal" repeats the heritage reading that §1 Scope qualifies. B2a requires the qualification to be **adjacent**; a qualification one section away does not cover it. | Added the complete form directly after the Brand accents group. |
| 3–10 | `DESIGN.md` elevation, motion, type principles, layout, product state treatments, voice, terminology, forbidden register | Each already carried an adjacent qualification, but each used only **half** of the evidence-class form — either "not …-authored" or "not …-published <doctrine>", never both, and two named only EasyWallet where both operators apply. Under the apple §1.2 precedent (adjacent but incomplete = FAIL), a half-form does not finish separating the claim from official doctrine. | Harmonized all eight to "… they are not EasyCard- or EasyWallet-authored and are not a separately published <X>". Purely additive. |
| 11 | `DESIGN.md` §3 caption tracking | The conflict note said "Both are carried; neither is chosen" while the Type roles table prints `0.1em` alone, so a table reader takes `0.1em` as the answer. The nav-item conflict does read correctly (both values sit inline in the component's own bullet, with no single `Text:` line). | Rewrote the note to say the table cell prints the token-record value because the table has one cell, that the placement is not a selection, and that which value the caption actually uses is unresolved. Table and values untouched. |

Judged **not** editorial and left unqualified: §1 Primary tasks (three affordances read directly off the observed download block, circle selector, and numbered step scenes — description, not inference), the Distinctive traits list (observations; the one interpretive clause is the teal attribution, which §1 Scope names explicitly ~12 lines above in the same section), and the §3 Font evidence classes, §7 Evidence scope, and Named gaps (evidence statements).

## E1 — 1 fixed

`node test-v2/tools/process-leak-check.mjs` reports easywallet **clean** (0 of 110 scanned bodies' hits belong to it), before and after.

| # | Where | Finding | Fix |
|---|---|---|---|
| 12 | `DESIGN.md` §4 Applicability rule | "Declared interactive components declare **Core §4.4** applicability…" cites the spec by section number. The leak checker's term list does not carry `Core §`, so it passed — but a reader who knows EasyWallet and nothing about this catalog cannot resolve the citation. | "…declare **state** applicability by control meaning…". Same rule, no internal reference. |

No other internal vocabulary survives in the body: `Tier`, `provenance`, `catalog graph`, `legacy spec template`, wave numbers, and clause ids all return zero.

## E2 · E2a · E2c — 7 rows corrected, plus the header note

Each log row was re-grepped against all three files rather than re-read.

| # | Row | Finding | Fix |
|---|---|---|---|
| 13 | Header | — | Notes that corrected rows are listed here. |
| 14 | YAML `tokens.rounded` | Row read 옮김 → Foundations shape, but `lg: 16` is in no destination: §5's own Border Radius Scale lists only 0 / 4 / 8 / 9999 and the migration followed §5. The claimed disposition was stronger than the fact (E2). | Row now reads 옮김 (부분) and states where `lg: 16` stands. The value itself is an **A1** matter — reported below, not repaired here. |
| 15 | §5 Layout Principles | Row named Layout & Platforms as the sole destination while §5's Border Radius Scale actually landed in Foundations shape (E2a — both destinations must be named). | Row now names both and says which content went where. |
| 16 | §7 Do's | Row named "Experience principles + Foundations color roles". Two of the seven Do items landed in Typography type principles (weight-700 display; 0.03–0.17em CJK letter-spacing) and one in Layout & Platforms (full-viewport scenes) (E2a). | Row now names all four destinations and the split. |
| 17 | §9 prompt wrappers and Iteration Guide | Row claimed "Their brand constraints were already carried by §2/§7". Five of seven were; magenta "not for text" and yellow "always secondary" exist only in §9 and are in **no** section of the body — a compliance claim stronger than the body (E2c). | Row now states five carried, two unplaced, and flags the two for the owning lane. |
| 18 | §14 States | Row claimed "Table body preserved verbatim". Three rows take an inserted article ("explaining **there are** no records", "with **a** plain-language", "always provides **a** clear reason") and the source's straight quotes around 感應失敗，請再試一次 became 「」 (E2c). | Row now states values and the Chinese string byte-exact, and names the prose differences instead of claiming verbatim. |
| 19 | §15 motion rules | Row read 옮김 for the §15 motion rules, but the third sentence — the teal loading overlay fading in and out on a slow opacity transition — has no destination in the body (E2). The row's B3 evidence was cited by line number, which drifts on any edit. | Row now reads 옮김 (부분), names the unplaced sentence, and cites the B3 paragraph by its position under the **Motion — easings** table instead of a line number. |
| 20 | HTML comment source block | Row said "the nine `rgb()` observations". Nine observations were carried, but only eight are `rgb()` values; the ninth is the body-font stack, and the tenth ledger row (0.5s scene transition) comes from §1/§5, not from the comment. | Row now counts them accurately. |

Rows verified correct and left alone include both carried-conflict rows (caption tracking and nav foreground, each present in Typography/Components **and** in the provenance Carried conflicts table), the dual-destination spacing and 17vw rows, the three deletion rows (all three cross-checked in the provenance ledger), the §9 Quick Color Reference deletion (checked value-by-value against Foundations — no unique value), and the twelve-component / five-interactive / four-non-interactive counts.

## E1 — provenance derived scope widened (1 fix)

| # | Where | Finding | Fix |
|---|---|---|---|
| 21 | `provenance.md` Claim ledger | The ledger graded only two bodies of derived material (product-level states, motion) as editorial, while the body carries at least nine. A ledger narrower than the document is a defect in the same way an overbroad one is. | Added nine rows: the four Scope readings, the Audience groups, the five Principles, the six Avoid items, the three type principles, the elevation reading, the layout reading, the voice/gloss-rule/forbidden-register cluster, and the Brand Teal recurrence in Foundations. |

## Worker self-report — verified

- **D1a pre-blocks confirmed.** `authenticated-account` and `offline signage` appear **nowhere** in the portable body. They survive only in the two sidecars (`provenance.md` omission ledger, `migration-log.md` withheld-material table), where recording the removal is the ledger's job. Neither term appears in the source, so keeping them out of the body is correct.
- **Both preserved conflicts read as unresolved — one did not, and was fixed.** The nav foreground conflict reads correctly as-is: the component has no single `Text:` line, both values sit in one bullet, and the reader is told neither is chosen. The caption-tracking conflict did **not** read that way, because the Type roles table prints `0.1em` on its own; fix #11 above closes that gap without touching the table.

## E3 — gate false positive left in place

`portable_core` fails easywallet with `missing-product-surface-scope`. This is the **documented false positive** in `docs/reviews/t2-1-conformance-fp-2026-08-26-opus5.md`: the check reads the Scope boundary sentence "It does not treat either web surface as a proxy for the EasyWallet app itself or for promotional campaign material" as the claim negating itself, when the sentence's subject is the contract's reach, not the document's contents — the same shape as the dmm case in that review. **The sentence was not rewritten.** Rewriting a correct boundary statement to satisfy a broken check is exactly what E3 forbids.

`node test-v2/tools/migrate-reference.mjs --brand easywallet --gate-only` → **PASS**, before and after this audit.

## Out of scope — reported, not fixed

1. **A1 — `tokens.rounded.lg: 16` is unplaced.** The YAML verifies a 16px radius; §5's prose scale omits it and the migration followed §5. Foundations shape carries 0 / 4 / 8 / 9999 only. The gate does not catch it because the token bag is checked across all three files and `16` appears in the spacing scale. Fixing it means editing the Shape list, which this audit may not do.
2. **A3 — two §9-only constraints have no destination.** Iteration Guide items 2 and 3 ("magenta … not for text", "yellow … always secondary") exist nowhere else in the source and nowhere in the body. The Avoid list had a slot for both.
3. **A2 — one §15 motion rule has no destination.** "The loading screen teal overlay fades in and out with a slow opacity transition, establishing calm" is absent from Foundations motion and from the product state table.
4. **A1 (minor) — two source figures softened.** §12 principle 1's "20+ years of EasyCard trust" became "the EasyCard relationship", and principle 5's "app performance at the **MRT** gate" became "performance at the transit gate". Neither is brand-published copy, so A5 does not bite, but both drop specificity the source verified.
5. **Elevation shadow strings.** The body uses the YAML spacing form `rgba(0, 0, 0, 0.15) …`; §6's table writes `rgba(0,0,0,0.15) …`. Both forms are in the source and the values match; the log's word "verbatim" for that row is defensible either way and was left alone.

AUDIT_DONE easywallet fixes=21

---

## Appended by the value-placement revision (2026-08-26) — not an audit finding

The audit's five out-of-scope items and one further B1 finding were repaired in a separate pass by the owning lane. Nothing above was reverted; the twenty-one audit fixes stand. This section records what changed and where, so the audit reads as the audit and the repair reads as the repair.

| Audit item | Disposition |
|---|---|
| Out-of-scope 1 — **A1** `tokens.rounded.lg: 16` unplaced | Repaired. `- Large (16px)` added to Foundations **Shape**, and the ledger's `tokens.rounded.*` row now reads `4 / 8 / 16 / 9999`. No use is named, because the source names none. The audit's diagnosis of the gate blind spot — `16` is present in the spacing scale, so the cross-file token bag scored it preserved — is confirmed and unchanged. |
| Out-of-scope 2 — **A3** two §9-only constraints unplaced | Repaired. "Do not set text in magenta (`#e4007f`)…" and "Do not give yellow (`#f6ac19`) a primary role…" added to **Avoid** under the existing derived qualification, whose count moved from six to eight and whose evidence boundary moved from seventh to ninth. |
| Out-of-scope 3 — **A2** one §15 motion rule unplaced | Repaired. A **Loading overlay** paragraph carries the teal overlay's slow opacity fade, placed between the derived-motion qualification (which now names it) and **Reduced motion**. |
| Out-of-scope 4 — **A1 (minor)** two softened figures | Repaired. "20+ years of EasyCard trust" and "the **MRT** gate" are restored in Principles 1 and 5. The migration-log §12 row now annotates the remaining prose differences instead of reading as a plain 옮김. |
| Out-of-scope 5 — elevation shadow string form | Left alone, as the audit judged. |
| **New — B1** unevidenced surface attribution on the form input | Repaired. The source records `use: "Standard form input"` with no surface, and the HTML comment scopes the corporate observation to the CSS color system, `btn` classes, and font family only. "Observed on the corporate site" is removed from the input's role line, its `default` row, and the Scope sentence; the ledger row now records the non-attribution. **Button attribution is kept** — §2 and §4 of the source do attribute the buttons to the corporate site. |
| **New — A3 (secondary)** two conflict policies in one document | Repaired in the ledger, not the body. `provenance.md` **Carried conflicts** now states why "five equal circles" was decidable (brand-published copy against a number inside a deleted prompt wrapper) while the nav-foreground and caption-tracking disagreements are not (the same field recorded twice at the same evidence class, with nothing ranking either record). The deletion-ledger row cross-references it. |

**Correction to a phrase this audit did not flag.** `migration-log.md` and `provenance.md` both wrote "the three `not-applicable` rows on Nav Menu Item and on Feature Selector Circle", which reads as three in total. It is three each — `loading`, `error`, `success` on both — for **six**. Both sentences now enumerate them. This audit log did not contain the phrase, so nothing here needed correcting; the third copy reported by the reviewer does not exist in this file.

**E3 — the false positive is gone.** The `portable_core` `missing-product-surface-scope` failure recorded above was a check defect, not a document defect, and the check was corrected on 2026-08-26. The Scope boundary sentence was never rewritten. It now reports `portable_core=true` with no reasons, and `migrate-reference.mjs --brand easywallet --gate-only` reports `PASS` with `problems: []`. `process-leak-check.mjs` still finds zero easywallet hits.
