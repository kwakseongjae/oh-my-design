"use client";

/**
 * The full-page view of one screen, shared by the item page's Screens tab and the /screens gallery: the
 * components/ui/dialog popup (it traps focus and returns it on close), a bar with the title, the position in the
 * sequence, previous / next (the arrow keys as well) and close, optional links and a note under the bar, and the
 * full-page still (or the first-viewport still when no full page was shot, as for every published screen). Styles: brand-a/screens-ui.css.
 */

import type { ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { ScreenStill } from "@/lib/screens/model";
import "@/components/brand-a/screens-ui.css";

export interface ScreenDialogLabels {
  counter: (i: number, n: number) => string;
  prev: string;
  next: string;
  close: string;
  fullAlt: (title: string) => string;
  /** The image's alt when there is no full page and the first-viewport still is shown. */
  stillAlt: (title: string) => string;
}

/** Narrower than a desktop: the dialog is phone-shaped. */
export const isNarrowWidth = (width: number) => width < 1024;

export function ScreenDialog({
  open,
  still,
  title,
  heading,
  index,
  total,
  onStep,
  onClose,
  labels: t,
  links,
  note,
}: {
  open: boolean;
  /** The still to show; null renders nothing inside the (closed) dialog. */
  still: ScreenStill | null;
  /** The screen's own title as shot (Korean), for the image's alt text. */
  title: string;
  /** The dialog's title row. */
  heading: ReactNode;
  /** 0-based position in the sequence previous / next walk. */
  index: number;
  total: number;
  onStep: (by: number) => void;
  onClose: () => void;
  labels: ScreenDialogLabels;
  /** Links under the bar (the gallery's way to the service's DESIGN.md and its screens). */
  links?: ReactNode;
  /** A line under the bar (people hidden on this screen). */
  note?: ReactNode;
}) {
  return (
    <Dialog open={open && still !== null} onOpenChange={(next) => (next ? null : onClose())}>
      {open && still ? (
        <DialogContent
          showCloseButton={false}
          className="sq-scr-dlg"
          data-lead={isNarrowWidth(still.width) ? "narrow" : "wide"}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") onStep(-1);
            if (e.key === "ArrowRight") onStep(1);
          }}
        >
          <div className="sq-scr-dlg-bar">
            <DialogTitle className="sq-scr-dlg-t">{heading}</DialogTitle>
            <span className="sq-scr-dlg-n">{t.counter(index + 1, total)}</span>
            <button type="button" className="sq-scr-ic" onClick={() => onStep(-1)} aria-label={t.prev}>
              <ChevronLeftIcon aria-hidden="true" />
            </button>
            <button type="button" className="sq-scr-ic" onClick={() => onStep(1)} aria-label={t.next}>
              <ChevronRightIcon aria-hidden="true" />
            </button>
            <DialogClose className="sq-scr-ic" aria-label={t.close}>
              <XIcon aria-hidden="true" />
            </DialogClose>
          </div>
          {links ? <div className="sq-scr-dlg-links">{links}</div> : null}
          {note ? <p className="sq-scr-dlg-note">{note}</p> : null}
          <div className="sq-scr-dlg-body">
            {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
            <img key={still.full ?? still.still} src={still.full ?? still.still} alt={still.full ? t.fullAlt(title) : t.stillAlt(title)} />
          </div>
        </DialogContent>
      ) : null}
    </Dialog>
  );
}
