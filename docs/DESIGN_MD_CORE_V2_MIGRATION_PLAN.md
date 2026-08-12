# DESIGN.md Core v2 — portability and migration plan

Status: implementation baseline for the 2.0 transition. This document governs
the migration sequence; the normative file and JSON schemas live under `spec/`.

## 1. Product contract

`DESIGN.md` must remain useful when it is copied by itself into a generic chat,
attached to Claude Design, imported into Open Design, or read by any coding
agent that has never installed oh-my-design.

The portable file therefore follows four rules:

1. It contains the decisions needed to design a product, not tool history.
2. It has no YAML frontmatter, vendor name, generator stamp, verification badge,
   internal path, or opaque quality metadata at the top of the file.
3. It never requires `.omd/` sidecars to be understandable. Sidecars add machine
   precision and proof; they do not repair an incomplete portable document.
4. Unknown values are omitted at the smallest unresolved boundary. A portable
   file must not replace them with defaults, adjacent-brand facts, or plausible
   guesses.

The visible document is a projection. Only an adopted, valid, hash-bound
`profile: portable-core` manifest makes `.omd/system/graph.json` the canonical
machine representation. A `migration-candidate` leaves its named source
DESIGN.md canonical until explicit adoption. Without the sidecars, the portable
file is still a complete human-and-agent brief.

## 2. Neutral document anatomy

The file begins with a product title, not metadata:

```markdown
# Acme Design System

<!-- design-md:section experience -->
## 1. Experience
...
```

The seven ordered sections and stable machine anchors are:

| Anchor | Visible heading | Responsibility |
|---|---|---|
| `experience` | `1. Experience` | Product job, audience, experience thesis, surface scope, and protected behavior |
| `foundations` | `2. Foundations` | Semantic color, spacing, shape, depth, motion, accessibility foundations, and their rationale |
| `typography-assets` | `3. Typography & Assets` | Type roles and metrics, fonts, icons, imagery, logos, licensing, loadability, and asset authority |
| `components-states` | `4. Components & States` | Component anatomy, variants, applicable states, patterns, and state transitions |
| `layout-platforms` | `5. Layout & Platforms` | Density, responsive behavior, breakpoints, web defaults, and platform-specific deltas |
| `content-locales` | `6. Content & Locales` | Voice, terminology, formatting, locale behavior, script coverage, and content constraints |
| `governance` | `7. Governance` | Principles, explicit prohibitions, unknowns, extension policy, and agent execution rules |

The comments are portable semantic anchors, not branding. Renderers may hide
them; parsers must use them instead of guessing from translated headings.

## 3. Consumer profiles

| Consumer | Files supplied | Expected behavior |
|---|---|---|
| Generic chat or coding agent | `DESIGN.md` only | Read all seven sections, preserve explicit decisions, omit unknowns, and implement within the stated scope |
| Claude Design or another hosted design tool | `DESIGN.md`, optionally the relevant code/assets | Treat the file as project design guidance. Do not require OmD commands, internal run artifacts, or a particular framework |
| Open Design or another structured design workspace | `DESIGN.md` plus optional `.omd/system` export | Import the portable file first; use graph/tokens/components/assets as higher-precision structured inputs when supported |
| OmD Autopilot | Core plus the complete sidecar set | Validate hashes and provenance, progressively load only relevant profiles, implement, and produce same-route proof |
| Catalog/browser consumer | Generated Core projection plus quality/evidence data | Show verified neighboring content while omitting unresolved fields; never expose internal migration metadata as design guidance |

External portability is a release property, not a marketing assertion. Format
utility must later be measured with the same model, starter, prompt, and budget
for no file vs a Google-compatible file vs Core v2.

## 4. Machine authority and metadata placement

Machine-only information belongs under `.omd/system/`:

- `manifest.json` — format/version/profile, file hashes, graph identity, and
  declared extensions;
- `graph.json` — typed design-system graph and platform/surface deltas;
- `provenance.json` — source class, evidence domain, confidence, freshness, and
  unresolved paths;
- `coverage.json` — independent coverage axes and implementation-conformance
  status;
- `adoption-receipt.json` — OmD proof-profile binding from the reviewed inputs to
  the compiler's five authority outputs;
- project adoption reports — generated validator/adopter results. Agents never
  author or repair them.

The manifest uses `format: "design-md-core"`, `format_version: "2.0.0"`, and
`profile: "portable-core"`. Tool-specific extension data uses reverse-DNS keys
inside the graph's `extensions` object. It must never leak into the portable
file unless it changes an actual design decision.

Provenance and coverage use neutral sidecar schemas:

- `https://oh-my-design.kr/schema/design-system-provenance-v2.schema.json`
- `https://oh-my-design.kr/schema/design-system-coverage-v2.schema.json`

OmD's exact-byte authority transaction uses three additional receipt schemas:

- `https://oh-my-design.kr/schema/design-md-core-adoption-review-v2.schema.json`
- `https://oh-my-design.kr/schema/design-md-core-adoption-receipt-v2.schema.json`
- `https://oh-my-design.kr/schema/design-md-core-project-checkpoint-v2.schema.json`

The three receipts are an **OmD proof profile**, not part of the standalone Core
document format. A user can paste `DESIGN.md` into a generic chat, Claude Design,
or Open Design without any receipt or OmD runtime. A non-OmD implementation may
provide its own auditable adoption controller, but must not claim compatibility
with OmD receipts unless it validates and preserves these exact schemas and
authority semantics.

Schema and compiler conformance prove the declared data shape, controlled
semantics, deterministic projection, and exact bindings. They do not prove that a
fact is true, that evidence is sufficient, that an asset/font/logo license permits
the target use, that the visual result is high quality, or that product code
matches the system. Those remain independent provenance, license, visual-review,
and same-route runtime proof gates.

Legacy fields move as follows:

| Legacy metadata | v2 destination |
|---|---|
| `omd`, generator version, captured/verified timestamps | manifest or provenance |
| brand/reference identity and upstream URLs | graph identity and provenance |
| verification tier, evidence domain, confidence, TTL | provenance and coverage |
| machine tokens duplicated in frontmatter and prose | graph once; concise semantic decisions projected into Core |
| audit receipts and migration notes | proof or migration report |

## 5. Dual-read, single-write transition

During two compatibility releases, consumers must read:

- OmD v0.1 frontmatter with numbered 13, 15, or 16-section documents;
- unmarked Google/Stitch-compatible DESIGN.md documents;
- Core v2 documents with semantic anchors.

Every new generation, synthesis, refresh, or refactor must write Core v2 only.
An old template, selected reference, or user document may inform the graph, but
its heading array and frontmatter must never be copied into new output.

Refactoring an existing document is a migration operation. It must not be
implemented as free-form heading edits.

## 6. Lossless migration algorithm

Each migration is provider-free and deterministic:

1. Read source bytes and record their SHA-256 before parsing.
2. Classify the source format without treating frontmatter claims as truth.
3. Parse frontmatter, heading blocks, tables, lists, prose, and code fences into
   source segments with byte ranges.
4. Map semantic claims into the typed graph. Mapping is based on meaning and
   evidence class, never section number alone.
5. Put every unsupported or not-yet-mapped segment into a reverse-DNS opaque
   extension with its original bytes, order, source range, and hash.
6. Compile a neutral Core projection from the graph.
7. Reparse the Core and compare all supported graph fields.
8. Verify every source segment is either mapped or opaque-preserved. `dropped`
   must equal zero.
9. Write a migration report before any source replacement is allowed.

Expected report counters:

```json
{
  "source_segments": 0,
  "mapped_segments": 0,
  "opaque_preserved_segments": 0,
  "dropped_segments": 0,
  "unsupported_claims_promoted": null,
  "unsupported_claims_review_required": true,
  "synthetic_product_values_added": 0,
  "quality_tier_changed": false,
  "projection_roundtrip_equal": true,
  "source_reconstruction_equal": true,
  "authoritative_adoption_ready": false
}
```

Migration output is a **staged, non-authoritative candidate**. A zero-loss
projection is not evidence that every inherited claim is correct. Project adoption
requires provenance review, coverage completion, schema validation, and a fresh
system proof before the graph may become canonical.

`dropped_segments > 0`, an unresolved provenance reference, a hash mismatch, or
a quality promotion must fail closed.

## 7. Safe write policy

Migration defaults to inspection. It must not overwrite `DESIGN.md`.

- `--dry-run` prints the classification and loss summary.
- `--check` exits non-zero on any loss, drift, unsupported promotion, or invalid
  Core output.
- `--out-dir` writes a staged Core, sidecars, and report without changing the
  source.
- The explicit adopter validates one fresh compiler package outside the target
  project, writes a journal and rollback snapshot, then replaces `DESIGN.md` and
  `.omd/system/` as one rollback-safe transaction.
- Catalog mode is audit-only until Builder, CLI, and web consumers read the same
  graph and pass parity tests.

No migration may change `verified_v2`, partial, or legacy quality state. Format,
evidence, freshness, coverage, and implementation conformance are independent
axes.

The implemented public sequence is:

```bash
npx oh-my-design-cli@latest design-md prepare-review <graph.json> \
  --provenance <provenance.json> --coverage <coverage.json> \
  --out-dir <fresh-review-dir>
npx oh-my-design-cli@latest design-md approve-review \
  <fresh-review-dir>/review-request.json --reviewer <project-owner-id> \
  --out <fresh-review-receipt.json> --authority-transition-approved
npx oh-my-design-cli@latest design-md compile \
  <fresh-review-dir>/input-graph.json \
  --provenance <fresh-review-dir>/provenance.json \
  --coverage <fresh-review-dir>/coverage.json \
  --review-receipt <fresh-review-receipt.json> \
  --out-dir <fresh-package-dir-outside-project> --adopt
npx oh-my-design-cli@latest design-md prepare-checkpoint \
  <fresh-package-dir-outside-project> --reviewer <project-owner-id> \
  --out <fresh-project-checkpoint.json> --authority-transition-approved
npx oh-my-design-cli@latest design-md adopt \
  <fresh-package-dir-outside-project> --project-root <project-root> \
  --checkpoint-receipt <fresh-project-checkpoint.json>
```

For migrated input, both `prepare-review` and `compile` also receive the same
reviewed migration report (`compile` uses the copy frozen inside the review
directory). Only the project owner, or a pre-registered external authority
controller operating under that owner's policy, may approve the candidate and
package. The agent that generated, reviewed, or implemented it cannot
self-approve. The compiler owns final hashes; users and agents do not transcribe
them manually.

This preserves the product's one-prompt direction without promising silent
authority. One initial brief can trigger autonomous discovery, graph construction,
proof preparation, and preview generation with no manual harness setup. Exact
preview approval and exact package adoption remain consequential authority
checkpoints.

## 8. 440-reference rollout

The catalog migration is deliberately staged:

### Wave 0 — fixtures and dogfood

- canonical 15-section file;
- 16-section extension file;
- the noncanonical Bunjang-style document;
- an unmarked Google-compatible file;
- the repository's own project `DESIGN.md`;
- a native Core v2 document.

### Wave 1 — 141 `verified_v2` references

Generate reports and staged views only. Evidence closure must remain unchanged;
missing coverage remains missing. A `verified_v2` reference is not promoted to
a complete design system.

### Wave 2 — 159 partial and 140 legacy references

Preserve raw source and generate v2 views. Do not infer missing components,
fonts, spacing, states, locale behavior, or platform rules.

### Wave 3 — consumer cutover

Builder, reference pages, CLI installation, exports, and reference queries must
consume one graph projection and pass byte/hash parity tests. Only then may the
canonical catalog switch its single-write output to Core v2.

### Wave 4 — source cleanup

Remove duplicated legacy fields only after two released readers can import both
formats and rollback artifacts have been verified. Mass rewriting before this
gate is prohibited.

## 9. Generation and refactor enforcement

Every workflow that creates or changes a design system must share these gates:

1. Resolve `reuse`, `reconstruct`, `establish`, `refresh`, or surface-local-only.
2. Build or update the typed graph before rendering Core.
3. Keep product facts, verified reference inspiration, agent proposals, and
   unknowns as distinct provenance classes.
4. Compile Core; never hand-copy a reference's headings or frontmatter.
5. Freeze an exact candidate preview and obtain owner-controlled, hash-bound
   review; the generating agent never self-approves.
6. Validate semantic anchors, graph closure, asset/font authority, locale and
   platform profiles, and Core self-sufficiency.
7. Run migration check for legacy input and preserve opaque extensions.
8. Compile into a fresh immutable package, obtain the exact package checkpoint,
   and adopt through the rollback-safe project transaction.
9. Bind the accepted Core hash into implementation proof.

This applies to Autopilot, `omd:init`, reference creation, reference migration,
preference learning, and any future design-system refactor. Ad-hoc UI repair may
read legacy files during the compatibility window but must not silently rewrite
them.

## 10. Release gates

Core v2 is not ready for default write until all gates pass:

- normative spec and schemas parse and validate;
- schema IDs resolve to byte-identical public artifacts, and packaged installs
  carry the same closed schemas beside the validator;
- review, compiler-adoption, and project-checkpoint receipts validate against the
  OmD proof-profile schemas without becoming standalone Core requirements;
- all six Wave-0 formats migrate with `dropped=0`;
- all 440 catalog files pass audit-only migration, with every output remaining
  staged and non-authoritative until claim provenance is adopted;
- 141 verified references retain exact evidence and quality identity;
- Core-alone fixtures are useful without `.omd/` or OmD instructions;
- new Autopilot and init fixtures produce neutral Core only;
- newly bootstrapped Autopilot missions require Core authority and cannot use
  the legacy proof branch to enter product implementation;
- legacy inputs remain readable for two compatibility releases;
- every Builder projection reparses into the Core graph and recompiles through
  the CLI compiler to byte-identical `DESIGN.md`; the portable-only Builder
  download may omit sidecars, but it must never define a second Markdown
  dialect or claim machine authority without a manifest;
- canonical skills and agents match the active Claude/Codex/OpenCode/Cursor
  installation mirrors; generated mirror drift fails CI;
- publishing performs a read-only generated-artifact check and never rewrites
  a user's existing `llms.txt` or `llms-full.txt` as a side effect;
- format utility benchmark is preregistered before any superiority claim;
- migration rollback and independent claim audit pass.
