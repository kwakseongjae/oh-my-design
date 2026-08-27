# Effort routing and claim policy — 1.9.827

## Decision

Adopt `high` as the bounded OmD default for Codex-native Luna, Terra, and Sol
when the task scope is UI design execution and no effort was supplied.

This does not change catalog defaults. Explicit supported efforts are preserved;
unknown or unsupported efforts fail closed. Failure never triggers an automatic
max/ultra retry, model replacement, or effort fallback.

## Evidence boundary

The source is the completed 1.9.826 exact 51-cell block. High passed the
objective gate in 8/9 cells and the objective plus proof-execution gates in 8/9.
The block contains three fixed tasks and one trial per model-effort-task cell.
Therefore the decision is an internal routing default, not a statistical or
universal quality conclusion.

## Public wording

Permitted wording must say “Codex configuration-routed Luna/Terra/Sol,” expose
the task/trial denominator, keep objective and proof gates separate, and report
token totals as 50/51 observed cells.

Provider-attested identity, cross-model ranking, model or effort superiority,
reliability, industry-best, and 2.0 promotion claims remain prohibited.

## 2.0 effect

No frontier gate changes status. This patch closes a routing-policy ambiguity
and adds a fail-closed public claim boundary; it is not promotion evidence.
