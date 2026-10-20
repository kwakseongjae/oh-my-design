import type { getR10 } from "./copy/r10";
import { Faq } from "./faq";
import { plain, rich } from "./rich";

type Props = {
  r: ReturnType<typeof getR10>;
  f: (s: string) => string;
  issuesHref: string;
};

/**
 * The FAQ section. Split out of landing.tsx before round 11 so the section has one owner
 * (docs/REDESIGN_R11_PLAN_2026-10-20.md W4); styles in faq.css.
 */
export function FaqSection({ r, f, issuesHref }: Props) {
  return (
    <section className="sq-sec sq-band" id="faq" aria-labelledby="h-faq">
      <div className="sq-wrap">
        <Faq
          t={r.faq}
          issuesHref={issuesHref}
          head={<><h2 id="h-faq">{r.faq.h2}</h2><p className="sq-faq-sub"><a href={issuesHref}>{r.faq.sub}</a></p></>}
          items={r.faq.items.map((x) => ({ cat: x.cat, q: x.q, text: plain(f(x.a)), answer: rich(f(x.a)) }))}
        />
      </div>
    </section>
  );
}
