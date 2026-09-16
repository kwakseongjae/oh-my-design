import yaml from "js-yaml";

export const REFERENCE_QUALITY_SCHEMA_VERSION = 2;

export const REFERENCE_QUALITY_STATUSES = [
  "verified_v2",
  "partial",
  "legacy_snapshot",
];

const DAY_MS = 24 * 60 * 60 * 1000;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const TOKEN_NAMESPACES = [
  "colors",
  "color",
  "typography",
  "font",
  "text",
  "rounded",
  "radius",
  "spacing",
  "shadow",
  "components",
];
const INTERACTIVE_COMPONENT_TYPES = new Set(["button", "input", "tab", "toggle"]);
const OBSERVED_STATE_KEYS = new Set(["hover", "pressed", "focus", "active", "disabled", "checked", "error", "states"]);
/**
 * Indexed state keys — a per-state value (`pressed: "#1b64da"`), not a prose
 * summary. `states: "loading, disabled, pressed"` names states without giving a
 * consumer anything to render, so it is deliberately NOT in this set.
 *
 * Kept separate from OBSERVED_STATE_KEYS on purpose: that set still governs the
 * blocking `interactive_state_missing` check, while this one only *reports*
 * (2026-09-16). Measured before splitting them: tightening the blocking check to
 * this set would drop verified_v2 from 140 to 11, because 93 of 140 satisfy the
 * gate with a prose `states` string alone. Enforcement waits for the recovery
 * work; detection ships now so that work has a worklist.
 */
const INDEXED_STATE_KEYS = new Set(["hover", "pressed", "focus", "active", "disabled", "checked", "error"]);
export const SOURCE_TTLS = {
  "product-surface": 90,
  "official-doc": 180,
  "brand-asset": 365,
  license: 365,
};
const VERIFICATION_V2_KEYS = new Set(["schema", "checked", "surfaces", "sources", "claims", "conflicts"]);

function addDays(date, days) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

export function parseReferenceFrontmatter(markdown, filePath = "DESIGN.md") {
  if (!markdown.startsWith("---\n")) {
    throw new Error(`${filePath}: file must start with a YAML frontmatter fence`);
  }
  const close = markdown.indexOf("\n---\n", 4);
  if (close < 0) throw new Error(`${filePath}: missing closing frontmatter fence`);
  // JSON_SCHEMA keeps YYYY-MM-DD scalars as strings. DEFAULT_SCHEMA turns
  // them into timezone-sensitive Date objects, which makes freshness checks
  // non-deterministic across CI and local machines.
  const parsed = yaml.load(markdown.slice(4, close), { schema: yaml.JSON_SCHEMA });
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new Error(`${filePath}: frontmatter must be a YAML mapping`);
  }
  return parsed;
}

function isDate(value) {
  return typeof value === "string" && DATE_RE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function ageInDays(captured, asOf) {
  return Math.floor((Date.parse(`${asOf}T00:00:00Z`) - Date.parse(`${captured}T00:00:00Z`)) / DAY_MS);
}

function flattenLeaves(value, prefix, out) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenLeaves(item, `${prefix}.${index}`, out));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      flattenLeaves(child, `${prefix}.${key}`, out);
    }
    return;
  }
  if (value !== undefined && value !== null && value !== "") out.push(prefix);
}

/** Stable claim paths that a Verified v2 reference must ground atomically. */
export function collectCanonicalClaimPaths(tokens) {
  if (!tokens || typeof tokens !== "object" || Array.isArray(tokens)) return [];
  const paths = [];
  for (const namespace of TOKEN_NAMESPACES) {
    if (tokens[namespace] !== undefined) {
      flattenLeaves(tokens[namespace], `tokens.${namespace}`, paths);
    }
  }
  return [...new Set(paths)].sort();
}

function extractTier1Urls(markdown) {
  const line = markdown.match(/^\*\*Tier 1 sources:\*\*\s*(.+)$/m)?.[1] ?? "";
  return line.match(/https?:\/\/[^\s,)]+/g) ?? [];
}

function proofSignals(verificationMarkdown) {
  if (!verificationMarkdown) return { present: false, samples: 0, hasUrl: false };
  return {
    present: /^##\s+Proof/m.test(verificationMarkdown),
    samples: (verificationMarkdown.match(/rgb\(|#[0-9a-fA-F]{6}\b|\b\d+px\b/g) ?? []).length,
    hasUrl: /https?:\/\//.test(verificationMarkdown),
  };
}

/**
 * Values a document derived rather than observed, which then reached the token
 * block as unqualified fact (2026-09-16).
 *
 * Two real cases motivated this. `ubie` §4 wrote "Hover: darken to `#304cad`
 * (blue700)" — a palette-step rule, not a measurement; the shipped CSS says
 * `#283f91`, and six of six checked values were wrong. `bunjang` was worse in a
 * more instructive way: its prose is honest — "interpolated; not directly
 * observed in computed styles" — but the token block carried
 * `primary-hover: "#c00b15"` with no such qualifier. The caveat survives in prose
 * and is lost on the way to the machine-readable layer, so a consuming agent
 * reads an estimate as a fact.
 *
 * Reported, never blocking: a hit is a review request, not a verdict. A phrase
 * like "darkens to" can equally describe a value that WAS measured — `spoqa`'s
 * `#008c5e` is recorded in its Tier-1 sources line — so this cannot decide on its
 * own. It only finds the candidates a human has to look at.
 */
const SELF_DECLARED_DERIVED = /\b(?:interpolated|not directly observed|not observed|estimated|approximated|inferred value|extrapolated)\b/i;
const DERIVATION_VERB = /\b(?:darken(?:s|ed|ing)?\s+(?:to|toward|towards)|lighten(?:s|ed|ing)?\s+(?:to|toward|towards))\b/i;

/**
 * 팔레트에 이름이 붙은 값. `primary-deep`, `gray-400`, `foreground` 같은 항목은
 * **상태 주장이 아니라 색 스케일의 한 단계**이고, 산문이 그 색을 "darkens to"로
 * 서술했다는 이유로 파생이라 부를 수 없다.
 *
 * 2026-09-16에 13건을 분류해보니 8건이 이런 오탐이었다 — `amazingtalker`의
 * `primary-deep`, `openai`의 `gray-400`, `muji`의 `#333333`(12개 컴포넌트가 쓰는
 * 브랜드 본색), `wadiz`의 `tint-accent`. 상태 전용 이름(`*-hover`, `*-pressed`,
 * `*-focus`, `*-active`, `*-disabled`)만 남긴다.
 */
const STATE_SCOPED_NAME = /(?:^|[-_])(?:hover|pressed|focus|active|disabled|checked|error)$/i;
function nonStateePaletteHexes(tokens) {
  const palette = tokens?.colors ?? tokens?.color ?? {};
  const out = new Set();
  if (palette && typeof palette === "object" && !Array.isArray(palette)) {
    for (const [name, value] of Object.entries(palette)) {
      if (STATE_SCOPED_NAME.test(name)) continue;
      if (typeof value === "string") out.add(value.toLowerCase());
    }
  }
  return out;
}

function derivedValueSignals(markdown, tokens, verificationMarkdown = "") {
  const body = markdown.slice(markdown.indexOf("\n---\n", 4) + 5);
  const tokenBlob = JSON.stringify(tokens ?? {}).toLowerCase();
  const paletteNamed = nonStateePaletteHexes(tokens);
  // 값이 Proof/.verification.md에 측정 기록으로 있으면 "darkens to"는 관측값에 대한
  // 서술이지 파생의 증거가 아니다. 2026-09-16 분류에서 4건이 이 경우였다
  // (chunghwa #0083ec, returnzero #666666, sparkful #000000, spoqa #008c5e).
  const proofText = `${verificationMarkdown}\n${(body.match(/^## Proof[\s\S]*/m) ?? [""])[0]}`.toLowerCase();
  const declared = new Set();
  const suspected = new Set();
  // Scope to a sentence, then to the text after the qualifier inside it. Both
  // narrowings are load-bearing and each came from a real false positive:
  // `bunjang` names its observed `#d80c18` before the interpolated `#c00b15` in
  // one sentence, and `hana` says "shadows were not observed" in one sentence
  // and cites an observed `#2dc396` border in the next. A qualifier only speaks
  // for values that follow it in its own sentence.
  const sentences = body.split(/(?<=[.!?])\s+|\n/);
  for (const sentence of sentences) {
    const selfDeclaredAt = sentence.search(SELF_DECLARED_DERIVED);
    const derivationAt = sentence.search(DERIVATION_VERB);
    if (selfDeclaredAt < 0 && derivationAt < 0) continue;
    const marker = derivationAt < 0 ? selfDeclaredAt
      : selfDeclaredAt < 0 ? derivationAt
      : Math.min(selfDeclaredAt, derivationAt);
    const hexes = sentence.slice(marker).match(/#[0-9a-fA-F]{6}\b/g);
    if (!hexes) continue;
    const selfDeclared = selfDeclaredAt >= 0;
    for (const hex of hexes) {
      // Only a value that actually reached the token layer is a problem. A
      // derivation described in prose alone asserts nothing to a consumer.
      if (!tokenBlob.includes(hex.toLowerCase())) continue;
      // 상태 이름이 아닌 팔레트 항목이면 상태 주장이 아니다.
      if (paletteNamed.has(hex.toLowerCase())) continue;
      if (proofText.includes(hex.toLowerCase())) continue;
      if (selfDeclared) declared.add(hex.toLowerCase());
      else suspected.add(hex.toLowerCase());
    }
  }
  for (const hex of declared) suspected.delete(hex);
  return { declared: [...declared].sort(), suspected: [...suspected].sort() };
}

function hasExplicitUnresolvedConflict(markdown) {
  const value = markdown.match(/^\*\*Conflicts unresolved:\*\*\s*(.+)$/mi)?.[1]?.trim();
  if (!value) return false;
  return !/^(none|없음|n\/a|no)$/i.test(value);
}

function addReason(target, code) {
  if (!target.includes(code)) target.push(code);
}

function normalizeList(value) {
  return Array.isArray(value) ? value : [];
}

/**
 * Component coverage, reported and never blocking (2026-09-16).
 *
 * Exists because the blocking gate has two cheap exits that both reward thinner
 * data: a reference with NO components produces no gaps and passes, and a
 * component whose only state evidence is a prose `states` string passes the same
 * check as one carrying per-state values. The July 2026 promotion batch took the
 * first exit — verified references average 3.1 components against legacy's 9.6.
 *
 * These counts make both exits visible so a reference can be ranked by what it
 * actually gives a consumer rather than by whether it cleared a gate.
 */
/**
 * A state key counts only when its value is something a consumer could render.
 *
 * Checking key presence alone reproduces the very defect this function exists to
 * expose: `hover: "observed"` would clear the check while telling a consumer
 * nothing, exactly as `states: "hover, pressed, disabled"` does. The value has to
 * carry a colour, a dimension, or a token reference.
 */
function isRenderableStateValue(value) {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /#[0-9a-fA-F]{3,8}\b/.test(trimmed)          // hex colour
    || /\b(?:rgb|rgba|hsl|hsla|oklch|oklab|color)\(/i.test(trimmed) // functional colour
    || /\b\d*\.?\d+(?:px|rem|em|%|ms|s)\b/.test(trimmed)    // dimension or duration
    || /\{[^}]+\}/.test(trimmed)                      // token reference, e.g. {color.primary}
    || /\bvar\(--/.test(trimmed);                     // CSS custom property
}

function componentCoverage(tokens) {
  const components = tokens?.components;
  const empty = { total: 0, interactive: 0, stated: 0, proseStateOnly: 0 };
  if (!components || typeof components !== "object" || Array.isArray(components)) return empty;
  let total = 0, interactive = 0, stated = 0, proseStateOnly = 0;
  for (const component of Object.values(components)) {
    if (!component || typeof component !== "object" || Array.isArray(component)) continue;
    total += 1;
    if (!INTERACTIVE_COMPONENT_TYPES.has(component.type)) continue;
    interactive += 1;
    const keys = Object.keys(component);
    if (keys.some((key) => INDEXED_STATE_KEYS.has(key) && isRenderableStateValue(component[key]))) stated += 1;
    else if (keys.includes("states") || keys.some((key) => INDEXED_STATE_KEYS.has(key))) proseStateOnly += 1;
  }
  return { total, interactive, stated, proseStateOnly };
}

function componentStateGaps(tokens) {
  const components = tokens?.components;
  if (!components || typeof components !== "object" || Array.isArray(components)) return [];
  const gaps = [];
  for (const [name, component] of Object.entries(components)) {
    if (!component || typeof component !== "object" || Array.isArray(component)) continue;
    if (!INTERACTIVE_COMPONENT_TYPES.has(component.type)) continue;
    if (!Object.keys(component).some((key) => OBSERVED_STATE_KEYS.has(key))) gaps.push(name);
  }
  return gaps;
}

/**
 * Compute a conservative public quality tier. A reference can never become
 * Verified v2 from prose or a date stamp alone: it needs the structured
 * verification_v2 evidence graph described in spec/reference-v2.md.
 */
export function evaluateReferenceQuality({ id, markdown, frontmatter, verificationMarkdown = "", asOf }) {
  if (!isDate(asOf)) throw new Error(`invalid asOf date: ${asOf}`);

  const reasons = [];
  const partialBlockers = [];
  const verifiedBlockers = [];
  const tokens = frontmatter?.tokens;
  const tokenSource = tokens?.source ?? null;
  const verifiedAt = String(frontmatter?.verified ?? "");
  const extractedAt = typeof tokens?.extracted === "string" ? tokens.extracted : null;
  const tier1Urls = extractTier1Urls(markdown);
  const proof = proofSignals(verificationMarkdown);
  const claims = collectCanonicalClaimPaths(tokens);
  const v2 = frontmatter?.verification_v2;

  const blockPartial = (code) => {
    addReason(reasons, code);
    addReason(partialBlockers, code);
    addReason(verifiedBlockers, code);
  };
  const blockVerified = (code) => {
    addReason(reasons, code);
    addReason(verifiedBlockers, code);
  };

  if (!tokens || typeof tokens !== "object" || Array.isArray(tokens)) blockPartial("tokens_missing");
  if (tokenSource === "prose-derived" || !tokenSource) blockPartial("token_source_unverified");
  if (!isDate(verifiedAt)) blockPartial("verified_date_invalid");
  // `extracted` records two different acts and only one of them can be "too late".
  // A `live-extract` reading the brand's surface after the verification stamp is a
  // real problem: the stamp does not cover that reading. A `prose-derived` token is
  // transcribed *from* the already-verified prose, so it necessarily comes after
  // verification — that is the correct order, not a violation.
  //
  // Measured 2026-09-16: of 115 references flagged here, 111 were `prose-derived`
  // and all 111 were already blocked by `token_source_unverified`. One phenomenon
  // was being counted twice, and the second count named it wrongly. The remaining
  // four (3 `design-system`, 1 `reconciled`) are genuine and still block.
  const transcribedFromVerifiedProse = tokenSource === "prose-derived";
  if (extractedAt && !isDate(extractedAt)) {
    blockPartial("freshness_conflict");
  } else if (extractedAt && !transcribedFromVerifiedProse && isDate(verifiedAt) && extractedAt > verifiedAt) {
    blockPartial("freshness_conflict");
  }
  if (!proof.present || proof.samples < 5 || !proof.hasUrl) blockPartial("proof_incomplete");
  if (tier1Urls.length === 0) blockPartial("tier1_source_missing");
  if (hasExplicitUnresolvedConflict(markdown)) blockPartial("conflict_unresolved");

  if (!v2 || typeof v2 !== "object" || Array.isArray(v2)) {
    blockVerified("verification_v2_missing");
  } else {
    if (v2.schema !== REFERENCE_QUALITY_SCHEMA_VERSION) blockVerified("verification_schema_invalid");
    if (Object.keys(v2).some((key) => !VERIFICATION_V2_KEYS.has(key))) blockVerified("verification_schema_invalid");
    if (!isDate(v2.checked)) blockVerified("verification_checked_invalid");
    if (isDate(v2.checked) && isDate(verifiedAt) && v2.checked < verifiedAt) blockVerified("verification_checked_stale");
    if (isDate(v2.checked) && extractedAt && isDate(extractedAt) && v2.checked < extractedAt) blockVerified("verification_checked_stale");

    const surfaces = normalizeList(v2.surfaces);
    const sources = normalizeList(v2.sources);
    const conflicts = normalizeList(v2.conflicts);
    const claimEvidence = v2.claims && typeof v2.claims === "object" && !Array.isArray(v2.claims) ? v2.claims : {};
    const surfaceIds = new Set(surfaces.map((surface) => surface?.id).filter(Boolean));
    const sourceIds = new Set(sources.map((source) => source?.id).filter(Boolean));

    if (surfaces.length === 0 || surfaceIds.size !== surfaces.length) blockVerified("surface_index_invalid");
    if (sources.length === 0 || sourceIds.size !== sources.length) blockVerified("source_index_invalid");
    if (conflicts.length > 0) blockVerified("conflict_unresolved");

    for (const source of sources) {
      if (!source || !sourceIds.has(source.id) || !/^https?:\/\//.test(source.url ?? "") || !isDate(source.captured)) {
        blockVerified("source_index_invalid");
        continue;
      }
      const ttl = SOURCE_TTLS[source.kind];
      if (!ttl) blockVerified("source_kind_invalid");
      else if (ageInDays(source.captured, asOf) > ttl) blockVerified("source_expired");
    }

    for (const surface of surfaces) {
      if (!surface || !surfaceIds.has(surface.id) || !/^https?:\/\//.test(surface.url ?? "") || !isDate(surface.inspected)) {
        blockVerified("surface_index_invalid");
      }
    }

    for (const path of claims) {
      const evidence = claimEvidence[path];
      if (!evidence || !surfaceIds.has(evidence.surface_id) || !sourceIds.has(evidence.source_id) || !isDate(evidence.captured)) {
        blockVerified("claim_evidence_missing");
      }
    }
    const unknownClaims = Object.keys(claimEvidence).filter((path) => !claims.includes(path));
    if (unknownClaims.length > 0) blockVerified("claim_path_unknown");

    if (componentStateGaps(tokens).length > 0) blockVerified("interactive_state_missing");
  }

  // Advisory, never blocking — these name the two cheap exits from the blocking
  // gate so the recovery worklist can target them. Deliberately NOT in
  // `reasonCodes`: that field means "why this reference is not a higher tier",
  // and a Verified v2 entry is asserted to carry none.
  const coverage = componentCoverage(tokens);
  const advisories = [];
  if (coverage.total === 0) advisories.push("component_absent");
  else if (coverage.interactive === 0) advisories.push("component_noninteractive_only");
  else if (coverage.stated === 0) advisories.push("component_state_prose_only");

  const derived = derivedValueSignals(markdown, tokens, verificationMarkdown);
  if (derived.declared.length > 0) advisories.push("token_value_self_declared_derived");
  else if (derived.suspected.length > 0) advisories.push("token_value_possibly_derived");

  let status = "verified_v2";
  if (partialBlockers.length > 0) status = "legacy_snapshot";
  else if (verifiedBlockers.length > 0) status = "partial";

  const evidenceClaims = v2?.claims && typeof v2.claims === "object" && !Array.isArray(v2.claims)
    ? Object.keys(v2.claims).filter((path) => claims.includes(path)).length
    : 0;
  const sourceDueDates = normalizeList(v2?.sources)
    .flatMap((source) => {
      const ttl = SOURCE_TTLS[source?.kind];
      return ttl && isDate(source?.captured) ? [addDays(source.captured, ttl)] : [];
    })
    .sort();

  return {
    id,
    status,
    verifiedAt: isDate(verifiedAt) ? verifiedAt : null,
    tokensExtractedAt: extractedAt && isDate(extractedAt) ? extractedAt : null,
    nextReverifyAt: sourceDueDates[0] ?? null,
    tokenSource,
    claimCount: claims.length,
    evidenceClaimCount: evidenceClaims,
    evidenceCoverage: claims.length ? Number((evidenceClaims / claims.length).toFixed(4)) : 0,
    surfaceCount: normalizeList(v2?.surfaces).length,
    sourceCount: normalizeList(v2?.sources).length,
    conflictCount: normalizeList(v2?.conflicts).length + (hasExplicitUnresolvedConflict(markdown) ? 1 : 0),
    tier1SourceCount: tier1Urls.length,
    componentCount: coverage.total,
    interactiveComponentCount: coverage.interactive,
    statedComponentCount: coverage.stated,
    reasonCodes: reasons.sort(),
    advisoryCodes: advisories.sort(),
  };
}
