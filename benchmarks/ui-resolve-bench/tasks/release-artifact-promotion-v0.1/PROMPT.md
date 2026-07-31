# Task: improve the RelayForge artifact promotion queue

Work only inside this repository. Improve the existing `index.html` into a clear,
production-ready release-artifact promotion surface for RelayForge, a fictional
platform tool.

If this repository contains `DESIGN.md`, read the entire file before editing.
Treat it as the product contract. Do not add dependencies, network calls, remote
assets, or unverified coverage, performance, safety, customer, or compliance claims.

Keep every existing artifact fact, every `data-bench` hook, exactly one
`data-bench-design-role="main-console"`, and exactly one of each
`data-bench-decision-role`: `context`, `target`, `evidence`, `state`, and `action`.
Those roles form one visible selected-artifact promotion boundary; do not move
them into the hidden dialog or duplicate them in rows.

Preserve and polish these working journeys:

1. filter artifacts between all, blocked, and ready;
2. open and close both manifest disclosures with correct `aria-expanded`;
3. open the promotion dialog with focus inside it;
4. cancel and return focus to the trigger;
5. reopen, confirm the shown artifact promotion, close the dialog, announce the
   changed state, and return focus to the trigger;
6. keep controls keyboard reachable, focus visible, and reduced motion respected;
7. preserve artifact, owner, channel, source manifest, and state without clipping,
   mid-token fragmentation, short-control wrapping, or horizontal page scroll at
   390×844, 320×720, or 200% zoom;
8. keep the selected artifact more prominent than its evidence, distinguish state
   from evidence, and separate the final action from all three.

Do not invent test results, approval history, rollout speed, risk scores, customer
proof, or compliance conclusions. Do not explain a plan. Implement and exercise
the finished page locally.
