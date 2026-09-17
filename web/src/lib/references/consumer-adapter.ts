import {
  extractCoreV2ReferenceDetail,
  extractLegacyReferenceDetail,
  projectAstReferenceDetail,
  type ReferenceDetail,
  type ReferenceDetailAstContract,
} from "./detail-projection";
import type { LoadedReference } from "./repository.server";
import type { CoreConsumerContract } from "./core-consumer-contract";

export interface ActiveReferenceProjection {
  readonly detail: ReferenceDetail;
  readonly referenceAst: ReferenceDetailAstContract | null;
  readonly model: "core-v2" | `ast-v${number}`;
  readonly parity: "core-v2-active" | "match" | `diff:${number}`;
  readonly coreContract: CoreConsumerContract | null;
  readonly coreStatus: "verified" | "unavailable" | "rejected" | null;
}

function detailFromCoreContract(
  id: string,
  designMd: string,
  contract: CoreConsumerContract,
): ReferenceDetail {
  const portable = extractCoreV2ReferenceDetail(id, designMd);
  const presentationTokenValue = (value: unknown, type: string): string => {
    if (typeof value === "string") return value;
    if (value === null || typeof value !== "object" || Array.isArray(value)) return "";
    const record = value as Record<string, unknown>;
    if (type === "color" && record.colorSpace === "srgb" && Array.isArray(record.components)
      && record.components.length === 3
      && record.components.every((part) => typeof part === "number" && part >= 0 && part <= 1)
      && (record.alpha === undefined || (typeof record.alpha === "number" && record.alpha >= 0 && record.alpha <= 1))) {
      const channel = (part: number) => Math.round(part * 255).toString(16).padStart(2, "0");
      const alpha = typeof record.alpha === "number" && record.alpha < 1 ? channel(record.alpha) : "";
      return `#${(record.components as number[]).map(channel).join("")}${alpha}`;
    }
    if (type === "dimension" && typeof record.value === "number" && Number.isFinite(record.value)
      && typeof record.unit === "string" && /^(?:px|rem|em)$/.test(record.unit)) {
      return `${record.value}${record.unit}`;
    }
    return "";
  };
  const token = (names: readonly string[], type: string): { found: boolean; value: string } => {
    for (const name of names) {
      const match = contract.tokens.find((item) => item.id === name && item.type === type);
      if (match) return { found: true, value: presentationTokenValue(match.value, type) };
    }
    return { found: false, value: "" };
  };
  const normalizeClaimPath = (value: string): string => value.replace(/^\/+/, "").replaceAll("/", ".");
  const explicitlyAbsent = (paths: readonly string[]): boolean => {
    const normalized = paths.map(normalizeClaimPath);
    return contract.explicitAbsences.some((claim) => normalized.includes(normalizeClaimPath(claim.claimPath)));
  };
  type FontRole = CoreConsumerContract["fontRoles"][number];
  const roleByPriority = (ids: readonly string[]): FontRole | undefined => {
    for (const id of ids) {
      const role = contract.fontRoles.find((candidate) => candidate.metadata.id === id);
      if (role) return role;
    }
    return undefined;
  };
  const roleFieldAbsent = (
    field: "family" | "weight",
    selectedRole: FontRole | undefined,
    fallbackIds: readonly string[],
  ): boolean => (
    contract.explicitAbsences.some((claim) => {
      const path = normalizeClaimPath(claim.claimPath);
      if (path === "typography_assets.roles") return true;
      const match = /^typography_assets\.roles\.([^.]+)\.(family|weight)$/.exec(path);
      if (!match || match[2] !== field) return false;
      const selector = match[1];
      if (!/^\d+$/.test(selector)) {
        return selectedRole
          ? selector === selectedRole.metadata.id
          : fallbackIds.includes(selector);
      }
      const roleId = contract.fontRoles[Number(selector)]?.metadata.id;
      return selectedRole
        ? roleId === selectedRole.metadata.id
        : typeof roleId !== "string" || fallbackIds.includes(roleId);
    })
  );
  const resolvedOrPortable = (
    names: readonly string[],
    type: string,
    portableValue: string,
    absencePaths = names.map((name) => `foundations.tokens.${name}`),
  ): string => {
    const typed = token(names, type);
    return typed.found ? typed.value : explicitlyAbsent(absencePaths) ? "" : portableValue;
  };
  const uiRoleIds = ["ui", "ui-sans", "body"];
  const headingRoleIds = ["heading", "display", "title", ...uiRoleIds];
  const uiRole = roleByPriority(uiRoleIds);
  const headingRole = roleByPriority(headingRoleIds);
  const family = uiRole?.metadata.family;
  const weight = headingRole?.metadata.weight;
  const summary = contract.claims.find((claim) => claim.claimPath === "experience.summary")?.value;
  const typedSummary = typeof summary === "string" && !/<!--\s*design-md:|^#{1,6}\s/m.test(summary)
    ? summary
    : "";
  return {
    id,
    designMd,
    primary: resolvedOrPortable(["color.primary"], "color", portable.primary),
    background: resolvedOrPortable(["color.canvas", "color.surface.base"], "color", portable.background),
    foreground: resolvedOrPortable(["color.foreground", "color.text.strong"], "color", portable.foreground),
    fontFamily: typeof family === "string"
      ? family
      : roleFieldAbsent("family", uiRole, uiRoleIds)
        ? ""
        : portable.fontFamily,
    headingWeight: typeof weight === "number" || typeof weight === "string"
      ? String(weight)
      : roleFieldAbsent("weight", headingRole, headingRoleIds)
        ? ""
        : portable.headingWeight,
    radius: resolvedOrPortable(["radius.default"], "dimension", portable.radius),
    mood: typedSummary || portable.mood,
    ...(resolvedOrPortable(["color.accent"], "color", portable.accent ?? "")
      ? { accent: resolvedOrPortable(["color.accent"], "color", portable.accent ?? "") }
      : {}),
    ...(resolvedOrPortable(["color.border"], "color", portable.border ?? "")
      ? { border: resolvedOrPortable(["color.border"], "color", portable.border ?? "") }
      : {}),
  };
}

function rejectedCoreDetail(id: string, designMd: string): ReferenceDetail {
  return {
    id,
    designMd,
    primary: "",
    background: "",
    foreground: "",
    fontFamily: "",
    headingWeight: "",
    radius: "",
    mood: "",
  };
}

/**
 * One active-document boundary for API, Builder, and page consumers.
 * Core bytes are projected directly and never combined with a legacy AST.
 */
export function projectActiveReference(loaded: LoadedReference): ActiveReferenceProjection {
  if (loaded.format === "core-v2") {
    const coreContract = loaded.coreTransport?.status === "verified"
      ? loaded.coreTransport.contract
      : null;
    return {
      detail: coreContract
        ? detailFromCoreContract(loaded.entry.id, loaded.markdown, coreContract)
        : loaded.coreTransport?.status === "rejected"
          ? rejectedCoreDetail(loaded.entry.id, loaded.markdown)
          : extractCoreV2ReferenceDetail(loaded.entry.id, loaded.markdown),
      referenceAst: null,
      coreContract,
      coreStatus: loaded.coreTransport?.status ?? "unavailable",
      model: "core-v2",
      parity: "core-v2-active",
    };
  }
  if (!loaded.ast) throw new Error(`legacy reference ${loaded.entry.id} is missing its AST`);
  const projection = projectAstReferenceDetail(
    loaded.ast,
    extractLegacyReferenceDetail(loaded.entry.id, loaded.markdown),
  );
  return {
    detail: projection.detail,
    referenceAst: projection.contract,
    coreContract: null,
    coreStatus: null,
    model: `ast-v${projection.contract.schemaVersion}`,
    parity: projection.contract.parity.matches
      ? "match"
      : `diff:${projection.contract.parity.differences.length}`,
  };
}
