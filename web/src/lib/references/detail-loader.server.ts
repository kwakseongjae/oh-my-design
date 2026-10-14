/**
 * Server loader for the item page, shared by /design-systems/<id> and
 * /ko/design-systems/<id> so both read the same canonical file through the same
 * projection. The Korean page shows the identical DESIGN.md (byte for byte) and
 * the identical verified values; only the chrome around them differs.
 *
 * Moved out of app/(en)/design-systems/[id]/page.tsx unchanged (2026-10-14).
 */

import { loadReference } from "@/lib/references/repository.server";
import { projectActiveReference } from "@/lib/references/consumer-adapter";
import { capData } from "@/lib/landing-a/data.server";

export function loadDetail(id: string) {
  const loaded = loadReference(id);
  if (!loaded) return null;
  const projection = projectActiveReference(loaded);
  return {
    ...projection.detail,
    ...(projection.referenceAst ? { referenceAst: projection.referenceAst } : {}),
    ...((basis) => (basis ? { coreFontBasis: basis } : {}))(coreFontBasis(loaded)),
    referenceQuality: loaded.quality,
    entry: loaded.entry,
  };
}

export type LoadedDetail = NonNullable<ReturnType<typeof loadDetail>>;

/**
 * Where a Core v2 reference's UI font comes from.
 *
 * The evidence snapshot reads the font's provenance off `referenceAst`, which
 * `repository.server.ts` leaves null for a Core canonical — it serves the package
 * instead — so krds and serendie showed "UI font basis unresolved" while their
 * Fonts section rendered Pretendard GOV and Roboto correctly. The basis was
 * missing, not the font.
 *
 * It is not missing from the data. The projector attaches the declared family to
 * the body-shaped type role, so the Core contract carries it as a font role with
 * a `sourceClass` and evidence of its own. That is real provenance, read from the
 * package rather than substituted for it.
 */
function coreFontBasis(loaded: ReturnType<typeof loadReference>) {
  const transport = loaded?.coreTransport;
  if (!transport || transport.status !== "verified") return null;
  const role = transport.contract.fontRoles.find((entry) => typeof entry.metadata?.family === "string");
  if (!role) return null;
  return { family: String(role.metadata.family), sourceClass: role.sourceClass };
}

/** The item page's keycap: same resolver as the landing, so only a verified
 *  reference's claimed colour/radius/weight paints it (else a blank cap). */
export function keycapFace(id: string) {
  const c = capData(id);
  return c ? { g: c.g, gLang: c.gLang, c: c.c, hex: c.hex, rv: c.rv, w: c.w } : null;
}
