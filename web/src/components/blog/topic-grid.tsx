"use client";

/**
 * The blog home's topic chips and the grid they narrow (web/public/design.md, Component: topic chips).
 * The cards are rendered on the server and passed in as children; each <li> carries its topics in
 * data-topics, and the chosen topic hides the rest with one generated rule. Page state only: the
 * choice is not in the URL.
 */

import { useState } from "react";

export interface TopicChip {
  id: string;
  label: string;
  count: number;
}

export function TopicGrid({
  label,
  all,
  total,
  topics,
  children,
}: {
  label: string;
  all: string;
  total: number;
  topics: TopicChip[];
  children: React.ReactNode;
}) {
  const [topic, setTopic] = useState<string | null>(null);
  const chips: (TopicChip & { key: string | null })[] = [
    { id: "", key: null, label: all, count: total },
    ...topics.map((t) => ({ ...t, key: t.id })),
  ];

  return (
    <>
      <div className="bh-chips" role="group" aria-label={label}>
        {chips.map((chip) => (
          <button
            key={chip.id || "all"}
            type="button"
            className="bh-chip"
            aria-pressed={topic === chip.key}
            onClick={() => setTopic(chip.key)}
          >
            {chip.label}
            <span className="bh-chip-n">{chip.count}</span>
          </button>
        ))}
      </div>
      {topic && <style>{`.bh-grid > li:not([data-topics~="${topic}"]){display:none}`}</style>}
      <ol className="bh-grid">{children}</ol>
    </>
  );
}
