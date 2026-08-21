/**
 * /blog/[slug] — post detail in the canonical locale (Korean).
 *
 * A post whose Korean version has not been written yet redirects to the locale
 * that does exist rather than 404ing or serving English at a Korean URL. The
 * redirect disappears on its own the day the translation lands, and the URL
 * that was published stays valid throughout.
 */

import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BlogPostView } from "@/components/blog/post-view";
import { getAllPosts, getPost, getPostLocales } from "@/lib/blog/posts";
import { blogPostJsonLd, blogPostMetadata } from "@/lib/blog/metadata";
import { blogPostHref } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return blogPostMetadata(slug, "ko");
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locales = getPostLocales(slug);
  if (locales.length === 0) notFound();

  const post = getPost(slug, "ko");
  if (!post) redirect(blogPostHref(slug, locales[0]));

  const jsonLd = blogPostJsonLd(slug, "ko");

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <BlogPostView post={post} locale="ko" availableLocales={locales} />
    </>
  );
}
