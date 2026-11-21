#!/usr/bin/env python3
"""Figures for blog article 1 (korean-brand-colors-measured), Korean and English, desktop and phone.

Reads only rows.json, contrast-recheck.json and tables.md in this folder, checks every drawn count
against tables.md (any mismatch stops the run), and writes SVGs into
web/public/blog-assets/korean-brand-colors-measured/:

    figure-<name>.svg          Korean, 720 wide (desktop)
    figure-<name>-narrow.svg   Korean, 360 wide (phone, chosen by <picture> under 640px)
    figure-<name>-en.svg       English, 720 wide
    figure-<name>-en-narrow.svg

Every colour in a figure is a hex recorded in rows.json / tables.md; nothing is a screenshot.
Stdlib only, deterministic (same input, same bytes). ko.md is read only to check that the brand
names baked into the Korean figures match the article's link text.

Usage (from the repository root): python3 -I docs/research/2026-11-14-kr-brand-colours/figures.py
"""
import collections
import colorsys
import json
import os
import re
from xml.sax.saxutils import escape

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
OUT = os.path.join(ROOT, 'web', 'public', 'blog-assets', 'korean-brand-colors-measured')
KO_MD = os.path.join(ROOT, 'web', 'src', 'content', 'blog', 'korean-brand-colors-measured', 'ko.md')

ROWS = json.load(open(os.path.join(HERE, 'rows.json'), encoding='utf-8'))
RECHECK = json.load(open(os.path.join(HERE, 'contrast-recheck.json'), encoding='utf-8'))
TABLES = open(os.path.join(HERE, 'tables.md'), encoding='utf-8').read()


class DataMismatch(Exception):
    pass


def check(cond, msg):
    if not cond:
        raise DataMismatch(msg)


# ---------------------------------------------------------------- tables.md

def md_table(heading):
    """Rows (list of dicts) of the first pipe table after the line that starts with heading."""
    i = TABLES.index('\n' + heading)
    lines = TABLES[i + 1:].split('\n')[1:]
    out, header = [], None
    for ln in lines:
        if ln.startswith('|'):
            cells = [c.strip().strip('*').strip() for c in ln.strip().strip('|').split('|')]
            if header is None:
                header = cells
            elif set(ln.replace('|', '').strip()) <= set('-: '):
                continue
            else:
                out.append(dict(zip(header, cells)))
        elif header is not None:
            break
    check(out, 'no table under ' + heading)
    return out


def pct(s):
    return float(s.rstrip('%'))


# ---------------------------------------------------------------- colour

def rgb(hex_):
    h = hex_.lstrip('#')
    return tuple(int(h[k:k + 2], 16) / 255 for k in (0, 2, 4))


def hls(hex_):
    return colorsys.rgb_to_hls(*rgb(hex_))  # h 0..1, l, s


def lum(hex_):
    def ch(c):
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (ch(c) for c in rgb(hex_))
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(a, b):
    la, lb = sorted((lum(a), lum(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


FAMILIES = ['red', 'orange', 'yellow', 'green', 'teal/cyan', 'blue', 'indigo/violet', 'magenta/pink',
            'achromatic: black-ish', 'achromatic: grey', 'achromatic: white-ish']


def sort_key(hex_, family, ident):
    h, l, s = hls(hex_)
    if family.startswith('achromatic'):
        return (FAMILIES.index(family), l, 0, ident)
    return (FAMILIES.index(family), ((h * 360) + 15) % 360, l, ident)  # +15 keeps red (345-15) whole


def needs_outline(hex_):
    return contrast(hex_, '#ffffff') < 1.3


# ---------------------------------------------------------------- data, checked against tables.md

KR = ROWS['KR']
BY_ID = {r['id']: r for r in KR}
W_ROWS = sorted((r for r in KR if r.get('ruleW_family')),
                key=lambda r: sort_key(r['ruleW_primary'], r['ruleW_family'], r['id']))
W_COUNT = collections.Counter(r['ruleW_family'] for r in W_ROWS)

w1 = {row['family']: row for row in md_table('## W1.') if row['family'] in FAMILIES}
check(len(W_ROWS) == 169, 'Rule W counted %d, expected 169' % len(W_ROWS))
for f in FAMILIES:
    check(W_COUNT[f] == int(w1[f]['Rule W n']), 'W1 %s: rows %d vs table %s' % (f, W_COUNT[f], w1[f]['Rule W n']))
    check('%.1f%%' % (100 * W_COUNT[f] / 169) == w1[f]['Rule W share'], 'W1 share ' + f)

S_COUNTED = [r for r in KR if r.get('ruleS_family')]
ADDED = [r for r in W_ROWS if (r.get('ruleW_step') or '').startswith('file-main-token')]
LEFT_OUT = [r for r in KR if not r.get('ruleW_family')]
check((len(KR), len(S_COUNTED), len(ADDED), len(LEFT_OUT)) == (185, 153, 16, 16), 'population 185/153/16/16')
for r in S_COUNTED:
    check(r['ruleW_primary'] == r['ruleS_primary'], 'Rule W keeps Rule S value for ' + r['id'])

SECTORS = ['consumer-tech', 'fintech', 'ecommerce', 'ai', 'education', 'saas', 'healthcare']
w2 = {row['category']: row for row in md_table('## W2.')}
for c in SECTORS:
    members = [r for r in W_ROWS if r['category'] == c]
    check(len(members) == int(w2[c]['counted']), 'W2 counted ' + c)
    cc = collections.Counter(r['ruleW_family'] for r in members)
    for f in FAMILIES:
        check(cc[f] == int(w2[c][f]), 'W2 %s %s' % (c, f))

w3 = md_table('## W3.')
shared = collections.defaultdict(list)
for r in W_ROWS:
    shared[r['ruleW_primary'].lower()].append(r)
SHARED = [(hx, rs) for hx, rs in shared.items() if len(rs) > 1]
SHARED.sort(key=lambda t: (-len(t[1]), [row['hex'] for row in w3].index(t[0]) if t[0] in [row['hex'] for row in w3] else 99))
check([hx for hx, _ in SHARED] == [row['hex'] for row in w3], 'W3 hex order')
for (hx, rs), row in zip(SHARED, w3):
    check(len(rs) == int(row['count']), 'W3 count ' + hx)
    ids = re.findall(r'\(([a-z0-9-]+)\)', row['services (id)'])
    check(sorted(r['id'] for r in rs) == sorted(ids), 'W3 members ' + hx)
check(sum(len(rs) for _, rs in SHARED) == 26, 'W3 26 references')
# W3 lists members in table order; keep it
SHARED = [(hx, [BY_ID[i] for i in re.findall(r'\(([a-z0-9-]+)\)', row['services (id)'])], row['family'])
          for (hx, _), row in zip(SHARED, w3)]

w4a = {row['id']: row for row in md_table('### W4a.')}
KEPT = []
for rc in RECHECK['rows']:
    if not rc['verdict'].startswith('same'):
        continue
    row = w4a[rc['id']]
    check(row['fill'] == rc['recorded']['fill'] and row['text'] == rc['recorded']['text'], 'W4a fill/text ' + rc['id'])
    check(float(row['ratio']) == rc['recorded']['ratio'], 'W4a ratio ' + rc['id'])
    check(abs(contrast(row['fill'], row['text']) - float(row['ratio'])) < 0.006, 'ratio recompute ' + rc['id'])
    KEPT.append(row)
KEPT.sort(key=lambda row: (float(row['ratio']), row['id']))
check(len(KEPT) == 18, 'kept rows %d, expected 18' % len(KEPT))
check(sum(float(row['ratio']) < 3 for row in KEPT) == 5, 'kept below 3:1 = 5')
check(sum(row['family'] == 'blue' for row in KEPT) == 8, 'kept blue = 8')
check({row['text'] for row in KEPT} == {'#ffffff'}, 'kept text colour #ffffff')
LARGE_TEXT = {'laundrygo', 'payhere'}  # ko.md: 큰 글자 (DESIGN.md components typography, see fact map)

w5 = md_table('## W5.')
check(len(w5) == 7, 'W5 has 7 rules')
check(min(pct(r['blue share']) for r in w5) == 29.5 and max(pct(r['blue share']) for r in w5) == 36.6, 'W5 band')
check(max(pct(r['runner-up share']) for r in w5) == 13.2, 'W5 runner-up max')
t1b = {row['family']: row for row in md_table('### 1b.')}
check(t1b['red']['n'] == t1b['achromatic: black-ish']['n'] == '19', 'registry tie red/black-ish 19')

s6 = {row['family']: row for row in md_table('## S6.')}
COUNTRY = {}
for cc_ in ('KR', 'JP', 'TW'):
    rs = sorted((r for r in ROWS[cc_] if r.get('ruleS_family')),
                key=lambda r: sort_key(r['ruleS_primary'], r['ruleS_family'], r['id']))
    cnt = collections.Counter(r['ruleS_family'] for r in rs)
    for f in FAMILIES:
        check(cnt[f] == int(s6[f][cc_ + ' n']), 'S6 %s %s' % (cc_, f))
        check('%.1f%%' % (100 * cnt[f] / len(rs)) == s6[f][cc_ + ' share'], 'S6 share %s %s' % (cc_, f))
    COUNTRY[cc_] = rs
check(tuple(len(COUNTRY[c]) for c in ('KR', 'JP', 'TW')) == (153, 56, 29), 'S6 counted')

# ---------------------------------------------------------------- words

KO_NAME_OVERRIDE = {'dealicious': '신상마켓', 'toss-securities': '토스증권', 'yeogiotte': '여기어때', 'classum': '클라썸'}
EN_NAME_OVERRIDE = {'dealicious': 'Sinsang Market', 'yeogiotte': 'Yeogi Eottae', 'kb-kookmin': 'KB Kookmin Bank',
                    'lotteon': 'Lotte ON'}


def name(ident, lang):
    r = BY_ID[ident]
    if lang == 'ko':
        return KO_NAME_OVERRIDE.get(ident, r['display_name'])
    return EN_NAME_OVERRIDE.get(ident, r['name'])


ARTICLE_NAMES = dict((i, t) for t, i in re.findall(r'\[([^\]]+)\]\(https://oh-my-design\.kr/ko/design-systems/([a-z0-9-]+)\)',
                                                      open(KO_MD, encoding='utf-8').read()))

T = {
    'ko': {
        'fam': {'red': '빨강', 'orange': '주황', 'yellow': '노랑', 'green': '초록', 'teal/cyan': '청록', 'blue': '파랑',
                'indigo/violet': '남색·보라', 'magenta/pink': '자홍·분홍', 'achromatic: black-ish': '검정에 가까운 무채색',
                'achromatic: grey': '회색', 'achromatic: white-ish': '흰색에 가까운 무채색'},
        'n': '{}곳',
        'sector': {'consumer-tech': '컨슈머 테크', 'fintech': '핀테크', 'ecommerce': '커머스', 'ai': 'AI', 'education': '교육',
                   'saas': 'SaaS', 'healthcare': '헬스케어'},
        'wall': ('한국 서비스 169곳의 주 색', '칸 하나가 서비스 한 곳 · 색 계열별로 묶고 계열 안에서는 색상각 순'),
        'hues': ('주 색의 색 계열별 곳 수', '줄 하나가 서비스 한 곳의 주 색 · 규칙 W, 169곳'),
        'rules': ('주 색을 정하는 일곱 가지 방법과 파랑의 비율', '진한 막대는 파랑, 옅은 막대는 두 번째로 많은 계열'),
        'rule_names': ['이 글의 규칙 W', '첫 초안의 규칙 S', '처음 쓴 버튼 규칙', '카탈로그 데이터의 대표 색(primaryColor)',
                       '흰색이 아닌 첫 버튼의 배경색', 'primary 토큰만', '흰색에 가까운 버튼을 거른 버튼 규칙'],
        'tie': '{a}·{b} 각 {p}',
        'blue_val': '{n} · {p}',
        'sectors': ('분야별 주 색', '칸 하나가 셈에 든 서비스 한 곳 · 규칙 W, 레퍼런스가 8곳 이상인 분야'),
        'sector_sub': '{n}곳 중 파랑 {b}곳',
        'shared': ('두 곳 이상이 함께 쓰는 주 색 컬러 코드', 'hex가 글자 하나까지 같은 값 8개, 서비스 26곳'),
        'contrast': ('주 행동 버튼의 흰 글자 명도 대비, 18곳',
                     '기록된 배경색과 글자색으로 다시 그린 견본입니다. 화면 캡처가 아닙니다.'),
        'large': '큰 글자',
        'countries': ('한국·일본·대만의 주 색', '규칙 S · 띠마다 셈에 든 곳을 같은 너비로 나눠 한 곳씩'),
        'country': {'KR': '한국', 'JP': '일본', 'TW': '대만'},
        'method': ('검증 한국 레퍼런스 185곳에서 169곳으로', '칸 하나가 레퍼런스 한 곳'),
        'groups': ['1·2단계(규칙 S)로 주 색을 정한 곳', '3단계: 파일을 읽어 더한 곳', '정할 수 없어 뺀 곳'],
        'axis_pct': '{}%',
    },
    'en': {
        'fam': {'red': 'Red', 'orange': 'Orange', 'yellow': 'Yellow', 'green': 'Green', 'teal/cyan': 'Teal/cyan',
                'blue': 'Blue', 'indigo/violet': 'Indigo/violet', 'magenta/pink': 'Magenta/pink',
                'achromatic: black-ish': 'Near-black', 'achromatic: grey': 'Grey', 'achromatic: white-ish': 'Near-white'},
        'n': '{}',
        'sector': {'consumer-tech': 'Consumer tech', 'fintech': 'Fintech', 'ecommerce': 'Commerce', 'ai': 'AI',
                   'education': 'Education', 'saas': 'SaaS', 'healthcare': 'Healthcare'},
        'wall': ('Primary colours of 169 Korean services', 'One tile per service · grouped by hue family, by hue within each'),
        'hues': ('Primary colours by hue family', "Each stripe is one service's primary · Rule W, 169 services"),
        'rules': ("Blue's share under seven ways of choosing the primary", 'Dark bar: blue. Light bar: the second-largest family'),
        'rule_names': ['Rule W (this article)', 'Rule S (first draft)', 'First button rule', 'Catalogue primaryColor',
                       'First non-white button fill', 'primary token only', 'Button rule, near-white buttons filtered'],
        'tie': '{a} and {b}, {p} each',
        'blue_val': '{n} · {p}',
        'sectors': ('Primary colours by sector', 'One tile per counted service · Rule W, sectors with 8 or more references'),
        'sector_sub': '{b} of {n} blue',
        'shared': ('Primary hex values shared by two or more services', '8 exact values, 26 services'),
        'contrast': ('Contrast of the white label on the main action button, 18 services',
                     'Specimens redrawn from the recorded fill and label colours. Not screenshots.'),
        'large': 'large text',
        'countries': ('Primary colours in Korea, Japan and Taiwan', 'Rule S · each strip split evenly among its counted services'),
        'country': {'KR': 'Korea', 'JP': 'Japan', 'TW': 'Taiwan'},
        'method': ('From 185 verified Korean references to 169', 'One tile per reference'),
        'groups': ['Steps 1–2 (Rule S): primary found', 'Step 3: added after reading the file', 'Left out: no single primary'],
        'axis_pct': '{}%',
    },
}

# ---------------------------------------------------------------- svg primitives

# Chrome colours are site tokens from web/src/styles/brand-a.css (--sq-*); every other colour is a recorded brand hex.
INK, MUTED, RULE, HAIR = '#13131a', '#5a5a63', '#d3d3db', '#e5e6eb'  # n900, n600, n300, n200
GRID, MID, STEM = '#f3f3f8', '#a4a4ab', '#797981'  # n100, n400, n500
BAR, BAR2 = '#3f3f48', '#d3d3db'  # n700, n300
IRIS, IRIS_TINT, IRIS_EDGE = '#6749e2', '#eaebfe', '#d8d8ff'  # p600, p100, p200
FONT = "'Wanted Sans Variable', 'Wanted Sans', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif"


def num(v):
    s = ('%.2f' % v).rstrip('0').rstrip('.')
    return '0' if s == '-0' else s


def tw(s, size, weight=400):
    """Worst-case advance width: Hangul/CJK 1em, Latin and digits about 0.62-0.7em (leaves slack for
    Apple SD Gothic Neo and Noto Sans KR alike)."""
    w = 0.0
    for ch in s:
        o = ord(ch)
        if 0xAC00 <= o <= 0xD7A3 or 0x3000 <= o <= 0x9FFF or 0xFF00 <= o <= 0xFFEF:
            w += 1.0
        elif ch == ' ':
            w += 0.33
        elif ch in 'iljI.,:;|!\'()·':
            w += 0.4
        elif ch in 'mwMW%@':
            w += 0.95
        elif ch.isupper() or ch.isdigit() or ch in '#~–':
            w += 0.7
        else:
            w += 0.62
    return w * size * (1.07 if weight >= 600 else 1.0)


def wrap(words, size, maxw, sep=' ', weight=400):
    lines, cur = [], ''
    for wd in words:
        cand = wd if not cur else cur + sep + wd
        if tw(cand, size, weight) <= maxw or not cur:
            cur = cand
        else:
            lines.append(cur)
            cur = wd
    if cur:
        lines.append(cur)
    for ln in lines:
        check(tw(ln, size, weight) <= maxw, 'cannot fit "%s" in %d' % (ln, maxw))
    return lines


class Svg:
    def __init__(self, width):
        self.w = width
        self.el = []

    def text(self, x, y, s, size, fill=INK, weight=400, anchor='start', maxw=None, extra=''):
        if maxw is not None:
            check(tw(s, size, weight) <= maxw, 'label "%s" (%dpx) does not fit %s' % (s, size, num(maxw)))
        a = '' if anchor == 'start' else ' text-anchor="%s"' % anchor
        wt = '' if weight == 400 else ' font-weight="%d"' % weight
        self.el.append('<text x="%s" y="%s" font-size="%s" fill="%s"%s%s%s>%s</text>'
                       % (num(x), num(y), num(size), fill, wt, a, extra, s if s.startswith('<tspan') else escape(s)))

    def rich(self, x, y, parts, size, anchor='start', maxw=None):
        """parts: [(text, fill, weight)] on one line."""
        if maxw is not None:
            check(sum(tw(t, size, wgt) for t, _, wgt in parts) <= maxw, 'line "%s" does not fit' % ''.join(p[0] for p in parts))
        spans = ''.join('<tspan fill="%s"%s>%s</tspan>' % (f, '' if wgt == 400 else ' font-weight="%d"' % wgt, escape(t))
                        for t, f, wgt in parts)
        a = '' if anchor == 'start' else ' text-anchor="%s"' % anchor
        self.el.append('<text x="%s" y="%s" font-size="%s"%s>%s</text>' % (num(x), num(y), num(size), a, spans))

    def rect(self, x, y, w, h, fill, rx=0, stroke=None, sw=1):
        r = ' rx="%s"' % num(rx) if rx else ''
        s = ' stroke="%s" stroke-width="%s"' % (stroke, num(sw)) if stroke else ''
        self.el.append('<rect x="%s" y="%s" width="%s" height="%s"%s fill="%s"%s/>' % (num(x), num(y), num(w), num(h), r, fill, s))

    def swatch(self, x, y, w, h, hex_, rx=0):
        if needs_outline(hex_):
            self.rect(x + 0.5, y + 0.5, max(w - 1, 0.5), max(h - 1, 0.5), hex_, rx, RULE, 1)
        else:
            self.rect(x, y, w, h, hex_, rx)

    def line(self, x1, y1, x2, y2, stroke, sw=1, dash=None):
        d = ' stroke-dasharray="%s"' % dash if dash else ''
        self.el.append('<line x1="%s" y1="%s" x2="%s" y2="%s" stroke="%s" stroke-width="%s"%s/>'
                       % (num(x1), num(y1), num(x2), num(y2), stroke, num(sw), d))

    def circle(self, cx, cy, r, fill):
        self.el.append('<circle cx="%s" cy="%s" r="%s" fill="%s"/>' % (num(cx), num(cy), num(r), fill))

    def render(self, height, title, lang):
        h = int(round(height))
        head = ['<svg xmlns="http://www.w3.org/2000/svg" width="%d" height="%d" viewBox="0 0 %d %d" role="img" '
                'aria-label="%s" font-family="%s" lang="%s">' % (self.w, h, self.w, h, escape(title, {'"': '&quot;'}),
                                                                escape(FONT, {'"': '&quot;'}), lang),
                '<style>text{font-variant-numeric:tabular-nums}</style>',
                '<rect x="0.5" y="0.5" width="%d" height="%d" rx="16" fill="#ffffff" stroke="%s"/>' % (self.w - 1, h - 1, HAIR)]
        return '\n'.join(head + self.el + ['</svg>']) + '\n', h


class Geo:
    def __init__(self, narrow):
        self.narrow = narrow
        self.W = 360 if narrow else 720
        self.pad = 20 if narrow else 32
        self.title = 16 if narrow else 19
        self.sub = 12 if narrow else 14
        self.label = 12.5 if narrow else 14
        self.small = 12 if narrow else 13
        self.inner = self.W - 2 * self.pad


def header(svg, g, title, sub):
    y = g.pad + g.title
    for ln in wrap(title.split(' '), g.title, g.inner, weight=700):
        svg.text(g.pad, y, ln, g.title, INK, 700)
        y += g.title * 1.35
    y += 2
    for ln in wrap(sub.split(' '), g.sub, g.inner):
        svg.text(g.pad, y, ln, g.sub, MUTED)
        y += g.sub * 1.45
    return y + (14 if g.narrow else 18)


def p1(v):
    return '%.1f%%' % v

# ---------------------------------------------------------------- figures


def fig_wall(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['wall'])
    by_fam = collections.OrderedDict((f, [r for r in W_ROWS if r['ruleW_family'] == f]) for f in FAMILIES)
    if g.narrow:
        tile, gap = 20, 3
        cols = (g.inner + gap) // (tile + gap)
        for f, rs in by_fam.items():
            svg.rich(g.pad, y + 12, [(t['fam'][f], INK, 600), ('  ' + t['n'].format(len(rs)), MUTED, 400)], g.label, maxw=g.inner)
            y += 20
            for k, r in enumerate(rs):
                svg.swatch(g.pad + (k % cols) * (tile + gap), y + (k // cols) * (tile + gap), tile, tile, r['ruleW_primary'], 3)
            y += ((len(rs) - 1) // cols + 1) * (tile + gap) - gap + 14
    else:
        tile, gap, labw = 22, 4, 184
        x0 = g.pad + labw
        cols = (g.W - g.pad - x0 + gap) // (tile + gap)
        for f, rs in by_fam.items():
            nrows = (len(rs) - 1) // cols + 1
            svg.text(g.pad, y + 15, t['fam'][f], g.label, INK, 600, maxw=labw - 12)
            svg.text(g.pad, y + 33, t['n'].format(len(rs)), g.small, MUTED)
            for k, r in enumerate(rs):
                svg.swatch(x0 + (k % cols) * (tile + gap), y + (k // cols) * (tile + gap), tile, tile, r['ruleW_primary'], 3)
            y += max(40, nrows * (tile + gap) - gap) + 12
    return svg, y + g.pad - 12


def fig_hues(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['hues'])
    order = sorted(FAMILIES, key=lambda f: (-W_COUNT[f], FAMILIES.index(f)))
    vmax = max(W_COUNT.values())
    for f in order:
        rs = [r for r in W_ROWS if r['ruleW_family'] == f]
        n = len(rs)
        val = t['n'].format(n) + ' '
        share = '(%s)' % p1(100 * n / 169)
        if g.narrow:
            unit = g.inner / vmax
            svg.rich(g.pad, y + 12, [(t['fam'][f], INK, 600), ('  ' + val, INK, 400), (share, MUTED, 400)], g.label, maxw=g.inner)
            by, bh, x0 = y + 19, 14, g.pad
            y += 19 + bh + 14
        else:
            labw, right = 176, 112
            x0 = g.pad + labw
            unit = (g.W - g.pad - right - x0) / vmax
            svg.text(x0 - 12, y + 15, t['fam'][f], g.label, INK, 400, 'end', maxw=labw - 14)
            by, bh = y + 1, 20
            svg.rich(x0 + unit * n + 8, y + 16, [(val, INK, 400), (share, MUTED, 400)], g.label, maxw=right + unit * (vmax - n) - 8)
            y += 32
        for k, r in enumerate(rs):
            hx = r['ruleW_primary']
            if needs_outline(hx):
                svg.rect(x0 + k * unit + 0.5, by + 0.5, unit - 1, bh - 1, hx, 0, RULE, 1)
            else:
                svg.rect(x0 + k * unit, by, unit + 0.02, bh, hx)
    if not g.narrow:
        svg.line(g.pad + 176, header(Svg(g.W), g, *t['hues']) - 6, g.pad + 176, y - 6, RULE)
    return svg, y + g.pad - (12 if g.narrow else 4)


def fig_rules(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['rules'])
    x0, plot, vmax = g.pad, g.inner, 40.0

    def X(v):
        return x0 + plot * v / vmax
    rowh_name = g.label * 1.4
    top = y
    rows = []
    for k, row in enumerate(w5):
        nm = t['rule_names'][k]
        lines = wrap(nm.split(' '), g.label, g.inner - tw(' · ' + t['n'].format(999), g.small) - 4, weight=600)
        rows.append((row, lines))
    # band first (under everything)
    total = sum(len(lines) * rowh_name + 54 for _, lines in rows) - 8
    svg.rect(X(29.5), top - 4, X(36.6) - X(29.5), total + 2, IRIS_TINT)
    svg.line(X(29.5), top - 4, X(29.5), top + total - 2, IRIS_EDGE)
    svg.line(X(36.6), top - 4, X(36.6), top + total - 2, IRIS_EDGE)
    for v in (10, 20, 30, 40):
        svg.line(X(v), top - 4, X(v), top + total - 2, GRID)
    svg.line(X(0), top - 4, X(0), top + total - 2, RULE)
    for k, (row, lines) in enumerate(rows):
        for j, ln in enumerate(lines):
            parts = [(ln, INK, 600)]
            if j == len(lines) - 1:
                parts.append(('  ' + t['n'].format(row['counted']), MUTED, 400))
            svg.rich(x0 + 6, y + g.label + j * rowh_name, parts, g.label, maxw=g.inner - 6)
        y += len(lines) * rowh_name + 4
        b = pct(row['blue share'])
        svg.rect(X(0), y, X(b) - X(0), 18, BAR)
        bv = t['blue_val'].format(n=t['n'].format(row['blue n']), p=row['blue share'])
        svg.text(X(b) - 7, y + 13.5, bv, g.small, '#ffffff', 600, 'end', maxw=X(b) - X(0) - 10)
        y += 22
        ru = pct(row['runner-up share'])
        svg.rect(X(0), y, X(ru) - X(0), 9, BAR2)
        if row['rule'] == 'registry primaryColor':
            b2 = t['fam']['achromatic: black-ish']
            rl = t['tie'].format(a=t['fam']['red'], b=b2.lower() if lang == 'en' else b2, p=row['runner-up share'])
        else:
            rl = t['fam'][row['runner-up']] + ' ' + row['runner-up share']
        svg.text(X(ru) + 6, y + 9, rl, g.small, MUTED, 400, maxw=g.W - g.pad - X(ru) - 6)
        y += 28
    svg.text(X(33.05), top - 10, '29.5~36.6%', g.small, IRIS, 600, 'middle')
    y += 6
    for v in (0, 10, 20, 30, 40):
        svg.text(X(v), y + g.small, t['axis_pct'].format(v), g.small, MUTED, 400, 'start' if v == 0 else ('end' if v == 40 else 'middle'))
    return svg, y + g.small + g.pad - 4


def fig_sectors(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['sectors'])
    for c in SECTORS:
        rs = [r for r in W_ROWS if r['category'] == c]
        sub = t['sector_sub'].format(n=len(rs), b=w2[c]['blue'])
        if g.narrow:
            svg.rich(g.pad, y + 12, [(t['sector'][c], INK, 600), ('  ' + sub, MUTED, 400)], g.label, maxw=g.inner)
            tile, gap, x0, th = 5, 1, g.pad, 22
            ty = y + 20
            y += 20 + th + 14
        else:
            labw = 170
            svg.text(g.pad, y + 15, t['sector'][c], g.label, INK, 600, maxw=labw - 10)
            svg.text(g.pad, y + 33, sub, g.small, MUTED, maxw=labw - 10)
            tile, gap, x0, th = 8, 1, g.pad + labw, 34
            ty = y + 4
            y += 52
        check(len(rs) * (tile + gap) - gap <= g.W - g.pad - x0, 'sector strip too wide')
        for k, r in enumerate(rs):
            svg.swatch(x0 + k * (tile + gap), ty, tile, th, r['ruleW_primary'], 1)
    return svg, y + g.pad - 14


def fig_shared(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['shared'])
    sw = 32 if g.narrow else 44
    tx = g.pad + sw + (12 if g.narrow else 16)
    maxw = g.W - g.pad - tx
    for hx, rs, fam in SHARED:
        svg.swatch(g.pad, y, sw, sw, hx, 8)
        svg.rich(tx, y + g.label, [(hx, INK, 600), ('  ' + t['n'].format(len(rs)) + ' · ' + t['fam'][fam], MUTED, 400)],
                 g.label, maxw=maxw)
        names = [name(r['id'], lang) for r in rs]
        lines = wrap(names, g.small, maxw, sep=' · ')
        ly = y + g.label + (19 if g.narrow else 21)
        for ln in lines:
            svg.text(tx, ly, ln, g.small, INK)
            ly += g.small * 1.5
        y = max(y + sw, ly - g.small * 1.5 + 6) + (16 if g.narrow else 18)
    return svg, y + g.pad - 16


def fig_contrast(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['contrast'])
    bsize = 12.5 if g.narrow else 14
    names = {row['id']: name(row['id'], lang) for row in KEPT}
    bw = max(tw(n, bsize, 600) for n in names.values()) + (20 if g.narrow else 32)
    bw = max(bw, 104 if g.narrow else 132)
    bh = 30 if g.narrow else 34
    if g.narrow:
        ax0 = g.pad + bw + 12
        ax1 = g.W - g.pad - 54
        rowh = 40
    else:
        ax0 = g.pad + bw + 150
        ax1 = g.W - g.pad - 72
        rowh = 44
    check(ax1 - ax0 > 100, 'contrast axis too short (%s)' % num(ax1 - ax0))

    def X(r):
        return ax0 + (ax1 - ax0) * (r - 1) / 4.0  # 1:1 .. 5:1
    top = y + g.small + 8
    heights = [rowh + (14 if g.narrow and row['id'] in LARGE_TEXT else 0) for row in KEPT]
    bottom = top + sum(heights) - (rowh - bh)
    for r_, lab in ((3, '3:1'), (4.5, '4.5:1')):
        svg.line(X(r_), top - 4, X(r_), bottom + 4, MID, 1, '3 3')
        svg.text(X(r_), y + g.small, lab, g.small, MUTED, 600, 'middle')
    y = top
    for row, h in zip(KEPT, heights):
        r = float(row['ratio'])
        svg.rect(g.pad, y, bw, bh, row['fill'], 8)
        svg.text(g.pad + bw / 2, y + bh / 2 + bsize * 0.36, names[row['id']], bsize, row['text'], 600, 'middle', maxw=bw - 12)
        cy = y + bh / 2
        if not g.narrow:
            hx_x, room = g.pad + bw + 14, ax0 - (g.pad + bw + 14) - 8
            if row['id'] in LARGE_TEXT:
                svg.text(hx_x, cy - 3, row['fill'], g.small, MUTED, maxw=room)
                svg.text(hx_x, cy + 13, t['large'], g.small, MUTED, maxw=room)
            else:
                svg.text(hx_x, cy + g.small * 0.36, row['fill'], g.small, MUTED, maxw=room)
        elif row['id'] in LARGE_TEXT:
            svg.text(g.pad + 2, y + bh + 13, t['large'], 11.5, MUTED)
        svg.line(X(1), cy, X(r), cy, STEM, 1.5)
        svg.circle(X(r), cy, 4.5, INK)
        svg.text(g.W - g.pad, cy + g.small * 0.36, '%.2f:1' % r, g.small if g.narrow else g.label, INK, 600, 'end')
        y += h
    svg.line(X(1), top - 4, X(1), bottom + 4, RULE)
    return svg, y - (rowh - bh) + g.pad


def fig_countries(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['countries'])
    second = {'KR': 'red', 'JP': 'red', 'TW': 'teal/cyan'}
    sh = 28 if g.narrow else 36
    for cc_ in ('KR', 'JP', 'TW'):
        rs = COUNTRY[cc_]
        n = len(rs)
        svg.rich(g.pad, y + g.label, [(t['country'][cc_], INK, 600), ('  ' + t['n'].format(n), MUTED, 400)], g.label)
        sy = y + g.label + 8
        unit = g.inner / n
        for k, r in enumerate(rs):
            hx = r['ruleS_primary']
            svg.rect(g.pad + k * unit, sy, unit + 0.02, sh, hx)
        boxes = []
        for f in ('blue', second[cc_]):
            ks = [k for k, r in enumerate(rs) if r['ruleS_family'] == f]
            a, b = g.pad + ks[0] * unit, g.pad + (ks[-1] + 1) * unit
            by = sy + sh + 6
            svg.line(a, by, b, by, INK, 1.2)
            svg.line(a, by - 3, a, by + 0.6, INK, 1.2)
            svg.line(b, by - 3, b, by + 0.6, INK, 1.2)
            lab = t['fam'][f] + ' ' + s6[f][cc_ + ' share']
            w = tw(lab, g.small, 600)
            cx = min(max((a + b) / 2, g.pad + w / 2), g.W - g.pad - w / 2)
            ly = by + g.small + 6
            for (x1, x2, yy) in boxes:
                if yy == ly and not (cx + w / 2 + 8 < x1 or cx - w / 2 - 8 > x2):
                    ly += g.small + 6
            boxes.append((cx - w / 2, cx + w / 2, ly))
            svg.text(cx, ly, lab, g.small, INK if f == 'blue' else MUTED, 600, 'middle')
        y = max(b_[2] for b_ in boxes) + (20 if g.narrow else 26)
    return svg, y + g.pad - 20


def fig_method(lang, g):
    t = T[lang]
    svg = Svg(g.W)
    y = header(svg, g, *t['method'])
    tile, gap = (12, 2) if g.narrow else (16, 3)
    cols = (g.inner + gap) // (tile + gap)
    groups = [
        (sorted(S_COUNTED, key=lambda r: sort_key(r['ruleS_primary'], r['ruleS_family'], r['id'])), 'ruleS_primary'),
        (sorted(ADDED, key=lambda r: sort_key(r['ruleW_primary'], r['ruleW_family'], r['id'])), 'ruleW_primary'),
        (sorted(LEFT_OUT, key=lambda r: r['id']), None),
    ]
    for (rs, key), lab in zip(groups, t['groups']):
        svg.rich(g.pad, y + g.label, [(lab, INK, 600), ('  ' + t['n'].format(len(rs)), MUTED, 400)], g.label, maxw=g.inner)
        y += g.label + 8
        for k, r in enumerate(rs):
            x, yy = g.pad + (k % cols) * (tile + gap), y + (k // cols) * (tile + gap)
            if key:
                svg.swatch(x, yy, tile, tile, r[key], 2)
            else:
                svg.rect(x + 0.5, yy + 0.5, tile - 1, tile - 1, '#ffffff', 2, MID, 1)
        y += ((len(rs) - 1) // cols + 1) * (tile + gap) - gap + (16 if g.narrow else 20)
    return svg, y + g.pad - 16


FIGS = [('wall', fig_wall), ('hues', fig_hues), ('rules', fig_rules), ('sectors', fig_sectors),
        ('shared', fig_shared), ('contrast', fig_contrast), ('countries', fig_countries), ('method', fig_method)]


def main():
    # brand names baked into the Korean figures must read as the article names them
    used = {r['id'] for _, rs, _ in SHARED for r in rs} | {row['id'] for row in KEPT}
    for i in sorted(used):
        check(ARTICLE_NAMES.get(i) == name(i, 'ko'), 'name %s: figure "%s" vs ko.md "%s"' % (i, name(i, 'ko'), ARTICLE_NAMES.get(i)))
    os.makedirs(OUT, exist_ok=True)
    summary = []
    for stem, fn in FIGS:
        for lang in ('ko', 'en'):
            for narrow in (False, True):
                g = Geo(narrow)
                svg, height = fn(lang, g)
                body, h = svg.render(height, T[lang][stem][0], lang)
                fname = 'figure-%s%s%s.svg' % (stem, '-en' if lang == 'en' else '', '-narrow' if narrow else '')
                with open(os.path.join(OUT, fname), 'w', encoding='utf-8', newline='\n') as fh:
                    fh.write(body)
                summary.append('%-34s %dx%d %6d bytes' % (fname, g.W, h, len(body.encode('utf-8'))))
    print('\n'.join(summary))


if __name__ == '__main__':
    main()
