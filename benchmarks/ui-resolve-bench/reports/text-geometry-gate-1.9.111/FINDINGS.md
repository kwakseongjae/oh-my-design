# Text geometry no longer means overflow alone

The previous geometry gate answered whether content remained inside the
viewport. It did not answer whether the content remained readable inside it.
That distinction allowed a two-line short action, multi-line owner metadata,
and a generated status label competing with an 8px status-dot box to receive
the same 85/85 result as a deliberate narrow layout.

The accepted opt-in observation records four bounded failure families:

1. a word or identifier split mid-token;
2. short atomic metadata exceeding a task-owned line budget;
3. a short control label exceeding that line budget;
4. generated label content wider than its declared pseudo-element box.

The task owns both scope and budget. This prevents a global “never wrap” rule
from penalizing legitimate prose, localization, or responsive headlines. The
new gate is forward-only: no prior score or leaderboard row changes.

The next holdout must opt into this contract before generation. A separate
decision-hierarchy oracle will then specify stable semantic roles for target,
evidence, blocker state, and action so hierarchy can be measured without
guessing from style alone.

