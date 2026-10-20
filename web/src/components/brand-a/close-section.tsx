import type { getR10 } from "./copy/r10";
import { CatalogShowcase, localeOfR10 } from "./catalog-showcase";

type Props = {
  r: ReturnType<typeof getR10>;
  f: (s: string) => string;
  archive: string;
};

/**
 * The landing's closing section. Round 11 (docs/REDESIGN_R11_PLAN_2026-10-20.md W5 #14): the CTA
 * band became the catalog showcase (catalog-showcase.tsx): official logos by country, each opening
 * its DESIGN.md page, and the archive button. The band's copy (r.band) stays its heading, intro
 * and button. The export and props are unchanged because landing.tsx composes it; the locale is
 * read back from `r`, the one locale-bound prop.
 */
export function CloseSection({ r, f, archive }: Props) {
  return <CatalogShowcase locale={localeOfR10(r)} h2={f(r.band.h2)} p={f(r.band.p)} cta={r.band.cta} archive={archive} />;
}
