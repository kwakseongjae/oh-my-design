# 1.9.824 first-cell routing-authority failure

- Status: permanently frozen as `stopped-preregistered`
- Valid completed cells: 0 / 51
- Executed cells: 1 / 51 (`pollen-luna-medium-r1-omd`); the remaining 50 were not started
- Provider calls: one Codex CLI turn; Cursor and Claude calls: 0
- Observed usage: input 636,370; cached input 576,256; output 5,372; reasoning output 970; recorded total 641,742
- Operational result: candidate and final `index.html` were byte-identical, static preview/promote/close and local browser acceptance passed, and the objective evaluator returned 85 / 85.
- Benchmark result: `invalid-attribution`, `ui_resolved: false`; it is not a valid terminal cell and cannot be aggregated or cited as a model result.

## Root cause

The frozen catalog was emitted by client 0.147.0 (`models_cache.json` SHA `22992d6b…0fda`, Luna profile `e3f862c4…efe36`) while the independently pinned wrapper/native CLI was 0.146.1. The earlier plan allowed this as an explicitly documented mismatch without claiming compatibility.

At runtime, CLI 0.146.1 rejected the copied cache with `missing field base_instructions`, refreshed the isolated execution-home cache to client 0.146.1 (`8c449a6b…b97b`, Luna profile `a0e0699d…493d0`), and then completed the turn. Six routing checks passed; `pinned_profile_supports_effort` correctly failed because the profile actually observed in the executing home no longer matched the preregistered profile.

The provider stream did not report a model or route identity (`model_reported: null`, `provider_route: null`); Luna/medium is evidenced by the locked cell and exact CLI arguments. Weakening attribution to trust only the pre-run cache would hide the runtime refresh and is forbidden.

## Disposition

The 1.9.824 root will not be retried, resumed, or reused. Complete-block effort sweeps must reject CLI/cache client-version mismatch before provider execution. A fresh root may use the compatible 0.146.1 cache only after freezing its bytes and exact Luna/Terra/Sol profiles under a new preregistration.
