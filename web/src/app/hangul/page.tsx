import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import s from "./hangul.module.css";
import { HangulHero, MetricsCard } from "./hangul-hero";
import { SpecimenToggle } from "./specimen-toggle";

const SITE_URL = "https://oh-my-design.kr";
const REPO = "https://github.com/kwakseongjae/oh-my-design";
const INSTALL = "npx oh-my-design-cli@latest install-skills --skills hangul --skills-only";

const TITLE = "/hangul — AI가 만든 한국어 화면의 조판을 고치는 스킬";
const DESCRIPTION =
  "‘있어요’가 ‘있어 / 요.’로 갈라지는 화면, 직접 폭을 움직여 확인해 보세요. W3C·KRDS 같은 공개 명세와 한국 서비스 67곳 실측을 AI 코딩 에이전트가 읽는 규칙으로 정리했습니다.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/hangul` },
  openGraph: {
    title: "‘있어요’가 두 줄로 갈렸습니다 — /hangul",
    description: DESCRIPTION,
    url: `${SITE_URL}/hangul`,
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/hangul/og.png", width: 1200, height: 630, alt: "‘있어 / 요.’로 끊긴 제목과 CSS 한 줄로 고친 제목" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "‘있어요’가 두 줄로 갈렸습니다 — /hangul",
    description: DESCRIPTION,
    images: ["/hangul/og.png"],
  },
};

const SPECIMEN_FONT = 'Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
const KOREAN_FIRST = '"Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif';

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-border py-14 md:py-20">
      <p className="text-sm font-semibold text-primary">{eyebrow}</p>
      <h2 id={`${id}-title`} className={`${s.h2} mt-2`}>
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Dots({ label, cells }: { label: string; cells: ("block" | "warn" | "clean")[] }) {
  const color = { block: "bg-destructive", warn: "bg-amber-500", clean: "bg-border" } as const;
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 shrink-0 text-sm text-muted-foreground">{label}</span>
      <span className="flex flex-wrap gap-1.5" role="img" aria-label={`${label}: BLOCK ${cells.filter((c) => c === "block").length}, WARN ${cells.filter((c) => c === "warn").length}, 통과 ${cells.filter((c) => c === "clean").length}`}>
        {cells.map((c, i) => (
          <span key={i} className={`size-4 rounded-full ${color[c]}`} />
        ))}
      </span>
    </div>
  );
}

const rep = <T,>(v: T, n: number): T[] => Array.from({ length: n }, () => v);

export default function HangulPage() {
  return (
    <div lang="ko" className={`${s.root} min-h-screen bg-background text-foreground`}>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="size-4" aria-hidden /> oh-my-design
        </Link>
        <a href={`${REPO}/tree/main/skills/hangul`} className="inline-flex min-h-11 items-center gap-1 text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
          GitHub <ArrowUpRight className="size-4" aria-hidden />
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Hero */}
        <section id="demo" aria-labelledby="hero-title" className="pb-14 pt-6 md:pb-20 md:pt-12">
          <p className="text-sm font-semibold text-primary">/hangul · 한글 조판 규칙 HG-10</p>
          <h1 id="hero-title" className={`${s.display} mt-3 max-w-3xl`}>
            ‘있어요’가
            <br />두 줄로 갈렸습니다
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            Codex CLI가 /hangul 없이 만든 실제 eval 페이지의 제목입니다. 폭을 움직여 보세요. 어디서 끊기는지는
            지금 보고 있는 기기의 글꼴이 정합니다. 제목에 CSS 한 줄을 더하면 어절째 다음 줄로 넘어갑니다.
          </p>
          <div className="mt-10">
            <HangulHero />
          </div>
          <div className="mt-8 rounded-xl border border-border p-4 text-sm md:p-5">
            <p className="font-semibold">같은 제목, 다른 글꼴, 다른 자리</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>macOS 글꼴(Apple SD Gothic Neo) 360px: ‘있어 / 요.’</li>
              <li>안드로이드 대용(Noto Sans CJK KR) 360px: ‘있 / 어요.’</li>
              <li>Windows(맑은 고딕) 360px는 띄어쓰기에서 넘어가지만, 390px에서 ‘있 / 어요.’, 412px에서 ‘있어 / 요.’</li>
              <li className="text-foreground">규칙 한 줄을 더하면 9개 조합 모두 끊긴 단어가 없었습니다.</li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              ‘사람들이모아와’의 띄어쓰기 누락은 원본 마크업 그대로입니다. 680px 이하에서 숨긴 &lt;br&gt; 자리에 공백이 없습니다. 카피는 고치지 않았습니다.
            </p>
          </div>
        </section>

        {/* Failure classes */}
        <Section id="scenes" eyebrow="스킬 없이 만든 화면의 네 장면 · Codex 예시" title="눈에 보이는 실패는 이렇게 생겼습니다">
          <p className="max-w-2xl text-muted-foreground">
            모두 Codex CLI가 스킬 없이 만든 eval 페이지에서 가져왔습니다. 같은 조건의 Claude(Sonnet) 결과물에서는 이만큼 눈에 보이는 장면을 찾지 못했습니다.
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <article>
              <p className="text-xs font-semibold text-muted-foreground">HG-10 · 제목은 keep-all</p>
              <h3 className={`${s.h3} mt-1`}>제목이 단어 중간에서 끊긴다</h3>
              <p className="mt-3 text-muted-foreground">
                한국어 제목·버튼·라벨은 어절 단위로 줄을 바꿉니다(CSS Text 3 · klreq). 맨 위 데모가 이 규칙입니다. 폭을 움직이면 끊기는 자리가 따라 움직입니다.
              </p>
              <a href="#demo" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary outline-none focus-visible:ring-2 focus-visible:ring-ring">
                데모로 돌아가기 ↑
              </a>
            </article>

            <article>
              <p className="text-xs font-semibold text-muted-foreground">HG-1 · 한글 글꼴을 스택 맨 앞에</p>
              <h3 className={`${s.h3} mt-1`}>숫자와 한글이 다른 글꼴로 찍힌다</h3>
              <div className="mt-3">
                <SpecimenToggle
                  id="hg1"
                  before={
                    <div className="px-5 py-6 text-center" style={{ fontFamily: SPECIMEN_FONT }}>
                      <strong style={{ fontSize: 35, fontWeight: 750, lineHeight: 1.25 }}>
                        320<span style={{ fontSize: 20, marginLeft: 2 }}>만 명+</span>
                      </strong>
                    </div>
                  }
                  after={
                    <div className="px-5 py-6 text-center" style={{ fontFamily: KOREAN_FIRST }}>
                      <strong style={{ fontSize: 35, fontWeight: 750, lineHeight: 1.25 }}>
                        320<span style={{ fontSize: 20, marginLeft: 2 }}>만 명+</span>
                      </strong>
                    </div>
                  }
                  beforeNote={
                    <>스택이 Arial로 시작합니다. macOS에서 ‘320’과 ‘+’는 Arial, ‘만 명’은 Apple SD Gothic Neo로 그려졌습니다(Chrome DevTools Protocol로 측정).</>
                  }
                  afterNote={
                    <>한글 글꼴을 맨 앞에 두면 숫자와 한글이 한 글꼴로 찍힙니다. eval의 After는 Pretendard였고, 이 페이지는 웹폰트를 싣지 않아 기기의 한글 글꼴로 보여 줍니다.</>
                  }
                />
              </div>
            </article>

            <article>
              <p className="text-xs font-semibold text-muted-foreground">HG-7 · 제목 자간 하한 −0.03em</p>
              <h3 className={`${s.h3} mt-1`}>헤드라인 자간을 영문처럼 조인다</h3>
              <div className="mt-3">
                <SpecimenToggle
                  id="hg7"
                  before={
                    <p className="px-5 py-6" style={{ fontFamily: SPECIMEN_FONT, fontSize: 32, fontWeight: 700, lineHeight: 1.33, letterSpacing: "-0.064em" }}>
                      내 돈의 모든 순간,
                      <br />더 가볍게.
                    </p>
                  }
                  after={
                    <p className="px-5 py-6" style={{ fontFamily: SPECIMEN_FONT, fontSize: 32, fontWeight: 700, lineHeight: 1.33, letterSpacing: "-0.03em" }}>
                      내 돈의 모든 순간,
                      <br />더 가볍게.
                    </p>
                  }
                  beforeNote={<>eval 원본은 390px 화면의 44px 제목에 자간 −2.8px(약 −0.064em)였습니다. 여기서는 같은 em 값을 32px 제목에 적용했고, 글꼴은 그대로 두고 자간만 바꿉니다.</>}
                  afterNote={<>−0.03em. 제목을 잰 한국 서비스 65곳 중 음수 자간이 23곳, 그중 22곳이 −0.03em 이상이었습니다(예외 1곳 −0.05em). 이 하한은 공개 표준이 아니라 OmD의 실측 해석입니다.</>}
                />
              </div>
            </article>

            <article>
              <p className="text-xs font-semibold text-muted-foreground">HG-3 · 11px 미만 금지</p>
              <h3 className={`${s.h3} mt-1`}>모바일에서 캡션을 8px까지 줄인다</h3>
              <div className="mt-3">
                <SpecimenToggle
                  id="hg3"
                  before={
                    <div className={s.phone}>
                      <MetricsCard />
                    </div>
                  }
                  after={
                    <div className={`${s.phone} ${s.ruleOn} ${s.captionsFixed}`}>
                      <MetricsCard />
                    </div>
                  }
                  beforeNote={<>같은 eval 페이지의 680px 이하 규칙 그대로입니다. 지표 설명 8px, 지표 이름 10px.</>}
                  afterNote={<>모두 11px, 그리고 keep-all. 줄이 늘어도 어절 단위로 넘어갑니다. SEED의 가장 작은 글자 토큰은 11px, TDS는 13px 단계를 ‘안 읽어도 됨’으로 둡니다.</>}
                />
              </div>
            </article>
          </div>
        </Section>

        {/* Eval */}
        <Section id="eval" eyebrow="/hangul 평가 · 2026-09-29 채점, 2026-09-30 재채점" title="같은 과제, 스킬 없이 18번 · 스킬로 18번">
          <p className="max-w-2xl text-muted-foreground">
            Codex CLI와 Claude(Sonnet)에 한국어 UI 과제 3개를 3번씩 맡기고, 결과 코드를 /hangul 체커로 채점했습니다.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border p-5">
              <p className="text-sm text-muted-foreground">경고 이상 (BLOCK 또는 WARN)</p>
              <p className={`${s.num} mt-2 text-4xl font-bold leading-[1.3]`}>
                17/18 <span className="text-muted-foreground">→</span> 0/18
              </p>
              <p className="mt-1 text-sm text-muted-foreground">스킬 없이 → 스킬과 함께</p>
            </div>
            <div className="rounded-2xl border border-border p-5">
              <p className="text-sm text-muted-foreground">가장 심각한 등급(BLOCK)만</p>
              <p className={`${s.num} mt-2 text-4xl font-bold leading-[1.3]`}>
                10/18 <span className="text-muted-foreground">→</span> 0/18
              </p>
              <p className="mt-1 text-sm text-muted-foreground">스킬 없이 → 스킬과 함께</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 rounded-2xl border border-border p-5">
            <Dots label="Codex · 스킬 없이" cells={rep("block" as const, 9)} />
            <Dots label="Claude · 스킬 없이" cells={[...rep("block" as const, 1), ...rep("warn" as const, 7), "clean"]} />
            <Dots label="Codex · 스킬" cells={rep("clean" as const, 9)} />
            <Dots label="Claude · 스킬" cells={rep("clean" as const, 9)} />
            <p className="pt-2 text-xs text-muted-foreground">
              점 하나가 실행 하나입니다. <span className="text-destructive">●</span> BLOCK ·{" "}
              <span className="text-amber-600 dark:text-amber-400">●</span> WARN만 · <span className="text-border">●</span> 통과
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-muted p-5">
              <p className="font-semibold">Codex</p>
              <p className={`${s.num} mt-1 text-lg font-bold`}>BLOCK 9/9 → 0/9</p>
              <p className="mt-1 text-sm text-muted-foreground">모든 실행에서 제목 자간이 −0.03em보다 좁았습니다(HG-7). 눈에 보이는 장면은 모두 여기서 나왔습니다.</p>
            </div>
            <div className="rounded-2xl bg-muted p-5">
              <p className="font-semibold">Claude (Sonnet)</p>
              <p className={`${s.num} mt-1 text-lg font-bold`}>BLOCK 1/9 · 경고 이상 8/9 → 0/9</p>
              <p className="mt-1 text-sm text-muted-foreground">
                대부분 본문 자간 −0.01em 또는 −0.02em(HG-6)이고, 8개 중 3개는 −0.01em 경고 하나뿐입니다. 9개 모두 360·390·1440px 렌더에서 끊긴 단어가 없었습니다. 실측 67곳 중 15곳도 본문에 음수 자간을 씁니다.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl border border-border p-5">
            <p className="font-semibold">숫자를 읽을 때 알아 둘 한계</p>
            <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
              <li>채점기는 스킬 자신의 규칙을 씁니다. 스킬 쪽은 ‘hangul 스킬을 읽고 따르라’는 한 줄을 더 받았으니 0개는 어느 정도 예상된 결과입니다.</li>
              <li>표본이 작습니다. 과제 3개 × 3회 × 채널 2개(Codex CLI, Claude Sonnet)입니다.</li>
              <li>채점은 소스 정적 검사이고, 렌더는 사례 확인에 썼습니다. 렌더에서 찾은 오탐을 계기로 체커를 두 번 고쳐 다시 채점했고, 17/18은 그대로였습니다.</li>
              <li>eval 글꼴은 macOS 헤드리스 Chrome에서 확인했습니다. 맨 위 제목의 끊김만 Windows·안드로이드 대용 글꼴로 따로 확인했습니다.</li>
            </ol>
          </div>
        </Section>

        {/* Measured 67 */}
        <Section id="measured" eyebrow="규칙의 근거" title="한국 서비스 67곳 실측">
          <p className="max-w-2xl text-muted-foreground">
            OmD가 한국 서비스 67곳의 공개 웹 화면에서 잰 값입니다(2026-07-11~13 캡처, 앱·로그인 화면 제외). 여기에 W3C klreq·CSS Text 명세와 KRDS·SEED·TDS 공개 문서를 더해 규칙을 정했습니다.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { k: "본문 크기", v: "16px", d: "중앙값. 67곳 중 53곳이 14–17px" },
              { k: "본문 행간", v: "1.5", d: "중앙값. 수치로 잡힌 53곳 중 31곳이 1.4–1.6" },
              { k: "본문 자간", v: "0", d: "67곳 중 52곳이 정확히 0. 양수 자간은 0곳" },
              { k: "주 글꼴 Pretendard", v: "40/67", d: "한글 글꼴을 스택 맨 앞에 둔 곳은 49/67" },
              { k: "제목 자간", v: "−0.03em", d: "음수 자간 제목 23곳 중 22곳이 이 값 이상. 예외 1곳 −0.05em" },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-border p-5">
                <dt className="text-sm text-muted-foreground">{x.k}</dt>
                <dd className={`${s.num} mt-1 text-3xl font-bold leading-[1.3]`}>{x.v}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{x.d}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Install */}
        <Section id="install" eyebrow="설치" title="에이전트에게 규칙을 읽히세요">
          <ol className="grid gap-6 md:grid-cols-3">
            <li className="min-w-0 rounded-2xl border border-border p-5">
              <p className="text-sm font-semibold">1 · 스킬만 설치</p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-3 text-[13px] leading-[1.5]">
                <code>{INSTALL}</code>
              </pre>
            </li>
            <li className="min-w-0 rounded-2xl border border-border p-5">
              <p className="text-sm font-semibold">2 · 에이전트에게 말하기</p>
              <p className="mt-3 text-muted-foreground">
                “이 화면 한글 줄바꿈이 이상해”, “한국어 랜딩 만들어 줘”처럼 말하면 됩니다. 한국어 UI를 만들 때 규칙을 적용하고(APPLY), 기존 코드는 점검합니다(AUDIT). DESIGN.md에 타이포 토큰이 있으면 그 값이 이깁니다.
              </p>
            </li>
            <li className="min-w-0 rounded-2xl border border-border p-5">
              <p className="text-sm font-semibold">3 · 체커로 확인</p>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-3 text-[13px] leading-[1.5]">
                <code>{"node <스킬 폴더>/scripts/check.mjs <파일이나 폴더>\nnode <스킬 폴더>/scripts/render-check.mjs <URL>"}</code>
              </pre>
              <p className="mt-2 text-sm text-muted-foreground">render-check는 360·390·1440px에서 끊긴 단어를 찾습니다(playwright-core와 Chrome 필요).</p>
            </li>
          </ol>
        </Section>

        {/* Sources */}
        <footer className="border-t border-border py-10 text-xs leading-[1.6] text-muted-foreground">
          <p className="font-semibold text-foreground">출처</p>
          <ul className="mt-2 space-y-1">
            <li>평가 수치·한계: skills/hangul/references/eval-2026-09.md (Codex CLI 0.158.0 gpt-6-astra, Claude sonnet, create-next-app 16.3.7 템플릿)</li>
            <li>실측 수치: skills/hangul/references/measured-67.md (67곳, 2026-07-11~13 캡처, 2026-09-29 집계)</li>
            <li>맨 위 제목: eval 실행 codex p1-A-r3의 .metrics-intro h2를 그대로 옮긴 재현. 플랫폼별 끊김은 2026-09-30 GitHub Actions 렌더(Windows Server 2025 + 맑은 고딕, Ubuntu 24.04 + Noto Sans CJK KR)와 macOS Chrome 154</li>
            <li>Claude 렌더 결과·자간 분포: OmD 런치 노트 v2(2026-09-30), skills/hangul/scripts/render-check.mjs 출력</li>
            <li>HG-1·HG-7·HG-3 장면 값(Arial/Apple SD Gothic Neo 측정, 44px −2.8px, 8px·10px): 같은 eval 페이지의 렌더 측정(런치 노트 v1). SEED 11px·TDS 13px: skills/hangul/references/rules.md</li>
          </ul>
          <p className="mt-4">
            <a href={`${REPO}/tree/main/skills/hangul`} className="underline underline-offset-2 hover:text-foreground">
              skills/hangul
            </a>{" "}
            · oh-my-design
          </p>
        </footer>
      </main>
    </div>
  );
}
