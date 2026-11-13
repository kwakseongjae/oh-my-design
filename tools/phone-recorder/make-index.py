#!/usr/bin/env python3
"""One page over every app sheet in a folder: the apps, and all their screens behind one set of filters.

    make-index.py <root>

<root> holds one folder per app, each built by make-sheet.py (index.html, screens.json, img/). Writes
<root>/index.html. The filters are the fixed words of taxonomy.json, so "search results" means the same thing in
every app. Pictures are the ones the sheets already redacted; this script reads no walk. No network, no model.
"""
import html, json, pathlib, sys

root = pathlib.Path(sys.argv[1]).expanduser()
esc = html.escape
apps = []
for f in sorted(root.glob("*/screens.json")):
    d = json.loads(f.read_text(encoding="utf-8"))
    d["slug"] = f.parent.name
    apps.append(d)
if not apps:
    sys.exit(f"no <app>/screens.json under {root}")

types, patterns, cards, tiles = {}, {}, [], []
for a in apps:
    cover = next((s for s in a["screens"] if s["type"] == "홈"), a["screens"][0])
    missing = a.get("core_missing", [])
    tiles.append(f'''<a class="app" href="{esc(a['slug'])}/index.html">
  <img loading="lazy" src="{esc(a['slug'])}/{esc(cover['image'])}" alt="">
  <div><h3>{esc(a['app'])}</h3><p>화면 <b>{len(a['screens'])}</b>장 · {esc(a['version'])} · {esc(a['captured'])}</p>
  <p class="miss">{'기본 화면 중 없는 것: ' + esc(', '.join(missing)) if missing else '기본 화면을 모두 담았습니다'}</p></div></a>''')
    for s in a["screens"]:
        types[s["type"]] = types.get(s["type"], 0) + 1
        for p in s["patterns"]:
            patterns[p] = patterns.get(p, 0) + 1
        cards.append(f'''<figure class="card" data-app="{esc(a['slug'])}" data-type="{esc(s['type'])}" data-patterns="{esc('|'.join(s['patterns']))}">
  <a href="{esc(a['slug'])}/{esc(s['image'])}" class="shot"><img loading="lazy" src="{esc(a['slug'])}/{esc(s['image'])}" alt="{esc(a['app'])} {esc(s['title'])}"></a>
  <figcaption><div class="kind">{esc(a['app'])} · {esc(s['type'])}</div><h3>{esc(s['title'])}</h3></figcaption></figure>''')

order = lambda d: sorted(d.items(), key=lambda kv: (-kv[1], kv[0]))
chips = lambda d, attr: "".join(f'<button class="chip" data-{attr}="{esc(k)}" aria-pressed="false">{esc(k)} <b>{v}</b></button>' for k, v in order(d))
app_chips = "".join(f'<button class="chip" data-app="{esc(a["slug"])}" aria-pressed="false">{esc(a["app"])} <b>{len(a["screens"])}</b></button>' for a in apps)
total = sum(types.values())
common = {k: v for k, v in patterns.items() if v >= 2}

page = f'''<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>한국 서비스 화면 모음</title>
<style>
:root {{ --bg:#f6f6f4; --panel:#ffffff; --ink:#16181b; --sub:#5d636b; --line:#e3e3df; --accent:#1f5eff; --chip:#eceae6; }}
@media (prefers-color-scheme: dark) {{ :root {{ --bg:#101113; --panel:#191b1e; --ink:#eceef0; --sub:#9aa1a9; --line:#2a2d31; --accent:#7ea2ff; --chip:#24272b; }} }}
* {{ box-sizing:border-box; }}
body {{ margin:0; background:var(--bg); color:var(--ink); font:15px/1.6 Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", system-ui, sans-serif; word-break:keep-all; overflow-wrap:anywhere; }}
header, main {{ max-width:1500px; margin:0 auto; padding:0 28px; }}
header {{ padding-top:40px; }}
h1 {{ font-size:30px; line-height:1.3; margin:0 0 6px; letter-spacing:0; }}
h2 {{ font-size:20px; margin:30px 0 12px; }}
.meta {{ color:var(--sub); font-size:14px; }}
.meta b, .app b {{ color:var(--ink); font-weight:600; font-variant-numeric:tabular-nums; }}
.apps {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(300px, 1fr)); gap:14px; }}
.app {{ display:flex; gap:14px; align-items:center; background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:12px; color:inherit; text-decoration:none; }}
.app img {{ width:64px; height:auto; border-radius:6px; border:1px solid var(--line); flex:none; }}
.app h3 {{ margin:0; font-size:16px; }}
.app p {{ margin:0; font-size:13px; color:var(--sub); }}
.filters {{ position:sticky; top:0; z-index:5; background:var(--bg); padding:12px 0 10px; border-bottom:1px solid var(--line); margin-bottom:16px; }}
.filters .line {{ display:flex; gap:6px; flex-wrap:wrap; align-items:center; margin:4px 0; }}
.filters .label {{ font-size:12px; color:var(--sub); width:64px; flex:none; }}
.chip {{ border:1px solid var(--line); background:var(--chip); color:var(--ink); border-radius:999px; padding:4px 11px; font:inherit; font-size:13px; cursor:pointer; min-height:30px; }}
.chip b {{ font-weight:500; color:var(--sub); font-variant-numeric:tabular-nums; }}
.chip[aria-pressed="true"] {{ background:var(--ink); color:var(--bg); border-color:var(--ink); }}
.chip[aria-pressed="true"] b {{ color:inherit; }}
.chip:focus-visible, a:focus-visible {{ outline:2px solid var(--accent); outline-offset:2px; }}
.count {{ font-size:13px; color:var(--sub); margin-left:70px; font-variant-numeric:tabular-nums; }}
.row {{ display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:16px; padding-bottom:80px; }}
.card {{ margin:0; background:var(--panel); border:1px solid var(--line); border-radius:8px; overflow:hidden; }}
.card[hidden] {{ display:none; }}
.shot {{ display:block; background:#000; }}
.shot img {{ display:block; width:100%; height:auto; }}
figcaption {{ padding:10px 12px 12px; }}
.kind {{ font-size:12px; color:var(--accent); font-weight:600; }}
.card h3 {{ font-size:14px; margin:2px 0 0; line-height:1.4; }}
dialog {{ border:0; padding:0; background:transparent; max-width:96vw; max-height:96vh; }}
dialog::backdrop {{ background:rgba(0,0,0,.78); }}
dialog img {{ display:block; max-height:94vh; max-width:94vw; border-radius:8px; }}
@media (max-width:520px) {{ header, main {{ padding:0 16px; }} header {{ padding-top:28px; }} h1 {{ font-size:24px; }} .row {{ grid-template-columns:repeat(2, 1fr); gap:10px; }} .filters .label {{ width:100%; }} .count {{ margin-left:0; }} }}
</style></head><body>
<header>
  <h1>한국 서비스 화면 모음</h1>
  <div class="meta">앱 <b>{len(apps)}</b>개 · 화면 <b>{total}</b>장 · 내부 시범, 이 컴퓨터에만 있습니다</div>
  <h2>앱</h2>
  <div class="apps">{"".join(tiles)}</div>
  <h2>모든 화면</h2>
</header>
<main>
  <div class="filters" role="group" aria-label="화면 걸러 보기">
    <div class="line"><span class="label">앱</span>{app_chips}</div>
    <div class="line"><span class="label">화면 유형</span>{chips(types, "type")}</div>
    <div class="line"><span class="label">패턴</span>{chips(common, "pattern")}</div>
    <div class="count" aria-live="polite"><span id="shown">{total}</span>장 보는 중 · 고른 것을 다시 누르면 풀립니다</div>
  </div>
  <div class="row">{"".join(cards)}</div>
</main>
<dialog id="zoom"><img alt=""></dialog>
<script>
const cards = [...document.querySelectorAll('.card')], chips = [...document.querySelectorAll('.chip')], picked = {{}};
function apply() {{
  let n = 0;
  for (const c of cards) {{
    const ok = (!picked.app || c.dataset.app === picked.app) && (!picked.type || c.dataset.type === picked.type) && (!picked.pattern || c.dataset.patterns.split('|').includes(picked.pattern));
    c.hidden = !ok; n += ok;
  }}
  document.getElementById('shown').textContent = n;
}}
for (const chip of chips) chip.addEventListener('click', () => {{
  const [key, value] = Object.entries(chip.dataset)[0];
  picked[key] = picked[key] === value ? null : value;
  for (const c of chips) if (key in c.dataset) c.setAttribute('aria-pressed', String(c.dataset[key] === picked[key]));
  apply();
}});
const zoom = document.getElementById('zoom');
for (const a of document.querySelectorAll('a.shot')) a.addEventListener('click', (e) => {{ e.preventDefault(); zoom.querySelector('img').src = a.href; zoom.showModal(); }});
zoom.addEventListener('click', () => zoom.close());
</script>
</body></html>
'''
(root / "index.html").write_text(page, encoding="utf-8")
print(f"{len(apps)} app(s), {total} screens → {root / 'index.html'}")
