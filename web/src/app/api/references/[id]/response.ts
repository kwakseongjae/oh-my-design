import type { ActiveReferenceProjection } from "@/lib/references/consumer-adapter";

export function referenceResponseBody(projection: ActiveReferenceProjection) {
  return {
    ...projection.detail,
    ...(projection.referenceAst ? { referenceAst: projection.referenceAst } : {}),
    ...(projection.coreContract ? { coreContract: projection.coreContract } : {}),
    ...(projection.coreStatus ? { referenceFormat: "core-v2" as const, coreStatus: projection.coreStatus } : {}),
  };
}
