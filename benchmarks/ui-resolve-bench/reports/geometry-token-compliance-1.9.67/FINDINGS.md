# Geometry-token execution compliance — 1.9.67 findings

Status: **accepted; provider-free**.

## Candidate delta

The canonical `omd-apply` skill now runs a mandatory `geometry-token closure`
after foreground correction and before the final interactive closure, optional
browser verification, or delivery.

The closure makes radius-token compliance transactional:

- enumerate every added or changed `border-radius` declaration and its actual
  product surface;
- classify only roles already established by the DOM, component identity, or
  product contract;
- record identity, product role, before/after declaration, declared role
  token, evidence mode, and decision;
- require the exact DESIGN.md role token or its exact computed value for a
  known role;
- reject approximate values, another role's token, arbitrary literals, and
  averages as proof;
- restore pre-edit geometry when either role or token is unresolved;
- leave a required new surface unrounded rather than inventing a token;
- block acceptance until mismatched, invented, and unresolved changed-radius
  counts are all zero.

The source skill changed from
`c63ba1e47fe1466c03299c475d8e51f0d6ce376b6631893d703bb110296a3e03`
to
`2ce11fb14cee0c34c9707d15bb2583fe606401beca1c3b9f22129d49d85f0845`.
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

Foreground closure, interactive closure, delivery reserve, unknown-as-absent,
task inputs, evaluator, and runtime controls were not changed.

## Decision

The bounded provider-free hypothesis passes. This establishes the canonical
skill contract and Cursor channel parity only. It does not prove that a model
will execute the closure or repair the 1.9.66 incident artifacts.

The next valid evidence is one fresh preregistered incident OmD recovery cell
from a clean commit. A repeated replacement matrix remains locked until that
cell passes.
