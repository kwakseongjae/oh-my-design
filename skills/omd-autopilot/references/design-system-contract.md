# Project design-system proof contract — Core v2

An Autopilot-created, synthesized, refreshed, or refactored system writes Core
v2 only. Legacy 13/15/16-section and unmarked documents remain readable during
the compatibility window; they are never used as a new-output template.

## Portable projection

The root `DESIGN.md` is a vendor-neutral, standalone design contract. It:

- starts with `# <Product> Design System`, with no YAML/frontmatter or preceding
  tool, vendor, generator, model, timestamp, quality, or verification metadata;
- contains exactly the seven ordered anchor/H2 pairs below;
- remains useful when copied without `.omd/` into a generic chat, Claude Design,
  Open Design, or another coding agent; and
- omits unknown values at the smallest unresolved boundary rather than inserting
  a fallback, adjacent-brand fact, generic component, or placeholder fact.

```markdown
<!-- design-md:section experience -->
## 1. Experience
<!-- design-md:section foundations -->
## 2. Foundations
<!-- design-md:section typography-assets -->
## 3. Typography & Assets
<!-- design-md:section components-states -->
## 4. Components & States
<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms
<!-- design-md:section content-locales -->
## 6. Content & Locales
<!-- design-md:section governance -->
## 7. Governance
```

Heading prose may be localized. Stable anchor IDs and order never change.
The block above describes rendered output; it is not an authoring template.

The canonical compiler also owns these seven bounded declaration ids:
`scope`, `primary-tasks`, `foundations`, `authority`,
`application-priority`, `unknowns`, and `changes`. It emits every
`design-md:claim` opener and matching `design-md:claim-end`. An agent writes
semantic graph fields, never these comments or the controlled governance copy.
Declaration conformance only makes the portable contract machine-checkable; it
does not attest that a fact, source, license, locale, accessibility result, or
visual-quality claim is true.

## Canonical compilation and adoption

The main agent may write only run-scoped graph, provenance, and coverage drafts.
The authority-neutral graph draft has no `projection` binding or
`projection.sha256`; the compiler creates it. If the installed compiler validates
only the final bound-graph schema or asks the agent to seed a placeholder, precomputed, or zero SHA,
fail closed at the draft—never satisfy that request.

In an externally controlled benchmark, the controller receipt and activation
hash are authority. The main agent never impersonates a project owner. It must
write one set of drafts and call the execution-owned `$OMD_AUTHORITY_CONTROLLER_EXECUTABLE` once;
the helper consumes the prepared review's normalized `input-graph.json`,
`provenance.json`, and `coverage.json` throughout the compile path. Direct
approval/checkpoint flags and `review-v2`/`package-v2` retries are forbidden.
For component-state compatibility, interactive components carry the complete
seven-state applicability map; non-interactive components carry a reason and
may render default/error/success variants without acquiring a fictional focus
contract.

The two authority-neutral sidecars omit both `design_md_sha256` and
`graph_sha256`; do not write zeroes or calculate them. Provenance contains only
`schema_version: "2.0.0"` plus a non-empty `decisions` array whose paths and
values exactly match the graph. Coverage contains only `schema_version`, all
seven Core `groups`, and all eleven required `checks`; every group cites an
existing regular project/run artifact such as `.benchmark/PROMPT.md`, and every
check uses `method: "controller-computed-system-graph-v2"`. The controller
creates every final binding from the reviewed inputs.
After an explicit `establish` or `refresh` authorization, validate those drafts
and render a non-authoritative, exact review package outside the project authority
paths:

```bash
omd design-md prepare-review <graph> --provenance <provenance> --coverage <coverage> --out-dir <review> [--migration-report <report>]
```

Show `<review>/DESIGN.md`, its decisions/limits, and `review-request.json` to the
actual project owner or a preregistered external authority controller. The main
agent never self-approves exact bytes. Only after that authority responds may the
provider-free tool materialize the bound receipt and compile:

```bash
omd design-md approve-review <review>/review-request.json --reviewer <project-owner-id> --out <approval> --authority-transition-approved
omd design-md compile <review>/input-graph.json --provenance <review>/provenance.json --coverage <review>/coverage.json --review-receipt <approval> [--migration-report <review>/migration-report.json] --out-dir <fresh> --adopt
```

The only fallback is the byte-equivalent installed
`prepare-design-md-core-review.cjs`, `compile-design-md-core.cjs`, and
`adopt-design-md-core.cjs` helper chain with the same inputs and flags.

Do not recreate its renderer, hand-write `DESIGN.md`, copy/edit section or claim
markers, or calculate/patch a manifest or binding hash. Read back the fresh
package and validate canonical rendering, Portable declarations, manifest
authority, graph/projection bindings, provenance, coverage, unknown absence, and
opaque extensions. If the compiled manifest does not bind the exact provenance
and coverage artifacts, fail closed at staging; never repair that gap with
agent-authored hashes.

Only a second, explicit project-adoption checkpoint may move the exact validated
bytes into `.omd/system/` and root `DESIGN.md`:

```bash
omd design-md prepare-checkpoint <fresh> --reviewer <project-owner-id> --out <checkpoint> --authority-transition-approved
omd design-md adopt <fresh> --project-root <project-root> --checkpoint-receipt <checkpoint>
```

These commands validate all six compiler artifacts and use a journaled,
rollback-safe atomic package adopter transaction. Never copy files one by one. The installed final
project-system validator must pass before product implementation.

## Canonical authority package

Machine authority and proof metadata live only under the project-owned
`.omd/system/` directory:

- `manifest.json` — `format: "design-md-core"`, `format_version: "2.0.0"`,
  `profile: "portable-core"`, frozen section order, authority paths and hashes;
- `graph.json` — canonical typed graph with `schema_version: "2.0.0"`, identity,
  projection binding, seven required section objects, and optional extensions;
- `provenance.json` — decision source classes and resolvable evidence; and
- `coverage.json` — section and deterministic check coverage.

When an adopted `profile: portable-core` manifest and graph bind the exact
projection bytes, the graph is canonical and `DESIGN.md` is its portable
projection. A `migration-candidate` keeps its named source DESIGN.md canonical.
When the authority package is missing or stale, the Markdown may still be read,
but no Bound/Proven System claim is allowed.

Root extension keys are reverse-DNS identifiers. Readers preserve unknown
extension key/value pairs. An extension cannot override a Core field.

## Required semantic groups

1. `experience` — product/surface scope, primary task, direction and supported
   project-authority facts.
2. `foundations` — semantic colors, measured contrast, spacing, density, shape,
   elevation, motion and reduced-motion behavior.
3. `typography-assets` — roles/metrics, font availability, imagery/icon/logo
   authority, source and license state.
4. `components-states` — anatomy, variants, token references, accessibility and
   applicable state matrix.
5. `layout-platforms` — responsive priority, minimum width, 200% reflow, touch,
   overflow and named platform adaptations.
6. `content-locales` — voice, terminology, formatting, scripts/fonts, expansion
   and actual locale behavior.
7. `governance` — authority priority, provenance classes, exceptions, extension
   policy, unknown-absence rule and consequential unresolved decisions.

## Provenance values

Every consequential decision uses exactly one source class:

- `prompt-fact`
- `repository-fact`
- `verified-reference-inspiration`
- `agent-proposed-greenfield-decision`
- `unresolved`

An agent proposal is an original project proposal, not an observed brand fact.
An unresolved decision has no value and is absent from tokens, components,
prescriptive Markdown, and product code.

## Fail-closed checks

- visible Core clean-top and frozen anchor/order validation;
- manifest, graph, projection, provenance and coverage hash binding;
- all referenced tokens resolve;
- color contrast meets the applicable text/control requirement;
- components cover only applicable states, with a reason for `not-applicable`;
- responsive rules preserve task order and prove 320px and 200% reflow;
- motion has a reduced-motion path;
- fonts and assets have authority, source and license status;
- locale and platform contracts are complete for every claimed target;
- no unresolved value is consumed or promoted;
- every coverage/provenance reference resolves; and
- opaque migration extensions survive refresh/refactor unchanged unless an
  explicit, report-bound migration maps them into Core.

Any failed required check blocks product implementation. After two bounded
repairs, deliver an honest failed proof rather than force-pass.

## Legacy migration/refactor gate

A refactor or refresh of legacy input is a migration, not free-form Markdown
editing. Before replacement:

1. inspect and classify the source;
2. run the installed provider-free migration helper in staged mode and `--check`;
3. require every source segment to be mapped or preserved under
   `extensions["dev.oh-my-design.migration"]`;
4. require `dropped=0`, unsupported promotions 0, unchanged evidence/quality
   authority, and round-trip equality;
5. archive exact source bytes plus report in a content-addressed rollback path;
6. validate the temporary migration candidate, which remains non-authoritative;
7. compile an explicitly authorized graph through the canonical fresh-stage
   adoption command above; then
8. validate and atomically adopt the exact compiled package at the separate
   project checkpoint.

If the helper is absent or the check fails, leave the existing system unchanged.

## Proof ownership

The main agent authors semantic drafts and invokes the compiler. The compiler
alone authors the canonical projection, compiled graph, manifest, claim markers,
and their hashes. The main agent never authors `system/proof.json`. The installed
deterministic validator writes the run-scoped proof and reports its authority
mode:

- `core-v2-project-system` for `.omd/system` graph authority; or
- `legacy-run-scoped-v0.1` only for compatibility fixtures and already-existing
  legacy Autopilot runs.

New create/refresh work must never choose the legacy proof path.
