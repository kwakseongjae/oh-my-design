import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { getLandingData } from "@/lib/landing-a/data.server";
import type { getCopy } from "./copy";
import { GenUI } from "./gen-ui";

type Props = {
  locale: SiteLocale;
  c: ReturnType<typeof getCopy>;
  data: ReturnType<typeof getLandingData>;
  first: "KR" | "JP" | "TW";
};

/**
 * "From DESIGN.md to a screen": the Gen-UI journey. Split out of landing.tsx before round 11 so the
 * section has one owner (docs/REDESIGN_R11_PLAN_2026-10-20.md W2); styles in gen-ui.css.
 */
export function JourneySection({ locale, c, data, first }: Props) {
  return (
    <section className="sq-sec sq-band" id="reference" aria-labelledby="h-ref">
      <div className="sq-wrap">
        <h2 id="h-ref">{c.gen.h2}</h2>
        <p className="sq-intro">{c.gen.intro}</p>
        <GenUI specs={data.gen} locale={locale} t={c.gen} first={first} />
      </div>
    </section>
  );
}
