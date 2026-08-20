# OmD 2.0 — council-first, interview-only-when-needed

Date: 2026-08-06

## Why this is a 2.0 product contract

The current harness performs deterministic repository inspection, then asks for
audience, scope, wow moment, CTA, and visual grounding before specialist design
work begins. That is safer than an ungrounded generator, but it makes the user
the coordinator and asks them to resolve choices the system can often settle
from evidence.

OmD 2.0 reverses the order:

```text
request
  -> repository and product evidence packet
  -> silent design council
  -> decision ledger
  -> risk-gated interview, only when required
  -> plan / build / critic / exact-route verification
```

This does not remove human authority. It moves the human checkpoint to the
small set of decisions where a wrong assumption would change product direction,
brand commitments, data handling, security, pricing, or expensive scope.

## What is borrowed from Ouroboros 0.50.8

The useful pattern is not “more agents.” It is a bounded decision protocol:

- inspect repository facts before asking factual questions;
- convene researcher, contrarian, simplifier, and architecture viewpoints at
  ambiguity milestones;
- synthesize 2–3 concrete options or a recommended draft;
- keep an ambiguity and decision ledger;
- separate reversible implementation choices from decisions that require human
  authority;
- preserve a typed escalation outcome instead of retrying or asking by habit.

OmD must specialize that pattern for product design. Visual evidence,
interaction quality, reference provenance, accessibility, and the exact
consumer route are first-class council inputs.

## Council lanes

Each lane is read-only. It returns claims with evidence references, confidence,
and unresolved conflicts. No lane edits product files.

1. `code_context` — stack, routes, protected behavior, reusable components.
2. `product_context` — audience, task, business outcome, CTA implications.
3. `reference_evidence` — DESIGN.md, live capture, assets, unknown boundaries.
4. `ux_quality` — hierarchy, usability, accessibility, locale, responsive risk.
5. `architecture_implications` — scope, state model, component/system impact.
6. `ambiguity_contrarian` — unsupported assumptions and wrong-problem checks.

The master remains the only implementation owner.

## Decision ledger

Every candidate decision is recorded with:

```json
{
  "id": "primary-cta",
  "proposed_value": "Open Builder",
  "evidence": ["task.md", "ctx-prime.json#/surface_inventory/0"],
  "confidence": 0.82,
  "impact": "high",
  "reversibility": "moderate",
  "authority": "product",
  "disposition": "auto|interview|defer|blocked",
  "reason": "..."
}
```

### Deterministic disposition rules

- `auto`: evidence-backed, confidence >= 0.75, and either low impact or easily
  reversible. The choice is logged and can be changed later.
- `interview`: user authority is required, impact is high and evidence conflicts,
  or the decision changes product/brand/security/data/pricing commitments.
- `defer`: not needed for the next useful surface. Preserve it in the ledger;
  do not ask yet.
- `blocked`: required evidence or authority is unavailable and proceeding would
  fabricate a fact or violate a protected contract.

Unknown never becomes a plausible default. An unknown fact is omitted or
escalated at the smallest affected boundary.

## Interview contract

The interview contains only `interview` decisions. It is one batched decision
brief with at most four questions. Each question provides:

- the decision and why it matters now;
- 2–3 mutually exclusive options;
- a recommended option when evidence supports one;
- the consequence of each choice;
- a “decide later” path when the decision is not actually blocking.

The existing mandatory plan, DESIGN.md extension, and validation checkpoints
remain until a later evidence-backed patch changes that contract. Council-first
reduces intake interrogation; it does not silently bypass current ship authority.

## Implementation ladder

### Slice A — deterministic council packet (next patch)

- add `scripts/design-council-prime.cjs`;
- consume `task.md` and `ctx-prime.json`;
- emit `council/context-packet.json` and `council/decision-ledger.json`;
- replace the fixed audience + four-question intake with questions derived from
  ledger entries whose disposition is `interview`;
- install the helper with every supported host channel;
- add deterministic fixtures for explicit and ambiguous briefs.

This slice does not claim that a multi-agent debate occurred. It creates the
typed boundary that later model agents must consume.

### Slice B — bounded council dispatch

- dispatch the six read-only lanes before the first interview;
- correlate results by lane id and reject uncited claims;
- have the master synthesize `council/debate.md` and update the ledger;
- cap one council round before intake and one contrarian round before ship.

### Slice C — autonomous continuation and measurement

- continue automatically for `auto` and `defer` decisions;
- measure questions per run, unplanned handoffs, decision reversals, task
  completion, elapsed time, and token cost;
- compare against the current interview-first harness on frozen tasks;
- require no quality, evidence-honesty, accessibility, or exact-route regression.

## 2.0 acceptance

The council-first gate passes only when repeated current-epoch runs show:

1. every user question maps to a ledger item requiring user authority;
2. factual questions answerable from repository/reference evidence are zero;
3. median pre-build user questions and unplanned handoffs improve over 1.9.0;
4. completion quality is Pareto non-dominated for resolved rate, elapsed time,
   token use, and human intervention;
5. no regression in unknown-means-absent, accessibility, five locales, or
   exact consumer-route re-verification;
6. every autonomous choice is reconstructable from the retained ledger.
