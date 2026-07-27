# 1.9.38 findings — benchmark activation accepted

Status: `calibration_complete`

The claim-free Home entry, evidence inspection events, and benchmark-end
handoff module passed the frozen contract. The primary production numerator is
still only a version-isolated successful Terminal-command copy; Docs and
Builder navigation remain exploratory proxies.

## Evidence

- Sol high design review found two blockers: the exact command was hidden and
  the whole-section 50% observer was unreachable on small screens. The final
  implementation renders the exact command, names the Terminal destination,
  observes the bounded primary action card, demotes Builder to tertiary, and
  passed the re-review.
- Web tests: 830/830; focused activation tests: 10/10; typecheck and changed-file
  ESLint pass.
- Root focused analytics: 2/2; root TypeScript and analytics-script syntax
  pass. The root full suite retained 217 pass / 1 skip plus two unrelated
  vendor-fixture failures because the temporary Taste/UI UX Pro Max checkouts
  were not Git repositories.
- Production build: 1,459 pages; `/benchmarks` is static.
- Browser acceptance passed at 1440, 390, 320, and 200%-equivalent 720 CSS
  pixels with no horizontal overflow or clipped actions.
- Runtime event paths passed: one Home entry/view, one-shot inspection,
  exactly-once 50% handoff exposure at 320, successful copy → versioned
  `bm_handoff` + canonical `act_*`, failed copy → failed `bm_handoff` only, and
  clean Docs/Builder navigation proxies.
- Keyboard order and visible focus passed for Method, sources, scrollable
  Terminal command, copy, docs, and Builder.
- Terra xhigh found one serious `scrollable-region-focusable` defect in the
  command surface. Adding an explicit labelled focus target and visible ring
  reduced fresh axe serious/critical to 0/0; console/page errors are 0.

## Claim boundary

This calibration proves only that the bounded web activation path and its
measurement contract are ready. It does not prove CLI installation, a resolved
UI, causal lift, reuse, a benchmark rank, or frontier superiority. Production
promotion remains gated on the preregistered 14–28 complete-day decision.
