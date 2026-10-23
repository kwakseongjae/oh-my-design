import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA, skillsHrefFor } from "@/components/brand-a/site-header";
import { CopyButton } from "@/components/brand-a/copy-button";
import { pretendard } from "@/components/brand-a/journey/faces";
import { getHangulAssets } from "@/lib/hangul/assets";
import { getPost } from "@/lib/blog/posts";
import { BLOG_ON_SUBDOMAIN, blogPostHref, blogPostUrl } from "@/lib/site";
import { CompareSection, MeasuredSection } from "./asset-sections";
import { BreakDemo } from "./break-demo";
import {
  EVAL_FIGURES,
  H1_STACK,
  H3_METRICS,
  H7_LINES,
  HANGUL_COPY,
  HANGUL_PATH,
  INSTALL_CLI,
  INSTALL_SKILL,
  LAUNCH_POST_SLUG,
  type HangulLocale,
  type WhyCard,
} from "./copy";
import { songMyung } from "./faces";
import { SpecimenToggle } from "./specimen-toggle";
import "./hangul.css";
import "./specimens.css";

/** A command that wraps only at its spaces, never inside a token (owner v4 review: no clipping). */
function Cmd({ cmd }: { cmd: string }) {
  return (
    <>
      {cmd.split(" ").map((w, i) => (
        <span key={i}>
          {i ? " " : null}
          <span className="hg-tok">{w}</span>
        </span>
      ))}
    </>
  );
}

/** The two states of one "why" card, set in the CSS the rule changes (specimens.css). */
function specimen(card: WhyCard, fix: boolean) {
  switch (card.id) {
    case "HG-7":
      return (
        <div className={`hg-sp7${fix ? " hg-sp7--fix" : ""}`}>
          <p className="hg-h7" lang="ko">
            {H7_LINES[0]}
            <br />
            {H7_LINES[1]}
          </p>
        </div>
      );
    case "HG-3":
      return (
        <div className={`hg-sp3${fix ? " hg-sp3--fix" : ""}`} lang="ko">
          {H3_METRICS.map((m) => (
            <div key={m.label} className="hg-m3-col">
              <p className="hg-m3-l">{m.label}</p>
              <p className="hg-m3-v">
                {m.value}
                {m.unit ? <span>{m.unit}</span> : null}
              </p>
              <p className="hg-m3-n">{m.note}</p>
            </div>
          ))}
        </div>
      );
    case "HG-1":
      return (
        <pre className="hg-c1" lang="en">
          <code>{fix ? H1_STACK.after : H1_STACK.before}</code>
        </pre>
      );
  }
}

/**
 * /ko/hangul and /hangul: the launch page for the /hangul skill (docs/HANGUL_LAUNCH_PLAN_2026-10-21.md
 * H2), in the site's concept-A chrome and tokens. One focal point per view:
 *   1. hero — the live before/after of an eval heading (BreakDemo), both results in the first screen
 *   2. why — three defects that render on an eval page, each with a before/after switch
 *   3. eval — 17/18 → 0/18, worded as the results doc supports, with its caveats in one line
 *   4. launch content (screenshots, video, measured-67) — only the entries the content stream filled
 *   5. the 14 rules, one line each
 *   6. install — one copy box, the skill-only alternative, then the docs and blog links
 * No source list (owner v4 review): the skill files carry the citations.
 */
export function HangulPage({ locale }: { locale: HangulLocale }) {
  const t = HANGUL_COPY[locale];
  const assets = getHangulAssets();
  const post = getPost(LAUNCH_POST_SLUG, locale);
  const postHref = post ? (BLOG_ON_SUBDOMAIN ? blogPostUrl(post.slug, locale) : blogPostHref(post.slug, locale)) : null;

  // sections after the hero alternate paper and band; the launch-content ones may be absent
  const order: string[] = ["why", "eval"];
  if (assets.beforeAfter || assets.video) order.push("compare");
  if (assets.measured) order.push("measured");
  order.push("rules", "install");
  const band = (id: string) => order.indexOf(id) % 2 === 1;

  return (
    <div className={`sq-root sq-root-page hg-root ${pretendard.variable} ${songMyung.variable}`} lang={locale}>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={{ en: HANGUL_PATH.en, ko: HANGUL_PATH.ko }} />
      <main id="main" className="hg-main">
        <section className="sq-wrap hg-hero" aria-labelledby="hg-h1">
          <div className="hg-hero-top">
            <div className="hg-hero-copy">
              <p className="hg-kicker">
                {/* the one seal: a blank 인장 impression with the 천지인 marks (ㆍ ㅡ ㅣ) drawn as shapes */}
                <span className="hg-seal" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="hg-kicker-name" lang="en">/hangul</span>
                <span>{t.hero.kicker}</span>
              </p>
              <h1 id="hg-h1" className="hg-d">{t.hero.h1}</h1>
              <p className="hg-lede">{t.hero.lede}</p>
            </div>
            <a className="hg-cta" href="#install">{t.hero.cta}</a>
          </div>
          <BreakDemo t={t.demo} locale={locale} />
          <a className="hg-cta hg-cta--m" href="#install">{t.hero.cta}</a>
        </section>

        <section id="why" className={`hg-sec${band("why") ? " hg-band" : ""}`} aria-labelledby="hg-why-h">
          <div className="sq-wrap">
            <h2 id="hg-why-h" className="hg-d">{t.why.h2}</h2>
            <p className="hg-intro">{t.why.intro}</p>
            <ul className="hg-cards">
              {t.why.cards.map((card) => (
                <li key={card.id} className="hg-card">
                  <SpecimenToggle
                    id={`hg-${card.id.toLowerCase()}`}
                    before={specimen(card, false)}
                    after={specimen(card, true)}
                    spec={card.spec}
                    labels={t.why.toggle}
                  />
                  <p className="hg-rule-id" lang="en">{card.id}</p>
                  <h3>{card.title}</h3>
                  <p className="hg-card-body">{card.body}</p>
                </li>
              ))}
            </ul>
            <p className="hg-foot-note">{t.why.footnote}</p>
          </div>
        </section>

        <section id="eval" className={`hg-sec${band("eval") ? " hg-band" : ""}`} aria-labelledby="hg-eval-h">
          <div className="sq-wrap">
            <h2 id="hg-eval-h" className="hg-d">{t.evals.h2}</h2>
            <p className="hg-eval-unit">{t.evals.unit}</p>
            <div className="hg-eval">
              <div className="hg-fig">
                <p className="hg-fig-l">{t.evals.before.label}</p>
                <p className="hg-fig-n hg-num hg-d">
                  {EVAL_FIGURES.before}
                  <span>/{EVAL_FIGURES.runs}</span>
                </p>
                <p className="hg-fig-s">{t.evals.before.sub}</p>
              </div>
              <span className="hg-fig-arrow" aria-hidden="true">→</span>
              <div className="hg-fig">
                <p className="hg-fig-l">{t.evals.after.label}</p>
                <p className="hg-fig-n hg-num hg-d">
                  {EVAL_FIGURES.after}
                  <span>/{EVAL_FIGURES.runs}</span>
                </p>
                <p className="hg-fig-s">{t.evals.after.sub}</p>
              </div>
            </div>
            <p className="hg-eval-m">{t.evals.method}</p>
            <p className="hg-eval-c">{t.evals.caveat}</p>
          </div>
        </section>

        <CompareSection assets={assets} t={t.assets} band={band("compare")} />
        <MeasuredSection assets={assets} t={t.assets} band={band("measured")} />

        <section id="rules" className={`hg-sec${band("rules") ? " hg-band" : ""}`} aria-labelledby="hg-rules-h">
          <div className="sq-wrap">
            <h2 id="hg-rules-h" className="hg-d">{t.rules.h2}</h2>
            <p className="hg-intro">{t.rules.intro}</p>
            <ol className="hg-rules">
              {t.rules.list.map((r) => (
                <li key={r.id} className="hg-rule">
                  <span className="hg-rule-tag" lang="en">{r.id}</span>
                  <span className="hg-rule-t">{r.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="install" className={`hg-sec${band("install") ? " hg-band" : ""}`} aria-labelledby="hg-install-h">
          <div className="sq-wrap">
            <h2 id="hg-install-h" className="hg-d">{t.install.h2}</h2>
            <div className="hg-inst" role="group" aria-label={t.install.boxLabel}>
              <code lang="en">
                <span className="hg-inst-ps" aria-hidden="true">$ </span>
                <Cmd cmd={INSTALL_CLI} />
              </code>
              <CopyButton text={INSTALL_CLI} labels={t.install.copy} className="hg-inst-copy" />
            </div>
            <p className="hg-inst-alt">
              {t.install.alt}
              <code className="hg-inst-alt-cmd" lang="en">
                <Cmd cmd={INSTALL_SKILL} />
              </code>
            </p>
            <p className="hg-inst-use">{t.install.usage}</p>
            <nav className="hg-more" aria-label={t.install.more}>
              <p className="hg-more-h">{t.install.more}</p>
              <ul>
                <li>
                  <a className="hg-more-a" href={skillsHrefFor(locale)}>
                    <span className="hg-more-k">{t.install.docs}</span>
                    <span className="hg-more-t">{t.install.docsDesc}</span>
                  </a>
                </li>
                {post && postHref ? (
                  <li>
                    <a className="hg-more-a" href={postHref} lang={locale}>
                      <span className="hg-more-k">{t.install.blog}</span>
                      <span className="hg-more-t">{post.title}</span>
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
