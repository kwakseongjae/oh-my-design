"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCollectionBuilderClick } from "@/lib/collections/analytics";

export function CollectionBuilderLink({ slug, colorFamily, title }: {
  slug: string;
  colorFamily: string;
  title: string;
}) {
  return (
    <Link
      href={`/builder?color=${colorFamily}`}
      onClick={() => trackCollectionBuilderClick({ slug, colorFamily })}
      className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      Builder에서 {title} 보기
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
