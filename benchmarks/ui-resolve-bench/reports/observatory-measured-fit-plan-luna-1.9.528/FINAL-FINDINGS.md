# Observatory measured-fit-plan transfer findings

The exact 1.9.525 candidate proved that pre-edit browser measurement can help: trial 1 delivered 85/85 with a closed proof artifact in 487.890 seconds and 958,166 tokens. Against the paired 1.9.518 control's 85/85, 498.897 seconds, and 1,163,464 tokens, that is 0.9779× wall time and 0.8235× tokens. Both runs used one product edit, one static closure, and one terminal browser proof.

Trial 2 exposed the remaining abstraction error. The candidate measured the observer-note label at 124.5234px and planned a 140.5234px inner carrier with the required 16px margin. But the actual responsive carrier also contained button padding, adjacent optional-note copy, a flex gap, and shell padding. Those widths were not represented in the row plan, so the named consumer measured a 350px document inside a 305px viewport. The evaluator retained 29px overflow and one clipped control at 320px, doubled to 58px at actual 200%.

The model made a second product edit after terminal measurement, but the exactly-once static closure and terminal-browser contract correctly prevented that unmeasured correction from being promoted. Trial 2 ended at 81/85 with an open artifact. Candidate proof Reliability@3 can now reach at most 2/3, so the final three provider cells are frozen.

The next bounded repair is provider-free: extend the pre-edit plan from text rows to aggregate carrier geometry. The plan must bind each protected row to the smallest enclosing layout carrier and measure min-content contribution, horizontal padding and border, inter-sibling gaps, and visible sibling widths under all three conditions. A row-level 16px reserve cannot be considered closed unless its aggregate carrier also fits the actual consumer.
