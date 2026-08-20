# 1.9.738 findings — two-lane council replay

The retained 1.9.736 evidence was replayed with only the first two selected
lanes: `ambiguity_contrarian` plus `product_context`. Across all three cases,
the compact council reproduced every effective disposition from the four-lane
council. Changed decision count is zero, including the regulated pricing
blocker and missing official-reference blocker.

The default dispatch cap is therefore reduced from four to two. On the retained
live calls this would keep 6 instead of 12 calls, 481,744 instead of 849,118 ms
of sequential lane wall time, and 891,673 instead of 1,743,331 combined
reported tokens: projected reductions of 43.3% wall and 48.9% tokens.

These are replay projections, not fresh runtime measurements. The next run must
use the newly generated two-lane plans in fresh isolated workspaces and pass the
same authority, blocker, and forbidden-auto gates before the compact policy is
treated as live evidence.
