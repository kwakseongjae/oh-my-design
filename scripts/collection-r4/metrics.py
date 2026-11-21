#!/usr/bin/env python3
"""Collection round 4: mechanical metrics for every finished arm run (rv-x9<arm>-*) next to the max-effort run
whose evidence it reused (sites.txt).

    metrics.py [--quality <scratch-worktree>]

Per run: wall minutes, tokens, whether the assembler produced a DESIGN.md, the length of the Overview, and with
--quality the catalog's own verdict (status, components, stated components, claims) from a scratch worktree of
origin/main (outputs are copied in, the quality files rebuilt, then the worktree is restored).
For the baseline run the comparable time is its writing stage: exit time minus its last capture.
"""
import datetime, glob, json, os, pathlib, re, shutil, subprocess, sys

HERE = pathlib.Path(__file__).resolve().parent
HOME_W = pathlib.Path.home() / ".omd-workers"
MAIN = pathlib.Path(subprocess.run(["git", "-C", str(HERE), "rev-parse", "--path-format=absolute", "--git-common-dir"],
                                   check=True, capture_output=True, text=True).stdout.strip()).parent
EV = MAIN / "artifacts/reference-evidence/visual"
SITES = [l.split()[:3] for l in (HERE / "sites.txt").read_text().splitlines() if l and not l.startswith("#")]


def usage_of(run):
    usage = None
    for line in open(f"{run}/worker.log", errors="ignore"):
        if '"turn.completed"' in line:
            try: usage = json.loads(line)["usage"]
            except Exception: pass
        elif '"type":"result"' in line:
            try:
                mu = next(iter((json.loads(line).get("model_usage_since_last_result") or json.loads(line).get("modelUsage") or {}).values()), None)
                if mu:
                    inp = mu.get("inputTokens", 0) + mu.get("cacheReadInputTokens", 0) + mu.get("cacheCreationInputTokens", 0)
                    usage = {"input_tokens": inp, "cached_input_tokens": mu.get("cacheReadInputTokens", 0), "output_tokens": mu.get("outputTokens", 0)}
            except Exception: pass
    return usage


def row(run, rid, arm, wave, baseline):
    if not os.path.exists(f"{run}/exit-code"):
        return None
    st = datetime.datetime.strptime(json.load(open(f"{run}/meta.json"))["started_at"], "%Y-%m-%dT%H:%M:%SZ")
    en = datetime.datetime.utcfromtimestamp(os.path.getmtime(f"{run}/exit-code"))
    start = st
    if baseline:  # writing stage only: from the last capture folder to exit
        stamps = [datetime.datetime.strptime(f.name, "%Y%m%d-%H%M%S") for f in (EV / rid).glob("2026*")]
        stamps = [t for t in stamps if st <= t <= en]
        start = max(stamps) if stamps else st
    u = usage_of(run)
    wd = HOME_W / wave / rid
    md = (wd / "out/DESIGN.md").read_text(encoding="utf-8") if (wd / "out/DESIGN.md").exists() else ""
    ov = re.search(r"^## Overview\n(.*?)(?=^## )", md, re.S | re.M)
    return {"id": rid, "arm": arm, "exit": open(f"{run}/exit-code").read().strip(),
            "write_min": round((en - start).total_seconds() / 60, 1), "total_min": round((en - st).total_seconds() / 60, 1),
            "uncached_k": round((u["input_tokens"] - u["cached_input_tokens"]) / 1e3) if u else None,
            "out_k": round(u["output_tokens"] / 1e3, 1) if u else None,
            "assembled": bool(md), "overview_chars": len(ov.group(1).strip()) if ov else 0, "wd": str(wd)}


def quality(rows, wt):
    web = f"{wt}/web"
    for r in rows:
        if not r["assembled"]:
            continue
        dst = f"{web}/references/{r['id']}"
        existed = os.path.exists(dst)
        os.makedirs(dst, exist_ok=True)
        for src, name in (("out/DESIGN.md", "DESIGN.md"), ("out/reference.json", "reference.json"), ("verification.md", ".verification.md")):
            if os.path.exists(f"{r['wd']}/{src}"):
                shutil.copy(f"{r['wd']}/{src}", f"{dst}/{name}")
        subprocess.run(["node", "scripts/build-registry.mjs"], cwd=web, capture_output=True)
        subprocess.run(["node", "scripts/build-reference-quality.mjs"], cwd=web, capture_output=True)
        q = subprocess.run(["npx", "tsx", "-e", f"import {{ REFERENCE_QUALITY }} from './src/data/reference-quality.generated'; const e = REFERENCE_QUALITY.find(x => x.id === '{r['id']}')!; console.log(JSON.stringify({{status: e.status, reasons: e.reasonCodes, advisory: e.advisoryCodes, claims: e.claimCount, components: e.componentCount, stated: e.statedComponentCount}}))"], cwd=web, capture_output=True, text=True)
        try: r.update(json.loads(q.stdout.strip().splitlines()[-1]))
        except Exception: r["status"] = "error: " + (q.stderr or q.stdout)[-160:]
        if not existed:
            shutil.rmtree(dst)
        subprocess.run(["git", "checkout", "-q", "--", "."], cwd=wt)
        subprocess.run(["git", "clean", "-fdq", "web/references"], cwd=wt)


rows = []
for rid, src_wave, src_prefix in SITES:
    base = sorted(glob.glob(str(HOME_W / "runs" / f"{src_prefix}-{rid}-2*")))
    if base:
        rows.append(row(base[-1], rid, "A-max", src_wave, True))
    for run in sorted(glob.glob(str(HOME_W / "runs" / f"rv-x9?-{rid}-2*"))):
        arm = re.search(r"rv-x9(.)-", run).group(1)
        rows.append(row(run, rid, arm, f"exp9{arm}", False))
rows = [r for r in rows if r]
if "--quality" in sys.argv:
    quality(rows, sys.argv[sys.argv.index("--quality") + 1])
cols = ["id", "arm", "exit", "write_min", "total_min", "uncached_k", "out_k", "overview_chars", "status", "components", "stated", "claims", "reasons", "advisory"]
print("\t".join(cols))
for r in rows:
    print("\t".join(str(r.get(c, "")) for c in cols))
arms = sorted({r["arm"] for r in rows})
med = lambda xs: sorted(xs)[len(xs) // 2] if xs else None
print("\narm\truns\tverified\twrite_min(median)\tout_k(median)\tcomponents\tstated\tclaims\toverview(median)")
for a in arms:
    rs = [r for r in rows if r["arm"] == a]
    print("\t".join(str(x) for x in (a, len(rs), sum(r.get("status") == "verified_v2" for r in rs), med([r["write_min"] for r in rs]),
                                        med([r["out_k"] for r in rs if r["out_k"] is not None]),
                                        sum(r.get("components") or 0 for r in rs), sum(r.get("stated") or 0 for r in rs),
                                        sum(r.get("claims") or 0 for r in rs), med([r["overview_chars"] for r in rs]))))
json.dump(rows, open(HERE / "metrics.json", "w"), indent=1, ensure_ascii=False)
