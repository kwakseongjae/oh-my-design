# Aircraft runtime-artifact honest-closure replacement — 1.9.325

This fourth infrastructure replacement preserves the same attempt, exact control `3a414a0a…`, candidate `8f8cec6e…`, aircraft task, prompt, starter, DESIGN.md, Luna/high, 900-second timeout, C/N–N/C–C/N order, 120-second pacing, no retry, and every promotion gate from 1.9.321.

The sole shared infrastructure delta is committed host policy `107bce09…`, applied byte-identically to both arms. It adds provider-before-browser readiness, honest `pass|unresolved` closure accounting, and fail-closed host-policy score admission. Browser-harness must report an active local connection before the first provider call.

Known invalid spend is retained as 4,968,562 provider-reported tokens plus one usage-unavailable cell. Invalid scores remain excluded. Fresh roots are `/private/tmp/u19325-vendors` and `/private/tmp/u19325`; `/private/tmp/u19321` and every earlier root remain frozen. Provider calls at preregistration: 0.
