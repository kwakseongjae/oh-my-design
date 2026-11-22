"use client";

/**
 * The /screens gallery (and /ko/screens), from the still the owner chose on 2026-11-22 (b1-services,
 * tools/screen-archive/make-browse-mocks.mjs on the screens branch): the title and one sentence, a row of four filters
 * (country, device, category, type) with the count at its right, and below it either a grid of service cards (3 / 2 / 1
 * across) or, with a type chosen, one tile per screen of that type (owner, round 2: 「화면 종류 별로도」).
 * A card opens the service's screens page (/screens/<id>) on the chosen device; a tile opens it at that screen's large
 * view (lib/screens/gallery.ts screensPageHref).
 *
 * Filters live in the URL query (?country=kr&device=desktop&category=education&type=home) so a filtered view can be
 * linked; the bare URL is the unfiltered, canonical page and is what the server renders. The query is read after mount
 * (a prerendered page has none on the server), and a change replaces the URL in place.
 * Once screens are published: the rights and takedown lines at the end (./notice.tsx).
 */

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import {
  browse,
  defaultFilter,
  filterQuery,
  parseFilter,
  screensPageHref,
  smallSrc,
  typeOptions,
  type Device,
  type Filter,
  type GalleryModel,
} from "@/lib/screens/gallery";
import { GALLERY_COPY, type ScreensLocale } from "./copy";
import { FilterSelect } from "./filter-select";
import { ScreensNotice } from "./notice";
import { FRAME, ServiceCardItem } from "./service-card";
import "@/components/brand-a/screens-ui.css";
import "@/components/brand-a/screens-card.css";
import "@/components/brand-a/screens-gallery.css";

const ALL = "all";
/** The cards of the first row (three on a desktop) load at once; the rest when they come near. */
const FIRST_ROW = 3;
/** The type view's first row: six mobile tiles or three desktop ones. */
const FIRST_TILES: Record<Device, number> = { mobile: 6, desktop: 3 };

export function ScreensGallery({ model, locale }: { model: GalleryModel; locale: ScreensLocale }) {
  const t = GALLERY_COPY[locale];
  const [filter, setFilter] = useState<Filter>(() => defaultFilter(model));

  // The URL's query is the filter. Read after mount (the server renders the bare page) and on back / forward.
  useEffect(() => {
    const sync = () => setFilter(parseFilter(window.location.search, model));
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, [model]);

  function change(next: Filter) {
    setFilter(next);
    const q = filterQuery(next, model);
    const { pathname, hash } = window.location;
    window.history.replaceState(window.history.state, "", `${pathname}${q ? `?${q}` : ""}${hash}`);
  }

  const view = useMemo(() => browse(model, filter), [model, filter]);
  const types = useMemo(() => typeOptions(model, filter), [model, filter]);
  const withAll = (options: { value: string; label: string; count?: number }[]) => [{ value: ALL, label: t.all }, ...options];
  const frame = FRAME[filter.device];

  return (
    <div className="sq-gal">
      <div className="sq-gal-top">
        <h1 className="sq-page-title">{t.h1}</h1>
        <p className="sq-gal-lede">{t.lede}</p>
      </div>

      <div className="sq-gal-bar">
        <div className="sq-gal-filters" role="group" aria-label={t.filters}>
          <FilterSelect
            label={t.country}
            value={filter.country ?? ALL}
            options={withAll(model.countries)}
            onChange={(v) => change({ ...filter, country: v === ALL ? null : v })}
            lang={locale}
          />
          {model.devices.length > 0 ? (
            <FilterSelect
              label={t.device}
              value={filter.device}
              options={model.devices.map((d) => ({ value: d, label: t.deviceName[d] }))}
              onChange={(v) => change({ ...filter, device: v as Device })}
              lang={locale}
            />
          ) : null}
          <FilterSelect
            label={t.category}
            value={filter.category ?? ALL}
            options={withAll(model.categories)}
            onChange={(v) => change({ ...filter, category: v === ALL ? null : v })}
            lang={locale}
          />
          <FilterSelect
            label={t.type}
            value={filter.type ?? ALL}
            options={withAll(types.map((x) => ({ value: x.type, label: t.typeName(x.type), count: x.count })))}
            onChange={(v) => change({ ...filter, type: v === ALL ? null : v })}
            lang={locale}
          />
        </div>
        <p className="sq-gal-count" role="status">
          {t.count(view.screens, view.services)}
        </p>
      </div>

      {view.kind === "services" && view.cards.length ? (
        <ul className="sq-gal-grid">
          {view.cards.map((card, i) => (
            <ServiceCardItem
              key={card.service.slug}
              card={card}
              device={filter.device}
              href={screensPageHref(card.service, filter.device)}
              meta={t.cardMeta(card.service.categoryName, card.service.count)}
              eager={i < FIRST_ROW}
            />
          ))}
        </ul>
      ) : view.kind === "type" && view.tiles.length ? (
        <ul className="sq-gal-tiles" data-device={filter.device}>
          {view.tiles.map(({ service, shot, still }, i) => (
            <li key={`${service.slug}/${shot.key}`} className="sq-gal-tile">
              <Link href={screensPageHref(service, filter.device, shot.key)} prefetch={false}>
                <span className="sq-gal-tile-shot">
                  {/* eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path */}
                  <img
                    src={smallSrc(still)}
                    alt=""
                    width={frame.w}
                    height={frame.h}
                    loading={i < FIRST_TILES[filter.device] ? "eager" : "lazy"}
                    decoding={i < FIRST_TILES[filter.device] ? undefined : "async"}
                  />
                </span>
                <span className="sq-gal-cap">
                  <BrandLogo logo={service.logo} className="sq-gal-logo" />
                  <span className="sq-gal-name">{service.name}</span>
                </span>
                <span className="sq-gal-tile-t" lang="ko">
                  {shot.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="sq-gal-empty">
          <p>{t.empty}</p>
          <button type="button" onClick={() => change(defaultFilter(model))}>
            {t.clear}
          </button>
        </div>
      )}

      {model.published ? <ScreensNotice t={t.notice} scope="gallery" shot={model.shot} signedOut={model.signedOut} /> : null}
    </div>
  );
}
