import type { SiteLocale } from "@/lib/i18n/site-locales";
import { getSubstitutes } from "@/lib/fonts/substitutes";
import type { getLandingData } from "@/lib/landing-a/data.server";
import { GEN_UI_PROP, GEN_UI_SCREEN } from "@/lib/landing-a/picks";
import { getProp } from "@/lib/landing-a/props";
import type { getCopy } from "./copy";
import { getJourneyCopy } from "./copy/r11-journey";
import { GenUI, type GenExtra } from "./gen-ui";
import { faceFor } from "./journey/face";
import { notoSansJP, pretendard } from "./journey/faces";
import { planScreen } from "./journey/model";

type Props = {
  locale: SiteLocale;
  c: ReturnType<typeof getCopy>;
  data: ReturnType<typeof getLandingData>;
  first: "KR" | "JP" | "TW";
};

/**
 * "From DESIGN.md to a screen": the Gen-UI journey (docs/REDESIGN_R11_PLAN_2026-10-20.md W2). Server
 * side of round 11: each company's sample-screen plan (claimed tokens only), the face its screen is
 * set in for this page's language, and the OmD prop beside it, handed to the client island as plain
 * data. The two open brand faces' CSS variables sit on the section, so their files are fetched only
 * when a screen sets text in them. Styles in gen-ui.css and journey/screens.css.
 */
export function JourneySection({ locale, c, data, first }: Props) {
  const extras: Record<string, GenExtra> = {};
  for (const s of data.gen) {
    const kind = (GEN_UI_SCREEN as Record<string, (typeof GEN_UI_SCREEN)[keyof typeof GEN_UI_SCREEN] | undefined>)[s.id];
    if (!kind) continue;
    const propId = (GEN_UI_PROP as Record<string, (typeof GEN_UI_PROP)[keyof typeof GEN_UI_PROP] | undefined>)[s.id];
    extras[s.id] = { plan: planScreen(kind, s), face: faceFor(s, locale, getSubstitutes(s.id)), prop: (propId && getProp(propId)) || null };
  }
  return (
    <section className={`sq-sec sq-band ${pretendard.variable} ${notoSansJP.variable}`} id="reference" aria-labelledby="h-ref">
      <div className="sq-wrap">
        <h2 id="h-ref">{c.gen.h2}</h2>
        <p className="sq-intro">{c.gen.intro}</p>
        <GenUI specs={data.gen} extras={extras} locale={locale} t={c.gen} j={getJourneyCopy(locale)} first={first} />
      </div>
    </section>
  );
}
