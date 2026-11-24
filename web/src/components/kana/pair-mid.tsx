"use client";

import type { ReactNode, SyntheticEvent } from "react";

/**
 * The middle of the moa pair (app.tsx): the rule tags and their source cards. The tour (hangul's split-view.tsx)
 * lights a tag and its card as it walks the phones; this lets a reader light one too, by pointing at, focusing or
 * pressing a tag, which is the only way to reach the cards when the tour does not run (reduced motion, a paused tour).
 */
export function PairMid({ children }: { children: ReactNode }) {
  const pick = (e: SyntheticEvent<HTMLDivElement>) => {
    const tag = (e.target as HTMLElement).closest<HTMLElement>(".hg-tag[data-rule]");
    if (!tag) return;
    for (const el of e.currentTarget.querySelectorAll<HTMLElement>(".hg-tag[data-rule], [data-tour-card]")) {
      el.toggleAttribute("data-on", el.dataset.rule === tag.dataset.rule);
    }
  };
  return (
    <div className="km-mid" onPointerOver={pick} onFocus={pick} onClick={pick}>
      {children}
    </div>
  );
}
