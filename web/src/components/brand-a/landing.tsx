import Link from "next/link";
import { getLandingData } from "@/lib/landing-a/data.server";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { fmt, getCopy } from "./copy";
import { CliPanel } from "./cli-panel";
import { GenUI } from "./gen-ui";
import { HeroKeys } from "./hero-keys";
import { rich } from "./rich";
import { SearchBox } from "./search-box";
import { SiteFooterA } from "./site-footer";
import { SiteHeaderA } from "./site-header";
import "./landing.css";

const GH_SKILLS = "https://github.com/kwakseongjae/oh-my-design/tree/main/skills";

/**
 * The concept-A landing, shared by /, /ko, /ja and /zh-tw. Round 4 (restraint,
 * docs/research/2026-10-14-restraint/RESTRAINT.md): a simple left (headline, one
 * sentence, search, one main and one quiet action) against one focal visual on the
 * right (the logo keyboard, per-locale cap set). Round 5: three sections below, each
 * one h2 on alternating paper / band — DESIGN.md to screen, the omd CLI (real captured
 * output + four published skills), the questions. Server component: every number comes from generated
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
          <div className="sq-k3 sq-poster" id="k3" data-set={locale === "ja" || locale === "zh-tw" ? locale : "default"} aria-hidden="true" />
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

        {/* Sections below the hero (round 5): one system — alternating paper / band, the
            same padding top and bottom, and one h2 at the same size and place in each. */}
        <section className="sq-sec sq-band" id="reference" aria-labelledby="h-ref">
          <div className="sq-wrap">
            <h2 id="h-ref">{c.gen.h2}</h2>
            <p className="sq-intro">{c.gen.intro}</p>
            <GenUI specs={data.gen} locale={locale} t={c.gen} first={first} />
          </div>
        </section>

        <section className="sq-sec sq-use" id="use" aria-labelledby="h-use">
          <div className="sq-wrap">
            <h2 id="h-use">{c.use.h2}</h2>
            <p className="sq-intro">{c.use.p}</p>
            <div className="sq-use-grid">
              <CliPanel t={c.use} />
              <div className="sq-skills" id="skills">
                <ul>
                  {c.use.skills.map(([name, line]) => (
                    <li key={name}>
                      <a href={`${GH_SKILLS}/${name}`} lang="en">{name}</a>
                      <p>{line}</p>
                    </li>
                  ))}
                </ul>
                <p className="sq-skills-line">
                  <a href={GH_SKILLS}>{f(c.use.all)}</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sq-sec sq-band" id="faq" aria-labelledby="h-faq"><div className="sq-wrap">
          <h2 id="h-faq">{c.faq.h2}</h2>
          <div className="sq-faq">
            {c.faq.items.map((q) => (
              <details key={q[0]}>
                <summary>{q[0]}</summary>
                <p>{rich(f(q[1]))}</p>
              </details>
            ))}
          </div>
        </div></section>
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
