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
 */
export const metadata: Metadata = {
  title: "Page not found — oh-my-design",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="omd-paper min-h-screen">
        <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-4">
          <p className="font-mono text-xs uppercase tracking-wide text-[var(--omd-proof)]">404</p>
          <h1 className="text-3xl font-bold tracking-tight">This page does not exist.</h1>
          <p className="text-[var(--omd-ink-2)]">
            The link may be from an older version of the site. The catalog and the builder are still here.
          </p>
          <p className="flex gap-4 text-sm font-medium">
            <Link href="/" className="underline underline-offset-4">Home</Link>
            <Link href="/design-systems" className="underline underline-offset-4">Catalog</Link>
            <Link href="/builder" className="underline underline-offset-4">Builder</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
