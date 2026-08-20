# Adaptive data surface rollback — 1.9.99

Status: **LOCKED**.

Restore `skills/omd-apply/SKILL.md` to exact commit
`c285d25515ec8959e66ceeb7703417aad531cd95` after the blind owner review
rejects promotion of the 1.9.95 adaptive-data-surface delta.

Remove only the current-contract assertions introduced for that delta. Preserve
the benchmark runner, historical reports, immutable run roots, and all
foreground, geometry, interactive, visual-equity, delivery, semantic-structure,
and unknown-means-absent contracts.

Acceptance requires:

- exact skill equality with the preceding control commit;
- no adaptive-data-surface clause or assertion in the current skill contract;
- OmD install-channel tests green;
- focused Codex, Cursor, and Claude portable-skill preparation tests green;
- TypeScript and build green.

No provider call, rescore, response repair, or public superiority claim is
authorized.
