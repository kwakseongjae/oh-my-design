# Task: improve the Beacon incident operations console

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready incident operations surface for Beacon, a coordination
console for a small platform team.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified reliability
or performance claims.

Keep the existing incident facts and every `data-bench` hook. Preserve and
polish these working journeys:

1. filter the incident list between all, critical, and warning states;
2. open and close both incident detail disclosures with correct
   `aria-expanded` state;
3. acknowledge the selected response and announce the state change;
4. keep keyboard focus visible and respect reduced motion;
5. render without horizontal overflow at 390×844 and 1440×1000.

The page should make severity, ownership, affected surface, and the next safe
action easy to scan. Prefer a coherent operational hierarchy over a dashboard
made from interchangeable decorative cards. You may reorganize the markup and
CSS as long as the protected behavior and hooks remain intact.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
