#!/usr/bin/env node
/**
 * verify-reference.mjs — standalone per-reference gate.
 *
 *   node web/scripts/verify-reference.mjs <id> [--no-net]
 *
 * Runs every per-ref assertion from web/__tests__/catalog-integrity.test.ts
 * WITHOUT needing the registry to be rebuilt, plus the failure classes that
 * historically slipped past authoring agents and only surfaced later:
 *
 *   - strict-YAML frontmatter parse (the build-registry crash class)
 *   - logo liveness: favicon slug must be a fetchable image URL (not a bare
 *     domain — logos.ts renders the slug verbatim), simpleicons/github slugs
 *     must resolve 200, and the favicon must not be Google's generic globe
 *   - §10–15 presence, §7 Do/Don't parseable markers
 *
 * Exit 0 = every gate green (safe to hand to SYNC). Exit 1 = itemized FAILs.
 * Designed so an authoring sub-agent can self-verify with ONE command and an
 * orchestrator can trust `status: OK` without re-reading the files.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REFS = resolve(__dirname, '..', 'references');

const id = process.argv[2];
const NO_NET = process.argv.includes('--no-net');
if (!id) { console.error('usage: verify-reference.mjs <id> [--no-net]'); process.exit(1); }

const VALID_COUNTRIES = ['KR', 'US', 'JP', 'TW', 'CN', 'UK', 'DE', 'FR', 'IT'];
const VALID_LOGO_TYPES = ['favicon', 'simpleicons', 'github'];
const VALID_CATEGORIES = ['ecommerce', 'fintech', 'saas', 'ai', 'consumer-tech', 'education', 'productivity', 'developer-tools', 'design-tools', 'backend-devops', 'automotive', 'marketing', 'government', 'healthcare'];
const RENDER_TYPES = ['button', 'input', 'card', 'badge', 'tab', 'toggle', 'toast', 'dialog', 'listItem', 'avatar'];
const PROOF_GATE_CUTOFF = '2026-06-01';
const NON_REGIONAL_HOSTS = /getdesign\.md|refero\.design|google\.com\/s2/i;
// Keep in sync with FIELD_ALIASES in src/lib/extract-tokens.ts (subset is fine —
// these are the keys the slash-multi-field parser bug actually swallows).
const KNOWN_FIELDS = ['background', 'bg', 'text', 'color', 'fg', 'border', 'radius', 'corner', 'padding', 'height', 'font', 'shadow', 'hover', 'pressed', 'focus', 'active', 'disabled', 'use', 'state', 'states', 'icon', 'width'];

const results = [];
const pass = (name, detail = '') => results.push({ ok: true, name, detail });
const fail = (name, detail = '') => results.push({ ok: false, name, detail });

const dir = join(REFS, id);
const mdPath = join(dir, 'DESIGN.md');
if (!existsSync(mdPath)) { console.error(`FAIL: ${mdPath} does not exist`); process.exit(1); }
const md = readFileSync(mdPath, 'utf-8');

// ── 1. Frontmatter: strict YAML + required keys ────────────────────────
let fm = null;
let fmClose = -1;
if (!md.startsWith('---\n')) fail('frontmatter-open', 'file must start with ---');
else {
  fmClose = md.indexOf('\n---\n', 4);
  if (fmClose < 0) fail('frontmatter-close', 'no closing ---');
  else {
    const raw = md.slice(4, fmClose);
    try { fm = yaml.load(raw); pass('yaml-strict-parse'); }
    catch (e) { fail('yaml-strict-parse', `frontmatter is not valid YAML (build-registry will reject it): ${e.message.split('\n')[0]}`); }
    // markdown leak (heading / col-0 bullet outside the tokens block)
    const fmRegion = raw.replace(/^tokens:\n(?:(?:[ \t].*)?\n)*/m, '');
    if (/^#{1,6}\s/m.test(fmRegion) || /^- /m.test(fmRegion)) fail('frontmatter-leak', 'markdown heading/bullet leaked into frontmatter');
    else pass('frontmatter-leak');
  }
}

if (fm) {
  if (fm.id === id) pass('fm-id'); else fail('fm-id', `frontmatter id "${fm.id}" != dir "${id}"`);
  if (typeof fm.name === 'string' && fm.name.length) pass('fm-name'); else fail('fm-name');
  if (VALID_COUNTRIES.includes(fm.country)) pass('fm-country'); else fail('fm-country', String(fm.country));
  if (VALID_CATEGORIES.includes(fm.category)) pass('fm-category'); else fail('fm-category', `"${fm.category}" not in canonical enum`);
  if (/^https?:\/\//.test(fm.homepage || '')) pass('fm-homepage'); else fail('fm-homepage', String(fm.homepage));
  if (/^#[0-9a-fA-F]{6}$/.test(fm.primary_color || '')) pass('fm-primary-color'); else fail('fm-primary-color', String(fm.primary_color));
  if (/^\d{4}-\d{2}-\d{2}$/.test(String(fm.verified || ''))) pass('fm-verified'); else fail('fm-verified', String(fm.verified));
  const logo = fm.logo || {};
  if (!VALID_LOGO_TYPES.includes(logo.type)) fail('logo-type', String(logo.type));
  else if (logo.type === 'favicon' && !/^https?:\/\//.test(logo.slug || '')) {
    // logos.ts getLogoUrl returns the slug VERBATIM for favicon — a bare domain renders a broken <img>.
    fail('logo-favicon-url', `favicon slug must be a full image URL, got "${logo.slug}" (use https://www.google.com/s2/favicons?domain=<domain>&sz=128 or a brand CDN icon URL)`);
  } else pass('logo-schema', `${logo.type}/${String(logo.slug).slice(0, 60)}`);
}

// ── 2. §1 canonical header + prose-first ───────────────────────────────
if (/^## 1\. Visual Theme & Atmosphere/m.test(md)) pass('sec1-header');
else fail('sec1-header', 'must be exactly "## 1. Visual Theme & Atmosphere"');
const sec1 = md.split(/^## 1\. Visual Theme & Atmosphere[^\n]*\n/m)[1] || '';
if (sec1.startsWith('\n')) pass('sec1-blank-line'); else fail('sec1-blank-line', 'blank line required after §1 header');
const firstLine = sec1.split('\n').map(l => l.trim()).find(l => l.length > 0) || '';
const nonProse = /^#{1,6}(\s|$)/.test(firstLine) || firstLine.startsWith('|') || /^[-+]\s/.test(firstLine) || /^\*\s(?!\*)/.test(firstLine) || /^\d+\.\s/.test(firstLine);
if (nonProse) fail('sec1-prose-first', firstLine.slice(0, 60)); else pass('sec1-prose-first');

// ── 3. §4 slash-multi-field + placeholder lint ─────────────────────────
const sec4 = md.match(/## 4\. Component[\s\S]*?(?=\n## 5\.|$)/i)?.[0] ?? '';
if (!sec4) fail('sec4-present', 'no "## 4. Component..." section');
const fieldBullets = sec4.split('\n').filter(l => /^[-*]\s+(?!\*\*)[A-Za-z]/.test(l));
const slashRe = new RegExp(` / \\*{0,2}(?:${KNOWN_FIELDS.join('|')})\\*{0,2}\\s*[:：]`, 'i');
const slashOffenders = fieldBullets.filter(l => { const c = l.indexOf(':'); return c !== -1 && slashRe.test(l.slice(c + 1)); });
if (slashOffenders.length) fail('sec4-slash-multifield', slashOffenders[0]); else pass('sec4-slash-multifield');
const placeholderOffenders = fieldBullets.filter(l => { const c = l.indexOf(':'); if (c === -1) return false; return /^(not\s+(measured|specified|applicable|available)|n\/a|unknown|tbd)\b/i.test(l.slice(c + 1).trim()); });
if (placeholderOffenders.length) fail('sec4-placeholder', placeholderOffenders[0]); else pass('sec4-placeholder');

// ── 4. Footer + proof gate + KR/TW regional rule ───────────────────────
const gated = fm && String(fm.verified) >= PROOF_GATE_CUTOFF;
const tier1Line = md.match(/^\*\*Tier 1 sources:\*\*\s*(.+)$/m)?.[1] ?? '';
const tier1Urls = tier1Line.match(/https?:\/\/[^\s,)]+/g) ?? [];
if (gated) {
  if (/^\*\*Verified:\*\*/m.test(md)) pass('footer-verified'); else fail('footer-verified', 'missing **Verified:** footer');
  if (tier1Urls.length >= 1) pass('footer-tier1-url', `${tier1Urls.length} URL(s)`); else fail('footer-tier1-url', '§4 footer "Tier 1 sources" lists no URL');
  if (fm && (fm.country === 'KR' || fm.country === 'TW')) {
    const regional = tier1Urls.filter(u => !NON_REGIONAL_HOSTS.test(u));
    if (regional.length >= 2) pass('kr-tw-regional', `${regional.length} brand-owned`);
    else fail('kr-tw-regional', `KR/TW needs >= 2 brand-owned Tier-1 sources, got ${regional.length}`);
  }
  const proofPath = join(dir, '.verification.md');
  if (!existsSync(proofPath)) fail('proof-file', '.verification.md missing');
  else {
    const proof = readFileSync(proofPath, 'utf-8');
    if (/^##\s+Proof/m.test(proof)) pass('proof-block'); else fail('proof-block', 'needs a "## Proof" heading');
    const rawSamples = (proof.match(/rgb\(|#[0-9a-fA-F]{6}\b|\b\d+px\b/g) ?? []).length;
    if (rawSamples >= 5) pass('proof-samples', `${rawSamples}`); else fail('proof-samples', `only ${rawSamples} raw samples (need >= 5)`);
    if (/https?:\/\//.test(proof)) pass('proof-url'); else fail('proof-url', 'proof needs >= 1 source URL');
  }
}

// ── 5. Token ↔ prose grounding + structured components ─────────────────
const tokens = fm?.tokens;
if (tokens) {
  const grounding = md.replace(/\ntokens:\n(?:[ \t].*(?:\n|$))*/, '\n').toLowerCase();
  const tokenColors = tokens.colors ?? tokens.color ?? {};
  const ungrounded = Object.entries(tokenColors).filter(([, hex]) => !grounding.includes(String(hex).toLowerCase()));
  if (ungrounded.length) fail('token-color-grounding', ungrounded.map(([r, h]) => `${r}=${h}`).join(' '));
  else pass('token-color-grounding', `${Object.keys(tokenColors).length} colors`);
  const comps = tokens.components;
  if (!comps || typeof comps !== 'object') fail('token-components', 'tokens.components missing or not structured');
  else {
    if (typeof tokens.components_harvested !== 'boolean') fail('components-harvested', 'components_harvested must be a boolean');
    else pass('components-harvested');
    let compFail = false;
    for (const [cname, c] of Object.entries(comps)) {
      if (typeof c !== 'object' || c === null) { fail('component-structured', `'${cname}' is a flat string`); compFail = true; continue; }
      if (!RENDER_TYPES.includes(c.type)) { fail('component-type', `'${cname}' type '${c.type}' not in 10 render types`); compFail = true; }
      for (const k of ['bg', 'fg', 'border']) {
        for (const hex of String(c[k] ?? '').match(/#[0-9a-fA-F]{6}/g) ?? []) {
          if (!grounding.includes(hex.toLowerCase())) { fail('component-hex-grounding', `${cname}.${k} ${hex} not grounded`); compFail = true; }
        }
      }
    }
    if (!compFail) pass('components-structured', `${Object.keys(comps).length} components`);
  }
} else fail('tokens-block', 'frontmatter has no tokens: block');

// ── 6. §7 Do/Don't markers + §10–15 presence ───────────────────────────
const GUIDELINE_MARKER = /^###\s+Do(?:['’]?s)?\b|^###\s+Don['’]?t|^[-*]\s+\*\*DO(?:N['’]?T)?\*\*/im;
if (GUIDELINE_MARKER.test(md)) pass('guideline-markers'); else fail('guideline-markers', '§7 needs "### Do" / "### Don\'t" headers (or - **DO** bullets)');
const philSections = (md.match(/^## 1[0-5]\. /gm) ?? []).length;
if (philSections === 6) pass('sections-10-15'); else fail('sections-10-15', `found ${philSections}/6 philosophy sections`);

// ── 7. Logo liveness (network) ─────────────────────────────────────────
if (!NO_NET && fm?.logo && VALID_LOGO_TYPES.includes(fm.logo.type)) {
  const { type, slug } = fm.logo;
  const url = type === 'github' ? `https://github.com/${slug}.png?size=64`
    : type === 'simpleicons' ? `https://cdn.simpleicons.org/${slug}`
    : slug;
  try {
    const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15000) });
    const buf = res.ok ? Buffer.from(await res.arrayBuffer()) : Buffer.alloc(0);
    const ctype = res.headers.get('content-type') || '';
    if (!res.ok) fail('logo-live', `HTTP ${res.status} for ${url}`);
    else if (!/image|svg|octet/.test(ctype)) fail('logo-live', `content-type "${ctype}" is not an image (${url})`);
    else if (type === 'favicon' && /google\.com\/s2/.test(url) && buf.length < 450) fail('logo-live', `favicon is ${buf.length}B — likely Google's generic globe; pick a brand CDN icon / simpleicons / github org instead`);
    else pass('logo-live', `${buf.length}B ${ctype.split(';')[0]}`);
  } catch (e) { fail('logo-live', `fetch error: ${e.message}`); }
}

// ── Report ─────────────────────────────────────────────────────────────
let failed = 0;
for (const r of results) {
  if (!r.ok) failed++;
  console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `  — ${r.detail}` : ''}`);
}
console.log(`\n${id}: ${results.length - failed}/${results.length} gates green${failed ? ` — ${failed} FAILING` : ''}`);
process.exit(failed ? 1 : 0);
