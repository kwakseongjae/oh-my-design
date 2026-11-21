"use client";

/**
 * The /screens gallery (and /ko/screens): every service's screens in shelves, from the still the owner was shown on
 * 2026-11-21 (g-shelves, tools/screen-archive/make-gallery-mocks.mjs on the screens branch).
 *   - the title, one line of facts and two switches: by screen type or by service, phone 390 or web 1440;
 *   - a rail of the shelves with their counts (anchors);
 *   - each shelf a row that scrolls sideways (snap, keyboard reachable, arrow buttons for a mouse), or a wrapping grid
 *     after "show all";
 *   - a tile: the still at the chosen width, the service, up to three DESIGN.md colours drawn on it, the screen's title.
 *     It opens the Screens tab's dialog; previous / next walk the shelf, and two links lead to the service's
 *     DESIGN.md and to all of its screens (its item page's #screens).
 * Rendered only when the server found the local folder (lib/screens/gallery.server.ts); the switches are plain state.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { ScreenDialog, isNarrowWidth } from "@/components/item/screen-dialog";
import { serviceShelves, stillAt, typeShelves, type GalleryModel, type GalleryService, type GalleryShot } from "@/lib/screens/model";
import { GALLERY_COPY, type GalleryCopy, type ScreensLocale } from "./copy";
import "@/components/brand-a/screens-ui.css";
import "@/components/brand-a/screens-gallery.css";

type Mode = "type" | "service";

interface ShelfView {
  id: string;
  title: string;
  meta: string;
  /** The service's DESIGN.md page, on a service shelf. */
  href: string | null;
  shots: GalleryShot[];
}

/** One tile's frame size: the viewport the still was shot at (390 × 844 or 1440 × 900), so nothing shifts. */
const frameOf = (width: number) => (isNarrowWidth(width) ? { w: 390, h: 844, shape: "narrow" } : { w: 1440, h: 900, shape: "wide" });

export function ScreensGallery({ model, locale }: { model: GalleryModel; locale: ScreensLocale }) {
  const t = GALLERY_COPY[locale];
  const [mode, setMode] = useState<Mode>("type");
  const [width, setWidth] = useState(() => (model.widths.includes(390) ? 390 : model.widths[0]));
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const [open, setOpen] = useState<{ shelf: string; index: number } | null>(null);

  const services = useMemo(() => new Map(model.services.map((s) => [s.slug, s])), [model]);
  const order = useMemo(() => model.services.map((s) => s.slug), [model]);

  const shelves: ShelfView[] = useMemo(() => {
    if (mode === "service") {
      return serviceShelves(model.shots, order, width).map((x) => {
        const s = services.get(x.slug)!;
        return { id: `svc-${x.slug}`, title: s.name, meta: t.serviceMeta(x.shots.length), href: s.href, shots: x.shots };
      });
    }
    return typeShelves(model.shots, order, width).map((x) => ({
      id: x.id,
      title: x.fixed ? t.shelfName[x.fixed] : x.type ? t.typeName(x.type) : t.more,
      meta: t.shelfMeta(x.shots.length, new Set(x.shots.map((s) => s.slug)).size),
      href: null,
      shots: x.shots,
    }));
  }, [mode, width, model, order, services, t]);

  const openShelf = open ? shelves.find((s) => s.id === open.shelf) ?? null : null;
  const current = openShelf && open ? openShelf.shots[open.index] ?? null : null;
  const currentService = current ? services.get(current.slug) ?? null : null;

  // A switch reshapes the shelves: whatever was open belongs to the old ones.
  function switchTo(change: () => void) {
    setOpen(null);
    change();
  }

  function step(by: number) {
    if (!open || !openShelf) return;
    const n = openShelf.shots.length;
    setOpen({ shelf: open.shelf, index: (open.index + by + n) % n });
  }

  function toggle(id: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const facts = t.facts(model.services.length, model.shots.length, model.shot, model.signedOut);

  return (
    <div className="sq-gal">
      <div className="sq-gal-top">
        <div className="sq-gal-intro">
          <h1 className="sq-page-title">{t.h1}</h1>
          <p className="sq-gal-facts">
            {facts}
            <br />
            {t.dotsNote}
          </p>
        </div>
        <div className="sq-gal-switches">
          <div className="sq-scr-seg" role="group" aria-label={t.modeLabel}>
            <button type="button" aria-pressed={mode === "type"} onClick={() => switchTo(() => setMode("type"))}>
              {t.byType}
            </button>
            <button type="button" aria-pressed={mode === "service"} onClick={() => switchTo(() => setMode("service"))}>
              {t.byService}
            </button>
          </div>
          {model.widths.length > 1 ? (
            <div className="sq-scr-seg" role="group" aria-label={t.widthLabel}>
              {[...model.widths].sort((a, b) => a - b).map((w) => (
                <button key={w} type="button" aria-pressed={width === w} onClick={() => switchTo(() => setWidth(w))}>
                  {t.widthName(w)}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <nav className="sq-gal-rail" aria-label={mode === "type" ? t.railTypes : t.railServices}>
        <ul>
          {shelves.map((s) => (
            <li key={s.id}>
              <a className="sq-gal-chip" href={`#shelf-${s.id}`}>
                {s.title} <small>{s.shots.length}</small>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {shelves.map((s) => (
        <ShelfRow
          key={`${mode}-${width}-${s.id}`}
          shelf={s}
          width={width}
          expanded={expanded.has(s.id)}
          onToggle={() => toggle(s.id)}
          onOpen={(index) => setOpen({ shelf: s.id, index })}
          services={services}
          byService={mode === "service"}
          t={t}
        />
      ))}

      <ScreenDialog
        open={current !== null}
        still={current ? stillAt(current, width) : null}
        title={current?.title ?? ""}
        heading={
          current && currentService ? (
            <>
              <span>{currentService.name}</span>
              <span className="sq-scr-chip" lang="ko">
                {current.title}
              </span>
            </>
          ) : null
        }
        index={open?.index ?? 0}
        total={openShelf?.shots.length ?? 0}
        onStep={step}
        onClose={() => setOpen(null)}
        labels={t.dialog}
        links={
          currentService ? (
            <>
              <Link href={currentService.href} prefetch={false}>
                {t.designMd(currentService.name)}
                <ArrowRightIcon aria-hidden="true" />
              </Link>
              <Link href={`${currentService.href}#screens`} prefetch={false}>
                {t.allOfService(currentService.name)}
                <ArrowRightIcon aria-hidden="true" />
              </Link>
            </>
          ) : null
        }
      />
    </div>
  );
}

function ShelfRow({
  shelf,
  width,
  expanded,
  onToggle,
  onOpen,
  services,
  byService,
  t,
}: {
  shelf: ShelfView;
  width: number;
  expanded: boolean;
  onToggle: () => void;
  onOpen: (index: number) => void;
  services: Map<string, GalleryService>;
  /** A service's own shelf: its name is the shelf's heading, so a tile leads with the screen's title instead. */
  byService: boolean;
  t: GalleryCopy;
}) {
  const row = useRef<HTMLUListElement>(null);
  const [ends, setEnds] = useState({ start: true, end: true });
  const headId = `shelf-${shelf.id}-h`;

  const measure = useCallback(() => {
    const el = row.current;
    if (!el || expanded) return;
    setEnds({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
  }, [expanded]);

  useEffect(() => {
    const el = row.current;
    if (!el || expanded) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure, expanded]);

  function scroll(dir: number) {
    const el = row.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: still ? "auto" : "smooth" });
  }

  const scrolls = !(ends.start && ends.end);
  const frame = frameOf(width);

  return (
    <section id={`shelf-${shelf.id}`} className="sq-gal-shelf" aria-labelledby={headId}>
      <div className="sq-gal-shh">
        <h2 id={headId}>{shelf.title}</h2>
        <span className="sq-gal-meta">{shelf.meta}</span>
        {shelf.href ? (
          <Link className="sq-gal-md" href={shelf.href} prefetch={false}>
            DESIGN.md
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        ) : null}
        <div className="sq-gal-nav">
          {!expanded && scrolls ? (
            <>
              <button type="button" className="sq-scr-ic" onClick={() => scroll(-1)} disabled={ends.start} aria-label={t.scrollPrev(shelf.title)}>
                <ChevronLeftIcon aria-hidden="true" />
              </button>
              <button type="button" className="sq-scr-ic" onClick={() => scroll(1)} disabled={ends.end} aria-label={t.scrollNext(shelf.title)}>
                <ChevronRightIcon aria-hidden="true" />
              </button>
            </>
          ) : null}
          {scrolls || expanded ? (
            <button type="button" className="sq-gal-all" aria-expanded={expanded} aria-controls={`shelf-${shelf.id}-list`} onClick={onToggle}>
              {expanded ? t.fold : t.all}
            </button>
          ) : null}
        </div>
      </div>
      <ul
        id={`shelf-${shelf.id}-list`}
        ref={row}
        className={expanded ? "sq-gal-grid" : "sq-gal-row"}
        data-shape={frame.shape}
        tabIndex={expanded ? undefined : 0}
        aria-label={t.rowLabel(shelf.title)}
      >
        {shelf.shots.map((shot, i) => {
          const still = stillAt(shot, width);
          const svc = services.get(shot.slug);
          if (!still || !svc) return null;
          return (
            <li key={`${shot.slug}/${shot.key}`} className="sq-gal-tile">
              <button type="button" className="sq-gal-frame" data-shape={frame.shape} onClick={() => onOpen(i)} aria-label={t.tile(svc.name, shot.title)}>
                {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
                <img src={still.still} alt="" width={frame.w} height={frame.h} loading="lazy" decoding="async" />
              </button>
              <div className="sq-gal-cap">
                {byService ? <b lang="ko">{shot.title}</b> : <b>{svc.name}</b>}
                {shot.dots.length ? (
                  <span className="sq-gal-dots" role="img" aria-label={t.dots(shot.dots.map((d) => d.token))}>
                    {shot.dots.map((d) => (
                      <i key={d.token} style={{ background: d.value }} title={`${d.token} ${d.value}`} />
                    ))}
                  </span>
                ) : null}
              </div>
              {byService ? null : (
                <p className="sq-gal-title" lang="ko">
                  {shot.title}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
