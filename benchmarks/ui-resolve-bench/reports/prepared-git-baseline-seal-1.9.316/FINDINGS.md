# Prepared Git baseline seal — 1.9.316

Status: **repair validated; provider calls 0**

The rejected `/private/tmp/u19315` preparation exposed a benchmark-integrity gap: `prepareHostPolicyCell` initialized `.git`, but the prepared task, skill, host policy, and product files remained untracked on an attached default branch. Although the deterministic evaluator kept its own tree hashes, an agent using Git could not inspect a meaningful product diff.

Host-policy matrix preparation now:

1. excludes `.benchmark/`, `.omd/`, and `.t/` as runtime artifacts;
2. stages every prepared starting file;
3. creates a local deterministic baseline commit without relying on user Git identity;
4. detaches HEAD;
5. fails preparation unless `git status --porcelain --untracked-files=all` is empty; and
6. records the baseline commit, detached state, and clean state in each manifest.

Acceptance:

- exact controller/installed host-policy preparation: 2/2 focused green, including clean + detached assertions
- provider-neutral preparation/execution contracts: 71/71
- TypeScript lint: pass
- build: pass
- diff check: pass

The existing `/private/tmp/u19315` root is retained as a rejected preparation artifact and will not be repaired or reused. A new root must be preregistered and prepared from the committed repair.
