<p align="center">
  <img src="https://raw.githubusercontent.com/kwakseongjae/oh-my-design/main/.github/assets/logo-bg.png" width="480" alt="oh-my-design" />
</p>

<h1 align="center">oh-my-design</h1>

<p align="center">
  <strong>A design system your coding agent can actually hold.</strong> <code>oh-my-design-cli</code> installs the middle that AI UI work keeps missing: a philosophy you declare, tokens and component contracts derived from it, numbered gates for the failures AI repeats, and <code>omd book</code> to read your own system back. 22 skills, 19 specialist roles, 93 preset contracts, 440+ quality-graded references. No API key or MCP server for the core workflows.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/v/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/oh-my-design-cli"><img src="https://img.shields.io/npm/dm/oh-my-design-cli?style=flat-square&color=cb3837" alt="npm downloads" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/kwakseongjae/oh-my-design?style=flat-square" alt="License" /></a>
  <a href="https://github.com/kwakseongjae/oh-my-design/stargazers"><img src="https://img.shields.io/github/stars/kwakseongjae/oh-my-design?style=social" alt="GitHub Stars" /></a>
  <img src="https://img.shields.io/badge/references-440%2B-7c5cfc?style=flat-square" alt="440+ References" />
  <img src="https://img.shields.io/badge/CLI-install%20%2B%20doctor-blue?style=flat-square" alt="Install and doctor CLI" />
</p>

<p align="center">
  English | <a href="README.ko.md">한국어</a> | <a href="README.ja.md">日本語</a> | <a href="README.zh-TW.md">繁體中文</a>
</p>

---

## What you get back

Three artifacts, all of them files in your repository:

| | |
|---|---|
| **`DESIGN.md`** | Your philosophy with its sacrifices stated, a decision table where every choice carries an id, and tokens that point back at the decision that produced them. Portable enough to paste into a plain chat; specific enough that a designer can find out *why* a value is what it is. |
| **A design system** | Component contracts with anatomy, a state matrix — including the states that deliberately do not apply and the reason — an accessibility contract, and the token slots your decisions fill. 93 preset contracts across fundamentals, shadcn/Radix-mapped primitives, screen genres, and reference-derived flavors. |
| **`omd book`** | `npx oh-my-design-cli@latest book` serves your system on a local port: each token beside its decision, state matrices with their reasons, contrast measured live against the pairs you declared, and preset lineage. `--static` writes a single HTML file for handoff. |

In v2.0.0 every layer above is a file you can edit — the philosophy, the presets, the gates, the references — and the next build has to justify itself against whatever you put there. Taste you cannot inspect cannot be improved.

Full walkthrough: **[oh-my-design.kr/cli](https://oh-my-design.kr/cli)**.

## How the system gets derived

A screen is the last step, not the first. The harness makes the agent build a
system it then has to answer to:

```
philosophy → decision table → tokens → component contracts → layout grammar → build → render critique → DESIGN.md
```

Each step constrains the next. A principle has to name what it sacrifices — a
principle you cannot argue with is decoration. Every decision gets an id
(`D-<principle>-<n>`) and one line of rationale. Tokens carry that id back, so a
value with no decision behind it is a gate failure, not a style preference. The
chain is specified in
[`skills/omd-autopilot/references/derivation-chain.md`](./skills/omd-autopilot/references/derivation-chain.md).

Here is what that looks like in a `DESIGN.md` the harness actually produced
([`benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md`](./benchmarks/ui-resolve-bench/e2e/onzip/DESIGN.md),
644 lines, generated end to end):

```markdown
### Principles
- Accent is a signal — terracotta on linen, used for the primary action,
  selected chip, and focus ring, never a full-card wash (D-P2-4).

### Semantic tokens
- **color.accent**: `#8B4529` — Terracotta signal. D-P2-4. 6.1:1 on paper.
  Area budget under 5 percent.
```

The same id appears in the principle and in the token. That is the whole idea:
you can start at any value in the system and walk back to the sentence that
caused it.

Component contracts go one level further — they cite the preset they inherited
from, and they state which interaction states *deliberately* do not apply, with
the reason:

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

`P-CM-01` and `P-FN-07` are entries in the preset catalog, so the build did not
invent a card from zero. shadcn/ui gives you the structure; the preset says which
values must come from *your* decision table instead of a library default.

Two of the numbered gates exist specifically to keep this honest —
`GS7` fails a token that carries no decision reference, and `GS8` fails a
component built from scratch when a matching preset existed. Both are in
[`slop-gates.md`](./skills/omd-autopilot/references/slop-gates.md) alongside
54 other checks.

### Verify any of this yourself

Nothing above needs the CLI installed to check — these are files in this repo:

| What to look at | Where |
|---|---|
| The portable contract, its seven anchors and conformance levels | [`spec/design-md-core-v2.md`](./spec/design-md-core-v2.md) |
| Machine-readable schemas for the graph, provenance, coverage | [`spec/schema/`](./spec/schema/) |
| The derivation chain the agent follows | [`skills/omd-autopilot/references/derivation-chain.md`](./skills/omd-autopilot/references/derivation-chain.md) |
| 54 slop gates + 8 system-fidelity gates | [`skills/omd-autopilot/references/slop-gates.md`](./skills/omd-autopilot/references/slop-gates.md) |
| 45 component-craft norms (geometry, states, optical alignment) | [`skills/omd-autopilot/references/component-craft.md`](./skills/omd-autopilot/references/component-craft.md) |
| 93 preset contracts in four layers | [`skills/omd-autopilot/references/presets/`](./skills/omd-autopilot/references/presets/) |
| Three complete systems the harness generated | [`benchmarks/ui-resolve-bench/e2e/`](./benchmarks/ui-resolve-bench/e2e/) |
| `omd book` — how the system gets rendered back | [`src/cli/book.ts`](./src/cli/book.ts) |

## What is oh-my-design?

**oh-my-design (OmD)** installs local design workflows into the coding tool you already use. Claude Code, Codex, and OpenCode receive reusable skills and specialist roles; Cursor receives native Agent Skills plus a focused project rule that applies the same `DESIGN.md`. New design-system creation targets the vendor-neutral [DESIGN.md Core v2](./spec/design-md-core-v2.md): a concise portable contract that remains useful when pasted into a generic chat or attached to Claude Design/Open Design, with optional structured evidence under `.omd/system/`. The package also includes 440+ quality-graded company references. Existing reference formats remain readable during the lossless migration window. **Core install and local workflows need no separate API key, daemon, or MCP server; inference stays inside your existing coding-agent session. The optional `claude-design` skill opens your logged-in claude.ai/design session in Chrome.**

### DESIGN.md Core v2

The visible file starts with the project, not with OmD metadata. It has no YAML
frontmatter, generator stamp, model name, verification tier, or internal path.
Seven stable semantic anchors cover experience, foundations, typography/assets,
components/states, layout/platforms, content/locales, and governance.

When an adopted `profile: portable-core` manifest and `graph.json` are valid and
hash-bound, the graph is the machine source of truth and `DESIGN.md` is its
portable projection. A staged `migration-candidate` manifest remains
non-authoritative: the named source DESIGN.md stays canonical until explicit
adoption.
Without those sidecars, Markdown that passes `omd design-md validate` is still a
complete brief for a human or an unfamiliar design/coding tool. A seven-anchor
file may be recognized as structural Core while failing the stronger Portable
Core usefulness gate, for example when no primary task is evidenced. Unknown
values stay absent instead of becoming plausible defaults.

Browse the adopted system on a local port — tokens with the decision that
produced them, component state matrices including the states that deliberately
do not apply, contrast measured against the pairs the system promised, and the
preset lineage:

```bash
npx oh-my-design-cli@latest book              # serves on :6060, re-reads on refresh
npx oh-my-design-cli@latest book --static ./out   # standalone HTML for handoff
```

Inspect or stage a legacy migration without overwriting the source:

```bash
npx oh-my-design-cli@latest design-md inspect ./DESIGN.md
npx oh-my-design-cli@latest design-md validate ./DESIGN.md
npx oh-my-design-cli@latest design-md migrate ./DESIGN.md --out-dir .omd/migrations/core-v2
```

The migration is dual-read/single-write: legacy 13/15/16-section and unmarked
documents remain readable, while new generation and refactoring write Core v2.
A staged migration must preserve every source segment as a mapped Core decision
or an opaque extension and report `dropped=0`. See the
[migration plan](./docs/DESIGN_MD_CORE_V2_MIGRATION_PLAN.md).

<details>
<summary><strong>Graph adoption and migration transactions</strong> — operator reference, not needed to get started</summary>

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

For migrated input, pass the reviewed or rebound `migration-report.json` to both
`prepare-review` and `compile`. Only the project owner, or a pre-registered
external authority controller acting under the owner's policy, may provide the
two authority approvals. The generating or implementing agent cannot
self-approve. Compilation proves Core shape, deterministic projection, and exact
bindings; factual truth, provenance sufficiency, license permission, visual
quality, and runtime conformance remain separate evidence gates. See the
[CLI quickstart](./docs/CLI_QUICKSTART.md) for the artifact boundaries.

</details>

## Install

```bash
npx oh-my-design-cli@latest
```

Then restart your agent so it discovers the newly installed channel files, and verify those files once. Codex users must also trust the project before project-local roles are loaded:

```bash
npx oh-my-design-cli@latest doctor
```

The CLI bootstraps and diagnoses the bundle. Every design task after that is natural language to your agent. If you are unsure what to say—or whether it belongs in the terminal—ask the local route guide:

```bash
npx oh-my-design-cli@latest workflows "improve our existing pricing page"
# Korean output: add --lang ko
```

It prints one prompt to paste into your coding agent and the workflow that will own delivery. It does not run a second AI service.

The installer asks **where** to install: **Project** (channel-local files in this repository, the default) or **Global** (user-level files available across projects). OpenCode uses `.opencode/` for project installs and `~/.config/opencode/` for global installs. Global installation leaves hooks/settings untouched. Use `npx oh-my-design-cli@latest install-skills --global` to select that scope non-interactively, then verify it with `npx oh-my-design-cli@latest doctor --global`.

## Your first 60 seconds — Claude Code, Codex, or OpenCode

This is the shortest path from install to a visible result.

1. Install (above), then **restart your agent** (Cmd+Q, relaunch) so it loads the new skills.

2. In your project, type your first prompt — copy this exactly:

   > Create a project-owned DESIGN.md for a family meal-tracking app. Use Toss as a reference, keep only verified reference facts, and ask before deciding product-specific facts.

   Your skill-enabled agent runs **`omd:init`**: it recommends a reference from
   the 440+ quality-graded company catalog and prepares the exact graph and
   `DESIGN.md` preview. After the project owner (or a pre-registered external
   authority controller) reviews and approves the exact bytes, OmD compiles a
   hash-bound package and adopts it atomically into the project. The agent never
   approves its own proposal. (`omd:sync` can then update the managed
   agent-instruction shims.)

   **The adopted file and its bound sidecars are the handoff.** They stay in your
   repository, so later sessions can read the same decisions again. “One shot”
   means one initial brief and zero manual harness setup, not a silent authority
   transition: exact preview and package adoption remain consequential
   checkpoints.

3. Now build against it:

   > Read DESIGN.md and design the home screen. Preserve the current behavior and logo.

   The agent reads `DESIGN.md`, works against the recorded decisions, and leaves a result you can inspect in the project.

OmD keeps one implementation owner for that result. Specialist roles provide evidence and focused recommendations; the main agent changes the product and reverifies the same route, viewport, and state. A full new-surface harness uses its three required checkpoints, then hands approved artifacts back to the main agent for product integration when implementation was requested.

Don't want Toss? Any brand works — `Stripe-style`, `Linear-clone B2B SaaS`, `Karrot-style marketplace`. Browse the full catalog at [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems).

## Supported agents

| Agent | Channel | What gets installed |
|---|---|---|
| **Claude Code** | `--agent claude-code` (default) | Full bundle — skills, 19 sub-agents, hooks, data under `.claude/` |
| **Codex** | `--agent codex` | Skills at `.agents/skills/`, embedded sub-agent roles under `.codex/agents/`, and the local catalog under `.codex/data/` |
| **OpenCode** | `--agent opencode` | Project: skills, native sub-agents, and catalog under `.opencode/{skills,agents,data}/`; global: the same bundle under `~/.config/opencode/{skills,agents,data}/` |
| **Cursor** | `--agent cursor` | 21 compatible Agent Skills under `.cursor/skills/`, a small `.cursor/rules/omd-design.mdc` bootstrap, and the shared `.claude/data` catalog; no OmD sub-agent definitions or hooks |

The default install targets every detected agent. For one non-interactive channel, run `npx oh-my-design-cli@latest install-skills --agent <name> --all`.

### Cursor's supported path

Cursor 2.4+ discovers the 21 compatible OmD Agent Skills from `.cursor/skills/`. Restart Cursor after installation, then ask naturally: `Set up our design system — Toss-style, for a family meal-tracking app.` Cursor can route through `omd-init`, or you can invoke `/omd-init` explicitly. The small always-on rule keeps the non-negotiable contract in scope: `DESIGN.md` first, pending `.omd/preferences.md` corrections second, framework defaults last, and unknown facts absent.

For older Cursor clients, `--cursor-rule-only` installs the historical rule + catalog compatibility mode without Agent Skills. OmD's separately generated specialist sub-agent definitions and hooks remain unavailable in Cursor.

## What's inside

**22 skills · 19 sub-agents · 440+ quality-graded references · activation hooks** make up the full bundle. Cursor receives the 21 portable skills; `claude-design`, OmD sub-agent definitions, and activation hooks remain channel-specific.

- **Skills** — core flow (`omd:autopilot` / `omd:init` / `omd:apply` / `omd:harness` / `omd:sync` / `omd:update` / `omd:remember` / `omd:learn` / `omd:taste` — say "what are my preferences" to see everything the loop has learned, pending, or snoozed), live capture + assets (`omd:reference-capture` / `omd:asset-fetch` / `omd:experiment-gallery`), the writing and review layer (`omd:orchestrator` / `omd:kr-writer` / `omd:locale-adapter` / `omd:humanize` / `omd:designer-review` / `omd:final-qa` / `omd:codex-image`), interface quality (`omd:feel` / `omd:slop-audit`), plus the standalone `claude-design` skill that drives claude.ai/design from your terminal.
- **Sub-agents** — `omd-master` + 18 specialists (UX research, UI generation, asset curation, copy humanization, slop auditing, a11y audit, persona testing, critique, …).
- **References** — 440+ company `DESIGN.md` files with explicit evidence and quality status. Every reference is also served as raw markdown at `oh-my-design.kr/<id>/design.md`, so agents can fetch it directly.
- **Hooks** — UserPromptSubmit / SessionStart / PostToolUse activation so the skills trigger on natural language, not just slash commands.

Outcome-first workflows, reproducible examples, and all five locales: **[oh-my-design.kr/docs/en](https://oh-my-design.kr/docs/en)** · [한국어](https://oh-my-design.kr/docs/ko) · [日本語](https://oh-my-design.kr/docs/ja) · [简体中文](https://oh-my-design.kr/docs/zh-cn) · [繁體中文](https://oh-my-design.kr/docs/zh-tw).

The old catalog MCP transport is retired. Skills and agents consume the local catalog or the raw `/<id>/design.md` route directly; the historical implementation remains under `packages/mcp/` as an archive.

## Upgrading

```bash
npx oh-my-design-cli@latest update
```

The updater detects the current project/global scope and installed channels, then refreshes only that managed bundle. It does not add channels, enable optional hooks, or use `--force`. Files you edited remain untouched (`skipped-drift`); follow the exact scoped action when local drift needs a decision. Restart your agent after updating, then verify the refreshed bundle:

```bash
npx oh-my-design-cli@latest doctor
```

```bash
npx oh-my-design-cli --version       # what your project currently uses
npm view oh-my-design-cli version    # latest on the registry
```

What changed each release — including anything that needs more than a re-install — is in [CHANGELOG.md](./CHANGELOG.md).

## Links

- **Catalog** — [oh-my-design.kr/design-systems](https://oh-my-design.kr/design-systems) (every reference, with raw `.md` twins for agents)
- **Collections** — [oh-my-design.kr/collections](https://oh-my-design.kr/collections) (curated sets by use case)
- **Docs** — [oh-my-design.kr/docs/en](https://oh-my-design.kr/docs/en) (install options, skills, agents, FAQ)
- **Live demo playbook** — [oh-my-design.kr/docs/en/demo](https://oh-my-design.kr/docs/en/demo) (5-, 15-, and 30-minute formats with an evidence checklist)
- **Changelog** — [CHANGELOG.md](CHANGELOG.md) · migrating from 0.1.x: [MIGRATION.md](MIGRATION.md)

## License

MIT — see [LICENSE](LICENSE). References belong to their respective companies; reproduced for educational reference.
