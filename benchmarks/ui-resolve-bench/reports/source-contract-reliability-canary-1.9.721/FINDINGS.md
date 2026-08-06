# Source-contract Reliability@3 canary — 1.9.721 findings

The provider-zero preparation created all three workspaces, but admission failed closed before any external execution or model exposure.

The existing admission auditor assumed an exact-task cross-arm comparison and required task id, prompt, starter, product, and sealed-artifact hashes to be identical across all cells. Reliability@3 deliberately uses three distinct tasks, so that normalization rule cannot represent the preregistered design.

The prepared root is retained and frozen. It must not be executed, retried, or reused. The next experiment needs a separately validated cross-task reliability policy that preserves task-specific hash attestation while requiring identical runtime, model, effort, timeout, skill, evaluator, and source-contract structure.

Provider calls: 0. Model exposures: 0.
