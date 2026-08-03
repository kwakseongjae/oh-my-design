# Final findings — grid actual-zoom transfer 1.9.452

The experiment is frozen after the first pair. The control is objectively UI-Resolved at 85/85 but proof-noncompliant; the candidate is a valid 79/85 system failure and is also proof-noncompliant. Because promotion required candidate `UI-Resolved` 3/3, the first candidate failure caps reliability at 2/3. The remaining four provider calls cannot change the decision and are skipped.

The candidate transferred the intended actual-zoom improvements. Desktop, 390px, 320px, and the real 640px + 2× document-zoom condition all pass. The compound decision target and state remain within the one-line budget, page overflow is gone, browser recovery is zero, and there is no verification after browser readiness.

The layout repair chose the wrong atomic-fit strategy. It applied `overflow-x:auto` directly to the protected compound target. At 320px and actual 200%, axe treats that target as a scrollable region without focusable content, while keyboard traversal enters it without a benchmark control identity or visible focus treatment. This loses the accessibility gate even though geometry is green.

The proof repair is also incomplete. The final product revision uses exactly one static closure followed by one browser command, but the model performed two static inspections on an earlier revision. The preregistered task-level budget therefore records one duplicate static closure. The candidate took 596.243 seconds and 1,559,380 tokens: 1.5924× the control wall time and 2.1510× its tokens, both above the 1.1 limits.

The next patch is provider-free. It must define an accessible priority order for compound atomic fit—carrier width recovery, layout reprioritization, and bounded typography before any scroll region—and forbid passive protected text from becoming a scroll container. It must also bind static-closure accounting to an explicit final-revision latch so exploratory reads cannot masquerade as acceptance while still preventing repeated final verification. Tokens-to-Target is now at least 43,259,233 plus six usage-unavailable cells. Quality promotion remains false.
