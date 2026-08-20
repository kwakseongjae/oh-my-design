# bench-fixture-gen (benchmark-internal, NOT a user skill)

Generates the shared per-task fixture that every competing arm starts from:
a realistic dataset plus an image asset base. Fairness rule: fixtures are
generated ONCE per task by this preprocessor and sealed (sha256) before any
arm runs; arms never generate their own.

## Workflow

1. Author a fixture spec (`fixture-spec.json`):
   - `task_id`
   - `dataset`: { `global_key` (window global), `entities`: [{ name, count,
     fields: [{name, kind, enum?, range?}], relations? }], `disclosure` }
   - `images`: generate-task-assets item list ({file, prompt, style})
2. Dataset: `node scripts/generate-task-dataset.mjs --spec <spec> --out <dir>`
   - grok-4.6 authors realistic records for the spec (headless, isolated);
     the script VALIDATES structure (entity counts, field presence, enum
     membership, relation integrity), retries once on failure, then writes
     `data.json` + `data.js` (window global) + prints aggregate seeds.
3. Images: `node scripts/generate-task-assets.mjs --spec <images-spec> --out <assets-dir>`
   - grok image_gen, paced, self-healing auth sync, per-file sha manifest.
4. Seal: record data.json sha + assets-manifest in the task fixture and in
   every prepared cell's `cell.json`.

## Rules

- Deterministic where possible; all sample data labeled fictional in a
  `disclosure` string carried inside the dataset itself.
- Never real brands/people; Korean-locale tasks use Korean-plausible
  fictional names.
- Aggregate expectations for data-fidelity audits are DERIVED from the
  sealed dataset at audit time, never hardcoded.
- KPI terms used in briefs must be DEFINED in the brief (lesson: the
  "open cases" ambiguity in wholesale-2026-08-18).
