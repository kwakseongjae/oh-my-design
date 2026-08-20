#!/usr/bin/env node

// Browser-safe, dependency-free Portable Core declaration parser. It never
// infers semantic authority from arbitrary prose: writers must emit the stable,
// vendor-neutral claim markers defined by the Core v2 contract.

const REQUIRED_CLAIMS = Object.freeze([
  'scope',
  'primary-tasks',
  'foundations',
  'authority',
  'application-priority',
  'unknowns',
  'changes',
]);

const SECTION_FOR_CLAIM = Object.freeze({
  scope: 'experience',
  'primary-tasks': 'experience',
  foundations: 'foundations',
  authority: 'governance',
  'application-priority': 'governance',
  unknowns: 'governance',
  changes: 'governance',
});

const GOVERNANCE_COPY = Object.freeze({
  en: {
    authority: {
      'project-system': 'This document is the project design contract for the declared scope.',
      'evidence-backed-reconstruction': 'This document is an evidence-backed reconstruction, not authority for an unrelated target project.',
      'portable-brief': 'This document is a portable design brief for the declared scope.',
    },
    priority: [
      'Direct user instructions for the requested scope.',
      'Repository facts.',
      'This system contract.',
      'Reference inspiration.',
    ],
    unknowns: 'Omit only the smallest unresolved value or group. Do not replace it with a plausible default.',
    changes: 'Record, review, and validate changes before adoption.',
  },
  ko: {
    authority: {
      'project-system': '이 문서는 명시된 범위의 프로젝트 디자인 계약이다.',
      'evidence-backed-reconstruction': '이 문서는 근거 기반 재구성이며, 관련 없는 대상 프로젝트의 권위가 아니다.',
      'portable-brief': '이 문서는 명시된 범위의 이식 가능한 디자인 브리프다.',
    },
    priority: ['요청 범위의 명시적 사용자 지침.', '저장소 사실.', '이 시스템 계약.', '레퍼런스 영감.'],
    unknowns: '가장 작은 미확정 값이나 그룹만 생략한다. 그럴듯한 기본값으로 대체하지 않는다.',
    changes: '채택 전에 변경을 기록하고 검토하고 검증한다.',
  },
  ja: {
    authority: {
      'project-system': 'この文書は、宣言された範囲のプロジェクトデザイン契約です。',
      'evidence-backed-reconstruction': 'この文書は根拠に基づく再構成であり、無関係な対象プロジェクトの権威ではありません。',
      'portable-brief': 'この文書は、宣言された範囲の移植可能なデザインブリーフです。',
    },
    priority: ['依頼範囲に対する明示的なユーザー指示。', 'リポジトリの事実。', 'このシステム契約。', 'リファレンスからの着想。'],
    unknowns: '未確定の最小の値またはグループだけを省略します。もっともらしい既定値で置き換えません。',
    changes: '採用前に変更を記録し、レビューし、検証します。',
  },
  'zh-cn': {
    authority: {
      'project-system': '本文档是所声明范围内的项目设计契约。',
      'evidence-backed-reconstruction': '本文档是基于证据的重构，不是无关目标项目的权威依据。',
      'portable-brief': '本文档是所声明范围内的可移植设计简报。',
    },
    priority: ['针对请求范围的明确用户指令。', '代码仓库事实。', '本系统契约。', '参考灵感。'],
    unknowns: '只省略最小的未确定值或分组。不得用看似合理的默认值替代。',
    changes: '采用前记录、审查并验证变更。',
  },
  'zh-tw': {
    authority: {
      'project-system': '本文件是所聲明範圍內的專案設計契約。',
      'evidence-backed-reconstruction': '本文件是以證據為基礎的重構，不是無關目標專案的權威依據。',
      'portable-brief': '本文件是所聲明範圍內的可攜式設計簡報。',
    },
    priority: ['針對請求範圍的明確使用者指示。', '程式碼儲存庫事實。', '本系統契約。', '參考靈感。'],
    unknowns: '只省略最小的未確定值或群組。不得以看似合理的預設值替代。',
    changes: '採用前記錄、審查並驗證變更。',
  },
});

const PRIORITY_ORDER = 'prompt-fact,repository-fact,system-contract,reference-inspiration';
const CHANGE_POLICY = 'review-record-validate-before-adoption';

function normalizedLines(value) {
  return normalizeLf(value)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !/^#{1,6}\s/.test(line))
    .map((line) => line.replace(/^\d+\.\s+/, '').trim());
}

const PLACEHOLDER_WORD = '(?:FILL\\s*IN|TODO|TBD|UNKNOWN|UNRESOLVED|NOT\\s+SPECIFIED|미확정|미정|알\\s*수\\s*없음|未確定|未确定|尚未確定|尚未确定|未定|不明|未知|未指定|待定)';
const PLACEHOLDER_DECORATION = '(?:\\s*(?::|：|—|–|-)\\s*.*|\\s*\\([^)]*\\)|\\s+(?:LATER|PENDING|PLACEHOLDER|DEFERRED|UNCONFIRMED|UNDECIDED|AWAITING(?:\\s+(?:INPUT|REVIEW|CONFIRMATION|DECISION))?|TO\\s+BE\\s+(?:DECIDED|DEFINED|CONFIRMED|SPECIFIED|DETERMINED)|OWNER\\s+INPUT(?:\\s+REQUIRED)?|추후(?:\\s+(?:결정|확인|지정))?|대기(?:\\s*중)?|확인\\s*(?:필요|대기|중)|결정\\s*(?:필요|대기|중)|後日(?:\\s*(?:決定|確認))?|確認待ち|保留|待確認|待确认|稍後(?:確認|決定)?|稍后(?:确认|决定)?))';
const DELIMITED_PLACEHOLDER = new RegExp(
  `\\[\\s*${PLACEHOLDER_WORD}(?:\\s*(?::|：|—|–|-)\\s*[^\\]]*)?\\s*\\]`
    + `|<\\s*${PLACEHOLDER_WORD}(?:\\s*(?::|：|—|–|-)\\s*[^>]*)?\\s*>`
    + `|\\{\\{\\s*${PLACEHOLDER_WORD}(?:\\s*(?::|：|—|–|-)\\s*[^}]*)?\\s*\\}\\}`,
  'iu',
);
const BARE_PLACEHOLDER = new RegExp(`^${PLACEHOLDER_WORD}(?:${PLACEHOLDER_DECORATION})?$`, 'iu');

function normalizeLf(value) {
  return String(value ?? '').replace(/\r\n?/g, '\n');
}

function blankNonNewlines(value) {
  return String(value).replace(/[^\n]/g, ' ');
}

// Portable declarations are contracts written at the top Markdown level.
// Examples, quoted material, indented code, and inert HTML are useful prose,
// but none of them can establish a normative claim.
function activeTopLevelMarkdown(value) {
  let source = normalizeLf(value).replace(/<!--(?![\s\S]*?-->)[\s\S]*$/g, blankNonNewlines).replace(
    /<(template|script|style|pre|noscript|iframe)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,
    blankNonNewlines,
  );
  source = source.replace(/<(template|script|style|pre|noscript|iframe)\b[^>]*>[\s\S]*$/gi, blankNonNewlines);
  source = source.replace(
    /<([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bhidden\b|\baria-hidden\s*=\s*["']?true|\bstyle\s*=\s*(?:["'][^"']*\b(?:display\s*:\s*none|visibility\s*:\s*hidden)[^"']*["']|[^\s>]*(?:display\s*:\s*none|visibility\s*:\s*hidden)[^\s>]*)))[^>]*>[\s\S]*?<\/\1\s*>/gi,
    blankNonNewlines,
  );
  // A malformed or intentionally unclosed hidden container hides everything
  // that follows in rendered HTML. Paired containers were blanked above, so
  // only unmatched non-void openings remain eligible for this fail-closed
  // range-to-EOF rule. A void element such as <input type="hidden"> must not
  // suppress the rest of the document.
  source = source.replace(
    /<(?!(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)\b)([a-z][a-z0-9-]*)\b(?=[^>]*(?:\bhidden\b|\baria-hidden\s*=\s*["']?true|\bstyle\s*=\s*(?:["'][^"']*\b(?:display\s*:\s*none|visibility\s*:\s*hidden)[^"']*["']|[^\s>]*(?:display\s*:\s*none|visibility\s*:\s*hidden)[^\s>]*)))[^>]*>[\s\S]*$/gi,
    blankNonNewlines,
  );
  const lines = source.split('\n');
  let fence = null;
  return lines.map((line) => {
    const delimiter = line.match(/^ {0,3}(`{3,}|~{3,}).*$/);
    if (fence) {
      const closes = delimiter
        && delimiter[1][0] === fence.character
        && delimiter[1].length >= fence.length;
      if (closes) fence = null;
      return '';
    }
    if (delimiter) {
      fence = { character: delimiter[1][0], length: delimiter[1].length };
      return '';
    }
    if (/^(?:\t| {4})/.test(line) || /^ {0,3}>/.test(line)) return '';
    return line;
  }).join('\n');
}

function markdownPlainText(value) {
  return activeTopLevelMarkdown(value)
    .replace(/<!--[^]*?-->/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(?:#[0-9]+|#x[a-f0-9]+|[a-z][a-z0-9]+);/gi, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*(?:[-*+] |\d+\.\s+|>\s?)/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_~`|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function hasSubstantiveText(value, minimumWords = 2, minimumLetters = 8) {
  const plain = markdownPlainText(value);
  const words = plain.match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu) ?? [];
  const letters = plain.match(/[\p{L}\p{N}]/gu) ?? [];
  return words.length >= minimumWords || letters.length >= minimumLetters;
}

function coreSectionBodies(markdown) {
  const source = activeTopLevelMarkdown(markdown);
  const matches = [...source.matchAll(/^<!--\s*design-md:section\s+([a-z-]+)\s*-->\s*\n##\s+\d+\.\s+[^\n]*\n?/gm)];
  const sections = {};
  matches.forEach((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? source.length;
    sections[match[1]] = source.slice(start, end).trim();
  });
  return sections;
}

function parseAttributes(value) {
  const attributes = {};
  for (const match of String(value ?? '').matchAll(/\b([a-z][a-z0-9-]*)=([a-z0-9][a-z0-9-]*(?:,[a-z0-9][a-z0-9-]*)*)\b/g)) {
    attributes[match[1]] = match[2];
  }
  return attributes;
}

function claimBlocks(sectionBody) {
  const source = activeTopLevelMarkdown(sectionBody);
  const matches = [...source.matchAll(/^<!--\s*design-md:claim\s+([a-z][a-z0-9-]*)([^>]*)-->\s*$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const nextClaim = matches[index + 1]?.index ?? source.length;
    const endMatch = /^<!--\s*design-md:claim-end\s*-->\s*$/gm;
    endMatch.lastIndex = start;
    const explicitEnd = endMatch.exec(source)?.index ?? -1;
    const end = explicitEnd >= 0 && explicitEnd < nextClaim ? explicitEnd : nextClaim;
    return {
      id: match[1],
      attributes: parseAttributes(match[2]),
      // Keep leading indentation intact: four spaces or a tab make the first
      // body line code, and must never be normalized into an active claim.
      body: source.slice(start, end).replace(/^\n/, '').trimEnd(),
    };
  });
}

function prescriptivePlaceholderLines(markdown) {
  const findings = [];
  for (const [index, sourceLine] of activeTopLevelMarkdown(markdown).split('\n').entries()) {
    const line = sourceLine.trim();
    if (!line || line.startsWith('<!--')) continue;
    if (DELIMITED_PLACEHOLDER.test(line)) {
      findings.push({ line: index + 1, value: line });
      continue;
    }
    const candidates = /^\|.*\|$/.test(line)
      ? line.slice(1, -1).split('|')
      : [line.replace(/^\s*(?:[-*+] |\d+\.\s+)/, '').replace(/^[^:：]{1,80}[:：]\s*/, '')];
    if (candidates.some((candidate) => BARE_PLACEHOLDER.test(candidate.replace(/[*_`]/g, '').trim()))) {
      findings.push({ line: index + 1, value: line });
    }
  }
  return findings;
}

function requiredExternalRuntimeLines(markdown) {
  const marker = /(?:\boh-my-design\b|(?:^|[^a-z0-9])omd(?:\s|$|:|\/)|\.omd\/system|(?:graph|manifest|coverage|provenance)\.json|\bsidecars?\b)/i;
  const required = /\b(?:must|required|requires?|need(?:s|ed)?\s+to|depends?\s+on|prerequisite)\b|(?:해야|반드시|필수|필요)|(?:必須|必要|しなければ|してください)|(?:必须|需要)/i;
  const action = /\b(?:run|install|execute|invoke|call|load|open|read|attach|provide)\b|(?:설치|실행|호출|불러|읽어|읽기|첨부|제공)|(?:インストール|実行|呼び出|読み込|ロード|添付)|(?:安装|安裝|执行|執行|调用|呼叫|读取|讀取|載入|加载|加載|附加)/i;
  const negative = /(?:does?\s+not|do\s+not|must\s+not|need\s+not|without|optional|not\s+required|필요\s*없|하지\s*않|없이|선택|不要|不要です|必須ではない|必要ない|无需|無需|不需要|可选|可選)/i;
  return activeTopLevelMarkdown(markdown)
    .replace(/<!--[^]*?-->/g, '')
    .split('\n')
    .map((line, index) => ({ line: index + 1, value: line.trim() }))
    .filter(({ value }) => value && marker.test(value) && required.test(value) && action.test(value) && !negative.test(value));
}

function orderedListCount(value) {
  return (activeTopLevelMarkdown(value).match(/^\d+\.\s+\S.+$/gm) ?? []).length;
}

function taskListCount(value) {
  return activeTopLevelMarkdown(value)
    .split('\n')
    .filter((line) => /^(?:[-*+] |\d+\.\s+)\S/.test(line))
    .map((line) => line.replace(/^(?:[-*+] |\d+\.\s+)/, ''))
    .map((item) => item.replace(/^\[[ xX]\]\s*/, ''))
    .filter((item) => hasSubstantiveText(item, 2, 4))
    .length;
}

function containsUnresolvedSemanticClaim(kind, value) {
  const plain = markdownPlainText(value);
  const subjects = {
    scope: '(?:product|surface|scope|experience|제품|프로덕트|화면|범위|製品|画面|サーフェス|範囲|产品|產品|界面|介面|范围|範圍)',
    tasks: '(?:primary\\s+task|user\\s+task|task|outcome|사용자\\s*(?:과업|작업)|과업|작업|결과|ユーザー?(?:タスク|作業)|タスク|作業|成果|(?:用户|使用者)?(?:任务|任務)|任务|任務|成果)',
    foundations: '(?:foundation|rule|constraint|기반|파운데이션|규칙|제약|基盤|制約|ルール|基础|基礎|规则|規則|约束|約束)',
  };
  const unresolved = '(?:unknown|unresolved|unspecified|not\\s+specified|tbd|todo|미확정|미정|알\\s*수\\s*없|명시되지\\s*않|정해지지\\s*않|未確定|不明|未指定|指定されていない|決まっていない|未确定|未知|尚未确定|尚未確定)';
  const subjectThenUnknown = new RegExp(`${subjects[kind]}.{0,40}${unresolved}`, 'iu');
  const leadingUnknown = new RegExp(`^${unresolved}(?:\\b|[:：—-])`, 'iu');
  return subjectThenUnknown.test(plain) || leadingUnknown.test(plain);
}

function explicitlyNegatesClaim(kind, value) {
  const plain = markdownPlainText(value);
  const patterns = {
    scope: [
      /(?:\b(?:no|not|without)\b|does?\s+not).{0,32}\b(?:product|surface|scope)\b/i,
      /(?:제품|프로덕트|화면|표면|범위).{0,24}(?:없|아니|규정하지\s*않)/,
      /(?:製品|画面|サーフェス|範囲).{0,24}(?:ない|ありません|ではない)/,
      /(?:产品|產品|界面|介面|范围|範圍).{0,24}(?:没有|沒有|不是|不包含)/,
    ],
    tasks: [
      /(?:\b(?:no|not)\b|does?\s+not).{0,32}\b(?:primary\s+)?(?:user\s+)?(?:task|outcome)\b/i,
      /(?:사용자\s*)?(?:과업|작업|결과).{0,24}(?:없|아니|규정하지\s*않)/,
      /(?:ユーザー)?(?:タスク|作業|成果).{0,24}(?:ない|ありません|ではない)/,
      /(?:用户|使用者)?(?:任务|任務|成果).{0,24}(?:没有|沒有|不是|不包含)/,
    ],
    foundations: [
      /(?:\b(?:no|not)\b|does?\s+not).{0,32}\b(?:actionable\s+)?(?:foundation|constraint|rule)\b/i,
      /(?:기반|파운데이션|제약|규칙).{0,24}(?:없|아니)/,
      /(?:基盤|制約|ルール).{0,24}(?:ない|ありません|ではない)/,
      /(?:基础|基礎|约束|約束|规则|規則).{0,24}(?:没有|沒有|不是|不包含)/,
    ],
  };
  return patterns[kind].some((pattern) => pattern.test(plain));
}

function evaluatePortableCoreClaims(markdown, options = {}) {
  const sections = coreSectionBodies(markdown);
  const byId = {};
  for (const [sectionId, body] of Object.entries(sections)) {
    for (const claim of claimBlocks(body)) {
      if (!byId[claim.id]) byId[claim.id] = [];
      byId[claim.id].push({ ...claim, sectionId });
    }
  }
  const exactClaim = (id) => {
    const matches = byId[id] ?? [];
    return matches.length === 1 && matches[0].sectionId === SECTION_FOR_CLAIM[id] ? matches[0] : null;
  };
  const declarationCount = Object.values(byId).reduce((total, claims) => total + claims.length, 0);
  const declarationEndCount = (normalizeLf(markdown).match(/^<!--\s*design-md:claim-end\s*-->\s*$/gm) ?? []).length;
  const scope = exactClaim('scope');
  const tasks = exactClaim('primary-tasks');
  const foundations = exactClaim('foundations');
  const authority = exactClaim('authority');
  const priority = exactClaim('application-priority');
  const unknowns = exactClaim('unknowns');
  const changes = exactClaim('changes');
  const requiredClaimInstances = REQUIRED_CLAIMS.flatMap((id) => (
    (byId[id] ?? []).map((claim) => ({ id, claim }))
  ));
  const missingClaimLocales = requiredClaimInstances
    .filter(({ claim }) => !claim.attributes.lang)
    .map(({ id }) => id);
  const unsupportedClaimLocales = requiredClaimInstances
    .filter(({ claim }) => claim.attributes.lang && !Object.hasOwn(GOVERNANCE_COPY, claim.attributes.lang))
    .map(({ id, claim }) => `${id}:${claim.attributes.lang}`);
  const supportedClaimLocales = [...new Set(requiredClaimInstances
    .map(({ claim }) => claim.attributes.lang)
    .filter((locale) => Object.hasOwn(GOVERNANCE_COPY, locale)))];
  const projectionLocale = options.projectionLocale ?? null;
  const projectionLocaleSupported = projectionLocale === null
    || Object.hasOwn(GOVERNANCE_COPY, projectionLocale);
  const claimLocaleMatchesProjection = projectionLocale === null
    || (projectionLocaleSupported && requiredClaimInstances.every(({ claim }) => (
      !claim.attributes.lang
      || !Object.hasOwn(GOVERNANCE_COPY, claim.attributes.lang)
      || claim.attributes.lang === projectionLocale
    )));
  const placeholders = prescriptivePlaceholderLines(markdown);
  const runtimeLines = requiredExternalRuntimeLines(markdown);
  const governanceLanguage = authority?.attributes.lang ?? priority?.attributes.lang
    ?? unknowns?.attributes.lang ?? changes?.attributes.lang;
  const governanceCopy = GOVERNANCE_COPY[governanceLanguage];
  const authorityBody = authority ? normalizedLines(authority.body).join(' ') : '';
  const expectedAuthority = governanceCopy?.authority?.[authority?.attributes.kind];
  const priorityLines = priority ? normalizedLines(priority.body) : [];
  const unknownBody = unknowns ? normalizedLines(unknowns.body).join(' ') : '';
  const changesBody = changes ? normalizedLines(changes.body).join(' ') : '';
  const declaredTaskCount = Number(tasks?.attributes.count);

  const checks = {
    product_surface_scope: {
      pass: Boolean(scope
        && scope.attributes.kind === 'product-surface'
        && hasSubstantiveText(scope.body, 3, 12)
        && !explicitlyNegatesClaim('scope', scope.body)
        && !containsUnresolvedSemanticClaim('scope', scope.body)),
      evidence: ['claim:scope'],
    },
    primary_task: {
      pass: Boolean(tasks
        && tasks.attributes.kind === 'user-outcomes'
        && Number.isSafeInteger(declaredTaskCount)
        && declaredTaskCount >= 1
        && taskListCount(tasks.body) === declaredTaskCount
        && !explicitlyNegatesClaim('tasks', tasks.body)
        && !containsUnresolvedSemanticClaim('tasks', tasks.body)),
      evidence: ['claim:primary-tasks'],
    },
    actionable_foundations_or_known_constraints: {
      pass: Boolean(foundations
        && foundations.attributes.kind === 'rules-or-constraints'
        && hasSubstantiveText(foundations.body, 2, 8)
        && !explicitlyNegatesClaim('foundations', foundations.body)
        && !containsUnresolvedSemanticClaim('foundations', foundations.body)),
      evidence: ['claim:foundations'],
    },
    governance_authority: {
      pass: Boolean(authority
        && ['project-system', 'evidence-backed-reconstruction', 'portable-brief'].includes(authority.attributes.kind)
        && governanceCopy
        && authority.attributes.lang === governanceLanguage
        && authorityBody === expectedAuthority),
      evidence: ['claim:authority'],
    },
    governance_application_priority: {
      pass: Boolean(priority
        && governanceCopy
        && priority.attributes.lang === governanceLanguage
        && priority.attributes.order === PRIORITY_ORDER
        && orderedListCount(priority.body) === governanceCopy.priority.length
        && JSON.stringify(priorityLines) === JSON.stringify(governanceCopy.priority)),
      evidence: ['claim:application-priority'],
    },
    governance_unknown_absence: {
      pass: Boolean(unknowns
        && unknowns.attributes.policy === 'absent-at-smallest-unresolved-boundary'
        && unknowns.attributes.lang === governanceLanguage
        && unknownBody === governanceCopy?.unknowns),
      evidence: ['claim:unknowns'],
    },
    governance_change_rule: {
      pass: Boolean(changes
        && governanceCopy
        && changes.attributes.lang === governanceLanguage
        && changes.attributes.policy === CHANGE_POLICY
        && changesBody === governanceCopy.changes),
      evidence: ['claim:changes'],
    },
    claim_locale_declared: {
      pass: missingClaimLocales.length === 0,
      evidence: missingClaimLocales.map((id) => `claim:${id}`),
    },
    claim_locale_supported: {
      pass: unsupportedClaimLocales.length === 0,
      evidence: unsupportedClaimLocales.map((entry) => `claim:${entry}`),
    },
    claim_locale_consistent: {
      pass: supportedClaimLocales.length <= 1,
      evidence: supportedClaimLocales.map((locale) => `lang:${locale}`),
    },
    claim_locale_matches_projection: {
      pass: claimLocaleMatchesProjection,
      evidence: projectionLocale === null ? ['projection:standalone'] : [`projection:${projectionLocale}`],
    },
    standalone_no_required_runtime: { pass: runtimeLines.length === 0, evidence: ['markdown:document'] },
    no_prescriptive_placeholders: { pass: placeholders.length === 0, evidence: ['markdown:document'] },
  };
  const reasonDefinitions = {
    product_surface_scope: ['missing-product-surface-scope', 'Experience needs one explicit scope claim.'],
    primary_task: ['missing-primary-task', 'Experience needs a Primary tasks claim with at least one list item.'],
    actionable_foundations_or_known_constraints: ['missing-actionable-foundations-or-known-constraints', 'Foundations need one explicit actionable-foundations claim.'],
    governance_authority: ['missing-governance-authority', 'Governance needs an Authority claim with a recognized kind.'],
    governance_application_priority: ['missing-governance-application-priority', 'Governance needs an ordered Application priority claim.'],
    governance_unknown_absence: ['missing-governance-unknown-absence', 'Governance needs the exact unknown-absence policy claim.'],
    governance_change_rule: ['missing-governance-change-rule', 'Governance needs an explicit Changes claim.'],
    claim_locale_declared: ['missing-claim-locale', 'Every present required Core claim must declare a lang attribute.'],
    claim_locale_supported: ['unsupported-claim-locale', 'Every required Core claim lang must be one of en, ko, ja, zh-cn, or zh-tw.'],
    claim_locale_consistent: ['mixed-claim-locales', 'All required Core claim lang attributes must declare one document locale.'],
    claim_locale_matches_projection: ['claim-locale-projection-mismatch', 'Every required Core claim lang must match the graph projection locale.'],
    standalone_no_required_runtime: ['requires-external-runtime-or-sidecar', 'Standalone use requires an external sidecar, command, or installation.'],
    no_prescriptive_placeholders: ['contains-prescriptive-placeholder', 'The standalone contract contains an unresolved placeholder.'],
  };
  const reasons = [];
  if (options.structurallyValid !== true) reasons.push({ code: 'not-structurally-valid-core-v2', message: 'The document is not a structurally valid seven-anchor Core v2 file.' });
  if (options.cleanTop !== true) reasons.push({ code: 'non-neutral-top-metadata', message: 'The visible preamble contains producer or evidence metadata.' });
  if (declarationEndCount !== declarationCount) {
    reasons.push({ code: 'invalid-claim-boundaries', message: 'Every emitted Core claim needs one explicit claim-end boundary.' });
  }
  for (const [id, check] of Object.entries(checks)) {
    if (!check.pass) {
      const [code, message] = reasonDefinitions[id];
      reasons.push({ code, message });
    }
  }
  const portableCore = options.structurallyValid === true && options.cleanTop === true && reasons.length === 0;
  return {
    level: portableCore ? 'portable-core' : options.structurallyValid === true ? 'structural-core' : 'none',
    structurally_valid: options.structurallyValid === true,
    portable_core: portableCore,
    checks,
    reasons,
    claim_locale: supportedClaimLocales.length === 1 ? supportedClaimLocales[0] : null,
    declarations: Object.fromEntries(REQUIRED_CLAIMS.map((id) => [id, (byId[id] ?? []).length])),
  };
}

module.exports = {
  REQUIRED_CLAIMS,
  CHANGE_POLICY,
  GOVERNANCE_COPY,
  PRIORITY_ORDER,
  claimBlocks,
  coreSectionBodies,
  evaluatePortableCoreClaims,
  prescriptivePlaceholderLines,
  requiredExternalRuntimeLines,
};
