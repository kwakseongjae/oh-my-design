# 1.9.31 calibration — locale concepts and wrapped-control safety

## Outcome

The provider-free calibration is complete. It generated no new model output
and does not alter the frozen 1.9.30 score or decision.

- Source commit: `0991a69`
- Evaluator schema: `0.3` unchanged
- Locale task contract: `0.2.0` → `0.3.0`
- Retained 1.9.30 artifact replay: 83/85, five of six critical gates
- Seeded invalid starter: 57/85, automated gate fails
- Provider generation: none
- 1.9.30 retroactive promotion: none

## Bounded concept oracles

The locale oracle still requires the agent, project/code source, and command
concepts in each panel. It now accepts bounded natural alternatives where the
previous exact string was not semantically unique:

- English agent: `coding agent` or `coding assistant`;
- English code source: `repository`, `project folder`, or `codebase`;
- Japanese agent: `コーディングエージェント` or
  `コーディングアシスタント`.

The change is not a free-form semantic judge. It remains a small,
task-specific regular-expression ledger. Mutation tests remove the English
code-source concept and Japanese agent concept independently; both still fail
`every_required_pattern`. Forbidden cross-locale terminology and all protected
literals remain unchanged.

## Wrapped-control safety

The task and locale benchmark activation now make the existing geometry
contract actionable without returning browser authority to the provider:

- any flex/grid control row that can wrap must be audited statically;
- vertical row gap must cover any border, underline, transform, or selection
  treatment extending to the control edge;
- adjacent hit areas must not overlap at 200% zoom;
- the external evaluator remains the only browser acceptance authority.

This is a source-review instruction, not a substitute geometry checker. The
independent evaluator still decides the four viewport gates.

## Retained-artifact replay

The exact copied 1.9.30 product artifact moved from 78/85 to 83/85 under task
contract `0.3.0`:

- locale terminology/content changed from fail to pass;
- state journey changed from fail to pass;
- the genuine 200% wrapped-tab overlap remains fail;
- responsive remains the only failed critical gate;
- task contract, accessibility, design grounding, and Evidence & Unknown
  remain pass.

This separation confirms the synonym correction did not hide the layout
defect.

## Negative replay and activation proof

The seeded invalid starter remains 57/85 and fails state journey, responsive,
accessibility, and Evidence & Unknown. It still exposes cross-locale leakage,
broken locale behavior, narrow geometry failures, and unsupported claims.

A clean provider-free prepared workspace at
`/tmp/u1931-activation-proof` confirms:

- task version `0.3.0`;
- source commit `0991a69`;
- clean, publishable source attestation;
- manifest activation equals `competitors.json`;
- the delivered prompt contains both zero-browser authority and wrapped-row
  safety instructions.

## Verification

- focused benchmark tests: 27/27
- full root tests: 217 passed / 1 conditional skip
- TypeScript: pass
- CLI build: pass
- Node syntax: pass
- JSON and diff checks: pass
- real-browser retained artifact: 83/85, layout fail retained
- real-browser seeded invalid starter: 57/85, fail as expected
- missing-concept mutations: fail as expected
- clean prepared activation: pass

## Decision

Mark 1.9.31 `calibration_complete`. A fresh exact-Opus recovery may now run
under a new preregistration and `/tmp/u1932`. It must resolve the 200% geometry
gate while preserving zero provider browser commands, zero replacement
verifiers, all five locale journeys, and Evidence & Unknown.

No superiority, locale-lift, model, skill, efficiency, or frontier claim
follows from this evaluator/task calibration.
