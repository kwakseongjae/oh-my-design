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

  // The current section is the page's one Iris state (docs.css: .dx-toc a[aria-current]).
  return (
    <nav aria-label={label}>
      <p className="dx-toc-title" aria-hidden="true">{label}</p>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={item.id === activeId ? "location" : undefined}
              onClick={() => setActiveId(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
