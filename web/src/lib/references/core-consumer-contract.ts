import { createHash } from "node:crypto";
import { existsSync, lstatSync, readFileSync } from "node:fs";
import { join } from "node:path";

const VERSION = "2.0.0";
const ADOPTION_KIND = "design-md-core-adoption-receipt";
const SHA256 = /^[a-f0-9]{64}$/;
const SOURCE_CLASSES = new Set([
  "prompt-fact",
  "repository-fact",
  "verified-reference-inspiration",
  "agent-proposed-greenfield-decision",
  "unresolved",
]);

type JsonRecord = Record<string, unknown>;

export interface CoreConsumerPackageBytes {
  readonly activeDesignMd: string;
  readonly graphBytes: string;
  readonly provenanceBytes: string;
  readonly coverageBytes: string;
  readonly manifestBytes: string;
  readonly adoptionReceiptBytes: string;
}

export interface CoreCanonicalPackage {
  readonly designMd: string;
  readonly graph: JsonRecord;
  readonly graphBytes: string;
  readonly provenance: JsonRecord;
  readonly provenanceBytes: string;
  readonly coverage: JsonRecord;
  readonly coverageBytes: string;
  readonly manifest: JsonRecord;
  readonly manifestBytes: string;
  readonly adoptionReceipt: JsonRecord;
  readonly adoptionReceiptBytes: string;
}

export type CoreCanonicalPackageVerifier = (pkg: CoreCanonicalPackage) => {
  readonly valid: boolean;
  readonly errors: readonly string[];
};

export interface CoreConsumerClaim {
  readonly claimPath: string;
  readonly sourceClass: string;
  readonly value?: unknown;
  readonly evidence: readonly string[];
}

export interface CoreConsumerToken {
  readonly id: string;
  readonly claimPath: string;
  readonly type: string;
  readonly value: unknown;
  readonly description?: string;
  readonly sourceClass: string;
  readonly evidence: readonly string[];
}

export interface CoreConsumerFontRole {
  readonly metadata: JsonRecord;
  readonly claimPath: "typography_assets.roles";
  readonly sourceClass: string;
  readonly evidence: readonly string[];
  readonly runtimeAvailability: {
    readonly status: "unverified";
    readonly source: null;
  };
}

export interface CoreConsumerContract {
  readonly contractVersion: 1;
  readonly authority: {
    readonly status: "adopted";
    readonly designMdSha256: string;
    readonly graphSha256: string;
    readonly provenanceSha256: string;
    readonly coverageSha256: string;
    readonly manifestSha256: string;
    readonly adoptionReceiptSha256: string;
  };
  readonly identity: JsonRecord;
  readonly claims: readonly CoreConsumerClaim[];
  readonly explicitAbsences: readonly CoreConsumerClaim[];
  readonly tokens: readonly CoreConsumerToken[];
  readonly tokenAbsences: readonly CoreConsumerClaim[];
  readonly fontRoles: readonly CoreConsumerFontRole[];
  readonly quality: {
    readonly status: "covered" | "incomplete";
    readonly groups: JsonRecord;
    readonly checks: JsonRecord;
  };
  readonly components: {
    readonly items: readonly unknown[];
    readonly coverage: unknown;
    readonly checkPass: boolean | null;
    readonly harvestStatus: "unreported";
  };
}

export type CoreConsumerContractAdmission =
  | { readonly status: "verified"; readonly contract: CoreConsumerContract }
  | { readonly status: "unavailable"; readonly missing: readonly string[] }
  | { readonly status: "rejected"; readonly reasons: readonly string[] };

function isRecord(value: unknown): value is JsonRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function parseObject(bytes: string, label: string, reasons: string[]): JsonRecord | null {
  try {
    const value: unknown = JSON.parse(bytes);
    if (!isRecord(value)) throw new Error("root must be an object");
    return value;
  } catch (error) {
    reasons.push(`${label}: ${error instanceof Error ? error.message : String(error)}`);
    return null;
  }
}

function nested(record: JsonRecord | null, ...keys: string[]): unknown {
  let value: unknown = record;
  for (const key of keys) {
    if (!isRecord(value) || !Object.hasOwn(value, key)) return undefined;
    value = value[key];
  }
  return value;
}

function expectEqual(actual: unknown, expected: unknown, label: string, reasons: string[]): void {
  if (actual !== expected) reasons.push(`${label} mismatch`);
}

function expectSha(value: unknown, label: string, reasons: string[]): void {
  if (typeof value !== "string" || !SHA256.test(value)) reasons.push(`${label} is not a SHA-256 value`);
}

function decodePointerSegment(value: string): string {
  return value.replace(/~1/g, "/").replace(/~0/g, "~");
}

interface ResolvedPath {
  readonly valid: boolean;
  readonly exists: boolean;
  readonly segments: readonly string[];
  readonly value?: unknown;
}

function walkDotted(node: unknown, parts: readonly string[], offset: number, segments: readonly string[]): ResolvedPath[] {
  if (offset >= parts.length) return [{ valid: true, exists: true, segments, value: node }];
  if (Array.isArray(node)) {
    const part = parts[offset];
    if (!/^(?:0|[1-9]\d*)$/.test(part)) return [];
    const index = Number(part);
    if (index >= node.length) {
      return offset === parts.length - 1
        ? [{ valid: true, exists: false, segments: [...segments, part] }]
        : [];
    }
    return walkDotted(node[index], parts, offset + 1, [...segments, part]);
  }
  if (!isRecord(node)) return [];
  const matches: ResolvedPath[] = [];
  for (let end = offset + 1; end <= parts.length; end += 1) {
    const key = parts.slice(offset, end).join(".");
    if (Object.hasOwn(node, key)) matches.push(...walkDotted(node[key], parts, end, [...segments, key]));
  }
  return matches.length
    ? matches
    : [{ valid: true, exists: false, segments: [...segments, parts.slice(offset).join(".")] }];
}

function resolveClaimPath(graph: JsonRecord, rawPath: string): ResolvedPath {
  if (!rawPath.trim()) return { valid: false, exists: false, segments: [] };
  if (rawPath.startsWith("/")) {
    if (rawPath === "/" || rawPath.endsWith("/") || /~(?![01])/u.test(rawPath)) {
      return { valid: false, exists: false, segments: [] };
    }
    const segments = rawPath.slice(1).split("/").map(decodePointerSegment);
    let node: unknown = graph;
    for (let index = 0; index < segments.length; index += 1) {
      const segment = segments[index];
      if (Array.isArray(node) && /^(?:0|[1-9]\d*)$/.test(segment)) node = node[Number(segment)];
      else if (isRecord(node) && Object.hasOwn(node, segment)) node = node[segment];
      else return index === segments.length - 1
        ? { valid: true, exists: false, segments }
        : { valid: false, exists: false, segments };
    }
    return { valid: true, exists: true, segments, value: node };
  }
  const candidates = walkDotted(graph, rawPath.split("."), 0, []);
  const unique = new Map(candidates.map((candidate) => [JSON.stringify(candidate.segments), candidate]));
  return unique.size === 1
    ? [...unique.values()][0]
    : { valid: false, exists: false, segments: [] };
}

function sameValue(left: unknown, right: unknown): boolean {
  return JSON.stringify(left) === JSON.stringify(right);
}

function pathKey(segments: readonly string[]): string {
  return JSON.stringify(segments);
}

function validateTransaction(
  input: CoreConsumerPackageBytes,
  graph: JsonRecord,
  provenance: JsonRecord,
  coverage: JsonRecord,
  manifest: JsonRecord,
  receipt: JsonRecord,
  reasons: string[],
): void {
  const hashes = {
    design: sha256(input.activeDesignMd),
    graph: sha256(input.graphBytes),
    provenance: sha256(input.provenanceBytes),
    coverage: sha256(input.coverageBytes),
    manifest: sha256(input.manifestBytes),
  };

  for (const [label, artifact] of [["graph", graph], ["provenance", provenance], ["coverage", coverage]] as const) {
    expectEqual(artifact.schema_version, VERSION, `${label}.schema_version`, reasons);
  }
  expectEqual(manifest.schema_version, VERSION, "manifest.schema_version", reasons);
  expectEqual(manifest.format, "design-md-core", "manifest.format", reasons);
  expectEqual(manifest.profile, "portable-core", "manifest.profile", reasons);
  expectEqual(nested(manifest, "authority", "canonical"), "system-graph", "manifest.authority.canonical", reasons);
  expectEqual(nested(manifest, "authority", "graph_path"), ".omd/system/graph.json", "manifest graph path", reasons);
  expectEqual(nested(manifest, "authority", "projection_path"), "DESIGN.md", "manifest projection path", reasons);

  expectEqual(receipt.schema_version, VERSION, "adoption receipt schema_version", reasons);
  expectEqual(receipt.kind, ADOPTION_KIND, "adoption receipt kind", reasons);
  expectEqual(receipt.status, "adopted", "adoption receipt status", reasons);
  expectEqual(receipt.authority, "system-graph", "adoption receipt authority", reasons);
  expectEqual(nested(receipt, "review", "authority_transition_approved"), true, "adoption review approval", reasons);
  expectSha(nested(receipt, "review", "receipt_sha256"), "adoption review receipt_sha256", reasons);
  expectEqual(nested(receipt, "review", "reviewer", "role"), "project-owner", "adoption reviewer role", reasons);
  const reviewer = nested(receipt, "review", "reviewer", "identifier");
  if (typeof reviewer !== "string" || !reviewer.trim()) reasons.push("adoption reviewer identifier is missing");

  const bindings = [
    ["design_md", "DESIGN.md", hashes.design],
    ["graph", ".omd/system/graph.json", hashes.graph],
    ["provenance", ".omd/system/provenance.json", hashes.provenance],
    ["coverage", ".omd/system/coverage.json", hashes.coverage],
  ] as const;
  for (const [key, artifactPath, hash] of bindings) {
    expectEqual(nested(manifest, "artifacts", key, "path"), artifactPath, `manifest ${key} path`, reasons);
    expectEqual(nested(manifest, "artifacts", key, "sha256"), hash, `manifest ${key} hash`, reasons);
    expectEqual(nested(receipt, "outputs", key, "path"), artifactPath, `receipt ${key} path`, reasons);
    expectEqual(nested(receipt, "outputs", key, "sha256"), hash, `receipt ${key} hash`, reasons);
  }
  expectEqual(nested(receipt, "outputs", "manifest", "path"), ".omd/system/manifest.json", "receipt manifest path", reasons);
  expectEqual(nested(receipt, "outputs", "manifest", "sha256"), hashes.manifest, "receipt manifest hash", reasons);
  expectEqual(nested(graph, "projection", "path"), "DESIGN.md", "graph projection path", reasons);
  expectEqual(nested(graph, "projection", "sha256"), hashes.design, "graph projection hash", reasons);
  expectEqual(provenance.design_md_sha256, hashes.design, "provenance DESIGN.md hash", reasons);
  expectEqual(provenance.graph_sha256, hashes.graph, "provenance graph hash", reasons);
  expectEqual(coverage.design_md_sha256, hashes.design, "coverage DESIGN.md hash", reasons);
  expectEqual(coverage.graph_sha256, hashes.graph, "coverage graph hash", reasons);
}

function collectClaims(graph: JsonRecord, provenance: JsonRecord, reasons: string[]): {
  claims: CoreConsumerClaim[];
  bySegments: Map<string, CoreConsumerClaim>;
} {
  const decisions = provenance.decisions;
  if (!Array.isArray(decisions) || decisions.length === 0) {
    reasons.push("provenance decisions are missing");
    return { claims: [], bySegments: new Map() };
  }
  const paths = new Set<string>();
  const claims: CoreConsumerClaim[] = [];
  const bySegments = new Map<string, CoreConsumerClaim>();
  for (const [index, raw] of decisions.entries()) {
    if (!isRecord(raw) || typeof raw.path !== "string" || !raw.path.trim()) {
      reasons.push(`provenance decision ${index} has no claim path`);
      continue;
    }
    if (paths.has(raw.path)) {
      reasons.push(`duplicate provenance claim path: ${raw.path}`);
      continue;
    }
    paths.add(raw.path);
    if (typeof raw.source_class !== "string" || !SOURCE_CLASSES.has(raw.source_class)) {
      reasons.push(`unknown provenance source class at ${raw.path}`);
      continue;
    }
    const resolved = resolveClaimPath(graph, raw.path);
    if (!resolved.valid) {
      reasons.push(`unresolvable or ambiguous provenance claim path: ${raw.path}`);
      continue;
    }
    const evidence = Array.isArray(raw.evidence)
      ? raw.evidence.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
      : [];
    if (raw.source_class === "unresolved") {
      if (resolved.exists || Object.hasOwn(raw, "value")) {
        reasons.push(`unresolved claim carries or resolves to a value: ${raw.path}`);
        continue;
      }
    } else {
      if (!resolved.exists) {
        reasons.push(`resolved claim path is absent from graph: ${raw.path}`);
        continue;
      }
      if (evidence.length === 0) {
        reasons.push(`resolved claim has no evidence: ${raw.path}`);
        continue;
      }
      if (Object.hasOwn(raw, "value") && !sameValue(raw.value, resolved.value)) {
        reasons.push(`claim value differs from graph: ${raw.path}`);
        continue;
      }
    }
    const claim: CoreConsumerClaim = {
      claimPath: raw.path,
      sourceClass: raw.source_class,
      ...(raw.source_class === "unresolved" ? {} : { value: resolved.value }),
      evidence,
    };
    claims.push(claim);
    bySegments.set(pathKey(resolved.segments), claim);
  }
  return { claims, bySegments };
}

function buildContract(
  input: CoreConsumerPackageBytes,
  graph: JsonRecord,
  provenance: JsonRecord,
  coverage: JsonRecord,
  manifest: JsonRecord,
  receipt: JsonRecord,
  reasons: string[],
): CoreConsumerContract | null {
  validateTransaction(input, graph, provenance, coverage, manifest, receipt, reasons);
  const { claims, bySegments } = collectClaims(graph, provenance, reasons);
  const tokenMap = nested(graph, "foundations", "tokens");
  const tokens: CoreConsumerToken[] = [];
  if (tokenMap !== undefined && !isRecord(tokenMap)) reasons.push("graph foundations.tokens is not an object");
  if (isRecord(tokenMap)) {
    for (const [id, rawToken] of Object.entries(tokenMap)) {
      const claimPath = `foundations.tokens.${id}`;
      const claim = bySegments.get(pathKey(["foundations", "tokens", id]));
      if (!isRecord(rawToken) || typeof rawToken.$type !== "string" || !Object.hasOwn(rawToken, "$value")) {
        reasons.push(`invalid graph token: ${id}`);
      } else if (!claim || claim.sourceClass === "unresolved") {
        // The adopted graph may contain a value that this reference-facing
        // provenance does not bind. Omit that token at its own boundary.
        continue;
      } else {
        tokens.push({
          id,
          claimPath: claim.claimPath,
          type: rawToken.$type,
          value: rawToken.$value,
          ...(typeof rawToken.$description === "string" ? { description: rawToken.$description } : {}),
          sourceClass: claim.sourceClass,
          evidence: claim.evidence,
        });
      }
    }
  }

  const roles = nested(graph, "typography_assets", "roles");
  const roleClaim = bySegments.get(pathKey(["typography_assets", "roles"]));
  const fontRoles: CoreConsumerFontRole[] = [];
  if (roles !== undefined && !Array.isArray(roles)) reasons.push("graph typography_assets.roles is not an array");
  if (Array.isArray(roles) && roles.length > 0) {
    if (roleClaim && roleClaim.sourceClass !== "unresolved") {
      for (const role of roles) {
        if (!isRecord(role) || typeof role.id !== "string" || typeof role.usage !== "string") {
          reasons.push("graph contains an invalid font role");
          continue;
        }
        fontRoles.push({
          metadata: role,
          claimPath: "typography_assets.roles",
          sourceClass: roleClaim.sourceClass,
          evidence: roleClaim.evidence,
          runtimeAvailability: { status: "unverified", source: null },
        });
      }
    }
  }

  const componentItems = nested(graph, "components_states", "components");
  const components = Array.isArray(componentItems) ? componentItems : [];
  if (componentItems !== undefined && !Array.isArray(componentItems)) reasons.push("graph components_states.components is not an array");
  const componentClaim = bySegments.get(pathKey(["components_states", "components"]));
  const admittedComponents = componentClaim && componentClaim.sourceClass !== "unresolved"
    ? components
    : [];

  const groups = coverage.groups;
  const checks = coverage.checks;
  if (!isRecord(groups)) reasons.push("coverage groups are missing");
  if (!isRecord(checks)) reasons.push("coverage checks are missing");
  const allChecksPass = isRecord(checks)
    && Object.values(checks).length > 0
    && Object.values(checks).every((check) => isRecord(check) && check.pass === true);

  if (reasons.length) return null;
  const explicitAbsences = claims.filter((claim) => claim.sourceClass === "unresolved");
  return {
    contractVersion: 1,
    authority: {
      status: "adopted",
      designMdSha256: sha256(input.activeDesignMd),
      graphSha256: sha256(input.graphBytes),
      provenanceSha256: sha256(input.provenanceBytes),
      coverageSha256: sha256(input.coverageBytes),
      manifestSha256: sha256(input.manifestBytes),
      adoptionReceiptSha256: sha256(input.adoptionReceiptBytes),
    },
    identity: isRecord(graph.identity) ? graph.identity : {},
    claims,
    explicitAbsences,
    tokens,
    tokenAbsences: explicitAbsences.filter((claim) =>
      claim.claimPath.startsWith("foundations.tokens.") || claim.claimPath.startsWith("/foundations/tokens/"),
    ),
    fontRoles,
    quality: {
      status: allChecksPass ? "covered" : "incomplete",
      groups: groups as JsonRecord,
      checks: checks as JsonRecord,
    },
    components: {
      items: admittedComponents,
      coverage: (groups as JsonRecord)["components-states"],
      checkPass: isRecord((checks as JsonRecord).component_state_coverage)
        && typeof ((checks as JsonRecord).component_state_coverage as JsonRecord).pass === "boolean"
        ? ((checks as JsonRecord).component_state_coverage as JsonRecord).pass as boolean
        : null,
      harvestStatus: "unreported",
    },
  };
}

export function admitCoreConsumerContract(
  input: CoreConsumerPackageBytes,
  verifyCanonicalPackage: CoreCanonicalPackageVerifier,
): CoreConsumerContractAdmission {
  const reasons: string[] = [];
  const graph = parseObject(input.graphBytes, "graph", reasons);
  const provenance = parseObject(input.provenanceBytes, "provenance", reasons);
  const coverage = parseObject(input.coverageBytes, "coverage", reasons);
  const manifest = parseObject(input.manifestBytes, "manifest", reasons);
  const receipt = parseObject(input.adoptionReceiptBytes, "adoption receipt", reasons);
  if (!graph || !provenance || !coverage || !manifest || !receipt) return { status: "rejected", reasons };
  try {
    const canonical = verifyCanonicalPackage({
      designMd: input.activeDesignMd,
      graph,
      graphBytes: input.graphBytes,
      provenance,
      provenanceBytes: input.provenanceBytes,
      coverage,
      coverageBytes: input.coverageBytes,
      manifest,
      manifestBytes: input.manifestBytes,
      adoptionReceipt: receipt,
      adoptionReceiptBytes: input.adoptionReceiptBytes,
    });
    if (!canonical.valid) reasons.push(...canonical.errors.map((error) => `canonical package: ${error}`));
  } catch (error) {
    reasons.push(`canonical package verifier failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  const contract = buildContract(input, graph, provenance, coverage, manifest, receipt, reasons);
  return contract ? { status: "verified", contract } : { status: "rejected", reasons };
}

const PACKAGE_ARTIFACTS = {
  graphBytes: ".omd/system/graph.json",
  provenanceBytes: ".omd/system/provenance.json",
  coverageBytes: ".omd/system/coverage.json",
  manifestBytes: ".omd/system/manifest.json",
  adoptionReceiptBytes: ".omd/system/adoption-receipt.json",
} as const;

export function loadCoreConsumerContract(
  packageRoot: string,
  activeDesignMd: string,
  verifyCanonicalPackage: CoreCanonicalPackageVerifier,
): CoreConsumerContractAdmission {
  const entries = Object.entries(PACKAGE_ARTIFACTS) as Array<[
    keyof Omit<CoreConsumerPackageBytes, "activeDesignMd">,
    string,
  ]>;
  const missing = entries
    .filter(([, relative]) => !existsSync(join(packageRoot, relative)))
    .map(([, relative]) => relative);
  if (missing.length === entries.length) return { status: "unavailable", missing };
  if (missing.length) return { status: "rejected", reasons: [`partial adopted transaction; missing: ${missing.join(", ")}`] };
  const unsafe = entries
    .map(([, relative]) => relative)
    .filter((relative) => {
      const stat = lstatSync(join(packageRoot, relative));
      return stat.isSymbolicLink() || !stat.isFile();
    });
  if (unsafe.length) return { status: "rejected", reasons: [`transaction artifacts must be regular non-symlink files: ${unsafe.join(", ")}`] };
  const bytes = Object.fromEntries(entries.map(([key, relative]) => [key, readFileSync(join(packageRoot, relative), "utf8")])) as unknown as Omit<CoreConsumerPackageBytes, "activeDesignMd">;
  return admitCoreConsumerContract({ activeDesignMd, ...bytes }, verifyCanonicalPackage);
}
