import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ManageConsentButton } from "@/components/manage-consent-button";

const UPDATED = "June 18, 2026";

export const metadata: Metadata = {
  title: "Privacy — oh-my-design",
  description:
    "What little oh-my-design collects — anonymous analytics, no accounts, no ads — in plain language.",
  alternates: {
    canonical: "/privacy",
    languages: { en: "/privacy", ko: "/privacy/ko" },
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
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
            <Link href="/privacy/ko" className="text-muted-foreground hover:text-foreground">한국어</Link>
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
          Privacy
        </div>
        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-xs text-muted-foreground">Last updated: {UPDATED}</p>

        <Section title="The short version">
          <p>
            oh-my-design is an open-source tool with no accounts and no sign-up.
            We don&apos;t sell your data and we don&apos;t run ads. This page
            explains the little we do collect — anonymous analytics, to learn
            what&apos;s useful — in plain language.
          </p>
        </Section>

        <Section title="Who we are">
          <p>
            oh-my-design is maintained by an individual. You can reach us any
            time at{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">
              gkffhdnls13@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section title="What we collect & why">
          <p>
            We never ask for your name, email, or an account. We collect
            anonymous usage analytics — which pages and references you view, and
            actions like select / generate / download / copy — to learn
            what&apos;s useful and improve the tool. We also log JavaScript
            errors and scroll depth to fix bugs.
          </p>
          <p>
            We do <strong className="font-medium text-foreground">not</strong>{" "}
            collect your IP address in Mixpanel, and we never store it in our own
            counters.
          </p>
        </Section>

        <Section title="Cookies & identifiers">
          <p>
            Google Analytics sets a cookie (<code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">_ga</code>) to count
            visits. Mixpanel stores a random ID in your browser&apos;s local
            storage. Neither identifies you personally. Our own popularity
            counters store only an event name and a reference ID — nothing about
            you.
          </p>
        </Section>

        <Section title="Who processes the data">
          <p>
            We use <strong className="font-medium text-foreground">Google Analytics</strong> and{" "}
            <strong className="font-medium text-foreground">Mixpanel</strong> for analytics, plus{" "}
            <strong className="font-medium text-foreground">Vercel</strong> and{" "}
            <strong className="font-medium text-foreground">Upstash</strong> for hosting and counters. We also use{" "}
            <strong className="font-medium text-foreground">Google Search Console</strong> to see aggregated, anonymized search
            performance (no personal data).
          </p>
          <p>
            These providers operate in the <strong className="font-medium text-foreground">United States</strong>, so some
            anonymous analytics data is processed on servers outside Korea and
            the EEA. Google LLC self-certifies under the EU–US Data Privacy
            Framework; transfers to Mixpanel rely on EU Standard Contractual
            Clauses.
          </p>
        </Section>

        <Section title="Claude connector (MCP)">
          <p>
            oh-my-design offers a read-only{" "}
            <strong className="font-medium text-foreground">Claude connector</strong> at{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">oh-my-design.kr/api/mcp</code>.
            When you use it inside Claude, Claude&apos;s servers call our endpoint
            to search and fetch entries from our public design-systems catalog.
          </p>
          <p>
            We log only{" "}
            <strong className="font-medium text-foreground">anonymous, aggregate counts</strong> — which
            tool was called and, for a fetch, which public reference id — to
            understand usage. We do{" "}
            <strong className="font-medium text-foreground">not</strong> log the text of your search
            queries, your IP, or any account; there is no sign-in.
          </p>
          <p>
            The connector only reads our own public catalog. It does{" "}
            <strong className="font-medium text-foreground">not</strong> access or store your Claude
            memory, conversation history, prompts, or files. It is read-only and
            requires no authentication.
          </p>
        </Section>

        <Section title="Your choices">
          <p>
            In the EU, UK, and Switzerland we ask before turning analytics on —
            you&apos;ll see a banner. Choose <strong className="font-medium text-foreground">Decline</strong> and no
            analytics cookies or identifiers are set.
          </p>
          <p>
            Changed your mind, anywhere?{" "}
            <ManageConsentButton label="Reopen the analytics choice" /> — Decline
            there turns analytics back off. You can also opt out via your
            browser&apos;s cookie settings or the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">
              Google Analytics opt-out add-on
            </a>
            .
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            Google Analytics keeps event data for up to 14 months. Mixpanel
            retains analytics data according to its plan&apos;s retention policy.
            Our own counters keep only running totals, with no personal data.
          </p>
        </Section>

        <Section title="Your rights, children & changes">
          <p>
            Email{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">
              gkffhdnls13@gmail.com
            </a>{" "}
            to ask about this data or request deletion. EU/UK users have GDPR
            rights (access, deletion, objection, withdrawing consent); Korean
            users have rights under PIPA — see the{" "}
            <Link href="/privacy/ko" className="underline underline-offset-2 hover:text-foreground">
              Korean policy
            </Link>
            . This site isn&apos;t directed at children under 14. If anything
            here changes, we&apos;ll update this page and the date at the top.
          </p>
        </Section>
      </article>
    </div>
  );
}
