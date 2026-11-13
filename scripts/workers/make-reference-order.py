#!/usr/bin/env python3
"""Build one reference worker's folder and work order (docs/WORKER_PLAN_2026-10-29.md, EU wave 5).

  scripts/workers/make-reference-order.py <wave> <id> <name> <url> <locale> <origin> [prior-note]

Creates $OMD_WORKER_HOME/<wave>/<id>/ (default ~/.omd-workers) with order.md filled from
docs/workers/REFERENCE_ORDER_TEMPLATE.md, plus the files the order tells the worker to read:
PROBE_BRIEF.md, HARD_RULES.md (the AGENTS.md hard rules) and three format exemplars taken from git
(n8n and zara as committed before the v3 conversion; their legacy shape is what the assembler reads).
Prints the order path; spawn with scripts/workers/spawn.sh --workdir <folder> --order <order> --mcp capture.

OMD_ORDER_PUBLISHED=<file in the folder> (with OMD_ORDER_COMPILED=1) makes that step pin the published token names.
OMD_ORDER_COMPILED=1 adds step 6b: the worker runs web/scripts/compile-evidence.mjs on its own capture and takes the
measured parts (components, proof table, token candidates) from compiled/ instead of re-reading states.json. That is
the round 4 method (docs/research/2026-11-09-collection-method-test.md): the default order is unchanged.
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
if os.environ.get("OMD_ORDER_COMPILED") == "1":
    parts = "\n".join("   " + l for l in (REPO / "docs/workers/COMPILED_PARTS.md").read_text().rstrip().splitlines())
    # A reference that is already published keeps its token names for unchanged values: the compiler reads them
    # from the published file in the worker's folder (make-reverify-order.py puts it there).
    published = os.environ.get("OMD_ORDER_PUBLISHED", "")
    pin = f" --published {published}" if published else ""
    step = f"""6b. **Compile the measurements.** From `{{{{WORKDIR}}}}`, run the compiler on the survey folder and every states folder `probe_page` printed:
   ```
   node {{{{REPO}}}}/web/scripts/compile-evidence.mjs <survey-folder> <states-folder>… --out compiled --id {{{{ID}}}}{pin}
   ```
   Quote the line it prints. The measured parts of your outputs come from `compiled/`, not from your own reading of `states.json`:
{parts}
   If the compiler fails, quote its error in your final message and write the outputs from `survey.json` and `states.json` directly.
"""
    marker = "7. **Write the four outputs** (below)."
    if marker not in t:
        sys.exit("order template has no step 7 to put the compile step before")
    t = t.replace(marker, step + marker)
values = dict(ID=cid, NAME=name, URL=url, LOCALE=locale, ORIGIN=origin, WORKDIR=str(d), REPO=str(REPO),
              TODAY=datetime.date.today().isoformat(), PRIOR=prior)
for k, v in values.items():
    t = t.replace("{{%s}}" % k, v)
if "{{" in t:
    sys.exit(f"unfilled placeholder: {t[t.index('{{'):][:40]}")
(d / "order.md").write_text(t)
print(d / "order.md")
