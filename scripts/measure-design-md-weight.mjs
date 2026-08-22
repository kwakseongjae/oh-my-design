#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = resolve(fileURLToPath(new URL('.', import.meta.url)));
const REPO_ROOT = resolve(SCRIPT_DIR, '..');
const REFERENCES_DIR = join(REPO_ROOT, 'web', 'references');
const SURVEY_DATE = '2026-08-22';
const CORE_SECTION_IDS = [
  'experience',
  'foundations',
  'typography-assets',
  'components-states',
  'layout-platforms',
  'content-locales',
  'governance',
];
const LEGACY_SECTION_NAMES = new Map([
  [1, 'Visual Theme & Atmosphere'],
  [2, 'Color Palette & Roles'],
  [3, 'Typography Rules'],
  [4, 'Component Stylings'],
  [5, 'Layout Principles'],
  [6, 'Depth & Elevation'],
  [7, "Do's and Don'ts"],
  [8, 'Responsive Behavior'],
  [9, 'Agent Prompt Guide'],
  [10, 'Voice & Tone'],
  [11, 'Brand Narrative'],
  [12, 'Principles'],
  [13, 'Personas'],
  [14, 'States'],
  [15, 'Motion & Easing'],
]);
const PLACEHOLDER_RE = /(?:\[\s*(?:fill[\s_-]*in|tbd|todo|unknown|placeholder)(?:\s*:[^\]]*)?\s*\]|\{\{[^}\n]*(?:fill[\s_-]*in|tbd|todo|unknown|placeholder)[^}\n]*\}\}|<\s*(?:tbd|todo|unknown|placeholder)\s*>|(?:^|\|)\s*(?:tbd|todo|unknown)\s*(?=\||$))/imu;

function physicalLineCount(text) {
  if (text.length === 0) return 0;
  const newlineCount = (text.match(/\n/g) ?? []).length;
  return newlineCount + (text.endsWith('\n') ? 0 : 1);
}

function parseFrontmatter(text) {
  const match = text.match(/^---[ \t]*\r?\n[\s\S]*?^---[ \t]*(?:\r?\n|$)/m);
  if (!match || match.index !== 0) {
    return { present: false, text: '', body: text, bytes: 0 };
  }
  return {
    present: true,
    text: match[0],
    body: text.slice(match[0].length),
    bytes: Buffer.byteLength(match[0]),
  };
}

function parseSections(text) {
  const headings = [];
  const headingRe = /^##[ \t]+([^\r\n]+?)[ \t]*\r?$/gm;
  for (const match of text.matchAll(headingRe)) {
    const before = text.slice(0, match.index);
    const anchorMatch = before.match(/<!-- design-md:section ([a-z-]+) -->\r?\n$/);
    const anchor = anchorMatch?.[1] ?? null;
    const start = anchorMatch ? match.index - anchorMatch[0].length : match.index;
    const numberMatch = match[1].match(/^(\d+)(?:[.)])?[ \t]+(.+)$/);
    headings.push({
      anchor,
      heading: match[1].trim(),
      number: numberMatch ? Number(numberMatch[1]) : null,
      title: numberMatch ? numberMatch[2].trim() : match[1].trim(),
      headingStart: match.index,
      headingEnd: match.index + match[0].length,
      start,
    });
  }

  return headings.map((heading, index) => {
    const end = headings[index + 1]?.start ?? text.length;
    const raw = text.slice(heading.start, end);
    const body = text.slice(heading.headingEnd, end);
    const substantiveBody = body
      .replace(/<!--([\s\S]*?)-->/g, '')
      .replace(/^#{1,6}[ \t]+.*$/gm, '')
      .trim();
    return {
      ...heading,
      end,
      raw,
      body,
      bytes: Buffer.byteLength(raw),
      empty: substantiveBody.length === 0,
      placeholder: PLACEHOLDER_RE.test(body),
    };
  });
}

function extractComparableBlocks(body) {
  const blocks = [];
  let current = [];
  let inFence = false;
  const visibleBody = body.replace(/<!--[\s\S]*?-->/g, '');

  const flush = () => {
    if (current.length === 0) return;
    const normalized = current
      .map((line) => line.trim().replace(/[ \t]+/g, ' '))
      .join('\n')
      .normalize('NFKC')
      .toLowerCase();
    current = [];
    if ([...normalized].length >= 40) blocks.push(normalized);
  };

  for (const line of visibleBody.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      current.push(line);
      continue;
    }
    if (!inFence && /^\s*$/.test(line)) {
      flush();
      continue;
    }
    if (!inFence && (/^#{1,6}[ \t]+/.test(line) || /^\s*<!--.*-->\s*$/.test(line) || /^\s*---\s*$/.test(line))) {
      flush();
      continue;
    }
    current.push(line);
  }
  flush();
  return [...new Set(blocks)];
}

function median(values) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

function nearestRank(values, percentile) {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.max(0, Math.ceil(percentile * sorted.length) - 1)];
}

function distribution(values) {
  if (values.length === 0) return { median: null, p90: null, min: null, max: null };
  return {
    median: median(values),
    p90: nearestRank(values, 0.9),
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

function formatNumber(value, digits = 0) {
  if (value === null || Number.isNaN(value)) return 'N/A';
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

function formatMeasured(value) {
  if (value === null) return 'N/A';
  return formatNumber(value, Number.isInteger(value) ? 0 : 1);
}

function percent(numerator, denominator) {
  return denominator === 0 ? 'N/A' : `${formatNumber((numerator / denominator) * 100, 2)}%`;
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/\n/g, ' ↵ ');
}

function table(headers, rows) {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(escapeCell).join(' | ')} |`),
  ].join('\n');
}

const ids = readdirSync(REFERENCES_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((id) => {
    try {
      return readFileSync(join(REFERENCES_DIR, id, 'DESIGN.md')).length >= 0;
    } catch {
      return false;
    }
  })
  .sort((a, b) => a.localeCompare(b, 'en'));

if (ids.length === 0) {
  throw new Error(`No web/references/<id>/DESIGN.md files found under ${REFERENCES_DIR}`);
}

const files = ids.map((id) => {
  const path = join(REFERENCES_DIR, id, 'DESIGN.md');
  const buffer = readFileSync(path);
  const text = buffer.toString('utf8');
  const frontmatter = parseFrontmatter(text);
  const sections = parseSections(text);
  const anchors = [...text.matchAll(/<!-- design-md:section ([a-z-]+) -->/g)].map((match) => match[1]);
  const coreV2 = !frontmatter.present
    && anchors.length === CORE_SECTION_IDS.length
    && anchors.every((anchor, index) => anchor === CORE_SECTION_IDS[index]);
  const numbered = new Set(sections.filter((section) => section.number !== null).map((section) => section.number));
  const legacy15Complete = !coreV2 && [...LEGACY_SECTION_NAMES.keys()].every((number) => numbered.has(number));
  const legacyFamily = !coreV2 && (frontmatter.present || numbered.size > 0);
  return {
    id,
    path,
    buffer,
    text,
    bytes: buffer.length,
    lines: physicalLineCount(text),
    frontmatter,
    bodyBytes: buffer.length - frontmatter.bytes,
    sections,
    coreV2,
    legacy15Complete,
    legacyFamily,
    extraNumbered: [...numbered].filter((number) => number > 15).sort((a, b) => a - b),
    blocks: extractComparableBlocks(frontmatter.body),
  };
});

const totalBytes = files.reduce((sum, file) => sum + file.bytes, 0);
const totalLines = files.reduce((sum, file) => sum + file.lines, 0);
const totalFrontmatterBytes = files.reduce((sum, file) => sum + file.frontmatter.bytes, 0);
const totalBodyBytes = files.reduce((sum, file) => sum + file.bodyBytes, 0);
const corpusHash = createHash('sha256');
for (const file of files) {
  corpusHash.update(file.id);
  corpusHash.update('\0');
  corpusHash.update(createHash('sha256').update(file.buffer).digest('hex'));
  corpusHash.update('\n');
}

const byteStats = distribution(files.map((file) => file.bytes));
const lineStats = distribution(files.map((file) => file.lines));
const frontmatterRatioStats = distribution(files.map((file) => (file.frontmatter.bytes / file.bytes) * 100));
const bodyRatioStats = distribution(files.map((file) => (file.bodyBytes / file.bytes) * 100));
const byBytesAscending = [...files].sort((a, b) => a.bytes - b.bytes || a.id.localeCompare(b.id, 'en'));
const bottomTen = byBytesAscending.slice(0, 10);
const topTen = byBytesAscending.slice(-10).reverse();

const numberedSectionRows = [];
const observedSectionNumbers = [...new Set(files.flatMap((file) => file.sections.map((section) => section.number).filter(Number.isInteger)))].sort((a, b) => a - b);
for (const number of observedSectionNumbers) {
  const perFile = files.map((file) => file.sections.filter((section) => section.number === number));
  const present = perFile.filter((sections) => sections.length > 0).length;
  const matchingSections = perFile.flat();
  const bytesByPresentFile = perFile.filter((sections) => sections.length > 0).map((sections) => sections.reduce((sum, section) => sum + section.bytes, 0));
  const sectionBytes = bytesByPresentFile.reduce((sum, bytes) => sum + bytes, 0);
  const emptyFiles = perFile.filter((sections) => sections.length > 0 && sections.every((section) => section.empty)).length;
  const placeholderFiles = perFile.filter((sections) => sections.some((section) => section.placeholder)).length;
  const titleCounts = new Map();
  for (const section of matchingSections) titleCounts.set(section.title, (titleCounts.get(section.title) ?? 0) + 1);
  const [commonTitle = '', commonTitleCount = 0] = [...titleCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en'))[0] ?? [];
  numberedSectionRows.push({
    number,
    label: LEGACY_SECTION_NAMES.get(number) ?? 'Observed extension',
    present,
    absent: files.length - present,
    emptyFiles,
    placeholderFiles,
    sectionBytes,
    stats: distribution(bytesByPresentFile),
    commonTitle,
    commonTitleCount,
  });
}
const numberedSectionBytes = numberedSectionRows.reduce((sum, row) => sum + row.sectionBytes, 0);
const unsectionedBytes = totalBytes - numberedSectionBytes;

const blockIndex = new Map();
let totalBlockIncidences = 0;
let totalNormalizedBlockBytes = 0;
for (const file of files) {
  totalBlockIncidences += file.blocks.length;
  for (const block of file.blocks) {
    const hash = createHash('sha256').update(block).digest('hex');
    const record = blockIndex.get(hash) ?? { hash, block, bytes: Buffer.byteLength(block), ids: [] };
    record.ids.push(file.id);
    blockIndex.set(hash, record);
    totalNormalizedBlockBytes += record.bytes;
  }
}
const repeatedBlocks = [...blockIndex.values()].filter((record) => record.ids.length >= 2);
const repeatedBlockIncidences = repeatedBlocks.reduce((sum, record) => sum + record.ids.length, 0);
const repeatedNormalizedBlockBytes = repeatedBlocks.reduce((sum, record) => sum + record.bytes * record.ids.length, 0);
const topRepeatedBlocks = [...repeatedBlocks]
  .sort((a, b) => b.ids.length - a.ids.length || b.bytes - a.bytes || a.hash.localeCompare(b.hash, 'en'))
  .slice(0, 15);

function groupRow(label, group) {
  const bytes = distribution(group.map((file) => file.bytes));
  const lines = distribution(group.map((file) => file.lines));
  return [
    label,
    group.length,
    formatMeasured(bytes.median),
    formatMeasured(bytes.p90),
    formatMeasured(bytes.min),
    formatMeasured(bytes.max),
    formatMeasured(lines.median),
  ];
}

const coreFiles = files.filter((file) => file.coreV2);
const legacyFamilyFiles = files.filter((file) => file.legacyFamily);
const legacy15Files = files.filter((file) => file.legacy15Complete);
const legacyVariantFiles = files.filter((file) => file.legacyFamily && !file.legacy15Complete);
const otherFiles = files.filter((file) => !file.coreV2 && !file.legacyFamily);
const extendedLegacyFiles = legacy15Files.filter((file) => file.extraNumbered.length > 0);

const report = [];
report.push(`# DESIGN.md 무게 실측 — ${SURVEY_DATE}`);
report.push('');
report.push(`대상은 \`web/references/<id>/DESIGN.md\` ${formatNumber(files.length)}개다. 측정 코퍼스 SHA-256은 \`${corpusHash.digest('hex')}\`이다.`);
report.push('');
report.push('## 산출 방법');
report.push('');
report.push('- 파일 전체: UTF-8 원본 바이트(`Buffer.length`)와 물리 줄 수를 측정했다. 물리 줄 수는 개행 수에 마지막 비개행 줄을 더한다. 중앙값은 짝수 표본의 두 가운데 값 평균, p90은 nearest-rank를 썼다.');
report.push('- 섹션: H2(`##`) 시작부터 다음 H2 직전까지를 해당 섹션 바이트로 잡았다. 번호형 문서는 H2의 번호로 묶고, Core v2 문서는 H2 바로 앞의 안정 앵커를 기준으로 묶는다.');
report.push('- 결손: 전체 440개를 분모로, 해당 번호 H2가 없으면 `없음`, H2·주석·하위 제목을 제외한 본문이 공백이면 `비어 있음`, 본문에 명시적 표식(`[FILL IN…]`, `[TBD]`, `[TODO]`, `[UNKNOWN]`, `[PLACEHOLDER]`, 대응 중괄호/태그/독립 표 셀)이 있으면 `플레이스홀더`로 셌다. 세 값은 독립 지표다.');
report.push('- 중복: frontmatter와 Markdown 제목/HTML 주석/구분선을 제외한 본문을 빈 줄 단위 블록으로 나눴다. 각 줄 trim, 공백 축약, Unicode NFKC, 소문자화 후 40자 이상인 블록을 SHA-256으로 비교했다. 한 파일 안의 같은 블록은 한 번만 세고, 2개 이상 파일에 있는 정확히 같은 정규화 블록을 반복으로 봤다.');
report.push('- frontmatter 대 본문: 파일 첫 YAML `---` 블록(양쪽 구분자와 닫는 줄 뒤 개행 포함)을 frontmatter, 나머지를 본문으로 측정했다.');
report.push('- 규격 계열: Core v2는 frontmatter가 없고 7개 안정 앵커가 규격 순서대로 정확히 있는 파일, legacy 15-section 완비는 번호 H2 1–15가 모두 있는 비-Core 파일로 판정했다. legacy 계열은 v0.1 frontmatter 또는 번호형 H2가 있는 비-Core 파일 전체다.');
report.push('');
report.push('재실행 명령: `node scripts/measure-design-md-weight.mjs` (리포트 Markdown을 stdout으로 출력).');
report.push('');
report.push('## 1. 파일 전체');
report.push('');
report.push(table(
  ['지표', '합계', '중앙값', 'p90', '최소', '최대'],
  [
    ['바이트', formatNumber(totalBytes), formatMeasured(byteStats.median), formatMeasured(byteStats.p90), formatMeasured(byteStats.min), formatMeasured(byteStats.max)],
    ['줄', formatNumber(totalLines), formatMeasured(lineStats.median), formatMeasured(lineStats.p90), formatMeasured(lineStats.min), formatMeasured(lineStats.max)],
  ],
));
report.push('');
report.push('### 바이트 상위 10개');
report.push('');
report.push(table(['순위', 'id', '바이트', '줄'], topTen.map((file, index) => [index + 1, file.id, formatNumber(file.bytes), formatNumber(file.lines)])));
report.push('');
report.push('### 바이트 하위 10개');
report.push('');
report.push(table(['순위', 'id', '바이트', '줄'], bottomTen.map((file, index) => [index + 1, file.id, formatNumber(file.bytes), formatNumber(file.lines)])));
report.push('');
report.push('## 2. 섹션별 무게와 결손');
report.push('');
report.push('`전체 무게 %`의 분모는 440개 파일 전체 바이트다. 섹션 바이트는 제목을 포함한다. `없음`은 440개 중 해당 번호 H2가 없는 파일 수이며, §16은 규격 필수 섹션이 아니라 실제 관측된 번호형 확장이다.');
report.push('');
report.push(table(
  ['섹션', '최빈 실제 제목', '있음', '없음', '비어 있음', '플레이스홀더', '바이트 중앙값', 'p90', '합계 바이트', '전체 무게 %'],
  numberedSectionRows.map((row) => [
    `§${row.number} ${row.label}`,
    `${row.commonTitle} (${row.commonTitleCount})`,
    `${row.present} (${percent(row.present, files.length)})`,
    `${row.absent} (${percent(row.absent, files.length)})`,
    `${row.emptyFiles} (${percent(row.emptyFiles, files.length)})`,
    `${row.placeholderFiles} (${percent(row.placeholderFiles, files.length)})`,
    formatMeasured(row.stats.median),
    formatMeasured(row.stats.p90),
    formatNumber(row.sectionBytes),
    percent(row.sectionBytes, totalBytes),
  ]),
));
report.push('');
report.push(`번호형 H2 섹션이 차지한 합계는 ${formatNumber(numberedSectionBytes)}바이트(${percent(numberedSectionBytes, totalBytes)}), frontmatter·H1·H2 이전 서문 등 번호형 섹션 밖은 ${formatNumber(unsectionedBytes)}바이트(${percent(unsectionedBytes, totalBytes)})다.`);
report.push('');
report.push('## 3. frontmatter 대 본문');
report.push('');
report.push(table(
  ['영역', '합계 바이트', '코퍼스 비율', '파일별 비율 중앙값', 'p90', '최소', '최대'],
  [
    ['frontmatter', formatNumber(totalFrontmatterBytes), percent(totalFrontmatterBytes, totalBytes), `${formatNumber(frontmatterRatioStats.median, 2)}%`, `${formatNumber(frontmatterRatioStats.p90, 2)}%`, `${formatNumber(frontmatterRatioStats.min, 2)}%`, `${formatNumber(frontmatterRatioStats.max, 2)}%`],
    ['본문', formatNumber(totalBodyBytes), percent(totalBodyBytes, totalBytes), `${formatNumber(bodyRatioStats.median, 2)}%`, `${formatNumber(bodyRatioStats.p90, 2)}%`, `${formatNumber(bodyRatioStats.min, 2)}%`, `${formatNumber(bodyRatioStats.max, 2)}%`],
  ],
));
report.push('');
report.push(`frontmatter가 있는 파일은 ${files.filter((file) => file.frontmatter.present).length}개(${percent(files.filter((file) => file.frontmatter.present).length, files.length)})다.`);
report.push('');
report.push('## 4. 파일 간 반복 블록');
report.push('');
report.push(table(
  ['지표', '값'],
  [
    ['비교 대상 블록-파일 incidence', formatNumber(totalBlockIncidences)],
    ['고유 정규화 블록', formatNumber(blockIndex.size)],
    ['2개 이상 파일에서 반복된 고유 블록', `${formatNumber(repeatedBlocks.length)} (${percent(repeatedBlocks.length, blockIndex.size)})`],
    ['반복 블록-파일 incidence', `${formatNumber(repeatedBlockIncidences)} (${percent(repeatedBlockIncidences, totalBlockIncidences)})`],
    ['정규화 블록 바이트 중 반복 incidence 비중', `${formatNumber(repeatedNormalizedBlockBytes)} / ${formatNumber(totalNormalizedBlockBytes)} (${percent(repeatedNormalizedBlockBytes, totalNormalizedBlockBytes)})`],
  ],
));
report.push('');
report.push('가장 많은 파일에 반복된 블록 15개:');
report.push('');
report.push(table(
  ['파일 수', '블록 바이트', 'SHA-256 앞 12자', '정규화 블록 미리보기', 'id 예시'],
  topRepeatedBlocks.map((record) => [
    record.ids.length,
    record.bytes,
    record.hash.slice(0, 12),
    record.block.length > 180 ? `${record.block.slice(0, 177)}…` : record.block,
    `${record.ids.slice(0, 8).join(', ')}${record.ids.length > 8 ? ', …' : ''}`,
  ]),
));
report.push('');
report.push('## 5. legacy 15-section 대 Core v2');
report.push('');
report.push(table(
  ['계열', '파일 수', '바이트 중앙값', '바이트 p90', '바이트 최소', '바이트 최대', '줄 중앙값'],
  [
    groupRow('legacy 계열 전체', legacyFamilyFiles),
    groupRow('legacy 1–15 완비', legacy15Files),
    groupRow('legacy 변형/불완비', legacyVariantFiles),
    groupRow('Core v2 구조 일치', coreFiles),
    groupRow('어느 계열도 아님', otherFiles),
  ],
));
report.push('');
report.push(`legacy 1–15 완비 ${legacy15Files.length}개 중 §16 번호형 확장이 있는 파일은 ${extendedLegacyFiles.length}개(${percent(extendedLegacyFiles.length, legacy15Files.length)})다. Core v2 구조 일치 파일이 ${coreFiles.length}개이므로 두 계열의 무게 차이는 산출할 비교 표본이 없어 N/A다.`);
report.push('');
report.push('## 관찰');
report.push('');
const heaviestSection = [...numberedSectionRows].sort((a, b) => b.sectionBytes - a.sectionBytes)[0];
const mostAbsentStandard = [...numberedSectionRows].filter((row) => row.number <= 15).sort((a, b) => b.absent - a.absent || a.number - b.number)[0];
const mostPlaceholder = [...numberedSectionRows].sort((a, b) => b.placeholderFiles - a.placeholderFiles || a.number - b.number)[0];
report.push(`- 합계 바이트가 가장 큰 번호형 섹션은 §${heaviestSection.number}로, ${formatNumber(heaviestSection.sectionBytes)}바이트(${percent(heaviestSection.sectionBytes, totalBytes)})다.`);
report.push(`- 표준 §1–§15 중 ` + (mostAbsentStandard.absent === 0
  ? '모든 파일에 없는 섹션은 없다.'
  : `가장 자주 없는 섹션은 §${mostAbsentStandard.number}이며 ${mostAbsentStandard.absent}개(${percent(mostAbsentStandard.absent, files.length)})에서 없다.`));
report.push(`- 플레이스홀더가 가장 자주 검출된 섹션은 §${mostPlaceholder.number}이며 ${mostPlaceholder.placeholderFiles}개(${percent(mostPlaceholder.placeholderFiles, files.length)})다.`);
report.push(`- 파일 간 반복 블록 incidence는 ${formatNumber(repeatedBlockIncidences)}/${formatNumber(totalBlockIncidences)}(${percent(repeatedBlockIncidences, totalBlockIncidences)})다. 이 값은 정규화 후 완전 일치 블록의 관측치이며 의미가 비슷하지만 문구가 다른 블록은 포함하지 않는다.`);
report.push(`- frontmatter는 코퍼스 전체의 ${percent(totalFrontmatterBytes, totalBytes)}, 본문은 ${percent(totalBodyBytes, totalBytes)}다.`);
report.push(`- 구조 판정상 legacy 계열은 ${legacyFamilyFiles.length}개(${percent(legacyFamilyFiles.length, files.length)}), Core v2는 ${coreFiles.length}개(${percent(coreFiles.length, files.length)})다.`);

process.stdout.write(`${report.join('\n')}\n`);
