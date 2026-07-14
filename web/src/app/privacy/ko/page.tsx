import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ManageConsentButton } from "@/components/manage-consent-button";

const UPDATED = "2026년 6월 18일";

export const metadata: Metadata = {
  title: "개인정보 처리방침 — oh-my-design",
  description:
    "oh-my-design이 수집하는 최소한의 정보(익명 이용 통계, 계정·광고 없음)를 쉬운 말로 정리했습니다.",
  alternates: {
    canonical: "/privacy/ko",
    languages: { en: "/privacy", ko: "/privacy/ko" },
  },
};

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-base font-semibold tracking-tight text-foreground">
        제{n}조 ({title})
      </h2>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyKoPage() {
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
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">EN</Link>
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
          Privacy
        </div>
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
          개인정보 처리방침
        </h1>
        <p className="mt-3 text-xs text-muted-foreground">시행일자: {UPDATED}</p>

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          oh-my-design은 회원가입·로그인이 없는 오픈소스 서비스입니다. 이름·이메일
          등 개인을 식별하는 정보를 요청하지 않으며, 데이터를 판매하거나 광고에
          이용하지 않습니다. 서비스 개선을 위해 수집하는 익명 이용 통계의 범위를
          아래와 같이 안내합니다.
        </p>

        <Section n={1} title="개인정보의 처리 목적">
          <p>서비스 개선 및 이용 통계 분석(어떤 페이지·레퍼런스가 유용한지 파악),
            오류 진단을 목적으로만 익명 이용 데이터를 처리합니다.</p>
        </Section>

        <Section n={2} title="처리하는 개인정보 항목">
          <p>이용 행태 이벤트(페이지·레퍼런스 조회, select/generate/download/copy),
            쿠키 및 브라우저 로컬스토리지 식별자. 동의 배너 노출 판단을 위한
            대략적 국가(EEA 여부 판별용)는 서버에서 일시적으로만 확인하며 저장하지
            않습니다. IP 주소는 Mixpanel 및 자체 카운터에 저장하지 않습니다.</p>
        </Section>

        <Section n={3} title="개인정보의 처리 및 보유 기간">
          <p>Google Analytics 이벤트 데이터는 GA4 설정값(최대 14개월)에 따라 보유
            후 파기합니다. 자체 인기 카운터는 누적 합계만 보관하며 개인정보를
            포함하지 않습니다.</p>
        </Section>

        <Section n={4} title="개인정보 처리의 위탁">
          <p>원활한 서비스 제공을 위해 아래와 같이 개인정보 처리 업무를 위탁하고
            있습니다.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Google LLC (Google Analytics, Search Console) — 이용 통계 및 검색 성과 분석</li>
            <li>Mixpanel, Inc. — 제품 이용 행태 분석</li>
            <li>Vercel, Inc. — 웹사이트 호스팅</li>
            <li>Upstash, Inc. — 인기 레퍼런스 집계(개인정보 미포함)</li>
            <li>OpenRouter, Inc. — 커넥터 vibe 검색용 임베딩 계산(검색어 미저장)</li>
          </ul>
        </Section>

        <Section n={5} title="개인정보의 국외 이전">
          <p>위 수탁자는 국외에서 서비스를 운영하므로, 익명 이용 분석 데이터가
            국외로 이전됩니다.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li><strong className="font-medium text-foreground">이전받는 자(수탁자):</strong> Google LLC, Mixpanel Inc., Vercel Inc., OpenRouter Inc.</li>
            <li><strong className="font-medium text-foreground">이전 항목:</strong> 익명 이용 분석 이벤트, 쿠키·로컬스토리지 식별자 (IP·국가정보 미전송)</li>
            <li><strong className="font-medium text-foreground">이전 국가:</strong> 미국(United States)</li>
            <li><strong className="font-medium text-foreground">이전 일시 및 방법:</strong> 서비스 이용 시점에 네트워크를 통해 전송</li>
            <li><strong className="font-medium text-foreground">이용 목적 및 보유 기간:</strong> 이용 통계 분석 / 각 사업자의 보존 정책에 따름(GA 최대 14개월)</li>
            <li><strong className="font-medium text-foreground">안전장치:</strong> Google LLC는 EU–US Data Privacy Framework 자가인증, Mixpanel로의 이전은 EU 표준계약조항(SCC)에 따름.</li>
            <li><strong className="font-medium text-foreground">거부 방법 및 효과:</strong> EU·영국·스위스 외 지역은 배너의 &lsquo;Decline&rsquo; 또는 브라우저 설정·옵트아웃으로 거부 가능하며, 거부 시 분석 데이터가 수집되지 않습니다.</li>
          </ul>
          <p className="mt-2">Upstash, Inc.(인기 집계 호스팅)는 이벤트명과 레퍼런스
            ID만 저장하므로 개인정보를 국외로 이전하지 않습니다.</p>
        </Section>

        <Section n={6} title="정보주체의 권리·의무 및 행사 방법">
          <p>정보주체는 열람·정정·삭제·처리정지를 요구할 수 있으며,{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">gkffhdnls13@gmail.com</a>{" "}
            으로 요청할 수 있습니다.</p>
        </Section>

        <Section n={7} title="개인정보의 파기">
          <p>보유 기간이 경과한 개인정보는 지체 없이 파기합니다. 자체 카운터는
            개인정보를 보유하지 않습니다.</p>
        </Section>

        <Section n={8} title="쿠키 등 자동 수집 장치의 설치·운영 및 거부">
          <p>서비스는 쿠키 및 로컬스토리지를 사용합니다. 브라우저 설정에서 쿠키
            저장을 거부할 수 있으며,{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-foreground">Google Analytics 옵트아웃 애드온</a>{" "}
            으로 분석 수집을 차단할 수 있습니다.</p>
          <p>이미 동의하셨더라도 언제든{" "}
            <ManageConsentButton label="분석 동의 설정 다시 열기" />
            를 통해 철회(처리정지)할 수 있습니다.</p>
        </Section>

        <Section n={9} title="개인정보의 안전성 확보 조치">
          <p>최소 수집 원칙, 접근 통제, IP 미수집을 통해 개인정보를 안전하게
            관리합니다.</p>
        </Section>

        <Section n={10} title="개인정보 보호책임자">
          <p>개인정보 처리에 관한 문의·불만은{" "}
            <a href="mailto:gkffhdnls13@gmail.com" className="underline underline-offset-2 hover:text-foreground">gkffhdnls13@gmail.com</a>{" "}
            으로 연락해 주시기 바랍니다.</p>
        </Section>

        <Section n={11} title="권익침해 구제 방법">
          <p>아래 기관에 분쟁 해결·상담을 신청할 수 있습니다.</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>개인정보분쟁조정위원회 (1833-6972, kopico.go.kr)</li>
            <li>개인정보침해신고센터 (118, privacy.kisa.or.kr)</li>
            <li>대검찰청 (1301) · 경찰청 (182)</li>
          </ul>
        </Section>

        <Section n={12} title="종료된 Claude 커넥터(MCP)">
          <p>기존{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">oh-my-design.kr/api/mcp</code>{" "}
            읽기 전용 커넥터는 종료되어 HTTP 410을 반환합니다. 더 이상 검색 요청을 받거나,
            검색 문구를 임베딩 제공자에게 전송하거나, 커넥터 사용량을 기록하지 않습니다.
            과거 익명 집계 지표는 위 보유기간 정책에 따라 운영 백업에 남을 수 있습니다.</p>
        </Section>

        <Section n={13} title="처리방침의 변경">
          <p>본 방침의 내용이 변경되는 경우 본 페이지와 상단의 시행일자를 통해
            안내합니다. (시행일자: {UPDATED})</p>
        </Section>
      </article>
    </div>
  );
}
