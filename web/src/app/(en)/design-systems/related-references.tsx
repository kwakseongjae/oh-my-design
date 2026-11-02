import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ARCHIVE_COPY, domainLabel } from "@/components/brand-a/copy/r11-archive";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { logoFor, nameLang, paletteOf, summaryOf, textLang, type ArchiveLocale } from "./archive-rows.server";

export interface RelatedItem {
  id: string;
  name: string;
  href: string;
}

/**
 * The item page's related block (owner, 2026-11-02: "비슷한 디자인 시스템쪽 카드 UI만 조금 더
 * 개선"), drawn with the archive's card (archive.css `.sq-card-*`) so both read as one catalog:
 * the genuine logo or none (logoFor), the domain in the page's language, the first sentence of
 * the reference's DESIGN.md, and its own colour tokens (paletteOf). Real <Link>s rendered on the
 * server, so crawlers follow detail → detail.
 */
export function RelatedReferences({
  items,
  heading,
  locale,
}: {
  items: readonly RelatedItem[];
  heading: string;
  locale: ArchiveLocale;
}) {
  if (items.length === 0) return null;
  const copy = ARCHIVE_COPY[locale];
  return (
    <section className="sq-root sq-rel" aria-labelledby="related-heading">
      <div className="sq-wrap">
        <h2 id="related-heading">{heading}</h2>
        <ul className="sq-rel-cards">
          {items.map(({ id, name, href }) => {
            const r = REGISTRY_BY_ID[id];
            if (!r) return null;
            const summary = summaryOf(id);
            const palette = paletteOf(r);
            return (
              <li key={id} className="sq-card">
                <Link href={href} className="sq-card-a">
                  <span className="sq-card-top">
                    <BrandLogo logo={logoFor(id)} className="sq-card-logo" />
                    <span className="sq-card-tag">{domainLabel(copy, r.category)}</span>
                  </span>
                  <span className="sq-card-name">
                    <span lang={nameLang(name, r.country)}>{name}</span>
                  </span>
                  {summary ? (
                    <span className="sq-card-sum" lang={textLang(summary, r.country)}>
                      {summary}
                    </span>
                  ) : null}
                  {palette.length > 0 ? (
                    <span className="sq-card-foot">
                      <span className="sq-card-pal" aria-hidden="true">
                        {palette.map((c) => (
                          <i key={c} style={{ background: c }} />
                        ))}
                      </span>
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
