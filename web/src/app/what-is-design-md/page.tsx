/**
 * /what-is-design-md — definitional page claiming the term "DESIGN.md".
 * Server component, single Article+DefinedTerm @graph JSON-LD.
 * Target: ~700-900 words, AEO citation.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileCode, ExternalLink } from "lucide-react";
import { REFERENCE_COUNT } from "@/lib/catalog-count";

const SITE_URL = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "What is DESIGN.md? — portable design context for people and AI",
  description:
    "DESIGN.md는 프로젝트 루트에 두는 휴먼·AI 공용 디자인 스펙입니다. Google의 공개 규격과 OmD Core v2의 관계, 7개 portable section, typed System Graph, 기존 파일 마이그레이션, design token·Figma와의 차이를 설명합니다.",
  keywords: [
    "DESIGN.md",
    "design.md",
    "DESIGN.md 뜻",
    "DESIGN.md definition",
    "Google Stitch DESIGN.md",
    "OmD spec",
    "AI 디자인 스펙",
    "tailwind config vs DESIGN.md",
    "design tokens vs DESIGN.md",
  ],
  alternates: { canonical: `${SITE_URL}/what-is-design-md` },
  openGraph: {
    title: "What is DESIGN.md?",
    description:
      "Definition, origin, and the vendor-neutral DESIGN.md Core v2 contract, with migration and comparison guidance.",
    url: `${SITE_URL}/what-is-design-md`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/what-is-design-md#term`,
      name: "DESIGN.md",
      description:
        "A portable Markdown design contract kept at a project root. It gives people and AI tools explicit experience, foundation, component, layout, locale, asset, state, and governance decisions without requiring a particular vendor or framework.",
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "oh-my-design glossary",
        url: `${SITE_URL}/docs/en`,
      },
      url: `${SITE_URL}/what-is-design-md`,
    },
    {
      "@type": "Article",
      headline: "What is DESIGN.md?",
      description:
        "Definition, origin, and the portable DESIGN.md Core v2 contract.",
      author: { "@type": "Organization", name: "oh-my-design" },
      publisher: { "@type": "Organization", name: "oh-my-design" },
      datePublished: "2026-05-28",
      dateModified: "2026-08-12",
      mainEntityOfPage: `${SITE_URL}/what-is-design-md`,
    },
  ],
};

const SAMPLE = `# Acme Design System

<!-- design-md:section experience -->
## 1. Experience
Help operations teams review consequential changes without losing context.

<!-- design-md:section foundations -->
## 2. Foundations
- **Action:** \`#2457e6\` — interactive emphasis only.
- **Text:** \`#17181c\` on \`#ffffff\` — at least 4.5:1 contrast.

<!-- design-md:section typography-assets -->
## 3. Typography & Assets
- Body: 16px / 1.5. Do not present an unverified font as the project font.

<!-- design-md:section components-states -->
## 4. Components & States
- Commit actions support default, focus-visible, disabled, loading, error, and success.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms
- Preserve task order at 320px and 200% reflow.

<!-- design-md:section content-locales -->
## 6. Content & Locales
- Name the affected object and the recovery action.

<!-- design-md:section governance -->
## 7. Governance
- Omit the smallest unresolved value; never replace it with a plausible default.
`;

export default function WhatIsDesignMdPage() {
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
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">Docs</Link>
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
          Definition · DefinedTerm
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          What is <code className="font-mono text-[0.85em]">DESIGN.md</code>?
        </h1>

        {/* Definition box */}
        <div className="mt-8 rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            <FileCode className="h-3.5 w-3.5" /> Definition
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            <strong>DESIGN.md</strong>는 프로젝트 루트에 두는 단일 마크다운 파일로,
            브랜드의 시각·언어·움직임을 한 곳에 모은 디자인 스펙입니다. AI coding agent가
            UI를 만들 때 함께 읽는 portable contract로 동작하며, 토큰뿐 아니라
            experience·state·locale·asset·governance까지 포함할 수 있습니다.
          </p>
          <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>• Experience·foundations·typography/assets·components/states</li>
            <li>• Layout/platforms·content/locales·governance</li>
            <li>• 사람과 agent 모두 읽을 수 있는 markdown 한 파일</li>
            <li>• 선택적 System Graph와 provenance는 sidecar에 두고, visible file에는 도구 메타데이터를 두지 않음</li>
          </ul>
        </div>

        {/* Origin */}
        <h2 className="mt-14 text-2xl sm:text-3xl font-bold tracking-tight">
          기원과 호환성 — Google 규격과 Core v2
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          Google은 DESIGN.md를 사람이 읽는 prose와 구조화된 design decisions를 함께 담는
          공개 규격으로 발전시키고 있습니다. 원문과 도구는{" "}
          <a
            href="https://stitch.withgoogle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-foreground"
          >
            Stitch
          </a>
          에서 확인할 수 있습니다. OmD는 이 규격을 공식 소유하거나 동일 규격이라고
          주장하지 않습니다. 대신 legacy Google/Stitch 문서를 읽고 내보낼 수 있는
          compatibility profile로 취급합니다.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          <strong className="text-foreground"> DESIGN.md Core v2</strong>는 특정 도구의
          이름이나 검증 메타데이터를 visible file에서 제거하고, 7개의 stable semantic
          anchor로 제품 의도와 실행 가능한 시스템 결정을 정리합니다. 정밀한 token,
          component, evidence, coverage는 선택적 System Graph에 두되 DESIGN.md 한 파일만
          전달해도 Claude Design, Open Design, generic chat이 이해할 수 있어야 합니다.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          전체 스펙은{" "}
          <a
            href="https://github.com/kwakseongjae/oh-my-design/blob/main/spec/design-md-core-v2.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-foreground"
          >
            spec/design-md-core-v2.md
          </a>
          에서 읽을 수 있고, {REFERENCE_COUNT} 실제 회사의 DESIGN.md 예시는{" "}
          <Link href="/design-systems" className="underline underline-offset-4 text-foreground">
            /design-systems
          </Link>
          에 있습니다.
        </p>

        {/* Comparison table */}
        <h2 className="mt-14 text-2xl sm:text-3xl font-bold tracking-tight">
          비슷한 것들과의 비교
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          DESIGN.md는 흔히{" "}
          <code className="text-[13px] font-mono">tailwind.config.js</code>, 디자인 토큰
          JSON, Figma tokens와 혼동됩니다. 핵심 차이는 <em>무엇을 담느냐</em>와{" "}
          <em>누가 읽느냐</em>입니다.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-border/60">
          <table className="w-full text-sm">
            <thead className="bg-foreground/[0.04] text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">기준</th>
                <th className="px-4 py-3 text-left font-semibold">DESIGN.md</th>
                <th className="px-4 py-3 text-left font-semibold">tailwind.config.js</th>
                <th className="px-4 py-3 text-left font-semibold">Design tokens JSON</th>
                <th className="px-4 py-3 text-left font-semibold">Figma tokens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {[
                ["포맷", "Markdown", "JS object", "JSON", "Figma plugin/JSON"],
                ["주 독자", "AI agent + 사람", "Tailwind 컴파일러", "Style Dictionary 등 변환기", "디자이너"],
                ["토큰 포함", "Yes", "Yes", "Yes", "Yes"],
                ["Experience·states·locales", "Yes", "No", "No", "Partial"],
                ["코드 산출물", "No (spec only)", "CSS classes", "CSS/JS/iOS/Android 변환", "Figma 스타일"],
                ["스택 의존성", "Stack-agnostic", "Tailwind 종속", "변환기 종속", "Figma 종속"],
                ["수명", "스택보다 길게 유지", "Tailwind 버전 따라감", "툴체인 따라감", "Figma 따라감"],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-foreground/[0.02]">
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={
                        i === 0
                          ? "px-4 py-3 font-medium"
                          : i === 1
                          ? "px-4 py-3 font-medium text-primary"
                          : "px-4 py-3 text-muted-foreground"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sample */}
        <h2 className="mt-14 text-2xl sm:text-3xl font-bold tracking-tight">
          최소 DESIGN.md 예시
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Visible YAML이나 vendor metadata가 없는 7-section Portable Core 예시입니다. 현재
          {REFERENCE_COUNT}개 catalog 원본은 migration window 동안 legacy reader로도
          보존되며, Builder download는 Core v2로 투영됩니다. 형식은 Core이지만
          primary task 근거가 없는 reference는 validator에서 structural-only로 남습니다.
          전체 예시는{" "}
          <Link href="/design-systems" className="underline underline-offset-4 text-foreground">
            /design-systems
          </Link>
          {" "}각 카드를 클릭하세요.
        </p>
        <pre className="mt-5 overflow-x-auto rounded-xl border border-border/60 bg-foreground/[0.02] p-5 text-[12.5px] leading-relaxed font-mono">
          <code>{SAMPLE}</code>
        </pre>

        {/* Public .md endpoints — ties the definition to the fetchable artifacts */}
        <h2 className="mt-14 text-2xl sm:text-3xl font-bold tracking-tight">
          에이전트가 바로 fetch하는 공개 <code className="font-mono text-[0.8em]">.md</code>
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          카탈로그의 모든 레퍼런스는 <strong className="text-foreground">raw 마크다운</strong>으로
          공개돼 있어, AI 코딩 에이전트(Claude Code 등)가 JS 렌더링 없이 DESIGN.md를 그대로
          가져올 수 있습니다. URL 규칙은{" "}
          <code className="text-[13px] font-mono">oh-my-design.kr/&lt;id&gt;/design.md</code> —{" "}
          <a
            href="https://vercel.com/design.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-foreground"
          >
            vercel.com/design.md
          </a>
          와 같은 형태입니다.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["toss", "stripe", "vercel", "notion"].map((id) => (
            <li key={id}>
              <a
                href={`/${id}/design.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border/60 bg-card/40 px-3 py-2 font-mono text-xs hover:bg-accent"
              >
                /{id}/design.md
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
          전체 목록(머신리더블 인덱스)은{" "}
          <a href="/llms.txt" className="underline underline-offset-4 text-foreground">
            /llms.txt
          </a>
          에 있고, 사람이 보는 페이지는{" "}
          <Link href="/design-systems" className="underline underline-offset-4 text-foreground">
            /design-systems
          </Link>
          입니다.
        </p>

        {/* CTAs */}
        <div className="mt-14 rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">내 프로젝트에 적용하려면</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            한 줄로 skill + specialist roles를 설치하고 자연어로 Core v2 디자인 시스템을 부트스트랩합니다.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-foreground/[0.03] px-3 py-2 font-mono text-sm">
            <span className="text-primary">$</span>
            <code>npx oh-my-design-cli@latest</code>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/docs/en" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">
              Docs
            </Link>
            <Link href="/builder" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">
              Try the builder
            </Link>
            <Link href="/faq" className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent">
              FAQ
            </Link>
            <a
              href="https://www.npmjs.com/package/oh-my-design-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" /> npm
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
