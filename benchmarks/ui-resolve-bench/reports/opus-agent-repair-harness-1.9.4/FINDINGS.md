# Opus 4.8 agent-enabled repair harness — 1.9.4 findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The native agent adapter worked, but the harness delivery failed. Claude Code
requested `omd-ux-writer` and `omd-ux-engineer` exactly once each, both inherited
the pinned Opus 4.8 parent, and neither Agent call nor any file/sandbox tool
errored. The parent nevertheless hit the frozen 900-second limit without a
final response. The normalized run is `timed_out` / `invalid-infrastructure`.

This is a valid failed internal smoke. It is not retried, resumed, or promoted.

## Runtime result

| signal | observed |
|---|---:|
| Native Agent calls | 2 |
| Requested specialists | `omd-ux-engineer`, `omd-ux-writer` |
| Agent / infrastructure / sandbox / cwd errors | 0 / 0 / 0 / 0 |
| Final response | absent |
| Wall time | 900,028ms · timeout |
| First / last product write | 682,685 / 892,319ms |
| Uncached input + output tokens | 120,726 + 87,586 |
| Cached input tokens | 1,113,689 |
| Provider price equivalent | $3.81331 |
| Artifact diagnostic | 70 / 85 · fail |

Provider price equivalent is Claude Code telemetry, not proof that a
subscription account was billed that amount.

## What worked in the partial artifact

The incomplete implementation passed every frozen responsive, keyboard,
accessibility, design-grounding, and evidence-honesty observation. Desktop,
390px, 320px, and the 200% zoom surrogate had no horizontal overflow, clipped
control, or control overlap. Billing and form states passed.

Those artifact properties do not turn the run into a valid delivery: the run
timed out, produced no final response, and failed the product contract.

## Root cause

The parent delayed the first product write until 11m23s. The writer advisory
returned after about 4m9s with roughly 16.5KB of result content; the engineer
returned after about 7m47s with roughly 29.5KB. The parent then spent another
2m39s synthesizing before its first full-file write and attempted local browser
verification near the deadline.

More importantly, the parent corrupted the protected ledger before dispatch.
Although the original task did not ask to expand FAQ cardinality, both agent
work packets changed the current two-item FAQ contract to “may add more.” The
writer was then explicitly asked for two to four new FAQs. The resulting
artifact rendered six protected FAQ buttons instead of exactly two at all four
viewports. This reproduced the 1.9.3 failure even though 1.9.4's canonical skill
says unrequested cardinality has `allowed_delta: 0`.

The failure is therefore not “specialists are unavailable.” It is a harness
control defect: the parent may relax the ledger while framing advisory work,
and the general-purpose specialist output contracts are too broad for a
time-boxed repair lane.

## Patch decision

Do not enable the repair harness by default and do not enlarge its timeout.
The next bounded patch must:

1. make protected cardinality immutable across parent→specialist handoffs unless
   the original user task explicitly asks for an add/remove operation;
2. reject advisory questions that propose new controls, rows, disclosures, or
   facts outside that immutable ledger;
3. add a bounded repair-advisory mode: at most five ranked findings and about
   600 words per specialist, limited to the named risk slice;
4. start implementation after the minimum ledger is locked, without waiting for
   general section-by-section audits;
5. keep exact Agent-call attribution and the 900-second delivery limit.

A replacement smoke requires a new implementation commit and preregistration.
One failed public-task smoke supports no harness quality, Pareto, frontier, or
superiority claim.
