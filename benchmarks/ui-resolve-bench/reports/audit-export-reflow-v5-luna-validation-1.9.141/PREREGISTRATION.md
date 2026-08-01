# Audit-export reflow v5 Luna validation — preregistration

Status: **LOCKED before preparation and provider execution**.

- Task: exact unseen `audit-export-delivery-v0.1` `0.1.0`
- Arms: exact previous canonical `omd-portable-jade` versus exact v5
  `omd-portable-reflow-v5-candidate`
- Provider scope: Codex runtime / `gpt-5.6-luna` / High, applied to both arms
- Matrix: 2 arms × 3 trials with balanced first-arm order
- Timeout: 900 seconds; globally serial; fixed 120-second inter-cell pacing
- At most one new cell per invocation; no retry, fallback, repair, replacement,
  resume after failure, or model substitution inside this root
- Attribution: Internal provider-scoped result, not merged with prior tasks

The release gate is candidate UI-Resolved 3/3 and Reliability@3 100% with no
function, accessibility, evidence, hierarchy, injected-break, atomic-context,
compact-label, single-text-scroll, generated-label, or residual-width
regression. A provider or controller failure freezes this root independently.
