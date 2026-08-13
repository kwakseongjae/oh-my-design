# MIGRATION — 0.1.x → 1.9.x

The current release is a skill-driven, bin-only package. The CLI installs and diagnoses the OmD bundle; design work happens through natural-language prompts inside your coding agent. It ships 22 skills, 19 specialist roles, and a local catalog of 440+ `DESIGN.md` references.

This guide is for projects that used `oh-my-design-cli` 0.1.x. Existing project `DESIGN.md`, `.omd/preferences.md`, and `.omd/runs/` files remain useful; do not delete them.

## Upgrade each project

From the project root:

```bash
npx oh-my-design-cli@latest
```

Choose the project-local channels you actually use, restart those coding agents, and verify the installed files:

```bash
npx oh-my-design-cli@latest doctor
```

`doctor` reports the real channel paths, catalog/fingerprint coverage, specialist roles, hooks, and whether the project has a root `DESIGN.md`. If it finds an incomplete managed install, run the exact repair command it prints and then run `doctor` again. A stale managed Claude hook is repaired with the targeted `--repair-hooks` flag; unrelated unmarked files remain untouched.

For a user-level Claude Code, Codex, or OpenCode installation, use `install-skills --global` and verify it with `doctor --global`. Cursor rules are intentionally project-scoped and reject `--global`.

## The important break

The 0.1.x operational CLI commands were removed in 1.0.0. The supported CLI surface is now:

- `npx oh-my-design-cli@latest` — guided installer;
- `npx oh-my-design-cli@latest install-skills ...` — explicit/non-interactive installation; and
- `npx oh-my-design-cli@latest doctor` — health check and scoped repair instruction;
- `npx oh-my-design-cli@latest workflows "<task>"` — natural-language workflow routing; and
- `npx oh-my-design-cli@latest design-md ...` — provider-free Core v2 inspection,
  validation, staged migration, exact review, compilation, and receipt-gated
  project adoption.

The package no longer exposes a programmatic TypeScript API. Code that imported `oh-my-design-cli` must migrate to the installed markdown skills/data or invoke the bin as an installer/doctor.

## DESIGN.md Core v2 migration

Existing project and catalog files are not rewritten during install or update.
Readers remain compatible with legacy OmD frontmatter and 13/15/16-section files,
but new design-system generation/refactoring writes the vendor-neutral Core v2
projection plus optional `.omd/system` authority sidecars.

Use a staged directory first:

```bash
npx oh-my-design-cli@latest design-md inspect ./DESIGN.md
npx oh-my-design-cli@latest design-md validate ./DESIGN.md
npx oh-my-design-cli@latest design-md migrate ./DESIGN.md \
  --out-dir .omd/migrations/core-v2 \
  --report .omd/migrations/core-v2-report.json
```

These commands never replace the input file. Review the report and require zero
dropped segments, zero unsupported promotions, a passing semantic round trip, and
preserved opaque extensions before an explicit refresh workflow adopts the staged
artifacts. Catalog mode is audit-only:

When project evidence enriches the candidate graph, regenerate no hashes by
hand. Rebind the unchanged loss ledger to review-valid inputs in a fresh,
non-authoritative directory:

```bash
npx oh-my-design-cli@latest design-md rebind-migration \
  .omd/migrations/core-v2 --enrichment <safe-partial-enrichment.json> \
  --provenance <provenance.json> --coverage <coverage.json> \
  --out-dir <fresh-rebound-dir>
```

`--enrichment` is preferred because the helper copies the original lossless
graph and rejects attempts to modify its opaque ledger, projection binding, or
schema identity. `--graph` remains available for independently generated whole
graphs and receives the same ledger comparison.

```bash
npx oh-my-design-cli@latest design-md audit ./web/references \
  --report .omd/migrations/reference-catalog-core-v2.json
```

After provenance and coverage drafts are complete, adoption uses one exact
transaction. Both output directories below must be fresh, and the compiled package
must be outside the destination project:

```bash
npx oh-my-design-cli@latest design-md prepare-review <graph.json> \
  --provenance <provenance.json> --coverage <coverage.json> \
  --migration-report <migration-report.json> \
  --out-dir <fresh-review-dir>
npx oh-my-design-cli@latest design-md approve-review \
  <fresh-review-dir>/review-request.json --reviewer <project-owner-id> \
  --out <fresh-review-receipt.json> --authority-transition-approved
npx oh-my-design-cli@latest design-md compile \
  <fresh-review-dir>/input-graph.json \
  --provenance <fresh-review-dir>/provenance.json \
  --coverage <fresh-review-dir>/coverage.json \
  --migration-report <fresh-review-dir>/migration-report.json \
  --review-receipt <fresh-review-receipt.json> \
  --out-dir <fresh-package-dir-outside-project> --adopt
npx oh-my-design-cli@latest design-md prepare-checkpoint \
  <fresh-package-dir-outside-project> --reviewer <project-owner-id> \
  --out <fresh-project-checkpoint.json> --authority-transition-approved
npx oh-my-design-cli@latest design-md adopt \
  <fresh-package-dir-outside-project> --project-root <project-root> \
  --checkpoint-receipt <fresh-project-checkpoint.json>
```

Omit both `--migration-report` arguments only for a newly authored graph with no
migration ledger. The project owner, or a pre-registered external authority
controller acting under the owner's policy, reviews and approves the exact
candidate and package. The generating/reviewing/implementing agent cannot
self-approve, and no manual hash transcription substitutes for either receipt.

The neutral provenance and coverage schemas are published at
`https://oh-my-design.kr/schema/design-system-provenance-v2.schema.json` and
`https://oh-my-design.kr/schema/design-system-coverage-v2.schema.json`. The OmD
proof-profile receipts—distinct from standalone Core—are published at
`https://oh-my-design.kr/schema/design-md-core-adoption-review-v2.schema.json`,
`https://oh-my-design.kr/schema/design-md-core-adoption-receipt-v2.schema.json`,
and
`https://oh-my-design.kr/schema/design-md-core-project-checkpoint-v2.schema.json`.
Compiler success proves Core conformance and exact bindings, not factual truth,
license permission, visual quality, or runtime implementation conformance.

The normative contract is [spec/design-md-core-v2.md](spec/design-md-core-v2.md);
the bounded rollout is documented in
[docs/DESIGN_MD_CORE_V2_MIGRATION_PLAN.md](docs/DESIGN_MD_CORE_V2_MIGRATION_PLAN.md).

## 0.1.x command map

The following prompt-based replacements apply to **Claude Code, Codex, and OpenCode**, where OmD skills are installed:

| Removed 0.1.x command | Current workflow |
|---|---|
| `omd init recommend "..."` | Ask: `Set up our design system — Linear-style, for a B2B operations dashboard.` The agent uses `omd:init`, recommends a reference, and prepares an exact Graph/`DESIGN.md` preview. Only after owner-controlled review and package checkpoint does the atomic adopter write the root system. |
| `omd init prepare --ref vercel ...` | Ask: `Create our DESIGN.md using Vercel as the reference; keep unverified facts absent.` |
| `omd remember "..."` | Say the correction naturally, for example: `Remember this preference: cards use borders, not decorative shadows.` The `omd:remember` skill records it. |
| `omd learn` | Ask: `Fold confirmed preferences into DESIGN.md.` The `omd:learn` skill presents the exact proposal, then uses the same owner-controlled, receipt-gated adoption transaction. |
| `omd sync` | Ask: `Sync DESIGN.md into the agent instruction shims.` The `omd:sync` skill updates managed blocks. |
| `omd harness "..."` | Run `/omd-harness <task>` or ask for the full OmD design harness. Mandatory user checkpoints remain in place. |
| `omd generate` | Removed. Create/download `DESIGN.md` in the [Builder](https://oh-my-design.kr/builder), or ask a skill-enabled agent to set it up. |
| `omd preview` | Removed. Ask the coding agent to build and open the actual product route. |
| `omd reference list/show` | Browse the [reference catalog](https://oh-my-design.kr/design-systems), read an installed channel catalog, or fetch `https://oh-my-design.kr/<id>/design.md`. |
| `omd context --internal` | Context discovery is part of the installed skills/harness. The deterministic helper remains bundled for internal skill use. |
| `omd setup-blender` | Removed from the public CLI. Asset workflows guide optional tooling only when it is actually needed. |

## Channel capabilities and paths

| Channel | Project installation | What can run |
|---|---|---|
| Claude Code | `.claude/{skills,agents,data}/` plus managed project hooks/settings | 22 skills, 19 specialist roles, local catalog |
| Codex | `.agents/skills/`, `.codex/agents/`, `.codex/data/` | 22 skills, 19 embedded specialist-role definitions, local catalog; the project must be trusted |
| OpenCode | `.opencode/{skills,agents,data}/` | 22 skills, 19 native agents, local catalog |
| Cursor | `.cursor/skills/`, `.cursor/rules/omd-design.mdc`, plus `.claude/data/` | Native project skills, bootstrap rule, and local catalog; explicit `--cursor-rule-only` compatibility installs omit skills and sub-agents |

Codex's old OmD-managed `.codex/skills/` entrypoints are retired. A current reinstall migrates installer-owned files to `.agents/skills/` while preserving private, unowned files. OpenCode now uses its native `skills`, `agents`, and `data` directories.

### Cursor rule-only compatibility migration is different

Current Cursor installs receive native Agent Skills. The restrictions below apply
only when an older client was intentionally installed with `--cursor-rule-only`.
That compatibility mode has no OmD named skills or specialist roles, so do not ask
it to run `omd:init`, `omd:feel`, or `/omd-harness`.

Applying an existing root `DESIGN.md` remains supported. Creating one is fail-closed:
the rule MUST NOT copy, paraphrase, or adapt an installed
`.claude/data/references/<id>/DESIGN.md` into the project. The local catalog is
read-only import context, not a project writer. Use one of these paths instead:

1. Select/customize a reference in the [Builder](https://oh-my-design.kr/builder),
   download its standalone Core v2 `DESIGN.md`, save it at the project root, and
   validate it:

   ```bash
   node .claude/data/scripts/migrate-design-md-core.cjs \
     --input ./DESIGN.md --check --require-source-valid --require-portable-core
   ```
2. For an existing legacy file, stage the bundled provider-free migration, then
   complete review and explicit adoption from a skill-enabled channel:

   ```bash
   node .claude/data/scripts/migrate-design-md-core.cjs \
     --input ./DESIGN.md --write --out-dir .omd/migrations/core-v2
   ```

   Never replace the source with a staged candidate merely because migration
   succeeded.

A generated or adopted Core v2 file has a clean `# … Design System` top (no YAML),
the exact seven stable anchors, unknown values absent, and enough standalone scope,
task, foundation/constraint, and governance detail to work without OmD or sidecars.
A `migration-candidate` is non-authoritative: its source `DESIGN.md` remains
canonical. Only an explicitly adopted, valid `profile: portable-core` manifest
makes its hash-bound System Graph the machine authority; `DESIGN.md` remains the
standalone portable contract.

The rule-only bundle includes the Core migration helper and closed schemas under
`.claude/data/scripts/`, so the validation above is provider-free and does not
require another package download.

Then ask Cursor to build against `@DESIGN.md`. The installed rule's contract is intentionally small: read root `DESIGN.md` before UI work, apply pending `.omd/preferences.md` corrections, and use framework defaults only after those two sources.

## Managed upgrades and local edits

Current installs are idempotent:

- installer-owned skills, roles, catalog entries, and hooks carry managed markers/hashes and refresh when unchanged;
- same-ID reference edits, private references, and unmarked user files are preserved;
- retired installer-owned files can be cleaned up without deleting user sidecars;
- `--repair-hooks` refreshes the managed Claude hook bundle only; and
- `--force` is an explicit last resort for overwriting drift. Review local edits before using it.

After every bundle upgrade, restart the coding agent and run:

```bash
npx oh-my-design-cli@latest doctor
```

## Data retained from 0.1.x

- Root `DESIGN.md` remains the standalone portable design contract. Without an
  adopted Bound System package it is also the project design source of truth.
- A staged `profile: migration-candidate` manifest is non-authoritative and keeps
  its source `DESIGN.md` canonical. Only an explicitly adopted, valid
  `profile: portable-core` manifest makes the hash-bound System Graph the machine
  authority, with root `DESIGN.md` as its portable projection.
- `.omd/preferences.md` remains the preference/correction store and should be retained.
- Existing `.omd/runs/<id>/` directories remain learning artifacts; do not delete them.
- The npm package is bin-only. The removed `src/index.ts` exports have no replacement public API.

For the current first-run flow, see [docs/CLI_QUICKSTART.md](docs/CLI_QUICKSTART.md). For release-by-release changes, see [CHANGELOG.md](CHANGELOG.md).
