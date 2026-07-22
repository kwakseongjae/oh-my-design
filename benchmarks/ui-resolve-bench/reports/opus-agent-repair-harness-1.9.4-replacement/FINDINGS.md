# Opus 4.8 bounded repair harness — 1.9.4 replacement findings

Run on 2026-07-22 against the preregistration in this directory.

## Disposition

The bounded harness completed normally and its artifact passed every frozen
product gate at 85/85. It is nevertheless **invalid for the preregistered
all-Opus harness attribution**: the main Opus agent explicitly requested both
specialists with `model: sonnet`, and Claude Code recorded `claude-sonnet-5`
usage. The installed specialist files said `model: inherit`, but the parent
Agent-tool input overrode them.

Product success and model attribution are reported separately. This run cannot
be used as an Opus-only Harness Track result or a public claim.

## Runtime and product result

| signal | observed |
|---|---:|
| Parent model | exact `claude-opus-4-8` |
| Specialist Agent calls | 2 · no errors |
| Specialist Agent input models | Sonnet / Sonnet |
| Runtime model usage | Opus 4.8 + Sonnet 5 + Haiku helper |
| Child/process / timeout / final | 0 / no / present |
| Infrastructure / sandbox / cwd errors | 0 / 0 / 0 |
| Wall time | 564,945ms |
| First / last product write | 340,016 / 473,032ms |
| Uncached input + output tokens | 111,516 + 56,022 |
| Cached input tokens | 802,951 |
| Provider price equivalent | $2.47896 |
| Artifact diagnostic | 85 / 85 · all gates pass |

The writer returned four findings in 590 words after 103,879ms. The engineer
returned two findings in 631 words after 102,594ms. Both preserved the immutable
two-item FAQ ledger. The bounded contract therefore worked in substance.

Compared descriptively with the immediately prior failed smoke, wall time fell
37.23%, first product write improved 50.20%, uncached+output tokens fell 19.57%,
and provider price equivalent fell 34.99%. This is a same-task implementation
diagnostic, not a quality-lift estimate.

## Product gates

The artifact preserved exactly two FAQ disclosures and every protected hook at
desktop, 390px, 320px, and the 200% zoom surrogate. Billing, FAQ, invalid-email,
and valid-email transitions passed. All responsive geometry, keyboard traversal,
focus visibility, axe serious/critical, design grounding, and evidence-honesty
checks passed.

## Attribution defect and patch decision

`model: inherit` in a Claude agent file does not prevent the parent from passing
a different model selector in the native Agent tool call. The runner currently
records requested IDs but not requested Agent models, so its normalized exporter
incorrectly labels this cell valid.

The next patch must:

1. preregister a required specialist model selector (`opus` for this track);
2. state it in the activation and install the agent envelope with `model: opus`;
3. record each native Agent call's requested model;
4. fail attribution when a required specialist is called with another model;
5. preserve the bounded advisory and immutable ledger behavior unchanged.

The completed artifact is useful product evidence, but one public task and one
mixed-model trial support no reliability, Pareto, frontier, or superiority claim.
