"use client";

/**
 * Sets <html lang> for the blog. The root layout hardcodes lang="en" for the
 * whole app and Next.js allows only one root <html>, so Korean blog pages were
 * announcing themselves to crawlers and screen readers as English. This is the
 * narrowest correction: patch the attribute on mount, restore on unmount so
 * client-side navigation back into the main site is not left mislabeled.
 */

import { useEffect } from "react";
import type { PostLocale } from "@/lib/blog/locales";

export function BlogHtmlLang({ locale }: { locale: PostLocale }) {
  useEffect(() => {
    const previous = document.documentElement.lang;
    document.documentElement.lang = locale;
    return () => {
      document.documentElement.lang = previous;
    };
  }, [locale]);

  return null;
}
