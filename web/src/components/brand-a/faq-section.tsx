import type { getR10 } from "./copy/r10";
import { getR11Faq, localeOfR10 } from "./copy/r11-faq";
import { Faq } from "./faq";
import { rich } from "./rich";

type Props = {
  r: ReturnType<typeof getR10>;
  f: (s: string) => string;
  issuesHref: string;
};

/**
 * The FAQ section (docs/REDESIGN_R11_PLAN_2026-10-20.md W4): the heading on the left, seven
 * questions as one accordion on the right. The question box that sat under it was removed on
 * 2026-10-21 (owner). Styles in faq.css. The props are the composer's fixed contract, so the
 * locale is read back from `r`.
 */
export function FaqSection({ r, f, issuesHref }: Props) {
  const locale = localeOfR10(r);
  const t = getR11Faq(locale);
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
          </div>
        </div>
      </div>
    </section>
  );
}
