"use client";

/**
 * Section nav for /cli. Sticky under the site header so the page stays
 * navigable on a long scroll; the links are plain anchors so the page works
 * without JavaScript.
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SECTIONS = [
  { id: "outputs", label: "What you get" },
  { id: "different", label: "Why different" },
  { id: "compare", label: "Comparison" },
  { id: "output-ui", label: "Output" },
  { id: "customize", label: "Customize" },
];

export function CliNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="oh-my-design home">
          <ArrowLeft className="h-3.5 w-3.5 text-muted-foreground" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="oh-my-design" className="block h-6 dark:hidden" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="oh-my-design" className="hidden h-6 dark:block" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="On this page">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <Link
          href="/docs/en"
          className="inline-flex h-9 shrink-0 items-center rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Docs
        </Link>
      </div>
    </header>
  );
}
