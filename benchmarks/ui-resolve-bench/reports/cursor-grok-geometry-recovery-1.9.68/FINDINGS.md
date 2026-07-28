# Cursor/Grok incident geometry candidate recovery — 1.9.68 findings

Status: **passed; Internal display-name-only evidence**.

## Result

The fresh incident OmD cell completed without retry, fallback, substitution,
manual product edit, timeout, or provider-capacity failure.

- deterministic score: 85/85;
- automated gate: pass;
- critical gates: 6/6;
- Evidence & Unknown: pass;
- four-viewport responsive geometry: pass;
- axe serious/critical: 0 at all four viewports;
- keyboard traversal: 7/7 visible, in-view, and fully in-view controls at all
  four viewports;
- changed product files: `index.html` only;
- wall time: 263,017 ms;
- observed tokens: 96,316, with cached input reported separately;
- replacement verifier: absent;
- direct browser command: absent.

The generated source declares `--radius-console: 14px` and
`--radius-control: 10px`, exactly matching the DESIGN.md main-console and
button/filter role tokens. The evaluator independently passed both
`card_radius` and `control_radius`.

The hidden-focusable regression also remained absent: each viewport found
exactly seven controls, visited each once, and reported no clipped or
overlapping controls.

## Validity boundary

The runtime reported `Cursor Grok 4.5 High` as a display name, not an immutable
provider model identifier. The stored run therefore remains
`invalid-attribution` and `ui_resolved:false` for public Model Track purposes,
despite the complete 85/85 deterministic result.

This evidence is valid only as an Internal runtime×skill candidate recovery.
It does not establish public model attribution, Raw/OmD Skill Lift,
Reliability@3, efficiency, cross-model superiority, or frontier status.

## Decision

The bounded 1.9.68 recovery hypothesis passes. The exact 1.9.66 incident
geometry failure cluster did not recur, and the 1.9.64 interactive-closure
repair remained intact.

A fresh separately preregistered repeated replacement matrix is now unlocked.
Historical 1.9.66 scores and artifacts are not revised or combined with this
candidate-only cell.
