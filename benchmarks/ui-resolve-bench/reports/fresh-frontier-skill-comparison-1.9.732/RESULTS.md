# Fresh frontier skill comparison — 1.9.732

> Internal Preview. This is a preregistered, paired comparison on three fresh local tasks. It is not a public leaderboard or a 2.0 release gate.

## Outcome

With the same Codex runtime, requested `gpt-5.6-luna` / `high` configuration, 720-second timeout, and no retries or replacements, OmD won all three task pairs.

| Task | OmD 1.9.731 | Impeccable prompt-only | Pair result |
|---|---:|---:|---|
| Cartography sheet transfer | 85/85 · resolved | 75/85 · unresolved | OmD +10 |
| Numismatics tray accession | 85/85 · resolved | 75/85 · unresolved | OmD +10 |
| Entomology drawer loan | 85/85 · resolved | 79/85 · unresolved | OmD +6 |

OmD resolved 3/3 contracts. Impeccable prompt-only resolved 0/3. Impeccable preserved task behavior, design grounding, state journeys, and evidence honesty, but left at least one responsive or accessibility critical gate open in every task.

## Cost and execution shape

| Arm | Total tokens | Median tokens | Total wall time | Median wall time | Product revisions |
|---|---:|---:|---:|---:|---:|
| OmD 1.9.731 | 2,035,476 | 663,430 | 604.9s | 226.2s | 1 / 1 / 1 |
| Impeccable prompt-only | 1,825,904 | 237,280 | 798.0s | 176.8s | 1 / 2 / 1 |

OmD used 11.5% more total tokens, while its total wall time was 24.2% lower. The medians tell a different story: OmD's median run was slower and used more tokens. The difference comes from one long Impeccable Numismatics run (1,414,202 tokens, 449.6 seconds), so neither latency nor token efficiency should be generalized from three pairs.

OmD's three outputs each used one product revision and ended with an exact candidate-to-final byte match. That is evidence for OmD's native proof lifecycle, but it is reported separately from the shared UI score because Impeccable prompt-only was not given OmD's helper contract.

## Fairness contract

- Fresh tasks had zero prior provider/model exposure before this run.
- Both arms received exact task prompts, starters, DESIGN.md files, model request, effort, timeout, and objective evaluator within each pair.
- Task order alternated which arm ran first: OmD → Impeccable, Impeccable → OmD, OmD → Impeccable.
- OmD source was detached at `4e9514b91837cbed269320083a39641f41582729`.
- Impeccable source was detached at `4d849eb75f216109ea7053ed21530a11fafcc786`, prompt-only with hooks and network disabled.
- Provider calls: 6. Retries: 0. Replacements: 0.

## Claim boundary

This run supports: “OmD won all three fresh paired repair tasks in the 1.9.732 internal preview.” It does not support an industry-best claim, a model comparison, or a public benchmark ranking. The runtime recorded the requested model identifier but did not return a provider-reported model identity, so public model attribution remains ineligible.

The next evidence step is a larger preregistered task set with independent visual preference review and at least one additional frontier skill arm. Until then, use the screenshots and per-task scores as a product-development signal, not a universal superiority claim.
