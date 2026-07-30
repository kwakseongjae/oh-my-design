# Payout approval task contract — 1.9.102

Status: **LOCKED**.

Add one unseen, high-consequence payout-approval family before comparing the
current OmD skill with a frontier repair skill. The task introduces a generic
`approval-v1` evaluator adapter rather than encoding one candidate layout.

The adapter must retain exactly three state groups so the schema 0.5
deterministic maximum remains 85:

1. filter state and visible-row counts;
2. evidence disclosure open/close state;
3. approval decision boundary: dialog initially closed, opens with focus
   inside, cancel closes and restores trigger focus, and confirm changes the
   announced status, closes, and restores trigger focus.

The fictional Ledgerly fixture fixes four payout rows, three filters, two
evidence disclosures, one native dialog, one confirmation path, exact
DESIGN.md tokens, and desktop/390px/320px/200%-zoom viewports.

Acceptance requires the untouched starter to pass all 85 deterministic points
and all six critical gates. The existing pricing, onboarding, dashboard, and
locale adapters must remain unchanged. No provider call, skill change, scoring
weight change, response repair, or public superiority claim is authorized.
