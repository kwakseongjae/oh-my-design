# X narrative — open UI-Resolve Bench design thread

## Communication goal

Invite practitioners to challenge the evaluation contract before results are
treated as rankings. The thread should make the benchmark's question legible,
show the pilot without laundering it into a win, disclose the OmD no-op, and
ask for concrete feedback on tasks, gates, and human review.

This is an **open benchmark design thread**, not a launch announcement. Avoid a
podium graphic, winner language, or a chart sorted to imply rank. The strongest
story is that the first pilot found a flaw in the product being built as well as
limits in the evaluator.

## Audience and thesis

Primary audience: frontend practitioners, design engineers, coding-agent
builders, accessibility specialists, and benchmark researchers.

Core thesis:

> A UI is resolved only when behavior, responsive robustness, accessibility,
> design grounding, and evidence honesty pass objective gates. A pretty
> screenshot is insufficient. Practitioner `Ship Preference` is reported
> separately, and one development task cannot establish which skill is best.

## Evidence package to attach

Before posting, publish or link:

- the frozen task, starter hash, prompts, skill commits/hashes, and run manifests;
- the deterministic evaluator source and per-check outputs;
- desktop and mobile screenshots with neutral candidate labels;
- the unchanged OmD workspace/no-op record;
- a limitations block stating one public fixture, a completed direct no-skill
  CLI control, in-app fallback observations for the other artifacts, and
  unscored `Ship Preference` and normalized efficiency;
- the protocol and roadmap, including mutation calibration and blind-review
  requirements.

Recommended media:

1. a neutral diagram of the six critical gate families, with no product logos;
2. a compact run-observation table labelled “1 public fixture; exploratory
   trials; diagnostic only”;
3. a screenshot or diff proving the pre-fix OmD arm was unchanged, beside the
   post-fix contract/contrast failures;
4. a roadmap card: harden runner → 12 tasks × 5 trials → blind review → public
   Preview → 24 tasks × 10 trials → Verified.

## Two-stage social format

When a new model or UI skill ships, separate the shareable comparison from the
capability claim:

1. **Prompt Arena card within one day** — exact rough prompt, fixed comparison
   mode, at least 3×3 Internal smoke, median-representative surfaces, objective
   floor badges, blind vote link, and explicit Internal/Preview label.
2. **Resolve Suite follow-up** — controlled task pack, every scheduled run,
   `UI-Resolved`, Reliability, paired Skill Lift where applicable, confidence
   intervals, and failure examples.

Never post the luckiest output as though it were the candidate's expected
result. The social card defaults to the median-representative run and links to
the actual best and worst generations.

## Thread guardrails

- Call 85/85 an “automated in-app observation,” never a win or a full score.
- Say “automated gate pass,” not “UI-Resolved@1,” because repeated private-task
  validation is incomplete; `Ship Preference` and efficiency are also unscored.
- Name the host model and distinguish host execution from vendor-native systems.
- State that Impeccable was prompt-only; hooks and browser iteration were not
  evaluated.
- Separate the original invalid-attribution Taste, UI UX Pro Max, and OmD
  artifacts from the corrected rerun; never merge their rows.
- State that the OmD 77/85 belongs to the unchanged starter and is not an OmD
  skill score.
- Describe OmD's differentiation as structural and evidence-oriented, not as
  proven superiority.
- Invite criticism before asking for adoption.

## Draft thread — 9 posts

### 1/9

What should “good UI from an agent” mean?

Not just a polished screenshot. We’re designing UI-Resolve Bench around one
harder question: did the result work, reflow, remain accessible, follow its
design contract, and avoid inventing unknown product facts?

### 2/9

The proposed rule is intentionally unforgiving: function + user journey +
design grounding + responsive behavior + accessibility + evidence honesty must
pass together. Target fidelity is gated when a task has a visual oracle;
practitioner `Ship Preference` is judged separately and blindly.

### 3/9

This combines signals that benchmarks usually separate. Design2Code studies
[visual fidelity](https://aclanthology.org/2025.naacl-long.199.pdf),
FrontendBench tests [browser interaction](https://arxiv.org/abs/2506.13832), and
[WCAG 2.2](https://www.w3.org/TR/WCAG22/) defines the accessibility contract.

### 4/9

We ran a runner pilot on 1 public pricing-page fixture. The direct no-skill CLI
control completed; the remaining artifacts used isolated in-app workers. Model,
reasoning, sandbox, and network policy matched, but runtime and budgets did not.

The final audit also invalidated Taste, UI UX Pro Max, and OmD attribution due
to activation/platform mismatches. That is useful for debugging the method. It
is not causal evidence and not a leaderboard.

### 5/9

Anthropic Frontend Design and Impeccable prompt-only each satisfied the current
automated checks: 85/85 available deterministic points.

That means “inspect these outputs next,” not “they won.” `Ship Preference` and
efficiency were unscored, and there were no repeat trials.

### 6/9

The pilot also caught our own product gap. The first OmD artifact changed
nothing because page repair depended on unavailable roles, and the activation
used `$omd-apply` instead of `$omd:apply`. Its 77/85 is the starter's score.

After repairing both contracts, the corrected OmD observation changed the
workspace and passed the current 85 objective points. Corrected Taste and UI UX
Pro Max each reached 81/85 but failed different accessibility checks. One public
fixture still proves neither superiority nor reliability.

### 7/9

That clarifies OmD's actual distinction: 440 quality-graded references,
project-owned `DESIGN.md`, evidence separation, unknown-field abstention,
specialist validation, and checkpoints.

Structural depth is a hypothesis about reliability, not proof of better output.

### 8/9

The evaluator now checks exact prices, every FAQ, protected-hook counts,
320px geometry, a labelled 200% CSS-zoom surrogate, Tab traversal, axe, and
unsupported claims. Browser-level zoom/reflow calibration remains open.

What remains: a private read-isolated control plane, spacing-aware WCAG target
exceptions, valid oracles + defective mutants, normalized traces, 3-run
reliability, and blind practitioner review.

Benchmark tasks need audits too.

### 9/9

Before any public ranking: 12+ tasks, 3 trials, pinned eligible arms,
downloadable failures, and 5-practitioner blind review. OmD losses stay beside
passes.

What would you try to break first—the task mix, critical gates, unknown-fact
tests, or visual judging protocol?

## Optional reply with system-family context

Use this as a reply rather than crowding the main thread:

The systems are not interchangeable. Anthropic offers concise
[frontend art direction](https://claude.com/blog/improving-frontend-design-through-skills),
[Taste](https://www.tasteskill.dev/docs) focuses on fast aesthetic direction,
[Impeccable](https://impeccable.style/docs/impeccable/) joins context and
inspection, and [Vercel](https://vercel.com/design/guidelines) provides a review
rail. Track eligibility has to reflect those intended uses.

## Response policy after posting

When someone challenges a result, answer with the artifact or agree that the
claim is not yet supported. Log proposed failure cases as candidate tasks or
mutants. Do not defend the pilot as a product comparison; its purpose is to
improve the benchmark before a public evaluation.
