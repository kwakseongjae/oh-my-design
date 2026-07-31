# Task: improve the TernaryOps feature-flag rollout review

Work only inside this repository. Improve `index.html` into a clear,
production-ready rollout review surface for TernaryOps, a fictional product
operations tool.

Read the entire `DESIGN.md` before editing and treat it as the contract. Do not
add dependencies, network calls, remote assets, or unverified conversion,
performance, safety, customer, experiment, or compliance claims.

Keep every supplied flag fact, every `data-bench` hook, exactly one
`data-bench-design-role="main-console"`, and exactly one of each decision role:
`context`, `target`, `evidence`, `state`, and `action`. Those five roles form one
visible selected-flag boundary; do not duplicate them in rows.

Preserve and polish these working journeys:

1. filter flags between all, review, and ready;
2. open and close both audience disclosures with correct `aria-expanded`;
3. acknowledge the selected review, update the live status, and update the action;
4. keep controls keyboard reachable, focus visible, and reduced motion respected;
5. preserve flag key, owner, audience file, channel, and state without clipping,
   mid-token fragmentation, short-control wrapping, or horizontal page scroll at
   390×844, 320×720, or 200% zoom;
6. keep the selected flag more prominent than evidence, distinguish state from
   evidence, and separate the action from all three.

Do not invent test results, lift, rollout percentages, risk scores, customers,
or approvals. Do not explain a plan. Implement and exercise the finished page.
