/**
 * /cli — the oh-my-design-cli product page. This is the header's primary
 * destination: it starts at the official docs and walks the whole argument —
 * what the CLI hands your coding agent, why that differs from a prompt or a
 * component kit, what the UI actually looks like, and how much of it you own
 * and can change in v2.0.0.
 *
 * Server component. Counts come from generated data so the page cannot drift
 * from the shipped package.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Check, Minus } from "lucide-react";
import { PRESET_TOTAL, PRESETS_BY_LAYER } from "@/data/presets.generated";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { PKG_VERSION } from "@/data/version.generated";
import { CliNav } from "./cli-nav";
import { CopyCommand } from "./copy-command";

const SITE_URL = "https://oh-my-design.kr";
const INSTALL = "npx oh-my-design-cli@latest";

export const metadata: Metadata = {
  title: "oh-my-design-cli — a design system your coding agent can hold",
  description:
    "Install a design system your coding agent derives from a declared philosophy: a portable DESIGN.md, tokens and component contracts with the decision behind every value, a preset floor, numbered anti-slop gates, and omd book to browse it all locally.",
  keywords: [
    "oh-my-design-cli",
    "AI design system CLI",
    "DESIGN.md",
    "Claude Code design skill",
    "shadcn alternative",
    "AI UI quality",
  ],
  alternates: { canonical: `${SITE_URL}/cli` },
  openGraph: {
    title: "oh-my-design-cli",
    description:
      "A design system your coding agent can hold — DESIGN.md, contracts, gates, and omd book.",
    url: `${SITE_URL}/cli`,
    type: "website",
  },
};

const OUTPUTS = [
  {
    title: "DESIGN.md",
    lede: "A portable contract, not a config file.",
    body: "Your philosophy with the sacrifices spelled out, a decision table where every choice carries an id, and tokens that point back at the decision that produced them. It stays useful pasted into a plain chat, and a designer can read it to find out why a value is what it is.",
    href: "/docs/en",
    hrefLabel: "Read the spec",
  },
  {
    title: "A design system, not a theme",
    lede: "Tokens, component contracts, and states.",
    body: "Every component ships an anatomy, a state matrix — including the states that deliberately do not apply and the reason — an accessibility contract, and the token slots your decisions fill. Contrast pairs are declared, so they can be measured rather than assumed.",
    href: "/presets",
    hrefLabel: `Browse ${PRESET_TOTAL} contracts`,
  },
  {
    title: "omd book",
    lede: "Your system, browsable on a local port.",
    body: "Run one command and read the system back: each token beside its decision, component state matrices with their reasons, contrast measured live against the pairs you declared, and which presets your build drew from. --static writes a single HTML file for handoff.",
    href: "/docs/en",
    hrefLabel: "See the command",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Philosophy first, values second",
    body: "The chain runs philosophy → decision table → tokens → component specs → layout grammar → build. A token value with no decision behind it fails a gate, so the system cannot quietly become a pile of improvised numbers.",
  },
  {
    title: "A floor made of validated contracts",
    body: `${PRESET_TOTAL} presets across four layers — fundamentals, primitives mapped to real shadcn/ui and Radix components with their ARIA APG patterns, screen genres, and reference-derived flavors. The agent selects and derives instead of inventing from zero.`,
  },
  {
    title: "Gates that name the failure",
    body: "Numbered anti-slop gates cover the things AI-generated UI gets wrong in the same way every time: serif fallbacks on Korean text, focus rings on mouse clicks, native select popups, disabled states faked with opacity, wide viewports left empty. Mechanically checkable ones must be grep-verified.",
  },
  {
    title: "Judged on screens, not source",
    body: "The build renders, a critique reads the rendered screens and produces a numbered punch list, and the repair happens inside the existing system. Source-only self-grading is what lets a broken screen score well.",
  },
  {
    title: "Provenance you can audit",
    body: `${REFERENCE_COUNT} company references ship with the package, quality-graded, with evidence for their claims. Unknown values stay absent instead of becoming plausible defaults — a missing brand fact is never filled in with a guess.`,
  },
  {
    title: "Files you own",
    body: "Everything above is markdown and JSON inside your repo. No daemon, no MCP server, no API key for the core workflows — inference stays in the coding-agent session you already pay for.",
  },
];

type Cell = boolean | "partial";

const COMPARISON: { label: string; prompt: Cell; kit: Cell; skill: Cell; omd: Cell }[] = [
  { label: "Consistent result across runs", prompt: false, kit: true, skill: "partial", omd: true },
  { label: "Looks like your product, not the library", prompt: "partial", kit: false, skill: "partial", omd: true },
  { label: "Every value traceable to a decision", prompt: false, kit: false, skill: false, omd: true },
  { label: "Accessibility contract per component", prompt: false, kit: true, skill: "partial", omd: true },
  { label: "Anti-slop gates by number", prompt: false, kit: false, skill: "partial", omd: true },
  { label: "Verified against rendered screens", prompt: false, kit: false, skill: false, omd: true },
  { label: "Portable spec you can hand to a designer", prompt: false, kit: false, skill: "partial", omd: true },
  { label: "Browse the system locally", prompt: false, kit: "partial", skill: false, omd: true },
];

const CASES = [
  {
    src: "/cli/commerce.jpg",
    title: "Home-interior commerce",
    body: "Bento home, three-cut galleries, rating distributions, magazine article wells.",
  },
  {
    src: "/cli/marketplace.jpg",
    title: "Local marketplace",
    body: "Dense scannable rows, status tokens, trust indicator with its basis, dimmed sold items.",
  },
  {
    src: "/cli/editorial.jpg",
    title: "Fashion editorial",
    body: "Image-dominant grid, ranking carousel with a linked list, honest sale-price hierarchy.",
  },
];

const CUSTOMIZE = [
  {
    title: "Rewrite the philosophy",
    body: "The stance and its sacrifices are yours to state. Change them and the decision table, the tokens, and the components follow — that is the whole point of deriving instead of theming.",
  },
  {
    title: "Fork or extend the presets",
    body: "Presets are markdown contracts in your repo. Add a genre your product needs, tighten a primitive to your accessibility bar, or drop one entirely and record why.",
  },
  {
    title: "Tune the gates",
    body: "Gates are a numbered list, not a black box. Raise a threshold, add a rule your team keeps re-learning in code review, and the next build has to answer for it.",
  },
  {
    title: "Bring your own references",
    body: "The catalog is data. Point the workflow at your own brand evidence and the derivation runs on that instead of a public reference.",
  },
];

function CellMark({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center" title="Yes">
        <Check className="h-4 w-4 text-primary" aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center" title="Partly">
        <Minus className="h-4 w-4 text-muted-foreground" aria-hidden />
        <span className="sr-only">Partly</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center text-muted-foreground/50" title="No">
      <span aria-hidden>·</span>
      <span className="sr-only">No</span>
    </span>
  );
}

export default function CliPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "oh-my-design-cli",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux, Windows",
    softwareVersion: PKG_VERSION,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    url: `${SITE_URL}/cli`,
    description:
      "A CLI that installs a derivable design system into your coding agent: DESIGN.md, component contracts, anti-slop gates, and a local design-system browser.",
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CliNav />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          <span>oh-my-design-cli</span>
          <span className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[10px] tracking-normal">
            v{PKG_VERSION}
          </span>
        </div>
        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          A design system your coding agent can actually hold.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Most AI UI work starts from a prompt and ends with a screen nobody can defend. This
          CLI installs the missing middle: a philosophy you declare, a decision table that
          turns it into tokens, component contracts with states and accessibility, gates that
          catch the failures AI keeps repeating — and{" "}
          <code className="font-mono text-[15px] text-foreground">omd book</code> to read the
          whole thing back.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CopyCommand command={INSTALL} />
          <Link
            href="/docs/en"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <BookOpen className="h-4 w-4" /> Official docs
          </Link>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          MIT. No API key, daemon, or MCP server for the core workflows — inference stays in
          the coding-agent session you already have.
        </p>
      </section>

      {/* What you get */}
      <section id="outputs" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">What you get back</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Three artifacts, all of them files in your repository.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {OUTPUTS.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card/30 p-5">
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm font-medium text-foreground/80">{item.lede}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {item.hrefLabel} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-border/60 bg-card/20 p-5">
          <p className="text-sm font-semibold">Read your own system</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-foreground/[0.04] p-4 font-mono text-[13px] leading-relaxed">
{`npx oh-my-design-cli@latest book            # http://localhost:6060
npx oh-my-design-cli@latest book --static ./out   # standalone HTML for handoff`}
          </pre>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Storybook renders stories. This renders the contract — including the contrast
            measured against the pairs your system promised, so a regression shows up as a
            number instead of a feeling.
          </p>
        </div>
      </section>

      {/* Why different */}
      <section id="different" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">Why it is different</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Six things that change what the agent produces.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card/30 p-5">
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">Next to the alternatives</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A component kit and a UI skill both solve real problems. They solve different ones.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-semibold">&nbsp;</th>
                <th className="px-3 py-3 text-center font-semibold">Prompt only</th>
                <th className="px-3 py-3 text-center font-semibold">Component kit</th>
                <th className="px-3 py-3 text-center font-semibold">Other UI skills</th>
                <th className="px-3 py-3 text-center font-semibold text-primary">oh-my-design</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.label} className="border-b border-border/60">
                  <td className="py-3 pr-4 text-muted-foreground">{row.label}</td>
                  <td className="px-3 py-3 text-center"><CellMark value={row.prompt} /></td>
                  <td className="px-3 py-3 text-center"><CellMark value={row.kit} /></td>
                  <td className="px-3 py-3 text-center"><CellMark value={row.skill} /></td>
                  <td className="px-3 py-3 text-center"><CellMark value={row.omd} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          shadcn/ui gives you the structure and it is genuinely good at that. The preset layer
          maps onto it rather than replacing it: the contract says which values must come from
          your decision table instead of a library default, so two products built on the same
          primitives stop looking like the same product.
        </p>
        <Link
          href="/alternatives/shadcn"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          The longer shadcn comparison <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      {/* What the UI looks like */}
      <section id="output-ui" className="mx-auto max-w-5xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">What comes out</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Three products built by the same harness from three different declared philosophies.
          Same gates, same preset floor — deliberately not the same face.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {CASES.map((item) => (
            <figure key={item.title} className="overflow-hidden rounded-xl border border-border/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={`${item.title} — a full page produced by the harness`}
                width={1000}
                height={1900}
                loading="lazy"
                className="block max-h-[420px] w-full object-cover object-top"
              />
              <figcaption className="border-t border-border/60 bg-card/30 p-4">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Each shipped with its own DESIGN.md and runs with{" "}
          <code className="font-mono text-[13px]">npm run dev</code>.
        </p>
      </section>

      {/* Customize */}
      <section id="customize" className="mx-auto max-w-4xl scroll-mt-20 px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">
          In v{PKG_VERSION}, all of it is yours to change
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A design system you cannot argue with is just someone else&apos;s taste with your logo on
          it. Every layer here is a file you can edit, and the build has to justify itself
          against whatever you put there.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {CUSTOMIZE.map((item) => (
            <div key={item.title} className="rounded-xl border border-border/60 bg-card/30 p-5">
              <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Why that matters: taste you cannot inspect cannot be improved. When the rule is
          written down and numbered, a disagreement becomes an edit instead of another round
          of &quot;make it feel more premium&quot;.
        </p>
      </section>

      {/* Explore */}
      <section className="mx-auto max-w-4xl px-4 py-14 pb-24 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight">Keep going</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            { href: "/docs/en", title: "Official documentation", body: "Install, doctor, workflows, and the DESIGN.md Core v2 spec." },
            { href: "/presets", title: `Preset catalog (${PRESET_TOTAL})`, body: `${PRESETS_BY_LAYER.primitives ?? 0} primitives, ${PRESETS_BY_LAYER.genres ?? 0} genre contracts, and the fundamentals every product needs.` },
            { href: "/design-systems", title: `Reference catalog (${REFERENCE_COUNT})`, body: "Quality-graded company design systems with evidence for their claims." },
            { href: "/benchmarks", title: "Benchmarks", body: "How the harness is measured, and what the numbers do and do not prove." },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-border/60 bg-card/30 p-5 transition-colors hover:border-foreground/20 hover:bg-card/60"
            >
              <p className="flex items-center gap-1.5 text-sm font-semibold">
                {item.title} <ArrowRight className="h-3.5 w-3.5" />
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
