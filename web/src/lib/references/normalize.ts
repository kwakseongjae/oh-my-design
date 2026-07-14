import type { RefEntry } from "@/data/registry.generated";
import type { ReferenceQualityEntry } from "@/data/reference-quality.generated";
import {
  REFERENCE_AST_SCHEMA_VERSION,
  type ReferenceAst,
  type ReferenceAstConfidence,
  type ReferenceAstNode,
  type ReferenceAstOrigin,
  type ReferenceAstScalar,
  type ReferenceAstSection,
  type ReferenceAstValue,
  type ReferenceAstFoundations,
  type ReferenceAstEvidenceGraph,
  type ReferenceVerificationV2Input,
  type ReferenceProseFallback,
} from "./schema.ts";

const CLAIM_NAMESPACES = [
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
] as const;

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;
const RADIUS_WITH_UNIT = /^\d+(?:\.\d+)?(?:px|rem|em|%)$/;

type RefTokens = NonNullable<RefEntry["tokens"]>;
type ValueMap<T extends ReferenceAstScalar> = Record<string, ReferenceAstValue<T>>;

export interface NormalizeReferenceInput {
  readonly entry: RefEntry;
  readonly quality: ReferenceQualityEntry;
  readonly markdown: string;
  readonly proseFallback?: ReferenceProseFallback;
  readonly verificationV2?: ReferenceVerificationV2Input;
}

export class ReferenceAstError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ReferenceAstError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function sortedRecord<T>(value: Record<string, T>): Readonly<Record<string, T>> {
  return Object.fromEntries(Object.entries(value).sort(([left], [right]) => left.localeCompare(right)));
}

function astValue<T extends ReferenceAstScalar>(
  value: T,
  claimPath: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): ReferenceAstValue<T> {
  return { value, claimPath, origin, confidence };
}

function assertColor(value: unknown, claimPath: string): string {
  if (typeof value !== "string" || !HEX_COLOR.test(value)) {
    throw new ReferenceAstError(`${claimPath} must be a six-digit hex color`);
  }
  return value;
}

function normalizeColorMap(
  value: unknown,
  claimRoot: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): ValueMap<string> {
  if (value === undefined) return {};
  if (!isRecord(value)) throw new ReferenceAstError(`${claimRoot} must be a mapping`);

  const normalized: ValueMap<string> = {};
  for (const [key, color] of Object.entries(value)) {
    const claimPath = `${claimRoot}.${key}`;
    normalized[key] = astValue(assertColor(color, claimPath), claimPath, origin, confidence);
  }
  return normalized;
}

function normalizeStringMap(
  value: unknown,
  claimRoot: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): ValueMap<string> {
  if (value === undefined) return {};
  if (!isRecord(value)) throw new ReferenceAstError(`${claimRoot} must be a mapping`);

  const normalized: ValueMap<string> = {};
  for (const [key, item] of Object.entries(value)) {
    // Empty optional roles are equivalent to an absent claim in the quality
    // evaluator. Preserve that contract instead of inventing a font/shadow.
    if (item === "") continue;
    if (typeof item !== "string") throw new ReferenceAstError(`${claimRoot}.${key} must be a string`);
    normalized[key] = astValue(item, `${claimRoot}.${key}`, origin, confidence);
  }
  return normalized;
}

function normalizeSpacing(value: unknown, claimRoot: string, confidence: ReferenceAstConfidence): ValueMap<number> {
  if (value === undefined) return {};

  const entries = Array.isArray(value)
    ? value.map((item, index) => [String(index), item] as const)
    : isRecord(value)
      ? Object.entries(value)
      : null;
  if (!entries) throw new ReferenceAstError(`${claimRoot} must be a numeric array or mapping`);

  const normalized: ValueMap<number> = {};
  for (const [key, item] of entries) {
    if (typeof item !== "number" || !Number.isFinite(item)) {
      throw new ReferenceAstError(`${claimRoot}.${key} must be a finite number`);
    }
    normalized[key] = astValue(item, `${claimRoot}.${key}`, "frontmatter", confidence);
  }
  return normalized;
}

function normalizeRadius(value: unknown, claimPath: string): string {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) return `${value}px`;
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (/^\d+(?:\.\d+)?$/.test(trimmed)) return `${trimmed}px`;
    if (RADIUS_WITH_UNIT.test(trimmed)) return trimmed;
  }
  throw new ReferenceAstError(`${claimPath} must be a non-negative radius`);
}

function normalizeRadiusMap(
  value: unknown,
  claimRoot: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): ValueMap<string> {
  if (value === undefined) return {};
  if (!isRecord(value)) throw new ReferenceAstError(`${claimRoot} must be a mapping`);

  const normalized: ValueMap<string> = {};
  for (const [key, radius] of Object.entries(value)) {
    const claimPath = `${claimRoot}.${key}`;
    normalized[key] = astValue(normalizeRadius(radius, claimPath), claimPath, origin, confidence);
  }
  return normalized;
}

function toAstNode(
  value: unknown,
  claimPath: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): ReferenceAstNode {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    if (typeof value === "number" && !Number.isFinite(value)) {
      throw new ReferenceAstError(`${claimPath} must be finite`);
    }
    return astValue(value, claimPath, origin, confidence);
  }
  if (Array.isArray(value)) {
    return value.map((item, index) => toAstNode(item, `${claimPath}.${index}`, origin, confidence));
  }
  if (isRecord(value)) {
    const normalized: Record<string, ReferenceAstNode> = {};
    for (const [key, item] of Object.entries(value).sort(([left], [right]) => left.localeCompare(right))) {
      normalized[key] = toAstNode(item, `${claimPath}.${key}`, origin, confidence);
    }
    return normalized;
  }
  throw new ReferenceAstError(`${claimPath} contains an unsupported value`);
}

function normalizeNodeMap(
  value: unknown,
  claimRoot: string,
  origin: ReferenceAstOrigin,
  confidence: ReferenceAstConfidence,
): Record<string, ReferenceAstNode> {
  if (value === undefined) return {};
  if (!isRecord(value)) throw new ReferenceAstError(`${claimRoot} must be a mapping`);

  const normalized: Record<string, ReferenceAstNode> = {};
  for (const [key, item] of Object.entries(value)) {
    normalized[key] = toAstNode(item, `${claimRoot}.${key}`, origin, confidence);
  }
  return normalized;
}

function mergeMaps<T>(...maps: readonly Record<string, T>[]): Readonly<Record<string, T>> {
  return sortedRecord(Object.assign({}, ...maps));
}

function flattenClaimLeaves(value: unknown, prefix: string, output: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) => flattenClaimLeaves(item, `${prefix}.${index}`, output));
    return;
  }
  if (isRecord(value)) {
    for (const [key, child] of Object.entries(value)) flattenClaimLeaves(child, `${prefix}.${key}`, output);
    return;
  }
  if (value !== undefined && value !== null && value !== "") output.push(prefix);
}

/** Mirrors the claim-path contract used by `scripts/lib/reference-quality.mjs`. */
export function collectCanonicalClaimPaths(tokens: unknown): readonly string[] {
  if (!isRecord(tokens)) return [];
  const paths: string[] = [];
  for (const namespace of CLAIM_NAMESPACES) {
    if (tokens[namespace] !== undefined) {
      flattenClaimLeaves(tokens[namespace], `tokens.${namespace}`, paths);
    }
  }
  return [...new Set(paths)].sort();
}

function splitDocument(markdown: string): { frontmatter: string; body: string } {
  if (!markdown.startsWith("---\n")) {
    throw new ReferenceAstError("DESIGN.md must start with a YAML frontmatter fence");
  }
  const close = markdown.indexOf("\n---\n", 4);
  if (close < 0) throw new ReferenceAstError("DESIGN.md is missing its closing frontmatter fence");
  return {
    frontmatter: markdown.slice(4, close),
    body: markdown.slice(close + 5),
  };
}

function unquoteScalar(value: string): string {
  const withoutComment = value.replace(/\s+#.*$/, "").trim();
  if (
    (withoutComment.startsWith('"') && withoutComment.endsWith('"')) ||
    (withoutComment.startsWith("'") && withoutComment.endsWith("'"))
  ) {
    return withoutComment.slice(1, -1);
  }
  return withoutComment;
}

function documentId(frontmatter: string): string | null {
  const match = frontmatter.match(/^id:\s*(.+)$/m);
  return match ? unquoteScalar(match[1]) : null;
}

function parseSections(body: string): readonly ReferenceAstSection[] {
  return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map((match, index) => {
    const heading = match[1].replace(/\s+##$/, "").trim();
    const numbered = heading.match(/^(\d+(?:\.\d+)*)\.\s+(.+)$/);
    const number = numbered?.[1] ?? null;
    return {
      key: number ? `section-${number}` : `section-${index + 1}`,
      index,
      number,
      heading,
      title: numbered?.[2]?.trim() ?? heading,
    };
  });
}

function tokenConfidence(source: RefTokens["source"]): ReferenceAstConfidence {
  return source && source !== "prose-derived" ? "high" : "low";
}

function usedFallback(...maps: readonly Readonly<Record<string, ReferenceAstValue<ReferenceAstScalar>>>[]): boolean {
  return maps.some((map) => Object.values(map).some((value) => value.origin === "prose_fallback"));
}

function normalizeTokens(
  tokens: RefTokens | undefined,
  fallback: ReferenceProseFallback | undefined,
  quality: ReferenceQualityEntry,
): ReferenceAst["tokens"] {
  const confidence = tokenConfidence(tokens?.source);
  const fallbackColors = normalizeColorMap(fallback?.colors, "prose_fallback.colors", "prose_fallback", "low");
  const legacyColors = normalizeColorMap(tokens?.color, "tokens.color", "frontmatter", confidence);
  const modernColors = normalizeColorMap(tokens?.colors, "tokens.colors", "frontmatter", confidence);
  const colors = mergeMaps(fallbackColors, legacyColors, modernColors);

  const fallbackFamilies = normalizeStringMap(
    fallback?.fontFamilies,
    "prose_fallback.typography.family",
    "prose_fallback",
    "low",
  );
  const legacyFamilies = normalizeStringMap(tokens?.font, "tokens.font", "frontmatter", confidence);
  const typography = isRecord(tokens?.typography) ? tokens.typography : {};
  if (tokens?.typography !== undefined && !isRecord(tokens.typography)) {
    throw new ReferenceAstError("tokens.typography must be a mapping");
  }
  const modernFamilies = normalizeStringMap(
    typography.family,
    "tokens.typography.family",
    "frontmatter",
    confidence,
  );
  const families = mergeMaps(fallbackFamilies, legacyFamilies, modernFamilies);

  const legacyTiers = normalizeNodeMap(tokens?.text, "tokens.text", "frontmatter", confidence);
  const modernTierSource = Object.fromEntries(Object.entries(typography).filter(([key]) => key !== "family"));
  const modernTiers = normalizeNodeMap(modernTierSource, "tokens.typography", "frontmatter", confidence);
  const tiers = mergeMaps(legacyTiers, modernTiers);

  const fallbackRounded = normalizeRadiusMap(
    fallback?.rounded,
    "prose_fallback.rounded",
    "prose_fallback",
    "low",
  );
  const legacyRounded = normalizeRadiusMap(tokens?.radius, "tokens.radius", "frontmatter", confidence);
  const modernRounded = normalizeRadiusMap(tokens?.rounded, "tokens.rounded", "frontmatter", confidence);
  const rounded = mergeMaps(fallbackRounded, legacyRounded, modernRounded);

  const spacing = sortedRecord(normalizeSpacing(tokens?.spacing, "tokens.spacing", confidence));
  const shadows = sortedRecord(normalizeStringMap(tokens?.shadow, "tokens.shadow", "frontmatter", confidence));
  const components = sortedRecord(normalizeNodeMap(tokens?.components, "tokens.components", "frontmatter", confidence));

  if (quality.status === "verified_v2" && usedFallback(colors, families, rounded)) {
    throw new ReferenceAstError("Verified v2 references cannot depend on prose fallback values");
  }

  return {
    hasStructuredTokens: Boolean(tokens),
    source: tokens?.source ?? null,
    extractedAt: tokens?.extracted ?? null,
    note: tokens?.note ?? null,
    componentsHarvested: tokens?.components_harvested ?? false,
    colors,
    typography: { families, tiers },
    spacing,
    rounded,
    shadows,
    components,
    claimPaths: collectCanonicalClaimPaths(tokens),
  };
}

function normalizeEvidence(
  verification: ReferenceVerificationV2Input | undefined,
  quality: ReferenceQualityEntry,
): ReferenceAstEvidenceGraph | null {
  if (!verification) return null;
  const confidence: ReferenceAstConfidence = quality.status === "verified_v2" ? "high" : "low";
  return {
    schemaVersion: verification.schema,
    checkedAt: verification.checked,
    surfaces: verification.surfaces.map((surface) => ({
      id: surface.id,
      kind: surface.kind ?? "unspecified",
      url: surface.url,
      inspectedAt: surface.inspected,
    })),
    sources: verification.sources.map((source) => ({
      id: source.id,
      kind: source.kind,
      url: source.url,
      capturedAt: source.captured,
    })),
    claims: Object.entries(verification.claims)
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([claimPath, claim]) => ({
        claimPath,
        surfaceId: claim.surface_id,
        sourceId: claim.source_id,
        method: claim.method ?? "unspecified",
        capturedAt: claim.captured,
        confidence,
      })),
    conflictCount: verification.conflicts?.length ?? 0,
  };
}

export function normalizeReference(input: NormalizeReferenceInput): ReferenceAst {
  const { entry, quality, markdown, proseFallback, verificationV2 } = input;
  if (entry.id !== quality.id) {
    throw new ReferenceAstError(`registry id ${entry.id} does not match quality id ${quality.id}`);
  }

  const { frontmatter, body } = splitDocument(markdown);
  const markdownId = documentId(frontmatter);
  if (!markdownId) throw new ReferenceAstError("DESIGN.md frontmatter is missing id");
  if (markdownId !== entry.id) {
    throw new ReferenceAstError(`frontmatter id ${markdownId} does not match registry id ${entry.id}`);
  }

  const tokenSource = entry.tokens?.source ?? null;
  if (quality.tokenSource !== tokenSource) {
    throw new ReferenceAstError(`quality token source for ${entry.id} is out of sync with the registry`);
  }
  if (quality.verifiedAt !== entry.verified) {
    throw new ReferenceAstError(`quality verified date for ${entry.id} is out of sync with the registry`);
  }
  if (!entry.tokens && quality.status === "verified_v2") {
    throw new ReferenceAstError("Verified v2 references must have structured tokens");
  }

  return {
    schemaVersion: REFERENCE_AST_SCHEMA_VERSION,
    identity: {
      id: entry.id,
      name: entry.name,
      displayName: entry.displayName,
      country: entry.country,
      category: entry.category,
      homepage: entry.homepage,
      brandColor: astValue(
        assertColor(entry.primaryColor, "primary_color"),
        "primary_color",
        "frontmatter",
        "high",
      ),
      logo: entry.logo,
      addedAt: entry.added ?? null,
      officialDesignSystem: entry.ds
        ? {
            name: entry.ds.name,
            url: entry.ds.url,
            type: entry.ds.type,
            description: entry.ds.description,
            ogImage: entry.ds.ogImage ?? null,
          }
        : null,
    },
    document: {
      raw: markdown,
      frontmatter,
      body,
      sections: parseSections(body),
    },
    quality: {
      ...quality,
      reasonCodes: [...quality.reasonCodes].sort(),
    },
    tokens: normalizeTokens(entry.tokens, proseFallback, quality),
    evidence: normalizeEvidence(verificationV2, quality),
  };
}

function firstValue<T extends ReferenceAstScalar>(
  map: Readonly<Record<string, ReferenceAstValue<T>>>,
  keys: readonly string[],
): ReferenceAstValue<T> | null {
  for (const key of keys) {
    if (map[key]) return map[key];
  }
  return null;
}

/** UI primary. `identity.brandColor` remains a separate brand-asset fact. */
export function selectPrimaryColor(ast: ReferenceAst): ReferenceAstValue<string> | null {
  return firstValue(ast.tokens.colors, ["primary", "brand"]) ?? ast.identity.brandColor;
}

export function selectCanvas(ast: ReferenceAst): ReferenceAstValue<string> | null {
  return firstValue(ast.tokens.colors, ["canvas", "background", "surface"]);
}

export function selectForeground(ast: ReferenceAst): ReferenceAstValue<string> | null {
  return firstValue(ast.tokens.colors, ["foreground", "heading", "ink", "body"]);
}

export function selectUiFont(ast: ReferenceAst): ReferenceAstValue<string> | null {
  return firstValue(ast.tokens.typography.families, ["ui", "sans", "text", "body", "default", "base"]);
}

export function selectDefaultRadius(ast: ReferenceAst): ReferenceAstValue<string> | null {
  const semantic = firstValue(ast.tokens.rounded, ["base", "md", "sm", "lg", "card", "button"]);
  if (semantic) return semantic;
  const firstNonPill = Object.entries(ast.tokens.rounded).find(([key]) => !["full", "pill", "circle"].includes(key));
  return firstNonPill?.[1] ?? null;
}

export function selectReferenceFoundations(ast: ReferenceAst): ReferenceAstFoundations {
  return {
    brandColor: ast.identity.brandColor,
    primary: selectPrimaryColor(ast),
    canvas: selectCanvas(ast),
    foreground: selectForeground(ast),
    uiFont: selectUiFont(ast),
    monoFont: ast.tokens.typography.families.mono ?? null,
    brandFont: ast.tokens.typography.families.brand
      ?? ast.tokens.typography.families.display
      ?? ast.tokens.typography.families.playful
      ?? null,
    radius: selectDefaultRadius(ast),
  };
}
