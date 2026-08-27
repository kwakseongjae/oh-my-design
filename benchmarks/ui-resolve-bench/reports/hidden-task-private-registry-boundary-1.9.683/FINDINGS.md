# Hidden-task private registry boundary — 1.9.683

## Result

The benchmark can now commit to a private task denominator without putting task prompts, starter files, task names, or source paths in the public repository.

`build-hidden-task-registry.mjs` accepts only a source root outside the repository. Every private task must contain the contract, prompt, DESIGN.md, and starter surface, and must already declare hidden visibility plus independent-audit eligibility. The public output contains opaque aliases, file/contract hashes, locale and dimension coverage, and a registry hash.

The builder rejects public-repository sources, incomplete bundles, ineligible tasks, unsupported locales, and duplicate bundle commitments. Tests also verify that private names, prompt text, and absolute source paths do not appear in the public output.

## Claim boundary

No real private tasks were created in this patch. The hidden denominator remains 0/24 and gate 4 remains open. This patch closes only the disclosure and immutability boundary needed before fresh non-public authoring begins.

Once a private authoring location exists, task bundles can be built there, committed publicly by hash, independently audited, and later revealed for reproducibility without pretending the existing 78 public tasks were hidden.
