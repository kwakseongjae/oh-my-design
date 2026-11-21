#!/usr/bin/env python3
"""For every quoted passage in a rules.md, say whether it is in the fetched sources verbatim (whitespace removed,
NFKC). No model. Writes <dir>/quote-check.md and quote-check.json.

    quote-check.py <dir> [rules-file]      <dir> holds the rules file (default rules.md) and fetched/ (fetch-sources.py)"""
import json, pathlib, re, sys, unicodedata

d = pathlib.Path(sys.argv[1]); f = d / "fetched"
RULES = sys.argv[2] if len(sys.argv) > 2 else "rules.md"          # e.g. rules.v2.md → quote-check.v2.md
OUT = "quote-check" + RULES[len("rules"):-len(".md")]
norm = lambda s: re.sub(r"\s+", "", unicodedata.normalize("NFKC", s))
man = json.load(open(f / "manifest.json"))
docs = []
for e in man:
    if not e.get("text"): continue
    t = (f / e["text"]).read_text(encoding="utf-8")
    if e["kind"] == "pdf":
        for m in re.finditer(r"===== PDF page (\d+) of \d+ =====\n(.*?)(?=\n===== PDF page|\Z)", t, re.S):
            docs.append((e["text"], "pdf page " + m.group(1), norm(m.group(2))))
        docs.append((e["text"], "across pages", norm(re.sub(r"===== PDF page \d+ of \d+ =====", "", t))))
    else:
        docs.append((e["text"], "", norm(t)))

def quotes(text):
    out = []; depth = 0; start = None
    for i, ch in enumerate(text):
        if ch == "「":
            if depth == 0: start = i
            depth += 1
        elif ch == "」" and depth:
            depth -= 1
            if depth == 0: out.append(text[start + 1:i])
    out += re.findall(r'(?<![\w=])"([^"\n]{20,})"', text) + re.findall(r"“([^”\n]{20,})”", text)
    return out

rules = re.split(r"(?m)^(?=#{2,4} +[A-Z]{1,4}-?\d+)", (d / RULES).read_text(encoding="utf-8"))
rows = []
for block in rules:
    m = re.match(r"#{2,4} +([A-Z]{1,4}-?\d+)", block)
    if not m: continue
    rid = m.group(1)
    body = "\n".join(l for l in block.splitlines() if not re.match(r"\s*-\s*Example", l))   # composed examples are not quotes
    for q in quotes(body):
        nq = norm(q)
        if len(nq) < (10 if re.search(r"[぀-ヿ一-鿿]", nq) else 20): continue
        hits = [(file, where) for file, where, t in docs if nq in t]
        first = next((h for h in hits if h[1] != "across pages"), hits[0] if hits else None)
        partial = None
        if not hits:   # longest piece between ellipses / brackets that is found
            for piece in sorted(re.split(r"…+|\.\.\.+|\[[^\]]*\]|（中略）", q), key=len, reverse=True):
                np_ = norm(piece)
                if len(np_) >= 10:
                    h = next(((file, where) for file, where, t in docs if np_ in t), None)
                    if h: partial = (piece.strip()[:60], h); break
        rows.append({"rule": rid, "quote": q, "found": bool(hits), "file": first[0] if first else None, "where": first[1] if first else None,
                     "partial": partial})
json.dump(rows, open(d / (OUT + ".json"), "w"), indent=1, ensure_ascii=False)
ids = sorted({r["rule"] for r in rows}, key=lambda x: int(re.search(r"\d+", x).group()))
allids = [re.match(r"#{2,4} +([A-Z]{1,4}-?\d+)", b).group(1) for b in rules if re.match(r"#{2,4} +([A-Z]{1,4}-?\d+)", b)]
lines = ["# Quote check (script, no model)", "",
         "Each quoted passage in rules.md, searched verbatim in the fetched sources (whitespace removed, NFKC).",
         "`found` proves the words are in the source. It does not show that the passage supports the rule.",
         "`not found` can be an extraction difference (a table, ruby, a line the PDF text layer splits), a paraphrase, or a quote that is not there.", "",
         "| rule | quote (first 60 chars) | result | where |", "|---|---|---|---|"]
for r in rows:
    res = "found" if r["found"] else ("part found: " + r["partial"][0] if r["partial"] else "NOT FOUND")
    where = (f"{r['file']} {r['where']}" if r["found"] else (f"{r['partial'][1][0]} {r['partial'][1][1]}" if r["partial"] else ""))
    lines.append(f"| {r['rule']} | {r['quote'][:60].replace('|', '/')} | {res} | {where} |")
noq = [i for i in allids if i not in ids]
lines += ["", f"Rules with no quoted passage long enough to check: {', '.join(noq) or 'none'}"]
(d / (OUT + ".md")).write_text("\n".join(lines) + "\n", encoding="utf-8")
n = len(rows); fnd = sum(r["found"] for r in rows); part = sum(bool(r["partial"]) for r in rows)
bad = sorted({r["rule"] for r in rows if not r["found"]}, key=lambda x: int(re.search(r"\d+", x).group()))
print(f"{d.name}: rules {len(allids)}, quotes {n}, found {fnd}, part found {part}, not found {n - fnd - part}; rules with a quote not found verbatim: {len(bad)} {bad}; no checkable quote: {noq}")
