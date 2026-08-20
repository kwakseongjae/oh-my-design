# Conjunctive release latch candidate — 1.9.274

Status: **AUTHORED, NOT QUALITY-PROMOTED**

The rejected 1.9.263 candidate won all three paired score comparisons and reached 85/85 once, but its other trials completed only one of the two required edit outcomes: one left 200% reflow red and one left exact contrast red. This bounded delta keeps the existing three-field pre-edit invariant and makes the first two outcomes explicitly conjunctive.

Before consolidated static closure, the foreground field now requires selector, surface, exact before ratio, verified replacement, and exact after ratio or fail-closed text-role replacement. The carrier field must explicitly cover 390px, 320px, and actual 200% zoom/reflow. A single breakpoint, maximum width, `width:100%`, page-overflow result, or unmeasured placeholder cannot satisfy the carrier result. Browser session creation still does not count as navigation proof.

The same change is mirrored into the historical decision-context copy. No new phase, resource, script, benchmark selector, task identifier, fixture value, color, component, or token was added.

Canonical skill size changed from 39,093 to 39,610 bytes (+517); words changed from 4,397 to 4,460 (+63).

Validation:

- skill-creator quick validation: pass
- omd:apply delivery contract: 9/9 green
- TypeScript lint: green
- build: green

This is an authored hypothesis, not a quality claim. Next: exact commit pin followed by a fresh unseen topology; the equipment rack is not reused for promotion.
