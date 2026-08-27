# Dell — B2a·E2 separate-session audit (F3)

Auditor session, not the migrating session. Rulebook v9, clauses **B2·B2a** and **E1·E2·E2a–c** only.
Source of truth for verification: `web/references/dell/DESIGN.md` (read-only, unmodified) and `spec/omd-v0.1.md`.
Scope of permitted edits: qualification sentences and ledger accuracy. Token values, component tables, state applicability, and document structure were not touched.

Gate before edits: `node migrate-reference.mjs --brand dell --gate-only` → PASS, problems `[]`.
Gate after edits: PASS, problems `[]`.

## Fixes

### B2a — qualification (`DESIGN.md`)

1. **§1 Primary tasks had no adjacent qualifier.** The four-item task list is the migration's reading — the source declares no task list anywhere, and the items are synthesised from the component records, the configurator, and the §14 state contract. Every other derived block in §1 (Scope boundary, brand-history reading, scope reading, Audience, Distinctive traits, Principles, Avoid) carried the full form; this one did not. Added the full form adjacent to the list: "Treating these four jobs as the user outcomes of this reconstruction … is a derived editorial implementation inference from the recorded sources; it is not Dell-authored or a separately published UI specification." Full-form qualifier count in the body: 18 → 19.

2. **§2 Motion, easing-removal paragraph: the evidence claim inside the qualifier was wrong and understated.** It read "two of them are byte-identical to the legacy 0.1 authoring template's example curves". Grep against `spec/omd-v0.1.md` shows **three** are byte-identical — `cubic-bezier(0.0, 0.0, 0.2, 1)` (line 266), `cubic-bezier(0.4, 0.0, 1, 1)` (267), `cubic-bezier(0.4, 0.0, 0.2, 1)` (268). `cubic-bezier(0.2, 0.0, 0, 1)` is not in that table. Corrected to "three". Curve notation left byte-exact (E3).

### E2 / ledger accuracy (`migration-log.md`)

3. **B2/B2a compliance row claimed more than the body carried (E2c).** It asserted "18 adjacent qualifiers … each using the full form" and then enumerated 19 areas, one of which — the easing-removal disposition — does not use the full form at all. Corrected to 19 full-form qualifiers, with Primary tasks added to the list and the easing-removal paragraph explicitly excluded, with its actual wording quoted ("a judgment about this reference's evidence, not a Dell statement about Dell's own motion").

4. **§15 easing row cited a line that does not contain the value (F2/E2).** It pointed `cubic-bezier(0.4, 0.0, 1, 1)` at `spec/omd-v0.1.md:262`; line 262 is inside the template's prose warning, and the curve rows are at 266–269. It also recorded one template match where there are three. Both corrected, with the per-curve line refs.

5. **YAML `logo` row claimed two destinations where there is one (E2a, in the overstating direction).** `logo.type: simpleicons` / `slug: "dell"` is carried only in provenance Identity. Grep for `simpleicons` in `DESIGN.md`: zero hits. §3 Assets carries a non-promotion *disclosure about* the record, not the record. Row rewritten to say one destination plus a disclosure.

6. **§13 Personas row claimed "no … behaviour is promoted" (E2c).** `DESIGN.md` §7 Named gaps names a `business-portal` surface; `business portal` occurs in the source **only** inside the §13 Diane sentence. The row can no longer make that claim, so it now records the exception and flags it for the D1a/D2 lane. The body was left unmodified — body scope wording is outside this audit's mandate.

7. **D2 compliance row** carried the same unqualified claim; same caveat added, cross-referenced to the §13 row.

8. **Header** now points to this audit log (F3), so a reader of the migration log knows the rows were re-verified by a separate session.

### E1 / provenance scope (`provenance.md`)

9. **The derived scope was recorded narrower than reality.** "Evidence class per portable claim" carried a single editorial row — "'The page is the order desk', build-to-order as design DNA, tone characterisation, density trade | Editorial reading, disclosed as such by the source" — while the portable body actually carries 19 adjacent editorial-inference qualifiers, most of them the *migration's* readings, which the source's footer note does not disclose (that note gives two examples). Split into three rows: source-disclosed editorial claims; the migration's own editorial readings, enumerated; and the easing removal as a migration disposition with its own wording.

10. **Omission ledger easing rows** corrected to match the grep result — three byte-identical template curves with per-line refs (266/267/268), `ease-emphasized` marked as not present in the template so template copying is not established for it. Previous text cited `:262` for one curve and called another merely "of the same template family".

11. **Proof notes component arithmetic did not reconcile.** "16 component records … 11 component entries (five button records collapse into one Button …)" omits the four `badge` records collapsing into one Badge, so 16 → 11 did not follow. Rewritten: 16 ledger records → nine body entries after the button and badge collapses, plus Configuration Card and Spec Table (ledger-absent) = 11.

## Brand-specific check requested: the evidence-grade self-contradiction

Confirmed present and consistent with the ledger.

- `provenance.md` → **Evidence-class conflict** quotes both sides byte-exactly: the §4 footer `**Tier 1 sources:** https://www.dell.com (live production site, verified via live DOM getComputedStyle).` (source line 399) and the footer sources block's "exact internal token hexes were image/JS-rendered and not text-extractable, so neutral/semantic scales here are reasoned, brand-consistent values anchored to the verified Dell Blue and white-dominant commerce aesthetic" (source lines 623–625). Both match the source.
- Freshness says "Conflicts unresolved: one, recorded below under **Evidence-class conflict**" — consistent.
- The portable body does front the weaker grade: §1 Scope's "Evidence class, stated before anything below is read as a Dell-published fact" paragraph records the live-DOM sentence as the source's own claim, then states the reasoned/`prose-derived` class and extends it to type metrics, component values, product states, and motion durations. §3 Font evidence repeats the split per evidence class. No value was deleted on account of the conflict.
- The migration-log row for the `**Tier 1 sources:**` line records both destinations (provenance conflict record + §1 Scope and §3 Font evidence); both verified by grep.

## E3 — gate behaviour

No false positive found. The gate returned PASS with an empty problem list both before and after these edits, and nothing in the three files was re-notated to dodge a check. The two hex-adjacent edits in this audit (the easing curve count, the curve line refs) preserve byte-exact `cubic-bezier(...)` notation.

## Out of scope, observed, not corrected

Recorded for the lanes that own them; this audit did not act on them.

- **D1a/D2** — §7 Named gaps lists `Authenticated account, business-portal, quote, service-tag, and Alienware-specific surfaces`. `authenticated` occurs zero times in the source; `business portal` occurs only inside the §13 Diane persona sentence. (`quote`, `service tag`, and `Alienware` do occur outside §13 and are fine.) This is the databricks/datadog Named-gaps pattern named in D1a.
- **A-family** — several source characterisations are carried nowhere in the migrated body and are not in the omission ledger: the Roboto choice rationale ("Google's open-source neo-grotesque", geometric clarity, screen legibility, zero licensing friction, "mechanical-but-friendly letterforms"), the "professional yet approachable" / "professional-but-approachable" brand positioning, "reliability without coldness", "planetary scale", and the `$500` figure in §11's student example (migrated §1 Audience drops the amount). The omission ledger's closing "Nothing else was dropped" reads only against values and blocks, so it was left as written.

AUDIT_DONE dell fixes=11
