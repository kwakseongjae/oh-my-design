#!/usr/bin/env python3
"""Build docs/drafts/kana/references/rules.md from the two rules.v2.md files.
Every rule block is copied line for line; only a `- Standing:` line (document status of the sources) is added,
plus a `- Reviewer note:` line on JW-32, JW-33, JW-70 (glyph flags from research-writing/changes.md)."""
import os, re, sys, pathlib

W = pathlib.Path(os.environ.get('KANA_DATA', pathlib.Path.home() / '.omd-workers/kana'))
OUT = pathlib.Path(sys.argv[1])
TYPO = (W / 'research-typography/rules.v2.md').read_text(encoding='utf-8')
WRIT = (W / 'research-writing/rules.v2.md').read_text(encoding='utf-8')

BACKGROUND = ['JT-03', 'JT-04', 'JT-06', 'JT-10', 'JT-11', 'JT-31', 'JT-16', 'JT-18', 'JT-23', 'JT-24']
WHY_BG = {
    'JT-03': 'book composition (JLREQ); no web source; "Test: judgment only."',
    'JT-04': 'book composition (JLREQ); no web source; example values only.',
    'JT-06': 'book composition (JLREQ); no web source; "Test: none for the web."',
    'JT-10': 'book composition (JLREQ); no web source; "Test: none for the web."',
    'JT-11': 'book composition (JLREQ). Its only web leg (‥ and … under a declared `normal` or `strict`) is the CSS Text 3 sentence already quoted in JT-09, so the skill applies it there and not here.',
    'JT-31': 'book composition (JLREQ); no web source; "Test: none for the web."',
    'JT-16': 'moved to "Background, not rules" by rules.v2.md (definition only).',
    'JT-18': 'moved to "Background, not rules" by rules.v2.md (background; the mapped CSS value is implemented nowhere).',
    'JT-23': 'moved to "Background, not rules" by rules.v2.md (a fact about an OS font family).',
    'JT-24': 'moved to "Background, not rules" by rules.v2.md (one vendor describing its own service).',
}

S = {
    'DADS': 'デジタル庁デザインシステム (DADS): government design system, recommendation',
    'SH': 'SmartHR Design System: one company\'s guide, supporting only',
    'JLREQ': 'JLREQ: W3C Working Group Note, about book composition',
    'CSS3': 'CSS Text 3: W3C Candidate Recommendation Draft',
    'CSS4': 'CSS Text 4: W3C Working Draft',
    'DECO': 'CSS Text Decoration 3: W3C Candidate Recommendation Draft',
    'MDN': 'MDN: vendor documentation',
    'BCD': 'browser-compat-data: vendor data',
    'CHROME': 'Chrome for Developers blog: vendor documentation (last updated 2023-12-04)',
    'OT': 'OpenType feature registry (Microsoft Typography): vendor documentation',
    'MSFONT': 'Microsoft Typography font list: vendor documentation',
    'ISSUE': 'csswg-drafts issue thread and its mailing-list copy: participant comments, not a resolution',
    'ISSUE12386': 'csswg-drafts #12386: working-group issue thread (includes a recorded resolution)',
    'BUDOUX': 'BudouX README (Google): vendor documentation',
    'GBLOG': 'Google Developers Blog (2018): vendor description of its own service',
    'I18N': 'W3C Internationalization article: W3C i18n guidance, not a specification',
    'KENGI': '文化審議会「公用文作成の考え方（建議）」: 文化審議会建議, scope 公用文',
}
TYPO_STANDING = {
    'JT-01': ['DADS', 'SH'], 'JT-02': ['DADS', 'SH'], 'JT-03': ['JLREQ'], 'JT-04': ['JLREQ'], 'JT-05': ['DADS'],
    'JT-06': ['JLREQ'], 'JT-07': ['OT'], 'JT-08': ['ISSUE'], 'JT-09': ['JLREQ', 'CSS3'], 'JT-10': ['JLREQ'],
    'JT-11': ['JLREQ'], 'JT-12': ['CSS3'], 'JT-13': ['CSS3', 'BUDOUX'], 'JT-14': ['CSS4', 'CHROME', 'BCD'],
    'JT-15': ['BUDOUX'], 'JT-16': ['CSS4'], 'JT-17': ['JLREQ', 'CSS4', 'MDN', 'BCD'], 'JT-18': ['JLREQ', 'CSS4', 'MDN'],
    'JT-19': ['KENGI'], 'JT-20': ['JLREQ', 'CSS4'], 'JT-21': ['BCD', 'CSS4', 'MDN', 'ISSUE12386', 'CHROME'],
    'JT-22': ['DADS', 'SH'], 'JT-23': ['MSFONT'], 'JT-24': ['GBLOG'], 'JT-25': ['I18N'], 'JT-26': ['DADS', 'MDN', 'JLREQ'],
    'JT-27': ['JLREQ', 'DECO', 'BCD'], 'JT-28': ['JLREQ', 'MDN'], 'JT-29': ['KENGI'], 'JT-30': ['KENGI'], 'JT-31': ['JLREQ'],
    'JT-32': ['MDN'],
}
WKEY = [
    ('GK', r'\bGK\b', '外来語の表記: 内閣告示, a よりどころ for general social life; not specialist fields or proper nouns'),
    ('KB', r'\bKB\b', '公用文作成の考え方（建議）+ 解説: 文化審議会建議, scope 公用文'),
    ('KG', r'\bKG\b', '敬語の指針: 文化審議会答申, keigo in general social life'),
    ('YN', r'\bYN\b', '在留支援のためのやさしい日本語ガイドライン: government guideline (出入国在留管理庁・文化庁), for foreign residents'),
    ('JTF', r'\bJTF\b', 'JTF日本語標準スタイルガイド（翻訳用）: industry association guideline for translated text (read here as covering product manuals and websites)'),
    ('SH', r'\bSH(-\w+)?\b', 'SmartHR Design System: one company\'s guide for its own products'),
]
REVIEWER = {
    'JW-32': 'Reviewer note (research-writing/changes.md): the PDF text layer has hiragana 「べ」 inside 「バ」「ビ」「ブ」「ベ」「ボ」; the quote keeps katakana 「ベ」. Check the 告示 PDF page itself.',
    'JW-33': 'Reviewer note (research-writing/changes.md): the PDF text layer reads 「英語の語末の ─er，─or，─ar などに当たるものは，…」 (U+2500 and full-width commas); the quote was left as is. Check the 告示 PDF page itself.',
    'JW-70': 'Reviewer note (research-writing/changes.md): the quote has 「姓－名」 (U+FF0D); the 解説 body text has 「姓―名」 (U+2015) and the section heading 「姓－名」. Check the PDF page itself.',
}


def blocks(text):
    """Yield (section_heading_or_None, id, block_text) in file order."""
    lines = text.split('\n')
    out, sec, cur, cid = [], None, None, None
    for ln in lines:
        m = re.match(r'### (J[TW]-\d\d)\b', ln)
        if m:
            if cur is not None: out.append((cursec, cid, '\n'.join(cur).rstrip()))
            cur, cid, cursec = [ln], m.group(1), sec
            continue
        if ln.startswith('## ') or ln.startswith('---') or ln.startswith('*JT-'):
            if cur is not None: out.append((cursec, cid, '\n'.join(cur).rstrip())); cur = None
            if ln.startswith('## '): sec = ln
            continue
        if cur is not None: cur.append(ln)
    if cur is not None: out.append((cursec, cid, '\n'.join(cur).rstrip()))
    return out


def standing_line(rid, body):
    if rid.startswith('JT'):
        return '- Standing: ' + '; '.join(S[k] for k in TYPO_STANDING[rid]) + '.'
    # sources a block names only for contrast or to say they do not count (sources.md "Mentioned") are left out
    skip = {'JW-06': ['KB'], 'JW-08': ['KB'], 'JW-36': ['KB'], 'JW-42': ['KB'], 'JW-53': ['KB'], 'JW-54': ['KB'],
            'JW-35': ['GK'], 'JW-09': ['SH'], 'JW-31': ['SH']}.get(rid, [])
    keys = [desc for k, rx, desc in WKEY if re.search(rx, body) and k not in skip]
    return '- Standing: ' + '; '.join(keys) + '.' + (' Named in the block but not relied on: ' + ', '.join(skip) + '.' if skip else '')


def emit(b):
    sec, rid, body = b
    lines = body.split('\n')
    lines.append(standing_line(rid, body))
    if rid in REVIEWER: lines.append('- ' + REVIEWER[rid])
    return '\n'.join(lines)


tb = blocks(TYPO); wb = blocks(WRIT)
ids_t = [r for _, r, _ in tb]; ids_w = [r for _, r, _ in wb]
assert len(ids_t) == 32 and len(set(ids_t)) == 32, ids_t
assert len(ids_w) == 70 and len(set(ids_w)) == 70, ids_w

HEADER = (pathlib.Path(sys.argv[2]).read_text(encoding='utf-8'))
parts = [HEADER.rstrip(), '']
parts.append('## Applied by the skill: typography for web UI\n')
last = None
for b in tb:
    if b[1] in BACKGROUND: continue
    if b[0] != last:
        parts.append(b[0].replace('## ', '### ', 1).replace('### ', '### Typography ', 1) + '\n'); last = b[0]
    parts.append(emit(b) + '\n')
parts.append('## Applied by the skill: writing\n')
last = None
for b in wb:
    if b[0] != last:
        parts.append(b[0].replace('## ', '### ', 1).replace('### ', '### Writing ', 1) + '\n'); last = b[0]
    parts.append(emit(b) + '\n')
parts.append('## Background (print) — not applied by the skill\n')
parts.append('These entries keep their ids so the skill and a reviewer can cite them as context. The skill gives no instruction from them, and the checker does not test them. Each says why it is here.\n')
for rid in BACKGROUND:
    b = next(x for x in tb if x[1] == rid)
    e = emit(b).split('\n')
    parts.append('\n'.join([e[0], f'- Why not applied: {WHY_BG[rid]}'] + e[1:]) + '\n')
FOOTER = pathlib.Path(sys.argv[3]).read_text(encoding='utf-8')
parts.append(FOOTER.rstrip() + '\n')
# headings inside blocks are ###; demote rule headings to #### under ### section headings
text = '\n'.join(parts)
text = re.sub(r'(?m)^### (J[TW]-\d\d)', r'#### \1', text)
OUT.write_text(text, encoding='utf-8')
print('typography applied', len([i for i in ids_t if i not in BACKGROUND]), 'background', len(BACKGROUND), 'writing', len(ids_w))
