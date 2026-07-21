import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "oh-my-design CLI Docs",
    template: "%s",
  },
  description:
    "Outcome-first documentation for oh-my-design: deploy channel-compatible assets from 20 skills and 18 specialist definitions, choose a quality-graded reference, run doctor, and improve a real product route.",
  openGraph: {
    title: "oh-my-design — Docs",
    description:
      "Skill-driven design harness for Claude Code, Codex, OpenCode, Cursor.",
    type: "article",
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}
