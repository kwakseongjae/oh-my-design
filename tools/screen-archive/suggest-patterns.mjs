#!/usr/bin/env node
/**
 * Suggest the patterns on each screen of a web walk from its element lists, in the fixed words of
 * tools/phone-recorder/taxonomy.json (the web counterpart of tools/phone-recorder/suggest-labels.py).
 *
 *   node tools/screen-archive/suggest-patterns.mjs <walk dir>
 *
 * Writes <walk dir>/patterns.json: { "<key>": ["검색창", "상단 탭", ...] }. These are suggestions by rule, each rule
 * reading only labels, roles and rectangles: they miss what has no label (a carousel drawn with divs) and they are
 * shown on the sheet as suggested. A pattern a person confirms goes in the route file ("patterns": [..]) and wins.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const dir = process.argv[2];
if (!dir) { console.error('usage: suggest-patterns.mjs <walk dir>'); process.exit(2); }
const known = new Set(JSON.parse(fs.readFileSync(path.join(REPO, 'tools/phone-recorder/taxonomy.json'), 'utf8')).patterns.map((p) => p.ko));
const walk = JSON.parse(fs.readFileSync(path.join(dir, 'walk.json'), 'utf8'));

const SIGN = new Set(['로그인', '회원가입']);   // form rules read sign-in and sign-up screens only: headers carry fields everywhere
const RULES = [
  ['검색창', (e) => e.some((x) => (x.type === 'field' || x.type === 'search' || x.type === 'searchbox') && /검색|search/i.test(x.label))],
  ['상단 탭', (e) => e.filter((x) => x.type === 'tab' && x.y < 400).length >= 3],
  ['하단 탭 바', (e, r) => r.width < 600 && e.filter((x) => (x.type === 'link' || x.type === 'button' || x.type === 'tab') && x.y >= 760 && x.y + x.h <= 850 && x.w < 110 && x.label).length >= 3],
  ['하단 고정 버튼', (e, r) => r.width < 600 && e.some((x) => (x.type === 'button' || x.type === 'link') && x.y >= 740 && x.y + x.h <= 850 && x.w >= 150 && x.label && x.style?.background)],
  ['소셜 로그인', (e, r) => SIGN.has(r.type) && e.filter((x) => (x.type === 'button' || x.type === 'link') && /카카오|네이버|apple|애플|google|구글|페이스북|facebook/i.test(x.label) && /로그인|시작|계속|가입|^.{0,8}$/.test(x.label)).length >= 2],
  ['비밀번호 입력', (e, r) => SIGN.has(r.type) && e.some((x) => x.type === 'field' && /비밀번호|password/i.test(x.label))],
  ['입력 폼', (e, r) => SIGN.has(r.type) && e.filter((x) => x.type === 'field' && !/검색|search/i.test(x.label)).length >= 2],
  ['가격·할인 표시', (e) => e.filter((x) => /\d{1,2}%/.test(x.label) && /\d{1,3}(,\d{3})+/.test(x.label)).length >= 3],
  ['평점·후기', (e) => e.filter((x) => /★|별점|후기|리뷰|수강평/.test(x.label)).length >= 3],
  ['정렬', (e) => e.some((x) => /^(추천순|인기순|최신순|낮은 ?가격순|판매순|정확도순|관련도순|리뷰 ?많은 ?순)/.test(x.label))],
  ['필터 칩', (e) => { const rows = new Map(); for (const x of e) if ((x.type === 'button' || x.type === 'link' || x.type === 'tab') && x.label && x.label.length <= 8 && x.h >= 24 && x.h <= 44 && x.y > 80 && x.y < 700 && x.style?.radius) rows.set(x.y, (rows.get(x.y) ?? 0) + 1); return [...rows.values()].some((n) => n >= 4); }],
  ['카운트다운', (e) => e.some((x) => /\d{1,2}\s?:\s?\d{2}\s?:\s?\d{2}/.test(x.label))],
  ['캐러셀', (e) => e.some((x) => x.type === 'button' && /^(다음|이전|next|prev|previous)/i.test(x.label)) || e.some((x) => /^\d+\s?\/\s?\d+/.test(x.label) && x.w < 90)],
  ['수량 표시', (e) => e.some((x) => /^(총\s)?[\d,]+\s?(개|건|명)(의)?(\s|$)/.test(x.label) && x.label.length < 24)],
  ['플로팅 버튼', (e) => e.some((x) => x.type === 'button' && /맨 ?위로|top으로|상단으로|채널톡|문의하기|chat/i.test(x.label) && x.w <= 72)],
  ['동의 체크', (e) => e.filter((x) => x.type === 'checkbox' || (x.type === 'field' && /동의/.test(x.label))).length >= 2],
];
const out = {};
for (const key of [...new Set(walk.records.map((r) => r.key))]) {
  const found = new Set();
  for (const r of walk.records.filter((x) => x.key === key)) {
    const f = path.join(dir, String(r.width), key + '.elements.json');
    if (!fs.existsSync(f)) continue;
    const els = JSON.parse(fs.readFileSync(f, 'utf8')).elements;
    for (const [name, test] of RULES) { try { if (test(els, r)) found.add(name); } catch { /* a rule never stops the run */ } }
    if (r.state === '빈 상태') found.add('빈 상태');
  }
  out[key] = [...found].filter((p) => known.has(p));
}
fs.writeFileSync(path.join(dir, 'patterns.json'), JSON.stringify(out, null, 1));
const all = Object.values(out).flat();
const tally = {}; for (const p of all) tally[p] = (tally[p] ?? 0) + 1;
console.log(walk.slug + ': ' + all.length + ' suggestions on ' + Object.keys(out).length + ' screens · ' + Object.entries(tally).sort((a, b) => b[1] - a[1]).map(([k, v]) => k + ' ' + v).join(', '));
