"use client";

/**
 * Collection card grid — client island under the RSC collection page.
 * Reuses the directory's <DSCard> (same thumbnail cascade + analytics) with
 * ds_detail_open { source: "collection" } and live HOT badges.
 */

import { useHotRefs } from "@/lib/hot-refs";
import { DSCard } from "@/components/ds-card";
import type { DesignSystemInfo } from "@/lib/design-systems";

export function CollectionGrid({ items }: { items: DesignSystemInfo[] }) {
  const hotRefs = useHotRefs(5);
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((ds) => (
        <DSCard
          key={ds.refId}
          ds={ds}
          hot={hotRefs.has(ds.refId)}
          source="collection"
        />
      ))}
    </div>
  );
}
