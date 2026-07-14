"use client";

import Link from "next/link";
import { trackCollectionOpen, type CollectionOrigin } from "@/lib/collections/analytics";

export function CollectionInlineLink({
  slug,
  origin,
  colorFamily,
  className,
  children,
}: {
  slug: string;
  origin: CollectionOrigin;
  colorFamily?: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/collections/${slug}`}
      onClick={() => trackCollectionOpen({ slug, origin, colorFamily })}
      className={className}
    >
      {children}
    </Link>
  );
}
