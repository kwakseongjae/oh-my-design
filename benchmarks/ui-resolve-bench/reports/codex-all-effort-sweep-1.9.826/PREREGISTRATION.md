# Codex all-effort sweep — provider-zero preregistration

This is a complete-block, descriptive effort-scaling run for the exact OmD portable variant `omd-portable-1.9.826-effort-sweep`. Its only admissible claim is `internal-effort-scaling-compatibility`; it is not a model ranking, a Reliability estimate, or a cross-model equivalence claim.

- Denominator: 3 source-commit-locked v18 tasks × 17 exact catalog-derived model/effort pairs × one trial = 51 cells.
- Runtime: Codex only. Cursor and Claude Code are forbidden.
- Execution: serial, 720 seconds per cell, fixed 30-second pacing, one new cell per invocation.
- Failure semantics: no retry, replacement, fallback, task swap, model substitution, effort substitution, or alias.
- Schedule: exact interleaved three-wave rotation `0,+6,+12`; every pair receives tasks A, B, and C exactly once.
- Browser: attach only to `omd1825` on the controller-started exact local CDP socket; browser launch is forbidden.
- Auth: copy only the immutable regular-file snapshot `627eb7992080095292be3628510b745f9c64b8efaf3d0692e8f1a34d8c9164cd` into each cell's isolated `CODEX_HOME`; mutable auth and symlink fallback are forbidden.
- Model authority: pass only the byte-locked local `model_catalog_json` snapshot `77df912746eb14867897f3100a02ec5182537d2edbe9c69c4d76f46c03ad6f5f`; the cache remains provenance only and TTL refresh cannot select a model profile.
- Controller plan: one provider-zero shipped-runner measured plan must exist before product editing.
- Provider/model/browser/network/Cursor/Claude calls made by this generator: 0/0/0/0/0/0.
- Exposure boundary: only this generator invocation is evidenced provider-zero; historical task exposure is unknown and is not asserted.

Tasks:
  A. `pollen-slide-accession-v0.1` — `265399ff97b8c50162b781bef7c10e34be83f61b693386eab1e25175d2f261f8`
  B. `seismic-core-dispatch-v0.1` — `30af7c3e426997479e175a167a0016b1586989e177d15e172ba1477d47ef2397`
  C. `oral-history-reel-return-v0.1` — `e005ac42bf66d2fa7f16dd2d9f93a649bc90cbc81047e884ea774ead368ee522`

Locks:

- task set: `1818b228712490cdd43612dcedbecdfe70a200d8991f227a85682779117e27e0`
- schedule: `c23b0fbf0e165a23722a6ccc9d2123f2f6ca0ed9df4c485d68b6063beca7ae57`
- catalog file: `d7d2f54710e3ccf54c1c1e315e90e237ed1f51986698218ec69e318c2f2c3da3`
- local model catalog: `77df912746eb14867897f3100a02ec5182537d2edbe9c69c4d76f46c03ad6f5f`
- skill/source: `800fa08122847e6b6c611980dc43489cc54af24bf95c4cc8c4e998ad84a29a97`
- evaluator: `6fb3fa218a511b80d2cf62418df2d2ce45c5cd7ca57e4b0d1081bc2c20b971b6`
- browser: `0c8bb55566bd7783885c829c405c5ad57fb6b587c90ec153bbd19f50ff69620a`
- controller pre-edit plan: `919ffaf57c7df80294ae8cdbfa3c593dda67497f938ff97b7972fdede9b046e7`

Execution remains forbidden until the generated matrix is committed, materialized into a fresh root, provider-zero admission passes all 51 cells, the immutable catalog snapshot is installed, and the exact named browser preflight is green.
