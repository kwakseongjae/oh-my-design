import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Design Systems — oh-my-design",
  description:
    "Browse all 67 verified company design systems oh-my-design tracks. Open-source components, brand-guidelines pages, and DESIGN.md exports for AI coding agents.",
  alternates: { canonical: "/design-systems" },
  openGraph: {
    title: "Design Systems — oh-my-design",
    description:
      "67 real-company design systems. Live previews, source links, and DESIGN.md export for AI coding agents.",
    url: "/design-systems",
    type: "website",
  },
};

export default function DesignSystemsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
