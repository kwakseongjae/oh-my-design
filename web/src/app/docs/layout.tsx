import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Docs — oh-my-design",
  description:
    "How the oh-my-design harness works: 6 skills, 11 sub-agents, 10-phase pipeline. Install once, talk to your AI agent in natural language.",
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
