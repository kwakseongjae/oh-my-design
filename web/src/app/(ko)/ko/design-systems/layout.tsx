import type { ReactNode } from "react";
// Site chrome CSS first. The pages render their own header (the language switch
// points at each page's English twin), so without this the chrome's `.sq-wrap`
// shorthand would load after item.css and reset the item page's padding.
import "@/components/brand-a/chrome.css";

export default function KoreanDesignSystemsLayout({ children }: { children: ReactNode }) {
  return children;
}
