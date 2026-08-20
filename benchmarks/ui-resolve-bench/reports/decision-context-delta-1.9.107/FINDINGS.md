# 1.9.107 findings — bounded decision-context delta

PREPARED, not promoted.

The experimental skill differs from the canonical `skills/omd-apply/SKILL.md`
by exactly one paragraph. Focused tests prove that removing the single `2e`
rule produces a byte-identical canonical file. The canonical file itself does
not contain the experimental rule.

The skill validates with the standard skill validator and installs through the
reviewed Cursor channel adapter under `/omd-apply`. A dirty-source diagnostic
preparation confirmed the expected task, activation, install path, and
experimental skill hash:

`c2ac9f7e930377eeb0006c89647d949cf078418a64d54723773917053061848a`

This diagnostic root is non-publishable and cannot enter the benchmark
denominator. After this source is committed, a fresh clean preparation must
lock its new source commit and attestation before any provider call.

