# Deterministic candidate-promotion Reliability@3 — 1.9.731

This diagnostic tests whether the 1.9.729 repair eliminates post-preview model retyping and the second-product-edit failure seen in 1.9.728. It carries forward only the archaeology task that remained unexposed, then uses two fresh provider-zero tasks. No completed or failed cell from 1.9.728 is replayed.

The fixed order is archaeology tray release, paleontology jacket accession, then textile roll conservation. Each cell uses Codex with `gpt-5.6-luna`, high effort, a 720-second timeout, no retry, no replacement, and one-cell checkpoints.

Every cell must create complete candidate bytes, pass the sealed preview, and call `static-promote` exactly once. The model may not read and retype the passed candidate into the product. The promoted bytes must remain exactly equal to both the receipt and final product before one successful static closure.

A cell passes only at 85/85 with resolved UI, one product revision, one successful and zero failed static closures, zero user handoffs, proof compliance, unchanged sealed inventory, and exact candidate-to-final equality. Reliability@3 requires 3/3.

Any lifecycle hard-stop freezes the remaining cells. The result is diagnostic only: it cannot enter ranking, establish model or skill superiority, or promote the 2.0 release gate without the later preregistered comparative suite.

Provider execution is forbidden until this plan is committed and a fresh root passes provider-zero preparation and admission. Preparation must attest the exact task, skill, evaluator, source-contract, and sealed inventory hashes recorded here.
