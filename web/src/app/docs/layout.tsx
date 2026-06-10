import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Docs — oh-my-design",
  description:
    "How the oh-my-design harness works: 17 skills, 16 sub-agents, 10-phase pipeline with 7 hero archetypes. Install once, talk to your AI agent in natural language.",
  alternates: {
    canonical: "/docs",
  },
  openGraph: {
    title: "oh-my-design — Docs",
    description:
      "Skill-driven design harness for Claude Code, Codex, OpenCode, Cursor.",
    type: "article",
    url: "/docs",
  },
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return children;
}
