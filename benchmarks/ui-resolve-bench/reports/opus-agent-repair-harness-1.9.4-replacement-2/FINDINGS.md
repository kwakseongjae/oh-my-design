# Opus 4.8 model-pinned repair harness — 1.9.4 replacement 2 findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The fresh all-Opus Harness Track cell completed normally and is valid under the
frozen internal protocol. The artifact passed every deterministic product gate
at 85/85. Both required specialist calls requested `model: opus`, neither call
errored, and runtime telemetry contains Opus 4.8 plus Claude Code's small
internal Haiku helper allocation. It contains no Sonnet usage.

This closes the local subscription-backed parent-plus-specialist execution path.
It does **not** establish reliability, Pareto efficiency, frontier status, or
superiority: this is one public development task and one trial without blinded
practitioner review.

## Runtime and product result

| signal | observed |
|---|---:|
| Parent model | exact `claude-opus-4-8` |
| Specialist Agent calls | 2 · no errors |
| Specialist Agent selectors | Opus / Opus |
| Runtime model usage | Opus 4.8 + internal Haiku helper; no Sonnet |
| Child/process / timeout / final | 0 / no / present |
| Infrastructure / sandbox / cwd errors | 0 / 0 / 0 |
| Recoverable local verifier errors | 2 |
| Wall time | 550,644ms |
| First / last product write | 330,364 / 495,469ms |
| Uncached input + output tokens | 108,251 + 49,738 |
| Cached input tokens | 921,722 |
| Provider price equivalent | $2.63740 |
| Artifact diagnostic | 85 / 85 · all gates pass |

The writer returned five bounded findings in 687 words after 86,031ms. The
engineer returned five bounded findings in 637 words after 109,629ms. Both used
the same immutable protected-contract ledger. The main agent kept exactly two
FAQ disclosures and rejected contract-drift recommendations instead of treating
specialist advice as new authority.

The two recoverable tool errors came from a dependency-free scratch verifier:
one unsupported compound selector and one percentage scan that initially read
CSS syntax as product copy. The agent corrected both checks before delivery.
They were not infrastructure, sandbox, cwd, Agent, or frozen-evaluator failures.
The frozen post-run browser evaluator independently passed the artifact.

## Product gates

The artifact preserves every protected hook and exactly two FAQ disclosures at
desktop, 390px, 320px, and the 200% zoom surrogate. Billing, FAQ, invalid-email,
and valid-email transitions pass. Responsive geometry, keyboard traversal,
focus visibility and in-view focus, axe serious/critical, design grounding, and
evidence-honesty gates all pass. Only `index.html` changed as a product file.

## What the smoke establishes

The earlier unbounded run expanded the FAQ contract and timed out. Bounded
specialist responses fixed the cardinality failure, while explicit Agent-model
pinning fixed the next run's mixed-model attribution defect. The third fresh run
therefore proves that the adapter can:

1. install a canonical repair skill plus two read-only specialists;
2. keep change authority with the original user task and main agent;
3. run parent and specialists through local `claude -p` subscription auth;
4. record requested specialist IDs/models and fail closed on mismatch;
5. deliver and externally reverify a protected, responsive product surface.

Descriptively, this harness cell was slower and more token-heavy than the prior
skill-only Pricing cell: wall time was 7.35% higher, first product write was
31.20% later, and uncached input-plus-output volume was 46.37% higher. In return,
the new cell passed 85/85 where that one skill-only Pricing observation reached
66/85. These are different product commits and single trials, so the difference
is a routing diagnostic, not a causal harness-lift estimate.

## Decision

Keep the repair harness opt-in for complex, contract-sensitive repairs. Do not
make two specialists the default for every UI edit. The next Harness Track work
belongs to the 1.9.7 efficiency patch: run the same frozen adapter across all
three task families and repeated trials, compare it with the portable 1.9.4
skill, and publish only a quality/time/intervention Pareto view after sufficient
runs.
