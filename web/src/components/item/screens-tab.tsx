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
 *   - the panel "DESIGN.md와 대조": every comparable colour token with the number of
 *     screens it is drawn on, or "보이지 않음". A token filters the cards;
 *   - a card opens its full-page still in a dialog with previous / next (the first-viewport still where no full page
 *     exists, as for every published screen);
 *   - once screens are published: a line under a card whose people were hidden, and the rights and takedown lines
 *     at the end (components/screens/notice.tsx).
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { ScreenDialog, isNarrowWidth as narrow } from "@/components/item/screen-dialog";
import { ScreensNotice } from "@/components/screens/notice";
import {
  cardChips,
  dialogSequence,
  filterCards,
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
  const [token, setToken] = useState<string | null>(null);
  const [openKey, setOpenKey] = useState<string | null>(null);
  // The panel is a list the phone and the stacked tablet layout fold away; side by side it stays open.
  const [panelOpen, setPanelOpen] = useState(() => typeof window === "undefined" || !window.matchMedia("(max-width:1023px)").matches);

  const cards = useMemo(() => filterCards(model.cards, model.colors, token), [model, token]);
  const groups = useMemo(() => groupCards(cards), [cards]);
  const sequence = useMemo(() => dialogSequence(cards), [cards]);
  const index = openKey ? sequence.findIndex((c) => c.key === openKey) : -1;
  const current = index >= 0 ? sequence[index] : null;
  const currentStill = current ? leadStill(current, lead) : null;

  // A token picked low in the sticky panel changes the cards above the fold: bring the tab's top
  // (the filter line) back into view so the change is seen.
  const topRef = useRef<HTMLDivElement>(null);
  const picked = useRef(false);
  useEffect(() => {
    if (!picked.current) return;
    picked.current = false;
    const top = topRef.current;
    if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView({ block: "start" });
  }, [token]);
  function pick(next: string | null) {
    picked.current = true;
    setToken(next);
    // Stacked above the cards, the open list would hide what the pick changed: fold it.
    if (next && window.matchMedia("(max-width:1023px)").matches) setPanelOpen(false);
  }

  function step(by: number) {
    if (!sequence.length || index < 0) return;
    setOpenKey(sequence[(index + by + sequence.length) % sequence.length].key);
  }

  const meta = [model.shot ? t.shot(model.shot) : null, model.signedOut ? t.signedOut : null].filter(Boolean).join(" · ");
  // Once screens are published: who owns them and how to ask for a takedown, and which screens had people hidden.
  const masked = (card: ScreenCard) => (model.published && card.masked ? t.notice.masked : null);

  return (
    <section id={panelId} className="sq-scr" role="tabpanel" aria-label={t.tab}>
      <div className="sq-scr-top" ref={topRef}>
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

      {token ? (
        <div className="sq-scr-filter">
          <p role="status">{t.filtered(token, cards.length)}</p>
          <button type="button" className="sq-scr-clear" onClick={() => pick(null)}>
            <XIcon aria-hidden="true" />
            {t.clear}
          </button>
        </div>
      ) : null}

      <div className={`sq-scr-body${model.colors.length ? "" : " sq-scr-solo"}`}>
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

        {model.colors.length ? (
          <aside className="sq-scr-side" aria-labelledby="sc-panel">
            <details open={panelOpen} onToggle={(e) => setPanelOpen(e.currentTarget.open)}>
              <summary>
                <span className="sq-scr-side-h">
                  <h2 id="sc-panel">{t.panel}</h2>
                  <ChevronDownIcon className="sq-scr-side-chev" aria-hidden="true" />
                </span>
                {model.colorCount ? <span className="sq-scr-side-n">{t.colorCount(model.colorCount.matched, model.colorCount.comparable)}</span> : null}
              </summary>
              <p className="sq-scr-side-p">{t.panelLead}</p>
              <ul className="sq-scr-rows">
                {model.colors.map((c) => (
                  <li key={c.token}>
                    <TokenRow color={c} on={token === c.token} t={t} onPick={() => pick(token === c.token ? null : c.token)} />
                  </li>
                ))}
              </ul>
              <p className="sq-scr-side-p">{t.exactOnly}</p>
            </details>
          </aside>
        ) : null}
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

function TokenRow({ color, on, t, onPick }: { color: ScreenColor; on: boolean; t: ScreensLabels; onPick: () => void }) {
  const seen = color.screens.length > 0;
  const body = (
    <>
      <Swatch value={color.value} />
      <span className="sq-scr-row-n">
        <b>{color.token}</b>
        <span>{color.value}</span>
      </span>
      <span className="sq-scr-row-k">{seen ? t.onScreens(color.screens.length) : t.notSeen}</span>
    </>
  );
  return seen ? (
    <button type="button" className="sq-scr-row" aria-pressed={on} onClick={onPick}>
      {body}
    </button>
  ) : (
    <div className="sq-scr-row sq-scr-row-none">{body}</div>
  );
}
