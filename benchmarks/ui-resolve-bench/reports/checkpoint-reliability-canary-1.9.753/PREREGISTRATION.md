# Checkpoint-continuation Reliability@3 — 1.9.753

This internal diagnostic tests the repaired checkpoint continuation boundary. It is not a model ranking or a 2.0 release claim.

- Codex `gpt-5.6-luna`, high only; Cursor forbidden.
- Fixed order architectural → ceramic → glass; concurrency 1; 30-second pacing; retry/replacement 0.
- Exact local browser `omd1753`, attach-only; provider-zero preplan 3/3 before Luna.
- Completed cells retain their checkpointed zero-call receipt; only unstarted cells revalidate live preplan evidence.
- Exact decision cascade, 85/85, revision1, candidate/final exact, proof true, recovery0 required for every cell.
