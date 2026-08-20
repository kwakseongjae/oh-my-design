# Automated blind review runner — 1.9.87

Status: **LOCKED; provider-free runner accepted**.

## Purpose

Execute the 54 prepared 1.9.86 judge packets without response repair, retries,
fallbacks, or mixed-model denominator completion.

## Frozen execution contract

- input: private 1.9.86 manifest plus judge-visible `/tmp/u1986/packets`;
- runtime: Cursor Agent;
- model selector: `cursor-grok-4.5-high`;
- attribution: Internal registered display name only, never public model claim;
- timeout: 300 seconds;
- start-to-start pacing: 30 seconds;
- global concurrency: one;
- one new invocation per controller call;
- 54 scheduled invocations, each with a fresh context;
- no retry, fallback, response repair, model substitution, or manual completion.

## Acceptance

Before provider use, fake-runtime tests must prove:

- exact four-axis JSON acceptance and judgment assembly;
- Markdown, extra keys, missing axes, wrong assignment, and invalid choices
  freeze the root;
- a frozen root cannot resume;
- model display-name drift, timeout, process failure, and cache-preflight failure
  stop before another invocation;
- state contract and private manifest hashes cannot drift;
- two independently executed orders are required before one review unit becomes
  an aggregate-ready judgment file.

Live execution opens only after syntax, focused tests, TypeScript, and build
pass and the accepted preparation plus runner are committed.
