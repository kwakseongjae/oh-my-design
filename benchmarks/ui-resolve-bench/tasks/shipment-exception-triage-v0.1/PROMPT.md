# Task: improve the RelayDesk shipment exception board

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready shipment-exception triage surface for RelayDesk, a
fictional dispatch tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified delivery,
customer, performance, or carrier claims.

Keep every existing shipment fact, every `data-bench` hook, exactly one
`data-bench-design-role="main-console"` marker, and exactly one of each
`data-bench-decision-role` marker: `context`, `target`, `evidence`, `state`, and
`action`. The decision roles belong to the visible selected-exception triage
boundary, not to a row or hidden detail.

Preserve and polish these working journeys:

1. filter exceptions between all, actionable, and monitoring states;
2. open and close both scan-evidence disclosures with correct `aria-expanded`;
3. mark the selected triage record complete and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced
   motion;
5. preserve the relationship between shipment, route, expected window, scan
   evidence, and state without clipping, mid-token fragmentation,
   short-control wrapping, or horizontal page scroll at 390×844, 320×720, or
   200% zoom;
6. keep the selected shipment visibly emphasized over evidence, keep current
   state distinct from evidence, and separate the final action from all three
   context roles.

Do not convert each field into an interchangeable card, hide route or timing in
a tooltip, or invent severity scores, causes, carrier conclusions, recovery
times, customer proof, or compliance claims.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
