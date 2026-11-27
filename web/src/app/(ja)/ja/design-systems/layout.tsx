import type { ReactNode } from "react";
import { geistMono } from "@/app/fonts";
// Site chrome CSS first, as in app/(ko)/ko/design-systems/layout.tsx: the pages render
// their own header, so without this the chrome's `.sq-wrap` shorthand would load after
// item.css and reset the item page's padding.
import "@/components/brand-a/chrome.css";

/**
 * The (ja) root layout sets only Noto Sans JP, for the landing. The item page shows the
 * same DESIGN.md body as the English and Korean pages, whose code reads Geist Mono
 * through --font-geist-mono (globals.css `--font-mono`), so the variable is set here for
 * this subtree (display: contents: no box of its own).
 */
export default function JapaneseDesignSystemsLayout({ children }: { children: ReactNode }) {
  return (
    <div className={geistMono.variable} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
