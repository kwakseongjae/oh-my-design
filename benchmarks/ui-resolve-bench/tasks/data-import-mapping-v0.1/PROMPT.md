# Task: improve the FieldMerge CSV mapping setup

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready CSV field-mapping surface for FieldMerge, a fictional
operations tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified import,
customer, performance, integration, or data-quality claims.

Keep every existing source-file and mapping fact, every `data-bench` hook,
exactly one `data-bench-design-role="mapping-console"` marker, and exactly one
of each `data-bench-decision-role` marker: `context`, `target`, `evidence`,
`state`, and `action`. The decision roles belong to the visible import
configuration boundary, not to a mapping row or hidden status.

Preserve and polish these working journeys:

1. choose a matching key between email, account ID, and customer ID;
2. turn the missing-key row policy on and off with correct `aria-pressed`;
3. reject an empty mapping name, focus the field, then accept
   `July customer update` and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced
   motion;
5. preserve the relationship between source file, supplied fields, matching
   key, row policy, mapping name, and final action without clipping,
   mid-token fragmentation, short-control wrapping, or horizontal page scroll
   at 390×844, 320×720, or 200% zoom;
6. keep the source file visibly emphasized over supporting fields, keep current
   mapping state distinct from evidence, and separate the final action from all
   three context roles.

Do not convert each field into an interchangeable card, hide source fields in a
tooltip, or invent validation results, match rates, row counts, destinations,
integrations, customer proof, or import success.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
