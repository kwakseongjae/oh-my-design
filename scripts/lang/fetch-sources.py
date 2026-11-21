#!/usr/bin/env python3
"""Fetch every URL a rule file's sources.json cites into <dir>/fetched/ as the server sent it, plus a plain-text
copy a checker can grep (PDF: pdftotext per page with page markers; HTML: tags stripped). Writes manifest.json."""
import html.parser, hashlib, json, pathlib, re, subprocess, sys, datetime

d = pathlib.Path(sys.argv[1]); out = d / "fetched"; out.mkdir(exist_ok=True)
src = json.load(open(d / "sources.json"))
items = src if isinstance(src, list) else src["sources"]
urls = []
for s in (items if isinstance(items, list) else items.values()):
    u = s.get("url") if isinstance(s, dict) else None
    if u and u not in urls: urls.append(u)

class Text(html.parser.HTMLParser):
    def __init__(self): super().__init__(); self.out = []; self.skip = 0
    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style", "noscript", "svg"): self.skip += 1
        if tag in ("p", "div", "li", "br", "tr", "h1", "h2", "h3", "h4", "h5", "dt", "dd", "section", "td", "th", "pre"): self.out.append("\n")
    def handle_endtag(self, tag):
        if tag in ("script", "style", "noscript", "svg") and self.skip: self.skip -= 1
    def handle_data(self, data):
        if not self.skip: self.out.append(data)

manifest = []
for i, u in enumerate(urls, 1):
    slug = "%02d-%s" % (i, re.sub(r"[^a-zA-Z0-9]+", "-", re.sub(r"^https?://", "", u))[:70].strip("-"))
    raw = out / (slug + ".raw")
    r = subprocess.run(["curl", "-sS", "-L", "--max-time", "90", "-A", "Mozilla/5.0 (compatible; reference-check)", "-o", str(raw),
                        "-w", "%{http_code} %{content_type}", u], capture_output=True, text=True)
    status, _, ctype = r.stdout.partition(" ")
    e = {"url": u, "status": status, "content_type": ctype, "raw": raw.name, "bytes": raw.stat().st_size if raw.exists() else 0,
         "fetched": datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%MZ")}
    if raw.exists() and status == "200":
        e["sha256"] = hashlib.sha256(raw.read_bytes()).hexdigest()[:16]
        txt = out / (slug + ".txt")
        if raw.read_bytes()[:5] == b"%PDF-":
            pages = int(re.search(r"Pages:\s+(\d+)", subprocess.run(["pdfinfo", str(raw)], capture_output=True, text=True).stdout or "Pages: 0").group(1))
            parts = []
            for p in range(1, pages + 1):
                t = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), "-layout", str(raw), "-"], capture_output=True, text=True).stdout
                parts.append(f"\n===== PDF page {p} of {pages} =====\n{t}")
            txt.write_text("".join(parts), encoding="utf-8"); e.update(text=txt.name, kind="pdf", pages=pages)
        else:
            body = raw.read_bytes().decode("utf-8", errors="replace")
            if "<html" in body[:3000].lower() or "<!doctype" in body[:300].lower():
                p = Text(); p.feed(body); t = re.sub(r"\n\s*\n+", "\n", "".join(p.out)); kind = "html"
            else:
                t = body; kind = "text"
            txt.write_text(t, encoding="utf-8"); e.update(text=txt.name, kind=kind)
        e["text_chars"] = len(txt.read_text(encoding="utf-8"))
    manifest.append(e)
    print(status, e.get("kind", "-"), e["bytes"], e.get("text_chars", 0), u)
json.dump(manifest, open(out / "manifest.json", "w"), indent=1, ensure_ascii=False)
