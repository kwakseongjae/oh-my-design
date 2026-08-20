# Host-policy validity classification — 1.9.340

The runner now separates three outcomes instead of treating every host-policy rejection as broken infrastructure.

- A passing host gate is admitted normally.
- A ready, exact, analyzable host that blocks invalid system output produces a valid unresolved system failure. Its score, time, and provider usage remain in reliability and efficiency accounting.
- A missing, invalid, non-analyzable, unintercepted, or unenforced host remains infrastructure-invalid and freezes the matrix.

This closes the methodological defect exposed by orbital control R1. A model can no longer escape a reliability loss merely because the host correctly stopped its invalid artifact, while a genuinely broken benchmark host still cannot contaminate quality claims.

The focused contract suite is 62/62. The wider benchmark unit suite is 312 passing with only the two pre-existing external vendor Git-root fixtures unavailable. Type-check, build, and diff checks pass. No provider was called and no quality claim is promoted by this patch.
