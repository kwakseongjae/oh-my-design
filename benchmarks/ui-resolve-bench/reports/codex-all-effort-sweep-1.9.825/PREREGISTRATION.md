# Codex all-effort sweep — provider-zero preregistration

This is a complete-block, descriptive effort-scaling run for the exact OmD portable variant `omd-portable-1.9.821-effort-sweep`. Its only admissible claim is `internal-effort-scaling-compatibility`; it is not a model ranking, a Reliability estimate, or a cross-model equivalence claim.

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
  A. `pollen-slide-accession-v0.1` — `8f4858da1a7162058091ccc2fef3ef8296c791aba7c922824ead045bc1cad36d`
  B. `seismic-core-dispatch-v0.1` — `d66a9ecb5cc0390e599c1434b2fbde5284f0b39015ed768b76d6a43e9adbb52a`
  C. `oral-history-reel-return-v0.1` — `071b4bbe6268f0ed17118f7afc1d50626626d078ba84c0184a8b785c529391c0`

Locks:

- task set: `db9afcab61f81dab88892671853f37a5668dca57c615fcdf3b309b2540c756f8`
- schedule: `c23b0fbf0e165a23722a6ccc9d2123f2f6ca0ed9df4c485d68b6063beca7ae57`
- catalog file: `09de4266b8b0d4e1d23e9711e0beff8ca209f98b9b0d80da75f68552e08f1280`
- local model catalog: `77df912746eb14867897f3100a02ec5182537d2edbe9c69c4d76f46c03ad6f5f`
- skill/source: `633aac83035ad76e441e866ef99022dff2416c86a50a29b44923111594bdf939`
- evaluator: `91a732ce398476c4356d3f03b01964706c783c43d0c97feca60f35b320963569`
- browser: `0c8bb55566bd7783885c829c405c5ad57fb6b587c90ec153bbd19f50ff69620a`
- controller pre-edit plan: `919ffaf57c7df80294ae8cdbfa3c593dda67497f938ff97b7972fdede9b046e7`

Execution remains forbidden until the generated matrix is committed, materialized into a fresh root, provider-zero admission passes all 51 cells, the immutable catalog snapshot is installed, and the exact named browser preflight is green.
