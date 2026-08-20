# Proof close latch — findings

Status: **ACCEPTED provider-free**.

The candidate replaces count-only advice with explicit `revision`, `static_closure`, `browser_proof`, and `delivery` states. A proof phase is now closed by state rather than inferred from remaining budget. Product edits are the only event that can reopen static proof; browser proof remains exhausted after its first attempt.

- A static closure records the current product revision; another static verification command at the same revision is an explicit violation.
- Browser success and infrastructure failure both close the browser phase as `closed` or `unresolved`; executable discovery, recovery, alternate mechanisms, and a second browser command are explicit violations.
- A browser-discovered product correction increments the revision and permits one corrective static closure without reopening browser proof.
- Once both proof states are closed, delivery becomes `ready` and later verification commands are violations.
- Canonical skill is 277 lines / 37,416 bytes, +763 bytes (+2.1%) versus the proof-budget candidate. The close-latch section is byte-identical in the historical decision-context experiment.
- Focused skill contract 9/9, install-skills 36/36, bounded advisory 2/2, TypeScript lint, and diff checks pass.
- The bench suite passed 54/56 relevant contracts; the two red tests are the pre-existing non-Git Taste and UI UX Pro vendor fixtures, not close-latch failures.
- Provider calls: 0.

Decision: pin this exact clean candidate, then lock a new unseen non-approval task. Compare the exact proof-budget candidate against the close-latch candidate under Grok 4.5 High 2×3. The primary gate is unchanged 3/3 UI-Resolved quality with zero paired loss; the execution gate now requires browser recovery `0`, duplicate static closure `0`, and verification-after-ready `0`. Trigger Luna xhigh separately only for a pass, borderline result, or model-sensitive interaction.
