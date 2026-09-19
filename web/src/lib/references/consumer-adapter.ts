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
  // `h1`/`h2` sit between the semantic heading ids and the UI fallback: a
  // reference that names its heading role wins, but one that only declares a
  // numbered type scale — which is how the catalogue actually writes them —
  // still yields a heading weight instead of falling through to body text.
  const headingRoleIds = ["heading", "display", "title", "h1", "h2", ...uiRoleIds];
  // Same defect as the family, one role over: references qualify their heading
  // ids — krds writes `heading-xlarge` and `display-large`, never bare
  // `heading` — so the exact pass finds nothing and a weight that is sitting in
  // the graph on seven roles projects as "".
  //
  // The family's "exactly one declares it" fallback cannot be reused here:
  // weight is declared on every role, so uniqueness says nothing. What does
  // carry over is the priority list itself. For each id in priority order, an
  // exact match wins; failing that, the shortest id of that shape, ties broken
  // alphabetically. "Shortest" picks the least-qualified variant, which is the
  // general one — `heading` over `heading-large` over `heading-xlarge` — and
  // the tie-break keeps the choice independent of document order.
  const roleByShape = (ids: readonly string[]): FontRole | undefined => {
    for (const id of ids) {
      const exact = contract.fontRoles.find((candidate) => candidate.metadata.id === id);
      if (exact) return exact;
      const shape = new RegExp(`(^|[-_])${id}([-_]|$)`, "i");
      const shaped = contract.fontRoles
        .filter((candidate) => shape.test(String(candidate.metadata.id)))
        .sort((a, b) => String(a.metadata.id).length - String(b.metadata.id).length
          || String(a.metadata.id).localeCompare(String(b.metadata.id)));
      if (shaped.length > 0) return shaped[0];
    }
    return undefined;
  };
  const uiRole = roleByPriority(uiRoleIds);
  const headingRole = roleByShape(headingRoleIds);
  // A reference that declares one family and names its body role with a
  // qualifier — `body-large` (krds), `public-body` (framer), `consumer-body`
  // (catchtable) — has no id in `uiRoleIds`, so the exact match above finds
  // nothing and the family projects as "". Sixteen of the catalogue's 276
  // declared families reached this adapter that way.
  //
  // This is not substring matching, which would leave `body`, `body-large`,
  // `body-small` and `body-xsmall` competing with no principled winner. It is
  // narrower: when exactly one role in the whole contract declares a family,
  // that is the family the reference declared, whatever the role is called. The
  // migrator attaches a declared family to a single role, so "exactly one" is
  // the normal shape rather than a coincidence, and more than one leaves this
  // untouched.
  const soleFamilyRole = uiRole ?? (() => {
    const withFamily = contract.fontRoles.filter((role) => typeof role.metadata.family === "string");
    return withFamily.length === 1 ? withFamily[0] : undefined;
  })();
  const family = soleFamilyRole?.metadata.family;
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
      : roleFieldAbsent("family", soleFamilyRole, uiRoleIds)
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
