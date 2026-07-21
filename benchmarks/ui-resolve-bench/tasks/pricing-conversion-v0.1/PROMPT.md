# Task: improve the Relay pricing and conversion page

Work only inside this repository. Improve the existing `index.html` into a
distinctive, production-ready pricing page for Relay, a release coordination
tool for small product and engineering teams.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified product claims.

Keep the existing product facts and all `data-bench` hooks. Preserve and polish
these working journeys:

1. switch between monthly and annual billing and update every displayed price;
2. open and close each FAQ with correct `aria-expanded` state;
3. reject an invalid email with a clear inline error, accept a valid email, and
   show a success confirmation;
4. keep keyboard focus visible and respect reduced motion;
5. render without horizontal overflow at 390×844 and 1440×1000.

The page should make the pricing decision easy: one clear primary plan, honest
differences between plans, one primary action per section, and useful product UI
rather than decorative placeholder cards. You may reorganize the markup and CSS
as long as the protected behavior and hooks remain intact.

Do not explain a plan. Inspect the files, implement the page, exercise the three
interactions locally, and leave the repository in a finished state.
