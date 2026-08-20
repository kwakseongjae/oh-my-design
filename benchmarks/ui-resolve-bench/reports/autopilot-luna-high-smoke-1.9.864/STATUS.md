# Autopilot Luna/high smoke 1.9.864 — complete, quality gate failed

- Source commit: `fabfc3cf6a68728c8d15e52f7f7574cc0f0ae8b5`
- Locked plan SHA-256: `3abcc203892dace16a03be32ff16f29888f15ab4317034b4678eeb2508efe14e`
- Runtime: exact `gpt-5.6-luna/high`, serial, maximum one scheduled cell per invocation
- Retry / replacement / fallback / model substitution / effort substitution / Cursor: `0`
- Root state: `complete`; it is not a resume or repair workspace

## Result

The controller completed all three preregistered cells and converted every
initial generation into a project-owned `DESIGN.md`, a working single-file
surface, and a deterministic design-system proof. No user-question artifact
was created. The previous pointer-driven locale evaluator crash is fixed.

The objective quality target was not met:

- neighborhood library landing: `10 → 50 → 50`;
- cold-chain operations: `20 → 20 → 40`;
- five-locale clinic prep: `50 → 60 → 60`.

All three are valid terminal provider failures, so public one-shot and
superiority claims remain blocked. Across nine exact Luna/high calls the run
observed `13,375,422` input tokens (`12,439,040` cached), `168,629` output
tokens, and `3,673,223 ms` provider wall time.

The rendered results are materially stronger than the binary result suggests:
all three are coherent, responsive product surfaces and all three pass the
project design-system proof. The remaining failure is concentrated in the
closed-loop repair contract:

1. Landing repair feedback exposed only three booleans. It did not tell the
   model that three visible `Reserve a tool` controls were counted, that focus
   remained on the activating anchor, or which catalog/availability sentence
   failed the honest-unavailable rule.
2. Cold-chain evaluation incorrectly classified `Non-urgent` rows as urgent.
   It also omitted the selected owner, live confirmation, and source-row text
   needed to explain that the confirmation lacked the shipment identity. The
   final repair regressed a previously passing filter assertion; the controller
   recorded the regression truthfully.
3. Locale repair feedback reduced the required translation-unavailable state
   to `false`. The model was not shown that the expected control and alert were
   both absent while locale/progress/completion behavior already passed.

## Next patch

1. Correct urgent/non-urgent classification and retain its oracle/mutant
   calibration.
2. Add bounded, role/state-based diagnostics for landing activation/focus,
   unavailable information, owner persistence, and unavailable translation.
3. Preserve cumulative passing assertions and expose exact regression IDs.
4. Run provider-free tests, commit the authority change, and preregister a
   fresh root. Never rescore or resume 1.9.864 as benchmark evidence.
