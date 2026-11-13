#!/usr/bin/env python3
"""Make a walk's own files as clean as the sheet built from it.

    scrub-walk.py <sheet.json> [--walk KEY]

make-sheet.py paints a sheet's pictures; the walk it reads still holds the unpainted frame and the element list
with every label. This paints each frame's `redact_rect` rectangles into the walk's PNG in place, blanks the text
(label, identifier, placeholder: apps put the same words in all three) of every element whose centre lies inside
one of them or inside a rectangle covered at capture, and replaces whatever matches a pattern in
~/.omd-workers/screens/private.json inside any text of the walk (a listing's one long label carries its
neighbourhood). Not reversible: the walk is the only copy. Needs ffmpeg. Prints counts, never the strings.
"""
import json, pathlib, re, subprocess, sys

spec = json.loads(pathlib.Path(sys.argv[1]).expanduser().read_text(encoding="utf-8"))
only = sys.argv[sys.argv.index("--walk") + 1] if "--walk" in sys.argv else None
pf = pathlib.Path("~/.omd-workers/screens/private.json").expanduser()
patterns = [re.compile(p, re.I) for p in (json.loads(pf.read_text(encoding="utf-8")).get("patterns", []) if pf.exists() else [])]
SCALE = 3
rects = {}
for g in spec["groups"]:
    for fr in g["frames"]:
        if fr.get("redact_rect") and (only is None or fr["walk"] == only):
            rects.setdefault((fr["walk"], fr["frame"]), []).extend(fr["redact_rect"])
painted = blanked = replaced = 0
for key, walk in spec["walks"].items():
    if only and key != only:
        continue
    walk = pathlib.Path(walk).expanduser()
    flow = json.loads((walk / "flow.json").read_text(encoding="utf-8"))
    covered = {st["frame"]: st["covered"] for st in flow["steps"] if st.get("frame") and st.get("covered")}
    for ef in sorted(walk.glob("frame-*.elements.json")):
        frame = ef.name.split(".")[0]
        data = json.loads(ef.read_text(encoding="utf-8"))
        rs = rects.get((key, frame), [])
        if rs:
            png = walk / f"{frame}.png"
            vf = ",".join(f"drawbox=x={int(x * SCALE)}:y={int(y * SCALE)}:w={int(w * SCALE)}:h={int(h * SCALE)}:color=0x9aa0a6:t=fill" for x, y, w, h in rs)
            tmp = walk / f"{frame}.scrub.png"
            subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(png), "-vf", vf, str(tmp)], check=True)
            tmp.replace(png); painted += len(rs)
        inside = rs + covered.get(frame, [])
        for e in data.get("elements", []):
            cx, cy = e["x"] + e["w"] / 2, e["y"] + e["h"] / 2
            hit = any(x <= cx <= x + w and y <= cy <= y + h for x, y, w, h in inside)
            for k in ("label", "id", "placeholder"):
                text = e.get(k, "")
                if not text or text == "•••":
                    continue
                if hit:
                    e[k] = "•••"; blanked += 1; continue
                new = text
                for rx in patterns:
                    new = rx.sub("•••", new)
                if new != text:
                    e[k] = new; replaced += 1
        ef.write_text(json.dumps(data, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"painted {painted} rectangle(s) into the walk's frames, blanked {blanked} label(s) inside them, replaced a private string in {replaced} label(s)")
