# Research-sample reflow v10 Grok validation — 1.9.162

## Decision

Reject v10 for promotion. All six cells are valid, but v10 tied the previous canonical arm in every pair, resolved zero of three trials, and failed the preregistered Reliability@3 gate.

## Result

| Arm | Trial scores | UI-Resolved | Reliability@3 | Median | Mean |
| --- | --- | ---: | ---: | ---: | ---: |
| previous canonical | 79, 79, 79 | 0/3 | 0% | 79 | 79 |
| reflow v10 | 79, 79, 79 | 0/3 | 0% | 79 | 79 |

- paired v10 W/T/L: `0/3/0`
- mean wall time: previous `192,517 ms`; v10 `194,751 ms` (descriptive only)
- mean reported non-cached tokens: previous `86,769`; v10 `97,873` (descriptive only)
- evidence honesty: `6/6` green
- function, state, keyboard, accessibility, target hierarchy, protected hooks, overflow, clipping, and overlap: `6/6` green
- provider, timeout, quota, retry, fallback, repair, replacement, and model-substitution failures: `0`
- requested/reported model: `cursor-grok-4.5-high` / `Cursor Grok 4.5 High`, `6/6`

## What v10 changed

The relational control-copy rule had a bounded positive effect in one trial. v10 trial 1 applied the declared 12/17 label role to the `<span>` naming the field-note toggle. Compared with its paired previous run, it removed the evidence and compact-control wraps at 320px and retained only the display heading there. At the 200% surrogate the same control copy still wrapped.

That behavior was not reliable. v10 trial 2 left the compact control copy at body size and regressed the evidence line at 200%. v10 trial 3 kept evidence in the declared metadata role, but still wrapped evidence at 320px and 200% because it retained too much lateral chrome; the compact control copy also wrapped at 200%. The candidate therefore did not convert the new relationship classification into a repeatable end-to-end closure.

## Repeated residual and benchmark validity note

Every cell failed the same `short_atomic_text_within_line_budget` aggregate at all three reflow viewports. The oracle currently scans every text node below 41 characters inside the complete decision-context root. This includes the 40-character hero heading `Route supplied field samples for review.` even though the task contract separately declares 34/38 mobile hero type and only requires atomic identifiers, short labels, and controls to stay on one line.

That heading takes two or three lines in all six cells and alone prevents UI-Resolved status, including runs where all true atomic identifiers and compact control labels pass. Treating an ordinary display heading as a “short atomic text” is a scope mismatch between the task prose and deterministic oracle. We must not teach the skill to shrink, nowrap, or rewrite headings merely to game this evaluator.

The genuine residual is narrower: evidence/supplied-count copy and relational compact-control copy still wrap inconsistently at 320px or the 200% surrogate because the models do not reliably complete the declared type-role plus ancestor inline-size ledger before claiming verification.

## Next bounded work

Do not add the research-sample string, selector, filename, token value, or a task-specific CSS recipe.

1. Repair the benchmark contract first: text-geometry oracles must name atomic/compact scopes separately from the hierarchy context root, or support explicit exclusions for display headings and paragraph prose. Freeze this task as seen; do not rescore or use it for promotion after the oracle fix.
2. Add a provider-free contract fixture proving that an allowed multiline display heading does not fail the atomic-text gate while identifiers, metadata, and compact control copy still do.
3. Refine the existing skill closure into an auditable outcome table: each relevant copy item must record semantic role, declared type role, measured/derived required width, available width at every required viewport, and final line count. A prose claim such as “320px verified” is not closure evidence.
4. Require unresolved or unmeasured rows to remain explicitly unresolved; do not allow the model to report verification success from viewport width or page overflow alone.
5. Commit this bounded v11 contract before creating another unseen non-approval task, then run a fresh 2×3 comparison. Promotion still requires UI-Resolved 3/3 and Reliability@3 100%.
