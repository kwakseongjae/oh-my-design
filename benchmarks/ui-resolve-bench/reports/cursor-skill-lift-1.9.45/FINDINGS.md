# Cursor fixed-model Skill Lift — 1.9.45 findings

Status: **execution complete; bounded candidate rejected**.

## Outcome

Cursor Agent completed all nine serial Grok 4.5 High cells without retry,
fallback, timeout, manual product edits, Auto/Router, or provider effort
arguments. Every run changed only `index.html`, preserved Evidence & Unknown,
and reported the expected `Cursor Grok 4.5 High` display name.

Cursor does not expose an immutable model identifier, so all results remain
Internal diagnostics and public aggregation correctly retains zero valid rows.

| Condition | Frozen scores | Automated gate | Median wall | Median non-cached tokens |
|---|---:|---:|---:|---:|
| No skill / no DESIGN.md | 53, 51, 65 / 85 | 0/3 | 273,711 ms | 75,868 |
| Raw DESIGN.md | 81, 79, 85 / 85 | 1/3 | 261,879 ms | 56,405 |
| OmD apply skill | 85, 85, 83 / 85 | 2/3 | 275,592 ms | 72,052 |

Raw → OmD paired objective deltas were `+4`, `+6`, and `-2`: two wins, no
ties, and one loss. Median score improved from 81 to 85, but OmD failed the
preregistered 3/3 UI-Resolved, zero-loss, and accessibility 3/3 gates. It is
therefore not promoted.

## Failure diagnosis

The Raw failures remained real:

- trial 1 used `#E7683D` as 13px text on `#F7F5EF`, producing 2.98:1 contrast;
- trial 2 left a horizontally scrollable comparison region without a keyboard
  focus target or focus-visible treatment;
- trial 3 passed all automated gates.

OmD trials 1 and 2 passed 85/85. Trial 3 added `tabindex="0"`,
`role="region"`, a label, and visible focus to the comparison scroller. Axe
accepted that remedy. At the 200% surrogate the scroller was taller than the
viewport, and schema `0.4` rejected it because the complete element rectangle
could not fit in the viewport even though the focused region was visible.

That last rule is an evaluator false negative. WCAG 2.4.11 requires a focused
component not to be entirely hidden; complete visibility belongs to the
enhanced criterion. Deque also recommends a focusable scroll region when it
has no focusable descendants.

## Efficiency boundary

OmD's median wall time was 5.2% above Raw and its median non-cached token count
was 27.7% higher. Cached input is recorded separately. Three trials on one task
cannot support an efficiency or Pareto claim.

## Reporting boundary

The public aggregator initially crashed when every row was excluded for
invalid attribution. It now emits a valid zero-row summary and skips empty
paired candidates. This does not make Cursor display-name attribution public.

The schema `0.4` result stays frozen. 1.9.46 calibrates the focus-visibility
oracle with one retained positive and one retained real-defect control, then a
fresh schema `0.5` matrix is required.
