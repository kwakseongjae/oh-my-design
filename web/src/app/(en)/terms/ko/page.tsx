import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const UPDATED = "2026년 7월 11일";

export const metadata: Metadata = {
  title: "이용약관 — oh-my-design",
  description:
    "oh-my-design(오픈소스 디자인 시스템 카탈로그·웹사이트·CLI·레퍼런스 수집 스킬) 이용약관을 쉬운 말로 안내합니다.",
  alternates: {
    canonical: "/terms/ko",
    languages: { en: "/terms", ko: "/terms/ko" },
  },
};

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-semibold tracking-tight text-foreground">
        제{n}조 ({title})
      </h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export default function TermsKoPage() {
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
            <Link href="/docs/ko" className="text-muted-foreground hover:text-foreground">Docs</Link>
            <Link href="/privacy/ko" className="text-muted-foreground hover:text-foreground">개인정보</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">EN</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-24">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> 홈
        </Link>

        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Terms
        </div>
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">이용약관</h1>
        <p className="mt-3 text-xs text-muted-foreground">시행일자: {UPDATED}</p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          oh-my-design은 무료 오픈소스 프로젝트로, 디자인 시스템 레퍼런스 카탈로그,
          본 웹사이트, CLI, 그리고 레퍼런스 수집 스킬을 제공합니다. 서비스는
          &ldquo;있는 그대로&rdquo; 제공되며, 본 약관은 이용에 관한 기본 사항을 안내합니다.
        </p>

        <Section n={1} title="목적 및 제공 서비스">
          <p>본 약관은 oh-my-design.kr 웹사이트·카탈로그, 오픈소스 CLI 및 레퍼런스 수집
            스킬 이용에 적용됩니다. 기존 MCP 패키지와 공개 커넥터는 종료했으며 과거 소스
            코드로만 보존합니다. 회원가입은 없으며 서비스는
            무료입니다. 운영자는 서비스의 전부 또는 일부를 언제든 변경·중단할 수 있습니다.</p>
        </Section>

        <Section n={2} title="이용자의 의무(금지행위)">
          <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>서비스를 남용·과부하·방해하는 행위(자동 트래픽은 요청 제한이 적용되며 과도한 이용은 차단될 수 있음)</li>
            <li>위법한 목적의 이용 또는 타인의 권리 침해</li>
            <li>카탈로그를 자신의 제품인 것처럼 오인하게 하거나, 참조된 브랜드·Anthropic의 보증이 있는 것처럼 표시하는 행위</li>
          </ul>
        </Section>

        <Section n={3} title="콘텐츠 및 지식재산권">
          <p>카탈로그는 교육·참조 목적으로 실제 기업의 디자인 시스템을 설명합니다. 모든
            브랜드명·로고·상표는 각 권리자에게 귀속되며, oh-my-design은 이들과{" "}
            <strong className="font-medium text-foreground">제휴·후원·보증 관계가 없습니다.</strong>{" "}
            자체 코드는 저장소 라이선스를 따르는 오픈소스이며, 서술형 설명은 참조용으로
            부정확하거나 최신이 아닐 수 있습니다.</p>
        </Section>

        <Section n={4} title="종료된 커넥터">
          <p>기존 읽기 전용 Claude 커넥터는 더 이상 제공하지 않습니다. 스킬과 에이전트는
            로컬 파일 또는 공개 raw DESIGN.md URL을 직접 사용합니다. 과거 집계 기록의 처리는{" "}
            <Link href="/privacy/ko" className="underline underline-offset-2 hover:text-foreground">개인정보 처리방침</Link>
            을 참고하세요.</p>
        </Section>

        <Section n={5} title="보증의 부인 및 책임의 제한">
          <p>서비스와 카탈로그는 정확성·가용성·특정 목적 적합성을 포함한 어떠한 보증도
            없이 &ldquo;있는 그대로&rdquo; 및 &ldquo;이용 가능한 범위에서&rdquo; 제공됩니다. 관련 법령이
            허용하는 최대 범위에서, oh-my-design 및 운영자는 서비스 이용으로 발생하는
            간접·부수적·결과적 손해에 대해 책임지지 않습니다.</p>
        </Section>

        <Section n={6} title="약관의 변경 및 문의">
          <p>본 약관은 변경될 수 있으며, 변경 시 상단 시행일자를 갱신합니다. 문의는{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">gkffhdnls13@gmail.com</a>{" "}
            으로 연락해 주세요. (시행일자: {UPDATED})</p>
        </Section>
      </article>
    </div>
  );
}
