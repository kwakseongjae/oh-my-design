# Grok 4.5 High read-only review

- Runtime: Cursor Agent
- Model requested and reported: `cursor-grok-4.5-high`
- Session: `724dda20-1ad3-44d0-b93b-ce0ef4e35728`
- Mode: read-only architecture calibration review
- Usage: 70,491 input tokens, 3,974 output tokens, 31,744 cache-read tokens

## Verdict

`ADMIT_BOUNDED_COUNCIL`, but only as advisory lane dispatch with a frozen
automatic-decision surface. Council output may not promote `interview`,
`defer`, or `blocked` to `auto`.

## Risks found and closed in this patch

- expected dispositions alone could hide a semantically wrong proposed value;
- mixed marketing/product signals could force live capture;
- only the first grounded wow candidate could silently win;
- `blocked` existed in the schema but had no exercised path;
- brand/reference, security/data/pricing, polarity, and missing-context briefs
  were not represented.

The corpus was expanded from 16 to 22 cases and now verifies proposed values,
the blocked path, authority commitments, negations, surface conflicts, two
grounded wow candidates, and a missing `ctx-prime.json` case.

## Bounded next contract

- dispatch only when an interview, deferred uncertainty, blocked item, or
  cited lane conflict exists;
- at most one intake council round and one pre-ship contrarian round;
- reject uncited claims;
- do not change any disposition toward `auto` without fresh user-stated
  evidence;
- retain `omd-master` as the sole implementation owner and preserve mandatory
  plan, DESIGN.md, and validation checkpoints.
