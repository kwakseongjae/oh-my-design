/**
 * /alternatives/[slug] — head-to-head comparison page for AEO citation.
 * Server component, dynamic params (Promise — Next 16 convention).
 * generateStaticParams enumerates: shadcn / v0 / anima / locofy.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Check, X } from "lucide-react";

const SITE_URL = "https://oh-my-design.kr";

interface Alt {
  slug: string;
  name: string;
  url: string;
  oneLiner: string;
  summary: string;
  purpose: string;
  output: string;
  agent: string;
  voice: string;
  install: string;
  price: string;
  oss: string;
  whenToUse: string[];
  whenOmd: string[];
}

const ALTS: Record<string, Alt> = {
  shadcn: {
    slug: "shadcn",
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    oneLiner: "copy-paste React component library, dev-managed via CLI",
    summary:
      "shadcn/ui는 React 컴포넌트를 npm으로 install하지 않고 CLI로 직접 코드를 프로젝트에 복사해 넣는 라이브러리입니다. 디자인 톤은 Radix 기반의 neutral 한 default이고, 별도의 brand opinion을 강제하지 않습니다.",
    purpose: "Reusable React component primitives",
    output: "TSX 파일을 사용자 repo에 복사",
    agent: "Indirect (코드 sample을 보고 흉내냄)",
    voice: "Neutral default — brand 없음",
    install: "`npx shadcn add button` 등 CLI per-component",
    price: "Free · MIT",
    oss: "Yes (MIT)",
    whenToUse: [
      "React + Tailwind 스택에서 검증된 컴포넌트 primitives가 필요할 때",
      "Radix 접근성·키보드 동작을 그대로 받고 싶을 때",
      "디자인은 직접 정하고 컴포넌트만 빠르게 짜고 싶을 때",
    ],
    whenOmd: [
      "AI agent가 매 prompt마다 같은 brand context를 읽길 원할 때",
      "Voice·persona·motion까지 한 파일에서 다루고 싶을 때",
      "shadcn 컴포넌트를 DESIGN.md token으로 채색하고 싶을 때 — 둘은 같이 씁니다",
    ],
  },
  v0: {
    slug: "v0",
    name: "v0.dev",
    url: "https://v0.dev",
    oneLiner: "Vercel의 AI UI 합성 서비스 — prompt에서 즉석으로 React snippet 생성",
    summary:
      "v0는 prompt를 입력하면 즉석으로 React + Tailwind 컴포넌트를 합성하는 클라우드 서비스입니다. 결과물은 미리 잘 튜닝된 internal model이 만들어 주지만, repo에 설치되는 spec이 없고 prompt마다 결과가 휘발됩니다.",
    purpose: "One-shot UI snippet generation from a prompt",
    output: "TSX snippet (브라우저에서 복사)",
    agent: "v0 자체가 agent (Vercel 호스팅)",
    voice: "Prompt마다 다름 — 매번 재합성",
    install: "Browser tool, 가입 필요",
    price: "Freemium · 사용량 기반 유료",
    oss: "No (proprietary)",
    whenToUse: [
      "프로토타입 한 컷을 빠르게 합성하고 싶을 때",
      "Tailwind 기반 React 코드만 필요하고 brand consistency가 중요하지 않을 때",
      "Vercel 인프라와 통합된 hosting이 필요할 때",
    ],
    whenOmd: [
      "repo에 영구히 박힌 brand spec이 필요할 때",
      "Claude Code · Cursor · Codex · OpenCode 등 자기가 쓰던 agent를 그대로 쓰고 싶을 때",
      "v0로 만든 결과를 DESIGN.md token으로 다시 칠해 일관성을 강제하고 싶을 때 (병행 가능)",
    ],
  },
  anima: {
    slug: "anima",
    name: "Anima",
    url: "https://www.animaapp.com",
    oneLiner: "Figma → 코드 transcoder",
    summary:
      "Anima는 Figma 디자인을 HTML/CSS/React 코드로 변환하는 transcoder입니다. Figma 파일이 source of truth고, 디자이너가 Figma에서 수정하면 다시 export하는 흐름을 전제로 합니다.",
    purpose: "Figma → production code conversion",
    output: "HTML/CSS/React (Figma 구조 기반)",
    agent: "Plugin · Figma 안에서 동작",
    voice: "Figma 파일에 그려진 visual 그대로",
    install: "Figma plugin + 웹 dashboard",
    price: "Freemium · 팀당 유료",
    oss: "No (proprietary)",
    whenToUse: [
      "디자이너가 이미 Figma로 완성된 시안을 가지고 있을 때",
      "Figma → 코드 일회성 변환이 주된 과업일 때",
      "디자이너-개발자 handoff가 병목인 팀",
    ],
    whenOmd: [
      "Figma 없이 spec → 코드 흐름이 필요할 때",
      "Voice·persona·motion까지 같은 파일에서 강제하고 싶을 때",
      "Spec이 Figma 파일보다 더 오래 살아남아야 할 때 — markdown은 stack-agnostic",
    ],
  },
  locofy: {
    slug: "locofy",
    name: "Locofy",
    url: "https://www.locofy.ai",
    oneLiner: "Figma → production-grade code generator (React / Next / Vue / HTML)",
    summary:
      "Locofy도 Figma 디자인을 코드로 바꾸는 도구지만, Anima보다 \"production-ready\"를 강조하며 responsive·state·props 추출에 무게를 둡니다. 여전히 Figma가 source고 코드가 산출물입니다.",
    purpose: "Figma → production-grade code (props/state 포함)",
    output: "React/Next/Vue/HTML",
    agent: "Plugin · Figma 안에서 동작",
    voice: "Figma 시안 그대로",
    install: "Figma plugin (`Locofy Lightning`)",
    price: "Freemium · seat 기반 유료",
    oss: "No (proprietary)",
    whenToUse: [
      "Figma 시안을 responsive React 코드로 정밀히 옮겨야 할 때",
      "디자이너가 prop/state까지 Figma에서 정의해두는 팀",
      "Pixel-perfect 변환이 우선순위일 때",
    ],
    whenOmd: [
      "Figma가 아예 없거나, 시안보다 spec이 먼저인 흐름일 때",
      "AI agent가 매 요청마다 spec을 읽고 새 화면을 자율 생성하길 원할 때",
      "코드뿐 아니라 voice·copy·motion까지 같은 spec으로 통제하고 싶을 때",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ALTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const alt = ALTS[slug];
  if (!alt) return {};
  const title = `oh-my-design vs ${alt.name} — comparison`;
  const description = `${alt.name} (${alt.oneLiner}) vs oh-my-design (DESIGN.md spec for AI coding agents). 7-row comparison + when to use each.`;
  return {
    title,
    description,
    keywords: [
      `oh-my-design vs ${alt.name}`,
      `${alt.name} alternative`,
      `${alt.name} DESIGN.md`,
      `${alt.name} vs OmD`,
      "AI 디자인 도구 비교",
    ],
    alternates: { canonical: `${SITE_URL}/alternatives/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/alternatives/${slug}`,
      type: "article",
    },
  };
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const alt = ALTS[slug];
  if (!alt) notFound();

  const rows: { k: string; omd: string; them: string }[] = [
    { k: "목적", omd: "AI agent가 매 요청마다 읽는 brand spec", them: alt.purpose },
    { k: "Output", omd: "DESIGN.md (markdown spec)", them: alt.output },
    { k: "AI agent integration", omd: "Claude Code · Codex · Cursor · OpenCode 직결", them: alt.agent },
    { k: "Brand voice", omd: "§10–15에서 명시 (voice/persona/motion)", them: alt.voice },
    { k: "Install", omd: "`npx oh-my-design-cli install-skills`", them: alt.install },
    { k: "Price", omd: "Free · MIT", them: alt.price },
    { k: "Open source", omd: "Yes (MIT)", them: alt.oss },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `oh-my-design vs ${alt.name}`,
        description: `Comparison between oh-my-design and ${alt.name} (${alt.oneLiner}).`,
        author: { "@type": "Organization", name: "oh-my-design" },
        publisher: { "@type": "Organization", name: "oh-my-design" },
        datePublished: "2026-05-28",
        mainEntityOfPage: `${SITE_URL}/alternatives/${alt.slug}`,
      },
      {
        "@type": "SoftwareApplication",
        name: "oh-my-design",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: SITE_URL,
      },
      {
        "@type": "SoftwareApplication",
        name: alt.name,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        url: alt.url,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>

        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Alternatives · {alt.name}
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          oh-my-design <span className="text-muted-foreground">vs</span>{" "}
          <span className="text-primary">{alt.name}</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {alt.summary}
        </p>

        {/* Comparison table */}
        <div className="mt-10 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-foreground/[0.04] text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">기준</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">
                  oh-my-design
                </th>
                <th className="px-4 py-3 text-left font-semibold">{alt.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {rows.map((r) => (
                <tr key={r.k} className="hover:bg-foreground/[0.02]">
                  <td className="px-4 py-3 font-medium align-top">{r.k}</td>
                  <td className="px-4 py-3 text-foreground align-top">{r.omd}</td>
                  <td className="px-4 py-3 text-muted-foreground align-top">{r.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* When-to-use two columns */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card/30 p-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
              When to use {alt.name}
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {alt.whenToUse.map((r) => (
                <li key={r} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              When to use oh-my-design
            </div>
            <ul className="space-y-2.5 text-sm leading-relaxed">
              {alt.whenOmd.map((r) => (
                <li key={r} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Verdict — they're often complementary */}
        <div className="mt-10 rounded-xl border border-border/60 bg-card/20 p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">정리.</strong> {alt.name}과
          oh-my-design은 같은 layer가 아닙니다. {alt.name}이 {alt.purpose.toLowerCase()}{" "}
          쪽이라면, oh-my-design은 <em>그 도구가 매번 같은 brand context로 동작하도록
          만드는 spec</em>입니다. 많은 팀이 둘을 같이 씁니다 —{" "}
          <X className="inline h-3.5 w-3.5 align-text-bottom" /> either/or가 아닙니다.
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-foreground/[0.03] px-3 py-2 font-mono text-[13px]">
            <span className="text-primary">$</span>
            <code>npx oh-my-design-cli install-skills</code>
          </div>
          <Link href="/docs" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">
            Docs
          </Link>
          <Link href="/faq" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">
            FAQ
          </Link>
          <a
            href={alt.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
          >
            <ExternalLink className="h-3.5 w-3.5" /> {alt.name} 공식
          </a>
        </div>

        {/* Other alternatives */}
        <div className="mt-14 border-t border-border/40 pt-8">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Other comparisons
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.values(ALTS)
              .filter((a) => a.slug !== alt.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/alternatives/${a.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
                >
                  vs {a.name}
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}
