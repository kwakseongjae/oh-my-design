# Cursor Agent Skill channel 1.9.43 — acceptance contract

Status: deterministic product-capability contract.

This contract was written after the first implementation pass and before final
packaging. It is not an independent statistical preregistration and authorizes
no provider generation.

## Hypothesis

On Cursor 2.4+, the default project install can expose OmD as native Agent
Skills without weakening DESIGN.md precedence or falsely claiming sub-agent
and hook parity.

## Frozen acceptance

1. `--agent cursor --all` installs exactly 19 compatible skills under
   `.cursor/skills/<name>/SKILL.md`.
2. Cursor skill frontmatter uses the hyphenated `omd-*` names that Cursor
   discovers, and the managed ownership marker remains after frontmatter.
3. `claude-design`, OmD sub-agent definitions, Claude hooks, settings, and a
   duplicate Cursor data tree are absent.
4. `.cursor/rules/omd-design.mdc` is a small `alwaysApply: true` bootstrap with
   the `omd:cursor-channel=skills` marker, DESIGN.md precedence, and
   unknown-means-absent behavior.
5. The shared 440-reference catalog remains under `.claude/data`.
6. `doctor` reports 19 skills and ready state, detects a missing or malformed
   skill, and points repair at Cursor only.
7. `--cursor-rule-only` installs the explicit compatibility mode with zero
   Cursor skills, `alwaysApply: false`, and a distinct channel marker.
8. The CLI summary reports actual Cursor capability counts: 19 skills,
   0 sub-agents, and 0 hooks.
9. Root TypeScript/build, focused Cursor installer/doctor/runtime/export tests,
   and all web type/tests pass.

## Guardrails

- No model or provider call is part of this patch.
- No Cursor Auto/Router condition is introduced.
- No benchmark score, winner, Skill Lift, or runtime-quality claim follows
  from installation success.
- The frozen Raw DESIGN.md control from 1.9.42 is unchanged.
- Live automatic discovery and slash invocation are a separate external
  transmission canary before the 1.9.44 provider experiment.
