#!/usr/bin/env python3
"""Consistency check for docs/drafts/kana against the two rules.v2.md files. Exit 1 on any failure.
1 ids cited in SKILL.md exist in references/rules.md; 2 every v2 id is in rules.md exactly once, and no background id
is cited in SKILL.md §4/§4b; 3 every v2 block line is in the rules.md block verbatim, and the only added lines are
Standing / Reviewer note / Why not applied; 4 every 「…」 quote in the four files is in the corpus verbatim;
5 every kana/kanji run in the four files is in the corpus; 6 hedge words and scope owners of each cited rule
survive in the SKILL.md lines that cite it; 7 prints lines with tokens that would re-inflate a claim, for reading."""
import os, re, sys, pathlib

D = pathlib.Path(sys.argv[1])
W = pathlib.Path(os.environ.get('KANA_DATA', pathlib.Path.home() / '.omd-workers/kana'))
skill = (D / 'SKILL.md').read_text(encoding='utf-8')
rules = (D / 'references/rules.md').read_text(encoding='utf-8')
files = {n: (D / n).read_text(encoding='utf-8') for n in ['SKILL.md', 'references/rules.md', 'references/sources.md', 'references/measured-jp.md']}
v2t = (W / 'research-typography/rules.v2.md').read_text(encoding='utf-8')
v2w = (W / 'research-writing/rules.v2.md').read_text(encoding='utf-8')
EVIDENCE = ['research-typography/rules.v2.md', 'research-writing/rules.v2.md', 'research-typography/changes.md', 'research-writing/changes.md',
            'research-typography/gaps.md', 'research-writing/gaps.md', 'research-typography/sources.json', 'research-writing/sources.json', 'measure/measured-jp.md']
corpus = '\n'.join((W / e).read_text(encoding='utf-8') for e in EVIDENCE)
fail = []

def v2blocks(text, level):
    out, cur = {}, None
    for ln in text.split('\n'):
        m = re.match('#' * level + r' (J[TW]-\d\d)\b', ln)
        if m: cur = m.group(1); out[cur] = [ln]; continue
        if re.match(r'#{1,%d} ' % level, ln) or ln.startswith('---') or ln.startswith('*JT-'): cur = None; continue
        if cur: out[cur].append(ln)
    return {k: [l for l in v if l.strip()] for k, v in out.items()}

V2 = {**v2blocks(v2t, 3), **v2blocks(v2w, 3)}
MINE = v2blocks(rules, 4)

# 1
cited = sorted(set(re.findall(r'J[TW]-\d\d', skill)))
missing = [i for i in cited if i not in MINE]
print(f'[1] ids cited in SKILL.md: {len(cited)}; missing from rules.md: {missing or "none"}')
if missing: fail.append('1')

# 2
heads = re.findall(r'(?m)^#### (J[TW]-\d\d)', rules)
dup = sorted({h for h in heads if heads.count(h) > 1}); absent = sorted(set(V2) - set(heads)); extra = sorted(set(heads) - set(V2))
bg_part = rules.split('## Background (print)')[1]
bg = re.findall(r'(?m)^#### (J[TW]-\d\d)', bg_part)
applied = [h for h in heads if h not in bg]
apply_text = skill.split('## 4. APPLY')[1].split('## 5. Precedence')[0]
bg_in_apply = sorted({i for i in re.findall(r'J[TW]-\d\d', apply_text) if i in bg})
print(f'[2] rules.md headings: {len(heads)} (v2: {len(V2)}); duplicates {dup or "none"}; absent {absent or "none"}; extra {extra or "none"}')
print(f'    applied: JT {sum(h.startswith("JT") for h in applied)}, JW {sum(h.startswith("JW") for h in applied)}; background: {len(bg)} {bg}')
print(f'    background ids cited in SKILL.md §4/§4b: {bg_in_apply or "none"}')
if dup or absent or extra or bg_in_apply: fail.append('2')

# 3
bad3 = []
for rid, lines in V2.items():
    mine = MINE.get(rid, [])
    body_v2 = [l for l in lines[1:]]; body_m = mine[1:]
    if lines[0][4:] != mine[0][5:]: bad3.append((rid, 'headline differs'))
    for l in body_v2:
        if l not in body_m: bad3.append((rid, 'v2 line missing: ' + l[:70]))
    for l in body_m:
        if l not in body_v2 and not re.match(r'- (Standing:|Reviewer note|Why not applied:)', l): bad3.append((rid, 'added line: ' + l[:70]))
print(f'[3] v2 block lines copied verbatim into rules.md: {"all" if not bad3 else bad3}')
if bad3: fail.append('3')

# 4
def quotes(t):
    t = re.sub(r'`[^`\n]*`', '', t)   # characters shown as code are not quotations
    out, depth, start = [], 0, None
    for i, ch in enumerate(t):
        if ch == '\n': depth = 0; continue
        if ch == '「':
            if depth == 0: start = i
            depth += 1
        elif ch == '」' and depth:
            depth -= 1
            if depth == 0: out.append(t[start + 1:i])
    return out
bad4 = {}
for n, t in files.items():
    for q in quotes(t):
        core = q.strip('…')
        if core and core not in corpus: bad4.setdefault(n, []).append(q)
nq = sum(len(quotes(t)) for t in files.values())
print(f'[4] 「…」 quotes checked: {nq}; not found verbatim in the rule files: {bad4 or "none"}')
if bad4: fail.append('4')

# 5
RUN = re.compile(r'[぀-ヿ㐀-䶿一-鿿々ｦ-ﾟ]+')
bad5 = {}
nruns = 0
for n, t in files.items():
    for r in set(RUN.findall(t)):
        nruns += 1
        if r not in corpus: bad5.setdefault(n, []).append(r)
print(f'[5] distinct kana/kanji runs checked: {nruns}; not in the rule files or the measurement: {bad5 or "none"}')
if bad5: fail.append('5')

# 6
HEDGES = ['目安', '基本として', '基本的に', '主に', 'may be desirable', '原則として', '意識するとよい', 'お勧めしません', 'some browsers',
          'unless there is a reason', 'extension', 'DERIVED', 'suggest', 'review', 'reads better', 'as a principle', 'as little as possible',
          'not often', 'consistency only', 'judgment only', 'example']
OWNER = {'SH': ['SmartHR'], 'KB': ['公用文', 'KB'], 'YN': ['やさしい', 'foreign readers'], 'JTF': ['JTF'], 'GK': ['告示'], 'KG': ['敬語の指針'],
         'DADS': ['DADS'], 'JLREQ': ['JLREQ'], 'VENDOR': ['VENDOR'], 'DERIVED': ['DERIVED']}
paras = [p for p in re.split(r'\n(?=- |\| )', apply_text)]
bad6 = []
for rid in sorted({i for i in re.findall(r'J[TW]-\d\d', apply_text)} - set(bg)):
    text = ' '.join(p for p in paras if re.search(r'\*\*[^*]*' + rid, p))
    if not text: continue  # cited only in passing (cross-reference)
    head = V2[rid][0]
    strength = next((l for l in V2[rid] if l.startswith('- Strength:')), '')
    scope = next((l for l in V2[rid] if l.startswith('- Scope:') or l.startswith('- Kind:')), '')
    test = next((l for l in V2[rid] if l.startswith('- Test:')), '')
    if 'judgment only' in test.lower() and not re.search(r'judgment', text, re.I): bad6.append((rid, 'test is judgment only; SKILL line does not say so'))
    for h in HEDGES:
        if h == 'judgment only': continue
        if h.lower() in (head + ' ' + strength).lower() and h.lower() not in text.lower():
            if h in ('review', 'suggest', 'example') and not re.search(r'\b' + h + r'\b', head + strength, re.I): continue
            bad6.append((rid, 'hedge lost: ' + h))
    owners = set()
    for key, rx in [('SH', r'\bSH\b|SH-|SmartHR'), ('KB', r'\bKB\b'), ('YN', r'\bYN\b'), ('JTF', r'\bJTF\b'), ('GK', r'\bGK\b'), ('KG', r'\bKG\b'),
                    ('DADS', r'DADS'), ('JLREQ', r'JLREQ'), ('VENDOR', r'VENDOR'), ('DERIVED', r'DERIVED')]:
        if re.search(rx, strength): owners.add(key)
    for o in owners:
        if not any(a in text for a in OWNER[o]): bad6.append((rid, 'owner not named: ' + o))
print(f'[6] hedge words and source owners of each rule kept in its SKILL.md line: {"all" if not bad6 else bad6}')
if bad6: fail.append('6')

# 7
TOKENS = [r'break-all', r'line-clamp', r'\bIntl\b', r'max-width', r'font-synthesis', r'Yu Gothic Medium', r'tracking', r'font-size',
          r'\bnever\b', r'\bmust\b', r'\balways\b', r'em`/`i`']
print('[7] lines in SKILL.md with tokens that could re-inflate a claim (read each):')
for no, ln in enumerate(skill.split('\n'), 1):
    hits = [t for t in TOKENS if re.search(t, ln, re.I)]
    if hits: print(f'    L{no} {hits}: {ln.strip()[:150]}')

print('RESULT:', 'FAIL ' + ','.join(fail) if fail else 'PASS')
sys.exit(1 if fail else 0)
