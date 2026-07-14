import type { ReferenceDetailAstContract } from "./detail-projection";

export interface SectionProvenance {
  readonly status: ReferenceDetailAstContract["quality"]["status"];
  readonly checkedAt: string;
  readonly claimCount: number;
  readonly sourceCount: number;
  readonly confidence: "high" | "low";
}

export function getSectionProvenance(
  contract: ReferenceDetailAstContract | undefined,
  prefixes: readonly string[],
): SectionProvenance | null {
  const evidence = contract?.evidence;
  if (!contract || !evidence) return null;
  const claims = evidence.claims.filter((claim) =>
    prefixes.some((prefix) => claim.claimPath.startsWith(prefix)),
  );
  if (claims.length === 0) return null;
  return {
    status: contract.quality.status,
    checkedAt: evidence.checkedAt,
    claimCount: claims.length,
    sourceCount: new Set(claims.map((claim) => claim.sourceId)).size,
    confidence: claims.every((claim) => claim.confidence === "high") ? "high" : "low",
  };
}
