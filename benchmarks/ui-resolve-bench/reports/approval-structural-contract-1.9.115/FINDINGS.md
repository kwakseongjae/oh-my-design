# Approval structural contract migration — 1.9.115

Status: **ACCEPTED; provider calls 0**.

## Change

`approval-v1` tasks can no longer omit structural quality checks. Sandbox
preparation now fails closed unless the task contract:

- registers text geometry over approval rows and the visible decision context;
- keeps short atomic text to a one-line budget;
- registers decision hierarchy at every task viewport;
- protects context, target, evidence, state, and action exactly once; and
- separates the final action by at least 8px.

The payout and deletion tasks moved from `0.1.0` to `0.2.0`. Historical
`0.1.0` run records and owner judgments remain unchanged.

## Starter acceptance

| Task | Fresh root | Score | Critical gates | Text geometry | Decision hierarchy |
|---|---|---:|---:|---:|---:|
| payout approval `0.2.0` | `/tmp/u19115-payout-starter` | 85/85 | 6/6 | 12/12 | 12/12 |
| deletion approval `0.2.0` | `/tmp/u19115-deletion-starter` | 85/85 | 6/6 | 12/12 | 12/12 |

Both mobile screenshots were inspected. Evidence controls remain on one line,
status markers are child elements rather than generated labels, metadata uses
label-above-value flow, and the selected target→evidence→state→action boundary
is visible without warning theatre.

## Locked hashes

- payout task: `73dc8d54801f760db88bfa16a35b48be95c5eaac54284e80f964b3c8d31e24ca`
- payout prompt: `8da01eb6b2e73b9c8cf66227448072f845fbd6c13caebf5035d6dd32420ef9f9`
- payout starter HTML: `ae88bef9322d6fc793d3e5723d9e2813ddfa7bdf621dfe00c882208a5416c456`
- payout score: `b88f4124a022f56611f05a4dae015a7777b330f60afc3bde7180512178742807`
- deletion task: `a90ad373312cf553e2b312c7eff75e968dbc8a0620d16547976c78d65290749d`
- deletion prompt: `040e7e5953096ca8c871d3433dafe52ecd163d4282cad2f9bf6738176cc166fc`
- deletion starter HTML: `9ce8f91fbb0410f7f27627c0ad3e3ce46b6a9cf404999ea0c0203aa7ef7d19d4`
- deletion score: `d783d893417f0c37d492658e548e16fdfc7a4eb361148e880c12f3fc6c4628a3`

This migration changes future task eligibility, not historical benchmark
scores, model rankings, or the canonical `omd-apply` skill.
