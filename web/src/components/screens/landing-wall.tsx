"use client";

/**
 * The landing's screens section as drawn (./landing-section.tsx picks the stills and the words): the heading and its
 * sentence, then two rows of stills that run past both edges of the viewport, phone stills with one or two wide web
 * stills in each row, the edges faded, and one action to the gallery.
 *
 * The rows drift slowly back and forth in opposite directions, by exactly as far as each row runs past the viewport
 * (CSS, brand-a/screens-wall.css), so nothing is cloned and no service repeats in a row. The drift pauses while the
 * pointer is over the wall or anything in it has focus; with keyboard focus the rows stand at their start so the wall
 * scrolls the focused still into view (the fade lifts, so a still at an edge shows its ring), and when focus leaves
 * the wall scrolls back. Under
 * prefers-reduced-motion the rows do not move at all. Each still is a link to its service's item page with the
 * 서비스 화면 tab open, named by the service and the screen.
 */

import Link from "next/link";
import type { FocusEvent } from "react";
import type { WallTile } from "@/lib/screens/gallery";
import "@/components/brand-a/screens-wall.css";

export type WallTileView = WallTile & { label: string };

/** Keyboard focus moved to a still: once the rows stand at their start (the stylesheet's :has(:focus-visible)), scroll
 *  the wall just enough to show it whole, with a margin for its ring. Only the wall scrolls, never the page. A press
 *  or a tap only pauses the drift, so the still under the pointer stays there and takes the click. */
function show(e: FocusEvent<HTMLDivElement>) {
  const wall = e.currentTarget;
  const still = e.target as HTMLElement;
  if (!still.matches(":focus-visible")) return;
  requestAnimationFrame(() => {
    const w = wall.getBoundingClientRect();
    const r = still.getBoundingClientRect();
    const margin = 24;
    if (r.left < w.left + margin) wall.scrollLeft -= w.left + margin - r.left;
    else if (r.right > w.right - margin) wall.scrollLeft += r.right - (w.right - margin);
  });
}

/** Focus left the wall: undo that scroll, so the drift starts from the edge again. */
function back(e: FocusEvent<HTMLDivElement>) {
  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) e.currentTarget.scrollLeft = 0;
}

export function ScreensWall({ h2, intro, cta, ctaHref, rows }: { h2: string; intro: string; cta: string; ctaHref: string; rows: [WallTileView[], WallTileView[]] }) {
  return (
    <section className="sq-sec sq-wall-sec" aria-labelledby="h-screens">
      <div className="sq-wrap">
        <h2 id="h-screens">{h2}</h2>
        <p className="sq-intro">{intro}</p>
      </div>
      <div className="sq-wall" onFocus={show} onBlur={back}>
        {rows.map((row, r) => (
          <ul key={r} className="sq-wall-row">
            {row.map((tile) => (
              <li key={`${tile.slug}/${tile.key}`} className={tile.wide ? "sq-wall-wide" : undefined}>
                <Link className="sq-wall-tile" href={tile.href} prefetch={false} aria-label={tile.label}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- a still from the image store, through our own path */}
                  <img src={tile.src} alt="" width={tile.wide ? 1440 : 390} height={tile.wide ? 900 : 844} loading="lazy" decoding="async" />
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="sq-wrap sq-wall-end">
        <Link className="sq-sc-cta" href={ctaHref} prefetch={false}>
          {cta}
        </Link>
      </div>
    </section>
  );
}
