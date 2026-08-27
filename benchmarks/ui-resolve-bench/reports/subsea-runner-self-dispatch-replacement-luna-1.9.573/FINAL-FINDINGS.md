# Subsea self-dispatch replacement — final findings

Status: **frozen; promotion unreachable**.

The valid r1 control and candidate both scored 81/85 and failed responsive acceptance. The candidate was descriptively faster and used fewer provider tokens, but neither arm passed proof acceptance and the candidate did not exercise the plain-Python self-dispatch path. Those ratios therefore cannot support a causal efficiency or quality claim.

The candidate exposed a narrower engine defect. Its target evidence needed 316.3672 CSS px, and feasibility compared that value with the 320px document. The evidence actually lived inside nested shell and decision padding, so the bound carrier's content box was materially narrower than the document. `stack` was accepted even though the row could not fit, leaving the target multi-line at 320px and actual 200%.

Because the preregistered promotion requires 3/3 candidate UI, proof, and self-dispatch successes, the first candidate failure makes every gate's maximum 2/3. The four unstarted cells remain untouched and are not spent.

Next: measure the bound carrier's actual inner content width before the product edit, use that carrier-local budget for row strategy feasibility, replay the failed artifact without a provider, and only then pin a fresh replacement source.
