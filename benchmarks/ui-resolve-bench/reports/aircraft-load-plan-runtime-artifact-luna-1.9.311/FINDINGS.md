# Aircraft load-plan runtime-artifact transfer — findings

Status: **fresh 6/6 preparation complete; provider not started**

Six independent clean Git workspaces were prepared from detached, clean, publishable source commits. Task, runtime prompt, product, DESIGN.md, activation, Codex/Luna/high runtime, timeout, and the installed runtime artifact proof policy are byte-identical. The sole arm delta is the exact installed skill tree: control `2d577464…`, candidate `bb3ac833…`. Provider calls: **0**.

The only allowed next cell is `luna-load-r1-control`, executed with `--max-new-cells 1`. No same-root retry is allowed.
