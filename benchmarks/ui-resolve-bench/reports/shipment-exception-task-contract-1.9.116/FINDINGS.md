# Shipment exception triage is the first structural non-approval holdout

A fresh untouched workspace at `/tmp/u19116-shipment-starter` passed the full
browser evaluator:

- deterministic score: 85/85;
- critical gates: 6/6;
- three filters, two disclosures, and the triage acknowledgement: green;
- desktop, 390px, 320px, and CSS-zoom surrogate geometry: green;
- every registered text-geometry check: green (12/12);
- every registered decision-hierarchy check: green (32/32);
- keyboard, focus, axe, language, localhost-only, and evidence honesty: green.

This is a new operational triage family using the generic `dashboard-v1`
interaction adapter rather than the approval dialog family. The mobile fixture
uses label-above-value metadata, child status dots, and an explicit selected
shipment → scan evidence → missing-state → handoff action boundary. It does not
add a warning banner, risk score, invented evidence, or left-accent decoration.

The mobile screenshot was inspected after deterministic acceptance. Short
labels remain horizontal, shipment metadata keeps a readable hierarchy, and
the selected context remains distinct from the four-row queue at 390px.

## Frozen source hashes

- task: `b699a60d2bbefbc6799a29653265e63cd4e802115a77fa36943bb0a75b12edb1`
- prompt: `78810529c3053b30bd51ee26954ca3ce41ee3ed16162cfa01f1a798aa18da58e`
- starter: `03d7160d1045760b080dc1685ab47376ecfe95005207d5f1e71dbfd55bbdd7d3`
- DESIGN.md: `0bc7d89711cbe00578fc2478cec0d70e532084f3d968481c3e64a7429600960e`
- acceptance score: `3aaf6cfc4850775019fd672a0ca861d8504c82b24c645d4b95606baee3c05e10`

This is task-contract acceptance only. No model or skill has run, no candidate
score exists, and no performance or frontier claim is authorized. The next
denominator is a same-task exact-current OmD versus exact Impeccable
prompt-only comparison with three trials per arm.
