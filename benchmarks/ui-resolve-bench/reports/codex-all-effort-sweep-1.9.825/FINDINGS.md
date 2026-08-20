# Codex all-effort sweep 1.9.825 — frozen diagnostic

## Disposition

This preregistered root is permanently `stopped-preregistered` and is not
eligible for continuation, aggregation, or publication. The controller state
contains three valid terminal cells, one provider-exposed stopped cell, and 47
not-started cells.

## Valid terminal cells

| Order | Cell | Route | Score | Wall time | Tokens |
| --- | --- | --- | ---: | ---: | ---: |
| 1 | `pollen-luna-medium-r1-omd` | Luna / medium | 85 / 85 | 201,954 ms | 673,979 |
| 2 | `seismic-terra-high-r1-omd` | Terra / high | 85 / 85 | 156,514 ms | 626,341 |
| 3 | `oral-history-sol-max-r1-omd` | Sol / max | 85 / 85 | 376,662 ms | 970,941 |

Valid-cell totals: 735,130 ms and 2,271,261 input-plus-output tokens.

## Freeze at order 4

`pollen-luna-max-r1-omd` completed its provider process with exit code 0 in
265,810 ms and reported 882,401 input-plus-output tokens. It produced a changed
product, an exact candidate/final byte pair, a passed static receipt, and a
closed measured browser proof. It did not produce an evaluator score or a
controller run record, so it has no benchmark validity, objective score, or
UI-Resolved result.

The candidate contained an escaped template-literal delimiter at line 355:

```js
valid ? \`Reviewer recorded: \${value}\` : 'Enter a reviewer name.'
```

That byte sequence is invalid JavaScript. The whole inline script failed to
parse, so its `submit` listener and `preventDefault()` were never registered.
The objective evaluator's `requestSubmit()` therefore initiated a native form
navigation. The following `page.evaluate()` lost its execution context and the
controller correctly froze the complete block as evaluator infrastructure
failure.

Attempted-provider totals across orders 1–4: 1,000,940 ms and 3,153,662
input-plus-output tokens. Order 4 is diagnostic exposure only and must never be
included in the result denominator.

## Required successor contract

The successor run must use a fresh root and begin at order 1 after all of these
provider-free gates pass:

1. Static preview compiles classic inline scripts without executing them and
   refuses promotion on syntax error.
2. The evaluator records page errors and post-entry main-frame navigation as a
   failed product contract instead of crashing.
3. Static design/evidence observations are captured before terminal behavior
   interaction, so an invalid product still receives a deterministic failed
   score.
4. The objective schema and methodology epoch are versioned, all three raw
   baselines are reproduced provider-free, and the new task bytes are committed
   before preregistration.

