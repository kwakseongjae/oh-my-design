/**
 * /blog/en — English index.
 */

import type { Metadata } from "next";
import { BlogIndexView } from "@/components/blog/index-view";
import { blogIndexMetadata } from "@/lib/blog/metadata";

export const metadata: Metadata = blogIndexMetadata("en");

export default function BlogIndexEnPage() {
  return <BlogIndexView locale="en" />;
}
