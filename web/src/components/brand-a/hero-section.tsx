import Link from "next/link";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { getLandingData } from "@/lib/landing-a/data.server";
import type { getCopy } from "./copy";
import type { getR10 } from "./copy/r10";
import { ChatDemo, chatScript } from "./chat-demo";
import { HeroKeys } from "./hero-keys";
import { HeroDropLayer, dropScript } from "./hero-drop";
import { rich } from "./rich";

type Props = {
  locale: SiteLocale;
  c: ReturnType<typeof getCopy>;
  r: ReturnType<typeof getR10>;
  data: ReturnType<typeof getLandingData>;
  f: (s: string) => string;
  archive: string;
};

/**
 * The hero: the headline and one sentence on the left, the actions on the right, then one stage —
 * the 3D logo keycaps beside the illustrative chat. Split out of landing.tsx before round 11 so the
 * hero has one owner (docs/REDESIGN_R11_PLAN_2026-10-20.md W1); styles in hero.css.
 */
export function HeroSection({ locale, c, r, data, f, archive }: Props) {
  return (
    <section className="sq-wrap sq-hero" aria-labelledby="h-hero">
      <div className="sq-hero-top">
        <div className="sq-hero-copy">
          <h1 id="h-hero">{rich(c.hero.h1)}</h1>
          <p className="sq-lede">{rich(f(c.hero.lede))}</p>
        </div>
        <div className="sq-hero-acts">
          <Link className="sq-cta" href={archive} prefetch={false}>{c.hero.browse}</Link>
          <a className="sq-cta-q" href="#use">{r.hero.install}</a>
        </div>
      </div>
      <div className="sq-stage">
        <div className="sq-stage-caps">
          {/* 3D host: the poster until three.js mounts after idle (hero-keys.tsx); the canvas, the
              2D drop layer and the hidden link list all share this one box, which is the box the
              posters are rendered from (scripts/hero-posters.mjs clips to #k3). */}
          <div className="sq-k3 sq-poster" id="k3" data-set={locale === "ja" || locale === "zh-tw" ? locale : "default"} aria-hidden="true" suppressHydrationWarning>
            <HeroDropLayer locale={locale} />
          </div>
          {/* pre-hydration: arriving from the language picker, the caps new here start falling as
              2D sprites at first paint; the 3D scene takes over once they settle (hero-drop.tsx) */}
          <script dangerouslySetInnerHTML={{ __html: dropScript(locale) }} />
          <HeroKeys caps={data.hero} label={c.kb.label} locale={locale} />
        </div>
        <div className="sq-stage-chat">
          <ChatDemo t={r.chat} />
          <script dangerouslySetInnerHTML={{ __html: chatScript }} />
        </div>
      </div>
      <p className="sq-stage-note">{r.chat.note}</p>
    </section>
  );
}
