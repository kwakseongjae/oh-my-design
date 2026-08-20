# UI-Resolve Bench pilot findings — 2026-07-21

## Bottom line

This pilot validates a benchmark direction and exposes weaknesses in both the
runner and oh-my-design. It does not identify a winning UI skill.

The evidence is one public development fixture, `pricing-conversion-v0.1`, with
nine exploratory artifacts across seven preregistered conditions. All runs used
`gpt-5.6-terra`, `xhigh` reasoning, a workspace-write sandbox, and no task-time
network access, but they did not share one normalized runtime: the direct
no-skill Codex CLI control completed in 392 seconds, while the other artifacts
were recorded through isolated in-app workers. The set also includes a second
in-app no-skill observation and an OmD post-fix forward test. There are no
repeated paired trials, hidden tasks, confidence intervals, normalized
efficiency results, or blind human visual judgments.

The useful result is therefore not “Anthropic and Impeccable won.” It is:

1. the pilot can preserve a shared task and automatically exercise key product
   behavior across isolated skill snapshots;
2. the current evaluator is permissive enough that a perfect deterministic
   score must be treated as an observation to investigate, not an outcome claim;
3. the isolated `omd:apply` arm revealed a real delivery-ownership and
   role-dependency gap in OmD's portable Skill Layer story, and the post-fix
   forward test exposed separate contract and contrast failures;
4. the final attribution audit found activation/platform mismatches in the
   Taste, UI UX Pro Max, and OmD artifacts, so those files remain available as
   diagnostic traces but their scores cannot be credited to the named skills.

## What ran

The public fixture asks an agent to improve a pricing page while preserving
billing switching, FAQ disclosure, invalid and valid email states, focus
visibility, reduced motion, and responsive behavior at 1440×1000 and 390×844.
It also supplies a small `DESIGN.md` oracle and forbids a short list of
unsupported marketing claims.

Each condition received the same HTML starter and core task, model, reasoning
level, sandbox policy, and network restriction. Context varied by the
preregistered condition: the no-skill control omitted `DESIGN.md`, the
raw-context control included it without a skill, and skill arms appended their
activation line and copied the selected snapshot. Runtime and budgets were not
fully normalized because only the direct no-skill control produced a complete
CLI trace. Third-party installers and hooks were not executed. This is a Skill
Layer pilot, not a comparison of vendor-recommended full systems.

| Artifact | Attribution | Automated result | Workspace changed? | What can safely be said |
|---|---|---:|---:|---|
| No skill, direct CLI | Valid control | 65/85; automated gate fail | Yes | This is the only complete direct CLI trace; it missed design grounding. |
| No skill, in-app | Valid control observation | 61/85; automated gate fail | Yes | A second runtime observation; it missed responsive, accessibility, and design-grounding gates. |
| Raw `DESIGN.md` | Valid context observation | 79/85; automated gate fail | Yes | It missed the current accessibility gate. |
| Anthropic Frontend Design | Valid skill observation | 85/85; automated gate pass | Yes | This single in-app output satisfied the current deterministic checks. |
| Taste Skill v2 | **Invalid attribution** | 81/85; retained only | Yes | The pilot invoked `$taste-skill`, while the pinned skill declared `design-taste-frontend`; re-run required. |
| Impeccable, prompt-only | Valid skill observation | 85/85; automated gate pass | Yes | This prompt-only in-app output satisfied the current checks; hooks and browser loop were excluded. |
| UI UX Pro Max | **Invalid attribution** | 81/85; retained only | Yes | A Claude-oriented source was copied rather than the vendor's generated Codex package; re-run required. |
| OmD `apply`, before fix | **Invalid attribution** | 77/85; retained only | **No** | `$omd-apply` did not match the declared `omd:apply`; the unchanged starter also exposed a real no-op dependency gap. |
| OmD `apply`, post-fix forward test | **Invalid attribution** | 66/85; retained only | Yes | Delivery resumed, but activation was still mismatched; re-run is required before attributing quality. |

“Automated gate pass” means all presently implemented objective critical gates
passed. It is not `UI-Resolved@1`: the public fixture is not a private,
read-isolated evaluation task and no repeated reliability trial exists. Blind
`Ship Preference` is also unscored and reported separately by design. The table
is neither causal evidence nor a leaderboard.

## How to read the two 85/85 observations

Anthropic Frontend Design and Impeccable prompt-only each received 85/85 from
the current deterministic evaluator. These are useful host-run observations,
not wins, for four reasons:

- there were no repeated paired trials, so reliability and run-to-run variance
  are unknown;
- there was one public fixture, so task-family and contamination effects are
  unknown;
- both skills ran inside the same Codex host, not every vendor's native or
  recommended runtime;
- the final 15 diagnostic points—10 for blind `Ship Preference` and 5 for normalized
  efficiency—were not scored.

The evaluator now checks exact monthly, annual, and restored prices for all
plans; every FAQ open/close journey; exact protected-hook counts at every
viewport; landmarks; 1440px, 390px, 320px, and a labelled 200% CSS-zoom surrogate; real
Tab traversal; axe results; five task-specific design properties; and expanded
unsupported-claim and social-proof patterns. That is a stronger development
oracle, but not a production-readiness oracle.

The remaining control-plane work is substantial: private hidden tasks and
read-isolated oracles, exact runtime/browser/font/container and budget pinning,
spacing-aware WCAG target exceptions, at least two valid oracles plus known
mutants, repeated trials, and blinded practitioner review. The need to audit
evaluation tasks and tests continuously is also a known benchmark-design
problem, not unique to this project; see the
[SWE-bench Verified audit](https://openai.com/index/separating-signal-from-noise-coding-evaluations/).

## The isolated `omd:apply` no-op

The OmD arm is the most informative failure in this pilot.

Before the fix, `omd:apply` was not self-contained for page repair. Its dispatch
tree routed complex page-wide improvement requests to specialist roles such as
`omd-ux-writer` and `omd-ux-engineer`, while those roles were absent from the
isolated Skill Layer sandbox. The task explicitly required implementation, but
the skill treated read-only or unavailable advice as the end of the workflow.
It made no file change.

The resulting 77/85 must not be presented as an OmD-generated interface score.
The activation name was also mismatched, and it is the unchanged starter's
score: the existing fixture retained enough
functional, responsive, accessibility, and evidence-honesty behavior to earn
points, while failing the design-grounding gate. The exact observed gap is:

> `omd:apply` declares creation/repair eligibility as a portable arm, but its
> page-level dispatch contract depends on roles or a harness absent from the
> isolated package.

The skill contract has now been repaired: implementation requests stay owned by
the main agent, specialist roles are optional advisory inputs, and missing or
read-only roles no longer authorize a no-op. A static regression test protects
that delivery contract.

The post-fix forward test changed the workspace and satisfied design grounding,
responsive geometry, keyboard traversal, and evidence honesty. It still failed
the task contract and state gate by adding a third `data-bench="faq-button"`
where exactly two were protected, and it failed axe color contrast. Its 66/85
is therefore evidence that delivery ownership was restored—not an attributable
OmD quality result, because the activation mismatch remained. Future trials
must use `$omd:apply` and distinguish
dependency/no-op failures from implementation-quality failures exactly this
way.

## What the pilot says about OmD—and what it does not

OmD's strongest differentiation remains structural, not demonstrated outcome
superiority. In the researched field, it combines a local corpus of 440
quality-graded company references, evidence-domain separation, a project-owned
`DESIGN.md`, unknown-field abstention, specialist validation roles, mandatory
checkpoints, and delivery shims across multiple coding agents. The accurate
positioning is:

> Design ground truth + evidence-graded references + checkpointed delivery
> harness.

This matters because most adjacent systems optimize a different layer:
[Anthropic Frontend Design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)
provides concise art direction;
[Taste](https://www.tasteskill.dev/docs) emphasizes fast aesthetic direction;
[Impeccable](https://impeccable.style/docs/impeccable/) joins context, commands,
detection, and browser iteration;
[Vercel's guidelines](https://vercel.com/design/guidelines) form a review rail;
and UI UX Pro Max provides a broad preset-retrieval layer. Those differences
motivate separate eligible tracks rather than one undifferentiated ranking.

The pilot does not show that OmD improves outcomes, beats another system, has
zero hallucinations, or deserves credit for the starter's 77 points. It also
does not evaluate OmD's primary structural assets: reference selection,
evidence provenance, protected unknowns across competing domains, specialist
validation, mandatory human checkpoints, or repeat-run reliability.

The current catalog claim must also remain “440 quality-graded references,” not
“440 verified design systems.” At the time of the landscape review, the
internal quality split was 141 `verified_v2`, 159 `partial`, and 140 `legacy`.

## Benchmark design lessons

### Keep Skill Layer and Full System separate

Prompt-only snapshots and checkpointed multi-agent systems have different power,
cost, and intervention requirements. Impeccable's hook/browser mode belongs in
Full System, as does OmD's attended harness. Quality should be reported beside
elapsed time, model/tool calls, human interventions, and iteration count—not
collapsed into the Skill Layer table.

### Preserve the no-skill and raw-context controls

The gap between the no-skill and raw `DESIGN.md` runs is not causal after one
trial, but it shows why both controls are necessary. Existing paired research
also finds that skill context can add cost without reliably improving pass
rate; see [SWE-Skills-Bench](https://github.com/GeniusHTX/SWE-Skills-Bench).

### Do not let polish cancel product failure

The proposed `UI-Resolved@1` all-or-nothing gate remains the target:
function, product journey, design contract, responsiveness, accessibility,
visual fidelity where applicable, and protected-unknown honesty must pass
together. Existing research supplies pieces of that model—
[Design2Code](https://aclanthology.org/2025.naacl-long.199.pdf) for visual
fidelity,
[FrontendBench](https://arxiv.org/abs/2506.13832) for browser-tested interaction,
[DesignBench](https://arxiv.org/abs/2506.06251) for generation and repair, and
[WCAG 2.2](https://www.w3.org/TR/WCAG22/) with
[axe-core](https://github.com/dequelabs/axe-core) for accessibility—but no cited
benchmark yet resolves the full combined contract.

### Publish failures as first-class evidence

The OmD no-op is not an embarrassing row to hide; it is the most actionable
finding. Future reports should retain raw manifests, screenshots, evaluator
outputs, no-op and timeout records, known-mutant calibration, and examples of
OmD losses beside any passes.

## Next decision gates

Do not call the project a benchmark launch until the preregistered minimum is
met: at least 12 tasks, three independent trials, pinned and track-eligible
skills, downloadable manifests and failures, five-practitioner blind review,
and thresholds shown to accept two valid oracles while rejecting known mutants.

The immediate sequence is:

1. finish a private, read-isolated evaluator/control plane and record normalized
   runtime, token, and tool budgets;
2. calibrate every task with at least two valid oracles and known mutants;
3. complete the 12-task internal set with three trials in randomized or
   Latin-square arm order;
4. add blind `Ship Preference` review and normalized efficiency only after all paired runs
   are complete;
5. publish the design, artifacts, limitations, and failures as an open benchmark
   proposal—not a leaderboard.

Until then, the safe public description is: **an open benchmark design and an
internal one-task pilot**.
