"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

export interface OverlayScrollbarMetrics {
  hasOverflow: boolean;
  height: number;
  top: number;
}

const EDGE_INSET = 4;
const MIN_THUMB_HEIGHT = 40;
const HIDE_DELAY_MS = 1000;

export const OVERLAY_SCROLLBAR_COLORS = {
  core: "#fafafa",
  edge: "#0a0a0f",
} as const;

export function calculateOverlayScrollbarMetrics(
  scrollY: number,
  viewportHeight: number,
  documentHeight: number,
): OverlayScrollbarMetrics {
  if (viewportHeight <= 0 || documentHeight <= viewportHeight) {
    return { hasOverflow: false, height: 0, top: EDGE_INSET };
  }

  const trackHeight = Math.max(0, viewportHeight - EDGE_INSET * 2);
  const height = Math.min(
    trackHeight,
    Math.max(MIN_THUMB_HEIGHT, (viewportHeight / documentHeight) * trackHeight),
  );
  const maxScroll = documentHeight - viewportHeight;
  const clampedScroll = Math.min(Math.max(scrollY, 0), maxScroll);
  const travel = Math.max(0, trackHeight - height);
  const top = EDGE_INSET + (clampedScroll / maxScroll) * travel;

  return { hasOverflow: true, height, top };
}

export function calculateScrollYFromThumbDrag(
  startScrollY: number,
  pointerDeltaY: number,
  viewportHeight: number,
  documentHeight: number,
  thumbHeight: number,
): number {
  const maxScroll = Math.max(0, documentHeight - viewportHeight);
  const travel = Math.max(0, viewportHeight - EDGE_INSET * 2 - thumbHeight);
  if (maxScroll === 0 || travel === 0) return 0;
  return Math.min(
    maxScroll,
    Math.max(0, startScrollY + (pointerDeltaY / travel) * maxScroll),
  );
}

/**
 * Home-only overlay scrollbar. The customized WebKit root scrollbar used to
 * reserve a 6px layout gutter; this indicator floats above the page instead.
 */
export function OverlayPageScrollbar() {
  const [metrics, setMetrics] = useState<OverlayScrollbarMetrics>({
    hasOverflow: false,
    height: 0,
    top: EDGE_INSET,
  });
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef<{
    pointerId: number;
    startClientY: number;
    startScrollY: number;
    viewportHeight: number;
    documentHeight: number;
    thumbHeight: number;
    previousScrollBehavior: string;
  } | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  }, []);

  const hideLater = useCallback(() => {
    clearHideTimer();
    hideTimer.current = setTimeout(() => setVisible(false), HIDE_DELAY_MS);
  }, [clearHideTimer]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("landing-overlay-scroll");

    const update = (reveal: boolean) => {
      const next = calculateOverlayScrollbarMetrics(
        window.scrollY,
        window.innerHeight,
        root.scrollHeight,
      );
      setMetrics(next);

      if (reveal && next.hasOverflow) {
        setVisible(true);
        if (!drag.current) hideLater();
      }
    };

    const onScroll = () => update(true);
    const onResize = () => update(false);

    update(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      if (drag.current) {
        root.style.scrollBehavior = drag.current.previousScrollBehavior;
        drag.current = null;
      }
      root.classList.remove("landing-overlay-scroll");
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clearHideTimer();
    };
  }, [clearHideTimer, hideLater]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    clearHideTimer();
    setVisible(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    const root = document.documentElement;
    drag.current = {
      pointerId: event.pointerId,
      startClientY: event.clientY,
      startScrollY: window.scrollY,
      viewportHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
      thumbHeight: metrics.height,
      previousScrollBehavior: root.style.scrollBehavior,
    };
    // The site uses smooth anchor scrolling globally. Thumb dragging must track
    // the pointer synchronously instead of queueing smooth-scroll animations.
    root.style.scrollBehavior = "auto";
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const active = drag.current;
    if (!active || active.pointerId !== event.pointerId) return;
    window.scrollTo({
      top: calculateScrollYFromThumbDrag(
        active.startScrollY,
        event.clientY - active.startClientY,
        active.viewportHeight,
        active.documentHeight,
        active.thumbHeight,
      ),
      behavior: "auto",
    });
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current || drag.current.pointerId !== event.pointerId) return;
    document.documentElement.style.scrollBehavior = drag.current.previousScrollBehavior;
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    hideLater();
  };

  if (!metrics.hasOverflow) return null;

  return (
    <div
      aria-hidden="true"
      data-overlay-scrollbar
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className={`fixed right-0 z-[100] flex w-4 touch-none justify-end pr-0.5 transition-opacity ${
        visible ? "pointer-events-auto cursor-grab active:cursor-grabbing" : "pointer-events-none"
      }`}
      style={{
        top: metrics.top,
        height: metrics.height,
        opacity: visible ? 1 : 0,
        transitionDuration: "var(--dur-micro)",
      }}
    >
      <span
        className="h-full w-1 rounded-full"
        // Use the landing's documented light/dark canvas tokens so the thumb
        // remains distinguishable across both section themes without inventing
        // a separate neutral pair.
        style={{
          backgroundColor: OVERLAY_SCROLLBAR_COLORS.core,
          border: `1px solid ${OVERLAY_SCROLLBAR_COLORS.edge}`,
        }}
      />
    </div>
  );
}
