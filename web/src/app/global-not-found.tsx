import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

/**
 * 404 for URLs that match no route.
 *
 * The app has two root layouts — `(en)` (lang="en") and `(ko)` (lang="ko") —
 * so there is no single layout to compose a 404 from. Next renders this file
 * directly instead (`experimental.globalNotFound` in next.config.ts). It
 * deliberately carries no site JSON-LD: a 404 is not the organization page.
 *
 * Light only, like every other page (globals.css sets color-scheme: light).
 */
export const metadata: Metadata = {
  title: "Page not found — oh-my-design",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      {/* Rebrand round 10: paper, ink, an ink dot mark; no grid ground. */}
      <body className="min-h-screen bg-background text-foreground" style={{ backgroundColor: "var(--sq-paper)" }}>
        <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-4">
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full bg-[var(--sq-ink)]" />
            404
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight">This page does not exist.</h1>
          <p className="text-muted-foreground">
            The link may be from an older version of the site. Every DESIGN.md is still in the catalog.
          </p>
          <p className="flex gap-5 text-sm font-semibold">
            <Link href="/" className="border-b-2 border-[var(--sq-guide)] pb-0.5 hover:border-[var(--sq-ink)]">Home</Link>
            <Link href="/design-systems" className="border-b-2 border-[var(--sq-guide)] pb-0.5 hover:border-[var(--sq-ink)]">Catalog</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
