# Reference collection final process

This runbook is the default CREATE and REVERIFY path. It intentionally does not depend on MCP.

## Tool roles

| Tool | Role | May promote a user-facing claim? |
|---|---|---|
| Deterministic collector (`capture:reference`) | Repeatable multi-route capture, normalized computed styles, font loading/source evidence, safe interaction coverage | Only after reconcile |
| `browser-harness` | Exception lane for visual route discovery, SPA state, overlays, responsive behavior, and a human-readable second look in real Chrome | No; its observation must be recorded and reconciled |
| Reconcile skill / Terra high runner | First-party/Tier 2 source discovery, evidence-domain separation, conflict resolution, prose and token decisions | Yes, subject to deterministic gates |
| Codex in-app browser | Product acceptance through Home → `/builder` → selection → preview; desktop/mobile UI inspection | No reference claim promotion |

The collector remains the fleet engine. `browser-harness` is mandatory when the collector stalls, captures fewer than two useful public surfaces, reports zero interaction coverage despite visible interactive UI, encounters an SPA/overlay that hides evidence, or leaves a font/component conflict unresolved. It is optional as a spot-check when deterministic evidence is already complete.

## Preflight

```bash
scripts/check-browser-harness.sh
npm --prefix web run capture:fixture:check
```

If the command resolves to an obsolete environment, reinstall it with the official isolated tool command and ensure the first executable on `PATH` points to the new tool:

```bash
uv tool install --python 3.12 --upgrade --force browser-harness
browser-harness --doctor
```

Cloud authentication is optional and is not a failure for local collection.

## CREATE / REVERIFY sequence

1. **Declare evidence domains.** List product/app, marketing, corporate/history, design-system, and font/license surfaces separately. One domain never silently fills another.
2. **Capture the deterministic baseline.** Run `npm --prefix web run capture:reference -- <id> --max-routes 3` (or a checked-in route budget). Preserve the JSON bundle unchanged.
3. **Evaluate coverage.** Require useful public surfaces, representative element provenance, font status, and safe interaction counts. Unknown values stay absent at the smallest field/group boundary.
4. **Run the browser-harness exception lane when triggered.** Start with a screenshot, inspect only the disputed route/state, and record URL, viewport, visible element, computed value, FontFace status, and screenshot path in `.verification.md`. Do not paste a guessed token into DESIGN.md.
5. **Cross-check first-party context and Tier 2 sources.** History/rebrand/font narrative can be retained without being promoted to product tokens. getdesign/refero are comparison evidence, not authority over inspectable Tier 1 values.
6. **Reconcile.** Resolve each claim by evidence domain. A known official but browser-unloadable font keeps metadata and loses only its live specimen. An unresolved field is omitted; verified neighboring fields and narrative remain.
7. **Write canonical files only.** Edit `web/references/<id>/DESIGN.md` and `.verification.md`; sync derived mirrors afterward.
8. **Deterministic acceptance.** Run reference verification, AST/quality checks, tests, and typecheck. A model completion is never acceptance by itself.
9. **Product acceptance.** Use the in-app browser or browser-harness on Home → `/builder` → brand/color selection → preview. `/reference/[id]` is diagnostic, not builder acceptance.
10. **Queue reverify.** Schedule by evidence freshness and unresolved severity. The periodic model may change; capture bundles and acceptance gates remain model-independent.

## 2026-07-12 tool diagnosis

The repaired local tool connected to real Chrome and inspected Banksalad. It exposed loaded Pretendard weights, live CTA colors/radii, and public internal routes quickly. The deterministic bundle still provided the stronger fleet artifact: five surfaces, 603 normalized Pretendard usages, source URLs, and a coverage score. Therefore browser-harness is valuable as a visual and exception-oriented verifier, but replacing the deterministic collector with it would reduce reproducibility and evidence structure.
