# grok-4.6 Preregistration Matrix — WP2 Summary

**AC 3.1: Create the preregistration matrix config JSON for grok-4.6 wow-preview**

## Files Created

1. **`config/omd-grok46-wow-preview-v0.2.json`**
   - SHA-256: `a2d87df121590caf1dc59703981e1d3e30ed334eb3f9703a1642525794d36a7f`
   - Preregistration matrix pinning model `grok-4.6`
   - Encodes 3 tasks × 6 arms × 3 trials = 54 cells
   - Marks 6 Taste cells as preregistered-ineligible (dense-operations and five-locale-surface tasks)
   - 48 scheduled cells for execution

2. **`config/omd-grok46-wow-preview-score-gate-v0.2.json`**
   - SHA-256: `6908e6ab2be337caf54a34a1314f0dd8d3e4a19136314e7b90bdebd5e5a3a5c1`
   - Score-gate configuration with missing-data rules locked in BEFORE any cell executes
   - Wave execution plan: r1 (16 cells) → r2 (16 cells) → r3 (16 cells)
   - Capacity/usage-limit cells excluded from quality comparison
   - Second capacity event triggers epoch inconclusive
   - Minimum n=2 valid trials per arm×task axis; fewer trials = undecidable

## Matrix Structure

### Tasks (3)
- `neighborhood-library-landing` (landing)
- `cold-chain-operations` (dense-operations)
- `clinic-visit-prep-locales` (five-locale-surface)

### Arms (6)
- `model-only`
- `anthropic-frontend-design`
- `impeccable-prompt-only`
- `ui-ux-pro-max`
- `taste-eligible-scope-only` (ineligible for non-landing tasks)
- `omd-autopilot-v2`

### Trials per Task-Arm
- 3 trials per combination

## Missing-Data Rules (WP3 Requirement)

All missing-data and wave rules are locked in the score-gate config **before any cell can run**:

### Capacity Exclusion
- Status: `capacity-exhausted` and `usage-limit` cells excluded from quality denominator
- Reporting: Separate, not counted toward release decision

### Epoch Inconclusive Rule
- Threshold: Second capacity/usage-limit event triggers epoch inconclusive
- Consequence: No release gate can pass once triggered

### Minimum N Rule
- Axis: arm × task
- Minimum valid trials: 2
- Undecidable arms: excluded from release decision (not wins, not losses)

### Wave Execution (Serial)
- **r1 (Round 1)**: 16 cells, gate before r2
  - Gate conditions: capacity check, model responsiveness, quota assessment
- **r2 (Round 2)**: 16 cells, gate before r3
  - Gate conditions: capacity accumulation check, token usage verification, halt if second capacity event
- **r3 (Round 3)**: 16 cells, final wave
  - Gate conditions: all previous gates passed

## Status

- [x] Matrix encodes exactly 3 tasks × 6 arms × 3 trials (54 cells)
- [x] 6 Taste cells marked preregistered-ineligible
- [x] 48 scheduled cells (54 - 6)
- [x] Model pinned to `grok-4.6`
- [x] Provider: `grok-build-cli`
- [x] Effort: `high`
- [x] Retry/replacement/fallback budgets: 0
- [x] Missing-data rules present in score-gate
- [x] Wave execution rules present in score-gate
- [x] Capacity/usage-limit cells configured for exclusion
- [x] Files staged but not committed (per constraints)

## References

- Seed: `docs/OMD_2_0_GROK_RESTART_SEED.md`
- Provider policy: `docs/PROVIDER_ROUTING_POLICY.md`
- Related configs:
  - `omd-luna-max-wow-preview-v0.1.json` (reference implementation)
  - `omd-luna-max-wow-preview-score-gate-v0.1.json` (reference implementation)

## Next Steps (Future ACs)

- WP1: Create `run-grok.mjs` runner lane (isolation equivalent to run-codex.mjs)
- WP3: Ensure missing-data rules remain locked before any cell execution
- WP4: Rebind evaluator (model id and missing-data rules only)
- WP5: Execute order1 cells and seal evidence (user approval required)
