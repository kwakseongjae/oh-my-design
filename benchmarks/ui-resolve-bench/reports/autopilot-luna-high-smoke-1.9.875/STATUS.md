# Autopilot Luna/high smoke 1.9.875

- Status: **stopped-preregistered; non-reusable**
- Exact named in-app browser admission: PASS
- Provider exposures: `4`
- Completed cells: `1 / 3`
- Valid terminal cells: `1 / 3`
- Landing: `30 → 100`, success after one bounded repair
- Cold chain: initial `20`; repair provider completed, but controller evaluator wrote no score
- Locale: not started

The cold-chain repair changed the product so that activating a record could
remove it from the visible collection while opening a valid detail state. The
evaluator treated `aria-selected` as optional evidence but still called
`getAttribute` on a zero-match locator, waited 30 seconds, and exited nonzero.
The controller correctly froze the root rather than inventing a result or
continuing to locale.

Provider-free replay after guarding the optional lookup exits cleanly and
writes a diagnostic `20 / 100` score. The repaired product still has real
failures: urgent classification, filtered exactness, assignment persistence,
responsive reachability and accessibility. The guard only converts an
infrastructure crash into an honest terminal product score; it does not promote
the product or alter this sealed root.
