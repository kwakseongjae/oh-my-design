# Aircraft load-plan runtime-artifact transfer — findings

Status: **frozen after one infrastructure-invalid control cell**

Six independent clean Git workspaces were prepared from detached, clean, publishable source commits. Task, runtime prompt, product, DESIGN.md, activation, Codex/Luna/high runtime, timeout, and the installed runtime artifact proof policy are byte-identical. The sole arm delta is the exact installed skill tree: control `2d577464…`, candidate `bb3ac833…`.

`luna-load-r1-control` completed at 640,087 ms and reported 2,932,219 total tokens, but it is infrastructure-invalid and its 77/85 evaluator score is not quality evidence. The installed policy recorded 12 denials and no browser attempt, while `index.html` still changed through an untracked `mcp__node_repl__js` filesystem write. Relative `.omd/reflow-closure.json` edits were also misclassified as product edits, and the previous denial remained sticky on later neutral actions. The browser mechanism then failed with `Unknown command: new_session`.

The matrix is frozen. Candidate cells and remaining control cells must not run. The invalid control spend is retained in Tokens-to-Target attempt 4, but no paired, quality, or promotion claim may use it. A fresh replacement requires the 1.9.313 hook-bypass repair, a new exact pin, new preregistration, and new roots.
