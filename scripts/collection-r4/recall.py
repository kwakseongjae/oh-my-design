#!/usr/bin/env python3
"""Collection round 4: how many of the tokens a max-effort writer named are in the compiled candidate list
(web/scripts/compile-evidence.mjs → candidates.json), and how many the medium writer named without it.

    recall.py <compiled-root> [sites.txt]      <compiled-root>/<id>/candidates.json, one folder per site

The max writer's tokens are read from ~/.omd-workers/<source-wave>/<id>/front.yaml, the medium writer's from
~/.omd-workers/exp9m/<id>/front.yaml. No model, no browser: the candidate list is recompiled from the same capture.
"""
import json, os, pathlib, re, sys
import yaml

W = pathlib.Path.home() / ".omd-workers"
root = pathlib.Path(sys.argv[1])
sites_file = sys.argv[2] if len(sys.argv) > 2 else pathlib.Path(__file__).with_name("sites.txt")
sites = [l.split()[:2] for l in open(sites_file) if l.strip() and not l.startswith("#")]

def tokens(path):
    t = (yaml.safe_load(open(path)) or {}).get("tokens", {})
    colours = {k: str(v).lower() for k, v in (t.get("colors") or {}).items() if re.fullmatch(r"#[0-9a-fA-F]{6}", str(v))}
    sizes = {k: (float(v["size"]), int(v["weight"])) for k, v in (t.get("typography") or {}).items()
             if isinstance(v, dict) and v.get("size") and v.get("weight")}
    radii = {k: float(v) for k, v in (t.get("rounded") or {}).items() if isinstance(v, (int, float))}
    return colours, sizes, radii

def px(v):
    m = re.fullmatch(r"(\d+(?:\.\d+)?)px", v)
    return float(m.group(1)) if m else None

total = {k: [0, 0, 0] for k in ("colour", "type", "radius")}   # max named, of those in candidates, of those medium named
missing = []
print(f"{'site':16} {'colour':>14} {'type':>12} {'radius':>12}   (in candidates / max named · medium named)")
for sid, wave in sites:
    cand = json.load(open(root / sid / "candidates.json"))
    have = {
        "colour": {c["value"] for c in cand["colours"]} | {c["value"] for c in cand["declaredOnly"]},
        "type": {(t["size"], t["weight"]) for t in cand["type"]},
        "radius": {px(r["value"]) for r in cand["radii"]},
    }
    mx = dict(zip(("colour", "type", "radius"), tokens(W / wave / sid / "front.yaml")))
    md = dict(zip(("colour", "type", "radius"), tokens(W / "exp9m" / sid / "front.yaml")))
    cells = []
    for kind in ("colour", "type", "radius"):
        named, medium = set(mx[kind].values()), set(md[kind].values())
        hit = named & have[kind]
        total[kind][0] += len(named); total[kind][1] += len(hit); total[kind][2] += len(named & medium)
        cells.append(f"{len(hit)}/{len(named)} · {len(named & medium)}")
        for name, v in sorted(mx[kind].items()):
            if v not in have[kind]: missing.append(f"  {sid} {kind} {name} = {v}")
    print(f"{sid:16} {cells[0]:>14} {cells[1]:>12} {cells[2]:>12}")
print()
for kind, (named, hit, medium) in total.items():
    print(f"{kind:7} max named {named:3} · in candidates {hit:3} ({hit / named:.0%}) · medium named {medium:3} ({medium / named:.0%})")
print("not in the candidate list:" if missing else "every max-named token is in the candidate list")
print("\n".join(missing))
