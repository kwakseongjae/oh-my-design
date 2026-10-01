import { NextResponse } from "next/server";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { resolvePrimaryColor } from "@/lib/references/brand-tokens";
import { searchHaystack } from "@/lib/search-aliases";

/**
 * Compact search index for the landing search box, built once at build time.
 *
 * The landing fetches this only when someone focuses the search box, so the
 * home page HTML and JS never carry 521 entries plus the alias table. The
 * haystack is the same one `refMatchesQuery` uses (id + names + native-language
 * aliases), precomputed so the client needs no alias module.
 */
export const dynamic = "force-static";

const STATUS = { verified_v2: "v", partial: "p", legacy_snapshot: "l" } as const;

export function GET() {
  const index = REGISTRY.map((e) => ({
    id: e.id,
    n: e.name,
    d: e.displayName !== e.name ? e.displayName : undefined,
    h: searchHaystack(e),
    p: resolvePrimaryColor(e),
    s: STATUS[REFERENCE_QUALITY_BY_ID[e.id]?.status ?? "legacy_snapshot"],
    c: e.country,
  }));
  return NextResponse.json(index);
}
