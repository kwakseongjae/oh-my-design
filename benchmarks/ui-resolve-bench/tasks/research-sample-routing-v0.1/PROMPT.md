# Task: improve the Fieldbook research-sample handoff

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready sample-routing handoff for Fieldbook, a fictional
field-research operations tool.

Read the entire `DESIGN.md` before editing and treat it as the product contract.
Do not add external dependencies, network calls, remote assets, or unverified
sample quality, custody, assay, schedule, staffing, storage, or research claims.

Keep every supplied sample and destination identifier, every `data-bench` hook,
exactly one `data-bench-design-role="routing-console"` marker, and exactly one
of each `data-bench-decision-role` marker: `context`, `target`, `evidence`,
`state`, and `action`.

Preserve and polish these working journeys:

1. choose chronology-first routing, site grouping, or manual assignment;
2. turn original field-note preservation on and off with correct `aria-pressed`;
3. reject an empty handoff label, focus the field, then accept
   `Winter assay handoff` and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced motion;
5. preserve exact identifiers and the relationship between routing policy,
   sample, destination, steward, field-note setting, handoff label, and final
   review action without injected break opportunities, mid-token fragmentation,
   short-label wrapping, single-text horizontal scrollers, or horizontal page
   scroll at 390×844, 320×720, or 200% zoom;
6. keep the selected policy visibly emphasized, routing state distinct from
   evidence, and the final action separated from the context roles.

Do not insert `<wbr>`, `<br>`, zero-width spaces, soft hyphens, or generated
separators into identifiers. Do not turn each sample into a decorative card or
invent quality grades, assay results, storage conditions, dates, staff counts,
social proof, or research outcomes.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
