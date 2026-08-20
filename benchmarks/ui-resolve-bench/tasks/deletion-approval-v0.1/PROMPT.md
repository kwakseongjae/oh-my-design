# Task: improve the ArchiveLine deletion approval queue

Work only inside this repository. Improve the existing `index.html` into a
clear, production-ready permanent-deletion review surface for ArchiveLine, a
fictional data-governance tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract, not optional inspiration. Do not add external
dependencies, network calls, remote fonts, images, or unverified financial,
fraud, settlement, customer, or performance claims.

Keep every existing deletion-request fact, every `data-bench` hook, exactly one
`data-bench-design-role="main-console"` marker, and exactly one of each
`data-bench-decision-role` marker: `context`, `target`, `evidence`, `state`, and
`action`. The decision roles belong to the visible selected-workspace deletion
boundary. Do not move them into the hidden dialog or duplicate them in rows.

Preserve and polish these working journeys:

1. filter deletion requests between all, blocked, and ready states;
2. open and close both evidence disclosures with correct `aria-expanded`;
3. open the approval dialog with focus inside it;
4. cancel safely and return focus to the approval trigger;
5. reopen, confirm the shown workspace deletion, close the dialog, announce the changed
   state, and return focus to the trigger;
6. keep every control keyboard reachable with visible focus and respect reduced
   motion;
7. preserve the relationship between workspace, owner, deletion scope,
   requested date, evidence, and blocker state without useful-content clipping,
   mid-token fragmentation, short-control wrapping, or horizontal page scroll
   at 390×844, 320×720, or 200% zoom;
8. keep the selected workspace visibly emphasized over evidence, keep blocker
   state distinct from evidence, and separate the final action from all three
   context roles.

Make the irreversible action explicit without adding warning theatre. Do not
convert each field into an interchangeable card, hide the deletion scope in a
tooltip, or invent risk scores, legal conclusions, approval history, deletion
speed, customer proof, or compliance claims.

Do not explain a plan. Inspect the files, implement the page, exercise the
interactions locally, and leave the repository in a finished state.
