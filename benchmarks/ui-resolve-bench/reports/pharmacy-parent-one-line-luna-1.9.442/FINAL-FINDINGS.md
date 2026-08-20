# Final findings — pharmacy parent-line transfer 1.9.445

The experiment is frozen after the first pair. The control is a valid 81/85 system failure and the candidate is a valid 83/85 system failure. Because promotion required candidate `UI-Resolved` 3/3, the first candidate failure caps reliability at 2/3; the remaining four provider calls cannot change the decision and are skipped.

The candidate transferred several intended improvements. It passed the full accessibility gate, used one browser mechanism with no recovery, performed no verification after browser readiness, finished 23.3% faster, and used 59.1% fewer observed provider tokens than control. Both efficiency ratios are comfortably inside the 1.1 limits.

Two defects remain. Its browser closure modeled the 200% condition as a 640px viewport without applying 2× page zoom, so it falsely closed an evaluator condition where the page overflows and `Pharmacist review open` wraps onto two character-range lines. It also performed two separate static closure commands before the browser command, leaving one duplicate static closure despite eliminating post-browser reads.

The next patch is provider-free: encode viewport width and zoom as separate browser-proof inputs, require the actual zoom to be applied and observed, and collapse all pre-browser static assertions into exactly one closure command per product revision. Tokens-to-Target is now at least 40,974,913 plus six usage-unavailable cells. Quality promotion remains false.
