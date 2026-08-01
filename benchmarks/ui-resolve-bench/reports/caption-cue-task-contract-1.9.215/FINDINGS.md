# Caption-cue timing task contract — 1.9.215

Status: **LOCKED before provider generation**  
Provider calls: **0**

## New unseen family

`caption-cue-timing-review-v0.1` adds a dark editorial timing topology that is distinct from the prior approval modal, data table, routing board, master-detail, patch bay, and print-imposition families.

The task contains:

- five supplied cue/speaker identifiers and five complete in→out timecode pairs;
- one horizontal desktop timing rail that must become ordered full-width cue rows when constrained;
- three reversible timebase choices;
- one reversible dialogue-boundary snap toggle;
- one cue-set review form with invalid focus and valid status behavior;
- exact target/evidence/state/action hierarchy across desktop, 390px, 320px, and the 200% surrogate;
- an explicit prohibition on inferred transcript, caption, playback, accessibility, translation, editorial approval, publishing, or delivery outcomes.

## Locked evidence

- Prompt SHA-256: `f7a397e2ba224fe4876ceb4f90300670b79ab49ca1eb935dadcb9293e615f677`
- Starter tree SHA-256: `4a333328efa3d6f907ae129414662a25e18bcec556a79c9f400f6d7c68b0e7ef`
- Contract test: **1/1 green**.
- Type-check: **green**.

## Untouched starter baseline

The provider-free deterministic evaluator scored the untouched starter **79/85**.

- task contract 25/25
- design grounding 20/20
- state journey 15/15
- accessibility 10/10
- evidence honesty 5/5
- responsive 4/10

Desktop geometry and minimum target size pass. The three constrained views fail only the locked text-geometry surface: cue/speaker identifiers, complete timecode pairs, and the compact boundary label fragment or wrap. There is no page overflow, control clipping, interaction failure, accessibility failure, design-token drift, or unsupported claim. This gives the experiment a narrow, measurable repair target rather than a generally broken page.

## Decision

The task is eligible for an exact controller-versus-installed-policy 2×3 preregistration using Codex/Luna high. No task, prompt, starter, DESIGN.md, model, effort, timeout, or runtime field may differ between arms. The sole arm delta remains project proof-policy installation. Generation must stop on preparation drift, provider substitution, timeout, attribution failure, or invalid policy state.
