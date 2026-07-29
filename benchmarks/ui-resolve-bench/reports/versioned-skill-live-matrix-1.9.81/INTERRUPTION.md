# Versioned Skill Live Matrix — 1.9.81 Interruption

## Status

**FROZEN AFTER CELL 1 / 18 — INVALID ATTRIBUTION**

`/tmp/u1980` must not be resumed, rescored, relabelled, or completed with
another model. A `STOP` sentinel preserves that decision.

## What completed

Cell `onboarding-t1-slate` completed the provider process and product edit:

- requested selector: `cursor-grok-4.5-high`
- reported display name: `Cursor Grok 4.5 High`
- process exit: 0
- timeout: false
- usage evidence: provider event
- product change: `index.html` only
- deterministic score: 85 / 85
- Evidence & Unknown: passed
- wall time: 386,611 ms
- observed non-cached tokens: 66,043

These facts are diagnostic only. The run record is
`validity: invalid-attribution`, so `ui_resolved` is false and the cell cannot
enter a skill-lift denominator.

## Root cause

The runtime contract correctly recognizes the pair:

`cursor-grok-4.5-high` → `Cursor Grok 4.5 High`

as `runtime-reported-display-name`. The exporter nevertheless classifies every
run with that evidence mode as `invalid-attribution`, independent of the
locked Internal claim boundary:

```js
if (run?.runtime?.model_evidence_mode === "runtime-reported-display-name") {
  return "invalid-attribution";
}
```

The 1.9.81 preregistration explicitly allowed Internal display-name
attribution while forbidding a public model claim. The current exporter has no
way to represent that distinction, so the prepared matrix and export policy
are incompatible.

## Next valid patch

Preregister a provider-free attribution-plane correction:

- retain strict invalidation for public/Verified model claims;
- allow an explicitly locked Internal matrix to produce an internally valid
  result when selector, registered display label, runtime agent, binary,
  provider route, and provider-event usage all match;
- surface claim scope separately from execution validity;
- add negative tests for unknown display names and any public promotion;
- never mutate or rescore `/tmp/u1980`;
- prepare a fresh replacement root only after acceptance.

No conclusion about the 1.9.78 visual-equity effect is available from this
interrupted root.
