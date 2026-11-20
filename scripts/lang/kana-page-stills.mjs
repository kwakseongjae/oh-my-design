#!/usr/bin/env node
/**
 * Stills of three directions for the /kana page, for the owner to choose before any page code is written.
 * Content is not invented here: rule cards carry the verbatim Japanese quote and source key from
 * docs/drafts/kana/writing/rules.md, only rules ops-rule-checker marked "supported" in verdicts.md are shown as
 * rules, and the font bars are our own measurement (references/measured-jp.md). Korean around them is page chrome.
 * Japanese that is ours (illustrations) is marked as unreviewed wherever it appears: nothing Japanese ships before a
 * native review.
 *
 *   node scripts/lang/kana-page-stills.mjs [--out DIR]     default out: ~/Downloads/omd-kana/
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const OUT = path.resolve(args.includes('--out') ? args[args.indexOf('--out') + 1] : path.join(os.homedir(), 'Downloads/omd-kana'));
const W = path.join(REPO, 'docs/drafts/kana/writing');
const rulesText = fs.readFileSync(path.join(W, 'rules.md'), 'utf8');
const verdictText = fs.existsSync(path.join(W, 'verdicts.md')) ? fs.readFileSync(path.join(W, 'verdicts.md'), 'utf8') : '';
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const SOURCE = [[/^DADS/, 'デジタル庁 デザインシステム'], [/^SH/, 'SmartHR Design System'], [/^UB/, 'Ubie Vitals'], [/^SP/, 'Ameba Spindle'], [/^PP|^PB/, 'GMO Pepabo Inhouse'], [/^MZ/, 'Mozilla Japan 翻訳ガイド'], [/^WP/, 'WordPress 日本語 翻訳スタイルガイド'], [/^KB/, '文化庁「公用文作成の考え方」'], [/^JTF/, 'JTF 日本語標準スタイルガイド']];
const sourceName = (key) => (SOURCE.find(([rx]) => rx.test(key)) ?? [null, key])[1];
const rules = new Map();
for (const part of rulesText.split(/\n#### /).slice(1)) {
  const m = part.match(/^(UW-\d+)\s+([^\n]+)/);
  if (!m) continue;
  // one quote per source line: the first 「…」 after the source key (a line may carry several, with commentary between)
  const quotes = [];
  for (const line of part.split('\n')) {
    const k = line.match(/^- ([A-Z][\w-]*)/);
    if (!k || /^(Kind|Test|Strength|Illustration)/.test(k[1])) continue;
    const start = line.indexOf('「');
    if (start < 0) continue;
    let depth = 0, end = -1;   // quotes nest (「…「できます」…」): take the first balanced one
    for (let i = start; i < line.length; i++) { if (line[i] === '「') depth++; else if (line[i] === '」' && --depth === 0) { end = i; break; } }
    if (end > start + 1) quotes.push({ key: k[1], text: line.slice(start + 1, end) });
  }
  const ill = part.match(/Illustration \(ours, unreviewed\): ([^\n]+)/);
  rules.set(m[1], { id: m[1], title: m[2].trim(), quotes, illustration: ill ? ill[1] : null, strength: (part.match(/- Strength: ([^\n]*)/) ?? [])[1] ?? '', test: (part.match(/- Test: ([^\n]*)/) ?? [])[1] ?? '' });
}
const verdict = new Map([...verdictText.matchAll(/^\|\s*(UW-\d+)\s*\|\s*([^|]+?)\s*\|/gm)].map((v) => [v[1], v[2].toLowerCase()]));
const supported = (id) => /^supported/.test(verdict.get(id) ?? '');
const state = (id) => (verdict.size === 0 ? '검증 전' : supported(id) ? '검증 통과' : verdict.has(id) ? '검증에서 걸림: ' + verdict.get(id) : '검증 전');

// The rules this page would lead with, with the one-line Korean reading used as page chrome.
const LEAD = [
  ['UW-26', '오류는 무엇이 틀렸고 어떻게 고치는지를 말한다'],
  ['UW-17', '버튼이 대상을 적을 때 조사는 「の」가 아니라 「を」'],
  ['UW-02', '화면 제목과 항목 이름은 명사로 끝낸다(体言止め)'],
  ['UW-09', '경어를 겹치지 않는다 — 정중한 요청은 한 번이면 된다'],
  ['UW-14', '「〜することができます」보다 「〜できます」'],
  ['UW-33', 'ください · すべて · すでに 는 가나로 쓴다'],
];
const SPLIT = [['UW-16', '버튼을 「保存」으로 쓸지 「保存する」로 쓸지'], ['UW-41', '한 문장짜리 UI 문구 끝에 「。」를 찍을지'], ['UW-36', '「ユーザー」와 「ユーザ」 — 장음 부호'], ['UW-50', '날짜를 2026/11/21 로 쓸지 2026年11月21日 로 쓸지']];
const lead = LEAD.map(([id, ko]) => ({ ...(rules.get(id) ?? { id, quotes: [] }), ko, ok: state(id) }));
const split = SPLIT.map(([id, ko]) => ({ ...(rules.get(id) ?? { id, quotes: [] }), ko }));
const counts = { rules: rules.size, supported: [...rules.keys()].filter(supported).length, checked: verdict.size, disagree: [...rules.values()].filter((r) => /DISAGREEMENT/.test(r.title)).length };
// measured-jp.md: first Japanese face in the stack, 77 services
const FONTS = [['Hiragino 계열', 27], ['Noto Sans JP', 25], ['Yu Gothic', 7], ['Meiryo', 7], ['LINE Seed JP', 1]];

const CSS = String.raw`
@import url("https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap");
:root{--p:#6749e2;--p50:#f6f6fe;--ink:#13131a;--ink2:#5a5a63;--n50:#f9faff;--n100:#f3f3f8;--n200:#e5e6eb;--n300:#d3d3db;--ok:#14733f;--warn:#8f5200}
*{box-sizing:border-box}body{margin:0;font:16px/1.65 "Wanted Sans Variable","Apple SD Gothic Neo",sans-serif;color:var(--ink);background:#fff;word-break:keep-all;overflow-wrap:anywhere}
[lang=ja]{font-family:"Noto Sans JP","Hiragino Sans",sans-serif;word-break:normal;line-break:strict}
.wrap{max-width:1160px;margin:0 auto;padding:0 40px}
.hdr{height:64px;display:flex;align-items:center;gap:28px;font-size:15px;color:var(--ink2)}.hdr b{color:var(--ink);font-weight:700;margin-right:auto;display:flex;gap:8px;align-items:center}.hdr b::before{content:"";width:24px;height:24px;border-radius:7px;background:var(--p)}
.eyebrow{font-size:14px;font-weight:650;color:var(--p)}
h1{font-size:56px;line-height:1.12;letter-spacing:-0.025em;font-weight:760;margin:10px 0 0}
h2{font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:740;margin:0}
h3{font-size:19px;line-height:1.35;font-weight:700;margin:0}
.lede{font-size:19px;line-height:1.6;color:var(--ink2);max-width:60ch;margin:16px 0 0}
.btn{display:inline-flex;align-items:center;height:48px;padding:0 22px;border-radius:999px;font-size:16px;font-weight:650}.btn.p{background:var(--p);color:#fff}.btn.o{box-shadow:inset 0 0 0 1px var(--n300)}
.row{display:flex;gap:10px;margin-top:28px}
.stats{display:flex;gap:40px;margin-top:40px;padding-top:24px;border-top:1px solid var(--n200)}.stats b{display:block;font-size:30px;font-weight:760;letter-spacing:-0.02em}.stats span{font-size:14px;color:var(--ink2)}
section{padding:72px 0}section.band{background:var(--n50)}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:28px}
.card{border:1px solid var(--n200);border-radius:20px;background:#fff;padding:24px}
.q{margin:14px 0 0;padding:14px 16px;border-radius:14px;background:var(--n100);font-size:16px;line-height:1.7}
.src{display:flex;flex-wrap:wrap;gap:6px 12px;margin-top:10px;font-size:13px;color:var(--ink2)}
.tag{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:6px;font-size:12.5px;font-weight:600;background:var(--n100);color:var(--ink2)}.tag.ok{background:#e8f5ee;color:var(--ok)}.tag.w{background:#fff4dc;color:var(--warn)}
.vs{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:14px}.vs .q{margin:0}
.bars{margin-top:24px;display:grid;gap:10px;max-width:720px}.bar{display:grid;grid-template-columns:130px 1fr 40px;gap:12px;align-items:center;font-size:15px}.bar i{height:14px;border-radius:7px;background:var(--p)}.bar span{color:var(--ink2);text-align:right;font-variant-numeric:tabular-nums}
.phones{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:36px}.phone{border:1px solid var(--n200);border-radius:28px;padding:20px;background:#fff}.phone h3{font-size:14px;color:var(--ink2);font-weight:650}.screen{margin-top:12px;border-radius:18px;background:var(--n100);padding:18px;min-height:160px;display:grid;gap:10px;align-content:start}.line{background:#fff;border-radius:12px;padding:12px 14px;font-size:15px}.line.fix{outline:2px solid var(--p);outline-offset:-2px}
.two{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:36px}.door{border-radius:24px;padding:32px;border:1px solid var(--n200)}.door.j{background:var(--ink);color:#fff;border-color:var(--ink)}.door p{color:var(--ink2);margin:10px 0 0}.door.j p{color:#b9b9c4}
.note{max-width:1160px;margin:0 auto 60px;padding:14px 40px;color:var(--ink2);font-size:13px;border-top:1px solid var(--n200)}
.mock{position:fixed;right:16px;bottom:16px;background:var(--ink);color:#fff;font-size:12px;padding:6px 10px;border-radius:8px;opacity:.85}
`;
const page = (title, body, foot) => '<!doctype html>\n<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=1280"><meta name="robots" content="noindex"><title>' + esc(title) + '</title><style>' + CSS + '</style></head><body><div class="wrap hdr"><b>oh-my-design</b><span>아카이브</span><span style="color:var(--ink);font-weight:650">스킬</span><span>문서</span></div>' + body + '<p class="note">' + esc(foot) + ' 정지 시안입니다. 일본어 인용은 출처 원문 그대로이고, 「예시(검토 전)」 표시가 붙은 일본어는 우리가 쓴 것이라 원어민 검토 전에는 내지 않습니다.</p><div class="mock">시안 · 사이트 코드 아님</div></body></html>\n';
const quote = (q) => '<p class="q" lang="ja">「' + esc(q.text) + '」</p><div class="src"><span>' + esc(sourceName(q.key)) + '</span></div>';
const ruleCard = (r) => '<div class="card"><div style="display:flex;gap:8px;align-items:center"><span class="tag">' + esc(r.id) + '</span><span class="tag ' + (r.ok === '검증 통과' ? 'ok' : 'w') + '">' + esc(r.ok) + '</span></div><h3 style="margin-top:12px">' + esc(r.ko) + '</h3>' + (r.quotes[0] ? quote(r.quotes[0]) : '') + (r.quotes.length > 1 ? '<div class="src"><span>같은 방향의 출처 ' + (r.quotes.length - 1) + '곳 더: ' + esc([...new Set(r.quotes.slice(1).map((q) => sourceName(q.key)))].join(', ')) + '</span></div>' : '') + '</div>';
const splitCard = (r) => '<div class="card"><span class="tag w">출처가 갈림</span><h3 style="margin-top:12px">' + esc(r.ko) + '</h3><div class="vs">' + r.quotes.slice(0, 2).map((q) => '<div><p class="q" lang="ja">「' + esc(q.text) + '」</p><div class="src"><span>' + esc(sourceName(q.key)) + '</span></div></div>').join('') + '</div></div>';
const stats = '<div class="stats"><div><b>' + counts.rules + '</b><span>글쓰기 규칙 후보</span></div><div><b>' + (counts.checked ? counts.supported + ' / ' + counts.checked : '검증 중') + '</b><span>독립 검증을 통과한 것</span></div><div><b>' + counts.disagree + '</b><span>출처가 갈려 고르지 않은 것</span></div><div><b>77</b><span>실측한 일본 서비스</span></div></div>';
const fonts = '<section><div class="wrap"><span class="eyebrow">실측</span><h2 style="margin-top:8px">일본 서비스 77곳의 첫 일본어 글꼴</h2><p class="lede">한국의 Pretendard처럼 하나로 모이는 글꼴은 없습니다. OS 글꼴(Hiragino, Yu Gothic, Meiryo)을 이름으로 적거나 Noto Sans JP를 씁니다.</p><div class="bars">' + FONTS.map(([n, v]) => '<div class="bar"><b style="font-weight:600">' + esc(n) + '</b><i style="width:' + Math.round((v / 27) * 100) + '%"></i><span>' + v + '</span></div>').join('') + '</div></div></section>';
const install = '<section class="band"><div class="wrap"><h2>설치하고, 평소처럼 요청하세요</h2><p class="lede">에이전트가 일본어 화면을 쓸 때 이 규칙을 읽고, 검사기가 결과를 다시 봅니다.</p><div class="row"><span class="btn p">설치</span><span class="btn o">규칙 전체 보기</span></div></div></section>';

fs.mkdirSync(OUT, { recursive: true });
// A: sources first
fs.writeFileSync(path.join(OUT, 'a-sources.html'), page('/kana 시안 A — 출처가 보이는 규칙',
  '<section style="padding-top:56px"><div class="wrap"><span class="eyebrow">/kana · 일본어 UI 문구 스킬</span><h1>출처가 있는 규칙만,<br>원문과 함께</h1><p class="lede">일본어 화면의 문구를 쓰는 규칙입니다. 규칙마다 일본 정부 디자인 시스템과 일본 회사들이 공개한 가이드의 문장을 그대로 붙였고, 출처가 갈리는 곳은 고르지 않고 둘 다 보여 줍니다.</p><div class="row"><span class="btn p">설치</span><span class="btn o">규칙 ' + counts.rules + '개 보기</span></div>' + stats + '</div></section>'
  + '<section class="band"><div class="wrap"><h2>규칙은 이렇게 생겼습니다</h2><div class="grid">' + lead.map(ruleCard).join('') + '</div></div></section>'
  + '<section><div class="wrap"><h2>출처가 갈리는 곳은 고르지 않습니다</h2><p class="lede">회사마다 답이 다른 것은 규칙으로 만들지 않고, 각 회사가 무엇이라고 적었는지 보여 줍니다. 프로젝트의 DESIGN.md가 정합니다.</p><div class="grid">' + split.map(splitCard).join('') + '</div></div></section>' + fonts + install,
  'A: 규칙과 원문 인용이 주인공입니다. 우리가 쓴 일본어가 한 줄도 없어서 원어민 검토 전에도 가장 안전합니다.'));
// B: same screen, different Japanese (mirrors /hangul)
const ills = [...rules.values()].filter((r) => r.illustration && supported(r.id) && /wrong 「[^」]+」.*right 「[^」]+」/.test(r.illustration)).slice(0, 4);
fs.writeFileSync(path.join(OUT, 'b-same-screen.html'), page('/kana 시안 B — 같은 화면, 다른 일본어',
  '<section style="padding-top:56px"><div class="wrap" style="text-align:center"><span class="eyebrow">/kana · 일본어 UI 문구 스킬</span><h1>같은 화면, 다른 일본어</h1><p class="lede" style="margin-inline:auto">스킬 없이 만든 화면과 /kana로 만든 화면을 나란히 봅니다. /hangul 페이지와 같은 짜임입니다.</p><div class="row" style="justify-content:center"><span class="btn p">설치</span><span class="btn o">규칙 ' + counts.rules + '개 보기</span></div>'
  + '<div class="phones" style="text-align:left"><div class="phone"><h3>스킬 없이</h3><div class="screen">' + ills.map((r) => '<div class="line" lang="ja">' + esc((r.illustration.match(/wrong 「([^」]+)」/) ?? [null, '…'])[1]) + '</div>').join('') + '</div></div><div class="phone"><h3 style="color:var(--p)">/kana</h3><div class="screen">' + ills.map((r) => '<div class="line fix" lang="ja">' + esc((r.illustration.match(/right 「([^」]+)」/) ?? [null, '…'])[1]) + ' <span class="tag" style="float:right">' + esc(r.id) + '</span></div>').join('') + '</div></div></div><p class="src" style="justify-content:center;margin-top:14px"><span class="tag w">예시(검토 전)</span><span>두 화면의 일본어는 우리가 쓴 예시입니다. 원어민 검토를 거친 문장으로 바꾼 뒤에만 공개합니다.</span></p></div></section>'
  + '<section class="band"><div class="wrap"><h2>고친 줄마다 근거가 있습니다</h2><div class="grid">' + lead.slice(0, 4).map(ruleCard).join('') + '</div></div></section>' + fonts + install,
  'B: /hangul과 같은 짜임이라 두 페이지가 한 벌로 보입니다. 다만 첫 화면이 우리가 쓴 일본어에 기대므로 원어민 검토가 끝나야 낼 수 있습니다.'));
// C: two readers
fs.writeFileSync(path.join(OUT, 'c-two-readers.html'), page('/kana 시안 C — 두 독자',
  '<section style="padding-top:56px"><div class="wrap"><span class="eyebrow">/kana · 일본어 UI 문구 스킬</span><h1>일본어판을 만드는 팀과,<br>일본어로 읽는 사람에게</h1><p class="lede">독자가 둘입니다. 한국 서비스의 일본어판을 만드는 팀에게는 자주 틀리는 것의 점검표를, 일본의 디자이너와 개발자에게는 출처와 실측을 먼저 보여 줍니다.</p>'
  + '<div class="two"><div class="door"><span class="tag">한국어</span><h2 style="margin-top:14px;font-size:26px">일본어판을 만든다면</h2><p>버튼, 오류 문구, 경어, 표기에서 번역 화면이 자주 어긋나는 곳 ' + lead.length + '가지와 검사기.</p><div class="row"><span class="btn p">점검표 보기</span></div></div><div class="door j"><span class="tag" style="background:#2a2a35;color:#d6d6e0">日本語 · /ja/kana</span><h2 style="margin-top:14px;font-size:26px">일본어 페이지(준비 중)</h2><p>규칙 ' + counts.rules + '개의 출처와 일본 서비스 77곳 실측. 일본어 본문은 원어민 검토 뒤에 엽니다.</p><div class="row"><span class="btn o" style="box-shadow:inset 0 0 0 1px #4a4a57;color:#fff">검토 뒤 공개</span></div></div></div>' + stats + '</div></section>'
  + '<section class="band"><div class="wrap"><span class="eyebrow">일본어판을 만드는 팀에게</span><h2 style="margin-top:8px">먼저 볼 ' + lead.length + '가지</h2><div class="grid">' + lead.map(ruleCard).join('') + '</div></div></section>' + fonts + install,
  'C: 오너가 정한 두 독자(한국에서 다국어를 다루는 사람, 일본 현지인)를 첫 화면에서 가릅니다. 일본어 쪽 문은 검토가 끝날 때까지 닫아 둔 채로 한국어 페이지를 먼저 낼 수 있습니다.'));
fs.writeFileSync(path.join(OUT, 'index.html'), page('/kana 페이지 시안', '<div class="wrap" style="padding:48px 40px"><h2>/kana 페이지 시안 3안</h2><p class="lede">규칙 후보 ' + counts.rules + '개' + (counts.checked ? ', 독립 검증 ' + counts.checked + '개 중 ' + counts.supported + '개 통과' : ', 독립 검증 진행 중') + '. 세 안은 같은 내용을 무엇부터 보여 주느냐가 다릅니다.</p><ol style="font-size:18px;line-height:2.2"><li><a style="color:var(--p);font-weight:650" href="a-sources.html">A · 출처가 보이는 규칙</a> — 원문 인용이 주인공. 지금 낼 수 있는 유일한 안.</li><li><a style="color:var(--p);font-weight:650" href="b-same-screen.html">B · 같은 화면, 다른 일본어</a> — /hangul과 한 벌. 원어민 검토가 조건.</li><li><a style="color:var(--p);font-weight:650" href="c-two-readers.html">C · 두 독자</a> — 한국어 쪽을 먼저 열고 일본어 쪽은 검토 뒤.</li></ol></div>', ''));
console.log('rules ' + counts.rules + ', verdicts ' + counts.checked + ', supported ' + counts.supported + ', disagreements ' + counts.disagree + ' · lead: ' + lead.map((r) => r.id + '(' + r.quotes.length + 'q,' + r.ok + ')').join(' ') + ' · split: ' + split.map((r) => r.id + '(' + r.quotes.length + 'q)').join(' ') + ' · illustrations ' + ills.length);
console.log('→ ' + path.join(OUT, 'index.html'));
