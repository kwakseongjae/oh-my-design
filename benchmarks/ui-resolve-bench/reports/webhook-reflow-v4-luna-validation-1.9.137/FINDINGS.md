# Webhook destination reflow v4 Luna validation — findings

Status: **COMPLETE; v4 candidate rejected**.

All 6/6 preregistered cells completed valid with no retry, fallback, repair,
replacement, or model substitution. Previous scores were 73/73/75; v4 scores
were 79/79/81. The paired v4 W/T/L is 3/0/0 and its median is 79 versus 73,
but both arms are UI-Resolved 0/3 and Reliability@3 0%. The candidate therefore
misses the release gate and cannot be promoted from this result.

V4 did remove the original event-ID and endpoint-path fragmentation in all
three trials, preserved every protected journey and hook, and kept evidence
honesty green 3/3. Its remaining failures form two bounded clusters:

1. trials 1 and 3 left the short policy label `Require signature verification`
   beside its compact toggle, so it wrapped at mobile/narrow/200% rather than
   receiving a full-width label row before the control;
2. trial 2 made responsive geometry fully green by putting horizontal overflow
   directly on the selected source text and state text. Those single-text
   scroll regions had no focus target, producing `scrollable-region-focusable`
   axe violations and invisible keyboard focus at narrow/200%.

The previous arm remained lower and failed accessibility 3/3 as well as short
atomic geometry 3/3. V4 is a repeatable improvement, but not a reliable
resolution. It was also more expensive: mean wall time was about 376 seconds
versus 336 seconds (+11.8%), and mean reported tokens were about 902k versus
736k (+22.5%). Efficiency therefore cannot justify promotion either.

The next revision must refine the existing closure rather than add a
task-specific rule: a label paired with a compact control gets a full-width
mobile label row before the control when required for its declared line budget;
`overflow-x` on a single atomic identifier, filename, state, or short label is
not an acceptable text repair; an internal horizontal scroller is reserved for
a genuinely multi-item comparison container and must satisfy the existing
name, focus, and visible-focus contract. Validate on a new unseen family.
