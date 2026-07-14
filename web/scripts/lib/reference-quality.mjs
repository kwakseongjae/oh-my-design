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
  if (extractedAt && (!isDate(extractedAt) || (isDate(verifiedAt) && extractedAt > verifiedAt))) {
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
    reasonCodes: reasons.sort(),
  };
}
