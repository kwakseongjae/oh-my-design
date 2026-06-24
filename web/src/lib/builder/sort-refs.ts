/**
 * Reference sort modes for the builder grid. Sorting runs client-side because
 * "Recommended" is locale-aware (KR visitors see KR-leaning, others see
 * global-leaning) and per-locale server caching would fragment the 30s revalidate.
 *
 * The previous server order hard-pinned KR→TW→JP after the HOT 5, which buried
 * globally iconic refs (Apple, Anthropic, Stripe). These comparators replace
 * that with a blended, locale-aware score.
 */

export type SortMode = "recommend" | "popular" | "az" | "new";

export const SORT_MODES: { mode: SortMode; label: string }[] = [
  { mode: "recommend", label: "Recommended" },
  { mode: "popular", label: "Popular" },
  { mode: "az", label: "A–Z" },
  { mode: "new", label: "New" },
];

/** Minimal shape the comparators need — a subset of RefListItem. */
export interface SortableRef {
  name: string;
  countryCode: string;
  hot: boolean;
  pop: number;
  added: string | null;
  quality: number;
}

const DAY = 86_400_000;

/** Linear recency boost: 1.0 today → 0 at 30 days, 0 after. `now` injectable for tests. */
function recencyBoost(added: string | null, now: number): number {
  if (!added) return 0;
  const t = Date.parse(added);
  if (Number.isNaN(t)) return 0;
  const days = (now - t) / DAY;
  if (days <= 0) return 1;
  if (days >= 30) return 0;
  return 1 - days / 30;
}

/**
 * Locale-aware "Recommended" score. Popularity is log-damped against the max so
 * one runaway ref can't dominate. localeBoost gives the visitor's own region a
 * nudge (KR visitor → KR refs; otherwise → the visitor's country) WITHOUT
 * blanket-pinning any country above high-quality/popular global icons.
 */
export function recommendScore(
  r: SortableRef,
  opts: { visitorCountry: string; maxPop: number; now: number },
): number {
  const popNorm = opts.maxPop > 0 ? Math.log1p(r.pop) / Math.log1p(opts.maxPop) : 0;
  const localeBoost = r.countryCode === opts.visitorCountry ? 1 : 0;
  return (
    0.4 * r.quality +
    0.35 * popNorm +
    0.1 * recencyBoost(r.added, opts.now) +
    0.15 * localeBoost
  );
}

/**
 * Return a NEW sorted array for the given mode. HOT refs stay pinned to the very
 * top in `recommend`/`popular` (the curated "5 popular first" the product wants);
 * `az`/`new` ignore HOT so those orderings are pure.
 */
export function sortRefs<T extends SortableRef>(
  refs: T[],
  mode: SortMode,
  visitorCountry: string,
  now: number = Date.now(),
): T[] {
  const out = [...refs];
  const maxPop = Math.max(0, ...refs.map((r) => r.pop));

  if (mode === "az") {
    return out.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (mode === "new") {
    return out.sort(
      (a, b) => (Date.parse(b.added ?? "") || 0) - (Date.parse(a.added ?? "") || 0) || a.name.localeCompare(b.name),
    );
  }
  if (mode === "popular") {
    return out.sort(
      (a, b) =>
        Number(b.hot) - Number(a.hot) ||
        b.pop - a.pop ||
        b.quality - a.quality ||
        a.name.localeCompare(b.name),
    );
  }
  // recommend (default, locale-aware)
  return out.sort((a, b) => {
    if (a.hot !== b.hot) return a.hot ? -1 : 1;
    const sa = recommendScore(a, { visitorCountry, maxPop, now });
    const sb = recommendScore(b, { visitorCountry, maxPop, now });
    return sb - sa || a.name.localeCompare(b.name);
  });
}

/** Best-effort visitor country (2-letter, upper) from a geo hint + browser language. */
export function resolveVisitorCountry(geoCountry?: string | null, lang?: string): string {
  if (geoCountry && /^[A-Za-z]{2}$/.test(geoCountry)) return geoCountry.toUpperCase();
  const l = (lang ?? "").toLowerCase();
  if (l.startsWith("ko")) return "KR";
  if (l.startsWith("ja")) return "JP";
  if (l.startsWith("zh")) return "TW";
  const region = l.split("-")[1];
  if (region && /^[a-z]{2}$/.test(region)) return region.toUpperCase();
  return "US"; // neutral global default → surfaces globally iconic refs
}
