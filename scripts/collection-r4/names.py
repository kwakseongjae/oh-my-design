#!/usr/bin/env python3
"""Collection round 4: do two writings of the same site give a value the same token name?

    names.py <wave-a> <wave-b|published> [site-id…]

<wave> is a folder under ~/.omd-workers (exp9c, exp9d …); `published` is the reference as it stands in the main
checkout (web/references/<id>/DESIGN.md). For colours, type sizes and radii it prints, per site, how many values
both sides name and for how many of those the name is the same. A value is compared on every name it carries.
"""
import pathlib, re, subprocess, sys
import yaml

W = pathlib.Path.home() / ".omd-workers"
HERE = pathlib.Path(__file__).resolve().parent
MAIN = pathlib.Path(subprocess.run(["git", "-C", str(HERE), "rev-parse", "--path-format=absolute", "--git-common-dir"],
                                   check=True, capture_output=True, text=True).stdout.strip()).parent
a, b, only = sys.argv[1], sys.argv[2], [x for x in sys.argv[3:] if not x.startswith("--")]
sites = [l.split()[0] for l in (HERE / "sites.txt").read_text().splitlines() if l.strip() and not l.startswith("#")]

def px(v):
    m = re.fullmatch(r"(\d+(?:\.\d+)?)(px)?", str(v))
    return float(m.group(1)) if m else None

def names(side, sid):
    if side == "published":
        t = (MAIN / "web/references" / sid / "DESIGN.md").read_text(encoding="utf-8")
        f = yaml.safe_load(t[4:t.index("\n---\n", 4)]) or {}
        typ = {(px(v.get("fontSize")), int(v.get("fontWeight") or 0)): k for k, v in (f.get("typography") or {}).items() if isinstance(v, dict)}
    else:
        p = W / side / sid / "front.yaml"
        if not p.exists(): return None
        f = (yaml.safe_load(p.read_text(encoding="utf-8")) or {}).get("tokens", {})
        typ = {(px(v.get("size")), int(v.get("weight") or 0)): k for k, v in (f.get("typography") or {}).items() if isinstance(v, dict)}
    col, rad = {}, {}
    for k, v in (f.get("colors") or {}).items(): col.setdefault(str(v).lower(), set()).add(k)
    for k, v in (f.get("rounded") or {}).items(): rad.setdefault(px(v), set()).add(k)
    return {"colour": col, "type": {k: {v} for k, v in typ.items()}, "radius": rad}

tot = {k: [0, 0] for k in ("colour", "type", "radius")}
print(f"{'site':16} {'colour':>10} {'type':>8} {'radius':>8}   (same name / values both name) · {a} vs {b}")
for sid in sites:
    if only and sid not in only: continue
    x, y = names(a, sid), names(b, sid)
    if not x or not y: continue
    cells = []
    for kind in ("colour", "type", "radius"):
        both = set(x[kind]) & set(y[kind]); same = sum(1 for v in both if x[kind][v] & y[kind][v])
        tot[kind][0] += same; tot[kind][1] += len(both); cells.append(f"{same}/{len(both)}")
        if "--list" in sys.argv:
            for v in sorted(both, key=str):
                if not (x[kind][v] & y[kind][v]): print(f"    {sid} {kind} {v}: {sorted(x[kind][v])} vs {sorted(y[kind][v])}")
    print(f"{sid:16} {cells[0]:>10} {cells[1]:>8} {cells[2]:>8}")
print("total            " + "   ".join(f"{k} {s}/{n} ({s / n:.0%})" if n else f"{k} —" for k, (s, n) in tot.items()))
