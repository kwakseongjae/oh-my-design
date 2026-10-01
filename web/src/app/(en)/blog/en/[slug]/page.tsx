/**
 * /blog/en/[slug] — post detail in English.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView } from "@/components/blog/post-view";
import { getAllPosts, getPost, getPostLocales } from "@/lib/blog/posts";
import { blogPostJsonLd, blogPostMetadata } from "@/lib/blog/metadata";

export function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return blogPostMetadata(slug, "en");
}

export default async function BlogPostEnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug, "en");
  if (!post) notFound();

  const jsonLd = blogPostJsonLd(slug, "en");

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <BlogPostView post={post} locale="en" availableLocales={getPostLocales(slug)} />
    </>
  );
}
