# Hypothesis — runtime artifact closure on a spatial load plan

## Frozen question

With the model, effort, task, prompt, starter, runtime, timeout, pacing, and installed proof policy held fixed, does the exact 1.9.309 runtime-artifact candidate improve full carrier closure over the exact 1.9.274 conjunctive-release control?

## Mechanism under test

The candidate must materialize a locked `.omd/reflow-closure.json` before product editing and close every registered carrier and atomic row at 390px, 320px, and 200% before static proof. The control has the earlier conjunctive proof contract without this runtime-enforced reflow artifact.

The expected benefit is not a higher prose compliance rate. It is fewer unresolved spatial carrier and atomic-line failures while preserving the supplied bay/container/station relationships and decision hierarchy.

## Promotion boundary

No result from a single cell is promotable. Reliability@3 must satisfy all preregistered objective, proof/host-policy, paired-loss, wall-time, and provider-token gates. Failure to create the artifact, changed inventory after editing, or incomplete manifest must fail closed rather than count as successful proof.
