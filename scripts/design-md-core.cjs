const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { isResolvedTokenValue, validateCoreGraph, validateCoreManifest } = require('./design-md-core-schema.cjs');
const {
  CHANGE_POLICY,
  GOVERNANCE_COPY,
  PRIORITY_ORDER,
  claimBlocks,
  evaluatePortableCoreClaims,
} = require('./design-md-core-conformance.cjs');

const FORMAT_VERSION = '2.0.0';
const GRAPH_SCHEMA = 'https://oh-my-design.kr/schema/design-system-graph-v2.schema.json';
const MANIFEST_SCHEMA = 'https://oh-my-design.kr/schema/design-md-core-manifest-v2.schema.json';
const MIGRATION_EXTENSION = 'dev.oh-my-design.migration';
const SECTION_ORDER = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const SUPPORTED_PROJECTION_LOCALES = Object.freeze(['en', 'ko', 'ja', 'zh-cn', 'zh-tw']);
const DEFAULT_PROJECTION_LOCALE = 'en';
const SECTION_HEADINGS = Object.freeze({
  en: Object.freeze({
    experience: 'Experience',
    foundations: 'Foundations',
    'typography-assets': 'Typography & Assets',
    'components-states': 'Components & States',
    'layout-platforms': 'Layout & Platforms',
    'content-locales': 'Content & Locales',
    governance: 'Governance',
  }),
  ko: Object.freeze({
    experience: '경험',
    foundations: '기반',
    'typography-assets': '타이포그래피와 에셋',
    'components-states': '컴포넌트와 상태',
    'layout-platforms': '레이아웃과 플랫폼',
    'content-locales': '콘텐츠와 로케일',
    governance: '거버넌스',
  }),
  ja: Object.freeze({
    experience: 'エクスペリエンス',
    foundations: '基盤',
    'typography-assets': 'タイポグラフィとアセット',
    'components-states': 'コンポーネントと状態',
    'layout-platforms': 'レイアウトとプラットフォーム',
    'content-locales': 'コンテンツとロケール',
    governance: 'ガバナンス',
  }),
  'zh-cn': Object.freeze({
    experience: '体验',
    foundations: '基础',
    'typography-assets': '字体与资产',
    'components-states': '组件与状态',
    'layout-platforms': '布局与平台',
    'content-locales': '内容与本地化',
    governance: '治理',
  }),
  'zh-tw': Object.freeze({
    experience: '體驗',
    foundations: '基礎',
    'typography-assets': '字型與資產',
    'components-states': '元件與狀態',
    'layout-platforms': '版面與平台',
    'content-locales': '內容與在地化',
    governance: '治理',
  }),
});

function projectionLocale(graph) {
  const locale = graph?.projection?.locale ?? DEFAULT_PROJECTION_LOCALE;
  if (!SUPPORTED_PROJECTION_LOCALES.includes(locale)) {
    throw new Error(`unsupported Core v2 projection locale: ${String(locale)}`);
  }
  return locale;
}

function sha256(value) {
  return crypto.createHash('sha256').update(value).digest('hex');
}

function stableJson(value) {
  if (Array.isArray(value)) return value.map(stableJson);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableJson(value[key])]));
}

function jsonBytes(value) {
  return `${JSON.stringify(stableJson(value), null, 2)}\n`;
}

function normalizeLf(value) {
  return value.replace(/\r\n?/g, '\n');
}

function canonicalTarget(file) {
  const absolute = path.resolve(file);
  if (fs.existsSync(absolute)) return fs.realpathSync.native(absolute);
  const suffix = [];
  let cursor = absolute;
  while (!fs.existsSync(cursor)) {
    const parent = path.dirname(cursor);
    if (parent === cursor) break;
    suffix.unshift(path.basename(cursor));
    cursor = parent;
  }
  const resolvedParent = fs.existsSync(cursor) ? fs.realpathSync.native(cursor) : cursor;
  return path.join(resolvedParent, ...suffix);
}

function pathsAlias(left, right) {
  const leftAbsolute = path.resolve(left);
  const rightAbsolute = path.resolve(right);
  if (canonicalTarget(leftAbsolute) === canonicalTarget(rightAbsolute)) return true;
  if (!fs.existsSync(leftAbsolute) || !fs.existsSync(rightAbsolute)) return false;
  const leftStat = fs.statSync(leftAbsolute);
  const rightStat = fs.statSync(rightAbsolute);
  return leftStat.dev === rightStat.dev && leftStat.ino === rightStat.ino;
}

function assertPathDoesNotAliasSources(target, sources, label = 'output') {
  for (const source of sources.filter(Boolean)) {
    if (pathsAlias(target, source)) {
      throw new Error(`refusing to write ${label} over source DESIGN.md: ${path.resolve(source)}`);
    }
  }
}

function frontmatterRange(markdown) {
  const opening = markdown.match(/^---(?:\r?\n)/);
  if (!opening) return null;
  const fence = /(?:^|\r?\n)---(?:\r?\n|$)/g;
  fence.lastIndex = opening[0].length;
  const close = fence.exec(markdown);
  if (!close) return null;
  const start = close.index + (close[0].startsWith('\n') || close[0].startsWith('\r') ? 1 : 0);
  const end = close.index + close[0].length;
  return { start: 0, end, contentStart: opening[0].length, contentEnd: start };
}

function headingOffsets(markdown, from) {
  const offsets = [];
  let position = from;
  let fenced = null;
  const inactiveRanges = [...enclosingHtmlCommentRanges(markdown), ...inertHtmlBlockRanges(markdown)];
  for (const line of markdown.slice(from).split(/(?<=\n)/)) {
    const raw = line.replace(/\r?\n$/, '');
    const fence = raw.match(/^\s*(```+|~~~+)/)?.[1]?.[0] ?? null;
    if (fence) fenced = fenced === null ? fence : fenced === fence ? null : fenced;
    if (!fenced && !indexInsideRanges(position, inactiveRanges)) {
      const match = raw.match(/^##\s+(.+?)\s*$/);
      if (match) offsets.push({ start: position, headingEnd: position + line.length, heading: match[1].replace(/\s+##$/, '').trim() });
    }
    position += line.length;
  }
  return offsets;
}

function markdownFenceRanges(markdown) {
  const ranges = [];
  let open = null;
  let position = 0;
  for (const line of normalizeLf(markdown).split(/(?<=\n)/)) {
    const marker = line.match(/^\s*(`{3,}|~{3,})/)?.[1];
    if (marker) {
      if (!open) open = { char: marker[0], length: marker.length, start: position };
      else if (marker[0] === open.char && marker.length >= open.length) {
        ranges.push([open.start, position + line.length]);
        open = null;
      }
    }
    position += line.length;
  }
  if (open) ranges.push([open.start, markdown.length]);
  return ranges;
}

function enclosingHtmlCommentRanges(markdown) {
  const ranges = [];
  const marker = /<!--|-->/g;
  let open = null;
  let match;
  while ((match = marker.exec(markdown))) {
    if (match[0] === '<!--' && open === null) open = match.index;
    else if (match[0] === '-->' && open !== null) {
      const end = marker.lastIndex;
      const content = markdown.slice(open, end);
      // Stable Core markers are themselves comments. Only a comment that
      // encloses additional marker comments is an inactive wrapper.
      if ((content.match(/<!--/g) ?? []).length > 1) ranges.push([open, end]);
      open = null;
    }
  }
  if (open !== null) ranges.push([open, markdown.length]);
  return ranges;
}

function htmlCommentRanges(markdown) {
  return [...markdown.matchAll(/<!--[\s\S]*?(?:-->|$)/g)]
    .map((match) => [match.index, match.index + match[0].length]);
}

function inertHtmlBlockRanges(markdown) {
  const ranges = [];
  const patterns = [
    /<(template|script|style|pre|noscript|iframe)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,
    /<([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bhidden\b|\baria-hidden\s*=\s*["']?true|\bstyle\s*=\s*(?:["'][^"']*\b(?:display\s*:\s*none|visibility\s*:\s*hidden)[^"']*["']|[^\s>]*(?:display\s*:\s*none|visibility\s*:\s*hidden)[^\s>]*)))[^>]*>[\s\S]*?<\/\1\s*>/gi,
  ];
  for (const pattern of patterns) {
    for (const match of markdown.matchAll(pattern)) ranges.push([match.index, match.index + match[0].length]);
  }
  const hiddenContainerOpen = /<(?!(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b)([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bhidden\b|\baria-hidden\s*=\s*["']?true|\bstyle\s*=\s*(?:["'][^"']*\b(?:display\s*:\s*none|visibility\s*:\s*hidden)[^"']*["']|[^\s>]*(?:display\s*:\s*none|visibility\s*:\s*hidden)[^\s>]*)))[^>]*>/gi;
  for (const match of markdown.matchAll(hiddenContainerOpen)) {
    if (indexInsideRanges(match.index, ranges)) continue;
    const remainder = markdown.slice(match.index + match[0].length);
    if (!new RegExp(`</${match[1]}\\s*>`, 'i').test(remainder)) {
      ranges.push([match.index, markdown.length]);
    }
  }
  return ranges;
}

function indexInsideRanges(index, ranges) {
  return ranges.some(([start, end]) => index >= start && index < end);
}

function segmentDocument(markdown) {
  const frontmatter = frontmatterRange(markdown);
  const bodyStart = frontmatter?.end ?? 0;
  const headings = headingOffsets(markdown, bodyStart);
  const boundaries = [];
  if (frontmatter) boundaries.push({ kind: 'frontmatter', start: 0, end: frontmatter.end, heading: null });
  if (headings.length === 0) {
    if (bodyStart < markdown.length) boundaries.push({ kind: 'preamble', start: bodyStart, end: markdown.length, heading: null });
  } else {
    if (headings[0].start > bodyStart) boundaries.push({ kind: 'preamble', start: bodyStart, end: headings[0].start, heading: null });
    headings.forEach((heading, index) => boundaries.push({
      kind: 'section',
      start: heading.start,
      end: headings[index + 1]?.start ?? markdown.length,
      heading: heading.heading,
      headingEnd: heading.headingEnd,
    }));
  }
  return boundaries.map((segment, index) => {
    const content = markdown.slice(segment.start, segment.end);
    return {
      id: `source-${String(index + 1).padStart(3, '0')}`,
      order: index,
      kind: segment.kind,
      heading: segment.heading,
      start: segment.start,
      end: segment.end,
      sha256: sha256(content),
      content,
      body: segment.kind === 'section' ? markdown.slice(segment.headingEnd, segment.end).replace(/^\r?\n/, '') : content,
    };
  });
}

function coreSections(markdown) {
  const inactiveRanges = [
    ...markdownFenceRanges(markdown),
    ...enclosingHtmlCommentRanges(markdown),
    ...inertHtmlBlockRanges(markdown),
  ];
  const matches = [...markdown.matchAll(/^<!--\s*design-md:section\s+([a-z-]+)\s*-->\s*\r?\n##\s+(\d+)\.\s+([^\r\n]+)\s*$/gm)]
    .filter((match) => !indexInsideRanges(match.index, inactiveRanges));
  return matches.map((match, index) => ({
    id: match[1],
    heading: match[3].trim(),
    order: Number(match[2]),
    start: match.index,
    bodyStart: match.index + match[0].length,
    end: matches[index + 1]?.index ?? markdown.length,
    body: markdown.slice(match.index + match[0].length, matches[index + 1]?.index ?? markdown.length).replace(/^\r?\n/, '').trim(),
  }));
}

function projectionLocaleFromMarkdown(markdown) {
  const requiredClaims = new Set([
    'scope', 'primary-tasks', 'foundations', 'authority',
    'application-priority', 'unknowns', 'changes',
  ]);
  const declared = coreSections(markdown)
    .flatMap((section) => claimBlocks(section.body))
    .filter((claim) => requiredClaims.has(claim.id))
    .map((claim) => claim.attributes.lang)
    .filter(Boolean);
  if (declared.length === 0) return DEFAULT_PROJECTION_LOCALE;
  if (declared.some((locale) => !SUPPORTED_PROJECTION_LOCALES.includes(locale))) return null;
  const locales = [...new Set(declared)];
  return locales.length === 1 ? locales[0] : null;
}

function scalar(frontmatter, key) {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  if (!match) return null;
  return match[1].replace(/\s+#.*$/, '').trim().replace(/^['"]|['"]$/g, '');
}

function titleName(markdown, frontmatter) {
  const name = scalar(frontmatter, 'name') || scalar(frontmatter, 'display_name') || scalar(frontmatter, 'display_name_kr');
  if (name) return name;
  const heading = markdown.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim();
  if (heading) {
    return heading
      .replace(/^Design System Inspiration of\s+/i, '')
      .replace(/\s+(?:—|-)\s+Design Reference$/i, '')
      .replace(/\s+Design System$/i, '')
      .trim();
  }
  return null;
}

function classifyFormat(markdown, segments) {
  const core = coreSections(markdown);
  if (core.length === 7 && core.map((item) => item.id).join('|') === SECTION_ORDER.join('|')) return 'core-v2';
  const hasLegacyFrontmatter = segments[0]?.kind === 'frontmatter';
  const numbered = segments
    .filter((segment) => segment.kind === 'section')
    .map((segment) => Number(segment.heading?.match(/^(\d+)\./)?.[1]))
    .filter(Number.isFinite);
  const max = numbered.length ? Math.max(...numbered) : 0;
  if (hasLegacyFrontmatter && max === 16) return 'legacy-16';
  if (hasLegacyFrontmatter && max === 15) return 'legacy-15';
  if (hasLegacyFrontmatter && max === 13) return 'legacy-13';
  return 'legacy-unmarked';
}

function cleanTop(markdown) {
  const normalized = normalizeLf(markdown);
  const first = normalized.split('\n').find((line) => line.trim()) ?? '';
  const beforeFirstSection = markdown.slice(0, markdown.search(/<!--\s*design-md:section|^##\s/m) < 0 ? markdown.length : markdown.search(/<!--\s*design-md:section|^##\s/m));
  const preambleAfterTitle = beforeFirstSection.replace(/^\s*#\s+[^\n]*\n?/, '');
  const internalIdentity = /(?:oh-my-design|\bomd\b|quality[_ -]?tier|verified[_ -]?at)/i;
  const metadataLedger = /(?:^|\n)\s*(?:[-*]\s*)?(?:vendor|provider|model(?:\s+provider)?|repository(?:\s+url)?|source\s+repository|extraction(?:\s+(?:timestamp|time|date))?|extracted\s+at|evidence\s+ledger|verification(?:\s+(?:tier|status|timestamp|date))?|quality(?:\s+tier)?|generator(?:\s+name)?|generated\s+by|tool(?:\s+name)?|producer|벤더|공급자|모델(?:\s*공급자)?|저장소(?:\s*URL)?|추출(?:\s*시각|\s*일시)?|근거(?:\s*원장)?|검증(?:\s*상태|\s*등급)?|품질(?:\s*등급)?|생성(?:\s*도구|\s*모델)?|도구|ベンダー|プロバイダー|モデル(?:\s*プロバイダー)?|リポジトリ(?:\s*URL)?|抽出(?:\s*日時)?|エビデンス(?:\s*台帳)?|検証(?:\s*状態|\s*階層)?|品質(?:\s*階層)?|生成(?:\s*ツール|\s*モデル)?|ツール|供應商|供应商|提供者|模型(?:\s*提供者)?|儲存庫(?:\s*URL)?|存储库(?:\s*URL)?|提取(?:\s*時間|\s*时间)?|擷取(?:\s*時間)?|證據(?:\s*台帳)?|证据(?:\s*台账)?|驗證(?:\s*狀態|\s*層級)?|验证(?:\s*状态|\s*层级)?|品質(?:\s*層級)?|质量(?:\s*层级)?|生成(?:\s*工具|\s*模型)?|工具)\s*[:：]/i;
  return first.startsWith('# ')
    && !markdown.startsWith('---')
    && !internalIdentity.test(preambleAfterTitle)
    && !metadataLedger.test(preambleAfterTitle);
}

function mapLegacyHeading(heading) {
  const title = String(heading ?? '').replace(/^\d+(?:\.\d+)*\.\s*/, '').toLowerCase();
  if (/typograph|font|icon|imag|illustrat|asset|logo|visual effect/.test(title)) return 'typography-assets';
  if (/component|\bstates?\b|interaction state|atomic anatomy/.test(title)) return 'components-states';
  if (/layout|grid|responsive|platform|reflow|spacing & layout/.test(title)) return 'layout-platforms';
  if (/voice|microcopy|content|locale|international|language/.test(title)) return 'content-locales';
  if (/color|spacing|radius|shape|elevation|depth|motion|token reference|dark mode/.test(title)) return 'foundations';
  if (/visual theme|atmosphere|brand narrative|principle|persona|personality|philosophy|when to/.test(title)) return 'experience';
  if (/do('|’)s|don't|dont|anti-pattern|agent prompt|guideline|governance|implementation|verification|source|evidence|accessibility|refuse|boundary/.test(title)) return 'governance';
  return null;
}

const INTERNAL_LINE = /(?:oh-my-design|\bomd(?::|\b)|data-omd-|omd:add-reference|omd:migrate|quality[_ -]?tier|migration report)/i;
const EVIDENCE_LEDGER_LINE = /^\s*(?:\*\*)?(?:verified|tier\s*[123]\s+sources?|captured|checked|verification footer)(?:\*\*)?\s*:/i;

function portableBlocks(body) {
  const cleaned = normalizeLf(body)
    .split('\n')
    .filter((line) => !INTERNAL_LINE.test(line) && !EVIDENCE_LEDGER_LINE.test(line))
    .join('\n')
    .replace(/<!--[^]*?-->/g, '')
    .trim();
  if (!cleaned) return [];
  return cleaned.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
}

function snippetFor(segment, remaining) {
  const title = String(segment.heading ?? '').replace(/^\d+(?:\.\d+)*\.\s*/, '').trim();
  const blocks = portableBlocks(segment.body);
  if (blocks.length === 0 || remaining < 80) return { text: '', complete: false };
  const bodyProvidesStructure = /^#{3,6}\s/.test(blocks[0]);
  let content = bodyProvidesStructure ? '' : `### ${title}\n\n`;
  let complete = true;
  for (const block of blocks) {
    const portableBlock = bodyProvidesStructure ? block : block.replace(/^###(?!#)\s+/gm, '#### ');
    if (content.length + portableBlock.length + 2 > remaining) {
      complete = false;
      if (content.length <= (bodyProvidesStructure ? 0 : title.length + 8) && remaining - content.length > 80) {
        content += `${portableBlock.slice(0, remaining - content.length - 1).replace(/\s+\S*$/, '')}…`;
      }
      break;
    }
    content += `${portableBlock}\n\n`;
  }
  return { text: content.trim(), complete };
}

function slug(value) {
  const output = value
    .normalize('NFKD')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9.-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return /^[a-z]/.test(output) ? output : `value-${output || 'unknown'}`;
}

function extractColorTokens(frontmatter) {
  const source = frontmatter.match(/^\s{2}source:\s*(.+)$/m)?.[1]?.replace(/['"]/g, '').trim();
  if (!source || source === 'prose-derived') return {};
  const colorsStart = frontmatter.search(/^\s{2}colors:\s*$/m);
  if (colorsStart < 0) return {};
  const rest = frontmatter.slice(colorsStart).split('\n').slice(1);
  const tokens = {};
  for (const line of rest) {
    if (/^\s{0,2}\S/.test(line)) break;
    const match = line.match(/^\s{4}([^:]+):\s*['"]?(#[0-9a-fA-F]{6})['"]?/);
    if (!match) continue;
    tokens[`color.${slug(match[1])}`] = { $type: 'color', $value: match[2].toLowerCase() };
  }
  return tokens;
}

function buildGraphFromLegacy(markdown, inspection, options) {
  const frontmatterSegment = inspection.segments.find((segment) => segment.kind === 'frontmatter');
  const frontmatter = frontmatterSegment?.content
    .replace(/^---\r?\n/, '')
    .replace(/\r?\n---\r?\n?$/, '') ?? '';
  const mapped = Object.fromEntries(SECTION_ORDER.map((id) => [id, []]));
  const budgets = {
    experience: 1600, foundations: 1600, 'typography-assets': 1400, 'components-states': 1600,
    'layout-platforms': 1200, 'content-locales': 1200, governance: 1200,
  };
  const mappedSegmentIds = [];
  const partiallyMappedSegmentIds = [];
  const unmappedSegmentIds = [];
  for (const segment of inspection.segments) {
    if (segment.kind !== 'section') {
      unmappedSegmentIds.push(segment.id);
      continue;
    }
    const target = mapLegacyHeading(segment.heading);
    if (!target) {
      unmappedSegmentIds.push(segment.id);
      continue;
    }
    const used = mapped[target].reduce((total, item) => total + item.length + 2, 0);
    const snippet = snippetFor(segment, budgets[target] - used);
    if (snippet.text) {
      if (snippet.complete) mappedSegmentIds.push(segment.id);
      else {
        partiallyMappedSegmentIds.push(segment.id);
        unmappedSegmentIds.push(segment.id);
      }
      mapped[target].push(snippet.text);
    } else {
      unmappedSegmentIds.push(segment.id);
    }
  }

  const experienceText = mapped.experience.join('\n\n');
  const governanceText = mapped.governance.join('\n\n');
  const graph = {
    $schema: GRAPH_SCHEMA,
    schema_version: FORMAT_VERSION,
    identity: {
      name: inspection.name,
      kind: options.identityKind ?? (frontmatter ? 'evidence-backed-reconstruction' : 'portable-brief'),
      scope: options.scope ?? (frontmatter ? `Reference reconstruction for ${inspection.name}` : `Portable design brief for ${inspection.name}`),
    },
    projection: {
      path: 'DESIGN.md',
      sha256: '0'.repeat(64),
      locale: options.projectionLocale ?? DEFAULT_PROJECTION_LOCALE,
    },
    experience: {
      ...(experienceText ? { summary: experienceText } : {}),
    },
    foundations: {
      ...((frontmatter && Object.keys(extractColorTokens(frontmatter)).length) ? { tokens: extractColorTokens(frontmatter) } : {}),
      ...(mapped.foundations.length ? { rules: mapped.foundations } : {}),
    },
    typography_assets: mapped['typography-assets'].length ? { rules: mapped['typography-assets'] } : {},
    components_states: mapped['components-states'].length ? { rules: mapped['components-states'] } : {},
    layout_platforms: mapped['layout-platforms'].length ? { rules: mapped['layout-platforms'] } : {},
    content_locales: mapped['content-locales'].length ? { voice: mapped['content-locales'] } : {},
    governance: {
      unknown_policy: 'absent-at-smallest-unresolved-boundary',
      ...(governanceText ? { change_policy: mapped.governance } : {}),
      decisions: [],
    },
    extensions: {
      [MIGRATION_EXTENSION]: {
        source_sha256: inspection.sourceSha256,
        input_format: inspection.format,
        original_segments: inspection.segments.map(({ body, ...segment }) => segment),
        mapped_segment_ids: mappedSegmentIds,
        partially_mapped_segment_ids: partiallyMappedSegmentIds,
        unmapped_segment_ids: unmappedSegmentIds,
      },
    },
  };
  return graph;
}

function buildGraphFromCore(markdown, inspection, options) {
  const sections = Object.fromEntries(coreSections(markdown).map((section) => [section.id, section.body]));
  const authorityKind = markdown.match(/<!--\s*design-md:claim\s+authority\b[^>]*\bkind=(project-system|evidence-backed-reconstruction|portable-brief)\b[^>]*-->/i)?.[1];
  const graph = {
    $schema: GRAPH_SCHEMA,
    schema_version: FORMAT_VERSION,
    identity: {
      name: inspection.name,
      kind: options.identityKind ?? authorityKind ?? 'portable-brief',
      scope: options.scope ?? `Portable design brief for ${inspection.name}`,
    },
    projection: {
      path: 'DESIGN.md',
      sha256: '0'.repeat(64),
      locale: options.projectionLocale ?? inspection.projectionLocale ?? DEFAULT_PROJECTION_LOCALE,
    },
    experience: sections.experience ? { summary: sections.experience } : {},
    foundations: sections.foundations ? { rules: [sections.foundations] } : {},
    typography_assets: sections['typography-assets'] ? { rules: [sections['typography-assets']] } : {},
    components_states: sections['components-states'] ? { rules: [sections['components-states']] } : {},
    layout_platforms: sections['layout-platforms'] ? { rules: [sections['layout-platforms']] } : {},
    content_locales: sections['content-locales'] ? { voice: [sections['content-locales']] } : {},
    governance: sections.governance ? { change_policy: [sections.governance] } : {},
    extensions: {
      [MIGRATION_EXTENSION]: {
        source_sha256: inspection.sourceSha256,
        input_format: inspection.format,
        original_segments: inspection.segments.map(({ body, ...segment }) => segment),
        mapped_segment_ids: inspection.segments.map((segment) => segment.id),
        partially_mapped_segment_ids: [],
        unmapped_segment_ids: [],
      },
    },
  };
  graph.extensions[MIGRATION_EXTENSION].projection_observation_graph_sha256 = graphProjectionStateSha256(graph);
  return graph;
}

function graphProjectionStateSha256(graph) {
  return sha256(JSON.stringify(stableJson({
    projection_locale: graph?.projection?.locale,
    identity: graph?.identity,
    experience: graph?.experience,
    foundations: graph?.foundations,
    typography_assets: graph?.typography_assets,
    components_states: graph?.components_states,
    layout_platforms: graph?.layout_platforms,
    content_locales: graph?.content_locales,
    governance: graph?.governance,
  })));
}

function exactObservedCoreProjection(graph) {
  const migration = graph?.extensions?.[MIGRATION_EXTENSION];
  if (migration?.input_format !== 'core-v2'
    || migration?.projection_observation_graph_sha256 !== graphProjectionStateSha256(graph)
    || !Array.isArray(migration.original_segments)) return null;
  const source = migration.original_segments.map((segment) => segment?.content ?? '').join('');
  return source && inspectDesignMd(source).sourceValidation.valid ? source : null;
}

function graphFromCoreProjection(markdown, options = {}) {
  const inspection = options.inspection ?? inspectDesignMd(markdown, options);
  if (inspection.format !== 'core-v2' || !inspection.sourceValidation.valid) {
    throw new Error('DESIGN.md is not a structurally valid Core v2 projection');
  }
  return buildGraphFromCore(markdown, inspection, options);
}

function renderContent(value) {
  if (!value) return '';
  if (Array.isArray(value)) return value.filter(Boolean).join('\n\n');
  return String(value).trim();
}

function renderTokens(tokens) {
  const entries = Object.entries(tokens ?? {})
    .filter(([, token]) => isResolvedTokenValue(token?.$value))
    .sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0);
  if (entries.length === 0) return '';
  const tokenValue = (value) => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean' || value === null) return String(value);
    return JSON.stringify(stableJson(value));
  };
  const inlineCode = (value) => {
    const serialized = tokenValue(value);
    const longestFence = Math.max(0, ...([...serialized.matchAll(/`+/g)].map((match) => match[0].length)));
    const fence = '`'.repeat(longestFence + 1);
    const padding = serialized.startsWith('`') || serialized.endsWith('`') ? ' ' : '';
    return `${fence}${padding}${serialized}${padding}${fence}`;
  };
  const lines = entries.map(([id, token]) => `- **${id}**: ${inlineCode(token.$value)}${token.$description ? ` — ${token.$description}` : ''}`);
  return `### Semantic tokens\n\n${lines.join('\n')}`;
}

function renderLabelledList(label, values, ordered = false) {
  if (!Array.isArray(values) || values.length === 0) return '';
  const normalized = values.map((value) => String(value).trim()).filter(Boolean);
  if (normalized.length === 0) return '';
  const isPortableBlock = (value) => value.includes('\n') || /^(?:#{3,6}\s|```|~~~|>|[-*+]\s|\d+\.\s|\|)/.test(value);
  if (normalized.every(isPortableBlock)) return normalized.join('\n\n');
  const rendered = normalized.map((value, index) => (
    isPortableBlock(value) ? value : `${ordered ? `${index + 1}.` : '-'} ${value}`
  ));
  return `### ${label}\n\n${rendered.join('\n\n')}`;
}

function renderClaim(id, content, attributes = '') {
  if (!content) return '';
  const suffix = attributes ? ` ${attributes}` : '';
  return `<!-- design-md:claim ${id}${suffix} -->\n${content}\n<!-- design-md:claim-end -->`;
}

function escapeMarkdownTableCell(value) {
  if (value === null || value === undefined) return '';
  const serialized = typeof value === 'object'
    ? JSON.stringify(stableJson(value))
    : String(value);
  return normalizeLf(serialized)
    .replace(/&/g, '&amp;')
    .replace(/\\/g, '&#92;')
    .replace(/\|/g, '&#124;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

function renderMarkdownTable(headings, rows) {
  const columnCount = headings.length;
  const header = headings.map(escapeMarkdownTableCell);
  const body = rows.map((row) => {
    const cells = Array.from({ length: columnCount }, (_, index) => escapeMarkdownTableCell(row[index]));
    return `| ${cells.join(' | ')} |`;
  });
  return [
    `| ${header.join(' | ')} |`,
    `|${header.map(() => '---').join('|')}|`,
    ...body,
  ].join('\n');
}

function renderTypographyAssets(value = {}) {
  const chunks = [];
  if (Array.isArray(value.roles) && value.roles.length) {
    const columns = [
      ['Role', 'id'], ['Usage', 'usage'], ['Family', 'family'], ['Size', 'size'],
      ['Weight', 'weight'], ['Line height', 'line_height'], ['Tracking', 'tracking'],
    ].filter(([, key], index) => index < 2 || value.roles.some((role) => Object.hasOwn(role, key)));
    const headings = columns.map(([label]) => label);
    const rows = value.roles.map((role) => columns.map(([, key]) => role[key] ?? ''));
    chunks.push(`### Type roles\n\n${renderMarkdownTable(headings, rows)}`);
  }
  if (Array.isArray(value.assets) && value.assets.length) {
    const columns = [
      ['Asset', 'id'], ['Kind', 'kind'], ['Source status', 'source_status'],
      ['License status', 'license_status'], ['Source', 'source'], ['Notes', 'notes'],
    ].filter(([, key], index) => index < 4 || value.assets.some((asset) => Object.hasOwn(asset, key)));
    const headings = columns.map(([label]) => label);
    const rows = value.assets.map((asset) => columns.map(([, key]) => asset[key] ?? ''));
    chunks.push(`### Assets\n\n${renderMarkdownTable(headings, rows)}`);
  }
  chunks.push(renderLabelledList('Rules', value.rules));
  return chunks.filter(Boolean).join('\n\n');
}

function renderComponents(value = {}) {
  const chunks = [];
  for (const component of value.components ?? []) {
    const lines = [
      `### Component: ${component.id}`,
      '',
      `**Semantics:** ${component.semantics}`,
      '',
      `- Anatomy: ${component.anatomy.join(', ')}`,
      ...(component.variants?.length ? [`- Variants: ${component.variants.join(', ')}`] : []),
      `- States: ${component.states.join(', ')}`,
      ...(component.token_refs?.length ? [`- Token references: ${component.token_refs.join(', ')}`] : []),
    ];
    if (component.interaction?.kind) {
      lines.push('', `- Interaction kind: ${component.interaction.kind}`);
      if (component.interaction.kind === 'non-interactive' && component.interaction.reason) {
        lines.push(`- Interaction reason: ${component.interaction.reason}`);
      }
      const applicability = component.interaction.state_applicability;
      if (applicability && typeof applicability === 'object') {
        const stateOrder = ['default', 'hover', 'focus-visible', 'disabled', 'loading', 'error', 'success'];
        const stateRows = stateOrder
          .filter((state) => Object.hasOwn(applicability, state))
          .map((state) => [state, applicability[state].applicability, applicability[state].reason ?? '']);
        lines.push('', '#### State applicability', '', renderMarkdownTable(
          ['State', 'Applicability', 'Reason'],
          stateRows,
        ));
      }
    }
    chunks.push(lines.join('\n'));
  }
  chunks.push(renderLabelledList('Rules', value.rules));
  return chunks.filter(Boolean).join('\n\n');
}

function renderLayoutPlatforms(value = {}) {
  const chunks = [];
  if (Number.isInteger(value.minimum_width_px)) chunks.push(`- Minimum supported width: ${value.minimum_width_px}px`);
  if (Number.isInteger(value.reflow_zoom_percent)) chunks.push(`- Reflow target: ${value.reflow_zoom_percent}% zoom`);
  if (chunks.length) chunks.unshift('### Responsive constraints', '');
  const profiles = (value.platforms ?? []).map((profile) => `### Platform: ${profile.id}\n\n${profile.rules.map((rule) => `- ${rule}`).join('\n')}`);
  return [chunks.join('\n'), renderLabelledList('Layout rules', value.rules), ...profiles].filter(Boolean).join('\n\n');
}

function renderContentLocales(value = {}) {
  const chunks = [renderLabelledList('Voice', value.voice)];
  const terms = Object.entries(value.terminology ?? {})
    .sort(([left], [right]) => left < right ? -1 : left > right ? 1 : 0);
  if (terms.length) chunks.push(`### Terminology\n\n${renderMarkdownTable(['Term', 'Preferred form'], terms)}`);
  for (const locale of value.locales ?? []) {
    chunks.push(`### Locale: ${locale.locale} (${locale.status})\n\n${locale.rules.map((rule) => `- ${rule}`).join('\n')}`);
  }
  return chunks.filter(Boolean).join('\n\n');
}

function renderGovernance(value = {}, authority = '', locale = DEFAULT_PROJECTION_LOCALE) {
  const copy = GOVERNANCE_COPY[locale];
  const priority = `### Application priority\n\n${copy.priority.map((item, index) => `${index + 1}. ${item}`).join('\n')}`;
  const chunks = [
    authority ? renderClaim('authority', `### Authority\n\n${authority}`, `kind=${value.authority_kind ?? 'portable-brief'} lang=${locale}`) : '',
    renderClaim('application-priority', priority, `order=${PRIORITY_ORDER} lang=${locale}`),
    renderClaim('unknowns', `### Unknowns\n\n${copy.unknowns}`, `policy=absent-at-smallest-unresolved-boundary lang=${locale}`),
    renderClaim('changes', `### Changes\n\n${copy.changes}`, `policy=${CHANGE_POLICY} lang=${locale}`),
    renderLabelledList('Project priority details', value.priority, true),
    renderLabelledList('Additional change rules', value.change_policy),
  ];
  if (Array.isArray(value.decisions) && value.decisions.length) {
    chunks.push(`### Decision provenance\n\n${value.decisions.map((decision) => {
      const evidence = decision.evidence?.length ? `; evidence: ${decision.evidence.join(', ')}` : '';
      const valueText = Object.hasOwn(decision, 'value') ? `; value: ${JSON.stringify(decision.value)}` : '';
      return `- ${decision.path} — ${decision.source_class}${valueText}${evidence}`;
    }).join('\n')}`);
  }
  return chunks.filter(Boolean).join('\n\n');
}

function renderCore(graph) {
  // A native Core migration candidate remains source-authoritative. Preserve
  // its exact standalone projection while the observed graph is unchanged;
  // any graph mutation invalidates this fast path and is rendered normally,
  // so graph/projection drift remains detectable at every authority gate.
  const observedProjection = exactObservedCoreProjection(graph);
  if (observedProjection) return observedProjection;
  const locale = projectionLocale(graph);
  const authorityKind = ['project-system', 'evidence-backed-reconstruction', 'portable-brief'].includes(graph.identity?.kind)
    ? graph.identity.kind : 'portable-brief';
  const authority = GOVERNANCE_COPY[locale].authority[authorityKind] ?? '';
  const governance = { ...graph.governance, authority_kind: authorityKind };
  const foundationsBody = [
    renderTokens(graph.foundations?.tokens),
    Array.isArray(graph.foundations?.contrast_pairs) && graph.foundations.contrast_pairs.length
      ? `### Contrast pairs\n\n${graph.foundations.contrast_pairs.map((pair) => `- ${pair.foreground} on ${pair.background}: minimum ${pair.minimum_ratio}:1`).join('\n')}` : '',
    typeof graph.foundations?.reduced_motion === 'boolean'
      ? `### Reduced motion\n\n${graph.foundations.reduced_motion ? 'Required.' : 'Not required.'}` : '',
    renderLabelledList('Foundation rules', graph.foundations?.rules),
  ].filter(Boolean).join('\n\n');
  const bodies = {
    experience: [
      renderClaim('scope', graph.experience?.summary ? `### Scope\n\n${graph.experience.summary}` : '', `kind=product-surface lang=${locale}`),
      renderClaim(
        'primary-tasks',
        renderLabelledList('Primary tasks', graph.experience?.primary_tasks),
        Array.isArray(graph.experience?.primary_tasks) && graph.experience.primary_tasks.length
          ? `kind=user-outcomes count=${graph.experience.primary_tasks.length} lang=${locale}` : '',
      ),
      renderLabelledList('Design direction', graph.experience?.design_direction),
      renderLabelledList('Principles', graph.experience?.principles),
      renderLabelledList('Avoid', graph.experience?.avoid),
    ].filter(Boolean).join('\n\n'),
    foundations: [
      renderClaim('foundations', foundationsBody, `kind=rules-or-constraints lang=${locale}`),
    ].filter(Boolean).join('\n\n'),
    'typography-assets': renderTypographyAssets(graph.typography_assets),
    'components-states': renderComponents(graph.components_states),
    'layout-platforms': renderLayoutPlatforms(graph.layout_platforms),
    'content-locales': renderContentLocales(graph.content_locales),
    governance: renderGovernance(governance, authority, locale),
  };
  const chunks = [`# ${graph.identity.name} Design System`];
  SECTION_ORDER.forEach((id, index) => {
    const heading = SECTION_HEADINGS[locale][id];
    chunks.push(`<!-- design-md:section ${id} -->\n## ${index + 1}. ${heading}${bodies[id] ? `\n\n${bodies[id]}` : ''}`);
  });
  return `${chunks.join('\n\n').trim()}\n`;
}

function validateSourceDocument(markdown, inspection) {
  const errors = [];
  const normalized = normalizeLf(markdown);
  if (!normalized.trim()) errors.push('source DESIGN.md is empty');
  const documentInactive = [
    ...markdownFenceRanges(normalized),
    ...htmlCommentRanges(normalized),
    ...inertHtmlBlockRanges(normalized),
  ];
  const h1Count = [...normalized.matchAll(/^#\s+\S.+$/gm)]
    .filter((heading) => !indexInsideRanges(heading.index, documentInactive)).length;
  if (!inspection.name) errors.push('source DESIGN.md identity is not established by H1 or frontmatter');
  const semanticSegments = inspection.segments.filter((segment) => segment.kind === 'section' && portableBlocks(segment.body).length > 0);
  const anchors = coreSections(markdown);
  const hasAnyCoreAnchor = /<!--\s*design-md:section\s+/i.test(markdown);
  if (inspection.format === 'core-v2' || hasAnyCoreAnchor) {
    const atxH2 = [...normalized.matchAll(/^##\s+(.+?)\s*$/gm)]
      .filter((heading) => !indexInsideRanges(heading.index, documentInactive));
    const setextH2 = [...normalized.matchAll(/^ {0,3}(\S[^\r\n]*)\r?\n {0,3}-{3,}\s*$/gm)]
      .filter((heading) => !indexInsideRanges(heading.index, documentInactive));
    const allH2 = [...atxH2, ...setextH2].sort((left, right) => left.index - right.index);
    if (h1Count !== 1) errors.push('Core v2 source must contain exactly one non-empty H1');
    if (!inspection.cleanTop) errors.push('Core v2 source top matter is not vendor-neutral');
    if (anchors.length !== SECTION_ORDER.length) errors.push('Core v2 source must contain exactly seven section anchors');
    if (allH2.length !== SECTION_ORDER.length) errors.push('Core v2 source must contain exactly seven H2 sections');
    const anchorH2Offsets = anchors.map((section) => (
      normalized.indexOf('\n## ', section.start) + 1
    ));
    if (allH2.length === SECTION_ORDER.length
      && allH2.some((heading, index) => heading.index !== anchorH2Offsets[index])) {
      errors.push('Every Core v2 H2 must immediately follow its stable section anchor');
    }
    anchors.forEach((section, index) => {
      if (section.id !== SECTION_ORDER[index]) errors.push(`Core v2 section ${index + 1} anchor is invalid`);
      if (section.order !== index + 1) errors.push(`Core v2 section ${section.id} number must be ${index + 1}`);
      if (!section.heading) errors.push(`Core v2 section ${section.id} heading is empty`);
    });
  } else {
    if (semanticSegments.length === 0) errors.push('source DESIGN.md contains no semantic section content');
    if (h1Count > 1) errors.push('source DESIGN.md must not contain multiple H1 headings');
  }
  const fencedContractSyntax = markdownFenceRanges(normalized).some(([start, end]) => (
    /<!--\s*design-md:(?:section|claim)\b/.test(normalized.slice(start, end))
  ));
  if (fencedContractSyntax) errors.push('Core contract markers inside code fences are not active declarations');
  const hiddenContractSyntax = enclosingHtmlCommentRanges(normalized).some(([start, end]) => (
    /<!--\s*design-md:(?:section|claim)\b/.test(normalized.slice(start, end))
  ));
  if (hiddenContractSyntax) errors.push('Core contract markers inside enclosing HTML comments are not active declarations');
  return { valid: errors.length === 0, errors };
}

function markdownPlainText(value) {
  return normalizeLf(String(value ?? ''))
    .replace(/<!--[^]*?-->/g, ' ')
    .replace(/^\s*(```+|~~~+).*$/gm, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*(?:[-*+] |\d+\.\s+|>\s?)/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasSubstantiveText(value, minimumWords = 5, minimumLetters = 24) {
  const plain = markdownPlainText(value);
  const words = plain.match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu) ?? [];
  const letters = plain.match(/[\p{L}\p{N}]/gu) ?? [];
  return words.length >= minimumWords || letters.length >= minimumLetters;
}

function subsectionEvidence(body, headingPattern) {
  const source = normalizeLf(body);
  const matches = [...source.matchAll(/^###\s+(.+?)\s*$/gm)];
  for (let index = 0; index < matches.length; index += 1) {
    if (!headingPattern.test(matches[index][1].trim())) continue;
    const start = matches[index].index + matches[index][0].length;
    const end = matches[index + 1]?.index ?? source.length;
    if (hasSubstantiveText(source.slice(start, end), 2, 6)) return true;
  }
  return false;
}

function nonEmptyStrings(value) {
  return Array.isArray(value) && value.some((item) => typeof item === 'string' && item.trim());
}

function requiredExternalRuntimeLines(markdown) {
  const marker = /(?:\boh-my-design\b|(?:^|[^a-z0-9])omd(?:\s|$|:|\/)|\.omd\/system|(?:graph|manifest|coverage|provenance)\.json|\bsidecars?\b)/i;
  const negative = /(?:does?\s+not|do\s+not|must\s+not|need\s+not|without|optional|not\s+required|isn['’]?t\s+required|is\s+not\s+required)/i;
  const dependency = /(?:^|\s)(?:run|install|execute|invoke|call|load|open|read|attach|provide)\b|\b(?:must|required|requires?|need(?:s|ed)?\s+to|depends?\s+on|prerequisite)\b/i;
  const lines = normalizeLf(markdown)
    .replace(/<!--[^]*?-->/g, '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  const statements = [];
  let paragraph = '';
  for (const line of lines) {
    if (/^#{1,6}\s/.test(line) || /^[-*+]\s/.test(line) || /^\d+\.\s/.test(line)) {
      if (paragraph) statements.push(paragraph);
      paragraph = line;
      continue;
    }
    paragraph = paragraph ? `${paragraph} ${line}` : line;
    if (/[.!?。！？]$/.test(line)) {
      statements.push(paragraph);
      paragraph = '';
    }
  }
  if (paragraph) statements.push(paragraph);
  return statements
    .flatMap((statement) => statement.split(/(?<=[.!?。！？])\s+/))
    .filter((line) => marker.test(line) && !negative.test(line) && dependency.test(line));
}

function assessPortableCore(markdown, inspection, graph = null) {
  const structuralValid = inspection.format === 'core-v2' && inspection.sourceValidation?.valid === true;
  return evaluatePortableCoreClaims(markdown, {
    structurallyValid: structuralValid,
    cleanTop: inspection.cleanTop === true,
    projectionLocale: graph
      ? graph.projection?.locale ?? DEFAULT_PROJECTION_LOCALE
      : inspection.projectionLocale,
  });
}

function inspectDesignMd(markdown, options = {}) {
  if (typeof markdown !== 'string') throw new TypeError('DESIGN.md input must be a string');
  const segments = segmentDocument(markdown);
  const format = classifyFormat(markdown, segments);
  const frontmatter = segments.find((segment) => segment.kind === 'frontmatter')?.content ?? '';
  const ids = coreSections(markdown).map((section) => section.id);
  const partitionEqual = segments.map((segment) => segment.content).join('') === markdown;
  const result = {
    format,
    name: titleName(markdown, frontmatter),
    sourcePath: options.sourcePath ?? null,
    sourceSha256: sha256(markdown),
    coreSectionIds: ids,
    projectionLocale: projectionLocaleFromMarkdown(markdown),
    cleanTop: cleanTop(markdown),
    segments,
    preservation: {
      sourceSegments: segments.length,
      mappedSegments: 0,
      opaqueSegments: segments.length,
      droppedSegments: partitionEqual ? 0 : 1,
      dropped: partitionEqual ? [] : ['source-byte-partition'],
      opaquePreserved: partitionEqual,
    },
  };
  result.sourceValidation = validateSourceDocument(markdown, result);
  result.conformance = assessPortableCore(markdown, result);
  return result;
}

function semanticCoreDigest(markdown) {
  const sections = coreSections(markdown);
  const rendererHeadings = new Set([
    'semantic tokens', 'contrast pairs', 'reduced motion', 'foundation rules',
    'type roles', 'assets', 'rules', 'responsive constraints', 'layout rules',
    'voice', 'terminology', 'scope', 'primary tasks', 'design direction',
    'principles', 'avoid', 'authority', 'application priority', 'priority',
    'unknowns', 'changes', 'change policy', 'decision provenance',
  ]);
  const semanticBody = (body) => normalizeLf(body)
    .split('\n')
    .filter((line) => {
      if (/^<!--\s*design-md:claim(?:-end|\s+)/.test(line.trim())) return false;
      const heading = line.match(/^#{3,6}\s+(.+?)\s*$/)?.[1]?.trim().toLowerCase();
      return !heading || !rendererHeadings.has(heading);
    })
    .map((line) => line
      .replace(/^\s*(?:[-*+] |\d+\.\s+)/, '')
      .replace(/^\s*>\s?/, '')
      .trim())
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
  return sha256(JSON.stringify({
    name: markdown.match(/^#\s+(.+?)\s*$/m)?.[1]?.trim() ?? '',
    sections: sections.map((section) => [section.id, semanticBody(section.body)]),
  }));
}

function createProvenance(inspection, graph) {
  const migration = graph.extensions[MIGRATION_EXTENSION];
  return {
    schema_version: FORMAT_VERSION,
    authority_status: 'migration-staged-non-authoritative',
    source: { path: inspection.sourcePath, sha256: inspection.sourceSha256, input_format: inspection.format },
    segments: migration.original_segments.map((segment) => ({ id: segment.id, sha256: segment.sha256, kind: segment.kind, mapped: migration.mapped_segment_ids.includes(segment.id) })),
    unresolved: migration.unmapped_segment_ids,
  };
}

function createCoverage(inspection, graph, roundtripEqual) {
  const migration = graph.extensions[MIGRATION_EXTENSION];
  return {
    schema_version: FORMAT_VERSION,
    status: 'migration-staged-non-authoritative',
    authoritative_adoption_ready: false,
    input_format: inspection.format,
    core_sections: SECTION_ORDER,
    source_segments: inspection.segments.length,
    mapped_segments: migration.mapped_segment_ids.length,
    opaque_preserved_segments: migration.original_segments.length,
    unmapped_segments: migration.unmapped_segment_ids.length,
    dropped_segments: 0,
    projection_roundtrip_equal: roundtripEqual,
    source_reconstruction_equal: sha256(migration.original_segments.map((segment) => segment.content).join('')) === inspection.sourceSha256,
  };
}

function createManifest(designMd, graphBytes, provenanceBytes, coverageBytes, inspection) {
  return {
    $schema: MANIFEST_SCHEMA,
    schema_version: FORMAT_VERSION,
    format: 'design-md-core',
    format_version: FORMAT_VERSION,
    profile: 'migration-candidate',
    section_order: SECTION_ORDER,
    authority: {
      status: 'non-authoritative',
      canonical: 'source-design-md',
      source_sha256: inspection.sourceSha256,
      candidate_graph_path: '.omd/system/graph.json',
      candidate_projection_path: 'DESIGN.md',
    },
    artifacts: {
      design_md: { path: 'DESIGN.md', sha256: sha256(designMd) },
      graph: { path: '.omd/system/graph.json', sha256: sha256(graphBytes) },
      provenance: { path: '.omd/system/provenance.json', sha256: sha256(provenanceBytes) },
      coverage: { path: '.omd/system/coverage.json', sha256: sha256(coverageBytes) },
    },
    extensions: {
      [MIGRATION_EXTENSION]: {
        status: 'staged-non-authoritative',
        adoption_required: true,
      },
    },
  };
}

function migrateDesignMd(markdown, options = {}) {
  const inspection = inspectDesignMd(markdown, options);
  const minimumSourceErrors = inspection.sourceValidation.errors.filter((error) => !error.startsWith('Core v2'));
  if (minimumSourceErrors.length) throw new Error(`source DESIGN.md is not migratable: ${minimumSourceErrors.join('; ')}`);
  if (options.requireSourceValid && !inspection.sourceValidation.valid) {
    throw new Error(`source DESIGN.md validation failed: ${inspection.sourceValidation.errors.join('; ')}`);
  }
  const graph = inspection.format === 'core-v2'
    ? buildGraphFromCore(markdown, inspection, options)
    : buildGraphFromLegacy(markdown, inspection, options);
  let designMd = inspection.format === 'core-v2' && inspection.sourceValidation.valid
    ? markdown
    : renderCore(graph);
  graph.projection.sha256 = sha256(designMd);
  if (inspection.format !== 'core-v2') designMd = renderCore(graph);
  const reparsed = inspectDesignMd(designMd, { sourcePath: 'DESIGN.md' });
  const projectedFromGraph = renderCore(graph);
  const roundtripEqual = semanticCoreDigest(projectedFromGraph) === semanticCoreDigest(designMd);
  const conformance = assessPortableCore(
    designMd,
    reparsed,
    inspection.format === 'core-v2' ? null : graph,
  );
  graph.extensions[MIGRATION_EXTENSION].preservation = {
    dropped_segments: 0,
    opaque_preserved: graph.extensions[MIGRATION_EXTENSION].original_segments.map((segment) => segment.content).join('') === markdown,
    projection_roundtrip_equal: roundtripEqual,
    source_reconstruction_equal: graph.extensions[MIGRATION_EXTENSION].original_segments.map((segment) => segment.content).join('') === markdown,
  };
  const provenance = createProvenance(inspection, graph);
  const coverage = createCoverage(inspection, graph, roundtripEqual);
  coverage.portable_core_conformance = conformance;
  const graphBytes = jsonBytes(graph);
  const provenanceBytes = jsonBytes(provenance);
  const coverageBytes = jsonBytes(coverage);
  const manifest = createManifest(designMd, graphBytes, provenanceBytes, coverageBytes, inspection);
  const migration = graph.extensions[MIGRATION_EXTENSION];
  const report = {
    schema_version: FORMAT_VERSION,
    status: 'pass',
    input: { path: inspection.sourcePath, sha256: inspection.sourceSha256, format: inspection.format },
    output: { format: 'core-v2', design_md_sha256: sha256(designMd), graph_sha256: sha256(graphBytes) },
    adoption_status: 'staged-non-authoritative',
    authoritative_adoption_ready: false,
    source_segments: inspection.segments.length,
    mapped_segments: migration.mapped_segment_ids.length,
    merged_segments: Math.max(0, migration.mapped_segment_ids.length - new Set(migration.mapped_segment_ids.map((id) => mapLegacyHeading(inspection.segments.find((segment) => segment.id === id)?.heading))).size),
    opaque_preserved_segments: migration.original_segments.length,
    unmapped_segments: migration.unmapped_segment_ids.length,
    dropped_segments: 0,
    dropped: [],
    unsupported_claims_promoted: null,
    unsupported_claims_review_required: true,
    synthetic_product_values_added: 0,
    quality_tier_changed: false,
    projection_roundtrip_equal: roundtripEqual,
    source_reconstruction_equal: migration.original_segments.map((segment) => segment.content).join('') === markdown,
    source_validation: inspection.sourceValidation,
    conformance,
    clean_top: reparsed.cleanTop,
    core_section_ids: reparsed.coreSectionIds,
    opaque_extension_preserved: migration.original_segments.map((segment) => segment.content).join('') === markdown,
  };
  const result = {
    inspection,
    designMd,
    graph,
    provenance,
    coverage,
    manifest,
    report,
    artifacts: {
      'DESIGN.md': designMd,
      '.omd/system/graph.json': graphBytes,
      '.omd/system/provenance.json': provenanceBytes,
      '.omd/system/coverage.json': coverageBytes,
      '.omd/system/manifest.json': jsonBytes(manifest),
      'migration-report.json': '',
    },
  };
  result.artifacts['migration-report.json'] = jsonBytes(report);
  const validation = validateCoreArtifacts(result);
  if (!validation.valid) {
    result.report.status = 'fail';
    result.report.errors = validation.errors;
    result.artifacts['migration-report.json'] = jsonBytes(result.report);
  }
  return result;
}

function validReverseDns(value) {
  return /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(value);
}

function validateCoreArtifacts(result, options = {}) {
  const errors = [];
  const { designMd, graph, manifest, report } = result;
  for (const finding of validateCoreGraph(graph)) {
    errors.push(`graph schema ${finding.keyword} at ${finding.path}: ${finding.message}`);
  }
  for (const finding of validateCoreManifest(manifest)) {
    errors.push(`manifest schema ${finding.keyword} at ${finding.path}: ${finding.message}`);
  }
  const parsed = inspectDesignMd(designMd);
  if (parsed.format !== 'core-v2') errors.push('DESIGN.md is not a seven-section Core v2 document');
  if (!parsed.cleanTop) errors.push('DESIGN.md top matter is not vendor-neutral');
  if (parsed.coreSectionIds.join('|') !== SECTION_ORDER.join('|')) errors.push('Core section order is invalid');
  if (graph.$schema !== GRAPH_SCHEMA || graph.schema_version !== FORMAT_VERSION) errors.push('graph identity is invalid');
  if (!graph.identity?.name || !graph.identity?.kind || !graph.identity?.scope) errors.push('graph identity is incomplete');
  for (const key of ['experience', 'foundations', 'typography_assets', 'components_states', 'layout_platforms', 'content_locales', 'governance']) {
    if (!graph[key] || typeof graph[key] !== 'object' || Array.isArray(graph[key])) errors.push(`graph.${key} is missing`);
  }
  for (const key of Object.keys(graph.extensions ?? {})) if (!validReverseDns(key)) errors.push(`graph extension key is not reverse-DNS: ${key}`);
  if (graph.projection?.path !== 'DESIGN.md' || graph.projection?.sha256 !== sha256(designMd)) errors.push('graph projection hash mismatch');
  const graphBytes = result.artifacts?.['.omd/system/graph.json'] ?? jsonBytes(graph);
  if (manifest?.format !== 'design-md-core' || manifest?.format_version !== FORMAT_VERSION || !['portable-core', 'migration-candidate'].includes(manifest?.profile)) errors.push('manifest identity is invalid');
  if (manifest?.profile === 'portable-core' && manifest?.authority?.canonical !== 'system-graph') errors.push('portable-core manifest must declare system-graph authority');
  if (manifest?.profile === 'migration-candidate') {
    if (manifest?.authority?.status !== 'non-authoritative' || manifest?.authority?.canonical !== 'source-design-md') errors.push('migration candidate manifest authority is invalid');
    if (manifest?.authority?.source_sha256 !== result.inspection?.sourceSha256) errors.push('migration candidate source hash mismatch');
    if (report?.adoption_status !== 'staged-non-authoritative' || report?.authoritative_adoption_ready !== false) errors.push('migration candidate adoption gate is invalid');
  }
  if (manifest?.section_order?.join('|') !== SECTION_ORDER.join('|')) errors.push('manifest section order is invalid');
  if (manifest?.artifacts?.design_md?.sha256 !== sha256(designMd)) errors.push('manifest DESIGN.md hash mismatch');
  if (manifest?.artifacts?.graph?.sha256 !== sha256(graphBytes)) errors.push('manifest graph hash mismatch');
  const provenanceBytes = result.artifacts?.['.omd/system/provenance.json'] ?? jsonBytes(result.provenance);
  const coverageBytes = result.artifacts?.['.omd/system/coverage.json'] ?? jsonBytes(result.coverage);
  if (manifest?.artifacts?.provenance?.sha256 !== sha256(provenanceBytes)) errors.push('manifest provenance hash mismatch');
  if (manifest?.artifacts?.coverage?.sha256 !== sha256(coverageBytes)) errors.push('manifest coverage hash mismatch');
  const migration = graph.extensions?.[MIGRATION_EXTENSION];
  if (!migration || !Array.isArray(migration.original_segments)) errors.push('opaque migration extension is missing');
  else {
    for (const segment of migration.original_segments) {
      if (sha256(segment.content) !== segment.sha256) errors.push(`opaque segment hash mismatch: ${segment.id}`);
    }
    if (sha256(migration.original_segments.map((segment) => segment.content).join('')) !== migration.source_sha256) errors.push('opaque source reconstruction mismatch');
  }
  if (report?.dropped_segments !== 0 || (report?.dropped?.length ?? 0) !== 0) errors.push('migration dropped source content');
  if (report?.unsupported_claims_review_required !== true) errors.push('migration claim review gate is missing');
  if (report?.synthetic_product_values_added !== 0) errors.push('migration synthesized a product value');
  if (report?.projection_roundtrip_equal !== true) errors.push('Core projection round-trip failed');
  if (semanticCoreDigest(renderCore(graph)) !== semanticCoreDigest(designMd)) errors.push('graph-to-projection semantic round-trip mismatch');
  if (report?.source_reconstruction_equal !== true) errors.push('source reconstruction failed');
  const conformance = assessPortableCore(designMd, parsed, graph);
  if (manifest?.profile === 'portable-core' || options.requirePortableCore) {
    for (const reason of conformance.reasons) errors.push(`portable-core ${reason.code}: ${reason.message}`);
  }
  return { valid: errors.length === 0, errors };
}

function atomicWrite(file, content, force) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (fs.existsSync(file) && !force) throw new Error(`refusing to overwrite existing staged artifact: ${file}`);
  const temp = `${file}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`;
  fs.writeFileSync(temp, content, { encoding: 'utf8', flag: 'wx' });
  fs.renameSync(temp, file);
}

function validateStagedMigrationPackage(result, stageDir) {
  const staged = {
    ...result,
    designMd: fs.readFileSync(path.join(stageDir, 'DESIGN.md'), 'utf8'),
    graph: JSON.parse(fs.readFileSync(path.join(stageDir, '.omd/system/graph.json'), 'utf8')),
    provenance: JSON.parse(fs.readFileSync(path.join(stageDir, '.omd/system/provenance.json'), 'utf8')),
    coverage: JSON.parse(fs.readFileSync(path.join(stageDir, '.omd/system/coverage.json'), 'utf8')),
    manifest: JSON.parse(fs.readFileSync(path.join(stageDir, '.omd/system/manifest.json'), 'utf8')),
    report: JSON.parse(fs.readFileSync(path.join(stageDir, 'migration-report.json'), 'utf8')),
    artifacts: {
      'DESIGN.md': fs.readFileSync(path.join(stageDir, 'DESIGN.md'), 'utf8'),
      '.omd/system/graph.json': fs.readFileSync(path.join(stageDir, '.omd/system/graph.json'), 'utf8'),
      '.omd/system/provenance.json': fs.readFileSync(path.join(stageDir, '.omd/system/provenance.json'), 'utf8'),
      '.omd/system/coverage.json': fs.readFileSync(path.join(stageDir, '.omd/system/coverage.json'), 'utf8'),
      '.omd/system/manifest.json': fs.readFileSync(path.join(stageDir, '.omd/system/manifest.json'), 'utf8'),
      'migration-report.json': fs.readFileSync(path.join(stageDir, 'migration-report.json'), 'utf8'),
    },
  };
  return validateCoreArtifacts(staged);
}

function writeMigrationResult(result, outDir, options = {}) {
  if (!outDir) throw new Error('--out-dir is required for --write');
  const safeOutDir = canonicalTarget(outDir);
  const sources = result.inspection?.sourcePath ? [result.inspection.sourcePath] : [];
  for (const relative of Object.keys(result.artifacts)) {
    assertPathDoesNotAliasSources(path.resolve(safeOutDir, relative), sources, `migration artifact ${relative}`);
  }
  const validation = validateCoreArtifacts(result);
  if (!validation.valid) throw new Error(`refusing to write invalid migration: ${validation.errors.join('; ')}`);

  // A migration candidate is one immutable package, not six independently
  // replaceable files. Publishing into an existing directory could expose a
  // mixed graph/manifest/projection if a later write fails. `force` therefore
  // never authorizes replacement here: callers choose a fresh staging path.
  if (fs.existsSync(safeOutDir)) {
    throw new Error(`refusing to publish migration into an existing staging directory: ${safeOutDir}`);
  }

  const parent = path.dirname(safeOutDir);
  fs.mkdirSync(parent, { recursive: true });
  const tempDir = path.join(
    parent,
    `.${path.basename(safeOutDir)}.tmp-${process.pid}-${crypto.randomBytes(4).toString('hex')}`,
  );
  fs.mkdirSync(tempDir, { recursive: false });
  try {
    for (const [relative, content] of Object.entries(result.artifacts)) {
      atomicWrite(path.resolve(tempDir, relative), content, false);
    }
    for (const [relative, content] of Object.entries(result.artifacts)) {
      const staged = path.resolve(tempDir, relative);
      const stat = fs.lstatSync(staged);
      if (!stat.isFile() || stat.isSymbolicLink() || fs.readFileSync(staged, 'utf8') !== content) {
        throw new Error(`staged migration readback mismatch: ${relative}`);
      }
    }
    const stagedValidation = validateStagedMigrationPackage(result, tempDir);
    if (!stagedValidation.valid) {
      throw new Error(`staged migration package validation failed: ${stagedValidation.errors.join('; ')}`);
    }
    fs.renameSync(tempDir, safeOutDir);
  } catch (error) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    throw error;
  }
  return Object.keys(result.artifacts).map((relative) => path.resolve(safeOutDir, relative));
}

function auditCatalog(catalogDir, options = {}) {
  const root = path.resolve(catalogDir);
  const files = [];
  function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((left, right) => left.name.localeCompare(right.name))) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(absolute);
      else if (entry.isFile() && entry.name === 'DESIGN.md') files.push(absolute);
    }
  }
  walk(root);
  const formats = {};
  const entries = [];
  let dropped = 0;
  for (const file of files) {
    try {
      const result = migrateDesignMd(fs.readFileSync(file, 'utf8'), { ...options, sourcePath: file });
      formats[result.inspection.format] = (formats[result.inspection.format] ?? 0) + 1;
      dropped += result.report.dropped_segments;
      entries.push({
        path: path.relative(root, file),
        status: result.report.status,
        format: result.inspection.format,
        dropped_segments: result.report.dropped_segments,
        projection_roundtrip_equal: result.report.projection_roundtrip_equal,
        source_reconstruction_equal: result.report.source_reconstruction_equal,
        opaque_extension_preserved: result.report.opaque_extension_preserved,
        authoritative_adoption_ready: false,
        conformance_level: result.report.conformance.level,
        portable_core: result.report.conformance.portable_core,
        conformance_reason_codes: result.report.conformance.reasons.map((reason) => reason.code),
        errors: result.report.errors ?? [],
      });
    } catch (error) {
      dropped += 1;
      entries.push({ path: path.relative(root, file), status: 'fail', format: null, dropped_segments: 1, projection_roundtrip_equal: false, source_reconstruction_equal: false, opaque_extension_preserved: false, authoritative_adoption_ready: false, conformance_level: 'none', portable_core: false, conformance_reason_codes: ['migration-error'], errors: [error instanceof Error ? error.message : String(error)] });
    }
  }
  return {
    schema_version: FORMAT_VERSION,
    mode: 'catalog-audit',
    catalog: root,
    count: files.length,
    formats,
    dropped_segments: dropped,
    passed: entries.filter((entry) => entry.status === 'pass').length,
    failed: entries.filter((entry) => entry.status !== 'pass').length,
    status: dropped === 0 && entries.every((entry) => entry.status === 'pass') ? 'pass' : 'fail',
    entries,
  };
}

module.exports = {
  DEFAULT_PROJECTION_LOCALE,
  FORMAT_VERSION,
  GRAPH_SCHEMA,
  MANIFEST_SCHEMA,
  MIGRATION_EXTENSION,
  SECTION_ORDER,
  SECTION_HEADINGS,
  SUPPORTED_PROJECTION_LOCALES,
  inspectDesignMd,
  migrateDesignMd,
  renderCore,
  validateCoreArtifacts,
  evaluatePortableCore(markdown, options = {}) {
    const inspection = options.inspection ?? inspectDesignMd(markdown, options);
    return assessPortableCore(markdown, inspection, options.graph ?? null);
  },
  graphFromCoreProjection,
  semanticCoreDigest,
  validateSourceDocument,
  writeMigrationResult,
  auditCatalog,
  canonicalTarget,
  pathsAlias,
  assertPathDoesNotAliasSources,
  sha256,
};
