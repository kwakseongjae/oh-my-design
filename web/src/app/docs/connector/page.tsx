import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP Connector Retired · oh-my-design",
  description: "The catalog MCP transport is retired. Use oh-my-design skills or raw DESIGN.md URLs.",
  alternates: { canonical: "/docs/connector" },
};

export default function RetiredConnectorPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8">
        <p className="font-mono text-xs font-medium text-muted-foreground">connector status</p>
        <h1 className="mt-3 text-2xl font-medium tracking-tight">The catalog MCP connector is retired.</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Reference capture and reverify now run through agent skills and a deterministic browser evidence pipeline.
          This removes a transport layer without removing the catalog or its raw files.
        </p>
        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4 font-mono text-sm">
          https://oh-my-design.kr/&lt;reference-id&gt;/design.md
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/docs/en" className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
            Open skill documentation
          </Link>
          <Link href="/design-systems" className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium">
            Browse references
          </Link>
        </div>
      </div>
    </main>
  );
}
