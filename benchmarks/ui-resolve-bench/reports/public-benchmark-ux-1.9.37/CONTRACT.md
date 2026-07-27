# 1.9.37 public benchmark UX evidence contract

## Hypothesis

A visitor can understand what was tested, what failed, what remains uncertain,
and what would be required for a public ranking without mistaking internal
calibration evidence for a global leaderboard.

## Public claim boundary

- The route is an **Internal evidence** page, not a leaderboard.
- Model, Skill Lift, and Harness questions remain separate.
- Only the completed 1.9.22 Harness Track checkpoint and the 1.9.34–1.9.36
  locale accessibility recovery are exposed.
- The 1.9.22 confidence interval is shown and described as including zero.
- The candidate loss is visible beside the aggregate improvement.
- The one-cell locale recovery cannot support a locale-lift, model, skill,
  efficiency, frontier, or global-rank claim.
- Preview and Verified remain future statuses. Verified requires at least 24
  tasks, 10 runs per task, a complete run package, blind practitioner review,
  and independent artifact audit.

## Data contract

Canonical benchmark reports stay outside the Vercel `web/` root. A deterministic
root script reads those reports and writes one committed derived JSON artifact
under `web/src/data/`. CI fails when that artifact is stale or when the source
denominators and claim labels no longer match the assumptions used by the
public page.

The page may display only fields present in that generated artifact. It must not
retype denominators or scores in component source.

## Minimum route acceptance

`/benchmarks` must make all of the following visible without a hidden menu:

1. `Internal evidence` and `Not a leaderboard`.
2. Three distinct track questions, with only Harness marked as having current
   evidence.
3. Portable `5/9` versus bounded harness `8/9`, paired `4/4/1`, and the 95%
   interval `-22.22 to 100` percentage points.
4. The `operations-t3-harness` 77/85 loss and its failed design checks.
5. The 1.9.34 failure → 1.9.35 contract → 1.9.36 fresh recovery sequence.
6. The six objective gates and the difference between Internal, Preview, and
   Verified.
7. Direct links to the methodology and canonical source reports.

The route must pass TypeScript, production build, sitemap coverage, desktop and
mobile horizontal-overflow checks, keyboard navigation, and serious/critical
axe checks. No homepage navigation or install-funnel promotion is part of
1.9.37; activation and discoverability remain the separate 1.9.38 patch.

