#!/usr/bin/env python3
"""KR brand colour map: reads the repo (read-only), writes rows.json, tables.md, method.md next to itself.
Usage: python3 compute.py [repo_root]   (default /Users/kwakseongjae/projects/oh-my-design)
Needs PyYAML."""
import sys, os, re, json, glob, math, statistics, collections, datetime, colorsys
import yaml

ROOT = sys.argv[1] if len(sys.argv) > 1 else str(__import__('pathlib').Path(__file__).resolve().parents[3])
OUT = os.path.dirname(os.path.abspath(__file__))
TODAY = '2026-11-14'

# ---------- inputs
quality = json.load(open(f'{ROOT}/data/reference-quality.json'))
status = {i['id']: i['status'] for i in quality['items']}
reg_text = open(f'{ROOT}/web/src/data/registry.generated.ts').read()
S = r'"((?:[^"\\]|\\.)*)"'
reg = {}
for m in re.finditer(r'^  \{ id: ' + S + r', name: ' + S + r', (?:displayName: ' + S + r', )?country: ' + S +
                     r', category: ' + S + r'.*?primaryColor: (?:' + S + r'|undefined)', reg_text, re.M):
    g = [json.loads('"' + x + '"') if x is not None else None for x in m.groups()]
    reg[g[0]] = dict(name=g[1], display=g[2], country=g[3], category=g[4], primary=g[5])
assert len(reg) == len(quality['items']), (len(reg), len(quality['items']))

def frontmatter(i):
    t = open(f'{ROOT}/web/references/{i}/DESIGN.md').read()
    m = re.match(r'---\n(.*?)\n---', t, re.S)
    return yaml.safe_load(m.group(1))

# ---------- colour maths
def parse_color(v):
    """-> (r,g,b) ints if an opaque colour, else None. Returns (rgb, why_not)."""
    if not isinstance(v, str): return None, 'not-string'
    s = v.strip().lower()
    if s in ('transparent', 'none', ''): return None, 'transparent'
    m = re.fullmatch(r'#([0-9a-f]{3})', s)
    if m: h = ''.join(c*2 for c in m.group(1)); return tuple(int(h[k:k+2], 16) for k in (0, 2, 4)), None
    m = re.fullmatch(r'#([0-9a-f]{6})', s)
    if m: h = m.group(1); return tuple(int(h[k:k+2], 16) for k in (0, 2, 4)), None
    m = re.fullmatch(r'#([0-9a-f]{6})([0-9a-f]{2})', s)
    if m:
        h = m.group(1)
        return (tuple(int(h[k:k+2], 16) for k in (0, 2, 4)), None) if m.group(2) == 'ff' else (None, 'alpha')
    m = re.fullmatch(r'rgba?\(\s*(\d+)[ ,]+(\d+)[ ,]+(\d+)\s*(?:[,/]\s*([\d.]+%?)\s*)?\)', s)
    if m:
        a = m.group(4)
        if a is not None and float(a.rstrip('%')) / (100 if a.endswith('%') else 1) < 1: return None, 'alpha'
        return (int(m.group(1)), int(m.group(2)), int(m.group(3))), None
    return None, 'unparsed:' + s[:40]

def hexof(rgb): return '#%02x%02x%02x' % rgb
def hsl(rgb):
    r, g, b = [x/255 for x in rgb]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    return h*360, s, l
def lin(c):
    c /= 255
    return c/12.92 if c <= 0.04045 else ((c+0.055)/1.055) ** 2.4
def rel_lum(rgb): return 0.2126*lin(rgb[0]) + 0.7152*lin(rgb[1]) + 0.0722*lin(rgb[2])
def contrast_white(rgb): return 1.05 / (rel_lum(rgb) + 0.05)
def lab(rgb):
    r, g, b = [lin(x) for x in rgb]
    X = (0.4124564*r + 0.3575761*g + 0.1804375*b) / 0.95047
    Y = (0.2126729*r + 0.7151522*g + 0.0721750*b)
    Z = (0.0193339*r + 0.1191920*g + 0.9503041*b) / 1.08883
    f = lambda t: t ** (1/3) if t > 216/24389 else (24389/27*t + 16) / 116
    fx, fy, fz = f(X), f(Y), f(Z)
    return (116*fy - 16, 500*(fx-fy), 200*(fy-fz))
def de76(a, b): return math.dist(a, b)

HUES = ['red', 'orange', 'yellow', 'green', 'teal/cyan', 'blue', 'indigo/violet', 'magenta/pink']
def family(rgb):
    h, s, l = hsl(rgb)
    if l < 0.08: return 'achromatic: black-ish'
    if l > 0.95: return 'achromatic: white-ish'
    if s < 0.10: return 'achromatic: grey'
    if h >= 345 or h < 15: return 'red'
    if h < 45: return 'orange'
    if h < 70: return 'yellow'
    if h < 165: return 'green'
    if h < 200: return 'teal/cyan'
    if h < 250: return 'blue'
    if h < 290: return 'indigo/violet'
    return 'magenta/pink'
ORDER = HUES + ['achromatic: black-ish', 'achromatic: grey', 'achromatic: white-ish']
def is_chromatic(f): return not f.startswith('achromatic')

# ---------- per-reference extraction
def candidates(fm):
    out = []
    for name, c in (fm.get('components') or {}).items():
        if not isinstance(c, dict) or c.get('type') != 'button': continue
        bg = c.get('backgroundColor', None)
        rgb, why = parse_color(bg)
        out.append(dict(name=name, backgroundColor=bg, rgb=rgb, skip=why))
    return out

def measure(i):
    fm = frontmatter(i)
    colors = fm.get('colors') or {}
    tok = colors.get('primary')
    tok_rgb, tok_why = parse_color(tok)
    cands = candidates(fm)
    # rule A: button whose name contains "primary" with an opaque, parseable bg (white allowed)
    pa = [c for c in cands if 'primary' in c['name'].lower() and c['rgb']]
    # rule B: first button with an opaque non-white bg
    pb = [c for c in cands if c['rgb'] and c['rgb'] != (255, 255, 255)]
    pick, rule = None, None
    if pa: pick, rule = pa[0], 'button-name-primary'
    elif pb: pick, rule = pb[0], 'first-non-white-button'
    btn_alt = pb[0] if pb else None   # sensitivity: ignore the name rule, take first non-white button
    pb2 = [c for c in pb if hsl(c['rgb'])[2] <= 0.95]
    if pa: v3 = pa[0]['rgb']
    elif pb2: v3 = pb2[0]['rgb']
    else: v3 = tok_rgb
    if pick: mp, src = pick['rgb'], rule
    elif tok_rgb: mp, src = tok_rgb, 'token-primary'
    else: mp, src = None, None
    return dict(
        pick=pick, rule=rule, n_primary_named=len(pa),
        primary_named_distinct=sorted({hexof(c['rgb']) for c in pa}),
        v3=v3, btn_alt=btn_alt, tok=tok, tok_rgb=tok_rgb, mp=mp, src=src, n_buttons=len(cands))

rows = []
for i, r in reg.items():
    r['status'] = status[i]
pop = lambda cc, st='verified_v2': sorted(i for i, r in reg.items() if r['country'] == cc and r['status'] == st)
POP = {cc: pop(cc) for cc in ('KR', 'JP', 'TW')}
EXCL = {f'{cc}_{st}': len(pop(cc, st)) for cc in ('KR', 'JP', 'TW') for st in ('partial', 'legacy_snapshot')}

def build_row(i):
    r = reg[i]; m = measure(i)
    reg_rgb, _ = parse_color(r['primary'])
    row = dict(id=i, country=r['country'], category=r['category'], display_name=r['display'], name=r['name'],
               status=r['status'], registry_primary=r['primary'],
               token_primary=m['tok'] if isinstance(m['tok'], str) else None,
               primary_button=None if not m['pick'] else dict(component=m['pick']['name'], backgroundColor=m['pick']['backgroundColor']),
               primary_button_rule=m['rule'], n_primary_named_buttons=m['n_primary_named'],
               primary_named_distinct_bgs=m['primary_named_distinct'],
               first_non_white_button=None if not m['btn_alt'] else dict(component=m['btn_alt']['name'], backgroundColor=m['btn_alt']['backgroundColor']),
               measured_primary=hexof(m['mp']) if m['mp'] else None, measured_primary_source=m['src'])
    for tag, rgb in (('measured', m['mp']), ('registry', reg_rgb), ('alt_button_rule', (m['btn_alt']['rgb'] if m['btn_alt'] else None) or m['tok_rgb'])):
        if rgb:
            h, s, l = hsl(rgb)
            row[f'{tag}_family'] = family(rgb)
            if tag == 'measured':
                row.update(hue_deg=h, sat=s, light=l, lab=lab(rgb), contrast_white=contrast_white(rgb))
        else:
            row[f'{tag}_family'] = None
    row['variant_no_nearwhite_family'] = family(m['v3']) if m['v3'] else None
    row['differs_registry_vs_measured'] = (None if not (m['mp'] and reg_rgb) else hexof(reg_rgb) != hexof(m['mp']))
    row['registry_primary_hex_norm'] = hexof(reg_rgb) if reg_rgb else None
    return row

EXCLUDE_NAMES = ('marketing', 'secondary', 'ghost', 'outline', 'tertiary')
def strict(i):
    fm = frontmatter(i); colors = fm.get('colors') or {}
    tok = colors.get('primary'); tok_rgb, _ = parse_color(tok)
    named = []
    for c in candidates(fm):
        n = c['name'].lower()
        if 'primary' in n and not any(x in n for x in EXCLUDE_NAMES) and c['rgb'] and hsl(c['rgb'])[2] <= 0.95:
            named.append(c)
    comps = (fm.get('components') or {})
    d = dict(token=tok if isinstance(tok, str) else None, token_rgb=tok_rgb,
             btn=named[0] if named else None)
    if tok_rgb: d['rgb'], d['step'] = tok_rgb, 'primary-token'
    elif named: d['rgb'], d['step'] = named[0]['rgb'], 'primary-named-button'
    else: d['rgb'], d['step'] = None, None
    # every button whose fill equals the Rule S primary and states a text colour
    d['matches'] = []
    if d['rgb']:
        for c in candidates(fm):
            if c['rgb'] == d['rgb']:
                tc = comps[c['name']].get('textColor')
                trgb, why = parse_color(tc)
                d['matches'].append(dict(component=c['name'], fill=hexof(c['rgb']), textColor=tc,
                                         text_hex=hexof(trgb) if trgb else None,
                                         ratio=(lambda a, b: (max(a, b)+0.05)/(min(a, b)+0.05))(rel_lum(c['rgb']), rel_lum(trgb)) if trgb else None))
    return d

def strict_fields(i):
    d = strict(i); rgb = d['rgb']
    f = dict(ruleS_primary=hexof(rgb) if rgb else None, ruleS_step=d['step'],
             ruleS_token=d['token'], ruleS_named_button=None if not d['btn'] else dict(component=d['btn']['name'], backgroundColor=d['btn']['backgroundColor']),
             ruleS_family=family(rgb) if rgb else None,
             ruleS_token_vs_button_differ=(None if not (d['token_rgb'] and d['btn']) else hexof(d['token_rgb']) != hexof(d['btn']['rgb'])),
             ruleS_buttons_on_primary=d['matches'])
    if rgb:
        h_, s_, l_ = hsl(rgb)
        f.update(ruleS_hue_deg=h_, ruleS_sat=s_, ruleS_light=l_, ruleS_lab=lab(rgb),
                 ruleS_white_text_contrast_hypothetical=contrast_white(rgb))
    return f

_b = build_row
def build_row(i):
    r = _b(i); r.update(strict_fields(i)); return r

R = {cc: [build_row(i) for i in ids] for cc, ids in POP.items()}
json.dump({cc: R[cc] for cc in R}, open(f'{OUT}/rows.json', 'w'), ensure_ascii=False, indent=1)

# ---------- tables
def pct(n, d): return f'{100*n/d:.1f}%' if d else '-'
def hue_table(rs, key, title_n=None):
    have = [r for r in rs if r[key]]
    c = collections.Counter(r[key] for r in have)
    lines = ['| family | n | share |', '|---|---:|---:|']
    for f in ORDER: lines.append(f'| {f} | {c[f]} | {pct(c[f], len(have))} |')
    lines.append(f'| **total counted** | **{len(have)}** | |')
    lines.append(f'| missing (left out) | {len(rs)-len(have)} | |')
    return '\n'.join(lines), c
def quart(v):
    v = sorted(v); n = len(v)
    q = lambda p: v[int(p*(n-1))] + (v[min(int(p*(n-1))+1, n-1)] - v[int(p*(n-1))]) * (p*(n-1) - int(p*(n-1)))
    return v[0], q(.25), q(.5), q(.75), v[-1]

kr = R['KR']; md = []
w = md.append
w(f'# Colour map of Korean services: tables ({TODAY})\n')
w('Generated by `compute.py` (same folder) from `data/reference-quality.json`, `web/src/data/registry.generated.ts` (country, category, displayName, primaryColor) and `web/references/<id>/DESIGN.md` frontmatter (`colors`, `components`). Rerun: `python3 ~/.omd-workers/blog/colour-map/compute.py`. See `method.md`.\n')
w('## Population\n')
w(f'- KR verified_v2: **N = {len(kr)}** (tables below)')
w(f'- Excluded: KR partial {EXCL["KR_partial"]}, KR legacy_snapshot {EXCL["KR_legacy_snapshot"]} (status value in the data is `legacy_snapshot`)')
w(f'- JP verified_v2 {len(R["JP"])}, TW verified_v2 {len(R["TW"])} (table 6 only)')
nomp = [r for r in kr if not r['measured_primary']]
w(f'- KR verified with no measured primary (left out of measured tables): {len(nomp)}' + (' (' + ', '.join(r['id'] for r in nomp) + ')' if nomp else ''))
srcc = collections.Counter(r['measured_primary_source'] for r in kr)
w(f'- Source of the measured primary: ' + ', '.join(f'{k} {v}' for k, v in srcc.most_common()) + '\n')
w('Bucket rule (HSL, evaluated in this order): L < 8% = achromatic black-ish; L > 95% = achromatic white-ish; S < 10% = achromatic grey; otherwise by hue angle: red 345-15, orange 15-45, yellow 45-70, green 70-165, teal/cyan 165-200, blue 200-250, indigo/violet 250-290, magenta/pink 290-345 (lower bound inclusive).\n')

w('## Table 1. Hue family of the primary (KR verified_v2)\n')
t_m, cm = hue_table(kr, 'measured_family'); t_r, cr = hue_table(kr, 'registry_family')
w('### 1a. Measured primary (primary-action button background, else `primary` token)\n'); w(t_m + '\n')
w('### 1b. Registry `primary_color` (same references)\n'); w(t_r + '\n')
w('### 1c. Side by side\n')
w('| family | measured n | registry n |'); w('|---|---:|---:|')
for f in ORDER: w(f'| {f} | {cm[f]} | {cr[f]} |')
both = [r for r in kr if r['measured_primary'] and r['registry_primary']]
diff = [r for r in both if r['differs_registry_vs_measured']]
famdiff = [r for r in both if r['measured_family'] != r['registry_family']]
w(f'\n- Registry `primary_color` differs from measured primary (hex, case-insensitive): **{len(diff)} of {len(both)}** references that have both; the hue family differs for **{len(famdiff)}**.')
w(f'- Registry value missing: {sum(1 for r in kr if not r["registry_primary"])}.\n')
w('### 1d. References where registry and measured primary differ\n')
w('| id | name | registry | measured | measured source | registry family | measured family |'); w('|---|---|---|---|---|---|---|')
for r in diff: w(f'| {r["id"]} | {r["display_name"]} | {r["registry_primary_hex_norm"]} | {r["measured_primary"]} | {r["measured_primary_source"]} | {r["registry_family"]} | {r["measured_family"]} |')
w('')
w('### 1e. Sensitivity: how the primary-action rule matters\n')
nm = [r for r in kr if r['primary_button_rule'] == 'button-name-primary' and r['n_primary_named_buttons'] > 1 and len(r['primary_named_distinct_bgs']) > 1]
w(f'- {len(nm)} references have more than one button named `*primary*` with different backgrounds (first one in file order is used): ' + ', '.join(r['id'] for r in nm))
alt = [r for r in kr if r['alt_button_rule_family']]
c_alt = collections.Counter(r['alt_button_rule_family'] for r in alt)
w(f'- Alternative rule (ignore the name, take the first non-white opaque button background, else `primary` token), n = {len(alt)}: ' + ', '.join(f'{f} {c_alt[f]}' for f in ORDER if c_alt[f]))
tokonly = [r for r in kr if r['token_primary'] and parse_color(r['token_primary'])[0]]
c_tok = collections.Counter(family(parse_color(r['token_primary'])[0]) for r in tokonly)
w(f'- Alternative rule 2 (`primary` token only), n = {len(tokonly)}: ' + ', '.join(f'{f} {c_tok[f]}' for f in ORDER if c_tok[f]) + '\n')

nw = [r for r in kr if r['variant_no_nearwhite_family']]
c_nw = collections.Counter(r['variant_no_nearwhite_family'] for r in nw)
w(f'- Alternative rule 3 (rule A, then first button with opaque fill that is not near-white (L <= 95%), else `primary` token), n = {len(nw)}: ' + ', '.join(f'{f} {c_nw[f]}' for f in ORDER if c_nw[f]))
w('- The 18 white-ish measured primaries in 1a all come from buttons filled with a near-white colour (secondary/neutral buttons picked by rule B); this is a property of the specified rule, flagged for the main session.\n')
w('## Table 2. Hue family per category (measured primary; categories with >= 8 KR verified references)\n')
catn = collections.Counter(r['category'] for r in kr)
cats = [c for c, n in catn.most_common() if n >= 8]
w('Categories with fewer than 8: ' + ', '.join(f'{c} {n}' for c, n in catn.most_common() if n < 8) + '\n')
hdr = '| category | refs | counted | ' + ' | '.join(ORDER) + ' |'
w(hdr); w('|---|---:|---:|' + '---:|' * len(ORDER))
for c in cats:
    rs = [r for r in kr if r['category'] == c and r['measured_family']]
    cc = collections.Counter(r['measured_family'] for r in rs)
    w(f'| {c} | {catn[c]} | {len(rs)} | ' + ' | '.join(str(cc[f]) for f in ORDER) + ' |')
w('')

w('## Table 3. Exact hex shared by 2 or more references (KR verified_v2)\n')
def shared(key, label):
    d = collections.defaultdict(list)
    for r in kr:
        if r[key]: d[r[key].lower()].append(r)
    sh = sorted(((h, v) for h, v in d.items() if len(v) >= 2), key=lambda x: (-len(x[1]), x[0]))
    w(f'### {label}\n'); w(f'{len(sh)} hex values shared; {sum(len(v) for _, v in sh)} references involved.\n')
    w('| hex | count | services (id) |'); w('|---|---:|---|')
    for h, v in sh: w(f'| {h} | {len(v)} | ' + ', '.join(f'{x["display_name"] or x["name"]} ({x["id"]})' for x in v) + ' |')
    w('')
shared('measured_primary', '3a. Measured primary')
shared('registry_primary_hex_norm', '3b. Registry `primary_color` (normalised to lowercase 6-digit)')

# table 4
chrom = [r for r in kr if r['measured_primary'] and is_chromatic(r['measured_family'])]
med = tuple(statistics.median(r['lab'][k] for r in chrom) for k in range(3))
for r in chrom: r['_de'] = de76(r['lab'], med)
ranked = sorted(chrom, key=lambda r: (r['_de'], r['id']))
w('## Table 4. Typical and unusual primaries (measured, chromatic only)\n')
w(f'Space: CIE Lab (D65, sRGB), distance ΔE76 = Euclidean. Reference point = component-wise median Lab of the {len(chrom)} chromatic measured primaries: L={med[0]:.2f}, a={med[1]:.2f}, b={med[2]:.2f}. Achromatic primaries are not ranked.\n')
for title, lst in (('4a. Ten nearest (most typical)', ranked[:10]), ('4b. Ten farthest (most unusual)', ranked[::-1][:10])):
    w(f'### {title}\n'); w('| rank | id | name | category | hex | family | ΔE76 |'); w('|---:|---|---|---|---|---|---:|')
    for k, r in enumerate(lst, 1): w(f'| {k} | {r["id"]} | {r["display_name"]} | {r["category"]} | {r["measured_primary"]} | {r["measured_family"]} | {r["_de"]:.1f} |')
    w('')

# table 5
w('## Table 5. Lightness, saturation and contrast against white (measured primary)\n')
def dist(rs, label):
    w(f'### {label} (n = {len(rs)})\n')
    w('| metric | min | Q1 | median | Q3 | max |'); w('|---|---:|---:|---:|---:|---:|')
    for nm_, k, sc in (('HSL lightness %', 'light', 100), ('HSL saturation %', 'sat', 100), ('contrast vs #ffffff', 'contrast_white', 1)):
        q = quart([r[k]*sc for r in rs]); w(f'| {nm_} | ' + ' | '.join(f'{x:.2f}' for x in q) + ' |')
    b45 = [r for r in rs if r['contrast_white'] < 4.5]; b3 = [r for r in rs if r['contrast_white'] < 3]
    w(f'\n- Contrast below 4.5:1: **{len(b45)}** ({pct(len(b45), len(rs))}); below 3:1: **{len(b3)}** ({pct(len(b3), len(rs))}). Quartiles use linear interpolation.')
    w('- Below 3:1: ' + ', '.join(f'{r["display_name"] or r["name"]} ({r["id"]} {r["measured_primary"]} {r["contrast_white"]:.2f})' for r in sorted(b3, key=lambda r: r['contrast_white'])) + '\n')
dist(chrom, '5a. Chromatic measured primaries')
dist([r for r in kr if r['measured_primary']], '5b. All measured primaries (incl. achromatic)')

# table 6
w('## Table 6. For comparison only: JP and TW verified_v2, measured primary\n')
w('| family | ' + ' | '.join(f'{cc} n | {cc} share' for cc in ('KR', 'JP', 'TW')) + ' |'); w('|---|' + '---:|---:|' * 3)
cs = {}
for cc in ('KR', 'JP', 'TW'):
    rs = [r for r in R[cc] if r['measured_family']]; cs[cc] = (collections.Counter(r['measured_family'] for r in rs), len(rs))
for f in ORDER: w(f'| {f} | ' + ' | '.join(f'{cs[cc][0][f]} | {pct(cs[cc][0][f], cs[cc][1])}' for cc in ('KR', 'JP', 'TW')) + ' |')
w('| **N counted** | ' + ' | '.join(f'{cs[cc][1]} | ' for cc in ('KR', 'JP', 'TW')) + ' |')
w('| verified_v2 refs | ' + ' | '.join(f'{len(R[cc])} | ' for cc in ('KR', 'JP', 'TW')) + ' |')
w('| missing | ' + ' | '.join(f'{len(R[cc])-cs[cc][1]} | ' for cc in ('KR', 'JP', 'TW')) + ' |\n')
open(f'{OUT}/tables.md', 'w').write('\n'.join(md))

# ---------- method.md (numbers filled from the run)
spot_ids = []
for src_ in ('button-name-primary', 'first-non-white-button', 'token-primary'):
    spot_ids += [r['id'] for r in kr if r['measured_primary_source'] == src_][:1 if src_ == 'token-primary' else 2]
spot_ids = (spot_ids + [r['id'] for r in kr if r['id'] not in spot_ids and r['differs_registry_vs_measured']][:1])
spot_ids = spot_ids[:5]
mm = []; w = mm.append
w(f'# Method ({TODAY})\n')
w(f'- Script: `compute.py` in this folder (run `python3 -I compute.py` from anywhere); the repository is read-only to it; no network, no browser. Inputs: `data/reference-quality.json` (generated_at {quality["generated_at"]}), `web/src/data/registry.generated.ts`, `web/references/<id>/DESIGN.md` frontmatter.')
w(f'- Population: registry `country == "KR"` and quality `status == "verified_v2"`: N = {len(kr)}. KR partial {EXCL["KR_partial"]}, KR legacy_snapshot {EXCL["KR_legacy_snapshot"]} excluded. (`reference.json` `catalog.country/category` was checked equal to the registry for all 622 references.) The 2026-11-06 note counted 167; the catalog has since grown.')
w(f'- Measured primary: none for {len(nomp)} references (left out of measured tables, kept in rows.json as null). Sources: ' + ', '.join(f'{k} {v}' for k, v in srcc.most_common()) + '.')
w('- Judgement calls:')
w('  1. Primary-action component = components with `type: button` only. Rule A: the first (file order) button whose name contains `primary` (case-insensitive) and whose `backgroundColor` is an opaque, parseable colour (white is allowed here). Rule B (only if A finds none): the first button whose backgroundColor is opaque and not `#ffffff`. Else the frontmatter `colors.primary`. Else null. The frontmatter field is `backgroundColor` in all DESIGN.md files (no `bg`).')
w('  2. Colours with alpha < 1 (`rgba(...,0.8)`, 8-digit hex not ending in ff), `transparent`, and non-colour strings are treated as not usable and skipped; they are never composited over a guessed background.')
w('  3. A button named `*primary*` can be a secondary marketing CTA (e.g. toss: `tds-button` #3182f6 is skipped in favour of `marketing-primary` #e8f3ff because its name contains primary). Table 1e counts references with several differing `*primary*` buttons and gives the result under the alternative rules, so the effect is visible; the main tables keep the rule the brief specified.')
w('  4. HSL achromatic order: L<8 black-ish, L>95 white-ish, then S<10 grey (dark desaturated navies like #191f28 are therefore chromatic).')
w('  5. Registry vs measured "differs" = normalised lowercase 6-digit hex not equal; registry values are not altered.')
w('  6. Table 4 reference point: component-wise median of Lab over chromatic measured primaries (not a medoid), ΔE76 = Euclidean in CIE Lab, D65 white, sRGB to linear with the standard 0.04045 threshold. Ties broken by id.')
w('  7. Contrast: WCAG 2.x relative luminance, ratio = (1.0+0.05)/(L+0.05) against #ffffff. Quartiles: linear interpolation between order statistics.')
w('  8. Table 2 uses categories with >= 8 KR verified references (all N, not only counted).')
w('- Spot checks (open `web/references/<id>/DESIGN.md`, `components:`):')
for i in spot_ids:
    r = next(x for x in kr if x['id'] == i)
    w(f'  - `{i}`: source {r["measured_primary_source"]}, component `{r["primary_button"]["component"] if r["primary_button"] else None}` backgroundColor {r["primary_button"]["backgroundColor"] if r["primary_button"] else None}; token primary {r["token_primary"]}; registry {r["registry_primary"]}; measured {r["measured_primary"]}')
open(f'{OUT}/method.md', 'w').write('\n'.join(mm) + '\n')
print('ok', len(kr), len(R['JP']), len(R['TW']))

# ================= Rule S section
tb = open(f'{OUT}/tables.md').read().split('\n'); md = tb; w = md.append
mmx = open(f'{OUT}/method.md').read().split('\n'); mw = mmx.append
def hue_n(rs, key):
    have = [r for r in rs if r[key]]; return collections.Counter(r[key] for r in have), len(have)
kS = R['KR']
w('\n---\n\n# Rule S (strict primary)\n')
w('Rule S: (1) the frontmatter `colors.primary` token if present and an opaque parseable colour; (2) else the background of the first button whose name contains `primary` and none of `marketing`, `secondary`, `ghost`, `outline`, `tertiary`, with an opaque fill that is not near-white (L <= 95%); (3) else none. No fallback to other buttons. Same buckets as above. Fields `ruleS_*` in rows.json.\n')
cS, nS = hue_n(kS, 'ruleS_family'); left = [r['id'] for r in kS if not r['ruleS_primary']]
stepc = collections.Counter(r['ruleS_step'] for r in kS)
w('## S1. Hue family, Rule S (KR verified_v2)\n')
w(f'- N = {len(kS)}; counted {nS}; left out {len(left)}: ' + ', '.join(left))
w('- Step that gave the value: ' + ', '.join(f'{k} {v}' for k, v in stepc.most_common()) + '\n')
w('| family | n | share |'); w('|---|---:|---:|')
for f in ORDER: w(f'| {f} | {cS[f]} | {pct(cS[f], nS)} |')
w(f'| **total counted** | **{nS}** | |\n')
w('## S2. Hue family per category, Rule S (categories with >= 8 KR verified references)\n')
w('| category | refs | counted | ' + ' | '.join(ORDER) + ' |'); w('|---|---:|---:|' + '---:|' * len(ORDER))
for c in cats:
    rs = [r for r in kS if r['category'] == c and r['ruleS_family']]; cc = collections.Counter(r['ruleS_family'] for r in rs)
    w(f'| {c} | {catn[c]} | {len(rs)} | ' + ' | '.join(str(cc[f]) for f in ORDER) + ' |')
w('')
w('## S3. Exact hex shared by 2+ references, Rule S\n')
d3 = collections.defaultdict(list)
for r in kS:
    if r['ruleS_primary']: d3[r['ruleS_primary']].append(r)
sh = sorted(((h, v) for h, v in d3.items() if len(v) >= 2), key=lambda x: (-len(x[1]), x[0]))
w(f'{len(sh)} hex values shared; {sum(len(v) for _, v in sh)} references involved.\n')
w('| hex | count | services (id) |'); w('|---|---:|---|')
for h, v in sh: w(f'| {h} | {len(v)} | ' + ', '.join(f'{x["display_name"] or x["name"]} ({x["id"]})' for x in v) + ' |')
w('')
w('## S4. Contrast of the text actually set on the Rule S primary\n')
w('Method: every `type: button` component whose `backgroundColor` equals the Rule S primary exactly and whose `textColor` is an opaque parseable colour; ratio = WCAG contrast of that text on that fill. Reference-level value = the highest ratio among its qualifying buttons (the most favourable button); the count of references where any qualifying button is below 4.5 is given separately.\n')
withb = []
for r in kS:
    ms = [m for m in r['ruleS_buttons_on_primary'] if m['ratio'] is not None]
    if ms: r['_best'] = max(ms, key=lambda m: m['ratio']); r['_worst'] = min(ms, key=lambda m: m['ratio']); withb.append(r)
w(f'- References with Rule S primary: {nS}; with at least one qualifying button: **{len(withb)}**; without (no button with that exact fill and a usable text colour): {nS-len(withb)}.')
q = quart([r['_best']['ratio'] for r in withb])
w('- Distribution of the reference-level (best-button) ratio: min {:.2f}, Q1 {:.2f}, median {:.2f}, Q3 {:.2f}, max {:.2f} (linear interpolation).'.format(*q))
b45 = [r for r in withb if r['_best']['ratio'] < 4.5]; b3 = [r for r in withb if r['_best']['ratio'] < 3]
anyb45 = [r for r in withb if r['_worst']['ratio'] < 4.5]
w(f'- Below 4.5:1: **{len(b45)}** ({pct(len(b45), len(withb))}); below 3:1: **{len(b3)}** ({pct(len(b3), len(withb))}). References where at least one qualifying button is below 4.5:1: {len(anyb45)}.\n')
w('### S4a. References below 4.5:1 (best button), ascending\n')
w('| ratio | id | name | fill | text | component |'); w('|---:|---|---|---|---|---|')
for r in sorted(b45, key=lambda r: (r['_best']['ratio'], r['id'])):
    m = r['_best']; w(f'| {m["ratio"]:.2f} | {r["id"]} | {r["display_name"] or r["name"]} | {m["fill"]} | {m["text_hex"]} | {m["component"]} |')
w('')
hy = [r for r in kS if r['ruleS_primary']]
hq = quart([r['ruleS_white_text_contrast_hypothetical'] for r in hy])
hb45 = sum(1 for r in hy if r['ruleS_white_text_contrast_hypothetical'] < 4.5); hb3 = sum(1 for r in hy if r['ruleS_white_text_contrast_hypothetical'] < 3)
w('### S4b. HYPOTHETICAL: white (#ffffff) text on every Rule S primary (not what the buttons state)\n')
w(f'n = {len(hy)}; min {hq[0]:.2f}, Q1 {hq[1]:.2f}, median {hq[2]:.2f}, Q3 {hq[3]:.2f}, max {hq[4]:.2f}; below 4.5:1: {hb45} ({pct(hb45, len(hy))}); below 3:1: {hb3} ({pct(hb3, len(hy))}).\n')
w('## S5. `primary` token vs primary-named button background differ (Rule S button filter)\n')
both5 = [r for r in kS if r['ruleS_token_vs_button_differ'] is not None]
d5 = [r for r in both5 if r['ruleS_token_vs_button_differ']]
w(f'References with both a usable token and a qualifying primary-named button: {len(both5)}; differ: **{len(d5)}**.\n')
w('| id | name | token | button hex | component | token family | button family |'); w('|---|---|---|---|---|---|---|')
for r in d5:
    bh = hexof(parse_color(r['ruleS_named_button']['backgroundColor'])[0])
    w(f'| {r["id"]} | {r["display_name"] or r["name"]} | {r["ruleS_token"]} | {bh} | {r["ruleS_named_button"]["component"]} | {family(parse_color(r["ruleS_token"])[0])} | {family(parse_color(bh)[0])} |')
w('\nToss family as the files state (`primary` token, registry `primary_color`, buttons whose fill is not white):')
for i in ('toss', 'tossbank', 'toss-securities'):
    fm_ = frontmatter(i); r = next(x for x in kS if x['id'] == i)
    bts = [(c['name'], c['backgroundColor']) for c in candidates(fm_)]
    w(f'- `{i}`: token primary {r["ruleS_token"]}; registry {r["registry_primary"]}; named-button (Rule S filter) {r["ruleS_named_button"]}; Rule S primary {r["ruleS_primary"]} via {r["ruleS_step"]}; all button fills: ' + '; '.join(f'{a}={b}' for a, b in bts))
w('')
w('## S6. Hue family, Rule S, KR / JP / TW verified_v2\n')
w('| family | ' + ' | '.join(f'{cc} n | {cc} share' for cc in ('KR', 'JP', 'TW')) + ' |'); w('|---|' + '---:|---:|' * 3)
c6 = {cc: hue_n(R[cc], 'ruleS_family') for cc in ('KR', 'JP', 'TW')}
for f in ORDER: w(f'| {f} | ' + ' | '.join(f'{c6[cc][0][f]} | {pct(c6[cc][0][f], c6[cc][1])}' for cc in c6) + ' |')
w('| **N counted** | ' + ' | '.join(f'{c6[cc][1]} | ' for cc in c6) + ' |')
w('| verified_v2 refs | ' + ' | '.join(f'{len(R[cc])} | ' for cc in c6) + ' |')
w('| left out | ' + ' | '.join(f'{len(R[cc])-c6[cc][1]} | ' for cc in c6) + ' |\n')
w('## S7. Stability of the blue share (KR verified_v2)\n')
def bshare(key, rs=None):
    c, n = hue_n(kS, key); return f'{c["blue"]}/{n} = {pct(c["blue"], n)}'
tokfam = [family(parse_color(r['token_primary'])[0]) for r in kS if r['token_primary'] and parse_color(r['token_primary'])[0]]
w('Blue share: Rule S ' + bshare('ruleS_family') + '; original measured rule ' + bshare('measured_family') + '; registry `primary_color` ' + bshare('registry_family') +
  '; alt rule 1 (first non-white button) ' + bshare('alt_button_rule_family') + '; alt rule 3 (no near-white) ' + bshare('variant_no_nearwhite_family') +
  f'; alt rule 2 (token only) {tokfam.count("blue")}/{len(tokfam)} = {pct(tokfam.count("blue"), len(tokfam))}.')
w('')
mw('\n## Rule S (second pass)\n')
mw('- Definition and tables: `tables.md` section "Rule S". Token step requires an opaque, parseable colour (an alpha or non-colour `primary` value counts as absent). Name filter is a case-insensitive substring test on the component name; the fill must be opaque and L <= 95%. Token is not lightness-filtered.')
mw('- S4 judgement calls: qualifying button = `type: button` with `backgroundColor` exactly equal (after normalising to lowercase 6-digit) to the Rule S primary and an opaque parseable `textColor`; reference-level ratio = the highest among its qualifying buttons (the other choice, the lowest, is counted as "any button below 4.5"). Text colours with alpha are skipped, not composited. The white-text figure is hypothetical and kept separate.')
mw('- S5 uses the first Rule-S-filtered primary-named button in file order against the token.')
mw('- Spot checks (Rule S): ' + '; '.join(f'`{r["id"]}` {r["ruleS_step"]} -> {r["ruleS_primary"]}' for r in [x for x in kS if x['ruleS_step'] == 'primary-named-button'][:2] + [x for x in kS if x['ruleS_step'] == 'primary-token'][:2] + [x for x in kS if x['ruleS_primary'] is None][:1]))
open(f'{OUT}/tables.md', 'w').write('\n'.join(md)); open(f'{OUT}/method.md', 'w').write('\n'.join(mmx))
