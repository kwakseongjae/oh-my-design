import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const UPDATED = "July 11, 2026";

export const metadata: Metadata = {
  title: "Terms of Service — oh-my-design",
  description:
    "Plain-language terms for using oh-my-design — the open-source design-systems catalog, website, CLI, and reference skills.",
  alternates: {
    canonical: "/terms",
    languages: { en: "/terms", ko: "/terms/ko" },
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export default function TermsPage() {
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
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">Docs</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link href="/terms/ko" className="text-muted-foreground hover:text-foreground">한국어</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-24">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>

        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Terms
        </div>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-xs text-muted-foreground">Last updated: {UPDATED}</p>

        <Section title="The short version">
          <p>
            oh-my-design is a free, open-source project: a catalog of design-system
            references, this website, a CLI, and reference-collection skills.
            Use it freely and reasonably. It&apos;s provided &ldquo;as is,&rdquo; with no
            warranty, and these terms explain the basics.
          </p>
        </Section>

        <Section title="What we offer">
          <p>
            The website and catalog at oh-my-design.kr, the open-source CLI, and
            reference-collection skills. The former MCP package and public connector
            are retired and retained only as historical source code.
            There are no accounts and the service is free. We may change, pause, or
            discontinue any part at any time.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>abuse, overload, or attempt to disrupt the service (automated traffic is rate-limited; excessive use may be blocked);</li>
            <li>use it for anything unlawful, or to infringe others&apos; rights;</li>
            <li>misrepresent the catalog as your own product, or imply endorsement by the brands referenced or by Anthropic.</li>
          </ul>
        </Section>

        <Section title="Content, brands & intellectual property">
          <p>
            The catalog describes the design systems of real companies for
            educational and reference purposes. All brand names, logos, and
            trademarks belong to their respective owners; oh-my-design is{" "}
            <strong className="font-medium text-foreground">not affiliated with, sponsored by, or endorsed by</strong> any
            of them. Our own code is open-source under its repository license; our
            written descriptions are provided for reference and may be inaccurate or
            out of date.
          </p>
        </Section>

        <Section title="Retired connector">
          <p>
            The former read-only Claude connector is no longer an offered service.
            Skills and agents use local files or public raw DESIGN.md URLs instead.
            See the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">privacy policy</Link>{" "}
            for the treatment of historical aggregate records.
          </p>
        </Section>

        <Section title="No warranty & limitation of liability">
          <p>
            The service and catalog are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo;
            without warranties of any kind, including accuracy, availability, or
            fitness for a particular purpose. To the maximum extent permitted by law,
            oh-my-design and its maintainer are not liable for any indirect,
            incidental, or consequential damages arising from use of the service.
          </p>
        </Section>

        <Section title="Changes & contact">
          <p>
            We may update these terms; we&apos;ll change the date above when we do.
            Questions? Email{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">
              gkffhdnls13@gmail.com
            </a>
            . Korean users can read the{" "}
            <Link href="/terms/ko" className="underline underline-offset-2 hover:text-foreground">
              Korean terms
            </Link>
            .
          </p>
        </Section>
      </article>
    </div>
  );
}
