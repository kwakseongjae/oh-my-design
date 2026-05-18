import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { listPosts } from "@/lib/blog";

const IS_DEV = process.env.NODE_ENV === "development";

export const metadata: Metadata = IS_DEV
  ? {
      title: "Blog — oh-my-design (dev)",
      description:
        "Decoding design systems. Long-form analysis of Korean SaaS design.",
      robots: { index: false, follow: false },
      alternates: { canonical: "/blog" },
    }
  : {
      title: "Not Found",
      robots: { index: false, follow: false },
    };

export default function BlogIndex() {
  if (!IS_DEV) notFound();
  const posts = listPosts();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> Home
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/design-systems" className="text-muted-foreground hover:text-foreground transition-colors">Design Systems</Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-16 pb-12">
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          BLOG
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Decoding Design Systems</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          Long-form analysis grounded in extracted DESIGN.md data. Each post deconstructs one brand
          — Korean SaaS, global tech, fintech — into 5 portable design moves.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        {posts.length === 0 ? (
          <p className="text-muted-foreground text-sm">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border/40 bg-card/30 p-6 transition-all hover:border-foreground/20 hover:bg-card/60 dark:border-border dark:bg-card/40 dark:hover:bg-card"
                >
                  <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                    {post.brand && (
                      <>
                        <span>·</span>
                        <span>{post.brand}</span>
                      </>
                    )}
                    {post.country && (
                      <>
                        <span>·</span>
                        <span>{post.country}</span>
                      </>
                    )}
                    {post.reading_time && (
                      <>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.reading_time} min
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.subtitle && (
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{post.subtitle}</p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read post
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
