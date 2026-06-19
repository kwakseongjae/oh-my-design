import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const MCP_URL = "https://oh-my-design.kr/api/mcp";

export const metadata: Metadata = {
  title: "Claude connector (MCP) — oh-my-design",
  description:
    "Add the oh-my-design Claude connector to search, browse, and fetch 286 real brand design systems in chat. Read-only, no account, no auth.",
  alternates: { canonical: "/docs/connector" },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Tool({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <li>
      <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">{name}</code>{" "}
      — {children}
    </li>
  );
}

export default function ConnectorDocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-7 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-7 hidden dark:block" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">Docs</Link>
            <Link href="/design-systems" className="text-muted-foreground hover:text-foreground">Catalog</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-24">
        <Link
          href="/docs"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Docs
        </Link>

        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Claude connector
        </div>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Use oh-my-design inside Claude
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A read-only Claude connector (MCP) over the oh-my-design catalog of 286
          real brand design systems. Search by vibe, browse by country/category,
          and fetch a brand&apos;s full <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">DESIGN.md</code> —
          without leaving chat. No account, no auth.
        </p>

        <Section title="Server URL">
          <p>Add this as a custom connector in Claude:</p>
          <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-3 font-mono text-xs text-foreground">
            {MCP_URL}
          </pre>
        </Section>

        <Section title="Add it to Claude">
          <ol className="ml-4 list-decimal space-y-1.5">
            <li>In Claude (web or desktop), open <strong className="font-medium text-foreground">Settings → Connectors</strong>.</li>
            <li>Click <strong className="font-medium text-foreground">Add custom connector</strong>.</li>
            <li>Paste the server URL above. No authentication is required.</li>
            <li>Enable it, then use the <strong className="font-medium text-foreground">+</strong> in the chat composer to call it.</li>
          </ol>
        </Section>

        <Section title="Tools">
          <ul className="ml-4 list-disc space-y-1.5">
            <Tool name="list_references">
              list/filter the catalog by country (KR/US/JP/TW/…), category
              (fintech/ecommerce/ai/…), or whether a brand publishes an official
              design system.
            </Tool>
            <Tool name="search_by_vibe">
              find brands matching a described mood/vibe (semantic search), each
              with a permalink.
            </Tool>
            <Tool name="get_design_md">
              fetch a brand&apos;s full DESIGN.md — color, typography, components,
              spacing, motion, voice — with a provenance permalink.
            </Tool>
          </ul>
          <p>All tools are read-only.</p>
        </Section>

        <Section title="Example prompts">
          <ul className="ml-4 list-disc space-y-1.5">
            <li>&ldquo;List the Korean fintech design references in the oh-my-design catalog.&rdquo;</li>
            <li>&ldquo;Find brands in oh-my-design with a calm, editorial B2B vibe and show their permalinks.&rdquo;</li>
            <li>&ldquo;Fetch the full DESIGN.md for &lsquo;stripe&rsquo; from oh-my-design and summarize its color and typography.&rdquo;</li>
          </ul>
        </Section>

        <Section title="Troubleshooting">
          <ul className="ml-4 list-disc space-y-1.5">
            <li><strong className="font-medium text-foreground">No tools appear after adding it:</strong> confirm the URL is exactly <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">https://oh-my-design.kr/api/mcp</code> (no trailing path), then remove and re-add the connector.</li>
            <li><strong className="font-medium text-foreground">A vibe search returns nothing:</strong> try a broader phrase, or use <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">list_references</code> to browse by country/category.</li>
            <li><strong className="font-medium text-foreground">&ldquo;Unknown reference id&rdquo;:</strong> ids are lowercase slugs (e.g. <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">toss</code>); call <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">list_references</code> to find valid ids.</li>
            <li><strong className="font-medium text-foreground">Requests start failing (HTTP 429):</strong> the public endpoint is rate-limited per IP — wait about a minute and retry.</li>
            <li>Still stuck? Open an issue at{" "}
              <a href="https://github.com/kwakseongjae/oh-my-design/issues" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">GitHub</a>.</li>
          </ul>
        </Section>

        <Section title="Privacy">
          <p>
            The connector is read-only and stores no personal data — see the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">privacy policy</Link>.
            It reads only our public catalog and never accesses your Claude memory,
            history, or files. Prefer a fully offline, zero-telemetry setup? Use the{" "}
            <a href="https://www.npmjs.com/package/oh-my-design-mcp" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              oh-my-design-mcp
            </a>{" "}
            npm package locally instead.
          </p>
        </Section>
      </article>
    </div>
  );
}
