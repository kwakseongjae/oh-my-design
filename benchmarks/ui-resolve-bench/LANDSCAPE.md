# Frontier UI skill landscape — 2026-08-09

This is a source-backed product comparison, not a leaderboard. Repository stars
and registry installs describe distribution, not task quality. They must never
be converted into a benchmark score.

## Competitive families

| System | What it primarily does | Strongest advantage | Important comparison limit |
|---|---|---|---|
| [Anthropic Frontend Design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md) | concise art-direction guidance for generated frontend code | strong, subject-specific visual planning with very little context overhead | one compact skill; no project memory, provenance graph, deterministic verifier, or delivery orchestration |
| [Taste Skill](https://github.com/Leonxlnx/taste-skill) | anti-slop visual direction, aesthetic dials, landing/redesign workflows | immediate visual delta and an X-friendly vocabulary | v2 is experimental and explicitly does not target dashboards, data tables, or multi-step product UI; pin the commit |
| [Impeccable 4.0.4](https://github.com/pbakaus/impeccable) | product/design context, task playbooks, bounded browser iteration, hooks, and deterministic pattern detection | closest end-to-end competitor; generation, context, and inspection share one loop | current full local workflow, hook-enabled, and live-browser modes have different power and risk and must be separate arms |
| [Vercel Web Design Guidelines](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md) | review against current interface guidelines | focused accessibility, form, motion, navigation, and performance review | review rail, not greenfield generator; its default remote guideline fetch is mutable unless mirrored at a commit |
| [UI UX Pro Max 2.13.0](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | searchable style, palette, typography, chart, stack, UX preset database, and bundled design skills | broad retrieval interface and platform coverage | product-type matching and preset counts are not company evidence or proof of correctness |
| oh-my-design | quality-graded company references plus project DESIGN.md, skills, specialist roles, checkpoints, and validation | design ground truth and evidence-aware delivery across the repository lifecycle | slower to explain, weaker immediate wow, and no public paired benchmark yet |

## Defensible oh-my-design differentiation

In this source review, OmD was the only system among these five competitor
families that documented all of the following in one product:

- a local corpus of 440 quality-graded company `DESIGN.md` references;
- separation of evidence domains and omission of unresolved product facts;
- a project-owned `DESIGN.md` used as reusable ground truth;
- a checkpointed multi-agent path from discovery to handoff;
- accessibility, persona, final-QA, and reference revalidation roles;
- Claude Code, Codex, OpenCode, and Cursor delivery shims;
- substantial Korean and East Asian reference/localization coverage.

This supports the positioning:

> Design ground truth + evidence-graded references + checkpointed delivery
> harness.

It does **not** yet support “best UI skill,” “zero hallucinations,” or “the only
end-to-end UI harness.” The catalog is also not uniformly verified: the current
internal split is `141 verified_v2 / 159 partial / 140 legacy`, so public copy
must say “440 quality-graded references,” not “440 verified design systems.”

## Where OmD is behind

1. **Impeccable has the clearest closed inspection loop.** Its detector, JSON/CI
   output, edit hooks, and browser iteration read as one product. OmD has related
   pieces, but users must understand several skills and roles before seeing the
   loop.
2. **Taste produces a faster first wow.** Three aesthetic dials, explicit bans,
   and image-first variants create a visible delta before users understand a
   deeper workflow.
3. **UI UX Pro Max has a better instant-query layer.** OmD references are deeper,
   but the product does not yet answer “fintech + trust + dense workflow → which
   type, chart, and interaction patterns?” as directly.
4. **Anthropic and Vercel have distribution advantage.** Official marketplace
   exposure and a one-sentence mental model reduce activation cost.
5. **OmD has no public causal evidence.** Structural depth is not outcome proof.
   The paired control in UI-Resolve Bench is the first correction.

## Claims safe for an X research thread

- “We tested frontier UI skill families on the same model, repo, task, and
  budget.” — only after the paired run table and hashes are published.
- “Taste chooses an aesthetic. Vercel reviews interface rules. UI UX Pro Max
  retrieves presets. Impeccable iterates and detects patterns. OmD grounds a
  multi-agent workflow in quality-graded DESIGN.md references.”
- “We are not ranking the prettiest screenshot. UI-Resolved@1 requires product
  behavior, responsive robustness, accessibility, design grounding, and honest
  handling of unknowns to pass together.”
- “Impeccable is the closest competitor to OmD's full workflow; its detector and
  live loop are a benchmark OmD should meet.”

## Claims that remain unsafe

- OmD is the best UI skill.
- OmD beats Taste, Impeccable, Anthropic, Vercel, or UI UX Pro Max.
- 440 verified company design systems.
- one skill behaves identically across all coding agents.
- stars or registry installs prove quality.
- a one-task pilot is a leaderboard.

## Product benchmark targets

| Horizon | Benchmark | OmD target |
|---|---|---|
| Immediate | Skill Lift paired pilot | raw `DESIGN.md` + OmD must improve design-grounding and unknown-abstention gates without functional regressions |
| Near-term | Existing UI repair | match Impeccable's deterministic detector clarity and produce a one-command inspect → fix → reverify loop |
| Near-term | First-run activation | make the visual delta and first useful command as legible as Taste while retaining evidence honesty |
| Medium-term | Harness reliability | demonstrate higher `Reliability@5` and state/locale coverage at a transparently higher cost class |
| Medium-term | Evidence & Unknown | achieve zero unsupported protected fields while preserving all verified neighboring content |
| Public Preview | UI-Resolve Bench v0.1 | 24 hidden tasks, 5 trials, blind practitioner review, calibrated thresholds, and published failures |
| Public Verified | UI-Resolve Bench v0.1 | 24+ hidden tasks, 10 trials, ten practitioners, signed raw packages, and hierarchical confidence intervals |

## Research anchors

- [Anthropic: improving frontend design through skills](https://claude.com/blog/improving-frontend-design-through-skills)
- [Taste documentation](https://www.tasteskill.dev/docs)
- [Impeccable documentation](https://impeccable.style/docs/impeccable/)
- [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines)
- [skills.sh measurement documentation](https://www.skills.sh/docs)
