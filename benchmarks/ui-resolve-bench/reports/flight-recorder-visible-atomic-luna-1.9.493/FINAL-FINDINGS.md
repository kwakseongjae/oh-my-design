# Flight-recorder visible atomic-fit transfer — final 1.9.496

Neither r1 arm produced a UI-resolved result. The 1.9.483 control scored 79/85
with 33/103/206px page overflow and failed before browser proof because its
static manifest used a bare boolean attribute as a cardinality assertion. The
1.9.490 candidate also scored 79/85: it removed all page overflow, contrast
failures, and atomic wrapping, but clipped `Open download review` at 390px,
320px, and actual 200% reflow.

The candidate did validate three intended repairs. It attached to `bench19366`
without launching a browser, measured all three conditions, excluded the long
decision evidence and initially empty form status from the atomic inventory,
and measured 16px reserve for the padded custody control. Those results are
retained even though promotion fails.

Two general gaps remain. First, the model locked the compound decision target
at 18px/21.7px even though the actual pre-edit computed role is 18px/27.9px;
the terminal helper correctly rejected the mismatch. Second, it put the entire
decision—including the action—inside an overflowing grid. The target exceeded
the usable carrier by 57.27px at 390px and 127.27px at 320px/actual 200%, while
the action label retained only 2.16px reserve and was visibly clipped. A valid
repair needs a distinct named, keyboard-reachable comparison carrier around
the compound target only, with the action outside it and full-row on narrow
conditions.

Candidate wall time is 1.1022× control and token use is 1.3066×. Since the
candidate already missed UI-Resolved 3/3, four cells are frozen and there is no
promotion. Tokens-to-Target reaches at least 51,734,008 plus six
usage-unavailable cells. The next patch is provider-free: deterministic
computed-type capture plus an explicit compound-target carrier-planning
contract, followed by frozen replay, exact pin, and another unseen transfer.
