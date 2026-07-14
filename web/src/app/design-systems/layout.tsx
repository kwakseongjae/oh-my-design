import type { Metadata } from "next";
import type { ReactNode } from "react";
import { REFERENCE_COUNT } from "@/lib/catalog-count";

export const metadata: Metadata = {
  title: "Design Systems — oh-my-design",
  description:
    `Browse all ${REFERENCE_COUNT} quality-graded company DESIGN.md references. Evidence status, source links, and exports for AI coding agents.`,
  alternates: { canonical: "/design-systems" },
  openGraph: {
    title: "Design Systems — oh-my-design",
    description:
      `${REFERENCE_COUNT} real-company DESIGN.md references with computed quality tiers, live previews, and source links.`,
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
