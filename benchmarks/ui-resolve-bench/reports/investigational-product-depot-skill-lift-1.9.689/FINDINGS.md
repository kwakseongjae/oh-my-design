# Investigational-product depot Skill Lift — 1.9.689

## Outcome

The fresh Luna high matrix completed all six valid cells. Raw DESIGN.md resolved **0/3** trials with objective scores 73, 73, and 79. Exact-current `omd:apply` resolved **2/3** with scores 85, 85, and 75. The paired result is two OmD wins, one tie, no losses, and a +66.7 percentage-point observed resolved lift.

That is useful positive evidence, but it does **not** pass the 2.0 Verified Skill Lift gate. The three-pair confidence interval is 0–100 percentage points, Reliability@3 is 0%, and only one OmD trial passed the proof-efficiency contract. The failed third OmD run stopped at a Chrome remote-debugging permission request without editing the product; it remains a valid harness failure because the benchmark must not rely on unplanned human intervention.

## Efficiency

OmD averaged 289.7 seconds versus Raw's 327.1 seconds (0.886×), but used 592.0k tokens on average versus 486.1k (1.218×). Total observed provider tokens were 3,234,125. Latency and tokens are descriptive for this one task and one model only.

## Integrity

The first 1.9.688 execution attempt failed before provider entry because the local sandbox blocked the Codex in-process app-server. That root was frozen with provider/model exposure zero. The 1.9.689 replacement was freshly prepared, passed 6/6 normalization, pinned publishable source commit `b109d413…` and skill hash `cd1e35c1…`, and then ran serially with no retry and the preregistered 120-second pacing.

The next meaningful patch should target the observed failure mode: `omd:apply` must treat a browser permission gate as an unavailable verifier and continue with its deterministic closure rather than asking for human intervention or abandoning the product edit.
