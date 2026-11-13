#!/usr/bin/env python3
"""Collection round 4: how many of the tokens a max-effort writer named are in the compiled candidate list
(web/scripts/compile-evidence.mjs → candidates.json), and how an arm's writer did against both.

    recall.py <compiled-root> [arm-wave] [--list]
        <compiled-root>/<id>/candidates.json or <compiled-root>/<id>/compiled/candidates.json (an arm's own folders)
        arm-wave: the folder under ~/.omd-workers to score (default exp9m); --list prints what only the arm named
    e.g. after arm c:  recall.py ~/.omd-workers/exp9c exp9c --list

The max writer's tokens are read from ~/.omd-workers/<source-wave>/<id>/front.yaml, the arm's from
~/.omd-workers/<arm-wave>/<id>/front.yaml. Per kind it prints how many max-named tokens are in the candidate list,
how many of them the arm named, and how many tokens the arm named that max did not (with how many of those are in
the candidate list: an arm told to go through the list may name one-off values max left out). A site the arm has
not written yet is skipped. No model, no browser.

Colours are also split by where the candidate list has them: seen on the page, or declared only (a custom property
holds the value and nothing surveyed was painted with it). Among colours only the arm named, a **one-off** is a
colour on at most two elements with no measured control and no custom property (defined 2026-11-12, before any
arm that was given the list had run): naming those inflates the count without adding a role.
"""
import json, os, pathlib, re, sys
import yaml

W = pathlib.Path.home() / ".omd-workers"
args = [a for a in sys.argv[1:] if not a.startswith("--")]
root = pathlib.Path(args[0]).expanduser()
arm = args[1] if len(args) > 1 else "exp9m"
sites = [l.split()[:2] for l in open(pathlib.Path(__file__).with_name("sites.txt")) if l.strip() and not l.startswith("#")]

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

split = {"seen": [0, 0], "declared": [0, 0]}   # max named, arm named of those
arm_only = {"seen": 0, "declared": 0, "one-off": 0, "not in list": 0}
total = {k: [0, 0, 0, 0, 0] for k in ("colour", "type", "radius")}   # max named, in candidates, arm named, arm-only, arm-only in candidates
missing, extra = [], []
print(f"{'site':16} {'colour':>18} {'type':>16} {'radius':>16}   (in candidates / max named · {arm} named · {arm} only)")
for sid, wave in sites:
    if not (W / arm / sid / "front.yaml").exists():
        print(f"{sid:16} no front.yaml in {arm} yet"); continue
    folder = root / sid
    cand = json.load(open(folder / "candidates.json" if (folder / "candidates.json").exists() else folder / "compiled" / "candidates.json"))
    have = {
        "colour": {c["value"] for c in cand["colours"]} | {c["value"] for c in cand["declaredOnly"]},
        "type": {(t["size"], t["weight"]) for t in cand["type"]},
        "radius": {px(r["value"]) for r in cand["radii"]},
    }
    mx = dict(zip(("colour", "type", "radius"), tokens(W / wave / sid / "front.yaml")))
    md = dict(zip(("colour", "type", "radius"), tokens(W / arm / sid / "front.yaml")))
    seen = {c["value"]: c for c in cand["colours"]}; declared = {c["value"] for c in cand["declaredOnly"]}
    mxc, mdc = set(mx["colour"].values()), set(md["colour"].values())
    for bucket, values in (("seen", set(seen)), ("declared", declared)):
        split[bucket][0] += len(mxc & values); split[bucket][1] += len(mxc & mdc & values)
    for v in mdc - mxc:
        c = seen.get(v)
        if c and sum(c["painted"].values()) + c["interactive"] <= 2 and not c["controls"] and not c["declared"]: arm_only["one-off"] += 1
        elif c: arm_only["seen"] += 1
        elif v in declared: arm_only["declared"] += 1
        else: arm_only["not in list"] += 1
    cells = []
    for kind in ("colour", "type", "radius"):
        named, medium = set(mx[kind].values()), set(md[kind].values())
        hit = named & have[kind]
        only = medium - named
        for i, n in enumerate((len(named), len(hit), len(named & medium), len(only), len(only & have[kind]))): total[kind][i] += n
        cells.append(f"{len(hit)}/{len(named)} · {len(named & medium)} · {len(only)}")
        for name, v in sorted(md[kind].items()):
            if v in only: extra.append(f"  {sid} {kind} {name} = {v}{'' if v in have[kind] else '  (not in the candidate list)'}")
        for name, v in sorted(mx[kind].items()):
            if v not in have[kind]: missing.append(f"  {sid} {kind} {name} = {v}")
    print(f"{sid:16} {cells[0]:>18} {cells[1]:>16} {cells[2]:>16}")
print()
for kind, (named, hit, medium, only, only_in) in total.items():
    if named:
        print(f"{kind:7} max named {named:3} · in candidates {hit:3} ({hit / named:.0%}) · {arm} named {medium:3} ({medium / named:.0%})"
              f" · {arm} only {only:3} ({only_in} in candidates)")
for bucket, (named, got) in split.items():
    if named: print(f"colour, {bucket:8} max named {named:3} · {arm} named {got:3} ({got / named:.0%})")
print(f"colour, only {arm} named: " + " · ".join(f"{k} {v}" for k, v in arm_only.items()))
print("not in the candidate list:" if missing else "every max-named token is in the candidate list")
print("\n".join(missing))
if "--list" in sys.argv:
    print(f"named by {arm} and not by max:"); print("\n".join(extra))
