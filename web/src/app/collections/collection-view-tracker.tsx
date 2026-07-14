"use client";

import { useEffect } from "react";
import { trackCollectionView } from "@/lib/collections/analytics";

export function CollectionViewTracker({ slug, colorFamily }: { slug: string; colorFamily?: string }) {
  useEffect(() => {
    trackCollectionView({ slug, colorFamily });
  }, [slug, colorFamily]);
  return null;
}
