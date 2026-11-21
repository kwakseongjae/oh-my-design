"use client";

/**
 * The landing's screens strip (components/screens/landing-section.tsx): a label and a "see all" text link on one line,
 * then one row of phone-width home screens that scrolls sideways (snap; swipe, trackpad, a mouse drag, or the arrow keys
 * on the focused row; Tab walks the tiles) and
 * bleeds to the right edge of the page so it plainly continues. No arrows, no auto-play, no progress dots.
 */

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import "@/components/brand-a/screens-gallery.css";

export interface StripTile {
  slug: string;
  name: string;
  /** The link's accessible name, starting with the visible name. */
  label: string;
  href: string;
  still: string;
}

/** Pixels a mouse must travel before a press becomes a drag (and the click under it is dropped). */
const DRAG_SLOP = 5;

export function ScreensLandingRow({ label, all, allHref, tiles }: { label: string; all: string; allHref: string; tiles: StripTile[] }) {
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const swallow = useRef(false);
  const [dragging, setDragging] = useState(false);

  // A native scroller does not follow a mouse drag; touch and trackpads already scroll it. Mouse only, left button.
  function down(e: PointerEvent<HTMLUListElement>) {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft, moved: false };
  }
  function move(e: PointerEvent<HTMLUListElement>) {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > DRAG_SLOP) {
      d.moved = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      setDragging(true);
    }
    if (d.moved) e.currentTarget.scrollLeft = d.left - dx;
  }
  function up() {
    const d = drag.current;
    drag.current = null;
    if (!d?.moved) return;
    setDragging(false);
    // the click that follows this pointerup lands on a tile: drop it, then forget
    swallow.current = true;
    setTimeout(() => (swallow.current = false), 0);
  }

  // Arrow keys on the focused row move it one tile (a mandatory snap would pull a 40px key scroll straight back).
  function key(e: KeyboardEvent<HTMLUListElement>) {
    if (e.target !== e.currentTarget || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
    const el = e.currentTarget;
    const li = el.querySelector("li");
    if (!li) return;
    e.preventDefault();
    const step = li.getBoundingClientRect().width + parseFloat(getComputedStyle(el).columnGap || "0");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: (e.key === "ArrowRight" ? 1 : -1) * step, behavior: still ? "auto" : "smooth" });
  }

  return (
    <div className="sq-gal-strip">
      <div className="sq-gal-strip-head">
        <h3 id="sc-screens">{label}</h3>
        <Link className="sq-gal-strip-all" href={allHref} prefetch={false}>
          {all}
          <ArrowRightIcon aria-hidden="true" />
        </Link>
      </div>
      <ul
        className="sq-gal-strip-row"
        aria-labelledby="sc-screens"
        tabIndex={0}
        data-dragging={dragging || undefined}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onKeyDown={key}
        onClickCapture={(e) => {
          if (!swallow.current) return;
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {tiles.map((tile) => (
          <li key={tile.slug}>
            <Link className="sq-gal-strip-tile" href={tile.href} prefetch={false} aria-label={tile.label} draggable={false}>
              <span className="sq-gal-frame" data-shape="narrow">
                {/* eslint-disable-next-line @next/next/no-img-element -- a local-only still, served by our own route */}
                <img src={tile.still} alt="" width={390} height={844} loading="lazy" decoding="async" draggable={false} />
              </span>
              <span className="sq-gal-strip-name">{tile.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
