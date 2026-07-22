# Opus 4.8 Transfer Matrix — runner calibration preregistration

Locked before generation on 2026-07-22.

## Question

Can the subscription-backed Claude Code print runner execute, attribute,
evaluate, and export the same frozen UI task under raw DESIGN.md and OmD
portable-skill conditions without runtime contamination?

This is a **Transfer Matrix runtime calibration**, not a ranking or a skill
superiority test.

## Frozen cell

- Benchmark family: `factorial` (model × agent runtime × skill condition)
- Task: `incident-operations-v0.1`
- Task contract: `0.3.0`
- Conditions, in execution order:
  1. `raw-design-md`
  2. `omd-portable`
- Trials per condition: 1
- Scheduled runs: 2
- Agent runtime: Claude Code `2.1.212`
- Model: exact `claude-opus-4-8` (moving aliases forbidden)
- Effort: `xhigh`
- Authentication: first-party Claude subscription OAuth; provider/API-key
  shadowing forbidden
- Candidate source parent: `422f983`

## Isolation contract

- Prepare with `--runtime claude-code` from a clean source tree.
- Load only project setting sources.
- Raw and OmD use the same native sandbox, permission, MCP, Chrome, tool, and
  session-persistence configuration.
- Network tools are absent. Native Bash sandbox must be available and its
  unsandboxed escape hatch must be disabled.
- OmD is copied from the canonical source into `.claude/skills/omd-apply`;
  installers and hooks are not executed.
- The local deterministic evaluator runs only after both generation runs.

## Acceptance

Each scheduled run stays in the denominator. A run is valid only when:

1. auth/model preflight passes;
2. Claude exits normally without timeout;
3. result JSON reports the pinned Opus model path;
4. source attribution is clean;
5. product-only diff is recorded;
6. the unchanged task evaluator emits a score; and
7. the normalized run record exports without schema loss.

Report UI-Resolved, deterministic objective score, wall time, full agent-runtime
model usage, provider cost equivalent when returned, and product diff. Do not
extrapolate from one task or one trial, and do not merge these observations into
the Terra Skill Lift estimate.
