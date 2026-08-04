# Rail static-absence transfer — final findings

The candidate solved the visible task at **85/85** and the new static-absence guardrail closed successfully on its only attempt. It did not reintroduce `word-break` with a neutral value. That is useful evidence for the intervention, but it is not sufficient for promotion.

The proof artifact remained open because `form-save` used `.event-log-form button` as its deterministic pre-edit typography selector. The class `event-log-form` was introduced by the same product edit, so the selector had no match in the snapshotted pre-edit source. Its pre-edit font size, line height, and weight were therefore all `null`. The existing evaluator grouped this under `reflow-locked-typography-changed`; the more precise failure is **pre-edit selector unresolved**.

R1 candidate is consequently a valid UI-resolved run with failed proof. Candidate Reliability@3 can reach at most 2/3, so the remaining four cells are frozen under the preregistered mathematical stop rule. No retry or additional provider call is permitted for this matrix.

The next change is provider-free: validate selector provenance at lock time, distinguish an unresolved pre-edit selector from an actual typography delta, and exercise the frozen artifact as a regression fixture.
