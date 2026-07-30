# Task: improve the Permit access review console

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready access review surface for Permit, a fictional internal
tool used by a small security team.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified security or
performance claims.

Keep the existing request facts, every `data-bench` hook, and exactly one
`data-bench-design-role="main-console"` marker. That marker identifies the
overall access-review console whose radius belongs to the DESIGN.md
main-console role. If you reorganize the markup, move the marker with that
overall role; do not copy or move it onto a subordinate table, row, detail
panel, or note.

Preserve and polish these working journeys:

1. filter requests between all, urgent, and standard states;
2. open and close both evidence disclosures with correct `aria-expanded`
   state;
3. mark the selected review complete and announce the state change;
4. keep keyboard focus visible and respect reduced motion;
5. preserve the comparison between identity, scope, urgency, evidence, and
   owner without clipping useful content or creating horizontal page scroll at
   390×844, 320×720, or 200% zoom.

The page should make the next safe review decision obvious. Keep the data
relationship intact; do not turn every field into an interchangeable card or
invent risk scores, audit claims, customer proof, or approval history. You may
reorganize markup and CSS as long as the protected behavior, facts, and hooks
remain intact.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
