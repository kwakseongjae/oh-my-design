# Studio-slot proof-budget Grok transfer — infrastructure replacement preregistration

Status: **LOCKED before preparation and provider execution**.

This is the fresh-root replacement for execution-invalid 1.9.188. No 1.9.188 artifact enters this denominator.

- Task: exact unseen `studio-slot-routing-v0.1` `0.1.0`
- Arms: exact compact packet `omd-portable-reflow-packet-candidate` versus exact proof budget `omd-portable-proof-budget-candidate`
- Provider scope: Cursor runtime / `cursor-grok-4.5-high` / High for both arms
- Matrix: 2 arms × 3 trials with the same balanced first-arm order as 1.9.188
- Timeout: 900 seconds; globally serial; fixed 120-second inter-cell pacing
- At most one new cell per invocation; no retry, fallback, repair, replacement, resume after failure, or model substitution inside this root
- Attribution: internal registered-display-name result, not merged with prior task/provider results

The quality gate is proof-budget UI-Resolved 3/3 and Reliability@3 100% with no paired loss and no function, accessibility, evidence, hierarchy, target-emphasis, protected-hook, atomic/dynamic/compact-scope regression. The efficiency gate requires non-positive mean wall-time and token deltas versus the packet arm; median is reported separately. Command traces must show browser recovery commands `0` and duplicate static-closure clusters `0`. The candidate's +5.2% skill-context cost is included rather than normalized away.

A provider, attribution, or controller failure freezes this root. If quality passes and efficiency is pass/borderline/model-sensitive, reproduce the exact matrix under Luna xhigh in a separate root and denominator. Luna never replaces a failed Grok cell.
