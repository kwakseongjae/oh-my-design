# Cursor fixed-model Skill Lift — 1.9.44

Status: **LOCKED; fresh 9-cell workspace prepared; explicit execution approval
received; matrix provider execution not yet started**.

The 1.9.43 automatic-discovery and explicit `/omd-apply` Cursor canaries both
passed with `Cursor Grok 4.5 High`. The user then explicitly approved the
canary → lock → fresh 9-cell sequence in the Codex conversation. No input in
Cursor is required from the user.

The frozen source commit is
`e331c451b510e7f3c64ca7219fbbf0c870e76057`; the compute-control implementation
is `05cf4dbd50c0d02cb2481012df1a6a3b46d0f165`. The locked matrix SHA-256 is
`412efd7dcfde44768ab1095a57a37aaf718c474fda8362243f838e7cc019eba3`.
Prepared workspace hashes are recorded in `PREPARATION.json`.

## Question

With Cursor Agent and Grok 4.5 High fixed, does the reviewed OmD apply skill
improve UI resolution over the same frozen Raw DESIGN.md without weakening
task behavior, evidence honesty, responsive behavior, or accessibility?

The no-skill arm is a context floor. The primary Skill Lift comparison is Raw
DESIGN.md versus OmD; no blended model/runtime/skill score is allowed.

## Locked matrix

- Runtime: Cursor Agent `2026.07.23-e383d2b`
- Model selector: `cursor-grok-4.5-high`
- Runtime-reported label: `Cursor Grok 4.5 High`
- Attribution: display-name only; every result remains Internal
- Task: `pricing-conversion-v0.1`
- Conditions: `baseline`, `raw-design-md`, `omd-portable`
- Trials: 3 per condition
- Total: 9 fresh cells in a balanced three-order rotation
- Timeout: 900 seconds per cell
- Controller effort metadata: `high`
- Provider effort argument: none
- Root: `/tmp/u1944`
- Auto/Router: forbidden

The six 1.9.42 artifacts are diagnostic inputs only and stay outside this
denominator.

## Cursor-native candidate contract

The candidate workspace must:

- install only the reviewed OmD apply tree under
  `.cursor/skills/omd-apply/`;
- render frontmatter `name: omd-apply`;
- render activation as `/omd-apply`, not Codex/Claude `$omd:apply`;
- exclude `.cursor/` from the product diff;
- execute no installer, hooks, MCP, remote assets, package installation, or
  separately generated sub-agent definitions;
- preserve exact source commit, scoped-clean source attestation, skill-tree
  hash, prepared workspace hash, and Cursor runtime provenance.

## External transmission boundary

Provider execution may transmit only each prepared workspace:

- task-owned `index.html`;
- task-owned `DESIGN.md` in Raw and OmD arms only;
- `.benchmark/PROMPT.md`, `manifest.json`, and `matrix-cell.json`;
- local `AGENTS.md`;
- OmD arm only: `.cursor/skills/omd-apply/SKILL.md` and its
  `agents/openai.yaml`.

It excludes repository history, unrelated source, the 440-reference catalog,
user documents, credentials, `web/public/llms-full.txt`, and every other OmD
skill. Explicit user approval for this named scope was received before the
first matrix provider call.

## Fail-closed execution

Stop at the first auth, quota, selector, display-name, runtime, workspace hash,
process, timeout, product-diff, evaluator, or exporter failure. Preserve the
failed cell and mark later cells `not-started`. No retry, resume, fallback,
manual product edit, or failed-cell replacement is allowed.

## Acceptance

Execution is complete only when all nine cells are valid and preserve:

1. task, state, responsive, design-grounding, Evidence & Unknown, and
   accessibility gates;
2. exact requested selector, expected display name, binary version/hash,
   usage, raw stream, stderr, and product-only diff;
3. zero unsupported claims, replacement verifiers, MCP, Auto/Router, and
   provider effort flags.

The candidate passes the bounded hypothesis only when:

- OmD is UI-Resolved in 3/3 trials;
- OmD has zero paired objective losses versus Raw DESIGN.md;
- OmD passes the accessibility critical gate in 3/3 trials;
- the `signal-orange` small-text contrast failure is 0/3;
- invalid ARIA table parentage and keyboard-unreachable horizontal comparison
  failures are 0/3;
- OmD's median objective score is at least Raw's median.

No-task-expansion, public winner, model claim, general skill superiority,
confidence interval, or frontier claim follows from one task × three trials.
