"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; label: string };

type ScrollMetrics = {
  scrollTop: number;
  viewportHeight: number;
  scrollHeight: number;
};

const READING_LINE_PX = 144;
const PAGE_END_TOLERANCE_PX = 4;

export function resolveActiveTocId(
  items: readonly TocItem[],
  sectionTops: ReadonlyMap<string, number>,
  metrics: ScrollMetrics,
  readingLine = READING_LINE_PX,
) {
  let nextId = items[0]?.id ?? "";

  for (const item of items) {
    const top = sectionTops.get(item.id);
    if (top === undefined) continue;

    if (top <= readingLine) nextId = item.id;
    else break;
  }

  const atPageEnd =
    metrics.viewportHeight + metrics.scrollTop >=
    metrics.scrollHeight - PAGE_END_TOLERANCE_PX;

  return atPageEnd ? (items.at(-1)?.id ?? nextId) : nextId;
}

export function DocsToc({ items, label }: { items: TocItem[]; label: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const itemIds = new Set(items.map((item) => item.id));
    let frame: number | null = null;

    const updateActiveItem = () => {
      const scrollingElement = document.scrollingElement ?? document.documentElement;
      const sectionTops = new Map<string, number>();
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) sectionTops.set(item.id, section.getBoundingClientRect().top);
      }

      const nextId = resolveActiveTocId(items, sectionTops, {
        scrollTop: scrollingElement.scrollTop,
        viewportHeight: window.innerHeight,
        scrollHeight: scrollingElement.scrollHeight,
      });

      setActiveId((current) => (current === nextId ? current : nextId));
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateActiveItem();
      });
    };

    const syncFromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (itemIds.has(id)) setActiveId(id);
      scheduleUpdate();
    };

    syncFromHash();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", syncFromHash);
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
        frame = null;
      }
    };
  }, [items]);

  return (
    <div>
      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <nav className="space-y-1 border-l border-border" aria-label={label}>
        {items.map((item) => {
          const isActive = item.id === activeId;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActiveId(item.id)}
              className={`relative -ml-px block rounded-r-lg border-l-2 px-3 py-1.5 text-[12px] leading-5 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
                isActive
                  ? "border-primary bg-primary/10 font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
