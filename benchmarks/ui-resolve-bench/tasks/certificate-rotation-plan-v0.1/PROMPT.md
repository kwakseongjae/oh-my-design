# Task: improve the Northstar certificate-rotation plan

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready certificate-rotation planning surface for Northstar, a
fictional infrastructure operations tool.

Read the entire `DESIGN.md` before editing and treat it as the product contract.
Do not add external dependencies, network calls, remote assets, or unverified
security, certificate, validation, operator, customer, or performance claims.

Keep every supplied service and certificate identifier, every `data-bench`
hook, exactly one `data-bench-design-role="rotation-console"` marker, and
exactly one of each `data-bench-decision-role` marker: `context`, `target`,
`evidence`, `state`, and `action`.

Preserve and polish these working journeys:

1. choose staged rollout, maintenance window, or manual sequence;
2. turn dual-operator confirmation on and off with correct `aria-pressed`;
3. reject an empty rotation label, focus the field, then accept
   `Q3 certificate rotation` and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced motion;
5. preserve exact identifiers and the relationship between plan, service,
   current certificate, target certificate, rollout window, operator policy,
   rotation label, and final review action without injected break
   opportunities, mid-token fragmentation, short-label wrapping, single-text
   horizontal scrollers, or horizontal page scroll at 390×844, 320×720, or 200% zoom;
6. keep the selected plan visibly emphasized, rotation state distinct from
   evidence, and the final action separated from the context roles.

Do not insert `<wbr>`, `<br>`, zero-width spaces, soft hyphens, or generated
separators into identifiers. Do not turn each service into a decorative card
or invent validation results, certificate health, operator approvals, rollout
attempts, customer proof, or rotation success.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
