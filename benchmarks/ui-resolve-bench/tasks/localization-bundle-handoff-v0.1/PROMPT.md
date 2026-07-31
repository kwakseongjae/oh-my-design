# Task: improve the RelayLocale bundle handoff queue

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready localization-bundle handoff surface for RelayLocale, a
fictional release tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified translation,
quality, customer, performance, release, or locale claims.

Keep every existing bundle fact, every `data-bench` hook, exactly one
`data-bench-design-role="main-console"` marker, and exactly one of each
`data-bench-decision-role` marker: `context`, `target`, `evidence`, `state`, and
`action`. The decision roles belong to the visible selected-bundle handoff
boundary, not to a row or hidden detail.

Preserve and polish these working journeys:

1. filter bundles between all, needs-review, and ready states;
2. open and close both source-evidence disclosures with correct
   `aria-expanded`;
3. complete the selected handoff and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced
   motion;
5. preserve exact locale artifact identifiers and the relationship between
   artifact, supplied source evidence, current state, and final action without
   clipping, mid-token fragmentation, short-control wrapping, or horizontal
   page scroll at 390×844, 320×720, or 200% zoom;
6. keep the selected artifact visibly emphasized over evidence, keep current
   state distinct from evidence, and separate the final action from all three
   context roles.

Do not convert each field into an interchangeable card, hide the artifact name
in a tooltip, or invent translation scores, quality judgments, release status,
reviewer conclusions, destinations, customer proof, or completion estimates.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
