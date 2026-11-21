"use client";

/**
 * The landing section's chips and row (components/screens/landing-section.tsx): the chips are real buttons with a
 * pressed state; each tile opens that service's screens on its item page (#screens); the button opens the gallery.
 */

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import type { FixedShelfId, ShotDot } from "@/lib/screens/model";
import { GALLERY_COPY, type ScreensLocale } from "./copy";
import "@/components/brand-a/screens-gallery.css";

export interface TeaserTile {
  slug: string;
  key: string;
  name: string;
  href: string;
  title: string;
  still: string;
  dots: ShotDot[];
}

export interface TeaserRow {
  id: FixedShelfId;
  tiles: TeaserTile[];
}

export function ScreensLandingRow({
  locale,
  rows,
  chipsLabel,
  cta,
  ctaHref,
}: {
  locale: ScreensLocale;
  rows: TeaserRow[];
  chipsLabel: string;
  cta: string;
  ctaHref: string;
}) {
  const t = GALLERY_COPY[locale];
  const [on, setOn] = useState<FixedShelfId>(rows[0].id);
  const row = rows.find((r) => r.id === on) ?? rows[0];
  return (
    <>
      <div className="sq-gal-land-bar">
        <div className="sq-gal-land-chips" role="group" aria-label={chipsLabel}>
          {rows.map((r) => (
            <button key={r.id} type="button" className="sq-gal-chip" aria-pressed={r.id === on} onClick={() => setOn(r.id)}>
              {t.shelfName[r.id]}
            </button>
          ))}
        </div>
        <Link className="sq-gal-land-cta" href={ctaHref} prefetch={false}>
          {cta}
          <ArrowRightIcon aria-hidden="true" />
        </Link>
      </div>
      <ul className="sq-gal-land-row" aria-label={t.rowLabel(t.shelfName[row.id])}>
        {row.tiles.map((tile) => (
          <li key={`${tile.slug}/${tile.key}`} className="sq-gal-tile">
            <Link className="sq-gal-frame" data-shape="narrow" href={tile.href} prefetch={false} aria-label={t.tile(tile.name, tile.title)}>
              {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
              <img src={tile.still} alt="" width={390} height={844} loading="lazy" decoding="async" />
            </Link>
            <div className="sq-gal-cap">
              <b>{tile.name}</b>
              {tile.dots.length ? (
                <span className="sq-gal-dots" role="img" aria-label={t.dots(tile.dots.map((d) => d.token))}>
                  {tile.dots.map((d) => (
                    <i key={d.token} style={{ background: d.value }} title={`${d.token} ${d.value}`} />
                  ))}
                </span>
              ) : null}
            </div>
            <p className="sq-gal-title" lang="ko">
              {tile.title}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
