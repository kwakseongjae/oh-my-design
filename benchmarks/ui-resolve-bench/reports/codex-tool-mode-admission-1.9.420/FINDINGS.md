# Codex tool-mode admission — 1.9.420

Installed proof-policy enforcement is now admitted only when the selected Codex model profile declares a directly interceptable `function` tool mode. `code_mode_only`, an absent model profile, an invalid cache, or a missing tool mode fails before browser or provider execution. The selected profile, tool mode, model-cache hash, fetch time, and client version are retained in runtime attribution.

This closes the false-assurance path exposed by 1.9.419. The current cached Sol, Terra, and Luna profiles all declare `code_mode_only`; those models may still be evaluated through post-run controller observation, but they cannot be reported as host-enforced. The frozen 1.9.417 plan now deterministically stops at preflight with `codex-installed-policy-tool-mode-uninterceptable:gpt-5.6-luna:code_mode_only` and spends no additional provider tokens.

Validation is 70/70 focused and 338 benchmark tests green with one intentional skip. The only two red tests are the unchanged external `taste-skill` and `ui-ux-pro-max` vendor directories lacking Git roots. TypeScript and diff checks pass.

Primary implementation evidence for the runtime distinction is Codex 0.144.1 itself: `ExecCommandHandler` serializes direct shell hooks as `Bash`, while `CodeModeExecuteHandler` is a separate custom-tool boundary and delegates nested tools through the code-mode service. The benchmark no longer extrapolates a direct-shell smoke across that boundary.
