# Book signature installed host-policy comparison — 1.9.207

## Question

Does the explicit Codex project proof policy prevent redundant proof execution without reducing UI repair quality, compared with the same close-latch skill observed only by the benchmark controller?

## Frozen design

- Runtime/model/effort: Codex / `gpt-5.6-luna` / high
- Task: `book-signature-imposition-v0.1`
- Skill: exact detached `omd-portable-proof-close-latch-candidate` at `1d204afe…`
- Arms: controller observation vs installed project policy
- Trials: 3 paired trials, balanced serial order
- Timeout: 900 seconds per cell
- Pacing: fixed 120 seconds between cells, outside cell wall time
- Retry, fallback, repair, substitution: none
- Provider calls before clean preparation attestation: 0

Both arms are initialized as Git roots. Task, core prompt, rendered prompt, starter, DESIGN.md, installed skill tree, activation, runtime, model, effort, timeout, and trial index must match within each pair. The only permitted arm delta is `.codex/hooks.json` plus the four canonical managed proof-policy executables.

## Acceptance

1. Installed-policy UI-Resolved: 3/3 and Reliability@3: 100%.
2. Paired deterministic quality loss versus controller observation: 0.
3. Installed-policy state exists and is structurally valid in every policy cell.
4. Unblocked browser recovery, duplicate static closure, and verification-after-ready: 0 in every policy cell. Attempts denied by `PreToolUse` are reported separately and do not count as executed bypasses.
5. Controller proof behavior remains observation-only and is reported without retroactive repair.
6. Wall time, tokens, and tool activity are reported as mean, median, minimum, and maximum. They are comparative evidence, not a promotion requirement beyond the frozen gates above.

Any preparation mismatch, runtime attribution failure, timeout, infrastructure failure, or missing usage evidence freezes the matrix. No same-root retry is allowed.
