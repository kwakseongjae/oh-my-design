# Environment-secret reflow v3 Luna validation — preregistration

Status: **LOCKED before preparation and provider execution**.

- Task and exact arms: identical to frozen 1.9.132 preparation
- Provider scope: Codex runtime / `gpt-5.6-luna` / High, applied to both arms
- Matrix: 2 arms × 3 trials with balanced first-arm order
- Timeout: 900 seconds; globally serial; fixed 120-second inter-cell pacing
- At most one new cell per invocation; no retry, fallback, repair, replacement,
  resume, or model substitution inside this root
- Attribution: Internal provider-scoped result, not merged with the Cursor/Grok root

The release gate remains candidate UI-Resolved 3/3 and Reliability@3 100% with
no function, accessibility, evidence, hierarchy, injected-break, or residual
mobile-width regression. A provider failure freezes this new root independently.
