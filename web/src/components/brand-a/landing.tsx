import Link from "next/link";
import { preload } from "react-dom";
import { getLandingData } from "@/lib/landing-a/data.server";
import { getRepoStars } from "@/lib/github-stars.server";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { fmt, getCopy } from "./copy";
import { getR10 } from "./copy/r10";
import { ChatDemo, chatScript } from "./chat-demo";
import { CliSection } from "./cli-section";
import { Faq } from "./faq";
import { GenUI } from "./gen-ui";
import { HeroKeys } from "./hero-keys";
import { HeroDropLayer, dropScript } from "./hero-drop";
import { plain, rich } from "./rich";
import { SiteFooterA } from "./site-footer";
import { GITHUB_URL, SiteHeaderA } from "./site-header";
import "./landing.css";

const WANTED_LATIN = "/fonts/wanted-sans/WantedSansVariable.split.90.woff2";
const GH_SKILLS = `${GITHUB_URL}/tree/main/skills`;
const GH_ISSUES = `${GITHUB_URL}/issues`;

/**
 * The landing, shared by /, /ko, /ja and /zh-tw. Round 10 (owner, 2026-10-16: "go with the
 * recommendation", docs/research/2026-10-17-direction/DIRECTIONS.md): B's structure in Iris with
 * A's restraint. The hero is the headline, one sentence and two actions over one stage: the 3D
 * logo keycaps on the left (poster until three.js mounts; the 2D drop on a language switch) and
 * an illustrative chat on the right (prompt → tool trace → streaming Toss screen), so "this is
 * how you use it" is on the first screen. Below: the DESIGN.md → screen journey (the proof), the
 * oh-my-design-cli steps beside the real transcript (the one dark field and the one copy
 * command), the FAQ (categories, search, accordion) and a closing band. Server component: every
 * number comes from generated data at build time; the keycaps, chat, steps, FAQ and copy
 * buttons hydrate as islands.
 */
export async function LandingA({ locale }: { locale: SiteLocale }) {
  const c = getCopy(locale);
  const r = getR10(locale);
  const stars = await getRepoStars();
  // the headline face, preloaded where it sets the headline (en, ko): Wanted Sans' Basic Latin
  // slice (44 KB, styles/wanted-sans-latin.css). ja / zh-tw set theirs in Noto (layout, no preload).
  if (locale === "en" || locale === "ko") preload(WANTED_LATIN, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  // the hero poster is a CSS background (found late): fetch this locale's one with the HTML
  const set = locale === "ja" || locale === "zh-tw" ? `-${locale}` : "";
  preload(`/brand-a/hero-logos${set}-light.webp`, { as: "image", fetchPriority: "high", media: "(min-width: 901px)", imageSrcSet: `/brand-a/hero-logos${set}-light.webp 1x, /brand-a/hero-logos${set}-light@2x.webp 2x` });
  preload(`/brand-a/hero-logos${set}-light-m.webp`, { as: "image", fetchPriority: "high", media: "(max-width: 900px)" });
  const data = getLandingData(locale);
  const F = data.facts;
  const vars: Record<string, string | number> = { total: F.total, skills: F.skills, tossChk: F.tossChk, tossNext: F.tossNext };
  const f = (s: string) => fmt(s, vars);
  const htmlLang = SITE_LOCALE_META[locale].htmlLang;
  const first = REGION_ORDER[locale][0] as "KR" | "JP" | "TW";
  const archive = catalogPathFor(locale);

  return (
    <div className="sq-root sq-root-page" lang={htmlLang}>
      <SiteHeaderA locale={locale} current={locale} onLanding stars={stars} />
      <main id="main">
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

        <section className="sq-sec sq-band" id="reference" aria-labelledby="h-ref">
          <div className="sq-wrap">
            <h2 id="h-ref">{c.gen.h2}</h2>
            <p className="sq-intro">{c.gen.intro}</p>
            <GenUI specs={data.gen} locale={locale} t={c.gen} first={first} />
          </div>
        </section>

        <CliSection locale={locale} c={c} r={r} total={F.total} skills={F.skills} skillsHref={GH_SKILLS} />

        <section className="sq-sec sq-band" id="faq" aria-labelledby="h-faq">
          <div className="sq-wrap">
            <Faq
              t={r.faq}
              issuesHref={GH_ISSUES}
              head={<><h2 id="h-faq">{r.faq.h2}</h2><p className="sq-faq-sub"><a href={GH_ISSUES}>{r.faq.sub}</a></p></>}
              items={r.faq.items.map((x) => ({ cat: x.cat, q: x.q, text: plain(f(x.a)), answer: rich(f(x.a)) }))}
            />
          </div>
        </section>

        <section className="sq-close" aria-labelledby="h-close">
          <div className="sq-wrap">
            <div className="sq-close-band">
              <div>
                <h2 id="h-close">{f(r.band.h2)}</h2>
                <p>{r.band.p}</p>
              </div>
              <Link className="sq-cta" href={archive} prefetch={false}>{r.band.cta}</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
