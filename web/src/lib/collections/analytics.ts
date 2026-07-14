import { event } from "@/lib/gtag";

export type CollectionOrigin = "index" | "builder" | "directory" | "related";

export function trackCollectionView(args: { slug: string; colorFamily?: string }) {
  event("col_view", {
    collection: args.slug,
    ...(args.colorFamily ? { color_family: args.colorFamily } : {}),
  });
}

export function trackCollectionOpen(args: {
  slug: string;
  origin: CollectionOrigin;
  colorFamily?: string;
}) {
  event("col_open", {
    collection: args.slug,
    origin: args.origin,
    ...(args.colorFamily ? { color_family: args.colorFamily } : {}),
  });
}

export function trackCollectionBuilderClick(args: { slug: string; colorFamily: string }) {
  event("col_builder_click", {
    collection: args.slug,
    color_family: args.colorFamily,
  });
}
