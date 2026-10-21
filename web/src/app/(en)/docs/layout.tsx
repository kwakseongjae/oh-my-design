import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { REFERENCE_COUNT, SKILL_COUNT } from "@/lib/catalog-count";
// Wanted Sans' Hangul slices (unicode-range), so /docs/ko sets Korean in the brand face as
// /ko does. The docs share the English root layout, which loads only the Latin slices.
import "@/styles/wanted-sans-cjk.css";

// Bare "N skills" means the public set (owner decision 2026-10-15); the installer's full
// set is "the N-skill bundle" (scripts/check-counts.mjs holds the prose surfaces to this).
const description = `How to use oh-my-design: take one of ${REFERENCE_COUNT} DESIGN.md files from the archive, install oh-my-design-cli, a ${SKILL_COUNT}-skill bundle of frontend skills, and have your coding agent build your UI with it.`;

export const metadata: Metadata = {
  title: {
    default: "oh-my-design Docs",
    template: "%s",
  },
  description,
  openGraph: {
    title: "oh-my-design Docs",
    description: "The DESIGN.md archive and oh-my-design-cli: install, workflows, skills.",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}
