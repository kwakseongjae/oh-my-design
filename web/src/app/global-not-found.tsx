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
 * It also renders outside the ThemeProvider, so the inline script below does what
 * next-themes does on every other page (key "theme", default "system", class
 * strategy): it puts `.dark` on <html>, and brand-a.css's dark --sq-* block applies.
 */
const THEME_SCRIPT =
  "try{var t=localStorage.getItem('theme')||'system';if(t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');document.documentElement.style.colorScheme=document.documentElement.classList.contains('dark')?'dark':'light'}catch(e){}";
export const metadata: Metadata = {
  title: "Page not found — oh-my-design",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      {/* Concept A (rebrand round 2): paper, ink, the gamboge mark, grid-paper ground. */}
      <body className="min-h-screen bg-background text-foreground" style={{ background: "var(--sq-grid-paper)", backgroundColor: "var(--sq-paper)" }}>
        <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center gap-4 px-4">
          <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span aria-hidden="true" className="inline-block h-3 w-3 bg-[var(--sq-gamboge)]" />
            404
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight">This page does not exist.</h1>
          <p className="text-muted-foreground">
            The link may be from an older version of the site. Every DESIGN.md is still in the catalog.
          </p>
          <p className="flex gap-5 text-sm font-semibold">
            <Link href="/" className="border-b-2 border-[var(--sq-gamboge)] pb-0.5">Home</Link>
            <Link href="/design-systems" className="border-b-2 border-[var(--sq-gamboge)] pb-0.5">Catalog</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
