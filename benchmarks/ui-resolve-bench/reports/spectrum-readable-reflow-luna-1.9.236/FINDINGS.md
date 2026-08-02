# Spectrum readable-reflow replacement — findings

Status: **NOT PROMOTED**.

The clean replacement completed all six provider cells. All six products and
objective scores are usable, but only five cells satisfy the preregistered
proof-execution and installed host-policy gates. The final readable cell made
an additional native-browser attempt after the allowed proof attempt was
already consumed; it therefore fails the promotion report even though its
product was scored.

| Trial | Close baseline | Readable candidate | Candidate delta |
|---|---:|---:|---:|
| 1 | 85 · resolved | 83 · unresolved | -2 |
| 2 | 79 · unresolved | 85 · resolved | +6 |
| 3 | 85 · resolved | 81 · unresolved | -4 |

The candidate finishes at **1/0/2 W/T/L**. Both arms have the same 83-point
mean, while the close baseline has the higher median (85 versus 83) and higher
UI-Resolved rate (2/3 versus 1/3). The preregistered candidate gates fail:

- UI-Resolved 3/3: **fail** (1/3);
- serious/critical contrast 0/3: **fail** (2/3);
- paired objective losses 0: **fail** (2 losses);
- proof and host policy green 3/3: **fail** (2/3).

The intended quality mechanisms did not transfer reliably. Each arm cleared
the 200% reflow geometry in 2/3 trials. Each arm also cleared serious/critical
contrast in 2/3 trials. The readable candidate therefore did not improve
either target over the close baseline. Its final failure retained the exact
4.44:1 muted-text pair that the candidate instruction explicitly says to
replace.

The candidate also cost more without a quality gain. Mean wall time was
346,061 ms versus 224,147 ms (**+54.4%**), and mean provider-reported tokens
were 730,600 versus 437,618 (**+66.9%**). The large work packet and repeated
closure prose increased the instruction surface but did not make the two
release blockers more reliable.

Conclusion: keep the existing close-latch source as the comparison baseline
and do not promote the readable-reflow candidate. The next bounded design
delta should reduce, not expand, the skill's execution surface: put a compact
release-blocker pass before optional process machinery, require exact
foreground closure and four-condition reflow in that pass, and stop after one
static plus one browser attempt. It must be tested on a fresh unseen task;
these spectrum cells must not be reused for promotion.
