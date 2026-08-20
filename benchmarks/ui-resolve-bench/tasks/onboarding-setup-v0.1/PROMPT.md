# Task: improve the Grove first-run workspace setup

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready onboarding surface for Grove, a research workspace for
small product teams.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified product
claims.

Keep the existing product facts and every `data-bench` hook. Preserve and
polish these working journeys:

1. choose one of three roles and expose the selection with `aria-pressed`;
2. turn the weekly digest preference on and back off;
3. reject an empty workspace name with a focused inline error, accept a valid
   name, and show a success confirmation;
4. keep keyboard focus visible and respect reduced motion;
5. render without horizontal overflow at 390×844 and 1440×1000.

The page should help a new user understand what is being configured, what can
be changed later, and what the primary next action will create. You may
reorganize the markup and CSS as long as the protected behavior and hooks
remain intact.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
