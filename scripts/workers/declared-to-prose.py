#!/usr/bin/env python3
"""Keep declared-only colours out of a worker's `tokens.colors` and in the body (decided 2026-11-12, batch 9).

    declared-to-prose.py <worker-folder>...        each holds front.yaml, body.md and compiled/candidates.json

A colour that only a custom property holds, with no surveyed element or measured control painted in it, is a fact
about the site's CSS, not about what the page shows. Batch 9's order had workers export those as tokens, which gave
references of 57 to 100 colour tokens (catalog median 13). This moves them back: the token is removed from
front.yaml (the untouched file is kept as front.full.yaml), the body keeps its "declared" table, its first column
is no longer called a token, and one sentence says the list is not exported. Then rerun the assembler.
Idempotent. A colour token whose value the capture saw painted, or that is not in the candidate list at all, stays.
"""
import json, pathlib, re, shutil, sys

for folder in map(pathlib.Path, sys.argv[1:]):
    cand = json.loads((folder / "compiled/candidates.json").read_text())
    seen = {c["value"] for c in cand["colours"]}
    declared = {c["value"] for c in cand["declaredOnly"]} - seen
    front = folder / "front.yaml"
    if not (folder / "front.full.yaml").exists():
        shutil.copy2(front, folder / "front.full.yaml")
    out, inside, indent, removed = [], False, None, []
    for line in front.read_text(encoding="utf-8").splitlines():
        if re.match(r"^  colors:\s*$", line):
            inside, indent = True, None
            out.append(line); continue
        if inside:
            m = re.match(r"^(\s+)([\w.-]+):\s*[\"']?(#[0-9a-fA-F]{6})[\"']?\s*(#.*)?$", line)
            if m and (indent is None or len(m.group(1)) == indent):
                indent = len(m.group(1))
                if m.group(3).lower() in declared:
                    removed.append(m.group(2)); continue
            elif line.strip() and not line.startswith(" " * 4):
                inside = False
        out.append(line)
    front.write_text("\n".join(out) + "\n", encoding="utf-8")

    body = folder / "body.md"
    lines, in_declared, noted = body.read_text(encoding="utf-8").splitlines(), False, False
    NOTE = "These colours are listed for reference and are not exported as tokens: nothing in this capture was painted with them."
    res = []
    for i, line in enumerate(lines):
        if re.match(r"^#{2,3} ", line):
            in_declared = bool(re.match(r"^### .*[Dd]eclared", line))
            res.append(line)
            if in_declared and NOTE not in lines[i + 1:i + 4]:
                res += ["", NOTE]
            continue
        if in_declared and line.startswith("|") and i + 1 < len(lines) and re.match(r"^\|\s*-", lines[i + 1]):
            cells = line.split("|")
            cells[1] = re.sub(r"(?i)\s*token\s*/\s*css property\s*|\s*token\s*/\s*property\s*|\s*css property\s*/\s*token\s*|\s*token\s*", " Name ", cells[1], count=1) \
                if re.search(r"(?i)token", cells[1]) else cells[1]
            line = "|".join(cells)
        res.append(line)
    body.write_text("\n".join(res) + "\n", encoding="utf-8")
    print(f"{folder.name}: {len(removed)} declared-only colour token(s) moved to prose")
