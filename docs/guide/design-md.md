# DESIGN.md

oh-my-design deals in two kinds of DESIGN.md.

| | Where it lives | Format |
|---|---|---|
| **Archive files** | `web/references/<id>/DESIGN.md`, served raw at `oh-my-design.kr/<id>/design.md` | [DESIGN.md v3](../../spec/design-md-v3.md), a superset of Google's DESIGN.md: Google's frontmatter and section order, plus three things Google doesn't define (font facts, CJK typesetting, and a `reference.json` evidence sidecar) |
| **Your project's file** | `DESIGN.md` at your repository root | [DESIGN.md Core v2](../../spec/design-md-core-v2.md): no frontmatter, seven anchored sections, optional structured evidence under `.omd/system/` |

Both follow one rule: a value nobody could confirm is left out, not guessed.

## Your project's DESIGN.md

The file starts with your project, not with oh-my-design. It has no YAML
frontmatter, generator stamp, model name, verification tier or internal path.
Seven stable anchors cover experience, foundations, typography and assets,
components and states, layout and platforms, content and locales, and
governance. Paste it into a plain chat, or attach it to Claude Design or Open
Design, and it still works as a brief.

When an adopted `profile: portable-core` manifest and `graph.json` are valid and
hash-bound, the graph is the machine source of truth and `DESIGN.md` is its
portable projection. A staged `migration-candidate` manifest is not
authoritative: the source DESIGN.md stays canonical until it is explicitly
adopted. Without those sidecars, Markdown that passes `omd design-md validate`
is still a complete brief. A seven-anchor file can be structurally Core and
still fail the stronger Portable Core usefulness gate, for example when no
primary task is evidenced.

## How a system gets derived

A screen is the last step, not the first. The harness makes the agent build a
system it then has to answer to:

```
philosophy → decision table → tokens → component contracts → layout grammar → build → render critique → DESIGN.md
```

Each step constrains the next. A principle has to name what it sacrifices; a
principle you can't argue with is decoration. Every decision gets an id
(`D-<principle>-<n>`) and one line of rationale. Tokens carry that id back, so a
value with no decision behind it is a gate failure, not a style preference. The
chain is specified in
[`derivation-chain.md`](../../skills/omd-autopilot/references/derivation-chain.md).

Here is an excerpt from a DESIGN.md the harness generated end to end for a test
brief ([`fixtures/e2e-onzip/`](../../benchmarks/ui-resolve-bench/fixtures/e2e-onzip/)):

```markdown
### Principles
- Accent is a signal — terracotta on linen, used for the primary action,
  selected chip, and focus ring, never a full-card wash (D-P2-4).

### Semantic tokens
- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper.
  Area budget under 5 percent.
```

The same id appears in the principle and in the token. Start at any value and
you can walk back to the sentence that caused it.

Component contracts go one level further. They cite the preset they inherited
from, and they say which interaction states deliberately don't apply, and why:

```markdown
### Component: product-card
**Semantics:** P-CM-01. Price is the heaviest text. Whole-card link, no inner
competing CTA. Painted hover uses four-sided space.4 (P-FN-07).

| State | Applicability | Reason |
|---|---|---|
| disabled | not-applicable | A sold-out item still opens its detail page;
                             stock is a badge, not a disabled card. |
| loading  | not-applicable | Card media uses explicit width and height; the
                             card itself is not a pending control. |
```

`P-CM-01` and `P-FN-07` are entries in the preset catalog, so the build didn't
invent a card from zero. shadcn/ui gives you the structure; the preset says
which values must come from your decision table instead of a library default.

Two of the numbered gates keep this honest: `GS7` fails a token that carries no
decision reference, and `GS8` fails a component built from scratch when a
matching preset existed. Both sit with the rest of the gates in
[`slop-gates.md`](../../skills/omd-autopilot/references/slop-gates.md).

## Read it back

`omd book` serves the adopted system on a local port: each token beside the
decision that produced it, state matrices with their reasons, contrast measured
against the pairs the system promised, and preset lineage.

```bash
npx oh-my-design-cli@latest book                  # serves on :6060, re-reads on refresh
npx oh-my-design-cli@latest book --static ./out   # one HTML file for handoff
```

## Inspect and migrate

```bash
npx oh-my-design-cli@latest design-md inspect ./DESIGN.md
npx oh-my-design-cli@latest design-md validate ./DESIGN.md
npx oh-my-design-cli@latest design-md migrate ./DESIGN.md --out-dir .omd/migrations/core-v2
```

Migration is dual-read, single-write. Legacy 13/15/16-section and unmarked
documents stay readable; new generation and refactoring write Core v2. A staged
migration must keep every source segment as a mapped Core decision or an opaque
extension and report `dropped=0`. See the
[migration plan](../DESIGN_MD_CORE_V2_MIGRATION_PLAN.md).

<details>
<summary><strong>Graph adoption and migration transactions</strong> (operator reference, not needed to get started)</summary>

If repository facts or reviewed user decisions enrich the staged graph before
review, rebind the unchanged migration ledger with the provider-free helper;
never hand-edit report hashes:

```bash
npx oh-my-design-cli@latest design-md rebind-migration <migration-dir> \
  --enrichment <safe-partial-enrichment.json> --provenance <provenance.json> \
  --coverage <coverage.json> --out-dir <fresh-rebound-dir>
```

Use `--graph <complete-enriched-graph.json>` only when an external tool already
produced the whole graph. The safer `--enrichment` form starts from the
lossless candidate internally and forbids writes to opaque extensions,
projection bindings, and schema identity.

Adopting a graph-backed project system is an exact, receipt-gated transaction:

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

An owner-reviewed reference reconstruction uses the same public commands with
`--adoption-target reference-catalog` on both `prepare-checkpoint` and `adopt`.
The checkpoint binds that target to the exact package; the adopter also requires
an `evidence-backed-reconstruction` graph and its compiler-bound lossless ledger.
This path reports Bound System and does not treat coverage flags as runtime proof.

For migrated input, pass the reviewed or rebound `migration-report.json` to both
`prepare-review` and `compile`. Only the project owner, or a pre-registered
external authority controller acting under the owner's policy, may provide the
two authority approvals. The generating or implementing agent cannot
self-approve. Compilation proves Core shape, deterministic projection, and exact
bindings; factual truth, provenance sufficiency, license permission, visual
quality, and runtime conformance remain separate evidence gates. See the
[CLI quickstart](../CLI_QUICKSTART.md) for the artifact boundaries.

</details>

## Check it yourself

None of this needs the CLI installed. These are files in this repository:

| What | Where |
|---|---|
| The portable contract, its seven anchors and conformance levels | [`spec/design-md-core-v2.md`](../../spec/design-md-core-v2.md) |
| The archive format | [`spec/design-md-v3.md`](../../spec/design-md-v3.md) |
| Machine-readable schemas for the graph, provenance and coverage | [`spec/schema/`](../../spec/schema/) |
| The derivation chain the agent follows | [`derivation-chain.md`](../../skills/omd-autopilot/references/derivation-chain.md) |
| The numbered slop gates and the eight system-fidelity gates | [`slop-gates.md`](../../skills/omd-autopilot/references/slop-gates.md) |
| 45 component-craft norms (geometry, states, optical alignment) | [`component-craft.md`](../../skills/omd-autopilot/references/component-craft.md) |
| 93 preset contracts in four layers | [`presets/`](../../skills/omd-autopilot/references/presets/) |
| How `omd book` renders the system back | [`src/cli/book.ts`](../../src/cli/book.ts) |
