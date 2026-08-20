# Cursor/GLM 5.2 multi-task Skill Lift Preview — 1.9.62 findings

Status: **complete; candidate rejected on zero-loss and accessibility gates**.

## Outcome

All six GLM 5.2 High cells completed with the exact requested display name,
usage evidence, exit 0, a final response, and an `index.html`-only product
diff. Evidence & Unknown passed 6/6. The checkpoint controller retained five
checkpoints and five accepted cooldowns without replaying a completed cell,
evaluator, exporter, or cooldown.

| Task | Raw | OmD | Delta |
|---|---:|---:|---:|
| Onboarding setup | 83 | 85 | +2 |
| Incident operations | 81 | 77 | -4 |
| Five-locale CLI handoff | 79 | 85 | +6 |

Raw median was 81/85 and OmD median was 85/85. The paired median delta was
+2, with two wins and one loss. The preregistered gate nevertheless rejects
the candidate because every paired OmD score had to be at least Raw and OmD
had to pass accessibility on 3/3 tasks. OmD passed all critical gates on 2/3
tasks.

## Incident loss

The incident OmD artifact added a focusable `Skip to operations` link using a
permanently clipped `.sr-only` treatment. It never became onscreen when
focused. At the 200% zoom surrogate its measured box was `left: -2`,
`right: 0`, `top: -2`, `bottom: 0`; keyboard traversal also recorded that
control outside the viewport on every evaluated viewport.

That single introduced control caused both the zoom geometry and keyboard
traversal critical gates to fail. Raw did not add the link and passed those
gates. This is a candidate artifact defect, not an evaluator false negative.

The installed OmD skill already requires `allowed_delta: 0` for unrequested
controls, checks clipped controls at 320px and 200% zoom, and explicitly
requires focusable skip/navigation controls to become visible and remain
in-view on keyboard focus. The artifact violated those existing ledger and
acceptance rules. This is an execution/verification compliance failure, not a
missing closure.

## Execution evidence

- cells: 6/6 complete; checkpoints: 5; accepted waits: 5/5;
- wait wall times: 120,009 / 120,009 / 120,004 / 120,001 / 120,010 ms;
- maximum wall/monotonic clock disagreement: 4.44 ms;
- display name and provider usage evidence: 6/6 `GLM 5.2 High`;
- Evidence & Unknown: 6/6;
- task-owned `index.html`-only product diff: 6/6;
- OmD accessibility and all-critical pass: 2/3;
- matrix execution-state SHA:
  `d30b19d1cbf8e77e07c2139822e3077382f12042e9f6d07aceaa071c52b9fc50`.

For descriptive context only, median provider wall time was 165,074 ms Raw
and 112,071 ms OmD (-32.1%); median non-cached tokens were 33,477 Raw and
46,295 OmD (+38.3%). One trial per task, runtime-native effort, and
display-name-only attribution prohibit an efficiency or Pareto claim.

## Decision boundary

The complete GLM Preview is rejected against its bounded Skill Lift
hypothesis. It is still useful Internal model×runtime evidence and a concrete
execution-compliance and verification input.

All six records remain public-attribution-invalid because Cursor reports a
display name rather than an immutable model ID. No reliability, confidence
interval, public model ranking, cross-model superiority, efficiency, or
frontier claim follows.
