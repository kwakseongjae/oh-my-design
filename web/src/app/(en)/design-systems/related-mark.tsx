import { logoFor } from "./archive-rows.server";

/**
 * A related reference's mark (owner, 2026-10-21: "비슷한 디자인 시스템은 왜 로고 안 드러내?"): its
 * logo by the archive cards' rule (logoFor: the official SVG, else the brand's own-domain favicon,
 * never a stand-in) on a quiet tile; only a reference with neither keeps its documented primary
 * colour as a chip.
 */
export function RelatedMark({ id, color }: { id: string; color: string }) {
  const logo = logoFor(id);
  if (!logo) return <span className="sq-rel-sw" style={{ background: color }} aria-hidden="true" />;
  return (
    <span className={logo.dark ? "sq-rel-logo sq-rel-logo-dark" : "sq-rel-logo"} aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- an official logo, shown as delivered */}
      <img src={logo.src} alt="" loading="lazy" decoding="async" />
    </span>
  );
}
