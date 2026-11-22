"use client";

/**
 * One service's screens page (/screens/<id>, /ko/screens/<id>), made for looking at and taking a service's screens
 * (owner, round 2: 「저거 용도로 잘 만들어진 (하단에 유사한 사이트 화면도 보여주는) 페이지」), not the item page's tab moved:
 *   - a back link to the gallery, the service's logo and name, one facts line, the way to its DESIGN.md and the
 *     downloads (everything, both devices) with one sentence on whose the screens are;
 *   - one device at a time (모바일 · 데스크톱, no widths named): only that device's stills, never the other laid over
 *     them; the choice lives in the URL (?device=desktop) like the gallery's, and the page opens on mobile where the
 *     service has mobile stills;
 *   - the screens grouped by type in a fixed order (lib/screens/screen-types.ts), each group with its count and its
 *     own download (that type on that device); a tile opens the large view (components/item/screen-dialog.tsx),
 *     stepping within the chosen device, with a download of the still shown. The large view's screen is in the URL's
 *     hash (#home), so the gallery's tiles and the landing wall land on it;
 *   - blocked screens say so; people hidden on a screen are named under it and in its large view once published;
 *   - at the foot, similar services (same category first) as the gallery's cards, keeping the device; then the rights
 *     and takedown lines once published.
 * The server renders the page as it opens (mobile, nothing open); the query and the hash are read after mount.
 */

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, DownloadIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { ScreenDialog } from "@/components/item/screen-dialog";
import { ITEM_EN, ITEM_KO } from "@/components/brand-a/copy/item";
import { cardPicks, defaultDevice, screensPageHref, smallSrc, type ServiceScreensModel } from "@/lib/screens/gallery";
import { cardsOn, stillOn, type Device, type ScreenCard } from "@/lib/screens/model";
import { groupByType } from "@/lib/screens/screen-types";
import { trackScreensDownload, type ScreensDownloadScope } from "@/lib/screens/analytics";
import { GALLERY_COPY, SERVICE_SCREENS_COPY, type ScreensLocale, type ServiceScreensCopy } from "./copy";
import { allZipName, fetchItems, readmeText, saveBytes, screenFileName, typeZipName, zipBytes, type DownloadItem } from "./downloads";
import { ScreensNotice } from "./notice";
import { FRAME, ServiceCardItem } from "./service-card";
import "@/components/brand-a/screens-ui.css";
import "@/components/brand-a/screens-card.css";
import "@/components/brand-a/screens-service.css";

/** How many similar services the foot shows. */
const SIMILAR = 3;
/** The first row of tiles loads at once: five mobile stills or three desktop ones. */
const FIRST: Record<Device, number> = { mobile: 5, desktop: 3 };

type Shown = ScreenCard & { still: NonNullable<ReturnType<typeof stillOn>> | null };

export function ServiceScreens({
  model,
  locale,
  urls,
  galleryHref,
}: {
  model: ServiceScreensModel;
  locale: ScreensLocale;
  /** This page in both languages, absolute: the downloads' README names them. */
  urls: { en: string; ko: string };
  /** The gallery in this language. */
  galleryHref: string;
}) {
  const t = SERVICE_SCREENS_COPY[locale];
  const it = (locale === "ko" ? ITEM_KO : ITEM_EN).screens;
  const { service } = model;
  const opening = defaultDevice(service.devices);
  const [device, setDevice] = useState<Device>(opening);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const shown: Shown[] = useMemo(
    () => cardsOn(model.cards, device).map((c) => ({ ...c, still: c.blocked ? null : stillOn(c, device) })),
    [model, device],
  );
  const groups = useMemo(() => groupByType(shown), [shown]);
  const sequence = useMemo(() => groups.flatMap((g) => g.cards).filter((c): c is Shown & { still: NonNullable<Shown["still"]> } => c.still !== null), [groups]);
  const index = openKey ? sequence.findIndex((c) => c.key === openKey) : -1;
  const current = index >= 0 ? sequence[index] : null;

  // The query names the device, the hash the screen in the large view. Read after mount and on back / forward.
  useEffect(() => {
    const sync = () => {
      const want = new URLSearchParams(window.location.search).get("device");
      const d = want === "mobile" || want === "desktop" ? (service.devices.includes(want) ? want : opening) : opening;
      setDevice(d);
      const key = decodeURIComponent(window.location.hash.slice(1));
      const card = key ? model.cards.find((c) => c.key === key && !c.blocked && stillOn(c, d)) : null;
      setOpenKey(card ? card.key : null);
      if (card) document.getElementById(`screen-${card.key}`)?.scrollIntoView({ block: "center" });
    };
    sync();
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, [model, service.devices, opening]);

  function writeUrl(d: Device, key: string | null) {
    const { pathname } = window.location;
    const q = d === opening ? "" : `?device=${d}`;
    window.history.replaceState(window.history.state, "", `${pathname}${q}${key ? `#${key}` : ""}`);
  }
  function chooseDevice(d: Device) {
    setOpenKey(null);
    setDevice(d);
    writeUrl(d, null);
  }
  function open(key: string | null) {
    setOpenKey(key);
    writeUrl(device, key);
  }
  function step(by: number) {
    if (!sequence.length || index < 0) return;
    open(sequence[(index + by + sequence.length) % sequence.length].key);
  }

  const readmeFor = (masked: string[]) => readmeText({ names: model.names, urls, shot: model.shot, signedOut: model.signedOut, masked, slug: service.slug });
  const itemsOf = (cards: Shown[], d: Device, folder = ""): (DownloadItem & { masked: boolean })[] =>
    cards.flatMap((c) => {
      const s = c.blocked ? null : stillOn(c, d);
      return s ? [{ url: s.still, path: folder + screenFileName(service.slug, d, c.type, c.key), title: c.title, masked: c.masked }] : [];
    });
  const allItems = useMemo(
    () => service.devices.flatMap((d) => itemsOf(model.cards.map((c) => ({ ...c, still: null })), d, `${d}/`)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [model, service.devices],
  );

  const facts = t.facts(service.categoryName, service.count, model.shot, model.signedOut);
  const masked = (c: ScreenCard) => (model.published && c.masked ? it.notice.masked : null);
  const similar = useMemo(
    () =>
      model.similar
        .map(({ service: s, shots }) => ({ service: s, picks: cardPicks(shots, device) }))
        .filter((c) => c.picks.length > 0)
        .slice(0, SIMILAR),
    [model, device],
  );
  const galleryBack = device === "desktop" ? `${galleryHref}?device=desktop` : galleryHref;
  const frame = FRAME[device];
  let tileIndex = 0;

  return (
    <div className="sq-svc">
      <Link className="sq-svc-back" href={galleryBack} prefetch={false}>
        <ArrowLeftIcon aria-hidden="true" />
        {t.back}
      </Link>
      <div className="sq-svc-head">
        <div className="sq-svc-title">
          <BrandLogo logo={service.logo} className="sq-svc-logo" />
          <h1 className="sq-page-title">{t.h1(service.name)}</h1>
        </div>
        <p className="sq-svc-facts">{facts}</p>
        <div className="sq-svc-acts">
          <Link className="sq-svc-btn sq-svc-btn-primary" href={service.href} prefetch={false}>
            {t.designMd}
          </Link>
          <ZipButton
            className="sq-svc-btn sq-svc-btn-line"
            label={t.allZip}
            items={allItems}
            zipName={allZipName(service.slug)}
            readme={readmeFor}
            t={t}
            onDone={() => track("all", service.devices.length > 1 ? "both" : service.devices[0])}
          />
        </div>
        <p className="sq-svc-note">{t.downloadNote}</p>
      </div>

      {service.devices.length > 1 ? (
        <div className="sq-svc-bar">
          <div className="sq-scr-seg" role="group" aria-label={t.device}>
            {service.devices.map((d) => (
              <button key={d} type="button" aria-pressed={device === d} onClick={() => chooseDevice(d)}>
                {t.deviceName[d]}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {groups.length ? (
        <div className="sq-svc-groups" data-device={device}>
        {groups.map((g) => {
          const name = t.typeName(g.type);
          const items = itemsOf(g.cards, device);
          return (
            <section key={g.type} className="sq-svc-group" aria-labelledby={`g-${g.type}`}>
              <div className="sq-svc-gh">
                <h2 id={`g-${g.type}`}>
                  {name} <span>{g.cards.length}</span>
                </h2>
                {items.length ? (
                  <ZipButton
                    className="sq-svc-gzip"
                    label={t.typeZip}
                    ariaLabel={t.typeZipLabel(name)}
                    compact
                    items={items}
                    zipName={typeZipName(service.slug, g.type, device)}
                    readme={readmeFor}
                    t={t}
                    icon
                    onDone={() => track("type", device)}
                  />
                ) : null}
              </div>
              <ul className="sq-svc-grid" data-device={device}>
                {g.cards.map((c) => {
                  const eager = c.still !== null && tileIndex++ < FIRST[device];
                  return (
                    <li key={c.key} id={`screen-${c.key}`} className="sq-svc-tile">
                      {c.still ? (
                        <button type="button" className="sq-svc-frame" data-device={device} onClick={() => open(c.key)} aria-label={it.openStill(c.title)}>
                          {/* eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path */}
                          <img
                            src={smallSrc(c.still)}
                            alt=""
                            width={frame.w}
                            height={frame.h}
                            loading={eager ? "eager" : "lazy"}
                            decoding={eager ? undefined : "async"}
                          />
                        </button>
                      ) : (
                        <div className="sq-svc-frame sq-svc-blocked" data-device={device}>
                          <span>{t.blocked}</span>
                        </div>
                      )}
                      <p className="sq-svc-cap">
                        <b lang="ko">{c.title}</b>
                        {c.state ? <span className="sq-scr-chip">{it.stateName(c.state)}</span> : null}
                      </p>
                      {masked(c) ? <p className="sq-scr-masked">{masked(c)}</p> : null}
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
        </div>
      ) : (
        <p className="sq-svc-none">{t.none}</p>
      )}

      <ScreenDialog
        open={current !== null}
        still={current?.still ?? null}
        title={current?.title ?? ""}
        heading={
          current ? (
            <>
              <span lang="ko">{current.title}</span>
              <DialogChip text={[t.typeName(current.type), current.state ? it.stateName(current.state) : null].filter(Boolean).join(" · ")} title={current.title} />
            </>
          ) : null
        }
        index={index}
        total={sequence.length}
        onStep={step}
        onClose={() => open(null)}
        labels={it}
        note={current ? masked(current) : null}
        links={
          current?.still ? (
            <a href={current.still.still} download={screenFileName(service.slug, device, current.type, current.key)} onClick={() => track("screen", device)}>
              <DownloadIcon aria-hidden="true" />
              {t.one}
            </a>
          ) : null
        }
      />

      {similar.length ? (
        <section className="sq-svc-similar" aria-labelledby="sq-svc-similar">
          <h2 id="sq-svc-similar">{t.similar}</h2>
          <ul className="sq-gal-grid">
            {similar.map((card) => (
              <ServiceCardItem
                key={card.service.slug}
                card={card}
                device={device}
                href={screensPageHref(card.service, device)}
                meta={GALLERY_COPY[locale].cardMeta(card.service.categoryName, card.service.count)}
              />
            ))}
          </ul>
        </section>
      ) : null}

      {model.published ? (
        <ScreensNotice t={t.notice} scope="service" shot={model.shot ? { from: model.shot, to: model.shot } : null} signedOut={model.signedOut} service={service.slug} />
      ) : null}
    </div>
  );

  function track(scope: ScreensDownloadScope, d: Device | "both") {
    trackScreensDownload({ reference: service.slug, scope, device: d });
  }
}

/** The type (and state) beside the large view's title, left out where the title already says it ("홈" titled "홈",
 *  "검색 결과 · 자전거"). */
function DialogChip({ text, title }: { text: string; title: string }) {
  return text && !title.includes(text) ? <span className="sq-scr-chip">{text}</span> : null;
}

type ZipState = { kind: "idle" } | { kind: "working"; done: number; total: number } | { kind: "done" } | { kind: "partial"; missing: string[] } | { kind: "failed" };

/** A download of several stills as one zip, with its progress and what went wrong, beside the button that started it.
 *  The page stays usable meanwhile; a second press while it works does nothing. */
function ZipButton({
  className,
  label,
  ariaLabel,
  items,
  zipName,
  readme,
  t,
  icon = false,
  compact = false,
  onDone,
}: {
  className: string;
  label: string;
  ariaLabel?: string;
  items: (DownloadItem & { masked: boolean })[];
  zipName: string;
  readme: (masked: string[]) => string;
  t: ServiceScreensCopy;
  icon?: boolean;
  /** Icon only (a type's heading): the label is the accessible name and the tooltip; progress shows as n/m. */
  compact?: boolean;
  onDone: () => void;
}) {
  const [state, setState] = useState<ZipState>({ kind: "idle" });
  const working = state.kind === "working";

  async function run() {
    if (working || items.length === 0) return;
    setState({ kind: "working", done: 0, total: items.length });
    const { files, missing } = await fetchItems(items, (done) => setState({ kind: "working", done, total: items.length }));
    if (Object.keys(files).length === 0) {
      setState({ kind: "failed" });
      return;
    }
    const got = items.filter((i) => !missing.includes(i));
    const bytes = await zipBytes(files, readme(got.filter((i) => i.masked).map((i) => i.path.split("/").pop()!)));
    saveBytes(bytes, zipName);
    onDone();
    setState(missing.length ? { kind: "partial", missing: missing.map((m) => m.title) } : { kind: "done" });
  }

  const message =
    state.kind === "working"
      ? t.working(state.done, state.total)
      : state.kind === "done"
        ? t.done
        : state.kind === "partial"
          ? t.missing(state.missing)
          : state.kind === "failed"
            ? t.failed
            : "";

  return (
    <span className="sq-svc-zip">
      <button type="button" className={className} onClick={run} aria-disabled={working || undefined} aria-label={ariaLabel} title={compact ? ariaLabel : undefined}>
        {icon ? <DownloadIcon aria-hidden="true" /> : null}
        {compact ? (working ? `${state.done}/${state.total}` : null) : working ? t.working(state.done, state.total) : label}
      </button>
      <span className="sq-svc-zip-msg" role="status" data-kind={state.kind}>
        {state.kind === "working" ? "" : message}
      </span>
    </span>
  );
}
