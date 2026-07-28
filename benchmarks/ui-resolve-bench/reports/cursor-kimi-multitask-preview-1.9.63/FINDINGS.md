# Cursor/Kimi K3 multi-task Skill Lift Preview replacement — 1.9.63 findings

Status: **execution interrupted by user during the first cell; root frozen**.

## Outcome

The fresh matrix prepared all six locked workspaces, then started the first
`onboarding-t1-raw` provider cell. The user requested an immediate stop while
that cell was still running. The controller process and its Cursor child no
longer remain, and the cross-root provider lock has no owner.

No cell reached a valid provider result, evaluator score, exported run record,
or checkpoint. There are no completed pairs and no retained pacing wait.

## Interrupted artifact

The first cell changed `index.html` and created `.test-drive.py`,
`.test-shot.py`, and a zero-byte `.chrome-log.txt` before its remaining child
process was explicitly terminated. Its product tree therefore changed from
the prepared attestation
`bf9dc31e3be9f44364798c1f7c32914bd85d87ab5de6deb30866911de9b8e47a`
to
`aff5d7e1b27f15200a5c0bb8289b2e8a3c03005128b62a2fdd3c22b45181e640`.

The controller did not receive a terminal provider result, usage record, final
message, evaluator output, score, or exported record. The retained execution
state still says `running` with zero completed cells, and the root lease is
intentionally preserved as forensic evidence rather than deleted.

Execution-state SHA-256 at freeze:
`c2867998927383a494731fa3f74af64faf4dce5783ae4bf359fdad0e4a46b07f`.

## Decision boundary

This user-interrupted matrix is execution-invalid and entirely outside Skill
Lift, reliability, efficiency, model-comparison, and frontier denominators.
The partial product is not evaluated and is not a candidate result.

Do not resume `/tmp/u1963`, delete its retained lease, score its partial
artifact, replace the interrupted cell, or combine it with 1.9.60. A future
Kimi provider rerun requires a newly preregistered root. Subsequent local work
resumes with the user-selected `sol medium` lane.
