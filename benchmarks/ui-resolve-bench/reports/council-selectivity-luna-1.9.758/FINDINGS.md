# Findings — council selectivity 1.9.758

## Result

The council reduced four interview decisions to three while retaining the mandatory annual-pricing question. Both Luna/high lanes completed with valid artifacts, no undeclared writes, no timeout, no retry, and no Cursor usage.

The preregistered selectivity gate failed. Only `exit-scope` became `defer`; `primary-audience` and `primary-cta` remained `interview`. The required result was three correct deferrals with zero mandatory-question loss.

## Failure mechanism

The contrarian lane correctly classified all three repository-fixed contracts as deferrable and kept pricing as an interview. The product-context lane instead treated audience and CTA as inherently user-owned even though the brief explicitly said to preserve them. Reconciliation gives `interview` a higher safety priority than `defer`, so disagreement retained both questions.

The conservative reconciliation policy worked as designed. The defect is upstream: the product-context role contract does not distinguish preserving an existing product contract from selecting a new product direction sharply enough.

## Cost

Two lanes consumed 107,539 input tokens, 74,496 of them cached, plus 3,899 output and 2,473 reasoning-output tokens. Summed lane wall time was 86,737 ms. With one correct deferral, that is 107,539 input tokens per removed interruption—far too expensive as a production default.

## Next correction

The next patch must leave reconciliation conservative and refine the advisory contract instead:

- preserving an explicit existing audience, scope, or CTA is `defer`, because no new product choice is being made;
- changing or selecting an audience, scope, CTA, price, security, privacy, data, or brand commitment remains `interview` or `blocked`;
- each lane must state whether the decision is `preserve-existing` or `choose-new` before recommending a disposition.

The same mixed oracle may be repeated only as a fresh versioned experiment with its own frozen runner hash. A passing single case remains calibration evidence, not general superiority evidence.

