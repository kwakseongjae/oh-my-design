#!/usr/bin/env node
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_PATH = fileURLToPath(import.meta.url);
const QUALITY_STATUSES = new Set(['verified_v2', 'partial', 'legacy_snapshot']);
const QUALITY_RANK = { verified_v2: 2, partial: 1, legacy_snapshot: 0 };
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'app', 'application', 'for', 'from', 'in', 'into', 'of', 'on',
  'or', 'product', 'service', 'style', 'the', 'this', 'to', 'tool', 'ui', 'with',
  '같은', '그리고', '디자인', '서비스', '스타일', '앱', '위한', '처럼',
  'ため', 'アプリ', 'サービス', 'デザイン', '向け',
  '一个', '一個', '应用', '應用', '服务', '服務', '设计', '設計', '界面',
]);

const CATEGORY_ALIASES = Object.freeze({
  fintech: ['fintech', 'finance', 'financial', 'bank', 'banking', '핀테크', '금융', '은행', '金融', '銀行', '金融科技'],
  productivity: ['productivity', 'saas', 'b2b', 'enterprise', 'collaboration', 'workflow', '업무', '협업', '생산성', '기업용', '生産性', '業務', '協業', '企業', '协作', '協作', '企业', '生产力', '生產力'],
  'e-commerce': ['e-commerce', 'ecommerce', 'commerce', 'marketplace', 'shopping', '이커머스', '커머스', '쇼핑', '마켓', '通販', '買い物', '電商', '购物', '購物', '市集'],
  developer: ['developer', 'devtool', 'devtools', 'backend', 'api', 'coding', '개발자', '개발도구', 'デベロッパー', '開発者', '开发者', '開發者'],
  'design tools': ['design tool', 'design tools', 'creative tool', '디자인 도구', 'デザインツール', '设计工具', '設計工具'],
  ai: ['ai', 'llm', 'artificial intelligence', '인공지능', '生成ai', '人工知能', '人工智能'],
  consumer: ['consumer', 'social', 'community', 'lifestyle', '소비자', '소셜', '커뮤니티', '중고거래', '생활', '消費者', 'ソーシャル', 'コミュニティ', '社交', '社区', '社群'],
  government: ['government', 'public service', 'civic', '공공', '정부', '행정', '政府', '行政', '公共服務', '公共服务'],
  mobility: ['mobility', 'transport', 'automotive', '모빌리티', '자동차', '교통', '自動車', '交通', '移动出行', '移動出行'],
  healthcare: ['healthcare', 'medical', 'health', '헬스케어', '의료', '건강', '医療', '健康', '医疗', '醫療'],
  hr: ['hr', 'recruiting', 'jobs', 'talent', '채용', '인사', '구직', '採用', '求人', '人事', '招聘', '求职', '求職', '人才'],
  'real-estate': ['real estate', 'property', 'housing', '부동산', '주거', '不動産', '住宅', '房地产', '房地產', '房产', '房產'],
  education: ['education', 'learning', 'school', '교육', '학습', '학교', '教育', '学習', '學習', '学校', '學校'],
  content: ['content', 'media', 'news', 'publishing', '콘텐츠', '미디어', '뉴스', 'コンテンツ', 'メディア', '内容', '內容', '媒体', '媒體'],
  marketing: ['marketing', 'advertising', 'campaign', '마케팅', '광고', 'マーケティング', '広告', '营销', '行銷', '廣告'],
  travel: ['travel', 'booking', 'hospitality', '여행', '숙박', '旅行', '観光', '旅游', '旅遊', '住宿'],
  entertainment: ['entertainment', 'streaming', 'gaming', 'music', '엔터테인먼트', '게임', '음악', '娯楽', 'ゲーム', '音楽', '娱乐', '娛樂', '遊戲', '音乐', '音樂'],
});

function normalize(value) {
  return String(value ?? '')
    .normalize('NFKC')
    .toLocaleLowerCase('en-US')
    .replace(/[’']/g, '')
    .replace(/[^\p{L}\p{N}.+#-]+/gu, ' ')
    .trim();
}

function tokens(value) {
  return normalize(value)
    .split(/\s+/)
    .map((token) => token.replace(/^[+#.-]+|[+#.-]+$/g, ''))
    .filter((token) => token.length >= 2 && !STOP_WORDS.has(token));
}

function includesPhrase(haystack, phrase) {
  const normalizedPhrase = normalize(phrase);
  if (!normalizedPhrase) return false;
  if (/^[\p{Script=Han}\p{Script=Hangul}\p{Script=Hiragana}\p{Script=Katakana}]+$/u.test(normalizedPhrase)) {
    return haystack.includes(normalizedPhrase);
  }
  return (` ${haystack} `).includes(` ${normalizedPhrase} `);
}

function canonicalConcepts(value, synonymMap) {
  const normalized = normalize(value);
  const concepts = new Set(tokens(normalized));
  for (const [alias, canonical] of Object.entries(synonymMap)) {
    if (includesPhrase(normalized, alias)) concepts.add(normalize(canonical));
  }
  return concepts;
}

function intersection(left, right) {
  return [...left].filter((value) => right.has(value)).sort();
}

function parseJson(path, label) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    throw new Error(`${label} is missing or invalid at ${path}: ${error.message}`);
  }
}

export function resolveDataRoot({ cwd = process.cwd(), explicitRoot, scriptPath = SCRIPT_PATH } = {}) {
  const candidates = [
    explicitRoot ? resolve(cwd, explicitRoot) : null,
    join(cwd, '.codex', 'data'),
    join(cwd, '.claude', 'data'),
    join(cwd, '.opencode', 'data'),
    join(cwd, 'node_modules', 'oh-my-design-cli', 'data'),
    resolve(dirname(scriptPath), '..', '..', '..', 'data'),
  ].filter(Boolean);
  const seen = new Set();
  for (const candidate of candidates) {
    const canonical = resolve(candidate);
    if (seen.has(canonical)) continue;
    seen.add(canonical);
    if (existsSync(join(canonical, 'reference-fingerprints.json'))) return canonical;
  }
  throw new Error('reference-fingerprints.json not found; rerun `omd install-skills` and then `omd doctor`.');
}

export function loadReferenceQueryData(dataRoot) {
  const fingerprints = parseJson(
    join(dataRoot, 'reference-fingerprints.json'),
    'reference-fingerprints.json',
  );
  const quality = parseJson(
    join(dataRoot, 'reference-quality.json'),
    'reference-quality.json; rerun `omd install-skills` and then `omd doctor`',
  );
  const synonyms = existsSync(join(dataRoot, 'synonyms.json'))
    ? parseJson(join(dataRoot, 'synonyms.json'), 'synonyms.json')
    : { map: {} };

  if (!Array.isArray(fingerprints.items) || fingerprints.count !== fingerprints.items.length) {
    throw new Error('reference-fingerprints.json count/items mismatch; rerun `omd install-skills` and `omd doctor`.');
  }
  if (!Array.isArray(quality.items) || quality.count !== quality.items.length) {
    throw new Error('reference-quality.json count/items mismatch; rerun `omd install-skills` and `omd doctor`.');
  }
  if (quality.count !== fingerprints.count) {
    throw new Error(`catalog/quality count mismatch (${fingerprints.count} vs ${quality.count}); rerun \`omd install-skills\` and \`omd doctor\`.`);
  }

  const fingerprintIds = new Set();
  for (const item of fingerprints.items) {
    if (!item || typeof item.id !== 'string' || fingerprintIds.has(item.id)) {
      throw new Error('reference-fingerprints.json contains an invalid or duplicate id.');
    }
    fingerprintIds.add(item.id);
  }
  const qualityById = new Map();
  for (const item of quality.items) {
    if (!item || typeof item.id !== 'string' || !QUALITY_STATUSES.has(item.status) || qualityById.has(item.id)) {
      throw new Error('reference-quality.json contains an invalid status or duplicate id.');
    }
    qualityById.set(item.id, item);
  }
  const missingQuality = [...fingerprintIds].filter((id) => !qualityById.has(id));
  const unknownQuality = [...qualityById.keys()].filter((id) => !fingerprintIds.has(id));
  if (missingQuality.length || unknownQuality.length) {
    throw new Error(`catalog/quality id mismatch; rerun \`omd install-skills\` and \`omd doctor\`.`);
  }

  const synonymMap = synonyms?.map && typeof synonyms.map === 'object' ? synonyms.map : {};
  return {
    fingerprints: fingerprints.items,
    qualityById,
    synonymMap,
    referenceIndex: buildReferenceIndex(fingerprints.items, synonymMap),
    qualityGeneratedAt: quality.generated_at ?? null,
  };
}

export function buildReferenceIndex(fingerprints, synonymMap = {}) {
  const itemsById = new Map();
  const allToneConcepts = new Set();
  for (const item of fingerprints) {
    const toneConcepts = new Set();
    for (const keyword of item.tone_keywords ?? []) {
      for (const concept of canonicalConcepts(keyword, synonymMap)) {
        toneConcepts.add(concept);
        allToneConcepts.add(concept);
      }
    }
    itemsById.set(item.id, {
      toneConcepts,
      themeConcepts: canonicalConcepts(item.visual_theme ?? '', synonymMap),
    });
  }
  return { itemsById, allToneConcepts };
}

function categorySignals(normalizedTask) {
  const matches = [];
  for (const [category, aliases] of Object.entries(CATEGORY_ALIASES)) {
    if (aliases.some((alias) => includesPhrase(normalizedTask, alias))) matches.push(category);
  }
  return matches.sort();
}

function categoryMatches(itemCategory, signals) {
  const normalizedCategory = normalize(itemCategory).replace(/[-/]+/g, ' ');
  return signals.filter((signal) => {
    const normalizedSignal = normalize(signal).replace(/[-/]+/g, ' ');
    if (normalizedCategory.includes(normalizedSignal) || normalizedSignal.includes(normalizedCategory)) return true;
    const aliases = CATEGORY_ALIASES[signal] ?? [];
    return aliases.some((alias) =>
      normalizedCategory.includes(normalize(alias).replace(/[-/]+/g, ' ')));
  });
}

function policyFor(status) {
  return status === 'verified_v2'
    ? {
        token_policy: 'evidence-qualified-fields-only',
        requires_reverify: false,
        unknown_policy: 'omit-smallest-unresolved-field',
      }
    : {
        token_policy: 'context-only-reverify-first',
        requires_reverify: true,
        unknown_policy: 'omit-smallest-unresolved-field',
      };
}

export function queryReferences({
  task,
  brandHint,
  limit = 5,
  fingerprints,
  qualityById,
  synonymMap = {},
  referenceIndex,
  qualityGeneratedAt = null,
}) {
  const normalizedTask = normalize(task);
  const byId = new Map(fingerprints.map((item) => [item.id, item]));
  if (brandHint && !byId.has(brandHint)) {
    return {
      schema_version: 1,
      status: 'needs_clarification',
      reason: 'unknown-brand-id',
      query: { task, brand_hint: brandHint, categories: [], tone_terms: [] },
      quality_generated_at: qualityGeneratedAt,
      candidates: [],
    };
  }

  const queryConcepts = canonicalConcepts(normalizedTask, synonymMap);
  const index = referenceIndex ?? buildReferenceIndex(fingerprints, synonymMap);
  const toneSignals = intersection(queryConcepts, index.allToneConcepts);
  const categories = categorySignals(normalizedTask);
  const exactIdInTask = fingerprints.find((item) => includesPhrase(normalizedTask, item.id))?.id;
  const exactBrand = brandHint ?? exactIdInTask ?? null;

  const candidates = [];
  for (const item of fingerprints) {
    const quality = qualityById.get(item.id);
    if (!quality) throw new Error(`quality entry missing for ${item.id}`);
    const indexed = index.itemsById.get(item.id);
    if (!indexed) throw new Error(`reference index entry missing for ${item.id}`);
    const matchedTones = intersection(new Set(toneSignals), indexed.toneConcepts);
    const matchedCategories = categoryMatches(item.category ?? item.category_raw ?? '', categories);
    const matchedTheme = intersection(queryConcepts, indexed.themeConcepts).filter(
      (term) => !matchedTones.includes(term) && term.length >= 3,
    ).slice(0, 5);
    const matchedBrand = exactBrand === item.id;
    const semanticScore =
      (matchedBrand ? 100 : 0) +
      (matchedCategories.length * 12) +
      (matchedTones.length * 4) +
      matchedTheme.length;
    if (semanticScore <= 0) continue;
    candidates.push({
      id: item.id,
      match_score: semanticScore,
      matched: {
        exact_brand: matchedBrand,
        categories: matchedCategories,
        tone_terms: matchedTones,
        theme_terms: matchedTheme,
      },
      fingerprint: {
        category: item.category ?? item.category_raw ?? 'unknown',
        tone_keywords: item.tone_keywords ?? [],
        primary_color_hex: item.primary_color_hex ?? null,
      },
      quality: {
        status: quality.status,
        verified_at: quality.verified_at ?? null,
        evidence_coverage: quality.evidence_coverage ?? 0,
        surface_count: quality.surface_count ?? 0,
        source_count: quality.source_count ?? 0,
        conflict_count: quality.conflict_count ?? 0,
      },
      promotion: policyFor(quality.status),
    });
  }

  candidates.sort((left, right) =>
    Number(right.matched.exact_brand) - Number(left.matched.exact_brand) ||
    right.match_score - left.match_score ||
    QUALITY_RANK[right.quality.status] - QUALITY_RANK[left.quality.status] ||
    left.id.localeCompare(right.id),
  );

  const recognized = Boolean(exactBrand || categories.length || toneSignals.length);
  return {
    schema_version: 1,
    status: recognized && candidates.length ? 'ok' : 'needs_clarification',
    reason: recognized && candidates.length ? null : 'no-recognized-reference-signal',
    query: {
      task,
      brand_hint: exactBrand,
      categories,
      tone_terms: toneSignals,
    },
    quality_generated_at: qualityGeneratedAt,
    candidates: recognized ? candidates.slice(0, Math.max(1, Math.min(10, limit))) : [],
  };
}

function parseArgs(argv) {
  const parsed = { limit: 5, json: false };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--json') parsed.json = true;
    else if (arg === '--task') parsed.task = argv[++index];
    else if (arg === '--brand') parsed.brandHint = argv[++index];
    else if (arg === '--limit') parsed.limit = Number(argv[++index]);
    else if (arg === '--data-root') parsed.dataRoot = argv[++index];
    else throw new Error(`unknown argument: ${arg}`);
  }
  if (!parsed.task) throw new Error('--task is required');
  if (!Number.isInteger(parsed.limit) || parsed.limit < 1 || parsed.limit > 10) {
    throw new Error('--limit must be an integer from 1 to 10');
  }
  return parsed;
}

export function runCli(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    const dataRoot = resolveDataRoot({ explicitRoot: args.dataRoot });
    const data = loadReferenceQueryData(dataRoot);
    const result = queryReferences({
      task: args.task,
      brandHint: args.brandHint,
      limit: args.limit,
      ...data,
    });
    if (args.json) console.log(JSON.stringify(result, null, 2));
    else if (result.status !== 'ok') {
      console.log('No evidence-safe reference match. Clarify a brand, product category, or tone.');
    } else {
      for (const candidate of result.candidates) {
        console.log(`${candidate.id}\t${candidate.quality.status}\t${candidate.match_score}\t${candidate.promotion.token_policy}`);
      }
    }
    return 0;
  } catch (error) {
    console.error(`omd reference query: ${error.message}`);
    return 2;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(SCRIPT_PATH)) {
  process.exitCode = runCli();
}
