"use client";

/**
 * The /screens gallery (and /ko/screens), from the still the owner chose on 2026-11-22 (b1-services,
 * tools/screen-archive/make-browse-mocks.mjs on the screens branch): the title and one sentence, a row of three filters
 * (country, device, category) with the count at its right, and a grid of service cards, three across on a desktop,
 * two on a tablet, one on a phone. A card is one link to that service's item page with its 서비스 화면 tab open
 * (detail-view.tsx opens the tab on #screens); it shows three phone stills of the service (one web still on the web
 * view), the service's logo and name, its category and its count of screens.
 *
 * Filters live in the URL query (?country=kr&device=web&category=education) so a filtered view can be linked; the bare
 * URL is the unfiltered, canonical page and is what the server renders. The query is read after mount (a prerendered
 * page has none on the server), and a change replaces the URL in place.
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
  smallSrc,
  type Device,
  type Filter,
  type GalleryModel,
} from "@/lib/screens/gallery";
import { GALLERY_COPY, type ScreensLocale } from "./copy";
import { FilterSelect } from "./filter-select";
import { ScreensNotice } from "./notice";
import "@/components/brand-a/screens-ui.css";
import "@/components/brand-a/screens-gallery.css";

const ALL = "all";
/** The cards of the first row (three on a desktop) load at once; the rest when they come near. */
const FIRST_ROW = 3;
/** Each image's box is the viewport it was shot at, so nothing shifts while it loads. */
const FRAME: Record<Device, { w: number; h: number }> = { phone: { w: 390, h: 844 }, web: { w: 1440, h: 900 } };

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
  const frame = FRAME[filter.device];
  const withAll = (options: { value: string; label: string }[]) => [{ value: ALL, label: t.all }, ...options];

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
        </div>
        <p className="sq-gal-count" role="status">
          {t.count(view.screens, view.services)}
        </p>
      </div>

      {view.cards.length ? (
        <ul className="sq-gal-grid">
          {view.cards.map(({ service, picks }, i) => (
            <li key={service.slug} className="sq-gal-card">
              <Link className="sq-gal-link" href={`${service.href}#screens`} prefetch={false}>
                <span className="sq-gal-shot" data-device={filter.device}>
                  {picks.map(({ shot, still }) => (
                    // eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path
                    <img
                      key={shot.key}
                      src={smallSrc(still)}
                      alt=""
                      width={frame.w}
                      height={frame.h}
                      loading={i < FIRST_ROW ? "eager" : "lazy"}
                      decoding={i < FIRST_ROW ? undefined : "async"}
                    />
                  ))}
                </span>
                <span className="sq-gal-cap">
                  <BrandLogo logo={service.logo} className="sq-gal-logo" />
                  <span className="sq-gal-name">{service.name}</span>
                  <span className="sq-gal-meta">{t.cardMeta(service.categoryName, service.count)}</span>
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
