# Environment-secret reflow v3 validation — preregistration

Status: **LOCKED before preparation and provider execution**.

- Task: `environment-secret-mapping-v0.1` `0.1.0`
- Previous: `omd-portable-jade`, commit `f013dbd9f94a1e018f7cf8a4e500207fe982b00a`
- Candidate: `omd-portable-reflow-v3-candidate`, commit `b85ad330b63d502ecabc6741c0a7c599da6d2f58`
- Matrix: 2 arms × 3 trials, previous-first in trials 1 and 3, candidate-first in trial 2
- Runtime/model: Cursor / Grok 4.5 High, effort high, 900 seconds
- Execution: globally serial, fixed 120-second inter-cell pacing, at most one new cell per invocation
- No retry, fallback, repair, replacement, resume, or model substitution
- Attribution: Internal registered display name only

The primary release gate is candidate UI-Resolved 3/3 and Reliability@3 100%,
with injected break opportunities, residual mobile column widths, text geometry,
functionality, accessibility, evidence honesty, and decision hierarchy all
green. Any provider/infrastructure failure freezes the root and stops remaining
cells under the preregistered policy. The old frozen root is never resumed.
