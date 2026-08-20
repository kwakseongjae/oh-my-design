# Hidden-focusable execution compliance — 1.9.64 findings

Status: **accepted; provider-free**.

## Candidate delta

The canonical `omd-apply` skill now runs a mandatory `interactive closure`
immediately after the last product edit and before optional browser
verification or delivery.

The closure does not add a new accessibility rule. It makes the existing
protected-ledger and focus-reveal rules transactional:

- enumerate every added or changed focusable element in the actual product
  diff;
- reconcile before/after count, `allowed_delta`, and original-user
  `change_authority`;
- remove an unauthorized addition instead of accepting an accessibility or
  production-readiness rationale;
- require a source-level `:focus`/`:focus-visible` reveal path and same-route
  in-view acceptance for intentionally hidden focusable controls;
- treat a base `.sr-only`/visually-hidden rule without focus reveal as
  permanently clipped;
- block acceptance until unauthorized, permanently clipped, and unresolved
  focus-reveal counts are all zero.

The source skill changed from
`938c6f0a7bb2ce172786274599b56591f01a82ee8e6bd1bf3d54bef03c74e4c7`
to
`c63ba1e47fe1466c03299c475d8e51f0d6ce376b6631893d703bb110296a3e03`.
The sidecar remained
`f0ad5294de3f599bbed124708c61988be9098e20d4723ce3574023144751253e`.

## Verification

- canonical skill contract: 6/6;
- install-skills: 36/36;
- Cursor channel preparation/adaptation: 1/1 focused pass;
- selected combined run: 55/57 passed, with the same two unrelated
  `/tmp/omd-ui-skills-bench/vendors/*` Git-metadata environment failures;
- TypeScript: pass;
- build: pass;
- diff check: pass;
- provider generation: zero.

A provider-free incident OmD calibration copied the canonical skill byte for
byte into `.cursor/skills/omd-apply/SKILL.md` and retained all three closure
zero conditions. It was prepared with explicit dirty opt-in only to validate
channel adaptation and is not publishable benchmark evidence.

## Decision

The bounded provider-free hypothesis passes. This establishes an executable
skill contract and channel parity, not model compliance or Skill Lift.

The next valid evidence is a fresh preregistered Cursor/Grok matrix from a
clean commit. Historical `/tmp/u1957`, `/tmp/u1963`, and every interrupted
provider artifact remain excluded.
