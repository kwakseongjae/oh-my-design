import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { Ask } from "./ask";
import type { getR10 } from "./copy/r10";
import { getR11Ask, localeOfR10 } from "./copy/r11-ask";
import { Faq } from "./faq";
import { rich } from "./rich";
import "./ask.css";

type Props = {
  r: ReturnType<typeof getR10>;
  f: (s: string) => string;
  issuesHref: string;
};

/**
 * The FAQ section (docs/REDESIGN_R11_PLAN_2026-10-20.md W4): the heading on the left; on the
 * right, seven questions as one accordion and, under them, the question box (ask.tsx →
 * /api/ask). Split out of landing.tsx before round 11 so the section has one owner; styles in
 * faq.css and ask.css (imported here, since landing.tsx's import list is frozen). The props are
 * the composer's fixed contract, so the locale is read back from `r`.
 */
export function FaqSection({ r, f, issuesHref }: Props) {
  const locale = localeOfR10(r);
  const t = getR11Ask(locale);
  // blank issues are off in this repo (.github/ISSUE_TEMPLATE/config.yml), so link the chooser
  const newIssue = `${issuesHref}/new/choose`;
  return (
    <section className="sq-sec sq-band" id="faq" aria-labelledby="h-faq">
      <div className="sq-wrap">
        <div className="sq-faq-g">
          <div className="sq-faq-side">
            <h2 id="h-faq">{r.faq.h2}</h2>
            <p className="sq-faq-sub"><a href={issuesHref}>{r.faq.sub}</a></p>
          </div>
          <div className="sq-faq-main">
            <Faq
              items={t.faq.items.map((x) => ({
                q: x.q,
                answer: rich(f(x.a)),
                link: x.issueLink ? { label: t.faq.issueLink, href: newIssue } : undefined,
              }))}
            />
            <Ask t={t.ask} locale={locale} docsHref={SITE_LOCALE_META[locale].docs} archiveHref={catalogPathFor(locale)} />
          </div>
        </div>
      </div>
    </section>
  );
}
