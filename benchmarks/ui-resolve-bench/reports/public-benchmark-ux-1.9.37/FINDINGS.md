# 1.9.37 findings — public evidence slice accepted

## Implemented

`/benchmarks` now exposes the smallest honest public benchmark surface:

- the page labels itself `Internal evidence` and `Not a leaderboard`;
- Model, Skill Lift, and Harness remain separate questions;
- the 1.9.22 Harness checkpoint shows 5/9 versus 8/9, paired 4/4/1,
  the -22.22 to 100 percentage-point interval, time, tokens, and the known
  77/85 candidate loss;
- the 1.9.34 failure, 1.9.35 contract calibration, and fresh 1.9.36 recovery
  remain distinct records;
- the six objective gates and Internal → Preview → Verified publication ladder
  are visible before any ranking surface;
- source reports and the full method are directly inspectable.

The homepage and install funnel are unchanged. Discoverability and activation
remain the separate 1.9.38 patch.

## Truth-plane result

The web route does not read benchmark reports outside the Vercel project root
and does not duplicate scores in component source. A deterministic root script
reads the canonical 1.9.22 and 1.9.34–1.9.36 reports and generates
`web/src/data/ui-benchmark-public.generated.json`.

The generator fails closed when:

- the source experiment changes;
- the Harness claim is no longer Internal;
- the 18-cell denominator or 5/9 and 8/9 numerators change;
- the current confidence interval no longer includes zero;
- the locale failure or fresh recovery source changes.

Both pull-request quality CI and release CI run the generated-data freshness
check.

## Verification completed

- generated-data build and stale check: pass;
- final public route/data focused tests: 6/6;
- full web suite: 827/827;
- web TypeScript: pass;
- changed-file ESLint: pass;
- root CLI TypeScript: pass;
- root suite: 217 pass / 1 conditional skip;
- root CLI build: pass;
- diff check: pass;
- network-enabled Next production build: pass, 1,459 pages, `/benchmarks`
  statically generated.

The designated Browser Harness accepted the final revision at 1440px, 390px,
320px, and a 200%-equivalent 720px CSS viewport:

- horizontal overflow and clipped nodes: none;
- console errors and unhandled rejections: zero;
- axe-core 4.11.2 serious/critical findings: zero at every viewport;
- all nine links: keyboard reachable with a visible 3px focus ring;
- Method anchor: pointer and Enter both update `#method` and move the target
  into view;
- source and methodology links: labelled and valid.

The first browser pass exposed two release-blocking defects: insufficient text
contrast in the failed-run score badge and an unreliable long-page Method
anchor under the global smooth-scroll behavior. Both were fixed before all
browser and automated evidence was discarded and rerun.

## Decision

The minimum public evidence slice passes its 1.9.37 contract. It remains an
Internal, explicitly unranked result; acceptance of this route does not promote
the underlying evidence to Preview or Verified. Homepage, docs, and builder
activation remain a separately preregistered 1.9.38 decision.
