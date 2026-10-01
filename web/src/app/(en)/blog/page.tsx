/**
 * /blog — Korean index (the canonical locale). On the blog host this is the
 * root; the proxy maps it.
 */

import type { Metadata } from "next";
import { BlogIndexView } from "@/components/blog/index-view";
import { blogIndexMetadata } from "@/lib/blog/metadata";

export const metadata: Metadata = blogIndexMetadata("ko");

export default function BlogIndexPage() {
  return <BlogIndexView locale="ko" />;
}
