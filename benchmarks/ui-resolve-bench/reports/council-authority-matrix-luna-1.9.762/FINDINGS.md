# Findings — blocked-first authority matrix 1.9.762

The blocked-first matrix preserved the complete 1.9.761 result: exact dispositions 8/8, correct deferrals 3/3, mandatory pricing interview retained, external brand evidence blocked, and no forbidden automatic decision.

The cost gate removed both advisory calls from the already-blocked brand case. Provider calls fell from four to two, input tokens from 214,151 to 107,439 (-49.83%), and summed lane wall time from 154,464 ms to 71,983 ms (-53.4%). The blocked case remained exact without a model call.

All selected lanes completed with valid artifacts. There were no undeclared writes, timeouts, retries, or Cursor calls.

This establishes a useful production rule: deterministic blockers preempt advisory debate. Debate resumes only after the blocker is resolved. The next integration step is to carry the authority-mode claim schema, blocked-first dispatch rule, and exact user-checkpoint behavior into the installed `omd-harness` skill and its agent handoff contract.

