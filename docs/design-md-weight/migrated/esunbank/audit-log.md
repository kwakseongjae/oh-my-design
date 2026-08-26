# E.SUN Bank — F3 separate-session audit

Scope: B2·B2a and E1·E2·E2a–c of `MIGRATION_RULEBOOK.md` **v9** only. Other clauses were
read but not touched; anything found outside the two families is reported, not repaired.
Token values, component tables, state applicability, and section structure were not modified.
Auditor session is separate from the migration worker session. Date: 2026-08-26.

Every claim below was measured with grep/count against the three files before being written.
Nothing here rests on the worker's self-report.

## Fixes — B2a (portable body), 5

1. **Experience → Scope ¶1.** Two editorial readings sat in the brand-narrative paragraph with
   no adjacent complete qualification: the namesake metaphor ("aspiration, stability, and the
   Taiwanese spirit", attributed only as "the reviewed material reads as", which stops before the
   evidence class is closed) and the reputation characterization ("recognized for digital
   innovation, ESG leadership, and customer-centric service"). The ¶4 qualification is scoped to
   "the following characterization of that interface" and does not reach them. Added an adjacent
   complete qualification naming both, plus the factual parts (1992, the name 玉山, esunbank.com).
2. **Experience → Distinctive traits.** Bullet 3 carried the source's evaluative reading "the
   Traditional Chinese web-font standard for legibility" unqualified, while the migration log
   claimed the list "carries no unqualified interpretation". Added an adjacent complete
   qualification after the list and named the computed stack as the measured part.
3. **Experience → Avoid.** The list head read "These are boundary rules read off the captured
   surfaces." — derived, but the evidence class is not closed, which is the exact B2a failure mode
   ("verified surfaces에서 derived까지만"). The parallel §7 Do's list (Capture-bound application)
   already carries the complete form for the same kind of source-authored prescription. Completed
   the head: derived editorial implementation inference, not E.SUN-authored or separately published.
4. **Content & Locales → Brand-published lines.** The three verbatim lines carried the source's
   role notes ("a principled declaration", "an invitation to digital tools", "benefit + brand
   product") inside a section framed as brand-published, with the Voice-reading qualification
   scoped to what follows it. Added an adjacent complete qualification for the three role notes,
   naming the published strings and their live markers as the measured parts.
5. **Layout & Platforms → Spacing and grid.** "collapse to a single column on mobile" is an
   unobserved responsive claim (the record covers two desktop routes); its qualification sat three
   subsections away under Touch targets and collapsing, failing adjacency. Added an adjacent
   complete qualification in place and named the desktop grid as the measured part.

## Fixes — E2 / E2a / E2c (migration-log), 11

6. **`primary_color` row — destinations wrong in three ways (E2a).** Measured: 18 hex occurrences.
   The row listed *Experience Avoid* as a destination — Avoid contains 0 occurrences of `#00a19b`
   and names the color by role only. It said "six component records"; there are seven (Large Return
   CTA was missing). It omitted *Typography & Assets → Type roles* (2) and *Governance → Named
   gaps* (1) entirely. Replaced with the measured per-section breakdown that sums to 18.
7. **§14 States row — compliance claim stronger than the body (E2c).** "Disabled → the `disabled`
   reason on every declared teal control" is false: of eight declared applicability maps only four
   cite the state contract (Primary CTA, Large Return CTA, Hero Ghost Link, Text Input); Login Link,
   Top-tier Navigation, Sub-navigation, and Hero Service Item Cards give a role reason and omit the
   treatment. Corrected to the measured split. The body's applicability cells were not touched.
8. **HTML-comment row — count double-counted.** "the eleven computed observations, and the
   bgFreq/fgFreq counts" — the source comment has 11 bullets total: 9 computed observations plus the
   2 frequency lines. Corrected to nine observations and two count lines, eleven bullets in all.
9. **`homepage` row — disposition did not match.** The bare value `https://www.esunbank.com` reaches
   the provenance Identity ledger only; Surfaces / Sources / Tier 1 carry the two route URLs, not it.
   Narrowed the disposition cell and kept the route-URL dual destination in the reason column.
10. **`tokens.shadow.teal` row — value vs prose destinations conflated.** Measured 5 value
    occurrences (Elevation, Distinctive traits, Feature Card, Exchange Rate Table Card in full;
    Capture-bound application in the bare `rgb(208, 230, 230)` form). The two state rows carry the
    shadow as the source's prose, not as the value. Row now says which is which.
11. **§11 row — a deleted source sentence had no disposition (E2).** §11's closing sentence ("…warm
    enough in its teal palette to feel like a partner rather than a creditor") is absent from all
    three outputs and was not recorded anywhere. Added the 삭제 entry with its reason.
12. **§1 row — same gap.** The source's evaluative framing of the bank ("Taiwan's most
    digital-forward commercial bank", the "gravitas" and "workhorse" asides) is dropped and was
    unrecorded. Added.
13.–16. **F2 re-collation after the body edits.** The four rows whose bodies I changed were rewritten
    to match what the body now says, not what it said before the audit: §1 Key Characteristics
    (fix 2), §7 Don'ts (fix 3), §5 Layout Principles (fix 5), §10 voice samples (fix 4).

## Fixes — E2a / E2 (provenance), 4

17. **Dual-destination entry for `primary_color` was narrower than reality.** It listed six component
    records and omitted Large Return CTA, Type roles, and Governance Named gaps. Widened to the
    measured set and noted that Avoid holds the role rather than the value.
18. **Dual-destination entry for `tokens.shadow.teal`.** Same value-vs-prose correction as #10.
19. **Deletions → §9 contradicted the migration log.** Provenance said "Two §9-only facts … the 70px
    header height with its `#ffffff` background"; the log correctly says the 70px height is *not*
    §9-only because §4 Top-tier Navigation already states "in 70px header". Corrected to one §9-only
    fact (the `#ffffff` header background).
20. **Deletions — new entry** for the §1/§11 evaluative framing, matching #11 and #12.

Two grep claims written during this audit were re-measured and re-worded before being kept: the
`creditor` and superlative claims now say "0 hits in the portable body", because writing them into
the log and the ledger made "0 hits across the three outputs" false.

## Checked and found correct (measured, not accepted on report)

- **A5 strings.** All 25 counted 繁體 runs match exactly, re-measured after the body edits. Of 39
  CJK runs in the source, 8 are absent from the body — all four persona names and four cities,
  0 hits across all three outputs, matching the D2 disposition. Segment labels from the persona
  disclaimer: 0 hits.
- **§14 state table.** All 11 rows byte-identical to the source, including the two *(verified live)*
  markers and the 30px / weight 500 heading that exists in that table alone.
- **Ledger-only terms.** `live-extract`, `bgFreq`, `fgFreq`, `Tier 1`, `Tier 2` — 0 in the portable
  body. Easing curve values — 0 in the body, 3 in the provenance omission ledger; the word
  `cubic-bezier` appears 4× in the body, all as omission labels and the Named-gaps line.
- **Brand item ①, Hero Ghost Link conflict.** The record exists and is accurate in all three files:
  the component field is left unresolved with both values named, Governance Named gaps carries it,
  and provenance Freshness states the disagreement with the source footer's "Conflicts unresolved:
  none". Both values preserved, neither selected. No fix needed.
- **Brand item ②, `hangul`.** Recorded in provenance "Source-side gaps inherited, not repaired" and
  accurate: `hangul` 0 hits in the portable body, 1 in provenance; the portable Locale and Principle
  5 state CJK character density only. No fix needed.
- **Financial-domain boundary.** Holds at sentence level. Foundations "Evidence-domain boundary"
  separates published financial copy from measurement; Content & Locales labels the forbidden
  register an authoring rule that "asserts nothing about the bank's actual products, lending
  practice, or compliance position"; provenance Proof notes repeats the separation. The three
  evidence grades for brand-published copy (verbatim-and-live-marked / route labels / unmarked
  marketing line) are each stated where they are used and match the source's own markers.
- **E1 process-leak check.** `node test-v2/tools/process-leak-check.mjs` → esunbank 0 hits, before
  and after the edits.
- **Gate.** `node test-v2/tools/migrate-reference.mjs --brand esunbank --gate-only` → PASS,
  `problems: []`, before and after. Seven claim declarations present exactly once, seven sections,
  seven claim-ends.

## Out of scope — reported, not changed

- **`catalog` in the portable body (E1 judgment call).** Foundations Semantic color says "the catalog
  identity color" and Typography & Assets says "the catalog logo entry of type favicon". Both expose
  the reference catalog, a concept a reader who knows E.SUN and nothing about this pipeline does not
  have. Not changed: `process-leak-check.mjs` deliberately keeps only `catalog graph` as a literal
  term, and the same idiom appears across many sibling migrated bodies (104, 3o3, 11st, …), so
  changing esunbank alone would diverge from the corpus rather than fix it. This needs a corpus-wide
  decision, not a per-brand edit.
- **The gate does not see any of this.** `--gate-only` passed before and after all 20 fixes. It is not
  evidence of B2a, E2, or E1 conformance and should not be cited as such. No gate false positive was
  encountered, so nothing was distorted to avoid one (E3).
- **Source-side, not repaired here.** The source's superlatives ("most digital-forward", "most
  respected") are unsourced reputational claims. The migration already drops them; that disposition
  is now logged rather than silent.

AUDIT_DONE esunbank fixes=20
