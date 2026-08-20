# Adaptive data-surface closure — 1.9.95 findings

Status: **ACCEPTED; provider-free**.

## Outcome

The canonical `omd-apply` skill now treats changed wide data and comparison
surfaces as one transaction before interactive closure.

For each relevant surface it records semantic role, containment owner, width
strategy, overflow owner, keyboard entry, and focus-visible proof. The agent
must choose reflow, wrap, or one component-owned internal scroll region instead
of letting the document overflow or assuming `width: 100%` is sufficient.

When an internal scroll region has no natural focus target, the actual overflow
owner receives a labelled keyboard affordance with a class-specific,
measurable visible-focus treatment. The affordance is reconciled in interactive
closure but does not authorize a new product action, state, hook, fact, token,
or product-control cardinality change. Decorative or non-scrollable wrappers do
not receive tab stops.

## Contract closure

Acceptance is blocked until all six conditions are zero:

- `outer_document_overflow`
- `clipped_adaptive_content`
- `unresolved_overflow_owner`
- `unreachable_scroll_region`
- `unmeasurable_focus_indicator`
- `unnecessary_region_tabstop`

The existing protected behavior, foreground, geometry-token, interactive,
visual-equity, unknown-as-absent, no-replacement-verifier, and delivery-reserve
contracts remain intact.

## Verification

- canonical/Codex/Claude/Cursor focused adaptation: 3/3;
- install-skills distribution: 36/36;
- TypeScript lint: pass;
- build: pass;
- Node syntax: pass;
- diff check: pass;
- canonical skill: 240 lines;
- canonical SHA-256: `0c2440a469fec92e9950761c97db54174f87a266c2b0eb92225607d32fb42036`;
- provider calls: zero.

The broader sandbox file retained 52/54 passing tests. Its two failures are the
pre-existing non-Git `taste-skill` and `ui-ux-pro-max` fixtures under
`/tmp/omd-ui-skills-bench/vendors`; neither failure touches the OmD contract or
distribution path.

## Decision

The provider-free patch is accepted. It establishes a shipped procedural
contract, not live compliance or superiority. The next valid evidence is a
fresh pricing replacement that compares the exact 1.9.78 candidate with this
new exact commit. The completed `/tmp/u1994` root remains immutable.
