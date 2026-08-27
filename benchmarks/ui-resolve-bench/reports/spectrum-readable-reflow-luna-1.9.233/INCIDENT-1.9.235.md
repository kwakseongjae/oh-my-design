# Spectrum matrix invocation incident — 1.9.235

Status: **FROZEN; `/private/tmp/u19233` must not resume**

The first locked cell, `luna-spectrum-r1-close`, completed validly: objective **81/85**, responsive geometry green at every viewport, UI-Resolved false because serious `color-contrast` remained at every viewport, proof execution gate pass, installed host-policy gate pass, one browser attempt, and zero unblocked proof violations.

The invocation was intended to use checkpoint-bounded `max-new 1`, but the operator supplied the unsupported alias `--max-new 1` instead of the canonical `--max-new-cells 1`. The CLI silently ignored the unknown option, waited the preregistered 120 seconds, and began `luna-spectrum-r1-readable`. The process was interrupted immediately after that unexpected cell start. Its trace contains eight events and is incomplete.

This is an execution-control nonconformance, not a model or skill result. No comparison claim is permitted. The valid first-cell diagnostic is retained but cannot be paired or promoted. Same-root resume, repair, or result substitution is forbidden.

Frozen evidence:

- execution state SHA: `d9b12ae26208a144177beb2792cedf8fcdec73c2d28ce53c95b60c2401bd5390`
- first-cell run record SHA: `6484abeb8534b5762e0dd70fcd0fc1afee748a83037e3ab8f699cc2fcb794f6b`
- first-cell product SHA: `45eb4f35cc39585220386f9b5dfdf2c28bf24d48dcbd229c73272edad976d602`
- partial second-cell events: 8

The runner now rejects every unknown CLI option before preflight. A replacement comparison must use a fresh root, a new experiment identifier, and the canonical `--max-new-cells 1` flag.
