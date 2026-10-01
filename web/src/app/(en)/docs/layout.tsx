import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "oh-my-design CLI Docs",
    template: "%s",
  },
  description:
    "Outcome-first documentation for oh-my-design: deploy channel-compatible assets from 28 skills and 20 specialist definitions, choose a quality-graded reference, run doctor, and improve a real product route.",
  openGraph: {
    title: "oh-my-design — Docs",
    description:
      "Skill-driven design harness for Claude Code, Codex, OpenCode, Cursor.",
    type: "article",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}
