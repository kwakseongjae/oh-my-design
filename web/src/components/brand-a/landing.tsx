import Link from "next/link";
import { getLandingData } from "@/lib/landing-a/data.server";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { fmt, getCopy } from "./copy";
import { CopyButton } from "./copy-button";
import { GenUI } from "./gen-ui";
import { HeroKeys } from "./hero-keys";
import { rich } from "./rich";
import { SearchBox } from "./search-box";
import { SiteFooterA } from "./site-footer";
import { SiteHeaderA } from "./site-header";
import "./landing.css";

const GH_SKILLS = "https://github.com/kwakseongjae/oh-my-design/tree/main/skills";
const INSTALL = "npx oh-my-design-cli@latest";

/**
 * The concept-A landing, shared by /, /ko, /ja and /zh-tw. Round 4 (restraint,
 * docs/research/2026-10-14-restraint/RESTRAINT.md): a simple left (headline, one
 * sentence, search, one main and one quiet action) against one focal visual on the
 * right (the logo keyboard); below, one idea per section — the stream, the hand-off,
 * one statement, the questions. Server component: every number comes from generated
 * data at build time; search, keyboard, stream and copy buttons hydrate as islands.
 */
export function LandingA({ locale }: { locale: SiteLocale }) {
  const c = getCopy(locale);
  const data = getLandingData(locale);
  const F = data.facts;
  const vars: Record<string, string | number> = {
    total: F.total, skills: F.skills, tossChk: F.tossChk, tossNext: F.tossNext,
  };
  const f = (s: string) => fmt(s, vars);
  const htmlLang = SITE_LOCALE_META[locale].htmlLang;
  const first = REGION_ORDER[locale][0] as "KR" | "JP" | "TW";

  return (
    <div className="sq-root sq-root-page" lang={htmlLang}>
      <SiteHeaderA locale={locale} current={locale} onLanding />
      <main id="main">
        <div className="sq-hero-x" id="hero-x">
          {/* 3D host: poster until three.js mounts after idle (hero-keys.tsx) */}
          <div className="sq-k3 sq-poster" id="k3" aria-hidden="true" />
          <section className="sq-wrap sq-hero">
            <div className="sq-hero-copy">
              <h1>{rich(c.hero.h1)}</h1>
              <p className="sq-lede">{rich(f(c.hero.lede))}</p>
              <SearchBox
                labels={{ label: c.hero.searchLabel, ph: c.hero.searchPh, empty: c.hero.searchEmpty, hint: c.hero.searchHint, status: c.status }}
              />
              <div className="sq-hero-acts">
                <Link className="sq-cta" href="/design-systems" prefetch={false}>{c.hero.browse}</Link>
                <a className="sq-cta-q" href="#reference">{c.hero.how}</a>
              </div>
            </div>
            <HeroKeys caps={data.hero} label={c.kb.label} />
          </section>
        </div>

        <section className="sq-wrap sq-sec" id="reference" aria-labelledby="h-ref">
          <h2 id="h-ref">{c.gen.h2}</h2>
          <p className="sq-intro">{c.gen.intro}</p>
          <GenUI specs={data.gen} locale={locale} t={c.gen} first={first} />
        </section>

        <section className="sq-wrap sq-sec sq-use" id="use" aria-labelledby="h-use">
          <h2 id="h-use">{c.use.h2}</h2>
          <p className="sq-intro">{c.use.p}</p>
          <div className="sq-cmd">
            <code lang="en">{INSTALL}</code>
            <CopyButton text={INSTALL} labels={c.use} />
          </div>
          <p className="sq-skills-line" id="skills">
            <a href={GH_SKILLS}>{f(c.use.skills)}</a>
          </p>
        </section>

        <section className="sq-wrap sq-sec sq-why" id="why" aria-label={c.why.statement}>
          <p className="sq-statement">{c.why.statement}</p>
        </section>

        <section className="sq-wrap sq-sec" id="faq" aria-labelledby="h-faq">
          <h2 id="h-faq">{c.faq.h2}</h2>
          <div className="sq-faq">
            {c.faq.items.map((q) => (
              <details key={q[0]}>
                <summary>{q[0]}</summary>
                <p>{rich(f(q[1]))}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
