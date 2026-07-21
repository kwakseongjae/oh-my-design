# UI-Resolve public benchmark site

The site should help a visitor answer “which model, skill, or harness fits my UI
work?” without making unlike systems look directly comparable.

## Information architecture

```text
/benchmarks
  /models
  /skills
  /harnesses
  /prompt-arena
  /tasks
  /tasks/[task-id]
  /runs/[run-id]
  /methodology
  /changelog
```

The landing page shows three separate leaderboards. There is no global winner.
Each leaderboard explains what is held fixed in one sentence.

## Leaderboard row

Every row includes:

- candidate name and exact version/snapshot;
- Internal, Preview, Verified, or Retired status;
- `UI-Resolved@1` and 95% interval;
- `Reliability@k`;
- `Visual Ship Preference` and 95% interval;
- completed / scheduled runs;
- median objective score and IQR;
- median / P90 time and token/tool-call budget;
- last verified date and suite version;
- direct links to examples, raw manifest, failures, and methodology.

Default sorting follows the published primary ordering. Visitors can filter by
locale, task family, grounding type, budget tier, model, skill, runtime, and
suite version.

## Example result page

Do not open on the prettiest screenshot. For each candidate-task combination:

1. show the run closest to the median objective score;
2. place Best / Median / Worst tabs beside it;
3. display desktop and mobile together;
4. show working-state video or interaction trace when the task is stateful;
5. list passed and failed gates next to the surface;
6. show model, skill, harness, runtime, prompt hash, budget, and run ID;
7. allow the result package and manifest to be downloaded;
8. make competitor identity hidden in public voting mode and revealed only
   after the vote is recorded.

## Prompt Arena sharing

Prompt Arena produces an X/Threads-safe comparison card containing:

- exact rough prompt;
- model or skill comparison mode;
- trial count and benchmark version;
- median representative surfaces, never hand-picked best runs;
- objective-floor pass/fail badges;
- “open all runs” and “vote blind” links;
- a plain-language caveat that Prompt Arena measures first-pass interpretation,
  not the controlled Resolve Suite.

## Fresh model and skill intake

1. Pin the new model snapshot or skill commit.
2. Run 3 tasks × 3 trials as Internal smoke.
3. If clean, run the 12-task internal candidate suite × 5 trials.
4. Publish Preview only when the result package is complete.
5. Promote to Verified after the full hidden suite, public run-count target,
   blind review, and independent artifact audit.

Old results remain visible under their original suite and runtime version. A
score is retired, not overwritten, when the benchmark or candidate changes.

## Traffic loop

- New model release: publish a Prompt Arena comparison within one day, clearly
  labelled Internal or Preview.
- Verified completion: publish the controlled Model Track result and failure
  gallery.
- Skill release: publish paired Skill Lift against the same anchor models.
- Monthly: publish one task deep dive with best, median, worst, and the concrete
  fix that changed the next OmD patch.
- Quarterly: add a live task set and publish ranking stability, not only rank.

The site is useful even when OmD loses. That credibility is what makes the
benchmark a durable acquisition surface rather than a product advertisement.
