# Checkpoint host-admission round-trip — 1.9.346

The harbor candidate never reached Luna. Resume validation stopped first because the checkpoint stored `host_policy_admission`, but the canonical summary reconstruction omitted it. The live and reconstructed views of the same completed control therefore differed.

The repair makes the canonical run record the single source for the admission field in every completion summary. A focused regression reconstructs the 77/85 harbor-style valid system failure and proves that its `valid-system-failure` disposition survives the round trip.

The focused runner/provider suite is 63/63. Type-check, build, and diff checks pass. This repair makes no provider call and promotes no quality result. `/private/tmp/u19343` remains frozen because its task has already been exposed to one arm; the next comparison must use a fresh unseen task and fresh matrix root.
