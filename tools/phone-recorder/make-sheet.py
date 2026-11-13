#!/usr/bin/env python3
"""Turn recorded walks into a sheet a person can read: every screen with its type, patterns and a note, the flows
they belong to, scroll clips, and the findings.

    make-sheet.py <sheet.json> <out-dir>

sheet.json is the curation, written by whoever looked at the frames:
    { "title", "app", "version", "device", "captured", "summary": [..], "findings": [{ "title", "body", "frames": [] }],
      "walks": { "<key>": "<walk folder>" },
      "groups": [{ "title", "note", "frames": [{ "walk", "frame", "title", "type", "patterns": [], "note",
                                                    "redact": ["label regex", ...], "redact_band": ["from label", "to label"],
                                                    "redact_rect": [[x, y, w, h]] }] }],
      "clips": [{ "walk", "clip", "title", "note" }], "method": [..] }

Images are written as JPEGs 660 px wide. `redact` paints over every element of that frame whose label matches (the
element list recorded with the frame gives the rectangle); `redact_band` paints the full-width band between two
labelled elements. A signed-in phone shows names, ids and balances: redact before a sheet leaves the machine.

Types and patterns are folded into the fixed words of taxonomy.json (a sheet may be curated in looser words; the
sheet shows the fixed ones), and a word the taxonomy does not know is reported. The sheet also says which of the
core screen types this app's walk reached. Beside index.html it writes screens.json, the same content as data.
Needs ffmpeg. No network, no model.
"""
import html, json, pathlib, re, shutil, subprocess, sys

spec_path, out = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
spec = json.loads(spec_path.read_text(encoding="utf-8"))
(out / "img").mkdir(parents=True, exist_ok=True)
walks = {k: pathlib.Path(v).expanduser() for k, v in spec["walks"].items()}
SCALE = 3  # points to pixels on the recorded device

taxonomy = json.loads((pathlib.Path(__file__).parent / "taxonomy.json").read_text(encoding="utf-8"))
fold = {kind: {w: e["ko"] for e in taxonomy[kind] for w in [e["ko"], *e.get("also", [])]} for kind in ("screens", "patterns")}
english = {e["ko"]: e["en"] for kind in ("screens", "patterns") for e in taxonomy[kind]}
unknown = set()


def fixed(kind, word):
    if word not in fold[kind]:
        unknown.add(f"{kind[:-1]}: {word}")
    return fold[kind].get(word, word)


def boxes(frame):
    """Rectangles (pixels) to paint over, from the frame's element list."""
    f = walks[frame["walk"]] / f"{frame['frame']}.elements.json"
    els = json.loads(f.read_text(encoding="utf-8")).get("elements", []) if f.exists() else []
    out_boxes = []
    for pattern in frame.get("redact", []):
        rx = re.compile(pattern)
        for e in els:
            if e["type"] in ("text", "button", "link", "cell", "other", "image") and rx.search(e.get("label", "")) and e["w"] < 380 and e["h"] < 120:
                out_boxes.append((e["x"] - 2, e["y"] - 2, e["w"] + 4, e["h"] + 4))
    band = frame.get("redact_band")
    if band:
        top = next((e for e in els if e.get("label", "").startswith(band[0])), None)
        bottom = next((e for e in els if e.get("label", "").startswith(band[1])), None)
        if top and bottom and bottom["y"] > top["y"]:
            out_boxes.append((0, top["y"] + top["h"] + 2, 402, bottom["y"] - top["y"] - top["h"] - 8))
    out_boxes += [tuple(r) for r in frame.get("redact_rect", [])]   # [x, y, w, h] in points, for what no element isolates
    return [(int(x * SCALE), int(y * SCALE), int(w * SCALE), int(h * SCALE)) for x, y, w, h in out_boxes]


def render(frame):
    src = walks[frame["walk"]] / f"{frame['frame']}.png"
    name = f"{frame['walk']}-{frame['frame']}.jpg"
    draw = [f"drawbox=x={x}:y={y}:w={w}:h={h}:color=0x9aa0a6:t=fill" for x, y, w, h in boxes(frame)]
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(src), "-vf", ",".join(draw + ["scale=660:-2"]), "-q:v", "4", str(out / "img" / name)], check=True)
    return name, len(draw)


esc = html.escape
cards, redacted, data = [], 0, []
types, patterns = {}, {}
for gi, g in enumerate(spec["groups"]):
    items = []
    for fr in g["frames"]:
        name, n = render(fr)
        redacted += n
        fr["type"] = fixed("screens", fr["type"])
        fr["patterns"] = list(dict.fromkeys(fixed("patterns", p) for p in fr.get("patterns", [])))
        data.append({"image": f"img/{name}", "flow": g["title"], "title": fr["title"], "type": fr["type"], "type_en": english.get(fr["type"], ""),
                     "patterns": fr["patterns"], "patterns_en": [english.get(p, "") for p in fr["patterns"]], "note": fr.get("note", ""), "redacted": bool(n)})
        types[fr["type"]] = types.get(fr["type"], 0) + 1
        for p in fr.get("patterns", []):
            patterns[p] = patterns.get(p, 0) + 1
        tags = "".join(f'<span class="tag">{esc(p)}</span>' for p in fr.get("patterns", []))
        items.append(f'''<figure class="card" data-type="{esc(fr['type'])}" data-patterns="{esc('|'.join(fr.get('patterns', [])))}">
  <a href="img/{name}" class="shot"><img loading="lazy" src="img/{name}" alt="{esc(fr['title'])}"></a>
  <figcaption><div class="kind">{esc(fr['type'])}{' · 가림 처리' if n else ''}</div><h3>{esc(fr['title'])}</h3><p>{esc(fr.get('note', ''))}</p><div class="tags">{tags}</div></figcaption>
</figure>''')
    cards.append(f'<section class="group"><h2><span class="num">{gi + 1}</span>{esc(g["title"])}</h2><p class="lede">{esc(g.get("note", ""))}</p><div class="row">{"".join(items)}</div></section>')

clips = []
for c in spec.get("clips", []):
    src = walks[c["walk"]] / f"{c['clip']}.mp4"
    if src.exists():
        dst = f"{c['walk']}-{c['clip']}.mp4"
        shutil.copy2(src, out / "img" / dst)
        clips.append(f'<figure class="card clip"><video controls loop muted playsinline preload="metadata" src="img/{dst}"></video><figcaption><div class="kind">스크롤 영상</div><h3>{esc(c["title"])}</h3><p>{esc(c.get("note", ""))}</p></figcaption></figure>')

findings = "".join(f'<article class="finding"><h3>{esc(f["title"])}</h3><p>{esc(f["body"])}</p></article>' for f in spec.get("findings", []))
summary = "".join(f"<li>{esc(s)}</li>" for s in spec.get("summary", []))
method = "".join(f"<li>{esc(s)}</li>" for s in spec.get("method", []))
core = [e["ko"] for e in taxonomy["screens"] if e.get("core")]
coverage = "".join(f'<span class="cov{" hit" if c in types else ""}">{esc(c)}{" " + str(types[c]) if c in types else " 없음"}</span>' for c in core)
chips = lambda d, attr: "".join(f'<button class="chip" data-{attr}="{esc(k)}">{esc(k)} <b>{v}</b></button>' for k, v in sorted(d.items(), key=lambda kv: (-kv[1], kv[0])))
total = sum(types.values())

page = f'''<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(spec["title"])}</title>
<style>
:root {{ --bg:#f6f6f4; --panel:#ffffff; --ink:#16181b; --sub:#5d636b; --line:#e3e3df; --accent:#1f5eff; --chip:#eceae6; }}
@media (prefers-color-scheme: dark) {{ :root {{ --bg:#101113; --panel:#191b1e; --ink:#eceef0; --sub:#9aa1a9; --line:#2a2d31; --accent:#7ea2ff; --chip:#24272b; }} }}
* {{ box-sizing:border-box; }}
body {{ margin:0; background:var(--bg); color:var(--ink); font:15px/1.6 Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif; word-break:keep-all; overflow-wrap:anywhere; }}
header.top {{ padding:40px 28px 20px; max-width:1500px; margin:0 auto; }}
h1 {{ font-size:30px; line-height:1.3; margin:0 0 6px; letter-spacing:0; }}
.meta {{ color:var(--sub); font-size:14px; }}
.meta b {{ color:var(--ink); font-weight:600; font-variant-numeric:tabular-nums; }}
main {{ max-width:1500px; margin:0 auto; padding:0 28px 80px; }}
.summary {{ background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:18px 22px; margin:18px 0 8px; }}
.summary ul, .method ul {{ margin:0; padding-left:18px; }}
.summary li, .method li {{ margin:4px 0; }}
.filters {{ position:sticky; top:0; z-index:5; background:var(--bg); padding:12px 0 10px; border-bottom:1px solid var(--line); margin-bottom:8px; }}
.filters .line {{ display:flex; gap:6px; flex-wrap:wrap; align-items:center; margin:4px 0; }}
.filters .label {{ font-size:12px; color:var(--sub); width:64px; flex:none; }}
.chip {{ border:1px solid var(--line); background:var(--chip); color:var(--ink); border-radius:999px; padding:4px 11px; font:inherit; font-size:13px; cursor:pointer; min-height:30px; }}
.more {{ margin:4px 0 0 64px; font-size:13px; color:var(--sub); }}
.more summary {{ cursor:pointer; padding:4px 0; }}
.chip b {{ font-weight:500; color:var(--sub); font-variant-numeric:tabular-nums; }}
.chip[aria-pressed="true"] {{ background:var(--ink); color:var(--bg); border-color:var(--ink); }}
.chip[aria-pressed="true"] b {{ color:inherit; }}
.chip:focus-visible, a.shot:focus-visible {{ outline:2px solid var(--accent); outline-offset:2px; }}
.group {{ padding:26px 0 8px; }}
.group h2 {{ font-size:20px; margin:0 0 2px; display:flex; align-items:baseline; gap:10px; }}
.group .num {{ font-size:13px; color:var(--sub); font-variant-numeric:tabular-nums; }}
.lede {{ color:var(--sub); margin:0 0 14px; max-width:820px; }}
.row {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(230px, 1fr)); gap:18px; }}
.card {{ margin:0; background:var(--panel); border:1px solid var(--line); border-radius:8px; overflow:hidden; display:flex; flex-direction:column; }}
.card[hidden] {{ display:none; }}
.shot {{ display:block; background:#000; }}
.shot img, .card video {{ display:block; width:100%; height:auto; }}
figcaption {{ padding:12px 14px 14px; }}
.kind {{ font-size:12px; color:var(--accent); font-weight:600; }}
.card h3 {{ font-size:15px; margin:2px 0 4px; line-height:1.4; }}
.card p {{ margin:0 0 8px; color:var(--sub); font-size:13.5px; line-height:1.55; }}
.tags {{ display:flex; flex-wrap:wrap; gap:4px; }}
.tag {{ font-size:11.5px; background:var(--chip); border-radius:4px; padding:2px 7px; color:var(--sub); }}
.findings {{ display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:14px; margin-top:10px; }}
.finding {{ background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:16px 18px; }}
.finding h3 {{ margin:0 0 6px; font-size:16px; }}
.finding p {{ margin:0; color:var(--sub); }}
.method {{ color:var(--sub); font-size:14px; border-top:1px solid var(--line); margin-top:36px; padding-top:18px; }}
.coverage {{ display:flex; flex-wrap:wrap; gap:6px; align-items:center; margin:10px 0 0; font-size:13px; color:var(--sub); }}
.cov {{ border:1px dashed var(--line); border-radius:4px; padding:1px 8px; font-variant-numeric:tabular-nums; }}
.cov.hit {{ border-style:solid; color:var(--ink); background:var(--panel); }}
dialog {{ border:0; padding:0; background:transparent; max-width:96vw; max-height:96vh; }}
dialog::backdrop {{ background:rgba(0,0,0,.78); }}
dialog img {{ display:block; max-height:94vh; max-width:94vw; border-radius:8px; }}
@media (max-width:520px) {{ header.top, main {{ padding-left:16px; padding-right:16px; }} h1 {{ font-size:24px; }} .row {{ grid-template-columns:repeat(2, 1fr); gap:10px; }} .filters .label {{ width:100%; }} }}
</style></head><body>
<header class="top">
  <h1>{esc(spec["title"])}</h1>
  <div class="meta">{esc(spec["app"])} <b>{esc(spec["version"])}</b> · {esc(spec["device"])} · 수집 <b>{esc(spec["captured"])}</b> · 화면 <b>{total}</b>장 · 영상 <b>{len(clips)}</b>개{f' · 가림 처리 <b>{redacted}</b>곳' if redacted else ''}</div>
  <div class="summary"><ul>{summary}</ul></div>
  <div class="coverage" aria-label="기본 화면 유형 가운데 이 시트에 있는 것"><span>기본 화면</span>{coverage}</div>
</header>
<main>
  <div class="filters" role="group" aria-label="화면 걸러 보기">
    <div class="line"><span class="label">화면 유형</span><button class="chip" data-all aria-pressed="true">전체 <b>{total}</b></button>{chips(types, "type")}</div>
    <div class="line"><span class="label">패턴</span>{chips({k: v for k, v in patterns.items() if v >= 2}, "pattern")}</div>
    <details class="more"><summary>한 번만 나온 패턴 {sum(1 for v in patterns.values() if v < 2)}개</summary><div class="line">{chips({k: v for k, v in patterns.items() if v < 2}, "pattern")}</div></details>
  </div>
  {"".join(cards)}
  {f'<section class="group"><h2>스크롤 영상</h2><p class="lede">폰 자체 스크린샷을 조금씩 내리며 이어 붙인 것입니다.</p><div class="row">{"".join(clips)}</div></section>' if clips else ''}
  <section class="group"><h2>관찰한 것</h2><p class="lede">화면에서 본 것만 적었습니다. 성과나 의도에 대한 판단이 아닙니다.</p><div class="findings">{findings}</div></section>
  <div class="method"><b>어떻게 모았나</b><ul>{method}</ul></div>
</main>
<dialog id="zoom"><img alt=""></dialog>
<script>
const cards = [...document.querySelectorAll('.card:not(.clip)')], chips = [...document.querySelectorAll('.chip')];
function apply(type, pattern) {{
  for (const c of cards) c.hidden = !((!type || c.dataset.type === type) && (!pattern || c.dataset.patterns.split('|').includes(pattern)));
  for (const g of document.querySelectorAll('.group')) {{ const own = g.querySelectorAll('.card:not(.clip)'); if (own.length) g.hidden = ![...own].some((c) => !c.hidden); }}
}}
for (const chip of chips) chip.addEventListener('click', () => {{
  for (const c of chips) c.setAttribute('aria-pressed', c === chip ? 'true' : 'false');
  apply(chip.dataset.type, chip.dataset.pattern);
}});
const zoom = document.getElementById('zoom');
for (const a of document.querySelectorAll('a.shot')) a.addEventListener('click', (e) => {{ e.preventDefault(); zoom.querySelector('img').src = a.href; zoom.showModal(); }});
zoom.addEventListener('click', () => zoom.close());
</script>
</body></html>
'''
(out / "index.html").write_text(page, encoding="utf-8")
(out / "screens.json").write_text(json.dumps({"app": spec["app"], "version": spec["version"], "device": spec["device"], "captured": spec["captured"],
                                              "core_missing": [c for c in core if c not in types], "screens": data}, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
for word in sorted(unknown):
    print(f"not in taxonomy.json — {word}")
print(f"{total} screens, {len(clips)} clips, {redacted} redacted area(s) → {out / 'index.html'}")
