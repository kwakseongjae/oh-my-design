#!/usr/bin/env python3
"""Build a final-review worker's folder and order (docs/workers/FINAL_REVIEW_ORDER_TEMPLATE.md).

  scripts/workers/make-review-order.py <name> <catalog-worktree> <remeasure-dir|-> <id>... [--note "<text>"]

Creates ~/.omd-workers/final-review/<name>/order.md for the references <id>… as they stand in <catalog-worktree>
(the batch branch they were landed in). <remeasure-dir> is the --out of scripts/t1/remeasure.mjs for this batch
(`-` when there is none). --note adds one paragraph about what the orchestrator changed after the worker.
Three or four references per reviewer; spawn with scripts/workers/spawn.sh --workdir <folder> --order <folder>/order.md.
"""
import os, pathlib, subprocess, sys

args = sys.argv[1:]
note = ""
if "--note" in args:
    i = args.index("--note"); note = " " + args[i + 1]; del args[i:i + 2]
if len(args) < 4:
    sys.exit(__doc__)
name, catalog, remeasure, ids = args[0], pathlib.Path(args[1]).resolve(), args[2], args[3:]
REPO = pathlib.Path(__file__).resolve().parents[2]
MAIN = pathlib.Path(subprocess.run(["git", "-C", str(REPO), "rev-parse", "--path-format=absolute", "--git-common-dir"],
                                   check=True, capture_output=True, text=True).stdout.strip()).parent   # local-only evidence lives here
for i in ids:
    if not (catalog / "web/references" / i / "DESIGN.md").exists():
        sys.exit(f"{i}: not landed in {catalog}")
d = pathlib.Path(os.environ.get("OMD_WORKER_HOME", pathlib.Path.home() / ".omd-workers")) / "final-review" / name
d.mkdir(parents=True, exist_ok=True)
rem = ("There is no separate re-measurement for this batch." if remeasure == "-" else
       f"`{pathlib.Path(remeasure).expanduser().resolve()}/<id>/`: the orchestrator's re-measurement of the same controls, headless and with no model "
       "(`result.json` lists every field that differs from the worker's capture; `run-1/call-*/states.json` is the raw output). "
       "Where it differs from the worker's run on a value the reference states, that is a finding.")
t = (REPO / "docs/workers/FINAL_REVIEW_ORDER_TEMPLATE.md").read_text()
for k, v in dict(IDS=", ".join(ids), WORKDIR=str(d), REPO=str(MAIN), CATALOG=str(catalog), REMEASURE=rem, NOTE=note).items():
    t = t.replace("{{%s}}" % k, v)
if "{{" in t:
    sys.exit(f"unfilled placeholder: {t[t.index('{{'):][:40]}")
(d / "order.md").write_text(t)
print(d / "order.md")
