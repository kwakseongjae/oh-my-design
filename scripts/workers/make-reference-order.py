#!/usr/bin/env python3
"""Build one reference worker's folder and work order (docs/WORKER_PLAN_2026-10-29.md, EU wave 5).

  scripts/workers/make-reference-order.py <wave> <id> <name> <url> <locale> <origin> [prior-note]

Creates $OMD_WORKER_HOME/<wave>/<id>/ (default ~/.omd-workers) with order.md filled from
docs/workers/REFERENCE_ORDER_TEMPLATE.md, plus the files the order tells the worker to read:
PROBE_BRIEF.md, HARD_RULES.md (the AGENTS.md hard rules) and three format exemplars taken from git
(n8n and zara as committed before the v3 conversion; their legacy shape is what the assembler reads).
Prints the order path; spawn with scripts/workers/spawn.sh --workdir <folder> --order <order> --mcp capture.
"""
import datetime, os, pathlib, subprocess, sys

REPO = pathlib.Path(__file__).resolve().parents[2]
EXEMPLARS = {
    "example-n8n-legacy-DESIGN.md": "2bc41cad:web/references/n8n/DESIGN.md",
    "example-zara-legacy-DESIGN.md": "f97eb7cd:web/references/zara/DESIGN.md",
    "example-zara-verification.md": "f97eb7cd:web/references/zara/.verification.md",
}

if len(sys.argv) < 7:
    sys.exit(__doc__)
wave, cid, name, url, locale, origin = sys.argv[1:7]
prior = sys.argv[7] if len(sys.argv) > 7 else ""
d = pathlib.Path(os.environ.get("OMD_WORKER_HOME", pathlib.Path.home() / ".omd-workers")) / wave / cid
d.mkdir(parents=True, exist_ok=True)

for fname, spec in EXEMPLARS.items():
    (d / fname).write_bytes(subprocess.run(["git", "-C", str(REPO), "show", spec], check=True, capture_output=True).stdout)
(d / "PROBE_BRIEF.md").write_text((REPO / "docs/PROBE_BRIEF.md").read_text())
agents = (REPO / "AGENTS.md").read_text()
(d / "HARD_RULES.md").write_text(agents[agents.index("## Hard rules"):agents.index("## Pre-existing OmD shims")])

t = (REPO / "docs/workers/REFERENCE_ORDER_TEMPLATE.md").read_text()
values = dict(ID=cid, NAME=name, URL=url, LOCALE=locale, ORIGIN=origin, WORKDIR=str(d),
              TODAY=datetime.date.today().isoformat(), PRIOR=prior)
for k, v in values.items():
    t = t.replace("{{%s}}" % k, v)
if "{{" in t:
    sys.exit(f"unfilled placeholder: {t[t.index('{{'):][:40]}")
(d / "order.md").write_text(t)
print(d / "order.md")
