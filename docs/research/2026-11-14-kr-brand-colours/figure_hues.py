#!/usr/bin/env python3
"""Bar figure for blog article 1: KR hue families by count under Rule W.
Reads rows.json next to this file (written by compute.py), writes figure-hues.svg. Stdlib only.
Usage: python3 -I figure_hues.py"""
import os, json, collections
from xml.sax.saxutils import escape

HERE = os.path.dirname(os.path.abspath(__file__))
rows = json.load(open(os.path.join(HERE, 'rows.json')))['KR']
ORDER = ['red', 'orange', 'yellow', 'green', 'teal/cyan', 'blue', 'indigo/violet', 'magenta/pink',
         'achromatic: black-ish', 'achromatic: grey', 'achromatic: white-ish']
KO = {'red': '빨강', 'orange': '주황', 'yellow': '노랑', 'green': '초록', 'teal/cyan': '청록', 'blue': '파랑',
      'indigo/violet': '남색·보라', 'magenta/pink': '자홍·분홍', 'achromatic: black-ish': '검정에 가까운 무채색',
      'achromatic: grey': '회색', 'achromatic: white-ish': '흰색에 가까운 무채색'}
DATE = '2026-11-21'

counted = [r for r in rows if r.get('ruleW_family')]
c = collections.Counter(r['ruleW_family'] for r in counted)
n, total = len(counted), len(rows)
bars = sorted(ORDER, key=lambda f: (-c[f], ORDER.index(f)))

W, LEFT, RIGHT, TOP, ROW, BAR = 720, 180, 110, 92, 30, 18
plot = W - LEFT - RIGHT
H = TOP + ROW * len(bars) + 56
vmax = max(c.values())
INK, MUTED, BARC, RULE = '#1f2328', '#59636e', '#3b4654', '#d0d7de'
FONT = "Pretendard, 'Noto Sans KR', 'Apple SD Gothic Neo', sans-serif"

o = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="t d" font-family="{escape(FONT)}">',
     f'<rect width="{W}" height="{H}" fill="#ffffff"/>',
     f'<text id="t" x="24" y="36" font-size="19" font-weight="700" fill="{INK}">한국 서비스 {n}곳의 주 색, 색 계열별 곳 수</text>',
     f'<text id="d" x="24" y="62" font-size="13" fill="{MUTED}">oh-my-design 검증 한국 레퍼런스 {total}곳 중 주 색을 정할 수 있었던 {n}곳 · 계산 {DATE}</text>']
for k, f in enumerate(bars):
    y = TOP + k * ROW
    w = plot * c[f] / vmax
    o.append(f'<text x="{LEFT - 12}" y="{y + BAR / 2 + 5}" font-size="14" fill="{INK}" text-anchor="end">{escape(KO[f])}</text>')
    if c[f]:
        o.append(f'<rect x="{LEFT}" y="{y}" width="{w:.1f}" height="{BAR}" fill="{BARC}"><title>{escape(KO[f])} {c[f]}곳</title></rect>')
    o.append(f'<text x="{LEFT + w + 8:.1f}" y="{y + BAR / 2 + 5}" font-size="14" fill="{INK}">{c[f]}곳 <tspan fill="{MUTED}">({100 * c[f] / n:.1f}%)</tspan></text>')
o.append(f'<line x1="{LEFT}" y1="{TOP - 6}" x2="{LEFT}" y2="{TOP + ROW * len(bars) - ROW + BAR + 6}" stroke="{RULE}" stroke-width="1"/>')
o.append(f'<text x="24" y="{H - 20}" font-size="12" fill="{MUTED}">출처: docs/research/2026-11-14-kr-brand-colours/tables.md의 W1 (규칙 W). 색 계열은 HSL 색상각과 밝기·채도로 나눴습니다.</text>')
o.append('</svg>')
open(os.path.join(HERE, 'figure-hues.svg'), 'w').write('\n'.join(o) + '\n')
print('figure-hues.svg', n, 'of', total, dict((KO[f], c[f]) for f in bars))
