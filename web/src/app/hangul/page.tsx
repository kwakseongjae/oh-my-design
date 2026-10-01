import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import s from "./hangul.module.css";
import { HangulHero, MetricsCard } from "./hangul-hero";
import { SpecimenToggle } from "./specimen-toggle";
import { TornHeadline } from "./torn-headline";

const SITE_URL = "https://oh-my-design.kr";
const REPO = "https://github.com/kwakseongjae/oh-my-design";
const INSTALL =
  "npx oh-my-design-cli@latest install-skills --skills hangul --skills-only";

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
    images: [
      {
        url: "/hangul/og.png",
        width: 1200,
        height: 630,
        alt: "‘있어 / 요.’로 끊긴 제목과 CSS 한 줄로 고친 제목",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "‘있어요’가 두 줄로 갈렸습니다 — /hangul",
    description: DESCRIPTION,
    images: ["/hangul/og.png"],
  },
};

const SPECIMEN_FONT =
  'Arial, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
/** The eval's After face was Pretendard; this page loads it, so the HG-1 After shows the same face. */
const KOREAN_FIRST =
  '"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif';
const PRETENDARD_CSS =
  "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css";

function SectionHead({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={s.grid}>
      <div className="lg:col-span-7">
        <p className={s.kicker}>{eyebrow}</p>
        <h2 id={`${id}-title`} className={`${s.h2} mt-3`}>
          {title}
        </h2>
      </div>
      {children ? (
        <div
          className={`${s.lede} mt-5 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-end`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

function Dots({
  label,
  cells,
}: {
  label: string;
  cells: ("block" | "warn" | "clean")[];
}) {
  const cls = {
    block: s.dotBlock,
    warn: s.dotWarn,
    clean: s.dotClean,
  } as const;
  return (
    <div className={s.dotRow}>
      <span className="font-semibold">{label}</span>
      <span
        className="flex flex-wrap gap-2"
        role="img"
        aria-label={`${label}: BLOCK ${cells.filter((c) => c === "block").length}, WARN ${cells.filter((c) => c === "warn").length}, 통과 ${cells.filter((c) => c === "clean").length}`}
      >
        {cells.map((c, i) => (
          <span key={i} className={`${s.dot} ${cls[c]}`} />
        ))}
      </span>
    </div>
  );
}

const rep = <T,>(v: T, n: number): T[] => Array.from({ length: n }, () => v);

function Scene({
  id,
  title,
  rule,
  children,
  text,
}: {
  id: string;
  title: string;
  rule: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <article className={`${s.scene} ${s.grid}`} aria-labelledby={`${id}-h`}>
      <div className={s.sceneText}>
        <p className={`${s.ruleId} ${s.mono}`}>
          {id.toUpperCase().replace("HG", "HG-")}
        </p>
        <p className={`${s.note} mt-1 font-semibold`}>{rule}</p>
        <h3 id={`${id}-h`} className={`${s.h3} mt-4`}>
          {title}
        </h3>
        {text ? <div className={`${s.body} mt-3`}>{text}</div> : null}
      </div>
      {children ? <div className={s.sceneStage}>{children}</div> : null}
    </article>
  );
}

export default function HangulPage() {
  return (
    <div lang="ko" className={`${s.root} min-h-screen`}>
      {/* React 19 hoists this into <head>. OFL, variable dynamic subset (weight 45–920). */}
      <link
        rel="stylesheet"
        href={PRETENDARD_CSS}
        precedence="default"
        crossOrigin="anonymous"
      />

      <header className={s.wrap}>
        <div className={s.masthead}>
          <Link href="/" className={s.navLink}>
            <ArrowLeft className="size-4" aria-hidden /> oh-my-design
          </Link>
          <a href={`${REPO}/tree/main/skills/hangul`} className={s.navLink}>
            GitHub <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </header>

      <main>
        {/* 1 · Hero: the torn word */}
        <section aria-labelledby="hero-title" className={`${s.wrap} ${s.hero}`}>
          <div className={s.heroMeta}>
            <p className={`${s.mono} text-lg font-bold`}>/hangul</p>
            <p className={s.note}>
              한글 조판 규칙 14가지 · AI 코딩 에이전트용 스킬
            </p>
          </div>

          <div className={s.grid}>
            <TornHeadline
              cta={
                <a href="#demo" className={`${s.btn} ${s.btnSolid}`}>
                  직접 폭 움직여 보기 ↓
                </a>
              }
            >
              <div>
                <h1 id="hero-title" className={s.heroH1}>
                  ‘있어요’가
                  <br />두 줄로 갈렸습니다
                </h1>
                <p className={`${s.lede} mt-5`}>
                  Codex CLI가 /hangul 없이 만든 실제 eval 페이지의 제목입니다.
                  아래에서 폭을 움직여 보세요. 어디서 끊기는지는 지금 보고 있는 기기의
                  글꼴이 정합니다. 제목에 CSS 한 줄을 더하면 어절째 다음 줄로
                  넘어갑니다.
                </p>
              </div>
            </TornHeadline>
          </div>
        </section>

        {/* 2 · Live demo (dark band) */}
        <section
          id="demo"
          aria-labelledby="demo-title"
          className={`${s.band} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="demo"
              eyebrow="직접 끊어 보기 · 실제 eval 화면 재현"
              title={<>같은 제목,<br />다른 글꼴, 다른 자리</>}
            >
              왼쪽 카드는 eval 원본 마크업 그대로입니다. 폭을 움직이면 끊기는
              자리가 따라 움직이고, 규칙을 켜면 어느 폭에서도 단어가 붙어
              있습니다.
            </SectionHead>
            <div className="mt-12 lg:mt-16">
              <HangulHero>
                <div>
                  <p className="font-semibold">다른 기기에서 잰 같은 제목</p>
                  <dl className="mt-3">
                    <div className={s.platformRow}>
                      <dt className={s.note}>
                        macOS · Apple SD Gothic Neo · 360px
                      </dt>
                      <dd
                        className={s.platformWord}
                        style={{ color: "var(--accent)" }}
                      >
                        ‘있어 / 요.’
                      </dd>
                    </div>
                    <div className={s.platformRow}>
                      <dt className={s.note}>
                        안드로이드 대용 · Noto Sans CJK KR · 360px
                      </dt>
                      <dd
                        className={s.platformWord}
                        style={{ color: "var(--accent)" }}
                      >
                        ‘있 / 어요.’
                      </dd>
                    </div>
                    <div className={s.platformRow}>
                      <dt className={s.note}>Windows · 맑은 고딕</dt>
                      <dd className={s.body}>
                        360px는 띄어쓰기에서 넘어가지만, 390px에서 ‘있 / 어요.’,
                        412px에서 ‘있어 / 요.’
                      </dd>
                    </div>
                    <div
                      className={s.platformRow}
                      style={{ borderBottom: "1px solid var(--line)" }}
                    >
                      <dt className={s.note}>규칙 적용 후</dt>
                      <dd className={s.platformWord}>
                        규칙 한 줄을 더하면 9개 조합 모두 끊긴 단어가
                        없었습니다.
                      </dd>
                    </div>
                  </dl>
                  <p className={`${s.note} mt-4`}>
                    ‘사람들이모아와’의 띄어쓰기 누락은 원본 마크업 그대로입니다.
                    680px 이하에서 숨긴 &lt;br&gt; 자리에 공백이 없습니다.
                    카피는 고치지 않았습니다.
                  </p>
                </div>
              </HangulHero>
            </div>
          </div>
        </section>

        {/* 3 · Four scenes */}
        <section
          id="scenes"
          aria-labelledby="scenes-title"
          className={`${s.wrap} ${s.section}`}
        >
          <SectionHead
            id="scenes"
            eyebrow="스킬 없이 만든 화면의 네 장면 · Codex 예시"
            title={<>눈에 보이는 실패는<br />이렇게 생겼습니다</>}
          >
            모두 Codex CLI가 스킬 없이 만든 eval 페이지에서 가져왔습니다. 같은
            조건의 Claude(Sonnet) 결과물에서는 이만큼 눈에 보이는 장면을 찾지
            못했습니다.
          </SectionHead>

          <div className="mt-12 lg:mt-20">
            <Scene
              id="hg10"
              rule="제목은 keep-all"
              title="제목이 단어 중간에서 끊긴다"
              text={
                <>
                  <p>
                    한국어 제목·버튼·라벨은 어절 단위로 줄을 바꿉니다(CSS Text 3
                    · klreq). 맨 위 데모가 이 규칙입니다. 폭을 움직이면 끊기는
                    자리가 따라 움직입니다.
                  </p>
                  <a
                    href="#demo"
                    className={`${s.inlineLink} mt-3 inline-flex min-h-11 items-center font-semibold`}
                  >
                    데모로 돌아가기 ↑
                  </a>
                </>
              }
            />

            <Scene
              id="hg1"
              rule="한글 글꼴을 스택 맨 앞에"
              title="숫자와 한글이 다른 글꼴로 찍힌다"
            >
              <SpecimenToggle
                id="hg1"
                before={
                  <div
                    className="px-5 py-8 text-center"
                    style={{ fontFamily: SPECIMEN_FONT }}
                  >
                    <strong
                      style={{
                        fontSize: 35,
                        fontWeight: 750,
                        lineHeight: 1.25,
                      }}
                    >
                      320
                      <span style={{ fontSize: 20, marginLeft: 2 }}>
                        만 명+
                      </span>
                    </strong>
                  </div>
                }
                after={
                  <div
                    className="px-5 py-8 text-center"
                    style={{ fontFamily: KOREAN_FIRST }}
                  >
                    <strong
                      style={{
                        fontSize: 35,
                        fontWeight: 750,
                        lineHeight: 1.25,
                      }}
                    >
                      320
                      <span style={{ fontSize: 20, marginLeft: 2 }}>
                        만 명+
                      </span>
                    </strong>
                  </div>
                }
                beforeNote={
                  <>
                    스택이 Arial로 시작합니다. macOS에서 ‘320’과 ‘+’는 Arial,
                    ‘만 명’은 Apple SD Gothic Neo로 그려졌습니다(Chrome DevTools
                    Protocol로 측정).
                  </>
                }
                afterNote={
                  <>
                    한글 글꼴을 맨 앞에 두면 숫자와 한글이 한 글꼴로 찍힙니다.
                    eval의 After는 Pretendard였고, 이 페이지도 Pretendard를
                    불러와 같은 글꼴로 보여 줍니다. 불러오지 못하면 기기의 한글
                    글꼴로 그립니다.
                  </>
                }
              />
            </Scene>

            <Scene
              id="hg7"
              rule="제목 자간 하한 −0.03em"
              title="헤드라인 자간을 영문처럼 조인다"
            >
              <SpecimenToggle
                id="hg7"
                before={
                  <p
                    className="px-6 py-8"
                    style={{
                      fontFamily: SPECIMEN_FONT,
                      fontSize: 32,
                      fontWeight: 700,
                      lineHeight: 1.33,
                      letterSpacing: "-0.064em",
                    }}
                  >
                    내 돈의 모든 순간,
                    <br />더 가볍게.
                  </p>
                }
                after={
                  <p
                    className="px-6 py-8"
                    style={{
                      fontFamily: SPECIMEN_FONT,
                      fontSize: 32,
                      fontWeight: 700,
                      lineHeight: 1.33,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    내 돈의 모든 순간,
                    <br />더 가볍게.
                  </p>
                }
                beforeNote={
                  <>
                    eval 원본은 390px 화면의 44px 제목에 자간 −2.8px(약
                    −0.064em)였습니다. 여기서는 같은 em 값을 32px 제목에
                    적용했고, 글꼴은 그대로 두고 자간만 바꿉니다.
                  </>
                }
                afterNote={
                  <>
                    −0.03em. 제목을 잰 한국 서비스 65곳 중 음수 자간이 23곳,
                    그중 22곳이 −0.03em 이상이었습니다(예외 1곳 −0.05em). 이
                    하한은 공개 표준이 아니라 OmD의 실측 해석입니다.
                  </>
                }
              />
            </Scene>

            <Scene
              id="hg3"
              rule="11px 미만 금지"
              title="모바일에서 캡션을 8px까지 줄인다"
            >
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
                beforeNote={
                  <>
                    같은 eval 페이지의 680px 이하 규칙 그대로입니다. 지표 설명
                    8px, 지표 이름 10px.
                  </>
                }
                afterNote={
                  <>
                    모두 11px, 그리고 keep-all. 줄이 늘어도 어절 단위로
                    넘어갑니다. SEED의 가장 작은 글자 토큰은 11px, TDS는 13px
                    단계를 ‘안 읽어도 됨’으로 둡니다.
                  </>
                }
              />
            </Scene>
          </div>
        </section>

        {/* 4 · Eval (tinted) */}
        <section
          id="eval"
          aria-labelledby="eval-title"
          className={`${s.tinted} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="eval"
              eyebrow="/hangul 평가 · 2026-09-29 채점, 2026-09-30 재채점"
              title={<>같은 과제,<br />스킬 없이 18번 · 스킬로 18번</>}
            >
              Codex CLI와 Claude(Sonnet)에 한국어 UI 과제 3개를 3번씩 맡기고,
              결과 코드를 /hangul 체커로 채점했습니다.
            </SectionHead>

            <div className={`${s.grid} mt-14 gap-y-12 lg:mt-20`}>
              <div
                className="lg:col-span-6"
                style={{ borderTop: "2px solid var(--fg)", paddingTop: 20 }}
              >
                <p className="font-semibold">경고 이상 (BLOCK 또는 WARN)</p>
                <p className={`${s.bigFigure} ${s.num} mt-2`}>
                  <span className={s.figureBefore}>17/18</span>{" "}
                  <span className={s.figureArrow}>→</span> 0/18
                </p>
                <p className={s.note}>스킬 없이 → 스킬과 함께</p>
              </div>
              <div
                className="lg:col-span-6"
                style={{ borderTop: "2px solid var(--fg)", paddingTop: 20 }}
              >
                <p className="font-semibold">가장 심각한 등급(BLOCK)만</p>
                <p className={`${s.bigFigure} ${s.num} mt-2`}>
                  <span className={s.figureBefore}>10/18</span>{" "}
                  <span className={s.figureArrow}>→</span> 0/18
                </p>
                <p className={s.note}>스킬 없이 → 스킬과 함께</p>
              </div>
            </div>

            <div className={`${s.grid} mt-16 gap-y-12`}>
              <div className="lg:col-span-7">
                <Dots
                  label="Codex · 스킬 없이"
                  cells={rep("block" as const, 9)}
                />
                <Dots
                  label="Claude · 스킬 없이"
                  cells={[
                    ...rep("block" as const, 1),
                    ...rep("warn" as const, 7),
                    "clean",
                  ]}
                />
                <Dots label="Codex · 스킬" cells={rep("clean" as const, 9)} />
                <Dots label="Claude · 스킬" cells={rep("clean" as const, 9)} />
                <p
                  className={`${s.note} border-t pt-3`}
                  style={{ borderColor: "var(--line)" }}
                >
                  점 하나가 실행 하나입니다.{" "}
                  <span style={{ color: "var(--accent)" }}>●</span> BLOCK ·{" "}
                  <span style={{ color: "#d98a00" }}>●</span> WARN만 ·{" "}
                  <span style={{ color: "var(--fg-3)" }}>○</span> 통과
                </p>
              </div>
              <div className="space-y-8 lg:col-span-4 lg:col-start-9">
                <div>
                  <p className="font-semibold">Codex</p>
                  <p className={`${s.num} ${s.h3} mt-1`}>BLOCK 9/9 → 0/9</p>
                  <p className={`${s.body} mt-2`}>
                    모든 실행에서 제목 자간이 −0.03em보다 좁았습니다(HG-7). 눈에
                    보이는 장면은 모두 여기서 나왔습니다.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Claude (Sonnet)</p>
                  <p className={`${s.num} ${s.h3} mt-1`}>
                    BLOCK 1/9 · 경고 이상 8/9 → 0/9
                  </p>
                  <p className={`${s.body} mt-2`}>
                    대부분 본문 자간 −0.01em 또는 −0.02em(HG-6)이고, 8개 중
                    3개는 −0.01em 경고 하나뿐입니다. 9개 모두 360·390·1440px
                    렌더에서 끊긴 단어가 없었습니다. 실측 67곳 중 15곳도 본문에
                    음수 자간을 씁니다.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${s.grid} mt-16`}>
              <div className="lg:col-span-3">
                <p className={s.h3}>숫자를 읽을 때 알아 둘 한계</p>
              </div>
              <ol
                className={`${s.caveats} ${s.body} mt-4 lg:col-span-8 lg:col-start-5 lg:mt-0`}
              >
                <li>
                  채점기는 스킬 자신의 규칙을 씁니다. 스킬 쪽은 ‘hangul 스킬을
                  읽고 따르라’는 한 줄을 더 받았으니 0개는 어느 정도 예상된
                  결과입니다.
                </li>
                <li>
                  표본이 작습니다. 과제 3개 × 3회 × 채널 2개(Codex CLI, Claude
                  Sonnet)입니다.
                </li>
                <li>
                  채점은 소스 정적 검사이고, 렌더는 사례 확인에 썼습니다.
                  렌더에서 찾은 오탐을 계기로 체커를 두 번 고쳐 다시 채점했고,
                  17/18은 그대로였습니다.
                </li>
                <li>
                  eval 글꼴은 macOS 헤드리스 Chrome에서 확인했습니다. 맨 위
                  제목의 끊김만 Windows·안드로이드 대용 글꼴로 따로
                  확인했습니다.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* 5 · Measured 67 */}
        <section
          id="measured"
          aria-labelledby="measured-title"
          className={`${s.wrap} ${s.section}`}
        >
          <SectionHead
            id="measured"
            eyebrow="규칙의 근거"
            title="한국 서비스 67곳 실측"
          >
            OmD가 한국 서비스 67곳의 공개 웹 화면에서 잰 값입니다(2026-07-11~13
            캡처, 앱·로그인 화면 제외). 여기에 W3C klreq·CSS Text 명세와
            KRDS·SEED·TDS 공개 문서를 더해 규칙을 정했습니다.
          </SectionHead>
          <dl
            className="mt-12 lg:mt-20"
            style={{ borderBottom: "1px solid var(--line)" }}
          >
            {[
              {
                k: "본문 크기",
                v: "16px",
                d: "중앙값. 67곳 중 53곳이 14–17px",
              },
              {
                k: "본문 행간",
                v: "1.5",
                d: "중앙값. 수치로 잡힌 53곳 중 31곳이 1.4–1.6",
              },
              {
                k: "본문 자간",
                v: "0",
                d: "67곳 중 52곳이 정확히 0. 양수 자간은 0곳",
              },
              {
                k: "주 글꼴 Pretendard",
                v: "40/67",
                d: "한글 글꼴을 스택 맨 앞에 둔 곳은 49/67",
              },
              {
                k: "제목 자간",
                v: "−0.03em",
                d: "음수 자간 제목 23곳 중 22곳이 이 값 이상. 예외 1곳 −0.05em",
              },
            ].map((x) => (
              <div key={x.k} className={s.specRow}>
                <dt className="font-semibold">{x.k}</dt>
                <dd className={`${s.specValue} ${s.num}`}>{x.v}</dd>
                <dd className={s.body}>{x.d}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 6 · Install (dark band) */}
        <section
          id="install"
          aria-labelledby="install-title"
          className={`${s.band} ${s.section}`}
        >
          <div className={s.wrap}>
            <SectionHead
              id="install"
              eyebrow="설치"
              title="에이전트에게 규칙을 읽히세요"
            />
            <ol className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              <li className={s.step}>
                <p className={`${s.stepNum} ${s.num}`}>1</p>
                <p className={`${s.h3} mt-1`}>스킬만 설치</p>
                <pre className={`${s.code} ${s.mono} mt-4`}>
                  <code>{INSTALL}</code>
                </pre>
              </li>
              <li className={s.step}>
                <p className={`${s.stepNum} ${s.num}`}>2</p>
                <p className={`${s.h3} mt-1`}>에이전트에게 말하기</p>
                <p className={`${s.body} mt-4`}>
                  “이 화면 한글 줄바꿈이 이상해”, “한국어 랜딩 만들어 줘”처럼
                  말하면 됩니다. 한국어 UI를 만들 때 규칙을 적용하고(APPLY),
                  기존 코드는 점검합니다(AUDIT). DESIGN.md에 타이포 토큰이
                  있으면 그 값이 이깁니다.
                </p>
              </li>
              <li className={s.step}>
                <p className={`${s.stepNum} ${s.num}`}>3</p>
                <p className={`${s.h3} mt-1`}>체커로 확인</p>
                <pre className={`${s.code} ${s.mono} mt-4`}>
                  <code>
                    {
                      "node <스킬 폴더>/scripts/check.mjs <파일이나 폴더>\nnode <스킬 폴더>/scripts/render-check.mjs <URL>"
                    }
                  </code>
                </pre>
                <p className={`${s.note} mt-3`}>
                  render-check는 360·390·1440px에서 끊긴 단어를
                  찾습니다(playwright-core와 Chrome 필요).
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Sources */}
        <footer className={`${s.wrap} py-16 lg:py-20`}>
          <div className={s.grid}>
            <p className={`${s.h3} lg:col-span-3`}>출처</p>
            <ul
              className={`${s.sources} mt-4 lg:col-span-8 lg:col-start-5 lg:mt-0`}
            >
              <li>
                평가 수치·한계: skills/hangul/references/eval-2026-09.md (Codex
                CLI 0.158.0 gpt-6-astra, Claude sonnet, create-next-app 16.3.7
                템플릿)
              </li>
              <li>
                실측 수치: skills/hangul/references/measured-67.md (67곳,
                2026-07-11~13 캡처, 2026-09-29 집계)
              </li>
              <li>
                맨 위 제목: eval 실행 codex p1-A-r3의 .metrics-intro h2를 그대로
                옮긴 재현. 플랫폼별 끊김은 2026-09-30 GitHub Actions
                렌더(Windows Server 2025 + 맑은 고딕, Ubuntu 24.04 + Noto Sans
                CJK KR)와 macOS Chrome 154
              </li>
              <li>
                Claude 렌더 결과·자간 분포: OmD 런치 노트 v2(2026-09-30),
                skills/hangul/scripts/render-check.mjs 출력
              </li>
              <li>
                HG-1·HG-7·HG-3 장면 값(Arial/Apple SD Gothic Neo 측정, 44px
                −2.8px, 8px·10px): 같은 eval 페이지의 렌더 측정(런치 노트 v1).
                SEED 11px·TDS 13px: skills/hangul/references/rules.md
              </li>
              <li>
                본문 글꼴: Pretendard Variable(SIL OFL 1.1, jsDelivr의
                orioncactus/pretendard v1.3.9)
              </li>
            </ul>
          </div>
          <p
            className={`${s.note} mt-12 border-t pt-6`}
            style={{ borderColor: "var(--line)" }}
          >
            <a
              href={`${REPO}/tree/main/skills/hangul`}
              className={s.inlineLink}
            >
              skills/hangul
            </a>{" "}
            · oh-my-design
          </p>
        </footer>
      </main>
    </div>
  );
}
