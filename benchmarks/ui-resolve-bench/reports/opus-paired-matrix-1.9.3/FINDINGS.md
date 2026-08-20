# Opus 4.8 paired task matrix — 1.9.3 findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The matrix stopped after the second of six scheduled cells. Pricing Raw was a
valid completed run. Pricing OmD returned a final response and a product diff,
but Claude Code denied three built-in absolute-path `Edit`/`Write` calls under
`dontAsk`. The preregistered stop rule requires generation to stop on an
infrastructure-invalid cell, so onboarding and incident operations were not
run. This interrupted matrix is not a paired comparison.

The runner originally counted those permission denials as generic tool errors.
Reclassification now records two recoverable work errors and three
infrastructure tool errors. The fix adds absolute workspace forms to the
built-in file-tool allowlist and makes file-tool permission denial a fail-closed
infrastructure error.

## Preserved observations

| cell | validity | artifact | UI-Resolved | recoverable / infrastructure | first write | wall |
|---|---|---:|---:|---:|---:|---:|
| Pricing Raw | valid | 70 / 85 | no | 1 / 0 | 216,566 ms | 555,089 ms |
| Pricing OmD | invalid-infrastructure | 59 / 85 diagnostic only | no | 2 / 3 | 289,910 ms | 563,507 ms |
| Onboarding Raw / OmD | not run | — | — | — | — | — |
| Operations Raw / OmD | not run | — | — | — | — | — |

Pricing Raw changed only `index.html`, completed with exact Opus 4.8 and a final
message, and kept accessibility, responsive geometry, design grounding, and
evidence honesty. It expanded the protected FAQ surface from two disclosures
to four, so task-contract and state gates failed.

The invalid OmD artifact also expanded the FAQ surface to four and duplicated
the three protected price hooks in a comparison table, producing six hooks. It
additionally used the orange accent as 13px text on white at 3.25:1. These are
useful product diagnostics but cannot be attributed to the skill because its
implementation path was permission-degraded.

## Runner correction

Claude's built-in tools supplied absolute file paths such as
`/private/tmp/u14/p-o/index.html`. Permission rules contained `Edit(./**)` and
`Write(./**)`, while the native filesystem sandbox correctly allowed the
absolute workspace. The permission layer therefore denied the built-in calls
even though the sandbox layer was writable. The agent fell back to Bash and
delivered, masking the infrastructure defect at process level.

The replacement runner now allowlists both relative and canonical absolute
workspace forms, recognizes `Permission to use Edit/Write ... has been denied`
as infrastructure, and invalidates the normalized record when any
`infrastructure_tool_error_count` is non-zero. A read/edit/write probe must pass
before another scored workspace is prepared.

## Next gate

1. Commit the permission-policy correction.
2. Run an exact Opus low-effort probe that reads, edits, re-reads, and reports a
   marker with zero tool/sandbox/cwd errors.
3. Create a new replacement preregistration and fresh workspaces. Do not reuse
   any `/tmp/u14` product output.
4. Resume the six-cell matrix only after the probe passes.

