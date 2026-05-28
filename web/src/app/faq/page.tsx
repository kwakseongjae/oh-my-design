/**
 * /faq — AEO-targeted Q&A. Server component, page-level metadata, FAQPage
 * JSON-LD. 18 questions across 4 sections. Self-contained (no shared
 * v2 nav reuse — avoids client-comp wrap so metadata export is valid).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const SITE_URL = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "FAQ — oh-my-design (DESIGN.md, OmD, vibe coding)",
  description:
    "DESIGN.md과 oh-my-design에 대한 자주 묻는 질문 18개. 설치, AI agent 호환성, shadcn/v0/Anima/Locofy와의 차이, MCP, 멀티턴 디자인, 한국어 voice preset까지.",
  keywords: [
    "DESIGN.md FAQ",
    "oh-my-design FAQ",
    "OmD FAQ",
    "vibe coding 한국어",
    "shadcn vs DESIGN.md",
    "v0 vs DESIGN.md",
    "AI 디자인 시스템",
    "Claude Code 디자인",
    "Cursor 디자인 시스템",
  ],
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "FAQ — oh-my-design",
    description:
      "DESIGN.md / OmD / vibe coding · 18 questions answered for AI coding agents.",
    url: `${SITE_URL}/faq`,
    type: "article",
  },
};

interface QA {
  q: string;
  a: string;
}

interface QASection {
  title: string;
  subtitle: string;
  items: QA[];
}

const SECTIONS: QASection[] = [
  {
    title: "OmD 기본",
    subtitle: "Fundamentals",
    items: [
      {
        q: "DESIGN.md가 뭔가요?",
        a: "DESIGN.md는 프로젝트 루트에 두는 단일 마크다운 파일로, 브랜드 색·타이포·컴포넌트·voice·페르소나·모션까지 모두 담는 디자인 스펙입니다. AI coding agent가 UI를 만들 때 가장 먼저 읽는 권위 있는 컨텍스트로 동작합니다. Google Stitch의 9-섹션 토큰 포맷에 OmD가 브랜드 철학 6-섹션(§10–15)을 더해 총 15-섹션 구조를 갖습니다.",
      },
      {
        q: "oh-my-design은 뭔가요?",
        a: "oh-my-design(OmD)은 DESIGN.md 스펙 + 그 스펙대로 동작하는 skill·sub-agent 번들입니다. `npx oh-my-design-cli install-skills` 한 줄로 Claude Code·Codex·Cursor·OpenCode에 15개 skill + 16개 sub-agent를 설치합니다. /docs 페이지에서 전체 파이프라인을 볼 수 있습니다.",
      },
      {
        q: "일반 디자인 시스템과 뭐가 다른가요?",
        a: "보통의 디자인 시스템은 사람이 읽고 컴포넌트를 직접 구현하기 위한 문서지만, DESIGN.md는 AI agent가 매 prompt마다 읽고 코드로 번역하는 단일 source of truth입니다. 토큰뿐 아니라 voice·tone·persona·motion까지 한 파일에 묶어 agent가 \"브랜드 없는 평균 UI\"로 회귀하지 않도록 막습니다.",
      },
      {
        q: "어떤 AI agent와 호환되나요?",
        a: "Claude Code, Codex, OpenCode, Cursor가 1차 타깃이고 Gemini CLI도 동작합니다. skill 파일은 agent-agnostic markdown이라 새 agent가 등장해도 동일한 DESIGN.md를 그대로 읽을 수 있도록 설계됐습니다. Cursor는 `.cursor/rules/omd-design.mdc` shim을 통해 진입합니다.",
      },
      {
        q: "Vibe coding이 뭔가요?",
        a: "Vibe coding은 정확한 코드 지시 대신 \"이런 느낌으로 만들어줘\"라는 자연어 의도만 던지고 agent가 알아서 구현하는 흐름을 가리킵니다. 이 방식은 빠르지만 brand context가 없으면 결과물이 평균값에 수렴합니다. DESIGN.md는 vibe coding의 그 \"느낌\"을 검증 가능한 형태로 고정해 두는 장치입니다.",
      },
    ],
  },
  {
    title: "Install & Use",
    subtitle: "설치와 사용",
    items: [
      {
        q: "어떻게 설치하나요?",
        a: "프로젝트 루트에서 `npx oh-my-design-cli install-skills`만 실행하면 됩니다. skill·sub-agent·hook·100+ reference DESIGN.md가 모두 설치되며 외부 API 호출은 발생하지 않습니다. 설치 후 agent를 한 번 재시작하면 새 skill이 로드됩니다. 자세한 흐름은 /docs를 참조하세요.",
      },
      {
        q: "Cursor에서도 됩니까?",
        a: "네. `install-skills`가 `.cursor/rules/omd-design.mdc` shim을 함께 작성하므로 Cursor가 매 요청마다 DESIGN.md를 읽도록 강제됩니다. skill의 핵심 로직은 SKILL.md markdown이라 Cursor·Claude Code·Codex 모두 동일한 결과를 냅니다.",
      },
      {
        q: "무료인가요?",
        a: "네. MIT 라이선스 오픈소스이며 npm 패키지 하나로 끝납니다. 유료 tier는 존재하지 않고 만들 계획도 없습니다. 100+ reference는 각 회사 자산이며 교육용 reference로만 수록돼 있습니다.",
      },
      {
        q: "제 디자인이 학습 데이터로 넘어가나요?",
        a: "아니요. OmD는 추론 layer가 아니라 skill·markdown 파일을 사용자 머신에 복사하는 CLI일 뿐입니다. 모든 디자인 생성은 사용자가 이미 쓰고 있는 AI agent(Claude Code, Cursor 등) 안에서 일어나고, OmD 자체는 어떤 텔레메트리도 수집하지 않습니다.",
      },
    ],
  },
  {
    title: "vs Alternatives",
    subtitle: "대안 비교",
    items: [
      {
        q: "shadcn/ui와 어떻게 다른가요?",
        a: "shadcn/ui는 React 컴포넌트를 복사-붙여넣기하는 라이브러리고, brand opinion이 거의 없습니다. DESIGN.md는 컴포넌트가 아니라 \"브랜드가 어떻게 생기고·들리고·움직여야 하는가\"를 정의하는 스펙입니다. 둘은 충돌하지 않고 함께 씁니다 — shadcn 컴포넌트를 DESIGN.md token으로 채색하는 식이 가장 흔합니다.",
      },
      {
        q: "v0.dev와는요?",
        a: "v0는 prompt에서 즉석으로 UI snippet을 합성하는 서비스로, 설치되는 spec이 없고 결과물은 prompt마다 휘발됩니다. DESIGN.md는 repo에 영구히 박혀 매 요청마다 같은 brand context를 강제합니다. v0로 만든 결과물을 DESIGN.md token으로 다시 칠하는 워크플로도 가능합니다.",
      },
      {
        q: "Anima·Locofy와 어떻게 다른가요?",
        a: "Anima·Locofy는 Figma 디자인을 코드로 변환하는 transcoder입니다. Figma 파일이 source of truth고 코드는 산출물입니다. DESIGN.md는 그 반대로 markdown spec이 source of truth고 코드·Figma·UI 모두 산출물입니다. Figma → 코드 일회성 변환이 아니라 매 요청마다 갱신되는 살아있는 spec입니다.",
      },
      {
        q: "Google Stitch와는 어떤 관계인가요?",
        a: "Google Stitch가 DESIGN.md 포맷(9 sections — color, typography, components 등)을 먼저 제안했고, OmD는 그 위에 §10–15 브랜드 철학 layer 6개 섹션을 더한 superset입니다. Stitch가 만든 DESIGN.md는 그대로 OmD에서도 valid하고, OmD를 쓰면 voice·persona·motion까지 같은 파일 안에서 다룰 수 있습니다.",
      },
    ],
  },
  {
    title: "고급 사용",
    subtitle: "Advanced",
    items: [
      {
        q: "자체 brand를 reference로 추가할 수 있나요?",
        a: "네. `/omd-add-reference <URL>` skill이 3-tier 검증 파이프라인으로 라이브 사이트를 읽어 `references/<id>/DESIGN.md`를 새로 만듭니다. Tier 1은 공식 design system, Tier 2는 보조 inspect, Tier 3은 cross-check입니다. 자체 brand면 자기 회사 사이트 URL만 넘기면 됩니다.",
      },
      {
        q: "DESIGN.md를 직접 손으로 고쳐도 되나요?",
        a: "권장합니다. DESIGN.md는 사람과 agent 모두 읽도록 만든 markdown입니다. 직접 수정한 부분은 `omd-sync`가 보존하고, agent가 새로 생성한 부분만 갱신됩니다. 별도 빌드 단계는 없습니다 — 저장 즉시 다음 prompt부터 반영됩니다.",
      },
      {
        q: "MCP server가 따로 있나요?",
        a: "OmD 자체는 MCP server를 띄우지 않습니다. skill·sub-agent·hook으로 동작하는 게 의도된 아키텍처입니다. 다만 `omd-3d-blender` 같은 일부 sub-agent가 외부 MCP server(blender-mcp 등) 설치를 안내할 수 있습니다.",
      },
      {
        q: "한 번에 화면 여러 개를 멀티턴으로 디자인할 수 있나요?",
        a: "네. `/omd-harness <task>` 명령이 10-phase 파이프라인을 돌면서 16개 sub-agent를 dispatch하고, Discovery·Components·Handoff 3개 checkpoint에서 사용자 확인을 받습니다. 각 phase의 산출물은 `.omd/runs/<id>/`에 남아 다음 턴에서 그대로 재사용됩니다.",
      },
      {
        q: "한국어 voice preset이 있나요?",
        a: "있습니다. `omd-kr-writer` skill이 12개 한국어 voice preset(toss-tech-design / karrot-neighborly / brunch-maker / naver-d2 / biz-report / academic 등)을 가지고 있고, 각 preset마다 9-field voice spec이 정의돼 있습니다. \"토스 톤으로\", \"당근 톤으로\" 같은 자연어로 호출하면 됩니다.",
      },
    ],
  },
];

function flatQA() {
  return SECTIONS.flatMap((s) => s.items);
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flatQA().map((qa) => ({
    "@type": "Question",
    name: qa.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: qa.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="oh-my-design"
              className="h-6 sm:h-7 block dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="oh-my-design"
              className="h-6 sm:h-7 hidden dark:block"
            />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/design-systems"
              className="text-muted-foreground hover:text-foreground"
            >
              Design systems
            </Link>
            <a
              href="https://github.com/kwakseongjae/oh-my-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          FAQ · 18 questions
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          DESIGN.md, OmD, vibe coding
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          오해되기 쉬운 질문을 한 곳에 모았습니다. 설치 흐름은{" "}
          <Link href="/docs" className="underline underline-offset-4">
            /docs
          </Link>
          , 100+ 레퍼런스는{" "}
          <Link
            href="/design-systems"
            className="underline underline-offset-4"
          >
            /design-systems
          </Link>
          를 참고하세요.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24 space-y-14">
        {SECTIONS.map((sec) => (
          <div key={sec.title}>
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {sec.title}
              </h2>
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                {sec.subtitle} · {sec.items.length}
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/40">
              {sec.items.map((qa, i) => (
                <details
                  key={qa.q}
                  className="group border-b border-border/40 last:border-b-0 px-5 py-4 open:bg-foreground/[0.02]"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm sm:text-[15px] font-semibold">
                    <span>{qa.q}</span>
                    <span className="ml-auto inline-flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {qa.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-border/60 bg-card/30 p-6 sm:p-8">
          <h3 className="text-lg font-semibold">아직 답을 못 찾았나요?</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            GitHub 이슈로 알려주시면 이 페이지에 답을 추가합니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="https://github.com/kwakseongjae/oh-my-design/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open issue
            </a>
            <a
              href="https://www.npmjs.com/package/oh-my-design-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
            >
              npm
            </a>
            <Link
              href="/builder"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-accent"
            >
              Try the builder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
