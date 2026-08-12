# Autopilot Luna/high smoke 1.9.878

Status: **provider-zero invalid epoch; never execute**.

This directory was created without an explicit `--experiment-id`. The
controller therefore generated a plan for the stale internal default
`autopilot-luna-high-smoke-1.9.850` even though the containing directory was
named `1.9.878`. Admission detected the identity mismatch before any provider,
model, browser, Cursor, or Claude execution.

- provider exposures: 0
- valid terminal cells: 0
- reusable as benchmark evidence: no
- successor: fresh numeric epoch `1.9.879`

The plan and receipt are retained as provider-zero diagnostic evidence. They
must not be renamed, amended into a 1.9.878 result, or executed.
