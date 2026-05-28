#!/usr/bin/env node
// scripts/ctx-prime.cjs — richer, run-scoped repo prime for omd-harness 1.6+.
//
// Pure node, no deps. Sub-5s on typical repos (<5k files). Emits
// <RUN_DIR>/ctx-prime.json with:
//   stack / brand_signal / surface_inventory / audience_hypothesis /
//   wow_moment_candidates / scanned_at / scan_duration_ms
//
// Usage: node scripts/ctx-prime.cjs <cwd> <run_dir>
// Falls back to cwd/.omd if run_dir omitted (for ad-hoc use).

const fs = require('node:fs');
const path = require('node:path');

const startedAt = Date.now();
const cwd = path.resolve(process.argv[2] || process.cwd());
const runDir = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(cwd, '.omd');
const outFile = path.join(runDir, 'ctx-prime.json');

const SKIP_DIRS = new Set([
  'node_modules', 'dist', 'build', '.next', '.nuxt', '.output',
  'coverage', '.git', '.cache', '.turbo', '.vercel', '.svelte-kit',
  'out', 'storybook-static', '__pycache__',
]);

function safeRead(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch { return null; }
}

function walk(dir, opts) {
  const { exts, max = 200, maxDepth = 6 } = opts;
  const results = [];
  (function rec(d, depth) {
    if (depth > maxDepth || results.length >= max) return;
    let entries;
    try { entries = fs.readdirSync(d, { withFileTypes: true }); }
    catch { return; }
    for (const e of entries) {
      if (e.name.startsWith('.') && e.name !== '.well-known') continue;
      if (SKIP_DIRS.has(e.name)) continue;
      const full = path.join(d, e.name);
      if (e.isDirectory()) { rec(full, depth + 1); continue; }
      if (!exts || exts.some((x) => e.name.endsWith(x))) {
        try {
          const stat = fs.statSync(full);
          results.push({ path: path.relative(cwd, full), size: stat.size });
          if (results.length >= max) return;
        } catch {}
      }
    }
  })(dir, 0);
  return results;
}

// --- 1. stack ---
const pkgRaw = safeRead(path.join(cwd, 'package.json'));
const pkg = pkgRaw ? safeJson(pkgRaw) : null;
const deps = pkg ? Object.assign({}, pkg.dependencies, pkg.devDependencies) : {};

function safeJson(s) { try { return JSON.parse(s); } catch { return null; } }

const stack = {
  framework: 'unknown',
  kind: pkg ? 'node' : (fs.existsSync(path.join(cwd, 'index.html')) ? 'static-html' : 'unknown'),
  ts: !!safeRead(path.join(cwd, 'tsconfig.json')),
  tailwind: !!deps['tailwindcss'] || !!safeRead(path.join(cwd, 'tailwind.config.js')) || !!safeRead(path.join(cwd, 'tailwind.config.ts')),
  has_shadcn: !!deps['@shadcn/ui'] || !!deps['shadcn-ui'],
  has_charts: !!(deps['recharts'] || deps['chart.js'] || deps['d3'] || deps['visx']),
  has_motion: !!(deps['framer-motion'] || deps['motion']),
};
if (deps['next']) stack.framework = 'next';
else if (deps['nuxt']) stack.framework = 'nuxt';
else if (deps['vite']) stack.framework = 'vite';
else if (deps['react']) stack.framework = 'react';
else if (deps['vue']) stack.framework = 'vue';
else if (deps['svelte'] || deps['@sveltejs/kit']) stack.framework = 'svelte';
else if (deps['solid-js']) stack.framework = 'solid';
else if (deps['astro']) stack.framework = 'astro';

// --- 2. brand signal (color + font + voice + language) ---
const cssLike = walk(cwd, { exts: ['.css', '.scss', '.tsx', '.jsx', '.vue', '.svelte', '.html'], max: 80 });

const hexCounts = new Map();
const fontFamilies = new Set();
let sampledChars = 0;
const SAMPLE_BUDGET = 600_000; // bytes

for (const f of cssLike) {
  if (sampledChars > SAMPLE_BUDGET) break;
  const content = safeRead(path.join(cwd, f.path));
  if (!content) continue;
  sampledChars += content.length;
  // hex colors
  const hexes = content.match(/#[0-9a-fA-F]{6}\b/g) || [];
  for (const h of hexes) {
    const norm = h.toLowerCase();
    if (norm === '#ffffff' || norm === '#000000') {
      hexCounts.set(norm, (hexCounts.get(norm) || 0) + 1);
      continue;
    }
    hexCounts.set(norm, (hexCounts.get(norm) || 0) + 1);
  }
  // font-family declarations
  const fams = content.match(/font-family\s*:\s*[^;]+/g) || [];
  for (const decl of fams) {
    const inside = decl.split(':').slice(1).join(':');
    const parts = inside.split(',').map((s) => s.trim().replace(/['"]/g, '').replace(/;.*/, ''));
    for (const p of parts.slice(0, 2)) {
      if (p && p.length < 40 && !p.startsWith('var(') && !/^(sans-serif|serif|monospace|system-ui|-apple-system|inherit|initial)$/i.test(p)) {
        fontFamilies.add(p);
      }
    }
  }
}

// dominant color: highest count excluding pure white/black
const sortedHex = [...hexCounts.entries()]
  .filter(([h]) => h !== '#ffffff' && h !== '#000000')
  .sort((a, b) => b[1] - a[1]);
const dominantColor = sortedHex[0]?.[0] || (hexCounts.get('#ffffff') ? '#ffffff' : null);
const secondaryColors = sortedHex.slice(1, 4).map(([h]) => h);

// language detection (README + commit msgs ratio of hangul vs ascii)
const readmeContent = safeRead(path.join(cwd, 'README.md')) || safeRead(path.join(cwd, 'README')) || '';
let language = 'en';
if (readmeContent) {
  const hangul = (readmeContent.match(/[가-힣]/g) || []).length;
  const ascii = (readmeContent.match(/[a-zA-Z]/g) || []).length;
  if (hangul > ascii * 0.3) language = 'ko';
  else if ((readmeContent.match(/[ぁ-んァ-ヶ一-龯]/g) || []).length > ascii * 0.3) language = 'ja';
}

// voice keywords (heuristic — categorize content keywords)
const voiceKeywords = [];
const lowerReadme = readmeContent.toLowerCase();
if (/data|metrics|dashboard|chart|table|kpi/.test(lowerReadme)) voiceKeywords.push('data-dense');
if (/fintech|finance|invest|trading|bank|pay/.test(lowerReadme)) voiceKeywords.push('fintech');
if (/ai|llm|gpt|claude|agent/.test(lowerReadme)) voiceKeywords.push('ai-tools');
if (/community|social|share|connect/.test(lowerReadme)) voiceKeywords.push('community');
if (/dev|developer|api|sdk|cli/.test(lowerReadme)) voiceKeywords.push('developer-tools');
if (/health|wellness|fitness|medical/.test(lowerReadme)) voiceKeywords.push('health');
if (/commerce|shop|store|product|buy/.test(lowerReadme)) voiceKeywords.push('commerce');
if (/design|brand|aesthetic|visual/.test(lowerReadme)) voiceKeywords.push('design-tools');
if (voiceKeywords.length === 0) voiceKeywords.push('general');

const brand_signal = {
  dominant_color_hex: dominantColor,
  secondary_colors: secondaryColors,
  font_families: [...fontFamilies].slice(0, 5),
  voice_keywords: voiceKeywords.slice(0, 4),
  language,
};

// --- 3. surface inventory (dedicated wider walk) ---
function classifySurface(p) {
  const lc = p.toLowerCase();
  const seg = lc.split('/');
  // route segment heuristic — look at parent dir name
  const parent = seg[seg.length - 2] || '';
  if (/builder|editor|create|new|compose/.test(parent)) return 'product';
  if (/dashboard|console|admin|manage/.test(parent)) return 'dashboard';
  if (/doc|guide|help|reference/.test(parent)) return 'docs';
  if (/onboard|signup|signin|login|auth/.test(parent)) return 'onboarding';
  if (/about|contact|company|team|marketing/.test(parent)) return 'marketing';
  if (/setting|profile|account/.test(parent)) return 'settings';
  if (/playground|sandbox|test|qa-/.test(parent)) return 'playground';
  // top-level page = landing
  if (/page\.(tsx|jsx|vue|svelte)$|index\.(tsx|jsx|vue|svelte)$|App\.(tsx|jsx|vue|svelte)$/.test(lc) &&
      seg.length <= 4) return 'landing';
  return 'other';
}

const routeFiles = walk(cwd, { exts: ['.tsx', '.jsx', '.vue', '.svelte'], max: 400, maxDepth: 8 })
  .filter((f) => /page\.(tsx|jsx|vue|svelte)$|index\.(tsx|jsx|vue|svelte)$|App\.(tsx|jsx|vue|svelte)$|\/(pages|routes)\//.test(f.path));
const pageFiles = routeFiles
  .slice(0, 30)
  .map((f) => ({ path: f.path, kind: classifySurface(f.path), size_kb: +(f.size / 1024).toFixed(1) }));

// --- 4. audience hypothesis ---
const audience_hypothesis = [];
const hasMarketingCopy = pageFiles.some((p) => p.kind === 'landing' || p.kind === 'marketing');
const hasInternalSurfaces = pageFiles.some((p) => p.kind === 'product' || p.kind === 'dashboard');
const readmeMentionsVisitors = /visitor|customer|user|investor|vc|prospect|signup|conversion/i.test(readmeContent);

if (readmeMentionsVisitors || hasMarketingCopy) {
  audience_hypothesis.push({
    label: '외부 트래픽 — SEO/conversion 우선, 톤 일탈 허용',
    confidence: 0.5,
    evidence: hasMarketingCopy ? 'landing/marketing surface 존재' : 'README가 외부 사용자 언급',
  });
}
if (hasInternalSurfaces) {
  audience_hypothesis.push({
    label: '기존 코드베이스 사용자 — 시각 일관성 우선',
    confidence: 0.35,
    evidence: `product/dashboard surface ${pageFiles.filter((p) => p.kind === 'product' || p.kind === 'dashboard').length}개`,
  });
}
if (audience_hypothesis.length === 0) {
  audience_hypothesis.push({
    label: '신규 사용자 — 첫인상 우선 (greenfield 추정)',
    confidence: 0.6,
    evidence: 'surface 인벤토리 비어있음',
  });
}
if (audience_hypothesis.length === 2) {
  audience_hypothesis.push({
    label: '둘 다 — 모듈러 컴포넌트로 분기',
    confidence: 0.15,
    evidence: 'fallback',
  });
}
// normalize confidence
const sum = audience_hypothesis.reduce((a, b) => a + b.confidence, 0) || 1;
for (const h of audience_hypothesis) h.confidence = +(h.confidence / sum).toFixed(2);
audience_hypothesis.sort((a, b) => b.confidence - a.confidence);

// --- 5. wow moment candidates ---
const wow_moment_candidates = [];
if (pageFiles.length >= 3) {
  wow_moment_candidates.push({
    label: `기존 ${pageFiles.length}-surface 통합 nav / 시각 일관성`,
    evidence: pageFiles.slice(0, 3).map((p) => p.path).join(', '),
  });
}
if (dominantColor && dominantColor !== '#ffffff') {
  wow_moment_candidates.push({
    label: `${dominantColor} 브랜드 컬러 + ${stack.framework} 모던 스택`,
    evidence: `dominant hex ${dominantColor} (${sortedHex[0]?.[1] || 0} occurrences)`,
  });
}
if (stack.has_charts) {
  wow_moment_candidates.push({
    label: '데이터 시각화 hero (이미 charts 의존성 보유)',
    evidence: 'recharts/d3/chart.js detected',
  });
}
if (brand_signal.voice_keywords.includes('fintech')) {
  wow_moment_candidates.push({ label: '핀테크 advisor 톤 — 숫자 강조 hero', evidence: 'voice_keywords includes fintech' });
}
if (brand_signal.voice_keywords.includes('ai-tools')) {
  wow_moment_candidates.push({ label: 'AI-first center-text hero (Anthropic/Vercel 패턴)', evidence: 'voice_keywords includes ai-tools' });
}
if (wow_moment_candidates.length === 0) {
  wow_moment_candidates.push({ label: '깔끔한 minimal hero — first impression', evidence: 'greenfield default' });
}

// --- emit ---
const ctx = {
  version: '1.6.0',
  cwd,
  package_name: pkg?.name ?? null,
  stack,
  brand_signal,
  surface_inventory: pageFiles,
  audience_hypothesis,
  wow_moment_candidates: wow_moment_candidates.slice(0, 5),
  scanned_at: new Date().toISOString(),
  scan_duration_ms: Date.now() - startedAt,
};

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(ctx, null, 2), 'utf8');
process.stdout.write(outFile + '\n');
