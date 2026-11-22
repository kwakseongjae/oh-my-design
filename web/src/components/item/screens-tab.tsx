"use client";

/**
 * The item page's Screens tab — a company's real screens beside its DESIGN.md.
 *
 * Rendered only when the server found screens for this reference (lib/screens/source.server.ts: the
 * published manifest, or a local folder), and loaded as its own chunk (detail-view.tsx
 * imports it with next/dynamic), so a page without screens neither renders nor
 * downloads any of it. Layout from the owner-approved still "b-item-screens":
 *   - the shooting date and "로그아웃 상태", a link to the service's own screens page (/screens/<id>), and a
 *     control for the device (데스크톱 · 모바일, no widths named: owner, round 2);
 *   - three groups (핵심 화면 · 상태 · 이 서비스의 화면), cards three across on a desktop and one on a phone,
 *     each the still of the chosen device only (owner, round 2: 「선택한 기기에 해당하는 것만」; a screen with no
 *     still on that device is left out of that view), the title and the type and state chip; a blocked screen
 *     says so and shows no image;
 *   - no comparison panel: the owner took "DESIGN.md와 대조" out on 2026-11-22 after seeing the tab in a preview
 *     ("좋은데 … DESIGNmd와 대조 부분은 빼도 좋을 거 같아"), and the colour chips under a card went with it
 *     the same day: without the panel nothing said what they were;
 *   - a card opens its full-page still in a dialog with previous / next within the chosen device (the first-viewport
 *     still where no full page exists, as for every published screen);
 *   - once screens are published: a line under a card whose people were hidden, and the rights and takedown lines
 *     at the end (components/screens/notice.tsx).
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { ScreenDialog } from "@/components/item/screen-dialog";
import { ScreensNotice } from "@/components/screens/notice";
import {
  cardsOn,
  devicesOf,
  dialogSequence,
  groupCards,
  stillOn,
  type Device,
  type ScreenCard,
  type ScreensModel,
} from "@/lib/screens/model";
import type { ScreensLabels } from "@/components/brand-a/copy/item";
import "@/components/brand-a/screens-ui.css";
import "@/components/brand-a/item-screens.css";

function chipText(card: ScreenCard, t: ScreensLabels): string {
  return [t.typeName(card.type), card.state ? t.stateName(card.state) : null].filter(Boolean).join(" · ");
}

/** The type and state chip, left out where it would only repeat the title ("홈" titled "홈"). */
function TypeChip({ card, t }: { card: ScreenCard; t: ScreensLabels }) {
  const text = chipText(card, t);
  return text && text !== card.title ? <span className="sq-scr-chip">{text}</span> : null;
}


export function ScreensTab({
  model,
  labels: t,
  panelId,
  pageHref = null,
}: {
  model: ScreensModel;
  labels: ScreensLabels;
  panelId: string;
  /** The service's screens page, or null when it has none (every screen blocked). */
  pageHref?: string | null;
}) {
  const devices = useMemo(() => devicesOf(model.cards), [model]);
  // desktop first, as the tab always opened (the widest width led)
  const [device, setDevice] = useState<Device>(() => (devices.includes("desktop") ? "desktop" : (devices[0] ?? "desktop")));
  const [openKey, setOpenKey] = useState<string | null>(null);
  const shown = useMemo(() => cardsOn(model.cards, device), [model, device]);
  const groups = useMemo(() => groupCards(shown), [shown]);
  const sequence = useMemo(() => dialogSequence(shown).filter((c) => stillOn(c, device)), [shown, device]);
  const index = openKey ? sequence.findIndex((c) => c.key === openKey) : -1;
  const current = index >= 0 ? sequence[index] : null;
  const currentStill = current ? stillOn(current, device) : null;

  function step(by: number) {
    if (!sequence.length || index < 0) return;
    setOpenKey(sequence[(index + by + sequence.length) % sequence.length].key);
  }

  const meta = [model.shot ? t.shot(model.shot) : null, model.signedOut ? t.signedOut : null].filter(Boolean).join(" · ");
  // Once screens are published: who owns them and how to ask for a takedown, and which screens had people hidden.
  const masked = (card: ScreenCard) => (model.published && card.masked ? t.notice.masked : null);

  return (
    <section id={panelId} className="sq-scr" role="tabpanel" aria-label={t.tab}>
      <div className="sq-scr-top">
        {meta ? <p className="sq-scr-meta">{meta}</p> : null}
        {pageHref ? (
          <Link className="sq-scr-page" href={pageHref} prefetch={false}>
            {t.page}
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        ) : null}
        {devices.length > 1 ? (
          <div className="sq-scr-seg" role="group" aria-label={t.device}>
            {[...devices].reverse().map((d) => (
              <button key={d} type="button" aria-pressed={device === d} onClick={() => (setOpenKey(null), setDevice(d))}>
                {t.deviceName[d]}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className="sq-scr-body">
        <div className="sq-scr-main">
          {groups.map((g) => (
            <section key={g.id} className="sq-scr-group" aria-labelledby={`sc-${g.id}`}>
              <h2 id={`sc-${g.id}`}>
                {t.groups[g.id]} <span>{g.cards.length}</span>
              </h2>
              <ul className="sq-scr-grid">
                {g.cards.map((card) => (
                  <Card key={card.key} card={card} device={device} t={t} note={masked(card)} onOpen={() => setOpenKey(card.key)} />
                ))}
              </ul>
            </section>
          ))}
        </div>

      </div>

      <ScreenDialog
        open={current !== null}
        still={currentStill}
        title={current?.title ?? ""}
        heading={
          current ? (
            <>
              <span lang="ko">{current.title}</span>
              <TypeChip card={current} t={t} />
            </>
          ) : null
        }
        index={index}
        total={sequence.length}
        onStep={step}
        onClose={() => setOpenKey(null)}
        labels={t}
        note={current ? masked(current) : null}
      />

      {model.published ? (
        <ScreensNotice t={t.notice} scope="service" shot={model.shot ? { from: model.shot, to: model.shot } : null} signedOut={model.signedOut} service={model.slug} />
      ) : null}
    </section>
  );
}

function Card({
  card,
  device,
  t,
  note,
  onOpen,
}: {
  card: ScreenCard;
  device: Device;
  t: ScreensLabels;
  /** The masked line, or null. */
  note: string | null;
  onOpen: () => void;
}) {
  const main = stillOn(card, device);
  const shape = device === "mobile" ? "narrow" : "wide";
  return (
    <li className="sq-scr-card">
      {card.blocked || !main ? (
        <div className="sq-scr-frame sq-scr-blocked" data-lead={shape}>
          <span>{t.blocked}</span>
        </div>
      ) : (
        <button type="button" className="sq-scr-frame" data-lead={shape} onClick={onOpen} aria-label={main.full ? t.open(card.title) : t.openStill(card.title)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path */}
          <img className="sq-scr-main-img" src={main.still} alt="" loading="lazy" decoding="async" />
        </button>
      )}
      <div className="sq-scr-cap">
        <b lang="ko">{card.title}</b>
        <TypeChip card={card} t={t} />
      </div>
      {note ? <p className="sq-scr-masked">{note}</p> : null}
    </li>
  );
}
