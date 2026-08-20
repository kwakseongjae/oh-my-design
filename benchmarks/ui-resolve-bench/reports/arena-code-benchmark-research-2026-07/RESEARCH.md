# Arena Code / WebDev benchmark review — 2026-07

Status: **research complete; adoption recommendations are non-normative**.

## What Arena measures

Arena's current Code Arena is a pairwise human-preference system for generated
applications. A prompt is sent to two anonymous systems, evaluators interact
with the rendered results and source, and then vote. The current workflow
retains the prompt, model, version, latency, environment, tool trajectory, and
intermediate versions rather than treating the final screenshot as the whole
run.

The structured review axes are:

1. **Functionality** — whether the requested behavior works;
2. **Usability** — whether the result is understandable and operable;
3. **Fidelity** — whether the implementation follows the prompt or reference;
4. **Design / taste / aesthetics** — a preference judgement considered beside
   the three named axes.

The legacy WebDev leaderboard estimated model strength from pairwise wins and
losses with a Bradley–Terry model. Ties count as half a win in category
analysis. The open `arena-rank` package exposes ratings, variance, and lower
and upper confidence bounds. The public leaderboard therefore shows score,
asymmetric confidence interval, vote count, and rank spread rather than only
an exact ordinal rank.

Arena launched Code Arena as a fresh leaderboard and did not merge legacy
WebDev votes because the environment and scoring assumptions changed. It also
audits interface changes because the judging UI itself can shift voting
patterns.

## Taxonomy and slicing

Arena derived seven overlapping Code Arena categories from more than 250,000
prompts:

- Reference-Based Design;
- Brand, Marketing & Informational Websites;
- Data & Analytics Applications;
- Consumer Product & Platform Applications;
- Gaming;
- Simulations;
- Content Creation & Editing Tools.

Prompts may be multi-label. Arena selected the taxonomy for interpretability,
coverage, statistical robustness, and clear boundaries. The live leaderboard
also slices Frontend / Fullstack, HTML / React, license, price, context, and
the seven domains, and offers both ranking and Pareto views.

## What OmD should adopt

### 1. Keep two score planes

Do not blend objective correctness and taste into one opaque total.

- **Contract plane:** UI-Resolved@1, Evidence & Unknown, accessibility,
  responsive behavior, required states, and Reliability@k remain deterministic
  gates.
- **Preference plane:** a blind pairwise **Ship Preference** vote compares two
  gate-eligible artifacts. It records left / right / tie / both fail plus the
  Functionality, Usability, and Fidelity axes.

The preference plane may use Bradley–Terry ratings and 95% confidence
intervals. It must never override a failed contract gate.

### 2. Publish uncertainty, not a magic rank

Every public preference result should show:

- rating and 95% interval;
- vote count;
- rank spread;
- task count and independent-run count;
- W/T/L and Reliability@k for the deterministic plane;
- time, input/cache/output tokens, and cost availability.

Quality, time, tokens, and price belong in a Pareto view. They should not be
collapsed into a single efficiency score without a separately preregistered
utility function.

### 3. Add OmD-specific multi-label slices

Retain Arena's seven product-domain labels where useful, then add:

- create / repair / extend;
- reference-grounded / brief-only;
- static / interactive / stateful;
- responsive complexity;
- accessibility contract;
- locale and writing system;
- evidence / unknown handling;
- model / skill / harness family.

This allows the same task pack to compare models, skills, and harnesses without
putting those different interventions on one leaderboard.

### 4. Preserve a traceable run identity

Each vote and score must resolve to immutable prompt, task version, model and
runtime evidence, condition, skill hash, tool trajectory, rendered artifact,
screenshots, evaluator version, and run record. Randomized left/right order
must be retained. A subset should be presented in reversed order to detect
position bias.

### 5. Start a new epoch after normative changes

Changing the evaluator, task contract, rendering environment, judge UI,
category boundaries, or ranking model starts a new leaderboard epoch. Do not
merge ratings across epochs or compare their absolute Bradley–Terry scores.
Before changing the public comparison UI, run a judge-interface bias audit.

## What OmD should not adopt

- human preference as the only correctness signal;
- a single global rank that mixes Model, Skill Lift, and Harness families;
- absolute Bradley–Terry score comparisons across epochs;
- legacy and current votes in one denominator;
- community taste as authority to relax evidence, accessibility, or product
  behavior contracts;
- inverse-probability weighting before OmD actually introduces non-uniform
  public sampling.

## Proposed public result contract

| Layer | Primary result | Supporting evidence |
| --- | --- | --- |
| Contract | UI-Resolved@1 + gate pass | critical checks, Evidence, a11y, behavior |
| Reliability | Reliability@k | task-level pass across independent runs |
| Skill Lift | paired lift + W/T/L | hierarchical bootstrap interval when powered |
| Preference | Ship Preference BT rating | 95% CI, votes, rank spread, axis votes |
| Compute | Pareto placement | time, tokens, price availability |

The first public pilot should remain a separately preregistered experiment. This
research document does not change `PROTOCOL.md`, historical scores, acceptance
criteria, or the 1.9.70 denominator.

## Primary sources

- [Code Arena methodology](https://arena.ai/blog/code-arena)
- [Legacy WebDev Arena and Bradley–Terry scoring](https://arena.ai/blog/webdev-arena)
- [2026 Code Arena categories](https://arena.ai/blog/new-categories-code-arena)
- [Current WebDev leaderboard](https://arena.ai/leaderboard/code/webdev)
- [Leaderboard policy](https://arena.ai/blog/policy)
- [Open-source arena-rank implementation](https://github.com/lmarena/arena-rank)
