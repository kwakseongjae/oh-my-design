#!/usr/bin/env python3
"""Collection round 4: build one writer folder that reuses a finished max-effort run's evidence and adds the
compiled measurements (web/scripts/compile-evidence.mjs).

    make-folder.py <wave> <engine: codex|claude> <id> <src-wave> <src-run-prefix> <locale> <url> <name…>

The folder gets: a fresh full order (same template every arm has had), the source run's inputs (fetched pages,
ledgers, controls; not its drafts, report, outputs or helper scripts), its capture folders under capture/, and
compiled/ (components.yaml, proof.md, census.md, candidates.md, measure.json, values.json). A note at the top of the
order says what is already done and that the compiled parts are pasted, not re-derived.

R4_CANDIDATES=0 builds the folder as arm m had it (2026-11-11): no candidates.md, and the writer chooses colour
roles, typography and radii from census.md alone.
"""
import datetime, glob, json, os, pathlib, shutil, subprocess, sys, urllib.parse

wave, engine, cid, src_wave, src_prefix, locale, url = sys.argv[1:8]
name = " ".join(sys.argv[8:])
REPO = pathlib.Path(__file__).resolve().parents[2]
MAIN = pathlib.Path(subprocess.run(["git", "-C", str(REPO), "rev-parse", "--path-format=absolute", "--git-common-dir"],
                                   check=True, capture_output=True, text=True).stdout.strip()).parent
HOME_W = pathlib.Path.home() / ".omd-workers"
EV = MAIN / "artifacts/reference-evidence/visual" / cid          # local-only evidence lives in the main checkout
SRC, DST = HOME_W / src_wave / cid, HOME_W / wave / cid

run = sorted(glob.glob(str(HOME_W / "runs" / f"{src_prefix}-{cid}-2*")))[-1]
st = datetime.datetime.strptime(json.load(open(f"{run}/meta.json"))["started_at"], "%Y-%m-%dT%H:%M:%SZ")
en = datetime.datetime.utcfromtimestamp(os.path.getmtime(f"{run}/exit-code"))
minute = datetime.timedelta(minutes=1)
folders = [f for f in sorted(EV.glob("2026*"))
           if st - minute <= datetime.datetime.strptime(f.name, "%Y%m%d-%H%M%S") <= en + minute]
if not any((f / "survey.json").exists() for f in folders):
    sys.exit(f"{cid}: no survey folder between {st} and {en}")

shutil.rmtree(DST, ignore_errors=True)
origin = "{0.scheme}://{0.netloc}".format(urllib.parse.urlparse(url))
subprocess.run(["python3", str(MAIN / "scripts/workers/make-reference-order.py"), wave, cid, name, url, locale, origin],
               check=True, capture_output=True)
SKIP = {"order.md", "PROBE_BRIEF.md", "HARD_RULES.md", "out", "front.yaml", "body.md", "verification.md", "report.md"}
for e in SRC.iterdir():
    if e.name in SKIP or e.name.startswith("example-") or e.suffix in (".py", ".mjs", ".sh", ".js") \
            or any(t in e.name for t in ("audit", "summary", "notes", "write-")):
        continue
    (shutil.copytree if e.is_dir() else shutil.copy2)(e, DST / ("capture-worker" if e.name == "capture" else e.name))
(DST / "capture").mkdir()
(DST / "out").mkdir()
for f in folders:
    shutil.copytree(f, DST / "capture" / f.name)
subprocess.run(["node", str(REPO / "web/scripts/compile-evidence.mjs"), *[str(DST / "capture" / f.name) for f in folders],
                "--out", str(DST / "compiled"), "--id", cid], check=True, capture_output=True)
CANDIDATES = os.environ.get("R4_CANDIDATES", "1") != "0"
if not CANDIDATES:
    for f in ("candidates.md", "candidates.json"):
        (DST / "compiled" / f).unlink()

listing = "".join(f"\n  - `capture/{f.name}/` ({', '.join(sorted(p.name for p in f.glob('*.json')))})" for f in folders)
assemble = ("Run the Verify command as written." if engine == "codex" else
            "Only plain `node …` commands are allowed in your sandbox: no `$(…)`, pipes, `cd … &&` or `sh` scripts. Run the "
            "Verify command from this folder with the contents of `sources.json` pasted inline as one single-quoted "
            "argument in place of `\"$(cat sources.json)\"`. `out/` already exists.")
# The wording for the compiled parts is the one a live order uses (docs/workers/COMPILED_PARTS.md).
parts = (REPO / "docs/workers/COMPILED_PARTS.md").read_text(encoding="utf-8").rstrip()
if not CANDIDATES:
    parts = parts[:parts.index("- `compiled/candidates.md`")] + \
        "  Choose colour roles, typography and radii from it; open `survey.json` only for a value the digest does not carry."
note = f"""# Experiment note — read this first (it overrides the steps below where they conflict)

Steps 1–3, 5 and 6 of this order (curl controls, first-party sources, survey, control choice, states) were already
done by another worker. You have **no browser and no probe_page tool, and you fetch nothing**. Work only from the
files in this folder:

- the capture, as the capture tool wrote it:{listing}
- first-party pages as fetched, with the source ledger `sources.json` (and `source-evidence/` or `raw/` where present)
- the controls that were measured: `controls.json` and each `cfg.json` under `capture/`

**The measured parts are already compiled** by a script from that capture, in `compiled/`:

{parts}

What is left is the part a script cannot do: step 4 (separate first-party from framework tokens), the colour roles,
typography and radius tokens, the narrative (§1 and §3 above all), the `use` lines, country and category, and the
sources. Then steps 7–8: write the outputs and run the assembler until it passes. Every value comes from these
files; where a step asks for something they do not contain, write that it was not available in the provided
evidence. `sources.json` is already written: remove an entry you do not use, and add none you cannot open here.

{assemble}

---

"""
order = DST / "order.md"
body = order.read_text(encoding="utf-8")
if "## Verify" not in body:
    sys.exit(f"{cid}: generated order has no Verify section")
order.write_text(note + body, encoding="utf-8")
print(f"{DST} capture={[f.name for f in folders]}")
