"use client";

/**
 * The item page's Screens tab — a company's real screens beside its DESIGN.md.
 *
 * Rendered only when the server found screens for this reference (lib/screens/source.server.ts: the
 * published manifest, or a local folder), and loaded as its own chunk (detail-view.tsx
 * imports it with next/dynamic), so a page without screens neither renders nor
 * downloads any of it. Layout from the owner-approved still "b-item-screens":
 *   - the shooting date and "로그아웃 상태", and a control for which width leads;
 *   - three groups (핵심 화면 · 상태 · 이 서비스의 화면), cards three across at 1440 and
 *     one at 390, each the leading still with the other width laid over it, the
 *     title, the type and state chip and up to four colour tokens drawn on it
 *     (black and white left out); a blocked screen says so and shows no image;
 *   - no comparison panel: the owner took "DESIGN.md와 대조" out on 2026-11-22 after seeing the tab in a preview
 *     ("좋은데 … DESIGNmd와 대조 부분은 빼도 좋을 거 같아"). The chips under a card stay;
 *   - a card opens its full-page still in a dialog with previous / next (the first-viewport still where no full page
 *     exists, as for every published screen);
 *   - once screens are published: a line under a card whose people were hidden, and the rights and takedown lines
 *     at the end (components/screens/notice.tsx).
 */

import { useMemo, useState } from "react";
import { ScreenDialog, isNarrowWidth as narrow } from "@/components/item/screen-dialog";
import { ScreensNotice } from "@/components/screens/notice";
import {
  cardChips,
  dialogSequence,
  groupCards,
  insetStill,
  leadStill,
  type ScreenCard,
  type ScreenColor,
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

function Swatch({ value }: { value: string }) {
  return <i className="sq-scr-sw" style={{ background: value }} aria-hidden="true" />;
}

export function ScreensTab({ model, labels: t, panelId }: { model: ScreensModel; labels: ScreensLabels; panelId: string }) {
  const [lead, setLead] = useState(model.widths[0]);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const groups = useMemo(() => groupCards(model.cards), [model]);
  const sequence = useMemo(() => dialogSequence(model.cards), [model]);
  const index = openKey ? sequence.findIndex((c) => c.key === openKey) : -1;
  const current = index >= 0 ? sequence[index] : null;
  const currentStill = current ? leadStill(current, lead) : null;

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
        {model.widths.length > 1 ? (
          <div className="sq-scr-seg" role="group" aria-label={t.lead}>
            {model.widths.map((w) => (
              <button key={w} type="button" aria-pressed={lead === w} onClick={() => setLead(w)}>
                {t.widthName(w)}
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
                  <Card key={card.key} card={card} lead={lead} colors={model.colors} t={t} note={masked(card)} onOpen={() => setOpenKey(card.key)} />
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
  lead,
  colors,
  t,
  note,
  onOpen,
}: {
  card: ScreenCard;
  lead: number;
  colors: ScreenColor[];
  t: ScreensLabels;
  /** The masked line, or null. */
  note: string | null;
  onOpen: () => void;
}) {
  const main = leadStill(card, lead);
  const inset = insetStill(card, lead);
  const chips = card.blocked ? [] : cardChips(card.key, colors);
  const shape = narrow(main?.width ?? lead) ? "narrow" : "wide";
  return (
    <li className="sq-scr-card">
      {card.blocked || !main ? (
        <div className="sq-scr-frame sq-scr-blocked" data-lead={narrow(lead) ? "narrow" : "wide"}>
          <span>{t.blocked}</span>
        </div>
      ) : (
        <button type="button" className="sq-scr-frame" data-lead={shape} onClick={onOpen} aria-label={main.full ? t.open(card.title) : t.openStill(card.title)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
          <img className="sq-scr-main-img" src={main.still} alt="" loading="lazy" decoding="async" />
          {inset ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="sq-scr-inset" data-shape={narrow(inset.width) ? "narrow" : "wide"} src={inset.still} alt="" loading="lazy" decoding="async" />
          ) : null}
        </button>
      )}
      <div className="sq-scr-cap">
        <b lang="ko">{card.title}</b>
        <TypeChip card={card} t={t} />
      </div>
      {note ? <p className="sq-scr-masked">{note}</p> : null}
      {chips.length ? (
        <ul className="sq-scr-toks">
          {chips.map((c) => (
            <li key={c.token}>
              <Swatch value={c.value} />
              {c.token}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
