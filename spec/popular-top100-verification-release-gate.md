# Popular Top 100 verification and release gate

Status: active execution plan as of 2026-07-13.

## Goal

Do not begin the main deployment-preparation phase until the 100 most-selected
references are all Verified v2. The frozen starting cohort comes from the last
complete Upstash snapshot (`2026-07-10T08:51:15.637Z`, 390 references). Refresh
the snapshot before final release review and add any new Top 100 entrant to the
end of the verification queue before declaring the gate complete.

Current baseline: 21/100 popular references are Verified v2, leaving 79. The
fleet has 22 Verified v2 because Bilibili is outside the popularity Top 100;
Bilibili separately requires an audit because its prior promotion used only one
captured surface.

## Ordering

Popularity rank is cumulative `reference_select` count. Qualified actions
(`download + copy + install`) are recorded as decision context and break an
exact select-count tie. No model may reorder the cohort by familiarity or ease.

The generated source of truth is:

- `artifacts/reverify/popular-top100-plan.json`
- `artifacts/reverify/popular-top100-plan.md`

## One-reference execution loop

Process exactly one reference at a time in generated `sequence` order.

1. Re-capture official product, marketing, docs/design, and font/license
   surfaces with the deterministic collector.
2. If deterministic capture leaves an SPA, overlay, responsive, interaction,
   font, or component conflict, use browser-harness only for that exception.
3. Require at least 2 useful surfaces, coverage 60, and 1 observed component
   before model reconcile. Thin evidence remains held; Terra must not fill it.
4. Run `gpt-5.6-terra` with `high` to gather official context and Tier 2 sources,
   separate evidence domains, reconcile conflicts, and propose canonical edits.
5. Apply `unknown means absent` at the smallest field boundary.
6. Run the per-reference deterministic acceptance. A failed reference stays in
   place until repaired; it is not silently skipped for an easier lower rank.
7. Record outcome and proceed to the next sequence number.

Every 10 successful promotions, regenerate registry/quality/AST and run the
full Web tests, typecheck, and Home → `/builder` desktop + 390px acceptance for
those 10 references. Execution within each checkpoint remains sequential.

## Release gate

Main deployment preparation starts only when all conditions hold:

- refreshed popularity Top 100 is 100/100 Verified v2;
- no reference is publicly marked Verified while violating the two-surface
  contract, including resolution of the Bilibili audit;
- every Top 100 reference passes Home → `/builder` preview and canonical
  copy/download parity without fallback values;
- fleet quality, registry, AST, tests, typecheck, and production build are green;
- all holds have been resolved rather than replaced by lower-ranked references.

After the gate passes, freeze reference content for the release candidate and
begin deployment preparation: production build, environment/analytics checks,
sitemap/SEO verification, migration review, smoke matrix, release notes, and
rollback checklist.
