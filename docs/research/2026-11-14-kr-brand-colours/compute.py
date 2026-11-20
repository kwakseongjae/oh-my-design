#!/usr/bin/env python3
"""KR brand colour map: reads the repo (read-only), writes rows.json, tables.md, method.md next to itself.
Usage: python3 compute.py [repo_root]   (default /Users/kwakseongjae/projects/oh-my-design)
Needs PyYAML."""
import sys, os, re, json, glob, math, statistics, collections, datetime, colorsys
import yaml

ROOT = sys.argv[1] if len(sys.argv) > 1 else str(__import__('pathlib').Path(__file__).resolve().parents[3])
OUT = os.path.dirname(os.path.abspath(__file__))
TODAY = '2026-11-21'
FIRST_RUN = '2026-11-14'

# ---------- Rule W: the 32 KR verified references Rule S leaves out (judged 2026-11-21, by reading each file)
# Each entry names the frontmatter colour token the file itself presents as the main colour, the kind of evidence,
# and a quote that must appear verbatim in web/references/<id>/DESIGN.md (the script asserts it).
# basis: 'identity'  = the file names the value as the official / brand / catalogue identity colour
#        'action'    = the value is the fill of the service's main action in the file
#        '+registry' = the registry primaryColor is the same hex (allowed only because that hex is this token)
MAIN_TOKEN = {
    '11st':        dict(token='brand-red', basis='identity+registry', quote='**Brand red — `#FF0038`:**'),
    'brandi':      dict(token='action-direct', basis='action+registry', quote='**Direct purchase** (`#1e1e1e`): background of `.btn-buy` on both captured product pages.'),
    'catchtable':  dict(token='brand-orange', basis='identity+registry', quote='`#FF3D00` — careers-marketing action background; this is verified public brand expression'),
    'class101':    dict(token='brand', basis='identity+registry', quote='It is retained as the catalog primary color'),
    'hwahae':      dict(token='label', basis='action+registry', quote="so the catalogue's primary is the home page's full-width dark action `#3d3d3d`"),
    'kakao':       dict(token='login', basis='action+registry', quote='**Container** (`#fee500`): mandatory login-button background.'),
    'kb-kookmin':  dict(token='header-accent', basis='identity+registry', quote='`#ffcc00` is a selector-backed public-home header accent and the catalog identity colour'),
    'koexpressway': dict(token='service-fill', basis='action+registry', quote='| service-fill | `#063a74` | Four institutional service action links, including electronic procurement. |'),
    'melon':       dict(token='signature-green', basis='identity+registry', quote='| Signature green | **#00cd3c** |'),
    'naver':       dict(token='brand', basis='identity+registry', quote='**NAVER Green** (`#03C75A`): official logo and identity color.'),
    'nhis':        dict(token='nhis-primary', basis='identity+action+registry', quote='Treat the NHIS red as the product accent'),
    'ohouse':      dict(token='action', basis='action+registry', quote='**Action blue** (`#00a1ff`): Filled compact action background'),
    'oliveyoung':  dict(token='corporate-brand-green', basis='identity+registry', quote='also named Olive Green in Olive Young'),
    'remember':    dict(token='action-black', basis='action+registry', quote='**Action Black** (`#000000`): observed on the career header'),
    'shinhanbank': dict(token='brand-primary', basis='identity+registry', quote='**Shinhan Blue** (`#0046ff`): official CI primary color.'),
    'wooribank':   dict(token='brand-deep-blue', basis='identity+registry', quote='**Woori Deep Blue** (`#0067AC`): official logotype main color'),
}
CONTRAST_CHECK = {
    # verdict: 'main' = the measured (most favourable) button is the main action; 'other-button-is-main' = another qualifying
    # button on the same fill is, and is used instead; 'dropped' = the file does not make clear the control is the main action.
    'scatterlab':  dict(verdict='dropped', component='blog-header-cta', note='Blog-header link to the recruiting page, not a service action.', quote='채용공고 in the blog header'),
    'gaudiolab':   dict(verdict='main', component='cta-hero', note='The home hero action (Contact us).', quote='Hero Contact us link'),
    'jandi':       dict(verdict='main', component='header-primary-action', note='The file calls it the global navigation primary action, repeated on every captured page.', quote='Global navigation primary action'),
    'inflearn':    dict(verdict='dropped', component='product-search-submit', note='Icon-only search submit with no text, so there is no label whose contrast is measured.', quote='icon-only (no text node)'),
    'laundrygo':   dict(verdict='dropped', component='recruit-button', note='Recruiting banner button; the other buttons on this fill are B2B inquiry actions, not the consumer service action.', quote='채용공고 보러가기 on the recruiting banner'),
    'banksalad':   dict(verdict='dropped', component='hero-pill-cta', note='Hero carousel pill that other slides recolour; the file gives the primary-action button a different fill (#06a96c).', quote='other slides recolour the same pill'),
    'douzone':     dict(verdict='dropped', component='solution-menu', note='Dropdown menu trigger (solution shortcut), not an action.', quote='솔루션 바로가기 is a native button'),
    'miricanvas':  dict(verdict='other-button-is-main', component='hero-primary-cta', note='The home hero filled action (same fill and text as the header button).', quote='Home hero filled action'),
    'pinkfong':    dict(verdict='dropped', component='corporate-primary-action', note='Corporate-site and business-page CTAs; the file does not tie either to a service action.', quote='one public corporate CTA'),
    'ohouse':      dict(verdict='dropped', component='compact-blue-action', note='Header write-post (글쓰기) button; the file does not present it as the main action.', quote='Header 글쓰기 action'),
    'karrot':      dict(verdict='main', component='box-button', note='The SEED design system action button; this fill is its primary variant.', quote='primary, primary-low, secondary, danger, disabled'),
    'stibee':      dict(verdict='main', component='button-primary', note='Sign-up start (무료로 시작하기) in the header of every page; the hero uses the same fill and text.', quote='무료로 시작하기 in the header of all three captured pages'),
    'idus':        dict(verdict='main', component='button-primary', note='The product page purchase action (구매하기).', quote="구매하기, the product page's purchase action"),
    'myrealtrip':  dict(verdict='dropped', component='primary-header-action', note='Header action whose purpose the file does not state.', quote='Public home and hotel-header action'),
    'moreh':       dict(verdict='dropped', component='primary-button', note='Demo-request link; the file does not call it the primary action.', quote='Request Demo on moreh.io'),
    'ably':        dict(verdict='dropped', component='corporate-primary', note='Corporate team-site action (recruiting) and seller-site entry, not the shopping service.', quote='Current ABLY Team primary action'),
    'greeting':    dict(verdict='dropped', component='header-demo-button', note='Header inquiry link (도입 문의).', quote='도입 문의 at the right end of the header'),
    'petfriends':  dict(verdict='dropped', component='app-install-button', note='App-install prompt in an overlay sheet for logged-out visitors.', quote='APP 설치하기 in the app-install sheet'),
    'yeogiotte':   dict(verdict='other-button-is-main', component='search-cta', note="The home search submit; searching for a stay is the first primary task the file lists.", quote="Home search submit '검색'"),
    'classum':     dict(verdict='other-button-is-main', component='medium-primary-action', note='The home hero primary action.', quote='Home hero primary action'),
    'shiftup':     dict(verdict='dropped', component='slider-arrow', note='Previous/next arrows of a slider.', quote='Previous and next arrows of the games slider'),
    'catchtable':  dict(verdict='dropped', component='careers-orange-action', note='Careers-site marketing actions, not the restaurant service.', quote='Careers-service marketing action'),
    'buzzvil':     dict(verdict='dropped', component='contact-button', note='Header inquiry link (문의하기).', quote='문의하기 with an arrow icon in the fixed header'),
    'toss':        dict(verdict='main', component='tds-button', note='The TDS design system primary action button.', quote='TDS Mobile xlarge primary action'),
    'toss-securities': dict(verdict='main', component='wts-primary-entry', note='The file calls it the public WTS primary link-action.', quote='Public WTS compact primary link-action'),
    'moin':        dict(verdict='main', component='button-primary', note='Start-remittance action (송금 시작하기) of the exchange widget.', quote='Exchange widget button 송금 시작하기'),
    'munpia':      dict(verdict='dropped', component='login-primary', note='Sign-in button in the account panel.', quote='로그인 button in the right account panel'),
    'watcha':      dict(verdict='dropped', component='button-primary', note='Header sign-in link.', quote='Header 로그인 link to sign-in'),
    'protopie':    dict(verdict='main', component='primary-button', note='Get started for free in the home hero.', quote='Get started for free in the home hero'),
    'socar':       dict(verdict='main', component='primary-action', note='Booking from the web (웹에서 예약하기); booking a car is the service action.', quote='on the /guide 웹에서 예약하기 link'),
    'teamsparta':  dict(verdict='main', component='enroll-cta', note='Course enrolment action (수강신청하기).', quote='수강신청하기, the enrolment action of the course page'),
    'payhere':     dict(verdict='dropped', component='purchase-button', note='Purchase buttons on two hardware cards; the file does not present them as the service action.', quote='구입하기 → closing the two hardware cards'),
    'heydealer':   dict(verdict='main', component='primary-button', note='The car-search action under the brand/type/model selects on home, and 10초 만에 확인 on /sell.', quote='The count-and-보기 action under the brand, type and model selects'),
    'goodoc':      dict(verdict='dropped', component='app-download', note='Header app-download button.', quote='Header 앱 다운로드 button'),
}

# Left out: the file does not let one main colour be told. kind: 'ink-only' = the registry value is only a text/ink token;
# 'not-a-token' = the registry value is not among the frontmatter colour tokens; 'declined' = the file declines to name one;
# 'two-candidates' = the file gives two values without ranking them.
LEFT_OUT = {
    'cgv':          dict(kind='declined', note='Registry #121212 is the `foreground` text ink; the red #fc5555 is kept as a signal colour.', quote='it is preserved as a signal value, not promoted to a primary or state palette'),
    'coupang':      dict(kind='ink-only', note='Registry #000000 is the `foreground` text ink; no brand fill was captured.', quote='No live computed Coupang-red fill, WOW color, or semantic status color was present in the supplied capture.'),
    'datarize':     dict(kind='two-candidates', note='Two near-black CTA fills: `action` #111111 (home CTA, black-ish) and `ink` #191919 (shared CTA, grey; also the registry value). The file does not rank them and they fall in different buckets.', quote='**Action Ink** (`#111111`): Captured 50px home CTA fill'),
    'flex':         dict(kind='two-candidates', note='The file calls #000000 the catalog primary (not a frontmatter token) and gives lime `action-lime` #00ff44 to the primary conversion action.', quote='`#000000` — public-surface black field and the catalog primary color'),
    'gangnamunni':  dict(kind='not-a-token', note='Registry #d54300 is not a token; the file says no orange is offered.', quote='no orange value is offered as a reusable UI token'),
    'hyundaicard':  dict(kind='declined', note='Registry #000000 is the `ink` token; the file declines a brand primary.', quote='neither is promoted as a universal brand primary'),
    'kakaogames':   dict(kind='ink-only', note='Registry #000000 is the `ink` text token; no other colour role.', quote='**Ink** (`#000000`): dominant observed public text and border color'),
    'kakaot':       dict(kind='not-a-token', note='Registry #ffe100 is the app-icon yellow, not a token.', quote='no yellow native call-button fill is established here'),
    'megastudy':    dict(kind='declined', note='`action-blue` #057eff equals the registry but is hover text only; the corporate colour is given only as Pantone 285 C.', quote='No RGB conversion is inferred from that print specification.'),
    'millie':       dict(kind='ink-only', note='Registry #242424 is the `ink` text token.', quote='**Primary ink** (`#242424`): high-confidence computed text and border colour'),
    'ridi':         dict(kind='two-candidates', note='Two blues, token `blue` #1f9eff and rendered `selected-blue` #1e9eff (the registry value); the second is a selected-state fill, not a main action.', quote='Do not normalize the two blue values into one'),
    'sktelecom':    dict(kind='declined', note='Registry #3a46cd is `brand-link`, a current-page link colour; the file declines a T Blue hex.', quote='This reference therefore does not manufacture a T Blue hex'),
    'tving':        dict(kind='not-a-token', note='Registry #ff153c is not a token.', quote='does not provide computed selector evidence for a red CTA'),
    'upbit':        dict(kind='declined', note='`accent` #0062df equals the registry but the file gives it no role.', quote='not assigned a universal semantic role'),
    'wavve':        dict(kind='not-a-token', note='Registry #1351f9 appears in the prose table as a CSS primary-button declaration but is not a frontmatter colour token, and no such button was exercised.', quote='A matching primary CTA was not exercised in this capture.'),
    'zigzag':       dict(kind='ink-only', note='Registry #121212 is the `strong` text token; the buy button is #121314, which is not a token.', quote='**Strong detail text** (`#121212`)'),
}

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


def buttons_on(i, rgb):
    fm = frontmatter(i); comps = fm.get('components') or {}; out = []
    for c in candidates(fm):
        if c['rgb'] == rgb:
            tc = comps[c['name']].get('textColor'); trgb, _ = parse_color(tc)
            out.append(dict(component=c['name'], fill=hexof(c['rgb']), textColor=tc, text_hex=hexof(trgb) if trgb else None,
                            ratio=(lambda a, b: (max(a, b)+0.05)/(min(a, b)+0.05))(rel_lum(c['rgb']), rel_lum(trgb)) if trgb else None))
    return out

def design_text(i): return open(f'{ROOT}/web/references/{i}/DESIGN.md').read()

def widened_fields(i, r):
    """Rule W = Rule S, then (KR only) the token the file itself presents as the main colour (MAIN_TOKEN)."""
    f = dict(ruleW_primary=None, ruleW_step=None, ruleW_basis=None, ruleW_family=None, ruleW_buttons_on_primary=[])
    if r['ruleS_primary']:
        rgb = parse_color(r['ruleS_primary'])[0]
        f.update(ruleW_step='ruleS:' + r['ruleS_step'], ruleW_buttons_on_primary=r['ruleS_buttons_on_primary'])
    elif r['country'] == 'KR' and i in MAIN_TOKEN:
        e = MAIN_TOKEN[i]; v = (frontmatter(i).get('colors') or {}).get(e['token'])
        rgb, why = parse_color(v)
        assert rgb, (i, e['token'], v, why)
        assert e['quote'] in design_text(i), ('quote not in file', i)
        if 'registry' in e['basis']:
            assert hexof(parse_color(r['registry_primary'])[0]) == hexof(rgb), ('registry differs', i)
        f.update(ruleW_step='file-main-token:' + e['token'], ruleW_basis=e['basis'], ruleW_buttons_on_primary=buttons_on(i, rgb))
    else:
        return f
    h_, s_, l_ = hsl(rgb)
    f.update(ruleW_primary=hexof(rgb), ruleW_family=family(rgb), ruleW_hue_deg=h_, ruleW_sat=s_, ruleW_light=l_,
             ruleW_white_text_contrast_hypothetical=contrast_white(rgb))
    return f

_b = build_row
def build_row(i):
    r = _b(i); r.update(strict_fields(i)); r.update(widened_fields(i, r)); return r

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
w('Generated by `compute.py` (same folder) from `data/reference-quality.json`, `web/src/data/registry.generated.ts` (country, category, displayName, primaryColor) and `web/references/<id>/DESIGN.md` frontmatter (`colors`, `components`). Rerun: `python3 docs/research/2026-11-14-kr-brand-colours/compute.py` from the repository root. See `method.md`.\n')
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

# ================= Rule W section (widened Rule S; the article's rule from 2026-11-21)
kW = R['KR']
noS = {r['id'] for r in kW if not r['ruleS_primary']}
assert noS == set(MAIN_TOKEN) | set(LEFT_OUT) and not (set(MAIN_TOKEN) & set(LEFT_OUT)), (sorted(noS ^ (set(MAIN_TOKEN) | set(LEFT_OUT))))
for i, e in LEFT_OUT.items(): assert e['quote'] in design_text(i), ('quote not in file', i)
cWc, nW = hue_n(kW, 'ruleW_family'); leftW = [r['id'] for r in kW if not r['ruleW_primary']]
w('\n---\n\n# Rule W (Rule S widened; the article uses this rule from ' + TODAY + ')\n')
w('Rule W: Rule S first. For a KR reference Rule S leaves out, the frontmatter colour token that the reference file itself presents as the main colour (official/brand/catalogue identity colour, or the fill of its main action), listed by id in `MAIN_TOKEN` in compute.py with a quote the script finds verbatim in the file. The registry `primaryColor` is used only as corroboration and only where the same hex is that token. References whose file does not let one main colour be told stay out (`LEFT_OUT`, with the reason). Per-reference evidence: `missing-32.md`. Fields `ruleW_*` in rows.json. JP and TW are not widened.\n')
w('## W1. Hue family, Rule W (KR verified_v2), with Rule S beside it\n')
w(f'- N = {len(kW)}; counted {nW} (Rule S {nS}); added by the widening {nW-nS}; left out {len(leftW)}: ' + ', '.join(leftW))
w('- Step that gave the value: ' + ', '.join(f'{k} {v}' for k, v in collections.Counter((r['ruleW_step'] or 'none').split(':')[0] for r in kW).most_common()) + '\n')
added = [r for r in kW if r['ruleW_primary'] and not r['ruleS_primary']]
cAdd = collections.Counter(r['ruleW_family'] for r in added)
w('| family | Rule W n | Rule W share | Rule S n | Rule S share | added by widening |'); w('|---|---:|---:|---:|---:|---:|')
for f in ORDER: w(f'| {f} | {cWc[f]} | {pct(cWc[f], nW)} | {cS[f]} | {pct(cS[f], nS)} | {cAdd[f]} |')
w(f'| **total counted** | **{nW}** | | **{nS}** | | **{len(added)}** |\n')
w('Added references (id, token, hex, family): ' + '; '.join(f'{r["id"]} {r["ruleW_step"].split(":")[1]} {r["ruleW_primary"]} {r["ruleW_family"]}' for r in added) + '\n')

w('## W2. Hue family per category, Rule W (categories with >= 8 KR verified references)\n')
w('| category | refs | counted | ' + ' | '.join(ORDER) + ' |'); w('|---|---:|---:|' + '---:|' * len(ORDER))
for c in cats:
    rs = [r for r in kW if r['category'] == c and r['ruleW_family']]; cc = collections.Counter(r['ruleW_family'] for r in rs)
    w(f'| {c} | {catn[c]} | {len(rs)} | ' + ' | '.join(str(cc[f]) for f in ORDER) + ' |')
w('')
w('## W3. Exact hex shared by 2+ references, Rule W\n')
dW = collections.defaultdict(list)
for r in kW:
    if r['ruleW_primary']: dW[r['ruleW_primary']].append(r)
shW = sorted(((h, v) for h, v in dW.items() if len(v) >= 2), key=lambda x: (-len(x[1]), x[0]))
w(f'{len(shW)} hex values shared; {sum(len(v) for _, v in shW)} references involved.\n')
w('| hex | count | family | services (id) |'); w('|---|---:|---|---|')
for h, v in shW: w(f'| {h} | {len(v)} | {family(parse_color(h)[0])} | ' + ', '.join(f'{x["display_name"] or x["name"]} ({x["id"]})' for x in v) + ' |')
w('')

w('## W4. Contrast of the text set on the Rule W primary, and which rows are the main action\n')
w('Same method as S4 (every `type: button` whose fill equals the Rule W primary exactly and whose text colour is opaque; reference value = the most favourable such button). Then every reference below 4.5:1 was checked against its own DESIGN.md (' + TODAY + ', files only, no browser): is the measured control that service\'s main action? `CONTRAST_CHECK` in compute.py holds the verdict and a quote the script finds verbatim in the file. If the most favourable button is not the main action but another qualifying button is, that button is used.\n')
withW = []
for r in kW:
    ms = [m for m in r['ruleW_buttons_on_primary'] if m['ratio'] is not None]
    if ms: r['_bestW'] = max(ms, key=lambda m: m['ratio']); r['_worstW'] = min(ms, key=lambda m: m['ratio']); withW.append(r)
qW = quart([r['_bestW']['ratio'] for r in withW])
bW45 = [r for r in withW if r['_bestW']['ratio'] < 4.5]; bW3 = [r for r in withW if r['_bestW']['ratio'] < 3]
w(f'- References with Rule W primary: {nW}; with at least one qualifying button: **{len(withW)}**; without: {nW-len(withW)}.')
w('- Reference-level ratio: min {:.2f}, Q1 {:.2f}, median {:.2f}, Q3 {:.2f}, max {:.2f}.'.format(*qW))
w(f'- Below 4.5:1: **{len(bW45)}** ({pct(len(bW45), len(withW))}); below 3:1: **{len(bW3)}** ({pct(len(bW3), len(withW))}); any qualifying button below 4.5:1: {sum(1 for r in withW if r["_worstW"]["ratio"] < 4.5)}.')
rowsW4 = []; unchecked = []
for r in sorted(bW45, key=lambda r: (r['_bestW']['ratio'], r['id'])):
    chk = CONTRAST_CHECK.get(r['id'])
    if not chk: unchecked.append(r['id']); continue
    assert chk['quote'] in design_text(r['id']), ('quote not in file', r['id'])
    m = r['_bestW']
    if chk['verdict'] == 'main':
        assert chk['component'] == m['component'], (r['id'], chk['component'], m['component'])
    elif chk['verdict'] == 'other-button-is-main':
        m = next(x for x in r['ruleW_buttons_on_primary'] if x['component'] == chk['component'])
    rowsW4.append((r, m, chk))
assert not unchecked or os.environ.get('OMD_ALLOW_UNCHECKED'), ('no main-action verdict for', unchecked)
kept = [(r, m, c) for r, m, c in rowsW4 if c['verdict'] in ('main', 'other-button-is-main') and m['ratio'] < 4.5]
w(f'- Of the {len(bW45)} below 4.5:1, the file makes clear that the measured control is the main action for **{len(kept)}**; {len(bW45)-len(kept)} are dropped from any named list (W4b).\n')
w('### W4a. Named rows kept: the main action, below 4.5:1, ascending\n')
w('| ratio | id | name | family | fill | text | component | why this is the main action (from the file) |'); w('|---:|---|---|---|---|---|---|---|')
for r, m, c in sorted(kept, key=lambda x: (x[1]['ratio'], x[0]['id'])):
    w(f'| {m["ratio"]:.2f} | {r["id"]} | {r["display_name"] or r["name"]} | {r["ruleW_family"]} | {m["fill"]} | {m["text_hex"]} | {m["component"]} | {c["note"]} |')
w(f'\n- Kept rows below 3:1: {sum(1 for _, m, _ in kept if m["ratio"] < 3)}. Text colours of the kept rows: ' + ', '.join(sorted({m["text_hex"] for _, m, _ in kept})) + '.\n')
w('### W4b. Rows dropped from any named list, and why\n')
w('| ratio | id | name | component measured | verdict | reason (from the file) |'); w('|---:|---|---|---|---|---|')
keptids = {r['id'] for r, _, _ in kept}
for r, m, c in rowsW4:
    if r['id'] in keptids: continue
    w(f'| {m["ratio"]:.2f} | {r["id"]} | {r["display_name"] or r["name"]} | {m["component"]} | {c["verdict"]} | {c["note"]} |')
w('')
hyW = [r for r in kW if r['ruleW_primary']]
hqW = quart([r['ruleW_white_text_contrast_hypothetical'] for r in hyW])
h45 = sum(1 for r in hyW if r['ruleW_white_text_contrast_hypothetical'] < 4.5); h3 = sum(1 for r in hyW if r['ruleW_white_text_contrast_hypothetical'] < 3)
w(f'### W4c. HYPOTHETICAL: white text on every Rule W primary (not what the buttons state)\n\nn = {len(hyW)}; median {hqW[2]:.2f}; below 4.5:1: {h45} ({pct(h45, len(hyW))}); below 3:1: {h3} ({pct(h3, len(hyW))}).\n')

w('## W5. Headline: what holds under every rule\n')
rules = [('Rule W (article, widened)', 'ruleW_family'), ('Rule S (first draft)', 'ruleS_family'), ('original measured rule', 'measured_family'),
         ('registry primaryColor', 'registry_family'), ('alt 1: first non-white button', 'alt_button_rule_family'),
         ('alt 2: primary token only', None), ('alt 3: no near-white button', 'variant_no_nearwhite_family')]
w('| rule | counted | blue n | blue share | runner-up | runner-up n | runner-up share |'); w('|---|---:|---:|---:|---|---:|---:|')
shares = []
for label, key in rules:
    if key: c, n = hue_n(kW, key)
    else: c = collections.Counter(tokfam); n = len(tokfam)
    top = c.most_common()
    assert top[0][0] == 'blue' and top[0][1] > top[1][1], (label, top[:3])
    shares.append((100*c['blue']/n, label, c['blue'], n, top[1]))
    w(f'| {label} | {n} | {c["blue"]} | {pct(c["blue"], n)} | {top[1][0]} | {top[1][1]} | {pct(top[1][1], n)} |')
lo, hi = min(shares), max(shares); ru = max(s[4][1]/s[3] for s in shares)
w(f'\nClaim that holds under all {len(rules)} rules: **blue is the largest hue family, at {lo[0]:.1f}% to {hi[0]:.1f}% of the references counted** (lowest: {lo[1]}, {lo[2]}/{lo[3]}; highest: {hi[1]}, {hi[2]}/{hi[3]}). The runner-up family never exceeds {100*ru:.1f}%. The six rules of the first draft are the last six rows; Rule W is the seventh and is the one the article uses.\n')

w('## W6. JP and TW\n')
w(f'S6 stays on unwidened Rule S for all three countries, so it compares like with like (KR {nS}, JP {c6["JP"][1]}, TW {c6["TW"][1]} counted). The widening was judged for KR files only. Under Rule W, KR blue is {cWc["blue"]}/{nW} = {pct(cWc["blue"], nW)}.\n')

lo_reg = []
for i in sorted(LEFT_OUT):
    r = next(x for x in kW if x['id'] == i); rr = parse_color(r['registry_primary'])[0]
    toks = {hexof(x) for x in (parse_color(v)[0] for v in (frontmatter(i).get('colors') or {}).values()) if x}
    lo_reg.append((i, hexof(rr) if rr else None, (hexof(rr) in toks) if rr else False, family(rr) if rr else None, LEFT_OUT[i]['kind']))
cSens = collections.Counter(cWc); nSens = nW
for i, h, intok, fam, kind in lo_reg:
    if intok: cSens[fam] += 1; nSens += 1
w('## W7. Sensitivity: the references left out\n')
w('| id | why left out | registry hex | registry hex is a token | registry family |'); w('|---|---|---|---|---|')
for i, h, intok, fam, kind in lo_reg: w(f'| {i} | {kind} | {h} | {"yes" if intok else "no"} | {fam} |')
w(f'\nIf the registry value were taken for every left-out reference whose registry hex is a frontmatter token (the ink-only and declined ones included), blue would be {cSens["blue"]}/{nSens} = {pct(cSens["blue"], nSens)}; achromatic (black-ish + grey + white-ish) {sum(cSens[f] for f in ORDER if not is_chromatic(f))}/{nSens} (Rule W: {sum(cWc[f] for f in ORDER if not is_chromatic(f))}/{nW}). Rule W keeps them out because their files do not present that value as the main colour.\n')

mw('\n## Rule W (third pass, ' + TODAY + ')\n')
mw(f'- Rule S left out {len(noS)} KR verified references, mostly because their main colour token is not named `primary` (e.g. naver `brand`, 11st `brand-red`, shinhanbank `brand-primary`). Each of the {len(noS)} files was read on {TODAY}; `missing-32.md` lists the token name each uses and the evidence. {len(MAIN_TOKEN)} are added under Rule W because the file itself presents one token as its main colour (identity colour or main-action fill), with a verbatim quote the script checks; {len(LEFT_OUT)} stay out because the file does not let one main colour be told.')
mw('- The widening is a per-id list, not a name pattern: a pattern such as `brand*` or `*primary*` also matches `text-primary` (melon), `nhis-primary-60` (nhis) and three `brand-*` tokens (wooribank).')
mw('- Registry `primaryColor` is used only to corroborate, and only where the same hex is a frontmatter colour token of that reference (asserted by the script). A registry value that is only a text-ink token, or no token at all, does not admit a reference (W7 shows the effect of admitting them).')
mw(f'- Rule W counts {nW} of {len(kW)} (Rule S {nS}); left out {len(leftW)}. JP and TW are not widened; S6 compares the three countries on Rule S.')
mw(f'- Contrast names (W4): every reference below 4.5:1 under Rule W was checked against its own DESIGN.md on {TODAY} for whether the measured control is the main action (`CONTRAST_CHECK`, quote checked verbatim). **This is a check against the reference files only; no browser was used and no page was re-measured.** Kept {len(kept)}, dropped {len(bW45)-len(kept)} (W4b).')
mw(f'- Headline (W5): the script asserts that blue is the largest family under all {len(rules)} rules.')
mw(f'- First computed {FIRST_RUN}; this run {TODAY}. Input as of this run: `data/reference-quality.json` generated_at {quality["generated_at"]}.')

mm32 = [f'# The {len(noS)} KR verified references Rule S left out ({TODAY})\n',
        f'Rule S (first draft) takes the frontmatter token named `primary`, else a `*primary*`-named button. These {len(noS)} references have neither. Each file was read for the token it uses for its main colour and for evidence, in the file, that it is the main colour. Quotes are verbatim from `web/references/<id>/DESIGN.md` and `compute.py` asserts each one is still there. The decisions live in `MAIN_TOKEN` and `LEFT_OUT` in `compute.py`; this file is generated from them.\n',
        'Evidence kinds: **identity** = the file names the value as the official, brand or catalogue identity colour; **action** = the value fills the service\'s main action; **registry** = the registry `primaryColor` is the same hex and that hex is this token (never used alone).\n',
        f'## Added under Rule W ({len(MAIN_TOKEN)})\n', '| id | name | main-colour token | hex | family | registry | evidence | quote from the file |', '|---|---|---|---|---|---|---|---|']
for i in sorted(MAIN_TOKEN):
    r = next(x for x in kW if x['id'] == i); e = MAIN_TOKEN[i]
    mm32.append(f'| {i} | {r["display_name"] or r["name"]} | `{e["token"]}` | {r["ruleW_primary"]} | {r["ruleW_family"]} | {r["registry_primary"]} | {e["basis"]} | ' + e['quote'].replace('|', '\\|') + ' |')
mm32 += ['', f'## Left out ({len(LEFT_OUT)}): the file does not let one main colour be told\n', '| id | name | registry | why | quote from the file | what would settle it |', '|---|---|---|---|---|---|']
SETTLE = {'ink-only': 'a re-capture that records a brand fill or identity colour as a token', 'not-a-token': 'a reference revision that records the value as a token with its role (re-measurement)',
          'declined': 'a first-party source giving the brand colour as a hex, recorded in the reference', 'two-candidates': 'the reference stating which of the two is the main colour'}
for i in sorted(LEFT_OUT):
    r = next(x for x in kW if x['id'] == i); e = LEFT_OUT[i]
    mm32.append(f'| {i} | {r["display_name"] or r["name"]} | {r["registry_primary"]} | {e["kind"]}: {e["note"]} | ' + e['quote'].replace('|', '\\|') + f' | {SETTLE[e["kind"]]} |')
open(f'{OUT}/missing-32.md', 'w').write('\n'.join(mm32) + '\n')
print('ruleS', nS, 'ruleW', nW, 'left', len(leftW), 'blue S', f'{cS["blue"]}/{nS}', 'blue W', f'{cWc["blue"]}/{nW}', 'W4 below 4.5', len(bW45), 'checked', len(rowsW4), 'kept', len(kept), 'unchecked', unchecked)

open(f'{OUT}/tables.md', 'w').write('\n'.join(md)); open(f'{OUT}/method.md', 'w').write('\n'.join(mmx) + '\n')
