# Cursor Agent Skill channel 1.9.43 — findings

Status: **deterministic and live Cursor acceptance complete**.

## Outcome

Cursor's default project channel now installs 19 portable OmD Agent Skills
under `.cursor/skills/`. A small always-on rule keeps DESIGN.md precedence and
the fail-closed unknown boundary in context. Cursor still receives no OmD
sub-agent definitions, hooks, or settings, and the installer now reports those
actual counts instead of implying parity.

The historical rule + catalog behavior remains available only through the
explicit `--cursor-rule-only` compatibility flag. `doctor` recognizes the two
modes, rejects mixed rule-only/skill state, validates native skill contracts
and sidecars, and proposes a Cursor-only repair command.

## 1.9.42 repair targets

The reviewed `omd-apply` skill now makes the two 1.9.42 failure classes
procedural:

- declared accent colors are not assumed safe for small text; the skill must
  verify the computed foreground/background pair and use a declared accessible
  text role without inventing a darker brand color;
- native table semantics are preferred for tabular data, ARIA row/cell
  parentage must remain valid, and intentional horizontal scroll regions must
  be keyboard reachable and labelled.

The Raw DESIGN.md control remains frozen. Whether these instructions cause
measurable lift is not answered by this patch.

## Deterministic evidence

- focused Cursor installer/doctor/runtime/export: 75/75;
- root TypeScript and CLI build: pass;
- root suite: 230 pass, 1 conditional skip, with 2 unrelated environment
  failures because two retained `/tmp` external-vendor folders lack Git
  metadata;
- web TypeScript: pass;
- web suite: 830/830;
- network-enabled production build: 1,459 pages.

The external-vendor failures do not touch the Cursor install path and match the
known pre-existing test-environment condition. They remain visible rather than
being converted into a false green.

## Decision

The deterministic product channel is ready to package. Before opening a
quality comparison, run one separately approved live Cursor canary that
transmits only a temporary canary project and installed skill text. Then
preregister 1.9.44 as fixed-model Raw DESIGN.md vs OmD Skill Lift. Display-name
model attribution still keeps any resulting comparison Internal.

After an initial pre-transmission approval block, the user approved the exact
four-file Cursor/Grok scope. Automatic discovery and explicit `/omd-apply`
invocation both selected `omd-apply` and confirmed the semantic-color and
semantic-structure contracts without writes or prohibited tools. Exact payload
hashes, sessions, usage, and the retained initial block are in
[`LIVE-CANARY.md`](./LIVE-CANARY.md).
