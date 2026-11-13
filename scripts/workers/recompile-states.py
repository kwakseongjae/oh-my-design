#!/usr/bin/env python3
"""Bring a worker draft's component states up to the compiler's current wording, without touching anything else.

    recompile-states.py <worker-folder> <newly-compiled-dir>

The worker pasted compiled/components.yaml into front.yaml and wrote the `use` lines. When the compiler's reading of
a state changes (2026-11-12: focus against the after-blur rest; 2026-11-13: pseudo-elements by what differs), this
replaces each component's `hover` / `pressed` / `focus` line in front.yaml with the newly compiled one, adds a
state the new compile has, and drops one it no longer has. Every other line stays as the worker wrote it. Then
rerun the assembler. Prints what changed.
"""
import pathlib, re, sys

folder, new_dir = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
STATES = ("hover", "pressed", "focus")

def compiled_states(path):
    out, key = {}, None
    for line in path.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^  ([\w.-]+):\s*$", line)
        if m: key = m.group(1); out[key] = {}; continue
        m = re.match(r"^    (hover|pressed|focus): (.*)$", line)
        if m and key: out[key][m.group(1)] = m.group(2)
    return out

new = compiled_states(new_dir / "components.yaml")
lines = (folder / "front.yaml").read_text(encoding="utf-8").splitlines()
out, in_components, comp_indent, key, seen, changed = [], False, None, None, set(), []

def flush():
    # states the new compile has and the draft did not: add them before leaving the component
    if key in new:
        for s in STATES:
            if s in new[key] and s not in seen:
                out.append(" " * (comp_indent + 2) + f"{s}: {new[key][s]}"); changed.append(f"{key}.{s} added")

for line in lines:
    m = re.match(r"^(\s+)components:\s*$", line)
    if m and not in_components:
        in_components, comp_indent = True, len(m.group(1)) + 2
        out.append(line); continue
    if in_components:
        indent = len(line) - len(line.lstrip())
        if line.strip() and indent < comp_indent:           # left the components block
            flush(); in_components, key = False, None
        elif re.match(r"^\s{%d}[\w.-]+:\s*$" % comp_indent, line):
            flush(); key, seen = line.strip()[:-1], set()
        elif key in new:
            m = re.match(r"^\s{%d}(hover|pressed|focus):" % (comp_indent + 2), line)
            if m:
                s = m.group(1); seen.add(s)
                if s not in new[key]: changed.append(f"{key}.{s} dropped"); continue
                fresh = " " * (comp_indent + 2) + f"{s}: {new[key][s]}"
                if fresh.strip() != line.strip(): changed.append(f"{key}.{s}")
                out.append(fresh); continue
    out.append(line)
if in_components: flush()
(folder / "front.yaml").write_text("\n".join(out) + "\n", encoding="utf-8")
print(f"{folder.name}: {len(changed)} state line(s) changed" + (": " + ", ".join(changed) if changed else ""))
