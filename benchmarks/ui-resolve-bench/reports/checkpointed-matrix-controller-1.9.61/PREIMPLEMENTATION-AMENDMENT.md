# 1.9.61 pre-implementation amendment

This amendment was locked after read-only Sol High audits and before controller
implementation, tests, or provider execution.

The initial preregistration treated 120 seconds as a minimum cooldown. The
retained 1.9.60 trace shows why that is insufficient: a suspended controller
returned after 659,462 ms and immediately launched the next provider cell.
An unbounded overshoot can conceal an operator pause or host suspension and
changes the provider-time context.

The acceptance window is therefore frozen at 120,000–125,000 ms on both a
monotonic clock and retained wall timestamps. A difference greater than 5,000
ms between those clocks, an early return, an overshoot, or a root-local
cancellation sentinel freezes before the next provider call.

This narrows orchestration acceptance only. It does not change any task,
candidate, prompt, model, evaluator, score, timeout, or historical result.
