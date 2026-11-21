"use client";

/**
 * The item page's Screens tab — a company's real screens beside its DESIGN.md.
 *
 * Rendered only when the server found a local screens folder for this reference
 * (lib/screens/local.server.ts), and loaded as its own chunk (detail-view.tsx
 * imports it with next/dynamic), so a page without screens neither renders nor
 * downloads any of it. Layout from the owner-approved still "b-item-screens":
 *   - the shooting date and "로그아웃 상태", and a control for which width leads;
 *   - three groups (핵심 화면 · 상태 · 이 서비스의 화면), cards three across at 1440 and
 *     one at 390, each the leading still with the other width laid over it, the
 *     title, the type and state chip and up to four colour tokens drawn on it
 *     (black and white left out); a blocked screen says so and shows no image;
 *   - the panel "DESIGN.md와 대조": every comparable colour token with the number of
 *     screens it is drawn on, or "보이지 않음". A token filters the cards;
 *   - a card opens its full-page still in a dialog with previous / next.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
import "@/components/brand-a/item-screens.css";

const narrow = (width: number) => width < 1024;

function chipText(card: ScreenCard, t: ScreensLabels): string {
  return [t.typeName(card.type), card.state ? t.stateName(card.state) : null].filter(Boolean).join(" · ");
}

/** The type and state chip, left out where it would only repeat the title ("홈" titled "홈"). */
function TypeChip({ card, t }: { card: ScreenCard; t: ScreensLabels }) {
  const text = chipText(card, t);
  return text && text !== card.title ? <span className="sq-sc-chip">{text}</span> : null;
}

function Swatch({ value }: { value: string }) {
  return <i className="sq-sc-sw" style={{ background: value }} aria-hidden="true" />;
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

  return (
    <section id={panelId} className="sq-sc" role="tabpanel" aria-label={t.tab}>
      <div className="sq-sc-top" ref={topRef}>
        {meta ? <p className="sq-sc-meta">{meta}</p> : null}
        {model.widths.length > 1 ? (
          <div className="sq-sc-seg" role="group" aria-label={t.lead}>
            {model.widths.map((w) => (
              <button key={w} type="button" aria-pressed={lead === w} onClick={() => setLead(w)}>
                {t.widthName(w)}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {token ? (
        <div className="sq-sc-filter">
          <p role="status">{t.filtered(token, cards.length)}</p>
          <button type="button" className="sq-sc-clear" onClick={() => pick(null)}>
            <XIcon aria-hidden="true" />
            {t.clear}
          </button>
        </div>
      ) : null}

      <div className={`sq-sc-body${model.colors.length ? "" : " sq-sc-solo"}`}>
        <div className="sq-sc-main">
          {groups.map((g) => (
            <section key={g.id} className="sq-sc-group" aria-labelledby={`sc-${g.id}`}>
              <h2 id={`sc-${g.id}`}>
                {t.groups[g.id]} <span>{g.cards.length}</span>
              </h2>
              <ul className="sq-sc-grid">
                {g.cards.map((card) => (
                  <Card key={card.key} card={card} lead={lead} colors={model.colors} t={t} onOpen={() => setOpenKey(card.key)} />
                ))}
              </ul>
            </section>
          ))}
        </div>

        {model.colors.length ? (
          <aside className="sq-sc-side" aria-labelledby="sc-panel">
            <details open={panelOpen} onToggle={(e) => setPanelOpen(e.currentTarget.open)}>
              <summary>
                <span className="sq-sc-side-h">
                  <h2 id="sc-panel">{t.panel}</h2>
                  <ChevronDownIcon className="sq-sc-side-chev" aria-hidden="true" />
                </span>
                {model.colorCount ? <span className="sq-sc-side-n">{t.colorCount(model.colorCount.matched, model.colorCount.comparable)}</span> : null}
              </summary>
              <p className="sq-sc-side-p">{t.panelLead}</p>
              <ul className="sq-sc-rows">
                {model.colors.map((c) => (
                  <li key={c.token}>
                    <TokenRow color={c} on={token === c.token} t={t} onPick={() => pick(token === c.token ? null : c.token)} />
                  </li>
                ))}
              </ul>
              <p className="sq-sc-side-p">{t.exactOnly}</p>
            </details>
          </aside>
        ) : null}
      </div>

      <Dialog open={current !== null} onOpenChange={(open) => (open ? null : setOpenKey(null))}>
        {current && currentStill ? (
          <DialogContent
            showCloseButton={false}
            className="sq-sc-dlg"
            data-lead={narrow(currentStill.width) ? "narrow" : "wide"}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") step(-1);
              if (e.key === "ArrowRight") step(1);
            }}
          >
            <div className="sq-sc-dlg-bar">
              <DialogTitle className="sq-sc-dlg-t">
                <span lang="ko">{current.title}</span>
                <TypeChip card={current} t={t} />
              </DialogTitle>
              <span className="sq-sc-dlg-n">{t.counter(index + 1, sequence.length)}</span>
              <button type="button" className="sq-sc-ic" onClick={() => step(-1)} aria-label={t.prev}>
                <ChevronLeftIcon aria-hidden="true" />
              </button>
              <button type="button" className="sq-sc-ic" onClick={() => step(1)} aria-label={t.next}>
                <ChevronRightIcon aria-hidden="true" />
              </button>
              <DialogClose className="sq-sc-ic" aria-label={t.close}>
                <XIcon aria-hidden="true" />
              </DialogClose>
            </div>
            <div className="sq-sc-dlg-body">
              {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
              <img key={current.key + currentStill.width} src={currentStill.full ?? currentStill.still} alt={t.fullAlt(current.title)} />
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  );
}

function Card({ card, lead, colors, t, onOpen }: { card: ScreenCard; lead: number; colors: ScreenColor[]; t: ScreensLabels; onOpen: () => void }) {
  const main = leadStill(card, lead);
  const inset = insetStill(card, lead);
  const chips = card.blocked ? [] : cardChips(card.key, colors);
  const shape = narrow(main?.width ?? lead) ? "narrow" : "wide";
  return (
    <li className="sq-sc-card">
      {card.blocked || !main ? (
        <div className="sq-sc-frame sq-sc-blocked" data-lead={narrow(lead) ? "narrow" : "wide"}>
          <span>{t.blocked}</span>
        </div>
      ) : (
        <button type="button" className="sq-sc-frame" data-lead={shape} onClick={onOpen} aria-label={t.open(card.title)}>
          {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
          <img className="sq-sc-main-img" src={main.still} alt="" loading="lazy" decoding="async" />
          {inset ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="sq-sc-inset" data-shape={narrow(inset.width) ? "narrow" : "wide"} src={inset.still} alt="" loading="lazy" decoding="async" />
          ) : null}
        </button>
      )}
      <div className="sq-sc-cap">
        <b lang="ko">{card.title}</b>
        <TypeChip card={card} t={t} />
      </div>
      {chips.length ? (
        <ul className="sq-sc-toks">
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
      <span className="sq-sc-row-n">
        <b>{color.token}</b>
        <span>{color.value}</span>
      </span>
      <span className="sq-sc-row-k">{seen ? t.onScreens(color.screens.length) : t.notSeen}</span>
    </>
  );
  return seen ? (
    <button type="button" className="sq-sc-row" aria-pressed={on} onClick={onPick}>
      {body}
    </button>
  ) : (
    <div className="sq-sc-row sq-sc-row-none">{body}</div>
  );
}
