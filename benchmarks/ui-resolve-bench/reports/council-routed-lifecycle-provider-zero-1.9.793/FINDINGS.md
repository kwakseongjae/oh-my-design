# Council routed lifecycle provider-zero controller — 1.9.793

The controller passes all three state transitions without a provider, model, Cursor call, or product write.

- Interview: two read-only lanes are declared, the exact `regulated-commitment` question is relayed with `master_required=false`, and `resume_master` appears only after an answer receipt carrying the current ledger and question hashes.
- Blocker: advisory dispatch is suppressed, `required-factual-claim` is relayed as an external-evidence blocker, no answer receipt exists, and the product remains unchanged.
- Advisory-ready: two declared read-only lane artifacts reconcile before the context planner returns `resume_master`; the controller itself still performs no product edit.

The empty advisory artifacts in this patch are controller placeholders, not model advice and not effectiveness evidence. They exist only to verify deterministic ordering and ownership. The next patch may preregister real Luna/high lane calls and exactly two single-owner UI implementations. The blocked route must remain provider-free and byte-identical.
