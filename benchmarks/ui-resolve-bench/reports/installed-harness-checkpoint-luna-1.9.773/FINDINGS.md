# State-routed checkpoint canary findings — 1.9.773

## Result

Pass. The fixed ready/interview/blocked oracle remained exact 3/3. The runner
made one Codex-native Luna/high call, no Cursor calls, no retries, no timeouts,
and no unauthorized writes.

The ready state selected the master kernel plus only
`master-execution-phases.md`. The interview state relayed all four registered
question identifiers from the deterministic question packet, and the blocked
state retained `brand-reference-commitment`; both completed without a provider
call or sidecar load.

## Efficiency reading

Provider calls fell from 3 in 1.9.770 to 1 here (-66.67%). That is a structural
routing result: two already-decided checkpoint states no longer ask a model to
repeat deterministic data.

For the only like-for-like provider denominator, the ready cell used 106,596
input tokens versus 137,095 (-22.25%), 1,196 output tokens versus 1,274
(-6.12%), and 33,461ms versus 34,217ms (-2.21%). Reasoning tokens increased
from 373 to 473 (+26.81%). These are descriptive observations from one replay;
cache and runtime variance prevent a causal prompt-efficiency claim.

Aggregate token totals are deliberately not compared with 1.9.770 because this
run removed two provider calls. The canary establishes checkpoint routing and
contract preservation only—not UI-quality lift, Luna superiority, general skill
superiority, or 2.0 readiness.
