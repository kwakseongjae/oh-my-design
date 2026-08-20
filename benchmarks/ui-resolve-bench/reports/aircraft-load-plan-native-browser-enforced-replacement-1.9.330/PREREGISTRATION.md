# Aircraft native-browser-enforced replacement — 1.9.330

This fifth infrastructure replacement preserves the same attempt, exact control `3a414a0a…`, candidate `8f8cec6e…`, aircraft task, prompt, starter, DESIGN.md, Luna/high, 900-second timeout, C/N–N/C–C/N order, 120-second pacing, no retry, and every promotion gate from 1.9.325.

The sole shared infrastructure delta is committed host policy `682c094d…`, applied byte-identically to both arms. It adds live PreToolUse enforcement for native agent-browser, browser-harness, and browser tool namespaces. The first browser proof is allowed; any recovery is denied before execution. Browser-harness must report an active local connection before the first provider call.

Known infrastructure-invalid spend is retained as 8,453,412 provider-reported tokens plus one usage-unavailable cell. Including the valid prior control, observed attempt spend is 10,415,571 tokens plus one usage-unavailable cell. All invalid scores remain excluded. Fresh roots are `/private/tmp/u19330-vendors` and `/private/tmp/u19330`; `/private/tmp/u19325` and every earlier root remain frozen. Provider calls at preregistration: 0.
