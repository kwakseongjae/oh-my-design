import Link from "next/link";
import type { getR10 } from "./copy/r10";

type Props = {
  r: ReturnType<typeof getR10>;
  f: (s: string) => string;
  archive: string;
};

/**
 * The closing band. Split out of landing.tsx before round 11 so the section has one owner
 * (docs/REDESIGN_R11_PLAN_2026-10-20.md W5); styles in close.css.
 */
export function CloseSection({ r, f, archive }: Props) {
  return (
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
  );
}
