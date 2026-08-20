# Candidate-preflight Reliability@3 result — 1.9.725

The first Luna/high cell produced a valid 85/85 UI with all six critical gates green. It used one product revision, one successful and zero failed static closures, no browser recovery, and a compliant proof trace. The passed receipt candidate hash and the actual final `index.html` hash are both `4ec448fe…`, so the model and the installed OmD lifecycle satisfied the new byte-binding contract.

The matrix nevertheless stopped with `candidate-final-byte-mismatch`. This was a controller instrumentation defect: the exporter resolved the artifact's relative `product_path: index.html` against the repository process working directory instead of the prepared cell workspace. It therefore recorded `product_present: false` despite the file being present and byte-identical to the candidate.

The root remains frozen exactly as preregistered. The benthic task will not be replayed or replaced inside this experiment. Conservation and wind-tunnel were never sent to the provider and remain unexposed, but they cannot continue in this frozen root.

The 85/85 output is retained as diagnostic evidence only. It does not count toward Reliability@3, ranking, provider superiority, or a 2.0 gate. The bounded repair resolves relative product paths within the cell workspace and rejects paths that escape it. Transfer requires a new preregistration and root using the two unexposed tasks plus one fresh provider-zero task.
