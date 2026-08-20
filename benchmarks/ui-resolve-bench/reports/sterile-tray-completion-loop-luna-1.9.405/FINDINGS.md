# Sterile-tray completion-loop result — 1.9.408

The r1 control timed out at 79/85 after 900.016 seconds. It improved contrast and removed page overflow, but spent fourteen denied decisions reconstructing the reflow inventory and never reached a browser attempt or delivery-ready state.

The repaired candidate reached the same 79/85 in 421.239 seconds and 834,250 provider tokens. It locked the inventory without the control's repeated schema failures, executed one browser proof, and reached delivery-ready with a passing host-policy gate. That is a real proof-closure and efficiency improvement, but not an objective quality win.

The remaining failure is now narrow and reproducible. The compound target `TRAY-VASC-2417 + IND-CHEM-77241` stays as one text node and wraps to two character-range lines at 390px, 320px, and the 200% reflow surrogate. The candidate's custom verifier used element rectangles, so it incorrectly reported the target as one line. The production workflow must preserve the protected target wrapper while separating its two semantic atomic children, or use an explicitly named carrier-local comparison treatment, and it must measure per-character line tops exactly like the benchmark oracle.

Candidate Reliability@3 is 0/1. Even two perfect remaining trials would reach only 2/3, below the preregistered 3/3 gate, so the matrix root is frozen and four provider calls are skipped.
