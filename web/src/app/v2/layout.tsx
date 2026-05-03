import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "oh-my-design — DESIGN.md for AI coding agents",
  description:
    "One DESIGN.md spec. 67 real brands extracted. Make Claude Code, Codex, OpenCode, and Cursor ship UI that actually looks like Stripe, Toss, or Linear — not slop. MIT, zero AI calls during install.",
  openGraph: {
    title: "oh-my-design — DESIGN.md for AI coding agents",
    description:
      "67 real-company design systems your AI agent reads as ground truth before generating UI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "oh-my-design — DESIGN.md for AI coding agents",
    description:
      "67 real-company design systems your AI agent reads as ground truth before generating UI.",
  },
};

export default function V2Layout({ children }: { children: ReactNode }) {
  return children;
}
