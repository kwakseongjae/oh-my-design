# Opus 4.8 Transfer Matrix — 1.9.3 replacement calibration

Locked before generation on 2026-07-22.

## Question

After the Claude Code runtime and sandbox-policy corrections, can the raw
DESIGN.md and OmD portable-skill conditions both complete the same frozen UI
task cleanly? If so, does the 1.9.3 bounded-verification and guaranteed-delivery
contract let OmD preserve or improve the deterministic outcome without the
timeout that invalidated 1.9.2?

This is a **replacement Transfer Matrix calibration**, not a ranking or a skill
superiority claim. The earlier 1.9.2 artifacts remain invalid-infrastructure.

## Frozen cell

- Benchmark family: `factorial` (model × agent runtime × skill condition)
- Task: `incident-operations-v0.1`
- Task contract: `0.3.0`
- Conditions, in execution order:
  1. `raw-design-md`
  2. `omd-portable`
- Trials per condition: 1
- Scheduled runs: 2
- Output roots: `/tmp/u13/r1`, then `/tmp/u13/o1`
- Agent runtime: Claude Code `2.1.217`
- Model: exact `claude-opus-4-8` (moving aliases forbidden)
- Effort: `xhigh`
- Timeout: 900 seconds per run
- Authentication: first-party Claude subscription OAuth; provider/API-key
  shadowing forbidden
- Candidate implementation commit: `9b844c8`

## Variables and isolation

- Measurement prerequisite: corrected Claude runtime and runner policy. The
  post-login read-only probe must show zero tool, sandbox, and cwd errors before
  either scored workspace is prepared.
- Product variable: only the OmD condition receives the portable `omd:apply`
  skill, including its bounded verification, repeated-infrastructure-failure
  stop rule, 15% delivery reserve, and implemented/verified/unresolved handoff.
- Prepare both workspaces from one clean source commit with
  `--runtime claude-code`.
- Load only project setting sources. Raw and OmD use identical model, effort,
  prompt, starter, DESIGN.md, native sandbox, permissions, tools, MCP/Chrome
  disabling, and session-persistence settings.
- Network tools, dependency installation, hooks, and unsandboxed retries are
  forbidden. OmD is copied into `.claude/skills/omd-apply`; no installer runs.
- Generation is sequential, raw then OmD. The deterministic evaluator runs
  after generation and cannot influence either model response.

## Acceptance and reporting

Each scheduled run stays in the denominator. A run is valid only when:

1. auth and exact-model preflight pass;
2. process and child exit zero without timeout;
3. tool, sandbox, and cwd error counts are all zero;
4. a final delivery message is present;
5. the product-only diff is recorded;
6. the unchanged task evaluator emits an objective score; and
7. the normalized run record exports without schema loss.

Report UI-Resolved, deterministic objective score, wall time, full
agent-runtime model usage, provider price equivalent when returned, and product
diff. Provider price equivalent is telemetry, not subscription billing. With
one task and one trial, report only a calibration observation: no lift,
generality, frontier, or superiority claim is permitted.
