# Task: improve the Relaydesk webhook route setup

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready webhook destination routing surface for Relaydesk, a
fictional integration operations tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract. Do not add external dependencies, network
calls, remote assets, or unverified security, delivery, customer, validation,
or performance claims.

Keep every supplied event identifier and route fact, every `data-bench` hook,
exactly one `data-bench-design-role="routing-console"` marker, and exactly one
of each `data-bench-decision-role` marker: `context`, `target`, `evidence`,
`state`, and `action`.

Preserve and polish these working journeys:

1. choose primary, backup, or paused as the delivery lane;
2. turn signature verification on and off with correct `aria-pressed`;
3. reject an empty route label, focus the field, then accept
   `Checkout authorization route` and announce the changed state;
4. keep every control keyboard reachable with visible focus and respect reduced
   motion;
5. preserve exact identifiers and the relationship between source, endpoint,
   event, lane, signature policy, route label, and final review action without
   injected break opportunities, mid-token fragmentation, short-control
   wrapping, or horizontal page scroll at 390×844, 320×720, or 200% zoom;
6. keep the selected source visibly emphasized, route state distinct from
   evidence, and the final action separated from the context roles.

Do not insert `<wbr>`, `<br>`, zero-width spaces, soft hyphens, or generated
separators into identifiers. Do not turn each event into a decorative card or
invent delivery attempts, endpoint health, signing results, owners,
integrations, customer proof, or delivery success.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
