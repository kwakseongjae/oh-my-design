# Measured pre-edit fit-plan repair — 1.9.525

The wafer candidate reached 85/85 objective points but still failed proof: its 320px metrology row retained only 4.5625px. The earlier 16px field described an intention, but no browser measurement bound the first edit to the actual intrinsic text width.

Schema 0.3 now separates planning from acceptance. `snapshot` first locks the original product and selector inventory. The shipped browser runner then executes once in `OMD_REFLOW_MODE=plan` on the exact named existing consumer, measures every locked row's intrinsic nowrap width at 390px, 320px, and actual 200% zoom, adds the required 16 CSS px planning margin, and closes the plan through `plan-close`. Only then may the product edit begin. The measured plan is part of the immutable inventory digest and is printed as an edit guardrail.

Post-edit proof remains bounded to one deterministic static closure and one terminal browser acceptance. A live browser smoke attached to `bench19366` without launching a fallback and produced exact carrier budgets for all three conditions. No provider was called, and the repair adds no task selector, product fact, style answer, or benchmark-specific exception.
