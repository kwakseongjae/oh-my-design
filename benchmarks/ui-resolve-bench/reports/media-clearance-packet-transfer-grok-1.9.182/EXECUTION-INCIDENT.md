# Execution incident

Status: **FROZEN — infrastructure interruption before a valid first-cell result**.

- The first bounded invocation acquired the root lease and marked `grok-media-t1-previous` running.
- The controller process then terminated before `run-result.json`, provider usage, final output, score, run record, or checkpoint was written.
- No cell from `/tmp/u19182` is eligible for scoring or aggregation.
- The stale lease, running execution state, and untouched workspaces are retained as forensic evidence.
- Same-root resume, lease deletion, interrupted-cell retry, artifact repair, model substitution, and reuse in a later denominator are prohibited.
- The exact comparison is re-preregistered under 1.9.183 in a fresh root. This is an infrastructure replacement, not an additional trial.

