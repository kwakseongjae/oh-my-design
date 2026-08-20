# Book signature host-policy replacement — 1.9.208

## Verdict: execution-invalid, frozen

The checkpoint attestation fix worked and the first two cells completed. The controller arm scored 79/85 and attempted two duplicate static closures. The installed-policy arm scored 85/85, but no `.omd/proof-policy` state was created and one duplicate static closure remained unblocked.

The prepared hook files were exact and unchanged. The execution runner omitted Codex's automation-only `--dangerously-bypass-hook-trust` flag, so the project hook was not activated in the non-interactive run. This makes the policy comparison invalid rather than a negative policy result. `/tmp/u19208` is frozen after two cells and will not be resumed; neither result enters the 2×3 denominator.

## Replacement boundary

Only the installed-policy arm may receive the native hook-trust bypass flag. The controller arm must remain unchanged. Runtime attribution must record the flag, and a focused test must prove the runner argument delta before a fresh-root replacement. The task, skill, model, effort, order, pacing, and acceptance gates remain unchanged.
