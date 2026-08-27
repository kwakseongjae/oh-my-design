# Devsisters F3 audit

Auditor: Claude Opus 5 (fresh session, not the T2 migrating worker).
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v9 — B2 / B2a / E1 / E2 / E2a–c only.
Date: 2026-08-26

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal-application judgement. Only the third class without an adjacent complete qualifier (`derived editorial implementation inference from the verified surfaces` / `not Devsisters-authored or a separately published UI specification`) was edited in the body, and one case of the inverse error — source-stated evidence carrying a derived limiter — was corrected. There is no reconstruction-boundary exemption. Governance Authority is not a substitute. Token values, component tables, state applicability maps, and section structure were not changed. Every migration-log row was re-checked by grep against the three files before it was rewritten.

Worker decisions left in place: the seven §14 capture-record rows; the three declared state maps and their C2 omission sentences; the four `Kind: omitted` components (C4); B1 `focus-visible` treatment omission; the B3 five-kind promotion gate; the `Illustrative` markers on the §10 voice samples; persona exclusion with no sidecar re-hosting (D2); `Rulebook: v8` in the header, which is a truthful record of what the migrating session used.

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is:
- Scope atmosphere paragraph
- Distinctive traits list
- Principles items 4–5, every *UI implication*, and the pillars-surface-in-UI reading
- Capture-bound application list
- Avoid list
- Semantic color role / pairing-reason / application readings
- Shape radius-vocabulary reading
- Elevation no-shadow reading
- Font evidence-class application readings
- Family font-use boundary
- Components applicability note, kind-omission paragraph, and the three state maps
- Layout source-measurements reading
- Content copy-pattern-table reading
- Content locale-behavior instruction

Left unqualified (brand-published, source-stated, or catalog metadata — not a reconstruction-boundary exemption):
- Tier 1 surface set, `prose-derived` / `verified` / `components_harvested` bounds
- §11 dated and countable company facts, the quoted mission line, the "Brave Journey" timeline name, the three named pillars
- Primary tasks — surface-observable outcomes read off the Tier 1 set and §5's card grid, matching the approved golden samples (29cm / karrot / musinsa all carry Primary tasks unqualified)
- hex / role values; spacing, radius, type, component, breakpoint, and §14 figures
- §15 duration table, easing token names and uses, easing character notes, motion rules
- B3 promotion gate; C1/C2/C3/C4 omission sentences; B1 notes
- Governance; Named gaps inventory

Third class found without an adjacent complete limiter (fixed below):
- Scope §11 evaluative characterisations, blanket-labelled "brand-published and widely documented company facts"
- Audience corporate-site-readers reading, asserted as material "the source does establish"
- Assets catalog-logo boundary reading

Inverse error found — source-stated evidence demoted by a derived limiter (fixed below):
- Foundations Motion §15 easing character notes

## Fixes

1. `DESIGN.md` Scope — the atmosphere limiter said "The next paragraph"; the derived text is in the **same** paragraph. Changed to "The rest of this paragraph" so the limiter's referent matches its adjacency (B2a).
2. `DESIGN.md` Scope §11 history — a single lead-in labelled the whole paragraph "brand-published and widely documented company facts", covering evaluative characterisations that no brand published. Evidence class now runs to the end: the dated and countable facts, the quoted mission line, and the "Brave Journey" timeline name stay unqualified as brand-published about-page material; reading the studio as one of Korea's most recognised game IP creators, naming a "breakout moment", and reading the timeline as a series of courageous bets now carry a complete adjacent B2a. The unsourced "widely documented" was dropped from the class label. No history value was removed (B2a).
3. `DESIGN.md` Audience — limiter extended to name the corporate-site-readers reading, and "Group-level material that the source does establish" corrected: the 300 million figure is source-stated (§11); the readers of the company story and the brand resource page are read off the Tier 1 surface set under the limiter, not established by the source as a segment (B2a).
4. `DESIGN.md` Foundations Motion — "The character notes in the third column are a derived editorial implementation inference…" was false. `easeOutCirc feel; overshoots slightly, settles softly`, `fast-out, slow-in; snappy close/open`, and `spring-like deceleration` are the source's own §15 parentheticals. Replaced with a source-attribution sentence naming the three strings and their `prose-derived` class, which also matches provenance claim-ledger row for §15. Demoting source-stated evidence to "derived" is a B2 evidence-class error in the opposite direction from the usual one; the curve values and the table were untouched.
5. `DESIGN.md` Assets — attached **The catalog-boundary reading in the first bullet below is a derived editorial implementation inference from the verified surfaces; it is not Devsisters-authored or a separately published UI specification.** The slug, the `/resource` page, and the overlay gradient stay source-stated (B2a; same site as the audited LINE/naver catalog-logo boundary).
6. `provenance.md` Identity — catalog `verified` 2026-06-03 was logged as separated-only, but grep finds it in portable Scope. Recorded as a dual destination (E2a).
7. `provenance.md` Claim ledger — derived row widened to the §11 narrative characterisations and the catalog-logo boundary reading, which the ledger did not name.
8. `provenance.md` Proof notes derived inventory — scope was both too broad and too narrow. Removed "Motion easing character notes" (source-stated), added the Scope §11 characterisations, the Audience corporate-site-readers reading, and the Assets catalog-logo boundary, and added an explicit note recording the demotion that was corrected.
9. `provenance.md` Left-unqualified paragraph — §11 narrowed to the dated/countable facts, the quoted mission line, the timeline name, and the pillars; Primary tasks re-stated as surface-observable outcomes rather than "source-stated"; §15 character notes added. No "no unqualified sentence remains" claim was introduced (E2c).
10. `migration-log.md` header — "no separate-session audit was run … this directory carries no `audit-log.md`" is now false. Replaced with the actual F3 record, naming the v9 clause scope (E2).
11. `migration-log.md` header — the migrating session's DESIGN.md SHA-256 `12d243ed…4876` is withdrawn because this audit edited limiter sentences; post-audit SHA-256 `c1e4f46fe6c3ab4795af882ece8bbaaa52f37f5ed752d99c1e0ce6206075beaf` recorded, gate re-run on those bytes (E2c).
12. `migration-log.md` YAML identity row — the `#FF5F00` enumeration listed five sites and claimed an "Avoid 문맥" hit that does not exist. Grep finds twelve occurrences at ten sites; the row now lists Scope atmosphere, Distinctive traits, Capture-bound application, Foundations Semantic color, §14 retry + form-success, Orange Primary, Top Nav, Mobile Nav Drawer, Tag Badge active, and Layout full-bleed chrome (E2a).
13. `migration-log.md` YAML `omd`/`verified` row — `verified` moved to Scope as well as provenance; both destinations now logged (E2a).
14. `migration-log.md` §11 row — the mission line has three destinations (Scope history, Content & Locales, provenance Narrative); only two were logged. Added, together with the evidence-class split from fix 2 (E2a).
15. `migration-log.md` §12 row — "다섯 항목과 각 *UI implication* 보존" claimed more than the body holds. §12's own glosses for principles 1–3 (`strip away convention…`, `act with courage and intensity…`, `resonate emotionally…`) are absent from both output files (grep 0); the near-identical §11 parentheticals stand in their place. Row now states the actual disposition (E2 / E2c).
16. `migration-log.md` §15 row — "커브 성격 주석은 파생이므로 인접 완전 B2a" no longer matched the body after fix 4, and did not match the source before it. Corrected to source parentheticals (E2c).
17. `migration-log.md` F1 — limiter-site list rebuilt from grep: 17 sites, 17 occurrences of the limiter phrase (was 16/16 with the motion entry that this audit removed and without the §11, Audience-readers, and Assets entries).
18. `migration-log.md` F1 second paragraph — unqualified-class list corrected: §11 narrowed to brand-published about-page material, Primary tasks given their actual derivation basis, §15 character notes added.
19. `migration-log.md` F2 — `#FF5F00` count corrected 11 → 12 with per-site destinations; `We Create a Joyful World` (triple), `2026-06-03` (dual), and the §12 gloss grep-0 result added. Compliance is still not claimed more strongly than the body (E2c).

## Reported, not fixed

- **A5 (v9) — no copy loss.** The migration predates A5 but satisfies it. Brand-published strings survive byte-for-byte: `Dotum,돋움,굴림,arial` (DESIGN.md ×4, provenance ×2), `"세상을 즐겁게"` (×2 / ×2), `"세상을 즐겁게. 더 넓은 곳에서, 더 많은 사람들에게, 더 오랜 시간 동안."` (×1 / ×1), the English mission line (×2 / ×1). The `Illustrative` markers are intact, and no Korean string was translated in place of the original. The gate's `copy-loss` check is clean.
- **A1 (outside this audit's remit, not edited).** §12's own one-line glosses for principles 1–3 are absent from the output; the source's near-identical §11 parentheticals stand in. This is a de-duplication of two source paraphrases, not a lost figure, but it is a body value question rather than a limiter question, so it was logged (fix 15) rather than restored.
- **E1 boundary left in place.** Foundations Motion still carries "none of them is one of the four curves carried by the legacy spec template" — deletion-scope justification whose full form is already in provenance "Motion curves — retained, with the evidence boundary". Removing it would be a body deletion; the audited precedent (naver, LINE) is additive-in-body only, so it was left as the worker set it and is recorded here instead.
- **D1a risk, outside the named clause scope, untouched.** Named gaps lists "`focus-visible` visual treatments for every declared control" although the source never establishes a `focus-visible` domain; the same noun-phrase-list pattern that D1a covers. Flagged for the clause owner, not edited.
- **E3 — no gate false positive.** The gate returned `PASS`, `problems: []` both before and after these edits, and all thirteen portable-core checks pass with `reasons: []`. No value notation was altered to satisfy any check.

No token values, component tables, state applicability maps, or section structure were changed. The canonical source `web/references/devsisters/DESIGN.md` was read only.

AUDIT_DONE devsisters fixes=19
