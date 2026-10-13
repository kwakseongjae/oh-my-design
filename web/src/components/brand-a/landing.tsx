import { getLandingData } from "@/lib/landing-a/data.server";
import { PUBLISHED_SKILLS, REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { fmt, getCopy } from "./copy";
import { CopyButton } from "./copy-button";
import { GenUI } from "./gen-ui";
import { HeroKeys } from "./hero-keys";
import { RegionKeys } from "./region-keys";
import { rich } from "./rich";
import { SearchBox } from "./search-box";
import { SiteFooterA } from "./site-footer";
import { SiteHeaderA } from "./site-header";
import { UPCOMING_SKILLS } from "./skills-status";
import "../../styles/wanted-sans-cjk.css";
import "./landing.css";

const GH_SKILLS = "https://github.com/kwakseongjae/oh-my-design/tree/main/skills/";
const SITE = "https://oh-my-design.kr";
const FIRST_PROMPT = "Set up our design system — Toss-style.";
const INSTALL = "npx oh-my-design-cli@latest";
const WHY_GLYPHS = ["源", "字", "空"];

/**
 * The concept-A landing, shared by /, /ko, /ja and /zh-tw. Server component:
 * every number comes from generated data at build time; the search, hero
 * keyboard, gen-UI stream, region keys and copy buttons hydrate as islands.
 */
export function LandingA({ locale }: { locale: SiteLocale }) {
  const c = getCopy(locale);
  const data = getLandingData(locale);
  const F = data.facts;
  const vars: Record<string, string | number> = {
    total: F.total, KR: F.cnt.KR ?? 0, TW: F.cnt.TW ?? 0, JP: F.cnt.JP ?? 0, CN: F.cnt.CN ?? 0,
    v: F.tiers.v, p: F.tiers.p, l: F.tiers.l, cjk: F.cjk, cjkPct: F.cjkPct, skills: F.skills,
    legacyProse: F.legacyProse, tossChk: F.tossChk, tossNext: F.tossNext,
    n: Math.max(0, F.skills - PUBLISHED_SKILLS.length),
  };
  const f = (s: string) => fmt(s, vars);
  const htmlLang = SITE_LOCALE_META[locale].htmlLang;
  const regionOrder = REGION_ORDER[locale].filter((cc) => cc !== "CN") as ("KR" | "JP" | "TW")[];

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
              <dl className="sq-tally">
                {(["v", "p", "l"] as const).map((k) => (
                  <div key={k} className={`sq-${k}`}>
                    <dt>{F.tiers[k]}</dt>
                    <dd>{c.hero.tally[k]}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <HeroKeys
              caps={data.hero}
              total={F.total}
              labels={{ kb: c.kb, open: c.hero.open, meta: c.hero.meta, more: c.hero.more }}
            />
          </section>
        </div>

        <section className="sq-wrap sq-sec" id="reference" aria-labelledby="h-ref">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-ref">{c.gen.h2}</h2>
              <p className="sq-intro">{c.gen.intro}</p>
            </div>
          </div>
          <GenUI specs={data.gen} locale={locale} t={c.gen} first={regionOrder[0]} />
          <div className="sq-anat-2">
            <div className="sq-tiers">
              <h3>{c.tiers.heading}</h3>
              <dl>
                {(["v", "p", "l"] as const).map((k) => (
                  <div key={k} className={`sq-${k}`}>
                    <dt>
                      <b>{F.tiers[k]}</b>
                      {c.status[k]}
                    </dt>
                    <dd>{f(c.tiers[k])}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="sq-wrap sq-sec" id="regions" aria-labelledby="h-reg">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-reg">{c.reg3.h2}</h2>
              <p className="sq-intro">{c.reg3.intro}</p>
            </div>
          </div>
          <RegionKeys
            order={regionOrder}
            regions={data.regions}
            counts={F.cnt}
            verified={F.ver}
            t={{ ...c.reg3, names: c.regions.names, checked: c.regions.checked, surfaces: c.regions.surfaces }}
          />
        </section>

        <section className="sq-wrap sq-sec" id="use" aria-labelledby="h-use">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-use">{c.use.h2}</h2>
              <p className="sq-intro">{c.use.intro}</p>
            </div>
          </div>
          <ol className="sq-steps">
            <li>
              <span className="sq-step-n" aria-hidden="true">1</span>
              <h3>{c.use.s1h}</h3>
              <p>{c.use.s1p}</p>
              <div className="sq-cmd">
                <code lang="en">oh-my-design.kr/toss/design.md</code>
                <CopyButton text={`${SITE}/toss/design.md`} labels={c.use} />
              </div>
              <a className="sq-txt-link" href="/design-systems/toss#use">{c.use.s1a}</a>
            </li>
            <li>
              <span className="sq-step-n" aria-hidden="true">2</span>
              <h3>{c.use.s2h}</h3>
              <p>{c.use.s2p}</p>
              <div className="sq-cmd">
                <code lang="en">{INSTALL}</code>
                <CopyButton text={INSTALL} labels={c.use} />
              </div>
            </li>
            <li>
              <span className="sq-step-n" aria-hidden="true">3</span>
              <h3>{c.use.s3h}</h3>
              <p>{c.use.s3p}</p>
              <div className="sq-cmd sq-prompt">
                <code lang="en">{FIRST_PROMPT}</code>
                <CopyButton text={FIRST_PROMPT} labels={c.use} />
              </div>
            </li>
          </ol>
        </section>

        <section className="sq-wrap sq-sec" id="skills" aria-labelledby="h-sk">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-sk">{c.skills.h2}</h2>
              <p className="sq-intro">{f(c.skills.intro)}</p>
            </div>
          </div>
          <ul className="sq-skills">
            {PUBLISHED_SKILLS.map(([key, folder, glyph]) => (
              <li key={folder}>
                <a className="sq-sk" href={GH_SKILLS + folder}>
                  <span className="sq-sk-ic" lang="zh-Hant" aria-hidden="true">{glyph}</span>
                  <div>
                    <div className="sq-sk-top">
                      <span className="sq-sk-name" lang="en">{folder}</span>
                      <span className="sq-tag">{c.skills.tag.pub}</span>
                    </div>
                    <p>{c.skills.items[key]}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <ul className="sq-skills sq-later">
            {UPCOMING_SKILLS.map((s) => {
              const name = c.skills.names[s.key];
              const body = (
                <>
                  <span className="sq-sk-ic" lang={s.glyphLang} aria-hidden="true">{s.glyph}</span>
                  <div>
                    <div className="sq-sk-top">
                      <span className={`sq-sk-name${s.code ? "" : " sq-h"}`} lang={s.code ? "en" : undefined}>{name}</span>
                      <span className={`sq-tag sq-${s.status}`}>{c.skills.tag[s.status]}</span>
                    </div>
                    <p>{c.skills.items[s.key]}</p>
                  </div>
                </>
              );
              return (
                <li key={s.key} className={`sq-${s.status}`}>
                  {s.href ? <a className="sq-sk" href={s.href}>{body}</a> : <div className="sq-sk">{body}</div>}
                </li>
              );
            })}
          </ul>
          <a className="sq-txt-link sq-more" href="https://github.com/kwakseongjae/oh-my-design/tree/main/skills">{f(c.skills.more)}</a>
        </section>

        <section className="sq-wrap sq-sec" id="why" aria-labelledby="h-why">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-why">{c.why.h2}</h2>
              <p className="sq-intro">{c.why.intro}</p>
            </div>
          </div>
          <ul className="sq-why">
            {c.why.items.map((w, i) => (
              <li key={w[0]}>
                <span className="sq-sk-ic" lang="zh-Hant" aria-hidden="true">{WHY_GLYPHS[i]}</span>
                <h3>{w[0]}</h3>
                <p>{w[1]}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="sq-wrap sq-sec" id="faq" aria-labelledby="h-faq">
          <div className="sq-sec-head">
            <div>
              <h2 id="h-faq">{c.faq.h2}</h2>
            </div>
          </div>
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
