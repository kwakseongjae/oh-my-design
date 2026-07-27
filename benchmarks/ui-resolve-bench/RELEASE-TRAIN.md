# Product release train: 1.9.1 → 1.9.n → 2.0.0

Version `2.0.0` means “frontier-grade UI skill and harness backed by reproducible
evidence,” not merely a large feature release. We reach it through one bounded
hypothesis per patch. Benchmark protocol and product package versions remain
separate and are both recorded in every run.

## Patch experiment contract

Every `0.0.1` product release records:

```text
hypothesis
affected benchmark family and task slice
baseline commit and candidate commit
pre-registered success / guardrail / rollback metrics
smoke and candidate run package
product activation metric
observation window and decision
```

Do not modify benchmark thresholds to make a candidate patch pass. A score-rule
change creates a new suite version and re-evaluates every public candidate.

## Planned release ladder

| Product | Experiment | Benchmark evidence | Product evidence | Promotion gate |
|---|---|---|---|---|
| 1.9.1 | measurement + delivery contract kernel | family/run schema, clean-source attestation, product-only diffs, normalized exporter | natural-language route guide, shared work packet, one implementation owner, harness→product delivery bridge | aggregate/export fixtures, skill contracts, and fail-closed tests pass |
| 1.9.2 | task-pack calibration | 12 tasks, 2 valid oracles, mutants | none | valid implementations pass; mutants fail |
| 1.9.3 | fast first result | Prompt Arena + Skill Lift smoke | install → first useful surface | faster first result with no resolved-rate regression |
| 1.9.4 | inspection loop | repair/reverify task slice | inspect → fix → reverify completion | higher repair success; time budget held |
| 1.9.5 | reference query layer | evidence/unknown and open-brief slices | reference search → selection → build | positive paired lift without fabricated claims |
| 1.9.6 | model transfer | 3-model transfer matrix | cross-agent install/doctor | lift generalizes beyond one anchor model |
| 1.9.7 | harness efficiency | Harness Track Pareto run | checkpoint completion/abandonment | **failed calibration:** preregistered timeout at 12/18; retained and not promoted |
| 1.9.8 | harness delivery-budget recovery | same stopped-task fresh cell | first edit/final delivery milestones | valid 85/85 cell, first edit by 50% budget, exact attribution, no replacement browser harness |
| 1.9.9 | harness efficiency replacement | fresh repeated Harness Track matrix | checkpoint completion/abandonment | complete non-dominated quality/time/intervention result |
| 1.9.10 | benchmark robustness | evaluator mutation and contamination suite | reproducible local run package | every known false-green/false-red mutant has a named disposition |
| 1.9.11 | failure recovery | timeout, tool, browser, install, and attribution failure cells | actionable doctor/recovery path | recovery improves valid completion without weakening fail-closed gates |
| 1.9.12 | locale and evidence expansion | five-locale evidence/unknown and open-brief slices | locale-correct query→build handoff | no material negative locale slice; unsupported facts remain zero |
| 1.9.13 | public benchmark UX | downloadable run packages and blind comparison gallery | benchmark page → qualified install | methods, failures, examples, and uncertainty are legible without a global rank |
| 1.9.14 | activation and reuse | install→first-resolved and seven-day reuse cohort | CLI/docs/builder connected funnel | activation and reuse improve with no accessibility or evidence regression |
| 1.9.15 | independent challenge | 24 hidden tasks, blind review, external audit | seven-day activation guardrails | no unresolved benchmark blocker; losses published |
| 1.9.n | additional bounded patch experiments | whichever frontier gate remains unresolved | corresponding product contract | preregister, test, retain failure evidence, repeat |
| 2.0.0 | frontier release | Verified Model/Skill/Harness evidence | durable activation and retention | all frontier gates below pass |

The hypothesis may change after each patch, but the version is not skipped just
to hide a failed experiment. A failed patch remains documented and its product
change is reverted or redesigned before the next candidate.

## Current 1.9.4 calibration

The portable repair skill now locks an immutable protected-contract ledger and
requires contrast, 320px, 200% zoom, and focused-control geometry checks. A
separate opt-in Harness Track adapter adds two bounded, read-only repair
specialists while keeping one implementation owner.

The first unbounded all-Opus smoke timed out and expanded a two-item FAQ to six.
The bounded replacement reached 85/85 but was invalid for its all-Opus claim
because the parent requested Sonnet specialists. The fresh model-pinned
replacement completed in 550,644ms at 85/85 with both specialist calls requesting
Opus, no Agent/infrastructure/sandbox/cwd error, and no Sonnet usage. This closes
the execution and attribution path only. One task × one trial remains Internal;
Harness efficiency and Pareto claims wait for the 1.9.7 repeated matrix.

## Current 1.9.22 harness checkpoint

The seventh fresh Harness Track replacement completed 18/18 valid exact
Opus/xhigh cells without retry or intervention. The bounded repair harness
reached UI-Resolved 8/9 versus portable 5/9, paired 4 wins / 4 ties / 1 loss,
and task Reliability@3 2/3 versus 1/3. It was about 15% faster at the median
while using about 14% more uncached tokens, so the quality/time/token result is
non-dominated.

All nine candidate cells used both read-only specialists, made a targeted
non-no-op first Edit within both delivery clocks, preserved Evidence & Unknown,
and authored no replacement verifier. The internal harness process contract is
promoted. The confidence interval still includes zero and the slice remains
three tasks × three trials, so this is not a public frontier or best-skill
claim. The next bounded lane is 1.9.23 locale and evidence expansion.

## Current 1.9.23 locale checkpoint

The first five-locale task and evaluator are calibrated. A known-good
implementation passes 85/85 with all six critical gates; the seeded starter
scores 63/85 and fails the intended locale-content, responsive, accessibility,
and unsupported-claim checks.

A two-cell exact Opus/xhigh smoke is preregistered: Raw DESIGN.md versus the
reviewed `omd:locale-adapter` → `omd:humanize` stack. The only candidate delta
is those two locally installed skills and their sequential activation. A full
pass only validates the execution path and unlocks a repeated locale matrix;
it cannot support a public best-skill or general locale-lift claim.

The smoke stopped on the candidate's 900-second timeout. The valid Raw control
scored 70/85; the candidate wrote the product by 340 seconds but then authored
six replacement verification programs, made repeated Chrome/CDP attempts, and
had no final response at 900 seconds. No stopped-candidate evaluator was run.
The binding issue is verification authority and delivery scheduling, not skill
loading: both installed skills were read by 18 seconds.

1.9.24 is therefore a candidate-only fresh recovery. It defines locale VERIFY
as protected-fact and terminology comparison, forbids replacement verification
software, stops optional checking by 720 seconds, and reserves final delivery
by 810 seconds. Public benchmark UX moves to 1.9.25.

The recovery completed in 450 seconds with a final response, first write at 356
seconds, and no replacement verifier. It passed every locale terminology and
protected-fact check, all responsive geometry, design grounding, Evidence &
Unknown, and axe serious/critical zero. The frozen score was still 72/85.

The remaining failures expose evaluator assumptions rather than a locale-copy
failure: standard roving tabs were counted as five sequential Tab stops, an
empty initial live region was rejected, dynamic KO document language was
compared with static EN metadata, and an unstated navigation landmark was
required. 1.9.24 remains failed. 1.9.25 is an evaluator-standards recovery;
public benchmark UX moves to 1.9.26.

1.9.25 aligned the evaluator with the standard roving-tab pattern, computed
sequential `tabIndex`, empty initial live regions, and active-locale document
language. The exact retained 1.9.24 artifact now passes 85/85 under evaluator
schema `0.3`, while the seeded invalid starter remains rejected at 57/85 across
state, responsive, accessibility, and evidence gates. This was an
evaluator-only calibration with no provider generation and does not change the
frozen 1.9.24 result. A fresh schema `0.3` locale replacement experiment is
therefore 1.9.26; public benchmark UX moves to 1.9.27.

The fresh 1.9.26 Raw and OmD cells both completed valid provider execution.
Raw scored 83/85 due overlapping locale tabs at the 200% surrogate; OmD scored
85/85 with all six objective gates. OmD was also descriptively 40.0% faster and
used 27.7% fewer uncached tokens in this single observation.

The candidate nevertheless made two direct headless-Chrome calls after the
preregistration allowed one and required blocked proof to become unresolved.
The current runner did not count those calls because both shell pipelines
returned non-error results. 1.9.26 is therefore a frozen process-contract
failure, and its 85/85 is forensic quality evidence only. 1.9.27 adds and
calibrates the missing direct-browser authority gate; public benchmark UX moves
to 1.9.29 after a fresh 1.9.28 candidate recovery.

1.9.27 now counts actual headless Chrome/Chromium Bash invocations regardless
of shell-result error flags, while browser discovery remains count zero. The
retained 1.9.26 candidate deterministically replays as count 2 and fails at the
frozen maximum of 1. Focused 0/1/2-call mutations and the full suite pass. This
classifier-only calibration generated no provider output and unlocks a fresh
candidate recovery as 1.9.28.

The fresh 1.9.28 candidate repeated the same silent-first-call then diagnostic
retry pattern. The new gate stopped it automatically at count 2 before
evaluation or export; `/tmp/u1928` remains unscored and immutable. Because a
one-call allowance has failed to bind twice and the external evaluator already
owns browser acceptance, 1.9.29 removes provider browser authority from this
locale benchmark track and freezes the maximum at zero. A new candidate
recovery moves to 1.9.30; public benchmark UX moves to 1.9.31.

1.9.29 now forbids all provider Chrome, Chromium, Playwright, browser-harness,
screenshot, and renderer commands in the locale benchmark activation. Static
content verification stays with the installed language skills; geometry,
keyboard, language-state, axe, and rendered-journey proof stay with the
external evaluator. A clean prepared sandbox and max-zero mutation tests pass.
This benchmark-only calibration changes no general production skill authority
and unlocks a fresh 1.9.30 candidate recovery.

The fresh 1.9.30 candidate completed valid exact-Opus execution with zero
provider browser commands, no replacement verifier, first product write at
366.8 seconds, and no infrastructure failure. External browser authority is
therefore recovered. The objective result was still 78/85 and failed two of
six critical gates. English “project folder” and Japanese “AI coding
assistant” were rejected by overly literal synonym oracles, while the 200%
surrogate exposed a genuine 2px hit-area overlap from wrapped tabs with zero
row gap and a 2px selection border. 1.9.30 remains failed. 1.9.31 calibrates
bounded semantic alternatives and a static wrapped-control safety contract;
public benchmark UX moves to 1.9.33 after a fresh 1.9.32 recovery.

1.9.31 now accepts bounded English and Japanese product-term alternatives
while retaining missing-concept and cross-locale negative mutations. The
unchanged 1.9.30 artifact replays at 83/85: locale content recovers, but the
real 200% tab overlap remains the sole failed critical gate. The invalid
starter remains 57/85. The task and zero-browser activation also require a
static wrapped-row audit whose vertical gap covers edge selection treatments.
A clean prepared sandbox, 217 tests, TypeScript, build, and browser replays are
green, unlocking a fresh 1.9.32 recovery.

The fresh 1.9.32 candidate completed valid exact-Opus execution with first
product write at 377.9 seconds, zero provider browser commands, and no
replacement verifier. It resolved all four geometry profiles, including the
200% hit-area overlap, and passed locale content, navigation, accessibility,
design, and Evidence & Unknown. The frozen result is still 80/85 because the
evaluator required the starter-only `data-copied` marker. A read-only browser
diagnostic confirmed that all five actions copied the exact command through
the standard Clipboard API and changed localized status. 1.9.32 remains
failed; 1.9.33 replaces the hidden marker with direct clipboard behavior.
Public benchmark UX moves to 1.9.35 after a fresh 1.9.34 recovery.

1.9.33 now grants clipboard permissions only inside the independent locale
evaluator, clears state before each action, and requires the exact protected
command after every click plus a localized live-status transition. No-write,
wrong-value, status-only, and attribute-only mutations fail. The unchanged
1.9.32 artifact replays at 85/85 under schema `0.4`, while the 1.9.30 overlap
control remains 83/85 and the invalid starter remains 57/85. Full tests,
TypeScript, build, three browser replays, and clean preparation pass,
unlocking a fresh 1.9.34 recovery.

The fresh 1.9.34 candidate completed valid exact-Opus execution with first
product write at 371.4 seconds, browser zero, verifier zero, exact clipboard
handoff, and all responsive geometry. It scored 79/85 because its horizontally
scrollable command block was not explicitly keyboard focusable on constrained
viewports. Axe reported serious `scrollable-region-focusable` at 390px, 320px,
and 200%, and keyboard traversal lost its declared focus sequence. This is a
real accessibility defect, not an oracle issue. 1.9.34 remains failed; 1.9.35
adds a static scrollable-region focus contract before a fresh recovery.
Public benchmark UX moves beyond that recovery.

1.9.35 now requires useful `overflow: auto|scroll` regions to contain a
reachable control or become explicit keyboard focus targets with visible focus
treatment, while decorative and non-scrollable containers remain outside the
Tab order. The evaluator and provider browser-zero authority are unchanged.
The retained 1.9.34 copy still scores 79/85 with the accessibility failure; a
minimal focus-control copy scores 85/85 with axe serious/critical zero and
complete keyboard traversal at all four viewports. This provider-free
calibration unlocks a fresh 1.9.36 recovery in a new root.

1.9.36 is preregistered as one fresh candidate-only exact-Opus/xhigh recovery
under task `0.5.0` and evaluator schema `0.4`. The new root is `/tmp/u1936`;
retry, resume, manual product edits, provider browser commands, and replacement
verifiers remain forbidden. Promotion requires 85/85, all six critical gates,
exact Clipboard API handoff, all four geometry profiles, visible keyboard
focus for every useful scroll region, and axe serious/critical zero.

The fresh 1.9.36 candidate passed that contract at 85/85 with all six critical
gates. It completed in 476.3 seconds, made its first product write at 404.5
seconds, used zero provider browser commands, authored no replacement
verifier, copied the exact command in all five locales, and reached axe
serious/critical zero plus complete keyboard traversal at all four viewports.
This closes a single execution-path calibration only. 1.9.37 defines the
minimum honest public benchmark UX evidence contract before any run is exposed.

1.9.37 has accepted that minimum evidence slice at `/benchmarks`. A
deterministic generated-data layer binds the route to the committed 1.9.22 and
1.9.34–1.9.36 reports and fails CI on changed denominators or stale public data.
The page explicitly separates Model, Skill Lift, and Harness questions, shows
the Harness interval and candidate loss, preserves the locale failure →
contract → fresh-recovery sequence, and labels the result Internal / not a
leaderboard. Web 827/827, root 217/1-skip, TypeScript, changed-file ESLint, CLI
build, data checks, and the 1,459-page production build pass. Design review has
zero BLOCK findings. Designated Browser Harness acceptance passes at 1440,
390, 320, and 200%-equivalent 720 CSS pixels with no horizontal overflow,
console errors, or axe serious/critical findings; all nine links expose visible
keyboard focus and the Method anchor works by pointer and Enter. Activation and
homepage promotion remain out of scope and move to a separately bounded 1.9.38
experiment.

1.9.38 is preregistered as a benchmark-qualified web activation experiment.
Home receives one tertiary, claim-free evidence link in the existing CLI trust
row; all activation controls remain after Method and canonical Sources on
`/benchmarks`. Typed `bm_*` events separate entry, evidence inspection,
handoff-module exposure, navigation, and clipboard outcome, while successful
installer copy also uses the existing `act_handoff` taxonomy with
`surface: benchmark`. Production promotion requires 200 exposed users, at
least 10 version-isolated successful installer copies, a 5% rate with Wilson
lower bound at least 2.5%, and no evidence, accessibility, duplicate, or
false-success regression. Docs/Builder navigation remains an exploratory proxy.
This measures qualified web handoff only—not installation, resolved UI, causal
lift, or reuse. A production-hostname query, empty Testing-filter dimension,
and confirmed Active internal-traffic exclusion are fail-closed measurement
prerequisites.

1.9.38 passed deterministic acceptance. Sol high review exposed and closed the
hidden-command and unreachable-mobile-denominator defects. Terra xhigh verified
830/830 web tests, the 1,459-page production build, exact success/failure event
paths, clean Docs/Builder proxies, and 1440/390/320/200%-equivalent geometry.
A serious keyboard-focus defect on the horizontally scrollable Terminal command
was retained, fixed, and reverified at axe serious/critical 0/0 with console
errors 0. The patch is `calibration_complete`; its 14–28 day production decision
remains pending and does not block the provider-neutral 1.9.39 contract.

1.9.39 is preregistered as a provider-free runtime-contract calibration. It
fixes the discovered controller defect where every prepared cell is dispatched
to the Claude runner regardless of `cell.runtime`. Fake Claude/Codex executables
must prove native argument routing, explicit provenance, no fallback, and
failure retention before any fresh live runtime smoke. It produces no quality,
provider, model, speed, token, Cursor, or independent-audit claim.

The deterministic calibration passed. Schema `0.2` now selects the runner from
an explicit no-default registry, preserves each native effort flag and common
runtime provenance, exports the locked suite version, keeps unsupported
diagnostics as `null`, and retains later cells as explicit `not-started` entries
after the first stop. This remains fake-runtime evidence only.

The next provider lane is intentionally staged. Per the fixed Cursor pilot
scope, `1.9.40` adds a fake Cursor stream adapter and proves dispatch,
provenance, and failure retention without generation. The Cursor account gateway has already
been connected collision-safely and its model catalog snapshotted without
producing a score. `1.9.41` runs no-write attribution for exact Grok 4.5 and
Composer 2.5 IDs. `1.9.42` may then run an Internal two-model pilot with Cursor
runtime fixed. `1.9.43` separately modernizes the
product Cursor install channel from its legacy rule-only shim to reviewed Agent
Skills plus deterministic doctor checks, and `1.9.44` opens a fixed-model Skill
Lift pilot. Cursor Auto/Router remains a separate routing policy condition and
never becomes a named-model row. The full contract is in
[`CURSOR-RUNTIME-PLAN.md`](./CURSOR-RUNTIME-PLAN.md).

1.9.40 passed deterministic fake-runtime acceptance. Cursor cells now use only
`run-cursor.mjs` and the collision-safe `cursor-agent` binary path, retain
binary version/hash plus requested/reported model evidence, pass no provider
effort flag, and reject every live model except `cursor-grok-4.5-high` and
`composer-2.5`. Wrong-model execution freezes the matrix and preserves later
cells as `not-started`. No Cursor account, keychain, network, or provider was
touched, so this is not live model evidence.

1.9.41 completed two live no-write account probes from empty `/tmp` workspaces
without transmitting repository content. Both exact CLI selectors exited zero
and returned `OMD_ATTRIBUTION_OK` with no tools. Cursor reported display names
(`Cursor Grok 4.5 High`, `Composer 2.5`) rather than immutable requested IDs.
The adapter therefore records `runtime-reported-display-name`; the cells unlock
an Internal fixed-runtime pilot but remain `invalid-attribution` for a public
Verified Model Track.

The final comparison target is Luna/Terra/Sol on Codex, Opus 5/Fable 5/Sonnet 5
on Claude Code, and Composer 2.5/Grok 4.5 on Cursor Agent. Cross-runtime results
are labelled model×runtime systems; only within-runtime slices are model-only
comparisons.

## 2.0.0 frontier gates

All must pass:

1. OmD portable skill is statistically tied for first or first on the Verified
   Skill Lift Track; no self-authored aesthetic preference is a critical gate.
2. Paired resolved lift has a 95% lower bound above zero overall and no material
   negative slice across at least three model families.
3. OmD full harness is Pareto non-dominated on resolved rate, elapsed time, and
   unplanned human intervention under the standard budget.
4. At least 24 hidden tasks cover creation, repair, stateful flows, responsive,
   accessibility, evidence/unknown, screenshot fidelity, open briefs, and five
   locales.
5. Verified results use ten runs per task; raw successes, failures, timeouts,
   manifests, and representative artifacts are downloadable.
6. Blind visual review includes at least ten practitioners, confidence
   intervals, agreement, reversal, and both-fail rates.
7. Independent task audit estimates fewer than 5% broken or ambiguous tasks;
   flagged tasks are retired before ranking.
8. Install → first resolved surface and seven-day reuse improve against 1.9.0
   without accessibility, evidence-honesty, or builder regressions.
9. Natural-language routing selects the smallest capable workflow; specialists
   return evidence-backed advice, one main agent owns edits, and implementation
   is not complete until the same consumer route is reverified.

`1.9.9` is a checkpoint, not a deadline. If any gate remains unresolved, continue
with `1.9.10`, `1.9.11`, and as many bounded `1.9.x` experiments as required.
The calendar and the number 9 do not force `2.0.0`.
