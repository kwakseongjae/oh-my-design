# DESIGN.md v3 migration — Phase 2 record (2026-10-13 → 14)

Branch `feat/design-md-v3`. Spec approved as G2 on 2026-10-13. Toss sample check: `TOSS-VERIFY.md`.

## Adapter and dry run

- `web/scripts/lib/design-md-v3.mjs` holds both directions of the mapping. `readReferenceSource`
  checks for v3 first and projects the legacy frontmatter from the v3 tokens and `reference.json`.
  `repository.server.ts` does the same at runtime: `markdown` is the portable file and
  `legacyMarkdown` is what the AST reads.
- Dry run (`scripts/design-md-v3/dry-run.mjs --refs <pre-conversion tree>`): 518 of 518 legacy
  files convert. Each projects back to frontmatter deep-equal to the original under js-yaml
  JSON_SCHEMA and DEFAULT_SCHEMA, with key order kept. All pass the comparator and lint with 0
  errors. 32,044 claims.

## Batches (all guards green on each)

| Batch | Files | Notes |
|---|---:|---|
| canaries | 5 | elice (verified KR, brand face), abema (partial, motion), airtable (legacy, motion), base (shadow + motion groups), elastic (no H1) |
| verified | 293 | rest of the verified tier |
| legacy 2–5 | 50 / 50 / 50 / 70 | all remaining OmD 0.1 files |
| toss | 1 | the verified sample, intended value changes only (TOSS-VERIFY.md) |
| krds | 1 | from its hash-checked legacy segments |
| serendie | 1 | native Core v2: `convert-core-native.mjs`. Two generated token-duplicate blocks are dropped (spec §3.4) |

These guards ran on every batch (`scripts/design-md-v3/run-batch.sh`, `guards.mjs`):

- tiers 299/109/113, and every id keeps its status;
- motion advisory 193, same ids;
- registry deep-equal per id;
- ledger 299 refs and 1,845 sources (1,847 after toss, +2 intended);
- claims per id unchanged;
- AST equal outside sections;
- spec §10 conformance and Google lint 0 errors;
- catalog gate suites and the full web suite;
- item-page parity against the pre-batch tree (`__tests__/design-md-v3-parity.test.ts`);
- Home or catalog → `/design-systems/<id>` → `#use` and the raw twin (`smoke-pages.sh`).

Known differences, all format-only or diagnostic:

- Registry: the YAML-parser switch corrected two descriptions that the hand parser had mangled
  (serendie, sumup). It also turned serendie's `extracted` date and 70 verification dates from
  `…T00:00:00.000Z` back into plain dates.
- Item-page parity: the regex `accent` guess moved on 11 references, because v3 regroups sections:
  codeit, miricanvas, nexon, payhere, together.ai, drnow, laftel, momoshop, openai, superhuman and
  tellingme. The diagnostic `parity` field (AST vs the retired regex adapter) also differs. No
  rendered token comes from either.
- llms-full: 29cm, line and lotteon used to publish a YAML fragment as their one-liner. They now
  publish their first prose paragraph.

## Writers

- `scripts/design-md-v3/writer.mjs` is the single write path. The round trip is byte-identical
  on all 521 references (`writer-idempotence.mjs`).
- `assemble-reference.mjs` emits v3.
- The OmD 0.1 text-patching tools refuse v3 targets: apply-state-values, apply-measured-palette,
  apply-primary-tasks, migrate-frontmatters and retire-template-motion.

## Open

1. Port the five refused tools onto `writer.mjs`, or retire them. `migrate-frontmatters` serves
   0.1 only.
2. `.omd/system/` stays as an archive for toss, krds and serendie. Decide whether to keep it.
3. MCP bundle (`packages/mcp/scripts/sync-data.mjs`): it serves the projected legacy frontmatter
   in front of the v3 body. Decide whether to serve the portable v3 file plus the sidecar instead.
4. The bundled `skills/omd-reference-capture/scripts/capture-reference-evidence.mjs` inlines the
   pre-v3 `readReferenceSource`. Rebuild it deliberately; the test run regenerates it and the run
   then reverts it.
5. The legacy reader stays until two releases after this conversion (spec §12.3).
6. PHASE1 §9 items 3–5 are still owner decisions: extension properties in the frontmatter,
   shipping `reference.json` in installs, and the project-root writers.
