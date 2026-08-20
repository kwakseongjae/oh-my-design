# Readable reflow delta — 1.9.230

Status: **CANDIDATE AUTHORED; not promoted**

## Evidence

The completed 1.9.225 assay matrix produced UI-Resolved `0/3` in both arms.
All six results failed the serious accessibility gate because normal text used
the declared muted pair `#66716C` on `#F3F1EA`, whose measured ratio was 4.48:1.
The old skill warned about unmeasured accent text but did not state clearly
that a named muted/supporting token is also untrusted and that an existing
failing pair must be corrected even when the diff did not introduce it.

Four of six results also missed at least one responsive geometry condition.
The recurring 200% failures were parent-row failures: atomic identifiers,
supplied-count metadata, state text, or a short action wrapped while the page
kept a desktop sibling relationship. The old contract named full-row and stack
as remedies but did not force the decision at the parent row before allowing
an atomic child to wrap.

## Bounded delta

The candidate changes only two contracts in `omd:apply`:

1. Measure every current and planned normal-text pair, including muted,
   secondary, and supporting tokens; never round 4.48 up to 4.5; replace a
   failed or unresolved pair with an existing verified ink/text-role token.
2. At the narrowest condition, stack the parent metadata/decision row before
   any atomic child wraps, and release desktop sizing constraints in the narrow
   cascade.

No task selector, fixture value, color literal, or benchmark-only acceptance
hook was added to the skill. This checkpoint makes no quality or frontier
claim. The candidate needs a fresh unseen non-approval task and an exact
current-vs-candidate Reliability@3 comparison before promotion.
