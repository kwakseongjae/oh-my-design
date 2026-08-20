# Adaptive data-surface closure — 1.9.95 preregistration

## Trigger

The completed unseen pricing holdout produced four deterministic critical-gate
failures across six valid cells. The failures were concentrated in one
generalizable surface class: comparison data that becomes wider than its
container at narrow width or zoom.

- one control trial leaked and clipped by 4px at 390px and 320px;
- both trial-2 arms created an inaccessible horizontal scroll region;
- one control trial retained no measurable visible-focus paint at 320px and
  200% zoom.

The existing skill mentions scrollable regions late in the acceptance list but
does not make containment, overflow ownership, keyboard entry, and visible
focus one transactional closure. It also leaves tension between the protected
focusable-count rule and the focus target required by an existing data region.

## Frozen hypothesis

Adding one bounded **adaptive-data-surface closure** before interactive closure
should make wide comparison, table, command, and data surfaces explicitly
choose reflow, wrap, or internal scroll; keep overflow inside the component;
and, when internal scroll is necessary, provide a labelled keyboard entry with
a class-specific visible-focus treatment.

## Allowed source delta

- `skills/omd-apply/SKILL.md`;
- focused contract/distribution tests proving the prose reaches installed
  Cursor, Codex, Claude Code, and OpenCode skills;
- this report's findings and provider-free summary.

No task, starter, evaluator, score, model, timeout, retry, fallback, or provider
execution change is allowed in 1.9.95.

## Required contract

The closure records every added or changed surface that may exceed its
containing block at an acceptance viewport:

- identity and semantic role;
- containment owner;
- width strategy (`reflow|wrap|internal-scroll`);
- overflow owner;
- keyboard-entry decision;
- focus-visible proof.

Before acceptance:

1. outer-document overflow, clipped content, and unresolved overflow ownership
   are zero;
2. `width: 100%` is not assumed safe when padding, borders, minimum width,
   grid/flex min-content sizing, negative margins, or transforms can exceed the
   containing block;
3. reflow or wrapping is preferred when it preserves comparison meaning;
4. necessary internal scroll is owned by one labelled region;
5. a scroll region without a natural focus target receives a focus target on
   the actual overflow owner;
6. that focus affordance is classified separately from a new product action,
   reconciled in interactive closure, and cannot change behavior, facts, or
   product-control cardinality;
7. a class-specific `:focus-visible` rule must create a measurable paint delta
   and remain visible rather than relying on a generic selector by assumption;
8. non-scrollable decorative wrappers do not receive unnecessary tab stops.

## Provider-free acceptance

1. Canonical skill names `adaptive-data-surface closure`.
2. The six required fields and three zero conditions are present.
3. The protected, foreground, geometry-token, interactive, visual-equity,
   unknown-as-absent, no-replacement-verifier, and delivery-reserve contracts
   remain present.
4. Install-skills and Cursor benchmark adaptation distribute the contract.
5. Focused tests, TypeScript lint, build, syntax, JSON, and diff checks pass.
6. Provider calls remain zero.

## Stop conditions

- Do not change the completed `/tmp/u1994` result or evaluator.
- Do not hard-code Relay, pricing, a selector, or a benchmark viewport into the
  reusable skill.
- Do not make every wrapper focusable.
- Do not authorize new product controls, states, hooks, facts, or tokens.
- Do not open a fresh provider denominator until this provider-free patch is
  accepted and committed.
