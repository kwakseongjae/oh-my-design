# Stage-power proof close-latch Grok transfer — preregistration

Status: **LOCKED before preparation and provider execution**.

- Task: exact unseen `stage-power-patch-routing-v0.1` `0.1.0`
- Arms: exact proof budget `omd-portable-proof-budget-candidate` versus exact revision-bound close latch `omd-portable-proof-close-latch-candidate`
- Provider scope: Cursor runtime / `cursor-grok-4.5-high` / High for both arms
- Matrix: 2 arms × 3 trials; budget-first in trials 1 and 3, latch-first in trial 2
- Timeout: 900 seconds; globally serial; fixed 120-second inter-cell pacing
- At most one new cell per invocation; no retry, fallback, repair, replacement, resume after failure, or model substitution inside this root
- Attribution: internal registered-display-name result, not merged with prior task/provider results

The quality gate is close-latch UI-Resolved 3/3 and Reliability@3 100% with zero paired loss and no function, accessibility, evidence, hierarchy, target-emphasis, protected-hook, atomic/dynamic/compact-scope regression. Wall time, reported tokens, and command executions are reported against the proof-budget arm with mean, median, min, max, and paired deltas. The compliance gate requires browser recovery commands `0`, duplicate static-closure clusters `0`, and verification-after-ready commands `0` in every close-latch trial. The candidate's additional context is included rather than normalized away.

A provider, attribution, or controller failure freezes this root. If quality passes and execution compliance passes, is borderline, or remains model-sensitive, reproduce the exact matrix under Luna xhigh in a separate root and denominator. Luna never replaces a failed Grok cell.
