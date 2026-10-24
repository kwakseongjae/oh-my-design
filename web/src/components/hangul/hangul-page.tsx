import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA, skillsHrefFor } from "@/components/brand-a/site-header";
import { CopyButton } from "@/components/brand-a/copy-button";
import { pretendard } from "@/components/brand-a/journey/faces";
import { getPost } from "@/lib/blog/posts";
import { BLOG_ON_SUBDOMAIN, blogPostHref, blogPostUrl } from "@/lib/site";
import {
  HANGUL_COPY,
  HANGUL_PATH,
  INSTALL_CLI,
  INSTALL_SKILL,
  LAUNCH_POST_SLUG,
  type Chapter,
  type HangulCopy,
  type HangulLocale,
} from "./copy";
import { MoaScreen } from "./moa-screen";
import type { MoaSide } from "./moa-copy";
import { SplitView } from "./split-view";
import "./hangul.css";

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

/** The hero's screens sit in a phone; the content scrolls between the bars on its own. */
function Phone({ side }: { side: MoaSide }) {
  return (
    <div className="hg-phone">
      <div className="hg-phone-screen">
        <MoaScreen typo={side} copy={side} chrome="fixed" />
      </div>
    </div>
  );
}

/** A chapter: one change between two screens, the notes between them. */
function ChapterSection({
  id,
  t,
  sides,
  focus,
}: {
  id: "type" | "copy";
  t: Chapter;
  sides: HangulCopy["sides"];
  focus: "type" | "copy";
}) {
  // the 조판 chapter keeps the fixed strings and changes the typesetting; the 문구 chapter the reverse
  const screen = (side: MoaSide) => (
    <div className="hg-shot">
      <MoaScreen typo={focus === "type" ? side : "fix"} copy={focus === "copy" ? side : "fix"} marks={focus} />
    </div>
  );
  return (
    <section id={id} className="hg-chapter" aria-labelledby={`hg-${id}-h`}>
      <div className="sq-wrap">
        <div className="hg-ch-head">
          <p className="hg-eyebrow">{t.eyebrow}</p>
          <h2 id={`hg-${id}-h`} className="hg-h2">{t.h2}</h2>
          <p className="hg-intro">{t.intro}</p>
        </div>
        <SplitView
          variant="chapter"
          labels={sides}
          before={screen("ai")}
          after={screen("fix")}
          between={
            <ol className="hg-notes" aria-label={t.h2}>
              {t.notes.map((n) => (
                <li key={n.id} className="hg-note">
                  <p className="hg-note-id" lang="en">{n.id}</p>
                  <p className="hg-note-t">{n.title}</p>
                  <p className="hg-note-b">{n.body}</p>
                </li>
              ))}
            </ol>
          }
        />
      </div>
    </section>
  );
}

/**
 * /ko/hangul and /hangul: the launch page for the /hangul skill. Owner review 2026-10-24 (r16):
 *   1. hero (B) — the same moa screen twice on ink, without the skill and with it, scrolling side by
 *      side; the rules that differ light up between them. Phones: one screen and a switch.
 *   2. 조판 — the same strings, typeset two ways, with the five rules that changed
 *   3. 문구 — the same typesetting, two sets of strings, with the rules each string breaks
 *   4. the 28 rules (14 typography, 14 writing), one line each
 *   5. install — one copy box, the skill-only alternative, the docs and blog links, and the one line
 *      that says the moa screens are examples
 * No eval figures, no measured-67 card, no seal and no logo (owner review 2026-10-24): the evals live
 * in the skill's references.
 */
export function HangulPage({ locale }: { locale: HangulLocale }) {
  const t = HANGUL_COPY[locale];
  const post = getPost(LAUNCH_POST_SLUG, locale);
  const postHref = post ? (BLOG_ON_SUBDOMAIN ? blogPostUrl(post.slug, locale) : blogPostHref(post.slug, locale)) : null;

  return (
    <div className={`sq-root sq-root-page hg-root ${pretendard.variable}`} lang={locale}>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={{ en: HANGUL_PATH.en, ko: HANGUL_PATH.ko }} />
      <main id="main" className="hg-main">
        <section className="hg-hero" aria-labelledby="hg-h1">
          <div className="sq-wrap">
            <div className="hg-hero-head">
              <p className="hg-kicker">
                <span className="hg-kicker-name" lang="en">/hangul</span>
                <span>{t.hero.kicker}</span>
              </p>
              <h1 id="hg-h1" className="hg-h1">{t.hero.h1}</h1>
              <p className="hg-lede">{t.hero.lede}</p>
              <div className="hg-ctas">
                <a className="hg-btn hg-btn--solid" href="#install">{t.hero.cta}</a>
                <a className="hg-btn hg-btn--line" href="#rules">{t.hero.ctaRules}</a>
              </div>
            </div>
            <SplitView
              variant="hero"
              labels={t.sides}
              before={<Phone side="ai" />}
              after={<Phone side="fix" />}
              between={
                <ul className="hg-tags" aria-label={t.hero.tagsLabel}>
                  {t.hero.tags.map((tag, i) => (
                    <li key={tag.id} className="hg-tag" style={{ animationDelay: `${(i * 1.4).toFixed(1)}s` }}>
                      <b lang="en">{tag.id}</b> {tag.text}
                    </li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>

        <ChapterSection id="type" t={t.type} sides={t.sides} focus="type" />
        <ChapterSection id="copy" t={t.copy} sides={t.sides} focus="copy" />

        <section id="rules" className="hg-rules-sec" aria-labelledby="hg-rules-h">
          <div className="sq-wrap">
            <h2 id="hg-rules-h" className="hg-h2">{t.rules.h2}</h2>
            <p className="hg-intro">{t.rules.intro}</p>
            <div className="hg-rules-cols">
              {(
                [
                  ["type", t.rules.typeH3, t.rules.list],
                  ["writing", t.rules.writingH3, t.rules.writing],
                ] as const
              ).map(([key, h3, list]) => (
                <div key={key} className="hg-rules-g">
                  <h3 className="hg-rules-h">{h3}</h3>
                  <ol className="hg-rules">
                    {list.map((r) => (
                      <li key={r.id} className="hg-rule">
                        <span className="hg-rule-tag" lang="en">{r.id}</span>
                        <span className="hg-rule-t">{r.text}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="install" className="hg-install" aria-labelledby="hg-install-h">
          <div className="sq-wrap">
            <h2 id="hg-install-h" className="hg-h2">{t.install.h2}</h2>
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
            <p className="hg-screens-note">{t.install.screensNote}</p>
          </div>
        </section>
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
